---
id: personal-finance.first-paycheck-money-setup
name: First Paycheck Money Setup
description: "Your first wage set up properly: payroll and tax details right, the first payslip checked, pension and benefit choices made in time, a starter spending plan and savings habits from the very first payday."
category: personal
version: 1.0.0
tags: [personal-finance, first-paycheck-money-setup, everyone, student, first-job, payslip, tax-code, workplace-pension]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - operational-checklist
    - metrics-log
    - purchase-decision
    - savings-goal
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: First Paycheck Money Setup
          description: "Setting up accounts, payslips, tax codes, a spending plan and savings habits when starting a first full-time job."
          projects:
            - name: Cash plan for the gap before your first payday
              description: |-
                ## Purpose
                Starting a job usually means four to six weeks of commuting, lunches and new clothes before any wage arrives, and the first pay can be smaller than expected if you started mid-month or are paid in arrears. Writing down the money you have, the money going out and the exact date of the first payment stops that gap being bridged with an expensive overdraft or a payday loan.

                ## Milestones
                1. Your first pay date confirmed with payroll or HR, along with whether it covers a full or part month.
                2. Every cost between now and that date listed: travel, food, clothes, rent and any deposit.
                3. Cash on hand and in accounts totalled against those costs, with the shortfall or surplus stated.
                4. Any shortfall covered by a named source, such as an interest-free arrangement, a family loan with written terms or a salary advance from the employer.

                ## Notes
                Ask whether the employer offers a travel season ticket loan or an advance on the first salary before borrowing elsewhere. High-cost short-term credit is the most expensive way to cover a few weeks.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated gap plan shows the first pay date, every cost before it and how any shortfall is covered without high-cost credit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask payroll for your exact first pay date and the period it covers"
                - "List every cost you expect before that date, day by day for the first fortnight"
                - "Total your cash and balances against the list and note the gap"
                - "Agree written repayment terms for any family loan before you take it"
            - name: Payroll new starter details handed in
              description: |-
                ## Purpose
                Payroll cannot pay you correctly until it has your bank details, your tax or social security number, and either a leaving document from a previous job or a new starter declaration (in the UK, a P45 or starter checklist). Missing details are the most common reason a first wage is late or taxed on an emergency basis, so get them in during the first week.

                ## Milestones
                1. Account name, bank code and account number given to payroll through an official channel and double checked.
                2. Your tax identification number supplied, or the application for one in progress with a reference.
                3. The new starter declaration or previous employer's leaving document handed in.
                4. Written confirmation from payroll that your record is complete before the first pay run cutoff.

                ## Notes
                Never send bank details in reply to an unexpected email asking you to update them. Payroll diversion scams target new starters; confirm any change request by phone with HR.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Payroll has confirmed in writing that bank details, tax number and starter declaration are on file before the first pay run cutoff."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find out who runs payroll and the cutoff date for this month's pay run"
                - "Enter your bank details through the employer's official HR system"
                - "Hand in your tax number and new starter declaration"
                - "Ask payroll to confirm your record is complete before the cutoff"
            - name: Offer letter and contract money terms summary
              description: |-
                ## Purpose
                Pay details are scattered across the offer letter, the contract and the staff handbook: salary, pay frequency, pay date, overtime rates, probation length, notice period, holiday pay, sick pay and any clawback if you leave early. Pulling them onto one page in the first fortnight means you know what you are owed, and what you might owe back, before anything goes wrong.

                ## Milestones
                1. A one-page summary of salary, pay frequency, pay date, overtime and allowances.
                2. Probation length, notice period and any changes to pay or benefits after probation noted.
                3. Holiday entitlement, sick pay terms and the holiday year start date written down.
                4. Any clauses requiring repayment of relocation, training or sign-on bonuses flagged with their time limits.
                5. Questions about unclear terms sent to HR and their answers filed.

                ## Notes
                Clawback clauses on training courses and relocation are easy to miss and can cost months of savings if you leave within a year or two.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page money terms summary covers pay, probation, notice, holiday, sick pay and any clawback clauses, and open questions have written answers."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather the offer letter, contract and staff handbook in one place"
                - "Copy salary, pay date, overtime and allowance terms onto one page"
                - "Search the contract for repayment, clawback and deduction clauses"
                - "Email HR any money question the documents do not answer"
            - name: Salary account ready for your first wage
              description: |-
                ## Purpose
                Student and youth bank accounts often carry an interest-free overdraft that shrinks after graduation, and some banks expect you to convert to a graduate or standard account once a salary arrives. Choosing where your wage will land, with no monthly fee, a working app and alerts switched on, sets up everything else in this area.

                ## Milestones
                1. The terms of your current student or youth account, including when the overdraft or perks change, written down.
                2. A decision recorded to keep, convert or switch the account that will receive your pay.
                3. The salary account open, with the app, card and online login working.
                4. Low-balance and incoming payment alerts switched on.

                ## Notes
                Do not close an account with an overdrawn balance until a repayment plan is agreed. The aim here is a reliable home for pay, not chasing switching bonuses.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your pay lands in a fee-free account with app access and alerts on, and the decision about any old student account is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up when your student or youth account perks and overdraft change"
                - "Decide whether to keep, convert or switch the account that receives your pay"
                - "Set up the app, card and online login for the salary account"
                - "Turn on alerts for low balances and incoming payments"
            - name: Expected take-home pay worked out before payday
              description: |-
                ## Purpose
                A salary figure on an offer letter can be a quarter to a third higher than what reaches your account once tax, social contributions, pension and student loan deductions come off. Working out the expected net amount per pay period with an official or reputable take-home pay calculator gives the spending plan a real number and lets you spot an error on the first payslip.

                ## Milestones
                1. Annual salary converted to pay per period for your pay frequency, whether weekly, four-weekly or monthly.
                2. Expected income tax, social contributions, pension and student loan deductions estimated for one pay period.
                3. An expected net pay figure written down with the assumptions used.
                4. A note of anything that will make the first pay different, such as a part month or an emergency tax code.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An expected net pay figure per pay period is written down, with each deduction it assumes, before the first payslip arrives."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Convert your annual salary into pay per pay period"
                - "Run your salary through an official or reputable take-home pay calculator"
                - "Write down the expected net pay and each deduction it assumed"
                - "Note anything that will make the first pay smaller or larger than usual"
            - name: Tax number and tax code confirmed for your first job
              description: |-
                ## Purpose
                If the tax authority does not have enough information when you start, payroll uses a temporary or emergency code that can take too much tax for months. Checking your tax number, your code and your tax-free allowance in the first month, through the tax authority's online account or helpline, catches the mistake while it is still small.

                ## Milestones
                1. Your tax identification number located and stored safely.
                2. An online account with the tax authority set up, where your country offers one.
                3. The tax code your employer is using found on your payslip or the tax account.
                4. Any emergency, temporary or unexplained code queried with the tax authority, with a reference number.

                ## Notes
                Tax codes and their letters differ by country. In the UK, for example, a code ending in W1 or M1 usually means an emergency basis.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Your tax code has been checked against the tax authority's record within the first two pay periods, and any query has a logged reference number."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your tax identification number and store it in your money folder"
                - "Set up an online account with the tax authority if one is available"
                - "Compare the code on your payslip with the one the tax authority holds"
                - "Call the tax authority about any emergency or unexplained code and log the reference"
            - name: Workplace pension enrolment choices
              description: |-
                ## Purpose
                In many countries a new employee is enrolled into a workplace pension automatically after a short period, with the employer adding money on top. Opting out usually means giving up that employer contribution, which is part of your pay, so the choice deserves an hour of reading rather than a click in a welcome email.

                ## Milestones
                1. The scheme name, provider and enrolment date confirmed.
                2. Your contribution and the employer's contribution written down as percentages and as amounts per pay.
                3. Whether the employer matches extra contributions, and up to what level, found in the scheme rules.
                4. A decision recorded on staying in, and at what rate, with the reasons.

                ## Notes
                This is about understanding the scheme, not choosing investments. For questions about funds, use the provider's guidance service or a regulated adviser.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note records the scheme, both contribution rates, any match rule and your decision on membership and rate."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the pension scheme name, provider and enrolment date in your welcome pack"
                - "Write down your and your employer's contribution rates"
                - "Check the scheme rules for any employer match on extra contributions"
                - "Record your decision on staying in and the contribution rate"
            - name: New starter benefits enrolment before the window closes
              description: |-
                ## Purpose
                Health cover, life cover, cycle to work schemes, travel loans, gym discounts and employee share plans often have a 30-day enrolment window for new starters, after which you wait a year. Listing every benefit, its cost to you and its deadline in the first week stops free value slipping away unnoticed.

                ## Milestones
                1. Every benefit on offer listed with what it costs you, if anything, and its enrolment deadline.
                2. Benefits that are taxable or paid for by salary sacrifice marked.
                3. A yes or no made on each one before its window closes.
                4. Enrolment confirmations saved in your money documents folder.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every new starter benefit has a recorded yes or no decision made before its enrolment deadline, with confirmations saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the benefits guide from the HR portal or ask HR for it"
                - "Ask the agent to turn the benefits guide into a table of costs and deadlines"
                - "Mark which benefits are taxable or come through salary sacrifice"
                - "Enrol in the benefits you chose and save each confirmation"
            - name: First payslip checked line by line
              description: |-
                ## Purpose
                Payroll mistakes on a first payslip are common: the wrong tax code, a missed allowance, a pension deduction that started early, or a student loan plan that does not match yours. Checking every line against your contract and expected take-home figure within a day or two of payday means an error is fixed in the next pay run rather than discovered at year end.

                ## Milestones
                1. Gross pay matched to your salary for the period, including any part month.
                2. Tax code, tax and social contribution deductions compared with your expected figures.
                3. Pension and student loan deductions checked against the right rate and plan.
                4. Net pay matched to the amount that reached your bank account.
                5. Any difference raised with payroll in writing and its outcome recorded.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every line of the first payslip has been checked, net pay matches the bank deposit and any discrepancy has a written answer from payroll."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Download your first payslip as soon as it is issued"
                - "Compare gross pay with your salary for the days you worked"
                - "Check the tax code, pension and student loan lines against your notes"
                - "Email payroll about any line that does not match, quoting the figures"
            - name: Starter spending plan built on real take-home pay
              description: |-
                ## Purpose
                A first salary feels large after student or part-time income, and the first few months set habits that are hard to undo. A simple plan built on the actual net pay, with fixed costs, a savings amount taken first and a weekly figure for everything else, is enough for now; more detailed budgeting methods can come later.

                ## Milestones
                1. Net monthly pay taken from the first payslip, not the salary figure.
                2. Fixed costs listed: rent or board, travel, phone, subscriptions and any debt repayments.
                3. A savings amount set and treated as a fixed cost.
                4. A weekly spending figure for food, social life and everything else worked out from what remains.
                5. The plan tested against one full month of real spending and adjusted.

                ## Notes
                Start from the **Monthly budget and bills** template.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written spending plan based on real net pay shows fixed costs, savings and a weekly spending figure, and has been checked against one month of actual spending."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down your net monthly pay from the first payslip"
                - "List every fixed cost that leaves your account each month"
                - "Choose a savings amount and add it to the fixed costs"
                - "Divide what is left by the weeks in the month to get a weekly spending figure"
            - name: Money documents folder for your working life
              description: |-
                ## Purpose
                Contracts, payslips, pension letters, tax notices and benefit confirmations will be needed years from now, for a mortgage application, a tax refund or tracing a lost pension. Setting up one secure folder, digital or paper, in the first month costs an hour and saves a scramble later.

                ## Milestones
                1. One secure folder created with sections for employment, pay, tax, pension and bank.
                2. The contract, offer letter and first payslip filed in it.
                3. A naming rule set for files, such as year, month and document type.
                4. A backup copy of the folder set up somewhere separate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A backed-up money folder holds the contract, offer letter and every payslip so far, filed under a consistent naming rule."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create one folder with sections for employment, pay, tax, pension and bank"
                - "File your contract, offer letter and first payslip using a date-first name"
                - "Set up an automatic backup of the folder"
                - "Tidy the money folder and remove duplicate files @recurring(yearly)"
            - name: Payday money hour
              description: |-
                ## Purpose
                On the day pay lands, an hour spent checking the payslip, moving savings, paying the fixed bills and setting the week's spending money keeps the plan real. Doing it on payday, before the money starts to feel spare, is what separates a first year that builds savings from one that drifts.

                ## Milestones
                1. A short payday checklist written and saved.
                2. The payday hour held in each of the first three pay periods.
                3. Savings and bills transfers made on or within a day of payday each time.
                4. Anything odd on the payslip or account noted for follow-up.

                ## Notes
                Start from the **Operational checklist** template. If you are paid weekly or four-weekly, move the repeat to match your pay date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The payday checklist has been run within a day of payday for three consecutive pay periods."
                cadence: rolling
              tasks:
                - "Write a five-step payday checklist"
                - "Block an hour in your calendar on your next payday"
                - "Run the payday checklist and move savings and bill money @recurring(monthly:26)"
                - "Note anything odd on the payslip for follow-up"
            - name: Automatic savings transfer from every pay
              description: |-
                ## Purpose
                Saving what is left at the end of the month rarely works on a first salary, because there is rarely anything left. A standing order set for the day after payday moves a fixed amount first, so saving happens before any spending decisions are made.

                ## Milestones
                1. A savings amount chosen from the starter spending plan.
                2. A standing order set for the day after payday into a separate savings account.
                3. The first three transfers confirmed as arrived.
                4. A rule written for raising the amount when pay rises.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A standing order has moved a fixed amount into savings the day after payday for three months in a row."
                cadence: rolling
              tasks:
                - "Set up a standing order for the day after payday into savings"
                - "Confirm the savings transfer arrived and the balance grew @recurring(monthly:27)"
                - "Raise the standing order by part of any pay rise @recurring(yearly)"
                - "Write down the rule for when you may pause the transfer"
            - name: Weekly spending check-in for the first year
              description: |-
                ## Purpose
                Ten minutes a week comparing what you have spent with the weekly figure catches drift in social spending, takeaways and taxis before it becomes an overdraft. Weekly suits a new earner better than monthly, because the first year brings a stream of new costs nobody thought to plan for.

                ## Milestones
                1. A fixed ten-minute slot chosen each week.
                2. Each week's spending compared with the weekly figure from the spending plan.
                3. Weeks over the figure noted with the main cause.
                4. The weekly figure adjusted after the first two months if it was unrealistic.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly check-ins have been done for at least ten of the first twelve weeks, each with a note of the week's total against the figure."
                cadence: rolling
              tasks:
                - "Choose a regular ten-minute slot for the weekly check"
                - "Compare this week's spending with your weekly figure @recurring(weekly:sun)"
                - "Write one line on what drove any overspend"
                - "Adjust the weekly figure after eight weeks if it is unrealistic"
            - name: Payslip and pay record log
              description: |-
                ## Purpose
                Keeping each payslip and a one-line record of gross pay, tax, pension, student loan and net pay builds a history that proves income for a tenancy or mortgage, shows when a deduction changed and lets you check the year-end tax summary. Many employers remove access to old payslips when you leave, so saving them as you go matters.

                ## Milestones
                1. A log with columns for pay date, gross, tax, social contributions, pension, student loan and net.
                2. Every payslip since starting saved as a file and entered in the log.
                3. The year-end tax summary saved beside the year's payslips.
                4. Any month where a deduction changed explained in a note.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The pay log holds every payslip since starting, with the saved files and the year-end tax summary alongside."
                cadence: rolling
              tasks:
                - "Create a pay log with a column for each payslip line"
                - "Save this month's payslip and add its figures to the log @recurring(monthly:29)"
                - "Save the year-end tax summary from your employer @recurring(yearly)"
                - "Write a note beside any month where a deduction changed"
            - name: Work expense claims and reimbursement routine
              description: |-
                ## Purpose
                Many first jobs involve paying for travel, hotels or client meals and claiming them back, and unclaimed or late receipts quietly turn into a pay cut. A weekly claim habit, with receipts captured on the day, keeps your own money from funding the employer.

                ## Milestones
                1. The expense policy read, including claim deadlines, limits and what needs a receipt.
                2. One place set up for receipts, digital or physical.
                3. Claims submitted weekly with receipts attached.
                4. Reimbursements matched to claims each month, with any missing ones chased.

                ## Notes
                If you put work costs on a personal card, pay the card from the reimbursement rather than your spending money, and check the statement date against the claim cycle.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No expense is older than its claim deadline, and every claim from the last three months is matched to a reimbursement."
                cadence: rolling
              tasks:
                - "Read the expense policy and note claim deadlines and limits"
                - "Photograph receipts on the day and file them in one folder"
                - "Submit the week's expense claim with receipts attached @recurring(weekly:fri)"
                - "Match reimbursements to claims and chase any missing @recurring(monthly:8)"
            - name: Month-end leftover and overspend review
              description: |-
                ## Purpose
                At the end of each pay month there is either money left or a gap that was covered somehow. Deciding what happens to leftovers, and naming what caused a gap, turns the starter spending plan from a guess into something that fits how you actually live.

                ## Milestones
                1. The balance left in the spending account recorded on the day before payday.
                2. A rule set for leftovers, such as half to savings and half rolled over.
                3. Any overspend traced to its main cause.
                4. One change made to next month's plan based on the review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, the leftover balance or overspend has been recorded, the leftover rule applied and one plan change made."
                cadence: rolling
              tasks:
                - "Write down the leftover rule you will follow"
                - "Record the balance left the day before payday and apply the rule @recurring(monthly:25)"
                - "Trace any overspend to its biggest cause"
                - "Make one change to next month's plan"
            - name: Quarterly first-year money review
              description: |-
                ## Purpose
                Every three months in the first year, step back from the weekly numbers: is savings growing, is any debt shrinking, have new regular costs crept in, and is the spending plan still true? Four short reviews across the year make the anniversary check quick.

                ## Milestones
                1. Savings balance, debt balances and the overdraft position recorded each quarter.
                2. New regular costs since the last review listed.
                3. The spending plan updated for changes in pay or costs.
                4. One goal set for the next quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Four quarterly reviews in the first year each record balances, new regular costs and a goal for the next quarter."
                cadence: cyclic
              tasks:
                - "Record your savings, debts and overdraft balances in one place"
                - "Hold a quarterly money review and set a goal for the next quarter @recurring(quarterly)"
                - "List regular costs added since the last review"
                - "Update the spending plan for any change in pay or costs"
            - name: Annual pay, tax and benefits check-up
              description: |-
                ## Purpose
                Once a year, around your start date anniversary or the tax year end, check the things that change quietly: your tax code, pension contributions, benefits that renew, holiday carried over and whether pay has kept up with your role. A fixed annual date makes these checks routine instead of reactive.

                ## Milestones
                1. The year's pay log compared with the year-end tax summary.
                2. Tax code and pension rate confirmed for the coming year.
                3. Benefits up for renewal decided before their windows close.
                4. The pension annual statement read and filed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each year the pay log, tax summary, tax code, pension rate and benefit choices are checked and the results noted in one record."
                cadence: cyclic
              tasks:
                - "Choose the date for your annual pay check-up and put it in your calendar"
                - "Compare the year's pay log with the year-end tax summary @recurring(yearly)"
                - "Re-enrol in or change benefits during the annual window @recurring(yearly)"
                - "Read the pension annual statement and file it"
            - name: First credit card paid in full by direct debit
              description: |-
                ## Purpose
                A credit card used for planned spending and cleared in full each month can build a credit history and add purchase protection, but a missed payment or a carried balance quickly costs more than any benefit. Deciding whether you want one yet, and setting a full-balance direct debit on day one if you do, is what makes a first card safe.

                ## Milestones
                1. A decision recorded on whether you want a credit card yet, with the reasons.
                2. If yes, a direct debit set to pay the full statement balance.
                3. A personal spending limit for the card set below the bank's limit.
                4. Each monthly statement checked and fully cleared.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every statement since the card was opened has been paid in full by direct debit, with no interest or late fees charged."
                cadence: rolling
              tasks:
                - "Write down why you want a credit card and what you will use it for"
                - "Set a direct debit to pay the full statement balance"
                - "Choose a personal card limit lower than the limit the bank offers"
                - "Check the card statement and confirm it was paid in full @recurring(monthly:18)"
            - name: Reading a payslip from gross pay to net pay
              description: |-
                ## Purpose
                Payslips use abbreviations and codes that are rarely explained: tax period numbers, year-to-date columns, cumulative tax and deduction codes. Learning to read every box once means you can check any future payslip in five minutes and explain it to a lender, landlord or tax office.

                ## Milestones
                1. Every box on your payslip labelled in your own words.
                2. The difference between this-period and year-to-date figures understood and noted.
                3. Gross pay, taxable pay and net pay traced from one to the next.
                4. How your pay frequency works and how pay dates move around weekends and public holidays noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain every box on your payslip in writing, including the year-to-date columns and how net pay is reached."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Print or screenshot a payslip and label every box"
                - "Read an official payslip explainer for your country"
                - "Trace how gross pay becomes taxable pay and then net pay"
                - "Ask payroll what any remaining unknown code means"
            - name: How income tax and social contributions are worked out
              description: |-
                ## Purpose
                Most first jobbers know they pay tax but not how much, why it changes when pay goes up, or what social contributions (in the UK, national insurance) pay for. A short study of tax-free allowances, bands and contribution thresholds explains your payslip and helps you judge what a pay rise or extra shift is really worth.

                ## Milestones
                1. Your country's tax-free allowance and tax bands for this year written down.
                2. Social contribution thresholds and rates noted.
                3. Your own annual tax and contributions worked out by hand and compared with payroll.
                4. The rate that applies to your next unit of pay understood.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand calculation of your annual tax and social contributions is close to payroll's figures, with any gap explained."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find this year's tax bands and allowances on the tax authority's site"
                - "Write down the thresholds and rates for social contributions"
                - "Work out your annual tax and contributions by hand"
                - "Compare your sum with the year-to-date figures on your payslip"
            - name: What your tax code means and when it changes
              description: |-
                ## Purpose
                Tax codes tell payroll how much income to pay tax-free and whether to take earlier pay in the year into account. Knowing how to read yours, and the events that change it (a second job, a company benefit, an underpayment from last year), means you notice a wrong code the day it appears.

                ## Milestones
                1. The parts of your tax code explained in a short note.
                2. The events that would change your code listed.
                3. Where to see your code and coding notices online found.
                4. What to do when a code looks wrong written as three steps.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note explains your current tax code, the events that would change it and the steps to take if it looks wrong."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up how tax codes are built in your country"
                - "Write a short note explaining each part of your code"
                - "List the events that would trigger a new code"
                - "Write three steps to follow when a code looks wrong"
            - name: How a workplace pension builds up over a career
              description: |-
                ## Purpose
                At twenty-two, retirement feels too far off to matter, yet contributions made in the first decade have the longest time to grow. Understanding contributions, tax relief, the default fund, fees and what happens when you change jobs makes the pension feel like part of your pay rather than a deduction.

                ## Milestones
                1. How employee, employer and tax relief contributions combine noted.
                2. The default fund and its annual charge found in the scheme documents.
                3. The provider's projection tool used once to see what current contributions may build to.
                4. What happens to the pot when you leave the employer written down.

                ## Notes
                Projections are illustrations, not promises. Questions about which funds to choose belong with the provider's guidance service or a regulated adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note covers how contributions and tax relief combine, the default fund and its charge, one projection and what happens on leaving."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Log in to the pension provider's website or app"
                - "Find the default fund and its annual charge"
                - "Run the provider's projection tool with your current contributions"
                - "Write down what happens to the pot if you change jobs"
            - name: Student loan deductions on your payslip
              description: |-
                ## Purpose
                For graduates, the first full-time salary is often when student loan repayments start through payroll, and a wrong plan or a missing deduction is common in year one. Knowing which plan you are on, its repayment threshold and how the payroll deduction is worked out lets you check it each pay; the question of overpaying belongs elsewhere.

                ## Milestones
                1. Your loan plan type and repayment threshold confirmed from the loan servicer.
                2. The payroll deduction worked out by hand for one pay period.
                3. That figure compared with the deduction on your payslip.
                4. Any mismatch raised with payroll or the loan servicer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The student loan deduction on your payslip has been checked by hand against your plan's threshold and rate, and any mismatch raised."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Log in to your student loan account and note your plan type"
                - "Look up the repayment threshold and rate for your plan"
                - "Work out the expected deduction for one pay period"
                - "Raise any mismatch with payroll and the loan servicer"
            - name: Credit, interest and APR for a new earner
              description: |-
                ## Purpose
                Offers of credit cards, car finance, phone contracts and buy now pay later arrive soon after a first salary, all marketed by their monthly cost. Learning how APR, interest-free periods, minimum payments and representative rates work lets you compare the real cost before signing anything.

                ## Milestones
                1. APR, representative APR and interest-free periods defined in your own words.
                2. The total cost of a sample purchase worked out at minimum payments.
                3. How credit applications and missed payments affect your credit file noted.
                4. A personal rule written for when you will and will not borrow.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note defines the APR terms, shows one worked total cost example and states your personal borrowing rule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read an official consumer guide to APR and representative rates"
                - "Work out the total cost of a sample purchase paid at the minimum"
                - "Note how applications and missed payments show on a credit file"
                - "Write a personal rule for when you will borrow"
            - name: Payroll errors and how to get them fixed
              description: |-
                ## Purpose
                Underpaid overtime, missed allowances, wrong holiday pay and late starter forms are routine payroll errors, and new starters often hesitate to raise them. Knowing who to contact, what evidence to send and what deadlines apply turns it into a calm email rather than an awkward conversation.

                ## Milestones
                1. The payroll contact and the process for raising queries found.
                2. The evidence a query needs listed: payslip, contract terms and timesheets.
                3. A short template email for raising a pay query saved.
                4. Where to go if payroll does not resolve it, such as HR or a free employment advice service, noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved pay query template, the payroll contact and an escalation route are in your money folder."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find out how payroll queries are raised at your employer"
                - "List the evidence a pay query needs"
                - "Save a short template email for raising a pay query"
                - "Note the employment advice service to contact if a query stalls"
            - name: Commute cost options compared
              description: |-
                ## Purpose
                Travel to work is often the second largest cost of a first job after housing. Comparing pay-as-you-go fares, season tickets, an employer travel loan, a cycle scheme and car sharing against the days you are actually in the workplace can save a noticeable slice of pay each year.

                ## Milestones
                1. Your real number of commuting days per month confirmed with your manager.
                2. The monthly cost of at least three commute options worked out.
                3. Employer schemes such as travel loans or cycle to work checked.
                4. A choice made and the cheapest suitable option in use.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three or more commute options are costed for your real workplace days, and the cheapest suitable one is in use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm how many days a month you will be in the workplace"
                - "Price at least three ways to commute for that pattern"
                - "Ask HR about travel loans and cycle to work schemes"
                - "Switch to the option that costs least for your pattern"
            - name: Rent ceiling for your first flat
              description: |-
                ## Purpose
                Landlords and letting agents often check that rent is below a set fraction of gross pay, and a flat that just passes that test can still leave too little for everything else. Setting your own ceiling from net pay, bills, travel and savings before you view anything stops a lovely flat from becoming a year of strain.

                ## Milestones
                1. Net monthly pay, travel and other fixed costs written down.
                2. The maximum rent including bills that leaves your savings amount untouched worked out.
                3. The affordability test agents apply to your salary checked.
                4. A ceiling recorded and shared with anyone you are house hunting with.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rent ceiling based on net pay, costs and savings exists before any viewing is booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down net pay and your costs other than housing"
                - "Work out the most you can pay in rent and bills while still saving"
                - "Check the affordability test agents use for your salary"
                - "Share your rent ceiling with anyone you are house hunting with"
            - name: Pension contribution rate above the minimum
              description: |-
                ## Purpose
                Once the starter spending plan has run for a few months, it is worth asking whether to pay more than the minimum into the workplace pension, especially if the employer matches extra contributions. A small increase in the first year is often painless because you never got used to spending that money.

                ## Milestones
                1. The take-home cost of raising contributions by one or two points worked out after tax relief.
                2. Any employer match on extra contributions confirmed.
                3. A rate chosen and the change made through payroll or the pension portal.
                4. A date set to review the rate again.

                ## Notes
                Weigh this against building an easy-access buffer first. A free government pension guidance service, where your country has one, can explain options without selling anything.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pension contribution rate has been chosen with its take-home cost known, and the change shows on a payslip."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out the take-home cost of raising contributions by one point"
                - "Check whether your employer matches any extra contributions"
                - "Change your contribution rate through payroll or the pension portal"
                - "Review your pension contribution rate after each pay rise @recurring(yearly)"
            - name: Student overdraft clear-down before charges start
              description: |-
                ## Purpose
                Graduates often leave university with an interest-free student overdraft that turns into a charged one over one to three years. Planning to clear it in steps while the zero rate lasts costs far less than finding out when the first interest charge appears.

                ## Milestones
                1. The current overdraft balance and the dates the free limit reduces written down.
                2. A monthly repayment amount worked out to clear it before charges start.
                3. Any other small debts, such as store cards or family loans, listed in repayment order.
                4. The overdraft at zero, or on track at each checkpoint.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The student overdraft is cleared, or on a written monthly plan that reaches zero before the first interest charge."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the dates your graduate overdraft limit reduces"
                - "Work out a monthly payment that clears it before charges start"
                - "List other small debts in the order you will repay them"
                - "Check the overdraft balance against the clear-down plan @recurring(monthly:15)"
            - name: First savings pots for buffer, goals and fun
              description: |-
                ## Purpose
                Putting all savings in one account makes it hard to tell whether you are building a safety buffer or saving for a holiday. Splitting first savings into three named pots, a starter buffer, one or two goals and guilt-free fun money, gives every amount saved a reason and makes it harder to raid.

                ## Milestones
                1. Three pots named with a target for each.
                2. The payday savings transfer split across the pots.
                3. A starter buffer target reached, such as one month of fixed costs.
                4. A rule written for when each pot may be used.

                ## Notes
                Start from the **Savings goal** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three named savings pots with targets are funded from each pay, and the starter buffer has reached its target."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Name three savings pots and give each a target"
                - "Split the payday transfer across the pots"
                - "Write the rule for when each pot may be spent"
                - "Tell one person your first savings goal and its date"
            - name: Work clothes and kit budget for the first month
              description: |-
                ## Purpose
                New shoes, office clothes, uniform items, tools, a laptop bag or safety boots can all be needed for a first job, and buying everything in week one strains the gap before payday. Listing what the job truly needs, what the employer provides and what can wait spreads the cost sensibly.

                ## Milestones
                1. The dress code and kit requirements confirmed with your manager or the handbook.
                2. Items the employer provides or reimburses identified.
                3. A list of must-haves for week one and nice-to-haves for later, with a budget.
                4. Must-haves bought within budget, with the rest timed after the first or second payday.
              priority: low
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Work clothes and kit for week one were bought within a set budget, with other items scheduled after payday."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your manager what the dress code and kit needs really are"
                - "Check which items the employer provides or reimburses"
                - "Split your list into week one needs and later wants"
                - "Buy only the week one items before the first payday"
            - name: Lifestyle upgrades queue for the first year
              description: |-
                ## Purpose
                Every new salary invites a run of upgrades at once: a new phone, a car, a gym, a better flat, more meals out. Putting each wish on a queue with its cost and waiting thirty days before buying means upgrades happen one at a time, inside the plan, and the ones you stop caring about drop off.

                ## Milestones
                1. A written queue of wanted upgrades with the purchase cost and monthly running cost of each.
                2. A thirty-day wait applied before any upgrade over a set amount.
                3. No more than one new regular cost added per month.
                4. Upgrades dropped from the queue recorded with the money not spent.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated upgrades queue exists, and no more than one new regular cost has been added in any month of the first year."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Start a list of upgrades you want, with cost and running cost"
                - "Set the amount above which the thirty-day wait applies"
                - "Review the upgrades queue and pick at most one @recurring(monthly:12)"
                - "Note upgrades you dropped and what they would have cost"
            - name: End of probation money changes
              description: |-
                ## Purpose
                Passing probation can bring a pay step, access to bonus schemes, enhanced sick pay, a longer notice period or benefits that were locked until then. Preparing for that date, and checking the first payslip after it, makes sure each change actually happens.

                ## Milestones
                1. Changes that apply after probation listed from the contract and handbook.
                2. The probation review held and its outcome confirmed in writing.
                3. The first payslip after probation checked for the expected changes.
                4. Benefits that open after probation enrolled in or declined.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Probation is confirmed in writing and the first payslip afterwards reflects every listed change."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every pay or benefit change that applies after probation"
                - "Ask your manager for the probation review date"
                - "Get written confirmation of the review outcome"
                - "Check the next payslip for each expected change"
            - name: Six-month first job money check
              description: |-
                ## Purpose
                Half a year in, you have enough payslips and statements to see the true picture: whether the spending plan holds, how much was saved, whether debts shrank and what new costs arrived. That is the right moment to reset targets before habits harden.

                ## Milestones
                1. Six months of net pay, spending, saving and debt changes totalled.
                2. Savings rate as a share of net pay worked out.
                3. The spending plan and savings amount reset for the next six months.
                4. One money habit that worked and one to change written down.
              priority: medium
              deadlineOffsetDays: 190
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written six-month summary shows totals, a savings rate, reset targets and one habit to keep and one to change."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Total six months of net pay, spending and saving"
                - "Work out your savings rate as a share of net pay"
                - "Reset the spending plan and savings amount for the next six months"
                - "Write down one habit to keep and one to change"
            - name: First pay rise or bonus split before it disappears
              description: |-
                ## Purpose
                Most first pay rises and bonuses vanish into everyday spending within a couple of months. Deciding in advance how the extra net pay will be split, for example part to savings, part to pension and the rest to spending, captures most of it while still letting you enjoy some.

                ## Milestones
                1. The rise or bonus converted to extra net pay after tax and deductions.
                2. A split agreed before the first higher payslip arrives.
                3. Standing orders and the spending plan updated to the new split.
                4. The first payslip with the rise checked for the correct amount.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The extra net pay from the first rise or bonus has a written split, and standing orders were updated before it arrived."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out the extra net pay from the rise or bonus"
                - "Decide the split between saving, pension and spending"
                - "Update standing orders before the higher pay arrives"
                - "Check the first higher payslip shows the right figures"
            - name: First tax year end as an employee
              description: |-
                ## Purpose
                The end of your first tax year as an employee brings a year-end summary of pay and tax (in the UK, a P60), and sometimes a refund because tax was taken on an emergency basis early on. Checking the summary against your pay log and claiming any refund closes the first year properly.

                ## Milestones
                1. The year-end summary of pay and tax received and saved.
                2. Its totals compared with your pay log.
                3. Whether too much or too little tax was paid checked through the tax authority's online account or calculator.
                4. Any refund claimed or underpayment arranged, with references filed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first year-end tax summary is saved, reconciled with the pay log, and any refund or underpayment has a reference number."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask payroll when the year-end tax summary will be issued"
                - "Compare its totals with your own pay log"
                - "Check whether you overpaid or underpaid tax for the year"
                - "Claim any refund and file the reference"
            - name: Leaving your first job without money loose ends
              description: |-
                ## Purpose
                When you move on, pay, holiday, pension and benefits all need closing off: final pay including unused holiday, any clawback deducted, the leaving tax document passed to the next employer and the pension pot recorded. A leaving checklist protects money that is easy to lose in the excitement of a new role.

                ## Milestones
                1. The final pay date and the amount for unused holiday confirmed.
                2. Any repayment clauses checked and their deductions agreed.
                3. The leaving tax document received and passed to the new employer.
                4. Pension provider, scheme reference and pot value recorded in your money folder.
                5. Benefits that end on leaving cancelled or converted.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Final pay and holiday pay are confirmed, the leaving tax document reached the new employer and the old pension is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask HR for the final pay date and unused holiday amount"
                - "Check the contract for any clawback before you hand in notice"
                - "Pass the leaving tax document to your new employer"
                - "Record the pension provider, reference and pot value"
            - name: Graduate scheme starter money plan
              description: |-
                ## Purpose
                Graduates joining a training scheme often face a city move, student loan repayments starting through payroll, a student overdraft winding down and rotations that change location. A plan for the first six months, built around those specific pressures, keeps the excitement of the first salary from turning into a slow overdraft.

                ## Milestones
                1. The scheme's money features listed: relocation help, rotation moves, study support and pay steps.
                2. The student overdraft, loan and any other debts in one table with key dates.
                3. A six-month plan covering rent, travel, savings and debt steps.
                4. Any study or exam funding terms, including repayment if you leave, written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A six-month graduate money plan covers relocation, rotations, the overdraft and loan, and any study repayment terms."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the scheme's relocation, study and pay step terms"
                - "Put your student overdraft and loan details in one table"
                - "Draft a six-month money plan around the scheme's moves"
                - "Ask the agent to check the plan against the scheme terms for gaps"
            - name: Apprentice or school leaver first wage plan
              description: |-
                ## Purpose
                Apprentice and youth wages often come with lower pay rates, college days, travel costs and sometimes board to parents. A plan sized to that wage, with a small savings habit started now, builds routines that matter far more than the amounts involved.

                ## Milestones
                1. The pay rate, hours and college days confirmed and checked against the legal minimum for your age.
                2. A simple weekly plan covering travel, board, phone, food and fun.
                3. A savings habit started, even a small fixed amount.
                4. The dates your rate rises with age or apprenticeship year noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Pay is checked against the legal minimum, a weekly plan is written and a fixed savings transfer has run for at least a month."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check your pay rate against the legal minimum for your age and role"
                - "Write a weekly plan for travel, board, phone, food and fun"
                - "Start a small fixed weekly savings transfer"
                - "Note the dates your apprentice rate is due to rise"
            - name: Placement year or internship pay set-up
              description: |-
                ## Purpose
                Students on a paid placement or summer internship earn a real salary for a fixed period, often in a different city, then return to student funding. Setting up pay, tax and savings with the end date in mind means the placement helps pay for next year rather than just the year itself.

                ## Milestones
                1. Placement pay, dates and any accommodation support confirmed.
                2. The tax code checked, with any overpaid tax reclaimed when the placement ends.
                3. A savings target for the return to study set and funded from each pay.
                4. The effect of placement income on next year's student funding checked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Placement pay is taxed correctly, a final year savings target is funded and the effect on student funding is confirmed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Confirm placement pay, dates and accommodation support"
                - "Check the tax code on your first placement payslip"
                - "Set a savings target for your final year and fund it each pay"
                - "Ask your student funding body how placement pay affects next year"
            - name: Paying board at home with a written agreement
              description: |-
                ## Purpose
                Living with parents or family while starting work is often the fastest way to build savings, but unspoken expectations about board, bills and chores cause friction. Agreeing a monthly amount, what it covers and when it will be reviewed protects both the savings and the relationship.

                ## Milestones
                1. An amount agreed with your household, and what it covers, such as food, bills and internet.
                2. The payment set as a standing order on payday.
                3. A savings target written for the money living at home frees up.
                4. A review date agreed for the amount.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written board agreement states the amount and what it covers, the standing order is running and a review date is set."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your household what they expect for board and what it covers"
                - "Agree an amount and write it down with what it includes"
                - "Set the board payment as a standing order on payday"
                - "Review the board amount with your household @recurring(yearly)"
            - name: Moving out for your first job start-up costs
              description: |-
                ## Purpose
                Moving for a first job means a deposit, advance rent, holding fees, furniture, kitchen basics and setting up utilities, often before the first wage arrives. Costing the move in full, and checking whether the employer offers relocation help, avoids starting the job already in debt.

                ## Milestones
                1. Full move costs listed: deposit, advance rent, fees, transport, furniture and basics.
                2. Relocation support or advances from the employer confirmed in writing.
                3. A funding plan for the total, from savings, family or employer support.
                4. A move date set so the first rent payment falls after a payday where possible.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Move costs are listed in full, any relocation support is confirmed in writing and every cost has a named funding source."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every cost of moving, from deposit to kitchen basics"
                - "Ask HR whether relocation support or a rent advance is available"
                - "Write down how each cost will be paid"
                - "Time the move so the first rent payment follows a payday"
            - name: Hourly, shift or zero-hours first job pay checks
              description: |-
                ## Purpose
                When pay depends on hours, shifts and premiums, errors hide in timesheets: missed overtime, unpaid breaks, wrong night rates or holiday pay worked out on base hours only. Keeping your own record of hours and comparing it with each payslip catches underpayments that otherwise go unnoticed.

                ## Milestones
                1. Your hourly rate, premiums and overtime rules written down.
                2. Your own record of shifts kept for every pay period.
                3. Each payslip compared with your record.
                4. Underpayments raised with evidence and resolved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every payslip for three months has been compared with your own hours record and any shortfall raised with evidence."
                cadence: rolling
              tasks:
                - "Write down your rate, premiums and overtime rules"
                - "Log each shift start, finish and break in a notes app"
                - "Compare hours worked with hours paid on the latest payslip @recurring(weekly:mon)"
                - "Raise any shortfall with your manager and payroll, sending your log"
            - name: First job in a new country bank, tax and payroll set-up
              description: |-
                ## Purpose
                Starting work after moving countries adds hurdles: proving your address to open a bank account, getting a tax or social security number, and avoiding a temporary tax rate while records catch up. Doing these in the right order in the first fortnight gets you paid on time and taxed correctly.

                ## Milestones
                1. The documents each step needs listed: passport, visa, proof of address and employment letter.
                2. A local bank account open, or an interim account the employer accepts.
                3. A tax or social security number applied for, with a reference.
                4. Payroll told your tax status, with any home country obligations noted.
                5. Fees for sending money home compared and a cheaper route chosen.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within the first month a local account receives pay, a tax number is issued or applied for and payroll has your tax status."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the documents the bank, tax office and payroll each need"
                - "Book appointments in the order that unblocks the next step"
                - "Give payroll your tax number or the reference for your application"
                - "Compare fees for sending money home before the first transfer"
            - name: Employee share plans and equity basics for a first job
              description: |-
                ## Purpose
                Some first jobs, especially in technology and larger firms, include share options, restricted stock units or a share purchase plan. Understanding the vesting schedule, when tax applies and what happens if you leave means you can count these as pay without overestimating them.

                ## Milestones
                1. Plan type, grant size and vesting schedule written down.
                2. When tax applies, and whether payroll handles it, noted from the plan documents.
                3. What happens to unvested awards if you leave recorded.
                4. A decision on joining any optional purchase plan, made with its cost per pay known.

                ## Notes
                This organises the facts; it does not judge whether to hold or sell. For that, talk to a regulated adviser.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note records plan type, vesting schedule, tax timing, leaving rules and any optional plan decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the plan documents and grant letter from the share portal"
                - "Write down the vesting dates and amounts"
                - "Find when tax applies and whether payroll deducts it"
                - "Note what happens to unvested awards if you leave"
            - name: Tracing small pensions from student and temporary jobs
              description: |-
                ## Purpose
                Part-time and temporary jobs during study may have enrolled you in workplace pensions you have since forgotten. Tracing them now, while the employer names are fresh, and deciding whether to keep or combine them, stops small pots being lost for decades.

                ## Milestones
                1. Every past employer listed with dates.
                2. Pension providers found through old payslips, emails or a government pension tracing service.
                3. Each pot's value, fees and any guarantees recorded.
                4. A keep or combine decision for each pot, taken after checking charges and any benefits you would lose.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every past job is checked for a pension, and each pot found is recorded with provider, value, fees and a keep or combine decision."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every employer you have worked for with rough dates"
                - "Search old payslips and emails for pension deductions"
                - "Use your country's pension tracing service for any missing ones"
                - "Record each pot's provider, value and fees"
            - name: Year-one net worth and savings rate snapshot
              description: |-
                ## Purpose
                At the first work anniversary, a simple balance sheet of savings, pension, debts and the overdraft shows how far the first year actually moved you. Repeated each year, it gives a clear measure that is more honest than how busy money felt.

                ## Milestones
                1. All accounts, pots, pension values and debts listed with balances on one date.
                2. Net worth worked out and compared with the start date figure.
                3. The year-one savings rate calculated from the pay log.
                4. A target for year two written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated year-one snapshot shows net worth, the change since starting, the savings rate and a year-two target."
                cadence: cyclic
              tasks:
                - "List every account, pot, pension and debt with today's balance"
                - "Work out net worth and compare it with your first week"
                - "Calculate the year's savings rate from your pay log"
                - "Repeat the snapshot on your work anniversary @recurring(yearly)"
            - name: Five-year money plan from your first salary
              description: |-
                ## Purpose
                With a year of real numbers, you can sketch the next five: likely pay steps, when to move out or buy, study or travel plans, pension rate increases and how much buffer each choice needs. A written plan turns vague goals into dated targets that the payday routine can fund.

                ## Milestones
                1. Three to five goals for the next five years written with rough costs and dates.
                2. Expected pay steps sketched from the job's grade structure or published pay data.
                3. A monthly saving figure for each goal worked out.
                4. Conflicts between goals resolved into an order of priority.
                5. A yearly review date set.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written five-year plan lists dated goals, monthly amounts and a priority order, with a yearly review date."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write three to five money goals for the next five years"
                - "Sketch expected pay steps from your grade structure"
                - "Work out a monthly amount for each goal"
                - "Rank the goals and drop or delay what does not fit"
---

# First Paycheck Money Setup

This area is for anyone starting a first full-time job, whether straight from university, from school into an apprenticeship or after moving countries, and for students on paid placements. It begins with the foundations (bridging the gap to the first payday, getting payroll and tax details right, the pension and benefit choices that carry deadlines, the first payslip check and a starter spending plan), then the routines that keep a first salary working, the skills to read payslips and tax codes, the early decisions on commuting, rent, savings and debt, the milestones of the first year, the situations that change the picture and finally the longer view.

What repeats is a payday money hour, a savings transfer the day after pay, a weekly spending check-in, monthly payslip filing and leftover reviews, weekly expense claims, a quarterly first-year review and a yearly pay, tax and benefits check-up. The Monthly budget and bills, Operational checklist, Metrics log, Purchase decision and Savings goal templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
