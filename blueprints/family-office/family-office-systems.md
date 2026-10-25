---
id: family-office.family-office-systems
name: Family Office Systems
description: "A family office system stack chosen on purpose: requirements, wealth reporting, document vault, bill pay, accounting and secure messaging, wired to banks and administrators and kept reconciled."
category: personal
version: 1.0.0
tags: [family-office, family-office-systems, parent, manager, wealth-reporting, document-vault, bill-pay, family-office-technology]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - meeting-notes
    - month-end-close
    - onboarding-plan
    - risk-register
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Office Systems
          description: "Choosing family office systems: wealth reporting, document vaults, bill pay, accounting, secure messaging and links with banks and administrators."
          projects:
            - name: Inventory of every system and spreadsheet in use
              description: |-
                ## Purpose
                Before choosing anything new, the office needs a plain list of what already runs the family's affairs: the banking portals, the accountant's software, the shared drive, the spreadsheet the controller rebuilds every quarter and the messaging apps the family actually uses. Most offices find twenty or more tools once they count, several paid for twice and some that only one person can open.

                ## Milestones
                1. Every system, portal, app and key spreadsheet listed with what it does and who uses it.
                2. Each item marked with its owner, its annual cost and where its login sits.
                3. Tools that hold sensitive family data flagged separately.
                4. Duplicate or abandoned tools identified for a decision later.

                ## Notes
                Ask staff, not only managers. The real system is often a spreadsheet on one person's laptop that nobody else knows exists.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated inventory listing every system and key spreadsheet with owner, cost and data sensitivity, reviewed by the head of office."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the logins and portals you personally use for family affairs"
                - "Ask each staff member and adviser to list the tools they use for the family"
                - "Pull twelve months of card and bank charges to find software subscriptions"
                - "Mark each tool with owner, cost and whether it holds sensitive data"
            - name: Data flow map from banks and administrators
              description: |-
                ## Purpose
                Wealth data reaches a family office by many routes: daily custodian feeds, monthly PDF statements, capital call notices from fund administrators, trust company reports and the odd scanned letter. Drawing how each piece arrives, who touches it and where it ends up shows where numbers are retyped, delayed or lost, which is where most reporting errors start.

                ## Milestones
                1. Every bank, custodian, fund administrator and trust company listed as a data source.
                2. For each source, the format, frequency and receiving person recorded.
                3. Every manual rekeying step marked on the map.
                4. The three slowest or most error-prone flows named as priorities.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page data flow diagram covering every external source, with format, frequency and rekeying steps marked and three priority flows named."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every institution that sends the office statements or reports"
                - "Note the format each one uses: feed, PDF, portal download or paper"
                - "Mark each step where someone retypes a figure into another tool"
                - "Rank the flows by delay and error and pick the worst three"
            - name: Requirements list for the family office stack
              description: |-
                ## Purpose
                Vendors demonstrate what their product does best, so an office without written requirements ends up buying the best demo rather than the right tool. A requirements list split into must-have, should-have and nice-to-have, agreed by the principal and the office manager, becomes the scoring sheet for every selection in this area.

                ## Milestones
                1. Requirements grouped by reporting, documents, payments, accounting and communication.
                2. Each requirement marked must-have, should-have or nice-to-have.
                3. Constraints recorded: budget range, number of entities, currencies, users and countries.
                4. The list signed off by the principal and the head of office.

                ## Notes
                Keep must-haves to a short list. If everything is a must-have, no product will pass and the scoring stops meaning anything.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A signed requirements document with every item ranked and the constraints on entities, currencies and users stated in numbers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down the five problems the family most wants the systems to solve"
                - "Count the entities, currencies, accounts and users the stack must handle"
                - "Ask the agent to turn your notes into a ranked requirements table"
                - "Review the table with the principal and record sign-off"
            - name: System owner named for each tool
              description: |-
                ## Purpose
                Systems without an owner decay quietly: feeds break, users who left keep access, renewals arrive unread. Naming one owner and one backup for each tool, with a short list of what owning it means, turns the stack into something people are accountable for rather than something that just exists.

                ## Milestones
                1. An owner and a backup named for every system on the inventory.
                2. A one-paragraph owner duty list agreed: access, renewals, vendor contact and issues.
                3. Owners confirmed in writing and added to the inventory.
                4. Tools without a willing owner marked for retirement.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every system on the inventory has a named owner and backup who have confirmed the role in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a short paragraph describing what a system owner is responsible for"
                - "Propose an owner and backup for each tool on the inventory"
                - "Get each owner to confirm by email"
                - "Flag tools nobody will own as candidates to retire"
            - name: User roles and permissions matrix
              description: |-
                ## Purpose
                Different people should see family information differently: a parent may see everything, an adult child only their own trust, the bookkeeper the payables but not the estate plan. Writing a matrix of roles against systems and data before configuring anything prevents the common mistake of giving everyone administrator rights because it was quicker.

                ## Milestones
                1. Roles defined for principals, family members, staff, advisers and vendors.
                2. Each role mapped to the systems and data it may view, edit or approve.
                3. Data grouped into sensitivity levels such as public, internal, confidential and restricted.
                4. The matrix approved by the principal and used as the setup reference.

                ## Notes
                Design roles, not people. When someone joins or leaves, you assign or remove a role instead of rebuilding permissions by hand.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved matrix showing every role against every system with view, edit or approve rights, and four data sensitivity levels defined."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every type of person who needs any access to office systems"
                - "Group family information into four sensitivity levels"
                - "Fill in the matrix of roles against systems and rights"
                - "Walk the principal through the matrix and record approval"
            - name: Entity hierarchy and chart of accounts design
              description: |-
                ## Purpose
                Reporting and accounting tools are only as good as the structure loaded into them. A family with trusts, holding companies, partnerships and personal accounts needs an agreed hierarchy of who owns what, with percentages, and a chart of accounts shared across entities, so consolidated numbers add up and every entity can still produce its own accounts.

                ## Milestones
                1. Every entity and account placed in an ownership tree with percentages.
                2. A shared chart of accounts drafted with entity-specific additions kept to a minimum.
                3. Naming and coding conventions written for entities, accounts and asset classes.
                4. The design reviewed by the family's external accountant.

                ## Notes
                Agree the ownership tree with whoever keeps the structure chart. The systems should mirror the legal structure, not invent their own version of it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An ownership hierarchy and shared chart of accounts, with naming conventions, reviewed and accepted by the external accountant."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Get the latest legal structure chart from the family's lawyer or administrator"
                - "Draw the ownership tree with percentages for each entity"
                - "Draft a shared chart of accounts and naming conventions"
                - "Send both to the external accountant for review"
            - name: Vendor due diligence questionnaire
              description: |-
                ## Purpose
                Every system vendor will hold some of the family's most private data, so each needs the same questions answered before a contract: who owns the company, where data is hosted, which audit reports exist, how they handle breaches and what happens to the data if they are sold or fail. A standard questionnaire makes vendors comparable and leaves a record of what they promised.

                ## Milestones
                1. A questionnaire covering ownership, hosting location, security audits, breach history, subcontractors and exit terms.
                2. Scoring guidance written for each question.
                3. The questionnaire reviewed by the office's lawyer or security adviser.
                4. A filing place set up for completed questionnaires and supporting evidence.

                ## Notes
                Start from the **Vendor** template for each vendor record. Ask for evidence such as audit reports, not only yes or no answers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reviewed due diligence questionnaire with scoring guidance, ready to send to every shortlisted system vendor."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect two sample vendor security questionnaires from peers or advisers"
                - "Draft the questions on ownership, hosting, audits, breaches and exit"
                - "Add a scoring guide for each answer"
                - "Send the draft to the lawyer or security adviser for comment"
            - name: Build, buy or outsource the core platform
              description: |-
                ## Purpose
                Three paths exist: a family office can license an all-in-one platform, assemble specialist tools, or let an outsourced accountant or multi-family office run the back office on its own systems. Each path has different costs, control and dependency, and the choice shapes every other selection, so it is worth making explicitly with numbers before talking to vendors.

                ## Milestones
                1. The three paths described against the requirements list.
                2. A five-year cost estimate for each, including staff time and implementation.
                3. Control, privacy and dependency risks of each path written down.
                4. A decision recorded with the reasons, signed by the principal.

                ## Notes
                Start from the **Purchase decision** template. Implementation and staff time often cost as much as the licences over five years.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed decision choosing one platform path, backed by five-year cost estimates and a risk comparison for all three options."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Describe the all-in-one, best-of-breed and outsourced options in a page each"
                - "Estimate licence, implementation and staff costs over five years for each"
                - "List what the family would lose control of under each option"
                - "Present the comparison to the principal and record the decision"
            - name: Five-year total cost of ownership model
              description: |-
                ## Purpose
                Software quotes show a licence price, but the real cost includes implementation, data migration, integrations, training, extra users, price rises at renewal and the hours staff spend keeping it running. A simple five-year model per tool lets the office compare vendors fairly and explain the systems line to the family without surprises at year three.

                ## Milestones
                1. A cost model template with licence, implementation, integration, training and staff time lines.
                2. Contractual price rise caps and user tiers captured for each quoted tool.
                3. The model completed for the current stack as a baseline.
                4. Assumptions written beside each figure.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A five-year cost model covering the current stack and every shortlisted tool, with each assumption written next to its figure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up a cost model with a line for each type of cost over five years"
                - "Fill in the baseline for the systems the office pays for today"
                - "Ask each shortlisted vendor for renewal price caps in writing"
                - "Note the assumption behind every estimated figure"
            - name: Monthly custodian feed reconciliation
              description: |-
                ## Purpose
                Data feeds from custodians break silently: an account closes, a corporate action posts wrongly, a new account never gets mapped. Reconciling the reporting system against the bank statements each month, account by account, catches these before they reach a family report or a tax return.

                ## Milestones
                1. A reconciliation checklist listing every account and its source statement.
                2. Positions and cash agreed to statements each month, with breaks logged.
                3. Each break assigned to an owner and closed with the cause recorded.
                4. A quarterly summary of recurring breaks sent to the vendor.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every account in the reporting system is reconciled to its statement each month, with all breaks logged and closed within ten working days."
                cadence: rolling
              tasks:
                - "List every feed account with the statement it reconciles to"
                - "Reconcile positions and cash for each account to the month-end statement @recurring(monthly:8)"
                - "Send the vendor a summary of repeat feed breaks and ask for fixes @recurring(quarterly)"
                - "Record the cause of each closed break in the log"
            - name: Quarterly user access review
              description: |-
                ## Purpose
                Access grows over time and almost never shrinks: the former nanny still has the shared drive, the last auditor can still log in to the portal, a child who left the country still receives bank alerts. Reviewing every user against the permissions matrix each quarter, and checking joiners and leavers monthly, keeps access matched to who should have it.

                ## Milestones
                1. A user export pulled from every system each quarter.
                2. Each user checked against the permissions matrix and confirmed by the system owner.
                3. Leavers removed and excess rights reduced, with changes logged.
                4. A signed review record kept for each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four signed access reviews a year covering every system, with every leaver removed within five working days of departure."
                cadence: rolling
              tasks:
                - "Export the user list from each system and compare to the matrix @recurring(quarterly)"
                - "Check the joiners and leavers list against system accounts @recurring(monthly:3)"
                - "Ask each system owner to confirm or remove flagged users"
                - "File the signed review with the changes made"
            - name: Weekly bill pay approval run
              description: |-
                ## Purpose
                Household invoices, staff payroll, school fees, property bills and capital calls all need paying on time without the principal approving each one by text. A weekly approval run in the bill pay system, with thresholds, two approvers above a set amount and a fixed cut-off day, gives the family control without becoming a bottleneck.

                ## Milestones
                1. Approval thresholds and approvers set in the bill pay system by payee type and amount.
                2. A weekly cut-off and payment run day agreed with the family.
                3. Every payment above the threshold approved by two people in the system.
                4. A monthly report of payments by entity and category sent to the principal.

                ## Notes
                Set the workflow so the person who adds a new payee cannot also approve the first payment to them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All family payments go through one weekly approval run with dual approval above the agreed threshold, and a monthly payments report reaches the principal."
                cadence: rolling
              tasks:
                - "Agree payment thresholds and approvers with the principal"
                - "Prepare and release the weekly payment batch for approval @recurring(weekly:tue)"
                - "Send the principal the monthly payments report by entity @recurring(monthly:20)"
                - "Configure the rule that separates payee set-up from first approval"
            - name: Quarterly backup and data export test
              description: |-
                ## Purpose
                Cloud vendors keep backups, but a family office should be able to get its own data out in a usable form if a vendor fails, is breached or is acquired. Testing an export from each core system every quarter, and checking that the file opens and is complete, proves the data really belongs to the family.

                ## Milestones
                1. An export method recorded for every core system.
                2. A test export taken from one or more systems each quarter.
                3. Each export checked for completeness against a known total.
                4. Exports stored in a location the vendor does not control, with access limited.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each core system has had a full export tested within the last twelve months, with results recorded and the files stored outside the vendor."
                cadence: cyclic
              tasks:
                - "Find and record the export option for each core system"
                - "Run a test export from the next system on the rota and check totals @recurring(quarterly)"
                - "Store the export in the office's own encrypted archive"
                - "Log any gaps the export revealed and raise them with the vendor"
            - name: Annual vendor service review
              description: |-
                ## Purpose
                Once a contract is signed, vendor service tends to drift unless someone asks how it is going. A yearly review with each core vendor, covering uptime, support tickets, feed quality, roadmap and price, gives the office the facts it needs for renewal and makes the vendor accountable for promises made in the sale.

                ## Milestones
                1. A review agenda covering service levels, issues, roadmap, security changes and price.
                2. A year of support tickets and feed breaks summarised before each meeting.
                3. A review meeting held with each core vendor and minutes kept.
                4. Agreed actions tracked to completion.

                ## Notes
                Start from the **Meeting notes** template. Ask each vendor what changed in their ownership, hosting or subcontractors since last year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every core vendor has a review meeting each year with minutes and an action list, and actions are closed before renewal."
                cadence: cyclic
              tasks:
                - "Draft a standard agenda for vendor service reviews"
                - "Hold the yearly service review with each core vendor @recurring(yearly)"
                - "Summarise the year's support tickets before the meeting"
                - "Track agreed vendor actions until each is done"
            - name: Licence and subscription register
              description: |-
                ## Purpose
                Auto-renewing software contracts are an easy way to overpay: unused seats, notice periods missed by a week, a price rise accepted by default. A register of every licence with seat counts, renewal dates and notice periods, checked monthly, gives the office time to negotiate or cancel.

                ## Milestones
                1. Every paid tool listed with contract term, renewal date, notice period and seats.
                2. Seats in use compared with seats paid for.
                3. Renewals in the next ninety days flagged each month.
                4. A yearly true-up of seats and contracts completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register showing every licence with renewal and notice dates, checked monthly, with no renewal passing its notice date unreviewed."
                cadence: rolling
              tasks:
                - "Collect the contract or order form for each paid tool"
                - "Check the register for renewals inside ninety days @recurring(monthly:26)"
                - "Compare paid seats with active users and reduce extras @recurring(yearly)"
                - "Add notice periods for each contract to the register"
            - name: Document vault filing routine
              description: |-
                ## Purpose
                Documents help only if they land in the vault consistently, named and tagged so they can be found by entity, person and year. A weekly filing routine for the vault inbox, with a naming convention and required tags, stops the vault turning into another shared drive full of files called scan001.

                ## Milestones
                1. A naming convention and required tags agreed for vault uploads.
                2. One inbox or upload route defined for staff and advisers.
                3. The vault inbox cleared each week with every file tagged.
                4. A monthly spot check of ten random files for correct tags.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The vault inbox is empty at the end of each week and a monthly spot check finds at least nine of ten files correctly named and tagged."
                cadence: rolling
              tasks:
                - "Write the naming convention and required tags on one page"
                - "Clear the vault inbox and tag every new file @recurring(weekly:fri)"
                - "Spot check ten random vault files for correct names and tags"
                - "Tell advisers which upload route to use for family documents"
            - name: Month-end close in the accounting system
              description: |-
                ## Purpose
                Multi-entity books stay usable only if each month is closed in the same order: bank feeds matched, intercompany balances agreed, accruals posted, and entities locked. A written close checklist in the accounting system, run by the controller to a fixed day, means the family's reports reflect a finished month rather than a moving target.

                ## Milestones
                1. A close checklist written for every entity in the accounting system.
                2. Bank, card and intercompany balances reconciled each month.
                3. Periods locked after close so nobody posts into them.
                4. The close completed by the agreed working day each month.

                ## Notes
                Start from the **Month-end close** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every entity is closed and locked in the accounting system by the agreed working day for six consecutive months."
                cadence: rolling
              tasks:
                - "Write the close checklist for each entity in order"
                - "Run the month-end close for all entities and lock the periods @recurring(monthly:5)"
                - "Agree intercompany balances between entities before locking"
                - "Note any entity that missed the close day and why"
            - name: System notes and runbook for each tool
              description: |-
                ## Purpose
                Every system in a family office accumulates local knowledge: which feed is mapped by hand, which report needs a manual adjustment, who to call at the vendor. Writing a short runbook for each tool, kept in the vault, means a backup owner or a new hire can keep things running when the usual person is away.

                ## Milestones
                1. A standard runbook outline agreed: purpose, owner, admin steps, known issues, contacts.
                2. A runbook written for every core system.
                3. Each runbook tested by the backup owner doing one task from it.
                4. Runbooks stored in the vault with access limited to staff.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every core system has a runbook in the vault that its backup owner has used successfully for at least one task."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree a one-page runbook outline for all tools"
                - "Ask the agent to turn each owner's notes into a first runbook draft"
                - "Have each backup owner complete one task using the runbook"
                - "Store runbooks in the vault with staff-only access"
            - name: Weekly data quality exception queue
              description: |-
                ## Purpose
                Reporting platforms flag unpriced holdings, unmapped transactions, missing valuations and stale private asset marks, but the flags are useless if nobody clears them. Working the exception queue every week keeps the backlog small enough that month-end reports are not held up.

                ## Milestones
                1. The system's exception reports identified and saved as a queue.
                2. Exception types assigned to owners: operations, accounting or investment.
                3. The queue reviewed weekly with ageing tracked.
                4. No exception older than thirty days at month end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The exception queue is reviewed every week and holds no item older than thirty days at each month end."
                cadence: rolling
              tasks:
                - "Save the reporting system's exception reports as one view"
                - "Clear or assign every new item in the exception queue @recurring(weekly:mon)"
                - "Assign each exception type to a named owner"
                - "Escalate any item older than thirty days to the head of office"
            - name: Family help desk and issue log
              description: |-
                ## Purpose
                Requests from a parent who cannot open the portal or a spouse who cannot find a statement usually arrive as a phone call to whoever answers, and nothing is learnt from them. A simple issue log for family and staff requests, reviewed monthly, shows which systems confuse people and which fixes or training would stop the calls.

                ## Milestones
                1. One route agreed for family and staff to report system problems.
                2. Every request logged with date, person, system and resolution.
                3. A monthly review of the log done by the office manager.
                4. The top recurring issue fixed or turned into training each quarter.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "All family and staff system requests are logged with resolutions, and a monthly review names the most common issue and the action taken."
                cadence: rolling
              tasks:
                - "Set up a simple log with date, person, system, issue and fix"
                - "Tell family members the one way to report a system problem"
                - "Review the issue log and pick the most common problem @recurring(monthly:17)"
                - "Turn the top repeat issue into a fix or a short guide"
            - name: Annual systems strategy review
              description: |-
                ## Purpose
                Systems chosen three years ago were chosen for a different family: fewer entities, different assets, other people running the office. A yearly look at the whole stack against the requirements, costs, issue log and family changes decides what to keep, upgrade or replace before small frustrations turn into a rushed selection.

                ## Milestones
                1. The year's issue log, cost model and vendor reviews gathered.
                2. Each system rated keep, improve or replace.
                3. Changes in the family or office that affect requirements listed.
                4. A one-page systems plan for the coming year agreed with the principal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A one-page yearly systems plan rating every tool keep, improve or replace, agreed with the principal."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Gather the issue log, cost model and vendor review notes"
                - "Rate each system keep, improve or replace"
                - "List family and office changes that alter requirements"
                - "Present the one-page systems plan to the principal"
            - name: How reporting platforms handle private assets
              description: |-
                ## Purpose
                Listed securities flow in by feed, but private equity funds, direct deals, property, loans to family and collectibles have to be entered and valued by hand, and platforms differ widely in how well they cope. Understanding commitments, capital calls, distributions, valuation lags and look-through reporting lets the office judge a demo instead of being dazzled by it.

                ## Milestones
                1. The terms commitment, unfunded commitment, capital call, distribution and NAV explained in your own notes.
                2. The valuation lag between fund statements and month-end understood and written down.
                3. Look-through reporting and its limits described in a paragraph.
                4. A list of questions on private assets ready for every reporting vendor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note explaining private asset reporting terms and lags, with at least eight vendor questions drawn from it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read one fund capital account statement line by line"
                - "Ask the controller to explain how private valuations reach the report today"
                - "Write notes on commitments, calls, distributions and valuation lag"
                - "Draft eight questions on private assets for reporting vendors"
            - name: Multi-entity and multi-currency accounting basics
              description: |-
                ## Purpose
                An office manager moving from a single company to a family with trusts, holding companies and accounts in several currencies meets new problems: intercompany loans, consolidation, revaluation of foreign balances and different year ends. Learning the basics before choosing an accounting system makes the requirements realistic and the accountant's questions easier to answer.

                ## Milestones
                1. Notes on intercompany entries, eliminations and consolidation written.
                2. Functional and reporting currencies explained for the family's entities.
                3. Each entity's year end and reporting currency listed.
                4. Questions for accounting vendors on multi-entity handling drafted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes on consolidation and currency handling, plus a list of every entity's year end and currency, reviewed by the accountant."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List each entity with its year end and reporting currency"
                - "Work through one intercompany loan entry with the accountant"
                - "Write notes on revaluing foreign currency balances"
                - "Draft accounting vendor questions on consolidation"
            - name: Reading a vendor's SOC 1 and SOC 2 reports
              description: |-
                ## Purpose
                Serious system vendors commission independent audits of their controls and will share the reports under a confidentiality agreement, but the reports run to dozens of pages and the exceptions are easy to miss. Learning how to read the scope, the period covered, the exceptions and the user controls the vendor expects the office to run turns a box-ticking request into real assurance.

                ## Milestones
                1. The difference between SOC 1 and SOC 2, and type 1 and type 2, written in notes.
                2. One real report read with scope, period and exceptions highlighted.
                3. The complementary user controls the office must run listed.
                4. A short checklist for reviewing future reports.

                ## Notes
                Report names differ by country and standard. The same reading habits apply to ISO 27001 certificates and their scope statements.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A review checklist for audit reports, tested on one real vendor report with its exceptions and user controls recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask a current vendor for its latest controls audit report"
                - "Highlight the scope, audit period and any exceptions"
                - "List the user controls the report says the office must run"
                - "Write a one-page checklist for reading future reports"
            - name: Learning the document vault's permission model
              description: |-
                ## Purpose
                Vaults differ in how they control access: by folder, by tag, by entity, by individual document, with or without watermarking and download limits. Understanding exactly how your chosen vault applies permissions, and testing it with dummy accounts, avoids the common surprise of a child seeing a sibling's trust deed because a folder inherited the wrong rights.

                ## Milestones
                1. How the vault inherits permissions written down in plain words.
                2. Test accounts created for three roles from the permissions matrix.
                3. Each test account checked against a list of documents it should and should not see.
                4. Settings for watermarking, downloads and sharing links recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three role test accounts confirm the vault shows exactly the documents the permissions matrix allows, with the test results filed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the vault's administrator guide section on permissions"
                - "Create test accounts for a principal, an adult child and a staff member"
                - "Check what each test account can open, download and share"
                - "Record watermark and sharing link settings in the system notes"
            - name: Family portal and secure messaging training
              description: |-
                ## Purpose
                Parents, spouses and adult children will only stop sending documents by personal email if the portal and secure messaging are easier than the old way. A short, personal training session for each family member, with a one-page guide and their own device set up, does more for privacy than any policy document.

                ## Milestones
                1. A one-page guide to the portal and secure messaging written in plain language.
                2. Each family member trained in a short session on their own devices.
                3. Each member able to log in, find a statement and send a secure message unaided.
                4. A yearly refresher offered to every family user.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every family user has been trained and has logged in, found a document and sent a secure message unaided at least once."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft a one-page plain-language portal guide"
                - "Book a thirty-minute session with each family member"
                - "Set up the portal and messaging app on each member's own device"
                - "Offer each family member a refresher session on the portal @recurring(yearly)"
            - name: System training for new office staff
              description: |-
                ## Purpose
                New staff in a family office often learn the systems by watching a colleague, which passes on shortcuts and workarounds along with the rules. A structured systems onboarding, with access granted by role and a checklist of tasks to complete in each tool, means a new controller or assistant is useful in weeks and does not invent their own way of filing.

                ## Milestones
                1. A systems onboarding checklist for each staff role.
                2. Access granted from the permissions matrix on the first day.
                3. Practice tasks completed in each core system within thirty days.
                4. The new hire's sign-off that they have read the naming and approval rules.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A role-based systems onboarding checklist exists and the next new hire completes it, with practice tasks signed off within thirty days."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the systems each staff role needs on day one"
                - "Write three practice tasks for each core system"
                - "Prepare day-one access requests from the permissions matrix"
                - "Collect the new hire's sign-off on naming and approval rules"
            - name: Wealth reporting platform selection
              description: |-
                ## Purpose
                The reporting platform is usually the most expensive and hardest to replace tool in the stack, so it deserves a proper selection: a shortlist built from the requirements, scripted demonstrations on the family's own data, reference calls and a scored decision. Choosing well here avoids the common pattern of a three-year contract followed by a return to spreadsheets.

                ## Milestones
                1. A long list narrowed to three platforms using the must-have requirements.
                2. Each shortlisted platform scored on the same scripted demonstration.
                3. Two reference calls held for each finalist with families of similar size.
                4. A decision recorded with scores, costs and the reasons.

                ## Notes
                Start from the **Purchase decision** template. Ask references what broke in the first year, not whether they like the product.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed platform decision backed by scored demonstrations of three products and at least two reference calls per finalist."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Build a long list of reporting platforms used by peer families"
                - "Cut the list to three using the must-have requirements"
                - "Hold two reference calls for each finalist"
                - "Score the finalists and record the decision with reasons"
            - name: Document vault selection
              description: |-
                ## Purpose
                Trust deeds, wills, passports, property titles and board minutes need somewhere safer and more organised than email and a shared drive. Comparing vaults on encryption, permissions, retention, search, e-signature and how advisers upload, then choosing one, gives the family a single place for documents that matter.

                ## Milestones
                1. Vault requirements extracted from the main requirements list.
                2. Three vaults compared on permissions, encryption, search, retention and adviser access.
                3. A pilot run with one entity's documents in the preferred vault.
                4. A decision recorded and communicated to advisers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A vault chosen after a pilot with one entity's documents, with the comparison of three options filed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pull the document requirements from the main requirements list"
                - "Compare three vaults on permissions, encryption, search and retention"
                - "Load one entity's documents into the preferred vault as a pilot"
                - "Tell advisers which vault the office has chosen and how to upload"
            - name: Bill pay and payments platform selection
              description: |-
                ## Purpose
                Paying household staff, schools, property managers and capital calls from several entities and currencies needs approval workflows, audit trails and bank connections that a personal banking app cannot give. Choosing a payments platform, or a bank's own tools, on those criteria removes the riskiest manual process in most family offices.

                ## Milestones
                1. Payment volumes, currencies, entities and approval rules listed.
                2. Options compared: bank portals, bill pay services and accounting system modules.
                3. Approval workflow and audit trail tested on each finalist.
                4. A decision recorded with how bank connections will work.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A payments platform chosen after testing approval workflows on at least two options, with bank connection steps documented."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Count monthly payments by entity, currency and payee type"
                - "Ask each bank what payment approval tools they offer business clients"
                - "Test the approval workflow on two finalist platforms"
                - "Record the decision and the bank connection plan"
            - name: Accounting system for a multi-entity office
              description: |-
                ## Purpose
                Running a dozen entities in separate copies of small-business software, or leaving all the books with outside accountants, makes consolidation slow and intercompany balances hard to trust. Choosing an accounting system that handles multiple entities, currencies and consolidation, or agreeing a shared system with the accountants, settles where the official numbers live.

                ## Milestones
                1. Accounting requirements confirmed with the external accountant.
                2. Options compared: multi-entity cloud ledgers, mid-market systems and accountant-hosted books.
                3. A sample consolidation tested in each finalist.
                4. A decision recorded with who keeps the books and in which system.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An accounting system decision, tested with a sample consolidation and agreed in writing with the external accountant."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the external accountant which systems they can work in"
                - "Shortlist three multi-entity accounting options"
                - "Run a sample two-entity consolidation in each finalist"
                - "Agree in writing who keeps the books and in which system"
            - name: Secure messaging and collaboration tool choice
              description: |-
                ## Purpose
                Family business conducted on consumer chat apps and personal email leaves sensitive decisions scattered, unarchived and easy to forward. Choosing one secure messaging and file-sharing tool for the family, staff and advisers, with retention and archiving settled, gives everyone a better habit than asking them to be careful.

                ## Milestones
                1. Current channels used by the family and advisers listed.
                2. Two or three tools compared on encryption, archiving, external guests and ease of use.
                3. A two-week pilot run with the principal and two staff.
                4. A decision recorded with the retention setting agreed.

                ## Notes
                Ease of use decides adoption. The most secure tool nobody opens is less safe than a good one everyone uses.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One secure messaging tool chosen after a two-week pilot, with message retention settings agreed and recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every channel the family and advisers use for office business"
                - "Compare two or three tools on encryption, archiving and guest access"
                - "Run a two-week pilot with the principal and two staff"
                - "Agree the retention setting and record the decision"
            - name: Integration design and single source of truth
              description: |-
                ## Purpose
                Lists of entities and accounts drift apart within months once the reporting platform, accounting system and bill pay tool each keep their own. Deciding which system is the master for each kind of data, and how identifiers match across tools, keeps the stack consistent and makes every later integration simpler.

                ## Milestones
                1. A master system named for entities, accounts, payees, documents and valuations.
                2. A shared identifier scheme for entities and accounts across systems.
                3. Each integration between tools listed with direction and frequency.
                4. The design approved by the head of office and the main vendors.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written integration design naming the master system for each data type and an identifier scheme used in every core tool."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Name the master system for each type of data"
                - "Design an identifier scheme for entities and accounts"
                - "List every integration with its direction and frequency"
                - "Review the design with the main vendors"
            - name: Bank and administrator connection set-up
              description: |-
                ## Purpose
                Every bank, custodian and trust administrator connects to office systems differently, and set-up usually needs signed authorisations, letters of direction and testing with their operations teams. Treating each connection as a small project with an owner and a test closes the gap between buying a platform and seeing data in it.

                ## Milestones
                1. A connection list with each institution, method, contact and status.
                2. Authorisations or letters of direction signed and sent for each.
                3. Each connection tested against a recent statement.
                4. Institutions that cannot connect given a documented manual process.

                ## Notes
                Authorisations are signed by the account holder or trustee, not the office. Allow several weeks for trust companies and overseas banks.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every institution on the data flow map is either connected and tested against a statement or has a documented manual process."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List each institution with its connection method and operations contact"
                - "Prepare authorisation letters for account holders and trustees to sign"
                - "Test each live connection against a recent statement"
                - "Document the manual process for institutions that cannot connect"
            - name: Retiring spreadsheets and shadow systems
              description: |-
                ## Purpose
                New systems fail quietly when the old spreadsheets keep running beside them and people trust the familiar file more. Listing each spreadsheet the new stack replaces, setting a date to freeze it and archiving it read-only removes the second version of the truth.

                ## Milestones
                1. Every spreadsheet replaced by the new stack listed with its owner.
                2. A freeze date set for each and agreed with its owner.
                3. Frozen files archived read-only with a pointer to the new system.
                4. A check three months later that no frozen file has been revived.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every replaced spreadsheet is archived read-only by its freeze date, and a three-month check finds none back in use."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the spreadsheets each new system replaces"
                - "Agree a freeze date with each spreadsheet owner"
                - "Archive frozen files read-only with a note pointing to the new tool"
                - "Check three months later that none are back in use"
            - name: Single sign-on across the system stack
              description: |-
                ## Purpose
                Each new tool brings another password for the family and staff to manage, and passwords are where most account takeovers begin. Connecting the core systems to one identity provider with multi-factor sign-in means one place to grant access, one place to remove it and far fewer passwords to lose.

                ## Milestones
                1. Each core system checked for single sign-on support and cost.
                2. An identity provider chosen or the existing one confirmed.
                3. Core systems connected and tested with each role.
                4. Local passwords disabled where single sign-on is in place.

                ## Notes
                Single sign-on is often a paid add-on tier. Check before signing contracts, not after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All core systems that support it use single sign-on with multi-factor, and local passwords are disabled on each."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check which core systems support single sign-on and at what price"
                - "Confirm the identity provider the office will use"
                - "Connect one system and test sign-in for every role"
                - "Disable local passwords on systems moved to single sign-on"
            - name: Principal dashboard and family report design
              description: |-
                ## Purpose
                Parents at the head of the family usually want a few numbers often, not a forty-page pack: net worth by branch, liquidity, upcoming calls and payments, and anything that needs a decision. Designing the dashboard view inside the reporting platform with the principal, rather than accepting the vendor default, decides whether the system is used or ignored.

                ## Milestones
                1. The principal's questions written down in their own words.
                2. A one-screen dashboard mock-up agreed with the principal.
                3. The view built in the reporting platform with live data.
                4. The principal using the dashboard unaided after a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-screen dashboard built in the reporting platform from the principal's own questions, in regular use a month after launch."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the principal which five questions they want answered at a glance"
                - "Sketch a one-screen dashboard and agree it with the principal"
                - "Build the view in the reporting platform"
                - "Check after a month which parts of the dashboard are used"
            - name: Scripted vendor demonstration day
              description: |-
                ## Purpose
                Free-form demonstrations let vendors show their strengths and skip their gaps. A scripted day, where each shortlisted vendor runs the same scenarios on a sample of the family's own anonymised data in front of the same panel, makes scores comparable and exposes weaknesses before the contract.

                ## Milestones
                1. A demonstration script of six to eight real scenarios written.
                2. An anonymised data sample sent to each vendor in advance.
                3. Each vendor demonstrated the script to the same panel.
                4. Scores collected from each panel member on the same sheet.

                ## Notes
                Remove names and account numbers from the sample. Vendors do not need real identities to show how a capital call or a currency revaluation is handled.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every shortlisted vendor has demonstrated the same scripted scenarios on anonymised family data, and panel scores are collected on one sheet."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write six to eight scenarios drawn from real office work"
                - "Prepare an anonymised data sample for vendors"
                - "Book each vendor into the demonstration day with the same panel"
                - "Collect every panel member's scores on a shared sheet"
            - name: Data migration and cut-over
              description: |-
                ## Purpose
                Moving years of transactions, positions, documents and payees into new systems is where implementations go wrong: history arrives incomplete, opening balances do not tie, a payee's bank details change in transit. A planned cut-over with reconciled opening balances and a rollback point protects the family's records and the first month's payments.

                ## Milestones
                1. A migration plan listing every data set, its source, owner and check.
                2. A trial migration reconciled to source before the real one.
                3. Opening balances agreed to statements for every entity and account.
                4. Cut-over completed with a documented rollback point.

                ## Notes
                Re-verify every migrated payee's bank details through a known contact before the first payment run on the new system.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Cut-over completed with opening balances agreed to statements for every account and a trial migration reconciled beforehand."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "List every data set to migrate with its source and owner"
                - "Run a trial migration and reconcile it to source"
                - "Agree opening balances for every entity to statements"
                - "Set a rollback point and confirm cut-over with the vendor"
            - name: Parallel run of old and new reporting
              description: |-
                ## Purpose
                Running the old reports beside the new platform for two or three month ends shows whether the new numbers can be trusted before the family relies on them. Differences are explained and fixed while the old process still exists as a check.

                ## Milestones
                1. The reports to compare chosen and the tolerance for differences agreed.
                2. Old and new reports produced for two or more month ends.
                3. Every difference above tolerance explained and resolved.
                4. A sign-off that the new platform can replace the old reports.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two or more month ends reported in both systems with every difference above tolerance explained, followed by a signed switch-over."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree which reports to compare and the tolerance for differences"
                - "Produce both versions for the first parallel month end"
                - "Explain each difference above tolerance in a log"
                - "Record the sign-off to retire the old reports"
            - name: Go-live sign-off and post-implementation review
              description: |-
                ## Purpose
                Implementations rarely end cleanly: open issues linger, promised features slip and nobody declares the project done. A formal go-live sign-off followed by a review three months later, comparing outcomes with the requirements and the budget, closes the project and turns lessons into the next selection.

                ## Milestones
                1. A go-live checklist completed and signed by the head of office.
                2. Open issues listed with owners and dates.
                3. A review held three months after go-live against requirements and budget.
                4. Lessons recorded for the next system project.

                ## Notes
                Start from the **Meeting notes** template for the review.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed go-live checklist and a three-month review comparing results with the requirements and budget, with lessons recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the go-live checklist with the vendor"
                - "List open issues with owners and target dates"
                - "Book the three-month review with the principal and vendor"
                - "Record lessons for the next system project"
            - name: Core vendor contract renewal negotiation
              description: |-
                ## Purpose
                Renewal is the one moment the office has real bargaining power with a vendor, and it is often wasted because the notice period passes unnoticed. Preparing four months ahead with usage figures, service history and a credible alternative gives the family a chance at better terms, price caps and exit rights.

                ## Milestones
                1. Usage, service review notes and support history gathered for the vendor.
                2. Target terms written: price, cap on increases, seats, service levels and exit help.
                3. One alternative quote or option identified.
                4. A renewed or replaced contract signed before the notice date.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The renewal is agreed before the notice date with written terms on price increases, service levels and data return at exit."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the notice date for the next core contract renewal"
                - "Gather usage figures and the year's service issues"
                - "Write the target terms for price, caps and exit help"
                - "Get one alternative quote before the negotiation call"
            - name: Systems for a one or two person office
              description: |-
                ## Purpose
                A small office with a part-time manager cannot run five specialist platforms, so the stack has to be small: perhaps an accounting system, a vault and the banks' own tools, with an outsourced accountant doing the rest. Choosing the minimum viable stack, and the point at which to add more, keeps cost and effort in line with the office's size.

                ## Milestones
                1. The few jobs the systems must do for a small office listed.
                2. A stack of three or four tools chosen to cover them.
                3. Tasks handed to outside providers written down.
                4. Triggers agreed for adding a reporting platform, such as entity count or asset mix.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written small-office stack of no more than four tools, with outsourced tasks listed and triggers for growth agreed with the principal."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the jobs the office systems must do every month"
                - "Choose the smallest set of tools that covers those jobs"
                - "Write down which tasks go to the outside accountant"
                - "Agree triggers for adding a reporting platform later"
            - name: Systems handover when key staff leave
              description: |-
                ## Purpose
                When a controller or head of office leaves, they often take the knowledge of how the feeds, mappings, workarounds and admin rights fit together. A handover plan covering admin credentials, system documentation, open issues and vendor contacts protects the family from a stack nobody can run.

                ## Milestones
                1. Admin rights for each system transferred to the backup owner.
                2. A system notes document updated for each tool by the departing person.
                3. Open issues, vendor contacts and renewal dates handed over in a meeting.
                4. Personal accounts of the departing person removed on their last day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Admin rights moved, system notes updated and the departing person's access removed on their last day, with the handover recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every system where the departing person holds admin rights"
                - "Ask them to update the system notes for each tool"
                - "Hold a handover meeting covering issues, contacts and renewals"
                - "Remove their access on the last working day"
            - name: Personal finance view for parents and spouse
              description: |-
                ## Purpose
                Parents and a spouse often want their own household spending, personal accounts and allowances visible in one place, separate from trust and company reporting. Setting up a personal view in the reporting or accounting system, with categories that make sense to them and a short monthly summary, gives the household clarity without opening the whole structure.

                ## Milestones
                1. Personal accounts and cards placed in their own reporting group.
                2. Spending categories agreed with the parents in their own terms.
                3. A personal view or report built and shared only with them.
                4. A monthly summary sent and read.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A personal view limited to the parents' own accounts, with agreed categories, and a monthly summary delivered for three months."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the parents' personal accounts and cards"
                - "Agree spending categories with them in plain words"
                - "Build a personal view visible only to the parents"
                - "Send the parents a short monthly personal summary @recurring(monthly:12)"
            - name: Read-only access for the rising generation
              description: |-
                ## Purpose
                Young adults joining family governance need to see the information relevant to them, such as their own trust or a branch summary, without access to everything. Setting up read-only accounts with the right scope, a short orientation and a yearly renewal teaches them the systems and respects the family's privacy rules.

                ## Milestones
                1. The scope of what each young adult may see agreed with the parents.
                2. A read-only role created and tested against that scope.
                3. A short orientation given on the portal and confidentiality.
                4. Access reviewed each year as roles change.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each eligible young adult has a tested read-only account matching the scope agreed with their parents, reviewed every year."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree with the parents what each young adult may see"
                - "Create and test a read-only role for that scope"
                - "Give each young adult a short portal and confidentiality orientation"
                - "Review scope of rising generation accounts with the parents @recurring(yearly)"
            - name: Remapping feeds after a custodian or administrator change
              description: |-
                ## Purpose
                When the family moves a custodian, trust administrator or fund administrator, every feed, mapping and report built on the old provider breaks at once. Planning the switch on the systems side, with new feeds tested before the old ones stop, keeps reports and reconciliations running through the transition.

                ## Milestones
                1. Every feed, mapping and report dependent on the old provider listed.
                2. New feeds requested and tested before the transfer date.
                3. Historical data from the old provider archived in the office's own store.
                4. The first month on the new provider reconciled in full.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "New provider feeds tested before transfer, old history archived, and the first month on the new provider fully reconciled."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every feed and report that depends on the outgoing provider"
                - "Request feed set-up from the new provider before the transfer date"
                - "Archive the outgoing provider's history in the office's own store"
                - "Reconcile the first full month on the new provider"
            - name: Office data warehouse and API layer
              description: |-
                ## Purpose
                Larger offices with several systems sometimes add a central data store that pulls from each tool through their APIs, so reports, checks and analysis run on one consistent data set. It brings flexibility and independence from any single vendor, but also needs someone who can maintain pipelines, so the decision and design need care.

                ## Milestones
                1. The questions a central data store would answer that current tools cannot written down.
                2. API availability and limits checked for each core system.
                3. A design or provider chosen, with the maintenance owner named.
                4. Pipeline failures reviewed each month once live.

                ## Notes
                If no one in or near the office can maintain data pipelines, a managed provider or a better reporting platform is usually the safer answer.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented decision on a central data store, with API checks for each core system and a named maintenance owner if it goes ahead."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the questions current tools cannot answer"
                - "Ask each core vendor for API documentation and rate limits"
                - "Decide on build, managed provider or no data store, with an owner"
                - "Review pipeline failures and fixes once live @recurring(monthly:22)"
            - name: Vendor exit and continuity plan
              description: |-
                ## Purpose
                Vendors get acquired, change pricing, suffer breaches or close, and a family office that has not planned for it may lose months of access to its own records. A written exit plan for each core system, with contract rights, export methods, a fallback option and the time it would take, turns a crisis into a project.

                ## Milestones
                1. Contract terms on data return, notice and transition help listed for each core vendor.
                2. An export method and fallback system named for each.
                3. Exit risks recorded with likelihood and impact.
                4. The plan reviewed each year and after any vendor change of ownership.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each core system has a written exit plan with data return terms, an export method and a fallback, reviewed within the last year."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Read each core contract for data return and transition terms"
                - "Name the export method and fallback for each system"
                - "Record exit risks with likelihood and impact"
                - "Refresh the exit plan and check vendor ownership changes @recurring(yearly)"
            - name: Policy on AI tools with family data
              description: |-
                ## Purpose
                Staff and family members are already pasting statements, contracts and emails into AI assistants to summarise them, often in consumer tools whose terms allow the data to be retained. A short policy on which AI tools may be used, with which data, and how outputs are checked lets the office gain the time savings without leaking private information.

                ## Milestones
                1. Current use of AI tools by staff and family surveyed.
                2. Approved tools listed with their data retention terms checked.
                3. Rules written on which sensitivity levels may be used with each tool.
                4. The policy shared and acknowledged by staff and adult family users.

                ## Notes
                Tie the rules to the sensitivity levels in the permissions matrix so there is only one classification to remember.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written AI tools policy listing approved tools and permitted data levels, acknowledged by every staff member and adult family user."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask staff which AI tools they use and for what"
                - "Check the data retention terms of each tool in use"
                - "Write rules linking each tool to permitted sensitivity levels"
                - "Collect acknowledgements from staff and adult family users"
---

# Family Office Systems

This area is for the family principal and the office manager who are tired of a dozen spreadsheets, PDF statements in email and payments approved by text message, and want a set of systems that fits the size of the office. It starts with foundations (an inventory of what is in use today, a map of how data arrives, requirements, owners, permissions and the entity hierarchy), then the routines that keep the stack honest, the knowledge needed to judge vendors, the selection decisions for each tool, dated events from vendor demonstrations to cut-over and go-live, situations such as a two-person office or a departing controller, and finally specialist work on data layers, vendor exit and AI tools.

What repeats is a weekly payment approval run and exception queue, a monthly feed reconciliation and close, a quarterly access review and backup test, and a yearly vendor review and licence renewal cycle. The Purchase decision, Vendor, Meeting notes, Month-end close, Onboarding plan and Risk register templates pair with platform selection, vendor due diligence, service reviews, the close, staff training and the exit plan. Contracts, data protection and tax treatment of anything the systems record belong with the office's lawyers and accountants. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
