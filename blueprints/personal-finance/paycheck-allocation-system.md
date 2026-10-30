---
id: personal-finance.paycheck-allocation-system
name: Paycheck Allocation System
description: "A payday system that splits pay automatically into bills, spending, savings and goals accounts: the account map, the transfer plumbing, payday checks and the reviews that keep it running without willpower."
category: personal
version: 1.0.0
tags: [personal-finance, paycheck-allocation-system, everyone, automation, standing-orders, payday, bank-accounts]
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
        - name: Paycheck Allocation System
          description: "Splitting each paycheck automatically into bills, spending, savings and goals accounts so the system runs without willpower."
          projects:
            - name: Map of where your pay goes today
              description: |-
                ## Purpose
                Before splitting anything, you need to see the current plumbing: which account your pay lands in, which direct debits and card payments leave it, and which transfers already run. Most people find two or three forgotten standing orders and a bill paid from the wrong card. A one-page map turns a vague sense of the money into a diagram you can redesign.

                ## Milestones
                1. Every current, savings and credit account listed with its bank and purpose.
                2. Each income source shown with the account it lands in and its usual date.
                3. Every direct debit, standing order and recurring card payment drawn against the account it leaves.
                4. Leaks and oddities marked, such as bills paid from a savings account or two transfers doing one job.

                ## Notes
                Draw it by hand or in any simple diagram tool. Arrows from income to accounts to bills are enough; nobody else needs to read it yet.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page map showing every account, every income and every regular payment, with leaks and oddities marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every account you hold with its bank and what you use it for"
                - "Download the last two months of statements for your main account"
                - "Mark each regular payment on the map with the account it leaves"
                - "Circle anything paid from the wrong account or that you do not recognise"
            - name: Pay date and net amount record for every income
              description: |-
                ## Purpose
                An allocation system fires on a date, so it needs the exact day money arrives and the amount it can rely on. Pay that lands on the last working day, a pension that arrives every four weeks and a benefit paid on a Monday each need different transfer dates. Writing them down once stops transfers firing before the money is there.

                ## Milestones
                1. Every income stream listed with its payer, frequency and the account it lands in.
                2. The lowest net amount of the last three payments recorded for each stream.
                3. The rule each payer uses when payday falls on a weekend or public holiday written down.
                4. The earliest safe transfer date for each stream agreed, at least one working day after arrival.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each income stream has a recorded payer, frequency, lowest recent net amount and earliest safe transfer date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the last three payslips or remittance notices for each income"
                - "Record the lowest net amount from each set of three"
                - "Check whether your employer pays early or late when payday hits a weekend"
                - "Write each income's earliest safe transfer date in the system notes"
            - name: Deciding how many accounts the system needs
              description: |-
                ## Purpose
                Too few accounts and bills money gets spent; too many and you spend Sunday evenings shuffling between nine pots. Most working systems settle on three to five: an income landing account, a bills account, a spending account, a savings account and perhaps one for goals. Choosing the structure on paper first saves opening and closing accounts twice.

                ## Milestones
                1. Three candidate structures sketched, from a simple three-account split to a five-account one.
                2. Each structure scored on effort per month, protection for bills and visibility of spending.
                3. One structure chosen and the job of each account written in a single line.
                4. Existing accounts matched to the new jobs, with gaps and spare accounts noted.

                ## Notes
                Start simple. You can split a spending account later; untangling a dozen pots is harder than it sounds.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One account structure chosen and written down, with a one-line job for every account in it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sketch a three-account, four-account and five-account version of the system"
                - "Score each sketch on monthly effort and how well it protects bill money"
                - "Write one line describing the job of each account you choose"
                - "Match your existing accounts to the new jobs and list what is missing"
            - name: Choosing a bank that handles pots and scheduled transfers
              description: |-
                ## Purpose
                Some banks let you create named sub-accounts in seconds, schedule transfers by date or by income arriving, and see every pot on one screen; others make each new account a fresh application. Picking a provider whose features fit your chosen structure decides whether the system runs itself or needs a weekly nudge. Interest rates matter less here than reliability and control.

                ## Milestones
                1. A feature checklist written: sub-accounts, scheduled transfers, income-triggered rules, separate cards and alerts.
                2. Three providers compared against the checklist, including your current bank.
                3. Deposit protection status confirmed for each provider in your country.
                4. One provider, or a mix of two, chosen with the reason recorded.

                ## Notes
                Start from the **Purchase decision** template. Keeping bills at a long-standing bank and spending in a newer app is a common and sensible split.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider choice recorded, compared against a written feature checklist and confirmed as covered by deposit protection."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the five features your account structure depends on"
                - "Check which of those features your current bank already offers"
                - "Compare two other providers against the same feature list"
                - "Confirm each shortlisted provider is covered by your country's deposit protection scheme"
                - "Record the chosen provider and the reason for choosing it"
            - name: Monthly bills transfer worked out to the unit
              description: |-
                ## Purpose
                The bills account only works if the amount going in each payday covers everything coming out, including the quarterly water bill and the annual subscription. Adding every fixed cost, converting non-monthly ones to a monthly figure and adding a small margin gives one number for the standing order. Guess low and the account runs dry in month three; guess high and spending money is starved for no reason.

                ## Milestones
                1. Every bill that will leave the bills account listed with amount and frequency.
                2. Quarterly and annual bills converted to a monthly equivalent.
                3. A margin of around 5 percent added for price rises between reviews.
                4. One monthly bills transfer figure recorded, with the workings kept beside it.

                ## Notes
                Start from the **Monthly budget and bills** template. If you are paid weekly or four-weekly, work out the figure per pay rather than per month.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single bills transfer figure recorded with its workings, covering every listed bill plus a margin of about 5 percent."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every bill that should come out of the bills account"
                - "Convert each quarterly and annual bill to a monthly amount"
                - "Add a 5 percent margin and round up to a whole number"
                - "Ask the agent to check the bills total and workings for missed items"
            - name: Setting the split for each payday
              description: |-
                ## Purpose
                With the bills figure known, the rest of the pay needs a destination before it arrives: savings first, then goals, then the spending allowance, with only a deliberate small cushion left in the landing account. Fixed amounts suit steady salaries; percentages suit pay that varies a little. A written split that adds up exactly to net pay is the specification every transfer is built from.

                ## Milestones
                1. The split written as amounts or percentages that add up exactly to the lowest net pay.
                2. Savings and goal transfers set to go before the spending allowance.
                3. Each goal transfer calculated from its target amount and date.
                4. A small fixed cushion left in the landing account on purpose.
                5. The split agreed with anyone else who relies on these accounts.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split that adds up exactly to the lowest recent net pay, with savings placed before spending."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Subtract the bills transfer from your lowest net pay"
                - "Decide the savings transfer before setting any spending amount"
                - "Work out each goal transfer by dividing its target by the paydays left"
                - "Check the split adds up exactly to net pay and write it down"
            - name: Opening and naming the allocation accounts
              description: |-
                ## Purpose
                Accounts called Savings 2 or Current account ending 4417 are easy to mix up when setting a transfer at 11pm. Opening the missing accounts and renaming every one after its job (Bills, Spending, Safety, Holiday) makes mistakes visible and the system readable at a glance. It is usually an afternoon's work spread over a week of identity checks.

                ## Milestones
                1. Every account the chosen structure needs is open and usable.
                2. Each account renamed in the banking app after its single job.
                3. Account numbers and bank codes recorded in one secure place.
                4. Spare accounts that have no job either closed or marked dormant.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every account in the chosen structure is open and named after its job, with spare accounts closed or marked dormant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Apply for each missing account in the structure you chose"
                - "Rename every account in the app after the job it does"
                - "Store the details of each account in your password manager or a locked note"
                - "Close or mark dormant any account left without a job"
            - name: Moving direct debits to the bills account
              description: |-
                ## Purpose
                Until bills actually leave the bills account, the system is only a plan. Moving each direct debit and recurring card payment means updating the bank details with every company; most let you do it online in minutes, though some take a full billing cycle. Doing them in a planned order avoids a payment being taken from an empty account in the changeover.

                ## Milestones
                1. A list of every payment to move, with how each company updates bank details.
                2. The most consequential payments, such as rent or mortgage and property tax, moved first.
                3. Every moved payment seen leaving the bills account at least once.
                4. No bill still taken from the spending or landing account.

                ## Notes
                Leave enough in the old account to cover any payment taken during the switch. A missed rent or mortgage payment costs far more than the effort of keeping a float.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every bill on the payment list has been seen leaving the bills account, and none is taken from any other account."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every direct debit and recurring card payment still on the old account"
                - "Update the bank details for rent or mortgage and other priority bills first"
                - "Tick off each payment once it has come out of the bills account"
                - "Leave a float in the old account until the last moved payment clears"
            - name: Payday standing orders built and tested
              description: |-
                ## Purpose
                The heart of the system is a set of standing orders or scheduled transfers that fire the day after pay lands, each sending a fixed amount to its account. Setting them up once, with the right date and reference, and watching the first run is what makes the split happen without willpower. A test with a small amount first catches typing errors before a whole month's bills go astray.

                ## Milestones
                1. One scheduled transfer per destination account, dated the day after payday.
                2. Each transfer given a clear reference such as BILLS or SAVE.
                3. A small test payment sent to every new destination and seen arriving.
                4. The first full payday run checked against the written split.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A standing order exists for every line of the split, and the first payday run matched the written split exactly."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Send a small test transfer to each new destination account"
                - "Set a standing order for each line of the split, dated the day after payday"
                - "Give every standing order a short reference naming its account"
                - "Check the first payday run against the written split line by line"
            - name: Starter float for the bills account
              description: |-
                ## Purpose
                Bills do not arrive in the same order as pay, so in the first month a direct debit on the 2nd can hit the bills account before the payday transfer on the 28th. A float equal to the bills due before the next transfer keeps the first cycles from failing. Once built, the float stays put and is never counted as spare money.

                ## Milestones
                1. The bills calendar checked for payments falling before the first transfer.
                2. The float target set as the bills due before the next transfer, plus a margin.
                3. The float funded from savings or built over two or three paydays.
                4. The float amount written in the account name or notes so it is not spent.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The bills account holds a float at least equal to the bills due before the next payday transfer."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Total the bills due between today and the first payday transfer"
                - "Set the float target at that total plus a tenth"
                - "Move the float into the bills account or schedule it over three paydays"
                - "Write the float amount in the bills account's name or notes"
            - name: Payday ten-minute transfer check
              description: |-
                ## Purpose
                Automation fails quietly: a standing order cancelled by a bank migration, a pay date moved for a holiday, a transfer that bounced because pay was late. Ten minutes on the working day after payday, checking that each account received what it should, catches these before a bill fails. It is the only regular job the system asks of you.

                ## Milestones
                1. A short checklist listing every expected transfer and amount.
                2. The check done on the working day after each payday.
                3. Any missing or wrong transfer fixed the same day.
                4. Six consecutive paydays checked with results noted.

                ## Notes
                Start from the **Operational checklist** template. Move the reminder to the day after your own payday once it is set up.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive paydays checked against the checklist, with every missing or wrong transfer fixed within a day."
                cadence: rolling
              tasks:
                - "Write the expected amount for each account on a one-page checklist"
                - "Confirm every payday transfer arrived in the right account @recurring(monthly:1)"
                - "Fix any missing transfer by hand the same day and find out why"
                - "Note anything unusual from the check in the system notes"
            - name: Weekly spending allowance drip
              description: |-
                ## Purpose
                Paying a whole month's spending money in on payday makes week one feel rich and week four tight. A weekly transfer from a holding pot into the spending account gives a steady, visible allowance and makes overspending show up within days instead of at month end. It suits anyone whose card balance is their main spending signal.

                ## Milestones
                1. The monthly spending amount divided into weekly transfers, with any fifth week handled.
                2. A holding pot receiving the monthly amount on payday.
                3. A scheduled weekly transfer from the holding pot to the spending account.
                4. Eight weeks run with the spending account rarely below zero.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks of automatic allowance transfers, with the spending account overdrawn no more than once."
                cadence: rolling
              tasks:
                - "Divide the monthly spending amount by the number of weeks in each pay period"
                - "Set a weekly scheduled transfer from the holding pot to the spending account"
                - "Check the new week's allowance and plan the big spends @recurring(weekly:mon)"
                - "Decide what happens to a fifth week's money in long months"
            - name: Bills account balance reconciliation
              description: |-
                ## Purpose
                A bills account that drifts slowly upwards means bills are overfunded; one that drifts down means a payment has risen or a new one has crept in. Comparing the balance after the month's bills with the float you set shows which is happening before it matters. The fix is almost always a small change to the bills transfer.

                ## Milestones
                1. The expected balance after all bills written down: the float plus any annual bill money building up.
                2. The actual balance compared with it each month.
                3. Any gap larger than one small bill traced to a named payment.
                4. The bills transfer adjusted within a week of any confirmed change.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly comparisons of actual against expected bills balance recorded, each gap traced to a named payment."
                cadence: rolling
              tasks:
                - "Write the expected balance of the bills account after all monthly bills"
                - "Compare the actual bills balance with the expected one @recurring(monthly:6)"
                - "Trace any gap to the payment that caused it"
                - "Change the bills standing order when a gap is confirmed"
            - name: Month-end sweep of unspent allowance
              description: |-
                ## Purpose
                Money left in the spending account at the end of the month tends to be spent in the first days of the next. A scheduled sweep the day before payday moves any leftover into savings or a goal, so a careful month is rewarded with progress rather than a looser next month. Some banks automate this; otherwise it is a two-minute manual move.

                ## Milestones
                1. A destination chosen for leftover spending money.
                2. A sweep rule set in the app, or a reminder the day before payday.
                3. The leftover amount recorded each month.
                4. Six months of sweeps with the total moved noted.

                ## Notes
                Leave a small amount, enough for a coffee and a bus fare, so the account never hits zero before pay arrives.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive month-end sweeps completed, with the total moved to savings or goals recorded."
                cadence: rolling
              tasks:
                - "Choose whether leftover spending money goes to savings or a goal"
                - "Check whether your bank can sweep a balance automatically"
                - "Sweep the spending account's leftover to its destination @recurring(monthly:27)"
                - "Record each month's swept amount in the allocation log"
            - name: Quarterly split review
              description: |-
                ## Purpose
                A split set in January is out of date by April: a subscription added, a car insurance renewal, a goal reached. A quarterly half hour comparing each account's job with what actually happened keeps the split matched to real life without fiddling every payday. It is also when a finished goal's transfer gets redirected rather than left running.

                ## Milestones
                1. Each account's three-month in and out totals compared with its planned share.
                2. Finished or abandoned goals found and their transfers redirected.
                3. Any account consistently short or overflowing given a new amount.
                4. The updated split written down with the date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews in a year, each ending with a dated split and no transfer still feeding a finished goal."
                cadence: cyclic
              tasks:
                - "Compare each account's last three months with its planned share @recurring(quarterly)"
                - "Redirect the transfer of any goal that has been reached"
                - "Give a new amount to any account that ran short or overflowed"
                - "Date and file the updated split"
            - name: Price rise rule for the bills transfer
              description: |-
                ## Purpose
                Energy, broadband, insurance and phone prices often rise mid-contract or at renewal, and each rise quietly eats the bills account's margin. A standing rule that any letter or email announcing a higher bill triggers a same-day change to the bills transfer keeps the account solvent without waiting for the quarterly review.

                ## Milestones
                1. The rule written in the system notes: any bill rise changes the transfer the same day.
                2. A folder or email label collecting price-change notices.
                3. Each rise in the past year applied to the transfer.
                4. The bills margin still at least 5 percent after every change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every bill increase notified in the last twelve months is reflected in the bills transfer, with the margin kept at 5 percent or more."
                cadence: rolling
              tasks:
                - "Create an email label for price-change and renewal notices"
                - "Scan the month's notices for any bill that has gone up @recurring(monthly:15)"
                - "Raise the bills standing order by the new monthly difference"
                - "Recheck the bills margin after each change"
            - name: Annual audit of every standing order
              description: |-
                ## Purpose
                Over a year, standing orders pile up: one for a gym you left, a goal you finished, a payment to a relative that should have stopped. Once a year, export the full list from every bank and justify each line against the current split. Anything without a job is cancelled and anything wrong is corrected.

                ## Milestones
                1. Every standing order and scheduled transfer listed across all banks.
                2. Each one matched to a line of the current split or a known bill.
                3. Orphans cancelled and wrong amounts corrected.
                4. The audited list saved with its date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated audit list each year in which every standing order maps to a line of the split or a known bill."
                cadence: cyclic
              tasks:
                - "Export or screenshot the standing order list from each bank @recurring(yearly)"
                - "Match each standing order to a line of the split or a bill"
                - "Cancel any standing order that no longer has a job"
                - "Save the audited list with today's date"
            - name: Payday allocation log
              description: |-
                ## Purpose
                One line per payday, with net pay and the amount sent to each account, builds into the best evidence you have of whether the system is working. After a year it shows your real savings rate, how often you topped up spending by hand and which months strained the bills account. Without it, every review relies on memory.

                ## Milestones
                1. A log with columns for date, net pay, each destination and manual top-ups.
                2. Every payday entered within two days.
                3. The savings rate calculated for each month.
                4. Twelve consecutive months logged.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive paydays logged with net pay, each transfer and a monthly savings rate."
                cadence: rolling
              tasks:
                - "Set up the log with a column for each destination account"
                - "Enter the payday's net pay and every transfer amount @recurring(monthly:3)"
                - "Mark any manual top-up with its reason"
                - "Work out the month's savings rate as a percentage of net pay"
            - name: Shifted paydays calendar for the year ahead
              description: |-
                ## Purpose
                When payday falls on a weekend or public holiday, pay arrives early or late, but standing orders keep their fixed dates. Around December and the spring holidays this can send transfers out of an empty account. Marking next year's shifted paydays in advance shows which months need the transfer dates moved.

                ## Milestones
                1. Next year's pay dates listed, adjusted for weekends and public holidays.
                2. Months where pay arrives after a scheduled transfer highlighted.
                3. Those transfers moved or the gap covered from the float.
                4. Calendar reminders set two days before each shifted payday.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A list of next year's actual pay dates exists, and every month where pay lands after a transfer has a fix recorded."
                cadence: cyclic
              tasks:
                - "List next year's pay dates using your employer's weekend and holiday rule @recurring(yearly)"
                - "Highlight the months where pay lands after a transfer date"
                - "Move or cover each clash before the month begins"
                - "Add a reminder two days before every shifted payday"
            - name: Standing orders, direct debits and scheduled transfers
              description: |-
                ## Purpose
                These three ways of moving money look similar in a banking app but behave differently: who controls the amount, who can change the date, what happens when funds are short and what protection you have. Knowing the differences tells you which to use for each part of the system and how to fix it when one fails.

                ## Milestones
                1. Who sets the amount and date explained in your own words for each type.
                2. What happens on insufficient funds noted for each, including retry and fee rules at your bank.
                3. The refund protection available on direct debits in your country recorded.
                4. Each part of the system tagged with the payment type it uses and why.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written note explaining all three payment types, with every transfer in the system tagged by type."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read your bank's help pages on standing orders and scheduled transfers"
                - "Find your bank's fees and retry rules for payments that fail"
                - "Look up the direct debit refund protection that applies where you live"
                - "Tag each transfer in the system with its payment type"
            - name: Fixed amounts versus percentage splits
              description: |-
                ## Purpose
                Fixed splits send the same amount whatever arrives, while percentage splits scale with pay. Salaried people usually do best with fixed amounts for bills and percentages for savings, while people with overtime or commission often reverse it. Working through both on your own last six payslips shows which fails less often.

                ## Milestones
                1. Six months of net pay gathered in one place.
                2. Both methods modelled on those six months.
                3. Months where each method would have left bills or spending short identified.
                4. A method chosen for each account and the reason written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "Both split methods modelled on six real months of pay, with a method recorded for each account."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Put the last six net pay amounts in a column"
                - "Model the split as fixed amounts against those six months"
                - "Model the same split as percentages and compare the shortfalls"
                - "Pick a method for each account and note the reason"
            - name: Transfer timing and payment clearing times
              description: |-
                ## Purpose
                Instant transfers between your own accounts can still take hours across banks, and some scheduled payments run at the start of the day while pay arrives in the afternoon. Learning your banks' cut-off times and processing windows explains the occasional failed transfer and sets the safest gap. It matters most when the landing account and bills account sit at different banks.

                ## Milestones
                1. The time pay usually appears in your landing account noted over three paydays.
                2. Each bank's processing time for scheduled transfers found.
                3. Weekend and holiday processing rules recorded.
                4. A safe gap between pay arriving and transfers firing chosen.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Processing times for each bank recorded, and a safe gap between pay arriving and the first transfer written down."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Note the time pay appears in your account on the next payday"
                - "Find when each bank processes scheduled transfers on the day"
                - "Check whether transfers set for a weekend run before or after it"
                - "Choose a safe gap between pay arriving and the first transfer"
            - name: Payslip changes that should change the split
              description: |-
                ## Purpose
                Net pay moves more often than people notice: a new tax code, a pension contribution increase, a student loan threshold change, a new benefit in kind. Each one shifts the amount the split is built on. Learning which payslip lines to compare each month means a smaller pay packet is caught before the spending account takes the hit.

                ## Milestones
                1. Every deduction line on your payslip identified and explained.
                2. The lines most likely to change in your situation listed.
                3. Each new payslip compared with the last before the transfers run.
                4. The split updated within one payday of any lasting change.

                ## Notes
                If a tax code looks wrong, contact the tax authority or your payroll team. This project is about noticing changes, not judging them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every payslip line explained in writing, and any lasting change in net pay reflected in the split within one payday."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-line meaning beside each deduction on your latest payslip"
                - "List the deductions most likely to change for you this year"
                - "Compare the new payslip with the previous one before transfers run @recurring(monthly:24)"
                - "Ask the agent to explain any payslip line you cannot decode"
            - name: Pay yourself first, worked through with your numbers
              description: |-
                ## Purpose
                Savings that wait for whatever is left at month end rarely happen, because spending expands to fill the gap. Moving savings to the first transfer after payday reverses the order, and the arithmetic of a fixed savings rate over five years is what makes the change feel worth it. Running the numbers on your own pay turns the principle into a figure.

                ## Milestones
                1. Your current savings rate calculated from the last three months.
                2. Projected balances at 5, 10 and 15 percent savings rates over five years.
                3. A target savings rate chosen for the next twelve months.
                4. The savings transfer moved to run first after payday.

                ## Notes
                Keep the projection simple and leave out interest or returns; the point is the habit, not a forecast.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A twelve-month savings rate target recorded and the savings transfer scheduled as the first one after payday."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Work out what share of net pay you saved over the last three months"
                - "Project five-year balances at three different savings rates"
                - "Choose a savings rate to hold for the next twelve months"
                - "Move the savings standing order to the first slot after payday"
            - name: Automation features in your banking apps
              description: |-
                ## Purpose
                Many banking apps now offer rules that most customers never touch: transfers triggered when salary arrives, round-ups into a pot, sweeps above a set balance and alerts on specific payees. An hour exploring what your own apps can do often replaces a manual step in the system. The aim is fewer things to remember, not more features.

                ## Milestones
                1. Every automation feature in each of your banking apps listed.
                2. Each feature matched to a manual step it could replace.
                3. One or two rules switched on and run for a month.
                4. Rules that caused confusion switched off again.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one manual step in the system replaced by an app rule that has run correctly for a month."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Open each banking app's settings and list every automation rule offered"
                - "Match each rule to a manual step in your system"
                - "Switch on the one rule that removes the most effort"
                - "Review after a month whether the rule helped or confused"
            - name: Payday allocation calculator spreadsheet
              description: |-
                ## Purpose
                Typing net pay into a small spreadsheet and reading off the amount for each account removes arithmetic from payday and makes what-if questions quick: what if pay drops by a tenth, what if rent rises. Building it yourself also teaches you exactly how your split works.

                ## Milestones
                1. A sheet that takes net pay as its single input.
                2. Fixed and percentage lines calculated, with a check that the total equals net pay.
                3. A what-if row for a pay drop and a pay rise.
                4. The sheet used on three real paydays.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A working calculator that splits any net pay figure, flags totals that do not match, and has been used on three paydays."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set up a sheet with net pay as the single input cell"
                - "Add a row for each account with its fixed amount or percentage"
                - "Add a check cell that turns red when the total differs from net pay"
                - "Use the sheet on the next three paydays"
            - name: Asking payroll to split pay across two accounts
              description: |-
                ## Purpose
                Some employers let you send part of your net pay to a second account, so the bills money never touches the landing account at all. Where it is offered, it removes one standing order and one failure point. Payroll teams usually need a form and a full pay cycle's notice.

                ## Milestones
                1. Whether your employer offers split pay confirmed with payroll or HR.
                2. The amount or percentage to send to the second account decided.
                3. The form submitted with the right account details.
                4. The first split payslip checked against the request.

                ## Notes
                Many employers only pay into one account. If yours does, nothing is lost; standing orders do the same job a day later.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Payroll's answer on split pay recorded, and if offered, a split payslip received that matches the request."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask payroll whether net pay can be split across two accounts"
                - "Decide which account should receive the second share"
                - "Submit the payroll form before the next pay cut-off"
                - "Check the first split payslip shows the right amounts"
            - name: Bills money kept at a separate bank
              description: |-
                ## Purpose
                When bills and spending money sit side by side in one app, it is easy to borrow from the bills pot for a weekend and forget to put it back. Holding the bills account at a different bank, with its card kept out of your wallet, adds just enough friction to stop that. It is a choice worth testing against your own habits rather than assuming.

                ## Milestones
                1. Times you dipped into bill money in the last three months counted.
                2. A decision made, with a second bank chosen if the count is more than one.
                3. The bills account moved and its card stored away from your wallet.
                4. Three months run with no borrowing from bills.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded decision on separating the bills bank, followed by three months with no money moved out of bills to spending."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count how often you moved money from bills to spending in the last three months"
                - "Decide whether that count justifies a separate bank"
                - "Open the bills account at the second bank if you decide to split"
                - "Store the bills card somewhere other than your wallet"
            - name: Yearly savings rate step-up
              description: |-
                ## Purpose
                Raising the savings transfer by one or two percentage points each year, timed with a pay rise or the new tax year, grows savings without a noticeable drop in spending. Setting the rule in advance turns a decision you would postpone into a standing appointment.

                ## Milestones
                1. A yearly step-up of a set number of percentage points agreed.
                2. The step-up date fixed and linked to a pay rise or the tax year.
                3. Each year's new savings transfer set and logged.
                4. Three consecutive step-ups completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The savings transfer raised by the agreed step on the agreed date for three years running."
                cadence: cyclic
              tasks:
                - "Choose the yearly step-up size, such as one percentage point of net pay"
                - "Pick the date the step-up happens each year"
                - "Raise the savings standing order by the agreed step @recurring(yearly)"
            - name: Trimming the system down to fewer accounts
              description: |-
                ## Purpose
                Systems grow: a pot for each goal, a second spending account, a forgotten easy-access saver. When the payday check takes longer than ten minutes, or money keeps moving between pots by hand, the system has too many parts. Merging accounts with overlapping jobs makes it easier to run and easier to hand over.

                ## Milestones
                1. Every account listed with its job and the number of manual moves in or out last quarter.
                2. Accounts with overlapping or empty jobs marked for merging.
                3. Balances moved and standing orders redirected before any account is closed.
                4. The new, shorter account list written down.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "At least one redundant account merged or closed, with no standing order left pointing at it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count the manual moves in and out of each account last quarter"
                - "Mark accounts whose jobs overlap or have gone"
                - "Redirect standing orders before closing any merged account"
                - "Write down the shorter account list with each job"
            - name: Regular giving line in the split
              description: |-
                ## Purpose
                Charity donations, religious giving and regular help for family are easier to sustain, and easier to keep within limits, when they are a line in the split rather than a decision each month. A dedicated transfer, with any tax relief on donations claimed properly, keeps giving steady and visible.

                ## Milestones
                1. A yearly giving amount chosen and divided across paydays.
                2. The giving transfer set to its own pot or direct to recipients.
                3. Any tax relief scheme for donations in your country noted and its declarations completed.
                4. A year of giving totalled for your records.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A giving transfer runs every payday, and a yearly total of donations is filed with your tax papers."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Decide the yearly amount you want to give and to whom"
                - "Divide the amount across paydays and set a giving transfer"
                - "Check whether donations in your country qualify for any tax relief"
                - "Total the year's giving and keep the record with your tax papers"
            - name: Fixing a bills account that keeps running short
              description: |-
                ## Purpose
                If the bills account has needed a manual top-up twice in three months, something structural is wrong: a bill missing from the total, a transfer landing after a direct debit, or a margin eaten by price rises. Diagnosing the cause once is cheaper than topping up forever.

                ## Milestones
                1. Every shortfall in the last three months listed with date and amount.
                2. Each shortfall traced to a missing bill, a timing clash or an underestimate.
                3. The bills transfer, date or float changed to address each cause.
                4. Three paydays run without a manual top-up.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each recent shortfall has a named cause and a fix, and the next three paydays need no manual top-up."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every manual top-up of the bills account in the last three months"
                - "Match each top-up to the bill that caused the shortfall"
                - "Decide whether the fix is a bigger transfer, an earlier date or a larger float"
                - "Make the change and watch the next three paydays"
            - name: Low-balance and failed-payment alerts
              description: |-
                ## Purpose
                Most banks can notify you when an account drops below a set figure or a payment fails, but these alerts are usually off by default. Switching them on for the bills and spending accounts turns a silent failure into a same-day message, while there is still time to move money before fees land.

                ## Milestones
                1. A low-balance alert set on the bills account at the float level.
                2. A low-balance alert on the spending account at a small threshold.
                3. Failed and returned payment alerts on for every account in the system.
                4. Alerts tested by confirming one arrives.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Low-balance and failed-payment alerts are active on every account in the system and one has been seen to arrive."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Set a low-balance alert on the bills account at the float amount"
                - "Set a low-balance alert on the spending account"
                - "Switch on failed-payment notifications for every account"
                - "Confirm the alerts still reach your current phone and email @recurring(yearly)"
            - name: Surplus order for money the split did not plan
              description: |-
                ## Purpose
                Cheaper months, refunds and small one-off credits leave money the split never planned for, and without a rule it drifts into spending. A written order of priorities, for example topping up the float, then the buffer, then the current goal, means every surplus goes somewhere chosen in calm conditions.

                ## Milestones
                1. A ranked list of three to five destinations for surplus money.
                2. A cap on each destination so the list moves on when one is full.
                3. The order applied to the next three surpluses.
                4. The order revisited whenever a destination fills up.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ranked and capped surplus order written down and applied to the next three surpluses."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Rank three to five destinations for money the split did not plan for"
                - "Set a cap for each destination on the list"
                - "Apply the order to the next surplus that arrives"
                - "Write where each surplus went"
            - name: First full payday cycle review
              description: |-
                ## Purpose
                The first cycle is when the problems show: a direct debit still on the old account, a transfer a day too early, a spending amount that ran out by the 20th. Sitting down after the first full cycle with statements open, to note what worked and what needs changing, turns a fragile set-up into a working one.

                ## Milestones
                1. Every transfer and bill from the first cycle ticked off against the plan.
                2. A list of failures and near misses written.
                3. Each fix made before the second payday.
                4. A one-paragraph note on how the cycle felt day to day.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written review of the first full cycle, with every failure or near miss fixed before the second payday."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an hour in the calendar for the day after the first full cycle ends"
                - "Tick each transfer and bill on the statements against the plan"
                - "List every failure and near miss from the cycle"
                - "Fix each problem before the second payday arrives"
            - name: Three-payday stability check
              description: |-
                ## Purpose
                Three clean paydays in a row, with no manual top-ups and no failed payments, is a sensible sign that the system can be left alone between reviews. Checking for it on purpose gives a clear point to stop fiddling, and shows where the system still leans on you.

                ## Milestones
                1. Three consecutive paydays logged.
                2. Manual interventions counted across the three.
                3. Any repeated intervention turned into a rule or a split change.
                4. The system declared stable, or a fourth cycle planned with named fixes.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three consecutive paydays run with zero manual top-ups, or a written list of the fixes still needed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pull the last three paydays from the allocation log"
                - "Count every manual transfer or top-up you made"
                - "Turn any repeated top-up into a split or date change"
                - "Record whether the system is stable or what still needs fixing"
            - name: Pay rise reallocation day
              description: |-
                ## Purpose
                A pay rise is the easiest moment to raise savings, because you have never spent the extra. Deciding how the increase is split before the first higher payslip arrives, for example half to savings and half to spending, stops it disappearing into everyday costs.

                ## Milestones
                1. The ratio for splitting any pay rise decided in advance.
                2. The new net pay confirmed from the first higher payslip.
                3. Standing orders updated before the next payday.
                4. The new split recorded with the date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The increase from the latest pay rise split by the pre-agreed ratio, with standing orders changed before the following payday."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down now the ratio for splitting any future pay rise"
                - "Confirm the new net pay from the first higher payslip"
                - "Update the standing orders before the following payday"
                - "Record the new split and the date it started"
            - name: Changing employer without breaking the system
              description: |-
                ## Purpose
                Starting a new job usually means a different payday, a first payment that may be partial or a month late, and a new set of payroll forms. Planning the gap and moving transfer dates to the new payday keeps bills paid through the changeover.

                ## Milestones
                1. The final pay date and amount from the old employer confirmed.
                2. The new employer's payday and first pay date confirmed.
                3. Bank details given to the new payroll before their cut-off.
                4. Transfer dates moved to match the new payday, with any gap covered from the float or savings.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every bill paid on time through the job change, with all transfers moved to the new payday."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the new employer for their payday and when your first pay will arrive"
                - "Give the new payroll your landing account details before their cut-off"
                - "Plan how bills are covered between the last old pay and the first new one"
                - "Move every payday transfer to the new date"
            - name: Switching your main bank without losing a transfer
              description: |-
                ## Purpose
                Moving the landing or bills account to a new bank risks standing orders being missed, because switching services usually carry over direct debits but not the transfers you set up between your own accounts. A checklist of every inbound and outbound link makes the move safe.

                ## Milestones
                1. Every link into and out of the moving account listed.
                2. Links the switching service will move separated from ones you must recreate.
                3. Payroll and other payers given the new details.
                4. Every recreated transfer seen to run once from the new bank.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "After the switch, every listed payment into and out of the moved account has run once without failure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every payment into and out of the account that is moving"
                - "Mark which links the switching service moves and which you must recreate"
                - "Recreate your own transfers at the new bank before the switch date"
                - "Watch the first payday after the switch and tick off every link"
            - name: Preset split for bonuses and tax refunds
              description: |-
                ## Purpose
                Bonuses, tax refunds and thirteenth-month payments arrive once or twice a year and are easy to spend before anyone decides anything. Agreeing a preset split, such as a fixed share to savings, a share to a goal and a share to enjoy, means the money is allocated the day it lands.

                ## Milestones
                1. Expected one-off payments and their usual months listed.
                2. A preset split for one-off money agreed, including a share to enjoy.
                3. The split applied within a week of the next one-off payment.
                4. Where the money went recorded in the allocation log.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The next bonus or refund divided by the preset split within a week of arriving, with the destinations logged."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the one-off payments you expect this year and when"
                - "Agree a preset split for one-off money, including a share to spend"
                - "Apply the split within a week of the next one-off payment landing"
                - "Log where the one-off money went"
            - name: Allocation calendar for weekly or four-weekly pay
              description: |-
                ## Purpose
                Weekly and four-weekly pay does not line up with monthly bills: four-weekly pay brings 13 paydays a year, and weekly pay gives some months five paydays. Mapping which paydays fund which bills, and what the spare paydays do, keeps a monthly bills account fed from a non-monthly income.

                ## Milestones
                1. Every payday for the next twelve months listed.
                2. The bills transfer per pay worked out so twelve months of bills are covered.
                3. The extra paydays identified and given a job.
                4. Transfers set to run after each payday rather than on fixed monthly dates.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month payday calendar showing the bills transfer per pay and a named job for every extra payday."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every payday for the next twelve months"
                - "Divide twelve months of bills by the number of paydays"
                - "Give the extra paydays a job such as savings or the float"
                - "Switch transfers to run after each payday instead of on a fixed date"
            - name: Two incomes feeding one bills account
              description: |-
                ## Purpose
                When two people share bills but are paid on different days, the shared account needs both contributions in before the big direct debits leave. Each person setting their own standing order for their agreed share, dated after their own payday, keeps the shared account funded without either person chasing the other. How the share is decided belongs to the couple; this project is the plumbing.

                ## Milestones
                1. Each person's payday and agreed contribution written down.
                2. Each contribution scheduled the day after its owner's payday.
                3. Large shared bills moved to dates after both contributions land.
                4. A quarterly look at the shared balance agreed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Both contributions arrive automatically every month and no shared bill has left before both have landed for three months."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down both paydays and each person's agreed contribution"
                - "Set each contribution as a standing order dated after its owner's payday"
                - "Move the largest shared bills to after both contributions land"
                - "Look together at the shared account's balance trend @recurring(quarterly)"
            - name: Pension income allocation in retirement
              description: |-
                ## Purpose
                In retirement, income often arrives from several sources on different schedules: a state pension every four weeks, a workplace pension monthly, withdrawals when requested. Feeding these into the same bills, spending and savings split, with transfers timed to each arrival, gives a steady monthly rhythm without a salary.

                ## Milestones
                1. Each pension and income listed with amount, frequency and arrival date.
                2. The bills transfer funded from the most reliable income.
                3. The spending allowance timed to the next most regular income.
                4. Annual increases applied to the split when the new amounts are confirmed.

                ## Notes
                If you take irregular withdrawals from a pension pot, ask your provider or a regulated adviser about the tax effect of the timing. This project only covers where the money goes once it arrives.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every retirement income mapped to a transfer, with bills funded from the most regular source and the split updated each year."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List each pension or income with its amount and arrival pattern"
                - "Fund the bills transfer from your most regular income"
                - "Time the spending transfer to the next most regular payment"
                - "Update the split when the yearly pension increase letters arrive @recurring(yearly)"
            - name: Temporary split for a reduced-pay period
              description: |-
                ## Purpose
                Parental leave, statutory sick pay, unpaid leave or a sabbatical can cut net pay sharply for months. A temporary split agreed before the drop, protecting bills and a minimum spending amount while pausing goals, keeps the system intact rather than abandoned. Switching back is easier when the original split is saved.

                ## Milestones
                1. The expected reduced net pay and its start and end dates confirmed.
                2. A temporary split written that covers bills and a minimum spending amount.
                3. Goal and savings transfers paused or reduced, with the dates noted.
                4. The full split restored when pay returns, on a date fixed in advance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A temporary split in place before reduced pay starts, and the full split restored within one payday of normal pay returning."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the reduced net pay and the dates it applies"
                - "Write a temporary split that covers bills first"
                - "Pause or reduce goal transfers and note when they restart"
                - "Set a reminder to restore the full split when pay returns"
            - name: Base pay split with overtime held back
              description: |-
                ## Purpose
                Shift workers, sales staff and anyone with overtime or commission see net pay jump around from month to month. Building the split on base pay only, and sending anything above it to a holding pot that is divided once a month, stops a good month from inflating spending and a lean month from failing a bill.

                ## Milestones
                1. Base pay, without overtime or commission, confirmed from the contract or payslips.
                2. The split rebuilt on base pay alone.
                3. A holding pot receiving everything above base pay.
                4. The holding pot divided once a month by a preset rule.

                ## Notes
                If most of your income is irregular, such as freelance or seasonal work, a full income-smoothing approach suits better than a base-pay split.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The split runs on base pay alone, and overtime or commission has been divided by the preset rule for three months."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find your base pay without overtime or commission on recent payslips"
                - "Rebuild the split so it works on base pay alone"
                - "Send any pay above base to a holding pot on payday"
                - "Divide the holding pot by your preset rule @recurring(monthly:12)"
            - name: Teenager's first wage split set up together
              description: |-
                ## Purpose
                Teenagers earning their first wage from a weekend job are at the cheapest moment to learn the system, when the stakes are small and habits are new. Sitting with them to set a simple three-way split, for spending, saving and one goal, gives them a working model they can scale later.

                ## Milestones
                1. The teenager's pay date and typical net amount known.
                2. A three-way split agreed by them, not imposed.
                3. Accounts or pots for each part set up in their name where allowed.
                4. A monthly chat held for the first three months to adjust.

                ## Notes
                Let them choose the percentages, even ones you would not. A split they own teaches more than a perfect one.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The teenager's wages split automatically three ways for three months, with a short monthly check-in held each month."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask the teenager what they want their wages to do"
                - "Agree a simple spending, saving and goal split together"
                - "Help them set up the pots or accounts in their own name"
                - "Check in together on how the split is working @recurring(monthly:10)"
            - name: Payday transfer cascade by priority
              description: |-
                ## Purpose
                If pay is short, which transfer fails? With every standing order on the same day, it comes down to the bank's processing order. Staggering transfers by priority, bills first, then savings, then goals, then spending, makes sure a short month hits the least important line, and pairs well with an app rule that fires when income arrives.

                ## Milestones
                1. Transfers ranked by the consequence of missing them.
                2. Dates or rules set so they run in that order.
                3. A short-pay scenario walked through to confirm which line takes the hit.
                4. The cascade order written where the household can find it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Payday transfers run in a written priority order, confirmed by a walked-through short-pay scenario."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rank every payday transfer by the cost of it failing"
                - "Stagger the transfers so the highest ranked runs first"
                - "Walk through a short-pay month to see which line misses out"
                - "Write the cascade order down where the household can find it"
            - name: Late payday stress test
              description: |-
                ## Purpose
                Payroll errors, bank outages and holiday shifts mean pay will one day arrive late. Testing on paper what happens if pay lands three or five days late, which bills bounce, which fees apply and what covers them, shows how big the float really needs to be.

                ## Milestones
                1. Bills and transfers due in the five days after payday listed.
                2. The effect of a three-day and a five-day delay mapped.
                3. The float sized to cover the worst case.
                4. A one-page late-pay plan with contact numbers for payroll and the bank.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page late-pay plan exists and the float covers every bill due in the five days after payday."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the bills and transfers due in the five days after payday"
                - "Work out which would fail if pay arrived three or five days late"
                - "Resize the float if the worst case is not covered"
                - "Write a one-page late-pay plan with payroll and bank contact numbers"
                - "Rerun the late-pay test against this year's bills @recurring(yearly)"
            - name: Allocation system manual for a trusted person
              description: |-
                ## Purpose
                If you were ill or away, could a partner, adult child or attorney keep the bills paid? A short manual covering each account's job, the split, the transfer dates and what to do if a payment fails lets someone else run the system without guessing. Writing it also forces you to explain parts that have become habit.

                ## Milestones
                1. A diagram of accounts and transfers on one page.
                2. The split, dates and payday checks written as plain steps.
                3. Where access details are kept described, with no passwords written in the manual.
                4. The manual read by the person who would use it, and their questions answered.

                ## Notes
                A lasting power of attorney or its local equivalent is what gives someone legal authority over your accounts; a manual alone does not.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A manual exists that a named trusted person has read and could use to run the payday system unaided."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draw the current accounts and transfers on one page"
                - "Ask the agent to turn your notes into plain step-by-step instructions"
                - "Explain where access details are kept without writing any passwords down"
                - "Walk the trusted person through the manual and answer their questions"
                - "Refresh the manual after the annual standing order audit @recurring(yearly)"
            - name: Annual allocation ratio analysis
              description: |-
                ## Purpose
                Twelve months of payday logs show where pay actually went, rather than where the split said it would: the true share to bills, savings, goals and spending, and how it moved over the year. Comparing it with the previous year shows whether bills are eating a growing share and whether savings kept pace with pay.

                ## Milestones
                1. Twelve months of allocation logs totalled by destination.
                2. Each destination's share of net pay calculated.
                3. The shares compared with last year and with the planned split.
                4. One change to next year's split decided from the findings.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly table of each destination's share of net pay, compared with the plan, and one recorded change for next year."
                cadence: cyclic
              tasks:
                - "Total twelve months of transfers by destination @recurring(yearly)"
                - "Work out each destination's share of the year's net pay"
                - "Compare the shares with last year and the planned split"
                - "Choose one change to the split based on what the numbers show"
---

# Paycheck Allocation System

This area is for anyone who wants their pay to sort itself on payday, so bills money, spending money and savings never share an account or depend on remembering. It starts with the foundations (a map of where pay goes now, the account structure, the bills figure, the split and the standing orders that carry it out), then the routines that keep it working, the skills behind the plumbing, the improvements and decisions that tidy it up, the events that test it, the situations that change its shape and finally the specialist work of a well-run system.

What repeats is a ten-minute check after each payday, a monthly bills balance comparison and allocation log entry, a weekly allowance, a quarterly split review, and a yearly audit of every standing order alongside the savings step-up. The Purchase decision, Monthly budget and bills, Operational checklist and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
