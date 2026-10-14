---
id: sales-revenue.sales-commission-payouts
name: Sales Commission Tracking & Payouts
description: "Effective-dated rates, a calculation anyone can trace, monthly reconciliation, clear statements, clean payroll handoffs, clawbacks and a fair dispute process, so every seller is paid the right commission on time."
category: business
version: 1.0.0
tags: [sales-revenue, sales-commission-payouts, manager, small-business, team, commissions, payroll, sales-operations]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - operational-checklist
    - month-end-close
    - purchase-decision
    - metrics-log
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Commission Tracking & Payouts
          description: "Calculating earned commission each period, reconciling it with closed deals, publishing statements to reps and resolving disputes quickly and transparently."
          projects:
            - name: Commission process map with named owners
              description: |-
                ## Purpose
                Commission often gets paid through a chain of favours: a sales manager exports deals, someone in finance types numbers into a spreadsheet and payroll pays whatever arrives. Mapping each step from closed deal to money in the rep's account, with one named owner and one backup per step, shows where errors creep in and who fixes them when the person who knows the spreadsheet is on holiday.

                ## Milestones
                1. A one-page flow from closed-won deal to payslip, with every handoff shown.
                2. One owner and one backup named for data extraction, calculation, approval and payroll submission.
                3. The systems and files used at each step listed by name and location.
                4. The map agreed by the sales leader and the finance lead and saved where both teams can find it.

                ## Notes
                Draw the process as it really runs today, workarounds included, before redesigning anything.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page commission process map names an owner and a backup for every step and is signed off by sales and finance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every person who touched last month's commission run and what they did"
                - "Draw the steps from closed deal to payslip on one page"
                - "Name an owner and a backup for each step"
                - "Walk the sales leader and finance lead through the map and record their agreement"
                - "Check the named owners on the process map are still in post @recurring(quarterly)"
            - name: Signed plan acknowledgements for every rep
              description: |-
                ## Purpose
                Before anyone can calculate commission with confidence, each rep needs a current plan document they have signed, with their own rate, quota and territory attached. Missing signatures turn every later dispute into an argument about what was promised, and in some places a signed written commission agreement is a legal requirement.

                ## Milestones
                1. A list of every commission-eligible person, with plan version and signature date.
                2. Missing or outdated acknowledgements chased and signed.
                3. Signed copies stored in one restricted folder named by rep and plan year.
                4. A rule agreed that no commission is calculated under a new plan year until the signature is on file.

                ## Notes
                The plan terms belong to whoever designs the plan. This project is about evidence that each rep received and accepted them.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every commission-eligible person has a signed copy of the current plan filed in one restricted folder, with no gaps on the list."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the list of everyone paid commission in the last 12 months"
                - "Match each person to the plan version they signed and its date"
                - "Send the current plan for signature to anyone without one on file"
                - "File signed copies in a restricted folder named by rep and year"
                - "Confirm every active rep has signed the current year's plan @recurring(yearly)"
            - name: Effective-dated rep and rate master table
              description: |-
                ## Purpose
                Rates, quotas, managers and territories change mid-year, and a calculation that only knows today's values will pay March deals at July's rate. A master table where every row carries a start and end date lets the calculation look up the right rate for the date a deal closed, and leaves an audit trail of every change.

                ## Milestones
                1. A table with one row per rep per change, holding role, rate, quota, manager, territory, start date and end date.
                2. Every change in the last 12 months entered from signed plans and HR records.
                3. No overlapping or missing date ranges for any rep.
                4. New rows added only after one named approver has agreed them.

                ## Notes
                Never overwrite a row. End-date the old one and add a new one, or the history disappears.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A master table holds a dated row for every rep change in the last 12 months, with zero overlapping or missing date ranges."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create the master table with start and end date columns for every value"
                - "Enter each rep's changes from the last 12 months from signed plans"
                - "Run a check for overlapping or missing date ranges per rep"
                - "Agree who approves new rows before they are added"
                - "Compare the table with HR's list of starters, leavers and movers @recurring(monthly:26)"
            - name: Commissionable deal definition mapped to system fields
              description: |-
                ## Purpose
                Plans use phrases such as net new annual contract value, but the CRM holds amount, product lines, discounts, tax and one-off fees in separate fields. Writing down exactly which fields and values count, and which are excluded, takes the guesswork out of every calculation and stops two people producing two answers from the same deal.

                ## Milestones
                1. Each commissionable term in the plan mapped to a named CRM or billing field.
                2. Exclusions listed with where they sit in the data: tax, shipping, pass-through costs, one-off fees or whatever the plan excludes.
                3. The event that makes a deal count (signature, booking, invoice or payment) written down.
                4. The mapping confirmed by the plan owner in writing.
                5. Five recent deals worked through the definition by two people with the same result.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written field mapping, confirmed by the plan owner, lets two people calculate five test deals and reach identical commissionable amounts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Highlight every phrase in the plan that decides what is commissionable"
                - "Match each phrase to a CRM or billing field"
                - "List the items the plan excludes and where they sit in the data"
                - "Ask the plan owner to confirm the mapping in writing"
                - "Have two people calculate five recent deals and compare answers"
            - name: Commission calculation workbook build
              description: |-
                ## Purpose
                Whether commission ends up in dedicated software or not, the logic needs to exist once in a form someone else can check. A workbook with separate tabs for raw deal data, the rate table, crediting, calculation and a statement view keeps inputs apart from formulas, so a reviewer can trace any payout back to the deal that earned it.

                ## Milestones
                1. Separate tabs for raw data, rates, credits, calculations and statements.
                2. No typed-over numbers in calculation cells, with every override held in a labelled adjustments tab.
                3. Last month's payouts reproduced exactly from raw data.
                4. A read-me tab explaining each step and its owner.
                5. The file protected and versioned, with one locked copy kept per period.

                ## Notes
                Reproducing a past month exactly is the real test. If it does not match, find out why before trusting the workbook for the next run.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The workbook recalculates last month's payouts for every rep from raw data with no unexplained difference from what was paid."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Set up tabs for raw deals, rates, credits, calculations and statements"
                - "Move every manual override into a labelled adjustments tab"
                - "Recalculate last month from raw data and compare with what was paid"
                - "Write a read-me tab that explains each step of the calculation"
                - "Ask a colleague to trace one payout from the statement back to its deal"
            - name: Commission calendar of cut-offs and pay dates
              description: |-
                ## Purpose
                Reps rush late deals into the CRM, finance closes the books, payroll has its own submission deadline, and commission falls into the gaps between them. A published calendar with the deal cut-off, calculation, approval, statement and pay date for each period gives everyone the same dates and turns late changes into next month's business.

                ## Milestones
                1. Payroll's submission deadlines for the next 12 months obtained.
                2. Cut-off, calculation, approval, statement and pay dates set for each period, worked back from payroll.
                3. The calendar shared with reps, managers, finance and payroll.
                4. The rule for late deals and corrections written next to the dates.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A 12-month commission calendar with five dates per period is published to reps, finance and payroll, with the late deal rule beside it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get payroll's submission deadlines for the next 12 months"
                - "Work back from each pay date to set cut-off, calculation and approval dates"
                - "Publish the calendar in the team's shared calendar and handbook"
                - "Write the rule for deals that reach the CRM after cut-off"
                - "Publish next year's commission calendar before the year starts @recurring(yearly)"
            - name: Deal split and crediting rulebook
              description: |-
                ## Purpose
                Splits, overlays, inherited accounts and handovers between reps cause more disputes than rates do. A rulebook that turns the plan's crediting language into worked examples (two reps sharing a deal, a specialist overlay, an account moving mid-quarter, a manager's team credit) means whoever calculates gets the same answer every time.

                ## Milestones
                1. Every crediting scenario from the last year listed with how it was actually paid.
                2. A worked example written for each scenario, quoting the plan's own wording.
                3. Gaps where the plan is silent referred to the plan owner and answered in writing.
                4. A split field in the CRM that records agreed percentages before a deal closes.

                ## Notes
                Agree splits before the deal closes. Splits negotiated after everyone knows the size of the cheque are much harder to settle.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A crediting rulebook holds a worked example for every split scenario seen last year, and the CRM requires split percentages at closed-won."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull last year's deals that credited more than one person"
                - "Write a worked example for each crediting scenario you find"
                - "Send scenarios the plan does not cover to the plan owner for a ruling"
                - "Add a split percentage field that must be filled before closed-won"
            - name: Approval chain and separation of duties
              description: |-
                ## Purpose
                The person who calculates commission should not be the person who approves it, and nobody should approve their own pay. Setting out who prepares, who reviews and who signs off each run, with a threshold for extra approval, protects the business from honest mistakes and the rare dishonest one, and protects the preparer from suspicion.

                ## Milestones
                1. Preparer, reviewer and approver named for each run, with no one approving their own commission.
                2. A payout threshold above which a second approver is required.
                3. Approvals recorded with name and date in email or the calculation system.
                4. Managers' own commission approved by their manager or finance, never by themselves.

                ## Notes
                Start from the **Compliance control** template.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written approval chain names preparer, reviewer and approver, and the last three runs show recorded approvals with no self-approval."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List who currently prepares, checks and approves the commission run"
                - "Remove any case where someone approves their own pay"
                - "Set the single payout amount that triggers a second approver"
                - "Store each run's approvals with name and date in the period folder"
                - "Test that last quarter's runs followed the approval chain @recurring(quarterly)"
            - name: Twelve-month payout history reconstruction
              description: |-
                ## Purpose
                A year of what each rep was owed, what was paid and when shows whether the current process can be trusted before you build on it. It also surfaces unpaid amounts, double payments and outstanding draws that a new process would otherwise inherit without anyone noticing.

                ## Milestones
                1. Monthly commission payments per rep for the last 12 months gathered from payroll records.
                2. Each month's calculation file matched to what payroll paid.
                3. Differences listed with an explanation or flagged as unexplained.
                4. Unexplained amounts raised with finance and the sales leader, with a proposed fix for each.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A 12-month comparison of calculated and paid commission per rep exists, with every difference explained or escalated to finance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request 12 months of commission payments per rep from payroll"
                - "Collect the calculation file for each of those months"
                - "Match payroll amounts to calculated amounts rep by rep"
                - "Ask the agent to summarise the differences into a one-page memo for finance"
            - name: Commission FAQ page for reps
              description: |-
                ## Purpose
                Ten questions arrive every month in some form: when does a deal count, when will I be paid, why is this split, what happens if the customer cancels. One short page answering them in plain words, linked to the plan and the calendar, empties the inbox and leaves disputes for real problems rather than misunderstandings.

                ## Milestones
                1. The ten most common questions collected from the last three months of messages.
                2. Plain answers written and checked by finance and the plan owner.
                3. The page linked from the CRM home page and every statement email.
                4. A last-checked date shown at the top of the page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A commission FAQ answering at least ten real questions, checked by finance, is linked from every statement email."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search the last three months of messages for commission questions"
                - "Write plain answers to the ten most frequent"
                - "Ask finance and the plan owner to check every answer"
                - "Link the page from the statement email and the CRM home page"
                - "Add any question asked twice since the last update to the FAQ @recurring(quarterly)"
            - name: Monthly commission close checklist
              description: |-
                ## Purpose
                Each run has the same twenty or so steps, and the one that gets skipped is usually the one behind next month's dispute. A checklist the preparer ticks and the reviewer signs, from locking the deal data to sending the payroll file, makes the run repeatable by someone other than its usual owner.

                ## Milestones
                1. Every step of a run written in order with an owner and a working day.
                2. Checks built in: totals tie to reconciled bookings, no rep missing, no negative payout unexplained.
                3. The completed checklist saved with each period's files.
                4. The backup owner has run one period from the checklist alone.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every commission run for three months in a row has a completed, reviewer-signed checklist saved with its files."
                cadence: rolling
              tasks:
                - "Write the run steps in order from your last commission run"
                - "Add total and completeness checks before the approval step"
                - "Work through the commission close checklist for the period @recurring(monthly:5)"
                - "Have the backup owner run one period from the checklist alone"
            - name: Bookings reconciliation between CRM and billing
              description: |-
                ## Purpose
                Commission is calculated from the CRM, but revenue lives in the billing or accounting system, and the two disagree more often than anyone admits: amended orders, credit notes, deals booked in the wrong month. Reconciling them before each calculation catches the gaps while they are small and still explainable.

                ## Milestones
                1. A monthly report of closed-won deals from the CRM and booked or invoiced orders from billing.
                2. Every deal matched or listed as a difference.
                3. Differences resolved or carried to next month with a note.
                4. The reconciled total signed off by finance before calculation starts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each period's commission run starts from a CRM to billing reconciliation signed off by finance, with every difference noted."
                cadence: rolling
              tasks:
                - "Build a CRM report of last month's closed-won deals with amounts"
                - "Export the matching orders or invoices from the billing system"
                - "Match the two lists by customer and order reference"
                - "Reconcile CRM bookings to billing before the calculation starts @recurring(monthly:3)"
            - name: Monthly commission statements to every rep
              description: |-
                ## Purpose
                Reps who receive only a number on their payslip will rebuild the calculation themselves, often wrongly, and lose faith in the process. A statement listing every credited deal, the rate applied, adjustments and year-to-date attainment lets each rep check their own pay in minutes and raise questions before payroll closes.

                ## Milestones
                1. A statement layout with deals, credit, rate, earnings, adjustments, draws and year-to-date totals.
                2. Statements sent privately to each rep on the published date.
                3. A review window of at least two working days before the payroll file is sent.
                4. Every sent statement archived in the period folder.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every rep receives an itemised statement on the published date each period, at least two working days before payroll closes."
                cadence: rolling
              tasks:
                - "Design a statement that lists each deal, rate and adjustment"
                - "Test the statement layout on two reps before rolling it out"
                - "Send every rep their itemised statement @recurring(monthly:8)"
                - "Archive the sent statements in the period folder"
            - name: Commission dispute and query log
              description: |-
                ## Purpose
                Disputes handled in private messages vanish, recur and get settled inconsistently depending on who pushes hardest. A log with the date raised, the deal, the claim, the evidence, the decision and who made it gives every rep the same fair process, and shows which plan clauses or data problems cause the most trouble.

                ## Milestones
                1. One route for reps to raise a query, such as a form or shared inbox.
                2. A log with date, rep, deal, claim, decision, decider and date closed.
                3. A target response time published to reps.
                4. A quarterly summary of dispute causes sent to the plan owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All commission queries for a quarter are in one log with a recorded decision, and the median time to close is within the published target."
                cadence: rolling
              tasks:
                - "Set up a form or shared inbox for commission queries"
                - "Create a log with columns for claim, evidence, decision and decider"
                - "Chase any commission query open longer than five working days @recurring(weekly:tue)"
                - "Send a summary of dispute causes to the plan owner @recurring(quarterly)"
            - name: Payroll handoff and variance check
              description: |-
                ## Purpose
                The last step is where a misplaced decimal becomes a real payment that is awkward to take back. Sending payroll a file in their required format, and checking the total and each rep's amount against recent months before sending, catches the outliers no formula will flag.

                ## Milestones
                1. Payroll's required file format and earnings code for commission confirmed.
                2. A variance check comparing each rep's payout with their previous three months.
                3. Any payout more than double the rep's usual amount reviewed before sending.
                4. Payroll's processed totals filed against the approved commission total.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive periods the payroll file matches the approved total exactly and every large variance has a recorded reason."
                cadence: rolling
              tasks:
                - "Confirm payroll's file format and the earnings code for commission"
                - "Compare each payout with the rep's average for the last three months"
                - "Send the approved commission file to payroll and confirm receipt @recurring(monthly:11)"
                - "Match payroll's processed totals to the approved commission total"
            - name: Monthly commission accrual for the accounts
              description: |-
                ## Purpose
                Finance needs an estimate of commission owed at each month-end, because commission is earned when a deal closes but often paid a month or more later. A simple accrual worked from the latest calculation keeps the profit and loss honest and stops a big quarter-end payout landing as a surprise.

                ## Milestones
                1. Earned but unpaid commission estimated at each month-end.
                2. The accrual figure sent to finance before their close deadline.
                3. Last month's accrual compared with what was actually paid.
                4. The method written down for whoever covers the month-end close.

                ## Notes
                Start from the **Month-end close** template. Agree the method with your accountant: this project prepares the number and finance books it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Finance receives a commission accrual before every month-end close deadline for a quarter, each with last month's actual-versus-accrual gap noted."
                cadence: rolling
              tasks:
                - "Ask finance for their month-end close deadline"
                - "Estimate earned but unpaid commission from the latest calculation"
                - "Send the commission accrual figure to finance @recurring(monthly:2)"
                - "Compare last month's accrual with the actual payout and note the gap"
            - name: Cancellations and clawback ledger
              description: |-
                ## Purpose
                When a customer cancels, downgrades or never pays, the plan may take back commission already paid, but only if someone notices. A ledger linking each cancellation or credit note to the original deal, the commission paid and the amount recoverable under the plan makes clawbacks consistent and explainable.

                ## Milestones
                1. A monthly feed of cancellations, credit notes and write-offs from finance.
                2. Each item matched to the original deal and the commission paid on it.
                3. Recoverable amounts worked out under the plan's clawback clause.
                4. Clawbacks shown as a separate statement line with the reason.

                ## Notes
                Tell the rep before a clawback appears on their statement. A surprise deduction does more damage than the amount itself. Where deductions from wages are regulated, check with HR first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every cancellation and credit note from finance for a quarter is matched to its original deal, with any clawback calculated and shown on a statement."
                cadence: rolling
              tasks:
                - "Ask finance for a monthly list of cancellations and credit notes"
                - "Match each cancellation to the original deal and its payout"
                - "Work out the recoverable amount under the plan's clawback clause"
                - "Update the clawback ledger from finance's cancellation list @recurring(monthly:16)"
            - name: Cash collection check before releasing commission
              description: |-
                ## Purpose
                Plans that pay on cash received need a monthly check of which invoices have been paid in full, in part or not at all. Without it, commission is either paid early on customers who never settle or held back indefinitely on customers who already have.

                ## Milestones
                1. Invoices linked to commissionable deals, with paid status from accounts receivable.
                2. Commission released only on paid amounts, with part payments handled as the plan says.
                3. A held commission balance per rep shown on statements.
                4. Held amounts older than 90 days reviewed with finance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No commission is released on an unpaid invoice for a full quarter, and every statement shows the rep's held balance."
                cadence: rolling
              tasks:
                - "Link each commissionable deal to its invoice numbers"
                - "Pull paid status from accounts receivable before the run @recurring(monthly:4)"
                - "Show held commission per rep on each statement"
                - "Review held amounts older than 90 days with finance"
            - name: Quarterly tier and accelerator true-up
              description: |-
                ## Purpose
                Tiered plans often pay a base rate monthly and settle accelerators once attainment for the quarter or year is known. A scheduled true-up recalculates each rep's earnings at their actual tier, pays or recovers the difference and shows the workings, so reps who crossed a threshold see it rewarded on time.

                ## Milestones
                1. Attainment calculated per rep at quarter-end from reconciled bookings.
                2. Earnings recalculated at the correct tier and compared with what was paid.
                3. Differences paid or recovered as the plan says, with a separate statement line.
                4. True-up workings saved with the quarter's files.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter-end true-up is paid in the following period's run, with workings saved and a separate line on every affected statement."
                cadence: cyclic
              tasks:
                - "Calculate each rep's attainment from reconciled quarter bookings"
                - "Run the tier and accelerator true-up for the quarter @recurring(quarterly)"
                - "Show the true-up as a separate statement line with its workings"
                - "Save the true-up file in the quarter folder"
            - name: Draw and advance balance tracking
              description: |-
                ## Purpose
                Recoverable draws, advances and guarantees create balances that roll from month to month, and losing track of them leads to unexpected deductions or forgotten debts. A running balance per rep, shown on every statement, keeps the arrangement visible to both sides.

                ## Milestones
                1. Every active draw, advance and guarantee listed with its terms and start date.
                2. A running balance per rep updated each period.
                3. The balance shown on each affected statement.
                4. Balances due to end or be forgiven flagged a month ahead.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every rep with a draw or advance sees a running balance on each statement, and the ledger agrees with payroll records."
                cadence: rolling
              tasks:
                - "List every draw, advance and guarantee with its terms"
                - "Set up a running balance per rep in the workbook"
                - "Update each draw balance after payroll has run @recurring(monthly:14)"
                - "Flag balances due to end or be forgiven next month"
            - name: Quarterly commission spot audit
              description: |-
                ## Purpose
                A reviewer who only looks at totals will not catch a wrong rate on one rep or a deal credited twice. Recalculating a sample of statements from scratch each quarter, by someone who did not prepare them, tests the whole process and finds the quiet errors before an auditor or a departing rep does.

                ## Milestones
                1. A sample of at least ten deals and three statements chosen each quarter, always including the largest payout.
                2. Each sample recalculated independently from the signed plan and source data.
                3. Differences recorded with cause and fix.
                4. Findings shared with the process owner and finance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly spot audits in a year each recalculate at least ten deals independently, with findings and fixes recorded."
                cadence: cyclic
              tasks:
                - "Pick ten deals and three statements, including the largest payout"
                - "Recalculate the audit sample from the signed plan and source data @recurring(quarterly)"
                - "Record every difference with its cause and the fix"
                - "Share the audit findings with the process owner and finance"
            - name: Reading your commission plan like the payroll team
              description: |-
                ## Purpose
                Plenty of reps sign a plan after skimming the rate and quota, then meet the clauses on crediting, cancellations and leaving only when money is at stake. Going through your own plan clause by clause, working one real deal through it and writing down your questions turns the document into something you can check your pay against.

                ## Milestones
                1. Every clause on rates, crediting, timing, clawbacks and leaving summarised in one line each.
                2. One of your own recent deals calculated by hand using the plan.
                3. Your questions sent to your manager or the commission owner and answered in writing.
                4. Your plan summary saved alongside your own deal list.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of your plan exists, with one recent deal calculated by hand and written answers to your open questions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your plan and summarise each clause in one line"
                - "Work one of your recent deals through the plan by hand"
                - "Send your unclear points to the commission owner in a single message"
                - "Save the answers next to your plan summary"
            - name: Tiered and capped commission formulas in spreadsheets
              description: |-
                ## Purpose
                Effective-dated lookups, tiered rates, caps and floors are where hand-built spreadsheets go wrong, usually through a formula copied down one row too few. Learning a handful of techniques (lookups by date, conditional sums by rep and period, a marginal tier calculation and error checks) makes the workbook faster to run and easier for someone else to audit.

                ## Milestones
                1. A lookup that returns the rate in force on a deal's close date.
                2. A marginal tier calculation that matches a hand-worked example to the cent.
                3. Conditional sums by rep and period that tie to the raw data total.
                4. Error checks that flag blanks, duplicates and negative values.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The workbook uses a date-based rate lookup and a marginal tier formula that both match hand-worked examples exactly."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Work a three-tier commission example by hand on paper"
                - "Build a marginal tier formula and test it against the hand result"
                - "Add a date-based rate lookup to the workbook"
                - "Add checks that flag blank owners, duplicate deals and negative payouts"
            - name: Commission accounting under revenue standards
              description: |-
                ## Purpose
                Under IFRS 15 and ASC 340-40, many sales commissions count as costs of obtaining a contract that are capitalised and spread over the customer relationship rather than expensed when paid. Commission owners who understand the basics can give finance the data they need (contract, start date, expected term) instead of being asked for it in a hurry at audit time.

                ## Milestones
                1. The basic rule on capitalising contract acquisition costs written down in plain words.
                2. Finance's current policy and any practical expedients noted.
                3. The data fields finance needs from each commission run listed.
                4. Those fields added to the calculation output.

                ## Notes
                This is accounting judgement for your finance team and auditors. Your part is supplying clean data and understanding why they ask for it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Finance has confirmed in writing that the commission run output includes every field their capitalisation policy needs."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a plain-language summary of capitalising contract acquisition costs"
                - "Ask finance which commissions they capitalise and over what period"
                - "List the data fields finance needs from each commission run"
                - "Add contract start date and term to the calculation output"
            - name: How commission is taxed and withheld in payroll
              description: |-
                ## Purpose
                Large commission payments often show heavier withholding than a normal salary month, and the sales manager gets the confused messages. Learning how your payroll treats commission (supplemental pay rules, pension and benefit deductions, holiday pay effects) lets you answer the common questions accurately and send the rest to payroll.

                ## Milestones
                1. Payroll's explanation of how commission is taxed and withheld obtained in writing.
                2. Effects on pension, benefits and holiday pay noted where they apply.
                3. A short plain-language note added to the commission FAQ.
                4. Personal tax questions routed to payroll or a tax adviser rather than answered.

                ## Notes
                Rules differ by country and change often. Use payroll's or the tax authority's own wording, and do not give personal tax advice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The commission FAQ carries a payroll-approved note on how commission is taxed, withheld and treated for pension and holiday pay."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask payroll how commission is taxed and withheld in your country"
                - "Ask whether commission counts toward pension, benefits or holiday pay"
                - "Add a short payroll-approved tax note to the commission FAQ"
                - "Point reps with personal tax questions to payroll or a tax adviser"
            - name: Commission software administration skills
              description: |-
                ## Purpose
                Dedicated commission tools only save time if someone in-house can change a rule, add a rep or fix a failed data sync without waiting on a support ticket. Working through the vendor's admin training and building a small test plan in a sandbox gives you that independence.

                ## Milestones
                1. The vendor's admin course or core documentation completed.
                2. A test plan with one tier and one split built in a sandbox.
                3. A rep added, moved and ended with correct effective dates.
                4. A one-page admin runbook written for your backup.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have completed the vendor's admin training and handed your backup a runbook covering adding, moving and ending a rep."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Book the vendor's admin training or start their online course"
                - "Build a test plan with one tier and one split in the sandbox"
                - "Practise adding, moving and ending a rep with effective dates"
                - "Write a one-page runbook of common admin changes for your backup"
            - name: Explaining a commission statement in five minutes
              description: |-
                ## Purpose
                Sales managers end up as the front line for pay questions, and a fumbled answer about someone's money damages trust quickly. Practising a short walkthrough of a real statement (credited deals, rate, adjustments, what to check, how to raise a query) keeps those conversations short, calm and accurate.

                ## Milestones
                1. A five-minute walkthrough of one anonymised statement written down.
                2. The walkthrough practised with a finance colleague and corrected.
                3. Answers prepared to the five hardest questions reps are likely to ask.
                4. Each rep on the team walked through their own statement once.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every rep on the team has been walked through their own statement by their manager within one quarter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick one anonymised statement with at least one adjustment"
                - "Write a five-minute walkthrough of each line"
                - "Practise it with a finance colleague and note their corrections"
                - "Walk one rep through their own statement in your next one-to-one"
            - name: Recurring revenue commission maths
              description: |-
                ## Purpose
                Subscription deals raise questions one-off sales never do: is commission on first-year value or the whole contract, how are multi-year deals, ramped pricing and renewals credited, and what happens on an upgrade mid-term. Working the plan's answers through realistic examples prevents months of inconsistent payouts.

                ## Milestones
                1. Annual contract value, total contract value, first-year value and net new defined as your plan uses them.
                2. Worked examples for a multi-year deal, a ramped contract, a renewal and a mid-term upgrade.
                3. Each example confirmed by the plan owner.
                4. The examples added to the crediting rulebook.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four worked subscription examples, each confirmed by the plan owner, sit in the crediting rulebook."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write how your plan defines contract value for commission"
                - "Work a three-year ramped deal through the plan"
                - "Work a renewal with a mid-term upgrade through the plan"
                - "Ask the plan owner to confirm each worked example"
            - name: Spreadsheet or commission software decision
              description: |-
                ## Purpose
                Spreadsheets work well for a handful of reps on a simple plan and start breaking once splits, tiers, clawbacks and mid-year changes all apply at once. Scoring the options against your real plan, rep count and CRM, with the full yearly cost including admin time, gives a decision you can defend to finance.

                ## Milestones
                1. Requirements listed from the current plan, rep count and systems.
                2. Hours spent on each run measured over two periods.
                3. Three options (an improved spreadsheet and two tools) scored against the same criteria.
                4. A decision recorded with yearly cost, owner and start date.

                ## Notes
                Start from the **Purchase decision** template. Ask each vendor to configure your trickiest real scenario in the demo, not their standard one.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares three options on the same criteria, including measured admin hours and full yearly cost."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Time the next commission run from data pull to payroll file"
                - "List must-have features from your plan's trickiest clauses"
                - "Ask two vendors to demo your hardest real scenario"
                - "Score the options and record the decision with its full yearly cost"
            - name: Cutting days from close to payout
              description: |-
                ## Purpose
                Payouts that land two or three months after the deal closes lose most of their motivating effect, and reps start chasing finance instead of customers. Measuring each step of the current cycle and removing the waits (late data, slow approvals, manual reformatting) can often bring payment into the month after close.

                ## Milestones
                1. Elapsed days measured for each step of the last three runs.
                2. The two longest waits identified with their cause.
                3. A change made to each, such as an earlier cut-off or an automated export.
                4. The new cycle time compared with the baseline.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The number of days from period end to commission payment is measurably shorter for two runs in a row than the three-run baseline."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Record the date each step finished in the last three runs"
                - "Identify the two longest waits and their causes"
                - "Agree one change to each wait with the people involved"
                - "Measure the next run's cycle time against the baseline"
            - name: Pre-calculation data quality checks
              description: |-
                ## Purpose
                Most commission errors start as bad CRM data: a missing owner, a close date in the wrong month, a split that adds up to 110 percent. A short set of checks run before each calculation catches these at the source, where the rep or sales operations can fix them, rather than in a dispute after payroll.

                ## Milestones
                1. The data errors behind the last ten disputes or corrections listed.
                2. A report or validation rule that flags each one.
                3. Flagged records sent to their owners with a fix-by date before cut-off.
                4. The number of flagged records tracked each run.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pre-calculation report flags missing owners, wrong-period dates and bad splits, and runs before every cut-off for three periods."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the data errors behind the last ten disputes or corrections"
                - "Build a report flagging missing owners, bad dates and splits not adding to 100"
                - "Send flagged deals to their owners three days before cut-off @recurring(monthly:25)"
                - "Count the flagged records each run to see the trend"
            - name: Manual adjustment and exception rule
              description: |-
                ## Purpose
                Every commission run collects one-off adjustments: a deal credited as goodwill, a cap waived, a mistake corrected. Without a rule they pile up, become precedents and make the calculation impossible to audit. A short policy on who may request, who may approve and how each adjustment is recorded keeps exceptions rare and visible.

                ## Milestones
                1. All adjustments from the last six months listed with reason and approver.
                2. Categories defined: correction, approved exception and goodwill.
                3. Approval levels set for each category.
                4. Every new adjustment recorded with a reason code and shown on the statement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written adjustment rule sets approval levels per category, and every adjustment in the next run carries a reason code and approver."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every manual adjustment from the last six months"
                - "Group them into corrections, exceptions and goodwill"
                - "Agree who may approve each category"
                - "Add a reason code column to the adjustments tab"
            - name: Calculation error log and root causes
              description: |-
                ## Purpose
                Corrections fixed quietly in the next run hide the same causes month after month. Logging every error with its cause (data, formula, rule interpretation, timing or payroll), its value and how it was found shows which single fix would remove the most work and the most disputes.

                ## Milestones
                1. A log with date, rep, amount, cause, how found and fix.
                2. Every correction from the last quarter entered.
                3. Errors grouped by cause and ranked by count and value.
                4. The top cause fixed at source and its trend tracked for two quarters.

                ## Notes
                Start from the **Metrics log** template. Overpayments belong in the log too, with how and when they were recovered.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An error log covering at least one quarter ranks causes by count and value, and the top cause has a recorded fix."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Create an error log with cause, amount and how it was found"
                - "Enter last quarter's corrections into the log"
                - "Rank causes by number and value of errors"
                - "Agree a fix at source for the biggest cause"
            - name: Securing commission files and pay data
              description: |-
                ## Purpose
                Workbooks of commission data hold every rep's pay, quota and attainment, and they get emailed around, saved to desktops and shared by open links. Keeping them in one permissioned location and sending statements privately protects people's pay details and meets basic data protection expectations.

                ## Milestones
                1. Every place commission files are stored found and listed.
                2. Files moved to one folder with access limited to named roles.
                3. Statements delivered through a private channel rather than group emails or open links.
                4. Access reviewed each quarter with leavers removed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All commission files sit in one folder restricted to named roles, and no statement has been sent by group email or open link for a quarter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search shared drives and email for stray commission files"
                - "Move the files into one folder with named-role access"
                - "Switch statements to a private delivery method"
                - "Remove leavers and role changes from commission folders @recurring(quarterly)"
            - name: New plan year load and test
              description: |-
                ## Purpose
                Each new plan year brings new rates, quotas, tiers and sometimes new roles, and the first run of the year is where errors land. Loading the new plan before the year starts and testing it on dummy deals avoids a first statement that has to be withdrawn and reissued.

                ## Milestones
                1. Final signed-off plan terms received from the plan owner.
                2. New rates, quotas and roles loaded with the correct start date.
                3. Ten test deals covering each tier and role calculated and checked by hand.
                4. First statements of the new year issued without a reissue.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new plan year's rates and quotas are loaded and ten test deals match hand calculations before the first run of the year."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the plan owner for final new-year terms and a sign-off date"
                - "Load new rates and quotas with the year's start date"
                - "Calculate ten test deals covering each tier and role"
                - "Fix any difference before the first run of the year"
            - name: Year-end true-up and final annual payout
              description: |-
                ## Purpose
                Annual accelerators, caps, holdbacks and annual bonuses settle once the year's numbers are final, and the year-end run is the largest and most scrutinised of all. Preparing it as a project, with finance's final bookings, tax year timing and leaver balances in view, keeps it accurate and on time.

                ## Milestones
                1. Final reconciled bookings for the year signed off by finance.
                2. Annual tiers, caps and holdbacks recalculated per rep.
                3. Year-end statements issued with full-year workings.
                4. Payment made in the period agreed with payroll and finance.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Year-end statements with full-year workings reach every rep, and the final payout is made in the period agreed with payroll."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Agree the year-end timetable with finance and payroll"
                - "Recalculate annual tiers, caps and holdbacks per rep"
                - "Issue year-end statements with full-year workings"
                - "Start year-end commission preparation six weeks before year end @recurring(yearly)"
            - name: Parallel run before switching commission systems
              description: |-
                ## Purpose
                Moving from spreadsheets to software, or between tools, is safest when both systems calculate the same periods side by side until they agree. Two or three parallel runs expose configuration mistakes while the old process is still paying people correctly.

                ## Milestones
                1. Historic data and the current plan loaded into the new system.
                2. Two periods calculated in both systems.
                3. Every difference above an agreed tolerance explained and fixed.
                4. A cutover date agreed and the old files archived read-only.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two consecutive periods produce matching payouts in the old and new systems within the agreed tolerance before cutover."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Load the last two periods' data into the new system"
                - "Compare each rep's payout between the old and new systems"
                - "Explain and fix every difference above the agreed tolerance"
                - "Agree the cutover date with finance and archive the old files"
            - name: Audit or due diligence commission evidence pack
              description: |-
                ## Purpose
                Auditors, investors and acquirers ask the same things about commission: signed plans, how payouts were calculated, who approved them, the accrual and any capitalised balance. A tidy pack assembled before the request shows the process is controlled and saves a frantic week of searching old email.

                ## Milestones
                1. The list of items auditors or buyers usually request agreed with finance.
                2. Signed plans, calculation files and approvals for the period gathered in one folder.
                3. Accrual and capitalised commission balances tied to the ledger.
                4. A one-page process description on top of the pack.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A single folder holds signed plans, calculation files, approvals and ledger tie-outs for the period, with a one-page process summary."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask finance what the auditors or buyers have requested"
                - "Gather plans, calculation files and approvals in one folder"
                - "Tie the accrual and capitalised balances to the ledger"
                - "Ask the agent to draft a one-page process description from the process map"
            - name: Mid-period plan or territory change cutover
              description: |-
                ## Purpose
                Territory reshuffles, promotions or a revised rate partway through a quarter raise the question of which deals sit under which rules. Treating the change as a cutover, with a written rule for deals in flight and confirmed effective dates, avoids paying two reps for one deal or nobody at all.

                ## Milestones
                1. The change and its effective date confirmed in writing by the plan owner.
                2. Affected open deals listed with old and new owner.
                3. Credit for in-flight deals settled under a written rule.
                4. Master table and statements updated from the effective date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every open deal affected by the change has a recorded owner and credit rule, and the master table shows the new effective date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Get the change and its effective date confirmed in writing"
                - "List affected open deals with their old and new owners"
                - "Agree how in-flight deals are credited and tell the reps involved"
                - "End-date the old rows and add new ones in the master table"
            - name: Paying your first commissioned salesperson
              description: |-
                ## Purpose
                Owners hiring their first salesperson often agree commission in a conversation and work it out on the back of an invoice. Putting a short written agreement, a one-tab calculation and a monthly statement in place from the first sale avoids awkward arguments and leaves a setup ready for the second hire.

                ## Milestones
                1. A written commission agreement signed by you and the salesperson.
                2. A one-tab sheet calculating commission from your sales records.
                3. Payment routed through payroll or invoicing, as your accountant advises.
                4. A short statement sent with every payment.

                ## Notes
                Ask your accountant whether commission goes through payroll or an invoice, which depends on whether the person is an employee or a contractor.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed commission agreement and a working one-tab calculation exist, and the first payment went out with a statement."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down the agreed rate, what counts and when it is paid"
                - "Get the agreement signed by both of you"
                - "Set up a one-tab sheet that calculates monthly commission"
                - "Ask your accountant how commission should be paid and reported"
                - "Send a short statement with every commission payment"
            - name: Final commission settlement when a rep leaves
              description: |-
                ## Purpose
                Leavers are where commission disputes turn formal, because the rep no longer has a reason to keep the relationship warm. Working out which deals they are paid on, what happens to their pipeline and to outstanding draws or clawbacks, and when the final payment lands, exactly as the signed plan says, keeps the exit clean.

                ## Milestones
                1. The leaver clause of the rep's signed plan checked and noted.
                2. Closed, invoiced and pending deals listed with the commission due on each.
                3. Outstanding draws, advances and clawbacks totalled.
                4. A final statement with the payment date reviewed by HR and sent.

                ## Notes
                Final pay timing and deductions from wages are regulated in many places. Check with HR or employment counsel before deducting anything.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The leaver receives an HR-reviewed final statement listing every deal and balance, paid on the date it states."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the leaver clause in the rep's signed plan"
                - "List closed and pending deals with the commission due on each"
                - "Total outstanding draws, advances and clawbacks"
                - "Ask HR to review the final statement before it is sent"
            - name: Ramp guarantees and draws for new hires
              description: |-
                ## Purpose
                New reps often get a guaranteed or non-recoverable draw for their first months while pipeline builds. Setting the guarantee up correctly in the calculation, showing earned commission against it on statements and ending it on the right date avoids both overpaying and an unpleasant surprise when it stops.

                ## Milestones
                1. Guarantee amount, type (recoverable or not) and end date recorded from the offer letter.
                2. The guarantee built into the calculation with its end date.
                3. Statements showing earned commission against the guarantee each month.
                4. The rep and their manager reminded a month before it ends.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each new hire's guarantee is in the calculation with its end date and shown against earned commission on every statement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the guarantee amount, type and end date from the offer letter"
                - "Set the guarantee up in the calculation with its end date"
                - "Show earned commission against the guarantee on each statement"
                - "Remind the rep and manager a month before the guarantee ends"
            - name: Commission during a leave of absence
              description: |-
                ## Purpose
                Parental leave, long sickness and sabbaticals raise real questions: are deals that close during leave credited, is quota prorated, and what does the law say about pay during protected leave. Recording how each case is handled, using HR's guidance, keeps treatment fair and consistent between reps.

                ## Milestones
                1. HR's guidance on commission during each type of leave obtained.
                2. The plan's clauses on leave and quota proration noted.
                3. A worked example written for a one-month and a six-month absence.
                4. Each leave case logged with how it was handled.

                ## Notes
                Rules on pay during protected leave vary by country. HR or employment counsel decides; this project records and applies their guidance.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "HR-approved worked examples exist for a short and a long absence, and every leave case in the year is logged with its treatment."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask HR how commission is treated during each type of leave"
                - "Note what the plan says about quota proration"
                - "Write a worked example for a short and a long absence"
                - "Log each leave case and how it was handled"
            - name: Personal commission shadow tracker for reps
              description: |-
                ## Purpose
                Keeping your own list of closed deals, expected credit and expected payout lets you spot a statement error in minutes instead of guessing. A simple tracker updated the day each deal closes is also the best evidence you can bring when raising a query.

                ## Milestones
                1. A personal sheet listing each closed deal with date, value, split and expected commission.
                2. Expected payout compared with each statement on arrival.
                3. Differences raised through the official query route within the review window.
                4. Year-to-date attainment tracked against your quota.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every statement for a quarter has been checked against your own tracker, with any difference raised within the review window."
                cadence: rolling
              tasks:
                - "Set up a personal sheet with deal, date, value, split and rate"
                - "Add each deal to the tracker on the day it closes"
                - "Check your statement against your own tracker when it arrives @recurring(monthly:9)"
                - "Raise any difference through the query form with the deal reference"
            - name: Taking over commission admin mid-year
              description: |-
                ## Purpose
                Inheriting commission administration from someone who has left usually means a workbook full of overrides and a list of promises made in conversation. A structured first month (find every file, rerun the last period, list open disputes and undocumented agreements) makes your first run accurate and names the inherited problems rather than absorbing them.

                ## Milestones
                1. Every commission file, plan and approval for the year located.
                2. The last period recalculated and matched to what was paid.
                3. Open disputes, draws and undocumented side agreements listed.
                4. Findings shared with the sales leader and finance before your first run.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Before your first run, a written handover note lists every inherited file, open dispute and side agreement, and the last period reconciles."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect every commission file, plan and approval for the year"
                - "Recalculate the last period and compare with what was paid"
                - "List open disputes, draws and verbal agreements you inherit"
                - "Share your findings with the sales leader before your first run"
            - name: Paying agents, resellers and contractor sellers
              description: |-
                ## Purpose
                Independent agents, referral partners and resellers are usually paid through invoices or payables rather than payroll, with different paperwork, tax forms and timing. Setting up a separate route with signed agreements, invoice or self-billing rules and a statement per partner keeps these payments apart from employee pay and easy to evidence.

                ## Milestones
                1. Each non-employee seller listed with their signed agreement and rate.
                2. The payment route agreed with finance: partner invoice or self-billed statement.
                3. Tax forms or registration details collected as your accountant requires.
                4. A statement sent with each partner payment.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every agent or reseller owed commission has a signed agreement, the required tax details on file and a statement with each payment."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every agent, reseller or referral partner owed commission"
                - "Check each has a signed agreement with rate and payment terms"
                - "Agree with finance whether partners invoice or receive self-billed statements"
                - "Collect the tax forms or registration details your accountant requires"
            - name: Multi-currency commission conversion rules
              description: |-
                ## Purpose
                Teams selling in several currencies need one rule for which exchange rate applies (the rate on close date, the month's average or a fixed plan rate) and in which currency reps are credited and paid. Without it, two reps closing identical deals can be paid differently because of a currency move neither of them caused.

                ## Milestones
                1. Currencies used for deals, quotas and pay listed.
                2. The conversion rule confirmed by the plan owner and finance.
                3. One exchange rate source chosen and the rates stored with each run.
                4. Statements showing deal currency, rate used and converted amount.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written conversion rule names the rate source and date, and every statement shows the rate applied to each foreign-currency deal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the currencies used for deals, quotas and pay"
                - "Ask finance which exchange rate source and date the books use"
                - "Get the conversion rule confirmed by the plan owner"
                - "Store the rates used with each period's files"
                - "Show deal currency and rate used on statements"
            - name: Capitalised commission amortisation schedule
              description: |-
                ## Purpose
                Once finance has a capitalisation policy, someone has to supply a schedule listing each capitalised commission, the contract it relates to, the amortisation period and the balance remaining, and keep it current as contracts renew or cancel. Producing it from the commission data each month gives finance a figure that ties to actual payouts rather than a separate estimate.

                ## Milestones
                1. Capitalisable payouts flagged in each run as finance's policy defines.
                2. A schedule by contract with amount, start date, period and remaining balance.
                3. Cancellations reflected in the month they occur.
                4. The schedule total tied to the ledger by finance each month.

                ## Notes
                Finance and your auditors own the policy and the journal entries. This project produces the supporting data.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Finance receives an amortisation schedule every month that ties to the ledger balance for capitalised commission."
                cadence: rolling
              tasks:
                - "Agree with finance which payouts are capitalised and over what period"
                - "Add a capitalisation flag and contract term to each payout line"
                - "Build a schedule showing the remaining balance per contract"
                - "Send the updated amortisation schedule to finance @recurring(monthly:7)"
            - name: Payout curve analysis for the plan designers
              description: |-
                ## Purpose
                Few plan designers see how last year's plan actually paid out: what share of reps reached accelerators, how payout tracked attainment, and what commission cost as a share of revenue. A yearly analysis drawn from the payout data hands them evidence for the next plan without the commission team redesigning it themselves.

                ## Milestones
                1. Commission cost as a share of bookings calculated by role and segment.
                2. A chart of payout against attainment for every rep.
                3. Windfalls, outliers and unpaid accelerators listed with their causes.
                4. A short pack handed to the plan owners before planning starts.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The plan owners receive a payout analysis with cost of sales by role and a payout-to-attainment chart before annual planning begins."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Calculate commission cost as a percentage of bookings by role"
                - "Chart each rep's payout against attainment for the year"
                - "List windfalls and outliers with what caused them"
                - "Send the payout analysis to the plan owners before planning @recurring(yearly)"
            - name: Commission law compliance review
              description: |-
                ## Purpose
                Some jurisdictions set specific rules on commission pay: a signed written agreement explaining how commission is earned and paid (California is a well-known example), limits on deductions from wages, or deadlines for paying final commission. Asking employment counsel to check your plan documents and practices against the rules where your reps work avoids a claim built on a technicality.

                ## Milestones
                1. Every country, state or province where commissioned staff work listed.
                2. Employment counsel asked to review the plan template, leaver clause and clawback practice.
                3. Findings recorded with each required change and its owner.
                4. Changes in place before the next plan year is signed.

                ## Notes
                This project prepares the questions and records the answers. The conclusions come from qualified employment counsel.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Employment counsel's written review of the plan template and payout practices is on file, with every required change assigned an owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every location where commissioned staff work"
                - "Send the plan template and leaver clause to employment counsel"
                - "Record counsel's findings with an owner for each change"
                - "Confirm required changes appear in next year's plan documents"
---

# Sales Commission Tracking & Payouts

This area is for whoever turns closed deals into correct commission payments: the sales manager or finance lead running the numbers, the small business owner paying a first seller, and the reps checking their own pay. It runs from the foundations (named owners, signed plans, an effective-dated rate table, a definition of what counts and a calculation workbook), through the monthly operating routines, the skills worth learning, improvements and decisions, dated events such as a new plan year or a system switch, situations like leavers, leave and partner payouts, and finally specialist work on currency, capitalised commission and legal checks.

What repeats is the monthly cycle of bookings and cash reconciliation, accrual, the close checklist, statements, the payroll file, clawbacks and draw balances, a weekly sweep of open disputes, quarterly true-ups, spot audits and access reviews, and a yearly round of plan signatures, a new calendar and the year-end payout. The Compliance control, Operational checklist, Month-end close, Purchase decision and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
