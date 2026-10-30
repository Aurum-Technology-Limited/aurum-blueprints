---
id: personal-finance.debt-consolidation-management-plans
name: Debt Consolidation & Management Plans
description: "A full list of what you owe, free advice booked, the right route chosen between a consolidation loan, creditor arrangements or a debt management plan, and the monthly checks that carry it to the final payment."
category: personal
version: 1.0.0
tags: [personal-finance, debt-consolidation-management-plans, everyone, debt-advice, consolidation-loan, debt-management-plan, creditors]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - meeting-notes
    - metrics-log
    - purchase-decision
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Debt Consolidation & Management Plans
          description: "Combining debts, negotiating with creditors or entering a debt management plan with free debt advice services."
          projects:
            - name: Complete list of debts and creditors
              description: |-
                ## Purpose
                Advisers, lenders and debt management providers all start with the same question: exactly who do you owe, how much, and what are you paying now? A single dated list covering every loan, card, overdraft, catalogue account, buy now pay later plan, arrears and money owed to family answers it once and saves hours at every later step. It also shows whether consolidation is even possible, because many lenders cap the amount they will lend.

                ## Milestones
                1. Every debt listed with creditor name, account reference and current balance.
                2. The monthly contractual payment, interest rate and any arrears recorded for each one.
                3. Debts already passed to a collection agency marked with the collector's name as well as the original lender.
                4. A total owed and a total of current monthly payments written at the foot of the list.

                ## Notes
                Include debts you are not paying at the moment and debts to friends or family. Advisers need the full picture, and a forgotten creditor can derail a plan months later.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated list shows every creditor with balance, payment, rate and arrears, plus totals of debt owed and monthly payments."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every creditor you can think of from memory in ten minutes"
                - "Check bank statements from the last three months for payments to lenders"
                - "Log in to each account and copy the balance, rate and monthly payment"
                - "Add arrears, collection agency names and account references to the list"
                - "Total the balances and the current monthly payments"
            - name: Priority and non-priority debt sorting
              description: |-
                ## Purpose
                Not all debts carry the same risk. Missing rent, mortgage, energy, local or council tax, tax owed to the government, court fines or child maintenance can lead to eviction, disconnection or enforcement, while missing a card or personal loan payment mostly damages your credit file and adds charges. Sorting your list into these two groups decides which bills are paid in full first and which go into any consolidation or management plan.

                ## Milestones
                1. Each debt on your list labelled priority or non-priority.
                2. Arrears on priority debts highlighted with the amount and the latest letter received.
                3. Priority payments and arrears catch-up amounts placed first in your budget.
                4. Your labelling checked with a debt adviser at the first appointment.

                ## Notes
                Which debts count as priority varies by country and by what your contract allows the creditor to do. Treat the split as a draft until an adviser confirms it. A debt management plan normally covers only non-priority debts.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every debt is labelled priority or non-priority, priority arrears are costed and the split has been confirmed by an adviser."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark each debt where missed payments could cost your home, energy or liberty"
                - "Note the arrears and latest letter date for every priority debt"
                - "Ask the adviser to confirm the priority list at your first appointment"
                - "Move priority payments to the top of your monthly budget"
            - name: Debt paperwork folder
              description: |-
                ## Purpose
                When a creditor disputes a balance or a collector writes about a debt you do not recognise, the person with the paperwork wins the argument. One folder, paper or digital, holding each credit agreement, the latest statement, every default notice and every letter about arrangements means you can answer any question from an adviser or creditor within minutes.

                ## Milestones
                1. One folder set up with a section for each creditor.
                2. The latest statement and any credit agreement filed for each debt.
                3. Default notices, arrears letters and collector letters filed in date order.
                4. Missing documents listed, with a request for copies sent to each creditor.

                ## Notes
                Scan paper letters on the day they arrive. A phone photo named with the creditor and date is enough.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder holds a section for every creditor on your list, each with the latest statement and all letters filed by date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create one folder section for each creditor on your list"
                - "File the latest statement and any agreement you hold for each debt"
                - "Gather loose letters from drawers and file them by date"
                - "Request copies of missing statements from each creditor"
            - name: Household income and expenditure statement
              description: |-
                ## Purpose
                Every debt solution, from a consolidation loan application to a creditor arrangement, rests on one document: an honest statement of what comes in and what must go out. Advisers and many creditors use a standard format with accepted allowances for food, travel and household costs, so building yours in that shape now means your figures are accepted rather than questioned.

                ## Milestones
                1. All household income listed, including benefits, maintenance and regular overtime.
                2. Essential spending listed by category using real figures from three months of statements.
                3. Priority debt payments and arrears catch-up amounts included.
                4. A monthly surplus or shortfall calculated at the bottom.
                5. The statement saved in a format you can send to an adviser or creditor.

                ## Notes
                Start from the **Monthly budget and bills** template. Do not trim food or travel to unrealistic figures to make the surplus look bigger: a plan built on a squeezed budget usually breaks within months.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A completed income and expenditure statement shows every income source, essential cost and priority payment, with a monthly surplus or shortfall figure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download three months of statements for every household account"
                - "List every source of income with the amount and how often it arrives"
                - "Total essential spending by category from the statements"
                - "Add priority debt payments and any arrears catch-up amounts"
                - "Work out the monthly surplus or shortfall"
            - name: Realistic monthly amount for unsecured creditors
              description: |-
                ## Purpose
                The surplus on your income and expenditure statement is the most you could pay, not what you should promise. Setting the figure slightly below it, with a small allowance for the costs that always turn up, gives a payment you can keep for years rather than one that fails in the third month and restarts the letters.

                ## Milestones
                1. Your raw monthly surplus taken from the income and expenditure statement.
                2. A small allowance kept back for irregular costs such as repairs and school trips.
                3. One monthly figure set for all non-priority creditors together.
                4. The figure tested by living on the budget for one full month before offering it.

                ## Notes
                If the surplus is very small or negative, say so to your adviser. Token payments or another route may suit better than a plan you cannot sustain.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One monthly figure for non-priority creditors is recorded below the calculated surplus and has been lived on for a full month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy the monthly surplus from your income and expenditure statement"
                - "Estimate a monthly allowance for irregular costs from last year's spending"
                - "Set one monthly figure for all non-priority creditors together"
                - "Live on the budget for a month before committing to the figure"
            - name: Pause on new credit applications
              description: |-
                ## Purpose
                People in debt often apply for several consolidation loans in one week, and each full application leaves a hard search on the credit file that makes the next lender more cautious. Agreeing with yourself to make no new credit applications until you have advice and a chosen route protects the options you will actually need.

                ## Milestones
                1. A written rule that no credit applications are made until advice is taken.
                2. Saved card details removed from shopping sites and apps.
                3. Pre-approved loan and card offers shredded unopened.
                4. Eligibility checked only with soft-search tools if a loan is being considered.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "No hard credit searches appear on your credit file between installing this area and choosing a debt route."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the no-new-credit rule at the top of your debt list"
                - "Remove saved card details from shopping sites and apps"
                - "Unsubscribe from loan and credit card marketing emails"
                - "Check your credit file for hard searches made in the last six months"
            - name: Holding letters to creditors while you get advice
              description: |-
                ## Purpose
                Calls and letters often speed up just when you are trying to work out a plan. A short letter or email to each non-priority creditor saying you are seeking free debt advice, with a request to hold collection activity for around 30 days, usually buys calm time without committing you to anything. Many creditors have a policy of pausing action when they hear advice is being sought.

                ## Milestones
                1. One holding letter drafted that can be adapted for each creditor.
                2. The letter sent to every non-priority creditor and collector on your list.
                3. The date sent and any reply recorded in your contact log.
                4. A diary note made for the day the holding period ends.

                ## Notes
                Keep paying priority debts during this time. Some countries also have a formal scheme that pauses interest and enforcement while you get advice; ask your adviser whether one applies to you.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A holding letter has been sent to every non-priority creditor, with dates and replies recorded in the contact log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft a short letter requesting 30 days to seek advice"
                - "Adapt the letter with each creditor's name and account reference"
                - "Send the letters by email or tracked post"
                - "Record the send date and any reply in your contact log"
            - name: First free debt advice appointment
              description: |-
                ## Purpose
                Free, regulated debt advice is available in most countries through charities and not-for-profit services, and it costs the person in debt nothing. A prepared appointment, with your debt list and income and expenditure statement ready, means the adviser spends the hour on options rather than on gathering numbers.

                ## Milestones
                1. A free, regulated debt advice service chosen and an appointment booked.
                2. Your debt list, income statement and recent letters sent or ready to share.
                3. A list of questions written before the appointment.
                4. The adviser's recommended options and next steps written down afterwards.

                ## Notes
                Start from the **Meeting notes** template. Check that the service is free and regulated before giving any details, because paid lead-generation websites often look like advice charities. In the UK, for example, StepChange, National Debtline and Citizens Advice are free.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An advice appointment has taken place and the adviser's recommended options and next steps are written in your notes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find two free, regulated debt advice services that operate where you live"
                - "Book the earliest appointment by phone, webchat or online tool"
                - "Send your debt list and income statement ahead if the service allows"
                - "Write down your questions about consolidation and management plans"
                - "Record the adviser's recommendations within a day of the appointment"
            - name: Choosing your debt route with the adviser
              description: |-
                ## Purpose
                Once the numbers are on the table, the choice usually comes down to a handful of routes: a consolidation loan, an informal arrangement you run yourself, a debt management plan run by a provider, or, if the debt is too large, a formal insolvency option. Comparing them side by side on monthly cost, total cost, length, credit file effect and risk to your home leads to a decision you can stand behind when doubts creep in later.

                ## Milestones
                1. Each route the adviser raised listed with its monthly cost and estimated length.
                2. Total amount repayable and credit file effect noted for each route.
                3. Risks to your home, job or assets written beside each one.
                4. One route chosen and the reasons written in two or three sentences.

                ## Notes
                If the adviser points towards bankruptcy or another formal option, that work belongs in a separate personal insolvency area. This project is complete once the route is chosen.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of at least three debt routes exists and one has been chosen with written reasons."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every route the adviser mentioned with its monthly cost"
                - "Add the likely length and total repayable for each route"
                - "Note the credit file and asset risks beside each route"
                - "Choose a route and write down why in a few sentences"
            - name: Monthly debt plan payment confirmation
              description: |-
                ## Purpose
                A debt management plan or consolidation loan only works if the single monthly payment leaves on time and, in a managed plan, actually reaches every creditor. A short monthly check after payday catches a failed direct debit or a creditor who was not paid before it turns into arrears and phone calls.

                ## Milestones
                1. The plan payment set up by direct debit or standing order just after payday.
                2. A monthly check confirming the payment left your account.
                3. Each creditor's share confirmed on the provider's statement or online account.
                4. Any missing distribution raised with the provider within a week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly checks record the plan payment leaving on time and each creditor receiving its share."
                cadence: rolling
              tasks:
                - "Set the plan payment to leave the day after your pay arrives"
                - "Confirm the plan payment left your account @recurring(monthly:4)"
                - "Check the provider statement shows each creditor was paid @recurring(monthly:22)"
                - "Raise any missing creditor payment with the provider straight away"
            - name: Creditor contact log
              description: |-
                ## Purpose
                Creditors, collectors and providers will say things on the phone that you need to rely on later: an agreed payment, a promise to freeze interest, a hold on action. A dated log of every call, letter and email, with the name of the person and what was agreed, turns those promises into evidence and makes complaints far easier if something goes wrong.

                ## Milestones
                1. A log set up with columns for date, creditor, contact name, channel and outcome.
                2. Every contact since starting this area entered.
                3. A weekly habit of opening creditor post and logging it.
                4. Agreements made on the phone confirmed in writing and noted in the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds a dated entry for every creditor contact, and each phone agreement has a written confirmation noted against it."
                cadence: rolling
              tasks:
                - "Set up the log with date, creditor, contact name, channel and outcome columns"
                - "Open creditor post and record each item in the log @recurring(weekly:sat)"
                - "Ask for written confirmation after every phone agreement"
                - "Note the call reference number at the end of every call"
            - name: Interest and charges freeze check
              description: |-
                ## Purpose
                Many creditors agree to freeze interest and charges once a debt management plan or reduced payment arrangement starts, but it is not guaranteed and it is sometimes quietly reapplied. Checking each statement for new interest or fees means you spot it in the first month, not after a year of payments that barely touched the balance.

                ## Milestones
                1. Each creditor's freeze status recorded as frozen or not frozen.
                2. A monthly check of statements for interest or charges added.
                3. Any unexpected charge raised in writing with the creditor or provider.
                4. Refunds of wrongly added charges recorded in the contact log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every creditor's latest statement has been checked for interest and charges within the last month, with any disputes raised in writing."
                cadence: rolling
              tasks:
                - "Record which creditors have agreed to freeze interest and charges"
                - "Check each statement for new interest or fees @recurring(monthly:18)"
                - "Write to any creditor that added charges after agreeing a freeze"
                - "Ask each frozen creditor to confirm the freeze in writing"
            - name: Consolidation loan balance log
              description: |-
                ## Purpose
                With a consolidation loan the debt becomes one balance, which makes progress easy to see but also easy to forget about. Recording the remaining balance, the payment and any overpayment each month shows exactly where you are against the original schedule and whether an early settlement figure is worth asking for.

                ## Milestones
                1. The loan's start balance, rate, term and monthly payment recorded.
                2. A monthly line added with the remaining balance.
                3. Any overpayments and early repayment charges noted.
                4. An early settlement figure requested once a year.

                ## Notes
                Start from the **Metrics log** template. Check the loan agreement for early repayment charges before overpaying.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log shows the consolidation loan balance recorded every month since the loan started, with any overpayments noted."
                cadence: rolling
              tasks:
                - "Copy the loan's start balance, rate, term and payment into the log"
                - "Record the remaining loan balance from the lender's app @recurring(monthly:12)"
                - "Find the early repayment charge in your loan agreement"
                - "Ask the lender for an early settlement figure once a year"
            - name: Monthly spending check against the agreed budget
              description: |-
                ## Purpose
                Your creditors accepted a plan payment because they saw your income and expenditure statement, and the plan only lasts if real spending stays close to it. Comparing last month's actual spending with the statement, line by line, shows early which category is creeping up before it pushes the plan payment into arrears.

                ## Milestones
                1. Last month's actual spending totalled by the same categories as the statement.
                2. Any category more than ten percent over its statement figure flagged.
                3. One adjustment chosen for each overspent category.
                4. Lasting changes noted for the next annual review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's actual spending is compared with the agreed statement, with overspent categories flagged and an adjustment noted."
                cadence: rolling
              tasks:
                - "Total last month's spending by the statement's categories @recurring(monthly:27)"
                - "Flag any category more than ten percent over its figure"
                - "Pick one fix for each overspent category"
                - "Note lasting changes to raise at the annual plan review"
            - name: Irregular costs pot inside the debt budget
              description: |-
                ## Purpose
                The most common reason debt plans fail is an ordinary bill nobody planned for: a car repair, a boiler service, school shoes, a birthday. Most income and expenditure formats allow a small monthly sum for these, and moving it into a separate pot each month means a surprise cost does not lead to a missed plan payment or a new credit card.

                ## Milestones
                1. A list of last year's irregular costs with rough amounts.
                2. A monthly allowance for them included in your expenditure statement.
                3. A separate savings pot opened with the allowance moving into it automatically.
                4. Each withdrawal from the pot noted with what it paid for.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A separate pot receives the irregular costs allowance every month and at least one unplanned cost has been paid from it without missing a plan payment."
                cadence: rolling
              tasks:
                - "List last year's irregular costs from bank statements"
                - "Include a monthly allowance for them in your expenditure statement"
                - "Open a separate savings pot for irregular costs"
                - "Move the irregular costs allowance into the pot @recurring(monthly:2)"
            - name: Change of circumstances reporting routine
              description: |-
                ## Purpose
                Debt plans are built on a snapshot of your income and costs, and life changes: a new job, reduced hours, a baby, a rent rise. Most providers and creditors expect to be told promptly, and reporting a drop in income early usually leads to a lower payment, while hiding it leads to arrears and a broken plan.

                ## Milestones
                1. A list of changes that should trigger a report written at the top of your plan notes.
                2. The provider's or creditors' preferred route for reporting changes recorded.
                3. A quarterly check of income and costs against the statement.
                4. Any change reported in writing with an updated income and expenditure statement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every material change in income or costs since the plan began has been reported in writing with an updated statement."
                cadence: rolling
              tasks:
                - "Write down the changes that would trigger a report to your provider"
                - "Find out how your provider wants changes reported"
                - "Compare current income and costs with the statement @recurring(quarterly)"
                - "Send an updated statement within two weeks of any big change"
            - name: Credit file check for arrangement markers
              description: |-
                ## Purpose
                During a debt plan each creditor keeps reporting the account to the credit reference agencies, often with an arrangement to pay marker or a default. Checking your file every quarter confirms that accounts show the agreed status, that consolidated debts show as settled and that nothing is reported twice after a debt is sold.

                ## Milestones
                1. Free access set up to your credit file with each main agency in your country.
                2. Each account on the file matched to a debt on your list.
                3. Incorrect statuses, duplicate entries and wrong balances listed.
                4. A dispute raised with the agency or creditor for every error found.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter the credit file is checked against the debt list, with every error disputed in writing."
                cadence: rolling
              tasks:
                - "Sign up for free credit file access with each main credit agency"
                - "Match each account on the file to a debt on your list"
                - "Review the file for wrong statuses and duplicate debts @recurring(quarterly)"
                - "Raise a dispute for each error you find"
            - name: Sold debts and new collector tracking
              description: |-
                ## Purpose
                Ownership of debts in a plan changes more often than people expect: they are sold to debt purchasers or passed to collection agencies, and each move brings new letters, new reference numbers and sometimes a request to set the arrangement up again. Tracking who owns each debt keeps payments going to the right place and stops you paying the same debt twice.

                ## Milestones
                1. Each debt on your list showing its current owner and reference number.
                2. Every notice of assignment or change of collector filed in the paperwork folder.
                3. Your provider or payment set-up updated for each change of owner.
                4. Each new owner's balance and arrangement confirmed in writing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every debt on the list shows its current owner and reference, and each ownership change is confirmed in writing."
                cadence: rolling
              tasks:
                - "Add a current owner column to your debt list"
                - "File every notice that a debt has been sold or passed on"
                - "Tell your provider about each new owner within a week"
                - "Ask each new owner to confirm the balance and arrangement in writing"
            - name: Annual debt plan review
              description: |-
                ## Purpose
                Most debt management providers review each plan once a year, and creditors expect it. Preparing a fresh income and expenditure statement, payslips and recent bills before the review means the payment is set on today's figures, which can mean a lower payment if costs have risen or a faster finish if income has grown.

                ## Milestones
                1. A new income and expenditure statement prepared from the last three months.
                2. Payslips, benefit letters and main bills gathered as evidence.
                3. The review completed with the provider or with each creditor.
                4. The new monthly payment and expected end date recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An annual review has been completed on a fresh statement, with the new payment and end date recorded."
                cadence: cyclic
              tasks:
                - "Book the annual review date with your provider @recurring(yearly)"
                - "Update the income and expenditure statement from fresh bank statements"
                - "Gather payslips, benefit letters and main bills"
                - "Record the new payment and the expected end date"
            - name: How debt management plans work
              description: |-
                ## Purpose
                A debt management plan is an informal agreement: you make one affordable monthly payment to a provider, who shares it between your non-priority creditors. Creditors are not legally bound to accept it or to freeze interest, the plan usually lasts until everything is repaid, and it shows on your credit file. Knowing these basics before you sign up prevents surprises in year two.

                ## Milestones
                1. The difference between a debt management plan and a formal insolvency option explained in your own words.
                2. What creditors can and cannot be asked to agree written down.
                3. How a plan affects your credit file and future borrowing noted.
                4. Remaining questions listed for the adviser or provider.

                ## Notes
                Plans run by free, not-for-profit providers cost nothing. Fee-charging firms keep part of each payment, which lengthens the plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary covers how plans work, creditor acceptance, credit file effect and fees, with open questions listed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the debt management plan guide from a free advice service"
                - "Write a one-page summary of how plans work"
                - "Note how a plan will show on your credit file"
                - "List questions for your adviser or provider"
            - name: What a consolidation loan really costs
              description: |-
                ## Purpose
                Consolidation loans are sold on a lower monthly payment, but that often comes from stretching the debt over more years, so the total repaid can rise. Learning to read the representative rate, the rate you are personally offered, the total amount repayable and any fees or early repayment charges lets you judge an offer on cost rather than on the monthly figure.

                ## Milestones
                1. Representative rate, personal rate and total amount repayable explained in your own words.
                2. The difference between secured and unsecured consolidation written down.
                3. Arrangement fees and early repayment charges listed as items to check on any offer.
                4. A worked example comparing two loan terms for the same amount.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example shows the total repaid on two loan terms for your debt total, with secured and unsecured risks noted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read how representative and personal loan rates differ"
                - "Work out the total repaid on a three-year and a six-year term"
                - "Write down how secured and unsecured consolidation differ"
                - "List the fees and charges to check on any loan offer"
            - name: Reading arrears letters and default notices
              description: |-
                ## Purpose
                Letters from creditors follow standard formats with legal weight, and the difference between a reminder, an arrears notice, a default notice and a letter before claim decides how quickly you need to act. Learning which is which, and what deadline each one sets, means you respond on time and bring the right letter to your adviser.

                ## Milestones
                1. The main letter types your creditors send identified, with an example of each from your folder.
                2. The deadline each letter type sets noted.
                3. A rule written for which letters go to the adviser the same week.
                4. Every current letter in your folder labelled by type.

                ## Notes
                A court claim form always needs action within a short deadline. Contact your adviser the day it arrives.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every letter in the paperwork folder is labelled by type, with any response deadline written beside it."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Sort your creditor letters into reminders, arrears notices, defaults and claims"
                - "Look up what each letter type means in a free advice service guide"
                - "Write the response deadline beside each current letter"
                - "Ask the agent to explain any letter you do not understand in plain words"
            - name: What debt collectors can and cannot do
              description: |-
                ## Purpose
                Collection agencies and debt purchasers have to follow rules on how often they contact you, what they can say and whether they can visit. Knowing the rules where you live lets you ask for contact in writing only, recognise harassment and complain with confidence instead of agreeing to payments you cannot afford just to stop the calls.

                ## Milestones
                1. The main rules on collector contact in your country summarised on one page.
                2. A written request for contact by letter or email only sent to each collector.
                3. Examples of unacceptable behaviour listed for reference.
                4. The complaints route for collectors noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of collector rules exists and each collector has received a request to contact you in writing."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the collector conduct guide from your regulator or an advice service"
                - "Summarise the rules on contact, visits and pressure on one page"
                - "Ask each collector in writing to contact you by letter or email only"
                - "Note where to complain about a collector"
            - name: Creditor phone call script and practice
              description: |-
                ## Purpose
                Phone calls with creditors are where people agree to payments they cannot keep, usually because the call caught them off guard. A short script, your income and expenditure statement in front of you and a rule never to agree a figure above your plan amount turns a stressful call into a five-minute exchange.

                ## Milestones
                1. A one-page call script written with your opening, your offer and your limit.
                2. Your income and expenditure statement kept beside the phone for calls.
                3. Two practice runs of the script done with a friend or out loud.
                4. Every real call logged with what was agreed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written call script exists, has been rehearsed twice and was used on at least one real creditor call."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a script with your situation, your offer and your limit"
                - "Add a line asking for any agreement to be confirmed in writing"
                - "Rehearse the script out loud twice"
                - "Use the script on your next creditor call"
            - name: Spotting fee-charging firms and lookalike advice sites
              description: |-
                ## Purpose
                Search for debt help and the first results are often paid adverts for firms that charge set-up and monthly fees, or lead-generation sites that sell your details on. Learning to check whether a service is free, regulated and not-for-profit before giving any information protects both your money and your data.

                ## Milestones
                1. Three checks written down for telling free advice from a fee-charging firm.
                2. The financial regulator's public register found for your country.
                3. Every service you have contacted checked against the register.
                4. Any unwanted firm that holds your details asked to delete them.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every debt service you have contacted has been checked against the regulator's register and labelled free or fee-charging."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three checks for whether a debt service is free and regulated"
                - "Find the financial regulator's public register for your country"
                - "Check every service you have contacted against the register"
                - "Ask any unwanted firm to delete the details you gave them"
            - name: Asking a creditor to prove an old debt
              description: |-
                ## Purpose
                Collectors sometimes chase debts that are years old, already paid, or with balances that no longer match any statement. Asking in writing for a copy of the credit agreement and a statement of account is a normal right in many countries, and the reply tells you and your adviser whether the debt belongs in your plan at that figure.

                ## Milestones
                1. Debts that are old, unfamiliar or with disputed balances listed.
                2. A written request for the agreement and statement of account sent for each.
                3. Each reply filed and the balance compared with your own records.
                4. Your adviser's view recorded on whether to include, dispute or query each debt.

                ## Notes
                Rules on old debts and time limits differ a lot between countries. Do not acknowledge or pay an old debt you dispute before speaking to an adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each disputed or unfamiliar debt has a written request for proof on file, with the reply and the adviser's view recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List any debt you do not recognise or whose balance looks wrong"
                - "Send a written request for the agreement and a statement of account"
                - "Compare each reply with your own statements"
                - "Ask your adviser whether each disputed debt belongs in the plan"
            - name: Consolidation loan shortlist using soft searches
              description: |-
                ## Purpose
                If the adviser agrees a consolidation loan could work, the next risk is applying blind and being declined. Eligibility checkers that use a soft search show your likely approval and rate without marking your file, so a shortlist of two or three lenders built that way means only one full application.

                ## Milestones
                1. Two or three soft-search eligibility tools used with the same loan amount and term.
                2. Lenders with a high approval chance shortlisted with their personal rate.
                3. Total amount repayable and fees compared for each shortlisted lender.
                4. One lender chosen for a single full application.

                ## Notes
                Start from the **Purchase decision** template. A loan that covers only part of your debts leaves you with some old payments plus a new one.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist of at least two lenders from soft-search checks exists, with total repayable compared and one lender chosen."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Run your debt total through two soft-search eligibility checkers"
                - "Shortlist lenders showing a high approval chance"
                - "Compare the total repayable and fees for each shortlisted loan"
                - "Choose one lender for a single full application"
            - name: Total cost test for consolidating
              description: |-
                ## Purpose
                Before signing, put the consolidation loan beside what you pay now: the remaining cost of each existing debt if you kept paying it, against the total repayable on the new loan. If the loan costs more overall, the lower monthly payment is being bought with extra years and interest, and that is a trade to make knowingly.

                ## Milestones
                1. Remaining total cost of each existing debt estimated at current payments.
                2. The new loan's total repayable and fees set beside it.
                3. The difference in total cost and in months to debt-free calculated.
                4. A go or no-go decision recorded with the reason.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of current total cost and consolidation total cost exists, with a recorded go or no-go decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate what each existing debt will cost in total at current payments"
                - "Set the loan's total repayable and fees beside that figure"
                - "Compare the months to debt-free for both options"
                - "Record a go or no-go decision with the reason"
            - name: Secured consolidation against your home
              description: |-
                ## Purpose
                Homeowners are often offered a secured loan or extra mortgage borrowing to clear unsecured debts, usually at a lower rate and over a much longer term. It turns debts that could only damage your credit file into debt secured on your home, so the decision needs independent advice, a total cost comparison and a clear view of what happens if payments stop.

                ## Milestones
                1. The secured offer's rate, term, fees and total repayable written down.
                2. The total cost compared with keeping the debts unsecured.
                3. The consequences of missing payments on the secured loan noted.
                4. The decision discussed with a debt adviser and, for the borrowing itself, a regulated mortgage adviser.
                5. A decision recorded with the advisers' views.

                ## Notes
                A free debt adviser can explain the risk to your home; advice on the borrowing itself needs a regulated mortgage or lending adviser.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on secured consolidation exists, with total costs compared and an adviser's view recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note the secured offer's rate, term, fees and total repayable"
                - "Compare it with the total cost of keeping the debts unsecured"
                - "Ask an adviser what happens if secured payments are missed"
                - "Record your decision and the adviser's view"
            - name: Choosing a debt management plan provider
              description: |-
                ## Purpose
                Two plans with the same monthly payment can last very different lengths of time, because fee-charging providers keep part of each payment. Comparing providers on fees, regulation, how they handle creditors who refuse and how easy they are to reach puts more of your money towards the debts themselves.

                ## Milestones
                1. At least two regulated providers compared, including a free not-for-profit one.
                2. Set-up and monthly fees listed for each.
                3. How each provider handles creditors that refuse the plan noted.
                4. A provider chosen and its terms filed in the paperwork folder.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider has been chosen after comparing at least two, with fees and terms filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist two regulated providers including one free not-for-profit service"
                - "Ask each provider about set-up and monthly fees"
                - "Ask how each provider handles creditors who refuse the plan"
                - "Choose a provider and file its terms"
            - name: Self-arranged reduced payment offers
              description: |-
                ## Purpose
                Some people prefer to run their own arrangement, writing to each non-priority creditor with an income and expenditure statement and a reduced monthly offer. It costs nothing, keeps you in direct contact with each creditor and works well with two or three creditors, though it takes more admin than a managed plan.

                ## Milestones
                1. A fair share of your monthly figure worked out for each creditor.
                2. An offer letter with your statement sent to each non-priority creditor.
                3. Each creditor's reply recorded as accepted, refused or countered.
                4. Payments set up for every accepted arrangement.

                ## Notes
                Pay the offered amount from the first month, even before a reply. It shows good faith and is hard for a creditor to call unreasonable.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every non-priority creditor has received a written offer with your statement, and payments are set up for each accepted one."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Work out each creditor's fair share of your monthly figure"
                - "Ask the agent to draft an offer letter that encloses your statement"
                - "Send each creditor its offer with the statement attached"
                - "Record each reply as accepted, refused or countered"
                - "Start paying the offered amount from the first month"
            - name: Interest and charges freeze request
              description: |-
                ## Purpose
                Interest added each month can swallow a reduced payment entirely, so the balance never shrinks. Asking each creditor in writing to freeze interest and charges, with your income and expenditure statement as evidence, is standard practice in arrangements and is often granted when the statement shows a genuine shortfall.

                ## Milestones
                1. A freeze request written for each creditor still adding interest.
                2. Each request sent with your income and expenditure statement.
                3. Replies recorded as agreed, refused or partly agreed.
                4. Refusals followed up once with a second request or raised with your adviser.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every creditor still adding interest has received a written freeze request, with each reply recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each creditor still adding interest or charges"
                - "Write a freeze request that refers to your statement"
                - "Send each request and note the date"
                - "Follow up any refusal with a second request or through your adviser"
            - name: Full and final settlement offer to one creditor
              description: |-
                ## Purpose
                Lump sums from savings, a bonus or a family gift can sometimes clear a debt for less than the full balance, if the creditor agrees in writing to accept it in full and final settlement. Getting that agreement before paying, and checking how the settled account will show on your credit file, stops a part-payment being treated as just another instalment.

                ## Milestones
                1. The creditor and the amount you can afford to offer chosen.
                2. A written offer sent stating it is in full and final settlement.
                3. The creditor's written acceptance received before any payment.
                4. Payment made and a letter confirming the account is settled filed.

                ## Notes
                Never pay a settlement on the strength of a phone call. Ask your adviser before using money needed for priority debts or an emergency buffer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written acceptance of a full and final settlement is filed before payment, followed by a letter confirming the account is settled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose which creditor to approach and how much you can offer"
                - "Send a written offer marked full and final settlement"
                - "Wait for written acceptance before sending any money"
                - "File the creditor's letter confirming the account is settled"
            - name: Closing the accounts a consolidation loan cleared
              description: |-
                ## Purpose
                Clearing three cards with a loan and then slowly spending on them again is the classic consolidation trap, and it leaves four debts where there used to be three. Closing or sharply limiting each account the loan paid off, on the day the balance reaches zero, keeps the consolidation doing what it was meant to do.

                ## Milestones
                1. Each account paid off by the loan confirmed at a zero balance.
                2. Every cleared account closed or its limit cut to the lowest level.
                3. Cards for closed accounts destroyed and removed from digital wallets.
                4. A closure letter filed for each account.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every account cleared by the consolidation loan is closed or reduced to its lowest limit, with a closure letter filed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm each cleared account shows a zero balance"
                - "Close each cleared account or cut its limit to the minimum"
                - "Cut up closed cards and remove them from digital wallets"
                - "File each closure letter in the paperwork folder"
            - name: Going back to the adviser when the plan stalls
              description: |-
                ## Purpose
                Signs that a plan has stopped working are easy to explain away: a missed payment covered by a credit card, a balance that has barely moved in a year, creditors refusing to freeze interest. Setting clear triggers in advance, and returning to the adviser when one is hit, means a change of route happens in month four rather than year three.

                ## Milestones
                1. Three or four triggers written that mean the plan needs a rethink.
                2. Each trigger checked at the quarterly change of circumstances review.
                3. A new advice appointment booked within a fortnight of any trigger being hit.
                4. The adviser's revised recommendation recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written triggers exist, and any trigger hit has been followed by an advice appointment within two weeks."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the triggers that mean your plan needs a rethink"
                - "Add the triggers to your quarterly circumstances check"
                - "Book a new advice appointment within a fortnight of a trigger"
                - "Record the adviser's revised recommendation"
            - name: Debt management plan first month set-up
              description: |-
                ## Purpose
                The first month of a debt management plan is busy: signing the agreement, cancelling old payments to creditors, setting up the single plan payment and waiting for each creditor to accept. Treating it as a short project with a checklist avoids the common mistake of paying a creditor twice, or not at all, in the changeover month.

                ## Milestones
                1. The plan agreement signed and a copy filed.
                2. Old direct debits and standing orders to plan creditors cancelled.
                3. The first plan payment made on the agreed date.
                4. An acceptance or reply recorded for every creditor in the plan.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The plan agreement is filed, old creditor payments are cancelled and the first plan payment has been made on time."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read and sign the plan agreement and file a copy"
                - "Cancel old direct debits to every creditor now in the plan"
                - "Make the first plan payment on the agreed date"
                - "Record each creditor's acceptance as it arrives"
            - name: Consolidation loan payout day
              description: |-
                ## Purpose
                Whether the lender pays your creditors directly or the money lands in your own account, payout day decides whether consolidation actually happens. Paying every listed debt the same day, then confirming each balance is zero, closes the window in which the money gets spent on something else.

                ## Milestones
                1. Settlement figures obtained for every debt the loan will clear.
                2. The loan funds received or the lender's direct payments confirmed.
                3. Every listed debt paid on the day the funds arrive.
                4. A zero balance confirmed on each account within a week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every debt the loan was taken to clear shows a zero balance within a week of the funds arriving."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each debt the loan will pay off"
                - "Ask each creditor for a settlement figure valid on the payout date"
                - "Pay every listed debt on the day the funds arrive"
                - "Confirm a zero balance on each account within a week"
            - name: Responding to a court claim form in time
              description: |-
                ## Purpose
                If a creditor issues a court claim, the paperwork sets a short deadline to respond, and missing it can lead to a judgment entered without your side being heard. Contacting a free debt adviser the day the claim arrives, and logging the deadline, keeps options such as an instalment offer open.

                ## Milestones
                1. The claim form filed and the response deadline written in your calendar.
                2. A free debt adviser contacted within two working days of the claim arriving.
                3. The response sent before the deadline in the way the adviser recommends.
                4. Proof of sending and any reply from the court filed.

                ## Notes
                Court rules and forms differ between countries. This project is about not missing the deadline; what to say in the response is a question for your adviser.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A response to the claim was sent before the deadline, with proof of sending filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the response deadline from the claim form in your calendar"
                - "Contact a free debt adviser within two working days"
                - "Send the response the adviser recommends before the deadline"
                - "File proof of sending and any reply from the court"
            - name: Final payment and closing letters
              description: |-
                ## Purpose
                Reaching the last payment of a plan or loan is a big day, but the admin is not finished until every creditor confirms the debt is cleared and your credit file reflects it. Collecting paid-in-full or settled letters and checking the file three months later makes sure nothing resurfaces years later.

                ## Milestones
                1. The final payment made to the provider, lender or each creditor.
                2. A paid-in-full or settled letter received from every creditor.
                3. The plan payment and any old direct debits cancelled.
                4. Your credit file showing each account as satisfied or settled three months later.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A paid-in-full or settled letter is filed for every creditor and the credit file shows each account as satisfied."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the date and amount of your final payment with the provider"
                - "Request a paid-in-full or settled letter from each creditor"
                - "Cancel the plan payment once the final payment has cleared"
                - "Check your credit file three months after the final payment"
            - name: Redirecting the old debt payment after the plan ends
              description: |-
                ## Purpose
                After years of paying a fixed sum to creditors, the freed-up amount is the easiest money you will ever save, because you are already living without it. Moving it straight into an emergency fund and savings pots on the first payday after the plan ends stops it being absorbed into everyday spending.

                ## Milestones
                1. The freed monthly amount confirmed once the final payment has cleared.
                2. A split decided between an emergency buffer, sinking funds and other goals.
                3. A standing order set up on payday for the freed amount.
                4. Three months completed with the freed amount saved.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A standing order moves the full freed amount into savings, and three consecutive months have been saved."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Write down the monthly amount your plan payment used to take"
                - "Decide how to split it between a buffer and savings pots"
                - "Set up a standing order on payday for the freed amount"
                - "Check the freed amount reached savings @recurring(monthly:6)"
            - name: Couple's plan for joint and separate debts
              description: |-
                ## Purpose
                Couples often hold a mix of joint debts, where each person is liable for the full amount, and debts in one name only. Mapping whose name is on each debt, preparing a joint income and expenditure statement and deciding between one joint plan and two single plans keeps the arrangement fair and avoids one partner's credit file carrying the other's decisions.

                ## Milestones
                1. Each debt labelled joint, yours or your partner's.
                2. A joint household income and expenditure statement agreed.
                3. A decision on a joint plan or two single plans recorded with the adviser's view.
                4. A monthly money conversation held to check the plan together.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every debt is labelled by name, a joint statement is agreed and the choice of joint or single plans is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Label each debt as joint, yours or your partner's"
                - "Prepare one household income and expenditure statement together"
                - "Ask the adviser whether a joint plan or two single plans fits"
                - "Hold a short plan check-in together @recurring(monthly:8)"
            - name: Debt plan on self-employed income
              description: |-
                ## Purpose
                Freelancers and sole traders find fixed plan payments hard because income arrives in lumps and tax bills land once or twice a year. Basing the plan on a twelve-month average, keeping a tax pot separate from the plan budget and warning the provider about quiet months gives creditors a figure you can actually keep.

                ## Milestones
                1. Twelve months of business income averaged after business costs.
                2. A tax set-aside separated before the plan figure is worked out.
                3. The plan payment set from the average, not the best month.
                4. A buffer held that covers the plan payment through one quiet month.

                ## Notes
                Business debts and personal debts may be treated differently. Tell the adviser which debts relate to the business.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The plan payment is set from a twelve-month average after tax set-aside, with a buffer covering one month's payment."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Average the last twelve months of income after business costs"
                - "Work out a monthly tax set-aside before setting the plan figure"
                - "Move one month's plan payment into a buffer"
                - "Move income above the average into the buffer or tax pot @recurring(monthly:25)"
            - name: Unsecured debts on a pension income
              description: |-
                ## Purpose
                Retirees paying off cards or loans on a fixed pension face a different calculation: income is unlikely to rise, and some debts may outlast any realistic plan length. An adviser can check whether reduced payments, a management plan or another route is fairest, and whether any pension-age support is being missed.

                ## Milestones
                1. All pension and other retirement income listed in the income and expenditure statement.
                2. The likely length of a plan at the affordable payment worked out.
                3. The adviser asked whether a plan of that length is realistic.
                4. A check for missed pension-age support completed alongside the debt advice.

                ## Notes
                Ask the adviser before taking a pension lump sum to clear unsecured debt. It can affect tax and any means-tested support.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The adviser's recommended route for pension-age debt is recorded, with the plan length and support check result."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every pension and income source with amounts"
                - "Work out how long a plan would last at the affordable payment"
                - "Ask the adviser whether that length is realistic for you"
                - "Recheck the plan payment when pensions rise each year @recurring(yearly)"
            - name: Debt plan with children's costs built in
              description: |-
                ## Purpose
                Parents often underestimate what children cost when filling in an income and expenditure statement, then find the plan breaks every September or at birthdays. Building in realistic figures for school costs, clubs, clothes and childcare, using the allowances advisers accept, keeps the plan payment honest and the household fed.

                ## Milestones
                1. Every child-related cost listed with a monthly equivalent.
                2. School year and holiday spikes spread across twelve months.
                3. Child costs included in the income and expenditure statement before the plan figure is set.
                4. A yearly check of child costs made ahead of the new school year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The income and expenditure statement includes monthly figures for every child cost, with school and holiday spikes spread across the year."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List every child cost from school trips to shoes and clubs"
                - "Convert yearly and termly costs into monthly figures"
                - "Add the child costs to your income and expenditure statement"
                - "Update child costs before the new school year @recurring(yearly)"
            - name: Health evidence for creditors
              description: |-
                ## Purpose
                Mental or physical health problems can make dealing with creditors much harder, and many creditors have specialist teams who can pause action or agree lower payments once they know. Providing evidence from a health professional, in the format your adviser recommends, means creditors treat you as a customer who needs extra support rather than as a missed payment.

                ## Milestones
                1. Creditors with specialist support teams identified.
                2. A health evidence form or letter requested through your adviser or doctor.
                3. The evidence sent to each creditor you choose to tell, with consent for it to be recorded.
                4. Any change in how each creditor treats the account noted in the contact log.

                ## Notes
                You choose what to share. Ask each creditor how health information will be stored and used. A doctor may charge for a letter; your adviser can tell you whether a free route exists.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Health evidence has reached every creditor you chose to tell, with each creditor's response recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your adviser which health evidence format creditors accept"
                - "Request the evidence from your doctor or health worker"
                - "Send the evidence to each creditor you choose to tell"
                - "Record how each creditor changes its approach afterwards"
            - name: Helping a family member set up a debt plan
              description: |-
                ## Purpose
                Adult children, partners and carers are often the first to notice a relative's unopened post and mounting calls. Helping them book advice, gather paperwork and give written permission for you to speak to creditors on their behalf supports them without taking the debt on yourself.

                ## Milestones
                1. Your relative's agreement recorded, with the help they want from you.
                2. Written third-party authority given to each creditor or provider.
                3. An advice appointment booked with your relative present.
                4. A monthly session arranged to go through post together.

                ## Notes
                Do not sign anything that makes you liable for their debts, and think through what paying any of their debts would mean for your own budget before offering.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Written third-party authority is in place with each creditor and your relative has attended a debt advice appointment."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree with your relative what help they want from you"
                - "Send each creditor a signed third-party authority letter"
                - "Book a debt advice appointment your relative can attend with you"
                - "Open and sort their creditor post together @recurring(monthly:14)"
            - name: Pro-rata payment schedule for a self-managed plan
              description: |-
                ## Purpose
                Running your own plan with five or more creditors means dividing one payment fairly every month and keeping track of who has accepted what. A schedule that gives each creditor a share in proportion to its balance, recalculated when a debt is cleared or settled, is the method providers use and is hard for any creditor to call unfair.

                ## Milestones
                1. Each creditor's percentage of the total non-priority debt calculated.
                2. Monthly payment amounts set from those percentages.
                3. Payments to every creditor scheduled for the day after payday.
                4. The schedule recalculated whenever a creditor is cleared or settled.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A pro-rata schedule covers every creditor, payments follow it each month and it is recalculated after any debt clears."
                cadence: rolling
              tasks:
                - "Calculate each creditor's percentage of the total non-priority debt"
                - "Set each monthly payment from that percentage"
                - "Pay each creditor its share the day after payday @recurring(monthly:1)"
                - "Recalculate the shares when any debt is cleared"
            - name: Group settlement after a lump sum
              description: |-
                ## Purpose
                Redundancy pay, an inheritance or another windfall partway through a plan can sometimes clear several debts at once for less than their balances. Offering each creditor the same proportion of its balance, with written acceptance before any money moves, is a specialist step most people take with their provider or adviser.

                ## Milestones
                1. The lump sum confirmed, with any part needed for priority debts or a buffer set aside.
                2. The same percentage offer worked out for each remaining creditor.
                3. Offers sent through your provider or in writing, marked full and final.
                4. Written acceptances received before payment and settled letters filed afterwards.

                ## Notes
                Talk to your adviser before using a windfall this way. Keeping some of it as an emergency buffer often matters more than settling every debt.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Settlement offers have gone to every remaining creditor, with written acceptances filed before any payment."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Set aside the part of the lump sum needed for priority debts and a buffer"
                - "Work out one percentage offer to apply to every remaining creditor"
                - "Send the offers through your provider or in writing"
                - "Pay only the creditors who have accepted in writing"
            - name: Unaffordable lending complaints
              description: |-
                ## Purpose
                Some debts in a plan come from loans or credit limit increases that a lender should never have granted on the income you had at the time. Many countries let you complain that lending was unaffordable, and a successful complaint can remove interest and charges or reduce the balance, which shortens the plan.

                ## Milestones
                1. Debts where the lender may not have checked affordability properly listed.
                2. Your income and existing debts at the time of each loan reconstructed from old statements.
                3. A complaint sent to each lender with the evidence.
                4. Each final response recorded and escalated to the ombudsman where appropriate.

                ## Notes
                You do not need a claims firm. Complaints are free to make directly, and claims firms take a share of any refund.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written complaint with evidence has been sent for each suspect loan and each final response is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List loans and limit increases granted when you were already struggling"
                - "Reconstruct your income and debts at each date from old statements"
                - "Ask the agent to draft a complaint letter from your timeline"
                - "Record each lender's final response and the escalation deadline"
            - name: Ombudsman complaint about creditor treatment
              description: |-
                ## Purpose
                When a creditor or collector refuses a reasonable arrangement, adds charges after agreeing a freeze or ignores health evidence, the complaints process exists for exactly that. Complaining to the firm first, then to the financial ombudsman service in your country if the reply is poor, can correct the account and sometimes brings compensation.

                ## Milestones
                1. The issue set out in a short timeline with dates and evidence from your contact log.
                2. A formal complaint sent to the firm.
                3. The firm's final response, or the deadline for it, recorded.
                4. The case referred to the ombudsman if the response is unfair or late.
                5. The outcome recorded and the account updated.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A formal complaint has been made to the firm and, if unresolved, referred to the ombudsman, with the outcome recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a dated timeline of what went wrong from your contact log"
                - "Send a formal complaint to the firm by email or letter"
                - "Note the date by which the firm must reply"
                - "Refer the complaint to the ombudsman if the reply is unfair or late"
---

# Debt Consolidation & Management Plans

This area is for anyone whose debts have grown past what normal payments can clear, and who wants to combine them into one payment, agree new terms with creditors or enter a debt management plan with help from a free advice service. It starts with the foundations (a full list of debts, priority debts sorted, an honest income and expenditure statement and a first advice appointment), then the monthly routines that keep a plan running, the knowledge that makes letters, loans and collectors less daunting, the decisions about loans, providers and offers, the key dates from set-up to the final payment, versions for couples, the self-employed, retirees, parents and helpers, and finally the specialist work of pro-rata schedules, settlements and complaints.

What repeats is a monthly check that the plan payment left and reached every creditor, a Saturday look through creditor post, monthly statement checks for interest and loan balances, a monthly spending check against the agreed budget, a quarterly circumstances and credit file review and the annual plan review. The Monthly budget and bills, Meeting notes, Metrics log and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
