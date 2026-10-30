---
id: finance-accounting.nonprofit-fund-accounting
name: Nonprofit Fund Accounting
description: "A fund register, restriction terms on file, fund-coded books, monthly roll-forwards, grant budget tracking, funder and trustee reporting, a reserves policy and the annual filings that keep a charity accountable."
category: business
version: 1.0.0
tags: [finance-accounting, nonprofit-fund-accounting, nonprofit, manager, team, restricted-funds, grant-reporting, charity]
author: Aurum Technology
starter_structure:
  templates:
    - month-end-close
    - board-meeting
    - risk-register
    - purchase-decision
    - operational-checklist
    - remediation-plan
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Nonprofit Fund Accounting
          description: "Tracking restricted and unrestricted funds, grant spending, donations and trustee reporting so charities and nonprofits stay accountable to funders and regulators."
          projects:
            - name: Fund register of every restricted and unrestricted fund
              description: |-
                ## Purpose
                Every pound or dollar a nonprofit holds belongs to a fund, and most fund accounting problems start because nobody has a single list of what those funds are. A register naming each fund, its type, its source, its purpose wording, its end date and its current balance becomes the reference that coding, reporting and the annual accounts all hang from.

                ## Milestones
                1. Every active fund listed with a short code, a name and its type: unrestricted, designated, restricted income or endowment.
                2. The donor or funder, the purpose wording and any end date recorded against each restricted fund.
                3. The opening balance of each fund entered and the total agreed to total funds on the balance sheet.
                4. A named owner in the finance team for each fund above an agreed size.

                ## Notes
                Keep fund types to the categories your accounting framework uses. Inventing extra categories makes the annual funds note harder, not easier.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fund register lists every fund with type, source, purpose wording and balance, and its total agrees to total funds on the latest balance sheet."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every fund name that appears in last year's accounts and the current ledger"
                - "Record type, funder, purpose wording and end date for each fund"
                - "Agree the register total to total funds on the balance sheet"
                - "Review the register for new, closed and expired funds @recurring(quarterly)"
            - name: Restriction terms file for gifts and grants
              description: |-
                ## Purpose
                A restriction is only as clear as the document that created it: the grant agreement, the appeal leaflet, the donor's letter or the will. Gathering those source documents in one place, with the restricting sentence copied out, settles most arguments about what a fund may be spent on before an auditor or funder asks.

                ## Milestones
                1. A folder per restricted fund holding the agreement, award letter, appeal wording or donor correspondence that created it.
                2. The exact restricting wording copied into the fund register for each fund.
                3. Funds with no surviving documentation listed, with a recorded view from the treasurer on how each is treated.
                4. Reporting, match funding, clawback and asset ownership clauses flagged for every live grant.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every restricted fund in the register links to a source document, or to a recorded decision on its treatment where no document survives."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Create one folder per restricted fund in the shared drive"
                - "Collect the signed agreement or appeal wording for each restricted fund"
                - "Copy the restricting sentence for each fund into the register"
                - "Ask the agent to pull reporting and clawback clauses from each grant agreement into a table"
            - name: Fund and grant coding in the ledger
              description: |-
                ## Purpose
                Fund accounting only works if every transaction carries its fund as it is posted, not when someone sorts it out at year-end. Setting up a fund dimension, class or tracking category in the accounting system, with grant codes beneath it where funders want line-by-line reports, turns a fund's income and spending into a report rather than a spreadsheet exercise.

                ## Milestones
                1. A fund dimension or tracking category set up, with one value per fund in the register.
                2. Grant codes added beneath the fund for any funder that requires spending by budget line.
                3. Posting rules written for which fields are mandatory on bills, expense claims, payroll journals and receipts.
                4. A test month posted and a fund-level income and expenditure report produced straight from the system.

                ## Notes
                Use the fund field for restrictions and departments or cost centres for who manages the spend. Mixing the two in one field is the usual cause of reports nobody trusts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ledger produces an income and expenditure report by fund for a test month without any spreadsheet adjustment."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Check which dimension or tracking fields your accounting system offers"
                - "Create a fund value for every fund in the register"
                - "Make the fund field mandatory on bills, claims and journals"
                - "Run a fund income and expenditure report for one test month"
            - name: Opening fund balances reconciliation
              description: |-
                ## Purpose
                Inherited fund balances are often a single figure carried forward for years with no workings behind it. Rebuilding each restricted balance from income received less spending charged, and agreeing the result to the books, gives a starting point the auditor and the trustees can rely on.

                ## Milestones
                1. A roll-forward for each restricted fund from its start date or a reliable earlier balance.
                2. Differences between the rebuilt balance and the ledger listed, with an explanation for each.
                3. Correcting transfers or journals approved by the treasurer or finance committee and posted.
                4. Restricted, designated and general fund balances that sum to net assets on the balance sheet.

                ## Notes
                Where history cannot be reconstructed, record the reasoning and get it approved. Auditors accept a documented judgement far more readily than an unexplained number.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each restricted fund's opening balance is supported by a roll-forward, all fund balances sum to net assets, and corrections are approved in minutes."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pull the last three years of fund balances from the signed accounts"
                - "Rebuild each restricted balance from income received less spending charged"
                - "List every unexplained difference with the amount and the likely cause"
                - "Take the correcting transfers to the finance committee for approval"
            - name: Restricted versus designated funds policy
              description: |-
                ## Purpose
                Trustees can set money aside for a purpose themselves, but the same board can undo that designation, whereas a donor's restriction binds them. A short written policy on how each kind is created, approved, reported and released stops designated funds being described to funders as restricted, and restricted funds being quietly used as general reserves.

                ## Milestones
                1. Definitions of unrestricted, designated, restricted and endowment funds written in plain language.
                2. The approval route for creating, changing and releasing a designation agreed by the board.
                3. A rule for how gifts with unclear wording are classified and who decides.
                4. The policy approved and minuted, with the date of its next review.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A board-approved policy defines each fund type and the route for creating and releasing designations, minuted with a review date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft one-paragraph definitions of each fund type your accounts use"
                - "Write the approval route for creating and releasing a designation"
                - "Agree a rule for gifts whose restriction wording is unclear"
                - "Table the policy at the next board or finance committee meeting"
            - name: Grant and donation income recognition rules
              description: |-
                ## Purpose
                When to book a multi-year grant, a pledge, a legacy or a performance-related contract is one of the commonest audit adjustments in the sector. Agreeing the organisation's rules with your accountant or auditor, under the framework you report under, means income lands in the right year and the right fund every time.

                ## Milestones
                1. The income recognition requirements of your reporting framework summarised for grants, donations, legacies and contracts.
                2. A rule for conditional and multi-year grants, including the evidence that triggers recognition.
                3. A rule for legacies setting out when notification, probate and estate accounts bring income onto the books.
                4. The rules reviewed by your accountant or auditor and adopted in the finance manual.

                ## Notes
                This organises the decision. The accounting judgement belongs with your accountant or auditor under your framework, such as a charities SORP or the nonprofit standards in your country.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written income recognition rules covering grants, pledges, legacies and contracts are reviewed by the accountant or auditor and filed in the finance manual."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every type of income received in the last two years"
                - "Summarise what your reporting framework says about each type"
                - "Draft the rule for conditional and multi-year grants"
                - "Send the draft rules to your accountant or auditor for comment"
            - name: Reporting framework and filing obligations map
              description: |-
                ## Purpose
                A nonprofit's obligations depend on its legal form, country, income band and funders: which accounting framework applies, whether it needs an audit or an independent examination, and what the regulator wants filed and by when. Writing that down once, on one page, prevents the late-filing penalties and public warnings that follow a missed return.

                ## Milestones
                1. Legal form, registration numbers, regulators and financial year-end listed.
                2. The applicable accounting framework and the scrutiny level required at your income band recorded.
                3. Every annual return, filing and funder report set out in a calendar with its deadline.
                4. Income thresholds that would change the scrutiny level or framework noted.

                ## Notes
                Check each item against the regulator's own guidance. Examples include a charity regulator's annual return, a not-for-profit information return such as Form 990 in the US, and state or provincial filings.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page map names the framework, scrutiny level, regulators and every annual filing with its deadline, checked against official guidance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note your legal form, registration numbers and financial year-end"
                - "Look up the scrutiny level your income band requires on the regulator's site"
                - "Put every annual filing deadline into the finance calendar"
                - "Recheck thresholds and filing deadlines against official guidance @recurring(yearly)"
            - name: Trustee and staff finance responsibilities
              description: |-
                ## Purpose
                In many nonprofits nobody is sure whether the treasurer, the finance committee, the chief executive or the finance officer signs off a fund transfer or a grant report. A responsibilities table agreed by the board closes those gaps and protects volunteers from carrying duties they never accepted.

                ## Milestones
                1. Every recurring finance task listed, from coding and reconciliations to grant reports, fund transfers, budgets and the annual accounts.
                2. One person or body named as preparer, reviewer and approver for each task.
                3. Gaps and single points of failure highlighted, with an owner agreed for each.
                4. The table approved by the board and filed in the finance manual.

                ## Notes
                Approval limits and signing authority for spending belong in the wider delegation of authority. This table covers the fund accounting work itself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A board-approved table names who prepares, reviews and approves each fund accounting task, with no task left without an owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every finance task done in a typical year"
                - "Name the preparer, reviewer and approver for each task"
                - "Mark tasks that only one person is able to do"
                - "Ask the board to approve the table at its next meeting"
            - name: Monthly fund close and balance roll-forward
              description: |-
                ## Purpose
                A month-end close that stops at the bank reconciliation still leaves unanswered the question every funder asks: how much of their money is left? Adding a fund roll-forward to the close, opening balance plus income less spending plus or minus transfers, shows within days of month-end whether any restricted fund has gone negative or been miscoded.

                ## Milestones
                1. A close checklist with fund steps added after the bank and payroll reconciliations.
                2. A roll-forward for every fund produced from the ledger each month.
                3. Negative restricted balances and unusual movements investigated before reports go out.
                4. Twelve consecutive monthly closes completed with roll-forwards filed.

                ## Notes
                Start from the **Month-end close** template and add the fund steps to it. A restricted fund in deficit at month-end is usually a coding error, so fix the coding rather than transferring money in.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive month-end closes each include a filed fund roll-forward, with every negative restricted balance explained."
                cadence: rolling
              tasks:
                - "Add fund roll-forward steps to the month-end close checklist"
                - "Run the fund roll-forward report from the ledger @recurring(monthly:8)"
                - "Investigate any restricted fund showing a negative balance @recurring(monthly:9)"
                - "File the signed roll-forward with the month's close pack"
            - name: Weekly donation banking and fund coding
              description: |-
                ## Purpose
                Donations arrive by card, bank transfer, cheque, cash collections and fundraising platforms, often with a note about what they are for that is lost by the time they reach the books. A weekly routine that banks, codes and records each gift with its restriction keeps restricted income from being swallowed by general funds.

                ## Milestones
                1. Every income channel listed with who receives it and where the donor's instructions appear.
                2. A weekly batch in which each gift is coded to a fund and matched to the bank.
                3. Gifts with an unclear purpose held in a suspense code and queried within a fortnight.
                4. Cash collections counted by two unrelated people, with the count sheet kept.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each week's donations are banked, coded to a fund and matched to the bank, with no gift left in suspense for more than two weeks."
                cadence: rolling
              tasks:
                - "List every channel through which donations arrive"
                - "Code the week's donations to funds and match them to the bank @recurring(weekly:tue)"
                - "Query donors or fundraisers about any gift left in suspense"
                - "Keep two-person count sheets for every cash collection"
            - name: Monthly grant spend against budget lines
              description: |-
                ## Purpose
                Funders approve a budget line by line, for staff, travel, equipment and overheads, and many will only pay for spending that matches it. Comparing each grant's actual spend with its approved budget every month spots under and overspends while there is still time to move costs or ask for a variation.

                ## Milestones
                1. Each live grant's approved budget entered by line and by period.
                2. A monthly report of actual against budget for every grant, drawn from the grant codes.
                3. Lines more than an agreed percentage over or under budget flagged to the budget holder.
                4. Agreed actions on each flagged line recorded and followed up the next month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly actual-versus-budget report exists for every live grant, with each line outside tolerance discussed with its budget holder and the action recorded."
                cadence: rolling
              tasks:
                - "Enter each live grant's approved budget by line and month"
                - "Produce the actual versus budget report for every live grant @recurring(monthly:12)"
                - "Send flagged lines to budget holders with a question for each"
                - "Record the action agreed on each flagged line"
            - name: Staff time allocation to grants
              description: |-
                ## Purpose
                Salaries are usually the biggest cost charged to grants, and an auditor or funder can disallow them if the charge rests on a budget percentage rather than evidence of time worked. A simple monthly timesheet or effort statement for grant-funded staff, posted as a payroll allocation journal, makes those charges defensible.

                ## Milestones
                1. A list of staff whose pay is charged to one or more grants, with the agreed percentages.
                2. A timesheet or monthly effort statement that each of them signs.
                3. A payroll allocation journal posted each month from the signed records.
                4. Any gap between budgeted and actual time reviewed quarterly and the allocation adjusted.

                ## Notes
                Some government funders set specific rules for time records. Check the grant terms before choosing a format.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every month's salary charge to grants is backed by signed timesheets or effort statements and posted through an allocation journal."
                cadence: rolling
              tasks:
                - "List staff whose salaries are charged to grants and the agreed split"
                - "Choose a timesheet or effort statement format that meets the grant terms"
                - "Collect signed time records and post the allocation journal @recurring(monthly:3)"
                - "Compare actual time with budgeted percentages each quarter"
            - name: Release from restriction and fund transfers
              description: |-
                ## Purpose
                When a restricted fund buys a vehicle, finishes a project or reaches the end of a time restriction, the money may need to move to unrestricted funds, and the move has to be documented. A quarterly review of which conditions have been met, with transfers approved and explained, keeps the funds note honest.

                ## Milestones
                1. Every fund with a time, purpose or asset condition listed with the event that releases it.
                2. A quarterly review identifying the conditions met in the period.
                3. Each transfer approved by the right person and posted with a narrative.
                4. A transfer log ready to support the funds note in the annual accounts.

                ## Notes
                Frameworks name this differently: transfers between funds in some, net assets released from restriction in others. The record you need is the same.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A transfer log shows every release or fund transfer in the year with its reason, approver and journal reference."
                cadence: rolling
              tasks:
                - "List the release condition for every time or purpose restricted fund"
                - "Review which release conditions were met in the quarter @recurring(quarterly)"
                - "Post approved transfers with a narrative naming the condition met"
            - name: Funder reporting calendar
              description: |-
                ## Purpose
                Missing a funder's financial report can freeze the next payment or damage a relationship that took years to build. A single calendar of every report due, its format and who prepares the numbers, checked monthly, turns reporting from a recurring surprise into planned work.

                ## Milestones
                1. Every reporting deadline from every live grant entered in one calendar.
                2. The required format, template and supporting evidence noted for each report.
                3. A preparer and a reviewer named for every report.
                4. Twelve months with every financial report submitted on or before its deadline.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every funder financial report due in a twelve-month period is submitted on or before its deadline, as shown in the calendar."
                cadence: rolling
              tasks:
                - "Copy every reporting deadline from live grant agreements into one calendar"
                - "Note the template and evidence each funder requires"
                - "Check the next six weeks of funder deadlines @recurring(monthly:20)"
                - "Confirm each submission and file the report with its fund"
            - name: Donor tax relief claims cycle
              description: |-
                ## Purpose
                Many countries let charities reclaim tax on individual donations, Gift Aid in the UK being one example, but the claim depends on valid donor declarations and clean records. A quarterly claim cycle, with declarations checked before submission, brings in money that is otherwise left unclaimed.

                ## Milestones
                1. The relief schemes your organisation can use confirmed against the tax authority's guidance.
                2. Valid donor declarations stored and linked to donor records.
                3. A quarterly claim prepared, reviewed and submitted.
                4. Each payment received reconciled to its claim and posted to the right funds.

                ## Notes
                Ask your accountant whether relief on a restricted gift follows the gift's restriction in your country, and apply the answer consistently.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly claims are submitted in a year, each supported by valid declarations and reconciled to the amount received."
                cadence: cyclic
              tasks:
                - "Check which donor tax relief schemes apply on the tax authority's website"
                - "Match donations to valid donor declarations in the donor database"
                - "Prepare and submit the donor tax relief claim @recurring(quarterly)"
                - "Reconcile the payment received to the claim and post it to funds"
            - name: Restricted cash and free reserves position
              description: |-
                ## Purpose
                Restricted money often makes a bank balance look healthier than it is, because most of it cannot pay the rent. Showing each month how much cash is restricted, designated and genuinely free tells the chief executive and treasurer what the organisation can actually spend.

                ## Milestones
                1. A monthly schedule splitting cash and investments between restricted, designated and unrestricted funds.
                2. Free reserves calculated using the definition in the reserves policy.
                3. Months of running costs covered by free reserves reported alongside.
                4. Any month where restricted balances exceed total cash flagged as internal borrowing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly schedule shows restricted, designated and free cash for twelve consecutive months, each with months of cover stated."
                cadence: rolling
              tasks:
                - "Build a schedule splitting cash into restricted, designated and free"
                - "Update the free reserves figure from the month's fund balances @recurring(monthly:18)"
                - "Flag any month where restricted balances exceed cash held"
            - name: Gifts in kind and donated services recording
              description: |-
                ## Purpose
                Donated goods, pro bono legal work, free office space and volunteer effort may need to appear in the accounts, and some funders count them as match funding. Recording them as they arrive, with a value basis and evidence, avoids a year-end hunt and keeps match funding claims supportable.

                ## Milestones
                1. A rule, agreed with your accountant, for which donated goods and services are recognised in the accounts.
                2. A log recording each gift in kind with date, donor, description, value basis and evidence.
                3. Monthly postings of recognised items to income and the matching cost or asset.
                4. Volunteer hours recorded separately for reporting and match funding, even where they stay out of the accounts.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A gifts in kind log holds a value basis for each item, and recognised items are posted each month in line with the agreed rule."
                cadence: rolling
              tasks:
                - "Agree with your accountant which donated items are recognised"
                - "Create a gifts in kind log with value basis and evidence columns"
                - "Post the month's recognised gifts in kind from the log @recurring(monthly:25)"
                - "Collect volunteer hours from programme leads for match funding claims"
            - name: Quarterly trustee finance report
              description: |-
                ## Purpose
                Trustees are legally responsible for the funds, yet many board packs give them a single income and expenditure page that hides whether restricted money is being spent as promised. A quarterly report built around funds, reserves, grant progress and risks lets the board ask the right questions in twenty minutes.

                ## Milestones
                1. A standard layout covering fund balances, the unrestricted result, free reserves, grant spend and key risks.
                2. A one-page narrative explaining the three biggest movements.
                3. The report circulated with board papers at least a week before each meeting.
                4. Board questions and decisions on finance recorded in the minutes.

                ## Notes
                Start from the **Board meeting** template for the meeting itself, and keep the finance report to two or three pages plus appendices.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly finance reports are produced in a year, each circulated a week before the board meeting with fund, reserves and grant sections."
                cadence: cyclic
              tasks:
                - "Agree the report layout with the treasurer"
                - "Prepare the fund and reserves report for board papers @recurring(quarterly)"
                - "Write a one-page narrative on the three biggest movements"
                - "Record the board's finance questions and decisions after each meeting"
            - name: Annual donor acknowledgements and tax receipts
              description: |-
                ## Purpose
                In some countries donors need a written acknowledgement or annual receipt to claim tax relief, and everywhere a clear thank-you showing the amount and purpose builds trust. An annual statement run, reconciled to the ledger before anything goes out, stops receipts that disagree with the books.

                ## Milestones
                1. The acknowledgement or receipt requirements in your country confirmed from official guidance.
                2. Donor database totals reconciled to donation income in the ledger for the year.
                3. Statements or receipts issued by the deadline, with the restricted purpose shown where relevant.
                4. Corrections and reissued receipts logged.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Annual donor statements are issued by the required date, after donor database totals have been reconciled to ledger donation income."
                cadence: cyclic
              tasks:
                - "Check the official requirements for donor receipts in your country"
                - "Reconcile donor database totals to ledger donation income"
                - "Issue annual donor statements after the year-end reconciliation @recurring(yearly)"
                - "Log every correction or reissued receipt"
            - name: Fund accounting fundamentals for finance staff
              description: |-
                ## Purpose
                Bookkeepers and accountants arriving from commercial roles are often surprised that profit matters less than whether each fund was spent as given. A short, structured study of fund types, transfers, fund-level reporting and the statement of activities brings a new team member up to speed in a few weeks.

                ## Milestones
                1. The four main fund types and how each is reported explained in the learner's own words.
                2. A worked example of a restricted grant from receipt to final report completed.
                3. The organisation's fund register, coding rules and close checklist read and questions answered.
                4. A month's fund roll-forward prepared by the learner and reviewed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A new finance team member prepares a month's fund roll-forward that passes review without correction."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the fund register and the fund coding rules"
                - "Work through one restricted grant from award to final report"
                - "Prepare a month's fund roll-forward for review"
                - "Write a short note on what differs from commercial accounting"
            - name: Reading the nonprofit statement of activities
              description: |-
                ## Purpose
                Nonprofit accounts look strange to anyone used to company accounts: income and spending split into columns by fund, a net movement in funds instead of profit, and transfers between columns. Learning to read the statement of financial activities, or statement of activities, together with the funds note lets a manager explain the accounts to colleagues and funders with confidence.

                ## Milestones
                1. The columns, headings and fund movements of the statement explained using last year's accounts.
                2. The link between the statement, the balance sheet and the funds note traced for three funds.
                3. Expenditure headings such as raising funds, charitable activities and support costs understood.
                4. A one-page reader's guide written for colleagues.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to your own statement of activities is written and checked by the treasurer or finance lead."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Print last year's statement of activities and its funds note"
                - "Trace three funds from the statement to the balance sheet and funds note"
                - "Write a one-page reader's guide for colleagues"
            - name: Studying your nonprofit accounting framework
              description: |-
                ## Purpose
                The rules that govern nonprofit accounts, such as a charities SORP, the not-for-profit standards under US GAAP or the equivalent sections of your national standards, are revised every few years and leave decisions to the finance lead. Working through the sections on funds, income, expenditure and disclosures gives the knowledge to make those calls and hold a sensible conversation with the auditor.

                ## Milestones
                1. The current version of your framework and any recent amendments identified.
                2. The sections on funds, income recognition, expenditure analysis and the trustees' report read and summarised.
                3. A list of the judgements your organisation makes under the framework, with the current treatment of each.
                4. Differences between the framework and current practice raised with the accountant or auditor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of the framework's fund, income, expenditure and reporting sections exists, and every gap against current practice has been raised with the auditor."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find the current version of your nonprofit accounting framework"
                - "Summarise the sections on funds and income recognition"
                - "List the judgements your organisation makes under the framework"
                - "Raise gaps against current practice with your accountant or auditor"
            - name: Reading grant agreements for financial terms
              description: |-
                ## Purpose
                Grant agreements bury the clauses that matter to finance in schedules and standard terms: eligible costs, payment in arrears, match funding, asset clawback, return of unspent balances and audit rights. Practising a set checklist on a few real agreements trains programme and finance staff to spot those terms before a grant is signed.

                ## Milestones
                1. A checklist of the financial clauses to look for in any grant agreement.
                2. Three current agreements read against the checklist and the results compared.
                3. Clauses that surprised the team discussed and added to the checklist.
                4. The checklist adopted as a required step before any new agreement is signed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A financial clauses checklist has been tested on three live agreements and adopted as a required step before signature."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a checklist of financial clauses to look for"
                - "Read three live grant agreements against the checklist"
                - "Discuss the surprising clauses with programme leads"
                - "Make the checklist a required step before signing new agreements"
            - name: Allowable cost rules for public sector grants
              description: |-
                ## Purpose
                Government and institutional funders apply detailed rules on which costs they will pay, how indirect costs are charged and what records must be kept, the US Uniform Guidance being a well-known example. Learning the rules that apply to your public grants before the first claim avoids disallowed costs that then have to be repaid from unrestricted funds.

                ## Milestones
                1. The cost rules that apply to each public grant identified from its agreement.
                2. Allowable, unallowable and conditional cost categories summarised in a one-page guide.
                3. Procurement, timekeeping and asset rules noted alongside the cost categories.
                4. Coding rules updated so unallowable costs are never charged to those grants.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page allowable costs guide exists for each public funder, and ledger coding rules keep unallowable costs off those grants."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Identify which cost rules each public grant agreement refers to"
                - "Summarise allowable and unallowable cost categories on one page"
                - "Note the procurement and timekeeping rules attached to the grant"
                - "Update coding rules to keep unallowable costs off those grants"
            - name: Endowment and permanent restriction basics
              description: |-
                ## Purpose
                Endowments come with rules that confuse even experienced accountants: the capital may have to be kept, the income may or may not be restricted, and investment gains may belong to the capital. Understanding how your own endowments are set up, from the original gift documents, is the groundwork for any later decision on spending or investment.

                ## Milestones
                1. Every endowment identified with its original gift document.
                2. Each classified as permanent or expendable, with what the documents say about income and gains.
                3. The accounting treatment under your framework summarised.
                4. Questions the documents leave open listed for legal or professional advice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every endowment has a written summary of its capital, income and gains terms drawn from its gift document, with open questions listed for advice."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the original gift document for each endowment"
                - "Classify each endowment as permanent or expendable"
                - "Summarise what each document says about income and gains"
                - "List the questions that need legal or professional advice"
            - name: Trustee finance induction pack
              description: |-
                ## Purpose
                New trustees take on responsibility for the organisation's money, often without a finance background and with an hour to spare before their first meeting. An induction pack and a one-hour session with the finance lead, covering funds, reserves, risks and how to read the board report, lets them ask good questions from their first meeting.

                ## Milestones
                1. A pack covering fund types, the latest accounts, the reserves policy, the main grants and the finance calendar.
                2. A one-hour session format the finance lead can repeat for each new trustee.
                3. A list of the ten questions trustees most often ask, with answers.
                4. Feedback from at least two new trustees used to improve the pack.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An induction pack and one-hour session have been delivered to at least two new trustees, and their feedback used to revise the pack."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather the latest accounts, reserves policy and finance calendar into one pack"
                - "Ask the agent to draft plain-language explanations of each fund type for the pack"
                - "Run a one-hour induction session with the next new trustee"
                - "Revise the pack using feedback from new trustees"
            - name: Reserves policy review
              description: |-
                ## Purpose
                Regulators and funders expect a nonprofit to explain how much unrestricted money it keeps and why, and a policy quoting a number of months with no reasoning helps nobody. Reviewing the policy against real risks, income volatility and commitments, then agreeing a target range with the board, gives a figure worth reporting against.

                ## Milestones
                1. A definition of free reserves matching the one used in the accounts.
                2. The main financial risks costed, such as losing a major funder, a fundraising shortfall or orderly closure.
                3. A target range agreed by the board, with the reasoning written down.
                4. Actions agreed for when reserves fall below or rise above the range.

                ## Notes
                Start from the **Risk register** template to list and cost the risks behind the target.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board-approved reserves policy states a target range of free reserves, the costed risks behind it and the actions for when reserves fall outside it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the free reserves definition used in the latest accounts"
                - "Cost the three biggest financial risks the organisation faces"
                - "Propose a target range with reasoning to the board"
                - "Review the reserves policy against the latest accounts @recurring(yearly)"
            - name: Overhead recovery rate for grant budgets
              description: |-
                ## Purpose
                Charging grants only their direct costs leaves rent, finance, governance and management to be paid from scarce unrestricted income, which is how many nonprofits drift into deficit while growing. Calculating a full cost recovery rate from the accounts gives fundraisers a defensible figure to include in every application.

                ## Milestones
                1. Support and core costs identified from the latest management accounts.
                2. A cost driver chosen for spreading them, such as staff time or direct spend.
                3. An overhead rate or cost per project day calculated and checked by the finance lead.
                4. The rate built into the grant budget template and explained to fundraisers.

                ## Notes
                Some funders cap indirect costs. Show the full rate anyway, so the organisation knows the gap it is funding itself.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A documented overhead rate, calculated from the latest accounts, is included in the grant budget template that fundraisers use."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull support and core costs from the latest management accounts"
                - "Choose the cost driver used to spread core costs"
                - "Calculate the overhead rate and have the finance lead check it"
                - "Brief fundraisers on using the rate in applications"
            - name: Grant budget template for applications
              description: |-
                ## Purpose
                Fundraisers often build grant budgets from scratch in each application, with salaries at last year's rates and no on-costs or inflation. A standard template with current salary costs, on-costs, the overhead rate and inflation assumptions makes every application consistent and stops the organisation winning grants that lose money.

                ## Milestones
                1. A template with salary lines that include employer taxes, pensions and expected pay rises.
                2. Standard rates for overheads, travel, equipment and volunteer expenses set from actual costs.
                3. Multi-year inflation assumptions agreed with the finance lead.
                4. A sign-off step so finance reviews every budget before submission.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A grant budget template with current salary costs, on-costs, overheads and inflation is used for every application, with finance sign-off before submission."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect current salary costs including employer on-costs"
                - "Set standard rates for travel, equipment and volunteer expenses"
                - "Agree multi-year inflation assumptions with the finance lead"
                - "Add a finance sign-off step to the application process"
            - name: Fund accounting capability of your finance system
              description: |-
                ## Purpose
                General small business software can track funds through classes or tags, but a growing nonprofit may outgrow that once it holds dozens of grants with different year-ends and budget lines. Testing what your current system can do against a written list of fund requirements tells you whether to configure it, add a module or move.

                ## Milestones
                1. A requirements list covering fund and grant dimensions, multi-period grant budgets, fund reports and transfer controls.
                2. Your current system tested against each requirement with a pass or fail.
                3. Two alternatives assessed against the same list where the current system falls short.
                4. A costed recommendation taken to the finance committee and the decision minuted.

                ## Notes
                Start from the **Purchase decision** template if replacing the system is on the table.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A minuted finance committee decision on fund accounting software exists, based on a scored requirements list."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the fund accounting requirements your system must meet"
                - "Test the current system against each requirement"
                - "Score two alternatives against the same requirements"
                - "Take a costed recommendation to the finance committee"
            - name: Dormant and small restricted funds clean-up
              description: |-
                ## Purpose
                Old restricted funds with a few hundred left in them clutter every report and still bind the organisation to purposes that may no longer be possible. Reviewing dormant funds, then spending them on their purpose, seeking donor consent to vary them or using the regulator's process for small funds, tidies the register lawfully.

                ## Milestones
                1. Funds with no movement in two years and balances below an agreed size listed.
                2. A route chosen for each: spend on purpose, donor consent, or the regulator's process for varying purposes.
                3. Trustee decisions and any donor consents filed with the fund.
                4. Closed funds marked in the register with the closure date and reason.

                ## Notes
                The rules for changing a restriction vary by country and sometimes need the regulator's consent. Take advice before moving restricted money to general funds.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every dormant restricted fund has a recorded route and trustee decision, and closed funds are marked in the register with a reason."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List restricted funds with no movement in two years"
                - "Check whether each fund's purpose can still be delivered"
                - "Write to surviving donors to ask about varying their restriction"
                - "Review the register for newly dormant funds @recurring(yearly)"
            - name: Investment policy for reserves and endowments
              description: |-
                ## Purpose
                Trustees who hold reserves or endowments are usually expected to invest them prudently under a written policy, yet many hold everything in one bank account by default. Working with an independent adviser to set objectives, risk appetite, liquidity needs and any ethical exclusions, then writing them down, gives the board something to measure the manager against.

                ## Milestones
                1. Cash needed for operations in the next twelve to twenty-four months separated from longer-term money.
                2. Objectives, risk appetite and time horizon for each pool agreed by trustees with professional advice.
                3. Ethical or mission-related exclusions decided and recorded.
                4. A written policy approved, with reporting and review dates.

                ## Notes
                This organises the decision. Investment advice must come from a regulated adviser, and trustees' legal duties when investing vary by country.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trustee-approved investment policy states objectives, risk appetite, liquidity needs and exclusions, prepared with a regulated adviser."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Separate operating cash needs from longer-term money"
                - "Find out what the regulator's guidance says about trustees' investment duties"
                - "Brief an independent regulated adviser on objectives and constraints"
                - "Review investment results against the policy with the board @recurring(yearly)"
            - name: Core cost dependency analysis
              description: |-
                ## Purpose
                Many nonprofits do not know what share of their core costs is paid by unrestricted income, or how much rests on two or three funders. A one-off analysis of income by source, restriction and remaining term against core costs shows the board where the organisation is exposed and which fundraising matters most.

                ## Milestones
                1. Income for the last three years split by source, restriction and remaining term.
                2. Core costs compared with unrestricted income for each year.
                3. Concentration on the largest funders shown as a share of total and unrestricted income.
                4. A short paper to the board with three options to reduce dependency.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A board paper shows three years of income by restriction and source against core costs, the largest funder concentrations and three options."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Split three years of income by source and restriction"
                - "Compare core costs with unrestricted income for each year"
                - "Show the share of income from the three largest funders"
                - "Write a board paper with three options to reduce dependency"
            - name: Restricted overspend and underspend procedure
              description: |-
                ## Purpose
                Grants rarely end exactly on budget. An overspend falls on unrestricted funds unless the funder agrees otherwise, and an underspend may have to be returned or reallocated with consent. A written procedure for both, triggered well before the grant end date, stops last-minute requests and unbudgeted hits to general funds.

                ## Milestones
                1. A trigger point, such as three months before the end, at which finance forecasts each grant's outturn.
                2. Steps for requesting a budget variation or no-cost extension from the funder.
                3. A rule for how overspends are approved and charged to unrestricted funds.
                4. The procedure applied to every grant ending in the next twelve months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written over and underspend procedure has been applied to every grant ending in the next twelve months, with outturn forecasts on file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set the point before grant end when outturn is forecast"
                - "Write the steps for requesting a variation or extension"
                - "Agree who approves charging an overspend to general funds"
                - "Forecast the outturn of every grant ending within a year"
            - name: Year-end restricted funds note and schedules
              description: |-
                ## Purpose
                The funds note in the annual accounts, showing each material fund's opening balance, income, spending, transfers and closing balance, is where auditors and independent examiners spend much of their time. Preparing it with supporting schedules and the purpose of each fund before the accounts are drafted cuts weeks from the year-end.

                ## Milestones
                1. A funds schedule for the year agreeing to the ledger and the balance sheet.
                2. Each material fund described with its purpose and source in plain words.
                3. Transfers between funds listed with their reasons and approvals.
                4. An analysis of net assets between funds prepared for the accounts.
                5. The schedules handed to the accountant or examiner by the agreed date.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A funds note, transfer list and analysis of net assets between funds, agreeing to the ledger, reach the accountant or examiner by the agreed date."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Agree the date the funds schedules are due with the accountant or examiner"
                - "Prepare the year's funds schedule from the ledger"
                - "Write a one-line purpose for every material fund"
                - "Prepare the analysis of net assets between funds"
            - name: Annual report and return to the regulator
              description: |-
                ## Purpose
                Annual accounts, the trustees' or directors' report and the regulator's return are public documents, and late or missing filings can lead to penalties or removal from the register. Running the filing as a fixed annual event, with the trustees' report drafted alongside the accounts, gets everything signed and filed with weeks to spare.

                ## Milestones
                1. The filing deadlines for the accounts, the trustees' report and the annual return confirmed.
                2. A trustees' report draft covering activities, finances, reserves and risks circulated with the draft accounts.
                3. Accounts approved and signed at a minuted board meeting.
                4. Filings submitted and the confirmations saved.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Accounts, trustees' report and annual return are filed before the deadline two years running, with filing confirmations saved."
                cadence: cyclic
              tasks:
                - "Confirm this year's filing deadlines with the regulator"
                - "Draft the finance and reserves sections of the trustees' report"
                - "Book the board meeting that approves the accounts"
                - "Submit the accounts and annual return and save the confirmation @recurring(yearly)"
            - name: Grant close-out and final financial report
              description: |-
                ## Purpose
                The end of a grant brings a final report, the last claim, any return of unspent money and questions about who now owns the equipment it bought. Closing each grant to a checklist within the funder's timetable protects the last payment and leaves a clean file if the funder audits later.

                ## Milestones
                1. All costs for the grant period posted and late invoices accrued.
                2. A final financial report reconciled to the ledger and submitted.
                3. Unspent balances returned, or a reallocation agreed in writing.
                4. Assets bought with the grant recorded with their ownership and disposal conditions.
                5. The grant file archived for the funder's retention period.

                ## Notes
                Start from the **Operational checklist** template and reuse it for every grant that ends.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A grant is closed with its final report submitted on time, unspent funds dealt with in writing and the file archived."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note the final report date and retention period from the agreement"
                - "Accrue any late costs that belong to the grant period"
                - "Reconcile and submit the final financial report"
                - "Archive the grant file with the funder's retention date on it"
            - name: Funder monitoring visit or grant audit
              description: |-
                ## Purpose
                Larger funders and government programmes can send monitors or auditors to test that their money was spent as agreed, often with only a few weeks' notice. Preparing the sample of transactions, timesheets, procurement records and reports in advance turns an anxious week into a routine visit.

                ## Milestones
                1. The scope, dates and documents requested confirmed in writing with the funder.
                2. Evidence for a sample of transactions pulled and checked before the visit.
                3. Timesheets, procurement records and asset lists for the grant ready.
                4. Findings received, responses agreed and actions tracked to closure.

                ## Notes
                Start from the **Remediation plan** template to track any findings.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A funder visit is completed with every requested document provided, and any findings are tracked to closure on a remediation plan."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the visit scope and document list with the funder in writing"
                - "Pull and check evidence for a sample of grant transactions"
                - "Gather timesheets, procurement records and asset lists for the grant"
                - "Agree responses to findings and track each to closure"
            - name: Annual budget split by fund
              description: |-
                ## Purpose
                Budgets that show only total income and total spending can look balanced while unrestricted funds run a deficit hidden by restricted grants. Building the annual budget in columns by fund type, with each grant's spend phased, shows trustees the unrestricted result they are actually approving.

                ## Milestones
                1. Restricted income and spending budgeted grant by grant from the agreements.
                2. Unrestricted income and core costs budgeted separately.
                3. The budgeted unrestricted surplus or deficit and its effect on free reserves shown.
                4. The budget approved by the board in columns by fund type.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A board-approved annual budget is presented in columns by fund type, showing the unrestricted result and its effect on free reserves."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Budget each grant's income and spending from its agreement"
                - "Budget unrestricted income and core costs separately"
                - "Show the unrestricted result against the reserves target"
                - "Present the fund-column budget to the board for approval"
            - name: Handling a large legacy or major gift
              description: |-
                ## Purpose
                Legacies and major gifts can be larger than a year's unrestricted income, and they arrive with questions: is it restricted, when is it income, how is it invested, and what do the trustees tell the donor's family? Working through those questions with a plan avoids booking it in the wrong year or spending capital that was meant to be kept.

                ## Milestones
                1. The will, gift letter or estate correspondence reviewed and any restriction identified.
                2. The accounting treatment and timing agreed with the accountant.
                3. Cash received placed according to the reserves and investment policies.
                4. A board decision recorded on any designation, and the donor or family thanked appropriately.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A large gift is booked in line with the agreed accounting treatment, placed under the reserves policy, and any designation is minuted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the will or gift letter for restriction wording"
                - "Agree the timing and treatment of the gift with your accountant"
                - "Place the cash in line with the reserves and investment policies"
                - "Record the board's decision on any designation"
            - name: Volunteer treasurer taking over the books
              description: |-
                ## Purpose
                Volunteer treasurers of small charities, clubs and community groups often inherit a cash book, a bag of receipts and a bank mandate in someone else's name. A sixty-day plan to get access, find out which money is restricted and set up a simple monthly routine makes the role manageable alongside a day job.

                ## Milestones
                1. Bank mandate, online banking access and signatories updated to the current officers.
                2. Last year's accounts, the cash book and any grant letters collected from the previous treasurer.
                3. Money held for specific purposes identified and listed as restricted.
                4. A simple monthly routine agreed: bank reconciliation, fund balances and a one-page committee report.

                ## Notes
                Small groups can often keep receipts and payments accounts rather than full accruals. Check the threshold with your regulator.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within sixty days, signatories are updated, restricted money is listed and the committee has received its first monthly fund balance report."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Arrange a handover meeting with the previous treasurer"
                - "Update the bank mandate and signatories with the bank"
                - "List any money held for a specific purpose as a restricted fund"
                - "Give the committee a one-page fund balance report each month"
            - name: First institutional grant award
              description: |-
                ## Purpose
                First grants from a government body, foundation or lottery distributor usually bring reporting, procurement and audit requirements the organisation has never had to meet. Setting the grant up properly in its first month, with codes, budget, timesheets and reporting dates, prevents a scramble at the first claim.

                ## Milestones
                1. The agreement read against the financial clauses checklist and questions sent to the funder.
                2. A fund and grant code, the approved budget and the reporting dates set up in the ledger and calendar.
                3. Staff charged to the grant briefed on time recording and eligible costs.
                4. The first claim or report submitted on time and accepted.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The first institutional grant is set up with codes, budget and reporting dates within a month, and its first claim is accepted by the funder."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check the award letter for start date, payment terms and conditions"
                - "Set up the grant code, budget and reporting dates"
                - "Brief grant-funded staff on time records and eligible costs"
                - "Submit the first claim with its supporting evidence"
            - name: Crossing an income threshold for accruals or audit
              description: |-
                ## Purpose
                As income grows, a nonprofit can cross thresholds that require accruals accounts instead of receipts and payments, an audit instead of an independent examination, or a fuller trustees' report. Planning the move a year ahead with the accountant avoids restating the first year in a hurry.

                ## Milestones
                1. The thresholds that apply and the year you expect to cross each identified.
                2. The changes required, such as accruals, comparatives, extra disclosures or a full audit, listed.
                3. Opening balances for debtors, creditors and accruals prepared for the transition year.
                4. An examiner or auditor appointed in time for the first year affected.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A transition plan is agreed with the accountant before the first affected year, and the examiner or auditor is appointed in time."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Check the regulator's current income thresholds for accounts and scrutiny"
                - "Forecast the year income is likely to cross each threshold"
                - "List the accounting changes the new level requires"
                - "Agree the transition timetable with your accountant"
            - name: Emergency appeal fund management
              description: |-
                ## Purpose
                Disaster and crisis appeals can bring in more money in two weeks than a normal year, all given for one stated purpose. Ring-fencing the appeal from day one, with its own fund, published wording on what happens to any surplus and a spending log, protects donor trust and the organisation's reputation.

                ## Milestones
                1. Appeal wording agreed before launch, including what happens if more is raised than needed.
                2. A dedicated fund code created and all appeal income coded to it.
                3. Spending decisions and amounts logged against the appeal purpose.
                4. A report to donors on income and spending issued when the appeal closes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Appeal income is held in a dedicated fund, spending is logged against the published purpose and a closing report has gone to donors."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree appeal wording that covers what happens to any surplus"
                - "Create a dedicated fund code before the appeal launches"
                - "Log each spending decision against the appeal purpose"
                - "Publish a closing report on appeal income and spending"
            - name: Combining funds in a nonprofit merger
              description: |-
                ## Purpose
                When two nonprofits merge, or one transfers its activities to another, every restricted fund and endowment must travel with its restrictions intact. Mapping both organisations' funds before completion, with legal advice on transferring restricted property, prevents money being merged into general funds by mistake.

                ## Milestones
                1. A combined register of both organisations' funds with source documents.
                2. Funds that cannot transfer without consent or a regulator scheme identified with legal advice.
                3. The mapping of each fund into the combined register agreed.
                4. Opening fund balances of the combined organisation reconciled after completion.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every fund of both organisations is mapped to the combined register, with transfer consents in place and opening balances reconciled after completion."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Exchange fund registers with the other organisation"
                - "Ask your legal adviser which funds need consent to transfer"
                - "Agree how each fund maps into the combined register"
                - "Reconcile the combined opening fund balances after completion"
            - name: Fund accounting desk manual for the finance team
              description: |-
                ## Purpose
                In a small finance team, the only person who knows how restricted funds are coded, allocated and reported is often the one about to go on leave. A desk manual covering each routine, with screenshots and examples from your own system, keeps the work running through absences and handovers.

                ## Milestones
                1. Each fund routine documented: coding, allocations, transfers, roll-forward and funder reports.
                2. Worked examples from your own ledger included for the tricky cases.
                3. A colleague completes one month's routines using only the manual.
                4. Gaps found in that test fixed and a review date set.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A colleague has used the desk manual to complete a full month of fund routines without help, and the gaps they found are corrected."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every fund routine the team runs in a year"
                - "Ask the agent to turn your notes on each routine into step-by-step pages"
                - "Add worked examples from your own ledger for tricky cases"
                - "Have a colleague run one month's routines from the manual alone"
            - name: Endowment total return and spending rule
              description: |-
                ## Purpose
                Organisations with permanent endowments may be allowed, under their law and by trustee resolution, to treat part of investment gains as spendable rather than only dividends and interest, through a total return approach or a spending rule. Setting this up needs legal confirmation, an investment policy and careful records of unapplied return, so it suits experienced finance leads working with professional advisers.

                ## Milestones
                1. Legal advice obtained on whether a total return approach or spending rule is available for each endowment.
                2. The endowment's value at the starting date recorded as the base for future calculations.
                3. A spending rate proposed and approved by trustees with professional advice.
                4. A schedule tracking unapplied total return or accumulated gains each year.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trustee resolution on the endowment spending approach, backed by legal advice, is minuted and a schedule of unapplied return is kept each year."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask your legal adviser whether total return is available for each endowment"
                - "Record the endowment value at the chosen starting date"
                - "Present a proposed spending rate to the trustees with the adviser's view"
                - "Update the unapplied total return schedule at year-end"
            - name: Interest allocation to restricted funds
              description: |-
                ## Purpose
                Restricted money sitting in pooled bank accounts or investments earns interest that the funder or donor may be entitled to, and some grant agreements say so explicitly. A documented allocation method, applied quarterly by average fund balance, settles the question fairly and is easy to audit.

                ## Milestones
                1. Agreements that entitle a fund to its interest identified.
                2. An allocation method agreed, such as average quarterly balance.
                3. Quarterly allocation journals posted with workings.
                4. The method disclosed in the accounting policies if your accountant advises it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Quarterly interest allocation journals are posted for four quarters using a documented average-balance method."
                cadence: rolling
              tasks:
                - "Find which grant agreements entitle the fund to its interest"
                - "Agree an allocation method with the finance lead"
                - "Post the interest allocation journal with workings @recurring(quarterly)"
            - name: Trading subsidiary profit transfer to the parent
              description: |-
                ## Purpose
                Many charities run shops, events or consultancy through a trading company to keep non-charitable trading separate, then pass the taxable profit back to the parent. The timing of that payment, the intercompany balances and the cost recharges between the two need a yearly routine agreed with the tax adviser, or the subsidiary can end up with an unexpected tax bill.

                ## Milestones
                1. The arrangement between parent and subsidiary documented, including cost recharges and any loan.
                2. Intercompany balances reconciled at each quarter-end.
                3. The profit transfer amount and timing agreed with the tax adviser before the deadline.
                4. Board minutes of both entities recording the transfer.

                ## Notes
                The tax rules for payments from a trading subsidiary to a charity differ by country. This project organises the work; the tax treatment is for your adviser.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The subsidiary's profit transfer is agreed with the tax adviser, paid within the time allowed and minuted by both boards, with intercompany balances reconciled."
                cadence: cyclic
              tasks:
                - "Write down the cost recharge and loan arrangements between the entities"
                - "Reconcile the intercompany balance between parent and subsidiary @recurring(quarterly)"
                - "Agree the profit transfer amount and timing with the tax adviser @recurring(yearly)"
                - "Minute the transfer in both boards' meetings"
            - name: Programme-related and social investments
              description: |-
                ## Purpose
                Some nonprofits make loans or equity investments that further their mission, such as a low-interest loan to a community business, rather than to earn the best return. These programme-related or social investments need a policy, a separate register, a way to judge both mission and financial results, and the right accounting and disclosure.

                ## Milestones
                1. Trustees' powers to make social investments confirmed with legal advice.
                2. A policy stating mission objectives, acceptable financial risk and approval limits.
                3. A register of each investment with terms, repayments, impairment review and mission outcome.
                4. The accounting and disclosure agreed with the accountant.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trustee-approved social investment policy exists alongside a register showing terms, repayments and mission outcome for each investment."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Confirm with legal advice that the trustees can make social investments"
                - "Draft a policy covering mission aims, risk and approval limits"
                - "Set up a register for each investment's terms and outcomes"
                - "Review each investment's repayments and impairment at year-end"
---

# Nonprofit Fund Accounting

This area is for the finance manager, bookkeeper or volunteer treasurer of a charity or nonprofit, and the small finance team behind them, who have to show that every restricted gift and grant was spent as promised. It runs from foundations (a fund register, restriction documents, fund coding, opening balances and the policies behind them), through the monthly and quarterly routines, the skills of reading frameworks and grant terms, decisions on reserves, overheads and systems, the dated moments of year-end, filing and grant close-out, situations such as a new treasurer, a first big grant or a merger, and finally specialist work on endowments, trading subsidiaries and social investment.

What repeats is steady rather than heavy: a weekly donation batch, a monthly fund close with roll-forward, grant budget checks, payroll allocations, free reserves and gifts in kind updates and a funder deadline check, then quarterly transfers, donor tax relief claims, interest allocations and trustee reports, and a yearly round of filings, receipts and policy reviews. The Month-end close, Board meeting, Risk register, Purchase decision, Operational checklist and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
