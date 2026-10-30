---
id: finance-accounting.foreign-exchange-treasury
name: Foreign Exchange & Treasury Management
description: "A currency exposure map, a treasury policy the board has signed, hedging and payment routines, and the pooling and surplus cash decisions for businesses that trade or hold money across borders."
category: business
version: 1.0.0
tags: [finance-accounting, foreign-exchange-treasury, enterprise, manager, small-business, currency-risk, hedging, international-payments]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - meeting-notes
    - purchase-decision
    - risk-register
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Foreign Exchange & Treasury Management
          description: "Managing currency exposure, international payments, cash pooling and surplus cash placement for businesses that trade or hold money across borders."
          projects:
            - name: Currency exposure map for the business
              description: |-
                ## Purpose
                Most businesses underestimate their currency exposure because it hides in places finance does not look: a software subscription billed in dollars, a freight contract priced in euros, a customer who pays in sterling. Mapping every flow and balance by currency, with its size and timing, is the starting point for every later decision in this area, from hedging to which accounts to hold.

                ## Milestones
                1. Every revenue stream, supplier, payroll, loan and lease line listed with the currency it is priced and paid in.
                2. Annual value and typical timing recorded for each currency flow, taken from the last twelve months of the ledger.
                3. Foreign currency assets and liabilities on the balance sheet listed separately from the flows.
                4. One summary showing net annual exposure by currency, ranked by size.

                ## Notes
                Include indirect exposures, such as a home currency supplier who passes on the cost of imported parts. They often move with the exchange rate even when the invoice does not.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page exposure map shows net annual exposure for every currency the business touches, built from twelve months of ledger data."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export twelve months of sales and purchase invoices with their currency codes"
                - "List each foreign currency customer, supplier, loan and subscription with its annual value"
                - "Ask the agent to summarise net exposure by currency from the export"
                - "Refresh the exposure map with the latest year of ledger data @recurring(yearly)"
            - name: Inventory of foreign currency accounts and balances
              description: |-
                ## Purpose
                Foreign currency often sits in forgotten places: a euro account opened for one customer, a dollar balance on a payment platform, a deposit held by a subsidiary. Before any policy or pooling decision, list every account and wallet by currency, with its balance, purpose and signatories, so treasury starts from a complete picture rather than the accounts finance happens to log into.

                ## Milestones
                1. Every bank account, multi-currency wallet and platform balance listed with its currency, provider and purpose.
                2. Balances captured on one date from the provider, not from the accounting software.
                3. Signatories and online banking users recorded for each account.
                4. Dormant or duplicate accounts marked for a close or keep decision.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated register lists every foreign currency account and wallet with balance, signatories and purpose, and each dormant one has a decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every account and wallet that holds a currency other than your home currency"
                - "Download each balance from the provider on the same day"
                - "Record the signatories and online users for each account"
                - "Mark dormant accounts and agree whether to close or keep each one"
            - name: Functional currency confirmation for each entity
              description: |-
                ## Purpose
                Which currency an entity measures itself in decides which balances count as foreign and where exchange gains and losses land. Groups that set this by habit, often the parent's currency, can find the auditor disagrees once a subsidiary mainly trades locally. Confirming each entity's functional currency with your accountant, against the accounting standard's indicators, avoids a painful restatement later.

                ## Milestones
                1. Each legal entity listed with the currency of its main sales, costs and financing.
                2. The accounting standard's indicators for functional currency applied to each entity in a short note.
                3. Your accountant or auditor's agreement to each conclusion recorded.
                4. Accounting software set to the agreed functional currency for every entity.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed note records the functional currency of every entity with its reasoning and the accountant's agreement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each entity with the currency of its sales, costs and borrowing"
                - "Write a one-paragraph functional currency reasoning for each entity"
                - "Send the reasoning to your accountant for agreement"
                - "Check the accounting software uses the agreed currency for each entity"
            - name: Agreed exchange rate source for the books
              description: |-
                ## Purpose
                When the bank, the accounting software and the spreadsheet each use a different rate, the same transaction can show three values and nobody can reconcile them. Choosing one published rate source, one time of day and one rule for month-end closing rates makes revaluations repeatable and audit questions short.

                ## Milestones
                1. One published rate source chosen for daily transactions and month-end closing rates.
                2. The time of day and rate type, such as the mid rate, written into a short rate rule.
                3. Accounting software configured to pull or import rates from that source.
                4. The rate rule shared with everyone who posts foreign currency entries.

                ## Notes
                Central bank reference rates and major data vendors are common choices. What matters most is using the same one every time and keeping the evidence.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rate rule names the source, rate type and timing, and the accounting software uses it for every currency."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which rate source your accounting software uses today"
                - "Choose one published source and rate type for daily and closing rates"
                - "Write the rate rule in a few lines and file it with the policy"
                - "Set the accounting software to import rates from the chosen source"
            - name: Currency sensitivity test on budget and margins
              description: |-
                ## Purpose
                A board cannot agree how much currency risk to accept until it sees what a rate move does to the numbers it cares about. Running the budget through a 5, 10 and 20 percent move in each major currency shows which exposures could wipe out a quarter's profit and which are noise, and gives every later hedging discussion a shared starting point.

                ## Milestones
                1. The current budget rebuilt with rates as inputs rather than typed values.
                2. Profit, gross margin and cash impact calculated for 5, 10 and 20 percent moves in each major currency.
                3. The two or three exposures with the largest impact identified.
                4. A one-page summary of the results ready for the owners or board.

                ## Notes
                Test moves in both directions. A strengthening home currency can hurt an exporter as much as a weakening one hurts an importer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A summary shows profit and cash impact of 5, 10 and 20 percent moves in each major currency, with the largest exposures named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Replace typed exchange rates in the budget with one rate input per currency"
                - "Run 5, 10 and 20 percent moves in each direction for every major currency"
                - "Note which currencies move profit by more than a month of overheads"
                - "Write a one-page summary of the results for the board"
            - name: Currency risk tolerance agreed with the board
              description: |-
                ## Purpose
                Without a stated tolerance, every hedging decision becomes a debate about whether rates will rise or fall, which nobody can know. A written statement of how much profit or cash the business can afford to lose to currency moves over a year turns that debate into arithmetic: cover what would exceed the tolerance and accept the rest.

                ## Milestones
                1. The sensitivity results presented to the owners or board.
                2. A maximum acceptable impact on annual profit and on cash, expressed as an amount, agreed.
                3. The time horizon the tolerance covers, such as twelve months of forecast flows, agreed.
                4. The tolerance minuted and added to the treasury policy.

                ## Notes
                This is a governance decision, not a forecast of rates. Ask your bank or treasury adviser to explain options, but the tolerance belongs to the owners or board.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Board or owner minutes record a maximum acceptable annual currency impact on profit and cash, with its horizon."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Put the sensitivity summary on the next board or owners' agenda"
                - "Draft two or three tolerance options with the impact of each"
                - "Record the agreed tolerance and horizon in the minutes"
                - "Copy the agreed tolerance into the treasury policy draft"
            - name: Treasury policy first edition
              description: |-
                ## Purpose
                Every treasury needs a policy, the document that lets people act without asking the owner every time: what the objective is, which instruments are allowed, who can deal, which banks are approved and how much can sit with each. A short first edition approved by the board beats a perfect one that never arrives, and auditors and lenders will ask for it.

                ## Milestones
                1. A policy of a few pages covering objectives, risk tolerance, permitted instruments, counterparties, roles and reporting.
                2. Speculative dealing explicitly prohibited and the hedging purpose stated.
                3. Limits for counterparty exposure and surplus cash placement included.
                4. The policy approved by the board and dated, with a yearly review set.

                ## Notes
                Keep instruments to what the team understands. Most smaller businesses need only spot deals, forwards and deposits until there is a clear reason for more.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A board-approved, dated treasury policy covers objectives, instruments, counterparties, roles, limits and reporting."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the agent to draft a treasury policy outline from your exposure map"
                - "List the instruments and banks the business actually uses today"
                - "Write the roles section naming who requests, approves, deals and confirms"
                - "Present the draft to the board for approval and record the date"
                - "Review the treasury policy against the past year's activity @recurring(yearly)"
            - name: FX dealing mandate and authorised dealers
              description: |-
                ## Purpose
                Banks will take FX instructions from whoever their mandate lists, so an out-of-date mandate means a leaver can still book deals and a new hire cannot. Matching each bank's dealing mandate to the roles in your policy, with dealing and confirming done by different people, closes one of the simplest gaps in currency control.

                ## Milestones
                1. Every bank and provider's current dealing mandate obtained and read.
                2. Authorised dealers and confirmers on each mandate matched to the treasury policy roles.
                3. No one person able to both execute and confirm the same deal.
                4. Updated mandates signed and returned, with copies filed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every bank's dealing mandate lists only current staff in roles that match the policy, with dealing and confirming split."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request the current dealing mandate from each bank and FX provider"
                - "Compare the names on each mandate with the policy's roles"
                - "Remove leavers and split dealing from confirming on each mandate"
                - "Check every dealing mandate against the staff list @recurring(yearly)"
            - name: Approved FX counterparty and provider list
              description: |-
                ## Purpose
                Deals and deposits concentrated with one bank are a risk if that bank fails or freezes, and deals with unvetted providers are a risk of a different kind. A short approved list, with each counterparty's credit standing, signed agreements and a maximum exposure, tells the team where they may deal and where they may not.

                ## Milestones
                1. Every bank and non-bank provider used for FX or deposits listed.
                2. Each counterparty's public credit rating or regulatory status recorded.
                3. Framework agreements, such as an ISDA or provider terms, confirmed signed and filed.
                4. A maximum exposure per counterparty set in line with the policy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved counterparty list records each provider's standing, signed agreement and maximum exposure, and the policy refers to it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every bank and provider used for currency deals or deposits"
                - "Look up each counterparty's credit rating or licence with its regulator"
                - "Confirm the signed dealing agreement for each one is on file"
                - "Set a maximum exposure per counterparty and add the list to the policy"
            - name: Cross-border beneficiary details master file
              description: |-
                ## Purpose
                International payments fail or arrive short when the account number format, bank identifier code, intermediary bank or purpose code is wrong, and each return costs fees and days. A master file of verified beneficiary details for every overseas supplier and employee, held in one place, makes payment runs faster and repairs rarer.

                ## Milestones
                1. Every overseas beneficiary listed with account number or IBAN, bank code and bank address.
                2. Intermediary bank and purpose or reason codes recorded where the destination country requires them.
                3. Each entry verified against a document from the beneficiary.
                4. Failed or returned payments from the last year traced to their cause and corrected.

                ## Notes
                Any change to bank details should go through your payment verification checks before it reaches this file.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A master file holds verified bank details and required codes for every overseas beneficiary, and last year's returns are corrected."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export every overseas supplier and payee with their bank details"
                - "Check each country's required codes for incoming payments"
                - "Match each entry to a bank letter or invoice from the beneficiary"
                - "Trace last year's returned international payments and fix their records"
            - name: Weekly cash position by currency
              description: |-
                ## Purpose
                Treasury decisions are made on today's balances, not last month's accounts. A short Monday report of cash in each currency, with the week's expected receipts and payments, shows whether a currency needs topping up, whether surplus can be placed and whether a conversion can wait.

                ## Milestones
                1. A one-page weekly report showing opening balance, expected flows and closing balance per currency.
                2. Shortfalls in any currency flagged with the conversion needed.
                3. The report sent to the finance lead by Monday midday.
                4. Twelve consecutive weekly reports filed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cash position by currency, with the week's expected flows, is produced every Monday for twelve consecutive weeks."
                cadence: rolling
              tasks:
                - "Build a one-page cash position template with one column per currency"
                - "Pull balances and the week's expected flows into the cash position @recurring(weekly:mon)"
                - "Flag any currency that will go below its minimum before Friday"
                - "Send the report to the finance lead by midday"
            - name: Weekly international payment run with conversion
              description: |-
                ## Purpose
                Paying overseas suppliers one by one, whenever an invoice is approved, multiplies fees and leaves conversions to whatever the rate is that minute. A fixed weekly run that batches foreign payments by currency, converts once at a quoted rate and checks every beneficiary before release cuts cost and the chance of a misdirected payment.

                ## Milestones
                1. A fixed weekly day for international payments agreed with purchasing.
                2. Approved foreign invoices batched by currency before each run.
                3. A rate quote obtained and recorded before each conversion is booked.
                4. Every run released by two people with the batch total checked against approved invoices.

                ## Notes
                Start from the **Operational checklist** template. Urgent payments outside the run should need a named approver and a reason.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "International payments go out in one weekly batched run with a recorded rate quote and dual release for at least eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Agree the weekly payment day and cut-off time with purchasing"
                - "Batch approved foreign invoices by currency and book the conversion @recurring(weekly:tue)"
                - "Record the quoted rate and the provider beside each conversion"
                - "Release each batch with a second approver checking the total"
            - name: FX deal confirmation matching
              description: |-
                ## Purpose
                Deals booked over the phone or on a platform are only as good as their confirmations, and mistakes in amount, rate or value date are cheapest to fix on the day. Matching every bank confirmation against your own deal record within a day, by someone other than the dealer, catches errors and is one of the first controls an auditor tests.

                ## Milestones
                1. A deal log recording every FX trade with amount, rate, value date and counterparty.
                2. Every bank confirmation matched to the log within one working day.
                3. Mismatches raised with the bank the same day and resolved in writing.
                4. Matching done by someone who did not execute the deal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every FX deal in a quarter has a bank confirmation matched within one working day by someone other than the dealer."
                cadence: rolling
              tasks:
                - "Set up a deal log with amount, rate, value date and counterparty columns"
                - "Ask each bank to send confirmations to a shared finance mailbox"
                - "Match the week's confirmations to the deal log and chase gaps @recurring(weekly:fri)"
                - "Record each mismatch and how the bank resolved it"
            - name: Hedge maturity and settlement calendar
              description: |-
                ## Purpose
                Forward contracts that mature with no money in the right account either fail or force an expensive last-minute swap. A calendar of every hedge maturity, with the funding it needs and the underlying invoice it covers, lets the team move cash in time and decide early whether a hedge needs to be extended.

                ## Milestones
                1. Every open hedge listed with maturity date, amount, currency and the exposure it covers.
                2. Funding for each maturity in the next month confirmed in the right account.
                3. Hedges whose underlying payment has moved flagged for extension or close-out.
                4. No hedge settled late in the last six months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A maturity calendar covers every open hedge, and every maturity in six months settles on time with funding in place."
                cadence: rolling
              tasks:
                - "List every open forward and option with its maturity and amount"
                - "Link each hedge to the invoice or forecast flow it covers"
                - "Check funding for next month's maturities is in place @recurring(monthly:20)"
                - "Raise any hedge whose underlying payment date has moved"
            - name: Month-end revaluation of foreign currency balances
              description: |-
                ## Purpose
                Foreign currency cash, debtors, creditors and loans must be restated at the closing rate each month, or the balance sheet drifts away from reality and a year's worth of gains or losses lands at once. A short revaluation routine using the agreed rate source keeps unrealised exchange differences visible month by month.

                ## Milestones
                1. Closing rates for each currency taken from the agreed source on the last day of the month.
                2. Every monetary foreign currency balance revalued and the difference posted.
                3. Realised and unrealised exchange differences shown on separate lines.
                4. The revaluation schedule filed with the month's close papers.

                ## Notes
                Non-monetary items such as stock and fixed assets are normally not revalued. Ask your accountant if unsure which balances qualify.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every month-end for six months has a filed revaluation schedule using the agreed source, with realised and unrealised differences separated."
                cadence: rolling
              tasks:
                - "List the monetary balances in each foreign currency at month-end"
                - "Run the revaluation at closing rates and post the difference @recurring(monthly:2)"
                - "Split realised and unrealised exchange differences in the ledger"
                - "File the revaluation schedule with the close papers"
            - name: Monthly currency exposure and hedge cover report
              description: |-
                ## Purpose
                Exposure changes every month as orders arrive, contracts are signed and hedges mature. A monthly report showing forecast exposure by currency and horizon against the hedges in place, compared with the policy's cover bands, tells the committee where cover is short or long before it becomes a problem.

                ## Milestones
                1. Forecast foreign currency flows by month for the policy horizon updated.
                2. Hedges in place set against each month's exposure as a cover percentage.
                3. Cover outside the policy's bands highlighted with a proposed action.
                4. The report sent to the treasury committee before its meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly report shows exposure and hedge cover by currency and month against policy bands for six consecutive months."
                cadence: rolling
              tasks:
                - "Build an exposure report with one row per currency and one column per month"
                - "Update forecast flows and hedges, then calculate cover by month @recurring(monthly:6)"
                - "Highlight any month where cover sits outside the policy bands"
                - "Send the report to the committee three days before it meets"
            - name: FX cost and spread log
              description: |-
                ## Purpose
                The cost of converting currency is mostly hidden in the rate, not shown as a fee, and margins of one to three percent on small payments are common. Logging each conversion's rate against the mid-market rate at the same time shows what currency actually costs the business each month and gives you numbers to negotiate with.

                ## Milestones
                1. Every conversion logged with amount, rate obtained, mid rate at the time and provider.
                2. The spread for each conversion calculated as a percentage and an amount.
                3. A monthly total of FX cost by provider produced.
                4. Six months of data ready to compare providers.

                ## Notes
                Start from the **Metrics log** template. Take the mid rate from the same source and at the same time as the deal, or the comparison is meaningless.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of conversions are logged with spread against mid rate, totalled monthly by provider."
                cadence: rolling
              tasks:
                - "Set up a log with amount, rate, mid rate, provider and spread columns"
                - "Add the last month's conversions and total the FX cost by provider @recurring(monthly:12)"
                - "Note any conversion where the spread exceeded the agreed level"
                - "Share the monthly cost total with the finance lead"
            - name: Monthly treasury committee
              description: |-
                ## Purpose
                Treasury decisions made in corridors leave no record and drift from the policy. A short monthly meeting of the finance lead, a director and whoever runs payments, working from the exposure report and cash position, gives each hedge, placement and exception a decision, an owner and a minute.

                ## Milestones
                1. Standing members, a monthly date and a fixed agenda agreed.
                2. Each meeting working from the exposure report, cash position and limit checks.
                3. Decisions, owners and exceptions to policy minuted.
                4. Actions from the previous meeting reviewed at the start of each one.

                ## Notes
                Start from the **Meeting notes** template. Small businesses can run this as a thirty-minute slot in the monthly finance review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly treasury meetings have minutes recording decisions, owners and any policy exceptions."
                cadence: rolling
              tasks:
                - "Agree members, a monthly date and a five-item agenda"
                - "Hold the treasury committee and minute decisions and owners @recurring(monthly:18)"
                - "Check actual positions against every policy limit and report breaches @recurring(quarterly)"
                - "Review the previous meeting's actions before new business"
            - name: Bank counterparty limit check
              description: |-
                ## Purpose
                Deposits, hedges and cash in transit with one bank can creep past the policy limit without anyone deciding it, especially after a large receipt. Checking total exposure to each counterparty every quarter, including the market value of open hedges, keeps concentration within what the board agreed.

                ## Milestones
                1. Total exposure per counterparty calculated from deposits, balances and hedge values.
                2. Each total compared with the limit on the approved list.
                3. Any breach reported to the committee with a plan to reduce it.
                4. Changes in a counterparty's credit standing noted and the limit reviewed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly checks show exposure to each counterparty against its limit, with every breach reported and resolved."
                cadence: rolling
              tasks:
                - "Ask each bank for the market value of your open hedges at quarter-end"
                - "Add deposits, balances and hedge values per counterparty @recurring(quarterly)"
                - "Compare each total with its limit and report any breach"
                - "Check for rating changes on every approved counterparty"
            - name: Surplus cash placement routine
              description: |-
                ## Purpose
                Cash sitting idle above the operating buffer earns little, while cash locked away too long can leave the business short. A monthly routine that works out the surplus by currency and places it only in instruments and with counterparties the policy allows, in that order of priority, puts security and access ahead of yield.

                ## Milestones
                1. An operating buffer per currency agreed and written into the policy.
                2. Surplus above the buffer calculated each month from the cash forecast.
                3. Placements made only in permitted instruments, terms and counterparties.
                4. A placement register showing amount, rate, maturity and counterparty for every deposit.

                ## Notes
                This is a policy routine, not investment advice. Agree permitted instruments with your board and bank, and put security and liquidity before return.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of placements are recorded in a register, each within the policy's instruments, terms and counterparty limits."
                cadence: rolling
              tasks:
                - "Agree the operating buffer for each currency with the finance lead"
                - "Work out the month's surplus and place it within policy limits @recurring(monthly:25)"
                - "Record each placement's rate, maturity and counterparty in the register"
                - "Check maturing deposits against next month's cash needs"
            - name: Annual budget exchange rate setting
              description: |-
                ## Purpose
                Every budget contains an assumed rate for each currency, and when nobody chooses it deliberately, departments use whatever they saw last. Setting one budget rate per currency each year, recording how it was chosen and linking it to the hedges already in place, makes variance reporting honest about what currency actually did.

                ## Milestones
                1. One budget rate per currency agreed before budget submissions open.
                2. The method recorded, such as the forward rate, the hedged rate or a recent average.
                3. Rates issued to every budget holder in one note.
                4. Currency variance shown separately from trading variance in monthly reporting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated note sets one budget rate per currency with its method, and monthly reports separate currency variance."
                cadence: cyclic
              tasks:
                - "Check which rate each department used in last year's budget"
                - "Set budget rates per currency and issue them to budget holders @recurring(yearly)"
                - "Write down the method behind each rate in a sentence"
                - "Add a currency variance line to the monthly report"
            - name: How spot and forward FX rates are quoted
              description: |-
                ## Purpose
                Anyone who books currency should be able to read a quote: which currency is the base, what the bid and offer are, and why the forward rate differs from spot. A few hours learning quote conventions prevents the classic error of booking a deal the wrong way round, and makes provider spreads visible.

                ## Milestones
                1. Base and quote currency conventions explained in your own words with an example.
                2. Bid, offer and mid rates read correctly from three live quotes.
                3. The link between interest rate differences and forward points understood.
                4. A one-page quote cheat sheet written for the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page cheat sheet explains base and quote currency, bid and offer, and forward points, checked by the finance lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your bank's guide to how it quotes currency pairs"
                - "Write down three live quotes and identify base, bid, offer and mid"
                - "Work out a forward rate from spot and two interest rates by hand"
                - "Write a one-page quote cheat sheet for the team"
            - name: Forward contracts and what forward points mean
              description: |-
                ## Purpose
                Forwards are the most common hedge for a business, and the one most often misunderstood: they fix a rate but also fix an obligation to deliver the currency on a date. Learning how forwards work, including window forwards, early take-up and close-out, lets finance explain both the protection and the cost to the board.

                ## Milestones
                1. The obligation, settlement and margin or credit line requirements of a forward explained.
                2. Fixed date and window forwards compared on a real upcoming payment.
                3. What happens if the underlying payment is cancelled or delayed written down.
                4. A worked example of a forward against an invoice shared with the committee.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example shows a forward against a real invoice, including settlement, early take-up and close-out, reviewed by the committee."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your bank for its product sheet on forwards and window forwards"
                - "Work through a forward on one real upcoming supplier payment"
                - "Write down what a cancellation or delay would cost to unwind"
                - "Present the worked example at the next treasury committee"
            - name: Currency options basics for non-specialists
              description: |-
                ## Purpose
                Options can protect against a bad rate while keeping the benefit of a good one, but they cost a premium, and structured products built from them can carry risks that are hard to see. Understanding plain options well enough to ask good questions protects the business from buying something the team cannot value or explain.

                ## Milestones
                1. The difference between a forward and a bought option explained with a simple example.
                2. Premium, strike and expiry understood on a real quote.
                3. The risks of zero-cost and structured option products listed.
                4. A rule agreed on whether options are allowed and who may approve them.

                ## Notes
                Be cautious with products sold as zero cost. They usually include a sold option that can leave the business worse off than an unhedged position.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note explains plain options and structured product risks, and the policy records whether options are permitted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read an introductory guide to currency options from a bank or regulator"
                - "Ask your bank for an indicative option quote on one exposure"
                - "List the hidden risks in zero-cost and structured products"
                - "Record in the policy whether options are allowed and who approves them"
            - name: Transaction, translation and economic exposure explained
              description: |-
                ## Purpose
                Currency risk comes in three kinds, and confusing them leads to hedging the wrong thing. Transaction exposure hits cash on real invoices, translation exposure changes the reported value of foreign subsidiaries, and economic exposure shifts competitiveness over years. Knowing which one each item on your exposure map is decides whether it should be hedged at all.

                ## Milestones
                1. Each type of exposure explained with an example from your own business.
                2. Every line on the exposure map labelled with its type.
                3. Lines where hedging would protect cash separated from those that affect only reported figures.
                4. A short briefing note on the three types ready for directors.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every exposure map line is labelled transaction, translation or economic, with a briefing note for directors."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a short explainer on the three types of currency exposure"
                - "Label each line of your exposure map with its exposure type"
                - "Mark which lines affect cash and which only affect reported figures"
                - "Write a half-page briefing note for the directors"
            - name: Reading payment messages and FX confirmations
              description: |-
                ## Purpose
                When an international payment goes missing, the answer is in the payment message: who sent it, through which banks and with what charges. Learning to read a payment message, its tracking reference and the charge codes that decide who pays fees, and how newer ISO 20022 formats carry the same data, turns a week of bank chasing into one precise query.

                ## Milestones
                1. The main fields of a cross-border payment message identified on a real example.
                2. The charge options that decide whether sender, receiver or both pay fees understood.
                3. A payment traced end to end using its tracking reference.
                4. The fields your bank's FX confirmation contains matched to your deal log.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One real international payment has been traced end to end, with its message fields and charge option annotated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the payment message for one recent international payment"
                - "Identify the sender, intermediary and receiving banks in the message"
                - "Check which charge option was used and who paid the fees"
                - "Trace the payment with its tracking reference through the bank portal"
            - name: Security, liquidity and yield in cash placement
              description: |-
                ## Purpose
                Treasury's order of priorities for surplus cash is security first, then access, then return, and products that promise more yield usually give up one of the first two. Learning how deposits, notice accounts, money market funds and short government bills differ on those three points lets you write sensible placement rules and question offers properly.

                ## Milestones
                1. The main cash placement instruments compared on security, access and return.
                2. Deposit protection limits and their relevance to business deposits checked in your country.
                3. The questions to ask before placing cash with a new product written down.
                4. Permitted instruments for the policy proposed with reasons.

                ## Notes
                This is for writing policy, not choosing investments. Agree specific products with your board and bank.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison of placement instruments on security, access and return supports a proposed permitted list in the policy."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the cash placement products your banks offer to businesses"
                - "Compare each on security, access and return in a simple table"
                - "Check how deposit protection applies to business accounts in your country"
                - "Propose a permitted instruments list for the policy"
            - name: Choosing an international payments provider
              description: |-
                ## Purpose
                Banks are not always the cheapest or fastest way to pay overseas, and specialist providers vary widely in spreads, coverage and safeguarding of client money. Comparing three options on total cost for your real payment pattern, currencies covered, controls and regulatory status leads to a decision you can defend.

                ## Milestones
                1. Requirements written from the FX cost log: currencies, volumes, payment count and controls needed.
                2. Three providers, including your current bank, quoted on the same payment pattern.
                3. Each provider's licence and client money safeguarding checked with its regulator.
                4. A recommendation with total annual cost and a switching plan approved.

                ## Notes
                Start from the **Purchase decision** template. Check dual approval, user permissions and accounting software integration, not only price.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares three providers on annual cost, coverage, controls and regulatory status for the real payment pattern."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write requirements from last year's currencies, volumes and payment count"
                - "Get quotes from three providers on the same sample payments"
                - "Check each provider's licence and safeguarding with its regulator"
                - "Record the decision and the switching plan"
            - name: Invoicing currency decision for export customers
              description: |-
                ## Purpose
                Pricing exports in your own currency pushes the risk onto customers and can lose sales, while pricing in theirs wins business but leaves you holding the exposure. Deciding deliberately, customer by customer or market by market, using margin, competitor practice and whether you have costs in that currency, avoids drifting into exposure nobody chose.

                ## Milestones
                1. Each export customer or market listed with its current invoicing currency.
                2. Competitor pricing practice and customer preference noted for each market.
                3. Natural offsets, such as costs in the same currency, identified.
                4. An invoicing currency rule per market agreed and given to sales.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule sets the invoicing currency for each export market, with reasons, and sales has it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List export customers with the currency each is invoiced in today"
                - "Ask sales what currency competitors quote in each market"
                - "Note which markets also carry costs in the same currency"
                - "Agree an invoicing currency rule per market and share it with sales"
            - name: Asking suppliers to invoice in your currency
              description: |-
                ## Purpose
                Suppliers who invoice in your currency take the exchange risk, and some will do it for little or no price change, especially if you are a steady customer. Asking your largest foreign currency suppliers, or agreeing to share movements beyond a band, can remove exposure more cheaply than any hedge.

                ## Milestones
                1. The ten largest foreign currency suppliers ranked by annual spend.
                2. Each asked for a home currency price or a risk-sharing band.
                3. Responses compared against the cost of hedging the same exposure.
                4. Agreed changes written into supplier terms.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each of the ten largest foreign currency suppliers has been asked, and any agreed currency change is in their written terms."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Rank foreign currency suppliers by annual spend"
                - "Write a short request for a home currency price or sharing band"
                - "Compare each reply with the cost of a forward on the same amount"
                - "Update the supplier terms for each change agreed"
            - name: Hedging programme design with layered cover
              description: |-
                ## Purpose
                Hedging everything at once locks in today's rate for a year and leaves no room if forecasts change, while hedging nothing leaves the budget exposed. A layered programme, with higher cover on near months and lower cover further out, rolled forward monthly, smooths the rate the business gets. Designing it with your bank or adviser, within the board's tolerance, gives the team rules instead of guesses.

                ## Milestones
                1. Forecast exposures by month graded by certainty: contracted, highly likely, possible.
                2. Cover bands by horizon proposed, such as more cover on near months and less further out.
                3. Permitted instruments and approval routes for each layer set out.
                4. The programme approved by the board and added to the policy.

                ## Notes
                Hedge firm commitments and highly likely forecasts, not hopes. Over-hedging a forecast that never arrives creates a new exposure. Take professional advice on structure; this project is about deciding and documenting.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A board-approved hedging programme sets cover bands by horizon and certainty, instruments and approvals, recorded in the policy."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Grade each month's forecast exposure as contracted, highly likely or possible"
                - "Draft cover bands by horizon within the board's tolerance"
                - "Review the draft with your bank or treasury adviser"
                - "Submit the programme to the board and add it to the policy"
            - name: Hold or convert decision for foreign currency receipts
              description: |-
                ## Purpose
                Converting every foreign receipt the day it lands means paying a spread twice when the same currency goes out again to a supplier next month. Deciding which currencies to hold in accounts to meet known payments, and which to convert straight away, cuts conversion costs and creates a simple natural hedge.

                ## Milestones
                1. Receipts and payments in each currency compared over the last twelve months.
                2. Currencies with matching outflows identified as candidates to hold.
                3. A maximum holding per currency set, with excess converted under the policy.
                4. The hold or convert rule written down and the accounts set up to match.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule states for each currency whether receipts are held or converted, with a maximum holding."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total last year's receipts and payments in each currency"
                - "Identify currencies where outflows use up most of the inflows"
                - "Set a maximum holding for each currency you decide to keep"
                - "Write the hold or convert rule and share it with the payments team"
            - name: Cash pooling feasibility study
              description: |-
                ## Purpose
                Groups with several entities often hold surplus cash in one company while another pays overdraft interest in the same bank. Pooling, either physical sweeps or notional offsetting, can cut that cost, but it brings tax, legal and intercompany consequences that vary by country. A feasibility study with your bank and tax adviser shows whether it is worth it before anything is signed.

                ## Milestones
                1. Balances and interest earned or paid per entity totalled for the last year.
                2. Physical and notional pooling options described by your bank for your countries.
                3. Tax, legal and intercompany loan implications reviewed by an adviser.
                4. A go or no-go recommendation with expected annual saving presented to the board.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recommendation to the board states expected annual saving and adviser-reviewed tax and legal implications of pooling."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Total each entity's balances and interest paid or earned last year"
                - "Ask your main bank to describe physical and notional pooling for your countries"
                - "Brief your tax adviser on intercompany interest and withholding questions"
                - "Present the saving and risks to the board with a recommendation"
            - name: Treasury system or spreadsheet decision
              description: |-
                ## Purpose
                Spreadsheets run treasury well for a handful of currencies and deals, but break down when deals, entities and bank connections multiply and errors start costing money. Deciding whether to stay on a controlled spreadsheet or move to a treasury management system, based on volume, controls and integration needs, avoids buying too early or too late.

                ## Milestones
                1. Current deal volume, entity count, bank connections and manual hours measured.
                2. Requirements listed for deal capture, exposure, bank connectivity and accounting entries.
                3. Two or three systems demonstrated against those requirements, alongside an improved spreadsheet option.
                4. A decision recorded with cost, benefits and an implementation outline.

                ## Notes
                Start from the **Purchase decision** template. If you stay on a spreadsheet, lock formulas, version it and restrict who can edit.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares an improved spreadsheet and at least two systems against measured volume and requirements."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Count last quarter's deals, bank accounts, entities and manual treasury hours"
                - "Write requirements for deal capture, exposure, connectivity and entries"
                - "Book demonstrations with two systems using your own sample data"
                - "Record the decision with cost and an outline plan"
            - name: Currency clauses in customer and supplier contracts
              description: |-
                ## Purpose
                Long contracts priced in a foreign currency can carry years of exposure that finance never sees until the first large invoice. Reviewing the largest contracts for currency of payment, price adjustment clauses and rate reference points, with your lawyer for any changes, shows where risk is already shared and where it sits with you.

                ## Milestones
                1. Contracts over an agreed value with a foreign currency element listed.
                2. Currency, adjustment clauses and rate references summarised for each.
                3. Contracts with open-ended exposure flagged for renegotiation at renewal.
                4. A standard currency clause for new contracts agreed with your lawyer.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A summary of currency terms covers every contract over the threshold, and a standard clause is agreed for new contracts."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull every contract over the agreed value with a foreign currency element"
                - "Ask the agent to summarise currency and adjustment clauses in each contract"
                - "Flag contracts where all currency risk sits with you"
                - "Agree a standard currency clause for new contracts with your lawyer"
            - name: Renegotiating FX spreads and international payment fees
              description: |-
                ## Purpose
                Most businesses accept their bank's standard FX margin because they have never shown the bank what they pay. Six months of logged spreads, set beside a competing quote, is usually enough to get the margin cut on routine conversions. The saving repeats every month without changing anything else.

                ## Milestones
                1. Six months of spread data totalled by provider and payment size.
                2. At least one competing quote obtained on the same pattern.
                3. A revised margin or fee schedule agreed in writing with the current provider.
                4. Spreads after the change checked in the cost log for three months.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A revised FX margin is agreed in writing, and three months of logged spreads confirm it is applied."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total six months of FX cost from the spread log by provider"
                - "Get a competing quote on the same payment pattern"
                - "Ask your provider in writing for a revised margin schedule"
                - "Check three months of spreads against the agreed margin"
            - name: Large foreign currency equipment purchase
              description: |-
                ## Purpose
                A machine, vehicle fleet or system bought from overseas can be the largest single currency exposure of the year, with deposits and balances due months apart. Planning the payments, the conversions and any hedge as soon as the order is signed fixes the cost in your currency and stops a rate move turning the business case negative.

                ## Milestones
                1. Payment schedule from the supplier listed with amounts, currencies and dates.
                2. Cost in home currency at today's rate recorded against the approved business case.
                3. Conversions or hedges for each payment agreed within policy.
                4. Each payment made on time and the final home currency cost compared with the case.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every payment for the purchase is converted or hedged within policy and the final home currency cost is compared with the business case."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the supplier's payment schedule with amounts and dates"
                - "Calculate the home currency cost at today's rate for each payment"
                - "Agree a conversion or hedge for each payment with the finance lead"
                - "Compare the final home currency cost with the business case"
            - name: First export order in a new currency
              description: |-
                ## Purpose
                Winning a first customer in a new currency is a good problem, but without preparation the receipt lands in the wrong account, converts at a poor rate or arrives short after fees. Setting up how the customer will pay, where the money will land and what happens to it next before the invoice is raised makes the first order as profitable as it was priced.

                ## Milestones
                1. Invoicing currency, payment method and bank details for receipt agreed.
                2. A receiving account or wallet in that currency ready, or a conversion route agreed.
                3. Any hedge on the expected receipt considered under the policy.
                4. The first receipt traced to the account and the net amount compared with the invoice.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first receipt in the new currency arrives in the planned account and its net value after fees and conversion is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the invoicing currency and payment method with the customer"
                - "Set up a receiving account or agree how the receipt will be converted"
                - "Add the new currency to the exposure map and the rate source"
                - "Compare the net amount received with the invoice value"
            - name: Converting a large foreign currency receipt
              description: |-
                ## Purpose
                Large milestone payments, sale proceeds or investments arriving in a foreign currency are moments when a small difference in rate is worth a lot of money. Agreeing in advance where it will land, how and when it will be converted and who approves, rather than leaving it to the bank's default rate, protects the value.

                ## Milestones
                1. Expected amount, currency and arrival date confirmed with the payer.
                2. Receiving account and conversion plan approved by the committee.
                3. Competing quotes or a pre-agreed rate in place before arrival.
                4. Funds received, converted and the achieved rate recorded against the plan.

                ## Notes
                Ask the payer to send the currency, not convert it themselves. Payer-side conversions are often at retail rates.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The receipt is converted under an approved plan, with the achieved rate and spread recorded against competing quotes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the amount, currency and arrival date with the payer"
                - "Agree the receiving account and conversion plan with the committee"
                - "Get two quotes for the conversion before the funds arrive"
                - "Record the achieved rate against the quotes"
            - name: Unwinding a hedge after a cancelled order
              description: |-
                ## Purpose
                When a customer cancels or a purchase falls through, the forward booked against it still has to be settled, extended or closed out, sometimes at a cost. Handling it promptly, with the cost measured and the cause recorded, stops an orphaned hedge becoming an open speculative position and teaches the business how firm a forecast must be before it is hedged.

                ## Milestones
                1. The hedge and the cancelled exposure identified and the bank told.
                2. Settlement, extension and close-out costs quoted.
                3. The chosen action approved and executed.
                4. The cost and the cause recorded, with any change to hedging rules proposed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The orphaned hedge is closed or reassigned within two weeks of cancellation, with cost and cause recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Identify the hedge linked to the cancelled order"
                - "Ask the bank for settlement, extension and close-out costs"
                - "Get approval for the chosen action and execute it"
                - "Record the cost and propose any rule change to the committee"
            - name: Small importer paying suppliers in US dollars
              description: |-
                ## Purpose
                Small businesses that import stock often pay every dollar invoice at the bank's counter rate, the week it falls due, with no view of what is coming. A simple monthly routine of listing next month's dollar payments, converting in fewer, larger amounts and comparing a specialist provider with the bank can save several percent on every container.

                ## Milestones
                1. Next month's dollar invoices listed each month with amounts and due dates.
                2. Conversions grouped into fewer, larger amounts rather than one per invoice.
                3. Bank and one specialist provider compared on a real payment.
                4. The landed cost of stock recalculated with the actual exchange rate paid.

                ## Notes
                Ask your supplier whether earlier payment earns a discount. Sometimes that is worth more than any rate saving.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months, dollar payments are planned a month ahead, converted in grouped amounts and landed cost uses the actual rate."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every dollar invoice due next month with its amount"
                - "Plan next month's dollar conversions in grouped amounts @recurring(monthly:8)"
                - "Compare the bank's rate with one specialist provider on a real payment"
                - "Update stock landed cost with the rate actually paid"
            - name: Operating through a foreign currency shortage
              description: |-
                ## Purpose
                In some economies, businesses queue for weeks to buy foreign currency from their bank, and suppliers abroad will not wait. Organising the documents banks ask for, ranking payments by consequence and tracking every request in the queue keeps critical suppliers paid while the shortage lasts, without stepping outside the rules.

                ## Milestones
                1. The documents each bank requires for a currency allocation listed and kept ready.
                2. Foreign payments ranked by consequence: stock, critical services, then the rest.
                3. A request log showing each application, its date, bank and status.
                4. Suppliers with delayed payments told in writing, with expected dates.

                ## Notes
                Use only authorised channels for buying currency. Check the central bank or regulator's current rules with your bank before changing how you source it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A request log tracks every currency application by bank and status, and critical suppliers are paid within their agreed terms."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask each bank which documents it requires for a currency allocation"
                - "Rank pending foreign payments by consequence of delay"
                - "Update the currency request log with status from each bank @recurring(monthly:15)"
                - "Write to suppliers with delayed payments giving expected dates"
            - name: Devaluation and currency shock contingency plan
              description: |-
                ## Purpose
                A sudden devaluation, a peg change or an overnight swing can raise the cost of imports and foreign debt faster than prices can follow. A written plan, drawn up calmly, sets out who meets, what is checked first, which prices and payments change and how lenders and staff are told. It turns the first day of a shock into a checklist rather than a panic.

                ## Milestones
                1. Trigger events and the first-day response team written down.
                2. The impact of a large move on cash, debt covenants and margins calculated in advance.
                3. Pricing, payment priority and communication steps agreed for each trigger.
                4. The plan tested in a one-hour desk exercise.

                ## Notes
                Start from the **Risk register** template to record each trigger with its owner and first actions.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written contingency plan with triggers, owners and pre-calculated impacts has been tested in a desk exercise."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the currency events that would trigger the plan"
                - "Calculate the impact of a large move on cash, debt and margins"
                - "Agree first-day steps for pricing, payments and communication"
                - "Run a desk exercise of the contingency plan with the team @recurring(yearly)"
            - name: Pegged home currency and non-dollar exposures
              description: |-
                ## Purpose
                Businesses in countries whose currency is pegged to the US dollar, as in several Caribbean and Gulf economies, can forget that the peg protects only against the dollar. Euro, sterling and other costs still move every day. Separating dollar exposure from everything else shows what is really at risk and what the peg already covers.

                ## Milestones
                1. The exposure map split into the anchor currency and all other currencies.
                2. Non-anchor exposures valued and their sensitivity calculated.
                3. Assumptions about the peg's continuation recorded, with a trigger to revisit them.
                4. Hedging or invoicing changes for non-anchor exposures proposed to the committee.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note separates anchor and non-anchor currency exposure, values each and proposes actions for the non-anchor ones."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Split the exposure map into the anchor currency and all others"
                - "Calculate the sensitivity of each non-anchor exposure"
                - "Write down the peg assumption and what would make you revisit it"
                - "Propose actions for non-anchor exposures to the committee"
            - name: First ninety days running treasury as a finance manager
              description: |-
                ## Purpose
                Finance managers often inherit treasury on top of the close, with no handover beyond a bank login and a spreadsheet of deals. A ninety-day plan of first learning what exists, then fixing the riskiest gaps and finally setting the routines gives a new owner of treasury control quickly and shows directors what they have taken on.

                ## Milestones
                1. First thirty days: all accounts, open deals, mandates and the policy found and read.
                2. By sixty days: the three riskiest gaps, such as single-person dealing, fixed.
                3. By ninety days: weekly and monthly treasury routines running.
                4. A short handover note for any successor written and filed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within ninety days, open deals and accounts are documented, the three riskiest gaps are closed and routines are running."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your predecessor or bank for a list of open deals and accounts"
                - "Read the treasury policy and note where practice differs from it"
                - "Pick the three riskiest gaps and agree fixes with your director"
                - "Write a handover note describing the routines you put in place"
            - name: Entering a new currency zone as a group
              description: |-
                ## Purpose
                Opening a subsidiary or branch in a new country brings a new currency, local banking rules, possible capital controls and tax on moving money out. Planning the treasury side before trading starts, with local advisers, avoids trapped cash, unhedged start-up costs and accounts that head office cannot see.

                ## Milestones
                1. Local currency rules, capital controls and repatriation routes summarised with an adviser.
                2. Local accounts set up with head office visibility and approval rights.
                3. Funding method for the new entity, such as equity or an intercompany loan, decided with tax advice.
                4. The new currency added to the policy, exposure report and rate source.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Before trading starts, the new entity has visible local accounts, an advised funding method and its currency in the policy and reports."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Brief a local adviser on currency rules and repatriation for the country"
                - "Agree how head office will see and approve local accounts"
                - "Decide the funding method for the new entity with tax advice"
                - "Add the new currency to the exposure report and rate source"
            - name: Multilateral netting of intercompany currency flows
              description: |-
                ## Purpose
                Group companies that invoice each other across currencies usually pay each other gross and the group buys and sells the same currencies many times over. A monthly netting cycle offsets those balances so each entity pays or receives one net amount, which cuts conversion volume, bank fees and the time spent matching intercompany payments.

                ## Milestones
                1. Intercompany flows by entity pair and currency measured over six months.
                2. Netting rules, a monthly cycle date and a settlement currency agreed.
                3. Tax and local currency rules on netting confirmed for each country with an adviser.
                4. A first netting cycle run with the conversion volume saved recorded.

                ## Notes
                Some countries restrict netting or require approval. Check before including an entity.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A monthly netting cycle runs for every eligible entity, and the reduction in conversion volume is recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Measure six months of intercompany flows by entity pair and currency"
                - "Confirm with an adviser which countries allow netting"
                - "Agree the netting cycle date and settlement currency with each entity"
                - "Run the first netting cycle and record the volume saved"
            - name: Hedge accounting documentation for the auditors
              description: |-
                ## Purpose
                Without hedge accounting, the gains and losses on forwards can hit profit in a different period from the exposure they protect, making results look more volatile than the business is. Qualifying for it requires documentation at the start of each hedge and effectiveness evidence afterwards, which must be agreed with your auditors before the year end.

                ## Milestones
                1. A decision made, with your accountant, on whether hedge accounting is worth applying.
                2. Designation documentation prepared at inception for each hedge relationship.
                3. An effectiveness assessment method agreed with the auditors.
                4. A file per hedge holding designation, assessment and accounting entries.

                ## Notes
                Documentation must exist when the hedge is taken out. It cannot be written later to qualify retrospectively.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every designated hedge has inception documentation and an effectiveness record in a file the auditors have accepted."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask your accountant whether hedge accounting suits your hedging pattern"
                - "Draft a designation document template for one hedge relationship"
                - "Agree the effectiveness method with the audit team"
                - "Build a file for each designated hedge"
            - name: Cash flow at risk measurement
              description: |-
                ## Purpose
                Larger groups need one number that tells the board how much currency moves could cost over the next year, rather than a page of sensitivities. Cash flow at risk estimates the shortfall at a chosen confidence level from historic rate volatility and correlations. Building it with a clear description of its limits gives a consistent measure to set against the board's tolerance.

                ## Milestones
                1. Exposures by currency and horizon taken from the monthly report.
                2. Historic volatility and correlations for each currency pair sourced and documented.
                3. Cash flow at risk calculated at an agreed confidence level, with and without hedges.
                4. The measure and its limitations presented to the board alongside the tolerance.

                ## Notes
                Historic volatility understates crisis moves. Always show a stress scenario beside the statistical figure.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cash flow at risk figure, with and without hedges plus a stress scenario, is presented to the board against its tolerance."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pull exposures by currency and horizon from the monthly report"
                - "Source two years of daily rates for each currency pair"
                - "Calculate cash flow at risk at the agreed confidence level"
                - "Present the measure with a stress scenario to the board"
            - name: Cash repatriation from foreign subsidiaries
              description: |-
                ## Purpose
                Cash earned by a foreign subsidiary is not freely available to the group until it can be moved home, and dividends, loan repayments, royalties and service charges each carry different tax and legal consequences. Planning repatriation with tax advisers, before cash builds up, avoids trapped balances and withholding tax surprises.

                ## Milestones
                1. Surplus cash per subsidiary and its expected build-up over a year recorded.
                2. Repatriation routes and their withholding tax and legal limits reviewed with advisers.
                3. Distributable reserves and local approval requirements checked per entity.
                4. A yearly repatriation plan approved, with timing linked to group cash needs.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An adviser-reviewed repatriation plan sets the route, timing and tax cost for every subsidiary holding surplus cash."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List surplus cash held by each subsidiary today"
                - "Ask your tax adviser to compare repatriation routes for each country"
                - "Check distributable reserves and local approvals per entity"
                - "Agree the yearly repatriation plan with the group finance lead"
---

# Foreign Exchange & Treasury Management

This area is for owners, finance managers and group treasurers whose business buys, sells, borrows or holds money in more than one currency. It starts with the foundations (a map of every currency flow, a list of every foreign balance, the sensitivity of the budget to rate moves, a tolerance the board has agreed and a first treasury policy), then the weekly and monthly machinery of payments, confirmations, revaluation and exposure reporting, the skills behind forwards, options and payment messages, decisions on providers, invoicing currency and hedging design, dated events such as a large overseas purchase, situations from a small importer paying in dollars to a currency shortage or devaluation, and finally netting, hedge accounting and cash repatriation for groups.

What repeats is the Monday cash position by currency, the weekly international payment run and Friday deal confirmations, the month-end revaluation and exposure report, a monthly FX cost log, treasury committee and surplus cash placement, quarterly counterparty and policy limit checks, and the yearly budget rate and policy review. The Operational checklist, Metrics log, Meeting notes, Purchase decision and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
