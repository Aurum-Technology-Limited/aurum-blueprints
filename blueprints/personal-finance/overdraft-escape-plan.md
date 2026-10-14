---
id: personal-finance.overdraft-escape-plan
name: Overdraft Escape Plan
description: "A clear picture of your overdraft and what it costs, a monthly reduction plan with limit step-downs, a talk with the bank and the buffer that keeps payday landing in credit for good."
category: personal
version: 1.0.0
tags: [personal-finance, overdraft-escape-plan, everyone, overdraft, bank-charges, cash-buffer, debt]
author: Aurum Technology
starter_structure:
  templates:
    - remediation-plan
    - monthly-budget-bills
    - habit-tracker
    - metrics-log
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Overdraft Escape Plan
          description: "Climbing out of a persistent overdraft with a gradual reduction plan, fee checks and buffers that stop slipping back."
          projects:
            - name: Ninety-day overdraft balance snapshot
              description: |-
                ## Purpose
                Describing a persistent overdraft as a single number is easy, but the shape matters more: how deep the account goes, on which days, and how high payday lifts it. Three months of daily balances show the lowest point, the highest point and how many days you spend below zero. Every plan in this area is measured against this starting picture.

                ## Milestones
                1. Ninety days of statements downloaded for the overdrawn account.
                2. The lowest balance, highest balance and their dates recorded for each month.
                3. The number of days spent overdrawn counted for each of the three months.
                4. A one-line starting position written down, such as lowest point, average depth and days in the red.

                ## Notes
                Use the end-of-day balance column, not the transaction amounts. If your bank only shows running balances per transaction, take the last one on each date.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written starting position showing the lowest balance, highest balance and days overdrawn for each of the last three months."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the last three months of statements for the overdrawn account"
                - "Mark the lowest and highest balance in each month"
                - "Count the days in each month the balance sat below zero"
                - "Write the starting position as a single line at the top of your plan"
            - name: Overdraft rate, fee and limit fact sheet
              description: |-
                ## Purpose
                Overdraft pricing is often a single annual rate charged daily, but some accounts add monthly usage fees, interest-free buffers or different rates above a threshold. Knowing exactly what you pay, and what happens if you go past the limit, turns an abstract debt into a monthly cost you can watch shrink.

                ## Milestones
                1. The arranged limit, interest rate and any fee-free buffer written on one page.
                2. Charges for going past the limit or for refused payments recorded from the bank's tariff.
                3. The interest actually charged in each of the last three months copied from statements.
                4. An estimate of what the overdraft costs over a full year at its current depth.

                ## Notes
                Banks publish a tariff or price list for each account. Use that rather than the marketing page, which often leaves out the fine print.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page fact sheet listing the limit, rate, buffer, over-limit charges and a yearly cost estimate for your overdraft."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the price list or tariff for your exact account on the bank's site"
                - "Copy the limit, rate and any fee-free buffer onto one page"
                - "Add the interest charged in each of the last three months"
                - "Re-read the overdraft section of your account terms @recurring(yearly)"
            - name: Cause map for why the account dips into the red
              description: |-
                ## Purpose
                Overdrafts persist for a handful of different reasons, and each needs a different fix: spending that runs a little above income, a one-off shock that was never repaid, bills that land before payday, or irregular costs nobody planned for. Sorting your last three months into these causes stops you from cutting the wrong thing and wondering why nothing changes.

                ## Milestones
                1. Each month's net position worked out as money in minus money out.
                2. The original event that first took the account overdrawn identified, if there was one.
                3. Every dip deeper than usual traced to a named payment or cost.
                4. The main cause chosen from the four types, with a sentence explaining why.

                ## Notes
                If money out is higher than money in every month, the overdraft is a symptom of a monthly shortfall. Fix that first, or the limit will refill as fast as you clear it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written cause map naming the main reason the account stays overdrawn, backed by three months of net income figures."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out money in minus money out for each of the last three months"
                - "Find the month the account first went into the red and what happened"
                - "Label each unusually deep dip with the payment that caused it"
                - "Write one sentence naming the main cause of your overdraft"
            - name: Low balance and limit alerts on every account
              description: |-
                ## Purpose
                Most overspending into an overdraft happens without anyone noticing until the statement arrives. Banking apps can text or notify you when the balance falls below a chosen amount, when you go overdrawn, and when you near the limit. Setting these on day one costs ten minutes and stops refused payments and over-limit charges before they happen.

                ## Milestones
                1. An alert set for when the account goes below zero.
                2. A second alert set at a level close to the arranged limit.
                3. Payment refusal or returned payment notifications switched on.
                4. A test alert received to confirm notifications reach your phone.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Overdrawn, near-limit and refused payment alerts are switched on and one has been confirmed as arriving on your phone."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Open the alerts section of your banking app"
                - "Switch on an alert for when the balance drops below zero"
                - "Add an alert at about four fifths of your arranged limit"
                - "Turn on notifications for refused or returned payments"
            - name: Separate account so payday is not swallowed
              description: |-
                ## Purpose
                When salary lands in an overdrawn account, the overdraft absorbs it first and the month starts with less than it seems. A second, overdraft-free account for bills or day-to-day spending gives you a clean view of real money, and stops the overdraft quietly funding everyday life. It also protects you if the bank ever reduces or recalls the limit.

                ## Milestones
                1. A basic or fee-free second account opened, ideally at a different bank.
                2. A decision recorded on whether bills or spending money moves to the new account.
                3. A fixed payday transfer set up from the overdrawn account to the new one.
                4. The new account running for two full months without going below zero.

                ## Notes
                Choose a second account with no overdraft at all, or ask for any overdraft to be removed when you open it. Using a different bank also avoids the set-off rules covered later in this area.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A second account with no overdraft has received two monthly payday transfers and never gone below zero."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare three basic accounts that come with no overdraft"
                - "Decide whether bills or spending money will move to the new account"
                - "Open the new account and ask for any overdraft to be removed"
                - "Set a standing order on payday into the new account"
            - name: Monthly overdraft reduction amount
              description: |-
                ## Purpose
                Escaping a persistent overdraft comes down to spending a fixed amount less than you earn each month, so the lowest balance rises step by step. Choosing that amount from a real budget, rather than a hopeful guess, sets the pace of the whole plan. A smaller amount you can hold for twelve months beats a big one that collapses in the second.

                ## Milestones
                1. A monthly budget showing income, fixed costs and variable spending.
                2. A surplus amount identified that can go towards the overdraft each month.
                3. The months to clear the overdraft worked out from that amount.
                4. The amount tested for one full month before committing to it.

                ## Notes
                Start from the **Monthly budget and bills** template.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A fixed monthly reduction amount, based on a written budget and tested for one month, is recorded alongside the months it will take to clear the overdraft."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a monthly budget from the template using last month's real figures"
                - "Find the amount left after fixed costs and realistic variable spending"
                - "Divide the overdraft depth by that amount to estimate the months needed"
                - "Run the amount for one month and adjust it before committing"
            - name: Written overdraft escape plan with a target date
              description: |-
                ## Purpose
                Plans kept in your head bend every time a hard week arrives. Writing down the starting position, the monthly reduction amount, the limit step-downs and a target date makes the plan something you can check against and share with a partner or adviser. It also gives you a clear point to celebrate rather than a slow fade.

                ## Milestones
                1. The starting position, main cause and monthly reduction amount written on one page.
                2. A schedule of planned limit reductions month by month.
                3. A target date for the first payday that lands in credit.
                4. Three rules for what to do if a month goes off plan.

                ## Notes
                Start from the **Remediation plan** template. Keep it to one page so it gets read.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page escape plan with a starting position, monthly amount, step-down schedule, target date and three fallback rules exists and has been read by one other person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the escape plan from the remediation plan template"
                - "Add the starting position, cause and monthly reduction amount"
                - "Ask the agent to draft a month-by-month limit step-down schedule from your figures"
                - "Write three rules for what happens in a month that goes off plan"
            - name: Telling your bank about your escape plan
              description: |-
                ## Purpose
                Banks in many countries are expected to help customers who use their overdraft month after month, and some will freeze interest, offer a cheaper repayment route or agree a gradual limit reduction. A short call or secure message, made before the bank contacts you, puts you in a stronger position and often lowers the cost of the whole plan.

                ## Milestones
                1. A short summary of your plan and monthly amount prepared before contact.
                2. The bank contacted and asked what support it offers for persistent overdraft use.
                3. Any offer received written down with its terms and effect on your credit file.
                4. A decision recorded on whether to accept the offer.

                ## Notes
                Ask how any arrangement will be reported to credit reference agencies before you agree to it. Some reduce the cost a lot but leave a mark on the file for several years.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The bank has been told about your plan, any support offered is recorded with its credit file effect, and a decision on it is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three sentences summarising your plan and monthly amount"
                - "Contact the bank and ask what help exists for persistent overdraft use"
                - "Ask how any offer would show on your credit file"
                - "Record the offer and your decision in your escape plan"
            - name: Warning signs that the overdraft needs free debt advice
              description: |-
                ## Purpose
                An overdraft that is used to pay essential bills, or one sitting alongside missed payments on other debts, is past the point a reduction plan alone can fix. Writing down the signs that mean it is time to speak to a free, regulated debt advice service means you act on them early rather than after charges have piled up.

                ## Milestones
                1. A list of personal warning signs written, such as using the overdraft for rent or missing other payments.
                2. Two free, regulated debt advice services in your country noted with contact details.
                3. A clear trigger agreed: which sign, or how many, means booking advice.
                4. The list kept with the escape plan and checked at each quarterly review.

                ## Notes
                Choose free, not-for-profit services. Be wary of firms that cold call or charge upfront fees for debt help.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written list of warning signs, a trigger for seeking help and the details of two free debt advice services are kept with the escape plan."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the signs that would mean the overdraft is beyond a simple plan"
                - "Find two free, regulated debt advice services in your country"
                - "Write down the trigger that means you will book an appointment"
                - "Keep the list with your escape plan"
            - name: Essential-only spending rule while overdrawn
              description: |-
                ## Purpose
                Every non-essential purchase made below zero is borrowed at the overdraft rate. A simple written rule about what can and cannot be bought while the balance is negative, and a short list of exceptions, removes the daily negotiation with yourself and keeps the reduction amount intact.

                ## Milestones
                1. A list of what counts as essential while the account is overdrawn.
                2. A small, fixed allowance for treats agreed so the rule is livable.
                3. Card details removed from shopping sites and apps that drive impulse spending.
                4. Four weeks completed with spending inside the rule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written essential-only list and treat allowance exist, and four consecutive weeks of spending have stayed within them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the list of what counts as essential while overdrawn"
                - "Agree a small weekly allowance for non-essentials"
                - "Remove saved card details from the three sites you buy from most"
                - "Review the first four weeks against the rule"
            - name: Weekly lowest-balance check
              description: |-
                ## Purpose
                The lowest balance of the month is the number that tells you whether the plan is working, and it usually arrives in the days before payday. A five-minute Monday look at the current balance against where the plan says it should be catches drift while there is still time to adjust the week.

                ## Milestones
                1. A weekly slot set for checking the balance against the plan.
                2. Each week's balance written in a simple log.
                3. A rule agreed for what to change if the balance is behind plan.
                4. Twelve consecutive weekly checks completed.

                ## Notes
                Start from the **Habit tracker** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly balance checks are logged against the plan, with any action taken noted."
                cadence: rolling
              tasks:
                - "Create a habit tracker for the weekly balance check"
                - "Check the balance and write it against the plan @recurring(weekly:mon)"
                - "Decide one change for the week if the balance is behind plan"
            - name: Monthly overdraft limit step-down
              description: |-
                ## Purpose
                An unused limit is an open invitation, and the balance tends to drift back towards it. Asking the bank to lower the limit each month by roughly your reduction amount locks in progress and stops the space you clear from being spent again. Most banks let you change the limit in the app in a minute.

                ## Milestones
                1. The step-down amount agreed in line with your monthly reduction amount.
                2. The first limit reduction made in the app or by phone.
                3. A step-down made in each of the following months, keeping a small gap above the lowest balance.
                4. The limit at or below half its starting level.

                ## Notes
                Keep the new limit a little below your expected lowest point, not below it. A limit set too low causes refused payments and charges that undo the plan.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The arranged limit has been reduced in at least six separate months and now sits at or below half its starting level."
                cadence: rolling
              tasks:
                - "Find where to change the overdraft limit in your banking app"
                - "Lower the limit by your step-down amount after payday @recurring(monthly:3)"
                - "Write the new limit in your escape plan"
            - name: Overdraft interest and charges record
              description: |-
                ## Purpose
                Watching the monthly interest charge fall is the clearest sign the plan is working, and it is motivating in a way the balance alone is not. A short record of interest and any fees each month also catches errors and charges you could ask to have refunded.

                ## Milestones
                1. A log with columns for month, interest, fees and lowest balance.
                2. The last three months entered from statements.
                3. Each new month's charges entered within a week of the statement.
                4. A running total of overdraft costs paid since the plan started.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A charges log holding at least six consecutive months of interest, fees and lowest balance, with a running total."
                cadence: rolling
              tasks:
                - "Create a charges log from the metrics log template"
                - "Enter the last three months of interest and fees from statements"
                - "Add this month's overdraft interest and any fees to the log @recurring(monthly:9)"
                - "Flag any fee you think was applied wrongly"
            - name: Days-in-the-red count each month
              description: |-
                ## Purpose
                Before the overdraft clears, the first sign of progress is fewer days spent below zero, because each payday lifts the account a little higher and for a little longer. Counting those days each month shows momentum early, when the balance itself still looks stubborn.

                ## Milestones
                1. A baseline count of days overdrawn taken from the snapshot.
                2. The count added to the charges log each month.
                3. Three months in a row with fewer days overdrawn than the baseline.
                4. A month with fewer than ten days in the red.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly counts of days overdrawn are recorded, and the latest is lower than the baseline."
                cadence: rolling
              tasks:
                - "Add a days-overdrawn column to your charges log"
                - "Count last month's days below zero and log the figure @recurring(monthly:28)"
                - "Compare the count with the baseline and note the change"
            - name: Lean week before payday
              description: |-
                ## Purpose
                Usually the final week before payday is when the balance hits its lowest point and when most limit breaches happen. Planning that week in advance, with a smaller spending amount, meals from the cupboard and nothing optional booked, protects the lowest balance without making the whole month feel tight.

                ## Milestones
                1. The lowest-balance week identified from the snapshot.
                2. A smaller spending amount set for that week.
                3. A cupboard and freezer meal plan used for the week.
                4. Three lean weeks completed without breaching the plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three lean weeks before payday are completed, each with spending under the set amount and no limit breach."
                cadence: rolling
              tasks:
                - "Mark the week before payday as the lean week in your calendar"
                - "Set the lean week spending amount and plan cupboard meals @recurring(monthly:21)"
                - "Move any optional plans in that week to after payday"
            - name: Twelve-month dip forecast for irregular costs
              description: |-
                ## Purpose
                Car services, annual subscriptions, school trips and birthdays push the account deeper in the same months each year, often wiping out three months of progress. A simple forecast of which months will dip, and by how much, lets you set aside a little beforehand or lower the step-down that month instead of being surprised.

                ## Milestones
                1. Twelve months of past statements scanned for costs that are not monthly.
                2. A calendar of expected irregular costs with rough amounts.
                3. The months with the deepest expected dips marked in the escape plan.
                4. The forecast refreshed each quarter.

                ## Notes
                This is about predicting the dips in the overdraft. Building named savings pots for each cost belongs in a sinking funds plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A twelve-month forecast of irregular costs exists, with the deepest dip months marked in the plan and a refresh in the last quarter."
                cadence: cyclic
              tasks:
                - "Scan twelve months of statements for costs that are not monthly"
                - "List each one by the month it falls in with a rough amount"
                - "Mark the deepest dip months in the escape plan"
                - "Refresh the forecast for the next twelve months @recurring(quarterly)"
            - name: Windfall and refund rule for the overdraft
              description: |-
                ## Purpose
                Tax refunds, bonuses, birthday money and sale proceeds tend to disappear into everyday spending because the overdraft makes the account look like it has room. A rule decided in advance, for example most of any windfall goes straight to the overdraft and a small share is kept to enjoy, turns lucky months into big leaps.

                ## Milestones
                1. A percentage split for windfalls written into the escape plan.
                2. A list of likely windfalls in the coming year, such as refunds or bonuses.
                3. The first windfall handled by the rule.
                4. The limit lowered to lock in each windfall.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written windfall rule exists and at least one windfall has been split by it, with the limit lowered afterwards."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose the share of any windfall that goes to the overdraft"
                - "List the refunds, bonuses or gifts you expect this year"
                - "Apply the rule to the next windfall within a day of it arriving"
                - "Lower the overdraft limit after each windfall"
            - name: Quarterly overdraft escape plan review
              description: |-
                ## Purpose
                Income, bills and life change, and a plan written in January can be out of date by April. A quarterly review of progress, the reduction amount, the limit schedule and the warning signs keeps the plan honest and adjusts the target date before it slips silently.

                ## Milestones
                1. Three months of balances, charges and days overdrawn compared with the plan.
                2. The reduction amount kept, raised or lowered with a reason.
                3. The target date confirmed or moved.
                4. The warning signs list checked for anything that now applies.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive quarterly reviews are recorded, each with a decision on the monthly amount and a confirmed target date."
                cadence: cyclic
              tasks:
                - "Compare the last three months of balances and charges with the plan @recurring(quarterly)"
                - "Decide whether to raise, keep or lower the monthly amount"
                - "Confirm or move the target date and write down why"
                - "Check the warning signs list against the last quarter"
            - name: Moving large debits away from the low point
              description: |-
                ## Purpose
                When rent, loan repayments and big direct debits all leave in the days before payday, the account is pushed to its deepest point at the worst moment. Asking for payment dates to move to just after payday raises the lowest balance without changing a single cost, and can halve the interest charged.

                ## Milestones
                1. The five largest regular payments listed with their dates.
                2. Each one compared with your payday and the account's low point.
                3. Requests made to move the payments that fall in the low week.
                4. The new lowest balance compared with the old one after two months.

                ## Notes
                Moving a date can mean one month with two payments close together. Check the timing before you ask so the change month does not cause a breach.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The largest debits that fell in the low week have been moved to after payday, and the lowest balance two months later is higher than before."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your five largest regular payments and the dates they leave"
                - "Mark which ones fall in the week before payday"
                - "Ask each provider to move the payment date to after payday"
                - "Check whether payment dates still suit your payday @recurring(yearly)"
            - name: How daily overdraft interest is worked out
              description: |-
                ## Purpose
                Overdraft interest is usually charged on the balance at the end of each day and added once a month, so the depth and the number of days both matter. Working through your own statement once shows why moving a payment by a week or holding the balance a little higher saves real money.

                ## Milestones
                1. The bank's method for calculating overdraft interest found in its terms.
                2. One month of interest recalculated by hand from daily balances.
                3. The recalculation matched to the statement within a small margin.
                4. Two changes written down that would reduce next month's interest.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One month of overdraft interest has been recalculated from daily balances and matches the statement, with two cost-saving changes noted."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find how your bank calculates overdraft interest in the account terms"
                - "Write down each day's closing balance for last month"
                - "Work out the interest and compare it with the statement"
                - "Note two changes that would have lowered the charge"
            - name: Arranged and unarranged overdrafts explained
              description: |-
                ## Purpose
                An arranged overdraft is a limit agreed in advance; going past it, or overdrawing with no agreement, is treated very differently and can mean refused payments, charges and a worse mark on your credit file. Understanding where those lines sit for your account makes the alerts and limit step-downs make sense.

                ## Milestones
                1. The difference between arranged and unarranged borrowing written in your own words.
                2. What your bank does when a payment would take you past the limit recorded.
                3. Any charges for refused or returned payments noted.
                4. How each type is reported to credit reference agencies recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note explains arranged and unarranged borrowing, your bank's over-limit handling, the charges and the credit file effect."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Read your bank's explanation of arranged and unarranged overdrafts"
                - "Write down what happens when a payment would breach your limit"
                - "Note the charges for refused or returned payments"
                - "Find how each type is reported to credit reference agencies"
            - name: How overdraft use appears on your credit file
              description: |-
                ## Purpose
                Lenders can see the overdraft limit, the balance each month and whether you stayed within it, and long periods near the limit can count against a mortgage or loan application. Checking how your overdraft shows on your own report tells you what a lender will see and how each month of progress improves it.

                ## Milestones
                1. A free statutory or app-based credit report downloaded.
                2. The current account entry found with its limit and monthly balances.
                3. Any months recorded as over the limit noted.
                4. The report checked again after six months of the plan.

                ## Notes
                Report each credit file error to the credit reference agency directly. Fixing your wider credit score belongs in a credit score plan; this project is only about the overdraft entry.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The overdraft entry on your credit report has been read, any over-limit months noted, and the entry rechecked after six months."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Download a free copy of your credit report"
                - "Find the current account entry and its monthly balances"
                - "Note any months shown as over the arranged limit"
                - "Check the overdraft entry on your credit report @recurring(yearly)"
            - name: Right of set-off and money held at the same bank
              description: |-
                ## Purpose
                In many countries a bank can use money in one of your accounts to cover a debt on another account with the same bank, in some circumstances without asking first. If your savings or salary sit at the bank that holds the overdraft, it is worth knowing where you stand before it matters.

                ## Milestones
                1. Your bank's set-off terms found and read.
                2. Every account you hold with the same banking group listed.
                3. Any essential money at risk identified.
                4. A decision recorded on whether to move savings or bills money elsewhere.

                ## Notes
                Rules on set-off and on protecting money for essential bills vary by country. If the bank has already taken money, a free debt adviser can explain your options.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "Your bank's set-off terms have been read, every linked account listed, and a decision recorded on where essential money is held."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Search your bank's terms for set-off or combining accounts"
                - "List every account you hold with the same banking group"
                - "Decide whether savings or bills money should sit elsewhere"
            - name: The one-month-behind loop explained
              description: |-
                ## Purpose
                A persistent overdraft usually means this month is being paid for with next month's salary. Until you can see that loop clearly, each payday feels like it should fix things and never does. Mapping one month of money in and out shows how much buffer is missing and why clearing it, once, ends the cycle.

                ## Milestones
                1. One month's income and spending plotted against the daily balance.
                2. The point where spending runs onto next month's pay marked.
                3. The size of the missing buffer written down.
                4. The buffer figure added to the escape plan as the end goal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-month balance chart shows where spending runs onto the next payday, and the size of the missing buffer is recorded in the plan."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Chart last month's daily balance from payday to payday"
                - "Mark where spending started relying on the next salary"
                - "Work out how much money would end the loop"
                - "Write that figure in your plan as the end goal"
            - name: When a bank can cut or recall an overdraft
              description: |-
                ## Purpose
                Most arranged overdrafts are repayable on demand, so a bank can reduce or withdraw the limit, usually with notice. Knowing the notice period, how the bank decides and what to do if it happens means a letter does not become an emergency.

                ## Milestones
                1. Your account terms checked for how and when the limit can change.
                2. The notice period for reductions recorded.
                3. A short response plan written in case the limit is cut.
                4. Free debt advice contacts kept with the response plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records your bank's notice period for limit changes and a written response plan exists for a cut or recall."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Read the section of your terms on changing or cancelling the overdraft"
                - "Write down the notice period the bank must give"
                - "Draft three first steps you would take if the limit were cut"
            - name: Low-rate loan against the overdraft comparison
              description: |-
                ## Purpose
                Personal loans often charge less than an overdraft, and a fixed loan has an end date built in. Replacing the overdraft with a loan only works if the limit is removed or reduced at the same time, otherwise you end up with both. A careful comparison of total cost, monthly payment and that risk is worth an evening.

                ## Milestones
                1. The cost of clearing the overdraft by your plan worked out in total.
                2. Two or three loan quotes from eligibility checkers that do not mark your file.
                3. The total cost and monthly payment of each option compared side by side.
                4. A decision recorded, including what will happen to the overdraft limit.

                ## Notes
                Only use soft search eligibility tools while comparing. If a loan is taken, cut the overdraft limit on the same day the loan pays it off.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of overdraft cost against at least two loan quotes ends in a recorded decision that covers the overdraft limit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out the total interest of clearing the overdraft under your current plan"
                - "Get two or three soft search loan quotes"
                - "Compare total cost and monthly payment for each option"
                - "Record the decision and the plan for the limit"
            - name: Switching to an account with cheaper overdraft pricing
              description: |-
                ## Purpose
                Overdraft rates vary widely between banks, and a few accounts offer an interest-free amount or a lower rate for existing customers. Moving the overdraft is only possible if a new bank offers a large enough limit, so the decision depends on cost, eligibility and the risk of ending up with two overdrafts.

                ## Milestones
                1. Your current overdraft rate compared with at least three other accounts.
                2. Eligibility for a matching limit checked without a hard search, where possible.
                3. The saving over a year estimated against any switching effort.
                4. A decision recorded on whether to switch, with the old limit removed if you do.

                ## Notes
                A switch is only worth it if the old overdraft is closed. Switching bonuses and savings rates are a separate decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of overdraft pricing at three or more banks ends in a recorded switch decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the overdraft rate and any interest-free amount at three other banks"
                - "Check whether each would likely offer a large enough limit"
                - "Estimate a year's saving from switching"
                - "Compare your overdraft rate with two other banks @recurring(yearly)"
            - name: Money transfer card to clear the overdraft
              description: |-
                ## Purpose
                Some credit cards offer a money transfer that pays cash into your current account at a low or zero rate for a fixed period, for a one-off fee. Used carefully, it can stop overdraft interest while you repay, but it moves the debt rather than clearing it, and the rate jumps when the offer ends.

                ## Milestones
                1. The fee, promotional rate, offer length and rate afterwards written down for two cards.
                2. The monthly payment needed to clear the transfer before the offer ends worked out.
                3. A decision recorded on whether the saving outweighs the fee and risk.
                4. If used, the overdraft limit reduced on the day the money arrives.

                ## Notes
                This only works if the overdraft limit is cut at the same time. Otherwise the overdraft refills and you hold two debts.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a money transfer, with the fee, monthly payment and offer end date written down, and the limit cut if it went ahead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find two money transfer offers you are likely to be accepted for"
                - "Write down the fee, offer length and rate afterwards for each"
                - "Work out the monthly payment that clears the transfer in time"
                - "Check the transfer is on track to clear before the offer ends @recurring(monthly:15)"
            - name: Using savings to clear the overdraft in one go
              description: |-
                ## Purpose
                Savings earning a low rate while an overdraft charges a high one is a common and expensive mismatch, but emptying every account can leave you with no cushion and back in the red at the first surprise. Deciding how much to use, and how much to keep, is the trade-off at the heart of this project.

                ## Milestones
                1. Savings balances and their interest rates listed against the overdraft rate.
                2. A minimum cushion to keep agreed before anything is moved.
                3. The amount to transfer decided and written down.
                4. The overdraft limit reduced by the amount paid off on the same day.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A decision on how much savings to use is recorded with a cushion amount, and any payment made is matched by a limit reduction the same day."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List each savings balance and its rate beside the overdraft rate"
                - "Decide the cushion you will keep no matter what"
                - "Move the agreed amount into the overdrawn account"
                - "Lower the overdraft limit by the same amount that day"
            - name: Short-term income boost for a faster exit
              description: |-
                ## Purpose
                Cutting spending only goes so far; a few months of extra income aimed at the overdraft can halve the time it takes. Overtime, a seasonal shift, a short freelance job or selling things you no longer use all count, as long as every extra pound goes to the overdraft on the day it arrives.

                ## Milestones
                1. Three possible sources of extra income listed with realistic monthly amounts.
                2. One source chosen and started for a fixed period, such as three months.
                3. Every extra payment moved to the overdraft on the day it arrives.
                4. The time saved on the target date worked out at the end of the period.

                ## Notes
                Check whether the extra income affects your tax or any benefits before you start.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A fixed period of extra income has been completed, every payment sent to the overdraft, and the months saved on the target date recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List three ways to earn extra money in the next three months"
                - "Pick one and set a start and end date"
                - "Move each extra payment to the overdraft the day it lands"
                - "Work out how much sooner the overdraft will clear"
            - name: Asking the bank for a repayment plan or interest freeze
              description: |-
                ## Purpose
                If the monthly reduction amount is small and interest is eating most of it, a bank may agree to freeze interest, convert the overdraft to a fixed repayment plan or reduce the rate. A well-prepared request, with your budget and plan to hand, is far more likely to succeed than a call made in a panic.

                ## Milestones
                1. A summary prepared with income, essential costs, the surplus and the overdraft balance.
                2. The bank asked about interest freezes, lower rates or a structured repayment plan.
                3. Any offer's terms and credit file effect written down.
                4. The agreed arrangement checked on the next two statements.

                ## Notes
                Ask for any agreement in writing. Arrangements can affect your credit file, so weigh the saving against that before accepting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A request has been made with a written budget, the bank's response and credit file effect recorded, and any agreement confirmed on two statements."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Prepare a one-page budget showing your surplus and overdraft balance"
                - "Ask the bank about an interest freeze or structured repayment plan"
                - "Get any agreement in writing with its credit file effect"
                - "Check the agreed terms are being applied on the statement @recurring(monthly:12)"
            - name: Complaint about overdraft charges you could not avoid
              description: |-
                ## Purpose
                Charges applied after a bank error, charges during a period of known hardship, or repeated fees that the bank should have flagged as persistent use can sometimes be refunded. A short, factual complaint with dates and amounts, followed through to the free ombudsman or dispute service if needed, costs nothing but time.

                ## Milestones
                1. Each disputed charge listed with its date, amount and reason.
                2. A written complaint sent through the bank's official complaints route.
                3. The bank's final response received and recorded.
                4. A decision made on whether to escalate to the free ombudsman or dispute service.

                ## Notes
                Keep the complaint to facts and dates. Note the deadline for escalating after the bank's final response, as most ombudsman schemes have one.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A dated complaint listing disputed charges has received a final response from the bank, and the escalation decision is recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List each charge you believe was unfair with its date and amount"
                - "Ask the agent to draft a short, factual complaint letter from your list"
                - "Send the complaint through the bank's official complaints channel"
                - "Record the final response and the escalation deadline"
            - name: Choosing your post-escape overdraft limit
              description: |-
                ## Purpose
                Once the balance stays above zero, you have to decide whether to remove the overdraft completely, keep a small safety limit or keep the original one. Each choice has a cost: a zero limit risks refused payments, while a large one invites old habits back. A deliberate decision beats leaving whatever the bank last set.

                ## Milestones
                1. The pros and cons of zero, small and unchanged limits written for your situation.
                2. Your buffer size compared with your largest single payment.
                3. A limit chosen and set in the app.
                4. The decision reviewed after three months in credit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A post-escape limit has been chosen with written reasons, set at the bank, and reviewed after three months."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the case for a zero limit, a small one and the current one"
                - "Compare your buffer with your largest regular payment"
                - "Set the chosen limit in your banking app"
                - "Book a reminder to review the limit three months later"
            - name: Cutting the three costs behind the deepest dips
              description: |-
                ## Purpose
                Just two or three specific costs usually do most of the damage behind overdraft dips, such as a takeaway habit before payday, a car payment or a weekly online shop. Finding those three and cutting or moving each one is more effective than trimming every category a little.

                ## Milestones
                1. The three costs that most often push the account deepest identified from the cause map.
                2. A specific cut or change written for each.
                3. Each change in place for two months.
                4. The saving moved into the monthly reduction amount.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three named costs have been cut or moved for two months, with the saving added to the monthly reduction amount."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick the three costs that most often deepen the overdraft"
                - "Write one specific change for each cost"
                - "Add the combined saving to your monthly reduction amount"
                - "Check after two months that each change has held"
            - name: Responding to a repeat overdraft use letter
              description: |-
                ## Purpose
                Some banks are required to contact customers who have used their overdraft for many months in a row, and the letter can feel alarming. It is usually an offer of help and a prompt to act. Replying with your plan, rather than ignoring it, often opens cheaper repayment options and shows the bank you are working on it.

                ## Milestones
                1. The letter read and the options it offers listed.
                2. Your escape plan and budget ready to share.
                3. The bank contacted within the time the letter asks.
                4. The outcome and any agreed change recorded in the escape plan.

                ## Notes
                If the letter mentions reducing or removing the overdraft, ask how much notice you will have and seek free debt advice before agreeing to anything you cannot afford.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The bank has received a reply to its repeat use letter within its time frame and the outcome is recorded in the plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the letter and list every option the bank offers"
                - "Have your escape plan and budget ready to share"
                - "Contact the bank before the date given in the letter"
                - "Record the outcome in your escape plan"
            - name: Overdraft rate change notice response
              description: |-
                ## Purpose
                Banks must give notice before raising overdraft rates or changing fees, and a rise can quietly add months to the plan. Reading the notice, recalculating the cost and deciding whether to switch, speed up or ask for a better rate turns a letter into a decision.

                ## Milestones
                1. The new rate or fee and its start date recorded.
                2. The extra cost per month worked out at your current depth.
                3. Options considered: switch, speed up repayment or ask the bank to reconsider.
                4. A decision recorded before the change takes effect.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A decision on a rate change notice is recorded before the new rate starts, with its monthly cost worked out."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note the new rate or fee and the date it starts"
                - "Work out the extra monthly cost at your current balance"
                - "Choose to switch, repay faster or ask the bank to reconsider"
                - "Update the escape plan target date if needed"
            - name: First payday that lands in credit
              description: |-
                ## Purpose
                The first month where the account is above zero the moment salary arrives is the real turning point, because from then on the money is yours rather than the bank's. Marking it, and checking it was not a fluke, builds the confidence to keep going.

                ## Milestones
                1. The day before payday checked and found above zero.
                2. The date written in the escape plan.
                3. A small, planned celebration that does not use the overdraft.
                4. The next payday checked to confirm it was not a one-off.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two consecutive paydays are recorded with the account above zero the day before."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the balance on the day before payday"
                - "Write the date in your escape plan"
                - "Plan a small treat paid from money you have"
                - "Confirm the following payday also lands in credit"
            - name: Halfway point overdraft check
              description: |-
                ## Purpose
                Halfway through an escape plan is where motivation dips and old habits creep back. A deliberate checkpoint, with the charges saved so far, days in the red compared with the start and a fresh look at the target date, shows how far you have come and what the second half needs.

                ## Milestones
                1. The overdraft balance at half its starting depth confirmed.
                2. Interest saved so far worked out against the starting rate of charges.
                3. Days in the red compared with the starting snapshot.
                4. One change made for the second half of the plan.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A halfway checkpoint is recorded with interest saved, days in the red compared with the start and one change for the second half."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Confirm the lowest balance is now half its starting depth"
                - "Work out the interest saved compared with month one"
                - "Compare days in the red with your starting snapshot"
                - "Choose one change for the second half"
            - name: Overdraft-free day and final limit decision
              description: |-
                ## Purpose
                The day the lowest balance of the month stays above zero is the end of the escape plan. Tidying up properly, with the limit set to your chosen level, the alerts adjusted and the last charges checked, stops the overdraft from becoming a habit again.

                ## Milestones
                1. A full month with no day below zero confirmed on the statement.
                2. No interest or fees charged on the following statement.
                3. The overdraft limit set to the level chosen for after the escape.
                4. Alerts updated to warn when the buffer runs low.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A statement shows a full month above zero with no overdraft charges, and the limit and alerts are set to the post-escape plan."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Confirm a full calendar month with no day below zero"
                - "Check the next statement shows no overdraft interest or fees"
                - "Set the overdraft limit to the level you chose"
                - "Change the low balance alert to warn when the buffer is half gone"
            - name: Six months clear of the overdraft review
              description: |-
                ## Purpose
                Most people who slip back into a persistent overdraft do it within the first year, often after one expensive month. A review six months after escape checks the buffer, the alerts and the habits, and catches any slide while it is still small.

                ## Milestones
                1. Six months of statements checked for any day below zero.
                2. The buffer balance compared with its target.
                3. Any month that came close traced to its cause.
                4. One adjustment made to keep the next six months clear.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A six-month review is recorded showing days below zero, buffer against target and one adjustment made."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Scan six months of statements for any day below zero"
                - "Compare the buffer balance with its target"
                - "Trace any close month to its cause"
                - "Make one change to protect the next six months"
            - name: Graduate overdraft before the free period ends
              description: |-
                ## Purpose
                Student and graduate accounts often carry an interest-free overdraft that shrinks in steps and then starts charging a few years after graduation. Knowing the exact dates and amounts, and clearing the overdraft in time with the first salaries, avoids a sudden jump from free borrowing to one of the most expensive kinds.

                ## Milestones
                1. The interest-free amount and the dates it reduces written down.
                2. A monthly repayment worked out to clear the overdraft before charges start.
                3. The repayment set as a payday standing order into a separate pot or directly to the balance.
                4. The overdraft clear before the first interest charge.

                ## Notes
                Some graduate accounts offer a cheap personal loan to clear the overdraft. Compare it with simply repaying from salary before you accept.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The graduate overdraft is fully repaid before the date interest would first be charged, with no new borrowing on the account."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the dates your interest-free overdraft amount reduces"
                - "Work out the monthly payment to clear it before charges start"
                - "Set the repayment to happen on payday"
                - "Check how much of the interest-free amount is left @recurring(monthly:17)"
            - name: Shared overdraft on a joint account
              description: |-
                ## Purpose
                On most joint accounts each holder is fully liable for the whole overdraft, and both credit files can show it. Clearing it needs both people to agree the plan, the spending rules and who pays what in, otherwise one person cuts back while the other keeps spending.

                ## Milestones
                1. Both account holders have read the overdraft balance, limit and charges together.
                2. A shared reduction amount and each person's contribution agreed.
                3. Spending rules for the joint card written down.
                4. Three monthly check-ins held together.

                ## Notes
                If the relationship is ending, ask the bank about freezing the overdraft or requiring both signatures, and take advice on shared debts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A joint plan with each person's contribution and card rules is written and three monthly check-ins have been held."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Sit down together with the joint account statements"
                - "Agree each person's monthly contribution to clearing the overdraft"
                - "Write rules for what the joint card can be used for"
                - "Hold a ten-minute joint overdraft check-in @recurring(monthly:25)"
            - name: Overdraft escape on freelance or commission income
              description: |-
                ## Purpose
                When income arrives in uneven lumps, the overdraft often becomes the buffer between good and bad months. Clearing it means building a holding pot that pays you the same amount each month, then cutting the limit as the pot grows, so a slow month draws on your own money instead of the bank's.

                ## Milestones
                1. Twelve months of income listed to find a realistic monthly baseline.
                2. A holding pot opened that all client payments go into first.
                3. A fixed monthly transfer from the pot into the current account.
                4. The overdraft limit stepped down as the pot reaches one month of costs.

                ## Notes
                Set aside tax before anything else if you are self-employed. The overdraft plan works on what is left.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A holding pot pays a fixed monthly amount into the current account and the overdraft limit has been stepped down at least three times."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the last twelve months of income to find a low but realistic baseline"
                - "Open a holding pot and redirect client payments into it"
                - "Pay yourself the fixed amount from the holding pot @recurring(monthly:2)"
                - "Lower the overdraft limit each time the pot passes a new month of costs"
            - name: Overdraft on a pension or fixed income
              description: |-
                ## Purpose
                On a pension or fixed benefit income there is little room to earn more, so the overdraft has to be cleared through timing, small cuts and claiming everything you are entitled to. A plan built around the exact dates income arrives keeps the account from dipping between payments.

                ## Milestones
                1. Every income source listed with the date it arrives each month.
                2. Bills moved to fall just after the largest payment arrives.
                3. A check made for any entitlement or discount not yet claimed.
                4. A small, steady monthly reduction amount running for three months.

                ## Notes
                A free benefits check from an advice service can turn up help worth more than any spending cut.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Income dates are mapped, bills moved to follow them, an entitlement check done and a reduction amount kept for three months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each pension or benefit payment with the date it arrives"
                - "Ask providers to move bills to just after the largest payment"
                - "Book a free benefits and entitlements check"
                - "Check the balance the day before each pension payment @recurring(monthly:26)"
            - name: School holiday dips for parents
              description: |-
                ## Purpose
                Holiday clubs, extra food, days out and uniforms push family accounts deepest in the same few weeks each year. Planning those weeks a term ahead, with a set amount for each break and a small set-aside starting early, stops the summer from undoing months of progress.

                ## Milestones
                1. The cost of each school holiday estimated from last year's statements.
                2. A spending amount set for each break.
                3. A small set-aside started at the start of each term.
                4. One holiday completed without breaching the plan.

                ## Notes
                Ask about funded holiday activities or clubs with sibling discounts before booking.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A spending amount is set for each school holiday and one holiday has passed without the overdraft going deeper than planned."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Total what each school holiday cost last year from statements"
                - "Set a spending amount for each holiday this year"
                - "Start the set-aside for the next holiday at the start of term @recurring(quarterly)"
                - "Look for funded or discounted holiday clubs nearby"
            - name: Overdraft escape after a drop in hours or pay
              description: |-
                ## Purpose
                Reduced hours, a move to part-time work or the end of overtime can turn a small overdraft into a permanent one within a few months. Re-planning quickly, with a new budget, a lower reduction amount and an early talk with the bank, keeps the overdraft from growing while income recovers.

                ## Milestones
                1. A new monthly budget based on the reduced income.
                2. The reduction amount revised, even if it falls to a token figure for now.
                3. The bank told about the change in income.
                4. A date set to revisit the plan when income changes again.

                ## Notes
                If the new income does not cover essentials, look at hardship support and free debt advice first. Reducing the overdraft comes second.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A revised budget and reduction amount reflect the lower income, the bank has been told, and a review date is set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rewrite your monthly budget using the new lower income"
                - "Set a revised reduction amount, even if it is small"
                - "Tell the bank your income has dropped and ask what help is available"
                - "Set a date to revisit the plan"
            - name: Daily balance model for the overdraft
              description: |-
                ## Purpose
                A simple spreadsheet that projects the daily balance from payday to payday, using every known payment and a daily spending figure, shows where the next low point will fall and lets you test changes before making them. It is the tool experienced planners use to set limit step-downs with confidence.

                ## Milestones
                1. A sheet with one row per day for the next three months.
                2. Income and every regular payment placed on its real date.
                3. A daily spending figure added and the projected lowest balance shown.
                4. Projections compared with actual balances for two months and the model corrected.

                ## Notes
                Start from the **Metrics log** template for the actual balances, and keep the projection on a separate tab.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A daily balance model projects three months ahead and has been checked against two months of actual balances."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to set up a daily balance projection from your income and payment dates"
                - "Add a daily spending figure based on last month"
                - "Use the model to test two different step-down amounts"
                - "Update the model with actual balances and correct it @recurring(monthly:14)"
            - name: Living one month ahead after the overdraft
              description: |-
                ## Purpose
                Lasting escape from a persistent overdraft comes from spending last month's pay this month, so payday tops up a buffer rather than rescuing the account. Building a buffer equal to one month of spending, held in the current account or a linked pot, is the step beyond being overdraft-free.

                ## Milestones
                1. The size of a one-month buffer worked out from your budget.
                2. A monthly amount sent into the buffer after the overdraft clears.
                3. The buffer at half its target.
                4. A full month's spending funded from the previous month's pay.

                ## Notes
                This buffer is for timing, not emergencies. Keep it separate in your head from any emergency fund.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A buffer equal to one month of spending is in place and one full month has been paid from the previous month's income."
                cadence: rolling
              tasks:
                - "Work out one month of normal spending from your budget"
                - "Redirect the old overdraft payment into the buffer"
                - "Move the monthly buffer amount on payday @recurring(monthly:24)"
                - "Mark the first month funded entirely from last month's pay"
            - name: Separating business costs from a personal overdraft
              description: |-
                ## Purpose
                Sole traders and side hustlers often run business costs through a personal account, so the overdraft funds stock, tools and late-paying clients. Separating the two shows what the business really costs, makes tax records simpler and stops personal borrowing from quietly financing the business.

                ## Milestones
                1. Business payments in the last three months identified on the personal account.
                2. A separate account opened for business income and costs.
                3. All business payments and income redirected to it.
                4. A fixed monthly draw paid from the business account to the personal one.

                ## Notes
                Ask your accountant or the tax authority's guidance whether business borrowing costs can be claimed. Personal overdraft interest generally cannot.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A separate business account holds all business income and costs, and a fixed monthly draw is the only money moving to the personal account."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Highlight business payments on the last three personal statements"
                - "Open a separate account for the business"
                - "Move client payments and business costs to the new account"
                - "Check no business costs have landed on the personal account @recurring(monthly:6)"
            - name: Helping a family member out of their overdraft
              description: |-
                ## Purpose
                Paying off a relative's overdraft without changing anything else usually just refills it within months. Helping well means sitting down with their statements, helping them build the plan and alerts, and if money changes hands, linking it to a limit cut so the help is not lost.

                ## Milestones
                1. Their agreement given to look at their statements together.
                2. A snapshot, cause and monthly reduction amount worked out with them.
                3. Alerts and a first limit step-down set up on their account by them.
                4. Any money given linked to a matching limit reduction.

                ## Notes
                Keep your own finances separate. Never take on their debt in your name, and point them to free debt advice if the picture is bigger than an overdraft.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A family member has a written escape plan, alerts and a first limit step-down in place, with any gift matched by a limit cut."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask whether they want help and agree what you will look at"
                - "Work through the snapshot and cause map with them"
                - "Help them set alerts and their first limit step-down"
                - "Agree that any money you give is matched by a limit cut"
---

# Overdraft Escape Plan

This area is for anyone whose current account spends most of the month below zero, whether the overdraft is a few hundred left over from student days or a full limit that payday never quite clears. It starts with the foundations (a ninety-day balance snapshot, the real cost of your overdraft, why the account dips, alerts, a monthly reduction amount and a written plan), then the routines that move the lowest balance upwards, what is worth knowing about interest, credit files and set-off, the decisions on loans, switching, savings and talking to the bank, the milestones from the first payday in credit to overdraft-free day, versions for couples, graduates, freelancers, parents and pensioners, and finally the models and month-ahead buffer of someone who has escaped for good.

What repeats is a Monday look at the lowest balance, a monthly limit step-down, a record of interest and days in the red, a lean week before payday, a quarterly look at the year's dips and a plan review. The Remediation plan, Monthly budget and bills, Habit tracker and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
