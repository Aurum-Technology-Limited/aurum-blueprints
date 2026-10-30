---
id: finance-accounting.payment-processor-payout-reconciliation
name: Payment Processor Payout Reconciliation
description: "Every processor, marketplace and card reader payout traced back to its orders, fees, refunds and disputes through its own clearing account, so online sales in the books agree with the shop and the bank."
category: business
version: 1.0.0
tags: [finance-accounting, payment-processor-payout-reconciliation, small-business, founder, team, payouts, merchant-fees, chargebacks]
author: Aurum Technology
starter_structure:
  templates:
    - remediation-plan
    - month-end-close
    - operational-checklist
    - purchase-decision
    - metrics-log
    - onboarding-plan
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Payment Processor Payout Reconciliation
          description: "Matching card processor, marketplace and payment app payouts to orders, fees and refunds so online sales and the bank agree."
          projects:
            - name: Register of every payment channel and processor
              description: |-
                ## Purpose
                Online businesses rarely take money through one route: a card processor on the website, a wallet button, a marketplace, a card reader at events, an instalment provider at checkout. Listing every channel that collects money for the business, with the bank account it pays into and the ledger account it should land in, sets the scope of this area and usually turns up at least one forgotten account still holding a balance.

                ## Milestones
                1. A list of every processor, marketplace, wallet, card reader and instalment provider that takes money for the business.
                2. Each one recorded with account ID, currency, login owner and the bank account its payouts reach.
                3. Each channel matched to a ledger account, or flagged as having none.
                4. Dormant accounts that still hold a balance identified.

                ## Notes
                Check old checkout settings and the bank statement for deposits from names you do not recognise. A provider set up for one event three years ago can still be holding funds.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every channel that collects customer money with its payout bank account and ledger account, and no deposit source on the last three bank statements is unexplained."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every checkout option currently live on the website and in the shop"
                - "Search twelve months of bank statements for payout deposits by sender name"
                - "Record account ID, currency, login owner and payout bank account for each channel"
                - "Match each channel to its ledger account or flag it as missing"
            - name: Payout report archive for each processor
              description: |-
                ## Purpose
                Processor dashboards keep detailed data for a limited time and change their export formats without warning, yet the payout report is the only document that explains why a deposit is the amount it is. Downloading the monthly payout and balance reports for each processor into one folder gives every reconciliation a fixed source and gives the accountant evidence that does not depend on someone's login.

                ## Milestones
                1. A folder per processor, organised by year and month.
                2. Payout and balance reports saved for the current and previous financial year.
                3. One file naming pattern used throughout, such as processor, year, month and report type.
                4. Reports that can no longer be downloaded noted, with a support request raised where possible.

                ## Notes
                Save the report that lists every transaction inside each payout, not just the payout summary. The summary shows totals; the detail is what you will need to explain a difference.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Monthly payout detail reports for every processor in the register are saved by month for the current and previous financial year, with any gaps recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a report folder for each processor in the register"
                - "Find the report in each dashboard that lists the transactions within each payout"
                - "Download the current and previous financial year's payout detail reports"
                - "Save last month's payout detail report for every processor @recurring(monthly:2)"
            - name: Clearing account for each processor in the books
              description: |-
                ## Purpose
                Recording a payout as sales on the day it reaches the bank loses the fees, the refunds and the timing, and makes the books disagree with the shop's own sales report every month. A clearing account per processor, where gross sales go in, fees and refunds come out, and payouts move the balance to the bank, gives each processor its own small balance that should always explain itself.

                ## Milestones
                1. One clearing account per processor set up in the chart of accounts.
                2. Sales, fees, refunds, chargebacks and payouts all posting through it.
                3. Payout deposits in the bank feed coded as transfers from the clearing account, not as income.
                4. The clearing balance at any date equal to the processor's reported balance plus anything in transit.

                ## Notes
                Ask your accountant whether the clearing account should sit with current assets or with bank accounts in your software. Either works if it is used consistently.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every processor in the register has its own clearing account in the books, and last month's payouts are coded as transfers from it rather than as income."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree with your accountant where processor clearing accounts sit in the chart"
                - "Create one clearing account per processor in the accounting software"
                - "Recode last month's payout deposits as transfers from the clearing account"
                - "Write a one-paragraph note of how each processor's entries should flow"
            - name: Coding rules for fees, refunds and chargebacks
              description: |-
                ## Purpose
                Fees get coded to bank charges one month and cost of sales the next, refunds reduce sales for one processor and sit as an expense for another, and nobody can compare months. A short written rule for each line type that appears in a payout, agreed with whoever prepares the accounts, means anyone posting entries makes the same choice.

                ## Milestones
                1. Every line type found in the payout reports listed, from transaction fees to dispute fees and currency charges.
                2. An account and tax treatment chosen for each line type.
                3. The rules agreed with your accountant and saved where the bookkeeper can find them.
                4. Bank rules and connector settings changed to follow the written rules.

                ## Notes
                In many countries processor fees carry no sales tax or VAT, so a fee coded with tax added overstates what you can reclaim. Confirm the treatment with your accountant.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page coding sheet gives an account and tax code for every payout line type, agreed with the accountant and applied in the software settings."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every line type that appears in three months of payout reports"
                - "Propose an account and tax code for each line type"
                - "Send the coding sheet to your accountant for agreement"
                - "Update connector and bank rule settings to match the sheet"
                - "Review the coding sheet for new line types in the reports @recurring(yearly)"
            - name: Payout report column map
              description: |-
                ## Purpose
                Each processor names the same thing differently: amount, gross, net, fee, application fee, adjustment, available on. A column map for each report, saying which field is the order reference, which is gross, which is the fee and which ties lines to a payout, saves rediscovering it every month and is exactly what any spreadsheet or connector set-up will ask for.

                ## Milestones
                1. Each processor's payout detail report opened and every column listed.
                2. The fields for order reference, gross, fee, net, currency, type and payout ID identified.
                3. Sign conventions noted, such as refunds shown as negatives or as positives with a type.
                4. The map saved beside the report archive.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A column map for each processor names the fields for order reference, gross, fee, net, type and payout ID, with sign conventions noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open one month's payout detail report for each processor"
                - "Write down which columns hold gross, fee, net and the payout ID"
                - "Note how refunds and disputes are signed in each report"
                - "Save the column map in the report archive folder"
            - name: Settlement timing for each processor
              description: |-
                ## Purpose
                A sale on Friday night can reach the bank on Tuesday, a marketplace may pay fortnightly, and a new account may hold funds for a week. Writing down each processor's payout schedule, cut-off time and time zone explains most month-end differences in advance and tells the cash forecast when money really arrives.

                ## Milestones
                1. Payout frequency, delay in days and cut-off time recorded for each processor.
                2. The time zone each processor uses for its day boundary noted.
                3. Weekend and public holiday behaviour checked against two recent payouts.
                4. The timing table shared with whoever builds the cash forecast.

                ## Notes
                A processor that closes its day at midnight in another time zone will put late-evening sales into the next day's payout. That alone can explain a stubborn month-end gap.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A timing table gives payout frequency, delay, cut-off and time zone for every processor, checked against at least two actual payouts each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the payout schedule settings in each processor dashboard"
                - "Record the time zone each processor uses to close its day"
                - "Check two recent payouts per processor against the stated delay"
                - "Share the timing table with the person who runs the cash forecast"
            - name: Order number carried through to the processor
              description: |-
                ## Purpose
                Matching is quick when every processor line carries the shop's order number and slow when it carries only a random charge ID. Checking that the order or invoice number is passed into the processor's description or metadata field, for every checkout route, is a one-off set-up change that saves hours every month afterwards.

                ## Milestones
                1. One test order per checkout route traced from the shop to the processor report.
                2. Routes that drop the order number identified.
                3. Settings or integration changes made so the order number appears in the report.
                4. A fresh test order confirming the number now comes through.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A test order through every checkout route shows the shop's order number in the processor's payout detail report."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Place a small test order through each checkout route"
                - "Find each test order in the processor's transaction report"
                - "Ask the shop platform's support how to pass the order number to the processor"
                - "Repeat the test order after the setting change and check the report"
            - name: Opening clearing balance agreed per processor
              description: |-
                ## Purpose
                Reconciling from today forward only works if the starting point is right, and processor balances carried in the books are often a leftover number nobody can explain. Agreeing each clearing account at a chosen date to the processor's own balance report, and correcting the unexplained remainder with the accountant, gives every later month a clean base.

                ## Milestones
                1. A start date chosen, normally the last month end or the start of the financial year.
                2. The processor's balance at that date taken from its own report.
                3. The clearing account balance in the books compared and the difference listed.
                4. A correcting journal agreed with the accountant and posted, with the reasoning saved.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every clearing account in the books agrees to its processor's reported balance at the chosen start date, with any correcting journal documented."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the reconciliation start date with your accountant"
                - "Download each processor's balance report as at that date"
                - "List the difference between each processor balance and its clearing account"
                - "Post the agreed correcting journal and save the working behind it"
            - name: Unreconciled payouts backlog assessment
              description: |-
                ## Purpose
                Many small businesses discover payout trouble when the accountant asks why sales in the books are lower than the shop says, by which point a year of payouts may be unchecked. Measuring the backlog by processor and month, with an estimate of the hours each will take, turns a vague worry into a plan you can schedule or hand to someone.

                ## Milestones
                1. Each processor's last reconciled month identified.
                2. The number of unreconciled payouts per processor counted.
                3. Months with refunds, disputes, reserves or currency conversions flagged as slower to clear.
                4. An hours estimate and a target finish date written for the catch-up.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A backlog table shows unreconciled months and payouts per processor, with an hours estimate and an agreed finish date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the last fully reconciled month for each processor"
                - "Count the payouts in each unreconciled month"
                - "Flag months containing disputes, reserves or currency conversions"
                - "Estimate the hours and set a target date to clear the backlog"
            - name: Catch-up payout reconciliation, oldest month first
              description: |-
                ## Purpose
                Working backwards from the latest month means every difference found shifts a figure you already agreed, so catch-ups that start at the end tend to be redone. Starting from the oldest unreconciled month, closing each one before opening the next and carrying a running list of unresolved items keeps progress real and hands the accountant finished months as you go.

                ## Milestones
                1. The oldest unreconciled month reconciled and its clearing balance agreed.
                2. Each later month closed in order, with its open items carried forward.
                3. Unresolved items older than three months put to the accountant for a decision.
                4. The clearing account agreed to the processor balance at the latest month end.

                ## Notes
                Start from the **Remediation plan** template. Set a weekly block of time and a fixed number of months per block rather than trying to clear everything at once.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every backlog month is reconciled in order, each clearing account agrees to the processor balance at the latest month end, and old unresolved items have recorded decisions."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Set up a remediation plan with one row per backlog month"
                - "Reconcile the oldest month and agree its closing clearing balance"
                - "Carry unresolved items into a running list for the following month"
                - "Send unresolved items more than three months old to the accountant"
            - name: Weekly payout matching session
              description: |-
                ## Purpose
                Payouts arrive several times a week, and matching them while the week is fresh takes minutes, whereas matching a month at a time means searching for orders nobody remembers. A short weekly session to tie each deposit in the bank to its payout report keeps the clearing account current and catches a missing payout within days.

                ## Milestones
                1. A fixed weekly slot in the calendar with a named owner.
                2. Every processor deposit in the bank matched to a payout ID.
                3. Any expected payout that has not arrived flagged the same week.
                4. Eight consecutive weekly sessions completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks in which every processor deposit in the bank was matched to a payout ID within seven days of arriving."
                cadence: rolling
              tasks:
                - "Book a recurring thirty minute slot for payout matching"
                - "Match the week's processor deposits in the bank to their payout IDs @recurring(weekly:tue)"
                - "Flag any expected payout that has not reached the bank"
                - "Add the week's unmatched lines to the chase list"
            - name: Monthly clearing account reconciliation
              description: |-
                ## Purpose
                The clearing account is where the real test happens: at month end its balance should equal what the processor says it holds, plus anything already sent but not yet in the bank. Doing that agreement for each processor every month, with a saved working paper, is what lets the sales figure in the management accounts be trusted.

                ## Milestones
                1. A working paper per processor showing book balance, processor balance and in-transit payouts.
                2. Each month's difference explained to nil or listed item by item.
                3. The working paper reviewed by a second person where the team allows.
                4. Twelve consecutive months reconciled within ten working days of month end.

                ## Notes
                Start from the **Month-end close** template and add one line for each processor.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each processor's clearing account is reconciled to its processor balance within ten working days of every month end, with a saved working paper."
                cadence: rolling
              tasks:
                - "Add a line for each processor to the month-end close checklist"
                - "Reconcile each clearing account to the processor's month-end balance @recurring(monthly:6)"
                - "Save the working paper beside that month's payout reports"
                - "Ask a second person to review and initial the working paper"
            - name: Monthly bridge from shop sales to bank deposits
              description: |-
                ## Purpose
                Owners usually trust the shop dashboard's sales figure and are puzzled when the bank shows less. A monthly bridge that starts at gross sales in the shop and walks down through refunds, discounts, fees, disputes, reserves and timing to the cash actually received answers the question once, in a format the owner and the accountant can both read.

                ## Milestones
                1. A bridge layout from shop gross sales to bank deposits, one line per reason.
                2. Each line sourced from a named report.
                3. Any unexplained residual below an agreed small threshold.
                4. The bridge attached to each month's management accounts pack.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A bridge from shop gross sales to bank deposits is produced for six consecutive months, each with an unexplained residual below the agreed threshold."
                cadence: rolling
              tasks:
                - "Draft a bridge layout from gross shop sales down to bank deposits"
                - "Agree a small unexplained residual threshold with your accountant"
                - "Build last month's bridge and attach it to the management pack @recurring(monthly:9)"
                - "Ask the agent to draft a plain-language note on the month's largest bridge lines"
            - name: Refund and partial refund review
              description: |-
                ## Purpose
                Refunds are where payouts and orders drift apart: a refund issued in the processor but not in the shop, a partial refund keyed as a full one, a refund paid through a different processor from the sale. A monthly look at every refund, matched to the original order and the shop's own refund record, catches the errors that quietly understate or overstate sales.

                ## Milestones
                1. A monthly list of refunds from each processor.
                2. Each refund matched to an original sale and to the shop's refund record.
                3. Refunds with no matching shop record, or a different amount, followed up.
                4. Refund fees, and any fee the processor returns, coded under the agreed rules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every refund for six consecutive months is matched to its original sale and shop refund record, with mismatches followed up and recorded."
                cadence: rolling
              tasks:
                - "Export last month's refunds from every processor"
                - "Match each refund to its original order and the shop's refund record @recurring(monthly:13)"
                - "Follow up refunds with no shop record with whoever issued them"
                - "Check whether each processor returns the original fee on a refund"
            - name: Chargeback and dispute ledger
              description: |-
                ## Purpose
                A dispute takes money out of the processor balance immediately, adds a fee, and may come back weeks later if you win, so payouts during a dispute never look like the sales behind them. A ledger of open disputes with the amount held, the fee, the response deadline and the outcome keeps the clearing account explainable and shows how much is at risk at any month end.

                ## Milestones
                1. One ledger listing every open dispute with order, amount, fee and response deadline.
                2. Each dispute's debit and any later reversal traced in the payout reports.
                3. Lost disputes written off under the agreed coding rule.
                4. The month-end total of open disputes reported with the management accounts.

                ## Notes
                Preventing disputes and gathering evidence to win them belong with your fraud and customer service processes. This ledger is about the money while it is in dispute.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every dispute from the last six months appears in the ledger with amount, fee, deadline and outcome, and the open total is reported at each month end."
                cadence: rolling
              tasks:
                - "Set up a dispute ledger with order, amount, fee, deadline and outcome"
                - "Add new disputes and update outcomes from every processor @recurring(weekly:fri)"
                - "Trace each dispute debit and reversal in the payout reports"
                - "Report the month-end open dispute total with the management accounts"
            - name: Reserves and held funds tracker
              description: |-
                ## Purpose
                Processors can hold back a percentage of every sale for weeks, freeze a payout pending checks or keep a minimum balance, and that money belongs to the business even though it is not in the bank. Tracking reserves and held funds by processor, with expected release dates, stops them being mistaken for missing sales and gives the cash forecast an honest view.

                ## Milestones
                1. Each processor's reserve terms recorded: rate, hold period and release pattern.
                2. The reserve balance at each month end taken from the processor's report.
                3. Reserve balances shown separately from the clearing account where the accountant prefers.
                4. Actual releases checked against the expected dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker shows each processor's reserve terms and month-end reserve balance for six consecutive months, with releases checked against expected dates."
                cadence: rolling
              tasks:
                - "Find each processor's reserve or hold terms in the settings or merchant agreement"
                - "Record month-end reserve balances from each processor @recurring(monthly:16)"
                - "Ask your accountant whether reserves need a separate ledger account"
                - "Compare actual releases with their expected release dates"
            - name: Marketplace settlement statement reconciliation
              description: |-
                ## Purpose
                Marketplaces deduct far more than card fees before paying: referral commission, fulfilment and storage charges, advertising, shipping labels, promotions and sometimes tax they collected on your behalf. Reconciling each settlement statement line by line into separate accounts shows what selling there really costs and keeps marketplace sales in the books at the gross figure.

                ## Milestones
                1. Each marketplace's settlement line types mapped to accounts.
                2. Every settlement posted with gross sales and each deduction on its own line.
                3. Tax the marketplace collected and paid itself kept out of your own tax figures, as your accountant advises.
                4. Each settlement total agreed to the deposit received.

                ## Notes
                Ask your accountant how marketplace-collected tax should appear in your books. In many places the marketplace is responsible for it, so it should not sit in your sales or your own tax return figures.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each marketplace settlement for six consecutive months is posted gross with every deduction coded, and agrees to the deposit received."
                cadence: rolling
              tasks:
                - "Download the latest settlement statement from each marketplace you sell on"
                - "Map every deduction line type to an account using the coding sheet"
                - "Post each settlement gross with deductions on separate lines @recurring(monthly:11)"
                - "Agree each settlement total to its bank deposit"
            - name: Unmatched payout lines chase list
              description: |-
                ## Purpose
                Some lines will not match first time: a sale with no order, an adjustment with no explanation, a payout a few pence out. A single chase list with the date found, the amount, what was tried and who is asking whom stops these being rediscovered every month and shows the accountant exactly what is still open.

                ## Milestones
                1. One chase list for all processors with amount, date found and next action.
                2. Each item given an owner and a follow-up date.
                3. Processor support tickets referenced against the items they cover.
                4. No item older than sixty days without a recorded decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The chase list shows an owner and next action for every unmatched line, and no item is older than sixty days without a recorded decision."
                cadence: rolling
              tasks:
                - "Create a chase list with amount, date found, owner and next action"
                - "Work through the oldest chase items and record progress @recurring(weekly:thu)"
                - "Raise a processor support ticket for adjustments with no description"
                - "Escalate items over sixty days old to the accountant for a decision"
            - name: In-transit payouts at month end
              description: |-
                ## Purpose
                Payouts sent on the last day of the month often reach the bank on the second or third, so the bank and the processor disagree at every month end by exactly those amounts. Listing in-transit payouts each month end, and checking they clear in the first days of the next month, is the one adjustment that makes the clearing account and the bank both agree with reality.

                ## Milestones
                1. In-transit payouts listed for each processor at month end, with payout ID and amount.
                2. The list shown as a reconciling item in the clearing account working paper.
                3. Each in-transit payout confirmed in the bank in the first week of the next month.
                4. Any payout still missing after five working days raised with the processor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six consecutive month ends, every in-transit payout is listed with its ID and confirmed in the bank within five working days."
                cadence: rolling
              tasks:
                - "List payouts sent but not yet in the bank at the month end just closed @recurring(monthly:1)"
                - "Show the in-transit list as a reconciling item in the working paper"
                - "Confirm each in-transit payout arrived in the first week of the month"
                - "Raise any payout missing after five working days with the processor"
            - name: Card terminal end-of-day batch matching
              description: |-
                ## Purpose
                Shops, cafés and salons taking cards in person close a terminal batch each day, and the processor's settlement for that batch should match the till's card total to the penny. Comparing the two daily, while staff still remember the evening, catches voided sales, tips keyed wrongly and a terminal that failed to close.

                ## Milestones
                1. A closing routine that compares the till's card total with the terminal batch total.
                2. The next day's processor settlement checked against that batch.
                3. Differences noted with the terminal, the staff member and the reason.
                4. A month of daily batches matched, with every difference explained.

                ## Notes
                Start from the **Operational checklist** template for the closing routine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of daily terminal batches is agreed to the till's card total and the processor settlement, with every difference explained."
                cadence: rolling
              tasks:
                - "Add a closing checklist step comparing till and terminal card totals"
                - "Match yesterday's terminal batch to the processor settlement @recurring(daily)"
                - "Note any batch difference with terminal, staff member and reason"
                - "Check that every terminal closed its batch at the end of each trading day"
            - name: Processor fee check against the agreed pricing
              description: |-
                ## Purpose
                Pricing changes arrive by email, custom rates expire, and cards from abroad or premium cards cost more, so the fee actually charged often drifts from the rate the owner remembers. A quarterly check of a sample of transactions against the agreed pricing schedule catches overcharges and gives you facts before any pricing conversation.

                ## Milestones
                1. The current pricing schedule for each processor saved.
                2. A quarterly sample of transactions recomputed against that schedule.
                3. Differences listed with the transaction type that caused them.
                4. Overcharges raised with the processor and the outcome recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter a sample of at least twenty transactions per processor is checked against the saved pricing schedule, with differences raised and recorded."
                cadence: cyclic
              tasks:
                - "Save each processor's current pricing schedule in the archive"
                - "Recompute the fees on twenty transactions per processor @recurring(quarterly)"
                - "List differences by card type, currency or channel"
                - "Raise confirmed overcharges with the processor in writing"
            - name: How a payout is built from charges, fees and refunds
              description: |-
                ## Purpose
                A payout is not a sum of sales: it is the processor's balance movement over a period, made of charges, fees, refunds, disputes, reserves, adjustments and sometimes an earlier negative balance. Learning to rebuild one payout by hand from its detail lines is the single skill that makes every other reconciliation in this area quick.

                ## Milestones
                1. One payout chosen and its detail lines exported.
                2. The lines grouped by type and totalled.
                3. The totals adding to the payout amount, to the penny.
                4. A short written explanation of each line type kept for reference.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One payout per processor has been rebuilt by hand from its detail lines to the exact deposit amount, with a note explaining each line type."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick one recent payout from your busiest processor"
                - "Export its detail lines and group them by type"
                - "Total each group and check the sum equals the payout"
                - "Write a one-line explanation of each line type you met"
            - name: Reading a processor balance report
              description: |-
                ## Purpose
                Payout reports explain each deposit, but the balance report explains the processor account as a whole: what was available, pending, reserved and paid out on any day. Knowing how to read it lets you agree a month-end balance even when payouts straddle the month, which is where most reconciliations stall.

                ## Milestones
                1. The balance or activity report found in each processor dashboard.
                2. Opening balance, activity and closing balance identified for one month.
                3. Pending and available amounts understood and told apart.
                4. The report's closing figure used in a month-end working paper.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A month-end balance for each processor is taken from its balance report, with opening, activity and closing figures that add up."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the balance or activity report in each processor dashboard"
                - "Run it for last month and note the opening and closing balances"
                - "Look up how the processor defines pending and available funds"
                - "Use the closing figure in this month's clearing account working paper"
            - name: Recording online sales gross, not net
              description: |-
                ## Purpose
                Posting the net payout as income makes sales look lower, hides fees inside revenue, and can put the wrong turnover figure on returns that ask for it. Understanding why sales are recorded at the amount the customer paid, with fees as a cost, helps you spot the problem in your own books and explain it to whoever set them up the other way.

                ## Milestones
                1. The difference between gross sales, fees and net payout explained in your own words.
                2. Three months of your books checked for net recording.
                3. The size of any understatement of sales and fees measured.
                4. A correction, if needed, agreed with the accountant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note states whether the last three months were recorded gross or net, with any understatement measured and a correction agreed with the accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare last month's sales in the books with gross sales in the shop"
                - "Check whether processor fees appear as a cost anywhere in the books"
                - "Measure the gap between net and gross for three months"
                - "Ask your accountant whether past periods need correcting"
            - name: Chargebacks in the books, from notice to outcome
              description: |-
                ## Purpose
                Every dispute moves through notice, funds withdrawn, evidence and a decision, and each stage leaves a different trace in the payout reports. Learning what each stage looks like in the processor's data, and which entry it calls for, stops disputes being double counted as refunds or left in the clearing account forever.

                ## Milestones
                1. The stages of a dispute in each processor written down.
                2. The report line type for each stage identified.
                3. The entry for each stage, including won and lost outcomes, agreed with the accountant.
                4. One past dispute traced from first debit to final outcome.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note gives the line type and book entry for each dispute stage, and one real dispute has been traced from debit to outcome."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read each processor's help page on how disputes affect the balance"
                - "Find the line type each dispute stage produces in the reports"
                - "Agree the book entry for won and lost disputes with your accountant"
                - "Trace one past dispute from first debit to final outcome"
            - name: Gift cards, store credit and discounts in the bridge
              description: |-
                ## Purpose
                Orders paid partly with a gift card, store credit, loyalty points or a full discount show as sales in the shop but bring no money through the processor. Understanding which of these are sales, which are a liability being used up and which are price reductions stops the sales to deposits bridge carrying a mystery line every month.

                ## Milestones
                1. Every non-card tender and discount type in the shop listed.
                2. The book treatment of each agreed with your accountant.
                3. Each type shown as its own line in the monthly bridge.
                4. Gift card sales and redemptions agreed to the shop's gift card report.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each non-card tender and discount type has an agreed book treatment and its own line in the monthly bridge, with gift card movements agreed to the shop's report."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every gift card, credit, points and discount option in the shop"
                - "Ask your accountant how each one should be recorded"
                - "Add a separate bridge line for each type"
                - "Agree gift card sales and redemptions to the shop's gift card report"
            - name: Foreign currency payouts and conversion costs
              description: |-
                ## Purpose
                Selling abroad adds a conversion step that may happen at the processor, at the bank, or not at all if you hold a foreign currency balance, and each choice changes the numbers you reconcile. Understanding where your conversion happens and what it costs lets you reconcile in the right currency and see the true cost of foreign sales.

                ## Milestones
                1. Where conversion happens for each processor and currency written down.
                2. The conversion fee or rate margin found in the reports or the pricing.
                3. Clearing accounts set up in the right currency, as far as your software allows.
                4. Exchange differences posted to the account your accountant chose.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note for each processor shows where currency conversion happens and what it costs, and exchange differences post to an agreed account."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check each processor's settings for the currencies it settles in"
                - "Find the conversion fee or rate margin in the pricing or reports"
                - "Ask your accountant which account takes exchange differences"
                - "Reconcile one foreign currency payout end to end"
            - name: Instalment and buy now pay later settlements
              description: |-
                ## Purpose
                Instalment providers pay the merchant up front, less a merchant fee that is often higher than card fees, and their refunds and disputes follow their own rules. Learning how your provider settles, and how its reports differ from a card processor's, keeps these sales at gross in the books and the provider's fee visible.

                ## Milestones
                1. The provider's settlement timing and fee structure recorded.
                2. Its settlement report mapped like any other processor's.
                3. A clearing account in use for the provider.
                4. One month of its settlements reconciled.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One month of instalment provider settlements is reconciled through its own clearing account, with the merchant fee recorded separately from sales."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the merchant agreement for settlement timing and fees"
                - "Map the settlement report columns to your coding sheet"
                - "Set up a clearing account for the instalment provider"
                - "Reconcile one month of the provider's settlements to the bank"
            - name: Spreadsheet payout reconciliation without a connector
              description: |-
                ## Purpose
                Many small sellers do not need a paid connector: one well-built spreadsheet can take a payout report, group lines by type and produce the journal. Building that sheet gives you a method that works for any processor and a fallback for the month a connector breaks.

                ## Milestones
                1. A spreadsheet that accepts a pasted payout report in a fixed layout.
                2. Line types grouped into totals that match the coding sheet.
                3. A journal summary per payout ready to post.
                4. The sheet tested on three months of real data.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spreadsheet produces a balanced journal summary from any month's payout report, tested on three months of real data."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up a sheet with a paste area matching the column map"
                - "Add totals per line type using the coding sheet's categories"
                - "Build a journal summary that balances to the payout amount"
                - "Test the sheet against three past months"
            - name: Choosing a payout reconciliation connector
              description: |-
                ## Purpose
                Once volumes pass a few hundred orders a month, a connector that posts payout summaries into the accounting software usually costs less than the hours it saves. Comparing two or three on the processors they support, how they post, their price and how they handle refunds and disputes avoids buying one that only half fits.

                ## Milestones
                1. Requirements written: processors, volume, currencies and posting style.
                2. Three connectors shortlisted and scored against the same criteria.
                3. A trial run on one month of real data.
                4. A choice recorded with its annual cost and reasons.

                ## Notes
                Start from the **Purchase decision** template. Watch how each connector treats refunds and disputes in the trial; that is where they differ most.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A connector is chosen after a trial on one month of real data, with the comparison and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the processors, monthly order volume and currencies to support"
                - "Shortlist three connectors that support all your processors"
                - "Trial the leading option on one month of real payouts"
                - "Record the choice, its annual cost and the reasons"
            - name: Summary journals or line-by-line import decision
              description: |-
                ## Purpose
                Some businesses import every order into the books, others post one summary journal per payout, and the right answer depends on volume, reporting needs and the software's limits. Deciding deliberately with the accountant avoids a ledger swollen with thousands of lines nobody reads, or one too summarised to answer questions by product or channel.

                ## Milestones
                1. Monthly order volume per processor measured.
                2. The reports the business needs by channel, product or region listed.
                3. Both options tested against those reports.
                4. A decision recorded and settings changed to match.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on summary or line-by-line posting for each processor, agreed with the accountant, with settings changed to match."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count monthly orders per processor"
                - "List the sales reports the owner or board actually uses"
                - "Test whether summary journals still produce those reports"
                - "Record the decision and update the posting settings"
            - name: Payout frequency decision
              description: |-
                ## Purpose
                Daily payouts make each deposit easier to match and bring cash in sooner, while weekly or monthly payouts mean fewer bank lines but larger differences when something goes wrong. Choosing a frequency for each processor from cash needs and matching effort, rather than leaving the default, is a small decision that shapes every month's work.

                ## Milestones
                1. Current payout frequency for each processor recorded.
                2. Cash timing and matching effort compared for two options.
                3. A frequency chosen and set for each processor.
                4. The timing table and cash forecast updated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each processor's payout frequency is a recorded choice with its reason, reflected in the timing table and the cash forecast."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Record each processor's current payout frequency"
                - "Compare matching time and cash timing for daily and weekly payouts"
                - "Change the payout schedule setting where a new frequency is chosen"
                - "Update the settlement timing table with the new frequencies"
            - name: Effective fee rate by sales channel
              description: |-
                ## Purpose
                Headline card rates say little about what each channel really costs once dispute fees, currency charges, marketplace commission and instalment fees are added. Calculating the effective fee rate per channel each quarter, as total deductions over gross sales, shows where margin is going and gives evidence for pricing or channel decisions.

                ## Milestones
                1. Total deductions and gross sales per channel for one quarter.
                2. An effective fee rate per channel calculated.
                3. The trend tracked quarter on quarter.
                4. Channels above an agreed threshold flagged to the owner.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An effective fee rate per channel is recorded for four consecutive quarters, with any channel above the agreed threshold flagged to the owner."
                cadence: cyclic
              tasks:
                - "Set up a metrics log with one row per channel per quarter"
                - "Calculate each channel's deductions as a share of gross sales @recurring(quarterly)"
                - "Flag channels whose rate rose by more than a quarter of a point"
                - "Share the quarter's figures with the owner"
            - name: Negative payouts and processor debits from the bank
              description: |-
                ## Purpose
                When refunds and disputes exceed sales, processors may debit the business bank account or carry a negative balance into the next payout, and these lines are easily coded as unexplained expenses. Setting up how to recognise and record them means a quiet month after a busy one does not leave stray debits in the books.

                ## Milestones
                1. Each processor's policy on negative balances found.
                2. Past bank debits from processors identified.
                3. Each debit recorded as a transfer to the clearing account.
                4. A bank rule or written note in place for future debits.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every processor debit from the bank in the last twelve months is coded as a transfer to the right clearing account, with a rule set for future debits."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read each processor's policy on negative balances"
                - "Search twelve months of bank lines for debits from processors"
                - "Recode each debit as a transfer to the clearing account"
                - "Set a bank rule so future processor debits post the same way"
            - name: Year-end processor reconciliation pack
              description: |-
                ## Purpose
                Accountants preparing year-end accounts need to see that online sales in the books reflect what customers paid, and one missing processor balance can delay the whole job. A pack with each processor's year-end balance report, clearing account reconciliation, open disputes, reserves and the annual sales bridge answers their questions before they ask.

                ## Milestones
                1. Year-end balance reports saved for every processor.
                2. Each clearing account reconciled at the year-end date.
                3. Open disputes, reserves and in-transit payouts listed.
                4. An annual bridge from gross shop sales to cash received.
                5. The pack sent to the accountant by the agreed date.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A year-end pack with balance reports, reconciliations, open items and an annual sales bridge for every processor reaches the accountant by the agreed date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree with your accountant the date the year-end pack is needed"
                - "Save every processor's balance report at the year-end date"
                - "Reconcile each clearing account at the year-end date"
                - "Assemble the year-end processor pack for the accountant @recurring(yearly)"
            - name: Annual processor payment summary agreed to the books
              description: |-
                ## Purpose
                Some processors and marketplaces report the gross payments they handled for you to the tax authority each year, for example on Form 1099-K in the US, and the tax authority may compare that figure with your return. Agreeing it to your own gross sales, and keeping the explanation of any difference, avoids an enquiry built on a number you never checked.

                ## Milestones
                1. Each annual payment summary issued to the business collected.
                2. The reported gross figure compared with gross sales in the books for the same channel.
                3. Differences explained, such as refunds, timing, personal sales or another entity's sales.
                4. The reconciliation saved with the tax records and shared with the tax preparer.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every annual payment summary from a processor or marketplace is agreed to gross sales in the books, with differences explained and filed with the tax records."
                cadence: cyclic
              tasks:
                - "Check which processors and marketplaces issue an annual payment summary"
                - "Download each annual summary as soon as it is available @recurring(yearly)"
                - "Compare each reported gross figure with gross sales in the books"
                - "Send the reconciliation to whoever prepares the tax return"
            - name: Peak trading season payout readiness
              description: |-
                ## Purpose
                Sale weekends and holiday rushes can triple volume, trigger rolling reserves, bring a wave of disputes a month later and push payouts across a month end. Preparing a few weeks ahead, with limits checked, matching sessions doubled and a plan for the dispute wave, keeps the busiest month from becoming the hardest to reconcile.

                ## Milestones
                1. Volume limits and reserve triggers checked with each processor.
                2. Extra matching sessions booked for the peak and the two weeks after.
                3. Expected payout timing around the peak written into the cash forecast.
                4. A review of the peak's disputes and refunds held six weeks later.

                ## Notes
                Start from the **Operational checklist** template and keep the same checklist for next year.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Processor limits are confirmed before the peak, extra matching sessions are held through it, and a post-peak dispute and refund review is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each processor whether expected peak volume will trigger a reserve or review"
                - "Book extra payout matching sessions for the peak weeks"
                - "Add expected peak payout dates to the cash forecast"
                - "Run the peak season payout checklist six weeks before the peak @recurring(yearly)"
            - name: Switching payment processor without losing a payout
              description: |-
                ## Purpose
                Moving to a new processor leaves the old one holding a balance, refunds on old orders that must still go through it, and disputes that can arrive for months. Planning the switch with a cutover date, both clearing accounts running in parallel and the old balance drawn down to nil means nothing is stranded or double counted.

                ## Milestones
                1. A cutover date set and the new processor's clearing account created.
                2. How refunds and disputes on old orders will be handled written down.
                3. Both processors reconciled in parallel until the old balance is nil.
                4. The old account closed and its final statement archived.

                ## Notes
                Keep the old account open, with payouts switched on, until the dispute window for its last sales has passed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The old processor's clearing account reaches nil and the account is closed with its final statement archived, with no sale or refund unrecorded across the cutover."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set the cutover date and create the new processor's clearing account"
                - "Ask the old processor how long refunds and disputes stay possible"
                - "Reconcile both processors each month until the old balance is nil"
                - "Download the old account's full transaction history before closing it"
            - name: Shop platform migration cutover
              description: |-
                ## Purpose
                Moving the online shop to a new platform changes order numbers, report formats, payment integrations and often the processor account behind them. Agreeing the last order on the old platform and the first on the new, and reconciling the overlap week in detail, stops the migration month becoming a permanent difference in the books.

                ## Milestones
                1. The last old-platform and first new-platform order numbers recorded.
                2. Orders in the overlap week listed from both platforms.
                3. Payouts in the overlap week matched to the right platform's orders.
                4. The column map and coding sheet updated for the new platform's reports.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Overlap week orders and payouts are fully matched across both platforms, and the column map and coding sheet cover the new platform's reports."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record the last order number taken on the old platform"
                - "Export every order from both platforms for the overlap week"
                - "Match the overlap week's payouts to orders on the right platform"
                - "Update the column map for the new platform's reports"
            - name: Responding to a frozen or held processor balance
              description: |-
                ## Purpose
                Processors sometimes freeze payouts after a spike in sales, a change of bank details or a run of disputes, and the business suddenly has sales but no cash. Having a plan for what to gather, who to contact and how to record the held funds turns a frightening week into an orderly one and keeps the books right while it is resolved.

                ## Milestones
                1. The processor's stated reason and requested documents recorded.
                2. Requested documents gathered and sent, with dates logged.
                3. The held amount visible in the clearing account working paper and the cash forecast.
                4. The release or outcome recorded, with any process change agreed.

                ## Notes
                Tell whoever owns the cash forecast on the same day. Payroll and supplier payment runs may need to move.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A log records the reason, documents sent, held amount and outcome of any processor hold, with the held amount shown in the cash forecast throughout."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the processor's stated reason and every document requested"
                - "Send the requested documents and log the date of each"
                - "Show the held amount as its own line in the cash forecast"
                - "Record the outcome and any change agreed to prevent a repeat"
            - name: Founder's first month of online sales in the books
              description: |-
                ## Purpose
                Founders launching a shop often find the first payout lower than expected and the bookkeeping software suggesting it be coded as income. Setting up the first month properly, with gross sales and fees separated and the first month-end balance agreed, sets the pattern every later month will follow and saves an awkward conversation with the accountant at year end.

                ## Milestones
                1. A clearing account in place before the first payout arrives.
                2. The first payout explained line by line.
                3. Gross sales, fees and refunds posted to separate accounts.
                4. The first month's clearing balance agreed to the processor balance.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The first month of online sales is posted gross, with fees and refunds separate and the clearing account agreed to the processor's month-end balance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decline the software's suggestion to code the first payout as income"
                - "Check the first payout's lines against the orders taken that week"
                - "Post sales, fees and refunds to separate accounts"
                - "Agree the first month-end clearing balance to the processor"
            - name: Market stall and pop-up card reader sales
              description: |-
                ## Purpose
                Craft fairs, markets and pop-ups often run on a phone card reader, a cash tin and a notebook, and the takings rarely reach the books as anything but a payout. Recording each event's card, cash and wallet takings against the reader's settlement keeps event sales visible by date and shows which events are worth the pitch fee.

                ## Milestones
                1. A one-page takings sheet for each event with card, cash and other payments.
                2. Each event's card total agreed to the reader's settlement.
                3. Cash takings banked and recorded separately from card payouts.
                4. Event sales compared with pitch fees for each event.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every event in a season has a takings sheet agreed to the reader settlement, with cash recorded separately and sales compared with the pitch fee."
                cadence: rolling
              tasks:
                - "Make a one-page takings sheet for card, cash and wallet payments"
                - "Fill in the takings sheet before packing up at each event"
                - "Agree each event's card total to the reader's settlement"
                - "Compare each event's sales with its pitch fee and travel costs"
            - name: Food delivery platform payouts for restaurants
              description: |-
                ## Purpose
                Delivery platforms pay restaurants net of commission, promotions the restaurant funded, refunds for missing items, adjustments and sometimes tips, usually weekly and with a statement that does not match the till. Reconciling each statement to the orders the kitchen received shows the true commission rate and catches refunds charged to you without good reason.

                ## Milestones
                1. Each platform's weekly statement mapped to accounts like a marketplace settlement.
                2. Statement orders agreed to orders recorded on the till or tablet.
                3. Customer refunds charged to the restaurant listed and challenged where unjustified.
                4. Effective commission per platform worked out each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly delivery statements are reconciled to the till's orders, with disputed refunds challenged and a monthly commission rate recorded."
                cadence: rolling
              tasks:
                - "Download last week's statement from each delivery platform"
                - "Agree the statement's orders to the till or tablet order list"
                - "List refunds charged to the restaurant and challenge the unjustified ones"
                - "Work out each platform's effective commission for the month"
            - name: Tips and service charges through card terminals
              description: |-
                ## Purpose
                Tips added on the card terminal arrive in the payout mixed with sales, but they belong to staff and are often taxed and reported differently. Separating tips from sales in each batch, and agreeing tips collected to tips paid out through payroll, keeps sales correct and gives the payroll provider the figure it needs.

                ## Milestones
                1. Tips identified separately in each terminal batch or payout report.
                2. Tips collected posted to a tips liability account, not to sales.
                3. Tips collected each period agreed to tips paid to staff.
                4. The arrangement checked with your accountant or payroll adviser.

                ## Notes
                How tips and service charges are taxed varies by country. Ask your payroll adviser; this project only keeps the figures straight.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Tips are posted to a liability account for three consecutive months, and the amount collected each month is agreed to tips paid through payroll."
                cadence: rolling
              tasks:
                - "Find where tips appear in the terminal batch or payout report"
                - "Set up a tips liability account with your accountant"
                - "Agree tips collected to tips paid through payroll @recurring(monthly:22)"
                - "Send the period's tips total to the payroll provider"
            - name: Handing payout reconciliation to a bookkeeper
              description: |-
                ## Purpose
                Founders who have done payouts themselves usually hold the method in their head: which report, which column, which odd line to ignore. A written handover, with the register, coding sheet, column maps and two months reconciled side by side, lets a bookkeeper or new team member take over without a quarter of errors.

                ## Milestones
                1. A handover pack with register, coding sheet, column maps and timing table.
                2. Two months reconciled side by side by the outgoing and incoming person.
                3. Dashboard access granted with the least permission needed.
                4. A first month reconciled alone by the new person and reviewed.

                ## Notes
                Start from the **Onboarding plan** template. Give report-only access in each dashboard rather than sharing the owner's login.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The new person has reconciled one month alone using the handover pack, with report-only processor access and a recorded review."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Put the register, coding sheet, column maps and timing table in one folder"
                - "Grant report-only dashboard access to the new person"
                - "Reconcile two months side by side with the new person"
                - "Review the first month they reconcile alone"
            - name: Payout reconciliation status board for a finance team
              description: |-
                ## Purpose
                In a team, the question is not just whether payouts reconcile but which processors are done, who is stuck and what is ageing. A simple board with one row per processor and month, showing status, owner, difference and oldest open item, lets the finance lead see the month's position in a minute and spread the work fairly.

                ## Milestones
                1. A board with processor, month, owner, status, difference and oldest open item.
                2. Every processor in the register on the board.
                3. The board updated before the weekly team meeting.
                4. Processors late two months running given a named fix.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The board shows status, owner and difference for every processor each month for a quarter, and every processor late twice running has a recorded fix."
                cadence: rolling
              tasks:
                - "Set up a board with one row per processor and month"
                - "Assign an owner to each processor on the board"
                - "Update each processor's status before the team meeting @recurring(weekly:wed)"
                - "Agree a fix for any processor late two months running"
            - name: Processor accounts across several entities or currencies
              description: |-
                ## Purpose
                Groups with more than one company, or one company selling in several currencies, often find a processor account paying into the wrong entity or a single balance holding funds in three currencies. Mapping each processor account and currency balance to the entity and ledger it belongs to, and fixing the ones that cross, prevents intercompany balances nobody planned.

                ## Milestones
                1. Every processor account and currency balance mapped to an entity.
                2. Accounts paying into another entity's bank account identified.
                3. Payout routing fixed, or an intercompany entry agreed, for each one.
                4. Each entity's clearing accounts reconciled in their own currency.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every processor account and currency balance is mapped to one entity, with cross-entity payouts either rerouted or covered by an agreed intercompany entry."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Map each processor account and currency balance to its entity"
                - "Find payouts landing in another entity's bank account"
                - "Agree with the group accountant how cross-entity payouts are recorded"
                - "Change payout bank details where funds belong to another entity"
            - name: Platform payouts to sellers through connected accounts
              description: |-
                ## Purpose
                Businesses running a marketplace or platform collect money for other sellers, keep a commission and pay out the rest through connected accounts, so most of the money passing through the processor is not their revenue. Reconciling the platform balance, the sellers' balances and the commission retained separately keeps funds owed to sellers out of sales and shows exactly what the platform earned.

                ## Milestones
                1. Funds held for sellers, platform commission and processor fees separated in the reports.
                2. A liability for funds owed to sellers agreed with the accountant.
                3. Seller payouts reconciled to the sellers' balances each month.
                4. Platform commission agreed to the commission in the platform's own data.

                ## Notes
                Whether the platform acts as principal or agent changes how its revenue is recorded. Agree that with your accountant before building the reconciliation.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monthly reconciliation separates funds owed to sellers, platform commission and fees, with seller balances agreed to payouts for three consecutive months."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask your accountant whether the platform acts as principal or agent"
                - "Separate seller funds, commission and fees in one month's reports"
                - "Reconcile seller payouts to seller balances for that month"
                - "Agree retained commission to the platform's own commission report"
            - name: Automated daily payout reconciliation with variance alerts
              description: |-
                ## Purpose
                At high volumes a monthly reconciliation finds problems weeks late. A daily automated match of orders, processor lines and bank deposits, with an alert when the unexplained difference passes a threshold, turns reconciliation into exception handling and catches a broken integration within a day.

                ## Milestones
                1. Orders, processor lines and bank deposits brought into one place each day.
                2. Matching rules for each processor written down and tested.
                3. An alert threshold set for the daily unexplained difference.
                4. A month of daily runs with every alert investigated.

                ## Notes
                Write the matching rules in plain words before automating them. A rule nobody can explain is a control nobody can rely on.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Daily automated matching runs for a month across all processors, with an alert threshold in place and every alert investigated and recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the data sources for orders, processor lines and bank deposits"
                - "Write the matching rules for each processor in plain words"
                - "Set an alert threshold for the daily unexplained difference"
                - "Ask the agent to summarise the month's alerts and their causes"
            - name: Payout reconciliation evidence for auditors
              description: |-
                ## Purpose
                Auditors testing revenue often start from processor data, and they want to see that the reconciliation was done each month, reviewed, and that differences were followed through. Keeping an evidence trail of saved reports, reviewed working papers, chase list history and dated rule changes makes the audit request a download rather than a reconstruction.

                ## Milestones
                1. A folder per month with payout reports, working paper and review sign-off.
                2. Chase list history kept as dated copies rather than overwritten.
                3. Coding sheet and matching rule changes dated with reasons.
                4. A sample month walked through with the auditor or accountant before fieldwork.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each month of the financial year has saved reports, a reviewed working paper and chase list history, and one sample month has been walked through with the auditor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create a month-by-month evidence folder for payout reconciliations"
                - "Keep a dated change log for the coding sheet and matching rules"
                - "Save a dated copy of the chase list at each month end"
                - "Walk the auditor or accountant through one sample month before fieldwork"
---

# Payment Processor Payout Reconciliation

This area is for online sellers, founders and finance teams whose sales arrive through card processors, marketplaces, wallets, card readers and instalment providers, and who need those payouts to agree with both the shop and the bank. It starts with the foundations (a register of every channel, an archive of payout reports, a clearing account per processor, coding rules and a clean opening balance), then the weekly and monthly routines that keep each processor reconciled, the skills that make a payout readable, decisions on connectors and posting style, dated events such as year end, a processor switch or a frozen balance, situations for founders, market traders, restaurants and finance teams, and finally specialist work on multi-entity accounts, platform payouts to sellers, automation and audit evidence.

What repeats is a weekly payout matching session, chase list and dispute ledger update, the monthly clearing account reconciliations and sales to deposits bridge, monthly refund, reserve, marketplace and in-transit checks, a quarterly fee check, and the yearly pack and payment summary for the accountant. The Remediation plan, Month-end close, Operational checklist, Purchase decision, Metrics log and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
