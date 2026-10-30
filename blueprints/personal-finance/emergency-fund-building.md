---
id: personal-finance.emergency-fund-building
name: Emergency Fund Building
description: "A target in months built from your real essential costs, an easy-access home for the money, automatic contributions, clear rules for using it and a plan to refill it afterwards."
category: personal
version: 1.0.0
tags: [personal-finance, emergency-fund-building, everyone, savings, cash-buffer, easy-access-account, resilience]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - savings-goal
    - risk-register
    - metrics-log
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Emergency Fund Building
          description: "Building a buffer of three to six months of essential costs in an accessible account, and refilling it after use."
          projects:
            - name: Essential monthly costs figure
              description: |-
                ## Purpose
                Every emergency fund target is a multiple of one number: what the household must spend in a month to keep a roof, power, food, transport and minimum debt payments going. Working it out from the last three months of statements, rather than guessing, usually lands well below total spending and makes the target feel reachable.

                ## Milestones
                1. Three months of bank and card statements gathered in one place.
                2. Every outgoing marked essential or optional, with essentials grouped into housing, utilities, food, transport, insurance, debt minimums and care.
                3. A single monthly essential costs figure written down, with the date it was worked out.
                4. The figure sense-checked against one tight month you have actually lived through.

                ## Notes
                Count minimum debt payments, not the amounts you usually overpay, and include essentials billed yearly divided by twelve. Leave out savings contributions; the fund does not need to cover them.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A dated monthly essential costs figure, built from three months of statements and split into at least six categories, is written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the last three months of statements for every current account and card"
                - "Mark each outgoing as essential or optional"
                - "Add yearly essentials divided by twelve to the monthly total"
                - "Write the final essential costs figure and today's date in your money notes"
            - name: Choosing a target of three, six or more months
              description: |-
                ## Purpose
                Three to six months of essential costs is the usual guide, but where you sit in that range depends on things you can list: how secure your income is, how many people rely on it, how long finding similar work tends to take in your field, and what sick pay or insurance would cover. Picking the multiple deliberately gives the fund a finish line you trust rather than one copied from an article.

                ## Milestones
                1. Your income security, dependants and likely job search time noted on one page.
                2. A multiple of months chosen, with one sentence on why.
                3. The target amount calculated from the essential costs figure.
                4. The target and its reasoning saved where you will see them at each review.

                ## Notes
                A common default is three months for a stable salaried job with no dependants, and six or more for single earners, the self-employed, contract workers and anyone with a health condition. Treat these as starting points to discuss with a free money guidance service if you are unsure.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target expressed as a number of months and an amount, with a written reason for the multiple chosen, is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your income sources and how secure each one feels"
                - "Note how long people in your line of work usually take to find a new role"
                - "Choose a multiple of months and write one sentence explaining it"
                - "Multiply your essential costs figure by that multiple to set the target"
            - name: Starter buffer of one month's essentials
              description: |-
                ## Purpose
                A full six-month fund can take years, and most emergencies are smaller: a car repair, a boiler call-out, a broken phone, a dental bill. Reaching one month of essential costs first means those everyday shocks stop landing on a credit card, and the early win makes the longer build feel possible.

                ## Milestones
                1. A starter target of one month's essential costs, or a fixed smaller sum if money is very tight, written down.
                2. Contributions running into the fund every payday.
                3. The starter target reached and the date noted.
                4. The next milestone, usually three months of essentials, set straight away.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The fund holds at least one month of essential costs, with the date it was reached recorded and the next milestone set."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the starter buffer amount next to your full target"
                - "Move whatever you can spare today into the fund to open it"
                - "Note the date the starter buffer is reached"
                - "Set three months of essentials as the next milestone"
            - name: Monthly contribution figure from the current budget
              description: |-
                ## Purpose
                A target only becomes a plan when there is a monthly amount and a finish date attached. Finding that amount in the current budget, by trimming one or two categories or redirecting money that already goes somewhere less important, tells you whether the fund takes one year or four, and lets you decide whether that is acceptable.

                ## Milestones
                1. Current monthly income and spending laid side by side.
                2. A monthly contribution chosen that the budget can genuinely sustain.
                3. Months to the starter buffer and to the full target calculated.
                4. Any category trimmed to fund the contribution named, with its new limit written down.

                ## Notes
                Start from the **Monthly budget and bills** template. A smaller amount that never gets skipped beats a larger one that is reversed every other month.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A monthly contribution amount is set, with the months to the starter buffer and to the full target calculated and written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Lay out last month's income and spending in the budget template"
                - "Pick a contribution amount you could keep up even in a bad month"
                - "Divide the target by the contribution to see how many months it takes"
                - "Name the category you will trim to free the money"
            - name: Choosing an easy-access home for the fund
              description: |-
                ## Purpose
                The fund needs to be reachable within a day or two, earning a fair rate, and separate enough from the current account that it is not spent by accident. Comparing a handful of easy-access savings accounts on rate, withdrawal rules and transfer speed, ideally at a different bank from your everyday account, settles where the money will live for years.

                ## Milestones
                1. Three to five easy-access accounts compared on rate, withdrawal limits, transfer speed and whether any bonus rate expires.
                2. One account chosen, with the reason recorded.
                3. The account opened and linked to your current account.
                4. A test transfer made in both directions.

                ## Notes
                Watch for accounts that cap the number of withdrawals a year or drop to a much lower rate after a bonus period. Notice accounts and fixed terms are poor homes for the first months of a fund.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The fund sits in an easy-access account chosen from at least three compared options, with a test withdrawal completed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three easy-access savings accounts from a comparison site"
                - "Compare withdrawal limits, transfer times and any bonus expiry date"
                - "Open the chosen account and link it to your current account"
                - "Send a small test transfer out and back"
            - name: Deposit protection check for the fund account
              description: |-
                ## Purpose
                Most countries guarantee savings up to a limit if a bank fails, but the limit usually applies per banking licence, and several brands can share one licence. Checking that the fund, plus anything else you hold with the same group, sits under the limit takes ten minutes and removes a rare but serious risk.

                ## Milestones
                1. Your country's deposit guarantee limit and the scheme that runs it noted.
                2. The banking licence behind the fund's account confirmed.
                3. Total savings held under that licence added up.
                4. Money moved if the total is above the limit, or the remaining headroom noted.

                ## Notes
                Some savings apps hold money with partner banks or in funds that deposit protection does not cover. Read where the money actually sits.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The fund's banking licence and protection limit are recorded, and total savings under that licence are confirmed to be within the limit."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your country's deposit guarantee scheme and its limit"
                - "Find which banking licence the fund's account sits under"
                - "Add up all your savings held under that licence"
                - "Write the headroom under the limit in your money notes"
            - name: Written rules for what counts as an emergency
              description: |-
                ## Purpose
                Funds rarely fail because of one disaster; they drain slowly through holidays, sales and things that felt urgent at the time. Three short questions agreed in advance, such as whether a cost is unexpected, necessary and urgent, give you something to check against when tempted, and make it easier to say no to yourself or a partner.

                ## Milestones
                1. A one-paragraph definition of an emergency for your household.
                2. Three test questions every withdrawal must pass.
                3. A short list of examples that do and do not qualify.
                4. The rules agreed with anyone else who can access the fund.

                ## Notes
                Lost income, urgent health or dental costs, essential home or car repairs and emergency travel to family usually qualify. Planned purchases, annual bills and gifts usually do not, however sudden they feel.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written emergency definition with three test questions and examples is saved and agreed by everyone who can withdraw from the fund."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write three questions a withdrawal must pass"
                - "List five examples that qualify and five that do not"
                - "Save the rules where you will see them before moving money"
                - "Talk the rules through with anyone who shares the fund"
            - name: Predictable costs moved out of the emergency fund
              description: |-
                ## Purpose
                Car servicing, annual insurance, school trips and the December spike are irregular, not unexpected, and when they are paid from the emergency fund it never seems to grow. Listing the predictable irregular costs of the past year, and giving them a home elsewhere, leaves the fund for the things nobody can schedule.

                ## Milestones
                1. A list of every irregular but predictable cost from the past twelve months.
                2. Each one marked with its rough yearly amount and the month it lands.
                3. Those costs assigned to a separate savings pot or the monthly budget.
                4. The emergency rules updated to name them as out of scope.

                ## Notes
                This project only draws the line. Setting up and filling separate pots for these costs is the job of a sinking funds plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "At least eight predictable irregular costs are listed with yearly amounts and assigned somewhere other than the emergency fund."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Scan the past year's statements for irregular costs you could have predicted"
                - "Note each cost's yearly amount and the month it lands"
                - "Assign each one to a separate pot or the monthly budget"
                - "Add the list to your emergency rules as costs the fund does not pay"
            - name: Automatic payday transfer into the fund
              description: |-
                ## Purpose
                Saving what is left at the end of the month usually means saving nothing. A standing order that leaves the current account the day after pay arrives makes the contribution the first bill paid, and once set up it needs no willpower at all.

                ## Milestones
                1. A standing order set for the day after payday for the agreed contribution.
                2. A payment reference chosen so the transfer is easy to spot.
                3. Three consecutive transfers arrived without being cancelled or reversed.
                4. The transfer date moved whenever your payday changes.

                ## Notes
                If income lands on different days, set the transfer for the latest likely payday rather than the earliest.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A standing order into the fund has run on payday for three consecutive months without being cancelled."
                cadence: rolling
              tasks:
                - "Set up a standing order for the day after payday"
                - "Give the payment a reference that is easy to spot on statements"
                - "Confirm the payday transfer landed in the fund @recurring(monthly:3)"
            - name: Fund progress tracker
              description: |-
                ## Purpose
                Watching a balance rise is one of the few rewards saving offers, and a simple tracker shows progress in months of cover rather than just a number. It also keeps the history you need at each review: when you added, when you withdrew and why.

                ## Milestones
                1. A tracker with columns for date, balance, months of cover, contributions and withdrawals.
                2. The starter and full targets shown as milestones.
                3. The current balance and months of cover filled in.
                4. A chart or progress line showing the trend.

                ## Notes
                Start from the **Savings goal** template. Months of cover is the balance divided by your essential costs figure.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracker shows the current balance, months of cover and both targets, with at least one dated entry."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a savings goal page for the emergency fund"
                - "Add the starter and full targets as milestones"
                - "Enter today's balance and work out months of cover"
                - "Add a column for withdrawals and their reasons"
            - name: Monthly fund check-in
              description: |-
                ## Purpose
                Ten minutes a month is enough to notice a missed transfer, an unplanned withdrawal or a rate cut before it costs months of progress. Keeping the check-in on a fixed day, after the payday transfer has landed, turns it into a short routine rather than an occasional worry.

                ## Milestones
                1. A fixed check-in day in the calendar.
                2. Each month's balance and months of cover added to the tracker.
                3. Any shortfall against the plan explained in one line.
                4. Twelve consecutive check-ins completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly check-ins are recorded in the tracker, each with the balance and months of cover."
                cadence: rolling
              tasks:
                - "Choose a check-in day a few days after payday"
                - "Record the fund balance and months of cover in the tracker @recurring(monthly:12)"
                - "Write one line explaining any month that fell short"
            - name: End-of-month leftover sweep
              description: |-
                ## Purpose
                Many months end with money still in the current account that quietly gets absorbed into the next month's spending. Sweeping anything above a small cushion into the fund just before payday adds to the build without touching the budget, and in a good year it can add a whole month of cover.

                ## Milestones
                1. A current account cushion chosen, enough to cover payments that land before pay.
                2. A sweep made in the last days before each payday.
                3. Sweep amounts recorded separately in the tracker.
                4. A year's total of swept money added up.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Leftover money above the chosen cushion has been swept into the fund in at least nine of the last twelve months."
                cadence: rolling
              tasks:
                - "Choose the cushion to leave in the current account before payday"
                - "Move anything above the cushion into the fund @recurring(monthly:28)"
                - "Mark sweeps separately from regular contributions in the tracker"
            - name: Windfall split rule for small extra money
              description: |-
                ## Purpose
                Tax refunds, overtime, a small bonus, birthday money or the proceeds of selling something tend to vanish because nobody decided in advance what they were for. A fixed split, for example half to the fund until it is full, means extra money speeds the build while still leaving some to enjoy.

                ## Milestones
                1. A split agreed for unexpected extra money.
                2. The kinds of money it applies to listed.
                3. The rule applied to the next three windfalls.
                4. The split revisited once the fund reaches its target.

                ## Notes
                Large windfalls such as an inheritance deserve their own decision rather than a standing rule.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written windfall split is in place and has been applied to every windfall received in the past six months."
                cadence: rolling
              tasks:
                - "Decide what share of extra money goes to the fund"
                - "List the kinds of money the rule covers"
                - "Apply the split to any extra money received this quarter @recurring(quarterly)"
            - name: Withdrawal log for every use of the fund
              description: |-
                ## Purpose
                Each withdrawal tells you something: what kind of emergency happens to your household, how big it was and how long the refill took. A one-line entry every time the fund is used builds the evidence for the next target review and shows whether the emergency rules are holding.

                ## Milestones
                1. A log with date, amount, reason and whether it passed the emergency rules.
                2. Every withdrawal of the past year entered.
                3. A planned refill date recorded against each withdrawal.
                4. Patterns from the log noted at the annual review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every withdrawal in the past twelve months is logged with amount, reason and a refill date."
                cadence: rolling
              tasks:
                - "Add a withdrawal log to the fund tracker"
                - "Enter any withdrawals from the past year you can find on statements"
                - "Write the reason and a refill date each time money leaves the fund"
                - "Flag any withdrawal that did not pass the emergency rules"
            - name: Refill plan after using the fund
              description: |-
                ## Purpose
                Using the fund without refilling it leaves only half a system, and the next shock often arrives before the last one has been paid back. Agreeing in advance how a withdrawal gets refilled, with a temporary higher contribution and a target date, means using the fund is a plan rather than a setback.

                ## Milestones
                1. A default refill rule written, such as doubling contributions until the balance is restored.
                2. Any spending that pauses during a refill named.
                3. The refill rule applied to the latest withdrawal, with a target date.
                4. The fund back at its pre-withdrawal balance by that date.

                ## Notes
                If the emergency also cut your income, start the refill only once income is back. Rebuilding while still short is how people end up borrowing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "After the most recent withdrawal, the fund was restored to its previous balance by the refill date written at the time."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a default refill rule for after any withdrawal"
                - "Name one optional spending category to pause during a refill"
                - "Raise the standing order temporarily after the next withdrawal"
                - "Return the standing order to normal once the balance is restored"
            - name: Quarterly essential costs recalculation
              description: |-
                ## Purpose
                Rent rises, new energy tariffs, a car loan or a new baby can push essential costs up quietly, leaving a fund that looked complete covering four months instead of six. Recalculating the essential costs figure each quarter keeps the target honest without a full budget overhaul.

                ## Milestones
                1. Essential costs recalculated from the latest quarter's statements.
                2. The new figure compared with the old one and the change noted.
                3. The target adjusted if the figure has moved by more than a small margin.
                4. Contributions changed if the new target needs a different finish date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly recalculations are completed in a year, each recording the essential costs figure and any change to the target."
                cadence: cyclic
              tasks:
                - "Recalculate essential costs from the last three months of statements @recurring(quarterly)"
                - "Compare the new figure with the previous one"
                - "Adjust the target and contribution if essentials have risen"
            - name: Contribution step-up on each pay rise
              description: |-
                ## Purpose
                Pay rises are the easiest time to save more, because the money was never spent. Directing a fixed share of each rise to the fund, before lifestyle catches up, shortens the build without any felt cut in spending.

                ## Milestones
                1. A rule set for what share of each pay rise goes to the fund.
                2. The standing order raised within a month of the next rise.
                3. The new finish date worked out.
                4. The step-up repeated at each annual pay change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The standing order has been increased within a month of each pay rise in the past two years."
                cadence: cyclic
              tasks:
                - "Decide what share of each pay rise will go to the fund"
                - "Note the month your pay is usually reviewed"
                - "Raise the standing order after each annual pay change @recurring(yearly)"
            - name: Yearly interest rate check on the fund account
              description: |-
                ## Purpose
                Easy-access rates are variable and banks often cut them quietly, so an account that was competitive when opened can be paying a fraction of the going rate two years later. A yearly look at what the fund earns against the best easy-access accounts is enough to catch the drift.

                ## Milestones
                1. The fund's current rate recorded with the date.
                2. The rate compared with three leading easy-access accounts.
                3. A move made if the gap is worth the effort, with a test transfer first.
                4. The new rate and date updated in the tracker.

                ## Notes
                Move only to another easy-access account. Chasing a higher fixed rate defeats the purpose of the fund.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The fund's rate has been compared with the market within the last twelve months and the result recorded."
                cadence: cyclic
              tasks:
                - "Write down the fund account's current interest rate and date"
                - "Compare it with three leading easy-access rates @recurring(yearly)"
                - "Move the fund if the gap is worth the paperwork"
            - name: Annual emergency fund review
              description: |-
                ## Purpose
                Once a year the whole set-up deserves a proper look: is the target still the right multiple, did the rules hold, how many withdrawals were there and how fast were they refilled? An hour with the tracker and withdrawal log, ideally with anyone who shares the fund, decides the next year's numbers.

                ## Milestones
                1. The year's withdrawals, refills and contributions summarised.
                2. The target multiple confirmed or changed in light of any life changes.
                3. The emergency rules updated if they were tested.
                4. Next year's contribution and milestones written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual review is recorded with the year's summary, the confirmed target and next year's contribution."
                cadence: cyclic
              tasks:
                - "Book an hour for the annual fund review @recurring(yearly)"
                - "Summarise the year's contributions, withdrawals and refills"
                - "Confirm or change the target multiple"
                - "Write next year's contribution amount and milestones"
            - name: Access drill for moving fund money in a day
              description: |-
                ## Purpose
                An emergency is a bad time to discover a forgotten password, a new-payee hold or a daily transfer limit. Practising a real withdrawal once a year, and noting how long the money took to arrive, proves the fund can do its job when it matters.

                ## Milestones
                1. Login details for the fund stored in a password manager.
                2. Transfer limits and processing times for the account noted.
                3. A real transfer to the current account made and timed.
                4. Any problem found fixed before the next drill.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A timed test withdrawal from the fund has been completed within the last twelve months, with limits and arrival time noted."
                cadence: cyclic
              tasks:
                - "Store the fund's login details in your password manager"
                - "Look up the account's daily transfer limit"
                - "Move a small sum to your current account and time its arrival @recurring(yearly)"
            - name: How easy-access savings rates really work
              description: |-
                ## Purpose
                Headline rates hide details that matter for an emergency fund: bonus rates that expire after a year, withdrawal caps that drop the rate, interest paid monthly or yearly, and the difference between the gross rate and AER. Understanding these once makes every future account choice quicker and less likely to cost you.

                ## Milestones
                1. AER, gross rate and bonus rate explained in your own words.
                2. The withdrawal and bonus conditions on your fund account read in full.
                3. The date any bonus rate ends written in your calendar.
                4. A one-page note of what to check before opening any savings account.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page checklist of savings account terms exists, and the fund account's bonus end date, if any, is in the calendar."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the key facts document for your fund account"
                - "Look up what AER means and how it differs from the gross rate"
                - "Put the end date of any bonus rate in your calendar"
                - "Write a one-page checklist for comparing savings accounts"
            - name: Inflation and the shrinking buffer
              description: |-
                ## Purpose
                Prices rising faster than the interest earned mean a fund that covered six months three years ago may cover only five today. Understanding how inflation eats into cash, and comparing your fund's rate with the latest inflation figure, explains why the target needs revisiting even when nothing in your life has changed.

                ## Milestones
                1. The latest published inflation rate found and noted.
                2. The fund's rate compared with it to see the real return.
                3. Months of cover today compared with months of cover when the target was set.
                4. A note on how often the target should be refreshed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of the fund's interest rate with current inflation, and of months of cover then and now, is saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your country's latest published inflation rate"
                - "Compare it with the interest rate on the fund"
                - "Work out months of cover at today's essential costs"
                - "Note how far the target has drifted since you set it"
            - name: Tax on savings interest, recorded each year
              description: |-
                ## Purpose
                As a fund grows and rates rise, the interest it earns can pass the tax-free amount in some countries, and the tax authority may expect it declared or may adjust your tax code. Recording the interest each tax year and checking it against any allowance avoids an unexpected bill later.

                ## Milestones
                1. The rules on tax-free savings interest where you live found and summarised.
                2. Interest earned on all savings in the last tax year added up.
                3. The total compared with any allowance.
                4. A note made of whether action is needed, checked against the tax authority's guidance or with an adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The past tax year's savings interest is totalled and compared with the allowance, with any action needed noted."
                cadence: cyclic
              tasks:
                - "Look up the tax rules on savings interest where you live"
                - "Download the annual interest statement for each savings account"
                - "Add up all savings interest after each tax year ends @recurring(yearly)"
                - "Check the tax authority's guidance if the total is near the allowance"
            - name: True cost of borrowing instead of saving
              description: |-
                ## Purpose
                Without a buffer, the usual fallbacks are an overdraft, a credit card, a loan from family or, worst of all, a high-cost short-term loan. Working out what a typical emergency would cost through each route shows in plain numbers what the fund is saving you, and which fallback to avoid if the fund is ever short.

                ## Milestones
                1. The cost of borrowing a typical emergency sum for three months worked out for an overdraft, a credit card and a short-term loan.
                2. The cheapest and most expensive routes identified.
                3. A written rule for what to do if an emergency is bigger than the fund.
                4. A free debt advice service's contact details saved.

                ## Notes
                If you are already borrowing to pay for essentials, speak to a free debt advice service before building a fund.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of three borrowing routes for the same sum exists, with a fallback rule and a free debt advice contact saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a typical emergency sum such as a car repair"
                - "Work out three months of interest and fees on your overdraft and credit card"
                - "Look up the typical cost of a short-term loan for the same sum"
                - "Save the contact details of a free debt advice service"
            - name: Making the fund harder to raid on impulse
              description: |-
                ## Purpose
                Money that sits one tap away from the current account is easy to borrow from for things that are not emergencies. A little deliberate friction, such as an account at a different bank, no debit card, a nickname that says what it is for and no app on the home screen, keeps the fund intact without making it slow to reach in a genuine crisis.

                ## Milestones
                1. The fund held at a different bank from the everyday account, or in a pot hidden from the main balance.
                2. No card attached to the fund account.
                3. The account nicknamed after its purpose.
                4. Three months passed with no impulse transfers out.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The fund has no linked card, a purpose-based nickname and has gone three months without a withdrawal that broke the emergency rules."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Rename the account with a nickname that states its purpose"
                - "Cancel or decline any card offered on the fund account"
                - "Hide the fund balance from your main banking app view"
                - "Move the savings app off your phone's home screen"
            - name: Why the emergency fund stays in cash
              description: |-
                ## Purpose
                Once a fund grows, it is tempting to move it somewhere that might earn more, such as shares or a fixed-term bond. Understanding why emergency money usually stays in easy-access cash, because markets can fall at the same time as jobs are lost and fixed terms cannot be broken cheaply, helps you hold the line or make an informed exception with a regulated adviser.

                ## Milestones
                1. The main reasons for holding the fund in cash written in your own words.
                2. The difference between emergency money and long-term savings noted.
                3. A clear boundary drawn between the fund and any investments.
                4. Any idea of moving part of the fund discussed with a regulated adviser before acting.

                ## Notes
                This is organisational context, not investment advice. Decisions about investing belong with a regulated financial adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written note explains why the fund is held in cash and marks the boundary between the fund and any investments."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your money guidance service's explanation of cash versus investments"
                - "Write three reasons the fund stays in easy-access cash"
                - "List which of your savings are emergency money and which are long-term"
                - "Book a session with a regulated adviser before moving any of the fund"
            - name: Costing the emergencies most likely to hit you
              description: |-
                ## Purpose
                Not every household faces the same shocks: a renter will not pay for a new boiler but may face a short-notice move, a dog owner faces vet bills, and someone with an old car faces a gearbox. Pricing the five most likely emergencies for your life shows whether the starter buffer is big enough and which shocks need insurance instead.

                ## Milestones
                1. A list of the five emergencies most likely to hit your household in the next two years.
                2. A realistic cost for each, from quotes or published averages.
                3. The largest single cost compared with the starter buffer.
                4. Any shock the fund could not cover marked for an insurance conversation.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five likely emergencies are listed with realistic costs, and the starter buffer is confirmed to cover the largest single one or adjusted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the five shocks most likely to hit your household"
                - "Find a realistic cost for each from quotes or published averages"
                - "Compare the largest cost with your starter buffer"
                - "Mark any shock too big for the fund to raise at your next insurance renewal"
            - name: Order of priorities across buffer, debts and goals
              description: |-
                ## Purpose
                Building a fund while carrying expensive debt, or while missing an employer pension match, can cost more than it protects. A common sequence is a starter buffer first, then high-interest debt, then the full fund alongside other goals, but the right order depends on your debts, income and contract, so it is worth writing yours down once.

                ## Milestones
                1. All debts listed with balance, interest rate and minimum payment.
                2. Any employer pension match you might be missing checked.
                3. An order of priorities written, from starter buffer to long-term goals.
                4. Monthly amounts assigned to each priority in that order.

                ## Notes
                The order here is organisational. If debts feel unmanageable, a free debt advice service can help set priorities before you save.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written order of priorities covering the fund, each debt and other goals exists, with monthly amounts assigned."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every debt with its balance, rate and minimum payment"
                - "Check whether your employer matches pension contributions"
                - "Write your order of priorities from starter buffer to long-term goals"
                - "Assign a monthly amount to each priority in that order"
            - name: Ninety-day sprint to the starter buffer
              description: |-
                ## Purpose
                Some people would rather sprint than drip-feed, especially after a scare. Committing ninety days to two temporary cuts and one extra source of income, with every saving sent straight to the fund, can build a month of essentials far faster than the standard contribution and creates momentum for the rest.

                ## Milestones
                1. Two temporary spending cuts and one extra income idea chosen, each with an expected monthly amount.
                2. A sprint start and end date set.
                3. Every sprint saving transferred to the fund within a week.
                4. The sprint total compared with the expected amount at the end of ninety days.

                ## Notes
                Pick cuts you can genuinely live with for three months. A sprint that collapses in week three teaches the wrong lesson.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A ninety-day sprint is completed with every saving transferred to the fund and the total recorded against the expected amount."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose two spending cuts you can keep for ninety days"
                - "Pick one way to earn extra money during the sprint"
                - "Transfer each sprint saving to the fund within a week of making it"
                - "Add up the sprint total on day ninety"
            - name: Fund ceiling and overflow rule
              description: |-
                ## Purpose
                Beyond its target, a fund is money held back from other goals and earning only easy-access interest. Setting a ceiling slightly above the target, and deciding in advance where the overflow goes, means the standing order can be redirected the moment the fund is full.

                ## Milestones
                1. A ceiling amount set, a little above the full target.
                2. The overflow destination chosen, such as debt, a home deposit or long-term savings.
                3. The standing order redirected when the fund reaches the ceiling.
                4. A quarterly check that the balance has not drifted far above the ceiling.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written ceiling and overflow destination exist, and the fund has stayed within its ceiling for the past two quarters."
                cadence: rolling
              tasks:
                - "Set a ceiling amount slightly above your full target"
                - "Choose where contributions go once the fund is full"
                - "Check whether the balance is above the ceiling @recurring(quarterly)"
            - name: Insurance excesses the fund must cover
              description: |-
                ## Purpose
                Every insurance claim starts with an excess you pay yourself, and some policies only pay out after a waiting period. Listing every excess and waiting period across your policies shows the minimum the fund must hold, and whether a higher excess for a cheaper premium would be safe given the fund you have.

                ## Milestones
                1. Every policy's excess and any waiting period listed.
                2. The largest single excess, and the total if two claims landed together, worked out.
                3. The fund confirmed to cover at least the largest excess.
                4. Any change to an excess considered at the next renewal, with the fund in mind.

                ## Notes
                Choosing cover itself belongs to an insurance review. This project only makes sure the fund and the policies fit together.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of all insurance excesses and waiting periods exists and the fund covers at least the largest excess."
                cadence: cyclic
              tasks:
                - "List the excess and waiting period on every insurance policy you hold"
                - "Find the largest single excess and the total for two claims"
                - "Check the fund covers the largest excess"
                - "Recheck excesses when each policy renews @recurring(yearly)"
            - name: Small cash reserve kept at home
              description: |-
                ## Purpose
                Card systems go down, power cuts stop contactless payments and storms close roads, and on those days a little physical cash pays for food, fuel or a taxi. Deciding how much to keep, where, and in what notes, separately from the main fund, covers a gap the bank account cannot.

                ## Milestones
                1. An amount chosen for a few days of essentials, kept modest.
                2. A discreet, secure storage place agreed with the household.
                3. The home insurance limit on cash checked.
                4. The reserve counted and refreshed once a year.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A modest home cash reserve is in place, within the insurance limit for cash, and has been checked in the last year."
                cadence: cyclic
              tasks:
                - "Decide how much cash would cover three days of essentials"
                - "Check the home insurance policy's limit on cash"
                - "Choose a secure place and tell one other adult where it is"
                - "Count the reserve and replace any spent notes @recurring(yearly)"
            - name: Keep or close a credit backstop
              description: |-
                ## Purpose
                While the fund is still small, many people keep a credit card or arranged overdraft as a backstop for an emergency bigger than their savings. Deciding deliberately whether to keep one, at what limit and with what rule for paying it off, stops the backstop turning into everyday borrowing.

                ## Milestones
                1. Existing credit lines listed with limits and rates.
                2. A decision made on which, if any, to keep as an emergency backstop.
                3. A written rule that the backstop is used only when the fund is exhausted.
                4. A plan to clear any backstop borrowing within a set number of months.

                ## Notes
                Closing old credit can affect a credit history. Check the effect before closing anything if you plan a mortgage or loan application soon.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names which credit line, if any, serves as the emergency backstop, with a usage rule and payoff period."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List your credit cards and overdrafts with limits and rates"
                - "Choose which one, if any, to keep as the backstop"
                - "Write the rule for when the backstop may be used"
                - "Set a payoff period for any backstop borrowing"
            - name: Rule for lending the fund to family and friends
              description: |-
                ## Purpose
                Requests for help from a sibling, parent or friend often come just when the fund looks large, and saying yes without a rule can leave your own household exposed. Setting a household position in advance, with a maximum amount, gift or loan terms and a floor the fund never drops below, makes those conversations kinder and easier.

                ## Milestones
                1. A floor set below which the fund is never lent.
                2. A maximum amount for help to others agreed.
                3. A decision on whether help is a gift or a written loan.
                4. The position shared with anyone who manages the fund with you.

                ## Notes
                Treat money lent from the fund as gone until it comes back. If it would hurt to lose it, it is not available to lend.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule sets a floor, a maximum amount and gift or loan terms for helping others from the fund."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Set the floor the fund never drops below for lending"
                - "Agree the most you would give or lend to someone else"
                - "Decide whether help is a gift or a written loan"
                - "Tell your partner or co-manager the rule"
            - name: Unexpected bill rehearsal
              description: |-
                ## Purpose
                Testing the system on paper before it is tested for real shows where it creaks. Picking a realistic shock, such as a car repair worth half a month's essentials landing three days before payday, and walking through every step from deciding to refilling reveals the missing login, the unclear rule or the refill that would take a year.

                ## Milestones
                1. A realistic scenario written with an amount and timing.
                2. Each step from approving the withdrawal to refilling walked through.
                3. Every gap found written down.
                4. Each gap fixed or given an owner and a date.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written walk-through of one realistic emergency scenario exists, with every gap found either fixed or assigned a date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one realistic emergency scenario with an amount and timing"
                - "Walk through each step from approval to refill"
                - "List every gap the rehearsal exposes"
                - "Fix each gap or give it a date"
            - name: Emergency withdrawal playbook
              description: |-
                ## Purpose
                In the middle of a crisis, people forget their own rules, borrow in a panic or withdraw far more than they need. A one-page playbook covering who decides, how much to take, which bills to call about and how the refill starts gives a calm sequence to follow when thinking is hardest.

                ## Milestones
                1. A one-page playbook with the decision steps in order.
                2. A rule to withdraw the amount needed now rather than the whole fund.
                3. A list of who to call to pause or reduce bills if income stops.
                4. The playbook saved somewhere that does not depend on the banking app.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page withdrawal playbook exists, includes a refill trigger and is saved somewhere reachable without the banking app."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the decision steps for using the fund on one page"
                - "Add a rule to take only what is needed this month"
                - "List the lenders and providers you would call if income stopped"
                - "Print the playbook or save a copy offline"
            - name: Top-up before a job change or career break
              description: |-
                ## Purpose
                Resigning, starting a business, taking a sabbatical or entering a probation period all raise the odds of needing the fund. Topping it up to a larger multiple before the change, and timing the move for when it is there, turns a risky leap into a planned one.

                ## Milestones
                1. The planned change and its likely date written down.
                2. A higher temporary target set for the transition.
                3. The gap to that target closed, or a later date chosen for the change.
                4. The target returned to normal once income is stable again.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The fund reached the higher transition target before the job change or break began, or the change was deliberately postponed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the change you are planning and its likely date"
                - "Set a higher temporary target for the transition"
                - "Work out the extra monthly saving needed to hit it in time"
                - "Lower the target back once income has been steady for three months"
            - name: Completion review when the full target is reached
              description: |-
                ## Purpose
                Hitting the full target is a real milestone that most people let pass without noticing, and it is also the moment contributions should change direction. A short completion review marks it, confirms the target still fits and moves the standing order to the next goal so the money keeps working.

                ## Milestones
                1. The date the full target was reached recorded.
                2. A modest, budgeted celebration chosen and enjoyed.
                3. The target checked against current essential costs.
                4. The standing order redirected to the next priority on your list.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The date the full target was reached is recorded and the standing order has been redirected to the next priority within a month."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Record the date the fund reached its full target"
                - "Plan a small celebration that fits the budget"
                - "Check the target against your latest essential costs"
                - "Redirect the standing order to the next priority"
            - name: Fund handover note for a trusted person
              description: |-
                ## Purpose
                If you are in hospital or otherwise unable to manage money, someone else may need to pay the bills from the fund. A short note listing where the fund is, how it may be used and who to contact, kept with your important papers and never containing passwords, means the buffer can still protect the household.

                ## Milestones
                1. A trusted person chosen and asked.
                2. A note written with the account provider, purpose and rules, without passwords or PINs.
                3. The note stored with your important documents.
                4. Any formal access, such as a power of attorney, discussed with a professional if needed.

                ## Notes
                Never write passwords in the note. Banks have formal routes, such as third-party mandates or powers of attorney, for someone to act for you.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A handover note without passwords is stored with your important papers and a named person knows where it is."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a trusted person and ask if they are willing"
                - "Write the provider, purpose and rules of the fund on one page"
                - "Store the note with your important documents"
                - "Review the handover note and its named person @recurring(yearly)"
            - name: Emergency fund for self-employed and freelance work
              description: |-
                ## Purpose
                Freelancers face late invoices, lost clients and no sick pay, so their emergency fund usually needs to be larger and kept firmly apart from the tax pot and any income smoothing buffer. Setting a target based on a lean trading year, and paying in a share of every month's income, gives a buffer that protects the household rather than the business cash flow.

                ## Milestones
                1. Essential personal costs and fixed business costs worked out separately.
                2. A target set with the extra months your work pattern needs.
                3. The fund held separately from the tax pot and the business account.
                4. A set share of each month's income moved to the fund.

                ## Notes
                Mixing the emergency fund with money owed in tax is the commonest mistake. Keep three separate accounts if you can.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A personal emergency fund is held separately from tax and business money and receives a set share of income every month."
                cadence: rolling
              tasks:
                - "Work out personal essentials and fixed business costs separately"
                - "Set a target that reflects your quietest trading months"
                - "Open a fund account separate from your tax pot"
                - "Move the agreed share of the month's income to the fund @recurring(monthly:5)"
            - name: Buffer for single-income and single-parent households
              description: |-
                ## Purpose
                When one income carries a household, there is no second wage to fall back on, and childcare and school costs keep running even if work stops. A larger target, an honest look at what support would arrive and how quickly, and a named backup for childcare emergencies make the fund fit the real risk.

                ## Milestones
                1. Essential costs recalculated to include childcare and children's needs.
                2. A target of six months or more considered and set.
                3. Expected support, such as child maintenance or state help, listed with how reliable it is.
                4. A backup person named for childcare if you are ill or working extra.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A target suited to a single-income household is set, with childcare costs included and expected support listed by reliability."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add childcare and children's costs to your essential costs figure"
                - "Decide whether your target needs more than six months"
                - "List any regular support you receive and how reliable it is"
                - "Ask one person to be your childcare backup in an emergency"
            - name: Renters' buffer for short-notice moves
              description: |-
                ## Purpose
                Renters can be asked to leave with a few months' notice, and a move means a new deposit and rent in advance before the old deposit comes back, plus removal costs. Adding a move reserve to the fund, sized from local rents, keeps a forced move from becoming a debt.

                ## Milestones
                1. Typical local deposit, rent in advance and removal costs found.
                2. The overlap period before the old deposit is returned estimated.
                3. A move reserve amount added to the emergency target.
                4. The reserve rechecked whenever rent rises.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A move reserve based on current local deposit, advance rent and removal costs has been added to the emergency target."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check typical deposits and rent in advance for similar homes nearby"
                - "Get a rough quote for removals or van hire"
                - "Add the move reserve to your emergency target"
                - "Recheck the reserve whenever your rent changes"
            - name: Homeowners' repair reserve alongside the fund
              description: |-
                ## Purpose
                Owning a home adds shocks that renters pass to the landlord: a failed boiler, a roof leak, a burst pipe or an insurance excess. Many owners set aside a yearly amount based on the age and condition of the property, kept next to the emergency fund so a repair does not eat the job-loss buffer.

                ## Milestones
                1. The age and condition of the boiler, roof, windows and other big items noted.
                2. A yearly repair reserve figure set from that list.
                3. The reserve held in a separate pot next to the emergency fund.
                4. Monthly contributions running into the reserve.

                ## Notes
                A rough guide often quoted is one to two percent of the home's value a year, but the condition of your home matters more than any rule of thumb.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A repair reserve sized from the condition of the home is held separately from the emergency fund and receives a monthly contribution."
                cadence: rolling
              tasks:
                - "List the big items in the home with their age and condition"
                - "Set a yearly repair reserve amount from that list"
                - "Open a separate pot for the repair reserve"
                - "Pay the monthly amount into the repair reserve @recurring(monthly:8)"
            - name: Shared and personal buffers for couples
              description: |-
                ## Purpose
                Couples need to agree whether the emergency fund is joint, held by one person or split, and what happens if one of them loses their job or the relationship ends. Deciding the structure, contributions and access rules together keeps the fund from becoming a source of argument, and a small personal buffer each protects both partners' independence.

                ## Milestones
                1. A structure agreed: one joint fund, individual funds or a mix.
                2. Contributions agreed in proportion to income or equally.
                3. Access and approval rules for withdrawals written down.
                4. A small personal buffer in each partner's own name considered.

                ## Notes
                A personal buffer matters most for anyone who might need to leave an unsafe relationship. Specialist support services can help privately.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written agreement on fund structure, contributions and withdrawal approval exists and is reviewed with your partner each quarter."
                cadence: rolling
              tasks:
                - "Talk through joint, separate or mixed funds with your partner"
                - "Agree how much each of you contributes"
                - "Write the rules for who can withdraw and when"
                - "Review the fund together with your partner @recurring(quarterly)"
            - name: Cash buffer in retirement
              description: |-
                ## Purpose
                Retirees often hold a cash reserve so that a boiler, a car or a care cost does not force a sale of investments at a bad time or a dip into pension income. Agreeing the size of that reserve with your adviser, and how and when it is refilled, keeps spending steady through market falls.

                ## Milestones
                1. Essential retirement costs and guaranteed income, such as state and workplace pensions, set side by side.
                2. The size of the cash reserve agreed with a regulated adviser.
                3. The reserve held in easy-access accounts separate from spending money.
                4. A yearly refill routine agreed and written down.

                ## Notes
                This is organisational, not investment advice. Agree the reserve size and refill method with your adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A retirement cash reserve size and refill routine are agreed with an adviser and recorded, with the reserve held separately."
                cadence: cyclic
              tasks:
                - "Set essential costs beside guaranteed retirement income"
                - "Ask your adviser what size of cash reserve fits your plan"
                - "Hold the reserve in easy-access accounts separate from spending money"
                - "Review and refill the reserve with your adviser @recurring(yearly)"
            - name: Starting a buffer on a low or student income
              description: |-
                ## Purpose
                On a tight income, three months of essentials can sound absurd, and that stops many people starting at all. A very small weekly amount, a first target of a few hundred, and any one-off money such as cashback or a refund sent straight to the fund builds a cushion that still stops the next small shock becoming debt.

                ## Milestones
                1. A weekly amount chosen that is small enough never to skip.
                2. A first target of a few hundred in your currency set.
                3. Any one-off money, such as refunds or bonuses, routed to the fund.
                4. The first target reached and the next one set.

                ## Notes
                If your income does not cover essentials, check hardship support and benefit entitlement before saving.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly transfer has run for three months and the first small target has been reached or is on schedule."
                cadence: rolling
              tasks:
                - "Choose a weekly amount small enough never to skip"
                - "Set a first target of a few hundred"
                - "Move the weekly amount into the buffer @recurring(weekly:fri)"
                - "Send any refund or bonus straight to the buffer"
            - name: Tiered fund across instant, easy access and notice
              description: |-
                ## Purpose
                Once a fund reaches several months of cover, holding all of it in one instant account can mean accepting a lower rate than needed. Splitting it into tiers, such as one month instantly available, the next two in easy access and the rest in a short notice account, can raise the return while keeping enough money reachable within days.

                ## Milestones
                1. The fund split into tiers with amounts and access times written down.
                2. Each tier placed in an account that matches its access time.
                3. A rule set for which tier is drawn first and which is refilled first.
                4. The tier split checked against the withdrawal log after a year.

                ## Notes
                Only tier a fund that already covers at least three months. The notice period must be shorter than the time the earlier tiers would last.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The fund is split into named tiers with access times, each in a matching account, with draw and refill order written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide how many months sit in the instant tier"
                - "Compare notice accounts for the slowest tier"
                - "Move each tier into its matching account"
                - "Write down which tier is drawn first and refilled first"
            - name: Stress test the target against a long job loss
              description: |-
                ## Purpose
                Averages hide the scenario that matters most: a long job search in a downturn, perhaps with a partner's income also cut. Modelling six, nine and twelve months without work, with realistic cuts and any support, shows how long the fund would really last and whether the target needs to grow.

                ## Milestones
                1. Three job loss scenarios of six, nine and twelve months written down.
                2. A survival budget with deep cuts calculated for each.
                3. Expected support, redundancy pay and partner income added in.
                4. Months the fund would last in each scenario recorded, and the target confirmed or raised.

                ## Notes
                Start from the **Risk register** template to keep each scenario, its likelihood and your response on one page.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three written job loss scenarios each show how many months the fund would last, with the target confirmed or raised as a result."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write three job loss scenarios of six, nine and twelve months"
                - "Build a survival budget with the cuts you would make"
                - "Add any redundancy pay, support or partner income for each scenario"
                - "Record how many months the fund lasts in each scenario"
            - name: Income gap map for illness and job loss
              description: |-
                ## Purpose
                How long the fund must last depends on what other money would arrive and when: employer sick pay, statutory pay, notice pay, redundancy pay, income protection after its waiting period, and state support. Mapping each source week by week shows the gap the fund actually has to fill, which can be far shorter or far longer than people assume.

                ## Milestones
                1. Employer sick pay, notice and redundancy terms found in your contract or handbook.
                2. Statutory and state support you might receive listed with waiting times.
                3. Any insurance payouts listed with their waiting periods.
                4. A week-by-week map showing the gap the fund must cover.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A week-by-week income gap map for illness and job loss exists, showing every source of money and the gap the fund covers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the sick pay, notice and redundancy terms in your contract"
                - "List state support you might receive and how long it takes to arrive"
                - "Note the waiting period on any income protection policy"
                - "Draw the week-by-week gap the fund would need to fill"
            - name: Household runway in months
              description: |-
                ## Purpose
                Experienced savers track one number beyond the fund balance: how many months the household could keep going on every accessible source, including the fund, the repair reserve and other easy-access savings, at survival-budget spending. Watching that runway each quarter gives an honest measure of resilience that the fund balance alone does not.

                ## Milestones
                1. Every source of accessible money listed, excluding pensions and investments that would need selling.
                2. A survival spending figure agreed, below normal essential costs.
                3. Runway in months calculated and recorded.
                4. The trend tracked over four quarters.

                ## Notes
                Start from the **Metrics log** template, with one row per quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Runway in months is recorded for four consecutive quarters, based on accessible money and a survival spending figure."
                cadence: rolling
              tasks:
                - "List every source of money you could reach within a week"
                - "Agree the bare survival spending figure with your household"
                - "Calculate runway in months and record it @recurring(quarterly)"
---

# Emergency Fund Building

This area is for anyone who wants a cash cushion between their household and the bills that arrive without warning, whether they are starting from nothing or tidying up a fund they already have. It begins with the foundations (your essential costs figure, a target in months, a starter buffer, the right easy-access account and written rules for what counts as an emergency), then the routines that keep money flowing in and back after a withdrawal, the knowledge that keeps the fund honest, the decisions about debt, credit and lending, the events worth rehearsing, versions for freelancers, single earners, renters, homeowners, couples, retirees and tight budgets, and finally the advanced work of tiering and stress testing.

What repeats is a payday transfer and a monthly check-in, an end-of-month sweep, a quarterly recalculation of essential costs, and a yearly review with a rate check and an access drill. The Monthly budget and bills, Savings goal, Risk register and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
