---
id: personal-finance.redundancy-job-loss-money-plan
name: Redundancy & Job Loss Money Plan
description: "A money plan for the months after redundancy: checking what you are owed, a runway in months, an essentials-only budget, unemployment claims, lender payment holidays and a clear route back to steady pay."
category: personal
version: 1.0.0
tags: [personal-finance, redundancy-job-loss-money-plan, everyone, knowledge-worker, redundancy, job-loss, severance, runway]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - metrics-log
    - meeting-notes
    - operational-checklist
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Redundancy & Job Loss Money Plan
          description: "Stretching redundancy pay and savings after job loss with an emergency spending plan, benefits and payment holidays."
          projects:
            - name: First 48 hours after redundancy news
              description: |-
                ## Purpose
                When the letter or the call comes, the urge is either to freeze or to cut everything at once. Spending the first two days on a short list of what money is coming in, what is going out and which deadlines are already running stops panic decisions, such as cancelling insurance or cashing in a pension in the first week.

                ## Milestones
                1. Every date in the redundancy letter copied into your calendar, including consultation, notice and leaving dates.
                2. A one-page list of money still due from the employer and money due out in the next 30 days.
                3. Non-essential spending paused for two weeks while the full plan is built.
                4. One person you trust told, so the plan is not carried alone.

                ## Notes
                Do not cancel insurance, pensions or savings plans in the first week. Some carry rights that are hard to get back, and the full picture takes about a fortnight to see.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within 48 hours a one-page list exists showing the redundancy dates, money due in and money due out over the next 30 days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy every date from the redundancy letter into your calendar"
                - "List the money the employer still owes you, item by item"
                - "List every payment leaving your accounts in the next 30 days"
                - "Pause non-essential spending for the next two weeks"
                - "Tell one trusted person what has happened and what you plan to do"
            - name: Cash runway in months
              description: |-
                ## Purpose
                Runway is the number of months your money lasts at your new, lower spending: savings plus redundancy pay plus any benefits, divided by the monthly gap. Knowing it is four months rather than not long changes how you search, which offers you take and when harder cuts have to start.

                ## Milestones
                1. All accessible cash balances totalled, with money that cannot be touched kept separate.
                2. Expected redundancy pay, final pay and benefits added with the date each arrives.
                3. Monthly essential costs totalled from the last three months of statements.
                4. A runway figure in months written down, in a likely and a pessimistic version.
                5. A trigger date set: the point at which deeper cuts begin if no income has started.

                ## Notes
                Count redundancy pay after any tax the employer must deduct, not the headline figure in the letter.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written runway figure in months exists, with likely and pessimistic versions and a trigger date for deeper cuts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Total the balances of every account you can reach within a week"
                - "Add each expected payment from the employer with its likely date"
                - "Work out monthly essential costs from three months of statements"
                - "Divide the total by the monthly gap to get runway in months"
                - "Put the trigger date for deeper cuts in your calendar"
            - name: Essentials-only spending plan for the gap
              description: |-
                ## Purpose
                Your normal budget was built around a salary that has stopped. A stripped-back plan covering housing, food, energy, transport for interviews, insurance and minimum debt payments shows the true monthly cost of being out of work, often 30 to 40 percent below normal spending, and stretches every month of runway.

                ## Milestones
                1. Every spending line sorted into essential, reducible or paused.
                2. A monthly essentials figure agreed with everyone who shares the household budget.
                3. Paused items listed with the date or condition for restarting each one.
                4. The new plan running from the next payday or benefit date.

                ## Notes
                Start from the **Monthly budget and bills** template. Keep a small, named amount for things that keep you well, such as a phone plan for job calls and one social activity; plans with no slack tend to collapse in the second month.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An essentials-only monthly plan, with each line labelled essential, reducible or paused, is agreed with the household and in use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the last three months of transactions from each account"
                - "Label every spending line essential, reducible or paused"
                - "Agree the essentials total with whoever shares the budget"
                - "Write a restart condition next to each paused item"
                - "Switch to the new plan from the next money date"
            - name: Checking your redundancy pay figure
              description: |-
                ## Purpose
                Employers do get redundancy calculations wrong, most often on length of service, the weekly pay figure or a cap that changed this year. Recalculating it yourself from your contract, start date and the official calculator for your country takes about an hour, and either confirms the figure or gives you something specific to query before you sign anything.

                ## Milestones
                1. Your continuous start date confirmed from the contract or first payslip.
                2. The legal minimum worked out with the official calculator for your country.
                3. Any enhanced or contractual scheme found in the handbook and its formula applied.
                4. Your figure compared line by line with the employer's, with any difference raised in writing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Your own redundancy pay calculation sits beside the employer's figure, and any difference was raised in writing before signing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your contract start date and any earlier service that counts"
                - "Run the official redundancy pay calculator for your country"
                - "Look up the enhanced redundancy policy in the staff handbook"
                - "Compare your figure with the employer's line by line"
                - "Email HR about any difference with your workings attached"
            - name: Final pay, notice and holiday pay check
              description: |-
                ## Purpose
                The last payslip bundles several separate amounts: salary to the leaving date, notice pay or pay in lieu, untaken holiday, overtime, commission and deductions for things like season ticket loans or training costs. Checking each against your own list before it lands means errors are raised while HR still has the file open, not months later.

                ## Milestones
                1. Untaken holiday days counted and agreed with your manager or HR.
                2. Whether notice is worked, paid in lieu or spent on garden leave confirmed in writing.
                3. Every deduction expected on the final payslip explained.
                4. The final payslip checked against your list, with any shortfall raised within a week of payday.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The final payslip has been checked against a written list of every expected amount, and any shortfall was raised in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count untaken holiday days from your leave record"
                - "Ask HR in writing how your notice period will be handled"
                - "List any loans or fees the employer may deduct"
                - "Check the final payslip against your list on the day it arrives"
                - "Raise any shortfall with payroll in writing"
            - name: Unemployment benefit claim in week one
              description: |-
                ## Purpose
                Claims for unemployment support usually pay from the date you apply, not the date you lost your job, so every week of delay is money lost for good. Working out which kind you can claim, support based on your work record, means-tested support or both, and applying straight after your last day protects the earliest possible start date.

                ## Milestones
                1. The unemployment benefits your country offers listed, noting which depend on savings and which on your work record.
                2. The documents the claim needs gathered, such as identity, bank details, the leaving letter and final payslip.
                3. A claim submitted within seven days of your last working day.
                4. The first appointment attended and the first payment date confirmed.

                ## Notes
                Redundancy pay can count as savings for means-tested support but often does not affect support based on your work record. Ask the benefits office rather than assuming you cannot claim.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A claim for unemployment support was submitted within seven days of the last working day and its first payment date is known."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up which unemployment benefits your country offers"
                - "Gather identity documents, bank details and the leaving letter"
                - "Submit the claim within a week of your last working day"
                - "Attend the first appointment and note the payment date"
            - name: Payment holiday and reduced payment requests
              description: |-
                ## Purpose
                Mortgage lenders, landlords, card issuers and loan providers almost all have a hardship or payment holiday process, and they respond best to a call made before a payment is missed. A clear request, backed by your runway figure and the date income is expected to return, buys breathing room without the damage of arrears.

                ## Milestones
                1. Every lender and fixed creditor listed with the monthly payment and its due date.
                2. The one or two payments with the biggest cash effect chosen to ask about first.
                3. Each request made, with the outcome, end date and interest effect written down.
                4. How each arrangement will appear on your credit file confirmed with the lender.

                ## Notes
                A payment holiday usually means interest keeps building, so the total cost goes up: it buys time, not savings. If arrears are already serious, a free debt advice service can speak to creditors for you.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each major lender was contacted before a missed payment, and the agreed arrangement, end date and credit file effect are recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every lender with payment amount and due date"
                - "Ask the agent to draft a short payment holiday request for your main lender"
                - "Call or write to the two biggest creditors before the next due date"
                - "Record each outcome with its end date and interest effect"
            - name: Work perks that stop on your last day
              description: |-
                ## Purpose
                A salary is only part of what a job pays for. Private medical cover, life cover, income protection, a phone, a car, a cycle scheme, gym membership and pension contributions often end on the leaving date, and some leave a bill behind. A list made before you go shows which gaps need filling and which can simply lapse.

                ## Milestones
                1. Every employer-provided benefit listed with its end date and any balance owed.
                2. Each one marked replace, let lapse or buy out.
                3. Outstanding salary sacrifice balances, such as a cycle or car scheme, settled or agreed.
                4. Personal replacements arranged for anything marked replace, starting the day after work cover ends.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every work benefit is listed with its end date and a recorded decision to replace, let lapse or buy out."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask HR for a list of your benefits and when each one stops"
                - "Mark each benefit replace, let lapse or buy out"
                - "Check for outstanding balances on salary sacrifice schemes"
                - "Arrange personal cover for anything marked replace"
            - name: Telling the household about lost income
              description: |-
                ## Purpose
                Partners, older children and anyone who shares the bills will notice the change anyway, and a household that knows the plan spends differently from one that is guessing. One honest conversation about what has happened, how long the money lasts and what will change keeps everyone pulling the same way and avoids quiet resentment over cancelled treats.

                ## Milestones
                1. The key facts written in plain words: income stopping, runway, and the main cuts.
                2. A conversation held with the adults in the household, and an age-appropriate one with children.
                3. Each person's part agreed, such as a smaller allowance or a paused activity.
                4. A date set to talk again once the first month is over.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The household has heard the plan in one conversation, and each person's agreed part is written down with a follow-up date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the key money facts on one page in plain words"
                - "Choose a calm time to talk with the adults in the household"
                - "Explain the changes to children in terms of what stays the same"
                - "Agree a follow-up conversation after the first month"
            - name: Redundancy paperwork folder
              description: |-
                ## Purpose
                Benefit claims, tax refunds, a later dispute and the next mortgage application will all ask for the same documents: the redundancy letter, the final payslip, the leaving document the tax authority issues, any settlement agreement and pension details. Gathering them into one folder now, while you can still reach work systems, saves frantic searching later.

                ## Milestones
                1. Personal copies of payslips, contract and handbook saved before work system access ends.
                2. The redundancy letter, consultation notes and any settlement agreement filed together.
                3. The official leaving document for tax, such as a P45 in the UK, received and stored.
                4. Pension provider names, member numbers and share scheme details recorded in one place.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One folder holds the redundancy letter, final payslip, tax leaving document, contract and pension details, saved before work access ended."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download your last twelve payslips before system access ends"
                - "Save the contract, handbook and redundancy policy to a personal folder"
                - "Request the tax leaving document if it has not arrived"
                - "Record pension and share scheme member numbers"
            - name: Weekly runway check-in
              description: |-
                ## Purpose
                Runway shrinks quietly. A fifteen-minute check each week, updating balances, money in and money out, shows whether the plan is holding and moves the trigger date if it is not. Seeing the number every Monday also takes some of the fear out of it, because it is known rather than imagined.

                ## Milestones
                1. A runway sheet with a row per week showing total cash, money in, money out and months left.
                2. The sheet updated every week for the length of the gap.
                3. Any week where months left drops faster than planned flagged with a reason.
                4. The trigger date for deeper cuts confirmed or moved each month.

                ## Notes
                Start from the **Metrics log** template, with months of runway as the one number that matters.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The runway sheet has an entry for every week since leaving, each showing cash, money in, money out and months left."
                cadence: rolling
              tasks:
                - "Set up a runway sheet with one row per week"
                - "Update balances and months of runway @recurring(weekly:mon)"
                - "Note the reason for any week that overspends the plan"
                - "Confirm or move the trigger date for deeper cuts @recurring(monthly:4)"
            - name: Monthly reset of the gap budget
              description: |-
                ## Purpose
                The first plan is a guess; by the end of the first month you know which cuts held and which did not. A monthly reset a few days before the main bills leave moves money between lines, restarts anything that has proved essential and cuts further if the runway is shortening.

                ## Milestones
                1. Last month's actual spending compared with the plan, line by line.
                2. Lines that ran over either funded properly or cut with a specific change.
                3. Next month's plan written before the first big bill leaves.
                4. Any change shared with the rest of the household.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A revised gap budget is written every month before the first big bill leaves, with each overspent line explained."
                cadence: rolling
              tasks:
                - "Compare last month's spending with the plan line by line"
                - "Write next month's gap budget @recurring(monthly:25)"
                - "Decide what to do with each line that ran over"
                - "Share the changes with the household"
            - name: Claimant commitments record
              description: |-
                ## Purpose
                Most unemployment support comes with conditions, such as a set number of job search hours, applications or appointments, and one missed requirement can stop payments for weeks. A simple log of every application, call and appointment means you can show what you did if asked, and you never lose money to a paperwork gap.

                ## Milestones
                1. The conditions of your claim written down in your own words.
                2. A log with date, employer, role and action for every job search activity.
                3. Every appointment in the calendar with a reminder the day before.
                4. No payment stopped or reduced for a missed requirement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated job search log covers every week of the claim, and no payment has been stopped for a missed requirement."
                cadence: rolling
              tasks:
                - "Write down the conditions of your claim in plain words"
                - "Log this week's applications, calls and appointments @recurring(weekly:thu)"
                - "Check the claim account for new messages @recurring(weekly:tue)"
                - "Add each appointment to the calendar with a reminder"
            - name: Job search costs allowance
              description: |-
                ## Purpose
                Looking for work costs money: travel to interviews, a decent interview outfit, printing, professional subscriptions, certification fees and sometimes childcare on interview days. A small ring-fenced amount stops these costs ambushing the essentials plan, and receipts kept now can support a reimbursement request from employers who invite you a long way.

                ## Milestones
                1. A monthly job search allowance set inside the gap budget.
                2. A receipts folder for travel, clothing and course costs.
                3. Interviewers asked about travel reimbursement where the trip is long.
                4. Spending checked against the allowance each month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Job search spending stays inside a named monthly allowance, with receipts filed for every item."
                cadence: rolling
              tasks:
                - "Set a monthly job search allowance in the gap budget"
                - "Create a folder for interview travel and course receipts"
                - "Ask employers about travel costs when invited to distant interviews"
                - "Total job search spending against the allowance @recurring(monthly:20)"
            - name: Lender arrangements tracker
              description: |-
                ## Purpose
                Payment holidays and reduced payment plans end on fixed dates, and the full payment restarts whether or not you are back in work. One tracker of every arrangement, its end date and what happens next gives you a month's warning to ask for an extension or plan the restart.

                ## Milestones
                1. Every arrangement listed with lender, agreed payment, end date and reference.
                2. A reminder set one month before each end date.
                3. Extensions requested in good time where income has not returned.
                4. Each lender's written confirmation filed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lender arrangement has a recorded end date, and each was reviewed at least a month before it ended."
                cadence: rolling
              tasks:
                - "List each arrangement with its end date and reference number"
                - "Set a reminder a month before every end date"
                - "Review upcoming arrangement end dates @recurring(monthly:12)"
                - "File each lender's written confirmation in the paperwork folder"
            - name: Paying yourself a salary from the lump sum
              description: |-
                ## Purpose
                A redundancy payment arriving in one go feels like a lot of money, and it tends to get spent like it. Moving it into a separate account and transferring a fixed monthly amount into your everyday account, like a salary, makes the lump sum last as long as the runway says it should.

                ## Milestones
                1. The lump sum moved to a separate account away from the everyday card.
                2. A monthly transfer amount set from the essentials plan.
                3. A standing order created for the same day each month.
                4. Any extra withdrawal recorded with a reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The redundancy payment sits in a separate account, and a fixed monthly transfer, not ad hoc withdrawals, funds everyday spending."
                cadence: rolling
              tasks:
                - "Choose a separate account to hold the lump sum"
                - "Set the monthly transfer from the essentials plan figure"
                - "Create a standing order for the same day each month"
                - "Check the holding account balance against the plan @recurring(monthly:28)"
            - name: Declaring temporary and casual earnings
              description: |-
                ## Purpose
                Short contracts, shifts and freelance jobs while you search are often worth taking, but most benefit systems require you to report earnings, and some reduce payments by a set amount for each unit earned. Recording every payment and reporting it on time avoids overpayments that have to be paid back later, often by deductions from future support.

                ## Milestones
                1. The earnings rules for your claim found: what must be reported, when, and how payments change.
                2. A log of every job with date, gross pay and payment date.
                3. Every period's earnings reported by its deadline.
                4. No overpayment letters received.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every piece of paid work during the claim is logged and was reported to the benefits office within its deadline."
                cadence: rolling
              tasks:
                - "Find out how earnings change your unemployment payments"
                - "Log each shift or contract with gross pay and date paid"
                - "Report this week's earnings to the benefits office @recurring(weekly:fri)"
                - "Keep payslips and invoices from temporary work together"
            - name: Chasing money the employer still owes
              description: |-
                ## Purpose
                Bonuses, commission on deals already closed, expenses claims and unpaid overtime are easy for a departing employee's file to forget. A list with amounts, the policy that supports each one and the date it should be paid, followed up politely and in writing, turns they said they would sort it into money in the account.

                ## Milestones
                1. Every outstanding amount listed with the policy or email that supports it.
                2. Each item raised in writing with HR or payroll, with a payment date requested.
                3. A written answer received for each one.
                4. Unresolved items moved to the dispute deadlines project with the evidence attached.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every outstanding amount from the employer has a written answer, and unpaid items are either paid or passed to the dispute project."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each unpaid bonus, commission or expense with its amount"
                - "Ask the agent to draft a polite written request to payroll listing each item"
                - "Chase any item still without a written answer @recurring(monthly:8)"
                - "Move anything refused or ignored into the dispute file"
            - name: Sunday money huddle during the gap
              description: |-
                ## Purpose
                Job loss strains households, and money is where the strain shows first. A short weekly huddle with your partner or the other adults at home, looking at the runway number, the coming week's costs and any wins, keeps decisions shared and stops one person carrying the worry alone.

                ## Milestones
                1. A fixed weekly slot of 20 minutes agreed.
                2. Each huddle covering runway, the week's costs and one thing that went well.
                3. Decisions from each huddle noted in one shared place.
                4. Huddles held for at least eight weeks in a row.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly money huddles have been held, with decisions noted in one shared place."
                cadence: rolling
              tasks:
                - "Agree a fixed 20-minute weekly slot with your partner"
                - "Hold the weekly money huddle @recurring(weekly:sun)"
                - "Note each decision in a shared document"
                - "Share one job search win at every huddle"
            - name: Notice pay, garden leave and pay in lieu explained
              description: |-
                ## Purpose
                Notice can be worked, spent on garden leave or paid as a lump sum in lieu, and each choice changes when the money arrives, how it is taxed and whether you can start a new job straight away. Knowing the differences before the leaving date is agreed lets you ask for the version that suits your search, such as garden leave if an offer is close or pay in lieu if you want to start freelance work quickly.

                ## Milestones
                1. The three forms of notice and how each pays written in your own words.
                2. Your contract's notice clause and any pay in lieu clause found.
                3. The tax treatment of notice pay in your country checked against official guidance.
                4. A preferred option chosen and raised with HR before the leaving date is fixed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A preferred form of notice was chosen from written notes on all three options and raised with HR before the leaving date was fixed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the notice and pay in lieu clauses in your contract"
                - "Read official guidance on how notice pay is taxed"
                - "Decide which form of notice suits your search plans"
                - "Raise your preference with HR in writing"
            - name: How termination payments are taxed
              description: |-
                ## Purpose
                Redundancy pay, notice pay, holiday pay and settlement sums are often taxed differently: in many countries part of a genuine redundancy payment is tax-free up to a threshold, while notice and holiday pay are taxed as normal earnings. Understanding the split lets you check the deductions on the final payslip and spot an emergency tax code that takes too much.

                ## Milestones
                1. Each part of your package labelled as earnings, redundancy payment or other.
                2. The tax-free threshold for redundancy payments in your country, if any, noted from official guidance.
                3. The tax deducted on the final payslip compared with what you expected.
                4. Questions about any mismatch put to payroll or the tax authority.

                ## Notes
                The aim is understanding and checking, not tax planning. For a large settlement, ask the solicitor advising on the agreement or a tax adviser how each payment will be treated.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each part of the leaving package is labelled with its tax treatment, and any unexpected deduction has been queried in writing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Split your leaving package into earnings and redundancy parts"
                - "Look up the official tax treatment of redundancy pay in your country"
                - "Compare the tax on the final payslip with your expectation"
                - "Query any mismatch with payroll or the tax authority"
            - name: Benefit rules on savings and redundancy pay
              description: |-
                ## Purpose
                Means-tested support often falls or stops once savings pass a limit, and a redundancy payment sitting in the bank can count. Support based on your work record usually ignores savings but runs for a fixed period. Learning these rules for your country explains why you were or were not awarded something, and when a fresh claim becomes worth making as savings fall.

                ## Milestones
                1. The savings limits for means-tested support in your country noted.
                2. Whether redundancy pay counts as capital or income for each benefit confirmed.
                3. The length of any entitlement based on your work record known.
                4. The savings level at which a means-tested claim makes sense written in the runway sheet.

                ## Notes
                Deliberately spending or giving away savings to qualify for support can be treated as if you still had the money. Ask the benefits office or a free advice service before moving money for that reason.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The runway sheet records the savings level at which a means-tested claim becomes possible, based on the official rules."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Look up the savings limits for means-tested unemployment support"
                - "Check whether redundancy pay counts as savings for each benefit"
                - "Note how long support based on your work record lasts"
                - "Add the claim threshold to the runway sheet"
            - name: Reading the money clauses in a settlement agreement
              description: |-
                ## Purpose
                Settlement or separation agreements often trade an extra sum for giving up the right to make claims, and the money clauses decide what you actually receive: the gross figure, how it is split for tax, when it is paid and what triggers clawback. In many countries the employer must pay towards independent legal advice before you sign, so arriving with your questions ready makes that hour count.

                ## Milestones
                1. Every payment in the agreement listed with amount, timing and tax label.
                2. Clawback, confidentiality and reference clauses that affect money highlighted.
                3. Your questions written down before the adviser meeting.
                4. The adviser's answers recorded, and any change you asked for confirmed in the final draft.

                ## Notes
                Preparing questions is your part; the legal view comes from the adviser. Ask early whether the employer contributes to the fee, and how much.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of every payment in the agreement, with timing and tax label, plus written answers from the independent adviser, exists before signing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask whether the employer pays for independent advice on the agreement"
                - "List every payment in the agreement with its timing"
                - "Ask the agent to summarise the money clauses in plain English for checking"
                - "Take your written questions to the adviser meeting"
            - name: Negotiating a better exit package
              description: |-
                ## Purpose
                Redundancy terms are less fixed than they look, especially for voluntary redundancy and for senior or specialist roles. Common asks include a later leaving date to reach a service anniversary, extra notice, keeping the laptop or phone, outplacement support, a training budget, an agreed reference and help with legal fees. Asking calmly with a short written list costs nothing and often gets something.

                ## Milestones
                1. A written list of three to six asks, ranked by value to you.
                2. The reason for each ask noted, such as a service date or a skills gap.
                3. The asks put to HR or your manager in a meeting and followed up in writing.
                4. The final agreed package recorded in full.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A ranked list of asks was put to the employer in writing, and the final agreed package is recorded item by item."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check whether a later leaving date would cross a service anniversary"
                - "Rank three to six asks by their value to you"
                - "Put the asks to HR in a meeting"
                - "Send a short written summary of what was agreed after the meeting"
            - name: Workplace pension choices when you leave
              description: |-
                ## Purpose
                Leaving a job freezes your workplace pension, and the main temptation is to cash in or transfer it in a hurry. Transfers and early access carry tax and charge effects that are hard to reverse, so those decisions belong with a regulated adviser once the search has settled. What does need doing now is recording the details so the pot is never lost.

                ## Milestones
                1. Provider, plan number and current value of each workplace pension recorded.
                2. The date employer contributions stop confirmed.
                3. Your personal contact details updated with each provider so statements reach you.
                4. Any question about transfers or early access noted for a regulated adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each workplace pension's provider, plan number and value are recorded, and your personal contact details are on file with every provider."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record the provider and plan number of each workplace pension"
                - "Update your home address and personal email with each provider"
                - "Confirm when employer contributions stop"
                - "Check the deferred pension statement when it arrives @recurring(yearly)"
            - name: Credit file effects of payment holidays
              description: |-
                ## Purpose
                Lenders report payment holidays, reduced payment plans and missed payments in different ways, and the marks can affect a mortgage or loan application for years. Learning how each arrangement you made appears, and checking that the file matches what was agreed, protects your borrowing options for when you are back in work.

                ## Milestones
                1. How agreed arrangements, arrears and defaults are reported in your country understood.
                2. Your credit file checked with at least one credit reference agency.
                3. Each arrangement on the file matched against what the lender agreed.
                4. Any error disputed in writing with the agency and the lender.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your credit file has been checked against every agreed arrangement, and any mismatch was disputed in writing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read how payment arrangements are reported to credit agencies"
                - "Get a free copy of your credit file"
                - "Match each arrangement on the file against the lender's letter"
                - "Check the credit file for new entries @recurring(quarterly)"
            - name: Job gap and your state pension record
              description: |-
                ## Purpose
                State pensions in many countries depend on years of contributions, and a gap in work can leave a gap in the record. Claiming unemployment support often credits those years automatically, which is a reason to claim even when the payment itself is small. Checking your record a few months into the gap shows whether anything is missing.

                ## Milestones
                1. How your country's state pension record works, and how credits are given during unemployment, noted.
                2. Your contribution record viewed online or requested.
                3. Any year with a gap identified and its cause noted.
                4. Options to fill a gap, such as voluntary contributions, listed for a later decision.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your state pension contribution record has been checked, and any gap year is listed with the options to fill it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read how unemployment credits work for the state pension"
                - "View or request your contribution record"
                - "List any year with a gap and its cause"
                - "Note the cost and deadline of any voluntary contribution option"
            - name: Voluntary redundancy offer, stay or go
              description: |-
                ## Purpose
                A voluntary redundancy offer is a decision with a deadline, and the package rarely looks as generous once you work out the runway it actually buys. Comparing the offer with staying, including the risk of compulsory redundancy later on worse terms, your chances in the job market and what you would lose in pension and benefits, lets you decide on numbers rather than mood.

                ## Milestones
                1. The offer's value after tax worked out.
                2. Months of runway the offer buys at essentials-only spending calculated.
                3. The risks of staying, such as a second round, written down honestly.
                4. A decision recorded with the three reasons that settled it, before the offer deadline.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A stay or go decision is recorded before the offer deadline, with the value after tax, months of runway and three deciding reasons."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Work out the offer's value after tax"
                - "Convert the offer into months of essentials-only runway"
                - "Write down the honest risks of staying"
                - "Record your decision and three reasons before the deadline"
            - name: Choosing where to hold the redundancy payment
              description: |-
                ## Purpose
                Safety first, access within days second, some interest third: that is the order of priorities for a lump sum that has to last months. Comparing easy access and short notice accounts, checking the deposit protection limit per banking group and splitting larger sums across banks keeps the money secure without locking it away when a bill arrives.

                ## Milestones
                1. The amount needed within one month and within three months separated.
                2. Two or three accounts compared on access, rate and protection.
                3. Sums above the deposit protection limit split across separate banking groups.
                4. The chosen accounts open and funded.

                ## Notes
                This is a short-term cash decision only. Investing money the runway depends on puts it at risk; longer-term choices belong with a regulated adviser once you are back in work.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The redundancy payment sits in accounts chosen for access and protection, with no single banking group holding more than the protection limit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Split the lump sum into one-month and three-month needs"
                - "Compare easy access and short notice accounts"
                - "Check the deposit protection limit for each bank"
                - "Compare the holding account rate with the market @recurring(quarterly)"
            - name: Clear debt or keep cash with the lump sum
              description: |-
                ## Purpose
                Paying off a card or loan with redundancy money saves interest, but cash spent on debt cannot be got back if the gap runs long, while a lender can often agree lower payments. Laying out each debt's rate, minimum payment and flexibility beside your runway shows which, if any, are worth clearing now and which are safer left on a reduced payment.

                ## Milestones
                1. Each debt listed with balance, rate, minimum payment and any early repayment charge.
                2. Runway with and without clearing each debt compared.
                3. A decision recorded for each debt: clear, reduce or leave as it is.
                4. Any payoff made only after the essentials runway target is protected.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every debt has a recorded clear, reduce or leave decision, made after comparing runway with and without the payoff."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each debt with its rate, minimum payment and early repayment charge"
                - "Compare runway with and without clearing each debt"
                - "Decide clear, reduce or leave for each debt"
                - "Pay off only what still leaves the runway target intact"
            - name: Funding a retraining course from redundancy money
              description: |-
                ## Purpose
                Redundancy is a natural point to retrain, and some employers, unions and governments fund courses for people who have just lost work. Comparing the full cost, the funding available, the extra time without income and realistic pay at the end turns a hopeful idea into a costed decision before any deposit is paid.

                ## Milestones
                1. Total course cost, including materials, travel and exam fees, worked out.
                2. Public, employer and sector funding checked and applied for where eligible.
                3. The extra months without income the course adds put into the runway.
                4. Typical starting pay in the new field found from real job adverts.
                5. A go, wait or no decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A retraining decision is recorded with full course cost, funding secured and the effect on runway set against typical starting pay."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Price the course including materials, travel and exams"
                - "Check public and employer funding for people made redundant"
                - "Add the course months to the runway sheet"
                - "Collect starting salaries from ten real job adverts"
            - name: Temporary work versus holding out
              description: |-
                ## Purpose
                Taking a short contract or lower-paid stopgap adds income but eats search time and may reduce benefit payments. Working out the net gain after tax, travel, childcare and lost benefits, and how many search hours remain each week, shows whether the stopgap extends the runway enough to be worth it.

                ## Milestones
                1. The net weekly gain of a stopgap after tax, costs and benefit changes calculated.
                2. The search hours left each week estimated.
                3. The effect on runway in months worked out.
                4. A rule recorded for which stopgaps you will accept.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule says which stopgap roles you will take, based on net weekly gain and the effect on runway."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out net weekly gain after tax, travel and benefit changes"
                - "Estimate the search hours a stopgap would leave you"
                - "Add the stopgap income to the runway sheet as a scenario"
                - "Write your acceptance rule for stopgap work"
            - name: Comparing a new job offer's full package
              description: |-
                ## Purpose
                Headline salary hides the real difference between offers. Pension contribution, bonus structure, notice and probation terms, health cover, commuting cost and how quickly you can rebuild savings all change what a job is worth, especially after a redundancy, when security matters more than it did. A side-by-side table makes a lower salary with a better package visible.

                ## Milestones
                1. Each offer and your old job set out in one table with the same rows.
                2. Annual value of pension, bonus and benefits estimated.
                3. Commuting and other costs of the job subtracted.
                4. Probation length and notice terms noted as a measure of security.
                5. The chosen offer recorded with the reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every offer under consideration sits in one table beside the old job, valued on pay, pension, benefits, costs and security."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each employer for the full benefits summary in writing"
                - "Ask the agent to lay the offers out in a table beside your old package"
                - "Subtract commuting and other job costs from each offer"
                - "Record the chosen offer and the reasons"
            - name: Deeper cuts when the gap passes three months
              description: |-
                ## Purpose
                If the trigger date arrives with no income in sight, small trims are no longer enough and the big fixed costs come into question: a second car, a car on finance, a phone contract, school fees, a lodger in the spare room or a smaller home. Deciding the order of these moves in advance means they happen on schedule rather than in a crisis.

                ## Milestones
                1. The five largest fixed costs listed with the saving each move would make.
                2. Each move ranked by saving, reversibility and effect on the household.
                3. The first two moves to make at the trigger date agreed.
                4. The plan dated and stored next to the runway sheet.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked list of big fixed-cost moves exists, with the first two agreed before the trigger date arrives."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the five largest fixed costs in the household"
                - "Estimate the monthly saving from changing each one"
                - "Rank each move by saving and how easily it can be reversed"
                - "Agree the first two moves with the household"
            - name: Money case for relocating to a new role
              description: |-
                ## Purpose
                Widening the search to other cities or countries can shorten the gap, but moves carry deposits, removal costs, overlapping rent, school changes and a different cost of living. Pricing a move before applying, and knowing what relocation support to ask for, stops a good offer turning into a financial setback.

                ## Milestones
                1. One-off moving costs estimated for the most likely destination.
                2. Monthly living costs there compared with home.
                3. A minimum salary for a move worked out.
                4. Relocation support asks written down for offer negotiations.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A minimum salary for relocating and a list of relocation support asks are written down before applying outside your area."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate deposit, removal and overlap costs for a move"
                - "Compare monthly living costs at home and at the destination"
                - "Work out the minimum salary that makes a move worth it"
                - "List relocation support to ask for in negotiations"
            - name: Consultation meeting money questions
              description: |-
                ## Purpose
                Consultation meetings are where pay dates, notice, alternative roles and enhanced terms get settled, and people often leave them without asking the money questions. Going in with a written list, taking notes and asking for answers in writing turns each meeting into a record you can rely on.

                ## Milestones
                1. A written list of money questions prepared before the first meeting.
                2. Notes taken in each meeting, including who said what.
                3. Answers to money questions confirmed in writing afterwards.
                4. Any suitable alternative role and its pay recorded, with your response.

                ## Notes
                Start from the **Meeting notes** template. You may be entitled to bring a colleague or union representative; check your employer's process.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every consultation meeting has written notes, and each money question has a written answer from the employer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write your money questions before the first consultation meeting"
                - "Ask whether a colleague or representative can attend with you"
                - "Take notes during each meeting"
                - "Ask HR to confirm money answers by email within a week"
            - name: Last working day money checklist
              description: |-
                ## Purpose
                The last day is the final chance to do things that become hard from outside: confirm the final pay date, return equipment that would otherwise be deducted, submit outstanding expenses and collect contact details for references. A checklist run in the final week closes these gaps in an hour.

                ## Milestones
                1. Outstanding expenses submitted and approved.
                2. Company equipment returned with a written receipt.
                3. The final pay date and tax leaving document date confirmed.
                4. Reference contacts saved outside work systems.

                ## Notes
                Start from the **Operational checklist** template and run it two days before the end, not on the day itself.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every item on the last day checklist is ticked, including equipment receipts, approved expenses and a confirmed final pay date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Submit every outstanding expenses claim before your last week"
                - "Return company equipment and get a written receipt"
                - "Confirm the final pay date with payroll"
                - "Collect personal contact details for two referees"
            - name: Reclaiming overpaid tax after leaving mid-year
              description: |-
                ## Purpose
                Tax on salary is usually collected on the assumption that you will earn all year, so leaving part way through and not working for months can mean you have paid too much. Depending on the country, a refund is claimed during the year, arrives automatically or is settled in the annual return; knowing which applies, and having the leaving document ready, gets the money back sooner.

                ## Milestones
                1. How your tax authority handles refunds after leaving work mid-year confirmed.
                2. Year-to-date pay and tax from the leaving document recorded.
                3. A refund claim made, or the annual return date noted if that is the route.
                4. The refund received, or its expected date recorded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A refund claim for overpaid tax has been made, or the route and date for settling it are recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up how your tax authority refunds tax after leaving a job"
                - "Record year-to-date pay and tax from the leaving document"
                - "Submit the refund claim or note the annual return date"
                - "Chase the refund if it has not arrived by the stated time"
            - name: Three-month mark money review
              description: |-
                ## Purpose
                Three months in, the first assumptions have been tested: how long applications take, what the benefits really pay, which cuts held. A sit-down review at this point resets the runway, decides whether the deeper cuts plan starts and checks whether the search itself needs to change, before money gets tight.

                ## Milestones
                1. Actual spending over three months compared with the essentials plan.
                2. Runway recalculated from current balances.
                3. A decision recorded on whether to start the deeper cuts plan.
                4. Changes to the search, such as wider roles or locations, agreed along with their cost.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A dated three-month review records actual spending, the new runway figure and a decision on deeper cuts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a two-hour review slot for the three-month mark"
                - "Compare three months of spending with the essentials plan"
                - "Recalculate runway from current balances"
                - "Decide whether the deeper cuts plan starts now"
            - name: End of work-record benefit planning
              description: |-
                ## Purpose
                Support based on your work record usually runs for a fixed number of weeks, after which only means-tested help remains, and income can drop sharply overnight. Marking the end date early and checking what you would get afterwards gives you months to prepare rather than a surprise.

                ## Milestones
                1. The end date of work-record support written in the calendar.
                2. Eligibility for means-tested support after that date checked against current savings.
                3. The runway sheet updated to show income after the end date.
                4. Any new claim prepared a month before the end date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The end date of work-record support is in the calendar, and the runway sheet shows income after it, with any new claim prepared a month ahead."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask the benefits office when your work-record support ends"
                - "Put the end date and a one-month warning in the calendar"
                - "Check means-tested eligibility at your current savings"
                - "Model income after the end date in the runway sheet"
            - name: First payday back in work restart plan
              description: |-
                ## Purpose
                Your first salary after a gap is quickly absorbed by restarted direct debits, the end of payment holidays, catch-up spending and a probation period that still feels insecure. Planning what restarts first, how deferred amounts are repaid and how much goes back into savings turns the first three paydays into a recovery rather than a spree.

                ## Milestones
                1. Paused bills and arrangements listed in the order they restart.
                2. Lenders told about the new job and repayment of deferred amounts agreed.
                3. A fixed amount from each of the first three paydays set aside to rebuild savings.
                4. Benefit claims closed on the right date to avoid overpayments.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within the first three paydays every paused bill has restarted, benefits are closed correctly and savings are rebuilding by a fixed amount."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Tell the benefits office your start date before the first payday"
                - "List paused bills in the order they will restart"
                - "Agree repayment of deferred amounts with each lender"
                - "Set a fixed savings transfer for each of the first three paydays"
            - name: Job loss with a mortgage and dependants
              description: |-
                ## Purpose
                When a mortgage and children depend on one income, the stakes of the gap are higher and the options are specific: lender hardship schemes, mortgage payment protection or unemployment insurance if you hold it, a temporary switch to lower payments, and help with housing costs that some countries offer after a waiting period. Mapping these early, before any arrears, keeps the family home off the table.

                ## Milestones
                1. Any mortgage payment protection or unemployment cover found and a claim started.
                2. The lender's hardship options known in writing.
                3. Government help with mortgage interest, where your country offers it, checked including waiting periods.
                4. Children's costs that must continue protected in the essentials plan.

                ## Notes
                Lenders are usually expected to treat customers in difficulty fairly and consider options before taking action. A free debt advice service can speak to the lender if arrears build.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every source of help with mortgage payments has been checked and recorded, including any insurance claim, lender options and government support."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Search old paperwork for mortgage payment protection or unemployment cover"
                - "Ask the lender for its hardship options in writing"
                - "Check whether government help with mortgage interest exists and its waiting period"
                - "Review the mortgage account for arrears @recurring(monthly:18)"
            - name: Rebalancing shared costs when one partner loses work
              description: |-
                ## Purpose
                Couples who split bills evenly or in proportion to income need a new arrangement when one income stops, or the partner still working quietly subsidises everything and resentment builds. Agreeing a temporary split, what the out-of-work partner covers from redundancy pay or benefits, and when the arrangement ends keeps it fair and explicit.

                ## Milestones
                1. Current shared costs and who pays what listed.
                2. A temporary split agreed, with each partner's contribution as a fixed amount.
                3. Personal spending money kept for both partners, even if small.
                4. An end condition agreed, such as three months after a new job starts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written temporary cost split, with fixed contributions and an end condition, is agreed by both partners."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List shared costs and who currently pays each one"
                - "Agree a temporary split in fixed amounts"
                - "Keep a small personal spending amount for both partners"
                - "Settle the month's shared costs between you @recurring(monthly:2)"
            - name: Redundancy in your fifties and early sixties
              description: |-
                ## Purpose
                Losing a job close to retirement raises questions younger people do not face: whether to look for similar work, take a lower-paid role or bridge to an early retirement, and whether a pension can or should be drawn early. These choices interact with tax, means-tested support and state pension age, so the work here is gathering the numbers and taking them to a regulated adviser, not deciding alone.

                ## Milestones
                1. Every pension pot listed with its value and earliest access age.
                2. State pension age and forecast checked.
                3. The years between now and state pension age costed at essentials-only spending.
                4. Questions taken to a regulated adviser or free government pension guidance service.

                ## Notes
                Taking money from a pension early can reduce means-tested support and trigger tax and contribution limits that are hard to undo. Get guidance before drawing anything.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A bridging budget to state pension age, with every pot's value and access age, has been reviewed with a regulated adviser or official guidance service."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every pension pot with its value and earliest access age"
                - "Check your state pension age and forecast"
                - "Cost the years to state pension age at essentials-only spending"
                - "Book a free pension guidance appointment or a regulated adviser"
                - "Review the bridging budget against pension statements @recurring(quarterly)"
            - name: Job loss on a work visa
              description: |-
                ## Purpose
                If your right to stay depends on your job, redundancy starts a second clock: many visa systems give a fixed number of days to find a new sponsor or leave. That clock changes the money plan, because the cost of a new application, a move abroad or travel home has to sit in the runway, and unemployment support may not be available at all.

                ## Milestones
                1. The grace period and its end date confirmed from official guidance or an immigration adviser.
                2. The cost of a new visa application, or of leaving, added to the runway.
                3. Whether you can claim any unemployment support checked.
                4. A stay or leave decision date set before the grace period ends.

                ## Notes
                Immigration rules change often and mistakes are costly. Use a regulated immigration adviser rather than forum answers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The visa grace period end date, the cost of each option and a decision date are recorded in the runway plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Confirm your visa grace period from official guidance"
                - "Price a new visa application and the cost of leaving"
                - "Check whether your visa allows any unemployment support"
                - "Set a stay or leave decision date inside the grace period"
            - name: Tech layoff with equity, bonus and clawbacks
              description: |-
                ## Purpose
                Knowledge workers in tech and finance often leave with more moving parts than a salary: unvested shares that lapse, vested options with a short exercise window, a sign-on or relocation bonus that must be repaid if you leave within a year, and a pro-rated annual bonus. Mapping each one with its date and cash effect avoids a surprise repayment demand and a missed exercise deadline.

                ## Milestones
                1. Every equity grant listed with vested, unvested and lapsing amounts.
                2. Each option exercise deadline after leaving written in the calendar.
                3. Clawback clauses for sign-on, relocation or training costs checked against your leaving date.
                4. Pro-rated bonus entitlement confirmed in writing.
                5. Questions on exercising options and their tax taken to a tax adviser.

                ## Notes
                Exercising options can create a tax bill before you are able to sell the shares. Get advice on the tax before spending runway on an exercise.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every grant, exercise deadline, clawback and bonus entitlement is listed with its date and cash effect, and exercise questions have gone to a tax adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download your equity statement from the share plan portal"
                - "Put each option exercise deadline in the calendar"
                - "Check sign-on and relocation repayment clauses against your leaving date"
                - "Ask HR to confirm any pro-rated bonus in writing"
            - name: Starting a business with redundancy money
              description: |-
                ## Purpose
                Plenty of people use a redundancy payment to start freelancing or a small business. The ones who keep the household safe ring-fence the money: a fixed amount for the business, a fixed number of months to test it, and the essentials runway left untouched. Setting those limits before spending anything turns a hopeful gamble into an experiment with a stop rule.

                ## Milestones
                1. A business budget set as a fixed share of the lump sum, separate from the essentials runway.
                2. A test period with a revenue or client target agreed.
                3. A separate account opened for business money.
                4. A stop rule written down: the point at which you return to job hunting full time.

                ## Notes
                Starting self-employment can change your benefit entitlement and your tax registration duties. Check both before the first invoice.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ring-fenced business budget, a test period with a target and a written stop rule exist before any business spending."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Decide the fixed amount the business can use"
                - "Open a separate account for business money"
                - "Write the test target and the stop rule"
                - "Compare business spending against the ring-fence @recurring(monthly:10)"
            - name: Claims when the employer goes bust
              description: |-
                ## Purpose
                If the employer becomes insolvent, redundancy pay, notice pay, unpaid wages and holiday pay may never be paid by the company. Many countries run a government guarantee fund that pays capped amounts in that situation, usually through the insolvency practitioner. Knowing the route and filing promptly is the difference between getting part of what you are owed and getting nothing.

                ## Milestones
                1. The insolvency practitioner's name and your claim reference obtained.
                2. The government guarantee scheme for your country and its caps identified.
                3. A claim submitted for each type of unpaid money.
                4. Any amount above the caps lodged as a creditor claim against the company.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Claims for each type of unpaid money have been submitted to the guarantee scheme, with any excess lodged as a creditor claim."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Get the insolvency practitioner's contact details and your claim reference"
                - "Look up your country's guarantee scheme and its caps"
                - "Submit a claim for each type of unpaid money"
                - "Lodge any amount above the caps as a creditor claim"
            - name: Layoff-ready money file
              description: |-
                ## Purpose
                In sectors where rounds of redundancies come every year or two, the people who cope best already have their numbers ready: a current runway figure, a costed essentials plan, contract and payslips saved outside work systems and an up to date redundancy pay estimate. Keeping that file fresh each quarter turns the next announcement into a plan you have already written.

                ## Milestones
                1. An essentials-only budget kept current, separate from the everyday budget.
                2. Contract, handbook and recent payslips stored outside work systems.
                3. Your legal minimum and enhanced redundancy figures recalculated each year.
                4. Runway in months known at any point without a fresh calculation.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A file outside work systems holds a current essentials budget, recent payslips and a redundancy estimate updated within the last year."
                cadence: cyclic
              tasks:
                - "Save a copy of your contract and handbook outside work systems"
                - "Write a costed essentials-only budget to keep on file"
                - "Save the latest payslips and any contract changes @recurring(quarterly)"
                - "Recalculate your redundancy pay estimate @recurring(yearly)"
            - name: Time limits for disputing unpaid redundancy money
              description: |-
                ## Purpose
                Claims about unpaid redundancy pay, notice or unfair selection usually go to an employment tribunal or court with short and strict time limits, sometimes only three months from the leaving date, and many countries require early conciliation first. Knowing the deadline and getting free advice early keeps the option open even if you hope never to use it.

                ## Milestones
                1. The time limit for the type of claim you might make confirmed with a free advice service or union.
                2. The deadline and any early conciliation step in the calendar.
                3. A dated timeline of events and evidence assembled.
                4. A decision recorded on whether to proceed, settle or drop it, before the deadline.

                ## Notes
                The work here is deadlines and organisation; whether you have a case is for a qualified adviser. Many unions, law centres and advice charities give free initial advice.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The claim deadline is in the calendar, and a decision to proceed, settle or drop was recorded before it, based on qualified advice."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Contact a union, law centre or free employment advice service"
                - "Write the claim deadline and conciliation step in the calendar"
                - "Ask the agent to turn your notes and emails into a dated timeline"
                - "Record the decision to proceed, settle or drop"
---

# Redundancy & Job Loss Money Plan

This area is for anyone who has just been told their job is going, or has already gone, and needs the money to last until the next income starts, with extra projects for knowledge workers leaving with equity, bonuses and settlement agreements. It starts with the first days (the dates, a runway in months, an essentials-only plan, checking redundancy and final pay, the unemployment claim and requests to lenders), then the routines that run through the gap, the rules worth understanding, the decisions about the lump sum and the search, the dated events from consultation to the first payday back, situations such as a mortgage, a visa or being close to retirement, and finally the specialist work of disputes, insolvent employers and staying layoff-ready.

What repeats is a Monday runway check, a weekly job search log and earnings report for the claim, a Sunday household huddle, a monthly budget reset and lump sum check, monthly reviews of lender arrangements, and quarterly checks of the credit file and the holding account rate. The Monthly budget and bills, Metrics log, Meeting notes and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
