---
id: wealth-investing.retirement-number-calculation
name: Retirement Number Calculation
description: "A retirement number you can defend: a real spending baseline, guaranteed income counted, a chosen withdrawal rate, and projections tested against crashes, high inflation, early exit and a long life."
category: personal
version: 1.0.0
tags: [wealth-investing, retirement-number-calculation, everyone, retirement-planning, withdrawal-rate, spending-estimate, scenario-testing]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - metrics-log
    - reading-queue
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Retirement Number Calculation
          description: "Working out how much you need to retire, with spending estimates, withdrawal rates and projections tested against different scenarios."
          projects:
            - name: Twelve-month spending baseline from bank statements
              description: |-
                ## Purpose
                Every retirement number is a multiple of spending, so a guessed spending figure makes the whole number a guess. Pulling twelve months of bank and card statements, including annual bills such as insurance, car servicing and gifts, gives a real figure, and it is usually higher than the one people carry in their heads because irregular costs are forgotten.

                ## Milestones
                1. Twelve months of statements downloaded for every current account and credit card.
                2. Every transaction sorted into about fifteen categories, with transfers between your own accounts removed.
                3. Annual and irregular costs such as insurance, repairs, gifts and holidays visible as their own lines.
                4. A single annual spending total and monthly average written down with the date range it covers.

                ## Notes
                Leave out money going into savings or pensions; that is not spending. Keep mortgage payments as a separate line, because they may end before retirement.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An annual spending total built from twelve months of real statements, with savings and internal transfers excluded, is recorded with its date range."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download twelve months of statements for every current account and card"
                - "Remove transfers between your own accounts and money going into savings"
                - "Sort the remaining transactions into about fifteen spending categories"
                - "Ask the agent to flag annual or irregular bills missing from the categories"
                - "Write the annual total and monthly average at the top of the sheet"
            - name: Target retirement age and planning horizon
              description: |-
                ## Purpose
                Without a start date and an end date, a retirement number cannot exist. Choosing a provisional target age, plus a planning horizon that runs well past average life expectancy, fixes the two ends of every calculation that follows; both can move later, but the model needs them now.

                ## Milestones
                1. A provisional retirement age written down, with the earliest and latest age you could accept either side of it.
                2. Your state pension or social security age looked up on the official government source.
                3. The earliest age you could draw on any private pension noted.
                4. A planning horizon chosen, such as age 95 or 100, with the reason recorded.

                ## Notes
                Planning only to average life expectancy means roughly half of people outlive the plan. Most planners choose an end age well beyond it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provisional retirement age with an acceptable range and a planning horizon age are written in the model, with the earliest pension access age noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the age you would like to stop full-time work and the range you could live with"
                - "Look up your state pension or social security age on the official government site"
                - "Note the earliest age you could draw on any private pension"
                - "Choose a planning horizon age and write one line on why"
            - name: Inventory of retirement savings and pensions
              description: |-
                ## Purpose
                You cannot measure a gap without knowing what is already there. One list of every pension, retirement account, tax-free savings wrapper and taxable investment account, with current values and the type of each, is the starting balance for every projection in this area.

                ## Milestones
                1. Every defined contribution pension, retirement account and investment account listed with its provider and current value.
                2. Each defined benefit pension listed with its projected annual income and normal pension age.
                3. Each pot marked as usable before pension age or only after it.
                4. A total of invested assets earmarked for retirement written down with the valuation date.

                ## Notes
                If you know a pension exists but cannot find the paperwork, note it and move on; tracing it is a separate job. Leave out the home you live in for now, because housing gets its own project.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single list holds every retirement account with provider, type, value and valuation date, plus a dated total of earmarked assets."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every pension and investment account you know of in one sheet"
                - "Log in to each provider and record the current value"
                - "Record any defined benefit pension's projected income and pension age"
                - "Mark each pot as usable before or only after pension age"
                - "Total the earmarked assets and write the valuation date beside it"
            - name: Guaranteed income floor in today's money
              description: |-
                ## Purpose
                Income that arrives whatever markets do, such as a state pension, a defined benefit pension or an annuity already bought, directly shrinks the pot you need. Adding these up in today's money, with the age each one starts, shows how much of retirement spending is covered before your investments do any work.

                ## Milestones
                1. A current state pension or social security forecast obtained from the official source.
                2. Each defined benefit pension's income converted to today's money at its start age.
                3. Every secure income marked as inflation-linked, capped or fixed.
                4. A year-by-year table of total guaranteed income from retirement to your planning horizon.

                ## Notes
                A fixed income loses real value every year. Over a thirty-year retirement that loss is large, so show fixed incomes falling in today's money rather than flat.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A year-by-year table of guaranteed income in today's money, with start age and inflation linking for each source, is saved in the model."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request your state pension or social security forecast online"
                - "Find the projected income on each defined benefit statement"
                - "Mark each income as inflation-linked, capped or fixed"
                - "Build a year-by-year table of guaranteed income to your planning horizon"
            - name: Back-of-envelope number from a spending multiple
              description: |-
                ## Purpose
                Before any model, a ten-minute sum gives a sense of scale: take annual spending, subtract guaranteed income, and multiply what is left by 25 and by 33. Crude as it is, it tells you whether the gap is a rounding error or the defining money question of the next twenty years.

                ## Milestones
                1. The annual spending gap (spending minus guaranteed income) written down.
                2. The gap multiplied by 25 and by 33 to give a low and high rough number.
                3. The rough range compared with your current inventory total.
                4. A one-line note on what surprised you, kept for comparison with the full model.

                ## Notes
                The multiples come from the 4 and 3 per cent rules of thumb. They ignore tax, staggered pension start ages and fees, which later projects add back in.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A low and high rough retirement number, with the spending and guaranteed income figures used, is written down and dated."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Take your spending baseline, or a careful estimate if it is not ready yet"
                - "Subtract the guaranteed income that will be in payment at your target age"
                - "Multiply the remaining gap by 25 and by 33"
                - "Compare the range with your current savings total and note the shortfall"
            - name: Retirement spending budget by category
              description: |-
                ## Purpose
                Retirement spending is not today's spending. Commuting, pension contributions and perhaps a mortgage disappear, while travel, heating, hobbies and home maintenance often rise. Going category by category from the baseline to a retirement budget replaces the old percentage-of-salary guess with a figure built from your own life.

                ## Milestones
                1. Each baseline category marked as stopping, falling, staying the same or rising in retirement.
                2. A retirement figure set for each category, with a one-line reason for every change.
                3. Costs that begin only in retirement, such as daytime heating, new hobbies or longer trips, added as new lines.
                4. A total retirement budget in today's money set beside the baseline total.

                ## Notes
                Be honest about the first few years: many people spend more early in retirement, not less, as they travel and take on projects.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A retirement budget in today's money has a figure and a reason for every category, and its total is compared with the current baseline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy your baseline categories into a new retirement budget column"
                - "Mark each category as stopping, falling, steady or rising"
                - "Add new lines for costs that begin only after you stop work"
                - "Write the retirement budget total next to the baseline total"
            - name: Essential and discretionary spending split
              description: |-
                ## Purpose
                Splitting the retirement budget into essentials (housing, food, utilities, insurance, basic transport) and discretionary spending (travel, gifts, hobbies) gives two numbers instead of one. The essential figure is what must be secure; the discretionary figure is what can bend in a bad year, and that distinction drives the floor and withdrawal rate decisions later.

                ## Milestones
                1. Every retirement budget line tagged essential or discretionary.
                2. An essential annual total and a discretionary annual total written down.
                3. The essential total compared with your guaranteed income floor.
                4. A note of how far discretionary spending could fall for two or three years without real hardship.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The retirement budget shows an essential total and a discretionary total, with the essential total compared against guaranteed income."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Tag each retirement budget line as essential or discretionary"
                - "Total the two groups separately"
                - "Compare the essential total with your guaranteed income floor"
                - "Write down the most discretionary spending you could cut for two lean years"
            - name: Retirement number assumptions register
              description: |-
                ## Purpose
                A projection is only as good as its assumptions, and they usually hide in spreadsheet cells nobody revisits. A register listing every assumption (inflation, investment return, fees, retirement age, horizon, withdrawal rate, tax) with its value, source and date makes each one visible, open to challenge and quick to update.

                ## Milestones
                1. A register with columns for assumption, value, source, date set and reason.
                2. At least eight assumptions entered, each backed by a source rather than a hunch.
                3. Returns stated after inflation and after fees, or clearly labelled where they are not.
                4. The model reading its inputs from the register.

                ## Notes
                Prefer published long-run assumptions from pension regulators, actuarial bodies or large fund managers over recent returns, which flatter whatever has just done well.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists at least eight retirement assumptions with value, source and date, and the model reads its inputs from it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a register with columns for value, source, date and reason"
                - "Enter inflation, return, fee, age, horizon, withdrawal and tax assumptions"
                - "Find a published source for each return and inflation figure"
                - "Check every assumption against its source and update the dates @recurring(yearly)"
            - name: Retirement number spreadsheet model
              description: |-
                ## Purpose
                Online calculators hide their workings and rarely handle staggered pension start ages, lump sums or spending that changes with age. A spreadsheet you built yourself, with an inputs sheet, a year-by-year projection and a summary, can be checked, changed and rerun in minutes whenever life moves.

                ## Milestones
                1. An inputs sheet reading from the assumptions register.
                2. A year-by-year projection from today to the planning horizon showing contributions, growth, guaranteed income, spending and closing balance.
                3. All figures in today's money, with real returns used throughout.
                4. A summary showing the pot needed at retirement and the age the money runs out on central assumptions.
                5. The result checked against the back-of-envelope range, with any large difference explained.

                ## Notes
                Work in today's money from the start. Mixing future and present figures is the most common error in home-built models.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working spreadsheet projects every year to the planning horizon in today's money and shows the pot needed and the age the money runs out."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set up inputs, projection and summary sheets in one workbook"
                - "Build one row per year from now to your planning horizon"
                - "Add each guaranteed income from the age it starts"
                - "Ask the agent to review the formulas row by row for errors"
                - "Compare the result with your back-of-envelope range"
            - name: One-page retirement number statement
              description: |-
                ## Purpose
                Buried in a spreadsheet, a number is easy to forget and hard to share with a partner or adviser. A single page stating the target, the date, the key assumptions, the current gap and the biggest risks keeps the conclusion in plain view and makes year-to-year changes obvious.

                ## Milestones
                1. A one-page statement with target pot, target age, retirement spending and withdrawal rate.
                2. The current gap and the monthly saving needed to close it.
                3. The three assumptions that move the number most named.
                4. The page dated, saved beside the model and shared with anyone who shares the plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page statement shows the target, key assumptions, current gap and top three risks, and is filed with the model."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the target pot, age, spending and withdrawal rate on one page"
                - "Add the current gap and the monthly saving needed to close it"
                - "Name the three assumptions that move the number most"
                - "Save the dated page next to the model and share it with your partner if you have one"
            - name: Monthly spending log for retirement planning
              description: |-
                ## Purpose
                Within a year, a one-off baseline drifts out of date as prices and habits change. Categorising each month's spending in the same categories as the retirement budget keeps the main input to the number current and shows which costs are creeping up.

                ## Milestones
                1. The baseline categories reused unchanged in a monthly log.
                2. Each month's spending categorised within the first ten days of the next.
                3. A rolling twelve-month total updated every quarter.
                4. Twelve consecutive months logged.

                ## Notes
                Start from the **Monthly budget and bills** template. Fifteen minutes a month with bank exports is enough; perfect categorisation is not the point.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive months of spending are logged in the retirement budget categories, with a rolling annual total each quarter."
                cadence: rolling
              tasks:
                - "Set up the monthly log with your baseline categories"
                - "Categorise last month's spending from bank and card exports @recurring(monthly:9)"
                - "Update the rolling twelve-month total and compare it with the baseline @recurring(quarterly)"
                - "Note any category that has risen three months running"
            - name: Quarterly progress check against the number
              description: |-
                ## Purpose
                Knowing the target matters less than knowing whether you are on course for it. A quarterly check of earmarked savings against where the model says they should be by now shows drift early, while there is still time to adjust contributions or expectations.

                ## Milestones
                1. An expected-balance path from today to retirement taken from the model.
                2. Actual earmarked savings recorded each quarter beside the expected figure.
                3. A funded percentage (actual divided by expected) worked out each time.
                4. A written rule for what you will do if you fall more than 10 per cent behind for two quarters running.

                ## Notes
                Start from the **Metrics log** template. Markets will push you ahead and behind; the rule is there so you act on trends, not on single quarters.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly entries record actual against expected savings with a funded percentage, alongside a written rule for persistent shortfalls."
                cadence: rolling
              tasks:
                - "Copy the expected balance for each quarter from the model into a log"
                - "Record actual earmarked savings and the funded percentage @recurring(quarterly)"
                - "Write your rule for falling more than 10 per cent behind two quarters running"
                - "Note one line on what moved the figure this quarter"
            - name: Annual retirement number recalculation
              description: |-
                ## Purpose
                Balances, spending, tax rules and your own plans all shift over a year, and a number calculated once quietly turns into fiction. Rerunning the model on a fixed date each year, with fresh balances and the latest twelve months of spending, keeps the target honest and builds a record of how it moved and why.

                ## Milestones
                1. A fixed month chosen for the annual recalculation.
                2. Fresh balances and the latest twelve months of spending entered.
                3. The new number, gap and required saving recorded beside last year's.
                4. A short note explaining every change larger than 5 per cent.
                5. The one-page statement updated and redated.
              priority: high
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "The model has been rerun on the chosen date for two consecutive years, each run with a note explaining the change from the year before."
                cadence: cyclic
              tasks:
                - "Choose the month you will recalculate each year"
                - "Enter fresh balances and the latest twelve months of spending @recurring(yearly)"
                - "Record the new number beside last year's and explain the difference"
                - "Redate the one-page statement with the new figures"
            - name: Annual pension statement reconciliation
              description: |-
                ## Purpose
                Pension providers send yearly statements with their own projections, often built on assumptions that differ from yours. Putting each statement's figures into the inventory and comparing the provider's projection with your model catches missed contributions, wrong salary figures and very different growth assumptions before they compound.

                ## Milestones
                1. One folder where every annual statement is filed on arrival.
                2. Each statement's value and contributions checked against your own records.
                3. Each provider's projected income compared with your model's figure for that pot, with the gap explained.
                4. Any missing employer contribution or wrong salary figure raised with the provider.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pension statement for the year is filed, reconciled with your records and compared with your model, with any discrepancy raised."
                cadence: cyclic
              tasks:
                - "Create one folder for annual pension and investment statements"
                - "Check each statement's contributions against your payslips or bank records"
                - "Compare each provider's projection with your model's figure for that pot"
                - "Update the inventory and guaranteed income figures from new statements @recurring(yearly)"
                - "Contact the provider about any missing or wrong contribution"
            - name: Personal inflation rate check
              description: |-
                ## Purpose
                Official inflation measures a national basket, but your own costs may rise faster or slower depending on how much goes on energy, food, travel or rent. Comparing your spending in the same categories year on year gives a personal inflation figure that shows whether the model's inflation assumption is too kind.

                ## Milestones
                1. Two consecutive twelve-month spending totals in the same categories.
                2. Price-driven increases separated from deliberate changes in what you buy.
                3. A personal inflation figure set beside the official rate for the same period.
                4. The register's inflation assumption confirmed or adjusted, with a reason.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A yearly personal inflation figure is calculated from your own categorised spending and compared with the official rate, and the model's assumption reviewed."
                cadence: cyclic
              tasks:
                - "Pull the same twelve-month category totals for this year and last"
                - "Mark which increases came from prices rather than buying more"
                - "Work out your personal inflation figure and compare it with the official rate @recurring(yearly)"
                - "Adjust the inflation assumption only if the gap persists for two years"
            - name: Monthly saving shortfall tracker
              description: |-
                ## Purpose
                The model says how much you need to save each month to reach the number; this checks whether you actually did. Tracking required against actual contributions, employer money included, turns a distant target into a monthly figure you can see and act on.

                ## Milestones
                1. The required monthly contribution taken from the model.
                2. Actual contributions to every earmarked account recorded each month.
                3. A running shortfall or surplus for the year.
                4. A plan to make up any shortfall before the annual recalculation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of actual contributions are recorded against the required figure, with a running annual shortfall or surplus."
                cadence: rolling
              tasks:
                - "Write the required monthly contribution from the model at the top of a tracker"
                - "Record last month's contributions to every earmarked account @recurring(monthly:14)"
                - "Keep a running total of shortfall or surplus for the year"
                - "Decide how any shortfall will be made up before year end"
            - name: Recalculation triggers for big life changes
              description: |-
                ## Purpose
                Some events move the number more in a day than markets do in a year: a redundancy, a divorce, an inheritance, a health diagnosis, an adult child moving home, a house move. A short written list of triggers, each with the model inputs it changes, means you rerun the numbers when it matters rather than waiting for the annual date.

                ## Milestones
                1. A list of at least eight life events that would change spending, income, retirement age or horizon.
                2. The model inputs each event affects noted beside it.
                3. The list kept on the first sheet of the model where you will see it.
                4. A trigger rerun completed within a month of any listed event happening.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A list of at least eight triggers, each mapped to the model inputs it changes, sits on the first sheet of the model."
                cadence: rolling
              tasks:
                - "List the life events that would change your spending, income or retirement age"
                - "Note which model inputs each event would change"
                - "Put the trigger list on the first sheet of the model"
                - "Rerun the model within a month of any trigger happening"
            - name: Where the 4 per cent rule comes from
              description: |-
                ## Purpose
                Quoted everywhere and understood almost nowhere, the 4 per cent rule deserves a proper reading. Reading the original research and its later critiques shows what it assumes (a 30-year retirement, one country's market history, a fixed real withdrawal, a share-heavy portfolio, no fees) and why each of those may not match your plan.

                ## Milestones
                1. A reading list holding the original safe withdrawal rate study, one follow-up and two critiques.
                2. A one-page note listing the rule's assumptions in your own words.
                3. Each assumption marked as matching or not matching your situation.
                4. Three questions about withdrawal rates noted for the decision later in this area.

                ## Notes
                Start from the **Reading queue** template. Look for studies that use markets beyond a single country; their results are usually less generous.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note lists the assumptions behind the 4 per cent rule and marks which ones do not match your own plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add the original safe withdrawal rate study and two critiques to your reading queue"
                - "Read the original study's method and summarise it in a paragraph"
                - "List each assumption and mark whether it fits your plan"
                - "Write three questions to answer before choosing your own rate"
            - name: Real returns, inflation and today's money
              description: |-
                ## Purpose
                Once inflation is taken out, a statement projecting a seven-figure pot in thirty years can be worth far less than it looks. Learning to convert between nominal and real figures, and to state every number in today's money, stops you mistaking a large future figure for a comfortable one.

                ## Milestones
                1. The difference between nominal and real returns explained in your own words.
                2. Three future figures from your own statements converted back to today's money by hand.
                3. Every growth rate in the model confirmed as after inflation.
                4. A short note on the inflation assumption you use and why.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three worked conversions between future and today's money are saved, and the model is confirmed to use real figures throughout."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a short explainer on nominal and real investment returns"
                - "Convert three future figures from your pension statements into today's money"
                - "Check every growth rate in the model is stated after inflation"
                - "Write one paragraph on your inflation assumption"
            - name: Sequence of returns risk in your own numbers
              description: |-
                ## Purpose
                Two retirees with the same average return can end up worlds apart if one meets a crash in the first years of withdrawals. Running your own model with the same returns in a different order makes sequence risk concrete and shows why the number must allow for a bad start, not just a bad average.

                ## Milestones
                1. A run of twenty annual returns with a realistic average entered in a copy of the model.
                2. The same returns run in their original and reversed order.
                3. The difference in final balance and in the age the money runs out recorded.
                4. A note on what the result means for the size of pot you need.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your model has been run with identical returns in two orders, and the difference in outcome is written down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick a run of twenty annual returns with a realistic average"
                - "Run the model with the returns in their original order"
                - "Run it again with the order reversed"
                - "Write down how much earlier or later the money runs out"
            - name: Reading Monte Carlo success rates
              description: |-
                ## Purpose
                Many calculators report a probability of success, such as 85 per cent, from thousands of random simulations. Understanding what that figure means, what it leaves out and how sensitive it is to the return and volatility inputs stops you treating 90 per cent as safe and 70 per cent as failure without looking further.

                ## Milestones
                1. A plain explanation of how a Monte Carlo simulation works, written in your own words.
                2. One calculator run with your own figures and its success rate recorded.
                3. The same run repeated with lower expected returns to see how far the rate moves.
                4. A note on what failure means in practice: cutting spending in later years, not running out overnight.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One Monte Carlo run and one lower-return rerun of your plan are recorded, with a note on what the success rate does and does not measure."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a plain-language guide to Monte Carlo retirement simulations"
                - "Run your figures through a calculator that reports a success rate"
                - "Rerun with expected returns one percentage point lower"
                - "Write what a failed simulation would mean for your spending"
            - name: Grossing up for tax on retirement income
              description: |-
                ## Purpose
                Retirement budgets are usually written in take-home money, but pension income is often taxed as it is drawn. Learning how your country taxes pension income, tax-free withdrawals and investment income lets you gross up the spending figure, so the pot is sized for what you will actually receive.

                ## Milestones
                1. The main tax rules for pension income, tax-free lump sums and investment income where you live summarised.
                2. The share of retirement income likely to be taxable estimated.
                3. The net retirement budget converted to a gross income figure.
                4. The model updated to use the gross figure.

                ## Notes
                This is about sizing the number, not tax planning. If your situation involves more than one country or large sums, check the result with a tax adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The model uses a gross retirement income figure derived from your net budget, with a note summarising the tax rules applied."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the tax authority's guidance on how pension income is taxed"
                - "Estimate how much of your retirement income will be taxable"
                - "Calculate the gross income needed to deliver your net budget"
                - "Replace the net spending figure in the model with the gross one"
            - name: Survival odds for you and a partner
              description: |-
                ## Purpose
                Average life expectancy is a midpoint, not a limit, and for a couple the chance that one of you lives into your late nineties is far higher than for either alone. Looking up survival probabilities by age gives a planning horizon based on a risk you have chosen, not on a single figure that half of people beat.

                ## Milestones
                1. A life expectancy calculator from a national statistics office or actuarial body used for each person.
                2. The probability of reaching 90, 95 and 100 noted for each.
                3. For a couple, the chance that at least one of you reaches each age estimated.
                4. The planning horizon confirmed or extended, with the probability it covers written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Probabilities of reaching 90, 95 and 100 are recorded for each person, and the planning horizon is set with the probability it covers."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Use an official life expectancy calculator for your age and sex"
                - "Note the chance of reaching 90, 95 and 100"
                - "Repeat for your partner and estimate the chance at least one reaches each age"
                - "Extend the planning horizon if it covers less risk than you are comfortable with"
            - name: Choosing a retirement planning calculator or software
              description: |-
                ## Purpose
                A spreadsheet covers most needs, but dedicated planning software adds Monte Carlo runs, tax handling and cash flow charts that are hard to build. Comparing three options against the same criteria, including whether you can see and change every assumption, avoids paying for a black box.

                ## Milestones
                1. Five criteria written: transparency of assumptions, tax handling, scenario tools, data privacy and cost.
                2. Three tools shortlisted, at least one of them free.
                3. The same test plan entered into each and the results compared.
                4. One tool chosen, or a decision to stay with the spreadsheet recorded.

                ## Notes
                Start from the **Purchase decision** template. Be wary of tools that insist on linking bank accounts; manual entry is enough for this job.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three tools are compared on the same test plan against five criteria, and a choice or a stay-with-the-spreadsheet decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write five criteria you will judge each tool against"
                - "Shortlist three tools including one free calculator"
                - "Enter the same test plan into each tool"
                - "Record the choice and the reasons in the decision note"
            - name: Choosing your withdrawal rate assumption
              description: |-
                ## Purpose
                The withdrawal rate turns a spending gap into a pot size, and moving it from 4 to 3.5 per cent raises the number by about 14 per cent. Choosing the rate deliberately, with your horizon, flexibility and guaranteed floor in view, makes the most powerful assumption in the plan a considered one.

                ## Milestones
                1. The rates suggested by at least three published studies for your planning horizon noted.
                2. Your horizon, the share of essential spending covered by guaranteed income and your spending flexibility written beside them.
                3. A rate or a narrow range chosen, with the reasoning recorded.
                4. The pot needed at the chosen rate and at half a point either side shown in the model.

                ## Notes
                This is a planning assumption, not a promise of safety. If you take regulated advice, ask the adviser what rate they would use and why.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A withdrawal rate or range is recorded with its reasoning, and the model shows the pot needed at that rate and half a point either side."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note the withdrawal rates three published studies give for your horizon"
                - "Write your horizon, guaranteed floor share and spending flexibility beside them"
                - "Choose a rate or range and record the reasoning"
                - "Show the pot needed at your rate and half a point either side"
            - name: Retirement age trade-off table
              description: |-
                ## Purpose
                Each extra year of work adds contributions, a year of growth and one less year to fund, so the number usually falls quickly as the retirement age moves later. A table showing the pot needed, the gap and the required monthly saving for each age across your acceptable range puts a price on every year.

                ## Milestones
                1. The model run for every age in your acceptable range.
                2. Pot needed, current gap and required monthly saving shown for each age.
                3. The age at which current saving closes the gap identified.
                4. A preferred age chosen, with the trade-off written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table shows pot, gap and required saving for each age in your range, and a preferred age is recorded with its trade-off."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Run the model for each age from earliest to latest acceptable"
                - "Tabulate pot needed, gap and monthly saving for each age"
                - "Mark the age where current saving closes the gap"
                - "Write down which age you prefer and what you are trading for it"
            - name: Closing the gap with saving, age or spending
              description: |-
                ## Purpose
                When the projection falls short there are three levers you control: save more, work longer or plan to spend less. Costing each lever alone and then a blend shows the least painful route, and turns a vague worry into a specific plan with a first step.

                ## Milestones
                1. The extra monthly saving that would close the gap on its own calculated.
                2. The later retirement age that would close it on its own calculated.
                3. The spending cut that would close it on its own calculated.
                4. A blended plan, such as two years later plus a smaller saving increase, entered in the model.
                5. The first change, such as a raised contribution, actually made.

                ## Notes
                Hoping for higher investment returns is not a fourth lever. If the plan only works on optimistic returns, it does not work yet.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The gap is costed for each lever alone, a blended plan is entered in the model, and the first change has been made."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Calculate the extra monthly saving that would close the gap alone"
                - "Calculate the retirement age that would close it alone"
                - "Calculate the spending cut that would close it alone"
                - "Choose a blend of the three and enter it in the model"
                - "Make the first change within a month of choosing"
            - name: Spending phases across retirement
              description: |-
                ## Purpose
                Spending often follows a pattern: higher in the active early years, lower in a quieter middle stretch, then rising again if care is needed, sometimes called the go-go, slow-go and no-go years. Modelling three phases instead of one flat figure can move the number noticeably in either direction and produces a profile that looks like a real life.

                ## Milestones
                1. Three phases defined with start and end ages.
                2. A spending figure set for each phase from the retirement budget.
                3. The model switched from flat spending to the phased profile.
                4. The change in the retirement number recorded and sense-checked.

                ## Notes
                Evidence on falling real spending in later life is mixed and depends heavily on health. Do not cut the later phase so far that care costs have nowhere to go.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model uses a three-phase spending profile with stated ages and figures, and the change in the number is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose start and end ages for the active, quieter and later phases"
                - "Set a spending figure for each phase from your retirement budget"
                - "Replace flat spending in the model with the phased profile"
                - "Record how much the retirement number moved"
            - name: Big-ticket costs schedule for retirement
              description: |-
                ## Purpose
                Cars, roofs, kitchens, boilers, family weddings and a once-in-a-lifetime trip never show up in a monthly budget, yet over thirty years they add up to a large sum. Scheduling them by year in the model stops the number assuming a smooth spending line that real life never follows.

                ## Milestones
                1. A list of expected large one-off costs from retirement to the planning horizon.
                2. Each cost given an estimated year and amount in today's money.
                3. The schedule added to the projection as separate yearly lines.
                4. The effect on the retirement number recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated schedule of large one-off retirement costs in today's money is part of the projection, with its effect on the number recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every large one-off cost you expect after you stop work"
                - "Give each an estimated year and amount in today's money"
                - "Add the schedule to the projection as separate yearly lines"
                - "Re-price the big-ticket list at current prices @recurring(yearly)"
            - name: Long-term care cost allowance
              description: |-
                ## Purpose
                Care in later life can cost more in a year than a comfortable retirement budget, and who pays depends heavily on where you live and what you own. Researching typical local costs and state support, then deciding how care is reflected in the number, turns an uncomfortable topic into a line in the plan.

                ## Milestones
                1. Typical local costs of home care and residential care found from official or charity sources.
                2. The state support rules where you live summarised in a paragraph.
                3. A decision recorded on whether care is met from a reserve, from home equity or through the state system.
                4. Any reserve added to the model as a separate pot not used for everyday spending.

                ## Notes
                Care funding rules change often. Treat the figures as a planning range and check them each year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Local care costs and support rules are summarised, and a recorded decision on how care is funded is reflected in the model."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up typical local home care and care home costs from an official source"
                - "Summarise the state support rules where you live"
                - "Decide whether care is covered by a reserve, home equity or the state system"
                - "Check local care costs and support rules for changes @recurring(yearly)"
            - name: Housing costs and home equity in the number
              description: |-
                ## Purpose
                Housing is the biggest swing factor in many retirement numbers. A mortgage-free owner, an owner planning to downsize and a lifelong renter need very different pots, because rent keeps rising through retirement while equity released by downsizing can replace years of withdrawals. Deciding which you are, and whether home equity counts, removes the largest unspoken assumption in most plans.

                ## Milestones
                1. Your expected housing position at retirement written down: renting, owning with a mortgage, or owning outright.
                2. Yearly retirement housing costs (rent, maintenance, service charges, insurance) estimated.
                3. A decision on whether any home equity counts towards the number, and from what age.
                4. The model updated with housing costs and any planned downsizing proceeds.

                ## Notes
                If you rent, show rent rising with inflation for the whole horizon. If you own, a common starting guess for maintenance is around 1 per cent of the home's value a year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The model includes yearly retirement housing costs and a recorded decision on whether, and from when, home equity counts towards the number."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down whether you expect to rent, owe or own outright at retirement"
                - "Estimate yearly housing costs including maintenance and insurance"
                - "Decide whether home equity counts towards the number and from what age"
                - "Add housing costs and any downsizing proceeds to the model"
            - name: Rules for counting uncertain lump sums
              description: |-
                ## Purpose
                Expected inheritances, business sale proceeds, share awards and tax-free pension cash can make the number look solved when none of them is certain. Writing rules for what counts, for example nothing until received or only half of a sale estimate, protects the plan from money that may arrive late, smaller or never.

                ## Milestones
                1. Every possible future lump sum listed with an estimated amount and timing.
                2. Each one rated certain, likely or speculative.
                3. A written rule for how each rating is treated in the model.
                4. The model run with and without the uncertain sums, with both results recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every possible lump sum is rated, written counting rules are applied in the model, and results with and without them are recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every lump sum you might receive before or during retirement"
                - "Rate each one certain, likely or speculative"
                - "Write a rule for how each rating is counted in the model"
                - "Run the model with and without the uncertain sums"
            - name: Retiring into a market crash stress test
              description: |-
                ## Purpose
                The worst time for markets to fall is the year you stop work. Testing the plan with a large fall in the first two years followed by a slow recovery shows how much the pot or the spending would have to give, and whether the number needs a margin on top.

                ## Milestones
                1. A crash scenario defined from real history, such as a large fall in year one and flat real returns for five years.
                2. The model run on that scenario and the age the money runs out recorded.
                3. The spending cut needed to last to the planning horizon calculated.
                4. A decision recorded on whether to add a margin to the number.

                ## Notes
                Use falls taken from real market history rather than invented ones; they are harder to dismiss.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The plan has been run through a historical crash at the point of retirement, with the outcome, the spending cut needed and a margin decision recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a historical crash to use as the template for the scenario"
                - "Enter the fall and the slow recovery into a copy of the model"
                - "Record the age the money runs out under the scenario"
                - "Calculate the spending cut needed to reach the planning horizon"
            - name: High inflation decade stress test
              description: |-
                ## Purpose
                Ten years of high inflation erode fixed incomes and cash, and can hit shares and bonds at the same time, as several countries saw in the 1970s and again more recently. Modelling a decade of inflation well above your assumption, with weak real returns, shows which parts of the plan are exposed.

                ## Milestones
                1. A scenario of ten years with inflation several points above the base assumption and low real returns.
                2. Fixed and capped incomes set to lose real value in the scenario.
                3. The resulting number and gap recorded.
                4. The incomes and assets most exposed to inflation listed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ten-year high inflation scenario has been run, with the resulting number, gap and most exposed parts of the plan recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set inflation several points above your assumption for ten years in a copy of the model"
                - "Let fixed and capped pensions lose value at that rate"
                - "Record the number and gap the scenario produces"
                - "List the incomes and assets that suffer most"
            - name: Forced early retirement stress test
              description: |-
                ## Purpose
                Many people stop work earlier than they planned because of redundancy, their own health or caring for someone else. Testing the plan with retirement five years early, contributions ending and a gap before pensions can be drawn shows how exposed you are and what a fallback would look like.

                ## Milestones
                1. A scenario with retirement five years before the target and no further contributions.
                2. The years before any pension can be drawn identified and their cost estimated.
                3. The resulting shortfall recorded.
                4. A fallback written down covering part-time income, lower spending and which pots would be used first.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A five-years-early scenario has been run, with the shortfall and a written fallback plan recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the model and move the retirement age five years earlier"
                - "Stop all contributions from that age in the copy"
                - "Cost the years before any pension can be drawn"
                - "Write a fallback plan for that situation in a short paragraph"
            - name: Surviving partner income stress test
              description: |-
                ## Purpose
                When one partner dies, household spending falls less than people expect, but income can drop sharply as one state pension stops and some workplace pensions pay only a reduced survivor's share. Modelling the survivor's position at a few different ages shows whether the number still works for the one left.

                ## Milestones
                1. The survivor benefit for each pension looked up and noted.
                2. The survivor's yearly spending estimated, usually well over half the joint budget.
                3. The model run with the death of each partner at three different ages.
                4. Any shortfall recorded, with options to discuss together.

                ## Notes
                Run this together. It is easier to plan for when both partners know the numbers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The plan has been run for each partner dying at three ages, with the survivor's income, spending and any shortfall recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the survivor's benefit for each pension you both hold"
                - "Estimate the surviving partner's yearly spending"
                - "Run the model with each partner dying at three different ages"
                - "Note any shortfall and talk it through with your partner"
            - name: Ten-years-out retirement number checkpoint
              description: |-
                ## Purpose
                Ten years before the target date there is still time to change course, and the figures are now close enough to mean something. A deliberate checkpoint, with every input rebuilt from source documents, sets the plan for the final decade and decides how often to review from here.

                ## Milestones
                1. The checkpoint date set ten years before your target retirement age.
                2. Spending, balances, guaranteed income and assumptions all refreshed from source.
                3. The gap and required saving for the final decade recorded.
                4. A review rhythm for the last ten years agreed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At ten years out, every model input has been refreshed from source and the gap, required saving and review rhythm are recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Put the ten-years-out date in your calendar"
                - "Refresh every input in the model from source documents"
                - "Record the gap and the saving needed over the final decade"
                - "Decide how often you will review the number from now on"
            - name: Five-years-out firming of the number
              description: |-
                ## Purpose
                Five years out, estimates need to become figures: a real retirement budget, confirmed pension forecasts and a chosen first-year income. Firming the number now leaves time for the last catch-up contributions and for testing the plan before any decision becomes irreversible.

                ## Milestones
                1. Current forecasts requested from every pension provider and the state scheme.
                2. The retirement budget rebuilt line by line with five years less guesswork.
                3. A first-year income figure, gross and net, written down.
                4. The remaining gap and the final catch-up plan recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At five years out, fresh forecasts, a rebuilt budget, a gross and net first-year income and a catch-up plan are all on file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request up-to-date forecasts from every pension provider"
                - "Rebuild the retirement budget line by line"
                - "Write the gross and net income you want in the first year"
                - "Set out how any remaining gap will be closed in five years"
            - name: Trial year on the retirement budget
              description: |-
                ## Purpose
                Living on the planned retirement budget for six to twelve months while still earning is the most reliable test of the spending figure there is. Money not needed goes into savings, so a budget that is too low is found out at no cost and a realistic one adds to the pot.

                ## Milestones
                1. The retirement budget set up as a real monthly spending limit.
                2. Pay above that limit moved straight into savings each month.
                3. Monthly spending compared with the budget, category by category.
                4. A revised retirement budget written at the end of the trial.

                ## Notes
                Include the irregular costs too. A trial that skips the car service and the annual insurance renewal will flatter the budget.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least six months have been lived on the retirement budget, and a revised budget based on the trial is written down."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick the start month for the trial and tell anyone it affects"
                - "Set up a separate spending account funded at the retirement budget"
                - "Compare last month's spending with the retirement budget @recurring(monthly:3)"
                - "Write a revised retirement budget from what the trial showed"
            - name: Paid second opinion on your retirement number
              description: |-
                ## Purpose
                A one-off review by a qualified financial planner, paid by the hour or a fixed fee, is a cheap way to catch a flawed assumption while it can still be fixed. Arriving with your model, assumptions register and one-page statement turns the meeting into a check of your work rather than a sales conversation.

                ## Milestones
                1. A planner offering fixed-fee or hourly plan reviews booked, with fee and scope confirmed in writing.
                2. The model, register and statement sent ahead of the meeting.
                3. Each challenge the planner raises written up.
                4. Every suggested change accepted or rejected with a reason, and the model updated.

                ## Notes
                Start from the **Meeting notes** template. Make sure the review is about your plan and not a route into selling you a product.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A paid review of the number has taken place, its challenges are written up and each suggested change is recorded as accepted or rejected."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find a planner who offers fixed-fee or hourly plan reviews"
                - "Send your model, assumptions register and one-page statement ahead"
                - "Write up each challenge the planner raises"
                - "Record which changes you accepted and why"
            - name: Final go or no-go check before giving notice
              description: |-
                ## Purpose
                Handing in notice is the one step in this area that is hard to undo. A written go or no-go check, run a few months beforehand against conditions set in advance (number met, budget tested, stress tests passed, first-year income source agreed), makes the decision on evidence rather than on a bad week at work.

                ## Milestones
                1. A checklist of five to eight conditions agreed well before the decision.
                2. Each condition checked against current figures.
                3. A go, wait or no-go decision recorded with the date.
                4. For a wait, the unmet condition and the date to recheck it written down.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A dated go, wait or no-go decision is recorded against a pre-agreed checklist, with recheck dates for any unmet condition."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write five to eight conditions that must hold before you retire"
                - "Check each condition against current figures"
                - "Record a go, wait or no-go decision with the date"
                - "Set the recheck date for any condition not yet met"
            - name: First retirement number in your twenties or thirties
              description: |-
                ## Purpose
                At 25 or 35 a precise number is impossible, but a rough target and a savings rate that would reach it are not. Setting a provisional number in today's money and a share of pay to save lets decades of compounding do the work while the details stay unknown.

                ## Milestones
                1. A rough yearly retirement spending figure in today's money.
                2. A provisional number from a simple multiple of that figure.
                3. The share of pay needed to reach it by your chosen age, employer contributions included.
                4. A habit of raising the rate with each pay rise in place.

                ## Notes
                Precision is not the goal at this stage. A rough number revisited every few years beats a perfect one never started.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A provisional number and the share of pay needed to reach it are written down, and contributions have been raised at least once after a pay review."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Estimate the yearly spending you would want in today's money"
                - "Turn it into a rough number with a 25 or 30 times multiple"
                - "Work out the share of pay to save, counting employer contributions"
                - "Raise your contribution rate after each pay review @recurring(yearly)"
            - name: Late starter's number at fifty or older
              description: |-
                ## Purpose
                Starting serious saving in your fifties is common and far from hopeless, but the maths is different: less time for compounding, more reliance on guaranteed income and on working a little longer. A late-starter calculation centres on the floor, realistic saving capacity and the retirement age that makes the plan work.

                ## Milestones
                1. Guaranteed income at state pension age confirmed as the base of the plan.
                2. The most you could realistically save each month for the remaining working years worked out.
                3. The model run for several retirement ages to find a workable one.
                4. A catch-up plan written and the first contribution increase made.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A workable retirement age and monthly catch-up saving are chosen from model runs, and the first increase has been made."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Confirm your guaranteed income at state pension age"
                - "Work out the most you could realistically save each month"
                - "Run the model at three or four retirement ages"
                - "Check the catch-up contribution went in this month @recurring(monthly:2)"
            - name: Single person's retirement number
              description: |-
                ## Purpose
                Single people carry the whole cost of housing, utilities and a car on one income, with no partner's pension to fall back on and often no one at home to help in later life. Building the number on single-person costs avoids borrowing assumptions designed for couples, which can understate what one person needs.

                ## Milestones
                1. Fixed household costs checked as a single-person total rather than half of a couple's figure.
                2. Costs a partner might otherwise cover, such as help at home and transport, budgeted.
                3. The care allowance reviewed with living alone in mind.
                4. The number recalculated on these single-person inputs.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The model has been rerun on single-person fixed costs, paid help and a reviewed care allowance, and the new number is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the fixed household costs you carry alone"
                - "Budget paid help for tasks a partner might cover in later life"
                - "Review the care allowance with living alone in mind"
                - "Rerun the model on single-person inputs"
            - name: Costing a retirement in another country
              description: |-
                ## Purpose
                Retiring abroad can lower or raise the number depending on housing, healthcare, tax and the exchange rate between your pension currency and local prices. Costing a realistic year in the target country, including trips home and health cover, shows what the number would actually be there.

                ## Milestones
                1. A local cost-of-living budget built from rents, food and transport in the target area.
                2. Healthcare access and insurance costs for a foreign retiree researched.
                3. Tax on your pensions in that country checked in outline.
                4. The budget run at today's exchange rate and at one 20 per cent worse.
                5. The number at home and abroad compared side by side.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A costed overseas retirement budget, tested at a 20 per cent worse exchange rate, is compared with the home number."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Price rent, food and transport in the target area from local listings"
                - "Find what health cover a foreign retiree needs and what it costs"
                - "Run the budget at today's exchange rate and at one 20 per cent worse"
                - "Update the overseas budget for local price changes @recurring(yearly)"
            - name: Supporting family members in the number
              description: |-
                ## Purpose
                Helping adult children with a deposit, supporting an ageing parent or paying for grandchildren's activities can quietly become a large share of retirement spending. Deciding in advance what you want to give, for how long and from which part of the plan protects both your own security and the help you want to offer.

                ## Milestones
                1. Each expected form of family support listed with an amount and duration.
                2. Each marked as committed or dependent on how the plan performs.
                3. The support added to the budget or the big-ticket schedule.
                4. The effect on the number recorded and, where it helps, shared with the family.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Expected family support is listed with amounts and durations, built into the model, and its effect on the number recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the family support you expect to give and for how long"
                - "Mark each as committed or dependent on how the plan performs"
                - "Add the support to the budget or the big-ticket schedule"
                - "Record how much the support adds to the number"
            - name: Historical backtest across every start year
              description: |-
                ## Purpose
                Rather than one projection, a historical backtest runs your plan as if you had retired in every year for which good data exists, and reports the worst, median and best outcomes. It reveals which start years would have broken the plan and how close the near misses came.

                ## Milestones
                1. A dataset of annual historical returns and inflation for shares, bonds and cash obtained.
                2. The plan run for every start year in the data.
                3. The worst, median and best ending balances recorded.
                4. The failing start years and what they had in common noted.

                ## Notes
                Use data from more than one country if you can. A single strong market's history is a generous test.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The plan has been backtested over every available start year, with worst, median and best outcomes and the failing years recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download a dataset of annual historical returns and inflation"
                - "Set up the model to run from any chosen start year"
                - "Run every start year and record worst, median and best results"
                - "Rerun the backtest with updated balances and spending @recurring(yearly)"
            - name: Spending guardrails modelled in the number
              description: |-
                ## Purpose
                Plans that let spending fall by, say, 10 per cent after bad years and rise after good ones can usually support a higher starting withdrawal and a smaller target pot. Modelling simple guardrails shows how much flexibility is worth in your number, and whether the cuts it would ask for are ones you could live with.

                ## Milestones
                1. Upper and lower guardrails and the size of each spending adjustment defined.
                2. The guardrail rules built into a copy of the model.
                3. The target pot with and without guardrails compared.
                4. The lowest spending year under the rules checked against your essential spending total.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The target pot with and without guardrails is recorded, and the lowest guardrail spending year is checked against essential spending."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Define upper and lower guardrails and the size of each spending change"
                - "Build the guardrail rules into a copy of the model"
                - "Compare the target pot with and without guardrails"
                - "Check the lowest spending year stays above essential spending"
            - name: Pricing the essential floor with annuity quotes
              description: |-
                ## Purpose
                Annuity rates put a market price on guaranteed income, which gives a second way to size the essential part of the number. Getting indicative quotes for an inflation-linked income equal to your uncovered essential spending shows what the floor would cost to secure, a useful check on any figure built from withdrawal rates.

                ## Milestones
                1. The essential spending not covered by guaranteed income calculated.
                2. Indicative quotes for level and inflation-linked income of that amount obtained.
                3. The quoted cost compared with the pot implied by your withdrawal rate.
                4. The comparison recorded, with no commitment to buy.

                ## Notes
                This is a pricing exercise only. Whether to buy an annuity is a separate decision with its own work.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Indicative level and inflation-linked quotes for the uncovered essential income are recorded and compared with the withdrawal-rate pot."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate the essential spending not covered by guaranteed income"
                - "Get indicative level and inflation-linked annuity quotes for that income"
                - "Compare the quoted cost with the pot your withdrawal rate implies"
                - "Refresh the indicative quotes @recurring(yearly)"
            - name: Sensitivity analysis of each assumption
              description: |-
                ## Purpose
                Some assumptions barely move the number and others swing it by a third. Changing each input in turn by a plausible amount and ranking the results shows where accuracy matters, so effort goes into the spending estimate or return assumption that drives the outcome and not into ones that do not.

                ## Milestones
                1. A plausible low and high value set for each assumption in the register.
                2. The model rerun with each assumption at its low and high value, one at a time.
                3. The assumptions ranked by how far they move the number.
                4. The top three named on the one-page statement.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every assumption has been tested at a low and high value and ranked by effect, with the top three named on the one-page statement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set a plausible low and high value for every assumption"
                - "Rerun the model changing one assumption at a time"
                - "Rank the assumptions by how far they move the number"
                - "Ask the agent to chart the results as a ranked bar chart"
---

# Retirement Number Calculation

This area is for anyone who wants a real answer to how much is enough to stop working, whether retirement is thirty years away or five. It starts with the foundations (a spending baseline, a target age, an inventory of pots, the guaranteed income floor and a first model), then the routines that keep the number current, the ideas behind withdrawal rates and projections, the decisions that shape the figure, stress tests against crashes, inflation, early exit and the loss of a partner, the checkpoints on the way to the last day at work, situations that change the maths, and finally the specialist checks.

What repeats is a monthly spending log and contribution check, a quarterly progress check against the number, and a yearly recalculation with fresh statements, assumptions and prices. The Monthly budget and bills, Metrics log, Reading queue, Purchase decision and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
