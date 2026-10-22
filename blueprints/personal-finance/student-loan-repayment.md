---
id: personal-finance.student-loan-repayment
name: Student Loan Repayment
description: "Every loan and its rules on one page, payslip deductions checked, a reasoned decision on overpaying, and plans for moving abroad, career breaks, hardship and the final payment."
category: personal
version: 1.0.0
tags: [personal-finance, student-loan-repayment, student, everyone, repayment-threshold, overpayment, refinancing, loan-forgiveness]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - savings-goal
    - purchase-decision
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Student Loan Repayment
          description: "Understanding student loan terms, repayment thresholds and whether overpaying makes sense, for graduates at any stage."
          projects:
            - name: Every student loan listed on one page
              description: |-
                ## Purpose
                Many graduates hold two or three loans on different plans, sometimes with different lenders, and only know the total on the latest statement. One page listing each loan's lender, plan type, original amount, current balance and interest rate is the base for every later decision in this area, from overpaying to moving abroad.

                ## Milestones
                1. Every loan you took listed, including tuition, maintenance, postgraduate and any private loans.
                2. Each loan's lender or servicer, plan type, current balance and interest rate recorded beside it.
                3. The total balance and the total monthly or yearly repayment worked out.
                4. The page saved somewhere you can find it in five years.

                ## Notes
                Include loans you think are paid off or forgotten. Old private loans and short-term university hardship loans are the ones that turn up later with a collections letter.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single page lists every student loan with lender, plan type, balance and interest rate, dated within the last month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every loan you remember taking, year by year of study"
                - "Log in to each lender's account and copy the current balance and rate"
                - "Search old emails for loan agreements from lenders you have forgotten"
                - "Add up the total balance and the total you repay each month"
            - name: Loan servicer login and contact details check
              description: |-
                ## Purpose
                Letters about rate changes, missing income evidence or a payment problem go to whatever address and email the servicer holds, which for many graduates is still a university account or a parent's house. Getting into every account and updating the details takes an hour and prevents penalties that start with a letter nobody read.

                ## Milestones
                1. Working logins for every loan account, stored in your password manager.
                2. Postal address, email and phone number up to date on each account.
                3. Paperless statements switched on, or the postal address confirmed, for each loan.
                4. Security questions and recovery email checked so you will not be locked out.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every student loan account can be logged into and holds your current address, email and phone number."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Reset the password on any loan account you cannot get into"
                - "Replace a university or parent's email address with your own"
                - "Update your postal address and phone number on every account"
                - "Confirm your contact details on each loan account are still current @recurring(yearly)"
            - name: Identifying your repayment plan and its rules
              description: |-
                ## Purpose
                Repayment rules depend entirely on which plan or scheme your loan sits under: the income threshold, the percentage taken, the interest formula and the year the debt is written off can all differ between two people who graduated a year apart. Writing down the rules for your own plan stops you following advice meant for someone else's.

                ## Milestones
                1. The official name of the plan or scheme each loan belongs to.
                2. The current repayment threshold and percentage for each plan, taken from the official source.
                3. The interest rule and the write-off or cancellation term recorded.
                4. A one-paragraph summary of how your plan works, in your own words.

                ## Notes
                Online calculators and forum posts often assume one particular plan. Check which plan a source is talking about before using its numbers.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written summary names each loan's plan, its threshold, repayment rate, interest rule and write-off term, with the official source for each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the plan or scheme name on your latest loan statement"
                - "Look up the official threshold, rate and write-off rule for that plan"
                - "Note whether repayments come through payroll, the tax return or direct debit"
                - "Write a short summary of the rules in your loan folder"
            - name: Reading your annual loan statement line by line
              description: |-
                ## Purpose
                The yearly statement shows interest added, payments received and the closing balance, yet most people only glance at the last number and wonder why it has grown. Working through each line once shows how interest and repayments really interact on your loan, and it catches payments that never arrived.

                ## Milestones
                1. The latest annual statement downloaded and saved.
                2. Opening balance, interest added, repayments and closing balance each identified.
                3. Interest added compared with repayments made over the year.
                4. Any line you cannot explain written down as a question for the servicer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The latest statement is annotated with interest added, repayments received and any unexplained line, with questions sent to the servicer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the most recent annual statement for each loan"
                - "Highlight the interest added and the repayments received"
                - "Work out whether the balance rose or fell over the year and why"
                - "Send the servicer a question about any line you cannot explain"
            - name: Working out your expected monthly deduction
              description: |-
                ## Purpose
                On an income-contingent plan the deduction is a set percentage of pay above a threshold, so it can be calculated to the pound from a payslip. Knowing the figure you should see each month makes later payslip checks possible, and it shows how much a pay rise or bonus will really cost in loan repayments.

                ## Milestones
                1. Your gross pay per pay period and the plan threshold for the same period written down.
                2. The expected deduction calculated for a normal month.
                3. The expected deduction for a month with a bonus or overtime calculated too.
                4. Your calculation compared with the deduction on your latest payslip.

                ## Notes
                Thresholds are usually applied per pay period, not per year, so a one-off bonus month can trigger a deduction even when yearly pay is below the annual threshold. That deduction may be refundable later.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written calculation of the expected monthly deduction matches the latest payslip to within one pound, or the gap has been raised with payroll."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the per-period threshold for your plan on the official site"
                - "Subtract it from the gross pay on your latest payslip"
                - "Apply your plan's percentage to get the expected deduction"
                - "Work out the deduction for a month that includes a bonus"
            - name: Recording how your loan interest rate is set
              description: |-
                ## Purpose
                Student loan interest is often tied to an inflation index, to your income, or fixed when the loan was taken out, and it may change once a year. Recording the formula, the current rate and the date it changes means a jump in the balance is a known event rather than a shock, and it feeds the overpayment decision later.

                ## Milestones
                1. The interest formula for each loan written down from the official terms.
                2. The current rate and the date it next changes noted.
                3. Last year's rate found, where published, to show how much it moves.
                4. The yearly rate change added to your calendar.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The interest formula, current rate and next change date for every loan are recorded, with the change date in the calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up the interest formula for each loan in its terms"
                - "Note the current rate and the date it next resets"
                - "Find last year's rate to see how far it moved"
                - "Record the new rate on each loan when it resets @recurring(yearly)"
            - name: Write-off date and cancellation rules
              description: |-
                ## Purpose
                Many government student loans are cancelled after a fixed number of years or at a certain age, and that end date matters as much as the balance. Knowing your exact write-off date tells you whether you are likely to clear the loan first, which is the question behind almost every overpayment decision.

                ## Milestones
                1. The write-off rule for each plan found in the official terms.
                2. The year or age it applies to you calculated and written down.
                3. Any private loans confirmed as having no write-off, if that is the case.
                4. The dates added to your one-page loan list.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The write-off date for each government loan, and the absence of one for any private loan, is written in your loan folder."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the write-off rule for your plan in the official guidance"
                - "Work out the year your own loan would be written off"
                - "Confirm whether each private loan has any write-off or cancellation term"
                - "Add the write-off dates to your one-page loan list"
            - name: Student loan paperwork folder
              description: |-
                ## Purpose
                Disputes, refunds and overseas applications all ask for evidence: the original agreement, annual statements, payslips showing deductions and letters from the servicer. A single folder, paper or digital, filed as documents arrive, saves days of searching when a problem surfaces years later.

                ## Milestones
                1. One folder created with sections for agreements, statements, payslips and letters.
                2. Original loan agreements found or requested from the lender.
                3. The last three years of annual statements saved.
                4. Year-end pay certificates for every year of repayment saved.

                ## Notes
                Keep these until well after the loan is closed or written off. Refund claims and disputes can reach back several years.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One folder holds the loan agreements, three years of statements and every year-end pay certificate since repayments began."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a folder with sections for agreements, statements, payslips and letters"
                - "Request copies of any loan agreements you no longer have"
                - "Save each year-end pay certificate since repayments began"
                - "Scan any paper letters from the servicer into the folder"
            - name: Countdown to your first repayment
              description: |-
                ## Purpose
                Recent graduates often do not know when repayments start: it may be a fixed date after the course ends, the end of a grace period, or the first payday above a threshold. Finding the exact start date and the first expected amount a couple of months ahead means the first deduction or bill is planned for, not a surprise in month one of a new job.

                ## Milestones
                1. The date of your first repayment, or the rule that triggers it, confirmed with the servicer.
                2. The expected first amount worked out from your plan's rules.
                3. The payment method set up, if repayments are not taken through payroll.
                4. The first deduction or payment seen and checked against the expected amount.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first repayment date and amount were known in advance, and the first payment matched the expected figure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your course end date and your plan's repayment start rule"
                - "Ask the servicer to confirm the date of your first repayment"
                - "Set up the direct debit if your first payment is not through payroll"
                - "Check the first deduction against the amount you expected"
            - name: Monthly payslip loan deduction check
              description: |-
                ## Purpose
                Payroll errors are common with student loans: the wrong plan code, a deduction that never starts, or one that continues after the loan is cleared. Spending two minutes on each payslip comparing the deduction with your expected figure catches mistakes in the month they happen, while they are still easy for payroll to fix.

                ## Milestones
                1. Your expected monthly deduction written somewhere you see on payday.
                2. Every payslip from the last three months checked against it.
                3. Any difference raised with payroll in writing.
                4. Twelve consecutive payslips checked.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive payslips have been checked against the expected deduction, with any gap raised with payroll in writing."
                cadence: rolling
              tasks:
                - "Write your expected deduction in the note you open on payday"
                - "Check the last three payslips for the right plan and amount"
                - "Compare the loan deduction on your payslip with the expected figure @recurring(monthly:26)"
                - "Email payroll about any deduction that does not match"
            - name: Annual match of payroll deductions to loan statement
              description: |-
                ## Purpose
                Payroll deductions travel through the tax authority before reaching the loan account, and payments sometimes go missing or land against the wrong plan. Matching the year's total deductions on your year-end pay certificate with the repayments shown on your loan statement is the only reliable way to spot a gap before it gets old.

                ## Milestones
                1. The year-end pay certificate and the annual loan statement for the same year side by side.
                2. Total deductions on payslips compared with total repayments recorded on the loan.
                3. Any shortfall reported to the servicer with payslip evidence.
                4. The match completed for every year since repayments began.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Total payroll deductions and recorded repayments match for every year since repayments began, or the difference is under investigation with the servicer."
                cadence: cyclic
              tasks:
                - "Total the loan deductions from your year-end pay certificate @recurring(yearly)"
                - "Compare the total with repayments shown on the loan statement"
                - "Send the servicer payslip copies for any missing repayments"
                - "Repeat the match for each earlier year you have not checked"
            - name: Autopay routine for fixed monthly loan payments
              description: |-
                ## Purpose
                Loans with a fixed monthly bill, typical of private loans and many standard repayment plans, depend on a payment leaving your account on time every month. Automatic payment set a few days after payday removes the risk of a late fee, and some lenders give a small interest rate discount for using it.

                ## Milestones
                1. Automatic payment set up for every fixed-payment loan.
                2. Payment dates moved to fall a few days after payday where the lender allows it.
                3. Any autopay interest discount confirmed on the account.
                4. Six months of payments cleared on time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fixed-payment student loan has paid automatically and on time for six consecutive months."
                cadence: rolling
              tasks:
                - "Ask each lender whether autopay carries an interest rate discount"
                - "Set up automatic payment from the account your salary lands in"
                - "Ask to move the due date to a few days after payday"
                - "Check the loan payment has cleared on your bank statement @recurring(monthly:3)"
            - name: Quarterly loan balance and interest log
              description: |-
                ## Purpose
                A balance that grows despite years of repayments is normal on some plans and alarming on others, and you only know which by watching the trend. Recording each loan's balance and interest every quarter shows whether repayments are beating interest and gives your projection real numbers to work from.

                ## Milestones
                1. A log with columns for date, loan, balance, interest added and repayments.
                2. Each loan's current figures entered as the starting point.
                3. Four quarterly entries made over a year.
                4. One line each year on whether the balance is rising or falling.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log holds four quarterly entries per loan showing balance, interest added and repayments, with a yearly trend note."
                cadence: rolling
              tasks:
                - "Create a balance log from the metrics log template"
                - "Enter each loan's balance, interest and repayments as of today"
                - "Record each loan's balance and interest added this quarter @recurring(quarterly)"
                - "Write one line on whether repayments are beating the interest"
            - name: Annual student loan plan review
              description: |-
                ## Purpose
                Pay rises, a new job, a move or a second loan can change which repayment approach suits you, and plan rules and thresholds change too. A short yearly review using your statement, balance log and projection confirms that the current approach still fits, or flags a decision to make.

                ## Milestones
                1. The year's statement, balance log and current salary gathered.
                2. Thresholds and rates for your plan rechecked against the official source.
                3. The current approach, whether minimum payments, overpaying or an income-driven plan, confirmed or changed.
                4. The outcome written as one dated paragraph in your loan folder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated review paragraph is in the loan folder each year, recording whether the repayment approach stayed the same or changed and why."
                cadence: cyclic
              tasks:
                - "Block an hour in the calendar for the yearly loan review @recurring(yearly)"
                - "Recheck the current thresholds and rates for your plan"
                - "Decide whether to keep, change or stop any overpayments"
                - "Ask the agent to summarise the year's statement and log into one paragraph"
            - name: Yearly income recertification for an income-driven plan
              description: |-
                ## Purpose
                Income-driven plans recalculate your payment from your latest income and household size, usually once a year, and missing the deadline can move you back to a much higher standard payment and add unpaid interest to the balance. Treating recertification as a fixed date, with documents ready a month ahead, keeps the payment affordable.

                ## Milestones
                1. The recertification deadline for each income-driven loan found and put in the calendar.
                2. Income evidence, usually the latest tax return or recent payslips, gathered.
                3. The recertification submitted at least two weeks before the deadline.
                4. The new monthly payment confirmed in writing and checked against your budget.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Recertification has been submitted before the deadline each year, with the new payment confirmed in writing."
                cadence: cyclic
              tasks:
                - "Find the recertification deadline on each income-driven loan"
                - "Gather your latest tax return or recent payslips a month ahead @recurring(yearly)"
                - "Submit the recertification two weeks before the deadline"
                - "Save the confirmation of your new monthly payment"
            - name: Servicer call and letter log
              description: |-
                ## Purpose
                Calls to a loan servicer are often long, and the person on the next call may have no record of what the last one promised. Logging every contact with the date, the name of the person, a reference number and what was agreed gives you evidence when a promise is not kept and saves repeating the whole story.

                ## Milestones
                1. A log with columns for date, channel, name, reference number and outcome.
                2. Every contact from the last year added from memory and emails.
                3. Each open query marked with the date a reply is due.
                4. Open queries chased within a week of the promised date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every contact with a loan servicer in the past year is logged with a reference number, and no open query is more than a week past its promised date."
                cadence: rolling
              tasks:
                - "Create a contact log with date, name, reference and outcome columns"
                - "Add every call and letter from the past year you can find"
                - "Ask for a reference number at the start of every call"
                - "Chase any servicer query that is past its promised reply date @recurring(monthly:15)"
            - name: Self-employed student loan set-aside
              description: |-
                ## Purpose
                When you are self-employed, income-contingent repayments are often collected through the annual tax return as one lump sum, which can arrive alongside the tax bill months after the income was earned. Moving a set percentage of each payment received into a separate pot means the loan repayment is already sitting there when the bill lands.

                ## Milestones
                1. Your plan's percentage and threshold applied to last year's profit to estimate the bill.
                2. A separate savings pot opened for the loan repayment.
                3. A fixed percentage of every payment received moved into the pot.
                4. The repayment paid in full from the pot at the tax deadline.

                ## Notes
                Start from the **Savings goal** template. Keep this pot apart from your tax set-aside so you can see both clearly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The student loan amount due on the last tax return was paid in full from a dedicated pot by the deadline."
                cadence: rolling
              tasks:
                - "Estimate this year's loan repayment from last year's profit"
                - "Open a separate pot for the student loan repayment"
                - "Move the loan percentage of the month's income into the pot @recurring(monthly:20)"
                - "Include student loan repayments on your tax return @recurring(yearly)"
            - name: Refund check for years below the threshold
              description: |-
                ## Purpose
                Deductions can be taken in a year when total income ended up below the annual threshold, typically after a bonus month, a short contract or a year cut short by a career break. Most income-contingent schemes refund these on request, but rarely without being asked.

                ## Milestones
                1. Each year's total income compared with that year's annual threshold.
                2. Years with deductions but income below the threshold listed.
                3. A refund requested for each such year with the evidence attached.
                4. Refunds received and checked against the amount requested.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every year with deductions taken and income below the threshold has a refund request filed or a refund received."
                cadence: cyclic
              tasks:
                - "Compare each year's total income with that year's threshold @recurring(yearly)"
                - "List any years where deductions were taken below the threshold"
                - "Request a refund from the servicer with year-end pay certificates attached"
                - "Check the refund received against the amount you claimed"
            - name: How income-contingent repayment really works
              description: |-
                ## Purpose
                Under an income-contingent plan the monthly amount depends on pay, not on the balance, so a larger debt does not mean larger repayments and many borrowers never clear the full amount. Understanding that idea properly changes how you see the balance, the interest and the pressure to pay it down.

                ## Milestones
                1. The difference between a fixed-payment loan and an income-contingent one explained in your own words.
                2. Your own deduction at three different salaries worked out.
                3. The point at which balance size starts to matter for you identified.
                4. A short note written on what the balance means in your case.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note explains, with your own numbers at three salaries, why your monthly repayment does or does not depend on your balance."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the official explanation of how your plan calculates repayments"
                - "Work out your deduction at your current salary and two higher ones"
                - "Explain the idea to a friend or partner to test your understanding"
                - "Write a short note on what the balance means for you"
            - name: Interest capitalisation and how it grows the balance
              description: |-
                ## Purpose
                On many loans, interest that is not paid is added to the balance at set moments, such as the end of a grace period, a deferment or leaving an income-driven plan, after which interest is charged on that interest. Knowing which events trigger capitalisation on your loans helps you avoid the ones that can be avoided.

                ## Milestones
                1. The events that cause interest to be capitalised on each loan listed from the terms.
                2. Any past capitalisation found on your statements and its amount noted.
                3. Upcoming events that could trigger it, such as the end of a deferment, identified.
                4. A plan written for paying accrued interest before a capitalisation date, if affordable.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of capitalisation triggers for each loan is in the loan folder, with any upcoming trigger date noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search each loan's terms for capitalisation or capitalised interest"
                - "Find any past capitalisation in your statement history"
                - "Note the next date that could trigger capitalisation"
                - "Ask the servicer how much accrued interest is outstanding today"
            - name: Lifetime repayment projection
              description: |-
                ## Purpose
                Whether you will clear the loan before write-off depends on your salary path, the interest rate and the plan rules, and a simple projection answers it better than any rule of thumb. Building one with a few salary scenarios turns the overpayment question from guesswork into a comparison of totals.

                ## Milestones
                1. A spreadsheet or calculator set up with your balance, rate, threshold and write-off date.
                2. Three salary scenarios entered: modest, expected and strong growth.
                3. Total repaid and the payoff or write-off year shown for each scenario.
                4. The projection rerun with the latest figures once a year.

                ## Notes
                Treat the output as a range, not a forecast. Small changes to salary growth or interest assumptions move the answer a lot near the break-even point.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A projection shows total repaid and the payoff or write-off year under three salary scenarios, updated within the last year."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose an official or reputable repayment calculator for your plan"
                - "Enter your balance, rate, salary and write-off date"
                - "Run modest, expected and strong salary growth scenarios"
                - "Update the projection with your new salary and balance @recurring(yearly)"
            - name: How student loans show up to lenders
              description: |-
                ## Purpose
                In some countries student loans appear on credit files and in others they do not, but almost every mortgage or loan application asks about them, and the monthly deduction reduces what lenders think you can afford. Knowing how your loan is reported and treated avoids a surprise when you next apply to borrow.

                ## Milestones
                1. Whether your loans appear on your credit report confirmed.
                2. Any reported loan checked for the right balance and payment status.
                3. The way lenders count student loan repayments in affordability checks noted.
                4. The monthly figure you would give a lender written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records whether each loan appears on your credit report and the monthly repayment figure lenders will use."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check your credit report for any student loan entries"
                - "Confirm the balance and status of each reported loan are right"
                - "Read how mortgage lenders treat student loan repayments in affordability checks"
                - "Write down the monthly repayment figure you would declare"
            - name: Reading the loan agreement's small print
              description: |-
                ## Purpose
                The agreement you signed at eighteen sets out what counts as default, when the lender can demand the whole balance, what happens if you leave the country and which hardship options exist. Reading it once as an adult, with a list of clauses to look for, means you know your rights before you need them.

                ## Milestones
                1. A copy of each loan agreement and its current terms obtained.
                2. The clauses on default, moving abroad, hardship and early repayment found and flagged.
                3. Any terms that have changed since you signed noted.
                4. Questions you could not answer sent to the lender.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each loan agreement has its default, overseas, hardship and early repayment clauses flagged, with unanswered questions sent to the lender."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the current terms and conditions for each loan"
                - "Flag the clauses on default, moving abroad, hardship and early repayment"
                - "Note any term that differs from the agreement you originally signed"
                - "Send the lender questions about any clause you cannot follow"
            - name: Repaying two loan plans at the same time
              description: |-
                ## Purpose
                Graduates with an undergraduate loan and a postgraduate loan, or loans from two different schemes, may have two separate deductions with different thresholds and rates running at once. Knowing how the plans interact stops you mistaking a correct double deduction for a payroll error, or missing a real one.

                ## Milestones
                1. Both plans and their thresholds and rates written side by side.
                2. The expected deduction for each plan calculated from one payslip.
                3. Payroll confirmed to have both plan codes on your record.
                4. The order in which the two loans are likely to clear or be written off noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A side-by-side note shows both plans' thresholds, rates and expected deductions, and payroll has confirmed both plan codes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write both plans' thresholds and rates in two columns"
                - "Calculate the deduction each plan should take from one payslip"
                - "Ask payroll to confirm both plan codes are on your record"
                - "Note which loan is likely to clear or be written off first"
            - name: Spotting student loan scams
              description: |-
                ## Purpose
                Fake forgiveness firms, phishing emails about a suspended account and callers offering lower payments for an upfront fee all target graduates, often timed around real policy announcements. Knowing what your real servicer will and will not ask for, and how to check a contact is genuine, protects both your money and your loan account.

                ## Milestones
                1. The official contact routes for each servicer saved in your phone.
                2. The things your servicer says it will never ask for written down.
                3. Any third-party company you have paid for loan help checked against official guidance.
                4. A personal rule set: never act on a loan message without logging in directly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Official servicer contact details are saved and a written list of what they never ask for is kept in the loan folder."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Save each servicer's official phone number and web address in your contacts"
                - "Read what your servicer says it will never ask you for"
                - "Check any company you have paid for loan help against official warnings"
                - "Report any suspicious loan message to the servicer's fraud team"
            - name: Deciding whether to overpay your student loan
              description: |-
                ## Purpose
                Overpaying can save years of interest on a loan you will clear anyway, or be money spent on a balance that would have been written off. Comparing your projection with what the same money would do in savings, a pension or against other debt gives a reasoned decision you can revisit, rather than one driven by the size of the balance.

                ## Milestones
                1. Your projection consulted to see whether you are likely to clear the loan before write-off.
                2. Higher-interest debts and an emergency buffer checked as priorities first.
                3. The overpayment compared with saving the same money over the same period.
                4. A decision recorded with the reasons and a date to revisit it.

                ## Notes
                This area organises the decision; it is not financial advice. If the sums are large or the answer is close, a regulated financial adviser can check the reasoning.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written overpay or do-not-overpay decision, with the projection numbers behind it and a review date, is in the loan folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your projection for the scenario you think most likely"
                - "List any debts costing more interest than the student loan"
                - "Compare overpaying with saving the same amount for five years"
                - "Write down your decision, the reasons and a date to revisit it"
            - name: Final-years payoff push
              description: |-
                ## Purpose
                Once the projection shows you will clear the loan within a few years, every extra payment cuts interest directly and brings the last deduction closer. Planning a steady monthly overpayment for that final stretch, and confirming how the servicer applies it, finishes the loan on your timetable.

                ## Milestones
                1. The projected clearance date confirmed with the latest balance.
                2. A monthly overpayment amount chosen that fits the budget.
                3. The servicer confirmed to apply overpayments to the balance, not to future payments.
                4. The new projected clearance date recorded after six months of overpaying.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of overpayments have been applied to the balance and the new clearance date is recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check the latest balance and projected clearance date"
                - "Ask the servicer how overpayments are applied to the loan"
                - "Make the planned overpayment to the student loan @recurring(monthly:12)"
                - "Recalculate the clearance date after six overpayments"
            - name: Comparing private student loan refinancing offers
              description: |-
                ## Purpose
                Refinancing a private student loan at a lower rate can cut the total cost, but refinancing a government loan into a private one usually gives up income-driven payments, forgiveness and hardship options for good. Comparing offers on rate, term, fees and lost protections, side by side, makes the trade visible before anything is signed.

                ## Milestones
                1. The loans where refinancing could make sense identified, with government loans considered separately.
                2. At least three offers gathered using soft credit checks.
                3. Each offer scored on rate, term, fees, total cost and protections lost.
                4. A decision recorded to refinance, wait, or keep the loans as they are.

                ## Notes
                Start from the **Purchase decision** template. Variable rates can look cheapest today and cost the most later.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three refinancing offers are compared on rate, term, fees, total cost and lost protections, with a written decision."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Mark which of your loans are private and which are government loans"
                - "Request rate quotes from three lenders that use a soft credit check"
                - "Compare total cost and lost protections for each offer"
                - "Record your decision to refinance, wait or keep the current loans"
            - name: Switching to an income-driven repayment plan
              description: |-
                ## Purpose
                Where a fixed payment takes too much of your take-home pay, an income-driven plan can cap it at a share of income and may lead to forgiveness after a set number of years, at the cost of more interest over time. Applying is free through the official servicer, and comparing the plans first avoids choosing one that suits someone else's situation.

                ## Milestones
                1. The income-driven plans available for your loan types listed.
                2. Your estimated payment on each plan compared with your current payment.
                3. Long-term cost and any forgiveness timeline noted for each.
                4. An application submitted through the official servicer, or a reasoned decision to stay.

                ## Notes
                Any company charging a fee to enrol you in a plan is doing something you can do yourself for nothing.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of available income-driven plans is recorded, and either an application has been submitted or a decision to stay is written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Use the official loan simulator to list plans you qualify for"
                - "Compare the estimated monthly payment on each plan"
                - "Note the total cost and forgiveness timeline for the best two"
                - "Submit the application through the official servicer website"
            - name: Government loan consolidation trade-offs
              description: |-
                ## Purpose
                Some systems let you combine several government student loans into one, which can simplify payments and open up repayment plans, but it can also reset progress towards forgiveness and add unpaid interest to the balance. Checking those effects for your own loans before applying prevents an irreversible step that costs more than it saves.

                ## Milestones
                1. Which of your loans are eligible to combine, and which are not, confirmed.
                2. Effects on interest rate, forgiveness progress and plan options listed.
                3. Any loans that should stay separate identified.
                4. A decision recorded to combine all, some, or none of the loans.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on combining government loans lists the effect on rate, forgiveness progress and plan options for each loan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check which of your government loans are eligible to combine"
                - "Ask the servicer whether combining would reset your qualifying payments"
                - "List the loans that should stay separate and why"
                - "Record whether you will combine all, some or none of the loans"
            - name: Targeting extra payments across several fixed loans
              description: |-
                ## Purpose
                With several fixed-payment loans at different rates, an extra payment does the most work on the highest-rate loan, yet many servicers spread it across all of them or push the next due date forward instead. Choosing a target loan and giving the servicer written instructions on how to apply extra money makes each overpayment count.

                ## Milestones
                1. Every fixed-payment loan ranked by interest rate.
                2. A target loan chosen for extra payments.
                3. Written instructions sent to the servicer to apply extra payments to that loan's principal.
                4. Statements checked to confirm the instructions are being followed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Extra payments for three consecutive months appear against the principal of the chosen target loan on the statements."
                cadence: rolling
              tasks:
                - "Rank your fixed-payment loans by interest rate"
                - "Send the servicer written instructions on applying extra payments"
                - "Make the extra payment to the highest-rate loan @recurring(monthly:9)"
                - "Check the statement shows it reduced that loan's principal"
            - name: Pension contributions and loan deductions check
              description: |-
                ## Purpose
                In some systems, pension contributions made through salary sacrifice reduce the pay figure used for student loan deductions, while contributions made other ways do not. Asking payroll which method your scheme uses explains the deduction on your payslip and shows whether a different contribution method would change what you repay.

                ## Milestones
                1. Your workplace pension contribution method confirmed with payroll.
                2. The pay figure used for student loan deductions identified on the payslip.
                3. The effect of the contribution method on your deduction calculated.
                4. Any question about changing method noted for payroll or a financial adviser.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Payroll has confirmed the pension contribution method and the pay figure used for student loan deductions, with the effect written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask payroll how your pension contributions are taken"
                - "Find which pay figure your student loan deduction is based on"
                - "Calculate the deduction with and without the pension contribution"
                - "Note any change you want to discuss with payroll or an adviser"
            - name: Co-signer release application
              description: |-
                ## Purpose
                Many private student loans were taken out with a parent or relative as co-signer, who stays fully liable and carries the loan on their own credit file until released. Lenders often allow release after a run of on-time payments and a credit check, so working towards it frees someone who helped you and simplifies both sets of finances.

                ## Milestones
                1. The lender's co-signer release rules and required number of on-time payments found.
                2. Your on-time payment count and income checked against the rules.
                3. The release application submitted with the evidence asked for.
                4. Written confirmation of release sent to the co-signer.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The co-signer holds written confirmation from the lender that they are released from the loan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the co-signer release rules in your private loan terms"
                - "Count the consecutive on-time payments made so far"
                - "Submit the release application with income evidence"
                - "Send your co-signer a copy of the release confirmation"
            - name: New job loan deduction set-up
              description: |-
                ## Purpose
                A new employer needs to know your plan type to deduct the right amount, and the details do not always transfer from the last job. Checking the first two payslips at a new job catches a missing or wrong plan before months of under- or over-deduction build up.

                ## Milestones
                1. Your plan type given to the new employer on the starter form.
                2. The first payslip checked for a deduction on the right plan.
                3. Any missing or wrong deduction raised with payroll before the second payday.
                4. The second payslip confirmed correct.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first two payslips at the new job show the correct plan and an amount that matches your calculation."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Tick the right student loan plan on the new starter form"
                - "Check the first payslip for a student loan deduction and plan code"
                - "Contact payroll before the second payday about any error"
                - "Confirm the second payslip shows the corrected deduction"
            - name: Moving abroad with a student loan
              description: |-
                ## Purpose
                Payroll deductions stop when you leave for a job overseas, but the loan does not, and many schemes require you to register the move and send evidence of overseas income. Borrowers who do not are often charged a high fixed payment, and sometimes a penalty rate, until the paperwork is in.

                ## Milestones
                1. The servicer told of your move, with a departure date and new address.
                2. The overseas income assessment submitted with evidence of pay.
                3. Your new monthly payment and payment method confirmed.
                4. Income evidence sent again each year by the deadline.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your servicer holds your overseas address, has assessed your overseas income and has confirmed the new payment in writing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Tell the servicer your departure date and overseas address"
                - "Complete the overseas income assessment with evidence of pay"
                - "Set up the payment method for repayments from abroad"
                - "Send updated overseas income evidence to the servicer @recurring(yearly)"
            - name: Returning home and restarting payroll deductions
              description: |-
                ## Purpose
                Coming back from abroad means switching from direct payments back to payroll deductions, and for a few months the two can overlap or both can lapse. Telling the servicer your return date and checking the first payslips at home avoids paying twice or building up arrears.

                ## Milestones
                1. The servicer told of your return date and home address.
                2. Direct payments from abroad stopped once payroll deductions start.
                3. The first home payslip checked for the right plan and amount.
                4. Any overlap payments refunded or credited to the balance.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Payroll deductions have restarted correctly and overseas direct payments have stopped, with no unrefunded overlap."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Tell the servicer the date you are returning and your home address"
                - "Cancel overseas direct payments once the first payroll deduction appears"
                - "Confirm payroll has your student loan plan code on the first home payslip"
                - "Ask for a refund of any month where you paid twice"
            - name: Final payment and loan closure
              description: |-
                ## Purpose
                Deductions through payroll can carry on for months after the balance reaches zero, because information moves slowly between payroll, the tax authority and the servicer. Some schemes let you switch to direct debit for the last stretch to prevent this; either way, checking the closing balance and getting written confirmation ends the loan cleanly.

                ## Milestones
                1. The month the balance is likely to reach zero estimated from the latest statement.
                2. Any option to switch to direct payments for the final stretch considered.
                3. Payroll told to stop deductions once the servicer confirms the loan is repaid.
                4. A closure letter received and any overpayment refunded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A closure letter from the servicer is in the loan folder and any over-collected amount has been refunded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate the month your balance reaches zero from the latest statement"
                - "Ask the servicer about switching to direct payments for the final months"
                - "Ask payroll to stop deductions once the servicer confirms repayment"
                - "Request a closure letter and a refund of any overpayment"
            - name: Confirming a loan is written off on time
              description: |-
                ## Purpose
                When a loan reaches its write-off date, deductions should stop and the remaining balance should be cancelled, yet borrowers report deductions continuing past the date. Checking the date in advance and confirming the cancellation in writing makes sure the end of the loan actually happens.

                ## Milestones
                1. The write-off date confirmed with the servicer six months ahead.
                2. Payroll told of the date so deductions stop.
                3. A cancellation letter received showing a zero balance.
                4. Any deductions taken after the write-off date refunded.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A cancellation letter showing a zero balance is filed, and no deduction taken after the write-off date remains unrefunded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the servicer to confirm your write-off date in writing"
                - "Tell payroll the date deductions should stop"
                - "Request the cancellation letter once the date has passed"
                - "Claim back any deduction taken after the write-off date"
            - name: Student loan figures for a mortgage application
              description: |-
                ## Purpose
                Mortgage lenders ask for the student loan deduction or payment and often for a recent statement, and they count it as a fixed outgoing when working out how much they will lend. Having the right figures and evidence ready means the application reflects your loan correctly, and you know in advance how it changes the amount you can borrow.

                ## Milestones
                1. The last three payslips and latest loan statement ready to upload.
                2. The monthly student loan figure for each loan confirmed.
                3. A lender's affordability calculator run with and without the loan payment.
                4. The figures given on the application checked against your evidence.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The application lists the correct monthly student loan figure, backed by three payslips and the latest statement."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save the last three payslips and the latest loan statement together"
                - "Run a lender's affordability calculator with and without the loan payment"
                - "Tell the broker which loans are income-contingent and which are fixed"
                - "Check the loan figures on the application before it is submitted"
            - name: Leaving university loan checklist
              description: |-
                ## Purpose
                In the final term, students are about to lose their university email, move out of term-time housing and stop receiving maintenance payments, all of which affects the loan account. A short checklist before graduation keeps the servicer able to reach you and gives you a record of exactly what you borrowed.

                ## Milestones
                1. The total borrowed for tuition, maintenance and any other loans recorded from the account.
                2. The loan account switched from a university email to a personal one.
                3. The date of the last maintenance payment noted and budgeted for.
                4. Your course end date confirmed with the servicer.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Before graduation, the loan account holds a personal email and home address, and the total borrowed is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Screenshot the total borrowed shown on your loan account"
                - "Change the loan account email from your university address"
                - "Note the date and amount of your last maintenance payment"
                - "Check the servicer has your correct course end date"
            - name: Career breaks and part-time years below the threshold
              description: |-
                ## Purpose
                Parental leave, caring, further study or part-time work can drop income below the repayment threshold, and income-contingent deductions then stop on their own while interest usually carries on. Fixed-payment loans are different and need action, so knowing which kind you hold stops a quiet break from turning into missed payments.

                ## Milestones
                1. Each loan marked as stopping automatically or needing action when income falls.
                2. Expected income during the break compared with the threshold.
                3. Fixed-payment lenders contacted about reduced payments or a pause before the break starts.
                4. The restart of payments checked when income returns.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every loan has a written plan for the break, with any fixed-payment lender's agreement in writing before income drops."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark each loan as income-linked or fixed payment"
                - "Estimate your monthly income during the break"
                - "Ask each fixed-payment lender in writing about a reduced payment or pause"
                - "Check that payments restart correctly when your income returns"
            - name: Hardship deferment or forbearance request
              description: |-
                ## Purpose
                Job loss, illness or a sharp drop in income can make a fixed loan payment impossible, and a missed payment damages your record far more than an agreed pause. Applying early for deferment, forbearance or a temporary reduction, and understanding what interest does meanwhile, protects both your credit file and your budget.

                ## Milestones
                1. Every hardship option the lender offers listed with its interest treatment.
                2. The option that fits your situation chosen.
                3. The application submitted before the next payment is missed.
                4. Written confirmation of the agreement and its end date filed.

                ## Notes
                Pauses usually let interest keep building, and it may be capitalised at the end. Use the shortest pause that solves the problem. Free debt advice services can help if several debts are under pressure at once.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written hardship agreement with its end date is in place before any payment is missed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Call the lender to list the hardship options available"
                - "Ask how interest is treated under each option"
                - "Apply for the option that fits before the next payment date"
                - "Put the agreement's end date in your calendar"
            - name: Getting back on track after a loan default
              description: |-
                ## Purpose
                A defaulted student loan can lead to collection charges, deductions from wages or seized tax refunds in some countries, yet most government schemes offer a structured route back to good standing. Contacting the servicer, finding out the exact status and choosing a rehabilitation or repayment arrangement stops the situation getting more expensive.

                ## Milestones
                1. The loan's exact status, arrears and any collection charges confirmed in writing.
                2. The options for returning to good standing listed.
                3. An arrangement chosen and the first payment made.
                4. The loan confirmed as back in good standing.

                ## Notes
                Free debt advice services can sit beside you through this. Be wary of any firm charging to arrange what the servicer offers directly.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The servicer has confirmed in writing that the loan is back in good standing or in an agreed rehabilitation arrangement."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the servicer for the loan's current status and arrears in writing"
                - "Request the list of options for returning to good standing"
                - "Make the first payment under the arrangement you choose"
                - "Ask for written confirmation once the loan is in good standing"
            - name: Repaying a student loan later in life
              description: |-
                ## Purpose
                Mature students and people who returned to study in their forties or fifties face a different calculation: the write-off date may fall near retirement, and some schemes count pension income or cancel loans at a set age. Checking how retirement income and the write-off date interact shows whether paying more now makes any sense.

                ## Milestones
                1. The write-off date set against your planned retirement date.
                2. Whether pension income counts towards repayments in your scheme confirmed.
                3. Expected repayments up to retirement projected.
                4. A decision recorded on paying the minimum or more.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note compares the write-off date with your retirement date and records a decision on how much to repay."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare your write-off date with your planned retirement date"
                - "Check whether your scheme takes repayments from pension income"
                - "Project your repayments from now until retirement"
                - "Record your decision to pay the minimum or more"
            - name: Parent borrowers repaying a child's education loan
              description: |-
                ## Purpose
                Parents who borrowed in their own name to fund a child's degree carry the debt themselves, often with fewer repayment options than the student's own loan, and sometimes close to retirement. Setting out the terms, the payment and who in the family contributes makes the arrangement clear and stops it becoming a source of tension.

                ## Milestones
                1. The parent loan's balance, rate and repayment options recorded.
                2. Any income-driven or forgiveness routes open to parent borrowers checked.
                3. A written agreement on whether the graduate contributes, and how much.
                4. The arrangement reviewed together once a year.

                ## Notes
                Write down whether any money the graduate passes back is a gift or a repayment, so nobody remembers it differently later.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The parent loan's terms are recorded and a written family agreement on who pays what has been reviewed within the last year."
                cadence: cyclic
              tasks:
                - "Record the parent loan's balance, rate and repayment options"
                - "Check which repayment plans are open to parent borrowers"
                - "Agree in writing whether the graduate will contribute and how much"
                - "Review the family loan arrangement together @recurring(yearly)"
            - name: Couples planning around two sets of student loans
              description: |-
                ## Purpose
                When both partners have student loans, perhaps on different plans or in different countries, the questions multiply: whose loan to overpay, how joint tax filing affects income-driven payments, and how deductions shape a shared budget. One shared page and a yearly conversation keep both people working from the same facts.

                ## Milestones
                1. Both partners' loans listed on one shared page.
                2. Any effect of marriage or joint tax filing on income-driven payments checked.
                3. An agreement on whose loan, if either, gets extra payments.
                4. The shared page updated together once a year.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A shared page lists both partners' loans and a recorded agreement on extra payments, updated within the last year."
                cadence: cyclic
              tasks:
                - "Put both partners' loans on one shared page"
                - "Check whether filing taxes jointly changes either income-driven payment"
                - "Agree whose loan, if either, gets extra payments"
                - "Update the shared loan page together @recurring(yearly)"
            - name: Public service forgiveness payment tracker
              description: |-
                ## Purpose
                Forgiveness schemes for people in public service or non-profit jobs require a set number of qualifying payments on the right plan while working for an eligible employer, and errors in the count are common. Tracking each payment and getting employment certified every year builds the evidence needed to claim forgiveness when the count is complete.

                ## Milestones
                1. Your employer's eligibility for the scheme confirmed.
                2. Your loans and plan confirmed as qualifying.
                3. Employment certified and the official qualifying payment count obtained.
                4. Your own count kept and compared with the official one each year.

                ## Notes
                Keep copies of every certification form. If the official count looks low, ask for a recount promptly rather than waiting until the end.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Employment has been certified each year and your own qualifying payment count matches the official count."
                cadence: cyclic
              tasks:
                - "Check that your employer is eligible for the forgiveness scheme"
                - "Confirm your loans and plan count towards forgiveness"
                - "Submit the employment certification form @recurring(yearly)"
                - "Compare your own payment count with the official count"
            - name: Asking your employer for loan repayment help
              description: |-
                ## Purpose
                Some employers contribute to staff student loan repayments as a benefit, and others will consider it in a pay negotiation, especially in sectors that struggle to recruit graduates. Finding out whether a scheme exists, how it is taxed and how to ask turns it into a concrete part of your next pay discussion.

                ## Milestones
                1. Whether your employer offers loan repayment help confirmed with HR.
                2. The tax treatment of employer contributions checked for your country.
                3. A short case prepared for the next pay or benefits discussion.
                4. The employer's answer recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "HR has confirmed whether loan repayment help is available, and the request and answer are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search the staff benefits handbook for student loan help"
                - "Check how employer loan contributions are taxed where you live"
                - "Ask the agent to draft a short request for your next pay review"
                - "Record the employer's answer and any amount agreed"
            - name: Formal complaint about a loan account error
              description: |-
                ## Purpose
                Misapplied payments, a wrong plan, lost income evidence or an incorrect balance are not always fixed by a phone call. A written complaint with evidence and dates, followed by escalation to the independent complaints body if needed, is how stubborn errors get corrected and sometimes compensated.

                ## Milestones
                1. The error described in one paragraph with dates and amounts.
                2. Supporting evidence gathered from the loan folder and contact log.
                3. A formal complaint sent through the servicer's complaints process.
                4. A final response received, or the complaint escalated to the independent body once the deadline passes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A formal complaint with evidence has received a final response or been escalated to the independent complaints body."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write one paragraph describing the error with dates and amounts"
                - "Attach payslips, statements and contact log entries as evidence"
                - "Send the complaint through the servicer's formal complaints route"
                - "Escalate to the independent complaints body if the deadline passes"
            - name: What happens to student loans on death
              description: |-
                ## Purpose
                Most government student loans are cancelled on death, while private loans may be claimed from the estate or from a co-signer. Writing down how each of your loans is treated, and where the paperwork is, saves your family from paying a debt that should have been cancelled or missing one that will not be.

                ## Milestones
                1. The rule on death confirmed for each loan from its terms.
                2. Any co-signer or estate liability noted.
                3. A short note for your executor listing each loan, its lender and what happens to it.
                4. The note stored with your will or other estate papers.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A note for your executor lists each loan, its lender and what happens to it on death, stored with your estate papers."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check each loan's terms for what happens on death"
                - "Note any loan a co-signer or the estate would still owe"
                - "Write a short note for your executor listing each loan"
                - "Store the note with your will or estate papers"
---

# Student Loan Repayment

Student loans are unusual debts: for many graduates the plan rules, the repayment threshold and the write-off date matter more than the balance. This area is for students about to graduate and for anyone already repaying, and it runs from the foundations of knowing every loan and its rules, through the monthly and yearly checks that catch payroll errors, to the knowledge and decisions behind overpaying, refinancing and changing plan, then the moves, career breaks, closures and specialist cases that need careful handling.

The rhythm is a monthly payslip or payment check, a quarterly balance log, and a yearly round of statement matching, plan review, recertification and projection updates. The Metrics log, Savings goal and Purchase decision templates pair with the balance log, the self-employed set-aside and the refinancing comparison. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
