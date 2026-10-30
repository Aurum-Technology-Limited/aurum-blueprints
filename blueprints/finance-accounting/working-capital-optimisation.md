---
id: finance-accounting.working-capital-optimisation
name: Working Capital Optimisation
description: "A measured cash conversion cycle, registers of real customer and supplier terms, stock cover by product, and the monthly routines and term, stock and finance decisions that free cash from the balance sheet."
category: business
version: 1.0.0
tags: [finance-accounting, working-capital-optimisation, small-business, manager, enterprise, cash-conversion-cycle, payment-terms, stock-cover]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - vendor
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Working Capital Optimisation
          description: "Improving the cash tied up in stock, debtors and creditors through better terms and processes, for owners and finance leads short on cash."
          projects:
            - name: Cash conversion cycle baseline
              description: |-
                ## Purpose
                Working capital conversations go round in circles until everyone is looking at the same three numbers: debtor days, stock days and creditor days, and the cycle they add up to. Calculating them from the last twelve months of accounts, month by month, shows how many days of trading your cash is locked up for and which of the three levers is doing the most damage.

                ## Milestones
                1. Debtor days, stock days and creditor days calculated for each of the last twelve month ends.
                2. The cash conversion cycle in days worked out for each month and plotted as a simple line.
                3. The cash value of one day of each metric written beside it, so a day saved has a price.
                4. The single biggest lever named, with one sentence on why.

                ## Notes
                Use the same method every time. If sales are seasonal, the count-back method for debtor days gives a truer picture than a simple annual average.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month table of debtor, stock and creditor days with the cash conversion cycle and the cash value of one day for each metric."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export twelve month-end balance sheets and monthly sales and cost of sales"
                - "Calculate debtor, stock and creditor days for each month end"
                - "Work out what one day of sales and one day of purchases is worth in cash"
                - "Name the lever with the most days to gain and note why"
            - name: Map of where cash is tied up on the balance sheet
              description: |-
                ## Purpose
                Debtors, stock and creditors are the headline, but cash also hides in unbilled work, supplier prepayments, deposits paid, retentions held by customers and VAT reclaims waiting to be filed. A one-page map of every current asset and liability, with its balance and who controls it, stops the programme fixating on one line while a bigger one sits untouched.

                ## Milestones
                1. Every current asset and current liability line listed with its balance at the last month end.
                2. Each line tagged with the team or person whose decisions drive it.
                3. Lines worth more than one week of sales highlighted as candidates for action.
                4. The map shared with the people named on it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page map listing every working capital balance, its owner and whether it exceeds one week of sales, shared with those owners."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every current asset and liability from the last balance sheet"
                - "Write the owner next to each line, from sales to purchasing to projects"
                - "Highlight any balance bigger than one week of sales"
                - "Send the map to each owner with a short note on why it matters"
            - name: Working capital metric definitions sheet
              description: |-
                ## Purpose
                Sales measure overdue debt one way, the bank another and the board pack a third, so every meeting starts with an argument about whose number is right. Writing one definition per metric, with its formula, data source and timing, lets targets and incentives be set without anyone gaming the arithmetic.

                ## Milestones
                1. One written formula each for debtor days, stock days, creditor days and the cash conversion cycle.
                2. The data source and the date the figure is taken recorded for each metric.
                3. Rules agreed for edge cases such as credit balances, goods in transit and disputed bills.
                4. The sheet approved by the finance lead and stored where every report author can find it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved definitions sheet covering at least four working capital metrics, each with formula, source, timing and edge-case rules."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect the working capital figures from the board pack, bank reports and sales reports"
                - "Write one formula and one data source for each metric"
                - "Decide how credit balances, goods in transit and disputed bills are treated"
                - "Get the finance lead to approve the sheet and file it with the reports"
            - name: Cash release target and executive sponsor
              description: |-
                ## Purpose
                Without a number and a named owner, working capital work becomes a side task that loses every argument with sales volume. Agreeing a cash release target in money and days, with a deadline and a sponsor senior enough to settle disputes between sales, purchasing and operations, turns the baseline into a commitment.

                ## Milestones
                1. A target written in both cash and days, for example forty days off the cycle within twelve months.
                2. The target split across debtors, stock and creditors.
                3. A sponsor named who can overrule a team that blocks a change.
                4. The target and sponsor recorded in the leadership meeting minutes.

                ## Notes
                Set the target from the baseline, not from a benchmark you have not checked. A modest target that is hit builds more trust than an ambitious one that is quietly dropped.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A cash release target in money and days, split by lever, with a named sponsor, minuted at a leadership meeting."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a target in cash and days from the cycle baseline"
                - "Split the target between debtors, stock and creditors"
                - "Ask the most senior person who can settle cross-team disputes to sponsor it"
                - "Present the target and sponsor at the next leadership meeting for sign-off"
            - name: Order-to-cash timeline with delay points
              description: |-
                ## Purpose
                Cash from a sale is often late before the invoice is even raised: orders wait for credit checks, deliveries wait for paperwork, and invoices wait for a proof of delivery. Walking five real orders from order to cash and timing each step shows which days are lost inside your own walls and which are the customer's.

                ## Milestones
                1. Five recent orders traced from order date to cash received, with a date for every step.
                2. Days split into internal delay, invoice terms and customer lateness.
                3. The three longest internal delays named with the team that owns each one.
                4. A one-page timeline shared with sales, operations and finance.

                ## Notes
                Pick ordinary orders, not disasters. The aim is to see the normal process, where most of the days are lost.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five orders timed step by step from order to cash, with internal delay separated from terms and the three longest delays assigned to owners."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick five ordinary orders from last month across different customers"
                - "Find the date of each step from order to cash in the systems"
                - "Split the days into internal delay, terms and customer lateness"
                - "Share the timeline and the three longest delays with their owners"
            - name: Procure-to-pay timeline and payment timing
              description: |-
                ## Purpose
                Many businesses pay suppliers well before they need to, because a bill is approved the day it arrives and the next payment run sends it. Tracing ten supplier bills from purchase order to payment, and comparing the pay date with the due date, shows whether creditor days are low through policy, habit or supplier pressure.

                ## Milestones
                1. Ten bills traced from purchase order to payment with every date recorded.
                2. Days paid before or after the due date calculated for each bill.
                3. The reasons for early payment noted, such as habit, a supplier request or a discount.
                4. A short finding written on how many days could be gained by paying on the due date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten supplier bills traced with pay date against due date, and the days available from paying on time written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull ten paid bills from different suppliers over the last quarter"
                - "Record the order, invoice, due and payment dates for each one"
                - "Work out how many days early or late each bill was paid"
                - "Write a one-paragraph finding on the days available"
            - name: Customer payment terms register
              description: |-
                ## Purpose
                Standard terms on the website rarely match what customers really have: a big account negotiated sixty days, a salesperson promised end of month plus thirty, and an old customer has never been asked. A register of every active customer's contractual terms beside the days they actually pay shows how much of the debtor book is a terms problem and how much is a collection problem.

                ## Milestones
                1. Every customer billed in the last twelve months listed with their contractual terms.
                2. Average days to pay for each customer calculated from the last six months.
                3. Customers on non-standard terms flagged, with who agreed them and where it is written.
                4. The twenty largest balances sorted by the gap between terms and actual payment.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register of all active customers showing contractual terms, actual average days to pay and who approved any non-standard terms."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export all customers billed in the last year with their terms field"
                - "Check the terms of the twenty largest customers against their signed contracts"
                - "Add each customer's actual average days to pay"
                - "Refresh the register and flag any new non-standard terms @recurring(yearly)"
            - name: Supplier payment terms register
              description: |-
                ## Purpose
                Creditor days are the one working capital lever that releases cash without touching a customer, but only if you know what each supplier has agreed. Recording the terms of every supplier above a spend threshold, alongside annual spend and whether they offer a discount, gives purchasing a ranked list of where longer terms are worth the conversation.

                ## Milestones
                1. Every supplier with spend above an agreed threshold listed with annual spend.
                2. Contractual terms and actual days paid recorded for each one.
                3. Suppliers flagged where terms are shorter than the industry norm you have checked.
                4. The list ranked by the cash value of ten extra days with each supplier.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A supplier register covering all spend above the threshold with terms, actual days paid and the cash value of ten extra days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set a spend threshold that covers about 80 percent of purchases"
                - "List every supplier above it with annual spend and terms"
                - "Calculate what ten extra days with each supplier would release"
                - "Update spend and terms in the supplier register @recurring(yearly)"
            - name: Stock cover baseline by product line
              description: |-
                ## Purpose
                One stock days figure hides the truth: fast lines may be close to running out while a tail of slow products holds months of cover. Calculating weeks of cover for every product line from current stock and recent sales shows exactly where cash sits on shelves and which lines to work on first.

                ## Milestones
                1. Stock on hand at cost listed for every product or product line.
                2. Average weekly usage over the last thirteen weeks calculated for each line.
                3. Weeks of cover worked out and grouped into under four, four to twelve, and over twelve weeks.
                4. The value of stock above twelve weeks of cover totalled.

                ## Notes
                Use cost, not sales price. If your system cannot show usage by line, start with the top fifty products by value and add the rest later.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Weeks of cover calculated for every stocked line, with the total cost value of stock above twelve weeks of cover recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export stock on hand at cost by product from the stock system"
                - "Export thirteen weeks of sales or usage by product"
                - "Calculate weeks of cover for each line and group them into three bands"
                - "Total the cost value of stock held above twelve weeks of cover"
            - name: Monthly working capital dashboard
              description: |-
                ## Purpose
                Gains in working capital fade quietly unless someone looks at the numbers every month. A one-page dashboard with the cycle, each of its three parts, overdue debt, stock over twelve weeks and cash released against target lets leadership see in two minutes whether the programme is working.

                ## Milestones
                1. A dashboard with the cash conversion cycle, its three parts and cash released against target.
                2. Figures calculated from the definitions sheet, not rebuilt from scratch each month.
                3. A one-line comment on the biggest movement included every month.
                4. Twelve consecutive months of the dashboard on file.

                ## Notes
                Start from the **Metrics log** template. Keep it to one page; detail belongs in the project trackers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly dashboards, each showing the cycle, its three parts, cash released and one comment on the biggest movement."
                cadence: rolling
              tasks:
                - "Set up the dashboard from the metrics log template using the defined metrics"
                - "Update the dashboard from the month-end balance sheet @recurring(monthly:8)"
                - "Write one line on the biggest movement since last month"
                - "Send the dashboard to the sponsor and the lever owners"
            - name: Weekly cash and stock huddle with operations and sales
              description: |-
                ## Purpose
                Most working capital decisions are made outside finance: a buyer placing a large order, a salesperson agreeing terms, a warehouse holding goods for a customer who has not paid. Fifteen minutes a week with the people making those calls, looking at the biggest overdue balances, the biggest open purchase orders and stock that has not moved, catches problems while they are still cheap.

                ## Milestones
                1. A fixed fifteen-minute slot each week with sales, purchasing, operations and finance.
                2. A standing agenda of three lists: top overdue balances, top open orders and stock with no movement.
                3. Actions recorded with an owner and checked at the next huddle.
                4. Twelve huddles held in a quarter with fewer than two missed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten weekly huddles held each quarter, each with three standing lists reviewed and actions assigned."
                cadence: rolling
              tasks:
                - "Invite sales, purchasing and operations leads to a fifteen-minute weekly slot"
                - "Prepare the three standing lists before the meeting"
                - "Run the cash and stock huddle and record actions with owners @recurring(weekly:tue)"
            - name: Delivery-to-invoice lag tracking
              description: |-
                ## Purpose
                Every day between finishing work and sending the invoice is a day added to the cycle that no customer caused. Measuring the gap each month, by team or job type, shows whether billing is waiting for timesheets, delivery notes or a manager's approval, and makes unbilled work visible before it ages.

                ## Milestones
                1. Average days from delivery or completion to invoice measured for the last month.
                2. The figure split by team, branch or job type.
                3. A list of completed but unbilled work over seven days old produced each month.
                4. Average lag cut by a target number of days and held for three months.

                ## Notes
                This project measures the lag and chases its causes. How invoices are built and sent belongs with your invoicing process.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly figure for average days from delivery to invoice, split by team, with the unbilled list over seven days reviewed each month."
                cadence: rolling
              tasks:
                - "Find where delivery or completion dates are recorded for each job type"
                - "Calculate last month's average days from delivery to invoice"
                - "List completed but unbilled work older than seven days @recurring(monthly:4)"
                - "Ask the owner of the longest lag what is holding invoices back"
            - name: Pay-on-due-date discipline check
              description: |-
                ## Purpose
                Payment policies that say pay on the due date are only worth something if payment runs follow them. A monthly check of bills paid more than five days early, with the reason for each, shows whether creditor days are slipping through habit, supplier pressure or approvals that release payments too soon.

                ## Milestones
                1. A written rule that bills are paid on or just before the due date, unless an exception is approved.
                2. A monthly report of bills paid more than five days early.
                3. Each early payment given a reason: discount taken, supplier request, approved exception or error.
                4. Early payments without a reason cut to fewer than five a month.

                ## Notes
                Paying late is not the goal. Paying on time, not early, keeps supplier goodwill and still protects the cycle.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly checks of early payments, each giving a reason for every bill paid more than five days before its due date."
                cadence: rolling
              tasks:
                - "Write the pay-on-due-date rule and the approved exceptions"
                - "Run a report of bills paid more than five days early @recurring(monthly:20)"
                - "Record a reason against each early payment on the report"
                - "Raise repeated early payments with whoever runs the payment runs"
            - name: Monthly excess and slow stock review
              description: |-
                ## Purpose
                Stock that has not moved for three months rarely starts moving on its own, and every month it sits it costs storage, insurance and the risk of becoming worthless. A monthly review of lines above twelve weeks of cover, with a decision on each, keeps the tail short and stops buyers reordering what is already sitting there.

                ## Milestones
                1. A monthly list of lines above twelve weeks of cover, ranked by value.
                2. Each line given a decision: hold, stop reordering, promote, return or clear.
                3. Reorder flags in the system switched off for lines marked stop reordering.
                4. The value of stock above twelve weeks lower after six months than at the baseline.

                ## Notes
                Valuation write-downs are an accounting decision for whoever owns stock valuation. This review is about cash and purchasing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly reviews completed, each recording a decision for every line above twelve weeks of cover, with the total value trending down."
                cadence: rolling
              tasks:
                - "Rank lines over twelve weeks of cover by value and decide each one @recurring(monthly:15)"
                - "Switch off reordering for lines marked stop"
                - "Send the clear and return list to sales and purchasing"
            - name: Purchase order check against stock cover
              description: |-
                ## Purpose
                The cheapest stock to reduce is the stock you never buy. A short weekly look at open and proposed purchase orders against current cover catches the order that would take a line from six weeks of cover to twenty, before the supplier ships it.

                ## Milestones
                1. A cover limit agreed per product group, above which a purchase order needs a second approval.
                2. A weekly report of proposed orders that would push cover over the limit.
                3. Each flagged order approved, cut back or cancelled with a reason.
                4. The number of orders breaching the limit tracked for three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly purchase order check against agreed cover limits, run for twelve weeks, with a decision recorded on every flagged order."
                cadence: rolling
              tasks:
                - "Agree a weeks of cover limit for each product group with purchasing"
                - "Review proposed purchase orders that breach the cover limit @recurring(weekly:thu)"
                - "Record whether each flagged order was approved, cut or cancelled"
                - "Count the breaches each month and share the trend with purchasing"
            - name: Quarterly terms compliance audit
              description: |-
                ## Purpose
                Terms drift: a new customer is set up on sixty days by mistake, a supplier's system starts demanding payment in fourteen, a salesperson extends a deadline as a favour. A quarterly sample of new accounts, changed terms and invoices against contracts catches the drift before it settles into the cycle.

                ## Milestones
                1. A sample of new customers and suppliers set up in the quarter checked against approved terms.
                2. Every change to terms in the quarter checked for written approval.
                3. Mismatches corrected in the system and in the registers.
                4. A short audit note filed each quarter with the number of exceptions found.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly audit notes in a year, each recording sample size, exceptions found and corrections made."
                cadence: rolling
              tasks:
                - "Export new accounts and terms changes from the last quarter @recurring(quarterly)"
                - "Check each one against its contract or approval email"
                - "Correct mismatches in the system and the terms registers"
                - "File a short note with the exceptions found"
            - name: Cash release initiative tracker
              description: |-
                ## Purpose
                Every working capital programme is a portfolio of small changes: a customer moved to thirty days, a supplier moved to sixty, a product line cleared. Tracking each initiative with an owner, an expected cash figure and the cash actually released shows which changes delivered and keeps the total honest against the target.

                ## Milestones
                1. A tracker listing every initiative with owner, lever, expected cash and due date.
                2. Released cash measured from balances, not estimated, for each completed initiative.
                3. Stalled initiatives flagged to the sponsor each month.
                4. Total released cash reconciled to the movement in the dashboard each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tracker with every initiative, its owner and measured cash released, reconciled to the dashboard at least once a quarter."
                cadence: rolling
              tasks:
                - "Build a tracker with owner, lever, expected cash and due date columns"
                - "Add every initiative already under way"
                - "Update released cash and flag stalled initiatives @recurring(monthly:25)"
                - "Reconcile released cash to the dashboard movement at quarter end"
            - name: Quarterly working capital report to leadership
              description: |-
                ## Purpose
                Monthly dashboards show movement; a quarterly report explains it and asks for decisions. Two pages on progress against the target, the initiatives that worked, the ones that stalled and the cross-team calls only leadership can make keeps working capital on the agenda between budget rounds.

                ## Milestones
                1. A two-page report each quarter covering target, progress and decisions needed.
                2. At least one decision requested and minuted at each quarterly meeting.
                3. Decisions from the previous quarter followed up in the next report.
                4. Four reports delivered in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly reports presented in a year, each with at least one minuted decision and a follow-up on the previous quarter's decisions."
                cadence: rolling
              tasks:
                - "Ask the agent to draft the quarterly report from the dashboard and tracker"
                - "Write the decisions you need from leadership at the top"
                - "Present the report and minute the decisions taken @recurring(quarterly)"
            - name: Working capital assumptions in the annual budget
              description: |-
                ## Purpose
                Budgets that plan profit but assume debtors, stock and creditors stay flat produce cash plans that are wrong by month three. Setting debtor, stock and creditor days targets as budget assumptions each year, agreed with the teams who drive them, makes the cash side of the budget a commitment rather than a guess.

                ## Milestones
                1. Day targets for debtors, stock and creditors proposed from this year's actuals and the release target.
                2. Each target agreed with the team that controls it.
                3. The targets built into the balance sheet and cash flow of the budget.
                4. Targets reviewed against actuals at the half year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Agreed debtor, stock and creditor day targets built into the budget balance sheet, with a half-year review recorded."
                cadence: cyclic
              tasks:
                - "Propose next year's day targets from this year's actuals @recurring(yearly)"
                - "Agree each target with the sales, purchasing or operations lead"
                - "Send the agreed day targets to whoever builds the budget"
                - "Compare actual days with the targets at the half year"
            - name: How the cash conversion cycle really works
              description: |-
                ## Purpose
                Owners often know a business is short of cash without being able to say why, because profit and cash move on different clocks. Learning how debtor days, stock days and creditor days combine, with worked examples from your own numbers, makes every later decision on terms and stock easier to judge.

                ## Milestones
                1. The formula for each of the three metrics written out and explained in your own words.
                2. A worked example showing how ten days off stock changes cash, using your own figures.
                3. The difference between profit, cash and working capital explained in a short note.
                4. The note shared with one colleague who is not in finance, and their questions answered.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page explainer of the cycle with a worked example from your own figures, tested on one non-finance colleague."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read one plain-language guide to the cash conversion cycle"
                - "Work through the three formulas with last month's balance sheet"
                - "Write a one-page explainer with a worked example from your figures"
                - "Walk a non-finance colleague through the explainer and note their questions"
            - name: Reading a balance sheet for working capital warning signs
              description: |-
                ## Purpose
                Trouble usually shows on the balance sheet months before it reaches the bank balance: debtors growing faster than sales, stock rising while sales fall, creditors stretching because cash is tight. Practising on three years of your own balance sheets teaches you to spot the patterns early and ask the right question.

                ## Milestones
                1. Three years of year-end balance sheets set side by side with sales and cost of sales.
                2. Growth in debtors, stock and creditors compared with growth in sales.
                3. Three warning signs from your own history identified with the year they appeared.
                4. A short checklist of warning signs written for future month ends.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of warning signs found in three years of your own balance sheets, turned into a month-end checklist."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Gather three years of year-end balance sheets and income statements"
                - "Compare the growth in debtors, stock and creditors with sales growth"
                - "Note each year where a balance grew much faster than sales"
                - "Turn what you found into a short month-end warning checklist"
            - name: Negotiating payment terms with suppliers and customers
              description: |-
                ## Purpose
                Terms are negotiated far less often than prices, and the people who negotiate them rarely know what a day is worth. Practising how to ask for longer supplier terms or shorter customer terms, what to offer in return, and when to walk away prepares buyers and account managers for conversations they usually avoid.

                ## Milestones
                1. The cash value of ten days with your top five suppliers and customers worked out before any talks.
                2. A list of things you can offer in return, such as volume, forecasts, faster approvals or a longer contract.
                3. Two role-play conversations held, one with a supplier and one with a customer.
                4. A one-page negotiation guide written for buyers and account managers.

                ## Notes
                Long terms imposed on small suppliers can break them and may breach prompt payment rules in some countries. Check the rules where you trade before asking.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page terms negotiation guide with the value of a day and a list of trade-offs, used in two practice conversations."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate what ten days is worth with your top five suppliers and customers"
                - "List what you could offer in exchange for better terms"
                - "Run a role-play terms conversation with a colleague playing the other side"
                - "Write a one-page guide for buyers and account managers"
            - name: Reorder points, safety stock and order quantities
              description: |-
                ## Purpose
                Most stock problems come from reorder settings that were guessed once and never revisited. Learning how reorder points, safety stock and order quantities are calculated from lead time and demand lets you challenge the settings in your system instead of accepting the buyer's instinct.

                ## Milestones
                1. The meaning of lead time, demand variability, safety stock and reorder point written down.
                2. Reorder points recalculated by hand for five of your products.
                3. Your calculated figures compared with the settings in your stock system.
                4. The differences explained and the largest one raised with purchasing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Reorder points recalculated for five real products and compared with system settings, with the largest gap raised with purchasing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Study a short introduction to reorder points and safety stock"
                - "Collect lead times and weekly demand for five products"
                - "Calculate reorder points and compare them with the system settings"
                - "Raise the largest gap with the buyer responsible for that product"
            - name: Trade finance options explained
              description: |-
                ## Purpose
                Invoice discounting, factoring, supply chain finance, stock finance and trade credit insurance are pitched to every growing business, often by people paid on volume. Understanding how each works, what it costs and what it does to customer and supplier relationships lets you judge an offer instead of being sold one.

                ## Milestones
                1. A one-line description of at least five trade finance products.
                2. The typical cost elements of each listed: fees, interest, minimum terms and exit charges.
                3. Notes on who each product suits and what the customer or supplier sees.
                4. A comparison table filed for use in later finance decisions.

                ## Notes
                This is a learning project, not a recommendation. Take advice from your accountant or a finance broker who explains their fees before signing anything.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table covering at least five trade finance products with their cost elements and who they suit."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the trade finance products you have been offered or heard of"
                - "Find a neutral guide to each from a business support body or bank"
                - "Fill in a table with cost elements and who each product suits"
                - "Ask your accountant which ones are common in your sector"
            - name: Why profitable growth can run out of cash
              description: |-
                ## Purpose
                A business growing at thirty percent a year can run out of money while every month shows a profit, because each new sale needs stock and debtors funded before the customer pays. Modelling how much cash each extra unit of sales absorbs tells owners how fast they can grow from their own cash and when they need funding first.

                ## Milestones
                1. The working capital needed per extra unit of monthly sales calculated from your cycle.
                2. A simple model showing cash absorbed at growth rates of ten, twenty and forty percent.
                3. The growth rate your current cash and facilities can fund identified.
                4. The finding written in one paragraph for the owner or board.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A model showing cash absorbed at three growth rates and the maximum self-funded growth rate, summarised in one paragraph."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Work out the working capital tied up per unit of monthly sales"
                - "Model cash absorbed at ten, twenty and forty percent growth"
                - "Compare the result with your cash and agreed facilities"
                - "Write one paragraph on how fast you can grow without new funding"
            - name: True annual cost of an early payment discount
              description: |-
                ## Purpose
                Two percent off for paying in ten days instead of thirty sounds small, but it is worth roughly thirty-six percent a year. Learning to convert any discount into an annual rate, and comparing it with your own cost of borrowing, settles whether to offer discounts to customers or take them from suppliers.

                ## Milestones
                1. The formula for the annualised cost of a settlement discount written down with a worked example.
                2. Every discount currently offered or received converted into an annual rate.
                3. Each rate compared with your overdraft or facility rate.
                4. A short note on which discounts are worth it and which are not.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every current settlement discount converted to an annual rate and compared with your cost of borrowing in a written note."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write out the annualised discount formula with one worked example"
                - "List every settlement discount you offer or are offered"
                - "Convert each one into an annual rate"
                - "Compare each rate with your borrowing rate and note the verdict"
            - name: Standard payment terms for new customer contracts
              description: |-
                ## Purpose
                Every non-standard term agreed today is a debtor day you carry for the life of the customer. Setting one standard for new contracts, with a short list of approved exceptions and who can grant them, stops terms being given away to close a deal and makes sales discuss price and terms together.

                ## Milestones
                1. A standard term agreed for new customers, with any deposit or stage payment rules.
                2. A written exception list stating who can approve longer terms and up to what limit.
                3. Contract templates, quote templates and the customer set-up form updated.
                4. Sales briefed and the first month of new accounts checked for compliance.

                ## Notes
                Credit vetting and credit limits for new customers belong with your credit risk process. This project sets the terms themselves.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A standard term and exception rules approved, written into contract and quote templates, with the first month of new accounts checked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Propose a standard term from the customer terms register"
                - "Write who can approve exceptions and up to what limit"
                - "Update the contract, quote and customer set-up templates"
                - "Brief the sales team on the standard and the exception route"
            - name: Terms extension with the top twenty suppliers
              description: |-
                ## Purpose
                Twenty suppliers usually account for most of your purchases, and moving them from thirty to forty-five or sixty days can release more cash than any other single change. A planned round of conversations, prepared supplier by supplier with what you can offer in return, gets longer terms agreed in writing without damaging relationships you depend on.

                ## Milestones
                1. The top twenty suppliers ranked by the cash value of extra days, with each one's size and dependence on you noted.
                2. A target term and a fallback agreed for each supplier.
                3. Conversations held with at least fifteen of the twenty.
                4. New terms confirmed in writing and updated in the system and register.

                ## Notes
                Start from the **Vendor** template for each supplier. Leave small or financially fragile suppliers out, or check their position first.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least fifteen of the top twenty suppliers approached, with every agreed term change confirmed in writing and updated in the system."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Rank the top twenty suppliers by the cash value of fifteen extra days"
                - "Set a target term and a fallback for each supplier"
                - "Book the first five terms conversations with buyers present"
                - "Confirm each agreed term in writing and update the system"
            - name: Deposits and stage payments on large orders
              description: |-
                ## Purpose
                Custom builds, large projects and made-to-order goods often tie up materials and labour for weeks before an invoice can go out. A deposit and stage payment policy for orders above a threshold puts part of the cash in before you spend it and filters out customers who were never serious.

                ## Milestones
                1. A threshold set above which a deposit is required.
                2. Deposit and stage percentages agreed for each order type.
                3. Quotes and order confirmations updated to show the payment schedule.
                4. The first five qualifying orders taken on the new terms.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written deposit and stage payment policy for orders above a set threshold, applied to the next five qualifying orders."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the order types where you spend cash before you can invoice"
                - "Set a threshold and deposit percentage for each type"
                - "Add the payment schedule to quotes and order confirmations"
                - "Check the next five large orders were taken with a deposit"
            - name: Range rationalisation to release stock cash
              description: |-
                ## Purpose
                Products sold only a few times a year often hold a third of the stock value and almost none of the margin. Ranking every line by sales, margin and stock held, and deciding which to delist, replace with order-to-demand or keep, cuts stock for good rather than for one quarter.

                ## Milestones
                1. Every line ranked by sales value, gross margin and stock value.
                2. Lines in the bottom tail listed with the cash they hold.
                3. A decision recorded for each tail line: keep, make to order, delist or replace.
                4. Delisted lines removed from reorder and the stock run down or cleared.

                ## Notes
                Check with sales before delisting anything a key customer buys with their other orders. Losing a small line can cost a large account.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision recorded for every tail line, with delisted lines removed from reorder and the cash they held measured."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Rank all lines by sales, margin and stock value in one sheet"
                - "Mark the tail that holds stock but little sales or margin"
                - "Agree a keep, make to order, delist or replace decision with sales"
                - "Remove delisted lines from automatic reordering"
            - name: Excess and obsolete stock clearance for cash
              description: |-
                ## Purpose
                Stock that will never sell at full price is worth more as cash today than as an asset on the balance sheet next year. A clearance plan for the lines identified in the stock review, using returns to suppliers, bundles, trade sales and clearance channels, turns dead stock into money and frees warehouse space.

                ## Milestones
                1. A list of lines to clear with quantity, cost and an estimated recovery value.
                2. A route chosen for each line: supplier return, bundle, trade buyer, clearance sale or disposal.
                3. Floor prices approved before any clearance sale.
                4. Cash recovered and stock cleared recorded against the plan.

                ## Notes
                Agree the accounting treatment of any loss with whoever prepares your accounts before the sale, not after.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every line on the clearance list sold, returned or disposed of within ninety days, with cash recovered recorded against estimate."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the lines to clear with quantity, cost and a likely recovery value"
                - "Ask key suppliers whether they will take back unopened stock"
                - "Get floor prices approved before listing anything for sale"
                - "Record the cash recovered for each cleared line"
            - name: Invoice finance or factoring decision
              description: |-
                ## Purpose
                When customers insist on long terms, invoice finance can turn sent invoices into cash within days, but fees, minimum terms and notice periods vary widely and the choice is hard to undo. Comparing at least three offers on total annual cost, contract length and what customers will see leads to a decision you can defend, including the decision not to use it.

                ## Milestones
                1. The cash gap invoice finance would need to cover written down.
                2. Quotes from at least three providers compared on fees, interest, minimum term, exit charges and customer visibility.
                3. The total annual cost compared with an overdraft or other borrowing.
                4. A decision recorded: proceed with one provider, or not to proceed, with reasons.

                ## Notes
                Start from the **Purchase decision** template. Read the exit and notice clauses with your accountant or adviser before signing.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three invoice finance quotes compared on total annual cost and terms, with a written proceed or decline decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down the cash gap and how long you expect it to last"
                - "Request quotes from three invoice finance providers"
                - "Compare total annual cost, minimum term and exit charges side by side"
                - "Review the monthly cost of the facility if you sign @recurring(monthly:12)"
            - name: Supply chain finance programme assessment
              description: |-
                ## Purpose
                Larger buyers can offer suppliers early payment through a bank or platform while paying the bank on longer terms, which extends creditor days without squeezing suppliers. Assessing whether a programme fits your supplier base, what it costs and how auditors and lenders will see it prevents a scheme that looks clever and causes trouble later.

                ## Milestones
                1. Suppliers who would benefit identified by spend and terms.
                2. Two or three providers or bank programmes compared on cost to suppliers and set-up effort.
                3. The accounting and disclosure questions raised with your auditor in writing.
                4. A go or no-go recommendation presented to the finance lead.

                ## Notes
                Rating agencies and auditors look closely at these programmes. Get the accounting view before you commit.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recommendation on supply chain finance with provider comparison and the auditor's written view on accounting treatment."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List suppliers with large spend who would value early payment"
                - "Ask two banks or platforms how their programmes work and what they cost"
                - "Send your auditor the accounting and disclosure questions in writing"
                - "Present a go or no-go recommendation to the finance lead"
            - name: Supplier early payment discount policy
              description: |-
                ## Purpose
                Some settlement discounts are worth more than any return your cash could earn, and others quietly cost you creditor days for little gain. A written policy that says which discounts to take, based on their annual rate against your borrowing cost, stops the payment run deciding by habit.

                ## Milestones
                1. Every supplier offering a settlement discount listed with its terms.
                2. A hurdle rate agreed: discounts above it are taken, those below are not.
                3. Suppliers flagged in the payment system as take or ignore.
                4. Discounts taken in the next quarter totalled against the policy.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written discount policy with a hurdle rate, every discounting supplier flagged, and a quarter's discounts taken totalled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every supplier that offers a settlement discount"
                - "Agree a hurdle rate with the finance lead"
                - "Flag each supplier as take or ignore in the payment system"
                - "Total the discounts taken at the end of the next quarter"
            - name: Minimum order quantity and lead time renegotiation
              description: |-
                ## Purpose
                High minimum order quantities and long lead times force you to hold far more stock than demand needs. Asking key suppliers for smaller drops, shorter lead times or split deliveries can cut stock on fast lines by weeks, often in exchange for a firm forecast rather than a higher price.

                ## Milestones
                1. Lines where minimum order or lead time drives more than eight weeks of cover listed.
                2. The suppliers behind those lines asked for smaller or split deliveries.
                3. Any price or forecast trade-off costed against the stock saved.
                4. Agreed changes updated in the purchasing system.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Revised minimum orders or lead times agreed with at least three suppliers and updated in the purchasing system."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find lines where minimum orders or lead times drive excess cover"
                - "Ask those suppliers what smaller or split deliveries would need"
                - "Cost each offer against the stock it would save"
                - "Update the agreed quantities and lead times in the system"
            - name: Consignment stock arrangement with a key supplier
              description: |-
                ## Purpose
                Under consignment, the supplier owns stock held in your premises until you use it, so the cash stays with them while availability stays with you. Setting it up with one supplier who wants the volume, with clear rules on ownership, counts and insurance, can remove a whole product group from your balance sheet.

                ## Milestones
                1. One supplier and product group chosen, with the stock value that would move off your books.
                2. Terms agreed in writing on ownership, usage reporting, counts, damage and insurance.
                3. Your accountant consulted on how the stock is recorded.
                4. The first quarterly count reconciled with the supplier.

                ## Notes
                Keep consignment stock physically separate and labelled. Mixed stock is the usual source of disputes.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed consignment agreement with one supplier and the first quarterly stock count reconciled with them."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one supplier and product group with high stock value"
                - "Agree ownership, reporting, counts and insurance in writing"
                - "Ask your accountant how consignment stock is recorded"
                - "Reconcile the consignment stock count with the supplier @recurring(quarterly)"
            - name: Ninety-day cash release sprint
              description: |-
                ## Purpose
                When the bank, the board or a buyer wants cash released by a date, a focused sprint on the quickest levers beats a slow programme. Ninety days of weekly targets on overdue debt, early payments, open purchase orders and clearance stock can release a visible sum while the longer changes are still being negotiated.

                ## Milestones
                1. A sprint target in cash with a weekly plan across debtors, creditors and stock.
                2. A short list of quick levers, each with an owner and a weekly figure.
                3. Weekly progress shared with the sponsor for thirteen weeks.
                4. Cash released measured at day ninety against the target.

                ## Notes
                Avoid tricks that reverse straight after the date, such as delaying all payments for a week. Lenders and auditors see through them, and suppliers remember.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A ninety-day sprint completed with weekly progress reported and the cash released at day ninety measured against target."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Set the sprint target and the date it must be reached"
                - "Pick four quick levers and name an owner for each"
                - "Send the sponsor a weekly progress figure for each lever"
                - "Measure cash released at day ninety and write up what held"
            - name: Funding the seasonal stock build
              description: |-
                ## Purpose
                Retailers before the holiday season, growers before harvest and suppliers to tourism all buy stock months before they sell it, and the cash gap peaks just before sales arrive. Planning the build each year, with order timing, supplier terms and any facility needed agreed in advance, stops the peak landing on a surprise overdraft.

                ## Milestones
                1. Last season's stock build and cash low point charted week by week.
                2. This season's buy plan phased by week with the cash it needs.
                3. Supplier terms or delivery phasing agreed to flatten the peak.
                4. Any facility or extension agreed with the lender before the first big order.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A weekly buy and cash plan for the season, with supplier phasing and any facility agreed before the first large order."
                cadence: cyclic
              tasks:
                - "Chart last season's stock build and cash low point week by week"
                - "Plan the seasonal stock build and the cash it needs @recurring(yearly)"
                - "Ask key suppliers to phase deliveries or extend terms over the peak"
                - "Agree any temporary facility with the lender before ordering"
            - name: Working capital check on a large new contract bid
              description: |-
                ## Purpose
                A big new customer on ninety-day terms, with stock held on their behalf, can absorb more cash than the contract earns in its first year. Checking the working capital effect of a bid before it is priced, and building terms, deposits or price into the offer, means winning it does not create the next cash crisis.

                ## Milestones
                1. The bid's expected sales, terms, stock commitments and supplier terms written down.
                2. The peak cash the contract would absorb calculated month by month.
                3. Options to cut that peak listed, such as shorter terms, a deposit, stage billing or a price that covers funding.
                4. A recommendation made to the bid owner before the price is submitted.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A month-by-month working capital estimate for the bid and a written recommendation delivered before the price is submitted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the bid's volumes, terms and stock commitments from the bid owner"
                - "Calculate the peak cash the contract would tie up"
                - "List the changes that would cut that peak"
                - "Send the bid owner a recommendation before pricing closes"
            - name: Rolling out new payment terms to existing customers
              description: |-
                ## Purpose
                Moving existing customers onto shorter terms is one of the largest levers and one of the most delicate, because a clumsy letter can lose an account. A planned rollout, with segments, a notice period, scripts for account managers and a list of customers handled personally, gets the change accepted by most and negotiated by the few who matter.

                ## Milestones
                1. Customers segmented into those who get a letter and those who get a conversation first.
                2. A notice period and effective date agreed.
                3. Letters and scripts approved by sales and finance.
                4. The new terms live in the system for at least 80 percent of the targeted customers.

                ## Notes
                Check each contract for a clause that fixes terms. Where one exists, the change needs agreement, not notice.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "New terms live for at least 80 percent of targeted customers by the effective date, with personal conversations held with key accounts."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Split targeted customers into letter and conversation groups"
                - "Check contracts for clauses that fix payment terms"
                - "Ask the agent to draft the terms change letter and account manager script"
                - "Update terms in the system on the effective date"
            - name: Working capital plan for a fast-growing small business
              description: |-
                ## Purpose
                An owner whose sales doubled this year often finds the business poorer than when it was half the size, because stock and debtors grew faster than profit. A simple plan for the next twelve months, built on your own cycle and growth target, shows how much cash growth will need and which levers can fund it before you go to the bank.

                ## Milestones
                1. Next year's sales growth target and the working capital it absorbs calculated.
                2. Three levers chosen to fund part of that from inside the business.
                3. The remaining gap, if any, written as a funding need with a month it appears.
                4. The plan reviewed with your accountant.

                ## Notes
                Growth funded only by stretching suppliers works until a key supplier stops deliveries. Keep at least one lever on the customer side.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month plan showing working capital absorbed by growth, three internal levers and any funding gap, reviewed with your accountant."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down next year's sales target and current cycle in days"
                - "Work out the extra cash growth will tie up month by month"
                - "Choose three levers that could fund part of it"
                - "Book a review of the plan with your accountant"
            - name: Cash squeeze triage of debtors, stock and creditors
              description: |-
                ## Purpose
                When the bank balance will not cover next month's commitments, the order of actions matters: some levers release cash in days, others take months, and some damage the business. A one-page triage, run in the first week of a squeeze, puts the fastest safe actions first and protects payroll, tax and critical suppliers.

                ## Milestones
                1. Critical payments that must be protected listed, such as wages, tax and key suppliers.
                2. Debtors able to pay within two weeks called by a senior person.
                3. Open purchase orders not needed in the next month paused or cut.
                4. Suppliers you need more time from contacted early, with a dated plan.

                ## Notes
                Start from the **Operational checklist** template. Talk to your accountant and lender early; they have more options when they hear first from you.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A triage checklist completed within seven days of a cash squeeze, with protected payments listed and every quick lever actioned or ruled out."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the payments that must be protected this month"
                - "Call the debtors who could pay within two weeks"
                - "Pause or cut purchase orders not needed in the next month"
                - "Contact the suppliers you need more time from with a dated plan"
            - name: Retentions, stage payments and WIP for contractors
              description: |-
                ## Purpose
                Builders, engineering contractors and fit-out firms carry cash in places other businesses do not: retentions held for months after completion, applications for payment that slip, and work in progress waiting for a valuation. A tracker of retentions due, a strict application calendar and a monthly look at unbilled work can release more cash than chasing invoices.

                ## Milestones
                1. Every retention held by customers listed with contract, amount and release date.
                2. An application for payment calendar set for each live contract.
                3. Unbilled work in progress valued monthly by contract.
                4. Overdue retentions chased with the release evidence each contract needs.

                ## Notes
                Release conditions often depend on certificates or defect sign-offs. Diarise the paperwork, not just the date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A retentions tracker covering every live and recently completed contract, with releases due checked each month."
                cadence: rolling
              tasks:
                - "List every retention held with contract, amount and release conditions"
                - "Set an application for payment date for each live contract"
                - "Check retentions due for release this month and their paperwork @recurring(monthly:28)"
                - "Value unbilled work by contract at each month end"
            - name: Stock-heavy wholesale or retail working capital plan
              description: |-
                ## Purpose
                Wholesalers, distributors and retailers usually have more cash on shelves than in debtors, so stock is where the programme lives or dies. A plan built around stock cover by category, supplier terms matched to stock turn and buying rules for promotions and new lines suits a business where a buyer's decisions shape the balance sheet.

                ## Milestones
                1. Stock cover and supplier terms set side by side for each category.
                2. Categories where you pay suppliers well before the stock sells identified.
                3. Buying rules written for promotions, new lines and bulk deals.
                4. A category target for stock cover agreed with each buyer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A category-level plan matching stock cover to supplier terms, with buying rules and a cover target agreed with each buyer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Put stock cover and supplier terms side by side by category"
                - "Mark categories where suppliers are paid long before stock sells"
                - "Write buying rules for promotions, new lines and bulk deals"
                - "Agree a cover target for each category with its buyer"
            - name: Working capital targets in sales and purchasing incentives
              description: |-
                ## Purpose
                Salespeople paid on revenue alone will trade terms for volume, and buyers rewarded for unit price will buy in bulk. Managers who add a cash measure to bonus and commission plans, such as paying commission on cash received or rewarding stock turn, change behaviour faster than any policy document.

                ## Milestones
                1. Current incentive plans reviewed for measures that work against cash.
                2. One cash measure proposed for sales and one for purchasing.
                3. The proposals tested on last year's results to see who would have gained or lost.
                4. A change agreed with leadership and HR for the next plan year.

                ## Notes
                Changes to pay need careful communication and may need consultation or contract changes. Involve HR from the start.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One cash measure each for sales and purchasing incentives, tested on last year's data and agreed with leadership and HR."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the current sales and purchasing incentive plans"
                - "Propose one cash measure for each team"
                - "Test the proposals against last year's results"
                - "Take the proposal to leadership and HR for the next plan year"
            - name: Group working capital programme across business units
              description: |-
                ## Purpose
                In a group with several businesses or countries, each unit's managers see working capital as head office's problem, and the best practice in one unit never reaches the others. A group programme with common definitions, unit targets, a monthly league table and a forum for sharing what worked turns scattered efforts into one measurable result.

                ## Milestones
                1. Common definitions adopted by every business unit.
                2. A cycle target set for each unit from its own baseline.
                3. A monthly league table of units by cycle and cash released.
                4. A quarterly call where units share one change that worked.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every business unit reporting on common definitions against its own target in a monthly league table for six months."
                cadence: rolling
              tasks:
                - "Send the definitions sheet to every unit finance lead for adoption"
                - "Agree a cycle target with each unit from its baseline"
                - "Publish the business unit working capital league table @recurring(monthly:10)"
                - "Host a quarterly call for units to share one change that worked"
            - name: Supplier financial health check before extending terms
              description: |-
                ## Purpose
                Pushing a small or struggling supplier onto longer terms can tip them into failure, and losing a sole source costs far more than the cash released. A yearly health check on strategic suppliers, using their filed accounts, credit reports and how often they ask for early payment, tells you where terms can move and where they must not.

                ## Milestones
                1. Strategic and sole-source suppliers listed.
                2. Filed accounts or a credit report checked for each one.
                3. Warning signs noted, such as frequent early payment requests or late deliveries.
                4. Each supplier marked as safe to extend, hold or support.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every strategic supplier assessed each year and marked safe to extend, hold or support, with the evidence noted."
                cadence: cyclic
              tasks:
                - "List strategic and sole-source suppliers"
                - "Check filed accounts or a credit report for each one"
                - "Mark each supplier as safe to extend, hold or support"
                - "Repeat the health check before the next terms round @recurring(yearly)"
            - name: Working capital benchmarking against sector peers
              description: |-
                ## Purpose
                A sixty-day cycle is excellent in some industries and poor in others, so targets set without a comparison are guesses. Comparing your three metrics with published figures for similar companies, from filed accounts or industry surveys, shows where you are genuinely behind and where a target would be unrealistic.

                ## Milestones
                1. Five to ten comparable companies or a sector survey identified.
                2. Debtor, stock and creditor days calculated for each on the same definitions.
                3. Your position against the median and best quartile charted.
                4. Gaps explained, including differences in business model that make a peer unlike you.

                ## Notes
                Public accounts can be shaped at the year end by factoring or supplier finance. Read the notes before treating a peer's figure as a target.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A benchmark of at least five peers or a sector survey on your definitions, with your position and the reasons for gaps written up."
                cadence: cyclic
              tasks:
                - "Choose five to ten comparable companies with filed accounts"
                - "Calculate their three metrics using your definitions"
                - "Chart your position against the median and best quartile"
                - "Refresh the benchmark when new peer accounts are filed @recurring(yearly)"
            - name: Normalised working capital peg for a business sale
              description: |-
                ## Purpose
                Sale prices usually assume a normal level of working capital is left behind when a business changes hands, and the gap between that peg and the actual figure at completion moves the price pound for pound. Preparing a monthly history and a defensible normal level before buyers arrive stops the peg being set on the buyer's terms.

                ## Milestones
                1. Twenty-four months of month-end working capital prepared on consistent definitions.
                2. Seasonal patterns and one-off items identified and explained.
                3. A proposed normal level with a written rationale.
                4. The analysis reviewed by your corporate finance or transaction adviser.

                ## Notes
                This is preparation for your advisers, not a substitute for them. The definition of working capital in the sale agreement is a legal and accounting matter.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A twenty-four month working capital history with a proposed normal level and rationale, reviewed by a transaction adviser."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Prepare twenty-four months of month-end working capital balances"
                - "Mark seasonal swings and one-off items with an explanation"
                - "Propose a normal level and write the reasoning"
                - "Send the analysis to your transaction adviser for review"
            - name: Statistical safety stock by product and service level
              description: |-
                ## Purpose
                Flat rules such as four weeks of safety stock for everything overstock steady lines and understock volatile ones. Setting safety stock per product from demand variability, lead time variability and a target service level puts stock where it protects sales and removes it where it only protects habit.

                ## Milestones
                1. Products grouped by value and demand pattern.
                2. A target service level agreed for each group with sales.
                3. Safety stock calculated per product from demand and lead time variability.
                4. New settings loaded for one group and stock outs and stock value tracked for a quarter.

                ## Notes
                Test on one product group first. Bad demand history produces bad safety stock, so clean obvious one-off orders out of the data.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Statistical safety stock set for at least one product group, with a quarter of stock outs and stock value compared with before."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Group products by value and demand pattern"
                - "Agree target service levels for each group with sales"
                - "Calculate safety stock from demand and lead time variability"
                - "Recalculate safety stock for the pilot group @recurring(quarterly)"
---

# Working Capital Optimisation

This area is for anyone whose business looks profitable on paper but never seems to have the cash, from an owner with a warehouse of slow stock and customers on sixty days to a finance lead asked to release a number from the balance sheet by the year end. It opens with the foundations (a cash conversion cycle baseline, a map of where cash sits, and registers of the terms you actually give and get), then the monthly and weekly machinery that holds the gains, the skills behind terms, stock planning and trade finance, decisions on terms, deposits, ranges, factoring and supplier finance, dated moments such as a cash release sprint or a seasonal stock build, situations for growing firms, contractors, stockists and groups, and finally specialist work on benchmarks, deal pegs and statistical safety stock.

What repeats is a weekly cash and stock huddle and a weekly purchase order check, a monthly dashboard with invoice lag, early payment and slow stock reviews around it, quarterly terms audits and leadership reports, and a yearly reset of targets in the budget. The Metrics log, Vendor, Purchase decision and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
