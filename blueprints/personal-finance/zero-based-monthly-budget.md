---
id: personal-finance.zero-based-monthly-budget
name: Zero-Based Monthly Budget
description: "A zero-based budget that gives every unit of take-home pay a job: honest income, real categories, a payday assignment routine, weekly check-ins, month-end reviews and the skills to keep it working through real life."
category: personal
version: 1.0.0
tags: [personal-finance, zero-based-monthly-budget, everyone, zero-based-budgeting, spending-plan, payday, budget-categories]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - monthly-budget-bills
    - operational-checklist
    - metrics-log
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Zero-Based Monthly Budget
          description: "Giving every unit of monthly income a job with a zero-based spending plan, reviewed each payday and adjusted as life changes."
          projects:
            - name: Choosing your budget month and payday cycle
              description: |-
                ## Purpose
                Zero-based budgeting only works when you know which money belongs to which month. If pay lands on the 25th, a calendar-month budget leaves rent, groceries and the last week of the month funded from different paychecks, and the plan stops matching the bank. Deciding once whether your budget month runs from the 1st or from payday removes that confusion before any numbers go in.

                ## Milestones
                1. Every pay date in the household listed with its usual day of the month.
                2. A decision recorded: calendar month or payday to payday.
                3. The first and last day of your budget month written at the top of the budget.
                4. Bills that fall between payday and the 1st each assigned to one budget month.

                ## Notes
                If pay dates shift for weekends and public holidays, choose the payday cycle and name each budget month after the calendar month most of its days fall in.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The household's budget month is defined by a written start and end day that every adult who spends from the budget can state."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every pay date in the household for the last three months"
                - "Decide between a calendar month and a payday-to-payday month"
                - "Write the start and end day at the top of the budget"
                - "Mark which month each bill near the boundary belongs to"
            - name: Reliable monthly take-home income figure
              description: |-
                ## Purpose
                The number at the top of a zero-based budget is what actually reaches the account, not the salary on the contract. Pension contributions, student loan deductions, salary sacrifice and tax code changes all sit between the two, and benefit or maintenance payments may land on different days. Pinning down one conservative monthly figure, with every source listed, means you never assign money that has not arrived.

                ## Milestones
                1. The last three payslips or pension statements gathered for every earner.
                2. Net pay from each source listed with the date it lands.
                3. Irregular extras such as overtime, tips or bonuses kept out of the base figure.
                4. One monthly income figure written at the top of the budget, using the lowest recent month where pay varies.

                ## Notes
                If the figure drops after a tax code or deduction change, rebuild the budget from the lower number that week rather than waiting for the month to end.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A single monthly take-home figure, traced to named payslips or statements, is written at the top of the budget."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the last three payslips for each earner"
                - "List every deduction between gross and net pay"
                - "Separate guaranteed income from overtime, tips and bonuses"
                - "Write the conservative monthly figure at the top of the budget"
                - "Compare the income figure with the newest payslip @recurring(quarterly)"
            - name: Three-month spending baseline for budget amounts
              description: |-
                ## Purpose
                Most first budgets fail because the numbers are wishes: groceries set at what you would like to spend rather than what you do. Pulling three months of bank and card statements and totalling them roughly by group gives real starting amounts, so the first month surprises you less. The aim is a starting estimate per category, not a forensic audit.

                ## Milestones
                1. Three recent months of statements downloaded for every account and card that pays household costs.
                2. Spending totalled into rough groups such as housing, food, transport and personal.
                3. A monthly average for each group, with one-off spikes noted separately.
                4. The averages copied beside each category as starting budget amounts.

                ## Notes
                Keep this rough. Detailed transaction tracking is its own discipline; here you only need numbers good enough to set the first budget.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page table shows a three-month monthly average for each spending group, sourced from named statements."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download three months of statements for every account and card"
                - "Ask the agent to group the transactions into broad spending categories"
                - "Mark one-off costs so they do not inflate the averages"
                - "Copy each monthly average beside its category in the budget"
            - name: Budget category list built for your household
              description: |-
                ## Purpose
                Categories are the jobs money can be given, and the list decides whether the budget is usable. Too few and groceries swallow takeaways and toiletries; too many and the payday session takes an hour. Most households settle on 20 to 35 categories in four or five groups: fixed bills, everyday spending, irregular costs, goals and personal money.

                ## Milestones
                1. Four or five category groups named, in the order you will fund them.
                2. Between 20 and 35 categories, each with a one-line rule for what belongs in it.
                3. Every regular outgoing from the baseline mapped to exactly one category.
                4. Categories nobody in the household could explain removed or merged.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A category list of 20 to 35 lines in named groups, each with a one-line rule, is set up in the budget tool."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sketch four or five category groups on paper"
                - "List the categories under each group with a one-line rule"
                - "Map each outgoing from the baseline to one category"
                - "Merge categories that would rarely hold more than small change"
            - name: Choosing a zero-based budgeting tool
              description: |-
                ## Purpose
                A zero-based budget needs one number always visible: money still waiting for a job. Spreadsheets show it if you build the formula, envelope-style budgeting apps show it by design, and paper works for some households for years. Choosing on cost, bank import, sharing between partners and how overspending is handled saves a painful mid-year migration.

                ## Milestones
                1. Three options shortlisted, including at least one free spreadsheet.
                2. Each option scored on cost, sharing, bank import, overspend handling and mobile entry.
                3. A trial month or free trial run on the top choice.
                4. The choice recorded with its reason, and any subscription renewal date noted.

                ## Notes
                Start from the **Purchase decision** template. A paid app is only worth its fee if it makes the payday session faster or the household more likely to use it.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One budgeting tool is chosen against five written criteria, with the decision and any renewal date recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the five criteria that matter most to your household"
                - "Shortlist a spreadsheet and two budgeting apps"
                - "Score each option against the criteria"
                - "Run the first budget month in the top-scoring option"
            - name: On-budget account map and starting balances
              description: |-
                ## Purpose
                Before money can be assigned, you need to know which accounts the budget covers and how much is in them today. Current accounts, the cash tin and credit cards used for daily spending usually belong on-budget; long-term savings and pensions usually do not. Getting the starting balance right means the first assignment starts from real money rather than a guess.

                ## Milestones
                1. Every account, card and cash holding listed with its purpose.
                2. Each one marked on-budget or tracked separately, with the reason.
                3. Today's balances entered for every on-budget account.
                4. Credit card balances already owed recorded as a debt to repay, not as spending money.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An account list marks each account on-budget or off-budget, and starting balances match the bank on the same day."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every account, card and cash holding in the household"
                - "Mark each one on-budget or off-budget"
                - "Enter today's balance for every on-budget account"
                - "Record any existing card balance as a separate debt line"
            - name: Priority order for assigning each month's income
              description: |-
                ## Purpose
                When money is short, the order you fund categories matters more than the amounts. Housing, energy, food, essential transport and minimum debt payments come first, because missing them costs fees, arrears or worse. Writing the order down once means a tight month is handled by the list, not by whichever bill shouts loudest.

                ## Milestones
                1. Categories ranked into four tiers: essentials, obligations, important and flexible.
                2. Essentials confirmed as housing, utilities, food, transport to work and minimum payments, adjusted for your situation.
                3. The tier order copied into the budget so categories appear in funding order.
                4. A written rule for what happens when income runs out before tier three.

                ## Notes
                If essentials alone exceed income, this is a hardship situation rather than a budgeting problem, and a free debt advice service is the right first call.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every category sits in one of four written funding tiers, and the budget lists categories in that order."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Sort every category into four funding tiers"
                - "Check the essentials tier against your actual rent and bills"
                - "Reorder the budget so tier one is funded first"
                - "Write the rule for a month when income stops short"
            - name: First zero-based budget assigned to zero
              description: |-
                ## Purpose
                The first full assignment is where the method becomes real: income at the top, every category given an amount, and the unassigned figure brought to exactly zero. Expect to reshuffle three or four times as the totals collide. A budget that balances on paper but leaves groceries at half the baseline will break in week two, so adjust honestly.

                ## Milestones
                1. Next month's income entered at the top of the budget.
                2. Tier one categories funded at their full baseline amounts.
                3. Remaining categories funded in tier order until the unassigned figure reads zero.
                4. Any category set well below its baseline flagged with a plan for how spending will actually fall.

                ## Notes
                Start from the **Monthly budget and bills** template. Zero means every unit has a job, including savings and goals; it does not mean spending everything.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A budget for the coming month shows income fully assigned across all categories with the unassigned figure at exactly zero."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Enter next month's expected income at the top"
                - "Fund tier one categories at their baseline amounts"
                - "Assign the rest in tier order until nothing is left"
                - "Flag any category set well below its baseline"
            - name: Small miscalculation buffer category
              description: |-
                ## Purpose
                Even a careful budget misses things: a price rise on the energy tariff, a parking fine, a forgotten gift. A modest buffer line, often 2 to 3 percent of take-home pay, absorbs those without raiding groceries. Naming it and setting rules for when it may be used stops it becoming a second fun-money pot.

                ## Milestones
                1. A buffer category created and funded at a set percentage of income.
                2. Two or three written rules for what counts as a genuine miss.
                3. Every use of the buffer noted with what it paid for.
                4. Repeated uses turned into proper categories at the next monthly review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A buffer category funded at a stated percentage exists, with written rules and a log of each use."
                cadence: rolling
              tasks:
                - "Create a buffer category in the budget"
                - "Set its amount as a small percentage of take-home pay"
                - "Write the rules for what the buffer may pay for"
                - "Note each use with the date and what it covered"
            - name: Household agreement on who spends from which lines
              description: |-
                ## Purpose
                A budget kept by one person and spent by three is a steady source of friction. Every adult who taps a card needs to know which categories they spend from, how to check what is left and what to do before overspending. A short written agreement, reached in a calm conversation, prevents most end-of-month arguments.

                ## Milestones
                1. Each category assigned a named spender or marked as shared.
                2. A way for everyone to see category balances agreed: the app, a shared sheet or a weekly message.
                3. A rule agreed for asking before overspending a shared category.
                4. The agreement written down and kept where everyone can read it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written household agreement names who spends from each category and how overspends are handled, and each adult has read it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark each category with its main spender or as shared"
                - "Agree how everyone will see what is left in each line"
                - "Agree the rule for asking before going over"
                - "Revisit the spending agreement together @recurring(yearly)"
            - name: Payday assignment session
              description: |-
                ## Purpose
                Zero-based budgeting lives or dies on one habit: assigning new money the day it arrives. A focused 20-minute session each payday, entering the income, funding categories in tier order and checking that unassigned money reads zero, keeps the plan current and stops pay quietly leaking into everyday spending.

                ## Milestones
                1. A fixed time on payday reserved for the session.
                2. A short checklist covering income entry, tier funding and the zero check.
                3. Every pay received in three months assigned within a day of arriving.
                4. The session taking under 30 minutes on average.

                ## Notes
                Start from the **Operational checklist** template and keep the checklist to one screen.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every payday in a three-month run is followed within one day by a session that brings unassigned money to zero."
                cadence: rolling
              tasks:
                - "Block 20 minutes in the calendar on each payday"
                - "Write a five-step payday checklist"
                - "Assign the new income until unassigned reads zero @recurring(monthly:25)"
                - "Time the session and note what slowed it down"
            - name: Weekly ten-minute budget check-in
              description: |-
                ## Purpose
                Waiting a whole month to discover the grocery line ran dry on the 12th is too late to do anything about it. Ten minutes each week, entering any missing transactions and glancing at which categories are low, turns surprises into small adjustments. It works best at the same time each week, tied to something you already do.

                ## Milestones
                1. A weekly slot chosen and attached to an existing routine.
                2. Uncategorised transactions cleared at each check-in.
                3. Categories below a quarter of their amount noted with a plan for the rest of the month.
                4. Eight check-ins in a row completed.

                ## Notes
                Pair it with something fixed, like Sunday meal planning or the weekly shop. If you miss one, do the next; do not try to catch up twice.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly check-ins are completed with no uncategorised transactions left at the end of each."
                cadence: rolling
              tasks:
                - "Choose a weekly time linked to an existing routine"
                - "Categorise every transaction since the last check-in @recurring(weekly:sun)"
                - "List any category with under a quarter left"
                - "Decide what changes for categories running low"
            - name: Overspending rebalance routine
              description: |-
                ## Purpose
                Overspending a category is normal; leaving it negative is what breaks a zero-based budget, because the shortfall silently borrows from next month. The rule is simple: when a line goes red, move money from another category the same day. Practising it until it is automatic keeps the budget honest without guilt.

                ## Milestones
                1. A written rule that no category stays negative for more than a day.
                2. A ranked list of categories you will take from first when covering an overspend.
                3. Every overspend in one month covered by a recorded move.
                4. A note of which categories most often run over, ready for the monthly review.

                ## Notes
                Covering from goal categories is allowed but should sit last on the list, not first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a full month, every category that went negative was covered from another named category within one day."
                cadence: rolling
              tasks:
                - "Write the rule for covering an overspend the same day"
                - "Rank the categories you will take money from first"
                - "Cover today's negative categories from the ranked list"
                - "Log each move with the amount and source category"
            - name: Month-end category close and rollover
              description: |-
                ## Purpose
                At the end of each budget month some categories have money left and some are empty, and what you do with each shapes next month. Deciding by category type whether leftovers roll forward, move to a goal or return to be reassigned keeps balances meaningful. Without a close, rolled-over balances pile up until nobody knows what they are for.

                ## Milestones
                1. A written rollover policy saying which category types keep leftovers and which sweep them.
                2. Every category balance checked at month end.
                3. Leftovers moved according to the policy, with the moves noted.
                4. Next month opened with no negative categories carried in.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At each month end, every category is closed under a written rollover policy and none carries a negative balance forward."
                cadence: rolling
              tasks:
                - "Write the rollover rule for each category group"
                - "Check every category balance before the budget month ends @recurring(monthly:28)"
                - "Sweep or roll leftovers according to the rule"
                - "Clear any negative balance before the new month opens"
            - name: Budget balance matches bank balance check
              description: |-
                ## Purpose
                Category totals are only trustworthy if they add up to the money actually sitting in the on-budget accounts. Missed cash spending, a duplicate import or a transfer recorded once can drift the two apart by small amounts that grow. A monthly balance check catches the gap while it is still easy to trace.

                ## Milestones
                1. Each on-budget account balance in the tool compared with the banking app.
                2. Any difference traced to a specific missing, duplicated or mistyped entry.
                3. The tool corrected to match the bank.
                4. Three months in a row ending with zero difference.

                ## Notes
                This checks the budget against the bank. Checking statements line by line for fraud and billing errors is a separate statement routine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, on-budget balances in the tool match the bank exactly after the monthly check."
                cadence: rolling
              tasks:
                - "Compare each on-budget balance with the banking app @recurring(monthly:3)"
                - "Trace any difference to the transaction that caused it"
                - "Correct the entry in the budget tool"
                - "Note the cause if the same kind of error repeats"
            - name: Monthly planned versus actual variance review
              description: |-
                ## Purpose
                Comparing what you planned with what you spent, line by line, is how a budget gets more accurate each month. Most households find three or four categories consistently wrong, often groceries, fuel and children's costs, and a handful that are right. Twenty minutes a month adjusting those amounts makes the next budget fit real life better.

                ## Milestones
                1. A table of planned against actual spending for each category.
                2. The three largest gaps explained in a sentence each.
                3. Next month's amounts adjusted for any gap likely to repeat.
                4. A running note of which categories were adjusted and why.

                ## Notes
                Start from the **Metrics log** template to keep a month-by-month record of total planned and actual spending.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month a planned versus actual table exists, with the three largest gaps explained and next month adjusted."
                cadence: rolling
              tasks:
                - "Export last month's planned and actual figures by category @recurring(monthly:5)"
                - "Explain the three largest gaps in one sentence each"
                - "Adjust next month's amounts for gaps likely to repeat"
                - "Record total planned and actual spending in the metrics log"
            - name: Next month's budget drafted from a calendar scan
              description: |-
                ## Purpose
                Many budget surprises sit on the calendar weeks before they arrive: a wedding, a school trip, a car service, a birthday meal out. Drafting next month's budget ten days early, after a slow scroll through the family calendar, puts those costs into categories before payday rather than into the overspend column after.

                ## Milestones
                1. Next month's calendar scanned for events that cost money.
                2. Each event given an estimated cost and a category.
                3. A draft budget for next month ready before payday.
                4. Last month's draft compared with what actually happened to sharpen the next scan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A draft for next month, including costed calendar events, exists at least five days before the budget month begins."
                cadence: rolling
              tasks:
                - "Scroll next month's calendar for anything that costs money @recurring(monthly:18)"
                - "Estimate the cost of each event and assign it a category"
                - "Save the draft budget for the coming month"
                - "Check which costs the scan missed last month"
            - name: Unplanned income assignment rule
              description: |-
                ## Purpose
                Refunds, cashback, a gift from a relative, money from selling a sofa: small unplanned income tends to vanish because it never gets a job. A standing rule, such as assigning anything unexpected within 48 hours and splitting it between the buffer and a goal, keeps it working. Refunds for budgeted purchases go back to the category they came from.

                ## Milestones
                1. A written rule that refunds return to their original category.
                2. A split rule for other unplanned income, such as half to a goal and half to the buffer.
                3. Every unplanned receipt in one quarter assigned within 48 hours.
                4. A short list of where unplanned money went in that quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every unplanned receipt in a quarter has been assigned within 48 hours under a written rule, and a list shows where it went."
                cadence: rolling
              tasks:
                - "Write the rule for returning refunds to their original category"
                - "Agree a split for gifts, sales and other unplanned money"
                - "Assign each unplanned receipt within 48 hours"
                - "List where unplanned money went at the end of the quarter"
            - name: Quarterly reset of category amounts
              description: |-
                ## Purpose
                Prices move, children grow and habits drift, so amounts set in January are usually wrong by April. Once a quarter, re-base each flexible category on the last three months of actual spending rather than nudging one month at a time. It is the moment to catch slow creep, such as groceries rising a little every month.

                ## Milestones
                1. Three months of actual spending per category pulled into one view.
                2. Each flexible category re-based on the three-month figure.
                3. Any category up more than 10 percent on the previous quarter questioned.
                4. The new amounts in place before the next payday session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every flexible category has a quarterly amount based on three months of actuals, with rises over 10 percent explained in writing."
                cadence: cyclic
              tasks:
                - "Pull three months of actual spending by category @recurring(quarterly)"
                - "Re-base each flexible category on the three-month figure"
                - "Question any category up more than 10 percent"
                - "Load the new amounts before the next payday"
            - name: Zero-based budgeting principles study
              description: |-
                ## Purpose
                Knowing why the method works makes it easier to stick with when a month goes wrong. The core ideas fit on one page: assign only money you have, give every unit a job, plan irregular costs monthly, move money when plans change, and work towards spending money that is a month old. A few evenings with one respected guide, then your own written version, is enough.

                ## Milestones
                1. One book or course on zero-based or envelope budgeting chosen.
                2. The core rules summarised in your own words on one page.
                3. Two or three ideas you will adapt or drop for your household noted.
                4. The one-page summary kept beside the budget.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of zero-based budgeting rules in your own words sits beside the budget, with adaptations noted."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose one book or course on zero-based budgeting"
                - "Read or watch it over two weeks"
                - "Write the core rules on one page in your own words"
                - "Note which ideas you will adapt for your household"
            - name: Turning annual and irregular costs into monthly lines
              description: |-
                ## Purpose
                Car insurance, a yearly software renewal, the boiler service and new school shoes are not emergencies; they are monthly costs paid in lumps. A zero-based budget handles them by dividing each by the months until it falls due and assigning that amount every month. Learning to spot and size these lines is what stops September blowing the budget apart.

                ## Milestones
                1. Every cost paid less often than monthly listed with its amount and due month.
                2. A monthly amount calculated for each by dividing by the months remaining.
                3. Each one given its own category or grouped under an irregular costs group.
                4. The list checked against a year of statements for anything missed.

                ## Notes
                Where to hold the money and how to build named pots is a separate saving discipline. Here the job is making sure the monthly budget carries the right amounts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every non-monthly cost has a calculated monthly amount and a category in the budget, checked against twelve months of statements."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Search twelve months of statements for anything paid yearly or termly"
                - "List each cost with its amount and due month"
                - "Divide each cost by the months left until it falls due"
                - "Update the irregular cost list with renewal price changes @recurring(yearly)"
            - name: Credit card spending inside a zero-based budget
              description: |-
                ## Purpose
                Paying for groceries on a credit card is fine in a zero-based budget, as long as the money to repay it moves from groceries to the card payment line at the same moment. Get this wrong and the statement arrives with no category holding the money. Learning the method once lets you keep card protections without drifting into debt.

                ## Milestones
                1. The way your tool handles card purchases understood and written down.
                2. A card payment category that grows as you spend.
                3. The full statement balance covered by the card payment category before the due date.
                4. Any existing card debt kept in a separate line from new spending.

                ## Notes
                If new card spending is not being cleared in full each month, stop using the card for budgeted spending until it is.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For two statement cycles, the card payment category held the full new balance before the payment due date."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read how your budgeting tool handles card purchases"
                - "Create a card payment category for each card in use"
                - "Check the payment category matches the statement before it is due"
                - "Separate any old card debt into its own repayment line"
            - name: Splitting mixed receipts across categories
              description: |-
                ## Purpose
                One supermarket receipt can hold food, cleaning products, a birthday card and a phone charger. Lumping it all into groceries makes that line look overspent and hides spending elsewhere. Splitting the big mixed shops, and agreeing when not to bother, keeps category totals meaningful without making entry a chore.

                ## Milestones
                1. A rule for which receipts get split, such as any above a set amount or with non-food items.
                2. The split feature in your budget tool found and used on three receipts.
                3. Household items given a clear home category.
                4. A full month of mixed shops split under the rule.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A month of supermarket and online orders above the agreed threshold has been split into their real categories."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Agree the threshold above which a receipt gets split"
                - "Find the split transaction feature in your budget tool"
                - "Split this week's largest mixed shop into its categories"
                - "Keep receipts from big mixed shops until they are entered"
            - name: Spreadsheet build for a zero-based budget
              description: |-
                ## Purpose
                Built well, a spreadsheet can do everything a paid app does, as long as you understand the formulas behind it. The essentials are a category table, a transactions sheet, a sum per category and one cell showing income minus assigned. Building it yourself teaches exactly how the method hangs together and costs nothing.

                ## Milestones
                1. A categories sheet with assigned, spent and remaining columns.
                2. A transactions sheet with date, payee, amount and category.
                3. Formulas pulling spending per category from the transactions sheet.
                4. An unassigned cell that turns red whenever it is not zero.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A working spreadsheet shows assigned, spent and remaining for every category, plus an unassigned cell that reads zero."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create a categories sheet with assigned, spent and remaining columns"
                - "Create a transactions sheet with a category drop-down"
                - "Add sum-if formulas that total spending per category"
                - "Format the unassigned cell to turn red when it is not zero"
            - name: Reading budget reports and trends
              description: |-
                ## Purpose
                After a few months a budget holds real data on where money goes, yet few people look beyond the current month. Learning to read a spending-by-category chart, an income versus spending trend and a net worth line shows patterns no single month reveals, like takeaways creeping up every winter. Half an hour with your tool's reports is enough to start.

                ## Milestones
                1. Each report your tool offers opened and understood.
                2. A six-month spending-by-category view saved.
                3. Two patterns written down that no single month showed.
                4. One budget change made because of what the reports showed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two written patterns drawn from six months of reports exist, with one budget change made because of them."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Open each report your budget tool offers"
                - "Save a six-month spending by category view"
                - "Write down two patterns that a single month would hide"
                - "Make one budget change based on those patterns"
            - name: Estimating variable categories from medians
              description: |-
                ## Purpose
                Groceries, fuel and household items vary month to month, and an average is easily dragged up by one big month. Using the median of six months plus a small margin gives an amount you will hit most months. The same habit works for utilities that swing with the seasons.

                ## Milestones
                1. Six months of spending gathered for each variable category.
                2. The median and the highest month calculated for each.
                3. Budget amounts set at the median plus a stated margin.
                4. Seasonal categories given separate summer and winter amounts where they differ sharply.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each variable category has an amount set from a six-month median plus a written margin."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Pull six months of totals for each variable category"
                - "Calculate the median and the highest month for each"
                - "Set each budget amount at the median plus a margin"
                - "Give energy and heating separate summer and winter amounts"
            - name: Cutting the three largest flexible categories
              description: |-
                ## Purpose
                When the budget will not reach zero without cuts, small trims across twenty lines rarely work. Focusing on the three biggest flexible categories, usually food, transport and leisure, finds most of the available money with the least effort. Each gets one specific change tested for a month, not a vague promise to spend less.

                ## Milestones
                1. The three largest flexible categories identified from the baseline.
                2. One specific, testable change chosen for each.
                3. Each change run for a full budget month.
                4. The amount freed recorded and reassigned to a named category or goal.

                ## Notes
                Pick changes you can keep. A meal plan that trims the grocery line modestly for good beats a drastic cut abandoned in week two.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three changes have each run for a full month, with the amount freed recorded and reassigned to a named line."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the three largest flexible categories from the baseline"
                - "Choose one specific change for each of the three"
                - "Run all three changes for a full budget month"
                - "Reassign the money freed to a named category or goal"
            - name: Personal no-questions spending lines for each adult
              description: |-
                ## Purpose
                Budgets that track every coffee often fail because adults resent justifying small spending to each other. Giving each adult a personal category, funded equally or by an agreed formula and never questioned, protects the rest of the budget and the relationship. Hobbies, lunches and small treats come from here.

                ## Milestones
                1. A personal category created for each adult.
                2. An amount agreed, equal or proportional, and written down.
                3. A shared rule that personal spending is never questioned.
                4. Personal lines funded on every payday for three months.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each adult has a named personal category funded for three consecutive months under a written no-questions rule."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a personal category for each adult"
                - "Agree the amount each personal line receives"
                - "Write down the no-questions rule"
                - "Move small personal spending out of shared categories"
            - name: Budgeting on last month's income
              description: |-
                ## Purpose
                Living paycheck to paycheck inside a zero-based budget turns every payday into a race. The fix is to build one month of spending ahead, so this month is funded entirely from money that arrived last month. It usually takes six to twelve months of setting aside a little extra, and once done, the exact pay date stops mattering.

                ## Milestones
                1. A target written: one month of budgeted spending held ahead.
                2. A fixed amount set aside towards next month on every payday.
                3. Half a month ahead reached.
                4. A full budget month funded from income received the month before.

                ## Notes
                Clear expensive debt and hold a basic emergency buffer first. This step suits a budget that already works month to month.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A whole budget month is funded entirely from income received in the previous month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate one month of total budgeted spending"
                - "Create a next-month category to hold money ahead"
                - "Assign a fixed amount to next month on each payday"
                - "Fund the next budget month only from that category once it is full"
            - name: Pruning an overgrown category list
              description: |-
                ## Purpose
                Category lists tend to grow: a line for a one-off party, a split for two kinds of coffee, a goal finished a year ago. Past about 40 lines, the payday session slows and small categories hold scraps nobody watches. A prune merges, archives and renames until the list is short enough to read at a glance.

                ## Milestones
                1. Every category with no spending in six months listed.
                2. Overlapping categories merged with their balances moved.
                3. Finished goals archived.
                4. The list back under 35 active categories.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The category list is under 35 active lines, with dormant and finished categories archived and their balances moved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List categories with no spending in six months"
                - "Merge overlapping categories and move their balances"
                - "Archive goals that are finished"
                - "Rename any category whose purpose is unclear"
            - name: Restarting an abandoned budget from a clean slate
              description: |-
                ## Purpose
                Budgets get abandoned: a hard month, a holiday, a new baby, and suddenly three months of transactions are unentered. Catching up line by line is usually the wrong move. A fresh start, with today's balances, current categories and the rest of this month assigned, gets you running again in an evening.

                ## Milestones
                1. The old budget archived rather than deleted.
                2. Today's balances entered for every on-budget account.
                3. Current money assigned to categories for the rest of this month.
                4. The payday and weekly check-in routines back in the calendar.

                ## Notes
                Abandonment is normal. Note what made you stop and change that, rather than relying on more willpower.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fresh budget with today's balances and the current month fully assigned is in use, with routines back in the calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Archive the old budget file or start a fresh budget"
                - "Enter today's balance for each on-budget account"
                - "Assign current money to categories for the rest of the month"
                - "Write one sentence on why the last budget stopped"
            - name: Goal categories with targets inside the budget
              description: |-
                ## Purpose
                Goals compete with every other category, so they need amounts and dates like any bill. Giving each goal a category, a target and a monthly amount worked back from the date makes progress visible in the same place you budget groceries. It also makes trade-offs explicit when one goal must slow to fund another.

                ## Milestones
                1. Up to five goals listed with target amounts and dates.
                2. A monthly contribution calculated for each.
                3. Each goal funded as a category on every payday.
                4. Progress reviewed and amounts adjusted each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each active goal has a category with a target, date and monthly amount, funded on every payday for a full quarter."
                cadence: rolling
              tasks:
                - "List up to five goals with a target amount and date"
                - "Work out the monthly amount each goal needs"
                - "Create a goal category for each with its target set"
                - "Compare goal progress with the target dates @recurring(quarterly)"
            - name: Lean-month budget agreed in advance
              description: |-
                ## Purpose
                Income can drop with little notice: reduced hours, statutory sick pay, a late invoice. Agreeing now which categories shrink or pause, and by how much, means a lean month is a switch you flip rather than a crisis you negotiate. The lean version keeps tier one intact and pares everything else to an agreed floor.

                ## Milestones
                1. A lean version of the budget with every category at its minimum.
                2. The lean total compared with the lowest likely monthly income.
                3. A trigger agreed for switching to the lean version.
                4. Written steps for switching back once income recovers.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A lean version of the budget, totalled against the lowest likely income, is saved with a written switch-on trigger."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the budget and cut each category to its minimum"
                - "Compare the lean total with your lowest likely monthly income"
                - "Agree what event switches the household to the lean budget"
                - "Write the steps for returning to the normal budget"
            - name: Stopping the same category overspending every month
              description: |-
                ## Purpose
                If one category runs over three months running, the problem is the number or the setup, not willpower. Usually the amount is unrealistic, the category holds two different kinds of spending, or a regular cost is hiding in it. A short investigation fixes the cause instead of covering the gap yet again.

                ## Milestones
                1. The repeat overspend category and its three-month record identified.
                2. Its transactions sorted to find what is driving the gap.
                3. One fix chosen: a higher amount, a split category or a behaviour change.
                4. The category within budget for two months after the fix.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A repeat overspend category has a recorded cause and fix, and stays within its amount for two months afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the category that ran over most often in three months"
                - "Sort its transactions by payee to find the driver"
                - "Choose one fix and record why"
                - "Track the category closely for the next two months"
            - name: First full month on a zero-based budget
              description: |-
                ## Purpose
                The first complete month is a test run, and it rarely goes to plan. Treating it as an event with a start date, a mid-point review and a debrief means the lessons go into month two instead of becoming a reason to quit. Most budgets settle by month three.

                ## Milestones
                1. A start date chosen to line up with the next payday.
                2. A mid-month review completed around day 15.
                3. A debrief written: what worked, what overspent, what was missed.
                4. Month two's budget adjusted using the debrief.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written debrief of the first full budget month exists, and month two's amounts reflect it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set the start date to the next payday"
                - "Put a mid-month review in the calendar for day 15"
                - "Write a one-page debrief on the last day of the month"
                - "Change month two's amounts using the debrief"
            - name: Three-month budget streak review
              description: |-
                ## Purpose
                Three complete months is the point where a zero-based budget becomes a habit or quietly fades. A deliberate review at that mark, looking at accuracy, time spent and how the household feels about it, decides what to keep, simplify or drop. Marking the streak matters too.

                ## Milestones
                1. Three months of planned versus actual totals side by side.
                2. Time spent on budgeting each month estimated.
                3. Each adult asked what helps and what grates.
                4. Two changes agreed for the next quarter and a small, budgeted celebration held.
              priority: low
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A review after three budget months records accuracy, time spent, each adult's view and two agreed changes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put three months of planned and actual totals side by side"
                - "Estimate the time spent on the budget each month"
                - "Ask each adult what helps and what annoys them"
                - "Plan a small, budgeted celebration for the streak"
            - name: Pay rise assignment before lifestyle creep
              description: |-
                ## Purpose
                Pay rises disappear into everyday spending within weeks unless the extra money gets a job before the first bigger payslip lands. Deciding in advance how the extra net pay splits between goals, under-funded categories and lifestyle means you enjoy some of it and keep most of it. Work from the new net figure, not the headline percentage.

                ## Milestones
                1. The new net monthly pay confirmed from the first higher payslip.
                2. The increase in net pay calculated.
                3. A split decided between goals, under-funded categories and lifestyle.
                4. The split built into the next payday session.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The net increase from a pay rise is split across named categories before the second higher payslip arrives."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Calculate the change in net pay from the new payslip"
                - "Decide what share goes to goals, gaps and lifestyle"
                - "Raise the amounts in the chosen categories"
                - "Check after three months that the split held"
            - name: Moving home month budget
              description: |-
                ## Purpose
                House moves can double up costs in a single month: overlapping rent, a deposit, a removal van, takeaways while the kitchen is in boxes. A one-off moving budget, built eight weeks ahead, separates those costs from normal categories so the regular budget survives the move intact.

                ## Milestones
                1. Every moving cost listed with an estimate.
                2. Overlapping housing costs and deposits dated.
                3. A moving category funded over the weeks before the move.
                4. Normal categories restored to their usual amounts the month after.

                ## Notes
                Check whether a deposit is due back from the old home, and plan for it arriving weeks late.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A moving category covered every listed move cost, and normal categories were back to usual the month after."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every moving cost with an estimate"
                - "Mark the dates of overlapping rent or mortgage payments"
                - "Fund a moving category over the weeks before the move"
                - "Compare actual moving costs with the estimate afterwards"
            - name: Job change pay gap month
              description: |-
                ## Purpose
                Changing jobs often leaves a gap: the last pay from the old employer arrives early or short, and the first from the new one can be weeks away or paid in arrears. A budget for the gap month, built from exact dates, stops a good career move from tipping the household into its overdraft.

                ## Milestones
                1. The final payslip date and amount from the old job confirmed.
                2. The first pay date and likely amount from the new job confirmed with payroll.
                3. A gap-month budget using only money that will actually arrive.
                4. Any shortfall covered by a named source agreed in advance.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A gap-month budget built from confirmed pay dates shows every essential covered before the new job's first pay."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the final pay date and amount with the old employer"
                - "Ask the new payroll team when the first pay lands"
                - "Build a gap-month budget from money that will actually arrive"
                - "Name the source that will cover any shortfall"
            - name: Couple's monthly budget meeting
              description: |-
                ## Purpose
                Couples who budget together do better with a short, regular meeting than with money talk squeezed in after an argument. A 30-minute monthly sit-down with a fixed agenda (last month's results, next month's events, goals and one thing that went well) keeps both people involved. Holding it at a relaxed time, not late on payday evening, helps.

                ## Milestones
                1. A monthly slot agreed that suits both people.
                2. A five-item agenda written down.
                3. Three meetings held on schedule with notes.
                4. Decisions from each meeting reflected in the next budget.

                ## Notes
                Keep it short and end on something positive. Deeper disagreements about how money is shared deserve their own conversation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly meetings have been held with a written agenda and notes, and their decisions appear in the budget."
                cadence: rolling
              tasks:
                - "Agree a monthly meeting time that suits you both"
                - "Write a five-item agenda"
                - "Hold the budget meeting and note decisions @recurring(monthly:9)"
                - "Check that last meeting's decisions made it into the budget"
            - name: Zero-based budget on weekly or fortnightly pay
              description: |-
                ## Purpose
                Weekly and fortnightly pay do not line up with monthly bills, and twice a year a fortnightly worker gets a third pay in one month. Budgeting each pay as it lands, funding bills due before the next pay first, keeps the zero-based rule working. Planning the extra-pay months in advance turns them into a genuine bonus.

                ## Milestones
                1. Each bill mapped to the pay that will cover it.
                2. A per-pay funding order written down.
                3. This year's months with an extra pay marked.
                4. A plan for each extra pay written before it arrives.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every pay is assigned on the day it lands for two months, and this year's extra-pay months have written plans."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Map each bill to the pay that covers it"
                - "Write the order for funding categories each pay"
                - "Assign each weekly pay on the day it lands @recurring(weekly:fri)"
                - "Mark this year's months with an extra pay and plan them"
            - name: Budgeting a pension income in retirement
              description: |-
                ## Purpose
                Retirement often means several income streams, a state pension, a workplace pension and drawdown or annuity payments, arriving on different days and sometimes taxed oddly in the first months. A zero-based budget built around those dates, with annual costs and tax corrections planned, keeps a fixed income stretching. It also makes it easier for someone else to help if needed.

                ## Milestones
                1. Every pension and income stream listed with amount, date and tax deducted.
                2. Categories reworked for retirement: less commuting, more heating, health and travel.
                3. Each payment assigned the day it arrives.
                4. Any emergency tax or tax code correction tracked until settled.

                ## Notes
                Decisions about how much to draw from pension savings belong with a regulated adviser or free government pension guidance. The budget plans what you have already decided to take.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "All retirement income streams are listed with dates, and three months of payments were assigned on arrival."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List each pension with its amount, payment date and tax deducted"
                - "Rework categories for retirement costs such as heating and health"
                - "Check each pension payment has arrived and assign it @recurring(monthly:2)"
                - "Track any tax correction until the code is settled"
            - name: Family budget with children's cost lines
              description: |-
                ## Purpose
                Children bring costs that are easy to underestimate because they arrive in bursts: school trips, club fees, shoes every few months, birthday parties most weekends in spring. Giving children's costs their own group, with monthly lines for the predictable bursts, stops them raiding groceries and lets both parents see the true cost.

                ## Milestones
                1. A children's group created with lines for school, clubs, clothes and parties.
                2. A year of children's costs estimated from statements and school letters.
                3. Monthly amounts set for each line.
                4. Each school term's letters checked for new costs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A children's cost group with at least four funded lines exists, based on a year of estimated costs."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Create a children's group with school, clubs, clothes and parties lines"
                - "Estimate a year of each from statements and school letters"
                - "Set the monthly amount for each children's line"
                - "Check school letters for new costs at the start of each term @recurring(quarterly)"
            - name: Base-pay budgeting with overtime or commission
              description: |-
                ## Purpose
                When part of pay is overtime, shift allowances or commission, budgeting the whole of a good month sets up the next lean one to fail. The zero-based fix is to build the monthly budget on base pay only and assign variable extras when they actually land, by a rule written in advance.

                ## Milestones
                1. Base pay separated from variable pay on the last six payslips.
                2. The monthly budget rebuilt on base pay alone.
                3. A written order for assigning variable pay, such as tax check, goals, then fun.
                4. Three months of variable pay assigned under the rule.

                ## Notes
                Check whether variable pay pushes you into a higher tax band or affects any benefits before treating it all as spendable.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The budget is funded from base pay alone, and three months of variable pay were assigned under a written rule."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Separate base pay from variable pay on six payslips"
                - "Rebuild the budget using base pay only"
                - "Write the order for assigning any variable pay"
                - "Assign each variable payment within two days of it landing"
            - name: Teenager's first zero-based budget
              description: |-
                ## Purpose
                Teenagers with an allowance, a part-time job or a phone bill to cover are ready to learn the method on a small scale. Helping them set up five to eight categories, assign money the day it arrives and review monthly teaches the habit while the stakes are low. Let them make small mistakes while the amounts are small.

                ## Milestones
                1. Their income listed: allowance, wages and gifts.
                2. Five to eight categories chosen by them, including saving.
                3. A simple tool set up, such as a banking app with pots or a one-page sheet.
                4. Three monthly reviews held together, with them leading the last one.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A teenager has run three months of their own zero-based budget and led the third monthly review."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your teenager to list all the money they receive"
                - "Help them choose five to eight categories"
                - "Set up a teen account with pots or a one-page sheet"
                - "Review the teen budget together @recurring(monthly:12)"
            - name: Annual zero-up review of every category
              description: |-
                ## Purpose
                True zero-based budgeting, as organisations use it, asks every line to justify itself from nothing rather than from last year's figure. Once a year, starting each category at zero and asking whether it should exist and what it really needs catches costs that have rolled forward out of habit. Pick a quiet month for it.

                ## Milestones
                1. Every category reset to zero in a copy of the budget.
                2. Each one rebuilt with a written reason and amount.
                3. At least three categories cut, merged or reduced.
                4. The rebuilt budget adopted from the next budget month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A rebuilt budget with a written reason for every category is in use, with at least three lines cut, merged or reduced."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Copy the budget and set every category to zero"
                - "Write a reason and amount for each category you rebuild"
                - "Cut, merge or reduce at least three categories"
                - "Hold the zero-up review in the same quiet month @recurring(yearly)"
            - name: Personal inflation rate from budget data
              description: |-
                ## Purpose
                National inflation figures describe an average household, not yours. A year or more of categorised budget data lets you calculate how much your own costs rose, category by category, which is the number that matters when setting next year's amounts or judging whether a pay rise kept up.

                ## Milestones
                1. Twelve months of spending by category compared with the previous twelve.
                2. Changes from higher prices separated from changes in how much you bought, where possible.
                3. A personal inflation figure calculated and recorded.
                4. Next year's category amounts adjusted using it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A personal inflation figure for the year is recorded beside the national figure, with next year's amounts adjusted."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Export two years of spending by category"
                - "Compare each category with the year before"
                - "Calculate the overall change as a single percentage"
                - "Record your figure beside the national rate @recurring(yearly)"
            - name: Budget scenario model for a major cost change
              description: |-
                ## Purpose
                Before a rent rise, a new car payment, a drop to part-time work or a second child, the useful question is what the budget looks like afterwards. A scenario copy of the budget, with the change applied and the zero balance restored, shows which categories would have to give and by how much, so the decision is made with numbers.

                ## Milestones
                1. The change and its monthly cost or income impact written down.
                2. A scenario copy of the budget with the change applied.
                3. Categories adjusted until the scenario reaches zero.
                4. A decision recorded on whether the change is affordable as planned.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scenario budget with the change applied and balanced to zero is saved, with the resulting decision recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the change and its monthly impact"
                - "Copy the budget into a scenario version"
                - "Ask the agent to suggest category cuts that would balance the scenario"
                - "Record whether the change is affordable as planned"
            - name: Automated assignment rules in your budget tool
              description: |-
                ## Purpose
                Once amounts are stable, much of the payday session repeats the same moves. Most budgeting apps and spreadsheets can store targets, auto-assign templates or payee rules that categorise regular transactions, cutting the session to a few minutes. Automating only the stable parts keeps your attention on the lines that change.

                ## Milestones
                1. Categories with the same amount for three months identified.
                2. Targets or an assignment template set for those categories.
                3. Payee rules created for the ten most frequent payees.
                4. The payday session time measured before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Stable categories assign automatically and payee rules cover the ten most frequent payees, with session time measured."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List categories that held the same amount for three months"
                - "Set targets or an assignment template for those categories"
                - "Create payee rules for the ten most frequent payees"
                - "Time the next payday session against the last one"
            - name: Budget handover pack for a partner or helper
              description: |-
                ## Purpose
                If the person who runs the budget is ill, away or no longer able to manage, someone else has to pick it up quickly. A short handover pack, covering where the budget lives, the payday routine, the category rules and which bills must never be missed, lets a partner, adult child or attorney keep things running. It matters most for older couples where one person has always handled money.

                ## Milestones
                1. A one-page guide to where the budget lives and how to open it.
                2. The payday routine and category rules written in plain steps.
                3. Bills that must never be missed listed with their dates.
                4. The pack walked through with the person who would take over, and stored safely.

                ## Notes
                Never write passwords in the pack. Use a password manager's emergency access feature or a sealed record kept with your will.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A handover pack covering location, routine, rules and must-pay bills exists, and the named helper has walked through it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write where the budget lives and how to open it"
                - "Describe the payday routine in plain numbered steps"
                - "List the bills that must never be missed with their dates"
                - "Walk the named helper through the pack"
                - "Update the handover pack after budget changes @recurring(yearly)"
---

# Zero-Based Monthly Budget

This area is for anyone who wants every unit of take-home pay to have a job before the month starts, whether that is a single earner, a couple, a family or someone living on a pension. It begins with the foundations (a budget month, an honest income figure, a spending baseline, a category list and a first budget brought to zero), then the routines that keep it running, the skills that make it accurate, the improvements and decisions that make it fit, the events that test it, the situations that change it and finally the specialist work of an experienced budgeter.

What repeats is a payday assignment session, a weekly ten-minute check-in, a month-end close with a bank balance check and a variance review, a calendar scan to draft next month and a quarterly reset of category amounts, with a yearly zero-up review of every line. The Purchase decision, Monthly budget and bills, Operational checklist and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
