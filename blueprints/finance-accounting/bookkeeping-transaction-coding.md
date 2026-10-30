---
id: finance-accounting.bookkeeping-transaction-coding
name: Bookkeeping & Transaction Coding
description: "Every business transaction recorded, evidenced and coded to the right account and tax code each week, with rules, checks and a clean handover to your accountant."
category: business
version: 1.0.0
tags: [finance-accounting, bookkeeping-transaction-coding, small-business, freelancer, founder, bank-feeds, receipts, double-entry]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - onboarding-plan
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Bookkeeping & Transaction Coding
          description: "Recording and coding every business transaction against the chart of accounts so the ledger stays accurate week to week, for owners and bookkeepers."
          projects:
            - name: Business and personal money separated
              description: |-
                ## Purpose
                Mixing personal shopping and business spending on one account is the single biggest cause of slow, wrong bookkeeping, because every line needs a judgement and a question. Running all business money through accounts and cards used only for the business means the bank feed is already ninety per cent business, and the rest is easy to spot and code to the owner.

                ## Milestones
                1. One bank account and one card used only for business transactions.
                2. Every regular business payment, subscription and customer payment moved to the business account.
                3. Regular personal payments removed from the business account.
                4. A written rule for what to do when the wrong card is used by mistake.

                ## Notes
                If the business account is new, keep the old account open until the last customer and supplier have switched over, then code the overlap month with extra care.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A full month passes in which the business account and card carry no personal transactions other than recorded owner transfers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every payment that leaves or arrives in the current account in a typical month"
                - "Mark each one as business, personal or mixed"
                - "Move business subscriptions and direct debits to the business card"
                - "Give customers the business account details on the next invoice"
                - "Write down the wrong-card rule and keep it with your coding guide"
            - name: Cash or accrual recording basis decision
              description: |-
                ## Purpose
                Cash basis records income and costs when money moves, while accrual basis records them when the invoice or bill is raised, and the choice changes how every sale and purchase is entered. Some tax authorities let small businesses choose and others require accruals above a turnover limit, so agreeing the basis with your accountant before coding another month avoids rework at year end.

                ## Milestones
                1. The bases your tax authority allows for your business size and structure confirmed with your accountant.
                2. A basis chosen, with the date it applies from written down.
                3. Accounting software settings checked so reports and tax returns use the same basis.
                4. The basis recorded on the first page of your coding guide.

                ## Notes
                Changing basis part way through a year creates timing differences your accountant has to adjust for. Change at a year end if you can.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The recording basis, agreed with the accountant and dated, is written in the coding guide and matches the software settings."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your software is set to cash or accrual reporting today"
                - "Ask your accountant which recording bases your business is allowed to use"
                - "Note how your sales tax scheme interacts with the basis you prefer"
                - "Record the chosen basis and its start date in the coding guide"
            - name: Source document filing system
              description: |-
                ## Purpose
                Every coded line in the ledger should point to a receipt, bill, invoice, statement or contract that proves it, and without one the entry is a guess the tax authority can reject. Deciding once where each type of document lives, how it is named and how it reaches the ledger turns the year-end hunt into a search box.

                ## Milestones
                1. A list of every document type the business produces or receives, with where each one arrives.
                2. One digital home for source documents, with a folder or tag per year and type.
                3. A naming pattern of date, supplier and amount used for every new file.
                4. Paper documents scanned within a week and the originals stored by month.

                ## Notes
                Check your tax authority's rules on keeping digital copies before throwing away paper originals. Some still require originals for certain documents.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Any transaction from the last three months can be matched to its source document in under two minutes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List where bills, receipts and statements arrive today: email, post, apps, portals"
                - "Create one folder per year with subfolders for sales, purchases, bank and payroll"
                - "Agree a file naming pattern and rename the last month of documents to it"
                - "Set up an email forwarding address or folder for supplier bills"
                - "Box this year's paper receipts by month"
            - name: One-page transaction coding guide
              description: |-
                ## Purpose
                Most small businesses spend the bulk of their money with fewer than thirty suppliers, yet the same supplier gets coded three different ways because nobody wrote the answer down. A one-page guide listing each regular supplier and type of spend with its account, tax code and any tag makes coding consistent whoever does it.

                ## Milestones
                1. The top thirty payees by number of transactions pulled from the last twelve months.
                2. Each payee given one account, one tax code and any tracking tag.
                3. A short section for awkward spend: meals, travel, gifts, equipment and owner costs.
                4. The guide checked by your accountant and stored next to the ledger.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page coding guide covering at least thirty payees, reviewed by the accountant, is saved where every person who codes can open it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the last twelve months of payments grouped by payee"
                - "Pick the thirty payees that appear most often"
                - "Write the account, tax code and tag beside each payee"
                - "Send the draft guide to your accountant for corrections"
                - "Update the guide when a new regular supplier appears @recurring(quarterly)"
            - name: Uncategorised and suspense account cleared
              description: |-
                ## Purpose
                Uncategorised expense, suspense and ask-my-accountant accounts are where hard transactions go to hide, and a balance of a few thousand there makes the profit figure meaningless. Clearing them to zero, and keeping them there, is the fastest way to make the ledger trustworthy again.

                ## Milestones
                1. The current balance and number of lines in each holding account written down.
                2. Every line traced to a source document or a bank statement narrative.
                3. Lines recoded to their proper accounts, with unresolved items listed for the accountant.
                4. Each holding account at zero at the end of the month.

                ## Notes
                A holding account is fine for a week. If an item has been there for more than a month, it needs a question, not more waiting.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every uncategorised, suspense and query account shows a zero balance on the last day of the month, with any open questions logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Run a report of every line sitting in uncategorised or suspense accounts"
                - "Sort the lines by amount and work the ten largest first"
                - "Recode each line once its document or purpose is found"
                - "Clear the holding accounts back to zero @recurring(monthly:5)"
            - name: Sales tax codes on every transaction
              description: |-
                ## Purpose
                Tax codes on purchases and sales drive the sales tax or VAT return, so a wrong code on a single large bill can overstate or understate what is owed for the whole period. Setting the right default code on each account and supplier, and knowing when to override it, means the return builds itself from the coding.

                ## Milestones
                1. The tax codes your software offers listed with what each one is for.
                2. A default tax code set on each income and expense account.
                3. Exceptions noted for exempt, zero-rated, out-of-scope and partly claimable items.
                4. Last quarter's transactions checked against the defaults and wrong codes corrected.

                ## Notes
                Which rate applies, and what is claimable, is a question for your accountant or the tax authority's guidance. This project is about applying the answer consistently. Filing the return lives in its own area.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every income and expense account has a default tax code, and a check of last quarter finds no line with a missing or contradictory code."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Print the list of tax codes set up in your accounting software"
                - "Ask your accountant which code applies to each of your main costs"
                - "Set default tax codes on accounts and regular suppliers"
                - "Run last quarter's transactions by tax code and fix the outliers"
            - name: Bookkeeping backlog catch-up plan
              description: |-
                ## Purpose
                Months of uncoded bank lines feel impossible to start, so they keep growing until a tax deadline forces a rushed and expensive fix. Breaking the backlog into one month at a time, oldest first, with the documents gathered before coding begins, turns it into a few focused weekends rather than one panic.

                ## Milestones
                1. The number of uncoded months and lines counted for every bank account and card.
                2. Statements and documents for each backlog month gathered in one place.
                3. Months coded oldest first, each one ticked off when its holding accounts are clear.
                4. The ledger current to last week and the weekly session taking over from there.

                ## Notes
                Code the easy, repetitive lines with bank rules first. They are often seventy per cent of the backlog and they shrink the problem fast.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All bank and card accounts are coded up to the last seven days, with a dated note of which months the catch-up covered."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Count the uncoded lines on every bank and card feed"
                - "Download any missing statements for the backlog months"
                - "Ask the agent to group the backlog by payee so bank rules can clear the repeats"
                - "Block two half days a week in the calendar until the backlog is clear"
                - "Tick off each month on a list as it reaches zero uncoded lines"
            - name: Owner's drawings and loan account set up
              description: |-
                ## Purpose
                Owners pay business costs from personal cards, take money out and put money in, and coding those as expenses or income distorts both profit and the owner's tax position. A clear owner account, drawings for a sole trader or a director's loan account for a company, gives every one of those movements a correct home.

                ## Milestones
                1. The right owner account type for your business structure confirmed with your accountant.
                2. The account set up in the chart with a clear name and description.
                3. Last year's owner transfers and owner-paid expenses moved to it.
                4. The running balance known, with your accountant's view on any limits or tax effects.

                ## Notes
                In a company, an overdrawn director's loan can have tax consequences in many countries. Ask your accountant before the year end, not after.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All owner transfers and owner-paid business costs for the past year sit in one owner account whose balance has been shown to the accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your accountant whether you need a drawings or a director's loan account"
                - "Create the owner account with a description of what belongs in it"
                - "Find every owner transfer in the last year and recode it"
                - "List business costs you paid personally, with receipts, and post them to the owner account"
            - name: Grey-area coding questions agreed with the accountant
              description: |-
                ## Purpose
                Grey-area spend such as a phone used partly for personal calls, a team lunch, training or a gift to a client gets coded differently every time until someone decides. One meeting with your accountant to settle your ten most common grey areas, with the answers written into the coding guide, removes most of the hesitation from weekly coding.

                ## Milestones
                1. A list of ten recurring transactions you were unsure how to code.
                2. Each one discussed with your accountant and an answer recorded.
                3. The answers added to the coding guide with the date they were agreed.
                4. Past transactions of those types checked and recoded where needed.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Ten grey-area spending types each have a written, dated coding answer from the accountant in the coding guide."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note every transaction that made you hesitate during the next two coding sessions"
                - "Narrow the list to the ten that come up most often"
                - "Book a short call with your accountant to go through the list"
                - "Write each answer into the coding guide with the date"
            - name: Weekly bank feed coding session
              description: |-
                ## Purpose
                Twenty minutes a week keeps the ledger current and memories fresh, while a month left uncoded takes three hours and a lot of guessing. A fixed weekly slot to code every bank and card line, attach documents and park questions is the habit everything else in bookkeeping depends on.

                ## Milestones
                1. A fixed weekly slot in the calendar that survives busy weeks.
                2. A written checklist of the accounts to work through and the order.
                3. Every feed showing zero uncoded lines at the end of each session.
                4. Questions parked in one list rather than left as uncoded lines.

                ## Notes
                Start from the **Operational checklist** template. Coding is not reconciling: matching balances to statements is its own routine.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight weeks in a row every bank and card feed is at zero uncoded lines after the weekly session."
                cadence: rolling
              tasks:
                - "Choose a weekly slot and add it to the calendar as a repeating block"
                - "Write the session checklist from the operational checklist template"
                - "Code every bank and card feed line to zero @recurring(weekly:fri)"
                - "Move anything you cannot code into the queries list with a one-line note"
            - name: Bank rules for repeat transactions
              description: |-
                ## Purpose
                Bank rules turn the same rent, software subscription and card fee lines into one-click coding, but a rule written too broadly quietly miscodes everything that matches it. Building rules only for truly repeat payees, and reviewing them each quarter, gives the speed without the silent errors.

                ## Milestones
                1. Rules set up for every payee that appears at least monthly with the same coding.
                2. Each rule matched on a specific payee text rather than a broad word.
                3. Rules that need a human check set to suggest rather than auto-post.
                4. A quarterly review that removes or narrows any rule that miscoded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bank rules cover the monthly repeat payees, and the latest quarterly review found no rule that posted to the wrong account."
                cadence: rolling
              tasks:
                - "List payees that appear every month with the same account and tax code"
                - "Create a rule for each one using the exact payee text"
                - "Switch rules for variable payees to suggest-only"
                - "Review what each bank rule posted last quarter and fix any that misfired @recurring(quarterly)"
            - name: Receipt matching and missing receipt chase
              description: |-
                ## Purpose
                Receipts go missing in coat pockets, staff phones and supplier portals, and a line with no receipt is a cost you may not be able to claim. A weekly sweep that matches receipts to card lines and chases the gaps while the purchase is still remembered keeps the evidence complete.

                ## Milestones
                1. Every card holder knows where to send receipts and by when.
                2. Each week's card and bank lines matched to a receipt or invoice.
                3. A short list of missing receipts chased within seven days.
                4. Lines that cannot be evidenced marked and raised with the accountant.

                ## Notes
                Many suppliers will resend a receipt from their portal or by email if asked quickly. After three months, most will not.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At the end of each month, at least ninety-five per cent of card and bank lines over a small set amount have a document attached."
                cadence: rolling
              tasks:
                - "Tell every card holder where receipts go and the weekly cut-off"
                - "Chase receipts missing from last week's card spend @recurring(weekly:mon)"
                - "Download invoices from supplier portals and attach them to their lines"
                - "Mark lines with no evidence and add them to the queries list"
            - name: Monthly miscoding scan of account totals
              description: |-
                ## Purpose
                Miscodings rarely show up line by line but stand out at once when account totals are compared month to month: a sudden jump in repairs, a zero in rent, insurance in office supplies. A short monthly scan of the profit and loss by account against the prior month catches most coding errors before they reach a report.

                ## Milestones
                1. A saved report showing each account for this month beside the last three.
                2. Every movement above a set amount or percentage explained or investigated.
                3. Errors found and recoded in the same sitting.
                4. A one-line note of what was found, kept with the month's records.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month has a dated scan note, and every account movement above the agreed threshold has an explanation."
                cadence: rolling
              tasks:
                - "Save a profit and loss report with this month beside the previous three"
                - "Set a threshold for movements worth checking"
                - "Compare this month's account totals with the last three months @recurring(monthly:8)"
                - "Recode any line found in the wrong account and note the fix"
            - name: Transfers between your own accounts
              description: |-
                ## Purpose
                Moving money from the current account to savings, a card or a payment app shows up twice in the feeds, and coding either side as income or expense double counts it. Recording every internal move as a transfer, through a clearing account if the two sides land on different days, keeps profit untouched by money that never left the business.

                ## Milestones
                1. All business accounts, cards, savings pots and payment apps present in the ledger.
                2. Internal moves recorded as transfers, not as income or expense.
                3. A transfer clearing account used where the two sides land on different dates.
                4. The clearing account checked each month and back to zero.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The transfer clearing account nets to zero at every month end, and no internal transfer appears in the profit and loss."
                cadence: rolling
              tasks:
                - "List every account and pot money moves between"
                - "Add any missing account to the ledger so both sides can be matched"
                - "Recode past internal moves that were booked as income or expense"
                - "Check the transfer clearing account nets to zero @recurring(monthly:12)"
            - name: Petty cash book
              description: |-
                ## Purpose
                Notes and coins spent on parking, postage and milk vanish from the records unless someone writes them down, and a tin that never matches its book invites suspicion. A simple petty cash book with a fixed float, a slip for every payment and a weekly count keeps cash spending coded and provable.

                ## Milestones
                1. A fixed float amount agreed and one person responsible for the tin.
                2. Every payment recorded with date, purpose, amount and a receipt or slip.
                3. Weekly counts that match the book, or a note of the difference.
                4. Top-ups recorded as transfers from the bank, with spending coded to its accounts.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The petty cash count matches the book at each weekly check for a full month, with all spending coded."
                cadence: rolling
              tasks:
                - "Agree the float amount and who holds the tin"
                - "Set up a petty cash account in the ledger"
                - "Count the tin and match it to the petty cash book @recurring(weekly:thu)"
                - "Code the petty cash slips to their expense accounts at each top-up"
            - name: Daily takings record for cash and card sales
              description: |-
                ## Purpose
                Shops, stalls, salons and cafes that take cash and card at the counter need each day's takings recorded by payment type, or the bank deposits never line up with the sales. A daily takings sheet completed at closing, showing cash, card and any refunds, is the source document for every sales entry.

                ## Milestones
                1. A takings sheet with columns for cash, card, other payment types, refunds and float.
                2. The sheet completed and signed at every closing.
                3. Cash banked with the deposit matched to the sheets it covers.
                4. Daily totals posted to sales with the right tax code.

                ## Notes
                Record the full takings before paying any cash expenses out of the till. Netting them off hides both the sale and the cost.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completed takings sheet exists for every trading day of the month, and banked cash agrees to the sheets."
                cadence: rolling
              tasks:
                - "Design a one-page takings sheet with a column for each payment type"
                - "Show whoever closes up how to fill it in"
                - "Complete the takings sheet at closing @recurring(daily)"
                - "Post the week's takings to sales by payment type and tax code"
            - name: Loan and finance repayment splits
              description: |-
                ## Purpose
                Loan repayments and hire purchase instalments mix capital, interest and sometimes fees in one bank line, and coding the whole payment as an expense overstates costs and leaves the loan balance wrong. Splitting each payment using the lender's statement keeps the interest in the profit and loss and the balance owed matching the lender.

                ## Milestones
                1. Every loan, finance agreement and overdraft listed with its lender statement.
                2. A liability account in the ledger for each one, with the opening balance agreed.
                3. Each repayment split into capital, interest and fees.
                4. The ledger balance matching the lender's statement at least once a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each loan account balance in the ledger agrees to the lender's latest statement within the quarter."
                cadence: rolling
              tasks:
                - "Download the latest statement for every loan and finance agreement"
                - "Check each loan has its own liability account with the right balance"
                - "Split this month's repayments into capital, interest and fees @recurring(monthly:20)"
                - "Compare each loan balance with the lender statement and correct differences"
            - name: Payroll journal posting after each pay run
              description: |-
                ## Purpose
                Payroll software calculates pay, but the ledger usually sees only the net wages leaving the bank, which hides employer taxes, pension contributions and the amounts owed to the tax authority. Posting a payroll journal from the payroll summary each period puts gross pay, deductions and liabilities in the right accounts.

                ## Milestones
                1. A standard payroll journal with lines for gross pay, employer costs, deductions and liabilities.
                2. The journal posted from the payroll summary within two days of each pay run.
                3. Net pay, tax and pension payments from the bank cleared against the liability accounts.
                4. Payroll liability accounts back to zero after each payment is made.

                ## Notes
                Running payroll itself belongs to its own area. This project is only about getting payroll into the ledger correctly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pay run in the quarter has a posted journal, and wages and payroll tax liability accounts clear to zero once paid."
                cadence: rolling
              tasks:
                - "Ask the payroll provider for the summary report that supports a journal"
                - "Build a payroll journal layout with one line per cost and liability"
                - "Post the payroll journal from the pay run summary @recurring(monthly:28)"
                - "Match bank payments for wages and payroll taxes to the liability accounts"
            - name: Coding queries list for the accountant
              description: |-
                ## Purpose
                Questions about odd transactions pile up in heads and email threads, then get forgotten until the year-end bill shows the accountant spent hours on them. A single running list with date, amount, payee and the question, sent monthly, gets answers while the detail is fresh and keeps the accountant's time focused.

                ## Milestones
                1. One shared list with columns for date, payee, amount, question and answer.
                2. Every parked transaction from coding sessions added to it.
                3. The list sent to the accountant each month.
                4. Answers posted to the ledger and copied into the coding guide where they repeat.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No item on the queries list is older than sixty days without an answer, and repeat answers appear in the coding guide."
                cadence: rolling
              tasks:
                - "Create the queries list with columns for date, payee, amount, question and answer"
                - "Add every parked item from this month's sessions"
                - "Send the open queries to your accountant @recurring(monthly:15)"
                - "Post the answers and add repeat ones to the coding guide"
            - name: Lock dates on coded months
              description: |-
                ## Purpose
                Once a month has been coded and checked, a stray edit or a back-dated bill can change figures that have already been reported or filed. Setting a lock date after each month's checks are done protects the history while still letting the current month move.

                ## Milestones
                1. The lock date feature in your software found and understood.
                2. Who can override a lock decided and limited.
                3. A lock date moved forward each month once the scan and holding account checks are done.
                4. Any later change to a locked month agreed in writing first.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The lock date is never more than one month behind the last checked month, and only named people can override it."
                cadence: rolling
              tasks:
                - "Find the lock date setting and read how overrides work"
                - "Decide who is allowed to edit a locked period"
                - "Move the lock date to the end of the last checked month @recurring(monthly:10)"
            - name: Debits and credits for business owners
              description: |-
                ## Purpose
                Debits and credits sound like jargon, but knowing that every transaction touches two accounts explains why a miscoded payment breaks the balance sheet as well as the profit figure. A few hours of practice with your own transactions makes reports, journals and your accountant's questions far easier to follow.

                ## Milestones
                1. The five account types and which side increases each one understood.
                2. Ten of your own transactions written out as debit and credit pairs.
                3. A sale, a bill, a payment and a refund traced through a trial balance.
                4. A one-page cheat sheet kept next to the coding guide.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten real transactions are written out correctly as debit and credit pairs, checked by the accountant or a course answer key."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose a short free bookkeeping course or guide on double entry"
                - "Write out ten of last month's transactions as debit and credit pairs"
                - "Open a trial balance and find where each of the ten landed"
                - "Make a one-page cheat sheet of the account types"
            - name: Capital or expense coding test
              description: |-
                ## Purpose
                Buying a laptop, a van or a shop fit-out is not a normal expense, and coding it straight to the profit and loss can overstate costs one year and understate them the next. A simple written test, agreed with your accountant, for when a purchase is an asset tells you at the coding stage which account it belongs in.

                ## Milestones
                1. A capitalisation threshold agreed with your accountant.
                2. A short test for useful life and purpose written into the coding guide.
                3. Last year's large purchases checked against the test.
                4. Purchases that qualify passed to whoever keeps the asset register.

                ## Notes
                Repairs that restore something are usually expenses, while improvements that extend its life or value are often assets. Your accountant has the final word for your jurisdiction.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The coding guide holds a written capital or expense test with the agreed threshold, and last year's large purchases have been checked against it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your accountant what threshold the business uses for capital items"
                - "Write the capital or expense test into the coding guide"
                - "Pull last year's purchases above the threshold and check how each was coded"
                - "Send any qualifying purchases to the asset register owner"
            - name: Split transactions and mixed-use costs
              description: |-
                ## Purpose
                One supermarket receipt can hold office supplies, client refreshments and personal shopping, and one phone bill can be part business and part private. Learning to split a single bank line across several accounts, with the private share sent to the owner, keeps each cost in the right place without rewriting the bank feed.

                ## Milestones
                1. The split feature in your software practised on three real transactions.
                2. A written business-use percentage for the phone, car and home costs, agreed with your accountant.
                3. Mixed receipts split at coding with the private share to the owner account.
                4. The percentages reviewed when circumstances change.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Business-use percentages are written in the coding guide and three months of mixed receipts are split to match them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find three mixed receipts from last month"
                - "Split each one across the right accounts in the software"
                - "Agree business-use percentages for phone, vehicle and home costs with your accountant"
                - "Write the percentages into the coding guide"
            - name: Refunds, credit notes and chargebacks
              description: |-
                ## Purpose
                Refunds are often coded as new income or a fresh expense, which inflates both sales and costs and leaves the original transaction looking unpaid. Knowing how to record a supplier refund, a customer credit note and a card chargeback against the original entry keeps sales and costs at their true net figures.

                ## Milestones
                1. The software's method for customer credit notes and supplier refunds practised once each.
                2. Refunds coded to the same account and tax code as the original transaction.
                3. Card chargebacks recorded with the fee kept separate.
                4. Last quarter's refunds checked and any coded as income or new costs corrected.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every refund and credit note in the last quarter sits against the same account and tax code as its original sale or purchase."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull every incoming refund and outgoing customer refund from last quarter"
                - "Check which account and tax code each one was given"
                - "Recode refunds to match their original transactions"
                - "Record the chargeback method and fee account in the coding guide"
            - name: Annual subscriptions and prepaid costs
              description: |-
                ## Purpose
                Paying a year of insurance or software in one go lands the whole cost in a single month on accrual books, making that month look poor and the next eleven look better than they are. Recording large prepaid costs to a prepayments account and releasing a twelfth each month gives a truer monthly picture.

                ## Milestones
                1. A threshold agreed for which annual payments are spread.
                2. Current prepaid insurance, software, rent and memberships listed with start and end dates.
                3. A prepayments schedule showing the monthly release for each one.
                4. The monthly release posted on the same day each month.

                ## Notes
                On cash basis books this is usually unnecessary. Check with your accountant before adding the work.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A prepayments schedule lists every annual cost over the threshold, and its balance agrees to the ledger at month end."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List annual payments made in the last twelve months over the agreed threshold"
                - "Build a schedule with cost, start date, end date and monthly amount"
                - "Post the opening prepayment balance as a journal"
                - "Release the monthly prepayment amounts to their expense accounts @recurring(monthly:25)"
            - name: Foreign currency transactions at the right rate
              description: |-
                ## Purpose
                Foreign currency bills, sales and card payments rarely clear at the rate on the invoice, and the difference ends up dumped in whatever account is nearest. Recording each transaction in its own currency, letting the bank payment set the actual amount and coding the gap to an exchange difference account keeps costs and sales honest.

                ## Milestones
                1. Multi-currency settings in your software checked or switched on if needed.
                2. Foreign currency suppliers and customers set up in their own currency.
                3. Exchange gains and losses coded to one dedicated account.
                4. Card payments in other currencies coded with the fee shown separately where the statement gives it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All foreign currency transactions last quarter are recorded in their own currency with differences in one exchange account."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find every transaction in another currency from last quarter"
                - "Check whether your plan supports multi-currency and turn it on if needed"
                - "Create an exchange gains and losses account if one is missing"
                - "Recode last quarter's currency differences to that account"
            - name: Reading the general ledger for errors
              description: |-
                ## Purpose
                The general ledger report lists every line in every account, and it is where an experienced eye finds duplicates, negative expenses, wrong dates and lines with no description. Learning to scan it account by account turns a report most owners never open into the best error check you have.

                ## Milestones
                1. The general ledger and trial balance reports found and saved in the software.
                2. Five common error patterns known: duplicates, negatives, round sums, blank narrations and wrong-year dates.
                3. One full month scanned and every error found corrected.
                4. A list of accounts most prone to errors kept for future checks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One full month of the general ledger has been scanned, with each correction listed and the error-prone accounts noted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run the general ledger report for last month"
                - "Filter for negative balances in expense accounts"
                - "Look for duplicate amounts on the same date with the same payee"
                - "Correct each error and write down which accounts it came from"
            - name: Manual journals with narration and evidence
              description: |-
                ## Purpose
                Journals change the ledger with no bank line behind them, so a journal without a narration or a supporting document is the first thing an accountant or auditor questions. A standard of what every manual journal must carry, from reason to evidence to who posted it, makes corrections safe and explainable years later.

                ## Milestones
                1. A written standard: date, reason, source, preparer and attachment for every journal.
                2. Journal numbering or references that run in order.
                3. Last year's manual journals checked against the standard.
                4. Unsupported journals explained or reversed with the accountant's agreement.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every manual journal posted in the last quarter has a narration, a reference and an attached supporting document."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the journal standard as five required fields"
                - "Run a report of every manual journal from the last year"
                - "Ask the agent to flag journals with blank or vague narrations"
                - "Add the missing reasons and attachments, or raise them with your accountant"
            - name: Recoding last year's miscoded history
              description: |-
                ## Purpose
                Last year's books may hold months of costs in the wrong accounts, which makes trend reports misleading and next year's comparisons wrong. Correcting the history in one controlled pass, before the accountant finalises the year, is cheaper than living with it or paying for it to be fixed during the year-end work.

                ## Milestones
                1. The size of the problem known: which accounts and roughly how many lines.
                2. The accountant's agreement on whether to recode lines or post correcting journals.
                3. Corrections made account by account, with a log of what moved.
                4. Account totals for the year reviewed and signed off as sensible.

                ## Notes
                If the year has already been filed, do not recode it. Ask your accountant how corrections to a filed period should be made.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A correction log lists every recoded account for the year, and the accountant confirms the corrected totals."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Run last year's profit and loss by month and mark accounts that look wrong"
                - "Ask your accountant whether the year is still open for corrections"
                - "Ask the agent to summarise which payees landed in more than one account"
                - "Recode one account at a time and log each move"
                - "Send the corrected totals to your accountant"
            - name: Auto-categorisation accuracy check
              description: |-
                ## Purpose
                Auto-categorisation and AI coding suggestions in accounting software are fast and often right, but they learn from past coding, so one early mistake can be repeated hundreds of times. Measuring how often suggestions are accepted unchanged, and where they go wrong, tells you which to trust and which to switch off.

                ## Milestones
                1. A sample of one hundred auto-coded lines checked against the coding guide.
                2. An accuracy rate worked out and the most common wrong suggestions listed.
                3. Settings changed or rules added to stop the repeat errors.
                4. A quarterly recheck of a fresh sample.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An accuracy rate for auto-coded lines is recorded each quarter, with a decision on which suggestion types stay switched on."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Export one hundred lines that were coded by suggestion last quarter"
                - "Check each against the coding guide and mark the wrong ones"
                - "Turn off or override the suggestion types that fail most often"
                - "Recheck a fresh sample of auto-coded lines @recurring(quarterly)"
            - name: Coding decision tree for awkward spend
              description: |-
                ## Purpose
                Client lunches, staff treats, conference tickets, gifts and travel all look alike on a card statement but often need different accounts and tax treatment. A short decision tree that asks who benefited, what it was for and whether it was personal sends each one to the right place without a call to the accountant.

                ## Milestones
                1. The five types of awkward spend that come up most often in your business named.
                2. Two or three questions written for each that lead to an account.
                3. The tree checked by your accountant.
                4. The tree printed or pinned beside the coding guide and used in sessions.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page decision tree covering at least five awkward spending types has been checked by the accountant and is in use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the awkward spend types that appeared in the last three months"
                - "Write the questions that separate each into the right account"
                - "Send the draft tree to your accountant to check"
                - "Pin the agreed tree next to the coding guide"
            - name: Location and department tags applied at coding
              description: |-
                ## Purpose
                Location, department or job tags only work if they are applied to every line at the moment of coding; tags added later are patchy and the reports built on them mislead. Making the tag a required step in the weekly session, with defaults on bank rules, gives reliable splits by site or team.

                ## Milestones
                1. The tags the business already uses listed with what each one means.
                2. Default tags added to bank rules and supplier records where the answer never changes.
                3. Tagging included in the weekly coding checklist.
                4. A monthly report showing no untagged lines in the accounts that need tags.

                ## Notes
                Designing which tags exist belongs with the chart of accounts. This project is about applying them consistently.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months running, every line in the tagged accounts carries a location or department tag."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Run last month's report filtered to untagged lines"
                - "Add default tags to bank rules and suppliers that always belong to one site"
                - "Add a tagging step to the weekly coding checklist"
                - "Tag the untagged lines from last month"
            - name: Coding accuracy sample each month
              description: |-
                ## Purpose
                Without a measure, nobody knows whether coding is getting better or slowly drifting, and errors only surface when a report looks wrong. Checking twenty random lines a month against the coding guide gives a simple accuracy score and shows exactly which accounts or people need help.

                ## Milestones
                1. A sampling method chosen that picks twenty lines at random across accounts.
                2. Each month's sample scored against the coding guide.
                3. The score and error types recorded in a running log.
                4. Repeat error types fed back into the guide, bank rules or training.

                ## Notes
                Start from the **Metrics log** template. A steady score above ninety-five per cent is a good sign the guide and rules are doing their job.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of twenty-line samples are scored in the metrics log, with each error type traced to a fix."
                cadence: rolling
              tasks:
                - "Set up a coding accuracy log from the metrics log template"
                - "Pick twenty random lines and check each against the coding guide @recurring(monthly:18)"
                - "Record the score and the type of each error"
                - "Update the guide or bank rules for any error seen twice"
            - name: Bookkeeping records retention schedule
              description: |-
                ## Purpose
                Tax authorities in most countries expect business records to be kept for several years after the period they cover, and the required time differs by country and record type. A written retention schedule, checked against your tax authority's guidance, says what to keep, for how long and when it can be destroyed.

                ## Milestones
                1. Your tax authority's record-keeping period for your business type found and noted.
                2. A schedule listing each record type, where it lives and its keep-until date.
                3. Old records past their date identified for secure disposal.
                4. A yearly review of the schedule after each year end.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A retention schedule naming each record type, its location and its keep-until date matches the tax authority's published rules."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Look up how long your tax authority says business records must be kept"
                - "List each record type and where it is stored"
                - "Write the keep-until date next to each record type"
                - "Securely dispose of records past their keep-until date @recurring(yearly)"
            - name: Customer deposits and advance payments
              description: |-
                ## Purpose
                Customer deposits for future work, gift vouchers and payments in advance are money held, not yet earned, and coding them straight to sales makes revenue arrive too early. Recording them to a deposits or deferred income account until the work is delivered keeps sales in the month they were really made.

                ## Milestones
                1. Every type of advance payment the business takes listed.
                2. A liability account set up for deposits and another for unredeemed vouchers if needed.
                3. Deposits released to sales when the job is delivered or the voucher used.
                4. The deposits balance agreed to a list of open customer jobs each month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The deposits account balance agrees to a dated list of open customer jobs and unredeemed vouchers at month end."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the advance payments the business takes today"
                - "Ask your accountant how deposits should be recorded for your basis"
                - "Create a deposits account and recode open deposits to it"
                - "Release completed jobs from the deposits account to sales"
            - name: Year-end bookkeeping handover to the accountant
              description: |-
                ## Purpose
                Year end is where every shortcut in the year shows up as accountant hours on the invoice. Handing over a ledger with every feed coded, holding accounts at zero, queries answered and a short covering note means the accountant prepares the accounts rather than finishing the bookkeeping.

                ## Milestones
                1. All transactions to the last day of the year coded with documents attached.
                2. Holding and clearing accounts at zero, or each balance explained.
                3. A list of closing balances for loans, owner accounts and deposits, with supporting statements.
                4. A covering note of unusual items sent with the handover, before the accountant's deadline.

                ## Notes
                Ask your accountant for their own year-end checklist first. Matching it saves a round of questions.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The accountant confirms receipt of a complete handover, coded to the year end, before the date they asked for."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your accountant for their year-end checklist and handover date"
                - "Code all feeds to the year-end date and clear the holding accounts"
                - "Gather loan, owner account and deposit statements at the year-end date"
                - "Ask the agent to draft a covering note of unusual items from the queries list"
                - "Book next year's handover date with your accountant @recurring(yearly)"
            - name: New financial year bookkeeping set-up
              description: |-
                ## Purpose
                The first week of a new financial year is the cheapest time to fix coding habits, because nothing has been booked yet. Archiving last year's documents, starting fresh folders, reviewing bank rules and the coding guide and setting new lock dates means the year starts clean rather than inheriting last year's mess.

                ## Milestones
                1. Last year's documents archived into a closed folder.
                2. New folders for the year created with the same structure.
                3. The coding guide and bank rules reviewed for any changes in suppliers or tax rates.
                4. Opening balances checked against the accountant's final figures once available.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "New year folders exist, last year is archived, and opening balances agree to the accountant's final figures."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the new year's document folders"
                - "Move last year's documents into a closed archive folder @recurring(yearly)"
                - "Check tax rate changes for the new year against your default tax codes"
                - "Compare opening balances with the accountant's final figures when they arrive"
            - name: Ledger detail ready for a lender or investor
              description: |-
                ## Purpose
                Banks and investors increasingly ask for direct access to the ledger or a detailed transaction export, not just summary accounts, and a messy ledger can stall a loan or a raise. Preparing the ledger before the request, so every line has a clear description and nothing sits uncategorised, turns their review into a formality.

                ## Milestones
                1. The likely request scope known: which periods, reports and access.
                2. Every line in the period coded, described and evidenced.
                3. Unusual or one-off items explained in a short note.
                4. Read-only access or an export prepared and shared only with the agreed party.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The requested period is fully coded with no uncategorised lines, and an explanation note is ready before access is granted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the lender or investor which periods and reports they want"
                - "Clear any uncategorised or suspense lines in that period"
                - "Write a short note explaining one-off and unusual items"
                - "Set up read-only access or an export for the agreed party only"
            - name: Coding through a business bank account switch
              description: |-
                ## Purpose
                Switching banks means weeks of payments arriving in two accounts, direct debits moving at different times and a new feed that starts on a different day from the old one closing. Planning the coding for the overlap, with both feeds in the ledger until the old one is empty, stops duplicated and missing lines.

                ## Milestones
                1. The new account added to the ledger with its feed connected and start date noted.
                2. Bank rules copied or rebuilt for the new feed.
                3. Every payment moved, with a tick list showing which side it now arrives on.
                4. The old account emptied, its final statement coded and the account archived in the ledger.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The old account shows a zero balance in the ledger with its final statement coded, and no payment is duplicated across the two feeds."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add the new account to the ledger and connect its feed"
                - "Copy the old account's bank rules to the new feed"
                - "Keep a tick list of payments as each moves to the new account"
                - "Code the old account's final statement and archive it in the ledger"
            - name: Coding grants, insurance payouts and one-off receipts
              description: |-
                ## Purpose
                Grants, insurance claim payouts, government support, asset sale proceeds and loan drawdowns all arrive as money in, but very few of them are ordinary sales. Coding each to the right account, with the award letter or claim settlement attached, keeps sales figures clean and gives your accountant what they need for the tax treatment.

                ## Milestones
                1. Every non-sales receipt in the last year listed with its source document.
                2. Each one coded to a suitable account agreed with the accountant.
                3. Conditions attached to grants noted, with any repayment risk flagged.
                4. A rule added to the coding guide for each type of one-off receipt.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "All non-sales receipts from the last year are coded outside the sales accounts, each with its award or settlement document attached."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Filter last year's money in for anything that is not a customer payment"
                - "Find the award letter, claim settlement or agreement for each one"
                - "Ask your accountant which account each type should use"
                - "Recode the receipts and add the rules to the coding guide"
            - name: Freelancer books in thirty minutes a week
              description: |-
                ## Purpose
                Freelancers rarely have the time or the transaction volume for a full bookkeeping routine, but they still need clean income, expense and mileage records at tax time. A stripped-down weekly half hour on a Sunday evening, covering invoices paid, expenses coded and travel logged, keeps a one-person business ready for its tax return.

                ## Milestones
                1. A short list of the only accounts you need, agreed with your accountant.
                2. Business mileage and travel logged weekly with dates and purpose.
                3. Every client payment matched to its invoice.
                4. Home working costs recorded using the method your accountant recommends.

                ## Notes
                Keep it small. Fifteen well-used accounts beat sixty half-used ones for a freelancer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every week of the quarter has coded expenses, matched client payments and a mileage entry or a note saying none."
                cadence: rolling
              tasks:
                - "Agree a short list of accounts with your accountant"
                - "Log business trips with date, purpose and distance @recurring(weekly:sun)"
                - "Match each client payment to its invoice"
                - "Ask your accountant how home working costs should be recorded"
            - name: Side business kept apart from household money
              description: |-
                ## Purpose
                A side business started from a spare bedroom often runs through the family account for its first year, which makes it hard to tell whether it makes money and painful at tax time. Pulling out the business transactions, starting simple books and agreeing with your household how money moves between the two makes the side business visible.

                ## Milestones
                1. Every side business transaction since starting pulled out of the household account.
                2. A simple ledger or spreadsheet with income and a handful of cost categories.
                3. A separate account or card used for the side business from now on.
                4. A household agreement on how and when money moves between the two.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A side business ledger shows every transaction since the first sale, and new transactions run through a separate account."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Highlight side business lines on the last six household statements"
                - "Copy them into a simple ledger with a handful of cost categories"
                - "Open or assign a separate account or card for the side business"
                - "Agree with your household how profit is moved out and recorded"
            - name: Founder-paid costs and pre-trading expenses
              description: |-
                ## Purpose
                Founders typically pay for the domain, the first laptop, legal fees and travel personally before the company has a bank account, and those costs are easily lost. Gathering them, with receipts, and recording them as money the company owes the founder makes sure they reach the books and the founder can be repaid properly.

                ## Milestones
                1. A list of every cost paid personally before and since the company was formed.
                2. A receipt or statement line for each one.
                3. The costs recorded against the founder's loan account with the right expense or asset accounts.
                4. Any repayment to the founder coded against the same account.

                ## Notes
                Whether pre-trading costs can be claimed, and from what date, depends on the country. Ask your accountant before you record them.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every founder-paid cost has a receipt and sits in the founder loan account, with the balance owed agreed by the founder and accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search personal cards and email for every cost paid for the company"
                - "Collect a receipt or statement line for each cost"
                - "Ask your accountant from what date pre-trading costs can be included"
                - "Post the costs to the founder loan account with their expense accounts"
            - name: Partner or family member helping with the books
              description: |-
                ## Purpose
                When a partner, parent or grown-up child helps code transactions in the evenings, the risks are inconsistent coding and nobody knowing who changed what. Giving them their own login, a short walk-through of the coding guide and a clear split of what they code and what they leave for you makes the help safe and quick.

                ## Milestones
                1. A separate user login with only the permissions the helper needs.
                2. A one-hour walk-through of the coding guide and decision tree.
                3. A written split of what they code and what they leave for you.
                4. A check of their first month's coding with feedback.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The helper codes with their own login, and a review of their first month finds fewer than one error in twenty lines."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Create a separate login for the helper with limited permissions"
                - "Walk them through the coding guide using last week's transactions"
                - "Write down which accounts and payees they code and which they leave"
                - "Review their first month of coding together"
            - name: Seasonal business coding through peaks and quiet months
              description: |-
                ## Purpose
                Seasonal businesses such as holiday lets, tour operators, garden services and event caterers get most of their transactions in a few busy months, when nobody has time to code. A plan that keeps coding light during the peak and does the catch-up and clean-up in the quiet season stops the busy months turning into a year-end backlog.

                ## Milestones
                1. Busy and quiet months marked on the calendar.
                2. A minimum peak-season routine of bank rules and receipt capture only.
                3. A quiet-season session booked to finish coding and clear queries.
                4. Deposits taken for next season coded as held money, not sales.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The ledger is fully coded within four weeks of each peak season ending, with deposits for the next season held separately."
                cadence: cyclic
              tasks:
                - "Mark the busy and quiet months on the calendar"
                - "Write the minimum coding routine for the peak weeks"
                - "Book a catch-up session at the start of the quiet season @recurring(quarterly)"
                - "Check next season's deposits are sitting in the deposits account"
            - name: Bookkeeper onboarding a new client ledger
              description: |-
                ## Purpose
                Taking on a new client's books means inheriting someone else's coding choices, missing documents and odd balances. A structured first month, with a ledger health check, a coding guide agreed with the client and a clear list of what you need from them each week, sets the relationship up on facts rather than assumptions.

                ## Milestones
                1. An engagement scope agreed: which accounts, how often and what the client sends.
                2. A ledger health check completed on holding accounts, duplicates and opening balances.
                3. A client-specific coding guide drafted and signed off.
                4. The first month coded to the agreed standard with queries sent in one batch.

                ## Notes
                Start from the **Onboarding plan** template. Agree in writing who answers coding questions on the client side.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The client has signed off a coding guide and received a ledger health check report within the first month."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set up the client onboarding plan from the onboarding plan template"
                - "Request read access, statements and last year's accounts"
                - "Run a health check of holding accounts, duplicates and opening balances"
                - "Draft the client coding guide and send it for sign-off"
            - name: Final bookkeeping when winding down a business
              description: |-
                ## Purpose
                Closing a business still needs a complete set of books to the final day, covering the last sales, asset sales, the final payroll, closing bank accounts and what is owed to or by the owners. Planning the last bookkeeping steps with your accountant means final returns can be filed and the records kept for the required years.

                ## Milestones
                1. A closing date agreed with your accountant and any adviser.
                2. Final sales, costs and asset disposals coded with documents.
                3. Every bank account and card emptied, coded and closed.
                4. A final ledger export and the full document archive stored for the retention period.

                ## Notes
                Closing a company has legal and tax steps beyond the books. Take advice from your accountant or a solicitor on the order to do them in.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every business account shows zero in the ledger, and a final export with the document archive is stored where it can be found for the retention period."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the closing date and sequence of steps with your accountant"
                - "List every account, card, loan and subscription still open"
                - "Code the final transactions on each account as it closes"
                - "Export the full ledger and archive it with the documents"
            - name: Multi-client coding workflow for bookkeepers
              description: |-
                ## Purpose
                Bookkeepers with fifteen or more client files lose hours switching between ledgers, and a client with a backlog quietly falls behind until a deadline exposes it. A weekly cross-client exceptions list showing uncoded lines, holding account balances and open queries for every client lets you work by exception and spot trouble early.

                ## Milestones
                1. Every client file listed with its coding frequency and next deadline.
                2. A weekly exceptions view of uncoded lines and holding account balances per client.
                3. A standard coding guide layout used across all client files.
                4. Clients more than two weeks behind contacted the same week.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "For eight weeks running, no client file has uncoded lines older than its agreed coding frequency."
                cadence: rolling
              tasks:
                - "List every client file with its coding frequency and next filing deadline"
                - "Build an exceptions sheet with uncoded lines and holding balances per client"
                - "Update the cross-client exceptions sheet @recurring(weekly:tue)"
                - "Contact any client more than two weeks behind on documents"
            - name: Reverse charge and imported services coding
              description: |-
                ## Purpose
                Services bought from abroad, such as software, advertising and freelance work from overseas, often carry special sales tax treatment like the reverse charge in VAT systems, and the code chosen at the transaction drives the return. Setting up the right tax codes and supplier defaults, confirmed by your accountant, stops these lines from being silently miscoded every month.

                ## Milestones
                1. Every overseas supplier identified from the last twelve months.
                2. The tax treatment for each type of import confirmed with your accountant.
                3. Tax codes and supplier defaults set to match.
                4. Last quarter's overseas purchases checked and corrected.

                ## Notes
                The rules differ by country and change often. Treat this as applying your accountant's answer, never as working it out alone.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "All overseas suppliers carry a default tax code confirmed by the accountant, and last quarter's imports are coded to match."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Filter last year's payments for suppliers based outside your country"
                - "Group them by type: software, advertising, contractors, goods"
                - "Ask your accountant which tax treatment applies to each group"
                - "Set supplier default tax codes and recode last quarter"
            - name: Coding handover manual for cover and new hires
              description: |-
                ## Purpose
                Holidays, illness or a bookkeeper leaving can stop coding for weeks if the method lives in one person's head. A short handover manual with logins held safely, the weekly checklist, the coding guide, the decision tree and where every document arrives means someone else can pick up the ledger within a day.

                ## Milestones
                1. A manual that links the checklist, coding guide, decision tree and queries list.
                2. A list of every feed, portal and inbox involved, with who holds access.
                3. A colleague or stand-in who has run one coding session from the manual alone.
                4. A review date set after each change of person or software.

                ## Notes
                Never write passwords into the manual. Record who holds each login and use a password manager to share access.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stand-in has completed one full weekly coding session using only the manual, with no more than two questions."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every feed, portal and inbox you use for coding"
                - "Record who holds access to each without writing down passwords"
                - "Collect the checklist, coding guide and decision tree into one manual"
                - "Ask a stand-in to run one coding session from the manual"
---

# Bookkeeping & Transaction Coding

This area is for owners, freelancers and founders who code their own transactions, and for the bookkeepers who code them on their behalf. It starts with the foundations (separating personal money, choosing a recording basis, a home for every document, a coding guide and a cleared backlog), moves through the weekly and monthly routines that keep the ledger current, the coding skills that catch most people out and the improvements that make coding faster, then dated moments such as the year-end handover, situations from a first side business to a wind-down, and the specialist work of a bookkeeper running several client files.

What repeats is a weekly coding session with a receipt chase, daily takings for anyone handling cash, monthly checks on uncategorised items, transfers, loans, payroll journals and a twenty-line accuracy sample, a monthly query list for the accountant, quarterly bank rule and auto-coding reviews, and a yearly handover and archive. The Operational checklist, Metrics log and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
