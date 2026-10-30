---
id: finance-accounting.delegation-of-financial-authority
name: Delegation of Financial Authority
description: "An authority matrix that says who can approve spend, sign contracts and commit the business at each level, kept current through board re-approval, people changes and regular compliance checks."
category: business
version: 1.0.0
tags: [finance-accounting, delegation-of-financial-authority, manager, enterprise, founder, approval-limits, signing-authority, governance]
author: Aurum Technology
starter_structure:
  templates:
    - remediation-plan
    - compliance-control
    - board-meeting
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Delegation of Financial Authority
          description: "Defining who can approve spend, sign contracts and commit the business at each level, and keeping the authority matrix current as the company grows."
          projects:
            - name: Map of who approves what today
              description: |-
                ## Purpose
                Before writing any limits, find out how decisions are actually made: who signs contracts, who releases payments, who agrees discounts, and who is doing all three without anyone having said they could. Most growing companies find that real practice and the founder's assumptions differ in a handful of places, and those gaps are where the first matrix has to start.

                ## Milestones
                1. A list of the twelve to fifteen commitment types the business makes, from supplier orders to job offers.
                2. For each type, the people who currently approve or sign it, named from recent examples rather than memory.
                3. Any written limits that already exist, in board minutes, bank mandates or old policies, gathered in one folder.
                4. A short list of gaps and conflicts between actual practice and any written rule.

                ## Notes
                Pull real examples from the last six months of contracts, purchase orders and payment approvals. Interviews alone make things sound tidier than they are.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written inventory of current approvers for every commitment type, each backed by at least three recent examples, with gaps listed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every type of commitment the business made in the last six months"
                - "Pull three real examples per type from contracts, orders and payment records"
                - "Gather any existing limits from board minutes, bank mandates and old policies"
                - "Write up where actual practice differs from the written rules"
            - name: Board reserved matters list
              description: |-
                ## Purpose
                Some decisions should never leave the boardroom: borrowing above a set amount, issuing shares, buying or selling a business, approving the budget, changing auditors. A written reserved matters list draws that line, so everything else can be delegated with confidence and nobody below the board signs something only the board may decide.

                ## Milestones
                1. A draft list of reserved matters covering finance, capital, people, legal and strategy.
                2. The list checked against the articles, the shareholders' agreement and any lender consent requirements.
                3. The list approved by the board and recorded in the minutes.
                4. The reserved matters set as the top row of the authority matrix.

                ## Notes
                Your company secretary or lawyer should confirm which matters the constitution or law already reserves. Keep the list short: a board that reserves forty items ends up approving supplier renewals.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A reserved matters list approved by the board, minuted, and cross-checked against the constitution and any investor or lender consent rights."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a list of decisions that only the board should take"
                - "Check the draft against the articles and shareholders' agreement"
                - "Ask the company secretary or lawyer which matters the law already reserves"
                - "Table the reserved matters list for board approval"
            - name: Board resolution delegating authority to the chief executive
              description: |-
                ## Purpose
                Every delegation below the board traces back to one source: a resolution giving the chief executive authority to run the business within limits, with the right to sub-delegate. Without it the whole matrix rests on habit, and an auditor, bank or counterparty asking where a manager's authority comes from gets no clean answer.

                ## Milestones
                1. A draft resolution naming the delegate, the scope, the limits and the power to sub-delegate.
                2. Conditions written in: reporting back to the board, keeping to policy and respecting the reserved matters.
                3. The resolution passed and minuted, with a certified extract filed.
                4. The resolution referenced at the top of the authority matrix.

                ## Notes
                Ask your company secretary or lawyer to review the wording. Directors remain responsible for what they delegate, so the resolution should require regular reporting.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A minuted board resolution delegating authority to the chief executive, with limits and sub-delegation rights, filed as a certified extract."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find any existing board minutes that delegate authority to management"
                - "Draft a resolution covering scope, limits and the power to sub-delegate"
                - "Have the company secretary or lawyer review the wording"
                - "File a certified extract of the passed resolution with the matrix"
            - name: Authority matrix structure and commitment categories
              description: |-
                ## Purpose
                Picture a usable authority matrix as a grid, with commitment types down the side and role levels across the top, each cell holding a limit or the words no authority. Getting the rows and columns right first, before arguing about numbers, saves rewriting the whole thing when the first unusual contract arrives.

                ## Milestones
                1. Ten to twenty commitment categories agreed, such as operating spend, capital spend, contracts, hiring, pricing, write-offs and banking.
                2. Five or six role levels defined by job title, not by the name of whoever holds the job.
                3. A column for any required co-approver or specialist review, such as legal or tax.
                4. A blank matrix layout signed off by the chief executive and the finance lead.

                ## Notes
                Use roles, never names, in the columns. Names change every quarter; roles change far less often.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A blank authority matrix with agreed categories, role levels and a co-approver column, signed off by the chief executive and finance lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Turn the commitment inventory into ten to twenty matrix categories"
                - "Define five or six role levels by job title"
                - "Add a column for required legal, tax or finance review"
                - "Agree the blank matrix layout with the chief executive and finance lead"
            - name: Definitions for commitment value and contract term
              description: |-
                ## Purpose
                Disputes about authority usually turn on one word. Is a three-year software contract at 20,000 a year a 20,000 or a 60,000 commitment, and does the limit include tax? A short definitions page settles these once, so approvers apply limits the same way and nobody gets round them by quoting the annual figure.

                ## Milestones
                1. A rule that limits apply to total contract value over the full term, including automatic renewals.
                2. A rule on whether limits are measured including or excluding sales tax.
                3. Plain definitions of commitment, aggregation, budgeted spend and unbudgeted spend.
                4. The definitions page attached to the front of the matrix.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page definitions sheet covering total contract value, tax treatment, aggregation and budgeted spend, attached to the authority matrix."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a total contract value rule covering multi-year and auto-renewing deals"
                - "Decide whether limits are measured including or excluding sales tax"
                - "Define commitment, aggregation, budgeted and unbudgeted spend in plain words"
                - "Attach the definitions page to the front of the matrix"
            - name: Approval limits set for each role level
              description: |-
                ## Purpose
                Limits set too low push every purchase order to the chief executive; limits set too high let a junior manager sign a lease. Calibrating from your own data, how many approvals fell into each value band last year, gives numbers that spread the load sensibly and keep the big commitments with the people accountable for them.

                ## Milestones
                1. Last year's commitments grouped into value bands, with a count in each band.
                2. Proposed limits per role and category, showing the share of approvals each level would handle.
                3. Limits reviewed with the finance lead and at least two budget holders.
                4. Every cell of the matrix filled and approved by the chief executive.

                ## Notes
                A common pattern is that most approvals by count sit at manager level while most of the value reaches a director. Check your own split rather than copying another company's numbers.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every cell of the matrix holds a limit, calibrated against last year's approval volumes and approved by the chief executive."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export last year's purchase orders, contracts and payments with their values"
                - "Count how many commitments fell into each value band"
                - "Propose limits per role and show the approval share each level would carry"
                - "Review the proposed limits with the finance lead and two budget holders"
            - name: Contract signing authority and authorised signatory list
              description: |-
                ## Purpose
                Approving a commitment and signing the document are separate acts, and counterparties rely on the signature. A list of who may sign which kinds of contract, up to what value, and when a second signature is needed stops the sales lead signing a supplier agreement with unlimited liability because the other side asked nicely.

                ## Milestones
                1. Contract types listed: customer, supplier, employment, property, finance, confidentiality and partnership.
                2. An authorised signatory role named for each contract type and value band.
                3. A rule for when two signatures or legal review are required.
                4. The signatory list published where staff and the legal team can check it.

                ## Notes
                Confidentiality agreements on the standard template can usually be signed lower down; anything with guarantees, exclusivity or uncapped liability usually cannot.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published signatory list naming the authorised role for every contract type and value band, with the second signature rule stated."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the contract types the business signs in a typical year"
                - "Name the authorised signatory role for each type and value band"
                - "Set the rule for when a second signature or legal review is needed"
                - "Publish the signatory list where staff can check it before signing"
            - name: Budgeted versus unbudgeted spend rule
              description: |-
                ## Purpose
                Approval of the annual budget is not the same as approval to spend, and unbudgeted spend is where control slips first. Deciding whether a budget holder's limit is higher for items already in the approved budget, and lower or nil for anything new, links the matrix to the budget instead of running alongside it.

                ## Milestones
                1. A decision on whether budgeted items carry a higher approval limit than unbudgeted ones.
                2. A rule for what counts as in budget: the line item, the cost centre total or the annual total.
                3. An escalation route for unbudgeted spend above a set amount.
                4. The rule written into the matrix definitions and explained to budget holders.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule for budgeted and unbudgeted spend, with its escalation route, included in the matrix and shared with budget holders."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide whether budgeted spend carries a higher limit than unbudgeted spend"
                - "Define in budget at line, cost centre or annual total level"
                - "Set the escalation route for unbudgeted spend above a threshold"
                - "Explain the rule to budget holders at their next finance meeting"
            - name: One-page authority summary for staff
              description: |-
                ## Purpose
                The full matrix may run to several pages, but most staff need to know three things: what they can approve, who to ask above that, and what they can never sign. A one-page summary on the intranet or in the staff handbook answers those questions in the moment, rather than after the contract is signed.

                ## Milestones
                1. A one-page summary showing the main limits for each role level.
                2. A short list of documents nobody below director level may sign.
                3. A named contact in finance for authority questions.
                4. The summary published and linked from the purchasing, expense and contract pages.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page authority summary is published on the intranet and linked from the purchasing, expense and contract pages."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a one-page summary from the full matrix"
                - "Add a short list of documents only directors may sign"
                - "Name the finance contact for authority questions"
                - "Link the summary from the purchasing, expense and contract pages"
            - name: Register of delegations and sub-delegations
              description: |-
                ## Purpose
                When the chief executive sub-delegates to a director, and the director to a manager, each step needs a record: who delegated, to whom, what limits, from when and until when. A register makes the chain auditable and catches the delegation that was meant to last a month and is still in use two years later.

                ## Milestones
                1. A register with delegator, delegate, scope, limits, start date and end date.
                2. Every current sub-delegation entered with its written evidence attached.
                3. A rule that no delegate may sub-delegate further without permission.
                4. No expired time-limited delegation still in use at the latest monthly check.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every active delegation appears in the register with its evidence and dates, and no expired delegation remains in use."
                cadence: rolling
              tasks:
                - "Set up the register with delegator, delegate, scope, limits and dates"
                - "Enter every current sub-delegation with its written evidence"
                - "Check the register for time-limited delegations that have expired @recurring(monthly:9)"
                - "Write the rule on further sub-delegation into the matrix"
            - name: People changes reflected in the authority matrix
              description: |-
                ## Purpose
                Authority follows the role, so every starter, promotion, transfer and leaver can change who may approve or sign. Agreeing with HR that each people change triggers a matrix check means a leaver's signing authority stops on their last day, not when someone notices it at the audit.

                ## Milestones
                1. An agreement with HR that every change in a role holding authority is sent to finance.
                2. A checklist covering the matrix, the signatory list, bank mandates and approval workflows.
                3. A monthly reconciliation of HR changes to the matrix.
                4. No leaver found holding live authority at the latest reconciliation.

                ## Notes
                This covers authority records. Removing system user access is usually handled under internal controls, so agree who owns which list.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's HR starters, movers and leavers are reconciled to the matrix and signatory lists, with no leaver holding authority after their last day."
                cadence: rolling
              tasks:
                - "Agree with HR which role changes they will send to finance"
                - "Write a checklist for updating the matrix, signatories and workflows"
                - "Reconcile the month's starters, movers and leavers to the matrix @recurring(monthly:3)"
                - "Remove a leaver's authority on their last working day"
            - name: Absence cover and temporary delegation
              description: |-
                ## Purpose
                Holidays, illness and parental leave leave gaps in the approval chain, and a stalled payment or contract is exactly when people start sharing logins or approving outside their limit. Planned cover, with a named stand-in, start and end dates and the same or lower limits, keeps decisions moving without anyone borrowing authority they do not have.

                ## Milestones
                1. A rule that temporary authority goes to an equal or higher role, or to a lower role with a reduced limit.
                2. A short form recording the stand-in, the dates and the limits.
                3. Workflow tools updated for each cover period and reset afterwards.
                4. Every approver absence of more than a week covered in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every approver absence longer than five working days in the last quarter has a written temporary delegation with dates and limits."
                cadence: rolling
              tasks:
                - "Write the rule for who may cover an absent approver"
                - "Create a short temporary delegation form with dates and limits"
                - "Ask approvers to log next month's absences and their cover @recurring(monthly:24)"
                - "Reset workflow routing when each cover period ends"
            - name: Authority breach and retrospective approval log
              description: |-
                ## Purpose
                Breaches happen: an order placed before approval, a contract signed one level too low, a discount agreed on a sales call. Logging each one, having it ratified by someone with the right authority and looking for patterns every month turns occasional mistakes into fixes, instead of a culture where retrospective approval becomes the normal route.

                ## Milestones
                1. A log recording the date, the commitment, who acted, the limit breached and who ratified it.
                2. A rule that ratification comes only from someone at or above the required level.
                3. A monthly review of new breaches and repeat names.
                4. Every repeat pattern traced to a cause, with a fix agreed.

                ## Notes
                Start from the **Remediation plan** template when the same breach keeps coming back. Treat retrospective approval as a reported exception, not a routine fix.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A breach log reviewed monthly, with every breach ratified by an authorised person and each repeat pattern linked to an agreed fix."
                cadence: rolling
              tasks:
                - "Set up the breach log with the limit breached and who ratified it"
                - "Write the rule for who may ratify a commitment made without authority"
                - "Review the month's breaches and repeat names with the finance lead @recurring(monthly:12)"
                - "Report the quarter's breach count to the leadership team"
            - name: Quarterly approval compliance sample
              description: |-
                ## Purpose
                Untested matrices drift quietly. Picking a sample of contracts, purchase orders and payments each quarter and checking that each was approved by someone within their limit, before the commitment, with evidence kept, shows whether the matrix is working and gives the board a number rather than a reassurance.

                ## Milestones
                1. A sampling method covering contracts, purchase orders, hires and discounts.
                2. A four-point check: right approver, within limit, approved before commitment, evidence kept.
                3. A quarterly result with a pass rate and every exception explained.
                4. Four quarterly results trended over a year.

                ## Notes
                Start from the **Compliance control** template. Take samples from the highest value bands as well as at random; serious breaches tend to sit just above a limit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly samples of at least 25 commitments each, with pass rates and exceptions reported to the finance lead."
                cadence: rolling
              tasks:
                - "Write the four-point check for each sampled approval"
                - "Pull 25 commitments, including the largest, and test each one @recurring(quarterly)"
                - "Record the pass rate and explain each exception"
                - "Chart the pass rate across the last four quarters"
            - name: Matrix change requests and quarterly review
              description: |-
                ## Purpose
                Businesses add products, open sites and change suppliers, and the matrix should keep up without a full rewrite each time. A simple change request route with a quarterly batch review keeps updates deliberate, approved by the right person and recorded, rather than edits made in a spreadsheet nobody controls.

                ## Milestones
                1. A change request form stating the change, the reason and who asked for it.
                2. A rule for who approves changes: the chief executive for most, the board for anything touching reserved matters.
                3. Pending requests reviewed and decided every quarter.
                4. Each approved change published with a new version number.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every matrix change in the last year has a request, an approver and a version number, with pending requests cleared each quarter."
                cadence: rolling
              tasks:
                - "Create a change request form for the authority matrix"
                - "Set who may approve which kinds of matrix change"
                - "Review and decide pending matrix change requests @recurring(quarterly)"
                - "Publish approved changes with a new version number and date"
            - name: Annual board re-approval of the delegation framework
              description: |-
                ## Purpose
                Boards should see and re-approve the whole framework once a year, not only hear about it when something goes wrong. A short annual paper covering the reserved matters, the limits, the changes made during the year and the compliance results lets directors confirm the delegation still fits the business they are responsible for.

                ## Milestones
                1. A board paper summarising the reserved matters, the limits and the year's changes.
                2. The year's breach count and compliance sample results included.
                3. Proposed changes for the coming year set out with reasons.
                4. The framework re-approved and the decision minuted.

                ## Notes
                Start from the **Board meeting** template. Many boards take this alongside budget approval, since limits often move with the budget.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "The board re-approves the delegation framework each year, with a minuted decision and a paper covering changes and compliance results."
                cadence: cyclic
              tasks:
                - "Book the delegation framework onto the board agenda for re-approval @recurring(yearly)"
                - "Draft the board paper with the year's changes and compliance results"
                - "Set out proposed limit changes with a reason for each"
                - "File the minuted approval with the current matrix"
            - name: Annual delegate acknowledgement of limits
              description: |-
                ## Purpose
                Delegates who have never read their limits cannot be expected to keep to them. Asking every person with authority to confirm once a year that they have read the current matrix, understand their limits and know what they may not sign creates a record, and it catches the people who were simply never told.

                ## Milestones
                1. A short acknowledgement statement covering limits, sub-delegation and reporting breaches.
                2. The statement sent to every delegate on the register.
                3. All acknowledgements returned within a month, with stragglers chased.
                4. Signed returns filed with the register of delegations.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every delegate on the register has signed an acknowledgement of the current matrix within the last twelve months."
                cadence: cyclic
              tasks:
                - "Write a five-line acknowledgement statement for delegates"
                - "Send the acknowledgement to every delegate on the register @recurring(yearly)"
                - "Chase anyone who has not returned it after two weeks"
                - "File the signed acknowledgements with the register"
            - name: Signatory list matched to bank mandates and e-signature accounts
              description: |-
                ## Purpose
                The matrix, the bank mandate and the e-signature platform each hold a list of who can commit the business, and they drift apart within months. Checking the three against each other on a fixed schedule closes the gap where a former director can still approve payments at the bank, or a leaver's account can still send contracts out for signature.

                ## Milestones
                1. Current mandates and payment approver lists obtained from every bank.
                2. E-signature platform users with sending or signing rights listed.
                3. Differences from the authority matrix corrected, with bank change forms submitted.
                4. Quarterly bank checks and monthly e-signature checks completed with no open differences.

                ## Notes
                Bank mandate changes often need a board resolution and can take weeks, so start them as soon as a difference appears.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bank mandates and e-signature signer lists match the authority matrix at every scheduled check, with any difference closed within 30 days."
                cadence: rolling
              tasks:
                - "Request the current mandate and approver list from every bank"
                - "Compare bank mandates with the authority matrix @recurring(quarterly)"
                - "Compare e-signature platform signers with the signatory list @recurring(monthly:18)"
                - "Submit bank change forms for any difference found"
            - name: Version control for the authority matrix
              description: |-
                ## Purpose
                Several copies of the matrix in inboxes and shared drives guarantee that somebody is working from an old one. One controlled master with a version number, an owner, a change log and read-only copies for everyone else means the question of which limits applied on a given date always has an answer.

                ## Milestones
                1. One master file with a named owner and restricted edit rights.
                2. A change log recording each version, its date, the change and the approver.
                3. Stray copies removed from shared drives and replaced with a link.
                4. Past versions archived so the limits in force on any date can be shown.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One master matrix with a change log and archived past versions, and no other editable copies left on shared drives."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the master location and restrict edit rights to the owner"
                - "Start a change log with version, date, change and approver"
                - "Replace stray copies on shared drives with a link to the master"
                - "Archive each superseded version with its effective dates"
            - name: Aggregation rules and split purchases
              description: |-
                ## Purpose
                The easiest way round an approval limit is to split one purchase into three orders just under it. Learning to define and spot splitting, by supplier, project and time window, lets approvers and finance treat related commitments as one, and gives a clear rule to point to when someone tries it.

                ## Milestones
                1. An aggregation rule covering related orders to one supplier or project within a set period.
                2. Three worked examples showing what counts as a single commitment.
                3. A first run of a report showing orders clustered just below each limit.
                4. The rule and examples added to the definitions page.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written aggregation rule with three worked examples, and one completed report of orders clustered just below each limit."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write an aggregation rule for related orders to one supplier or project"
                - "Draft three worked examples of orders that count as one commitment"
                - "Run a report of orders falling within 10 percent below each limit"
                - "Add the rule and examples to the definitions page"
            - name: Reading investor consent rights in the shareholders' agreement
              description: |-
                ## Purpose
                Investors often hold veto rights over budgets, borrowing, senior hires, new share options or asset sales, and these sit above anything the board can delegate. Founders who learn to read their consent clauses and map each one to the matrix avoid signing something that needed investor approval first.

                ## Milestones
                1. Every consent right in the shareholders' agreement and investment documents listed.
                2. Each right mapped to the matrix row it affects, with its threshold noted.
                3. A written process for requesting investor consent, with typical response times.
                4. Your lawyer's confirmation that the mapping is complete.

                ## Notes
                These clauses are legal terms. Ask your lawyer to confirm how they apply rather than relying on your own reading.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A consent rights map linking every investor veto to a matrix row, confirmed as complete by the company's lawyer."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every investor consent right in the shareholders' agreement"
                - "Map each consent right to the matrix row it overrides"
                - "Write down how investor consent is requested and how long it takes"
                - "Ask your lawyer to confirm the mapping is complete"
            - name: Authority for guarantees, indemnities and liability terms
              description: |-
                ## Purpose
                Price is rarely a contract's biggest risk: a parent company guarantee, an uncapped indemnity or an exclusivity clause can commit far more than the headline value. Learning which terms lift a contract to a higher authority level, whatever its price, protects the business from commitments that never looked large.

                ## Milestones
                1. A list of contract terms that escalate approval regardless of value, agreed with legal.
                2. A short guide for managers explaining each term in plain words.
                3. The escalation terms added as a column in the matrix.
                4. One past contract reviewed against the list as a worked example.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An agreed list of escalation terms with a plain-words guide, added to the matrix and tested against one real contract."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree with legal the contract terms that escalate approval regardless of value"
                - "Write a plain-words note explaining each escalation term"
                - "Add the escalation terms as a column in the matrix"
                - "Review one recent contract against the list as an example"
            - name: Powers of attorney for signing on the company's behalf
              description: |-
                ## Purpose
                Some documents, such as property deeds, overseas filings or papers signed while every director is abroad, need a formal power of attorney rather than an internal delegation. Knowing when one is needed, how it is granted and how it is tracked avoids a completion delayed by a week, or a power that outlives its purpose by years.

                ## Milestones
                1. A note from your lawyer on which documents need a power of attorney in your jurisdictions.
                2. A register of granted powers with holder, scope and expiry date.
                3. A rule that every power is time-limited and revoked when its purpose ends.
                4. Expiry dates reviewed once a year.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A register of every power of attorney granted, each with scope and expiry, reviewed within the last twelve months."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your lawyer which documents need a power of attorney"
                - "Start a register of powers with holder, scope and expiry"
                - "Set a rule that each power is limited to its purpose and period"
                - "Review power of attorney expiry dates and revoke unused ones @recurring(yearly)"
            - name: Directors' duties when delegating authority
              description: |-
                ## Purpose
                Delegating authority does not delegate responsibility: directors stay accountable for choosing capable delegates, setting limits and checking how the authority is used. A short study of what that duty means in practice, with your company secretary or lawyer, shapes how much reporting the board should ask for.

                ## Milestones
                1. A briefing note on directors' oversight duties when delegating, reviewed by a lawyer.
                2. A list of the reports the board will receive on delegated authority.
                3. The note discussed at a board meeting.
                4. Reporting requirements written into the delegation resolution.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lawyer-reviewed briefing note on directors' duties when delegating, discussed at a board meeting, with reporting requirements added to the resolution."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the company secretary for guidance on directors' duties when delegating"
                - "Ask the agent to summarise the guidance into a two-page briefing note"
                - "List the reports the board needs on how delegated authority is used"
                - "Discuss the briefing note at the next board meeting"
            - name: Authority briefing for new budget holders
              description: |-
                ## Purpose
                People promoted into budget-holding roles are often handed a limit and no explanation. A 45-minute briefing each quarter for anyone newly given authority, covering their limits, splitting, budgeted spend, signing and breach reporting, prevents most accidental breaches in a manager's first year.

                ## Milestones
                1. A briefing and a two-page handout built from the current matrix.
                2. A quarterly session in the calendar for anyone newly given authority.
                3. Attendance recorded against the register of delegations.
                4. Fewer breaches by first-year managers than in the year before the briefing started.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A quarterly authority briefing is held, and every delegate added in the year has an attendance record."
                cadence: rolling
              tasks:
                - "Build a 45-minute briefing and handout from the current matrix"
                - "Invite every newly appointed delegate to the next session"
                - "Run the authority briefing for new budget holders @recurring(quarterly)"
                - "Record attendance against the register of delegations"
            - name: Limits for multi-year and foreign currency commitments
              description: |-
                ## Purpose
                Limits stated in your home currency raise practical questions when a supplier invoices in another currency, or when a lease runs for ten years with annual indexation. Working through the rules, which exchange rate, which term, how to count escalation clauses and options to extend, makes the limits work for the contracts that are hardest to measure.

                ## Milestones
                1. A rule for which exchange rate converts a foreign currency commitment.
                2. A rule for indexation, price escalation and optional extension periods.
                3. Worked examples for a property lease, a software contract and an overseas supplier order.
                4. The rules added to the definitions page.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written rules for exchange rates, indexation and extension options, with three worked examples, added to the matrix definitions."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose the exchange rate source for converting foreign currency commitments"
                - "Decide how indexation and optional extensions count toward total value"
                - "Work through a lease, a software deal and an overseas order as examples"
                - "Add the rules to the matrix definitions page"
            - name: Discount, pricing and credit note authority
              description: |-
                ## Purpose
                Revenue leaks through authority too: a salesperson who can offer 30 percent off, or a support agent who can issue unlimited credit notes, gives away margin with no approval at all. Setting limits on discounts, non-standard terms and credits by role brings the selling side into the same matrix as spending.

                ## Milestones
                1. Discount limits by role, as both a percentage and an absolute value.
                2. Limits on non-standard payment terms, free periods and credit notes.
                3. The limits configured in the quoting or billing system where it allows.
                4. A monthly report of discounts and credits above standard reviewed by the commercial lead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Discount, credit note and payment term limits by role are in the matrix, and a monthly report of exceptions is reviewed by the commercial lead."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set discount limits by role as both a percentage and a value"
                - "Set limits for credit notes, free periods and non-standard terms"
                - "Configure the limits in the quoting or billing system"
                - "Review discounts and credits above standard with the commercial lead @recurring(monthly:20)"
            - name: Hiring, pay and severance authority
              description: |-
                ## Purpose
                People decisions are some of the largest commitments a business makes, since a senior hire is a multi-year cost well beyond its first salary. Writing down who may approve a new role, an offer above the salary band, a bonus or a severance settlement keeps those decisions tied to the headcount plan instead of one-off negotiations.

                ## Milestones
                1. Authority for new roles, replacement roles and offers above band defined.
                2. Authority for bonuses, off-cycle pay rises and severance settlements defined.
                3. Joint HR and finance approval required where the matrix says so.
                4. The people rows added to the matrix and explained to hiring managers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The matrix holds approved limits for new roles, above-band offers, bonuses and severance, and every hiring manager has been briefed on them."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Define who approves new roles and offers above the salary band"
                - "Define who approves off-cycle pay rises, bonuses and severance"
                - "Agree where HR and finance must both approve"
                - "Brief hiring managers on the new people authority rows"
            - name: Write-off, refund and claims settlement authority
              description: |-
                ## Purpose
                Writing off a bad debt, refunding a customer or settling an insurance or legal claim gives money away, and each needs a limit as clear as any purchase. Setting authority for these by value, with legal or finance review above a threshold, stops settlements being agreed on a phone call just to make a problem go away.

                ## Milestones
                1. Write-off limits by role and value.
                2. Refund limits for customer service staff and account managers.
                3. Claims and dispute settlement authority, with legal review required above a threshold.
                4. The rows added to the matrix and the customer service team briefed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Write-off, refund and settlement limits are in the matrix, with legal review thresholds set and customer service staff briefed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set write-off limits for bad debts by role"
                - "Set refund limits for customer service and account managers"
                - "Set settlement authority for claims, with legal review above a threshold"
                - "Brief the customer service team on their refund limits"
            - name: Treasury and borrowing authority
              description: |-
                ## Purpose
                Opening a bank account, taking a loan, signing a guarantee, placing surplus cash or entering a currency contract can commit the business for years, and banks act on whoever the mandate names. Setting these authorities apart from everyday spend, mostly at board or finance director level, keeps the balance sheet in the right hands.

                ## Milestones
                1. Authority to open and close bank accounts defined, usually at board level.
                2. Limits for borrowing, guarantees and lease finance aligned with the reserved matters.
                3. Limits for currency deals and cash placements, with dual approval.
                4. Open accounts and facilities checked against their approvals each year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Treasury rows covering accounts, borrowing, guarantees, currency deals and placements are approved, and every open account traces to a recorded approval."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Define who may open or close a bank account"
                - "Align borrowing and guarantee limits with the reserved matters"
                - "Set dual approval for currency deals and cash placements"
                - "Check the list of open accounts and facilities against approvals @recurring(yearly)"
            - name: Emergency spend and policy exception authority
              description: |-
                ## Purpose
                Floods, cyber incidents and failed critical suppliers can need money committed within hours, outside normal limits. Defining in advance who can authorise emergency spend, up to how much, and how it is reported afterwards stops a crisis turning into either a free-for-all or a stall while people search for the chief executive.

                ## Milestones
                1. A definition of what counts as an emergency for spending purposes.
                2. Named roles with emergency spend authority and a cap for each.
                3. A requirement to report emergency spend to the chief executive and board within a set number of days.
                4. A route for approving one-off exceptions to other finance policies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Emergency spend roles, caps and a reporting deadline are in the matrix, and every emergency use in the last year was reported on time."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Define what counts as an emergency for spending purposes"
                - "Name the roles with emergency spend authority and set a cap"
                - "Set the reporting deadline for emergency spend after the event"
                - "Review any emergency spend or policy exceptions used @recurring(quarterly)"
            - name: Budget reallocation authority between cost centres
              description: |-
                ## Purpose
                Moving budget from one line or team to another, sometimes called virement, can change what the budget means as much as overspending it. Rules on who may move how much, within or across cost centres, keep the approved budget meaningful while still letting managers respond to what actually happens in the year.

                ## Milestones
                1. A limit on moving budget between lines within one cost centre.
                2. A limit on moving budget between cost centres or departments.
                3. A rule that capital and operating budgets cannot be swapped without higher approval.
                4. A reallocation log kept by finance.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written reallocation limits within and across cost centres are in the matrix, and every reallocation this year appears in the finance log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set the limit for moving budget between lines in one cost centre"
                - "Set the limit for moving budget across departments"
                - "Block swaps between capital and operating budgets without director approval"
                - "Start a reallocation log with amount, lines and approver"
            - name: Approval routing in systems matched to the matrix
              description: |-
                ## Purpose
                If the purchasing, payables, contract or e-signature systems route approvals differently from the matrix, the system wins every time. Rebuilding the routing tables from the matrix, and testing them with real scenarios either side of each limit, turns the paper limits into the ones people actually meet.

                ## Milestones
                1. Every system with approval routing listed, with its current rules exported.
                2. Differences between system routing and the matrix listed.
                3. Routing rebuilt from the matrix and tested with scenarios just above and below each limit.
                4. A rule that each matrix change triggers a routing update within ten working days.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every approval system routes according to the current matrix, proven by a documented test of scenarios either side of each limit."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List each system that routes approvals and export its rules"
                - "Compare system routing rules with the current matrix"
                - "Test scenarios just above and below each limit in every system"
                - "Agree how quickly routing is updated after a matrix change"
            - name: Removing approval steps that add no control
              description: |-
                ## Purpose
                Approval chains grow by accretion: a director added after one incident, a second sign-off kept long after its reason was forgotten. Reviewing each layer and asking what it would catch that the others would not cuts cycle time and approval fatigue, and fatigue is itself a risk because tired approvers click through.

                ## Milestones
                1. The approval chain for the five most common commitment types mapped step by step.
                2. Each step tested against what it catches that no other step does.
                3. Steps with no unique purpose removed or replaced by after-the-event review.
                4. Approval cycle time measured before and after the change.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on every approval step for the five most common commitment types, with cycle time measured before and after."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Map every approval step for the five most common commitment types"
                - "Ask what each step catches that no other step would"
                - "Propose steps to remove or replace with after-the-event review"
                - "Measure approval cycle time before and after the change"
            - name: Related-party and conflict of interest approvals
              description: |-
                ## Purpose
                Commitments with a director's family company, a manager's former employer or a shareholder's other business need approval from someone with no interest in them, however small the value. A rule that conflicted people step out, with approval passing to an independent person and a record kept, protects both the business and the individual.

                ## Milestones
                1. A plain definition of related parties and conflicts for approval purposes.
                2. A rule that the conflicted person cannot approve, naming who approves instead.
                3. A register of related-party commitments and their approvers.
                4. Annual conflict declarations collected from every delegate.

                ## Notes
                Larger related-party transactions may also need board or shareholder approval and disclosure in the accounts; ask your accountant or lawyer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A related-party approval rule is in the matrix, a register of such commitments is kept, and every delegate has a current conflict declaration."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a plain-words definition of related parties and conflicts"
                - "Set who approves when the normal approver is conflicted"
                - "Start a register of related-party commitments and their approvers"
                - "Collect conflict of interest declarations from every delegate @recurring(yearly)"
            - name: Authority handover when the chief executive or finance director changes
              description: |-
                ## Purpose
                When a chief executive or finance director leaves, their authority sits at the top of every chain: bank mandates, signatory lists, powers of attorney and system routing. A planned handover in the first month, with the board resolution and bank forms ready, avoids a gap where nobody can sign a large payment, or where the departed person still can.

                ## Milestones
                1. Every place the outgoing person holds authority listed.
                2. A board resolution passed transferring authority to the successor or an interim holder.
                3. Bank mandates, signatory lists and powers of attorney updated.
                4. Workflow routing changed and tested on the successor's first day.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within 30 days of the change, the successor holds authority by board resolution and the outgoing person appears on no mandate, list or workflow."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every mandate, signatory list and workflow naming the outgoing person"
                - "Draft the board resolution transferring authority to the successor"
                - "Submit bank mandate changes as soon as the resolution passes"
                - "Test approval routing with the successor on their first day"
            - name: Authority remap after a reorganisation
              description: |-
                ## Purpose
                Reorganisations rename roles, merge teams and move budgets, and each of those changes breaks rows in the matrix. Remapping authority as part of the reorganisation plan, rather than months afterwards, stops approvals bouncing between old job titles and managers acting under limits for jobs that no longer exist.

                ## Milestones
                1. Every old role with authority mapped to its new role and current limits.
                2. New limits proposed and approved for roles whose scope has changed.
                3. The matrix, register, signatories and routing updated for the effective date.
                4. Affected managers briefed before the change takes effect.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On the reorganisation's effective date, every new role has approved limits and no approval routes to a role that no longer exists."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Map every old role with authority to its new role"
                - "Propose limits for roles whose scope has changed"
                - "Update the matrix, register and workflows for the effective date"
                - "Brief affected managers on their new limits before the change"
            - name: Authority changes when a funding round closes
              description: |-
                ## Purpose
                New investment rounds often bring new board members, investor consent rights, a new budget and lender covenants all at once. Updating the reserved matters and the matrix in the weeks after closing, rather than at the next annual review, keeps founders from breaching consent rights with their first post-round purchases.

                ## Milestones
                1. New consent rights, board composition and covenants from the closing documents listed.
                2. Reserved matters and matrix updated to reflect them.
                3. The updated framework approved at the first board meeting after closing.
                4. The leadership team briefed on what now needs investor or board consent.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The updated reserved matters and matrix are approved at the first post-closing board meeting and the leadership team has been briefed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List new consent rights and covenants from the closing documents"
                - "Update the reserved matters and matrix to match"
                - "Table the updated framework at the first board meeting after closing"
                - "Brief the leadership team on what now needs investor consent"
            - name: Day-one authority for an acquired company
              description: |-
                ## Purpose
                On the day a deal completes, the acquired company's managers still hold authority granted by a board that may no longer exist. Setting interim limits for day one, usually lower ones with group approval above, and moving to the group matrix over the first 90 days avoids both paralysis and a spending spree before integration.

                ## Milestones
                1. The acquired company's delegations, mandates and signatory lists gathered before completion.
                2. Interim day-one limits agreed and sent to managers on completion.
                3. Bank mandates and signatories changed to reflect the new directors.
                4. The group matrix adopted within 90 days, with local additions where law requires.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Interim limits are issued on completion day and the acquired company operates under the group matrix within 90 days."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect the target's delegations, mandates and signatory lists before completion"
                - "Agree interim day-one limits with the integration lead"
                - "Send the interim limits to the acquired company's managers on completion day"
                - "Plan the move to the group matrix within 90 days"
            - name: Delegation evidence pack for the auditors
              description: |-
                ## Purpose
                Auditors routinely ask for the authority framework, the board approval behind it and evidence that sampled transactions were approved within it. A pack ready before fieldwork, holding the approved matrix, resolutions, register and the year's compliance results, turns a week of requests into an afternoon.

                ## Milestones
                1. The approved matrix and change log for the year, with effective dates.
                2. Board resolutions and minutes approving the delegation framework.
                3. The register of delegations and the signed acknowledgements.
                4. The year's compliance sample results and breach log.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A delegation evidence pack is sent to the auditors before fieldwork starts, and no further authority requests are raised during the audit."
                cadence: cyclic
              tasks:
                - "Ask the auditors which delegation evidence they will request this year"
                - "Assemble the matrix versions, resolutions and register into one folder"
                - "Add the year's compliance samples and breach log"
                - "Send the pack to the auditors before fieldwork starts"
            - name: Authority tables for a new finance system go-live
              description: |-
                ## Purpose
                Go-live of a new ERP, procurement or contract system is the moment to load the matrix correctly, because routing built wrongly at launch tends to stay wrong for years. Treating the authority tables as a go-live deliverable, with test scripts and sign-off, makes the new system enforce the limits from its first transaction.

                ## Milestones
                1. The matrix translated into the new system's approval hierarchy and rules.
                2. Test scripts covering every limit and escalation term.
                3. Testing completed and signed off by the finance lead before go-live.
                4. The first month's live approvals checked against the matrix.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Signed-off test results show the new system routes every limit correctly, and the first month's live approvals match the matrix."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Translate each matrix row into the new system's approval rules"
                - "Write test scripts for every limit and escalation term"
                - "Get finance lead sign-off on the test results before go-live"
                - "Check the first month's live approvals against the matrix"
            - name: Founder's first written delegation
              description: |-
                ## Purpose
                At ten to thirty people, the founder approving every payment and contract becomes the bottleneck, but handing out authority with no limits is worse. A first written delegation, one page with three or four levels and the handful of things only the founder signs, frees the founder's week while keeping the large commitments in one pair of hands.

                ## Milestones
                1. A list of the approvals the founder makes in a typical fortnight, with rough values.
                2. A one-page delegation with three or four levels and clear limits.
                3. A short list of things only the founder or the board may sign.
                4. A one-month check on how the delegation worked and what to change.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page delegation is in use, and after a month the founder's approval count has fallen while no reserved item was signed by anyone else."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every approval you made as founder in the last two weeks"
                - "Draft a one-page delegation with three or four levels"
                - "Write the short list of things only you or the board will sign"
                - "Count after a month how many approvals still reach you"
            - name: Authority redesign for a scale-up of 50 to 200 staff
              description: |-
                ## Purpose
                Between 50 and 200 people the founder's one-page delegation stops working: new departments, a finance team, perhaps a second country and a board asking harder questions. Redesigning into a full matrix with categories, levels and co-approvers at this point avoids a version that grows by bolting on a new row after each incident.

                ## Milestones
                1. The one-page delegation reviewed against today's departments and spend.
                2. A full matrix drafted with categories, levels and co-approvers.
                3. Department heads consulted on the limits for their areas.
                4. The new matrix approved by the board and launched with a briefing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A full authority matrix replaces the one-page delegation, approved by the board and briefed to every manager."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compare the current delegation with today's departments and spend levels"
                - "Draft a full matrix with categories, levels and co-approvers"
                - "Review the draft limits with each department head"
                - "Launch the new matrix with a briefing for all managers"
            - name: Using a first approval limit as a new budget holder
              description: |-
                ## Purpose
                Newly promoted managers suddenly approve timesheets, orders and supplier contracts, often with no guidance beyond a number. Learning your own limits, what sits above them and how to decline a request that should go higher keeps you inside your authority, and builds the trust that leads to a larger limit later.

                ## Milestones
                1. Your own limits for each commitment type written down.
                2. The approver above you identified for each type.
                3. Three of your recent approvals checked against the matrix with your manager.
                4. A personal rule on which requests you always send upwards.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal note of your limits and the approver above each, with three past approvals checked against the matrix alongside your manager."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down your own limits for each commitment type"
                - "Note who approves above you for each type"
                - "Check three recent approvals against the matrix with your manager"
                - "Decide which requests you will always send upwards"
            - name: Authority for interim and acting roles
              description: |-
                ## Purpose
                Acting managers and interim executives cover vacancies for months, and nobody is quite sure whether they hold the role's full authority. Setting interim authority explicitly, often the full limit for operating spend and a lower one for long-term contracts, avoids both stalled decisions and an interim signing a five-year lease days before the permanent hire starts.

                ## Milestones
                1. A standard rule for interim and acting authority by commitment category.
                2. A written appointment stating each interim's limits and end date.
                3. Long-term and irreversible commitments reserved for the level above during interim periods.
                4. Authority ended and recorded when each interim period finishes.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every current interim or acting appointment has a written statement of limits and an end date in the register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the standard rule for interim and acting authority"
                - "Issue a written appointment with limits and end date for each interim"
                - "Reserve long-term commitments for the level above during interim periods"
                - "Record the end of each interim appointment in the register"
            - name: Group framework with subsidiary addenda
              description: |-
                ## Purpose
                Groups with subsidiaries in several countries need one framework, so that a regional head cannot sign what the group would never allow, and local addenda, because local law may require certain approvals by the local board. A group matrix with country addenda and a yearly attestation from each subsidiary keeps both consistent.

                ## Milestones
                1. A group matrix approved by the parent board.
                2. A local addendum for each subsidiary covering legal requirements and local board approvals.
                3. Resolutions by each local board adopting the group framework.
                4. Yearly attestations received from every subsidiary's managing director.

                ## Notes
                Local legal requirements vary. Ask local counsel which approvals must stay with the local board.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every subsidiary has adopted the group matrix by local board resolution, with an addendum and a signed attestation from the last twelve months."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Have the parent board approve the group authority matrix"
                - "Ask local counsel which approvals must sit with each local board"
                - "Draft a local addendum for each subsidiary"
                - "Collect authority attestations from each subsidiary managing director @recurring(yearly)"
            - name: Signing formalities by country for cross-border contracts
              description: |-
                ## Purpose
                Teams working across several countries sign documents under different rules on who can bind a company, whether electronic signatures are accepted and whether a company seal or notarisation is needed. Recording these by country, with local legal input, saves a contract being rejected or challenged because the wrong person signed it in the wrong form.

                ## Milestones
                1. The countries where the business signs contracts listed.
                2. For each, who can bind a company, e-signature acceptance and any seal or notarisation need, confirmed by local counsel.
                3. The signatory list updated with country-specific requirements.
                4. Staff in each country briefed on the formalities that apply to them.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A country table of signing formalities, confirmed by local counsel, is attached to the signatory list for every country where the business contracts."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the countries where the business signs contracts"
                - "Ask local counsel who can bind a company and whether e-signatures are valid"
                - "Add each country's formalities to the signatory list"
                - "Brief staff in each country on the formalities that apply"
            - name: Approval analytics to recalibrate limits
              description: |-
                ## Purpose
                After a year in operation, approval data shows where the matrix is wrong: levels that rubber-stamp everything, limits breached every week, approvals that wait nine days for one director. Analysing volumes, cycle times and rejection rates by level gives evidence for the next round of limit changes rather than opinions.

                ## Milestones
                1. A dataset of a year's approvals with value, level, time to approve and outcome.
                2. Rejection rates and cycle times by level and category.
                3. Limits that should rise or fall identified, each with a reason.
                4. Recommendations carried into the annual board paper.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A quarterly approval analytics report by level and category, with recommended limit changes carried into the annual board paper."
                cadence: rolling
              tasks:
                - "Export a year of approvals with value, level, time taken and outcome"
                - "Calculate rejection rates and cycle times by level"
                - "Produce the approval cycle time and rejection report @recurring(quarterly)"
                - "Ask the agent to draft limit change recommendations from the analysis"
            - name: Authority limits for automated and AI agent spending
              description: |-
                ## Purpose
                Automated payment runs, auto-renewing subscriptions, procurement bots and AI agents that can place orders all commit money without a person clicking approve each time. Giving each automation a named human owner, a hard limit per transaction and per month, and a log reviewed monthly brings machine spending under the same matrix as people.

                ## Milestones
                1. Every automation or agent able to commit spend listed with its owner.
                2. Per-transaction and monthly caps set for each, within the owner's own limit.
                3. Hard stops configured in the tools so caps cannot be exceeded.
                4. A monthly review of automated spend against caps.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every automation that can commit spend has a named owner and hard caps inside the owner's limit, with a monthly spend review recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every automation and agent that can commit spend"
                - "Name a human owner for each, with caps inside their own limit"
                - "Configure hard caps in each tool so limits cannot be exceeded"
                - "Review automated and agent spend against caps @recurring(monthly:27)"
            - name: Listing-ready delegation and committee charters
              description: |-
                ## Purpose
                Companies preparing for a stock exchange listing, or for a large institutional investor, face scrutiny of how authority flows from shareholders to the board, its committees and management. Formal committee terms of reference, a board-approved delegation policy and at least a year of evidence that it operates are usually expected well before the listing date.

                ## Milestones
                1. Terms of reference for the audit, remuneration and nomination committees, with the matters each decides.
                2. A formal delegation of authority policy approved by the board.
                3. A year of operating evidence: compliance samples, breach logs and board re-approval.
                4. Gaps against listing expectations reviewed with advisers and closed.

                ## Notes
                Listing rules differ by exchange and market. Your advisers will confirm what is required.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Committee terms of reference and a board-approved delegation policy are in place, backed by twelve months of operating evidence and an adviser gap review."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your advisers what the chosen exchange expects on delegation"
                - "Draft terms of reference for the audit, remuneration and nomination committees"
                - "Turn the matrix and definitions into a formal board policy"
                - "Close each gap against listing expectations with an owner and date"
---

# Delegation of Financial Authority

This area is for founders handing out authority for the first time, managers who have just been given an approval limit, and finance and governance teams running an authority framework across a group. It starts with the foundations (a map of current practice, the board's reserved matters, the delegating resolution, the matrix and its limits), then the routines that keep it current, the knowledge behind the harder rules, decisions about commercial, people and treasury authority, the events that redraw the lines, variants for each stage of company, and the specialist work of approval analytics, automated spending and listing readiness.

What repeats is a monthly reconciliation of people changes, breaches and e-signature accounts, a quarterly compliance sample, change review and bank mandate check, and a yearly board re-approval with delegate acknowledgements and conflict declarations. The Board meeting, Compliance control and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
