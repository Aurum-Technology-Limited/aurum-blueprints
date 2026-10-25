---
id: founding-startups.startup-runway-management
name: Startup Runway Management
description: "Know your cash, burn and zero-cash date every week, with a 13-week forecast, red-line triggers, spending rules and a cut plan written long before the money gets tight."
category: business
version: 1.0.0
tags: [founding-startups, startup-runway-management, founder, runway, burn-rate, cash-flow-forecast, spending-rules, cost-cutting]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - month-end-close
    - risk-register
    - vendor
    - purchase-decision
    - board-meeting
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Startup Runway Management
          description: "Tracking burn and months of runway, setting spending rules and planning cuts or milestones well before the money runs short."
          projects:
            - name: True cash position across every account
              description: |-
                ## Purpose
                Before any runway number means anything, you need one figure for the cash the company can actually spend today. That means every bank account, card balance, payment processor float and currency wallet, less money that is already spoken for, such as payroll going out on Friday or customer deposits you may have to refund.

                ## Milestones
                1. Every account, card, processor balance and wallet the company holds listed in one sheet.
                2. Balances pulled on the same date and converted into one reporting currency.
                3. Restricted or committed cash, such as deposits, grant money and imminent payroll, shown separately.
                4. One spendable cash figure written down with the date it was taken.

                ## Notes
                Processor balances and card limits are not cash in the bank. Count only what has settled.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated sheet listing every company account and balance, with restricted cash separated and a single spendable cash total."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every bank, card, processor and currency account the company holds"
                - "Pull each balance on the same day and convert to one currency"
                - "Mark deposits, grant funds and next payroll as committed cash"
                - "Write the spendable cash total and date at the top of the sheet"
            - name: Twelve-month burn history from the books
              description: |-
                ## Purpose
                Burn is a fact about the past before it is a forecast about the future, and most founders guess it low by forgetting annual bills, contractor invoices and card spend. Rebuilding the last twelve months of cash in and cash out from the bank feed shows the real monthly burn and how much it swings.

                ## Milestones
                1. Twelve months of bank transactions exported and grouped into a handful of cost categories.
                2. Each month's total cash out and total cash in calculated.
                3. One-off items, such as a laptop batch or a legal bill, flagged so they do not distort the trend.
                4. Average, highest and most recent three-month burn written beside each other.

                ## Notes
                Use cash movements from the bank, not the profit and loss statement. Accruals and depreciation hide the timing that runway depends on.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A twelve-month table of cash in and out by category, with average and trailing three-month burn calculated."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export twelve months of transactions from every company bank account"
                - "Group spending into no more than eight cost categories"
                - "Flag one-off payments that will not repeat"
                - "Calculate the average and trailing three-month burn"
            - name: Gross and net burn definitions agreed
              description: |-
                ## Purpose
                Gross burn is everything the company spends in a month, and net burn is that figure less the cash customers paid in. Co-founders, the accountant and investors often quote different numbers simply because they define burn differently, so writing one definition down ends that confusion before it reaches a board pack.

                ## Milestones
                1. A one-paragraph definition of gross burn and net burn, including what counts as cash in.
                2. A decision on whether loan drawdowns, grants and tax refunds count as cash in.
                3. The definition shared with co-founders and the accountant and agreed.
                4. The definition pasted at the top of the runway model.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written gross and net burn definition, agreed by founders and the accountant, sitting at the top of the runway model."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a draft definition of gross burn and net burn"
                - "Decide how grants, loans and tax refunds are treated"
                - "Send the definition to co-founders and the accountant for comment"
                - "Paste the agreed wording into the runway model"
            - name: Months of runway and the zero-cash date
              description: |-
                ## Purpose
                Runway is spendable cash divided by net burn, but the useful output is a calendar date: the month the account hits zero if nothing changes. Putting that date on the wall turns an abstract ratio into a deadline everyone on the founding team can plan against.

                ## Milestones
                1. Runway calculated from spendable cash and trailing three-month net burn.
                2. A second calculation using expected burn after planned hires.
                3. Both zero-cash dates written as a month and year.
                4. The dates shared with co-founders in writing.

                ## Notes
                Use trailing three-month burn, not the lowest month. A quiet December makes runway look longer than it is.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two zero-cash dates, one on current burn and one on planned burn, written down and shared with every founder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Divide spendable cash by trailing three-month net burn"
                - "Recalculate with the burn expected after planned hires"
                - "Convert both results into a month and year"
                - "Send both zero-cash dates to your co-founders"
            - name: Committed costs and contract notice periods
              description: |-
                ## Purpose
                Rent, annual software plans, contractor retainers and payroll cannot be switched off on the day you decide to cut. Listing every recurring commitment with its notice period and renewal date shows how much of the burn is truly flexible and how many weeks a cut would take to bite.

                ## Milestones
                1. Every recurring cost over a small threshold listed with supplier, amount and payment frequency.
                2. Notice period, renewal date and cancellation terms recorded for each.
                3. Costs sorted into cancellable within 30 days, within 90 days and locked in.
                4. Renewal dates for the next twelve months entered in the calendar.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A commitments register showing every recurring cost with its notice period, sorted by how quickly it could be stopped."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull every recurring payment from the last three bank statements"
                - "Find the contract or terms page for each and note the notice period"
                - "Sort costs into 30-day, 90-day and locked-in buckets"
                - "Add each renewal date to the company calendar"
            - name: Thirteen-week cash flow forecast
              description: |-
                ## Purpose
                Monthly models hide the week payroll and a big annual bill land together. A thirteen-week forecast lists expected receipts and payments week by week, so you can see a short-term squeeze two months before it arrives and move a payment or chase an invoice in time.

                ## Milestones
                1. A sheet with thirteen weekly columns and an opening cash balance.
                2. Known payroll, rent, tax and supplier payments placed in the right weeks.
                3. Expected customer receipts entered on realistic payment dates, not invoice dates.
                4. The lowest weekly closing balance highlighted with the week it falls in.

                ## Notes
                Put receipts in the week you expect the money, using each customer's real payment history. Optimistic receipt dates are the most common forecast error.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A thirteen-week forecast with opening cash, weekly receipts and payments, and the lowest projected balance identified."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up thirteen weekly columns starting from this week's cash"
                - "Enter payroll, rent, tax and fixed supplier payments by week"
                - "Add customer receipts using each customer's usual payment delay"
                - "Highlight the week with the lowest closing balance"
            - name: Eighteen-month runway model with headcount plan
              description: |-
                ## Purpose
                Fundraising, hiring and cuts all play out over a year or more, so the company needs a monthly model that runs at least eighteen months ahead. Building it from drivers, mainly headcount, salaries, revenue and a few large cost lines, lets you change one assumption and see the zero-cash date move.

                ## Milestones
                1. A monthly model eighteen months long with an assumptions tab separate from the calculations.
                2. Each current and planned role listed with start month and fully loaded cost.
                3. Revenue and cash collection assumptions written as a few clear drivers.
                4. Month-end cash and runway calculated for every month and checked against the bank.

                ## Notes
                Keep it simple enough that a co-founder can change an assumption without breaking it. Fifty rows that are understood beat five hundred that are not.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An eighteen-month driver-based model whose opening cash matches the bank and which shows month-end cash for every month."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Create an assumptions tab for headcount, salaries, revenue and big costs"
                - "List every current and planned role with start month and loaded cost"
                - "Build monthly cash in, cash out and closing balance rows"
                - "Reconcile the opening balance to the true cash position sheet"
            - name: Runway red lines and minimum cash floor
              description: |-
                ## Purpose
                Agreeing a cash floor and the trigger points in advance means hard decisions happen on schedule instead of in panic. A common pattern is to start raising with about twelve months left, cut discretionary spend at nine and enact the full cut plan at six, but the right numbers depend on how long your fundraises really take.

                ## Milestones
                1. A minimum cash floor that covers final payroll, notice pay and creditors agreed with your accountant.
                2. Three runway red lines set in months, each with the action it triggers.
                3. The red lines agreed and signed off by every founder.
                4. The red lines written into the runway model so breaches show automatically.

                ## Notes
                Start from the **Risk register** template. Ask your accountant or lawyer what directors in your jurisdiction must do if the company may not be able to pay its debts, and set the floor above that point.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written cash floor and three runway red lines with named actions, agreed by all founders and flagged in the model."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate the cash needed for final payroll, notice pay and creditors"
                - "Ask your accountant what directors must do near insolvency"
                - "Propose three red lines in months, each with one triggered action"
                - "Add a warning cell to the model for each red line"
            - name: Spending authority and approval limits
              description: |-
                ## Purpose
                Small teams leak cash through dozens of reasonable purchases nobody else saw. Short written rules, such as who can commit how much, which costs need a second founder and when annual plans are allowed, keep spend visible without slowing anyone down.

                ## Milestones
                1. Spending limits set for each person or role, with a second-approver threshold.
                2. Rules written for annual contracts, new subscriptions and anything with a notice period.
                3. Company cards issued with limits matching the rules.
                4. The one-page policy shared with everyone who can spend money.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page spending policy with named limits, card limits set to match, and every spender confirming they have read it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft spending limits by role and a second-approver threshold"
                - "Add rules for annual plans, new tools and contracts with notice periods"
                - "Set company card limits to match the policy"
                - "Review the limits against the runway model @recurring(yearly)"
            - name: Monday cash check
              description: |-
                ## Purpose
                Fifteen minutes every Monday, comparing actual cash with last week's forecast, catches a late customer payment or a surprise charge while there is still time to respond. The habit matters more than the precision, and it keeps the zero-cash date a number the founder actually knows.

                ## Milestones
                1. A fixed Monday slot in the calendar for the cash check.
                2. A log with date, spendable cash, change from last week and a one-line note.
                3. Any variance above an agreed threshold followed up the same day.
                4. Eight consecutive weeks logged without a gap.

                ## Notes
                Start from the **Metrics log** template. Three columns are enough to begin: cash, change and runway in months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cash log with an entry every Monday for eight consecutive weeks, each with spendable cash and runway in months."
                cadence: rolling
              tasks:
                - "Block fifteen minutes in the calendar every Monday morning"
                - "Record spendable cash, weekly change and runway in the log @recurring(weekly:mon)"
                - "Set the variance threshold that triggers same-day follow-up"
                - "Message co-founders when runway drops a whole month"
            - name: Monthly burn and runway close
              description: |-
                ## Purpose
                Closing the books each month within the first week turns bank data into categorised spend, a confirmed burn figure and an updated runway. Without a fixed close, burn is always a guess from six weeks ago and the model drifts away from reality.

                ## Milestones
                1. Transactions categorised and receipts attached by the fifth working day.
                2. Gross burn, net burn and closing cash confirmed for the month.
                3. Runway in months and the zero-cash date updated in the model.
                4. A three-line summary of what moved and why filed with the month's numbers.

                ## Notes
                Start from the **Month-end close** template. If an external bookkeeper does the books, agree a close date in their engagement.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every month closed by the fifth working day with confirmed burn, closing cash and an updated zero-cash date."
                cadence: rolling
              tasks:
                - "Agree a monthly close date with whoever keeps the books"
                - "Close the month and confirm gross burn, net burn and cash @recurring(monthly:5)"
                - "Update runway months and the zero-cash date in the model"
                - "Write three lines on what changed in burn and why"
            - name: Runway line in the monthly investor update
              description: |-
                ## Purpose
                Investors who see cash, burn and runway every month are calmer, more helpful and far less surprised when you ask for a bridge. A consistent three-number block, with one sentence on what is changing, builds trust long before it is needed.

                ## Milestones
                1. A fixed format for cash, net burn and runway months agreed for every update.
                2. One sentence of context explaining any change of more than a month in runway.
                3. The block included in every monthly update for six months in a row.
                4. A clear ask written in the update whenever runway crosses a red line.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly investor updates, each carrying cash, net burn and runway in the same format."
                cadence: rolling
              tasks:
                - "Write a three-number template for cash, net burn and runway"
                - "Add the runway block to the monthly update draft @recurring(monthly:8)"
                - "Ask the agent to draft one sentence explaining this month's runway change"
                - "Add a specific ask when runway has crossed a red line"
            - name: Quarterly software subscription audit
              description: |-
                ## Purpose
                Software spend grows quietly: unused seats, overlapping tools, free trials that converted and plans bought for a team that has since shrunk. A quarterly sweep through the card and bank statements typically finds savings in a single afternoon.

                ## Milestones
                1. Every software charge from the last three months listed with owner and seat count.
                2. Each tool marked keep, downgrade, consolidate or cancel.
                3. Cancellations and seat reductions completed before the next renewal.
                4. Quarterly savings recorded in the runway model.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completed audit each quarter with every tool given an owner and a decision, and the savings recorded."
                cadence: cyclic
              tasks:
                - "Export all software charges from cards and bank for the quarter @recurring(quarterly)"
                - "Name an owner for every tool and count active seats"
                - "Mark each tool keep, downgrade, consolidate or cancel"
                - "Cancel or downgrade before each renewal date"
            - name: Forecast versus actual variance review
              description: |-
                ## Purpose
                Forecasts only improve if you check where they were wrong. Comparing last month's forecast with what actually happened, line by line, shows which assumptions are consistently optimistic, usually revenue timing and hiring dates, and lets you correct them before they mislead a fundraise.

                ## Milestones
                1. Each month's forecast saved as a frozen copy before the month starts.
                2. Actuals set beside the frozen forecast for every major line.
                3. The three largest variances explained in a sentence each.
                4. At least one assumption changed in the model as a result.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly variance table for six months, each with its three largest variances explained and any assumption changes noted."
                cadence: rolling
              tasks:
                - "Save a frozen copy of the forecast before each month begins"
                - "Compare actuals with the frozen forecast line by line @recurring(monthly:12)"
                - "Explain the three largest variances in one sentence each"
                - "Change the assumption behind any variance that repeats"
            - name: Weekly roll of the thirteen-week forecast
              description: |-
                ## Purpose
                Cash forecasts decay quickly: a week later, one column is history and a new week has appeared at the far end. Rolling the forecast every Friday, replacing estimates with actuals and adding a week, keeps the short-term view accurate enough to time payments and collections.

                ## Milestones
                1. The past week's estimates replaced with actual receipts and payments.
                2. A new week added at the end so thirteen weeks always remain visible.
                3. Any week falling below the cash floor flagged with a planned response.
                4. The rolled forecast saved with the date in its file name.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The thirteen-week forecast is rolled every Friday, with actuals replacing estimates and a fresh week added each time."
                cadence: rolling
              tasks:
                - "Replace last week's estimates with actual receipts and payments @recurring(weekly:fri)"
                - "Add a new week at the end of the forecast"
                - "Flag any week projected below the cash floor"
                - "Save the rolled version with today's date in the file name"
            - name: Quarterly reforecast of the runway model
              description: |-
                ## Purpose
                Every quarter the business teaches you something that should change the eighteen-month model: a hire slipped, a price changed, a channel stopped working. A proper reforecast, rather than a tweak, resets assumptions to what you now believe and keeps the zero-cash date honest for the board and co-founders.

                ## Milestones
                1. Every assumption on the assumptions tab reviewed and either confirmed or changed.
                2. The model extended so it always shows eighteen months ahead.
                3. Old and new zero-cash dates compared and the difference explained.
                4. The reforecast shared with co-founders and, if you have one, the board.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A reforecast completed each quarter with every assumption reviewed and the change in zero-cash date explained in writing."
                cadence: cyclic
              tasks:
                - "Review every assumption on the model's assumptions tab @recurring(quarterly)"
                - "Extend the model so eighteen months remain visible"
                - "Explain the change between the old and new zero-cash dates"
                - "Share the reforecast with co-founders and the board"
            - name: Weekly receivables chase
              description: |-
                ## Purpose
                Unpaid invoices are runway sitting in someone else's bank. A short weekly chase, polite reminders at fixed points after the due date and a call for anything over 30 days late, can add weeks of runway to an early B2B company without selling anything new.

                ## Milestones
                1. An aged list of every unpaid invoice with customer contact and days overdue.
                2. A reminder sequence written for due date, 7 days late and 21 days late.
                3. A named person in finance or accounts payable recorded for each customer.
                4. Average days to get paid tracked monthly and falling.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An aged receivables list reviewed every week, with reminders sent on schedule and average days to get paid tracked."
                cadence: rolling
              tasks:
                - "Pull an aged list of unpaid invoices from the accounting tool"
                - "Write reminder emails for due date, 7 and 21 days late"
                - "Send due reminders and call anything over 30 days late @recurring(weekly:wed)"
                - "Record the accounts payable contact for every customer"
            - name: Monthly supplier payment run
              description: |-
                ## Purpose
                Paying bills the moment they arrive shortens runway for no benefit, while paying late damages supplier relationships you will need. A single monthly payment run, paying on the agreed terms and never early, smooths cash out and makes the thirteen-week forecast easier to trust.

                ## Milestones
                1. Payment terms recorded for every regular supplier.
                2. A fixed monthly payment run date agreed and communicated to the team.
                3. Bills approved against the spending policy before each run.
                4. No supplier paid late and none paid more than a week early for three months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly payment runs with every bill paid on its terms, none late and none more than a week early."
                cadence: rolling
              tasks:
                - "Record payment terms for every regular supplier"
                - "Pick a monthly payment run date and tell the team"
                - "Approve and pay due bills in the monthly run @recurring(monthly:25)"
                - "Note any supplier offering an early payment discount worth taking"
            - name: Cloud and infrastructure cost watch
              description: |-
                ## Purpose
                Cloud bills grow with usage, test environments left running and data nobody deletes, and for software startups they are often the second largest cost after people. A monthly look at the bill by service, with alerts set at sensible thresholds, stops a forgotten cluster from eating a month of runway.

                ## Milestones
                1. Budget alerts set in each cloud account at agreed monthly thresholds.
                2. The bill broken down by service and environment for the last three months.
                3. Idle resources, oversized instances and old snapshots cleaned up.
                4. Cloud cost per customer or per active user tracked monthly.

                ## Notes
                Ask the engineer who owns infrastructure to run the review with you. Most savings come from things only they know are idle.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Budget alerts live in every cloud account and a monthly cost review logged, with cloud cost per customer tracked."
                cadence: rolling
              tasks:
                - "Set budget alerts in every cloud and hosting account"
                - "Break the last three bills down by service and environment"
                - "Review the cloud bill and clean up idle resources @recurring(monthly:18)"
                - "Track cloud cost per customer in the cash log"
            - name: Reading a cash flow statement as a founder
              description: |-
                ## Purpose
                Profit and cash are different things, and many profitable-looking startups run out of money because customers pay late or stock ties up cash. Learning to read the three statements, especially the cash flow statement, lets you question your accountant's numbers and spot where cash is really going.

                ## Milestones
                1. The difference between profit, operating cash flow and free cash flow explained in your own words.
                2. Last year's three financial statements for your company read line by line.
                3. Five questions about your own cash flow written and answered with the accountant.
                4. A one-page note of what each statement tells you about runway.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note in your own words on what each financial statement shows about runway, checked with your accountant."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short introduction to the three financial statements"
                - "Walk through your own company's cash flow statement line by line"
                - "Write five questions about it for your accountant"
                - "Summarise what each statement says about runway on one page"
            - name: Burn multiple and capital efficiency measures
              description: |-
                ## Purpose
                Burn on its own says how fast money leaves; burn multiple, net burn divided by net new recurring revenue, says how much growth each pound or dollar buys. Investors increasingly judge early companies on it, and understanding it helps you defend or rethink a spending plan.

                ## Milestones
                1. Burn multiple and two other capital efficiency measures defined in your notes.
                2. Each measure calculated for your last four quarters.
                3. The trend explained in two or three sentences.
                4. One spending decision reviewed in light of the numbers.

                ## Notes
                Benchmarks vary by stage and by year. Treat published ranges as conversation starters, not targets.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Burn multiple and two other efficiency measures calculated for four quarters, with a written explanation of the trend."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write definitions of burn multiple and two related measures"
                - "Calculate each measure for your last four quarters"
                - "Explain the trend in two or three sentences"
                - "Revisit one current spending plan against the results"
            - name: Fully loaded cost of each hire
              description: |-
                ## Purpose
                Salary is usually only part of what a hire costs: employer taxes, pension or benefits, equipment, software seats, recruiting fees and the months before they are productive all add to burn. Working out the fully loaded cost per role stops a hiring plan from shortening runway far more than expected.

                ## Milestones
                1. Every on-cost for an employee in your country listed with a percentage or amount.
                2. A loaded-cost multiplier calculated for a typical role.
                3. Recruiting and onboarding costs estimated per hire.
                4. The runway model updated to use loaded costs for every planned role.

                ## Notes
                Check employer tax and benefit rates with your payroll provider or accountant, as they change and differ by country.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A loaded-cost multiplier confirmed with your payroll provider and applied to every planned role in the runway model."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List employer taxes, benefits and equipment costs per employee"
                - "Ask your payroll provider to confirm the employer on-cost rates"
                - "Estimate recruiting and onboarding cost per hire"
                - "Apply the loaded cost to every planned role in the model"
            - name: Cash timing of annual and monthly billing
              description: |-
                ## Purpose
                Annual contracts paid upfront bring a year of cash in on day one, while monthly billing spreads it out, and deferred revenue means the accounts and the bank tell different stories. Understanding the timing lets you read your own runway correctly and decide whether to push annual plans.

                ## Milestones
                1. Deferred revenue and cash collected versus revenue recognised explained in your notes.
                2. Current customers split into annual upfront, annual paid monthly and monthly.
                3. Cash collected in the next twelve months estimated for each group.
                4. The runway model checked so it uses collection dates, not recognised revenue.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Customers grouped by billing type with twelve-month cash collection estimated and the model confirmed to use collection dates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a plain explanation of deferred revenue"
                - "Split current customers by billing frequency and payment timing"
                - "Estimate twelve months of cash collection for each group"
                - "Check the runway model uses collection dates, not revenue"
            - name: Base, downside and severe runway scenarios
              description: |-
                ## Purpose
                One forecast is a guess; three forecasts are a plan. Building base, downside and severe cases, for example revenue half of plan or a fundraise six months late, shows how much margin for error the company really has and which levers matter most.

                ## Milestones
                1. Three scenarios defined in writing with the assumptions that differ.
                2. A scenario switch built into the model so one cell changes the case.
                3. Zero-cash date calculated for each scenario.
                4. The two or three levers that most extend the severe case identified.

                ## Notes
                Make the severe case genuinely uncomfortable. A downside that is only slightly worse than base gives false comfort.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A model with a working scenario switch showing three zero-cash dates and the top levers for the severe case written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the assumptions that differ in each of three scenarios"
                - "Add a single scenario switch cell to the model"
                - "Record the zero-cash date for each scenario"
                - "List the levers that most extend the severe case"
            - name: Multi-currency cash and exchange exposure
              description: |-
                ## Purpose
                Holding cash in one currency while paying staff or suppliers in another means an exchange rate move can shorten runway overnight. Mapping which currencies come in and go out, and holding balances that roughly match, is basic housekeeping for any startup with cross-border costs.

                ## Milestones
                1. Monthly cash in and cash out split by currency.
                2. The share of burn exposed to each currency calculated.
                3. A simple rule for how much to hold in each currency agreed with your accountant.
                4. Currency balances checked against the rule each month.

                ## Notes
                Hedging products are a specialist area; take advice from your bank or accountant before using them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written currency holding rule based on burn by currency, with balances checked against it every month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Split three months of cash in and out by currency"
                - "Calculate the share of burn in each currency"
                - "Agree a currency holding rule with your accountant"
                - "Check currency balances against the rule @recurring(monthly:3)"
            - name: Grants and tax credits that extend runway
              description: |-
                ## Purpose
                Research tax credits, innovation grants and government startup schemes can return a meaningful slice of spend, but the cash often arrives months after the claim. Knowing which ones you qualify for and when the money lands lets you count them in the runway model at the right date, not the hopeful one.

                ## Milestones
                1. A list of grants, tax credits and schemes available in your country with eligibility notes.
                2. Two or three relevant ones confirmed with an accountant or specialist adviser.
                3. Expected claim dates and realistic cash receipt dates added to the model.
                4. Records needed for each claim, such as timesheets and project notes, being kept.

                ## Notes
                Only count a credit or grant in base-case runway once it has been approved or is very routine for you. Keep unconfirmed ones in the upside case.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Relevant grants and credits confirmed with an adviser, with claim and receipt dates in the model and supporting records in place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List grants, tax credits and schemes open to startups in your country"
                - "Ask an accountant which ones the company qualifies for"
                - "Add realistic claim and receipt dates to the runway model"
                - "Prepare and file the annual research credit claim @recurring(yearly)"
            - name: Default alive or default dead assessment
              description: |-
                ## Purpose
                Default alive means that on current revenue growth and costs, the company reaches profitability before the cash runs out; default dead means it does not. Answering that question honestly changes how urgently you need to raise, cut or change the plan, and it is the first thing a seasoned investor will work out for you.

                ## Milestones
                1. Current monthly revenue growth rate and cost growth rate written down.
                2. A projection of when revenue would cover costs at those rates.
                3. That date compared with the zero-cash date and a verdict recorded.
                4. If default dead, the founders agree in writing which of raise, cut or change comes first.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written default alive or default dead verdict with the supporting projection, and an agreed first response if dead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate trailing revenue growth and cost growth per month"
                - "Project when revenue would cover costs at those rates"
                - "Compare that month with the zero-cash date and record the verdict"
                - "Agree with co-founders whether to raise, cut or change first"
            - name: Three-tier cost reduction plan on the shelf
              description: |-
                ## Purpose
                Cuts made in a hurry fall on whatever is easiest to stop, not what matters least. Writing three tiers of reductions now, from discretionary spend through supplier and tool cuts to the deeper structural options, with the runway each tier buys, means a red line triggers a plan already thought through.

                ## Milestones
                1. Tier one listed: discretionary and easily cancelled spend, with monthly savings.
                2. Tier two listed: supplier, tool, space and contractor reductions, with notice periods.
                3. Tier three outlined: structural options, including any team changes, at a high level.
                4. Runway added by each tier calculated and the plan agreed by founders.

                ## Notes
                Keep the plan to founders until it is needed. If tier three involves people, plan that work carefully with an employment adviser rather than from this list.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-tier written cut plan showing monthly savings and extra runway for each tier, agreed by all founders."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List discretionary costs that could stop this month"
                - "List supplier, tool, space and contractor reductions with notice periods"
                - "Outline structural options for tier three at a high level"
                - "Calculate the extra runway each tier would buy"
            - name: Supplier contract renegotiation round
              description: |-
                ## Purpose
                Suppliers would usually rather keep a startup customer on a smaller deal than lose it, and many will offer startup pricing, payment holidays or longer terms if asked. A focused round with your five largest suppliers can take a noticeable slice off burn in a few weeks.

                ## Milestones
                1. The five largest suppliers by annual spend identified with contract end dates.
                2. A target outcome written for each, such as a lower price, longer terms or a pause.
                3. Each supplier contacted and the result recorded.
                4. Total annual savings added to the runway model.

                ## Notes
                Start from the **Vendor** template for each supplier. Ask before renewal dates, when you have the most room to move.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The five largest suppliers contacted with a written target, each outcome recorded and savings added to the model."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Rank suppliers by annual spend and note contract end dates"
                - "Write a target outcome for each of the top five"
                - "Contact each supplier and ask for startup pricing or better terms"
                - "Record the agreed savings in the runway model"
            - name: Annual prepayment offer to existing customers
              description: |-
                ## Purpose
                Customers on monthly plans who are happy may well pay a year upfront for a modest discount, bringing future cash forward without new sales. Run carefully, an annual prepay offer can add months of runway, but it also locks in a lower price and a year of obligations.

                ## Milestones
                1. Customers likely to accept an annual prepay identified by usage and tenure.
                2. A discount level chosen and its cost against monthly billing calculated.
                3. The offer sent to the selected customers with a clear end date.
                4. Cash collected from the offer recorded and runway updated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An annual prepay offer sent to selected customers, with acceptance rate, cash collected and runway change recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Shortlist happy monthly customers by usage and tenure"
                - "Choose a discount and calculate its cost over a year"
                - "Ask the agent to draft the annual prepay offer email"
                - "Record cash collected and update runway when the offer closes"
            - name: Office and workspace cost decision
              description: |-
                ## Purpose
                Office leases are among the longest commitments a startup signs and the hardest to exit when cash gets tight. Comparing staying, downsizing, coworking and remote-first on cost, notice period and team needs gives a decision you can defend to investors and the team.

                ## Milestones
                1. Current space cost, notice period and break clauses written down.
                2. Three options compared on monthly cost, commitment length and team impact.
                3. Team preferences gathered in a short survey.
                4. A decision recorded with its effect on runway.

                ## Notes
                Start from the **Purchase decision** template. Have a lawyer read any lease before signing or exiting it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded workspace decision comparing at least three options on cost and commitment, with the runway effect shown."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the lease and note cost, notice period and break clauses"
                - "Price coworking, smaller space and remote-first options"
                - "Survey the team on how often they need a shared space"
                - "Record the decision and its effect on runway"
            - name: Hiring plan gated by runway milestones
              description: |-
                ## Purpose
                Hiring is the biggest lever on burn and the slowest to reverse. Tying each planned hire to a gate, such as runway above a set number of months, a revenue level or a closed round, means the team grows when the company can afford it, not just when it feels busy.

                ## Milestones
                1. Every planned hire for the next twelve months listed with loaded cost.
                2. A gate written for each hire: a runway level, revenue figure or funding event.
                3. The gates agreed by founders and reflected in the model.
                4. Gates reviewed each quarter and hires released or held.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A hiring plan where every role has a written gate, agreed by founders and reviewed each quarter."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List planned hires with start month and loaded cost"
                - "Write a runway, revenue or funding gate for each hire"
                - "Update the model so hires start only when gates are met"
                - "Review gates and release or hold each hire @recurring(quarterly)"
            - name: Venture debt and revenue-based finance evaluation
              description: |-
                ## Purpose
                Venture debt, revenue-based finance and similar products can extend runway without dilution, but they bring repayments, covenants and sometimes warrants that bite hardest when things go badly. Evaluating them calmly, before you need them, lets you decide whether they belong in the plan at all.

                ## Milestones
                1. The main non-dilutive finance types available to your stage listed with how each is repaid.
                2. Two or three providers' typical terms gathered, including covenants and warrants.
                3. Repayments added to the downside scenario to see the effect on runway.
                4. A decision recorded, checked with your lawyer and accountant, on whether to pursue it.

                ## Notes
                This is organisational preparation, not financial advice. Have a lawyer read any term sheet, especially covenants and default clauses.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two non-dilutive finance options with their effect on downside runway and a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List non-dilutive finance types open to companies at your stage"
                - "Collect typical terms from two or three providers"
                - "Model repayments in the downside scenario"
                - "Review the findings with your lawyer and accountant before deciding"
            - name: Founder salary level decision
              description: |-
                ## Purpose
                Founders paying themselves too little burn out or quietly leave, while paying too much shortens runway and worries investors. Agreeing a salary based on real personal costs and stage norms, written down and reviewed yearly, removes a sensitive topic from every other money conversation.

                ## Milestones
                1. Each founder's minimum personal monthly need written down privately.
                2. Typical founder pay at your stage and location checked from published surveys or investors.
                3. A salary for each founder agreed and its runway cost calculated.
                4. The decision minuted, with a review date set.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Founder salaries agreed, minuted with their runway cost, and a yearly review date in the calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down your minimum personal monthly need"
                - "Check typical founder pay for your stage and location"
                - "Agree salaries with co-founders and calculate the runway cost"
                - "Review founder salaries against runway and stage @recurring(yearly)"
            - name: Milestones the remaining runway must buy
              description: |-
                ## Purpose
                Money in the bank is only useful for what it buys: the evidence the next investor or the market needs to see. Naming the two or three milestones the current runway must reach, with dates, keeps spending pointed at them and makes cutting anything else much easier.

                ## Milestones
                1. Two or three milestones written that would justify the next round or profitability.
                2. Each milestone dated and costed in the runway model.
                3. Spend not contributing to a milestone identified as a cut candidate.
                4. The milestones shared with the team and investors.

                ## Notes
                Check the milestones with one or two investors. Founders often pick milestones they find impressive rather than ones the next round actually needs.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two or three dated, costed milestones written down, checked with at least one investor and shared with the team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the milestones the next round or profitability would need"
                - "Ask one or two investors whether those milestones are the right ones"
                - "Date and cost each milestone in the runway model"
                - "Mark spend that does not serve a milestone as a cut candidate"
            - name: Fundraise start date worked back from runway
              description: |-
                ## Purpose
                Raising a round commonly takes several months from first meeting to cash in the bank, and longer in a tight market. Working backwards from the zero-cash date and your cash floor gives the latest safe date to start, so the raise begins from strength rather than desperation.

                ## Milestones
                1. A realistic raise duration agreed, based on recent rounds at your stage and investor advice.
                2. The latest safe start date calculated from the zero-cash date, cash floor and duration.
                3. Preparation work, such as the data room and model, scheduled before that date.
                4. The start date shared with co-founders and lead investors.

                ## Notes
                Add a buffer for a raise that fails first time. Founders who start with six months left often have no room for a second attempt.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A dated latest-safe fundraise start, calculated from runway and raise duration, shared with founders and investors."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask two investors how long rounds at your stage are taking"
                - "Work back from the zero-cash date and cash floor to a start date"
                - "Schedule model and data room preparation before that date"
                - "Share the start date with co-founders and lead investors"
            - name: Insider bridge round preparation
              description: |-
                ## Purpose
                Insiders are most likely to bridge a company that asks early, shows a clear milestone the bridge reaches and has already cut what it can. Preparing the case, the amount and the runway it buys before you ask makes the conversation far more likely to succeed.

                ## Milestones
                1. The bridge amount and the milestone it funds written down.
                2. Cuts already made, or planned alongside the bridge, listed.
                3. A short bridge memo with runway before and after shared with existing investors.
                4. Responses from each existing investor recorded with amounts and conditions.

                ## Notes
                Talk to your lawyer about the instrument and terms before you send anything. Ask early: a bridge requested with two months of cash left is much harder to get.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A bridge memo with amount, milestone and runway impact sent to existing investors, with each response recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the bridge amount and the milestone it would reach"
                - "List cuts made or planned alongside the bridge"
                - "Draft a one-page bridge memo showing runway before and after"
                - "Record each existing investor's response and conditions"
            - name: Board meeting runway section
              description: |-
                ## Purpose
                Boards need the cash story told the same way every meeting: where cash is, how burn is moving, what changed in the forecast and which red lines are near. A standard runway section, prepared a week ahead, gets better questions and stops the meeting being consumed by reconciling numbers.

                ## Milestones
                1. A one-page runway section format agreed with the board chair or lead investor.
                2. Cash, burn, runway and scenario dates filled in from the latest close.
                3. Any red line within three months flagged with a proposed response.
                4. The section sent to directors at least five days before the meeting.

                ## Notes
                Start from the **Board meeting** template, with the runway section as a fixed agenda item.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A runway section in the agreed format sent to directors at least five days before the board meeting."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree the runway section format with the lead investor"
                - "Fill in cash, burn, runway and scenario dates from the latest close"
                - "Flag any red line within three months with a proposed response"
                - "Send the section to directors five days before the meeting"
            - name: Year-end tax and annual bill cash plan
              description: |-
                ## Purpose
                Tax payments, annual insurance, audit fees and yearly software renewals tend to cluster, and a single month can carry two or three times normal burn. Mapping them a quarter ahead and setting cash aside avoids an emergency that looks like a burn spike to investors.

                ## Milestones
                1. Every annual or irregular payment for the next twelve months listed with date and amount.
                2. Tax payment dates and estimates confirmed with the accountant.
                3. The months with the largest outflows identified in the thirteen-week and monthly forecasts.
                4. Cash for the biggest month set aside or the payment timing agreed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A twelve-month calendar of annual and tax payments confirmed with the accountant and reflected in both forecasts."
                cadence: cyclic
              tasks:
                - "List every annual and irregular payment for the next year"
                - "Confirm tax payment dates and estimates with the accountant @recurring(yearly)"
                - "Mark the heaviest months in both forecasts"
                - "Set aside cash or agree timing for the largest payments"
            - name: First ninety days after the round lands
              description: |-
                ## Purpose
                The weeks after a round closes are when burn most often jumps faster than planned, as hires, tools and agencies all start at once. A written spending plan for the first ninety days, tied to the milestones the round must buy, keeps new runway from evaporating in the first two quarters.

                ## Milestones
                1. The new zero-cash date calculated from the post-raise cash position.
                2. A ninety-day spending plan written against the round's milestones.
                3. Hires and new contracts phased so burn rises in steps, not all at once.
                4. A thirty, sixty and ninety-day check of actual burn against the plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written ninety-day post-raise spending plan, with burn checked against it at days thirty, sixty and ninety."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Recalculate the zero-cash date from post-raise cash"
                - "Write the ninety-day spending plan against the round's milestones"
                - "Phase hires and new contracts across the ninety days"
                - "Compare actual burn with the plan at day thirty"
            - name: Founder-funded runway before the first cheque
              description: |-
                ## Purpose
                Before outside money arrives, company runway and founder savings are tangled together, and founders often lend or spend personal money without recording it. Separating the two, setting how much each founder will put in and recording it properly protects both the founders and the cap table later.

                ## Milestones
                1. Company costs separated from personal costs in their own account.
                2. The amount each founder will contribute agreed and written down.
                3. Each contribution recorded as a loan, share purchase or expense claim with the accountant's advice.
                4. Company runway calculated from committed founder funds.

                ## Notes
                How founder money goes in affects tax and later investment. Ask an accountant before the first large transfer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A separate company account, a written founder contribution agreement and every contribution recorded in the books."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Move company spending onto a separate company account"
                - "Agree in writing what each founder will contribute"
                - "Ask the accountant how to record each founder contribution"
                - "Calculate company runway from committed founder funds"
            - name: Solo founder runway with contractors only
              description: |-
                ## Purpose
                Solo founders with a few freelancers have very flexible costs, but also no co-founder to notice when spend creeps. A lightweight version of the runway system, one sheet and a short weekly habit, with contractor commitments reviewed monthly, fits the time a single founder really has.

                ## Milestones
                1. One sheet holding cash, monthly costs, runway and contractor commitments.
                2. Every contractor's rate, notice and expected hours for the next quarter listed.
                3. A monthly cap on contractor spend set.
                4. An outside person, such as a mentor or accountant, receiving a monthly runway figure.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A single runway sheet with contractor commitments, a monthly contractor cap and a runway figure sent to one outside person monthly."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Build a one-sheet runway view with contractor commitments"
                - "List each contractor's rate, notice and expected hours"
                - "Set a monthly cap on total contractor spend"
                - "Choose one outside person to receive your monthly runway figure"
            - name: Runway reset after a fundraise falls through
              description: |-
                ## Purpose
                A raise that does not close leaves the company with less runway than planned and a team that may already know. Resetting quickly, with a new zero-cash date, the cut plan enacted to the right tier and an honest plan for the next attempt or for profitability, preserves the most options.

                ## Milestones
                1. A new zero-cash date calculated without the expected round.
                2. The right tier of the cut plan chosen and started.
                3. Investor feedback from the failed raise summarised into three or four themes.
                4. A recorded decision on the path: retry later, bridge, push to profitability or other options.

                ## Notes
                If runway is now below your cash floor, talk to your accountant or lawyer this week about directors' duties.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A new zero-cash date, the chosen cut tier underway and a recorded decision on the next path within two weeks of the raise ending."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Recalculate runway with the expected round removed"
                - "Pick the cut plan tier that restores your red-line margin"
                - "Group investor feedback into three or four themes"
                - "Agree the next path with co-founders and existing investors"
            - name: Hardware runway with inventory and lead times
              description: |-
                ## Purpose
                Hardware companies pay for parts, tooling and stock months before a customer pays them, so runway can collapse when a production run is ordered. Modelling deposits, lead times and payment terms per production run shows the true cash trough and whether it fits inside the money you have.

                ## Milestones
                1. Each planned production run listed with deposit, balance and delivery dates.
                2. Supplier payment terms and customer payment timing entered in the forecast.
                3. The lowest cash point across the next production cycle identified.
                4. A plan to cover the trough, such as pre-orders, deposits or inventory finance, recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A forecast showing cash timing for each production run, with the lowest point identified and a written plan to cover it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each production run with deposit, balance and delivery dates"
                - "Enter supplier terms and customer payment timing in the forecast"
                - "Find the lowest cash point in the next production cycle"
                - "Write how the trough will be covered"
            - name: Largest customer loss runway response
              description: |-
                ## Purpose
                Losing the largest customer in an early company can remove a large share of revenue in one email. Knowing in advance how much runway that would cost, and checking customer concentration every quarter, lets you act within days rather than discovering the hole at the next month-end.

                ## Milestones
                1. Revenue share of the top three customers calculated.
                2. Runway recalculated as if the largest customer left next month.
                3. A response plan written, naming which cut tier and actions would follow.
                4. Customer concentration checked each quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written runway impact and response plan for losing the largest customer, with concentration checked every quarter."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Calculate the revenue share of your top three customers"
                - "Model runway as if the largest customer left next month"
                - "Write the response plan and the cut tier it would trigger"
                - "Check the top customers' share of revenue @recurring(quarterly)"
            - name: Runway for lumpy or seasonal revenue
              description: |-
                ## Purpose
                Enterprise deals that close twice a year, or consumer sales concentrated in one season, make a single average burn figure misleading. Forecasting cash by month from the pipeline or last year's season, with a cash buffer sized for the longest dry spell, keeps runway honest between peaks.

                ## Milestones
                1. Revenue by month for the last year, or the weighted pipeline by expected close month, laid out.
                2. The longest stretch with little cash coming in identified.
                3. A cash buffer covering that stretch added to the cash floor.
                4. Pipeline-to-cash timing checked monthly against the forecast.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monthly cash forecast built from seasonality or pipeline timing, with a buffer for the longest dry spell added to the floor."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Lay out revenue or weighted pipeline by month"
                - "Identify the longest stretch with little cash coming in"
                - "Add a buffer for that stretch to the cash floor"
                - "Check pipeline close dates against the cash forecast @recurring(monthly:22)"
            - name: Treasury policy for idle cash after a raise
              description: |-
                ## Purpose
                Idle cash after a large raise needs a simple written policy: how much stays instantly available, which banks hold it and what low-risk places hold the rest. Writing the policy before the money lands, with your accountant and board, avoids both concentration risk and a founder improvising with investors' money.

                ## Milestones
                1. Months of operating cash to keep instantly available agreed.
                2. Limits on how much sits with any single bank written down.
                3. Permitted low-risk holdings for surplus cash agreed with the board and accountant.
                4. Balances by bank and holding reviewed against the policy every quarter.

                ## Notes
                This is a governance document, not investment advice. Keep permitted holdings conservative and get the board to approve the policy.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-approved treasury policy with liquidity, bank limits and permitted holdings, reviewed against actual balances each quarter."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Decide how many months of cash stay instantly available"
                - "Set a limit on cash held with any single bank"
                - "Agree permitted holdings with the board and accountant"
                - "Review balances by bank against the policy @recurring(quarterly)"
            - name: Payroll continuity if the main bank fails
              description: |-
                ## Purpose
                If your only bank freezes or fails, payroll and suppliers stop even if the company is solvent. A second banking relationship, some cash held there and a tested way to run payroll from it is cheap insurance that most startups only think about the week a bank makes the news.

                ## Milestones
                1. A second business bank account opened and verified.
                2. At least one payroll cycle of cash held at the second bank.
                3. Payroll provider and key suppliers able to be paid from the second account.
                4. A test payment made and the switchover steps written down.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A verified second bank account holding at least one payroll cycle, with a tested payment and written switchover steps."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Apply for a second business bank account"
                - "Move at least one payroll cycle of cash to the second bank"
                - "Add the second account to the payroll provider as a backup"
                - "Test the switchover with a small payment @recurring(yearly)"
            - name: Probability-weighted runway forecast
              description: |-
                ## Purpose
                Single-number forecasts hide how uncertain revenue, hiring dates and fundraise timing really are. Assigning ranges to the few drivers that matter and running many combinations, in a spreadsheet or a simple simulation tool, gives a spread of zero-cash dates and the chance of crossing each red line.

                ## Milestones
                1. The four or five drivers with the most effect on runway identified.
                2. A low, likely and high value set for each driver with a short reason.
                3. A simulation or data table producing a range of zero-cash dates.
                4. The probability of crossing each red line in the next twelve months written down.

                ## Notes
                The ranges matter more than the method. Ask a co-founder to challenge each range before you trust the output.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A range of zero-cash dates from at least four ranged drivers, with the chance of crossing each red line recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the four or five drivers that move runway most"
                - "Set low, likely and high values for each driver"
                - "Build a data table or simulation of zero-cash dates"
                - "Record the chance of crossing each red line this year"
            - name: Burn benchmarking against stage peers
              description: |-
                ## Purpose
                Comparing your burn, headcount and burn multiple with companies at the same stage shows whether you are unusually lean, normal or heavy, which shapes both the next raise and internal debates about spend. Peer founders, investors and published surveys are the usual sources; the comparison only works when definitions match.

                ## Milestones
                1. Three to five comparable companies or a published survey for your stage identified.
                2. Burn, headcount and burn multiple compared using the same definitions.
                3. The two largest differences explained.
                4. One change to the spending plan considered as a result and recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of burn, headcount and burn multiple against at least three peers or a survey, with differences explained."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your investors for stage benchmarks they can share"
                - "Swap burn figures with two or three trusted peer founders"
                - "Compare on matching definitions of burn and headcount"
                - "Record the two biggest differences and what you will do"
---

# Startup Runway Management

This area is for founders who need to know, at any moment, how much cash the company has, how fast it is going and how many months are left. It starts with the foundations (a true cash position, burn history, the zero-cash date, committed costs, a 13-week forecast, an 18-month model and the red lines that trigger action), then the weekly and monthly routines that keep those numbers current, the finance skills a founder needs to read them, the decisions that stretch runway, the dated moments like a fundraise start or a board meeting, variants for solo, founder-funded, hardware and seasonal companies, and finally specialist work on treasury, bank risk and probability-weighted forecasts.

What repeats is a Monday cash check, a weekly forecast roll and receivables chase, a monthly close, variance review and payment run, and quarterly reforecasts, subscription audits and hiring gates, with a few yearly reviews of tax, salaries and bank contingency. The **Metrics log**, **Month-end close**, **Risk register**, **Vendor**, **Purchase decision** and **Board meeting** templates pair with the cash check, the monthly close, the red lines, supplier renegotiation, the office decision and the board's runway section. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
