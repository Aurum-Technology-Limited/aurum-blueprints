---
id: finance-accounting.customer-credit-risk-assessment
name: Customer Credit Risk Assessment
description: "Every credit customer vetted before the first order, with a written policy and appetite, limits set by method, holds and alerts that catch trouble early, and reviews that keep exposure inside what the business can absorb."
category: business
version: 1.0.0
tags: [finance-accounting, customer-credit-risk-assessment, small-business, manager, team, credit-limits, trade-credit, credit-checks]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - risk-register
    - meeting-notes
    - vendor
    - purchase-decision
    - onboarding-plan
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Customer Credit Risk Assessment
          description: "Vetting new customers, setting credit limits and terms, and monitoring credit exposure so the business does not sell to customers who cannot pay."
          projects:
            - name: Customer credit exposure baseline
              description: |-
                ## Purpose
                Before setting any rule, you need to know who already owes you money and how much. A single sheet of every customer on credit, with balance, current limit, terms and the oldest unpaid invoice, usually shows two or three accounts carrying far more risk than anyone realised, and gives the rest of this area its starting point.

                ## Milestones
                1. Every customer with an open balance or credit terms listed with balance, limit, terms and oldest unpaid invoice date.
                2. Accounts with no recorded credit limit or no agreed terms flagged.
                3. The ten largest exposures ranked, with their share of total debtors.
                4. Any customer owing more than its limit, or more than a set share of debtors, marked for review.

                ## Notes
                Pull every figure from the aged debtors report on one date and do not mix dates. A baseline is only useful if it is a true snapshot.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated exposure sheet lists every credit customer with balance, limit and terms, and names the ten largest exposures and their share of total debtors."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export the aged debtors report and customer list from the accounting system"
                - "Add each customer's credit limit and payment terms beside its balance"
                - "Rank the ten largest balances and work out their share of total debtors"
                - "Flag customers with no limit, no terms or a balance above the limit"
            - name: Written customer credit policy
              description: |-
                ## Purpose
                Without a written policy, credit decisions depend on who answers the phone and how badly the salesperson wants the order. A short policy of three or four pages setting out who gets credit, what checks are run, how limits are set, who approves them and what happens when an account goes over gives sales, finance and the owner the same rules to work from.

                ## Milestones
                1. A policy covering eligibility, checks, limit setting, approval levels, terms and account holds.
                2. The policy agreed by the owner or finance lead and the head of sales.
                3. Exceptions and how to request them described in one paragraph.
                4. The policy shared with everyone who opens accounts or takes orders.

                ## Notes
                Keep it short enough to read in ten minutes. A long policy nobody reads protects nothing; the detail belongs in the procedures that sit under it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed credit policy of no more than four pages, covering checks, limits, approvals, terms and holds, has been shared with sales and finance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down how credit decisions are made today, including the unofficial habits"
                - "Draft the policy sections for checks, limits, approvals, terms and holds"
                - "Review the draft with the head of sales and agree the exceptions route"
                - "Share the signed policy with everyone who opens accounts or takes orders"
            - name: Credit risk appetite and exposure caps
              description: |-
                ## Purpose
                How much bad debt can the business absorb in a year without missing payroll or breaching a bank covenant? Answering that in numbers, with a maximum annual bad debt figure, a cap on any single customer's exposure and a limit on how much of the debtor book sits with the top five, turns credit from a series of gut calls into decisions measured against an agreed line.

                ## Milestones
                1. A maximum tolerable annual bad debt figure agreed with the owner or board.
                2. A cap on exposure to any single customer set as an amount or a share of debtors.
                3. A concentration limit set for the five largest customers combined.
                4. The appetite figures written into the credit policy.

                ## Notes
                Work the appetite back from profit. At a ten per cent net margin, a lost invoice of 10,000 needs 100,000 of new sales to replace it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written appetite figures for annual bad debt, single customer exposure and top five concentration are approved and included in the credit policy."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up bad debt write-offs for the last three years in the ledger"
                - "Work out how much new sales a typical write-off takes to replace"
                - "Propose a single customer cap and a top five concentration limit"
                - "Get the owner or board to approve the appetite figures"
            - name: Credit application form for new accounts
              description: |-
                ## Purpose
                A good application form collects everything needed to decide in one pass: legal name and registration number, trading address, directors or owners, bank details, trade references, expected monthly spend and signed consent to run credit checks. Collecting it up front saves days of chasing and gives you signed agreement to your terms before the first delivery.

                ## Milestones
                1. A one or two page form capturing legal entity, registration number, owners, references, expected spend and consent to checks.
                2. A signature block accepting your terms of sale.
                3. The consent and data use wording checked against local data protection rules.
                4. The form live on the website or sent automatically when a new customer asks for an account.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A credit application form with consent to checks and acceptance of terms is in use for every new credit account."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect two or three credit application forms from suppliers you buy from"
                - "Draft your form with entity, owner, reference, spend and consent fields"
                - "Ask your adviser to check the consent and data use wording"
                - "Publish the form where sales staff and new customers can find it"
            - name: Standard payment terms by customer risk band
              description: |-
                ## Purpose
                Offering everyone thirty days, or whatever each customer asks for, gives the riskiest customers the same rope as the safest. Setting three or four risk bands, each with standard terms such as payment in advance, fourteen days or thirty days, makes the terms follow the assessment and gives sales a clear answer when a customer pushes for more.

                ## Milestones
                1. Three or four risk bands defined with the evidence that places a customer in each.
                2. Standard terms and a maximum starting limit set for each band.
                3. Existing customers mapped to a band, with mismatches between band and current terms listed.
                4. A plan agreed for moving mismatched customers onto the right terms at their next review.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every credit customer sits in a defined risk band with standard terms, and mismatches have a dated plan to correct them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Define three or four risk bands and what places a customer in each"
                - "Set standard terms and a starting limit for each band"
                - "Map existing customers to bands using the exposure baseline"
                - "List customers whose current terms are looser than their band allows"
            - name: Credit clauses in your terms of sale
              description: |-
                ## Purpose
                Your terms and conditions decide what you can do when a customer pays late or fails: charge interest, suspend supply, reclaim unpaid goods or recover collection costs. Having a lawyer review the credit clauses once, including any retention of title clause, means the protections exist before you need them, not after.

                ## Milestones
                1. Current terms of sale gathered, with every version still in circulation.
                2. Late payment interest, suspension of supply, retention of title and cost recovery clauses reviewed by a lawyer.
                3. A revised version adopted and dated.
                4. Terms accepted in writing by new customers and sent to existing ones.

                ## Notes
                Terms printed only on the back of an invoice may not bind a customer who never agreed to them. Ask your lawyer how acceptance should be captured where you trade.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A lawyer-reviewed set of terms of sale with dated credit clauses is in use and accepted in writing by new customers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather every version of your terms of sale still in use"
                - "List the credit protections you want the terms to give you"
                - "Book a review of the credit clauses with a commercial lawyer"
                - "Send the revised terms to existing credit customers"
            - name: Credit limits loaded into the sales system
              description: |-
                ## Purpose
                A credit limit that lives in a spreadsheet does nothing when an order is entered at four o'clock on a Friday. Recording each customer's limit and terms in the accounting or order system, and switching on the warning or block when an order would take an account over, puts the policy where orders actually happen.

                ## Milestones
                1. Every active credit customer has a limit and terms recorded in the system.
                2. Over-limit warnings or blocks switched on for order entry and invoicing.
                3. A test order above a limit confirmed to trigger the warning.
                4. Staff who enter orders shown what the warning means and who to call.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active credit customer has a limit in the system, and a test order above a limit triggers the warning or block."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check whether your accounting or order system can warn or block over-limit orders"
                - "Enter the limit and terms for every active credit customer"
                - "Place a test order above a limit and confirm the warning appears"
                - "Check that new accounts opened this month have a limit set @recurring(monthly:25)"
            - name: Credit limit approval levels
              description: |-
                ## Purpose
                Small limits should be quick to grant and large ones should have a second pair of eyes. A simple table, for example credit controller up to one amount, finance lead up to a higher one and owner or credit committee above that, keeps the queue moving while making sure no single person can approve the exposure that sinks the business.

                ## Milestones
                1. Approval tiers set by limit size, with a named role at each tier.
                2. Rules for temporary increases and one-off orders above limit included.
                3. The tiers written into the credit policy.
                4. Approvals recorded in the customer credit file with name and date.

                ## Notes
                This covers credit limits only. Wider spending and contract authority belongs in the business's delegation of authority.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A tiered approval table for credit limits names who approves each level, and the last ten limit decisions show the right approver on file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List who has approved credit limits over the last six months"
                - "Propose three approval tiers with a named role for each"
                - "Add rules for temporary increases and one-off orders"
                - "Check the last ten limit decisions against the new tiers"
            - name: Customer credit file for every account
              description: |-
                ## Purpose
                When a customer fails, or an auditor asks why a limit was granted, the answer needs to be in one place. A standard file per account holding the application, checks, references, financial statements, limit history and approvals makes every decision traceable and every review faster.

                ## Milestones
                1. A standard folder or record structure agreed for each credit customer.
                2. Files created for the twenty largest accounts first.
                3. Each limit change recorded with date, amount, reason and approver.
                4. A retention period set for files of closed accounts, in line with data protection rules.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Standard credit files exist for at least the twenty largest accounts, each holding the application, checks and a dated limit history."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the sections every customer credit file must contain"
                - "Create files for your twenty largest credit customers first"
                - "Record the current limit, date and approver in each file"
                - "Set how long files for closed accounts are kept"
            - name: Credit information sources for your markets
              description: |-
                ## Purpose
                Credit data varies a lot by country: some have detailed company filings and commercial credit agencies, others offer little beyond bank references and word of mouth. Mapping what is available where your customers are, and choosing a provider if one fits your volume, decides what checks the policy can realistically ask for.

                ## Milestones
                1. Public sources listed for each market: company registry, court judgments and insolvency notices.
                2. Two or three commercial credit agencies compared on coverage, alerts and price.
                3. A provider chosen, or a decision recorded that public sources are enough for now.
                4. The chosen sources written into the vetting procedure.

                ## Notes
                Start from the **Vendor** template to record the agency's contract, renewal date and account contact once you have chosen.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of the credit sources used for each market, with a recorded choice of provider or a reasoned decision to use public sources only."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the countries where your credit customers are based"
                - "Find the company registry and court judgment sources for each country"
                - "Compare two or three credit agencies on coverage, alerts and price"
                - "Record the provider decision and the sources the vetting procedure will use"
            - name: Weekly new account vetting queue
              description: |-
                ## Purpose
                New accounts stall when applications sit in an inbox waiting for someone to have time. Working the queue on a fixed day, with each application taken through identity, credit report, references and a limit proposal, keeps turnaround under a week and stops sales opening accounts informally while they wait.

                ## Milestones
                1. One place where every pending credit application lands.
                2. A standard vetting checklist followed for each application.
                3. A target turnaround agreed with sales, such as three working days.
                4. Turnaround recorded for each application for two months.

                ## Notes
                Start from the **Operational checklist** template for the vetting steps.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks every credit application has been decided within the agreed turnaround, with the checklist completed on file."
                cadence: rolling
              tasks:
                - "Set up a single inbox or folder for pending credit applications"
                - "Write the vetting checklist: identity, report, references, limit proposal"
                - "Agree a turnaround target for applications with the head of sales"
                - "Work through the pending credit applications queue @recurring(weekly:tue)"
            - name: Over-limit and overdue order hold routine
              description: |-
                ## Purpose
                The cheapest moment to manage a risky account is before the next delivery leaves. A daily look at orders held because the account is over its limit or past terms, with each one released, part-shipped, switched to payment in advance or escalated, stops exposure growing on customers already in trouble.

                ## Milestones
                1. Clear rules for when an order goes on hold: over limit, or invoices past a set number of days overdue.
                2. A named person who reviews held orders every working day, with cover for absence.
                3. Each release or refusal recorded with the reason.
                4. Sales told the outcome the same day.

                ## Notes
                Holding orders is a credit decision, not a collections tactic. Chasing the overdue invoices themselves sits with the collections routine.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Held orders are reviewed every working day for a month, each with a recorded release, refusal or escalation and its reason."
                cadence: rolling
              tasks:
                - "Write the rules that put an order on credit hold"
                - "Name the person who reviews held orders and their cover"
                - "Review orders on credit hold and release, refuse or escalate each one @recurring(daily)"
                - "Tell the salesperson the outcome and reason for each held order"
            - name: Weekly exposure check against credit limits
              description: |-
                ## Purpose
                Limits drift out of date as customers grow, and accounts creep over them through orders nobody flagged. A weekly report of every account over or close to its limit, reviewed in fifteen minutes, catches the creep while the amounts are still small.

                ## Milestones
                1. A saved report showing accounts above ninety per cent of their limit.
                2. A decision recorded for each over-limit account: increase, hold or reduce.
                3. Over-limit accounts counted each week to show the trend.
                4. No account over its limit for more than two weeks without an approved decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly over-limit reports reviewed in a row, with every account above its limit carrying a recorded decision."
                cadence: rolling
              tasks:
                - "Build a saved report of accounts above ninety per cent of their limit"
                - "Review accounts over or near their limit and record a decision for each @recurring(weekly:mon)"
                - "Keep a weekly tally of how many accounts are over limit"
                - "Escalate any account that stays over limit for two weeks running"
            - name: Annual credit limit review for active accounts
              description: |-
                ## Purpose
                Day-one limits are rarely right two years later: some customers have tripled their orders, others have shrunk or changed owners. Reviewing every active account at least once a year, and the largest each quarter, keeps limits matched to current risk and current trade.

                ## Milestones
                1. A review calendar spreading accounts across the year so no month is overloaded.
                2. The twenty largest exposures reviewed every quarter.
                3. Each review recording a fresh check, the recent payment record and a confirmed, raised or lowered limit.
                4. Dormant accounts with no orders in twelve months closed or set to zero.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active credit account has a review dated within the last twelve months, and the twenty largest within the last quarter."
                cadence: cyclic
              tasks:
                - "Spread active accounts across a twelve-month review calendar"
                - "Review the twenty largest exposures and confirm or change each limit @recurring(quarterly)"
                - "Close or zero the limits of accounts with no orders in a year @recurring(yearly)"
                - "Record each review outcome in the customer credit file"
            - name: Monthly credit risk report for management
              description: |-
                ## Purpose
                Owners and managers usually see total debtors and little else, so concentration and deterioration go unnoticed until a failure. A one-page monthly report with total exposure, the top ten accounts, over-limit and held accounts, watch list changes and new limits granted gives leadership a view of risk, not just of balances.

                ## Milestones
                1. A one-page layout agreed with the owner or finance lead.
                2. The report produced by the eighth of each month.
                3. Trends shown for the over-limit count and top ten concentration.
                4. Three consecutive months of reports issued and discussed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly credit risk reports issued on time, each showing top ten exposures, over-limit accounts and watch list changes."
                cadence: rolling
              tasks:
                - "Agree the one-page report layout with the owner or finance lead"
                - "Ask the agent to draft the commentary from the month's exposure figures"
                - "Produce and send the monthly credit risk report @recurring(monthly:8)"
                - "Note any action leadership asked for and who owns it"
            - name: Customer watch list for warning signs
              description: |-
                ## Purpose
                Customers rarely fail without signals: slower payments, part payments, missed filings, a new lender taking security, key staff leaving, or a sudden rush of large orders. Keeping a short watch list of accounts showing two or more signals, with a planned response for each, means you cut exposure while there is still time.

                ## Milestones
                1. Agreed warning signals that put an account on the watch list.
                2. A watch list showing the signals seen, current exposure and planned response for each account.
                3. A monthly review that adds, removes or escalates accounts.
                4. Exposure to watch list accounts reported in the monthly credit risk report.

                ## Notes
                Start from the **Risk register** template to hold the watch list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A watch list reviewed monthly for six months, each account showing its signals, exposure and the response taken."
                cadence: rolling
              tasks:
                - "Write the list of signals that put a customer on the watch list"
                - "Set up the watch list from the risk register template"
                - "Review the watch list and add, remove or escalate accounts @recurring(monthly:15)"
                - "Agree a response for each listed account: lower limit, deposits or shorter terms"
            - name: Credit alert monitoring on key accounts
              description: |-
                ## Purpose
                Most credit agencies, and some company registries, can alert you when a customer files late, receives a court judgment, changes directors, registers a new charge or has its score cut. Setting alerts on your larger accounts and reading them weekly gives you news days or weeks before it shows up in payment behaviour.

                ## Milestones
                1. Alerts set up for every account above an agreed exposure level.
                2. A weekly slot to read and act on new alerts.
                3. Each alert recorded with the action taken.
                4. New accounts above the threshold added to monitoring when opened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every account above the agreed exposure level is under alert monitoring, with alerts read weekly for two months and actions recorded."
                cadence: rolling
              tasks:
                - "Choose the exposure level above which accounts get alert monitoring"
                - "Switch on alerts for every account above that level"
                - "Read new credit alerts and record the action taken @recurring(weekly:thu)"
                - "Add newly opened large accounts to monitoring"
            - name: Payment behaviour as a credit signal
              description: |-
                ## Purpose
                How a customer pays you is often the best credit data you have, and it costs nothing. Tracking average days beyond terms for each significant account every month, and looking for a steady worsening rather than one late invoice, shows which customers are stretching their suppliers to fund themselves.

                ## Milestones
                1. Average days beyond terms calculated for each account above a set balance.
                2. A month-on-month trend shown for each of them.
                3. A rule set for which worsening trend triggers a limit review.
                4. Three months of trends reviewed and acted on.

                ## Notes
                This uses payment data to judge risk. The chasing itself belongs to the collections routine; agree with whoever runs it that patterns are passed across.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, days beyond terms have been tracked for every significant account and each worsening trend has triggered a recorded limit review."
                cadence: rolling
              tasks:
                - "Choose the balance above which accounts get a payment trend"
                - "Calculate average days beyond terms for each of those accounts"
                - "Update the payment trend and flag accounts slowing for two months @recurring(monthly:20)"
                - "Send flagged accounts for an early limit review"
            - name: Credit committee for large limits
              description: |-
                ## Purpose
                Decisions on the largest accounts carry enough risk that one person should not make them alone, and sales should be heard but not decide. A short monthly committee of finance, sales and the owner or a senior manager, with a written paper for each case, makes big credit calls consistent and documented.

                ## Milestones
                1. Terms of reference covering members, quorum, limit threshold and meeting rhythm.
                2. A one-page case template for each limit request.
                3. Meetings held monthly, or on request for urgent cases.
                4. Every decision minuted with reasons and any conditions.

                ## Notes
                Start from the **Meeting notes** template for the minutes. In a small business the committee may be two people; the written case still matters.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of minuted credit committee decisions exist, each with a written case and stated reasons."
                cadence: rolling
              tasks:
                - "Write the committee's members, threshold and quorum on one page"
                - "Create a one-page case template for limit requests"
                - "Hold the credit committee and minute each decision @recurring(monthly:12)"
                - "File each decision in the customer's credit file"
            - name: Updated financial statements from credit customers
              description: |-
                ## Purpose
                Granting a limit on accounts two years old is granting it blind. Asking larger customers each year for their latest annual accounts, or management accounts where filings are thin, and logging which ones refuse, keeps your view of their health current, and a refusal is itself a useful signal.

                ## Milestones
                1. A list of customers whose limit justifies asking for financial statements.
                2. A standard request letter explaining why you ask and how the figures are kept confidential.
                3. Statements received, or the refusal logged, for each listed customer.
                4. Each set of statements reviewed and the outcome noted in the credit file.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Current financial statements, or a logged refusal, are on file for every customer above the agreed limit threshold."
                cadence: cyclic
              tasks:
                - "List customers whose limit is high enough to justify a request"
                - "Draft a short request letter covering purpose and confidentiality"
                - "Send the yearly request for financial statements to listed customers @recurring(yearly)"
                - "Log each refusal as a signal on the customer's credit file"
            - name: Reading a business credit report
              description: |-
                ## Purpose
                Credit reports pack a lot onto a page: a score, a suggested limit, filed accounts, court judgments, registered charges, directors and payment data from other suppliers. Learning what each section means, and which parts deserve more weight than the headline score, stops you approving on a good number or declining on a misleading one.

                ## Milestones
                1. Each section of a sample report explained in your own notes.
                2. The difference between the agency's score and its suggested limit understood.
                3. Three reports on existing customers read and compared with what you know of them.
                4. A short guide written for colleagues on what to check first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to reading credit reports exists, tested against three reports on customers you already know."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Get a sample report on a customer you already know well"
                - "Note what each section of the report shows and where its data comes from"
                - "Compare three reports with your own experience of those customers"
                - "Write a one-page guide on what to check first"
            - name: Reading customer accounts for credit strength
              description: |-
                ## Purpose
                Financial statements tell you whether a customer can pay its suppliers, if you know where to look. A handful of measures, the current ratio, quick ratio, cash balance, net worth, gearing and the trend in trade creditor days, answer most credit questions without needing to be an analyst.

                ## Milestones
                1. The six or seven measures that matter for credit written down with how to calculate each.
                2. A simple worksheet that calculates them from a balance sheet and profit and loss.
                3. Two customers' accounts worked through and the results discussed with your accountant or finance lead.
                4. A note on red flags such as negative net worth or a qualified audit opinion.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A credit ratio worksheet exists and has been used on two real customers' accounts, with the conclusions checked by an accountant or finance lead."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the credit ratios you will use and how each is calculated"
                - "Build a worksheet that calculates them from a balance sheet"
                - "Work through two customers' latest accounts with the worksheet"
                - "Ask your accountant or finance lead to check your conclusions"
            - name: Taking trade and bank references that mean something
              description: |-
                ## Purpose
                References a customer chooses will always be good, and some turn out to be friends or related companies. Asking specific questions, such as how long they have traded together, the limit given, usual days to pay and any disputes, and checking the referee is a real independent business, makes references worth the time they take.

                ## Milestones
                1. A standard reference request with five specific questions.
                2. A check that each referee is a genuine, unrelated business.
                3. A note on how bank references work in your country and what they can and cannot tell you.
                4. References taken on the next three applications using the new method.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three applications have had references taken with the standard questions, each referee checked as independent."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a reference request with five specific questions"
                - "Add a step to check that each referee is real and unrelated"
                - "Find out how bank references work with banks in your country"
                - "Use the new method on the next three applications"
            - name: The five Cs of credit applied to real applications
              description: |-
                ## Purpose
                Character, capacity, capital, collateral and conditions make up the oldest framework in credit, and still the clearest way to make sure an assessment is more than a score. Writing a short five Cs note on a few real applications trains the habit of looking at the business, not only the report.

                ## Milestones
                1. Each of the five Cs defined with the evidence that informs it.
                2. Five Cs notes written for three recent applications.
                3. The notes compared with the decisions actually made.
                4. A five Cs box added to the vetting checklist for larger applications.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five Cs notes exist for three real applications and a five Cs section is part of the vetting checklist for larger accounts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-line definition and evidence source for each of the five Cs"
                - "Write a five Cs note for three recent applications"
                - "Compare each note with the decision that was made"
                - "Add a five Cs box to the checklist for larger applications"
            - name: Early warning signs of customer distress
              description: |-
                ## Purpose
                Learning to read distress early is the most valuable credit skill there is. Studying how failures in your own sector unfolded, which signals came first and how long before the end, gives the watch list real teeth and helps sales staff know what to report.

                ## Milestones
                1. Three past customer failures, yours or in your sector, traced back over their last year.
                2. The signals that appeared first listed in order.
                3. A one-page signals guide written for sales and credit staff.
                4. The guide presented at a team meeting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A signals guide based on at least three real failures has been written and presented to sales and credit staff."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick three customer failures from your history or your sector"
                - "Trace the payment, filing and behaviour signals in their final year"
                - "Write a one-page signals guide for sales and credit staff"
                - "Present the guide at a sales team meeting"
            - name: Where unsecured suppliers stand in an insolvency
              description: |-
                ## Purpose
                Most trade suppliers are unsecured creditors, which in many insolvencies means recovering a small fraction of what is owed, and late. Understanding the main insolvency procedures where you trade, who ranks ahead of you, and what retention of title or a guarantee changes, shows why prevention is worth paying for.

                ## Milestones
                1. The main insolvency procedures in your country listed with a sentence on each.
                2. The usual ranking of creditors written down from the insolvency regulator's or a reputable adviser's guidance.
                3. The effect of retention of title, guarantees and set-off noted.
                4. Questions noted for an insolvency practitioner or lawyer.

                ## Notes
                This is background for credit decisions, not legal advice. Take advice from an insolvency professional on any real case.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-page note on local insolvency procedures and creditor ranking exists, sourced from official or professional guidance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find your insolvency regulator's guide for creditors"
                - "List the main insolvency procedures and what each means for suppliers"
                - "Write down the usual ranking of creditors"
                - "Note questions to ask an insolvency practitioner"
            - name: Confirming the legal entity you are extending credit to
              description: |-
                ## Purpose
                Checks are worthless if they are run on the wrong company. Trading names, similar names, group companies and sole traders behind a brand mean the business ordering is often not the one you checked, so matching the legal name and registration number on the application, the order and the invoice closes a common gap.

                ## Milestones
                1. The registry search for your main markets learned and bookmarked.
                2. A rule that every credit account carries a legal name and registration number.
                3. The twenty largest accounts checked for a match between registry, ledger and invoices.
                4. Mismatches corrected and any terms re-signed by the right entity.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The twenty largest credit accounts have been matched to a registry entry, with legal name and registration number recorded and mismatches fixed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search the company registry for your three largest customers"
                - "Compare the registry name with the name in your ledger and on invoices"
                - "Add legal name and registration number fields to every credit account"
                - "Fix mismatches and get terms signed by the correct entity"
            - name: Total credit exposure beyond the ledger balance
              description: |-
                ## Purpose
                The debtor balance understates what you stand to lose. Goods delivered but not yet invoiced, work in progress, confirmed orders being made and stock held for the customer all add to exposure, and for project or made-to-order businesses they can double it.

                ## Milestones
                1. The components of total exposure listed for your business.
                2. Total exposure calculated for the ten largest customers.
                3. The gap between ledger balance and total exposure noted for each.
                4. Limit checks changed to use total exposure where the gap is material.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Total exposure, including uninvoiced and committed work, has been calculated for the ten largest customers and used in their limit checks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what adds to exposure beyond invoices in your business"
                - "Calculate total exposure for your ten largest customers"
                - "Compare each total with the ledger balance"
                - "Decide whether limit checks should use total exposure"
            - name: Credit scorecard for new applicants
              description: |-
                ## Purpose
                Scoring every application against the same handful of factors makes decisions faster, more consistent and easier to defend. A simple points-based scorecard, built from agency score, years trading, financial strength, references and order size, maps each applicant to a risk band and a starting limit.

                ## Milestones
                1. Five to eight factors chosen, with points for each range.
                2. Score ranges mapped to the risk bands and standard terms.
                3. The scorecard tested on twenty past applications, including some that went bad.
                4. The scorecard adopted in the vetting checklist with a route for overrides.

                ## Notes
                Record every override and its reason. Overrides are where the scorecard learns.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scorecard tested on twenty past applications is in use, mapping each new applicant to a risk band, with overrides recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose five to eight factors and set points for each range"
                - "Map score ranges to your risk bands and standard terms"
                - "Test the scorecard on twenty past applications, including failed ones"
                - "Add the scorecard and an override log to the vetting checklist"
            - name: Credit limit setting method
              description: |-
                ## Purpose
                Limits are often set by picking a round number. A stated method, such as expected monthly purchases times the terms plus a margin, capped by a share of the customer's net worth and by the agency's suggestion, gives limits that fit real trade and can be explained to sales and to auditors.

                ## Milestones
                1. A written formula for the starting limit.
                2. Caps set from financial strength, the agency suggestion and your single customer cap.
                3. The method applied to ten existing accounts and the differences reviewed.
                4. The method written into the credit policy.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written limit setting method, tested on ten existing accounts, is part of the credit policy."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a formula linking the limit to expected purchases and terms"
                - "Add caps based on net worth, agency suggestion and your single customer cap"
                - "Apply the method to ten existing accounts and review the differences"
                - "Add the limit method to the credit policy"
            - name: Deposits and payment in advance policy
              description: |-
                ## Purpose
                Some customers should not get open credit at all, at least not yet: new businesses, poor reports, one-off large orders, or custom goods that cannot be resold. Deciding when you require a deposit, staged payments or full payment in advance, and how a customer earns credit later, lets you say yes to the sale without carrying the risk.

                ## Milestones
                1. Situations that require a deposit or payment in advance listed.
                2. Standard deposit levels agreed for each situation.
                3. A route for customers to move onto credit after a clean trading record.
                4. The rules added to the credit policy and the quotation template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written rules for deposits and payment in advance, including how customers graduate to credit, are in the credit policy and quotes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the situations where open credit is too risky"
                - "Agree a standard deposit level for each situation"
                - "Set how many months of clean trading earns a credit account"
                - "Add the deposit rules to quotation and order templates"
            - name: Trade credit insurance decision
              description: |-
                ## Purpose
                Trade credit insurance pays out a large share of an insured debt if a customer fails, and insurers' limits double as a second opinion on your customers. Whether it is worth the premium depends on your concentration, margins and appetite, so comparing whole turnover cover with cover on key accounts only, through a broker, gives a clear yes or no.

                ## Milestones
                1. Your debtor book summarised for a broker: turnover, customer count, largest exposures and bad debt history.
                2. Quotes or indications from at least two insurers or through a broker.
                3. Cover, exclusions, claim rules and administrative duties compared.
                4. A decision recorded, with the renewal date if you buy.

                ## Notes
                Start from the **Purchase decision** template. Read the policy's duties carefully: missed reporting deadlines are a common reason claims fail.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on trade credit insurance is recorded, backed by at least two quotes or indications compared on cover, exclusions and duties."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise turnover, top exposures and bad debt history for a broker"
                - "Ask a broker for indications on whole turnover and key account cover"
                - "Compare cover, exclusions, claim rules and reporting duties"
                - "Review the credit insurance policy and premium before renewal @recurring(yearly)"
            - name: When to ask for a personal guarantee
              description: |-
                ## Purpose
                For small limited companies, a director's personal guarantee can be the only real security a supplier has, yet many suppliers ask at the wrong time or on a document that fails. Deciding when a guarantee is required, having the wording drafted by a lawyer and knowing how to handle refusals makes it a usable tool.

                ## Milestones
                1. Situations that trigger a guarantee request listed.
                2. A guarantee document drafted or approved by a lawyer.
                3. A process for signing, witnessing and filing the guarantee.
                4. Alternatives offered when a director refuses, such as a deposit or a lower limit.

                ## Notes
                Guarantee wording and how it must be signed differ by country. Do not use a template from the internet without legal review.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Rules for requiring a personal guarantee and a lawyer-approved guarantee form are in the credit policy."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List when a personal guarantee will be required"
                - "Ask a lawyer to draft or approve the guarantee document"
                - "Write the signing, witnessing and filing steps"
                - "Agree the alternatives to offer when a director refuses"
            - name: Fast track approval for small low-risk accounts
              description: |-
                ## Purpose
                Running full checks on a customer who will spend a few hundred a quarter costs more than the risk it removes. A fast track, with a basic identity and registry check and an automatic small limit, frees time for the large accounts that matter and gets small customers trading the same day.

                ## Milestones
                1. A spend threshold below which the fast track applies.
                2. A minimum set of checks for fast track accounts.
                3. Fast track limits set to grow only after a clean payment record.
                4. Time saved and bad debts on fast track accounts reviewed after six months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fast track for small accounts is in use, and a six-month review records its time saved and bad debts."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose the expected spend below which accounts are fast tracked"
                - "Write the minimum checks for fast track accounts"
                - "Set the starting limit and when it may grow"
                - "Review fast track bad debts and time saved after six months"
            - name: Lessons from past bad debts
              description: |-
                ## Purpose
                Every written-off invoice is a test the credit process failed, and most businesses never look back at them. Reviewing the last two or three years of write-offs, what was known at approval, what signals appeared and when, shows which parts of the process need tightening.

                ## Milestones
                1. Write-offs over the last three years listed with amount and customer.
                2. For each, the approval decision and the warning signs reconstructed.
                3. Common causes grouped, such as no checks, ignored signals or limits never reviewed.
                4. Three changes to policy or routine agreed and made.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A review of three years of write-offs exists, with common causes grouped and three process changes made."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List write-offs from the last three years with amount and customer"
                - "Reconstruct what was known at approval for each one"
                - "Group the causes and pick three process changes"
                - "Review the year's new write-offs for credit lessons @recurring(yearly)"
            - name: Credit approval for a major new customer
              description: |-
                ## Purpose
                Landing a large new customer can be the best thing that happens to a business and the most dangerous, because one account may soon represent a fifth of your debtors. Running a fuller assessment before the first big order, with financials, references, a visit or call and agreed security, sets the relationship on terms you can live with.

                ## Milestones
                1. Full financial statements, credit report and references reviewed.
                2. Total expected exposure modelled for the first six months.
                3. Limit, terms and any security agreed and approved at the right level.
                4. Concentration impact checked against your appetite cap.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A documented assessment for the major customer, with modelled exposure, approved limit and terms, is on file before the first large order ships."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request the customer's latest accounts and two trade references"
                - "Model total exposure for the first six months of expected orders"
                - "Check the exposure against your single customer cap"
                - "Get the limit, terms and any security approved at the right level"
            - name: Credit check before a large seasonal order
              description: |-
                ## Purpose
                Seasonal businesses place their biggest orders when their own cash is lowest, before the season pays out. Checking the customer's position before accepting a peak order, and agreeing a temporary limit, staged deliveries or a deposit, avoids carrying the whole season's risk on one account.

                ## Milestones
                1. Customers with large seasonal orders identified from last year's pattern.
                2. A fresh check run on each before the order is confirmed.
                3. Temporary limits with an expiry date, or staged deliveries, agreed.
                4. Last season's payment record reviewed alongside.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Every large seasonal order this year was accepted after a fresh check, with a temporary limit or staging that has a written expiry."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Identify customers whose orders peak each season"
                - "Run a fresh credit check before confirming each peak order"
                - "Agree a temporary limit with an expiry date or staged deliveries"
                - "Return temporary limits to normal when the season ends"
            - name: Responding to a customer insolvency notice
              description: |-
                ## Purpose
                When a customer enters an insolvency process, the first forty-eight hours decide how much you get back. Having a ready plan to stop supply, establish total exposure, identify goods covered by retention of title, notify your insurer within its deadline and lodge a claim avoids losing rights through delay.

                ## Milestones
                1. A one-page response plan with steps, owners and deadlines.
                2. A contact list including your lawyer, insurer or broker and how to reach the insolvency practitioner.
                3. A method to identify your unpaid goods still on the customer's premises.
                4. The plan rehearsed once on a past or imagined case.

                ## Notes
                Do not remove goods from a customer's premises without legal advice. Follow the insolvency practitioner's process and your lawyer's guidance.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A tested insolvency response plan with owners, deadlines and contacts is filed and known to the credit and sales leads."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the first forty-eight hour steps with an owner for each"
                - "Note your credit insurer's notification deadline if you have cover"
                - "List your lawyer and broker contacts in the plan"
                - "Walk through the plan once using a past or imagined failure"
            - name: Handling a request for longer payment terms
              description: |-
                ## Purpose
                Customers ask for longer terms for two reasons: they have grown and have the buying power, or they are short of cash. Treating each request as a credit event, with a fresh check, a look at their payment trend and the cost to you of carrying the extra days, keeps a commercial favour from becoming a quiet loan to a weak customer.

                ## Milestones
                1. The reason for the request asked and recorded.
                2. A fresh credit check and payment trend reviewed.
                3. The cost of the longer terms to your own cash calculated.
                4. A decision recorded: agree, agree with conditions or decline, with an approver.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Each request for longer terms this year has a recorded reason, fresh check, cost calculation and approved decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the customer why they want longer terms and note the answer"
                - "Run a fresh credit check and review their payment trend"
                - "Calculate what the extra days cost in cash and finance charges"
                - "Record the decision and approver in the credit file"
            - name: Credit insurer cuts cover on a customer
              description: |-
                ## Purpose
                Insurers reduce or withdraw limits when their data shows a customer weakening, often with little notice. Treating the notice as an urgent signal, reviewing exposure, deciding whether to trade uninsured and talking to the customer, turns an insurer's alert into time to act rather than a gap in cover nobody noticed.

                ## Milestones
                1. Current exposure on the customer compared with the new insured limit.
                2. A decision made on trading above the insured limit, at what level and who approved it.
                3. The customer told of any change to terms.
                4. The insurer's reasons, where given, recorded in the credit file.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The cover reduction is logged with exposure compared, a recorded decision on uninsured trading and the customer informed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare current exposure with the reduced insured limit"
                - "Ask the broker or insurer for the reason behind the cut"
                - "Decide and approve how much uninsured exposure to accept"
                - "Tell the customer about any change to terms or deposits"
            - name: Yearly credit policy and appetite review
              description: |-
                ## Purpose
                Policies age as the business grows, adds markets or changes its bank facilities. A yearly review of the policy and appetite figures against the year's losses, over-limit trends and audit comments keeps the rules matched to the business you are now.

                ## Milestones
                1. The year's bad debts, over-limit trend and approval exceptions summarised.
                2. Appetite figures checked against current profit and bank covenants.
                3. Policy changes agreed with sales and approved by the owner or board.
                4. The updated policy reissued with a version date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The credit policy and appetite figures have been reviewed and reissued with a version date within the last twelve months."
                cadence: cyclic
              tasks:
                - "Summarise the year's bad debts, over-limit trend and exceptions"
                - "Check appetite figures against current profit and bank covenants"
                - "Hold the yearly credit policy review with sales and the owner @recurring(yearly)"
                - "Reissue the policy with a new version date"
            - name: First credit accounts after trading cash only
              description: |-
                ## Purpose
                Businesses moving from cash or card payment to invoicing on terms often do it because one customer asked, and then the rest follow without checks. Setting the basics before the first credit account is opened, a simple application, one credit check, a modest limit and clear terms, avoids building a debtor book you cannot see.

                ## Milestones
                1. A decision made on which customers may have credit at all.
                2. A simple application and one check source chosen.
                3. A starting limit and terms agreed for the first accounts.
                4. The first three accounts opened using the process.

                ## Notes
                Keep it small: a one-page policy and a spreadsheet are enough until you have more than about twenty credit customers.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The first three credit accounts were opened with an application, a check and a recorded limit and terms."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Decide which customer types may buy on credit"
                - "Choose one credit check source you can afford"
                - "Set a modest starting limit and standard terms"
                - "Open the first three credit accounts through the new process"
            - name: Credit checks on sole traders and small partnerships
              description: |-
                ## Purpose
                Sole traders and partnerships have no filed accounts and their owners are personally liable, so checks rely on personal credit data, which usually needs the individual's consent and careful data handling. Setting a separate, lawful route for these customers lets you trade with tradespeople and small firms without guessing or overstepping.

                ## Milestones
                1. The consent and data protection rules for checking individuals confirmed for your country.
                2. A consent statement added to the application for unincorporated customers.
                3. A check route chosen: personal credit report, references or deposits.
                4. Limits for unincorporated customers set with their own caps.

                ## Notes
                Rules on checking individuals are stricter than for companies in most countries. Confirm them with your data protection adviser or the regulator's guidance.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written route for checking sole traders and partnerships, with confirmed consent wording, is in the vetting procedure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your regulator's guidance on credit checks for individuals"
                - "Add consent wording for sole traders to the application"
                - "Choose the check route for unincorporated customers"
                - "Set limit caps for sole traders and partnerships"
            - name: Sales and credit working agreement
              description: |-
                ## Purpose
                Sales teams are paid to win orders and credit teams to stop bad ones, so friction is built in. A short written agreement, covering when sales passes on applications, what information they gather, how quickly credit decides and how disputes are escalated, turns the arguments into a process both sides can see.

                ## Milestones
                1. A one-page agreement on information, turnaround and escalation.
                2. Sales staff briefed on the warning signs they should report.
                3. A quarterly meeting between the sales lead and the credit lead.
                4. Disputed decisions logged with their outcome.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signed sales and credit agreement is in use, with quarterly meetings held and disputed decisions logged for two quarters."
                cadence: rolling
              tasks:
                - "List the last five disagreements between sales and credit"
                - "Draft a one-page agreement on information, turnaround and escalation"
                - "Meet the sales lead to review disputes and warning signs @recurring(quarterly)"
                - "Brief sales staff on which warning signs to report"
            - name: Handing a credit portfolio to a new controller
              description: |-
                ## Purpose
                Knowledge of credit customers often sits in one person's head: which customer always pays on the twenty-eighth, which director to call, which limit was a favour. Planning a handover with written account notes, a walk-through of the watch list and supervised decisions protects the portfolio when someone joins, leaves or covers leave.

                ## Milestones
                1. Account notes written for the twenty largest and all watch list customers.
                2. The policy, checklists and system reports walked through.
                3. The new controller's first ten decisions reviewed by the outgoing controller or finance lead.
                4. Approval rights updated in the system and the policy.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A new controller has received written account notes, a walk-through and a review of their first ten decisions, with approval rights updated."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write account notes for the largest and watch list customers"
                - "Walk the new controller through the policy, checklist and reports"
                - "Review the new controller's first ten credit decisions"
                - "Update approval rights in the system and the policy"
            - name: Extending credit to overseas customers
              description: |-
                ## Purpose
                Selling on credit abroad adds country risk, currency risk, weaker credit data and harder recovery to the usual questions. Deciding which countries get open terms, which need letters of credit or documentary collections arranged through your bank, and which need payment in advance, keeps export growth from turning into debts you cannot pursue.

                ## Milestones
                1. Overseas customers listed by country with current exposure.
                2. A country risk view taken from public sources or your credit insurer.
                3. Rules set for open terms, bank-backed instruments or advance payment by country.
                4. Your bank's trade finance team asked about letters of credit and their costs.

                ## Notes
                Letters of credit often fail on document discrepancies. Have your bank check the documents before shipping.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written credit rules by country for overseas customers, including when a letter of credit or advance payment is required, are in the policy."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List overseas customers by country with current exposure"
                - "Check country risk ratings from a public source or your insurer"
                - "Set the payment method required for each level of country risk"
                - "Ask your bank's trade finance team about letters of credit and costs"
            - name: Group exposure across related customer companies
              description: |-
                ## Purpose
                Related customers that share a parent, directors or owners can each look small while together they exceed any sensible limit. Linking related accounts and setting a group limit alongside the individual ones shows your real exposure if the group fails.

                ## Milestones
                1. Related accounts identified from registry data, shared directors and shared addresses.
                2. Linked accounts grouped in the system or a register.
                3. A group limit set and approved for each group.
                4. Group exposure added to the weekly limit check.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every group of related customers has a recorded group limit, and group exposure appears in the weekly limit check."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Search the registry for shared directors across your largest customers"
                - "Group related accounts in the system or a register"
                - "Set and approve a limit for each customer group"
                - "Refresh the related company links from registry data @recurring(quarterly)"
            - name: Expected credit loss provision matrix
              description: |-
                ## Purpose
                Many accounting frameworks, including IFRS 9, expect trade receivable provisions to reflect expected losses rather than only invoices already in dispute. Building a provision matrix from your own loss history by ageing band, adjusted for current conditions and agreed with your accountant or auditor, gives a provision you can explain and a measure of risk in the book.

                ## Milestones
                1. Two to three years of loss history analysed by ageing band.
                2. Loss rates by band calculated and adjusted for current conditions.
                3. The matrix and method agreed with your accountant or auditor.
                4. The provision recalculated each quarter from the matrix.

                ## Notes
                Which framework applies, and how, is for your accountant or auditor to confirm. This project prepares the analysis they will review.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A provision matrix based on your own loss history, agreed with your accountant, is used to calculate the provision each quarter."
                cadence: cyclic
              tasks:
                - "Ask your accountant which accounting framework applies to your provision"
                - "Extract three years of write-offs and aged balances by ageing band"
                - "Calculate loss rates by band and note adjustments for current conditions"
                - "Recalculate the provision from the matrix @recurring(quarterly)"
            - name: Credit portfolio stress test
              description: |-
                ## Purpose
                Ask what happens if your two largest customers fail in the same quarter: the lost debt, the lost margin on future sales and the effect on cash and bank covenants. Running that scenario, and a downturn in your main customer sector, once a year tells you whether concentration limits and insurance are set at the right level.

                ## Milestones
                1. Two scenarios defined: the largest customers failing and a downturn in your main customer sector.
                2. Loss, cash and covenant impact estimated for each.
                3. Results compared with your risk appetite figures.
                4. Changes to limits, insurance or concentration caps agreed where the results exceed appetite.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A stress test of two scenarios, with loss, cash and covenant impact, has been compared with appetite and presented to the owner or board this year."
                cadence: cyclic
              tasks:
                - "Define a largest customers failure scenario and a sector downturn scenario"
                - "Estimate lost debt, lost margin and cash impact for each scenario"
                - "Compare the results with your risk appetite and covenants"
                - "Rerun the credit stress test with current exposures @recurring(yearly)"
            - name: Back-testing the credit scorecard
              description: |-
                ## Purpose
                Once the scorecard has a year of decisions behind it, you can test whether it works: did low scores really pay worse, and did overrides do better or worse than the score said? Comparing scores with actual payment and loss outcomes shows which factors to reweight and whether the bands sit in the right place.

                ## Milestones
                1. A year of scored applications matched to payment record and any losses.
                2. Average days beyond terms and loss rate compared by score band.
                3. Override outcomes compared with the scorecard's prediction.
                4. Factor weights or band cut-offs adjusted and the change recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A back-test of at least a year of scored applications compares outcomes by band and records any change to weights or cut-offs."
                cadence: cyclic
              tasks:
                - "Match a year of scored applications to their payment records"
                - "Compare days beyond terms and losses by score band"
                - "Check whether overrides did better or worse than predicted"
                - "Back-test the scorecard against actual outcomes @recurring(yearly)"
---

# Customer Credit Risk Assessment

This area is for owners, managers and credit teams who sell on account and want to know, before the goods leave, that the customer can pay. It starts with the foundations (an exposure baseline, a written policy and appetite, the application form, terms, limits in the system and a credit file for every account), then the routines that vet, hold, monitor and review, the skills of reading credit reports, accounts and references, improvements such as a scorecard, a limit method and credit insurance, dated events like a major new customer or an insolvency notice, situations for first-time credit, sole traders, sales teams and exporters, and finally specialist work on group exposure, loss provisioning, stress testing and scorecard back-tests.

What repeats is a daily look at held orders, the weekly application queue, over-limit check and alert review, the monthly risk report, watch list, payment trend and credit committee, quarterly reviews of the largest accounts, and the yearly policy, limit, insurance and stress test reviews. The Operational checklist, Risk register, Meeting notes, Vendor, Purchase decision and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
