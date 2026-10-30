---
id: finance-accounting.owner-pay-dividend-planning
name: Owner Pay & Dividend Planning
description: "Decide how much to take, in what form and when: a personal budget, salary and dividend plans agreed with your accountant, dividend paperwork, director's loan control and a tax pot for owner income."
category: business
version: 1.0.0
tags: [finance-accounting, owner-pay-dividend-planning, small-business, founder, freelancer, dividends, drawings, directors-loan]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - savings-goal
    - meeting-notes
    - board-meeting
    - metrics-log
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Owner Pay & Dividend Planning
          description: "Deciding how and when business owners pay themselves through salary, drawings or dividends, balancing tax, cash needs and what the company can afford."
          projects:
            - name: Personal budget for what you need to take home
              description: |-
                ## Purpose
                Before any talk of salary or dividends, an owner needs one number: what the household needs each month to cover rent or mortgage, bills, food, debt repayments and savings. Without it, owners either take too little and run up personal debt, or take whatever is in the account and starve the business. A written personal budget turns owner pay into a target the business can plan around.

                ## Milestones
                1. A twelve-month list of personal fixed costs, from housing to insurance and loan repayments.
                2. Variable spending averaged from three months of personal bank statements.
                3. A monthly take-home target and a lower survival figure, both written down.
                4. Both figures shared with anyone who shares the household finances.

                ## Notes
                Start from the **Monthly budget and bills** template. Budget in take-home terms; the tax on owner pay is planned separately in the tax pot.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A personal budget showing a monthly take-home target and a lower survival figure, built from three months of real statements."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the last three months of personal bank statements"
                - "List every fixed personal cost with its monthly amount"
                - "Average the variable spending across the three months"
                - "Write down your take-home target and your survival minimum"
                - "Revisit the personal budget figures before each new tax year @recurring(yearly)"
            - name: How your business structure lets you pay yourself
              description: |-
                ## Purpose
                The legal form of the business decides which pay routes are even open. A sole trader or partner takes drawings and is taxed on the profit, not the drawings; a company director can take a salary, dividends as a shareholder, or borrow through a director's loan account; some countries add variants of their own, such as the S corporation in the US. Knowing which routes apply to you stops you copying advice meant for a different structure.

                ## Milestones
                1. Your business's legal form and tax registrations confirmed from official records.
                2. A one-page note listing the pay routes your structure allows and the ones it does not.
                3. The paperwork and reporting duty for each route noted in a sentence.
                4. The note confirmed by your accountant as right for your country.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of the owner pay routes available to your business structure, confirmed by your accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your business registration record and note the legal form"
                - "List the pay routes your structure allows, from drawings to dividends"
                - "Note the paperwork and reporting each route needs"
                - "Send the note to your accountant and ask them to correct it"
            - name: Separate owner pay account and transfer route
              description: |-
                ## Purpose
                Paying personal bills straight from the business account blurs the books, makes the director's loan account impossible to follow and looks poor to lenders and tax inspectors. One named transfer from the business account to a personal account, on a set day, with a reference saying what it is (salary, dividend or drawings), keeps every owner payment visible and easy to code.

                ## Milestones
                1. A personal current account chosen to receive owner pay.
                2. Standing references agreed for salary, dividend and drawings transfers.
                3. The business card removed from personal wallets and shopping apps.
                4. A full month with no personal spending from the business account.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A full month passes with every owner payment made by named transfer to a personal account and no personal spending on the business account."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the personal account that will receive owner pay"
                - "Save the personal account as a payee in business banking"
                - "Agree payment references for salary, dividends and drawings with your bookkeeper"
                - "Remove the business card from personal shopping apps and wallets"
            - name: Two-year history of what you took from the business
              description: |-
                ## Purpose
                Most owners cannot say how much they took last year, or in what form, because it went out in dozens of transfers coded in different ways. Pulling two years of owner payments into one table shows the real pattern, reveals payments with no paperwork behind them and gives your accountant a starting point for any plan.

                ## Milestones
                1. Every transfer to or for the owner over two years listed with date and amount.
                2. Each payment labelled as salary, dividend, drawings, loan or expense reimbursement.
                3. Payments with no supporting paperwork flagged for the accountant.
                4. Annual totals by type set beside the profit for each year.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-year table of owner payments, each labelled by type, with undocumented payments flagged and totals compared with profit."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export two years of business bank transactions to a spreadsheet"
                - "Filter for every payment made to you or for your personal benefit"
                - "Label each payment as salary, dividend, drawings, loan or reimbursement"
                - "Ask the agent to total the payments by type and year and flag any gaps"
                - "Send the flagged list to your accountant with your questions"
            - name: Distributable reserves check before any dividend
              description: |-
                ## Purpose
                In most company law systems a dividend can only be paid from accumulated realised profits after tax, not from cash in the bank or this month's sales. A dividend paid without enough reserves can be unlawful, repayable by the shareholder and a problem in any later audit or insolvency. Getting the current reserves figure, and understanding what moves it, makes every later dividend decision safer.

                ## Milestones
                1. The retained earnings figure from the latest balance sheet noted.
                2. Profit since that date estimated from management accounts, less the tax due on it.
                3. Your accountant's view of the distributable figure, and anything that reduces it, written down.
                4. A rule recorded that no dividend is declared without a reserves figure under three months old.

                ## Notes
                Cash in the bank and distributable profit are different things. A company can have plenty of one and none of the other.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written distributable reserves figure, confirmed by your accountant and dated within the last three months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find retained earnings on the most recent balance sheet"
                - "Pull profit for the months since from the management accounts"
                - "Ask your accountant to estimate the company tax on that profit"
                - "Record the distributable figure and the date it was worked out"
            - name: Director's loan account opening balance
              description: |-
                ## Purpose
                Money taken from a company that is not salary, a dividend or a repaid expense usually sits in a director's loan account, and so does money the director puts in. Many owners have never seen theirs, yet an overdrawn balance can trigger extra tax or interest rules in several countries. Agreeing today's balance with your accountant gives you a clean starting line.

                ## Milestones
                1. The director's loan balance in the last filed accounts found.
                2. Movements since that date listed from the bank and the ledger.
                3. Today's balance agreed with your accountant, including whether you owe the company or it owes you.
                4. A ledger account for each director's loan set up so future movements land in it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Today's director's loan account balance agreed in writing with your accountant and set up as its own ledger account."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the director's loan figure in the notes to your last accounts"
                - "List every payment to and from you since that year end"
                - "Ask your accountant to confirm today's balance in writing"
                - "Set up or rename a ledger account for each director's loan"
            - name: Personal tax pot for owner income
              description: |-
                ## Purpose
                Dividends and drawings usually arrive with no tax taken off, so the bill lands months later, sometimes with an advance payment for the following year on top. Moving a fixed share of every owner payment into a separate savings account means the money is already waiting when the return is filed. The percentage should come from your accountant and last year's actual figures, not a guess.

                ## Milestones
                1. A separate instant-access savings account opened and named for personal tax.
                2. A set-aside percentage agreed with your accountant from last year's tax.
                3. A transfer made into the pot after every owner payment for three months.
                4. The pot balance at or above the estimated bill on income received so far.

                ## Notes
                Start from the **Savings goal** template. Keep the pot in instant access; it is a holding account, not an investment.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A dedicated tax pot holds at least the estimated tax on owner income received so far this tax year."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Open an instant-access savings account named for personal tax"
                - "Ask your accountant what percentage of owner pay to set aside"
                - "Move the set-aside share of this month's owner pay into the pot @recurring(monthly:26)"
                - "Compare the pot balance with your accountant's estimate of the bill"
            - name: Minimum cash buffer before owner payments
              description: |-
                ## Purpose
                Owners who pay themselves whatever is left at month end often find the sales tax bill, payroll or a supplier run arrives the following week. A written minimum balance, set from fixed costs and the next big payments, gives a simple test: if paying yourself would take the account below the line, the payment shrinks or waits.

                ## Milestones
                1. Monthly fixed business costs totalled from the last six months.
                2. Tax, loan and other large payments due in the next ninety days listed.
                3. A minimum balance agreed and written down, for example two months of fixed costs plus tax due.
                4. The rule applied to the next three owner payments.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written minimum business bank balance, with its calculation, used to approve or trim the next three owner payments."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Total the last six months of fixed business costs"
                - "List the tax and loan payments due in the next ninety days"
                - "Set the minimum balance and write down how it was worked out"
                - "Recheck the buffer whenever fixed costs move by a tenth or more"
            - name: First written owner pay plan with your accountant
              description: |-
                ## Purpose
                Once the personal budget, reserves and loan balance are known, the decision is how much to take, in what form and how often. A one-page plan agreed with your accountant, covering a salary level, a dividend or drawings schedule and the tax set-aside, replaces month-by-month guessing with a pattern you can follow and review.

                ## Milestones
                1. A meeting held with your accountant with budget, reserves and loan figures in hand.
                2. A salary level, if any, chosen with the reasons noted.
                3. A dividend or drawings amount and schedule agreed for the year.
                4. The plan written on one page and stored with the year's finance records.

                ## Notes
                Start from the **Meeting notes** template for the accountant meeting. The plan organises their advice; it does not replace it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page owner pay plan with salary, dividend or drawings schedule and tax set-aside, agreed with your accountant and dated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a planning meeting with your accountant"
                - "Send the personal budget, reserves figure and loan balance ahead of it"
                - "Write up the agreed salary, schedule and set-aside on one page"
                - "Store the plan with this year's finance records"
            - name: Monthly owner pay day routine
              description: |-
                ## Purpose
                A fixed pay day, with the same short checks every time, makes owner pay boring in the best sense. On the day you check the balance against the buffer, confirm the payment type, pay by named transfer and code it, so nothing is left for the bookkeeper to guess at.

                ## Milestones
                1. A fixed monthly pay date chosen that falls after most customer receipts.
                2. A five-step pay day checklist written on one page.
                3. Six consecutive pay days run from the checklist.
                4. Every owner payment in those months coded correctly in the ledger.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly owner payments made on the fixed date, each checked against the buffer and coded by type."
                cadence: rolling
              tasks:
                - "Pick a monthly pay date after your main customer receipts land"
                - "Write the five-step pay day checklist"
                - "Run the owner pay day checklist and make the transfer @recurring(monthly:25)"
                - "Tell your bookkeeper the pay date and how owner payments are coded"
            - name: Quarterly dividend declaration cycle
              description: |-
                ## Purpose
                Paying dividends quarterly, rather than whenever cash looks good, gives each payment a reserves check, a board decision and the paperwork it needs. For a one-director company the board meeting can be a ten-minute written decision, but it still has to exist and be dated before the money moves.

                ## Milestones
                1. Current management accounts and a reserves figure in hand before each quarter's decision.
                2. A board minute recording the dividend per share and the payment date.
                3. A dividend voucher issued to each shareholder.
                4. Payment made on or after the minuted date, matching the minute exactly.
                5. Four quarterly cycles completed in a year.

                ## Notes
                Start from the **Board meeting** template. Dividends on one class of share are normally paid in proportion to shareholdings unless your lawyer and accountant have set up something different.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly dividends in a year, each backed by a dated reserves check, board minute and vouchers before payment."
                cadence: cyclic
              tasks:
                - "Choose the four months in which you will consider a dividend"
                - "Get the quarter's management accounts and reserves figure"
                - "Hold the quarterly dividend board meeting and minute the decision @recurring(quarterly)"
                - "File the minute and vouchers in the company records folder"
            - name: Board minute and dividend voucher templates
              description: |-
                ## Purpose
                Every lawful dividend needs a record of who decided it and a voucher showing the company, shareholder, date, shares held and amount. Templates checked once by your accountant make each quarter a fill-in-the-blanks job, and save a frantic search when a lender or tax inspector asks for them.

                ## Milestones
                1. A board minute template for declaring interim dividends.
                2. A shareholder resolution template for final dividends, where the articles require one.
                3. A dividend voucher template with every field your accountant expects.
                4. All three templates reviewed by your accountant and saved in the company records.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Minute, resolution and voucher templates reviewed by your accountant and stored where every director can find them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your accountant which fields a dividend voucher must show"
                - "Draft a board minute template for interim dividends"
                - "Draft a voucher template with share count and amount per share"
                - "Check the company's articles for who approves final dividends"
            - name: Owner pay log
              description: |-
                ## Purpose
                A single log of every owner payment, by date, type, gross amount and tax set aside, answers the questions that keep coming up: how much have I taken this year, how close am I to the next tax band, did the dividends match the minutes. Updated monthly it takes ten minutes; rebuilt at year end it takes a weekend.

                ## Milestones
                1. A log with columns for date, type, gross amount, tax set aside and paperwork reference.
                2. Every owner payment since the start of the tax year entered.
                3. Running totals by payment type for the tax year.
                4. Six months of entries matched to the ledger.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An owner pay log with every payment since the start of the tax year, matched to the ledger and showing running totals."
                cadence: rolling
              tasks:
                - "Create the owner pay log with type and paperwork columns"
                - "Enter every owner payment since the start of the tax year"
                - "Add this month's owner payments to the log and tie them to the ledger @recurring(monthly:28)"
                - "Add running totals by payment type"
            - name: Monthly director's loan account review
              description: |-
                ## Purpose
                Small personal costs paid by the company, a missed expense claim or a dividend paid before it was declared all move the director's loan balance, and nobody notices until year end. A monthly look at the balance, with each movement explained, keeps it moving in the direction you intended and avoids surprises when the accounts are drawn up.

                ## Milestones
                1. The loan account reviewed each month with every movement explained.
                2. Personal items wrongly paid by the company repaid within the month.
                3. A target balance at year end agreed with your accountant.
                4. Twelve monthly reviews completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly director's loan reviews completed, each ending with every movement explained and any personal item repaid."
                cadence: rolling
              tasks:
                - "Review the director's loan balance and explain each movement @recurring(monthly:6)"
                - "Repay any personal cost the company covered by mistake"
                - "Agree a target year-end loan balance with your accountant"
                - "Note the month-end loan balance in the owner pay log"
            - name: Personal tax payment calendar for owners
              description: |-
                ## Purpose
                Owner income often brings personal tax dates that employees never meet: annual return deadlines, advance or instalment payments and, in some countries, quarterly estimates. Missing one usually costs interest and a penalty. A calendar of every personal tax date, with the amount expected and the account it comes from, makes them predictable.

                ## Milestones
                1. Every personal tax filing and payment date for the year listed from the tax authority's guidance.
                2. The expected amount and paying account noted against each date.
                3. Reminders set two weeks before each payment.
                4. A full year with every payment made on time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A personal tax calendar with every filing and payment date for the year, and a year passing with none missed."
                cadence: cyclic
              tasks:
                - "List the personal tax filing and payment dates from the tax authority website"
                - "Note the expected amount against each payment date"
                - "Check the next ninety days of personal tax dates against the tax pot @recurring(quarterly)"
                - "Roll the calendar forward with the new year's dates @recurring(yearly)"
            - name: Running income tally against personal tax bands
              description: |-
                ## Purpose
                In many tax systems salary and dividends stack on top of each other, and crossing a band threshold can change the rate on the next payment. A running total of owner income for the tax year, beside the band limits your accountant gave you, shows when the next dividend would cross a line, so you decide with the numbers in front of you.

                ## Milestones
                1. The band thresholds that apply to you noted from your accountant or the tax authority.
                2. A running total of salary, dividends and other income for the tax year.
                3. The headroom to the next threshold shown each month.
                4. Any payment that would cross a threshold discussed with your accountant first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly running tally of owner income with headroom to the next band, kept up for at least six months."
                cadence: rolling
              tasks:
                - "Write down the band thresholds your accountant says apply to you"
                - "Add other personal income, such as rent or interest, to the tally"
                - "Update the running income tally and headroom figure @recurring(monthly:14)"
                - "Ask your accountant before any payment that would cross a threshold"
            - name: Quarterly owner pay versus profit check
              description: |-
                ## Purpose
                Taking more than the business earns is the quiet way owners drain a company: it feels fine until a tax bill or a slow quarter arrives. Comparing what you took each quarter with profit after tax shows whether owner pay is funded by earnings or by reserves, the overdraft and unpaid suppliers.

                ## Milestones
                1. Quarterly owner pay totals set beside profit after estimated tax.
                2. The ratio of owner pay to profit tracked over four quarters.
                3. A written trigger for when the plan must be cut or reviewed.
                4. The comparison shared each quarter with any co-owner or your accountant.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarters of owner pay compared with profit after tax, with any quarter over the trigger followed by a recorded decision."
                cadence: rolling
              tasks:
                - "Set the trigger ratio that would force a pay review"
                - "Compare the quarter's owner pay with profit after estimated tax @recurring(quarterly)"
                - "Record the decision whenever the trigger is crossed"
                - "Share the comparison with co-owners or your accountant"
            - name: Annual owner pay review before the company year end
              description: |-
                ## Purpose
                The weeks before the company's financial year end are when salary, a last interim dividend, pension contributions and the loan balance can still be adjusted. A standing review with your accountant two months before year end, with your log and current figures, means those decisions are made on purpose rather than discovered in the accounts.

                ## Milestones
                1. A review meeting booked two months before each company year end.
                2. Year-to-date owner pay, reserves and loan balance sent ahead.
                3. Decisions on any last interim dividend, pension contribution and loan repayment recorded.
                4. Next year's salary level and schedule agreed.

                ## Notes
                Use the **Meeting notes** template so each year's decisions are kept in the same format.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A pre-year-end owner pay review held each year, with decisions on dividends, pension and the loan account written down."
                cadence: cyclic
              tasks:
                - "Find your company's financial year end date"
                - "Book the pre-year-end owner pay review with your accountant @recurring(yearly)"
                - "Send the owner pay log and loan balance a week before the review"
                - "Write up the decisions and next year's pay schedule"
            - name: How salary, dividends and drawings are taxed
              description: |-
                ## Purpose
                Each route is taxed differently. Salary usually carries employer and employee social contributions and is a cost to the company; dividends come from profit already taxed in the company and are taxed again personally, often at different rates; sole trader drawings are not taxed as such, because the profit is. Learning how your country treats each, in plain terms, lets you follow your accountant's recommendations instead of nodding through them.

                ## Milestones
                1. A plain-language note on how each route is taxed where you live.
                2. One worked example from your own figures, prepared or checked by your accountant.
                3. Your remaining questions written down and answered.
                4. The note kept with your owner pay plan.

                ## Notes
                Rates and thresholds change most years. Use the tax authority's current guidance, not an article from a few years ago.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explaining how salary, dividends and drawings are taxed in your country, with one worked example checked by your accountant."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the tax authority's guidance on dividend and salary income"
                - "Write a plain-language note on each pay route"
                - "Ask your accountant for a worked example using last year's figures"
                - "List the questions the example raised and get them answered"
            - name: Reading the balance sheet for what you can safely take
              description: |-
                ## Purpose
                Owners usually watch the bank balance and the profit figure, but the balance sheet shows whether the company can afford to pay them: retained earnings, cash against short-term debts, tax owed and money owed to or by the director. Reading those lines yourself means you can sense-check a dividend before asking your accountant.

                ## Milestones
                1. Retained earnings, cash, current liabilities, tax owed and the director's loan located on your own balance sheet.
                2. Net current assets worked out by hand.
                3. The difference between profit, cash and reserves explained in your own words.
                4. One past dividend checked against the balance sheet at the time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can point to the five key lines on your latest balance sheet and explain whether a recent dividend was affordable."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Print your latest balance sheet from the accounting software"
                - "Mark retained earnings, cash, liabilities, tax and the loan account"
                - "Work out net current assets from those figures"
                - "Check one past dividend against the balance sheet at that date"
            - name: Director's loan rules and overdrawn balance traps
              description: |-
                ## Purpose
                Overdrawn director's loans are among the commonest owner pay problems, and the rules vary by country: some charge the company extra tax if the loan is not repaid within a set time after year end, treat a cheap loan as a taxable benefit, or restrict clearing a loan with a quick dividend and redrawing it. Learning your rules before borrowing from the company costs far less than learning them afterwards.

                ## Milestones
                1. Your country's director's loan rules summarised from official guidance.
                2. The repayment deadline, interest and benefit rules that apply to you noted.
                3. Your accountant's answer on any rules about repaying and redrawing recorded.
                4. A personal limit written down for the most you will owe the company.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of director's loan rules for your country, checked by your accountant, and a written personal limit on what you will owe the company."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Search the tax authority website for its director's loan guidance"
                - "Summarise the repayment, interest and benefit rules in a short note"
                - "Ask your accountant whether repaying and redrawing is restricted"
                - "Write down the most you are willing to owe the company"
            - name: State pension and social security credits on a low salary
              description: |-
                ## Purpose
                Many owners take a small salary and the rest as dividends, yet in several countries it is the salary that builds entitlement to a state pension, sickness pay or other benefits. Checking which salary level keeps your contribution record intact, and confirming the record yourself, protects benefits that are easy to lose by accident and hard to rebuild.

                ## Milestones
                1. Your social security or national insurance contribution record downloaded.
                2. Any gaps in the record listed by year.
                3. The salary level that keeps the record building confirmed with your accountant.
                4. A decision recorded on whether to fill any gap with voluntary contributions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your contribution record checked, gaps listed and the salary level that protects it confirmed in writing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Download your contribution record from the government portal"
                - "List any years with gaps or partial credits"
                - "Ask your accountant which salary level keeps the record building"
                - "Check your contribution record has credited the latest year @recurring(yearly)"
            - name: Reasonable salary rules for owner-employees
              description: |-
                ## Purpose
                Some tax systems expect an owner who works in the business to take a salary that looks like market pay before taking distributions, the US reasonable compensation rule for S corporations being the best known example. Others look harder at very low or very high pay for family members. Knowing whether such a rule applies, and keeping evidence for the level you chose, protects you if the tax authority asks.

                ## Milestones
                1. Whether a reasonable salary rule applies to your structure confirmed with your accountant.
                2. Market pay for your role gathered from two or three salary surveys or job adverts.
                3. The chosen salary and the evidence behind it saved together.
                4. The changes in role or business that would need a fresh look noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved file showing whether a reasonable salary rule applies to you and, if so, the market evidence for the salary you chose."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your accountant whether a reasonable salary rule applies to you"
                - "Collect two or three market pay references for your role"
                - "Save the chosen salary with the evidence and the date"
                - "Note what change in your role would need a fresh look"
            - name: Owner benefits and costs the company can pay
              description: |-
                ## Purpose
                Some owner costs are cheaper paid by the company than from taxed pay: pension contributions, a work phone, training, sometimes health cover. Others, such as a car or a personal gym membership, can create a taxable benefit and a reporting duty. A clear list of what the company pays for you, and how each item is treated, stops benefits turning into surprise bills.

                ## Milestones
                1. Every cost the company pays that benefits you personally listed.
                2. Each item marked as business cost, taxable benefit or personal cost to repay, with your accountant.
                3. Any yearly benefit reporting the company must file added to the calendar.
                4. Items that should not be on the company stopped or repaid.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of every company-paid owner benefit, each with its tax treatment confirmed by your accountant and any reporting date diarised."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every company payment that benefits you personally"
                - "Mark each item as business cost, taxable benefit or personal"
                - "Ask your accountant which benefits must be reported each year"
                - "Stop or repay any personal item the company should not cover"
            - name: Salary versus dividend mix for the next tax year
              description: |-
                ## Purpose
                For company owners, the split between salary and dividends is usually the biggest single pay decision, and the best mix shifts as rates, thresholds and profit change. Asking your accountant for two or three scenarios, each showing company tax, personal tax, social contributions and take-home, turns the choice into a comparison rather than a habit carried over from last year.

                ## Milestones
                1. Expected profit for next year agreed as the basis for the scenarios.
                2. Two or three salary and dividend scenarios from your accountant, each with total tax and take-home.
                3. Non-tax factors such as pension credits, mortgage evidence and cash timing noted for each.
                4. A chosen mix recorded with the reason before the tax year starts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A salary and dividend mix chosen from at least two costed scenarios and recorded with the reasons before the tax year starts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate next year's profit with your bookkeeper or accountant"
                - "Ask your accountant for two or three salary and dividend scenarios"
                - "Note the non-tax factors for each scenario"
                - "Record the chosen mix and why you picked it"
            - name: Monthly, quarterly or annual dividend rhythm
              description: |-
                ## Purpose
                Monthly dividends feel like a wage but need twelve sets of paperwork and twelve reserves checks, while a single annual dividend is tidy but leaves you living on a small salary and savings. Quarterly is a common middle path. Choosing the rhythm on purpose, around your personal cash needs and how quickly reliable management accounts are ready, avoids drifting into monthly dividends without the paperwork.

                ## Milestones
                1. Your personal cash needs and the business's monthly accounts timetable set side by side.
                2. The paperwork load of each rhythm counted for a year.
                3. A rhythm chosen and written into the owner pay plan.
                4. The first payment under the new rhythm made with full paperwork.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dividend rhythm chosen, written into the owner pay plan and followed for the next payment with full paperwork."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note how many days after month end reliable accounts are ready"
                - "Compare the paperwork each rhythm would need in a year"
                - "Choose a rhythm and add it to the owner pay plan"
                - "Make the next dividend under the new rhythm with full paperwork"
            - name: Company pension contribution versus extra dividend
              description: |-
                ## Purpose
                In many countries a pension contribution paid by the company is a business cost and is not taxed as your income when paid, which can make it cheaper than taking the same money as a dividend and saving it yourself. It also locks the money away until retirement age. Weighing the two each year with your accountant, and a pension adviser where needed, keeps the balance right as your needs change.

                ## Milestones
                1. Your current pension savings and any annual contribution limits noted.
                2. The cost of the same amount as dividend or as company contribution compared by your accountant.
                3. How much you can lock away until retirement decided.
                4. Any contribution made and recorded before the company year end.

                ## Notes
                This is a planning comparison. Choosing pension products or investments is a question for a regulated adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A yearly decision on company pension contributions versus dividends, based on a comparison from your accountant and recorded before year end."
                cadence: cyclic
              tasks:
                - "Find your current pension balances and contribution history"
                - "Ask your accountant to compare a pension contribution with an equal dividend"
                - "Decide how much you can lock away until retirement"
                - "Review the pension contribution decision before each company year end @recurring(yearly)"
            - name: Clearing an overdrawn director's loan before year end
              description: |-
                ## Purpose
                If you owe the company money and it stays unpaid past the deadline your country sets, the result can be extra company tax, a benefit charge on you or awkward questions from a lender reading the accounts. A planned repayment, from personal funds, a properly declared dividend or a salary bonus chosen with your accountant, clears it cleanly instead of in a rushed journal at the last minute.

                ## Milestones
                1. The overdrawn amount and the repayment deadline confirmed with your accountant.
                2. Repayment options costed, from personal funds to a lawful dividend or bonus.
                3. A repayment plan with dates agreed.
                4. The balance cleared, with paperwork for each repayment, by the deadline.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The overdrawn director's loan cleared by the deadline your accountant confirmed, with paperwork for each repayment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your accountant for the overdrawn amount and repayment deadline"
                - "Cost each repayment option with your accountant"
                - "Set dates for each repayment in a short plan"
                - "Keep evidence of each repayment with the loan account records"
            - name: Fixed monthly pay for a freelancer instead of ad hoc drawings
              description: |-
                ## Purpose
                Freelancers and sole traders often take money whenever a client pays, which makes personal life feast or famine and leaves nothing set aside for tax. Paying yourself the same amount on the same day each month, from a business account that holds the rest, separates what you earn from what you spend.

                ## Milestones
                1. Average monthly profit over the last twelve months worked out.
                2. A fixed monthly draw set below that average, after the tax set-aside.
                3. A standing order from the business account to your personal account.
                4. Three months paid at the fixed amount with no extra drawings.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three consecutive months of a fixed draw by standing order, with no ad hoc drawings in between."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out your average monthly profit over the last year"
                - "Set a fixed monthly draw below the average after tax"
                - "Create a standing order from the business account for the draw"
                - "Write down any extra drawing and the reason for it"
            - name: Income smoothing buffer for lumpy freelance earnings
              description: |-
                ## Purpose
                When a single project can be half the year's income, a fixed draw only works with a buffer behind it. Building three to six months of draws in the business account, topping it up in good months and drawing it down in slow ones, lets a freelancer keep paying themselves while the next contract is chased.

                ## Milestones
                1. A buffer target set in months of draws.
                2. Months above your average earmarked to top up the buffer.
                3. The buffer at half its target.
                4. The buffer at full target, with the rules for using it written down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A business buffer holding at least three months of fixed draws, with written rules for topping it up and drawing it down."
                cadence: rolling
              tasks:
                - "Choose a buffer target of three to six months of draws"
                - "Write the rule for which months top the buffer up"
                - "Top up the smoothing buffer from any month above average @recurring(monthly:3)"
                - "Write down when the buffer may be used and how fast to refill it"
            - name: Home office charge to the company
              description: |-
                ## Purpose
                Owners who work from home can often have the company reimburse a fair share of household costs or pay rent for a room, but what is allowed, and the tax result for you, varies widely. Settling the method with your accountant, with a written basis and a regular payment, turns a vague claim into one that stands up.

                ## Milestones
                1. The methods allowed in your country listed with your accountant, such as a flat rate, a cost share or a rental agreement.
                2. Household costs and the share used for work worked out.
                3. A method chosen and written up with its calculation.
                4. The first payment made and coded correctly.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A home office method chosen with your accountant, with a written calculation and the first payment coded correctly."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your accountant which home office methods are allowed"
                - "Total the household costs and the share used for work"
                - "Write the chosen method and calculation on one page"
                - "Make and code the first home office payment"
            - name: Lending to your company or putting in share capital
              description: |-
                ## Purpose
                When an owner puts money into the company, it can go in as a loan that can later be repaid without tax, or as new share capital that is harder to take back but strengthens the balance sheet. The choice affects how you get the money out later, how lenders and investors see the company and what happens if it fails.

                ## Milestones
                1. The amount and purpose of the money going in written down.
                2. Loan and share capital options compared with your accountant, including repayment and tax.
                3. The choice documented by a simple loan agreement or a share allotment.
                4. The money recorded in the right ledger account on the day it arrives.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The owner's funding recorded as a documented loan or share allotment, chosen after a comparison with your accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down how much you are putting in and why"
                - "Ask your accountant to compare a loan with new shares"
                - "Draw up the loan agreement or share allotment paperwork"
                - "Check the funds landed in the correct ledger account"
            - name: Sole trader or limited company for owner pay
              description: |-
                ## Purpose
                Freelancers often hear that a company saves tax, but whether it does depends on profit level, how much you need to take out each year, extra accounting costs and your country's rules. A side-by-side comparison from your accountant, using your real profit and personal budget, makes this a decision rather than a rumour.

                ## Milestones
                1. Your current profit and the take-home you need noted.
                2. A costed comparison of staying as you are and incorporating, including accounting fees.
                3. Non-tax differences such as paperwork, privacy and liability listed.
                4. A decision recorded, with the profit level that would reopen it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on whether to incorporate, recorded with a costed comparison from your accountant and a profit level that would reopen it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note last year's profit and your personal budget figure"
                - "Ask your accountant for a costed comparison with running a company"
                - "List the paperwork, privacy and liability differences"
                - "Record the decision and the profit level that would reopen it"
            - name: Final dividend after the annual accounts are approved
              description: |-
                ## Purpose
                Once the year-end accounts are finished, the company knows its distributable reserves for certain, which makes it the safest point for a larger dividend. A final dividend usually needs the directors to recommend it and the shareholders to approve it, so planning the date around accounts approval keeps both steps in order.

                ## Milestones
                1. The date the accounts will be approved confirmed with your accountant.
                2. The final dividend amount set against the confirmed reserves.
                3. The directors' recommendation and the shareholders' approval recorded.
                4. Vouchers issued and the dividend paid after approval.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A final dividend paid only after the accounts were approved, with the recommendation, approval and vouchers on file."
                cadence: cyclic
              tasks:
                - "Ask your accountant when the accounts will be ready for approval"
                - "Diary the final dividend decision for the month after approval @recurring(yearly)"
                - "Prepare the directors' recommendation and shareholder resolution"
                - "Issue vouchers and pay once the dividend is approved"
            - name: Personal tax year-end owner pay checklist
              description: |-
                ## Purpose
                The personal tax year end is the last chance to use any unused allowance or lower band, and the point after which this year's income is fixed. Two months before it, a short checklist of income so far, headroom, any interim dividend worth paying or deferring and pension contributions lets you act with time for the paperwork.

                ## Milestones
                1. Year-to-date owner income totalled from the log.
                2. Headroom to the next band and any unused allowance noted.
                3. A decision on paying or deferring an interim dividend, made with your accountant.
                4. Any agreed payment made and documented before the date.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tax year-end checklist completed two months before the year end each year, with any agreed payment documented in time."
                cadence: cyclic
              tasks:
                - "Find the date your personal tax year ends"
                - "Start the tax year-end owner pay checklist two months ahead @recurring(yearly)"
                - "Ask your accountant whether to pay or defer an interim dividend"
                - "Document any agreed payment before the year end date"
            - name: Personal tax return with salary and dividend records
              description: |-
                ## Purpose
                Owner income almost always means a personal tax return, and its figures have to match what the company reported: salary from payroll, dividends from the vouchers, interest on any director's loan. Gathering the documents in one folder each year, before your accountant asks, makes the return quicker, cheaper and less likely to be queried.

                ## Milestones
                1. The annual payroll summary, dividend vouchers and loan interest statements in one folder.
                2. Totals checked against the owner pay log.
                3. The folder sent to your accountant or used for your own return.
                4. The return filed and the tax paid from the tax pot by the deadline.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The personal return filed on time each year, with salary and dividend figures matching the company's records."
                cadence: cyclic
              tasks:
                - "Create a personal tax folder for the current year"
                - "Gather the payroll summary, vouchers and loan statements for the return @recurring(yearly)"
                - "Check the totals against the owner pay log"
                - "Pay the bill from the tax pot and note what is left"
            - name: Mortgage or loan application on owner income
              description: |-
                ## Purpose
                Lenders treat company owners and freelancers differently from employees, usually asking for two or three years of accounts, personal tax calculations and sometimes an accountant's letter, and some count only salary and dividends rather than retained profit. Preparing the evidence before applying, and knowing how your pay pattern will look to a lender, avoids an offer falling through late.

                ## Milestones
                1. The evidence lenders want from self-employed or director applicants listed, ideally through a broker.
                2. Two to three years of accounts, tax calculations and returns gathered.
                3. An accountant's reference letter requested if lenders ask for one.
                4. The application submitted with a complete evidence pack.

                ## Notes
                If a home purchase is a year or two away, ask your accountant before the year end how your salary and dividend pattern will read to lenders.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete income evidence pack submitted with the application, covering every document the lender or broker listed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask a broker which documents lenders want from company owners"
                - "Download personal tax calculations for the last three years"
                - "Request an accountant's reference letter"
                - "Assemble the evidence pack before booking the application"
            - name: Special dividend or bonus after an exceptional year
              description: |-
                ## Purpose
                A big contract or a one-off sale can leave far more profit than usual, and the temptation is to take it all at once. Choosing between a special dividend, a bonus, a pension contribution or leaving it in the company, with the tax cost of each and next year's cash needs in view, keeps a good year from becoming an expensive one.

                ## Milestones
                1. The one-off profit and next year's cash needs set side by side.
                2. Dividend, bonus, pension and retention options costed with your accountant.
                3. A choice made and minuted.
                4. Any payment spread across tax years if your accountant recommends it.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A minuted decision on how to use one-off profit, chosen from at least three options costed by your accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out how much of this year's profit was one-off"
                - "List the business's cash needs for the next twelve months"
                - "Ask your accountant to cost a dividend, bonus, pension or retention"
                - "Minute the decision and the payment dates"
            - name: Paying yourself in a new company's first year
              description: |-
                ## Purpose
                Founders in a company's first year often have no profit yet, so dividends are not possible and anything taken is either salary or a loan. Planning how you will live through that year, from savings, a small salary or part-time income, avoids building an overdrawn loan account before the first accounts are even drawn up.

                ## Milestones
                1. Your personal runway in months, from savings and other income, worked out.
                2. A small salary level, if any, agreed with your accountant.
                3. A rule recorded that money leaves the company only as salary or documented expenses.
                4. The first-year plan reviewed at month six against actual profit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A first-year owner pay plan with runway, salary level and a no-loans rule, reviewed at month six against actual profit."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Work out how many months your savings will cover"
                - "Ask your accountant which salary level suits a first year"
                - "Write the rule that money leaves only as salary or expenses"
                - "Review the plan against actual profit at month six"
            - name: Founder salary after raising outside investment
              description: |-
                ## Purpose
                Once investors own part of the company, founder pay stops being a private decision: shareholder agreements often require board or investor approval for founder salaries and rule out dividends while the company makes losses. Setting a salary you can live on, that investors see as reasonable and that the board has formally approved, avoids an awkward conversation at the first board meeting.

                ## Milestones
                1. Clauses on founder pay, bonuses and dividends in the investment documents listed.
                2. A salary proposal prepared from your personal budget and comparable founder salaries.
                3. The salary approved by the board or investors as the documents require.
                4. The approval minuted and passed to payroll.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A founder salary approved in line with the investment documents, minuted and set up in payroll."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find every clause on founder pay in the shareholder agreement"
                - "Gather two or three comparable founder salary benchmarks"
                - "Prepare a salary proposal for the board"
                - "Pass the minuted salary to whoever runs payroll"
            - name: Family members as shareholders or employees
              description: |-
                ## Purpose
                Paying a spouse or partner a salary, or giving family members shares so dividends spread across lower tax bands, is common and often legitimate, but tax authorities look closely at pay with no real work behind it and at shares held for children. Documenting the work, the rate and the share arrangements, with professional advice, is what separates a sound arrangement from one that unravels.

                ## Milestones
                1. The proposed arrangement and its purpose written down.
                2. Advice from your accountant, and a lawyer for any share transfer, recorded.
                3. A job description and timesheets kept for any family employee.
                4. Share transfers documented and registered where required.

                ## Notes
                Rules on income shifting, gifts of shares and payments to children vary widely by country. Do not set this up from an article; get advice for your own situation.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Any family pay or shareholding arrangement backed by written advice, a job description or share paperwork, and current records."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write down the family arrangement you are considering and why"
                - "Book advice from your accountant on the tax treatment"
                - "Draw up a job description and pay rate for any family employee"
                - "Check family employee timesheets and duties are kept up to date @recurring(quarterly)"
            - name: Co-founder pay and drawings policy
              description: |-
                ## Purpose
                Two or three owners taking different amounts at different times with no agreement is one of the fastest routes to a falling-out. A short written policy covering salaries, how dividends follow shareholdings, what happens when one founder works more or less and how changes are agreed keeps owner pay a business decision rather than a personal grievance.

                ## Milestones
                1. Each owner's current pay and expectations shared openly.
                2. A written policy on salaries, dividends, drawings and expenses.
                3. The policy checked against the shareholder or partnership agreement.
                4. The policy signed by every owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed co-founder pay policy consistent with the shareholder or partnership agreement, reviewed at least once a year."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask each co-owner to write down their pay needs and expectations"
                - "Draft a pay policy covering salary, dividends, drawings and expenses"
                - "Check the draft against the shareholder or partnership agreement"
                - "Review the co-founder pay policy together @recurring(yearly)"
            - name: Owner pay during parental leave or long illness
              description: |-
                ## Purpose
                An owner who stops working for a few months still has bills, and the company still has to decide what to pay them and from what. Planning ahead, with any statutory pay you can claim, a reduced dividend from reserves and cover for the work, means the business and the household both know what to expect.

                ## Milestones
                1. Any statutory parental or sickness pay you can claim as a director or self-employed person checked.
                2. A reduced owner pay plan for the leave period agreed.
                3. Cover arranged for payments, dividends and approvals while you are away.
                4. A return date or review point set.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written owner pay plan for the leave period, with statutory entitlements checked and cover for approvals arranged."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check which statutory leave or sickness payments you can claim"
                - "Agree a reduced owner pay amount for the leave period"
                - "Arrange who approves payments and dividends while you are away"
                - "Set a review date for the plan during the leave"
            - name: Planned owner pay holiday in a cash squeeze
              description: |-
                ## Purpose
                When cash gets tight, owners often stop paying themselves without telling anyone or deciding when to restart, and personal debt quietly builds. A planned pay holiday, with a reduced amount, a time limit, restart triggers and a note on any pay owed back, protects the business without hurting the household more than necessary.

                ## Milestones
                1. The reduced owner pay amount and its length agreed with any co-owners.
                2. The personal survival budget checked against the reduced amount.
                3. Restart triggers written down, such as two months above the cash buffer.
                4. Pay restored when the triggers are met, and the decision recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written owner pay holiday with an amount, a time limit and restart triggers, and pay restored when the triggers were met."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Compare your survival budget with what the business can pay now"
                - "Agree the reduced amount and how long it lasts"
                - "Write the triggers that restore normal pay"
                - "Record whether unpaid salary is owed back or waived"
            - name: Multi-year extraction plan towards exit or retirement
              description: |-
                ## Purpose
                Selling, retiring or stepping back within five to ten years opens choices that only work over several tax years: steady dividends within lower bands, pension funding, building retained cash, or keeping value in the company for a sale. A written plan, reviewed yearly with your accountant and a financial planner, spreads the extraction instead of leaving it all to the last year.

                ## Milestones
                1. A target exit or retirement year written down.
                2. A year-by-year extraction outline agreed with your accountant.
                3. Pension, dividend and retained cash targets set for each year.
                4. The plan reviewed every year against actual profit.

                ## Notes
                Pension and investment choices belong with a regulated financial planner. The plan sets amounts and timing, not products.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A multi-year extraction plan with yearly targets, agreed with your accountant and reviewed each year against actual profit."
                cadence: cyclic
              tasks:
                - "Write down your target exit or retirement year"
                - "Ask the agent to draft a year-by-year outline from your owner pay log"
                - "Review the outline with your accountant and a financial planner"
                - "Update the extraction plan with actual profit @recurring(yearly)"
            - name: Holding company for receiving dividends
              description: |-
                ## Purpose
                Some owners set up a holding company to receive dividends from the trading company, so profit can be moved away from trading risk or reinvested before it reaches the owner personally. It adds a second set of accounts and costs, and the tax result depends heavily on the country. Treat it as an advised decision with a clear reason, not a trick.

                ## Milestones
                1. The reason for considering a holding company written in a sentence.
                2. A costed recommendation from your accountant, including set-up and yearly costs.
                3. Legal advice obtained on the share transfer and any clearances needed.
                4. A decision recorded to proceed, wait or drop the idea.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a holding company, based on a costed recommendation from your accountant and legal advice on the transfer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down why you are considering a holding company"
                - "Ask your accountant for a costed recommendation"
                - "Get legal advice on transferring the trading company shares"
                - "Record the decision and the reasons behind it"
            - name: Separate share classes for different dividend rates
              description: |-
                ## Purpose
                Different share classes let a company pay different dividends to different shareholders, for example to reward a co-founder who works more or to bring in a family shareholder. They are also an area tax authorities scrutinise, and the articles must allow them. Getting the legal set-up and the reasons right before the first class dividend avoids having to unwind it later.

                ## Milestones
                1. The purpose of separate classes and who would hold them written down.
                2. Legal advice on amending the articles and issuing the new shares.
                3. Tax advice on how each class's dividends will be treated.
                4. New articles adopted and share certificates issued before any class dividend.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Any new share classes created only after written legal and tax advice, with articles amended before the first class dividend."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down who would hold each class and why"
                - "Read what the current articles say about share classes"
                - "Book legal and tax advice on the proposal"
                - "Hold the first class dividend until the paperwork is complete"
            - name: Owner pay when you live in another country
              description: |-
                ## Purpose
                Moving abroad while keeping the company, or running a company registered somewhere you do not live, can mean two tax authorities with an interest in the same salary and dividends. Tax residence, withholding on dividends and treaty relief all change the best pay mix. Advice in both countries before the move, not after the first return, avoids paying twice.

                ## Milestones
                1. Your expected tax residence for each year written down.
                2. Advice obtained from advisers who work in both countries.
                3. Withholding and treaty forms needed for dividends identified and filed.
                4. The owner pay plan rewritten for the new situation.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An owner pay plan rewritten for cross-border living, based on advice from both countries, with withholding forms filed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down where you expect to be tax resident each year"
                - "Find an adviser who works with both countries"
                - "List the withholding and treaty forms dividends will need"
                - "Rewrite the owner pay plan for the new situation"
            - name: Extracting retained profits when closing the company
              description: |-
                ## Purpose
                Closing a solvent company leaves the question of how its remaining cash reaches the owners: as a final dividend, as a capital distribution on winding up or through a formal liquidation, each with different tax and costs. Some countries also have anti-avoidance rules if you start a similar business soon after. Planning this with your accountant before you stop trading keeps more of what you built.

                ## Milestones
                1. The retained cash and remaining liabilities totalled.
                2. Closure routes costed by your accountant, including tax and fees.
                3. Any rules on starting a similar business afterwards noted.
                4. A closure plan agreed with dates for the final distributions.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A closure plan agreed with your accountant, choosing a route for distributing retained profits with its tax and fees costed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Total the cash left after all known liabilities"
                - "Ask your accountant to cost each route for closing the company"
                - "Ask about any rules on starting a similar business afterwards"
                - "Agree a dated closure plan for the final distributions"
            - name: Normalising owner pay for a business valuation
              description: |-
                ## Purpose
                Buyers and valuers look past what the owner actually took and ask what the business would pay a manager to do the owner's job. If your pay has been unusually low, profit looks better than a buyer will accept; if it has been high or mixed with personal costs, profit looks worse. A clear schedule of owner pay and adjustments makes the valuation conversation shorter and the numbers more credible.

                ## Milestones
                1. Three years of owner pay, benefits and personal costs through the company listed.
                2. A market salary for the owner's role estimated from benchmarks.
                3. An adjustments schedule showing reported profit and profit at market pay.
                4. The schedule reviewed by your accountant or a valuation adviser.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A three-year owner pay adjustments schedule showing profit at market pay, reviewed by an accountant or valuation adviser."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List three years of owner pay, benefits and personal costs"
                - "Ask the agent to draft an adjustments schedule from that list"
                - "Estimate a market salary for running the business day to day"
                - "Have your accountant or a valuation adviser review the schedule"
---

# Owner Pay & Dividend Planning

This area is for company owners, founders and freelancers deciding how to pay themselves without starving either the business or the household. It starts with foundations (a personal budget, the pay routes your structure allows, a separate pay account, reserves and the director's loan balance), then the monthly and quarterly routines, the tax knowledge behind the choices, decisions such as the salary and dividend mix, dated events like the final dividend and the personal return, situations from a first year to investor-backed founders and co-owners, and finally exit, holding company and cross-border planning.

What repeats is a monthly pay day with a tax pot transfer, a monthly pay log and director's loan review, quarterly dividend decisions and profit checks, and yearly reviews before the company year end and the personal tax year end. The Monthly budget and bills, Savings goal, Meeting notes, Board meeting and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
