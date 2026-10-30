---
id: personal-finance.car-loan-finance
name: Car Loan & Finance
description: "Car finance compared on total cost, agreements filed with their key dates, balloon payments planned for, and vehicle debt paid down or ended on your terms."
category: personal
version: 1.0.0
tags: [personal-finance, car-loan-finance, everyone, pcp, hire-purchase, leasing, balloon-payment]
author: Aurum Technology
starter_structure:
  templates:
    - savings-goal
    - purchase-decision
    - metrics-log
    - meeting-notes
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Car Loan & Finance
          description: "Comparing car finance, leasing and loans, understanding balloon payments and paying down vehicle debt sensibly."
          projects:
            - name: Car finance agreement file
              description: |-
                ## Purpose
                Most people with car finance could not say, without digging, what their APR is, how many payments are left or whether a balloon is due at the end. Pulling the signed agreement, the latest statement and the lender's details into one place takes about an hour and answers every later question in this area. It is also the first thing a lender, adviser or complaints service will ask you for.

                ## Milestones
                1. The signed credit agreement, or a copy requested from the lender, saved in one folder.
                2. The finance type, APR, monthly payment, term and any final balloon written on a one-page summary.
                3. The lender's name, agreement number and phone number noted on the summary.
                4. Any other car agreement in the household, including a lease or a personal loan used for a car, added to the same summary.

                ## Notes
                Lenders can usually send a copy of the agreement on request if yours has been lost. Ask in writing so there is a record.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page summary lists every car finance agreement in the household with lender, APR, payment, end date and any balloon, backed by the saved agreements."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the signed finance agreement in your email or paperwork"
                - "Request a copy of the agreement from the lender if it is missing"
                - "Write the APR, payment, term and balloon on a one-page summary"
                - "Save the agreement and the latest statement in one folder"
            - name: Car budget ceiling as a share of take-home pay
              description: |-
                ## Purpose
                A dealer will happily tell you what you could borrow; the useful question is what you can pay every month once the car is also insured, fuelled and maintained. Setting a ceiling for the finance payment from your take-home pay and existing running costs gives you a number to hold before anyone shows you a monthly figure. Many money guides suggest keeping all car costs together to roughly 10 to 15 percent of take-home pay, but your own budget decides.

                ## Milestones
                1. Monthly take-home pay confirmed from the last three payslips or bank statements.
                2. Current insurance, fuel and upkeep costs added up from the running costs you already track.
                3. A written maximum monthly finance payment that leaves the rest of the budget intact.
                4. The ceiling agreed with anyone you share household money with.

                ## Notes
                Set the ceiling before visiting a dealer or opening a comparison site. A number chosen after seeing a car you like tends to drift upwards.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written monthly ceiling for car finance payments, based on take-home pay and current running costs, is recorded and agreed with your household."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up your monthly take-home pay from the last three payslips"
                - "Pull this month's insurance, fuel and upkeep figures from your car costs"
                - "Write a maximum monthly finance payment that keeps the budget balanced"
                - "Agree the ceiling with your partner or household before shopping"
            - name: Settlement figure and equity check
              description: |-
                ## Purpose
                Equity is the gap between what your car is worth today and what it would cost to clear the finance today, and almost every car finance decision turns on it. Asking the lender for a settlement figure and checking three valuations shows whether you have money in the car, are roughly even, or owe more than it is worth. Knowing which tells you which later projects matter most.

                ## Milestones
                1. A written settlement figure from the lender, with the date it is valid until.
                2. Three current valuations from different valuation or car buying services.
                3. Equity worked out as the average valuation minus the settlement figure.
                4. The result recorded as positive equity, roughly even or negative equity, with the amount and date.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated equity figure, based on a lender settlement quote and three valuations, is written in your agreement summary."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the lender for a written settlement figure through the online account"
                - "Get three valuations for your car from different valuation sites"
                - "Subtract the settlement figure from the average valuation"
                - "Record the equity figure and date in your agreement summary"
            - name: Key dates calendar for your car finance
              description: |-
                ## Purpose
                Car finance agreements carry dates that cost money when missed: the deadline for telling the lender your end-of-term choice, the point where voluntary termination may become available, the balloon due date and the end of a lease. Putting each one in the calendar, with reminders months ahead, turns end-of-agreement surprises into planned decisions.

                ## Milestones
                1. The start date, end date and final payment date of each agreement in your calendar.
                2. Reminders set six months and three months before each end date.
                3. The date you will have paid half the total amount payable worked out and noted.
                4. Any notice period the lender requires for end-of-term choices written beside the end date.

                ## Notes
                The halfway date matters because in some countries, the UK for example, it is when voluntary termination becomes available. The project on that right explains more.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every car finance agreement has its end date, final payment date and halfway point in the calendar, with reminders six and three months ahead."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the start date, term and final payment date in each agreement"
                - "Add each end date to your calendar with reminders six and three months ahead"
                - "Work out the date you will have paid half the total amount payable"
                - "Check the next key date and its reminder are still right @recurring(quarterly)"
            - name: Deposit pot for your next car
              description: |-
                ## Purpose
                A bigger deposit lowers the amount borrowed, the interest paid and the chance of owing more than the car is worth. Saving monthly into a named pot from now until your current agreement ends means the next deal starts from a stronger position, instead of relying on a dealer deposit contribution or part-exchange equity that may not appear.

                ## Milestones
                1. A target deposit and the month you need it by written down.
                2. A separate easy-access savings pot opened and named for the car.
                3. A standing order set for the day after payday.
                4. The pot on track against the target at each quarterly look.

                ## Notes
                Start from the **Savings goal** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A named deposit pot receives a monthly transfer and holds at least the amount the plan says it should at each quarter end."
                cadence: rolling
              tasks:
                - "Decide a deposit target and the month you will need it"
                - "Open or rename a separate savings pot for the next car deposit"
                - "Move the agreed amount into the car deposit pot @recurring(monthly:2)"
                - "Compare the pot balance with the target and raise the transfer if behind"
            - name: Soft-search eligibility check before applying
              description: |-
                ## Purpose
                Every full credit application leaves a hard search on your file, and several in a few weeks can make the next lender more cautious. Using soft-search eligibility checkers first, and reading your own credit report for anything a car lender would query, shows which lenders are likely to accept you and roughly at what rate before anything is recorded.

                ## Milestones
                1. Your credit report from at least one credit reference agency read within the last month.
                2. Soft-search eligibility results gathered from at least three car finance or loan lenders.
                3. Lenders showing a high likelihood of acceptance shortlisted with their indicative rates.
                4. A rule written down: no full application until a soft search suggests acceptance.

                ## Notes
                A soft search is not visible to other lenders. If a dealer or broker offers to run a check, ask directly whether it is soft or hard before agreeing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Soft-search results from at least three lenders are recorded before any full car finance application is made."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download your credit report from a credit reference agency"
                - "Run soft-search eligibility checks with three car finance or loan lenders"
                - "Write down each lender's likelihood of acceptance and indicative rate"
                - "Ask any dealer or broker whether their credit check is soft or hard"
            - name: Total cost of credit comparison sheet
              description: |-
                ## Purpose
                Two deals with the same monthly payment can differ by thousands in what you pay overall, because the term, deposit, fees and final payment all move. One sheet comparing every quote on total amount payable, APR, term and balloon stops a low monthly figure from hiding an expensive deal.

                ## Milestones
                1. A sheet with columns for cash price, deposit, amount borrowed, APR, term, monthly payment, balloon, fees and total amount payable.
                2. At least three quotes entered, including one not arranged by a dealer.
                3. The cost of credit worked out for each quote as total amount payable minus cash price.
                4. The cheapest deal on total cost marked, rather than the lowest monthly payment.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A comparison sheet holds at least three car finance quotes, with total amount payable and cost of credit worked out for each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up a sheet with a column for every figure in a finance quote"
                - "Enter each quote you have, copying figures from its representative example"
                - "Work out the cost of credit as total amount payable minus cash price"
                - "Mark the deal with the lowest total cost"
            - name: Choosing the finance type that fits how you drive
              description: |-
                ## Purpose
                Hire purchase, PCP, a personal loan, leasing and paying cash each suit a different driver. Someone who keeps cars for ten years and covers high mileage is usually poorly served by a PCP built around low mileage and a three-year swap, while someone who wants a new car every few years may not want savings tied up in one. Matching the finance type to your mileage, ownership plans and budget ceiling narrows every comparison that follows.

                ## Milestones
                1. Annual mileage, usual ownership length and whether you want to own the car at the end written down.
                2. Each finance type scored against those three answers and your budget ceiling.
                3. One or two finance types chosen to gather quotes for.
                4. A one-sentence reason recorded for ruling out each of the others.

                ## Notes
                Start from the **Purchase decision** template. Names differ between countries, but most markets offer some version of a secured instalment loan, a balloon agreement, an unsecured loan and a lease.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the one or two finance types you will compare, with a reason recorded for ruling out each of the others."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down your annual mileage and how long you usually keep a car"
                - "Decide whether owning the car at the end matters to you"
                - "Score HP, PCP, personal loan, lease and cash against your answers"
                - "Choose the one or two finance types to get quotes for"
            - name: Monthly car finance payment check
              description: |-
                ## Purpose
                Payments fail when a bank account changes, a card expires or a direct debit is cancelled by mistake, and a single missed car finance payment can show on your credit file for years. A two-minute monthly check that the payment left and the balance fell as expected catches problems while they are still a phone call to fix.

                ## Milestones
                1. The payment date and amount written in your agreement summary.
                2. Online access to the lender's account set up.
                3. The payment confirmed on your bank statement every month.
                4. Any failed or duplicated payment raised with the lender within a week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive months of car finance payments confirmed on the bank statement, with any problem raised within a week."
                cadence: rolling
              tasks:
                - "Set up access to the lender's online account"
                - "Confirm the car finance payment left your account and the balance fell @recurring(monthly:4)"
                - "Call the lender within a week about any failed or duplicated payment"
            - name: Mileage tracker against your annual allowance
              description: |-
                ## Purpose
                PCP and lease agreements set a mileage allowance, and going over it means a charge for every extra mile at the end, at a rate written in the agreement. Reading the odometer once a month and comparing it with a straight-line allowance shows early whether you are on course, while there is still time to drive less or ask the lender to change the allowance.

                ## Milestones
                1. The agreed annual mileage and excess mileage rate copied from the agreement.
                2. A tracker showing the expected cumulative mileage for each month of the term.
                3. An odometer reading entered every month.
                4. Action taken whenever mileage runs more than 10 percent ahead: drive less or ask about a revised allowance.

                ## Notes
                Start from the **Metrics log** template. Some lenders will re-set the allowance mid-term, which can cost less than excess charges at handback; ask before assuming.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A mileage tracker holds a monthly odometer reading for at least six months, each compared with the straight-line allowance."
                cadence: rolling
              tasks:
                - "Copy the annual mileage allowance and excess rate from the agreement"
                - "Create a tracker showing expected mileage for each month of the term"
                - "Photograph the odometer and enter the reading @recurring(monthly:28)"
                - "Ask the lender about a revised allowance if you run 10 percent over"
            - name: Annual finance statement review
              description: |-
                ## Purpose
                Many lenders send a yearly statement showing payments made, the balance outstanding and sometimes an early settlement estimate. Reading it properly, rather than filing it unopened, catches errors, confirms the balloon has not changed and is the natural moment to decide whether to overpay, refinance or carry on.

                ## Milestones
                1. This year's statement saved with the agreement.
                2. Payments listed checked against your own bank record.
                3. The outstanding balance and any final payment compared with the original agreement.
                4. A one-line decision for the coming year: carry on, overpay or look at settling.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each annual statement is saved, checked against your payment record and followed by a written decision for the year ahead."
                cadence: cyclic
              tasks:
                - "Find the most recent annual statement from your lender"
                - "Check the payments listed against your bank statements"
                - "Compare the balance and final payment with the original agreement"
                - "Read the new annual statement and write a one-line decision @recurring(yearly)"
            - name: Quarterly equity watch
              description: |-
                ## Purpose
                Used car prices move with the market, and the point where a car moves from negative to positive equity is often the best moment to change, settle or refinance. Checking a valuation against a fresh settlement figure each quarter turns a vague hope into a dated number you can act on.

                ## Milestones
                1. A valuation and settlement figure entered every quarter.
                2. The equity trend over the last four quarters visible in one log.
                3. The quarter in which equity turned positive, if it has, noted.
                4. Any decision prompted by the trend written beside the figures.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly equity entries, each with a valuation and a settlement figure, are recorded within a year."
                cadence: rolling
              tasks:
                - "Add equity columns to your car finance log"
                - "Check a valuation and a settlement figure, then log the gap @recurring(quarterly)"
                - "Note the quarter when equity crosses from negative to positive"
            - name: Regular car loan overpayment routine
              description: |-
                ## Purpose
                Overpaying a hire purchase agreement or car loan reduces the balance and, under many agreements, the interest charged, which can shorten the term or shrink the final payment. A small fixed overpayment on a set day each month, once the lender has confirmed how it is applied, works better than lump sums that never quite happen.

                ## Milestones
                1. The lender's rules on overpayments or partial early settlement confirmed in writing.
                2. A monthly overpayment amount chosen that fits within the budget.
                3. Overpayments made on a set day for six months.
                4. The revised end date or reduced final payment confirmed by the lender.

                ## Notes
                Ask whether an overpayment shortens the term or lowers the monthly payment, and choose the one that suits you; some lenders pick for you unless asked. On a PCP, ask how overpayments affect the balloon.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly overpayments made, with the lender's confirmation of the revised balance and end date saved."
                cadence: rolling
              tasks:
                - "Ask the lender how partial settlements are applied to your agreement"
                - "Choose a monthly overpayment amount you can keep up"
                - "Send the agreed overpayment to the lender @recurring(monthly:10)"
                - "Ask the lender for the revised end date after six overpayments"
            - name: Balloon payment fund
              description: |-
                ## Purpose
                A PCP or balloon loan ends with an optional final payment that is often a third or more of the car's original price, and drivers who want to keep the car are often caught without it. Dividing the balloon by the months remaining and saving that amount every month keeps the option to own the car open at the end.

                ## Milestones
                1. The balloon amount and due date taken from the agreement.
                2. A monthly saving figure worked out by dividing the balloon by the months left.
                3. A separate savings pot receiving that amount every month.
                4. The pot balance compared each year with where it should be.

                ## Notes
                Start from the **Savings goal** template. Even if you expect to hand the car back, the fund gives you a real choice and can become the next deposit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dedicated pot is on track to hold the full balloon amount by the final payment date, checked once a year."
                cadence: rolling
              tasks:
                - "Copy the balloon amount and due date from the agreement"
                - "Divide the balloon by the months remaining to set a monthly figure"
                - "Transfer the monthly figure into the balloon pot @recurring(monthly:12)"
                - "Compare the pot with the balloon target and top up if behind @recurring(yearly)"
            - name: Condition record for a PCP or lease handback
              description: |-
                ## Purpose
                Damage charges at the end of a PCP or lease are judged against a fair wear and tear standard, and disputes come down to evidence. Photographing the car every quarter, and pricing small repairs as they appear, builds a clear record of its condition and avoids a large bill for marks that would have been cheap to fix.

                ## Milestones
                1. The fair wear and tear guide your lender uses downloaded and read.
                2. A dated photo set of each panel, wheel, seat and the windscreen taken every quarter.
                3. Chips, scuffs and kerbed wheels listed with a plan for each.
                4. The photo record kept until the handback is signed off.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Quarterly dated photo sets of the car exist from the start of the agreement to handback, with known damage listed."
                cadence: rolling
              tasks:
                - "Download the fair wear and tear guide your lender uses"
                - "Photograph every panel, wheel, seat and the windscreen in daylight @recurring(quarterly)"
                - "List any marks outside the guide and get prices to repair them"
            - name: Refinancing rate watch
              description: |-
                ## Purpose
                If rates fall or your credit file improves after you sign, a cheaper personal loan may be able to clear the car finance and cut the interest over the rest of the term. A short look at loan rates every quarter, against a threshold you set now, means you notice the moment refinancing becomes worth the paperwork.

                ## Milestones
                1. Your current APR and latest settlement figure written in one place.
                2. A threshold set, such as an APR at least two points lower, at which refinancing gets a full comparison.
                3. Soft-search loan quotes checked against the threshold every quarter.
                4. A full comparison made whenever the threshold is met.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Loan rates are checked against a written refinancing threshold at least four times a year, with a full comparison whenever it is met."
                cadence: rolling
              tasks:
                - "Write down your current APR and a refinancing threshold"
                - "Run a soft-search loan quote and compare it with the threshold @recurring(quarterly)"
                - "Compare the total cost of settling and refinancing when the threshold is met"
            - name: Annual car finance review
              description: |-
                ## Purpose
                Once a year it pays to step back from individual payments and ask whether the car, the finance and the plan for the next car still fit your life. An hour with your agreement summary, equity figure and budget ceiling ends in up to three decisions: keep going as you are, change something now, or start preparing for the end of the agreement.

                ## Milestones
                1. The agreement summary updated with this year's balance and end date.
                2. The equity figure and budget ceiling reviewed for changes.
                3. Key dates for the next 18 months confirmed in the calendar.
                4. Up to three actions for the year ahead written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A yearly review is held, with an updated agreement summary and up to three written actions, for two years running."
                cadence: cyclic
              tasks:
                - "Book an hour in the calendar for the car finance review @recurring(yearly)"
                - "Update the agreement summary with this year's balance"
                - "Check the budget ceiling still fits your take-home pay"
                - "Write up to three car finance actions for the year ahead"
            - name: How PCP balloons and guaranteed future value work
              description: |-
                ## Purpose
                Every PCP is built around a guaranteed future value: the lender's prediction of what the car will be worth at the end, set as the optional final payment. Understanding how that figure is set, why it keeps monthly payments low and how mileage and condition affect it explains why PCP suits some drivers and costs others more than they expected.

                ## Milestones
                1. Deposit, amount of credit, guaranteed future value and optional final payment explained in your own words.
                2. Your own agreement's figures labelled with those terms.
                3. The three end-of-term choices and the conditions attached to each written down.
                4. The fact that interest runs on the balloon for the whole term understood and noted.

                ## Notes
                Interest is charged on the full amount borrowed, including the balloon, for the whole term. That is why a PCP can cost more in interest than hire purchase on the same car.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains PCP in your own words, with your own agreement's figures labelled correctly."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a consumer body's plain-language guide to PCP"
                - "Label your agreement's figures with the PCP terms"
                - "Write down the mileage and condition rules for handing the car back"
                - "Explain the arrangement aloud to someone else to test your understanding"
            - name: Reading APR, flat rate and the representative example
              description: |-
                ## Purpose
                Car finance adverts may quote a flat rate that looks roughly half the true cost of borrowing, a representative APR that not every applicant gets, or only the monthly figure. Learning to read the representative example, and to tell flat rate from APR, lets you compare any two quotes in a couple of minutes.

                ## Milestones
                1. The difference between flat rate and APR explained in a sentence.
                2. What representative APR means, and why your offered rate may differ, understood.
                3. Two real adverts read and their total amount payable found.
                4. A personal rule written: compare on APR and total amount payable, never on flat rate or monthly figure.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two real car finance adverts read correctly, with APR, total amount payable and cost of credit noted for each."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up how flat rate and APR are calculated differently"
                - "Find two car finance adverts and locate their representative examples"
                - "Write down the APR and total amount payable for each advert"
                - "Note why the rate you are offered could differ from the advertised one"
            - name: Hire purchase ownership and the purchase fee
              description: |-
                ## Purpose
                Under hire purchase the lender owns the car until the last payment and any option to purchase fee are paid, which affects whether you can sell it, modify it or take it abroad for long. Knowing who owns what, and when ownership passes to you, avoids breaching the agreement by accident and explains why a financed car cannot simply be sold.

                ## Milestones
                1. The ownership clause in your agreement found and read.
                2. The option to purchase fee and when it is charged noted.
                3. Changes that need the lender's permission, such as modifications or long stays abroad, listed.
                4. The point at which ownership transfers written in your agreement summary.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your agreement summary records who owns the car, the option to purchase fee and the changes that need lender permission."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the ownership clause in your finance agreement"
                - "Note the option to purchase fee and when it is due"
                - "List the changes that need the lender's permission"
                - "Ask the lender to confirm anything the agreement leaves unclear"
            - name: Initial rental, excess mileage and early exit on a lease
              description: |-
                ## Purpose
                Personal leases look like a simple monthly rental, but the upfront payment is often several months' rent, the car is never yours, and ending early can cost a large share of the remaining rentals. Learning how initial rental, mileage bands, maintenance packages and early termination charges work lets you compare a lease quote honestly with buying on finance.

                ## Milestones
                1. Initial rental, monthly rental, mileage allowance and excess rate explained in your own words.
                2. The early termination charge in a real lease found and understood.
                3. Whether maintenance, tyres and breakdown cover are included recorded.
                4. The total cost over the term worked out for one real lease quote.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One real lease quote has its total cost over the term worked out, including initial rental and any arrangement fee."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the terms and conditions of one real lease quote"
                - "Note the initial rental as a number of monthly payments"
                - "Find the early termination charge and how it is calculated"
                - "Add up initial rental, monthly rentals and fees for the full term"
            - name: Voluntary termination and the halfway rule
              description: |-
                ## Purpose
                In some countries, including the UK, consumers on hire purchase or PCP can hand the car back once half the total amount payable has been paid, with nothing more owed if the car has been looked after. Many drivers stuck in negative equity never hear of it. Knowing whether and when it applies to your agreement gives you an exit if circumstances change.

                ## Milestones
                1. Whether a voluntary termination right exists in your country and agreement confirmed.
                2. The amount needed to reach the halfway point worked out from the total amount payable.
                3. The condition and mileage expectations for a termination handback noted.
                4. How using the right would appear on your credit file checked and written down.

                ## Notes
                This right exists in some countries and not others, and the details vary. Use your consumer body's or lender's guidance; this project is about understanding the option, not deciding for you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records whether voluntary termination applies to your agreement, the amount to reach the halfway point and the conditions for handing back."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up whether consumer credit law where you live includes voluntary termination"
                - "Find the total amount payable on your agreement and halve it"
                - "Work out how much more you need to pay to reach that figure"
                - "Ask the lender what condition and mileage they expect on termination"
            - name: Depreciation and negative equity explained
              description: |-
                ## Purpose
                New cars commonly lose a large share of their value in the first three years, while a long term with a small deposit pays the debt down slowly, so the balance can sit above the car's value for years. Seeing how those two curves cross for your own car explains why some drivers roll debt from car to car, and how to avoid joining them.

                ## Milestones
                1. Typical depreciation for your make and model over the term looked up.
                2. Your outstanding balance for each year of the term set beside the car's expected value.
                3. The year the two lines cross, if they do, identified.
                4. Two levers that would close the gap sooner, such as a bigger deposit or shorter term, noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table compares your outstanding balance with your car's expected value for each year of the term, with the crossing point marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find typical depreciation figures for your make and model"
                - "Ask the agent to build a year-by-year table of balance against expected value"
                - "Mark the year your balance falls below the car's value"
                - "Note what a bigger deposit or a shorter term would change"
            - name: How dealer commission and brokers are paid
              description: |-
                ## Purpose
                Dealers and brokers are usually paid commission by the lender, and under some past arrangements the dealer could raise your interest rate to earn more. Knowing how commission works, what the dealer should tell you and which questions to ask lets you judge whether the rate offered is the best available to you or simply the best for the dealer.

                ## Milestones
                1. The ways dealers and brokers are paid for arranging finance written down.
                2. Any commission disclosure in your current paperwork found.
                3. Three questions about commission and rate setting written on a card for the next dealer visit.
                4. Whether your dealer used one lender or a panel noted for your current agreement.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note explains how car finance commission works, with three questions ready to ask the next dealer or broker."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your financial regulator's or a consumer body's guide to finance commission"
                - "Check your agreement paperwork for a commission disclosure"
                - "Write three questions to ask a dealer about commission and rates"
                - "Find out whether your dealer worked with one lender or a panel"
            - name: Logbook loans and other costly car borrowing to avoid
              description: |-
                ## Purpose
                Logbook loans, where a lender takes security over a car you already own, and other high-cost credit used for cars can carry very high rates and put the car at risk after a few missed payments. Learning the warning signs, and the cheaper routes that exist even with a weaker credit file, keeps a car purchase from turning into the most expensive debt in the household.

                ## Milestones
                1. How logbook loans and similar secured car borrowing work written in a few lines.
                2. Warning signs listed: very high APR, pressure to sign quickly, security taken over a car you already own.
                3. Cheaper alternatives noted, such as a credit union loan or saving longer for a bigger deposit.
                4. Any existing agreement of this kind identified, with free debt advice sought if there is one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of warning signs and two cheaper alternatives exists, and any existing high-cost car borrowing has been taken to a free debt adviser."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read a consumer body's guide to logbook loans and secured car borrowing"
                - "List the warning signs that mark a car loan as high cost"
                - "Find your nearest credit union and check whether it lends for cars"
                - "Contact a free debt advice service if you already hold such a loan"
            - name: Independent quote to benchmark dealer finance
              description: |-
                ## Purpose
                Dealer finance is convenient, but the rate offered at the desk is only good or bad compared with something else. Arriving with a written quote from a bank, building society or credit union gives you a benchmark, and it often prompts the dealer to improve the offer.

                ## Milestones
                1. At least one written finance or loan quote from a lender unconnected to the dealer.
                2. That quote's APR and total amount payable entered in your comparison sheet.
                3. The dealer's offer compared on the same basis.
                4. The cheaper option chosen and the reason recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision between dealer finance and an independent quote, made on total amount payable, is recorded before anything is signed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get a soft-search loan quote from your bank or a credit union"
                - "Enter the quote in your total cost comparison sheet"
                - "Ask the dealer in writing to match or beat the independent quote"
                - "Record which finance you chose and why"
            - name: Lease or finance for the next car
              description: |-
                ## Purpose
                Leasing and buying on finance can look similar month to month, but one ends with nothing to sell and the other with a car or a choice. Comparing the two over the same term, including deposits, fees, mileage and what you would own at the end, shows which costs less for the way you drive.

                ## Milestones
                1. One lease quote and one finance quote for the same car and term obtained.
                2. Total outlay for each worked out over the full term.
                3. The expected value of the car at the end subtracted from the finance total.
                4. A choice made and recorded with its main reason.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side comparison of a lease and a finance quote for the same car shows net cost over the term, with the choice recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get a lease quote and a finance quote for the same car and term"
                - "Add up the full outlay for each over the term"
                - "Subtract the car's expected end value from the finance total"
                - "Record your choice and the main reason for it"
            - name: Choosing a loan term you can live with
              description: |-
                ## Purpose
                Stretching a car loan from three years to five lowers the monthly payment but adds interest and keeps you in debt while the car ages. Comparing the same amount over three, four and five years against your budget ceiling shows the shortest term you can comfortably afford.

                ## Milestones
                1. Quotes or calculator results for the same amount over three, four and five years.
                2. Monthly payment and total interest noted for each term.
                3. Each term checked against your monthly budget ceiling.
                4. The shortest affordable term chosen.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The chosen loan term is the shortest one whose monthly payment fits your written budget ceiling, with the comparison saved."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Run the same loan amount through a calculator over three, four and five years"
                - "Note the monthly payment and total interest for each term"
                - "Cross out any term whose payment is above your budget ceiling"
                - "Choose the shortest term that remains"
            - name: Settling early or carrying on paying
              description: |-
                ## Purpose
                Settling car finance early usually saves some of the interest, and some countries limit what a lender can charge for it, but using savings to clear it can leave you without a buffer. Getting a settlement figure, working out the interest saved and weighing it against what the money is doing now leads to a clear yes or no.

                ## Milestones
                1. A written settlement figure and the total of the remaining payments obtained.
                2. Interest saved worked out as remaining payments minus the settlement figure.
                3. The effect on your emergency savings checked against the buffer you want to keep.
                4. A decision recorded: settle in full, settle partly or carry on.

                ## Notes
                Weigh the interest saved against what losing your emergency buffer would mean. For many households on a low-rate car loan, keeping the buffer matters more.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision to settle in full, settle partly or carry on is recorded, with the interest saved and the effect on savings worked out."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request a written settlement figure from the lender"
                - "Add up the payments left under the agreement"
                - "Subtract the settlement figure to find the interest saved"
                - "Check what settling would leave in your emergency savings"
                - "Write down your decision and the reason for it"
            - name: Overpay the car loan or save the difference
              description: |-
                ## Purpose
                Spare money each month can go towards the car loan or into savings, and the better choice depends on the loan's APR, the savings rate after tax, any other debts and how secure your income feels. Laying the numbers out once gives a reasoned answer instead of a gut feeling, and it can be revisited whenever rates change.

                ## Milestones
                1. Car loan APR, best available savings rate and any other debt rates listed together.
                2. Any higher-rate debt identified as coming first.
                3. Your emergency buffer checked against your target.
                4. A split chosen between overpaying and saving, with a date to revisit it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written split of spare monthly money between car loan overpayments and savings, based on current rates, with a revisit date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the APR of every debt alongside your best savings rate"
                - "Check whether your emergency buffer is at the level you want"
                - "Decide how to split spare money between overpaying and saving"
                - "Set a date to revisit the split when rates change"
            - name: Refinancing a balloon payment
              description: |-
                ## Purpose
                Drivers who want to keep a PCP car but have not saved the final payment can often refinance it, either with the original lender or through a personal loan. The cost of that refinance varies widely, so comparing options three to six months before the balloon is due avoids a rushed choice in the last few weeks.

                ## Milestones
                1. The balloon amount and due date confirmed with the lender.
                2. The lender's own refinance offer, if any, obtained in writing.
                3. At least two personal loan quotes gathered by soft search.
                4. The cheapest route on total cost chosen at least a month before the due date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A refinance route for the balloon is chosen on total cost at least one month before the final payment is due."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the lender whether they offer balloon refinancing and on what terms"
                - "Get two soft-search personal loan quotes for the balloon amount"
                - "Compare the total repayable for each refinance route"
                - "Arrange the chosen refinance at least a month before the due date"
            - name: Choosing what to do at the end of a PCP
              description: |-
                ## Purpose
                At the end of a PCP you can usually hand the car back, use any equity as a deposit on the next car, or pay the final payment and keep it. Each choice has a cost that depends on equity, mileage, condition and what you want next, and leaving the decision to the dealer's phone call in the last month usually means the part-exchange route by default.

                ## Milestones
                1. Current equity worked out from a valuation and the final payment.
                2. Excess mileage and likely damage charges estimated for a handback.
                3. The full cost of handing back, part-exchanging and keeping written side by side.
                4. Your choice confirmed with the lender within any notice period.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The end-of-term choice is confirmed with the lender before the notice deadline, with the cost of all three options written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the notice deadline for end-of-term choices in the agreement"
                - "Work out equity from a valuation and the final payment"
                - "Estimate mileage and damage charges if you hand the car back"
                - "Write the cost of handing back, part-exchanging and keeping side by side"
                - "Tell the lender your choice before the notice deadline"
            - name: Climbing out of negative equity
              description: |-
                ## Purpose
                Owing more than the car is worth is common in the early years of a long agreement, and rolling the shortfall into the next deal is how it compounds from car to car. A plan to close the gap, through overpayments, keeping the car longer or reaching a voluntary termination point where that exists, means the next car starts clean.

                ## Milestones
                1. The size of the negative equity confirmed from a settlement figure and valuations.
                2. The routes out that apply to your agreement listed.
                3. A chosen route with the month the gap should close.
                4. A written rule that no shortfall will be added to a new agreement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written plan shows the chosen route out of negative equity and the month the gap is expected to close, checked against quarterly equity figures."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the size of the shortfall from a settlement figure and valuations"
                - "List the routes out that apply to your agreement"
                - "Choose a route and work out the month the gap should close"
                - "Turn down any new deal that adds the shortfall to the next loan"
            - name: Dealer finance meeting preparation
              description: |-
                ## Purpose
                The finance conversation at a dealership is where good deals are lost: a long day, a car you already want and a monthly figure presented as the only question. Walking in with your budget ceiling, an independent quote and a list of questions, and deciding in advance to sign nothing on the day, keeps the decision yours.

                ## Milestones
                1. Budget ceiling, independent quote and comparison sheet on paper or on your phone.
                2. A list of questions covering APR, total amount payable, fees, balloon and commission.
                3. Every figure the dealer quotes written down during the meeting.
                4. The agreement taken away to read before signing.

                ## Notes
                Start from the **Meeting notes** template. Extras offered alongside the finance are a separate decision and belong with your car buying plan, not this meeting.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You leave the dealer finance meeting with every quoted figure written down and nothing signed on the same day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Print your budget ceiling, independent quote and comparison sheet"
                - "Write the questions to ask about APR, fees, balloon and commission"
                - "Record every figure the dealer quotes in your meeting notes"
                - "Take the agreement home to read before signing anything"
            - name: Cooling-off review after signing
              description: |-
                ## Purpose
                In many countries, including the UK and those in the EU, a regulated credit agreement comes with a 14-day period in which you can withdraw from the credit. Using those days to re-read the agreement calmly, check every figure against what you were told and confirm you still want it is far easier than unpicking a mistake later.

                ## Milestones
                1. The date the cooling-off period ends written in the calendar.
                2. Every figure in the signed agreement checked against your meeting notes.
                3. Any discrepancy raised with the lender in writing.
                4. A decision recorded to keep the credit or withdraw from it.

                ## Notes
                Withdrawing from the credit does not undo the car purchase itself; you would normally have to repay the amount borrowed within a short period. Check the exact rules in your agreement.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Within the cooling-off period, every figure in the signed agreement has been checked and a decision to keep or withdraw recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the cooling-off end date in your agreement and put it in the calendar"
                - "Check each figure against your notes from the dealer"
                - "Email the lender about any figure that does not match"
                - "Write down your decision before the cooling-off period ends"
            - name: Handback inspection preparation
              description: |-
                ## Purpose
                When a PCP or lease car is collected, an inspector records damage against the fair wear and tear standard and the lender bills for anything outside it. Preparing six weeks ahead, with your own inspection, quotes for small repairs and a full photo set on collection day, keeps the final bill to what is fair.

                ## Milestones
                1. Your own inspection done against the fair wear and tear guide six weeks before collection.
                2. Quotes obtained for any damage cheaper to repair than to be charged for.
                3. Service record, spare keys and accessories gathered.
                4. A dated photo and video record taken at collection.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The car is handed back with a dated collection photo record, and any damage charge is within the amount you estimated beforehand."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check the car panel by panel against the fair wear and tear guide"
                - "Get quotes for any damage likely to be charged at handback"
                - "Gather the service record, spare key and locking wheel nut"
                - "Photograph and film the car on collection day with the inspector present"
            - name: Final payment and confirming ownership
              description: |-
                ## Purpose
                When the last payment clears, ownership of a hire purchase car passes to you, but the finance marker held by vehicle history services is not always removed straight away. Confirming the agreement is closed, getting the letter that says so and checking the marker has gone avoids a problem on the day you come to sell.

                ## Milestones
                1. The final payment and any option to purchase fee paid and confirmed.
                2. A letter or email from the lender stating the agreement is settled.
                3. A vehicle history check showing no outstanding finance.
                4. The settlement letter filed with the car's documents.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A settlement letter is filed and a vehicle history check shows no outstanding finance on the car."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Confirm the final payment and any purchase fee have cleared"
                - "Ask the lender for a letter confirming the agreement is settled"
                - "Run a vehicle history check to confirm no finance is recorded"
                - "File the settlement letter with the vehicle documents"
            - name: Selling a car with finance still owed
              description: |-
                ## Purpose
                Cars with outstanding hire purchase or PCP belong to the lender, so they cannot simply be sold privately until the finance is cleared. Settling in the right order, through a dealer who clears the finance or by paying the lender before ownership passes, protects you and the buyer and shows exactly what is left once the debt is gone.

                ## Milestones
                1. A settlement figure valid on the planned sale date.
                2. The sale route chosen: dealer part-exchange, a car buying service, or settling first and selling privately.
                3. The finance settled and confirmed before ownership passes.
                4. A record kept of the sale price, settlement amount and any shortfall.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The finance is confirmed settled before the car changes hands, with sale price and settlement figures recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request a settlement figure valid on your planned sale date"
                - "Choose between part-exchange, a buying service and settling then selling privately"
                - "Get written confirmation the finance is settled before handing over the keys"
                - "Record the sale price, settlement amount and any shortfall"
            - name: Write-off or theft with finance still owed
              description: |-
                ## Purpose
                If a financed car is written off or stolen, the insurer pays its market value, which can be less than the settlement figure, and the lender still expects the balance. Knowing the steps, and having your agreement and policy details to hand, makes a stressful week manageable and shows early whether there is a shortfall to plan for.

                ## Milestones
                1. The lender told about the loss within days, with the agreement number.
                2. The insurer's settlement offer compared with the lender's settlement figure on the date of loss.
                3. Any shortfall or gap cover claim started, if you hold such cover.
                4. A written plan agreed with the lender for any remaining balance.

                ## Notes
                The insurer often pays the lender directly, with any surplus coming to you. Keep paying the monthly instalments until the lender confirms the agreement is closed.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The lender and insurer have both been notified, the insurer's offer compared with the settlement figure, and a written plan exists for any shortfall."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Tell the lender about the write-off or theft and give the agreement number"
                - "Ask the lender for a settlement figure on the date of loss"
                - "Compare the insurer's offer with the settlement figure"
                - "Agree in writing how any shortfall will be repaid"
            - name: First car finance with a thin credit file
              description: |-
                ## Purpose
                Young drivers and people new to a country often have little credit history, so lenders either decline them or quote a high rate. Applying only where your profile fits, and comparing a guarantor arrangement with saving a few more months for a bigger deposit, gives a first car finance deal that does not cost far more than it should.

                ## Milestones
                1. Your credit file checked and your registration at your current address confirmed in the way lenders look for.
                2. Lenders that accept limited credit history identified through soft searches.
                3. The cost of a guarantor deal compared with saving longer for a bigger deposit.
                4. A first agreement chosen with a payment well inside your budget ceiling.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A first car finance option is chosen from soft-search results, with its cost compared against saving for a larger deposit."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check you are registered at your address in the way lenders look for"
                - "Run soft searches with lenders that accept limited credit history"
                - "Compare a guarantor deal with saving three more months for a deposit"
                - "Keep the first monthly payment well below your budget ceiling"
            - name: Car finance on self-employed income
              description: |-
                ## Purpose
                Lenders usually ask self-employed applicants for more proof of income than employees, often two years of accounts or tax returns plus recent bank statements. Having those ready, and setting the payment against a lean month rather than an average one, means an application is judged on the real numbers instead of being declined for missing paperwork.

                ## Milestones
                1. Two years of accounts or tax return summaries saved as PDFs.
                2. Six months of business and personal bank statements ready to send.
                3. A monthly payment ceiling set against your lowest typical month, not your average.
                4. Lenders that say they accept self-employed applicants shortlisted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An income proof pack with two years of accounts or returns and six months of statements is ready before any application."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Save your last two years of accounts or tax return summaries as PDFs"
                - "Download six months of business and personal bank statements"
                - "Set your payment ceiling against your lowest typical month of income"
                - "Shortlist lenders that say they accept self-employed applicants"
                - "Refresh the income proof pack after each tax return is filed @recurring(yearly)"
            - name: Whose name goes on the car finance
              description: |-
                ## Purpose
                Couples often put a car on one partner's finance for the better rate, then share the payments informally, which leaves one person legally liable and the other with no clear claim if the relationship ends. Deciding together whose name the agreement goes in, how payments are shared and what happens to the car in a separation keeps a practical choice from becoming a dispute.

                ## Milestones
                1. Each partner's likely rate checked by soft search.
                2. A single or joint agreement chosen, with each person's liability understood.
                3. How payments will be shared written in a short note both have read.
                4. What happens to the car and the debt if you separate agreed in the same note.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A note both partners have read records whose name the finance is in, how payments are shared and what happens on separation."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Run soft searches for each partner to compare likely rates"
                - "Talk through what being the named borrower means for each of you"
                - "Write a short note on how the payments will be shared"
                - "Add what happens to the car and the debt if you separate"
            - name: Needing a bigger car mid-agreement
              description: |-
                ## Purpose
                Starting a family, a second child or a large dog can make a car too small well before the agreement ends, and the usual dealer answer is to roll the old finance into a new one. Working out your settlement position and the true cost of switching now, against making the current car work a little longer, stops a family change from becoming a long-term debt.

                ## Milestones
                1. The current settlement figure and equity confirmed.
                2. The cost of switching now compared with switching at the halfway point or the end.
                3. Any shortfall that would roll into the new agreement written down in full.
                4. A decision on when to switch, checked against your budget ceiling.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of switching now versus later, including any shortfall rolled over, ends in a dated decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get a settlement figure and a valuation for your current car"
                - "Ask for a quote on the bigger car that shows any shortfall rolled in"
                - "Compare switching now with waiting until the halfway point"
                - "Decide when to switch and record the reason"
            - name: Financing a car on pension income
              description: |-
                ## Purpose
                Retirees often have savings that could buy a car outright, a fixed income that makes payments predictable, and lenders who may limit term length by age. Weighing cash against finance, and choosing a term that fits your income and plans, keeps the car from eating into money meant for the rest of retirement.

                ## Milestones
                1. Pension and other regular income confirmed as monthly figures.
                2. The cost of paying cash, including savings interest given up, compared with a finance quote.
                3. Any lender age limits on agreement length checked.
                4. A choice recorded, with a replacement fund started if paying cash.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of cash against finance for the next car, based on pension income and savings rates, ends in a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your monthly pension and other regular income"
                - "Work out the savings interest you would give up by paying cash"
                - "Ask lenders about any age limits on agreement length"
                - "Record your choice and the reason for it"
            - name: Falling behind on car finance payments
              description: |-
                ## Purpose
                Missed car finance payments lead to fees, credit file damage and eventually the risk of the car being taken back, but lenders are expected to treat customers in difficulty fairly and most would rather agree a plan. Contacting the lender early, with a budget and free debt advice behind you, keeps far more options open than waiting for the letters.

                ## Milestones
                1. The lender contacted before, or as soon as, a payment is missed.
                2. A budget showing what you can afford sent to the lender.
                3. Free debt advice received from a recognised service.
                4. A payment arrangement, payment break or voluntary termination agreed in writing.

                ## Notes
                In some countries, including the UK, a lender needs a court order to repossess once a third of the total amount payable has been paid. A free debt advice service can explain how the rules where you live apply to you.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written payment arrangement or alternative is agreed with the lender, based on a budget reviewed by a free debt adviser."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Call the lender as soon as you know a payment will be missed"
                - "Write a one-page budget showing what you can afford each month"
                - "Book a call with a free debt advice service"
                - "Get any arrangement the lender agrees confirmed in writing"
            - name: Salary sacrifice car scheme through your employer
              description: |-
                ## Purpose
                Some employers offer cars, often electric, through salary sacrifice, where the cost comes out of gross pay and the tax treatment can make it far cheaper than a personal lease. The saving depends on your tax rate, the tax charged on the benefit, what is included and what happens if you leave the job, so the scheme deserves a proper check before the next enrolment window.

                ## Milestones
                1. The scheme's quote, terms and enrolment window obtained from HR.
                2. Net monthly cost after tax and any pension effect worked out.
                3. Early exit terms for leaving the job or taking parental leave read.
                4. A comparison with a personal lease or finance deal recorded, with a decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The net monthly cost of the employer car scheme, including early exit terms, is compared with a personal deal and a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask HR for the car scheme quote, terms and next enrolment window"
                - "Ask the agent to estimate your net monthly cost after tax and pension effects"
                - "Read what happens if you leave the job during the agreement"
                - "Compare the scheme with a personal lease and record your decision"
                - "Check the scheme terms before each enrolment window @recurring(yearly)"
            - name: Checking past agreements for unfair commission
              description: |-
                ## Purpose
                In some countries regulators have examined whether car finance commission was properly disclosed, and drivers with older agreements may be owed redress. Listing every agreement you have held, with lender, dates and paperwork, and following the regulator's published process, means any complaint is made directly and without handing a share to a claims firm.

                ## Milestones
                1. Every car finance agreement from the past fifteen years listed with lender and dates.
                2. Paperwork or lender confirmation gathered for each one.
                3. The regulator's current guidance on commission redress read.
                4. A complaint sent directly to each relevant lender, where the guidance applies.

                ## Notes
                Complaining directly to the lender, and to the free ombudsman service if needed, costs nothing. Read the terms carefully before signing with any claims firm that takes a percentage.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A list of past car finance agreements exists, and a direct complaint has been sent to each lender the regulator's guidance covers."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every car finance agreement you have held in the last fifteen years"
                - "Ask each lender for details of any agreement you have no paperwork for"
                - "Read your financial regulator's latest guidance on finance commission"
                - "Send a complaint directly to each lender the guidance covers"
            - name: Staggered end dates in a two-car household
              description: |-
                ## Purpose
                When two cars on finance end in the same year, the household faces two deposits, two decisions and possibly two balloons at once. Planning so end dates fall at least a year apart, and choosing which car to replace first, spreads the cost and keeps one dependable car on the drive while the other changes.

                ## Milestones
                1. Both agreements' end dates and final payments on one timeline.
                2. The car to replace first chosen, with a reason.
                3. The next agreement's term picked to keep end dates at least a year apart.
                4. One deposit pot or balloon fund running for whichever agreement ends first.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A household timeline shows both car finance end dates at least twelve months apart, with savings running for whichever comes first."
                cadence: cyclic
              tasks:
                - "Put both agreements' end dates and final payments on one timeline"
                - "Decide which car to replace first and why"
                - "Choose the next term so the end dates fall at least a year apart"
                - "Review the two-car timeline and savings for the next replacement @recurring(yearly)"
            - name: Electric car finance and residual value risk
              description: |-
                ## Purpose
                Electric car values have moved sharply as technology and new prices change, which makes the guaranteed future value on a PCP and the residual value behind a lease especially important. Understanding who carries the value risk in each finance type, and whether a battery is leased separately, helps you choose finance that protects you if values fall.

                ## Milestones
                1. Who carries the residual value risk under PCP, HP, loan and lease written down.
                2. Any separate battery lease or battery warranty terms in your quote read.
                3. Recent used values for the model compared with the guaranteed future value offered.
                4. A finance type chosen with the value risk in mind.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note compares who carries value risk under each finance type for your chosen electric car, and the chosen finance reflects it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down who bears the value risk under PCP, HP, loan and lease"
                - "Check whether the battery is included or leased separately"
                - "Compare recent used values for the model with the offered future value"
                - "Choose the finance type with the value risk in mind"
            - name: Acting as a guarantor on someone else's car finance
              description: |-
                ## Purpose
                Parents and partners are often asked to guarantee a young driver's car finance, which makes them legally responsible for the payments if the borrower stops. Reading the agreement, setting ground rules and keeping a light monthly eye on payments protects your own credit file as well as the relationship.

                ## Milestones
                1. The guarantee and the full credit agreement read before signing.
                2. The most you could be asked to pay written down.
                3. Ground rules agreed with the borrower, including telling you early about any problem.
                4. A monthly confirmation of payment agreed and running.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The guarantee is signed only after the maximum liability is written down and the borrower has agreed to monthly payment updates."
                cadence: rolling
              tasks:
                - "Read the full credit agreement and the guarantee before signing"
                - "Write down the most you could be asked to pay"
                - "Agree with the borrower that they will tell you early about any difficulty"
                - "Ask the borrower to confirm this month's payment has been made @recurring(monthly:20)"
---

# Car Loan & Finance

This area is for anyone paying for a car on finance, or about to sign for one, who wants to know what it really costs and how to end it on good terms. It starts with the foundations (your agreements filed, a budget ceiling, an equity check, the key dates and a soft-search eligibility check), then the monthly routines that keep payments, mileage and savings on track, the skills to read PCP, hire purchase, lease and APR terms, the decisions about settling, overpaying and refinancing, the events at the dealership and at the end of an agreement, the situations of first-time borrowers, couples, families, the self-employed and retirees, and finally specialist work on commission complaints, two-car households, electric cars and guarantees.

What repeats is a monthly payment check and odometer reading, monthly transfers into a deposit pot and a balloon fund, a quarterly look at equity, refinancing rates and the car's condition, and a yearly statement review and car finance review. The Savings goal, Purchase decision, Metrics log and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
