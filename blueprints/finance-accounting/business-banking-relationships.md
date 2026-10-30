---
id: finance-accounting.business-banking-relationships
name: Business Banking Relationships
description: "The right business accounts and payment providers, a clean mandate and online banking roles, fees kept in check, and a relationship manager who knows the business before you need credit."
category: business
version: 1.0.0
tags: [finance-accounting, business-banking-relationships, small-business, founder, manager, bank-accounts, payment-providers, relationship-manager]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - person
    - meeting-notes
    - vendor
    - operational-checklist
    - risk-register
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Business Banking Relationships
          description: "Choosing and managing business bank accounts, payment providers, facilities and relationship managers so banking supports the business rather than slowing it."
          projects:
            - name: Business banking needs map
              description: |-
                ## Purpose
                Before comparing any bank, write down what the business actually asks of one: monthly payment volumes in and out, cash and cheque deposits, card takings, currencies, payroll runs and any borrowing expected in the next two years. Most poor bank choices come from picking on the headline monthly fee while ignoring the one service the business uses fifty times a month. A one-page needs map turns every later comparison into a like-for-like test.

                ## Milestones
                1. Twelve months of transaction counts by type pulled from statements or the ledger.
                2. Cash, cheque and card takings recorded month by month.
                3. Currencies paid and received listed with rough annual values.
                4. Borrowing, guarantees or merchant services likely in the next two years noted.
                5. A dated one-page needs map saved with the finance records.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one-page needs map shows twelve months of transaction volumes by type, the currencies used and the borrowing expected in two years."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export the last twelve months of bank statements as a spreadsheet"
                - "Count payments in and out by type: transfer, card, direct debit, cash and cheque"
                - "List every currency the business paid or received last year"
                - "Write down any borrowing or merchant services likely within two years"
                - "Ask the agent to summarise the counts into a one-page needs map"
            - name: Separate business account from personal money
              description: |-
                ## Purpose
                Freelancers and new founders often run the first months of trading through a personal account, which muddles the tax return, breaks many banks' personal account terms and makes the business look smaller than it is. Moving every business receipt and cost into a dedicated account gives the accountant a clean trail and starts the trading history a lender will later ask to see.

                ## Milestones
                1. A dedicated business account open in the trading name.
                2. Customers given the new payment details on invoices and the website.
                3. Business subscriptions and direct debits moved off personal cards.
                4. A written rule for how the owner pays themself from the business account.
                5. A full calendar month with no business transaction in any personal account.

                ## Notes
                Check your personal account terms: many forbid regular business use, and some banks close accounts they believe are being used for trade.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A full calendar month passes with every business receipt and payment going through the business account and none through personal accounts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every business payment that went through a personal account last month"
                - "Open a business account in the trading name"
                - "Update invoice templates and the website with the new account details"
                - "Move each business subscription onto the business account or card"
                - "Set a standing transfer for owner pay instead of ad hoc withdrawals"
            - name: Choosing the main business current account
              description: |-
                ## Purpose
                The main account carries payroll, supplier runs, takings and every login the team uses, so changing it later is slow and disruptive. Scoring three providers against your needs map, using their published tariffs and an honest read of service reviews, gives a choice you can defend to a co-founder or board instead of whichever bank had the nearest branch.

                ## Milestones
                1. Three providers shortlisted, including at least one app-based business account.
                2. Each scored on the same criteria: fees on your volumes, payment limits, user controls, service access and lending appetite.
                3. An estimated annual cost for each worked out from real transaction counts.
                4. A decision recorded with the reason and the runner-up.

                ## Notes
                Start from the **Purchase decision** template. Ask each provider how long opening takes for your company type; for some ownership structures it runs to several weeks.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the chosen main account provider, with three providers scored on the same criteria and an annual cost estimate for each."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Shortlist three providers that open accounts for your company type"
                - "Download each provider's business tariff and account terms"
                - "Price a typical year at each provider using the needs map volumes"
                - "Ask each provider how quickly they can open and what they need from you"
                - "Record the decision, the reason and the runner-up"
            - name: Account opening document pack
              description: |-
                ## Purpose
                Banks must identify the business, its directors and anyone who owns or controls it, and applications stall for weeks when one certified document or ownership chart is missing. Building the pack once, with clear copies and a short description of what the business does and where its money comes from, makes every future opening, periodic review or product request faster.

                ## Milestones
                1. Incorporation documents, registered address and constitution gathered in one folder.
                2. A chart of every owner and controller above the bank's ownership threshold drawn up.
                3. In-date identity and address evidence held for each director and owner.
                4. A half-page business description covering activities, customers, countries and expected volumes.
                5. The pack stored in restricted storage with each identity document's expiry date noted.

                ## Notes
                Thresholds and accepted documents vary by country and bank, so ask for the bank's own list rather than assuming. The pack holds personal data on every director; keep access tight.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A securely stored pack holds company documents, an ownership chart, in-date ID for every director and owner, and a business description."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your chosen bank for its full list of account opening documents"
                - "Download a current company register extract and the constitution"
                - "Draw a simple chart of every owner and controller with percentages"
                - "Collect in-date identity and address evidence from each director"
                - "Write a half-page description of what the business does and who pays it"
            - name: Bank mandate and authorised signatories
              description: |-
                ## Purpose
                The mandate is the bank's instruction on who may operate the account and how many of them must agree, and an outdated one is behind many stuck payments after someone leaves. Setting it deliberately, with at least two people who can act and thresholds that match how the business really pays, removes the single point of failure and the founder who cannot pay suppliers from a beach.

                ## Milestones
                1. The current mandate obtained from the bank and read in full.
                2. Signatories, signing rules and any amount thresholds agreed by the directors.
                3. A directors' resolution approving the mandate on file.
                4. Written confirmation from the bank that its records match the agreed mandate.

                ## Notes
                Keep at least two people able to authorise payments, even in a two-person business. A sole signatory in hospital can stop payroll.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A directors' resolution and the bank's written confirmation show the same signatories and signing rules, with at least two people able to authorise."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the bank for a copy of the current account mandate"
                - "Agree signatories and signing thresholds with the other directors"
                - "Minute the agreed mandate in a directors' resolution"
                - "Submit the mandate forms and the resolution to the bank"
                - "Get written confirmation that the bank's records now match"
            - name: Online banking user roles and dual approval
              description: |-
                ## Purpose
                Online banking platforms let you give each person a role: view only, create payments, approve payments or administer users. Many small businesses share one login or give everyone full rights, which breaches the bank's terms and leaves no record of who did what. Named users with a creator and approver split, plus sensible daily limits, are the cheapest control the bank will ever give you.

                ## Milestones
                1. Everyone who touches online banking listed with the role they need.
                2. Shared logins replaced by named users on their own security devices.
                3. Payment creation and approval split between different people above an agreed amount.
                4. Daily and single payment limits set to fit the largest normal payment run.
                5. A dated export or screenshot of the user set-up saved.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every online banking user is named with a defined role, no login is shared, and payments above the agreed amount need a second approver."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List everyone who logs into online banking today and what they do there"
                - "Request a named login and security device for each person"
                - "Set payments above an agreed amount to need a second approver"
                - "Set daily and single payment limits that fit the largest normal run"
                - "Save a dated export of users and roles with the finance records"
            - name: Bank and provider access map
              description: |-
                ## Purpose
                Growing businesses pick up providers and logins fast: a savings pot, a currency account, a payment app wallet, a card terminal portal, each with its own security token sitting in someone's drawer or phone. A map of every provider, who holds which login and token, and who is on each mandate shows at a glance where the business depends on one person and what to recover if a phone is lost.

                ## Milestones
                1. Every bank, payment provider and wallet the business uses listed.
                2. For each one: purpose, mandate signatories, login holders and where security devices are kept.
                3. Any provider reachable by only one person flagged.
                4. The map stored where the person covering finance in your absence can find it.

                ## Notes
                Record who holds a login, never the passwords or token codes themselves.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A map lists every bank and payment provider with login holders and token locations, and no provider is reachable by only one person without a recorded reason."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search email and the ledger for every provider the business has signed up to"
                - "Record the purpose, signatories and login holders for each provider"
                - "Flag providers that only one person can get into"
                - "Update the map for any provider added or dropped @recurring(quarterly)"
            - name: Banking contacts and escalation sheet
              description: |-
                ## Purpose
                When a payment goes missing, a card is used fraudulently or the account is suddenly blocked, nobody wants to search a website for the right number. One sheet with the relationship manager, the business service line, fraud and card cancellation numbers, each payment provider's support route and the complaint process saves hours on the worst day of the quarter.

                ## Milestones
                1. Named contacts and direct lines recorded for each bank and payment provider.
                2. Fraud reporting and card cancellation numbers listed for every provider.
                3. Each bank's complaint route and the external ombudsman or dispute body noted.
                4. A copy kept where at least two people can reach it without online access.

                ## Notes
                Start from the **Person** template for each relationship manager and link their pages from the sheet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One sheet holds direct contacts, fraud lines and complaint routes for every bank and payment provider, and two named people know where it is kept."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the fraud and card cancellation numbers for each provider"
                - "Record the relationship manager's direct line and email"
                - "Note each bank's complaint process and the external dispute body"
                - "Print a copy and keep it with the business continuity papers"
                - "Ring each listed number to check it still reaches the right team @recurring(yearly)"
            - name: Twelve-month banking fee baseline
              description: |-
                ## Purpose
                Bank charges arrive as dozens of small debits labelled with codes, so few owners know what banking really costs each year. Adding up twelve months of account fees, transaction charges, cash handling, international payment charges and card processing gives a baseline to negotiate from and a way to tell whether the next tariff change hurts.

                ## Milestones
                1. Every bank and payment provider charge for twelve months pulled into one sheet.
                2. Charges grouped into account fees, payments, cash, international, card processing and facility fees.
                3. An annual total and an average cost per payment worked out.
                4. The three largest charge lines named as negotiation targets.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sheet shows twelve months of banking and payment provider charges by category, with an annual total and the three largest lines named."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Filter twelve months of statements for every bank charge line"
                - "Add the fees from each payment provider's monthly statements"
                - "Group the charges into six categories and total each one"
                - "Work out the average cost per payment made and received"
                - "Name the three charge lines worth negotiating first"
            - name: Weekly banking alerts and balance check
              description: |-
                ## Purpose
                Most business platforms can send alerts for low balances, large debits, new payees and failed direct debits, yet many owners discover a bounced supplier payment days later. Setting alerts once and spending ten minutes each Monday on balances, pending items and anything flagged keeps the surprises small and the suppliers patient.

                ## Milestones
                1. Low balance, large debit and new payee alerts switched on for every account.
                2. Alerts going to at least two people.
                3. A ten-minute Monday check of balances and flagged items kept for eight weeks.
                4. Every returned or failed payment followed up within one working day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Alerts are live on every account for two people, and eight consecutive Monday checks are recorded with follow-ups noted."
                cadence: rolling
              tasks:
                - "Switch on low balance, large debit and new payee alerts for each account"
                - "Add a second person to receive the alerts"
                - "Check balances, pending items and alerts across all accounts @recurring(weekly:mon)"
                - "Chase any failed or returned payment on the day it shows"
            - name: Monthly banking cost and package fit check
              description: |-
                ## Purpose
                Free banking periods end, promotional rates lapse and volumes grow until the business sits on the wrong package, often without anyone noticing for a year. Comparing each month's total charges with the baseline, and asking once a quarter whether a different package would be cheaper on current volumes, catches the drift while it is still small.

                ## Milestones
                1. A monthly row added to the fee baseline for every account.
                2. Any month above the baseline explained or raised with the bank within the month.
                3. The provider's alternative packages priced on current volumes at least once.
                4. Six consecutive monthly checks completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly cost checks are recorded against the baseline, with every rise explained and the package compared on current volumes."
                cadence: rolling
              tasks:
                - "Add a monthly row for each account to the fee baseline sheet"
                - "Compare the month's banking costs with the baseline and flag any rise @recurring(monthly:9)"
                - "Price the bank's other business packages on this year's volumes"
                - "Ask to move package if another one is cheaper on current volumes"
            - name: Bank notices and terms change log
              description: |-
                ## Purpose
                Notice of tariff rises, new terms, withdrawn products and requests for information arrives by secure message, letter or an app banner, often with a deadline attached. A simple log of each notice, what it changes and who acts on it means a two-month notice period is used to respond or move, not discovered after it has passed.

                ## Milestones
                1. One log chosen where every bank and provider notice is recorded.
                2. Each notice logged with date received, what changes, deadline and owner.
                3. Secure inboxes and post checked on a fixed day each month.
                4. Every notice with a deadline closed before that deadline.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A notices log has been in use for six months, and every notice with a deadline shows an owner and a closed date before that deadline."
                cadence: rolling
              tasks:
                - "Create a notices log with date, provider, change, deadline and owner columns"
                - "Turn on email notification of new secure messages from each bank"
                - "Check every bank's secure inbox and post for notices @recurring(monthly:21)"
                - "Give each notice an owner and a deadline in the log"
            - name: Quarterly relationship manager check-in
              description: |-
                ## Purpose
                Relationship managers look after dozens or hundreds of businesses and tend to hear from customers only when something has gone wrong. A short call each quarter with a few lines on trading, plans and what you might need from the bank turns the manager into someone who can argue your case internally when a facility or an exception is needed.

                ## Milestones
                1. A quarterly slot agreed with the relationship manager.
                2. A short agenda prepared for each call: trading, plans, upcoming needs, service issues.
                3. Notes and actions from each call saved.
                4. Four check-ins held in a year with every action closed by the next one.

                ## Notes
                Start from the **Meeting notes** template. If your provider has no named manager, use the same rhythm with the business service team and log the case numbers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly check-ins are held in twelve months, each with saved notes and its actions closed by the following call."
                cadence: rolling
              tasks:
                - "Ask the relationship manager to agree a short quarterly call"
                - "Prepare a five-line trading update before each call"
                - "Hold the quarterly call and save the notes and actions @recurring(quarterly)"
                - "Close each action before the next call is due"
            - name: Quarterly signatory and user access review
              description: |-
                ## Purpose
                People leave, change roles or stop needing approval rights, but their online banking access and place on the mandate usually outlive the job. A quarterly comparison of each bank's user list and mandate against the current team closes the gap before an ex-employee's token is used, or before a needed approver turns out to have been removed.

                ## Milestones
                1. Current user lists and mandates exported from each bank.
                2. Each user checked against the current team and their role.
                3. Leavers removed and role changes made within a week of the review.
                4. A dated sign-off of each review kept for the accountant or auditor.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews are completed in a year, each signed off, with no leaver holding bank access more than a week after leaving."
                cadence: rolling
              tasks:
                - "Export the user list from each online banking platform"
                - "Compare bank users and mandates with the current team and roles @recurring(quarterly)"
                - "Remove leavers and correct roles in the same week"
                - "Add a step to the leaver checklist to revoke bank access on the last day"
            - name: Merchant statement and effective rate review
              description: |-
                ## Purpose
                Card processing is often the largest banking cost for a shop, café or online seller, and the headline rate rarely matches what the statement charges once scheme fees, authorisation fees and premium card surcharges are added. Working out the effective rate each month, total fees divided by card turnover, shows whether pricing has crept and gives a clean number to take to the provider.

                ## Milestones
                1. Each month's merchant statement saved in one folder.
                2. The effective rate calculated as total fees over card turnover.
                3. Any noticeable rise explained or queried with the provider.
                4. A twelve-month trend of the effective rate held in one sheet.

                ## Notes
                This is a pricing check. Matching individual payouts to orders and refunds belongs with payout reconciliation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A sheet shows the monthly effective card processing rate for twelve months, with every noticeable rise explained or queried with the provider."
                cadence: rolling
              tasks:
                - "Download the latest merchant statement from each card provider"
                - "Divide total processing fees by card turnover to get the effective rate @recurring(monthly:14)"
                - "Query any fee line you cannot explain with the provider"
                - "Chart the effective rate for the last twelve months"
            - name: Periodic bank information review readiness
              description: |-
                ## Purpose
                Every year or few years the bank must refresh what it knows about the business, its owners and its activity, and requests often come with a short deadline and a warning that the account may be restricted. Keeping the document pack current and answering within days protects the account from the blocks that hit businesses who leave the letter unread.

                ## Milestones
                1. The bank's review cycle and the date of the last review confirmed.
                2. The document pack checked for expired identity documents and changed ownership.
                3. Each review request answered in full within the bank's deadline.
                4. The bank's confirmation of each completed review saved.

                ## Notes
                Genuine requests come through the bank's own secure channels. Treat any unexpected email asking for documents through a link with suspicion and verify it using the contacts sheet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every bank information review in the last two years was answered in full before its deadline, with the bank's confirmation saved."
                cadence: cyclic
              tasks:
                - "Ask the bank when the business's next information review is due"
                - "Check the document pack for expired IDs and changes in ownership @recurring(yearly)"
                - "Answer each review request through the bank's secure channel"
                - "Save the bank's confirmation that the review is complete"
            - name: Annual results conversation with the bank
              description: |-
                ## Purpose
                Most lenders decide on businesses they understand, and the accounts they hold on file are often two years old by the time a loan is needed. Sending each year's accounts with a one-page commentary, and offering a short call, keeps the bank's view current and makes the next credit request a continuation rather than a cold start.

                ## Milestones
                1. Approved year-end accounts sent to the bank within a month of approval.
                2. A one-page commentary on results, outlook and plans attached.
                3. A call or meeting offered to talk the numbers through.
                4. Any questions the bank raised recorded with the answers given.

                ## Notes
                This is relationship upkeep for every customer. Covenant reporting under an existing loan is separate and sits with loan servicing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Each year's approved accounts and a one-page commentary reach the bank within a month of approval, with any questions answered in writing."
                cadence: cyclic
              tasks:
                - "Ask the bank which financial information it likes to receive each year"
                - "Send the approved accounts with a one-page commentary @recurring(yearly)"
                - "Offer the relationship manager a call on the results"
                - "Record the bank's questions and the answers you gave"
            - name: Annual banking relationship review
              description: |-
                ## Purpose
                Once a year, step back and ask whether each provider still fits: fees against the baseline, service response times, products used, lending appetite and how it handled the year's problems. A short scored review, shared with the directors, either confirms staying with a clear conscience or starts a switch with a year of evidence behind it.

                ## Milestones
                1. The year's fees, service incidents and response times collected for each provider.
                2. Each provider scored against the criteria used when it was chosen.
                3. Views gathered from the people who use online banking every day.
                4. A stay, renegotiate or switch decision minuted by the directors.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A scored annual review exists for each banking provider, with a minuted stay, renegotiate or switch decision for the year."
                cadence: cyclic
              tasks:
                - "Gather the year's fees, incidents and response times for each provider"
                - "Score each provider against the original selection criteria @recurring(yearly)"
                - "Ask daily users what slowed them down this year"
                - "Minute a stay, renegotiate or switch decision with the directors"
            - name: Understanding business bank tariffs
              description: |-
                ## Purpose
                A business tariff mixes monthly account fees, per-item charges for payments in and out, cash and cheque handling, international transfers, exchange rate margins and charges for extras such as extra users or security devices. Learning to read one tariff line by line and model it on your own volumes is what lets you compare an app-based account with a traditional package honestly.

                ## Milestones
                1. One provider's tariff annotated line by line.
                2. Each charge type mapped to how often the business triggers it.
                3. Less visible costs such as exchange margins and minimum monthly fees identified.
                4. The same year's volumes priced at a second provider.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two providers' tariffs are priced on the business's own annual volumes, with exchange margins and minimum fees included in both totals."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Download your current bank's business tariff in full"
                - "Annotate each charge with how often the business triggers it"
                - "Find the exchange rate margin applied to international payments"
                - "Price the same year at one alternative provider"
            - name: Payment rails, cut-offs and cost
              description: |-
                ## Purpose
                A supplier paid by international wire, an instant domestic transfer, a direct debit and a card payment all move on different rails with different cut-off times, costs, limits and chances of reversal. Knowing which rail each payment uses lets you pick the cheaper route, plan payroll around cut-offs and explain to a customer exactly why their money has not landed yet.

                ## Milestones
                1. The rails your bank offers listed with cut-off times, limits and charges.
                2. Each regular payment type matched to the rail it uses today.
                3. Payroll and supplier run cut-offs written into the payment calendar.
                4. At least one payment type moved to a cheaper or faster rail where it makes sense.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page table of the bank's payment rails with cut-offs, limits and costs exists, and payroll and supplier runs are scheduled around it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the bank for its payment cut-off times and limits by payment type"
                - "Match each regular outgoing payment to the rail it uses"
                - "Write the cut-off times into the payroll and supplier payment calendar"
                - "Pick one payment type to move to a cheaper or faster rail"
            - name: How a bank credit analyst reads your application
              description: |-
                ## Purpose
                Credit decisions are made by people who will never visit the premises and who read the file against a checklist: track record and character, ability to repay from cash flow, capital in the business, security offered and conditions in the sector. Owners who understand that checklist write applications that answer questions before they are asked, and can tell early when a bank simply has no appetite for their sector.

                ## Milestones
                1. The common credit assessment criteria summarised in your own words.
                2. The last two years of accounts read as a lender would, with weak points noted.
                3. A list of likely lender questions with draft answers.
                4. One conversation held with a relationship manager about the bank's appetite for your sector.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of likely lender questions with draft answers, built from the business's own accounts, and one recorded appetite conversation with a bank."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a lender's published guide to how it assesses business applications"
                - "Mark the weak points a lender would see in the last two years of accounts"
                - "Draft answers to the ten questions a lender is most likely to ask"
                - "Ask the relationship manager how the bank views your sector right now"
            - name: Reading a merchant services pricing schedule
              description: |-
                ## Purpose
                Card acquiring is priced as a blended rate, interchange plus or interchange plus plus, with separate lines for scheme fees, refunds, chargebacks, terminal rental and minimum monthly charges. Small sellers often sign on the headline rate and pay far more once their card mix and the minimums apply, so learning the structure before signing or renewing is worth an afternoon.

                ## Milestones
                1. The three common pricing structures explained in a short note.
                2. The current schedule annotated, including terminal, chargeback and minimum charges.
                3. The card mix by debit, credit, commercial and foreign cards estimated.
                4. The current contract's notice period and early exit fees recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An annotated pricing schedule exists with the card mix, every fixed charge and the contract's notice and exit terms recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find your current merchant agreement and its pricing schedule"
                - "Write a short note comparing blended and interchange plus pricing"
                - "Estimate the share of debit, credit, commercial and foreign cards you take"
                - "Record the notice period and any early termination fee"
            - name: Deposit protection and provider status basics
              description: |-
                ## Purpose
                Business balances above your country's deposit protection limit are at risk if a bank fails, and many payment and e-money providers are not banks at all, so they protect customer money by safeguarding rather than deposit insurance. Knowing which protection applies to each account lets an owner holding a tax reserve or a founder holding a funding round decide whether one provider is enough.

                ## Milestones
                1. The deposit protection scheme and limit for each bank account confirmed.
                2. Each payment or e-money provider's regulatory status and safeguarding arrangement noted.
                3. Balances above protection limits identified across the access map.
                4. A short note to the directors on any concentration worth acting on.

                ## Notes
                This is organisational, not investment advice. Where surplus cash should be placed is a treasury decision to take with your adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every account in the access map shows its protection scheme or safeguarding status, and the directors have a note on balances above the limits."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Look up the deposit protection scheme and limit that covers each bank"
                - "Check each payment provider's status on the financial regulator's register"
                - "Note every balance that regularly sits above the protection limit"
                - "Recheck each provider's protection status and limit @recurring(yearly)"
            - name: Why banks restrict or exit accounts
              description: |-
                ## Purpose
                Banks can hold payments, freeze an account or give notice to close it when screening flags unusual activity, missing information or a sector they have decided not to serve. Knowing the common triggers, the notice the account terms promise and what the bank can and cannot tell you means the business avoids the avoidable flags and has a plan ready if it happens anyway.

                ## Milestones
                1. The account terms on restriction, closure and notice read and summarised.
                2. Common triggers listed: sudden volume spikes, unexplained third-party receipts, higher-risk countries, unanswered reviews.
                3. Activities in the business that could look unusual from the bank's side written down with a short explanation.
                4. The bank told in advance about the next large or unusual transaction.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note summarises the bank's restriction and closure terms, the business's likely triggers and how the bank will be warned of unusual activity."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read the restriction and closure clauses in your account terms"
                - "List business activities that could look unusual from the bank's side"
                - "Write a one-line explanation for each that you could give the bank"
                - "Tell the relationship manager before the next unusually large receipt"
            - name: Bank-ready credit proposal pack
              description: |-
                ## Purpose
                Credit requests that arrive as a two-line email wait weeks, while one with a clear amount, purpose, repayment source and supporting numbers can reach a credit committee the same month. Building a reusable pack, with a one-page summary, recent management accounts, a cash flow forecast and the security on offer, prepares the business for the day it needs to borrow, ideally well before it is desperate.

                ## Milestones
                1. A one-page summary stating amount, purpose, term and repayment source.
                2. Latest management accounts and the last two years of statutory accounts attached.
                3. A cash flow forecast showing the repayments covered.
                4. Security and personal guarantee positions written down, with advice taken on guarantees.
                5. The pack reviewed by your accountant before it goes to any bank.

                ## Notes
                Take advice before signing any personal guarantee; it puts personal assets behind the business's debt.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A credit proposal pack with a one-page summary, accounts, a cash flow forecast and the security position has been reviewed by the accountant."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the one-page summary: amount, purpose, term and how it will be repaid"
                - "Attach the latest management accounts and two years of statutory accounts"
                - "Add a cash flow forecast that shows the repayments covered"
                - "Ask the agent to check the pack for lender questions it leaves unanswered"
                - "Send the pack to your accountant for review"
            - name: Tax and reserve holding account
              description: |-
                ## Purpose
                Sales tax collected from customers and the year's income tax are not the business's money to spend, yet they sit in the same balance as everything else until the bill arrives. A separate instant-access account with a set share of receipts moved into it each month makes the tax payment a non-event and stops a good month being mistaken for spare cash.

                ## Milestones
                1. A separate instant-access account opened in the business name.
                2. The share of receipts to set aside agreed with your accountant.
                3. A monthly transfer made on a fixed day.
                4. The next tax payment made entirely from the reserve account.

                ## Notes
                Let your accountant set the percentage; it depends on your tax position and registrations.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A reserve account receives a monthly transfer at the rate the accountant set, and the next tax payment is made from it in full."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your accountant what share of receipts to set aside for tax"
                - "Open a separate instant-access account in the business name"
                - "Move the agreed share of last month's receipts to the reserve @recurring(monthly:26)"
                - "Pay the next tax bill from the reserve account"
            - name: Backup bank account for resilience
              description: |-
                ## Purpose
                An outage, a fraud block or a closure notice at your only bank can stop payroll and supplier payments for days. A second, active account at an unrelated provider, with the same signatories and enough balance to cover one payroll, gives the business somewhere to turn while the main problem is sorted out.

                ## Milestones
                1. A second provider chosen that does not share the main bank's systems.
                2. The account opened with matching signatories and dual approval.
                3. A balance target agreed, such as one payroll plus a week of supplier payments.
                4. A small payment in and out made each quarter so the account stays active.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A second account at an unrelated provider is open, funded to the agreed target and has had activity in each of the last two quarters."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a second provider that does not run on the main bank's systems"
                - "Open the account with the same signatories and approval rules"
                - "Agree the balance target with the directors"
                - "Make a small payment in and out of the backup account @recurring(quarterly)"
            - name: Choosing a card payment provider
              description: |-
                ## Purpose
                For businesses taking cards in person or online, the payment provider decides fees, how fast money lands, terminal reliability and how chargebacks are handled. Comparing a traditional acquirer with two payment platform options on your real card mix, payout speed and contract terms avoids the classic trap of a low rate tied to a long contract and expensive terminals.

                ## Milestones
                1. Three providers compared on effective rate for your card mix, payout timing and contract length.
                2. Terminal costs, online gateway fees and chargeback charges included in each total.
                3. Each provider's rules on rolling reserves and payout holds confirmed in writing.
                4. A provider chosen and recorded as a supplier with its contract dates.

                ## Notes
                Start from the **Vendor** template. A sudden sales spike can trigger a payout hold at some providers, so ask what triggers one before signing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of card payment provider, with three options compared on effective rate, payout timing, reserves and contract terms."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate annual card turnover and the mix of card types you take"
                - "Get written quotes from one acquirer and two payment platforms"
                - "Ask each provider in writing about rolling reserves and payout holds"
                - "Compare effective rate, payout timing and exit terms side by side"
                - "Set up the chosen provider's vendor record with its renewal dates"
            - name: Negotiating bank charges with the relationship manager
              description: |-
                ## Purpose
                Business tariffs are often negotiable for customers with steady volumes, clean conduct and other business to offer, but banks rarely volunteer a better deal. Taking the fee baseline, two competitor quotes and a specific written ask to the relationship manager often brings down per-item or card charges and, at worst, tells you the bank will not move.

                ## Milestones
                1. The three largest charge lines written down with a target price for each.
                2. Two competitor quotes for the same volumes in hand.
                3. A written proposal sent to the relationship manager.
                4. The bank's response recorded and any new pricing confirmed in writing.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written pricing proposal has gone to the bank, its response is recorded and any agreed change shows on the next statement."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick the three largest charge lines from the fee baseline"
                - "Get two competitor quotes priced on the same volumes"
                - "Send the relationship manager a written proposal with target prices"
                - "Check the next statement shows any newly agreed pricing"
            - name: Direct debit collection set-up
              description: |-
                ## Purpose
                Gyms, subscription services, maintenance contracts and membership bodies lose time and cash chasing payments that a direct debit would collect on the day. Becoming a collector through your bank or a collection bureau involves an application, often an indemnity or credit check and set mandate wording, so planning it gets collections live without a false start.

                ## Milestones
                1. Bank or bureau route chosen, with fees and indemnity requirements known.
                2. The collector application approved.
                3. Customer mandate wording and advance notice letters ready.
                4. The first collection run made and every failure followed up.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Direct debit collection is live, the first run has been made and every failed collection was followed up within five working days."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compare collecting through your bank with using a collection bureau"
                - "Submit the collector application with any indemnity the bank asks for"
                - "Prepare mandate wording and advance notice templates for customers"
                - "Review failed collections and indemnity claims @recurring(monthly:17)"
            - name: Bulk payment file set-up
              description: |-
                ## Purpose
                Keying twenty supplier payments or a payroll by hand into online banking is slow and invites typing errors. Most business platforms accept a bulk payment file exported from the accounting or payroll system, so setting up the format, testing it with a small batch and agreeing who uploads and who approves turns a two-hour job into ten minutes.

                ## Milestones
                1. The bank's accepted bulk file formats and limits confirmed.
                2. The export from the accounting or payroll system configured to match.
                3. A test batch of small payments uploaded and approved successfully.
                4. Upload and approval roles written into the payment procedure.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bulk payment file from the accounting or payroll system uploads and pays correctly, with separate upload and approval roles written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the bank which bulk payment file formats it accepts"
                - "Configure the matching export in the accounting or payroll system"
                - "Upload a test batch of three small payments"
                - "Write who uploads and who approves into the payment procedure"
            - name: Cash deposit and handling arrangements
              description: |-
                ## Purpose
                Shops, bars, market traders and tradespeople who take cash pay for every deposit and can lose hours queuing at a branch that keeps shortening its hours. Comparing branch counters, deposit machines, agent or post office banking where offered and cash collection services on cost, safety and time gives a routine that suits the takings and the insurer's limits.

                ## Milestones
                1. Weekly cash takings and current deposit charges recorded.
                2. Options compared: branch, deposit machine, agent or post office counter, collection service.
                3. The insurer's limit for cash held on the premises confirmed.
                4. A deposit routine chosen with set days and a named person.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A cash deposit routine with set days and a named person is chosen, priced against two alternatives and within the insurer's cash limit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Total last quarter's cash takings and deposit charges"
                - "List every deposit option your bank offers near the business"
                - "Ask your insurer the limit for cash kept on the premises overnight"
                - "Set the deposit days and the person responsible"
            - name: Overdraft facility application
              description: |-
                ## Purpose
                An agreed overdraft is the simplest safety net for timing gaps, and it is far easier to arrange while trading is good than in the week a large customer pays late. Sizing it from the cash flow forecast, applying with a clean pack and understanding the fees, security and review date means the facility is in place before it is needed.

                ## Milestones
                1. A facility size worked out from the forecast's lowest month plus a buffer.
                2. The application submitted with the credit proposal pack.
                3. Arrangement fee, interest margin, security and review date set out in the offer.
                4. The offer letter reviewed with your accountant before signing.

                ## Notes
                Once the facility is live, repayments, covenants and renewals belong with debt and loan servicing.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An overdraft offer, sized from the cash flow forecast and reviewed with the accountant, is accepted or declined with the reasons recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the lowest month in the cash flow forecast and add a buffer"
                - "Ask the relationship manager what the bank needs for an overdraft request"
                - "Submit the application with the credit proposal pack"
                - "Review the offer's fees, security and review date with your accountant"
            - name: Moving the main banking relationship to a new bank
              description: |-
                ## Purpose
                Moving the main account touches customers, payroll, suppliers, card providers, the tax authority and every direct debit, and a rushed switch is how payments go astray. Running old and new accounts side by side for two to three months, with a checklist of every party to tell, lets the old relationship wind down quietly instead of with a bounced payroll.

                ## Milestones
                1. Every party that pays into or debits the old account listed.
                2. The new account open with mandate, users and limits mirroring the agreed set-up.
                3. Customers, payroll, suppliers, the tax authority and payment providers updated, each with confirmation.
                4. Both accounts monitored in parallel for at least two months.
                5. The old account closed and its final statement filed.

                ## Notes
                Start from the **Operational checklist** template. Ask customers to verify your new details by phone; a bank switch is exactly when invoice fraudsters send fake change notices.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The old account is closed with its final statement filed, after at least two months of parallel running with no misdirected payment."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every customer, supplier and provider that pays or debits the old account"
                - "Open the new account with matching mandate, users and limits"
                - "Send change of bank details letters with a call-back verification number"
                - "Watch both accounts each week for stray payments for two months"
                - "Close the old account and file the final statement"
            - name: First meeting with a relationship manager
              description: |-
                ## Purpose
                The first meeting sets how the bank sees the business for years: a founder who arrives with a short story, recent numbers and clear plans is filed very differently from one who turns up to complain about a fee. Preparing a one-page profile, three questions about the bank's appetite and a view of what you may need next year makes the hour useful for both sides.

                ## Milestones
                1. A one-page business profile with recent trading and plans.
                2. Three questions prepared on the bank's appetite, service model and lending.
                3. The meeting held and notes saved.
                4. Follow-up actions agreed with dates.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first meeting with the relationship manager is held, the profile is shared, notes are saved and follow-ups have dates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book the first meeting with your assigned relationship manager"
                - "Write a one-page business profile with recent trading and plans"
                - "Prepare three questions on appetite, service and lending"
                - "Send a short note of the agreed follow-ups after the meeting"
            - name: Relationship manager handover brief
              description: |-
                ## Purpose
                Relationship managers move on every couple of years, and the replacement starts with a file that may not reflect the business today. Sending the new manager a short brief with history, products held, open requests and plans, and meeting them within the first month, keeps hard-won goodwill and open requests from disappearing in the handover.

                ## Milestones
                1. Open requests and agreed exceptions confirmed in writing by the departing manager.
                2. A one-page brief sent to the new manager.
                3. An introductory call held within a month of the change.
                4. The contacts sheet and person record updated.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within a month of a manager change, the new manager has the written brief, an introductory call is held and the contacts sheet is updated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the departing manager to confirm open requests and exceptions in writing"
                - "Write a one-page brief on the business for the new manager"
                - "Book an introductory call within the first month"
                - "Update the contacts sheet with the new manager's details"
            - name: Account freeze response plan
              description: |-
                ## Purpose
                A blocked account can stop payroll, supplier runs and card payouts within hours, and the businesses that recover fastest wrote their plan before it happened. One page covering who calls the bank, what information to have ready, how to pay staff from the backup account and what to tell customers and suppliers turns a crisis into a few difficult days.

                ## Milestones
                1. A one-page plan naming who contacts the bank and who speaks to staff and suppliers.
                2. The information banks usually ask for during a review listed and kept ready.
                3. Steps to run payroll from the backup account written and rehearsed once.
                4. Complaint and escalation routes, including the external dispute body, written into the plan.

                ## Notes
                Do not shuffle money between providers or open new accounts to get around a restriction without advice; it can lengthen the bank's review.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written freeze response plan exists with named roles, ready information and a rehearsed payroll route through the backup account."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name who calls the bank and who speaks to staff if an account is frozen"
                - "List the documents the bank is likely to ask for during a review"
                - "Write the steps to run payroll from the backup account"
                - "Rehearse the plan once with the person who covers finance"
            - name: Updating the bank after a change of directors or owners
              description: |-
                ## Purpose
                Adding a director, losing a co-founder or selling shares changes who the bank must identify and who can sign, and banks often restrict accounts when the public company register and their own records disagree. Treating the bank update as part of the change itself, with documents ready on the day, avoids a stalled mandate at exactly the moment the business is in transition.

                ## Milestones
                1. The bank's requirements for director and ownership changes confirmed in advance.
                2. Identity documents gathered from each incoming director or owner.
                3. Mandate and online banking users updated to match the change.
                4. The bank's written confirmation saved and the document pack updated.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within a month of the change, the bank's records, mandate and users match the company register, with written confirmation saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the bank what it needs when directors or owners change"
                - "Collect identity documents from each incoming director or owner"
                - "Remove departing directors from the mandate and online banking"
                - "Save the bank's confirmation and update the document pack"
            - name: Telling the bank about a difficult year early
              description: |-
                ## Purpose
                Lenders and relationship managers respond far better to an early, honest call about a weak year than to a surprise overdraft excess or a late set of accounts. Preparing a short explanation of what happened, what is being done and what support might help, and sharing it before the bank finds out another way, protects the relationship when it matters most.

                ## Milestones
                1. A one-page note on what went wrong, the numbers and the recovery plan.
                2. The note checked by your accountant or adviser.
                3. A meeting with the relationship manager held before the accounts are filed.
                4. Any support discussed and the bank's response recorded.

                ## Notes
                If existing borrowing is at risk of breaching its terms, involve your adviser; covenant and refinancing work belongs with loan servicing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The bank has received a written explanation and recovery plan and met the business before the weak results are filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page note on the year, the numbers and the recovery plan"
                - "Ask your accountant to check the note before it goes to the bank"
                - "Book a meeting with the relationship manager ahead of filing"
                - "Record what the bank said and any support it offered"
            - name: Sole trader to limited company bank changeover
              description: |-
                ## Purpose
                When a freelancer incorporates, the company becomes a separate legal person that needs its own account, and carrying on through the sole trader account blurs whose income is whose for tax. Agreeing the changeover date, opening the company account early and telling clients exactly when to switch keeps the last sole trader invoice and the first company invoice cleanly apart.

                ## Milestones
                1. A changeover date agreed with your accountant.
                2. The company account opened before that date.
                3. Clients told the new payee name and details for invoices from the changeover date.
                4. Software subscriptions and direct debits repointed to the company.
                5. The old account kept only for sole trader receipts until they clear.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "From the agreed changeover date every new invoice is paid into the company account, and the sole trader account receives only earlier receipts."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree the incorporation changeover date with your accountant"
                - "Apply for the company account as soon as the company is registered"
                - "Email each client the new payee name and account details"
                - "Repoint software subscriptions and direct debits to the company"
                - "Close or repurpose the old account once earlier receipts have cleared"
            - name: Founder banking after a funding round
              description: |-
                ## Purpose
                Investment money landing in one account can be many times anything the business has held before, and investors usually expect proper approvals, more than one signatory and a view on where balances sit. Setting this up in the weeks around the close, with board sign-off, shows investors that their money is being handled like theirs.

                ## Milestones
                1. Banking, signatory and reporting obligations confirmed from the investment documents.
                2. Mandate and dual approval updated to match the board's approval levels.
                3. Balances above deposit protection limits reviewed with the board and an adviser.
                4. A monthly bank balance summary added to the board or investor update.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within a month of the round closing, the mandate and approvals match the board's levels and the board has reviewed where balances are held."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check the investment documents for banking and reporting obligations"
                - "Update the mandate and approval rules to match board approval levels"
                - "Review balances above protection limits with the board and an adviser"
                - "Add a bank balance summary to the monthly board update"
            - name: Seasonal business pre-peak bank conversation
              description: |-
                ## Purpose
                Retailers, tourism operators, growers and event companies spend heavily on stock and staff before the season pays them back, and a bank asked for help in the middle of the squeeze often says no. Meeting the bank two to three months before peak spending, with last year's cash curve and this year's plan, puts any seasonal limit in place before it is needed.

                ## Milestones
                1. Last year's monthly cash low points and peak takings charted.
                2. This season's stock and staffing plan costed.
                3. A meeting held with the bank at least eight weeks before peak spending.
                4. Any seasonal limit agreed in writing with its end date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "For two consecutive seasons a pre-peak bank meeting is held at least eight weeks ahead, with any seasonal support agreed in writing."
                cadence: cyclic
              tasks:
                - "Chart last year's monthly cash low points and peak takings"
                - "Cost this season's stock and staffing plan"
                - "Book the pre-season bank meeting ten weeks before peak spending @recurring(yearly)"
                - "Confirm any seasonal limit and its end date in writing"
            - name: Finance manager inheriting banking from the founder
              description: |-
                ## Purpose
                Hiring a first finance manager or controller often reveals that banking lives in the founder's head and phone: logins, tokens, the manager's mobile number and a mandate nobody has read in years. A structured handover over the first sixty days moves relationships, access and paperwork into the finance function without cutting the founder off from oversight.

                ## Milestones
                1. Every account, login, token and provider relationship listed with the founder.
                2. Mandates and users changed so the finance manager creates payments and a director approves.
                3. The finance manager introduced to each relationship manager.
                4. The access map, contacts sheet and document pack owned by finance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within sixty days the finance manager holds named access at every bank, has met each relationship manager and owns the banking records."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Sit with the founder and list every account, login and security token"
                - "Request a named user and token for the finance manager at each bank"
                - "Ask the founder to introduce you to each relationship manager"
                - "Move the access map and contacts sheet into the finance folder"
            - name: Receiving payments from overseas customers
              description: |-
                ## Purpose
                Selling abroad for the first time raises practical banking questions: which details to give a foreign customer, why a payment arrived short after intermediary bank deductions, and whether a local-currency receiving account would be cheaper. Sorting out how overseas customers pay before the first invoice avoids weeks of chasing missing amounts and annoyed customers paying unexpected charges.

                ## Milestones
                1. International receiving details, including the bank identifier and international account number where used, confirmed with the bank.
                2. Charges on incoming international payments and intermediary deductions understood.
                3. A decision recorded on whether a currency receiving account is worth opening.
                4. Invoice templates carrying clear payment instructions for overseas customers.

                ## Notes
                Managing exchange rate risk is treasury work; this project is about getting paid smoothly.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Overseas invoices carry tested payment instructions, and a decision on whether to open a currency receiving account is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the bank for its international receiving details and incoming charges"
                - "Ask one overseas customer to send a small test payment"
                - "Compare the bank's charges with a multi-currency receiving account"
                - "Add clear international payment instructions to the invoice template"
            - name: Banking where there are few banks to choose from
              description: |-
                ## Purpose
                Businesses in small markets, including much of the Caribbean and the Pacific, may have three or four banks to choose from, international payments routed through a correspondent bank abroad and heavier paperwork for anything cross-border. Planning for slower wires, keeping more than one local relationship and documenting overseas customers and suppliers early prevents most of the delays these businesses face.

                ## Milestones
                1. Typical timing and charges for incoming and outgoing international payments recorded.
                2. The correspondent route your bank uses for your main currencies confirmed.
                3. An account with a second local bank opened or kept active.
                4. A standard file of supporting documents for cross-border payments prepared.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note of international payment timings and correspondent routes exists, a second local bank account is active and a cross-border document file is ready."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Record how long the last five international payments took and what they cost"
                - "Ask the bank which correspondent banks it uses for your main currencies"
                - "Open or reactivate an account with a second local bank"
                - "Prepare a standard file of invoices and contracts for cross-border payments"
            - name: Banking dependency risk register
              description: |-
                ## Purpose
                As balances, providers and integrations grow, so does the damage any one of them can do: a platform outage on payroll day, a provider leaving your sector, a single person holding the only approval token. A risk register for banking dependencies, scored and reviewed each quarter, puts these in front of the directors with an owner and a mitigation for each.

                ## Milestones
                1. Banking risks listed: outage, provider failure, account exit, balance concentration, key-person access.
                2. Each risk scored for likelihood and impact, with an owner.
                3. A mitigation recorded for every high-scoring risk.
                4. The register reviewed with the directors or finance committee each quarter.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A banking risk register with scored risks, owners and mitigations has been reviewed by the directors in each of the last four quarters."
                cadence: rolling
              tasks:
                - "List the banking risks that would stop payments for more than a day"
                - "Score each risk and name an owner"
                - "Write a mitigation for every high-scoring risk"
                - "Rescore the banking risks and update mitigations @recurring(quarterly)"
            - name: Multi-bank panel and ancillary business allocation
              description: |-
                ## Purpose
                Larger and growing companies with several lenders find that banks expect a share of fee-earning business, such as payments, cards, foreign exchange or guarantees, in return for committing credit. Mapping what each bank lends and what it earns from you, then allocating that business deliberately, keeps the panel engaged and gives a fair basis for awkward conversations.

                ## Milestones
                1. Each bank's committed credit and annual income from the business estimated.
                2. A target share of ancillary business set for each bank relative to its lending.
                3. Allocation changes agreed by the finance lead and directors.
                4. The allocation reviewed each year alongside the relationship review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A table compares each bank's committed credit with its annual income from the business, with an agreed allocation reviewed every year."
                cadence: cyclic
              tasks:
                - "Estimate what each bank lends to and earns from the business"
                - "Set a target ancillary share for each bank relative to its lending"
                - "Agree allocation changes with the directors"
                - "Re-estimate each bank's income and committed credit @recurring(yearly)"
            - name: Bank guarantees and letters of credit for contracts
              description: |-
                ## Purpose
                Construction, public sector and export contracts often require a performance bond, advance payment guarantee or letter of credit from the bank, which uses up credit lines and carries fees until released. Knowing the bank's process, lead times and wording rules before you bid, and tracking every live instrument to its expiry, stops guarantees being paid for long after the contract ended.

                ## Milestones
                1. The bank's process, lead time and fees for guarantees and letters of credit confirmed.
                2. Standard wording the bank will accept agreed before bidding.
                3. A register of live instruments with amounts, beneficiaries and expiry dates.
                4. Each expired or completed instrument formally released and its fees stopped.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register lists every live bank guarantee and letter of credit with its expiry, and none is left open after its contract obligations ended."
                cadence: rolling
              tasks:
                - "Ask the bank for its guarantee process, lead times and fees"
                - "Agree acceptable guarantee wording with the bank before the next bid"
                - "Build a register of live guarantees with beneficiary and expiry"
                - "Check the guarantee register for expiries and releases due @recurring(monthly:28)"
            - name: Banking request for proposal
              description: |-
                ## Purpose
                Once a business has several entities, payroll in more than one country or significant borrowing, choosing banks by word of mouth stops working. A structured request for proposal, with written requirements, a scoring model fixed in advance and presentations from shortlisted banks, gives finance leadership and the board a transparent choice and usually better pricing.

                ## Milestones
                1. Requirements written covering accounts, payments, cards, connectivity, credit and service.
                2. Four to six banks invited with a fixed timetable.
                3. Responses scored on a model agreed before they arrived.
                4. Two shortlisted banks presented to the finance team.
                5. A recommendation approved by the board with an implementation timetable.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board-approved banking recommendation rests on scored responses from at least four banks, against requirements written before invitations went out."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the banking requirements document with the finance team"
                - "Agree the scoring model before any invitation goes out"
                - "Invite four to six banks with a fixed response date"
                - "Ask the agent to compare the responses against the scoring model"
                - "Present the recommendation to the board for approval"
            - name: Direct bank connectivity for a larger finance team
              description: |-
                ## Purpose
                Finance teams handling hundreds of payments a week across several banks outgrow web portals and manual file uploads. Direct connections through a bank's API, a host-to-host link or a multi-bank network send payments and collect statements automatically, but they need security review, testing and clear ownership, so scoping one with IT and the bank first avoids a half-built integration nobody maintains.

                ## Milestones
                1. Current manual banking tasks and their weekly hours recorded.
                2. The bank's connection options compared with IT on security, cost and support.
                3. A pilot for one account and payment type tested end to end.
                4. Owners assigned for monitoring, certificate renewals and failed transfers.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tested pilot of direct bank connectivity for one account has IT security sign-off and named owners for monitoring and failures."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Record the weekly hours spent on manual uploads and statement downloads"
                - "Ask the bank which direct connection options it supports"
                - "Review the security and certificate requirements with IT"
                - "Pilot one account and payment type end to end"
                - "Name owners for monitoring, certificate renewals and failed transfers"
---

# Business Banking Relationships

This area is for owners, founders and finance managers who want their banks and payment providers working for the business rather than slowing it down. It starts with the foundations (a needs map, the right main account, a clean document pack, the mandate and online banking roles), then the routines that keep fees, access and the relationship in good order, the knowledge that makes tariffs, payment rails and credit decisions readable, the decisions about providers, facilities and switching, the events that test the relationship, the situations freelancers, founders and new finance managers face, and finally multi-bank, guarantee and connectivity work for larger teams.

What repeats is a Monday alerts check, a monthly look at banking costs, card processing rates and bank notices, quarterly manager calls and access reviews, and a yearly cycle of relationship review, information refresh and results conversation. The Purchase decision, Person, Meeting notes, Vendor, Operational checklist and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
