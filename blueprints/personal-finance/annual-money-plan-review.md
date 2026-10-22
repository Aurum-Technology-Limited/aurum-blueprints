---
id: personal-finance.annual-money-plan-review
name: Annual Money Plan Review
description: "A yearly look back at income, spending, savings and debt, a net worth snapshot, three chosen priorities with numbered targets for next year, and the quarterly check-ins that keep the plan honest."
category: personal
version: 1.0.0
tags: [personal-finance, annual-money-plan-review, everyone, annual-review, net-worth, goal-setting, savings-rate, financial-planning]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - monthly-budget-bills
    - risk-register
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Annual Money Plan Review
          description: "Reviewing the past year of income, spending and savings and setting next year's money priorities and targets."
          projects:
            - name: Booking the annual money review date
              description: |-
                ## Purpose
                Reviews that are meant to happen "sometime in January" rarely happen at all, because there is always a busier week. Picking a fixed date, a length and a place, and blocking it like an appointment, is what turns the annual review from a good intention into a fixture. Choose a date just after a natural year end, such as the calendar year, your tax year or your pay anniversary, so the numbers are complete when you sit down.

                ## Milestones
                1. A review year chosen: calendar year, tax year or another twelve-month period, written down.
                2. A date and a half-day slot booked in the calendar within four weeks of that year end.
                3. Everyone who shares the household money invited, or a decision recorded to review alone.
                4. A repeating yearly reminder set so the next review is already in place.

                ## Notes
                Choosing the tax year as your review year makes the income figures match what the tax authority sees, which saves time if you file a return.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A review year is chosen and a dated half-day review session is in the calendar with a yearly repeat set."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Decide whether your review year follows the calendar year or the tax year"
                - "Block a half day within four weeks of that year end"
                - "Ask your partner or housemates whether they will join the review"
                - "Put next year's review weekend in the calendar @recurring(yearly)"
            - name: Gathering twelve months of statements
              description: |-
                ## Purpose
                Every figure in the review comes from statements, and chasing them on the day kills the session before it starts. Downloading a full year for every current account, savings account, credit card, loan and pension into one folder means the review becomes reading, not searching. Online banking often keeps only a limited window of history, so getting the files now also protects records you may need later.

                ## Milestones
                1. One folder named for the review year, with a subfolder per provider.
                2. Twelve monthly statements, or an annual summary, saved for every account and card.
                3. Payslips or income records for the year saved alongside.
                4. Any statement that could not be downloaded requested from the provider.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A review-year folder holds twelve months of statements for every account and card, with gaps requested from providers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a folder named for the review year with a subfolder per provider"
                - "Download a year of statements from each banking app or website"
                - "Save the year's payslips or invoices into the same folder"
                - "Request any missing statements from the provider by secure message"
            - name: Account and product inventory
              description: |-
                ## Purpose
                Most households hold more financial products than they can name: an old savings account opened for a bonus, a store card, a workplace pension from three jobs ago, a phone insurance add-on. Listing every one with provider, rate, balance and renewal or end date gives the review a complete map and often turns up money sitting idle or a charge nobody remembers agreeing to.

                ## Milestones
                1. A single list of every account, card, loan, pension, investment and policy in the household.
                2. Provider, current rate or fee, balance and renewal or end date recorded for each.
                3. Dormant or forgotten products flagged for a decision.
                4. The list stored with the review folder and its location shared with a trusted person.

                ## Notes
                Check old email folders for words like "welcome to your account" to find products you have forgotten opening.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory lists every financial product in the household with provider, rate, balance and renewal date, with dormant items flagged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every account and card you can think of in ten minutes"
                - "Search your email for account opening and policy confirmation messages"
                - "Add provider, rate, balance and renewal date for each product"
                - "Refresh rates and renewal dates in the inventory @recurring(yearly)"
            - name: Twelve-month income summary
              description: |-
                ## Purpose
                People usually know their monthly salary but not their total income for the year once bonuses, overtime, side earnings, interest, benefits and gifts are added in. A single sheet with gross and net income by source shows what the household really had to work with, and is the denominator for every ratio in the rest of the review.

                ## Milestones
                1. Every income source for the year listed: salary, bonus, side work, interest, benefits, rental, gifts.
                2. Gross and net figures recorded for each source, with the document they came from.
                3. A total net income for the year, and an average per month.
                4. Any one-off income marked so it is not mistaken for something that will repeat.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page income summary shows gross and net income by source for the review year, with one-off items marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your year-end pay statement or last payslip of the year"
                - "Total the interest paid on every savings account from the statements"
                - "Add side income, benefits and gifts received during the year"
                - "Mark each source as regular or one-off"
            - name: Year of spending in ten totals
              description: |-
                ## Purpose
                For an annual review you do not need every transaction, you need roughly ten honest totals: housing, food, transport, bills, debt repayments, children, health, leisure, gifts and everything else. Seeing a year of eating out as one number rather than forty small ones is often the moment a priority for next year chooses itself.

                ## Milestones
                1. Ten broad spending headings chosen and written down.
                2. A total for each heading worked out from statements or your tracking tool.
                3. Total spending reconciled to within five percent of income minus savings.
                4. The three largest headings and the three biggest surprises noted.

                ## Notes
                If you already track spending month by month, export the year's category totals and map them onto the ten headings rather than starting again.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Annual spending is summarised under ten headings that reconcile to within five percent of income minus savings."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose ten broad headings for the year's spending"
                - "Export category totals from your tracking tool or statements"
                - "Map each total onto one of the ten headings"
                - "Check the grand total against income minus money saved"
                - "Write down the three headings that surprised you most"
            - name: Year-end net worth snapshot
              description: |-
                ## Purpose
                Net worth is everything you own minus everything you owe, measured on one date, and it is the single number that shows whether a year moved you forward. Taking the snapshot at the same point each year, using statement balances rather than guesses, creates a reference line every future review can be measured against.

                ## Milestones
                1. A snapshot date chosen, normally the last day of the review year.
                2. Every asset listed with its balance or a cautious value: cash, savings, pensions, investments, property, vehicles.
                3. Every debt listed with its outstanding balance: mortgage, loans, cards, overdraft, buy now pay later, money owed to family.
                4. Net worth calculated and recorded with the date and the sources used.

                ## Notes
                Value cars and possessions cautiously or leave them out. Counting a sofa at its purchase price flatters the number and makes next year look like a fall.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated net worth figure exists, built from listed assets and debts with the source of each balance recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the snapshot date and note it at the top of a new sheet"
                - "List every asset with its balance on that date"
                - "List every debt with its balance on that date"
                - "Subtract total debts from total assets and record the result"
            - name: Calculating last year's savings rate
              description: |-
                ## Purpose
                Savings rate, the share of net income that was kept rather than spent, is a better measure of progress than any account balance because it is not affected by markets or one-off gifts. Working it out once shows where you actually stand, whether that is 2 percent or 25, and gives next year's plan a realistic starting point.

                ## Milestones
                1. Money saved during the year totalled: savings deposits, extra debt repayments and pension contributions you choose to count.
                2. A written rule for what counts as saving, so future years use the same method.
                3. Savings rate calculated as money saved divided by net income.
                4. The figure recorded beside the net worth snapshot.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A savings rate for the review year is calculated using a written definition and recorded with the net worth snapshot."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Decide whether pension contributions and overpayments count as saving"
                - "Total the year's transfers into savings from your statements"
                - "Divide the total saved by the year's net income"
                - "Write the definition and the result on the review sheet"
            - name: Scorecard against last year's targets
              description: |-
                ## Purpose
                Reviewing without looking at what you meant to do turns into a vague feeling about the year. Scoring each target set twelve months ago as hit, partly hit or missed, with one honest line on why, shows which kinds of goals you reliably achieve and which you keep setting and dropping. First-timers can score the hopes they had in their heads a year ago.

                ## Milestones
                1. Last year's targets, written or remembered, listed in one place.
                2. Each target scored hit, partly hit or missed against the actual figure.
                3. A one-line reason recorded for every miss.
                4. A pattern noted: which type of target worked and which did not.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every target from the previous year is scored against actual figures with a written reason for each miss."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find last year's targets in notes, email or a past review"
                - "Put the actual figure beside each target"
                - "Score each one hit, partly hit or missed"
                - "Write one line on why each missed target slipped"
            - name: Debt position year on year
              description: |-
                ## Purpose
                Debt can shrink on one card while it quietly grows on another, and the overall direction gets lost. Listing every balance at the start and end of the year, with the interest actually paid, shows whether total borrowing went up or down and what it cost in the year. Seeing the interest bill as one annual figure often settles the debate about next year's first priority.

                ## Milestones
                1. Every debt listed with its balance at the start and the end of the review year.
                2. Interest and fees paid during the year totalled from statements.
                3. Total debt change for the year calculated.
                4. Any new borrowing taken on during the year named with the reason.

                ## Notes
                If the totals worry you, the free debt advice services in your country can help, and that conversation belongs in a debt project rather than this review.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table shows every debt's start and end balance for the year, total interest paid and the net change."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each debt with its balance on the first day of the review year"
                - "Add the balance on the last day beside it"
                - "Total the interest and fees shown on the year's statements"
                - "Note any borrowing that started during the year and why"
            - name: Quarterly check-in on annual targets
              description: |-
                ## Purpose
                Annual targets fail in March, not December, when nobody looks at them again after the review. A thirty-minute check each quarter, scoring every target red, amber or green and deciding one adjustment, catches drift while there is still time to correct it without heroics.

                ## Milestones
                1. Targets for the year copied onto a one-page tracker with a column per quarter.
                2. Each target scored red, amber or green at every quarter end.
                3. One correction agreed for any target that is red.
                4. Four quarterly scores recorded by the time of the next annual review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly scores are recorded against every annual target, with a correction noted for each red score."
                cadence: cyclic
              tasks:
                - "Copy this year's targets onto a one-page tracker"
                - "Score each annual target red, amber or green @recurring(quarterly)"
                - "Write one correction for every target scored red"
                - "Share the scores with anyone the targets affect"
            - name: One-page monthly money dashboard
              description: |-
                ## Purpose
                Six headline numbers, updated in ten minutes a month, mean the annual review starts from figures you already know rather than a year of surprises. Income, spending, savings, total debt, cash buffer and progress on the top priority are enough; anything more and the update stops happening.

                ## Milestones
                1. Six headline numbers chosen and laid out on one page or one sheet tab.
                2. The first month filled in from statements.
                3. Twelve months of figures in place by the next annual review.
                4. The dashboard used as the opening page of the review session.

                ## Notes
                Start from the **Metrics log** template if you prefer a dated log to a spreadsheet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A six-number dashboard holds at least ten of the last twelve months of figures when the annual review opens."
                cadence: rolling
              tasks:
                - "Pick the six numbers you will track every month"
                - "Fill in last month's figures from your statements"
                - "Update the one-page dashboard with last month's figures @recurring(monthly:4)"
                - "Mark any month where a number moved more than ten percent"
            - name: Year-round review folder routine
              description: |-
                ## Purpose
                Collecting statements once a month takes five minutes; collecting a year of them in one sitting takes an afternoon and usually leaves gaps. A small monthly habit of saving statements, payslips and notable receipts into the review folder means next year's gathering step is already done.

                ## Milestones
                1. A folder for the current year with the same subfolders as last year's.
                2. A monthly reminder set for a date just after most statements arrive.
                3. Every month's statements saved within a week of being issued.
                4. A complete year in the folder on the day of the next review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The current year's folder holds every month's statements and payslips with no gaps when the next review begins."
                cadence: rolling
              tasks:
                - "Copy last year's folder structure for the new year"
                - "Switch accounts to paperless statements where that is offered"
                - "Save the month's statements and payslip into the review folder @recurring(monthly:9)"
                - "Note any account that has stopped sending statements"
            - name: Renewals and contract end dates register
              description: |-
                ## Purpose
                Annual policies, fixed-rate deals, introductory card offers and yearly subscriptions roll over on dates nobody remembers, usually onto worse terms. One register of every renewal and end date, checked monthly for the next sixty days, gives the plan a chance to act before the deadline rather than discovering it on a statement.

                ## Milestones
                1. Every product with a renewal, fixed term or promotional end date entered in one register.
                2. The notice period or cancellation window noted for each.
                3. A monthly check for anything ending in the next sixty days.
                4. A decision recorded for each item before its date: renew, switch or cancel.

                ## Notes
                This register only records the dates and the decision. The comparing and switching itself sits with your insurance, bills and account projects.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register lists every renewal and promotional end date, and no product renews in the year without a recorded decision."
                cadence: rolling
              tasks:
                - "Copy renewal and end dates from the account inventory into a register"
                - "Add the notice period for each item"
                - "Check the register for anything due in the next sixty days @recurring(monthly:18)"
                - "Record renew, switch or cancel against each item as it comes up"
            - name: Quarterly net worth snapshot
              description: |-
                ## Purpose
                One net worth figure a year can hide a bad six months; four a year show the shape. Recording every balance on the same sheet each quarter takes twenty minutes once the list exists, and turns the annual review into reading a trend rather than rebuilding a number from scratch.

                ## Milestones
                1. A snapshot sheet with one row per asset and debt and one column per quarter.
                2. Balances recorded within a week of each quarter end.
                3. Net worth and the change since last quarter calculated each time.
                4. A short note written whenever the figure fell, with the reason.

                ## Notes
                Start from the **Metrics log** template. Use the same valuation rules every quarter so changes are real, not changes of method.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly net worth figures are recorded in the year using the same asset and debt list each time."
                cadence: cyclic
              tasks:
                - "Set up the snapshot sheet from the year-end asset and debt list"
                - "Record every balance on the snapshot sheet @recurring(quarterly)"
                - "Calculate the change since the previous quarter"
                - "Write a one-line reason whenever net worth fell"
            - name: Money decision log
              description: |-
                ## Purpose
                By December nobody remembers why they took the payment holiday in April or chose the shorter loan term. A short log of every money decision over a set size, with the date, the options considered and the reason, makes the annual review a conversation about choices rather than guesswork, and shows which kinds of decision you tend to regret.

                ## Milestones
                1. A threshold set for what counts as a decision worth logging.
                2. A log with date, decision, options considered, reason and expected result.
                3. Each month's decisions entered within a few days.
                4. Every logged decision marked good, neutral or regretted at the annual review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The decision log holds every money decision above the chosen threshold for the year, each rated at the annual review."
                cadence: rolling
              tasks:
                - "Set the amount above which a decision gets logged"
                - "Create a log with columns for date, decision, options and reason"
                - "Add the month's money decisions to the log @recurring(monthly:26)"
                - "Rate each entry at the annual review as good, neutral or regretted"
            - name: Mid-year money review
              description: |-
                ## Purpose
                Six months in is the last point where a missed target can still be rescued, and mid-year often brings pay reviews, holidays and tax refunds that change the picture. A shorter version of the annual review, around ninety minutes, checks the targets, the net worth trend and the second-half calendar without redoing everything.

                ## Milestones
                1. A ninety-minute session held within a month of the half-year point.
                2. Each annual target compared with where it should be at the halfway mark.
                3. The second half's known big costs checked against the plan.
                4. Up to two targets adjusted, with the reason recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A mid-year session is held each year with every target checked and any adjustment written into the plan."
                cadence: cyclic
              tasks:
                - "Write a five-item agenda for the mid-year session"
                - "Hold the mid-year review session @recurring(yearly)"
                - "Compare each target with the halfway point figure"
                - "List the big costs due before the year ends"
            - name: Annual paperwork keep and shred routine
              description: |-
                ## Purpose
                Old statements pile up because nobody knows which ones are safe to destroy, while the one document that matters cannot be found. A written keep-until rule for each type of paper, applied once a year straight after the review, keeps the folder small and the important records easy to reach.

                ## Milestones
                1. A keep-until period written for each document type, checked against your tax authority's guidance.
                2. Documents past their date shredded or securely deleted.
                3. Long-term records such as pension, property and tax papers moved to a permanent folder.
                4. Digital copies backed up in a second location.

                ## Notes
                Keep anything connected to tax, property purchases, pensions and legal agreements longer than ordinary statements. Your tax authority publishes how long it expects records to be kept.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A keep-until list exists for each document type and the clear-out is done once a year with backups confirmed."
                cadence: cyclic
              tasks:
                - "Look up how long your tax authority expects records to be kept"
                - "Write a keep-until period for each document type"
                - "Shred statements past their keep-until date @recurring(yearly)"
                - "Back up the permanent records folder to a second location"
            - name: Monthly household money meeting
              description: |-
                ## Purpose
                When two or more people share bills, the annual review goes badly if it is the only money conversation of the year. A fixed twenty-minute meeting each month, with the same short agenda, keeps everyone working from the same numbers and turns the annual review into a longer version of something familiar.

                ## Milestones
                1. A standing date and time agreed with everyone who shares the money.
                2. A five-item agenda: last month's numbers, upcoming costs, targets, decisions, anything worrying.
                3. Notes kept for each meeting with decisions and who will act.
                4. At least ten meetings held in the year before the next annual review.

                ## Notes
                Start from the **Meeting notes** template. Keep it short and avoid using it to relitigate one person's spending.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten monthly money meetings are held in the year, each with notes recording decisions and owners."
                cadence: rolling
              tasks:
                - "Agree a standing date and time for the meeting"
                - "Write the five-item agenda and share it"
                - "Hold the household money meeting @recurring(monthly:28)"
                - "Save the notes with decisions and owners after each meeting"
            - name: Reading your own money ratios
              description: |-
                ## Purpose
                Four ratios explain more about a household's finances than any balance: savings rate, debt repayments as a share of income, housing cost as a share of income, and how many months of essential costs the cash buffer covers. Learning to calculate and read them from your own figures makes the review comparable year to year even when income changes.

                ## Milestones
                1. The four ratios defined in plain words on one page.
                2. Each ratio calculated from this year's review figures.
                3. Commonly quoted guide ranges for each ratio noted, with the source.
                4. The ratios added as a standing section of the review sheet.

                ## Notes
                Guide ranges are rules of thumb, not targets that fit every household. Use them to ask questions, not to judge.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All four ratios are calculated from the review year's figures and recorded on the review sheet with their definitions."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a plain definition of each of the four ratios"
                - "Calculate each ratio from this year's income and spending totals"
                - "Note one published guide range for each ratio with its source"
                - "Add a ratios box to the review sheet"
            - name: Understanding inflation and real returns
              description: |-
                ## Purpose
                Savings that earned 3 percent in a year when prices rose 5 percent lost buying power, even though the balance went up. Learning the difference between nominal and real figures, and checking your own accounts against the published inflation rate, keeps the review from celebrating growth that was not there. This is about reading the numbers, not choosing products.

                ## Milestones
                1. The difference between nominal and real return written in your own words.
                2. The official inflation figure for the review year found from your national statistics office.
                3. The interest rate on each savings account compared with that figure.
                4. Next year's spending plan uplifted using an inflation assumption you can explain.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each savings account's rate is compared with the year's published inflation figure and the real return noted on the review sheet."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read a short explainer on nominal versus real returns"
                - "Find the year's inflation figure from the national statistics office"
                - "Compare each savings rate with that inflation figure"
                - "Note the latest inflation figure beside your savings rates @recurring(quarterly)"
            - name: Reading pension and investment annual statements
              description: |-
                ## Purpose
                Pension and investment statements arrive once a year full of terms like transfer value, projected income and charges, and many people file them unopened. Learning which four or five lines matter, and copying them into the review, means long-term money is part of the yearly picture rather than a mystery left for later.

                ## Milestones
                1. Every pension and investment statement for the year located.
                2. The key lines identified on each: current value, contributions in the year, charges and any projection.
                3. Those figures copied into the net worth snapshot and inventory.
                4. Questions about anything unclear listed for the provider or a regulated adviser.

                ## Notes
                This project is about understanding what you hold. Decisions about switching funds or providers belong with a regulated adviser or your own research elsewhere.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Current value, yearly contributions and charges from every pension and investment statement are recorded in the review figures."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Collect this year's pension and investment statements into the review folder"
                - "Highlight value, contributions and charges on each statement"
                - "Copy those figures into the net worth snapshot"
                - "Write down questions for any provider whose statement is unclear"
            - name: Writing money targets that can be checked
              description: |-
                ## Purpose
                "Save more" and "sort out the credit card" cannot be scored in a year's time, so they never feel achieved. Practising a simple format, an amount, a date and the monthly action that gets you there, turns wishes into targets the quarterly check-ins can actually measure.

                ## Milestones
                1. A target format written down: what, how much, by when, monthly action.
                2. Three vague money wishes rewritten in that format as practice.
                3. Each practice target checked by asking whether someone else could score it.
                4. The format pinned to the front of the review folder.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written target format exists and three practice targets have been rewritten so a second person could score them."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the four-part target format on one card"
                - "Rewrite three vague money wishes using the format"
                - "Ask someone else whether each rewritten target can be scored"
                - "Pin the format to the front of the review folder"
            - name: Annual review workbook
              description: |-
                ## Purpose
                Rebuilding the review from blank paper every year wastes the first hour and makes years hard to compare. A reusable spreadsheet workbook with tabs for income, spending, net worth, ratios, scorecard and next year's targets lets each review start by copying last year's file and filling in new columns.

                ## Milestones
                1. A workbook with one tab each for income, spending, net worth, ratios, scorecard and targets.
                2. Formulas in place so totals and ratios calculate themselves.
                3. This year's figures entered and checked against the source statements.
                4. A blank copy saved for next year with last year's figures kept for comparison.

                ## Notes
                Keep it plain. A workbook you understand in two years' time is worth more than a clever one you cannot maintain.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A six-tab review workbook with working formulas holds this year's figures and a blank copy is saved for next year."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Create a workbook with six tabs named for each review section"
                - "Add total and ratio formulas on each tab"
                - "Enter this year's figures from the review folder"
                - "Save a copy for next year with a column for comparison"
            - name: Annualising small regular costs
              description: |-
                ## Purpose
                Small regular costs such as a daily coffee, a weekly takeaway and three streaming services look trivial each time and add up to a holiday over a year. Practising the habit of multiplying any regular cost to its yearly figure, and writing a list of your own top ten, gives the review a clearer sense of trade-offs than monthly figures ever do.

                ## Milestones
                1. Ten regular costs listed with how often they happen.
                2. Each one converted to an annual figure.
                3. The list ranked from largest to smallest yearly cost.
                4. One item marked to keep happily and one to question in next year's plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten regular costs are converted to annual figures, ranked, and one is flagged for discussion in next year's plan."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List ten things you pay for daily, weekly or monthly"
                - "Multiply each to a yearly figure"
                - "Rank the list from largest to smallest annual cost"
                - "Pick one to keep without guilt and one to question"
            - name: Mapping the tax year onto your money calendar
              description: |-
                ## Purpose
                In many countries the tax year does not match the calendar year, and deadlines for returns, allowances and payments fall at points that clash with a January review. Learning your own tax year dates and writing them into the money calendar means the review catches the actions with deadlines, such as using an allowance or filing on time.

                ## Milestones
                1. Your country's tax year start and end dates written down.
                2. Every tax deadline that applies to you listed with its date.
                3. Allowances that reset at the tax year end noted.
                4. Those dates added to the calendar and to the review agenda.

                ## Notes
                Your tax authority's website is the source for dates. If your situation is complicated, a qualified tax adviser can confirm which deadlines apply.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Tax year dates and every deadline that applies to you are written in the money calendar and on the review agenda."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the tax year start and end dates on your tax authority's site"
                - "List each filing or payment deadline that applies to you"
                - "Note which allowances reset when the tax year ends"
                - "Add the dates to your calendar with a reminder two weeks ahead"
            - name: Choosing next year's three money priorities
              description: |-
                ## Purpose
                Ten goals for the year means effort spread so thin that none of them move. Picking three priorities from what the review revealed, such as clearing a card, rebuilding a buffer or saving for a deposit, and putting them in order, gives every spare amount of money a clear destination and makes the quarterly check-ins short.

                ## Milestones
                1. A long list of possible priorities drawn from the review findings.
                2. Each candidate scored on urgency, cost of waiting and how much it matters to you.
                3. Three priorities chosen and ranked one to three.
                4. Everything else on the long list parked with a note on when to revisit it.

                ## Notes
                A useful default order is: anything costing high interest, then a basic cash buffer, then goals with a date. Your own situation may differ.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three ranked money priorities for next year are written down, with the parked ideas listed separately."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every priority the review suggested, however small"
                - "Score each on urgency, cost of waiting and importance to you"
                - "Choose three and rank them one to three"
                - "Write the parked ideas on a separate list with a revisit date"
            - name: Setting next year's numbered targets
              description: |-
                ## Purpose
                Once the three priorities are chosen, each needs a number, a date and a monthly action, or the year will drift. Turning priorities into targets that the quarterly check-ins can score, and checking that their monthly cost fits inside the budget, is the step that makes the review a plan rather than a report.

                ## Milestones
                1. Each priority written as an amount, a deadline and a monthly action.
                2. The combined monthly cost of all targets checked against what the budget can carry.
                3. Quarterly milestones set for each target.
                4. Targets copied into the quarterly tracker and shared with the household.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every priority has a written amount, deadline, monthly action and quarterly milestones, and their total cost fits the budget."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write each priority as an amount, a date and a monthly action"
                - "Add up what the targets need each month combined"
                - "Check the combined figure against the money left after essentials"
                - "Set a milestone for each target at every quarter end"
            - name: Annual spending plan for next year
              description: |-
                ## Purpose
                A monthly budget built in January often forgets the costs that only arrive once or twice a year. Setting a yearly figure for each of the ten spending headings first, informed by this year's totals and the targets just agreed, gives the monthly budget a frame that already includes car services, birthdays and annual renewals.

                ## Milestones
                1. A yearly figure set for each of the ten spending headings.
                2. Each figure compared with this year's actual and any change explained.
                3. Total planned spending plus target contributions equal to expected net income.
                4. Yearly figures divided into monthly amounts and handed over to the monthly budget.

                ## Notes
                Start from the **Monthly budget and bills** template to turn the yearly figures into a month-by-month plan.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A yearly spending figure exists for each heading, totalling with target contributions to expected net income."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy this year's ten heading totals into a new column"
                - "Set next year's figure beside each one"
                - "Write a reason for any heading that changes by more than ten percent"
                - "Check planned spending plus targets equals expected income"
            - name: Next year's known big costs forecast
              description: |-
                ## Purpose
                Some of next year's largest costs are already predictable: a car due its major service, a wedding invitation, a boiler past fifteen years, school trips, a milestone birthday. Listing them by month with a rough figure turns them from emergencies into planned items, and shows which months will need extra cash.

                ## Milestones
                1. Every known or likely big cost for next year listed with an estimated amount.
                2. Each cost placed in the month it is expected.
                3. The months with the heaviest load identified.
                4. Each cost assigned to a funding source: budget, savings pot or buffer.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A month-by-month list of next year's known big costs exists, each with an estimate and a named funding source."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Walk through next year's calendar and list every big expected cost"
                - "Estimate each cost from quotes or last time's price"
                - "Place each cost in the month it falls"
                - "Name where the money for each will come from"
            - name: Price rise check for next year's plan
              description: |-
                ## Purpose
                Rent reviews, insurance renewals, council or property taxes, energy tariffs and subscription increases usually land in the first few months of the year. Checking which fixed costs are already announced to rise, and by how much, stops the new plan being out of date by February.

                ## Milestones
                1. Every fixed cost listed with its current monthly or yearly amount.
                2. Announced or likely increases found for each, from letters, emails or provider notices.
                3. Next year's spending plan updated with the new figures.
                4. The total yearly increase in fixed costs calculated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every fixed cost has next year's expected amount recorded and the spending plan reflects the total increase."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every fixed cost with its current amount"
                - "Search recent emails and letters for price change notices"
                - "Ask the agent to summarise the notices into a list of old and new prices"
                - "Update the spending plan with the new figures"
            - name: Deciding in advance where a pay rise goes
              description: |-
                ## Purpose
                Pay rises tend to disappear into everyday spending within a few months without any decision being made. Agreeing before the next rise, bonus or tax refund arrives what share goes to the top priority, what share to savings and what share to enjoy, means extra income actually moves the plan forward.

                ## Milestones
                1. Expected pay changes, bonuses or refunds for next year listed.
                2. A split agreed for any extra income: priority, savings and enjoyment shares.
                3. The split written into the plan and shared with the household.
                4. Standing orders ready to adjust on the day a rise first appears.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split for any extra income next year exists and is applied to the first rise, bonus or refund that arrives."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List any pay rise, bonus or refund you expect next year"
                - "Agree the share for the top priority, savings and enjoyment"
                - "Write the split into the plan"
                - "Adjust standing orders on the day the higher pay first arrives"
            - name: Stop, start and continue money habits
              description: |-
                ## Purpose
                Numbers show what happened; habits explain why. Listing what to stop, what to start and what to keep doing, based on this year's evidence, gives the plan a behavioural side that targets alone miss. Three items in each column is plenty.

                ## Milestones
                1. Up to three habits to stop, each linked to a figure from the review.
                2. Up to three habits to start, each small enough to begin next week.
                3. Up to three habits worth continuing, so the good ones are kept on purpose.
                4. The list pinned where you will see it at the monthly meeting.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A stop, start and continue list with no more than three items per column is written and linked to review figures."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write three habits to stop, each tied to a review figure"
                - "Write three habits to start next week"
                - "Write three habits that worked and should continue"
                - "Pin the list somewhere you will see it each month"
            - name: Account simplification after the review
              description: |-
                ## Purpose
                The inventory usually reveals accounts with a few pounds or dollars left in them, cards kept "just in case" and duplicate savings pots. Closing or merging the ones that serve no purpose makes next year's review faster, reduces the places fraud can hide and gets small idle balances working for a priority.

                ## Milestones
                1. Every product in the inventory marked keep, merge or close.
                2. Balances from closing accounts moved to a named destination.
                3. Closures confirmed in writing by each provider.
                4. The inventory updated to show the simpler set of accounts.

                ## Notes
                Check with the provider before closing an old card or your oldest account, as some people prefer to keep a long-standing account open for their credit history.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every dormant or duplicate product is closed or merged with written confirmation, and the inventory reflects the change."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark each inventory item keep, merge or close"
                - "Move the balance of each account you are closing"
                - "Ask each provider for written confirmation of the closure"
                - "Update the inventory once each closure is confirmed"
            - name: Giving budget for the year
              description: |-
                ## Purpose
                Charitable donations, sponsorships and collections at work tend to be decided on the spot, so the yearly total is either surprisingly high or lower than you would like. Choosing an annual giving figure and the causes it goes to puts generosity into the plan on purpose, and in some countries makes tax relief on donations easier to claim.

                ## Milestones
                1. This year's giving totalled from statements, including one-off sponsorships.
                2. A giving figure for next year agreed, as an amount or a share of income.
                3. Up to five causes chosen, with regular and ad hoc amounts set.
                4. Records of donations kept in the review folder for any tax claim.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An annual giving figure and a list of chosen causes are written into next year's plan, with donation records kept."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Total this year's donations and sponsorships from statements"
                - "Agree next year's giving figure"
                - "Choose up to five causes and split the figure between them"
                - "Review giving against the annual budget @recurring(quarterly)"
            - name: Annual review session
              description: |-
                ## Purpose
                All the preparation pays off in one focused half day: looking back, scoring the year, and leaving the room with three priorities and numbered targets. Running the session to a fixed agenda, with figures prepared beforehand and phones away, stops it sliding into an argument or an afternoon of downloading statements.

                ## Milestones
                1. A written agenda with timings: look back, scorecard, net worth, priorities, targets.
                2. All figures prepared and printed or open before the session starts.
                3. The session held and finished within the planned time.
                4. Priorities, targets and actions written up within two days.

                ## Notes
                Two sessions of two hours each often work better than one long afternoon: look back in the first, plan in the second.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The review session is held on the booked date and a written summary of priorities, targets and actions exists within two days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a timed agenda for the review session"
                - "Print or open every prepared figure before the session"
                - "Hold the session with phones in another room"
                - "Write up priorities, targets and actions within two days"
            - name: New year money kick-off with the household
              description: |-
                ## Purpose
                Targets set by one person and announced to everyone else rarely survive the first shared decision. A short, upbeat kick-off where the whole household hears the priorities, older children included where it suits, and everyone agrees one thing they will do, builds the support that makes the plan last.

                ## Milestones
                1. A thirty-minute kick-off held in the first weeks of the plan year.
                2. The three priorities explained in plain words with the reason for each.
                3. Each person's own contribution agreed, sized to their age and role.
                4. A visible reminder of the priorities placed somewhere shared.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A household kick-off is held at the start of the plan year and each person has agreed one contribution to the priorities."
                cadence: cyclic
              tasks:
                - "Hold the new year money kick-off @recurring(yearly)"
                - "Prepare a one-minute explanation of each priority"
                - "Ask each person for one thing they will do this year"
                - "Put a visible reminder of the priorities somewhere shared"
            - name: One-page annual money report
              description: |-
                ## Purpose
                Review notes scattered across a workbook and a notebook are hard to read a year later. Writing the year up on one page, with the headline numbers, what went well, what did not and next year's targets, creates a record that the next review opens with and that a partner, adviser or executor could understand at a glance.

                ## Milestones
                1. A one-page report with headline numbers: income, spending, savings rate, net worth, debt.
                2. Three things that went well and three that did not, in a sentence each.
                3. Next year's priorities and targets listed at the bottom.
                4. The report saved in the review folder and in the permanent records.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page annual report with headline figures, lessons and next year's targets is saved in the review and permanent folders."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy the five headline numbers onto one page"
                - "Ask the agent to draft three wins and three lessons from your review notes"
                - "Add next year's priorities and targets at the bottom"
                - "Save the report in the review folder and permanent records"
            - name: Milestone birthday money review
              description: |-
                ## Purpose
                Turning 30, 40, 50 or 60 is a natural moment to look further than one year: how pension savings compare with the retirement you picture, whether the mortgage end date still suits, what protection the family needs now. An extended review around the birthday asks the bigger questions that a normal annual review skips.

                ## Milestones
                1. The milestone birthday review scheduled within three months of the date.
                2. Five long-range questions written for this decade of life.
                3. Each question answered with current figures or marked for professional advice.
                4. Two actions for the coming decade added to the plan.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An extended review is held within three months of the milestone birthday, with two decade-long actions written into the plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a two-hour slot near your next milestone birthday"
                - "Write five money questions that matter for the coming decade"
                - "Answer each with current figures or mark it for an adviser"
                - "Add two actions for the decade to this year's plan"
            - name: Celebrating a target reached
              description: |-
                ## Purpose
                Hitting a target with no acknowledgement makes the next one feel like more of the same grind. Planning a modest, pre-costed reward for each major target, chosen when the target is set, gives the year visible wins and keeps motivation alive into the second half.

                ## Milestones
                1. A reward chosen for each of the three targets when they are set.
                2. Each reward costed and included in the spending plan.
                3. The reward taken within a month of the target being hit.
                4. The win noted in the annual report.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each annual target has a pre-costed reward in the plan, and every target hit in the year is followed by its reward."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Choose a small reward for each of the three targets"
                - "Add the cost of the rewards to the spending plan"
                - "Book or buy the reward within a month of a target being hit"
                - "Record the win in the annual report"
            - name: First annual review with little history
              description: |-
                ## Purpose
                In the first year of earning, or after a move abroad or a long time without records, there is no previous review to compare against and often only a few months of statements. A lighter first review that sets a baseline, a simple net worth and two starter targets is far more useful than waiting until you have a perfect year of data.

                ## Milestones
                1. Whatever statements exist gathered, even if only three months.
                2. Monthly income and spending estimated and multiplied to a year.
                3. A first net worth figure recorded, even if it is negative.
                4. Two starter targets set, such as a first buffer and a monthly savings amount.

                ## Notes
                A negative net worth from student or other loans is normal at the start and is still a useful baseline.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A first review sheet records estimated annual income and spending, a net worth figure and two starter targets."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download whatever months of statements your accounts hold"
                - "Estimate a typical month's income and spending and multiply by twelve"
                - "Record your first net worth figure, positive or negative"
                - "Set two starter targets you could reach within a year"
            - name: Joint annual review for couples
              description: |-
                ## Purpose
                Couples often review money separately and then argue about different versions of the year. Preparing figures for each person's own accounts and the shared ones, then reviewing together with one agenda, gives one picture of the household, makes room for each person's own goals and avoids one partner carrying all the knowledge.

                ## Milestones
                1. Each partner's own income, spending and balances prepared before the session.
                2. Shared accounts and joint debts set out in one table.
                3. One shared priority and one personal priority each agreed.
                4. Both partners able to say where every account is and roughly what it holds.

                ## Notes
                If money conversations tend to become heated, agree in advance that either person can pause the session and come back to it another day.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A joint review is held with each partner's figures prepared, one shared and two personal priorities agreed and recorded."
                cadence: cyclic
              tasks:
                - "Book the joint review evening @recurring(yearly)"
                - "Prepare your own accounts' figures before the session"
                - "Set out shared accounts and joint debts in one table"
                - "Agree one shared priority and one personal priority each"
            - name: Family annual review with children's costs
              description: |-
                ## Purpose
                Children change the money picture every year: nursery to school, growing out of everything, clubs, phones, birthdays and later driving lessons and university. Adding a children's section to the review, with this year's real cost per child and next year's expected changes, stops family costs being a blur inside the general spending figure.

                ## Milestones
                1. This year's spending on each child totalled under a few headings.
                2. Expected changes for next year listed: school stage, activities, childcare, devices.
                3. Next year's family costs added to the spending plan.
                4. Any savings set aside for each child recorded with its current balance.

                ## Notes
                Older children can join part of the session to discuss their own pocket money or allowance, which is a gentle introduction to planning.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The review includes a per-child cost total for the year and expected changes for next year written into the spending plan."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Total this year's costs for each child under five headings"
                - "List what changes for each child next year"
                - "Add next year's expected family costs to the spending plan"
                - "Record the balance of any savings held for each child"
            - name: Annual review on irregular or self-employed income
              description: |-
                ## Purpose
                When income arrives in uneven lumps, a monthly view hides the real picture and a good December can disguise a weak year. Reviewing freelance or commission income by quarter, alongside the tax set aside and the months the buffer was used, shows whether the year truly paid enough and what to aim for next year.

                ## Milestones
                1. Income for the year listed by month and by client or source.
                2. Tax set aside compared with tax actually due or estimated.
                3. Months where the buffer was drawn on identified.
                4. A target annual income for next year and a monthly check against it.

                ## Notes
                Keep personal and business figures separate. Your accountant or tax adviser can confirm what the business side owes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The review shows monthly income by source, tax set aside versus due, buffer usage and a target annual income for next year."
                cadence: cyclic
              tasks:
                - "List each month's income by client or source"
                - "Compare money set aside for tax with the amount due"
                - "Mark the months you drew on your buffer"
                - "Compare the month's income against the annual target @recurring(monthly:12)"
            - name: Review after a hard money year
              description: |-
                ## Purpose
                After job loss, illness, a separation or a debt crisis, a standard review full of targets can feel like an exam you have already failed. A gentler version records what happened without judgement, notes what held up, and sets one or two recovery steps sized to where you actually are, so the review helps rather than hurts.

                ## Milestones
                1. The main events of the year written down in a few lines, without blame.
                2. What held up listed: support used, bills kept paid, help that worked.
                3. Current position recorded honestly, including any arrears.
                4. One or two recovery steps chosen for the next three months, not the whole year.

                ## Notes
                If you are behind on essential bills, free debt and money advice services can help before you set any savings target.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A review records the year's events, current position including arrears and no more than two recovery steps for the next quarter."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down the year's main money events in five lines"
                - "List what held up and who helped"
                - "Record your current balances and any arrears honestly"
                - "Choose one or two steps for the next three months"
            - name: Annual review for retirees on a fixed income
              description: |-
                ## Purpose
                Retirement turns the review on its head: the question is no longer how much was saved but whether income from pensions, savings and benefits covered the year, and how long the plan can last. Checking withdrawals against a yearly spending figure, and listing the income dates and any entitlements, gives a retiree and their family confidence that the money is on course.

                ## Milestones
                1. Every income source for the year listed: state and private pensions, annuities, savings withdrawals, benefits.
                2. Total spending compared with total income for the year.
                3. Withdrawals from savings recorded against the yearly figure agreed with any adviser.
                4. Unclaimed entitlements or pension credits checked with an official calculator.

                ## Notes
                Decisions about how much to draw from pensions or investments belong with a regulated adviser. This review records and checks the plan, it does not set it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The retiree review shows income by source, spending versus income and withdrawals compared with the agreed yearly figure."
                cadence: cyclic
              tasks:
                - "List every pension and other income received this year"
                - "Compare total spending with total income"
                - "Check withdrawals against the yearly spending figure @recurring(quarterly)"
                - "Run an official benefits calculator to check for unclaimed entitlements"
            - name: Five-year money plan
              description: |-
                ## Purpose
                One-year targets can keep you busy without pointing anywhere. A five-year plan with three to five larger goals, each broken into a figure for every year, means each annual review sets targets that add up to something, whether that is a home deposit, being debt free or a career break.

                ## Milestones
                1. Three to five goals for the next five years written with amounts.
                2. Each goal broken into yearly milestones.
                3. This year's targets checked to confirm they feed the five-year goals.
                4. The plan rolled forward one year at each annual review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A five-year plan lists three to five goals with yearly milestones, and this year's targets are linked to them."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Write three to five goals you want reached in five years"
                - "Break each goal into a figure for each year"
                - "Check this year's targets against the first year's milestones"
                - "Roll the five-year plan forward one year @recurring(yearly)"
            - name: Lifestyle creep audit across three years
              description: |-
                ## Purpose
                Spending tends to rise quietly in step with income, so a higher salary leaves savings no better than before. Comparing three years of income, spending headings and savings rate side by side shows which categories have crept, and whether each increase was a deliberate choice or simply drift.

                ## Milestones
                1. Three years of income, spending headings and savings rate in one table.
                2. Percentage change worked out for income and each heading.
                3. Headings that grew faster than income identified.
                4. Each fast-growing heading marked as chosen or drifted, with a response for the drifted ones.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A three-year table shows which spending headings grew faster than income, each labelled chosen or drifted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull three years of income and heading totals into one table"
                - "Calculate the yearly change for income and each heading"
                - "Highlight headings that grew faster than income"
                - "Label each highlighted heading chosen or drifted"
            - name: Stress testing next year's plan
              description: |-
                ## Purpose
                Plans that work only if nothing goes wrong are wishes. Testing next year's plan against three scenarios, such as income falling by a fifth, a large unplanned bill, or loan rates rising, shows how long the buffer would last and which target would have to give way first, so the response is decided calmly in advance.

                ## Milestones
                1. Three realistic scenarios chosen for your household.
                2. The effect of each on monthly cash flow and the buffer calculated.
                3. For each scenario, the first target to pause and the first cost to cut written down.
                4. The scenarios and responses filed with the plan.

                ## Notes
                Start from the **Risk register** template to record each scenario with its likelihood, impact and response.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Three scenarios are tested against next year's plan, each with its cash effect and a written response."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose three scenarios that could realistically hit your household"
                - "Work out the monthly cash effect of each"
                - "Calculate how many months the buffer lasts in each case"
                - "Write the first target to pause and first cost to cut for each"
            - name: Preparing a pack for a financial adviser
              description: |-
                ## Purpose
                A paid session with a regulated financial adviser or planner is expensive time to spend finding statements. Bringing the annual review pack, with net worth, income, spending, targets and specific questions, means the meeting goes straight to advice and costs less in follow-up.

                ## Milestones
                1. The reason for seeking advice written in two or three sentences.
                2. A pack prepared: net worth snapshot, income summary, spending plan, five-year goals, inventory.
                3. Up to ten specific questions written in priority order.
                4. The adviser's regulated status checked on the official register before the meeting.

                ## Notes
                Check how the adviser is paid, by fee or commission, before you book, and ask for the cost in writing.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An adviser pack with core figures and up to ten prioritised questions is ready, and the adviser's regulated status is confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write two sentences on why you want advice now"
                - "Assemble the review figures into a single pack"
                - "List up to ten questions in priority order"
                - "Check the adviser on the official financial regulator's register"
            - name: Money information sheet for your next of kin
              description: |-
                ## Purpose
                If you were suddenly unable to manage your money, someone would need to know which accounts exist, which bills go out, where the documents are and who to call. The annual review is the natural moment to refresh a short information sheet that holds this, without passwords, kept somewhere a trusted person can reach.

                ## Milestones
                1. A sheet listing each account, policy and pension by provider and purpose, with no passwords or full numbers.
                2. Regular bills and where they are paid from noted.
                3. The location of wills, policies and key documents recorded.
                4. A trusted person told where the sheet is kept.

                ## Notes
                Never write passwords, PINs or full card numbers on the sheet. Point to where documents live instead.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A password-free information sheet listing accounts, bills and document locations is stored safely and a trusted person knows where it is."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "List each account and policy by provider and purpose without numbers"
                - "Note which bills go out and from which account"
                - "Write where wills, policies and key documents are kept"
                - "Update the information sheet after the annual review @recurring(yearly)"
---

# Annual Money Plan Review

This area is the once-a-year sit-down with your money: what came in, what went out, what you own and owe, and what you want next year to look like. It starts with the foundations (a review date, twelve months of statements, an account inventory, income and spending totals, a net worth snapshot and a scorecard against last year), then moves through the routines that run between reviews, the skills that make the numbers readable, the decisions that turn a review into a plan, the dated sessions themselves, versions for couples, families, freelancers, retirees and people coming out of a hard year, and finally specialist work such as a five-year plan and scenario testing.

What repeats is a monthly statement save, dashboard update, renewals check and household money meeting, quarterly net worth snapshots and target check-ins, and yearly fixtures for the review weekend, the mid-year check, the new year kick-off and the paperwork clear-out. The Metrics log, Meeting notes, Monthly budget and bills and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
