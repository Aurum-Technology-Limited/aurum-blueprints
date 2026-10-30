---
id: finance-accounting.transfer-pricing-documentation
name: Transfer Pricing Documentation
description: "A mapped set of intercompany flows, a group pricing policy, local and master files on an annual cycle, benchmarks, true-ups and filings, ready for any tax authority request."
category: business
version: 1.0.0
tags: [finance-accounting, transfer-pricing-documentation, enterprise, manager, transfer-pricing, intercompany, oecd-guidelines, international-tax]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - compliance-control
    - vendor
    - purchase-decision
    - risk-register
    - onboarding-30-60-90
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Transfer Pricing Documentation
          description: "Setting and documenting prices for transactions between related companies in different countries to satisfy tax authorities, for international groups."
          projects:
            - name: Related-party transaction map for the group
              description: |-
                ## Purpose
                Most groups underestimate how many intercompany flows they have: the obvious sale of goods, but also shared software licences, seconded staff, guarantees on bank facilities and a brand used by every subsidiary. A single map of every related-party transaction, with the paying and receiving entity, the annual value and how it is priced today, is the starting point for every policy, benchmark and filing that follows.

                ## Milestones
                1. Every intercompany flow for the last full year listed from the ledger's intercompany accounts.
                2. Each flow tagged by type: goods, services, royalties, financing, guarantees or cost contributions.
                3. Paying entity, receiving entity, annual value and current pricing basis recorded for each flow.
                4. Flows with no written pricing basis flagged for follow-up.
                5. The map confirmed by each local controller as complete for their entity.

                ## Notes
                Look beyond the intercompany accounts. Costs one entity pays on behalf of another and never recharges are related-party transactions too, and they are often the first thing an authority finds.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A related-party transaction map covers every entity, shows type, value and pricing basis for each flow, and has been confirmed by every local controller."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export last year's movements on every intercompany ledger account"
                - "Tag each flow as goods, services, royalty, financing, guarantee or cost contribution"
                - "Ask each local controller for costs paid on behalf of other group entities"
                - "Flag every flow that has no written pricing basis"
            - name: Legal entity chart with tax residence and year ends
              description: |-
                ## Purpose
                Documentation rules, deadlines and thresholds all hang off the legal entity: where it is tax resident, who owns it, when its financial year ends and what currency it reports in. Groups that grew by acquisition often have dormant companies, branches and minority holdings that nobody has drawn on one page. A clean chart prevents the classic miss of a branch or newly formed company left out of the documentation set.

                ## Milestones
                1. Every legal entity and branch listed with country of incorporation and tax residence.
                2. Ownership percentages and the chain up to the ultimate parent shown on one chart.
                3. Financial year end, functional currency and local tax identifier recorded for each entity.
                4. Dormant and in-liquidation entities marked so they are neither forgotten nor wrongly documented.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One chart shows every entity and branch with tax residence, ownership, year end and currency, checked against the legal team's records."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the entity list from the company secretarial records or legal team"
                - "Draw the ownership chain up to the ultimate parent on one page"
                - "Record year end, functional currency and tax identifier for each entity"
                - "Update the chart after any incorporation, merger or disposal @recurring(quarterly)"
            - name: Documentation requirements matrix by country
              description: |-
                ## Purpose
                Each country decides for itself whether it wants a master file, a local file, a country-by-country report, a short disclosure form or nothing beyond the arm's length principle, and the thresholds, languages and deadlines all differ. A matrix built with your advisers, one row per country you operate in, turns a fog of local rules into a list of what is owed, by which entity and when.

                ## Milestones
                1. One row per country covering master file, local file, country-by-country reporting, disclosure forms and language.
                2. Thresholds, whether files are submitted or held on request, and due dates confirmed with a local adviser or the authority's guidance.
                3. Penalty rules and any penalty protection for timely documentation noted for each country.
                4. Gaps between what is owed and what currently exists highlighted.

                ## Notes
                Rules change every year somewhere. Record the source and the date you checked each row, so the next person knows how fresh it is.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A matrix with one row per country states each documentation obligation, threshold, language and deadline, each row with a source and check date."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every country where a group entity or branch is tax resident"
                - "Ask your transfer pricing adviser for their current country summary"
                - "Record documentation type, threshold, language and deadline for each country"
                - "Note the source and check date beside every row"
                - "Re-confirm every row with advisers before the documentation season @recurring(yearly)"
            - name: Group transfer pricing policy document
              description: |-
                ## Purpose
                Without a written policy, each subsidiary prices intercompany dealings the way its controller always has, and the group ends up with profits in places it cannot explain. A policy document sets out the method, the tested party, the target return and the invoicing rhythm for every transaction type, so local teams apply the same rules and the documentation describes what really happens.

                ## Milestones
                1. A policy section for each transaction type in the related-party map.
                2. Method, tested party, target return or range, and invoicing frequency stated for each.
                3. Owners named for applying, monitoring and updating the policy.
                4. The draft reviewed by tax advisers and approved by the group finance director.
                5. The approved policy circulated to every local controller.

                ## Notes
                Write the policy for the people who apply it, not just for the authority. A controller should be able to calculate a charge from it without calling head office.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved group policy covers every transaction type with method, tested party, target return and invoicing frequency, and every controller has a copy."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Collect existing pricing memos, emails and legacy policies"
                - "Draft one policy section per transaction type"
                - "Ask the agent to turn the draft into a one-page summary for local controllers"
                - "Send the draft to your tax advisers for review"
                - "Get sign-off from the group finance director"
            - name: Functional analysis interviews for each entity
              description: |-
                ## Purpose
                Authorities judge transfer prices on what each entity actually does, owns and risks, not on what the contracts say. Structured interviews with the people running each subsidiary, covering decisions, staff, assets and the losses each one bears, produce the functional analysis that every local file and method choice rests on.

                ## Milestones
                1. An interview guide covering functions, assets and risks, agreed with your advisers.
                2. Interviews held with the general manager and finance lead of each material entity.
                3. Notes written up within a week of each interview and checked by the interviewee.
                4. A functions, assets and risks summary table for every material entity.

                ## Notes
                Start from the **Meeting notes** template. Ask who decides and who can say no, rather than who is involved: control over a risk is what decides where its return belongs.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every material entity has interview notes checked by its management and a summary table of functions, assets and risks."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree a functions, assets and risks interview guide with your advisers"
                - "Book a ninety-minute interview with each entity's general manager and finance lead"
                - "Write up each interview within a week and send it back for checking"
                - "Build a summary table of functions, assets and risks by entity"
            - name: Entity characterisation decisions
              description: |-
                ## Purpose
                Calling a subsidiary a limited risk distributor or a contract manufacturer sets the return it should earn, and the label has to match what the functional analysis shows. Deciding each entity's characterisation explicitly, with reasons, prevents a profitable entrepreneur being documented as a routine service provider, which is exactly the gap an auditor looks for.

                ## Milestones
                1. A proposed characterisation for each entity, such as entrepreneur, limited risk distributor, contract manufacturer or routine service provider.
                2. Each label tested against the functional analysis, with any mismatch noted.
                3. Two or three sentences of reasoning written for each characterisation.
                4. The characterisations agreed with tax advisers and recorded in the policy.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every entity has a recorded characterisation with written reasons, agreed with advisers and reflected in the group policy."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Propose a characterisation for each entity from the functional analysis"
                - "Check each label against who controls the main risks"
                - "Write two or three sentences of reasoning per entity"
                - "Agree the characterisations with your tax advisers"
            - name: Intercompany agreements for every material flow
              description: |-
                ## Purpose
                Many authorities ask for the signed agreement first, and a flow with no contract is treated as whatever the examiner decides it is. Putting written, dated agreements in place for each material transaction, consistent with the policy and with how the entities really behave, closes one of the commonest and cheapest documentation gaps.

                ## Milestones
                1. Each flow in the related-party map matched to an existing agreement or marked as missing.
                2. Missing agreements drafted by legal from a standard group template.
                3. Pricing terms in every agreement checked against the transfer pricing policy.
                4. All agreements signed by authorised signatories and filed centrally.

                ## Notes
                Never backdate an agreement. Where a flow has run without one, describe the past arrangement accurately and sign the new agreement with its real date.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every material intercompany flow has a signed, dated agreement whose pricing terms match the group policy, filed in one central folder."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Match each related-party flow to a signed agreement or mark it missing"
                - "Ask legal for standard intercompany services, distribution and licence templates"
                - "Check every pricing clause against the group policy"
                - "File signed agreements in one central folder by entity pair"
            - name: Transfer pricing compliance calendar
              description: |-
                ## Purpose
                Local files, country-by-country notifications, disclosure forms and return deadlines fall at different points of the year in each country, and one missed date can cost penalty protection. Turning the requirements matrix into a single calendar, with internal deadlines set weeks before the legal ones, means nothing depends on someone's memory.

                ## Milestones
                1. Every legal due date from the requirements matrix entered in a shared calendar.
                2. An internal deadline four to six weeks before each legal date.
                3. An owner named for each deadline.
                4. A monthly look-ahead sent to owners covering the next ninety days.

                ## Notes
                Start from the **Compliance control** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared calendar holds every transfer pricing due date with an owner and internal deadline, and no deadline is missed in twelve months."
                cadence: rolling
              tasks:
                - "Enter every legal due date from the requirements matrix into one shared calendar"
                - "Set an internal deadline five weeks before each legal one"
                - "Name an owner for every deadline"
                - "Send owners the ninety-day look-ahead of documentation deadlines @recurring(monthly:3)"
            - name: Roles and sign-off for transfer pricing
              description: |-
                ## Purpose
                Transfer pricing falls between group tax, group finance, local controllers and legal, and when everyone is involved nobody owns the year-end true-up. A short responsibility table for each step, from calculating charges to signing the local file, removes the gaps and the duplicated effort.

                ## Milestones
                1. Each recurring step listed: charge calculation, monitoring, true-ups, documentation, filings and agreements.
                2. One owner and one approver named for each step.
                3. Local controllers told in writing what they own.
                4. The table reviewed whenever anyone in the chain changes role.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A responsibility table names one owner and one approver for every recurring transfer pricing step, and each controller has confirmed their part."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every recurring transfer pricing step from charge to filing"
                - "Name one owner and one approver for each step"
                - "Send each local controller their responsibilities in writing"
                - "Review the responsibility table at the start of each financial year @recurring(yearly)"
            - name: Quarterly tested party margin monitoring
              description: |-
                ## Purpose
                Finding out after the year end that a limited risk distributor made a loss, or a service company earned three times its target, leaves only a large and awkward adjustment. Comparing each tested party's year-to-date margin with the policy range every quarter gives time to adjust prices or charges while the year is still open.

                ## Milestones
                1. A margin calculation for each tested party using the same profit level indicator as its benchmark.
                2. Quarterly results compared with the target and the interquartile range.
                3. Entities outside or near the edge of the range flagged with a proposed correction.
                4. Corrections agreed with the entity's controller before the next quarter starts.

                ## Notes
                Use the same definition of operating profit as the benchmark. Mixing in one-off items or exchange gains produces a margin that cannot be compared.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly reviews compare every tested party's margin with its range, with corrections recorded for any outlier."
                cadence: rolling
              tasks:
                - "Set up a margin calculation for each tested party matching its benchmark indicator"
                - "Compare each tested party's year-to-date margin with its target range @recurring(quarterly)"
                - "Propose a price or charge correction for any entity drifting out of range"
                - "Agree corrections with the entity controller before quarter end"
            - name: Year-end transfer pricing true-up
              description: |-
                ## Purpose
                Even with good monitoring, actual results rarely land exactly on target, so most groups post a year-end adjustment to bring tested parties into range. Planning the true-up before the books close, with the calculation, invoices and tax treatment agreed in advance, avoids adjustments that some countries will not accept once the year has closed.

                ## Milestones
                1. Preliminary full-year margins calculated six weeks before the year end.
                2. Adjustment amounts agreed between the paying and receiving entities.
                3. Local tax, customs and indirect tax treatment of each adjustment confirmed with advisers.
                4. Adjustment invoices raised and posted in the correct year.
                5. The true-up calculation filed with the year's documentation.

                ## Notes
                Some countries restrict downward adjustments to local taxable profit or require them before the year end. Ask your advisers about each country before the calculation, not after.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each year's true-up is calculated, agreed by both sides, posted before the books close and filed with the documentation."
                cadence: cyclic
              tasks:
                - "Calculate preliminary full-year margins six weeks before the year end @recurring(yearly)"
                - "Agree each adjustment amount with the paying and receiving controllers"
                - "Ask advisers how each country treats the adjustment for tax, customs and VAT"
                - "Raise and post adjustment invoices before the books close"
            - name: Monthly intercompany charge calculation
              description: |-
                ## Purpose
                Management fees, royalties and cost recharges calculated once a year arrive as a lump that distorts local results and strains subsidiary cash. Calculating them every month from the policy, with the same inputs and a short reviewer check, keeps local accounts close to the arm's length result all year and shrinks the true-up.

                ## Milestones
                1. A calculation workbook for each charge type, with inputs, rates and the policy reference.
                2. Charges calculated and sent to entity controllers by a fixed working day each month.
                3. A reviewer check on any charge that moves more than an agreed percentage from the prior month.
                4. Twelve consecutive monthly charge runs completed on time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly charge runs are issued on the agreed working day, each with its inputs saved and large movements reviewed."
                cadence: rolling
              tasks:
                - "Build one calculation workbook per charge type with the policy reference on each tab"
                - "Calculate and send the month's intercompany charges to entity controllers @recurring(monthly:5)"
                - "Review any charge that moves more than twenty percent on last month"
                - "Keep the inputs behind each month's charges in a dated folder"
            - name: Annual local file refresh
              description: |-
                ## Purpose
                A local file describes one entity's business, its related-party transactions, the functional analysis and the evidence that its prices were arm's length for that specific year. Refreshing each one on a fixed cycle, rather than rewriting from scratch when an authority asks, keeps the documentation contemporaneous, which is often what penalty protection depends on.

                ## Milestones
                1. Last year's local file reviewed for changes in business, people, transactions and results.
                2. Financial data, transaction values and margins updated for the year.
                3. The benchmark update and any true-up reflected in the analysis.
                4. The file reviewed by the local controller and finalised before the local deadline.
                5. The final dated version stored in the documentation archive.

                ## Notes
                Contemporaneous usually means prepared by the time the tax return is filed, but definitions vary. Check what it means in each country with your advisers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every entity that needs a local file has a finalised, dated version for the latest year, completed before its internal deadline."
                cadence: cyclic
              tasks:
                - "Send each local controller a questionnaire on this year's business changes @recurring(yearly)"
                - "Update transaction values and tested party margins in each local file"
                - "Ask the agent to draft a summary of year-on-year changes for each entity"
                - "Finalise each local file before its internal deadline"
            - name: Annual master file update
              description: |-
                ## Purpose
                The master file gives every authority the same picture of the group: its structure, business lines, intangibles, financing and overall transfer pricing policy. Updating it once a year, before the local files that refer to it, keeps the story consistent across countries, since an examiner will compare their local file against the group view.

                ## Milestones
                1. Organisation chart, business description and main value drivers updated.
                2. Intangibles, research centres and intercompany financing sections refreshed.
                3. The consolidated financial statements and the list of rulings and agreements in force referenced.
                4. The master file finalised and shared with whoever prepares each local file.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A master file for the latest year is finalised before local file work starts and has been sent to every local file preparer."
                cadence: cyclic
              tasks:
                - "Update the organisation chart and business description for the year"
                - "Refresh the intangibles and intercompany financing sections"
                - "List any rulings or advance pricing agreements now in force"
                - "Share the final master file with every local file preparer @recurring(yearly)"
            - name: Benchmark refresh cycle
              description: |-
                ## Purpose
                A benchmarking study supports a target range only while its comparable companies remain comparable and their figures stay current. Many groups refresh the financial data each year and run a full new search every few years, and writing that cycle down means no benchmark is quietly five years old when an authority asks for it.

                ## Milestones
                1. Each benchmark listed with its search date, database, tested party and range.
                2. A rule agreed with advisers for annual financial updates and full new searches.
                3. This year's financial update done for every benchmark that is due.
                4. Ranges in the policy and local files updated to the refreshed figures.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A benchmark register shows every study's search date and next refresh, and none is past the refresh rule agreed with advisers."
                cadence: cyclic
              tasks:
                - "List every benchmark with its search date, database and range"
                - "Agree with advisers how often each one needs a full new search"
                - "Run the annual financial update on benchmarks that are due @recurring(yearly)"
                - "Update the policy ranges to the refreshed figures"
            - name: Intercompany agreement change log
              description: |-
                ## Purpose
                Agreements go stale quietly: a new service is added, a royalty base changes, an entity is renamed, and the contract still describes the old arrangement. A change log reviewed each quarter keeps agreements in step with the policy and the business, so the contract an examiner reads matches the invoices they see.

                ## Milestones
                1. A log of every agreement with parties, effective date, term and renewal date.
                2. Business and policy changes checked against the agreements each quarter.
                3. Amendments drafted and signed for any change found.
                4. No agreement past its term without a renewal or extension.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews of the agreement log are recorded and no intercompany agreement is past its term."
                cadence: rolling
              tasks:
                - "Build a log of every intercompany agreement with term and renewal date"
                - "Check the quarter's policy and business changes against the agreements @recurring(quarterly)"
                - "Ask legal to draft amendments for any change found"
                - "Start renewals three months before each agreement's term ends"
            - name: New intercompany transaction intake gate
              description: |-
                ## Purpose
                Most transfer pricing surprises start with a well-meaning manager: a subsidiary starts reselling for a sister company, an engineer works across the border for six months, a loan is moved between entities to cover a cash gap. A short intake form, plus a monthly scan of the ledger for unfamiliar intercompany postings, catches new flows before they run unpriced for a year.

                ## Milestones
                1. A one-page intake form for new cross-border arrangements between group entities.
                2. Business heads and controllers briefed on when the form is needed.
                3. A monthly scan of intercompany accounts for new counterparties or new posting types.
                4. Every new flow priced, documented and added to the related-party map within a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every intercompany flow that started in the last twelve months has an intake form, a pricing basis and a line in the related-party map."
                cadence: rolling
              tasks:
                - "Draft a one-page intake form for new intercompany arrangements"
                - "Brief business heads and controllers on when the form is needed"
                - "Scan intercompany accounts for new counterparties or posting types @recurring(monthly:20)"
                - "Add each new flow to the related-party map with its pricing basis"
            - name: Contemporaneous evidence file
              description: |-
                ## Purpose
                When an audit comes three or four years later, the people who made the decisions may have left, and the board papers explaining a change are hard to find. Collecting evidence as it happens, such as minutes, organisation charts, budgets, emails approving prices and benchmark files, gives the defence real material rather than recollection.

                ## Milestones
                1. A folder structure by year and entity for supporting evidence.
                2. Evidence types listed: minutes, organisation charts, budgets, pricing approvals and benchmark files.
                3. Each quarter's evidence filed within a month of quarter end.
                4. A full year of evidence held for every material entity.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The evidence folder holds four complete quarters of minutes, organisation charts and pricing approvals for every material entity."
                cadence: rolling
              tasks:
                - "Set up an evidence folder by year and entity"
                - "List the evidence types each quarter's folder must contain"
                - "File the quarter's minutes, organisation charts and pricing approvals @recurring(quarterly)"
                - "Ask entity controllers for any local evidence worth keeping"
            - name: The arm's length principle in practice
              description: |-
                ## Purpose
                Everything in transfer pricing comes back to one question: would independent parties in comparable circumstances have agreed this price and these terms? Working through the opening chapters of the OECD Transfer Pricing Guidelines, and applying them to two of your own transactions, gives managers new to the subject the vocabulary to follow advisers and to challenge them.

                ## Milestones
                1. The opening chapters of the OECD Transfer Pricing Guidelines read, with notes.
                2. Accurate delineation of a transaction explained in your own words.
                3. Two of the group's own transactions described as independent parties would see them.
                4. Your questions answered by an adviser or the group tax lead.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note applies the arm's length principle to two real group transactions and has been reviewed by an adviser or the group tax lead."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Download the current edition of the OECD Transfer Pricing Guidelines"
                - "Read the chapters on the arm's length principle and comparability"
                - "Describe two group transactions as independent parties would see them"
                - "Take your questions to an adviser or the group tax lead"
            - name: Choosing among the five pricing methods
              description: |-
                ## Purpose
                Comparable uncontrolled price, resale price, cost plus, transactional net margin and profit split each suit different facts, and authorities expect to see why the chosen one is the most appropriate. Learning the strengths and data needs of each through worked examples means method choices in the policy can be explained rather than inherited.

                ## Milestones
                1. A one-page summary of each method: when it fits, what data it needs and its common weaknesses.
                2. Each method linked to at least one transaction type the group has.
                3. A worked cost plus example built from a real group service charge.
                4. The summary checked by your adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-method summary links each method to a group transaction type, includes one worked example and has been checked by an adviser."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page summary of each of the five methods"
                - "Match each method to a transaction type in your related-party map"
                - "Work a cost plus example using one real service charge"
                - "Ask your adviser to check the summary"
            - name: Reading a benchmarking study critically
              description: |-
                ## Purpose
                A benchmarking report is dense: search strategy, rejection screens, accepted comparables and an interquartile range. Managers who can read one critically spot the weaknesses an examiner will, such as comparables with persistent losses, the wrong industry codes or a range driven by two outliers, before the study is filed.

                ## Milestones
                1. The search steps, databases, years and screens of one existing study traced end to end.
                2. Rejection reasons checked for a sample of excluded companies.
                3. Accepted comparables reviewed for functional similarity to the tested party.
                4. A list of weaknesses and questions sent to the study's author.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One existing study has been reviewed end to end, with a written list of weaknesses sent to its author and their answers recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick one existing benchmarking study and read its search strategy"
                - "Check the rejection reasons for ten excluded companies"
                - "Compare five accepted comparables' businesses with the tested party"
                - "Send your questions on weaknesses to the study's author"
            - name: Comparability adjustments and ranges
              description: |-
                ## Purpose
                Working capital adjustments, multiple-year data and the choice between the full range and the interquartile range can each move the result enough to decide whether an adjustment is needed. Understanding how they work, and which ones your countries accept, prevents a range that looks comfortable in one country and fails in another.

                ## Milestones
                1. Working capital adjustment mechanics worked through on one benchmark's data.
                2. Single-year and multiple-year results compared on the same comparables.
                3. Each country's position on ranges and medians recorded from adviser guidance.
                4. The group's approach to ranges written into the policy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The policy states the group's approach to ranges and adjustments, backed by a worked example and a country-by-country note from advisers."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Rework one benchmark with and without a working capital adjustment"
                - "Compare single-year and multiple-year results for the same comparables"
                - "Ask advisers which countries adjust to the median when a result falls outside the range"
                - "Write the group's approach to ranges into the policy"
            - name: Mapping who develops and controls your intangibles
              description: |-
                ## Purpose
                Owning a trademark or patent on paper does not by itself earn the return from it: authorities look at which entities perform and control the development, enhancement, maintenance, protection and exploitation of the asset, known as DEMPE. Mapping those functions for each significant intangible shows whether the legal owner can justify the income it books or whether other entities deserve a share.

                ## Milestones
                1. A list of significant intangibles: brands, technology, customer relationships and know-how.
                2. The DEMPE functions for each mapped to the entities and people who perform and control them.
                3. Funding and risk control for each intangible recorded.
                4. Mismatches between legal ownership and DEMPE functions raised with advisers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A DEMPE map covers every significant intangible, names who performs and controls each function, and any ownership mismatch is logged with advisers."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the group's significant brands, technology and know-how"
                - "Map who develops, enhances, maintains, protects and exploits each one"
                - "Record which entity funds each intangible and who controls its risks"
                - "Raise any ownership mismatch with your advisers"
            - name: Intra-group services and the benefit test
              description: |-
                ## Purpose
                Head office costs recharged to subsidiaries are among the most challenged items in any audit, because examiners ask what the subsidiary actually received. Learning the difference between chargeable services, shareholder activities and duplicated work, and where a simplified approach for low value services is accepted, gives management fees a defensible base.

                ## Milestones
                1. Head office activities sorted into chargeable services, shareholder activities and duplicated work.
                2. Evidence of benefit identified for each chargeable service, such as reports, tickets or attendance records.
                3. Advisers' view recorded on where a simplified low value services approach is accepted.
                4. Shareholder costs removed from the recharge pool.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every recharged head office function is classified with its evidence of benefit, and shareholder costs are shown as excluded from the pool."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every head office function whose cost is recharged"
                - "Sort each into chargeable service, shareholder activity or duplication"
                - "Name the evidence that shows each subsidiary received the service"
                - "Ask advisers where a simplified low value services approach is accepted"
            - name: Intercompany financing fundamentals
              description: |-
                ## Purpose
                Intercompany loans, guarantees and cash pool balances are now examined as closely as goods and services, with authorities asking whether the borrower could have borrowed that much, on those terms, from a bank. Learning how credit ratings, interest rates and guarantee fees are supported prepares a finance manager to brief advisers and review their work.

                ## Milestones
                1. The OECD guidance on financial transactions read and summarised.
                2. Each intercompany loan, guarantee and cash pool listed with its terms.
                3. The difference between stand-alone and group-supported credit ratings understood.
                4. Questions on the group's own financing raised with advisers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of the financial transactions guidance and a list of every intercompany loan and guarantee with its terms are filed and reviewed with advisers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the OECD chapter on financial transactions"
                - "List every intercompany loan, guarantee and cash pool with its terms"
                - "Note how a stand-alone credit rating differs from a group-supported one"
                - "Raise questions on the group's financing with your advisers"
            - name: Tested party and method choice per transaction
              description: |-
                ## Purpose
                For each transaction type the policy needs one tested party, usually the simpler entity with reliable comparables, and one method with reasons for preferring it. Recording that choice formally, with the alternatives rejected and why, is what turns a pricing habit into documentation an examiner can follow.

                ## Milestones
                1. A tested party chosen for each transaction type with a one-paragraph rationale.
                2. The most appropriate method chosen, with rejected methods and reasons listed.
                3. A profit level indicator chosen to fit the method and tested party.
                4. The choices approved by the group tax lead and written into the policy.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every transaction type has a recorded tested party, method, profit level indicator and rejected alternatives, approved by the group tax lead."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose a tested party for each transaction type and write why"
                - "List the methods rejected for each transaction and the reasons"
                - "Pick the profit level indicator that fits each method"
                - "Get the group tax lead to approve the choices"
            - name: Management fee cost pool and allocation keys
              description: |-
                ## Purpose
                Subsidiaries and their local auditors accept a management fee only when they can see the cost base behind it and why their share is fair. Building the pool from named cost centres, stripping out shareholder and pass-through costs, and choosing keys such as headcount, revenue or system users that track real benefit, gives every entity a charge it can explain.

                ## Milestones
                1. A cost pool built from named cost centres, with shareholder and pass-through costs removed.
                2. An allocation key chosen for each service, with the reason it reflects benefit.
                3. A mark-up applied in line with the policy and the benchmark.
                4. Each subsidiary's charge reconciled to the total pool.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented cost pool and key for each service produces subsidiary charges that reconcile exactly to the total pool."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pull the cost centres that make up the head office service pool"
                - "Remove shareholder and pass-through costs from the pool"
                - "Choose an allocation key for each service and record why"
                - "Rebuild the cost pool and keys during the annual budget @recurring(yearly)"
            - name: Commissioning a new benchmarking study
              description: |-
                ## Purpose
                When a benchmark is missing, stale or built for the wrong tested party, a new study is needed, and its quality depends mostly on the brief. Writing a clear scope, choosing an adviser or database provider and reviewing the draft against the functional analysis produces a study that supports the policy rather than merely existing.

                ## Milestones
                1. A brief covering tested party, functions, years, regions and the profit level indicator.
                2. Two or three proposals compared on approach, database, timing and fee.
                3. The draft study reviewed against the functional analysis before acceptance.
                4. The final study filed with its search date, search export and rejection log.

                ## Notes
                Start from the **Vendor** template. Ask for the search export and rejection log, not just the report: you will need them when an authority asks how the comparables were chosen.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A final benchmarking study is accepted against a written brief and filed with its search export and rejection log."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Write a one-page brief for the benchmark"
                - "Request proposals from two or three advisers or providers"
                - "Review the draft comparables against your functional analysis"
                - "Ask for the full search export and rejection log with the final study"
            - name: Intercompany loan pricing file
              description: |-
                ## Purpose
                An intercompany loan with a round-number rate set years ago is an easy target. A pricing file for each material loan, covering the borrower's credit standing, market rates for similar debt at the date it was agreed and the terms an independent lender would insist on, gives the interest charged a documented basis.

                ## Milestones
                1. Each material loan's amount, currency, tenor, security and rate recorded.
                2. A credit assessment of the borrower obtained from an adviser or rating tool.
                3. Market rates for comparable debt at the agreement date gathered.
                4. A pricing memo for each loan approved and filed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every material intercompany loan has an approved pricing memo with a borrower credit assessment and market rate evidence from its agreement date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect the agreement, amount, tenor and rate for each material loan"
                - "Ask an adviser or rating tool for the borrower's credit assessment"
                - "Gather market rates for similar debt at the agreement date"
                - "File an approved pricing memo for each loan"
            - name: Royalty rate support for licensed intangibles
              description: |-
                ## Purpose
                Royalties for brands, software or know-how move profit between countries directly, and authorities challenge both the rate and whether the licensee benefits at all. Supporting each rate with comparable licences, a profit check on the licensee and a clear description of what is licensed makes the payment defensible in both countries.

                ## Milestones
                1. Each licence listed with the intangible, licensee, royalty base and rate.
                2. Comparable licence agreements or an alternative analysis gathered for each rate.
                3. The licensee's profit after royalty checked against its characterisation.
                4. A support memo for each royalty filed with the local files.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every intercompany royalty has a filed support memo with comparable evidence and a profit check on the licensee."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List each intercompany licence with its royalty base and rate"
                - "Ask advisers to search for comparable licence agreements"
                - "Check the licensee's profit after royalty against its expected return"
                - "File a support memo for each royalty"
            - name: Choosing transfer pricing documentation software
              description: |-
                ## Purpose
                Groups with a dozen or more local files often outgrow spreadsheets and word processor templates, and dedicated software promises consistent files, workflow and data links to the ledger. Comparing two or three tools against your own volume, countries and team size shows whether the saving is real before a multi-year contract is signed.

                ## Milestones
                1. Requirements written: entities, countries, languages, users and data sources.
                2. Two or three tools demonstrated using your own sample local file.
                3. Total cost over three years compared with current adviser and staff time.
                4. A buy or keep decision recorded with reasons.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded buy or keep decision compares at least two tools on three-year cost and fit against written requirements."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write requirements covering entities, countries, users and data sources"
                - "Book demonstrations that use your own sample local file"
                - "Compare three-year costs with current adviser and staff time"
                - "Record the software decision and the reasons"
            - name: Segmented profit and loss for each tested party
              description: |-
                ## Purpose
                Statutory accounts rarely show the profit on the controlled transactions alone: a distributor may also buy from third parties, or a manufacturer may run a separate service line. Building segmented results that isolate the controlled transactions gives the margin that is actually tested, and it is the schedule examiners most often ask to see reconciled.

                ## Milestones
                1. Segments defined for each tested party with mixed controlled and third-party activity.
                2. Revenue and direct costs mapped to segments from ledger dimensions.
                3. Indirect costs allocated with stated keys.
                4. Segmented results reconciled to the statutory accounts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each tested party with mixed activity has segmented results that reconcile to its statutory accounts, with every allocation key written down."
                cadence: one-shot
                effort_hours_estimate: "18"
              tasks:
                - "Identify tested parties with mixed controlled and third-party activity"
                - "Map revenue and direct costs to segments using ledger dimensions"
                - "Allocate indirect costs and record each key"
                - "Reconcile the segmented results to the statutory accounts"
            - name: Transfer pricing rules built into the ERP
              description: |-
                ## Purpose
                Charges calculated in spreadsheets and keyed by hand into each ledger drift from the policy and leave intercompany balances that do not match. Moving the main pricing rules into the ERP or a connected tool, with standard cost uplifts, automatic recharges and an audit trail, reduces true-up sizes and the hours spent chasing differences.

                ## Milestones
                1. The highest volume intercompany flows chosen for automation.
                2. Pricing rules specified from the policy and tested in a sandbox.
                3. Automated charges run in parallel with the spreadsheet for two months.
                4. The spreadsheet retired once the two agree.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two intercompany flows are priced automatically in the ERP, matching the spreadsheet result for two consecutive months."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Pick the two highest volume intercompany flows to automate first"
                - "Write the pricing rules for each flow from the policy"
                - "Run the automated charges beside the spreadsheet for two months"
                - "Retire the spreadsheet once both give the same result"
            - name: Country-by-country report preparation and filing
              description: |-
                ## Purpose
                Groups above the reporting threshold file a country-by-country report showing revenue, profit, tax paid, employees and assets for every jurisdiction, and authorities use it to pick audit targets. Preparing it from reconciled data, and reading it as an examiner would before it goes in, avoids handing over a risk map nobody inside the group has looked at.

                ## Milestones
                1. The current threshold, filing entity and deadline confirmed with advisers.
                2. Data for every jurisdiction collected from consolidation and tax records.
                3. The data reconciled to the consolidated accounts, with differences explained.
                4. A risk read-through done: profit per employee, low tax jurisdictions and unexplained losses.
                5. The report filed in the required format before the deadline.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The country-by-country report is filed before its deadline, reconciled to the consolidated accounts, with a written risk read-through on file."
                cadence: cyclic
              tasks:
                - "Confirm the current reporting threshold, filing entity and deadline with advisers"
                - "Collect revenue, profit, tax, employee and asset data for every jurisdiction @recurring(yearly)"
                - "Reconcile the report totals to the consolidated accounts"
                - "Ask the agent to flag ratios an examiner would query in the draft report"
            - name: Country-by-country reporting notifications
              description: |-
                ## Purpose
                Many countries require each local entity to tell the tax authority which group company files the country-by-country report, often by a date well before the report itself. These small filings are easy to miss and carry penalties of their own, so they deserve a list and a deadline of their own.

                ## Milestones
                1. Countries requiring a notification, and their deadlines, listed from the requirements matrix.
                2. Notification wording and filing entity agreed for each country.
                3. Every notification filed and its confirmation saved.
                4. Next year's notification dates added to the compliance calendar.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every required notification for the year is filed on time and its confirmation is saved with the country's records."
                cadence: cyclic
              tasks:
                - "List the countries that require a filing entity notification"
                - "Agree the notification wording with each local controller"
                - "File each notification and save the confirmation @recurring(yearly)"
                - "Add next year's notification dates to the compliance calendar"
            - name: Related-party disclosures in local tax returns
              description: |-
                ## Purpose
                Many tax returns include a related-party schedule or a transfer pricing questionnaire, and the figures in it must agree with the local file and the accounts. Preparing these disclosures from the same data, rather than letting each local preparer rebuild them, removes the mismatches that prompt enquiries.

                ## Milestones
                1. Each country's return disclosure form and its fields listed.
                2. Disclosure figures generated from the related-party map and the local file.
                3. Figures checked against the statutory accounts before filing.
                4. Copies of every filed disclosure saved with the local file.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every return with a related-party disclosure is filed with figures that agree to the local file and statutory accounts, and a copy is saved."
                cadence: cyclic
              tasks:
                - "List the transfer pricing disclosure forms each country's return includes"
                - "Send local preparers disclosure figures from the related-party map @recurring(yearly)"
                - "Check the disclosed figures against the statutory accounts"
                - "Save each filed disclosure with that year's local file"
            - name: Thirty-day documentation request drill
              description: |-
                ## Purpose
                Some authorities give only a few weeks to produce documentation once they ask, and a request in a busy month exposes every missing file. Running a drill on one entity, timing how long it takes to assemble the local file, agreements, benchmark, true-up and evidence, shows where the gaps are while there is still time to fix them.

                ## Milestones
                1. One material entity chosen for a mock documentation request.
                2. Every document an authority would ask for gathered against a timer.
                3. Missing or out-of-date documents listed with owners.
                4. A fix plan agreed and the next drill scheduled on a different entity.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full documentation set for one entity is assembled within thirty days, with every gap logged against an owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose one material entity for a mock documentation request"
                - "Gather its local file, agreements, benchmark and true-up against a timer"
                - "List missing or stale documents with an owner each"
                - "Agree the fixes and schedule the next drill on a different entity"
            - name: Year-end audit review of transfer pricing positions
              description: |-
                ## Purpose
                External auditors review transfer pricing as part of the tax provision, looking for adjustments that might be challenged and uncertain positions that need a provision or disclosure. Preparing a short pack of policy changes, true-ups, open enquiries and known exposures before they ask makes the review quicker and the provision easier to defend.

                ## Milestones
                1. A pack covering policy changes, true-ups, open enquiries and known exposures.
                2. Uncertain positions assessed with advisers and the provision calculation documented.
                3. Auditor questions answered within the agreed turnaround.
                4. Agreed points carried into next year's monitoring.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The auditors receive a transfer pricing pack before fieldwork, every question is closed within the agreed turnaround, and the provision workings are filed."
                cadence: cyclic
              tasks:
                - "Assemble the policy, true-up and open enquiry pack for the auditors @recurring(yearly)"
                - "Assess uncertain transfer pricing positions with your advisers"
                - "Document how any transfer pricing tax provision was calculated"
                - "Carry agreed audit points into next year's monitoring"
            - name: Board briefing on transfer pricing risk
              description: |-
                ## Purpose
                Directors are increasingly asked by auditors, investors and authorities how the group governs tax risk, and transfer pricing is usually the largest single exposure. A yearly briefing to the board or audit committee, with a risk register, open audits and policy changes, gives them what they need to answer and confirms the risk appetite the team works to.

                ## Milestones
                1. A transfer pricing risk register with likelihood, impact and owner for each risk.
                2. A briefing paper of no more than four pages.
                3. The briefing presented to the board or audit committee.
                4. Decisions and risk appetite recorded in the minutes.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The board or audit committee receives a transfer pricing briefing each year, with the agreed risk appetite recorded in its minutes."
                cadence: cyclic
              tasks:
                - "Build a transfer pricing risk register with likelihood, impact and owner"
                - "Draft a briefing paper of no more than four pages"
                - "Present the transfer pricing briefing to the board or audit committee @recurring(yearly)"
                - "Record the decisions and risk appetite agreed"
            - name: First foreign subsidiary transfer pricing set-up
              description: |-
                ## Purpose
                Opening a first overseas subsidiary or sales office, many mid-sized businesses run everything through an informal recharge, then discover two tax authorities each think they are owed the profit. Setting up pricing, an agreement and simple documentation in the first year, scaled to the size of the flows, costs far less than unpicking three years of it later.

                ## Milestones
                1. The new entity's role agreed: sales support, distribution, services or development.
                2. A pricing basis for that role agreed with an adviser in each country.
                3. An intercompany agreement signed before the first invoice.
                4. Charges invoiced and settled on a regular rhythm from the start.
                5. Each country's documentation requirement for a group of this size confirmed.

                ## Notes
                A small group may owe little formal documentation, but it still needs arm's length prices and an agreement. Size changes the paperwork, not the principle.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The new subsidiary has a signed agreement, an adviser-agreed pricing basis and regular settled charges within its first year."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a one-paragraph description of what the new entity will do"
                - "Ask an adviser in each country for a sensible pricing basis"
                - "Sign the intercompany agreement before the first invoice"
                - "Set up the first charge invoice and settlement routine"
            - name: Integrating an acquired company's transfer pricing
              description: |-
                ## Purpose
                An acquisition brings its own intercompany flows, agreements, open audits and sometimes a policy that contradicts the group's. A structured integration in the first months finds inherited exposures, checks them against the purchase agreement's tax warranties, and brings the new entities under group policy at a clear date.

                ## Milestones
                1. The transfer pricing findings in due diligence and the tax warranties reviewed.
                2. The acquired entities' intercompany flows added to the related-party map.
                3. Inherited open audits and exposures logged with advisers.
                4. A date set for moving the acquired entities onto group policy, with agreements signed.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The acquired entities are on group policy from a recorded date, with inherited exposures logged and new agreements signed."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Read the transfer pricing findings in the due diligence report"
                - "Add the acquired entities' intercompany flows to the related-party map"
                - "Log inherited open audits and exposures with your advisers"
                - "Set and announce the date the acquired entities move onto group policy"
            - name: Preparing to cross the country-by-country reporting threshold
              description: |-
                ## Purpose
                Approaching the consolidated revenue threshold for country-by-country reporting brings a step change for a growing group: a new report, notifications in every country and, in many places, master file duties too. Planning a year ahead, with data sources and a filing entity in place, avoids building the first report by hand in a rush.

                ## Milestones
                1. Revenue forecasts compared with the current threshold, confirmed with advisers.
                2. The first reporting year and filing entity identified.
                3. A dry-run report produced from the prior year's data.
                4. Notification and master file obligations added to the compliance calendar.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A dry-run country-by-country report exists, the first reporting year and filing entity are recorded, and the new obligations are in the calendar."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Compare consolidated revenue forecasts with the current reporting threshold"
                - "Ask advisers which year would be the first reporting year"
                - "Produce a dry-run report from last year's data"
                - "Add the new notifications and master file to the compliance calendar"
            - name: Subsidiary controller's guide to head office recharges
              description: |-
                ## Purpose
                Local controllers carry the consequences of transfer pricing: the recharge that wipes out local profit, the local auditor asking what the management fee buys, the return disclosure. A controller who knows their entity's characterisation, checks charges against the policy every month and keeps local evidence of benefit can defend the entity's results in their own country.

                ## Milestones
                1. The entity's characterisation, tested party role and target return written on one page.
                2. Each incoming and outgoing charge checked against the policy every month.
                3. Evidence of services received kept locally.
                4. Questions and disputes raised with group tax before the local year end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly checks of intercompany charges are recorded and every disputed charge was raised with group tax before the local year end."
                cadence: rolling
              tasks:
                - "Write your entity's characterisation and target return on one page"
                - "Check the month's intercompany charges against the group policy @recurring(monthly:12)"
                - "Keep local evidence of services received from head office"
                - "Raise disputed charges with group tax before the local year end"
            - name: Handover for a new transfer pricing lead
              description: |-
                ## Purpose
                When the transfer pricing lead changes, years of context about why a rate was chosen or what was told to an authority can leave with them. A structured first ninety days, covering the policy, the calendar, open audits, advisers and the main judgement calls, lets a new lead take over without losing a filing deadline.

                ## Milestones
                1. The policy, calendar, requirements matrix and open audit list read in the first thirty days.
                2. Meetings held with each adviser and the controllers of the largest entities.
                3. The main judgement calls and their history written up.
                4. A ninety-day plan agreed with the group finance director.

                ## Notes
                Start from the **Onboarding 30/60/90** template. If the outgoing lead is still around, a two-hour recorded walkthrough of open issues is worth more than any handover document.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within ninety days the new lead has met every adviser, written up the main judgement calls and agreed a plan with the finance director."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Read the policy, compliance calendar and open audit list"
                - "Meet each adviser and the controllers of the five largest entities"
                - "Write up the main judgement calls and their history"
                - "Agree a ninety-day plan with the group finance director"
            - name: Persistent losses in a limited risk entity
              description: |-
                ## Purpose
                Distributors and service companies characterised as limited risk should not make losses year after year, yet start-up years, price wars and restructurings often produce exactly that. Investigating the cause, then either adjusting the pricing or documenting why the losses fit the entity's real role, is far better than waiting for an authority to recharacterise it.

                ## Milestones
                1. Three years of the entity's results analysed and the causes of loss identified.
                2. The causes compared with the functions and risks the entity actually bears.
                3. A decision recorded with advisers: adjust pricing, recharacterise the entity or document the losses.
                4. The decision reflected in the policy, the agreement and the next local file.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the loss-making entity, agreed with advisers, is reflected in its policy section, agreement and next local file."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull three years of results for the loss-making entity"
                - "Identify the causes of loss: volume, pricing, start-up costs or one-offs"
                - "Agree with advisers whether to adjust pricing or document the losses"
                - "Update the policy, agreement and local file for the decision"
            - name: Transfer pricing audit defence file
              description: |-
                ## Purpose
                Transfer pricing audits arrive in waves of questions over months or years, and the answers have to stay consistent with each other and with what other countries were told. A defence file for each enquiry, with a chronology, every submission, the key documents and a position paper agreed with advisers, keeps the group's story coherent and the cost of the enquiry visible.

                ## Milestones
                1. A defence file opened for each enquiry with a chronology of every contact.
                2. Every request logged with its due date, owner and response.
                3. A position paper agreed with advisers covering characterisation, method and comparables.
                4. Submissions checked for consistency with the master file and other local files.
                5. The outcome, settlement or appeal decision recorded.

                ## Notes
                Answer what was asked, accurately and on time. Volunteering extra analysis without advice can widen an enquiry.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every live transfer pricing enquiry has a defence file with a chronology, a request log with no missed due dates and an agreed position paper."
                cadence: rolling
              tasks:
                - "Open a defence file with a chronology for each live enquiry"
                - "Log every authority request with due date, owner and response"
                - "Agree a position paper covering characterisation, method and comparables"
                - "Check each submission against the master file and other local files"
            - name: Advance pricing agreement feasibility
              description: |-
                ## Purpose
                An advance pricing agreement fixes the method for a transaction with one or more authorities for several years, trading cost and disclosure for certainty. Testing the case for one, by looking at the size of the flow, the audit history and each authority's programme, shows whether certainty is worth a process that can take years.

                ## Milestones
                1. Candidate transactions ranked by value, dispute history and complexity.
                2. Each relevant authority's programme, fees and typical timescales gathered with advisers.
                3. Costs and benefits of a unilateral agreement, a bilateral one and no agreement compared.
                4. A decision recorded to apply, wait or not pursue.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to apply, wait or not pursue an advance pricing agreement, based on a cost and benefit comparison prepared with advisers."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Rank intercompany transactions by value, dispute history and complexity"
                - "Ask advisers about each authority's programme and typical timescales"
                - "Compare unilateral, bilateral and no agreement on cost and certainty"
                - "Record the decision to apply, wait or not pursue"
            - name: Mutual agreement procedure for double taxation
              description: |-
                ## Purpose
                Double taxation arises when one authority raises profit in its country and the other gives no matching reduction, so the group pays tax twice on the same income. The mutual agreement procedure under tax treaties lets the two authorities settle it, but there are strict time limits for starting a case, and claims are often lost to a missed window rather than weak arguments.

                ## Milestones
                1. The relevant treaty's time limit for starting the procedure confirmed with advisers.
                2. The case prepared with the adjustment, the documentation and the double tax amount.
                3. The interaction with domestic appeals and any collection suspension agreed with advisers.
                4. Progress logged at each contact until the authorities reach agreement.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A mutual agreement case is lodged within the treaty time limit, with the double tax quantified and every contact logged until closure."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Confirm the treaty time limit for starting a mutual agreement case"
                - "Calculate the double tax created by the adjustment"
                - "Agree with advisers how domestic appeals interact with the case"
                - "Log each contact with both authorities until the case closes"
            - name: Business restructuring and exit charge review
              description: |-
                ## Purpose
                Moving functions, risks or intangibles between countries, such as centralising procurement or converting a full distributor to limited risk, can lead an authority to claim that something of value left its country. Reviewing a restructuring before it happens, with any transfer valued and the before and after functional analysis documented, avoids an exit charge discovered in an audit years later.

                ## Milestones
                1. The functions, assets and risks before and after the restructuring documented.
                2. Anything of value transferred identified and valued with advisers.
                3. Whether compensation is payable decided, with the reasoning recorded.
                4. Agreements, policy and local files updated from the effective date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A restructuring memo records the before and after functional analysis, the valuation of anything transferred and the compensation decision."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Document functions, assets and risks before and after the restructuring"
                - "Ask advisers to identify and value anything transferred"
                - "Record whether compensation is payable and why"
                - "Update agreements and the policy from the effective date"
            - name: Customs values and transfer pricing adjustments
              description: |-
                ## Purpose
                Customs authorities value imported goods largely on the invoice price, and a year-end transfer pricing adjustment can change that price after the goods have cleared. Aligning the two, through rulings, declarations or reconciliation procedures where they exist, avoids underpaid duty in one direction and lost refunds in the other.

                ## Milestones
                1. Intercompany goods flows that cross a customs border listed.
                2. Each country's treatment of post-import price adjustments confirmed with a customs adviser.
                3. A procedure for declaring or reconciling adjustments agreed.
                4. The latest true-up checked for customs effects.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written procedure covers how true-ups are declared to customs in each importing country, and the latest true-up has been checked against it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List intercompany goods flows that cross a customs border"
                - "Ask a customs adviser how each country treats later price adjustments"
                - "Agree a procedure for declaring true-ups to customs"
                - "Check last year's true-up for customs effects"
---

# Transfer Pricing Documentation

This area is for group tax and finance teams in international groups, and for the finance managers and local controllers who live with the results of intercompany pricing. It starts with the foundations (a map of every related-party transaction, the entity chart, a country requirements matrix, the group policy, the functional analysis and signed agreements), moves to the operating rhythm of monthly charges, quarterly margin monitoring, year-end true-ups and annual files, then the skills behind methods, benchmarks and intangibles, the pricing decisions and support files, the dated filings and reviews, the situations groups grow into, and finally audits, advance pricing agreements, double tax cases and restructurings.

What repeats is a monthly charge run, a deadline look-ahead and a controller check of recharges, quarterly margin monitoring, evidence filing and agreement reviews, a year-end true-up, and the annual cycle of local files, the master file, benchmark updates, return disclosures and the country-by-country report. The Meeting notes, Compliance control, Vendor, Purchase decision, Risk register and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
