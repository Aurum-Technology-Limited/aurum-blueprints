---
id: wealth-investing.financial-independence-early-retirement
name: Financial Independence & Early Retirement
description: "A route to making work optional: a real spending baseline and savings rate, an FI target built for a long horizon, a funded bridge to pension age, and the routines and exit plan that get you out on time."
category: personal
version: 1.0.0
tags: [wealth-investing, financial-independence-early-retirement, everyone, knowledge-worker, fire, savings-rate, bridge-fund, early-retirement]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - metrics-log
    - reading-queue
    - savings-goal
    - operational-checklist
    - risk-register
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Financial Independence & Early Retirement
          description: "Pursuing financial independence and early retirement with a high savings rate, clear target and plan for the years before pensions start."
          projects:
            - name: Your written reason for financial independence
              description: |-
                ## Purpose
                Financial independence asks for years of choices that look odd to colleagues, and the people who keep going usually know exactly what they are buying with the money. Writing down what you would stop doing, start doing and protect once work is optional turns a vague wish into a test every later decision can be held against. It also tells you whether you want to stop work entirely or simply want the option.

                ## Milestones
                1. A one-page note naming what you want time for, what you want to stop, and what you want to keep.
                2. A choice recorded between full early retirement, part-time work or simply having the option.
                3. A rough target age or year written down, even if it is a guess.
                4. The note shared with a partner or one trusted person, if you have one.

                ## Notes
                Keep the note short enough to reread in two minutes. You will come back to it at every yearly recalculation and every time you are tempted to drop the plan.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated one-page note stating your reason for FI, the form it takes and a first target age, shared with anyone it affects."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three sentences on what you would do with a Tuesday if work were optional"
                - "List the parts of your job you would keep if money were no object"
                - "Choose between full stop, step-down or option-only and record why"
                - "Put a first guess at a target age at the bottom of the note"
            - name: Twelve-month spending baseline from real transactions
              description: |-
                ## Purpose
                Every FI calculation multiplies your annual spending, so an estimate that is ten percent too low pushes the target out of reach without you noticing. Exporting a full year of bank and card transactions catches the irregular costs that monthly budgets forget: car repairs, gifts, annual subscriptions, holidays and the broken boiler. The result is the one number the rest of this area depends on.

                ## Milestones
                1. Twelve months of transactions exported from every current account and credit card.
                2. Transfers between your own accounts removed so nothing is counted twice.
                3. Spending grouped into ten to fifteen categories with an annual total for each.
                4. Irregular and one-off costs listed separately with a yearly average.
                5. A single annual spending figure written at the top of the sheet.

                ## Notes
                Start from the **Monthly budget and bills** template. Leave out pension contributions and investments; they are savings, not spending.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spreadsheet covering twelve months of real transactions with category totals and one annual spending figure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download twelve months of statements from each current account"
                - "Download twelve months of credit card statements"
                - "Remove transfers between your own accounts"
                - "Group every transaction into no more than fifteen categories"
                - "Add a line for irregular costs averaged over the year"
            - name: Savings rate formula fixed and first figure calculated
              description: |-
                ## Purpose
                Savings rate drives the timeline to financial independence more than investment returns do, yet people calculate it in ways that make month-to-month comparison meaningless. Deciding once whether you use gross or take-home pay, and whether employer pension contributions count, gives you a figure that only moves for real reasons.

                ## Milestones
                1. A written definition of savings rate, including what counts as income and what counts as saved.
                2. Employer contributions and pre-tax pension deductions handled in a stated way.
                3. Last month's savings rate calculated with that definition.
                4. The previous three months recalculated so you have a short trend.

                ## Notes
                Start from the **Metrics log** template. A common choice is take-home pay plus pension contributions as income, and everything invested or used to repay debt principal as saved. Pick one definition and do not switch.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written savings rate definition and four monthly figures calculated with it, recorded in a log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether your savings rate uses gross or take-home pay"
                - "Write down whether employer pension money counts as income and saving"
                - "Calculate last month's savings rate with that definition"
                - "Recalculate the three months before it for a short trend"
            - name: FI target sized for a retirement of 40 years or more
              description: |-
                ## Purpose
                Rules of thumb such as twenty-five times spending came from studies of thirty-year retirements, and someone stopping at 45 may need their money to last half as long again or more. Setting your target from your own spending baseline, a withdrawal rate chosen deliberately for a longer horizon and the new costs that start when salary stops gives a number you can plan around instead of one borrowed from a forum.

                ## Milestones
                1. Annual spending in early retirement estimated from your baseline, with work costs removed and new costs such as private health cover added.
                2. A withdrawal rate chosen for your expected horizon, with the reasoning written in a sentence.
                3. A target figure calculated, plus a version at a more cautious rate.
                4. Any income expected before pensions start, such as part-time work, written down separately and not netted off yet.

                ## Notes
                Treat the withdrawal rate as a planning assumption to revisit, not a promise. A regulated planner can test your figures if you want a second view.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An FI target recorded with the spending figure, withdrawal rate and horizon it rests on, plus a cautious alternative."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Remove commuting, work clothes and pension saving from the spending baseline"
                - "Add costs that start when salary stops, such as health cover"
                - "Choose a withdrawal rate for your horizon and note why"
                - "Calculate the target at your chosen rate and at a more cautious one"
            - name: FI-countable assets separated from everything you own
              description: |-
                ## Purpose
                Net worth flatters most FI plans because it includes the home you live in, the car and money locked away until pension age. Splitting what can actually pay for your life in early retirement from what cannot shows the real distance to the target. It also reveals whether too much of your wealth sits in accounts you cannot reach until your late fifties.

                ## Milestones
                1. Every asset listed with its current value and owner.
                2. Each one marked as FI-countable, later-life only, or not invested.
                3. A total for FI-countable assets and a separate total for later-life assets.
                4. A note on whether the split between the two looks lopsided for your target age.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of all assets with each marked by category and separate totals for FI-countable and later-life money."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every account, property and investment with today's value"
                - "Mark your home and cars as not counting towards the FI number"
                - "Tag pensions you cannot reach before your target age as later-life"
                - "Total the FI-countable assets and note the gap to your target"
            - name: Years-to-FI projection at three savings rates
              description: |-
                ## Purpose
                Seeing that a savings rate of 30 percent means roughly 28 years to independence while 50 percent means roughly 17 changes how a pay rise or a cheaper flat looks. Running your own figures at your current rate and two alternatives shows which levers matter for you and stops you chasing returns you cannot control.

                ## Milestones
                1. A simple projection built from your FI-countable assets, annual saving and target.
                2. Years to FI shown at your current savings rate and at two alternatives.
                3. A real return assumption stated after inflation, with a cautious and a central case.
                4. The one change that would most shorten the timeline identified.

                ## Notes
                Use real returns, after inflation, so the target stays in today's money. Projections are illustrations, not forecasts.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A projection showing years to FI at three savings rates under two return assumptions, with the biggest lever named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a sheet with assets, annual saving, target and a real return"
                - "Run the projection at your current savings rate"
                - "Run it again at five and ten points higher"
                - "Write down the single change that shortens the timeline most"
            - name: Map of when each account can be touched
              description: |-
                ## Purpose
                An early retiree with plenty of money can still run short if most of it sits in pensions that open at 55, 57 or later. Listing every account with the earliest age you can withdraw without penalty, and the tax that applies when you do, turns the target into a timeline with distinct stages. The gap between your planned stop date and your first pension access age is the problem the bridge fund solves.

                ## Milestones
                1. Every account listed with its earliest penalty-free access age under current rules.
                2. The tax treatment of withdrawals noted for each account.
                3. Your target stop age and each access age drawn on one timeline.
                4. The number of years between stopping work and first pension access written down.

                ## Notes
                Access ages change with legislation; record the source and the date you checked so the map can be updated.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page timeline showing each account's access age and the number of bridge years before the first pension opens."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each account type you hold, from pensions to ordinary investment accounts"
                - "Look up the minimum access age for each on official guidance"
                - "Note how withdrawals from each account are taxed"
                - "Draw the timeline from your stop date to state pension age"
            - name: Funding order for FI contributions
              description: |-
                ## Purpose
                Once the employer match is captured, each extra unit of saving has to choose between a pension that is tax-efficient but locked, a tax-free wrapper you can reach at any time, and a plain taxable account. Early retirees need money in the right places for each stage, not simply the most tax relief today. A written funding order, decided once, ends the monthly dithering.

                ## Milestones
                1. The employer match confirmed as fully captured.
                2. Each available account ranked for this year with the reason beside it.
                3. A target split between later-life and bridge money that matches your access map.
                4. The order written down with a date to revisit it.

                ## Notes
                Tax wrappers and allowances differ by country and change often; check current limits with the tax authority or a qualified adviser before relying on them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written ranking of accounts for new FI money with a target split between bridge and later-life savings."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm with payroll that you receive the full employer pension match"
                - "List this year's allowance for each wrapper you can use"
                - "Set a split between bridge money and later-life money from your access map"
                - "Write the funding order and file it with your FI notes"
            - name: Payday automation into investment accounts
              description: |-
                ## Purpose
                Money that sits in a current account until the end of the month tends to be spent, so the highest savings rates are usually automatic ones. Standing orders that leave on payday, in the funding order you chose, make saving the default and spending the deliberate act.

                ## Milestones
                1. Standing orders or direct debits set for each investment account, dated the day after payday.
                2. Amounts matching your funding order and target savings rate.
                3. Regular investment instructions set so cash is invested, not left idle.
                4. A buffer left in the current account large enough to avoid overdraft fees.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Automatic transfers leave on payday into every FI account and are invested without manual steps."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set a standing order for each FI account dated the day after payday"
                - "Switch on regular investing so transfers buy your chosen funds"
                - "Check the first month's transfers arrived and were invested"
                - "Check each standing order still matches your funding order @recurring(yearly)"
            - name: Monthly FI dashboard
              description: |-
                ## Purpose
                A single page showing FI-countable assets, savings rate, percentage of target reached and months of spending covered gives the plan a pulse you can check in ten minutes. Updated on the same day each month, it shows trends that one-off checks miss, such as a savings rate drifting down after a pay rise.

                ## Milestones
                1. A dashboard with four figures: FI assets, savings rate, percentage of target and months of spending covered.
                2. Twelve months of history kept on the same page.
                3. A fixed update day set and kept.
                4. A one-line comment written each month on what moved and why.

                ## Notes
                Start from the **Metrics log** template. Market swings will dominate the asset line for years; the savings rate is the figure you control.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The dashboard shows at least twelve consecutive monthly entries with a comment on each."
                cadence: rolling
              tasks:
                - "Set up the four-figure dashboard with columns for twelve months"
                - "Update FI assets and savings rate on the dashboard @recurring(monthly:4)"
                - "Write one line on what moved the numbers this month"
                - "Compare this month with the same month last year"
            - name: Monthly spending check against the FI budget
              description: |-
                ## Purpose
                Your FI target is only valid if spending stays near the figure it was built on. A short monthly look at actual spending against the plan catches creep while it is a few small subscriptions rather than a new standard of living. Twenty minutes is enough once the categories are set up.

                ## Milestones
                1. Actual spending compared with the planned figure each month.
                2. Any category more than ten percent over plan given a one-line reason.
                3. Subscriptions and memberships checked against what you actually used.
                4. The annual spending figure updated if an overspend has become permanent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly spending comparisons on file, each with overspends explained and any permanent change reflected in the target."
                cadence: rolling
              tasks:
                - "Compare this month's spending with the FI budget @recurring(monthly:19)"
                - "Write a reason beside any category more than ten percent over"
                - "Cancel one subscription you did not use this month"
                - "Raise the annual spending figure if a change is permanent"
            - name: Quarterly FI assumptions review
              description: |-
                ## Purpose
                Return, inflation and spending assumptions quietly go out of date, and a plan built on last year's numbers can be wrong by years. Checking each assumption once a quarter against what actually happened keeps the projected date honest without reacting to every market move.

                ## Milestones
                1. Each assumption listed with the value used and the date it was set.
                2. Actual inflation, spending and contributions for the quarter compared against them.
                3. Any assumption changed only with a written reason.
                4. The projected FI date updated and the change noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly review notes a year, each listing assumptions, actuals and any change to the projected FI date."
                cadence: rolling
              tasks:
                - "List every assumption your projection uses with its current value"
                - "Review assumptions against the quarter's actual figures @recurring(quarterly)"
                - "Change an assumption only after writing down the reason"
                - "Record the updated projected FI date"
            - name: Yearly FI date recalculation
              description: |-
                ## Purpose
                Once a year, with a full twelve months of real figures, the whole projection deserves a fresh run rather than another tweak. Recalculating spending, target, assets and savings rate from scratch shows whether the plan is ahead or behind, and whether the reason in your written note still holds.

                ## Milestones
                1. A new twelve-month spending figure taken from real transactions.
                2. The FI target recalculated from that figure.
                3. Years to FI rerun with current assets and savings rate.
                4. Your written reason for FI reread and confirmed or revised.
                5. The year's result written as one paragraph in your FI notes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A dated yearly recalculation of spending, target and FI date, with a one-paragraph summary filed each year."
                cadence: cyclic
              tasks:
                - "Export the last twelve months of transactions"
                - "Recalculate spending, target and FI date from scratch @recurring(yearly)"
                - "Reread your written reason for FI and update it if needed"
                - "Write a one-paragraph summary of the year's progress"
            - name: Pay rise and bonus capture rule
              description: |-
                ## Purpose
                Lifestyle creep usually arrives through pay rises rather than overspending, because a bigger salary quietly resets what feels normal. Agreeing in advance what share of every rise or bonus goes straight to investments lets you enjoy some of it and still pull the FI date forward. For knowledge workers whose pay climbs fastest in their thirties, this one rule can be worth several years.

                ## Milestones
                1. A written rule for the share of each pay rise and bonus that goes to investments.
                2. The rule applied to the most recent rise or bonus.
                3. Standing orders increased within a month of each rise.
                4. A yearly note of how much the rule moved into investments.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written capture rule exists and every pay rise or bonus in the year shows a matching increase in investment transfers."
                cadence: rolling
              tasks:
                - "Write the share of future pay rises and bonuses that will be invested"
                - "Apply the rule to your most recent rise or bonus"
                - "Increase standing orders within a month of any rise"
                - "Total what the capture rule invested this year @recurring(yearly)"
            - name: Thirty-day list for purchases above a set amount
              description: |-
                ## Purpose
                Big discretionary purchases do more damage to a savings rate than daily coffees, and most of them feel less urgent after a month. Putting anything above a set amount on a dated list and reviewing it monthly removes impulse without banning spending you will genuinely value.

                ## Milestones
                1. A threshold amount chosen and written at the top of the list.
                2. Every wanted item above the threshold added with its date and price.
                3. Items reviewed after thirty days and bought, delayed or dropped.
                4. A running total of what was dropped kept for the year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated wish list with a threshold, reviewed monthly, showing each item's outcome and a yearly total of purchases dropped."
                cadence: rolling
              tasks:
                - "Choose a threshold amount for the thirty-day rule"
                - "Add any wanted item above the threshold to the dated list"
                - "Review items older than thirty days and decide each one @recurring(monthly:12)"
                - "Total the money not spent on dropped items so far this year"
            - name: Annual challenge to housing, transport and food costs
              description: |-
                ## Purpose
                Housing, transport and food usually make up well over half of household spending, so a modest cut in one of them beats a year of small economies. Once a year, re-quoting the mortgage or rent, the car and the shopping pattern keeps the three largest lines honest.

                ## Milestones
                1. Current annual cost of housing, transport and food written down.
                2. At least one alternative priced for each.
                3. One change made or a written reason for keeping things as they are.
                4. The saving, if any, added to the investment transfers.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly note pricing alternatives for housing, transport and food, with one change made or declined in writing."
                cadence: cyclic
              tasks:
                - "Write down the annual cost of housing, transport and food"
                - "Price one alternative for each of the three @recurring(yearly)"
                - "Make one change or record why you are keeping each"
                - "Write the year's total saving in your FI notes"
            - name: Monthly money meeting for an FI household
              description: |-
                ## Purpose
                In couples and families, FI plans fail more often from quiet disagreement than from bad maths. A half-hour meeting each month to look at the dashboard, upcoming costs and anything either person is worried about keeps both people choosing the plan rather than one enforcing it.

                ## Milestones
                1. A fixed monthly slot agreed with your partner or household.
                2. A short standing agenda: dashboard, next month's costs, one worry each.
                3. Decisions from each meeting written in a shared note.
                4. Each person's personal spending allowance agreed and respected.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve meeting notes a year, each with decisions recorded and both partners' allowances confirmed."
                cadence: rolling
              tasks:
                - "Agree a fixed monthly time with your partner"
                - "Write a three-item standing agenda"
                - "Hold the monthly money meeting and note decisions @recurring(monthly:27)"
                - "Agree a no-questions personal spending allowance for each of you"
            - name: Monthly cash sweep into investments
              description: |-
                ## Purpose
                Cash piles up in current and savings accounts beyond what the emergency fund needs, and over a decade that idle money can cost more than any fund fee. A monthly sweep that moves anything above a set ceiling into the next account in your funding order keeps cash working without touching your buffer.

                ## Milestones
                1. A cash ceiling set for the current account and emergency fund.
                2. Surplus above the ceiling moved each month.
                3. Each sweep logged with its amount and destination.
                4. The ceiling rechecked when spending changes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cash ceiling written down and a log showing a monthly sweep of any surplus for at least six months."
                cadence: rolling
              tasks:
                - "Set a ceiling for your current account and emergency fund"
                - "Move any cash above the ceiling into your next FI account @recurring(monthly:9)"
                - "Log the amount swept and where it went"
                - "Recheck the ceiling whenever monthly spending changes"
            - name: Withdrawal rate research for retirements of 40 to 60 years
              description: |-
                ## Purpose
                Much of the popular early retirement maths rests on research into thirty-year retirements in one country's markets. Reading the main studies and their later extensions to longer horizons and other countries shows why many early retirees plan with a lower starting rate or flexible spending, and lets you judge forum claims for yourself.

                ## Milestones
                1. The original thirty-year withdrawal rate studies read and summarised in a paragraph.
                2. At least two later studies covering longer horizons or markets outside the US read.
                3. A note on how historical success rates change between 30, 40 and 50 year periods.
                4. Your own chosen rate reviewed in light of what you read.

                ## Notes
                Studies describe history, not guarantees. Use them to choose assumptions, and ask a qualified planner if you want them applied to your figures.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-page summary of at least three withdrawal rate studies, with a note on how they affect your chosen rate."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a summary of the original thirty-year withdrawal rate study"
                - "Find two studies that test periods of 40 years or longer"
                - "Note how success rates change as the horizon lengthens"
                - "Write a paragraph on whether your chosen rate still fits"
            - name: Sequence risk in the first decade without a salary
              description: |-
                ## Purpose
                Two retirees with the same average returns can end up decades apart if one meets a crash in year two and the other in year twenty. For early retirees the first ten years matter most, because there is no salary to top up the pot and the money has the longest to last. Understanding the mechanism makes buffers, flexible spending and part-time income easier to judge.

                ## Milestones
                1. A worked example showing the same returns in two different orders.
                2. Historical retirement start years known for poor outcomes noted.
                3. The main defences listed: cash buffer, spending flexibility, bonds and part-time income.
                4. One or two defences chosen for your own plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note with a worked sequence example and the defences you have chosen for your plan."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Build a ten-year example with the same returns in two different orders"
                - "Read about two historically difficult start years for retirees"
                - "List the defences against a bad first decade"
                - "Choose which defences your plan will use"
            - name: Early access rules for pensions and retirement accounts
              description: |-
                ## Purpose
                Most countries allow some route to retirement money before the normal age, such as a conversion ladder or substantially equal payments in the US, or a protected earlier pension age in the UK, each with strict conditions. Learning the rules that apply to you, and what they cost in tax and flexibility, can shrink the bridge fund you need. Getting a rule wrong can trigger penalties, so this is study first and action only after checking.

                ## Milestones
                1. The early access routes available in your country listed from official sources.
                2. The conditions, penalties and tax for each written in plain words.
                3. A note on which routes could fit your timeline.
                4. Any route you plan to use checked with a qualified adviser or the tax authority.

                ## Notes
                Rules change; record the date you checked each source.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dated note listing each early access route open to you, its conditions and costs, and whether you intend to use it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List early access routes from your tax authority's official guidance"
                - "Write the conditions and penalties for each in plain words"
                - "Mark which routes could fit your stop date"
                - "Recheck early access rules for changes @recurring(yearly)"
            - name: Flexible spending rules and guardrails
              description: |-
                ## Purpose
                A fixed inflation-adjusted withdrawal is simple but ignores what markets do, while guardrail methods cut spending a little after bad years and allow more after good ones. Learning two or three of these methods, and testing them against your own split between essential and discretionary spending, shows how much flexibility you can actually live with.

                ## Milestones
                1. Two or three flexible withdrawal methods summarised.
                2. Your spending split into essential and discretionary amounts.
                3. Each method tried on your figures across one good and one bad decade.
                4. A preferred method chosen with the cut you would accept in a bad year.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note comparing at least two flexible withdrawal methods on your figures, with your preferred one and its largest spending cut."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read about two guardrail or variable withdrawal methods"
                - "Split your spending into essential and discretionary"
                - "Test each method on a good decade and a bad one"
                - "Write down the largest cut you would accept in a bad year"
            - name: Tax on a low-salary early retirement income
              description: |-
                ## Purpose
                Early retirees often pay far less tax than workers, because income is drawn from several wrappers and tax-free allowances can be used every year. Understanding how your country taxes withdrawals, capital gains and dividends at low incomes shows how much you need to draw before tax and which allowances you could waste by leaving them unused.

                ## Milestones
                1. Personal allowances and bands relevant to a low income listed for your country.
                2. Tax treatment of pension, wrapper and taxable account withdrawals noted.
                3. An estimate of tax on your planned first-year income.
                4. Questions for a tax adviser written down where anything is unclear.

                ## Notes
                This is for understanding, not tax planning. Confirm anything you plan to act on with a qualified tax adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note estimating tax on your planned early retirement income by source, with open questions listed for an adviser."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the allowances and bands that apply at low incomes"
                - "Note how withdrawals from each wrapper are taxed"
                - "Estimate tax on your planned first year of withdrawals"
                - "Write questions for a tax adviser"
            - name: FI case studies read with a critical eye
              description: |-
                ## Purpose
                Blogs and books about early retirement are full of people who made it, few who went back to work, and many whose numbers rely on rental income, an inheritance or a paid-off home. Reading a dozen case studies and noting what each one had that you do not makes the community's optimism useful instead of misleading.

                ## Milestones
                1. A list of ten to twelve case studies from books, blogs or interviews.
                2. For each, spending, savings rate, years to FI and any special advantage noted.
                3. At least two stories of people who returned to work included.
                4. Three lessons you will apply and one you will ignore written down.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on at least ten case studies, including two who returned to work, with three lessons you will apply."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List ten case studies to read, including two who went back to work"
                - "Note each one's spending, savings rate and special advantages"
                - "Ask the agent to summarise the common advantages across your notes"
                - "Write three lessons to apply and one to ignore"
            - name: Lean, regular or fat FI target choice
              description: |-
                ## Purpose
                The FI community talks about lean FI on a tight budget, fat FI with room for comfort, and coast or barista FI where part-time work covers some costs. Pricing each version for your own household shows the trade between an earlier date and a more comfortable life, so you can choose deliberately.

                ## Milestones
                1. Annual spending priced for lean, regular and comfortable versions.
                2. Target and years to FI calculated for each.
                3. A part-time variant priced with realistic expected earnings.
                4. One version chosen and the reasons recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three priced versions of your FI target with years to reach each, and the chosen version recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Price a lean annual budget without cutting below essentials"
                - "Price a comfortable annual budget with the extras you value"
                - "Calculate the target and years to FI for each version"
                - "Record which version you are aiming for and why"
            - name: Health cover for the years before pensions and state support
              description: |-
                ## Purpose
                Leaving work often means losing employer health insurance, death in service and income protection, and in some countries health cover is the largest new cost an early retiree faces. Pricing replacement cover for each year until state support begins, and deciding what you can go without, belongs in the target before you leave, not after.

                ## Milestones
                1. Every benefit your employer currently provides listed with its value.
                2. Replacement quotes gathered for health, life and any other cover you would keep.
                3. A yearly cost added to your early retirement spending.
                4. A decision recorded on which benefits you will replace and which you will drop.

                ## Notes
                Where public health care is free at the point of use, the cost may be small; where it is not, this can decide the stop date. A specialist broker can help gather quotes.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A priced list of benefits to replace after leaving work, with the yearly cost included in the FI target."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every insurance and health benefit your employer provides"
                - "Get quotes for the cover you would keep after leaving"
                - "Add the yearly cost of replacement cover to your spending figure"
                - "Recheck replacement cover prices before each renewal @recurring(yearly)"
            - name: Bridge fund for the years before pensions open
              description: |-
                ## Purpose
                The bridge fund is the money that pays for life between your last salary and your first pension withdrawal, usually held in accessible tax-free wrappers and taxable accounts. Sizing it from your access map and spending figure, and giving it a target of its own, stops the common mistake of having enough in total but too little you can reach.

                ## Milestones
                1. The number of bridge years taken from your access map.
                2. A bridge fund target calculated with any part-time income netted off.
                3. The accounts that make up the bridge fund named.
                4. A separate monthly contribution to the bridge fund in place.
                5. Progress tracked against the bridge target as well as the overall target.

                ## Notes
                Start from the **Savings goal** template.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bridge fund target based on your access map, held in named accounts with a regular contribution and tracked separately."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count the years between your stop date and first pension access"
                - "Multiply bridge years by annual spending, less any expected earnings"
                - "Name the accounts that will hold the bridge fund"
                - "Check bridge fund progress against its own target @recurring(quarterly)"
            - name: Housing plan for early retirement
              description: |-
                ## Purpose
                Housing is the cost most likely to make or break an early retirement: a mortgage running past your stop date raises the target, while downsizing or moving can lower it by a large amount. Laying out where you will live and how it will be paid for, with numbers, settles a question that otherwise lingers for years.

                ## Milestones
                1. Housing costs at your stop date estimated for staying put.
                2. At least two alternatives priced, such as clearing the mortgage, downsizing or moving area.
                3. The effect of each option on the FI target and date calculated.
                4. A preferred housing plan chosen and noted with its timing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of at least three housing options with their effect on the FI target, and the preferred plan recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate your housing costs at your planned stop date"
                - "Price two alternatives, such as downsizing or clearing the mortgage"
                - "Calculate how each option changes the FI target"
                - "Write down the housing plan and when it would happen"
            - name: Cheaper place to live comparison
              description: |-
                ## Purpose
                Moving to a region or country with lower costs can cut years off the timeline, but the saving often shrinks once flights home, health cover, tax and visas are counted. Comparing two or three real places on full costs, and spending time in your top choice before deciding, keeps the idea grounded.

                ## Milestones
                1. Two or three candidate places chosen.
                2. Full annual costs estimated for each, including travel, health cover and tax.
                3. Residency or visa conditions noted for any place abroad.
                4. A trial stay of at least two weeks in the leading option planned or completed.
                5. A decision recorded to move, wait or drop the idea.

                ## Notes
                Cross-border tax and pensions are complex; speak to an adviser who works across both countries before committing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A full cost comparison of at least two places, a trial stay completed or booked, and a decision recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Shortlist two or three cheaper places you would genuinely live"
                - "Estimate full annual costs for each, including flights home"
                - "Note residency and visa rules for any place abroad"
                - "Book a trial stay of at least two weeks in the leading option"
            - name: Salary negotiation to shorten the FI date
              description: |-
                ## Purpose
                For a knowledge worker, a well-prepared pay negotiation can lift the savings rate more than a year of frugality, because the extra money arrives without any change to spending. Preparing market evidence, a target figure and a fallback ask before the next review turns a vague hope into a plan with a visible effect on the FI date.

                ## Milestones
                1. Market pay data for your role and level gathered from at least three sources.
                2. A target figure and a fallback ask, such as a higher pension contribution, written down.
                3. The conversation held at review or on a date you requested.
                4. The outcome recorded and the capture rule applied to any increase.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A negotiation held with market evidence, the outcome recorded, and any increase split by your capture rule."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Gather pay data for your role from three sources"
                - "Write a target figure and a fallback ask such as more pension"
                - "Ask the agent to draft a short case for your raise from your notes"
                - "Request a pay conversation with your manager"
            - name: Values-based spending audit
              description: |-
                ## Purpose
                Cutting everything evenly makes FI feel like deprivation, while cutting hard on what you do not care about and keeping what you love makes it sustainable. Scoring each spending category by how much it adds to your life, and moving money away from the low scorers, usually frees a meaningful sum without touching the things that matter.

                ## Milestones
                1. Each spending category scored from one to five for value to you.
                2. The three lowest-scoring categories with the most money in them identified.
                3. Specific cuts agreed for those three.
                4. The money freed redirected to investments.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every spending category scored, cuts agreed for the three lowest-value ones, and the saving added to investment transfers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Score each spending category from one to five for value"
                - "Pick the three low scorers with the most money in them"
                - "Agree a specific cut for each of those three"
                - "Add the money freed to your monthly investment transfer"
            - name: Part-time step-down versus a hard stop
              description: |-
                ## Purpose
                Many people reach FI and find they do not want to stop completely, while others discover that a few days of paid work a week would bring the date forward by years. Comparing a hard stop, a part-time role and freelance work on income, health cover, purpose and stress gives you a real choice rather than an all-or-nothing leap.

                ## Milestones
                1. Three options described: hard stop, part-time with your employer, and freelance or consulting.
                2. Income, benefits and hours estimated for each.
                3. The effect on the FI date calculated for each option.
                4. A preferred route chosen, with the conversation needed to start it named.

                ## Notes
                Read HR's flexible working policy before raising it with your manager; some employers allow phased retirement or reduced hours with pension still building.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of three ways of leaving full-time work with income and FI date effect for each, and a chosen route."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your employer's flexible and part-time working policy"
                - "Estimate income and benefits for part-time and freelance options"
                - "Calculate how each option changes your FI date"
                - "Choose a route and note who you would need to talk to"
            - name: Exit criteria to avoid one more year
              description: |-
                ## Purpose
                Plenty of people who reach their number never leave, because each year another bonus or market dip justifies one more. Writing the conditions under which you will hand in notice, while you are calm and still some way off, gives your future self permission to go.

                ## Milestones
                1. Three to five measurable conditions for leaving written down, such as target reached and bridge fund full.
                2. A margin of safety stated so you do not keep raising the bar.
                3. The conditions shared with a partner or friend who will hold you to them.
                4. A rule written for what happens if markets fall just before the date.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed note listing measurable exit conditions and a market-fall rule, shared with someone who will hold you to it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three to five measurable conditions for leaving work"
                - "State the safety margin you will accept and no more"
                - "Decide what you will do if markets fall just before the date"
                - "Share the conditions with someone who will hold you to them"
            - name: Halfway to FI checkpoint
              description: |-
                ## Purpose
                Reaching half your FI target is a natural moment to check the plan still fits your life, because compounding means the second half usually takes much less time than the first. A dated review at the halfway mark confirms the target and the date, and whether you want to change pace.

                ## Milestones
                1. The month you crossed half your target recorded.
                2. Projected time to the full target recalculated.
                3. Your written reason for FI reread.
                4. A decision made to keep pace, ease off or push harder.
                5. A small, planned celebration held within the budget.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A halfway review dated, with recalculated time to target and a recorded decision on pace."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record the month your FI assets passed half the target"
                - "Recalculate the years remaining to the full target"
                - "Decide whether to keep pace, ease off or push harder"
                - "Plan a celebration that fits the budget"
            - name: Coast FI point and what changes after it
              description: |-
                ## Purpose
                Coast FI is the point where existing investments, left alone, would grow to fund a normal-age retirement. Knowing when you reach it opens real options, from a lower-paid job you enjoy to a career break, because new saving then only needs to fund the early years.

                ## Milestones
                1. Your coast FI figure calculated for a normal retirement age.
                2. The date you reached it, or are expected to, recorded.
                3. Options that open at coast FI listed for your situation.
                4. A decision recorded on whether to change anything.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A coast FI figure calculated, the date reached recorded, and a decision noted on whether anything changes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate the sum that would grow to your later-life target unaided"
                - "Compare it with your later-life assets today"
                - "List the options coast FI would open for you"
                - "Record whether you will change anything once you reach it"
            - name: Twelve-month rehearsal on the retirement budget
              description: |-
                ## Purpose
                Living for a year on exactly the budget you plan to retire on, while still being paid, tests the spending figure against real life rather than a spreadsheet. Every unit of salary not needed goes to investments, so even a failed rehearsal shortens the timeline.

                ## Milestones
                1. The retirement budget set as your actual monthly spending limit.
                2. All salary above the budget sent to investments automatically.
                3. Each month's overspend and its cause recorded.
                4. After twelve months, the retirement budget confirmed or revised.
                5. Any missing costs added to the target.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Twelve months of spending recorded against the planned retirement budget, with the budget confirmed or revised at the end."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set your retirement budget as this month's spending limit"
                - "Send all salary above the budget straight to investments"
                - "Note any month you went over the rehearsal budget and why"
                - "Revise the retirement budget at the end of the year"
            - name: Leaving conversation with your employer
              description: |-
                ## Purpose
                How you leave affects unvested shares, bonuses, notice pay, references and the chance of returning as a contractor. Planning the timing around vesting and bonus dates, and preparing what you will say, protects money already earned and keeps doors open.

                ## Milestones
                1. Vesting, bonus and pension dates in the next eighteen months listed.
                2. A notice date chosen that forfeits as little as possible.
                3. Notice period, holiday owed and any garden leave terms checked in your contract.
                4. The conversation prepared, including whether to offer part-time or consulting work.
                5. Notice given and confirmed in writing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Notice given on a date chosen around vesting and bonus timings, with terms confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every vesting, bonus and pension date in the next eighteen months"
                - "Read your contract for notice, holiday and garden leave terms"
                - "Choose the notice date that forfeits the least"
                - "Write what you will say, including any offer of part-time work"
            - name: Leaving-work benefits and paperwork checklist
              description: |-
                ## Purpose
                Pensions get orphaned, share plans lapse and insurance quietly ends in the last weeks of a job. A checklist worked through before your last day makes sure every benefit is converted, transferred or replaced, and every document you will need later is saved.

                ## Milestones
                1. Workplace pension contact details, plan numbers and latest statements saved.
                2. Share plan exercise or sale deadlines after leaving noted and acted on.
                3. Group insurance conversion options checked before they expire.
                4. Final payslip, tax documents and references stored.
                5. Personal files and contacts moved off work devices.

                ## Notes
                Start from the **Operational checklist** template. Some group policies can be converted to personal cover without new medical questions, but only within a short window after leaving.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every item on the leaving checklist ticked before the last day, with pension, share plan and insurance details stored in one place."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Save pension plan numbers and the latest statement"
                - "Find the deadline to exercise or sell share awards after leaving"
                - "Ask HR which group insurance can be converted to personal cover"
                - "Store your final payslip and tax documents in your FI folder"
            - name: First year of early retirement plan
              description: |-
                ## Purpose
                Free time, missing structure and the first live withdrawals all arrive together in the first year without work, and many early retirees say it was harder than they expected. Planning the withdrawal mechanics, a loose weekly rhythm and a few anchoring commitments in advance makes the transition calmer.

                ## Milestones
                1. The first year's withdrawals scheduled from named accounts.
                2. A cash buffer of your chosen size in place before the last payslip.
                3. Three or four weekly anchors chosen, such as volunteering, a class or sport.
                4. Review dates set at three and twelve months.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first-year plan with scheduled withdrawals, a funded cash buffer and weekly anchors, reviewed at three and twelve months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Schedule the first twelve monthly withdrawals and the accounts that fund them"
                - "Fill your cash buffer before the last payslip"
                - "Choose three weekly anchors for the first months"
                - "Hold a short Monday planning session for the week @recurring(weekly:mon)"
            - name: Children's costs inside an early retirement plan
              description: |-
                ## Purpose
                Parents who retire early still face childcare, school trips, a growing food bill and possibly university help, and children's costs usually rise before they fall. A year-by-year schedule of these costs until each child is independent stops the target resting on a snapshot taken when the children were small.

                ## Milestones
                1. Expected costs for each child listed by age until independence.
                2. Any planned support for university or a first home stated as an amount.
                3. The schedule added to the projection as a separate stream.
                4. The FI target and date rechecked with children's costs included.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A year-by-year children's cost schedule to independence, included in the projection with the FI date recalculated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each child's expected costs by age until independence"
                - "Decide on an amount for any university or first home help"
                - "Add the schedule to your projection as a separate line"
                - "Recalculate the FI date with the children's costs included"
            - name: One partner retiring early while the other works
              description: |-
                ## Purpose
                When one partner stops and the other keeps working, questions arise about fairness, household roles, whose pension grows and who pays for what. Agreeing these openly, with numbers, avoids slow resentment and keeps both retirements funded.

                ## Milestones
                1. Each partner's planned stop date and reasons written down.
                2. Household costs and contributions agreed for the period on one income.
                3. Pension contributions for the partner who stops discussed and decided.
                4. Household roles for the stopped partner agreed and reviewed after six months.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written agreement covering stop dates, cost sharing, pension contributions and household roles, reviewed after six months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write each partner's planned stop date and reason"
                - "Agree how household costs are shared on one income"
                - "Decide whether to keep paying into the stopped partner's pension"
                - "Set a six-month check on how the arrangement feels"
            - name: High earner in an expensive city
              description: |-
                ## Purpose
                Knowledge workers in big cities often earn well and save little, because rent, childcare and social expectations rise with salary. Comparing your savings rate with the city's real costs, and pricing a move or a smaller home, shows whether the high salary is buying you independence or just a pricier standard of living.

                ## Milestones
                1. Your current savings rate compared with what your salary could support at lower costs.
                2. Your three largest city-driven costs listed with amounts.
                3. A remote, hybrid or relocation option priced.
                4. One structural change chosen or ruled out in writing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A note comparing your city costs with one priced alternative, and a recorded decision on a structural change."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the three biggest costs driven by living in the city"
                - "Ask your employer about remote or hybrid working options"
                - "Price the savings rate if you moved or downsized"
                - "Record whether you will make a structural change"
            - name: FI plan for a late start in your forties
              description: |-
                ## Purpose
                Starting the FI push at 40 or 45 means fewer years of compounding, but usually a higher income, cleared debts and a clearer idea of what you want. A plan that relies on a high savings rate, existing pensions and a realistic stop age in the mid to late fifties is often more achievable than late starters assume.

                ## Milestones
                1. Existing pensions and savings totalled and their access ages noted.
                2. A savings rate target that reflects your peak earning years.
                3. A stop age chosen that keeps the bridge period short.
                4. The plan reviewed by a qualified adviser if your situation is complex.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A late-start plan with a savings rate target, a stop age and a short bridge period, recorded in your FI notes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total existing pensions and savings with their access ages"
                - "Set a savings rate target for your peak earning years"
                - "Choose a stop age that keeps the bridge period short"
                - "Book a review with a planner if your situation is complex"
            - name: Single-income FI plan without a partner's backstop
              description: |-
                ## Purpose
                Single people pursuing FI carry every risk alone: no second income during illness, no shared housing costs and nobody else to notice if the plan drifts. A larger cash buffer, income protection while working and a named person who knows where everything is give the plan the safety a couple gets by default.

                ## Milestones
                1. A cash buffer size chosen for a single income.
                2. Income protection while working checked or arranged.
                3. Essential documents and an account list stored where a named person can find them.
                4. A trusted person briefed on what to do if you are incapacitated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A single-income safety plan with buffer size, income protection status and a briefed contact, stored with your FI documents."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide the size of a cash buffer for one income"
                - "Check whether you have income protection through work"
                - "Store your account list where a named person can find it"
                - "Review your buffer and protection cover @recurring(yearly)"
            - name: Purpose and weekly structure after full-time work
              description: |-
                ## Purpose
                Work supplies identity, routine, colleagues and a reason to get up, and early retirees who plan only the money often struggle with the loss of all four. Testing interests, communities and a weekly rhythm before you stop, through holidays, sabbatical weeks or evenings, means the time you have saved for already has a shape.

                ## Milestones
                1. What work currently gives you beyond money listed.
                2. Three activities or communities tried for at least a month each.
                3. A sample weekly rhythm written down.
                4. One meaningful commitment, such as volunteering, arranged for after you stop.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sample weekly rhythm and at least three activities trialled for a month each before your stop date."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List what your job gives you apart from money"
                - "Try one new activity or community for a month"
                - "Write a sample week for life after work"
                - "Review how your trial activities are going @recurring(monthly:22)"
            - name: Caring duties or health limits in the FI plan
              description: |-
                ## Purpose
                A parent who may need care, a long-term condition or a partner's health can change both when you stop and what you spend. Building these possibilities into the plan, with a cost range and a trigger for reviewing it, avoids a target that only works if nothing goes wrong.

                ## Milestones
                1. Known caring or health factors listed with likely timing.
                2. A range of possible extra costs estimated.
                3. The effect on the FI target and stop date calculated at the high end.
                4. A trigger set for revisiting the plan if circumstances change.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A note listing caring and health factors with a cost range, their effect on the target, and a review trigger."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List caring or health factors that could affect your plan"
                - "Estimate a low and high yearly cost for each"
                - "Recalculate the FI target at the high estimate"
                - "Write the event that would trigger a full plan review"
            - name: Ten-year withdrawal and tax plan for early retirees
              description: |-
                ## Purpose
                Which accounts you draw from in the first ten years decides how much tax you pay over the whole retirement, and early retirees on low income have a window to use allowances that later years may waste. A year-by-year plan showing source, amount and expected tax turns that window into a schedule.

                ## Milestones
                1. Withdrawals for each of the first ten years assigned to named accounts.
                2. Expected tax for each year estimated.
                3. Any yearly use of tax-free allowances or conversions included.
                4. The plan reviewed by a tax adviser before the first year begins.

                ## Notes
                This is a planning draft for discussion with a qualified adviser, not a tax decision in itself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-year schedule of withdrawals by account with estimated tax each year, reviewed by a tax adviser."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List each account and its expected value at your stop date"
                - "Assign withdrawals for each of the first ten years"
                - "Estimate tax for each year of the schedule"
                - "Update the withdrawal schedule with the year's actuals @recurring(yearly)"
            - name: Stress test against a bad first five years
              description: |-
                ## Purpose
                Before handing in notice it is worth knowing what happens if markets fall by a third in year one and inflation runs high for three years. Running your plan through a few severe historical and invented scenarios, and writing down the response you would make in each, turns fear into a prepared list of actions.

                ## Milestones
                1. At least three severe scenarios defined, including a large early fall and high inflation.
                2. Your plan run through each with the outcome recorded.
                3. A response written for each, such as spending cuts, part-time work or drawing on the buffer.
                4. The weakest point of the plan identified and one change made.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register with at least three severe scenarios, their outcomes and a written response to each, rerun each year."
                cadence: cyclic
              tasks:
                - "Define three severe scenarios for your first five years"
                - "Run your plan through each and record the outcome"
                - "Write the response you would make in each scenario"
                - "Rerun the stress test with updated figures @recurring(yearly)"
            - name: Return-to-work fallback plan
              description: |-
                ## Purpose
                Knowing you could earn again if needed is one of the strongest defences an early retiree has, but skills, networks and licences fade quickly. Keeping a short list of fallback roles, current contacts and any certifications to maintain keeps that option real for the first five to ten years.

                ## Milestones
                1. Two or three fallback roles you could realistically do listed.
                2. Licences or certifications needed for them kept current.
                3. Ten professional contacts kept in touch with.
                4. An up-to-date CV stored and ready.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fallback list of roles, current certifications and a CV refreshed in the last year, with contacts reached quarterly."
                cadence: rolling
              tasks:
                - "List two or three roles you could return to if needed"
                - "Note any licence or certification that must stay current"
                - "Contact a few people from your professional network @recurring(quarterly)"
                - "Refresh your CV with recent projects and dates"
            - name: Five-year recalibration after leaving work
              description: |-
                ## Purpose
                After a few years of early retirement, real spending, actual returns and how you like to live usually differ from what you planned. A deeper review every five years resets the withdrawal rate, spending, part-time work and later-life pension timing on evidence rather than on assumptions made while you were still employed.

                ## Milestones
                1. Actual spending and withdrawals for the period compared with the plan.
                2. Portfolio value compared with the projected path.
                3. Withdrawal rate and spending reset for the next five years.
                4. Later-life pension and state benefit timing rechecked.
                5. A written summary of what you would tell someone about to stop.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A five-yearly recalibration note comparing plan and actuals, with reset spending and withdrawal figures."
                cadence: cyclic
              tasks:
                - "Gather spending and withdrawal records since you stopped"
                - "Compare portfolio value with the path you projected"
                - "Reset the withdrawal rate and spending for the next five years"
                - "Recheck state pension forecasts and later-life pension dates"
---

# Financial Independence & Early Retirement

This area is for anyone, often a knowledge worker on a good salary, who wants work to become optional years before pension age and is willing to run a high savings rate to get there. It starts with foundations: your reason, a real spending baseline, a savings rate measured the same way every month, an FI target built for a long horizon and a map of when each account opens. Then come the monthly and yearly routines, the reading that sharpens the maths, decisions on health cover, the bridge fund, housing and stepping down, the dated moments around leaving work, plans for parents, couples, late starters and single people, and finally specialist work on withdrawals, stress tests and the years after you stop.

What repeats is a monthly dashboard, spending check, cash sweep, wish list review and household money meeting, a quarterly look at assumptions and bridge fund progress, and a yearly recalculation of the FI date with checks on costs, cover and the withdrawal schedule. The Monthly budget and bills, Metrics log, Reading queue, Savings goal, Operational checklist and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
