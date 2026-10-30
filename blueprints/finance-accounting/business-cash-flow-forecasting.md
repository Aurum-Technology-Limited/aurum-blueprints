---
id: finance-accounting.business-cash-flow-forecasting
name: Business Cash Flow Forecasting
description: "A 13-week cash forecast built from real receipts and payments, a minimum buffer, scenarios and a weekly rhythm that shows shortfalls early enough to act on them."
category: business
version: 1.0.0
tags: [finance-accounting, business-cash-flow-forecasting, small-business, founder, manager, cash-flow, 13-week-forecast, runway]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - meeting-notes
    - purchase-decision
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Business Cash Flow Forecasting
          description: "Building and updating a weekly or monthly cash flow forecast so owners and finance leads see shortfalls early and can act before they bite."
          projects:
            - name: Opening cash position across every account
              description: |-
                ## Purpose
                A forecast that starts from the wrong number is wrong every week after. Before any forecasting, list every bank account, savings pot, card, payment processor balance and overdraft the business holds, with today's balance and who can see it, so the opening position is one figure you can prove from statements.

                ## Milestones
                1. Every business bank, savings, card and payment processor account listed with its last four digits, currency and signatories.
                2. Each balance captured from the bank or provider on the same date, not from the accounting software.
                3. Undrawn overdraft and facility limits recorded in a separate column from cash.
                4. One dated opening cash figure agreed, with uncleared items shown separately.

                ## Notes
                Keep facility headroom out of the opening cash line. It is a source of funding, not cash, and mixing the two hides shortfalls until the facility is full.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated list of every business account with balances taken from statements on one day, totalling to a single opening cash figure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every bank, savings, card and payment processor account the business holds"
                - "Download each account's balance from the bank on the same day"
                - "Note overdraft and facility limits in a separate column from cash"
                - "Agree the single opening cash figure and write the date beside it"
            - name: Choosing a weekly or monthly forecast horizon
              description: |-
                ## Purpose
                Weekly forecasts over thirteen weeks catch the payroll, rent and tax dates that a monthly view smooths away, while a monthly twelve-month view suits planning and lender conversations. Deciding which one to run first, based on how close cash has come to running out, avoids building a model too coarse to warn you or too detailed to keep up.

                ## Milestones
                1. The lowest bank balance of the last six months found, with the date it happened.
                2. The business described as tight on cash, comfortable or strongly seasonal.
                3. A horizon and period length chosen: weekly for thirteen weeks, monthly for twelve months, or both.
                4. The owner of the forecast and the update day written down.

                ## Notes
                A sensible default for most small businesses is a 13-week weekly forecast. Add a monthly twelve-month view once the weekly one is trusted.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision naming the forecast horizon, period length, forecast owner and the day of the week or month it is updated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the lowest bank balance of the last six months from statements"
                - "Work out how many weeks of fixed costs that lowest balance would have covered"
                - "Choose the horizon and period length and note why"
                - "Name who owns the forecast and the day it is updated"
            - name: First 13-week cash flow forecast
              description: |-
                ## Purpose
                The 13-week forecast is the standard tool for seeing a cash shortfall a quarter before it arrives. Building the first version, with receipts and payments by week running from the opening balance to a closing balance, turns scattered knowledge of who owes what into a single line that shows when cash dips below the level you can live with.

                ## Milestones
                1. A sheet with thirteen weekly columns showing opening balance, receipts, payments and closing balance.
                2. Receipts and payments each grouped into no more than fifteen lines.
                3. Week one's opening balance equal to the verified opening cash figure.
                4. The lowest forecast week highlighted and compared with the minimum buffer.
                5. The first version saved with its date in the file name.

                ## Notes
                Build it rough, then refine. A complete forecast with honest estimates is more useful than a precise one that covers only six weeks.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated 13-week forecast with weekly opening and closing balances, starting from the verified opening cash figure, with its lowest week identified."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set up thirteen weekly columns starting from next Monday"
                - "Enter the verified opening cash figure in week one"
                - "Add receipts and payments lines grouped into categories"
                - "Highlight the lowest closing balance and the week it falls in"
            - name: Receipts forecast from open invoices and expected sales
              description: |-
                ## Purpose
                Receipts are the hardest line to forecast because customers pay when they choose, not on the due date. Building receipts from the aged debtors list, adjusted for each large customer's real payment habit, plus a cautious estimate of sales not yet invoiced, gives the forecast a top line you can defend to a co-owner or a bank.

                ## Milestones
                1. Every open invoice above a set value placed in the week it is likely to be paid, not the week it is due.
                2. Average days to pay over the last six months worked out for each of the ten largest customers.
                3. Sales not yet invoiced forecast on their own line and marked as less certain.
                4. Card, cash and online sales receipts forecast from recent weekly averages.

                ## Notes
                Keep invoiced and uninvoiced receipts on separate lines, so that when the forecast misses you can see which one went wrong. Chasing late payers belongs to collections work; here you only forecast when the money will land.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A receipts section in the forecast that places every large open invoice by expected payment week and shows uninvoiced sales on a separate line."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the aged debtors list from the accounting software"
                - "Work out the average days to pay for the ten largest customers"
                - "Place each large open invoice in the week it will probably be paid"
                - "Add a separate line for sales not yet invoiced"
            - name: Payments forecast from bills and fixed commitments
              description: |-
                ## Purpose
                Payments are more predictable than receipts but easier to forget: the annual insurance premium, the quarterly software bill, the loan repayment that leaves on the 28th. Listing every committed outflow by week, from supplier bills, standing orders, direct debits and contracts, makes the payments side complete rather than a guess.

                ## Milestones
                1. Twelve months of bank statements scanned for every regular outflow, including annual and quarterly ones.
                2. Open supplier bills placed in the week the payment run will actually pay them.
                3. Rent, loan repayments, leases and subscriptions entered on their real debit dates.
                4. Discretionary spend kept on its own line, separate from committed payments.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A payments section in the forecast listing every committed outflow by week, with discretionary spend shown separately from committed payments."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Scan a year of bank statements for every regular outflow"
                - "List direct debits and standing orders with their debit dates"
                - "Place open supplier bills in the week your payment run will pay them"
                - "Separate discretionary spend from committed payments in the forecast"
            - name: Payroll and employer costs in the cash forecast
              description: |-
                ## Purpose
                Payroll is usually the largest single outflow and it does not move, but the cash leaves on more than one date: net pay on payday, then income tax, social security and pension contributions on the dates that follow. Mapping each piece to its real week stops the forecast showing a comfortable month that is really two very heavy weeks.

                ## Milestones
                1. Net pay, employer taxes, employee deductions and pension contributions shown as separate lines.
                2. Each line placed on its actual payment date for the next thirteen weeks.
                3. Agreed pay rises, bonuses and new starters added from their effective dates.
                4. Any month with an extra weekly or fortnightly payday noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The forecast shows net pay, payroll taxes and pension contributions as separate lines on their real payment dates for thirteen weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the last three payroll summaries from the payroll system"
                - "Split each payroll into net pay, taxes and pension with their payment dates"
                - "Add agreed pay rises and planned starters from their start dates"
                - "Mark any month with an extra weekly or fortnightly payday"
            - name: Tax payment calendar inside the forecast
              description: |-
                ## Purpose
                Sales tax or VAT, income tax instalments, payroll taxes and withholding all leave the bank on fixed dates, and a missed one brings penalties on top of the bill. Putting every tax payment for the next year into the forecast, with an estimated amount and where the estimate came from, means tax is planned for rather than discovered.

                ## Milestones
                1. Every tax the business pays listed with its frequency and due date, confirmed with your accountant or the tax authority's published calendar.
                2. An estimated amount for each upcoming payment, with the basis of the estimate noted.
                3. Each payment placed in the forecast in the week before it falls due.
                4. Large annual or balancing payments flagged for a separate reserve.

                ## Notes
                Your accountant should confirm the dates and the estimates. The forecast records tax payments; it does not calculate the tax.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tax payment due in the next twelve months appears in the forecast with a due date and an estimate checked by the accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your accountant for every tax due date in the next twelve months"
                - "Estimate each payment from the last return and current trading"
                - "Enter each tax payment in the week before it is due"
                - "Add next year's tax due dates to the forecast @recurring(yearly)"
            - name: Minimum cash buffer policy
              description: |-
                ## Purpose
                Without a floor, every dip looks survivable until it is not. Agreeing a minimum cash balance, usually expressed as weeks of fixed costs, gives the forecast a line that triggers action when it is crossed and stops the business running close to zero out of habit.

                ## Milestones
                1. Monthly fixed costs calculated from the last six months: payroll, rent, debt repayments and core software.
                2. A buffer agreed in weeks of fixed costs, with the reasoning written down.
                3. The buffer drawn as a line on the forecast so any breach shows at a glance.
                4. What happens when the buffer is breached, and who decides, written in two sentences.

                ## Notes
                Many owners start with four to eight weeks of fixed costs and adjust from there. Seasonal businesses usually need more going into the quiet months.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written buffer in weeks of fixed costs, agreed by the owners, shown as a line on the forecast with a named decision maker for breaches."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up six months of fixed costs and work out the weekly average"
                - "Agree the buffer in weeks of fixed costs with your co-owner or accountant"
                - "Draw the buffer as a line on the forecast"
                - "Review the buffer against the latest fixed costs @recurring(quarterly)"
            - name: Forecast assumptions register
              description: |-
                ## Purpose
                Six months after building a forecast, nobody remembers why receipts were pushed back two weeks or why marketing spend was halved. A short register of every material assumption, with its source, owner and the date it was last checked, makes the forecast explainable to a co-founder, a lender or your future self.

                ## Milestones
                1. Each assumption listed with its value, source and owner.
                2. The five assumptions with the most cash riding on them marked.
                3. Each assumption linked to the forecast line it drives.
                4. A last-checked date beside every entry.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register listing every material forecast assumption with source, owner and a last-checked date no older than one quarter."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every assumption the forecast relies on"
                - "Record the source and owner for each one"
                - "Mark the five assumptions with the most cash riding on them"
                - "Recheck each assumption and update its last-checked date @recurring(quarterly)"
            - name: Twelve months of cash history analysed
              description: |-
                ## Purpose
                Last year's bank statements are the best evidence of how cash actually moves: which weeks receipts slump, how lumpy supplier payments are, when the balance bottoms out. Analysing them before forecasting forward gives every assumption a factual anchor and brings back seasonal patterns you may have stopped noticing.

                ## Milestones
                1. Twelve months of bank transactions exported and grouped into the forecast's receipts and payments categories.
                2. Monthly totals charted for each category.
                3. The three lowest balance points of the year explained.
                4. Seasonal patterns written up in a short note for the assumptions register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A twelve-month analysis of bank transactions by category, with a written explanation of the three lowest balance points."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export twelve months of transactions from each business bank account"
                - "Group transactions into the same categories as the forecast"
                - "Chart the monthly totals for receipts and payments"
                - "Write a short note explaining the three lowest balance points"
            - name: Weekly cash forecast roll-forward
              description: |-
                ## Purpose
                A forecast is only useful if it is updated, and weekly is the rhythm that catches problems while there is still time to act. Each week the oldest column drops off, a new week thirteen is added, the actual bank balance replaces the forecast opening, and the lowest point ahead is checked against the buffer.

                ## Milestones
                1. A fixed weekly slot of under an hour set aside for the update.
                2. The opening balance replaced by the actual bank balance every week.
                3. A new week thirteen added with its receipts and payments.
                4. Every update saved as a new dated version.
                5. Twelve consecutive weekly updates completed.

                ## Notes
                Start from the **Operational checklist** template so the update steps run in the same order every week, whoever does them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly forecast versions saved, each opening from the actual bank balance and covering a full thirteen weeks."
                cadence: rolling
              tasks:
                - "Set a recurring weekly slot for the forecast update"
                - "Write the update steps as a checklist in a fixed order"
                - "Roll the forecast forward one week from actual bank balances @recurring(weekly:mon)"
                - "Save each update as a new dated version"
            - name: Weekly forecast versus actual cash check
              description: |-
                ## Purpose
                The forecast learns only if you compare what you said would happen with what did. Checking last week's forecast receipts and payments against the bank, line by line, and noting the reason for any large gap, is what turns a set of guesses into a tool that gets more accurate each month.

                ## Milestones
                1. A variance column comparing last week's forecast with the actual for each line.
                2. A threshold set for which variances need a written reason.
                3. Each variance over the threshold labelled as timing or permanent.
                4. Permanent differences fed back into the assumptions register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks of line-by-line variance checks, with every variance over the threshold explained as timing or permanent."
                cadence: rolling
              tasks:
                - "Set the variance threshold that needs a written reason"
                - "Compare last week's forecast lines with the bank statement @recurring(weekly:tue)"
                - "Mark each large gap as a timing difference or a permanent one"
                - "Correct the assumption behind any permanent difference"
            - name: Forecast accuracy scorecard
              description: |-
                ## Purpose
                Owners and lenders trust a forecast that can show its track record. Measuring each month how far the four-week-ahead closing balance missed the actual balance, with receipts and payments measured separately, tells you whether the forecast is improving and which side needs the work.

                ## Milestones
                1. An accuracy measure chosen, such as the percentage gap between forecast and actual closing cash four weeks out.
                2. Receipts accuracy and payments accuracy measured separately.
                3. Six months of monthly accuracy figures logged.
                4. A target accuracy agreed and the trend reviewed against it.

                ## Notes
                Start from the **Metrics log** template. Receipts are usually the weaker side; if payments miss often, look for a missing recurring outflow.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly accuracy figures logged for receipts, payments and closing cash, compared with an agreed target."
                cadence: rolling
              tasks:
                - "Choose the accuracy measure and the four-week look-ahead point"
                - "Set up an accuracy log from the metrics log template"
                - "Log the month's forecast accuracy for receipts, payments and closing cash @recurring(monthly:10)"
                - "Agree a target accuracy after three months of results"
            - name: Monthly cash forecast review meeting
              description: |-
                ## Purpose
                Thirty minutes a month with the owner or leadership team is enough to put cash on the agenda before it becomes an emergency. The review covers the lowest balance ahead, the three biggest risks to the forecast and the decisions needed this month, so the forecast changes behaviour instead of sitting in a folder.

                ## Milestones
                1. A standing monthly review in the calendar with the people who control spend and sales invited.
                2. A one-page summary prepared for each meeting: lowest point, buffer headroom and top risks.
                3. Decisions and their owners recorded in the meeting notes.
                4. Last month's decisions checked off at the start of each review.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly cash reviews held, each with a one-page summary and written decisions that are followed up at the next meeting."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute cash review with the decision makers"
                - "Prepare a one-page summary of the lowest point and top risks"
                - "Hold the monthly cash forecast review and record decisions @recurring(monthly:6)"
                - "Check last month's decisions at the start of each review"
            - name: Daily cash position during tight periods
              description: |-
                ## Purpose
                When the forecast shows the balance within a few weeks of the buffer, a weekly update is too slow. Recording the cleared balance across all accounts each morning, with the large payments due out that day, gives a daily early warning and is easy to switch off again once the pressure passes.

                ## Milestones
                1. A written rule for when daily tracking starts and stops, linked to the buffer.
                2. A one-line daily log of cleared balances across all accounts.
                3. Each day's expected large payments and receipts noted beside the balance.
                4. Daily tracking stopped once the forecast clears the buffer for four weeks running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written start and stop rule for daily tracking, and a daily balance log kept for every working day the rule was active."
                cadence: rolling
              tasks:
                - "Write the rule for when daily cash tracking starts and stops"
                - "Record the morning cleared balance across all accounts @recurring(daily)"
                - "Note the day's expected large payments beside the balance"
            - name: Payment run check against the forecast
              description: |-
                ## Purpose
                Supplier payment runs are where cash leaves in the largest chunks, and a run approved without a glance at the forecast can push the balance under the buffer for a week. Checking each proposed run against forecast headroom before release, and holding discretionary items when headroom is thin, keeps payments and cash planning in step.

                ## Milestones
                1. A step added to the payment run approval: compare the run total with forecast headroom.
                2. A list of payments that are never held, such as payroll and tax, and those that can be.
                3. Each held payment recorded with its new forecast week.
                4. No week in the last quarter where an approved run broke the buffer.

                ## Notes
                Holding payments is a timing tool, not a strategy. Tell a supplier before you pay late rather than after.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every payment run in a quarter checked against forecast headroom before release, with no run breaking the buffer."
                cadence: rolling
              tasks:
                - "Add a forecast headroom check to the payment run approval step"
                - "List the payments that can never be held"
                - "Check the proposed payment run total against forecast headroom @recurring(weekly:thu)"
                - "Move any held payment to its new week in the forecast"
            - name: Large expected receipts confidence check
              description: |-
                ## Purpose
                Five or ten receipts often make up most of a month's cash in, and a single one slipping can open a gap. Checking each week where the largest expected receipts stand (approved for payment, disputed, waiting for a purchase order) lets you rate each one and move it in the forecast before it is late.

                ## Milestones
                1. The largest expected receipts for the next four weeks listed every week.
                2. Each one rated as confirmed, likely or uncertain.
                3. Uncertain receipts moved to a later week or carried only in the downside scenario.
                4. A running record of how often confirmed receipts arrived in the forecast week.

                ## Notes
                Pass anything already overdue to whoever handles collections. This check is about forecast confidence, not chasing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The largest expected receipts are rated each week for eight weeks, with at least four in five confirmed receipts landing in their forecast week."
                cadence: rolling
              tasks:
                - "List the largest expected receipts for the next four weeks"
                - "Check where each large expected receipt stands with the customer @recurring(weekly:wed)"
                - "Rate each one as confirmed, likely or uncertain"
                - "Move uncertain receipts to a later week in the forecast"
            - name: Month-end tie-out of forecast to the books
              description: |-
                ## Purpose
                Between monthly closes, the forecast and the ledger can drift apart: an account missed, a transfer counted twice, a payment processor balance left out. Tying the forecast's month-end cash to the reconciled bank balances in the accounts each month catches structural errors that weekly updates do not.

                ## Milestones
                1. The forecast's month-end closing cash compared with the reconciled balances in the accounts.
                2. Any difference explained and corrected in the forecast structure.
                3. Transfers between the business's own accounts netting to zero.
                4. Three consecutive months with no unexplained difference.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive month-ends where forecast closing cash agrees with the reconciled bank balances, or every difference is explained."
                cadence: rolling
              tasks:
                - "Get the reconciled bank balances once the month is closed"
                - "Tie the forecast month-end cash to the reconciled balances @recurring(monthly:9)"
                - "Check that transfers between your own accounts net to zero"
                - "Fix the forecast structure behind any unexplained difference"
            - name: Cash forecast summary for lenders and investors
              description: |-
                ## Purpose
                Banks with facilities and investors with board seats often ask for a cash view, and a summary sent before they ask builds more trust than a scramble afterwards. A one-page monthly summary with the closing balance, the lowest point ahead, the main variance and any action taken keeps funders informed on your terms.

                ## Milestones
                1. Recipients listed with what each has asked for, including any facility reporting terms.
                2. A one-page summary format agreed.
                3. The summary sent on a fixed day each month.
                4. Questions from recipients logged with the answers given.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A one-page cash summary sent to every lender and investor on the agreed day for three consecutive months."
                cadence: rolling
              tasks:
                - "List who receives cash information and what each has asked for"
                - "Draft a one-page summary format with closing cash and lowest point"
                - "Send the cash forecast summary to lenders and investors @recurring(monthly:15)"
                - "Log each question received and the answer given"
            - name: Cash shortfall early warning triggers
              description: |-
                ## Purpose
                Most cash crises were visible in the forecast weeks before anyone acted, because nobody had agreed which number should prompt a response. Writing down three or four triggers, such as the lowest week falling under the buffer or receipts missing by a fifth two weeks running, with who acts on each, makes the response automatic.

                ## Milestones
                1. Three or four triggers written, each with a number and a time window.
                2. A named person and a first action for each trigger.
                3. A trigger check built into every weekly update.
                4. Each breach recorded with the action taken and its result.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of three or four numeric triggers, each with a named owner and first action, checked in every weekly update."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three or four triggers with numbers and time windows"
                - "Name the person and first action for each trigger"
                - "Add a trigger check to the end of the weekly update"
                - "Record each trigger breach and what was done"
            - name: Direct and indirect cash forecasting methods
              description: |-
                ## Purpose
                Short-term forecasts are usually built directly, from expected receipts and payments, while longer ones are derived indirectly from profit, adjusted for working capital and non-cash items. Understanding both, and where each is reliable, stops you stretching a 13-week receipts model into a two-year plan it cannot support.

                ## Milestones
                1. The difference between the direct and indirect methods written in your own words.
                2. One worked example of each built from your own figures.
                3. The horizon at which you switch from direct to indirect decided.
                4. Each of your forecasts labelled with the method it uses.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One month forecast both directly and indirectly from your own figures, with the switching horizon written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read a reputable guide to direct and indirect cash forecasting"
                - "Build a one-month direct forecast from your own receipts and payments"
                - "Derive the same month indirectly from profit and balance sheet movements"
                - "Write down the horizon where you switch methods"
            - name: Profit versus cash in your own accounts
              description: |-
                ## Purpose
                Profitable businesses run out of money when cash leaves for stock, loan principal, tax and equipment that the profit and loss either spreads over time or leaves out. Walking through last quarter's profit and seeing exactly where the cash went makes forecasting instinctive and arguments with co-owners shorter.

                ## Milestones
                1. Last quarter's profit set beside last quarter's change in the bank balance.
                2. The difference explained in no more than eight lines: debtors, stock, creditors, loan repayments, capital spend, tax and owner drawings.
                3. The biggest single cause of the gap identified.
                4. The bridge explained to a co-owner or manager without notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written bridge from last quarter's profit to the change in cash, with every line quantified and the largest cause named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note last quarter's profit and the change in the bank balance"
                - "List each reason the two numbers differ"
                - "Quantify the biggest single cause of the gap"
                - "Explain the bridge to a co-owner or manager"
            - name: Reading the statement of cash flows
              description: |-
                ## Purpose
                Lenders read the statement of cash flows in your annual accounts early, because it splits cash into operating, investing and financing activity. Learning to read your own last two statements shows where the business generates and consumes cash, and lets you frame the forecast in the language a lender will use.

                ## Milestones
                1. The last two statements of cash flows found in the annual accounts.
                2. Operating, investing and financing totals noted for each year.
                3. The largest item in each section explained.
                4. Every forecast line mapped to one of the three sections.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of the last two years' operating, investing and financing cash, with each forecast line mapped to a section."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the cash flow statements in your last two sets of accounts"
                - "Note the operating, investing and financing totals for each year"
                - "Ask your accountant to explain any item you do not understand"
                - "Map each forecast line to one of the three sections"
            - name: Building a forecast spreadsheet that does not break
              description: |-
                ## Purpose
                Most forecast errors are spreadsheet errors: a formula overwritten with a typed number, a row missed from a total, a link still pointing at last month's file. Learning a few structural habits (inputs separated from calculations, one formula per row, checks that flag when totals disagree) keeps the forecast trustworthy as it grows.

                ## Milestones
                1. Inputs, calculations and outputs on separate, clearly labelled tabs.
                2. Typed numbers removed from formula rows, with remaining inputs colour coded.
                3. A check row confirming that opening plus receipts minus payments equals closing in every week.
                4. A file version naming rule in use.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The forecast file has separate input and calculation tabs, colour-coded inputs and a check row that passes for every week."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Move every input onto a separate assumptions tab"
                - "Colour code input cells differently from formula cells"
                - "Add a check row that flags when the balance does not roll forward"
                - "Agree a file naming rule with the date and version number"
            - name: Customer payment behaviour analysis
              description: |-
                ## Purpose
                Payment terms say thirty days; your customers often say otherwise. Learning to measure each customer's actual days to pay, and how it shifts by month, invoice size and the customer's own quarter end, gives receipts timing grounded in evidence rather than in the terms printed on the invoice.

                ## Milestones
                1. Twelve months of paid invoices exported with invoice and payment dates.
                2. Average and spread of days to pay worked out for each major customer.
                3. Customers grouped into prompt, steady and slow payers.
                4. Receipts timing rules in the forecast updated to use the groups.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every major customer assigned to a payment group based on twelve months of actual days to pay, with forecast timing rules updated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export a year of paid invoices with invoice and payment dates"
                - "Calculate days to pay for each invoice"
                - "Group customers into prompt, steady and slow payers"
                - "Update the receipts timing rules in the forecast"
            - name: Presenting the cash forecast to non-finance colleagues
              description: |-
                ## Purpose
                Sales leads, operations managers and co-founders make most of the decisions that move cash, but a forty-row spreadsheet means little to them. Practising a one-chart, three-message way of presenting the forecast gets the people who control spend and receipts acting on it.

                ## Milestones
                1. A single chart showing the forecast balance against the buffer for thirteen weeks.
                2. Three plain-language messages drafted for each update.
                3. The presentation given to at least two colleagues and their questions noted.
                4. The format adjusted after their feedback.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-chart forecast summary presented to at least two non-finance colleagues, with the format revised after their questions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Build a single chart of forecast balance against the buffer"
                - "Ask the agent to draft three plain-language messages from this week's forecast"
                - "Present the chart to two colleagues and note their questions"
                - "Adjust the format based on what confused them"
            - name: Choosing a cash forecasting tool
              description: |-
                ## Purpose
                Spreadsheets work well up to a point, then version control, bank data imports and scenario copies become the job. Comparing a dedicated forecasting app, the accounting software's own forecasting feature and an improved spreadsheet against the same criteria tells you whether moving is worth the cost and set-up time.

                ## Milestones
                1. Requirements written: bank connections, weekly view, scenarios, number of users and budget.
                2. Three options shortlisted, including staying on a spreadsheet.
                3. Each option tested on your own data through a trial or demo.
                4. A decision recorded with annual cost and migration time.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between three options, each tested on the business's own data and scored against the same written requirements."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the five requirements the tool must meet"
                - "Shortlist three options including improving the current spreadsheet"
                - "Trial each option on one month of your own data"
                - "Record the decision with annual cost and set-up time"
            - name: Base, downside and severe cash scenarios
              description: |-
                ## Purpose
                One forecast line hides the range of outcomes. Building a downside case (the top customer pays a month late, sales fall by a fifth) and a severe case beside the base shows how deep a shortfall could go and the week it would hit, which is what decides whether you need a facility arranged now.

                ## Milestones
                1. Three scenarios built from the same structure, each with written assumptions.
                2. The lowest balance and its week shown for each scenario.
                3. The gap below the buffer in the downside and severe cases quantified.
                4. Actions that would close each gap listed.

                ## Notes
                Drive scenarios from a few switches on the assumptions tab, not from three separate copies of the file that drift apart.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Base, downside and severe scenarios in one file, each showing its lowest balance and week, with the gap below the buffer quantified."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the assumptions for a downside and a severe case"
                - "Build both scenarios from switches on the assumptions tab"
                - "Record the lowest balance and week in each scenario"
                - "Rerun the downside scenario with current figures @recurring(quarterly)"
            - name: Cash shortfall response playbook
              description: |-
                ## Purpose
                When the forecast shows a gap, the worst time to work out your options is the week it arrives. A playbook that ranks the levers in advance (pausing discretionary spend, bringing receipts forward, drawing on a facility, asking the tax authority for time to pay, owner funding), with how much each could raise and how fast, lets you act calmly and early.

                ## Milestones
                1. Every available lever listed with the cash it could raise and how many weeks it takes.
                2. Levers ranked by cost and by harm to the business.
                3. Contacts for the bank, accountant and key suppliers written in.
                4. The playbook tested against the downside scenario.

                ## Notes
                Talk to your accountant early if a gap is large or lasting. Directors' duties can change when a company may be unable to pay its debts, and the rules differ by country.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written playbook ranking every short-term cash lever by amount, speed and cost, tested against the downside scenario."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every lever for raising or saving cash in the short term"
                - "Estimate how much each lever raises and how fast"
                - "Rank the levers by cost and harm to the business"
                - "Test the playbook against the downside scenario"
            - name: Funding decision for a forecast gap
              description: |-
                ## Purpose
                Once the downside scenario shows a gap below the buffer, the choice is between arranging funding before it is needed, changing timing, or accepting the risk. Preparing that decision with the forecast, the size and length of the gap and the options your bank and accountant suggest gets you a clear answer while lenders still see a healthy business.

                ## Milestones
                1. The size, timing and duration of the forecast gap stated in one paragraph.
                2. Funding and timing options gathered from your bank and accountant.
                3. Each option compared on cost, speed and conditions.
                4. A decision recorded with the forecast version that supported it.

                ## Notes
                Banks lend most readily when a forecast shows the gap months ahead. Asking in the middle of a shortfall is slower and usually costs more.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded funding decision comparing at least two options on cost, speed and conditions, with the supporting forecast attached."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write one paragraph on the size, timing and length of the gap"
                - "Ask your bank and accountant which options suit a gap of that shape"
                - "Compare the options on cost, speed and conditions"
                - "Record the decision and attach the forecast that supported it"
            - name: Large purchase affordability check
              description: |-
                ## Purpose
                Big one-off purchases look affordable against today's balance and can still break the buffer in week nine. Running any spend above a set threshold through the forecast, paid upfront and on finance, before committing shows whether, when and how the business can afford a new van, a fit-out or a three-year software contract.

                ## Milestones
                1. A spending threshold set above which a forecast check is required.
                2. The purchase modelled as an upfront payment and as financed instalments.
                3. The lowest forecast balance compared with the buffer in each case.
                4. A buy now, wait or finance decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every purchase above the threshold in a year has a recorded forecast check comparing upfront and financed options against the buffer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set the spend threshold that needs a forecast check"
                - "Model the purchase paid upfront in the forecast"
                - "Model the same purchase on finance or instalments"
                - "Record whether to buy now, wait or finance it"
            - name: Customer concentration risk in receipts
              description: |-
                ## Purpose
                If one customer provides a third of your receipts, their accounts department effectively controls your cash. Measuring how concentrated forecast receipts are, and modelling the top customer paying a month late, shows how exposed the business is and when that dependence needs a plan.

                ## Milestones
                1. Each customer's share of the next thirteen weeks of receipts calculated.
                2. The top three customers' combined share recorded.
                3. The forecast rerun with the largest customer paying four weeks late.
                4. An action agreed for any customer above a set share.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Customer shares of forecast receipts calculated each quarter, with a late-payment case for the largest customer and a written share limit."
                cadence: cyclic
              tasks:
                - "Calculate each customer's share of forecast receipts"
                - "Rerun the forecast with the largest customer paying four weeks late"
                - "Agree the share at which a single customer becomes a risk"
                - "Re-rank customers by share of forecast receipts @recurring(quarterly)"
            - name: Forecast miss root cause review
              description: |-
                ## Purpose
                Every forecast will be badly wrong at some point, and the miss is most useful in the fortnight after it happens. A short review of any week where closing cash missed by more than the agreed threshold, asking what was assumed, what happened and what will change, steadily removes the forecast's blind spots.

                ## Milestones
                1. A threshold for a miss large enough to trigger a review.
                2. Each review written as a short note: assumed, happened, cause, change.
                3. The fix applied to the forecast structure or assumptions.
                4. Patterns across reviews summarised after six months.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every miss above the threshold in six months has a written root cause note and a fix applied to the forecast."
                cadence: rolling
              tasks:
                - "Set the size of miss that triggers a root cause review"
                - "Write a short note on the most recent large miss"
                - "Apply the fix to the assumption or structure that caused it"
                - "Summarise patterns across reviews after six months"
            - name: Bank data imported straight into the forecast
              description: |-
                ## Purpose
                Typing balances and transactions into the forecast every week is slow and invites mistakes. Connecting bank feeds or a scheduled export so actuals land in the forecast automatically, mapped to the same categories, cuts the weekly update down to the parts that need judgement.

                ## Milestones
                1. Every account's actuals available through a bank feed or a standard export.
                2. A mapping from bank transaction descriptions to forecast categories.
                3. Actuals flowing into the forecast without retyping.
                4. The weekly update time measured before and after the change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Actuals for every account reach the forecast without manual retyping, and the weekly update time is measured before and after."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check which accounts offer a bank feed or scheduled export"
                - "Build a mapping from transaction descriptions to forecast categories"
                - "Connect the feed or import to the forecast actuals tab"
                - "Time the weekly update before and after the change"
            - name: Year-end tax bill cash reserve
              description: |-
                ## Purpose
                The annual income tax bill is often the largest single payment of the year, and it lands months after the profit that caused it has been spent. Estimating it with your accountant, putting it in the forecast and setting aside a monthly amount in a separate account means the bill is paid from a reserve, not from the overdraft.

                ## Milestones
                1. An estimate of the next income tax bill and its due date from your accountant.
                2. The payment entered in the forecast in the week before it falls due.
                3. A monthly set-aside amount agreed and a separate reserve account in use.
                4. The reserve on track to cover the bill a month before the due date.

                ## Notes
                Ask your accountant to update the estimate halfway through the year. A good or bad first half changes the bill more than most owners expect.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A separate tax reserve holds enough to cover the accountant's estimate of the next income tax bill one month before it is due."
                cadence: cyclic
              tasks:
                - "Ask your accountant for an estimate of the next income tax bill"
                - "Enter the tax payment in the forecast before its due date"
                - "Open or label a separate reserve account for tax"
                - "Move the monthly tax reserve amount into the reserve account @recurring(monthly:20)"
            - name: Holiday shutdown cash plan
              description: |-
                ## Purpose
                Businesses that close over the year-end holidays or for a summer break often see receipts stop for three weeks while rent, payroll and bonuses keep leaving. Planning the shutdown in the forecast, with earlier invoicing, a check of payroll dates and a balance target before closing, avoids starting the new year in the overdraft.

                ## Milestones
                1. The shutdown dates and the weeks of reduced receipts marked in the forecast.
                2. Payroll, rent and holiday bonus payments placed on their real dates.
                3. Final invoices before the break scheduled early enough to be paid before it.
                4. A balance target set for the last trading day.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The shutdown is modelled in the forecast with a balance target for the last trading day, and that target is met or the gap explained."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark the shutdown dates and quiet weeks in the forecast"
                - "Check the payroll and rent dates that fall during the break"
                - "Schedule final invoices early enough to be paid before closing"
                - "Set the balance target for the last trading day"
            - name: Five-payday months in a weekly payroll
              description: |-
                ## Purpose
                Weekly payrolls have four months a year with five paydays, and fortnightly ones have two months with three, which can take a quarter or a half more payroll cash out than a normal month. Spotting these months a year ahead lets you plan receipts and hold back discretionary spend before they arrive.

                ## Milestones
                1. Every month with an extra payday in the next twelve months identified.
                2. The extra payroll cost for each one worked out, including employer taxes.
                3. Those months highlighted in the forecast with headroom checked.
                4. Discretionary spend planned around them.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every extra-payday month in the coming year is highlighted in the forecast with its additional cost and headroom against the buffer."
                cadence: cyclic
              tasks:
                - "List the months with an extra payday over the next year"
                - "Work out the extra cost of each one including employer taxes"
                - "Highlight those months in the forecast and check headroom"
                - "Check the coming year's extra payday months @recurring(yearly)"
            - name: Premises move cash plan
              description: |-
                ## Purpose
                Moving premises brings a deposit, fit-out, removal costs and often a month or two of paying rent on both sites. Mapping each cost to its week in the forecast before signing, with a contingency for overruns, shows whether the timing works and what has to be in place first.

                ## Milestones
                1. Every move cost listed with its likely payment date: deposit, fit-out, removal, overlapping rent and new equipment.
                2. A contingency of at least a tenth added to the fit-out estimate.
                3. The move modelled in the forecast before the lease is signed.
                4. The lowest balance during the move checked against the buffer.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The full cost of the move, including overlapping rent and a contingency, is in the forecast before signing, with the lowest balance checked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every cost of the move with its likely payment date"
                - "Add a contingency to the fit-out estimate"
                - "Model the move in the forecast before signing the lease"
                - "Check the lowest balance during the move against the buffer"
            - name: Cash plan for a large contract start
              description: |-
                ## Purpose
                Winning a big contract can be the moment cash runs out: staff, materials and subcontractors are paid for weeks before the first invoice is settled. Forecasting the mobilisation period, from start date to first receipt, shows the peak funding need and whether a deposit, staged billing or a facility is needed before you sign.

                ## Milestones
                1. The contract's costs and billing schedule set out week by week.
                2. The gap between first costs and first receipts measured.
                3. The peak funding need shown in the forecast.
                4. A deposit or staged billing proposed before signing where the gap is large.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The contract's peak funding need is shown in the forecast before signing, with a recorded decision on deposit, staged billing or funding."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set out the contract's weekly costs and billing dates"
                - "Measure the weeks between first costs and first receipts"
                - "Add the contract to the forecast and find the peak funding need"
                - "Propose a deposit or staged billing if the gap is large"
            - name: Annual renewals and lumpy payments calendar
              description: |-
                ## Purpose
                Insurance premiums, licences, professional subscriptions, software contracts and equipment servicing often renew once a year and cluster in the same few months. A calendar of every lumpy payment, with amount and month, stops them surprising the forecast and shows which ones could move to monthly billing.

                ## Milestones
                1. Every annual and quarterly payment listed with amount, month and renewal notice period.
                2. Months where lumpy payments cluster identified.
                3. Each item entered in the forecast in its real week.
                4. Monthly billing options checked for the largest items.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar of every annual and quarterly payment with amounts and months, with each item in the forecast in its real week."
                cadence: cyclic
              tasks:
                - "Pull annual and quarterly payments from the supplier history in the accounting software"
                - "Record each one with amount, month and notice period"
                - "Ask the largest suppliers whether monthly billing is available"
                - "List the coming year's renewals and their months @recurring(yearly)"
            - name: Founder runway forecast
              description: |-
                ## Purpose
                For an early-stage company burning cash, the key question is how many months until the money runs out and when the next round must close. A monthly runway forecast built from net burn, committed hires and planned spend, rather than today's balance divided by last month's burn, gives founders a date they can plan around.

                ## Milestones
                1. Net monthly burn calculated from the last three months of bank data.
                2. Committed hires and contracts added from their start dates.
                3. A runway date shown for the base and downside cases.
                4. The runway date updated monthly and shared with co-founders.

                ## Notes
                Runway shrinks faster than people expect once hiring starts. Recalculate after every hiring decision, not only at month end.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A runway date for base and downside cases, updated every month for six months and shared with all co-founders."
                cadence: rolling
              tasks:
                - "Calculate net monthly burn from the last three months of bank data"
                - "Add committed hires and contracts from their start dates"
                - "Show the runway date for base and downside cases"
                - "Update months of runway from the latest bank balance @recurring(monthly:3)"
            - name: Fundraising start date from the runway
              description: |-
                ## Purpose
                Raising money usually takes longer than founders plan, and starting with three months of runway left puts you in the weakest negotiating position. Working back from the forecast runway date, with a realistic time to close plus a safety margin, sets the date to begin and the cash level that should trigger it.

                ## Milestones
                1. A realistic time to close a round at your stage agreed with advisers or investors.
                2. A safety margin added before the runway date.
                3. A start date and a matching cash trigger written down.
                4. The start date checked each month against the updated runway.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written fundraising start date and cash trigger, worked back from the runway date with a stated time to close and safety margin."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask two experienced founders or advisers how long their last raise took"
                - "Work back from the runway date to a fundraising start date"
                - "Set the cash balance that triggers the start of the raise"
                - "Share the start date and trigger with co-founders"
            - name: Thirty-minute weekly forecast for a sole owner
              description: |-
                ## Purpose
                Owners running the business alone rarely have a finance team or a free afternoon, so the forecast has to fit into a Friday half hour. A simplified weekly forecast with five receipt lines, eight payment lines and one buffer check gives most of the warning of a full model for a fraction of the upkeep.

                ## Milestones
                1. A one-tab forecast with no more than fifteen lines.
                2. A fixed half hour each week, with the steps written on one card.
                3. Eight consecutive weekly updates done in under forty minutes each.
                4. One decision made because of what the forecast showed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly updates of a one-tab forecast, each completed in under forty minutes."
                cadence: rolling
              tasks:
                - "Cut the forecast down to fifteen lines on a single tab"
                - "Write the weekly steps on one card"
                - "Update the one-tab forecast in a thirty-minute slot @recurring(weekly:fri)"
                - "Note any decision the forecast changed"
            - name: Seasonal business twelve-month cash curve
              description: |-
                ## Purpose
                Tourism, retail, events and farm businesses earn most of their cash in a few months and spend steadily all year. A twelve-month curve showing the peak, the trough and the stock or staff build before the season tells you how much must be banked in the good months to carry the quiet ones.

                ## Milestones
                1. Up to three years of monthly receipts and payments laid out to show the seasonal shape.
                2. The trough month and its forecast balance identified.
                3. Pre-season stock and staffing costs placed in the months they are paid.
                4. A target balance for the end of the peak season that covers the trough plus the buffer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month cash curve with the trough identified and a written end-of-season balance target that covers the trough and buffer."
                cadence: cyclic
              tasks:
                - "Lay out up to three years of monthly receipts and payments side by side"
                - "Mark the trough month and its forecast balance"
                - "Place pre-season stock and staff costs in their payment months"
                - "Revisit the seasonal cash curve before each peak season @recurring(yearly)"
            - name: Taking over the cash forecast from someone else
              description: |-
                ## Purpose
                Managers often inherit a forecast when a finance lead leaves or a founder hands it over, along with undocumented links, hidden assumptions and a file nobody else can update. A structured handover, in which the outgoing owner walks through every tab and you run two updates together, stops the first month being guesswork.

                ## Milestones
                1. A walk-through of every tab, input and link with the outgoing owner, recorded in notes.
                2. Hidden assumptions and manual adjustments listed.
                3. Two weekly updates run jointly.
                4. One update run alone and checked by the outgoing owner or a reviewer.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Handover notes covering every tab and manual adjustment, two joint updates and one solo update signed off by a reviewer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a walk-through of the forecast with the outgoing owner"
                - "List every manual adjustment and hidden assumption found"
                - "Run two weekly updates together"
                - "Run one update alone and have it checked"
            - name: 13-week survival forecast in a cash crisis
              description: |-
                ## Purpose
                When the bank balance is close to zero and suppliers are pressing, the forecast becomes the main tool for keeping the business alive and for showing creditors, lenders and advisers a credible plan. A survival forecast built conservatively, reviewed daily for the first weeks and shared early with a professional adviser, gives the best chance of trading through.

                ## Milestones
                1. A conservative 13-week forecast with only confirmed receipts in the base case.
                2. Every payment classed as essential, deferrable or negotiable.
                3. Your accountant or an insolvency adviser briefed with the forecast.
                4. Payments approved daily against the forecast until the balance stabilises.

                ## Notes
                Get professional advice early. If the company may be unable to pay its debts, directors' duties can shift towards creditors, and the rules vary by country.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conservative 13-week survival forecast exists, has been reviewed with a professional adviser and is used to approve payments every day."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Rebuild the forecast with only confirmed receipts in the base case"
                - "Class every payment as essential, deferrable or negotiable"
                - "Book a meeting with your accountant or an insolvency adviser"
                - "Approve each day's payments against the survival forecast @recurring(daily)"
            - name: Cash needs of a fast-growing business
              description: |-
                ## Purpose
                Growth consumes cash: every extra sale needs stock, staff or customer credit to be funded before the customer pays. Modelling how cash moves as sales grow by a quarter or a half, using your own debtor days and margins, shows the growth rate the business can fund itself and the point where outside funding is needed.

                ## Milestones
                1. Cash tied up per extra unit of monthly sales calculated from your own figures.
                2. The forecast run at three growth rates.
                3. The highest self-funded growth rate identified.
                4. The funding need at the planned growth rate written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The forecast run at three growth rates, with the highest self-funded rate and the funding need at the planned rate written down."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Work out how much cash each extra thousand of monthly sales ties up"
                - "Run the forecast at three different growth rates"
                - "Find the highest growth rate the business can fund itself"
                - "Write down the funding need at the planned growth rate"
            - name: Milestone-billed projects in the forecast
              description: |-
                ## Purpose
                Agencies, contractors and consultancies paid on milestones see cash arrive in large, uneven lumps that slip whenever a client sign-off does. Forecasting each project's milestones on a realistic payment week, based on how long sign-offs really take, makes the receipts line reflect delivery rather than the contract schedule.

                ## Milestones
                1. Every active project's milestones listed with contract date and realistic payment week.
                2. The average delay between milestone delivery and payment worked out.
                3. Milestone receipts placed in the forecast on their realistic weeks.
                4. A downside view showing the two largest milestones slipping by a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active project's milestone receipts are in the forecast on realistic weeks, with a downside view for the two largest slipping."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every active project's milestones and contract dates"
                - "Work out how long sign-off and payment usually take after delivery"
                - "Place milestone receipts in their realistic weeks"
                - "Model the two largest milestones slipping by a month"
            - name: Group cash forecast across several companies
              description: |-
                ## Purpose
                Groups with an operating company, a property company and a holding company often have cash in one entity and the shortfall in another, and moving money between them has tax and legal consequences. A forecast by entity, with intercompany transfers shown as planned flows agreed with your accountant, shows where cash sits and what can properly move.

                ## Milestones
                1. A forecast tab for each entity built from the same structure.
                2. Intercompany transfers shown as matching flows out of one entity and into another.
                3. Group closing cash calculated with intercompany flows netting to zero.
                4. Which transfers are allowed, and how they are documented, confirmed with your accountant.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly forecast for each entity in the group, with intercompany flows netting to zero and the transfer rules confirmed by the accountant."
                cadence: rolling
              tasks:
                - "Build a forecast tab for each company in the group"
                - "Show each intercompany transfer as matching flows out and in"
                - "Ask your accountant which transfers need loan agreements or board approval"
                - "Collect each entity's weekly cash update @recurring(weekly:tue)"
            - name: Multi-currency cash forecast
              description: |-
                ## Purpose
                Businesses paid in one currency and paying in another can see a shortfall appear from exchange movements alone. Forecasting each currency in its own column, converting to the reporting currency at a stated rate and showing the effect of a ten percent move, separates trading cash from currency effects.

                ## Milestones
                1. Receipts and payments forecast in their original currencies.
                2. A stated conversion rate and its date used for the total.
                3. The forecast rerun at a ten percent adverse rate move.
                4. Foreign currency needed for upcoming payments flagged by week.

                ## Notes
                Hedging decisions belong with whoever manages treasury and with your bank. The forecast shows the exposure; it does not choose the response.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The forecast shows each currency separately, converts at a stated dated rate and includes a ten percent adverse rate case."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Split receipts and payments by currency"
                - "Record the conversion rate and date used for the total"
                - "Rerun the forecast at a ten percent adverse rate move"
                - "Flag the foreign currency needed for upcoming supplier payments"
---

# Business Cash Flow Forecasting

This area is for owners, founders and managers who need to know whether the bank balance will cover what is coming, not only what it shows today. It starts with the foundations (an opening cash figure you can prove, a first 13-week forecast, receipts, payments, payroll and tax on their real dates, and a minimum buffer), then the weekly and monthly routines that keep the forecast current, the skills behind good forecasts, decisions about tools, scenarios and funding, dated events such as a holiday shutdown or a large contract start, situations from a founder's runway to a cash crisis, and finally group and multi-currency forecasting.

What repeats is the Monday roll-forward, a weekly check of forecast against actual, a weekly look at payment runs and large expected receipts, the monthly review meeting and accuracy log, the month-end tie-out to the books, quarterly scenario and assumption refreshes, and the yearly renewals and tax calendar. The Operational checklist, Metrics log, Meeting notes and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
