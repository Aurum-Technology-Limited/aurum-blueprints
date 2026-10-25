---
id: family-office.consolidated-wealth-reporting
name: Consolidated Wealth Reporting
description: "One trusted report of everything the family owns and owes: a full account map, valuation rules for private assets, a monthly reconciliation, a quarterly pack, and views each family member can read."
category: personal
version: 1.0.0
tags: [family-office, consolidated-wealth-reporting, parent, retiree, wealth-reporting, net-worth, reconciliation, private-assets]
author: Aurum Technology
starter_structure:
  templates:
    - month-end-close
    - purchase-decision
    - meeting-notes
    - risk-register
    - remediation-plan
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Consolidated Wealth Reporting
          description: "Seeing all family assets in one report: custodians and accounts, private holdings, property and collectibles, performance and liquidity, and reporting software."
          projects:
            - name: Master list of every account and holding
              description: |-
                ## Purpose
                Families with more than a few relationships nearly always discover forgotten items when they first try to list everything: a custody account opened for one deal, a dormant trust bank account, a pension abroad, a small private company stake. A consolidated report is only as complete as this list, so it comes before any software or design work.

                ## Milestones
                1. Every bank, custody, brokerage and pension account listed with institution, country, owner and account currency.
                2. Every private holding listed: fund interests, direct company stakes, loans made, property and collections.
                3. Each item tagged with who holds the original statements or documents.
                4. The list checked by each adult account holder and the family's lead adviser for anything missing.

                ## Notes
                Record account numbers only in the secure vault, never in an emailed spreadsheet. The list needs institution, owner and type; the full number lives with the institution.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated master list of every account and holding, each with owner, institution, currency and document holder, confirmed by every adult account holder."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every institution that sent the family a statement in the last twelve months"
                - "Ask each adult family member for accounts held in their own name only"
                - "Add private fund interests, direct stakes, loans made, property and collections"
                - "Send the draft list to the lead adviser and ask what is missing"
            - name: Reporting perimeter and family units
              description: |-
                ## Purpose
                Before adding anything up, the family has to decide whose wealth the report covers: the founding couple only, each branch, every trust, the operating business, assets held for children. Getting this wrong produces totals that double count a trust and its underlying company, or that show one sibling another sibling's affairs.

                ## Milestones
                1. A written list of the individuals, trusts, companies and foundations inside the reporting perimeter.
                2. Family units defined, such as the founders, each branch and each trust, with what each unit contains.
                3. A rule recorded for assets the family influences but does not own, such as a foundation endowment.
                4. The perimeter agreed by the family leader and noted with the date it takes effect.

                ## Notes
                Trust assets usually belong in the report as their own unit, not inside a beneficiary's personal net worth. Ask the trustee and the family's lawyer how they should be shown.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed-off perimeter document naming every individual and entity in scope, the family units and the treatment of trusts and foundations."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a list of people and entities that could sit inside the report"
                - "Ask each trustee how their trust should appear in a family report"
                - "Group the list into family units by branch, trust and entity"
                - "Record the agreed perimeter with its effective date"
            - name: Ownership chart with percentages for look-through
              description: |-
                ## Purpose
                Consolidation needs to know who owns what share of each entity, so that a holding company owned 60 and 40 by two branches shows the right slice in each branch's view. An ownership chart with percentages turns a tangle of companies and trusts into rules the reporting system can apply.

                ## Milestones
                1. A chart showing every entity in the perimeter, its owners and the percentage each holds.
                2. Classes of shares or units noted where voting and economic rights differ.
                3. Each percentage checked against the share register or trust deed.
                4. The chart dated and filed beside the perimeter document.

                ## Notes
                A trust beneficiary rarely owns a fixed percentage. Show discretionary trusts as a separate unit rather than splitting them by guess.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated ownership chart for every entity in scope with percentages checked against registers or deeds."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the latest share registers for every family company"
                - "Draw the chart from the individuals at the top to the operating entities below"
                - "Mark where voting rights and economic rights differ"
                - "Ask the company secretary to check each percentage"
            - name: Base currency and reporting conventions
              description: |-
                ## Purpose
                Holding dollars, sterling, euros and a Caribbean currency means a family can show a gain or a loss on the same day depending on which currency the report counts in. Choosing a base currency, a valuation date convention and a source for exchange rates once avoids arguments every quarter about which total is right.

                ## Milestones
                1. A base currency chosen for the family total, with any branch that needs its own currency view noted.
                2. A source and time of day agreed for month-end exchange rates.
                3. Conventions written down for valuation dates, accrued income and trade versus settlement date.
                4. The conventions page saved at the front of the reporting file.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page conventions note stating base currency, exchange rate source, valuation dates and accrual rules, agreed by the family and its adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every currency the family holds assets or debts in"
                - "Ask the lead adviser which base currency suits where the family spends and lives"
                - "Choose one exchange rate source and a fixed month-end time"
                - "Write the conventions note and file it at the front of the reporting file"
            - name: Asset classification scheme for the family report
              description: |-
                ## Purpose
                Each custodian labels holdings its own way, so the same bond fund can appear as fixed income, multi-asset or alternatives in three statements. A single classification with clear definitions lets the family see its real mix and compare one quarter with the next.

                ## Milestones
                1. Asset classes and sub-classes defined in writing, including private equity, property, collections and cash.
                2. A rule recorded for awkward holdings such as multi-asset funds and structured notes.
                3. Every line on the master list tagged with a class.
                4. The scheme agreed with the advisers who will read the report.

                ## Notes
                Keep it short: eight to twelve top-level classes are enough for most families. More detail belongs in the sub-classes.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written classification scheme of no more than twelve top-level classes, with every holding on the master list tagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the asset class labels used on each custodian statement"
                - "Draft top-level classes and sub-classes with a one-line definition each"
                - "Decide where multi-asset funds and structured notes belong"
                - "Tag every holding on the master list with its class"
            - name: Statement and data feed collection set-up
              description: |-
                ## Purpose
                Reports built from PDFs forwarded by family members arrive late and incomplete. Arranging duplicate statements to the office, read-only online access and, where available, direct data feeds from each custodian to the reporting system means the numbers arrive on their own each month.

                ## Milestones
                1. Each institution asked for duplicate statements to the office or reporting provider, with the holder's written authority.
                2. Read-only access or a data feed live for every custodian that offers one.
                3. A list of institutions that only send paper or PDF statements, with who forwards them.
                4. A test month received from every source before the first report.

                ## Notes
                Data feeds need a signed authority from the account holder. Read-only means read-only: no person preparing the report should be able to move money from these logins.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every account on the master list has a named statement route, with feeds or duplicates live and one full test month received."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft the letter of authority for duplicate statements and data feeds"
                - "Get each account holder to sign the authority for their accounts"
                - "Ask each custodian whether it can send a direct feed to the reporting system"
                - "Check that every feed and login is still working and read-only @recurring(yearly)"
            - name: Opening family balance sheet at a fixed date
              description: |-
                ## Purpose
                The first consolidated balance sheet, at a single date such as the last quarter end, becomes the line every later report is measured from. Building it by hand once also shows where the data is weak before any software is bought.

                ## Milestones
                1. Every asset valued at the chosen date, with the source of each value noted.
                2. Every debt, credit line and guarantee listed at the same date.
                3. Totals shown by family unit and by asset class, in the base currency.
                4. Items valued by estimate marked clearly and listed for follow-up.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A balance sheet at one stated date showing every asset and liability by unit and class, with each value's source and estimates flagged."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick the opening date, ideally the most recent quarter end"
                - "Pull every statement and valuation dated at or near that date"
                - "Enter assets and liabilities by family unit and asset class"
                - "Mark every estimated value and list what would replace it"
            - name: Valuation policy for private and illiquid holdings
              description: |-
                ## Purpose
                Listed securities price themselves; a stake in a friend's company, a farm or a fund interest does not. A written policy saying how each type is valued, by whom and how often stops the family total moving because someone used a hopeful number one quarter and a cautious one the next.

                ## Milestones
                1. A method set for each illiquid type: fund statements, recent transactions, appraisals, cost or a stated discount.
                2. A refresh frequency set for each method, with who provides the value.
                3. A rule for when a value is too old to use and must be flagged.
                4. The policy reviewed by the family's accountant and adopted by the family leader.

                ## Notes
                A reporting value is not a tax value or a sale price. Keep the policy's purpose stated at the top so nobody uses it for a tax return or a negotiation.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An adopted valuation policy covering every illiquid holding type, with method, source, frequency and a staleness rule for each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Group the illiquid holdings on the master list by type"
                - "Ask the accountant which valuation methods suit each type"
                - "Write a refresh frequency and a staleness limit for each method"
                - "Ask the agent to draft the policy from your notes for the accountant to review"
            - name: Reporting roles, reviewers and access tiers
              description: |-
                ## Purpose
                Few family documents are as sensitive as the consolidated report, and without clear roles it is either seen by too many people or checked by nobody. Naming who prepares, who reviews, who signs off and which family members see which views protects both accuracy and privacy.

                ## Milestones
                1. A preparer, a reviewer and a sign-off named for each report, never the same person for all three.
                2. Access tiers defined: full family view, branch views, individual views and adviser views.
                3. Each family member and adviser assigned to a tier in writing.
                4. A rule recorded for granting and removing access.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A roles and access table naming preparer, reviewer, sign-off and each person's access tier, approved by the family leader."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List everyone who currently receives any family financial statement"
                - "Name the preparer, reviewer and sign-off for the quarterly report"
                - "Assign each family member and adviser to an access tier"
                - "Review who has access and remove anyone who no longer needs it @recurring(yearly)"
            - name: Monthly statement reconciliation routine
              description: |-
                ## Purpose
                Numbers in a reporting system drift from the custodian's numbers through missed corporate actions, duplicated transactions and broken feeds. A monthly check of each account's closing value and cash against the custodian statement catches these while they are a few days old, not at year end.

                ## Milestones
                1. A checklist of every account to reconcile, with its statement source.
                2. Month-end values and cash balances matched to the statement for every account.
                3. Differences above a set threshold explained or logged as exceptions.
                4. A dated reconciliation sign-off for each month filed.

                ## Notes
                Start from the **Month-end close** template. Agree a small tolerance for rounding so the reviewer's time goes on real breaks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly reconciliations signed off, each covering every account in the perimeter with breaks explained."
                cadence: rolling
              tasks:
                - "Set the tolerance below which a difference counts as rounding"
                - "Confirm every statement and feed for last month has arrived @recurring(monthly:8)"
                - "Match each account's closing value and cash to the custodian statement @recurring(monthly:12)"
                - "File the signed reconciliation with any exceptions attached"
            - name: Quarterly consolidated family report cycle
              description: |-
                ## Purpose
                The quarterly report is where the monthly work becomes something the family reads: totals, mix, performance, liquidity and changes since last quarter. A fixed timetable, with dates for closing data, review and delivery, keeps it arriving at the same point every quarter instead of slipping as private valuations trickle in.

                ## Milestones
                1. A timetable set for data close, first draft, review, sign-off and delivery each quarter.
                2. A standard report structure agreed, with a summary page first.
                3. Each report delivered within the agreed number of weeks after quarter end.
                4. Late private values shown as prior-quarter figures with a clear flag, not left blank.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly reports in a year, each delivered within the agreed window with the same structure and any stale values flagged."
                cadence: cyclic
              tasks:
                - "Agree the number of weeks after quarter end the report is due"
                - "Run the quarterly close, draft and review on the agreed timetable @recurring(quarterly)"
                - "Write a short commentary on what changed since last quarter"
                - "Send the signed-off report through the agreed secure channel"
            - name: Private fund and direct stake valuation updates
              description: |-
                ## Purpose
                Private fund statements usually arrive weeks or months after quarter end, and direct company stakes may only be revalued at a new funding round. Collecting each new value as it lands, and recording which date it relates to, keeps the private part of the report honest about its lag.

                ## Milestones
                1. A list of private holdings with the usual delay before each value arrives.
                2. Each new capital account statement or valuation entered with its as-at date.
                3. Values carried forward and adjusted for calls and distributions where the latest one is late.
                4. Holdings past the staleness limit flagged in the report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every private holding shows a value no older than the policy's limit, with its as-at date displayed in the quarterly report."
                cadence: rolling
              tasks:
                - "Note the usual statement delay for each private fund and stake"
                - "Chase and enter new private valuations with their as-at dates @recurring(quarterly)"
                - "Adjust carried-forward values for calls and distributions since the last statement"
                - "Flag any holding older than the staleness limit"
            - name: Property value register and yearly refresh
              description: |-
                ## Purpose
                Homes, rental buildings and land are often the largest items in a family's wealth and the least often updated, sitting at purchase price for a decade. A register showing each property's value, the source and the date, refreshed once a year, keeps the balance sheet from flattering or understating the family.

                ## Milestones
                1. Every property listed with owner entity, location, purchase price and current mortgage.
                2. A reporting value and its source recorded: appraisal, agent estimate, insurance figure or index.
                3. Properties with values older than the policy limit flagged.
                4. Net equity per property shown in the report after debt.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A property register with a dated value, source and net equity for every property, refreshed within the last twelve months."
                cadence: cyclic
              tasks:
                - "List every property with its owning entity and outstanding mortgage"
                - "Record the value source and date for each property"
                - "Refresh each property's reporting value and source @recurring(yearly)"
                - "Show net equity per property in the balance sheet"
            - name: Collections and personal assets on the balance sheet
              description: |-
                ## Purpose
                Art, jewellery, wine, cars and boats can be a real share of a family's wealth, yet most reports either leave them out or carry insurance values that overstate what they would fetch. Deciding how these items appear, and refreshing the numbers from the collection records once a year, gives a truer total without turning the report into a catalogue.

                ## Milestones
                1. A decision recorded on which personal asset groups appear in the report.
                2. Each group shown as one line with value basis stated: insurance, appraisal or cost.
                3. Values sourced from the collection manager's or insurer's records, not re-estimated.
                4. Personal assets shown separately from investment assets in the summary.

                ## Notes
                Insurance replacement values are usually higher than a sale would achieve. Label the basis plainly so nobody counts on that number for liquidity.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The report shows each personal asset group as a separate line with its value basis and date, refreshed within the year."
                cadence: cyclic
              tasks:
                - "Decide which personal asset groups belong in the family report"
                - "Choose the value basis for each group and label it"
                - "Pull the latest values from the collection and insurance records @recurring(yearly)"
                - "Move personal assets to their own section of the summary page"
            - name: Liabilities, credit lines and guarantees register
              description: |-
                ## Purpose
                Net worth means little if mortgages, Lombard lines, margin balances, loans between family entities and personal guarantees sit outside the report. A register of every debt and contingent obligation, updated monthly, shows what the family owes as clearly as what it owns.

                ## Milestones
                1. Every loan, credit line and margin balance listed with lender, borrower, rate type and maturity.
                2. Personal and corporate guarantees listed with the obligation they support.
                3. Loans between family members and entities shown and netted correctly in consolidation.
                4. Balances updated to month end and shown in the report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A liabilities register covering every debt and guarantee, updated each month end, with internal loans eliminated in the family total."
                cadence: rolling
              tasks:
                - "List every loan, credit line and margin balance across the family"
                - "Ask the lawyer for a list of guarantees signed by family members"
                - "Mark loans between family entities so they net out in the total"
                - "Update every liability balance to month end @recurring(monthly:20)"
            - name: Private commitments and capital call tracker
              description: |-
                ## Purpose
                A family with ten private fund commitments can owe a large sum in capital calls that appears nowhere on a custodian statement. Tracking each commitment, what has been called, what has been returned and what remains unfunded puts that obligation in the report beside the cash meant to meet it.

                ## Milestones
                1. Every commitment listed with fund, committing entity, amount and vintage year.
                2. Called capital, distributions and unfunded balance recorded for each.
                3. Each new call and distribution notice entered within a week of arrival.
                4. Total unfunded commitments shown on the report's liquidity page.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A commitments tracker that matches each fund's latest notice, with total unfunded commitments shown in every quarterly report."
                cadence: rolling
              tasks:
                - "Collect the subscription documents for every private commitment"
                - "Enter commitment, called and distributed amounts for each fund"
                - "Enter new call and distribution notices and update the unfunded total @recurring(monthly:15)"
                - "Add the unfunded total to the report's liquidity page"
            - name: Liquidity profile page in the family report
              description: |-
                ## Purpose
                Families often feel rich and short of cash at the same time because most of their wealth cannot be sold quickly. A page that sorts every holding by how fast it could become cash, set against near-term obligations, shows the family its real flexibility at a glance.

                ## Milestones
                1. Liquidity bands defined, such as available within a week, within three months, within a year and longer.
                2. Every holding assigned to a band, with lock-ups and notice periods noted.
                3. Known obligations for the next twelve months shown beside the bands.
                4. The page included in the quarterly report from the next cycle.

                ## Notes
                This page shows the position. Deciding how much cash to hold belongs with the family's liquidity plan and its advisers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A liquidity page assigning every holding to a defined band and showing twelve months of obligations, live in the quarterly report."
                cadence: rolling
              tasks:
                - "Define four or five liquidity bands with plain descriptions"
                - "Note lock-ups and redemption notice periods for each fund"
                - "Assign every holding to a band"
                - "Refresh the cash and near-term obligations figures on the page @recurring(monthly:3)"
            - name: Data quality exceptions log
              description: |-
                ## Purpose
                Every reporting system collects small problems: a security without a price, a transaction coded to the wrong account, a feed that stopped two weeks ago. Logging each one with an owner and a fix date, and reviewing the log monthly, stops the same errors returning every quarter.

                ## Milestones
                1. A log with columns for date found, account, issue, owner, fix and date closed.
                2. Every reconciliation break and feed failure entered.
                3. Open exceptions older than one month reviewed and chased.
                4. Recurring causes noted and raised with the provider or custodian.

                ## Notes
                A short entry per issue is enough. The value is in spotting the same custodian or feed causing trouble month after month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An exceptions log with every break recorded, no exception open longer than sixty days without a reason, and recurring causes raised."
                cadence: rolling
              tasks:
                - "Set up the exceptions log with owner and fix-date columns"
                - "Enter last month's reconciliation breaks and feed failures"
                - "Review open exceptions and chase anything older than a month @recurring(monthly:25)"
                - "Raise any issue seen three times with the custodian or provider"
            - name: Secure report delivery and version archive
              description: |-
                ## Purpose
                Reports sent as email attachments end up forwarded, printed and left on phones. Delivering through a portal or encrypted channel, and keeping a numbered archive of every signed-off version, protects the family and means anyone can see exactly what was reported in any past quarter.

                ## Milestones
                1. One secure delivery channel agreed for each access tier.
                2. A naming rule set for report versions, with draft and final clearly separated.
                3. Every signed-off report saved in a read-only archive.
                4. Any correction issued as a new version with a short note of what changed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All reports for the year delivered only through the agreed secure channel, with every final version and correction held in a read-only archive."
                cadence: rolling
              tasks:
                - "Choose the secure channel for each group of report readers"
                - "Set a version naming rule and apply it to the last report"
                - "Archive the signed-off quarterly report as read-only @recurring(quarterly)"
                - "Write a short note for any correction issued after delivery"
            - name: Year-end consolidated wealth statement
              description: |-
                ## Purpose
                The year-end report is the one the family keeps, compares across decades and hands to the accountant and the estate planner. Producing it to a slightly higher standard, with every private value refreshed and every reconciliation closed, gives the family a reliable annual record.

                ## Milestones
                1. All twelve monthly reconciliations closed before the year-end report is drafted.
                2. Every private and property value refreshed to the latest available.
                3. A year-on-year comparison by unit and class, with the main reasons for change.
                4. The statement signed off and filed in the archive and family records.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A signed-off year-end statement with all reconciliations closed, private values refreshed and a year-on-year bridge, filed by the agreed date."
                cadence: cyclic
              tasks:
                - "Check that every monthly reconciliation for the year is closed"
                - "Refresh private and property values before drafting"
                - "Produce and sign off the year-end statement with a year-on-year bridge @recurring(yearly)"
                - "Send a copy to the accountant and file it with the family records"
            - name: Reading a custodian statement line by line
              description: |-
                ## Purpose
                Anyone reviewing a family report should be able to trace a number back to its source, and that starts with understanding a custodian statement: holdings, accruals, pending trades, cash movements and fees. An afternoon with two real statements and an adviser makes every later review faster and sharper.

                ## Milestones
                1. Two current statements from different custodians read section by section.
                2. Each section's purpose written in a sentence: holdings, cash, transactions, income, fees.
                3. Accrued income, pending settlements and margin explained by the adviser.
                4. A one-page reading guide saved for other family members.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to reading the family's custodian statements, written after a review session with the adviser."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Print two recent statements from different custodians"
                - "Mark every section you cannot explain in a sentence"
                - "Book an hour with the adviser to go through the marked sections"
                - "Write a one-page reading guide from your notes"
            - name: Time-weighted and money-weighted returns explained
              description: |-
                ## Purpose
                Portfolios can show a good time-weighted return while the family's own money did worse, because cash went in just before a fall. Knowing the difference between these two measures, and which one each page of the report uses, prevents the family drawing the wrong conclusion about a manager or itself.

                ## Milestones
                1. The definition of each measure written in plain words with a worked example.
                2. The family's own last year worked through under both measures with the adviser.
                3. Each performance figure in the report labelled with the measure used.
                4. A note added to the report explaining why the two can differ.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every performance figure in the report is labelled with its return measure, backed by a plain-language note the family has read."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a short explainer on time-weighted and money-weighted returns"
                - "Ask the adviser to show last year's family return under both measures"
                - "Label each performance figure in the report with its measure"
                - "Add a plain explanation of the difference to the report's notes page"
            - name: Private fund metrics, IRR, TVPI and DPI
              description: |-
                ## Purpose
                Private fund performance is reported in its own language, and an attractive internal rate of return early in a fund's life can mean little cash back. Understanding IRR, TVPI, DPI and the role of fund age lets the family read the private section of its report without leaning on the manager's story.

                ## Milestones
                1. IRR, TVPI, DPI and RVPI defined in plain words.
                2. The J-curve and the effect of fund age explained with one of the family's own funds.
                3. Each private fund in the report showing its vintage year beside its metrics.
                4. A note on why early figures are unreliable added to the private section.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The private section of the report shows IRR, TVPI and DPI with vintage year for every fund, and the family has a written plain-language guide."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick one family fund with at least three years of statements"
                - "Work out its TVPI and DPI from called and distributed amounts"
                - "Ask the adviser to explain how its IRR changed over the years"
                - "Add vintage year beside every fund's metrics in the report"
            - name: Total cost picture across every relationship
              description: |-
                ## Purpose
                Fees hide in many places: custody, management, performance fees, fund expenses, foreign exchange spreads, structuring and reporting charges. A yearly page that gathers every cost the family paid, in money and as a share of assets, is often the single most useful page in the whole report.

                ## Milestones
                1. A list of every fee type the family pays and where each appears.
                2. Explicit fees totalled from statements and invoices for the year.
                3. Embedded costs requested in writing from managers and custodians.
                4. A cost page showing totals by provider and by type.

                ## Notes
                Embedded costs inside funds and FX spreads rarely appear on statements. Ask each provider in writing for a full cost disclosure.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A yearly cost page in the report showing every explicit and disclosed embedded cost by provider and type, in money and as a share of assets."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "List every fee type that appeared on last year's statements and invoices"
                - "Ask each manager and custodian in writing for a full cost disclosure"
                - "Build the cost page by provider and by fee type @recurring(yearly)"
                - "Highlight the three largest cost items for the family's review"
            - name: Benchmarks for the performance pages
              description: |-
                ## Purpose
                Returns mean little without something to compare them with, and the wrong comparison flatters or punishes unfairly. Agreeing with the advisers which published benchmark sits beside each part of the portfolio, and reviewing them each year, gives the performance pages a fair yardstick.

                ## Milestones
                1. A benchmark named for each asset class and for the family total.
                2. The reason for each choice recorded in a sentence.
                3. Benchmarks shown beside returns on every performance page.
                4. A yearly review date set for checking the benchmarks still fit.

                ## Notes
                Choose benchmarks the family can look up independently. A blend set by the manager who is being measured is not independent.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded benchmark for every asset class and the family total, shown on every performance page and reviewed within the last year."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Ask each adviser which benchmark they measure themselves against"
                - "Choose an independent published benchmark for each asset class"
                - "Write the reason for each choice in one sentence"
                - "Check the benchmarks still fit the portfolio's mix @recurring(yearly)"
            - name: Gross, net of fees and after-tax figures
              description: |-
                ## Purpose
                Gross returns, returns after fees and returns after tax can tell three different stories. Knowing which figure each page shows, and asking the accountant whether an after-tax view is possible, stops the family comparing a gross number from one manager with a net number from another.

                ## Milestones
                1. The difference between gross, net and after-tax returns written in plain words.
                2. Each manager's figures in the report confirmed as gross or net.
                3. All performance pages switched to net of fees where data allows.
                4. The accountant's view recorded on whether an after-tax estimate is worth adding.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every return in the report is labelled gross or net, with net used wherever available, and the accountant's view on after-tax reporting recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check whether each manager reports gross or net of fees"
                - "Switch the report to net figures where the data exists"
                - "Ask the accountant whether an after-tax estimate would help the family"
                - "Record the answer in the conventions note"
            - name: Currency effects in a multi-currency report
              description: |-
                ## Purpose
                When the base currency strengthens, every foreign holding looks smaller even if nothing else changed. Learning to split a quarter's change into local market movement and currency movement helps the family see what actually happened to its investments.

                ## Milestones
                1. The family's exposure by currency shown on one page.
                2. One quarter's change split into local return and currency effect for the largest holdings.
                3. A currency effect line added to the quarterly commentary.
                4. Hedged and unhedged holdings labelled in the report.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The quarterly report shows exposure by currency and a currency effect line, with hedged holdings labelled."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Build a one-page view of holdings by currency"
                - "Split last quarter's change into local return and currency effect"
                - "Ask the adviser which holdings are currency hedged"
                - "Add a currency effect line to the quarterly commentary"
            - name: Choosing a consolidated reporting platform or service
              description: |-
                ## Purpose
                Once a spreadsheet covers more than a few dozen accounts, errors and hours climb fast. Comparing dedicated wealth reporting platforms with outsourced reporting services from administrators or multi-family offices, on the family's own accounts and complexity, leads to a choice that fits rather than the one with the best demonstration.

                ## Milestones
                1. Requirements written: number of accounts, currencies, private assets, entity look-through and access tiers.
                2. Three to five options shortlisted across software and outsourced services.
                3. Each option tested with a sample of the family's real accounts.
                4. A choice recorded with total yearly cost, data security answers and exit terms.

                ## Notes
                Start from the **Purchase decision** template. Ask every provider how the family gets its full history back if it leaves.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a reporting platform or service, scored against written requirements and tested with the family's own data."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the requirements list from the master list and perimeter"
                - "Shortlist software platforms and outsourced reporting services"
                - "Ask each shortlisted provider to load a sample of real accounts"
                - "Record the choice with yearly cost, security answers and exit terms"
            - name: Moving the report from spreadsheets to the platform
              description: |-
                ## Purpose
                Migrations fail when history is lost or the first platform report does not match the last spreadsheet. Running both in parallel for a quarter, and reconciling one to the other, keeps the family's trust in the numbers through the change.

                ## Milestones
                1. Opening positions and agreed history loaded into the platform.
                2. Feeds connected for every account that supports them.
                3. One full quarter produced in both the spreadsheet and the platform.
                4. Differences between the two explained before the spreadsheet is retired.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A quarter reported in parallel with all differences explained, followed by the spreadsheet being archived read-only."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Decide how many years of history to load into the platform"
                - "Load opening positions and connect feeds account by account"
                - "Run one quarter in both systems and compare totals"
                - "Archive the spreadsheet as read-only once differences are explained"
            - name: One-page family wealth summary
              description: |-
                ## Purpose
                Most family members will never read thirty pages of holdings, and the ones who matter most often read only the first page. Designing a single summary around the questions the family actually asks, such as what we own, what changed, what is liquid and what we owe, makes the report used rather than filed.

                ## Milestones
                1. The family's five most common questions about their wealth collected.
                2. A one-page draft answering each question with a figure or a small chart.
                3. The draft tested with two family members of different ages.
                4. The final summary placed at the front of every quarterly report.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page summary answering the family's five main questions, tested with two members and used at the front of the quarterly report."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask three family members what they want to know from the report"
                - "Sketch a single page answering the five most common questions"
                - "Test the draft with an older and a younger family member"
                - "Put the final summary at the front of the next report"
            - name: Views by branch, generation and entity
              description: |-
                ## Purpose
                Founders may want the whole picture, while each branch needs only its own share and each trust its own accounts. Building a small set of standard views from the same data means everyone sees a consistent number, cut the right way, without separate spreadsheets.

                ## Milestones
                1. Standard views defined: family total, each branch, each trust and each individual.
                2. Each view built from the same consolidated data using the ownership chart.
                3. Every view checked so that branch totals add up to the family total.
                4. Each view mapped to the access tier allowed to see it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A set of standard views whose branch and trust totals reconcile to the family total, each linked to its access tier."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the views each family unit needs"
                - "Build each view from the consolidated data and the ownership chart"
                - "Check that branch totals add up to the family total"
                - "Link each view to the access tier allowed to see it"
            - name: Cost basis and tax lot records for the report
              description: |-
                ## Purpose
                Unrealised gains matter when the family considers selling, gifting or moving country, yet cost basis is often missing for older holdings and transfers between custodians. Gathering cost records into the reporting data gives the accountant a reliable starting point instead of a reconstruction under deadline.

                ## Milestones
                1. Holdings with missing or doubtful cost basis listed.
                2. Original purchase or transfer records found for the largest gaps.
                3. Cost basis loaded into the reporting system for every listed holding.
                4. Remaining gaps marked and shared with the accountant.

                ## Notes
                Cost basis rules differ by country and by how an asset was received. The accountant decides the tax figure; the report only holds the records.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Cost basis recorded for every listed holding, with any remaining gaps marked and passed to the accountant."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Run a report of holdings with missing cost basis"
                - "Ask each custodian for transfer-in records for those holdings"
                - "Load recovered cost basis into the reporting system"
                - "Send the list of remaining gaps to the accountant"
            - name: Alert thresholds for the monthly figures
              description: |-
                ## Purpose
                Monthly reports show a lot of numbers and very few need action. Setting a handful of thresholds, such as cash below a floor, one holding above a share of the total or a stale valuation, means the preparer flags what matters instead of the family scanning every page.

                ## Milestones
                1. Four to six thresholds agreed with the family and its advisers.
                2. Each threshold written with the figure, the comparison and who is told.
                3. Thresholds checked every month and breaches recorded.
                4. Each breach followed by a note of who was told and when.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written set of thresholds checked monthly, with every breach and the person told recorded for the year."
                cadence: rolling
              tasks:
                - "Propose four to six thresholds the family would want to hear about"
                - "Agree each threshold and who is told with the family leader"
                - "Check the month's figures against each threshold @recurring(monthly:18)"
                - "Record any breach and who was told"
            - name: First consolidated report presented to the family
              description: |-
                ## Purpose
                Seeing everything in one place for the first time can surprise a family, pleasantly or not. Presenting it in a meeting, walking through the summary and explaining the estimates, sets expectations and earns trust that a report sent by email cannot.

                ## Milestones
                1. A date set with the family members who will receive the report.
                2. The report and summary page finalised and signed off.
                3. A short walkthrough given covering perimeter, conventions and known gaps.
                4. Questions and requests from the meeting recorded and assigned.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A meeting held where the first consolidated report was presented, with questions and follow-ups recorded and assigned."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set a date with the family members who will receive the report"
                - "Prepare a ten-minute walkthrough of the summary and known gaps"
                - "Present the report and take questions"
                - "Record every request and assign an owner"
            - name: Annual reporting review with advisers
              description: |-
                ## Purpose
                Once a year the family, its advisers and the preparer should look at the report itself rather than the numbers: what is used, what is ignored, where errors came from and what the provider costs. An hour on this keeps the reporting from slowly growing into a document nobody reads.

                ## Milestones
                1. Feedback collected from report readers before the meeting.
                2. The year's exceptions log and provider performance summarised.
                3. Changes agreed for next year's report, with an owner each.
                4. Minutes filed with the reporting records.

                ## Notes
                Start from the **Meeting notes** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual review held with minutes recording reader feedback, provider performance and agreed changes with owners."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Send three short questions about the report to every reader"
                - "Summarise the year's exceptions and provider issues"
                - "Hold the review with the advisers and the preparer"
                - "File minutes with the agreed changes and owners"
            - name: Date-of-death valuation and reporting pack
              description: |-
                ## Purpose
                When a family member dies, executors, trustees and tax advisers all need values at the date of death, often within tight time limits and while the family is grieving. A reporting system that can produce a full holdings and valuation pack for one person at a chosen date turns weeks of chasing statements into days.

                ## Milestones
                1. The steps to produce a single-person report at a chosen date written down.
                2. Holdings in the person's sole name, joint names and trusts separated.
                3. Custodians asked for official date-of-death valuations where needed.
                4. The pack delivered to the executor and the lawyer.

                ## Notes
                Official valuations for estate purposes usually come from the custodian or a qualified valuer, not from the reporting system. The pack is a map for the professionals, not a tax figure.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written procedure exists for a date-of-death pack, and any pack needed is delivered to the executor with ownership types separated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the steps for producing a single-person report at a chosen date"
                - "Test the steps by producing a dummy pack for one family member"
                - "List which custodians issue official date-of-death valuations"
                - "Store the procedure where the executor can find it"
            - name: Bringing business sale proceeds into the report
              description: |-
                ## Purpose
                A business sale can turn one line valued once a year into cash, escrow, earn-outs, vendor notes and retained stakes, all at once. Setting up how each piece appears before completion means the first report after the sale shows the family's new position clearly instead of a confusing jump.

                ## Milestones
                1. Each piece of the consideration listed: cash, escrow, earn-out, loan notes and rollover equity.
                2. A reporting treatment agreed for contingent amounts such as earn-outs.
                3. New accounts receiving proceeds added to the master list and feeds.
                4. A bridge from the pre-sale to the post-sale balance sheet in the next report.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The first report after completion shows every component of the sale with its treatment, and a bridge from the previous balance sheet."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the deal lawyer for a summary of every component of the consideration"
                - "Agree with the accountant how earn-outs and escrow will be shown"
                - "Add the receiving accounts to the master list and feeds"
                - "Draft the pre-sale to post-sale bridge for the next report"
            - name: Personal financial statement for a lender
              description: |-
                ## Purpose
                Private banks and lenders often ask for a signed personal financial statement before extending credit, and families scramble to assemble one. Producing it from the consolidated report, in the lender's format and limited to what is needed, is faster, more accurate and shares less than handing over the whole report.

                ## Milestones
                1. The lender's required format and level of detail confirmed.
                2. Figures drawn from the latest signed-off consolidated report.
                3. Only the assets and liabilities the lender needs included.
                4. A copy of what was sent filed with its date and recipient.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A personal financial statement in the lender's format, drawn from the latest signed-off report and filed with date and recipient."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the lender for its required form and level of detail"
                - "Fill the form from the latest signed-off consolidated figures"
                - "Remove anything the lender does not need to see"
                - "File a copy with the date and recipient recorded"
            - name: Simple report for a retired couple
              description: |-
                ## Purpose
                Retired founders often want fewer pages, not more: what income is coming in, what they are spending, how much is easily available and whether anything needs a decision. A short version of the family report built for them, in large print if needed, keeps them confident and involved without the full pack.

                ## Milestones
                1. The couple's main questions about money written in their own words.
                2. A two or three page report designed around those questions.
                3. Income received and regular withdrawals shown for the month.
                4. A monthly delivery in the format they prefer, paper or screen.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A short monthly report designed with the couple, showing income, withdrawals and available cash, delivered in their chosen format."
                cadence: rolling
              tasks:
                - "Ask the couple what they want to know each month"
                - "Design a two or three page report around their questions"
                - "Choose paper or screen and the font size they prefer"
                - "Send the short report to the couple @recurring(monthly:5)"
            - name: Individual reports for adult children
              description: |-
                ## Purpose
                Adult children with their own accounts, trust interests or shares in a holding company need to see their own position, not their parents' or siblings'. Giving each a personal report from the same system keeps the family on one set of numbers while respecting each person's privacy.

                ## Milestones
                1. The assets and interests each adult child should see agreed with the parents and trustees.
                2. An individual view built for each child from the consolidated data.
                3. Each child given access through the agreed secure channel.
                4. A short walkthrough offered to each child on their first report.

                ## Notes
                A beneficiary's right to information about a trust is set by the trust deed and the law, not by the family's preference. Ask the trustee before showing trust detail.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each adult child has an individual report showing only agreed assets, delivered securely with a walkthrough offered."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree with the parents what each adult child should see"
                - "Ask each trustee what trust information may be shared with beneficiaries"
                - "Build an individual view for each child"
                - "Offer each child a thirty-minute walkthrough of their report"
            - name: Report access as children reach adulthood
              description: |-
                ## Purpose
                Children cross a line at eighteen, or at the age a trust names, when accounts in their name and information rights start to matter. A planned step, with a first look at their own holdings and a conversation about privacy, avoids the moment arriving by accident when a statement is forwarded.

                ## Milestones
                1. Each child's coming-of-age date and any trust ages listed.
                2. The information they will receive at each age agreed with the parents.
                3. A first report and walkthrough planned before the date.
                4. Their access tier updated on the day.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Every child approaching adulthood has a planned first report and an access change scheduled for the right date."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "List each child's eighteenth birthday and any trust vesting ages"
                - "Agree with the parents what each child sees at each age"
                - "Check which children reach a reporting age in the coming year @recurring(yearly)"
                - "Plan the first report and walkthrough before each date"
            - name: Surviving spouse taking over the report
              description: |-
                ## Purpose
                Often one spouse has always dealt with the advisers and the numbers, and the other is left facing an unfamiliar report at the worst time. Preparing the other spouse now, with a guided tour, a contacts page and a short list of what to watch, protects them later.

                ## Milestones
                1. A one-page guide naming the preparer, advisers and how to reach each.
                2. Three or four figures marked as the ones that matter most.
                3. A walkthrough of the latest report given to the less involved spouse.
                4. The less involved spouse added as a recipient of the summary page.
              priority: medium
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "The less involved spouse has received a walkthrough, holds a contacts and key figures guide, and gets the summary page each quarter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page guide to the report's contacts and key figures"
                - "Book a walkthrough of the latest report for the less involved spouse"
                - "Add the spouse as a recipient of the quarterly summary"
                - "Ask the agent to draft a plain-language glossary of the report's terms"
            - name: Report review for an attorney or carer
              description: |-
                ## Purpose
                An adult child acting under a power of attorney for an elderly parent has a duty to keep the parent's finances separate and accounted for. A report view covering only the parent's assets, with transactions visible, helps the attorney keep proper records and spot anything unusual.

                ## Milestones
                1. The power of attorney and its scope confirmed with the lawyer.
                2. A view built for the parent's assets only, separate from the attorney's own.
                3. Monthly transactions in the parent's accounts reviewed for anything unexpected.
                4. A simple record kept of decisions made and money spent for the parent.

                ## Notes
                Rules on what an attorney may do and must record vary by country. The lawyer who registered the power can explain the duties.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A parent-only report view exists, with monthly transaction reviews and a record of the attorney's decisions kept for the year."
                cadence: rolling
              tasks:
                - "Ask the lawyer to confirm the scope of the power of attorney"
                - "Build a report view covering only the parent's assets"
                - "Review the parent's transactions for anything unexpected"
                - "Keep a dated note of each decision made for the parent"
            - name: Reporting through a separation or divorce
              description: |-
                ## Purpose
                During a separation, both sides' lawyers will ask for financial disclosure, and the family report can become evidence. Agreeing with the family's lawyer how the report is produced, who sees it and what is frozen in place protects the record and the people involved.

                ## Milestones
                1. The family's lawyer consulted on what the report should and should not do during proceedings.
                2. Access for the separating spouse reviewed on the lawyer's advice.
                3. A snapshot of the report at the relevant date archived and locked.
                4. Requests for disclosure routed through the lawyer, not answered directly.

                ## Notes
                Never change, backdate or delete reporting records during proceedings. Ask the lawyer before altering anyone's access.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A lawyer-approved approach to access and disclosure is recorded, with a locked snapshot at the relevant date."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the family's lawyer how reporting should work during the separation"
                - "Archive a locked snapshot of the report at the date the lawyer names"
                - "Review access for the separating spouse on the lawyer's advice"
                - "Route every disclosure request through the lawyer"
            - name: Look-through concentration and counterparty exposure
              description: |-
                ## Purpose
                A family can hold the same company through four managers and two funds, or keep most of its cash with one bank, without anyone noticing. Looking through fund holdings and adding exposures across managers and custodians shows concentrations no single statement reveals.

                ## Milestones
                1. Top holdings looked through funds wherever holdings data is available.
                2. The ten largest single-company exposures across all managers listed.
                3. Exposure to each bank and custodian totalled, including deposits and structured notes.
                4. Concentrations above the family's agreed thresholds shown in the quarterly report.

                ## Notes
                Start from the **Risk register** template to record concentrations and who is looking at each. What to do about them belongs with the advisers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A quarterly look-through page listing the largest company and counterparty exposures across all managers, with threshold breaches shown."
                cadence: rolling
              tasks:
                - "Ask each manager for full holdings of the funds the family owns"
                - "Add up exposure to each company across every manager"
                - "Total deposits and notes held with each bank and custodian"
                - "Refresh the look-through exposure page @recurring(quarterly)"
            - name: Performance attribution across managers
              description: |-
                ## Purpose
                When the family total does well or badly, the natural question is why: asset mix, a particular manager, currency or a private holding. A simple attribution that splits the year's result into these sources gives the investment discussion facts instead of impressions.

                ## Milestones
                1. The year's total return split into contributions by asset class.
                2. Each manager's contribution shown against its benchmark.
                3. Currency and private holdings shown as separate contributions.
                4. A one-page attribution added to the year-end statement.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page attribution in the year-end statement splitting the return by asset class, manager, currency and private holdings."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Ask the reporting provider whether it can run a contribution analysis"
                - "Split the year's return by asset class and by manager"
                - "Show currency and private holdings as their own contributions"
                - "Add the attribution page to the year-end statement"
            - name: Operating business at fair value in the family total
              description: |-
                ## Purpose
                For many founding families the operating business is the largest asset, yet it often sits in the report at book value or not at all. Agreeing how it appears, whether at a periodic independent valuation or a stated method, and showing it separately from investment assets gives a total the family can reason with.

                ## Milestones
                1. A method agreed for the business's reporting value, with how often it is refreshed.
                2. An independent or accountant-prepared value obtained for the first report.
                3. The business shown as its own line, separate from investment assets.
                4. Totals shown both with and without the business.

                ## Notes
                A reporting value is not a price anyone has offered. Keep the method and date beside the number.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The operating business appears as a separate line at a value with stated method and date, and totals are shown with and without it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the accountant which valuation methods suit the business"
                - "Agree the method and refresh frequency with the family leader"
                - "Obtain a value for the first report"
                - "Show totals with and without the business on the summary page"
            - name: Report history and long-run net worth series
              description: |-
                ## Purpose
                Years of quarterly reports become far more useful when the totals sit in one series: the family can see how wealth moved through markets, sales, gifts and spending over decades. Building that series once, with notes on perimeter changes, gives the next generation an accurate history.

                ## Milestones
                1. Family totals collected from every archived report into one table.
                2. Perimeter and method changes noted at the dates they happened.
                3. Major events such as sales, gifts and distributions marked on the series.
                4. The series added to the year-end statement.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single net worth series covering every archived report, with perimeter changes and major events marked, included in the year-end statement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the family total from every archived report"
                - "Note each change in perimeter or valuation method"
                - "Mark sales, gifts and large distributions on the series"
                - "Add the series chart to the year-end statement"
            - name: Reporting provider due diligence and data security
              description: |-
                ## Purpose
                Reporting providers hold a map of everything the family owns, which makes them a target. Asking the provider the same security and continuity questions each year, and checking the answers, protects the family's most sensitive data.

                ## Milestones
                1. A standard question set covering data location, encryption, access logs, staff vetting and breach history.
                2. The provider's latest independent security report obtained.
                3. User access on the platform checked against the family's access tiers.
                4. An exit plan recorded for getting the data back if the provider fails.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed yearly due diligence questionnaire with the provider's independent security report and a recorded exit plan."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Write the security and continuity questions for the provider"
                - "Ask the provider for its latest independent security report"
                - "Check platform user lists against the family's access tiers"
                - "Record how the family would get its data back if the provider failed"
            - name: Independent review of reporting controls
              description: |-
                ## Purpose
                Families running a mature report rarely test it, and errors that start small can persist for years. Having an independent accountant review the controls, sample-check figures to source and report findings gives the family assurance and a list of fixes.

                ## Milestones
                1. An independent reviewer appointed with a written scope.
                2. A sample of figures traced from report back to statements.
                3. Findings reported with a rating for each issue.
                4. Fixes agreed and tracked to completion.

                ## Notes
                Start from the **Remediation plan** template to track each finding to closure.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An independent controls review completed with findings rated and every agreed fix tracked to closure."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the scope for an independent review of the reporting"
                - "Appoint a reviewer who has no role in preparing the report"
                - "Give the reviewer access to statements and reconciliations"
                - "Track every agreed fix to closure in the remediation plan"
---

# Consolidated Wealth Reporting

This area is for the family whose wealth sits across several banks, custodians, trusts, companies, private funds, homes and collections, and who want one set of numbers everyone trusts instead of six statements nobody adds up. It starts with foundations (an account map, the reporting perimeter, an ownership chart, a base currency, an asset classification, statement feeds, an opening balance sheet and valuation rules), then the monthly and quarterly machinery that keeps the report right, the knowledge needed to read it, decisions about software and design, dated events such as the first family presentation or a date-of-death valuation, situations for parents, retirees and carers, and finally specialist work on look-through risk, attribution and independent controls.

What repeats is a monthly statement reconciliation, liabilities, commitments and exceptions checks on set days, a quarterly report cycle with private valuation updates, and a yearly property, collection, access and benchmark refresh. The Month-end close, Purchase decision, Meeting notes, Risk register and Remediation plan templates pair with the reconciliation, the platform choice, the adviser review, concentration monitoring and the controls review. None of this is investment, tax or legal advice: the report records and explains, and decisions belong with the family and its qualified advisers. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
