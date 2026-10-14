---
id: wealth-investing.annual-wealth-review
name: Annual Wealth Review
description: "One fixed day a year to check the whole picture: statements gathered, returns and fees worked out, allocation, tax allowances and beneficiaries checked, and a short report with three actions for the year ahead."
category: personal
version: 1.0.0
tags: [wealth-investing, annual-wealth-review, everyone, yearly-review, returns, fees, beneficiaries, progress-report]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - meeting-notes
    - risk-register
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Annual Wealth Review
          description: "Reviewing the whole wealth picture each year: returns, fees, allocation, tax use, beneficiaries and progress toward targets."
          projects:
            - name: Annual wealth review date and scope
              description: |-
                ## Purpose
                Without a fixed date, a review slides from January to June and then into next year. Choosing one month that suits your tax year and your diary, and writing down which accounts and questions are in scope, turns a vague good intention into an appointment you keep.

                ## Milestones
                1. A review month chosen, tied either to the calendar year end or to the tax year end, with the reason written down.
                2. A list of what is in scope: investments, pensions, cash, property, debts, protection and estate documents.
                3. A list of what is deliberately out of scope for now, such as day-to-day budgeting.
                4. The review booked as a repeating calendar event with half a day blocked.

                ## Notes
                Most people find the month after their tax year ends works best, because year-end statements and tax certificates have arrived by then.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A review month and a written scope list exist, and the review sits in the calendar as a yearly half-day event."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down when your tax year ends and when year-end statements usually arrive"
                - "Pick the review month and note why you chose it"
                - "List what the review covers and what it leaves out"
                - "Hold the half-day review on the date in your calendar @recurring(yearly)"
            - name: Review document checklist by account
              description: |-
                ## Purpose
                Half the time in a first review is lost hunting for the right statement, and the wrong one (a monthly summary instead of the year-end valuation) makes every later figure shaky. A checklist naming the exact document each provider sends, and when, means the gathering takes an evening instead of three weekends.

                ## Milestones
                1. Every account, pension, policy and loan listed with the provider name.
                2. The exact year-end document named for each: annual statement, tax certificate, costs and charges summary or redemption statement.
                3. The usual arrival month noted for each document.
                4. Providers that send nothing by default marked, with how to request a statement.

                ## Notes
                Start from the **Operational checklist** template. Keep account references shortened to the last four digits.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checklist names every provider, the exact year-end document it sends and the month it arrives."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every provider you hold money with from banking apps and email"
                - "Name the year-end document each provider sends"
                - "Note the month each document usually arrives"
                - "Ask any provider that sends nothing how to request an annual statement"
            - name: Annual review workbook with standing sections
              description: |-
                ## Purpose
                If every year's review is laid out differently, you cannot compare one year with the next, which is the whole point of doing it. A workbook with the same sections every year (balances, flows, returns, costs, allocation, allowances, beneficiaries, progress, actions) makes this year's figures sit directly beside last year's.

                ## Milestones
                1. A workbook with one tab per standing section, in a fixed order.
                2. A column for each review year, so figures line up across years.
                3. A short definition at the top of each tab saying exactly what goes in it.
                4. The workbook saved in one place with a backup copy.

                ## Notes
                Start from the **Metrics log** template. Resist adding sections in the first year; a short workbook you finish beats a long one you abandon.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A workbook exists with at least eight named section tabs and a column per year, backed up in a second location."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the workbook from the metrics log template"
                - "Add one tab for each standing section in a fixed order"
                - "Write a one-line definition at the top of every tab"
                - "Save a backup copy somewhere separate from the original"
            - name: Opening figures for your first review
              description: |-
                ## Purpose
                Your first review has nothing to compare against, so its findings feel weightless. Rebuilding last year's closing values from old statements gives you a starting line, so the first review can already say how much the whole picture grew and why.

                ## Milestones
                1. Closing values for last year found for every account on the checklist.
                2. Gaps marked where no statement exists, with an estimate and its source.
                3. Last year's total contributions and withdrawals added up.
                4. The figures entered in the workbook's first year column.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The workbook holds last year's closing value for every account, with any estimate labelled and sourced."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find last year's year-end statement for your largest account first"
                - "Work through the checklist and record each closing value"
                - "Label any estimated figure with where it came from"
                - "Total last year's money paid in and taken out"
            - name: Targets the review will measure against
              description: |-
                ## Purpose
                Without written targets, a review can only say whether numbers went up, which in most years they will. Collecting your existing goals (a retirement number, a savings rate, a target mix of shares and bonds, a cost ceiling) on one page gives the review a yardstick and makes progress, or drift, visible.

                ## Milestones
                1. One page listing each long-term target with its figure and target date.
                2. The source of each target noted: your own plan, an adviser's report or a projection tool.
                3. Missing targets flagged, with a placeholder until the right area sets them.
                4. The page linked from the front of the review workbook.

                ## Notes
                This project collects targets, it does not set them from scratch. Where a target is missing, the sibling areas on retirement numbers, allocation and fees are the place to work it out.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single targets page lists every long-term figure the review checks, each with a date and a source."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every money target you already have, however rough"
                - "Add a target date and a source beside each one"
                - "Flag the targets you are missing"
                - "Re-read the targets page the week before each review @recurring(yearly)"
            - name: Ten standing questions for the review agenda
              description: |-
                ## Purpose
                Reviews drift into looking at whichever account is most exciting. A fixed list of ten questions, the same every year, keeps attention on what matters: did we save enough, what did it cost, are we on track, is anything exposed, is the paperwork current.

                ## Milestones
                1. Ten questions written, each answerable with a figure or a yes or no.
                2. Each question mapped to the workbook tab that answers it.
                3. The questions ordered from quickest to slowest to answer.
                4. The agenda printed or pinned at the front of the workbook.

                ## Notes
                A sensible starting ten: what did we save, what did it earn, what did it cost, how far from the target mix, which allowances went unused, are beneficiaries current, how much cash is idle, what debt remains, are we on track, what three things change this year.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written agenda of ten questions exists, each linked to the workbook tab that answers it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Draft ten questions you want answered every year"
                - "Reword any question that cannot be answered with a figure or a yes or no"
                - "Link each question to its workbook tab"
                - "Pin the agenda at the front of the workbook"
            - name: Statement locations map for review day
              description: |-
                ## Purpose
                On review day you need to know where each document lives: a provider portal, an email folder, a paper file or a partner's login. A one-page map of locations (never the passwords themselves) stops the review stalling while someone resets an account they have not opened in a year.

                ## Milestones
                1. Each provider listed with where its documents are found: portal, app, email or paper.
                2. The account holder named for each, so joint and individual accounts are clear.
                3. Portals with expired access or old email addresses identified and fixed.
                4. The map stored with the workbook, holding no passwords or security answers.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page map shows where every provider's documents are found and who holds access, with no credentials in it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note beside each provider whether documents come by portal, email or post"
                - "Name who holds access to each account"
                - "Log in once to every portal you have not opened this year"
                - "Update the contact email on any account still using an old address"
            - name: Who joins the review and what each brings
              description: |-
                ## Purpose
                Done alone, a review misses the partner's workplace pension, the accountant's view of the tax figures or the adviser's fee breakdown. Deciding in advance who takes part, and what each person brings to the table, keeps the session short and the picture complete.

                ## Milestones
                1. The people involved named: partner, adviser, accountant or an adult child.
                2. What each person brings listed, such as their own statements or a fee summary.
                3. Which parts are done together and which alone agreed.
                4. Everyone told the review date at least a month ahead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list names each review participant, what they bring and which sections they join, shared a month before the date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List everyone whose money or advice belongs in the review"
                - "Write what each person needs to bring"
                - "Agree which sections you cover together"
                - "Send everyone the date and their list"
            - name: Year-round notes file for the next review
              description: |-
                ## Purpose
                By the time the review comes round, the fee rise in March and the forgotten bonus in August have been forgotten. A running notes file, added to once a month, turns the review into a check of things you already noticed rather than an attempt to remember a whole year.

                ## Milestones
                1. A single notes file kept beside the workbook.
                2. At least one entry for each month of the year.
                3. Each entry tagged with the review section it belongs to.
                4. The notes read through at the start of each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The notes file holds at least ten monthly entries by review day, each tagged with a review section."
                cadence: rolling
              tasks:
                - "Create the notes file next to the review workbook"
                - "Add anything money-related that surprised you this month @recurring(monthly:12)"
                - "Tag each note with the review section it belongs to"
                - "Read the whole file at the start of the review"
            - name: Quarterly light check between annual reviews
              description: |-
                ## Purpose
                Twelve months is long enough for a missed pension contribution or a stalled direct debit to cost real money. Fifteen minutes a quarter, checking four figures only, catches those problems early without turning the annual review into a monthly chore.

                ## Milestones
                1. Four quarterly figures chosen, such as total invested, contributions made, cash held and debt owed.
                2. A small quarterly table added to the workbook.
                3. Each quarter's figures entered within two weeks of the quarter end.
                4. Anything odd copied into the notes file for the annual review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly rows are filled in by the annual review, each within two weeks of its quarter end."
                cadence: cyclic
              tasks:
                - "Choose the four figures you will check each quarter"
                - "Add a quarterly table to the review workbook"
                - "Record the four quarterly figures and note anything odd @recurring(quarterly)"
            - name: Year-end statement collection window
              description: |-
                ## Purpose
                Year-end statements arrive over six to ten weeks, and a few never come unless requested. Setting a collection window with a firm close date means the review starts with a complete set rather than a pile with three gaps.

                ## Milestones
                1. A start and close date for collecting documents set each year.
                2. Every item on the document checklist ticked off or chased.
                3. Documents saved in a folder named for the review year.
                4. A note of any statement that arrived late, for next year's checklist.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year's folder holds every document on the checklist by the close date, with late arrivals noted."
                cadence: cyclic
              tasks:
                - "Create a folder named for this review year"
                - "Download year-end statements from every provider on the checklist @recurring(yearly)"
                - "Chase any provider whose statement has not arrived by the close date"
                - "Note which documents arrived late for next year's checklist"
            - name: Rule and allowance changes noted before the review
              description: |-
                ## Purpose
                Tax allowances, pension limits and protection thresholds change, sometimes quietly, and last year's assumptions can make this year's review wrong. Reading the official summary of changes before review day means every allowance figure in the workbook is the current one.

                ## Milestones
                1. The tax authority's summary of changes for the new tax year found and read.
                2. Each changed allowance or limit updated in the workbook.
                3. Changes that affect your plans noted for the review agenda.
                4. The source and date of each figure recorded.

                ## Notes
                Use official sources only. Commentary sites are useful for explanation but often lag or simplify the actual rules.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every allowance and limit in the workbook carries an official source and a date from the current tax year."
                cadence: cyclic
              tasks:
                - "Read the tax authority's summary of changes for the new tax year @recurring(yearly)"
                - "Update each changed allowance or limit in the workbook"
                - "Add any change that affects your plans to the review agenda"
                - "Record the source and date beside each figure"
            - name: Review action tracker and monthly follow-up
              description: |-
                ## Purpose
                Most annual reviews produce good actions and then nothing happens until the next review finds them still undone. A tracker with an owner and a month for each action, checked monthly, is what turns the review from a report into change.

                ## Milestones
                1. Every action from the review listed with an owner and a target month.
                2. Each action marked done, in progress or dropped with a reason.
                3. A monthly check that takes under ten minutes.
                4. At least three quarters of actions closed by the next review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three quarters of the previous review's actions are marked done by the next review, each with a date."
                cadence: rolling
              tasks:
                - "Copy every action from the review into the tracker"
                - "Give each action an owner and a target month"
                - "Tick off or reschedule open review actions @recurring(monthly:20)"
                - "Write a reason beside any action you drop"
            - name: Six-month progress checkpoint
              description: |-
                ## Purpose
                Halfway through the year is late enough to see whether the plan is working and early enough to fix it. A short checkpoint against the review's three priorities and the contribution plan catches drift while there are still six months of contributions left.

                ## Milestones
                1. Progress on each of the three priority actions recorded.
                2. Contributions so far compared with the half-year figure in the plan.
                3. Any shortfall turned into a catch-up step with a month attached.
                4. A short note written for the annual review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated half-year note records progress on all three priorities and contributions against plan."
                cadence: cyclic
                effort_hours_estimate: "1"
              tasks:
                - "Run the half-year checkpoint against the three priorities @recurring(yearly)"
                - "Compare contributions so far with the half-year plan figure"
                - "Set a catch-up step for any shortfall"
                - "Write a short checkpoint note for the annual review"
            - name: Year-on-year review archive
              description: |-
                ## Purpose
                Reviews are worth far more in year five than in year one, but only if the earlier reports can be found. Keeping each year's report, workbook snapshot and decisions in one archive lets you see patterns no single year shows, like a savings rate that falls every time pay rises.

                ## Milestones
                1. An archive folder with one subfolder per review year.
                2. Each year holding the one-page report, a locked copy of the workbook and the action list.
                3. File names that sort by year.
                4. A backup of the archive kept in a second location.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The archive holds a report, workbook copy and action list for every completed review year, backed up in two places."
                cadence: cyclic
              tasks:
                - "Create an archive folder with a subfolder for this year"
                - "Save a read-only copy of the workbook in the year's subfolder"
                - "File the signed-off report and action list in the archive @recurring(yearly)"
                - "Check the archive backup opens on a second device"
            - name: Annual review week routine
              description: |-
                ## Purpose
                Doing the whole review in one sitting is exhausting and usually ends at the hardest section. Spreading it across a week, with gathering on day one, figures on days two to four and decisions on the last day, keeps each session under two hours.

                ## Milestones
                1. A five-step review week written down with what happens on each day.
                2. Each day limited to two hours or less.
                3. The routine run end to end at least once.
                4. Changes to the routine noted after each run.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written five-step review week exists and has been completed in full at least once, with notes on what to change."
                cadence: cyclic
              tasks:
                - "Write the five steps of review week in order"
                - "Assign each step to a day and cap it at two hours"
                - "Work through the review week checklist @recurring(yearly)"
                - "Note what to change in the routine next time"
            - name: Personal rate of return for the year
              description: |-
                ## Purpose
                Providers report returns that include the money you paid in, or a fund's return that ignores when you bought. Learning to work out your own money-weighted return, the return on your actual pounds or dollars after contributions and withdrawals, gives one honest number for how the year went.

                ## Milestones
                1. The difference between time-weighted and money-weighted return understood and written in a sentence.
                2. Opening value, closing value and dated cash flows collected for one account.
                3. A money-weighted return worked out with a spreadsheet function such as XIRR.
                4. The method applied to the whole portfolio and recorded in the workbook.

                ## Notes
                A rough answer is fine: the aim is to separate what you paid in from what the money earned, not to match a fund manager's figures to two decimal places.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The workbook shows a money-weighted return for the whole portfolio, with the cash flows and method that produced it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a short explainer on time-weighted versus money-weighted returns"
                - "Collect opening value, closing value and dated deposits for one account"
                - "Calculate that account's return with the XIRR spreadsheet function"
                - "Repeat the calculation for the whole portfolio"
            - name: Real return after inflation
              description: |-
                ## Purpose
                Six per cent growth in a year of five per cent inflation bought you almost nothing extra. Adjusting the year's return for inflation shows whether your wealth actually grew in what it can buy, which is the figure long-term targets depend on.

                ## Milestones
                1. The official inflation figure for the review year found, with its source.
                2. The nominal return converted to a real return using the correct formula rather than simple subtraction.
                3. Real returns for previous years added where figures exist.
                4. The real return recorded beside the nominal one in the workbook.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The workbook shows a real return beside the nominal return for the review year, with the inflation figure sourced."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the official consumer price inflation figure for the review year"
                - "Learn the formula for converting a nominal return to a real return"
                - "Calculate this year's real return"
                - "Record it beside the nominal return in the workbook"
            - name: Fair benchmark for your portfolio's year
              description: |-
                ## Purpose
                Comparing a cautious mixed portfolio with a headline share index will make a sensible year look like failure, or a lucky one look like skill. Choosing one or two benchmarks that match your actual mix tells you whether the year's result came from your choices or just from the market.

                ## Milestones
                1. Your current mix of shares, bonds and cash written down.
                2. One blended benchmark chosen that matches that mix, such as a low-cost multi-asset fund at a similar risk level.
                3. The benchmark's return for the review year recorded.
                4. The gap between your return and the benchmark explained in two sentences.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The workbook records a benchmark matched to your mix, its return for the year and a written explanation of the gap."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down your current percentage in shares, bonds and cash"
                - "Pick one low-cost fund with a similar mix to use as the benchmark"
                - "Record the benchmark's return for the review year"
                - "Explain in two sentences why your return was higher or lower"
            - name: Growth from contributions versus markets
              description: |-
                ## Purpose
                In the early years most growth comes from what you pay in; later, markets do most of the work. Splitting each year's change in wealth into new money and investment growth shows which lever matters for you now, and stops a good market year hiding a fall in saving.

                ## Milestones
                1. Total change in invested wealth for the year calculated.
                2. Net contributions for the year subtracted to leave investment growth.
                3. Both figures entered as separate rows in the workbook.
                4. The split compared with previous years where data exists.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The workbook shows the year's change in wealth split into net contributions and investment growth."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Subtract last year's closing total from this year's"
                - "Total the year's contributions minus withdrawals"
                - "Work out investment growth as the difference"
                - "Add both figures as separate rows in the workbook"
            - name: Year's total investment costs in money
              description: |-
                ## Purpose
                Fees quoted as small percentages are easy to wave through; the same costs written as one money figure for the year are not. Adding platform, fund, adviser and dealing costs from the year's statements into a single total gives the review a cost line it can compare from one year to the next.

                ## Milestones
                1. Each provider's annual costs and charges figure found on its statement.
                2. Platform, fund, adviser and dealing costs totalled in money terms.
                3. The total shown as a share of the average portfolio value.
                4. The figure compared with last year's and with your cost ceiling.

                ## Notes
                This is the yearly measurement only. If the figure is above your ceiling, the work of cutting it belongs in the investment fee reduction area.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A single money figure for the year's total investment costs is in the workbook, with a percentage and a comparison to last year."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the costs and charges figure on each provider's annual statement"
                - "Add platform, fund, adviser and dealing costs together"
                - "Express the total as a share of the average portfolio value"
                - "Compare it with last year's figure and your cost ceiling"
            - name: Allocation at year end versus target
              description: |-
                ## Purpose
                Strong years for shares can leave a portfolio far riskier than you meant without a single trade. Recording the actual mix at the review date beside the written target shows how far it has drifted, and whether your own rebalancing rule says to act.

                ## Milestones
                1. Every holding classified as shares, bonds, cash, property or other.
                2. The actual percentages across all accounts calculated together, not account by account.
                3. The gap from the target mix recorded for each asset class.
                4. A note made of whether the gap crosses your rebalancing threshold.

                ## Notes
                Look through to what multi-asset funds hold: a fund described as balanced may be eighty per cent shares.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The workbook shows actual versus target allocation across all accounts combined, with the gap for each asset class."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every holding with its value at the review date"
                - "Classify each one by asset class, looking inside multi-asset funds"
                - "Calculate the combined percentage in each class"
                - "Record the gap from your target and whether it crosses the threshold"
            - name: Tax wrapper allowance scorecard
              description: |-
                ## Purpose
                Unused tax-free and tax-deferred allowances usually cannot be carried forward, so every year one is missed is gone for good. A simple scorecard showing each allowance, how much you used and how much went unused (an ISA in the UK, a Roth IRA or 401(k) limit in the US, for example) makes the cost of missing one visible.

                ## Milestones
                1. Each tax-advantaged allowance available to you listed with this year's limit.
                2. The amount used against each recorded from statements.
                3. Unused amounts highlighted, with any carry-forward rules noted.
                4. A plan to use next year's allowances added to the contribution plan.

                ## Notes
                Rules on carry-forward differ between countries and account types. Check the official guidance or ask an adviser before relying on unused allowances from earlier years.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A scorecard lists every available allowance, its limit, the amount used and the amount unused for the review year."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each tax-advantaged allowance open to you with this year's limit"
                - "Record how much you used against each from statements"
                - "Highlight unused amounts and note any carry-forward rule"
                - "Check allowance usage three months before the tax year ends @recurring(yearly)"
            - name: Beneficiary, will and attorney checkpoint
              description: |-
                ## Purpose
                Pension nominations made before a marriage, divorce or new child can send money to the wrong person regardless of what your will says. A yearly checkpoint on every nomination, the will's date and any powers of attorney takes twenty minutes and protects the people the rest of the review is for.

                ## Milestones
                1. Every pension, life policy and account with a beneficiary nomination listed with the name currently recorded.
                2. The will's date noted, with any life event since then that may need a change.
                3. Powers of attorney or equivalent documents confirmed in place, or marked missing.
                4. Any mismatch turned into an action with a month attached.

                ## Notes
                This is a check, not legal advice. Changes to a will or trust should go through a solicitor or estate lawyer.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A checkpoint table lists every nomination, the will's date and attorney status, with an action for each mismatch."
                cadence: cyclic
                effort_hours_estimate: "1"
              tasks:
                - "List every account and policy that carries a beneficiary nomination"
                - "Log in or call to confirm the name currently recorded on each"
                - "Note the date of your will and any life event since"
                - "Confirm nominations and attorney documents still match your wishes @recurring(yearly)"
            - name: Savings rate for the year
              description: |-
                ## Purpose
                Over decades, the share of income you save drives wealth more than which fund you picked. Working out the year's savings rate from what actually went into pensions, investments and savings, divided by after-tax income, gives the review its most controllable number.

                ## Milestones
                1. A definition chosen and written down, including whether employer pension contributions count.
                2. Total after-tax income for the year found from payslips or tax records.
                3. Total saved and invested for the year added up from statements.
                4. The savings rate recorded and compared with your target.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The workbook records the year's savings rate using a written definition, compared with the target."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether employer pension contributions count and write it down"
                - "Find total after-tax income for the year"
                - "Add up everything saved and invested during the year"
                - "Record the savings rate beside your target"
            - name: Emergency cash and idle cash check
              description: |-
                ## Purpose
                Two opposite problems hide in the cash line: too little for a job loss or a broken boiler, and too much sitting at a poor rate for years. Checking cash once a year against your agreed number of months of spending catches both.

                ## Milestones
                1. Monthly essential spending estimated from the last twelve months.
                2. An emergency cash target in months written down.
                3. All cash balances totalled, with the interest rate on each.
                4. Any shortfall or surplus turned into a review action.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The workbook shows total cash against a written emergency target, with each account's rate and a decision on any surplus or shortfall."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Estimate your monthly essential spending from bank records"
                - "Write down how many months of spending you want in cash"
                - "Total every cash balance and note its interest rate"
                - "Decide what to do with any surplus or shortfall"
            - name: Debts and mortgage line in the review
              description: |-
                ## Purpose
                Debt is negative wealth, and a review that only counts investments flatters the picture. Recording every loan's balance, rate and end date once a year shows how fast debt is falling and whether any of it now costs more than your investments are likely to earn.

                ## Milestones
                1. Every debt listed with balance, interest rate, monthly payment and end date.
                2. The change in total debt since last year calculated.
                3. Any fixed rate ending within eighteen months flagged.
                4. Debts above your agreed rate threshold marked for attention.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The workbook lists every debt with balance, rate and end date, the year's change in total debt and any rate expiry flagged."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List each debt with its balance, rate, payment and end date"
                - "Calculate how much total debt fell or rose this year"
                - "Flag any fixed rate that ends within eighteen months"
                - "Mark any debt costing more than your agreed threshold"
            - name: Protection cover check against current needs
              description: |-
                ## Purpose
                Life and income protection bought five years ago was sized for a different mortgage, salary and family. Once a year, set the cover you hold beside what your household would actually need if you died or could not work, so gaps and overpayments both show up.

                ## Milestones
                1. Every life, income protection and critical illness policy listed with cover amount, premium and end date.
                2. Cover through work noted, with what happens to it if you leave.
                3. A rough need written down: debts to clear plus years of income to replace.
                4. Any gap or surplus noted as a question for a protection adviser.

                ## Notes
                This checks cover against needs; it does not recommend a policy. A regulated protection adviser can size cover properly.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table compares cover held with an estimated need for each risk, with any gap written as a question for an adviser."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each protection policy with cover, premium and end date"
                - "Check what death in service or sick pay cover you get through work"
                - "Estimate how much your household would need if your income stopped"
                - "Write any gap as a question for a protection adviser"
            - name: Reading an annual pension statement properly
              description: |-
                ## Purpose
                Pension statements mix today's value, projections in today's money, assumed growth rates and charges in ways that are easy to misread. Learning which line is which, using your own statement, means the pension figures in the review are the right ones and the projection is read with its assumptions in mind.

                ## Milestones
                1. Current value, transfer value and projected value on one statement identified and explained in your own words.
                2. The growth and inflation assumptions behind the projection written down.
                3. Charges shown on the statement found and noted.
                4. The correct figure for the review entered in the workbook.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains each figure on your pension statement and states which one goes in the review."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Open your most recent annual pension statement"
                - "Mark the current value, transfer value and projection"
                - "Write down the growth and inflation assumptions used"
                - "Note which figure goes in the review workbook and why"
            - name: Reading year-end tax summaries from providers
              description: |-
                ## Purpose
                Consolidated tax certificates and year-end tax summaries list dividends, interest, gains and foreign income in formats that differ by provider. Knowing how to read them lets the review confirm what income and gains your investments produced, and what needs to reach your tax return.

                ## Milestones
                1. Each provider's tax summary for the year collected.
                2. Dividends, interest, realised gains and foreign income identified on each.
                3. Totals across providers added up by income type.
                4. Anything that may need reporting passed to whoever prepares your tax return.

                ## Notes
                Income inside tax-free wrappers usually does not appear on these summaries. Do not confuse an absent figure with a zero.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The workbook shows the year's dividends, interest and realised gains by provider, with reportable items passed on."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Download each provider's tax summary for the year"
                - "Highlight dividends, interest, gains and foreign income on each"
                - "Add up the totals by income type"
                - "Send reportable items to whoever prepares your tax return"
            - name: Progress against retirement and independence targets
              description: |-
                ## Purpose
                The review's last figure answers the question behind all the others: are you on track? Placing this year's total beside the target for this stage of the plan, and redrawing the progress line, shows whether you are ahead, behind or roughly where you hoped.

                ## Milestones
                1. This year's investable total recorded against the target page.
                2. A progress line from your first review to now drawn or updated.
                3. Ahead, on track or behind stated in one sentence with the gap in money.
                4. Any target that no longer feels right noted for its own area to revisit.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The workbook shows a progress line against each long-term target with a one-sentence verdict and the gap in money."
                cadence: cyclic
                effort_hours_estimate: "1"
              tasks:
                - "Put this year's investable total beside each long-term target"
                - "Update the progress chart with this year's figures @recurring(yearly)"
                - "Write one sentence saying whether you are ahead, on track or behind"
                - "Note any target that needs rethinking"
            - name: One-page annual wealth report
              description: |-
                ## Purpose
                Nobody wants to read a workbook full of tabs, and it is hard to share and harder to remember. Distilling the year into a single page (total wealth, the year's change and why, returns, costs, allocation, allowances, progress and three actions) gives you something a partner can read in five minutes and next year's self can compare against.

                ## Milestones
                1. A one-page layout with the same headings every year.
                2. Every figure on the page traced back to a workbook tab.
                3. A three-sentence summary of the year written at the top.
                4. The report shared with anyone who joined the review and filed in the archive.

                ## Notes
                Ask the agent to draft the three-sentence summary from the workbook figures, then edit it until it sounds like you.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page report exists for the review year, every figure traceable to the workbook, shared and archived."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Lay out the one-page report with fixed headings"
                - "Fill each heading from the matching workbook tab"
                - "Ask the agent to draft a three-sentence summary from the workbook figures"
                - "Share the final page with everyone who joined the review"
            - name: Three priority actions for the coming year
              description: |-
                ## Purpose
                Fifteen actions at the end of a review usually means none get done. Choosing just three, the changes with the biggest long-term effect, each with an owner and a month, is the decision the whole review exists to produce.

                ## Milestones
                1. Every possible action from the review listed in one place.
                2. Each scored on long-term money effect and effort.
                3. Three chosen, with an owner and a target month for each.
                4. The rest parked in a later list rather than deleted.

                ## Notes
                Typical high-value candidates: raising a pension contribution, using an unused allowance, fixing a beneficiary nomination, cutting a high-cost fund. Rarely: switching an investment strategy that is working.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three actions are recorded with an owner and a target month each, and all other candidates are parked on a later list."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every action the review suggested"
                - "Score each one for long-term money effect and for effort"
                - "Choose three and give each an owner and a month"
                - "Move the rest to a later list"
            - name: Contribution plan for the next twelve months
              description: |-
                ## Purpose
                The review shows what last year's saving achieved; the contribution plan sets what this year's will be. Writing down how much goes into each account each month, in the order that uses allowances and employer matching first, makes the year ahead automatic rather than a series of decisions.

                ## Milestones
                1. A monthly contribution figure set for each pension, investment and savings account.
                2. Accounts ordered so employer matching and tax allowances are filled first.
                3. Standing orders or payroll changes set up to match the plan.
                4. A date set to raise contributions when pay rises.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written twelve-month plan sets the monthly amount for each account, and every payment is automated to match."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Set a monthly contribution for each account"
                - "Order accounts so matching and allowances are filled first"
                - "Change standing orders and payroll contributions to match the plan"
                - "Check contributions went in as planned @recurring(monthly:6)"
            - name: Account simplification shortlist from the review
              description: |-
                ## Purpose
                Every extra account adds a statement to collect, a login to keep and a line to check, and many people find six or eight they barely use. Using the review to shortlist accounts that could close or merge makes next year's review faster and the estate easier to administer.

                ## Milestones
                1. Every account with a small balance, high cost or no clear purpose listed.
                2. Exit fees, guarantees or special terms checked before anything moves.
                3. A shortlist of accounts to close or merge agreed.
                4. Each move handed to the area that covers it, such as pension consolidation.

                ## Notes
                Old pensions can carry valuable guarantees that are lost on transfer. Check every one before shortlisting it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist names each account to close or merge, with exit costs and guarantees checked for every one."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List accounts with small balances, high costs or no clear purpose"
                - "Check each for exit fees, guarantees or special terms"
                - "Agree the shortlist of accounts to close or merge"
                - "Move each item into the area or project that will carry it out"
            - name: Professional second opinion on the review
              description: |-
                ## Purpose
                Even a careful self-run review can be precise and still miss something an expert would spot in minutes, such as a tax relief you are not claiming. Sending the one-page report and workbook to an accountant or fee-only adviser for a fixed-fee look, every few years, is a cheap check on your own blind spots.

                ## Milestones
                1. A professional chosen who offers one-off reviews for a fixed fee.
                2. The one-page report and supporting workbook sent with specific questions.
                3. Their comments recorded in the workbook.
                4. Any agreed change added to the action tracker.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "A professional has reviewed the year's report for a fixed fee and their comments and resulting actions are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find two professionals who offer a one-off fixed-fee review"
                - "Write five specific questions for them"
                - "Send the report and workbook with your questions"
                - "Record their comments and add any agreed actions to the tracker"
            - name: Improving next year's review process
              description: |-
                ## Purpose
                The first review always takes longer than it should, and the second repeats the same mistakes unless someone writes them down. A short retrospective straight after the review, noting what took longest and what was missing, makes each year quicker and sharper than the last.

                ## Milestones
                1. Time spent on each section recorded.
                2. The three slowest steps and the cause of each named.
                3. Missing documents, sections or questions listed.
                4. Changes made to the checklist, workbook or agenda before filing them away.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated retrospective note exists, and at least two changes from it have been made to the checklist, workbook or agenda."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down roughly how long each section took"
                - "Name the three slowest steps and why they were slow"
                - "List anything that was missing from the review"
                - "Make two changes to the checklist, workbook or agenda"
            - name: First full annual wealth review session
              description: |-
                ## Purpose
                Everything before this is preparation; this is the day the whole picture is put together for the first time. Working through the agenda with the workbook, documents and targets ready produces your first one-page report and the first three actions.

                ## Milestones
                1. All documents on the checklist in the review folder before the day.
                2. Every agenda question answered in the workbook.
                3. A draft of the one-page report completed.
                4. Three priority actions chosen before the session ends.

                ## Notes
                Expect the first session to take twice as long as later ones. Leave gaps rather than stopping; mark them and fill them in the following week.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first review session is completed, with every agenda question answered and three actions chosen."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm every checklist document is in the review folder"
                - "Block a quiet half day with no other plans"
                - "Answer each agenda question in the workbook in order"
                - "Choose three priority actions before you finish"
            - name: Pre-deadline tax year end actions
              description: |-
                ## Purpose
                Some of the most valuable review actions only work before the tax year closes: topping up a tax-free account, making a pension contribution that uses this year's allowance, or realising a gain within an annual exemption. A short sprint two to three months before the deadline turns the scorecard's gaps into money actually moved.

                ## Milestones
                1. The tax year end date and any provider cut-off dates written down.
                2. Unused allowances from the scorecard listed with the amount still available.
                3. Each top-up or action decided, with cash to fund it identified.
                4. All transfers completed at least two weeks before the deadline.

                ## Notes
                Providers often need payments several working days before the official deadline. Check each one's cut-off.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every planned tax year end top-up is completed at least two weeks before the deadline, with confirmations saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the tax year end and each provider's payment cut-off"
                - "Set a reminder ten weeks before the tax year ends @recurring(yearly)"
                - "List unused allowances and the cash available to fill them"
                - "Make each transfer and save the confirmation"
            - name: Annual adviser meeting preparation
              description: |-
                ## Purpose
                Adviser meetings tend to follow the adviser's agenda: performance slides and a product update. Arriving with your own one-page report and five written questions turns it into a review of your plan, and gives you a record of what was advised and what it cost.

                ## Milestones
                1. Your one-page report sent to the adviser a week ahead.
                2. Five questions written, including the total cost of advice in money for the year.
                3. Notes taken during the meeting with every recommendation listed.
                4. Recommendations you accept added to the action tracker.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The adviser meeting has written notes listing every recommendation, and accepted ones are in the action tracker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Send your one-page report to the adviser a week ahead"
                - "Write five questions including the year's total advice cost in money"
                - "Take meeting notes listing every recommendation"
                - "Add the recommendations you accept to the action tracker"
            - name: Milestone birthday wealth review
              description: |-
                ## Purpose
                Birthdays like 40, 50, 55 and 60 often bring real changes: pension access ages, the last decade of full earnings, protection premiums rising. Adding a milestone section to that year's review checks whether the plan still fits the stage of life rather than simply rolling forward.

                ## Milestones
                1. The age-linked rules that apply in the coming decade listed, such as pension access ages and state pension age.
                2. The years left until each long-term target date counted.
                3. The plan's assumptions checked against the new stage of life.
                4. One extra milestone action added to the year's three priorities.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The milestone year's review includes a written list of age-linked rules for the coming decade and one extra action."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the age-linked rules that apply in the coming decade"
                - "Count the years left until each target date"
                - "Check whether the plan's assumptions still fit this stage"
                - "Add one milestone action to the year's priorities"
            - name: First wealth review in your twenties
              description: |-
                ## Purpose
                In your twenties the totals are small, so a full review can feel pointless. A cut-down version (savings rate, employer pension match, emergency cash, debts and one investment account) builds the habit while it is cheap and catches the costly early mistakes such as missing free matching.

                ## Milestones
                1. A short review covering savings rate, pension match, cash, debts and investments.
                2. Employer pension matching confirmed as fully used, or the gap noted.
                3. Student or consumer debt listed with its rate.
                4. One action chosen for the year ahead.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page review covering five items is complete, including a confirmed answer on employer pension matching."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your payslip to see whether you get the full employer pension match"
                - "Work out what share of your take-home pay you saved this year"
                - "List any debts with their interest rates"
                - "Pick one action for the year ahead"
            - name: Couple's joint annual wealth review
              description: |-
                ## Purpose
                Couples often each know their own accounts well and their partner's barely at all, which leaves one person exposed if the other dies or falls ill. A joint review, with both people's pensions, accounts and debts on the same page, makes sure each partner can see and explain the whole household picture.

                ## Milestones
                1. Both partners' accounts in one workbook, tagged by owner.
                2. Each partner's pension and protection position compared side by side.
                3. Any imbalance, such as one partner with far less pension, discussed and recorded.
                4. Three household actions agreed and owned between you.

                ## Notes
                Agree ground rules first: no blame for past choices, and either partner can pause the session.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Both partners have reviewed one combined workbook together and agreed three owned household actions."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Agree a date and two ground rules for the joint review"
                - "Add both partners' accounts to one workbook, tagged by owner"
                - "Compare each partner's pension and protection side by side"
                - "Hold the joint review and agree three owned actions @recurring(yearly)"
            - name: Children's accounts section for parents
              description: |-
                ## Purpose
                Junior accounts, education funds and money held for children are easy to leave out of the review because they are not really yours. A short section covering each child's accounts, contributions, allowance use and target keeps their money on track without mixing it into your own figures.

                ## Milestones
                1. Each child's accounts listed with value, owner and access age.
                2. The year's contributions and any allowance used recorded.
                3. Progress against any education or starting-out target noted.
                4. The section kept separate from the household total.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The workbook holds a separate section with each child's account values, contributions and target progress."
                cadence: cyclic
                effort_hours_estimate: "1"
              tasks:
                - "List each child's accounts with owner and access age"
                - "Record each child's account values at the review @recurring(yearly)"
                - "Note the year's contributions and allowance used"
                - "Check progress against any target for each child"
            - name: Retiree annual review of income sustainability
              description: |-
                ## Purpose
                In retirement the review's main question changes from growth to whether withdrawals can last. Comparing the year's withdrawals with the planned rate, after a good or bad market year, shows whether spending can stay, should rise or needs trimming before a small problem becomes a large one.

                ## Milestones
                1. Total withdrawals for the year recorded by source: pension, investments, cash.
                2. The withdrawal rate calculated against the portfolio's starting value.
                3. The rate compared with the sustainable range agreed in your drawdown plan.
                4. Any change to next year's income agreed and set up.

                ## Notes
                The drawdown plan itself lives in the retirement income drawdown area; this is the yearly check against it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The year's withdrawal rate is recorded against the planned range, with a written decision on next year's income."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Total the year's withdrawals by source"
                - "Calculate the withdrawal rate against the starting value"
                - "Compare withdrawals with the plan and note any drift @recurring(quarterly)"
                - "Decide and set up next year's income level"
            - name: Self-employed review alongside the tax return
              description: |-
                ## Purpose
                Freelancers and business owners have income that swings, no employer pension and a tax bill that arrives in lumps, so the usual review misses the main risks. Timing the review with the tax return, and adding sections for the tax reserve, business cash and pension contributions as a share of profit, fits it to that life.

                ## Milestones
                1. The review month aligned with when your tax return figures are ready.
                2. Pension contributions recorded as a share of profit.
                3. The tax reserve checked against the estimated bill.
                4. Business cash and personal cash shown separately.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The review includes pension contributions as a share of profit and a tax reserve check, with business and personal cash separated."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Move the review month to when tax return figures are ready"
                - "Record pension contributions as a share of the year's profit"
                - "Reconcile the tax reserve account against the estimated bill @recurring(quarterly)"
                - "Show business cash and personal cash on separate lines"
            - name: Review after an inheritance, divorce or redundancy
              description: |-
                ## Purpose
                Big changes in circumstances make last year's targets, allocation and beneficiaries out of date overnight. Running an extra, focused review within three months of the change, rather than waiting for the usual date, resets the picture before rushed decisions are made.

                ## Milestones
                1. A new opening figure for every account affected by the change.
                2. Targets, allocation and beneficiaries checked against the new situation.
                3. Decisions that must happen soon separated from those that can wait.
                4. A note made of which professionals to involve and when.

                ## Notes
                Big sums and emotional moments are a bad mix. A sensible default is to hold new money in cash for a few months while the plan is reset.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A focused review within three months of the change records new figures, checked beneficiaries and a split of urgent and later decisions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down what changed and the date it happened"
                - "Record new values for every account the change affects"
                - "Check targets, allocation and beneficiaries against the new situation"
                - "Sort decisions into must happen soon and can wait"
            - name: Ten-year trend from past annual reviews
              description: |-
                ## Purpose
                Single years are noisy; ten years of reviews show what actually drives your wealth. Charting savings rate, real return, costs and net contributions across every archived year reveals the patterns, good and bad, that no one review can.

                ## Milestones
                1. Key figures from every archived review in one table.
                2. Charts for wealth, savings rate, real return and costs across the years.
                3. The three biggest drivers of growth named.
                4. One lesson written down to carry into the next decade.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table and charts cover every archived review year, with the three biggest drivers of growth written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy key figures from each archived review into one table"
                - "Chart wealth, savings rate, real return and costs over time"
                - "Name the three biggest drivers of growth"
                - "Write one lesson for the next decade"
            - name: Scenario stress test inside the annual review
              description: |-
                ## Purpose
                A plan that only works if markets behave is not a plan. Adding a stress test section, showing what happens to your targets after a large market fall, a job loss or high inflation, tells you whether the review's comfortable verdict holds up in a bad year.

                ## Milestones
                1. Three scenarios defined with specific assumptions, such as a share market fall of a third.
                2. The effect of each on wealth and target dates estimated.
                3. The scenario that hurts most identified.
                4. One defence chosen for that scenario and added to the action list.

                ## Notes
                Start from the **Risk register** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The review records three scenarios with their effect on wealth and target dates and one defence for the worst."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Define three bad scenarios with specific assumptions"
                - "Estimate each one's effect on wealth and target dates"
                - "Identify the scenario that hurts most"
                - "Add one defence for that scenario to the action list"
            - name: Annual review for a complex multi-entity estate
              description: |-
                ## Purpose
                Once wealth sits across personal accounts, a company, trusts or property held in different names, a review of personal accounts alone misses most of it. A consolidated view, mapping each entity, its owner, its tax position and how it connects, brings the whole estate into one annual picture.

                ## Milestones
                1. A map of every entity: personal, joint, company, trust or partnership, with its owners.
                2. Each entity's year-end value and tax position summarised.
                3. Money moving between entities during the year traced.
                4. The consolidated picture reviewed with your accountant or adviser.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A consolidated map shows every entity, its owners, year-end value and tax position, reviewed with a professional."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw a map of every entity holding your family's wealth"
                - "Summarise each entity's year-end value and tax position"
                - "Trace money moving between entities this year"
                - "Book a session with your accountant to review the consolidated picture"
---

# Annual Wealth Review

Once a year it pays to stop looking at accounts one at a time and look at everything together: what you own, what it earned after costs and inflation, whether the mix still matches your plan, whether you used your tax allowances and whether the people named on your pensions and will are still the right ones. This area builds that review from the ground up, starting with the foundations (a fixed date, a document checklist, a workbook and the targets you measure against), then the routines that feed it through the year, the sections of the review itself and the skills behind them such as working out your own rate of return, the decisions and report that come out of it, the dated sessions and meetings, versions for people in their twenties, couples, parents, retirees, the self-employed and anyone whose life just changed, and finally specialist work on ten-year trends, stress tests and complex estates.

The rhythm is mostly yearly with a light touch in between: a monthly note of anything that surprised you, a monthly follow-up of the actions from the last review, a quarterly light check, a half-year checkpoint, a statement collection window, a rule-change check and the review week itself. The Metrics log, Operational checklist, Meeting notes and Risk register templates pair with the review workbook, the review week routine, the adviser meeting and the stress test. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
