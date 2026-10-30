---
id: finance-accounting.multi-entity-consolidation
name: Multi-Entity Consolidation
description: "An entity register and scope memo, group policies, mapping and reporting packs, monthly intercompany matching, eliminations and currency translation, and the acquisitions, disposals and specialist cases that test a group close."
category: business
version: 1.0.0
tags: [finance-accounting, multi-entity-consolidation, enterprise, manager, team, intercompany, eliminations, group-reporting]
author: Aurum Technology
starter_structure:
  templates:
    - month-end-close
    - metrics-log
    - purchase-decision
    - risk-register
    - onboarding-30-60-90
    - skills-matrix
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Multi-Entity Consolidation
          description: "Consolidating results across subsidiaries and regions, eliminating intercompany balances and reporting group figures for growing and international organisations."
          projects:
            - name: Group structure chart and legal entity register
              description: |-
                ## Purpose
                Consolidation starts with knowing exactly which companies exist, who owns them and in what percentages, and that list is often scattered between the company secretary, the tax adviser and an old slide. A single register with each entity's legal name, registration number, country, owner, ownership percentage, year end and status gives every later project in this area one source of truth. Drawing the structure chart from the register, rather than the other way round, keeps the two consistent.

                ## Milestones
                1. Every legal entity listed with registration number, country, incorporation date and status: trading, dormant or in liquidation.
                2. Direct and effective ownership percentages recorded for each entity, including outside shareholders.
                3. Year end, local accounting framework and statutory auditor noted for each entity.
                4. A structure chart drawn from the register and checked by the company secretary or legal team.
                5. One named owner responsible for keeping the register current.

                ## Notes
                Effective ownership through chains of holdings is where errors creep in: 80 percent of a company that owns 60 percent of another gives the group 48 percent of the second company, not 60.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A legal entity register covering every group company, with ownership percentages and year ends, matches a structure chart signed off by legal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the latest entity list from the company secretary, legal team or registered agent"
                - "Record legal name, number, country, owner and ownership percentage for each entity"
                - "Calculate effective ownership for every indirectly held company"
                - "Draw the group structure chart from the register and send it to legal for review"
                - "Reconcile the register to company registry filings and share registers @recurring(yearly)"
            - name: Consolidation scope and control assessment
              description: |-
                ## Purpose
                Which entities are consolidated depends on control, not simply on owning more than half the shares: voting agreements, potential voting rights, board appointment rights and structured entities can change the answer either way. A written assessment classifying each entity as a subsidiary, associate, joint arrangement or simple investment is what auditors ask for first, and it protects the group from consolidating the wrong things. Agree the conclusions with your auditors or a technical accounting adviser before relying on them.

                ## Milestones
                1. Each entity in the register classified as subsidiary, associate, joint arrangement, structured entity or simple investment.
                2. The evidence behind each classification noted: shareholdings, voting rights, board seats and shareholder agreements.
                3. Borderline cases written up in a short memo naming the part of the standard relied on.
                4. Conclusions reviewed with the auditors or a technical accounting adviser.
                5. A list of events that would trigger reassessment kept with the memo.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scope memo classifies every entity in the register, with evidence for each and borderline cases reviewed by the auditors."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull every shareholder agreement and joint venture agreement into one folder"
                - "Classify each entity in the register against the control criteria your framework uses"
                - "Write a short memo on each borderline entity with the evidence considered"
                - "Send the scope memo to the auditors for comment before the next reporting date"
                - "Reassess scope against the latest register and agreements @recurring(yearly)"
            - name: Functional currency assessment for each entity
              description: |-
                ## Purpose
                An entity's functional currency is the currency of the economy it mainly operates in, judged from where it sells, sets prices, incurs costs and raises finance, and it is not automatically the currency of the country it is registered in. Getting it wrong distorts every translation and exchange difference that follows, and changing it later is disruptive. Documenting the indicators for each entity once means the translation run starts from settled ground.

                ## Milestones
                1. Primary indicators such as sales prices, costs and labour, and secondary ones such as financing and cash retention, recorded per entity.
                2. A functional currency concluded for every entity, with the reasoning in two or three sentences.
                3. Entities whose ledgers are kept in a currency other than their functional currency identified.
                4. Conclusions reviewed by the auditors or a technical accounting adviser.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every entity has a documented functional currency conclusion, with its indicators recorded and auditor review noted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the currency of sales, costs and borrowing for each entity"
                - "Flag entities whose ledger currency differs from their likely functional currency"
                - "Write a functional currency conclusion for each entity with its main indicators"
                - "Review the conclusions with the auditors or your technical accounting adviser"
                - "Confirm no entity's underlying operations have shifted currency @recurring(yearly)"
            - name: Group accounting policies manual
              description: |-
                ## Purpose
                Subsidiaries keep their books under local rules, so one capitalises development costs, another expenses them, and a third depreciates vans over three years instead of five. A group policies manual sets out the treatment every entity must report under for group purposes, from revenue and inventory to leases and provisions, so the adjustments needed are known in advance rather than discovered at year end. Keep it short, specific and tied to the group's reporting framework.

                ## Milestones
                1. The group's reporting framework stated, for example IFRS or US GAAP, with any options the group has chosen.
                2. Policies written for the areas that differ most between entities: revenue, inventory, asset lives, leases, provisions and capitalisation thresholds.
                3. Known differences between each entity's local practice and group policy listed in an appendix.
                4. The manual approved by the group finance director and sent to every entity finance lead.
                5. A version history and an annual review date recorded.

                ## Notes
                Choices of accounting treatment should be agreed with the auditors and, where judgement is involved, a technical accounting adviser. The manual records the decisions; it does not replace that advice.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved group policies manual, with an appendix of each entity's known differences, has been sent to every entity finance lead."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "List the policy areas where entities currently account differently"
                - "Draft group policy wording for revenue, inventory, fixed assets, leases and provisions"
                - "Record each entity's known differences from group policy in an appendix"
                - "Get the manual approved by the group finance director and send it to entity leads"
                - "Review the manual for new standards and group changes @recurring(yearly)"
            - name: Group chart of accounts and entity mapping
              description: |-
                ## Purpose
                Each subsidiary's ledger has its own account codes, and the consolidation can only add them up once every local account maps to one group account. A group chart with a mapping table per entity, plus a rule that new local accounts are mapped before they are used, removes the monthly hunt for balances landing in suspense. This is a mapping layer for group reporting, not a redesign of each entity's own ledger.

                ## Milestones
                1. A group chart of accounts at the level of detail the group statements and notes need.
                2. Every active local account in every entity mapped to a group account.
                3. Intercompany accounts mapped to dedicated group accounts, separate from third-party balances.
                4. A control report that lists unmapped or newly created local accounts.
                5. Each entity lead's sign-off that their mapping is complete.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active local account in every entity maps to a group account, and the unmapped accounts report shows zero before each consolidation."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Export the trial balance with account codes from every entity"
                - "Draft the group chart at the level the consolidated statements and notes need"
                - "Map each entity's local accounts to the group chart and flag anything ambiguous"
                - "Ask each entity lead to sign off their mapping"
                - "Run the unmapped accounts report before the consolidation opens @recurring(monthly:5)"
            - name: Group reporting calendar with entity deadlines
              description: |-
                ## Purpose
                Groups close slowly when every entity picks its own pace, so the timetable has to be written backwards from the date the board pack or lender report is due. A calendar that sets, by working day, when intercompany balances are agreed, packs submitted, queries closed and the group signed off gives subsidiary teams a fixed target and the group team time to review. Publishing it for the full year lets entities plan around local holidays and statutory filings.

                ## Milestones
                1. External deadlines listed: board meetings, lender reporting, regulatory filings and results announcements.
                2. Working-day deadlines set for intercompany agreement, pack submission, query closure and group sign-off.
                3. Public holidays and statutory filing dates in each country checked against those deadlines.
                4. The calendar published to every entity finance lead for the year ahead.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month group reporting calendar with working-day deadlines for each step is published and acknowledged by every entity lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every external date the group numbers must be ready for"
                - "Set working-day deadlines for intercompany, pack submission, queries and sign-off"
                - "Check the dates against public holidays in every country the group operates in"
                - "Send the calendar to entity leads and ask each to confirm it"
                - "Publish next year's group reporting calendar each autumn @recurring(yearly)"
            - name: Entity reporting pack design
              description: |-
                ## Purpose
                Trial balances alone are not enough to consolidate; the group also needs intercompany detail by counterparty, fixed asset and provision movements, cash flow information, headcount and the answers the notes require. Designing one standard reporting pack, in group accounts and with built-in checks, means every entity answers the same questions in the same format each period. Packs that balance and cross-check before submission cut review time sharply.

                ## Milestones
                1. Pack sections defined: trial balance, intercompany by counterparty, movement schedules, cash flow data and disclosure questions.
                2. Built-in checks that the trial balance balances, intercompany totals agree and movements roll forward.
                3. Monthly, quarter-end and year-end versions, each with only the extra schedules that period needs.
                4. The pack piloted by two entities for one period and revised from their feedback.
                5. Completion instructions issued alongside the pack.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standard entity reporting pack with automatic balance checks has been completed by every entity for at least one period."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List what the group statements and notes need from each entity"
                - "Build the pack sections and the automatic balance and roll-forward checks"
                - "Pilot the pack with two entities for one month"
                - "Revise the pack from pilot feedback and issue it with completion instructions"
            - name: Intercompany counterparty codes and account structure
              description: |-
                ## Purpose
                Balances between group companies can only be matched if both sides record them against the same counterparty and the same type of balance, such as trading, loans, interest and recharges. Giving every entity a counterparty code and a small set of dedicated intercompany accounts is the cheapest fix for months of unexplained differences. Without it, intercompany sits in general receivables and nobody can eliminate it with confidence.

                ## Milestones
                1. A counterparty code assigned to every group entity and loaded in every ledger.
                2. Dedicated intercompany accounts set up for trading balances, loans, interest and management recharges.
                3. Group companies removed from ordinary customer and supplier lists.
                4. Every entity posting intercompany transactions with a counterparty code from the next period onwards.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every entity records intercompany balances in dedicated accounts tagged with a counterparty code, with no group companies set up as ordinary customers or suppliers."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Assign a counterparty code to every entity in the register"
                - "Define the intercompany account set for trading, loans, interest and recharges"
                - "Ask each entity to move group companies out of the ordinary customer and supplier lists"
                - "Check one month of intercompany postings for missing counterparty codes"
            - name: Current consolidation process map and pain points
              description: |-
                ## Purpose
                Before changing anything, write down how the consolidation really runs today: which files feed which, who adjusts what, and where the late nights come from. A process map with timings and handoffs usually shows that a few steps, often intercompany differences and late packs, cause most of the delay. It also becomes the baseline every later improvement is measured against.

                ## Milestones
                1. Every step of the last consolidation listed with owner, input, output and elapsed time.
                2. Spreadsheet links, manual rekeying and late handoffs marked on the map.
                3. The five steps that took longest or caused most rework identified.
                4. A baseline recorded: working days to close, number of late packs and number of post-close adjustments.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A process map of the last group consolidation, with timings and the five biggest delays, is shared with the group finance team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Walk through the last consolidation step by step with whoever ran it"
                - "Record the owner, input, output and time taken for each step"
                - "Mark every manual rekeying step and spreadsheet link on the map"
                - "Write down the baseline close days, late packs and post-close adjustments"
            - name: Monthly intercompany balance matching
              description: |-
                ## Purpose
                Unmatched intercompany balances are the most common reason group closes run late, and a difference is far easier to explain in week one than at year end. Matching every counterparty pair before packs are submitted, with each side confirming its balance and any difference traced to a cut-off item or an error, means eliminations clear to zero. Treat an unexplained difference as a pack defect, not a group problem.

                ## Milestones
                1. A matching report listing every counterparty pair, both balances and the difference.
                2. A tolerance agreed below which differences go to a holding account rather than being investigated.
                3. Every difference above tolerance explained by the entity leads before pack submission.
                4. Three consecutive months closed with no unexplained intercompany differences.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive month ends where every intercompany difference above tolerance was explained before pack submission."
                cadence: rolling
              tasks:
                - "Agree an intercompany difference tolerance with the group controller"
                - "Run the intercompany matching report for every counterparty pair @recurring(monthly:2)"
                - "Send each entity lead the list of unexplained differences to resolve @recurring(monthly:3)"
                - "Record the cause of each difference resolved this month"
            - name: Intercompany ageing and settlement routine
              description: |-
                ## Purpose
                Trading balances between group companies that are never paid grow into large, old balances that nobody can reconcile, and they can create tax and currency problems in the entities holding them. A monthly ageing review with an agreed settlement rule, for example that trading balances are settled within sixty days, keeps balances small and recent. Treasury makes the payments; this routine decides what is due and chases it.

                ## Milestones
                1. An intercompany ageing report by counterparty and age band.
                2. A settlement rule for trading balances agreed with treasury and tax, separate from formal loans.
                3. Balances older than the rule either settled or converted into documented loans.
                4. Aged intercompany beyond the rule reduced to near zero within two quarters.

                ## Notes
                Converting old trading balances into loans has tax and legal consequences in some countries. Take advice from the group tax team before doing it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Intercompany trading balances older than the agreed settlement period are under an agreed threshold at two consecutive quarter ends."
                cadence: rolling
              tasks:
                - "Agree a settlement period for intercompany trading balances with treasury and tax"
                - "Produce the intercompany ageing report by counterparty"
                - "Review balances older than the settlement period and assign each an action @recurring(monthly:12)"
                - "Send treasury the list of balances due for settlement this month"
            - name: Monthly group consolidation run
              description: |-
                ## Purpose
                The consolidation itself should run from a checklist in the same order every month: lock packs, load data, translate, post eliminations and adjustments, review and sign off. Writing the run down with owners, evidence and a reviewer for each journal turns it from one person's craft into a repeatable process the team can cover. The output is a consolidated trial balance that ties back to every submitted pack.

                ## Milestones
                1. A consolidation checklist with each step's owner, evidence and reviewer.
                2. Every consolidation journal prepared and approved by different people, with support attached.
                3. A tie-out showing the consolidated trial balance equals packs plus adjustments plus eliminations.
                4. The period locked in the consolidation file or system after sign-off.
                5. Six consecutive monthly consolidations completed from the checklist.

                ## Notes
                Start from the **Month-end close** template and replace its entity steps with the group steps above.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive group consolidations run from the checklist, each with a tie-out and approved journals before the period lock."
                cadence: rolling
              tasks:
                - "Write the consolidation steps in order with an owner and reviewer for each"
                - "Build a tie-out from entity packs to the consolidated trial balance"
                - "Run the consolidation checklist and lock the period after sign-off @recurring(monthly:7)"
                - "File the approved journals and tie-out with the period's working papers"
            - name: Standing elimination journals library
              description: |-
                ## Purpose
                Most groups post the same eliminations every period: investment against share capital, intercompany receivables against payables, intercompany revenue against cost of sales, dividends against dividend income, and interest on group loans. Keeping these as a documented library, each with its logic, source accounts and expected result, means they are posted consistently and a new team member can see why each exists. Eliminations improvised each month are where consolidation errors hide.

                ## Milestones
                1. A list of every recurring elimination with its purpose and source accounts.
                2. Each elimination written as a template journal with the rule for calculating its amounts.
                3. A check that each elimination nets to zero across the group or leaves only the expected residue.
                4. New intercompany relationships added to the library before their first period end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every recurring elimination is documented with its source accounts and calculation rule, and each month's eliminations are posted from the library."
                cadence: rolling
              tasks:
                - "List every elimination posted in the last three consolidations"
                - "Write each one as a template journal with its source accounts and rule"
                - "Add a check that each elimination nets to the expected result"
                - "Review the library for new intercompany relationships @recurring(quarterly)"
            - name: Foreign currency translation run each period
              description: |-
                ## Purpose
                Each entity reporting in another currency must be translated into the group's presentation currency, typically with assets and liabilities at the closing rate, income and expenses at the transaction or average rate and equity at historical rates, the difference going to a translation reserve. Running this the same way each period, from one approved rate source, is what keeps the reserve explainable to the board and the auditors. Confirm the exact method your framework requires with the auditors.

                ## Milestones
                1. One approved source for closing and average rates, including the time of day closing rates are taken.
                2. Rates loaded and checked against the source before translation runs.
                3. Historical rates for share capital and pre-acquisition reserves recorded per entity.
                4. The translation reserve movement analysed by entity each quarter.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of translation runs use rates from the approved source, with the translation reserve movement explained by entity each quarter."
                cadence: rolling
              tasks:
                - "Agree the rate source and the time closing rates are taken with treasury"
                - "Record historical rates for each entity's share capital and acquisition reserves"
                - "Load and check the period's closing and average rates against the source @recurring(monthly:4)"
                - "Explain the translation reserve movement by entity at quarter end"
            - name: Entity pack review and query log
              description: |-
                ## Purpose
                Reviewing packs well means looking for what will hurt the group: unusual movements, intercompany that does not agree, items in the wrong group account and commentary that does not explain the numbers. A shared query log, with each question addressed to a named entity lead and a deadline from the reporting calendar, keeps everyone working from the same list and leaves an audit trail. Repeated queries to the same entity point to a training need, not just a fix.

                ## Milestones
                1. A review checklist per pack covering balance checks, movements over threshold, intercompany and mapping.
                2. A query log with entity, question, owner, date raised and date closed.
                3. Every query closed, or carried forward with a reason, before group sign-off.
                4. Recurring query themes summarised per entity each quarter and shared with its lead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every query raised on entity packs is logged and closed before sign-off for three consecutive periods, with quarterly themes shared with entity leads."
                cadence: rolling
              tasks:
                - "Write a pack review checklist with the thresholds the group uses"
                - "Set up a shared query log with owner, date raised and date closed"
                - "Close or carry forward every open query before consolidation sign-off @recurring(monthly:6)"
                - "Send each entity lead a summary of their recurring query themes each quarter"
            - name: Local GAAP to group policy adjustments schedule
              description: |-
                ## Purpose
                Entities that keep their books under local accounting rules need adjustments to bring their figures onto group policies, and those adjustments must be tracked carefully because many reverse or roll forward each period. A schedule per entity, listing each adjustment, its basis, the opening position and the movement, stops the same difference being adjusted twice or forgotten. It also shows how far each entity's local accounts sit from its group figures.

                ## Milestones
                1. Each entity's adjustments listed with the policy difference behind them.
                2. Opening balances, period movements and closing positions tracked for each adjustment.
                3. Adjustments posted at group level with a clear reference back to the schedule.
                4. The schedule reconciled to the equity difference between local and group figures at each year end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every local to group adjustment is on a schedule with opening, movement and closing amounts, reconciled to the equity difference at year end."
                cadence: rolling
              tasks:
                - "List the policy differences each entity has from the group manual"
                - "Build an adjustment schedule per entity with opening, movement and closing columns"
                - "Post group-level adjustments with a reference to the schedule line"
                - "Update the adjustment schedules with the quarter's movements @recurring(quarterly)"
            - name: Unrealised profit in intercompany stock
              description: |-
                ## Purpose
                When one entity sells goods to another at a margin and they are still in stock at period end, the group has not yet earned that profit, so it must come out of the consolidated results and stock value. Collecting the stock held from group suppliers and the margin each supplier charged, every quarter end, gives a defensible elimination instead of a rough estimate. Groups with a factory selling to distribution companies feel this most.

                ## Milestones
                1. Each entity's closing stock bought from group suppliers reported in its pack.
                2. The selling entity's margin on those goods confirmed.
                3. The unrealised profit elimination calculated and posted with support.
                4. Any tax effect of the elimination passed to the group tax team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An unrealised profit elimination, supported by stock held and supplier margins, is posted at four consecutive quarter ends."
                cadence: rolling
              tasks:
                - "Add a schedule of stock held from group suppliers to the reporting pack"
                - "Collect intercompany stock held at period end from each entity @recurring(quarterly)"
                - "Confirm the margin each selling entity charged on those goods"
                - "Calculate and post the unrealised profit elimination with its working"
            - name: Non-controlling interests schedule
              description: |-
                ## Purpose
                Where the group owns less than all of a subsidiary, the outside shareholders' share of its profit and net assets has to be shown separately as non-controlling interests. A schedule per partly owned entity, starting from the acquisition position and rolling forward with profit, dividends, translation and ownership changes, keeps that line right and makes it easy to explain. Ownership percentages come straight from the entity register.

                ## Milestones
                1. Every partly owned entity identified from the register with its outside ownership percentage.
                2. The opening non-controlling interest per entity agreed to the prior year group accounts.
                3. Share of profit, dividends to outside shareholders and translation movements calculated each quarter.
                4. The closing balance reconciled to the outside shareholders' share of net assets.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A non-controlling interests schedule for every partly owned entity reconciles to the outside share of net assets at each quarter end."
                cadence: rolling
              tasks:
                - "List every partly owned entity and its outside ownership percentage from the register"
                - "Agree each opening non-controlling interest to the prior year group accounts"
                - "Recalculate non-controlling interests for profit, dividends and translation @recurring(quarterly)"
                - "Reconcile the closing balance to the outside share of net assets"
            - name: Group equity and reserves roll-forward
              description: |-
                ## Purpose
                Consolidated equity is where small errors in eliminations, translation and minority calculations accumulate, and a group whose equity does not roll forward cleanly cannot fully explain its balance sheet. A quarterly roll-forward of share capital, retained earnings, translation reserve, other reserves and non-controlling interests, tied to the statement of changes in equity, catches those errors while they are still small.

                ## Milestones
                1. Opening equity by component agreed to the last published group accounts.
                2. Every movement by component sourced: profit, dividends, translation, share issues and ownership changes.
                3. A difference line that is zero or explained at every quarter end.
                4. The roll-forward feeding the statement of changes in equity at year end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Group equity rolls forward by component with an unexplained difference of zero at four consecutive quarter ends."
                cadence: rolling
              tasks:
                - "Agree opening equity by component to the last published group accounts"
                - "Build a roll-forward with a line for each type of movement"
                - "Roll forward group equity and investigate any unexplained difference @recurring(quarterly)"
                - "Link the roll-forward to the statement of changes in equity working"
            - name: Group close timetable performance log
              description: |-
                ## Purpose
                Without numbers, improving the group close is guesswork. Logging each month's working days to sign-off, late packs by entity, intercompany differences outstanding at submission and post-close adjustments shows where the time goes and whether changes are working. Twelve months of data is also the strongest case for investing in a consolidation system.

                ## Milestones
                1. A metrics log with columns for close days, late packs, intercompany differences and post-close adjustments.
                2. Twelve monthly entries recorded.
                3. A short quarterly note on the trend shared with the group finance director.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly entries in the close metrics log, with a quarterly trend note shared with the group finance director."
                cadence: rolling
              tasks:
                - "Create the close metrics log from the template"
                - "Record close days, late packs and intercompany differences in the log @recurring(monthly:10)"
                - "Write a three-line quarterly note on the trend for the finance director"
            - name: Control and consolidation scope standards study
              description: |-
                ## Purpose
                Under most frameworks, control means power over the investee, exposure to variable returns, and the ability to use that power to affect those returns, and the detail matters for agents, protective rights and structured entities. Working through the standard your group reports under, such as IFRS 10 or ASC 810, with your own entities as the examples, gives you the language to defend scope decisions to auditors. Focus on the cases your group actually has.

                ## Milestones
                1. The control definition in your framework summarised in your own words on one page.
                2. The difference between substantive and protective rights explained with an example from your group.
                3. Principal versus agent and structured entity guidance read and noted.
                4. Two of your group's entities analysed against the standard as practice cases.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page control summary and two worked entity analyses are filed with the scope memo."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the control section of the consolidation standard your group reports under"
                - "Summarise the control definition on one page in your own words"
                - "Analyse two of your own entities against the criteria as practice"
                - "Discuss one borderline case with your auditor or a technical adviser"
            - name: Foreign currency translation and the translation reserve
              description: |-
                ## Purpose
                Translation differences confuse boards because they move equity without touching profit, then reappear in profit when a foreign operation is sold. Understanding exactly how the reserve builds up, which rates apply to which balances and when amounts are recycled lets you explain a large swing in a sentence. Practise on a simple example before applying it to the group's numbers.

                ## Milestones
                1. Use of closing, average and historical rates summarised by type of balance.
                2. A one-entity worked example where the translation difference is calculated from scratch.
                3. The recycling rule on disposal of a foreign operation written down with an example.
                4. A two-sentence explanation of the latest translation movement drafted for the board.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked translation example built from scratch reconciles to the reserve movement for one real entity."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the translation section of the foreign currency standard your group uses"
                - "Build a one-entity translation example in a spreadsheet from scratch"
                - "Reconcile the example to one real entity's translation reserve movement"
                - "Draft a two-sentence board explanation of the latest translation movement"
            - name: Equity accounting for associates and joint ventures
              description: |-
                ## Purpose
                Associates and joint ventures are not consolidated line by line; the group carries a single investment balance that grows with its share of profit and shrinks with dividends received. Learning the mechanics, including share of other comprehensive income, removing the group's share of profit on transactions with the investee, and when to test for impairment, matters as soon as the group takes its first minority stake. Associates also need to send their figures on time, which the group does not control.

                ## Milestones
                1. The equity method steps summarised from your framework's standard.
                2. A worked roll-forward of one investment: opening, share of profit, dividends and closing.
                3. The rule for removing the group's share of profit on transactions with the investee noted.
                4. An information request agreed with each associate's management to fit the reporting calendar.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An equity method roll-forward exists for each associate or joint venture, with information timing agreed with its management."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the equity method standard your group reports under"
                - "Build an equity method roll-forward for one investment"
                - "Agree with each associate's management what figures they send and when"
                - "Note the indicators that would trigger an impairment test"
            - name: Goodwill and purchase price allocation fundamentals
              description: |-
                ## Purpose
                Acquiring a company means measuring its identifiable assets and liabilities at fair value, recognising intangibles such as customer relationships and brands, and treating the remainder as goodwill. Knowing the steps before the next deal, and which parts need a valuer, helps you brief advisers and set realistic timings for the first group accounts after acquisition. Goodwill is tested for impairment rather than amortised under IFRS, and other frameworks have their own rules.

                ## Milestones
                1. The acquisition method summarised: acquirer, acquisition date, consideration, net assets at fair value and goodwill.
                2. Common intangibles in your sector listed with the evidence a valuer needs for each.
                3. The measurement period rule for finalising provisional amounts noted.
                4. The goodwill impairment testing approach under your framework summarised.

                ## Notes
                Purchase price allocations usually need an independent valuer. This project prepares you to brief one, not to replace them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of the acquisition method and a list of valuer inputs are ready before the group's next acquisition."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the business combinations standard your group reports under"
                - "Summarise the acquisition method in six steps"
                - "List the intangibles a valuer is likely to identify in your sector"
                - "Note how goodwill is tested for impairment under your framework"
            - name: Intercompany elimination worked examples
              description: |-
                ## Purpose
                Eliminations are easy to describe and easy to get wrong in practice: a management fee recorded as revenue by one entity and as a cost by another in a different month, a loan in two currencies, a dividend declared but not yet received. Building a small set of worked examples from your group's real transactions shows where the entries break and what each elimination should leave behind. They double as training material for anyone new to the team.

                ## Milestones
                1. Five worked examples covering trading, recharges, loans, interest and dividends.
                2. One example where the two sides are in different currencies, with the exchange difference explained.
                3. One example of a cut-off difference and how it is handled.
                4. The examples saved alongside the standing elimination library.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five worked elimination examples drawn from real group transactions are saved with the elimination library and used in team training."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick five real intercompany transactions from last quarter"
                - "Write out the entries in both entities and the elimination for each"
                - "Add an example with a currency mismatch and one with a cut-off gap"
                - "Walk a colleague through the examples and fix anything unclear"
            - name: Consolidated cash flow statement from entity data
              description: |-
                ## Purpose
                Adding up entity cash flows does not give a consolidated cash flow, because intercompany cash moves cancel, acquisitions bring cash in, and translation affects every balance. Building the statement from movements in consolidated balances, with entity packs supplying detail for acquisitions, disposals and non-cash items, gives a statement that reconciles to group cash. Getting it right at the half year avoids a year-end scramble.

                ## Milestones
                1. The cash flow data each pack must provide listed and added to the pack.
                2. A working from consolidated balance sheet movements to cash flow lines, with translation separated out.
                3. Acquisitions and disposals shown net of cash acquired or disposed of.
                4. The statement reconciling to the movement in group cash with no balancing figure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A consolidated cash flow statement reconciles to the group cash movement without an unexplained balancing figure for two reporting periods."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the cash flow data each pack needs to supply"
                - "Build a working from consolidated balance sheet movements to cash flow lines"
                - "Separate the effect of exchange rate changes on cash"
                - "Prepare the statement for the last half year and resolve any balancing figure"
            - name: Segment reporting from the consolidation
              description: |-
                ## Purpose
                Listed groups, and some others, must report results by operating segment the way the chief operating decision maker reviews them, and the segment figures have to reconcile to the consolidated totals. Setting segment codes in the consolidation, rather than splitting numbers in a separate spreadsheet afterwards, keeps both views consistent and auditable. Whether segment disclosure applies to your group is a question for the auditors.

                ## Milestones
                1. Segments confirmed from how leadership actually reviews performance.
                2. Every entity, or part of an entity, assigned a segment code in the consolidation.
                3. Segment revenue, result and assets reconciling to the consolidated totals.
                4. Inter-segment revenue shown and eliminated in the reconciliation.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Segment figures produced from the consolidation reconcile to group totals, with the segments agreed with leadership and the auditors."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Confirm with the auditors whether segment disclosure applies to the group"
                - "List the segments from the reports leadership uses to run the business"
                - "Assign segment codes to entities in the consolidation"
                - "Reconcile segment totals to the consolidated figures"
            - name: Consolidation software selection
              description: |-
                ## Purpose
                Spreadsheet consolidations tend to break down somewhere around ten entities, several currencies or a second acquisition, when version control and audit trail become the bottleneck. Comparing dedicated consolidation tools and the consolidation module of your accounting platform against the same requirements, with your own data in the demonstration, avoids paying for features you will not use. The process map and close metrics give you both the requirements and the business case.

                ## Milestones
                1. Requirements written: entity count, currencies, intercompany matching, ownership changes, audit trail and reporting.
                2. Three options shortlisted, including staying on improved spreadsheets.
                3. Each vendor's demonstration run on a sample of your own entity data.
                4. Five-year total cost and implementation effort compared side by side.
                5. A recommendation approved by the group finance director.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recommendation comparing three options on the same requirements, with five-year cost, is approved by the group finance director."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the consolidation requirements from the process map and close metrics"
                - "Shortlist three options, including an improved spreadsheet approach"
                - "Ask each vendor to demonstrate using a sample of your own entity data"
                - "Compare five-year cost and implementation effort side by side"
            - name: Spreadsheet to consolidation system migration
              description: |-
                ## Purpose
                Moving the group consolidation into a system carries real risk: a period where the old and new answers differ and nobody knows which is right. Running parallel consolidations for at least two periods, with opening balances, ownership history and historical rates loaded and checked, is how you switch over without a restatement. Keep the old spreadsheet frozen, not deleted, for audit reference.

                ## Milestones
                1. Entity structure, mappings, ownership history and historical rates loaded and checked.
                2. Opening balances in the system agreed to the last signed-off consolidation.
                3. Two periods consolidated in parallel with every difference explained.
                4. Entity leads trained on submitting packs in the system.
                5. The spreadsheet consolidation retired and archived as read-only after sign-off.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two parallel periods reconcile between the spreadsheet and the new system before the spreadsheet is retired and archived."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Agree the migration plan and switchover period with the auditors"
                - "Load and check entity structure, mappings, ownership and historical rates"
                - "Run two periods in parallel and explain every difference"
                - "Train each entity lead on submitting their pack in the system"
                - "Archive the final spreadsheet consolidation as read-only"
            - name: Intercompany dispute resolution rule
              description: |-
                ## Purpose
                When two entities disagree about a balance between them, the close stalls while finance leads in different time zones trade emails. A written rule that says who decides, by which working day and which side posts the correcting entry stops disputes running past the deadline. A common default is that the selling or lending entity's figure stands unless the other side proves an error within two working days.

                ## Milestones
                1. The rule written down: who decides, by when, and which side adjusts.
                2. An escalation route named for disputes the entity leads cannot settle.
                3. The rule agreed with every entity lead and added to the reporting instructions.
                4. One quarter of disputes resolved under the rule and reviewed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written intercompany dispute rule naming the decision maker and deadline is in the reporting instructions and was applied for one full quarter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the intercompany disputes from the last two quarter ends and how they ended"
                - "Draft the rule naming who decides, by which working day and who adjusts"
                - "Agree the rule with every entity lead"
                - "Review how disputes went under the rule after one quarter"
            - name: Cutting the group close by three working days
              description: |-
                ## Purpose
                Once the process map and metrics show where the time goes, a target such as moving from ten to seven working days becomes a plan rather than an aspiration. The usual levers are agreeing intercompany before month end, closing smaller entities on estimates, pulling pack deadlines forward and reviewing in parallel instead of in sequence. Change one thing per month so you can see what worked.

                ## Milestones
                1. A target close day agreed with the finance director and written into the reporting calendar.
                2. Three to five changes chosen from the process map, each with an owner.
                3. Intercompany agreement for the largest pairs in place by the last working day of the month.
                4. The target met for three consecutive months.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The group close signs off three working days earlier than the baseline for three consecutive months."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick the three steps from the process map that add the most days"
                - "Agree the target close day and the changes with the finance director"
                - "Move intercompany agreement to before month end for the largest pairs"
                - "Compare each month's close days with the baseline in the metrics log"
            - name: Entity reporting tiers and query thresholds
              description: |-
                ## Purpose
                Not every entity needs the same depth of reporting: a dormant holding company and the main trading subsidiary should not fill in the same thirty schedules. Setting tiers for which entities submit full packs, short packs or minimal packs, and a threshold below which review queries are not raised, focuses the team on what moves the group figures. Agree the tiers with the auditors so they line up with group audit scoping.

                ## Milestones
                1. Entities ranked by revenue, assets and known risk.
                2. Full, short and minimal pack tiers defined, with the schedules each tier submits.
                3. A query threshold set for pack review.
                4. The tiers and thresholds agreed with the auditors.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every entity is assigned a reporting tier with documented thresholds agreed with the auditors."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Rank entities by revenue, total assets and known risk"
                - "Define full, short and minimal pack tiers and their schedules"
                - "Set the pack review query threshold"
                - "Agree the tiers with the auditors before year-end planning"
            - name: Dormant and small entity rationalisation review
              description: |-
                ## Purpose
                Groups collect entities from old acquisitions, abandoned markets and tax structures that no longer apply, and each one still needs accounts, filings, often an audit and a line in the consolidation. Reviewing which entities still serve a purpose, and preparing the case for merging, striking off or liquidating the rest, cuts cost and consolidation work every year after. The legal, tax and employment questions belong with the group's advisers; this project builds the facts they need.

                ## Milestones
                1. Every entity's purpose, activity, balances and annual compliance cost recorded.
                2. Candidates for closure or merger identified with the reason for each.
                3. Intercompany balances, assets and obligations of each candidate listed.
                4. Advisers' views on the tax, legal and employment consequences received.
                5. A decision recorded for each candidate with an owner and timetable.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A rationalisation list with purpose, cost and an adviser-reviewed decision for every dormant or small entity is approved by the finance director."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List each entity's activity, balances and annual compliance cost"
                - "Mark the entities with no current business purpose"
                - "List the intercompany balances and obligations each candidate still holds"
                - "Brief tax and legal advisers on the candidates and record their views"
            - name: Intercompany recharge and invoicing automation
              description: |-
                ## Purpose
                Management charges, shared service costs and group insurance recharged by spreadsheet and email arrive late, in the wrong month or not at all, and every miss becomes an intercompany difference. Generating recharges from one calculation, posted to both entities in the same period with matching references, removes most differences at source. The pricing itself comes from the group's transfer pricing policy; this project is about posting it on time on both sides.

                ## Milestones
                1. Every recurring recharge listed with its calculation basis, frequency and entities.
                2. A single recharge calculation that produces both sides of each entry.
                3. Invoices or journals posted in both entities in the same period with a shared reference.
                4. Recharge differences on the matching report at zero for two quarter ends.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Recurring recharges post to both entities in the same period from one calculation, with no recharge differences at two quarter ends."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every recurring intercompany recharge and its basis"
                - "Build one calculation that produces both sides of each recharge"
                - "Agree a shared reference format for recharge postings"
                - "Check recharge differences on the matching report after each quarter end"
            - name: Integrating an acquired subsidiary into group reporting
              description: |-
                ## Purpose
                A newly acquired company usually arrives with its own ledger, year end, policies and close timetable, and the first group consolidation after completion is due within weeks. Planning the integration in stages, from the opening balance sheet at the acquisition date to full monthly reporting under group policies, keeps the first set of group accounts on time. Expect provisional fair values to change during the measurement period.

                ## Milestones
                1. The acquisition date balance sheet received and mapped to the group chart.
                2. The new entity added to the register, scope memo, reporting calendar and counterparty codes.
                3. Policy differences from the group manual identified and adjustments set up.
                4. Provisional fair values and goodwill booked, with the valuation timetable recorded.
                5. The entity submitting a full group pack by its third month end in the group.

                ## Notes
                Start from the **Risk register** template to log integration risks such as a different year end, an unaudited opening balance sheet or a finance team leaving after completion.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The acquired entity submits a full group reporting pack by its third month end, with provisional goodwill booked and documented."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Request the acquisition date trial balance and the seller's last audited accounts"
                - "Add the entity to the register, scope memo and reporting calendar"
                - "Map its chart of accounts and list its policy differences from the group manual"
                - "Book provisional fair values and goodwill with the valuation timetable noted"
                - "Log integration risks and their owners in a risk register"
            - name: Disposal and deconsolidation of a subsidiary
              description: |-
                ## Purpose
                Selling or closing a subsidiary means stopping its consolidation at the date control passes, calculating the group gain or loss, recycling its translation reserve and settling or reclassifying intercompany balances. Preparing these figures before completion, with the legal date of loss of control confirmed, avoids a late surprise in the results. The tax and legal sides of the sale stay with the advisers.

                ## Milestones
                1. The date of loss of control confirmed with legal from the sale agreement.
                2. Results consolidated up to that date and excluded afterwards.
                3. The group gain or loss calculated, including goodwill and the recycled translation reserve.
                4. Intercompany balances with the disposed entity settled or reclassified as third-party.
                5. Disposal disclosures drafted for the next group accounts.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The disposal is reflected at the confirmed date of loss of control, with a reviewed gain or loss calculation and intercompany balances cleared."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm with the legal team the date control passes to the buyer"
                - "Prepare net assets, goodwill and translation reserve at that date"
                - "Calculate the group gain or loss on disposal and send it for review"
                - "Agree how each intercompany balance with the entity will be settled"
            - name: Onboarding a newly incorporated entity
              description: |-
                ## Purpose
                Setting up a subsidiary in a new country creates consolidation work long before it trades: a functional currency, a mapping, counterparty codes, a capital injection to record on both sides and a place in the reporting calendar. Running a short onboarding checklist in the month the entity is incorporated stops it appearing at year end as an unmapped surprise. The checklist is the same each time, so write it once.

                ## Milestones
                1. The entity added to the register with ownership, year end and local accounting framework.
                2. Its functional currency concluded and recorded.
                3. Chart mapping, counterparty code and reporting pack tier set up.
                4. The initial share capital recorded and eliminated against the parent's investment.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A new entity is in the register, mapped, coded and in the reporting calendar before its first month end."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a new entity onboarding checklist from this project's milestones"
                - "Add the entity to the register, calendar and counterparty code list"
                - "Set up its account mapping and reporting pack tier"
                - "Record and eliminate the initial share capital against the parent's investment"
            - name: Half-year consolidated reporting pack
              description: |-
                ## Purpose
                Interim group results for lenders, investors or the board need more than the monthly consolidation: condensed statements, a cash flow, selected notes and commentary on the main movements. Preparing a half-year pack and timetable well before the period end means the extra schedules are requested in time, and the half year becomes a rehearsal for the year end.

                ## Milestones
                1. The half-year pack's audience, contents and deadline confirmed.
                2. Extra schedules requested from entities at least a month before period end.
                3. Condensed consolidated statements, cash flow and selected notes prepared.
                4. Commentary on the main movements reviewed by the finance director.
                5. The pack delivered by the deadline.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A half-year consolidated pack with statements, cash flow, notes and commentary is delivered by the agreed deadline."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Confirm who receives the half-year pack, what it contains and when it is due"
                - "Request the extra half-year schedules from entities a month ahead"
                - "Prepare condensed statements, cash flow and selected notes"
                - "Draft commentary on the main movements for finance director review"
            - name: Year-end consolidated financial statements and notes
              description: |-
                ## Purpose
                Group accounts are the consolidation's annual exam: full statements, a statement of changes in equity, and notes on subsidiaries, acquisitions, goodwill, segments, non-controlling interests and related parties. Building a disclosure checklist and a notes workbook fed by the year's schedules turns the year end into an assembly job instead of a rebuild. Each entity's own statutory accounts are a separate exercise; this is the group set.

                ## Milestones
                1. A disclosure checklist for the group's framework completed for the year.
                2. A notes workbook populated from the scope memo, non-controlling interests schedule, equity roll-forward and acquisition files.
                3. The list of subsidiaries with countries and ownership percentages agreed to the register.
                4. Draft group accounts sent to the auditors by the reporting calendar date.
                5. Audit adjustments posted and the final statements tied to the consolidation.
              priority: high
              deadlineOffsetDays: 300
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Draft consolidated financial statements with completed notes reach the auditors by the calendar date, and the final version ties to the consolidation."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Obtain a disclosure checklist for the group's reporting framework"
                - "Set up a notes workbook that pulls from the year's consolidation schedules"
                - "Agree the subsidiaries note to the entity register"
                - "Send the draft group accounts to the auditors by the calendar date"
            - name: Group audit component reporting and confirmations
              description: |-
                ## Purpose
                Group auditors rely on work done at component level and send instructions to each component auditor, along with reporting deadlines and intercompany confirmation requests. Coordinating these from the group side, so every component deliverable, auditor clearance and intercompany confirmation arrives on time and agrees, often decides whether the group audit finishes on schedule. General audit preparation sits elsewhere; this is the group-specific layer.

                ## Milestones
                1. The group auditor's instructions and component deadlines received and added to the calendar.
                2. Each component's finance lead briefed on the deliverables and dates.
                3. Intercompany confirmations exchanged and agreed between all counterparty pairs.
                4. Component clearances received and differences resolved before group sign-off.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Every component deliverable and intercompany confirmation reaches the group auditor by the instruction deadlines for one year end."
                cadence: cyclic
              tasks:
                - "Ask the group auditor early for component instructions and deadlines"
                - "Brief each component finance lead on deliverables and dates"
                - "Send intercompany confirmation requests to every entity at year end @recurring(yearly)"
                - "Track component clearances and open points in one list"
            - name: First consolidation after opening a second entity
              description: |-
                ## Purpose
                Growing companies often become groups almost by accident: an overseas subsidiary for a new market, a property company, or a holding company added for investors. A first consolidation of two or three entities does not need a system, but it does need the basics: a shared mapping, intercompany accounts that agree, a translation method and a simple elimination workbook. Getting these right for the first year end saves rework when the group grows.

                ## Milestones
                1. Whether group accounts are required confirmed with the accountants or auditors.
                2. Both entities' trial balances mapped to one simple group chart.
                3. Intercompany balances between them agreed and recorded in dedicated accounts.
                4. A consolidation workbook with translation, eliminations and a tie-out.
                5. The first group figures reviewed with the accountants or auditors.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A consolidation workbook for the new group ties to both entities' trial balances and has been reviewed by the accountants or auditors."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask your accountants or auditors whether group accounts are required"
                - "Map both trial balances to a simple shared chart of accounts"
                - "Agree the intercompany balance between the two entities"
                - "Build a workbook with translation, eliminations and a tie-out to both ledgers"
            - name: New group financial controller's first 90 days
              description: |-
                ## Purpose
                Stepping into a group controller role means inheriting a consolidation you did not build, entity leads you have not met and a year end that may be closer than it looks. A structured first 90 days, learning the structure and process in month one, fixing the riskiest gaps in month two and agreeing the improvement plan in month three, builds credibility before the first group audit. Listen before changing the close.

                ## Milestones
                1. Calls held with every entity finance lead and the group auditor in the first month.
                2. The process map, scope memo and policies manual read, or flagged as missing.
                3. The three riskiest consolidation gaps fixed or under a dated plan by day 60.
                4. An improvement plan agreed with the finance director by day 90.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "By day 90, every entity lead has been met, three top risks addressed and an improvement plan agreed with the finance director."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every entity finance lead and book an introductory call with each"
                - "Shadow one full consolidation before changing anything"
                - "Write down the three riskiest gaps you have found"
                - "Present a ninety-day improvement plan to the finance director"
            - name: Subsidiary accountant handbook for group reporting
              description: |-
                ## Purpose
                Subsidiary accountants often see group reporting as an extra layer of forms with an unclear purpose, especially when head office sits in another country and works in another language. A handbook explaining what the group needs, why, by when and how to complete each schedule, with the common mistakes listed, cuts queries and makes new local hires productive in their first close. Write it for a capable accountant who has never seen your group before.

                ## Milestones
                1. A handbook covering the calendar, the pack, intercompany rules, group policies and the query process.
                2. A worked example of a completed pack.
                3. The ten most common pack errors listed with their fixes.
                4. The handbook sent to every entity and used when onboarding new local finance staff.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A group reporting handbook with a worked pack example is in use by every entity, and queries per pack fall over the following two quarters."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Collect the questions entity accountants asked most often from the query log"
                - "Ask the agent to draft handbook sections on the calendar, pack, intercompany and policies"
                - "Add a completed pack example and the ten most common errors"
                - "Update the handbook after the year-end close @recurring(yearly)"
            - name: Consolidation team cover and skills matrix
              description: |-
                ## Purpose
                Many group consolidations depend on one person who knows where every adjustment lives, which is a real risk at year end, during holidays and on resignation. Mapping who can do each consolidation task, then rotating tasks so every critical step has a trained backup, protects the close and develops the team. It also shows where the training budget should go.

                ## Milestones
                1. Every consolidation task listed against each team member's ability to do it.
                2. Single-person dependencies identified.
                3. A trained backup in place for every critical task.
                4. Tasks rotated at least once a quarter so backups stay current.

                ## Notes
                Start from the **Skills matrix** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every critical consolidation task has at least two people who have performed it in the last six months."
                cadence: rolling
              tasks:
                - "List every consolidation task and who can do it today"
                - "Mark the tasks only one person can do"
                - "Pair a backup with the owner of each single-person task"
                - "Rotate one consolidation task to its backup preparer @recurring(quarterly)"
            - name: Regional sub-consolidation for a cluster of countries
              description: |-
                ## Purpose
                In larger groups, a regional finance lead often consolidates several countries before the figures reach head office, which adds a layer that must agree with the group view. Running the sub-consolidation on the same mapping, policies and eliminations as the group, and reconciling it to the group's figures for the region each quarter, keeps regional management and head office using the same numbers. Eliminations between regions need a clear owner.

                ## Milestones
                1. The regional entities, eliminations and reporting deadlines defined.
                2. The sub-consolidation built on the group chart and policies.
                3. Eliminations between this region and others assigned to the group team.
                4. The regional result reconciled to the group's view of the region each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The regional sub-consolidation reconciles to the group's figures for the region at four consecutive quarter ends."
                cadence: rolling
              tasks:
                - "Agree with the group team which eliminations the region owns"
                - "Build the regional sub-consolidation on the group chart and policies"
                - "Set a regional pack deadline that fits the group calendar"
                - "Reconcile the regional result to the group's figures for the region"
            - name: Entities with different reporting dates
              description: |-
                ## Purpose
                Some subsidiaries have year ends that differ from the parent's because of local law, tax or history, and the group must either obtain figures at the group date or use the entity's own date within the limits its framework allows, adjusted for significant transactions in the gap. Deciding the approach for each such entity, and how the gap is bridged, prevents a different answer every year. Changing a local year end is sometimes the simplest fix and needs legal and tax input.

                ## Milestones
                1. Every entity with a different year end listed with the reason.
                2. An approach chosen for each: an extra close at the group date or use of its own date with adjustments.
                3. Significant transactions in the gap period identified and adjusted for.
                4. The option of aligning year ends assessed with legal and tax advisers.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each entity with a non-aligned year end has a documented approach agreed with the auditors and applied at the latest group year end."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every entity whose year end differs from the parent's and why"
                - "Check the maximum gap and adjustments your framework allows"
                - "Choose and document the approach for each entity"
                - "Ask legal and tax advisers whether aligning the year end is feasible"
            - name: Changes in ownership without loss of control
              description: |-
                ## Purpose
                Buying out part of a minority shareholder, or selling a stake while keeping control, is accounted for within equity rather than through profit under IFRS and US GAAP, which surprises boards expecting a gain. Working through the entries before the transaction completes, including the effect on non-controlling interests and the translation reserve, lets you brief the board accurately and avoid a late audit adjustment. Confirm the treatment with the auditors for the specific deal.

                ## Milestones
                1. The transaction terms and the change in ownership percentage confirmed.
                2. The adjustment to non-controlling interests calculated.
                3. The difference between consideration and that adjustment recorded in equity.
                4. The board briefed that no gain or loss appears in profit.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A reviewed calculation of the equity entry for the ownership change is agreed with the auditors before completion."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Get the transaction terms and new ownership percentage from the deal team"
                - "Calculate the change in non-controlling interests at the transaction date"
                - "Draft the equity entry and the board explanation"
                - "Agree the treatment with the auditors before completion"
            - name: Intercompany loans forming part of the net investment
              description: |-
                ## Purpose
                Long-term loans between a parent and a foreign subsidiary, where settlement is neither planned nor likely in the foreseeable future, can be treated as part of the net investment, so that exchange differences go to the translation reserve on consolidation rather than to profit. The treatment needs evidence of intent, and a change in repayment plans can end it, so these loans deserve their own register. Treasury manages the cash; this project manages the accounting position.

                ## Milestones
                1. Every intercompany loan listed with currency, lender, borrower, terms and repayment plans.
                2. Loans meeting the net investment criteria identified and the evidence of intent documented.
                3. Exchange differences on those loans routed to the translation reserve on consolidation.
                4. Any change in repayment plans flagged for reassessment.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A register of intercompany loans identifies those treated as part of the net investment, with documented intent agreed with the auditors."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every intercompany loan with its currency, terms and repayment plans"
                - "Identify loans where settlement is neither planned nor likely"
                - "Document the evidence of intent for each and agree it with the auditors"
                - "Ask treasury to flag any plan to repay a designated loan"
            - name: Hyperinflation assessment for an operating entity
              description: |-
                ## Purpose
                Operations in countries where prices rise very fast may have to be restated for inflation before translation, which changes revenue, margins and equity in ways the board will want explained. Monitoring the indicators each quarter, and knowing which published index and which rules would apply, means the group is ready if a country tips over. Whether an economy is hyperinflationary is a judgement to confirm with the auditors.

                ## Milestones
                1. Entities in high-inflation economies identified.
                2. The indicators in your framework tracked for each, including cumulative three-year inflation.
                3. The published general price index that would be used for restatement identified.
                4. A restatement approach drafted and discussed with the auditors in advance.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each entity in a high-inflation economy has an indicator assessment on file, refreshed each quarter and discussed with the auditors."
                cadence: rolling
              tasks:
                - "List entities operating in economies with high inflation"
                - "Identify the general price index that would be used for restatement"
                - "Draft the restatement approach the group would follow"
                - "Refresh the inflation indicators and share them with the auditors @recurring(quarterly)"
            - name: Deferred tax on consolidation adjustments
              description: |-
                ## Purpose
                Consolidation adjustments such as unrealised profit eliminations, fair value uplifts on acquisition and undistributed profits of subsidiaries create tax differences that no single entity's tax computation captures. Building a schedule of deferred tax on group-level adjustments, agreed with the group tax team, means the consolidated tax charge and balance sheet are complete. Rates and recognition judgements belong with tax specialists.

                ## Milestones
                1. Every group-level adjustment with a tax effect listed.
                2. The tax rate for each adjustment confirmed with the group tax team.
                3. Deferred tax on fair value uplifts, unrealised profit and undistributed earnings calculated.
                4. The deferred tax schedule posted and reconciled at year end.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deferred tax schedule for consolidation adjustments, with rates confirmed by group tax, is posted and reconciled at the year end."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every consolidation adjustment that has a tax effect"
                - "Ask the group tax team for the rate that applies to each"
                - "Calculate deferred tax on fair value uplifts and unrealised profit"
                - "Post the schedule and reconcile it at the year end"
---

# Multi-Entity Consolidation

This area is for finance teams and managers who turn a set of separate company ledgers into one set of group numbers, whether that is two entities after an overseas expansion or forty across several regions. It starts with the foundations (the entity register, scope and control, functional currencies, group policies, the group chart and mapping, the reporting calendar and pack), moves to the monthly machinery of intercompany matching, eliminations, translation, pack review and equity roll-forwards, then the standards behind it, the improvements and system decisions, dated events such as acquisitions, disposals, half years and group year ends, situations for new groups, new controllers and subsidiary teams, and finally specialist cases such as ownership changes, net investment loans, hyperinflation and deferred tax on consolidation.

What repeats is the group close: intercompany matching on the 2nd and 3rd, rates on the 4th, mapping checks on the 5th, queries closed on the 6th, the consolidation run on the 7th, metrics on the 10th and an ageing review on the 12th, with quarterly eliminations, non-controlling interests and equity roll-forwards on top and a yearly refresh of the calendar, scope, currencies and policies. The Month-end close, Metrics log, Purchase decision, Risk register, Onboarding 30/60/90 and Skills matrix templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
