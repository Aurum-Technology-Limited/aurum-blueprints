---
id: personal-finance.bank-statement-reconciliation
name: Household Bank Statement Checks
description: "Every bank and card statement checked against receipts each month: a receipt system, balance reconciliation, a log of queries and refunds, and the know-how to dispute duplicates, errors and payments you never made."
category: personal
version: 1.0.0
tags: [personal-finance, bank-statement-reconciliation, everyone, statements, reconciliation, receipts, duplicate-charges, disputes]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - month-end-close
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Household Bank Statement Checks
          description: "Checking monthly bank and card statements against receipts to catch errors, duplicate charges and unauthorised payments."
          projects:
            - name: Statement dates and access for every account
              description: |-
                ## Purpose
                Checking only works if you know which statements exist, when each one closes and how to get it, and most households have at least one forgotten savings account, store card or payment app that never gets looked at. A single list of every account and card, with its statement date and download route, is the map every later check follows.

                ## Milestones
                1. Every current account, savings account, credit card, store card and payment app listed with its last four digits.
                2. The statement closing date and frequency written beside each one.
                3. A tested download route for each statement: app, website or paper.
                4. Accounts nobody has checked in the last year flagged for the look-back project.

                ## Notes
                Include payment wallets and buy-now-pay-later apps: they issue their own statements and are easy to miss.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of every account and card in the household, each with its statement date and a download route that has been tested once."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every account and card you can find in your wallet, apps and post"
                - "Find the statement closing date for each one in its app or terms"
                - "Download one statement from each account to prove the route works"
                - "Flag any account you have not looked at in over a year"
            - name: E-statement delivery and notification settings
              description: |-
                ## Purpose
                Banks increasingly stop posting statements and simply put a PDF in the app, often with no alert, so months slip by unread. Switching on a notification for every new statement, and deciding account by account whether paper is still needed, means each statement announces itself on the day it is ready.

                ## Milestones
                1. Statement preferences reviewed in every banking and card app.
                2. An email or push notification switched on for each new statement.
                3. Paper kept only where you, a carer or an accountant genuinely need it.
                4. One test month in which every statement alert arrived as expected.

                ## Notes
                Some accounts only keep online statements for a limited number of years, so the archive project matters more once paper stops.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every account sends a notification when a new statement is ready, confirmed by one full month of alerts."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Open the statement settings in your main banking app"
                - "Switch on new statement alerts for every account and card"
                - "Decide which accounts still need paper statements and why"
                - "Tick off each statement alert as it arrives over the next month"
            - name: Receipt keeping system for statement checks
              description: |-
                ## Purpose
                Without receipts there is nothing to check a statement against, and most lines get waved through on memory. A simple rule for where card slips, email receipts and order confirmations go, kept until the statement they belong to has been checked, turns vague recognition into proof.

                ## Milestones
                1. One physical place for paper receipts, such as an envelope per month.
                2. An email folder or label for order confirmations and e-receipts.
                3. A rule for photographing receipts that fade or come on thermal paper.
                4. Receipts kept until their month is checked, then filed or binned by a set rule.
                5. A full month of receipts collected for the first check.

                ## Notes
                Thermal till receipts fade within months. Photograph anything you may need for a return, warranty or dispute.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One full month of paper and email receipts collected in the agreed places, ready to be matched against a statement."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put a labelled envelope for this month's receipts by the front door"
                - "Create an email folder called Receipts and a filter for order confirmations"
                - "Photograph any thermal receipt worth more than a small purchase"
                - "Agree with everyone in the household where their receipts go"
            - name: Statement and receipt folder structure
              description: |-
                ## Purpose
                Downloaded statements named statement(14).pdf are useless when you need March from two years ago for a dispute or a mortgage application. A folder per year with a fixed naming pattern, such as year, month, bank and last four digits, makes any statement findable in under a minute.

                ## Milestones
                1. A folder per year with a subfolder per account in your chosen storage.
                2. A naming pattern written down and applied to every statement saved so far.
                3. Matching receipt scans filed beside the statement month they belong to.
                4. A backup copy of the folder somewhere other than your laptop.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder structure holding at least the last three months of statements for every account, all named to one pattern and backed up."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose where statements will live: cloud drive, computer or both"
                - "Write down a naming pattern such as 2026-03 Bank 1234"
                - "Rename and file the last three months of statements to the pattern"
                - "Set up a backup of the folder to a second location"
            - name: Expected regular payments checklist
              description: |-
                ## Purpose
                Half the lines on a typical statement are the same every month: rent or mortgage, council or property tax, utilities, insurance, phone. Listing them with their usual amount and date lets you tick them off in seconds and spend your attention on the lines that are new, larger or missing.

                ## Milestones
                1. Every regular debit and credit listed with payee name as it appears on the statement.
                2. The usual amount and the expected date written beside each.
                3. A tolerance noted for payments that vary, such as energy or a phone bill.
                4. The checklist used during one monthly statement check.

                ## Notes
                Use the payee name exactly as the bank prints it, not the company's trading name, or the matching slows down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checklist of every regular payment with its statement name, usual amount and date, used in at least one monthly check."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Highlight every repeating line on last month's statement"
                - "Copy each payee name exactly as the bank prints it"
                - "Add the usual amount, expected date and an allowed variation"
                - "Update the checklist for payments that started, stopped or changed @recurring(quarterly)"
            - name: Dispute and reporting time limits fact sheet
              description: |-
                ## Purpose
                Every protection you have against a wrong charge comes with a deadline, and most people learn it only after it has passed. Card scheme disputes often run to around four months from the transaction, and many countries give longer for unauthorised payments, but the real limits are in your own bank's terms. One page listing them per account tells you how far back each monthly check has to reach.

                ## Milestones
                1. The terms and conditions for each main account and card found and saved.
                2. The reporting limit for unauthorised payments noted for each account.
                3. The usual window for card disputes and direct debit claims noted.
                4. A one-page fact sheet kept in the statements folder.

                ## Notes
                This sheet records what your providers publish. If a limit is unclear, ask the bank in writing and save the reply.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page sheet showing the reporting and dispute time limits for every account and card, sourced from each provider's terms."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current terms for your main current account"
                - "Find the section on unauthorised and incorrect payments"
                - "Note the dispute window for each credit and debit card"
                - "Recheck the limits when your bank sends updated terms @recurring(yearly)"
            - name: First line-by-line statement check
              description: |-
                ## Purpose
                Before building a routine, do one check properly: a full month on your main account, every line matched to a receipt, a regular payment or a memory you can confirm. It shows how long a check really takes, which lines are hard to identify and whether anything has been going wrong unnoticed.

                ## Milestones
                1. Last month's main account statement printed or open beside the receipts.
                2. Every line marked as matched, regular, or unknown.
                3. Each unknown line investigated or raised with the bank.
                4. Time taken and problems found written at the top of the statement.

                ## Notes
                Expect the first check to take an hour or more. Later ones get much faster once the regular payments checklist exists.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "One complete month on the main account checked line by line, with every line marked and every unknown line resolved or queried."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Block an hour this week for the first statement check"
                - "Mark each line with a tick, an R for regular or a question mark"
                - "Look up every question-mark line in the banking app for more detail"
                - "Write down how long it took and what you found"
            - name: Opening and closing balance reconciliation
              description: |-
                ## Purpose
                Matching individual lines catches odd charges, but only a balance check proves nothing is missing. Taking the opening balance, adding the credits and subtracting the debits should land exactly on the closing balance, and agreeing that figure with your own records catches dropped payments, double counting and statements that do not join up.

                ## Milestones
                1. Opening balance plus credits minus debits worked out for one statement.
                2. The result agreed to the penny with the printed closing balance.
                3. Each statement's opening balance confirmed to equal the previous closing balance.
                4. Any difference traced to a specific line and explained.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three consecutive statements for the main account reconciled from opening to closing balance with no unexplained difference."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up the credits and debits on last month's statement"
                - "Check that opening plus credits minus debits equals the closing balance"
                - "Confirm the opening balance matches the previous statement's closing balance"
                - "Repeat the reconciliation for the two statements before it"
            - name: Twelve-month look-back for missed errors
              description: |-
                ## Purpose
                If statements have gone unchecked, there may be duplicate charges, forgotten refunds or small unauthorised payments still inside the window for claiming them back. A one-off sweep of the last twelve months on every account, focused on unknown merchants, repeated amounts and refunds that never arrived, recovers what can still be recovered.

                ## Milestones
                1. Twelve months of statements downloaded for every account on the list.
                2. Lines with unknown merchants, exact repeats or round test amounts highlighted.
                3. Promised refunds from the year checked against credits received.
                4. Every finding raised with the bank or merchant inside its time limit.
                5. A total of money recovered written down.

                ## Notes
                Small charges of one or two units of currency from unknown names are a common sign of a card being tested before larger fraud. Raise them, however minor.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Twelve months of statements on every account reviewed, with each finding raised or resolved and the total recovered recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download twelve months of statements for every account"
                - "Sort each year of transactions by amount to spot exact repeats"
                - "List the refunds you were promised and look for each credit"
                - "Raise each finding, oldest first, before its time limit runs out"
                - "Ask the agent to summarise the findings into one list with amounts"
            - name: Monthly statement check on a fixed day
              description: |-
                ## Purpose
                The check that actually protects you is the one done every month, a few days after statements land, while the receipts are still to hand and every dispute window is wide open. A fixed date and a short checklist keep it to twenty or thirty minutes and stop it drifting into the next quarter.

                ## Milestones
                1. A fixed monthly date chosen a few days after most statements close.
                2. A written checklist covering regular payments, new lines, refunds and the balance.
                3. Each month's statement initialled or marked as checked in the folder.
                4. Six consecutive monthly checks completed.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly checks completed on the chosen date, each statement marked as checked in the folder."
                cadence: rolling
              tasks:
                - "Create the monthly check list from the operational checklist template"
                - "Pick a check date three or four days after your main statement closes"
                - "Check every statement that landed this month against receipts and the regular list @recurring(monthly:9)"
                - "Mark each checked statement in its file name or folder"
            - name: Weekly pending transactions glance
              description: |-
                ## Purpose
                Problems are cheapest to fix before a transaction posts: a card machine that charged twice, a hotel hold that is far too big, a payment you do not recognise. Five minutes a week scanning pending and recent lines in the banking app means most monthly checks find nothing new.

                ## Milestones
                1. A weekly slot, such as Wednesday evening, attached to an existing routine.
                2. Pending and recent transactions scanned on every active card.
                3. Anything odd written into the queries log the same day.
                4. Eight weekly glances completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly scans of pending and recent transactions completed, with any odd line logged within a day of spotting it."
                cadence: rolling
              tasks:
                - "Find the pending transactions view in each banking app"
                - "Scan pending and recent lines on every active card @recurring(weekly:wed)"
                - "Log anything unexpected in the queries log the same day"
            - name: Credit card statement check before the due date
              description: |-
                ## Purpose
                Wrong charges on a credit card are easiest to dispute before you pay them, and paying without checking can mean interest on a charge you never owed. Checking each card statement in the gap between the statement date and the payment due date fits the check into the card's own billing cycle.

                ## Milestones
                1. Statement date and due date written down for every credit and store card.
                2. Each card statement checked line by line before payment.
                3. Any disputed amount raised with the issuer before the due date.
                4. Interest, fees and the minimum payment noted on each statement.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every credit card statement for three months checked and any dispute raised before its payment due date."
                cadence: rolling
              tasks:
                - "Write the statement date and due date for each card in one place"
                - "Check each credit card statement before paying it @recurring(monthly:18)"
                - "Ask the issuer how a disputed amount affects the payment you owe"
            - name: Open queries and disputes log
              description: |-
                ## Purpose
                Raising a query is the easy part; the money is lost when nobody follows it up and the bank's temporary note quietly expires. A log with date raised, who you spoke to, reference number and next chase date turns each query into something that closes.

                ## Milestones
                1. A log with columns for date, account, amount, merchant, reference, contact and status.
                2. Every current query entered with its next action date.
                3. Queries older than ten working days chased in writing.
                4. Each closed query marked with its outcome and the amount returned.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every query raised in the last three months appears in the log with a reference and a status, and none has gone a month without action."
                cadence: rolling
              tasks:
                - "Set up a queries log with date, amount, merchant, reference and status columns"
                - "Enter every query you have open today"
                - "Chase every query older than ten working days @recurring(monthly:12)"
                - "Record the outcome and amount when each query closes"
            - name: Refund tracker until the money lands
              description: |-
                ## Purpose
                Returned parcels, cancelled bookings and price adjustments all promise a refund in a few working days, and a surprising number never appear. Writing down each expected refund with its amount and promised date, and crossing it off only when the credit shows on a statement, catches the ones that slip.

                ## Milestones
                1. A list of refunds you are currently owed with amount, merchant and promised date.
                2. Each refund ticked only when it appears as a credit on the right card.
                3. Overdue refunds chased with the merchant and then the card issuer.
                4. Proof of return, such as a postage receipt, kept until the credit lands.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every refund promised in the last three months is either credited and ticked or actively being chased with a logged reference."
                cadence: rolling
              tasks:
                - "List every refund you are waiting for today with its promised date"
                - "Keep postage receipts and cancellation emails with each entry"
                - "Check outstanding refunds against recent credits @recurring(weekly:mon)"
                - "Chase the merchant for any refund more than a week late"
            - name: Quarterly bank fees and charges review
              description: |-
                ## Purpose
                Monthly account fees, unarranged overdraft charges, foreign usage fees, cash withdrawal charges and card replacement fees are often printed in small lines that are easy to skim past. Totalling them every quarter shows what your accounts really cost and which charges were applied in error or could be avoided.

                ## Milestones
                1. Every fee and charge line from the last quarter listed by account.
                2. Each fee checked against the bank's published tariff.
                3. Any fee applied in error disputed, and any repeated fee questioned.
                4. A quarterly total recorded so trends show over a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly fee reviews completed in a year, each with a total and any wrongly applied charge disputed."
                cadence: rolling
              tasks:
                - "Download your bank's current fees and charges tariff"
                - "Total every fee and charge line from the last three months @recurring(quarterly)"
                - "Ask the bank to refund any fee that does not match the tariff"
            - name: Interest credited versus advertised rate check
              description: |-
                ## Purpose
                Savings rates change after introductory periods, bonus rates disappear if a withdrawal rule is broken, and interest is sometimes paid at the wrong rate after a product change. A rough calculation each quarter of what the interest should have been, set beside what was credited, catches underpayments and expired deals.

                ## Milestones
                1. The current rate, payment frequency and any bonus conditions noted for each savings account.
                2. Expected interest estimated from the average balance for the period.
                3. Credited interest compared with the estimate.
                4. Any shortfall or unexpected rate drop raised with the provider.

                ## Notes
                Interest is usually calculated daily on the balance, so use an average rather than the closing figure for the estimate.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Credited interest on every savings account compared with an estimate for each of four quarters, with any shortfall queried."
                cadence: rolling
              tasks:
                - "Note the rate and bonus conditions for each savings account"
                - "Estimate the interest due and compare it with the credit @recurring(quarterly)"
                - "Raise any shortfall with the savings provider in writing"
            - name: Direct debit amount and timing check
              description: |-
                ## Purpose
                Direct debits can be collected twice, taken early, raised without the advance notice the scheme requires, or keep running after a contract has ended. Checking each collection against the amount and date the company told you catches these errors while the strongest refund protection still applies.

                ## Milestones
                1. Each direct debit on the statement matched to the last notice from the company.
                2. Collections taken early, twice or at an unannounced amount flagged.
                3. Debits for cancelled contracts raised with the company and the bank.
                4. Six monthly checks completed with any errors logged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of direct debit collections matched against company notices, with every early, double or unannounced collection raised."
                cadence: rolling
              tasks:
                - "Collect the latest payment notice for each direct debit you pay"
                - "Match this month's direct debit collections to their notices @recurring(monthly:4)"
                - "Raise any collection that ran after you cancelled the contract"
            - name: Yearly statement archive and retention tidy
              description: |-
                ## Purpose
                Statements are needed for tax returns, mortgage and rental applications, insurance claims and disputes years later, but keeping every receipt forever turns the folder into a swamp. Once a year, confirm every statement is saved, back it up, and clear out receipts past your retention rule.

                ## Milestones
                1. A retention rule written down, for example six years for tax-related statements.
                2. Every statement for the year confirmed present in the archive.
                3. Gaps filled by downloading missing statements while the bank still offers them.
                4. Old receipts past the rule shredded and the backup refreshed.

                ## Notes
                Retention periods for tax records differ by country. Check what your tax authority asks you to keep.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete, backed-up year of statements for every account, with a written retention rule applied to old receipts."
                cadence: cyclic
              tasks:
                - "Look up how long your tax authority expects records to be kept"
                - "Write a retention rule for statements and receipts"
                - "Confirm the full year of statements is archived and backed up @recurring(yearly)"
                - "Shred receipts older than the retention rule"
            - name: Statement codes and abbreviations decoded
              description: |-
                ## Purpose
                Statements are full of short codes for direct debits, standing orders, card payments, faster payments, cash, cheques and transfers, plus reference numbers that look like noise. Learning what your bank's codes mean, and where the full transaction detail sits in the app, makes every line readable at a glance.

                ## Milestones
                1. Your bank's list of transaction codes found and saved.
                2. Each code on last month's statement identified.
                3. The extra detail behind a card line, such as location and time, found in the app.
                4. A short key kept in the statements folder.

                ## Notes
                Codes differ between banks and countries; a UK statement might show DD, SO, FPI or BGC, while others use plain words. Use your own bank's key.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A key covering every transaction code that appeared on the last three statements, saved in the statements folder."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Search your bank's help pages for its list of transaction codes"
                - "Label every code on last month's statement"
                - "Open three card lines in the app to see the extra detail available"
                - "Save a one-page key in the statements folder"
            - name: Investigating an unrecognised transaction
              description: |-
                ## Purpose
                Most unknown lines turn out to be legitimate: a parent company name, a partner's purchase, an annual renewal or a marketplace seller. A fixed order of checks, from household members to receipts to the merchant detail in the app, sorts the innocent ones in minutes and leaves the genuinely suspicious ones ready to report.

                ## Milestones
                1. A written sequence of checks for any line you do not recognise.
                2. The sequence used on at least three real unknown lines.
                3. Each resolved line noted with what it turned out to be.
                4. Lines still unexplained after the checks reported to the bank the same day.

                ## Notes
                If a line is clearly not yours, contact the bank first and investigate later. Waiting to be sure can let further payments through.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written check sequence used on three unknown transactions, each either explained or reported to the bank within a day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a five-step order of checks for unknown lines"
                - "Ask everyone who shares the card about the transaction"
                - "Search your email receipts for the amount and the date"
                - "Open the merchant detail in the app for name, location and website"
            - name: Card holds, pre-authorisations and deposits
              description: |-
                ## Purpose
                Hotels, car hire firms and fuel pumps often reserve far more than the final bill, and the hold can sit on the account for days after the real charge posts. Knowing how holds appear and how long they last stops you disputing a hold that will drop off, and spots the ones that were never released.

                ## Milestones
                1. How your bank shows a hold versus a posted transaction understood.
                2. Typical release times for holds noted from your bank's help pages.
                3. One real hold followed from placement to release.
                4. A rule written for when an unreleased hold should be raised with the merchant.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One hold tracked from placement to release, with a written rule for when an unreleased hold gets raised."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your bank's help page on pending holds and pre-authorisations"
                - "Note how many days your bank says holds usually last"
                - "Track the next hotel, fuel or hire hold until it disappears"
                - "Write the rule for contacting a merchant about a stuck hold"
            - name: Spotting genuine duplicates versus split charges
              description: |-
                ## Purpose
                Two identical lines on the same day look like a double charge, but online orders shipped in parts, a restaurant tip added later or a payment re-presented after a failed attempt can all look the same. Learning the tell-tale signs of each saves pointless disputes and makes the real duplicates easy to prove.

                ## Milestones
                1. The common causes of repeated lines listed with how each appears.
                2. Order histories checked to explain any split-shipment charges.
                3. A genuine duplicate identified by matching it to a single receipt.
                4. One duplicate raised with the merchant or bank with both lines as evidence.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of duplicate patterns, with at least one real repeated charge on your statements classed as genuine or legitimate."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the last three months for identical amounts on the same day"
                - "Check each pair against the order history or receipt"
                - "Note which repeats were split shipments, tips or re-presentations"
                - "Raise any true duplicate with the merchant, attaching both statement lines"
            - name: How chargebacks and card protection claims work
              description: |-
                ## Purpose
                When a merchant will not fix a problem, card schemes give a route to reverse a payment for goods not received, items not as described or double charges, and some countries add separate protection for credit card purchases. Understanding who decides, what evidence counts and how long it takes lets you use the route properly instead of giving up.

                ## Milestones
                1. The difference between a chargeback and any statutory credit card protection in your country noted.
                2. The evidence a typical claim needs listed: receipts, emails, photos and dates.
                3. Your card issuers' online dispute forms located.
                4. A summary saved for use in future disputes.

                ## Notes
                Always try the merchant first and keep the reply. Issuers usually expect to see that you did.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of how card disputes work for your cards, including evidence needed and where to file, saved with the statements."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your card issuer's guide to disputing a transaction"
                - "Find out whether your country gives extra protection for credit card purchases"
                - "List the evidence a dispute claim usually asks for"
                - "Bookmark the dispute form for each of your cards"
            - name: Direct debit refund rights and indemnity claims
              description: |-
                ## Purpose
                Many direct debit schemes promise an immediate refund from your own bank if a collection is wrong in amount, date or authority, with no need to argue with the company first. Knowing how your scheme works, and how card-based recurring payments differ, tells you which route is fastest for each kind of error.

                ## Milestones
                1. The rules of your country's direct debit scheme summarised in a few lines.
                2. How to claim a direct debit refund from your bank found.
                3. The difference between direct debits and recurring card payments written down.
                4. The summary saved beside the disputes time limits sheet.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written summary of direct debit refund rights and the claim route at your bank, saved with the disputes fact sheet."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up the refund promise of your country's direct debit scheme"
                - "Find how your bank takes direct debit refund claims"
                - "Note how recurring card payments are disputed differently"
                - "Save the summary next to the disputes fact sheet"
            - name: Reading a credit card statement in full
              description: |-
                ## Purpose
                Credit card statements carry far more than a list of purchases: the balance split by interest rate, promotional balances and their end dates, how payments are allocated, cash advance charges and the interest you would pay by paying only the minimum. Reading every box once means the monthly card check catches rate changes and fees as well as wrong purchases.

                ## Milestones
                1. Every box on one credit card statement labelled and understood.
                2. Each balance type and its rate written down.
                3. Promotional rate end dates noted in a calendar.
                4. The interest charged last month traced to the balance it came from.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One credit card statement annotated in full, with each balance type, its rate and any promotional end date recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Print or open last month's credit card statement"
                - "Label the balance types, rates and payment allocation box"
                - "Put each promotional rate end date in your calendar"
                - "Work out which balance last month's interest came from"
            - name: Matching statement exports to receipts in a spreadsheet
              description: |-
                ## Purpose
                Once a household has several cards and a hundred lines a month, ticking a printed statement slows down. Exporting the statement as a spreadsheet file and matching it against a receipts list by date and amount marks most lines automatically and leaves only the leftovers to look at by eye.

                ## Milestones
                1. A statement exported from the bank as a spreadsheet file.
                2. A receipts list kept with date, merchant and amount.
                3. A lookup formula marking each statement line that has a matching receipt.
                4. Unmatched lines filtered into a short list for manual checking.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A working spreadsheet that automatically matches at least three quarters of one month's statement lines to receipts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export last month's statement from the banking website as a spreadsheet"
                - "Type the month's receipts into a sheet with date and amount"
                - "Add a lookup formula that finds a matching receipt for each line"
                - "Filter the unmatched lines and check them by hand"
            - name: Fewer accounts and cards to check
              description: |-
                ## Purpose
                Every extra card, dormant savings account and store card is another statement to download and another place for fraud to sit unnoticed. Deciding which accounts actually earn their place, and closing or freezing the rest, can cut the monthly check by a third without losing anything useful.

                ## Milestones
                1. Each account and card scored on use, benefit and checking effort.
                2. A keep, freeze or close decision written for each one.
                3. Unwanted accounts closed with balances moved and final statements saved.
                4. The statement dates list updated to the smaller set.

                ## Notes
                Closing an old credit card can affect your credit history length and available credit. Weigh that before closing, and think about freezing instead.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded keep, freeze or close decision for every account and card, with closures completed and the account list updated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark each account on your list as used weekly, monthly or rarely"
                - "Write a keep, freeze or close decision for each rarely used account"
                - "Move balances and request closure for the accounts you are ending"
                - "Remove closed accounts from the statement dates list"
            - name: Own running balance for the main account
              description: |-
                ## Purpose
                Banking apps show the balance after posted transactions, but cheques, pending card payments and debits due tomorrow make that number misleading. Keeping your own running balance for the main account, and agreeing it with the bank each week, catches missing or extra lines before the statement is even issued.

                ## Milestones
                1. A simple register with date, payee, amount and running balance.
                2. Upcoming known debits entered ahead of time.
                3. The register agreed with the bank balance each week.
                4. Differences explained as pending items or raised as errors.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of a personal running balance agreed with the bank balance each week, with every difference explained."
                cadence: rolling
              tasks:
                - "Start a register with today's bank balance as the opening figure"
                - "Enter known debits due in the next fortnight"
                - "Agree your running balance with the bank balance @recurring(weekly:sun)"
            - name: Cutting the monthly check to twenty minutes
              description: |-
                ## Purpose
                Any check that takes an hour and a half gets skipped by the third month. Timing a few checks, finding where the minutes go, and fixing those steps, whether that is downloading, hunting for receipts or identifying merchant names, makes the routine short enough to survive busy months.

                ## Milestones
                1. Three monthly checks timed step by step.
                2. The two slowest steps identified.
                3. One change made to each slow step.
                4. A check completed in twenty minutes or less.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two consecutive monthly checks completed in twenty minutes or less after changes to the slowest steps."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Time each step of your next monthly statement check"
                - "Name the two steps that took longest"
                - "Make one change to speed up each slow step"
                - "Time the following check and compare"
            - name: Recovering an overcharge from a shop or restaurant
              description: |-
                ## Purpose
                Wrong shelf prices, a tip keyed in twice, a card machine that took the total in the wrong currency or a delivery fee for an order collected in person are usually fixed quickly if raised with the merchant first, with the receipt and statement line together. A short script and evidence pack makes the conversation brief and the refund likely.

                ## Milestones
                1. The overcharge confirmed by setting the receipt beside the statement line.
                2. The merchant contacted in writing with both attached.
                3. A refund or written refusal received within two weeks.
                4. A refusal escalated to the card issuer with the merchant correspondence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "One overcharge raised in writing with the merchant, resolved by refund or escalated to the issuer within a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Photograph the receipt next to the statement line showing the overcharge"
                - "Ask the agent to draft a short, polite refund request to the merchant"
                - "Send the request with both images and note it in the queries log"
                - "Escalate to the card issuer if no refund arrives in two weeks"
            - name: Following a provisional credit through to the end
              description: |-
                ## Purpose
                When you dispute a card payment, the bank may credit the amount temporarily while it investigates, and that credit can be reversed weeks later if the merchant responds and you miss the letter. Tracking each provisional credit until the bank confirms it is final stops a closed case reopening as a surprise debit.

                ## Milestones
                1. Each provisional credit noted in the queries log with its date and amount.
                2. Every message from the bank about the dispute saved.
                3. Any merchant response answered within the deadline the bank gives.
                4. Written confirmation received that the credit is final.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every provisional credit from the last six months is recorded with either a confirmation of finality or an active response to the bank."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Mark each temporary dispute credit in the queries log"
                - "Save every message the bank sends about the dispute"
                - "Reply to any merchant evidence before the bank's deadline"
                - "Ask the bank in writing to confirm the credit is final"
            - name: Complaint about a bank error that will not be fixed
              description: |-
                ## Purpose
                Wrong fees, interest at the wrong rate, a payment credited to someone else or a transfer that left and never arrived are the bank's mistake, and most banks have a formal complaints process with a deadline for a final answer. If they still refuse, an independent financial ombudsman or complaints scheme can usually review it, but only after the bank has had its chance.

                ## Milestones
                1. The error described in one page with dates, amounts and statement lines.
                2. A formal complaint lodged and its reference recorded.
                3. The bank's final response, or the deadline for it, noted.
                4. The case referred to the independent complaints scheme if the answer is unacceptable.

                ## Notes
                Ask for a complaint reference on the first call and follow up in writing. Phone calls alone are hard to prove later.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written complaint with a reference, answered by the bank or referred to the independent complaints scheme within the published deadline."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write one page setting out the error with dates and amounts"
                - "Lodge a formal complaint and ask for a reference number"
                - "Note the date the bank must give its final response by"
                - "Find the independent complaints scheme that covers your bank"
            - name: Errors caught and money recovered tally
              description: |-
                ## Purpose
                Statement checking feels like admin until you see what it finds. A running tally of every error caught, refund chased and fee reversed, with amounts, shows whether the routine is earning its time and which merchants or accounts cause most trouble.

                ## Milestones
                1. A tally with date, account, type of error and amount recovered.
                2. Every closed query added to the tally.
                3. A yearly total worked out and compared with hours spent.
                4. Any merchant or account that appears three times flagged for action.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A year of recovered amounts tallied, with a total and the main repeat offender named."
                cadence: cyclic
              tasks:
                - "Create the tally from the metrics log template"
                - "Copy every closed query and its amount into the tally"
                - "Total the year's recoveries and name the worst repeat offender @recurring(yearly)"
            - name: Switching to digital receipts where shops offer them
              description: |-
                ## Purpose
                Several supermarkets, chains and banking apps can store itemised receipts digitally, linked to the card payment, which removes the fading-paper problem entirely. Choosing which of your regular shops to switch, and whether that means sharing more shopping data, cuts the receipts pile for the routine part of spending.

                ## Milestones
                1. Your ten most frequent merchants listed from last month's statement.
                2. Each checked for an e-receipt or in-app receipt option.
                3. A decision made on each, weighing convenience against the data shared.
                4. E-receipts switched on where chosen and routed to the receipts folder.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision recorded for each of your ten most used merchants, with e-receipts switched on and routed where chosen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your ten most frequent merchants from last month"
                - "Check which offer e-receipts by email or in an app"
                - "Decide for each whether the convenience is worth the data shared"
                - "Switch on the chosen e-receipts and point them at your receipts folder"
            - name: Post-trip statement check for currency and holds
              description: |-
                ## Purpose
                Travel leaves the messiest statements of the year: charges in several currencies, conversion offered at the till at a poor rate, hotel and car hire holds, and damage or minibar charges that appear weeks later. A dedicated check a month after returning, with the trip's receipts together, finds what a normal monthly check would miss.

                ## Milestones
                1. All trip receipts and booking confirmations gathered in one place.
                2. Each foreign charge matched and its exchange rate compared with a reference rate.
                3. Every hold confirmed released and every deposit returned.
                4. Late charges from hotels or hire firms checked against the agreement.

                ## Notes
                When a card machine abroad offers to charge in your home currency, the rate is often worse. Record any trip where you accepted it so you know the cost.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every charge from one trip matched to a receipt, with holds released, deposits returned and any late charge accepted or disputed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put every receipt and booking confirmation from the trip in one envelope"
                - "Match each foreign charge and note the rate applied"
                - "Confirm hotel and car hire holds have dropped off"
                - "Check the card again a month later for late damage or extras charges"
            - name: Statement check after a replacement card arrives
              description: |-
                ## Purpose
                A new card number after expiry, loss or fraud does not always stop old payments: some merchants are updated automatically by the card network and keep charging, while others fail and then retry with fees. Checking the first two statements after a card change shows which payments moved over, which stopped, and which should have stopped but did not.

                ## Milestones
                1. The date of the card change and the reason noted.
                2. Every recurring card payment on the old card listed.
                3. Each one confirmed as moved, stopped or failed on the next two statements.
                4. Payments that carried over unwanted cancelled with the merchant.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two statements after a card replacement checked, with every recurring payment confirmed as moved, stopped or cancelled on purpose."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the date the new card arrived and why it was issued"
                - "List every recurring payment that used the old card"
                - "Check the next two statements for each payment on the new card"
                - "Cancel any payment that carried over that you no longer want"
            - name: Staged payments check for building work or a big order
              description: |-
                ## Purpose
                Kitchen fits, extensions, made-to-order furniture and wedding suppliers often take a deposit and several staged payments, and it is easy to lose track of what has been paid against what has been delivered. A small schedule of payments set beside the statements makes sure nothing is paid twice, early or ahead of the work it covers.

                ## Milestones
                1. The contract's payment schedule copied into one table.
                2. Each payment matched to its statement line and to an invoice or receipt.
                3. The remaining balance agreed in writing with the supplier.
                4. The final payment made only after the work is signed off.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A table showing every staged payment matched to a statement line and an invoice, with the remaining balance agreed with the supplier."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Copy the payment schedule from the contract into a table"
                - "Match each payment made so far to its statement line and invoice"
                - "Ask the supplier to confirm the remaining balance in writing"
                - "Hold the final payment until the work is checked and signed off"
            - name: Final statement for a closed account
              description: |-
                ## Purpose
                Closing or switching an account is not finished until a final statement shows a zero balance, the last interest has been paid and nothing is still trying to collect from it. Getting and checking that last statement, and saving it permanently, closes the loop and protects you if a stray debit or a forgotten balance surfaces later.

                ## Milestones
                1. A closing statement requested from the bank.
                2. The final balance shown as zero with any last interest credited.
                3. No debits attempted on the account after the closure date.
                4. The final statement saved permanently in the archive.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A final statement showing a zero balance and closing interest is saved for every account closed in the last year."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the bank for a closing statement for the account"
                - "Check the final balance is zero and last interest was paid"
                - "Look for any debit that tried to collect after closure"
                - "Save the final statement in a permanent folder"
            - name: Sale-season returns and refunds check
              description: |-
                ## Purpose
                Late-year sales and holiday gifting produce a burst of orders, returns and partial refunds within a few weeks, which is exactly when refunds go missing. A dedicated check in the first weeks of the new year, against the list of everything sent back, catches the credits that never came while the return proof still exists.

                ## Milestones
                1. A list of every item returned in the sale season with amounts and dates.
                2. Each return matched to a credit on the right card.
                3. Missing refunds chased with the retailer and logged.
                4. Return postage receipts kept until every credit lands.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every sale-season return listed and matched to a refund, or being chased with a logged reference, by the end of January."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every item you returned since late November"
                - "Match each return to a credit on the card used"
                - "Chase each missing refund and log the reference"
                - "Keep return postage receipts until every credit arrives"
            - name: Year-end interest and statement pack for the tax return
              description: |-
                ## Purpose
                Tax returns often need savings interest totals, annual statements and evidence of certain payments, and gathering them in a hurry means downloading statements that may no longer be available. Building a small pack at the end of each tax year, from statements you have already checked, makes the return or the accountant's questions quick to answer.

                ## Milestones
                1. The tax year dates for your country noted.
                2. Interest received on every account totalled for the tax year.
                3. Annual interest statements or certificates downloaded where banks provide them.
                4. Statements showing any payments relevant to your return flagged in the pack.

                ## Notes
                Which items matter depends on your tax situation. Ask your tax authority's guidance or your accountant what to include.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A tax-year pack holding interest totals, annual bank certificates and flagged statements, ready before the return is due."
                cadence: cyclic
              tasks:
                - "Note the start and end dates of your tax year"
                - "Total the interest each account paid in the tax year"
                - "Download annual interest certificates from each bank"
                - "Assemble the year-end statement pack after the tax year closes @recurring(yearly)"
            - name: Joint account statement checks for couples
              description: |-
                ## Purpose
                On a joint account each person tends to assume the other is checking, and unrecognised lines get blamed on the partner rather than queried. Agreeing who checks which month, how to flag a line you do not recognise without it becoming an argument, and when you both look together keeps the shared account honest and calm.

                ## Milestones
                1. A rota or split agreed for who checks the joint account each month.
                2. A neutral way to flag unknown lines, such as a shared note.
                3. Both people able to download and read the joint statements.
                4. A short monthly sit-down where queries are cleared together.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of joint account statements checked under the agreed split, with every flagged line resolved together."
                cadence: rolling
              tasks:
                - "Agree who checks the joint account in which months"
                - "Set up a shared note for lines either of you does not recognise"
                - "Make sure both of you can download the joint statements"
                - "Clear the shared note together after the joint statement lands @recurring(monthly:24)"
            - name: Checking an older parent's statements with their consent
              description: |-
                ## Purpose
                Older people are more likely to be overcharged by care providers, targeted by repeated small payments, or simply miss a duplicate direct debit, and they may struggle with online statements. Helping a parent check their statements, with their agreement and through proper authority such as third-party access or a power of attorney, keeps them in charge while adding a second pair of eyes.

                ## Milestones
                1. Your parent's agreement to help, and the scope of it, discussed and noted.
                2. The right access arranged: view-only access, a trusted contact or registered authority.
                3. A monthly check done together or reviewed with your parent afterwards.
                4. Any query raised with the bank in your parent's name or with their authority.

                ## Notes
                Never use a parent's own login details. Ask their bank which third-party access options it offers.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Proper third-party access is arranged and three monthly statement checks completed with your parent's knowledge."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Talk with your parent about what help they want and write it down"
                - "Ask their bank what view-only or trusted contact options exist"
                - "Go through your parent's statements with them @recurring(monthly:15)"
                - "Note any query raised and tell your parent the outcome"
            - name: First statement checks for students
              description: |-
                ## Purpose
                Your first term away brings a new student account, a card used for everything, shared housing payments and loan instalments landing in lumps, and small errors drain a budget that has no slack. Learning to check a statement in the first month builds the habit while there are only a few dozen lines to deal with.

                ## Milestones
                1. The student account's statement found in the banking app.
                2. Loan, grant and part-time pay credits matched to what was expected.
                3. Rent and shared bill payments matched to what housemates agreed.
                4. One month checked line by line and any odd line queried.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "The first month of a student account checked line by line, with every credit matched to its expected source."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the statement view in your student banking app"
                - "Match loan, grant and wage credits to the amounts you expected"
                - "Check rent and shared bill payments match what was agreed"
                - "Ask the bank about any line you cannot explain"
            - name: Pension income and statement checks in retirement
              description: |-
                ## Purpose
                Retirement income can arrive from several pensions and state benefits on different dates, with tax deducted at source and amounts that change each year. Checking each credit against the payment notice, and keeping an eye out for small unknown debits, protects a fixed income where a single error matters more.

                ## Milestones
                1. Every pension and benefit payment listed with its expected date and amount.
                2. Each annual uprating or payment notice filed with the list.
                3. Monthly credits matched to the expected amounts.
                4. Any shortfall or late payment raised with the payer.

                ## Notes
                If online statements are hard to use, ask the bank for large-print or paper statements. Many offer them free.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of pension and benefit credits matched to their payment notices, with any shortfall raised with the payer."
                cadence: rolling
              tasks:
                - "List each pension and benefit with its expected date and amount"
                - "File this year's payment notices with the list"
                - "Match this month's pension credits to the expected amounts @recurring(monthly:28)"
                - "Phone the payer about any credit that is short or late"
            - name: Teaching a teenager to check their first bank card
              description: |-
                ## Purpose
                A teenager with a first debit card or prepaid card meets app purchases, free trials that convert and contactless taps they forget about. Sitting down together with their first statement teaches them to recognise every line and query the odd ones, a skill that will protect them long after they leave home.

                ## Milestones
                1. The teenager able to open their own statement in the app.
                2. One month reviewed together, every line explained by them.
                3. An unknown or unwanted line queried by the teenager themselves.
                4. A monthly check done by the teenager alone for three months.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A teenager completes three monthly statement checks on their own card, having queried at least one line themselves."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Show your teenager where their statement is in the app"
                - "Go through their first month together, letting them explain each line"
                - "Help them query any line they did not expect"
                - "Ask them to show you a check they did alone each month for three months"
            - name: Estate account statement review for executors
              description: |-
                ## Purpose
                After a death, statements are the fastest way to find every payment still leaving the accounts, money owed back to pension payers or benefit offices, and refunds due from cancelled services. Reviewing twelve months of the person's statements gives an executor a full list of who to notify and what to recover or repay.

                ## Milestones
                1. Twelve months of statements requested for each of the person's accounts.
                2. Every regular payment and income source listed from them.
                3. Payments after the date of death identified for recall or refund.
                4. Overpaid pensions or benefits noted for repayment to the payer.
                5. The list shared with whoever is handling the estate.

                ## Notes
                Banks have bereavement teams that can supply statements once they see the death certificate and proof of your role.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A list built from twelve months of statements showing every payment to stop, refund to claim and overpayment to return."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Contact each bank's bereavement team and request twelve months of statements"
                - "List every regular payment and income source from the statements"
                - "Mark payments taken after the date of death for recall"
                - "Note any pension or benefit paid after death that must be returned"
            - name: Matching client payments to invoices for a side income
              description: |-
                ## Purpose
                Freelance and side-income payments arrive with shortened names, missing references, deductions for platform fees and sometimes in part, so it is easy to think a client has paid when they have not. Matching each credit to an invoice keeps a clear list of who still owes what and gives clean records for the tax return.

                ## Milestones
                1. An invoice list with number, client, amount and due date.
                2. Each incoming credit matched to an invoice, including part payments.
                3. Platform and payment processor fees recorded separately from income.
                4. Unpaid and short-paid invoices chased with the client.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of side-income credits matched to invoices, with every unpaid or short-paid invoice chased."
                cadence: rolling
              tasks:
                - "List every invoice issued in the last three months with its amount"
                - "Ask clients to quote the invoice number when they pay"
                - "Match income credits to invoices and note any fees deducted @recurring(monthly:5)"
                - "Chase any invoice that is past due or short-paid"
            - name: Monthly reconciliation in personal accounting software
              description: |-
                ## Purpose
                Personal finance and bookkeeping tools can mark each transaction as cleared and reconcile an account to the statement balance, the same method businesses use at month end. Reconciling properly means you know the records match the bank to the penny, and any later edit that breaks a reconciled month stands out immediately.

                ## Milestones
                1. Every account set up in the software with an opening balance matching a statement.
                2. Transactions imported and marked cleared as they match the statement.
                3. Each month reconciled to the statement closing balance and locked.
                4. Twelve consecutive months reconciled with no unexplained differences.

                ## Notes
                Start from the **Month-end close** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every account reconciled to its statement closing balance for six consecutive months, with each month locked."
                cadence: rolling
              tasks:
                - "Set each account's opening balance to match a past statement"
                - "Import this month's transactions and mark them as cleared"
                - "Reconcile each account to its statement closing balance @recurring(monthly:10)"
                - "Lock each reconciled month so later edits are flagged"
            - name: Multi-currency account reconciliation
              description: |-
                ## Purpose
                People paid in one currency and spending in another, or holding balances in several currencies for travel, family abroad or overseas income, face statements where conversions, fees and rates make simple matching impossible. Reconciling each currency balance separately and recording the rate on every conversion shows the real cost of moving money between them.

                ## Milestones
                1. A separate ledger or sheet for each currency balance.
                2. Each conversion recorded with both amounts, the rate and the fee.
                3. Every currency balance reconciled to its statement monthly.
                4. The total cost of conversions for the quarter worked out.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of each currency balance reconciled to statements, with every conversion's rate and fee recorded."
                cadence: rolling
              tasks:
                - "Set up one sheet per currency held"
                - "Record each conversion with both amounts, the rate and the fee"
                - "Reconcile each currency balance to its statement @recurring(monthly:21)"
                - "Total the quarter's conversion costs"
            - name: Automated receipt-to-statement matching script
              description: |-
                ## Purpose
                For someone comfortable with a little code, a script that reads statement exports and a folder of e-receipts, matches them by amount and date within a tolerance, and lists the leftovers can take the monthly check down to the few lines that truly need a human. It also creates a permanent record linking each transaction to its proof.

                ## Milestones
                1. Statement exports and e-receipts saved in consistent formats.
                2. A script that matches by amount and date within a set tolerance.
                3. An output file of unmatched lines for manual review.
                4. The script run for three months and its match rate recorded.

                ## Notes
                Keep the statement files and the script on your own device or encrypted storage. Bank data should not be pasted into tools you do not control.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A script that matches at least nine in ten statement lines to receipts automatically, run successfully for three consecutive months."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Export three months of statements in the same file format"
                - "Save e-receipts with date and amount readable in the file name or text"
                - "Ask the agent to draft a matching script with a date tolerance of three days"
                - "Run the script each month and record how many lines it matched"
---

# Household Bank Statement Checks

This area is for anyone who opens a statement, scrolls past fifty lines and hopes they are all right. It starts with the foundations (knowing when every statement lands, keeping receipts worth checking against, learning your dispute time limits and doing a first line-by-line check), then the monthly, weekly and quarterly routines, the skills for decoding lines, holds, duplicates and chargebacks, the decisions that make checking faster or recover money, the events that need a special check, versions for couples, students, retirees, executors and anyone helping an older parent, and finally full reconciliation work for people who keep proper books.

What repeats is a monthly statement check on a fixed day, a credit card check before each due date, a weekly look at pending transactions and outstanding refunds, a monthly chase of open queries, quarterly reviews of fees and interest, and a yearly archive tidy and tally of money recovered. The Operational checklist, Metrics log and Month-end close templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
