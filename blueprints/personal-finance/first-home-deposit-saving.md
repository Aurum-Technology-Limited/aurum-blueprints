---
id: personal-finance.first-home-deposit-saving
name: First Home Deposit Saving
description: "A first home deposit plan for renters: a target built on real sold prices and buying costs, a dated timeline, the right accounts and government schemes, steady saving routines and a safe handover at exchange."
category: personal
version: 1.0.0
tags: [personal-finance, first-home-deposit-saving, renter, everyone, first-time-buyer, house-deposit, first-home-savings-account, savings-goal]
author: Aurum Technology
starter_structure:
  templates:
    - savings-goal
    - purchase-decision
    - metrics-log
    - operational-checklist
    - risk-register
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: First Home Deposit Saving
          description: "Saving for a first home deposit with a target, timeline, government schemes and high-interest accounts while renting."
          projects:
            - name: Sold-price research for your target areas
              description: |-
                ## Purpose
                Asking prices on property portals often run ahead of what homes actually sell for, and a deposit target built on them is wrong from the start. An evening spent on recorded sold prices for two or three areas you could realistically live in gives you a price range grounded in completed sales. Every later number in this area, from the target to the timeline, starts from it.

                ## Milestones
                1. Two or three target areas named, each within a commute you would accept.
                2. Ten recent sold prices recorded per area for the type of home you want.
                3. A typical price and a realistic upper price written down for each area.
                4. One area marked as the first choice for planning.

                ## Notes
                Use the public sold-price records your country publishes, or a portal that shows them. Stick to sales from the last twelve months: older figures mislead in a moving market.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of at least ten recent sold prices for each of two or three named areas, with a typical and upper price per area."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List two or three areas you could realistically live in and commute from"
                - "Pull ten recent sold prices per area for the home size you need"
                - "Note the typical and upper sold price for each area"
                - "Pick the area you will plan around first"
            - name: Deposit target figure and percentage
              description: |-
                ## Purpose
                A deposit is a percentage of a price, so the target only becomes real once both numbers are chosen. Picking a planning price from your sold-price research and a deposit percentage, usually somewhere between 5 and 20, turns a wish into a single figure you can save towards. Writing it down also shows early whether the plan needs a cheaper area or a longer timeline.

                ## Milestones
                1. A planning price chosen from your sold-price table.
                2. A deposit percentage chosen, with the reason written in one line.
                3. One deposit target figure recorded, rounded up to the nearest thousand.
                4. The figure set up as a named savings goal, with the target date left open for now.

                ## Notes
                Start from the **Savings goal** template. Round the target up rather than down: prices drift and small fees appear late.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One deposit target figure, with its planning price and percentage, is recorded on a savings goal page."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a planning price from your sold-price table"
                - "Write down the deposit percentage you are aiming for and why"
                - "Multiply the two and round the result up to the nearest thousand"
                - "Create a savings goal page with the deposit target at the top"
            - name: Buying costs budget beyond the deposit
              description: |-
                ## Purpose
                First-time buyers regularly reach their deposit and then discover they also need money for the conveyancer, the survey, lender fees, property transfer tax and the move itself. These costs can add several thousand on top of the deposit, and no lender will lend them. Estimating them now means the savings target covers everything the purchase needs on completion day.

                ## Milestones
                1. Quotes or typical ranges gathered for conveyancing, survey and lender fees.
                2. Property transfer tax estimated for your planning price, including any first-time buyer relief.
                3. Removal, connection and essential furniture costs estimated.
                4. A buying costs total added to the savings goal as a second line under the deposit.

                ## Notes
                Survey and search fees are usually paid weeks before exchange, so this money must be reachable earlier than the deposit itself.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A buying costs budget with at least six itemised lines and a total is added to the deposit savings goal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get two online conveyancing quotes for your planning price"
                - "Use the tax authority's calculator to estimate property transfer tax"
                - "Price a basic survey and typical lender arrangement fees"
                - "Add removal, connection and furniture costs and total the list"
            - name: Monthly saving capacity while renting
              description: |-
                ## Purpose
                The timeline depends less on the target than on how much can go in each month after rent, bills and living costs. Working it out from three months of real bank statements, not from what you hope to spend, gives a monthly figure you can actually sustain. Renters often find the honest number is lower than expected, and knowing that now beats discovering it in month four.

                ## Milestones
                1. Three months of statements totalled into rent, bills, essentials and everything else.
                2. An average monthly surplus calculated.
                3. A sustainable monthly deposit contribution chosen, a little below the full surplus.
                4. The contribution written into the savings goal.

                ## Notes
                Leave 10 to 20 percent of the surplus unassigned. A plan that needs a perfect month every month fails by spring.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A monthly deposit contribution based on three months of actual statements is recorded in the savings goal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the last three months of current account statements"
                - "Total rent, bills, essentials and other spending for each month"
                - "Work out the average monthly surplus after all spending"
                - "Set a monthly deposit contribution a little below that surplus"
            - name: Deposit timeline with three scenarios
              description: |-
                ## Purpose
                Dividing the remaining target by the monthly contribution gives one date, but life rarely follows one line. A slow, an expected and a fast scenario, each including interest and any government bonus, show the range of likely buying dates and what would move you between them. That range is what to plan rent renewals and conversations with a partner around.

                ## Milestones
                1. The remaining amount calculated from the target and buying costs minus current savings.
                2. Months to target worked out for a slow, expected and fast contribution.
                3. Interest and any scheme bonus included in each scenario.
                4. An expected target date written into the savings goal, with the range beside it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three dated scenarios for reaching the deposit target exist, with the expected date recorded in the savings goal."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Subtract what you already have from the deposit and costs target"
                - "Ask the agent to build a slow, expected and fast timeline from your figures"
                - "Add estimated interest and any scheme bonus to each scenario"
                - "Write the expected date and the range into the savings goal"
            - name: Inventory of savings that count towards the deposit
              description: |-
                ## Purpose
                Many renters start with money spread across an old savings account, a forgotten bond, a share scheme from work and a little cash, and have never added it up. Listing every pot, its access rules and whether it can sensibly go to the deposit often shortens the timeline before any new saving starts. It also shows which money is already committed elsewhere, such as an emergency buffer.

                ## Milestones
                1. Every savings pot, bond, share scheme and cash balance listed with its current value.
                2. Access rules noted for each: instant, notice period, lock-in or penalty.
                3. Each pot marked as deposit, buffer or another goal.
                4. The deposit-marked total entered as the starting balance in the savings goal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of every savings pot with its value, access rules and assigned purpose exists, and a starting deposit balance is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search email and old post for savings, bond and share scheme statements"
                - "List each pot with its value and how quickly you can reach it"
                - "Mark each one as deposit, emergency buffer or another goal"
                - "Enter the deposit total as the starting balance in your savings goal"
            - name: Choosing the account that holds your deposit
              description: |-
                ## Purpose
                Where the deposit sits for the next two to five years matters: on a pot of 20,000, the gap between a poor easy-access rate and a competitive one can be several hundred a year. Comparing easy-access, notice, regular saver and fixed-term accounts against your timeline lets you pick a home for the money on purpose rather than by default. The deciding questions are access, rate and protection.

                ## Milestones
                1. Four or five accounts shortlisted across different account types.
                2. Each scored on rate, access, withdrawal limits and deposit protection.
                3. An account chosen, opened and renamed after the goal.
                4. Existing deposit savings moved into it.

                ## Notes
                Start from the **Purchase decision** template. Check whether an advertised rate includes a temporary bonus that drops away after twelve months.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One deposit account is chosen from a scored shortlist of at least four, opened, and holding the existing deposit savings."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist four or five accounts from an independent savings rate table"
                - "Score each on rate, access, withdrawal limits and protection"
                - "Open the winning account and rename it after the home"
                - "Move your existing deposit savings into the new account"
            - name: First-home scheme eligibility check
              description: |-
                ## Purpose
                Most countries offer something to first-time buyers, from bonus-paying savings accounts to shared ownership, low-deposit guarantees and tax relief, and each has its own age limits, price caps and residency rules. Checking which ones you actually qualify for, on the government's own pages, can be worth thousands or can rule out a plan that relies on the wrong scheme. Rules change, so date your findings.

                ## Milestones
                1. Every current first-time buyer scheme in your country listed from official sources.
                2. Your eligibility checked against each scheme's age, income, price cap and location rules.
                3. Schemes you qualify for ranked by likely value to you.
                4. A dated note of the findings saved with your savings goal.

                ## Notes
                First-time buyer usually means never having owned a home anywhere in the world, including an inherited share. Check the definition before relying on any scheme.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated list of first-time buyer schemes exists, with your eligibility for each confirmed against the official rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List current first-time buyer schemes from your government's housing pages"
                - "Check each scheme's age, income, price cap and location limits"
                - "Rank the schemes you qualify for by likely value"
                - "Save a dated note of the findings next to your savings goal"
            - name: Opening a government-backed first-home savings account
              description: |-
                ## Purpose
                Where your country offers a first-home savings account with a government bonus or tax relief, such as the Lifetime ISA in the UK, it is often the biggest single boost a deposit saver can get. These accounts usually carry an opening age limit, a property price cap, a minimum holding period and a penalty for other withdrawals, so a few checks come first. Opening early can matter because the holding period starts from the first payment.

                ## Milestones
                1. The account's age limit, price cap, holding period and penalty rules confirmed.
                2. Your planning price checked against the price cap.
                3. A provider chosen and the account opened with a first payment.
                4. The first payment date recorded, with the earliest date the account can be used.

                ## Notes
                If your planning price sits close to the cap, think carefully: buying above it can turn the bonus into a penalty.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A first-home savings account is open with a first payment made, and its key rules and earliest usable date are recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the account's age limit, price cap and holding period"
                - "Check your planning price sits comfortably below the cap"
                - "Compare two or three providers on rate and fees"
                - "Open the account and make a first payment to start the clock"
            - name: Payday standing order into the deposit pot
              description: |-
                ## Purpose
                Saving whatever is left at the end of the month rarely leaves much, while money moved on payday is saved before it can be spent. A standing order set for the day after pay arrives, for the contribution you worked out, turns deposit saving into something that happens rather than something you remember. Any split between the first-home account and the main pot can be set up at the same time.

                ## Milestones
                1. A standing order set for the day after payday, for the agreed contribution.
                2. Any split between the first-home account and the main pot written down.
                3. The first two transfers confirmed as arriving.
                4. A note made of how to change the amount when pay changes.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A standing order for the agreed contribution runs the day after payday and has arrived in full for at least two months."
                cadence: rolling
              tasks:
                - "Set a standing order for the day after payday"
                - "Split the amount between the first-home account and the main pot"
                - "Check this month's transfer arrived in the deposit account @recurring(monthly:2)"
                - "Write down how to change the amount if your pay changes"
            - name: Keeping the emergency buffer apart from the deposit
              description: |-
                ## Purpose
                A deposit pot that doubles as the emergency fund will be raided by the first broken laptop or gap between jobs, and the timeline slips each time. Agreeing a separate buffer, held in its own account, protects the deposit and also leaves something in reserve after completion, when new owners face their first repairs. The two pots need different rules, so write both down.

                ## Milestones
                1. A buffer figure agreed, separate from the deposit target.
                2. The buffer held in an account other than the deposit pot.
                3. A written rule for what counts as an emergency.
                4. A post-completion buffer included in the overall savings goal.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A buffer figure and a separate buffer account exist, with written rules on what each pot may be used for."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Decide how much buffer you want to keep outside the deposit"
                - "Move the buffer into its own account away from the deposit pot"
                - "Write one rule for what counts as an emergency"
                - "Add a post-completion buffer to your savings goal total"
            - name: Monthly deposit progress log
              description: |-
                ## Purpose
                Watching the balance grow is the best motivation a long savings plan has, and a monthly figure also shows quickly when a month went wrong. Logging each pot, interest earned and the total on the same day every month gives a trend line rather than a feeling. Three flat months in a row is a signal to revisit the plan, not to give up on it.

                ## Milestones
                1. A progress log set up with columns for each pot, interest and the total.
                2. Three months of entries recorded on the same day each month.
                3. Progress against the expected scenario marked each month.
                4. Any month under target annotated with the reason.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A deposit progress log holds at least six consecutive monthly entries, each compared with the expected scenario."
                cadence: rolling
              tasks:
                - "Set up a log with columns for each pot, interest and the total"
                - "Record every deposit balance in the log @recurring(monthly:3)"
                - "Mark each month as ahead of, on or behind the expected scenario"
                - "Write one line explaining any month that fell short"
            - name: Quarterly deposit timeline recalculation
              description: |-
                ## Purpose
                Contributions, interest rates and local prices all drift, so a target date set in January is guesswork by the summer. Re-running the timeline every quarter with real balances keeps the expected buying date honest and gives early warning if a rent renewal or job change needs planning around. Once the progress log exists, it takes about twenty minutes.

                ## Milestones
                1. The remaining amount recalculated from the latest balances.
                2. The expected date updated using the last three months' average contribution.
                3. The change since last quarter noted in the savings goal.
                4. One adjustment decided whenever the date has moved by more than three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The expected deposit date is recalculated each quarter from real balances, and any shift over three months has a written adjustment."
                cadence: rolling
              tasks:
                - "Recalculate the expected date from your latest balances @recurring(quarterly)"
                - "Use the last three months' average contribution, not the planned one"
                - "Note how far the date moved since last quarter"
                - "Decide one change if the date slipped by more than three months"
            - name: Deposit account rate watch
              description: |-
                ## Purpose
                Savings rates move with the wider interest rate environment and introductory bonuses quietly expire, so the account that was competitive at opening may be paying half as much a year later. A quarterly look at your rate against the best comparable accounts tells you whether moving the pot is worth the effort. On a growing deposit, a one point gap adds up quickly.

                ## Milestones
                1. The current rate and any bonus end date recorded for each deposit account.
                2. A threshold set for when a switch is worth doing, for example half a percentage point.
                3. Rates compared each quarter against an independent rate table.
                4. Switches made whenever the gap passes the threshold, with transfer rules checked first.

                ## Notes
                Moving a government first-home account usually needs a formal transfer between providers. Withdrawing and paying back in can trigger the penalty.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each deposit account's rate is checked quarterly against an independent table and moved whenever the gap exceeds your threshold."
                cadence: rolling
              tasks:
                - "Record each deposit account's rate and any bonus end date"
                - "Set the rate gap that makes a switch worth doing"
                - "Compare your rates with an independent rate table @recurring(quarterly)"
                - "Use a formal provider transfer for any first-home account you move"
            - name: Weekly underspend sweep into the deposit
              description: |-
                ## Purpose
                Small amounts left in the spending account at the end of a week usually leak into the next one. Sweeping whatever remains of the weekly allowance into the deposit pot every Sunday turns careful weeks into visible progress and adds a second stream on top of the payday standing order. Even 15 a week comes to nearly 800 a year.

                ## Milestones
                1. A weekly spending allowance agreed for the current account.
                2. A floor balance set so bills never bounce.
                3. Unspent allowance swept into the deposit pot four Sundays running.
                4. Sweep totals noted in the progress log each month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Unspent weekly allowance has been swept into the deposit pot on at least twelve Sundays, with monthly totals in the progress log."
                cadence: rolling
              tasks:
                - "Agree a weekly spending allowance for the current account"
                - "Set a floor balance the sweep must never go below"
                - "Move any unspent allowance into the deposit pot @recurring(weekly:sun)"
                - "Add the month's sweep total to the progress log"
            - name: Pay rise and windfall split rule
              description: |-
                ## Purpose
                Pay rises, bonuses, tax refunds and birthday money tend to disappear into a slightly nicer lifestyle unless a rule is decided in advance. Agreeing a fixed share, for example half of every rise and three quarters of every windfall, sends extra money to the deposit while still letting you enjoy some of it. Settling the split before the money arrives is far easier than after.

                ## Milestones
                1. A written split rule for pay rises and another for one-off windfalls.
                2. The rule applied to the next rise or windfall within a week of it landing.
                3. The standing order raised after any pay rise.
                4. Windfall amounts logged separately in the progress log.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written split rule exists and has been applied to every pay rise and windfall since it was set, each within a week."
                cadence: rolling
              tasks:
                - "Write a split rule for pay rises and another for windfalls"
                - "Raise the standing order within a week of any pay rise"
                - "Review the split rule after your annual pay review @recurring(yearly)"
                - "Log each windfall and the share sent to the deposit"
            - name: Sold-price watch in your first-choice area
              description: |-
                ## Purpose
                If local prices rise faster than your savings, the target moves away from you; if they fall, you may be closer than you think. A monthly look at new sold prices in your first-choice area, added to the table you built at the start, keeps the planning price current and avoids a shock when you finally start viewing. Ten minutes a month is enough.

                ## Milestones
                1. New sold prices added to your table each month.
                2. A rolling twelve-month typical price kept for the first-choice area.
                3. The planning price updated whenever the typical price moves more than five percent.
                4. Any planning price change carried through to the deposit target.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The sold-price table has monthly additions for six months, and the planning price has been checked against the rolling typical price."
                cadence: rolling
              tasks:
                - "Add the month's new sold prices to your table @recurring(monthly:20)"
                - "Recalculate the twelve-month typical price for your first-choice area"
                - "Update the planning price if the typical price moved over five percent"
                - "Carry any planning price change through to the deposit target"
            - name: Yearly first-home account allowance and bonus check
              description: |-
                ## Purpose
                Government first-home accounts usually have an annual payment limit and pay the bonus only on money paid in within that year, so an unused allowance is lost for good. A check two months before the allowance year ends shows whether you can top up to the limit and confirms that past bonuses have actually arrived. For many deposit savers it is the best-paid hour of the year.

                ## Milestones
                1. The allowance year end date and annual limit noted.
                2. Payments made so far this year totalled against the limit.
                3. Any top-up decided and made before the year ends.
                4. Every bonus payment for the year matched against what you paid in.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Before each allowance year ends, payments are totalled against the limit, any top-up is made and every bonus is matched."
                cadence: cyclic
              tasks:
                - "Note the allowance year end date and the annual limit"
                - "Total this year's payments two months before year end @recurring(yearly)"
                - "Make any affordable top-up before the allowance year closes"
                - "Match each bonus credit against the payment that earned it"
            - name: Deposit interest and the tax-free savings allowance
              description: |-
                ## Purpose
                As the deposit grows and rates rise, interest can pass the amount many tax systems let you earn tax-free, and some savers only find out when a bill arrives. Checking once a year how much interest the pot is likely to earn, and whether a tax-sheltered account would keep it out of tax, protects the deposit from an unexpected demand. Where tax is due, knowing in advance lets you set it aside.

                ## Milestones
                1. Your country's tax-free savings interest allowance noted for your tax band.
                2. Expected interest for the year estimated across every deposit account.
                3. Any amount over the allowance sheltered or the tax set aside.
                4. Interest statements filed with the year's tax papers.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Expected deposit interest is compared with the tax-free allowance each year, and any excess is sheltered or has tax set aside."
                cadence: cyclic
              tasks:
                - "Look up the tax-free savings interest allowance for your tax band"
                - "Estimate this year's interest across all deposit accounts @recurring(yearly)"
                - "Shelter the excess or set aside tax on interest over the allowance"
                - "File the year's interest statements with your tax papers"
            - name: Deposit pot withdrawal and refill rules
              description: |-
                ## Purpose
                Long saving plans tend to fail through small exceptions: a holiday deposit borrowed from the pot, a car repair just this once. Writing down the only reasons the deposit may be touched, and the refill plan if it is, makes the decision in calm conditions rather than in the moment. Couples especially benefit from agreeing this before it is tested.

                ## Milestones
                1. A short list of the only reasons the deposit may be used before purchase.
                2. A refill rule agreed: how much extra goes in each month until the gap is closed.
                3. The rules saved at the top of the savings goal.
                4. Any withdrawal logged with its reason and refill date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written withdrawal and refill rules sit at the top of the savings goal, and every withdrawal has a logged reason and refill date."
                cadence: rolling
              tasks:
                - "Write the two or three reasons the deposit may be touched"
                - "Agree a monthly refill amount for any withdrawal"
                - "Save the rules at the top of your savings goal page"
                - "Log any withdrawal with its reason and planned refill date"
            - name: How loan-to-value bands change the cost of buying
              description: |-
                ## Purpose
                Lenders price mortgages in bands by how much of the home you borrow, often in steps of 5 percent, and crossing from one band to the next can change the rate noticeably. Learning how those bands work from current published rate tables shows whether saving an extra few thousand to reach the next band is worth the extra months of rent. It is the knowledge behind the deposit percentage you chose.

                ## Milestones
                1. Loan-to-value explained in your own words with a worked example.
                2. Typical current rates noted for at least three bands from a published table.
                3. Monthly repayments compared for your planning price at two deposit levels.
                4. A note made of how far you are from the next band.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Typical rates for three loan-to-value bands are recorded, with a repayment comparison for your planning price at two deposit levels."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a plain guide to loan-to-value from a consumer finance body"
                - "Record typical current rates for three deposit bands"
                - "Compare monthly repayments at two deposit levels with an online calculator"
                - "Note how much more you would need to reach the next band"
            - name: Rules and penalties of your first-home savings account
              description: |-
                ## Purpose
                Government first-home accounts are generous when used correctly and costly when not: a withdrawal for the wrong reason, a home over the price cap or a purchase before the holding period ends can wipe out the bonus and more. Learning the rules from the official guidance, rather than a forum thread, means no surprises on the day the money is needed. Write the rules down where your future self will see them.

                ## Milestones
                1. The official guidance for the account read in full.
                2. Price cap, holding period, penalty and permitted uses summarised in five lines.
                3. The process for using the account in a purchase understood, including who requests the money.
                4. The summary saved alongside the account details.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-line summary of your first-home account's cap, holding period, penalty and purchase process, taken from official guidance, is saved."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read the official guidance for your first-home savings account"
                - "Summarise the cap, holding period and penalty in five lines"
                - "Find out who requests the money at purchase and how long it takes"
                - "Save the summary alongside the account details"
            - name: When deposit money is actually needed in a purchase
              description: |-
                ## Purpose
                Buying a home does not need all the money on one day. A reservation fee may be due on a new build, the survey and searches are paid in the first weeks, the deposit is usually due at exchange and the remaining costs at completion. Knowing that sequence tells you how much has to be instantly accessible and when, which shapes the accounts you choose.

                ## Milestones
                1. The usual purchase stages in your country listed in order.
                2. Each payment matched to the stage at which it falls due.
                3. A note made of how much must be instantly accessible at each stage.
                4. Fixed-term or notice money timed around the expected exchange window.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sequence of purchase payments, from reservation to completion, shows how much must be accessible at each stage."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read a buyer's guide to the stages of a purchase in your country"
                - "List each payment against the stage at which it falls due"
                - "Mark which payments need instant access"
                - "Check any fixed-term or notice money against that sequence"
            - name: Ownership routes for buyers with smaller deposits
              description: |-
                ## Purpose
                A full deposit is not the only way in. Shared ownership, government-backed low-deposit mortgages, family guarantor arrangements and some rent-to-buy schemes all let people buy with less saved, each with trade-offs in cost, resale and control. Understanding them now lets you decide whether to keep saving for a standard purchase or aim at a different route sooner.

                ## Milestones
                1. Each route available in your country described in two lines.
                2. The main costs and catches of each noted, such as rent on the unowned share or resale restrictions.
                3. Routes ranked by fit with your income and timeline.
                4. A decision recorded: standard deposit, an alternative route, or both kept open.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "Each lower-deposit route in your country is summarised with its costs and catches, and a preferred route is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the lower-deposit ownership routes offered in your country"
                - "Note the extra costs and resale rules attached to each"
                - "Rank the routes by fit with your income and timeline"
                - "Record whether you will pursue one alongside standard saving"
            - name: First-time buyer property transfer tax rules
              description: |-
                ## Purpose
                Many countries charge a tax when property changes hands, and many reduce or waive it for first-time buyers below a price threshold. Knowing exactly where those thresholds sit can change your planning price: a home just above one can cost thousands more in tax than a home just below. The rules change with government budgets, so put a date on what you learn.

                ## Milestones
                1. The current tax bands and first-time buyer relief thresholds noted with the date checked.
                2. Tax calculated for your planning price and for prices either side of the nearest threshold.
                3. Any threshold close to your planning price highlighted.
                4. The tax line in your buying costs budget updated.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Property transfer tax is calculated for three prices around your planning price using current rules, and the buying costs budget is updated."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the current property transfer tax bands from the tax authority"
                - "Calculate the tax at your planning price and either side of the threshold"
                - "Highlight any threshold within ten percent of your planning price"
                - "Update the tax line in your buying costs budget"
            - name: House price growth versus your saving pace
              description: |-
                ## Purpose
                Saving 5,000 a year towards a 10 percent deposit on a 250,000 home looks steady, but if that home rises 4 percent a year the deposit needed rises by about 1,000 a year too. Learning to account for price growth explains why some savers feel they never get closer, and shows whether a faster pace, a cheaper area or a lower percentage closes the gap. Use local figures, not national headlines.

                ## Milestones
                1. Local annual price change estimated from your sold-price table.
                2. The deposit target projected forward to your expected date at that growth rate.
                3. The effective saving pace after price growth calculated.
                4. A note made of whether the gap is closing, flat or widening.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The deposit target is projected forward at local price growth, and the effective saving pace is recorded as closing, flat or widening."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Estimate local annual price change from your sold-price table"
                - "Ask the agent to project your deposit target forward at that growth rate"
                - "Work out how much of each year's saving price growth cancels out"
                - "Repeat the projection with fresh local prices @recurring(yearly)"
            - name: Source of funds paper trail for your deposit
              description: |-
                ## Purpose
                Lenders and conveyancers must check where a deposit came from before they accept it, and gaps in the paper trail are a common cause of last-minute delays. Keeping statements for every deposit account, notes on transfers between them and evidence of gifts or windfalls as you go saves weeks of hunting at the point of sale. Buyers are commonly asked for three to six months of statements, sometimes more.

                ## Milestones
                1. A folder set up for deposit statements and evidence.
                2. Statements for every deposit account saved each quarter.
                3. Large transfers and windfalls annotated with their source.
                4. A one-page summary of how the deposit was built, ready to hand over.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder holds statements for every deposit account and a one-page summary explaining the source of each large sum."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Create a folder for deposit statements and evidence"
                - "Save statements for every deposit account @recurring(quarterly)"
                - "Note the source of any single transfer over a few hundred"
                - "Draft a one-page summary of how the deposit was built"
            - name: Five percent now or ten percent later
              description: |-
                ## Purpose
                Buying sooner on a smaller deposit means a higher rate and a bigger loan; waiting for a larger one means more months of rent and the risk that prices move. Comparing the total cost of each path over the first five years, including rent paid while waiting, turns an emotional argument into a decision you can explain. The answer differs for every household.

                ## Milestones
                1. Two dated scenarios set out, one buying at the smaller deposit and one at the larger.
                2. Rent paid while waiting added to the later scenario.
                3. Repayments and interest over five years compared using published rates.
                4. A decision recorded with the main reason.

                ## Notes
                Treat the comparison as preparation, not advice, and take it to a mortgage adviser before acting on it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written five-year cost comparison of buying at two deposit levels, including rent while waiting, ends in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set the two deposit levels and the date each would be reached"
                - "Add the rent you would pay while saving the larger deposit"
                - "Compare five years of repayments using current published rates"
                - "Record which path you chose and why"
            - name: Moving to a cheaper rental to save faster
              description: |-
                ## Purpose
                Rent is usually a renter's biggest cost, so a move to somewhere a few hundred a month cheaper can cut a year or more off the timeline. The sums have to include moving costs, a new tenancy deposit, any overlap in rent and the change in commute. Running them as your tenancy comes up for renewal means deciding before the notice deadline, not after.

                ## Milestones
                1. Your tenancy end or break date and notice period noted.
                2. Three cheaper rentals or house shares priced, with commute costs.
                3. Moving costs and overlap rent set against the monthly saving.
                4. A decision made in time to give or answer notice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of staying against three cheaper rentals, with the payback period calculated, ends in a decision before the notice deadline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find your tenancy end date and notice period"
                - "Price three cheaper rentals including commute costs"
                - "Work out how many months the saving takes to repay the move"
                - "Decide before the notice deadline and tell the landlord"
            - name: Redirecting one large monthly cost into the deposit
              description: |-
                ## Purpose
                Trimming many small costs rarely moves a deposit timeline, but redirecting one large cost can. Listing the five biggest outgoings after rent, picking the one you would miss least, perhaps a car, a holiday fund or an expensive phone plan, and pointing that exact amount at the deposit gives a visible jump in the monthly contribution. One deliberate cut is easier to sustain than cutting everything a little.

                ## Milestones
                1. The five largest outgoings after rent listed with their monthly cost.
                2. One chosen to cut or pause until purchase.
                3. The cut made and its full amount added to the standing order.
                4. The effect on the expected date recorded in the savings goal.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One large monthly cost is cut or paused and its full amount added to the deposit standing order, with the new expected date recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List your five largest monthly outgoings after rent"
                - "Choose the one you would miss least until you buy"
                - "Cancel or pause it and add the full amount to the standing order"
                - "Record how many months the change takes off the timeline"
            - name: Side income ring-fenced for the deposit
              description: |-
                ## Purpose
                Extra income from weekend shifts, tutoring or selling things is easiest to save when it never touches the everyday account. Directing all of it, less a tax set-aside, into the deposit pot makes its effect measurable, and lenders will later want to see where the money came from. Decide at the start whether the side work has an end date, so it does not quietly become permanent.

                ## Milestones
                1. One side income source chosen with an expected monthly amount.
                2. Payments routed to a separate account or straight to the deposit pot.
                3. A tax set-aside percentage agreed and held back.
                4. An end date or review date set for the side work.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All side income goes into the deposit pot, less a recorded tax set-aside, with a review date set for the work."
                cadence: rolling
              tasks:
                - "Choose the side income you will dedicate to the deposit"
                - "Ask whether the payer can pay straight into the deposit pot"
                - "Move last month's side income, less the tax set-aside @recurring(monthly:8)"
                - "Set a date to review whether the side work continues"
            - name: Cash or investments for a deposit under five years
              description: |-
                ## Purpose
                Some savers put a deposit into the stock market hoping it grows faster, then find prices have fallen just when they want to buy. The deciding factors are the time until purchase, how long a fall would delay the plan and whether you could live with that delay. Working through them and writing down your answer, ideally with a regulated adviser, makes the choice deliberate rather than driven by one good year in the markets.

                ## Milestones
                1. The time to your expected purchase date written down.
                2. The delay a 20 percent fall would cause calculated.
                3. Your answer on whether that delay is acceptable recorded.
                4. A decision on how the pot is held, checked with a regulated adviser if investing is still an option.

                ## Notes
                This is a planning exercise, not investment advice. Speak to a regulated financial adviser before investing money you expect to need within five years.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on how the deposit is held exists, including the effect a 20 percent fall would have on the timeline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down how many months remain until your expected purchase"
                - "Calculate the delay a 20 percent fall would cause"
                - "Decide whether you could accept that delay"
                - "Book a session with a regulated adviser if investing is still an option"
            - name: Ordering expensive debt and deposit saving
              description: |-
                ## Purpose
                Saving at 4 percent while carrying a card balance at 25 percent loses money every month, and lenders count existing debt repayments when working out what you can borrow. Listing every debt with its rate and deciding which to clear before or alongside the deposit makes the order of the two goals a decision rather than a drift. Free debt advice services can help where balances feel unmanageable.

                ## Milestones
                1. Every debt listed with balance, rate and monthly payment.
                2. Each debt marked as clear first, pay alongside, or leave as it is.
                3. The deposit contribution adjusted to fit the debt plan.
                4. A date set to restore the full contribution once priority debts are cleared.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every debt is listed with its rate and placed in order relative to deposit saving, with a date to restore the full contribution."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every debt with balance, rate and monthly payment"
                - "Mark each as clear first, pay alongside or leave as it is"
                - "Adjust the deposit contribution to fit the debt plan"
                - "Set a date to return to the full deposit contribution"
            - name: Buying in a cheaper area than where you rent
              description: |-
                ## Purpose
                Renters in expensive cities sometimes find a deposit within reach only somewhere else: a commuter town, a cheaper district or another region entirely. Comparing the deposit, timeline and commute for two or three cheaper areas can shorten the wait by years, and it is better done before saving another year towards an unreachable target. Travel each candidate commute at the hour you would actually make it.

                ## Milestones
                1. Two or three cheaper areas priced from sold records.
                2. Deposit targets and timelines compared with your current first choice.
                3. Commute time and cost tested by travelling it at rush hour.
                4. A decision recorded on which area the plan now centres on.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three cheaper areas are compared on deposit, timeline and commute, with at least one commute tested at rush hour and a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Name two or three cheaper areas within a tolerable commute"
                - "Pull sold prices and work out a deposit target for each"
                - "Travel the commute from your favourite at rush hour"
                - "Record which area the plan now centres on"
            - name: Halfway to the deposit review
              description: |-
                ## Purpose
                Reaching half the target is the natural moment to check the target itself is still right: prices, schemes, your household and your idea of the right home may all have changed. A deliberate review at the halfway point catches a stale plan while there is still half the time left to adjust. It is also worth marking, because half a deposit is a real achievement.

                ## Milestones
                1. The date your balance passed half the target noted.
                2. The deposit target re-checked against current sold prices.
                3. Scheme eligibility re-confirmed, especially any age or price limits.
                4. An updated plan saved and the milestone marked in a way that means something to you.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At the halfway balance, target, timeline, scheme eligibility and area are each re-checked and the outcome recorded in the savings goal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the date your balance passed half the target"
                - "Re-check the target against current sold prices"
                - "Confirm you still meet each scheme's age and price limits"
                - "Save the updated plan and plan a small celebration"
            - name: Readiness review when the deposit target is reached
              description: |-
                ## Purpose
                Hitting the target is where saving ends and buying begins, and a short review before speaking to a mortgage adviser or lender stops avoidable delays. Confirming the full amount including buying costs, how quickly each pot can be reached and that the paper trail is complete means the deposit is ready to use, not just counted. The mortgage application itself belongs to a separate piece of work.

                ## Milestones
                1. Deposit plus buying costs confirmed against the latest target.
                2. Every pot's access time listed against the purchase stages.
                3. The source of funds summary updated to the current balance.
                4. Standing orders kept running until purchase as a contingency.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A readiness check confirms the deposit and buying costs are fully saved, reachable within the purchase timeline and evidenced."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the balance covers both deposit and buying costs"
                - "List how fast each pot can be reached"
                - "Update your source of funds summary to today's balance"
                - "Keep the standing order running as a contingency until completion"
            - name: Unlocking fixed-term and notice money before offers
              description: |-
                ## Purpose
                Money in a fixed-term account or a 90-day notice account cannot be reached quickly, and an accepted offer can move to exchange within weeks. Planning when each locked pot matures, or when to give notice, before you start viewing seriously avoids being unable to exchange or paying a penalty for early access. The safest default is to have the deposit in instant access by the time an offer goes in.

                ## Milestones
                1. Each locked pot listed with its maturity date or notice period.
                2. A planned start date for serious viewings set.
                3. Notice given or maturities arranged so the money is free before that date.
                4. The freed money sitting in instant access before the first offer.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every fixed-term and notice pot is free by the planned viewing date, with no early-access penalty paid."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each locked pot with its maturity date or notice period"
                - "Choose the date you expect to start viewing seriously"
                - "Give notice or plan maturities so the money is free before then"
                - "Move freed money into instant access as each pot unlocks"
            - name: Claiming first-home account funds through the conveyancer
              description: |-
                ## Purpose
                Using a government first-home account for a purchase usually means the conveyancer requests the money from the provider, and the provider may need several weeks and specific paperwork. Telling your conveyancer at instruction and starting the request as early as allowed avoids an exchange held up by a missing payment. Getting the process wrong can trigger the same penalty as an unauthorised withdrawal.

                ## Milestones
                1. The provider's process and timescale for purchase withdrawals confirmed.
                2. The conveyancer told about the account when instructed.
                3. The withdrawal request submitted at the earliest permitted point.
                4. Payment received by the conveyancer before exchange.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The conveyancer has requested the first-home account funds and the provider has confirmed payment before the exchange date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your provider how purchase withdrawals work and how long they take"
                - "Tell the conveyancer about the account when you instruct them"
                - "Submit the withdrawal request as early as the rules allow"
                - "Confirm with the conveyancer that the funds have arrived"
            - name: Sending the deposit to the conveyancer safely
              description: |-
                ## Purpose
                Payment diversion fraud targets home buyers at exactly this point, with fake emails that copy the conveyancer's style and change the bank details. Confirming the details by phone on a number you already hold, and sending a small test payment first, protects the largest single payment most people ever make. Banks may also cap daily transfers, so check limits a week ahead.

                ## Milestones
                1. The conveyancer's bank details saved from the original instruction paperwork.
                2. Daily transfer limits checked with your bank a week before exchange.
                3. Bank details confirmed by phone on a number from that paperwork.
                4. A small test payment acknowledged before the full deposit is sent.

                ## Notes
                Start from the **Operational checklist** template. Treat any email saying the bank details have changed as fraud until you have confirmed otherwise by phone.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The deposit is sent only after bank details are confirmed by phone on a known number, a test payment is acknowledged and limits are cleared."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save the conveyancer's bank details from the original paperwork"
                - "Ask your bank about daily transfer limits a week before exchange"
                - "Phone the conveyancer on a known number to confirm the details"
                - "Send a small test payment and wait for confirmation before the rest"
            - name: Tenancy notice timed to completion
              description: |-
                ## Purpose
                Renters buying their first home face a timing puzzle: give notice too early and you may have nowhere to live if completion slips, too late and you pay rent and a mortgage together. Knowing your notice period, any break clause and the cost of a month's overlap lets you hold that overlap in the savings plan. A smooth check-out also gets your tenancy deposit back in time to help with the move.

                ## Milestones
                1. Notice period and any break clause confirmed from the tenancy agreement.
                2. One month's overlap cost saved as part of buying costs.
                3. Notice given once a completion date is agreed, not before.
                4. A check-out date booked to start the tenancy deposit return.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The notice period and overlap cost are known, an overlap allowance is saved, and notice is given only after a completion date is agreed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the notice period and any break clause in your tenancy"
                - "Add one month's rent overlap to the buying costs budget"
                - "Give notice only after the completion date is agreed"
                - "Book a check-out date with the landlord or agent"
            - name: Saving a joint deposit with a partner
              description: |-
                ## Purpose
                Couples saving together need to agree more than an amount: who pays in what, what happens to each person's share if they split up, and how unequal contributions are recorded. A short written agreement and a monthly check-in keep the plan fair and the conversation easy. If shares are unequal at purchase, a solicitor or conveyancer can record them formally.

                ## Milestones
                1. Each partner's contribution agreed, either equal or in proportion to income.
                2. A written note of what happens to each share if the relationship ends.
                3. A joint deposit account or a pair of named pots set up.
                4. A short monthly check-in held on the same day each month.

                ## Notes
                When the time comes, ask the conveyancer how unequal deposit contributions can be protected in the ownership paperwork.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written joint deposit agreement covers contributions and shares, and monthly check-ins have happened for three months running."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree each partner's monthly contribution to the deposit"
                - "Write down what happens to each share if you split up"
                - "Set up a joint deposit account or two named pots"
                - "Hold a fifteen-minute deposit check-in together @recurring(monthly:26)"
            - name: Solo buyer deposit plan on one income
              description: |-
                ## Purpose
                Buying alone means one salary covers the deposit, the rent while saving and later the whole mortgage, so the plan has to be realistic about all three. Single buyers often do best by combining a government first-home account, a lower-deposit route or a cheaper area with a house share while saving. Setting those combinations side by side shows the shortest path you could actually live with.

                ## Milestones
                1. Three combinations of scheme, area and living arrangement written out.
                2. A deposit target and timeline worked out for each.
                3. The monthly cost of owning alone checked against one take-home pay.
                4. One combination chosen and dated in the savings goal.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A solo deposit plan compares at least three combinations of scheme, area and living arrangement, with one chosen and dated."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write out three combinations of scheme, area and living arrangement"
                - "Work out a deposit target and timeline for each"
                - "Check the monthly cost of owning alone against your take-home pay"
                - "Choose one combination and date it in your savings goal"
            - name: Accepting a gifted deposit from family
              description: |-
                ## Purpose
                Family help sits behind a large share of first-home deposits, and lenders and conveyancers treat it carefully. They usually want a signed letter confirming the money is a gift with no claim on the home, plus identification and bank statements from the giver. Agreeing the terms openly, and getting independent legal advice where the family expects anything back, protects both the relationship and the purchase.

                ## Milestones
                1. The amount, the timing and whether it is a gift or a loan agreed in conversation.
                2. The lender's or conveyancer's gift letter wording obtained.
                3. The giver's identification and statements showing where the money came from gathered.
                4. Independent advice taken if the giver expects a share or repayment.

                ## Notes
                A loan described as a gift can change what you are able to borrow and cause trouble later. Tell the lender honestly which it is.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The gift amount, timing and terms are agreed in writing, and the giver's statements and identification are ready for the conveyancer."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Talk through the amount, timing and gift or loan question with the giver"
                - "Get the gift letter wording your lender or conveyancer uses"
                - "Ask the giver to gather identification and recent bank statements"
                - "Book independent legal advice if repayment or a share is expected"
            - name: Moving back with parents to save the deposit
              description: |-
                ## Purpose
                Living rent-free or on low board for a year or two can double a deposit saver's pace, but it works best with an agreed end date and clear house rules. Setting a board amount, a target and a date, and sending the rent you no longer pay straight to the deposit pot, keeps the arrangement purposeful for everyone. Parents also get a clear picture of how long it will last.

                ## Milestones
                1. A board amount, house rules and an end date agreed with your parents.
                2. Your tenancy ended in line with its notice terms.
                3. The standing order raised by the rent you no longer pay.
                4. Progress and the end date reviewed together each quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A board amount, savings target and end date are agreed with parents, and the former rent goes to the deposit pot each month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree the board amount and an end date with your parents"
                - "Give notice on your tenancy in line with its terms"
                - "Raise the standing order by the rent you no longer pay"
                - "Review progress and the end date with your parents @recurring(quarterly)"
            - name: Deposit saving on self-employed income
              description: |-
                ## Purpose
                Self-employed renters face two extra hurdles: income that varies month to month, and lenders who usually want two or more years of accounts. Saving a fixed percentage of every payment received, rather than a fixed monthly amount, keeps the deposit growing in lean and busy months alike. Keeping accounts tidy and tax paid on time now makes the eventual application far simpler.

                ## Milestones
                1. A deposit percentage of every payment received agreed.
                2. Tax set aside before the deposit share is calculated.
                3. The deposit share moved within a week of each payment for three months.
                4. The number of years of accounts you will have at your expected date checked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fixed percentage of every payment received is moved to the deposit pot within a week, after tax is set aside."
                cadence: rolling
              tasks:
                - "Choose the percentage of each payment that goes to the deposit"
                - "Set aside tax before calculating the deposit share"
                - "Move the deposit share of this week's payments @recurring(weekly:fri)"
                - "Check how many years of accounts you will have at your expected date"
            - name: Saving a deposit while raising children in a rental
              description: |-
                ## Purpose
                Parents saving from a rental face higher living costs, less freedom to move somewhere cheaper and often the need for an extra bedroom, which raises the target itself. Planning around the school area and the size of home you will need in five years, not just now, avoids saving for the wrong home. Childcare and school costs shift every school year, so the plan needs a yearly look.

                ## Milestones
                1. The bedrooms and school area you will need in five years written down.
                2. Sold prices checked in the school areas you would accept.
                3. The deposit target updated for that home size and area.
                4. Childcare and school costs re-checked against the plan each school year.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The deposit target reflects the home size and school area needed in five years, and family costs are re-checked every school year."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the bedrooms and area you will need in five years"
                - "Check sold prices in the school areas you would accept"
                - "Update the deposit target for that home size and area"
                - "Re-check childcare and school costs against the plan @recurring(yearly)"
            - name: Deposit shares in writing when buying with a friend
              description: |-
                ## Purpose
                Pooling a deposit with a friend or sibling can make buying possible years earlier, but it needs more structure than a couple's arrangement because lives diverge. Agreeing in writing how much each puts in, how shares will be held and what happens if one wants to sell or stops paying protects the friendship as well as the money. A solicitor can turn the agreement into a formal document at purchase.

                ## Milestones
                1. Each buyer's deposit contribution and monthly saving agreed.
                2. Ownership shares agreed in proportion to contributions or otherwise.
                3. Exit terms written down: selling, buying out and missed payments.
                4. A solicitor booked to formalise the agreement once an offer is accepted.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written co-buyer agreement covers deposit contributions, ownership shares and exit terms, ready for a solicitor at purchase."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Agree each buyer's deposit contribution and monthly saving"
                - "Decide how ownership shares will follow the contributions"
                - "Ask the agent to draft exit terms for selling, buyouts and missed payments"
                - "Find a solicitor who can formalise the agreement at purchase"
            - name: Regular saver ladder for the deposit pot
              description: |-
                ## Purpose
                Regular saver accounts often pay well above easy-access rates but cap monthly payments, so experienced savers run several at once, fed from an easy-access pot. A ladder of two to four, with maturity dates tracked, can lift the effective rate on the monthly contribution noticeably. It only pays if you will keep the admin going for the full year.

                ## Milestones
                1. Two to four regular saver accounts opened with staggered start dates.
                2. Standing orders set from the main pot up to each account's cap.
                3. Every maturity date recorded in one place.
                4. Each matured balance moved back to the main pot within a week.

                ## Notes
                Some regular savers require a current account with the same bank. Count that hassle before chasing the headline rate.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two to four regular saver accounts are fed monthly from the deposit pot, each with its maturity date tracked and handled on time."
                cadence: rolling
              tasks:
                - "Shortlist regular saver accounts with the best rates and payment caps"
                - "Open two to four and set standing orders from the main pot"
                - "Check upcoming regular saver maturity dates @recurring(monthly:15)"
                - "Move each matured balance back to the main pot within a week"
            - name: Spreading a large deposit across protected institutions
              description: |-
                ## Purpose
                Deposit protection schemes guarantee savings only up to a limit per person per banking licence, and a growing deposit plus a gift or windfall can push past it. Checking which brands share a licence and spreading the pot so every pound sits within the guaranteed limit removes a small but serious risk. Some schemes give temporary higher protection for home sale proceeds, but rarely for savings built up over time.

                ## Milestones
                1. Your country's protection limit per person and per licence noted.
                2. Each account matched to the banking licence it sits under.
                3. Any balance over the limit moved to a separate licence.
                4. Balances compared with the limit each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deposit balance sits within the guaranteed limit for its banking licence, and the check is repeated each quarter."
                cadence: cyclic
              tasks:
                - "Look up your country's deposit protection limit per person"
                - "Check which of your accounts share a banking licence"
                - "Move any amount over the limit to an account under a separate licence"
                - "Compare each balance with the protection limit @recurring(quarterly)"
            - name: Stress test of the deposit plan
              description: |-
                ## Purpose
                Experienced savers ask what would break the plan before it breaks. Testing the timeline against a job loss, a 10 percent jump in local prices, a rent rise and a fall in savings rates shows which risk would hurt most and what the fallback would be. Recording each risk with a trigger and a response turns background worry into a short list you can act on.

                ## Milestones
                1. At least five risks to the plan listed.
                2. The delay each would cause to the expected date estimated.
                3. A trigger and a response written for each risk.
                4. The register reviewed against the plan once a year.

                ## Notes
                Start from the **Risk register** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register lists at least five threats to the deposit plan, each with an estimated delay, a trigger and a response, reviewed yearly."
                cadence: cyclic
              tasks:
                - "List five events that would set the deposit plan back"
                - "Estimate the delay each would cause to the expected date"
                - "Write a trigger and a response for each risk"
                - "Review the risk register against the plan @recurring(yearly)"
---

# First Home Deposit Saving

This area is for renters, and anyone else who has never owned a home, who want to turn a vague plan to buy one day into a deposit with a figure and a date on it. It starts with the foundations (sold-price research, a deposit target, buying costs, saving capacity, a timeline, the right account and any government first-home scheme), then the routines that keep money flowing in, the knowledge that makes the target accurate, the decisions that shorten the wait, the events around exchange and completion, plans for couples, solo buyers, families and the self-employed, and finally the specialist work of an experienced deposit saver.

What repeats is a payday transfer check, a weekly underspend sweep, a monthly progress log and sold-price watch, a quarterly timeline recalculation and rate check, and a yearly check of first-home account allowances, interest tax and the plan's biggest risks. The Savings goal, Purchase decision, Metrics log, Operational checklist and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
