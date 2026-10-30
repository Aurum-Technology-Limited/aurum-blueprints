---
id: personal-finance.spending-tracking-categorisation
name: Spending Tracking & Categorisation
description: "Every transaction captured and categorised: a full map of accounts, a category list and rulebook, weekly and month-end routines, tags and dashboards, and the advanced tools that show where the money really goes."
category: personal
version: 1.0.0
tags: [personal-finance, spending-tracking-categorisation, everyone, expense-tracking, spending-categories, transactions, spending-baseline]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Spending Tracking & Categorisation
          description: "Tracking every transaction and categorising spending to see where money actually goes each month."
          projects:
            - name: Choosing how you will track spending
              description: |-
                ## Purpose
                Most people give up on spending tracking within a month because the method does not fit how they pay: a notebook fails someone who taps a card twenty times a week, and an app with automatic feeds frustrates someone who wants to see every line. Choosing between a budgeting app, a spreadsheet fed by statement exports or a paper log, against how you actually spend, decides whether the habit lasts past the second month.

                ## Milestones
                1. A count of last month's transactions by payment type: card, cash, transfer and direct debit.
                2. Three tracking methods compared on cost, import options, privacy and minutes needed per week.
                3. One method chosen, with the reason written in a sentence.
                4. The chosen tool set up and saved where you will find it on both phone and computer.

                ## Notes
                Start from the **Purchase decision** template. A free spreadsheet is a sound default if you are unsure; you can move to an app later without losing history.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tracking method is chosen against written criteria, the reason is recorded and the tool is set up ready for the first import."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count last month's transactions on your main account statement"
                - "List three tracking methods you would realistically keep using"
                - "Score each method on cost, bank import, privacy and weekly time"
                - "Set up the chosen tool and bookmark it on your phone"
            - name: Map of every account, card and wallet
              description: |-
                ## Purpose
                Spending hides in places the main bank account never shows: a credit card kept for online shopping, a PayPal balance, a store card, a prepaid travel card, an instalment app, gift cards and cash. Listing every source money leaves from is the step that stops a tracker reporting 70 percent of your spending and calling it the whole picture.

                ## Milestones
                1. A written list of every current account, credit card, store card, payment app and prepaid card in the household.
                2. For each one, how its transactions can be exported: CSV, PDF statement or not at all.
                3. Dormant accounts marked, with a note on whether closing them would simplify tracking.
                4. The list saved next to the tracker, without any card numbers or passwords on it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of every payment source in the household exists, with an export method recorded for each one."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down every card in your wallet and every payment app on your phone"
                - "Add accounts that pay direct debits but have no card attached"
                - "Note how each account lets you export its transactions"
                - "Mark dormant accounts you could close to make tracking simpler"
            - name: Ninety days of transactions in one place
              description: |-
                ## Purpose
                Three months is the shortest window that smooths out a birthday, a car repair or a five-week month. Downloading 90 days of statements from every account on your map and putting them into one sheet or app gives you the raw material for every later category decision, and shows how long the export step really takes.

                ## Milestones
                1. A CSV or statement for every account covering the same 90 days.
                2. All transactions in one file or app with matching date, payee, amount and account columns.
                3. Duplicate rows from overlapping downloads removed.
                4. The transaction count and total money out for the 90 days written at the top.

                ## Notes
                Use CSV wherever the bank offers it. Copying PDF statements by hand is slow, so do any PDF-only account last.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One file or app holds every transaction from every account for the same 90 days, with no duplicate rows."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the last 90 days from your main current account as CSV"
                - "Repeat the download for every other account on your map"
                - "Combine the files into one sheet with the same column order"
                - "Delete duplicate rows created by overlapping downloads"
            - name: Designing a first spending category list
              description: |-
                ## Purpose
                Too few categories hide where money goes, and too many turn every coffee into a decision. A first list of 15 to 25 categories, grouped under a handful of headings such as home, food, transport, people and fun, gives enough detail to spot patterns without making categorising a chore.

                ## Milestones
                1. A draft list of 15 to 25 categories under four to seven group headings.
                2. Every kind of purchase in the 90-day file fitting into one category.
                3. Transfers and Uncategorised set up as categories that sit outside spending totals.
                4. The final list entered into the tracker.

                ## Notes
                Separate groceries, eating out and takeaways from day one. They are the categories people most often want to compare later, and splitting them after a year of history is tedious.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A category list of 15 to 25 entries under named groups is set up in the tracker, with separate Transfers and Uncategorised categories."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Scan the 90-day file and jot down the kinds of things you paid for"
                - "Group them under four to seven headings"
                - "Write 15 to 25 categories beneath those headings"
                - "Add Transfers and Uncategorised as categories excluded from totals"
                - "Enter the finished list into your tracker"
            - name: Category rulebook for awkward purchases
              description: |-
                ## Purpose
                Without written rules the same spend lands in different places each month: toiletries bought at the supermarket go to groceries one week and personal care the next, and the trend lines become noise. A one-page rulebook settling the 10 or 15 awkward cases, such as marketplace orders, gifts, reimbursed work expenses and fuel bought with snacks, keeps months comparable.

                ## Milestones
                1. A list of the awkward purchase types found in the 90-day file.
                2. A one-line rule for each, naming the category it belongs in.
                3. A rule for work expenses that are later reimbursed, and for the reimbursement itself.
                4. The rulebook saved beside the tracker and shared with anyone else who categorises.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written rulebook covering at least ten awkward purchase types sits beside the tracker and is used by everyone who categorises."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List ten purchases from the 90-day file you hesitated over"
                - "Write one line saying which category each kind belongs in"
                - "Decide how reimbursed work expenses and their repayments are recorded"
                - "Share the rulebook with anyone else who categorises spending"
            - name: First fully categorised month
              description: |-
                ## Purpose
                Categorising one complete month, every line placed and nothing left in Uncategorised, is where the category list meets reality. It shows which categories are empty, which are overloaded and how many minutes a month of tracking really takes, and that last number decides whether you keep going.

                ## Milestones
                1. Every transaction for one calendar month assigned a category.
                2. The Uncategorised count at zero for that month.
                3. Category totals that add up to total money out minus transfers.
                4. The time the month took to categorise written down.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One full month has every transaction categorised and its category totals reconcile to total outgoings excluding transfers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the most recent complete month in your transaction file"
                - "Categorise every line, using the rulebook for awkward ones"
                - "Check the category totals add up to outgoings minus transfers"
                - "Note how long the whole month took to categorise"
            - name: Three-month spending baseline by category
              description: |-
                ## Purpose
                Once three months are categorised, the average per category is the first honest answer to where the money goes. That baseline, set beside take-home pay, is the figure every later change is measured against, and it usually holds one or two surprises worth knowing before anything is cut.

                ## Milestones
                1. Three consecutive months fully categorised.
                2. A monthly average for each category.
                3. Each category shown as a percentage of total spending.
                4. The three biggest surprises written in a sentence each.
                5. The baseline saved as a dated snapshot that later edits do not change.

                ## Notes
                Start from the **Metrics log** template to keep each snapshot dated. Resist changing anything until the baseline is done: figures taken while you are already cutting back are not a baseline.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated three-month baseline showing average monthly spend and percentage share for every category is saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Categorise the two months before your first full month"
                - "Average each category across the three months"
                - "Work out each category's share of total spending"
                - "Write down the three figures that surprised you most"
            - name: Fixed, flexible and discretionary labels
              description: |-
                ## Purpose
                Rent and a gym contract behave differently from groceries, and groceries differently from concert tickets. Labelling each category as fixed, flexible or discretionary shows how much of your monthly spending could actually move in a lean month, which a single total never tells you.

                ## Milestones
                1. Every category carrying one of the three labels.
                2. The baseline split into three totals with a percentage for each.
                3. Categories that mix contract and optional spending split or noted.
                4. The discretionary share written at the top of the tracker.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every category carries one of three labels and the baseline shows a total and percentage for each label."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Label each category fixed, flexible or discretionary"
                - "Total the baseline under each of the three labels"
                - "Split any category that mixes contract and optional spending"
                - "Write the discretionary share at the top of the tracker"
            - name: Capturing cash spending in the tracker
              description: |-
                ## Purpose
                Cash withdrawals show on a statement as one lump, so a withdrawal that became a haircut, a market stall and a school trip adds nothing to your categories. A simple capture method, a phone note or one envelope for receipts, plus a weekly wallet count, turns cash into categorised spending.

                ## Milestones
                1. A Cash account set up in the tracker.
                2. Withdrawals recorded as transfers into the Cash account rather than as spending.
                3. Each week's cash purchases categorised from the note or receipts.
                4. Unexplained cash each week below a small figure you have set.

                ## Notes
                If you rarely use cash, record each withdrawal as a single cash entry in a general category and skip the weekly count.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Cash is tracked as its own account and the unexplained difference at each weekly count stays under a figure you have written down."
                cadence: rolling
              tasks:
                - "Create a Cash account in your tracker"
                - "Set up a phone note for logging cash purchases as they happen"
                - "Record ATM withdrawals as transfers into the Cash account"
                - "Count your wallet and categorise the week's cash spending @recurring(weekly:fri)"
            - name: Bank feed connection and data access check
              description: |-
                ## Purpose
                Open banking links let an app pull transactions automatically, which saves hours, but they also give a third party read access to your accounts. Checking how the feed is authorised, how long consent lasts, what the provider does with the data and how to revoke it lets you decide clearly whether automatic import is worth it.

                ## Milestones
                1. The provider's status checked on your financial regulator's public register.
                2. Consent length and renewal process noted.
                3. The privacy policy's points on sharing transaction data summarised in three lines.
                4. A decision on automatic feeds recorded, with the steps to revoke access written down.

                ## Notes
                Never type your online banking password into a tracking app. Regulated feeds send you to your own bank's app or site to approve access.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on automatic bank feeds, with the provider's regulatory status and the steps to revoke access written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the app provider on your financial regulator's public register"
                - "Read the privacy policy section on sharing transaction data"
                - "Note how long bank consent lasts before it must be renewed"
                - "Write down how to revoke access from inside your banking app"
            - name: Weekly categorisation session
              description: |-
                ## Purpose
                Categorising a week of transactions takes ten or fifteen minutes while you still remember what each one was; categorising a whole month on the last day takes an evening and a lot of guessing. A fixed weekly slot, same day and time, is the routine that keeps the tracker current.

                ## Milestones
                1. A weekly slot chosen and in the calendar.
                2. Four consecutive weekly sessions completed.
                3. Fewer than five transactions left uncategorised at the end of each session.
                4. Session time noted and falling over the first month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly sessions are completed, each ending with fewer than five transactions uncategorised."
                cadence: rolling
              tasks:
                - "Choose a weekly slot and put it in your calendar"
                - "Import or refresh the week's transactions from every account"
                - "Categorise each new transaction using the rulebook @recurring(weekly:sun)"
                - "Note anything you could not identify for the monthly queue"
            - name: Monthly uncategorised queue clear-out
              description: |-
                ## Purpose
                Every tracker collects lines nobody could place: a cryptic merchant code, money from a relative, a payment that might have been a gift. Clearing that queue once a month, before the month's figures are read, stops a handful of unknowns from distorting every category total.

                ## Milestones
                1. The Uncategorised count at zero by the 10th of each month.
                2. Each unknown item looked up or asked about before being guessed.
                3. Items still unidentified after a month moved to a named unknown category with a note.
                4. Repeat puzzles turned into new rulebook lines.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The Uncategorised count is zero by the 10th of the month for three months running."
                cadence: rolling
              tasks:
                - "Filter the tracker for Uncategorised transactions"
                - "Look up unfamiliar merchant names before guessing a category"
                - "Clear the uncategorised queue to zero @recurring(monthly:8)"
                - "Turn any repeat puzzle into a new rulebook line"
            - name: Month-end spending close
              description: |-
                ## Purpose
                A month is only finished once its totals are fixed and stop moving. A short close in the first days of the new month, with the last transactions imported, the queue cleared, totals locked and compared with last month and the baseline, gives one trustworthy set of figures per month instead of a running estimate.

                ## Milestones
                1. A close checklist of five or six steps written.
                2. Last month's category totals saved as a snapshot.
                3. Each category compared with the previous month and the baseline.
                4. A one-line note on the biggest change and its cause.

                ## Notes
                Start from the **Operational checklist** template. Keep the close short: a ten-step checklist gets skipped by the third month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each of the last three months has a locked set of category totals and a one-line note explaining the largest change."
                cadence: rolling
              tasks:
                - "Write a five-step month-end close checklist"
                - "Snapshot last month's category totals so later edits cannot change them @recurring(monthly:3)"
                - "Compare each category with the previous month and the baseline"
                - "Write one sentence on the biggest change and what caused it"
            - name: Refunds and returns in the right category
              description: |-
                ## Purpose
                A refund recorded as income inflates both your earnings and your spending, and a return that is never refunded is money quietly lost. Booking each refund against the category of the original purchase, and keeping a short list of returns still awaiting money, keeps category totals accurate and catches retailers who do not pay up.

                ## Milestones
                1. A rule in the rulebook: refunds reduce the original category, they are not income.
                2. A list of open returns with retailer, date sent and amount.
                3. Every refund from the last three months matched to its original purchase.
                4. No open return older than 30 days without a chase.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every refund in the last three months is recorded against its original category and no open return is older than 30 days without a chase."
                cadence: rolling
              tasks:
                - "Start a list of returns awaiting a refund, with date and amount"
                - "Book each refund against the category of the original purchase"
                - "Check the open returns list for refunds that have not landed @recurring(weekly:wed)"
                - "Chase any refund still missing 30 days after the return"
            - name: Transfers and card repayments kept out of spending
              description: |-
                ## Purpose
                Paying off a credit card, moving money to savings or topping up a payment app is not spending, but trackers count it as spending unless told otherwise, so the same meal can appear twice: once on the card and again when the card bill is paid. Marking these movements as transfers is the single fix that most often brings a tracker's totals back to reality.

                ## Milestones
                1. Every regular movement between your own accounts listed.
                2. Tracker rules marking credit card repayments, savings moves and wallet top-ups as transfers.
                3. The last three months searched for spending counted twice, with any found corrected.
                4. A monthly check that the card repayment has been tagged correctly.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "No transfer between your own accounts appears in spending totals for the last three months, checked line by line."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every regular movement between your own accounts"
                - "Mark credit card repayments and savings moves as transfers"
                - "Search the last three months for spending counted twice"
                - "Confirm this month's card repayment is tagged as a transfer @recurring(monthly:15)"
            - name: Payee rules for automatic categorisation
              description: |-
                ## Purpose
                Most apps and spreadsheets can categorise by payee name automatically, and 30 or 40 good rules usually handle three quarters of a month's transactions. Rules drift, though: a supermarket changes its statement name, or a broad rule catches the wrong merchant. Tending them monthly keeps automation helpful rather than confidently wrong.

                ## Milestones
                1. A rule set up for each of your 30 most frequent merchants.
                2. The share of last month's transactions categorised automatically measured.
                3. Rules that caught the wrong transactions corrected or narrowed.
                4. At least 70 percent of a month categorised by rules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 70 percent of a month's transactions are categorised by payee rules, with misfiring rules corrected each month."
                cadence: rolling
              tasks:
                - "List your 30 most frequent merchants from the 90-day file"
                - "Create a payee rule for each one in your tracker"
                - "Measure what share of last month was categorised automatically"
                - "Review and fix rules that caught the wrong transactions @recurring(monthly:20)"
            - name: Quarterly category trend review
              description: |-
                ## Purpose
                Monthly totals jump about with five-week months and one-off purchases; a quarter is long enough to see a real trend. Setting each quarter beside the previous one and the baseline shows which categories are creeping up and which changes have held.

                ## Milestones
                1. Category totals for the last complete quarter.
                2. Categories that moved more than 10 percent flagged.
                3. A cause written beside each flagged category.
                4. The baseline updated where a change is permanent, such as a new rent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Each quarter has a written comparison flagging categories that moved more than 10 percent, with a cause noted for each."
                cadence: cyclic
              tasks:
                - "Total each category for the last complete quarter @recurring(quarterly)"
                - "Flag any category that moved more than 10 percent"
                - "Write the reason behind each flagged change"
                - "Update the baseline where a change is permanent"
            - name: Tracker backup and history archive
              description: |-
                ## Purpose
                Apps close, subscriptions lapse and banks only offer downloads going back a limited time, so years of categorised history can vanish. A quarterly export of the whole tracker to a file you own, kept in two places, means your spending history stays yours whatever happens to the tool.

                ## Milestones
                1. The full export option in your tool found and tested.
                2. A first complete export saved in two separate places.
                3. A file naming pattern with the date so the newest copy is obvious.
                4. One backup opened and checked as complete and readable.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete export of the tracker no more than three months old exists in two separate places and has been opened to confirm it is readable."
                cadence: rolling
              tasks:
                - "Find the full export option in your tracking tool"
                - "Export the full history to CSV and save it in two places"
                - "Open the backup to check every month and category came through"
                - "Repeat the full export and store both copies @recurring(quarterly)"
            - name: Grocery spend per person per week
              description: |-
                ## Purpose
                Supermarket totals are hard to judge on their own because they move with the number of people eating, guests and whether the month had four weeks or five. Dividing food shopping by people and weeks gives one comparable figure, and a monthly entry shows whether prices or habits are moving it.

                ## Milestones
                1. A written rule for counting children and regular guests.
                2. The figure worked out for each baseline month.
                3. A monthly entry in a dated log.
                4. Unusual weeks, such as hosting or holidays, noted beside the figure.

                ## Notes
                Start from the **Metrics log** template. Include takeaways only if you want a total food figure; keep them out for a pure grocery number.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly entries of grocery spend per person per week are logged, each with unusual weeks noted."
                cadence: rolling
              tasks:
                - "Decide how to count children and regular guests"
                - "Work out the figure for each of your baseline months"
                - "Record this month's grocery spend per person per week @recurring(monthly:4)"
                - "Note any weeks that were unusual, such as hosting or holidays"
            - name: Reading bank CSV exports correctly
              description: |-
                ## Purpose
                Bank exports disagree on almost everything: some show spending as negative numbers and some as positive in a separate column, dates arrive day first or month first, and descriptions are cut short. Learning your own banks' formats once prevents the silent errors, like a refund counted as spending, that wreck a month's totals.

                ## Milestones
                1. The column layout of each bank's export written down.
                2. Each bank's sign convention and date format noted.
                3. A one-week test import checked line by line against online banking.
                4. An import notes page saved where you will see it at the next import.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An import notes page documents column order, sign convention and date format for every account, verified on a one-week test import."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Open one CSV from each bank and note its columns"
                - "Write down each bank's sign convention and date format"
                - "Import one week and check every line against online banking"
                - "Save the notes beside the folder where you keep exports"
            - name: Splitting one payment across categories
              description: |-
                ## Purpose
                A single supermarket receipt can hold groceries, a birthday card, phone credit and a kettle, and one marketplace order can cover a month of unrelated items. Learning to split a transaction in your tool, and deciding when a split is worth the effort, keeps large mixed baskets from distorting the food line.

                ## Milestones
                1. The split feature in your tracker found and practised on three real transactions.
                2. A written threshold: split only when the non-food part passes an amount you choose.
                3. Receipts from large mixed shops kept until the weekly session.
                4. Every split checked so its parts add up to the original amount.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Mixed baskets above a written threshold appear as split transactions whose parts add up to the original amount."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Find out how your tracker splits one transaction into several"
                - "Practise on three mixed receipts from last month"
                - "Set a threshold below which you do not bother splitting"
                - "Keep receipts from large mixed shops until the weekly session"
            - name: Decoding cryptic merchant names
              description: |-
                ## Purpose
                Statement lines made of a payment processor prefix and a string of letters, or a parent company name unlike the shop's, are the main reason transactions sit uncategorised. Knowing the common prefixes, where your bank app shows merchant details and how to look up a name turns most mysteries into a 30-second check.

                ## Milestones
                1. The processor prefixes that appear on your statements listed with what they mean.
                2. The merchant detail or map view in your banking app found.
                3. A lookup list of at least 20 decoded names and their real shops.
                4. No transaction older than a month left unidentified.

                ## Notes
                If a name stays unknown after looking it up and nobody in the household made the payment, treat it as possibly unauthorised and contact your bank straight away.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lookup list of at least 20 decoded merchant names exists and no transaction older than a month is unidentified."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Collect every transaction name from 90 days you could not recognise"
                - "Use the banking app's merchant details to identify each one"
                - "Keep a lookup list of decoded names and their real shops"
                - "Add a payee rule for each name you decode"
            - name: Tags for trips, people and projects
              description: |-
                ## Purpose
                Categories answer what you bought; tags answer why. A tag for a holiday, a child, a bathroom refit or a wedding cuts across categories, so a trip's flights, meals and souvenirs stay in their categories while the tag adds up the whole trip. Learning to use tags well stops one-off categories from cluttering the list.

                ## Milestones
                1. Tag support in your tracker confirmed, or a notes column added if there is none.
                2. Three tag families chosen and written in the rulebook.
                3. One past trip or project tagged across every category.
                4. A tag report totalling that trip or project by category.

                ## Notes
                Keep no more than about ten tags active at once. Retire a tag when its trip or project is over.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one tag report totals a trip, person or project across categories, and the tag families are written in the rulebook."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your tracker supports tags or needs a notes column"
                - "Choose three tag families you would actually use"
                - "Tag last year's main holiday across every category"
                - "Run a report showing that tag's total by category"
            - name: Spreadsheet formulas for spending summaries
              description: |-
                ## Purpose
                For anyone tracking in a spreadsheet, three tools do most of the work: a SUMIFS formula totalling by category and month, a pivot table, and a lookup table that matches payees to categories. An afternoon practising them on your own data replaces hours of manual adding every month.

                ## Milestones
                1. A category-by-month grid built with SUMIFS.
                2. A pivot table of the same data with matching totals.
                3. A payee lookup table filling in categories for known merchants.
                4. One month's formula totals checked against a sum done by hand.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A formula-driven spreadsheet summary matches a hand-checked month total exactly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Build a category-by-month grid with SUMIFS on your 90-day data"
                - "Create a pivot table of the same data and compare the totals"
                - "Make a payee lookup table that fills in categories"
                - "Check one month's formula totals against a sum done by hand"
            - name: Annual and irregular costs as monthly figures
              description: |-
                ## Purpose
                Car insurance renewals and annual software licences make one month look terrible and eleven look cheap. Learning to show these costs as a monthly equivalent beside the actual figures, in a separate view rather than by rewriting history, gives a truer picture of what your life costs each month.

                ## Milestones
                1. A list of every annual or irregular payment from the last 12 months.
                2. A monthly equivalent worked out for each one.
                3. A smoothed view of monthly spending beside the actual totals.
                4. The recorded transactions and category totals left unchanged.

                ## Notes
                This is a reporting view only. Putting money aside for these costs belongs with sinking funds, not with tracking.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A smoothed monthly view that includes every annual cost from the last 12 months sits alongside the actual monthly totals."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List every payment that happens yearly or a few times a year"
                - "Divide each one by the months it covers"
                - "Add a smoothed view beside the actual monthly totals"
                - "Recheck the annual costs list against the last 12 months @recurring(yearly)"
            - name: Foreign currency spending and card fees
              description: |-
                ## Purpose
                Spending abroad or with overseas online shops arrives as a converted amount, sometimes with a separate foreign transaction fee line, and a pending amount that later settles at a different rate. Knowing how each of your cards shows this, and putting fees in a category of their own, shows what currency conversion actually costs you in a year.

                ## Milestones
                1. How each card displays foreign purchases and fees noted.
                2. A Fees and charges category in the tracker.
                3. Last year's foreign transaction fees totalled.
                4. A rule to record settled amounts rather than pending ones.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A year's foreign transaction fees are totalled in their own category and each card's display of foreign spending is noted."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Find a recent foreign purchase on each card and see how it appears"
                - "Create a Fees and charges category if you do not have one"
                - "Total last year's foreign transaction fees"
                - "Add a rulebook line to record settled amounts, not pending ones"
            - name: One-screen spending dashboard
              description: |-
                ## Purpose
                Rows of categorised transactions answer questions only if you go looking. A one-screen dashboard showing this month against the baseline, a 12-month trend for the five biggest categories and the discretionary share puts the answer in front of you in ten seconds.

                ## Milestones
                1. The four numbers you most want to see chosen on paper.
                2. A chart of this month against the baseline by category.
                3. A 12-month trend for the five largest categories.
                4. The discretionary share shown as a single figure.
                5. The dashboard refreshing from the data without manual edits.

                ## Notes
                Keep it to one screen. A dashboard you have to scroll is a report, and reports get read less often.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-screen dashboard showing month against baseline, a 12-month trend and the discretionary share updates without manual edits."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch on paper the four numbers you most want to see"
                - "Build a chart of this month against the baseline by category"
                - "Add a 12-month trend for your five largest categories"
                - "Check the dashboard refreshes when new transactions arrive"
            - name: Category list review after three months
              description: |-
                ## Purpose
                The first category list is a guess. After three months the data shows which categories never get used, which catch everything and which you never look at, and pruning or splitting them now is cheap compared with doing it after two years of history.

                ## Milestones
                1. A transaction count for each category over three months.
                2. Categories used fewer than three times merged into neighbours.
                3. Any category holding a quarter of non-housing spending split.
                4. Past months recategorised so history matches the new list.
                5. The changes recorded in the rulebook.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A revised category list is in place, with past months recategorised to match and every change recorded in the rulebook."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count transactions in each category over three months"
                - "Merge categories used fewer than three times"
                - "Split any category holding a quarter of non-housing spending"
                - "Recategorise past months so history matches the new list"
                - "Review the category list against a full year of use @recurring(yearly)"
            - name: Cutting weekly tracking time to fifteen minutes
              description: |-
                ## Purpose
                If tracking takes an hour a week it will eventually stop. Timing each step of your routine for two weeks, then removing the slowest one through better rules, fewer accounts or a different import method, usually brings the weekly session down to fifteen minutes or less.

                ## Milestones
                1. Two weeks of timings for each step of the routine.
                2. The slowest step and its cause identified.
                3. One change made aimed at that step.
                4. Two further sessions timed at 15 minutes or less.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two consecutive weekly sessions take 15 minutes or less, measured with a timer."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Time each step of your next two weekly sessions"
                - "Identify the slowest step and what makes it slow"
                - "Make one change aimed squarely at that step"
                - "Time two more sessions to see whether the change worked"
            - name: Small purchases total over three months
              description: |-
                ## Purpose
                Purchases under about 10 in your currency rarely register, yet thirty or forty of them a month can outweigh a utility bill. Filtering three months of transactions by size shows how much flows through small amounts and which two or three merchants take most of it, without judging any of it yet.

                ## Milestones
                1. A count and total of transactions below the threshold for each baseline month.
                2. The three merchants taking most of the small spending named.
                3. Small purchases shown as a share of discretionary spending.
                4. A decision recorded on whether to watch any merchant with a tag.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written total of small purchases for each baseline month exists, with the top three merchants named."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Filter the baseline months for transactions under your chosen amount"
                - "Total them by month and by merchant"
                - "Note the three merchants that take most of the small spend"
                - "Decide whether to watch any of them with a tag"
            - name: Top twenty merchants by annual spend
              description: |-
                ## Purpose
                Ranking merchants rather than categories shows who your money actually goes to: often one supermarket, one online marketplace and one delivery app account for a fifth of all spending. Knowing your top 20 is the starting point for price comparisons and loyalty decisions, and for noticing when one quietly climbs the list.

                ## Milestones
                1. Merchant names standardised so one shop is not listed five ways.
                2. A ranked list of the top 20 merchants by 12-month spend.
                3. The share of total spending those 20 take.
                4. The ranking refreshed each quarter with new entries noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of your top 20 merchants by 12-month spend is refreshed each quarter, with new entries noted."
                cadence: cyclic
              tasks:
                - "Standardise merchant names so one shop is not listed five ways"
                - "Rank merchants by total spend over the last 12 months"
                - "Work out what share of spending the top 20 take"
                - "Refresh the ranking and note new entries @recurring(quarterly)"
            - name: Spending pattern across the pay month
              description: |-
                ## Purpose
                Many households spend most of their discretionary money in the ten days after payday and run thin before the next one. Plotting daily discretionary spending across three pay cycles shows whether that pattern is yours, which is useful evidence for whoever plans the budget.

                ## Milestones
                1. The last three paydays marked on the transaction data.
                2. Daily discretionary spending totalled for each pay cycle.
                3. The first ten days compared with the last ten.
                4. One sentence describing your pattern, shared with whoever plans the budget.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of discretionary spending in the first and last ten days of three pay cycles is written up in one sentence."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark your last three paydays on the transaction data"
                - "Total discretionary spending by day of each pay cycle"
                - "Compare the first ten days of each cycle with the last ten"
                - "Write one sentence describing the pattern you found"
            - name: Switching tracking tools without losing history
              description: |-
                ## Purpose
                Changing app, or moving from an app to a spreadsheet, often means starting from zero and losing years of categorised data. Mapping old categories to new ones, exporting history in full and importing it with a check total keeps trends unbroken across the switch.

                ## Milestones
                1. A full export of every transaction from the old tool.
                2. A table mapping each old category to a new one.
                3. History imported into the new tool with yearly totals matching the old tool.
                4. The old account closed and any subscription cancelled once totals match.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The new tool holds the full categorised history with yearly totals matching the old tool exactly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Export the full history from the old tool"
                - "Write a table mapping each old category to a new one"
                - "Import the history and compare yearly totals with the old tool"
                - "Close the old account once the totals match"
            - name: Comparing your spending with national household figures
              description: |-
                ## Purpose
                National statistics offices publish average household spending by category, often split by household size and income band. Setting your baseline beside the figures for a household like yours is not a target, but it quickly shows which categories are unusually high or low and worth a closer look.

                ## Milestones
                1. Your country's latest household spending survey tables found.
                2. The figures for a household of your size and income picked out.
                3. Their categories mapped onto yours in a comparison table.
                4. The two categories furthest from the average flagged, with a reason noted.

                ## Notes
                Survey figures lag by a year or two and leave out some costs such as mortgage capital, so read big gaps as questions, not verdicts.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison table sets your baseline beside national figures for a similar household, with the two biggest gaps explained."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your country's latest household spending survey tables"
                - "Pick the figures for a household of your size and income"
                - "Map their categories onto yours as closely as you can"
                - "Flag the two categories furthest from the average and note why"
            - name: Tracking the full cost of one holiday
              description: |-
                ## Purpose
                Holidays are where tracking usually breaks: several currencies, bills shared with friends, cash and cards mixed. Tagging every payment for one trip, before, during and after, gives its true cost including the airport parking and the new suitcase, which is the number you need when planning the next one.

                ## Milestones
                1. A trip tag created before the first booking.
                2. Deposits, insurance, kit and transport to the airport tagged.
                3. Cash and card spending during the trip logged at least every other day.
                4. The total and cost per day worked out once home.

                ## Notes
                Where a friend pays a shared bill and you settle up later, record your share against the trip, not the full bill.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The trip's full cost, including spending before departure, is totalled by category with a cost per day recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a tag for the trip before the first booking"
                - "Tag deposits, insurance, kit and transport to the airport"
                - "Log cash and card spending each evening of the trip"
                - "Total the trip and work out the cost per day once home"
            - name: Wedding or big celebration cost log
              description: |-
                ## Purpose
                Big celebrations are paid in dozens of deposits, balances and small top-ups over a year or more, often from several people's accounts, and the final total is usually a guess. A single log with every payment tagged, who paid it and what it was for gives a real figure for the day and shows where it ran over.

                ## Milestones
                1. A tag and a simple log for the celebration.
                2. Every deposit already paid recorded, with who paid it.
                3. Contributions from family recorded separately from your own payments.
                4. A final total by supplier and category once the last bill is paid.
                5. The total set against the original estimate.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A final cost log totals every payment for the celebration by supplier and payer, set against the original estimate."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create a tag and a simple log for the celebration"
                - "Record every deposit already paid, with who paid it"
                - "Log each new payment in the week it is made"
                - "Produce a final total by supplier once the last bill is paid"
            - name: House move spending log
              description: |-
                ## Purpose
                Moving house scatters spending across removals, deposits, cleaning, a van hire, takeaways among the boxes and the first trip to a homeware shop, and most of it lands in categories that make an ordinary month look wild. Tagging everything from the first survey to the last curtain pole gives the real cost of moving and keeps your regular trends readable.

                ## Milestones
                1. A move tag created before the first moving cost is paid.
                2. Survey, removals, cleaning and deposit payments tagged.
                3. Furnishing purchases in the first two months after the move tagged.
                4. A total cost of the move by category.
                5. The affected months annotated so trend reviews read them correctly.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The move's total cost is reported by category and the affected months are annotated in the tracker."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a move tag before the first moving cost is paid"
                - "Tag survey, removals, cleaning and deposit payments"
                - "Tag furnishing purchases for two months after moving"
                - "Annotate the affected months so trend reviews allow for them"
            - name: One year of tracking review
              description: |-
                ## Purpose
                Twelve categorised months is when tracking starts to pay back: seasonal patterns appear, annual bills show up and the three-month baseline can be replaced with a real year. A review at the one-year mark produces a twelve-month report by category and settles what to keep, simplify or drop in the tracking routine itself.

                ## Milestones
                1. All twelve months fully categorised and closed.
                2. A twelve-month report by category and month.
                3. Seasonal peaks marked with the months they fall in.
                4. One simplification to the tracking routine decided and made.
                5. The report passed to whoever runs the annual money review.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A twelve-month category report exists, seasonal peaks are marked and one change to the tracking routine has been made."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check all twelve months are fully categorised and closed"
                - "Mark the seasonal peaks and the months they fall in"
                - "Decide one thing to simplify in the tracking routine"
                - "Produce the twelve-month category report @recurring(yearly)"
            - name: Combined spending view for a couple
              description: |-
                ## Purpose
                Couples often each track their own cards, or neither does, and nobody sees the household total. Pulling both people's accounts into one view, with shared categories and an agreed rule for personal spending, gives a household picture without either person having to justify every coffee.

                ## Milestones
                1. Both people's accounts and cards agreed for the shared view.
                2. One category list both people use.
                3. A personal category for each person that is not itemised in reviews.
                4. A combined monthly total by category.
                5. A short monthly sync held three months running.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A combined view of both partners' spending by shared category has been reviewed together for three consecutive months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree which accounts and cards go into the shared view"
                - "Agree one category list you will both use"
                - "Give each person a personal category that is not itemised"
                - "Hold a 15-minute spending sync with your partner @recurring(monthly:28)"
            - name: Per-child spending tags for families
              description: |-
                ## Purpose
                Parents usually know what childcare costs but not what a child costs: clothes outgrown, school trips, clubs, presents for classmates' parties and the growing food bill. Tagging spending by child for six months answers that question and gives a factual record when a new club or school change is being weighed up.

                ## Milestones
                1. A tag for each child.
                2. Clothes, school, clubs, activities and party presents tagged by child.
                3. A six-month total per child by category.
                4. Term-time and holiday peaks noted.

                ## Notes
                Shared costs such as the family food shop are hard to split fairly; leave them untagged rather than guessing.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Six months of child-related spending is tagged per child, with a total by category for each child."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Create a tag for each child"
                - "Tag last month's clothes, school, club and activity costs"
                - "Tag child-related spending as part of each weekly session"
                - "Total six months per child and note the term-time peaks"
            - name: Separating side-business costs from household spending
              description: |-
                ## Purpose
                Selling crafts, tutoring or running a small online shop alongside a job blurs personal and business spending, and both your categories and your tax records suffer. Giving the side business its own account or category group, and moving its costs out of household categories, keeps household figures honest and leaves a clean expense list for whoever prepares your tax return.

                ## Milestones
                1. A decision on whether the side business gets its own bank account.
                2. A business category group separate from household spending.
                3. The last 12 months of business costs moved into it.
                4. Receipts for business purchases stored in one folder.
                5. A monthly check that no business costs sit in household categories.

                ## Notes
                Which costs count as allowable business expenses is a question for the tax authority's guidance or an accountant. This project only keeps the records separate and complete.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twelve months of side-business costs sit in their own category group, with receipts filed and no business costs in household categories."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide whether the side business gets its own bank account"
                - "Create a business category group apart from household spending"
                - "Move the last 12 months of business costs into it"
                - "Check no business costs slipped into household categories @recurring(monthly:10)"
            - name: Tracking spending on a fixed pension income
              description: |-
                ## Purpose
                In retirement, income often arrives as fixed pension amounts on different dates, and spending shifts towards home, health, travel and family. Tracking against that fixed income, with categories that suit retired life rather than a commuter's, shows whether the pensions cover the way you live and how much is coming from savings each year.

                ## Milestones
                1. Each pension listed with its amount and payment date.
                2. The category list adjusted for retired life, with commuting removed and health, home upkeep and gifts to family added.
                3. Each month's spending compared with pension income received.
                4. The amount drawn from savings over the year stated.

                ## Notes
                Whether the draw from savings is sustainable is a question for a regulated financial adviser or a free pensions guidance service. This project gives them accurate figures to work from.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A twelve-month comparison of spending against pension income exists, with the amount drawn from savings stated."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each pension with its amount and payment date"
                - "Adjust the category list to fit retired life"
                - "Compare each month's spending with the pension income received"
                - "Work out how much spending came from savings over the year"
            - name: Spending records for someone you care for
              description: |-
                ## Purpose
                Carers who manage a parent's or relative's money, informally or under a power of attorney, are expected to keep it separate from their own and to show what it was spent on. A categorised record of the person's spending, receipts for larger items and a monthly summary to the family protect both of you if questions are ever asked.

                ## Milestones
                1. A separate tracker holding only the person's accounts.
                2. Categories that fit their life, such as care fees, household, personal items, health and gifts.
                3. A receipt rule for purchases above an agreed amount.
                4. A monthly summary sent to the family for three months running.
                5. Records and receipts kept in one place for at least the period your local rules require.

                ## Notes
                If you act under a formal power of attorney or deputyship, check the record-keeping expectations of the public guardian or equivalent body in your country.
              priority: high
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The person's spending is categorised in a separate tracker and a monthly summary has reached the family for three consecutive months."
                cadence: rolling
              tasks:
                - "Set up a separate tracker for the person's accounts only"
                - "Agree a receipt rule for larger purchases with the family"
                - "Categorise the person's spending during your own weekly session"
                - "Send the monthly spending summary to the family @recurring(monthly:5)"
            - name: Light tracking mode for chaotic months
              description: |-
                ## Purpose
                Illness, a new baby, exams or a crisis at work can make a weekly session impossible, and the usual result is months of untracked data and a tracker abandoned for good. Deciding in advance on a stripped-down mode, three buckets and one monthly catch-up, keeps the record going until normal life resumes.

                ## Milestones
                1. Three fallback buckets defined, with every category mapped into one of them.
                2. The trigger for switching to light mode written down.
                3. A rule on whether light-mode months are recategorised later.
                4. The fallback plan at the top of the rulebook.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written light-mode plan with three buckets, a switching trigger and a catch-up rule sits at the top of the rulebook."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Define three fallback buckets that every category maps into"
                - "Write down what would trigger a switch to light mode"
                - "Decide whether light-mode months get recategorised later"
                - "Add the fallback plan to the top of the rulebook"
            - name: Personal inflation rate from your own spending
              description: |-
                ## Purpose
                Official inflation is measured on an average basket, and yours may differ: a household that drives a lot, rents or spends heavily on food feels price rises differently. Comparing what the same categories cost you this year with last year, with changes in quantity noted, gives a personal inflation figure to set beside the official one.

                ## Milestones
                1. Two complete years of categorised data.
                2. Each category's share of last year's spending worked out.
                3. Year-on-year change per category, with quantity changes separated where known.
                4. A personal figure written beside the official rate for the same period.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A personal inflation figure built from two years of category data is recorded beside the official rate for the same period."
                cadence: cyclic
              tasks:
                - "Confirm you have two complete years of categorised data"
                - "Calculate each category's share of last year's spending"
                - "Note categories where you bought more or less, not just paid more"
                - "Recalculate your personal inflation figure @recurring(yearly)"
            - name: Staple price log for twenty regular items
              description: |-
                ## Purpose
                Category totals mix price and quantity, so a rising food line could mean dearer butter or simply more of it. Logging the shelf price of 20 items you buy every month, from receipts or the shop's website, separates the two and shows which staples have really gone up.

                ## Milestones
                1. Twenty items chosen with exact brand and pack size.
                2. A starting price recorded for each.
                3. A monthly price entry for each item.
                4. A 12-month change worked out for every item once a year has passed.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A price log holds twelve monthly prices for 20 named items, with a 12-month change for each."
                cadence: rolling
              tasks:
                - "Choose 20 items you buy at least monthly, with exact sizes"
                - "Record today's price for each from a receipt or the shop website"
                - "Update the price log from your latest receipts @recurring(monthly:12)"
                - "Work out each item's 12-month change once a year has passed"
            - name: Categorisation accuracy audit
              description: |-
                ## Purpose
                After a year of payee rules and quick weekly sessions, some share of transactions sits in the wrong category without anyone noticing. Sampling 50 random transactions each quarter and checking them against receipts and the rulebook measures the error rate and shows which rules are causing it.

                ## Milestones
                1. A method for picking 50 random transactions.
                2. A first audit completed with an error rate.
                3. The causes of each error listed.
                4. The rules behind repeat errors fixed.
                5. A quarterly error rate below 5 percent.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two consecutive quarterly audits of 50 random transactions each show an error rate below 5 percent."
                cadence: cyclic
              tasks:
                - "Pick 50 random transactions using a random number column"
                - "Check each against its receipt and the rulebook"
                - "Calculate the error rate and list the causes"
                - "Repeat the 50-transaction audit @recurring(quarterly)"
            - name: Plain-text accounting for spending records
              description: |-
                ## Purpose
                Plain-text accounting tools store every transaction in a readable text file, use double entry so each amount has a source and a destination, and produce reports from the command line. For people comfortable with a terminal they give permanent, tool-independent history and exact control over categories, at the cost of a steep first month.

                ## Milestones
                1. One plain-text accounting tool chosen and installed.
                2. Your category list written as a hierarchy of expense accounts.
                3. One month imported with a balance check that matches the bank.
                4. A category report compared with your current tracker for the same month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One month of spending is recorded in a plain-text ledger whose balances match the bank and whose category report matches the current tracker."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the getting-started guide for one plain-text accounting tool"
                - "Write your category list as a hierarchy of expense accounts"
                - "Import one month and add a balance check against the bank"
                - "Produce a category report and compare it with your current tracker"
            - name: Scripted import and categorisation
              description: |-
                ## Purpose
                Once imports from several banks are the slowest part of the week, a small script or spreadsheet macro that reads each bank's CSV, fixes signs and dates and applies your payee rules can turn a 20-minute job into a two-minute one. Writing it after a year of manual imports means you already know every quirk it has to handle.

                ## Milestones
                1. Every format fix you make by hand during imports listed.
                2. A script that handles one bank's format and applies the payee rules.
                3. The script's output for one month matching a hand import exactly.
                4. Every remaining bank added, with a short note on how to run it.

                ## Notes
                Keep the script and its rules in the same folder as your backups, and never store bank passwords in it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A script imports and categorises every bank's CSV, and its output for a test month matches a hand import exactly."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every format fix you make by hand during imports"
                - "Ask the agent to draft a script that applies those fixes to one bank's CSV"
                - "Test the script on a month you already imported by hand"
                - "Extend it to each remaining bank once totals match exactly"
            - name: Ten-year spending history from old statements
              description: |-
                ## Purpose
                Banks keep downloadable history for a limited time, and older paper or PDF statements sit in drawers. Assembling a decade of annual totals by category group, even rough ones, shows how housing, transport and food have moved through jobs, moves and children, which is useful context for any long-range plan.

                ## Milestones
                1. The years of history each bank allows you to download noted.
                2. Older statements requested or found where they exist.
                3. Annual totals by category group for each year available.
                4. Gaps marked as gaps rather than estimated silently.
                5. A ten-year chart with the life events behind big shifts labelled.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A chart of annual spending by category group covers as many of the last ten years as records allow, with gaps and life events labelled."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check how many years of history each bank lets you download"
                - "Request older statements where the bank still offers them"
                - "Estimate annual totals by category group for each year"
                - "Chart the decade and label the life events behind big shifts"
---

# Spending Tracking & Categorisation

This area is for anyone who wants a true picture of where their money goes, line by line, whether they track alone, as a couple, for a family or on behalf of someone they care for. It starts with the foundations (choosing a method, mapping every account, gathering ninety days of transactions, building a category list and a three-month baseline), then moves through the weekly and monthly routines, the skills that keep the data accurate, improvements and comparisons, tracked events such as a holiday or a house move, variants for different households, and finally specialist work such as a personal inflation figure and scripted imports.

What repeats is a weekly categorisation session and cash count, a monthly queue clear-out, close and payee rule check, quarterly trend reviews, backups and accuracy audits, and a yearly twelve-month category report. The Purchase decision, Operational checklist and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
