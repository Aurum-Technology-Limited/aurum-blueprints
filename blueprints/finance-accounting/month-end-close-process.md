---
id: finance-accounting.month-end-close-process
name: Month-End Close Process
description: "A working-day close calendar and checklist with named owners, monthly accruals, prepayments and reconciliations, journal review and sign-off, and the changes that bring reliable numbers in five days."
category: business
version: 1.0.0
tags: [finance-accounting, month-end-close-process, small-business, manager, team, accruals, cut-off, close-checklist]
author: Aurum Technology
starter_structure:
  templates:
    - month-end-close
    - meeting-notes
    - metrics-log
    - purchase-decision
    - skills-matrix
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Month-End Close Process
          description: "Running the monthly close checklist of accruals, reconciliations, cut-off and journal review so finance teams and small businesses get reliable numbers on time."
          projects:
            - name: Month-end close checklist from last month's close
              description: |-
                ## Purpose
                Most small finance teams close from memory, which works until someone is off sick or a step is quietly skipped and the numbers move a week later. Writing down every task from the last close, in the order it actually happened, gives you a checklist to run, hand over and improve. It is the foundation every other project in this area builds on.

                ## Milestones
                1. Every task from last month's close listed, including the small ones done from habit.
                2. Each task tagged with its owner, the system it happens in and the evidence it leaves behind.
                3. Tasks grouped into pre-close, close days and post-close, in dependency order.
                4. The checklist stored where everyone involved in the close can open it.

                ## Notes
                Start from the **Month-end close** template. Capture what you really do, not what a textbook says; the gaps become obvious once it is written down.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written close checklist listing every task, its owner and its evidence, used to run at least one full close."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every task you did to close last month, in the order you did them"
                - "Add the owner, system and evidence for each task"
                - "Group the tasks into pre-close, close days and post-close"
                - "Ask everyone involved in the close to add anything missing"
            - name: Working-day close calendar with named owners
              description: |-
                ## Purpose
                Closing on working day five means nothing until everyone knows what is due on days one to four and who owns it. A calendar that maps each checklist task to a working day, with a named owner and a backup, turns the close from a scramble into a timetable. Publishing it before each month starts lets sales, purchasing and payroll plan around it.

                ## Milestones
                1. A target close day agreed, stated as a working day after month end.
                2. Every checklist task assigned to a working day, an owner and a backup.
                3. Hand-offs between people marked, so nobody waits without knowing why.
                4. Next month's calendar published to the finance team and the people who feed it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A close calendar giving each task a working day, owner and backup, published before the start of the next month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the working day by which the close must be finished"
                - "Assign each checklist task to a working day, an owner and a backup"
                - "Mark every hand-off where one person waits on another"
                - "Publish next month's close calendar with real dates @recurring(monthly:20)"
            - name: Balance sheet account owner list
              description: |-
                ## Purpose
                Every balance on the balance sheet should have one person who can say what is in it and prove it, yet in many ledgers suspense, clearing and old accrual accounts belong to nobody. Listing each account with an owner and a reconciliation frequency closes that gap before an auditor or lender finds it. It also shows which accounts can be checked quarterly instead of monthly.

                ## Milestones
                1. Every balance sheet account in the trial balance listed with its closing balance.
                2. One owner named for each account, with a backup for the larger ones.
                3. A reconciliation frequency set for each account: monthly, quarterly or yearly.
                4. Accounts with no clear purpose flagged for clearing or closing.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every balance sheet account has a named owner and a reconciliation frequency recorded in one list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export the balance sheet section of the trial balance"
                - "Name an owner and a reconciliation frequency for each account"
                - "Flag accounts nobody can explain for clearing"
                - "Check the list for new or unowned accounts @recurring(quarterly)"
            - name: Close materiality threshold
              description: |-
                ## Purpose
                Chasing a tiny utility accrual for an hour while a large unbilled contract goes unnoticed is a sign the close has no sense of scale. Agreeing a threshold below which you do not accrue, adjust or investigate lets the team spend its time on what changes the numbers. The threshold is a working rule for the monthly close, agreed with whoever relies on the accounts.

                ## Milestones
                1. A draft threshold for accruals, prepayments and reconciling differences written down.
                2. The threshold checked with the accountant, controller or owner who uses the numbers.
                3. Exceptions listed, such as related-party items or tax balances that are always adjusted.
                4. The threshold written at the top of the close checklist.

                ## Notes
                Monthly materiality is a practical rule for management numbers. Year-end and audit materiality are set by your accountant or auditor and may be lower.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written materiality threshold for monthly accruals and reconciling items, agreed with the numbers' main user and shown on the checklist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look at last month's smallest accruals and how long they took"
                - "Draft a threshold for accruals and reconciling differences"
                - "Agree the threshold and its exceptions with the accountant or owner"
                - "Write the agreed threshold at the top of the checklist"
            - name: Cut-off rules for sales, purchases and payroll
              description: |-
                ## Purpose
                Revenue and costs land in the wrong month when goods ship on the 31st but are invoiced on the 2nd, or when a supplier invoice dated next month covers this month's work. Written cut-off rules tell everyone which date decides the month for each kind of transaction. They make month-on-month comparisons honest and save arguments during review.

                ## Milestones
                1. The deciding date for each transaction type written: delivery, service period, pay period.
                2. Rules agreed for sales shipped but not invoiced, and invoices received for future periods.
                3. The rules shared with sales, operations and whoever processes supplier bills.
                4. A cut-off check added to the close checklist for the last and first three days of each month.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page cut-off rule sheet covering sales, purchases and payroll, shared with the teams that create those transactions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull sales and supplier invoices dated in the first three days of last month"
                - "Note which ones belonged to the month before"
                - "Write the deciding date rule for each transaction type"
                - "Send the rule sheet to sales, operations and payables"
            - name: Close support folder for each period
              description: |-
                ## Purpose
                Auditors, new staff and your future self all ask the same question: where is the support for this number? A folder per period, with the same sub-folders every month for reconciliations, journals, accrual schedules and sign-off, means evidence is filed as the work is done rather than hunted down in January.

                ## Milestones
                1. A standard folder structure agreed, numbered to match the checklist sections.
                2. A file naming rule that includes the period and account.
                3. Last month's support filed into the new structure as a test.
                4. Next period's folder created before each close begins.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A period folder exists for the current and last month, each holding reconciliations, journals, schedules and sign-off in the standard structure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sketch the sub-folders that match your checklist sections"
                - "Write a file naming rule using period and account"
                - "File last month's reconciliations and journals into the structure"
                - "Create the folder for the coming period @recurring(monthly:26)"
            - name: Time-to-close baseline over three months
              description: |-
                ## Purpose
                Before changing anything, you need to know how long the close really takes and where the days go. Recording the finish date, hours by task and the late inputs for three closes gives a baseline that shows whether bank feeds, approvals or one person's workload is the bottleneck.

                ## Milestones
                1. The working day each of the last three closes finished recorded.
                2. Hours logged by checklist section for three consecutive closes.
                3. Each late input named, with who it came from and how late it was.
                4. The two biggest time sinks written down as the targets for improvement.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three closes measured by finish day and hours per section, with the two largest bottlenecks named."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Record the working day last month's close was signed off"
                - "Log hours against each checklist section during the next close"
                - "Note every input that arrived late and who sent it"
                - "Name the two biggest time sinks after the third close"
            - name: Period reopen request and approval rule
              description: |-
                ## Purpose
                Once a month is signed off, a late invoice or a correction can tempt someone to post back into it, and the numbers already sent to the owner or board no longer match. A simple rule for when a closed period may be reopened, who approves it and how the change is reported keeps reported figures stable.

                ## Milestones
                1. A rule written for when a closed period may be reopened and when the fix goes in the current month.
                2. One approver named, with a backup.
                3. A short request format covering reason, amount and accounts affected.
                4. A log of reopen requests started and kept with the close folder.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written reopen rule with a named approver and a request log, applied to every change to a closed period."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check who can currently post into closed periods in your system"
                - "Write when a closed period may be reopened and who approves"
                - "Create a reopen request log with reason, amount and accounts"
                - "Tell the team that late corrections now go through the request log"
            - name: Standard reconciliation format and evidence rule
              description: |-
                ## Purpose
                Reconciliations done in five different layouts take five times as long to review, and some prove nothing because the supporting balance is missing. One format, with the ledger balance, the independent support, a list of reconciling items with ages, and preparer and reviewer sign-off, makes every reconciliation readable in a minute.

                ## Milestones
                1. A single reconciliation layout agreed: ledger balance, support, reconciling items, difference.
                2. An evidence rule stating what counts as independent support for each account type.
                3. An ageing column added so reconciling items older than sixty days stand out.
                4. Three existing reconciliations rebuilt in the new format as examples.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standard reconciliation layout and evidence rule in use, with three example reconciliations completed in it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect three reconciliations prepared by different people"
                - "Draft one layout with balance, support, reconciling items and sign-off"
                - "Write what counts as independent support for each account type"
                - "Rebuild three reconciliations in the new layout as examples"
            - name: Monthly accrued expenses schedule
              description: |-
                ## Purpose
                Costs that have been incurred but not yet invoiced, such as utilities, professional fees, contractor time and freight, make a month look better than it was if they are left out. A schedule listing each accrual, its basis and its reversal keeps the profit and loss honest and makes the balance sheet accrual account easy to prove.

                ## Milestones
                1. A schedule with supplier, description, basis, amount and reversal month for each accrual.
                2. Recurring accruals, such as audit fees and utilities, listed so they are never forgotten.
                3. The schedule total agreed to the accruals account in the ledger each month.
                4. Last month's accruals checked against the invoices that have since arrived.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's accruals schedule agrees to the ledger accruals account, with every line showing its basis."
                cadence: rolling
              tasks:
                - "List suppliers who usually invoice after the month they work in"
                - "Build the accruals schedule with basis and reversal month columns"
                - "Prepare the month's accruals and agree the total to the ledger @recurring(monthly:2)"
                - "Compare last month's accruals with the invoices that arrived"
            - name: Prepayments amortisation schedule
              description: |-
                ## Purpose
                Annual insurance, software licences, rent and maintenance contracts paid in advance belong to the months they cover, not the month the payment left the bank. A prepayments schedule that releases each one month by month stops profit swinging and keeps the prepayments balance provable at any time.

                ## Milestones
                1. Every advance payment over the materiality threshold listed with its start and end date.
                2. Monthly release amounts calculated for each line.
                3. The schedule's closing balance agreed to the prepayments account.
                4. New prepayments picked up from the month's purchase invoices as part of the close.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The prepayments schedule agrees to the ledger every month and includes every advance payment above the threshold."
                cadence: rolling
              tasks:
                - "Search last year's purchase invoices for annual or advance payments"
                - "Build a schedule with cover period and monthly release for each"
                - "Post the month's prepayment releases and agree the balance @recurring(monthly:3)"
            - name: Deferred and accrued income review
              description: |-
                ## Purpose
                Customers who pay upfront for a year, and work done but not yet billed, both put revenue in the wrong month unless someone adjusts for them. A monthly review of deferred and accrued income, tied to contracts or job records, keeps revenue matched to delivery and gives the owner a truer picture of the month.

                ## Milestones
                1. Every upfront billing and unbilled job listed with its contract or job reference.
                2. The basis for each release or accrual written down: time, milestone or usage.
                3. Deferred and accrued income balances agreed to their schedules each month.
                4. Any item older than three months queried with sales or operations.

                ## Notes
                How revenue is recognised is a policy question for your accountant. This project applies the policy you have each month; it does not set it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Deferred and accrued income balances agree to supported schedules at each month end, with stale items queried."
                cadence: rolling
              tasks:
                - "List customers billed in advance and jobs delivered but not yet invoiced"
                - "Note the release basis for each item from its contract or job record"
                - "Update the deferred and accrued income schedules and agree them @recurring(monthly:4)"
                - "Query any item older than three months with the sales lead"
            - name: Balance sheet reconciliation cycle
              description: |-
                ## Purpose
                A reconciled balance sheet is the best evidence that the profit figure is right, because errors in the profit and loss usually leave a mark on a balance somewhere. Reconciling each account at the frequency on the owner list, with differences explained and old items cleared, catches mistakes while they are still easy to fix.

                ## Milestones
                1. Every monthly account reconciled by its owner before the review day.
                2. Each unexplained difference above the threshold investigated and resolved or escalated.
                3. Reconciling items over sixty days old listed with a clearing plan.
                4. Each reconciliation signed by a preparer and a reviewer.

                ## Notes
                Bank, card and loan statements are matched in the separate bank reconciliation routine; this cycle covers the rest of the balance sheet and relies on those results.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All monthly balance sheet accounts reconciled and reviewed each close, with no unexplained difference above the threshold."
                cadence: rolling
              tasks:
                - "Pick the five largest balance sheet accounts to reconcile first"
                - "Reconcile each account due this month and sign as preparer @recurring(monthly:6)"
                - "List reconciling items older than sixty days with a clearing plan"
                - "Ask a second person to review and sign each reconciliation"
            - name: Subledger to control account tie-out
              description: |-
                ## Purpose
                Sales and purchase ledgers, payroll liabilities and fixed asset registers each keep their own detail, and the totals in the general ledger should match them exactly. A monthly tie-out catches manual journals posted straight to control accounts, which are one of the commonest reasons debtor and creditor reports disagree with the balance sheet.

                ## Milestones
                1. Each control account paired with the report that supports it.
                2. Aged debtor and aged creditor totals agreed to their control accounts.
                3. Payroll liability and asset register totals agreed to the ledger.
                4. Any manual journal found on a control account explained and corrected.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every control account agrees to its subledger report at each month end, or the difference is explained in writing."
                cadence: rolling
              tasks:
                - "List each control account and the report that supports it"
                - "Agree each control account to its subledger total @recurring(monthly:5)"
                - "Search the control accounts for manual journals posted this month"
                - "Ask your accounting system support how to block manual posting to control accounts"
            - name: Journal entry review and approval
              description: |-
                ## Purpose
                Journals are where both honest mistakes and deliberate misstatements enter the books, because they bypass the invoice and payment processes. A review routine in which someone other than the preparer checks each journal over the threshold against its support, before or soon after posting, is one of the cheapest controls a close can have.

                ## Milestones
                1. A rule for which journals need review: all manual journals above the threshold, plus any to revenue or cash.
                2. A reviewer named for each preparer, never the same person.
                3. Each reviewed journal marked with the reviewer's initials and date.
                4. A monthly report of all manual journals compared with the review log.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every manual journal above the threshold has evidence of review by someone other than its preparer, checked each month."
                cadence: rolling
              tasks:
                - "Run a report of all manual journals posted last month"
                - "Write which journals need review and who reviews whose work"
                - "Compare the manual journal report with the review log @recurring(monthly:7)"
                - "Send any unreviewed journal back to its preparer for support"
            - name: Recurring and reversing journal register
              description: |-
                ## Purpose
                Many closes post the same depreciation, rent, allocation and accrual journals every month, and the risk is a recurring journal still posting after the contract ended. A register of every recurring and reversing journal, with its start, end and owner, keeps automation from turning into silent errors.

                ## Milestones
                1. Every recurring and auto-reversing journal set up in the system listed.
                2. Each one given an owner, a basis and an end date.
                3. Journals for ended contracts or leavers stopped.
                4. The register checked against the system before each close.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register of all recurring and reversing journals with owners and end dates, checked against the system each month."
                cadence: rolling
              tasks:
                - "Export the list of recurring journals from your accounting system"
                - "Add owner, basis and end date for each journal"
                - "Stop any recurring journal whose contract or reason has ended"
                - "Check the register against the system before the close @recurring(monthly:27)"
            - name: Pre-close week checklist
              description: |-
                ## Purpose
                Half the delays in a close come from inputs that could have been chased before month end: unapproved supplier bills, missing expense claims, timesheets and stock movements. A short checklist for the last week of the month moves that chasing earlier, so close day one starts with complete data.

                ## Milestones
                1. A list of inputs that are usually late, each with its source person.
                2. Reminders sent to those people five working days before month end.
                3. Bills and expense claims approved before the last working day.
                4. A count of late inputs recorded at each close to show progress.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pre-close checklist is run every month, and the number of late inputs falls over three consecutive closes."
                cadence: rolling
              tasks:
                - "List the inputs that arrived late at the last three closes"
                - "Draft a short reminder message for each source person"
                - "Send pre-close reminders and chase unapproved bills @recurring(monthly:24)"
                - "Record how many inputs were still late on close day one"
            - name: Close day stand-up and status board
              description: |-
                ## Purpose
                Close days go wrong quietly: a reconciliation stalls on a missing report and nobody hears until the review. A fifteen-minute stand-up on each close day, with a simple board showing every task as not started, in progress, blocked or done, surfaces blockers while there is still time to fix them.

                ## Milestones
                1. A status board with one row per checklist task and four states.
                2. A fifteen-minute stand-up held at the start of each close day.
                3. Blockers logged with an owner and a time to clear them.
                4. The board archived with the period folder once the close is signed off.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A status board and daily stand-up run through each close day for three months, with blockers logged and cleared."
                cadence: rolling
              tasks:
                - "Set up a status board with one row per checklist task"
                - "Book a fifteen-minute stand-up on each close day @recurring(monthly:1)"
                - "Log each blocker with an owner and a time to clear it"
            - name: Close sign-off and period lock
              description: |-
                ## Purpose
                Numbers that keep changing after they have been reported destroy trust in the accounts faster than any single error. A formal sign-off, in which the reviewer confirms the checklist, reconciliations and journal review are complete, followed straight away by locking the period, gives everyone a fixed set of figures to work from.

                ## Milestones
                1. A sign-off statement listing what the reviewer confirms.
                2. The reviewer's sign-off recorded with date and time each month.
                3. The period locked in the accounting system on sign-off day.
                4. Any post-lock change routed through the reopen rule.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month has a dated sign-off and a locked period by the target close day, for six consecutive months."
                cadence: rolling
              tasks:
                - "Write the sign-off statement the reviewer will confirm"
                - "Find where the period lock setting sits in your accounting system"
                - "Sign off the close and lock the period @recurring(monthly:9)"
                - "File the signed statement in the period folder"
            - name: Monthly close retrospective
              description: |-
                ## Purpose
                Each close teaches something, a late input, a confusing reconciliation, a task in the wrong order, and the lesson is lost unless it is written down within days. A twenty-minute retrospective after sign-off, with one change agreed for next month, is how a close gets shorter year after year.

                ## Milestones
                1. A retrospective held within three working days of each sign-off.
                2. What went well, what slowed the close and one change recorded each time.
                3. The agreed change made to the checklist or calendar before the next close.
                4. Six retrospectives completed with their changes tracked.

                ## Notes
                Start from the **Meeting notes** template. One change a month is plenty; ten changes at once rarely stick.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly retrospectives recorded, each with one agreed change that was reflected in the following month's checklist."
                cadence: rolling
              tasks:
                - "Book a twenty-minute retrospective after the next sign-off"
                - "Hold the close retrospective and agree one change @recurring(monthly:11)"
                - "Update the checklist or calendar with the agreed change"
            - name: Accrual accounting for the monthly close
              description: |-
                ## Purpose
                Accrual accounting puts income and costs in the month they were earned or incurred, regardless of when cash moved, and every close adjustment rests on that idea. Understanding accruals, prepayments, deferred income and provisions as four versions of one principle makes each journal easier to prepare and to explain to an owner.

                ## Milestones
                1. The matching principle explained in your own words in a short note.
                2. Accruals, prepayments, deferred income and accrued income each explained with an example from your business.
                3. The double entry for each written out and checked.
                4. Five real adjustments from last month classified correctly.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explaining the four adjustment types with your own examples and double entries, checked by an accountant."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read an introductory chapter on accruals and prepayments"
                - "Write the matching principle in two sentences of your own"
                - "Write the double entry for each adjustment type with a real example"
                - "Ask your accountant to check the note"
            - name: Reading and checking a trial balance
              description: |-
                ## Purpose
                The trial balance is the last view of the books before reports are built, and a quick read of it catches balances on the wrong side, empty accounts that should have a balance and suspense amounts left behind. Learning a two-minute scan, account group by group, is one of the most useful habits a reviewer can build.

                ## Milestones
                1. The normal debit or credit side of each account group written down.
                2. A scan routine listing what to look for in each group.
                3. Three past trial balances scanned and any oddities explained.
                4. The scan added as a step before sign-off.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written trial balance scan routine, practised on three past months, is part of the pre-sign-off steps."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Print last month's trial balance grouped by account type"
                - "Mark the normal side for each account group"
                - "Write the five things to look for in each group"
                - "Scan two earlier trial balances using the routine"
            - name: Writing a journal with narrative and support
              description: |-
                ## Purpose
                A journal nobody can explain six months later is a problem for the next close, the auditor and anyone covering your work. Learning to write a narrative that says what, why and how it was calculated, with the support attached, turns each journal into its own audit trail.

                ## Milestones
                1. A narrative format agreed: what, why, period and calculation reference.
                2. Five recent journals rewritten to the new standard as practice.
                3. Support attached or linked for every journal above the threshold.
                4. A reviewer confirming that a stranger could follow each one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five rewritten journals, each with a full narrative and attached support, judged understandable by a reviewer who did not prepare them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick five recent journals with weak or missing narratives"
                - "Agree a narrative format of what, why, period and calculation"
                - "Rewrite the five narratives and attach their support"
                - "Ask someone outside the close to read them cold"
            - name: Estimating accruals without an invoice
              description: |-
                ## Purpose
                Some of the biggest month-end entries have no invoice behind them yet: contractor hours, a legal bill in progress, energy use or a commission due. Learning the four main estimation bases (purchase orders, contracts, timesheets and run rates) and recording which one you used makes estimates defensible and easier to true up.

                ## Milestones
                1. The four main estimation bases written down with when to use each.
                2. Each current accrual labelled with its estimation basis.
                3. Last three months of estimates compared with the invoices that arrived.
                4. A rule for adjusting an estimate that keeps proving too high or too low.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every accrual on the schedule shows its estimation basis, and three months of estimates have been compared with actual invoices."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down when to use a purchase order, contract, timesheet or run rate"
                - "Label each line on the accruals schedule with its basis"
                - "Compare three months of estimates with the actual invoices"
                - "Ask the agent to summarise which suppliers are most often over or under estimated"
            - name: Month-on-month balance sheet movement review
              description: |-
                ## Purpose
                Comparing each balance sheet line with last month and asking why it moved is the quickest way to spot a missed accrual, a double posting or a reversal that did not reverse. Setting a movement threshold and writing a one-line explanation for anything above it gives the reviewer a short list instead of the whole ledger.

                ## Milestones
                1. A movement threshold set, as an amount and a percentage.
                2. A report comparing each balance sheet line with the prior month.
                3. A one-line explanation written for every movement above the threshold.
                4. Unexplained movements investigated before sign-off.

                ## Notes
                Comparing the profit and loss with budget is a separate exercise. This review looks at the balance sheet against last month, to catch close errors.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every balance sheet movement above the threshold has a written explanation before sign-off, for three consecutive months."
                cadence: rolling
              tasks:
                - "Set a movement threshold as both an amount and a percentage"
                - "Build a report comparing balance sheet lines with the prior month"
                - "Explain every movement above the threshold in one line @recurring(monthly:8)"
            - name: Month-end revaluation of foreign currency balances
              description: |-
                ## Purpose
                Bank accounts, debtors and creditors held in another currency change value in your home currency every month, even if nothing is paid. Learning how your system revalues them at the month-end rate, which rate source to use and where the gains and losses land prevents surprises in both the balance sheet and the profit line.

                ## Milestones
                1. The foreign currency accounts and open items in the ledger listed.
                2. A single month-end rate source agreed and recorded.
                3. The system's revaluation run tested on one month and checked by hand.
                4. Realised and unrealised exchange differences shown in the right accounts.

                ## Notes
                Which rates and methods are acceptable is a question for your accountant, especially at year end. Record whatever source you agree and use it every month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One month-end revaluation run, checked by hand against the agreed rate source, with gains and losses in the agreed accounts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every foreign currency bank account and open invoice in the ledger"
                - "Agree one month-end exchange rate source with your accountant"
                - "Run the revaluation for one month and check two items by hand"
                - "Confirm where realised and unrealised differences are posted"
            - name: Payroll, bonus and holiday pay accruals
              description: |-
                ## Purpose
                Salaries are usually paid in the month, but overtime paid a month late, bonuses earned over the year and holiday not yet taken are all costs of this month. Learning how to accrue each one from payroll and HR data stops a large bonus or holiday balance landing in a single month.

                ## Milestones
                1. Each payroll cost that can fall outside its month identified.
                2. The data source for each named: timesheets, bonus scheme, leave records.
                3. A monthly calculation built for bonus and holiday pay accruals.
                4. The payroll journal and accruals agreed to the payroll report each month.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A documented monthly calculation for bonus and holiday pay accruals, agreed to payroll and HR data for two months."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask payroll which costs are paid in a later month than earned"
                - "Find the source data for overtime, bonus and untaken holiday"
                - "Build a monthly bonus and holiday pay accrual calculation"
                - "Agree the payroll journal to the payroll report for two months"
            - name: Monthly bad debt provision update
              description: |-
                ## Purpose
                Overdue invoices that may never be paid make debtors and profit look better than they are, and the gap usually surfaces all at once at year end. Updating a provision each month from the aged debtor report, using a method agreed with your accountant, spreads the cost and flags customers worth chasing harder.

                ## Milestones
                1. A provision method agreed with your accountant, such as specific invoices plus a percentage by age band.
                2. The aged debtor report reviewed with the credit controller each month.
                3. The provision calculated and posted with a narrative.
                4. Write-offs approved and recorded separately from the provision.

                ## Notes
                Collections work belongs with receivables; this project only reflects the risk in the month's numbers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A bad debt provision is calculated from the aged debtor report and posted at each month end using the agreed method."
                cadence: rolling
              tasks:
                - "Ask your accountant which provision method suits your business"
                - "Review the aged debtor report with the credit controller"
                - "Calculate and post the month's bad debt provision @recurring(monthly:5)"
            - name: Moving from a ten-day close to five days
              description: |-
                ## Purpose
                Ten working days to close means the owner or board sees last month's numbers when this month is already half gone. Using the baseline to shorten the critical path by moving tasks before month end, removing waits and running steps in parallel can bring the close to five days without cutting corners.

                ## Milestones
                1. The critical path through the checklist drawn from the baseline data.
                2. Three tasks moved into the pre-close week.
                3. Two waits removed by changing the order or the owner of a task.
                4. Three consecutive closes finished by working day five with no rise in post-close adjustments.

                ## Notes
                A faster close that needs more corrections afterwards is not faster. Watch the post-close adjustments count alongside the finish day.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three consecutive closes signed off by working day five, with post-close adjustments no higher than the baseline."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Mark the longest chain of dependent tasks on the checklist"
                - "Pick three tasks that could be done before month end"
                - "Change the order or owner of two tasks that cause waiting"
                - "Compare the finish day and adjustments with the baseline after three closes"
            - name: Close task automation shortlist
              description: |-
                ## Purpose
                Several close tasks are pure repetition: posting the same allocations, building schedules from exports, matching control totals. Scoring each task for frequency, time and error risk, then automating the top three within the tools you already have, frees review time without a new system.

                ## Milestones
                1. Each checklist task scored for hours, frequency and error risk.
                2. The three best candidates chosen, each with a way to automate it in current tools.
                3. One automation built, tested against a manual run and documented.
                4. Hours saved measured after two closes.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored shortlist of close tasks, with at least one automated, tested against a manual run and saving measured hours."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Score every checklist task for hours, frequency and error risk"
                - "Ask the agent to suggest automation options for the top three tasks"
                - "Build and test one automation against a manual run"
                - "Measure the hours saved over the next two closes"
            - name: Close management tool decision
              description: |-
                ## Purpose
                Spreadsheets and email work for a close of twenty tasks, but beyond that, task tracking, reconciliation sign-offs and evidence often outgrow them. Comparing staying as you are with two dedicated close or reconciliation tools, against your real task list and budget, leads to a decision you can defend either way.

                ## Milestones
                1. Requirements written from the checklist: task tracking, reconciliations, sign-off, audit trail.
                2. Staying on spreadsheets compared with two tools against the same criteria.
                3. A trial run of the preferred option on one close or a demo with your own data.
                4. A decision recorded with cost, expected hours saved and a review date.

                ## Notes
                Start from the **Purchase decision** template. Staying put is a valid outcome; write down why.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on close tooling, comparing at least two tools with staying put against written requirements."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the close requirements a tool would have to meet"
                - "Shortlist two close or reconciliation tools within budget"
                - "Score both tools and the current spreadsheets on the same criteria"
                - "Record the decision with cost and a review date"
            - name: Auto-reversing accruals decision
              description: |-
                ## Purpose
                Accruals posted on the last day of the month must be undone when the invoice arrives, or the cost is counted twice. Choosing between auto-reversing journals on day one of the next month and clearing each accrual manually against its invoice, and applying one method consistently, removes a common source of double counting.

                ## Milestones
                1. The current method for clearing accruals described, including its failures.
                2. Auto-reversal and manual clearing compared for your volume and system.
                3. One method chosen and written into the checklist.
                4. Two months of accruals checked for double counting under the new method.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One accrual clearing method chosen and documented, with two months of accruals checked and no double counting found."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find last month's accruals that were counted twice or never cleared"
                - "Compare auto-reversal with manual clearing for your volume"
                - "Write the chosen method into the close checklist"
                - "Check two months of accruals for double counting"
            - name: Post-close adjustments log and root causes
              description: |-
                ## Purpose
                Every journal posted after sign-off is evidence that something in the close missed it. Logging each one with its amount, cause and the step that should have caught it, then fixing the most common cause, is the most direct way to raise the quality of the close.

                ## Milestones
                1. A log with period, amount, account, cause and the step that missed it.
                2. Every post-close adjustment for three months logged.
                3. The most frequent root cause named.
                4. A checklist change made to stop that cause recurring.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of post-close adjustments logged with root causes, and one checklist change made against the most frequent cause."
                cadence: rolling
              tasks:
                - "Create a post-close adjustments log with a root cause column"
                - "Log every adjustment made after sign-off @recurring(monthly:12)"
                - "Name the most common root cause after three months"
                - "Change the checklist step that should have caught it"
            - name: Close metrics log
              description: |-
                ## Purpose
                Days to close, late inputs, unreconciled accounts and post-close adjustments are four numbers that together show whether the close is getting better or just feeling busier. Recording them every month in one place gives the retrospective facts to work from and gives managers a simple way to report on the finance function.

                ## Milestones
                1. Four close metrics defined, each with exactly how it is counted.
                2. Last three months back-filled from the baseline.
                3. The metrics recorded at every close.
                4. A six-month trend shared with the owner or finance lead.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of close metrics recorded with consistent definitions, and the trend shared with the finance lead."
                cadence: rolling
              tasks:
                - "Define the four close metrics and how each is counted"
                - "Back-fill three months from the baseline data"
                - "Record the month's close metrics after sign-off @recurring(monthly:10)"
            - name: Goods received not invoiced accrual process
              description: |-
                ## Purpose
                Goods and services that arrived before month end without an invoice are easy to miss when nobody in finance sees the delivery. Using purchase orders and goods received records to build the accrual each month replaces guesswork with a list, and it is often the single biggest accrual in a trading business.

                ## Milestones
                1. The source of delivery records agreed with operations or the warehouse.
                2. A monthly report of receipts with no matching invoice.
                3. The report reviewed for stale lines older than ninety days.
                4. The accrual posted from the report and cleared as invoices arrive.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monthly received-not-invoiced report drives the accrual, with lines older than ninety days investigated each month."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask operations where goods received records are kept"
                - "Build a report of receipts with no matching supplier invoice"
                - "Review stale lines older than ninety days with purchasing"
                - "Post the received-not-invoiced accrual from the report @recurring(monthly:1)"
            - name: Close checklist pruning and task sequencing
              description: |-
                ## Purpose
                Checklists grow every time something goes wrong and rarely shrink, until half the tasks guard against problems that no longer exist. A twice-yearly pass that removes obsolete tasks, merges duplicates and resequences the rest keeps the checklist short enough that people actually follow it.

                ## Milestones
                1. Each task checked for whether it still prevents a real error.
                2. Obsolete tasks removed and duplicates merged.
                3. Remaining tasks resequenced so dependencies run in order.
                4. The pruned checklist tested on one close.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pruned checklist with fewer tasks than before, resequenced by dependency and used for one full close."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark each checklist task with the error it prevents"
                - "Remove tasks that no longer prevent a real error"
                - "Merge duplicate tasks and reorder by dependency"
                - "Run the next close on the pruned checklist"
            - name: First close run on the new checklist
              description: |-
                ## Purpose
                The first close run fully from the written checklist and calendar always finds gaps: a missing task, a dependency in the wrong order, an owner who did not know. Treating it as a dated event, with notes taken as you go and a review straight after, turns those gaps into fixes before the second close.

                ## Milestones
                1. The checklist and calendar issued to everyone before month end.
                2. Every task ticked off as done or noted as skipped with a reason.
                3. Gaps and wrong orders noted during the close.
                4. A revised checklist issued before the following close.
              priority: medium
              deadlineOffsetDays: 40
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One full close run from the written checklist, with every task marked done or skipped and a revised checklist issued."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Send the checklist and calendar to everyone a week before month end"
                - "Tick each task as done or note why it was skipped"
                - "Note every gap or wrong order as it happens"
                - "Issue the revised checklist before the next month end"
            - name: Quarter-end close additions
              description: |-
                ## Purpose
                Quarter ends usually add work to a normal close: quarterly reconciliations, tax balance checks, covenant figures for lenders and a fuller review of estimates. Listing those additions separately, and adding them to the calendar three times a year, stops the quarter end from becoming a surprise.

                ## Milestones
                1. Every quarterly task listed with owner and working day.
                2. Quarterly-frequency accounts from the owner list included.
                3. Lender or investor reporting dates added to the quarter-end calendar.
                4. Four quarter ends closed on time with the additions done.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A quarter-end additions list in use, with four consecutive quarter ends closed by the target day."
                cadence: cyclic
              tasks:
                - "List the tasks that only happen at quarter end"
                - "Add lender and investor reporting dates to the quarter-end calendar"
                - "Add the quarter-end tasks to next month's close calendar @recurring(quarterly)"
            - name: Financial year-end close readiness
              description: |-
                ## Purpose
                Month twelve is the close that feeds the statutory accounts and the audit, and it needs stock counts, a full accruals review and cut-off evidence that ordinary months do not. Preparing the year-end close two months ahead, with the accountant's list of what they need, makes the hand-over a delivery rather than a rescue.

                ## Milestones
                1. The accountant's or auditor's list of year-end close requirements received.
                2. Year-end tasks added to the month-twelve calendar: counts, cut-off tests, full accrual review.
                3. Every balance sheet reconciliation brought up to date in month eleven.
                4. The month-twelve close signed off and the trial balance handed over on the agreed date.

                ## Notes
                Preparing the statutory accounts themselves is a separate piece of work. This project gets the last monthly close right so that work can start on time.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The month-twelve close is signed off and the trial balance delivered to the accountant on the date agreed with them."
                cadence: cyclic
              tasks:
                - "Ask your accountant for their year-end close requirements list @recurring(yearly)"
                - "Add stock count and cut-off test dates to the month-twelve calendar"
                - "Bring every balance sheet reconciliation up to date in month eleven"
                - "Agree the trial balance hand-over date with the accountant"
            - name: Holiday season close plan
              description: |-
                ## Purpose
                Public holidays and leave at the end of the year, or around any long national holiday, can remove three working days from a close and half the people who run it. Planning the holiday close a month ahead, with cover agreed and some tasks moved earlier, keeps the target close day realistic.

                ## Milestones
                1. Holiday dates and planned leave mapped against the close calendar.
                2. Cover agreed for every task whose owner is away.
                3. Tasks that can be done early moved before the break.
                4. A realistic target close day agreed and communicated for the holiday month.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The holiday month close has cover named for every absent owner and finishes by the adjusted target day."
                cadence: cyclic
              tasks:
                - "Map public holidays and team leave against the close calendar @recurring(yearly)"
                - "Agree cover for each task whose owner will be away"
                - "Move early-possible tasks before the holiday break"
                - "Tell report users the adjusted close day"
            - name: First close after a system or chart change
              description: |-
                ## Purpose
                After a new accounting system goes live, or the chart of accounts is restructured, the first close is where mapping errors, missing balances and broken recurring journals appear. Planning that close with extra checks, a parallel comparison where possible and more review time stops a migration problem from becoming a reporting problem.

                ## Milestones
                1. Opening balances in the new setup agreed to the old trial balance.
                2. Recurring journals, bank rules and reports checked in the new setup.
                3. The first close's results compared line by line with the prior month in the old setup.
                4. Extra review time built into the calendar for the first two closes.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first close after the change is signed off with opening balances agreed and a line-by-line comparison to the prior month filed."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree opening balances in the new setup to the old trial balance"
                - "Check every recurring journal and report works in the new setup"
                - "Compare the first close line by line with the prior month"
                - "Add two extra review days to the first two close calendars"
            - name: Owner-run close in one afternoon
              description: |-
                ## Purpose
                Owners who do their own books rarely need a forty-step checklist, but they do need the handful of steps that make the month's profit real. A short close covering reconciled accounts, the big accruals, a trial balance scan and a lock, done in one afternoon a month, gives a small business numbers it can trust for pricing, tax and borrowing.

                ## Milestones
                1. A close of no more than twelve steps written for a small business.
                2. An afternoon booked each month in the first week.
                3. Three months closed in the afternoon slot.
                4. The accountant confirming the books are in better shape at year end.

                ## Notes
                If your accountant or bookkeeper already does part of this, agree who does what before the first afternoon.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months closed using a short owner checklist in a booked afternoon, each locked when done."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a close of twelve steps or fewer for your business"
                - "Book a recurring afternoon in the first week of each month"
                - "Close the first month and note which steps took longest"
                - "Ask your accountant whether anything is missing from the list"
            - name: Splitting the close with an outsourced bookkeeper
              description: |-
                ## Purpose
                When a bookkeeper or accounting firm does part of the close, steps fall between the two sides: the owner thinks the bookkeeper accrued the contractor bill, the bookkeeper never heard about it. A written split, listing who does each task, what the business sends and by when, closes that gap.

                ## Milestones
                1. Each checklist task marked as business, bookkeeper or shared.
                2. A list of what the business sends each month and by which working day.
                3. A deadline agreed for the bookkeeper's draft numbers and the owner's questions.
                4. Two closes run on the split with no task missed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written close split agreed with the bookkeeper, used for two closes with no missed task."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark each close task as business, bookkeeper or shared"
                - "List what the business must send and by which working day"
                - "Agree dates for draft numbers and owner questions with the bookkeeper"
                - "Review the split together after two closes"
            - name: Taking over the close as a new finance manager
              description: |-
                ## Purpose
                Inheriting a close means inheriting its shortcuts, unexplained balances and people who have always done it their way. A structured first ninety days, observing one close, documenting the next and changing things only from the third, earns the team's trust and finds the risks before you own them in front of the board.

                ## Milestones
                1. The first close observed and every step documented as it is actually done.
                2. Balance sheet accounts with no reconciliation or owner listed.
                3. A list of the five biggest close risks shared with your manager.
                4. The first agreed changes made in the third close.

                ## Notes
                Start from the **Skills matrix** template to see who knows which part of the close before you change anyone's role.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A documented current close, a five-item risk list shared with your manager and the first changes made by the third close."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the team to walk you through last month's close"
                - "Document each step as it is really done during your first close"
                - "List the five biggest close risks and share them with your manager"
                - "Agree the first changes with the team before the third close"
            - name: Sharing close work across a small finance team
              description: |-
                ## Purpose
                In a team of two to five, one person often carries the reconciliations and review while others wait, and the close finishes when that person does. Balancing the work by hours, building in review by someone other than the preparer and rotating some tasks makes the close faster and less fragile.

                ## Milestones
                1. Hours per person per close measured from the baseline or one close.
                2. Tasks reassigned so no one person holds more than half the hours.
                3. Every preparer paired with a different reviewer.
                4. Two tasks rotated between people each quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A rebalanced close calendar in which no person holds over half the close hours and every task has a separate reviewer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add up close hours per person from the last close"
                - "Reassign tasks so nobody holds over half the hours"
                - "Pair each preparer with a different reviewer"
                - "Choose two tasks to rotate between people next quarter"
            - name: Close cover when a key person is away
              description: |-
                ## Purpose
                If the one person who knows how the payroll accrual or the intercompany recharge works is ill in close week, the close stops. Short desk notes for each critical task, and one practice close in which the backup does the work, make the close survive holidays, illness and resignations.

                ## Milestones
                1. The close tasks only one person can do identified.
                2. A one-page desk note written for each of them.
                3. Each backup has done the task once with the owner watching.
                4. Desk notes stored in the close folder and checked each year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every single-person close task has a desk note, and each backup has performed it at least once."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the close tasks that only one person can do"
                - "Write a one-page desk note for each of those tasks"
                - "Have each backup do the task once while the owner watches"
                - "Ask the agent to check each desk note for missing steps"
            - name: Teaching a new team member the close
              description: |-
                ## Purpose
                New starters in finance often spend their first months doing close tasks without knowing why they matter, which makes their work hard to trust. A short teaching plan covering the checklist, two reconciliations and one accrual schedule, with a supervised close, makes them useful sooner and gives them reasons, not just steps.

                ## Milestones
                1. A teaching plan of three sessions: the checklist, reconciliations, accruals.
                2. The new team member shadows one full close.
                3. They prepare two reconciliations and one schedule under review in the second close.
                4. Their tasks added to the calendar in their own name.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A new team member has shadowed one close and prepared two reconciliations and one schedule that passed review."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Plan three short sessions on the checklist, reconciliations and accruals"
                - "Invite the new team member to shadow the next close"
                - "Assign two reconciliations and one schedule in the second close"
                - "Add their tasks to the calendar in their name"
            - name: Continuous accounting through the month
              description: |-
                ## Purpose
                Waiting until the month ends to reconcile, accrue and review means every problem arrives at once. Moving reconciliations, accrual updates and journal review into a weekly rhythm, so close days only handle true month-end items, is how experienced teams reach a two or three day close.

                ## Milestones
                1. Close tasks that can run weekly identified and moved off close days.
                2. A weekly Friday slot for reconciliations and accrual updates.
                3. Close days holding only cut-off, final accruals, review and sign-off.
                4. Two closes finished in three working days or fewer.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly reconciliation and accrual work in place, with two consecutive closes signed off in three working days or fewer."
                cadence: rolling
              tasks:
                - "Mark which close tasks could be done weekly instead of monthly"
                - "Block a weekly Friday slot for reconciliations and accrual updates"
                - "Update reconciliations and the accrual schedule for the week @recurring(weekly:fri)"
                - "Strip close days back to cut-off, final accruals, review and sign-off"
            - name: Journal entry analytics for unusual postings
              description: |-
                ## Purpose
                Unusual journals, posted at weekends, by unexpected users, in round amounts or straight to cash and revenue, are where errors and misstatements tend to hide. Running a few simple tests over each month's journal listing points the reviewer at the handful worth a second look, as auditors do.

                ## Milestones
                1. Five tests chosen: weekend posting, unusual user, round amounts, posting after sign-off, rare account pairs.
                2. The tests run on three past months to set a normal level.
                3. Flagged journals reviewed and explained each month.
                4. Test results filed with the period's sign-off.

                ## Notes
                Results are prompts for questions, not conclusions. Raise anything that looks deliberate with the finance lead or owner rather than the preparer.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Five journal tests run on each month's journal listing, with every flagged entry explained before sign-off."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export last month's full journal listing with user and date"
                - "Write the five tests you will run on the listing"
                - "Run the tests on three past months to see the normal level"
                - "Explain each flagged journal before the next sign-off"
            - name: Monthly judgements and estimates memo
              description: |-
                ## Purpose
                Judgement calls such as a disputed supplier bill, a slow-moving stock provision or a bonus that may not be paid move the numbers more than most routine entries. A one-page memo each month, listing each significant estimate, the options considered and why you chose the figure, gives reviewers and auditors the reasoning, not just the number.

                ## Milestones
                1. A memo format: item, amount, options considered, figure chosen and reason.
                2. Each estimate above the threshold recorded in the month's memo.
                3. The memo reviewed and signed with the close.
                4. Estimates compared with outcomes once they settle.

                ## Notes
                Where an estimate depends on a legal or tax view, record the adviser's view and its date rather than your own conclusion.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed judgements memo for each of three consecutive months, with every estimate above the threshold explained."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draft a one-page memo format with options considered and reason"
                - "List every estimate above the threshold in last month's close"
                - "Write the first memo and file it with the sign-off"
                - "Compare earlier estimates with their outcomes after three months"
---

# Month-End Close Process

This area is for anyone who has to produce a month's numbers that people can rely on: an owner closing their own books, a finance manager running the close, or a small team sharing it. It starts with the foundations (a checklist built from how you close today, a working-day calendar with owners, a materiality threshold, cut-off rules and an evidence standard), then the monthly machinery of accruals, prepayments, deferred income, reconciliations, journal review and sign-off, the accounting skills behind each entry, the improvements that shorten the close, the dated moments such as quarter end and month twelve, situations for owners, new managers and small teams, and finally the specialist work of continuous accounting, journal analytics and a monthly judgements memo.

What repeats is the close itself: a pre-close week from around the 24th, the accruals, prepayments and income schedules in the first working days, subledger tie-outs and balance sheet reconciliations, journal review, sign-off and lock, then a short retrospective, a metrics entry and a post-close adjustments review. Quarterly and yearly additions sit on top, and a weekly Friday tidy keeps month-end work small. The Month-end close, Meeting notes, Metrics log, Purchase decision and Skills matrix templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
