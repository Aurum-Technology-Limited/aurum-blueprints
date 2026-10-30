---
id: finance-accounting.employee-expense-management
name: Employee Expense Management
description: "A written expense policy, company cards with clear rules, receipts captured weekly, approvals that move and reimbursements paid on a fixed day, so staff spending is controlled and claims are paid fast."
category: business
version: 1.0.0
tags: [finance-accounting, employee-expense-management, small-business, team, enterprise, company-cards, receipts, reimbursements]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - trip
    - remediation-plan
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Employee Expense Management
          description: "Running expense policies, company cards, receipt capture, approvals and reimbursements so staff spending is controlled and claims are paid quickly."
          projects:
            - name: Map of how staff spend company money
              description: |-
                ## Purpose
                Before any policy or tool, someone needs to know every way money leaves the business through people rather than through supplier bills: personal cards claimed back, company cards, petty cash, fuel cards, travel booked by an assistant, subscriptions on someone's own card. Listing each route with who uses it and roughly how much passes through it in a month shows where receipts go missing and which routes nobody approves.

                ## Milestones
                1. Every route by which staff spend company money listed, with the people who use it.
                2. A rough monthly value and transaction count against each route, taken from the last three months of records.
                3. Routes with no approval step or no receipt requirement marked.
                4. The map reviewed with the owner or finance lead and kept with the policy draft.

                ## Notes
                Ask three people from different teams how they last paid for something work-related. Their answers usually include a route the finance side never counted.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page map lists every staff spending route with its users, monthly value and gaps in approval or receipts, reviewed by the finance lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every card, cash float and claim route staff use for work spending"
                - "Pull three months of claims and card statements to estimate value per route"
                - "Mark each route that has no approver or no receipt rule"
                - "Ask three staff from different teams how they last paid for work costs"
                - "Walk the owner or finance lead through the finished map"
            - name: One-page staff expense policy
              description: |-
                ## Purpose
                Claims get argued over when the rules live in people's heads: is a taxi home after a late meeting allowed, does a client lunch need the guest's name, what happens to a lost receipt. A short written policy covering what is claimable, the limits, the evidence needed, the deadline and who approves turns those arguments into a link people can be sent.

                ## Milestones
                1. A policy of no more than two pages covering claimable items, limits, evidence, deadlines and approval.
                2. A clear list of items the business will not reimburse.
                3. The policy checked by whoever advises the business on tax and employment terms.
                4. The policy signed off by the owner or finance director and dated.
                5. Every member of staff sent the policy and asked to confirm they have read it.

                ## Notes
                Write for the person on a train with a receipt in hand. Plain sentences and examples beat legal language, and a policy nobody reads protects no one.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed, dated expense policy of two pages or fewer has been sent to all staff and at least 90 percent have confirmed reading it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the ten expense questions staff ask most often"
                - "Draft a two-page policy that answers each of those questions"
                - "List the items the business will never reimburse"
                - "Ask your accountant or adviser to check the draft for tax issues"
                - "Get the owner or finance director to sign and date the policy"
                - "Send the policy to all staff and ask each person to confirm reading it"
            - name: Expense types mapped to ledger accounts
              description: |-
                ## Purpose
                Staff should pick from a short list of plain expense types such as train fares, hotels, client meals and software, not from a chart of accounts with ninety codes. Mapping each type to one ledger account and one tax code means claims post to the right place without finance recoding every line at month end.

                ## Milestones
                1. A list of 12 to 20 expense types written in the words staff use.
                2. Each type mapped to exactly one ledger account and a default tax code.
                3. Types that need extra detail, such as attendee names for meals, flagged.
                4. The mapping loaded into the expense tool or claim form and tested with five sample claims.

                ## Notes
                Resist adding a type for every edge case. An 'other' type that needs a written explanation catches the rest and shows you which new type is genuinely needed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every expense type staff can choose maps to one ledger account and tax code, and five test claims posted correctly without recoding."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export last year's expense postings by ledger account"
                - "Write the 12 to 20 expense types staff will choose from"
                - "Map each type to one ledger account and a default tax code"
                - "Flag the types that need attendees, mileage or a project reference"
                - "Test the mapping with five real claims from last month"
            - name: Expense approval routes and limits
              description: |-
                ## Purpose
                Approval is where most expense delays and most expense losses happen: claims sit with a manager on holiday, or a director approves their own dinner. Writing down who approves each person's claims, what value needs a second approver and who covers absences gives every claim a route before it is submitted.

                ## Milestones
                1. Every claimant matched to a named approver, normally their line manager.
                2. Value thresholds set above which a second approver or finance review is needed.
                3. A rule that nobody approves their own claims, with a named approver for directors and the owner.
                4. Cover approvers named for holidays and absences.
                5. The routes entered in the expense tool or written on the claim form.

                ## Notes
                Keep the thresholds consistent with your wider authority limits, so a claim never needs less sign-off than an equivalent purchase order.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every claimant has a named approver and cover, no one can approve their own claim, and second-approval thresholds are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every claimant with their line manager from the staff list"
                - "Set the claim value above which a second approver is needed"
                - "Name who approves the claims of directors and the owner"
                - "Name a cover approver for each approver"
                - "Enter the approval routes in the expense tool or on the claim form"
            - name: Valid receipt standard and lost receipt form
              description: |-
                ## Purpose
                A card slip showing only a total proves money was spent but not what it bought, and in many countries it will not support a sales tax reclaim. Defining what a valid receipt shows, and offering a short signed declaration for the genuinely lost ones, stops finance rejecting claims case by case and gives staff a clear bar to meet.

                ## Milestones
                1. A written standard listing what a valid receipt must show: supplier, date, items, amount and tax details.
                2. Examples of acceptable and unacceptable receipts collected on one page.
                3. A lost receipt declaration with a value cap and a limit on how often one person can use it.
                4. The standard and the declaration added to the expense policy.

                ## Notes
                Check whether your tax authority accepts photographed or scanned receipts in place of paper. Most now do, which means paper can be thrown away once captured.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A receipt standard with examples and a capped lost receipt declaration are both written into the published expense policy."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect five rejected or queried receipts from recent claims"
                - "Write what a valid receipt must show under your tax rules"
                - "Draft a lost receipt declaration with a value cap"
                - "Decide how many declarations one person may use each year"
                - "Add the standard and the declaration to the expense policy"
            - name: Fixed reimbursement day and payment route
              description: |-
                ## Purpose
                People who are out of pocket for a hotel or flights notice every day the money is late, and ad hoc reimbursements eat finance time. Choosing one fixed payment day each week or fortnight, and deciding whether claims are paid through the supplier payment run or with salary, sets an expectation people can plan around.

                ## Milestones
                1. A decision recorded on paying claims through the payment run or through payroll.
                2. A fixed reimbursement day set and published to all claimants.
                3. The approval cut-off for each reimbursement day written down.
                4. Bank details for every claimant held securely and verified once.

                ## Notes
                Paying through payroll can be simpler for small teams but holds money back until the monthly pay date. Check with whoever runs payroll how reimbursements must appear on payslips.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published reimbursement day, payment route and approval cut-off are recorded, and every claimant's bank details have been verified."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare paying claims in the supplier payment run with paying them via payroll"
                - "Choose and publish the fixed reimbursement day"
                - "Set the approval cut-off for each reimbursement day"
                - "Verify each claimant's bank details by phone or in person, not by email"
            - name: Mileage and subsistence rate table
              description: |-
                ## Purpose
                Mileage and meal allowances cause more small disputes than any other claim type because everyone remembers a different rate. A single table of rates per mile or kilometre, daily meal and overnight allowances, taken from the tax authority's published approved rates where they exist, means claims are calculated the same way for everyone.

                ## Milestones
                1. The tax authority's current approved mileage and subsistence rates found and noted with the date checked.
                2. A rate table for cars, motorbikes, bicycles and daily allowances agreed.
                3. A rule written down for which journeys count, excluding ordinary commuting.
                4. The table added to the policy and loaded into the expense tool.

                ## Notes
                Paying above the approved rates can create a taxable benefit. Confirm with your adviser before setting any rate higher than the published one.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated rate table for mileage and daily allowances, sourced from published approved rates, is in the policy and the expense tool."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the tax authority's published mileage and meal allowance rates"
                - "Draft a rate table by vehicle type and allowance"
                - "Write the rule that excludes ordinary commuting from mileage claims"
                - "Load the rates into the expense tool or claim form"
                - "Check the published rates for changes before each tax year @recurring(yearly)"
            - name: Choosing an expense management app
              description: |-
                ## Purpose
                Spreadsheet claims and stapled receipts work up to about ten claimants, after which matching, chasing and keying them in takes days each month. Comparing three expense apps on receipt capture, card feeds, approval rules, accounting software sync and cost per user gives a decision based on your volumes rather than a sales demo.

                ## Milestones
                1. Requirements written: users, monthly claim volume, cards, currencies and the accounting software to connect.
                2. Three apps shortlisted and each scored against the same criteria.
                3. A trial run by two real claimants and one approver on the leading option.
                4. The total yearly cost, including card fees and add-ons, worked out.
                5. A decision recorded with the reasons and a target start date.

                ## Notes
                Start from the **Purchase decision** template. Check that each app produces the receipt evidence your tax authority accepts, including digital copies in place of paper.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three expense apps scored against written requirements, one trialled by real users, and a dated decision with full yearly cost recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write down users, monthly claims, cards, currencies and your accounting software"
                - "Shortlist three expense apps that connect to your accounting software"
                - "Score each app on capture, approvals, card feeds, sync and cost"
                - "Run a two-week trial with two claimants and one approver"
                - "Record the decision and the reasons behind it"
            - name: Deciding who gets a company card
              description: |-
                ## Purpose
                Company cards remove out-of-pocket spending and give finance a live feed, but every card is also a way to spend without asking. Deciding which roles get a card, which type (physical, virtual, single-use, debit or charge) and with what monthly limit keeps the convenience where it pays for itself.

                ## Milestones
                1. Roles that spend regularly on travel, suppliers or subscriptions identified from last year's claims.
                2. Card types compared: physical, virtual, single-use, debit and charge.
                3. A monthly limit and allowed merchant categories proposed for each eligible role.
                4. The eligibility rules signed off and added to the expense policy.

                ## Notes
                Virtual single-use cards suit one-off online purchases and conference bookings well, and cannot be reused if the details leak.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written card eligibility rules name the roles, card types, monthly limits and merchant categories, signed off by the finance lead."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Rank last year's claimants by number and value of claims"
                - "Compare physical, virtual and single-use cards from your bank or card provider"
                - "Propose a monthly limit and merchant categories for each eligible role"
                - "Get the eligibility rules signed off by the finance lead"
            - name: Cardholder agreement and card issue checklist
              description: |-
                ## Purpose
                Once a card is in someone's wallet, the time to agree the rules has passed. A cardholder agreement covering personal use, receipts, lost cards and what happens on leaving, signed before the card is handed over, plus a short checklist for setting limits and blocks on every new card, makes each issue the same.

                ## Milestones
                1. A one-page cardholder agreement covering permitted use, receipts, loss and leaving.
                2. An issue checklist covering limits, blocked merchant categories, cardholder name and ledger mapping.
                3. Every existing cardholder signed up to the agreement.
                4. A register of cards with holder, last four digits, limit and issue date.

                ## Notes
                Start from the **Operational checklist** template. Never record full card numbers in the register: the last four digits are enough to identify a card.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every cardholder has signed the agreement, and a card register lists each card's holder, last four digits, limit and issue date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a one-page cardholder agreement"
                - "Write the checklist used each time a card is issued"
                - "Collect a signed agreement from every current cardholder"
                - "Build a card register with holder, last four digits, limit and issue date"
            - name: Weekly receipt capture habit for cardholders
              description: |-
                ## Purpose
                Receipts photographed the day they arrive take seconds; receipts hunted for at month end take an evening, and a third of them are gone. A weekly ten-minute slot for each cardholder to capture, describe and submit the week's transactions keeps the missing receipt list short and the month end painless.

                ## Milestones
                1. A weekly ten-minute capture slot in each cardholder's calendar.
                2. Receipts captured within seven days for at least 90 percent of card transactions.
                3. A short description and expense type added to each transaction at capture.
                4. Four consecutive weeks with no transaction older than seven days left uncaptured.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks, at least 90 percent of card transactions have a receipt and description within seven days."
                cadence: rolling
              tasks:
                - "Add a recurring ten-minute receipt slot to each cardholder's calendar"
                - "Photograph and submit the week's receipts with a one-line description @recurring(weekly:fri)"
                - "Check which cardholders have transactions older than seven days"
                - "Share the weekly capture rate with the team"
            - name: Monthly claim submission cut-off
              description: |-
                ## Purpose
                Claims that arrive three months late distort every month they touch and turn accruals into guesswork. A published cut-off, such as all spend for the month submitted by the third working day, with a reminder before it and a firm rule for late claims, lets the close include almost every expense in the right period.

                ## Milestones
                1. A cut-off date for submitting each month's claims agreed and published.
                2. A reminder sent to claimants two days before every cut-off.
                3. A written rule for late claims, including a final limit such as three months after the spend.
                4. Three consecutive months with at least 95 percent of claims in before the cut-off.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, at least 95 percent of claims by value were submitted before the published cut-off."
                cadence: rolling
              tasks:
                - "Agree the monthly submission cut-off with the finance lead"
                - "Send the claim deadline reminder to all claimants @recurring(monthly:1)"
                - "List claims still in draft once the cut-off has passed @recurring(monthly:4)"
                - "Write the rule for late claims into the expense policy"
            - name: Twice-weekly approval queue chase
              description: |-
                ## Purpose
                Unapproved claims sit invisible in a manager's queue while the claimant waits for their money. Checking the queue twice a week and nudging approvers with anything older than five working days keeps reimbursements on time, and shows which approvers need cover or a reminder of the rules.

                ## Milestones
                1. An age limit set for approvals, such as five working days.
                2. The approval queue checked twice a week.
                3. Approvers holding claims past the age limit sent a direct reminder.
                4. Repeat late approvers raised with their own manager or given a cover approver.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No claim waits longer than the agreed approval age limit for a full month, with any breach chased within three working days."
                cadence: rolling
              tasks:
                - "Agree the maximum days a claim may wait for approval"
                - "Check the approval queue and remind anyone past the limit @recurring(weekly:tue,fri)"
                - "Note approvers who are late three weeks running"
                - "Ask late approvers' managers to name a cover approver"
            - name: Missing receipt chase list for company cards
              description: |-
                ## Purpose
                Card transactions arrive in the feed whether or not anyone sends a receipt, and an unsupported transaction is both a tax risk and possible misuse. A monthly list of every card transaction without a receipt or description, sent to each cardholder with a deadline, turns a silent gap into a named task.

                ## Milestones
                1. A monthly report of card transactions with no receipt or no description.
                2. Each cardholder sent their own list with a seven-day deadline.
                3. An escalation step agreed for items over 30 days old, up to suspending the card.
                4. Unsupported transactions held below an agreed level, such as 2 percent of card spend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Unsupported card transactions stay below the agreed share of monthly card spend for three months running."
                cadence: rolling
              tasks:
                - "Run the report of card transactions missing a receipt or description @recurring(monthly:8)"
                - "Send each cardholder their own missing items with a deadline"
                - "Agree when a card is suspended for unsupported transactions"
                - "Record the share of card spend still unsupported each month"
            - name: Reimbursement run and payment check
              description: |-
                ## Purpose
                Paying claims is a payment like any other and needs the same care: correct amounts, the right bank account, no claim paid twice. Running reimbursements on the fixed day from a report of approved claims, with a quick check of totals and any new bank details before release, gets staff paid on time without opening a gap in controls.

                ## Milestones
                1. A report of approved, unpaid claims produced on each reimbursement day.
                2. Totals checked against the expense tool and any new bank details verified.
                3. The payment released by someone other than the person who prepared it.
                4. Claimants notified that payment has been made.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every approved claim is paid on the next reimbursement day for two months, with preparer and releaser always different people."
                cadence: rolling
              tasks:
                - "Export approved, unpaid claims for this reimbursement day"
                - "Check the total matches the expense tool and no claim appears twice"
                - "Prepare the reimbursement payment and send it for release @recurring(weekly:thu)"
                - "Mark the paid claims as paid in the expense tool"
            - name: Month-end accrual for unclaimed expenses
              description: |-
                ## Purpose
                Spend that has happened but not yet been claimed still belongs in the month it was incurred, and for a travelling sales team it can be a large number. Estimating it each month from card transactions awaiting claims and known trips, then reversing it the following month, stops management accounts swinging with claim timing.

                ## Milestones
                1. A method agreed for estimating unclaimed spend, such as unsubmitted card transactions plus known trips.
                2. The accrual posted every month with its workings saved.
                3. The accrual reversed at the start of the following month.
                4. The estimate compared with the claims that later arrived each quarter, and the method adjusted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An unclaimed expenses accrual with saved workings is posted and reversed every month for a quarter, then tested against actual claims."
                cadence: rolling
              tasks:
                - "Agree how unclaimed spend will be estimated each month"
                - "Post the unclaimed expenses accrual with its workings @recurring(monthly:28)"
                - "Check last month's accrual reversed correctly"
                - "Compare accrued amounts with the claims that later came in"
            - name: Quarterly cardholder and limit review
              description: |-
                ## Purpose
                Cards outlive the reasons they were issued: people change role, spend drops to nothing, a temporary limit increase becomes permanent. Reviewing every card each quarter against actual use and the register closes dormant cards, right-sizes limits and catches cards still live for people who have left.

                ## Milestones
                1. The card register reconciled to the provider's list of live cards.
                2. Cards unused for 90 days cancelled or justified in writing.
                3. Limits compared with the highest monthly spend and changed where far out of line.
                4. Any card still live for a leaver cancelled the same day it is found.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews completed in a year, each leaving no dormant unjustified cards and no live cards for leavers."
                cadence: rolling
              tasks:
                - "Compare the card register with the provider's list of live cards @recurring(quarterly)"
                - "Cancel or justify every card unused for 90 days"
                - "Compare each limit with that cardholder's highest monthly spend"
                - "Check live cards against the latest leavers list from HR"
            - name: Monthly out-of-policy spend report
              description: |-
                ## Purpose
                Most out-of-policy spending is not fraud but habit: first-class rail booked out of convenience, hotels above the cap, meals without attendee names. A monthly one-page report to each budget holder showing exceptions in their team, by person and type, changes behaviour faster than rejecting claims one at a time.

                ## Milestones
                1. Exception rules defined from the policy, such as over-limit hotels or missing attendees.
                2. A monthly exceptions report by team, person and type.
                3. Each budget holder sent their team's report with the three largest items.
                4. Repeat exceptions falling over three consecutive months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Budget holders receive a team exceptions report every month, and repeat exceptions fall over three consecutive months."
                cadence: rolling
              tasks:
                - "Turn each policy limit into a rule the report can test"
                - "Send each budget holder their team's out-of-policy report @recurring(monthly:12)"
                - "Highlight anyone with exceptions three months running"
                - "Ask the agent to summarise the month's exceptions in five plain sentences"
            - name: Travel advance and cash float tracker
              description: |-
                ## Purpose
                Cash advances for trips and petty cash floats are easy to hand out and easy to forget, and an advance never settled is money the business has quietly lost. One register of every advance and float, with the person holding it and the date it must be settled, makes outstanding balances visible every month.

                ## Milestones
                1. A register of every travel advance and cash float, with holder, amount and settle-by date.
                2. A rule that advances are settled by claim or repayment within a set number of days after the trip.
                3. The register reconciled to the ledger balance each month.
                4. No advance more than 30 days past its settle-by date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The advances register agrees to the ledger every month for a quarter and no advance is over 30 days past its settle-by date."
                cadence: rolling
              tasks:
                - "List every advance and petty cash float currently held by staff"
                - "Set the number of days after a trip within which advances must be settled"
                - "Reconcile the advances register to the ledger @recurring(monthly:20)"
                - "Chase anyone holding an advance past its settle-by date"
            - name: Annual expense policy refresh
              description: |-
                ## Purpose
                Rates move, the business opens a new office, a new card type arrives, and the policy written two years ago no longer matches how people work. A yearly review built from the year's exceptions, queries and rate changes keeps the policy current and gives a natural moment to remind everyone it exists.

                ## Milestones
                1. The year's most common queries and exceptions collected.
                2. Rates, limits and thresholds checked against current published rates and prices.
                3. A marked-up draft agreed with the finance lead and signed off.
                4. The new version published with a short note of what changed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A new dated policy version is published each year with a written summary of changes sent to all staff."
                cadence: cyclic
              tasks:
                - "Book the annual expense policy review with the finance lead @recurring(yearly)"
                - "Collect the year's top ten expense queries and exceptions"
                - "Mark up the policy with the changes needed"
                - "Send staff a short note listing what changed in the new version"
            - name: Which staff expenses are taxable benefits
              description: |-
                ## Purpose
                Some reimbursed costs become taxable pay for the employee, and the employer may owe tax and reporting on them: home-to-office travel, personal use of a card, gifts, allowances paid above approved rates. Learning the categories that apply in your country, alongside your adviser, means the policy avoids creating them by accident.

                ## Milestones
                1. A list of expense types that can become taxable benefits in your country, taken from the tax authority's guidance.
                2. Each of your expense types marked as normally exempt, sometimes taxable or always taxable.
                3. Unclear items answered in writing by your accountant or tax adviser.
                4. A dated one-page note filed with the policy summarising the position.

                ## Notes
                This is about knowing what to ask, not reaching tax conclusions alone. Rules differ by country and change often, so date every note.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every expense type carries a taxable benefit marking confirmed by an adviser, filed in a dated note beside the policy."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the tax authority's guidance on employee expenses and benefits"
                - "Mark each of your expense types as exempt, sometimes taxable or taxable"
                - "Send the unclear items to your accountant as written questions"
                - "File a dated one-page summary with the expense policy"
            - name: Sales tax evidence on staff receipts
              description: |-
                ## Purpose
                Staff expenses often carry recoverable sales tax or VAT, but only where the receipt meets the tax authority's rules and the line is coded with the right tax code. Learning what evidence is needed, which costs are usually blocked, such as client entertaining in some countries, and how foreign tax is treated stops the business either losing reclaims or claiming too much.

                ## Milestones
                1. The tax authority's rules for reclaiming sales tax on employee expenses read and summarised.
                2. Expense types marked as reclaimable, blocked or partly reclaimable with your adviser's input.
                3. Ten recent claims checked for receipt evidence and correct tax codes.
                4. Corrections fed back into the default tax codes in the expense tool.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every expense type has a confirmed reclaim status and default tax code, tested against ten recent claims."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the sales tax rules for employee expense receipts"
                - "Mark each expense type as reclaimable, blocked or partly reclaimable"
                - "Check ten recent claims for receipt evidence and tax codes"
                - "Fix the default tax codes in the expense tool"
            - name: Foreign currency claims and card exchange fees
              description: |-
                ## Purpose
                Hotels paid in euros on a personal card can be converted at three different rates depending on who does the sum, and card exchange fees add another 2 to 3 percent nobody budgets for. Understanding how your cards and expense tool convert currency, and choosing one rule for personal-card claims, makes overseas trips cost what the statements say.

                ## Milestones
                1. How each company card converts foreign spend, and its fee, written down from the provider's terms.
                2. A rule chosen for converting personal-card claims, such as the rate on the claimant's own statement.
                3. The expense tool set to apply that rule.
                4. Exchange fees on the last quarter's foreign spend totalled.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written currency conversion rule is set in the expense tool and last quarter's card exchange fees are totalled."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the foreign transaction fee in each card provider's terms"
                - "Choose how personal-card claims in foreign currency will be converted"
                - "Set the conversion rule in the expense tool"
                - "Total the exchange fees paid on last quarter's overseas spend"
            - name: Spotting duplicate and altered receipts
              description: |-
                ## Purpose
                Expense fraud is usually small and repeated: the same receipt claimed on paper and on a card, a taxi receipt with an edited total, a personal dinner described as a client meal. Learning the patterns approvers and finance can test for, such as identical amounts and dates, round numbers and weekend spend, catches most of it without treating everyone as a suspect.

                ## Milestones
                1. A list of the ten most common duplicate and alteration patterns.
                2. A duplicate check across claims and card transactions run on the last six months.
                3. Any suspicious items reviewed quietly with the finance lead before anyone is approached.
                4. The useful checks built into the monthly routine or the expense tool's rules.

                ## Notes
                Handle suspicions confidentially and follow your HR process. A pattern is a reason to look closer, not proof.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A six-month duplicate check is complete, any suspicious items are reviewed with the finance lead, and checks are added to the routine."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the common patterns of duplicate and altered receipts"
                - "Run a duplicate check on six months of claims and card spend"
                - "Review any suspicious items privately with the finance lead"
                - "Switch on duplicate detection in the expense tool if it offers it"
            - name: Two-minute approval checklist for line managers
              description: |-
                ## Purpose
                Line managers approve claims between meetings and usually check only that the total looks reasonable. A short checklist of what to look at, such as the receipt matching the amount, the business purpose, attendees and policy limits, backed by a one-page guide and a 20-minute briefing, makes approval a real control rather than a click.

                ## Milestones
                1. A checklist of five or six items an approver checks on every claim.
                2. A one-page guide with two worked examples of claims that should be queried.
                3. A 20-minute briefing held for all approvers.
                4. Approvers' query rates and approval times compared before and after the briefing.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every approver has attended the briefing and received the checklist, and the query rate is compared before and after."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the five or six checks every approver must make"
                - "Prepare two example claims an approver should query"
                - "Run a 20-minute briefing for all approvers"
                - "Add the checklist to the approval screen or approval email"
            - name: New starter guide to claiming expenses
              description: |-
                ## Purpose
                New staff often pay for their first trip themselves and only then find out they needed pre-approval or a different receipt. A short guide handed over on day one, covering the app, the policy highlights, cards and the reimbursement day, prevents most first-claim problems and the awkward rejections that come with them.

                ## Milestones
                1. A one-page guide covering how to claim, key limits, evidence and payment timing.
                2. The guide included in the onboarding pack HR gives every starter.
                3. New starters given access to the expense tool in their first week.
                4. New starters' first claims checked for common mistakes for three months.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The one-page guide is in the HR onboarding pack and every starter in the next three months has expense tool access in week one."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page guide to claiming expenses"
                - "Ask HR to add the guide to every starter's onboarding pack"
                - "Set up expense tool access as part of each starter's first week"
                - "Review new starters' first claims for repeated mistakes"
            - name: Expense app rules and policy settings
              description: |-
                ## Purpose
                Most expense apps can enforce the policy for you: flag a hotel over the cap, require attendees for meals, block a claim without a receipt above a set value. Learning the admin side of your tool and turning policy limits into rules moves checking from the approver's eye to the moment of submission.

                ## Milestones
                1. The tool's administrator guide or training completed by the person who runs it.
                2. Each policy limit and evidence rule entered as a tool rule where possible.
                3. Rules tested with sample claims that should pass and fail.
                4. A short record of every rule, its purpose and the date it was set.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each policy limit the tool can enforce is set up as a rule, tested with a passing and failing claim, and listed in a dated record."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Complete the expense tool's administrator training"
                - "List the policy rules the tool can enforce automatically"
                - "Set up each rule and test it with a passing and a failing claim"
                - "Keep a dated list of every rule and why it exists"
            - name: Pilot of app-based receipt capture with one team
              description: |-
                ## Purpose
                Switching everyone from paper claims to an app at once risks a month of lost receipts and angry claimants. Piloting the chosen tool with one team that claims often, for a full month including the close, shows where set-up, training and approval routes need work before the rest of the business moves over.

                ## Milestones
                1. One pilot team of five to fifteen frequent claimants chosen.
                2. The tool set up with expense types, approval routes and accounting sync for that team.
                3. A full month of claims processed through the tool, including the month-end close.
                4. A list of fixes from pilot feedback completed before the wider launch.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One team has run a full month of claims through the app, and the top three problems they raised are fixed before wider launch."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose a pilot team that claims often"
                - "Set up the pilot team's approval routes and expense types in the tool"
                - "Run a 30-minute set-up session with the pilot team"
                - "Collect pilot feedback at the end of the first month"
                - "Fix the top three problems before the wider launch"
            - name: Replacing petty cash with prepaid cards
              description: |-
                ## Purpose
                A petty cash tin needs counting, topping up, receipts stapled to vouchers and someone trusted with the key, all for a few hundred a month in spend. Comparing it with prepaid or low-limit virtual cards for the same purchases often shows the cash can go, with a cleaner audit trail and less time spent counting.

                ## Milestones
                1. A year of petty cash spend analysed by type and person.
                2. Prepaid and virtual card options compared on cost, controls and ease of use.
                3. A decision recorded to keep, shrink or close the cash float.
                4. If closed, the float counted, banked and the ledger account cleared.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the petty cash float, and if closed, the float banked and its ledger account showing a zero balance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total last year's petty cash spend by type"
                - "Compare prepaid and virtual card options for the same purchases"
                - "Decide whether to keep, shrink or close the cash float"
                - "Count, bank and clear the float if it is being closed"
            - name: Expense app sync with the accounting software
              description: |-
                ## Purpose
                Automatic posting of claims and card transactions saves hours, but a broken mapping posts hundreds of lines to the wrong account before anyone notices. Setting up the sync carefully, with expense types, tax codes, tracking categories and claimant records matched, then checking the sync error log each month, keeps the ledger trustworthy.

                ## Milestones
                1. Expense types, tax codes and tracking categories matched one to one between the two systems.
                2. A test month synced and reviewed line by line before going live.
                3. Posting rules decided: one entry per claim, per batch or per card statement.
                4. A monthly check of the sync error log with every failure cleared.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A test month synced with no mapping errors, and the sync error log has been cleared every month since go-live."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Match every expense type and tax code to the accounting software"
                - "Decide whether claims post as single entries, batches or bills"
                - "Review a test month of synced postings line by line"
                - "Clear any sync errors shown in the integration log @recurring(monthly:6)"
            - name: Travel booking route and preferred suppliers
              description: |-
                ## Purpose
                When everyone books their own trains, flights and hotels, the business pays retail prices and finance sees the cost only when the claim arrives. Deciding whether bookings go through a booking tool, an agency or a nominated person, and naming preferred hotels in the places people visit most, brings both price and visibility under one route.

                ## Milestones
                1. Last year's travel spend analysed by destination, supplier and booking method.
                2. Options compared: self-booking within policy, a booking tool or a travel agency.
                3. Preferred hotels or business rates agreed in the three most visited locations.
                4. The chosen booking route written into the expense policy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A booking route is chosen and written into the policy, with preferred rates agreed in the three most visited locations."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Analyse last year's travel spend by destination and supplier"
                - "Compare self-booking, a booking tool and a travel agency"
                - "Ask hotels in the three most visited cities for a business rate"
                - "Write the booking route into the expense policy"
            - name: Auto-approval rules for low-value claims
              description: |-
                ## Purpose
                Asking a manager to approve a small parking receipt costs more in their time than the receipt is worth. Agreeing which claims can be approved automatically, for example under a set value, within policy and with a valid receipt, with a random sample checked afterwards, frees approvers to look properly at the claims that matter.

                ## Milestones
                1. Claim values analysed to show how many claims fall below candidate thresholds.
                2. An auto-approval threshold and its conditions agreed with the finance lead.
                3. A post-approval sample, such as 5 percent of auto-approved claims, checked monthly.
                4. Results reviewed after three months and the threshold confirmed or changed.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An auto-approval threshold is live in the expense tool and three months of sampled results have been reviewed with the finance lead."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count how many claims last quarter fell under three possible thresholds"
                - "Agree the auto-approval threshold and its conditions"
                - "Set up the auto-approval rule in the expense tool"
                - "Review the first three months of auto-approved claims"
            - name: Reimbursement in five working days
              description: |-
                ## Purpose
                Waiting a month for expenses means staff are lending the business money, and it shows in morale and in reluctance to travel. Measuring the days from submission to payment, finding where claims wait and fixing the slowest step can bring typical reimbursement under five working days.

                ## Milestones
                1. Current days from submission to approval and from approval to payment measured.
                2. The slowest step identified from those measurements.
                3. One change made to the slowest step, such as a second weekly reimbursement day.
                4. Median time from submission to payment at or below five working days for two months.

                ## Notes
                Start from the **Metrics log** template. A median tells you more than an average here, because one claim lost for three months distorts the mean.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Median time from claim submission to payment is five working days or fewer for two consecutive months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Measure the days from submission to payment for last month's claims"
                - "Split the total into time waiting for approval and waiting for payment"
                - "Make one change to the slower of the two steps"
                - "Log the median reimbursement time @recurring(monthly:10)"
            - name: Moving recurring subscriptions off staff cards
              description: |-
                ## Purpose
                Software and online services bought on a card or claimed monthly by staff tend to multiply, with several people paying for the same tool and nobody cancelling when they leave. Finding every recurring charge in claims and card feeds, and moving the ones the business keeps onto a central account with a named owner, ends the drip of monthly claims.

                ## Milestones
                1. Every recurring charge in the last six months of claims and card spend listed.
                2. Each one marked keep centrally, cancel or leave with the cardholder.
                3. Kept services moved to a central account with a named owner.
                4. A policy rule that new recurring services are not claimed on personal cards.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "No recurring subscription appears in staff claims for two months, and every kept service has a named owner on a central account."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List recurring charges from six months of claims and card spend"
                - "Mark each subscription to keep centrally, cancel or leave"
                - "Move the kept subscriptions to a central account with an owner"
                - "Add a rule against claiming recurring services to the expense policy"
            - name: Client entertaining, gifts and staff event rules
              description: |-
                ## Purpose
                Entertaining is where expense policy meets reputation: a client dinner, a gift to a public official or a team night out can each carry tax, bribery and fairness questions. Clear rules on spending per head, who must be named, which gifts need recording and approval, and how staff events are funded protect both the business and the person paying.

                ## Milestones
                1. Per-head limits for client and staff entertaining agreed.
                2. A rule that entertaining claims list attendees and the business purpose.
                3. A gifts and hospitality register for items given or received above a set value.
                4. Rules on gifts to public officials checked against the business's anti-bribery stance.

                ## Notes
                Anti-bribery laws in many countries apply to modest gifts and hospitality. Have your adviser or legal counsel check the rules before publishing them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Entertaining limits, attendee rules and a gifts and hospitality register are in place, with the gifts rules reviewed by an adviser."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set per-head limits for client and staff entertaining"
                - "Require attendee names and purpose on every entertaining claim"
                - "Create a gifts and hospitality register with a value threshold"
                - "Ask your adviser to review the rules on gifts to officials"
            - name: Company-wide launch of the expense app
              description: |-
                ## Purpose
                After a successful pilot, the move for everyone else needs a date, a cut-over for old paper claims and people on hand for the first week of questions. Treating the launch as a dated event, with access for every claimant, short training and a firm last date for old-style claims, avoids running two systems for months.

                ## Milestones
                1. A launch date set for just after a month-end close.
                2. Every claimant and approver given access and a 20-minute training session.
                3. A last date for paper or spreadsheet claims announced and kept.
                4. First-week questions answered and the most common added to an FAQ.
                5. Ninety percent of claims in the first full month submitted through the app.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The app is live for all staff and at least 90 percent of claims in the first full month were submitted through it."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Set the launch date for the week after a month-end close"
                - "Invite every claimant and approver to the expense tool"
                - "Run short training sessions for each team"
                - "Announce the last date for paper claims"
                - "Collect first-week questions into an FAQ"
            - name: Year-end expense cut-off sweep
              description: |-
                ## Purpose
                At the financial year end, unclaimed spend, unsettled advances and approved but unpaid claims all have to land in the right year for the accounts and the tax return. A sweep in the last weeks of the year, with a firm claims deadline and a final accrual, means the year-end file is not reopened for a hotel bill months later.

                ## Milestones
                1. A year-end claims deadline announced three weeks before the year end.
                2. All advances settled or listed as amounts owed by staff at the year end.
                3. Approved and unclaimed expenses accrued and card transactions to the year-end date captured.
                4. A year-end expenses schedule saved for the accountants.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A year-end expenses schedule covering accruals, advances and unpaid claims is handed to the accountants within ten working days of year end."
                cadence: cyclic
              tasks:
                - "Announce the year-end claims deadline three weeks ahead @recurring(yearly)"
                - "Chase all outstanding advances before the year end"
                - "Accrue approved and unclaimed expenses at the year-end date"
                - "Save a year-end expenses schedule for the accountants"
            - name: Annual benefits reporting from staff expenses
              description: |-
                ## Purpose
                Where expenses or card use create taxable benefits, many tax authorities require the employer to report them after the tax year; the UK's P11D form is one example. Pulling the relevant items from the year's claims and card data on time, with your payroll provider or accountant, avoids penalties and surprise tax bills for staff.

                ## Milestones
                1. The reporting obligations and dates for your country confirmed with your accountant or payroll provider.
                2. The year's potentially taxable expense items extracted and checked.
                3. Figures passed to whoever files the return before their deadline.
                4. Staff told which items will appear in their reporting.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Benefit figures from the year's expenses reach the filer before the reporting deadline, with affected staff told in writing."
                cadence: cyclic
              tasks:
                - "Confirm the benefits reporting deadline with your payroll provider or accountant @recurring(yearly)"
                - "Extract the year's potentially taxable expense items"
                - "Send the figures to the filer with a note of any doubtful items"
                - "Tell affected staff what will be reported for them"
            - name: Expense claim sample pack for the auditors
              description: |-
                ## Purpose
                Auditors commonly test a sample of expense claims and card transactions for receipts, approval and coding, and a slow response stretches fieldwork for everyone. Preparing the policy, approval routes, card register and a way to pull any claim with its receipt and approval trail in minutes, before they arrive, turns their sample into a short exercise.

                ## Milestones
                1. The year's policy, approval matrix and card register gathered in one folder.
                2. A test showing any claim can be produced with receipt and approval within five minutes.
                3. The auditor's expense sample answered in full within two working days.
                4. Any audit findings on expenses recorded with owners and dates.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The auditor's expense sample is answered in full within two working days, with each finding logged against an owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather the year's policy, approval matrix and card register in one folder"
                - "Pull three random claims with receipts and approvals as a test"
                - "Answer the auditor's expense sample within two working days"
                - "Record each audit finding on expenses with an owner"
            - name: Team offsite spend plan and claims wrap-up
              description: |-
                ## Purpose
                Sales conferences and team offsites generate a month of claims in a week: travel, hotels, group meals, venue extras. Agreeing a budget and booking route beforehand, giving one person a card for group costs and closing every claim within two weeks afterwards keeps the event inside budget and out of next quarter's accounts.

                ## Milestones
                1. A budget per head and a booking route agreed before anyone books.
                2. One named organiser holding a card for group costs.
                3. Every attendee's claims submitted within two weeks of the event.
                4. Actual cost compared with budget and shared with the event owner.

                ## Notes
                Start from the **Trip** template. Use it for the travel and accommodation details so the organiser and finance work from one list.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All offsite claims are in within two weeks of the event and a budget versus actual comparison is sent to the event owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the per-head budget and how attendees will book"
                - "Issue the organiser a card or raised limit for group costs"
                - "Remind attendees to claim within two weeks after the event"
                - "Compare the final cost with budget and send it to the event owner"
            - name: Owner expenses kept apart from the business
              description: |-
                ## Purpose
                Owners of small businesses often pay business costs on a personal card and personal costs on the business card, then untangle it at year end with the accountant's clock running. Claiming your own business costs the way staff do, with receipts and a monthly claim, and repaying personal spend found on business cards, keeps the books clean and the tax position defensible.

                ## Milestones
                1. One card designated for business only and one for personal use, with no mixing from today.
                2. This year's mixed transactions listed and agreed with the accountant.
                3. A monthly owner's claim submitted with receipts like any other claimant.
                4. Personal spend on business cards repaid or recorded against the owner's account.

                ## Notes
                Ask your accountant how owner's costs should be recorded for your kind of business. Sole traders and company directors are often treated differently.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months of owner's claims submitted with receipts and no personal spend left unrecorded on business cards."
                cadence: rolling
              tasks:
                - "Decide which card is for business only and which is personal"
                - "List this year's mixed transactions for the accountant"
                - "Submit your own monthly expense claim with receipts @recurring(monthly:14)"
                - "Repay or record any personal spend found on the business card"
            - name: Expense routine for a business without a finance team
              description: |-
                ## Purpose
                In a business of five to fifteen people the owner or an office manager handles expenses between everything else, and a complicated process simply does not get done. A monthly routine of about an hour, with one claims deadline, one approval sitting, one reimbursement and one receipt check, covers the essentials without a dedicated finance person.

                ## Milestones
                1. A single monthly hour booked for expenses.
                2. One claims deadline, one approval sitting and one reimbursement each month.
                3. A short checklist of the monthly steps kept where the next person can find it.
                4. Expenses passed to the bookkeeper or accountant in the same format each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of claims approved, paid and handed to the bookkeeper within the monthly expense hour."
                cadence: rolling
              tasks:
                - "Book a recurring monthly hour for expenses"
                - "Write a six-step checklist for the monthly expense hour"
                - "Approve, pay and file the month's claims in the expense hour @recurring(monthly:25)"
                - "Agree with the bookkeeper the format they want each month"
            - name: Home-working equipment and allowance claims
              description: |-
                ## Purpose
                Remote and hybrid staff claim chairs, monitors, broadband and heating, and each manager answers those claims differently. Deciding between a fixed allowance, a one-off equipment budget and actual-cost claims, and checking the tax treatment of each, gives remote staff fair rules and stops repeat negotiations.

                ## Milestones
                1. The home-working costs staff currently claim listed by type and value.
                2. Allowance, equipment budget and actual-cost options compared.
                3. The tax treatment of the chosen option confirmed with your adviser.
                4. A home-working section added to the policy, including who owns the equipment.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A home-working section in the policy sets one approach, its tax treatment confirmed by an adviser and equipment ownership stated."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the home-working costs claimed in the last year"
                - "Compare a fixed allowance, an equipment budget and actual-cost claims"
                - "Ask your adviser how each option is taxed"
                - "Write the home-working section of the policy, including who owns equipment"
            - name: Leaver card cancellation and final claims
              description: |-
                ## Purpose
                Someone leaving with a live company card, an unsettled advance or three months of unclaimed receipts is a common and avoidable loss. A leavers checklist triggered by HR, covering card cancellation on the last day, final claims, advance recovery and approver handover, closes every loose end before access to the expense tool ends.

                ## Milestones
                1. A leavers checklist agreed with HR covering cards, claims, advances and approvals.
                2. HR sending finance every leaver's last day as soon as it is confirmed.
                3. Cards cancelled on the last working day and final claims paid in the last reimbursement run.
                4. Approval routes moved from leaving managers to their replacements.

                ## Notes
                Start from the **Operational checklist** template. Check with HR and your adviser before deducting any unsettled advance from final pay.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every leaver in the next six months has their card cancelled on the last day and final claims settled within one reimbursement run."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree the leavers checklist with HR"
                - "Ask HR to send finance each leaver's last day when it is confirmed"
                - "Cancel the leaver's card on their last working day"
                - "Move any approvals the leaver held to their replacement"
            - name: Field staff fuel cards and per diems
              description: |-
                ## Purpose
                Engineers, drivers and sales staff on the road spend money almost every day, and claiming each coffee and tank of fuel separately wastes their time and finance's. Fuel cards, per diems and simplified evidence rules designed for field work cut claim volumes while keeping enough evidence for tax and control.

                ## Milestones
                1. Field roles and their typical daily and monthly costs identified.
                2. Fuel card options compared, including mileage capture and fuel-only restrictions.
                3. Per diem rates for field days agreed within the tax authority's approved amounts.
                4. Simplified evidence rules for field staff written into the policy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Field roles have a recorded decision on fuel cards and per diems, with rates within approved amounts written into the policy."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List field roles and their typical daily costs"
                - "Compare fuel card options with mileage capture and fuel-only limits"
                - "Set per diem rates within the published approved amounts"
                - "Write simplified evidence rules for field staff"
            - name: Country addenda for a multi-country policy
              description: |-
                ## Purpose
                Groups with staff in several countries need one expense policy for principles and approvals, but local tax rules, mileage rates, receipt requirements and currencies differ. A core policy with a short addendum for each country, owned by someone there and reviewed yearly, keeps the group consistent without breaking local rules.

                ## Milestones
                1. A core group policy covering principles, approvals and evidence standards.
                2. A one-page addendum for each country with local rates, receipt rules and tax points.
                3. A local owner named for each addendum, with confirmation that a local adviser has reviewed it.
                4. Each addendum loaded as a separate policy in the expense tool.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every country with staff has a reviewed one-page addendum with a named local owner, loaded as its own policy in the tool."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Separate the core policy from the rules that vary by country"
                - "Draft a one-page addendum template for local rates and rules"
                - "Name a local owner for each country's addendum"
                - "Ask each local owner to confirm their addendum with a local adviser"
            - name: Rechargeable expenses tagged for client billing
              description: |-
                ## Purpose
                Agencies, consultancies and contractors often pass travel and other costs on to clients, and expenses not tagged at claim time are rarely recharged later. Making staff tag each rechargeable expense with the client or project, and handing billing a monthly list of tagged items, turns lost revenue into invoice lines.

                ## Milestones
                1. A rechargeable flag and a client or project field added to the claim form.
                2. Rules for which costs are rechargeable, and any mark-up, agreed with account owners.
                3. A monthly list of tagged rechargeable items sent to whoever raises invoices.
                4. Unbilled rechargeable items tracked until they are invoiced.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Rechargeable items are tagged at claim time and no tagged item from the previous month is left unbilled for two months running."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Add a rechargeable flag and project field to claims"
                - "Agree with account owners which costs are rechargeable"
                - "Send billing the month's tagged rechargeable items"
                - "Check which rechargeable items from last month are still unbilled"
            - name: Risk-based post-payment expense audit
              description: |-
                ## Purpose
                Approvers see one claim at a time, and patterns only show across hundreds. A monthly audit of a sample of paid claims and card transactions, weighted towards high values, frequent claimants and exceptions, tests whether the policy is working and gives findings to fix rather than anecdotes.

                ## Milestones
                1. Sampling rules written: a random share plus targeted high-risk items.
                2. A monthly sample reviewed for receipt, approval, coding and policy compliance.
                3. Findings logged with an owner, a fix and a date.
                4. A quarterly summary of error and exception rates shared with the finance lead.

                ## Notes
                Start from the **Remediation plan** template to track findings through to closure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly samples reviewed, with every finding logged against an owner and a quarterly summary sent to the finance lead."
                cadence: rolling
              tasks:
                - "Write the sampling rules for the monthly expense audit"
                - "Review the month's sample of paid claims and card spend @recurring(monthly:16)"
                - "Log each finding with an owner and a fix date"
                - "Send the finance lead a quarterly summary of error rates"
            - name: Expense fraud investigation protocol
              description: |-
                ## Purpose
                When a claim looks deliberately false, a clumsy response, such as confronting the person or deleting records, can ruin an investigation and expose the business. A written protocol agreed with HR, covering who is told, how evidence is preserved, how interviews run and when advisers are called, means the first suspected case is handled properly.

                ## Milestones
                1. A protocol agreed with HR naming who handles suspected expense fraud.
                2. Steps for preserving claims, receipts and card data without alerting the person.
                3. Rules on interviews, card suspension and recovery of money aligned with the disciplinary policy.
                4. A confidential case log format ready for any future case.

                ## Notes
                Employment law on investigations and pay deductions varies by country. Take advice before acting on a live case.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written expense fraud protocol, reviewed by an employment adviser and agreed with HR, is filed with a confidential case log."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the expense fraud protocol with HR"
                - "List how claims, receipts and card data will be preserved"
                - "Ask your employment adviser to review the protocol"
                - "Create a confidential case log for any future cases"
            - name: Expense spend analytics and benchmark measures
              description: |-
                ## Purpose
                Once a year of clean data exists, expenses can answer real questions: which teams travel most, which hotels cost most per night, how many claims each approver handles and what each claim costs to process. A quarterly pack of six to eight measures, compared over time and against published benchmarks, shows where policy, suppliers or process should change next.

                ## Milestones
                1. Six to eight measures chosen, such as spend per head, compliance rate, cycle time and cost per claim.
                2. A year of history calculated for each measure.
                3. A quarterly pack produced for the finance lead with three recommended actions.
                4. At least one action from each pack carried out and tracked.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four quarterly measures packs produced in a year, each with three actions and at least one carried out."
                cadence: rolling
              tasks:
                - "Choose six to eight expense measures with the finance lead"
                - "Calculate a year of history for each measure"
                - "Produce the quarterly expense measures pack with three actions @recurring(quarterly)"
                - "Ask the agent to draft commentary on the quarter's biggest movement"
---

# Employee Expense Management

This area is for anyone who sets or runs the rules for staff spending, from an owner reimbursing five people to an enterprise finance team managing hundreds of company cards. It starts with the foundations (a map of spending routes, a one-page policy, expense types, approval routes, receipt rules, reimbursement days, rates and card decisions), then the weekly and monthly machinery, the tax, currency and fraud skills, improvements such as an app pilot and auto-approval, dated moments like the year-end cut-off and benefits reporting, situations for owners, remote and field staff and multi-country groups, and finally the specialist work of audits, investigations and analytics.

What repeats is a weekly receipt slot for cardholders, a twice-weekly approval chase and a weekly reimbursement run, a monthly claims cut-off, missing receipt chase, accrual, exceptions report, advances reconciliation and audit sample, a quarterly card review and measures pack, and yearly rate checks, policy refresh, year-end cut-off and benefits reporting. The Purchase decision, Operational checklist, Metrics log, Trip and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
