---
id: finance-accounting.bank-card-reconciliation
name: Bank & Card Reconciliation
description: "Every bank, card and loan account agreed to its statement on a fixed rhythm, with a standard working paper, a chase list for unexplained items, second-person review and a clean year-end pack."
category: business
version: 1.0.0
tags: [finance-accounting, bank-card-reconciliation, small-business, freelancer, team, credit-cards, bank-statements, outstanding-items]
author: Aurum Technology
starter_structure:
  templates:
    - remediation-plan
    - operational-checklist
    - metrics-log
    - purchase-decision
    - onboarding-plan
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Bank & Card Reconciliation
          description: "Matching bank, credit card and loan statements to the books, chasing unexplained items and keeping balances provably correct for any size of business."
          projects:
            - name: Register of every account to reconcile
              description: |-
                ## Purpose
                Most reconciliation gaps start with an account nobody remembered: the old savings pot, the fuel card, the second credit card, the equipment loan. Listing every bank, card, loan, overdraft and deposit account the business holds, matched to its ledger account, sets the scope for everything else in this area and shows at once which ones have never been reconciled.

                ## Milestones
                1. A list of every account the business holds, with provider, last four digits, currency and purpose.
                2. Each account matched to exactly one ledger account in the books.
                3. Accounts with no ledger account, and ledger accounts with no real account behind them, flagged.
                4. The date each account was last reconciled noted, or marked as never.

                ## Notes
                Include accounts in the business name that are rarely used. A dormant account with a small balance still has to agree to the books at year end.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every bank, card, loan and deposit account with its matching ledger account and last reconciled date, with no unmatched entry left unexplained."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every account from your online banking, card portals and lender letters"
                - "Match each account to its ledger account in the accounting software"
                - "Flag ledger bank accounts that have no real account behind them"
                - "Note the last reconciled date for each account in the register"
                - "Recheck the register for new or closed accounts @recurring(yearly)"
            - name: Official statement archive for every account
              description: |-
                ## Purpose
                Bank feeds are a convenience, not evidence: they drop transactions, duplicate others and rarely show the closing balance the bank stands behind. Keeping the official monthly statement for each account in one place, with a consistent file name, gives every reconciliation a fixed figure to agree to and gives the accountant or tax authority the proof they will ask for.

                ## Milestones
                1. A folder per account, organised by year.
                2. Statements for the current financial year and the last full year saved as PDFs.
                3. One file naming pattern, such as account, year and month, used throughout.
                4. Missing statements requested from the bank and the request date recorded.

                ## Notes
                Many online banks only keep statements for a limited period. Download them while they are available rather than relying on the portal.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Official statements for every account in the register are filed by account and month for the current and previous financial year, with any gaps requested from the bank."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create one statement folder per account in the register"
                - "Download the current and last financial year's statements as PDFs"
                - "Rename each file with account, year and month"
                - "Request any missing statements from the bank in writing"
                - "Save every account's new monthly statement into the archive @recurring(monthly:3)"
            - name: Agreed starting balance for each account
              description: |-
                ## Purpose
                Reconciling forward is impossible until there is one date on which the books and the statement are known to agree. Choosing that date for each account, usually the last year end your accountant signed off, and proving the ledger balance matches the statement on it, means every later difference belongs to a known period instead of the whole history.

                ## Milestones
                1. A starting date chosen for each account and agreed with your accountant.
                2. The statement balance and ledger balance on that date written side by side.
                3. Any difference on the starting date explained or posted as an agreed adjustment.
                4. The starting balance and its evidence saved in the account's reconciliation folder.

                ## Notes
                If the books and the statement have never agreed, do not force them with a single balancing entry. Ask your accountant how they want the opening difference treated.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every account in the register has a dated starting balance where the ledger and statement agree, with any adjustment approved by the accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your accountant on which date the books last agreed to the bank"
                - "Pull the statement balance and ledger balance for that date"
                - "List and explain any difference between the two figures"
                - "Save the starting balance and its evidence in each account's folder"
            - name: Bank feed health check
              description: |-
                ## Purpose
                Feeds break quietly when a bank changes its connection, an authorisation expires or a card is reissued, and the first sign is often a month with no transactions. Checking each feed's start date, last import and balance against online banking shows which feeds can be trusted and which need reconnecting or replacing with statement imports.

                ## Milestones
                1. Each account's feed status, start date and last import date recorded in the register.
                2. The feed balance compared with the online banking balance for every connected account.
                3. Broken or expired feeds reconnected, or switched to manual statement import.
                4. Any gap or overlap created by a reconnection found and fixed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every connected feed shows an import within the past week and a balance matching online banking, with any gap from a reconnection fixed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open the bank feeds screen and note each feed's last import date"
                - "Compare each feed's balance with today's online banking balance"
                - "Reconnect expired feeds and note the date each one restarted"
                - "Confirm every feed has imported within the last week @recurring(quarterly)"
            - name: Standard reconciliation working paper
              description: |-
                ## Purpose
                Ticking items in the software's matching screen proves less than people think: it does not show what was outstanding, who checked it or why a figure was adjusted. One working paper per account per month, starting from the statement balance, adding and subtracting outstanding items and arriving at the ledger balance, is the record accountants and auditors recognise.

                ## Milestones
                1. A layout with statement closing balance, deposits in transit, unpresented payments, adjusted balance and ledger balance.
                2. Spaces for preparer, reviewer, dates and a note on each unexplained item.
                3. The layout tested on one completed month for one account.
                4. A saving rule agreed so each month's paper sits beside that month's statement.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working paper layout exists and has been completed for at least one account and month, reaching a difference of zero or an explained figure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft the working paper layout from statement balance to ledger balance"
                - "Add preparer, reviewer and date fields at the foot"
                - "Complete the paper for last month on your main bank account"
                - "Save the completed paper next to that month's statement"
            - name: Unreconciled months backlog assessment
              description: |-
                ## Purpose
                Businesses that fall behind on reconciliations rarely know how far behind they are, so the backlog feels bigger than it is. A short assessment of each account, counting unreconciled months and unmatched transactions, turns the dread into a sized job with an honest finish date.

                ## Milestones
                1. Each account's last reconciled month and number of unreconciled months recorded.
                2. The count of unmatched transactions per account taken from the software.
                3. Accounts ranked by risk, with the highest volume and largest unexplained balances first.
                4. A realistic catch-up finish date agreed with whoever does the work.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A backlog table shows unreconciled months and unmatched transaction counts for every account, ranked by risk, with an agreed catch-up finish date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record the last reconciled month for each account in the register"
                - "Count the unmatched transactions on each account in the software"
                - "Rank the accounts by volume and size of unexplained balance"
                - "Agree a catch-up finish date with whoever will do the work"
            - name: Catch-up reconciliation, oldest month first
              description: |-
                ## Purpose
                Starting with last month feels productive but leaves errors from earlier months rolling into every later balance. Working each account month by month from the agreed starting balance, closing each one before opening the next, is slower for a week and much faster overall, because each difference only has to be found once.

                ## Milestones
                1. A month by month plan for each backlogged account, oldest first.
                2. Each month closed with a working paper and a zero or explained difference before the next is opened.
                3. Unexplained items collected on one chase list rather than fixed on the spot.
                4. Every backlogged account reconciled to its latest statement.

                ## Notes
                Start from the **Remediation plan** template. Two short sessions a week beat one long weekend: tired reconciling is where duplicated and missed entries come from.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every account on the backlog table is reconciled to its latest statement, with a working paper for each month caught up."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the month by month catch-up order for each backlogged account"
                - "Block two catch-up sessions a week in the calendar until the finish date"
                - "Close the oldest open month on the riskiest account first"
                - "Move every unexplained item to the chase list instead of guessing"
            - name: Reconciliation calendar and owners
              description: |-
                ## Purpose
                In a team, reconciliations slip because everyone assumes someone else is doing them, and in a one-person business they slip because there is no fixed day. Setting out each account's preparer, reviewer and due day after its statement date makes the work visible and lets anyone see at a glance what is late.

                ## Milestones
                1. Each account assigned a preparer and, where possible, a different reviewer.
                2. A due day fixed for each account based on when its statement arrives.
                3. Card accounts scheduled from their statement date, not the month end.
                4. The calendar shared with everyone who prepares, reviews or relies on the numbers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reconciliation calendar names the preparer, reviewer and due day for every account in the register and has been shared with the team."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note the day each account's statement usually becomes available"
                - "Assign a preparer and a reviewer to every account"
                - "Set a due day per account a few working days after its statement"
                - "Review owners and due days for changes in people or accounts @recurring(yearly)"
            - name: Small difference write-off threshold
              description: |-
                ## Purpose
                Hours can vanish chasing a difference of a few cents or pence, while a business that writes off anything it cannot explain is hiding its mistakes. Agreeing a small written threshold with your accountant, below which a difference may be posted to a named account with a note and above which it must be investigated, gives the same answer every month.

                ## Milestones
                1. A threshold amount per account per month agreed with your accountant.
                2. A named ledger account chosen for approved small differences.
                3. A rule written that every write-off needs a note and the reviewer's approval.
                4. The year's total written off reviewed as part of the year-end pack.

                ## Notes
                A threshold covers rounding and genuine trivia. Repeated small differences on the same account usually point to a real error worth finding.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written threshold, the ledger account it posts to and the approval rule are recorded and confirmed by the accountant."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your accountant what size of difference they would accept writing off"
                - "Choose or create the ledger account for approved small differences"
                - "Write the threshold and approval rule into the reconciliation notes"
                - "Compare the year's total written off with the threshold @recurring(yearly)"
            - name: Weekly bank feed matching session
              description: |-
                ## Purpose
                Matching a week of transactions takes fifteen minutes while the details are fresh; matching three months takes an afternoon of guessing. A fixed weekly session to match feed lines to invoices, bills and receipts keeps the month-end reconciliation down to a quick check against the statement.

                ## Milestones
                1. A recurring weekly slot in the calendar.
                2. Every feed line older than a week either matched or added to the chase list.
                3. Fewer than ten unmatched lines on any account at month end.
                4. Eight consecutive weekly sessions completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly sessions completed, with no account carrying more than ten unmatched feed lines at the following month end."
                cadence: rolling
              tasks:
                - "Pick a fixed weekly slot for matching and put it in the calendar"
                - "Match the week's feed lines across every connected account @recurring(weekly:fri)"
                - "Note any line you cannot match with the date you first saw it"
            - name: Monthly bank reconciliation to the statement
              description: |-
                ## Purpose
                Matched feed lines do not prove the books are right; only agreeing the ledger to the bank's own closing balance does. Reconciling each bank account to its statement every month, with a working paper listing what is still outstanding, catches missing, duplicated and misdated entries before they reach the accounts.

                ## Milestones
                1. Each bank account reconciled to its month-end statement balance by its due day.
                2. A working paper saved for each account showing a zero or explained difference.
                3. Outstanding items listed with dates and amounts.
                4. Six consecutive months completed on time for every bank account.

                ## Notes
                Start from the **Operational checklist** template so the monthly steps run in the same order every time.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every bank account has six consecutive monthly working papers agreeing the ledger to the statement balance, each completed by its due day."
                cadence: rolling
              tasks:
                - "Write the monthly reconciliation steps as a checklist"
                - "Reconcile each bank account to its month-end statement balance @recurring(monthly:6)"
                - "Save the working paper beside the statement for that month"
                - "Carry any unresolved difference onto next month's paper with a note"
            - name: Credit card statement reconciliation
              description: |-
                ## Purpose
                Card statements close on a date the issuer sets, often mid-month, so reconciling cards at month end compares the books with a balance the issuer never printed. Reconciling each card to its own statement date and balance, and checking the payment that cleared it, catches missing receipts, double-posted refunds and interest or fees that never reached the ledger.

                ## Milestones
                1. Each card's statement closing date recorded in the reconciliation calendar.
                2. The ledger card balance agreed to the statement balance at that date each cycle.
                3. Interest, annual fees and foreign transaction fees posted from the statement.
                4. The payment from the bank account to the card matched on both sides.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every business card is reconciled to its statement closing balance for six consecutive cycles, with fees and the card payment matched."
                cadence: rolling
              tasks:
                - "Record each card's statement closing date in the calendar"
                - "Reconcile each card to its latest statement closing balance @recurring(monthly:9)"
                - "Post interest and fees shown on the statement but missing from the ledger"
                - "Match the card payment on both the bank side and the card side"
            - name: Loan and finance balance agreement
              description: |-
                ## Purpose
                Loan balances in the books drift when whole repayments are posted to the loan, interest is missed or the lender adds charges. Agreeing each loan, overdraft and hire purchase balance to the lender's figure every quarter keeps the balance sheet honest and makes the year-end adjustments small.

                ## Milestones
                1. A way to get a dated balance from each lender confirmed.
                2. The ledger balance compared with the lender's figure at the same date.
                3. Differences traced to interest, fees or misposted repayments and corrected.
                4. Four quarterly agreements completed in a year.

                ## Notes
                If a lender only issues an annual statement, ask for a balance letter or save a dated screenshot of the portal balance on the reconciliation day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each loan and finance agreement has a quarterly record agreeing the ledger balance to the lender's figure for four consecutive quarters."
                cadence: rolling
              tasks:
                - "Ask each lender how to get a balance at a chosen date"
                - "Agree every loan and finance balance to the lender's figure @recurring(quarterly)"
                - "Trace any difference to interest, charges or misposted repayments"
                - "Save the agreed balance and its evidence in the loan's folder"
            - name: Savings and deposit account reconciliation
              description: |-
                ## Purpose
                Savings, tax reserve and deposit accounts move rarely, which is exactly why they get forgotten until interest, tax withheld at source or a missed transfer leaves the ledger wrong at year end. A quarterly check of each one against its statement takes minutes and keeps interest income in the right period.

                ## Milestones
                1. Every savings and deposit account in the register reconciled to its latest statement.
                2. Interest credited and any tax withheld posted separately.
                3. Transfers in and out matched to the operating account.
                4. Four quarterly checks completed in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each savings and deposit account is reconciled to its statement every quarter for a year, with interest and any withheld tax posted."
                cadence: rolling
              tasks:
                - "List every savings, reserve and deposit account from the register"
                - "Reconcile each savings account and post interest received @recurring(quarterly)"
                - "Post any tax withheld from interest to its own ledger account"
            - name: Outstanding items ageing review
              description: |-
                ## Purpose
                Deposits in transit and unpresented payments are normal for a few days, but an item still outstanding after sixty days is usually a mistake: a lost cheque, a payment recorded twice or a deposit that never arrived. Ageing the outstanding list every month turns old items into questions while someone still remembers the answer.

                ## Milestones
                1. Outstanding items on each working paper sorted into under 30, 30 to 60 and over 60 days.
                2. Every item over 60 days investigated with a named next step.
                3. Items confirmed as errors corrected in the ledger.
                4. No item older than 90 days left without a written explanation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, every outstanding item older than 60 days has a named next step and none older than 90 days is unexplained."
                cadence: rolling
              tasks:
                - "Add a days outstanding column to the working paper"
                - "Age outstanding items on every account and flag those over 60 days @recurring(monthly:14)"
                - "Write a next step beside each item older than 60 days"
                - "Correct items confirmed as duplicates or errors in the ledger"
            - name: Unexplained items chase list
              description: |-
                ## Purpose
                Every reconciliation turns up lines nobody recognises: a card charge with a cryptic merchant name, a deposit with no reference, a direct debit nobody remembers setting up. One shared chase list, with the date, amount, account and who has been asked, stops these being forced into a guess or forgotten until the accountant finds them.

                ## Milestones
                1. A single chase list with date, account, amount, description, person asked and outcome.
                2. Every unexplained item from reconciliations added within a day of finding it.
                3. Items older than two weeks escalated to the account holder or the bank.
                4. The list cleared down to items less than a month old.

                ## Notes
                An unrecognised card payment or direct debit may be fraud. Report it to the card issuer or bank promptly, because dispute windows are time limited.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A chase list exists with a person asked for every entry, and no unexplained item on it is older than one month."
                cadence: rolling
              tasks:
                - "Set up the chase list with columns for date, account, amount and person asked"
                - "Ask the agent to draft a short query for each item older than a week"
                - "Send open chase items to the people who might recognise them @recurring(weekly:tue)"
                - "Escalate items older than two weeks to the bank or card issuer"
            - name: Second-person reconciliation review
              description: |-
                ## Purpose
                Reconciliations checked only by the person who prepared them can hide both honest mistakes and dishonest ones. A short monthly review by someone else, re-adding the totals, checking the statement balance against the PDF and questioning old items, is one of the simplest controls a team or small business can run.

                ## Milestones
                1. A reviewer named for each account who, where possible, does not make payments from it.
                2. A review checklist of five checks used each month.
                3. Each working paper signed and dated by the reviewer.
                4. Review points answered and closed before the next month's reconciliation.

                ## Notes
                In a one-person business, the accountant or a trusted outside bookkeeper can review quarterly instead of monthly.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of working papers carry a reviewer's signature and date, with every review point closed."
                cadence: rolling
              tasks:
                - "Name a reviewer for each account who does not make its payments"
                - "Write five review checks, starting with the balance on the statement PDF"
                - "Review and sign each completed working paper @recurring(monthly:11)"
                - "Log review points and confirm each one is closed"
            - name: Transfers between your own accounts
              description: |-
                ## Purpose
                Money moved from the current account to savings, a card or a tax reserve should appear twice, once out and once in, and one side often goes missing or lands in income or expenses. Checking every month that each internal transfer is matched on both sides, and that any transfer clearing account sits at zero, prevents a common source of phantom profit and phantom costs.

                ## Milestones
                1. The pairs of accounts that send money to each other listed.
                2. Internal transfers coded as transfers, not income or expense.
                3. Any transfer clearing account at zero at each month end.
                4. Transfers that cross the month end shown as in transit on the working paper.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive month ends every internal transfer is matched on both sides and any transfer clearing account is at zero or explained."
                cadence: rolling
              tasks:
                - "List the pairs of accounts that regularly send money to each other"
                - "Search income and expense accounts for transfers coded there by mistake"
                - "Confirm the transfer clearing account is zero at month end @recurring(monthly:7)"
            - name: Reconciled balance drift check
              description: |-
                ## Purpose
                Once reconciled, a month can quietly stop agreeing when someone later edits, deletes or re-dates a transaction inside it. Comparing each account's previously reconciled closing balance with the ledger's current figure for the same date catches these changes early, before they become a year-end difference nobody can trace.

                ## Milestones
                1. Each account's reconciled closing balance written on that month's working paper.
                2. The ledger balance at that same date checked again a month later.
                3. Any change traced through the audit trail to the entry and user responsible.
                4. A rule agreed that reconciled entries are corrected only by a new, dated entry.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months the previously reconciled balance of every account still matches the ledger, or each change is traced and corrected."
                cadence: rolling
              tasks:
                - "Write each account's reconciled closing balance on the working paper"
                - "Compare last month's reconciled balance with the ledger figure for that date @recurring(monthly:20)"
                - "Trace any change through the software's audit trail"
                - "Agree with the team that reconciled entries are corrected by new entries only"
            - name: Reconciliation health log
              description: |-
                ## Purpose
                Whether reconciliations are getting easier or harder is hard to feel month to month but easy to see in numbers. Logging the days taken after each statement, the count of outstanding and unexplained items and any write-off for each account shows where improvement effort belongs and gives a team a fair measure of the work.

                ## Milestones
                1. A log with account, month, days to reconcile, outstanding items, unexplained items and write-off.
                2. Six months of entries for every account.
                3. The two accounts with the worst trend identified.
                4. One change made on each of those accounts and its effect logged.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Six months of health figures are logged for every account, and one improvement has been made on each of the two worst accounts."
                cadence: rolling
              tasks:
                - "Set up the health log from the metrics log template"
                - "Log each account's reconciliation figures for the month @recurring(monthly:27)"
                - "Pick the two accounts with the worst trend after six months"
            - name: How a bank reconciliation actually works
              description: |-
                ## Purpose
                Many owners reconcile by clicking match until the numbers agree, without knowing why the bank's figure and the book figure should differ at all. Learning the logic, that timing items explain the gap and errors are whatever is left, and that your deposits are credits on the bank's statement but debits in your books, makes every later difference quicker to read.

                ## Milestones
                1. The difference between timing items and errors explained in your own words.
                2. A note on why the bank shows your deposits as credits.
                3. One reconciliation worked by hand from a real statement.
                4. The hand result compared with the software's reconciliation report.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand-worked reconciliation from a real statement agrees with the software's report, with timing items and errors listed separately."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your software's help guide on bank reconciliation"
                - "Print last month's statement and the ledger account for the same dates"
                - "Work the reconciliation by hand from statement balance to ledger balance"
                - "Compare your hand result with the software's reconciliation report"
            - name: Reading a business card statement line by line
              description: |-
                ## Purpose
                Card statements mix transaction dates, posting dates, pending items, refunds, interest, foreign fees and last cycle's payment, and each affects the reconciliation differently. Working through one real statement line by line and matching it to the ledger removes most of the confusion behind card balances that never quite agree.

                ## Milestones
                1. Transaction date, posting date and statement closing date identified on one real statement.
                2. Pending items distinguished from posted items in the card portal.
                3. Interest, annual fee and foreign transaction fee lines located.
                4. Every line on that statement traced to the ledger or listed as missing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One full card statement has been traced line by line to the ledger, with missing or mismatched lines listed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Download the latest statement for your most used business card"
                - "Highlight the closing date, posting dates and any pending items"
                - "Find the interest, annual fee and foreign fee lines"
                - "Trace every line to the ledger and list anything missing"
            - name: Tracking down a reconciliation difference
              description: |-
                ## Purpose
                Most differences come from a handful of causes, and simple checks find them fast: a difference divisible by nine often means two digits were swapped, half the difference may be an entry posted the wrong way round, and a difference equal to one transaction usually means it is missing or doubled. Practising these checks turns an afternoon of scrolling into a ten minute search.

                ## Milestones
                1. A written list of the six commonest causes of a difference, with the check for each.
                2. The divide by nine and halve the difference checks practised on a real or sample difference.
                3. Weekly running balances compared to narrow a difference to a date range.
                4. The list kept beside the working paper layout.

                ## Notes
                If a difference changes from one month to the next, look at the change rather than the total: it is often a single new error in the later month.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A checklist of common causes and their tests is saved with the working paper and has been used to resolve at least one real difference."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down the six commonest causes of reconciliation differences"
                - "Test the divide by nine and halve the difference checks on a sample"
                - "Compare weekly running balances to narrow a difference to a date range"
                - "Save the checklist next to the working paper layout"
            - name: Statement import overlaps and gaps
              description: |-
                ## Purpose
                Accounts without feeds are often reconciled from downloaded files, and every import risks a day brought in twice or a day missed between files. Learning to import by exact date range, check each file's first and last line against the previous import and confirm the running balance prevents the duplicate and missing lines that are hardest to spot later.

                ## Milestones
                1. The software's accepted file formats and date settings confirmed.
                2. A rule written to import from the day after the last imported line.
                3. Each import's first and last line checked against the statement.
                4. Three consecutive imports completed with no duplicates or gaps.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three consecutive file imports for an account without a feed have been completed with no duplicate or missing lines, checked against the statement."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check which file and date formats your software accepts for imports"
                - "Note the date of the last imported line for each account without a feed"
                - "Import the next file from the day after that date only"
                - "Compare the imported running balance with the statement"
            - name: Foreign currency account reconciliation
              description: |-
                ## Purpose
                Foreign currency bank and card accounts must agree to their statements in their own currency first; the home currency figure in the ledger then moves with exchange rates and throws up gains and losses. Learning to reconcile in the account's currency and post the revaluation separately keeps two different problems apart, which is where most currency confusion comes from.

                ## Milestones
                1. Each foreign currency account set up in the ledger in its own currency.
                2. One month reconciled to the statement in that currency.
                3. The month-end exchange rate source agreed with your accountant.
                4. The revaluation posted separately from any reconciliation difference.

                ## Notes
                Ask your accountant which rate source and method they want. This project records their method; it does not choose one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One foreign currency account has been reconciled in its own currency for a month, with the revaluation posted separately using the accountant's rate source."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check each foreign currency account is set up in its own currency"
                - "Reconcile one month in the account's currency, not the home currency"
                - "Ask your accountant which month-end rate source to use"
                - "Post the revaluation as an entry separate from any difference"
            - name: Uncleared, stale and stopped cheques
              description: |-
                ## Purpose
                Cheques are still common in many countries for rent, some suppliers and government payments, and each one sits outstanding until it is banked. Knowing how to track uncleared cheques, when your bank treats one as stale and how to record a stopped or reissued cheque keeps the outstanding list short and the cash balance real.

                ## Milestones
                1. A cheque register with number, date, payee, amount and date cleared.
                2. The period after which your bank refuses an old cheque confirmed.
                3. A method agreed with your accountant for reversing stale or stopped cheques.
                4. Every cheque older than the stale period resolved or reissued.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cheque register is current, the bank's stale period is recorded, and no cheque older than that period is outstanding without action."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Build a cheque register from the cheque book stubs and the ledger"
                - "Ask your bank after how long it refuses to pay an old cheque"
                - "Contact payees of cheques that are close to going stale"
                - "Reverse stopped or stale cheques using the method your accountant agrees"
            - name: Undoing a wrong match in the software
              description: |-
                ## Purpose
                Wrong matches and forced adjustments can be fixed, but the wrong way of fixing them deletes evidence or reopens a closed month. Learning your software's safe route to unmatch, unreconcile and correct, and knowing when to ask the accountant first, makes mistakes cheap instead of frightening.

                ## Milestones
                1. Your software's help pages on unmatching and unreconciling read and bookmarked.
                2. The difference between unmatching a line and deleting a transaction understood.
                3. A practice correction done in a recent, open month.
                4. A rule written that corrections in closed or filed periods go through the accountant.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One wrong match has been corrected in an open month using the software's unmatch route, and a written rule covers closed periods."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your software's help article on unmatching a bank transaction"
                - "Practise unmatching and rematching one line in the current month"
                - "Check the audit trail shows the correction"
                - "Write the rule for corrections in closed or filed periods"
            - name: Spreadsheet reconciliation for accounts without feeds
              description: |-
                ## Purpose
                Some accounts never connect to the accounting software: small lenders, foreign banks, fuel and store cards, and many credit unions. A simple spreadsheet that lists the statement lines, ticks them against the ledger and carries outstanding items forward gives these accounts the same proof as the connected ones.

                ## Milestones
                1. A spreadsheet with statement lines, ledger lines, a tick column and a carried forward section.
                2. Opening outstanding items brought forward from the last agreed month.
                3. One month reconciled for each account without a feed.
                4. Each month's spreadsheet saved with that month's statement.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every account without a feed has at least one month reconciled in the spreadsheet, with outstanding items carried forward."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the accounts in the register that have no bank feed"
                - "Build a spreadsheet with statement, ledger, tick and carried forward sections"
                - "Reconcile the latest month for each account without a feed"
            - name: Closing dormant accounts and unused cards
              description: |-
                ## Purpose
                Every account the business holds has to be reconciled, protected and confirmed at year end, even if it moves once a year. Reviewing the register for accounts and cards with no real purpose, then emptying and closing them properly with a final statement on file, cuts monthly work and removes a quiet fraud risk.

                ## Milestones
                1. Accounts and cards with only a handful of transactions a year identified.
                2. A keep or close decision recorded for each, with the reason.
                3. Closed accounts brought to a zero balance and the final statement filed.
                4. The ledger account for each closed account at zero and marked inactive.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every dormant account has a recorded keep or close decision, and each closed one has a final statement on file and a zero ledger balance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sort the register by number of transactions in the last year"
                - "Decide keep or close for each low-use account and note why"
                - "Move any remaining balance before closing each account"
                - "Mark closed ledger accounts inactive once they show zero"
            - name: Company card statement split by cardholder
              description: |-
                ## Purpose
                Where several staff hold cards on one company account, the issuer sends one statement and takes one payment, but the questions are always about one person's spending. Reconciling each cardholder's subtotal first, then the combined balance, puts each unexplained line in front of the person who made it and stops one missing receipt holding up the whole account.

                ## Milestones
                1. Each cardholder's card number ending linked to their name in the register.
                2. Cardholder subtotals on the statement agreed to the ledger each cycle.
                3. Unmatched lines sent to the cardholder concerned.
                4. The combined statement balance and single payment agreed after the subtotals.

                ## Notes
                Spending policy and approvals belong to your expense process. This project is only about making the card account agree.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive cycles each cardholder's subtotal and the combined card balance agree to the statement, with unmatched lines sent to the cardholder."
                cadence: rolling
              tasks:
                - "Link each cardholder's card number ending to their name in the register"
                - "Agree each cardholder's subtotal to the ledger for the latest cycle"
                - "Send each cardholder the lines on their card that are still unmatched"
            - name: Feed balance versus statement balance
              description: |-
                ## Purpose
                The balance a bank feed shows can differ from the statement because of pending items, value dates or the bank's daily cut-off time, and reconciling to the wrong one creates differences that are not real. Working out which balance each of your banks provides, and always closing to the statement, settles the argument once.

                ## Milestones
                1. For each account, how the feed balance is calculated noted from the bank or software help pages.
                2. The feed balance and statement closing balance compared at two month ends.
                3. Any recurring gap explained, such as pending card authorisations.
                4. A rule written that reconciliations close to the statement balance.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each connected account has a note explaining how its feed balance relates to the statement, with two month ends compared."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare the feed balance and statement balance at the last two month ends"
                - "Look up how your software calculates the feed balance for each bank"
                - "Note the cause of any recurring gap in the register"
                - "Write the rule that reconciliations close to the statement balance"
            - name: Deposits recorded the way the bank shows them
              description: |-
                ## Purpose
                When ten customer cheques or a day's cash takings are paid in together, the statement shows one line but the books often show ten, and matching becomes a puzzle. Recording deposits as the batches that were actually banked, with the paying-in reference, makes every deposit match one statement line.

                ## Milestones
                1. Current deposit habits checked against three months of statements.
                2. A paying-in slip number or deposit reference used for every batch.
                3. Receipts grouped into one deposit in the software before matching.
                4. A full month in which every deposit matched one statement line.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One full month in which every deposit in the books matches exactly one statement line by amount and reference."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare last quarter's recorded deposits with the statement lines"
                - "Number every paying-in slip or deposit batch"
                - "Group receipts into a single deposit in the software before matching"
            - name: Payment references that make matching easy
              description: |-
                ## Purpose
                Unreferenced money in and out is the main reason matching is slow: a customer pays a round sum with no invoice number, or a supplier payment shows only a bank code. Asking customers to quote the invoice number, and using clear references on your own outgoing payments, makes most lines match on sight.

                ## Milestones
                1. Invoices asking customers to quote the invoice number as the payment reference.
                2. A reference format chosen for outgoing payments, such as supplier name and bill number.
                3. Standing orders and direct debits renamed in online banking where the bank allows it.
                4. Unreferenced receipts counted before the change and three months after.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The invoice wording and outgoing reference format are updated, and unreferenced receipts are counted before the change and three months after."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count last month's receipts that arrived with no usable reference"
                - "Add a line to invoices asking for the invoice number as the reference"
                - "Choose a reference format for every payment you send"
                - "Recount unreferenced receipts three months later"
            - name: Weekly or monthly reconciliation decision
              description: |-
                ## Purpose
                Monthly reconciliation suits an account with forty lines; an account with four hundred, or one that keeps producing unexplained items, is safer reconciled weekly against a dated online balance. Deciding the frequency per account from its volume and risk, rather than by habit, puts effort where the errors are.

                ## Milestones
                1. Monthly line counts and unexplained item counts gathered for each account.
                2. A frequency chosen for each account, with the reason.
                3. Evidence agreed for weekly balances, such as a dated balance screenshot.
                4. The reconciliation calendar updated with the new frequencies.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each account in the register has a recorded reconciliation frequency based on its volume and risk, reflected in the calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count each account's monthly transactions and unexplained items"
                - "Choose weekly or monthly for each account and note the reason"
                - "Decide what evidence a weekly balance check will keep"
                - "Update the reconciliation calendar with the new frequencies"
            - name: Choosing a matching tool for high volumes
              description: |-
                ## Purpose
                Once an account carries thousands of lines a month, both the accounting software's matching screen and a spreadsheet start to fail. Comparing dedicated matching tools or add-ons on rules, partial matching, audit trail and price, against your real volumes, shows whether a tool would pay for itself or whether better references would solve the problem first.

                ## Milestones
                1. Monthly line volumes and hours spent recorded for each high-volume account.
                2. Three options shortlisted, including staying with the current software.
                3. Each option scored on rules, partial matching, audit trail, connections and cost.
                4. A decision recorded with the expected hours saved.

                ## Notes
                Start from the **Purchase decision** template. Ask for a trial on a copy of a real month's data before paying.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A purchase decision records three options scored against real volumes and the chosen route, with the expected hours saved."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record monthly volumes and hours spent on the busiest accounts"
                - "Shortlist three options including your current software"
                - "Score each option on rules, partial matching, audit trail and cost"
                - "Trial the leading option on a copy of one real month"
            - name: Unexpected bank charges queried
              description: |-
                ## Purpose
                Reconciling is the one time someone reads every line, which makes it the best moment to catch charges that should not be there: a doubled account fee, a fee for a service you cancelled, an unexpected foreign or returned item charge. Checking charge lines against the bank's tariff each quarter and raising the odd ones often recovers money and always explains the lines.

                ## Milestones
                1. Your bank's current tariff of charges saved in the statement archive.
                2. Every charge line in the last three months compared with the tariff.
                3. Charges that do not fit the tariff listed with dates and amounts.
                4. Queries raised with the bank and outcomes recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Charge lines for the last three months have been checked against the bank's tariff, and each one that does not fit has been raised with the bank and its outcome logged."
                cadence: rolling
              tasks:
                - "Download your bank's current tariff of charges"
                - "Check the quarter's charge lines against the tariff @recurring(quarterly)"
                - "Raise charges that do not fit the tariff with the bank and record the reply"
            - name: Year-end bank and card reconciliation pack
              description: |-
                ## Purpose
                At year end the accountant needs one thing per account: the closing statement and a reconciliation at the exact year-end date, with every outstanding item listed. Preparing this pack before they ask, including cards whose statements close mid-month, saves rounds of questions and sometimes part of the fee.

                ## Milestones
                1. A reconciliation at the exact year-end date for every account in the register.
                2. Card balances brought to the year-end date, with transactions after the last statement listed.
                3. Year-end outstanding items shown with the date each one later cleared.
                4. Loan and savings balances backed by lender and bank statements or letters.
                5. The pack sent to the accountant with an index.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The accountant receives a year-end pack with a dated reconciliation and closing statement for every account and confirms none is missing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your accountant what they want in the year-end bank pack"
                - "Reconcile every account to the exact year-end date"
                - "Note when each year-end outstanding item cleared afterwards"
                - "Send the indexed year-end pack to the accountant @recurring(yearly)"
            - name: Switching to a new bank account
              description: |-
                ## Purpose
                Moving banks leaves a tail: customer payments still arriving in the old account, direct debits failing, and the old feed either left connected or cut off too early. Running the old and new accounts side by side for a set period, reconciling both, and closing the old one only once it is empty and quiet keeps the trail complete.

                ## Milestones
                1. A switch date and an overlap period agreed.
                2. The new account added to the register, ledger and feed before its first payment.
                3. Both accounts reconciled monthly through the overlap.
                4. The old account at zero and closed, with its final statement filed and its ledger account inactive.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Both old and new accounts are reconciled through the overlap, and the old account is closed with a zero ledger balance and its final statement filed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree the switch date and how long both accounts will run together"
                - "Add the new account to the register, ledger and feed before first use"
                - "Reconcile both accounts every month of the overlap"
                - "Request the old account's final statement once it reaches zero"
            - name: Cutover reconciliation when changing software
              description: |-
                ## Purpose
                When the books move to new accounting software, bank balances are where errors show first: transactions migrated twice, a feed started from the wrong date or an opening balance taken from the wrong day. Reconciling every account at the cutover date in the old system, and again in the new one before any fresh matching starts, proves the move was clean.

                ## Milestones
                1. A cutover date fixed and every account reconciled to it in the old software.
                2. Opening balances in the new software entered from those reconciled figures.
                3. Outstanding items at cutover brought into the new software one by one.
                4. Feeds in the new software started from the day after cutover.
                5. The first month in the new software reconciled with no unexplained difference.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every account is reconciled at the cutover date in both systems, and the first month in the new software reconciles with no unexplained difference."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Fix the cutover date with whoever is running the software change"
                - "Reconcile every account to the cutover date in the old software"
                - "Enter each outstanding item at cutover separately in the new software"
                - "Set the new feeds to start the day after cutover"
            - name: Replacing a lost or compromised card
              description: |-
                ## Purpose
                Replacement cards often come with a new number, refunds still landing on the old one and some charges moving across, and the card portal may show the two as separate accounts. Treating the replacement as a small event, with both cards reconciled until the old one goes quiet, stops lines being lost between them.

                ## Milestones
                1. The old card's last genuine transaction and the new card's first noted.
                2. Any fraudulent transactions reported to the issuer and recorded with the claim reference.
                3. Both card numbers mapped to the right ledger account, or the old one closed off cleanly.
                4. Recurring charges moved to the new card and confirmed.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Both old and new card statements reconcile to the ledger, any disputed transactions carry claim references, and every recurring charge has moved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the last genuine transaction on the old card"
                - "Record the issuer's claim reference for any disputed transaction"
                - "List the subscriptions and suppliers still billing the old card"
                - "Reconcile the old card until no more lines appear on it"
            - name: Disputing a bank or card error
              description: |-
                ## Purpose
                Banks and card issuers make mistakes: a deposit credited to someone else, a payment taken twice, a charge you never authorised. Most set a time limit for raising a dispute, so having the reconciliation evidence ready and the claim sent quickly is often what decides whether the money comes back.

                ## Milestones
                1. The disputed line identified with date, amount and statement page.
                2. The issuer's dispute time limit and process confirmed.
                3. The dispute raised in writing with supporting documents attached.
                4. The outcome posted in the ledger and the item closed on the chase list.

                ## Notes
                Report anything that looks like fraud to the bank by phone straight away, then follow up in writing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The disputed item has a dated written claim with evidence, and its outcome has been posted in the ledger and recorded on the chase list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark the disputed line on the statement and copy its details"
                - "Check the issuer's dispute time limit on its website or by phone"
                - "Send the dispute in writing with the evidence attached"
                - "Post the outcome and close the item on the chase list"
            - name: Freelancer's thirty minute monthly reconciliation
              description: |-
                ## Purpose
                Freelancers with one business account and one card do not need a finance team's process, but they do need the bank and the books to agree before the tax return. A fixed thirty minutes a few days after each statement, matching, agreeing both balances and noting anything odd, keeps the year-end job to about an hour.

                ## Milestones
                1. A thirty minute slot booked a few days after each statement date.
                2. Both the account and the card agreed to their statement balances.
                3. Personal spending that slipped onto the business card flagged for the accountant.
                4. Twelve months reconciled before the tax return is prepared.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive months in which the business account and card were each agreed to their statement balance within a week of the statement."
                cadence: rolling
              tasks:
                - "Book a repeating thirty minute slot after your statement arrives"
                - "Agree the account and the card to their statement balances"
                - "Flag any personal spending on the business card for the accountant"
            - name: Returned payments and reversals in a tight month
              description: |-
                ## Purpose
                In a month when cash is tight, the statement fills with returned cheques, failed direct debits, reversed transfers and the bank's fee for each one, while the books often still show the original payment as received. Recording each return against its original, with its fee, keeps the cash balance true at the moment it matters most.

                ## Milestones
                1. Every returned or reversed item on the statement paired with its original transaction.
                2. The customer or supplier balance reopened for each returned payment.
                3. Return fees posted from the statement.
                4. A list of returned items sent to whoever chases customers or pays suppliers.

                ## Notes
                If returns are frequent, talk to your bank and your accountant early. This project keeps the records straight; it does not solve the cash shortage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every returned or reversed item in the month is paired with its original entry, the related balances are reopened and the return fees are posted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Search the statement for returned, reversed and unpaid items"
                - "Pair each return with the original payment in the books"
                - "Reopen the customer invoice or supplier bill for each returned payment"
                - "Send the returned items list to whoever chases or pays them"
            - name: Handing reconciliations to a new team member
              description: |-
                ## Purpose
                New bookkeepers and finance assistants can usually match transactions within a week, but knowing which accounts are tricky, where the statements live and what counts as explained takes months to learn by accident. A short handover plan with supervised reconciliations gets them working alone without the quality dropping.

                ## Milestones
                1. A one-page guide to each account: purpose, statement source, quirks and usual outstanding items.
                2. Two months reconciled side by side with the current preparer.
                3. One month prepared alone and reviewed in full.
                4. The reconciliation calendar updated with the new preparer's name.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The new team member has prepared one month's reconciliations alone, reviewed with no significant review points, after two supervised months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page guide to each account's quirks and statement source"
                - "Book two supervised reconciliation sessions with the new team member"
                - "Review their first solo month in full and log the review points"
                - "Change the preparer name in the reconciliation calendar"
            - name: Reconciling for a client as an outside bookkeeper
              description: |-
                ## Purpose
                Bookkeepers reconciling a client's accounts depend on the client for statements, answers and access, and most delays start on the client side. Agreeing what the client sends, by when, and how queries are answered turns reconciliation into a predictable monthly service rather than a chase.

                ## Milestones
                1. A written list of accounts in scope, agreed with the client.
                2. Statement delivery method and date agreed for each account.
                3. A single query list shared with the client, with a reply deadline.
                4. A monthly reconciliation report sent to the client with outstanding items and open queries.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Three consecutive monthly reconciliation reports have reached the client on the agreed date, each listing open queries and outstanding items."
                cadence: rolling
              tasks:
                - "Agree the accounts in scope with the client in writing"
                - "Agree how and when the client sends each statement"
                - "Ask the agent to draft the monthly client report from the working papers"
                - "Send the reconciliation report and query list to the client"
            - name: Reconciliation status board for a finance team
              description: |-
                ## Purpose
                With twenty or more accounts across entities and currencies, the weekly question is which ones are late, which have differences and which are waiting for review. A status board with one row per account, showing last reconciled date, difference, oldest open item and sign-off, lets a finance lead manage the work rather than chase it.

                ## Milestones
                1. One row per account with last reconciled date, difference, oldest open item and review status.
                2. Rows updated by preparers as part of their work, not by the lead.
                3. Late or unbalanced accounts highlighted automatically.
                4. The board reviewed in the team's weekly meeting for a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A status board covering every account has been updated by preparers and reviewed weekly for one quarter, with late accounts visible at a glance."
                cadence: rolling
              tasks:
                - "Build the board with one row per account in the register"
                - "Ask each preparer to update their rows on finishing a reconciliation"
                - "Highlight accounts past their due day or carrying a difference"
                - "Go through the board in the team meeting @recurring(weekly:mon)"
            - name: Proof of cash four-way reconciliation
              description: |-
                ## Purpose
                A standard reconciliation checks balances; a proof of cash also checks that total receipts and total payments for the period agree between the statement and the books. Auditors and forensic accountants use it because it exposes errors that cancel out, such as a missing receipt hidden by a missing payment of the same size.

                ## Milestones
                1. A four-column layout for opening balance, receipts, payments and closing balance.
                2. Bank and book figures entered in each column for one quarter.
                3. Timing items adjusted at both the start and the end of the period.
                4. Any remaining receipts or payments difference investigated and explained.

                ## Notes
                Run it first on the highest volume account, or on any account where something feels wrong even though the balance agrees.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A quarterly proof of cash for the busiest account agrees receipts, payments and balances between bank and books, or explains every difference."
                cadence: rolling
              tasks:
                - "Lay out the four columns for opening, receipts, payments and closing"
                - "Total the statement's receipts and payments for the last quarter"
                - "Run a proof of cash on the busiest account @recurring(quarterly)"
                - "Explain any receipts or payments difference left after timing items"
            - name: Matching rules with tolerances for high-volume accounts
              description: |-
                ## Purpose
                High-volume accounts only reconcile on time if most lines match themselves, but loose matching rules quietly pair the wrong lines. Designing rules by amount, reference and date window, allowing a tolerance only where fees or rounding justify it, and sampling the automatic matches every month keeps the speed without losing accuracy.

                ## Milestones
                1. The twenty most frequent line types on the account listed with how each should match.
                2. Rules written with a date window and, where justified, an amount tolerance.
                3. A monthly sample of automatically matched lines checked by hand.
                4. Most of the account's lines matched by rule, with no wrong matches found in the sample.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Matching rules cover most lines on the busiest account, and a monthly sample of twenty automatic matches finds no wrong match for three months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the twenty most frequent line types on the busiest account"
                - "Write a matching rule with a date window for each type"
                - "Allow an amount tolerance only where fees or rounding justify it"
                - "Check twenty automatic matches by hand @recurring(monthly:17)"
            - name: Client money or trust account reconciliation
              description: |-
                ## Purpose
                Businesses that hold other people's money, such as letting agents, law firms, accountants and some travel and event firms, are often required by their regulator to reconcile client accounts more strictly, commonly as a three-way check between the bank, the client ledger and the cash book. Running this as its own routine, separate from the business's own accounts, protects the clients and the licence.

                ## Milestones
                1. Your regulator's or scheme's current rules for client account reconciliation read and noted.
                2. A three-way layout covering bank statement, total of client balances and cash book.
                3. Reconciliations done at the frequency the rules require and signed by the responsible person.
                4. Any shortfall or overdrawn client balance reported and corrected as the rules require.

                ## Notes
                Rules differ by profession and country. Confirm frequency, sign-off and reporting duties with your regulator or professional body rather than relying on this summary.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Client account reconciliations are completed at the frequency your regulator requires, with bank, client ledger and cash book agreeing and each one signed."
                cadence: rolling
              tasks:
                - "Find your regulator's current client account reconciliation rules"
                - "Build a three-way layout for bank, client balances and cash book"
                - "Complete and sign the client account reconciliation @recurring(monthly:10)"
                - "Report any client shortfall exactly as the rules require"
            - name: Sweep and zero-balance account reconciliation
              description: |-
                ## Purpose
                Larger businesses often run sub-accounts that sweep to a main account every night, so each sub-account statement shows a daily sweep line and a closing balance of zero. Reconciling these needs the sweeps matched on both sides and the main account treated as the real cash position; otherwise thirty sweep lines a month become thirty unexplained items.

                ## Milestones
                1. Each sweep arrangement documented with sub-accounts, main account and sweep timing.
                2. Sweep lines coded to a clearing account that nets to zero each day.
                3. Sub-accounts and the main account reconciled for the same dates.
                4. Failed or partial sweeps logged and raised with the bank.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every swept sub-account and its main account reconcile for the same month, with the sweep clearing account at zero and exceptions logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the bank for the sweep arrangement terms and timing"
                - "Record each sub-account and its main account in the register"
                - "Code sweep lines to a clearing account that nets to zero"
                - "Reconcile the sub-accounts and main account for the same dates"
---

# Bank & Card Reconciliation

This area is for owners, freelancers and finance teams who need the books to agree with what the bank, the card issuer and the lender say, and to be able to prove it. It starts with the foundations (a register of every account, an official statement archive, an agreed starting balance and a standard working paper), then the weekly and monthly routines that keep each account reconciled, the skills that make differences quick to find, the improvements and decisions that cut matching time, dated events such as the year-end pack or a bank switch, situations for freelancers, outside bookkeepers and new team members, and finally specialist work such as proof of cash and client money accounts.

What repeats is a weekly matching session and chase list, the monthly bank and card reconciliations with second-person review, ageing, transfer and drift checks, quarterly loan, savings, charges and proof of cash checks, and the yearly pack for the accountant. The Remediation plan, Operational checklist, Metrics log, Purchase decision and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
