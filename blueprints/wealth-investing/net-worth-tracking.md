---
id: wealth-investing.net-worth-tracking
name: Net Worth Tracking
description: "A household balance sheet you can trust: every account and debt listed, fixed valuation rules, a quarterly snapshot routine and the analysis that shows whether long-term wealth is really growing."
category: personal
version: 1.0.0
tags: [wealth-investing, net-worth-tracking, everyone, balance-sheet, assets-and-liabilities, quarterly-snapshot, household-finances]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - meeting-notes
    - risk-register
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Net Worth Tracking
          description: "Tracking assets and liabilities over time to see whether long-term wealth is actually growing, quarter by quarter."
          projects:
            - name: Deciding what counts in your net worth
              description: |-
                ## Purpose
                Two people with identical finances can report net worth figures that differ by a third, simply because one includes the car, the pension and the furniture and the other does not. Writing down your inclusion rules before you count anything stops the figure drifting every time you feel optimistic, and makes each quarter comparable with the last.

                ## Milestones
                1. A written list of asset types that are in, and those that are out, such as household contents and personal cars.
                2. A decision recorded on whether pensions and the family home sit in the headline figure or in a separate line.
                3. A rule for jointly owned assets and joint debts, such as counting your share only or the whole household.
                4. The rules saved on the first tab of your tracker, dated.

                ## Notes
                A common sensible default: count anything you could sell or that pays out in money, at a realistic value, and leave out possessions you use every day. Whatever you choose, keep it unchanged for at least a year.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated page of inclusion rules exists, covering pensions, the home, vehicles, contents and joint ownership."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a two-column list of asset types to include and to leave out"
                - "Decide whether pensions and the home go in the headline figure"
                - "Choose how joint accounts and joint debts will be counted"
                - "Save the rules as the first page of your tracker with today's date"
            - name: Inventory of every account and asset
              description: |-
                ## Purpose
                Most people underestimate how many places their money sits: an old savings account opened for a bonus rate, a share scheme from a previous employer, premium bonds, a deposit held by a landlord. A complete inventory, built from bank feeds, email searches and paperwork, is the raw material every later snapshot depends on.

                ## Milestones
                1. Every current account, savings account, investment account and pension listed with provider and last four digits.
                2. Physical and other assets listed: property, vehicles, deposits held by others, money owed to you.
                3. Each line tagged with an owner: you, your partner or joint.
                4. Inbox and paper files searched for providers not yet on the list.

                ## Notes
                Record account identifiers in shortened form only. Full account numbers, passwords and security answers do not belong in a net worth file.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory listing every account and asset with provider, owner and a shortened identifier, checked against an inbox search."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every account you can remember from your banking apps tonight"
                - "Search your email for words like statement, balance and annual summary"
                - "Add property, vehicles, deposits and money owed to you"
                - "Tag each line with its owner and a shortened account reference"
            - name: Liabilities register with balances and rates
              description: |-
                ## Purpose
                Debts are the half of the balance sheet people prefer not to look at, and the ones left off are usually the expensive ones: a buy now pay later plan, an overdraft that never quite clears, a car finance balloon payment. A register with every balance, rate and end date makes the net worth figure honest and shows which debts are shrinking it fastest.

                ## Milestones
                1. Every debt listed: mortgage, student loan, cards, overdrafts, car finance, instalment plans, loans from family.
                2. Each debt recorded with current balance, interest rate, monthly payment and end date.
                3. Any final lump sums, such as a balloon payment or interest-only mortgage capital, shown separately.
                4. The total owed entered on the liabilities tab of your tracker.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A liabilities register with balance, rate, payment and end date for every debt, totalling to a figure in the tracker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every debt you can think of, however small"
                - "Look up the current balance and interest rate on each lender's app"
                - "Note any balloon payment or interest-only capital due at the end"
                - "Enter the total owed on the liabilities tab"
            - name: Choosing a net worth tracking tool
              description: |-
                ## Purpose
                The tool matters less than whether you will still open it in three years, but the choice has real trade-offs: a spreadsheet is private and flexible, an app is quicker but may disappear or start charging, and an aggregator needs access to your accounts. Comparing three options against the same criteria avoids rebuilding everything a year from now.

                ## Milestones
                1. Criteria written: privacy, cost, export format, multi-currency, joint use, long-term survival.
                2. Three options compared: a plain spreadsheet, a budgeting or net worth app and one other.
                3. A choice recorded with the reason, and how data could be exported if you leave.
                4. The chosen tool set up with a test entry.

                ## Notes
                Start from the **Purchase decision** template. Whatever you pick, make sure you can export the full history to a plain file, because that history is the most valuable part.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three tools against at least five criteria, with the chosen one set up and its export route tested."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the five or six things your tracker must do"
                - "Compare a spreadsheet, an app and one other option against them"
                - "Test that the chosen tool can export its full history"
                - "Record the decision and the reason in one paragraph"
            - name: Building the net worth workbook
              description: |-
                ## Purpose
                A tracker that is quick to update gets updated. Laying out one tab for assets, one for liabilities and one for the dated history, with the totals calculated rather than typed, turns a quarterly update into a twenty-minute job and keeps old snapshots from being overwritten by accident.

                ## Milestones
                1. An assets tab and a liabilities tab with one row per account from your inventory.
                2. A history tab where each snapshot is a new dated column or row, never an overwrite.
                3. Totals and net worth calculated by formula, with no hand-typed totals.
                4. A notes column for anything unusual about a figure, such as an estimate or a stale value.

                ## Notes
                Start from the **Metrics log** template for the history tab. Keep one row per account rather than grouping accounts together, so closed accounts can show a zero instead of vanishing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A workbook with assets, liabilities and history tabs whose net worth total is calculated by formula from one row per account."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create assets, liabilities and history tabs in the chosen tool"
                - "Copy one row per account from the inventory and the liabilities register"
                - "Add formulas for total assets, total liabilities and net worth"
                - "Add a notes column and a date-of-figure column to every row"
            - name: Valuation rules for each asset type
              description: |-
                ## Purpose
                Net worth swings that come from changing how you value things are noise, not progress. Fixing one method per asset type, such as the closing price on the snapshot date for funds, the transfer value for pensions and a property index for the home, means the movement you see is real movement.

                ## Milestones
                1. A valuation method written for each asset type: cash, funds, shares, pensions, property, vehicles, crypto, private holdings.
                2. A rule for the valuation date, such as the last working day of the quarter.
                3. A rule for illiquid assets, such as valuing the home net of estimated selling costs.
                4. The rules added to the tracker beside the inclusion rules.

                ## Notes
                When in doubt, choose the lower reasonable value. A figure you would be disappointed by in a forced sale is more useful than a hopeful one.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One written valuation method and source for every asset type in the inventory, saved in the tracker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each asset type that appears in your inventory"
                - "Write one valuation method and one source for each type"
                - "Choose the fixed valuation date for every snapshot"
                - "Add the rules to the tracker beside the inclusion rules"
            - name: Statement source map for every figure
              description: |-
                ## Purpose
                Six months from now you will not remember where the pension value came from or which app shows the car finance balance. A source map listing, for each row, exactly where the figure is found turns updates into a routine anyone in the household could follow.

                ## Milestones
                1. Each tracker row linked to its source: an app screen, an online statement, a paper letter or an estimate method.
                2. How often each source refreshes noted, for example monthly, quarterly or yearly.
                3. Any account with no online access marked, with how to request a statement.
                4. The map kept in the tracker, without passwords or full account numbers.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every row in the tracker has a written source and refresh frequency, with paper-only accounts flagged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a source column to the assets and liabilities tabs"
                - "Fill in where each balance is found and how often it updates"
                - "Flag any account that only sends paper statements"
                - "Request online access for one paper-only account"
            - name: Opening net worth baseline snapshot
              description: |-
                ## Purpose
                Every later comparison is measured from this first number, so it is worth taking on a fixed date with every figure sourced. Expect it to be lower or messier than you hoped: the point of a baseline is accuracy, not comfort.

                ## Milestones
                1. Every row in the tracker filled in using the valuation rules and one valuation date.
                2. Estimates marked as estimates in the notes column.
                3. Totals for assets, liabilities and net worth recorded in the history tab.
                4. A short note of the three biggest assets and the three biggest debts.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated baseline snapshot in the history tab with every row filled and every estimate labelled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the baseline date and put it in your calendar"
                - "Fill in every balance as at that date from the source map"
                - "Mark each estimated figure in the notes column"
                - "Write one line naming the three largest assets and three largest debts"
            - name: Liquid, invested and locked-away buckets
              description: |-
                ## Purpose
                A net worth of 300,000 means something very different if 250,000 of it is home equity and a pension you cannot touch for twenty years. Splitting the total into what you could reach this month, what is invested but sellable, and what is locked away shows how much of the figure can actually do work.

                ## Milestones
                1. Each tracker row tagged as liquid, invested or locked away.
                2. A rule for each bucket, such as anything reachable within a month being liquid.
                3. Subtotals for each bucket shown beside the headline figure.
                4. The share of net worth in each bucket written in the baseline notes.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The tracker shows three bucket subtotals that add up to the headline net worth, with the bucket rules written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-line definition for each of the three buckets"
                - "Tag every tracker row with its bucket"
                - "Add bucket subtotals beside the headline figure"
                - "Note each bucket's share of net worth at the baseline"
            - name: Quarterly net worth snapshot routine
              description: |-
                ## Purpose
                Quarterly is frequent enough to notice a problem within a season and slow enough that market noise does not dominate. A fixed date, a fixed checklist and a fixed order of sources make the snapshot a forty-minute habit rather than an afternoon of hunting.

                ## Milestones
                1. A recurring calendar slot on the first weekend after each quarter end.
                2. A written checklist of every source in the order you visit them.
                3. Four consecutive snapshots completed on time.
                4. Each snapshot taking under an hour by the fourth quarter.

                ## Notes
                Start from the **Metrics log** template if you keep the history outside the workbook. Resist checking in between: more frequent looks mostly measure the stock market.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly snapshots are recorded in the history tab within two weeks of each quarter end."
                cadence: rolling
              tasks:
                - "Write the snapshot checklist in the order you visit each source"
                - "Take the quarterly net worth snapshot from the checklist @recurring(quarterly)"
                - "Time the snapshot and note where it slowed you down"
            - name: Monthly cash and card balance update
              description: |-
                ## Purpose
                Cash, cards and overdrafts move faster than anything else on the balance sheet, and a surprise there is the earliest warning that spending has crept up. A five-minute monthly update of just these fast-moving rows, without touching investments, keeps the quarterly snapshot from hiding a slow leak.

                ## Milestones
                1. The fast-moving rows identified: current accounts, cards, overdrafts and easy-access savings.
                2. A monthly update of those rows only, on the same day each month.
                3. Twelve months of monthly cash and card totals in the history.
                4. Any month where card balances rose for a second time in a row flagged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly entries for cash and card balances, with repeated card balance increases flagged."
                cadence: rolling
              tasks:
                - "Mark the fast-moving rows in the tracker with a monthly tag"
                - "Update cash, card and overdraft balances in the tracker @recurring(monthly:3)"
                - "Flag any card balance that has risen two months in a row"
            - name: Statement download and filing routine
              description: |-
                ## Purpose
                Providers delete old statements, merge, rename and occasionally vanish, and the statement is the only proof of what a figure was. Downloading the latest statements each month into one dated folder per year means every number in the tracker can be traced back, and the folder doubles as evidence for tax returns and loan applications.

                ## Milestones
                1. One folder per year with a subfolder per provider.
                2. A consistent file name format, such as year, month, provider and account.
                3. Statements downloaded monthly for every account that issues them online.
                4. A year of statements filed with no gaps for the main accounts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of statements for every main account filed under one naming format in yearly folders."
                cadence: rolling
              tasks:
                - "Create this year's statements folder with one subfolder per provider"
                - "Write your file naming format at the top of the folder"
                - "Download and file new statements for every account @recurring(monthly:12)"
            - name: Explaining each quarter's change in net worth
              description: |-
                ## Purpose
                A rise of 8,000 tells you nothing until you know whether it came from saving, from markets, from paying down the mortgage or from a new house price estimate. Splitting each quarter's change into those parts shows whether wealth is growing because of what you do or because of what markets did, which is the question this whole area exists to answer.

                ## Milestones
                1. A change table in the tracker with rows for new money saved, debt repaid, market movement, revaluations and other.
                2. Each quarter's total change explained to within a small unexplained remainder.
                3. A one-sentence plain-language summary written for each quarter.
                4. Four quarters of explained changes side by side.

                ## Notes
                New money in comes from your contributions and transfers; market movement is what is left on invested accounts after contributions and withdrawals. If the unexplained line is large, a figure is usually missing or double counted.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarters each have their net worth change split into savings, debt repayment, market movement and revaluation, with a written summary."
                cadence: rolling
              tasks:
                - "Add a change table with rows for savings, debt repaid, markets and revaluations"
                - "Split the quarter's net worth change into its parts @recurring(quarterly)"
                - "Write one sentence saying what drove the quarter"
                - "Investigate any unexplained remainder bigger than one month of saving"
            - name: Annual home and vehicle revaluation
              description: |-
                ## Purpose
                For many households the home is the largest single line, and a value left untouched for three years quietly distorts everything. Revaluing property and vehicles once a year, using the same sources each time, keeps them current without letting monthly price headlines whip the figure around.

                ## Milestones
                1. One fixed source chosen for the home, such as a house price index for your area or recent comparable sales.
                2. One fixed source chosen for each vehicle, such as a trade-in price guide.
                3. Values updated each year in the same month.
                4. The old and new values kept side by side in the history.

                ## Notes
                Online automated valuations can be far off for unusual homes. Check them against two or three recent sales of similar properties nearby.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Home and vehicle values updated in the same month two years running, using the same written sources."
                cadence: cyclic
              tasks:
                - "Choose and write down the valuation source for the home and each vehicle"
                - "Revalue the home and vehicles from the written sources @recurring(yearly)"
                - "Compare the home estimate with two recent nearby sales"
            - name: Debt balance check against lender statements
              description: |-
                ## Purpose
                Typed-in debt balances drift: an overpayment not applied, a payment holiday added to the balance, interest charged at a rate you did not expect. Checking each tracked liability against the lender's own statement catches errors on both sides and keeps the liability half of the sheet as reliable as the asset half.

                ## Milestones
                1. Each debt in the tracker matched to its latest lender statement.
                2. Interest rates checked against what the lender is actually charging.
                3. Any difference investigated and either corrected or queried with the lender.
                4. Six months of checks completed without an unexplained difference.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly checks where every tracked debt matches the lender statement or has a recorded explanation."
                cadence: rolling
              tasks:
                - "Find where each lender shows its monthly statement"
                - "Match every debt balance and rate against its lender statement @recurring(monthly:21)"
                - "Query any difference with the lender in writing"
            - name: Credit file check for forgotten accounts
              description: |-
                ## Purpose
                Old cards, store accounts and small loans can sit open on your credit file for years without appearing anywhere in your own records. A yearly look at your credit report, and at the trackers some countries offer for unclaimed bank balances, finds accounts missing from the inventory and debts you did not know were still open.

                ## Milestones
                1. A free statutory or credit agency report obtained.
                2. Every open account on the report matched to a row in the tracker.
                3. Unknown accounts investigated and either added or disputed.
                4. Accounts opened or closed during the year reflected in the inventory.

                ## Notes
                Most countries give you a free copy of your credit report at least once a year through the official route. Avoid services that need a paid subscription for something you are entitled to free.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A credit report checked once a year with every open account matched to the tracker or resolved."
                cadence: cyclic
              tasks:
                - "Find the official free route to your credit report in your country"
                - "Pull your credit report and match every open account to the tracker @recurring(yearly)"
                - "Add or dispute any account you did not recognise"
            - name: Workbook backup and version history
              description: |-
                ## Purpose
                Years of snapshots in a single file are a single point of failure: one bad paste, a corrupted download or a lapsed app subscription and the history is gone. A monthly dated copy in a second location costs a minute and protects the part of the tracker that cannot be rebuilt.

                ## Milestones
                1. A second storage location chosen, separate from where the working file lives.
                2. Monthly dated copies saved to that location.
                3. A test restore done from a copy at least once.
                4. Copies older than two years thinned to one per year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly backups exist in a second location, and one has been successfully restored as a test."
                cadence: rolling
              tasks:
                - "Choose a backup location separate from the working file"
                - "Save a dated copy of the net worth workbook to the backup location @recurring(monthly:28)"
                - "Open one backup copy to prove it restores correctly"
            - name: Year-end net worth close
              description: |-
                ## Purpose
                The 31 December snapshot is the one you will compare across decades, so it deserves more care than an ordinary quarter: every statement in, every estimate refreshed, nothing left as last year's figure. Closing the year properly also gives your annual wealth review a finished set of numbers to start from.

                ## Milestones
                1. Every row updated with a 31 December value from a year-end statement or the valuation rules.
                2. Stale figures, older than six months, refreshed or flagged.
                3. The year's change explained in one paragraph using the quarterly change tables.
                4. The year-end figure copied to a separate table of annual closes.

                ## Notes
                Some pension and investment providers send year-end statements in late January. Leave a placeholder and finish the close then rather than guessing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A closed 31 December snapshot with no figure older than six months, an explanatory paragraph and an entry in the table of annual closes."
                cadence: cyclic
              tasks:
                - "Create a table of annual closes in the tracker"
                - "Take the 31 December net worth snapshot with fresh figures @recurring(yearly)"
                - "Write a paragraph on what changed in the year and why @recurring(yearly)"
                - "Flag any figure older than six months for a refresh"
            - name: Household balance sheet basics
              description: |-
                ## Purpose
                Businesses have kept balance sheets for centuries, and a household one follows the same logic: what you own, what you owe and the difference. Learning the handful of ideas behind it, such as the difference between a stock and a flow, why income is not wealth and why an asset bought on credit can leave net worth almost unchanged, makes every later decision in this area easier to reason about.

                ## Milestones
                1. The difference between a balance sheet and a budget explained in your own words.
                2. Three examples worked through: paying off a debt, buying a car on finance, a pay rise.
                3. Why net worth can fall in a year of high earnings explained in writing.
                4. One short book chapter or course module on household balance sheets completed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explaining balance sheet versus budget, with three worked examples of how common events move net worth."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find one book chapter or course module on household balance sheets"
                - "Work through how paying off a debt changes net worth"
                - "Work through how buying a car on finance changes net worth"
                - "Write a one-page note in your own words"
            - name: Gross versus after-tax net worth
              description: |-
                ## Purpose
                Pensions worth 200,000 are not 200,000 of spending power if a slice will go in income tax as it is drawn, and a share holding with a large gain carries a tax bill on sale. Learning to estimate an after-tax view, alongside the headline gross figure, stops the tracker overstating what you could actually use.

                ## Milestones
                1. Each asset type marked as tax-free, taxed on withdrawal or carrying a gain.
                2. A rough after-tax factor chosen for each, with the reasoning written down.
                3. An after-tax net worth line added beside the gross figure.
                4. The factors checked with a tax professional or official guidance where unsure.

                ## Notes
                This is an estimate for your own understanding, not tax advice. Tax rules and your future rate will change, so keep the factors simple and revisit them yearly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The tracker shows an after-tax net worth line next to the gross figure, with each tax factor and its reasoning written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark each tracker row as tax-free, taxed on withdrawal or holding a gain"
                - "Read your tax authority's guidance on how pension withdrawals are taxed"
                - "Choose a simple after-tax factor for each type and note why"
                - "Add an after-tax net worth line beside the headline figure"
            - name: Inflation-adjusted net worth
              description: |-
                ## Purpose
                Ten years of a rising net worth can hide almost no real progress if prices rose nearly as fast. Learning to restate past snapshots in today's money, using your country's official consumer price index, shows whether your wealth is buying more than it used to.

                ## Milestones
                1. The official consumer price index for your country located with its yearly values.
                2. The method for converting past figures into today's money understood and written down.
                3. A real net worth column added to the table of annual closes.
                4. Real growth over the whole history compared with nominal growth.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The table of annual closes carries a real net worth column in today's money, with the index source noted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find your country's official consumer price index and its yearly values"
                - "Write the formula for converting a past figure to today's money"
                - "Add a real net worth column to the table of annual closes"
                - "Update the price index figure in the tracker @recurring(yearly)"
            - name: Which pension figure to record
              description: |-
                ## Purpose
                Pension statements show several numbers: the current pot, a transfer value, a projected pot at retirement, sometimes a yearly income figure. Learning which one belongs in a net worth tracker, and how to put a value on a pension that only promises an income, avoids both wild overstatement and leaving your largest asset out.

                ## Milestones
                1. The figures on one of your own pension statements identified and labelled.
                2. The figure to record for each pension type chosen: pot value or a written valuation method.
                3. Projected values kept out of the tracker, or held in a clearly separate column.
                4. The chosen figure noted in the valuation rules for each pension.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each pension in the tracker uses a named figure from its statement, with projections excluded from the headline total."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Open your latest pension statement and label each figure on it"
                - "Decide which figure goes into the tracker for each pension"
                - "Move any projected values into a separate column or remove them"
                - "Add the pension rule to the valuation rules page"
            - name: Home equity after selling costs
              description: |-
                ## Purpose
                Home equity is rarely the price minus the mortgage: agent fees, legal costs, early repayment charges and moving costs can take a meaningful slice, and the home is something you would need to replace. Learning to estimate a realistic equity figure makes the largest line on most balance sheets less flattering and more useful.

                ## Milestones
                1. Typical selling costs in your area estimated as a percentage of price.
                2. Any early repayment charge on the mortgage found in the offer documents.
                3. A realistic equity figure calculated alongside the simple one.
                4. A decision recorded on which equity figure the headline uses.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The tracker shows both simple and net-of-costs home equity, with the cost assumptions written down."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up typical agent and legal fees for selling in your area"
                - "Check your mortgage offer for an early repayment charge"
                - "Calculate home equity net of selling and exit costs"
                - "Record which equity figure the headline net worth will use"
            - name: Savings rate and the shape of net worth growth
              description: |-
                ## Purpose
                In the early years, net worth grows mostly from what you save; later, returns on what you already hold can overtake new savings. Learning how those two engines trade places, using your own history, explains why progress feels slow at first and helps set expectations that will not tempt you into chasing returns.

                ## Milestones
                1. Your savings rate for the last year worked out from income and money saved.
                2. Savings versus market movement compared using your quarterly change tables.
                3. A simple projection showing roughly when returns might exceed yearly savings.
                4. The lesson written in two or three sentences beside the history tab.

                ## Notes
                Projections are illustrations, not forecasts. Use a cautious return assumption and treat the crossover year as a rough idea only.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note with your savings rate, the split of growth between saving and markets, and a rough crossover year."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Work out last year's savings rate from payslips and transfers"
                - "Total the savings and market lines from your quarterly change tables"
                - "Build a simple projection with a cautious return assumption"
                - "Write down what the crossover point means for your expectations"
            - name: Net worth benchmarks and their limits
              description: |-
                ## Purpose
                Published averages by age are tempting to compare against, but they mix countries, include or exclude housing and pensions differently and are usually skewed by a small number of very wealthy households. Learning to read a benchmark properly, median rather than mean and like for like, keeps comparison useful and stops it becoming either smugness or despair.

                ## Milestones
                1. One official household wealth survey for your country found.
                2. The difference between median and mean figures in that survey understood.
                3. The survey's definitions compared with your own inclusion rules.
                4. A decision made on whether to use any benchmark at all, and which.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note comparing one official wealth survey's definitions with your own rules and a decision on whether to benchmark."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your national statistics office's household wealth survey"
                - "Note whether it reports the median or the mean by age"
                - "Compare its definition of wealth with your inclusion rules"
                - "Decide in writing whether you will benchmark against it"
            - name: Net worth ratios worth tracking
              description: |-
                ## Purpose
                One headline figure hides the structure underneath, and a few simple ratios reveal it: debt as a share of assets, months of spending covered by liquid assets, net worth as a multiple of yearly income. Learning what each ratio says, and picking two or three, gives early warning that the total alone would miss.

                ## Milestones
                1. Four common household ratios defined in your own words.
                2. Each ratio calculated from your latest snapshot.
                3. Two or three ratios chosen to show beside the headline figure.
                4. A note on what direction of movement in each would worry you.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two or three chosen ratios are calculated by formula in the tracker, each with a written note on what a bad trend looks like."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write definitions for debt to assets, liquidity months and net worth to income"
                - "Calculate each ratio from the latest snapshot"
                - "Choose two or three to show next to the headline figure"
                - "Note what movement in each ratio would worry you"
            - name: Net worth trend chart and dashboard
              description: |-
                ## Purpose
                Columns of numbers hide the trend, while a chart makes a flat year or a steady climb obvious at a glance. One page with net worth over time, assets against liabilities and the bucket split gives you, and anyone you share it with, the story in ten seconds.

                ## Milestones
                1. A line chart of net worth from the history tab, updated automatically.
                2. A stacked view of assets against liabilities over time.
                3. The liquid, invested and locked-away split shown for the latest snapshot.
                4. The dashboard kept on one screen without scrolling.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-screen dashboard with a net worth trend line, an assets versus liabilities view and the latest bucket split, all fed by formula."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a dashboard tab to the workbook"
                - "Draw a net worth line chart from the history tab"
                - "Add a chart of total assets against total liabilities over time"
                - "Show the latest liquid, invested and locked-away split"
            - name: Read-only balance aggregation decision
              description: |-
                ## Purpose
                Linking accounts to an aggregator or open banking feed can cut the quarterly update to minutes, but it means granting a third party ongoing access to your data, and feeds break or mislabel balances. Deciding deliberately, account by account, what is linked and what stays manual gives you the time saving without losing control of the figures.

                ## Milestones
                1. The aggregation options available in your country listed, with how they access accounts.
                2. The provider's security, regulation and data use terms read.
                3. A list of which accounts to link and which to keep manual, with reasons.
                4. A process for removing access if you stop using the service.

                ## Notes
                Prefer regulated read-only access through official open banking routes over services that ask for your bank login. Never hand a password to a tracking tool.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision listing which accounts are linked read-only and which stay manual, with the steps to revoke access."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the aggregation services available to you and how each connects"
                - "Read the data use and security terms of the most likely option"
                - "Decide which accounts to link and which to keep manual"
                - "Write down how to revoke each link if you stop using the service"
            - name: Back-filling past years of net worth history
              description: |-
                ## Purpose
                Starting a tracker today gives you one data point; old statements, tax returns and mortgage letters can give you ten years. Rebuilding even rough year-end figures for the past five to ten years shows your real long-term trend immediately, instead of waiting a decade to see it.

                ## Milestones
                1. Year-end figures gathered for the main accounts for as many past years as statements allow.
                2. Gaps filled with clearly labelled estimates from mortgage letters, pension statements or tax returns.
                3. Each past year added to the table of annual closes with a confidence note.
                4. A first long-term trend chart drawn from the back-filled history.

                ## Notes
                Ask the agent to summarise old statements into year-end balances if you have them as files, then check each figure against the original.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "At least five past year-end net worth figures in the table of annual closes, each labelled with a confidence level."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Gather old statements, mortgage letters and pension annual statements in one place"
                - "Ask the agent to pull year-end balances from the statement files"
                - "Enter each past year in the table of annual closes with a confidence note"
                - "Draw the long-term trend chart from the back-filled years"
            - name: Fewer accounts, easier tracking
              description: |-
                ## Purpose
                Every extra account is another row, another login and another statement to chase, and households often carry five or six that do nothing: a dormant current account, a store card, a savings account paying almost nothing. Closing or merging the ones with no purpose shortens every future snapshot and reduces the chance of something being missed.

                ## Milestones
                1. Every account in the inventory given a one-line purpose, or marked as having none.
                2. Accounts with no purpose closed or merged, with final balances moved.
                3. Closed accounts kept as zero rows in the tracker rather than deleted.
                4. Closure confirmations filed with the statements.

                ## Notes
                Leave pensions and investment accounts to their own consolidation projects, where guarantees and exit fees need checking first. This project is for the everyday clutter.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every remaining account has a written purpose, and accounts without one are closed with confirmation filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one line on what each account in the inventory is for"
                - "Mark the accounts with no real purpose"
                - "Move the balance out and close one purposeless account"
                - "File each closure confirmation with that year's statements"
            - name: Tracker accuracy audit against statements
              description: |-
                ## Purpose
                Small errors compound quietly in a tracker: a fund entered twice after a platform transfer, a loan left at last year's balance, a formula that skips a new row. A yearly audit that traces a sample of figures back to source and checks every formula catches these before they distort years of history.

                ## Milestones
                1. Every total formula checked to include all rows, including newly added ones.
                2. At least five figures traced back to their source statements.
                3. Duplicates and missing accounts searched for against the inventory.
                4. Corrections logged with the date and the size of each change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly audit log recording formula checks, five traced figures and any corrections with dates and amounts."
                cadence: cyclic
              tasks:
                - "Check every total formula covers all rows in the tracker"
                - "Trace five tracker figures back to their statements @recurring(yearly)"
                - "Log each correction with the date and amount changed"
            - name: Yearly net worth targets
              description: |-
                ## Purpose
                Long-term goals such as a retirement figure are too far away to steer by, but a target for the end of next year is close enough to act on. Setting a yearly net worth target built from planned saving and debt repayment, rather than hoped-for returns, gives each year-end close a clear pass or miss.

                ## Milestones
                1. Planned saving and debt repayment for the year added up.
                2. A target for 31 December set from that plan with a cautious allowance for returns.
                3. The target written in the table of annual closes beside last year's figure.
                4. The result compared with the target at year end and the gap explained.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written year-end net worth target exists, built from planned saving and repayment, and is compared with the actual close."
                cadence: cyclic
              tasks:
                - "Add up the saving and debt repayment you plan for the year"
                - "Set a year-end target with a cautious allowance for returns"
                - "Compare the year-end close with the target and explain the gap @recurring(yearly)"
            - name: Privacy and security of the net worth file
              description: |-
                ## Purpose
                Your net worth file is a map of everything you own and where it sits, which makes it valuable to anyone trying to defraud you. Deciding where it lives, who can open it and what it must never contain protects you without making the tracker harder to use.

                ## Milestones
                1. A rule written that the file holds no passwords, full account numbers or security answers.
                2. The file stored with encryption or behind a strong password and two-factor sign-in.
                3. A list of who can open the file and why.
                4. Any shared copy or old export found and deleted or secured.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The tracker is stored encrypted or behind two-factor sign-in, contains no credentials, and has a written list of who can access it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the tracker for full account numbers and passwords and remove them"
                - "Move the file to encrypted storage or turn on two-factor sign-in"
                - "Write down who can open the file"
                - "Review who has access to the tracker and its backups @recurring(yearly)"
            - name: First full year of net worth tracking review
              description: |-
                ## Purpose
                After four snapshots you know which parts of the system work and which you dread. A short review at the twelve-month mark, looking at time spent, accuracy and what the figures actually told you, is the moment to simplify before the habit hardens.

                ## Milestones
                1. Four quarterly snapshots and one year-end close in the history.
                2. Time spent per snapshot and the slowest steps noted.
                3. Rows, tabs or ratios nobody used removed or simplified.
                4. Three things learned about your finances from the year written down.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written first-year review listing time spent, changes made to the tracker and three things learned."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a two-hour slot twelve months after your baseline"
                - "List the slowest steps from the year's snapshots"
                - "Remove or simplify anything in the tracker you never used"
                - "Write three things the year's figures taught you"
            - name: Re-baselining after buying a home
              description: |-
                ## Purpose
                Buying a home rearranges the balance sheet in a single day: savings become a deposit, a large debt appears, and stamp duty, fees and moving costs vanish from net worth altogether. Taking a fresh snapshot straight after completion explains the drop and stops the purchase looking like a financial setback.

                ## Milestones
                1. A snapshot taken in the month before completion.
                2. A snapshot taken within a month after completion, with the property and mortgage added.
                3. Purchase costs that left net worth listed and totalled.
                4. A note in the history explaining the step change.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before and after snapshots around the purchase are recorded, with purchase costs totalled and the change explained in the history."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Take a snapshot in the month before completion"
                - "Add the property and the new mortgage to the tracker"
                - "Total the taxes, fees and moving costs from the completion statement"
                - "Write a note in the history explaining the change"
            - name: Windfall or inheritance re-baseline
              description: |-
                ## Purpose
                Bonuses, inheritances and business sales can lift net worth overnight and make the trend chart meaningless if it is not marked. Recording the windfall as its own event, separately from ordinary saving, keeps the long-term picture honest and shows what happened to the money six and twelve months later.

                ## Milestones
                1. The windfall recorded as a dated, labelled event in the history.
                2. Where the money went within three months listed by account.
                3. The quarterly change table showing the windfall on its own line.
                4. A check at twelve months on how much of the windfall is still in net worth.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The windfall appears as a labelled event in the history, with a twelve-month check showing how much remains."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Record the windfall amount and date as an event in the history"
                - "Add a separate windfall line to the quarterly change table"
                - "List where the money went three months later"
                - "Check how much of it remains in net worth after twelve months"
            - name: Net worth record through a market fall
              description: |-
                ## Purpose
                When markets fall hard, checking the balance daily is tempting and almost always unhelpful. Keeping to the normal snapshot rhythm, writing down the fall in money terms and how you felt, builds a record you can read in the next downturn, showing that the figure recovered and that the routine held.

                ## Milestones
                1. A decision written to keep to the normal quarterly snapshot during the fall.
                2. The peak-to-low fall in net worth recorded in money and as a share of the total.
                3. A short note on how you felt and anything you were tempted to do.
                4. The recovery noted in the history when it comes, with how long it took.

                ## Notes
                Record, do not react. Any change to how you invest belongs in your written investment plan and, if needed, a conversation with a regulated adviser.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written record of a market fall with the drop in money and percentage, a feelings note and the recovery date once reached."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-line rule to keep the normal snapshot rhythm during falls"
                - "Record the drop in net worth in money and as a share"
                - "Write a short note on how the fall felt and what tempted you"
                - "Note the date net worth regained its previous peak"
            - name: Statement of assets and liabilities for a loan application
              description: |-
                ## Purpose
                Mortgage lenders, some landlords and private banks may ask for a formal statement of assets and liabilities, often at short notice. If your tracker is current, producing a clean, sourced statement takes an hour instead of a frantic week, and the figures will match the documents the lender asks to see.

                ## Milestones
                1. The lender's required format or form obtained.
                2. Assets and liabilities copied from the latest snapshot and refreshed where older than a month.
                3. Supporting statements gathered for each figure from the statement archive.
                4. The completed statement checked against the source documents before it is sent.

                ## Notes
                Report figures exactly as they are. Overstating assets or leaving out debts on a credit application can have serious legal consequences.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A completed statement of assets and liabilities in the lender's format, with a supporting statement for every figure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the lender for their statement format and list of evidence"
                - "Refresh any tracker figure older than a month"
                - "Copy assets and liabilities into the lender's format"
                - "Attach the matching statement for every figure from the archive"
            - name: Ten-year net worth retrospective
              description: |-
                ## Purpose
                Ten years of snapshots tell a story no single year can: which decisions moved the figure, which worries turned out not to matter, how much came from saving and how much from markets. Writing it up at the ten-year mark, or from back-filled history now, turns raw numbers into lessons for the next ten years.

                ## Milestones
                1. Ten year-end closes in the table of annual closes, real and nominal.
                2. The decade's change split into saving, debt repaid, markets and revaluations.
                3. The three decisions that mattered most named, and the three worries that did not.
                4. A two-page written retrospective stored with the tracker.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A two-page retrospective covering ten years of closes, the split of growth by source and the decisions that mattered most."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check the table of annual closes has ten years, back-filled if needed"
                - "Total the decade's saving, debt repaid and market movement"
                - "Name the three decisions that moved net worth most"
                - "Write the two-page retrospective and save it with the tracker"
            - name: Climbing out of negative net worth after study
              description: |-
                ## Purpose
                Many graduates start working life with a net worth well below zero once student loans, an overdraft and a credit card are counted. Tracking the climb towards zero, and treating each thousand regained as real progress, keeps motivation up through years when savings look small and the loan balance barely moves.

                ## Milestones
                1. A first snapshot including student loan, overdraft and cards, however negative.
                2. The way your student loan is repaid and written off in your country understood and noted.
                3. A monthly entry of net worth and the gap to zero.
                4. The month net worth crosses zero marked in the history.

                ## Notes
                Some student loans behave more like a graduate tax than ordinary debt. Whether to count the full balance is a decision to record in your inclusion rules, not a reason to leave it out silently.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly net worth entries showing the gap to zero, with the student loan treatment recorded and the crossing month marked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add your student loan, overdraft and card balances to the tracker"
                - "Read how your country's student loan repayments and write-off work"
                - "Log net worth and the gap to zero in the history @recurring(monthly:9)"
                - "Mark the month net worth first goes above zero"
            - name: Household and individual net worth for couples
              description: |-
                ## Purpose
                Couples often share a home and a mortgage but keep separate pensions, savings and debts, and each partner can feel the household figure does not show their own position. A tracker with a joint view and two individual views, reviewed together each quarter, makes the money conversation factual and protects both people if circumstances change.

                ## Milestones
                1. Every tracker row tagged as yours, your partner's or joint, with joint items split by agreed shares.
                2. Household and individual net worth totals calculated side by side.
                3. A quarterly review held together using the same snapshot.
                4. Both partners able to update the tracker without help.

                ## Notes
                Start from the **Meeting notes** template for the quarterly review. Keep the conversation about the figures and what they mean, not about who spent what.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker shows household and two individual totals, and four quarterly reviews have been held together with notes kept."
                cadence: rolling
              tasks:
                - "Tag each row as yours, your partner's or joint"
                - "Agree how joint assets and debts are split between you"
                - "Hold a joint net worth review with notes after each snapshot @recurring(quarterly)"
                - "Show your partner how to update the tracker on their own"
            - name: Rebuilding the tracker after separation
              description: |-
                ## Purpose
                Separation turns one household balance sheet into two, often over months, with property, pensions and debts divided by agreement or court order. Rebuilding your own tracker as each item is settled gives you a clear picture of where you stand and a record that matches the final settlement.

                ## Milestones
                1. A snapshot of the joint position at the date of separation, kept unchanged.
                2. Each asset and debt marked as yours, theirs or still to be decided.
                3. Your own tracker rebuilt as each item is formally transferred or closed.
                4. Your new baseline matching the final settlement documents.

                ## Notes
                This tracker supports, but does not replace, legal and financial advice on the settlement. Keep it factual: lawyers and mediators often ask for exactly this kind of list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A separation-date snapshot kept intact and a new personal baseline that matches the final settlement documents."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Save a copy of the joint tracker as at the separation date"
                - "Mark every asset and debt as yours, theirs or undecided"
                - "Update your own tracker each time an item is transferred or closed"
                - "Check your new baseline against the final settlement documents"
            - name: Net worth tracking through retirement drawdown
              description: |-
                ## Purpose
                After retirement, net worth is expected to fall slowly as savings become income, and a tracker built for accumulation can make that look like failure. Tracking withdrawals alongside the balance, and comparing the fall with the plan your adviser or your own projections set, shows whether spending is on course rather than whether the number is going up.

                ## Milestones
                1. A withdrawals line added to the quarterly change table.
                2. An expected net worth path from your retirement plan entered for comparison.
                3. Each quarter's actual figure compared with the expected path.
                4. A trigger written for when a gap should prompt a review with your adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarters of retirement snapshots with withdrawals recorded and each compared with the planned path."
                cadence: rolling
              tasks:
                - "Add a withdrawals line to the quarterly change table"
                - "Enter the expected net worth path from your retirement plan"
                - "Record withdrawals and compare net worth with the planned path @recurring(quarterly)"
                - "Write the size of gap that should trigger a review"
            - name: Business owner's personal balance sheet
              description: |-
                ## Purpose
                For a founder or small business owner the business is often the largest asset and the hardest to value, and director loans, personal guarantees and retained profits blur the line between company and household. Putting a cautious, consistently calculated business value on its own line, with personal guarantees noted, stops one optimistic guess dominating the whole figure.

                ## Milestones
                1. The business shown on its own line, separate from personal investable assets.
                2. A cautious valuation method written down and applied the same way each year.
                3. Director loans in either direction recorded on the right side of the sheet.
                4. Personal guarantees for business debts listed, even though they are not counted as debts.

                ## Notes
                A business is worth what a buyer would pay after costs and tax, which is often far less than its owner expects. Your accountant can suggest a sensible method for your type of business.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The tracker carries the business on its own line with a written valuation method, director loans recorded and guarantees listed."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Move the business onto its own line in the tracker"
                - "Ask your accountant for a cautious valuation method that suits the business"
                - "Record any director loan balance in the correct direction"
                - "Update the business valuation from the latest accounts @recurring(yearly)"
            - name: Keeping children's money off the household sheet
              description: |-
                ## Purpose
                Money saved in a child's name usually belongs to the child legally, even if a parent manages it, and counting it in household net worth both overstates what you have and blurs whose money it is. A separate small tracker per child keeps their savings visible without inflating your own figure.

                ## Milestones
                1. Each child's accounts identified and removed from the household totals.
                2. A separate small sheet per child with their accounts and balances.
                3. A note of who legally owns each account and when control passes to the child.
                4. Children's balances updated on the same quarterly snapshot date.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Household net worth excludes children's accounts, and each child has a separate sheet showing balances and legal ownership."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every account held in a child's name or for a child"
                - "Remove those accounts from the household totals"
                - "Create a small separate sheet for each child"
                - "Note who legally owns each account and when control passes"
            - name: Multi-currency net worth in one base currency
              description: |-
                ## Purpose
                People who have lived or worked abroad often hold accounts, pensions or property in two or three currencies, and exchange rate moves can swing net worth more than a year of saving. Choosing a base currency, recording each balance in its own currency and converting at a fixed source on the snapshot date shows how much of the change is real and how much is currency.

                ## Milestones
                1. A base currency chosen, usually the one you expect to spend in later in life.
                2. Each balance recorded in its original currency in its own column.
                3. Conversion at one stated exchange rate source on the snapshot date.
                4. A currency effect line added to the quarterly change table.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every foreign balance is held in its original currency and converted at a stated source and date, with currency effects shown separately."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose and record your base currency and the reason"
                - "Add an original currency column beside each foreign balance"
                - "Pick one exchange rate source and note it in the valuation rules"
                - "Add a currency effect line to the quarterly change table"
            - name: Unvested equity and private shares in net worth
              description: |-
                ## Purpose
                Unvested restricted stock, unexercised options and shares in a private company can look like a large number on paper, but they may never vest, may be hard to sell and usually carry tax when they become yours. Holding them in a separate, discounted line keeps the headline figure grounded while still showing the potential.

                ## Milestones
                1. Each equity holding listed with its vesting date, exercise cost and any sale restrictions.
                2. Only vested and sellable shares counted in the headline figure.
                3. Unvested and private holdings shown on a separate line at a cautious discount.
                4. The discount and its reasoning written into the valuation rules.

                ## Notes
                Tax on equity awards can be due at vesting, exercise or sale depending on the country and the scheme. Get the tax treatment from your employer's plan documents or a tax professional before relying on any figure.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The tracker separates vested sellable shares from unvested or private holdings, with the discount method written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every equity grant with vesting dates and exercise costs"
                - "Count only vested, sellable shares in the headline figure"
                - "Add a separate discounted line for unvested and private holdings"
                - "Write the discount and its reasoning into the valuation rules"
            - name: Contingent liabilities register
              description: |-
                ## Purpose
                Some obligations never appear on a statement until they bite: a guarantee on a relative's loan, tax due on gains when an asset is sold, a promise to fund a parent's care, a deferred tax bill on a lump sum. Listing them in a register beside the balance sheet, with a rough size and likelihood, shows the risks the headline figure leaves out.

                ## Milestones
                1. Every guarantee, promise or deferred bill you are aware of listed.
                2. Each item given a rough size and a likelihood rating.
                3. Items that are likely and large flagged for a conversation with the right professional.
                4. The register reviewed once a year and after any new guarantee.

                ## Notes
                Start from the **Risk register** template. A contingent item is something you might owe, so keep it outside the headline figure unless it becomes certain.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A register listing every known contingent liability with size and likelihood, reviewed at least once in twelve months."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "List every guarantee you have signed for anyone else"
                - "Add deferred tax and informal promises you know about"
                - "Give each item a rough size and likelihood"
                - "Review the contingent liabilities register @recurring(yearly)"
            - name: Net worth stress test under bad scenarios
              description: |-
                ## Purpose
                Knowing your net worth is one thing; knowing what it would be after a 40 percent share market fall, a 20 percent drop in house prices and a rate rise on the mortgage is another. A simple stress test on a copy of the latest snapshot shows how fragile the figure is and whether debts could ever exceed assets.

                ## Milestones
                1. Three scenarios defined with specific falls for shares, property and any other large asset.
                2. Each scenario applied to a copy of the latest snapshot.
                3. The worst-case net worth and the bucket most affected recorded.
                4. Any scenario that pushes home equity or net worth below zero flagged for discussion with an adviser.

                ## Notes
                The scenarios are illustrations to understand exposure, not predictions. Use round, severe numbers rather than trying to guess the next crash.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three named scenarios applied to the latest snapshot, with worst-case net worth and the most exposed bucket recorded."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Write three severe scenarios with a fall for each asset type"
                - "Apply each scenario to a copy of the latest snapshot"
                - "Record the worst-case net worth and the most exposed bucket"
                - "Rerun the stress test on the year-end figures @recurring(yearly)"
            - name: Valuing defined benefit and state pension entitlements
              description: |-
                ## Purpose
                Final salary pensions and state pensions can be worth more than everything else you own, yet neither has a pot to look up. Learning to put an indicative capital value on these promised incomes, using a transfer value where offered or a simple multiple of yearly income, shows the true size of your retirement wealth without mixing it into the investable figure.

                ## Milestones
                1. Every promised income listed with its yearly amount and start age from the latest forecast.
                2. A valuation method chosen: a stated transfer value or a written multiple of income.
                3. An indicative value shown on a separate line, outside the headline net worth.
                4. The forecasts and values refreshed once a year.

                ## Notes
                These values are for perspective only. Never base a pension transfer decision on them; in many countries that requires regulated advice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each promised pension income has an indicative value on a separate line, with its method and forecast date written down."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Request your latest state pension and defined benefit forecasts"
                - "Choose a transfer value or an income multiple as your method"
                - "Show the indicative values on a line outside the headline figure"
                - "Refresh the pension forecasts and indicative values @recurring(yearly)"
---

# Net Worth Tracking

Net worth is the one number that adds up everything you own and subtracts everything you owe, and this area is for anyone who wants that number to be accurate, comparable from one quarter to the next and honest about what it is made of. It starts with the foundations (deciding what counts, listing every account and debt, choosing a tool, fixing valuation rules and taking a first baseline), then the routines that keep the figures current, the concepts worth learning such as after-tax and inflation-adjusted net worth, improvements like a trend dashboard and back-filled history, dated moments such as a loan application or a home purchase, versions for graduates, couples, retirees, business owners and people starting again after separation, and finally specialist work on currencies, private shares, contingent debts, stress tests and pension entitlements.

The rhythm is light but steady: a monthly update of cash, cards and loans, a monthly statement download and backup, a quarterly snapshot with a short explanation of what moved and why, and yearly jobs such as revaluing the home, checking your credit file for forgotten accounts and closing the year on 31 December. The Purchase decision, Metrics log, Meeting notes and Risk register templates pair with the tool choice, the workbook, the couple's review and the contingent liabilities register. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
