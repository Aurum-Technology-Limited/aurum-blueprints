---
id: finance-accounting.revenue-recognition-policy
name: Revenue Recognition Policy
description: "A written revenue recognition policy built on the five-step model, with mapped performance obligations, selling price evidence, deal review before signature and the judgements auditors and investors will test."
category: business
version: 1.0.0
tags: [finance-accounting, revenue-recognition-policy, founder, manager, enterprise, ifrs-15, asc-606, performance-obligations]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - compliance-control
    - reading-queue
    - purchase-decision
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Revenue Recognition Policy
          description: "Deciding when and how revenue is recognised for contracts, milestones and bundles, documenting the policy and applying it consistently for auditors and investors."
          projects:
            - name: Revenue stream and contract type inventory
              description: |-
                ## Purpose
                Before any policy can be written you need a plain list of every way the business earns money: product sales, services, licences, support, implementation fees, rebated volume deals and anything sold through a partner. Most companies find two or three streams nobody has thought about, such as set-up fees or free pilots that convert. The inventory becomes the table of contents for the whole policy.

                ## Milestones
                1. Every revenue stream listed with its share of last year's revenue.
                2. A sample of three signed contracts attached to each stream.
                3. Each stream tagged with how it is billed and how it is delivered.
                4. Streams with unusual terms, such as acceptance clauses or rights of return, flagged for later review.

                ## Notes
                Work from the general ledger revenue accounts and the contract folder together. A stream that exists in contracts but has no ledger account is usually the one hiding a problem.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A revenue stream inventory covering every ledger revenue account, each stream with three sample contracts and its billing and delivery pattern."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export last year's revenue by ledger account and sort it by size"
                - "List every revenue stream with its billing and delivery pattern"
                - "Pull three signed contracts for each stream into one folder"
                - "Flag streams with acceptance, return or refund terms for review"
            - name: Confirming which revenue standard applies to you
              description: |-
                ## Purpose
                IFRS 15, ASC 606, the revenue section of a national small-company framework and IFRS for SMEs all agree on the broad idea but differ in detail, and a company sometimes reports under one framework locally and another for a parent or investor. Confirming in writing which framework governs your statutory accounts, and any other reporting you owe, prevents a policy built on the wrong rulebook.

                ## Milestones
                1. The framework for the statutory accounts confirmed with your accountant or auditor.
                2. Any second framework required by a parent, lender or investor identified.
                3. The specific standard or section numbers written at the top of the policy draft.
                4. Known differences between the two frameworks listed, if two apply.

                ## Notes
                This is a question for your accountant or auditor, not a choice to make alone. Smaller entities may have simplifications available; ask before assuming the full standard applies.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note naming the revenue standard for statutory reporting and any second framework, confirmed by the accountant or auditor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check last year's accounts for the framework named in the basis of preparation"
                - "Ask your accountant or auditor to confirm the framework in writing"
                - "Ask lenders and investors whether they require reporting under a different framework"
                - "Write the governing standard at the top of the policy draft"
            - name: Five-step model applied to your main contract
              description: |-
                ## Purpose
                The five steps are identify the contract, identify the performance obligations, set the transaction price, allocate it, and recognise revenue as each obligation is satisfied. Reading them in the abstract teaches little; walking your largest standard contract through all five, clause by clause, shows where your real judgements sit and gives the policy its first worked example.

                ## Milestones
                1. Your highest-value standard contract chosen and annotated against each of the five steps.
                2. The clauses that drive each step quoted beside the conclusion they support.
                3. The open questions found during the walkthrough listed for your adviser.
                4. A two-page worked example ready to sit in the policy appendix.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-page five-step walkthrough of the main contract, with quoted clauses for each step and a list of open questions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose the standard contract that brings in the most revenue"
                - "Read the five steps in the standard's own wording once end to end"
                - "Annotate the contract with the clause that answers each step"
                - "Write up the walkthrough as a two-page worked example"
            - name: Written revenue recognition policy, first full draft
              description: |-
                ## Purpose
                Auditors, acquirers and new finance hires all ask for the written policy, and in many companies it does not exist beyond a sentence in the accounts. A policy of eight to fifteen pages, organised by revenue stream with the five steps answered for each, turns tribal knowledge into something that can be applied the same way by anyone.

                ## Milestones
                1. A policy structure agreed: scope, framework, definitions, one section per stream, judgements, controls.
                2. Each revenue stream section completed with its five-step conclusions.
                3. Key judgements and estimates set out separately with their rationale.
                4. The draft reviewed by your accountant or auditor and their comments resolved.
                5. Version 1.0 approved and stored with an owner and review date.

                ## Notes
                Write for a capable stranger, not for yourself. If a section only makes sense with the history explained, add the history.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved version 1.0 revenue recognition policy covering every revenue stream, with a named owner and a review date."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draft the policy outline with one section per revenue stream"
                - "Ask the agent to turn the stream inventory into first-draft section headings"
                - "Write the five-step conclusions for the two largest streams first"
                - "Send the full draft to your accountant or auditor for comment"
                - "Record approval, owner and next review date on the cover page"
            - name: When a contract exists for revenue purposes
              description: |-
                ## Purpose
                Revenue cannot start until there is an enforceable contract: approved by both sides, with identifiable rights and payment terms, commercial substance and collection that is probable. Verbal agreements, unsigned order forms, side letters and framework agreements without purchase orders all test this, and the answer changes when revenue may begin.

                ## Milestones
                1. The contract existence criteria written in plain language for your business.
                2. A rule agreed for how signed order forms, purchase orders and framework agreements interact.
                3. A position recorded on side letters and email amendments.
                4. A collectability check defined for new customers before revenue starts.

                ## Notes
                Side letters are the commonest source of revenue surprises in audits. The policy should say they are not allowed without finance seeing them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A policy section stating when a contract exists, covering order forms, framework agreements, side letters and collectability, signed off by the policy owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the documents that currently trigger the start of revenue"
                - "Ask sales and legal whether side letters or email amendments are ever used"
                - "Write the contract existence test for each document type"
                - "Add a collectability check for first orders from new customers"
            - name: Performance obligation catalogue by product and service
              description: |-
                ## Purpose
                Whether set-up, training, hardware, support and updates are separate promises or one combined service decides how much revenue lands in each month. A catalogue that lists every item you sell and states, with reasons, whether it is distinct, gives the deal desk and the billing team one answer to apply rather than a fresh debate on every contract.

                ## Milestones
                1. Every product, service and fee on the price list entered in the catalogue.
                2. Each item assessed as distinct or combined, with the reason in one or two sentences.
                3. Items that are a series of similar services, such as monthly support, identified.
                4. The catalogue approved by the policy owner and linked from the policy.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A catalogue covering every price list item, each marked distinct or combined with a written reason, approved and linked from the policy."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Copy the current price list into a catalogue sheet"
                - "Mark each item distinct or combined and write the reason"
                - "Ask delivery leads whether any item is useless without another"
                - "Add new price list items to the catalogue before they are sold @recurring(quarterly)"
            - name: Standalone selling price evidence pack
              description: |-
                ## Purpose
                When a contract bundles several obligations, the price has to be split using each one's standalone selling price, and auditors will ask what that price is based on. Observable prices from items sold separately are best; where they do not exist, an adjusted market or cost-plus estimate needs a written method and data behind it.

                ## Milestones
                1. Each performance obligation matched to an estimation method: observable price, adjusted market, cost plus margin or residual.
                2. Twelve months of standalone sales analysed for items that are sold on their own.
                3. Ranges and point estimates set for each obligation, with the data source noted.
                4. The method and estimates reviewed by your auditor or adviser.
                5. A date set for refreshing the estimates each year.

                ## Notes
                The residual approach is only acceptable in narrow circumstances. Check with your adviser before relying on it.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An evidence pack stating a standalone selling price, method and data source for every performance obligation, reviewed by the auditor or adviser."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List which obligations are ever sold on their own"
                - "Extract twelve months of standalone sale prices for those items"
                - "Write the estimation method for obligations with no standalone sales"
                - "Refresh the standalone selling price estimates from the latest year of sales @recurring(yearly)"
            - name: Over time or point in time, decided per obligation
              description: |-
                ## Purpose
                An obligation is satisfied over time only if one of three tests is met: the customer benefits as you perform, you enhance an asset the customer controls, or you create something with no alternative use and have a right to payment for work done. Settling this for each catalogue item, in writing, decides whether revenue builds month by month or arrives on a single date.

                ## Milestones
                1. Each performance obligation tested against the three over-time criteria.
                2. The contract clauses on right to payment and termination checked for obligations that rely on the third test.
                3. A point of control transfer named for every point-in-time obligation: delivery, acceptance or another event.
                4. The conclusions added to the catalogue and the policy.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every performance obligation in the catalogue carries a recorded over-time or point-in-time conclusion, with the supporting clause referenced."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Add an over time or point in time column to the obligation catalogue"
                - "Check termination clauses for a right to payment for work done"
                - "Name the control transfer event for each point in time item"
                - "Ask your auditor to review the two closest calls"
            - name: Revenue judgements risk register
              description: |-
                ## Purpose
                Revenue is the area auditors presume carries fraud risk, and the danger usually sits in a handful of judgements: selling price estimates, progress measures, variable consideration and principal or agent calls. Keeping those judgements in one register, each with its sensitivity and owner, shows where a wrong answer would move the numbers most.

                ## Milestones
                1. Every significant revenue judgement and estimate listed.
                2. Each one scored for how much revenue would move if it were wrong.
                3. An owner and a mitigating control named for each entry.
                4. The register reviewed with the auditor at planning.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register listing every significant revenue judgement with a sensitivity estimate, owner and control, reviewed each quarter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the register from the risk register template"
                - "List every revenue judgement the policy draft relies on"
                - "Estimate how much annual revenue would move if each judgement were wrong"
                - "Review the register scores and owners with the finance lead @recurring(quarterly)"
            - name: Policy owner, approvers and change control
              description: |-
                ## Purpose
                A policy anyone can edit is a policy nobody can rely on. Naming one owner, the person who approves changes (often the finance director, with the audit committee for significant ones) and a short change log means every interpretation can be traced to a decision and a date, which is exactly what reviewers look for.

                ## Milestones
                1. A single policy owner named and accepted.
                2. Approval levels written down for minor and significant policy changes.
                3. A change log started with version, date, change and approver.
                4. The policy stored in one controlled location with old versions retained.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named policy owner, written approval levels and a change log with at least the version 1.0 entry, stored in one controlled location."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree who owns the revenue policy and confirm it in writing"
                - "Define which changes need finance director or audit committee approval"
                - "Start a change log at the back of the policy"
                - "Move the policy to one shared location and archive old copies"
            - name: Weekly deal desk revenue review
              description: |-
                ## Purpose
                The cheapest time to fix a revenue problem is before the contract is signed, when a sales lead can still drop a free extra month, a vague acceptance clause or a promise of future features. A short weekly review of deals above a threshold, run with sales operations, catches these terms while they are still negotiable.

                ## Milestones
                1. A deal size or term threshold set for finance review.
                2. A one-page checklist for reviewers covering obligations, pricing, acceptance and non-standard terms.
                3. A weekly slot agreed with sales operations.
                4. Every qualifying deal for a quarter reviewed before signature, with outcomes noted.

                ## Notes
                Start from the **Meeting notes** template for each session. Keep the review to thirty minutes; anything bigger becomes an escalation.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full quarter in which every deal over the threshold was reviewed by finance before signature, with notes kept for each session."
                cadence: rolling
              tasks:
                - "Agree the deal threshold for finance review with the sales lead"
                - "Write the one-page deal review checklist"
                - "Run the deal desk review of pending contracts over the threshold @recurring(weekly:tue)"
                - "Record the revenue conclusion for each reviewed deal in the session notes"
            - name: Non-standard terms escalation route
              description: |-
                ## Purpose
                Some terms need more than a quick weekly look: extended payment terms beyond a year, refund rights, most favoured customer clauses, consignment or customer-specific acceptance tests. A written escalation route with a response time means sales knows who decides and finance is not ambushed at quarter end.

                ## Milestones
                1. A list of terms that always require escalation.
                2. A named decision maker and a response time for each term type.
                3. An escalation log recording the term, the decision and its revenue effect.
                4. The route shared with sales, legal and deal desk reviewers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An escalation log in use, with every escalated term showing a decision, decision maker and revenue effect within the agreed response time."
                cadence: rolling
              tasks:
                - "List the contract terms that always need escalation"
                - "Name the decision maker and response time for each term"
                - "Send the escalation route to sales and legal"
                - "Review the escalation log for open items and patterns @recurring(monthly:12)"
            - name: Monthly revenue schedule tie-out
              description: |-
                ## Purpose
                A revenue schedule that does not agree to the ledger is worse than none, because it gives false comfort. Each month the contract-level schedule should reconcile to revenue in the ledger and to billing, with every difference explained, so that the figure in the management accounts is one you can defend line by line.

                ## Milestones
                1. A contract-level schedule showing revenue recognised per contract per month.
                2. A three-way tie-out of schedule, ledger revenue and billing completed for the month.
                3. Every difference above the agreed threshold explained or corrected.
                4. Six consecutive monthly tie-outs signed off by a reviewer.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months in which the revenue schedule, ledger and billing were tied out and signed off, with differences explained."
                cadence: rolling
              tasks:
                - "Set the difference threshold that needs a written explanation"
                - "Tie out the revenue schedule to the ledger and billing for last month @recurring(monthly:4)"
                - "Explain or correct each difference above the threshold"
                - "Get the tie-out reviewed and initialled by a second person"
            - name: Contract asset and contract liability roll-forward
              description: |-
                ## Purpose
                Unbilled revenue and income received in advance are where recognition and billing part ways, and they are the balances auditors test hardest. A monthly roll-forward, opening balance plus additions less releases equals closing balance, by contract, shows that every movement has a cause and that nothing old is quietly sitting there.

                ## Milestones
                1. Contract asset and contract liability balances split by customer contract.
                2. A roll-forward format with opening, billed, recognised and closing columns.
                3. Balances older than six months reviewed and explained.
                4. The roll-forward agreeing to the balance sheet each month for a quarter.

                ## Notes
                Subscription deferred revenue has its own area. Use this roll-forward for project, milestone and bundled contracts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarter of monthly roll-forwards agreeing to the balance sheet, with every balance over six months old explained."
                cadence: rolling
              tasks:
                - "Split the unbilled and advance income balances by contract"
                - "Build the roll-forward with opening, billed, recognised and closing columns"
                - "Update the contract balance roll-forward and agree it to the balance sheet @recurring(monthly:6)"
                - "Investigate any contract balance older than six months"
            - name: Delivery and acceptance evidence sampling
              description: |-
                ## Purpose
                Point-in-time revenue depends on proof that control passed: a signed delivery note, a carrier record, a customer acceptance email. Sampling a handful of transactions either side of each month end checks that the evidence exists and is dated in the right period, long before an auditor picks the same transactions.

                ## Milestones
                1. The acceptable evidence for each point-in-time stream listed.
                2. A sample size agreed, such as five transactions either side of month end.
                3. Each sampled item checked against its evidence and the period it was recorded in.
                4. Exceptions corrected and their cause fed back to the team that created them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly samples completed for six months, each item matched to dated control transfer evidence, with exceptions corrected."
                cadence: rolling
              tasks:
                - "Write down the acceptable control transfer evidence for each stream"
                - "Sample transactions either side of month end and check their evidence @recurring(monthly:28)"
                - "Correct any sale recorded in the wrong period"
                - "Tell the team that produced each exception what went wrong"
            - name: Quarterly variable consideration estimate
              description: |-
                ## Purpose
                Volume rebates, performance bonuses, penalties, price concessions and rights of return all make the transaction price uncertain. Revenue can only include variable amounts to the extent a significant reversal is highly unlikely, so the estimate and the constraint need refreshing every quarter against what actually happened.

                ## Milestones
                1. Every contract with variable consideration listed with its type.
                2. An estimation method chosen per type: expected value or most likely amount.
                3. The constraint applied and the reasoning recorded.
                4. Last quarter's estimates compared with actual outcomes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly estimates recorded, each with method, constraint reasoning and a comparison of the previous estimate with the actual outcome."
                cadence: rolling
              tasks:
                - "List every contract with rebates, bonuses, penalties or return rights"
                - "Choose expected value or most likely amount for each type"
                - "Re-estimate variable consideration and compare last quarter's estimate with actuals @recurring(quarterly)"
                - "Record why the constraint was or was not applied"
            - name: Revenue control testing each quarter
              description: |-
                ## Purpose
                Controls written in a policy only matter if someone checks they ran. Testing the key revenue controls each quarter, such as deal desk sign-off, schedule tie-outs and manual journal review, gives evidence that the policy is applied in practice and finds gaps before an auditor or acquirer does.

                ## Milestones
                1. Four to six key revenue controls written with owner, frequency and evidence.
                2. A test approach for each control: sample size and what passing looks like.
                3. The first quarter's tests completed and recorded.
                4. Failed tests turned into actions with owners and dates.

                ## Notes
                Start from the **Compliance control** template for each control.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive quarters of documented tests for every key revenue control, with each failure linked to an action and owner."
                cadence: cyclic
              tasks:
                - "Write up each key revenue control from the compliance control template"
                - "Set the sample size and pass condition for each control"
                - "Test the key revenue controls and record results @recurring(quarterly)"
                - "Assign an owner and date to every failed control"
            - name: Quarterly revenue judgements memo
              description: |-
                ## Purpose
                Every quarter brings a few contracts that need a real call: an unusual bundle, a modification, a principal or agent question. A short memo written at the time, setting out the facts, the guidance considered and the conclusion, is far more convincing to an auditor than a reconstruction months later.

                ## Milestones
                1. A memo format with facts, relevant guidance, alternatives considered and conclusion.
                2. Each significant contract judgement in the quarter written up.
                3. The memo reviewed and signed by the policy owner.
                4. Memos filed in one place and indexed by contract.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A signed judgements memo for each quarter, covering every significant contract judgement made in that quarter."
                cadence: cyclic
              tasks:
                - "Create a memo format with facts, guidance, alternatives and conclusion"
                - "Write up the quarter's significant contract judgements @recurring(quarterly)"
                - "Have the policy owner review and sign the memo"
                - "File each memo in the index by contract name"
            - name: Annual revenue policy refresh
              description: |-
                ## Purpose
                Businesses add products, change pricing and win larger customers faster than policies are updated, and a policy that describes last year's offering is quietly wrong. A yearly refresh against the current price list, contract templates and any new guidance keeps the policy matching how the company actually sells.

                ## Milestones
                1. The policy compared line by line with the current price list and contract templates.
                2. New streams, obligations and judgements added.
                3. Changes in standards or interpretations since the last review checked with your adviser.
                4. The refreshed version approved and logged in the change log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A refreshed policy version approved within twelve months of the previous one, with every change recorded in the change log."
                cadence: cyclic
              tasks:
                - "Compare the policy with the current price list and contract templates @recurring(yearly)"
                - "Ask your adviser about any standard or interpretation changes this year"
                - "Draft the updates and mark them for the approver"
                - "Log the approved changes and publish the new version"
            - name: Contract modification log
              description: |-
                ## Purpose
                Upgrades, extra scope, price reductions and extensions are each accounted for in one of three ways: as a separate new contract, as a termination and new contract, or as a catch-up adjustment to the existing one. Logging every modification and the treatment chosen keeps these from being processed as simple invoice changes.

                ## Milestones
                1. A log capturing date, contract, change, price effect and treatment.
                2. A decision tree for the three treatments written into the policy.
                3. All modifications from the last six months entered retrospectively.
                4. A monthly review of new entries in place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A modification log with every change from the last six months entered, each showing its treatment, and reviewed monthly."
                cadence: rolling
              tasks:
                - "Set up the modification log with date, change, price effect and treatment"
                - "Write the decision tree for the three modification treatments"
                - "Enter the last six months of contract changes"
                - "Review new contract modifications and confirm their treatment @recurring(monthly:18)"
            - name: Principal versus agent assessment practice
              description: |-
                ## Purpose
                Marketplaces, resellers, agencies passing on media costs and businesses using subcontractors all face the same question: do you control the goods or service before the customer gets it? The answer decides whether revenue is gross or only the commission, which can change reported revenue several times over while profit stays the same.

                ## Milestones
                1. The control indicators studied: primary responsibility, inventory risk and pricing discretion.
                2. Every arrangement involving a third party listed.
                3. Each arrangement assessed with a written conclusion of principal or agent.
                4. The conclusions compared with how revenue is currently recorded.

                ## Notes
                Indicators support the control assessment; they are not a scorecard. One strong indicator can outweigh two weak ones.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written principal or agent conclusion for every third-party arrangement, compared with the current gross or net recording."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the standard's principal versus agent guidance and illustrative examples"
                - "List every arrangement where a third party delivers part of the sale"
                - "Write a principal or agent conclusion for each arrangement"
                - "Check whether current gross or net recording matches each conclusion"
            - name: Measuring progress with input and output methods
              description: |-
                ## Purpose
                Over-time revenue needs a measure of progress, and the choice between costs incurred, hours worked, milestones reached or units delivered can move revenue between quarters. Learning how each method behaves, and when costs such as uninstalled materials must be excluded, lets you pick one per stream and apply it consistently.

                ## Milestones
                1. Input and output methods compared using one of your own contracts.
                2. Costs that do not reflect progress, such as wasted effort or uninstalled materials, identified.
                3. A method chosen for each over-time stream with the reason.
                4. A worked example added to the policy appendix.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A chosen progress measure for each over-time stream, with reasons and a worked example in the policy appendix."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick one over-time contract and calculate progress three different ways"
                - "List the costs that should be excluded from a cost-based measure"
                - "Choose a progress method for each over-time stream"
                - "Add the worked example to the policy appendix"
            - name: Variable consideration and the constraint, worked examples
              description: |-
                ## Purpose
                Optimism usually leaks into revenue through the constraint on variable consideration, especially on performance bonuses and sales-based targets. Working through a few realistic cases, including one where history is thin and one where the outcome depends on factors outside your control, builds the judgement needed before the quarterly estimates start.

                ## Milestones
                1. Three worked examples based on your own rebate, bonus or penalty terms.
                2. The factors that increase reversal risk listed for your business.
                3. A rule of thumb for when there is too little history to include an amount.
                4. The examples reviewed by your adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three adviser-reviewed worked examples of variable consideration and the constraint, based on the company's own contract terms."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose three contracts with different kinds of variable pay"
                - "Work through each with both estimation methods"
                - "List the factors that make a reversal more likely for your customers"
                - "Send the examples to your adviser for comment"
            - name: Significant financing component check
              description: |-
                ## Purpose
                When a customer pays well over a year before or after delivery, part of the price may really be interest, and revenue has to be adjusted for it. A practical expedient often applies where the gap is a year or less, so the job is to find the contracts outside it and decide, with your adviser, whether the effect matters.

                ## Milestones
                1. The timing gap between payment and delivery measured for each stream.
                2. Contracts with a gap over twelve months listed.
                3. Reasons other than financing for the timing, if any, recorded.
                4. A conclusion on whether a financing adjustment is needed, reviewed by your adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A recorded conclusion on significant financing for every contract with more than twelve months between payment and delivery."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure the usual gap between payment and delivery for each stream"
                - "List contracts where the gap exceeds twelve months"
                - "Note any non-financing reason for the payment timing"
                - "Agree the conclusion with your adviser and record it"
            - name: Licences of intellectual property, access or use
              description: |-
                ## Purpose
                Software, content, brand and patent licences fall into two camps: a right to access intellectual property that changes over the licence term, recognised over time, or a right to use it as it stands, usually recognised when the licence starts. Sales-based royalties have their own exception, so licensors need to understand all three before writing that section of the policy.

                ## Milestones
                1. Every licence the company grants listed with its term and payment structure.
                2. Each licence classified as right to access or right to use, with the reason.
                3. Sales or usage-based royalties identified and their recognition timing set out.
                4. The licence section of the policy drafted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every licence granted by the company classified as access or use, with royalty timing addressed and a drafted policy section."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every licence the company grants and how it is paid for"
                - "Read the licensing guidance and its illustrative examples"
                - "Classify each licence as right to access or right to use"
                - "Draft the licence section of the policy"
            - name: Warranties, returns and refund liabilities
              description: |-
                ## Purpose
                A standard assurance warranty is a cost provision, but an extended or service-type warranty is a separate obligation with its own revenue. Return rights mean some revenue is never earned. Knowing which of your terms fall where, and how returns history feeds a refund liability, stops revenue being booked on goods that are likely to come back.

                ## Milestones
                1. Every warranty and return term offered listed by product.
                2. Each warranty classed as assurance-type or service-type, with the reason.
                3. Twelve months of returns analysed to support a refund liability estimate.
                4. The approach written into the policy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A policy section classifying every warranty, with a returns-based refund liability method supported by twelve months of data."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List each warranty and returns term by product"
                - "Classify each warranty as assurance-type or service-type"
                - "Pull twelve months of returns and refunds by product"
                - "Write the warranty and returns section of the policy"
            - name: Reading revenue notes in peer annual reports
              description: |-
                ## Purpose
                Listed peers publish their revenue policies, judgements and disaggregation every year, and they are free benchmarks for how similar contracts are treated. Reading a peer's revenue note each month, and recording what they decided and how they explained it, builds expertise faster than any course and gives you precedents to cite.

                ## Milestones
                1. Eight to twelve listed peers or comparable companies chosen.
                2. A reading list of their latest annual reports kept in one place.
                3. Each revenue note summarised: streams, timing, key judgements and disclosures.
                4. Differences from your own policy noted for the next refresh.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Revenue notes from at least eight comparable companies summarised, with differences from the company's own policy listed."
                cadence: rolling
              tasks:
                - "Choose eight listed companies with business models like yours"
                - "Add their latest annual reports to a reading queue"
                - "Read one peer revenue note and summarise its judgements @recurring(monthly:15)"
                - "List the differences from your policy for the next refresh"
            - name: Sales contract clauses that support clear recognition
              description: |-
                ## Purpose
                Many revenue headaches start with contract wording: acceptance tests with no deadline, delivery terms that leave control unclear, termination rights that remove any right to payment. Agreeing a short set of standard clauses with legal, written so the accounting answer is obvious, removes judgement from thousands of future contracts.

                ## Milestones
                1. The clauses causing the most revenue debate listed from deal desk notes.
                2. Replacement wording drafted with legal for acceptance, delivery, termination and payment.
                3. The revenue effect of each new clause confirmed against the policy.
                4. The standard contract template updated and old versions withdrawn.

                ## Notes
                Legal owns the wording. Your job is to explain what the accounting needs and test the draft against the policy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An updated standard contract template with revised acceptance, delivery, termination and payment clauses, agreed by legal and finance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the five clauses that caused most debate at deal desk"
                - "Explain to legal what each clause needs to make clear"
                - "Test legal's draft wording against the policy"
                - "Withdraw old contract templates once the new one is live"
            - name: Sales commission capitalisation schedule
              description: |-
                ## Purpose
                Incremental costs of winning a contract, usually sales commissions, are capitalised and spread over the period the customer is expected to benefit, unless a practical expedient for short periods applies. A schedule by contract, with the amortisation period justified, puts these costs where the standard expects and avoids a lumpy cost line.

                ## Milestones
                1. Commission plans reviewed to identify costs that only arise if a contract is won.
                2. An amortisation period set for each stream, with the reasoning recorded.
                3. A schedule built listing capitalised amounts and monthly amortisation.
                4. The schedule agreeing to the ledger balance.

                ## Notes
                Salaries and bonuses paid regardless of winning a deal are not incremental. Check the policy choice on the short-period expedient with your adviser.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A commission capitalisation schedule agreeing to the ledger, with an amortisation period justified for each revenue stream."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the current commission plans and mark which costs are incremental"
                - "Set and justify an amortisation period for each stream"
                - "Build the capitalisation and amortisation schedule"
                - "Post the commission amortisation and agree the schedule to the ledger @recurring(monthly:9)"
            - name: Bundle allocation model for discounted packages
              description: |-
                ## Purpose
                Discounts on bundles must be spread across the obligations in proportion to their standalone selling prices, unless there is clear evidence the discount belongs to one part. A small model that takes a contract's items and price and returns the allocation removes arithmetic errors and makes every allocation reproducible.

                ## Milestones
                1. A model that accepts items, quantities and contract price and returns allocated revenue.
                2. Standalone selling prices pulled from the evidence pack, not typed in.
                3. The model tested on five real contracts and checked by hand.
                4. The model stored with version control and linked from the policy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bundle allocation model tested on five real contracts with matching hand calculations, linked from the policy."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the inputs and outputs the allocation model needs"
                - "Link the model to the standalone selling price evidence pack"
                - "Test the model on five contracts and compare with hand calculations"
                - "Lock the formulas and store the model with a version number"
            - name: Milestone billing versus recognition gap analysis
              description: |-
                ## Purpose
                Project businesses often bill on milestones that were negotiated for cash flow, not to match delivery, so recognising revenue on invoice can be months out. Comparing billing milestones with actual progress on live contracts shows the size of the gap and whether the books currently follow invoices instead of performance.

                ## Milestones
                1. Live milestone contracts listed with billed amounts and estimated progress.
                2. Revenue under the policy compared with revenue on an invoice basis for each.
                3. The total difference quantified and explained.
                4. A decision recorded on any correction or process change needed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A gap analysis for all live milestone contracts quantifying policy revenue against invoiced revenue, with a recorded decision on corrections."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List live milestone contracts with billed to date and percent complete"
                - "Calculate revenue under the policy for each contract"
                - "Total the difference against invoiced revenue"
                - "Agree any correction with the finance lead and auditor"
            - name: Revenue subledger or spreadsheet, choosing the tool
              description: |-
                ## Purpose
                Spreadsheets work for a few dozen contracts but break down with modifications, bundles and hundreds of schedules. Deciding deliberately when to move to a revenue module or subledger, using your contract volume and complexity rather than a vendor demo, avoids both a premature system and a spreadsheet nobody trusts.

                ## Milestones
                1. Contract volume, modification rate and bundle count measured.
                2. Requirements written: schedules, allocation, modifications, audit trail and reporting.
                3. Two or three options, including staying on spreadsheets, scored against them.
                4. A decision recorded with the volume that would trigger a revisit.

                ## Notes
                Start from the **Purchase decision** template. General accounting system changes belong to software implementation; this choice is only about the revenue engine.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool decision for revenue schedules, scoring at least two options against written requirements and naming a revisit trigger."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count contracts, modifications and bundles from the last twelve months"
                - "Write the requirements for revenue schedules and audit trail"
                - "Score staying on spreadsheets against two system options"
                - "Record the decision and the volume that would trigger a revisit"
            - name: Loss-making contract identification
              description: |-
                ## Purpose
                Fixed-price contracts can turn into losses when costs overrun, and the expected loss usually has to be provided for as soon as it becomes apparent, not as the work is done. A regular check of estimated costs to complete against remaining revenue on fixed-price work catches these early and stops profits being overstated.

                ## Milestones
                1. Every fixed-price or capped contract listed with remaining revenue.
                2. Estimated costs to complete obtained from project leads.
                3. Contracts where costs exceed revenue identified and quantified.
                4. The applicable guidance and provision approach agreed with your adviser.

                ## Notes
                Different frameworks place this requirement in different standards. Confirm which applies to you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A quarterly review of every fixed-price contract's cost to complete, with any expected loss quantified and treatment agreed."
                cadence: rolling
              tasks:
                - "List fixed-price contracts with remaining revenue"
                - "Ask project leads for estimated costs to complete"
                - "Compare remaining revenue with costs to complete on fixed-price work @recurring(quarterly)"
                - "Agree the treatment of any expected loss with your adviser"
            - name: Bill-and-hold and consignment arrangements review
              description: |-
                ## Purpose
                Goods invoiced but held in your warehouse, or shipped to a distributor who only pays when they sell, are classic places where revenue is recognised too early. Each arrangement has specific conditions for control to pass, and checking every live one against them protects the most scrutinised line in the accounts.

                ## Milestones
                1. All bill-and-hold, consignment and sale-or-return arrangements listed.
                2. Each assessed against the conditions for control transfer.
                3. Arrangements that fail the conditions moved to the correct timing.
                4. A rule added to the policy for setting up new arrangements.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every live bill-and-hold, consignment or sale-or-return arrangement assessed in writing, with any timing errors corrected."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask operations for goods invoiced but still in your warehouse"
                - "List distributors that pay only when they sell on"
                - "Assess each arrangement against the control transfer conditions"
                - "Add a rule for approving new bill-and-hold arrangements"
            - name: Customer options and material rights review
              description: |-
                ## Purpose
                Loyalty points, renewal discounts, free future upgrades and volume tiers can give customers a material right: a benefit they would not get without this contract, which defers part of today's revenue. Reviewing every option in your offers, with sales and marketing in the room, finds the rights hidden in promotions.

                ## Milestones
                1. Every customer option, discount voucher and loyalty scheme listed.
                2. Each assessed for whether it gives a material right.
                3. Allocation and expected redemption estimated for any material right.
                4. Expected unused points or vouchers reviewed against actual redemption.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written material right assessment for every customer option and loyalty scheme, with redemption estimates compared to actuals."
                cadence: rolling
              tasks:
                - "Ask marketing for every active promotion, voucher and loyalty scheme"
                - "Assess each option for a material right"
                - "Estimate the expected redemption rate for any material right"
                - "Compare expected and actual redemption of loyalty points and vouchers @recurring(quarterly)"
            - name: Payments to customers, listing fees and co-op marketing
              description: |-
                ## Purpose
                Slotting fees, listing fees, co-operative marketing contributions and coupons paid to retailers usually reduce revenue rather than count as marketing expense, unless you receive a distinct good or service at fair value. Food, consumer goods and app businesses selling through retailers or platforms often book these wrongly.

                ## Milestones
                1. Every payment to a customer or a customer's customer listed for the year.
                2. Each tested for whether a distinct good or service was received in return.
                3. Payments that are price reductions reclassified against revenue.
                4. A coding rule set up so future payments land in the right place.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "All payments to customers for the year assessed, with price reductions netted against revenue and a coding rule in place."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search supplier payments for amounts paid to customers"
                - "Test each payment for a distinct service received"
                - "Reclassify price reductions against revenue"
                - "Set up a coding rule for future customer payments"
            - name: Auditor walkthrough of the revenue process
              description: |-
                ## Purpose
                Almost every audit treats revenue as a significant risk, so the auditor will walk one transaction from contract to cash and test the controls along the way. Preparing that walkthrough in advance, with the process map, a sample contract and evidence at each step, shortens fieldwork and avoids findings that stem from poor explanation.

                ## Milestones
                1. A one-page process map from signed contract to recognised revenue to cash.
                2. A sample transaction prepared with evidence at every step.
                3. Control owners briefed and available on the walkthrough day.
                4. Auditor questions and follow-ups recorded and closed.

                ## Notes
                General audit preparation sits elsewhere. This project is only the revenue walkthrough.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A revenue walkthrough completed with the auditor using a prepared process map and sample, with all follow-up questions closed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draw the contract to cash process on one page"
                - "Pick a sample transaction and gather evidence for each step"
                - "Brief control owners on what the auditor will ask"
                - "Close every walkthrough follow-up question in writing"
            - name: Investor due diligence revenue pack
              description: |-
                ## Purpose
                Investors and acquirers test revenue quality early: whether the policy matches practice, how much revenue depends on judgement and whether any is booked ahead of delivery. A ready pack with the policy, revenue by stream, contract balances and key judgements answers the first round of questions and prevents a price chip late in the process.

                ## Milestones
                1. Policy, stream analysis, contract balance roll-forwards and judgement memos gathered.
                2. Revenue reconciled from the schedule to the statutory accounts for each period presented.
                3. Known weaknesses written up with what has been done about them.
                4. The pack reviewed by your adviser before it goes into the data room.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A revenue due diligence pack with reconciled figures for every period presented, adviser-reviewed and ready for the data room."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List the revenue documents an investor is likely to request"
                - "Reconcile schedule revenue to the accounts for each period presented"
                - "Write a short note on known weaknesses and fixes made"
                - "Ask the agent to draft answers to likely revenue questions from the pack"
            - name: Revenue assessment before a new pricing launch
              description: |-
                ## Purpose
                New bundles, usage tiers, free trials or outcome-based prices can change revenue timing without anyone in product or marketing realising it. Assessing the launch against the policy a month before go-live gives time to adjust terms, billing set-up and the forecast before customers sign.

                ## Milestones
                1. The new offer described in a page: what is promised, how it is priced and billed.
                2. The five steps applied to the new offer.
                3. Billing, contract and forecast changes listed for the launch team.
                4. The policy and obligation catalogue updated before launch.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written five-step assessment of the new offer completed before launch, with the policy and catalogue updated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask product for a one-page description of the new offer"
                - "Apply the five steps to the new offer"
                - "Send required billing and contract changes to the launch team"
                - "Update the obligation catalogue before go-live"
            - name: Transition to a new revenue framework
              description: |-
                ## Purpose
                Moving from a local framework to IFRS, adopting full standards after outgrowing small-company rules, or aligning with a new parent's reporting means restating how revenue is measured. A planned transition, with the method chosen, comparatives prepared and the effect quantified, avoids a scramble in the first year of reporting.

                ## Milestones
                1. The transition date and method confirmed with your auditor.
                2. Contracts open at transition listed and re-assessed under the new framework.
                3. The opening adjustment to retained earnings quantified.
                4. Transition disclosures drafted.
                5. Systems and schedules running under the new framework from the first reporting period.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An agreed transition method, a quantified opening adjustment and drafted transition disclosures, with schedules running on the new basis."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Confirm the transition date and permitted methods with your auditor"
                - "List every contract open at the transition date"
                - "Re-assess open contracts and quantify the opening adjustment"
                - "Draft the transition disclosure note"
            - name: Audit committee briefing on revenue judgements
              description: |-
                ## Purpose
                Boards and audit committees are responsible for the accounts, and revenue judgements are what they most need to understand. A yearly briefing on the policy, the key judgements, control test results and any changes gives directors what they need to challenge management and sign with confidence.

                ## Milestones
                1. A short paper covering policy changes, judgements, control results and open issues.
                2. The paper circulated a week before the meeting.
                3. Directors' questions and decisions minuted.
                4. Agreed actions tracked to completion.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A revenue judgements paper presented to the board or audit committee each year, with questions minuted and actions closed."
                cadence: cyclic
              tasks:
                - "Ask the company secretary when revenue can go on the committee agenda"
                - "Write the yearly revenue judgements paper for the audit committee @recurring(yearly)"
                - "Circulate the paper a week before the meeting"
                - "Track committee actions to completion"
            - name: Founder's first enterprise contract, revenue review
              description: |-
                ## Purpose
                The first large customer often arrives with its own paper: a paid pilot, acceptance testing, custom development, a big upfront payment and termination rights. Founders sign to win the logo, then find revenue cannot be recognised for months. Reviewing the draft with your accountant before signature lets you negotiate terms that match how you will actually deliver.

                ## Milestones
                1. The customer's draft contract summarised: promises, price, payment and acceptance.
                2. The revenue timing under the draft explained in plain terms.
                3. Terms that delay revenue identified with alternative wording.
                4. The signed version checked against the agreed revenue treatment.

                ## Notes
                Upfront cash is not upfront revenue. Investors will look at both, so know the difference before you report the deal.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written revenue timing assessment of the enterprise contract made before signature, and the signed version checked against it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the customer's draft on one page"
                - "Book a call with your accountant to review revenue timing before signing"
                - "List terms that delay revenue and propose alternative wording"
                - "Check the signed contract against the agreed treatment"
            - name: Moving from invoice-basis income to policy-based revenue
              description: |-
                ## Purpose
                Small companies often record revenue when they invoice, which works until there are deposits, multi-month projects or bundled services. Switching to recognition under a written policy, with a clean opening position, is often the step that makes the accounts acceptable to a lender, investor or acquirer.

                ## Milestones
                1. Contracts in progress at the switch date listed with invoiced and delivered amounts.
                2. The opening adjustment for deposits and unbilled work calculated.
                3. Ledger accounts for contract assets and liabilities set up.
                4. The first month closed on the new basis and reviewed by your accountant.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An opening adjustment posted, contract balance accounts in place and the first month closed on policy-based revenue, reviewed by the accountant."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick a switch date at the start of a month"
                - "List contracts in progress with invoiced and delivered amounts"
                - "Calculate and post the opening adjustment with your accountant"
                - "Close the first month on the new basis"
            - name: New finance manager inheriting a revenue policy
              description: |-
                ## Purpose
                Taking over revenue from a predecessor means owning judgements you did not make. Reading the policy against real contracts in the first sixty days, and listing where practice and paper disagree, lets you fix inherited issues openly rather than discover them during the audit with your name on the sign-off.

                ## Milestones
                1. The policy, memos and change log read in full.
                2. Ten recent contracts traced through the schedules against the policy.
                3. Gaps between policy and practice listed with their likely size.
                4. A remediation plan agreed with your manager.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten contracts traced against the policy within sixty days, with a gap list and an agreed remediation plan."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read the policy, judgement memos and change log"
                - "Trace ten recent contracts from signature to the revenue schedule"
                - "Ask your predecessor or the auditor about the biggest past judgements"
                - "Agree a remediation plan for the gaps with your manager"
            - name: Group-wide policy consistency across business units
              description: |-
                ## Purpose
                Large groups find the same product treated three ways in three countries because each unit wrote its own local procedures. A group policy with mandatory positions, a short list of permitted local variations and a yearly confirmation from each unit's finance lead brings the treatment into line before it surfaces at consolidation.

                ## Milestones
                1. Each business unit's current revenue practice surveyed against the group policy.
                2. Inconsistencies listed with their revenue effect.
                3. Mandatory group positions and permitted local variations published.
                4. A yearly sign-off from every unit's finance lead in place.

                ## Notes
                Consolidation mechanics and intercompany eliminations sit with group reporting. Keep this project to recognition policy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A group revenue policy with mandatory positions published, inconsistencies resolved and a signed confirmation from every business unit."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Send a short survey of revenue practice to each unit's finance lead"
                - "List inconsistencies with their revenue effect"
                - "Publish mandatory group positions and permitted variations"
                - "Collect yearly policy compliance sign-offs from every business unit @recurring(yearly)"
            - name: Revenue timing briefing for sales and delivery teams
              description: |-
                ## Purpose
                Sales staff who promise a free month, delivery leads who delay acceptance and account managers who agree a discount by email all change revenue without knowing it. A forty-minute session with real examples from your own contracts shows them which actions move revenue and when to call finance.

                ## Milestones
                1. A short deck with five real examples of terms that changed revenue timing.
                2. A one-page guide on what to send to finance and when.
                3. The session delivered to sales, delivery and account management.
                4. New joiners covered through the onboarding schedule.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A revenue timing session delivered to all sales and delivery staff, with a one-page guide and a slot in new joiner onboarding."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Pick five real contract examples that changed revenue timing"
                - "Write the one-page guide on when to call finance"
                - "Run the revenue timing session for sales and delivery staff @recurring(yearly)"
                - "Add the session to the new joiner onboarding plan"
            - name: Revenue disclosure note with disaggregation
              description: |-
                ## Purpose
                Revenue disclosures under full standards ask for more than one number: revenue split into categories that show how economic factors affect it, contract balances and their movements, remaining performance obligations and the significant judgements. Building the note from your schedules, rather than at year end from scratch, makes it consistent and auditable.

                ## Milestones
                1. Disaggregation categories chosen to match how the business is managed and discussed with investors.
                2. Contract balance movements and remaining obligations produced directly from the schedules.
                3. The significant judgements section drafted from the judgements register.
                4. The note reviewed by the auditor alongside the accounts timetable.

                ## Notes
                Smaller entities may have reduced disclosure requirements; confirm what applies before building the full note.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A revenue note with disaggregation, contract balances, remaining obligations and judgements, generated from the schedules and auditor-reviewed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose disaggregation categories that match management reporting"
                - "Produce contract balance movements from the roll-forward"
                - "Calculate remaining performance obligations from open contracts"
                - "Draft the judgements section from the risk register"
            - name: Long-term contract revenue on cost-to-cost progress
              description: |-
                ## Purpose
                Construction, engineering and large implementation contracts recognised on costs incurred depend entirely on the estimate of total costs, which shifts as the job moves. A disciplined monthly estimate-at-completion review with project managers, and catch-up adjustments when estimates change, keeps margin from swinging at the end of the job.

                ## Milestones
                1. Each long-term contract carrying a current estimate at completion.
                2. Monthly estimate reviews held with project managers.
                3. Catch-up adjustments calculated and explained whenever estimates move.
                4. Margin fade or gain tracked across the life of each contract.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly estimate-at-completion reviews for six months on every long-term contract, with catch-up adjustments explained."
                cadence: rolling
              tasks:
                - "List long-term contracts with their latest estimate at completion"
                - "Review estimates at completion with project managers @recurring(monthly:21)"
                - "Calculate catch-up adjustments for changed estimates"
                - "Track margin movement across each contract's life"
            - name: Revenue journal analytics for unusual entries
              description: |-
                ## Purpose
                Manual revenue journals, late credit notes, round-sum entries posted at quarter end and revenue posted by unusual users are the patterns auditors search for when testing management override. Running the same queries yourself each quarter, and explaining every hit, finds errors early and shows the controls are watched.

                ## Milestones
                1. Five to eight queries defined: manual revenue journals, period-end credit notes, round amounts, weekend postings, unusual users.
                2. The queries run against a full quarter of ledger data.
                3. Every hit explained with supporting evidence or corrected.
                4. Repeat patterns fed back into controls.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive quarters of revenue journal analytics run, with every flagged entry explained or corrected."
                cadence: rolling
              tasks:
                - "Write the queries for manual journals, late credit notes and round amounts"
                - "Run the revenue journal analytics on the quarter's ledger data @recurring(quarterly)"
                - "Explain or correct every flagged entry"
                - "Update controls for any pattern that repeats"
            - name: IFRS 15 and ASC 606 differences reconciliation
              description: |-
                ## Purpose
                Groups with a US parent, US investors or a dual listing may report revenue under both IFRS 15 and ASC 606. The standards are close but differ on areas such as licences, shipping and handling, collectability and some practical expedients. A maintained schedule of differences, with the amount for each, keeps the two sets of numbers explainable.

                ## Milestones
                1. The known differences between the two standards listed for your revenue streams.
                2. Each difference quantified for the latest reporting period.
                3. A reconciliation from one framework's revenue to the other prepared.
                4. The schedule reviewed by your auditor and updated each year.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A quantified reconciliation of revenue between IFRS 15 and ASC 606 for the latest period, reviewed by the auditor."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the IFRS 15 and ASC 606 differences relevant to your streams"
                - "Quantify each difference for the latest reporting period"
                - "Prepare the revenue reconciliation between the two frameworks"
                - "Ask your auditor to review the reconciliation"
---

# Revenue Recognition Policy

This area is for whoever has to answer the question every auditor and investor asks first: when, exactly, do you count a sale as revenue? It suits a founder writing the first policy before a raise, a finance manager inheriting one, and an enterprise team keeping it consistent across business units. It begins with the foundations (a map of revenue streams, the framework you report under, the five-step model applied to your main contract, a performance obligation catalogue, selling price evidence and the written policy), then the operating rhythm of deal review, schedules, roll-forwards and control tests, the technical skills behind the hard calls, the improvements and decisions that tidy contracts and models, the dated moments such as an audit walkthrough or a framework transition, situations for founders, new managers and large groups, and finally specialist work on disclosures, long-term contracts, journal analytics and dual-framework reporting.

What repeats is the evidence trail: a weekly deal review, monthly schedule tie-outs, contract balance roll-forwards, cut-off sampling and modification logs, quarterly variable consideration estimates, control tests and a judgements memo, then a yearly policy refresh and board briefing. The Risk register, Meeting notes, Compliance control, Reading queue and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
