---
id: finance-accounting.accounting-software-implementation
name: Accounting Software Implementation
description: "Requirements and a scored shortlist, clean migration of balances and contacts, bank feeds and app connections, a planned go-live, and the routines and training that keep finance software working."
category: business
version: 1.0.0
tags: [finance-accounting, accounting-software-implementation, small-business, founder, team, cloud-accounting, data-migration, bank-feeds]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - training-program
    - operational-checklist
    - meeting-notes
    - onboarding-plan
    - vendor
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Accounting Software Implementation
          description: "Choosing, setting up or migrating accounting and finance software, connecting bank feeds and apps, and training the team to use it well."
          projects:
            - name: Finance software requirements and must-haves list
              description: |-
                ## Purpose
                Most software choices go wrong because the demo set the agenda instead of the business. Before speaking to any vendor, write down what the system must do: invoice volumes, number of bank accounts, currencies, sales tax rules, payroll, stock, approvals and who needs to log in. A list of twenty to forty requirements, each marked must-have or nice-to-have, becomes the scorecard every option is judged against.

                ## Milestones
                1. Monthly volumes recorded: sales invoices, supplier bills, bank transactions and payroll headcount.
                2. Twenty to forty requirements written, each marked must-have or nice-to-have.
                3. Requirements gathered from everyone who will use or rely on the system, including the external accountant.
                4. Three deal-breakers named, such as multi-currency, a local tax filing link or stock tracking.

                ## Notes
                Write requirements as tasks the business performs, such as billing three hundred customers on the first of each month, rather than feature names from an advert. Real tasks test a system far better in a demo.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A requirements list of at least twenty items, each marked must-have or nice-to-have and reviewed by the accountant, is saved before any demo is booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count last month's sales invoices, supplier bills and bank transactions"
                - "List every person who will log in and what each needs to do"
                - "Write the requirements and mark each must-have or nice-to-have"
                - "Send the list to your accountant and ask what is missing"
                - "Circle the three requirements that would rule a system out"
            - name: Inventory of current finance tools and spreadsheets
              description: |-
                ## Purpose
                Finance work in a growing business is usually spread across an old ledger, a dozen spreadsheets, a payroll portal, a card app and someone's inbox. Mapping each tool, what it holds, who uses it and what feeds into what shows which pieces the new system replaces, which it must connect to and which spreadsheets quietly hold critical numbers.

                ## Milestones
                1. Every finance tool and spreadsheet listed with its owner and what it holds.
                2. Data flows between them drawn on one page.
                3. Each item marked replace, connect or keep.
                4. Spreadsheets holding numbers nobody else can reproduce flagged for migration.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page inventory lists every finance tool and spreadsheet, each marked replace, connect or keep, with an owner named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each person which spreadsheets they open in a normal month"
                - "List every finance tool, its owner and its monthly cost"
                - "Sketch how data moves between the tools on one page"
                - "Mark each tool or file replace, connect or keep"
            - name: Implementation owner, budget and go-live date
              description: |-
                ## Purpose
                Software projects without a named owner drift for months while the old system keeps running. Naming one person to make decisions, setting a budget that covers subscriptions, migration help and staff time, and picking a go-live date at the start of a month or quarter gives the project an edge to work toward. A quarter start is cleaner because tax periods and comparatives line up.

                ## Milestones
                1. One implementation owner named, with time set aside each week.
                2. A budget agreed covering subscription, add-ons, migration support and training.
                3. A go-live date chosen at the start of a month, quarter or financial year.
                4. A short project plan with five or six stages shared with everyone affected.

                ## Notes
                Avoid going live in the last month of the financial year or during a tax filing period. The team will be stretched and the old system will be needed for the year end anyway.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An owner, a written budget and a go-live date at the start of a period are agreed and shared with the team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the person who will own the implementation and its decisions"
                - "Check the financial year end and tax filing dates before choosing go-live"
                - "Estimate the budget for subscriptions, migration help and training"
                - "Share the go-live date and a five-stage plan with the team"
            - name: Accounting software shortlist and demo scorecard
              description: |-
                ## Purpose
                With the requirements written, three serious candidates are enough; more than five turns demos into a blur. Scoring each against the same must-haves, in a demo run on your own sample transactions, keeps the decision on facts rather than on the most polished sales presentation.

                ## Milestones
                1. A longlist cut to three candidates using the deal-breakers.
                2. A scorecard with the same criteria and weights for every option.
                3. A demo held for each, using your own invoices, bills and bank lines.
                4. References from two businesses of similar size and sector checked for the leading option.
                5. A decision recorded with the reasons and the runner-up named.

                ## Notes
                Start from the **Purchase decision** template. Ask every vendor how you would export all your data if you left, and get the answer in writing.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three systems scored against the same written criteria, with the choice and the runner-up recorded alongside the reasons."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Cut the longlist to three systems that meet every deal-breaker"
                - "Build a scorecard from the requirements with weights for must-haves"
                - "Send each vendor a set of sample transactions to use in their demo"
                - "Ask two similar businesses what they wish they had known before choosing"
                - "Record the decision, the scores and the runner-up"
            - name: Trial company file test with real transactions
              description: |-
                ## Purpose
                Demos show the happy path. A two-week trial where you enter a real week of invoices, bills, bank lines and a pay run exposes the things that slow a team down every day: awkward tax handling, slow bank matching, reports that cannot be filtered the way you need.

                ## Milestones
                1. A trial file set up with your real company settings.
                2. One real week of sales, purchases and bank transactions entered.
                3. The three reports you use most produced and compared with the old system.
                4. A list of friction points and workarounds written down.
                5. The choice confirmed or reversed based on the trial.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A week of real transactions processed in a trial file, with the three key reports compared against the old system and the result recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Start a free trial file in the system you chose"
                - "Enter one real week of invoices, bills and bank lines"
                - "Run your three most-used reports and compare them with the old system"
                - "Write down every step that took longer than it should"
                - "Decide whether the trial confirms the choice"
            - name: Pricing tier, user seats and add-on cost check
              description: |-
                ## Purpose
                Headline prices rarely survive contact with real needs: the plan with multi-currency costs more, each extra user adds a fee, and the apps for payroll, stock or expenses each bill separately. Pricing the full set for the next three years, at today's headcount and the one you expect, avoids an unpleasant surprise at the first renewal.

                ## Milestones
                1. The plan tier that covers every must-have identified.
                2. User seats counted for now and for expected growth.
                3. Every add-on app priced with its own billing terms.
                4. A three-year total cost written down and compared with the runner-up.

                ## Notes
                Check whether accountant or adviser seats are free, whether read-only users count as paid seats, and what happens to the price after an introductory discount ends.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-year cost for the chosen plan, users and add-ons is written down beside the runner-up's equivalent figure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the cheapest plan tier that covers every must-have"
                - "Count paid users now and in two years"
                - "Price each add-on app with its billing terms"
                - "Total the three-year cost and compare it with the runner-up"
            - name: Conversion date and opening balance approach
              description: |-
                ## Purpose
                Every migration needs one date where the old books stop and the new ones start, and one set of balances carried across. Choosing between a clean start with opening balances only and bringing over transaction history, and agreeing it with your accountant, decides how much data work follows and how comparatives will look in next year's reports.

                ## Milestones
                1. A conversion date agreed, usually the first day of a month or quarter.
                2. The approach chosen: opening balances only, summarised monthly history or full transaction history.
                3. The accountant's agreement to the approach recorded.
                4. A list of the balances needed at conversion: bank, debtors, creditors, tax, payroll liabilities, fixed assets and equity.

                ## Notes
                Opening balances only is the cleanest choice for most small businesses. Keep the old system readable so last year's detail can still be found when someone asks.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A conversion date and an opening balance approach are agreed with the accountant and written down with the list of balances required."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a call with your accountant about the conversion date"
                - "Choose opening balances only, monthly summaries or full history"
                - "List every balance that must be carried across at conversion"
                - "Write the decision and the reason in the project notes"
            - name: Core company settings and financial year configuration
              description: |-
                ## Purpose
                Some settings, such as base currency, financial year end and tax accounting basis, are hard or impossible to change once transactions are posted. Setting them deliberately on day one, with the accountant checking each, avoids rebuilding a company file three months in.

                ## Milestones
                1. Legal name, registration and tax numbers entered and checked against official documents.
                2. Base currency, financial year end and tax accounting basis set.
                3. A lock date set on the day before the conversion date.
                4. An export or screenshot of every company setting saved with the project.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Company settings, financial year, base currency and tax basis are set, checked by the accountant and saved as a record before the first transaction is posted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather the registration certificate and tax registration letters"
                - "Enter the base currency, financial year end and tax basis"
                - "Set a lock date the day before the conversion date"
                - "Ask your accountant to review the settings before any posting"
                - "Save an export of every company setting to the project folder"
            - name: User roles and permission set design
              description: |-
                ## Purpose
                Giving everyone administrator access is the quickest set-up and the most common control failure in small finance teams. Deciding who can raise, approve, pay and report, and matching each person to the narrowest role that lets them do their job, keeps one person from both creating a supplier and paying it.

                ## Milestones
                1. A table of every user, their tasks and the role they need.
                2. Administrator rights limited to two people.
                3. Raising and approving payments split between different users where staff numbers allow.
                4. Accountant and adviser access set up on their own logins, never shared.
                5. Two-factor sign-in switched on for every user.

                ## Notes
                Shared logins make the audit trail useless. Every person, including the external accountant, needs their own.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every user has an individual login with the narrowest role that fits their work, at most two administrators, and two-factor sign-in on."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each user with the tasks they perform in the ledger"
                - "Match each person to the narrowest role the software offers"
                - "Limit administrator rights to two named people"
                - "Switch on two-factor sign-in for every account"
                - "Invite the accountant on their own adviser login"
            - name: Legacy chart of accounts mapping and import
              description: |-
                ## Purpose
                New software often arrives with a default chart that does not match the old one, and history only means something if every old account lands somewhere sensible. A mapping table from each old account to its new home, checked before import, lets old and new reports be compared line for line.

                ## Milestones
                1. Every active account in the old system listed with its balance.
                2. A mapping table pointing each old account to one new account.
                3. System accounts the software controls, such as debtors, creditors and tax, matched correctly.
                4. The chart imported and a test trial balance agreeing to the old one.

                ## Notes
                Use the import to retire unused accounts, but leave a redesign to its own project. Changing structure and system in the same week makes errors hard to trace.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A mapping table covers every active legacy account and a test trial balance in the new system agrees to the old one by account group."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the trial balance and chart of accounts from the old system"
                - "Build a table mapping each old account to its new account"
                - "Check the control accounts map to the software's system accounts"
                - "Import the chart and run a test trial balance against the old one"
            - name: Tax codes and rates set up and tested
              description: |-
                ## Purpose
                Sales tax or VAT mistakes in new software usually trace back to one default code applied to everything. Setting up each rate the business uses, including zero-rated, exempt and reverse charge items where they apply, and testing one transaction of each type, means the first return out of the new system is right.

                ## Milestones
                1. Every tax rate and treatment the business uses listed with your accountant.
                2. Each one created or confirmed as a tax code in the software.
                3. Default tax codes set on accounts, items and regular contacts.
                4. One test transaction of each type posted and checked on the tax report.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tax treatment the business uses has a code in the software, and one test transaction per code appears correctly on the tax report."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your accountant for every tax treatment the business uses"
                - "Create or confirm a tax code for each one"
                - "Set default tax codes on accounts, items and regular contacts"
                - "Post a test transaction for each code and check the tax report"
                - "Re-check rates and codes after the tax authority's annual changes @recurring(yearly)"
            - name: Bank and credit card feed connections
              description: |-
                ## Purpose
                Live feeds from every bank account, credit card and loan remove hours of typing and make reconciliation a matching exercise instead of data entry. Connecting each one, setting the feed start date carefully so nothing is imported twice, and checking the first batch against the statement prevents a messy first month.

                ## Milestones
                1. Every bank, card and loan account connected or set to statement import.
                2. Feed start dates set to the conversion date so no transaction appears twice.
                3. The first batch of feed lines checked against the bank statement.
                4. Accounts that cannot connect given a documented statement import routine.

                ## Notes
                Some banks require feed consent to be renewed every few months. Note each renewal date when you connect.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every bank, card and loan account feeds into the software from the conversion date, with the first batch matched to the statement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every bank, card and loan account with its bank"
                - "Connect each account and set the feed start to the conversion date"
                - "Compare the first imported batch with the bank statement"
                - "Note each bank's consent renewal date in the issue log"
            - name: Customer and supplier records migration
              description: |-
                ## Purpose
                Contact records carry payment terms, tax numbers, bank details and invoice email addresses that took years to collect. Cleaning duplicates and dead accounts before import, rather than after, gives the new system a contact list people trust from the first invoice.

                ## Milestones
                1. Customer and supplier lists exported from the old system.
                2. Duplicates merged and contacts with no activity in two years set aside.
                3. Terms, tax numbers and invoice email addresses filled in for active contacts.
                4. The cleaned lists imported and a sample of twenty records checked.

                ## Notes
                Do not import supplier bank details from a spreadsheet nobody has verified. Re-confirm them with the supplier on a known phone number before the first payment run.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Active customers and suppliers are imported without duplicates, with terms and tax numbers complete, and twenty sampled records checked against the source."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export customer and supplier lists from the old system"
                - "Merge duplicates and set aside contacts inactive for two years"
                - "Fill in missing terms, tax numbers and invoice email addresses"
                - "Import the lists and spot-check twenty records"
            - name: Open invoices and bills migration
              description: |-
                ## Purpose
                A single debtors balance at conversion is not enough when customers pay individual invoices next week. Bringing every unpaid sales invoice and supplier bill across as an open item, with its original date and number, lets receipts and payments be matched in the new system and keeps ageing reports correct.

                ## Milestones
                1. Aged debtor and creditor reports run from the old system at the conversion date.
                2. Every unpaid invoice and bill imported with its original number, date and due date.
                3. Imported totals agreed to the old ageing reports to the cent.
                4. The temporary clearing account used for the import showing a zero balance.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every open invoice and bill at conversion exists in the new system and the aged debtor and creditor totals agree to the old system exactly."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Run aged debtors and creditors reports at the conversion date"
                - "Prepare an import file with invoice numbers, dates and amounts"
                - "Import the open items against a temporary clearing account"
                - "Agree the imported totals to the old ageing reports"
                - "Confirm the clearing account balance is zero"
            - name: Opening trial balance tie-out and sign-off
              description: |-
                ## Purpose
                Migration is finished when the numbers agree, not when the import screen says complete. Tying the new opening trial balance to the old system's closing one, account by account, and having the accountant sign it off, is the evidence that nothing was lost or doubled in the move.

                ## Milestones
                1. The old system's trial balance at the conversion date saved as a final export.
                2. The new system's opening trial balance agreeing account by account.
                3. Bank balances agreeing to statements and control accounts agreeing to their ledgers.
                4. Differences explained and corrected, with none left in a suspense account.
                5. Written sign-off from the accountant filed with the migration records.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The new opening trial balance agrees to the old closing trial balance account by account, with written sign-off from the accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Save the old system's final trial balance at the conversion date"
                - "Compare it with the new opening trial balance account by account"
                - "Agree bank and control account balances to their source"
                - "Ask the accountant to review the comparison and sign it off"
            - name: Connected apps integration map
              description: |-
                ## Purpose
                Once the ledger is chosen, payroll, payments, ecommerce, CRM, expense and document tools all want to connect to it, each posting in its own way. A single map of which app connects, what it posts, to which accounts and who owns it prevents double-posted sales and orphan connections nobody remembers authorising.

                ## Milestones
                1. Every app that will connect to the ledger listed with its owner.
                2. For each, what it posts: invoices, payments, journals or contacts.
                3. The accounts each app posts to written down.
                4. Overlaps resolved so each transaction type has one source only.

                ## Notes
                The commonest error is two apps creating the same sale, for example an online store and a payment app. Pick one source for each transaction type.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page integration map names every connected app, what it posts, the accounts it uses and its owner, with no transaction type posted by two apps."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every app the team wants connected to the ledger"
                - "Write what each app posts and to which accounts"
                - "Pick one source for any transaction type two apps both create"
                - "Name an owner for each connection"
                - "Ask the agent to turn the map into a one-page diagram"
            - name: Ecommerce and payment platform connection set-up
              description: |-
                ## Purpose
                Online stores and payment apps can post every order as its own invoice or as a daily summary, and the choice decides whether the ledger stays readable. Connecting them through a clearing account for payouts, with fees and refunds mapped to their own accounts, makes sales, fees and deposits line up with the bank.

                ## Milestones
                1. Detail or daily summary posting chosen for each platform.
                2. A clearing account set up for each platform's payouts.
                3. Fees, refunds and chargebacks mapped to their own accounts.
                4. One week of orders traced from the platform to the bank deposit.

                ## Notes
                Leave the monthly payout matching to the reconciliation routine. This project is about wiring the connection correctly in the first place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each sales platform posts to a clearing account with fees and refunds mapped, and one week of orders traces cleanly from platform to bank."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose detail or daily summary posting for each platform"
                - "Create a clearing account for each platform's payouts"
                - "Map fees, refunds and chargebacks to their own accounts"
                - "Trace one week of orders from the platform to the bank deposit"
            - name: Weekly bank feed health check
              description: |-
                ## Purpose
                Feeds break silently when a bank changes its connection, consent expires or a card is replaced, and the gap is often found weeks later at month end. A five-minute Monday check that each feed has fresh transactions catches a broken connection while the missing days are still easy to import.

                ## Milestones
                1. A list of every feed with its expected frequency.
                2. A Monday check showing each feed's last import date.
                3. Broken feeds reconnected within two working days.
                4. Consent renewal dates tracked so no feed lapses.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every feed shows transactions no older than three working days at each weekly check for three months running."
                cadence: rolling
              tasks:
                - "List every feed with the date of its last imported transaction"
                - "Check each feed has imported within the last three working days @recurring(weekly:mon)"
                - "Reconnect any broken feed and import the missing statement lines"
                - "Renew bank feed consents that expire this quarter @recurring(quarterly)"
            - name: Monthly integration sync error review
              description: |-
                ## Purpose
                Connected apps fail quietly: a payroll journal stuck in a queue, a store order rejected for a missing tax code, a token that expired when someone left. Reviewing every connection's error log once a month, before the close starts, stops small sync failures turning into unexplained differences in the accounts.

                ## Milestones
                1. Each connected app's sync or error log located.
                2. A monthly review slot booked before the close.
                3. Every error resolved or logged with an owner.
                4. Two months in a row with no unresolved sync errors at close.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's close starts with every connected app's error log reviewed and no unresolved sync errors older than one week."
                cadence: rolling
              tasks:
                - "Find where each connected app shows its sync errors"
                - "Review every connection's error log before the close begins @recurring(monthly:9)"
                - "Fix or assign each error with a date"
                - "Reauthorise any connection held by a person who has left"
            - name: Bank rule library upkeep
              description: |-
                ## Purpose
                Bank rules that code regular transactions automatically save hours, until a rule built in a hurry starts coding a new supplier to the wrong account. Keeping a small, named set of rules, reviewing which ones fired last month and retiring the stale ones keeps the automation accurate.

                ## Milestones
                1. Rules created for the twenty most frequent regular transactions.
                2. Each rule named after the payee and the account it codes to.
                3. A monthly look at the rules that fired and anything they miscoded.
                4. Unused or conflicting rules deleted at least twice a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A named rule set covers the twenty most frequent regular transactions and is reviewed monthly, with no known miscoding left uncorrected."
                cadence: rolling
              tasks:
                - "List the twenty transactions that appear most often on the feeds"
                - "Create a named bank rule for each regular payee"
                - "Review last month's rule matches for miscoded lines @recurring(monthly:16)"
                - "Delete rules that have not matched anything in six months"
            - name: Quarterly user access review
              description: |-
                ## Purpose
                Staff leave, roles change and the bookkeeper from two years ago still has a login. A quarterly look at every user, their role and their last sign-in removes access that should have gone and keeps permissions in step with the job each person does now.

                ## Milestones
                1. A user list exported with roles and last sign-in dates.
                2. Leavers and unused accounts removed.
                3. Roles adjusted to match current duties.
                4. The review date and changes recorded for the accountant or auditor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews in a year, each recording the user list, roles and changes, with no leaver keeping access beyond the next review."
                cadence: rolling
              tasks:
                - "Export the user list with roles and last sign-in dates"
                - "Review every user, role and connected app login @recurring(quarterly)"
                - "Remove leavers and accounts unused for ninety days"
                - "Record the changes made in the review log"
            - name: Monthly data export and backup routine
              description: |-
                ## Purpose
                Cloud software is backed up by the vendor, but that does not help if an account is closed, a subscription lapses or someone deletes a year of transactions. A monthly export of the trial balance, ledger detail and contacts to storage the business controls means the records survive whatever happens to the subscription.

                ## Milestones
                1. The reports and exports to keep each month chosen.
                2. A folder the business owns, outside the software, set up for them.
                3. A monthly export saved after each close.
                4. One test of opening and reading an archived export completed.

                ## Notes
                Check how long the tax authority where you operate expects business records to be kept, commonly five to seven years, and make sure the exports cover it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly exports of the trial balance, general ledger and contacts sit in storage the business controls."
                cadence: rolling
              tasks:
                - "Choose which reports and data exports to keep each month"
                - "Set up a finance archive folder outside the software"
                - "Export the trial balance, ledger detail and contacts to the archive @recurring(monthly:3)"
                - "Open one archived export to check it is readable"
            - name: Period lock dates after each close
              description: |-
                ## Purpose
                Without a lock date, anyone with access can change last quarter's figures after the reports have gone to the board or the tax return has been filed. Moving the lock date forward as soon as each month is closed protects reported numbers and forces later corrections to be made openly in the current period.

                ## Milestones
                1. The software's lock date settings understood for administrators and other users.
                2. The lock date moved forward after each month's close.
                3. A rule written for how late corrections are approved and posted.
                4. Twelve months of lock dates applied without a gap.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The lock date is moved forward within five working days of each close, with every late correction posted in the open period and noted."
                cadence: rolling
              tasks:
                - "Find the lock date settings for administrators and other users"
                - "Move the lock date forward once the month is closed @recurring(monthly:11)"
                - "Write the rule for approving corrections to locked periods"
                - "Note any lock date change and who approved it"
            - name: Vendor release notes watch
              description: |-
                ## Purpose
                Cloud finance software changes every month: features move, reports are retired, tax forms update and integrations change how they post. Reading the release notes once a month, and noting anything that affects your settings or processes, stops a quiet product change from surprising the team at month end.

                ## Milestones
                1. The vendor's release notes page and service status page bookmarked.
                2. A monthly read with relevant changes noted.
                3. Changes that affect a process passed to the person who owns it.
                4. The team's how-to guide updated when a change alters a step.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's release notes are read and any change that affects a setting or process is logged with an owner."
                cadence: rolling
              tasks:
                - "Bookmark the vendor's release notes and service status pages"
                - "Read the month's release notes and log changes that affect you @recurring(monthly:22)"
                - "Tell the process owner about any change to their steps"
                - "Subscribe to the status page alerts for outages"
            - name: Software support ticket and issue log
              description: |-
                ## Purpose
                Problems with new software get raised in chat, fixed by whoever is around and forgotten, so the same issue returns at every close. A single log of each issue, the workaround, any vendor support ticket and its outcome turns scattered frustrations into a list that can be fixed or escalated.

                ## Milestones
                1. One shared issue log with date, description, workaround and ticket number.
                2. Every vendor support ticket recorded with its outcome.
                3. A monthly review of open issues held.
                4. Recurring problems escalated to the vendor or the implementation partner.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared issue log exists, every support ticket is recorded with its outcome, and open issues are reviewed each month."
                cadence: rolling
              tasks:
                - "Create a shared issue log with columns for workaround and ticket number"
                - "Ask the team to log every software problem there, not in chat"
                - "Review open issues and chase stuck support tickets @recurring(monthly:26)"
                - "Escalate any issue that has come back three times"
            - name: Annual finance app stack and renewal review
              description: |-
                ## Purpose
                Subscriptions creep: an app trialled for one project is still billing two years later, seat counts never fall when people leave and the main plan auto-renews at a higher price. A yearly review two months before the main renewal date checks that each app is used, priced right and still the best fit.

                ## Milestones
                1. Every finance app listed with cost, renewal date and seat count.
                2. Usage checked for each one.
                3. Unused apps and seats cancelled.
                4. Renewal terms for the main ledger reviewed and negotiated before the notice date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each year, every finance app is reviewed two months before the main renewal, with cancellations and renewal terms recorded."
                cadence: cyclic
              tasks:
                - "List every finance subscription with its cost and renewal date"
                - "Review usage, seats and price two months before renewal @recurring(yearly)"
                - "Cancel apps and seats nobody has used in ninety days"
                - "Ask the vendor for renewal terms before the notice date"
            - name: Role-based training plan for the finance team
              description: |-
                ## Purpose
                A system only works as well as the least confident person using it, and most teams get one generic demo and then guess. Training each role on the five or six tasks it actually performs, in the live system with real examples, makes go-live a familiar day rather than a frightening one.

                ## Milestones
                1. The tasks each role performs in the new system listed.
                2. Short sessions held for each role before go-live.
                3. Each person completing their own tasks once unaided in the system.
                4. A refresher held a few months after go-live.

                ## Notes
                Start from the **Training program** template. Record short screen videos of each task; they outlast any manual.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every user has completed their role's core tasks unaided in the live system before go-live, with a refresher held within six months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the five or six tasks each role performs in the system"
                - "Book a short training session for each role before go-live"
                - "Record a screen video of each core task"
                - "Have each person complete their tasks once unaided"
                - "Run a refresher session on new features and common errors @recurring(yearly)"
            - name: Finance system how-to guide for the team
              description: |-
                ## Purpose
                When the one person who set up the software is on holiday, the team needs written steps, not memory. A short guide covering each regular process in this system, with screenshots and the account choices made, keeps work consistent and makes covering for absence possible.

                ## Milestones
                1. A list of the regular processes the guide must cover.
                2. Steps and screenshots written for each process.
                3. The guide tested by someone who did not write it.
                4. A named owner and review date on the guide.

                ## Notes
                Start from the **Operational checklist** template for each recurring process, then link them from one contents page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested how-to guide covers every regular process in the system, with a named owner and a review at least every quarter."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every regular process the team performs in the system"
                - "Write steps with screenshots for each process"
                - "Ask a colleague to follow the guide without help"
                - "Update the guide for any changed step @recurring(quarterly)"
            - name: Vendor certification for the in-house bookkeeper
              description: |-
                ## Purpose
                Most accounting software vendors run free online training and certification for users and advisers. Having the person who uses the system daily complete the course fills gaps in their knowledge of features the business is already paying for, and gives them a credential worth having.

                ## Milestones
                1. The vendor's training academy and certification path found.
                2. Study time agreed with the bookkeeper's manager.
                3. The certification exam passed.
                4. Three features learned during the course put into use.

                ## Notes
                Check the vendor's site for current course content, cost and any renewal requirement before booking.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The in-house bookkeeper holds the vendor's current user certification and has put three newly learned features into use."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find the vendor's training academy and certification options"
                - "Agree weekly study time with the bookkeeper"
                - "Book and pass the certification exam"
                - "List three features from the course to start using"
                - "Complete any annual recertification the vendor requires @recurring(yearly)"
            - name: How integrations post to the ledger
              description: |-
                ## Purpose
                Each connected app writes to the ledger in its own way: some post every transaction, some a daily summary journal, some create contacts and invoices. Knowing exactly what each one posts, and to which accounts, is what lets you explain a strange balance instead of guessing which app caused it.

                ## Milestones
                1. One sample posting from each connected app traced into the ledger.
                2. A note per app of what it creates and which accounts it touches.
                3. The difference between detail and summary posting understood and written down.
                4. One unexplained balance traced back to its source app.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note exists for each connected app describing what it posts and where, and a sample transaction from each has been traced into the ledger."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick one recent transaction from each connected app"
                - "Trace each one into the ledger and note the accounts used"
                - "Write a short note per app on what it creates"
                - "Use the notes to explain one balance that looked wrong"
            - name: Custom report building in the new software
              description: |-
                ## Purpose
                Default reports in most accounting software answer generic questions. Learning the report builder, with its filters, tracking categories, columns by month and saved layouts, lets the team produce the views owners ask for without exporting to a spreadsheet every time.

                ## Milestones
                1. The report builder's filters, groupings and layouts explored on test data.
                2. Three reports the business relies on rebuilt in the software.
                3. Each saved and shared with the people who use it.
                4. One spreadsheet report retired because the software now produces it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three regularly used reports are rebuilt and saved in the software, and at least one spreadsheet report is retired as a result."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work through the vendor's help pages on the report builder"
                - "Rebuild the three reports you use most as saved layouts"
                - "Share each saved report with the people who need it"
                - "Retire one spreadsheet report the software now replaces"
            - name: Reading the audit trail and change history
              description: |-
                ## Purpose
                Every serious accounting system records who created, edited or deleted each transaction and when. Knowing how to search that history answers the questions that come up after go-live, from who changed this invoice to why last month's profit moved, and it is the first place an auditor will look.

                ## Milestones
                1. The audit trail or history report located and its filters understood.
                2. One edited transaction traced to the user and time of each change.
                3. A monthly scan for edits to closed periods in place.
                4. Findings from each scan noted and followed up.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The audit trail can be searched by user, date and transaction, and a monthly scan for edits to closed periods is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the audit trail or history report in the software"
                - "Trace one edited transaction to each user who changed it"
                - "Scan the audit trail for edits to closed periods @recurring(monthly:13)"
                - "Follow up any unexpected edit with the person who made it"
            - name: CSV import templates for bulk data loads
              description: |-
                ## Purpose
                Contacts, products, opening invoices, budgets and journals all go in through import files, and most failed imports come down to a date format, a stray comma or a code that does not match. Learning the vendor's templates and building tested versions once saves hours in the migration and in every bulk update after it.

                ## Milestones
                1. The vendor's import templates downloaded for each data type.
                2. Date, number and code formats the software expects noted.
                3. A small test import of ten rows run for each template.
                4. Tested templates saved for future bulk updates.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A tested import template exists for contacts, items, open invoices, budgets and journals, each proved with a ten-row test import."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Download the vendor's import templates for each data type"
                - "Note the date, number and code formats each one expects"
                - "Run a ten-row test import for each template"
                - "Save the working templates in the finance archive"
            - name: Payroll software connection decision
              description: |-
                ## Purpose
                Payroll can live inside the accounting software, in a separate payroll product that posts a journal, or with a bureau that sends a report. Deciding which, based on headcount, local filing requirements and who runs pay, and wiring the journal to the right accounts, removes the monthly retyping of payroll figures.

                ## Milestones
                1. The three options compared for cost, local filing support and effort.
                2. The chosen route recorded with reasons.
                3. Payroll journal lines mapped to wages, employer taxes, pensions and liability accounts.
                4. The first pay run after connection checked against the payroll report.

                ## Notes
                Running pay itself belongs with the payroll process. This project decides how payroll reaches the ledger and checks that it lands correctly.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A payroll route is chosen with reasons recorded, and the first connected pay run posts to the correct accounts and agrees to the payroll report."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare built-in payroll, a connected payroll app and a bureau"
                - "Record the chosen route and the reasons"
                - "Map each payroll journal line to its ledger account"
                - "Check the payroll journal against the payroll report after each pay run @recurring(monthly:28)"
            - name: Bill and receipt capture tool connection
              description: |-
                ## Purpose
                Typing supplier bills and receipts into the ledger is the slowest part of most small finance teams' week. Connecting a capture tool that reads documents from an email inbox or a phone photo and posts drafts for approval cuts that work, provided the extracted supplier, date, amount and tax are checked before posting.

                ## Milestones
                1. A capture tool chosen, built in or connected.
                2. A dedicated inbox address set up for suppliers to send bills to.
                3. Default accounts and tax codes set for regular suppliers.
                4. One month of captured bills checked for extraction errors.
                5. Regular suppliers told the new address for bills.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Bills and receipts arrive through one capture inbox, regular suppliers have default coding, and a month of extractions has been checked for errors."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose the built-in capture feature or a connected app"
                - "Set up a dedicated inbox address for supplier bills"
                - "Set default accounts and tax codes for regular suppliers"
                - "Clear the capture inbox and approve checked drafts @recurring(weekly:wed)"
                - "Email regular suppliers the new address for bills"
            - name: Purchase approval workflow configuration
              description: |-
                ## Purpose
                New software is the chance to move approvals out of email threads and into the system, where they leave a record. Setting approval rules by amount and department, with a named backup approver, means bills are not paid unapproved and are not stuck when the approver is away.

                ## Milestones
                1. Approval thresholds agreed with the owner or finance lead.
                2. Approval rules configured by amount and department.
                3. A backup approver set for each approver.
                4. Ten bills run through the workflow and checked end to end.

                ## Notes
                Use the limits from your authority matrix if one exists. This project puts them into the software rather than deciding them again.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Approval rules by amount and department are live with backup approvers, and ten test bills have passed through the workflow correctly."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree approval thresholds by amount with the owner"
                - "Configure approval rules in the software by amount and department"
                - "Name a backup approver for every approver"
                - "Run ten bills through the workflow and check each step"
            - name: Inventory module or specialist add-on decision
              description: |-
                ## Purpose
                Businesses that hold stock often find the ledger's built-in inventory handles simple items but not batches, bundles, multiple warehouses or landed costs. Testing the built-in module against your real stock lines before buying an add-on avoids paying for complexity you do not need, or discovering too late that you need it.

                ## Milestones
                1. Stock requirements listed: item count, locations, batches, bundles and landed costs.
                2. The built-in module tested with twenty real items.
                3. Up to two add-ons compared on the same test.
                4. A decision recorded on built-in, add-on or no stock tracking in the ledger.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on stock tracking, based on a twenty-item test of the built-in module and up to two add-ons."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List stock needs: items, locations, batches and bundles"
                - "Test the built-in module with twenty real items"
                - "Run the same test on up to two inventory add-ons"
                - "Record the decision and the costs involved"
            - name: Spreadsheet retirement plan
              description: |-
                ## Purpose
                New finance software rarely removes the spreadsheets by itself: people keep the old ones running in parallel because they trust them. Listing each finance spreadsheet, deciding whether the software now replaces it and agreeing a retirement date with its owner finishes the job the software was bought to do.

                ## Milestones
                1. Every finance spreadsheet still in use listed with its owner.
                2. Each one marked replaced, still needed or to be rebuilt in the software.
                3. A retirement date agreed with each owner.
                4. Retired files moved to a read-only archive.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every finance spreadsheet still in use has a recorded fate, and those the software replaces are archived read-only by their agreed date."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask each person which finance spreadsheets they still update"
                - "Mark each one replaced, still needed or to rebuild in the software"
                - "Agree a retirement date with each spreadsheet owner"
                - "Move retired spreadsheets to a read-only archive"
            - name: Go-live cutover plan
              description: |-
                ## Purpose
                Go-live is a short window where the old system stops, final balances are taken and the new system opens for business, and it goes wrong when the steps live in someone's head. A written cutover plan with every step, owner and check, including what to do if the migration fails, turns the switch into a routine weekend.

                ## Milestones
                1. A step-by-step cutover checklist with an owner and time for each step.
                2. A freeze date after which no new entries go into the old system.
                3. Final balances taken and loaded, with the tie-out checks listed.
                4. A rollback point and the person who decides on using it agreed.
                5. Staff told the first day they will work in the new system.

                ## Notes
                Start from the **Operational checklist** template. Plan cutover for a quiet day straight after a period end, and keep the old system available read-only until the tie-out is signed off.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new system goes live on the planned date by following a written cutover checklist, with the tie-out checks completed and no rollback needed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft the cutover checklist with an owner and time for each step"
                - "Set the freeze date for entries in the old system"
                - "Agree the rollback point and who makes that call"
                - "Tell the team the first day they will work in the new system"
                - "Hold a final readiness check two days before cutover"
            - name: Parallel run month with the old system
              description: |-
                ## Purpose
                Running both systems for one month, entering the same transactions in each, is the surest way to prove the new one produces the same answers. It costs extra effort, so keep it to one month and a defined set of checks: bank balances, debtors, creditors, tax and profit.

                ## Milestones
                1. The parallel month and its checks agreed in advance.
                2. Every transaction for the month entered in both systems.
                3. Bank, debtor, creditor, tax and profit figures compared at month end.
                4. Differences explained and the old system retired from daily use.

                ## Notes
                For a very small business with clean data, a careful tie-out at conversion can replace a parallel run. Agree this with your accountant.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "One month is run in both systems and the five agreed figures match, or every difference is explained, before the old system leaves daily use."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Agree the parallel month and the five figures to compare"
                - "Enter the month's transactions in both systems"
                - "Compare bank, debtors, creditors, tax and profit at month end"
                - "Explain each difference and record the resolution"
            - name: Thirty-day post go-live review
              description: |-
                ## Purpose
                A month after go-live, the team knows exactly what is slow, confusing or broken, and the implementation budget may still have hours left. A structured review with everyone who uses the system captures those lessons while they are fresh and turns them into a short list of fixes.

                ## Milestones
                1. A review meeting held with every regular user about thirty days after go-live.
                2. Problems, workarounds and wishes listed.
                3. The top five fixes chosen with owners and dates.
                4. Unspent implementation budget or partner hours allocated to them.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 130
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A post go-live review is held within forty-five days of go-live, with the top five fixes assigned owners and dates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book the review for about thirty days after go-live"
                - "Ask each user to bring three problems and one wish"
                - "Choose the top five fixes with owners and dates"
                - "Ask the agent to summarise the review notes into an action list"
            - name: Legacy system archive and switch-off
              description: |-
                ## Purpose
                Switching off the old system too early loses history the tax authority or an auditor may ask for, while leaving it running wastes money and invites entries in the wrong place. Keeping a read-only copy or a full export for the record-keeping period, then cancelling the subscription, closes the migration properly.

                ## Milestones
                1. The record-keeping period that applies to the business confirmed.
                2. Full exports of ledgers, reports and attachments saved where the business controls them.
                3. Read-only access kept, or the exports tested as readable without the old software.
                4. The old subscription cancelled and the cancellation confirmation filed.
              priority: medium
              deadlineOffsetDays: 200
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Complete legacy exports are saved and tested, read-only access or an equivalent is in place for the retention period, and the old subscription is cancelled."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm how long business records must be kept where you operate"
                - "Export ledgers, reports and attachments from the old system"
                - "Check the exports can be read without the old software"
                - "Cancel the old subscription and file the confirmation"
            - name: First financial year end in the new system
              description: |-
                ## Purpose
                The first year end after a migration is when hidden set-up problems surface: comparatives that do not match, retained earnings that roll forward wrongly, fixed assets that never came across. Checking the software's year-end steps a month ahead, and giving the accountant what they need from the new system, keeps the first set of accounts on time.

                ## Milestones
                1. The software's year-end rollover steps and settings read a month before year end.
                2. Prior-year comparatives loaded and agreed to last year's accounts.
                3. Accountant access and the reports they need confirmed.
                4. The new year opened with retained earnings rolled forward correctly.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first year end in the new system closes with comparatives agreed to the prior accounts and retained earnings rolled forward correctly."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the software's year-end rollover guide and settings page"
                - "Load prior-year comparatives and agree them to last year's accounts"
                - "Confirm with the accountant which reports they need from the new system"
                - "Check retained earnings rolled forward correctly into the new year"
                - "Review the year-end settings a month before each year end @recurring(yearly)"
            - name: First accounting software for a new company
              description: |-
                ## Purpose
                Founders who start on a spreadsheet and a bank app usually move to software when the first accountant's bill arrives or investors ask for monthly numbers. Setting up properly from the start, with a simple chart, a bank feed and a business-only bank account, costs a weekend and saves a painful clean-up later.

                ## Milestones
                1. A business bank account separate from personal money in place.
                2. Software chosen from two or three options suited to a new company.
                3. The company file set up with the accountant's suggested chart.
                4. The bank feed connected and the first month's transactions coded.
                5. Founder spending from personal cards recorded as amounts owed to the founder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A new company file is live with a separate business bank feed, the accountant's chart and the first month's transactions coded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Open a business bank account if money still runs through a personal one"
                - "Ask your accountant which two or three systems they support"
                - "Set up the company file with the accountant's suggested chart"
                - "Connect the business bank feed and code the first month"
                - "Record founder-paid expenses as money the company owes you"
            - name: Desktop to cloud accounting migration
              description: |-
                ## Purpose
                Moving from installed desktop software to a cloud ledger changes more than where the file lives: users sign in from anywhere, bank feeds replace imports and some reports and features work differently or not at all. Checking what the cloud version does with your desktop data before committing, and planning the move around a period end, prevents nasty surprises.

                ## Milestones
                1. The vendor's conversion tool or migration service checked for your version.
                2. Desktop features the cloud version lacks listed with workarounds.
                3. A test conversion run and its trial balance compared with the desktop file.
                4. The final conversion done at a period end with the desktop file kept read-only.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A test conversion has been compared with the desktop file, gaps have workarounds, and the final move is completed at a period end."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Check whether the vendor offers a conversion tool for your desktop version"
                - "List desktop features you use that the cloud version lacks"
                - "Run a test conversion and compare trial balances"
                - "Schedule the final conversion for a month or quarter end"
            - name: Bookkeeper or accountant onboarding to the system
              description: |-
                ## Purpose
                When a new bookkeeper, finance hire or outside accountant joins, they need access, context and the decisions already made, not a login and good luck. A short onboarding plan covering their role, the integration map, the how-to guide and a supervised first close gets them productive in weeks rather than months.

                ## Milestones
                1. Their own login created with the right role.
                2. The integration map, how-to guide and issue log shared.
                3. A walkthrough of settings and key decisions held.
                4. Their first month end completed alongside an experienced user.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A new finance user has their own login, has been walked through the system's set-up records and completes a supervised first close."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Create a login with the role the newcomer needs"
                - "Share the integration map, how-to guide and issue log"
                - "Walk them through the settings and key decisions in an hour"
                - "Pair them with an experienced user for their first close"
            - name: Multi-currency switch-on for the first overseas customer
              description: |-
                ## Purpose
                The first invoice in a foreign currency forces a decision many small businesses have never made: switch on multi-currency, which some plans charge extra for, or invoice in your own currency. Turning it on deliberately, with foreign currency bank accounts and exchange gain and loss accounts in place, keeps those balances right from the first transaction.

                ## Milestones
                1. The decision made to invoice in your own currency or the customer's.
                2. Multi-currency switched on and the plan cost checked, if needed.
                3. Foreign currency bank accounts and contacts set up.
                4. Exchange gain and loss accounts confirmed and the first foreign payment checked.

                ## Notes
                Multi-currency usually cannot be switched off once used. Test it in a trial file first if you are unsure.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Multi-currency is switched on deliberately, foreign bank accounts and contacts are set up, and the first foreign payment posts with the right exchange difference."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide whether to invoice in your currency or the customer's"
                - "Check whether multi-currency needs a higher plan tier"
                - "Set up the foreign currency bank account and customer"
                - "Check the exchange difference on the first foreign payment"
            - name: ERP selection with an implementation partner
              description: |-
                ## Purpose
                Businesses with several entities, hundreds of users or complex stock eventually outgrow small business ledgers and look at an ERP, where the software is only half the cost and the implementation partner decides most of the outcome. Running a structured selection with a written requirements pack, scripted demos and partner references keeps a six-figure decision grounded.

                ## Milestones
                1. Signs of outgrowing the current system written down with evidence.
                2. A requirements pack and scripted demo issued to two or three vendors and their partners.
                3. Each partner's named team, method and references checked.
                4. Total cost over five years compared, including partner fees and internal time.
                5. A decision recorded with a phased implementation plan.

                ## Notes
                Start from the **Vendor** template for each partner. Meet the consultants who will actually do the work, not only the sales team.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An ERP and implementation partner are chosen after scripted demos and reference checks, with a five-year cost and phased plan recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write down the evidence that the current system no longer fits"
                - "Issue a requirements pack and demo script to two or three vendors"
                - "Call two references for each implementation partner"
                - "Compare five-year costs including partner fees and staff time"
            - name: Custom API and middleware automation design
              description: |-
                ## Purpose
                When no ready-made connector exists, teams start building automations through an integration platform or the ledger's API, and these quietly become critical. Designing them properly, with a service account rather than a person's login, error alerts, a written description and an owner, keeps them from breaking silently when someone leaves.

                ## Milestones
                1. Each proposed automation described: trigger, data moved and accounts touched.
                2. A dedicated service account with limited permissions used for connections.
                3. Error alerts sent to a shared finance inbox.
                4. Every automation documented with an owner and tested before use.

                ## Notes
                Never let an automation create payments or change supplier bank details without a human approval step.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every custom automation runs on a service account, sends failures to a shared inbox and has a written description and named owner."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List each automation the team wants, with trigger and data moved"
                - "Set up a service account with only the permissions needed"
                - "Route automation failure alerts to a shared finance inbox"
                - "Document each automation with its owner before switching it on"
                - "Check the automation failure log for silent errors @recurring(monthly:18)"
            - name: Three-year finance systems roadmap
              description: |-
                ## Purpose
                Systems decisions made one at a time, as each pain appears, leave a business with overlapping apps and a ledger chosen for the company it was three years ago. A short roadmap linking expected growth, headcount and new markets to system changes lets the founder or finance lead budget and time them before they become urgent.

                ## Milestones
                1. Growth expectations for three years written: revenue, headcount, entities and countries.
                2. Each expected change linked to a system need, such as approvals, consolidation or stock.
                3. A timeline of system changes with rough costs.
                4. The roadmap reviewed with the leadership team and updated each year.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written three-year systems roadmap with a timeline and rough costs is agreed by leadership and reviewed every year."
                cadence: cyclic
              tasks:
                - "Write the business's three-year growth expectations on one page"
                - "Link each change to a system need it will create"
                - "Put the system changes on a timeline with rough costs"
                - "Review the roadmap with leadership before budgeting each year @recurring(yearly)"
---

# Accounting Software Implementation

This area is for owners, founders and small finance teams choosing their first accounting system, moving off desktop software or replacing a ledger the business has outgrown. It starts with the foundations (requirements, a scored shortlist, a trial, the conversion date and core settings), then the build work of migrating accounts, contacts, open items and bank feeds, the routines that keep the system healthy, the skills that make the team confident in it, the decisions about payroll, capture tools and approvals, the dated events from cutover to the first year end, situations from a new company to a first overseas customer, and finally ERP selection, custom automation and a systems roadmap.

What repeats is a Monday bank feed check, monthly reviews of sync errors, bank rules, lock dates, release notes, backups and the issue log, a quarterly user access review, and a yearly look at subscriptions and renewal terms. The Purchase decision, Training program, Operational checklist, Meeting notes, Onboarding plan and Vendor templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
