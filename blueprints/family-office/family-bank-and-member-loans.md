---
id: family-office.family-bank-and-member-loans
name: Family Bank and Member Loans
description: "An internal family bank that lends on written terms: a lending policy and committee, standard loan agreements, a clean ledger, repayment and arrears routines, and fairness across every branch."
category: personal
version: 1.0.0
tags: [family-office, family-bank-and-member-loans, parent, retiree, family-bank, intra-family-loans, lending-policy, loan-records]
author: Aurum Technology
starter_structure:
  templates:
    - board-meeting
    - purchase-decision
    - reading-queue
    - risk-register
    - meeting-notes
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Bank and Member Loans
          description: "Running an internal family bank: loans to members for homes or ventures, lending criteria, written terms, interest and repayment records, and fairness across branches."
          projects:
            - name: Family bank purpose and scope statement
              description: |-
                ## Purpose
                A family bank works best when everyone knows what it is for before the first request lands: helping members buy homes, start ventures or study, rather than funding lifestyle spending that the family would never approve as a gift. A one-page statement of purpose and scope, agreed by the senior generation, is the reference point every later rule and every refusal goes back to.

                ## Milestones
                1. The kinds of lending the family bank will consider listed, and the kinds it will not.
                2. The goals behind the bank written in three or four plain sentences, such as independence, opportunity and fairness.
                3. The statement read and agreed by every senior family member who will fund it.
                4. The agreed statement filed with the family's governance documents and dated.

                ## Notes
                Keep it short. A purpose statement that runs to five pages gets argued over clause by clause and never finished.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated one-page purpose and scope statement for the family bank, agreed in writing by every senior funder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the last five times the family lent or was asked to lend money"
                - "Draft a list of loan purposes the bank will and will not fund"
                - "Circulate the draft statement to each senior funder for comments"
                - "Hold a short call to settle the wording and record the agreement"
            - name: Inventory of loans already made to family members
              description: |-
                ## Purpose
                Most families thinking about a family bank have already lent money informally: a deposit here, a car there, a bridging sum during a divorce. Listing every outstanding amount, who owes it, what was said at the time and whether anything was signed gives the true starting position and usually surfaces a fairness question or two between branches.

                ## Milestones
                1. Every known loan to a family member listed with date, amount, borrower and lender.
                2. Each loan marked as written, emailed, or purely verbal.
                3. Current balances confirmed with each borrower where repayments have been made.
                4. A summary by family branch showing total amounts lent and outstanding.

                ## Notes
                Ask borrowers to confirm balances in a friendly message, not a demand. The point is an accurate record, not a collection exercise.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A spreadsheet of every outstanding family loan with balances confirmed by borrowers and totals shown by branch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every family loan you can remember in a single spreadsheet"
                - "Search bank statements and emails for transfers to family members"
                - "Send each borrower a friendly note asking them to confirm the balance"
                - "Total the amounts lent and outstanding for each family branch"
            - name: Choosing the legal home for the family bank
              description: |-
                ## Purpose
                Loans can come from individuals, a family company, a family partnership or the trustees of a family trust, and each choice changes the tax treatment, the paperwork, who signs and what happens when a lender dies. Comparing two or three options with the family's lawyer and tax adviser before the first new loan avoids having to unpick a structure later.

                ## Milestones
                1. Two or three possible lending entities described, including lending directly from individuals.
                2. Tax, legal, licensing and estate effects of each option set out by the family's advisers.
                3. Running costs and annual filing duties of each option compared.
                4. A decision recorded on which entity will lend, with the reasons.

                ## Notes
                In some countries lending money as a regular activity, even to relatives, can trigger consumer credit or moneylending rules. Ask the lawyer to confirm whether any licence or exemption applies.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision naming the lending entity for the family bank, backed by advice notes from the family's lawyer and tax adviser."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Note which family entities could hold and lend the bank's capital"
                - "Brief the family lawyer and tax adviser on the options in one email"
                - "Ask the lawyer whether any lending licence or exemption applies"
                - "Record the chosen lending entity and the reasons in the governance file"
            - name: Lending capital pool and annual lending limit
              description: |-
                ## Purpose
                Without a ceiling, a family bank quietly becomes the family's largest and least liquid investment. Setting the pool of capital set aside for member loans, a maximum per borrower and a yearly lending limit protects the funders' own plans and gives the committee a clear answer when demand outstrips supply.

                ## Milestones
                1. The total capital available for member lending agreed by the funders.
                2. A maximum outstanding balance per borrower and per branch set.
                3. An annual limit for new lending agreed, with a rule for what happens when it is reached.
                4. The figures written into the lending policy and shared with the committee.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written capital pool, per-borrower cap, per-branch cap and annual lending limit, agreed by the funders and recorded in the policy."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask each funder how much they are willing to set aside for member loans"
                - "Check the proposed pool against the funders' own spending and reserves"
                - "Propose caps per borrower and per branch in a one-page note"
                - "Agree the annual new lending limit and what happens when it is used up"
            - name: Lending committee and its terms of reference
              description: |-
                ## Purpose
                When the parent who holds the money also decides every loan alone, refusals feel personal and approvals look like favouritism. A small lending committee, ideally with one person from outside the family, makes decisions on the policy rather than on relationships, and members declare an interest when their own branch applies.

                ## Milestones
                1. Three to five committee members named, including at least one independent or non-family member.
                2. Terms of reference written covering quorum, voting, conflicts and decision deadlines.
                3. A rule agreed for members to step out when a relative in their branch applies.
                4. The terms of reference signed by each member and filed.

                ## Notes
                An independent member can be a trusted accountant or a retired banker. Pay them a modest fee so the role is treated seriously.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Signed terms of reference for a lending committee of three to five people, with a written conflicts rule and at least one independent member."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a shortlist of people who could sit on the lending committee"
                - "Approach one independent person about joining for a modest fee"
                - "Draft terms of reference covering quorum, voting and conflicts"
                - "Collect each member's signature on the final terms"
            - name: Family bank lending policy, first edition
              description: |-
                ## Purpose
                The lending policy is the rulebook every borrower and committee member works from: who can apply, for what, how much, on what terms, with what security, and what happens if repayments stop. Writing the first edition in stages, testing it against two or three real past loans, and having it reviewed by the family's lawyer turns good intentions into something the family can apply the same way to every branch.

                ## Milestones
                1. A first draft covering eligibility, purposes, amounts, rates, terms, security and defaults.
                2. The draft tested against three real past loans to see whether it would have given a sensible answer.
                3. Legal and tax review comments from the family's advisers worked into the text.
                4. The first edition approved by the funders and committee and shared with every adult member.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved, dated first edition of the lending policy, reviewed by advisers and sent to every adult family member."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the agent to draft a lending policy outline from the purpose statement"
                - "Fill in each section with the family's own rules and limits"
                - "Test the draft against three loans the family has already made"
                - "Send the draft to the family lawyer and tax adviser for review"
                - "Circulate the approved policy to every adult member with a covering note"
            - name: Borrower eligibility and application rules
              description: |-
                ## Purpose
                Eligibility decides who may borrow at all: blood relatives only or spouses too, a minimum age, whether a borrower must have completed the family's financial education, and whether someone already in arrears can apply again. A simple application form with a written list of what to send makes every request comparable and spares the committee from chasing missing details.

                ## Milestones
                1. Eligibility rules agreed for age, relationship to the family, existing debt and education requirements.
                2. A one-page application form asking for purpose, amount, term, repayment plan and supporting papers.
                3. A checklist of documents each loan type needs, such as a purchase contract or business plan.
                4. Rules and form added to the policy and placed where members can find them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written eligibility rules and a one-page application form with a document checklist for each loan type, published to members."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide whether spouses and in-laws can borrow in their own name"
                - "Draft a one-page loan application form"
                - "List the supporting papers needed for home, venture and education loans"
                - "Store the form where every eligible member can download it"
            - name: Standard family loan agreement with the family lawyer
              description: |-
                ## Purpose
                Without a signed agreement, a loan is, in many legal systems, hard to tell apart from a gift, which can matter to the tax authority, to a borrower's spouse in a divorce, and to the executors when a lender dies. One standard agreement drafted by the family's lawyer, with schedules for amount, rate, term and security, means every loan is documented the same way and costs little to prepare.

                ## Milestones
                1. A brief to the lawyer listing the clauses the family needs, including default, death and early repayment.
                2. A standard agreement with a schedule for amount, interest, term, repayments and security.
                3. A short plain-language summary that borrowers read before signing.
                4. The template stored with instructions on when the lawyer must review a specific loan.

                ## Notes
                Ask the lawyer whether borrowers should be told in writing that they may take independent advice before signing. It helps the agreement stand up later.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lawyer-approved standard loan agreement with a fill-in schedule and a plain-language borrower summary, stored in the family bank file."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the situations the agreement must cover, such as death, divorce and default"
                - "Send the lawyer a written brief and ask for a fee estimate"
                - "Review the draft agreement against the lending policy"
                - "Write a one-page plain-language summary to go with each agreement"
                - "Ask the lawyer to confirm the template is still current @recurring(yearly)"
            - name: Tax and gifting review of family loans with an adviser
              description: |-
                ## Purpose
                Interest-free or low-interest loans to relatives can have tax consequences in many countries, such as deemed interest, gift tax on forgiven amounts, or inheritance rules on balances outstanding at death. A single review meeting with the family's tax adviser, covering each country where lenders and borrowers live, tells the committee which rate floors, records and forms it must respect.

                ## Milestones
                1. A list of the countries where lenders, borrowers and the lending entity are tax resident.
                2. Written questions sent to the tax adviser about interest, forgiveness and loans at death.
                3. The adviser's answers summarised in plain terms for the committee.
                4. Any minimum rate, reporting form or record requirement written into the policy.

                ## Notes
                This project is about asking the right questions and recording the answers. The adviser makes the calls, not the committee.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written summary of the tax adviser's answers on interest, forgiveness and loans at death, with any required rules added to the lending policy."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note the tax residence of every lender, borrower and lending entity"
                - "Write the questions on interest, forgiveness and death for the tax adviser"
                - "Book a review meeting with the tax adviser"
                - "Summarise the answers and update the lending policy to match"
            - name: Family bank loan ledger set-up
              description: |-
                ## Purpose
                Each loan needs one record showing what was advanced, the interest charged, every repayment received and the balance today, held somewhere more durable than one person's memory or a single spreadsheet on a laptop. Setting up a proper ledger, with a page per loan and a summary of the whole book, makes statements, audits and estate work possible years from now.

                ## Milestones
                1. A ledger with one account per loan, showing advances, interest, repayments and balance.
                2. Every loan from the inventory entered with its opening balance.
                3. A summary tab showing total outstanding by borrower, branch and loan type.
                4. Access and backup arrangements agreed so the ledger survives a change of bookkeeper.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ledger holding every outstanding loan with an opening balance, a whole-book summary and a named backup arrangement."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Decide whether the ledger lives in accounting software or a locked spreadsheet"
                - "Create one account per loan with advances, interest and repayments columns"
                - "Enter each loan from the inventory with its confirmed opening balance"
                - "Set up a summary view by borrower, branch and loan type"
                - "Back up the ledger to the family document vault @recurring(monthly:28)"
            - name: Monthly repayment reconciliation
              description: |-
                ## Purpose
                Repayments that are not matched to the ledger every month drift into confusion within a year: a borrower thinks they paid, the ledger says they did not, and nobody can prove either. A monthly check of the lending account against the ledger keeps balances right and catches missed or wrong payments while they are still small.

                ## Milestones
                1. A named person responsible for the reconciliation each month.
                2. Every repayment received matched to a loan in the ledger.
                3. Unmatched receipts and missing payments listed and followed up.
                4. Twelve consecutive monthly reconciliations completed and signed off.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The lending account is reconciled to the loan ledger every month, with unmatched items cleared within 30 days."
                cadence: rolling
              tasks:
                - "Name who reconciles the lending account and who checks their work"
                - "Match last month's repayments to the ledger @recurring(monthly:4)"
                - "List any unmatched or missing payments and note who will follow up"
                - "Send the reviewer a one-line reconciliation sign-off @recurring(monthly:7)"
            - name: Arrears follow-up routine for missed repayments
              description: |-
                ## Purpose
                Families often say nothing when a relative misses a payment, and silence for six months turns a short cash squeeze into a debt nobody wants to mention. A gentle, written routine with set steps at 15, 30 and 60 days late treats every borrower the same and keeps the conversation early, private and kind.

                ## Milestones
                1. Written arrears steps agreed for 15, 30 and 60 days late.
                2. A friendly first reminder message drafted for reuse.
                3. Every overdue loan checked against the steps each month.
                4. Loans more than 60 days late reported to the lending committee with a proposed plan.

                ## Notes
                The first contact should come from the administrator, not a parent. It keeps the relationship and the debt separate.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every loan more than 15 days overdue receives the agreed step each month, and every loan over 60 days late reaches the committee with a plan."
                cadence: rolling
              tasks:
                - "Write the arrears steps for 15, 30 and 60 days late"
                - "Draft a warm first reminder message the administrator can reuse"
                - "Check the ledger for overdue loans and send the right step @recurring(monthly:10)"
                - "Report loans over 60 days late to the next committee meeting"
                - "Send the committee chair a short arrears summary @recurring(quarterly)"
            - name: Loan request intake and decision log
              description: |-
                ## Purpose
                Requests arrive by text, over dinner and through a parent, and the ones that get remembered are not always the ones that came first. Logging every request on the day it is received, with the date of decision and the reason, gives each branch proof that it was treated fairly and gives the committee its own precedents.

                ## Milestones
                1. One log holding every loan request, its date, amount, purpose and status.
                2. A rule that requests made informally are pointed to the application form.
                3. Each decision recorded with the reason and any conditions.
                4. Pending requests reviewed monthly so none waits longer than the policy allows.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every loan request appears in the log within a week of being made, and every decision has a recorded reason."
                cadence: rolling
              tasks:
                - "Create the request log with date, borrower, amount, purpose and status"
                - "Add every request received in the last year from memory and messages"
                - "Review pending requests and chase any overdue decisions @recurring(monthly:18)"
                - "Record the reason for each approval or refusal on the day it is made"
            - name: Quarterly loan book review by the lending committee
              description: |-
                ## Purpose
                Once a quarter the committee should look at the whole book rather than individual requests: total outstanding against the capital pool, loans in arrears, loans coming to term and how each branch stands. A standing agenda and a short pack prepared a week ahead keep the meeting to an hour and the minutes useful.

                ## Milestones
                1. A standing quarterly agenda agreed by the committee.
                2. A short pack covering balances, arrears, maturities and branch totals prepared before each meeting.
                3. Minutes recording decisions and actions, circulated within a week.
                4. Four quarterly reviews held in the first year.

                ## Notes
                Start from the **Board meeting** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly loan book reviews held each year, each with a pack sent a week ahead and minutes issued within a week after."
                cadence: cyclic
              tasks:
                - "Agree the standing agenda for the quarterly loan book review"
                - "Prepare the loan book pack and send it a week before the meeting @recurring(quarterly)"
                - "Circulate the minutes and action list within a week"
                - "Set the four meeting dates for the coming year"
            - name: Annual borrower statements and balance confirmations
              description: |-
                ## Purpose
                Sending each borrower a yearly statement showing what they borrowed, the interest added, what they repaid and what they still owe stops balances from becoming a matter of opinion. Asking the borrower to confirm the figure in writing also gives the executors, auditors and tax adviser a clean trail.

                ## Milestones
                1. A standard statement layout showing opening balance, interest, repayments and closing balance.
                2. Statements sent to every borrower within a month of the year end.
                3. Written confirmations received from every borrower, or differences resolved.
                4. Confirmations filed with each loan's records.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every borrower receives a statement each year and confirms the balance in writing, with all differences resolved within 60 days."
                cadence: cyclic
              tasks:
                - "Design a one-page borrower statement layout"
                - "Send every borrower their annual statement and ask for confirmation @recurring(yearly)"
                - "Chase missing confirmations and resolve any disputed balances"
                - "File each confirmed statement with the loan record"
            - name: Interest rate setting and yearly rate check
              description: |-
                ## Purpose
                Rates that ignore the outside world drifts into either an unintended gift or a burden heavier than a commercial mortgage. Setting a written rule, for example a margin over a published reference rate with any minimum the tax adviser requires, and checking it once a year keeps rates defensible and consistent across branches.

                ## Milestones
                1. A written rate rule for each loan type agreed with input from the tax adviser.
                2. The reference rate source and the date it is read written into the policy.
                3. Fixed and variable rate loans identified in the ledger.
                4. A yearly check that variable rates were reset and every rate meets any required minimum.

                ## Notes
                Choosing the rate rule is a family decision. Whether a rate is high enough for tax purposes is a question for the adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written rate rule per loan type in the policy, with a yearly record showing every variable rate reset and every rate checked against any required minimum."
                cadence: cyclic
              tasks:
                - "Pick the published reference rate the family bank will follow"
                - "Ask the tax adviser whether any minimum rate applies to family loans"
                - "Mark each loan in the ledger as fixed or variable rate"
                - "Check every rate against the rule and reset variable loans @recurring(yearly)"
            - name: Fairness tally across family branches
              description: |-
                ## Purpose
                The quickest way for a family bank to cause resentment is for one branch to borrow heavily, on soft terms, while another never asks. A yearly tally of lending, interest charged and amounts forgiven by branch, shared openly, lets the family see whether the bank is even-handed and decide whether anything needs adjusting before it becomes a grievance.

                ## Milestones
                1. A table showing amounts lent, outstanding, interest charged and forgiven by branch.
                2. An agreed view of what fairness means here, such as equal access rather than equal amounts.
                3. The tally shared with every branch each year.
                4. Any imbalance the family wants corrected noted with an agreed remedy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly branch-by-branch lending tally shared with every branch, with any agreed corrective step recorded."
                cadence: cyclic
              tasks:
                - "Write a paragraph on what fair access to the family bank means"
                - "Build the branch tally from the ledger summary"
                - "Share the branch tally with every branch before the family meeting @recurring(yearly)"
                - "Record any remedy the family agrees for an imbalance"
            - name: Collateral and security register
              description: |-
                ## Purpose
                Larger family loans are often secured on a home, a vehicle, shares in a business or a borrower's future inheritance, and each kind of security needs its own paperwork and its own check that it is still in place. A single register of what secures each loan, where the documents are held and when cover was last confirmed stops security from quietly lapsing.

                ## Milestones
                1. Every secured loan listed with the asset, the form of security and where the papers are kept.
                2. Insurance on secured homes and vehicles confirmed, with the family bank noted where possible.
                3. Unsecured loans above the policy threshold flagged for the committee.
                4. A yearly check that each security is still registered and insured.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register shows the security and its document location for every secured loan, with insurance and registration confirmed each year."
                cadence: cyclic
              tasks:
                - "List every secured loan with its asset and form of security"
                - "Note where the original security documents are held"
                - "Ask each secured borrower for a copy of their current insurance @recurring(yearly)"
                - "Flag unsecured loans above the policy threshold to the committee"
            - name: Venture borrower quarterly check-ins
              description: |-
                ## Purpose
                Loans for a member's business carry more risk than a home loan and benefit most from early conversation when things wobble. A short quarterly check-in on trading, cash and any trouble ahead, agreed as a condition of the loan, lets the family help with advice or a revised schedule before a missed payment forces the issue.

                ## Milestones
                1. Check-ins written into every venture loan agreement as a condition.
                2. A five-question check-in format agreed with venture borrowers.
                3. Notes from each check-in kept with the loan record.
                4. Any early warning raised with the committee within two weeks.

                ## Notes
                Keep check-ins supportive. A borrower who expects a grilling stops telling the truth.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every venture borrower has a quarterly check-in recorded, and every early warning reaches the committee within two weeks."
                cadence: rolling
              tasks:
                - "Draft five check-in questions on trading, cash and upcoming risks"
                - "Add the check-in condition to the venture loan agreement schedule"
                - "Hold a short check-in call with each venture borrower @recurring(quarterly)"
                - "Pass any early warning to the committee chair"
            - name: Annual family bank report to the family
              description: |-
                ## Purpose
                Families who fund a bank deserve to see how their money is used, and borrowers benefit from knowing the rules are applied in the open. A short yearly report covering lending, repayments, arrears, the branch tally and any policy changes, presented at the family meeting, keeps trust high and lets the next generation see how it works.

                ## Milestones
                1. A report template with sections for lending, repayments, arrears, fairness and policy changes.
                2. Personal details of individual borrowers kept out unless they have agreed.
                3. The report presented at the family meeting with time for questions.
                4. Questions and requests from the family recorded for the committee.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written annual report on the family bank presented at the family meeting each year, with family questions logged for the committee."
                cadence: cyclic
              tasks:
                - "Agree with borrowers what personal detail may appear in the report"
                - "Draft the annual report and send it to the committee @recurring(yearly)"
                - "Present the report at the family meeting"
                - "Log the family's questions and requests for the committee"
            - name: Reading a family loan agreement clause by clause
              description: |-
                ## Purpose
                Committee members and borrowers both sign agreements they have only skimmed, then discover in a dispute what the default or death clauses actually say. Working through the family's own standard agreement with the lawyer, clause by clause, leaves everyone able to explain it to a borrower in plain words.

                ## Milestones
                1. A list of the agreement's main clauses with a one-line plain meaning for each.
                2. A session with the lawyer to answer the questions the list raised.
                3. Three worked examples: early repayment, a missed payment and the borrower's death.
                4. A short guide for borrowers based on the session.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Committee members hold a plain-language clause guide and three worked examples, checked by the family's lawyer."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Highlight the clauses in the standard agreement you could not explain"
                - "Write a plain one-line meaning beside each main clause"
                - "Book a session with the lawyer to go through the questions"
                - "Work through early repayment, default and death as examples"
            - name: Repayment schedules and amortisation maths
              description: |-
                ## Purpose
                Borrowers asking whether to choose ten or fifteen years, or interest only for the first two, deserve a clear answer in numbers. Learning how amortisation, interest-only periods, balloon repayments and capitalised interest work, and building a simple calculator, lets the committee show each borrower what their choice really costs.

                ## Milestones
                1. The difference between repayment, interest-only and balloon loans written up with one example each.
                2. A simple schedule calculator that shows each payment and the balance over time.
                3. The calculator checked against a published online mortgage calculator.
                4. A sample schedule produced for a real pending request.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A checked repayment schedule calculator and a written explanation of three repayment types, used on at least one real request."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down how repayment, interest-only and balloon loans differ"
                - "Build a schedule in a spreadsheet using the standard loan payment formula"
                - "Compare your results with a published online calculator"
                - "Produce a schedule for the next pending loan request"
            - name: Assessing a family member's business plan for a venture loan
              description: |-
                ## Purpose
                Lending to a relative's start-up is where family banks lose the most money and the most goodwill, often because nobody asked the questions an outside lender would. Learning to read a business plan and cash flow forecast with a critical but kind eye, and to ask for evidence of customers, costs and the founder's own stake, makes venture lending decisions far less emotional.

                ## Milestones
                1. A list of ten questions the committee asks of every venture plan.
                2. A worked review of one real or sample plan using the questions.
                3. A note on when to bring in an outside accountant or mentor to review a plan.
                4. The question list added to the venture loan checklist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ten-question venture plan review list, tested on one plan and added to the venture loan checklist."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft ten questions to ask of any venture loan plan"
                - "Review a sample business plan using the questions"
                - "Decide when an outside accountant should review a plan"
                - "Add the question list to the venture loan document checklist"
            - name: Credit assessment basics for family lenders
              description: |-
                ## Purpose
                Nobody running a family bank needs a credit scoring model, but the committee does need to look at whether a borrower can afford the repayments from their own income after their other debts. Learning the basic affordability checks banks use, such as income, existing commitments and a stress margin, lets the committee test requests the same way every time without prying further than necessary.

                ## Milestones
                1. The family's affordability test written in a few lines, including a stress margin.
                2. A short list of the documents needed to apply it, such as payslips or accounts.
                3. A rule on how personal financial details are stored and who may see them.
                4. The test applied to one real or sample request and the result recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written affordability test with a stress margin and a privacy rule, applied to at least one request."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read how lenders assess affordability for a home loan"
                - "Write the family's affordability test with a stress margin"
                - "Agree who may see borrowers' payslips and statements"
                - "Apply the test to the next request and record the result"
            - name: Case studies of how other families run their banks
              description: |-
                ## Purpose
                Older family banks, some running for twenty years, have already made the mistakes this family is about to make: unlimited forgiveness, no records, a bank run by one parent. Reading a handful of published case studies and books on family banks, and noting the practices worth copying and the ones to avoid, gives the committee perspective before its rules set hard.

                ## Milestones
                1. A reading list of four to six books, articles or case studies on family banks.
                2. Notes on at least four of them, each with one practice to copy and one to avoid.
                3. A short summary shared with the committee.
                4. Any lesson the committee adopts recorded as a proposed policy change.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on at least four family bank case studies or books, summarised for the committee with proposed policy changes listed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your family office adviser for recommended reading on family banks"
                - "Read one case study a month and note a practice to copy and one to avoid"
                - "Summarise the lessons for the committee in a page"
                - "Turn any agreed lesson into a proposed policy change"
            - name: Induction training for new lending committee members
              description: |-
                ## Purpose
                New committee members usually inherit a folder and a meeting date from whoever stepped down. A short induction covering the purpose statement, the policy, the agreement, the ledger, the conflicts rule and a few past decisions brings them up to speed in a couple of hours and keeps decisions consistent across changes in membership.

                ## Milestones
                1. An induction pack with the key documents and five example past decisions.
                2. A two-hour session with the chair and the administrator.
                3. The new member's conflicts declaration signed.
                4. A first meeting attended with a mentor on the committee.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every new committee member completes a two-hour induction and signs a conflicts declaration before voting on any loan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the key documents into one induction pack"
                - "Pick five past decisions that show how the policy is applied"
                - "Hold the induction session with the chair and administrator"
                - "Have the new member sign the conflicts declaration"
            - name: Saying no to a family loan request well
              description: |-
                ## Purpose
                Refusals are the hardest part of running a family bank, especially when the applicant is a grandchild or a sibling who has heard yes before. Practising how to decline clearly, point to the policy rather than the person, and offer a way forward such as a smaller sum, a later date or a gift instead, protects the relationship as much as the capital.

                ## Milestones
                1. Three standard reasons for refusal written in plain, kind language.
                2. A short written refusal letter template that offers a next step.
                3. A rule that refusals are delivered in conversation first, then in writing.
                4. One refusal role-played between committee members.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A refusal letter template and three plain reasons for refusal agreed, with a rule that each refusal is discussed in person before it is written."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three common reasons for refusal in plain, kind words"
                - "Draft a refusal letter that always offers a next step"
                - "Role-play a refusal conversation with another committee member"
                - "Add the refusal rule to the committee's terms of reference"
            - name: Loan, gift or early inheritance decision framework
              description: |-
                ## Purpose
                Parents often lend when they really mean to give, then struggle years later to ask for the money back, or give to one child and lend to another and create a lasting sense of unfairness. A simple framework agreed in advance sets out when help should be a loan, a gift or an advance on inheritance, so each request starts with the right question.

                ## Milestones
                1. The three forms of help described with their practical and tax consequences, from the adviser.
                2. Rules of thumb agreed for which form suits which situation.
                3. A note on how advances on inheritance are recorded so wills can account for them.
                4. The framework added to the lending policy as a first step for every request.

                ## Notes
                How an advance on inheritance is treated at death depends on the will and local law. The estate lawyer should confirm the wording.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written loan, gift or advance framework, with consequences confirmed by the family's advisers, added to the lending policy."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List recent help given to children and whether it was a loan or gift"
                - "Ask the tax adviser and estate lawyer to explain each form of help"
                - "Draft rules of thumb for when to lend, give or advance"
                - "Add the framework to the start of the lending policy"
            - name: Home purchase loan product for members
              description: |-
                ## Purpose
                Help with a first home is the most common reason families lend, and it raises questions the policy should answer once: deposit only or the whole price, a first or second charge, what happens if the home is sold, and how the loan sits alongside an outside mortgage lender's rules. Designing one home loan product with the lawyer saves negotiating each loan from scratch.

                ## Milestones
                1. Product terms set for amount, purpose, term, rate, security and sale of the property.
                2. The lawyer's view recorded on how the loan interacts with an outside mortgage.
                3. A one-page product sheet for borrowers.
                4. The product added to the lending policy.

                ## Notes
                Outside mortgage lenders usually ask whether a deposit is a loan or a gift, and some will not accept borrowed deposits. Check before promising terms.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written home purchase loan product with lawyer-checked terms and a one-page borrower sheet, added to the policy."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Decide whether home loans cover the deposit only or more"
                - "Ask the lawyer how a family loan sits beside an outside mortgage"
                - "Set terms for what happens when the home is sold"
                - "Write a one-page product sheet for home loan borrowers"
            - name: Education loan product for the rising generation
              description: |-
                ## Purpose
                Grandparents and parents often want to fund postgraduate study, a professional qualification or a training course, and a loan that is repaid from future earnings can teach as much as the course. A dedicated education loan with deferred repayments, a low rate and an income threshold makes the offer clear and the same for every grandchild.

                ## Milestones
                1. Eligible courses and maximum amounts set.
                2. Deferral period and income threshold for starting repayments agreed.
                3. A rule on what happens if the course is not completed.
                4. The education product written into the policy and announced to eligible members.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written education loan product with eligible courses, a deferral rule and an income threshold, announced to eligible members."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the kinds of study the family wants to fund by loan"
                - "Set the deferral period and income threshold for repayments"
                - "Decide what happens if a course is left unfinished"
                - "Announce the education loan to eligible members"
            - name: Bringing informal legacy loans onto written terms
              description: |-
                ## Purpose
                Old handshake loans are where most family bank disputes begin, because each side remembers different terms. Agreeing with each existing borrower whether their loan becomes a documented loan, a partial gift or a written-off amount, and then signing the result, lets the new bank start with a clean book and nobody claiming special treatment.

                ## Milestones
                1. Each loan from the inventory assigned a proposed treatment.
                2. A private conversation held with each existing borrower.
                3. Agreed treatment signed for every legacy loan, using the standard agreement where it stays a loan.
                4. The ledger and branch tally updated to match.

                ## Notes
                Forgiving part of a legacy loan can be a gift for tax purposes in some countries. Check with the tax adviser before agreeing any write-off.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every legacy loan has a signed agreed treatment, and the ledger and branch tally reflect them."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Propose a treatment for each legacy loan in the inventory"
                - "Check any proposed write-off with the tax adviser"
                - "Meet each existing borrower privately to agree their loan's treatment"
                - "Sign the agreed treatment and update the ledger"
            - name: Loan forgiveness and write-off policy
              description: |-
                ## Purpose
                Sooner or later a funder will want to forgive a loan, as a wedding present, in hardship, or in their will, and without a rule each forgiveness looks like favouritism to the other branches. A written policy on who may forgive, how much, with what record, and how it is balanced across branches answers the question before it is personal.

                ## Milestones
                1. Circumstances where forgiveness may be considered listed.
                2. Rules on who may approve forgiveness and up to what amount.
                3. A requirement to record every forgiveness in the branch tally and to check tax effects first.
                4. The policy approved and added to the lending rules.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved forgiveness policy naming who may forgive, limits, recording and a tax check step, included in the lending rules."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List past occasions when the family forgave or wanted to forgive a loan"
                - "Draft who may approve forgiveness and the limits"
                - "Add a tax check step before any forgiveness is approved"
                - "Present the forgiveness policy to the funders for approval"
            - name: Choosing loan servicing software or an administrator
              description: |-
                ## Purpose
                Once the book passes a dozen loans, interest calculations, statements and reminders become too much for one volunteer with a spreadsheet. Comparing a small loan servicing tool, the family office's accounting system and an outside administrator, on cost, privacy and how much work each removes, settles who does the routine work for the next few years.

                ## Milestones
                1. Requirements listed: interest calculation, statements, reminders, access controls and exports.
                2. Three options compared on cost, privacy and effort saved.
                3. A choice made and a start date set.
                4. Existing loans moved across and balances checked against the old ledger.

                ## Notes
                Start from the **Purchase decision** template. Ask any provider where borrower data is stored and who can see it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of loan servicing tool or administrator, with all loans migrated and balances matching the old ledger."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the list of functions the family bank needs from a system"
                - "Compare three tools or administrators on cost, privacy and effort"
                - "Ask each provider where borrower data is stored"
                - "Move existing loans across and check every balance matches"
            - name: Family bank guarantees for members' outside borrowing
              description: |-
                ## Purpose
                Sometimes the most useful help is not a loan but a guarantee that lets a member borrow from an outside bank on better terms. Guarantees feel free until they are called, so a policy decision on whether the family bank gives them at all, with caps and how they count against the capital pool, prevents an open-ended promise.

                ## Milestones
                1. The risks and legal effects of guarantees summarised by the family's lawyer.
                2. A decision on whether guarantees are offered, with caps if they are.
                3. A rule that guarantees count against the capital pool and borrower caps.
                4. The decision recorded in the lending policy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on family bank guarantees, with caps and treatment against the capital pool if they are allowed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List any guarantees family members have already given for relatives"
                - "Ask the lawyer to summarise the risks of giving a guarantee"
                - "Decide whether guarantees are allowed and set the caps"
                - "Record the decision in the lending policy"
            - name: Family bank launch meeting
              description: |-
                ## Purpose
                A family bank announced in a group message invites rumours about who it is really for. A launch meeting where the senior generation explains why the bank exists, the committee walks through the policy, and every adult member can ask questions, sets the tone of openness the bank will need when the first difficult request arrives.

                ## Milestones
                1. A date set that most adult members across branches can attend in person or online.
                2. A short presentation covering purpose, policy, products and how to apply.
                3. Questions answered on the day or followed up in writing within two weeks.
                4. Slides, policy and application form sent to every adult member after the meeting.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch meeting held with members from every branch invited, and the policy and application form sent to all adult members afterwards."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a launch date and invite every adult member across branches"
                - "Prepare a short presentation on purpose, policy and how to apply"
                - "Hold the launch meeting and note every question asked"
                - "Send the policy, form and answers to every adult member"
            - name: First loan under the new policy
              description: |-
                ## Purpose
                The first loan made under the new rules sets a precedent everyone will remember, so it is worth doing slowly and properly. Running one request through application, assessment, committee decision, signed agreement, funds transfer and ledger entry shows where the process sticks before the bank gets busy.

                ## Milestones
                1. One application received and assessed against the policy.
                2. A committee decision recorded with reasons.
                3. The standard agreement signed and the funds sent to the borrower.
                4. A short note of what to improve in the process.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One loan completed end to end under the new policy, from application to ledger entry, with a written process improvement note."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Take the first application through the eligibility checklist"
                - "Hold the committee decision and minute the reasons"
                - "Sign the agreement and arrange the transfer of funds"
                - "Write a note of what slowed the process down"
            - name: Lending committee hearing on a defaulted loan
              description: |-
                ## Purpose
                When a loan has gone well past the arrears steps, the committee needs to decide calmly whether to restructure, enforce security, forgive or set off the debt against a future inheritance. A structured hearing, where the borrower can explain their situation and the committee follows the policy, keeps the decision fair and on the record.

                ## Milestones
                1. The borrower invited in writing with the facts of the arrears.
                2. Options set out in advance: restructure, enforce, forgive or set off.
                3. The hearing held with the borrower able to speak and conflicted members stepped out.
                4. The decision and next steps minuted and sent to the borrower.

                ## Notes
                Start from the **Meeting notes** template. Take legal advice before enforcing any security against a relative.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A minuted hearing held for each loan in serious default, with a written decision sent to the borrower."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write to the borrower with the arrears facts and a hearing date"
                - "Set out the four options and their effects for the committee"
                - "Hold the hearing with conflicted members stepped out"
                - "Send the borrower the written decision and next steps"
            - name: Final repayment and loan closure
              description: |-
                ## Purpose
                Paying off a family loan is a moment worth marking, and it also needs proper paperwork: a closing statement, release of any security and a letter confirming nothing more is owed. Closing loans properly prevents an old balance from reappearing in an estate dispute twenty years later.

                ## Milestones
                1. A closing statement showing the balance reduced to zero.
                2. Any registered security released and the release filed.
                3. A signed letter to the borrower confirming the loan is repaid in full.
                4. The ledger account closed and the file archived.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every repaid loan has a zero closing statement, released security, a signed paid-in-full letter and an archived file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Prepare the closing statement showing a zero balance"
                - "Ask the lawyer to release any registered security"
                - "Send the borrower a signed paid-in-full letter"
                - "Close the ledger account and archive the loan file"
            - name: Independent review of the family bank after three years
              description: |-
                ## Purpose
                Three years in, the family bank will have a track record, a few hard cases and some rules that no longer fit. An independent reviewer, such as an accountant or family business adviser who was not involved in setting it up, can tell the family whether the bank is meeting its purpose and where the policy needs a second edition.

                ## Milestones
                1. A reviewer chosen with no lending relationship to any branch.
                2. Scope agreed covering policy, records, decisions, fairness and outcomes for borrowers.
                3. A written report with findings and recommendations.
                4. A response to each recommendation agreed by the committee and funders.
              priority: low
              deadlineOffsetDays: 730
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An independent written review of the family bank delivered within three years of launch, with a recorded response to each recommendation."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Shortlist two reviewers with no lending link to any branch"
                - "Agree the scope and fee for the review"
                - "Give the reviewer access to the policy, ledger and minutes"
                - "Agree a response to each recommendation in the report"
            - name: Parents lending to an adult child for a first home
              description: |-
                ## Purpose
                Parents lending a deposit to a son or daughter want to help without risking their own retirement or treating their other children unfairly. Working through the request with the child, including the partner if there is one, using the home loan product and agreement, gives everyone clarity on what happens if the couple separate, the house is sold or the parents later need the money.

                ## Milestones
                1. The child's application and purchase details received.
                2. A family conversation held covering repayments, sale and separation.
                3. A note to the other children explaining what was lent and on what terms.
                4. The agreement signed, with the partner's position addressed as the lawyer advises.

                ## Notes
                A partner who is not on the loan may still live in the home. Ask the lawyer whether they need to sign anything.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed home loan to an adult child, with the partner's position addressed and the other children told in writing what was lent."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your child for the property details and their mortgage offer"
                - "Talk through repayments, sale and separation with your child and partner"
                - "Tell your other children in writing what was lent and why"
                - "Sign the home loan agreement once the lawyer has checked it"
            - name: Retired lenders protecting their own income
              description: |-
                ## Purpose
                Retirees are often the family's main lenders and also the people with the least room for mistakes, since money lent to a grandchild may be money needed for care in ten years. A yearly check that loans outstanding, expected repayments and any forgiveness still leave the retired lender's own spending and care plans covered keeps generosity from turning into dependence on the children.

                ## Milestones
                1. The retiree's yearly spending and likely care costs estimated with their adviser.
                2. Loans outstanding and expected repayments set against those needs.
                3. A personal ceiling on further lending agreed by the retiree.
                4. A yearly check scheduled before the family meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each retired lender has a written personal lending ceiling based on their own needs, checked once a year."
                cadence: cyclic
              tasks:
                - "List the loans you have made and the repayments you expect"
                - "Ask your financial adviser to set them against your care and spending needs"
                - "Write down your personal ceiling on further lending"
                - "Recheck your loans against your own needs before the family meeting @recurring(yearly)"
            - name: Grandparents lending fairly across grandchildren
              description: |-
                ## Purpose
                Grandchildren arrive at different times and ask for different things, so a grandparent who lends to the eldest for a flat may not be around, or solvent, when the youngest asks. Setting a simple principle, such as an equal amount per grandchild over a lifetime or equal access to the same products, and keeping a running record makes the grandparent's fairness visible long after the first loan.

                ## Milestones
                1. A fairness principle for grandchildren written in a sentence.
                2. A record of what each grandchild has borrowed, received or been promised.
                3. The principle explained to the grandchildren's parents.
                4. The record shared with the executor or estate lawyer.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written fairness principle for grandchildren, with a per-grandchild record shared with the executor or estate lawyer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write your fairness principle for grandchildren in one sentence"
                - "Record what each grandchild has borrowed or been promised so far"
                - "Explain the principle to each of your children"
                - "Give a copy of the record to your executor or estate lawyer"
                - "Update each grandchild's record after any new loan or gift @recurring(yearly)"
            - name: Loans when a borrower divorces or separates
              description: |-
                ## Purpose
                Lending to a married couple can create a contested asset or debt in a divorce, and the other spouse may argue it was a gift. Knowing in advance how the agreement treats separation, and taking the lawyer's guidance as soon as a borrower's marriage ends, protects the family's money and keeps the family bank out of the dispute.

                ## Milestones
                1. The separation clauses in each loan to a couple identified.
                2. A step-by-step response agreed for when a borrower separates.
                3. The lawyer's guidance taken on any loan affected.
                4. The loan's treatment agreed and recorded after the separation.

                ## Notes
                This covers what happens to a family bank loan. Wider marital agreements belong with the family's prenuptial policy.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written response plan for a borrower's separation, with the lawyer's guidance recorded for every affected loan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every loan made to a married or cohabiting couple"
                - "Check what each agreement says about separation"
                - "Write the steps the committee follows when a borrower separates"
                - "Ask the lawyer to review any loan already affected"
            - name: Loans outstanding when a lender or borrower dies
              description: |-
                ## Purpose
                Death leaves either an estate owed money by a relative or a relative's estate owing money to the family bank, and executors need clear records to deal with either. Making sure each lender's will and each borrower's affairs reflect the loans, and that executors know where the ledger and agreements are, avoids estates being held up or siblings left to argue over what was meant.

                ## Milestones
                1. Every lender's estate lawyer given a copy of their loans and balances.
                2. A decision by each lender on whether loans are forgiven, collected or set off at death.
                3. Borrowers told how their loans will be handled if the lender dies.
                4. Executors told where the ledger, agreements and statements are kept.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each lender's estate lawyer holds a current loan schedule and the lender's instruction on forgiveness, collection or set-off at death."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Prepare a loan schedule for each lender's estate lawyer"
                - "Decide whether your loans are forgiven, collected or set off at death"
                - "Tell executors where the ledger and agreements are kept"
                - "Let borrowers know how their loans will be handled"
            - name: Hardship restructuring for a struggling borrower
              description: |-
                ## Purpose
                Job loss, illness or a failed business can make agreed repayments impossible for a while, and a family bank that only knows how to chase will lose both the money and the relationship. A written hardship option, such as a payment holiday, longer term or reduced rate for a set period, with a review date, gives the borrower breathing room on documented terms.

                ## Milestones
                1. Hardship options and their limits written into the policy.
                2. A simple hardship request process with the evidence needed.
                3. A signed variation for each restructured loan, with a review date.
                4. Each restructured loan reviewed monthly until it returns to normal terms.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every restructured loan has a signed variation with a review date and is reviewed monthly until back on normal terms."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the hardship options and their limits into the policy"
                - "Ask the struggling borrower what they can realistically pay"
                - "Sign a written variation with a review date"
                - "Check the restructured loan against its new terms @recurring(monthly:25)"
            - name: Lending to a family member living in another country
              description: |-
                ## Purpose
                Borrowers abroad bring currency swings, transfer costs, local rules on foreign loans and a question about which country's law governs the agreement. Agreeing the currency, payment route and governing law with the lawyer, and checking any reporting needed in each country, keeps the loan workable when the borrower and lender live under different systems.

                ## Milestones
                1. The loan currency and who bears exchange rate risk agreed.
                2. A low-cost payment route for repayments set up and tested.
                3. Governing law and any local registration or reporting confirmed by advisers in both countries.
                4. The cross-border points added to the borrower's agreement schedule.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each cross-border loan has an agreed currency, a tested payment route and a recorded adviser view on governing law and reporting in both countries."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree with the borrower which currency the loan is in"
                - "Test a low-cost route for sending repayments across borders"
                - "Ask advisers in both countries about governing law and reporting"
                - "Add the cross-border terms to the agreement schedule"
            - name: Trustees lending to trust beneficiaries
              description: |-
                ## Purpose
                When the family bank's money sits in a trust, loans to beneficiaries are decisions of the trustees, bound by the trust deed and their duties, not by the family's wishes alone. Setting out with the trustees how they will consider member loans, what records they need and how the family's lending policy can inform without directing them keeps lending inside the trust's rules.

                ## Milestones
                1. The trust deed's lending powers confirmed by the trustees or their lawyer.
                2. A note agreed on how the family's lending policy is shared with trustees as guidance.
                3. A trustee loan file format agreed, including minutes of each decision.
                4. Responsibility for statements and the ledger agreed between the trustees and the family office.

                ## Notes
                Trustees must make their own decisions. Present the lending policy as information, not instruction.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note, agreed with the trustees, on their lending powers, how the family policy is shared and how trustee loan decisions are recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the trustees to confirm the deed's power to lend to beneficiaries"
                - "Agree how the family lending policy is shared as guidance only"
                - "Settle the file format and minutes for trustee loan decisions"
                - "Agree who keeps statements and the ledger for trust loans"
            - name: Registered charge over a borrower's home
              description: |-
                ## Purpose
                For the largest family loans, an agreement alone may not be enough if the borrower sells, remortgages or falls into debt with others. A charge or mortgage registered against the borrower's home, ranked behind or alongside any outside lender with their consent, protects the family's position, but it needs a lawyer, the outside lender's agreement and careful explanation to the borrower.

                ## Milestones
                1. A policy threshold set above which a registered charge is required.
                2. The outside mortgage lender's consent obtained where needed.
                3. The charge registered and the confirmation filed in the security register.
                4. A release process agreed for when the loan is repaid.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every loan above the threshold has a registered charge recorded in the security register, with a release process agreed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set the loan size above which a registered charge is needed"
                - "Ask the lawyer to approach the outside mortgage lender for consent"
                - "Register the charge and file the confirmation"
                - "Write the release steps for when the loan is repaid"
            - name: Stress test of the family loan book
              description: |-
                ## Purpose
                A family loan book is usually concentrated in a few borrowers, a few homes and one or two family businesses, so one bad year can hit several loans at once. Running a few plain scenarios, such as a housing fall, a recession hitting member businesses or two borrowers losing jobs, shows the committee how much of the capital pool is truly at risk and whether caps need tightening.

                ## Milestones
                1. Three or four scenarios chosen to fit the family's actual loans.
                2. The effect of each scenario on repayments and the capital pool estimated.
                3. Concentrations by borrower, branch, asset and business identified.
                4. Any changes to caps or security proposed to the committee.

                ## Notes
                Start from the **Risk register** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written stress test of the loan book under at least three scenarios, with concentrations listed and any proposed cap changes sent to the committee."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick three scenarios that match the family's actual loans"
                - "Estimate missed repayments under each scenario"
                - "List concentrations by borrower, branch, asset and business"
                - "Propose any cap or security changes to the committee"
            - name: Independent audit of the family bank loan book
              description: |-
                ## Purpose
                Once the bank holds a meaningful share of the family's wealth, the funders and every branch are owed more than the administrator's word that the ledger is right. A periodic independent audit of balances, interest, agreements and security, by an accountant with no family role, catches errors and gives executors and tax authorities a reliable record.

                ## Milestones
                1. An auditor engaged with a clear scope and fee.
                2. Balances confirmed directly with a sample of borrowers by the auditor.
                3. Agreements and security documents checked against the ledger.
                4. Findings reported to the committee and every finding closed or explained.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An independent audit report on the loan book received, with every finding closed or explained in the committee minutes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask two accountants with no family role to quote for the audit"
                - "Agree the audit scope covering balances, interest, agreements and security"
                - "Give the auditor access to the ledger and loan files"
                - "Close or explain each finding at the next committee meeting"
---

# Family Bank and Member Loans

This area is for the family that already lends money to its own members, or wants to, and would rather do it on paper than on trust alone: parents helping adult children into a first home, grandparents backing a grandchild's business, or a family office asked to fund a cousin's degree. It starts with foundations (a purpose statement, an inventory of the loans already out there, a legal home, a capital pool, a committee, a lending policy and a standard agreement), then the operating routines of reconciliation, arrears, statements and reviews, the skills of reading agreements and assessing requests, product and policy decisions such as gifts versus loans and forgiveness, the dated launch and closing events, situations such as divorce, death, hardship and borrowers abroad, and finally specialist work on trust lending, registered charges, stress tests and an independent audit.

What repeats is a monthly reconciliation of repayments and a monthly arrears check, a quarterly loan book review and venture check-in, and a yearly cycle of borrower statements, rate checks, a fairness tally across branches and the annual report to the family. The Board meeting, Purchase decision, Reading queue, Risk register and Meeting notes templates pair with the loan book review, the software choice, the case study reading, the stress test and default hearings. None of this is legal or tax advice: agree every policy and agreement with the family's lawyer and tax adviser in each country involved. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
