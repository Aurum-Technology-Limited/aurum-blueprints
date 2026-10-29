---
id: finance-accounting.bookkeeping-transaction-coding
name: Bookkeeping & Transaction Coding
description: "A coding guide, a document behind every entry, a weekly coding habit and monthly checks that keep the ledger accurate, from agreed opening balances to a clean year-end pack."
category: business
version: 1.0.0
tags: [finance-accounting, bookkeeping-transaction-coding, small-business, freelancer, founder, transaction-coding, receipts, bank-rules]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - course
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
            - name: Cash or accrual recording basis decision
              description: |-
                ## Purpose
                Whether you record income when the customer pays or when you invoice changes every figure in the ledger, and some tax authorities let small businesses choose while others require one basis above a turnover limit. Settling the basis with your accountant before coding another month means the books, the income tax return and any sales tax return all count money the same way.

                ## Milestones
                1. The recording bases your tax authority allows for a business of your size and type confirmed with your accountant.
                2. A basis chosen and the date it applies from written down.
                3. Report and tax settings in the software matching the chosen basis.
                4. The decision and its reason saved in the bookkeeping notes.

                ## Notes
                Cash basis is simpler but can hide unpaid bills and invoices. Ask your accountant before switching part way through a year, as moving between bases often needs adjustments.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note records the chosen recording basis, the date it applies from and the accountant's confirmation, and the software settings match it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your accountant which recording bases your business is allowed to use"
                - "Check which basis the software's reports are currently set to"
                - "Write the chosen basis and its start date in the bookkeeping notes"
                - "Change report and tax settings to match the agreed basis"
            - name: Source document map for every money stream
              description: |-
                ## Purpose
                Bills arrive by email, card receipts sit in a wallet, sales come from an invoicing tool and a card reader, and each of them needs a document behind the ledger entry. Listing every stream of money in and out, where its paperwork lands and who collects it, shows exactly which records go missing and why.

                ## Milestones
                1. A list of every way money comes into and leaves the business.
                2. For each stream, the document that proves it and where that document arrives.
                3. Gaps marked where no document is kept today.
                4. A named person responsible for collecting each type of document.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page map lists every income and spending stream with its source document, arrival point and owner, and no stream is left without a document."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every way customers pay you and every way you pay for things"
                - "Note where the receipt, bill or statement for each one arrives"
                - "Mark each stream that has no document today"
                - "Name who collects the documents for each stream"
            - name: Opening balances agreed with last year's accounts
              description: |-
                ## Purpose
                If the ledger's starting balances for bank, loans, debtors, creditors and owner capital do not match the last signed accounts, every report afterwards is out by the same unexplained amount. Entering them from the accountant's final balance sheet, and agreeing each figure, gives the books a starting point that can be defended.

                ## Milestones
                1. The last approved year-end balance sheet and trial balance obtained from the accountant.
                2. Opening balances entered for every balance sheet account at the period start date.
                3. The ledger's opening trial balance agreed line by line to the accountant's figures.
                4. Any difference explained and corrected, with nothing left in an opening balance adjustment account.

                ## Notes
                For a brand new business the opening position is usually just the first money paid in and any costs the founder covered personally, which the founder's first-year project handles.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ledger's opening trial balance matches the last signed year-end figures account by account, with any difference explained in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the accountant for the final trial balance from the last year-end"
                - "Enter each balance sheet figure at the period start date"
                - "Compare the opening trial balance with the accountant's line by line"
                - "Clear anything sitting in the opening balance adjustment account"
            - name: One-page transaction coding guide
              description: |-
                ## Purpose
                Most coding errors come from the same twenty decisions made differently on different days: is software rent or subscriptions, is a train ticket travel or cost of sales. A one-page guide listing your common payees and transaction types against the account and tax code to use makes the answer the same whoever does the coding.

                ## Milestones
                1. The thirty most frequent payees and transaction types from the last six months listed.
                2. Each one assigned an account and tax code, checked with the accountant where unsure.
                3. Five awkward cases written up with the rule to follow.
                4. The guide saved where everyone who codes transactions can open it.

                ## Notes
                Keep the guide to the accounts you already have. If it keeps exposing accounts that overlap or are missing, that is a chart of accounts problem to fix separately.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A coding guide covering at least thirty payees or transaction types, each with an account and tax code, is saved and shared with everyone who codes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export six months of transactions sorted by payee"
                - "List the thirty most common payees with the account each should use"
                - "Add the tax code beside each account in the guide"
                - "Ask the agent to draft rules for five awkward cases from your notes"
                - "Check the guide against new payees and add them @recurring(quarterly)"
            - name: Personal transactions cleared from the business ledger
              description: |-
                ## Purpose
                Personal spending, such as a supermarket shop or a streaming subscription, paid from the business account and coded as an expense overstates costs and can create a tax problem if it is claimed. Finding each one and recording it as drawings, or against the director's loan account for a company, makes the profit figure honest.

                ## Milestones
                1. Every transaction in the current year reviewed for personal spending.
                2. Personal items recoded to drawings or the director's loan account, as the accountant advises for your business type.
                3. A year-to-date total of personal spending through the business known.
                4. Personal subscriptions and cards moved off the business account where possible.

                ## Notes
                For a limited company, an overdrawn director's loan account can have tax consequences. Show the total to your accountant rather than deciding the treatment yourself.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every personal transaction in the current year is recoded to drawings or the director's loan account, with a year-to-date total noted for the accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Filter the year's spending for supermarkets, entertainment and subscriptions"
                - "Ask the accountant which account personal spending should go to"
                - "Recode each personal item and add a short note"
                - "Move personal subscriptions over to a personal card"
            - name: Uncategorised transactions backlog cleared
              description: |-
                ## Purpose
                Bank feeds keep importing whether or not anyone codes them, and a backlog of a few hundred unexplained lines makes every report meaningless. Working through it oldest first, in fixed sittings and largest amounts first, gets the ledger back to a state the weekly routine can keep.

                ## Milestones
                1. The number and value of uncoded transactions counted by month.
                2. Every item over a chosen value coded or set aside with a question.
                3. All remaining items coded, matched or moved to the queries list.
                4. No uncoded transaction older than one week left in the feed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The bank feed shows no uncoded transactions older than one week, and every unresolved item sits on a dated queries list."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count uncoded transactions and their total value for each month"
                - "Block two ninety-minute sittings this week for the oldest month"
                - "Code everything over your threshold value first"
                - "Move anything you cannot explain to the queries list with a date"
            - name: Supplier default accounts and tax codes
              description: |-
                ## Purpose
                Accounting software can remember a default account and tax code for each supplier contact, so bills and bank lines from that supplier arrive half coded. Setting defaults for the regular suppliers removes a decision from hundreds of transactions a year and stops a fuel bill landing in office costs.

                ## Milestones
                1. Duplicate supplier contacts merged so each supplier exists once.
                2. A default account and tax code set for every supplier used more than twice a year.
                3. Suppliers whose bills need splitting across accounts flagged rather than given a default.
                4. New supplier contacts created with defaults from now on.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every supplier used more than twice in the past year has one contact record with a default account and tax code set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Run a supplier list sorted by number of transactions"
                - "Merge duplicate contacts for the same supplier"
                - "Set a default account and tax code on each regular supplier"
                - "Flag suppliers whose bills need splitting across accounts"
            - name: Catch-up plan for unrecorded months
              description: |-
                ## Purpose
                Owners who fall six or twelve months behind often stall because the task looks endless and the tax deadline keeps getting closer. A catch-up plan that gathers statements first, then codes month by month in order, turns the backlog into a dated sequence with a finish line before the accountant needs the books.

                ## Milestones
                1. Statements for every bank, card and loan account obtained for the missing months.
                2. A month-by-month plan with a target date for each block of three months.
                3. Each month coded and its closing balance agreed to the statement.
                4. The books current to last month, with the accountant told they are ready.

                ## Notes
                Ask the accountant whether they would rather receive the statements and receipts and catch up for a fee. For a very long gap that can cost less than your hours.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every month up to the last complete one is coded and its closing balance agrees to the bank statement, finished by the planned date."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the months with no coding and the accounts involved"
                - "Download statements for every missing month"
                - "Set a target date for each block of three months"
                - "Agree each finished month's closing balance to its statement"
            - name: Receipt capture inbox and folder setup
              description: |-
                ## Purpose
                Receipts that live in jacket pockets, three email accounts and a car door are the main reason costs go unrecorded or cannot be proved. One forwarding address for emailed bills, one capture method for paper receipts and a naming rule for files gives every document a single place to land.

                ## Milestones
                1. One email address or software inbox chosen for all supplier bills and receipts.
                2. Regular suppliers sending their bills to that address.
                3. A phone capture method set up for paper receipts.
                4. A file naming rule written down, such as date, supplier and amount.

                ## Notes
                Check what your tax authority accepts as a valid digital copy before throwing paper receipts away.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All supplier bills arrive at one inbox, paper receipts are photographed into one place, and a naming rule is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up one forwarding address for bills and receipts"
                - "Change the billing email on your ten most regular supplier accounts"
                - "Install a receipt capture method on your phone"
                - "Write the file naming rule at the top of the receipts folder"
            - name: Every business account represented in the ledger
              description: |-
                ## Purpose
                Forgotten savings accounts, payment app wallets and cards used once for an online order leave money moving that the books never see. Listing every account that holds or spends business money, and making sure each has a matching account in the ledger, closes the gap where transactions go missing entirely.

                ## Milestones
                1. A list of every bank, card, loan, payment app and cash float used by the business.
                2. Each one matched to an account in the ledger, with missing ones added.
                3. Start dates and opening balances recorded for newly added accounts.
                4. Closed or unused accounts marked inactive in the ledger.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every account that holds or spends business money appears in the ledger with a balance that matches its latest statement."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every account, card, wallet and cash float the business uses"
                - "Tick off each one that already exists in the ledger"
                - "Add missing accounts with their start date and opening balance"
                - "Mark closed accounts inactive so nobody codes to them"
            - name: Weekly bookkeeping session
              description: |-
                ## Purpose
                Coding a week of transactions takes twenty minutes while the details are fresh; coding three months takes a weekend of guessing. A fixed slot each week to code the bank feed, check attachments and note questions is the single habit that keeps the ledger accurate week to week.

                ## Milestones
                1. A fixed weekly slot of thirty to sixty minutes in the calendar.
                2. A five-step checklist for the session written and followed.
                3. Eight consecutive weekly sessions completed.
                4. The bank feed never more than seven days behind.

                ## Notes
                Start from the **Operational checklist** template. Friday suits many owners because the week's receipts are still at hand.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly sessions are logged and the bank feed has no uncoded line older than seven days."
                cadence: rolling
              tasks:
                - "Book a recurring weekly bookkeeping slot in your calendar"
                - "Write a five-step checklist for the session"
                - "Code the week's bank and card transactions against the coding guide @recurring(weekly:fri)"
                - "Note any transaction you could not code on the queries list"
            - name: Receipt upload and matching routine
              description: |-
                ## Purpose
                Receipts captured but never attached leave the ledger with entries nobody can prove, which matters when the accountant or the tax authority asks. Uploading the week's paper and email receipts and matching each to its bank line, the day before the coding session, means every expense carries its evidence.

                ## Milestones
                1. Paper receipts photographed and emailed bills forwarded within a week of the spend.
                2. Each receipt matched to its bank or card transaction.
                3. Unmatched receipts checked for spending on a card missing from the ledger.
                4. At least nine in ten expense transactions carrying an attachment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, at least 90 percent of expense transactions have a receipt or bill attached."
                cadence: rolling
              tasks:
                - "Photograph the paper receipts in your wallet and bag today"
                - "Upload and match the week's receipts to their bank lines @recurring(weekly:thu)"
                - "Investigate any receipt that has no matching transaction"
                - "Check the attachment rate for last month's expenses @recurring(monthly:3)"
            - name: Monthly bank rule review
              description: |-
                ## Purpose
                Bank rules that code transactions automatically save time until a supplier changes what it sells or a rule catches more than it should, and then they mis-code silently for months. A short monthly check of what each rule coded keeps the automation honest.

                ## Milestones
                1. A list of every active bank rule with what it matches and where it codes.
                2. Last month's rule-coded transactions checked for wrong matches.
                3. Rules that caught the wrong items narrowed or deleted.
                4. A dated note of each rule change and why it was made.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's rule-coded transactions are checked and every rule change is noted with a date and reason for six months running."
                cadence: rolling
              tasks:
                - "Export the list of active bank rules"
                - "Review last month's rule-coded transactions for wrong matches @recurring(monthly:9)"
                - "Tighten or delete any rule that coded something wrongly"
                - "Record each rule change in the bookkeeping notes"
            - name: Suspense and clearing account sweep
              description: |-
                ## Purpose
                Suspense, clearing and 'ask my accountant' accounts are useful parking places that turn into hiding places when nobody empties them. Clearing them every month, and treating any item older than thirty days as a problem, stops unexplained money building up until year-end.

                ## Milestones
                1. Every suspense or clearing account in the ledger identified.
                2. Each item in them listed with date, amount and what is known.
                3. Items moved to the right account once explained.
                4. No item older than thirty days left in suspense at month-end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At each month-end for six months, the suspense and clearing accounts hold no item older than thirty days."
                cadence: rolling
              tasks:
                - "Run a report of every item in suspense and clearing accounts"
                - "Clear explained items to their correct accounts @recurring(monthly:14)"
                - "Add unexplained items older than thirty days to the queries list"
                - "Ask the supplier or bank for documents on the oldest unknown item"
            - name: Monthly coding spot check of twenty transactions
              description: |-
                ## Purpose
                Coding mistakes rarely show in totals, so they survive until a margin looks odd or the accountant asks. Picking twenty random transactions each month and checking the account, tax code, date and attachment gives an error rate you can track and shows which kind of transaction keeps going wrong.

                ## Milestones
                1. A method for picking twenty transactions at random each month.
                2. Each sample checked for account, tax code, date and attachment.
                3. Errors fixed and the month's error rate logged.
                4. The two most common error types turned into rules in the coding guide.

                ## Notes
                Start from the **Metrics log** template to keep the monthly error rate in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly samples of twenty transactions are checked, with the error rate logged each month and held below 5 percent or falling."
                cadence: rolling
              tasks:
                - "Create a metrics log for the monthly coding error rate"
                - "Check twenty random transactions for account, tax code and attachment @recurring(monthly:22)"
                - "Fix each error found and record its type"
                - "Add a rule to the coding guide for any error seen twice"
            - name: Cash takings and petty cash record
              description: |-
                ## Purpose
                Cash is the hardest money to prove: takings that are never banked and petty cash spent without a slip vanish from the books. A weekly cash sheet, counted and signed, and a float topped up only against receipts, keeps cash in the ledger like any other account.

                ## Milestones
                1. A cash sheet with date, sales, cash banked and cash kept.
                2. A fixed petty cash float with a slip or receipt for every payment from it.
                3. The cash count recorded and entered in the ledger each week.
                4. Any difference between counted and recorded cash investigated within the week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks the cash count is recorded, entered in the ledger and any difference explained in writing."
                cadence: rolling
              tasks:
                - "Set a fixed petty cash float amount and write it on the tin"
                - "Start a cash sheet with columns for sales, banked and kept"
                - "Count the cash, record the total and post it to the ledger @recurring(weekly:sat)"
                - "Top up the float only against receipts for what was spent"
            - name: Loan repayments split into interest and capital
              description: |-
                ## Purpose
                Coding a whole loan or hire purchase repayment as an expense overstates costs and leaves the loan balance in the books higher than the lender's. Splitting each payment into interest, fees and capital from the lender's statement keeps both the profit figure and the liability correct.

                ## Milestones
                1. Every loan, hire purchase and finance agreement listed with its latest lender statement.
                2. Each repayment split between interest, fees and capital.
                3. The ledger balance for each loan agreed to the lender statement.
                4. A repayment schedule saved for each agreement where the lender provides one.

                ## Notes
                Leases can have their own accounting rules. Ask your accountant how to record them rather than treating every lease as a loan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's loan repayments are split into interest and capital, and every ledger loan balance matches the lender's latest statement."
                cadence: rolling
              tasks:
                - "Gather the latest statement for every loan and finance agreement"
                - "Ask each lender for a repayment schedule if you do not have one"
                - "Split the month's repayments into interest and capital @recurring(monthly:5)"
                - "Compare each loan balance in the ledger with the lender's statement @recurring(quarterly)"
            - name: Owner money in and out log
              description: |-
                ## Purpose
                When an owner tops up the account from savings or takes money out between salary runs, the ledger must record it as capital, drawings or a director's loan, never as income or an expense. A running log, coded the same day the money moves, keeps what the business owes you, or you owe it, clear for year-end.

                ## Milestones
                1. Accounts for owner contributions and for drawings or the director's loan in use.
                2. Every owner transfer for the current year coded to them.
                3. A running balance of what the business owes the owner, or the reverse.
                4. The balance shared with the accountant each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every owner transfer this year is coded to capital, drawings or the director's loan, with a running balance the accountant has seen."
                cadence: rolling
              tasks:
                - "Find every transfer between your personal and business accounts this year"
                - "Code each one to capital, drawings or the director's loan account"
                - "Update the running owner balance @recurring(monthly:26)"
                - "Send the owner balance to your accountant at each quarter end"
            - name: Quarterly duplicate and stale entry sweep
              description: |-
                ## Purpose
                Bills entered by hand and then imported again, payments matched to the wrong invoice and bills showing as unpaid long after they were settled all distort the books. A quarterly sweep for duplicates, old open items and odd balances catches them while the documents can still be found.

                ## Milestones
                1. A duplicate check run on bills, receipts and bank entries by amount and date.
                2. Bills and invoices open for more than ninety days checked against payments.
                3. Accounts showing a balance on the unexpected side, such as a debit on a supplier, explained.
                4. All findings fixed or put on the queries list.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter a duplicate and stale item check is completed and every finding is fixed or listed, for four quarters running."
                cadence: cyclic
              tasks:
                - "Run a report of transactions sharing the same amount and date"
                - "List open bills and invoices older than ninety days"
                - "Explain any account showing a balance on the unexpected side"
                - "Repeat the sweep in the first week of each quarter @recurring(quarterly)"
            - name: Records retention and filing routine
              description: |-
                ## Purpose
                Tax authorities in many countries can ask for business records going back five, six or more years, and a folder of unnamed photos is little help when they do. A filing structure by year and month, with a retention period confirmed by your accountant, means any record can be found in minutes and old ones are only deleted when it is safe.

                ## Milestones
                1. The retention period that applies to your business confirmed with your accountant.
                2. A folder structure by financial year and month for documents kept outside the software.
                3. Last year's records checked as complete and backed up.
                4. Each closed year archived and backed up in two places.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Records for each financial year are filed by month, backed up in two places, and kept for the retention period the accountant confirmed."
                cadence: cyclic
              tasks:
                - "Ask your accountant how long your business records must be kept"
                - "Create a folder for each financial year with monthly subfolders"
                - "Back up the documents folder to a second location"
                - "Archive and back up the closed financial year @recurring(yearly)"
            - name: Double-entry basics for owners
              description: |-
                ## Purpose
                Software hides the debits and credits, but when something goes wrong, such as a loan showing as income or a bank balance turning negative, the fix only makes sense once you know every entry has two sides. An afternoon on double entry, using your own transactions as examples, makes the reports readable and the accountant's adjustments understandable.

                ## Milestones
                1. The rule that every transaction changes at least two accounts explained in your own words.
                2. Ten of your own transactions written out as debits and credits.
                3. Your accounts sorted into profit and loss accounts and balance sheet accounts.
                4. One journal from the accountant read and explained without help.

                ## Notes
                Start from the **Course** template if you follow a structured beginner course.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten real transactions from your own books are written out correctly as debits and credits and checked by your accountant or a course answer sheet."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a short beginner bookkeeping course or guide"
                - "Write ten of last month's transactions as debits and credits"
                - "Sort your accounts into profit and loss and balance sheet lists"
                - "Ask your accountant to check your ten examples"
            - name: Reading an account transactions report
              description: |-
                ## Purpose
                When a number on the profit and loss looks wrong, the account transactions report shows every line behind it, and reading it well is how you find a mis-coded bill in two minutes. Learning to filter it by account, date and contact turns 'that looks high' into a specific correction.

                ## Milestones
                1. The general ledger or account transactions report found in your software.
                2. The report filtered by account, date range and contact.
                3. One unexpected profit and loss figure traced to the lines behind it.
                4. A saved version of the report ready for monthly use.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One unusual profit and loss figure has been traced through the account transactions report to its source lines, and the report layout is saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open the general ledger or account transactions report"
                - "Filter it for one expense account over the last quarter"
                - "Trace the largest line back to its source document"
                - "Save the report layout for monthly checks"
            - name: Capital or expense coding test
              description: |-
                ## Purpose
                A laptop, a van or a shop fit-out is usually recorded as an asset and written off over time, while a printer cartridge goes straight to expenses, and the line between them changes both profit and tax. Agreeing a value threshold and a few test questions with your accountant gives you a rule to apply whenever a large purchase lands in the feed.

                ## Milestones
                1. A capitalisation threshold agreed with your accountant.
                2. Three or four test questions written, such as whether the item lasts more than a year.
                3. This year's purchases above the threshold reviewed and recoded where needed.
                4. The rule added to the coding guide.

                ## Notes
                Capital allowances and depreciation rules vary by country. Record the purchase correctly and leave the tax treatment to your accountant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A capitalisation threshold and test questions are written in the coding guide, and every purchase above the threshold this year is coded by them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your accountant what value threshold to use for capital items"
                - "Write three test questions for deciding asset or expense"
                - "Review this year's purchases above the threshold"
                - "Recode any asset that went to expenses, with a note"
            - name: Mixed-use and partly private costs
              description: |-
                ## Purpose
                A phone used for work and family, a car that does school runs and client visits, a home office taking a share of the electricity: these are the costs freelancers and small owners code wrongly most often. Agreeing a method and a business percentage with your accountant, and keeping the evidence for it, makes each claim consistent and defensible.

                ## Milestones
                1. Every mixed-use cost listed with how it is paid.
                2. A business-use method and percentage agreed with the accountant for each.
                3. Evidence such as a mileage log or a usage estimate kept on file.
                4. Mixed-use bills coded the same way every month.

                ## Notes
                Rules on home office, vehicle and phone costs differ by country and business type. The percentage is your accountant's call; the record is yours.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each mixed-use cost has an agreed business percentage and evidence on file, and the last three months of those bills are coded to it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every cost you use for both business and private life"
                - "Ask your accountant how each one should be split"
                - "Start a mileage log if a vehicle is used for both"
                - "Code the last three months of mixed-use bills using the agreed split"
            - name: Tax codes on purchases and sales
              description: |-
                ## Purpose
                Standard rated, reduced, zero rated, exempt, outside the scope and reverse charge can look alike on a bill but land in different boxes of a sales tax return. Knowing what each code in your software means and when it applies stops the return being wrong before the filing work even starts.

                ## Milestones
                1. A list of the tax codes in your software with a plain description of each.
                2. The codes that apply to your usual sales and purchases identified.
                3. Three tricky cases, such as overseas software or a supplier who is not registered, worked through.
                4. Any uncertain case confirmed with the accountant.

                ## Notes
                Registering for, calculating and filing the return is separate work. The aim here is the right code on every line.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list explains every tax code your business uses, with three worked examples confirmed by your accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export the list of tax codes from your software"
                - "Write a one-line explanation beside each code you use"
                - "Work through three tricky cases from recent bills"
                - "Confirm the uncertain cases with your accountant"
            - name: Writing a manual journal correctly
              description: |-
                ## Purpose
                Manual journals fix what the bank feed cannot, such as moving a cost to the right account or recording a non-cash adjustment, and they are also where most bookkeeping damage is done. Learning to write one with a clear narration, a supporting document and a reversing date when needed means corrections leave a trail the accountant can follow.

                ## Milestones
                1. The parts of a journal understood: date, accounts, debits, credits, narration and attachment.
                2. Two practice journals posted in a demo company.
                3. A rule that every journal carries a narration and a document.
                4. Your first live correcting journal reviewed by your accountant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A live correcting journal with narration and attached evidence has been posted and reviewed by your accountant without changes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open the demo company in your software, or ask whether one exists"
                - "Post two practice journals that move a cost between accounts"
                - "Write a one-line narration rule for every journal"
                - "Ask the accountant to review your first live journal"
            - name: Refunds, credit notes and chargebacks
              description: |-
                ## Purpose
                Refunds coded as new income, or supplier credit notes entered as fresh bills, double up figures that should cancel out. Learning how your software expects refunds, credit notes and card chargebacks to be recorded, and against which original transaction, keeps sales and costs at their true net figures.

                ## Milestones
                1. The steps for recording a customer refund in your software written down.
                2. The steps for a supplier credit note and a refund from a supplier written down.
                3. Card chargebacks and their fees recorded against the original sale.
                4. Last quarter's refunds checked and recoded where they were entered as new income or new bills.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written steps for refunds, credit notes and chargebacks exist, and last quarter's refunds are recorded against their original transactions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find last quarter's refunds and credit notes in the bank feed"
                - "Write the steps your software uses for each type"
                - "Recode any refund entered as new income or a new bill"
                - "Link each refund to its original invoice or bill"
            - name: Foreign currency transactions at the right rate
              description: |-
                ## Purpose
                Any bill in dollars paid from a euro account, or a sale received in another currency, needs recording at a rate your software and accountant agree on, and the small difference when it is paid is a gain or loss rather than a mystery. Understanding how your software handles currency stops overseas transactions becoming permanent unexplained differences.

                ## Milestones
                1. The software's multi-currency setting and exchange rate source understood.
                2. Foreign currency bills and invoices recorded in their own currency, not converted by hand.
                3. Bank conversion fees and exchange differences coded to their own accounts.
                4. The approach checked with your accountant.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every foreign currency transaction last quarter is recorded in its original currency, with fees and exchange differences on their own accounts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether multi-currency is switched on in your software"
                - "List last quarter's transactions in other currencies"
                - "Re-enter any bill converted by hand in its original currency"
                - "Code bank conversion fees to bank charges, not cost of sales"
            - name: Money in that is not income
              description: |-
                ## Purpose
                Loans, owner top-ups, customer deposits, refunds from suppliers, insurance pay-outs and grants all arrive in the bank and look like sales to a hurried coder. Learning to spot each type and code it correctly stops profit, and any tax worked out from it, being overstated.

                ## Milestones
                1. A list of the non-sales receipts your business gets.
                2. The account for each type agreed with the accountant.
                3. This year's receipts checked and any wrongly coded as sales corrected.
                4. The rules added to the coding guide.

                ## Notes
                Grants and insurance pay-outs can have their own accounting and tax treatment. Ask before coding a large one.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every non-sales receipt this year is coded away from sales, and the coding guide lists the account for each type."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Filter this year's money in for anything that was not a customer payment"
                - "Ask your accountant which account each type belongs to"
                - "Recode loans, deposits and owner money sitting in sales"
                - "Add the non-income rules to the coding guide"
            - name: Bank rules for the twenty most frequent payees
              description: |-
                ## Purpose
                Twenty payees often make up most of the lines in a bank feed: the phone company, software subscriptions, the fuel card, the card reader. Writing a rule for each, narrow enough to avoid catching anything else, can halve weekly coding time without giving up control.

                ## Milestones
                1. The twenty payees with the most transactions in the last six months listed.
                2. A rule written for each, matching on payee and, where useful, an amount range.
                3. Each rule tested against last month's transactions before it goes live.
                4. Weekly coding time measured before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least twenty bank rules are live, each tested against a month of transactions, and weekly coding time has been measured before and after."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the twenty payees with the most transactions"
                - "Write a rule for each one matching on payee name"
                - "Test every rule against last month's transactions"
                - "Time one weekly session before and after the rules go live"
            - name: Missing receipts recovery drive
              description: |-
                ## Purpose
                Losing a third of a year's receipts is common, and most can still be recovered from supplier portals, email searches and card statements. Chasing them in one organised push, largest first, closes the gap before the year-end pack goes to the accountant.

                ## Milestones
                1. A list of expense transactions over a chosen value with no attachment.
                2. Supplier portals and email searched for copies of the missing documents.
                3. Suppliers asked for copies of anything still missing.
                4. A short written explanation attached to each item that cannot be recovered.

                ## Notes
                Some tax authorities accept other evidence when a receipt is lost. Ask your accountant what will do before writing explanations.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every expense over your chosen value this year has a document or a written explanation attached."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Run a list of expenses with no attachment, largest first"
                - "Download copies from supplier account portals"
                - "Email suppliers for copies of anything still missing"
                - "Ask the agent to draft a short explanation for each unrecoverable item"
            - name: Error correction method agreed with the accountant
              description: |-
                ## Purpose
                Deleting and re-entering a transaction in a period the accountant has already used changes figures they have filed, and the difference reappears next year as an unexplained adjustment. Agreeing how corrections are made, in which period and with what narration, protects filed figures and saves hours of rework.

                ## Milestones
                1. The accountant's preference for correcting errors in open and closed periods written down.
                2. A rule for when to edit a transaction and when to post a correcting journal.
                3. A short narration format for every correction.
                4. The method saved in the bookkeeping notes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written correction method, agreed by email with the accountant, sets out when to edit and when to journal in open and closed periods."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the accountant how they want errors in closed periods corrected"
                - "Write a rule for editing versus posting a correcting journal"
                - "Set a narration format for every correction"
                - "Save the agreed method in the bookkeeping notes"
            - name: Lock date and edit permissions
              description: |-
                ## Purpose
                Without a lock date, anyone with access can change last year's figures by accident, for example by matching an old payment to a new invoice. Setting a lock date after each period the accountant has used, and limiting who can post journals, keeps filed figures fixed while everyday coding carries on.

                ## Milestones
                1. Everyone with access to the books listed with their permission level.
                2. Journal and lock date permissions limited to one or two people.
                3. A lock date set at the last period the accountant signed off.
                4. A rule for moving the lock date forward after each filing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A lock date is set at the last signed-off period, and only named people can post journals or move it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List everyone with access to the books and their permissions"
                - "Remove journal permissions from anyone who does not need them"
                - "Set the lock date to the last period the accountant signed off"
                - "Move the lock date forward once each period is filed @recurring(quarterly)"
            - name: Tracking tags applied at the point of coding
              description: |-
                ## Purpose
                Classes, projects, locations or tracking categories only answer questions like 'which shop made money' if every transaction carries the tag, and tagging a year later is guesswork. Making the tag part of coding, with defaults on suppliers and a monthly check for untagged lines, keeps the split reports usable.

                ## Milestones
                1. The tracking categories already set up in the software listed with what each answers.
                2. Default tags set on suppliers and bank rules where one always applies.
                3. The coding guide showing the tag for each common transaction.
                4. Fewer than one in twenty transactions untagged each month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, fewer than 5 percent of income and expense transactions are missing a tracking tag."
                cadence: rolling
              tasks:
                - "List the tracking categories in use and what each answers"
                - "Add default tags to suppliers and bank rules that always need one"
                - "Add a tag column to the coding guide"
                - "Run an untagged transactions report and fix the gaps @recurring(monthly:16)"
            - name: Bookkeeping time audit and shortcuts
              description: |-
                ## Purpose
                Owners who spend four hours a week on the books usually lose most of it in a few places: hunting for receipts, retyping bills, fixing broken feeds. Timing each step for two weeks shows where the hours go, so the slowest part can be automated, batched or handed off first.

                ## Milestones
                1. Two weeks of bookkeeping time logged by task.
                2. The three slowest steps named with their weekly time.
                3. One change made to each, such as bill capture by email, a bank rule or a batch day.
                4. Weekly time measured again a month later and compared.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Bookkeeping time is logged for two weeks before and two weeks after three changes, and the weekly totals are compared in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Log the minutes spent on each bookkeeping task for two weeks"
                - "Rank the steps by weekly time spent"
                - "Make one change to each of the three slowest steps"
                - "Log two more weeks and compare the totals"
            - name: Coding queries list for the accountant
              description: |-
                ## Purpose
                Questions sent to the accountant one email at a time cost more, get answered slowly and are forgotten by the time the answer arrives. A single running list of transactions you could not code, each with date, amount and what you know, sent once a month, gets answers in a batch and turns each answer into a coding rule.

                ## Milestones
                1. One shared list with columns for date, amount, payee, question and answer.
                2. Every uncodable item added on the day it is found.
                3. The list sent to the accountant once a month.
                4. Each answer applied in the ledger and copied into the coding guide.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A queries list has been sent each month for three months and every answered item is coded and reflected in the coding guide."
                cadence: rolling
              tasks:
                - "Create the queries list with date, amount, payee, question and answer columns"
                - "Send the open queries to the accountant in one email @recurring(monthly:18)"
                - "Apply each answer in the ledger the day it arrives"
                - "Copy any answer that will come up again into the coding guide"
            - name: Year-end bookkeeping pack for the accountant
              description: |-
                ## Purpose
                Accountants charge more and take longer when the year-end books arrive with uncoded lines, missing statements and unexplained balances. A pack holding the closing statements, open bills and invoices, loan statements, the owner balance and a note of unusual items, delivered by an agreed date, keeps the accounts on time and the fee predictable.

                ## Milestones
                1. A delivery date agreed with the accountant for the year-end pack.
                2. Every transaction for the year coded, with the queries list cleared.
                3. Year-end statements collected for every bank, card and loan account.
                4. A covering note listing unusual items, new assets and owner transactions.
                5. The pack delivered by the agreed date.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The year-end pack, with every statement and a covering note, reaches the accountant on or before the agreed date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your accountant what the year-end pack must contain and by when"
                - "Download year-end statements for every account"
                - "Write a covering note on unusual items and new assets"
                - "Ask the agent to check the pack against the accountant's list"
                - "Send the finished pack by the agreed date"
            - name: Books ready for a lender or investor review
              description: |-
                ## Purpose
                Lenders, investors and buyers looking at your numbers will ask how sales are recorded, what sits in suspense and why a cost jumped in March. Getting the ledger clean, consistent and explainable a few weeks before the review shows the business is run carefully and avoids a credibility gap in the first meeting.

                ## Milestones
                1. The review date and the reports the lender or investor wants confirmed.
                2. Suspense cleared and coding consistent across the last two years.
                3. Large or unusual transactions explained in a short schedule.
                4. Reports checked by the accountant before they are sent.

                ## Notes
                Never change past figures to improve how they look. Corrections follow the agreed method, with the accountant's knowledge.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Before the review date, suspense is empty, a schedule explains every unusual item and the accountant has checked the reports sent."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the lender or investor which reports and periods they want"
                - "Empty the suspense and clearing accounts before the review"
                - "List and explain transactions above a chosen value"
                - "Have your accountant check the reports before sending"
            - name: First month after registering for sales tax
              description: |-
                ## Purpose
                Once a business registers for VAT, GST or sales tax, every sale and purchase from the registration date needs the right tax code, and transactions either side of that date are coded differently. Planning the first month avoids a first return built on lines coded the old way.

                ## Milestones
                1. The effective registration date recorded in the software's tax settings.
                2. Tax codes on supplier defaults and bank rules updated from that date.
                3. Transactions dated before and after registration checked for the right codes.
                4. The first month's coding reviewed by the accountant before the first return.

                ## Notes
                Some countries allow tax on certain pre-registration purchases to be reclaimed under set conditions. List them and ask your accountant.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every transaction in the first month after registration carries a correct tax code, checked by the accountant before the first return."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Enter the registration date and number in the software's tax settings"
                - "Update supplier defaults and bank rules to the new tax codes"
                - "Check transactions either side of the registration date"
                - "Send the first month's coding to the accountant for review"
            - name: Posting the accountant's year-end adjustments
              description: |-
                ## Purpose
                Accountants usually adjust the books when they prepare the annual accounts, for depreciation, accruals or corrections, and if those journals never reach your ledger the new year starts from the wrong balances. Getting the final journals, posting them and agreeing the trial balance closes the loop every year.

                ## Milestones
                1. The list of year-end adjusting journals received from the accountant.
                2. Each journal posted in the ledger, or confirmed as posted by the accountant.
                3. The ledger's year-end trial balance agreed to the signed accounts.
                4. The lock date moved to the year-end.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "After each year-end, the ledger's closing trial balance matches the signed accounts and the period is locked."
                cadence: cyclic
              tasks:
                - "Ask the accountant for the final adjusting journals once the accounts are signed @recurring(yearly)"
                - "Post each journal with the accountant's reference in the narration"
                - "Agree the trial balance to the signed accounts"
                - "Lock the books at the year-end date"
            - name: Peak season bookkeeping plan
              description: |-
                ## Purpose
                Retailers before the holidays, tour operators in high season and caterers in wedding season all see transaction volumes double just when there is least time to code them. Planning the peak, with rules set in advance, two short sessions a week and a catch-up date booked afterwards, stops a busy quarter turning into a backlog.

                ## Milestones
                1. Last year's busiest months and their transaction volumes identified.
                2. Extra bank rules and supplier defaults set before the peak begins.
                3. Two short coding sessions a week scheduled through the peak.
                4. A catch-up session booked for the week after the peak ends.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Through the peak months the bank feed stays no more than seven days behind, and a catch-up session is completed afterwards."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find last year's three busiest months by number of transactions"
                - "Add rules for suppliers you only use in the busy season"
                - "Book two short coding sessions a week through the peak"
                - "Book a catch-up session for the week after the peak"
            - name: Sole trader books on a simple setup
              description: |-
                ## Purpose
                Freelancers with a handful of clients and a few dozen costs a month do not need a complicated system, but do need one account, a short list of categories and a weekly slot. Setting up the minimum the tax return asks for, and nothing more, keeps bookkeeping to under half an hour a week.

                ## Milestones
                1. One account used only for the freelance work.
                2. A short category list matched to the expense headings on your tax return.
                3. Income recorded per client with the invoice or payment reference.
                4. A weekly half-hour coding slot kept for a month.

                ## Notes
                Ask your accountant what share of each payment to set aside for tax, and note it against each month's income.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Freelance income and costs run through one account, coded to categories that match the tax return headings, with a month of weekly sessions kept."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open or name one account used only for freelance money"
                - "Match your categories to the expense headings on your tax return"
                - "Record each client payment with its invoice reference"
                - "Set a weekly half-hour slot for coding the freelance account"
            - name: Founder's first-year books, share capital and pre-trading costs
              description: |-
                ## Purpose
                Founders often pay for the domain, the laptop and the company registration personally before the business has a bank account, and the share capital may never have been paid in. Recording these correctly in the first year, as money the company owes the founder and capital subscribed, avoids a messy first set of accounts.

                ## Milestones
                1. Every cost the founder paid personally before and after incorporation listed with receipts.
                2. Those costs recorded as owed to the founder, as the accountant advises.
                3. Share capital recorded and the payment for it traced to the bank, or noted as unpaid.
                4. Any investment received recorded against the equity or loan account the accountant specifies.

                ## Notes
                Convertible notes, SAFEs and similar instruments need your accountant's input on how they are recorded.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every founder-paid cost and the share capital are recorded in the ledger with documents, and the accountant has confirmed the treatment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every business cost you paid personally, with receipts"
                - "Ask your accountant how pre-incorporation costs should be recorded"
                - "Record the share capital and trace whether it was paid in"
                - "Code investment received to the account the accountant specifies"
            - name: Taking back the books after a bookkeeper leaves
              description: |-
                ## Purpose
                When a bookkeeper leaves suddenly, owners often find logins they do not hold, rules they do not understand and a month half coded. Securing access, finding where the work stopped and reading the previous conventions before coding anything new avoids two people's methods colliding in the ledger.

                ## Milestones
                1. Admin access to the software, bank feeds and receipt tools held in the owner's name.
                2. The last fully coded date identified for each account.
                3. The previous bookkeeper's rules, notes and open queries collected.
                4. A decision recorded on who codes from here and from which date.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The owner holds admin access to every tool, the last coded date per account is known, and a named person codes from a set date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check you hold admin access to the software and every connected tool"
                - "Remove the departing bookkeeper's logins once the handover is done"
                - "Find the last fully coded date for each account"
                - "Collect their notes, rules and open queries in one folder"
            - name: Family member helping with the books
              description: |-
                ## Purpose
                A spouse, parent or grown-up child coding transactions can save a small business real money, as long as they have the right access and a clear guide. Giving them a limited role, the coding guide and a short weekly review keeps family help useful and the books consistent.

                ## Milestones
                1. The tasks the helper will do, such as receipt upload or bank coding, agreed.
                2. A user login with only the permissions those tasks need.
                3. Two practice sessions done together using the coding guide.
                4. A weekly ten-minute review of what they coded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The family helper has their own limited login and has coded four weeks of transactions, each week reviewed by the owner."
                cadence: rolling
              tasks:
                - "Agree which bookkeeping tasks the helper will take on"
                - "Create a login with only the permissions those tasks need"
                - "Sit together for two coding sessions using the guide"
                - "Review what the helper coded that week @recurring(weekly:mon)"
            - name: First employee payroll journals in the ledger
              description: |-
                ## Purpose
                Once a business runs payroll, a single bank payment for wages hides gross pay, employer taxes, deductions and pension contributions that each belong in their own account. Posting a journal from each payroll summary keeps staff costs and the amounts owed to the tax authority correct, even when payroll itself is run elsewhere.

                ## Milestones
                1. The payroll summary report identified as the source for each journal.
                2. Accounts for wages, employer taxes, pension and payroll liabilities in use.
                3. A journal posted for each pay run and net pay matched to the bank.
                4. Payroll liability accounts clearing to zero when the tax authority and pension provider are paid.

                ## Notes
                If your payroll software posts the journal automatically, check one run against the summary instead of posting it a second time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each pay run for three months has a journal from the payroll summary, and the liability accounts clear to zero when paid."
                cadence: rolling
              tasks:
                - "Ask your payroll provider for the summary report each run produces"
                - "Check the ledger has accounts for wages, employer taxes, pension and liabilities"
                - "Post the payroll journal from the summary after each pay run @recurring(monthly:28)"
                - "Match the tax and pension payments to the liability accounts"
            - name: Standard coding playbook across client files
              description: |-
                ## Purpose
                Bookkeepers looking after fifteen small businesses make the same coding decision fifteen ways unless there is a house standard. A playbook of default accounts, tax code rules, narration formats and query handling, varied per client only where needed, makes files faster to review and easier to hand between staff.

                ## Milestones
                1. The coding decisions that vary most across current clients listed.
                2. A house standard written for each, with room for client exceptions.
                3. A one-page exceptions sheet for every client file.
                4. New team members trained on the playbook using two real files.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written coding playbook is in use across all client files, each with a one-page exceptions sheet."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the ten coding decisions that vary most between client files"
                - "Write the house standard for each decision"
                - "Create a one-page exceptions sheet for each client"
                - "Revise the playbook against new client situations @recurring(yearly)"
            - name: New client file review for bookkeepers
              description: |-
                ## Purpose
                Taking on a client whose books were kept by someone else means inheriting their errors, and the first month is when you can still say so. A structured review of opening balances, suspense, owner accounts, tax codes and rules, written up for the client, sets a clean baseline and the fee for any clean-up.

                ## Milestones
                1. Access to the client's software, statements and last accounts obtained.
                2. A review checklist run across balances, suspense, tax codes and rules.
                3. Findings written up with the work needed and its cost.
                4. The client's agreement to the clean-up scope recorded.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written review of the client's books, with findings and a priced clean-up scope, has been accepted by the client."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request software access, statements and last year's accounts"
                - "Run the review checklist across balances, suspense and tax codes"
                - "Write up the findings and the clean-up work needed"
                - "Agree the clean-up scope and fee with the client"
            - name: Audit trail and change history review
              description: |-
                ## Purpose
                Every accounting system keeps a history of who changed what and when, and reading it is how an experienced bookkeeper spots deleted transactions, backdated entries and edits to locked periods. A quarterly look at the change history catches honest mistakes and unauthorised changes before they become hard to unwind.

                ## Milestones
                1. The audit trail or history report found and its filters understood.
                2. Deletions, backdated entries and changes before the lock date filtered out.
                3. Each unexpected change explained by the person who made it.
                4. Findings and any permission changes recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews of the change history are recorded, with every deletion and backdated entry explained."
                cadence: cyclic
              tasks:
                - "Open the audit trail or history report in your software"
                - "Filter for deletions and entries dated in earlier periods"
                - "Review the change history for unexpected edits @recurring(quarterly)"
                - "Ask the person behind each unexpected change for the reason"
            - name: Testing automated coding suggestions
              description: |-
                ## Purpose
                Many systems now suggest an account for every bank line, and accepting suggestions in bulk is fast until the software learns a mistake and repeats it hundreds of times. Measuring how often the suggestions are right, by transaction type, shows where to accept them freely and where a person must still decide.

                ## Milestones
                1. A month of suggested codes compared with the codes a person would choose.
                2. Accuracy measured separately for regular suppliers, one-off purchases and money in.
                3. A written rule for which suggestions can be accepted in bulk.
                4. The test repeated after six months or a major software update.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule, based on a month of measured accuracy by transaction type, says which automated suggestions can be accepted without review."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export a month of suggested codes alongside the codes actually used"
                - "Mark each suggestion as right or wrong"
                - "Work out the accuracy for each transaction type"
                - "Write the rule for which suggestions to accept in bulk"
---

# Bookkeeping & Transaction Coding

This area is for owners, freelancers and founders who record their own transactions, and for the bookkeepers who do it for them. It starts with the foundations (a recording basis, a map of source documents, agreed opening balances and a one-page coding guide), then the weekly and monthly routines that keep the ledger current, the coding skills that trip most people up, the improvements and decisions that make coding faster and safer, dated moments such as the year-end pack, situations like a first employee or a bookkeeper leaving, and finally the work of an experienced bookkeeper running several client files.

What repeats is a weekly coding session and receipt upload, a monthly pass over bank rules, suspense and a twenty-transaction spot check, a monthly queries list to the accountant, quarterly duplicate and audit trail reviews, and the yearly archive and year-end adjustments. The Operational checklist, Metrics log and Course templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
