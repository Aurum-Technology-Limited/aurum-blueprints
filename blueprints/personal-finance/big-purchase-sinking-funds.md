---
id: personal-finance.big-purchase-sinking-funds
name: Big Purchase Sinking Funds
description: "Named pots with real targets and dates for the car, holidays, appliances and annual bills, filled automatically each payday and paid out without reaching for credit."
category: personal
version: 1.0.0
tags: [personal-finance, big-purchase-sinking-funds, everyone, sinking-funds, savings-pots, annual-bills, planned-purchases]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - savings-goal
    - metrics-log
    - purchase-decision
    - trip
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Big Purchase Sinking Funds
          description: "Saving steadily into named pots for predictable big costs like car repairs, holidays, appliances and annual bills."
          projects:
            - name: Three-year list of predictable big costs
              description: |-
                ## Purpose
                Most money shocks are not emergencies at all: the car needs tyres, the washing machine is eleven years old, a friend's wedding is in June. Listing every big cost you can see coming in the next three years, with a rough price and a likely month, turns those surprises into a schedule. Every pot in this area is built from this list.

                ## Milestones
                1. A list of every foreseeable cost too big for one month's budget, each with a rough price and a likely month.
                2. Costs grouped into car, home, appliances, travel, celebrations, annual bills and other.
                3. Anything last paid for with credit or instalments marked, so it can be planned in cash next time.
                4. The list dated and saved where everyone in the household can find it.

                ## Notes
                Walk round the house, the car and the calendar rather than relying on memory. Costs that come round every year belong here as well as one-off replacements.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A dated list of foreseeable big costs for the next three years, each with a price estimate and a likely month, saved in one place."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the last five costs that knocked the monthly budget off course"
                - "Walk round the home and note appliances and furniture likely to need replacing"
                - "Add car, travel, celebration and annual bill costs from the calendar"
                - "Put a rough price and likely month beside every item"
            - name: Yearly lump-sum bills found in twelve months of statements
              description: |-
                ## Purpose
                Annual charges are the easiest big costs to forget because they arrive only once: car insurance, home insurance, vehicle tax, breakdown cover, a professional membership, a software renewal. Searching a full year of bank and card statements finds every one with its exact amount and renewal month, so each can be funded a twelfth at a time instead of absorbed in a bad month.

                ## Milestones
                1. Twelve months of bank and card statements downloaded for every account.
                2. Every charge that appeared once in the year listed with amount, payee and month.
                3. Each annual charge marked keep, renegotiate or cancel.
                4. The total of kept annual bills divided by twelve and written down as a monthly figure.

                ## Notes
                Charges paid from a partner's account or a credit card are the ones usually missed. Cancelling belongs to your subscription review; this project only needs the list of what stays.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of every annual charge from the last twelve months, with amount and renewal month, and a monthly figure for funding them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download twelve months of statements for every current account and card"
                - "Ask the agent to list the charges that appear only once in the export"
                - "Add each annual bill's amount, payee and renewal month to the cost list"
                - "Divide the total of kept annual bills by twelve and note the figure"
            - name: Target amount and due date for every pot
              description: |-
                ## Purpose
                A pot without a number and a date is just a savings account with a nice name. Turning the cost list into pots, each with a target, a due month and a note of where the price came from, gives every contribution a purpose and makes it obvious which pots are on track.

                ## Milestones
                1. Costs from the list grouped into a manageable number of pots, usually six to twelve.
                2. Each pot given a target based on a real quote, a past bill or a current shop price.
                3. Each pot given a due month, or a likely replacement year where there is no fixed date.
                4. The pot list seen and agreed by everyone who shares the costs.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every pot has a written target amount, a due month and a note of where the price came from."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Group the cost list into pots by type and timing"
                - "Look up a current price for each pot's main item"
                - "Set a due month for each pot, even if it is a best guess"
                - "Show the pot list to anyone who shares the costs"
            - name: Monthly contribution worked out for each pot
              description: |-
                ## Purpose
                The monthly figure is simple arithmetic: what is still needed divided by the months left. Doing it for every pot and adding the results shows the true monthly cost of all your big purchases, which is often a surprise and always more useful than a vague sense that you should save more.

                ## Milestones
                1. Current balance, target and months left recorded for each pot.
                2. A monthly contribution calculated for each pot.
                3. A total monthly figure for all pots written down.
                4. Pots due within six months flagged where the monthly amount looks unaffordable.

                ## Notes
                For pots that never end, such as car repairs, use last year's actual spend divided by twelve and skip the countdown.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A monthly contribution for every pot and a total monthly figure, written beside the pot list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record each pot's balance, target and months until due"
                - "Divide the shortfall by the months left for each pot"
                - "Add the pot contributions together for a monthly total"
                - "Flag any pot whose monthly amount looks out of reach"
            - name: Choosing an account with built-in savings pots
              description: |-
                ## Purpose
                Keeping ten targets in one savings account works on paper but blurs in practice, because a single balance hides which pot is short. Many banks and savings apps offer named sub-accounts or spaces at no cost, and choosing one that allows free withdrawals, standing orders into each pot and a clear view of every balance makes the whole system easier to run.

                ## Milestones
                1. Your current bank's pot or space features checked.
                2. Two or three alternatives compared on pot limits, withdrawal rules, interest and deposit protection.
                3. A choice made and the reason written in a sentence.
                4. The chosen provider confirmed as covered by your country's deposit protection scheme.

                ## Notes
                For pots due within a year, access and clarity matter more than the interest rate, which can be improved later.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider for the pots chosen and recorded, with its pot limit, withdrawal rules and deposit protection checked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your current bank offers named savings pots"
                - "Compare two alternatives on pot limits, withdrawals and protection"
                - "Write down the provider you chose and why"
                - "Confirm the provider is covered by deposit protection"
            - name: Opening and naming the first five pots
              description: |-
                ## Purpose
                Starting every pot at once usually means starting none. Opening the five with the nearest due dates or the biggest consequences, and naming each after the thing it pays for, gets money moving this month and leaves the rest to follow once the habit is running.

                ## Milestones
                1. Five pots opened, each named after a specific cost such as Car tyres and service or Boiler replacement.
                2. Each pot's target and due month entered in the app where it supports goals.
                3. A first deposit made into each pot, however small.
                4. The remaining pots listed with the month each will be opened.

                ## Notes
                Specific names work better than categories: a pot called Washing machine 2027 is harder to raid than one called Miscellaneous.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five named pots open with a first deposit in each, and an opening month written for every remaining pot."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pick the five pots with the nearest due dates or biggest consequences"
                - "Open and name each pot after the cost it pays for"
                - "Make a first deposit into each of the five pots"
                - "Set an opening month for each remaining pot"
            - name: Making room for pot contributions in the budget
              description: |-
                ## Purpose
                Whatever total your contribution sums produced has to come from somewhere, and if it is not a budget line it will be the first thing skipped. Finding the money, from trimmed spending, from annual bills that used to land in one month, or by stretching some due dates, makes the pots a fixed cost like rent.

                ## Milestones
                1. Pot contributions added to the monthly budget as their own line.
                2. The gap between the pot total and what the budget can spare measured.
                3. Any gap closed by named cuts, a later due date or a smaller target.
                4. A budget that balances with pot contributions included.

                ## Notes
                Start from the **Monthly budget and bills** template. The first year often feels tighter than later ones, because some annual bills still land as lumps while their pots are filling.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A monthly budget that balances with every pot contribution included as its own line."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a sinking funds line to this month's budget"
                - "Measure the gap between the pot total and what the budget spares"
                - "Close the gap with named cuts or later due dates"
                - "Check the budget balances with the pots included"
            - name: Sinking fund ledger with balances and targets
              description: |-
                ## Purpose
                Banking apps show balances but rarely show whether a pot is on schedule. One page listing each pot's target, due month, monthly contribution, balance and percentage funded answers that at a glance, and it survives a change of bank.

                ## Milestones
                1. A ledger with columns for pot, target, due month, contribution, balance and percentage funded.
                2. Every open pot entered with its current balance.
                3. A column showing whether each pot is ahead of or behind schedule.
                4. The ledger saved where anyone sharing the pots can open it.

                ## Notes
                Start from the **Savings goal** template. A pot is on schedule when its balance is at least the target multiplied by the share of the saving period already gone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ledger listing every pot with target, due month, contribution, balance, percentage funded and an ahead or behind mark."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the ledger from the savings goal template"
                - "Enter every open pot with its target, due month and balance"
                - "Add an ahead or behind column for each pot"
                - "Share the ledger with anyone who pays into the pots"
            - name: Written rules for spending from a pot
              description: |-
                ## Purpose
                Pots fail quietly when they start paying for things they were never meant for, like a takeaway charged to the holiday fund. Three or four written rules on what each pot covers, who can take money out and whether one pot may lend to another stop the slow drift and save arguments in a shared household.

                ## Milestones
                1. Each pot given one line on what it covers and what it does not.
                2. A rule on who can withdraw, and above what amount a second person must agree.
                3. A rule on borrowing between pots, including how and when it is paid back.
                4. The rules saved at the top of the ledger.

                ## Notes
                A sensible default: pots may lend to each other only with a written note and a repayment month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written rules covering scope, withdrawals and borrowing between pots, saved with the ledger."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write one line on what each pot covers and excludes"
                - "Agree who may withdraw and the amount that needs a second opinion"
                - "Set a rule for borrowing between pots and repaying it"
                - "Save the rules at the top of the ledger"
            - name: Clear line between sinking funds and the emergency fund
              description: |-
                ## Purpose
                A tyre replacement is not an emergency; it is a known cost with an uncertain date. Deciding where each cost belongs, and keeping the emergency fund for genuine shocks such as job loss or damage nobody could foresee, stops the safety buffer being drained by things a pot should have covered.

                ## Milestones
                1. Every item on the big cost list marked sinking fund or emergency.
                2. A one-sentence test written for telling the two apart.
                3. Any foreseeable cost currently paid from the emergency fund moved to a pot.
                4. The emergency fund held in a separate account or a clearly separate pot.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written test for sinking fund versus emergency costs, with every listed cost assigned to one or the other."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark each item on the cost list as sinking fund or emergency"
                - "Write a one-sentence test for telling the two apart"
                - "Give every foreseeable cost a pot of its own"
                - "Keep the emergency fund in a separate account or pot"
            - name: Payday standing orders into every pot
              description: |-
                ## Purpose
                Contributions that rely on remembering stop in the first busy month. Standing orders that leave the day after payday, one per pot or one into a savings account split the same day, make the pots fill whether or not anyone thinks about them.

                ## Milestones
                1. A standing order or automatic rule set up for every open pot.
                2. Transfers timed for the day after pay arrives.
                3. Every transfer amount matching the ledger contribution.
                4. Three consecutive months of transfers arriving without a manual top-up.

                ## Notes
                If your bank cannot send money to individual pots, send one total to the savings account and split it by hand on the same day each month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open pot receives an automatic monthly transfer, with three consecutive months arriving as set."
                cadence: rolling
              tasks:
                - "Set a standing order for each pot for the day after payday"
                - "Check every transfer amount matches the ledger"
                - "Change the standing orders whenever a target or due date moves"
                - "Confirm each pot transfer arrived this month @recurring(monthly:2)"
            - name: Monthly pot balance check
              description: |-
                ## Purpose
                Ten minutes a month is enough to catch a missed transfer, a withdrawal nobody recorded or a pot slipping behind. Copying each balance into the ledger and noting the funded percentage builds a record that shows the system working, which is what keeps people paying in.

                ## Milestones
                1. A fixed day each month set aside for the check.
                2. Every pot balance copied into the ledger.
                3. Any pot behind schedule flagged with a one-line reason.
                4. Six consecutive monthly checks recorded.

                ## Notes
                Start from the **Metrics log** template to keep a monthly snapshot of the total across all pots.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly checks recorded, each with every pot balance and any pot behind schedule flagged."
                cadence: rolling
              tasks:
                - "Copy every pot balance into the ledger @recurring(monthly:4)"
                - "Flag any pot more than a month behind schedule"
                - "Log the total across all pots in the metrics log"
            - name: Withdrawal record for every pot payout
              description: |-
                ## Purpose
                When a pot pays out, the amount, date, item and how it compared with the target are the most useful data in the whole system. Recording each payout with its receipt shows which targets were realistic and keeps warranty paperwork in one place for the day something fails.

                ## Milestones
                1. A withdrawal log with date, pot, amount, item and receipt location.
                2. Every payout this year entered.
                3. Actual cost compared with the target for each payout.
                4. Receipts and warranty documents filed where they can be found later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pot withdrawal for the last twelve months logged with amount, item, receipt and a comparison against target."
                cadence: rolling
              tasks:
                - "Add a withdrawals tab to the ledger"
                - "File the receipt and warranty for each payout in one folder"
                - "Enter this month's pot withdrawals with their receipts @recurring(monthly:20)"
                - "Note how each payout compared with its target"
            - name: End-of-month leftover sweep into the pots
              description: |-
                ## Purpose
                Small amounts left in the current account the day before payday tend to vanish into the next month. Sweeping whatever sits above a small cushion into the pot furthest behind closes shortfalls without raising any standing order.

                ## Milestones
                1. A cushion amount agreed for the current account.
                2. A rule for which pot receives the sweep.
                3. The sweep done in at least ten months of twelve.
                4. The total swept over the year recorded in the ledger.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Leftover money swept into a pot in at least ten of the last twelve months, with each amount recorded."
                cadence: rolling
              tasks:
                - "Decide the cushion to keep in the current account before payday"
                - "Move anything above the cushion to the pot furthest behind @recurring(monthly:28)"
                - "Note each swept amount in the ledger"
            - name: Ninety-day look-ahead of pot payouts
              description: |-
                ## Purpose
                Big costs cluster: the car insurance, the holiday balance and a school trip can all land in the same six weeks. Looking three months ahead each month shows which pots will pay out soon, whether they will be full in time and whether any renewal can move to a quieter month.

                ## Milestones
                1. A rolling list of pot payouts due in the next ninety days.
                2. Each upcoming payout checked against the pot's projected balance.
                3. Any month with three or more payouts spotted at least two months ahead.
                4. Movable renewals and bookings considered for a quieter month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ninety-day payout list refreshed every month for six months, with any shortfall spotted before its due date."
                cadence: rolling
              tasks:
                - "List every pot payout due in the next ninety days @recurring(monthly:15)"
                - "Check each pot will be full by its payout date"
                - "Ask whether any renewal date can move to a quieter month"
            - name: Quarterly price check on pot targets
              description: |-
                ## Purpose
                Targets set from last year's prices drift as quotes and shop prices change, sometimes by a fifth in a year for building work or car parts. Checking the main item in each pot every quarter keeps targets honest and avoids discovering the gap at the till.

                ## Milestones
                1. A current price found for the main item in every pot.
                2. Targets updated wherever the price has moved by more than about 5%.
                3. Monthly contributions recalculated for every changed target.
                4. The date of each price check noted in the ledger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly price checks completed in a year, with targets and contributions updated after each."
                cadence: rolling
              tasks:
                - "Look up current prices for each pot's main item @recurring(quarterly)"
                - "Update any target where the price has moved noticeably"
                - "Recalculate contributions for every changed target"
            - name: Refill plan after a pot pays out early
              description: |-
                ## Purpose
                The car repair always seems to come before the pot is full, and a pot spent early leaves the next repair uncovered. A written refill plan, with a higher contribution for a set number of months or a temporary pause on a less urgent pot, returns it to target without guilt or guesswork.

                ## Milestones
                1. The early payout recorded with the shortfall it left.
                2. A refill amount and number of months chosen.
                3. Any pot paused to fund the refill named, with its restart month.
                4. The pot back on schedule by the planned month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A refill plan written for the most recent early payout, with the pot back on schedule by the planned month."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Record how much the early payout left the pot short"
                - "Choose a refill amount and the months it will run"
                - "Name any pot paused to pay for the refill and its restart month"
                - "Raise the pot's standing order for the refill period"
            - name: Behind-schedule pot triage
              description: |-
                ## Purpose
                When the monthly check shows a pot falling behind, there are only four moves: pay in more, push back the date, lower the target or borrow from another pot. Working through them in that order and writing the choice down turns a worrying number into a decision.

                ## Milestones
                1. The behind-schedule pot and its shortfall identified.
                2. Each of the four moves costed in a line.
                3. One move chosen and the ledger updated.
                4. The pot checked again at the next monthly balance check.

                ## Notes
                Lowering the target is often the right answer for wants such as an upgrade, and the wrong one for needs such as tyres or a boiler service.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every pot flagged as behind has a recorded decision and is back on schedule within three months."
                cadence: rolling
              tasks:
                - "Write down the shortfall on the pot that is behind"
                - "Cost each of the four moves in one line"
                - "Pick one move and update the ledger"
                - "Recheck that pot at the next monthly balance check"
            - name: Pay rise step-up for pot contributions
              description: |-
                ## Purpose
                Pay rises tend to disappear into everyday spending within a few months. Deciding in advance that a fixed share of every rise goes to the pots, and acting on it the month the new pay arrives, lets the system grow with income while leaving room for spending to rise a little too.

                ## Milestones
                1. A share of each pay rise agreed for the pots.
                2. The rule written at the top of the ledger.
                3. Standing orders raised in the month of the next rise.
                4. The extra contribution directed to the most underfunded pot.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Pot contributions raised within a month of each pay rise, by the share written in the ledger."
                cadence: cyclic
              tasks:
                - "Agree the share of any pay rise that goes to the pots"
                - "Write the rule at the top of the ledger"
                - "Raise pot standing orders after the annual pay review @recurring(yearly)"
            - name: Annual sinking fund reset
              description: |-
                ## Purpose
                Once a year the whole system needs a fresh look: finished pots closed, new costs added, targets rolled forward and anything never used questioned. Doing it at the same time each year, ideally a month before your busiest spending season, keeps the pots matched to the life you are actually living.

                ## Milestones
                1. Pots that paid out closed or reset with a new target.
                2. New costs from the past year added as pots.
                3. Targets and due dates rolled forward a year.
                4. Pots unused for two years merged or closed.
                5. Next year's total monthly contribution confirmed in the budget.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An annual reset held two years running, each producing an updated pot list and a confirmed monthly total."
                cadence: cyclic
              tasks:
                - "Book a two-hour annual pot review in the calendar @recurring(yearly)"
                - "Close or reset every pot that paid out this year"
                - "Merge or close pots unused for two years"
                - "Confirm next year's monthly pot total fits the budget"
            - name: Sinking fund maths for lump sums and dates
              description: |-
                ## Purpose
                Three small sums run the whole system: the monthly amount for a target and date, the on-schedule balance at any point, and the effect of a missed month. Practising them on your own pots takes an evening and makes every later decision faster.

                ## Milestones
                1. The monthly contribution sum worked through for two real pots.
                2. The on-schedule balance worked out for one pot at today's date.
                3. The effect of a three-month pause on one pot calculated.
                4. The three formulas written in the ledger notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three worked examples using your own pots saved in the ledger notes."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Work out the monthly amount for two real pots by hand"
                - "Calculate where one pot should be today to stay on schedule"
                - "Model what a three-month pause would do to one pot"
                - "Write the three formulas in the ledger notes"
            - name: Lifespan and replacement cost table for the home
              description: |-
                ## Purpose
                Appliances, boilers, mattresses and laptops wear out on fairly predictable timescales, and knowing roughly when tells you when each pot needs to be full. A table of what you own, its age, a typical lifespan range and today's replacement price turns guesswork into due dates.

                ## Milestones
                1. Every major appliance and large household item listed with its purchase year.
                2. A typical lifespan range noted for each from manufacturer or consumer guidance.
                3. A likely replacement year and current price recorded for each item.
                4. Items due within three years moved onto the pot list.

                ## Notes
                Model numbers and manufacture dates are usually on a label inside the door or on the back; photograph them while you are there.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table of major household items with age, lifespan range, replacement year and price, with near-term items added as pots."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Photograph the model labels on each major appliance"
                - "List each item with its purchase year and typical lifespan"
                - "Add a likely replacement year and current price for each"
                - "Move items due within three years onto the pot list"
            - name: Matching pot money to easy access, notice and fixed-term accounts
              description: |-
                ## Purpose
                Money for next month's car insurance must be instantly available, but a car fund for three years away could sit in a notice or fixed-term account at a better rate. Learning how notice periods, early withdrawal penalties and maturity dates work lets you match each pot to an account that fits its due date, without locking up money you will need.

                ## Milestones
                1. The difference between easy access, notice and fixed-term savings understood and noted.
                2. Each pot labelled by how soon its money is needed.
                3. Any pot due in more than a year considered for a notice or fixed-term home.
                4. Maturity or notice dates recorded beside each pot that moves.

                ## Notes
                This is about matching access to dates, not investing. Money needed within a few years is usually kept in cash savings; speak to a regulated adviser before considering anything else.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every pot labelled by access need, with money in any notice or fixed-term account due to be available before its pot's due date."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read how notice and fixed-term savings accounts handle withdrawals"
                - "Label each pot by how soon its money will be needed"
                - "Note any long-dated pot that could sit in a notice account"
                - "Check notice and maturity dates against pot due dates @recurring(quarterly)"
            - name: Allowing for price rises in long-dated pots
              description: |-
                ## Purpose
                Any target set today for a car or kitchen three years away will fall short if prices rise along the way. Learning to apply a simple yearly uplift to long-dated targets, using published inflation figures or the item's own past price changes, avoids a gap that only shows up at the point of purchase.

                ## Milestones
                1. Your country's latest inflation figure and recent price changes for one item found.
                2. A yearly uplift chosen for pots due in more than a year.
                3. Long-dated targets raised by that uplift for each year until due.
                4. The uplift written beside each long-dated pot for review at the annual reset.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every pot due more than a year away carries a target uplifted for price rises, with the rate used written beside it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your country's latest published inflation figure"
                - "Check how the price of one long-dated item changed over three years"
                - "Raise targets for pots due beyond a year by the chosen uplift"
                - "Note the uplift used beside each long-dated pot"
            - name: Timing big purchases to sales and model changeovers
              description: |-
                ## Purpose
                Many big items follow a pricing calendar: appliances and televisions drop when new models arrive, garden furniture falls at the end of summer, and flights have cheaper booking windows. Knowing the cycle for each pot's item lets you set the due month in a cheaper window and spend less from the pot.

                ## Milestones
                1. The usual discount windows found for the items in your three biggest pots.
                2. Price history for at least one item checked with a price tracker.
                3. Due months moved into a discount window where the timing allows.
                4. A price alert set for the next planned purchase.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Due months for the three biggest pots checked against their usual discount windows, with a price alert set for the next purchase."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up when your three biggest pot items usually go on sale"
                - "Check one item's price history with a price tracking site"
                - "Move due months into discount windows where timing allows"
                - "Set a price alert for the next planned purchase"
            - name: Paying annual premiums upfront from a pot
              description: |-
                ## Purpose
                Paying car or home insurance monthly often costs more than paying in one go, because the insurer is effectively lending you the premium, sometimes at a high interest rate. Once the annual bills pot is full, switching each renewal to an upfront payment can save a noticeable sum every year, and the pot makes it painless.

                ## Milestones
                1. Monthly and annual prices compared for every policy currently paid monthly.
                2. The extra cost of paying monthly worked out as an amount and a rate.
                3. Each renewal switched to annual payment once its pot can cover it.
                4. The yearly saving recorded in the ledger.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every instalment-paid policy compared on monthly and annual cost, with renewals switched to upfront payment where the pot covers it."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List every insurance or bill currently paid in monthly instalments"
                - "Ask each provider for the annual and monthly price at renewal"
                - "Work out the extra cost of paying monthly for each"
                - "Switch renewals to annual payment from the pot once it is full"
            - name: Funding order when money will not cover every pot
              description: |-
                ## Purpose
                Few budgets can fund every pot in full, especially in the first year. Ranking pots by consequence and due date, with car safety, home repairs and annual bills ahead of holidays and upgrades, makes sure that when there is not enough, the shortfall lands on something that can wait.

                ## Milestones
                1. Every pot marked need or want and scored by months until due.
                2. A ranked funding order written in the ledger.
                3. Lower-ranked pots given reduced contributions or later start months.
                4. The order revisited whenever household income changes.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written funding order for all pots, with lower-ranked contributions reduced or delayed so the total fits the budget."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark each pot as need or want"
                - "Rank the pots by consequence and months until due"
                - "Reduce or delay contributions to the lowest-ranked pots"
                - "Write the funding order at the top of the ledger"
            - name: Pay from the pot or take a 0% finance offer
              description: |-
                ## Purpose
                Retailers often offer interest-free credit on furniture and appliances just as a pot reaches its target. Late payment fees, deferred interest backdated if the balance is not cleared in time and a hard credit search make some offers riskier than they look. A short checklist for deciding at the till keeps the pot's purpose intact.

                ## Milestones
                1. A checklist covering term, fees, deferred interest, credit search and missed payments.
                2. The checklist used on the next finance offer.
                3. Where finance is taken, the pot money ring-fenced to clear it before the offer ends.
                4. The decision and reason recorded with the purchase.

                ## Notes
                Deferred interest deals can charge interest on the full original amount if any balance remains at the end. The checklist organises the questions to ask; it is not financial advice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written finance offer checklist, applied to the next purchase with the decision and its reason recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a five-question checklist for interest-free finance offers"
                - "Read the terms on deferred interest and missed payments"
                - "Ring-fence the pot money if you take an offer"
                - "Record the decision and reason with the purchase"
            - name: Self-insuring gadgets instead of extended warranties
              description: |-
                ## Purpose
                Extended warranties and gadget cover are sold at the till for items that often outlast them, and most of the premium never comes back. Paying a similar monthly amount into a gadget pot builds money you keep if nothing breaks, while still covering a repair or replacement if something does.

                ## Milestones
                1. Every extended warranty and gadget policy listed with its cost.
                2. Each compared with the item's age, price and existing manufacturer or statutory cover.
                3. Poor-value policies cancelled at renewal.
                4. The same monthly amount redirected into a gadget pot.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every extended warranty reviewed, with cancelled premiums redirected into a gadget pot by standing order."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every extended warranty and gadget policy you pay for"
                - "Check what the manufacturer warranty and consumer law already cover"
                - "Cancel the poor-value policies at renewal"
                - "Redirect the same monthly amount into a gadget pot"
            - name: Repair or replace decision for a failing appliance
              description: |-
                ## Purpose
                Broken appliances force a choice between a repair quote and a new model, usually under pressure and with the pot balance as the only guide. A rule set in advance, such as replacing when a repair costs more than half the price of new or the item is near the end of its typical life, makes the call quick and stops the pot paying twice.

                ## Milestones
                1. A repair or replace rule written in the ledger notes.
                2. For the current failing item, a repair quote and a replacement price gathered.
                3. Running and energy costs of the old item and a new one compared.
                4. The decision made and the payout recorded against the right pot.

                ## Notes
                Start from the **Purchase decision** template when the answer is replace.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written repair or replace rule, applied to the next failing appliance with the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your repair or replace rule in the ledger notes"
                - "Get a repair quote and a replacement price for the failing item"
                - "Compare the running costs of the old item and a new one"
                - "Record the decision and pay from the matching pot"
            - name: Car servicing, tyres and repairs pot
              description: |-
                ## Purpose
                Cars produce a steady trickle of predictable bills: the annual service, the roadworthiness test, tyres every few years, brakes, a battery. A pot funded at last year's actual spend divided by twelve, plus a share for the next big item, means the garage bill is paid from savings rather than a credit card.

                ## Milestones
                1. The last twelve months of servicing, test and repair costs added up.
                2. The next tyre, brake and battery replacements estimated from the service history.
                3. A monthly contribution set from those two figures.
                4. The next service and test paid entirely from the pot.

                ## Notes
                Fuel, parking and insurance belong in your running costs budget, not this pot.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The car pot pays for the next service, test and repair in full, with its target reset each year from the service record."
                cadence: rolling
              tasks:
                - "Add up the last twelve months of servicing and repair bills"
                - "Ask the garage what is likely to need replacing within a year"
                - "Set the car pot contribution from those figures"
                - "Reset the car pot target after each annual service @recurring(yearly)"
            - name: Next car fund paid in cash
              description: |-
                ## Purpose
                Finance on the next car often starts the day the last one is paid off, and the interest over a lifetime of cars adds up to a large sum. Saving the old car payment into a pot after the loan ends, or starting a pot years ahead, makes it possible to buy the next car outright or with a much smaller loan.

                ## Milestones
                1. The current car's expected replacement year written down.
                2. A target price set for the type of car you expect to buy.
                3. A monthly contribution running, ideally equal to any finished finance payment.
                4. The pot balance compared with the target each year.

                ## Notes
                Choosing the actual car is a separate decision; this pot is only about having the money ready when the time comes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A next car pot with a target price and replacement year, receiving a monthly contribution by standing order."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down the year you expect to replace the current car"
                - "Set a target price for the type of car you would buy"
                - "Redirect any finished car payment straight into the pot"
                - "Compare the pot balance with the target at the annual reset"
            - name: Holiday pot costed from a real itinerary
              description: |-
                ## Purpose
                Holiday pots are usually set at a round number that falls short once flights, transfers, insurance, pet care and spending money are added. Costing next year's trip from a real itinerary, then working back to a monthly figure, means the trip is paid for before you leave and nothing lands on the card afterwards.

                ## Milestones
                1. A draft itinerary with dates, travellers and destination.
                2. Every cost line priced, including travel insurance, transfers, pet care and spending money.
                3. A pot target and monthly contribution set to finish a month before departure.
                4. The holiday paid in full from the pot, with no card balance after the return.

                ## Notes
                Start from the **Trip** template to keep the itinerary and the costs together.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Next year's holiday paid in full from the pot, with no card balance left from the trip a month after return."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft next year's itinerary with dates and travellers"
                - "Price every cost line including insurance, transfers and spending money"
                - "Set the pot to finish a month before departure"
                - "Pay each booking from the pot rather than a card"
            - name: Appliance replacement pot
              description: |-
                ## Purpose
                Washing machines, fridges, ovens and boilers rarely fail at a convenient time, and replacing one in a hurry usually means paying full price for whatever is in stock. One pot sized from the lifespan table and topped up steadily turns a failure into a planned shopping trip instead of a crisis.

                ## Milestones
                1. The items covered by the pot listed with their likely replacement years.
                2. A target set equal to the next two replacements due.
                3. A monthly contribution running into the pot.
                4. The next appliance replaced entirely from the pot.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An appliance pot holding enough for the next two replacements due, funded by a standing monthly contribution."
                cadence: rolling
              tasks:
                - "List the appliances this pot will cover"
                - "Set the target to cover the next two replacements due"
                - "Start a monthly contribution into the appliance pot"
                - "Note which appliance is next in line after each replacement"
            - name: Furniture, mattress and furnishings pot
              description: |-
                ## Purpose
                Sofas, mattresses, beds and rugs wear out over eight to fifteen years and are among the purchases most often put on store credit. A furnishings pot, as useful for renters who move with their own furniture as for owners, spreads the cost across the years the old item is still in use.

                ## Milestones
                1. The main furniture listed with its age and expected replacement year.
                2. The next two replacements priced.
                3. A monthly contribution set to cover them by their due years.
                4. The next piece bought from the pot without store credit.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A furnishings pot funded monthly, with the next replacement bought from it without store credit."
                cadence: rolling
              tasks:
                - "List the main furniture with its age"
                - "Price the next two pieces you expect to replace"
                - "Set the furnishings pot contribution from those prices"
                - "Buy the next piece from the pot without store credit"
            - name: Home maintenance pot set from the value of the home
              description: |-
                ## Purpose
                Homeowners are often advised to set aside around 1% of the home's value a year for upkeep, more for older houses, yet many set aside nothing until the roof leaks. A maintenance pot sized from that rule of thumb and checked against a list of real jobs covers gutters, boiler servicing, decorating and the slow repairs every house needs.

                ## Milestones
                1. A yearly maintenance figure set from the home's value and age.
                2. A list of known jobs for the next three years with rough prices.
                3. The monthly contribution set from whichever of the two figures is higher.
                4. Every planned job in the year paid from the pot.

                ## Notes
                Renters can skip this one; the furnishings pot does the same job for a tenancy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A home maintenance pot funded monthly at a figure checked against a written list of jobs."
                cadence: rolling
              tasks:
                - "Work out 1% of your home's estimated value as a starting figure"
                - "List known maintenance jobs for the next three years"
                - "Set the pot contribution from the higher of the two figures"
                - "Walk round the house and add new jobs to the list @recurring(yearly)"
            - name: Kitchen or bathroom refit pot built from real quotes
              description: |-
                ## Purpose
                Refits are the largest planned purchase many households make after a car, and the budget almost always grows once the old units come out. Getting quotes early, adding a contingency for what is found behind the walls and saving over two or three years means the work can start with the money already in place.

                ## Milestones
                1. A one-page scope listing what the refit includes and excludes.
                2. Two or three quotes gathered on the same scope.
                3. A target set at the middle quote plus a contingency of 10 to 15%.
                4. A monthly contribution and a target start year agreed.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A refit pot with a target based on comparable quotes plus contingency, and a monthly contribution running."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-page scope for the refit"
                - "Get two or three quotes on the same scope"
                - "Set the target at the middle quote plus a contingency"
                - "Agree a monthly contribution and a target start year"
            - name: Pet care pot for vet bills and yearly costs
              description: |-
                ## Purpose
                Vaccinations, flea and worming treatment, dental cleans, kennels and the insurance excess all come round predictably, and older pets need more. A pot sized from last year's pet spending plus the excess on the policy keeps vet decisions about the animal, not the balance.

                ## Milestones
                1. Last year's pet costs added up from statements and vet invoices.
                2. The insurance excess and any co-payment noted.
                3. A monthly contribution set to cover routine costs and one excess.
                4. The next vet bill paid from the pot.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pet pot funded monthly at a figure that covers a year of routine costs plus one insurance excess."
                cadence: rolling
              tasks:
                - "Add up last year's vet, treatment and kennel costs"
                - "Check the excess and co-payment on the pet insurance"
                - "Set a monthly contribution to cover routine costs and one excess"
                - "Ask the vet which routine treatments are due this year"
            - name: Weddings and big celebrations pot
              description: |-
                ## Purpose
                Other people's milestones can cost a surprising amount: travel and a hotel for a wedding, a gift, an outfit, a weekend away beforehand. Keeping a pot for the year's known invitations, with a cap per event agreed in advance, makes it easier to say yes to the ones that matter and decline the rest without strain.

                ## Milestones
                1. Known invitations for the next twelve months listed.
                2. Each event costed for travel, accommodation, outfit and gift.
                3. A per-event cap agreed and written in the ledger.
                4. Each event paid from the pot within its cap.

                ## Notes
                Birthday and end-of-year gifts belong in your gift plan; this pot covers the big one-off occasions.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every big occasion in a year paid from the pot within its agreed cap."
                cadence: cyclic
              tasks:
                - "List every invitation and big occasion expected this year"
                - "Cost each event for travel, stay, outfit and gift"
                - "Agree a spending cap per event"
                - "Add newly received invitations to the pot list @recurring(monthly:10)"
            - name: Planned purchase day checklist
              description: |-
                ## Purpose
                Reaching a pot's target is the moment good planning can still be undone by a rushed choice, an expensive add-on or a lost receipt. A short checklist covering a final price check, delivery and installation costs, warranty registration and closing the pot makes each big purchase finish cleanly.

                ## Milestones
                1. A purchase day checklist saved in the ledger notes.
                2. The final price checked at three retailers on the day.
                3. Delivery, installation and old item removal costs confirmed before paying.
                4. The warranty registered and the receipt filed.
                5. The pot closed or reset with its next target.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The next pot-funded purchase completed using the checklist, with the warranty registered and the pot reset."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a purchase day checklist in the ledger notes"
                - "Compare the final price at three retailers before buying"
                - "Confirm delivery, installation and old item removal costs"
                - "Register the warranty and file the receipt the same day"
            - name: Pot contributions on a variable income
              description: |-
                ## Purpose
                Freelancers, commission earners and shift workers cannot rely on a fixed standing order when one month pays double the next. Funding pots as a percentage of each payment received, after the tax set-aside, with a minimum for lean months, keeps the pots growing without overcommitting.

                ## Milestones
                1. A percentage of income agreed for the pots.
                2. A minimum monthly contribution set for lean months.
                3. Pot transfers made each time income lands, after the tax set-aside.
                4. A written order for which pots pause first in a lean month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of pot transfers made as a percentage of income, never falling below the agreed minimum."
                cadence: rolling
              tasks:
                - "Set the percentage of each payment that goes to the pots"
                - "Agree a minimum contribution for lean months"
                - "Transfer the pot share as soon as each payment lands"
                - "Total this month's pot transfers against the minimum @recurring(monthly:6)"
            - name: Shared household pots for a couple
              description: |-
                ## Purpose
                Couples often disagree less about whether to save than about whose money pays for what. Deciding which pots are shared, which are personal and how much each person pays in, equally or in proportion to income, settles it before the boiler breaks rather than after.

                ## Milestones
                1. Each pot marked shared or personal.
                2. A contribution split agreed for the shared pots.
                3. Shared pots held where both partners can see the balances.
                4. The arrangement reviewed together every quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split of shared and personal pots and contributions, agreed by both partners and reviewed quarterly."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Mark each pot as shared or personal together"
                - "Agree how contributions to shared pots are split"
                - "Move shared pots to an account both partners can see"
                - "Review shared pot balances and targets together @recurring(quarterly)"
            - name: School year costs pot for parents
              description: |-
                ## Purpose
                Uniform, shoes, bags, stationery, trips and club fees land in the same few weeks at the start of each school year, and they grow as children move up a stage. A pot filled over the year, costed per child from last year's list, means the new term starts without a squeeze.

                ## Milestones
                1. Last year's school start costs listed per child.
                2. Expected trips, clubs and exam fees for the coming year added.
                3. A per-child target and monthly contribution set.
                4. The next school year started with every listed cost paid from the pot.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The next school year's start-up costs paid entirely from the pot for every child."
                cadence: cyclic
              tasks:
                - "List last year's school start costs for each child"
                - "Ask the school for the coming year's trips and fees"
                - "Set a per-child target and monthly contribution"
                - "Restart the school pot the month after term begins @recurring(yearly)"
            - name: Starter pots on a small income
              description: |-
                ## Purpose
                On a student loan, an apprentice wage or a first salary, even small pots make a difference to the laptop that dies mid-term or the deposit for the next flat. Starting with two or three pots at small monthly amounts builds the habit and covers the costs most likely to cause trouble.

                ## Milestones
                1. The two or three costs most likely to hit in the next year chosen.
                2. Pots opened with a small monthly amount each.
                3. Every contribution kept up for six months.
                4. One cost paid from a pot instead of credit.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two or three small pots funded for six consecutive months, with at least one cost paid from them."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Pick the two or three costs most likely to hit this year"
                - "Open a pot for each with a small monthly amount"
                - "Pay one upcoming cost from a pot instead of credit"
                - "Raise each contribution a little whenever income goes up"
            - name: Pots on a fixed retirement income
              description: |-
                ## Purpose
                Retirement often brings a fixed monthly income with no overtime or bonus to absorb a big bill. Planning pots for the replacements, home upkeep, travel and family occasions of the next decade, funded on pension day, keeps those costs from eating into savings meant to last.

                ## Milestones
                1. Big costs for the next ten years listed, including home adaptations and replacing or giving up the car.
                2. Each cost assigned to a pot or to existing savings.
                3. Pot contributions set to leave the day after the pension arrives.
                4. A trusted person told where the pots are and what each is for.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ten-year list of big costs, each assigned to a pot or savings, with pot transfers running on pension day."
                cadence: rolling
              tasks:
                - "List the big costs you expect over the next ten years"
                - "Decide which costs come from pots and which from savings"
                - "Move pot contributions on pension payment day @recurring(monthly:8)"
                - "Tell a trusted person where the pots are and what they cover"
            - name: Teaching a child to save for a big item
              description: |-
                ## Purpose
                Children who save for a bike or a games console over several months grasp the idea of a sinking fund better than through any explanation. A clear jar or a children's savings pot, a picture of the item and a progress chart make weeks of waiting visible and the purchase their own.

                ## Milestones
                1. An item chosen by the child, with its price.
                2. A weekly saving amount agreed from pocket money or chores.
                3. A progress chart kept beside the jar or pot.
                4. The item bought with the child's saved money.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Your child buys a chosen item with money saved over at least two months, with a progress chart kept throughout."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree the item and its price with your child"
                - "Set a weekly amount from pocket money or chores"
                - "Count the money with your child and mark the chart @recurring(weekly:sat)"
                - "Go shopping together when the target is reached"
            - name: Ten-year replacement schedule for the household
              description: |-
                ## Purpose
                Building managers plan reserves with a replacement schedule listing every major component, its remaining life and its cost, and the same method works for a household. A ten-year schedule covering the car, roof, boiler, kitchen, appliances, furniture and technology shows the yearly contribution that would cover all of it, and the heavy years to prepare for.

                ## Milestones
                1. Every major item listed with remaining life and replacement cost.
                2. Replacements placed on a ten-year timeline.
                3. An average yearly cost and the three heaviest years identified.
                4. Current pot contributions compared with the average yearly cost.
                5. The schedule updated at each annual reset.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ten-year replacement schedule with an average yearly cost and the three heaviest years identified."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Copy the lifespan table into a ten-year timeline"
                - "Add the car, roof, kitchen and other large items"
                - "Work out the average yearly replacement cost"
                - "Mark the three heaviest years and how the pots will meet them"
            - name: Twenty-four month pot balance forecast
              description: |-
                ## Purpose
                Pots that look healthy today can still run dry if three payouts fall in the same quarter next year. A month-by-month forecast of every pot's balance over two years, with contributions in and planned payouts out, shows exactly when any pot dips below zero and how much needs to move.

                ## Milestones
                1. A spreadsheet with a row per pot and a column per month for two years.
                2. Planned contributions and payouts entered for each pot.
                3. Any month where a pot would go below zero highlighted.
                4. A fix recorded for each projected shortfall.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-year monthly forecast of every pot's balance, with each projected shortfall given a recorded fix."
                cadence: rolling
              tasks:
                - "Ask the agent to build a two-year pot forecast from the ledger"
                - "Enter planned contributions and payouts for every pot"
                - "Highlight any month where a pot would drop below zero"
                - "Roll the forecast forward and check for new shortfalls @recurring(quarterly)"
            - name: Service charge and major works reserve for a flat
              description: |-
                ## Purpose
                Leaseholders and flat owners can face a large bill when the building needs a new roof, lift or windows, even where a reserve fund exists. Reading the service charge accounts and the planned maintenance schedule, then running a personal pot for your likely share, avoids a demand you cannot pay at short notice.

                ## Milestones
                1. The latest service charge accounts and reserve fund balance obtained.
                2. Planned major works for the next five years and your share estimated.
                3. A personal pot set to cover what the reserve will not.
                4. Questions raised with the managing agent about any works without a reserve.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A personal major works pot sized from the building's maintenance schedule and reserve fund accounts."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Request the latest service charge accounts from the managing agent"
                - "Ask for the planned maintenance schedule for the next five years"
                - "Estimate your share of works the reserve will not cover"
                - "Set up a personal pot for your likely share"
            - name: Calibrating targets from three years of actual payouts
              description: |-
                ## Purpose
                After a few years the withdrawal log knows more than any estimate: which pots always run short, which never get touched and what the car really costs to keep on the road. Comparing three years of actual payouts with the targets you set resets every pot on evidence rather than hope.

                ## Milestones
                1. Three years of payouts totalled by pot.
                2. Actual spend compared with each pot's target.
                3. Pots running consistently over or under target adjusted.
                4. A short note of what the comparison showed saved with the ledger.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every pot target adjusted using at least three years of recorded payouts, with a note of the findings."
                cadence: cyclic
              tasks:
                - "Total three years of withdrawals for each pot"
                - "Compare each pot's actual spend with its target"
                - "Adjust targets for pots that run consistently over or under"
                - "Repeat the comparison with the latest year of payouts @recurring(yearly)"
---

# Big Purchase Sinking Funds

This area is for anyone tired of big, predictable costs landing as if they were emergencies: the car service, the annual insurance, the washing machine that finally gives up, next summer's holiday. It starts with the foundations (a three-year cost list, the yearly bills hiding in your statements, a target and date for every pot, an account with named pots and room in the budget), then the routines that keep pots filling and paying out cleanly, the skills of costing and timing big items, the decisions about funding order, finance offers and repairs, the named pots most households need, versions for variable incomes, couples, parents, small budgets, retirees and children, and finally the specialist work of replacement schedules and long-range forecasts.

What repeats is a payday transfer check, a monthly balance check, monthly payout records, a leftover sweep and a ninety-day look-ahead, a quarterly price check, and a yearly reset alongside a pay rise step-up. The Monthly budget and bills, Savings goal, Metrics log, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
