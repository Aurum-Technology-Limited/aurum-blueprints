---
id: wealth-investing.mini-retirement-funding
name: Mini-Retirement Funding
description: "Fund a sabbatical or mini-retirement mid-career: a full cost budget, a dedicated fund and monthly target, the pension gap measured and closed, lost cover replaced and a re-entry buffer for coming back."
category: personal
version: 1.0.0
tags: [wealth-investing, mini-retirement-funding, knowledge-worker, everyone, sabbatical, career-break, savings-target, re-entry-buffer]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - savings-goal
    - metrics-log
    - trip
    - operational-checklist
    - risk-register
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Mini-Retirement Funding
          description: "Saving and investing to fund sabbaticals or mini-retirements mid-career without derailing long-term retirement goals."
          projects:
            - name: Writing down what the mini-retirement is for
              description: |-
                ## Purpose
                A break taken to recover from burnout costs and looks very different from one spent retraining, travelling for a year or caring for a parent, and the purpose sets the budget, the length and how much income you can afford to give up. Writing the reason in a few sentences now stops the fund target drifting every time a new idea appears, and gives you something to test later decisions against.

                ## Milestones
                1. The main purpose of the break written in three sentences or fewer.
                2. Two or three things the break must include, and one it must not, listed.
                3. A rough length range, such as three to six months, noted beside the purpose.
                4. The note saved where the rest of your money plans live.

                ## Notes
                One purpose is enough. A break that tries to be a rest, a career change and a world trip at once tends to cost the most and deliver the least.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated note stating the purpose of the break, its must-haves and a rough length range, saved with your money plans."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one paragraph on why you want time away from work"
                - "List what the break must include and one thing it must not"
                - "Note a rough length range you would be happy with"
                - "Save the note alongside your savings and pension records"
            - name: Choosing the length and start window of the break
              description: |-
                ## Purpose
                Length drives cost more than any other choice: three months away might be covered by a year of saving, while twelve months can take three or four. Picking a start window also lets you line up with bonus dates, notice periods, share vesting and the tax year, so money you are owed is not left behind.

                ## Milestones
                1. A chosen length in months, with a shortest acceptable fallback.
                2. A start window of about three months identified.
                3. Bonus, vesting, notice and tax year dates checked against that window.
                4. The target start month written into your savings plan.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen length and start month, checked against bonus, notice, vesting and tax year dates, recorded in your savings plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down your ideal length and the shortest break still worth taking"
                - "List the dates of your next bonus, pay review and any share vesting"
                - "Check your contractual notice period and any qualifying service rules"
                - "Pick a start month that avoids leaving money behind"
            - name: Full cost of the time away, month by month
              description: |-
                ## Purpose
                Most people underestimate a break by forgetting the costs that carry on at home: mortgage or rent, insurance, phone contracts, subscriptions, and the pension or health cover an employer used to pay. A month-by-month budget that splits fixed home costs, living costs and one-off costs turns a vague hope into a figure you can save towards.

                ## Milestones
                1. Fixed home costs that continue during the break listed with monthly amounts.
                2. Living costs for the break estimated per month, with travel or course costs shown separately.
                3. Benefits your employer currently pays, such as health cover or pension contributions, priced at replacement cost.
                4. A contingency of at least ten percent added and the total cost calculated.

                ## Notes
                Start from the **Monthly budget and bills** template. Use your last twelve months of bank statements, not memory, for the fixed costs.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written month-by-month budget for the break showing fixed, living and one-off costs, lost benefits and a contingency, with a single total."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Download twelve months of bank statements to price fixed costs"
                - "List every cost that continues at home while you are away"
                - "Price the employer benefits you would need to replace yourself"
                - "Add a contingency of at least ten percent and total the budget"
            - name: Testing the break against your retirement projection
              description: |-
                ## Purpose
                Six or twelve months without pension contributions, and possibly without employer contributions, has a cost that compounds for decades. Running your retirement projection with and without the break shows the gap in money or in years, so you can decide how to close it rather than discover it at sixty.

                ## Milestones
                1. Your current retirement projection saved as the baseline.
                2. A second projection run with contributions stopped for the length of the break.
                3. The difference in projected pot, income or retirement age written down.
                4. A plan to close the gap chosen, such as higher contributions on return or a later retirement date.

                ## Notes
                Use the projection tool your pension provider offers, or a simple compound growth spreadsheet. A regulated adviser can check the assumptions if the gap looks large.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two retirement projections, with and without the break, are saved, the gap is written down and a chosen way to close it is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Log in to your pension provider and save the current projection"
                - "Rerun the projection with contributions paused for the break"
                - "Write down the gap in projected pot or retirement income"
                - "Choose how you will close the gap after you return"
                - "Rerun both projections until the break starts @recurring(yearly)"
            - name: Emergency fund kept apart from the break fund
              description: |-
                ## Purpose
                If the boiler fails or a parent needs help while you are away, and the only money available is the sabbatical fund, the break ends early. Keeping a separate emergency fund, sized for your household and untouched by the break plan, means one bad month does not cancel the whole thing.

                ## Milestones
                1. An emergency fund target set in months of essential spending.
                2. The emergency money held in a different account from the break fund.
                3. The current balance compared with the target and any shortfall funded first.
                4. A rule written for what counts as an emergency.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An emergency fund of a stated number of months of essential spending sits in its own account, separate from the break fund."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out three to six months of essential household spending"
                - "Open or label a separate account for emergency money"
                - "Fund any shortfall before adding to the break fund"
                - "Check the emergency fund still matches your spending @recurring(yearly)"
            - name: Reading your employer's sabbatical and unpaid leave policy
              description: |-
                ## Purpose
                Some employers offer paid sabbaticals after a qualifying period, others offer unpaid career breaks with a role held open, and many say nothing until asked. The policy decides whether you resign or take leave, whether pension and health cover continue, and how much the fund really needs to cover.

                ## Milestones
                1. The current sabbatical, career break or unpaid leave policy found and saved.
                2. Qualifying service, notice required and maximum length noted.
                3. What happens to salary, pension contributions, health cover and life cover during leave written down.
                4. A decision on whether to ask for leave or plan to resign.

                ## Notes
                Ask HR in writing for anything the policy does not cover, such as whether employer pension contributions continue during unpaid leave.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The employer's leave policy is saved, its effect on pay, pension and benefits is written down, and a leave or resign decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the staff handbook or intranet for sabbatical and career break policies"
                - "Note the qualifying service, notice period and maximum length"
                - "Ask HR in writing what happens to pension and benefits during unpaid leave"
                - "Record whether you will ask for leave or plan to resign"
            - name: Dedicated account for the mini-retirement fund
              description: |-
                ## Purpose
                Money saved for a break gets spent on other things when it sits in the main current account or a general savings pot. A separate, clearly named account with its own target and date makes the fund visible and harder to raid, and shows progress at a glance.

                ## Milestones
                1. A separate account opened and named after the break.
                2. The target amount and target date recorded against it.
                3. Any money already saved for the break moved in.
                4. The account kept off any card or quick transfer you use for daily spending.

                ## Notes
                Start from the **Savings goal** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A separately named account holds all money saved for the break, with its target amount and date recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose an account type for the fund from your bank or another provider"
                - "Open the account and name it after the break"
                - "Move existing savings for the break into it"
                - "Record the target amount and date on the savings goal page"
            - name: Monthly saving target and countdown date
              description: |-
                ## Purpose
                Dividing the total cost by the months left to the start date gives the figure you need to save, and it is often a shock. Seeing that number early lets you move one of the three levers, cost, date or saving rate, before the plan quietly fails.

                ## Milestones
                1. Total cost, money already saved and months to the start date written down.
                2. The required monthly saving calculated.
                3. The figure compared with what you can save today, and the gap noted.
                4. A decision on which lever to move if the gap is too big.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A required monthly saving figure is calculated from cost, savings and date, and a decision is recorded if it exceeds what you can save."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Subtract what you have saved from the total cost of the break"
                - "Divide the remainder by the months left to the start date"
                - "Compare the result with your current monthly surplus"
                - "Decide whether to cut cost, move the date or save more"
            - name: Clearing or fixing debts before you step away
              description: |-
                ## Purpose
                Credit card balances, car finance and overdrafts keep charging while income stops, and some lenders cut credit limits when a salary disappears. Paying off or fixing the cost of debts before the break shrinks the monthly cost of being away and removes a source of worry.

                ## Milestones
                1. Every debt listed with balance, rate and monthly payment.
                2. Debts that can be cleared before the break chosen and scheduled.
                3. Remaining payments added to the break budget.
                4. Any remortgage, contract renewal or credit application completed while you still have a salary.

                ## Notes
                Lenders usually want proof of income, so apply for anything that needs it before you leave work.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A debt list exists, debts chosen for payoff are cleared before the start date and remaining payments are in the break budget."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every debt with balance, interest rate and monthly payment"
                - "Mark the debts you can clear before the break"
                - "Book any remortgage or renewal that needs proof of salary"
                - "Add remaining debt payments to the break budget"
            - name: Agreeing the break with your household
              description: |-
                ## Purpose
                A partner who carries the household bills alone for six months, or children who lose a holiday to fund it, need a say before the money is committed. One honest conversation with real numbers on the table prevents resentment and settles who pays what while you are away.

                ## Milestones
                1. The purpose, length and cost of the break shared with your partner or household.
                2. Who pays which bills during the break agreed and written down.
                3. Any limits your partner wants, such as a minimum balance in joint savings, recorded.
                4. A date set to revisit the agreement before you commit to leaving.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written agreement with your partner or household on the break's length, cost and who pays which bills while you are away."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an hour with your partner to talk through the break"
                - "Share the purpose, length and cost on one page"
                - "Agree in writing who pays which bills during the break"
                - "Set a date to confirm the agreement before you give notice"
            - name: Payday transfer into the break fund
              description: |-
                ## Purpose
                Saving whatever is left at the end of the month rarely reaches a target; moving the agreed amount on payday does. A standing order dated the day after salary lands makes the saving automatic and leaves you free to spend the rest without guilt.

                ## Milestones
                1. A standing order set for the monthly saving target, dated just after payday.
                2. The transfer confirmed as arriving in the break fund.
                3. The amount raised each time the target changes.
                4. Twelve consecutive months of transfers completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A standing order moves the monthly target into the break fund on the day after payday, with no missed months in a year."
                cadence: rolling
              tasks:
                - "Set up a standing order for the day after your salary arrives"
                - "Check the first transfer lands in the break fund"
                - "Raise the standing order whenever the monthly target changes"
                - "Confirm this month's transfer reached the fund @recurring(monthly:26)"
            - name: Monthly progress log for the break fund
              description: |-
                ## Purpose
                Recording the balance once a month shows whether you are ahead of or behind the line, which matters more than the balance itself. A short log with balance, target line and months left catches a missed transfer or a raid early enough to fix it.

                ## Milestones
                1. A log with columns for date, balance, target balance and months left.
                2. The target line calculated for every month to the start date.
                3. At least six monthly entries made.
                4. Any month below the line explained in a note.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A progress log holds a monthly balance entry against a target line, with every shortfall explained in a note."
                cadence: rolling
              tasks:
                - "Create a progress log from the metrics log template"
                - "Calculate the target balance for each month until the start date"
                - "Record the fund balance against the target line @recurring(monthly:20)"
                - "Write a one-line note for any month below the line"
            - name: Rule for bonuses, refunds and windfalls
              description: |-
                ## Purpose
                Bonuses, tax refunds, gifts and sale proceeds can shorten the wait by months, but only if a rule decides where they go before they arrive. A split agreed in advance, such as half to the break fund, a quarter to pensions and a quarter to spend, keeps windfalls from vanishing into everyday life.

                ## Milestones
                1. A written split for any windfall over a set amount.
                2. The split applied to the next bonus or refund.
                3. A running total kept of windfall money added to the fund.
                4. The rule reviewed after each annual bonus.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written windfall split is applied to each bonus or refund, with a running total of what reached the break fund."
                cadence: rolling
              tasks:
                - "Choose a threshold above which a windfall follows the rule"
                - "Write the percentage split between fund, pension and spending"
                - "Apply the split to your next bonus or tax refund"
                - "Review the split after the annual bonus is paid @recurring(yearly)"
            - name: Quarterly check that the break still fits the long plan
              description: |-
                ## Purpose
                Pay changes, a new mortgage or a market fall can make a plan that fitted last year look stretched. A short quarterly check of the fund, your long-term pension contributions and the start date keeps both goals moving rather than one starving the other.

                ## Milestones
                1. Break fund balance and pension contributions recorded each quarter.
                2. The start date confirmed or moved with a reason.
                3. Any change to pension contributions explained in writing.
                4. Four quarterly checks completed in the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly checks in a year, each recording fund balance, pension contributions and a confirmed or moved start date."
                cadence: cyclic
              tasks:
                - "Put the fund balance and pension contribution side by side"
                - "Confirm the start date or move it with a written reason"
                - "Note any change to pension contributions and why"
                - "Run the quarterly break and pension check @recurring(quarterly)"
            - name: Banking pay rises before they become lifestyle
              description: |-
                ## Purpose
                A pay rise spent on a bigger flat or a better car raises the cost of every future month, including the months away. Sending most of each rise to the break fund before it reaches the current account shortens the saving period and keeps the monthly cost of the break where you budgeted it.

                ## Milestones
                1. A rule set for the share of every pay rise that goes to saving.
                2. The standing order raised within a month of the next rise.
                3. Your monthly living costs compared with last year's.
                4. The effect on the start date recalculated.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written share of each pay rise is added to the break fund transfer within a month of the rise taking effect."
                cadence: rolling
              tasks:
                - "Decide what share of each pay rise goes to the break fund"
                - "Raise the standing order within a month of your next rise"
                - "Compare this year's monthly spending with last year's @recurring(yearly)"
                - "Recalculate the start date after each rise"
            - name: Interest rate check on where the fund sits
              description: |-
                ## Purpose
                Savings rates move with central bank rates, and introductory bonuses quietly expire, so a fund that earned a good rate last year may now earn half as much. A quick quarterly comparison keeps the fund earning a fair rate without chasing every new offer.

                ## Milestones
                1. Current rate, any bonus end date and notice terms noted for the fund.
                2. Two or three comparable accounts priced at each check.
                3. A switch made when the gain clearly outweighs the effort.
                4. Bonus end dates set as calendar reminders.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The fund's rate is compared each quarter with comparable accounts, and each switch or decision not to switch is recorded."
                cadence: rolling
              tasks:
                - "Write down the fund's current rate and any bonus end date"
                - "Compare the fund's rate with two similar accounts @recurring(quarterly)"
                - "Switch if the gain clearly outweighs the effort"
                - "Put the next bonus expiry date in your calendar"
            - name: Monthly drawdown from the fund during the break
              description: |-
                ## Purpose
                Once salary stops, the fund has to behave like a pay packet. Moving a fixed monthly amount from the fund into the current account on the same day each month makes overspending visible straight away and stops the whole fund sitting one tap from your card.

                ## Milestones
                1. A monthly drawdown figure set from the break budget.
                2. A standing order from the fund to the current account dated for the start of each month.
                3. Months of runway remaining recalculated after each drawdown.
                4. Any top-up beyond the standing order recorded with a reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fixed monthly drawdown runs from the fund to the current account throughout the break, with every extra top-up recorded."
                cadence: rolling
              tasks:
                - "Set the monthly drawdown amount from your break budget"
                - "Create a standing order from the fund dated for the 2nd of each month"
                - "Recalculate the months of runway left @recurring(monthly:2)"
                - "Write down the reason for any extra withdrawal"
            - name: Weekly spending check while you are away
              description: |-
                ## Purpose
                Spending without a salary feels different, and both overspending and anxious underspending are common in the first months. A ten-minute weekly look at spending against a weekly allowance keeps the break on budget without turning it into another job.

                ## Milestones
                1. A weekly allowance calculated from the monthly drawdown.
                2. A simple way to see weekly spending set up, such as category views in a banking app.
                3. A weekly check completed for the first eight weeks.
                4. Overspends offset in the following week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly spending is compared with a set allowance every week of the break, with overspends offset the following week."
                cadence: rolling
              tasks:
                - "Divide the monthly drawdown into a weekly allowance"
                - "Set up spending categories in your banking app"
                - "Compare the week's spending with the allowance @recurring(weekly:sun)"
                - "Offset any overspend in the following week"
            - name: Matching the fund's home to the time left
              description: |-
                ## Purpose
                Money needed in eighteen months is exposed to real risk in a share market that can fall by a third in a year, while money needed in five years may lose ground to inflation in plain cash. Learning how cash, fixed-term deposits, short-dated government bonds and shares behave over different horizons helps you decide where each part of the fund belongs, and what to ask a professional.

                ## Milestones
                1. How cash, fixed-term deposits, short government bonds and shares behave over one to five years summarised in your own words.
                2. The largest one-year fall of a broad share index looked up and noted.
                3. The fund split into money needed within two years and money needed later.
                4. Questions for a regulated adviser listed if any of the fund will be invested.

                ## Notes
                This is organisational, not advice. A common default for money needed within two years is cash or fixed-term savings; check what suits you with a regulated adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of how cash, deposits, short bonds and shares behave over one to five years, with the fund split by when it is needed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your regulator's or a consumer body's guide to saving versus investing"
                - "Look up the largest one-year fall in a broad share index"
                - "Split the fund into money needed within two years and later"
                - "List questions for an adviser if any money will be invested"
            - name: Career break effect on state pension records
              description: |-
                ## Purpose
                In many countries a year with no earnings leaves a gap in the contribution record that can reduce the state pension or social security benefit later. Checking how your system counts a break, and whether voluntary contributions or credits are available, turns a hidden cost into a small, known payment.

                ## Milestones
                1. Your current contribution record downloaded from the official service.
                2. How a year without earnings is counted in your system written down.
                3. Voluntary contribution or credit options and their cost noted.
                4. A decision recorded on whether to fill the gap, with a date to act.

                ## Notes
                Use the official government service for your record. Rules differ widely between countries and change over time, so check them in the year of the break.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your official contribution record is saved and a written decision on filling any break-year gap, with its cost, is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download your contribution record from the official pension service"
                - "Find out how a year without earnings is counted"
                - "Note the cost of voluntary contributions for the break year"
                - "Record whether and when you will fill the gap"
            - name: Tax in the years you leave and return
              description: |-
                ## Purpose
                Leaving work part way through a tax year often means too much tax was taken, and returning part way through can bring an emergency tax code or a surprise bill. Understanding how part-year income is taxed in your country helps you claim refunds, time a bonus and avoid a shock when salary restarts.

                ## Milestones
                1. Your tax year dates and how part-year income is taxed noted.
                2. Your final payslip and leaving document saved.
                3. Any refund owed for the break year claimed.
                4. The tax code or withholding on your first payslip back checked.

                ## Notes
                If you plan to spend much of the break abroad, residency rules may apply; check with the tax authority or a qualified adviser before you go.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The break year's tax position is checked, any refund is claimed and the first payslip back is confirmed as taxed correctly."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note your tax year dates and how part-year income is taxed"
                - "Save your final payslip and leaving certificate"
                - "Claim any refund owed after the break year ends"
                - "Check the tax code on your first payslip back"
            - name: Reading savings account terms properly
              description: |-
                ## Purpose
                Notice periods, fixed terms, bonus rates, withdrawal limits and deposit protection caps all decide whether the money will be there, in full, on the day you need it. Learning to read an account's summary box in ten minutes saves both lost interest and locked-up money.

                ## Milestones
                1. The key terms of a savings account summary listed: rate, rate type, notice, withdrawals, bonus end and protection.
                2. The deposit protection limit in your country, and how it applies per institution, noted.
                3. Your current fund account checked against these terms.
                4. A short checklist kept for comparing future accounts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short checklist for reading savings account terms exists and the current fund account has been checked against it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open the summary box for your current savings account"
                - "List the rate, notice, withdrawal limits and bonus end date"
                - "Look up your country's deposit protection limit per institution"
                - "Write a checklist to use when comparing accounts"
            - name: Currency planning for a break abroad
              description: |-
                ## Purpose
                Exchange rates can move ten percent in a year, which can add or remove a month from a year abroad. Learning how card fees, transfer services and rate moves affect the budget lets you set a budget rate, choose cheap ways to spend and decide whether to convert some money early.

                ## Milestones
                1. A cautious budget exchange rate written into the break budget.
                2. Fees on your current cards abroad checked and a low-fee option chosen.
                3. A plan for how much to convert before you leave and how much as you go.
                4. Actual rates compared with the budget rate each month of the break.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The break budget carries a stated budget exchange rate, a low-fee card is chosen and actual rates are compared monthly during the break."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set a cautious budget exchange rate for your destination currency"
                - "Check the foreign transaction fees on your current cards"
                - "Choose a low-fee card or transfer service for spending abroad"
                - "Compare the actual rate with your budget rate @recurring(monthly:10)"
            - name: Replacing health and protection cover during the break
              description: |-
                ## Purpose
                Employer health insurance, income protection and death in service cover usually stop when salary stops, and many travel policies exclude trips longer than a set number of days. Pricing replacements in advance puts a real cost in the budget and avoids an uninsured gap at the worst moment.

                ## Milestones
                1. Every cover your employer provides listed with what happens on leaving or unpaid leave.
                2. Quotes for replacement health, life or long-stay travel cover obtained.
                3. The chosen covers added to the break budget.
                4. Policies arranged to start on your last day of pay.

                ## Notes
                Read the exclusions on long-stay travel policies, especially for pre-existing conditions and adventure activities.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each employer cover is listed with its replacement, the cost is in the break budget and policies start by your last day of pay."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every insurance your employer provides and when it stops"
                - "Get quotes for replacement health or life cover"
                - "Check the maximum trip length on long-stay travel policies"
                - "Add the chosen premiums to the break budget"
            - name: Money conversations with people who have done it
              description: |-
                ## Purpose
                Others who have taken a mini-retirement know what they underspent on, what surprised them and how long it took to find work again. Three short conversations give you real numbers to test your budget and re-entry plan against.

                ## Milestones
                1. Three people who have taken a career break of three months or more identified.
                2. A short list of money questions prepared.
                3. Notes from each conversation saved.
                4. Your budget or plan changed where their experience shows a gap.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Notes from three conversations with people who took a break of three months or more are saved, with any budget changes recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your network for three people who have taken a career break"
                - "Prepare five questions about costs, surprises and finding work again"
                - "Write up notes after each conversation"
                - "Change your budget where their answers show a gap"
            - name: Choosing where to hold the fund
              description: |-
                ## Purpose
                Once you know when you need the money, the choice is between easy access, notice accounts, fixed-term deposits or a ladder of terms that mature as the break approaches. Choosing deliberately, rather than leaving the fund wherever it started, can add meaningful interest without risking access on the day you leave.

                ## Milestones
                1. Easy-access, notice and fixed-term options compared on rate, access and protection.
                2. A structure chosen, for example a ladder with terms maturing before the start date.
                3. Money moved into the chosen accounts.
                4. Maturity dates listed beside the start date.

                ## Notes
                Never lock money past the start date, and keep the first two months of the break in easy access.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The fund is held in a chosen mix of accounts whose maturity dates all fall before the break's start date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare easy-access, notice and fixed-term rates for your timeline"
                - "Sketch a ladder of terms that mature before the start date"
                - "Move the fund into the chosen accounts"
                - "List each maturity date beside the start date"
            - name: Keeping the employer pension match while you save
              description: |-
                ## Purpose
                Cutting workplace pension contributions to save faster for a break often gives up employer money worth more than any savings rate. Checking the contribution level that earns the full match, and keeping at least that, protects free money while the break fund grows from elsewhere.

                ## Milestones
                1. The employer matching rule and your current contribution rate written down.
                2. The contribution needed for the full match confirmed.
                3. Your contribution set at or above that level.
                4. Any planned reduction checked against the match before it is made.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your workplace pension contribution is confirmed at or above the level that earns the full employer match while saving for the break."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your employer's pension matching rule in the scheme booklet"
                - "Check your current contribution rate on your payslip"
                - "Raise your contribution if it is below the full match"
                - "Confirm the full match is still being earned @recurring(yearly)"
            - name: Trimming fixed costs before you leave
              description: |-
                ## Purpose
                Every month of the break has to fund every fixed cost, so cutting a hundred a month from fixed costs saves a year-long break twelve hundred. Reviewing contracts, subscriptions and insurance before you leave shrinks both the target and the monthly drawdown.

                ## Milestones
                1. Every fixed cost and its contract end date listed.
                2. Subscriptions you will not use during the break cancelled or paused.
                3. Contracts renegotiated or switched where possible.
                4. The break budget updated with the new fixed costs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fixed costs are listed with contract dates, unused subscriptions are cancelled and the break budget reflects the lower total."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every direct debit and subscription from last month's statements"
                - "Cancel or pause what you will not use while away"
                - "Ask your phone, broadband and insurance providers for better rates"
                - "Update the break budget with the new fixed costs"
            - name: Letting your home or taking a lodger while away
              description: |-
                ## Purpose
                Homes left empty for six months still cost mortgage, insurance and bills, and letting yours can cover much of the fund's biggest line. It needs lender or landlord and insurer consent, a sound agent or tenant arrangement and a clear tax record, so the decision is worth making early.

                ## Milestones
                1. Likely rent and costs, including agent fees and tax, estimated.
                2. Lender, landlord or insurer consent checked in writing.
                3. A decision made between letting, a lodger, a house sitter or leaving it empty.
                4. If letting, rent received reconciled each month.

                ## Notes
                If you rent, check that your tenancy allows subletting before going further. Keep rental income records for the tax authority.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on letting the home while away, with lender or landlord consent recorded and expected net income in the budget."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Estimate monthly rent after agent fees, insurance and tax"
                - "Ask your lender or landlord in writing about letting while away"
                - "Decide between letting, a lodger, a house sitter or leaving it empty"
                - "Reconcile rent received against the agent statement @recurring(monthly:15)"
            - name: Three-month dress rehearsal on the break budget
              description: |-
                ## Purpose
                Living on the planned monthly budget for three months while still working tests whether it is realistic, and every pound or dollar not spent goes straight into the fund. If the rehearsal fails, you learn it while salary still arrives.

                ## Milestones
                1. The planned monthly break budget set as your spending limit for three months.
                2. Actual spending recorded against it each month.
                3. Surplus salary moved to the fund each month of the rehearsal.
                4. The break budget revised from what really happened.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three months of actual spending recorded against the planned break budget, with the budget revised from the results."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose the three months for the rehearsal"
                - "Set your spending limit to the planned break budget"
                - "Move the rest of each month's salary to the break fund"
                - "Revise the break budget from three months of real spending"
            - name: Car, belongings and storage decision
              description: |-
                ## Purpose
                Parked for nine months, a car still costs insurance, tax and depreciation, and a storage unit can quietly eat a month's budget over a long break. Deciding what to sell, store, lend or keep turns idle possessions into fund money or a lower monthly cost.

                ## Milestones
                1. A list of large items with their monthly cost while unused.
                2. A decision for each item: sell, store, lend or keep.
                3. Storage quotes compared with the value of what would be stored.
                4. Sale proceeds added to the fund.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each large item has a recorded sell, store, lend or keep decision, and any sale proceeds are in the break fund."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List large items and what they cost each month while idle"
                - "Get two storage quotes if you will empty your home"
                - "Decide sell, store, lend or keep for each item"
                - "Move any sale proceeds into the break fund"
            - name: Comparing the cost of places to spend the break
              description: |-
                ## Purpose
                The same six months can cost twice as much in one city as in another, and a cheaper base can shorten the saving period by a year. Pricing realistic monthly costs in two or three places, including accommodation, health cover and visas, makes the choice on numbers as well as appeal.

                ## Milestones
                1. Two or three candidate places chosen.
                2. Monthly accommodation, food, transport and insurance priced for each.
                3. Visa or stay limits and their costs noted.
                4. The chosen place's costs carried into the break budget.

                ## Notes
                Start from the **Trip** template for each candidate place. Check visa rules on official government sites only.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side monthly cost comparison of two or three places, including visas and insurance, with the chosen place's costs in the budget."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose two or three places where you would genuinely spend the break"
                - "Price a month of accommodation, food and transport in each"
                - "Check visa or stay limits on official government sites"
                - "Copy the chosen place's costs into the break budget"
            - name: Deciding whether to earn anything during the break
              description: |-
                ## Purpose
                Paid work during a break, even a little, can stretch the fund by months, but it can also turn rest back into work, change your tax position or breach visa terms abroad. Setting a clear rule in advance, such as no work, a capped number of days or one project only, protects both the fund and the point of the break.

                ## Milestones
                1. A rule written for paid work during the break: none, capped or project-based.
                2. Tax and any visa limits on earning checked for where you will be.
                3. Only confirmed income added to the budget.
                4. Every payment received during the break logged.

                ## Notes
                Do not count on income you have not been offered. Budget as if it will not arrive.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule for paid work during the break exists, with tax and visa limits checked and any income logged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your rule for paid work during the break"
                - "Check tax and visa limits on earning where you will be"
                - "Add only confirmed income to the break budget"
                - "Log any payment received during the break @recurring(monthly:28)"
            - name: Investments and pension contributions during the break
              description: |-
                ## Purpose
                During the break you have to decide whether to keep paying into investments and pensions, pause them or simply leave them alone. Writing this down before you leave stops panicked selling in a market fall and avoids forgetting a contribution that was earning tax relief or a match.

                ## Milestones
                1. Every regular investment and pension contribution listed.
                2. A decision for each: continue, reduce or pause.
                3. A rule written not to sell long-term investments to fund the break.
                4. Paused contributions noted for restarting on return.

                ## Notes
                Some pension schemes let you keep contributing during unpaid leave. Ask before assuming they stop.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision for every regular investment and pension contribution during the break, with a no-selling rule and a restart list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every regular investment and pension contribution"
                - "Decide whether each continues, reduces or pauses during the break"
                - "Write a rule not to sell long-term holdings to fund the break"
                - "Look at your long-term portfolio once a quarter, no more @recurring(quarterly)"
            - name: Giving notice or agreeing leave terms in writing
              description: |-
                ## Purpose
                The conversation with your manager sets your last day of pay, the date benefits stop and whether a job is held for you. Having the numbers ready and getting the result in writing protects the fund from a surprise unpaid month or a lost bonus.

                ## Milestones
                1. Your preferred last day, bonus and vesting dates and notice period confirmed.
                2. The conversation held with your manager.
                3. Last day of pay, final pay items and benefit end dates confirmed in writing.
                4. Any return arrangement written down and signed.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written confirmation from your employer of last day of pay, final pay items, benefit end dates and any return arrangement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the last day you want to work and why"
                - "Check the bonus, vesting and holiday pay you are owed"
                - "Hold the conversation with your manager"
                - "Get the leave or leaving terms confirmed in writing"
            - name: Final month money checklist before leaving
              description: |-
                ## Purpose
                The last four weeks of salary are the last chance to do anything that needs proof of income, a payslip or a work email address. A checklist run in the final month moves every standing order, document and account into its break setting.

                ## Milestones
                1. Applications needing proof of income, such as credit cards or tenancies, completed.
                2. Standing orders switched from saving to drawdown.
                3. Payslips, pension statements and benefit documents saved outside work systems.
                4. Accrued holiday pay and final pay items checked on the last payslip.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every item on the final month checklist is ticked before your last day, including documents saved and standing orders switched."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create a final month checklist from the operational checklist template"
                - "Complete any application that needs proof of income"
                - "Save payslips and benefit documents outside work systems"
                - "Switch standing orders from saving to drawdown"
            - name: Midpoint money review during the break
              description: |-
                ## Purpose
                Halfway through, you know your real monthly cost and whether you want to extend, shorten or stay the course. A short review at the midpoint, done with numbers rather than feeling, lets you make that choice while enough of the fund is left to act on it.

                ## Milestones
                1. Spending to date compared with the budget for the same period.
                2. Months of runway left calculated at the actual spending rate.
                3. A decision to extend, shorten or keep the planned length recorded.
                4. Return plans adjusted to match.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A midpoint review compares actual spending with budget, calculates runway and records a decision on the break's length."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up spending since the break started"
                - "Calculate runway at your actual monthly spending rate"
                - "Decide whether to extend, shorten or keep the length"
                - "Tell anyone affected by a change of return date"
            - name: Re-entry buffer for the first months back
              description: |-
                ## Purpose
                Finding work after a break can take longer than expected, and the first pay packet may arrive a month after you start. A separate re-entry buffer of two to three months of costs, saved before you leave, means the break ends when you choose rather than when the money does.

                ## Milestones
                1. A re-entry buffer target of two to three months of essential costs set.
                2. The buffer held apart from the break fund.
                3. The buffer fully funded before the start date.
                4. A rule written that it is only touched after the break ends.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A re-entry buffer of two to three months of essential costs is fully funded and held apart from the break fund before you leave."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set a re-entry buffer target of two to three months of costs"
                - "Hold the buffer in a separate labelled account"
                - "Transfer this month's amount into the buffer @recurring(monthly:12)"
                - "Write the rule for when the buffer may be used"
            - name: First ninety days back and restarting contributions
              description: |-
                ## Purpose
                Good habits slip in the weeks after returning: pension contributions stay paused, the savings standing order is never restarted and spending jumps with the first salary. A ninety-day restart plan brings every contribution back and starts closing the pension gap you measured before leaving.

                ## Milestones
                1. Pension contributions restarted at the agreed rate.
                2. Standing orders to savings and investments restarted.
                3. The re-entry buffer refilled to target.
                4. The extra contribution needed to close the pension gap in place.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within ninety days of returning, pension and savings contributions are restarted and the gap-closing contribution is in place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Restart pension contributions on your first payroll back"
                - "Restart standing orders to savings and investments"
                - "Refill the re-entry buffer to its target"
                - "Set the extra pension contribution that closes the break gap"
            - name: Funding a break with children in the family
              description: |-
                ## Purpose
                Taking a break with children adds school or nursery fees you may still owe, children's insurance, and the cost of schooling while away or at home. Pricing these separately, and checking school rules on absence, avoids the most expensive surprises of a family break.

                ## Milestones
                1. Childcare and school commitments listed with notice periods and fees.
                2. School absence rules or home education requirements checked.
                3. Children's costs added to the break budget as a separate section.
                4. Any change to family benefits during the break checked with the official service.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A children's section in the break budget, with school absence rules and family benefit effects checked and noted."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List childcare and school contracts with their notice periods"
                - "Ask the school how it handles an extended absence"
                - "Add a children's section to the break budget"
                - "Check whether any family benefits change during the break"
            - name: One partner on a break, one still earning
              description: |-
                ## Purpose
                When only one partner steps away, the household runs on one salary, and the working partner can end up subsidising the break without it being agreed. Setting out who pays what, and whose pension keeps growing, keeps the arrangement fair and visible to both.

                ## Milestones
                1. Household costs during the break split between the earning partner and the fund.
                2. Each partner's pension contributions during the break written down.
                3. Any top-up to the non-earning partner's pension considered and decided.
                4. A monthly money conversation scheduled for the length of the break.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split of household costs during the break, with each partner's pension contributions and any top-up decision recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Split household bills between the salary and the break fund"
                - "Write down each partner's pension contributions during the break"
                - "Decide whether the earning partner tops up the other's pension"
                - "Hold a short money conversation with your partner @recurring(monthly:8)"
            - name: Mini-retirement between freelance contracts
              description: |-
                ## Purpose
                Contractors and freelancers can take a break between contracts without asking anyone, but irregular income makes saving harder and tax bills can land in the middle of the break. Saving a fixed share of each invoice, after setting tax aside, keeps the fund growing and the tax bill paid.

                ## Milestones
                1. A fixed percentage of each invoice set for the break fund.
                2. Tax set aside before the fund, in a separate account.
                3. Tax payment dates that fall during the break listed and funded.
                4. The break timed for a natural gap between contracts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fixed share of every invoice reaches the break fund after tax is set aside, and tax dates during the break are funded."
                cadence: rolling
              tasks:
                - "Set a fixed percentage of each invoice for the break fund"
                - "Move tax money to its own account before anything else"
                - "List tax payment dates that fall during the break"
                - "Move the fund share of this month's invoices @recurring(monthly:5)"
            - name: A break in your fifties that bridges to retirement
              description: |-
                ## Purpose
                In your fifties a long break may effectively become early retirement, and the questions change: when private pensions can be reached, whether drawing on them early limits later contributions, and how the break fund bridges the years before. Mapping the dates and rules now prevents an expensive early withdrawal made in a hurry.

                ## Milestones
                1. The earliest access age for each pension and your state pension age noted.
                2. Any rules that limit later contributions after taking pension money checked.
                3. A bridge plan showing which money funds each year until pensions start.
                4. Questions for a regulated adviser prepared before any pension is touched.

                ## Notes
                Drawing pension money early can have lasting tax and allowance effects. Speak to a regulated adviser or your country's free pension guidance service first.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A bridge plan showing which money funds each year until pensions start, with access ages and contribution limits checked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Note the earliest access age for each pension you hold"
                - "Look up your state pension or social security age"
                - "Sketch which money funds each year until pensions start"
                - "Book a session with a free pension guidance service"
            - name: Funding a retraining sabbatical
              description: |-
                ## Purpose
                Retraining breaks carry extra costs, such as course fees, exam fees and equipment, and often a lower starting salary afterwards. Budgeting for those and checking employer, government or professional body funding first can cut the bill and shows how long the new salary takes to pay the break back.

                ## Milestones
                1. Course, exam and equipment costs added to the break budget.
                2. Funding options from employers, governments or professional bodies checked.
                3. The expected starting salary in the new field estimated from job adverts.
                4. The number of years for the break to pay back calculated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Retraining costs are in the break budget, funding options are checked and a payback period in years is written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Price the course, exams and equipment you would need"
                - "Check for employer, government or professional body funding"
                - "Look up starting salaries in the new field from ten job adverts"
                - "Work out how many years the change takes to pay back"
            - name: Career break to care for a family member
              description: |-
                ## Purpose
                Stepping away to care for a parent, partner or child is a break with an uncertain length and costs of its own. Checking carer benefits, pension credits for carers and the employer's carer leave before resigning can keep some money coming in and protect the long-term record.

                ## Milestones
                1. Employer carer leave or flexible work options checked before resigning.
                2. Carer benefits and pension credits available in your country listed.
                3. A fund drawdown plan set for an open-ended break, with a review point.
                4. Applications for any benefit or credit submitted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Carer leave, benefits and pension credits are checked, any applications are submitted and a drawdown plan has a set review point."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask HR about carer leave and flexible work before resigning"
                - "List carer benefits and pension credits from the official service"
                - "Set a review point for an open-ended caring break"
                - "Submit applications for any carer benefit or credit"
            - name: Timing the break around share vesting and options
              description: |-
                ## Purpose
                Knowledge workers with restricted stock units or share options can lose unvested shares on resignation, and options often have to be exercised within a short window after leaving. Mapping vesting dates, exercise windows and the tax due before choosing a start date can be worth more than a year of saving.

                ## Milestones
                1. Every grant listed with vesting dates and what happens to unvested shares on leaving or on leave.
                2. Post-leaving exercise windows for any options noted.
                3. The tax due on vesting or exercise estimated.
                4. The start date chosen with the value left behind written down.

                ## Notes
                Equity tax rules are complex and vary by country. Check exercise decisions with a qualified tax adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A grant schedule with vesting dates and exercise windows, and a start date chosen with the value left behind written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download your grant schedule from the share plan portal"
                - "Check what happens to unvested shares on resignation or unpaid leave"
                - "Note the exercise window for any options after leaving"
                - "Write down the value you would leave behind at each start date"
            - name: Stress testing the break plan
              description: |-
                ## Purpose
                Breaks run long, markets fall, a tenant leaves or the job hunt takes six months. Writing down the five things most likely to go wrong, with a trigger and a response for each, means you have a plan before you need one.

                ## Milestones
                1. Five risks listed, such as overspending, a market fall, an unlet home, illness and a slow return.
                2. A trigger and a response written for each.
                3. The fund tested against the worst two risks happening together.
                4. The register reviewed before you leave and at the midpoint.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register for the break lists five risks with triggers and responses, and shows the fund survives the two worst together."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the five things most likely to derail the break"
                - "Write a trigger and a response for each risk"
                - "Check the fund survives the two worst risks at once"
                - "Ask the agent to challenge the register for missing risks"
            - name: Rolling fund for a break every few years
              description: |-
                ## Purpose
                Some people plan a mini-retirement every five to seven years rather than one long retirement at the end. A rolling fund with a standing contribution, a target for the next break and a rule for leftovers turns it into a repeatable pattern rather than a one-off scramble.

                ## Milestones
                1. The interval between breaks and the next break's target chosen.
                2. A standing contribution set that reaches the target in time.
                3. A rule for leftover money: roll over, invest or move to pensions.
                4. The long-term retirement projection updated to include repeated breaks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rolling break fund has a set interval, a next target, a standing contribution and a written rule for leftovers."
                cadence: cyclic
              tasks:
                - "Choose the interval and the target for the next break"
                - "Set a standing contribution that reaches the target in time"
                - "Write a rule for money left over after each break"
                - "Recalculate the next break's target and date @recurring(yearly)"
            - name: Residency and pension checks for a long break abroad
              description: |-
                ## Purpose
                Spending a long break abroad can change tax residency, affect your right to keep paying into some pensions or tax-free accounts, and complicate health cover back home. A checklist of questions answered from official sources, and by a qualified adviser where unclear, avoids an unwelcome letter from the tax authority later.

                ## Milestones
                1. Days you will spend in each country estimated.
                2. Residency tests in your home country and destination looked up from official sources.
                3. Rules on contributing to pensions and tax-free accounts while abroad checked.
                4. Unclear answers confirmed with a qualified cross-border adviser.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Days per country are estimated and residency and contribution rules are checked and recorded before departure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate the days you will spend in each country"
                - "Look up the residency test on your tax authority's website"
                - "Check whether you can keep paying into tax-free accounts abroad"
                - "Book a cross-border tax adviser if any answer is unclear"
            - name: Post-break review of what it really cost
              description: |-
                ## Purpose
                After you return, the actual cost of the break, the time it took to find work and the effect on your pension are known for the first time. Recording them on one page gives you a real basis for the next break and shows whether the long-term plan is back on track.

                ## Milestones
                1. Total actual cost compared with the budget.
                2. Time to return to paid work and any change in salary recorded.
                3. The pension gap recalculated with real figures.
                4. Lessons for a future break written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page review records actual versus budgeted cost, time to return to work and the recalculated pension gap."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add up the actual cost of the break from statements"
                - "Record how long it took to return to paid work"
                - "Rerun your pension projection with the real gap"
                - "Ask the agent to draft lessons for your next break from your notes"
---

# Mini-Retirement Funding

This area is for knowledge workers and anyone else who wants three months to a year away from work mid-career, paid for properly and without wrecking their retirement. It starts with foundations (the purpose, length and full cost of the break, the pension gap, a separate emergency fund, the employer's leave policy, a dedicated account and a monthly target), then the saving and spending routines, the knowledge on where to hold the money, tax, insurance and state pension records, decisions on fixed costs, your home and paid work, the dated events of leaving, the midpoint and returning, situations for couples, parents, freelancers, carers and people in their fifties, and finally specialist work on share vesting, stress testing, repeat breaks and spending the time abroad.

While you save, the rhythm is a payday transfer, a monthly progress log, a quarterly check against your pension plan and the fund's interest rate, and yearly reviews of pay rises, windfalls and the retirement projection; during the break it becomes a monthly drawdown and a weekly spending check. The Monthly budget and bills, Savings goal, Metrics log, Trip, Operational checklist and Risk register templates pair with the cost budget, the fund account, the progress log, comparing places, the final month checklist and the stress test. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
