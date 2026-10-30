---
id: finance-accounting.subscription-revenue-accounting
name: Subscription Revenue Accounting
description: "A deferred revenue ledger you can prove, written MRR, ARR and churn definitions, a monthly waterfall and MRR bridge, contract change rules and the audit and investor work that recurring revenue attracts."
category: business
version: 1.0.0
tags: [finance-accounting, subscription-revenue-accounting, founder, manager, team, saas, deferred-revenue, mrr, churn]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - board-meeting
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Subscription Revenue Accounting
          description: "Accounting for subscriptions and software: deferred revenue, monthly recurring revenue, churn and contract changes, for SaaS founders and finance teams."
          projects:
            - name: Subscription contract and plan inventory
              description: |-
                ## Purpose
                Every number in subscription accounting starts from knowing exactly what each customer bought: the plan, the price, the term, the billing frequency and the start and end dates. Most young SaaS companies have this split across a billing tool, a CRM and a folder of signed order forms that disagree with each other. Building one inventory, reconciled to what is actually billed, is the first job before any waterfall or MRR figure can be trusted.

                ## Milestones
                1. One list of every active subscription with customer, plan, price, currency, term, billing frequency and service dates.
                2. Each line traced to a signed order form, accepted online terms or a billing system record.
                3. Differences between the CRM, the billing system and the contracts listed with an owner for each.
                4. Non-standard terms such as free months, price locks or termination rights flagged in their own column.

                ## Notes
                Include customers on free trials and paused accounts in a separate tab. They are not revenue, but they are the most common source of miscounted MRR.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single subscription inventory covering every active customer, with each line traced to a contract or billing record and every mismatch assigned an owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export all active subscriptions from the billing system to a spreadsheet"
                - "Pull closed-won deals from the CRM for the same customers"
                - "Match each subscription to its signed order form or accepted online terms"
                - "List every mismatch in plan, price or dates and assign an owner to fix it"
                - "Flag free months, price locks and termination rights in a separate column"
            - name: Written MRR and ARR definitions
              description: |-
                ## Purpose
                Ask three people in a SaaS company what MRR is and you will often get three answers: one includes setup fees, one counts signed contracts that have not started, one divides annual contracts by twelve and another does not. A one-page definition, agreed by the founder and finance lead, stops board packs, investor updates and sales targets from quietly using different numbers.

                ## Milestones
                1. A written definition of MRR stating what is in (recurring subscription fees) and what is out (one-off fees, usage, taxes, credits).
                2. ARR defined as a multiple of MRR or separately, with the reason recorded.
                3. Rules written for annual and multi-year contracts, discounts, free months, paused accounts and foreign currency.
                4. The definition signed off by the founder or CFO and stored where everyone who reports metrics can find it.

                ## Notes
                Keep MRR distinct from recognised revenue and from bookings. Investors expect all three and will check they reconcile.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed one-page MRR and ARR definition covering at least six edge cases, used for the next board or investor report."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect every MRR or ARR figure reported in the last six months and how each was worked out"
                - "Write the in and out rules for setup fees, usage, credits, taxes and unstarted contracts"
                - "Agree the treatment of discounts, free months and foreign currency with the founder"
                - "Publish the signed definition in the finance folder and link it from the metrics dashboard"
                - "Review the MRR and ARR definitions against any new pricing or plan types @recurring(yearly)"
            - name: Deferred revenue account structure in the ledger
              description: |-
                ## Purpose
                Many subscription businesses post every invoice straight to revenue and fix it with one large journal at year end, which means management accounts are wrong eleven months out of twelve. Setting up the right balance sheet accounts for deferred revenue, unbilled receivables and customer credits lets each month show the revenue actually earned.

                ## Milestones
                1. Deferred revenue accounts created, split into current and non-current if multi-year prepayments exist.
                2. An unbilled receivables or contract asset account created for revenue earned before it is invoiced.
                3. Billing system items mapped so invoices post to deferred revenue rather than straight to income.
                4. Revenue accounts split by stream, for example subscription, usage, implementation and services.

                ## Notes
                Agree the account names and the current versus non-current split with your accountant before the first audit, so the chart does not need reworking later.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ledger holds separate deferred revenue, unbilled receivables and revenue stream accounts, and the next month's invoices post to deferred revenue automatically."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List where subscription invoices currently post in the ledger"
                - "Create deferred revenue, unbilled receivables and revenue stream accounts"
                - "Remap billing system products so invoices post to deferred revenue"
                - "Post a test invoice and check where each line lands in the ledger"
            - name: Revenue treatment map for every price book item
              description: |-
                ## Purpose
                Before revenue can be recognised consistently, each thing you sell needs a known treatment: subscription fees spread over the service period, usage recognised as it is consumed, implementation work spread or recognised as delivered depending on whether it is distinct. A short map from every price book item to its treatment turns the general revenue policy into instructions the billing and finance team can follow without asking.

                ## Milestones
                1. Every active price book item listed with its billing pattern.
                2. A recognition pattern recorded for each item: ratable over the term, as consumed, at a point in time or spread with the subscription.
                3. Items needing judgement, such as setup fees and bundled services, reviewed with your accountant or auditor.
                4. The map linked to the ledger revenue accounts each item posts to.

                ## Notes
                The overall policy belongs to the revenue recognition policy work. This map is the subscription team's working copy of it, one row per product code.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A treatment map covering 100 percent of active price book items, with judgement items signed off by the accountant or auditor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the full price book with product codes from the billing system"
                - "Record the billing pattern and service period for each product code"
                - "Assign a recognition pattern to every item and mark the ones needing judgement"
                - "Send the judgement items to your accountant or auditor with a short question for each"
            - name: Billing system to ledger data flow map
              description: |-
                ## Purpose
                Revenue numbers break most often at the joins: an integration that posts invoices but not credit notes, a payment app that books fees as revenue, a currency conversion done twice. Drawing how data moves from checkout or order form, through the billing system, into the ledger and on to reports shows where those joins are and which ones nobody checks.

                ## Milestones
                1. A diagram of every system that touches a subscription, from signup or order form to the financial reports.
                2. Each connection labelled with what it carries, how often it syncs and who owns it.
                3. Known gaps listed, such as credit notes, refunds or currency entered by hand.
                4. A control or reconciliation assigned to each gap.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page data flow map showing every system and connection, with an owner and a check named for each manual step."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every tool involved from signup or order form to the monthly reports"
                - "Draw the connections and note what data each one carries"
                - "Mark every step where someone types or uploads data by hand"
                - "Name a check and an owner for each manual step"
            - name: Opening deferred revenue balance rebuild
              description: |-
                ## Purpose
                If the deferred revenue figure on the balance sheet has never been built from contracts, it is probably a plug. Rebuilding it invoice by invoice, from the service dates of every prepayment still running, gives a balance you can defend to an auditor or acquirer and a clean starting point for the monthly waterfall.

                ## Milestones
                1. Every invoice with service dates extending past the rebuild date listed.
                2. The unearned portion of each invoice calculated by day.
                3. The rebuilt total compared with the ledger balance and the difference explained.
                4. A correcting journal agreed with your accountant and posted, with workings attached.

                ## Notes
                Pick a recent month end as the rebuild date rather than the start of the business. Corrections to earlier years are a conversation for your accountant, not a quiet journal.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rebuilt deferred revenue schedule at a chosen month end that agrees to the ledger after one documented correcting journal."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose the month end you will rebuild deferred revenue at"
                - "Export every invoice whose service period runs past that date"
                - "Calculate the unearned amount on each invoice using daily proration"
                - "Compare the rebuilt total with the ledger and write up the difference"
                - "Agree and post the correcting journal with your accountant"
            - name: Subscription customer data clean-up
              description: |-
                ## Purpose
                Wrong start dates, renewal dates left blank, customers set to the wrong currency and duplicate accounts after a merge all flow straight into deferred revenue and churn figures. A clean-up of the fields that drive revenue, followed by a short quarterly check, keeps the subscription records fit to report from.

                ## Milestones
                1. The fields that drive revenue identified: service start, service end, renewal date, billing frequency, currency, price.
                2. Blank, impossible or duplicate values found and corrected.
                3. Duplicate customer accounts merged with their history kept.
                4. A quarterly exception report set up for the same fields.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Zero blank or impossible values in the six revenue fields on the next quarterly exception report."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Run an export of the six fields that drive subscription revenue"
                - "Filter for blanks, end dates before start dates and duplicate customers"
                - "Correct or merge each exception and note the reason"
                - "Run the revenue field exception report and clear what it finds @recurring(quarterly)"
            - name: Churn and retention metric definitions
              description: |-
                ## Purpose
                Logo churn, gross revenue churn, net revenue retention and gross revenue retention are all quoted as churn, and each can be calculated monthly, annually or by cohort. Writing down which ones the company reports, with the formula and timing rules, prevents a flattering number in one deck and a different one in the next.

                ## Milestones
                1. The retention metrics the company will report chosen, with a formula for each.
                2. Timing rules written: when a cancellation counts, how notice periods and paused accounts are treated.
                3. A worked example calculated for last month using real numbers.
                4. The definitions added to the same page as the MRR and ARR definitions.

                ## Notes
                Decide whether a cancellation counts when notice is given or when service ends, and never switch without restating history.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written formulas for logo churn, gross revenue retention and net revenue retention, with timing rules and one worked monthly example."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every churn or retention figure the company has quoted externally"
                - "Choose the metrics to report and write the formula for each"
                - "Decide when a cancellation counts and how paused accounts are treated"
                - "Calculate last month's figures as a worked example"
            - name: Bookings, billings and revenue explained for the team
              description: |-
                ## Purpose
                Sales celebrates bookings, the founder watches cash and the accounts show revenue, and in a subscription business these three can be months apart. A short session with a worked example of one annual contract helps sales, customer success and leadership read finance reports without arguing about whose number is right.

                ## Milestones
                1. One annual contract worked through as a booking, an invoice, cash received and twelve months of revenue.
                2. A one-page explainer with the worked example and a glossary of ten terms.
                3. A thirty-minute session run with sales and customer success leads.
                4. Questions from the session added to the explainer.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-page explainer with a worked annual contract example, presented to the sales and customer success leads."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick one real annual contract to use as the worked example"
                - "Ask the agent to draft a one-page explainer and glossary from the example"
                - "Run a thirty-minute session with the sales and customer success leads"
                - "Add the questions raised to the explainer and share it"
            - name: Monthly deferred revenue waterfall
              description: |-
                ## Purpose
                Think of the waterfall as the schedule showing, for every invoice still being earned, how much revenue will be released in each future month. Updating it every close is what turns a year of annual prepayments into a correct monthly revenue line, and it is the first schedule an auditor or acquirer asks for.

                ## Milestones
                1. A waterfall with one row per invoice and one column per month of release.
                2. Opening balance plus billings less revenue released agreeing to the closing ledger balance each month.
                3. The release journal posted from the waterfall total, not estimated.
                4. Twelve consecutive months of waterfalls kept with the close support.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month the deferred revenue waterfall agrees to the ledger to the unit of currency, with the release journal posted from it by the fifth working day."
                cadence: rolling
              tasks:
                - "Set up the waterfall columns from the opening deferred revenue rebuild"
                - "Add new invoices, credits and cancellations to the waterfall @recurring(monthly:3)"
                - "Post the revenue release journal from the waterfall total"
                - "Agree the closing waterfall to the ledger and file it with the close support"
            - name: Monthly MRR bridge from opening to closing
              description: |-
                ## Purpose
                Investors and boards do not just want MRR, they want to know why it moved: new customers, expansion, contraction, churn and reactivation. A bridge built from customer-level data each month makes the movement visible and catches the classic error of an upgrade counted as a new customer.

                ## Milestones
                1. A bridge format agreed: opening MRR, new, expansion, contraction, churn, reactivation, closing MRR.
                2. Each movement built from customer-level changes, not a top-down plug.
                3. Closing MRR agreeing to the active subscription list at month end.
                4. A one-line explanation for any movement category that changes by more than an agreed threshold.

                ## Notes
                Start from the **Metrics log** template to keep the monthly bridge totals in one place.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A customer-level MRR bridge produced every month, with closing MRR agreeing to the active subscription list and no unexplained difference."
                cadence: rolling
              tasks:
                - "Agree the bridge categories and the threshold for a written explanation"
                - "Build the MRR bridge from customer-level subscription changes @recurring(monthly:5)"
                - "Agree closing MRR to the month-end active subscription list"
                - "Write a short note on any movement above the agreed threshold"
            - name: Billing system to ledger revenue reconciliation
              description: |-
                ## Purpose
                The billing system and the ledger should tell the same story about invoices, credits and deferred revenue, and often they do not once a sync fails or a credit note is raised by hand. A monthly reconciliation of billings, credits and deferred balances between the two catches the gap while it is one month old rather than twelve.

                ## Milestones
                1. Total invoiced, credited and refunded in the billing system agreed to the ledger for the month.
                2. Deferred revenue per the billing or revenue module agreed to the ledger balance.
                3. Reconciling items listed with an owner and a date to clear.
                4. Reconciliation signed and filed with the month-end support.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signed monthly reconciliation of billings, credits and deferred revenue between the billing system and ledger, with no reconciling item older than two months."
                cadence: rolling
              tasks:
                - "Reconcile invoices, credits and refunds between billing and the ledger @recurring(monthly:4)"
                - "Agree the billing system deferred balance to the ledger"
                - "Log each reconciling item with an owner and a clear-by date"
                - "Sign the reconciliation and file it with the close support"
            - name: Unbilled receivables and contract asset review
              description: |-
                ## Purpose
                Usage billed in arrears, ramped contracts and invoices raised after the service starts all create revenue that has been earned but not yet invoiced. Left unreviewed, these balances grow quietly and auditors treat them with suspicion. A monthly review proves each one will be billed and clears the ones that will not.

                ## Milestones
                1. A schedule of every unbilled receivable or contract asset with customer, amount and expected invoice date.
                2. Items older than the normal billing cycle investigated.
                3. Amounts that will not be billed written back with approval.
                4. The schedule agreed to the ledger balance each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An unbilled receivables schedule agreeing to the ledger each month, with every item older than ninety days explained or written back."
                cadence: rolling
              tasks:
                - "List every unbilled receivable with its expected invoice date"
                - "Review unbilled balances and chase anything past its invoice date @recurring(monthly:7)"
                - "Write back amounts that will not be billed, with approval recorded"
                - "Agree the unbilled schedule to the ledger balance"
            - name: Contract changes log for upgrades, downgrades and cancellations
              description: |-
                ## Purpose
                Mid-term upgrades, seat reductions, plan swaps and early cancellations are where subscription revenue most often goes wrong, because each one changes the waterfall, the MRR bridge and sometimes the invoice. A weekly log of every change, with its effective date and accounting treatment, means the month-end work is a review rather than a hunt.

                ## Milestones
                1. A log with customer, change type, old and new price, effective date and treatment.
                2. Every change in the billing system for the week matched to a log entry.
                3. Treatment recorded for each change: prospective, catch-up, credit note or no accounting effect.
                4. The log used as the source for the month's MRR bridge movements.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every subscription change in the month appears in the log with an effective date and treatment before the MRR bridge is built."
                cadence: rolling
              tasks:
                - "Set up the contract changes log with the six agreed columns"
                - "Log the week's upgrades, downgrades and cancellations from the billing system @recurring(weekly:fri)"
                - "Mark the accounting treatment for each change"
                - "Flag changes needing a credit note to the billing team"
            - name: Monthly churn and retention metrics pack
              description: |-
                ## Purpose
                Retention is the number every SaaS investor and board turns to first, and a figure produced in a hurry before a meeting is usually the wrong one. Producing the agreed churn and retention metrics every month, from the same data as the MRR bridge, builds a trend line people can trust and shows problems while there is time to act.

                ## Milestones
                1. Logo churn, gross revenue retention and net revenue retention calculated monthly from the MRR bridge.
                2. A rolling twelve-month trend kept for each metric.
                3. The largest churned and contracted customers named with the reason given.
                4. The pack shared with the founder and customer success lead each month.

                ## Notes
                Start from the **Metrics log** template. Keep the formulas on the definitions page so the pack only holds numbers and comments.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly retention pack with three metrics, a twelve-month trend and named top churned customers, shared within eight working days of month end."
                cadence: rolling
              tasks:
                - "Create the retention pack layout with three metrics and a trend chart"
                - "Calculate the month's churn and retention figures from the MRR bridge @recurring(monthly:8)"
                - "Ask customer success for the reason behind each large churn or contraction"
                - "Send the pack to the founder and customer success lead"
            - name: Renewals look-ahead and auto-renewal checks
              description: |-
                ## Purpose
                Contracts that auto-renew at a new price, renewals that sales has agreed verbally on different terms and notice periods that pass unnoticed all surprise the books. Looking sixty days ahead at every renewal each month lets finance confirm the price, term and invoice before the new period starts.

                ## Milestones
                1. A list of renewals due in the next sixty days with current price, renewal price and notice date.
                2. Each renewal's terms confirmed with the account owner.
                3. Price uplifts and term changes entered in the billing system before the renewal date.
                4. Customers who have given notice moved to the expected churn list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every renewal in the next sixty days has confirmed terms in the billing system before its renewal date, each month."
                cadence: rolling
              tasks:
                - "Pull renewals due in the next sixty days with notice dates @recurring(monthly:20)"
                - "Confirm the renewal price and term with each account owner"
                - "Update the billing system for agreed uplifts and term changes"
                - "Move customers who gave notice to the expected churn list"
            - name: Credits, refunds and service credits register
              description: |-
                ## Purpose
                Goodwill credits, refunds for cancelled annual plans and service level credits after an outage all reduce revenue, but they are often raised by support or sales without finance seeing them. A register with approval rules means each one is booked against the right revenue and deferred balance, and the monthly total is visible to the people who grant them.

                ## Milestones
                1. An approval rule for credits and refunds by amount, written and shared with support and sales.
                2. A register listing each credit with customer, reason, amount, approver and accounting entry.
                3. Service level credits estimated where an outage has occurred but claims are not yet in.
                4. The monthly total reported to the support and sales leads.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every credit and refund in the month appears in the register with an approver and accounting entry, and the total is reported to support and sales."
                cadence: rolling
              tasks:
                - "Write a credit and refund approval rule with amount limits"
                - "Share the rule with the support and sales leads"
                - "Review the credits and refunds register and post the entries @recurring(monthly:12)"
                - "Estimate service level credits owed for any outage in the month"
            - name: Monthly usage and overage accrual
              description: |-
                ## Purpose
                Usage billed in arrears is earned in the month it is consumed, but the invoice often goes out weeks later. Accruing it at each month end from the product's usage data keeps revenue in the right month and shows whether usage pricing is growing or shrinking before the invoices confirm it.

                ## Milestones
                1. The source of usage data agreed with product or engineering, with a fixed extract time.
                2. Usage priced at contracted rates and accrued as unbilled revenue each month end.
                3. Last month's accrual compared with the actual invoices and the difference explained.
                4. Customers with committed minimums checked for shortfall billing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A usage accrual posted every month end from an agreed data extract, with the previous accrual trued up to invoices within five percent."
                cadence: rolling
              tasks:
                - "Agree the usage data extract and its timing with engineering"
                - "Price the month's usage and post the accrual @recurring(monthly:2)"
                - "Compare last month's accrual with the invoices raised"
                - "Check customers with committed minimums for any shortfall"
            - name: Quarterly recurring revenue pack for the board
              description: |-
                ## Purpose
                Boards of SaaS companies ask the same questions every quarter: ARR growth, retention, the size of the deferred revenue balance and how billings compare with revenue. A standard pack built from the monthly schedules answers them in the same format each time, so meetings discuss the business rather than the definitions.

                ## Milestones
                1. A one-page format with ARR, the quarter's MRR bridge, retention and deferred revenue movement.
                2. Each figure tied back to the monthly schedules it comes from.
                3. Commentary on the three biggest movements written by finance.
                4. The pack sent to the board with the rest of the papers.

                ## Notes
                Start from the **Board meeting** template. Keep the layout fixed for at least four quarters so trends are easy to read.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A recurring revenue page in every quarterly board pack, in the same format, with each figure tied to a monthly schedule."
                cadence: cyclic
              tasks:
                - "Draft the one-page board layout for recurring revenue metrics"
                - "Build the quarter's recurring revenue pack from the monthly schedules @recurring(quarterly)"
                - "Write commentary on the three largest movements"
                - "Check every figure against its source schedule before sending"
            - name: Failed payment and involuntary churn tracking
              description: |-
                ## Purpose
                Card failures and expired payment details quietly cancel a meaningful share of self-serve subscriptions, and the accounting question is when an unpaid subscription stops being revenue. Tracking failed payments and agreeing when an account moves from overdue to churned keeps MRR honest and shows how much retry and card update emails are recovering.

                ## Milestones
                1. A rule for when an unpaid self-serve subscription stops counting as MRR and stops earning revenue.
                2. A monthly count and value of failed payments, recoveries and involuntary churn.
                3. Revenue on accounts in the retry period reviewed for collectability.
                4. Results shared with whoever owns the retry and dunning settings.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written involuntary churn rule and a monthly figure for failed, recovered and churned payments reported to the dunning owner."
                cadence: rolling
              tasks:
                - "Agree when an unpaid subscription stops counting as MRR"
                - "Report failed, recovered and churned payment totals for the month @recurring(monthly:10)"
                - "Review revenue on accounts still in the retry period"
                - "Send the figures to the owner of the dunning settings"
            - name: Ratable recognition and daily proration
              description: |-
                ## Purpose
                Subscription fees are earned evenly over the service period, but monthly, daily and calendar-month methods give different answers for a contract starting on the 17th. Learning how each method works, and choosing one that matches your billing system, stops small differences from building into a reconciliation nobody can explain.

                ## Milestones
                1. Daily, monthly and half-month conventions worked through on one real contract.
                2. The method used by your billing or revenue tool identified.
                3. One method chosen for the waterfall and written into the definitions page.
                4. Leap years and mid-month starts tested in the waterfall formulas.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A chosen proration method written down, matching the billing tool, with a worked example for a mid-month start that agrees to the waterfall."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Take one annual contract that starts mid-month as a test case"
                - "Calculate its monthly revenue using daily and calendar-month methods"
                - "Find out which method your billing or revenue tool uses"
                - "Write the chosen method on the definitions page"
            - name: Accounting for mid-term upgrades and contract modifications
              description: |-
                ## Purpose
                When a customer adds seats in month five of an annual contract, the accounting standards treat it either as a new contract, a change going forward or, less often, a catch-up adjustment. Understanding which applies to your usual changes, and agreeing that view with your auditor, means each upgrade is booked the same way every time.

                ## Milestones
                1. The contract modification rules in the revenue standard you report under summarised in plain language.
                2. Your five most common change types listed with a worked example each.
                3. The treatment for each change type agreed with your accountant or auditor.
                4. The treatment added to the contract changes log as a dropdown.

                ## Notes
                Most SaaS seat additions at list price are treated as a separate contract or prospectively, but confirm this for your own terms. Discounted upgrades and term extensions are where judgement comes in.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written treatment for each of your five most common contract change types, agreed with your accountant or auditor."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the contract modification section of your revenue standard's guidance"
                - "List your five most common types of contract change"
                - "Work one real example of each change through the waterfall"
                - "Send the proposed treatments to your accountant or auditor for agreement"
            - name: Multi-year prepaid contracts and the non-current split
              description: |-
                ## Purpose
                Three years paid upfront is good for cash, but the deferred revenue belongs partly in non-current liabilities, and large prepayments may raise a question about a financing component. Knowing how to split and present these balances, and when to ask about financing, keeps the balance sheet right and avoids surprises in the audit.

                ## Milestones
                1. All contracts with more than twelve months prepaid identified.
                2. Deferred revenue split into amounts released within twelve months and after.
                3. The financing component question asked of your accountant for any large or long prepayment.
                4. The split built into the waterfall so it updates every month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The waterfall produces a current and non-current deferred revenue split each month, and the financing question is answered in writing for every prepayment over twelve months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Filter the inventory for contracts prepaid beyond twelve months"
                - "Add a current and non-current split column to the waterfall"
                - "Ask your accountant whether any prepayment has a financing component"
                - "Check the balance sheet presents the two amounts separately"
            - name: Setup, onboarding and implementation fees
              description: |-
                ## Purpose
                A one-off onboarding fee feels like revenue when it is invoiced, yet if the customer gets nothing useful from it without the subscription, it is often spread over the contract instead. Working through how your setup and implementation fees should be treated, and documenting why, removes one of the most frequent audit adjustments in young SaaS companies.

                ## Milestones
                1. Every one-off fee type you charge listed with what the customer actually receives.
                2. Each fee assessed for whether it delivers something useful on its own.
                3. A treatment and reasoning agreed with your accountant for each fee type.
                4. The price book map and billing items updated to match.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written treatment for every one-off fee type, agreed with your accountant, reflected in the price book map and billing setup."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every one-off fee charged in the last twelve months"
                - "Describe what the customer receives for each fee in one sentence"
                - "Agree the treatment of each fee type with your accountant"
                - "Update the price book map and billing items to post accordingly"
            - name: Discounts, free months and ramped pricing
              description: |-
                ## Purpose
                Three free months on an annual deal, a first-year discount that steps up in year two and a founding customer price lock all change how much revenue belongs in each month. Learning to spread the total contract value across the whole term, rather than following the invoice, keeps revenue smooth and stops MRR jumping when a discount ends.

                ## Milestones
                1. Every active contract with free periods, ramps or time-limited discounts listed.
                2. Total contract value spread across the service period for each, with the gap to invoicing tracked as unbilled or deferred.
                3. The MRR treatment of each discount type written on the definitions page.
                4. Sales told which discount structures create accounting work and why.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Revenue for every ramped or discounted contract is spread across its term in the waterfall, with the MRR rule for each discount type written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find all contracts with free months, ramps or time-limited discounts"
                - "Spread each one's total value across its term in the waterfall"
                - "Write the MRR rule for each discount type"
                - "Brief the sales lead on which discount structures add accounting work"
            - name: Usage, overage and hybrid pricing treatment
              description: |-
                ## Purpose
                Platform fees with included usage, committed spend with drawdown, prepaid credits that expire and pay-as-you-go overage each follow a different revenue pattern. Mapping your hybrid model before it grows prevents revenue being recognised on billing rather than on delivery, and shows how expired credits should be handled.

                ## Milestones
                1. Each usage or credit element of your pricing described with how it is billed.
                2. The recognition pattern for included usage, overage, committed spend and prepaid credits written down.
                3. A rule for unused or expiring credits agreed with your accountant.
                4. Usage revenue reported separately from subscription revenue in management accounts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written recognition pattern for every usage and credit element of the pricing, including a rule for expiring credits agreed with the accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Describe each usage, credit or overage element in your current pricing"
                - "Note how and when each element is invoiced"
                - "Agree the treatment of unused and expiring credits with your accountant"
                - "Split usage revenue into its own line in the management accounts"
            - name: Free trials, paused accounts and freemium conversions
              description: |-
                ## Purpose
                Trials that convert on day fifteen, customers who pause for the off season and free tiers that upgrade mid-month all sit at the edge of both revenue and MRR. Working out when each one starts earning revenue and when it counts in MRR, and testing that the billing system agrees, removes a steady source of small but repeated errors in self-serve businesses.

                ## Milestones
                1. The trial, pause and free tier options in your product listed with how each is billed.
                2. A rule written for when a trial or free account first counts as revenue and as MRR.
                3. Paused accounts given a clear status in the MRR bridge, neither churned nor active, unless the definition says otherwise.
                4. Ten recent conversions and pauses tested against the billing system and waterfall.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written rules for trials, pauses and free tier upgrades on the definitions page, with ten recent cases tested against billing and the waterfall."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every trial, pause and free tier option the product offers"
                - "Decide when a converted trial first counts as revenue and as MRR"
                - "Give paused accounts their own status in the MRR bridge"
                - "Test ten recent conversions and pauses against the waterfall"
            - name: Spotting inflated ARR and MRR figures
              description: |-
                ## Purpose
                Contracted ARR that includes deals not yet live, one-off fees annualised, usage peaks multiplied by twelve and gross figures before credits all appear in pitch decks and acquisition data rooms. Knowing the common inflations helps a founder report honestly and helps a finance lead test the numbers they are given by a target, a partner or a new sales system.

                ## Milestones
                1. A checklist of at least eight common ways ARR and MRR are overstated.
                2. Your own last reported ARR tested against the checklist.
                3. Any difference between reported and definition-compliant ARR explained in writing.
                4. The checklist added to the investor due diligence folder.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A checklist of at least eight ARR inflation patterns, applied to the company's last reported ARR with any difference written up."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a checklist of common ways ARR and MRR get overstated"
                - "Test your last reported ARR figure against each item"
                - "Write up any difference between reported and compliant ARR"
                - "File the checklist in the due diligence folder"
            - name: Subscription billing platform choice
              description: |-
                ## Purpose
                Once plans, currencies and mid-term changes multiply, the billing tool that came with a payment provider can stop coping, and choosing a replacement is expensive to get wrong. Comparing two or three platforms on proration, revenue schedules, ledger sync and contract change handling, using your own awkward contracts as test cases, gives a decision finance and engineering can both defend.

                ## Milestones
                1. Requirements written, including your five hardest real contract scenarios.
                2. Three platforms shortlisted and each demonstrated against the scenarios.
                3. Total cost compared over three years, including implementation and per-transaction fees.
                4. A recommendation agreed by finance, engineering and the founder.

                ## Notes
                Start from the **Purchase decision** template. Ask every vendor to show a mid-term downgrade with a credit note live, not in slides.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written platform decision comparing three options against five real contract scenarios and three-year cost, approved by finance, engineering and the founder."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write down the five hardest contract scenarios you bill today"
                - "Shortlist three billing platforms that sync with your ledger"
                - "Book demonstrations and ask each vendor to run your scenarios"
                - "Compare three-year total cost including implementation"
                - "Record the decision and the reasons in the purchase decision page"
            - name: Revenue automation decision for the waterfall
              description: |-
                ## Purpose
                Spreadsheet waterfalls work well up to a few hundred invoices a month, then become slow, fragile and hard to audit. Deciding whether to move to the billing tool's revenue module, a dedicated revenue tool or a better structured spreadsheet, based on volume and the errors you actually see, avoids buying software too early or too late.

                ## Milestones
                1. Monthly invoice volume, contract change volume and time spent on the waterfall measured.
                2. Errors found in the last six months listed with their cause.
                3. Three options compared: improved spreadsheet, billing tool revenue module, dedicated revenue tool.
                4. A decision recorded with a volume trigger for revisiting it.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on how the waterfall will be produced, based on measured volume and error data, with a stated trigger for review."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record the hours spent on the waterfall over the next close"
                - "Count monthly invoices and contract changes for the last six months"
                - "List the waterfall errors found in that period and their causes"
                - "Compare the three automation options and record the decision"
            - name: Moving the deferred revenue waterfall out of spreadsheets
              description: |-
                ## Purpose
                Once the decision to automate is made, the migration itself needs care: historic schedules must be loaded, opening balances must agree and the first automated close needs a parallel run. Phasing the move over three closes protects the numbers while the team learns the new tool.

                ## Milestones
                1. Open contracts and remaining schedules loaded into the new tool.
                2. Opening deferred revenue in the tool agreed to the spreadsheet and ledger.
                3. Two closes run in parallel with differences explained.
                4. The spreadsheet retired and archived with the close support.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two parallel closes with the new tool agreeing to the spreadsheet waterfall within an agreed tolerance, followed by the spreadsheet's retirement."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree a migration date and a tolerance for parallel run differences"
                - "Load open contracts and remaining schedules into the new tool"
                - "Agree opening deferred revenue between the tool, spreadsheet and ledger"
                - "Run two closes in parallel and explain every difference"
                - "Archive the spreadsheet with the close support once signed off"
            - name: Billing in advance versus in arrears decision
              description: |-
                ## Purpose
                Billing annually in advance brings cash forward and creates deferred revenue; billing monthly in arrears is easier for customers but builds unbilled balances and collection risk. Comparing the accounting, cash and churn effects of each option on your own customer base turns a pricing preference into an informed decision.

                ## Milestones
                1. Current billing frequency and timing mix measured across the customer base.
                2. Cash, deferred revenue and unbilled effects modelled for each option.
                3. Churn and collection experience compared between monthly and annual customers.
                4. A recommended default billing pattern agreed with the founder and sales lead.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded default billing pattern, supported by a comparison of cash, balance sheet and churn effects on the current customer base."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Measure the split of customers billed monthly, annually and in arrears"
                - "Model cash and deferred revenue under each billing option"
                - "Compare churn and late payment between monthly and annual customers"
                - "Agree the default billing pattern with the founder and sales lead"
            - name: Annual prepayment discount policy
              description: |-
                ## Purpose
                Offering a discount for paying a year upfront is common, but the size of that discount is often set by sales instinct rather than by what the cash is worth and what it does to MRR. A written policy, with the discount tied to the value of the cash and the effect on reported MRR shown, keeps the trade honest.

                ## Milestones
                1. Current annual prepayment discounts listed by plan and customer.
                2. The value of receiving cash a year early worked out at your current cost of funds.
                3. The effect of each discount level on reported MRR and revenue shown.
                4. A maximum standard discount agreed and written into the sales playbook.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written annual prepayment discount policy with a maximum standard rate, approved by the founder and included in the sales playbook."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the annual prepayment discounts given in the last year"
                - "Work out what a year of early cash is worth to the business"
                - "Show how each discount level changes reported MRR"
                - "Agree a maximum standard discount with the founder"
            - name: Cancellation and refund terms that match the accounts
              description: |-
                ## Purpose
                Terms of service written by a template or a lawyer can give customers refund or termination rights that change how revenue must be recognised, and the finance team is rarely asked. Reviewing the termination, refund and price change clauses alongside your accounting treatment closes that gap before an auditor finds it.

                ## Milestones
                1. Termination, refund, renewal and price change clauses extracted from the standard terms and order form.
                2. Each clause compared with how the accounts currently treat cancellations and refunds.
                3. Mismatches raised with whoever owns the terms, with a proposed fix.
                4. Agreed changes reflected in the terms or in the accounting treatment.

                ## Notes
                Finance proposes and legal decides. Any change to customer terms needs whoever handles your legal work to review it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every termination, refund and price change clause in the standard terms checked against the accounting treatment, with mismatches resolved or logged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the termination, refund and renewal clauses from the standard terms"
                - "Compare each clause with how cancellations are booked today"
                - "Write up any mismatch with a proposed fix"
                - "Raise the mismatches with whoever owns the customer terms"
            - name: Constant currency MRR for multi-currency subscriptions
              description: |-
                ## Purpose
                When customers pay in several currencies, exchange rate moves can make MRR grow or shrink even when no customer changed anything. Reporting MRR at fixed budget rates alongside actual rates separates real growth from currency noise, which boards and investors increasingly expect.

                ## Milestones
                1. A fixed set of budget exchange rates chosen for the year.
                2. MRR calculated at both actual and constant rates each month.
                3. The currency effect shown as a separate line in the MRR bridge.
                4. The rate set and method written on the definitions page.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The monthly MRR bridge shows a separate currency effect line, using written constant rates set once a year."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose the budget exchange rates you will hold constant for the year"
                - "Add constant currency columns to the MRR bridge"
                - "Show the currency effect as its own line in the bridge"
                - "Record the rates and method on the definitions page"
            - name: Shortening the subscription revenue close
              description: |-
                ## Purpose
                Revenue is often the last thing finished at month end because the waterfall waits for billing, billing waits for sales and the MRR bridge waits for everything. Mapping the dependencies and moving the work that can be done before month end usually takes two or three days out of the revenue close.

                ## Milestones
                1. Current revenue close steps timed from month end to sign-off.
                2. Dependencies between sales, billing and finance mapped.
                3. At least three steps moved to the last week of the month.
                4. Revenue sign-off reached two working days earlier for two months running.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Revenue sign-off reached at least two working days earlier than the measured baseline for two consecutive months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Time each revenue close step at the next month end"
                - "Map which steps wait on sales, billing or another step"
                - "Move three steps into the last week of the month"
                - "Compare the next two sign-off dates with the baseline"
            - name: First external audit of deferred revenue
              description: |-
                ## Purpose
                For most SaaS companies, deferred revenue is the riskiest balance in their first audit, and auditors will test it contract by contract. Preparing the waterfall, contract evidence and treatment memos before fieldwork starts turns a week of requests into a few hours of answering questions.

                ## Milestones
                1. The year-end waterfall agreed to the ledger with every invoice traced to a contract.
                2. A sample-ready folder of order forms, invoices and service dates organised by customer.
                3. Short memos on setup fees, contract changes and discounts ready for the auditor.
                4. Auditor queries on revenue answered within two working days.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Fieldwork completes with deferred revenue evidence provided on request and no unexpected audit adjustment to revenue."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Ask the auditor for their revenue testing request list early"
                - "Agree the year-end waterfall to the ledger and trace each invoice"
                - "Organise order forms and invoices into one folder per customer"
                - "Ask the agent to draft short treatment memos from your notes"
                - "Track every revenue query with a response date"
            - name: Investor due diligence on recurring revenue
              description: |-
                ## Purpose
                In a fundraise or sale, the buyer's accountants will rebuild your ARR, retention and deferred revenue from raw data and compare it with your deck. Getting there first, with a data pack that reconciles metrics to the accounts, protects the valuation and shortens the process by weeks.

                ## Milestones
                1. A customer-level data pack covering at least twenty-four months of MRR by customer.
                2. ARR, retention and the MRR bridge reconciled to recognised revenue in the accounts.
                3. Known differences and one-off items explained in a short note.
                4. The pack placed in the data room with the definitions page.

                ## Notes
                Expect the buyer to recalculate net revenue retention using their own method. Show yours clearly and the reconciliation does the arguing for you.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A data room pack with twenty-four months of customer-level MRR reconciled to recognised revenue, delivered before the first diligence call."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Export twenty-four months of MRR by customer and month"
                - "Reconcile MRR and ARR to recognised revenue in the accounts"
                - "Write a note on differences and one-off items"
                - "Place the pack and the definitions page in the data room"
            - name: Annual price increase rollout accounting
              description: |-
                ## Purpose
                Yearly price rises touch the billing system, renewal invoices, deferred revenue and MRR all at once, and customers on price locks or older terms are easily caught by mistake. Planning the rollout with finance checks beforehand keeps the uplift visible as expansion MRR and stops credit notes flooding in afterwards.

                ## Milestones
                1. Customers in scope listed, with price locks and contract limits excluded.
                2. The expected MRR uplift calculated and agreed with the founder.
                3. New prices loaded and tested on a sample before the effective date.
                4. The actual uplift and resulting credits reported one month after rollout.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The annual price change goes live with locked customers excluded and the actual MRR uplift reported against plan within one month."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "List customers in scope and exclude those with price locks"
                - "Calculate the expected MRR uplift for the founder"
                - "Test the new prices on five sample accounts before go-live"
                - "Report actual uplift and credits one month after the change @recurring(yearly)"
            - name: Year-end deferred revenue cut-off
              description: |-
                ## Purpose
                At year end, every invoice raised, credit given and contract changed around the last days of the year must land in the right period, and annual subscription businesses often bill heavily in the final month. A cut-off checklist run each year end makes the deferred revenue balance and revenue figure right before the accountant or auditor arrives.

                ## Milestones
                1. Invoices and credits dated in the last and first five days of the year reviewed for service dates.
                2. Contract changes signed before year end but effective after checked for the correct period.
                3. The year-end waterfall, MRR bridge and billing reconciliation all signed off.
                4. A cut-off memo filed with the year-end support.

                ## Notes
                Start from the **Operational checklist** template so the same checks run each year.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed year-end cut-off checklist and memo, with all invoices and credits around year end tested for service dates."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Build the year-end cut-off checklist from the operational checklist template"
                - "List invoices and credits in the five days either side of year end"
                - "Check service dates and contract change effective dates for each"
                - "Run the year-end deferred revenue cut-off checklist @recurring(yearly)"
            - name: Billing migration cutover and revenue parallel run
              description: |-
                ## Purpose
                Moving subscriptions to a new billing platform is the moment revenue history is most likely to be lost: proration resets, renewal dates shift and customers are double billed. A dated cutover plan with a finance sign-off on migrated data and a parallel month protects both the customers and the accounts.

                ## Milestones
                1. A cutover date set outside the year end and the busiest renewal month.
                2. Migrated subscriptions agreed to the old system on price, dates and MRR.
                3. One month billed in the new system and checked against the old before switching off.
                4. Deferred revenue and MRR continuous across the cutover with no unexplained jump.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Cutover completed with migrated MRR and deferred revenue agreeing to the old system and no double billing reported in the first month."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Pick a cutover date away from year end and peak renewals"
                - "Agree migrated subscriptions to the old system on price, dates and MRR"
                - "Run one billing month in both systems and compare the invoices"
                - "Confirm deferred revenue and MRR are continuous across the cutover"
            - name: Founder-run subscription accounts before a finance hire
              description: |-
                ## Purpose
                Founders of early SaaS companies often keep the books themselves alongside selling and building, with a few hours a month to spare. A minimal routine, covering a simple waterfall, an MRR count and a check that invoices post to deferred revenue, keeps the numbers investor-ready until the first finance hire arrives.

                ## Milestones
                1. A two-hour monthly routine written down covering waterfall, MRR and billing checks.
                2. A simple spreadsheet waterfall and MRR count in use.
                3. An external accountant reviewing the revenue figures at least quarterly.
                4. A handover note ready for the first finance hire.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written two-hour monthly routine followed for three consecutive months, with a quarterly accountant review of revenue."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down a two-hour monthly routine for revenue and MRR"
                - "Block two hours for the monthly revenue routine @recurring(monthly:9)"
                - "Ask your accountant to review revenue figures each quarter"
                - "Keep a running handover note for the first finance hire"
            - name: New finance lead taking over SaaS revenue reporting
              description: |-
                ## Purpose
                Finance managers joining a subscription business inherit definitions nobody wrote down, a waterfall built by someone who has left and board metrics that may not reconcile. Spending the first ninety days testing what exists before changing it gives a clear view of what is reliable and what needs restating.

                ## Milestones
                1. Every existing revenue schedule, metric and report listed with its owner and source.
                2. Last quarter's MRR and deferred revenue recalculated independently.
                3. Differences between reported and recalculated figures explained.
                4. A ninety-day plan for fixes agreed with the founder or CFO.

                ## Notes
                Hold back on restating anything published until you can explain the difference, and agree the communication with leadership first.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An independent recalculation of last quarter's MRR and deferred revenue, with differences explained and a fix plan agreed within ninety days."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every revenue schedule and metric report you have inherited"
                - "Recalculate last quarter's MRR from customer-level data"
                - "Recalculate the deferred revenue balance from open invoices"
                - "Agree a ninety-day fix plan with the founder or CFO"
            - name: Revenue hand-offs between sales, billing and finance
              description: |-
                ## Purpose
                In a growing SaaS team, a deal closed in the CRM, set up in billing and booked in the ledger passes through three or four people, and errors happen at each hand-off. Agreeing what each team passes on, in what form and by when, reduces wrong invoices and late contract changes reaching finance after the close.

                ## Milestones
                1. The hand-offs from signed deal to invoice to ledger mapped with an owner for each.
                2. A required field list agreed for every new deal and contract change.
                3. A deadline set for changes to reach finance before month end.
                4. A monthly review of hand-off errors with sales and billing leads.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "An agreed hand-off standard with required fields and a month-end deadline, and a monthly error count that falls over three months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Map each hand-off from signed deal to ledger entry"
                - "Agree the required fields for new deals and contract changes"
                - "Set a cut-off day for changes to reach finance before month end"
                - "Review hand-off errors with the sales and billing leads @recurring(monthly:15)"
            - name: Moving from self-serve monthly plans to annual sales-led contracts
              description: |-
                ## Purpose
                Adding a sales team that signs annual and multi-year contracts changes the accounting overnight: order forms with custom terms, invoices in advance, deferred revenue and contract changes negotiated by hand. Preparing finance processes before the first enterprise deals arrive avoids retrofitting a year of contracts later.

                ## Milestones
                1. A standard order form agreed with fields finance needs: term, start date, billing frequency, price, discounts.
                2. A deal approval rule for non-standard terms that affect revenue.
                3. The waterfall and MRR bridge extended to handle annual and multi-year contracts.
                4. The first ten sales-led contracts reviewed by finance before signature.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standard order form and non-standard terms approval rule in use, with the first ten sales-led contracts reviewed by finance before signing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the fields finance needs on every sales-led order form"
                - "Agree a standard order form with the sales lead"
                - "Write an approval rule for non-standard revenue terms"
                - "Review each of the first ten sales-led contracts before signature"
            - name: Subscriptions sold through app stores and marketplaces
              description: |-
                ## Purpose
                Selling through mobile app stores or cloud marketplaces means the platform collects payment, takes a commission, handles refunds and sometimes sales tax, and pays out a net amount weeks later. Deciding whether revenue is reported gross or net of the platform's cut, and how to build MRR from platform reports, needs settling before those channels become a large share of revenue.

                ## Milestones
                1. Each platform's terms reviewed for who sets the price, handles refunds and is responsible to the customer.
                2. Gross or net presentation agreed with your accountant for each platform.
                3. MRR and deferred revenue built from platform subscription reports rather than payouts.
                4. Platform revenue shown as its own line in the management accounts.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written gross or net decision for each sales platform, agreed with the accountant, with MRR built from platform subscription reports."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download each platform's developer or seller terms"
                - "Note who sets prices, issues refunds and supports the customer"
                - "Agree gross or net presentation with your accountant"
                - "Build platform MRR from the subscription reports, not the payouts"
            - name: Capitalised sales commissions and their amortisation
              description: |-
                ## Purpose
                Under the main revenue standards, commissions paid only because a contract was won are usually capitalised and spread over the period the contract benefits, which can include expected renewals. For SaaS companies paying meaningful commissions, getting the asset and its amortisation right changes reported margins and is a common audit question.

                ## Milestones
                1. Commission plans reviewed to identify payments that are incremental to winning a contract.
                2. An amortisation period agreed with your accountant, with the reasoning written down.
                3. A schedule of capitalised commissions and monthly amortisation built.
                4. The monthly amortisation journal posted from the schedule.

                ## Notes
                A practical expedient may let you expense commissions where the amortisation period is one year or less. Confirm with your accountant whether it applies under the standard you report under.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capitalised commissions schedule with an agreed amortisation period, posting a monthly journal that agrees to the ledger."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect the current commission plans and twelve months of payouts"
                - "Mark which payments arise only because a contract was signed"
                - "Agree the amortisation period and reasoning with your accountant"
                - "Post the commission amortisation journal from the schedule @recurring(monthly:11)"
            - name: Remaining performance obligations disclosure
              description: |-
                ## Purpose
                Larger and listed subscription companies disclose how much contracted revenue is still to be recognised and when, often called remaining performance obligations. Building the calculation from the waterfall and the unbilled portion of signed contracts gives a forward view of revenue that investors value and auditors will test.

                ## Milestones
                1. Contracted but unbilled amounts for signed contracts added to the deferred revenue balance.
                2. The total split into amounts expected within twelve months and later.
                3. Any practical expedients used agreed with your auditor and noted.
                4. The figure reconciled to the waterfall and contract inventory.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A quarterly remaining performance obligations figure split by timing, reconciled to the waterfall and contract inventory."
                cadence: rolling
              tasks:
                - "Add contracted but unbilled amounts to the contract inventory"
                - "Split remaining obligations into within and beyond twelve months"
                - "Confirm which practical expedients apply with your auditor"
                - "Calculate and reconcile remaining performance obligations @recurring(quarterly)"
            - name: Cohort-based net revenue retention analysis
              description: |-
                ## Purpose
                A single net revenue retention figure hides whether recent customers behave like older ones. Building cohort tables by signup quarter, showing how each group's MRR grows or shrinks over time, reveals whether retention is improving and gives investors the view they ask for in later rounds.

                ## Milestones
                1. Customers grouped into cohorts by the quarter they first paid.
                2. MRR for each cohort tracked by quarter since start.
                3. Net and gross revenue retention calculated for each cohort.
                4. A short note on what the cohorts show, shared with the leadership team.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Quarterly cohort tables of MRR and retention for every cohort since launch, with a written summary shared with leadership."
                cadence: rolling
              tasks:
                - "Tag each customer with the quarter they first paid"
                - "Build the cohort table of MRR by quarter since start"
                - "Update the cohort tables and retention figures @recurring(quarterly)"
                - "Write a short note on what the latest cohorts show"
            - name: Acquired deferred revenue in a customer book purchase
              description: |-
                ## Purpose
                Buying another software business or its customer contracts brings deferred revenue and obligations to serve those customers, and the accounting under current standards differs from what many founders expect. Working through the acquired balances with your accountant before completion avoids surprises in the first post-deal revenue figures.

                ## Milestones
                1. The seller's deferred revenue and contract list obtained and tested against invoices.
                2. The accounting treatment of acquired contract balances agreed with your accountant.
                3. Acquired subscriptions loaded into your billing system with original service dates.
                4. Acquired MRR shown as its own line in the MRR bridge for the first year.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Acquired deferred revenue tested and its treatment agreed with the accountant before completion, with acquired MRR reported separately in the bridge."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Request the seller's deferred revenue schedule and contract list"
                - "Test a sample of the seller's balances against invoices and contracts"
                - "Agree the treatment of acquired balances with your accountant"
                - "Add an acquired MRR line to the bridge for the first year"
---

# Subscription Revenue Accounting

This area is for SaaS founders keeping their own books, finance managers who have inherited a subscription business and the small teams who share the work between sales, billing and finance. It starts with the foundations (a contract inventory, written MRR, ARR and churn definitions, a deferred revenue account structure and a rebuilt opening balance), moves through the monthly machinery of waterfalls, MRR bridges and billing to ledger reconciliations, then the skills behind proration, upgrades, setup fees and discounts, the decisions about billing platforms and automation, dated moments such as a first audit or investor due diligence, situations for founders and new finance leads, and finally specialist work on contract costs, remaining performance obligations and acquired customer books.

What repeats is the subscription close: usage accruals on the 2nd, the billing to ledger reconciliation on the 4th, the deferred revenue waterfall and MRR bridge in the first week, unbilled and credit reviews in the middle of the month, a weekly contract changes log, a renewals look-ahead on the 20th and a quarterly board pack, with yearly reviews of definitions, price changes and year-end cut-off. The Metrics log, Board meeting, Purchase decision and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
