---
id: finance-accounting.inventory-costing-valuation
name: Inventory Costing & Valuation
description: "A written stock valuation policy and cost formula, ledgers that reconcile, cycle and year-end counts, obsolescence and net realisable value reviews, and costing rules that keep cost of goods sold right."
category: business
version: 1.0.0
tags: [finance-accounting, inventory-costing-valuation, small-business, manager, enterprise, stock-count, cost-of-goods-sold, stock-provisions]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - remediation-plan
    - operational-checklist
    - vendor
    - onboarding-30-60-90
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Inventory Costing & Valuation
          description: "Valuing stock correctly, choosing costing methods, handling write-offs and stock counts so the cost of goods and margins in the accounts are right."
          projects:
            - name: Inventory valuation policy on one page
              description: |-
                ## Purpose
                Ask three people how stock is valued in a typical small or mid-sized business and you will hear three answers, which is why year-end adjustments surprise everyone. A one-page policy stating the cost formula, what goes into cost, how counts and write-offs are approved and when provisions are made gives the bookkeeper, the warehouse and the auditor one reference. Write it before changing anything else, so every later project has something to point back to.

                ## Milestones
                1. A one-page policy covering cost formula, cost inclusions, counts, write-offs and provisions.
                2. Each section naming the person who owns that rule.
                3. The policy reviewed by your external accountant or auditor.
                4. The policy saved where the finance team and the warehouse lead can both find it.

                ## Notes
                Keep it short. A long policy nobody reads gives false comfort at audit time, which is worse than having none.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page inventory valuation policy, reviewed by the external accountant, is saved in the shared finance folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down how stock is valued today, as you understand it"
                - "Ask the agent to draft a one-page policy outline from your notes"
                - "Send the draft to your accountant for comment"
                - "Re-read the policy and update anything that has changed @recurring(yearly)"
            - name: Choosing between FIFO, weighted average and specific cost
              description: |-
                ## Purpose
                The cost formula decides which purchase price ends up in cost of goods sold and which stays on the balance sheet, so in a year of rising supplier prices two businesses with identical sales can report different margins. Most accounting standards allow first in, first out or weighted average for interchangeable goods and expect specific identification for unique, high-value items; some jurisdictions also permit last in, first out. Choosing deliberately, and recording why, beats a formula set by a software default nobody remembers picking.

                ## Milestones
                1. The formula your system currently applies confirmed from its settings, not assumed.
                2. Last year's cost of sales compared under at least two formulas for your top 20 items.
                3. A decision recorded with the reason and the accountant's agreement.
                4. The chosen formula applied consistently to all items of a similar nature.

                ## Notes
                Changing formula later is a change in accounting policy, usually with restated comparatives and a disclosure. Agree any change with your accountant before the year it takes effect.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the cost formula, with a two-formula comparison for the top 20 items and the accountant's agreement attached."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the costing method setting in your inventory or accounting system"
                - "Export last year's purchases and sales for your top 20 items"
                - "Compare cost of sales under FIFO and weighted average for those items"
                - "Record the chosen formula and the reason in the valuation policy"
            - name: Periodic or perpetual inventory recording decision
              description: |-
                ## Purpose
                A periodic system counts stock at the end of each period and treats cost of sales as the balancing figure; a perpetual system updates quantity and value with every receipt and sale. Small shops often run periodic recording without realising it, then wonder why monthly margins swing. Deciding which you run, and whether it suits your volume and reporting needs, sets the shape of every monthly entry.

                ## Milestones
                1. Your current method identified from how cost of sales is posted today.
                2. The reporting need written down: how often reliable margins are needed and by whom.
                3. The cost of moving to perpetual recording estimated in hours and software.
                4. A decision recorded, with the month it takes effect.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision between periodic and perpetual recording, with its start month and the estimated running cost noted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look at last month's cost of sales journal to see how it was calculated"
                - "Ask the owner or managers how often they need a reliable margin"
                - "Estimate the weekly hours a perpetual system would need to stay accurate"
                - "Note the decision and its start month for the finance team"
            - name: Item master clean-up before costing
              description: |-
                ## Purpose
                Duplicate item codes, wrong units of measure and items in the wrong category are behind a large share of strange unit costs, such as a box of 100 screws costed as a single screw. Cleaning the item master before you trust any valuation report removes errors that no reconciliation will ever find. It is dull work that pays back every month afterwards.

                ## Milestones
                1. Duplicate and dormant item codes identified and merged or blocked.
                2. Purchase and stocking units of measure checked, with conversion factors corrected.
                3. Every active item assigned a stock category and valuation account.
                4. Items with zero or implausible unit cost listed and fixed.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An item master export shows no duplicate active codes, a category on every item and no active item at zero cost."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export the full item list with units, categories and unit costs"
                - "Sort by unit cost to find zeros and outliers"
                - "Merge or block duplicate item codes"
                - "Correct purchase to stocking unit conversion factors"
                - "Block items with no movement in the last 18 months @recurring(yearly)"
            - name: Cost inclusion rules for purchased stock
              description: |-
                ## Purpose
                Inventory cost includes more than the supplier invoice: import duties, inbound freight and handling usually belong in it, while storage after receipt, selling costs and recoverable sales taxes usually do not. Without written rules one person capitalises freight and another expenses it, and the margin moves with whoever posted the bill. A short list of what is in and what is out settles it.

                ## Milestones
                1. A two-column list of costs included in and excluded from stock cost.
                2. Treatment of freight, duty, insurance, handling and recoverable tax each decided.
                3. The list checked against your accounting standard by the accountant.
                4. Bill coding guidance updated so the payables team applies the rules.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written in and out list for stock cost, agreed with the accountant and reflected in the coding guidance used for supplier bills."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every cost type that appears on inbound supplier and freight bills"
                - "Mark each as included in stock cost or expensed"
                - "Ask your accountant to confirm the borderline items"
                - "Add the rules to the bill coding notes the payables team uses"
            - name: Inventory account and posting map
              description: |-
                ## Purpose
                Every stock movement should land in a predictable pair of accounts: receipts into stock against goods received not invoiced, sales into cost of goods sold, count differences into an adjustment account, provisions into their own line. When the system's posting setup is unknown, nobody can explain a movement on the balance sheet. Mapping it once turns the stock figure from a mystery into something you can trace.

                ## Milestones
                1. A table of each stock transaction type with its debit and credit accounts.
                2. Separate accounts confirmed for stock adjustments, provisions and variances.
                3. Any transaction type posting to suspense or the wrong account fixed.
                4. The map saved alongside the valuation policy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A posting map covering receipts, sales, adjustments, transfers, provisions and variances, tested by tracing one live example of each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the stock transaction types your system can post"
                - "Trace one example of each to the journal it created"
                - "Note any type posting to suspense or a general expense account"
                - "Fix the posting setup with whoever administers the system"
            - name: Stock ledger to general ledger tie-out
              description: |-
                ## Purpose
                The inventory report and the balance sheet should show the same stock value, and in many businesses they have not agreed for years. Finding the gap, splitting it into explained timing items and genuine errors, and posting the corrections gives you a clean starting balance. Until this is done, every margin figure carries an unknown error.

                ## Milestones
                1. Stock valuation report and general ledger balance taken for the same date.
                2. The difference split into timing items, manual journals and unexplained amounts.
                3. Correcting journals approved and posted for the unexplained amount.
                4. A month-end where the two figures agree within your materiality threshold.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Stock subledger and general ledger agree within the agreed threshold at one month-end, with every reconciling item listed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Run the stock valuation report as at last month-end"
                - "Compare it with the stock balance in the trial balance"
                - "List manual journals posted to the stock account in the last year"
                - "Agree and post a correcting journal for the unexplained difference"
            - name: Register of stock locations and ownership
              description: |-
                ## Purpose
                Stock you own can sit in places you rarely see: a supplier's warehouse, a third-party logistics site, a van, a customer's premises on sale or return, or a container at sea. Stock you hold may belong to someone else. A register of every location and who owns what, with the documents that prove it, prevents both missing and double-counted stock at year-end.

                ## Milestones
                1. Every location holding your stock listed with the person responsible.
                2. Stock held for others, such as consignment or customer-owned goods, identified.
                3. Shipping terms that decide when ownership passes noted for main suppliers and customers.
                4. The register attached to the count instructions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A location and ownership register lists every site, third-party holding and consignment arrangement, with ownership terms for main suppliers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every site, vehicle and third party that holds your stock"
                - "Ask main suppliers and customers which shipping terms they use"
                - "Mark any goods on your premises that belong to someone else"
                - "Share the register with the warehouse lead"
            - name: First full wall-to-wall stock count
              description: |-
                ## Purpose
                If the stock figure has never been counted in full, or not for years, every reconciliation is built on a guess. One planned count of every location, with tags, blind counting and recounts of big differences, gives a quantity you can value with confidence. Plan it for a quiet week and stop receipts and despatches while it runs.

                ## Milestones
                1. Count date fixed, with receipts and despatches frozen for the count.
                2. Count sheets or scanner lists prepared by location, without expected quantities shown.
                3. Every location counted, with large differences recounted by a second person.
                4. Counted quantities valued and compared with the book figure.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every stock location counted on one date, large differences recounted, and the valued count compared with book stock in a written summary."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick a count date in a quiet trading week"
                - "Prepare blind count sheets by location"
                - "Brief the counting teams on tagging and recount rules"
                - "Value the count and write a one-page summary of differences"
            - name: Monthly inventory valuation reconciliation
              description: |-
                ## Purpose
                Once the ledgers agree, a short monthly routine keeps them agreeing: valuation report against general ledger, reconciling items explained and old items cleared. Catching a posting error in the month it happens takes minutes, while finding it at year-end can take days. Most finance teams fit it into the second or third working day.

                ## Milestones
                1. A reconciliation sheet holding the stock report total, ledger balance and reconciling items.
                2. Each month reconciled and reviewed by a second person.
                3. No reconciling item older than two months.
                4. Six consecutive monthly reconciliations signed off.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly stock reconciliations prepared, reviewed and signed, with no reconciling item older than two months."
                cadence: rolling
              tasks:
                - "Set up a stock reconciliation sheet with space for reconciling items"
                - "Reconcile the stock valuation report to the ledger @recurring(monthly:4)"
                - "Ask a second person to review and initial each reconciliation"
                - "Clear or escalate any reconciling item older than two months"
            - name: Cycle counting programme by ABC class
              description: |-
                ## Purpose
                Counting a few items every week, weighted towards the high-value lines, keeps quantities accurate all year and may shrink the year-end count if your auditor agrees. Classing items as A, B or C by annual cost value, then counting A items monthly, B quarterly and C twice a year, spreads the work into an hour or two a week. Accuracy rates by class show where controls are slipping.

                ## Milestones
                1. Items classed A, B or C by annual consumption value.
                2. A count calendar covering every item at its class frequency.
                3. Weekly counts done blind, with differences investigated before adjusting.
                4. Count accuracy by class reported monthly.

                ## Notes
                Ask your auditor early whether cycle counts can replace or reduce the year-end count. The answer depends on the controls they are able to test.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every A item counted at least monthly for a quarter, with count accuracy by class recorded each month."
                cadence: rolling
              tasks:
                - "Rank items by annual cost value and assign A, B and C classes"
                - "Build a count calendar that covers each class at its frequency"
                - "Run this week's cycle counts from the calendar @recurring(weekly:tue)"
                - "Report count accuracy by class to the finance lead @recurring(monthly:22)"
            - name: Goods received not invoiced review
              description: |-
                ## Purpose
                Goods received but not yet invoiced sit in an accrual that grows quietly when invoices are matched to the wrong order or prices differ from the purchase order. An old balance usually means stock is overstated or a supplier bill has gone missing. A monthly look at the aged list keeps the accrual honest and the stock cost right.

                ## Milestones
                1. An aged report of goods received not invoiced, by supplier.
                2. Items older than 60 days investigated with purchasing.
                3. Price and quantity differences between order, receipt and invoice corrected.
                4. The balance reconciled to the ledger each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The goods received not invoiced balance reconciles to the ledger monthly, with no unexplained items older than 60 days."
                cadence: rolling
              tasks:
                - "Run the aged goods received not invoiced report"
                - "Ask purchasing about every line older than 60 days"
                - "Correct receipts recorded at the wrong price or quantity"
                - "Reconcile the goods received not invoiced accrual to the ledger @recurring(monthly:6)"
            - name: Inventory cut-off checks at each month end
              description: |-
                ## Purpose
                Arrivals on the last day that are booked next month, or despatches invoiced before they leave the building, put the wrong stock and cost into the period. Recording the last goods received note and despatch number at month-end, and testing a few either side, catches the commonest cut-off errors before the numbers go out.

                ## Milestones
                1. Last receipt and despatch document numbers recorded at each month-end.
                2. Five transactions either side of the date tested for the right period.
                3. Goods in transit at month-end listed with their ownership terms.
                4. Cut-off errors corrected before reporting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Last document numbers and a ten-item cut-off test recorded for three consecutive month-ends, with any errors corrected."
                cadence: rolling
              tasks:
                - "Agree with the warehouse who records the last receipt and despatch numbers"
                - "Record the last receipt and despatch numbers before the month closes @recurring(monthly:28)"
                - "Test five documents either side of month-end for the right period"
                - "List goods in transit and check who owns them"
            - name: Quarterly slow-moving and obsolete stock review
              description: |-
                ## Purpose
                Superseded parts, lines that have not moved in a year and short-dated goods are often still carried at full cost, overstating profit until a painful write-off arrives. A quarterly review with sales and operations, using an ageing report and a written provision rule, decides what to sell off, return, rework or provide for.

                ## Milestones
                1. A stock ageing report by last movement date, sorted by value.
                2. Each line over the age threshold given an action: sell, return, rework, scrap or provide.
                3. The provision calculated using the written provision matrix.
                4. Actions from the previous quarter checked for completion.

                ## Notes
                Start from the **Meeting notes** template so each quarter's actions and owners are recorded in the same place.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews held in a year, each with an ageing report, an action for every aged line and a provision journal."
                cadence: cyclic
              tasks:
                - "Run a stock ageing report by last movement date"
                - "Book the obsolete stock review with sales and operations @recurring(quarterly)"
                - "Agree an action for each aged line above the value threshold"
                - "Post the provision movement and record it in the review notes"
            - name: Net realisable value test for key lines
              description: |-
                ## Purpose
                Stock must not be carried above what it can be sold for, less the costs to finish and sell it. Lines sold at a discount, damaged goods and products whose market price has fallen are the usual failures. Comparing cost with recent selling prices each quarter shows which lines need writing down before the auditor finds them.

                ## Milestones
                1. Recent net selling prices pulled for the top items by value and known problem lines.
                2. Costs to complete and sell estimated per line.
                3. Each line where cost exceeds net realisable value listed with its write-down.
                4. The write-down approved and posted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly net realisable value schedule for the top items by value, with any write-down approved and posted the same quarter."
                cadence: cyclic
              tasks:
                - "Export average selling prices for the last three months by item"
                - "Estimate selling costs per line with the sales team"
                - "Run the cost against net realisable value comparison @recurring(quarterly)"
                - "Get the write-down approved before posting it"
            - name: Stock adjustment and write-off approval log
              description: |-
                ## Purpose
                Quantity adjustments are one of the easiest places to hide theft or bury errors, because a quantity change silently moves money into the profit and loss account. A log of every adjustment above a small threshold, with a reason code and an approver who did not post it, makes the movements visible and reviewable.

                ## Milestones
                1. Reason codes set for adjustments: damage, count difference, expiry, theft, samples.
                2. An approval threshold and approver agreed, separate from whoever posts.
                3. Every adjustment above the threshold logged with reason and approver.
                4. Monthly totals by reason code reviewed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every stock adjustment above the agreed threshold for three months has a reason code and an independent approver in the log."
                cadence: rolling
              tasks:
                - "Set up reason codes for stock adjustments in the system"
                - "Agree the value above which an adjustment needs approval"
                - "Review the month's adjustments by reason code @recurring(monthly:12)"
                - "Query any adjustment where the approver also posted it"
            - name: Purchase price variance review
              description: |-
                ## Purpose
                Businesses that run standard costs see the gap between the standard price and what suppliers actually charged as a purchase price variance. Left unreviewed, a large variance can hide a supplier price rise, an out-of-date standard or a miskeyed invoice. A monthly look at the ten largest variances tells you which it is.

                ## Milestones
                1. Purchase price variance reported by item and supplier each month.
                2. The ten largest variances explained in a line each.
                3. Wrong standards and invoice errors corrected at source.
                4. Lasting supplier price changes passed to the standard cost roll.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of variance reviews completed, with the ten largest purchase price variances explained each month."
                cadence: rolling
              tasks:
                - "Run the purchase price variance report by item"
                - "Explain the ten largest purchase price variances in a line each @recurring(monthly:9)"
                - "Correct any variance caused by a keying or unit error"
                - "Send lasting price changes to whoever maintains standards"
            - name: Inventory accounting KPI log
              description: |-
                ## Purpose
                A handful of numbers shows whether stock accounting is under control: count accuracy, adjustments as a share of stock value, provision as a share of gross stock, the reconciliation difference and the age of the oldest reconciling item. Logging them monthly shows drift long before the audit and makes the finance review faster.

                ## Milestones
                1. Five KPIs defined with their formula and source report.
                2. A baseline month recorded.
                3. Each month's figures logged by the 15th.
                4. Targets agreed for count accuracy and adjustment value.

                ## Notes
                Start from the **Metrics log** template. Days of stock cover belongs with working capital work; keep this log to accounting accuracy.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of the five inventory accounting KPIs logged, with targets set for count accuracy and adjustments."
                cadence: rolling
              tasks:
                - "Create a KPI log from the metrics log template"
                - "Write the formula and source report for each of the five KPIs"
                - "Log the month's inventory accounting KPIs @recurring(monthly:15)"
                - "Agree targets for count accuracy and adjustment value"
            - name: Shrinkage tracking by location
              description: |-
                ## Purpose
                In retail and hospitality, the gap between what the books say should be on the shelf and what is actually there can run to a few per cent of sales. Measuring shrinkage at cost by location and category each month, from counts and adjustments, separates admin error from damage and theft and points to the shop or site that needs attention.

                ## Milestones
                1. Shrinkage defined as book stock less counted stock, at cost.
                2. Shrinkage reported monthly by location and category.
                3. Known causes such as damage and waste recorded separately from unexplained loss.
                4. The highest-shrinkage location reviewed with its manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly shrinkage at cost reported by location for six months, with unexplained loss separated from damage and waste."
                cadence: rolling
              tasks:
                - "Agree how shrinkage will be calculated at cost"
                - "Split last quarter's adjustments into known and unexplained loss"
                - "Report shrinkage by location and category @recurring(monthly:20)"
                - "Walk the worst location with its manager"
            - name: Weekly costing exceptions sweep
              description: |-
                ## Purpose
                Negative stock balances, items selling at zero cost, receipts at ten times the usual price and transfers stuck in transit all corrupt the unit cost the next sale picks up. A fifteen-minute weekly sweep of an exceptions report catches them while the paperwork is still on someone's desk.

                ## Milestones
                1. A saved exceptions report for negative stock, zero cost and price outliers.
                2. Each exception assigned and fixed within the week.
                3. Root causes for repeat exceptions noted.
                4. Eight consecutive weekly sweeps completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly exception sweeps completed, with no negative stock balance left open beyond a week."
                cadence: rolling
              tasks:
                - "Build a saved report for negative stock, zero cost and price outliers"
                - "Sweep the costing exceptions report and assign fixes @recurring(weekly:mon)"
                - "Note the cause of any exception that keeps returning"
            - name: Annual standard cost roll
              description: |-
                ## Purpose
                Standard costs set once and never refreshed drift away from reality, so variances grow until they mean nothing. Rolling standards forward once a year, from current supplier prices, labour rates and overhead budgets, keeps stock values and margins close to actual. Do it before the budget is set so both use the same numbers.

                ## Milestones
                1. Current supplier prices, labour rates and overhead rates gathered.
                2. New standards calculated and the revaluation impact on stock estimated.
                3. The impact approved by the finance lead before loading.
                4. New standards loaded on the first day of the financial year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "New standard costs loaded at the start of the year, with the stock revaluation impact calculated and approved beforehand."
                cadence: cyclic
              tasks:
                - "Gather current prices for the top purchased items"
                - "Calculate new standards and the stock revaluation they cause"
                - "Get the revaluation impact approved by the finance lead"
                - "Start the standard cost roll two months before year-end @recurring(yearly)"
            - name: Inventory accounting standard essentials
              description: |-
                ## Purpose
                Whether you report under IFRS, US GAAP or a national small-company standard, the inventory rules cover the same ground: what counts as cost, which cost formulas are allowed, the lower of cost and net realisable value, and what to disclose. Reading the relevant standard once, with a summary from your accountant or the standard setter, turns year-end conversations from deference into discussion.

                ## Milestones
                1. The standard that applies to your accounts identified with your accountant.
                2. Its sections on cost, formulas, write-downs and disclosure read.
                3. A one-page summary in your own words.
                4. Three questions about your own stock answered by the accountant.

                ## Notes
                Under IFRS the standard is IAS 2, and US GAAP covers inventory in ASC 330. Small-company standards often simplify both.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the applicable inventory standard written, with three questions about your own stock answered by the accountant."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your accountant which inventory standard applies to your accounts"
                - "Read the sections on cost, formulas, write-downs and disclosure"
                - "Write a one-page summary in plain words"
                - "Send your accountant three questions about your own stock"
            - name: Cost formula worked examples in a spreadsheet
              description: |-
                ## Purpose
                First in, first out and weighted average only make sense once you have pushed real numbers through them. Building a small spreadsheet with five purchases at different prices and three sales, then calculating cost of sales and closing stock both ways, shows exactly why the system's figures move as they do.

                ## Milestones
                1. A spreadsheet with five receipts and three issues for one item.
                2. Closing stock and cost of sales calculated under first in, first out.
                3. The same calculated under moving weighted average.
                4. The spreadsheet matched to your system's valuation of one real item.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked spreadsheet showing both formulas for one item, matched to the system's valuation of a real item."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a sheet with five receipts at different prices and three sales"
                - "Calculate FIFO cost of sales and closing stock"
                - "Recalculate using moving weighted average"
                - "Match your method to the system's figures for one real item"
            - name: Net realisable value and write-down reversals
              description: |-
                ## Purpose
                Write-downs to net realisable value are not always permanent: under IFRS, if prices recover while the stock is still held, the write-down is reversed up to original cost, while US GAAP generally treats the written-down amount as the new cost. Learning how write-downs, reversals and provisions interact stops the same loss being counted twice or never released.

                ## Milestones
                1. Net realisable value defined in a sentence, with an example from your own stock.
                2. The rule on reversals under your standard noted.
                3. The difference between a specific write-down and a general provision explained.
                4. Last year's write-downs checked for any that should have been released.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note explaining net realisable value, reversals and provisions under your standard, with last year's write-downs checked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read how your standard treats a recovery in selling price"
                - "Write a worked example using one of your own lines"
                - "List last year's write-downs still on the books"
                - "Check whether any of them relate to stock already sold"
            - name: Standard costing and the main variances
              description: |-
                ## Purpose
                Manufacturers and wholesalers often value stock at a standard cost and report the differences as variances: purchase price, material usage, labour rate, labour efficiency and overhead. Understanding what each variance measures, and which ones touch stock value, makes the monthly variance report readable and open to challenge.

                ## Milestones
                1. Each main variance defined with its formula.
                2. A worked example for one product from material to finished goods.
                3. Your system's variance accounts mapped to each variance.
                4. Last month's variance report explained line by line.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example for one product covering the main variances, and last month's variance report explained line by line."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the formula for each of the five main variances"
                - "Work one product's variances through by hand"
                - "Map each variance to the account your system posts it to"
                - "Explain last month's variance report to a colleague"
            - name: Absorbing production overheads into stock at normal capacity
              description: |-
                ## Purpose
                If you make what you sell, a share of factory overheads such as supervision, power, equipment depreciation and factory rent belongs in the cost of work in progress and finished goods. The rate should rest on normal production levels, so an idle month does not inflate the cost of the few units made. Getting the absorption basis right is often the largest single judgement in a manufacturer's stock value.

                ## Milestones
                1. Production overheads separated from selling and administration costs.
                2. Normal capacity agreed in machine or labour hours.
                3. An absorption rate per hour calculated and documented.
                4. Unabsorbed overhead in low-output months expensed rather than added to stock.

                ## Notes
                Keep this to production overheads carried in stock. Spreading head-office costs across departments is a separate exercise.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A documented overhead absorption rate based on normal capacity, with the treatment of unabsorbed overhead agreed with the accountant."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the overhead costs that relate to production"
                - "Agree normal capacity in hours with the production manager"
                - "Calculate the overhead absorption rate per hour"
                - "Ask your accountant how unabsorbed overhead should be treated"
            - name: Reading your system's inventory valuation report
              description: |-
                ## Purpose
                The valuation report is the document auditors ask for first, yet few people know which date, cost basis or location filter it is using. An hour spent learning its options, and saving a standard version, means everyone produces the same number from the same settings.

                ## Milestones
                1. Each filter and setting on the report understood: date, cost basis, locations, item status.
                2. A standard saved version created for month-end use.
                3. The report total matched to the general ledger for one month.
                4. A short guide written for the next person.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved standard valuation report and a short guide exist, and the report total has been matched to the ledger for one month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open the valuation report and list every filter and setting"
                - "Run it as at a past date and check it changes as expected"
                - "Save a standard month-end version of the report"
                - "Write a half-page guide on running it"
            - name: Gross profit and retail methods for estimating stock
              description: |-
                ## Purpose
                Between counts, many retailers estimate closing stock from sales and an expected margin, or from selling prices reduced by a cost ratio. These methods are quick, and the retail method is accepted in some sectors, but they hide shrinkage and markdowns when the ratios are stale. Knowing how they work tells you when an estimate is good enough and when only a count will do.

                ## Milestones
                1. The gross profit method worked through for one month.
                2. The retail method worked through for one department.
                3. Both estimates compared with an actual count.
                4. A rule written for when estimates may be used in management accounts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Both estimation methods worked through for one period and compared with a count, with a written rule on when to use them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate last month's closing stock with the gross profit method"
                - "Repeat for one department with the retail method"
                - "Compare both estimates with the latest count"
                - "Write down when an estimate is acceptable in monthly reporting"
            - name: Landed cost allocation for imported goods
              description: |-
                ## Purpose
                Importers often post freight, duty and clearance charges straight to expenses, so imported lines look cheaper than they are and margins swing with each shipment. Allocating landed costs to the items in each shipment, by value, weight or volume, puts the true cost into stock and later into cost of sales. Pick one basis per cost element and use it every time.

                ## Milestones
                1. Landed cost elements listed: freight, insurance, duty, clearance and port charges.
                2. An allocation basis chosen for each element.
                3. A shipment costing sheet or system function set up.
                4. Three recent shipments re-costed and the margin effect noted.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Landed costs allocated to items for every shipment received in one month, using a documented basis for each cost element."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pull the freight, duty and clearance bills for one recent shipment"
                - "Choose an allocation basis for each cost element"
                - "Set up a shipment costing sheet or the system's landed cost function"
                - "Re-cost three recent shipments and compare their margins"
            - name: Written provision matrix for slow and obsolete stock
              description: |-
                ## Purpose
                Provisions set by gut feel at year-end swing profit and invite audit challenge. A matrix that applies set percentages by age band and category, with room for named exceptions, produces the same answer whoever runs it, and it can be tested against what was actually written off in past years.

                ## Milestones
                1. Age bands and categories defined from the ageing report.
                2. Provision percentages for each band agreed with the accountant.
                3. The matrix back-tested against two years of actual write-offs.
                4. The matrix approved and added to the valuation policy.

                ## Notes
                Keep a short list of specific exceptions, such as a discontinued range, rather than bending the percentages to fit them.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved provision matrix, back-tested against two years of write-offs, is in the valuation policy and used at the next quarterly review."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export two years of stock write-offs with the age of each item"
                - "Draft age bands and provision percentages by category"
                - "Test the draft percentages against what was actually scrapped"
                - "Get the matrix approved by the accountant"
                - "Refresh the matrix percentages with the latest year of write-offs @recurring(yearly)"
            - name: Supplier rebates and settlement discounts in stock cost
              description: |-
                ## Purpose
                Volume rebates, retrospective discounts and early payment discounts reduce what stock really costs, but they often arrive months later as a credit note posted to other income. Deciding how each type reduces stock cost, and accruing rebates you are confident of earning, stops margins being understated all year and overstated in the month the money lands.

                ## Milestones
                1. Every rebate and discount agreement listed with its terms.
                2. Treatment of each type agreed: reduce stock cost, accrue, or recognise on receipt.
                3. A rebate accrual calculated for the current year.
                4. Rebate credit notes coded to the agreed account.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A rebate schedule lists every supplier agreement with its agreed accounting treatment and a current-year accrual."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect every supplier rebate and discount agreement"
                - "Agree with your accountant how each type affects stock cost"
                - "Calculate the rebate earned to date this year"
                - "Tell the payables team which account rebate credit notes go to"
            - name: Count variance root cause and remediation
              description: |-
                ## Purpose
                When counts keep disagreeing with the books, adjusting the figure every time treats the symptom. Grouping variances by cause, such as unrecorded scrap, picking errors, unit of measure mistakes or receipts booked late, usually reveals two or three fixable process gaps. Fixing those is what actually raises count accuracy.

                ## Milestones
                1. Variances from the last three counts grouped by cause.
                2. The top three causes each given an owner and a fix.
                3. Fixes in place and checked at the next cycle count.
                4. Count accuracy compared before and after.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The top three causes of count variances have owners and completed fixes, with accuracy measured before and after."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pull variances from the last three counts with their notes"
                - "Group them by cause and rank by value"
                - "Agree an owner and fix for each of the top three causes"
                - "Compare count accuracy one quarter after the fixes"
            - name: Bill of materials and routing accuracy for costing
              description: |-
                ## Purpose
                In a manufacturer, the bill of materials and routing decide what a finished item costs, so a missing component, a wrong scrap allowance or an outdated labour time flows straight into stock value. Testing the costliest bills against what the floor actually uses finds errors that standard cost variances only hint at.

                ## Milestones
                1. The 20 highest-value finished items selected.
                2. Each bill checked against actual component usage on recent production.
                3. Labour and machine times in routings compared with recorded times.
                4. Corrections loaded and the stock value impact noted.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Bills and routings for the 20 highest-value products checked against actual usage, with corrections loaded and their value impact recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the 20 finished items with the highest stock value"
                - "Compare each bill with actual material issued to recent jobs"
                - "Check routing times against recorded labour hours"
                - "Load corrections and note the change in standard cost"
            - name: Valuing customer returns and refurbished stock
              description: |-
                ## Purpose
                Returned goods are often put back into stock at full cost even when they are damaged, opened or out of season. Grading returns on arrival and valuing each grade, resaleable at cost, refurbishable at cost less rework, scrap at nil, keeps stock honest and shows what returns really cost the business.

                ## Milestones
                1. Return grades defined with a valuation rule for each.
                2. Receiving staff shown how to grade returns on arrival.
                3. Refurbishment costs captured against the items reworked.
                4. A month of returns valued by grade.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Return grades with valuation rules are in use, and one month of returns has been booked into stock by grade."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Define three or four return grades with the warehouse lead"
                - "Write the valuation rule for each grade"
                - "Show the receiving team how to grade returns"
                - "Review a month of graded returns and their values"
            - name: Stock valuation questions for your tax adviser
              description: |-
                ## Purpose
                Tax rules on stock can differ from the accounting: some tax authorities limit which cost formulas are allowed, treat general provisions differently from specific write-downs, or expect notice before a method change. Preparing the questions before the return is prepared, rather than at filing, gives your adviser time to answer and you time to act.

                ## Milestones
                1. Your current formula, provision approach and recent changes summarised in half a page.
                2. A list of questions on how each is treated for tax.
                3. Your adviser's answers recorded.
                4. Any follow-up, such as a notice or an adjustment, scheduled.

                ## Notes
                This organises the conversation. The tax treatment itself is your adviser's call.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your adviser's written answers on the tax treatment of your cost formula and provisions are filed with the year-end papers."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Summarise your cost formula and provision approach in half a page"
                - "Ask the agent to turn the summary into questions for your adviser"
                - "Send the questions before the year-end tax work starts"
                - "File the answers with the year-end papers"
            - name: Year-end stock count plan and count instructions
              description: |-
                ## Purpose
                A year-end count goes wrong in predictable ways: unclear areas, goods moving mid-count, sheets showing expected quantities and no recount rule. Written instructions issued two weeks ahead, with a map, teams, a freeze on movements and the cut-off documents to capture, make the count something your auditor can rely on.

                ## Milestones
                1. Count date, times and movement freeze agreed with operations.
                2. A site map with every count area numbered and assigned.
                3. Written instructions covering tags, blind counting, recounts and damaged goods.
                4. Cut-off document numbers to capture listed.
                5. Instructions sent to the auditor and the teams two weeks ahead.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "Written count instructions with a numbered area map are issued to teams and the auditor at least two weeks before the year-end count."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the count date and movement freeze with operations"
                - "Draw a site map with every count area numbered"
                - "Write the count instructions from the operational checklist template"
                - "Send the instructions to teams and the auditor two weeks ahead"
                - "Start planning the year-end count three months before year-end @recurring(yearly)"
            - name: Auditor attendance at the year-end count
              description: |-
                ## Purpose
                Where stock is material, auditors usually attend the count to observe procedures and take their own test counts. Knowing what they will ask for, and having it ready, avoids a qualified opinion or an expensive second visit. A named host who walks them round and logs their test counts makes the day smoother for both sides.

                ## Milestones
                1. The auditor's attendance date and requirements confirmed in writing.
                2. A host named to accompany the auditor.
                3. Auditor test counts logged and any differences resolved on the day.
                4. Copies of cut-off documents and count sheets provided as requested.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every auditor test count is logged and resolved on the day, and the requested count documents are handed over within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the auditor which documents they want on count day"
                - "Name a host to accompany the auditor"
                - "Log each auditor test count and its outcome"
                - "Send the requested count and cut-off copies within a week"
            - name: Post-count adjustments and sign-off
              description: |-
                ## Purpose
                Once the count is done, every difference between counted and book quantities needs investigating before the book figure changes, because many turn out to be timing or recording errors rather than real loss. Reconciling, approving and posting the adjustments within a week, with a summary for the finance lead, closes the count properly.

                ## Milestones
                1. All numbered count sheets returned and accounted for.
                2. Differences above the threshold investigated and explained.
                3. Adjustments approved and posted within a week of the count.
                4. A count summary showing adjustments by reason, signed off.
              priority: medium
              deadlineOffsetDays: 140
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Count adjustments are investigated, approved and posted within a week, with a signed summary of adjustments by reason."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check every numbered count sheet has come back"
                - "Investigate each difference above the agreed threshold"
                - "Post approved adjustments within a week of the count"
                - "Write the count summary and get it signed off"
            - name: Year-end inventory valuation pack
              description: |-
                ## Purpose
                Your accountant or auditor will want the same schedules every year: the valuation listing, the reconciliation to the ledger, the ageing and provision workings, net realisable value testing, cut-off evidence and count results. Assembling them in one indexed pack before fieldwork turns weeks of queries into a handful.

                ## Milestones
                1. Valuation listing reconciled to the trial balance at year-end.
                2. Provision and net realisable value workings with supporting data.
                3. Count results and cut-off evidence included.
                4. An index cross-referencing each schedule to the ledger.
                5. The pack delivered before fieldwork starts.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An indexed year-end inventory pack, reconciled to the trial balance, is delivered to the accountant or auditor before fieldwork begins."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the auditor for last year's inventory request list"
                - "Build an index of the schedules the pack will hold"
                - "Reconcile the year-end valuation listing to the trial balance"
                - "Deliver the pack before fieldwork starts"
            - name: Valuing damaged stock for an insurance claim
              description: |-
                ## Purpose
                After a flood, fire, break-in or a failed cold store, the insurer will want proof of what was lost and what it cost. Counting the damaged goods quickly, photographing them, valuing them from purchase records and keeping the remains until the loss adjuster agrees saves weeks of argument.

                ## Milestones
                1. Damaged goods counted and photographed before disposal.
                2. Quantities valued at cost from purchase invoices.
                3. The claim schedule agreed with the loss adjuster.
                4. The write-off and the insurance receivable posted correctly.

                ## Notes
                Check whether your policy insures stock at cost or at selling price before building the schedule, and ask your broker about anything unclear.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A claim schedule of damaged stock at cost, backed by photos and invoices, is agreed with the loss adjuster and the write-off is posted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find your insurance policy's basis for valuing stock"
                - "Count and photograph damaged goods before anything is thrown away"
                - "Value the losses from purchase invoices"
                - "Post the write-off and the agreed insurance receivable"
            - name: Retail shop stock valuation from till and purchase records
              description: |-
                ## Purpose
                Independent shops, cafés and market traders often have a till that records sales but no running stock system. Combining purchase invoices, a simple count each quarter and the till's sales by category gives a stock value good enough for the accounts, without buying new software or adding daily admin.

                ## Milestones
                1. Purchases grouped into the same categories as the till.
                2. A quarterly count valued at latest purchase cost.
                3. Cost of sales calculated as opening stock plus purchases less closing stock.
                4. Implied margins by category checked for signs of shrinkage.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two quarterly stock counts valued at cost, with cost of sales calculated by till category each quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Match purchase invoice categories to the till's sales categories"
                - "Count the shop at quarter-end and value it at latest cost"
                - "Calculate cost of sales by category for the quarter"
                - "Check each category's implied margin for signs of shrinkage"
            - name: Stock held at a third-party fulfilment warehouse
              description: |-
                ## Purpose
                Online sellers using a fulfilment warehouse or a marketplace's fulfilment service own stock they never see, and the provider's reports rarely agree with the seller's own records. Reconciling the provider's monthly inventory report with your books, including lost, damaged and reimbursed units, keeps both the stock figure and loss claims in order.

                ## Milestones
                1. The provider's monthly inventory and adjustment reports located.
                2. Units in, out, damaged and lost reconciled to your records each month.
                3. Reimbursements for lost units claimed and matched.
                4. Stock at the provider valued and included in month-end stock.

                ## Notes
                Start from the **Vendor** template to keep the provider's contacts, report locations and claim deadlines together.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of provider inventory reports reconciled to your records, with lost unit reimbursements claimed and matched."
                cadence: rolling
              tasks:
                - "Download the provider's latest inventory and adjustment reports"
                - "Reconcile provider unit counts to your stock records @recurring(monthly:8)"
                - "Claim reimbursement for lost or damaged units within the provider's deadline"
                - "Record the provider's claim rules on a vendor page"
            - name: Work in progress and finished goods for a small manufacturer
              description: |-
                ## Purpose
                Small manufacturers, bakers, brewers and workshops often value finished goods at material cost only and ignore work in progress altogether. Adding direct labour and a production overhead rate, and counting part-made batches at month-end, gives a stock value that meets the accounting standard and a cost per unit you can price from.

                ## Milestones
                1. Material, labour and overhead cost per unit calculated for main products.
                2. A method for valuing part-made batches by stage of completion.
                3. Work in progress counted and valued at one month-end.
                4. Finished goods revalued to full production cost.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Main products costed with material, labour and overhead, and work in progress counted and valued at one month-end."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the main products with their material cost per unit"
                - "Add direct labour per unit from recent production records"
                - "Agree how part-made batches will be valued by stage"
                - "Count and value work in progress at the next month-end"
            - name: Perishable and expiry-dated stock valuation
              description: |-
                ## Purpose
                Food, medicines, cosmetics and chemicals lose their value on a date rather than gradually. Tracking batches by expiry, selling first-expiring stock first, and marking down or writing off stock as it nears its date stops the accounts carrying goods that will be binned next month.

                ## Milestones
                1. Batch and expiry dates recorded for dated lines.
                2. A rule for markdown and write-off at set days before expiry.
                3. A weekly short-dated report reviewed by the manager.
                4. Expired stock written off in the month it expires.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly short-dated stock report is reviewed for two months and expired stock is written off in the month it expires."
                cadence: rolling
              tasks:
                - "Turn on batch and expiry tracking for dated lines"
                - "Agree days-before-expiry triggers for markdown and write-off"
                - "Review the short-dated stock report @recurring(weekly:thu)"
                - "Write off expired batches before month-end"
            - name: Inheriting an inventory balance as a new finance manager
              description: |-
                ## Purpose
                Stepping into a finance role at a stock-holding business means inheriting a balance sheet figure you did not build and will soon be asked to defend. Spending the first month on the policy, the last reconciliation, the provision workings, the last count and the audit points shows where the risks are before you sign anything.

                ## Milestones
                1. Valuation policy, last reconciliation and provision workings read.
                2. Last count results and the auditor's inventory points reviewed.
                3. The three biggest inventory risks written down, each with a proposed fix.
                4. Findings discussed with the finance director or owner.

                ## Notes
                Start from the **Onboarding 30/60/90** template if you are also settling into the wider role.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of the three biggest inventory risks with proposed fixes, discussed with the finance director within 30 days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask for the valuation policy, last reconciliation and provision workings"
                - "Read the inventory points in the last audit management letter"
                - "Walk the warehouse with the operations lead"
                - "Write the three biggest inventory risks and a fix for each"
            - name: Consistent costing across sites and warehouses
              description: |-
                ## Purpose
                Groups with several warehouses, shops or plants often find each site costs the same item differently, posts transfers at different values and provides for old stock by its own rules. Aligning cost formula, transfer values and provision rules across sites makes group stock figures comparable and the audit simpler.

                ## Milestones
                1. Each site's cost formula, transfer basis and provision rule compared.
                2. Differences ranked by their value impact.
                3. A group costing standard agreed and issued to every site.
                4. Inter-site transfers posted at cost, with goods in transit reconciled each quarter.

                ## Notes
                Transfers between separate companies in different countries raise transfer pricing and consolidation questions; keep this project to costing within the stock records.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A group costing standard is issued to every site, and inter-site goods in transit reconcile for two consecutive quarters."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask each site for its cost formula, transfer basis and provision rule"
                - "Rank the differences by their effect on stock value"
                - "Issue a group costing standard to site finance leads"
                - "Reconcile inter-site goods in transit across all sites @recurring(quarterly)"
            - name: Consignment stock agreements and accounting
              description: |-
                ## Purpose
                Under consignment, goods sit on a customer's premises or yours while ownership stays with the supplier until use or sale. Mistakes run both ways: your consigned goods at a customer's site vanish from your books, or a supplier's goods get counted as yours. Reviewing each agreement for when control passes, and holding the stock in separate locations, keeps both sides right.

                ## Milestones
                1. Every consignment agreement, inbound and outbound, listed with its control transfer point.
                2. Consigned stock tagged or held in separate system locations.
                3. Consignment stock correctly included or excluded at the last count.
                4. Monthly usage reports from consignees reconciled.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every consignment arrangement is listed with its control transfer point, and consigned stock sits in separate system locations."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find every agreement where stock is held on consignment"
                - "Note the point at which ownership passes in each"
                - "Move consigned stock to separate locations in the system"
                - "Reconcile consignee usage reports to your records @recurring(monthly:25)"
            - name: Period-end treatment of standard cost variances
              description: |-
                ## Purpose
                Standard costing is acceptable for reporting only if the result approximates actual cost, so when variances are large, part of them belongs in stock rather than all in the profit and loss account. Calculating how much of the year's variances relates to items still held, and agreeing a method with the auditor, keeps closing stock close to actual cost.

                ## Milestones
                1. Year-to-date variances split by type and product group.
                2. The share relating to stock still on hand estimated.
                3. A method for capitalising that share agreed with the auditor.
                4. The adjustment posted and its reversal planned for when standards reset.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented calculation of variances capitalised into closing stock, agreed with the auditor, is posted at year-end."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Total the year's variances by type and product group"
                - "Estimate the share relating to items still in stock"
                - "Agree a capitalisation method with your auditor"
                - "Post the adjustment and note when it will reverse"
            - name: Joint and by-product cost allocation
              description: |-
                ## Purpose
                Processors such as abattoirs, dairies, sawmills, refiners and juice makers produce several products from one input, and the cost of the shared process has to be split among them. Choosing a basis, physical units or relative sales value at the split-off point, and treating minor by-products consistently, decides the stock value of every output.

                ## Milestones
                1. Joint products and by-products identified for each process.
                2. Split-off points and joint costs per batch defined.
                3. An allocation basis chosen and documented.
                4. One month's production costed and compared with the current method.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented joint cost allocation basis is applied to one month's production and compared with the previous method."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map one process from input to each output it produces"
                - "Total the joint costs for a typical batch"
                - "Compare allocations by physical units and by sales value"
                - "Record the chosen basis and how by-products are treated"
            - name: Item cost change audit trail
              description: |-
                ## Purpose
                Anyone who can edit an item's standard or average cost can move the stock value with a keystroke. Restricting who can change costs, and reviewing a monthly report of every manual cost change with its reason, closes one of the quietest routes to a misstated balance sheet.

                ## Milestones
                1. Users with rights to edit item costs listed.
                2. Rights limited to named people, separate from those posting stock movements.
                3. A monthly report of manual cost changes showing old value, new value, user and reason.
                4. Each month's changes reviewed and initialled.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Cost edit rights are limited to named users, and every manual cost change for three months has been reviewed with its reason."
                cadence: rolling
              tasks:
                - "List every user who can edit item costs"
                - "Remove cost edit rights from anyone who does not need them"
                - "Review the month's manual item cost changes @recurring(monthly:18)"
                - "Ask for a reason on any cost change made without one"
---

# Inventory Costing & Valuation

This area is for anyone whose accounts carry stock: an owner valuing a shop or small workshop, a finance manager answerable for the inventory line, or an enterprise team running costing across several sites. It starts with the foundations (a written valuation policy, the cost formula, a clean item master, a posting map, a ledger tie-out and a first full count), moves to the routines of reconciliation, cycle counts, cut-off, obsolescence and net realisable value reviews, then the accounting skills behind them, improvements such as landed costs and a provision matrix, the year-end count and valuation pack, situations for retailers, online sellers, small manufacturers and new managers, and finally specialist work on consignment, variance capitalisation and joint costs.

What repeats is a weekly exceptions sweep and cycle count, a monthly reconciliation alongside goods received not invoiced, cut-off, adjustment, variance, shrinkage and cost change reviews, quarterly obsolescence and net realisable value tests, and a yearly standard cost roll, provision refresh and count plan. The Operational checklist, Metrics log, Meeting notes, Remediation plan, Vendor and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
