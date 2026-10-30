---
id: personal-finance.irregular-income-smoothing
name: Irregular Income Smoothing
description: "A steady monthly salary paid to yourself from a holding account, tax and buffer pots filled from every payment, a rolling cash flow forecast and plans for quiet seasons and big one-off fees."
category: personal
version: 1.0.0
tags: [personal-finance, irregular-income-smoothing, freelancer, creative, variable-income, tax-set-aside, cash-flow, income-buffer]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - savings-goal
    - purchase-decision
    - month-end-close
    - metrics-log
    - risk-register
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Irregular Income Smoothing
          description: "Turning unpredictable freelance, commission or seasonal income into a steady monthly salary with buffers and tax set-asides."
          projects:
            - name: Twelve-month income history from every source
              description: |-
                ## Purpose
                Nobody can smooth an income they cannot see, and most freelancers carry only a rough sense of their good and bad months. Listing every payment received over the last twelve months, by date it actually landed rather than the date it was invoiced, shows the real range: the best month, the worst month and how often the gaps came.

                ## Milestones
                1. Every payment received in the last twelve months listed with the date it reached your account, the payer and the amount.
                2. Payments grouped into months, with a monthly total for each.
                3. The highest, lowest and average monthly totals written at the top of the sheet.
                4. Any one-off payments that will not repeat marked so they do not inflate the average.

                ## Notes
                Use money received, not money invoiced. A large invoice paid ninety days late belongs to the month it arrived, because that is the month your rent depended on it.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A sheet listing twelve months of received income by month, with the best, worst and average month written at the top."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export twelve months of statements from every account clients pay into"
                - "Copy each incoming payment into one sheet with date, payer and amount"
                - "Total each month and note the best, worst and average"
                - "Mark one-off payments that are unlikely to repeat"
            - name: Floor and normal monthly spending figures
              description: |-
                ## Purpose
                Irregular earners need two numbers, not one: the floor that keeps the household running in a lean month, and the normal figure you live on when work is steady. Both come from your own statements, and together they set the lowest salary you can survive on and the salary you are aiming for.

                ## Milestones
                1. Three months of personal spending sorted into fixed essentials, flexible essentials and optional spending.
                2. A floor figure covering only what must be paid in a lean month.
                3. A normal figure covering how the household actually lives in a steady month.
                4. Both figures dated and saved where the salary decision will use them.

                ## Notes
                Start from the **Monthly budget and bills** template. Include yearly costs divided by twelve in both figures, or the first annual renewal in a quiet month will catch you out.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A dated floor figure and a dated normal figure for monthly household spending, both built from three months of statements."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download three months of personal account and card statements"
                - "Sort every outgoing into fixed, flexible or optional"
                - "Work out the floor figure from fixed and flexible essentials only"
                - "Write both figures and today's date in your money notes"
            - name: Mapping the seasonal shape of your income
              description: |-
                ## Purpose
                Plenty of irregular income is more predictable than it feels: wedding photographers are busy in summer, tutors around exams, retail commission at Christmas, and corporate clients go quiet in August and late December. Marking which months have been strong and weak over two or three years turns surprise dry spells into known dates you can plan for.

                ## Milestones
                1. Monthly income totals for as many past years as you have records, side by side.
                2. Each calendar month labelled busy, average or quiet.
                3. The causes of each busy and quiet stretch noted, such as client budget cycles, school holidays or weather.
                4. A one-page income calendar showing the expected shape of the coming year.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page income calendar labelling each month of the coming year busy, average or quiet, with the reason for each label."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Line up monthly income totals from each year you have records for"
                - "Label each calendar month busy, average or quiet"
                - "Write the likely cause beside every quiet month"
                - "Draw up an income calendar for the next twelve months"
            - name: Separate business and personal accounts
              description: |-
                ## Purpose
                When client payments, tax money and grocery spending share one account, the balance tells you nothing and every decision is a guess. Opening a dedicated account for work income and expenses, separate from the account your salary lands in, is the physical change the rest of the smoothing system is built on.

                ## Milestones
                1. A separate account open for business income and business expenses.
                2. Every client, platform and agency updated with the new payment details.
                3. Recurring business subscriptions and tools moved to a card on the business account.
                4. A month passed with no personal spending from the business account.

                ## Notes
                Sole traders in many countries can use a second personal account for this; a limited company needs an account in the company's own name. Check your bank's terms before using a personal account for trading.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A business account is open, every payer has its details, and one full month shows no personal spending from it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every client, platform and agency that pays you"
                - "Open a separate account for work income and expenses"
                - "Send the new payment details to every payer on the list"
                - "Move business subscriptions onto the business account card"
            - name: Income holding account for every payment
              description: |-
                ## Purpose
                At the core of smoothing sits a holding account that catches every payment, so nothing reaches your spending account directly. Once all income pools in one place and your salary is drawn from it on a fixed day, a big month stops feeling like permission to spend and a dry month stops feeling like a crisis.

                ## Milestones
                1. One account chosen as the holding account, with no card spending from it.
                2. All income, or the business account's surplus, routed into it.
                3. The account renamed so its job is obvious every time you log in.
                4. The first full month of income collected there before any salary is paid.

                ## Notes
                An easy-access savings account with instant transfers works well, because the money earns a little while it waits. Avoid notice accounts here: the salary transfer must never be blocked.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named holding account receives all work income and has held one full month of payments before the first salary transfer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose which account will act as the holding account"
                - "Rename it so its purpose shows in your banking app"
                - "Route every incoming payment into it, directly or by sweep"
                - "Check no card or direct debit draws from the holding account"
            - name: Tax set-aside percentage and pot
              description: |-
                ## Purpose
                Employees have tax taken before the money arrives; the self-employed receive the whole amount and owe a share of it months later. Agreeing a set-aside percentage with an accountant or the tax authority's own calculator, and moving it into a separate pot from every payment, is what stops the annual tax bill being paid from next year's work.

                ## Milestones
                1. Last year's tax and social contributions bill divided by last year's profit to give an effective rate.
                2. A set-aside percentage agreed, with a small margin added for growth in income.
                3. A separate savings pot opened and named for tax.
                4. The pot topped up for every payment received since the last tax bill.

                ## Notes
                Many sole traders start somewhere between 20 and 30 percent of profit, but the right figure depends on your country, income level and expenses, so check it with an accountant or the official calculator. Leaving value-added or sales tax in the pot too is safer than spending it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written set-aside percentage, checked against last year's bill or an accountant's estimate, and a tax pot holding that share of income received since the last bill."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find last year's tax bill and the profit figure it was based on"
                - "Ask your accountant or the official calculator for a set-aside rate"
                - "Open a separate savings pot named for tax"
                - "Back-fill the pot for payments received since your last tax bill @priority(high)"
            - name: Setting your first monthly salary figure
              description: |-
                ## Purpose
                Your salary is the fixed amount the holding account pays your personal account each month, whatever came in. Setting it between your floor and normal figures, and at or below your worst realistic average month after tax, means the holding account can keep paying it through a dry spell instead of running out in the second quiet month.

                ## Milestones
                1. Average monthly income after tax and business costs worked out from the income history.
                2. The salary set no higher than that average, and no lower than the floor figure.
                3. The gap between salary and normal spending covered by a written list of cuts.
                4. The figure and the date it will next be reviewed written in your money notes.

                ## Notes
                Start lower than feels comfortable. Raising a salary after six steady months is easy; cutting one after the holding account empties is painful.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A monthly salary figure is recorded, sits between the floor figure and the after-tax average, and has a review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Subtract tax and business costs from your average monthly income"
                - "Compare the result with your floor and normal spending figures"
                - "Choose a salary figure no higher than the after-tax average"
                - "Write the salary and its review date in your money notes"
            - name: Smoothing buffer target in months of salary
              description: |-
                ## Purpose
                Before the system runs on autopilot, the holding account needs a cushion so a slow month does not stop the salary. Two or three months of salary sitting in the holding account, separate from any emergency fund for genuine shocks, is a common starting target, with more for very seasonal work.

                ## Milestones
                1. The longest run of below-average months in your income history identified.
                2. A buffer target in months of salary chosen to cover that run.
                3. The target amount written down and tracked as a savings goal.
                4. The buffer reached and the salary paid from it for the first time.

                ## Notes
                Start from the **Savings goal** template. Keep this buffer apart from your emergency fund: one smooths normal lumpiness, the other covers illness, broken boilers and lost contracts.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A buffer target expressed in months of salary and as an amount is recorded, with progress towards it tracked at least monthly."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the longest run of below-average months in your history"
                - "Choose how many months of salary the buffer should hold"
                - "Set up a savings goal for the buffer amount"
                - "Decide how much of each payment goes to the buffer until it is full"
            - name: Lean-month spending plan
              description: |-
                ## Purpose
                Quiet months are easier when the cuts were chosen in advance by a calm version of you. A written lean-month plan lists which spending pauses first, which subscriptions get frozen and which payments can be moved, so when the salary has to drop you switch plans instead of panicking.

                ## Milestones
                1. Optional spending ranked in the order it would be cut.
                2. Subscriptions and memberships that can be paused, rather than cancelled, identified.
                3. A lean salary figure written down, close to the floor figure.
                4. The trigger for switching to the lean plan agreed, such as the buffer falling below one month.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page lean-month plan exists with ranked cuts, a lean salary figure and a written trigger for using it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rank optional spending in the order you would cut it"
                - "Check which subscriptions allow a pause instead of cancelling"
                - "Write the lean salary figure beside the normal salary"
                - "Agree the buffer level that switches you to the lean plan"
            - name: Monthly salary transfer from the holding account
              description: |-
                ## Purpose
                Paying yourself the same amount on the same day each month is what turns lumpy income into something that feels like a job. A standing order from the holding account to your personal account, set a day or two before the biggest household bills leave, makes the salary automatic and the bills safe.

                ## Milestones
                1. A standing order set up for the salary figure on a fixed day.
                2. The transfer day placed before rent, mortgage and other large bills.
                3. Six consecutive salary payments made on time.
                4. No extra ad hoc transfers from holding to personal in those six months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly salary transfers of the agreed amount, on the agreed day, with no extra transfers in between."
                cadence: rolling
              tasks:
                - "Set up a standing order for your salary from the holding account"
                - "Move the transfer day to before your largest monthly bills"
                - "Confirm the salary arrived and the holding balance can cover next month @recurring(monthly:1)"
                - "Log any month you needed an extra transfer and why"
            - name: Split every payment the day it lands
              description: |-
                ## Purpose
                Each client payment has three jobs: tax, buffer and salary. Moving the tax share and any buffer top-up out the day it arrives, before the money starts to look spendable, keeps the pots accurate without a big catch-up session every quarter.

                ## Milestones
                1. A written split, such as tax percentage, buffer percentage and remainder to holding.
                2. Automatic rules set up where your bank supports them.
                3. Every payment in a month split within two days of arriving.
                4. The pots matching the written split when checked at month end.

                ## Notes
                Banks and apps with automatic percentage rules make this hands-free. Where yours does not, a weekly session catching up on the week's payments works nearly as well.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every payment received in a full quarter has its tax and buffer share moved within two days, with pot balances matching the split."
                cadence: rolling
              tasks:
                - "Write your split percentages on one line in your money notes"
                - "Set up automatic percentage rules if your bank offers them"
                - "Check each payment this week has had its tax and buffer share moved @recurring(weekly:fri)"
            - name: Weekly invoicing and payment chasing
              description: |-
                ## Purpose
                Much of the lumpiness in freelance income is self-inflicted: invoices sent late, overdue ones not chased, and work finished but never billed. A short fixed weekly session for sending invoices and chasing anything past its due date shortens the gap between doing the work and having the money.

                ## Milestones
                1. A list of all open invoices with amount, sent date and due date.
                2. A weekly slot in the calendar for invoicing and chasing.
                3. A short polite chaser message written and saved for reuse.
                4. Average days to payment worked out and lower after three months.

                ## Notes
                Send the invoice the day the work is delivered, not at the end of the month. Every week of delay on sending is usually a week of delay on payment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of weekly invoicing sessions logged, with no finished work unbilled for more than seven days and average days to payment recorded."
                cadence: rolling
              tasks:
                - "List every open invoice with its amount and due date"
                - "Ask the agent to draft a short, firm chaser for overdue invoices"
                - "Send invoices for finished work and chase anything overdue @recurring(weekly:mon)"
                - "Work out your average days to payment at the end of each quarter"
            - name: Rolling 90-day cash flow forecast
              description: |-
                ## Purpose
                Looking three months ahead, with booked work, likely work and the salary going out on one sheet, warns you about a dry patch while there is still time to find work or trim spending. Updated monthly, it turns the holding account balance from a number you check nervously into one you can predict.

                ## Milestones
                1. A sheet with the next three months in columns and income, salary, tax and buffer in rows.
                2. Booked income and likely income kept on separate lines.
                3. The projected holding balance at each month end calculated.
                4. Three monthly updates completed, each compared with what actually happened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A 90-day forecast updated in three consecutive months, each with a note comparing the previous forecast with actual income."
                cadence: rolling
              tasks:
                - "Build a three-month forecast sheet with booked and likely income on separate lines"
                - "Roll the forecast forward a month and compare last month's guess with reality @recurring(monthly:20)"
                - "Flag any month where the projected holding balance falls below one month of salary"
            - name: Booked work and pipeline tracker
              description: |-
                ## Purpose
                Income three months from now depends on conversations you have this week. A simple tracker of confirmed work, quotes sent and leads, each with a value and a likely payment month, feeds the cash flow forecast and shows early when the pipeline is thinning.

                ## Milestones
                1. A tracker with stages for lead, quote sent, confirmed and invoiced.
                2. Each entry carrying a value and an expected payment month.
                3. The tracker updated weekly for two months.
                4. A rule written for how many months of confirmed work should trigger more outreach.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pipeline tracker updated weekly for eight weeks, with expected payment months that feed the cash flow forecast."
                cadence: rolling
              tasks:
                - "Create a tracker with lead, quoted, confirmed and invoiced stages"
                - "Add every live job and quote with its value and expected payment month"
                - "Move entries between stages and add new leads @recurring(weekly:wed)"
                - "Decide how thin confirmed work can get before you start outreach"
            - name: Monthly income and salary reconciliation
              description: |-
                ## Purpose
                Once a month, the holding account, tax pot and buffer need to agree with what came in and what went out, or small errors grow into a tax pot that is quietly short. A thirty-minute month-end check catches missed splits, late payers and expenses paid from the wrong account.

                ## Milestones
                1. A month-end checklist covering income received, splits made, salary paid and pot balances.
                2. Income received matched against invoices marked paid.
                3. Any shortfall in the tax pot or buffer corrected the same day.
                4. Six consecutive month-end checks completed.

                ## Notes
                Start from the **Month-end close** template and cut it down to the handful of checks a one-person business needs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive month-end reconciliations recorded, each confirming tax pot, buffer and holding balances against income received."
                cadence: rolling
              tasks:
                - "Write a short month-end checklist from the template"
                - "Match income received against invoices marked paid and correct the pots @recurring(monthly:28)"
                - "Note any expense paid from the wrong account and move it back"
            - name: Buffer level traffic-light check
              description: |-
                ## Purpose
                The size of the holding buffer decides whether you can keep paying yourself the normal salary. Three bands, such as green above three months, amber between one and three, and red below one, give a monthly signal for when to raise the salary, hold it, or switch to the lean plan.

                ## Milestones
                1. Green, amber and red bands written in months of salary.
                2. The action for each band agreed, from topping up savings to the lean plan.
                3. The band recorded each month for six months.
                4. At least one decision made from the bands rather than from mood.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly buffer readings recorded with their band and the action taken in each case."
                cadence: rolling
              tasks:
                - "Write your green, amber and red buffer bands in months of salary"
                - "Agree one action for each band"
                - "Record the buffer in months of salary and its band @recurring(monthly:10)"
            - name: Quarterly tax pot check against the estimate
              description: |-
                ## Purpose
                Set-aside percentages chosen in January can be wrong by June if income rose, expenses fell or tax rules changed. Comparing the pot each quarter with a fresh estimate of the bill shows whether to top it up or lower the percentage, long before the deadline makes it urgent.

                ## Milestones
                1. Profit for the year to date worked out from your records.
                2. An estimated tax bill for the year calculated or obtained from your accountant.
                3. The pot balance compared with the share of that bill due so far.
                4. The set-aside percentage adjusted if the gap is more than a month of tax.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly checks in a year, each recording year-to-date profit, an estimated bill and the pot balance, with any adjustment noted."
                cadence: cyclic
              tasks:
                - "Work out profit so far this tax year from your records"
                - "Compare the tax pot with an updated estimate of the bill @recurring(quarterly)"
                - "Top up the pot or change the percentage if the gap is large"
            - name: Quarterly salary review
              description: |-
                ## Purpose
                The salary figure should follow evidence, not the last good month. Reviewing it each quarter against the trailing twelve-month average, the buffer level and the forecast lets it rise steadily in a strong year and fall gently before a weak one, rather than lurching.

                ## Milestones
                1. The trailing twelve-month after-tax average worked out each quarter.
                2. The salary compared with that average, the buffer band and the 90-day forecast.
                3. A decision recorded to raise, hold or lower the salary, with one line of reasoning.
                4. Any change applied to the standing order from the next month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly salary decisions recorded in a year, each citing the trailing average, buffer band and forecast."
                cadence: cyclic
              tasks:
                - "Update your trailing twelve-month after-tax average"
                - "Decide whether to raise, hold or lower the salary and write why @recurring(quarterly)"
                - "Change the standing order amount if the salary moved"
            - name: Annual review of the smoothing system
              description: |-
                ## Purpose
                Once a year, look at the whole machine: did the salary hold, did the buffer ever hit red, was the tax pot enough, and which months were the real pinch points. A written annual review makes next year's salary, set-aside rate and buffer target deliberate choices instead of inherited ones.

                ## Milestones
                1. The year's income, salary paid, tax pot use and buffer lows summarised on one page.
                2. The worst month and what caused it named.
                3. Next year's salary, set-aside percentage and buffer target set.
                4. One change to the system chosen and scheduled.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A one-page annual review is written, with next year's salary, set-aside percentage and buffer target recorded."
                cadence: cyclic
              tasks:
                - "Block half a day for the annual smoothing review @recurring(yearly)"
                - "Summarise income, salary paid, tax pot use and buffer lows"
                - "Set next year's salary, set-aside rate and buffer target"
                - "Pick one change to the system and put it in the calendar"
            - name: How income smoothing methods compare
              description: |-
                ## Purpose
                There are several ways to pay yourself from lumpy income: a fixed salary from a buffer, a percentage of last month's takings, a base salary plus a quarterly bonus from surplus, or living on last month's income. Learning how each behaves in a run of good and bad months helps you pick the one that suits your work and temperament.

                ## Milestones
                1. Four smoothing methods written up in a sentence or two each.
                2. Each method tested on paper against your own twelve-month income history.
                3. The lowest salary month and the buffer low under each method noted.
                4. One method chosen, or confirmed, with the reason recorded.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four smoothing methods tested against your own income history, with one chosen and the reason written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read about fixed salary, percentage, base-plus-bonus and last-month methods"
                - "Run each method against your twelve-month history in a sheet"
                - "Note the lowest salary month and buffer low for each method"
                - "Write down the method you will use and why"
            - name: Profit versus turnover, in plain numbers
              description: |-
                ## Purpose
                A month with a large invoice can still be a poor month once materials, software, travel and subcontractors are paid. Understanding the difference between turnover, profit and what is left after tax means your salary is set from money that is genuinely yours, not from gross receipts.

                ## Milestones
                1. Turnover, business costs, profit and after-tax profit explained in your own words.
                2. Last year's figures laid out in those four lines.
                3. Your typical costs as a share of turnover worked out.
                4. The salary calculation checked to make sure it starts from after-tax profit.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Last year's turnover, costs, profit and after-tax profit are set out on one page, and the salary calculation uses after-tax profit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-line definition of turnover, profit and after-tax profit"
                - "Lay out last year's numbers on those four lines"
                - "Work out costs as a percentage of turnover"
                - "Check your salary figure starts from after-tax profit"
            - name: Advance tax payments and payments on account
              description: |-
                ## Purpose
                Many tax systems ask the self-employed to pay part of next year's bill in advance, so the first bill after a good year can be close to double what people expect. Learning how advance payments work where you live, and when they fall, prevents the year-two shock that empties a lot of new freelancers' savings.

                ## Milestones
                1. The advance payment rules for your country found on the tax authority's site.
                2. The dates each advance or instalment falls due written in your calendar.
                3. Last year's bill used to estimate the size of each advance payment.
                4. Your accountant asked whether reducing advance payments is sensible if income has fallen.

                ## Notes
                In the UK these are called payments on account; other countries use quarterly estimated payments or instalments. Only reduce advance payments with a clear reason, because underpaying can bring interest.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The dates and estimated amounts of every advance tax payment for the coming year are in your calendar, checked against official guidance."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the tax authority's guidance on advance or instalment payments"
                - "Put every advance payment date for the year in your calendar"
                - "Estimate each payment from last year's bill"
                - "Ask your accountant whether a lower advance makes sense this year"
            - name: Late payment rights and payment terms
              description: |-
                ## Purpose
                Payment terms decide when the money lands, and they are more negotiable than most freelancers assume. Knowing what terms are normal in your field, what your country's late payment rules allow you to charge, and how to state terms clearly on every quote shortens the waits that cause dry months.

                ## Milestones
                1. The usual payment terms in your field noted from peers or industry bodies.
                2. Your country's late payment rules for business invoices read and summarised.
                3. Standard terms written for your quotes and invoices.
                4. The terms applied to every new piece of work from now on.

                ## Notes
                This is about knowing your rights, not legal advice. For a large disputed debt, speak to a solicitor or a small business advice service.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Standard payment terms are written into your quote and invoice templates, informed by a one-page summary of your country's late payment rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask two peers what payment terms they use with clients"
                - "Read your government's guidance on late payment of business invoices"
                - "Write standard payment terms for quotes and invoices"
                - "Add the terms to your invoice template"
            - name: Pension contributions from lumpy income
              description: |-
                ## Purpose
                Without an employer making monthly contributions, retirement saving is often the first thing a freelancer drops in a quiet month and forgets in a busy one. Building a small fixed monthly contribution into the salary, plus a lump sum from surplus in strong years, keeps saving going without straining the buffer.

                ## Milestones
                1. Your current pension arrangements and the tax relief available to the self-employed found.
                2. A small fixed monthly contribution set that survives a lean month.
                3. A rule written for a lump-sum top-up when the buffer is green at year end.
                4. The first lump sum, or the decision to skip it, recorded.

                ## Notes
                Choosing a pension product or investment is a separate decision; speak to a regulated adviser or a free government guidance service if unsure.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A fixed monthly pension contribution is running and a written surplus rule has been applied at least once."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find out how pension tax relief works for the self-employed where you live"
                - "Set a fixed monthly contribution you could keep paying in a lean month"
                - "Write a rule for lump-sum top-ups from a green buffer"
                - "Decide on a lump-sum top-up before the tax year ends @recurring(yearly)"
            - name: How lenders and landlords read self-employed income
              description: |-
                ## Purpose
                Lenders and letting agents usually want two or three years of accounts or tax calculations, and many average the years or take the lower one. Knowing what they look for before you need a mortgage, tenancy or loan lets you keep the right records and avoid cutting your declared profit just before an application.

                ## Milestones
                1. The documents lenders and landlords typically ask the self-employed for listed.
                2. How they calculate income, such as averaging two years or taking the latest, noted.
                3. Gaps in your own records identified.
                4. A plan to fill those gaps written before any application.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of the income documents lenders and landlords would ask you for, with any gaps in your records and a plan to fill them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read two lenders' requirements for self-employed applicants"
                - "Note how each one calculates your income"
                - "Check which of those documents you already hold"
                - "Write down how you will fill any gaps"
            - name: Deposits and staged payments in your terms
              description: |-
                ## Purpose
                Being paid in full only at the end of a three-month project means three months of carrying the cost. Asking for a deposit at booking and staged payments at milestones spreads income across the work and protects you if a client cancels halfway.

                ## Milestones
                1. Current projects reviewed for how much was paid upfront.
                2. A standard deposit and staging structure chosen for larger jobs.
                3. Quote template updated to show the payment stages.
                4. Three new projects agreed with a deposit.

                ## Notes
                A common pattern is a deposit at booking, a stage payment midway and the balance on delivery. Clients rarely object when the structure is on the quote from the start.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deposit and staged payment structure is in your quote template and has been agreed on three new projects."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Review how your last five projects were paid"
                - "Choose a deposit and staging structure for jobs over a set value"
                - "Add the payment stages to your quote template"
                - "Use the new structure on the next three quotes"
            - name: Choosing a bank with pots and automatic splits
              description: |-
                ## Purpose
                Good banking set-up makes smoothing almost effortless: separate named pots, automatic percentage splits on incoming payments and instant transfers to the salary account. Comparing two or three providers against those needs, rather than staying with the default bank, can save an hour of manual moves each month.

                ## Milestones
                1. Must-have features listed: named pots, percentage rules, instant transfers, low fees.
                2. Three providers compared against the list.
                3. One chosen and the reason recorded.
                4. Pots and rules set up in the chosen provider.

                ## Notes
                Start from the **Purchase decision** template. Check the deposit protection limit if your tax pot grows large.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three providers compared against a written feature list, with one chosen and its pots and split rules set up."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the banking features your smoothing system needs"
                - "Compare three providers against that list"
                - "Record which one you chose and why"
                - "Set up the tax, buffer and holding pots in the chosen provider"
            - name: Retainer or subscription income experiment
              description: |-
                ## Purpose
                Even a small share of predictable monthly income takes pressure off the buffer. Offering one existing client a monthly retainer, or packaging a service as a subscription, tests whether some of your work can be turned into a fixed monthly payment.

                ## Milestones
                1. Clients who need regular, ongoing work identified.
                2. A retainer or subscription offer drafted with scope and monthly price.
                3. The offer made to at least two clients.
                4. The result after three months recorded, including any retained income.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A retainer or subscription offer has been made to at least two clients, with the outcome after three months recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List clients who come back for similar work every month"
                - "Draft a retainer offer with scope and monthly price"
                - "Send the offer to two of those clients"
                - "Record how much retained income you had after three months"
            - name: Lowering the salary floor by cutting fixed costs
              description: |-
                ## Purpose
                The lower your fixed costs, the smaller the buffer you need and the longer a quiet spell you can ride out. Reviewing fixed commitments such as contracts, insurance and finance agreements with the floor figure in mind shows which ones are quietly making irregular income harder to live with.

                ## Milestones
                1. Every fixed monthly commitment listed with its amount and end date.
                2. Each marked keep, reduce or end.
                3. At least two reductions made.
                4. The floor figure recalculated after the changes.

                ## Notes
                Focus on commitments with long notice periods or exit fees. A flexible cost you can pause in a lean month is worth more to an irregular earner than a slightly cheaper fixed one.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A list of fixed commitments marked keep, reduce or end, with two reductions made and the floor figure recalculated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every fixed monthly commitment and when it can end"
                - "Mark each one keep, reduce or end"
                - "Make the two reductions with the biggest effect"
                - "Recalculate your floor figure"
            - name: Timing annual bills around your busy season
              description: |-
                ## Purpose
                An annual insurance renewal or professional subscription that falls in your quietest month hits harder than one paid in a busy month. Where providers allow it, moving renewal dates or paying from a sinking pot set up in the busy season stops annual costs stacking up when income is lowest.

                ## Milestones
                1. Every annual or termly bill listed with its due month.
                2. Bills falling in quiet months flagged against your income calendar.
                3. Renewal dates moved where providers allow it.
                4. The rest covered by money set aside during busy months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every annual bill is listed by due month, and none falls in a quiet month without money already set aside for it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List annual and termly bills with their due months"
                - "Compare the list with your income calendar"
                - "Ask providers whether quiet-month renewals can be moved"
                - "Set money aside in busy months for the bills that cannot move"
            - name: Raising your salary after a strong year
              description: |-
                ## Purpose
                A great year tempts people to raise their salary by the full amount, and a single great year is often followed by an ordinary one. Deciding how much of a rise the evidence supports, and where the rest goes, locks in some of the gain without setting a salary next year cannot pay.

                ## Milestones
                1. The strong year's income compared with the previous two years.
                2. One-off payments removed to show the repeatable level.
                3. A salary increase chosen that the repeatable level supports.
                4. The surplus allocated between buffer, tax, pension and goals.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written salary decision after a strong year, citing the repeatable income level and showing where any surplus went."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare this year's income with the previous two years"
                - "Remove one-off payments to find the repeatable level"
                - "Choose a salary rise the repeatable level supports"
                - "Write down where the rest of the surplus goes"
            - name: Borrowing rules for dry months
              description: |-
                ## Purpose
                Overdrafts, credit cards and buy now pay later make it easy to paper over a dry month, and the habit can quietly become permanent. Writing down in advance what you will and will not borrow against, and the point at which you would ask for help, keeps short-term credit a rare tool rather than a second buffer.

                ## Milestones
                1. Current credit available listed: overdraft, cards, other lines.
                2. Written rules for when, if ever, each may be used to cover a gap.
                3. A maximum borrowing amount and a repayment rule agreed.
                4. A free debt advice contact noted for if the rules are broken twice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One page of written borrowing rules for dry months exists, with a maximum amount, a repayment rule and a debt advice contact."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every source of credit you could draw on"
                - "Write when each may or may not be used to cover a gap"
                - "Set a maximum amount and how fast it must be repaid"
                - "Save the details of a free debt advice service"
            - name: Limiting how much one client pays you
              description: |-
                ## Purpose
                Losing a client who provides most of your income is not a quiet month but a cliff. Tracking each client's share of the last twelve months and setting a ceiling, such as no more than 40 percent from one source, shows when to put effort into finding others before the risk arrives.

                ## Milestones
                1. Each client's share of the last twelve months of income calculated.
                2. A ceiling chosen for the share any one client should provide.
                3. Clients above the ceiling identified, with a plan to add others.
                4. The shares rechecked each quarter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Client shares of twelve months' income calculated, a ceiling chosen, and the check repeated for at least two quarters."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Calculate each client's share of the last twelve months of income"
                - "Choose the most any single client should provide"
                - "Plan outreach to new clients if one is above the ceiling"
                - "Recalculate client shares from the income sheet @recurring(quarterly)"
            - name: Tax bill month preparation
              description: |-
                ## Purpose
                For the self-employed, the annual tax deadline is the single biggest outgoing of the year, and often lands just after a quiet holiday period. Preparing a few weeks ahead, with figures filed early and the money already sitting in the tax pot, makes it a transfer rather than a scramble.

                ## Milestones
                1. The return filed at least four weeks before the payment deadline.
                2. The amount due compared with the tax pot balance.
                3. Any shortfall covered from the buffer with a plan to refill it.
                4. The payment made and confirmed before the deadline.

                ## Notes
                Filing early does not mean paying early; it means you know the number in time to deal with any gap.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The return is filed at least four weeks before the deadline and the bill is paid from the tax pot on or before the due date."
                cadence: cyclic
              tasks:
                - "Book time to file your return six weeks before the deadline @recurring(yearly)"
                - "Compare the bill with the tax pot balance"
                - "Cover any gap and note how the buffer will be refilled"
                - "Save the payment confirmation with your tax records"
            - name: Getting through a known quiet season
              description: |-
                ## Purpose
                If your income calendar shows a quiet stretch every year, it can be planned like a holiday rather than endured. Building the buffer during the busy months, lining up admin and skills work for the quiet ones, and deciding the salary in advance turns the dry season into a scheduled part of the year.

                ## Milestones
                1. The quiet season's months and expected income written down.
                2. The buffer needed to keep paying salary through it calculated.
                3. Extra money set aside during the busy months beforehand.
                4. The salary paid in full through the quiet season without new borrowing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One quiet season completed with salary paid as planned from the buffer and no new borrowing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the months of your next quiet season and expected income"
                - "Work out how much buffer you need to pay salary through it"
                - "Raise the buffer share of busy-month payments until it is covered"
                - "List admin and training work to fill the quiet weeks"
            - name: Spreading a large one-off fee across months
              description: |-
                ## Purpose
                Book advances, licensing fees or six-month contracts paid upfront can feel like wealth and disappear in weeks. Treating it as several months of income, paid out at your normal salary, keeps the household steady and avoids a sharp fall once it runs out.

                ## Milestones
                1. The fee split into tax, business costs and the months it is meant to cover.
                2. Tax share moved to the tax pot on arrival.
                3. The rest held in the holding account and drawn at the normal salary.
                4. A note made of when it will run out and what replaces it.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A large fee is split into tax and months of salary, with the tax set aside on arrival and the salary unchanged while it lasts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out the tax and costs that come out of the fee"
                - "Move the tax share to the tax pot the day it arrives"
                - "Count how many months of salary the remainder covers"
                - "Mark in the calendar when it runs out"
            - name: Proof of income pack for a mortgage or tenancy
              description: |-
                ## Purpose
                Irregular earners are often asked for more paperwork than employees, and a last-minute hunt for tax calculations can lose a flat or a mortgage offer. Building a ready folder of the documents lenders and landlords ask for makes an application from a self-employed or commission income look as solid as a payslip.

                ## Milestones
                1. Two or three years of tax calculations and year overviews downloaded.
                2. Accounts or profit statements for the same years in one folder.
                3. Twelve months of business and personal statements saved.
                4. A one-page income summary with the trailing average and current contracts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A folder holds two or more years of tax calculations, accounts, twelve months of statements and a one-page income summary."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download your tax calculations and year overviews for the last three years"
                - "Save the matching accounts or profit statements"
                - "Add twelve months of business and personal statements"
                - "Ask the agent to draft a one-page income summary from your records"
            - name: Year-end close of your income records
              description: |-
                ## Purpose
                When the tax year closes, a tidy set of records makes the return quicker, the accountant cheaper and next year's salary decision easier. A once-a-year close confirms every invoice is matched, every expense has a receipt and the income history sheet is complete.

                ## Milestones
                1. All invoices for the year marked paid or written off.
                2. Every business expense matched to a receipt or statement line.
                3. The year's totals added to the income history sheet.
                4. Records sent to the accountant or saved ready to file.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within a month of tax year end, every invoice and expense for the year is matched and the year's totals are in the income history."
                cadence: cyclic
              tasks:
                - "Close the year's income records within a month of tax year end @recurring(yearly)"
                - "Mark every invoice paid or written off"
                - "Match each business expense to a receipt"
                - "Send the records to your accountant or save them ready to file"
            - name: First six months after leaving a salaried job
              description: |-
                ## Purpose
                New freelancers often have a strong first month from old contacts, then a gap, then a tax bill nobody warned them about. Planning the first six months, with a launch buffer from the last salary, the tax pot open from the first invoice and a modest salary from day one, avoids the classic year-one cash crunch.

                ## Milestones
                1. A launch buffer of several months of floor spending in place before the last payslip.
                2. Registration with the tax authority as self-employed completed.
                3. The tax pot and holding account set up before the first invoice.
                4. A modest salary paid from month one and reviewed at month six.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six months of freelancing completed with a salary paid each month, tax set aside from every invoice and the buffer never empty."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Work out how much launch buffer you need before your last payslip"
                - "Register as self-employed with the tax authority"
                - "Open the tax pot and holding account before the first invoice"
                - "Review the salary figure at the end of month six"
            - name: Creative income from advances, royalties and grants
              description: |-
                ## Purpose
                Writers, musicians, illustrators and artists are often paid in a way no other job is: an advance split into stages, royalty statements twice a year, grants tied to a project and sales that spike around a release. Mapping each stream and when it pays makes it possible to set a salary from work that might not pay for a year.

                ## Milestones
                1. Every creative income stream listed with how and when it pays.
                2. Royalty statement and payment dates in the calendar.
                3. Grant money ring-fenced for the costs it was given for.
                4. Advance stages spread across the months of work they cover.

                ## Notes
                Grant terms usually restrict what money can be spent on. Keep grant funds in a separate pot until spent on the funded work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A map of every creative income stream with its payment dates, with grant money ring-fenced and advances spread across months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each creative income stream and how it pays"
                - "Put royalty statement and payment dates in the calendar"
                - "Move grant money into its own pot"
                - "Log each royalty statement and compare it with the last @recurring(quarterly)"
            - name: Commission-heavy pay with a low base salary
              description: |-
                ## Purpose
                Sales and recruitment roles often pair a modest base salary with commission that swings with the quarter. Living on the base and treating commission as lump sums for buffer, tax checks and goals keeps the household steady when a big quarter is followed by a thin one.

                ## Milestones
                1. Base salary after tax compared with your floor spending figure.
                2. The last two years of commission payments listed by month.
                3. A rule written for splitting each commission payment.
                4. Spending held to the base for six months, with commission split as agreed.

                ## Notes
                Commission paid through payroll is usually taxed at source, but a large one-off can be taxed at a higher rate in that month. Check your payslip, and the tax authority's guidance, before assuming it all balances out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six months of spending kept within base pay, with each commission payment split according to a written rule."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Compare your base salary after tax with your floor figure"
                - "List commission payments from the last two years by month"
                - "Write a rule for splitting each commission payment"
                - "Split the next commission payment according to the rule"
            - name: Seasonal work with one or two peak months
              description: |-
                ## Purpose
                Ski instructors, festival crews, tax preparers and holiday-let owners can earn most of a year's income in a few months. A plan that pays a monthly salary across all twelve, built from what the peak months typically produce, keeps the off-season from feeling like unemployment.

                ## Milestones
                1. Peak and off-peak months and their typical income written down.
                2. A twelve-month salary set from total yearly income after tax.
                3. The share of each peak payment that must be held back calculated.
                4. A full off-season completed on the planned salary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A full off-season paid at the planned salary from money held back in peak months, without borrowing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down your peak months and typical income in each"
                - "Divide expected yearly income after tax by twelve"
                - "Work out how much of each peak payment to hold back"
                - "Check the holding balance covers the remaining off-season months"
            - name: Households with one irregular earner
              description: |-
                ## Purpose
                When one partner earns a steady salary and the other freelances, it is easy for the steady earner to end up covering every lean month and for resentment to build. Agreeing how the irregular salary feeds into shared bills, and what happens in a dry spell, keeps the arrangement fair to both.

                ## Milestones
                1. Each partner's salary, including the smoothed one, written down.
                2. Contributions to shared bills agreed in proportion or as fixed amounts.
                3. A plan for lean months agreed, including any temporary cover and how it is repaid.
                4. The arrangement reviewed together after six months.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written agreement on shared bill contributions and lean-month cover, reviewed together after six months."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down both salaries, using the smoothed figure for the irregular one"
                - "Agree how each of you contributes to shared bills"
                - "Agree what happens to shared bills in a lean month"
                - "Put a six-month review of the arrangement in both calendars"
            - name: Gig and platform workers paid weekly
              description: |-
                ## Purpose
                Delivery riders, drivers and platform workers are paid weekly or even daily, with no invoices and often no record of costs such as fuel and phone data. A weekly routine that moves a fixed share for tax and costs, and pays a weekly salary, brings the same smoothing to income that arrives in small, frequent pieces.

                ## Milestones
                1. Platform earnings and costs for the last eight weeks listed.
                2. A weekly split for tax, running costs and salary chosen.
                3. A weekly salary transfer set up.
                4. Eight consecutive weeks of the split completed.

                ## Notes
                Platform earnings are usually self-employed income. Keep fuel, data and equipment receipts, because they affect what you owe.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks of platform income split into tax, costs and a fixed weekly salary."
                cadence: rolling
              tasks:
                - "Download eight weeks of platform earnings statements"
                - "Add up running costs such as fuel and phone data for those weeks"
                - "Choose a weekly split for tax, costs and salary"
                - "Move the tax and costs share and pay the weekly salary @recurring(weekly:sun)"
            - name: Side income alongside a regular salary
              description: |-
                ## Purpose
                A side business, weekend gigs or occasional commissions on top of a job can easily get spent before the tax on them is counted. Keeping side income in its own account, with its tax set aside and a clear decision on whether it funds goals or tops up spending, stops it disappearing into the month.

                ## Milestones
                1. Side income separated into its own account.
                2. Whether the side income needs declaring checked with the tax authority's guidance.
                3. A tax share set aside from each payment.
                4. A written purpose for the rest, such as a goal, the buffer or a fixed top-up.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Side income lands in its own account, with tax set aside from each payment and a written purpose for the remainder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open or name a separate account for side income"
                - "Check the tax authority's rules on declaring side income"
                - "Decide what share of each payment goes to tax"
                - "Write down what the rest of the side income is for"
            - name: Paying yourself from a limited company
              description: |-
                ## Purpose
                Company directors face a further layer: a salary through payroll, dividends declared from profit, and company tax as well as personal tax. Agreeing a pay pattern with your accountant, and feeding it into the same holding and salary system, keeps personal spending steady while the company's tax and reserves stay in the company.

                ## Milestones
                1. Your accountant's recommended salary and dividend pattern for the year recorded.
                2. Company tax and any value-added tax kept in a company reserve account.
                3. Dividends declared only from retained profit, with the paperwork kept.
                4. Personal tax on dividends set aside in your personal tax pot.

                ## Notes
                Company pay rules vary a great deal by country and change often. Treat this as organising the pattern your accountant sets, not choosing one yourself.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A recorded salary and dividend pattern from your accountant, with company tax reserved and personal dividend tax set aside."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your accountant for this year's salary and dividend pattern"
                - "Open a company reserve account for company tax"
                - "Keep dividend paperwork with each declaration"
                - "Set aside personal tax on each dividend in your tax pot"
            - name: Income from overseas clients in other currencies
              description: |-
                ## Purpose
                Foreign clients add exchange rate swings, transfer fees and sometimes withholding tax on top of already uneven income. Holding foreign income in a multi-currency account and converting on a fixed schedule, rather than whenever the balance looks high, reduces both cost and the temptation to gamble on rates.

                ## Milestones
                1. Every foreign currency client and the currency they pay in listed.
                2. A multi-currency account or provider chosen with fees compared.
                3. A conversion rule written, such as converting a fixed share each month.
                4. Any tax withheld abroad recorded for your accountant.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Foreign income is held in a multi-currency account and converted by a written monthly rule, with any foreign tax withheld recorded."
                cadence: rolling
              tasks:
                - "List foreign clients and the currencies they pay in"
                - "Compare conversion fees across two or three providers"
                - "Write a fixed rule for when and how much to convert"
                - "Convert foreign balances under your rule and log the rate @recurring(monthly:15)"
            - name: Six lean months stress test
              description: |-
                ## Purpose
                Every smoothing system works in a normal year; the question is what happens if income halves for six months. Running that scenario on paper, with the buffer, lean plan, borrowing rules and tax bill all included, shows how long the salary would last and which weak point to fix first.

                ## Milestones
                1. A scenario sheet with income at half its average for six months.
                2. The buffer, lean salary and tax bill run through month by month.
                3. The month the system would break, if any, identified.
                4. The top three risks recorded with one action against each.

                ## Notes
                Start from the **Risk register** template to record the risks and actions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A six-month half-income scenario run month by month, with the breaking point identified and three risks logged with actions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Build a sheet with income at half your average for six months"
                - "Run the buffer, lean salary and tax bill through it month by month"
                - "Note the month the salary could no longer be paid"
                - "Log the top three risks and one action against each"
            - name: Income volatility measures from your own data
              description: |-
                ## Purpose
                Two freelancers with the same yearly income can need very different buffers if one earns evenly and the other in three big lumps. A few simple measures, such as the worst three months as a share of the average and how far each month typically strays from it, tell you how much smoothing your income really needs.

                ## Milestones
                1. Twenty-four months of income, if available, in one sheet.
                2. The worst three consecutive months and the typical monthly swing calculated.
                3. The buffer target checked against those measures.
                4. The measures recalculated yearly and logged.

                ## Notes
                Start from the **Metrics log** template to keep the yearly figures side by side.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two volatility measures calculated from at least twelve months of income and logged, with the buffer target checked against them."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Collect up to twenty-four months of income in one sheet"
                - "Calculate the worst three-month run and the typical monthly swing"
                - "Check whether your buffer target covers the worst run"
                - "Recalculate the measures and log them @recurring(yearly)"
            - name: Funding a long unpaid creative project
              description: |-
                ## Purpose
                Writing a book on spec, making an album or building a portfolio for a new field can mean months of work with no income. Treating it as a planned sabbatical, with a dedicated pot, a reduced salary and a fixed end date, lets you do the work without draining the buffer that protects the household.

                ## Milestones
                1. The project's length and your reduced salary during it agreed.
                2. A dedicated pot built to cover that period, separate from the buffer.
                3. A fixed review point at which you return to paid work if needed.
                4. The project completed or paused on schedule, with the buffer untouched.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A funded plan for an unpaid project with a dedicated pot, reduced salary and review date, completed without touching the buffer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Decide how many months the unpaid project needs"
                - "Set the reduced salary you can live on during it"
                - "Open a pot for the project and set a monthly target"
                - "Put the review date in your calendar"
---

# Irregular Income Smoothing

This area is for freelancers, creatives, commission earners and seasonal workers who are tired of feast and famine, and want their household to run on a predictable monthly figure however lumpy the money coming in. It starts with the foundations (an honest income history, a floor and normal cost figure, separate accounts, a holding account, a tax pot and a salary you pay yourself), moves through the routines that keep the system running, the knowledge and decisions that make it sturdier, the dated moments such as the tax bill and the quiet season, versions for new freelancers, creatives, commission earners, gig workers and households with one irregular earner, and ends with specialist work like company pay, foreign currency and stress tests.

What repeats is a monthly salary transfer and a reconciliation at month end, a weekly split of every payment and an invoicing session, a monthly forecast and buffer check, a quarterly tax pot check and salary review, and a yearly look at the whole system. The Monthly budget and bills, Savings goal, Purchase decision, Month-end close, Metrics log and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
