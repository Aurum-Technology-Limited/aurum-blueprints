---
id: wealth-investing.retirement-income-drawdown
name: Retirement Income Drawdown
description: "A drawdown plan you can live on for decades: every pot mapped, a tested starting withdrawal, a cash reserve, a tax-aware account order and yearly resets that carry income through market falls."
category: personal
version: 1.0.0
tags: [wealth-investing, retirement-income-drawdown, retiree, drawdown, withdrawal-strategy, sequence-risk, pension-income, tax]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - metrics-log
    - operational-checklist
    - meeting-notes
    - risk-register
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Retirement Income Drawdown
          description: "Planning sustainable withdrawals from pensions and investments in retirement, ordering accounts and managing sequence risk."
          projects:
            - name: Retirement income map of every pot and payment
              description: |-
                ## Purpose
                Before any withdrawal decision makes sense, you need one page showing every source of retirement money: workplace and personal pensions, defined benefit schemes, tax-free accounts, cash savings, the state pension and any part-time earnings. Listing each with its value, the earliest age it can be touched and how it is taxed on the way out is the starting point every later project in this area builds on.

                ## Milestones
                1. Every pension, investment account and savings account listed with provider, current value and reference number.
                2. The earliest access age and tax treatment of withdrawals noted for each source.
                3. Guaranteed income, such as the state pension and any defined benefit pension, listed with start date and yearly amount.
                4. The map saved where your partner or attorney could find it.

                ## Notes
                Include small and old pots. An account found later changes the withdrawal order, and it is easier to trace while you still have the paperwork.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page income map lists every retirement source with value, access age, tax treatment and start date, saved where a second person can find it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather the latest statement for every pension, investment and savings account"
                - "List each source with its value, access age and how withdrawals are taxed"
                - "Add the state pension forecast and any defined benefit income with start dates"
                - "Tell your partner or attorney where the income map is kept"
                - "Update the values and sources on the income map @recurring(yearly)"
            - name: Essential and discretionary retirement spending budget
              description: |-
                ## Purpose
                Withdrawals should be sized to what you actually spend, and retirement spending splits into two very different kinds: bills that must be paid whatever markets do, and travel, gifts and treats that can flex. Building a monthly budget with the two columns kept apart tells you how much income must be dependable and how much can safely vary from year to year.

                ## Milestones
                1. Twelve months of bank and card spending sorted into categories.
                2. Each category marked essential or discretionary.
                3. A monthly budget showing the essential total and the discretionary total separately.
                4. Irregular costs such as car replacement, roof repairs and dental work turned into a yearly allowance.

                ## Notes
                Start from the **Monthly budget and bills** template. Most people underestimate irregular costs; averaging the large one-off bills of the last three to five years gives a fairer yearly figure.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A retirement budget with essential and discretionary totals shown separately, built from twelve months of real spending, is saved and dated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the last twelve months of bank and card transactions"
                - "Sort the spending into categories and mark each essential or discretionary"
                - "List the large irregular costs of the past five years and average them per year"
                - "Write the essential and discretionary monthly totals at the top of the budget"
            - name: Guaranteed income floor against essential bills
              description: |-
                ## Purpose
                Comparing guaranteed income with essential spending shows the gap your investments must fill every year without fail. If the state pension and any defined benefit or annuity income already cover the essentials, drawdown only funds the extras and a bad market year is uncomfortable rather than dangerous; if not, the size of the gap shapes almost every other decision in this area.

                ## Milestones
                1. Guaranteed yearly income totalled, with the year each part starts.
                2. Essential yearly spending taken from your retirement budget.
                3. The yearly gap, or surplus, written down for each year until all guaranteed income has started.
                4. The gap discussed with your adviser or a pension guidance service before withdrawals are set.

                ## Notes
                Whether to buy more guaranteed income to close the gap is a separate decision about annuities. This project only measures the gap.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A year-by-year table of guaranteed income against essential spending, showing the gap drawdown must fill, has been reviewed with an adviser or guidance service."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Total the guaranteed income you will receive each year and when each part starts"
                - "Copy the essential yearly spending figure from your retirement budget"
                - "Build a year-by-year table showing the gap between the two"
                - "Book a session with an adviser or free pension guidance service to go through it"
            - name: Drawdown readiness check on your current pension providers
              description: |-
                ## Purpose
                Not every pension scheme lets you take flexible income: some older contracts offer only a lump sum or an annuity, and some charge extra for regular withdrawals. Checking what each provider actually offers, and at what cost, months before you need income avoids a rushed transfer or an expensive default option.

                ## Milestones
                1. Written confirmation of whether each pension offers flexible drawdown, lump sums only, or neither.
                2. Drawdown charges, minimum pot sizes and payment frequencies recorded for each provider.
                3. Any valuable guarantees or protected tax-free cash noted before anything is moved.
                4. A decision recorded to stay, or to move the pot to a provider that offers drawdown.

                ## Notes
                Ask specifically about guaranteed annuity rates and protected tax-free cash. Moving a pot can lose them, and they are often worth more than any saving on charges.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each pension has a written note of its drawdown options and charges, with a stay or move decision recorded against it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each pension provider in writing whether it offers flexible drawdown"
                - "Record drawdown charges, minimum pot sizes and payment options for each"
                - "Ask whether any pot has guaranteed annuity rates or protected tax-free cash"
                - "Record a stay or move decision for each pot with the reason"
            - name: Tax position for your first year of drawdown
              description: |-
                ## Purpose
                Pension withdrawals are usually taxed as income, so the first year of drawdown can land in a higher band than expected, especially if it overlaps with a final salary, a bonus or a lump sum. Mapping your bands and allowances against the planned income before the first payment lets you choose amounts that avoid tax you did not need to pay.

                ## Milestones
                1. Your personal allowance and tax band limits for the current year noted from the tax authority's published figures.
                2. All expected income for the year listed: salary, pensions, state pension, interest and dividends.
                3. The withdrawal that keeps you within your chosen band worked out.
                4. The figures checked with an adviser, accountant or the tax authority's guidance service.

                ## Notes
                Rules differ widely between countries. Use your own tax authority's figures, and treat this as preparation for a conversation rather than a conclusion.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A first-year tax sheet lists every expected income source against the year's bands and shows the planned withdrawal, checked by an adviser or accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up this year's personal allowance and tax bands on your tax authority's website"
                - "List every income you expect to receive this tax year"
                - "Work out how much you could withdraw before reaching the next band"
                - "Ask an adviser or accountant to check the figures before the first payment"
            - name: Tax-free lump sum, all at once or in stages
              description: |-
                ## Purpose
                In several countries part of a pension can be taken tax free, either as one lump sum or a slice at a time alongside taxable income. Taking it all at once suits a mortgage to clear or a large planned purchase, while phasing it can stretch tax-free income over many years, and the choice is usually hard to undo.

                ## Milestones
                1. The tax-free amount available from each pension confirmed with the provider.
                2. A list of what a lump sum would be used for, with amounts.
                3. Both options compared: one lump sum against tax-free slices spread over ten years or more.
                4. A decision recorded, with the reason, before any money is taken.

                ## Notes
                A lump sum sitting in a bank account loses value to inflation and may count against means-tested support. Give every part of it a job before taking it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on taking tax-free cash as one sum or in stages, with the uses and comparison it was based on, exists before the first withdrawal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each provider how much tax-free cash is available and in what forms"
                - "List what you would use a lump sum for and how much each item costs"
                - "Compare one lump sum with phased tax-free slices over ten years"
                - "Record the decision and the reason in your income map"
            - name: Starting withdrawal amount tested at three rates
              description: |-
                ## Purpose
                The first year's withdrawal sets the level everything else follows, and a rate that looks modest can still run a pot dry if markets fall early. Testing three starting amounts with a cashflow tool or your adviser, and seeing how long the pot lasts in poor, middling and strong markets, gives you a figure you chose deliberately rather than one inherited from a rule of thumb.

                ## Milestones
                1. Three candidate starting withdrawals chosen: a cautious, a middle and a generous figure.
                2. Each one modelled over thirty years in poor, average and strong market conditions.
                3. The age at which the pot would run out recorded for each case.
                4. A starting amount chosen and agreed with your adviser, with the reasoning written down.

                ## Notes
                Published safe withdrawal rates come from particular countries, periods and fee levels. Treat them as the opening of the conversation, not the answer.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A starting annual withdrawal has been chosen from three modelled options, with pot depletion ages recorded for each and the choice agreed with an adviser."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick three starting withdrawal amounts to test against your pot"
                - "Run each amount through a cashflow tool or ask your adviser to model it"
                - "Record the age the pot runs out in poor, average and strong markets"
                - "Agree the starting amount with your adviser and note why it was chosen"
            - name: Withdrawal order across pensions, tax-free accounts and savings
              description: |-
                ## Purpose
                Which account you draw from first changes how much tax you pay over the whole retirement and what is left for your heirs. Drawing taxable savings first, using pensions to fill the lower bands, or keeping tax-free accounts for later each suits different situations, and the right order depends on your bands, your age and your country's rules on pensions at death.

                ## Milestones
                1. Every account grouped as taxable, tax-deferred or tax-free.
                2. Two or three withdrawal orders written out year by year for the first ten years.
                3. Estimated lifetime tax and remaining balances compared for each order.
                4. An order chosen with your adviser and written into your plan.

                ## Notes
                The order is not fixed for life. Revisit it when the state pension starts, when tax rules change, or when one partner dies.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written withdrawal order for the first ten years, chosen from at least two modelled alternatives with an adviser, is recorded in your plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Group every account as taxable, tax-deferred or tax-free"
                - "Write out two alternative withdrawal orders for the first ten years"
                - "Ask the agent to draft a table comparing tax paid and remaining balances for each order"
                - "Review the comparison with your adviser and record the order chosen"
            - name: Cash reserve for one to three years of withdrawals
              description: |-
                ## Purpose
                Selling investments after a crash to pay the bills locks in losses that a recovery cannot undo. Holding one to three years of planned withdrawals in cash or near-cash, separate from the invested pot, lets you stop selling through a bad year and draw calmly while prices recover.

                ## Milestones
                1. The reserve size agreed, in years of the yearly gap your investments must fill.
                2. A home for the reserve chosen: an easy-access savings account, a money market fund or short fixed-term deposits.
                3. The reserve filled from the pot or from tax-free cash.
                4. The reserve's target and current level written into your income map.

                ## Notes
                A bigger reserve feels safer but holds back growth over a long retirement. One to three years is a common range; agree yours with your adviser.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cash reserve sized to an agreed number of years of withdrawals is funded and held apart from the invested pot, with its target recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide with your adviser how many years of withdrawals to hold in cash"
                - "Compare interest rates and access terms on three savings options"
                - "Move the agreed amount into the reserve"
                - "Write the reserve target and current balance into your income map"
            - name: One monthly retirement paycheque into one account
              description: |-
                ## Purpose
                Income arriving on different days from three pensions and two savings accounts makes it hard to see whether you are living within the plan. Setting every regular payment to land in one current account, a few days before the main bills go out, recreates the rhythm of a salary and makes overspending visible within a month.

                ## Milestones
                1. One current account chosen as the retirement income account.
                2. Every regular pension and withdrawal payment redirected to it.
                3. Payment dates lined up a few days before the main direct debits.
                4. Three months of income arriving on time without manual transfers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All regular retirement income has arrived in one current account on its planned dates for three consecutive months."
                cadence: rolling
              tasks:
                - "Choose the current account that will receive all retirement income"
                - "Ask each provider to pay into that account and confirm the payment date"
                - "Move direct debits so they leave a few days after income arrives"
                - "Check that every expected income payment arrived this month @recurring(monthly:3)"
            - name: Withdrawal log and running tax-year tally
              description: |-
                ## Purpose
                Providers report each withdrawal separately, so the total taxable income for the year is easy to lose track of until the tax bill arrives. A simple log of every withdrawal, the tax deducted and the running total against your band shows in seconds whether one more withdrawal this year would cost more tax than planned.

                ## Milestones
                1. A log with columns for date, source, gross amount, tax deducted and running total.
                2. Every withdrawal since the start of the tax year entered.
                3. Your band limit written at the top so the remaining headroom is always visible.
                4. The year-end total checked against each provider's annual tax statement.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A withdrawal log with a running tax-year total is complete for the current year and matches the providers' annual statements."
                cadence: rolling
              tasks:
                - "Create a withdrawal log from the metrics log template"
                - "Enter every withdrawal since the start of this tax year"
                - "Add this month's withdrawals and update the running total @recurring(monthly:12)"
                - "Compare the year-end total with each provider's annual tax statement"
            - name: Pension payslip and tax code check
              description: |-
                ## Purpose
                First payments are often taxed on an emergency basis, and a wrong tax code can run unnoticed for a whole year, overtaxing or undertaxing every payment. Glancing at each pension payslip and checking any new tax code notice against your expected income catches mistakes while they are small and easy to put right.

                ## Milestones
                1. The tax code each pension provider is using noted.
                2. Each code checked against the latest notice from the tax authority.
                3. Any wrong code reported to the tax authority and corrected.
                4. A note kept of every correction and the date it was resolved.

                ## Notes
                Where you have several pensions, the tax authority usually gives the personal allowance to one of them. Check it has gone to the right one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pension payment for twelve months has been checked against the current tax code, with any errors reported and their resolution recorded."
                cadence: rolling
              tasks:
                - "Find the tax code shown on your latest pension payslip"
                - "Compare the gross, tax and net figures on each pension payslip @recurring(monthly:22)"
                - "Check any new tax code notice against your expected income @recurring(yearly)"
                - "Report any wrong tax code to the tax authority and note the outcome"
            - name: Monthly spending check against the retirement budget
              description: |-
                ## Purpose
                Plans fail slowly: a modest overspend each month in the early years quietly raises the withdrawal the pot has to support. Comparing actual spending with the retirement budget once a month, and noting why any category ran over, shows whether the planned withdrawal is still the right one well before the annual reset.

                ## Milestones
                1. A monthly comparison of actual spending with budget, essential and discretionary shown separately.
                2. A one-line reason recorded for any category more than ten percent over budget.
                3. A running yearly total compared with the planned annual withdrawal.
                4. Persistent overruns carried into the annual withdrawal reset.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly spending comparisons are recorded, with reasons for overruns and the yearly total compared with the planned withdrawal."
                cadence: rolling
              tasks:
                - "Set up a monthly comparison sheet beside your retirement budget"
                - "Compare last month's spending with the budget and note any overruns @recurring(monthly:28)"
                - "Add the month's total to the running yearly figure"
                - "Flag any category that has overrun for three months running"
            - name: Quarterly drawdown health check
              description: |-
                ## Purpose
                Four short checks a year catch drift before it becomes a problem: the pot value against the plan, the withdrawal as a share of the pot, the cash reserve level and whether anything in your life has changed. Twenty minutes a quarter is enough, and it stops the annual reset from bringing surprises.

                ## Milestones
                1. A one-page check sheet with the four measures and the limits agreed in your plan.
                2. The pot value, withdrawal rate and reserve level recorded each quarter.
                3. Any measure outside its limit flagged for action.
                4. Four quarters completed and carried into the annual reset.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly check sheets are completed in a year, each recording pot value, withdrawal rate and reserve level against agreed limits."
                cadence: rolling
              tasks:
                - "Write the four measures and their agreed limits on one page"
                - "Record pot value, withdrawal rate and cash reserve level @recurring(quarterly)"
                - "Note any change in health, home or family that affects the plan"
                - "Flag any measure outside its limit for the adviser or the annual reset"
            - name: Cash reserve refill rules
              description: |-
                ## Purpose
                A cash reserve only protects you if you know when to refill it and when to leave it alone. Writing simple rules, such as refilling from investments only after a year in which the pot has grown, and drawing from cash alone after a fall, takes the judgement out of the moment when markets are frightening.

                ## Milestones
                1. Written rules for when to refill the reserve and when to draw from it alone.
                2. The trigger for each rule defined as a number, such as the pot's change over twelve months.
                3. The rules agreed with your adviser.
                4. The rules applied at each annual reset, with the action taken recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written refill rules with numeric triggers are agreed with an adviser and have been applied, with the action recorded, at the annual reset."
                cadence: rolling
              tasks:
                - "Write a rule for refilling the reserve after a year of growth"
                - "Write a rule for drawing only from cash after a fall"
                - "Agree both rules and their triggers with your adviser"
                - "Apply the refill rules and record what you did @recurring(yearly)"
            - name: Annual withdrawal reset
              description: |-
                ## Purpose
                Once a year the plan needs a fresh number: next year's income, adjusted for inflation, the pot's performance and any guardrail that has been crossed. Running the same checklist in the same month each year, ideally a month before the new tax year, turns a stressful decision into a routine one.

                ## Milestones
                1. An annual checklist covering inflation, pot value, guardrails, reserve level and actual spending.
                2. Next year's withdrawal calculated and written down with the reasoning.
                3. Regular payment instructions updated with each provider.
                4. The reset completed for at least two consecutive years.

                ## Notes
                Start from the **Operational checklist** template. Pick a fixed month for the reset and keep it, so each year compares like with like.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Next year's withdrawal is calculated from the annual checklist, recorded with reasons and set up with every provider before the new tax year."
                cadence: cyclic
              tasks:
                - "Build the annual reset checklist from the operational checklist template"
                - "Run the checklist and set next year's withdrawal amount @recurring(yearly)"
                - "Update the regular payment instructions with each provider"
                - "Write a short note explaining what changed and why"
            - name: Tax-year-end withdrawal planning
              description: |-
                ## Purpose
                The last few weeks of the tax year are the only chance to use that year's unused lower band. Checking your running tally before year end lets you decide whether to take a little extra taxable income at a low rate, move cash into a tax-free account if your country offers one, or hold back so next year starts cleanly.

                ## Milestones
                1. The running tax-year tally compared with your band limit six weeks before year end.
                2. The unused allowance or band headroom calculated.
                3. A decision recorded on whether to draw extra, and how much.
                4. Any extra withdrawal or account top-up completed before the deadline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated year-end decision on extra withdrawals, based on remaining band headroom, is recorded and carried out before the tax year closes."
                cadence: cyclic
              tasks:
                - "Check your withdrawal total against your band six weeks before year end @recurring(yearly)"
                - "Work out how much band headroom is left this year"
                - "Decide whether to take extra income at the lower rate"
                - "Ask the provider for any extra payment early enough to land before year end"
            - name: Compulsory minimum withdrawal calendar
              description: |-
                ## Purpose
                Some countries require a minimum withdrawal each year from certain retirement accounts once you reach a set age, for example required minimum distributions in the United States or minimum drawdown rates in Australia, with penalties for missing one. Knowing which accounts are affected, the age it starts and the calculation used keeps you clear of the penalty and lets the minimum count towards your planned income.

                ## Milestones
                1. Each account checked for a compulsory minimum withdrawal rule.
                2. The starting age and calculation method recorded for each affected account.
                3. This year's minimum worked out with the provider.
                4. The minimum taken before the deadline and counted in your withdrawal plan.

                ## Notes
                If your country has no such rule, archive this project. If you hold accounts in more than one country, check each one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each affected account's minimum withdrawal is calculated and taken before its annual deadline, with the amount recorded in the withdrawal log."
                cadence: cyclic
              tasks:
                - "Check whether any of your accounts carries a compulsory minimum withdrawal"
                - "Record the starting age and calculation method for each affected account"
                - "Confirm this year's minimum with the provider and take it before the deadline @recurring(yearly)"
                - "Count the minimum towards your planned annual income"
            - name: Annual drawdown review pack for your adviser
              description: |-
                ## Purpose
                Adviser reviews are often rushed because the client arrives without the figures. Preparing a short pack beforehand, with spending, withdrawals, the health check results and the questions you want answered, means the hour is spent on decisions about your income rather than on gathering numbers.

                ## Milestones
                1. A review pack with the year's withdrawals, spending, pot value and reserve level.
                2. Three to five questions written in advance.
                3. Notes of the meeting with every decision and who will act on it.
                4. Agreed actions completed within a month of the meeting.

                ## Notes
                Start from the **Meeting notes** template. If you do not use an adviser, hold the same review with your partner or a free pension guidance service.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A review pack is prepared before the annual adviser meeting, and meeting notes record each decision, with agreed actions completed within a month."
                cadence: cyclic
              tasks:
                - "Ask the agent to summarise the year's withdrawal log and health checks on one page"
                - "Write three to five questions you want answered"
                - "Book the annual drawdown review with your adviser @recurring(yearly)"
                - "Record decisions in meeting notes and finish the actions within a month"
            - name: Sequence of returns risk with a worked example
              description: |-
                ## Purpose
                Two retirees with the same average return over twenty years can end with very different pots if one meets the bad years first while withdrawing. Working through a simple example with your own numbers shows why the first five to ten years of drawdown matter most, and why the cash reserve and guardrails in this area exist.

                ## Milestones
                1. Sequence of returns risk explained in a sentence in your own words.
                2. A worked example built with your own pot and withdrawal, using the same returns in two different orders.
                3. The difference in remaining pot after twenty years recorded.
                4. The lesson linked to your reserve and guardrail decisions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example using your own pot shows the same returns in two orders, with the difference in remaining pot after twenty years written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a plain-language explanation of sequence of returns risk"
                - "Build a simple spreadsheet with your pot, withdrawal and twenty years of returns"
                - "Reverse the order of the returns and compare the results"
                - "Write one sentence on what the example means for your own plan"
            - name: How flexible drawdown and the tax-free portion work
              description: |-
                ## Purpose
                Drawdown rules vary by country and by scheme, and terms like crystallised funds, uncrystallised lump sums or taxable portion are easy to mix up. Understanding exactly how your own pension pays out, which part is tax free, which is taxed and what happens to the rest, prevents expensive mistakes on the first withdrawal.

                ## Milestones
                1. The main drawdown terms in your provider's literature explained in plain words.
                2. The difference between taking tax-free cash first and taking mixed withdrawals understood.
                3. A note of what happens to the invested remainder after each type of withdrawal.
                4. Remaining questions answered by the provider or a free pension guidance service.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language glossary of your provider's drawdown terms exists, with your open questions answered by the provider or a guidance service."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your provider's guide to taking income from your pension"
                - "Write a plain-language glossary of the terms it uses"
                - "Note how the tax-free and taxable parts are paid under each option"
                - "Book a free guidance session and take your list of questions"
            - name: Withdrawal strategy families compared
              description: |-
                ## Purpose
                There are a handful of well-known ways to set withdrawals: a fixed amount rising with inflation, a fixed percentage of the pot, guardrail rules that adjust within limits, and bucket approaches that split money by time horizon. Learning how each behaves in good and bad markets lets you choose one that matches how much your income can safely vary.

                ## Milestones
                1. Four withdrawal approaches summarised, each in a short paragraph.
                2. The trade-off of each noted: income stability against the risk of running out.
                3. Each approach checked against your essential spending gap.
                4. A preferred approach shortlisted for discussion with your adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written summaries of four withdrawal approaches, each checked against your essential spending gap, with one or two shortlisted for your adviser."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read a summary of the main withdrawal approaches from a reputable source"
                - "Write a short paragraph on how each behaves in a falling market"
                - "Check which approaches would still cover your essential spending gap"
                - "Shortlist one or two approaches to discuss with your adviser"
            - name: Reading your drawdown statement and charges
              description: |-
                ## Purpose
                Drawdown statements mix withdrawals, tax, fund charges, platform fees and investment growth, and the figure that matters, how much the pot changed after everything, is rarely shown clearly. Learning to read your own statement line by line means you can spot an unexpected charge or a payment that never went out.

                ## Milestones
                1. Every line on your latest statement labelled as withdrawal, tax, charge or growth.
                2. The total cost of the year in money terms worked out.
                3. The pot's change after withdrawals and charges calculated.
                4. Anything unexplained queried with the provider.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your latest drawdown statement is annotated line by line, with the year's total charges in money terms and every unexplained item queried."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download or print your latest drawdown statement"
                - "Label each line as withdrawal, tax, charge or growth"
                - "Add up the year's total charges in money terms"
                - "Ask the provider to explain any line you cannot account for"
            - name: Planning horizon based on longevity odds
              description: |-
                ## Purpose
                Average life expectancy is the age by which about half of people your age will have died, so planning to it means a one in two chance of outliving the money. Looking up the odds of reaching 90, 95 and 100 for someone of your age and sex, and choosing a planning age with that in mind, makes every withdrawal model more honest.

                ## Milestones
                1. Survival odds to 90, 95 and 100 looked up from a national statistics longevity tool.
                2. Family history and current health noted as reasons to adjust.
                3. A planning age chosen, for each partner if you are a couple.
                4. The planning age used in every withdrawal model from now on.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A planning age for each partner, based on published survival odds to 90, 95 and 100, is written into your plan and used in your withdrawal models."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Use a national statistics life expectancy tool for your age and sex"
                - "Note the chance of reaching 90, 95 and 100"
                - "Write down family history and health factors that may shift the odds"
                - "Choose a planning age and update your withdrawal models to use it"
            - name: Contribution limits triggered by drawing pension income
              description: |-
                ## Purpose
                In some countries, taking flexible taxable income from a pension sharply reduces how much you can pay into pensions afterwards with tax relief, the money purchase annual allowance in the UK being one example. Knowing which withdrawals trigger the limit matters if you are still working part time or planned further contributions, because the trigger cannot be reversed.

                ## Milestones
                1. Your country's rule on contributions after drawing pension income looked up.
                2. Which types of withdrawal trigger it, and which do not, written down.
                3. Any planned contributions from earnings or an employer checked against the reduced limit.
                4. The trigger date recorded and every pension provider told within the required time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records whether a reduced contribution limit applies, which withdrawals trigger it and the trigger date, with every provider informed where required."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up whether drawing pension income limits later contributions in your country"
                - "List which withdrawal types trigger the limit and which do not"
                - "Check any planned contributions against the reduced limit"
                - "Tell each pension provider the trigger date if a limit now applies"
            - name: Spotting pension scams aimed at retirees
              description: |-
                ## Purpose
                People with a pension pot they can access are the main target for investment scams, cold calls offering free pension reviews and overseas schemes promising unusual returns. Learning the common warning signs and setting a household rule for unsolicited offers protects a lifetime of savings from a single persuasive phone call.

                ## Milestones
                1. The warning signs listed by your financial regulator read and summarised.
                2. A household rule written: no decisions on unsolicited calls, emails or visits.
                3. The regulator's register checked before dealing with any firm.
                4. The rule shared with your partner and anyone who helps with your money.

                ## Notes
                If you think a scammer has approached you, report it to your financial regulator or fraud reporting service, even if you lost nothing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written household rule for unsolicited investment offers is shared with everyone who helps with your money, and you can check a firm on the regulator's register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your financial regulator's guide to pension scams"
                - "Write a one-line household rule for unsolicited investment offers"
                - "Learn how to check a firm on the regulator's public register"
                - "Share the rule with your partner and anyone who helps you with money"
            - name: Guardrails for cutting and raising withdrawals
              description: |-
                ## Purpose
                Guardrail rules decide in advance how income changes when the pot moves a long way: if the withdrawal rises above an upper limit as a share of the pot, income is trimmed, and if it falls below a lower limit, income can rise. Agreeing the limits and the size of each adjustment now means a bad year brings a small, planned cut rather than panic.

                ## Milestones
                1. Upper and lower guardrails written as a withdrawal rate range.
                2. The size of each cut or rise agreed, for example a tenth of discretionary income.
                3. Essential spending protected from any cut.
                4. The rules tested against a past market fall and written into your plan.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Upper and lower guardrails with agreed adjustment sizes are written into your plan and have been tested against at least one past market fall."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write your current withdrawal as a share of the pot"
                - "Set an upper and lower guardrail around it with your adviser"
                - "Decide how much income changes when each guardrail is crossed"
                - "Test the rules against a past market fall and note the result"
            - name: Bucket or total-return drawdown approach
              description: |-
                ## Purpose
                Bucket approaches split the pot into cash for the next few years, bonds for the middle years and shares for the long term, while a total-return approach keeps one mix and sells across it each year. Both can work: the bucket version is easier to live with emotionally and total return is simpler to run, so choosing one deliberately prevents a muddle of both.

                ## Milestones
                1. Both approaches described in a paragraph using your own figures.
                2. The yearly admin each one needs listed.
                3. How each would have handled a recent market fall compared.
                4. One approach chosen and written into your plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One drawdown approach, bucket or total return, is chosen after comparing both with your own figures, and the choice is recorded in your plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch how your pot would look split into three buckets"
                - "Sketch the same pot run as a single total-return mix"
                - "List the yearly admin each approach would need"
                - "Choose one approach with your adviser and record why"
            - name: Natural income or selling units for income
              description: |-
                ## Purpose
                Living only off dividends and interest feels safe because nothing is sold, but it can push a portfolio towards a narrow set of high-yield holdings and leaves income exposed to dividend cuts. Comparing natural income with a plan that sells units as needed shows which suits your pot, and stops the hunt for yield from deciding what you own.

                ## Milestones
                1. The current natural yield of your pot calculated.
                2. The yearly shortfall between natural income and your planned withdrawal worked out.
                3. Concentration in high-yield holdings checked.
                4. A method chosen: natural income, unit sales, or a set mix of both.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The pot's natural yield and shortfall are calculated, and a recorded decision names natural income, unit sales or a set mix as the income method."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add up the dividends and interest your pot paid last year"
                - "Compare that figure with your planned yearly withdrawal"
                - "Check how much of the pot sits in high-yield holdings"
                - "Choose an income method with your adviser and note it in your plan"
            - name: Front-loading spending for the active early years
              description: |-
                ## Purpose
                Many retirees spend most in their first ten years on travel and projects, less in their seventies and eighties, and sometimes more again later on care. Planning a higher withdrawal for the active years and a lower one afterwards can be sensible, provided the later years and the care reserve are still covered.

                ## Milestones
                1. A list of the travel and projects you want to do while fit, with rough costs.
                2. A spending profile drawn for three phases of retirement.
                3. The front-loaded profile modelled to your planning age.
                4. A decision on whether, and by how much, to front-load.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-phase spending profile has been modelled to your planning age, and the amount of any early extra withdrawal is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the trips and projects you want to do in the next ten years with costs"
                - "Sketch your likely spending for your sixties, seventies and eighties"
                - "Ask your adviser to model the front-loaded profile to your planning age"
                - "Record how much extra you will draw in the early years, if any"
            - name: Bridging income until the state pension starts
              description: |-
                ## Purpose
                Retiring before state pension age leaves a run of years with no guaranteed income, which drawdown has to fill on its own. Planning a higher bridging withdrawal for those years, then a planned drop when the state pension begins, avoids either drawing a high rate for life or squeezing the early years for no reason.

                ## Milestones
                1. The state pension start date and amount confirmed from your official forecast.
                2. The bridging years and the yearly gap calculated.
                3. The source of the bridge chosen: cash reserve, a specific pot or tax-free cash.
                4. A bridging withdrawal set, along with the lower withdrawal that follows it.

                ## Notes
                When to claim the state pension is its own decision. This project plans income around whichever date you choose.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A bridging withdrawal, its funding source and the lower withdrawal that follows the state pension start date are written into your plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Get your official state pension forecast and start date"
                - "Work out the yearly income gap for each bridging year"
                - "Decide which pot or reserve will fund the bridge"
                - "Write the bridging withdrawal and the lower one that follows into your plan"
            - name: Smoothing taxable withdrawals across tax years
              description: |-
                ## Purpose
                Taking a large taxable sum in one year can push income into a higher band, reduce means-tested benefits or trigger extra charges, when the same amount spread over three years would be taxed at a lower rate. Planning big withdrawals across tax-year boundaries, sometimes splitting one purchase across the end of one year and the start of the next, can save a noticeable sum for no extra risk.

                ## Milestones
                1. Any planned large withdrawals in the next five years listed with amounts.
                2. The tax on each taken in one year compared with the tax when spread.
                3. A spread schedule agreed for each, using tax-year boundaries where it helps.
                4. The schedule entered in your withdrawal plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each large withdrawal planned for the next five years has a spread schedule, chosen by comparing the tax in one year with the tax over several."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List any large withdrawals you expect in the next five years"
                - "Estimate the tax if each is taken in a single year"
                - "Estimate the tax if each is spread over two or three years"
                - "Enter the cheaper schedule in your withdrawal plan"
            - name: Withdrawal plan for a large market fall
              description: |-
                ## Purpose
                When a 30 percent fall arrives, the instinct is either to sell everything or to keep withdrawing as if nothing happened. Writing down beforehand exactly what you will do, which income to pause, which reserve to use and whom you will call, turns a frightening month into a plan you are simply following.

                ## Milestones
                1. Actions written for falls of 15, 25 and 40 percent.
                2. Discretionary items to pause listed in order.
                3. The reserve and guardrail rules referenced in each action.
                4. The plan agreed with your partner and adviser and kept where you will see it.

                ## Notes
                Start from the **Risk register** template. Add an entry for each size of fall, with its trigger and response.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written market-fall plan with actions for three sizes of fall is agreed with your partner and adviser and stored with your income map."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write what you will do after falls of 15, 25 and 40 percent"
                - "List discretionary spending to pause in the order you would pause it"
                - "Agree the market-fall plan with your partner and adviser"
                - "Reread the market-fall plan while markets are calm @recurring(yearly)"
            - name: Housing wealth as a late-retirement reserve
              description: |-
                ## Purpose
                For many retirees the home is the largest asset, and it can act as a last line of defence through downsizing, letting a room or, with independent advice, an equity release product. Deciding now what role, if any, the home plays in your income plan tells you how much weight the invested pot has to carry on its own.

                ## Milestones
                1. Your home's approximate value and any remaining mortgage recorded.
                2. Three options noted with rough figures: staying, downsizing and releasing equity.
                3. The role of the home written as a sentence: reserve, part of income, or left to heirs.
                4. Any equity release option discussed only with an independent adviser.

                ## Notes
                Equity release products are complex and hard to reverse. Treat them as a last resort to explore with independent advice and with your family aware.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written sentence records the home's role in your income plan, based on rough figures for staying, downsizing and releasing equity."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get an estimate of your home's current value"
                - "Note what downsizing would release after moving costs"
                - "Decide whether the home is a reserve, an income source or for your heirs"
                - "Tell your family and adviser what you decided about the home"
            - name: First drawdown payment set-up
              description: |-
                ## Purpose
                Your first payment is where most practical problems appear: forms, identity checks, a wait of several weeks, and often emergency tax on the first sum. Starting the paperwork two months before you need the money, and keeping the cash reserve ready to cover any delay, means the first month of retirement is paid on time.

                ## Milestones
                1. The provider's drawdown application completed and identity checks passed.
                2. The tax-free cash choice and first income amount confirmed in writing.
                3. The first payment received, with any emergency tax noted for reclaim.
                4. The regular payment date set for every month that follows.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first drawdown payment has arrived in your income account on the planned date, with the tax deducted checked and any reclaim started."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request the drawdown application pack from your provider"
                - "Complete the forms and send the identity documents requested"
                - "Confirm the tax-free cash and first income amount in writing"
                - "Check the first payment and start a reclaim if emergency tax was taken"
            - name: First ninety days from salary to pension income
              description: |-
                ## Purpose
                Your last salary, a final bonus, holiday pay and the first pension payments can overlap in awkward ways, and the first three months of retirement are when the budget meets reality. Planning the switch month by month, with the cash reserve as a cushion, keeps bills paid and shows early whether the budget was realistic.

                ## Milestones
                1. A month-by-month cashflow for the last two months of work and the first three of retirement.
                2. Final salary, bonus and holiday pay dates confirmed with your employer.
                3. Direct debits checked against the new income dates.
                4. Actual spending in the first ninety days compared with the retirement budget.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A five-month transition cashflow is written, and the first ninety days of actual spending have been compared with the retirement budget."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your employer for the dates of final salary, bonus and holiday pay"
                - "Draw up a month-by-month cashflow across the switch to pension income"
                - "Move any direct debit that would land before income arrives"
                - "Compare the first ninety days of spending with your retirement budget"
            - name: Resetting withdrawals when the state pension starts
              description: |-
                ## Purpose
                Once the state pension begins, your drawdown can usually fall by a similar amount, yet many people keep drawing at the bridging rate out of habit. Treating the start date as a planned event, with the new withdrawal and tax codes ready, stops the pot being drained faster than it needs to be.

                ## Milestones
                1. The first state pension payment date and amount confirmed.
                2. The new, lower drawdown amount calculated and agreed.
                3. Payment instructions changed with the drawdown provider.
                4. Tax codes on each pension checked after the change.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The drawdown payment has been reduced to the agreed lower amount within two months of the first state pension payment, with tax codes checked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the date and amount of your first state pension payment"
                - "Calculate the lower drawdown amount needed once it arrives"
                - "Change the regular payment with your drawdown provider"
                - "Check the tax codes on every pension two months after the change"
            - name: Funding a large planned expense from the pot
              description: |-
                ## Purpose
                A replacement car, a new roof or a gift towards a grandchild's first home can mean withdrawing several years' worth of extras in one go. Planning which account it comes from, when to sell, and how the tax falls protects both the expense and the long-term plan.

                ## Milestones
                1. The expense, its amount and the date it is needed written down.
                2. The source chosen: reserve, tax-free account, pension or a mix.
                3. The tax and the effect on future yearly income estimated.
                4. Money in place before the date, with the reserve topped back up afterwards if it was used.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The planned expense is paid from a chosen source on time, with its tax and effect on future yearly income recorded in your plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the expense, how much it costs and when it is needed"
                - "Choose which account or reserve will pay for it"
                - "Estimate the tax and the reduction in future yearly income"
                - "Arrange the withdrawal so the money arrives a week before it is needed"
            - name: Simplifying the drawdown plan around age eighty
              description: |-
                ## Purpose
                Managing several pots, a cash reserve and yearly guardrail calculations becomes harder in your eighties, and a plan that only you understand is fragile. Simplifying at a planned point, with fewer accounts, one income date, standing instructions and perhaps more guaranteed income, keeps the plan working if your energy or memory changes.

                ## Milestones
                1. Every account and moving part of the plan listed.
                2. Accounts that could be closed or merged identified with your adviser.
                3. Standing payment instructions in place that need no yearly action.
                4. A one-page summary written that a family member could follow.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The plan runs on standing instructions from fewer accounts, and a one-page summary a family member could follow is written and stored."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every account and yearly task your plan currently needs"
                - "Mark which accounts could be merged or closed"
                - "Set up standing payment instructions that run without yearly changes"
                - "Write a one-page summary of the plan a family member could follow"
            - name: Survivor income test for a couple in drawdown
              description: |-
                ## Purpose
                When one partner dies, household income often falls by more than spending does: a state pension stops, a defined benefit pension may halve, and the survivor may pay more tax as a single person. Testing the plan for the death of each partner shows whether the survivor could carry on in the same home on the income left.

                ## Milestones
                1. Income lost on the death of each partner listed, source by source.
                2. The survivor's spending estimated, usually lower but rarely halved.
                3. The survivor's tax position as a single person estimated.
                4. Any shortfall noted with options to close it, discussed with your adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A survivor income test for each partner shows income, spending and tax after a death, with any shortfall and options to close it recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List which incomes stop or reduce if each partner dies"
                - "Estimate the survivor's monthly spending in the same home"
                - "Work out the survivor's income and tax as a single person"
                - "Rerun the survivor test after any change in pensions or health @recurring(yearly)"
            - name: Taking over the drawdown plan after bereavement
              description: |-
                ## Purpose
                Bereavement often leaves the surviving partner in charge of accounts and decisions the other person always handled. Working through the plan in stages, first the bills and income that must continue, then the pensions and death benefits, and only later the long-term choices, avoids rushed decisions at the worst possible time.

                ## Milestones
                1. Income that must continue confirmed and redirected where needed.
                2. Each pension and investment provider told, with death benefit claims started.
                3. The survivor's withdrawals reset for one-person spending.
                4. No irreversible investment decision made for at least six months unless advised.

                ## Notes
                Ask a trusted friend or family member to sit in on calls. Providers will usually accept a nominated helper on the line.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Continuing income is secured, every provider has been notified with death benefit claims started, and withdrawals are reset to one-person spending."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the payments that must continue this month"
                - "Notify each pension and investment provider and ask about death benefits"
                - "Reset your withdrawal to match your own spending"
                - "Ask a trusted person to join calls with providers"
            - name: Phased retirement with part-time earnings
              description: |-
                ## Purpose
                Working two or three days a week for a few years reduces how much the pot has to supply, and may let you delay the state pension or keep contributions going. Planning withdrawals around earnings, rather than simply alongside them, keeps tax down and gives the pot longer to grow.

                ## Milestones
                1. Expected part-time earnings and their end date written down.
                2. A lower withdrawal set for the working years.
                3. The combined tax on earnings and withdrawals checked.
                4. The date and size of the step up in withdrawals when work stops planned.

                ## Notes
                Check the contribution limits project first: some withdrawals cut how much you can still pay into a pension.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lower withdrawal for the working years and a dated step up for when earnings stop are written into your plan, with combined tax checked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down expected part-time earnings and when they will stop"
                - "Set a lower withdrawal for the years you are still earning"
                - "Check the combined tax on earnings and withdrawals"
                - "Plan the date and size of the step up when work ends"
            - name: Care costs reserve within the drawdown plan
              description: |-
                ## Purpose
                Care at home or in a care home in later life can cost more each year than the whole retirement budget, and the timing is impossible to predict. Earmarking part of the pot, the home or both as a care reserve, and keeping it out of the regular withdrawal calculation, protects the rest of the plan if care is needed.

                ## Milestones
                1. Typical local care costs at home and in a care home looked up.
                2. Public funding rules and means testing where you live noted.
                3. A care reserve sized and its source named.
                4. The reserve excluded from the regular withdrawal calculation.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A care reserve with a named size and source is recorded in your plan and excluded from the regular withdrawal calculation."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up typical local costs for home care and care homes"
                - "Read how public care funding and means testing work where you live"
                - "Agree the size and source of a care reserve with your adviser"
                - "Update the care cost figures and reserve size @recurring(yearly)"
            - name: Drawdown instructions in case of declining capacity
              description: |-
                ## Purpose
                If illness or memory loss means you cannot manage your own withdrawals, someone needs both the legal authority and plain instructions to keep income flowing. Registering a financial power of attorney with each provider, and writing a short guide to how the plan works, protects you from missed payments and from well-meant mistakes.

                ## Milestones
                1. A lasting or enduring financial power of attorney in place, made through a solicitor or the official service.
                2. The attorney registered with every pension and investment provider.
                3. A two-page guide to your plan: income sources, withdrawal amounts, reserve rules and adviser contact.
                4. The guide reviewed with the attorney in person.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A registered financial power of attorney is lodged with every provider, and your attorney has a two-page guide to the plan reviewed in person."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask a solicitor or the official service how to make a financial power of attorney"
                - "Register the attorney with every pension and investment provider"
                - "Ask the agent to draft a two-page guide to your income plan from your notes"
                - "Walk your attorney through the guide and agree when they should step in"
                - "Review the guide with your attorney and update it @recurring(yearly)"
            - name: Managing a parent's drawdown as their attorney
              description: |-
                ## Purpose
                Adult children acting as attorney often inherit a pension in drawdown with no notes on why withdrawals are set as they are. Learning the plan, keeping your parent's money strictly separate and recording every decision protects your parent, and protects you if siblings or the authorities ask questions later.

                ## Milestones
                1. The attorney document registered with each of your parent's providers.
                2. Your parent's income sources, withdrawals and bills written in one summary.
                3. A separate record of every decision made and every payment authorised.
                4. Your parent's wishes, where they can still express them, noted at each review.

                ## Notes
                Attorneys must act in the person's best interests and keep their money separate from their own. Your country's attorney guidance sets out the duties.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each of your parent's providers recognises the attorney, and a decision record covers every withdrawal change and payment you authorise."
                cadence: rolling
              tasks:
                - "Register the attorney document with each of your parent's providers"
                - "Write a one-page summary of your parent's income and bills"
                - "Start a decision record for every withdrawal change you make"
                - "Review income and spending with your parent where they can take part @recurring(quarterly)"
            - name: Folding an inheritance into the drawdown plan
              description: |-
                ## Purpose
                An inheritance received in retirement can reduce how much you need to draw, fund the care reserve or allow gifts to the next generation. Deciding where it goes, which account and for what purpose, before it lands in a current account stops it slowly being spent without changing the plan at all.

                ## Milestones
                1. The inheritance amount and expected date confirmed with the executor.
                2. Options listed: lower withdrawals, a larger reserve, the care fund or gifts.
                3. A decision recorded for each part of the money.
                4. The withdrawal plan rerun with the new figures.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every part of the inheritance has a recorded destination, and the withdrawal model has been rerun with the new figures."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the amount and date with the executor"
                - "List what the money could do for your income plan"
                - "Decide where each part of the inheritance goes and record it"
                - "Rerun your withdrawal model with the inheritance included"
            - name: Stress testing the plan against historical and simulated markets
              description: |-
                ## Purpose
                A single projection with a steady return hides most of the risk in drawdown. Running the plan through historical sequences, including the worst decades for retirees, and through a simulation of many random markets shows the chance of the money lasting to your planning age, and what withdrawal brings that chance to a level you accept.

                ## Milestones
                1. Your plan entered into a historical backtest tool or modelled by your adviser.
                2. Results recorded for the three worst historical starting years.
                3. A simulation run showing the chance of lasting to your planning age.
                4. The withdrawal that meets your chosen confidence level written down and compared with your current one.

                ## Notes
                Simulations are only as good as their assumptions about returns, inflation and fees. Ask what was assumed and keep a copy with the results.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Backtest results for the three worst historical start years and a simulated success rate to your planning age are recorded beside your current withdrawal."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a historical backtest tool or ask your adviser to run one"
                - "Record the outcome for the three worst historical starting years"
                - "Run a simulation and note the chance of lasting to your planning age"
                - "Rerun the stress test with updated figures @recurring(yearly)"
            - name: Using both partners' tax allowances in drawdown
              description: |-
                ## Purpose
                Couples where most of the pension wealth sits with one partner can pay far more tax than necessary, because only one set of allowances and lower bands is being used. Arranging withdrawals so both partners draw taxable income, within the rules on transfers between spouses, can lower the household's tax every year for decades.

                ## Milestones
                1. Each partner's pensions, savings and expected income listed separately.
                2. Each partner's unused allowance and lower band headroom calculated.
                3. Permitted ways of balancing taxable income between partners noted with your adviser or accountant.
                4. A household withdrawal plan agreed that uses both partners' allowances.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A household withdrawal plan that draws taxable income in both partners' names, checked by an adviser or accountant, is agreed and recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each partner's pensions, savings and other income separately"
                - "Calculate each partner's unused allowance and lower band headroom"
                - "Ask your adviser or accountant which balancing options are allowed"
                - "Agree a household withdrawal plan using both sets of allowances"
            - name: Withdrawal funding ladder for the next ten years
              description: |-
                ## Purpose
                Matching each of the next ten years of withdrawals to a bond or fixed deposit that matures in that year means market falls cannot touch that income. Building a ladder takes work and ties up capital, so it suits people who value certainty over the first decade and will do the yearly roll forward.

                ## Milestones
                1. The yearly withdrawal gap for the next ten years written down.
                2. Instruments that could fund each year identified with your adviser, such as government bonds or fixed deposits.
                3. The ladder built, or a decision recorded not to build one.
                4. A yearly step added to the annual reset to extend the ladder by one year.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a ten-year withdrawal ladder exists, and if built, each year's withdrawal is matched to a maturing holding."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down the withdrawal gap for each of the next ten years"
                - "Ask your adviser which instruments could fund each year"
                - "Decide whether to build the ladder and record why"
                - "Add a roll-forward step to your annual reset checklist"
            - name: Written retirement income policy statement
              description: |-
                ## Purpose
                Once the main decisions are made, writing them down in two pages, the starting withdrawal, the account order, the reserve rules, the guardrails and the market-fall plan, gives you, your partner and any future attorney one reference. It also makes it much harder to abandon a good plan on a bad day.

                ## Milestones
                1. A two-page statement covering withdrawal amount, account order, reserve, guardrails and the fall plan.
                2. The statement signed and dated by you and your partner.
                3. Copies held by your adviser and your attorney.
                4. The statement reviewed and redated each year after the annual reset.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed and dated two-page income policy statement is held by you, your adviser and your attorney, and redated after each annual reset."
                cadence: cyclic
              tasks:
                - "Collect your decisions on withdrawal, order, reserve and guardrails in one place"
                - "Ask the agent to draft a two-page policy statement from them"
                - "Sign and date it with your partner and give copies to your adviser and attorney"
                - "Review and redate the statement after the annual reset @recurring(yearly)"
---

# Retirement Income Drawdown

This area is for retirees, and people a year or two from retiring, who need pensions and savings to pay a steady income for thirty years or more. It starts with the foundations (an income map, a budget split into essentials and extras, the guaranteed floor, the first-year tax picture, a tested starting withdrawal, the account order and a cash reserve), then the routines that keep income flowing, the skills behind sequence risk and withdrawal rules, the decisions about guardrails, buckets and bridging, the events that need planning, the situations of couples, bereavement and care, and finally stress testing and a written income policy.

What repeats is a monthly income and spending check, a monthly withdrawal tally, a quarterly drawdown health check, and a yearly cycle of withdrawal reset, tax-year-end planning, adviser review and stress test. The Monthly budget and bills, Metrics log, Operational checklist, Meeting notes and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
