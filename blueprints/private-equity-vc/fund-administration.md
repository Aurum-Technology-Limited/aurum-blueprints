---
id: private-equity-vc.fund-administration
name: Fund Administration
description: "A working fund administration set-up: capital calls and distributions that land cleanly, NAV and register checks, payment controls, audit support and a clear way to choose, manage or switch an administrator."
category: business
version: 1.0.0
tags: [private-equity-vc, fund-administration, founder, knowledge-worker, capital-calls, nav, investor-register, fund-operations]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - operational-checklist
    - month-end-close
    - vendor
    - risk-register
    - onboarding-30-60-90
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Fund Administration
          description: "Working with a fund administrator: capital calls and distributions, NAV calculations, investor registers, audit support and choosing or switching an administrator."
          projects:
            - name: Fund administration responsibilities map
              description: |-
                ## Purpose
                Most early fund errors come from a task everyone assumed someone else owned: the administrator thought the GP would confirm the call amount, the GP thought the bank would flag the missing wire. A one-page map of what the GP, administrator, auditor, fund counsel, depositary or bank and tax adviser each own, with the hand-offs between them, is the first document a new fund needs.

                ## Milestones
                1. A one-page map listing every recurring fund administration task with a named owner and a named reviewer.
                2. Each hand-off between parties written as an input, a deadline and an output.
                3. Gaps where no party owns a task listed and assigned.
                4. The map agreed in writing with the administrator and filed with the service agreement.

                ## Notes
                Ask the administrator for their standard responsibility matrix and edit it rather than starting from blank. Theirs will be written in their favour, so read the GP column closely.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A responsibilities map naming owner and reviewer for every recurring task is signed off by the GP and the administrator."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every fund administration task you can think of in one sitting"
                - "Request the administrator's standard responsibility matrix"
                - "Mark an owner and reviewer for each task and highlight the unowned ones"
                - "Agree the final map with the administrator's relationship manager"
            - name: LPA terms abstract for the administrator
              description: |-
                ## Purpose
                An administrator calculates fees, calls and distributions from the LPA, and a misread definition of commitment, management fee base or recallable distribution carries through every quarter until the auditor finds it. Abstracting the clauses that drive the numbers into a short reference, checked by fund counsel, gives everyone the same reading of the document.

                ## Milestones
                1. A terms abstract covering fee basis and step-downs, call notice periods, excuse rights, recycling, expense caps, organisational expense limits and distribution order.
                2. Each line in the abstract linked to its clause number.
                3. Side-letter terms that change calculations for particular investors listed separately.
                4. Fund counsel's confirmation that the abstract reads the clauses correctly on file.

                ## Notes
                The abstract is a working aid, not a replacement for the LPA. Where counsel and the administrator read a clause differently, write the agreed reading down and date it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A clause-referenced terms abstract, with side-letter variations listed, is confirmed by fund counsel and shared with the administrator."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft a first-pass abstract of fee, call and distribution clauses from the LPA"
                - "Check every abstracted line against the clause text yourself"
                - "Add a separate table of side-letter terms that change any calculation"
                - "Send the abstract to fund counsel for confirmation of the readings"
            - name: Investor register built from signed subscriptions
              description: |-
                ## Purpose
                The investor register is the source for every call notice, every distribution and every capital account, so a commitment typed wrongly at first close is an error repeated for ten years. Rebuilding the register directly from countersigned subscription documents, rather than from a spreadsheet of expected commitments, catches the differences before the first call goes out.

                ## Milestones
                1. Every investor on the register traced to a countersigned subscription agreement and an accepted commitment amount.
                2. Legal names, investing entities and notice addresses matching the subscription documents exactly.
                3. Total commitments on the register agreeing to the GP's close records to the unit.
                4. Differences found during the rebuild resolved and recorded in a change log.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The administrator's register agrees to countersigned subscriptions for every investor, with a change log explaining any corrections."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the administrator's current investor register"
                - "Tick each line against its countersigned subscription agreement"
                - "Reconcile total commitments to the close memorandum"
                - "Log each correction with the source document that supports it"
            - name: Fund bank accounts and signatory matrix
              description: |-
                ## Purpose
                Capital calls, distributions and portfolio payments all move through accounts that someone has to open, mandate and keep current, and a signatory who has left the firm is a real fraud and delay risk. Setting out which accounts exist, what each is for and who can approve what, with dual approval above set thresholds, makes cash movement predictable for the bank and the administrator alike.

                ## Milestones
                1. A list of every fund, feeder, SPV and GP account with its purpose, currency and bank.
                2. A signatory matrix showing who can initiate and who can approve, with value thresholds.
                3. Bank mandates updated to match the matrix, with leavers removed.
                4. The administrator's view-only or initiation access recorded against each account.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An account list and signatory matrix with dual-approval thresholds exists, and every bank mandate matches it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the current mandate for each fund bank account"
                - "Draft a signatory matrix with initiation and approval thresholds"
                - "Submit mandate changes to the bank for any signatory who has left"
                - "Record what access the administrator holds on each account"
            - name: Payment authorisation and call-back controls
              description: |-
                ## Purpose
                Funds are attractive targets for payment fraud: a spoofed email changes a portfolio company's bank details or an investor's distribution account days before a large transfer. Written controls for verifying new or changed bank details by call-back to a known number, and for dual approval of every outgoing payment, are cheap to set up and expensive to skip.

                ## Milestones
                1. A written rule that any new or changed payee bank detail is verified by phone to a number already on file.
                2. Dual approval required for every outgoing payment above an agreed threshold, enforced in the bank platform.
                3. The administrator's own payment controls obtained and compared with the GP's rules.
                4. A quarterly test of the controls with results recorded.

                ## Notes
                Start from the **Compliance control** template. Never accept changed bank details from an email alone, even from a known sender.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Call-back verification and dual approval are written, enforced in the bank platform and tested at least once a quarter."
                cadence: rolling
              tasks:
                - "Write the call-back rule for new or changed payee bank details"
                - "Ask the administrator for their payment control procedures"
                - "Set dual approval thresholds in the bank platform"
                - "Sample five recent payments and check each control was followed @recurring(quarterly)"
            - name: Fund accounting policies and chart of accounts
              description: |-
                ## Purpose
                Before the first quarter closes, the GP and the administrator need to agree how investments are carried, how organisational costs and fees are recorded, and how expenses are split between the fund and the manager. A short accounting policies note and a chart of accounts approved by the GP avoids a first audit spent arguing about classification.

                ## Milestones
                1. The accounting framework and reporting currency confirmed with the auditor.
                2. A chart of accounts agreed with the administrator, including separate lines for organisational costs, fees, fund expenses and broken deal costs.
                3. An accounting policies note covering investment valuation basis, income recognition and expense allocation.
                4. The note filed and sent to the auditor ahead of planning.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved chart of accounts and a written accounting policies note are on file and acknowledged by the auditor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the accounting framework and reporting currency with the auditor"
                - "Review the administrator's proposed chart of accounts line by line"
                - "Draft a two-page accounting policies note"
                - "Send the note to the auditor and record their comments"
            - name: Administrator service agreement and deliverables calendar
              description: |-
                ## Purpose
                Service levels in an administration agreement promise a NAV within so many days and notices within so many hours, but those promises only matter if someone checks them. Turning the agreement's service levels into a calendar of dated deliverables, with the GP's own inputs listed too, makes slippage visible in the month it happens rather than at renewal.

                ## Milestones
                1. Every service level in the agreement extracted into a dated deliverables calendar.
                2. The GP's own inputs and their deadlines added beside each deliverable.
                3. Fee terms, liability caps and termination notice periods summarised on one page.
                4. A monthly check of delivered versus promised items running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A deliverables calendar built from the service agreement is checked each month, with missed items logged."
                cadence: rolling
              tasks:
                - "Extract every service level and deadline from the administration agreement"
                - "Add the GP inputs each deliverable depends on"
                - "Summarise fees, liability caps and termination terms on one page"
                - "Check the month's deliverables against the calendar and log any misses @recurring(monthly:3)"
            - name: First close capital account set-up
              description: |-
                ## Purpose
                At first close the administrator opens a capital account for each investor, records commitments and any equalisation basis, and sets the fund's opening position. Checking those opening entries before any money moves is far easier than unwinding a wrong starting point after three calls and a fee period.

                ## Milestones
                1. An opening capital account for each first-close investor showing commitment, unfunded commitment and nil contributions.
                2. GP commitment recorded on the same basis as other investors, or per the LPA if different.
                3. Organisational costs incurred before close identified and their treatment agreed.
                4. A GP sign-off of the opening position sent to the administrator.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Opening capital accounts for every first-close investor are reviewed and signed off by the GP before the first capital call."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request the opening capital account listing from the administrator"
                - "Agree each commitment to the reconciled investor register"
                - "List pre-close organisational costs and their proposed treatment"
                - "Send written sign-off of the opening position"
            - name: Capital call process from request to cash received
              description: |-
                ## Purpose
                Every capital call touches the deal team, the administrator, the bank and every investor, often inside a ten business day notice period, and a wrong amount or a late notice damages investor trust quickly. A written step-by-step process with a checklist covering the call calculation, approvals, notice issue and receipt tracking turns each call into routine work.

                ## Milestones
                1. A written call process from funding need to cash reconciled, with owners and timings.
                2. A call calculation check covering pro rata shares, excused investors and fee components.
                3. A receipts tracker listing each investor's amount due, date received and any shortfall.
                4. The process used for at least one call and updated with what went wrong.

                ## Notes
                Start from the **Operational checklist** template. Check whether the LPA notice period counts business or calendar days before setting any closing date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every capital call follows a written checklist, with calculations reviewed and receipts reconciled within five business days of the due date."
                cadence: rolling
              tasks:
                - "Write the capital call steps from funding request to receipts reconciled"
                - "Build a call calculation check sheet using the LPA abstract"
                - "Set up a receipts tracker with expected and received columns"
                - "Review the last call against the checklist and update the process"
            - name: Monthly cash and bank reconciliation review
              description: |-
                ## Purpose
                Cash is the one balance where an error is both easy to verify and costly to miss. Reviewing the administrator's bank reconciliations for every fund and vehicle each month, against bank statements you pull yourself, catches unidentified receipts, duplicate payments and fees charged by the bank long before quarter end.

                ## Milestones
                1. A monthly reconciliation received for every fund, feeder and SPV account.
                2. Each reconciliation tied to a bank statement obtained directly by the GP.
                3. Reconciling items older than thirty days listed and followed up.
                4. A short sign-off note filed each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bank reconciliations for all fund accounts are reviewed monthly against independently obtained statements, with no reconciling item older than sixty days."
                cadence: rolling
              tasks:
                - "Ask the administrator to send all bank reconciliations by the fifth business day"
                - "Download each account statement directly from the bank platform"
                - "Review the month's reconciliations and chase items over thirty days old @recurring(monthly:8)"
                - "File a sign-off note with the reconciliations"
            - name: Quarterly NAV pack review and sign-off
              description: |-
                ## Purpose
                The administrator produces the quarterly NAV, but the GP owns it: valuations, accruals and allocations all rest on judgements the GP made. A fixed review routine each quarter, working through investment values, income, expenses, fee accruals and capital accounts in the same order, keeps sign-off from becoming a quick glance at the bottom line.

                ## Milestones
                1. A standard NAV review checklist covering investments, cash, accruals, fees, expenses and capital accounts.
                2. Investment values in the NAV agreed to the approved valuation file.
                3. Movements against the prior quarter explained line by line.
                4. Written GP sign-off sent to the administrator before investor reporting starts.

                ## Notes
                Start from the **Month-end close** template and adapt it to a quarterly cycle. The valuation itself belongs to your valuation policy; this review checks the NAV carries it correctly.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarterly NAV is reviewed against a written checklist and signed off by the GP, with movements explained, before reporting begins."
                cadence: cyclic
              tasks:
                - "Draft the NAV review checklist in the order you will work through the pack"
                - "Agree investment values in the draft NAV to the approved valuation file"
                - "Work through the quarter's NAV pack and send written sign-off @recurring(quarterly)"
                - "Write a short explanation of each material movement against the prior quarter"
            - name: Distribution processing and approval routine
              description: |-
                ## Purpose
                Distributions are where investors notice errors fastest, and where withholding, recallable amounts and the waterfall all have to be right at once. A distribution routine that separates the calculation, the review, the approval and the payment, with investor bank details verified before each run, keeps an exit's good news from turning into a correction letter.

                ## Milestones
                1. A distribution checklist covering source of proceeds, waterfall output, withholding, recallable treatment and notices.
                2. The administrator's calculation reviewed against the LPA abstract and the waterfall model.
                3. Investor bank details for the run verified against the register and the call-back record.
                4. Payments released only after dual approval, with a post-payment reconciliation filed.

                ## Notes
                Withholding and tax classification of proceeds are questions for your tax adviser. This routine records their answer and applies it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every distribution is processed through a written checklist with independent review, verified bank details and a reconciliation on file."
                cadence: rolling
              tasks:
                - "Write the distribution checklist with sign-off points"
                - "Agree the waterfall output used by the administrator to the GP's model"
                - "Confirm with the tax adviser how this distribution's proceeds are classified"
                - "Reconcile payments made to the notices issued"
            - name: Management fee calculation check each period
              description: |-
                ## Purpose
                Management fees are usually the largest recurring charge to investors and the line LPs and their auditors test first. Recalculating each period's fee independently from commitments, invested capital, step-downs, offsets and side-letter discounts, rather than accepting the administrator's figure, protects both the investors and the GP's reputation.

                ## Milestones
                1. A fee recalculation sheet built from the LPA abstract and side-letter table.
                2. Fee offsets from transaction, monitoring or director fees tracked and applied.
                3. Each period's administrator fee figure agreed to the recalculation within an agreed tolerance.
                4. Differences explained and corrected before notices go out.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each fee period's management fee is independently recalculated and agreed to the administrator's figure before it is charged."
                cadence: cyclic
              tasks:
                - "Build a fee recalculation sheet from the terms abstract"
                - "Add a table of fee offsets received from portfolio companies"
                - "Recalculate the period's fee and compare with the administrator @recurring(quarterly)"
                - "Log any discount from side letters applied to each investor"
            - name: Fund expense invoice approval queue
              description: |-
                ## Purpose
                Legal bills, audit fees, broken deal costs and travel arrive in a steady stream, and each must be split correctly between the fund, the manager and sometimes a portfolio company. A weekly approval queue with a written allocation rule stops expenses being paid twice, charged to the wrong entity or held up until the quarter end rush.

                ## Milestones
                1. A written expense allocation rule saying which costs belong to the fund, the manager or a vehicle.
                2. A single queue where every invoice is logged with entity, category and approver.
                3. Invoices cleared every week, with nothing older than thirty days unapproved.
                4. Expense caps from the LPA tracked against year-to-date spend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All fund invoices pass through one queue with a recorded allocation and approver, and none sits unapproved for more than thirty days."
                cadence: rolling
              tasks:
                - "Write a one-page rule for allocating costs between fund and manager"
                - "Set up an invoice queue with entity and category columns"
                - "Clear the invoice queue and send approvals to the administrator @recurring(weekly:tue)"
                - "Compare year-to-date fund expenses with any LPA cap"
            - name: Investor register change log and transfer handling
              description: |-
                ## Purpose
                Over a fund's life investors change names, merge, move custodians, change bank accounts and sell their interests on the secondary market. Every change needs GP consent where the LPA requires it, supporting documents and a clean update to the register, and a monthly change log is how you prove later that each one was handled properly.

                ## Milestones
                1. A change log recording every register change with date, document and approver.
                2. A transfer checklist covering GP consent, transfer agreement, new investor onboarding and capital account split.
                3. Bank detail changes verified by call-back before being applied.
                4. The register reconciled to the change log each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every register change is logged with supporting documents, and the register is reconciled to the log each month."
                cadence: rolling
              tasks:
                - "Create a register change log with document and approver columns"
                - "Write the transfer checklist with fund counsel's consent steps"
                - "Reconcile the month's register changes to the log @recurring(monthly:20)"
                - "Confirm the onboarding checks for any incoming transferee are complete"
            - name: Quarterly administrator service review
              description: |-
                ## Purpose
                Administrators assign teams that change, and quality drifts quietly between renewals. A structured quarterly review with the relationship manager, built on the deliverables log, error count and open queries, keeps problems specific and gives you a written record if you later decide to switch.

                ## Milestones
                1. A scorecard covering timeliness, accuracy, responsiveness and team continuity.
                2. Quarterly meetings held with the administrator's relationship manager.
                3. Agreed actions from each review recorded with owners and dates.
                4. A trend of scores across four quarters available before renewal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly reviews with scorecards and agreed actions are on file before the administration agreement renews."
                cadence: rolling
              tasks:
                - "Draft a four-heading scorecard for the administrator"
                - "Pull the quarter's missed deliverables and error count"
                - "Hold the quarterly service review and record agreed actions @recurring(quarterly)"
                - "Follow up open actions from the previous review"
            - name: Independent check of administrator outputs
              description: |-
                ## Purpose
                Outsourcing the work does not outsource the responsibility, and investors' operational due diligence teams will ask how the GP checks the administrator. A light shadow check each month, sampling journals, capital account movements and fee accruals against your own records, is a defensible answer that also catches errors early.

                ## Milestones
                1. A sampling plan listing which items are checked monthly and which quarterly.
                2. A simple GP-side record of calls, distributions and fees to check against.
                3. Monthly sample results logged with any errors found.
                4. Recurring error types raised in the administrator service review.

                ## Notes
                A full shadow ledger is costly; most smaller managers sample instead. Decide which you are doing and write it down, because investors will ask.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written sampling plan is followed monthly, with results logged and recurring errors escalated to the administrator."
                cadence: rolling
              tasks:
                - "Write a sampling plan covering journals, capital accounts and accruals"
                - "Set up a GP record of calls, distributions and fee charges"
                - "Test the month's sample against your own records and log results @recurring(monthly:12)"
                - "Add recurring error types to the next service review agenda"
            - name: Investor portal and notice delivery checks
              description: |-
                ## Purpose
                Notices that go to an old email address, a portal login the investor never activated or the wrong contact at a large institution are a common reason calls arrive late. A monthly check of portal access, contact lists and bounced notices keeps the delivery side of fund administration as accurate as the numbers.

                ## Milestones
                1. A contact list for each investor showing who receives calls, distributions and statements.
                2. Portal access confirmed for every investor contact who should have it.
                3. Bounced or unopened notices from the last month followed up.
                4. Leavers at investor organisations removed promptly.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Investor contact lists and portal access are checked monthly, with every bounced notice followed up within five business days."
                cadence: rolling
              tasks:
                - "Export the portal user list and investor contact list"
                - "Mark contacts with no login or no activity in six months"
                - "Review bounced notices and portal access changes @recurring(monthly:25)"
                - "Ask each investor to confirm their notice contacts once a year"
            - name: Subscription credit facility drawdown administration
              description: |-
                ## Purpose
                Borrowing on a subscription line lets the fund pay for a deal before investors fund a call, but every draw, repayment, interest payment and borrowing base certificate has to be tracked against the facility terms and the calls that will repay it. Clear administration of the facility avoids breaching its limits and keeps the fund's reported returns honest about the borrowing.

                ## Milestones
                1. A facility summary covering limit, borrowing base rules, clean-down requirements and reporting deadlines.
                2. A draw and repayment log linked to the capital calls that repay each draw.
                3. Borrowing base certificates prepared and checked before submission.
                4. Interest and fees on the facility allocated to the fund correctly in the NAV.

                ## Notes
                Whether and how the facility is disclosed to investors belongs with your LP reporting and counsel. This project keeps the operational record accurate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every facility draw is logged against its repaying call, and each borrowing base certificate is checked before it reaches the lender."
                cadence: rolling
              tasks:
                - "Summarise the facility agreement's limits, reporting and clean-down rules"
                - "Set up a draw log linked to capital calls"
                - "Check the borrowing base certificate and outstanding draws @recurring(monthly:16)"
                - "Confirm facility interest is accrued in the fund's NAV"
            - name: Year-end fund administration calendar
              description: |-
                ## Purpose
                Year end stacks the audit, the fourth quarter NAV, investor tax data, regulatory returns handled by your compliance lead and the annual meeting into the same ten weeks. A dated calendar agreed with the administrator, auditor and tax preparer in the autumn sets the order of work and shows early where one late input delays everyone else.

                ## Milestones
                1. A year-end calendar listing every deliverable, its owner and its dependency.
                2. Dates agreed with the administrator, auditor and tax preparer.
                3. GP inputs, such as final valuations and management representations, scheduled.
                4. A post year-end review noting which dates slipped and why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A year-end calendar with agreed dates from administrator, auditor and tax preparer is circulated before the financial year closes."
                cadence: cyclic
              tasks:
                - "List every year-end deliverable and its dependency"
                - "Ask the administrator, auditor and tax preparer to confirm their dates"
                - "Circulate the agreed calendar to everyone involved"
                - "Build next year's calendar from what slipped this year @recurring(yearly)"
            - name: How a fund NAV is built
              description: |-
                ## Purpose
                Founders who came from deal roles often know what the NAV number is but not how it is assembled, which makes it hard to review or explain. Working through one real NAV pack from investment values to cash, accruals, fees, carried interest accrual and capital accounts builds the understanding needed to ask the administrator the right questions.

                ## Milestones
                1. One NAV pack traced from the trial balance to the statement of net assets.
                2. Each major line explained in your own words with its source.
                3. The link between the NAV and individual capital accounts understood and written down.
                4. Five questions about the pack answered by the administrator.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written walk-through of one NAV pack, from trial balance to capital accounts, is completed and checked with the administrator."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the administrator for last quarter's full NAV pack and trial balance"
                - "Trace every balance sheet line to its supporting schedule"
                - "Write a one-paragraph explanation of each major line"
                - "Send your five open questions to the fund accountant"
            - name: Tying capital accounts to the general ledger
              description: |-
                ## Purpose
                Capital accounts are an allocation of the fund's partners' capital, so their total must equal the equity in the fund's ledger every quarter. Learning to tie them together, and to follow one investor's account through contributions, allocations of income and gains, fees and distributions, is the skill that finds allocation errors before investors do.

                ## Milestones
                1. The sum of all capital accounts agreed to partners' capital in the trial balance.
                2. One investor's capital account rebuilt from contributions, allocations and distributions.
                3. The allocation method for income, expenses and gains understood and noted.
                4. A short reconciliation template ready to use each quarter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One investor's capital account is rebuilt independently and the total of all accounts agrees to the ledger, with a reusable template saved."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Total the quarter's capital accounts and compare with partners' capital"
                - "Rebuild one investor's account from source transactions"
                - "Note the allocation method the administrator applies"
                - "Save the reconciliation as a quarterly template"
            - name: Equalisation at subsequent closes
              description: |-
                ## Purpose
                Investors who join at a second or final close must catch up their share of calls and fees already paid, often with an equalisation charge, and earlier investors receive a matching rebalancing. Understanding how the administrator calculates these amounts, using one worked example, means you can check the most error-prone calculation a fundraising year produces.

                ## Milestones
                1. The LPA equalisation and late-close interest terms summarised.
                2. A worked example for one late investor showing catch-up contributions, fees and interest.
                3. The matching rebalancing to earlier investors traced.
                4. The administrator's method confirmed against your example.

                ## Notes
                Some LPAs let the GP waive or vary the late-close charge. Check with counsel before assuming either way.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked equalisation example for one subsequent-close investor agrees to the administrator's calculation."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the LPA's subsequent close and equalisation clauses"
                - "Build a worked example for one late investor"
                - "Trace the rebalancing paid back to earlier investors"
                - "Compare your example with the administrator's equalisation schedule"
            - name: Investment company accounting basics for GPs
              description: |-
                ## Purpose
                Most private funds report investments at fair value with changes through the income statement, which changes how gains, fees and portfolio income appear compared with ordinary company accounts. A focused study of the accounting framework your fund reports under, using your own fund's last set of financial statements, makes reviews and auditor conversations far shorter.

                ## Milestones
                1. The framework your fund reports under identified and its investment entity rules summarised.
                2. Your fund's last financial statements read note by note.
                3. Realised and unrealised gains, fee income and expenses located and understood.
                4. A one-page crib sheet written for future reviews.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page crib sheet on the fund's accounting framework, built from its own financial statements, is saved for review use."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Confirm with the auditor which framework the fund reports under"
                - "Read the fund's last financial statements and mark unclear notes"
                - "Find a plain-language guide to investment entity accounting for that framework"
                - "Write a one-page crib sheet of what to check in each statement"
            - name: Reading an administrator's SOC 1 report
              description: |-
                ## Purpose
                Larger administrators publish an independent controls report each year, and institutional investors expect the GP to have read it, not just filed it. Knowing what the report covers, where the exceptions are listed and which controls the GP itself must operate turns a long document into a short list of things to act on.

                ## Milestones
                1. The latest controls report obtained and its period and scope noted.
                2. Exceptions found by the auditor listed with the administrator's responses.
                3. Complementary user entity controls the GP must operate identified.
                4. Each GP-side control mapped to an existing project or routine.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of the administrator's controls report, its exceptions and the GP's required controls is filed and reviewed each year."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Request the administrator's latest controls report and bridging letter"
                - "List every exception and the administrator's response"
                - "Extract the controls the report expects the GP to operate"
                - "Map each GP control to the routine in this area that covers it"
            - name: Recallable distributions and recycling tracker
              description: |-
                ## Purpose
                Many LPAs let the GP recall certain distributions or reinvest early proceeds, which changes each investor's unfunded commitment. If recallable amounts are not tracked investor by investor from the day they are paid out, the fund either under-calls later or calls more than it is entitled to.

                ## Milestones
                1. The LPA's recycling and recall limits summarised with time limits.
                2. A tracker showing recallable amounts by investor and expiry date.
                3. Unfunded commitment on the register agreed to the tracker.
                4. Each distribution notice stating clearly what is recallable.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recallable distribution tracker by investor agrees to unfunded commitments on the register at each quarter end."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the recycling and recall clauses with their time limits"
                - "Build a tracker of recallable amounts by investor"
                - "Agree unfunded commitments to the administrator's register"
                - "Check that recent distribution notices label recallable amounts"
            - name: Investor tax data pack coordination
              description: |-
                ## Purpose
                Investors need tax reporting from the fund, such as partnership schedules or country equivalents, by dates their own advisers set, and late packs are a frequent complaint in investor surveys. Coordinating the data flow from administrator to tax preparer, with a fixed list of inputs and dates, keeps the GP's part of the process on time without the GP giving tax advice.

                ## Milestones
                1. The list of tax deliverables investors receive and their target dates confirmed with the tax preparer.
                2. The data each deliverable needs from the administrator and portfolio companies listed.
                3. Portfolio company tax information requested early, with a chaser schedule.
                4. Investor questions on tax packs routed to the tax preparer and logged.

                ## Notes
                Tax treatment, elections and withholding positions are for your tax adviser. Your job here is inputs, dates and follow-up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Investor tax packs are issued by the dates agreed with the tax preparer, with every input request logged and chased."
                cadence: cyclic
              tasks:
                - "Ask the tax preparer for the list of deliverables and target dates"
                - "List the inputs each deliverable needs from the administrator"
                - "Send portfolio companies their tax information requests @recurring(yearly)"
                - "Log investor tax queries and the preparer's responses"
            - name: Choosing a fund administrator
              description: |-
                ## Purpose
                A first-time manager's choice of administrator shows up in investors' operational due diligence, the audit and every quarterly report for a decade. Running a proper selection with a written requirement list, at least three proposals and reference calls with managers of a similar size and strategy beats taking the first introduction from fund counsel.

                ## Milestones
                1. A requirement list covering fund structure, jurisdictions, investor count, currencies, portal and reporting needs.
                2. Proposals from at least three administrators scored against the same criteria.
                3. Reference calls with two managers per shortlisted administrator.
                4. A decision recorded with reasons and the losing bidders informed.

                ## Notes
                Start from the **Vendor** template. Ask who will actually work on your fund and how long they have been there; the team matters more than the brand.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An administrator is appointed after scoring three proposals against written criteria and completing reference calls."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write a one-page requirement list for the fund's administration"
                - "Request proposals from three administrators that serve funds your size"
                - "Score each proposal against the same criteria"
                - "Book two reference calls for each shortlisted administrator"
                - "Record the decision and the reasons in the vendor file"
            - name: In-house versus outsourced fund accounting
              description: |-
                ## Purpose
                Some managers keep the books themselves and use an administrator only for investor services, others outsource everything, and a few run a hybrid. The right answer depends on fund size, investor expectations, the cost of a qualified hire and how independent the numbers need to look, so it is worth deciding on paper rather than by default.

                ## Milestones
                1. Three models described: full outsource, hybrid and in house, with what each covers.
                2. A cost comparison over the fund's expected life for each model.
                3. Investor expectations on independent administration gathered from anchor LPs.
                4. A decision recorded with the conditions that would trigger a change.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the administration model, with life-of-fund costs and anchor LP views, is approved by the GP."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Describe what each administration model would cover for your fund"
                - "Estimate the life-of-fund cost of each model"
                - "Ask two anchor investors whether they expect an independent administrator"
                - "Write the decision and the triggers for revisiting it"
            - name: Administrator fee proposal comparison and negotiation
              description: |-
                ## Purpose
                Administration fees are often quoted in basis points with minimums, add-on charges for SPVs, extra investors, portal seats and out-of-scope work, which makes headline prices hard to compare. Modelling each proposal against your actual fund plan and negotiating the add-ons usually matters more than the headline rate.

                ## Milestones
                1. Each proposal converted into an annual cost for years one, three and five of the fund plan.
                2. Add-on charges listed and the likely ones costed.
                3. Negotiation points agreed and put to the preferred administrator.
                4. Final fee schedule attached to the service agreement.

                ## Notes
                Fees charged to the fund under the LPA must stay within what the LPA allows. Check the expense clause with counsel before agreeing a structure.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side cost model of every proposal is completed and the agreed fee schedule is attached to the signed service agreement."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Convert each proposal into annual costs for your fund plan"
                - "List every add-on charge and estimate how often it will apply"
                - "Draft three negotiation points for the preferred administrator"
                - "Attach the agreed fee schedule to the service agreement"
            - name: Deciding whether to switch administrator
              description: |-
                ## Purpose
                Changing administrator mid-fund is disruptive and costly, yet staying with one that keeps making errors costs more in investor trust. A structured decision, based on four quarters of service reviews, the cost of conversion and the investor and auditor view, stops either a rash switch or years of tolerated mistakes.

                ## Milestones
                1. Four quarters of service scores and error logs summarised.
                2. The incumbent given a written improvement plan with a deadline.
                3. Conversion cost and timeline estimated with at least one alternative administrator.
                4. A recorded decision to stay or switch, with the reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A stay-or-switch decision is recorded, supported by service reviews, an improvement plan outcome and a conversion cost estimate."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Summarise four quarters of service reviews and errors"
                - "Send the incumbent a written improvement plan with a deadline"
                - "Ask one alternative administrator for a conversion estimate"
                - "Record the decision and notify the auditor of any change"
            - name: Capital call notices issued through the portal
              description: |-
                ## Purpose
                Emailed PDF notices with bank details attached are slow to produce and an easy target for fraud. Moving notices onto the investor portal, with bank details shown only there and alerts sent by email, cuts preparation time and removes the most copied document in a fund's life from inboxes.

                ## Milestones
                1. Portal capability for notices, alerts and acknowledgements confirmed with the administrator.
                2. Investors told in advance how notices will arrive and how to verify them.
                3. One call issued through the portal with receipt tracked.
                4. Feedback from investors on the change collected and acted on.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Capital call notices are issued through the portal with bank details only visible there, and investors were told in advance."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the administrator which portal features support notices"
                - "Draft a note to investors explaining the new notice process"
                - "Issue the next call through the portal and track acknowledgements"
                - "Collect investor feedback after the first portal call"
            - name: Fund administration risk register
              description: |-
                ## Purpose
                Payment fraud, a key person at the administrator leaving, a missed notice period, a facility breach and a wrong fee calculation are all foreseeable. A short risk register for the fund's back office, with likelihood, impact, controls and owners, gives the GP and investors' due diligence teams a single view of what could go wrong and what stops it.

                ## Milestones
                1. Ten to fifteen fund administration risks listed with likelihood and impact.
                2. Each risk linked to a control or routine in this area.
                3. Owners assigned for every risk.
                4. The register reviewed each quarter and updated after any incident.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register of at least ten administration risks, each with a control and owner, is reviewed every quarter."
                cadence: rolling
              tasks:
                - "List the fund administration risks you worry about most"
                - "Score each risk for likelihood and impact"
                - "Link each risk to the control that addresses it"
                - "Review and update the register with the GP @recurring(quarterly)"
            - name: Shorter quarterly NAV timetable
              description: |-
                ## Purpose
                Investors increasingly expect quarterly figures sooner, and a NAV that takes sixty days leaves little time for reporting. Mapping where the days go, usually waiting for portfolio valuations, late invoices and review loops, and fixing the two biggest delays can bring the close in by a fortnight without asking anyone to work faster.

                ## Milestones
                1. The last two quarterly closes mapped day by day with the waiting points marked.
                2. The two largest delays identified with their causes.
                3. Changes agreed with the deal team, portfolio companies and administrator.
                4. The next close completed against the new target timetable.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The quarterly NAV is delivered at least ten days sooner than the average of the previous two quarters."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Map the last two NAV closes day by day"
                - "Mark where the work waited and why"
                - "Agree fixes for the two biggest delays with the people involved"
                - "Compare each close with the target timetable and note the cause of any slip @recurring(quarterly)"
            - name: First capital call of a new fund
              description: |-
                ## Purpose
                Nothing tests a back office like the first call: it is the moment investors find out whether the manager's back office works. Rehearsing it with the administrator, testing notices on a small internal group and confirming that every investor has completed onboarding before the notice goes out avoids a messy start with institutions who will remember it.

                ## Milestones
                1. All investors confirmed as fully onboarded and able to fund.
                2. The call calculation checked against the LPA abstract by a second person.
                3. A test notice reviewed internally before issue.
                4. All receipts reconciled and any late payers followed up within the notice period.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first call is issued on time, every amount is checked twice and all receipts are reconciled within five business days of the due date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the administrator to confirm every investor's onboarding status"
                - "Have a second person check the call calculation"
                - "Review a test notice internally before release"
                - "Reconcile receipts and contact any investor who has not funded"
            - name: Annual audit support pack
              description: |-
                ## Purpose
                Audit fieldwork goes faster when the auditor receives a complete pack on day one: valuation support, confirmations, capital activity, fee calculations and board approvals. Building that pack in the weeks before year end, with the administrator preparing their share, keeps fieldwork short and the audit fee from growing with every follow-up request.

                ## Milestones
                1. The auditor's request list received and split between GP and administrator.
                2. Valuation support for every investment filed in one place.
                3. Capital activity, fee calculations and expense support ready before fieldwork.
                4. Auditor queries logged and closed, and the signed accounts filed.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The auditor's full request list is met before fieldwork starts and the signed financial statements are filed by the agreed date."
                cadence: cyclic
              tasks:
                - "Ask the auditor for this year's request list and timetable @recurring(yearly)"
                - "Split the request list between GP and administrator owners"
                - "Assemble valuation support for every investment in one folder"
                - "Keep a query log and close each auditor question within three days"
            - name: Subsequent close processing
              description: |-
                ## Purpose
                A second or final close adds investors, triggers equalisation, changes every existing investor's percentage and often coincides with a live deal. Treating the close as a dated event with its own checklist keeps the register, capital accounts and next call aligned when everything changes at once.

                ## Milestones
                1. New investors' subscriptions countersigned and onboarding complete before the close date.
                2. Register and commitment percentages updated for all investors.
                3. Equalisation amounts calculated, checked and notified.
                4. The first call after the close issued on the new percentages.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within ten business days of a subsequent close, the register, percentages and equalisation notices are all issued and checked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the incoming investors and check their onboarding status"
                - "Ask the administrator for the updated register and percentages"
                - "Check the equalisation schedule against your worked example"
                - "Confirm the next call uses the new commitment percentages"
            - name: Final close register lock
              description: |-
                ## Purpose
                After the final close, the fund's investor base and commitments should be fixed except for transfers, and every later calculation depends on that list. Locking the register formally, with the GP, administrator and counsel agreeing the final commitments and side-letter elections, gives the fund a clean reference point for the rest of its life.

                ## Milestones
                1. Final commitments agreed between GP, administrator and fund counsel.
                2. Side-letter elections, including any most favoured nation choices, recorded against each investor.
                3. Final register and percentages issued to the auditor.
                4. Further changes allowed only through the transfer and change log process.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A signed final register with commitments and side-letter elections is filed and shared with the auditor after the final close."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree final commitments with counsel and the administrator"
                - "Record each investor's side-letter elections in the register"
                - "Issue the final register to the auditor"
                - "Note in the change log that the register is now locked"
            - name: First distribution after an exit
              description: |-
                ## Purpose
                The first realisation is when the waterfall, withholding and recallable rules are used for real for the first time. Running it as a dated event, with extra review time built in and investors warned of the timing, makes it a good moment for the fund rather than the first correction notice.

                ## Milestones
                1. Proceeds received and reconciled to the sale completion statement.
                2. Waterfall output, withholding and recallable treatment agreed and documented.
                3. Notices issued with clear explanations of each component.
                4. Payments made and reconciled, and investor questions answered.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first distribution is paid within the timetable announced to investors with no correction notice needed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Reconcile proceeds received to the completion statement"
                - "Walk through the waterfall output with the administrator"
                - "Tell investors the expected distribution date"
                - "Reconcile payments made against the notices issued"
            - name: Response to the auditor's management letter
              description: |-
                ## Purpose
                Auditors report control weaknesses in a management letter, and investors increasingly ask to see it during due diligence. Responding to each point with an owner, a fix and a date, and checking those fixes before the next audit, shows the fund takes its controls seriously and stops the same point appearing two years running.

                ## Milestones
                1. Every management letter point listed with the GP's response.
                2. An owner and date assigned to each fix.
                3. Fixes completed and evidenced before the next audit planning meeting.
                4. The auditor told which points are now closed.

                ## Notes
                Start from the remediation approach you already use for control gaps, and keep the evidence with the audit file.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every management letter point has a written response, owner and date, and all are closed before the next audit planning meeting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each point in the latest management letter"
                - "Draft the GP response for each point"
                - "Assign an owner and date to every fix"
                - "Send the auditor evidence of each closed point"
            - name: Fund administration for a first-time manager
              description: |-
                ## Purpose
                Founders of a first fund usually have no CFO, little time and investors who will judge the whole firm by its back office. A short weekly routine, a clear split of work with the administrator and a part-time finance adviser for reviews lets a founder keep control of the fund's numbers without becoming its bookkeeper.

                ## Milestones
                1. The founder's own administration tasks written down and kept under two hours a week.
                2. A part-time fund finance adviser or fractional CFO engaged for quarterly reviews, or a decision recorded not to.
                3. A weekly thirty-minute slot in place for approvals and administrator queries.
                4. Investors' due diligence questions on operations answered from a prepared document.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The founder's administration work is defined, kept to a weekly slot, and reviewed quarterly by a qualified finance adviser."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the administration tasks only you can do as the GP"
                - "Ask two fund finance advisers for a quote for quarterly reviews"
                - "Clear approvals and administrator queries in a weekly slot @recurring(weekly:fri)"
                - "Draft a two-page operations summary for investor due diligence"
            - name: New fund finance associate first 90 days
              description: |-
                ## Purpose
                Someone joining a fund's finance team from audit or a corporate role knows accounting but not calls, waterfalls, side letters or the administrator relationship. A structured first ninety days, learning one quarter's cycle end to end and taking over specific routines in stages, gets them useful by the next close.

                ## Milestones
                1. Fund documents, terms abstract and responsibilities map read in the first two weeks.
                2. One full quarterly close shadowed from NAV draft to sign-off.
                3. Two routines, such as bank reconciliations and invoice approvals, handed over.
                4. A ninety-day review held with the CFO or GP.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "By day ninety the associate has shadowed a full close and owns two recurring routines, confirmed at a review meeting."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Read the LPA abstract and responsibilities map in week one"
                - "Meet the administrator's fund accountant and relationship manager"
                - "Shadow a quarterly close from draft NAV to sign-off"
                - "Agree which two routines you will own by day ninety"
            - name: Venture fund administration with many small investors
              description: |-
                ## Purpose
                Venture and emerging funds often have a hundred or more individual investors with small commitments, which multiplies onboarding, notices, bank detail changes and queries. Designing administration for volume, with portal-first communication, standard query answers and batch processing, keeps a small team from drowning in email.

                ## Milestones
                1. Investor count, commitment sizes and query volume measured.
                2. Standard answers written for the ten most common investor questions.
                3. Notices, statements and bank changes routed through the portal by default.
                4. Administrator fee impact of the investor count confirmed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Standard answers for the ten most common queries exist, and all notices and bank changes for individual investors go through the portal."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Count investor queries received in the last quarter by topic"
                - "Ask the agent to draft standard answers to the ten most common questions"
                - "Agree with the administrator that notices and bank changes go portal-first"
                - "Check how investor count affects the administrator's fees"
            - name: Offshore fund administered from the Caribbean or abroad
              description: |-
                ## Purpose
                Many managers, including Caribbean-based ones, run funds domiciled in an offshore centre such as the Cayman Islands, with an administrator, registered office and directors in different places and time zones. Mapping who does what across those jurisdictions, and when local deadlines fall, prevents the gaps that appear when no one is sure which office owns a task.

                ## Milestones
                1. A map of the fund's entities, jurisdictions, administrator offices and service providers.
                2. Local deadlines for accounts, audits and returns confirmed with the registered office and counsel.
                3. Banking cut-off times and time zones built into the call and distribution process.
                4. A contact list naming the person in each office responsible for each task.

                ## Notes
                Jurisdiction-specific filings belong with your compliance lead and local counsel. This project keeps the administrative hand-offs clear.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An entity and service provider map with confirmed local deadlines and named contacts is filed and shared with the administrator."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draw the fund's entity chart with each jurisdiction marked"
                - "Ask the registered office to confirm the fund's local deadlines"
                - "Note bank cut-off times in each currency the fund uses"
                - "Build a contact list of the responsible person in each office"
            - name: Administering deal-by-deal SPVs
              description: |-
                ## Purpose
                Co-investment vehicles, syndicate SPVs and holding companies each need their own bank account, register, accounts and often an audit, and they multiply quickly. A standard set-up and a light quarterly routine for every SPV keeps small vehicles from becoming the place where errors and missed filings hide.

                ## Milestones
                1. A list of every SPV with its purpose, investors, administrator and bank.
                2. A standard SPV set-up checklist covering bank, register, accounts and service providers.
                3. A quarterly SPV check covering cash, register and outstanding filings.
                4. Dormant or finished SPVs identified for wind-down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every SPV is listed with its service providers and checked each quarter for cash, register and outstanding filings."
                cadence: rolling
              tasks:
                - "List every SPV the GP manages with its bank and administrator"
                - "Write a standard SPV set-up checklist"
                - "Check each SPV's cash, register and filing status @recurring(quarterly)"
                - "Flag finished SPVs that should be wound down"
            - name: Fund finance handover when the CFO leaves
              description: |-
                ## Purpose
                When the person who knows the fund's numbers leaves, passwords, approvals, half-finished reconciliations and unwritten conventions can leave with them. A handover file and a planned overlap with the administrator protect the next close and the investors' confidence in the firm.

                ## Milestones
                1. A handover file covering routines, open items, conventions and key contacts.
                2. Bank mandates, portal access and approval rights moved to the successor.
                3. The administrator briefed on the change and new approvers confirmed.
                4. One close completed by the successor with the outgoing person available for questions.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A handover file exists, all access and mandates are transferred, and the successor completes one close with support."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every routine, open item and convention the outgoing CFO holds"
                - "Transfer bank mandates, portal access and approval rights"
                - "Brief the administrator and confirm new approvers in writing"
                - "Schedule the successor's first close with support available"
            - name: Administrator conversion and parallel run
              description: |-
                ## Purpose
                Moving a live fund to a new administrator means transferring years of transactions, opening balances, investor records and portal users without losing a call or a quarter. A conversion plan with a reconciled cut-over balance and at least one quarter run in parallel is the standard way to do it safely.

                ## Milestones
                1. A conversion plan with cut-over date, data list, owners and sign-off points.
                2. Opening balances, capital accounts and register at cut-over reconciled between old and new administrator.
                3. One quarter produced by both administrators and differences explained.
                4. Investors, auditor and bank told of the change and new contact details.

                ## Notes
                Agree data handover obligations with the outgoing administrator before giving notice; the service agreement usually sets them.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Cut-over balances are reconciled between administrators and one parallel quarter is completed with all differences explained."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Check the outgoing administrator's handover obligations in the agreement"
                - "Draft the conversion plan with a cut-over date"
                - "Reconcile opening capital accounts between both administrators"
                - "Run one quarter in parallel and explain every difference"
                - "Notify investors, the auditor and the bank of the change"
            - name: Parallel funds, feeders and AIVs administration
              description: |-
                ## Purpose
                Larger funds use parallel vehicles for different investor types, feeders for particular jurisdictions and alternative investment vehicles for specific deals, all of which must share investments and costs in the right proportions. Documenting the allocation rules and checking each quarter that every vehicle carries its correct share prevents slow drift between entities that investors rarely forgive.

                ## Milestones
                1. A structure chart showing every vehicle and how investments flow between them.
                2. Allocation rules for investments, income and expenses written from the fund documents.
                3. Each vehicle's share of every investment checked at quarter end.
                4. Rebalancing entries, if needed, agreed with counsel and the auditor.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Written allocation rules exist for all vehicles, and each quarter end's allocations are checked against them."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw the fund structure chart with every parallel vehicle and AIV"
                - "Write down the allocation rules from the fund documents"
                - "Check each vehicle's share of every investment at quarter end"
                - "Raise any rebalancing need with counsel and the auditor"
            - name: Defaulting investor procedure
              description: |-
                ## Purpose
                An investor who fails to fund a call puts the deal and the other investors at risk, and the LPA's default remedies come with strict notice steps. Having a written procedure, agreed with counsel before any default happens, lets the GP act quickly and fairly rather than improvising under deadline pressure.

                ## Milestones
                1. The LPA's default provisions summarised with every notice step and deadline.
                2. A procedure covering reminders, formal default notice, interim funding and remedies.
                3. Counsel's review of the procedure on file.
                4. Template reminder and notice letters ready.

                ## Notes
                Choosing a remedy is a legal decision for the GP with counsel. The procedure makes sure the steps and dates are met.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A counsel-reviewed default procedure with template letters and notice timings is filed before the next capital call."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise the LPA's default clauses and their deadlines"
                - "Draft a step-by-step default procedure"
                - "Send the procedure to fund counsel for review"
                - "Prepare template reminder and formal notice letters"
            - name: Fund wind-down and final distribution administration
              description: |-
                ## Purpose
                Near the end of its term a fund still has tail investments, escrow releases, final expenses, the last audit and the closing of bank accounts and entities. Planning the wind-down a year ahead, with a reserve for final costs and a checklist for each closing step, avoids keeping a fund open for years over small loose ends.

                ## Milestones
                1. Remaining assets, escrows, liabilities and final costs listed with expected dates.
                2. A reserve for final expenses agreed and held back from distributions.
                3. A closing checklist covering final audit, final distribution, register close and account closures.
                4. Entities dissolved and records archived for the required retention period.

                ## Notes
                Dissolution steps and record retention periods vary by jurisdiction; confirm them with counsel and the registered office.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A wind-down plan with a final cost reserve and closing checklist is approved by the GP at least twelve months before the planned final distribution."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List remaining assets, escrows and liabilities with expected dates"
                - "Estimate final costs and agree a reserve with the GP"
                - "Draft the closing checklist with counsel and the administrator"
                - "Confirm record retention periods with the registered office"
---

# Fund Administration

This area is for the founder running a first fund and the finance person who keeps a fund's back office honest, whether the work sits with a third-party administrator or partly in house. It starts with foundations (who does what, the LPA terms that drive the numbers, the investor register, bank accounts and payment controls), moves into the operating rhythm of capital calls, distributions, NAV packs, fee checks and register changes, then the skills behind a NAV and a capital account, the decisions about choosing, pricing and switching an administrator, dated moments such as a first call, a subsequent close and the audit, situations for different seats and structures, and finally specialist work on conversions, parallel vehicles, defaults and wind-downs.

What repeats is a weekly invoice queue, monthly bank, register, portal and facility checks, a monthly independent look at the administrator's outputs, quarterly NAV sign-off, fee recalculation, control reviews and a service review, and a yearly audit and tax data cycle. The Compliance control, Operational checklist, Month-end close, Vendor, Risk register and Onboarding 30/60/90 templates pair with the projects that name them. Keep investor names, bank details and balances inside the fund's own systems; these projects hold your working method, and legal, tax and regulatory calls belong with fund counsel, the auditor and your tax adviser. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
