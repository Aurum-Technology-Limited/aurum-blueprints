---
id: personal-finance.cash-envelope-spending
name: Cash Envelope Spending
description: "Envelopes for groceries, fun money and other variable spending, filled each payday in cash or digital pots, with the rules, counts and reviews that stop overspending before it starts."
category: personal
version: 1.0.0
tags: [personal-finance, cash-envelope-spending, everyone, envelope-budgeting, cash-budget, variable-spending, groceries, fun-money]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - weekly-meal-plan
    - habit-tracker
    - reading-queue
    - purchase-decision
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cash Envelope Spending
          description: "Using physical or digital cash envelopes for groceries, fun money and other variable categories to stop overspending."
          projects:
            - name: Envelope categories chosen from your variable spending
              description: |-
                ## Purpose
                Envelopes work best on the categories that swing from month to month, such as groceries, eating out, fuel, personal spending and household odds and ends, and worst on fixed bills that leave by direct debit anyway. Picking four to seven categories at the start keeps the system small enough to run every week and aims it at the places money actually leaks.

                ## Milestones
                1. A list of every variable category found in the last three months of statements.
                2. Fixed bills and direct debits marked as staying outside the envelopes.
                3. Four to seven envelope categories chosen and named.
                4. Groceries and personal fun money included, or a written reason for leaving them out.

                ## Notes
                Starting with too many envelopes is the most common reason people give up in month two. You can add a category later; taking one away feels like failure even when it is the right call.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of four to seven named envelope categories exists, with fixed bills explicitly excluded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the last three months of current account and card statements"
                - "Highlight every payment that changes in size from month to month"
                - "Group the highlighted payments into no more than seven categories"
                - "Write the final envelope list on one page and keep it with the envelopes"
            - name: Three-month baseline for each envelope category
              description: |-
                ## Purpose
                Setting an envelope at the amount you wish you spent, rather than what you really spend, guarantees an empty envelope by the second week. Adding up three months of actual spending in each chosen category gives an honest starting figure that you can trim later, once the system is running and you trust it.

                ## Milestones
                1. Three months of spending totalled for each envelope category.
                2. A monthly average worked out per category.
                3. One-off spikes, such as a birthday meal, marked so they do not inflate the average.
                4. Baseline figures written beside the envelope list.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each envelope category has a three-month monthly average written beside it, with one-off spikes noted separately."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Total each category's spending for the most recent full month"
                - "Repeat the totals for the two months before it"
                - "Mark any one-off spike and note what caused it"
                - "Work out a monthly average for each category"
            - name: Physical, digital or hybrid envelope decision
              description: |-
                ## Purpose
                Paper envelopes make spending visible in a way no app can, but they mean carrying cash and finding shops that take it. Digital envelopes inside a banking app keep the same limits with card convenience, and many households settle on a hybrid: cash for groceries and fun money, digital pots for fuel and online spending. Deciding the format for each category before you start avoids running two half-systems.

                ## Milestones
                1. Each envelope category marked as suited to cash, digital or either.
                2. The cash categories checked against where you actually shop and whether those places take cash.
                3. A format chosen for every category and written on the envelope list.
                4. A date set to review the choice after three months.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every envelope category has a recorded format, cash or digital, with a review date three months out."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the shops, cafes and sites where each category is usually spent"
                - "Note which of those places still accept cash"
                - "Check whether your bank offers spending pots or separate spaces"
                - "Write cash or digital beside each envelope category"
            - name: First envelope amounts for each pay period
              description: |-
                ## Purpose
                Turning monthly averages into an amount per pay period is where the plan becomes real money. Starting at the baseline, or no more than ten percent under it, and checking that the total fits what is left after bills and savings, gives envelopes you can actually live within for the first month.

                ## Milestones
                1. Each category's baseline converted to the period you fill envelopes in.
                2. The envelope total checked against income left after fixed bills and savings.
                3. Any shortfall closed by trimming the most flexible category first.
                4. Final amounts, in whole notes for cash envelopes, written on the envelope list.

                ## Notes
                Round cash amounts to notes you can withdraw easily. Odd figures lead to coins nobody wants to carry and envelopes that never quite balance.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every envelope has a fixed fill amount per pay period, and the total fits within income after bills and savings."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether envelopes are filled weekly, fortnightly or monthly"
                - "Convert each category's average into that period"
                - "Subtract fixed bills and savings from income to find the ceiling"
                - "Round each cash envelope amount to whole notes"
            - name: Labelled envelope wallet and home cash box
              description: |-
                ## Purpose
                Loose envelopes in a kitchen drawer get mixed up, raided and lost. A labelled set, a small wallet or folder for the ones that leave the house, and a lockable box for the rest keep the cash separated and out of sight, and checking your contents insurance tells you how much cash at home is actually covered.

                ## Milestones
                1. One envelope per category, labelled with its name and fill amount.
                2. A zipped wallet or divider folder for the envelopes that travel.
                3. A lockable box or drawer for the envelopes that stay home.
                4. The cash limit in your home contents policy found and written inside the box lid.

                ## Notes
                Many contents policies cover only a small sum of cash at home. Keep the home stock below that limit and withdraw more often instead.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Labelled envelopes, a travel wallet and a lockable home box are in use, with the insurance cash limit recorded inside the box."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy or make sturdy envelopes or a divider wallet"
                - "Label each envelope with its category and fill amount"
                - "Choose a lockable box or drawer for the envelopes that stay home"
                - "Look up the cash-at-home limit in your contents insurance"
            - name: Fee-free cash withdrawal plan
              description: |-
                ## Purpose
                Free cash machines are closing in many towns, and some charge a fee per withdrawal that quietly eats a small envelope. Finding two reliable fee-free sources, such as a bank counter, a free machine near work or cashback at the supermarket till, and fixing one withdrawal per pay period keeps filling the envelopes cheap and quick.

                ## Milestones
                1. Two fee-free places to withdraw cash identified near home or work.
                2. Your card's daily withdrawal limit checked against the total cash envelope amount.
                3. One withdrawal day per pay period fixed in the calendar.
                4. The note mix you need, such as smaller notes for weekly envelopes, written down.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two fee-free withdrawal options and a fixed withdrawal day are recorded, and the card limit covers the full cash envelope total."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the free cash machines and bank counters within walking distance"
                - "Check whether your supermarket offers cashback at the till"
                - "Confirm your card's daily cash withdrawal limit"
                - "Write the note mix each envelope needs on the envelope list"
            - name: Digital envelope pots in your banking app
              description: |-
                ## Purpose
                For categories paid by card or online, digital envelopes do the same job as paper ones: a fixed amount moved aside each pay period and nothing more once it is gone. Setting up named pots, spaces or sub-accounts for those categories, and paying only from them, keeps the limits visible on your phone.

                ## Milestones
                1. A named pot or sub-account created for each digital envelope category.
                2. Fill amounts moved into each pot for the first pay period.
                3. The card or payment method linked to each pot confirmed.
                4. The main account balance checked to confirm envelope money is no longer mixed in.

                ## Notes
                Check that moving money between pots is instant and free. Some banks limit the number of pots or charge for extra accounts.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each digital envelope category has its own named pot holding its first fill, with the payment method for each pot confirmed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open the spending pots or spaces feature in your banking app"
                - "Create one pot per digital envelope category with the same name"
                - "Move the first pay period's amounts into each pot"
                - "Test a small payment from one pot to confirm it works"
            - name: Card rules for envelope categories
              description: |-
                ## Purpose
                The commonest way envelope systems fail is a card quietly paying for something the envelope was meant to cover. Writing simple rules, such as no card in the supermarket and fun money only from its envelope, and physically leaving a card at home on envelope days, closes the gap before it opens.

                ## Milestones
                1. A written rule for each envelope category on how it may be paid.
                2. Saved cards removed from the shopping and takeaway apps that cover envelope categories.
                3. One card agreed as an emergency-only backup and kept separately.
                4. A first month with no envelope category paid by card outside the rules.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written payment rules exist for every envelope category, saved cards are removed from envelope-category apps, and one month passes with no rule broken."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write one payment rule per envelope category"
                - "Remove saved cards from food delivery and shopping apps"
                - "Choose one backup card for real emergencies only"
                - "Note any time a card paid for an envelope category and why"
            - name: Envelope ledger for every category
              description: |-
                ## Purpose
                Without a record, an envelope tells you only what is left, not where it went. A one-line ledger entry for each spend, kept on the back of the envelope or in a shared note, shows by the end of the month which shops and habits drained it, and makes the monthly review a ten-minute job.

                ## Milestones
                1. A ledger with columns for date, place, amount and balance for each envelope.
                2. Opening balances entered for the first pay period.
                3. Every spend from every envelope recorded for one full month.
                4. The month's ledger balances matched to the cash or pot totals left.

                ## Notes
                Start from the **Metrics log** template. Writing on the envelope itself works well for cash; a shared note suits digital pots.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ledger holds one full month of dated entries for every envelope, and its closing balances match the cash or pot totals."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a ledger from the metrics log template with one section per envelope"
                - "Enter each envelope's opening balance"
                - "Fill in one full month of entries for every envelope"
                - "Check the ledger balances against the cash left at month end"
            - name: Household briefing on how the envelopes work
              description: |-
                ## Purpose
                Envelopes break quickly if one adult still pays for groceries by card or a teenager borrows from the fun money. A twenty-minute household talk, covering which envelopes exist, who holds each one and what happens when one runs out, gets everyone using the same rules from the first fill.

                ## Milestones
                1. Every adult and older child told which envelopes exist and what they cover.
                2. A named holder agreed for each envelope.
                3. The rule for an empty envelope agreed and written down.
                4. A one-page summary pinned where the envelopes are kept.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page summary naming each envelope, its holder and the empty-envelope rule is pinned up after a household conversation."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Set a twenty-minute slot when the household is together"
                - "Explain each envelope and what it pays for"
                - "Agree who holds each envelope"
                - "Pin a one-page summary beside the envelope box"
            - name: Payday envelope fill routine
              description: |-
                ## Purpose
                Filling every envelope on the same day each pay period, before any other spending happens, is what turns a plan into a system. A fixed twenty-minute routine of withdraw, count, fill and log means no week starts with the question of how much is left.

                ## Milestones
                1. A fixed fill day set for the day after pay lands.
                2. A checklist covering withdrawal, counting, filling cash envelopes and moving digital pots.
                3. Each fill logged with the date and amounts.
                4. Six consecutive fills completed on schedule.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive pay periods pass in which every envelope was filled on the fill day and the fill was logged."
                cadence: rolling
              tasks:
                - "Write a five-step fill checklist and keep it in the envelope box"
                - "Withdraw the cash and fill every envelope on fill day @recurring(monthly:26)"
                - "Move the digital envelope amounts into their pots the same day"
                - "Log the date and amount of each fill in the ledger"
            - name: Weekly grocery envelope shop
              description: |-
                ## Purpose
                Groceries are the largest envelope for most households and the easiest to overspend in small steps. One main shop a week, planned from what is already in the cupboards and paid only from the grocery envelope, keeps top-up trips and impulse buys from draining it by Thursday.

                ## Milestones
                1. A fixed weekly shopping day chosen.
                2. A list written from a meal plan before every main shop.
                3. The weekly grocery envelope split into a main shop amount and a small top-up amount.
                4. Eight weeks of shops paid entirely from the envelope.

                ## Notes
                Start from the **Weekly meal plan** template. Planning meals before writing the list is what keeps the top-up trips small.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks of grocery shopping are paid entirely from the grocery envelope, with a list written before each main shop."
                cadence: rolling
              tasks:
                - "Check the cupboards, fridge and freezer before writing the list"
                - "Do the main grocery shop with only the grocery envelope @recurring(weekly:sat)"
                - "Keep the top-up amount in a separate section of the envelope"
                - "Note any week the envelope ran short and what caused it"
            - name: Sunday envelope count
              description: |-
                ## Purpose
                Five minutes on a Sunday counting what is left in each envelope gives an early warning while there is still time to adjust. Knowing on Sunday that the eating-out envelope is down to a third changes Friday's plans; finding out on Friday does not.

                ## Milestones
                1. A weekly count slot set for Sunday evening.
                2. Each envelope's balance noted against where it should be for the week.
                3. Any envelope running ahead of schedule flagged with a plan for the rest of the period.
                4. Eight consecutive Sunday counts completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly counts are recorded, each with every envelope's balance and a plan for any flagged envelope."
                cadence: rolling
              tasks:
                - "Work out where each envelope should stand at the end of each week"
                - "Count every envelope and pot and note the balances @recurring(weekly:sun)"
                - "Write one line on any envelope that is running fast"
            - name: Month-end envelope sweep and roll-over
              description: |-
                ## Purpose
                At the end of each month some envelopes have money left and some are empty. Deciding envelope by envelope whether leftovers roll over, as they should for lumpy categories like clothing, or are swept out, as they usually should for groceries, stops loose cash piling up with no purpose and shows which amounts are set wrong.

                ## Milestones
                1. Each envelope marked as roll-over or sweep.
                2. Leftover cash counted and moved according to that mark every month.
                3. Envelopes that ended empty noted with the date they ran out.
                4. Three months of sweep results recorded side by side.

                ## Notes
                Pay swept cash back into the bank rather than leaving it in a drawer, where it becomes untracked spending money.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly sweeps are completed, each recording leftovers moved and the date any envelope ran out."
                cadence: rolling
              tasks:
                - "Mark each envelope as roll-over or sweep on the envelope list"
                - "Count the leftovers and move them as each envelope's mark says @recurring(monthly:28)"
                - "Record which envelopes ran out and on what date"
                - "Pay swept cash into the bank within the week"
            - name: Nightly receipt and spending note habit
              description: |-
                ## Purpose
                Receipts stuffed in a pocket are gone by the weekend, along with the record of where the money went. Dropping each receipt into its envelope and jotting the amount on the outside before bed takes seconds and keeps the ledger honest without an evening of reconstruction.

                ## Milestones
                1. A receipt pocket or clip on each envelope.
                2. Each day's spends written on the envelope or ledger before bed.
                3. A habit tracker showing the note made on at least 25 days of the month.
                4. Receipts cleared at the monthly sweep and then recycled or filed.

                ## Notes
                Start from the **Habit tracker** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A habit tracker shows spending notes made on at least 25 days a month for two months running."
                cadence: rolling
              tasks:
                - "Attach a clip or pocket for receipts to each envelope"
                - "Write the day's envelope spends on the envelopes before bed @recurring(daily)"
                - "Set up a habit tracker for the nightly note"
                - "Clear out the month's receipts after the sweep"
            - name: Personal fun money envelope
              description: |-
                ## Purpose
                Fun money is the envelope that makes the rest bearable: a fixed amount each adult can spend on anything without explaining it. Without one, small treats come out of the grocery envelope or go on a card, and the system starts to feel like a punishment that people quietly drop.

                ## Milestones
                1. A fun money amount agreed for each adult.
                2. One envelope or pot per person, filled on fill day.
                3. An agreement that nobody else questions how fun money is spent.
                4. Three months in which treats came only from fun money envelopes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each adult has a filled fun money envelope, and three months pass with no treat spending outside it."
                cadence: rolling
              tasks:
                - "Agree a fun money amount for each adult"
                - "Give each person a separate envelope or pot"
                - "Agree out loud that nobody questions what fun money buys"
                - "Write a line on what the fun money bought and whether it was worth it @recurring(monthly:24)"
            - name: Weekly fuel, fares and parking envelope
              description: |-
                ## Purpose
                Fuel, parking, bus fares and train tickets vary week to week and are easy to put on a card without thinking. A weekly travel envelope, cash for parking and fares or a digital pot for fuel, shows the real cost of the week's journeys and when a trip could have been combined or skipped.

                ## Milestones
                1. A weekly travel amount set from the baseline.
                2. Travel spending paid only from the envelope or pot.
                3. Parking coins kept in their own small section.
                4. Eight weeks of travel spending recorded, with the trips behind any high week noted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks of fuel, fares and parking are paid from the travel envelope, with every high week explained."
                cadence: rolling
              tasks:
                - "Set the weekly travel amount from the baseline"
                - "Move the week's travel money into its envelope or pot @recurring(weekly:mon)"
                - "Keep coins for parking in a separate pocket"
                - "Note any week travel ran over and which trip caused it"
            - name: Eating out and takeaway envelope
              description: |-
                ## Purpose
                Takeaways, coffees and meals out are where many households find their biggest surprise once they start counting. A single eating-out envelope, with one decision made at fill time about how many meals it covers, turns a string of small yeses into a planned treat.

                ## Milestones
                1. Every coffee, lunch, takeaway and meal out moved into one envelope.
                2. The number of meals or takeaways the envelope covers decided at each fill.
                3. Delivery apps paid only from this envelope's pot or cash.
                4. Two months in which eating-out spending stayed inside the envelope.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive months pass in which all coffees, takeaways and meals out were paid from the eating-out envelope."
                cadence: rolling
              tasks:
                - "Decide how many meals out or takeaways the envelope covers this period"
                - "Link delivery apps only to the eating-out pot"
                - "Pay for coffee and work lunches from the same envelope"
                - "Move unspent eating-out money to the next period or to savings"
            - name: Monthly envelope amount review
              description: |-
                ## Purpose
                Envelope amounts set in month one are a guess, and life keeps changing them: a new commute, a child's growth spurt, rising food prices. A short monthly review of each envelope against its ledger, changing no more than two amounts at a time, keeps the figures honest without constant tinkering.

                ## Milestones
                1. A monthly review slot fixed a few days after the sweep.
                2. Each envelope's spending compared with its fill amount.
                3. No more than two amounts changed per review, each with a written reason.
                4. Six monthly reviews recorded in the ledger.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly reviews are completed, each listing every envelope's spend against its amount and the reason for any change."
                cadence: rolling
              tasks:
                - "Compare each envelope's month total with its fill amount @recurring(monthly:3)"
                - "Change no more than two envelope amounts per review"
                - "Write the reason for each change in the ledger"
            - name: Quarterly envelope system check
              description: |-
                ## Purpose
                Every three months it is worth stepping back from the amounts and asking whether the system itself still fits: the categories, the cash or digital split, the fill day, who holds what. Catching a slow drift, such as card spending creeping back into groceries, is easier at a quarterly check than after it has broken the plan.

                ## Milestones
                1. Three months of ledgers and sweep records gathered.
                2. Categories, formats, fill day and holders each checked against how the quarter went.
                3. Card statements scanned for envelope spending that slipped onto a card.
                4. Changes for the next quarter written on the envelope list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly check note exists for each of the last four quarters, listing what was checked and what changed."
                cadence: cyclic
              tasks:
                - "Scan card statements for spending that should have come from an envelope"
                - "Check categories, formats, fill day and holders against the quarter @recurring(quarterly)"
                - "Write next quarter's changes on the envelope list"
            - name: Loose change and leftover coin sweep
              description: |-
                ## Purpose
                Paying in cash produces change, and coins left in pockets, cars and jars add up to a real sum that belongs to no envelope. Sweeping loose change into one jar and paying it in once a month gives it a job, such as topping up savings, instead of letting it vanish into vending machines.

                ## Milestones
                1. One change jar set beside the envelope box.
                2. Change emptied from wallets and envelopes into the jar each week.
                3. The jar counted and paid in at a free counter or deposit machine once a month.
                4. Each month's change total recorded in the ledger.

                ## Notes
                Coin-counting machines in some supermarkets keep a percentage. A bank counter or free deposit machine usually costs nothing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of change totals are recorded, each paid in without a counting fee."
                cadence: rolling
              tasks:
                - "Put one change jar beside the envelope box"
                - "Empty wallet change into the jar at the Sunday count"
                - "Count and pay in the jar at a free bank counter @recurring(monthly:20)"
                - "Record the month's change total in the ledger"
            - name: Rules for borrowing between envelopes
              description: |-
                ## Purpose
                Sooner or later an envelope runs dry before the period ends, and how you handle that moment decides whether the system survives. Agreeing in advance which envelopes may lend, how much and how the loan is repaid at the next fill turns a crisis into a routine with a paper trail.

                ## Milestones
                1. A list of envelopes that may lend and those that may never be raided.
                2. A maximum amount for any single borrowing.
                3. A dated note left in the lending envelope for every loan.
                4. Every loan repaid at the next fill, or the borrowing envelope's amount reviewed.

                ## Notes
                A category that borrows three months in a row is not overspending, it is underfunded. Raise its amount at the monthly review instead of borrowing again.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written borrowing rules exist, and every loan in the last two months has a dated note and a repayment at the next fill."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Mark which envelopes can lend and which cannot be touched"
                - "Set a maximum for any single borrowing"
                - "Leave a dated IOU slip in the lending envelope for each loan"
                - "Repay each loan from the next fill before anything else"
            - name: Shopping to a cash limit with a running total
              description: |-
                ## Purpose
                Arriving at the till with a fixed amount of cash and a trolley that costs more is embarrassing once and instructive forever. Keeping a running total on your phone or a scrap of paper as items go in, rounding each price up, means you put things back in the aisle rather than at the checkout.

                ## Milestones
                1. A running-total method chosen, such as a phone calculator or rounding each price up to the next whole unit.
                2. Three shops completed with the total kept as you go.
                3. A small margin, such as five percent, held back for weighed items and price surprises.
                4. A month of shops with nothing put back at the till.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Four consecutive shops are completed within the cash brought, with a running total kept and nothing put back at the till."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick a running-total method you can use with one hand"
                - "Round each price up as it goes into the basket"
                - "Hold back a small margin for weighed items and price changes"
                - "Write down the gap between your running total and the receipt after each shop"
            - name: Weekly portions for five-week months
              description: |-
                ## Purpose
                Monthly envelopes tempt you to spend freely in week one and scrape by in week four, and several months a year contain a fifth weekend. Splitting each monthly envelope into weekly portions, with a reserve for the extra week, smooths spending across the whole month.

                ## Milestones
                1. Each monthly envelope split into four weekly portions plus a fifth-week reserve.
                2. This year's months with five weekends marked in the calendar.
                3. A rule written for how the fifth-week reserve is used.
                4. Two months run on weekly portions without a final-week shortfall.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two consecutive months on weekly portions end without a final-week shortfall in any envelope."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Divide each monthly envelope by four and set the remainder aside"
                - "Mark this year's five-weekend months in the calendar"
                - "Decide what the fifth-week reserve may be spent on"
                - "Use paper clips or dividers to separate the weekly portions"
            - name: Paying with cash in card-first shops
              description: |-
                ## Purpose
                More shops, cafes and car parks now prefer or only take card, which can strand a cash envelope. Knowing which places near you still take cash, where you can pay cash back in for free, and keeping one small digital pot as a backstop for card-only places keeps the cash system practical.

                ## Milestones
                1. The ten places you use most sorted into cash, card-only and either.
                2. A small backstop pot for each cash envelope that meets card-only places.
                3. A free place to pay surplus cash back into the bank identified.
                4. One month with no envelope spending pushed onto the main card.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sorted list of regular places by payment type exists, and every cash envelope that meets card-only places has a backstop pot."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the ten places you spend most and how each one takes payment"
                - "Set up a small backstop pot for card-only places"
                - "Find out where you can pay cash into your account for free"
                - "Move card-only spending from the cash envelope into the backstop pot"
            - name: Grocery price book for the food envelope
              description: |-
                ## Purpose
                Knowing the usual price of the twenty things you buy every week lets you spot a real offer, a price rise or a shop that is quietly dearer, and it makes the grocery envelope go further without eating less. A price book takes one afternoon to start and a few minutes a month to keep current.

                ## Milestones
                1. A list of the twenty items you buy most often.
                2. Unit prices recorded at your two or three usual shops.
                3. The cheapest regular source for each item marked.
                4. Prices refreshed monthly for at least three months.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A price book of twenty staple items with unit prices at two or more shops is refreshed monthly for three months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the twenty items you buy most often"
                - "Record unit prices at your usual shops for each item"
                - "Mark the cheapest regular source for each item"
                - "Refresh ten prices in the price book @recurring(monthly:12)"
            - name: Matching envelope cash to your bank balance
              description: |-
                ## Purpose
                Once money sits in envelopes and pots, the main account balance stops telling the whole story, and double-counting becomes easy. Learning to reconcile envelope cash, pots and the main account against what income and bills say should be there catches lost cash, missed transfers and spending from the wrong place.

                ## Milestones
                1. A simple sum written out: cash in envelopes plus pots plus main account.
                2. The expected total worked out from income received minus bills and transfers.
                3. Any gap traced to a cause, such as a missing receipt or a spend from the wrong place.
                4. Three months of matching totals or explained differences.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three consecutive monthly reconciliations show envelope, pot and account totals matching, or every difference explained."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the reconciliation sum on one page of the ledger"
                - "Add up envelope cash, pot balances and the main account @recurring(monthly:15)"
                - "Trace any gap larger than loose change to its cause"
                - "Note each gap and its cause in the ledger"
            - name: Reading list on envelope budgeting methods
              description: |-
                ## Purpose
                Envelope budgeting has been written about for decades, from the original paper method to app-based versions with rolling targets. Reading two or three sources picked for your situation gives you ideas for categories, rules and troubleshooting that would otherwise take months of trial and error.

                ## Milestones
                1. Three books, articles or guides on envelope budgeting chosen.
                2. Each source read with one usable idea noted.
                3. At least one idea tried in your own system for a month.
                4. The reading list kept for the next person in the household who joins in.

                ## Notes
                Start from the **Reading queue** template. Prefer sources that explain the method over ones selling a particular app.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three sources on envelope budgeting are read, each with one idea noted and at least one tried in your system for a month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose three sources on envelope budgeting from a library or reputable site"
                - "Add them to a reading queue"
                - "Note one idea from each that fits your household"
                - "Try one idea for a full month and record the result"
            - name: Bringing a leaking card category into an envelope
              description: |-
                ## Purpose
                After a month or two, most people find one category still paid by card that keeps surprising them: online shopping, children's extras, hobby supplies. Moving that single category into its own envelope, with a baseline and a fill amount, closes the last big leak without redesigning the whole system.

                ## Milestones
                1. The card category that most often surprised you identified from two months of statements.
                2. A three-month baseline for that category worked out.
                3. A new envelope or pot set up with a fill amount.
                4. Two months of that category paid only from its envelope.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One previously card-paid category has its own envelope, with two months of spending recorded inside it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Scan two months of card statements for the most surprising category"
                - "Total that category for the last three months"
                - "Set up its envelope or pot with a fill amount"
                - "Add the new envelope to the payday fill checklist"
            - name: Ten percent grocery envelope trim trial
              description: |-
                ## Purpose
                Once the grocery envelope has run steadily for two or three months, a small deliberate cut tests how much of it is habit and how much is need. Trimming it by ten percent for two months, and writing down what changed, shows whether the lower amount holds or the old figure was right.

                ## Milestones
                1. Three months of grocery envelope results without a shortfall as the starting point.
                2. The grocery fill amount cut by ten percent for two months.
                3. The swaps that made the cut possible written down.
                4. A decision recorded: keep the lower amount, settle in between, or return to the old one.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A two-month trial at ten percent below the old grocery amount ends with a recorded decision on the new amount."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Confirm three months of grocery envelope results without a shortfall"
                - "Cut the grocery fill amount by ten percent for two months"
                - "Write down each swap that made the lower amount work"
                - "Record whether the new amount stays, moves or reverts"
            - name: Choosing a budgeting app for digital envelopes
              description: |-
                ## Purpose
                If your bank's own pots are too limited, a dedicated envelope budgeting app can handle rolling balances, shared access and category targets. Comparing three apps on cost, bank connection, privacy and partner access before committing saves moving your ledger twice.

                ## Milestones
                1. Three envelope budgeting apps shortlisted.
                2. Each scored on price, bank connection, privacy policy, shared access and data export.
                3. One app trialled for a full month alongside your existing ledger.
                4. A decision recorded to adopt it, try another or stay with what you have.

                ## Notes
                Start from the **Purchase decision** template. Read how each app stores bank login details before connecting an account.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of three apps exists, one has been trialled for a month, and the decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Shortlist three envelope budgeting apps"
                - "Score each on price, bank connection, privacy, shared access and export"
                - "Trial the top app for one month beside your ledger"
                - "Record the decision and cancel any trial you are not keeping"
            - name: Capped miscellaneous envelope for the unplanned
              description: |-
                ## Purpose
                Every month throws up small costs that fit no envelope: a birthday card, a replacement charger, a school non-uniform day. A small capped miscellaneous envelope catches them without raiding the groceries, and the cap stops it turning into a second fun money envelope.

                ## Milestones
                1. A miscellaneous envelope with a fixed cap in use.
                2. A written list of what may and may not come from it.
                3. Every miscellaneous spend logged with a short reason.
                4. After three months, any repeated item moved into its own envelope or the right category.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capped miscellaneous envelope runs for three months with every spend logged and repeated items moved elsewhere."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Set a cap for the miscellaneous envelope"
                - "Write what can and cannot come from it"
                - "Log every miscellaneous spend with a short reason"
                - "Move any item that appears three times into a proper category"
            - name: Splitting groceries from household goods
              description: |-
                ## Purpose
                When cleaning products, toiletries and nappies sit in the grocery envelope, one bulk buy of washing powder makes food look overspent and hides the real food cost. Giving household goods their own envelope, or a marked section, makes both numbers meaningful and the price book easier to use.

                ## Milestones
                1. Non-food items on the last month's grocery receipts totalled.
                2. A household goods envelope or section created with its own amount.
                3. Food and household goods paid separately at the till, or split from the receipt.
                4. Two months of separate totals compared with the old combined figure.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Food and household goods have separate envelope amounts, with two months of separate totals recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Highlight non-food items on last month's grocery receipts"
                - "Set a household goods amount from those totals"
                - "Split the grocery envelope into food and household sections"
                - "Compare two months of separate totals with the old combined figure"
            - name: Three-month verdict on your envelope format
              description: |-
                ## Purpose
                After three months you know whether carrying cash suits your life, whether digital pots feel real enough to stop you, and which categories never worked in either form. A deliberate verdict, recorded with reasons, stops the system drifting into a half-cash, half-card muddle that nobody trusts.

                ## Milestones
                1. Three months of sweep results and ledger notes gathered.
                2. Each envelope rated as working, struggling or abandoned.
                3. A format change, if any, chosen for each struggling envelope.
                4. The verdict and reasons written on the envelope list.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each envelope has a working, struggling or abandoned rating with a recorded format decision, three months after starting."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather three months of sweep results and ledger notes"
                - "Rate each envelope as working, struggling or abandoned"
                - "Ask the agent to summarise the ledger notes for each struggling envelope"
                - "Write the verdict and any format change on the envelope list"
            - name: Merging or retiring envelopes that do not earn their place
              description: |-
                ## Purpose
                Systems tend to grow, with a new envelope for every new worry, until there are twelve and nobody fills them properly. Merging envelopes that always borrow from each other and retiring ones that always end full keeps the set small enough to run every week.

                ## Milestones
                1. Each envelope's last six months of closing balances listed.
                2. Envelopes that constantly lend to each other identified as merge candidates.
                3. Envelopes that nearly always end full identified as retire or shrink candidates.
                4. A slimmer envelope list in use from the next fill.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A revised envelope list with at least one merge, retirement or written reason to keep every envelope is in use from the next fill."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List six months of closing balances for each envelope"
                - "Flag envelopes that keep lending to each other"
                - "Flag envelopes that end full nearly every month"
                - "Relabel the envelopes before the next fill"
            - name: First thirty days on envelopes
              description: |-
                ## Purpose
                The first month is when the most things go wrong: an envelope empties on day ten, someone forgets and uses a card, a shop will not take cash. Treating it as a dated trial with a mid-point check and a review on day thirty turns those problems into adjustments instead of reasons to quit.

                ## Milestones
                1. A start date set on a fill day.
                2. A mid-point check on day fifteen recorded.
                3. Every problem in the month listed with what was done about it.
                4. A day-thirty review held and the changes for month two written down.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A thirty-day trial is completed with a recorded day-fifteen check and a day-thirty review listing changes for month two."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a start date that falls on a fill day"
                - "Put a day-fifteen check and a day-thirty review in the calendar"
                - "List each problem as it happens and what you did about it"
                - "Write the changes for month two at the day-thirty review"
            - name: Holiday spending money in daily envelopes
              description: |-
                ## Purpose
                Holiday money tends to run out in the last three days, or come home untouched in the wrong currency. Splitting the spending budget into one envelope per day, plus a separate envelope for one planned splurge, means each day starts with a clear amount and the last day is as good as the first.

                ## Milestones
                1. A holiday spending total set, separate from travel and accommodation.
                2. The total split into one envelope per day plus a splurge envelope.
                3. Currency or a travel card bought at a fair rate before leaving.
                4. Leftover money counted on the last day and its destination decided.

                ## Notes
                Carry only today's envelope and leave the rest in the room safe. Losing one day's money is an annoyance; losing the whole holiday's is a crisis.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A holiday is completed on daily envelopes, with leftover money counted and allocated within a week of getting home."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set the holiday spending total, excluding travel and accommodation"
                - "Divide it into daily envelopes and one splurge envelope"
                - "Compare exchange rates for cash and a travel card before buying"
                - "Decide where leftover holiday money goes before you travel"
            - name: School holiday days-out envelope
              description: |-
                ## Purpose
                Six weeks of school holidays can drain a household through entrance fees, snacks and petrol long before anyone notices. A days-out envelope for the holiday, divided by week and mixed with free days, lets children help choose how it is spent and keeps the last week funded.

                ## Milestones
                1. A days-out total for the holiday set and split by week.
                2. A list of free and low-cost outings drawn up to mix in.
                3. Children told the weekly amount and involved in choosing.
                4. The holiday finished with the final week's envelope still intact until that week.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A school holiday is completed with every week's days-out spending inside its envelope."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set a total for days out and split it by week"
                - "List ten free or low-cost outings nearby"
                - "Show the children the weekly amount and let them help choose"
                - "Pay for snacks and drinks on outings from the same envelope"
            - name: Hosting envelope for a family gathering
              description: |-
                ## Purpose
                Hosting a birthday, a christening or a family weekend brings a run of extra food, drink and decorations that usually lands on the grocery envelope and wrecks it for the month. A separate hosting envelope, set from a list and a head count, keeps the occasion generous and the regular envelopes untouched.

                ## Milestones
                1. A head count and menu agreed.
                2. A shopping list priced from the price book or recent receipts.
                3. A hosting envelope filled with that total plus a small margin.
                4. The month's grocery envelope showing no event spending.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A hosted gathering is paid entirely from its own envelope, and that month's grocery envelope shows no event spending."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the head count and menu"
                - "Price the shopping list from recent receipts"
                - "Fill a hosting envelope with the total plus a small margin"
                - "Keep event receipts in the hosting envelope only"
            - name: Guest envelope for a wedding or celebration weekend
              description: |-
                ## Purpose
                Being a guest at a wedding or a celebration weekend away can cost more than a month of fun money once travel, outfit, gift and the bar are added up. A dedicated envelope, started months ahead with a total you settle on first, lets you say yes to the parts that matter and politely skip the rest.

                ## Milestones
                1. Every cost of attending listed and priced.
                2. A total agreed and split into monthly contributions up to the date.
                3. Optional extras ranked so you know what to drop first.
                4. The event attended with all spending inside the envelope.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All costs of attending a wedding or celebration weekend are paid from its envelope, with nothing put on a card."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List travel, accommodation, outfit, gift and on-the-day costs"
                - "Set a total and divide it by the months left"
                - "Rank the optional extras from most to least important"
                - "Add the monthly contribution to the payday fill"
            - name: Festive season food and going-out envelopes
              description: |-
                ## Purpose
                December spending is not only presents: extra food, drinks, nights out, a work party and travel to family all pile into the same weeks. Running separate envelopes for festive food and festive socialising from early November keeps them out of the normal envelopes, while gifts stay in their own gift plan.

                ## Milestones
                1. Last year's festive food and socialising costs estimated from statements.
                2. Two festive envelopes created and part-filled from November.
                3. Regular envelopes kept at their usual amounts through December.
                4. A January note recording what each festive envelope actually covered.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Festive food and socialising are paid from their own envelopes, and a January note records the real totals for next year."
                cadence: cyclic
              tasks:
                - "Estimate last year's festive food and going-out spending from statements"
                - "Open festive food and festive socialising envelopes in early November @recurring(yearly)"
                - "Keep present buying in its separate plan, not these envelopes"
                - "Write the actual totals in January for next year"
            - name: Spend, save and give envelopes for children
              description: |-
                ## Purpose
                Children learn more about money from three envelopes of their own than from any lecture. Splitting pocket money into spend, save and give, with the child choosing within simple rules, teaches the same limits the adults are living by, in a form a seven-year-old can hold.

                ## Milestones
                1. A pocket money amount and payday agreed.
                2. Three labelled envelopes or jars for spend, save and give.
                3. A split rule agreed with the child.
                4. Three months of pocket money paid and split, with one saving goal reached or in sight.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A child has run spend, save and give envelopes for three months, with each payment split and recorded."
                cadence: rolling
              tasks:
                - "Agree the pocket money amount and payday with your child"
                - "Make three labelled envelopes or jars together"
                - "Agree the split rule between spend, save and give"
                - "Pay pocket money and help split it into the envelopes @recurring(weekly:fri)"
            - name: Couple's shared envelopes with separate fun money
              description: |-
                ## Purpose
                Couples who both spend from the grocery or eating-out envelope need to know who has what, or the second shop of the week finds it empty. Agreeing which envelopes are shared, who holds them, and giving each partner fun money the other never audits removes the most common source of friction in envelope households.

                ## Milestones
                1. Shared and personal envelopes listed and agreed.
                2. A holder named for each shared envelope.
                3. Equal or agreed fun money for each partner.
                4. A monthly twenty-minute check-in held three times.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly envelope check-ins are held as a couple, with shared envelopes, holders and fun money amounts written down."
                cadence: rolling
              tasks:
                - "List which envelopes are shared and which are personal"
                - "Agree who holds each shared envelope"
                - "Set fun money for each partner"
                - "Hold a twenty-minute envelope check-in together @recurring(monthly:5)"
            - name: Student weekly envelopes through a term
              description: |-
                ## Purpose
                A loan or term income that arrives in a few large payments has to stretch across ten or more weeks, and the first fortnight of term is when it goes. Dividing what is left after rent into weekly envelopes, filled every Monday from a separate account, makes the last week of term as fundable as the first.

                ## Milestones
                1. The term's money after rent and fixed costs worked out.
                2. A weekly envelope amount set by dividing by the weeks until the next payment.
                3. A separate account or pot holding the rest of the term's money.
                4. Every week of term funded from the weekly fill.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every week from the start of term to the next payment is funded from a weekly envelope, with no overdraft used for living costs."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Work out the money left after rent and fixed costs for the term"
                - "Divide it by the weeks until the next payment"
                - "Park the term's money in a separate account or pot"
                - "Move the week's envelope amount across on Monday morning @recurring(weekly:mon)"
            - name: Retiree's weekly cash envelopes from pension income
              description: |-
                ## Purpose
                On a fixed pension the same income arrives each month, so steadiness matters more than anything, and many retirees prefer cash they can see. A weekly withdrawal into envelopes for food, outings and small treats, with the rest left in the bank, keeps day-to-day spending inside the pension without keeping large sums at home.

                ## Milestones
                1. Pension income after bills worked out per week.
                2. Weekly envelopes set for food, outings and personal spending.
                3. One weekly withdrawal at a safe, familiar time and place.
                4. Home cash kept below one week's needs.

                ## Notes
                Withdraw in daylight at a branch or a machine inside a shop where possible, and never let someone you have just met help you count or carry cash.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of weekly envelope withdrawals are made at a set time, with home cash never above one week's needs."
                cadence: rolling
              tasks:
                - "Work out pension income left after bills for each week"
                - "Set weekly envelope amounts for food, outings and personal spending"
                - "Draw the week's cash at the same safe place @recurring(weekly:tue)"
                - "Keep no more than a week's cash at home"
            - name: Freelancer's envelopes on uneven income
              description: |-
                ## Purpose
                When income arrives in lumps, filling envelopes straight from each invoice creates feast weeks and famine weeks. Setting envelope amounts at what a lean month can pay, and filling them only from a fixed monthly transfer to your personal account, keeps the envelopes steady even when work is not.

                ## Milestones
                1. Envelope amounts set at what a lean month can cover.
                2. Envelopes filled only from the fixed monthly transfer, never straight from an invoice.
                3. A lean-month version of the envelope list with lower amounts.
                4. Three months of steady fills regardless of what was invoiced.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months of envelopes are filled at the same amount from a fixed transfer, whatever was invoiced."
                cadence: rolling
              tasks:
                - "Set envelope amounts at what your leanest recent month could cover"
                - "Fill envelopes only from the monthly transfer to your personal account @recurring(monthly:1)"
                - "Write a lean-month version of the envelope list"
                - "Note any month you switched to the lean amounts and why"
            - name: Carer running envelopes for someone else
              description: |-
                ## Purpose
                Carers who handle shopping money for a parent or relative need a system that protects both people: the person's money visibly spent on them, and the carer able to show it. Envelopes with a signed weekly cash sheet do both, and make it easy to hand over to another family member or a care worker.

                ## Milestones
                1. Permission to handle the person's spending money confirmed, formally where needed.
                2. Envelopes for the person's shopping and personal spending labelled with their name.
                3. A weekly cash sheet signed or initialled by both of you.
                4. Receipts kept for every spend for at least a year.

                ## Notes
                If you handle someone's money regularly, ask about the formal arrangements in your country, such as a power of attorney or an appointee role, and keep their money separate from yours at all times.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Envelopes for the person you care for are in use, with a weekly signed cash sheet and a receipt kept for every spend."
                cadence: rolling
              tasks:
                - "Confirm in writing that you may handle the person's spending money"
                - "Label separate envelopes with their name and purpose"
                - "Count and sign the weekly cash sheet with the person you support @recurring(weekly:wed)"
                - "File every receipt by month in a folder kept with the envelopes"
            - name: Annual envelope spending report
              description: |-
                ## Purpose
                Twelve months of envelope ledgers hold the clearest picture of your variable spending you will ever have. Totalling each envelope by month, explaining the seasonal swings and setting next year's amounts from that evidence turns the system from a monthly habit into a planning tool.

                ## Milestones
                1. Twelve months of totals for each envelope in one table.
                2. The highest and lowest months for each envelope explained.
                3. Seasonal adjustments, such as higher grocery amounts in winter, written in.
                4. Next year's envelope amounts set from the table.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A twelve-month table of envelope totals exists, with seasonal notes and next year's amounts set from it."
                cadence: cyclic
              tasks:
                - "Ask the agent to combine twelve months of ledger totals into one table"
                - "Mark the highest and lowest months for each envelope"
                - "Note seasonal patterns and their causes"
                - "Set next year's envelope amounts from the table @recurring(yearly)"
            - name: Virtual cards with limits for each envelope
              description: |-
                ## Purpose
                Some banks and card providers let you create virtual cards with their own spending limits, and giving each digital envelope its own card means the limit enforces itself at the checkout. It takes careful set-up, but for online spending it is the closest digital equivalent to an envelope that simply runs out.

                ## Milestones
                1. Your bank's virtual card options and limit settings checked.
                2. One virtual card created for each digital envelope category.
                3. Each card saved only at the sites for its category.
                4. Each card's limit reset to its envelope amount on fill day.

                ## Notes
                Check what happens to pre-authorisations, such as fuel pumps or hotel deposits, when a virtual card's limit is low.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every digital envelope category has its own virtual card with a limit matching its fill, saved only at its own sites."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your bank or card provider offers virtual cards with limits"
                - "Create one virtual card per digital envelope"
                - "Save each card only at the sites for its category"
                - "Reset each card's limit to its envelope amount on fill day"
            - name: Coaching a friend through their first envelope month
              description: |-
                ## Purpose
                Once your envelopes have run smoothly for six months, you know the practical details the books skip: which shops take cash, what to do on day ten when the food envelope is low, how to bring a sceptical partner round. Helping a friend or relative through their first month spreads the method and usually sharpens your own system too.

                ## Milestones
                1. A friend or relative who asked for help agreed to a one-month trial.
                2. Their categories, baseline and first amounts set up with them.
                3. Weekly check-ins held through their first month.
                4. A day-thirty review held, with them deciding whether to carry on.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A friend completes a first envelope month with four weekly check-ins and a day-thirty review."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Offer help only to someone who has asked about envelopes"
                - "Help them choose categories and work out a baseline"
                - "Check in with them once a week for the first month"
                - "Hold a day-thirty review and let them decide what comes next"
---

# Cash Envelope Spending

This area is for anyone who wants a hard limit on the spending that wanders, such as groceries, eating out, fuel and fun money, by giving each category its own envelope of cash or its own digital pot. It starts with the foundations (choosing categories, an honest baseline, cash or digital, first amounts, storage, withdrawals and card rules), then the routines that keep envelopes filled and counted, the skills of shopping to a limit and reconciling, the decisions that refine the set, dated events with their own envelopes, versions for children, couples, students, retirees, freelancers and carers, and finally the work of someone who has run envelopes for a year.

What repeats is the payday fill, a Saturday grocery shop, a Sunday count, a month-end sweep, a monthly amount review, a monthly change jar and price book refresh, a quarterly system check and a yearly report that sets next year's amounts. The Metrics log, Weekly meal plan, Habit tracker, Reading queue and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
