---
id: family-office.family-office-budget-and-costs
name: Family Office Budget and Costs
description: "A family office budget that the family trusts: a cost baseline, clear categories and approval limits, monthly actuals against budget, fair recharges to each member and a yearly review."
category: personal
version: 1.0.0
tags: [family-office, family-office-budget-and-costs, parent, manager, budgeting, cost-allocation, adviser-fees, recharges]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - month-end-close
    - purchase-decision
    - board-meeting
    - metrics-log
    - risk-register
    - onboarding-30-60-90
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Office Budget and Costs
          description: "Running the family office budget: staff, advisers, systems, insurance and property costs, cost allocation to family members and an annual review."
          projects:
            - name: Family office cost baseline from last year's spend
              description: |-
                ## Purpose
                Most families asked what their office costs give a figure that is out by a third, because salaries sit in one entity, legal fees in a trust and the software bill on a personal card. Pulling twelve months of real spending from every paying entity into one sheet gives the honest number that every later budget starts from.

                ## Milestones
                1. Every entity, trust and personal account that paid an office cost in the last twelve months listed.
                2. Twelve months of payments exported from each one into a single spreadsheet.
                3. Each payment tagged with a supplier and a rough category.
                4. A total annual cost agreed with the principal as the baseline figure.

                ## Notes
                Include costs the family pays personally for office work, such as a phone or a home study used by staff. They are the ones that vanish from every later report.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A single spreadsheet of twelve months of office spending across every paying entity, with a baseline total the principal has signed off."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every entity, trust and card that has paid an office cost this year"
                - "Request twelve months of transaction exports from each bank or card"
                - "Tag each payment with a supplier name and a rough category"
                - "Present the baseline total to the principal and record the agreed figure"
            - name: Family office chart of accounts and cost categories
              description: |-
                ## Purpose
                Without fixed categories, the same adviser invoice is coded to legal one month and to professional fees the next, and no two years can be compared. A short chart of accounts, perhaps fifteen to twenty-five cost lines grouped under staff, advisers, systems, insurance, premises and family services, makes every report line up.

                ## Milestones
                1. Between fifteen and twenty-five cost lines defined, each with a one-line description.
                2. Lines grouped under no more than seven headings the family will recognise.
                3. The baseline spending recoded to the new lines.
                4. The chart loaded into the office's accounting system and agreed with the accountant.

                ## Notes
                Resist adding a line for every supplier. A category exists to answer a question the family asks, not to mirror the invoice pile.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written chart of accounts of no more than twenty-five lines, loaded in the accounting system, with last year's spending recoded to it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the seven headings the family would use to describe office costs"
                - "Write fifteen to twenty-five cost lines under those headings"
                - "Recode the baseline spending to the new lines and check the totals match"
                - "Ask the accountant to set the lines up in the accounting system"
            - name: Office versus personal spending boundary
              description: |-
                ## Purpose
                The commonest budget argument in a family office is whether a cost belongs to the office or to one member: a child's school fees paid by the office, a holiday villa's pool repair, a personal tax return. A written boundary, agreed by the principal and shown to every branch, decides in advance what the shared budget carries and what is recharged.

                ## Milestones
                1. A list of the twenty most common grey-area costs drawn from the baseline.
                2. Each one marked as office, recharged to a member or paid personally.
                3. The boundary written on one page and agreed by the principal.
                4. The page shared with each adult family member and the office team.

                ## Notes
                Agree with the tax adviser how each category should be treated before the page is final. Who pays can change the tax position of the paying entity.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page office versus personal spending boundary, agreed by the principal, checked by the tax adviser and shared with every adult family member."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick the twenty most disputed costs from last year's spending"
                - "Mark each as office, recharged or personal in a draft table"
                - "Ask the tax adviser to review the draft before it goes to the family"
                - "Send the agreed page to each adult family member"
            - name: Spending approval limits and authority matrix
              description: |-
                ## Purpose
                When nobody knows who can approve a 40,000 legal engagement, either the principal signs every invoice or staff commit money nobody authorised. An authority matrix sets, for each kind of spending, who can approve it up to what amount, and who must countersign above that.

                ## Milestones
                1. Spending types listed: routine invoices, new engagements, capital items, staff costs and gifts.
                2. An approval limit set for each role from office assistant to principal.
                3. A countersignature rule above the highest delegated limit.
                4. The matrix matched to the bank mandates and payment system permissions.

                ## Notes
                A limit on paper means little if the payment system lets one person release any amount. Match the two, and require a second approver for new payees.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed authority matrix with a limit for every role and spending type, matching the bank mandates and payment system settings."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every role in the office that approves or releases payments today"
                - "Propose an approval limit for each role and spending type"
                - "Check the bank mandates and payment system against the proposed limits"
                - "Have the principal sign the matrix and file it with the office policies"
            - name: Cost centres by entity, branch and residence
              description: |-
                ## Purpose
                Budgets that only show one total cannot answer the questions family members actually ask: what does our branch cost, what does the London house cost, what does the holding company pay. Setting up cost centres for each entity, family branch and property lets every cost be tagged once and reported any way the family needs.

                ## Milestones
                1. A list of cost centres covering each paying entity, family branch and residence.
                2. A rule for which cost centre takes shared costs before allocation.
                3. Cost centres set up in the accounting system alongside the chart of accounts.
                4. One month of costs tagged and a test report run by cost centre.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cost centres for each entity, branch and residence live in the accounting system, with a test report produced from one full month."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch the cost centres the family would want to see reported"
                - "Agree a holding cost centre for shared costs awaiting allocation"
                - "Set the cost centres up in the accounting system"
                - "Tag last month's costs and run a report by cost centre"
            - name: Office supplier and contract register
              description: |-
                ## Purpose
                Family offices accumulate suppliers quietly: three IT firms, two cleaning contracts, a records storage company still billing for boxes from an old house. A register of every supplier with its contract, annual cost, notice period and renewal date shows where money leaks and when each contract can be changed.

                ## Milestones
                1. Every supplier paid in the last year entered with contact, service and annual cost.
                2. Contract start, renewal date and notice period recorded for each.
                3. An owner in the office named for each supplier.
                4. Suppliers with no current contract or no clear purpose flagged for review.

                ## Notes
                Start from the **Vendor** template for each major supplier and keep the register as the index.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register of every office supplier with annual cost, renewal date and notice period, reviewed in full at least once a year."
                cadence: rolling
              tasks:
                - "Export the list of payees from the last twelve months"
                - "Find the signed contract or engagement letter for each supplier"
                - "Record renewal dates and notice periods in the register"
                - "Review the whole register and mark contracts to renegotiate or end @recurring(yearly)"
            - name: Adviser fee inventory across lawyers, accountants and trustees
              description: |-
                ## Purpose
                Adviser fees are usually the second largest cost after staff, and the hardest to see: trustee fees deducted inside trusts, audit fees billed to companies, legal bills split across matters. Listing every professional adviser, how they charge and what they cost last year turns an invisible line into one the family can manage.

                ## Milestones
                1. Every legal, tax, accounting, trustee, corporate services and audit firm listed.
                2. The fee basis of each recorded: hourly, fixed, retainer or a share of assets.
                3. Last year's total paid to each firm, including fees deducted at source.
                4. The five largest adviser costs highlighted for the principal.

                ## Notes
                Ask trustees and corporate service providers for a fee statement. Fees taken directly from trust or company accounts often never reach the office's books.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table of every professional adviser with fee basis and last year's total, including fees deducted inside trusts and companies."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every professional firm that acted for the family or its entities"
                - "Ask each trustee and corporate services provider for an annual fee statement"
                - "Record each firm's fee basis and last year's total"
                - "Rank the firms by cost and share the top five with the principal"
            - name: First annual family office budget
              description: |-
                ## Purpose
                With a baseline, categories and a boundary in place, the office can set its first real budget: a figure for every cost line, by month, with a short note on anything that changes from last year. Agreed in advance, it replaces end-of-year surprises with a number the principal approved.

                ## Milestones
                1. A twelve-month budget by cost line and cost centre, built from the baseline.
                2. Known changes noted: new hires, fee increases, renewals and one-off projects.
                3. A contingency line set at an agreed percentage.
                4. The budget approved in writing by the principal or the family council.

                ## Notes
                Phase costs by month, not by twelfths. Insurance premiums, audit fees and bonuses land in particular months, and a flat budget makes every month look wrong.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A month-by-month office budget by cost line and cost centre, approved in writing by the principal or family council."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Copy the baseline into a twelve-month budget sheet by cost line"
                - "Add known changes for next year with a one-line reason each"
                - "Phase lumpy costs into the months they will actually be paid"
                - "Send the draft budget to the principal for written approval"
            - name: Budget calendar for the office year
              description: |-
                ## Purpose
                Budgets slip when nobody knows when the draft is due, when advisers need to quote and when the family meets to approve it. A one-page calendar fixes the dates for quotes, drafts, review, approval, the mid-year reforecast and year-end, so the budget arrives before the year it covers.

                ## Milestones
                1. A start date for the next budget at least three months before the year begins.
                2. Dates for adviser fee quotes, the first draft, review and approval.
                3. The mid-year reforecast and the year-end close dates fixed.
                4. Every date entered in the office calendar with an owner.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page budget calendar with owners and dates for quotes, draft, approval, reforecast and close, entered in the office calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the date the family should approve next year's budget"
                - "Work back to dates for adviser quotes and the first draft"
                - "Add the mid-year reforecast and year-end close dates"
                - "Enter every date in the shared office calendar with an owner"
            - name: Monthly budget versus actual report
              description: |-
                ## Purpose
                Comparing the budget with reality every month, while there is still time to act, is what makes a budget work. A short report, one page of cost lines with budget, actual, variance and a sentence on anything more than ten percent out, gives the principal the picture in five minutes.

                ## Milestones
                1. A standard one-page layout agreed with the principal.
                2. Actuals closed and coded by an agreed working day each month.
                3. Every variance over an agreed threshold explained in one sentence.
                4. Twelve consecutive monthly reports issued on time.

                ## Notes
                Start from the **Month-end close** template so the coding and accrual steps happen before the report, not after.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page budget versus actual report with explained variances is sent to the principal by the twelfth of every month."
                cadence: rolling
              tasks:
                - "Agree the one-page report layout with the principal"
                - "Close and code last month's costs, then issue the report @recurring(monthly:12)"
                - "Write one sentence explaining each variance over the threshold"
                - "File each report in the office budget folder"
            - name: Weekly invoice approval and coding run
              description: |-
                ## Purpose
                Invoices that sit in an inbox get paid late, coded wrong or paid twice. A fixed weekly run, where every new invoice is checked against its contract, coded to a cost line and cost centre and sent to the right approver, keeps the books clean and the monthly report fast.

                ## Milestones
                1. A single inbox or folder where all office invoices arrive.
                2. A weekly slot when invoices are checked, coded and routed for approval.
                3. Duplicate and unexpected invoices caught before payment.
                4. No invoice older than two weeks left unprocessed.

                ## Notes
                Never change a supplier's bank details from an emailed request. Call the supplier on a number you already hold before any change.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every office invoice is coded and routed for approval within a week of arrival, with no unprocessed invoice older than two weeks."
                cadence: rolling
              tasks:
                - "Set up one shared inbox for all office invoices"
                - "Code and route the week's invoices for approval @recurring(weekly:tue)"
                - "Check each invoice against its contract or engagement letter"
                - "Write the bank detail change callback rule into the payment procedure"
            - name: Quarterly cost review with the principal
              description: |-
                ## Purpose
                Monthly reports show the numbers, but decisions need a conversation: whether to keep a retainer, why legal costs doubled, whether the contingency is enough. A quarterly hour with the principal turns variances into decisions and keeps the budget a live document rather than an annual ritual.

                ## Milestones
                1. A standing quarterly meeting in the principal's calendar.
                2. A short pack: year to date against budget, forecast for the year and three questions.
                3. Decisions from each review written down with an owner.
                4. Actions from the previous review checked at the start of the next.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly cost reviews held a year, each with a written list of decisions and owners."
                cadence: rolling
              tasks:
                - "Book a standing quarterly hour with the principal"
                - "Prepare the year to date, full-year forecast and three questions @recurring(quarterly)"
                - "Record decisions and owners at the end of each review"
                - "Open the next review by checking last quarter's actions"
            - name: Monthly recharge run to family members and entities
              description: |-
                ## Purpose
                Costs agreed as belonging to a member or an entity have to be billed, or the shared budget quietly subsidises one branch. A monthly recharge run issues a statement to each member or entity, showing what was charged, why, and how it is to be settled.

                ## Milestones
                1. A recharge list built from the spending boundary and the allocation method.
                2. A standard statement format for members and entities.
                3. Statements issued every month with supporting invoices available.
                4. Settlement of each statement tracked and overdue balances followed up.

                ## Notes
                Agree with the accountant whether a recharge needs a formal invoice, and whether any indirect tax applies, before the first run.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Recharge statements go to every member and entity each month, and no recharge balance is more than sixty days unsettled."
                cadence: rolling
              tasks:
                - "Build the recharge list from the spending boundary"
                - "Issue recharge statements to members and entities @recurring(monthly:20)"
                - "Ask the accountant whether recharges need formal invoices"
                - "Follow up any recharge balance older than sixty days"
            - name: Commitments and accruals log
              description: |-
                ## Purpose
                Signed engagements for lawyers, deposits on refurbishments and annual licences paid in advance all distort the monthly numbers if they are only seen when cash moves. A log of commitments and accruals means the report shows what the office owes and has used, not just what it has paid.

                ## Milestones
                1. Every signed engagement or order not yet fully invoiced listed with its value.
                2. Prepaid annual costs spread over the months they cover.
                3. Accruals posted for work done but not yet billed each month.
                4. The log reconciled to the monthly report before it is issued.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A commitments and accruals log is reconciled to the books every month, so the budget report reflects costs incurred, not just paid."
                cadence: rolling
              tasks:
                - "List signed engagements and orders not yet fully invoiced"
                - "Spread prepaid annual costs across the months they cover"
                - "Post accruals for unbilled work and reconcile the log @recurring(monthly:27)"
                - "Ask each adviser on a large matter for a monthly unbilled work figure"
            - name: Staff cost budget and payroll reconciliation
              description: |-
                ## Purpose
                Salaries, bonuses, pensions, benefits and employer contributions are usually more than half the office budget, and they drift with every pay rise and new benefit. Budgeting each person's full employment cost and reconciling payroll monthly keeps the biggest line accurate.

                ## Milestones
                1. A sheet of each role's full cost: salary, bonus, benefits and employer contributions.
                2. Pay review and bonus timing reflected in the monthly budget.
                3. Payroll reconciled to the budget sheet every month.
                4. Unbudgeted staff costs flagged to the principal before they are committed.

                ## Notes
                Keep the detailed sheet confidential to the principal and the controller. Report staff costs to the wider family as a total.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full employment cost sheet for every role, reconciled to payroll each month, with any unbudgeted cost flagged before commitment."
                cadence: rolling
              tasks:
                - "Build a full cost sheet for every role in the office"
                - "Mark the months pay rises and bonuses will land"
                - "Reconcile payroll to the staff cost sheet @recurring(monthly:8)"
                - "Agree who may see the detailed sheet and restrict access"
            - name: Insurance premium budget and renewal tracker
              description: |-
                ## Purpose
                Premiums for homes, art, vehicles, liability and directors' cover arrive at different times and can jump sharply after a claim or a bad market year. A tracker of every policy's premium, renewal month and paying entity lets the budget carry the right figure and gives warning when a renewal will cost more.

                ## Milestones
                1. Every policy listed with premium, renewal month and paying entity.
                2. Each premium phased into the budget in its renewal month.
                3. The broker asked for an indication of each renewal two months ahead.
                4. Premium changes over the year compared with the budget.

                ## Notes
                This is the cost side only. Whether the cover itself is right belongs to the family's risk and insurance review with the broker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A premium tracker covering every policy, with each renewal budgeted in its month and broker indications requested two months ahead."
                cadence: cyclic
              tasks:
                - "List every policy with its premium, renewal month and paying entity"
                - "Phase each premium into the budget in its renewal month"
                - "Ask the broker for renewal indications for the coming year @recurring(yearly)"
                - "Compare actual premiums with the budget after each renewal"
            - name: Residence running costs roll-up into the office budget
              description: |-
                ## Purpose
                Each estate or house manager may run their own budget, but the principal still needs one view of what the homes cost together. A quarterly roll-up of each residence's spending into the office budget, on the same cost lines, shows the true cost of property alongside everything else.

                ## Milestones
                1. Each residence's budget mapped to the office chart of accounts.
                2. A standard quarterly return agreed with each estate or house manager.
                3. Residence costs consolidated into the office report each quarter.
                4. Large differences between homes explained to the principal.

                ## Notes
                Keep the operation of each house with its manager. The office's job here is consolidation and comparison, not running the property.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every residence submits a quarterly cost return on the office cost lines, consolidated into the office report each quarter."
                cadence: rolling
              tasks:
                - "Map each residence's budget lines to the office chart of accounts"
                - "Agree a one-page quarterly cost return with each house manager"
                - "Consolidate the residence returns into the office report @recurring(quarterly)"
                - "Explain the largest cost differences between homes to the principal"
            - name: Annual budget setting cycle
              description: |-
                ## Purpose
                Once the first budget exists, every later one should follow the same steps on the same dates: last year's actuals, known changes, adviser quotes, a draft, a review and approval. Running it as a fixed annual cycle means next year's budget is agreed before the year starts, every year.

                ## Milestones
                1. The cycle started on the date set in the budget calendar.
                2. Fee quotes and known changes gathered from advisers and managers.
                3. A draft budget compared line by line with this year's forecast.
                4. Next year's budget approved before the current year ends.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Next year's office budget is approved in writing before the start of the year it covers, for three consecutive years."
                cadence: cyclic
              tasks:
                - "Start next year's budget on the date set in the calendar @recurring(yearly)"
                - "Ask each adviser and manager for their cost estimate for next year"
                - "Compare the draft line by line with this year's forecast"
                - "Circulate the draft for approval at least a month before year-end"
            - name: Mid-year reforecast
              description: |-
                ## Purpose
                By month six the original budget is out of date: a lawsuit has started, a hire has been delayed, a renewal came in high. A mid-year reforecast restates the full-year figure from actuals and known changes, so the principal knows the likely outturn and whether anything needs to stop.

                ## Milestones
                1. Six months of actuals closed and reconciled.
                2. A full-year forecast by cost line built from actuals plus known changes.
                3. The forecast compared with the approved budget and the gaps explained.
                4. The principal's decision on any overspend recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A full-year reforecast by cost line is issued within a month of the half-year, with a recorded decision on any forecast overspend."
                cadence: cyclic
              tasks:
                - "Close and reconcile the first six months of actuals"
                - "Build the full-year forecast by cost line @recurring(yearly)"
                - "Explain every line forecast to miss budget by more than ten percent"
                - "Record the principal's decisions on the forecast overspend"
            - name: Reading family office management accounts
              description: |-
                ## Purpose
                Principals and office managers who came from business or a profession other than finance often sign accounts they cannot fully read. Learning how the profit and loss, balance sheet, accruals, prepayments and recharge balances fit together means questions get asked at the right time, not after the audit.

                ## Milestones
                1. The difference between cost incurred and cash paid explained in your own words.
                2. Accruals, prepayments and recharge balances found on a real set of accounts.
                3. One month's report walked through line by line with the controller or accountant.
                4. Three questions about the accounts written down and answered.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full walk-through of one month's management accounts with the accountant, with three written questions asked and answered."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick one recent month of the office's management accounts"
                - "Find the accruals, prepayments and recharge balances in it"
                - "Book an hour with the accountant to walk through it line by line"
                - "Write three questions and record the answers"
            - name: Understanding adviser fee models
              description: |-
                ## Purpose
                Hourly rates, capped fees, fixed annual retainers, success fees and fees based on assets each reward different behaviour, and the cheapest-looking model is often the most expensive. Knowing how each works lets the office compare quotes properly and pick the model that suits the work.

                ## Milestones
                1. The main fee models described with an example of each from the family's own advisers.
                2. The behaviour each model encourages noted, such as hours spent or assets gathered.
                3. Questions to ask about scope, caps and disbursements written down.
                4. One current engagement assessed against the alternatives.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note comparing fee models with examples from the family's advisers, and one current engagement assessed against the alternatives."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the fee model each current adviser uses"
                - "Write what each model rewards the adviser for doing"
                - "Draft questions on scope, caps and disbursements for future quotes"
                - "Assess one current engagement against two alternative fee models"
            - name: Cost allocation methods compared
              description: |-
                ## Purpose
                Shared costs can be split by headcount, by assets each branch holds, by hours of staff time used, or by a fixed share, and each method feels fair to some members and unfair to others. Understanding the trade-offs before choosing avoids rebuilding the method after the first complaint.

                ## Milestones
                1. Four allocation methods described with their pros and cons.
                2. Last year's shared costs allocated under each method as a test.
                3. The effect on each branch shown side by side.
                4. A recommended method written up for the principal or family council.

                ## Notes
                Simple and explainable beats precise. A method that needs a spreadsheet nobody else understands will be challenged every year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of four allocation methods applied to last year's shared costs, with a recommended method sent to the principal."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a short description of four allocation methods"
                - "Apply each method to last year's shared costs"
                - "Show the result for each branch side by side"
                - "Send a recommendation with reasons to the principal"
            - name: Questions on the tax treatment of office costs
              description: |-
                ## Purpose
                Whether an office cost is deductible, which entity should bear it and whether recharges carry tax depends on the countries, entities and people involved, and getting it wrong can cost more than the office itself. Preparing a clear set of questions and facts for the tax adviser gets an answer that fits the family rather than a generic one.

                ## Milestones
                1. A list of the entities and individuals that pay or receive office costs.
                2. The main cost types and how they are currently charged summarised.
                3. Questions on deductibility, recharges and indirect tax written for the adviser.
                4. The adviser's answers recorded and reflected in the spending boundary.

                ## Notes
                This is preparation for professional advice, not a substitute for it. Keep the adviser's written reply with the budget papers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written set of questions answered in writing by the family's tax adviser, with the answers reflected in the spending boundary."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every entity and person that pays or receives office costs"
                - "Summarise how each main cost type is charged today"
                - "Ask the agent to draft clear questions for the tax adviser from the summary"
                - "Record the adviser's answers and update the spending boundary"
            - name: Variance analysis practice
              description: |-
                ## Purpose
                Variances are only useful when explained as timing, price, volume or a one-off, because each needs a different response. Practising on a few months of real figures teaches the office manager to write explanations that help the principal decide, not just restate the number.

                ## Milestones
                1. The four common causes of variance described with an example of each.
                2. Three months of past variances reclassified by cause.
                3. Explanations rewritten to say what happens next.
                4. The principal's feedback on the rewritten explanations recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three months of past variances reclassified by cause and rewritten with next steps, reviewed with the principal."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write one example each of a timing, price, volume and one-off variance"
                - "Reclassify three months of past variances by cause"
                - "Rewrite each explanation to end with what happens next"
                - "Ask the principal which explanations were most useful"
            - name: Cost per service line for the office
              description: |-
                ## Purpose
                Families rarely know what each service the office provides really costs: bill pay, reporting, tax coordination, property oversight, travel and events. Estimating staff time and direct costs per service shows which services are expensive for what they deliver and gives a basis for fairer charging.

                ## Milestones
                1. A list of the services the office provides, in the family's words.
                2. Two weeks of staff time logged against those services.
                3. Direct costs assigned to each service.
                4. A cost per service table shared with the principal.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table of the annual cost of each office service, based on two weeks of logged staff time and assigned direct costs."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the services the office provides to the family"
                - "Ask each staff member to log their time by service for two weeks"
                - "Assign direct costs such as software and suppliers to each service"
                - "Build the cost per service table and share it with the principal"
            - name: Peer cost benchmarking from family office surveys
              description: |-
                ## Purpose
                Published family office surveys from banks, consultancies and industry bodies give rough ranges for staff numbers, cost by service and cost as a share of assets. Comparing the office against a few of them, with care about how each defines cost, shows whether it is unusually lean or unusually expensive.

                ## Milestones
                1. Two or three recent surveys found and their definitions of cost noted.
                2. The office's costs restated to match the survey definitions.
                3. The comparison written up with its limits stated plainly.
                4. The comparison refreshed when a new survey is published.

                ## Notes
                Survey samples are small and self-reported. Treat a benchmark as a prompt for a question, never as a target.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written comparison of the office's costs with at least two published surveys, with differing definitions stated, refreshed yearly."
                cadence: rolling
              tasks:
                - "Find two or three recent published family office cost surveys"
                - "Note how each survey defines cost and which offices it covers"
                - "Restate the office's costs to match the survey definitions"
                - "Refresh the comparison with the latest survey @recurring(yearly)"
            - name: Adviser fee renegotiation round
              description: |-
                ## Purpose
                Once the fee inventory shows the five largest adviser costs, each one deserves a direct conversation about scope, rates and caps. A structured round, with a clear ask for each firm and the family's total spend in hand, often brings fixed fees or volume discounts without changing the relationship.

                ## Milestones
                1. A specific ask prepared for each of the five largest adviser relationships.
                2. A meeting or call held with each firm's relationship partner.
                3. Agreed changes confirmed in an updated engagement letter.
                4. The saving or improved terms reflected in next year's budget.

                ## Notes
                Ask for a fixed fee or cap on recurring work first. It is often easier to agree than a lower hourly rate.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Conversations held with the five largest advisers, with any agreed changes confirmed in updated engagement letters."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-line ask for each of the five largest advisers"
                - "Book a call with each firm's relationship partner"
                - "Confirm any agreed changes in an updated engagement letter"
                - "Update next year's budget with the new terms"
            - name: Build or outsource cost comparison for one service
              description: |-
                ## Purpose
                Bookkeeping, payroll, IT support and bill pay can be done by an employee or bought from a provider, and the right answer changes as the office grows. Comparing the full cost of each option for one service, including management time and the cost of an error, gives a decision based on numbers rather than habit.

                ## Milestones
                1. One service chosen where the current arrangement is in doubt.
                2. The full cost of doing it in-house estimated, including management time.
                3. Two or three outsourced quotes obtained for the same scope.
                4. A decision recorded with the reasons and a review date.

                ## Notes
                Start from the **Purchase decision** template. Include the cost of switching, which is easy to leave out.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded build or outsource decision for one office service, comparing full in-house cost with at least two quotes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the one service most in doubt"
                - "Estimate the full in-house cost including management time"
                - "Request quotes from two or three providers for the same scope"
                - "Record the decision and set a date to review it"
            - name: Software licence and subscription cost audit
              description: |-
                ## Purpose
                Offices pick up subscriptions for reporting tools, document vaults, video calls and design software, and keep paying for seats belonging to people who left two years ago. A yearly audit of every licence, its users and its cost cuts waste without touching what the office actually uses.

                ## Milestones
                1. Every software subscription listed with cost, renewal date and number of seats.
                2. Each seat matched to a current user.
                3. Unused seats and duplicate tools cancelled or downgraded.
                4. The saving recorded and the list kept for next year.

                ## Notes
                This audit is about cost. Choosing new systems sits with the office's systems review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A yearly list of every subscription with seats matched to users, and unused seats cancelled before renewal."
                cadence: cyclic
              tasks:
                - "Export every recurring software charge from cards and bank accounts"
                - "Match each paid seat to a current user"
                - "Cancel or downgrade unused seats before their renewal date"
                - "Repeat the subscription audit before the main renewals @recurring(yearly)"
            - name: Consolidating duplicate suppliers across homes and entities
              description: |-
                ## Purpose
                Each house, company and family member often buys the same service separately: four IT firms, three florists, two security monitoring contracts. Consolidating where it makes sense brings volume pricing and fewer people with access to the family's homes and data.

                ## Milestones
                1. Suppliers grouped by service across every residence and entity.
                2. Services bought from more than one supplier identified.
                3. A preferred supplier proposed for each duplicated service, with a quote.
                4. Contracts moved where the family agrees, with notice periods respected.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every duplicated service reviewed, with a preferred supplier chosen or a written reason for keeping more than one."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Group the supplier register by service type"
                - "Mark every service bought from more than one supplier"
                - "Get a combined quote from the strongest supplier in each group"
                - "Give notice to the suppliers being replaced, within their notice periods"
            - name: Choosing how the family funds the office
              description: |-
                ## Purpose
                An office can be paid for by a holding company, by a fixed fee from each branch, by passing through actual costs, or by a mix. The choice affects tax, fairness between branches and how much each member cares about cost, so it deserves an explicit decision rather than whatever happened when the office began.

                ## Milestones
                1. The current funding arrangement described as it actually works.
                2. Three alternative funding models set out with their effect on each branch.
                3. Tax and legal input obtained on the preferred model.
                4. The chosen model approved by the principal or family council and written down.

                ## Notes
                Ask the tax adviser and lawyer to confirm the preferred model before it is approved. The paying entity can matter as much as the amount.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written funding model for the office, reviewed by the tax adviser and approved by the principal or family council."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down how the office is paid for today"
                - "Set out three alternative funding models and their effect on each branch"
                - "Ask the tax adviser and lawyer to comment on the preferred model"
                - "Put the chosen model to the principal or family council for approval"
            - name: Expense policy for office staff
              description: |-
                ## Purpose
                Staff who book flights, take advisers to lunch or buy equipment need to know what is allowed before they spend, not after. A short expense policy sets limits, receipts rules and who approves claims, and protects staff as much as the family's money.

                ## Milestones
                1. Limits set for travel, meals, equipment and gifts.
                2. Receipt and claim deadlines written down.
                3. An approver named for every claim, including the head of office's own.
                4. The policy signed by every member of staff.

                ## Notes
                The head of office's own claims should be approved by the principal or an independent person, never by a junior member of staff.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written expense policy with limits and approvers, signed by every member of staff and reviewed each year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft limits for travel, meals, equipment and gifts"
                - "Name the approver for each role's claims"
                - "Ask every member of staff to read and sign the policy"
                - "Review the expense limits against inflation and actual claims @recurring(yearly)"
            - name: Rules for family business travel charged to the office
              description: |-
                ## Purpose
                Trips to board meetings, adviser visits and family assemblies blur into holidays, and the office ends up paying for a week in a ski resort because a meeting was held there. Clear rules on which trips the office pays for, at what class and for whom, prevent arguments between branches.

                ## Milestones
                1. The kinds of trip the office will pay for listed.
                2. Rules set for class of travel, accommodation and accompanying family.
                3. Mixed business and personal trips given a simple split rule.
                4. The rules agreed by the principal and shared with every branch.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written set of travel cost rules agreed by the principal and shared with every branch, with a split rule for mixed trips."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List last year's trips the office paid for"
                - "Draft rules for which trips qualify and at what standard"
                - "Write a simple split rule for trips that mix business and leisure"
                - "Review the travel rules with the principal each year @recurring(yearly)"
            - name: Contingency reserve for unplanned office costs
              description: |-
                ## Purpose
                Litigation, a sudden departure, a cyber incident or an urgent restructuring can each cost more than a year's adviser budget. A reserve, sized against a short list of realistic surprises and approved separately from the operating budget, means the office can respond without emergency transfers.

                ## Milestones
                1. Five realistic unplanned cost events listed with rough costs.
                2. A reserve amount agreed and held in a named account.
                3. Rules for who can draw on the reserve and how it is topped up.
                4. The reserve balance and the event list checked every quarter.

                ## Notes
                Start from the **Risk register** template to list the events and their rough cost.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved contingency reserve held in a named account, with drawdown rules and a quarterly balance check."
                cadence: rolling
              tasks:
                - "List five unplanned events that would bring sudden office costs"
                - "Estimate a rough cost for each with the relevant adviser"
                - "Agree the reserve amount and drawdown rules with the principal"
                - "Check the reserve balance against the event list @recurring(quarterly)"
            - name: Annual budget presentation to the family council
              description: |-
                ## Purpose
                Where a family council or board oversees the office, the budget needs to be presented, questioned and approved in a meeting, not sent as an attachment. A clear presentation of last year's outturn, next year's budget and the main changes earns trust and gets a minuted approval.

                ## Milestones
                1. A short pack: last year against budget, next year's budget, changes and risks.
                2. The pack circulated at least a week before the meeting.
                3. Questions answered in the meeting and recorded.
                4. The budget approval minuted.

                ## Notes
                Start from the **Board meeting** template for the agenda, papers and minutes.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The office budget is presented to the family council with papers sent a week ahead, and its approval is recorded in the minutes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the meeting date and agenda slot with the council chair"
                - "Prepare a pack of last year's outturn, next year's budget and changes"
                - "Send the pack to council members a week before the meeting"
                - "Record the council's questions and the approval in the minutes"
            - name: Year-end cost close and audit file
              description: |-
                ## Purpose
                Whether or not the office entity is audited, year-end is when every accrual, recharge and prepayment must be settled and the year's costs fixed. A tidy year-end file, with reconciliations and supporting schedules, shortens the accountant's work and closes the year's argument about who paid for what.

                ## Milestones
                1. All invoices for the year received and accrued.
                2. Recharge balances with every member and entity agreed.
                3. Reconciliations and schedules assembled in one year-end file.
                4. The file handed to the accountant or auditor by the agreed date.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete year-end file with reconciliations and agreed recharge balances is with the accountant or auditor by the agreed date."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the accountant for their year-end checklist and deadline"
                - "Chase every supplier for invoices for work done in the year"
                - "Agree year-end recharge balances with each member and entity"
                - "Assemble the reconciliations and hand over the year-end file"
            - name: Costing an office move or relocation
              description: |-
                ## Purpose
                Moving the office to a new building, city or country brings costs that never sit in the operating budget: fit-out, deposits, overlapping leases, removals, new systems and sometimes relocating staff. A one-off project budget, approved separately, keeps the move visible and stops it disguising the running costs.

                ## Milestones
                1. Every one-off cost of the move listed with a quote or estimate.
                2. Running cost changes after the move estimated.
                3. A separate project budget approved by the principal.
                4. Actual move costs tracked against the project budget until it closes.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A separate approved project budget for the office move, with actual costs tracked against it until the project is closed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every one-off cost of the move from fit-out to removals"
                - "Get quotes for the three largest move costs"
                - "Estimate how running costs change after the move"
                - "Track actual move costs in a separate project budget"
            - name: Budget for the family assembly gathering
              description: |-
                ## Purpose
                Family assemblies can bring forty people together for two days, with venue, travel, facilitators and childcare. Setting the budget early, deciding which costs the office carries and which each branch pays, and tracking it like any other project avoids a large surprise in the month it happens.

                ## Milestones
                1. A cost estimate for venue, travel, facilitators, meals and childcare.
                2. A rule agreed for which costs the office pays and which branches pay.
                3. The budget approved and phased into the right month.
                4. Actual costs reported against the budget within a month of the event.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An approved budget for the family assembly, with actual costs reported against it within a month of the gathering."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the organiser for the expected numbers, dates and venue"
                - "Estimate the costs of venue, travel, facilitators and childcare"
                - "Agree which costs the office pays and which each branch pays"
                - "Report the actual costs against budget after the event"
            - name: Re-scoping office costs after a business sale
              description: |-
                ## Purpose
                When the family sells its operating business, the office often changes overnight: more liquid assets to report on, new advisers, staff who supported the business no longer needed, and a different paying entity. Re-scoping the budget after the sale stops the office carrying costs that belonged to the old world.

                ## Milestones
                1. Office costs that were paid by or for the sold business identified.
                2. New costs arising from the sale estimated, such as reporting and advisers.
                3. A revised budget with a new paying entity where needed.
                4. The revised budget approved within six months of completion.

                ## Notes
                Take tax and legal advice before moving costs between entities after a sale. Timing can matter.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A revised office budget approved within six months of a business sale, with old and new costs reassigned to the right entities."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Mark every office cost that was paid by or for the sold business"
                - "Estimate the new costs the sale brings"
                - "Ask the tax adviser which entity should now bear the office costs"
                - "Put the revised budget to the principal for approval"
            - name: New office manager's first ninety days with the budget
              description: |-
                ## Purpose
                An office manager or controller who inherits the budget usually finds it in a predecessor's spreadsheet with private conventions. A ninety-day plan to understand the numbers, meet the advisers, check the controls and issue the first report sets the tone with the family and finds problems while they are still the predecessor's.

                ## Milestones
                1. The last two years of budgets, actuals and reports read.
                2. Each major adviser and supplier met or spoken to.
                3. Approval limits and payment controls checked against how they work in practice.
                4. A first report issued, with a short note of issues found.

                ## Notes
                Start from the **Onboarding 30/60/90** template if you want the plan in three stages. Write the issues found down early, while they are clearly inherited.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "Within ninety days, a first budget report is issued with a written note of inherited issues and the controls checked."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect the last two years of budgets, actuals and reports"
                - "Book introductory calls with the five largest advisers and suppliers"
                - "Test two recent payments against the approval matrix"
                - "Write a note of inherited issues and send it with the first report"
            - name: One-page cost summary for the parent principal
              description: |-
                ## Purpose
                Founders of the wealth often want one page, not a pack: total cost this year, against budget, what each branch received and the three things that need a decision. Designing that page with the principal, rather than for them, makes it the document they actually read.

                ## Milestones
                1. The principal asked which five numbers matter to them.
                2. A one-page layout drafted and tested on last month's figures.
                3. The layout adjusted after the principal's comments.
                4. The page sent with every monthly report from then on.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A one-page cost summary designed with the principal is attached to every monthly report."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the principal which five cost numbers they most want to see"
                - "Draft the one-page summary using last month's figures"
                - "Adjust the layout after the principal's comments"
                - "Add the summary page to the monthly report pack"
            - name: Cost sharing after the family splits into branches
              description: |-
                ## Purpose
                When a parent dies or retires and the family divides into branches, costs once paid from one pocket must be shared among siblings who may want very different services. Agreeing a sharing arrangement early, with each branch's own services priced separately, avoids the office becoming the first casualty of the transition.

                ## Milestones
                1. Services each branch uses listed and costed separately.
                2. Truly shared costs, such as governance and records, identified.
                3. A sharing formula for shared costs agreed by every branch.
                4. Recharges updated and the first statement under the new formula issued.

                ## Notes
                Involve an independent adviser or the family council chair in the discussion. Cost splits often carry older grievances with them.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A cost sharing formula agreed in writing by every branch, with recharges issued under it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the services each branch uses and their cost"
                - "Separate the costs that genuinely serve the whole family"
                - "Propose a sharing formula and discuss it with each branch"
                - "Issue the first recharge statements under the agreed formula"
            - name: Charging terms for a branch that leaves shared services
              description: |-
                ## Purpose
                Sometimes one branch wants its own advisers and its own staff, but still relies on the office for records or governance. Setting out what that branch pays for what it keeps, and the notice it gives, keeps the remaining branches from carrying the cost of its departure.

                ## Milestones
                1. The services the departing branch will still use listed.
                2. A price for each retained service agreed.
                3. A notice period and handover plan for services it is leaving.
                4. The terms written up and signed by the branch and the principal.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Written charging terms for a departing branch, covering retained services, prices and notice, signed by both sides."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the branch which office services it wants to keep"
                - "Price each retained service from the cost per service table"
                - "Agree a notice period and handover plan for the rest"
                - "Write up the terms for both sides to sign"
            - name: Cost reduction plan for a lean year
              description: |-
                ## Purpose
                After a market fall, a business downturn or a large one-off spend, the principal may ask for the office to cost less next year. A cost reduction plan that ranks every line by how easily it can be cut and what the family loses, rather than a flat percentage cut, protects the services that matter most.

                ## Milestones
                1. A target saving agreed with the principal.
                2. Every cost line ranked by ease of cutting and impact on the family.
                3. A set of cuts that meets the target, with effects described plainly.
                4. Approved cuts in the next budget and progress reported each quarter.

                ## Notes
                Tell staff early and honestly if roles are affected, and take employment advice before acting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved cost reduction plan that meets the target saving, with each cut's effect described and progress reported quarterly."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree the target saving and timing with the principal"
                - "Rank every cost line by ease of cutting and impact"
                - "Draft a set of cuts that meets the target"
                - "Build the approved cuts into the next budget"
            - name: Next-generation member shadowing the office budget
              description: |-
                ## Purpose
                A parent who wants a son or daughter to oversee the office one day can start by letting them shadow the budget for a year: reading the reports, joining the quarterly review and asking questions. It is a low-risk way to learn how the family's money is spent before they are responsible for it.

                ## Milestones
                1. A rising-generation member chosen and the arrangement agreed with them.
                2. Access to the monthly summary and the quarterly review granted.
                3. One cost line owned by them for the year, with the controller as mentor.
                4. A short reflection written at the end of the year.

                ## Notes
                Keep detailed staff pay out of what they see unless the principal decides otherwise.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rising-generation member attends four quarterly reviews in a year and owns one cost line, with a written reflection at the end."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the chosen family member whether they want to shadow the budget"
                - "Give them access to the monthly summary and invite them to the review"
                - "Assign one cost line for them to track with the controller"
                - "Ask for a short written reflection at the end of the year"
            - name: Total office cost as a share of family assets
              description: |-
                ## Purpose
                Experienced offices track total cost, including fees deducted inside trusts and funds where they can be found, as a percentage of the assets served, because it shows whether the office is getting more or less expensive as the family grows. Calculated the same way every year, it is the single number that best summarises the area.

                ## Milestones
                1. A definition of total cost agreed, stating what is included and excluded.
                2. A definition of assets served agreed with the reporting provider.
                3. The ratio calculated for the current and previous year.
                4. The ratio added to the annual budget presentation.

                ## Notes
                Start from the **Metrics log** template to keep the ratio and its inputs year by year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Total office cost as a share of assets calculated on a written definition for two consecutive years and shown in the budget presentation."
                cadence: rolling
              tasks:
                - "Write down what counts as total cost and what does not"
                - "Agree the assets served figure with the reporting provider"
                - "Calculate the ratio for this year and last year"
                - "Recalculate the ratio after each year-end close @recurring(yearly)"
            - name: Cross-border recharges between office entities
              description: |-
                ## Purpose
                Families with staff or entities in several countries often have one entity providing services to another, which can bring transfer pricing, withholding tax and indirect tax questions. Mapping who serves whom and how it is charged, then taking advice, keeps the office's own arrangements from becoming a tax problem.

                ## Milestones
                1. A map of which office entity provides services to which, in which country.
                2. How each service is charged today written down.
                3. Advice taken from tax advisers in the relevant countries.
                4. Intercompany service agreements in place where the advisers recommend them.

                ## Notes
                This is specialist ground. Do not change charging arrangements between countries without written advice from both sides.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A map of cross-border services between office entities, reviewed by tax advisers, with service agreements in place where advised."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw a map of which entity serves which and in which country"
                - "Write down how each cross-border service is charged today"
                - "Send the map to the tax advisers in each country for comment"
                - "Put service agreements in place where the advisers recommend them"
            - name: Indirect tax recovery review on office costs
              description: |-
                ## Purpose
                Depending on the country and how the office is set up, VAT or GST on office costs may be partly recoverable or may be a pure cost, and many offices never check. A review with an indirect tax adviser can confirm the position and stop the office either overpaying or claiming what it should not.

                ## Milestones
                1. Last year's indirect tax paid on office costs totalled by entity.
                2. Each entity's registration status and activities summarised.
                3. An indirect tax adviser's view on recovery obtained in writing.
                4. Any recommended registration, claim or process change made.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written indirect tax view on office costs from an adviser, with any recommended change made within six months."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Total last year's indirect tax paid on office costs by entity"
                - "Summarise each entity's registration status and activities"
                - "Ask an indirect tax adviser for a written view on recovery"
                - "Make any registration or process change the adviser recommends"
            - name: Zero-based rebuild of the office budget
              description: |-
                ## Purpose
                Budgets rolled forward from last year carry old decisions nobody would make again. Every three to five years, rebuilding the budget from zero, where every line must be justified by a current service the family wants, clears out costs that survived only because they were already there.

                ## Milestones
                1. The list of services the family wants from the office confirmed.
                2. Each cost line justified from zero against those services.
                3. Lines that cannot be justified removed or reduced.
                4. The rebuilt budget compared with the rolled-forward version and approved.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A zero-based office budget, with every line tied to a confirmed service, compared with the rolled-forward budget and approved."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm with the principal the services the office should provide"
                - "Justify each cost line from zero against those services"
                - "Remove or reduce the lines that cannot be justified"
                - "Compare the rebuilt and rolled-forward budgets for approval"
            - name: Ten-year office cost forecast for a growing family
              description: |-
                ## Purpose
                Five family members today may be twenty-five in two generations, each with their own homes, tax returns and reporting needs. A ten-year forecast of office costs, linked to how many households it will serve, shows when the current model will strain and when the funding model or scope should change.

                ## Milestones
                1. The number of households the office will serve projected for ten years.
                2. Costs split into fixed and per-household parts.
                3. A ten-year forecast built from those two parts.
                4. The points where cost or capacity strains noted for the family council.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ten-year cost forecast tied to projected households, with the strain points presented to the family council."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Project the number of households the office will serve each year"
                - "Split current costs into fixed and per-household parts"
                - "Build a ten-year forecast from the two parts"
                - "Note the years where cost or capacity strains and share them"
---

# Family Office Budget and Costs

This area is for the principal who pays for a family office and wants to know where the money goes, and for the office manager or controller who has to run the budget day to day. It starts with foundations (a cost baseline, a chart of accounts, the line between office and personal spending, approval limits and a first budget), moves into the operating routines of monthly actuals, invoice approval, recharges, accruals and the annual cycle, then the skills of reading management accounts, fee models and allocation methods, decisions such as renegotiating adviser fees and choosing how members fund the office, dated events like the budget presentation and the year-end close, situations for new managers, parents and branches that split, and specialist work on total cost as a share of assets, cross-border recharges and zero-based rebuilds.

What repeats is a weekly invoice approval run, a monthly budget versus actual report, a monthly recharge run and accruals check, a quarterly cost review with the principal, and a yearly round of budget setting, reforecasting, insurance renewals and supplier reviews. The Vendor, Month-end close, Purchase decision, Board meeting, Metrics log and Risk register templates pair with the supplier register, the monthly close, build or outsource comparisons, the budget presentation, the cost ratio and the reserve. None of this is tax or accounting advice: agree recharges, cost treatment and entity charging with the family's accountant and tax adviser. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
