---
id: personal-finance.credit-card-debt-payoff
name: Credit Card Debt Payoff
description: "A full card inventory, a firm stop on new spending, a chosen payoff order, balance transfers handled with care and monthly check-ins that carry every card to a zero balance."
category: personal
version: 1.0.0
tags: [personal-finance, credit-card-debt-payoff, everyone, avalanche, snowball, balance-transfer, interest]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - metrics-log
    - habit-tracker
    - purchase-decision
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Credit Card Debt Payoff
          description: "Clearing credit card balances using avalanche or snowball methods, balance transfers and a firm stop on new borrowing."
          projects:
            - name: Full credit card debt inventory
              description: |-
                ## Purpose
                Most people carrying card debt know the total only roughly, and almost nobody can recite every rate, minimum and promotional end date. One table listing every card with its balance, purchase rate, cash advance rate, minimum payment, credit limit and any 0% expiry turns a vague worry into numbers you can plan against. Every other project in this area is built on it.

                ## Milestones
                1. Every card you hold, including store cards and dormant ones, listed by name and last four digits.
                2. Balance, purchase rate, cash advance rate, minimum payment and credit limit recorded for each card.
                3. Every promotional rate written down with its exact end date.
                4. A single total of card debt and a total of monthly minimums at the foot of the table.

                ## Notes
                Log in to each account rather than relying on a paper statement that may be weeks old. Store cards and catalogue accounts count as card debt too.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated table lists every card with balance, rates, minimum, limit and promotional end date, plus totals of debt and minimums."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the name of every credit and store card you hold"
                - "Log in to each card account and copy the current balance and rates"
                - "Add each promotional rate and the date it ends"
                - "Total the balances and the monthly minimums at the foot of the table"
            - name: Minimum payment direct debits on every card
              description: |-
                ## Purpose
                A single missed payment can bring a late fee, the loss of a promotional rate and a mark on your credit file, which is a high price for forgetting a date. Setting a direct debit for at least the minimum on every card makes a miss almost impossible, so all your effort can go into the extra payments. Do it before changing anything else.

                ## Milestones
                1. A direct debit for at least the minimum payment active on every card.
                2. Each direct debit collecting from the account your pay lands in.
                3. Every collection date checked against payday so the money is there.
                4. One full cycle completed with every minimum collected on time.

                ## Notes
                Set the direct debit to the minimum rather than a fixed sum, so it still adjusts as the balance falls. Your extra payment goes on top by standing order or by hand.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every card shows an active minimum payment direct debit and a full month passes with no missed or late payment."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List which cards already have a direct debit and which do not"
                - "Set up a minimum payment direct debit on each card missing one"
                - "Check every collection date falls after payday"
                - "Confirm each card's minimum was collected after its due date @recurring(monthly:3)"
            - name: Firm stop on new credit card spending
              description: |-
                ## Purpose
                Paying off a balance while still adding to it is like bailing a boat with the tap running. A firm stop means the cards leave your wallet, saved card details come out of shops and apps, and everyday spending moves to a debit card, so every payment you make actually reduces what you owe.

                ## Milestones
                1. Cards removed from your wallet, your phone wallet and the browser's saved payment details.
                2. Saved card numbers deleted from shopping, food delivery and travel accounts.
                3. A debit card set as the default payment everywhere you shop regularly.
                4. Four weeks completed with no new purchases on any card in the payoff plan.

                ## Notes
                Some people freeze a card in a block of ice. The lock feature in the provider's app does the same job and is quicker to reverse in a genuine emergency.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four consecutive weeks pass with no new purchases on any card in the payoff plan, confirmed from the statements."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Remove the cards from your phone wallet and your physical wallet"
                - "Delete saved card details from shopping and delivery accounts"
                - "Turn on the card lock in each provider's app where it is offered"
                - "Set your debit card as the default in the accounts you use weekly"
            - name: Moving recurring bills off the credit cards
              description: |-
                ## Purpose
                Streaming services, phone bills, insurance and gym fees charged to a card add new debt every month, even after you stop shopping with it. Moving each one to a debit card or a direct debit from your current account stops the balance being topped up behind your back.

                ## Milestones
                1. Every recurring charge on each card's last two statements identified.
                2. Each one moved to a debit card, switched to a direct debit or cancelled.
                3. The next statement on every card showing no recurring charges.
                4. A note kept of where each moved payment now comes from.

                ## Notes
                Check annual renewals too. Car insurance, software and memberships that charge once a year are easy to miss on a single month's statement.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A full statement cycle on every card in the payoff plan shows no subscription or bill charges."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Go through the last two statements of each card and mark recurring charges"
                - "Update the payment card on each service to your debit card"
                - "Search twelve months of statements for annual renewals"
                - "Check the statements for any repeat charge that has crept back @recurring(quarterly)"
            - name: Minimum-payment-only cost calculation
              description: |-
                ## Purpose
                Card minimums are set to fall as the balance falls, which is why paying only the minimum can stretch a modest balance across a decade or more. Working out how long each card would take, and how much interest you would pay, on minimums alone gives you the number that makes a plan worth keeping. Many statements already print this figure in a box near the payment summary.

                ## Milestones
                1. The minimum-only payoff time found for each card, from the statement or a calculator.
                2. Total interest on the minimum-only path recorded for each card.
                3. The same two figures worked out for your planned fixed payment.
                4. The difference in years and in money written in one sentence.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "For every card, the minimum-only payoff time and total interest are recorded beside the figures for your planned payment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the minimum payment warning box on your latest statement"
                - "Run each card through an online minimum payment calculator"
                - "Repeat the calculation with your planned fixed monthly payment"
                - "Write the interest difference in one sentence at the top of your plan"
            - name: Fixed monthly card payment amount
              description: |-
                ## Purpose
                A payoff plan is only as strong as the money behind it each month. Going through the budget to find a fixed sum you can send to the cards on top of the minimums, without needing the cards again for essentials, is the decision that sets your debt-free date. A smaller amount you can keep up beats a bold one that collapses by the third month.

                ## Milestones
                1. Take-home pay and essential costs written down for a typical month.
                2. A fixed monthly card payment chosen that still leaves room for groceries and irregular bills.
                3. The figure tested against the last three months of real spending.
                4. The amount written into the budget as a fixed line, like rent.

                ## Notes
                Start from the **Monthly budget and bills** template.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A fixed monthly card payment is recorded as a budget line, tested against three months of actual spending."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down your monthly take-home pay and essential bills"
                - "Compare that against the last three months of actual spending"
                - "Choose a fixed monthly card payment you could keep for a year"
                - "Add the payment to your budget as a fixed line"
            - name: Starter cash buffer to stop emergency card use
              description: |-
                ## Purpose
                Without a little cash set aside, the first flat tyre or broken washing machine goes straight back on a card and undoes months of progress. A small starter buffer, roughly the size of one unexpected bill, kept in a separate easy-access account, breaks that cycle while most spare money still goes to the cards. The full emergency fund can wait until the cards are clear.

                ## Milestones
                1. A buffer target set, sized to one typical unexpected bill.
                2. A separate easy-access account named for the buffer.
                3. The target reached within the time you set.
                4. A written rule for what counts as an emergency and how the buffer is refilled.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A separate account holds a starter buffer at the target you set, with a written rule for when it may be used."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look back over the year for the largest unexpected bill you paid"
                - "Open or rename a separate easy-access account for the buffer"
                - "Set a standing order into it until the target is reached"
                - "Write a one-line rule for what the buffer may be used for"
            - name: Choosing avalanche or snowball for your cards
              description: |-
                ## Purpose
                Avalanche sends extra money to the highest interest rate first and costs the least overall; snowball clears the smallest balance first and gives quicker wins that keep many people going. Neither is wrong, but switching between them wastes the advantage of both. Running your own numbers through each and choosing one, with the reason written down, settles the order for good.

                ## Milestones
                1. Your cards listed in avalanche order and in snowball order.
                2. Total interest and payoff date estimated for each method using your fixed payment.
                3. One method chosen, with the reason recorded in a sentence.
                4. The first target card named in the inventory.

                ## Notes
                If the interest difference between the two orders is small, the method you will stick with is the better one. If it is large, it may be worth waiting a little longer for the first win.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen payoff method and first target card are recorded, with interest estimates for both methods beside them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sort your card list by interest rate and again by balance"
                - "Ask the agent to estimate total interest under each order using your fixed payment"
                - "Choose a method and write the reason in one sentence"
                - "Mark the first card to target in your inventory"
            - name: Written card payoff plan with a debt-free date
              description: |-
                ## Purpose
                Once you know your balances, your payment and your order, a one-page plan pulls them together and gives you a date to aim at. Seeing month by month which card clears when makes the plan real enough to defend against tempting spending, and gives you something concrete to update when life changes.

                ## Milestones
                1. A month-by-month schedule showing each card's balance falling to zero.
                2. A projected debt-free date at the top of the page.
                3. The month each card should clear marked as a checkpoint.
                4. The plan saved somewhere you will open it every month.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page payoff schedule with a projected debt-free date and a clear date for each card exists and is saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Build a month-by-month schedule from your payment and chosen order"
                - "Mark the month each card is projected to reach zero"
                - "Write the debt-free date at the top of the page"
                - "Pin the plan where you will see it at each monthly check-in"
            - name: Warning signs that card debt needs outside advice
              description: |-
                ## Purpose
                Some card debt is too large to clear by budgeting alone, and pushing on can mean borrowing to make the minimums or falling behind on rent. Agreeing in advance on the signs that mean it is time to call a free, independent debt advice service, such as minimums taking more than a set share of income or using one card to pay another, means you ask for help early rather than in a crisis.

                ## Milestones
                1. A short list of personal warning signs written down.
                2. The share of take-home pay going on card minimums calculated.
                3. The contact details of a free, independent debt advice service saved.
                4. A commitment recorded to call that service if two or more signs appear.

                ## Notes
                Be wary of fee-charging debt firms that advertise heavily. Free, regulated debt advice is available in most countries through charities and government-backed services.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of warning signs, the current share of income going on minimums and a free debt advice contact are saved together."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Calculate what share of take-home pay goes on card minimums"
                - "Write down four warning signs that would mean outside help is needed"
                - "Save the contact details of a free independent debt advice service"
                - "Rerun the warning signs check against your latest figures @recurring(quarterly)"
            - name: Monthly card balance check-in
              description: |-
                ## Purpose
                Progress on card debt is slow, and without a record it stays invisible for months. A fifteen-minute check-in on the same day each month, recording every balance, the total and the change since last time, keeps the plan honest and shows the downward line that makes the next month easier.

                ## Milestones
                1. A log with one row per month and a column per card.
                2. Every balance recorded on the same day each month.
                3. The month's total change calculated and noted.
                4. Twelve consecutive monthly entries completed.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly rows sit in the balance log, each with every card balance and the total."
                cadence: rolling
              tasks:
                - "Create a balance log from the metrics log template with a column per card"
                - "Record every card balance and the total in the log @recurring(monthly:9)"
                - "Write one line on what helped or hurt this month"
            - name: Payday overpayment routine
              description: |-
                ## Purpose
                Interest on most cards is worked out on the daily balance, so money sent on payday rather than on the due date trims the interest a little every month. Making the extra payment the first thing that happens when wages arrive also means it has gone before it can be spent.

                ## Milestones
                1. Your payday and each card's due date written side by side.
                2. A standing order set for the extra payment where the provider accepts one.
                3. The extra payment leaving within a day of payday for three months running.
                4. Six months of on-time payday overpayments recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months in which the extra payment left within a day of payday, confirmed on the card statements."
                cadence: rolling
              tasks:
                - "Write your payday next to each card's due date"
                - "Set a standing order for the extra payment to the target card"
                - "Send the extra card payment the day wages land @recurring(monthly:25)"
                - "Check the overpayment reached the target card and not another account"
            - name: Interest charged tracker
              description: |-
                ## Purpose
                The interest line on each statement is the plainest measure of what card debt costs you, and watching it shrink is more motivating than watching a large balance edge down. Recording the interest charged on every card each month shows exactly what each payment and transfer is saving.

                ## Milestones
                1. Last month's interest charge found on each statement.
                2. A running monthly record of interest by card.
                3. A twelve-month total of interest paid calculated.
                4. The interest line falling for three months in a row.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A record of monthly interest charged by card covers at least six months, with a running twelve-month total."
                cadence: rolling
              tasks:
                - "Find the interest charged line on each card's latest statement"
                - "Record each card's interest charge in the tracker @recurring(monthly:17)"
                - "Add up the interest paid over the last twelve months"
                - "Compare this quarter's interest with last quarter's"
            - name: Promotional rate end-date calendar
              description: |-
                ## Purpose
                A 0% balance transfer or purchase offer that ends unnoticed can move a large balance onto a rate above 20% overnight. Putting every promotional end date in the calendar, with reminders three months and one month ahead, gives you time to clear, transfer or plan for the change.

                ## Milestones
                1. Every promotional rate and end date copied from the card agreements.
                2. Calendar reminders set three months and one month before each end date.
                3. The monthly payment needed to clear each promotion in time calculated.
                4. No promotion ending with a balance you had not planned for.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every promotional rate has its end date in the calendar with two reminders, and no promotion lapses unplanned."
                cadence: rolling
              tasks:
                - "Find the end date of every promotional rate in your card agreements"
                - "Add reminders three months and one month before each end date"
                - "Work out the monthly payment needed to clear each one in time"
                - "Check every promotional balance and end date against the plan @recurring(quarterly)"
            - name: Weekly no-new-spending check
              description: |-
                ## Purpose
                Most new card debt arrives in small amounts: a takeaway here, an online basket there. A two-minute look at each card's recent transactions every Sunday catches any slip within days, and a simple tick chart turns the firm stop into a streak you can see.

                ## Milestones
                1. A tracker with one box per week for each card.
                2. Pending and posted transactions checked weekly on every card.
                3. Any slip noted with what triggered it.
                4. Twelve consecutive clean weeks recorded.

                ## Notes
                Start from the **Habit tracker** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weeks are ticked in the tracker, with every slip noted alongside its trigger."
                cadence: rolling
              tasks:
                - "Set up a weekly tracker from the habit tracker template"
                - "Check each card app for new transactions and tick the week @recurring(weekly:sun)"
                - "Write the trigger next to any week with a slip"
            - name: Windfall and refund routing rule
              description: |-
                ## Purpose
                Tax refunds, bonuses, birthday money and overtime arrive unplanned and tend to vanish into ordinary spending. Agreeing in advance what share of any windfall goes straight to the cards, and what share you keep to enjoy, speeds up the plan without making every bit of good luck feel like a punishment.

                ## Milestones
                1. A written rule splitting windfalls between the cards and yourself.
                2. A list of likely windfalls in the year ahead with rough sizes.
                3. The next windfall routed by the rule within a week of arriving.
                4. Each windfall payment recorded in the balance log.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written windfall rule exists, and every windfall in the year is logged with the share sent to the cards."
                cadence: rolling
              tasks:
                - "Write a rule for the share of any windfall that goes to the cards"
                - "List the windfalls likely in the next twelve months"
                - "Route the next windfall within a week of it arriving"
                - "Revisit the windfall split as the total balance falls @recurring(yearly)"
            - name: Quarterly payoff plan refresh
              description: |-
                ## Purpose
                Rates change, pay rises and falls, and promotions end, so a plan written in January is out of date by spring. A short quarterly session to update balances, re-sort the order, adjust the fixed payment and move the debt-free date keeps the plan matched to your life rather than to the month you wrote it.

                ## Milestones
                1. Current balances and rates updated in the plan.
                2. The payoff order checked against your chosen method.
                3. The fixed payment raised by any pay rise or saving.
                4. A revised debt-free date recorded with the reason for any change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly refreshes are completed in a year, each recording updated balances and a revised debt-free date."
                cadence: cyclic
              tasks:
                - "Book a one-hour plan refresh in the calendar for each quarter"
                - "Update the balances, rates and payoff order in the plan @recurring(quarterly)"
                - "Raise the fixed payment by any pay rise or cost saved"
                - "Record the revised debt-free date and why it moved"
            - name: Rolling freed payments to the next card
              description: |-
                ## Purpose
                When a card reaches zero, its minimum and your extra payment are both freed up, and the easiest mistake is letting that money drift into everyday spending. Redirecting the full freed amount to the next card in your order is what makes both avalanche and snowball speed up as they go.

                ## Milestones
                1. The freed amount calculated each time a card clears.
                2. The standing order moved to the next target card.
                3. The new, larger payment showing on the next card's statement.
                4. The plan updated with new projected clear dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each time a card clears, the full freed amount appears on the next target card's statement within one cycle."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Add up the freed minimum and extra payment from the cleared card"
                - "Move the standing order to the next card in your order"
                - "Check the next statement shows the larger payment arriving"
                - "Update the projected clear dates in your payoff plan"
            - name: Card terms and fee notice review
              description: |-
                ## Purpose
                Card providers change rates, fees and minimum payment rules with a few weeks' notice, often by an email that looks like marketing. A yearly read of each card's current terms, plus the habit of opening every notice, means a rate rise or a new annual fee never arrives as a surprise.

                ## Milestones
                1. The current terms summary for each card downloaded.
                2. Annual, late and cash advance fees noted for each card.
                3. An email folder or filter set up for card provider notices.
                4. Every change in terms acted on before it takes effect.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A current terms summary for every card is saved with its fees recorded, and every notice received in the year has been read and filed."
                cadence: cyclic
              tasks:
                - "Download the terms summary for each card from its online account"
                - "Note every annual, late and cash advance fee in your inventory"
                - "Create an email folder for notices from card providers"
                - "Reread the terms of every card you still hold @recurring(yearly)"
            - name: Moving card due dates to just after payday
              description: |-
                ## Purpose
                Due dates that land the week before payday force a choice between the card and the food shop, and that is how payments get missed. Most providers will move the due date on request, and aligning every card to a few days after wages arrive makes the whole plan easier to run.

                ## Milestones
                1. Each card's current due date compared with your payday.
                2. A due date change requested from every provider whose date falls badly.
                3. Confirmation of each new due date received.
                4. Direct debits checked against the new dates once the change applies.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every card's due date falls within a week after payday, with each change confirmed in writing by the provider."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List each card's due date beside your payday"
                - "Ask each provider whose date falls before payday to move it"
                - "Note the new due date and the first cycle it applies to"
                - "Check the direct debits still collect on the right day"
            - name: Reading a credit card statement line by line
              description: |-
                ## Purpose
                Statements pack the balance, the minimum, the interest, the rate for each type of balance and the promotional end dates onto a page most people skim for the amount due. Learning what every box means, using one of your own statements, makes each later decision in this area quicker and calmer.

                ## Milestones
                1. Each section of one real statement labelled in your own words.
                2. The difference between statement balance, current balance and minimum written down.
                3. Each balance type and the rate charged on it identified.
                4. Any figure you could not explain answered by the provider.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One full statement is annotated in your own words, with every figure on it explained."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open the most recent statement for your largest card"
                - "Label each box and line in your own words"
                - "Find each balance type and the rate charged on it"
                - "Ask the provider to explain any figure you cannot account for"
            - name: How card interest and the grace period work
              description: |-
                ## Purpose
                Interest on cards is usually calculated on the daily balance and charged monthly, and most cards only give an interest-free period on purchases when the previous statement was paid in full. Understanding this, along with the residual interest that can appear after you clear a card, explains statements that otherwise look wrong and shows why paying earlier in the month helps.

                ## Milestones
                1. Daily balance interest explained in a worked example from your own card.
                2. The condition for keeping the interest-free period written down.
                3. Residual interest understood and checked against your card's terms.
                4. A note of how much one early payment in the month saves.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example of one month's interest on your own card is written up, with the interest-free and residual interest rules noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the interest calculation section of one card agreement"
                - "Work through one month's interest from your statement by hand"
                - "Find out whether your card charges residual interest after payoff"
                - "Write a three-line summary of when interest is charged"
            - name: Payment allocation across balance types
              description: |-
                ## Purpose
                One card can carry purchases, a balance transfer and a cash advance, each at a different rate. The rules on which balance a payment clears first vary by country and provider, and on some cards the cheap 0% balance is cleared before the expensive one. Knowing each card's allocation order tells you whether a mixed-balance card is costing you more than it seems.

                ## Milestones
                1. The payment allocation section of each card agreement found and read.
                2. Each card's balance types listed with their rates.
                3. The order payments are applied confirmed with the provider.
                4. A decision recorded on whether to keep spending on any mixed-balance card.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The payment allocation order for every card with more than one balance type is written down and confirmed by the provider."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the payment allocation clause in each card agreement"
                - "List the balance types on each card with their rates"
                - "Ask the provider to confirm the order payments are applied"
                - "Note whether new spending on a 0% transfer card would be charged interest"
            - name: Cash advance, fee and foreign spending traps
              description: |-
                ## Purpose
                Withdrawing cash, buying foreign currency or paying some gambling and money transfer merchants on a credit card usually counts as a cash advance, with a fee, a higher rate and no interest-free period. Late fees, over-limit fees and foreign transaction charges add more. Knowing which transactions trigger which charges on your cards means you avoid them instead of finding them on the statement.

                ## Milestones
                1. The transactions your cards treat as cash advances listed.
                2. Every fee on each card recorded with its amount.
                3. Any fee charged in the last year found on the statements.
                4. A one-line rule for each card on what it must never be used for.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of cash advance triggers and fees for each card is saved, with a never-use rule written beside each card."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the fees section of each card's terms summary"
                - "List which transaction types count as a cash advance"
                - "Search the last year of statements for fees charged"
                - "Write a never-use rule for each card in your inventory"
            - name: Balance transfer fee against interest saved
              description: |-
                ## Purpose
                Balance transfers are rarely free: most charge a fee of a few percent of the amount moved, and the saving only holds if the balance is cleared, or moved again, before the promotion ends. Working through your own numbers, the fee, the months at 0%, the payment needed to clear in time and the rate afterwards, tells you whether a transfer helps or only delays.

                ## Milestones
                1. The transfer fee calculated for the balance you would move.
                2. Interest on the current card over the same months estimated.
                3. The monthly payment needed to clear the transferred balance before the promotion ends.
                4. A short verdict written: transfer, or stay and pay.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A written comparison of transfer fee against interest saved, with the monthly payment needed to clear in time, ends in a one-line verdict."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Calculate the fee on the balance you might transfer"
                - "Estimate the interest the current card would charge over the same period"
                - "Divide the balance plus fee by the months of 0% on offer"
                - "Compare that monthly figure with your fixed card payment"
            - name: Persistent debt notices from your card provider
              description: |-
                ## Purpose
                In several countries card providers must step in when you have paid more in interest and fees than off the balance over a long stretch, often around eighteen months. The letters that follow can offer a faster repayment plan and, if nothing changes, may lead to the card being suspended. Understanding what these notices ask of you lets you reply on time and on your own terms.

                ## Milestones
                1. Any persistent debt or long-term balance notice found and read.
                2. The options offered listed with their reply deadlines.
                3. Your chosen response sent before the deadline.
                4. A note kept of what was agreed and when it starts.

                ## Notes
                If a notice proposes a faster repayment you cannot afford, speak to a free debt advice service before replying.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every persistent debt notice received has a recorded response, sent before its deadline, with the provider's confirmation filed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your email and post for notices about long-term card balances"
                - "List each option offered and its reply deadline"
                - "Choose a response and send it before the deadline"
                - "File the provider's confirmation with your card records"
            - name: Asking each provider for a lower interest rate
              description: |-
                ## Purpose
                Customers with a record of on-time payments who call and ask can sometimes get a lower rate, a fee refund or a short promotional offer. A ten-minute call to each provider, with your account history and a competing offer to hand, costs nothing and occasionally saves a great deal over the life of the plan.

                ## Milestones
                1. Your payment history and current rate ready for each card.
                2. A competing balance transfer or rate offer noted to mention.
                3. A call made to every provider asking for a lower rate.
                4. Each outcome recorded, refusals included.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every provider has been asked for a lower rate, with the answer and any new rate recorded in the inventory."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note your current rate and months of on-time payments for each card"
                - "Ask the agent to draft a short phone script for requesting a lower rate"
                - "Call each provider and ask for a reduced rate"
                - "Record each answer and any new rate in your inventory"
            - name: Balance transfer card comparison
              description: |-
                ## Purpose
                Picking a balance transfer card means weighing the length of the 0% period, the transfer fee, the rate afterwards and the credit limit you are likely to be offered. Comparing three offers side by side, and using eligibility checkers that leave no hard search on your file, lets you apply once for the card most likely to accept you.

                ## Milestones
                1. Three balance transfer offers shortlisted with period, fee and revert rate.
                2. Eligibility checked with soft-search tools before any application.
                3. One card chosen with the reason recorded.
                4. A single application made, or a decision recorded not to apply.

                ## Notes
                Start from the **Purchase decision** template. Several applications in quick succession can lower your chances with each, so one considered application is better than three hopeful ones.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of three balance transfer offers is saved, ending in one recorded decision to apply or not."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three balance transfer cards with their period, fee and revert rate"
                - "Run each through a soft-search eligibility checker"
                - "Pick one card and write down why"
                - "Apply for the chosen card or record the decision to wait"
            - name: Balance transfer move and clear-by plan
              description: |-
                ## Purpose
                Once a transfer card is approved, the details decide whether it works: requesting the transfer within the window that qualifies for the offer, keeping the old card's direct debit running until the money lands, and setting a payment that clears the balance before the 0% ends. Getting these right turns a promotion into real savings.

                ## Milestones
                1. The transfer requested within the offer's qualifying window.
                2. The old card's minimum still paid until the transfer is confirmed.
                3. A direct debit on the new card set to clear the balance before the promotion ends.
                4. The old card's balance confirmed at zero, with any trailing interest paid.

                ## Notes
                Avoid spending on the new card until you know how its payments are allocated. New purchases may be charged interest while your payments clear the 0% balance first.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The transferred balance shows on the new card, the old card reads zero and a payment that clears before the promotion ends is in place."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Request the balance transfer within the offer's qualifying window"
                - "Keep the old card's direct debit running until the transfer shows"
                - "Set a payment on the new card that clears it before the 0% ends"
                - "Check the old card for trailing interest after the transfer"
            - name: Requesting refunds of late fees and charges
              description: |-
                ## Purpose
                Late fees, over-limit charges and interest triggered by a single missed payment are sometimes refunded on request, especially for a first slip or where the fee looks out of proportion. Gathering the charges from the past year and asking politely, in writing if the phone call fails, can put money straight back on the balance.

                ## Milestones
                1. Every fee charged in the last twelve months listed by card.
                2. A refund requested for each one by phone or secure message.
                3. A written complaint sent for any refusal you believe is unfair.
                4. Every refund credited and recorded in the inventory.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A refund has been requested for every fee charged in the last twelve months, with each outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every fee from the last twelve months of statements"
                - "Ask each provider to refund its fees by phone or secure message"
                - "Send a written complaint for any refusal you think is unfair"
                - "Record each refund in your balance log"
            - name: Using spare savings for a lump-sum card payment
              description: |-
                ## Purpose
                Savings earning a few percent while a card charges over twenty is a gap worth looking at, but emptying every account leaves you one emergency away from the cards again. Deciding how much savings above your starter buffer, if any, could go to the target card is a one-off choice that can cut months off the plan.

                ## Milestones
                1. Every savings balance listed with its rate and any notice period.
                2. The starter buffer and money promised to other goals set aside.
                3. A lump sum agreed, or a recorded decision to keep the savings.
                4. Any lump sum paid to the target card.

                ## Notes
                Check notice periods and withdrawal penalties first. If a partner shares the savings, this is a joint decision.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision states how much savings, if any, goes to the cards, with the reasoning and any payment confirmed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List each savings account with its balance and interest rate"
                - "Set aside the starter buffer and money promised to other goals"
                - "Decide on a lump sum, or to keep the savings, and write down why"
                - "Pay any agreed lump sum to the target card"
            - name: Rewards card check while carrying a balance
              description: |-
                ## Purpose
                Cashback and points rarely add up to more than one or two percent of spending, while interest on a carried balance is often ten times that. Comparing what your rewards cards actually earned last year with the interest they charged shows whether the rewards are paying you or costing you.

                ## Milestones
                1. Rewards earned on each card over the last year totalled.
                2. Interest and fees on the same cards over the same year totalled.
                3. A decision recorded on whether to keep using any rewards card.
                4. Points redeemed as a payment against the balance where the scheme allows.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Rewards earned and interest charged over twelve months are totalled side by side for each card, with a keep or stop decision recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Total the rewards earned on each card over twelve months"
                - "Total the interest and fees charged on the same cards"
                - "Redeem any points as a statement credit against the balance"
                - "Recount rewards earned against interest paid @recurring(yearly)"
            - name: Redirecting three spending cuts to the cards
              description: |-
                ## Purpose
                General belt-tightening rarely reaches the cards, because the savings blend back into the current account. Picking three specific cuts, such as a weekly takeaway, an unused gym membership or a pricier phone plan, and sending exactly what they save to the target card each month makes the saving visible and lasting.

                ## Milestones
                1. Three specific cuts chosen with their monthly saving.
                2. Each cut made, cancelled or switched.
                3. The combined saving added to the fixed card payment.
                4. All three cuts still holding after three months.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three named cuts are in place and their combined monthly saving has been added to the fixed card payment for three months."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick three specific costs to cut and note what each saves"
                - "Make each cut, cancellation or switch this month"
                - "Add the combined saving to your fixed card payment"
                - "Check the three cuts are still holding @recurring(quarterly)"
            - name: Choosing one card to keep for planned use
              description: |-
                ## Purpose
                Some costs, like car hire, hotel deposits and larger online purchases where purchase protection matters, are easier with a credit card. Choosing one card with no annual fee and a modest limit for these planned uses only, paid in full each month, lets the others stay locked away without leaving you stuck.

                ## Milestones
                1. The situations where you genuinely needed a credit card listed.
                2. One card chosen for those uses, ideally with no annual fee.
                3. A full-balance direct debit set on that card.
                4. Every other card locked or put away.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One named card is set aside for planned use with a full-balance direct debit, and every other card is locked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the times in the past year when only a credit card would do"
                - "Choose the one card to keep for those situations"
                - "Set that card's direct debit to pay the full statement balance"
                - "Lock every other card in its provider's app"
            - name: Closing or keeping paid-off cards
              description: |-
                ## Purpose
                Closing a card at zero removes temptation, but it can also reduce your total available credit and shorten your credit history. Deciding card by card, based on annual fees, how tempting the card is and whether a mortgage or similar application is coming soon, avoids a rushed choice either way.

                ## Milestones
                1. Each cleared card listed with its fee, limit and age.
                2. A keep, close or lower-limit decision recorded for each.
                3. Each closure confirmed in writing with a zero balance.
                4. Limits reduced on any kept card you found hard to leave alone.

                ## Notes
                If a mortgage or other large application is due within the year, ask a broker or adviser before closing several cards at once.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every cleared card has a recorded keep, close or lower-limit decision, with closures confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List each cleared card with its annual fee, limit and age"
                - "Decide to keep, close or lower the limit on each card"
                - "Ask for written confirmation of every closure at zero balance"
                - "Lower the limit on any kept card you found hard to leave alone"
            - name: Promotional rate ending in ninety days
              description: |-
                ## Purpose
                Three months before a 0% period ends is the last comfortable moment to act. With the remaining balance and the revert rate in front of you, you can clear it with a larger payment, move it to a new offer, or accept the new rate knowingly, instead of finding out from the next statement.

                ## Milestones
                1. The remaining promotional balance and revert rate confirmed.
                2. The monthly payment needed to clear it in time calculated.
                3. A choice made: clear, transfer again or accept the new rate.
                4. The chosen step completed before the end date.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A recorded choice for the promotional balance is carried out at least two weeks before the promotion ends."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the promotional balance and the rate it reverts to"
                - "Calculate the payment needed to clear it before the end date"
                - "Choose to clear, transfer again or accept the new rate"
                - "Complete the chosen step at least two weeks before the end date"
            - name: Responding to an interest rate rise notice
              description: |-
                ## Purpose
                When a card provider announces a higher rate, many countries give you the right to reject the change, close the card and repay the existing balance at the old rate. The window to do so is usually short, often around sixty days, so knowing the steps in advance turns a rate rise into a decision rather than a shock.

                ## Milestones
                1. The notice read and the effective date of the rise written down.
                2. Your right to reject the change, and its deadline, confirmed.
                3. A decision recorded to accept, reject or move the balance.
                4. The provider's written confirmation of your choice filed.

                ## Notes
                Rights differ by country and card agreement, so check the notice itself and your financial regulator's guidance.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A decision on the rate rise is sent to the provider before the rejection deadline, with written confirmation filed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the new rate and the date it takes effect"
                - "Check the notice for your right to reject and its deadline"
                - "Decide whether to accept, reject and close, or move the balance"
                - "File the provider's written confirmation of your choice"
            - name: First card paid to zero
              description: |-
                ## Purpose
                Clearing the first card is the moment the plan proves it works, and it deserves marking. It is also the moment to check the job is really finished: residual interest can leave a small balance the following month, and the card needs a decided future before it tempts you again.

                ## Milestones
                1. A statement showing a zero balance on the first card.
                2. The following month's statement checked for residual interest.
                3. The card's next role decided: kept for planned use, locked or closed.
                4. A small, budgeted celebration that does not go on a card.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first card shows a zero balance on two consecutive statements and its future role is recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Make the final payment and screenshot the zero balance"
                - "Check the next statement for residual interest"
                - "Decide whether the cleared card is kept, locked or closed"
                - "Plan a small celebration paid for in cash or by debit card"
            - name: Twelve-month payoff anniversary review
              description: |-
                ## Purpose
                Twelve months in, there is enough history to see what worked: how much debt has gone, how much interest was paid, how many slips happened and why. A proper review at the one-year mark sets the plan for year two and is a good moment to share progress with anyone who has been helping.

                ## Milestones
                1. Total debt cleared in the year calculated.
                2. Interest paid in the year totalled from the tracker.
                3. The three biggest helps and slips written down.
                4. The plan for year two updated with a new debt-free date.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-page review records debt cleared, interest paid and lessons from the year, with an updated debt-free date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare today's total balance with the figure from twelve months ago"
                - "Total the year's interest from your interest tracker"
                - "Write down three things that helped and three that slipped"
                - "Update the payoff plan for the year ahead"
            - name: Debt-free day and final statement check
              description: |-
                ## Purpose
                The last payment is rarely the last step. Residual interest, a forgotten annual fee or a small final charge can leave a balance after you think you are done, and the money that went to the cards needs a new job straight away. Checking two clean statements on every card and redirecting the payment into savings closes the plan properly.

                ## Milestones
                1. Two consecutive statements showing zero on every card.
                2. Any trailing interest or fee paid off.
                3. The former card payment redirected to a named savings goal.
                4. The actual debt-free date recorded beside the original projection.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every card shows a zero balance on two consecutive statements and the old card payment is going into a named savings goal."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Make the final payment on the last card"
                - "Check two consecutive statements show zero on every card"
                - "Redirect the old card payment into a named savings goal"
                - "Write the actual debt-free date beside the original projection"
            - name: Shared card payoff plan for couples
              description: |-
                ## Purpose
                Couples often carry cards in each name, built up before or during the relationship, and friction starts when one person is paying harder than the other. Agreeing whose cards are shared priorities, how much each person contributes and how progress is tracked turns two separate worries into one plan with one date.

                ## Milestones
                1. Both partners' cards in one shared inventory.
                2. An agreement on whether all cards are paid as one plan or separately.
                3. Each person's monthly contribution agreed, in proportion to income or by another rule you both think fair.
                4. A monthly payoff check-in held together.

                ## Notes
                Each card remains the legal responsibility of its named holder, whatever you agree between yourselves.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written agreement covers both partners' cards and contributions, and three monthly check-ins have been held together."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Put both partners' card lists into one inventory"
                - "Agree whether to pay off all cards together or separately"
                - "Write down each person's agreed monthly contribution"
                - "Hold a twenty-minute card payoff check-in together @recurring(monthly:12)"
            - name: Owning up to hidden card debt
              description: |-
                ## Purpose
                Card balances kept secret from a partner tend to grow, because hiding them makes asking for help impossible. Preparing the facts, meaning the total, how it built up and the plan you already have, and choosing a calm moment to share them, gives the conversation the best chance of ending in support rather than a row.

                ## Milestones
                1. The full inventory and a draft payoff plan ready to show.
                2. A short, honest account of how the debt built up written down.
                3. A calm time chosen and the conversation held.
                4. An agreed next step, even if it is only another conversation.

                ## Notes
                If you fear for your safety in how a partner may react, speak to a domestic abuse or debt advice service first. Controlling a partner's money is a recognised form of abuse.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "The full card position has been shared with your partner and an agreed next step is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Print the inventory and your draft payoff plan"
                - "Write three sentences on how the balances built up"
                - "Choose a calm time with nothing scheduled straight after"
                - "Note the next step agreed at the end of the conversation"
            - name: Card payoff on irregular or freelance income
              description: |-
                ## Purpose
                Freelancers, commission earners and seasonal workers cannot count on a fixed extra payment every month. Keeping the minimums on direct debit from a buffer, then sending an agreed percentage of every paid invoice to the target card, keeps the plan moving in good months without breaking it in lean ones.

                ## Milestones
                1. Minimums covered by direct debit from a buffer that can absorb a slow month.
                2. A fixed percentage of each payment received agreed for the cards.
                3. Tax set aside before the card share is worked out.
                4. Six months of invoice-based card payments recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of card payments are recorded, each matching the agreed percentage of income received that month."
                cadence: rolling
              tasks:
                - "Move enough into a buffer account to cover two months of minimums"
                - "Agree the percentage of each paid invoice that goes to the cards"
                - "Set aside tax on each payment before taking the card share"
                - "Send the card share of the month's paid invoices @recurring(monthly:5)"
            - name: Clearing the card left over from student years
              description: |-
                ## Purpose
                Many graduates start work with a card balance from student days, often small but on a high rate, alongside a new salary and new costs. Clearing it within the first year of work, before everyday spending grows to match the pay rise, is far easier than tackling it ten years later.

                ## Milestones
                1. The student-era card's balance, rate and minimum confirmed.
                2. A clear-by date set within the first year of work.
                3. A monthly payment from each payslip set by standing order.
                4. The card cleared and its future decided.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The card from student years reaches a zero balance by the clear-by date set at the start of the first job."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up the balance, rate and minimum on the card from student days"
                - "Set a clear-by date within your first twelve months of work"
                - "Set a standing order for the payoff the day after payday"
                - "Choose whether to keep, lock or close the card once it is clear"
            - name: Card debt on a fixed retirement income
              description: |-
                ## Purpose
                On a pension, income rarely rises, so card debt that was manageable at work can become a long drain. Matching payments to the dates pension money arrives, checking for benefits or credits you may be missing, and deciding whether savings should clear the balance helps the income stretch further.

                ## Milestones
                1. Pension payment dates and amounts listed beside card due dates.
                2. Card due dates moved to fall just after the main pension payment.
                3. A benefits or pension credit check completed.
                4. A payoff amount set that still covers food and heating through winter.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Card due dates follow the main pension payment, a benefits check is complete and a winter-proof payoff amount is recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List each pension payment date and amount"
                - "Ask card providers to align due dates with your main pension payment"
                - "Run a free benefits check through an online calculator or advice service"
                - "Set a payoff amount that still covers food and heating in winter"
            - name: Paying down cards while raising a family
              description: |-
                ## Purpose
                School uniforms, birthdays, holidays and clubs make family spending lumpy, and those lumps are what usually end up on the cards. Listing the known costs of the year ahead and putting a small amount aside each month for them stops family life from undoing the payoff plan every September and December.

                ## Milestones
                1. A list of the year's known child-related costs with rough amounts and months.
                2. A monthly amount set aside for them in a separate pot.
                3. The fixed card payment checked against the family budget with the new pot.
                4. One full school year passed with no child-related cost on a card.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A full school year passes with every known child-related cost paid from the separate pot rather than a card."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List the year's known child costs and the months they fall in"
                - "Divide the total by twelve and set a monthly transfer to a separate pot"
                - "Check the fixed card payment still fits alongside the new pot"
                - "Agree with older children which treats come from their own money"
            - name: Helping a family member with card debt
              description: |-
                ## Purpose
                When a parent, sibling or adult child admits they are struggling with card debt, the instinct is often to pay it off for them, which can strain your own finances and leave the habit untouched. Helping them build an inventory, set direct debits and reach free debt advice is usually more useful, and any money you do give works better on clear terms.

                ## Milestones
                1. Their full card inventory built together.
                2. Minimum payments on direct debit for every one of their cards.
                3. A free debt advice contact passed on, or an appointment booked.
                4. Any money given or lent agreed in writing with clear terms.

                ## Notes
                Lending to family is a separate decision from helping them plan. Only give or lend what you could afford never to see again.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your family member has a card inventory, direct debits on every card and a debt advice contact, with any loan agreed in writing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Offer to sit with them for an hour to list their cards"
                - "Help them set minimum payment direct debits on each card"
                - "Share the details of a free independent debt advice service"
                - "Put any money lent or given into a short written agreement"
                - "Check in on how their plan is going @recurring(monthly:15)"
            - name: Payoff spreadsheet with what-if scenarios
              description: |-
                ## Purpose
                With the basics running on their own, a spreadsheet that models each card month by month lets you test changes before making them: an extra sum each month, a transfer with a three percent fee, a promotion ending, a pay rise. Watching the debt-free date move in each scenario makes trade-offs concrete instead of guessed.

                ## Milestones
                1. A sheet modelling each card's balance, rate, payment and interest by month.
                2. Scenarios built for a higher payment, a balance transfer and a rate rise.
                3. The model's interest figures checked against a real statement.
                4. Actual balances entered each month alongside the projection.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working payoff model with three saved scenarios matches a real statement's interest to within a small margin."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to outline a month-by-month payoff spreadsheet layout"
                - "Build the sheet with a row per month and columns per card"
                - "Add scenarios for an extra payment, a transfer and a rate rise"
                - "Enter actual balances beside the projection @recurring(monthly:20)"
            - name: Balance transfer chaining with a firm exit plan
              description: |-
                ## Purpose
                Moving a balance from one 0% card to another as each promotion ends can hold interest near zero for years, but every move costs a fee, depends on being accepted for a new card and can fail just when you need it. Treating each transfer as a stage with a set amount to clear, and a fallback if no new card is offered, keeps the strategy from becoming a trap.

                ## Milestones
                1. Total fees paid across all transfers so far added up.
                2. A target set for how much of the balance to clear in each 0% period.
                3. A fallback plan written for if the next transfer is declined.
                4. The balance falling, not just moving, at each transfer.

                ## Notes
                If the same balance is being transferred for the third time with little reduction, revisit the warning signs project before applying again.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each transfer in the chain is logged with its fee and the balance cleared during it, and a written fallback plan exists."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add up every transfer fee paid on the current balance"
                - "Set a target for how much to clear during this 0% period"
                - "Write a fallback plan for if the next transfer is declined"
                - "Compare the balance at each transfer with the one before"
            - name: Pay-in-full card system after payoff
              description: |-
                ## Purpose
                After the last balance clears, the safest way to keep using a credit card is to treat it like a debit card with a month's delay: every statement paid in full by direct debit, spending only money already in the budget. Setting that system up deliberately, with alerts and a monthly check, is what stops the debt coming back.

                ## Milestones
                1. Every card you keep set to pay the full statement balance automatically.
                2. Spending alerts set below your monthly budget for card spending.
                3. Card spending compared with the budget each month.
                4. Twelve consecutive statements paid in full with no interest charged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive statements on every kept card are paid in full, with no interest charged on any of them."
                cadence: rolling
              tasks:
                - "Switch every kept card to collect the full balance automatically"
                - "Set a spending alert on each card below its monthly budget"
                - "Check last month's statement was paid in full with no interest @recurring(monthly:14)"
                - "Cut any credit limit that sits far above what you actually spend"
---

# Credit Card Debt Payoff

This area is for anyone carrying a credit card balance they want gone, from one card left over from student days to several cards and store accounts built up over years. It starts with the foundations (a full inventory, minimum payments on direct debit, a firm stop on new spending, a fixed monthly payment and a chosen payoff order), then the monthly routines that keep the plan moving, the knowledge that makes statements and interest make sense, the decisions about balance transfers, rate requests and savings, the milestones from the first cleared card to debt-free day, versions for couples, freelancers, retirees and families, and finally the transfer chains, models and pay-in-full system of someone who has done this before.

What repeats is a monthly balance check-in, a payday overpayment and an interest record, a Sunday check that nothing new has gone on the cards, a quarterly plan refresh with a look at every promotional end date, and a yearly read of each card's terms. The Monthly budget and bills, Metrics log, Habit tracker and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
