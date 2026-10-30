---
id: wealth-investing.asset-allocation-rebalancing
name: Asset Allocation & Rebalancing
description: "A written target mix of shares, bonds and cash set from your real risk capacity, with tolerance bands, a rebalancing rule and the quarterly and yearly routines that keep the portfolio there."
category: personal
version: 1.0.0
tags: [wealth-investing, asset-allocation-rebalancing, everyone, target-allocation, rebalancing-rules, risk-tolerance, glide-path]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - reading-queue
    - purchase-decision
    - remediation-plan
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Asset Allocation & Rebalancing
          description: "Setting a target mix of shares, bonds and cash for your risk level and rebalancing on a schedule as markets move."
          projects:
            - name: Household holdings inventory by account
              description: |-
                ## Purpose
                Before any mix can be set, every pot has to be on one list: workplace and private pensions, tax-free accounts, general brokerage accounts, savings earmarked for investing and shares held through an employer scheme. Most people find at least one forgotten account or a fund they cannot classify. A complete inventory, with the value and asset class of each holding, is the raw material for every later decision in this area.

                ## Milestones
                1. Every investment account in the household listed with provider, wrapper type and owner.
                2. Each holding recorded with its current value and the date of that value.
                3. Every holding tagged as shares, bonds, cash, property or other.
                4. Holdings that cannot be classified yet marked for a factsheet look-up.

                ## Notes
                Include pensions even if retirement feels distant: they are often the largest pot and change the overall mix more than anything else. Leave the home you live in out of the inventory unless your adviser treats it differently.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single list holds every investment account in the household with current values and an asset class against each holding."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every pension, investment and savings account the household holds"
                - "Download a current valuation from each provider's website or app"
                - "Tag each holding as shares, bonds, cash, property or other"
                - "Flag any fund you cannot classify for a factsheet check"
            - name: Look-through of multi-asset and target-date funds
              description: |-
                ## Purpose
                Blended funds hide the real split. A fund labelled balanced, or a target-date fund for 2050, might hold 60 percent shares one year and 80 percent another, and some pension defaults change their mix automatically as you age. Breaking each blended fund into its underlying shares, bonds and cash, using the latest factsheet, stops the inventory understating or overstating your true exposure.

                ## Milestones
                1. Every multi-asset, lifestyle and target-date fund in the inventory identified.
                2. The latest factsheet for each one saved, with its publication date.
                3. Each fund's value split into shares, bonds, cash and other using the factsheet percentages.
                4. A note of any fund whose mix changes automatically by date or age.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every blended fund in the inventory has been split into its underlying asset classes from a factsheet less than six months old."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark which holdings in the inventory are blended or target-date funds"
                - "Download the latest factsheet for each blended fund"
                - "Split each fund's value by the factsheet's asset class percentages"
                - "Note which funds shift their mix automatically as the date approaches"
            - name: Current asset mix in one spreadsheet
              description: |-
                ## Purpose
                Once holdings are classified, a simple spreadsheet that adds them up by asset class turns a pile of statements into a handful of percentages: how much of the household's money is really in shares, bonds and cash today. Built once with formulas, it becomes the tool for every drift check and rebalancing calculation afterwards, so it is worth laying out carefully.

                ## Milestones
                1. A spreadsheet with one row per holding and columns for account, asset class and value.
                2. Totals and percentages by asset class calculated by formula, not typed in.
                3. Look-through splits from blended funds included in the totals.
                4. The first snapshot dated and saved as the starting point.

                ## Notes
                Keep a column for the date each value was taken. Mixing a pension value from March with an account value from October distorts the percentages more than people expect.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated spreadsheet shows the household's percentage in shares, bonds, cash and other, calculated by formula from every holding."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a sheet with columns for account, holding, asset class and value"
                - "Add a summary table that totals value and percentage by asset class"
                - "Enter every holding from the inventory, including look-through splits"
                - "Save the first dated snapshot as your starting point"
            - name: Risk capacity assessment
              description: |-
                ## Purpose
                Risk capacity is how large a fall your finances can absorb without forcing a sale or derailing a goal, and it is separate from how a fall would feel. It depends on how soon the money is needed, how secure your income is, whether an emergency fund exists and how much future spending is already covered by pensions. Writing these facts down first stops the target mix being set by mood.

                ## Milestones
                1. Years until each pot of money is first needed written down.
                2. Income stability, emergency savings and guaranteed future income summarised in a few lines.
                3. The largest portfolio fall, in money terms, that would not force a change of plans estimated.
                4. A capacity rating of low, medium or high recorded with the reasons.

                ## Notes
                If capacity and tolerance disagree, the lower of the two usually sets the limit. A regulated adviser can run a formal assessment if you want a second view.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note records your time horizons, income security and the largest fall your plans could absorb, ending in a capacity rating."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down when each investment pot will first be needed"
                - "Summarise how secure your income and emergency savings are"
                - "Estimate the largest fall in money terms your plans could absorb"
                - "Record a low, medium or high capacity rating with reasons"
            - name: Loss tolerance test in real money
              description: |-
                ## Purpose
                Questionnaires ask how you would feel about a 20 percent fall; it lands differently when the figure is the actual sum you would lose. Converting historical falls for a few candidate mixes into amounts from your own portfolio, and deciding honestly which you could sit through without selling, gives a tolerance answer you can trust. Partners who invest together should do this separately, then compare.

                ## Milestones
                1. A risk tolerance questionnaire completed from a provider or regulator website.
                2. The worst historical fall for three candidate mixes converted into money from your own balance.
                3. The largest loss you could hold through without selling written down.
                4. Any gap between the questionnaire result and the money test noted.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written tolerance limit, expressed as a sum of money and a percentage, sits alongside a completed risk questionnaire."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Complete a risk tolerance questionnaire from your provider or regulator"
                - "Convert the worst historical fall of three mixes into money from your balance"
                - "Write down the largest loss you could sit through without selling"
                - "Compare your answer with your partner's if you invest together"
            - name: Goals mapped to time horizons
              description: |-
                ## Purpose
                Money needed in two years and money needed in thirty should not share one mix. Listing each goal with its date and amount, and grouping them into short, medium and long horizons, shows which pots belong in the main allocation and which should sit mostly in cash or short-dated bonds. It is also the simplest way to explain to yourself why the long-term pot can carry more risk.

                ## Milestones
                1. Every significant goal listed with a target date and amount.
                2. Each goal placed in a horizon group: under three years, three to ten, over ten.
                3. Each investment account assigned to a horizon group.
                4. Pots needed within three years separated from the long-term allocation.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every goal has a date, amount and horizon group, and each investment account is assigned to one of the groups."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each goal with its target date and approximate amount"
                - "Sort the goals into under three, three to ten and over ten years"
                - "Assign each investment account to one horizon group"
                - "Move short-horizon pots out of the long-term allocation sheet"
            - name: Deciding what counts as cash in the allocation
              description: |-
                ## Purpose
                Cash can mean the emergency fund, money waiting to be invested, cash inside a pension or a deliberate defensive holding, and counting all of it as part of the portfolio makes the mix look safer than it is. Drawing a clear line between cash that belongs to the allocation and cash that does not keeps every later percentage honest.

                ## Milestones
                1. Each cash balance in the household labelled as emergency fund, spending buffer, uninvested or allocated.
                2. A written rule for which cash counts in the allocation.
                3. Uninvested cash sitting inside investment accounts identified and totalled.
                4. The spreadsheet updated so only allocated cash appears in the mix.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule defines which cash balances count in the allocation, and the spreadsheet reflects it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Label every cash balance by its job in the household"
                - "Write a one-line rule for which cash counts in the portfolio"
                - "Total any uninvested cash sitting inside investment accounts"
                - "Update the spreadsheet so only allocated cash is in the mix"
            - name: Written target allocation with tolerance bands
              description: |-
                ## Purpose
                Agreeing a target mix is the decision the rest of this area serves: a percentage for shares, bonds, cash and any other asset, chosen from your capacity, tolerance and horizons, plus a band around each that says how far it can drift before you act. Writing it on one page, with the reasons, means future you can check it is still right instead of reinventing it after every headline.

                ## Milestones
                1. Target percentages for each asset class adding up to 100.
                2. A tolerance band set for each asset class, such as plus or minus five percentage points.
                3. Two or three sentences explaining why this mix fits your capacity and horizons.
                4. The page dated, agreed by both partners if you invest together, and filed.

                ## Notes
                This is a personal decision, not a recommendation from the blueprint. If you pay for advice, agree the target with your adviser and record their reasoning alongside yours.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated one-page target allocation lists percentages and tolerance bands for each asset class, with the reasons written beside them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft target percentages for shares, bonds, cash and any other asset"
                - "Set a tolerance band for each asset class"
                - "Write three sentences explaining why this mix fits your situation"
                - "Date the page and store it with your investment records"
            - name: Choosing a rebalancing method
              description: |-
                ## Purpose
                Rebalancing can run on the calendar (once a year, say), on thresholds (whenever an asset leaves its band) or on a mix of both, and each suits different people. Calendar rules are easy to keep; threshold rules respond to big moves but need monitoring. Picking one deliberately, and writing down exactly what triggers a trade, removes the temptation to rebalance on gut feel.

                ## Milestones
                1. Calendar, threshold and hybrid approaches compared on effort, cost and responsiveness.
                2. One method chosen, with the exact trigger written down.
                3. The check frequency the method needs entered in the calendar.
                4. A rule for how close to target each rebalance should bring the portfolio.

                ## Notes
                A common hybrid is checking on a fixed date and trading only if an asset has left its band. Rebalancing back to the edge of the band, rather than all the way to target, means smaller and fewer trades.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rebalancing rule names the method, the exact trigger and how far each trade moves the portfolio back toward target."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a neutral comparison of calendar and threshold rebalancing"
                - "Note the dealing charges and spreads your platform applies per trade"
                - "Choose a method and write its trigger in one sentence"
                - "Decide whether trades return to target or to the band edge"
            - name: Quarterly allocation drift check
              description: |-
                ## Purpose
                Markets move the mix whether you watch or not; a year of strong share returns can push a 60 percent target to 68 without a single trade. A fifteen-minute check each quarter, updating values and comparing each asset class with its band, catches drift early and records the trend even when no action is needed.

                ## Milestones
                1. A quarterly check date in the calendar.
                2. Each check logged with date, actual percentages and distance from target.
                3. Any asset outside its band flagged for the rebalancing routine.
                4. Four consecutive quarterly checks completed.

                ## Notes
                Start from the **Metrics log** template. Use the same valuation day each time, such as the last working day of the quarter.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly entries record actual percentages against target, with any band breach flagged."
                cadence: rolling
              tasks:
                - "Set up a metrics log with a column for each asset class and its target"
                - "Update values and log each asset class's drift from target @recurring(quarterly)"
                - "Flag any asset class outside its band for rebalancing"
            - name: Annual rebalancing day
              description: |-
                ## Purpose
                Even with a threshold rule, a fixed yearly date for a full rebalance stops the portfolio drifting slowly inside its bands for years. Choosing a quiet month away from tax year end and holidays, preparing figures in advance and placing the trades in one sitting turns rebalancing into an annual chore, like a boiler service, rather than a decision made under pressure.

                ## Milestones
                1. A fixed rebalancing month chosen and entered in the calendar.
                2. Valuations, target and trade amounts prepared before the day.
                3. Trades placed in a single session, with sells settled before buys.
                4. The post-rebalance mix logged and checked against target.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full rebalance has been completed on the chosen date for two consecutive years, each with before and after percentages logged."
                cadence: cyclic
              tasks:
                - "Pick a rebalancing month away from tax year end and holidays"
                - "Prepare valuations and trade amounts, then rebalance the portfolio @recurring(yearly)"
                - "Log the before and after percentages once trades settle"
            - name: Directing new contributions to the underweight asset
              description: |-
                ## Purpose
                For anyone still adding money, the cheapest rebalance is the one that never sells: each month's contribution goes to whichever asset class is furthest below target. Set up as a monthly routine, it keeps the mix close to target with no extra dealing costs or tax, and often makes the annual rebalance unnecessary while contributions are large relative to the portfolio.

                ## Milestones
                1. The monthly contribution amount and date confirmed.
                2. A quick way to see which asset is most underweight before each payment.
                3. Contributions redirected by changing the regular investment instruction or buying manually.
                4. Six months of contributions recorded with where each went.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly contributions have gone to the most underweight asset class, each recorded in the log."
                cadence: rolling
              tasks:
                - "Check whether your platform lets you change the regular investment split"
                - "Direct this month's contribution to the most underweight asset @recurring(monthly:12)"
                - "Record where each contribution went in the allocation log"
            - name: Dividend and interest sweep into underweight assets
              description: |-
                ## Purpose
                Accumulation units reinvest income automatically into the same fund, which quietly feeds whatever is already overweight. Choosing income units for some holdings, and sweeping paid-out dividends and bond interest into the underweight asset class each quarter, turns that cash into a free rebalancing tool.

                ## Milestones
                1. Each fund's income treatment, accumulation or income units, checked.
                2. A decision made on which holdings should pay out cash instead.
                3. Uninvested income in each account swept into the underweight asset every quarter.
                4. Idle income kept below a cash figure you set for each account.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Income from the portfolio is swept into the underweight asset class each quarter, with no account holding idle income for more than three months."
                cadence: rolling
              tasks:
                - "Check whether each fund holds accumulation or income units"
                - "Decide which holdings should pay income out as cash"
                - "Sweep idle income cash into the most underweight asset @recurring(quarterly)"
            - name: Tolerance band alerts in the allocation sheet
              description: |-
                ## Purpose
                Threshold rebalancing only works if something tells you an asset has crossed its band. Conditional formatting in the spreadsheet, or price alerts on the platform where available, turns each band into a visible signal, and a ten-minute monthly glance after updating values is enough between quarterly checks.

                ## Milestones
                1. Upper and lower band limits entered for each asset class.
                2. Cells that change colour when an asset leaves its band.
                3. A monthly glance at the sheet in the calendar.
                4. A test breach entered to prove the alert fires.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The allocation sheet highlights any asset class outside its band, and a test value has shown the highlight working."
                cadence: rolling
              tasks:
                - "Enter upper and lower band limits beside each target"
                - "Add conditional formatting that highlights a band breach"
                - "Type a test value to confirm the highlight works"
                - "Refresh the main values and glance at the band colours @recurring(monthly:27)"
            - name: Rebalancing trade log
              description: |-
                ## Purpose
                Every rebalance generates trades that matter later: for tax records, for checking whether the rule is being followed, and for remembering why a fund was sold. One log with the date, trigger, trade, price and cost of each rebalancing trade takes minutes at the time and saves hours at tax year end.

                ## Milestones
                1. A log with columns for date, account, trigger, holding, buy or sell, amount and cost.
                2. Every rebalancing trade from the last year entered.
                3. Contract notes saved in one folder, named by date.
                4. The log reconciled once a year against platform statements.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every rebalancing trade in the past year appears in the log with its trigger and cost, matched to a saved contract note."
                cadence: rolling
              tasks:
                - "Create a trade log with date, trigger, holding, amount and cost columns"
                - "Enter any rebalancing trades made in the past year"
                - "Save each contract note to a dated folder"
                - "Reconcile the trade log with platform statements @recurring(yearly)"
            - name: Counting pensions in the household mix
              description: |-
                ## Purpose
                Workplace pensions often sit in a default fund nobody chose, valued once a year on a statement, and they get left out of the allocation because they feel separate. Yet a pension in a default fund that is 90 percent shares can make the whole household far riskier than the mix in your own accounts suggests. Updating pension values and their asset split each year, when statements arrive, keeps the picture complete.

                ## Milestones
                1. Every pension's current fund and its asset split recorded.
                2. Pension values included in the household allocation sheet.
                3. Annual statement dates noted for each pension.
                4. Each pension's split updated within a month of its statement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All pensions appear in the allocation sheet with an asset split updated within the last twelve months."
                cadence: cyclic
              tasks:
                - "Log in to each pension and note the fund it is invested in"
                - "Record each pension fund's split between shares, bonds and cash"
                - "Update pension values and splits when annual statements arrive @recurring(yearly)"
            - name: Annual target allocation review
              description: |-
                ## Purpose
                The target itself should change only for real reasons: a goal moved closer, income became less secure, a child arrived, retirement came into view. A yearly half hour asking whether any of those happened, and changing the target only if one did, separates genuine life changes from market noise.

                ## Milestones
                1. A list of life changes in the past year that could affect capacity or horizon.
                2. The target page re-read alongside the risk capacity note.
                3. A decision recorded to keep or change the target, with the reason.
                4. Any change dated, with the old target kept for reference.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated note each year records whether the target allocation was kept or changed, and the life change behind any change."
                cadence: cyclic
              tasks:
                - "List anything in the past year that changed your horizon or income"
                - "Re-read the target and capacity notes and record a keep or change decision @recurring(yearly)"
                - "Keep each superseded target page in an archive folder"
            - name: Step-by-step rebalancing checklist
              description: |-
                ## Purpose
                Rebalancing goes wrong in small, avoidable ways: buying before a sale has settled, missing a fund's dealing cut-off, selling in a taxable account when a tax-free one would do, or paying a wide spread on a thinly traded fund. A written checklist, refined after each use, makes every rebalance follow the same safe sequence.

                ## Milestones
                1. A checklist covering valuation, calculation, account choice, order sequence, settlement and logging.
                2. Fund dealing cut-off times and settlement periods noted for each holding.
                3. The checklist used for the next rebalance.
                4. At least one improvement added after using it.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written rebalancing checklist exists, has been used for one real rebalance and has at least one improvement added afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the steps of a rebalance from valuation to logging"
                - "Note dealing cut-offs and settlement times for each fund"
                - "Add a step to check whether a tax-free account can carry the trade"
                - "Ask the agent to review the checklist for missing steps"
            - name: How the main asset classes behave
              description: |-
                ## Purpose
                Shares, bonds, cash and property each have a typical pattern: how much they have returned over long periods, how far they can fall, how they react to inflation and interest rates, and how they move relative to each other. Knowing these patterns in plain words is what makes a target mix more than a number copied from a website. Correlation, the tendency of two assets to move together, is the piece most people skip.

                ## Milestones
                1. A paragraph for each asset class covering long-run return range, typical worst fall and inflation behaviour.
                2. Correlation explained in your own words with one real example.
                3. A note on why bonds and shares sometimes fall together, as they did in 2022.
                4. Three questions answered that you could not answer before.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written summary covers each main asset class and explains correlation with a real example from the last twenty years."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read an introductory guide to asset classes from a regulator or reputable charity"
                - "Write a paragraph on how each asset class has behaved historically"
                - "Look up what happened to shares and bonds together in 2022"
                - "Explain correlation in two sentences as if to a friend"
            - name: Why rebalancing works and what it costs
              description: |-
                ## Purpose
                Keeping the portfolio at the risk level you chose, rather than the one markets drift into, is the main job of rebalancing. It does not reliably add return, and every trade carries spreads, fees and sometimes tax. Understanding both sides stops rebalancing becoming either a ritual done too often or a chore skipped for years.

                ## Milestones
                1. The risk-control purpose of rebalancing written down in a sentence.
                2. Evidence on rebalancing frequency and returns read from at least two sources.
                3. Each cost of a rebalancing trade on your platform listed: dealing fee, spread, currency charge, tax.
                4. A rough cost of one full rebalance calculated for your portfolio.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note explains the purpose of rebalancing and gives the full cost of one rebalance on your own platform in money terms."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read two articles on how rebalancing frequency affects risk and return"
                - "List the dealing, spread and currency costs your platform charges"
                - "Work out what one full rebalance of your portfolio would cost"
            - name: Historical drawdowns of common mixes
              description: |-
                ## Purpose
                Looking at the worst falls and recovery times for mixes such as 100, 80, 60 and 40 percent shares gives a feel for what each target really asks of you. Published long-run data covers the crashes of 1973, 2000, 2008 and 2020, and seeing that a balanced mix can fall by a quarter and take years to recover is sobering and useful.

                ## Milestones
                1. A reputable source of long-run returns for mixed portfolios found.
                2. Worst fall and time to recover noted for four mixes.
                3. The figures for your own target compared with your tolerance test.
                4. A one-line conclusion on whether your target's worst case is acceptable.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table shows the worst historical fall and recovery time for four mixes, including the one closest to your target."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a reputable long-run data source for mixed portfolio returns"
                - "Record worst fall and recovery time for four share and bond mixes"
                - "Compare your target's worst case with your tolerance limit"
            - name: Calculating rebalancing trades by hand
              description: |-
                ## Purpose
                Platforms rarely calculate a household-wide rebalance for you, especially across several accounts. Practising the arithmetic on a made-up portfolio (target value, actual value, difference, trade) means that on rebalancing day you can trust your own numbers and spot a typing error before it becomes a trade.

                ## Milestones
                1. The formula for each trade written out: target percentage times total, minus current value.
                2. Three practice portfolios worked through by hand.
                3. The formula built into the allocation spreadsheet as a trade column.
                4. A check that buys and sells net to zero, or to any new cash added.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The allocation spreadsheet includes a trade column whose buys and sells net to zero, checked against three hand-worked examples."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write out the trade formula for one asset class"
                - "Work three practice rebalances on paper with made-up numbers"
                - "Add a trade column to the allocation spreadsheet"
                - "Check that the trade column nets to zero"
            - name: Understanding glide paths and lifestyle funds
              description: |-
                ## Purpose
                Glide paths move a portfolio from shares toward bonds and cash as a target date approaches, and many pension defaults do this automatically from ten or fifteen years before a chosen retirement age. Knowing how your own scheme's glide path works, when it starts and what it assumes you will do at retirement tells you whether it matches your plans or needs overriding.

                ## Milestones
                1. The glide path of any lifestyle or target-date fund you hold found and summarised.
                2. The age or date when de-risking starts written down.
                3. The retirement assumption built in (annuity, cash or drawdown) noted.
                4. A judgement on whether that assumption fits your own plans.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records when your fund's glide path starts, how it moves and whether its retirement assumption matches your plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the glide path document for any lifestyle fund you hold"
                - "Note the age when automatic de-risking starts"
                - "Check which retirement choice the glide path assumes"
                - "Write whether that assumption matches your plan"
            - name: Home bias and global market weights
              description: |-
                ## Purpose
                Many investors hold far more of their own country's shares than its share of world markets, often without meaning to. Learning how global indices weight each region, and how your share holdings compare, shows whether the share portion is as diversified as you assumed. The answer feeds the regional split decision later in this area.

                ## Milestones
                1. Current regional weights of a global share index noted.
                2. Your own share holdings split by region using factsheets.
                3. The size of your home bias calculated.
                4. Reasons for and against home bias listed in a few lines.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note compares your share holdings by region with a global index and states the size of any home bias."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the regional weights of a global share index"
                - "Split your share holdings by region using fund factsheets"
                - "Calculate how far your home region exceeds its global weight"
            - name: Allocation reading list
              description: |-
                ## Purpose
                A handful of good books and papers on asset allocation will teach more than years of market news. Keeping a short, curated reading list and working through it at a steady pace builds the judgement needed to set a target and keep it, without second-guessing it each time markets lurch.

                ## Milestones
                1. Five to eight titles on asset allocation and rebalancing chosen from reputable recommendations.
                2. One title finished every month or two.
                3. A three-line takeaway written for each finished title.
                4. Anything that changes your view noted for the annual target review.

                ## Notes
                Start from the **Reading queue** template. Favour books on principles over books promising returns.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five titles on asset allocation finished within a year, each with a three-line takeaway recorded."
                cadence: rolling
              tasks:
                - "Choose five books or papers on asset allocation for the queue"
                - "Read for half an hour from the allocation list @recurring(weekly:sat)"
                - "Write a three-line takeaway when you finish each title"
            - name: Fund overlap and hidden concentration check
              description: |-
                ## Purpose
                Holding a global tracker, a US tracker and a technology fund can mean the same ten companies make up a fifth of the share portion. An overlap check, using factsheet top-ten lists or a free overlap tool, reveals concentration that asset class totals hide and shows which funds are doing the same job.

                ## Milestones
                1. Top ten holdings of every share fund listed side by side.
                2. Combined exposure to the largest five companies estimated.
                3. Funds that largely duplicate each other identified.
                4. A note on whether the overlap changes your plans.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The combined weight of your five largest underlying companies is calculated and duplicate funds are named in a note."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the top ten holdings of each share fund side by side"
                - "Estimate your combined exposure to the five largest companies"
                - "Name any funds that largely duplicate each other"
            - name: Simplifying to fewer funds per asset class
              description: |-
                ## Purpose
                Portfolios built up over years often hold eight or twelve funds where three would do, which multiplies the effort of every drift check and rebalance. Choosing one or two core funds per asset class, and planning how to move the rest into them, makes the allocation easier to see and cheaper to maintain.

                ## Milestones
                1. Each fund mapped to the asset class job it does.
                2. A core fund chosen for each asset class.
                3. A switching plan that accounts for exit costs and tax on each sale.
                4. Holdings reduced to the planned number of funds.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The portfolio holds no more than the planned number of funds per asset class, with each switch recorded in the trade log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Map every fund to the asset class job it does"
                - "Pick one core fund for each asset class"
                - "Check exit charges and tax before planning each switch"
                - "Move holdings into the core funds in planned stages"
            - name: All-in-one fund or separate building blocks
              description: |-
                ## Purpose
                A single multi-asset fund rebalances itself at a fixed mix, while separate share and bond funds give more control and often lower cost but leave the rebalancing to you. Comparing the two honestly, on charges, flexibility, fit with your target and how likely you are to keep up the maintenance, settles one of the biggest structural choices in this area.

                ## Milestones
                1. Two or three all-in-one funds with a mix near your target shortlisted.
                2. A building-block version of your target costed with named funds.
                3. Both options scored on cost, control, effort and fit.
                4. A choice recorded with the reason.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison scores at least one all-in-one fund against a building-block portfolio and records which was chosen and why."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist all-in-one funds whose mix is close to your target"
                - "Cost a building-block version using separate share and bond funds"
                - "Score both on cost, control, effort and fit"
                - "Record the decision and the main reason for it"
            - name: Splitting the defensive portion between bonds and cash
              description: |-
                ## Purpose
                Deciding how much of the non-share portion sits in bonds and how much in cash changes how the portfolio behaves when rates move and when shares fall. Bonds have often cushioned share crashes but can fall when rates rise; cash is steady but loses ground to inflation. A deliberate split, written into the target, replaces whatever ratio happened by accident.

                ## Milestones
                1. The roles of bonds and cash in your portfolio described in a sentence each.
                2. The current split between them calculated.
                3. A target split chosen and added to the target allocation page.
                4. Any move needed to reach the new split planned.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The target allocation page states a bonds to cash split for the defensive portion, with a sentence explaining it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Calculate the current split between bonds and cash"
                - "Write a sentence on what each is meant to do for you"
                - "Add a chosen bonds to cash split to the target page"
            - name: Regional split of the share portion
              description: |-
                ## Purpose
                Within the share portion sits a second allocation: how much in your home market, other developed markets and emerging markets. Choosing between global market weights and a deliberate tilt, and writing the split down, means regional drift can be checked and corrected like any other.

                ## Milestones
                1. Current regional split of the share portion calculated.
                2. Options compared: global market weights, a modest home tilt or a fixed split.
                3. A target regional split recorded with bands.
                4. The quarterly drift check extended to cover regions.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target regional split with bands is recorded on the target allocation page and included in the drift check."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Calculate your current regional split from fund factsheets"
                - "Compare global market weights with a modest home tilt"
                - "Record a regional target with bands on the target page"
                - "Add a regional section to the quarterly drift log"
            - name: Capping the satellite sleeve for other assets
              description: |-
                ## Purpose
                Property funds, gold, commodities, crypto and collectibles tend to creep in one purchase at a time until they form a quarter of the portfolio without anyone deciding so. Setting a single cap for everything outside core shares, bonds and cash, and checking against it each year, keeps experiments sized as experiments.

                ## Milestones
                1. Every holding outside core shares, bonds and cash listed and totalled.
                2. A maximum percentage for the satellite sleeve chosen and written on the target page.
                3. Any excess above the cap given a plan to trim.
                4. The sleeve compared with its cap at each annual review.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written cap for non-core assets exists, and the sleeve was within it at the last annual check."
                cadence: cyclic
              tasks:
                - "Total all holdings outside core shares, bonds and cash"
                - "Choose a cap for the satellite sleeve and write it on the target page"
                - "Compare the satellite sleeve with its cap @recurring(yearly)"
            - name: Phasing a cash pile into the target allocation
              description: |-
                ## Purpose
                Moving a large cash balance into a portfolio is often the moment of most regret: invest it all and markets fall the next week, or wait and watch them rise. Historically, investing a lump sum at once has more often come out ahead, but phasing it in over six to twelve months can make the decision bearable. Choosing an approach and a schedule in writing, before starting, stops the plan stalling half way.

                ## Milestones
                1. The sum to invest and the target mix it will join confirmed.
                2. Lump sum and phased entry compared, with your own reasons for the choice.
                3. A written schedule of amounts and dates, including what happens if markets fall mid-way.
                4. Every tranche invested on schedule.

                ## Notes
                Decide in advance that a market fall during the schedule is not a reason to pause. Pausing is the commonest way phasing plans fail.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The full cash sum is invested in the target mix by the final date of a written schedule, with no tranche skipped."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the sum to invest and the mix it will join"
                - "Choose lump sum or phased entry and write down why"
                - "Write a schedule of amounts and dates for each tranche"
                - "Invest each tranche on its scheduled date"
            - name: Catch-up plan for a badly drifted portfolio
              description: |-
                ## Purpose
                Years without rebalancing can leave a portfolio 20 points away from its target, with large gains sitting in the overweight funds. Correcting it in one go could trigger tax and big trades at a single price; a staged plan over a year or two, using contributions first and tax-free accounts next, brings it back with less cost and less regret.

                ## Milestones
                1. The gap between actual and target measured for each asset class.
                2. Gains on each overweight holding and the tax position on selling noted.
                3. A staged plan with dates, using contributions and tax-free accounts first.
                4. The portfolio back within its bands by the plan's end date.

                ## Notes
                Start from the **Remediation plan** template. If a large tax bill could result, take advice from a tax professional before selling.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The portfolio is back within its tolerance bands by the plan's end date, with each stage recorded in the trade log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Measure how far each asset class sits from target"
                - "List unrealised gains on each overweight holding"
                - "Draft a staged plan that uses contributions and tax-free accounts first"
                - "Carry out the first stage and log the trades"
            - name: Rebalancing without selling
              description: |-
                ## Purpose
                Selling to rebalance can cost tax, spreads and fees, yet there are several ways to move the mix without a sale: directing contributions, redirecting income, drawing withdrawals from the overweight asset, and keeping any necessary sales inside tax-free or pension accounts where switches carry no tax. Listing which of these are open to you sets the order you reach for them.

                ## Milestones
                1. Each no-sale rebalancing lever listed with whether it is open to you.
                2. The accounts where switching carries no tax identified.
                3. A written order of preference for the levers.
                4. The order added to the rebalancing checklist.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written order of preference for rebalancing levers, starting with no-sale options, is part of the rebalancing checklist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each way you could shift the mix without selling"
                - "Identify accounts where a fund switch carries no tax"
                - "Write the levers in your order of preference"
            - name: Rebalancing rule for a large market fall
              description: |-
                ## Purpose
                Sharp falls in shares are when rebalancing matters most and feels worst, because it means buying the asset that has just lost money. Deciding now what size of fall triggers an extra check, how the trade will be calculated and whether to close the gap in one go, turns a stressful week into a mechanical step agreed in calm conditions.

                ## Milestones
                1. A fall size that triggers an out-of-cycle check, such as shares down 20 percent from their peak.
                2. The calculation steps for an out-of-cycle rebalance written down.
                3. A rule on whether to trade the whole gap or half now and half later.
                4. The rule added to the target allocation page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule sets the fall that triggers an out-of-cycle rebalance and how much of the gap is traded, filed with the target page."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the fall size that triggers an out-of-cycle check"
                - "Write the steps for calculating an out-of-cycle rebalance"
                - "Decide whether to close the full gap or half at a time"
                - "Add the rule to the target allocation page"
            - name: First rebalance carried out
              description: |-
                ## Purpose
                The first real rebalance is where the theory meets the platform: settlement times, dealing cut-offs and the nerve to sell what has done well. Carrying it out deliberately, within three months of setting the target, proves the whole system works and gives you a reference run to repeat.

                ## Milestones
                1. Trades calculated from the spreadsheet and checked twice.
                2. Sells placed and settled before buys.
                3. The post-trade mix within a percentage point of the intended result.
                4. Lessons from the first run added to the checklist.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One full rebalance has been completed, leaving every asset class within its band, with lessons added to the checklist."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate the trades in the spreadsheet and check them twice"
                - "Place the sell orders and wait for them to settle"
                - "Place the buy orders and confirm the new mix"
                - "Add what you learned to the rebalancing checklist"
            - name: Allocating a windfall or inheritance
              description: |-
                ## Purpose
                An inheritance, bonus or property sale can arrive as a sum bigger than the existing portfolio, and dropping it into the current funds in proportion is rarely the best move. Using it to bring the household back to target, after setting aside anything needed for short-horizon goals, can do in one step what years of contributions would.

                ## Milestones
                1. Short-horizon needs from the windfall set aside in cash.
                2. The remaining sum allocated to bring the household to target.
                3. A decision on lump sum or phased entry recorded.
                4. The new mix logged once the money is invested.

                ## Notes
                Inherited investments can be kept, sold or switched, and each choice may have tax effects. Check with the estate's adviser or a tax professional before selling inherited holdings.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The windfall has been invested so that every asset class sits within its band, with short-horizon money held separately."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set aside any part of the windfall needed within three years"
                - "Calculate how the rest would bring each asset class to target"
                - "Decide whether to invest at once or in tranches"
                - "Log the new mix once the money is invested"
            - name: Keeping the mix during a pension or platform transfer
              description: |-
                ## Purpose
                Transfers of a pension or investment account between providers often mean selling to cash for days or weeks before the money is reinvested, or arriving in a different default fund. Knowing in advance whether it moves as cash or in specie, and choosing the receiving funds before the money lands, avoids an accidental spell out of the market.

                ## Milestones
                1. Whether the transfer moves as cash or in specie confirmed with both providers.
                2. The expected time out of the market noted.
                3. Target funds at the receiving provider chosen before the money arrives.
                4. Money reinvested in the target mix within a week of arrival.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The transferred money is invested in the target mix within a week of arriving, with the dates recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask both providers whether the transfer moves as cash or in specie"
                - "Choose the funds at the new provider before the money lands"
                - "Reinvest into the target mix as soon as the transfer completes"
            - name: Rebalancing rehearsal with a simulated 30 percent fall
              description: |-
                ## Purpose
                Reading that shares can fall 30 percent is different from calculating that your rule would then have you sell bonds and buy shares worth a specific sum. Running the numbers on paper once a year, with your real balances, rehearses the decision so a real crash triggers a familiar routine instead of a new one.

                ## Milestones
                1. A copy of the allocation sheet with shares cut by 30 percent.
                2. The resulting trades calculated under your rule.
                3. A written answer to whether you would actually place those trades.
                4. Any change to the rule or target discussed later rather than made on the spot.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "The simulated fall has been run with real balances in the last year, with the resulting trades and your honest response written down."
                cadence: cyclic
              tasks:
                - "Copy the allocation sheet and cut every share holding by 30 percent"
                - "Calculate the trades your rebalancing rule would require"
                - "Write down whether you would place those trades and why"
                - "Rerun the simulated fall with current balances @recurring(yearly)"
            - name: Allocation for your first decade of investing
              description: |-
                ## Purpose
                In the early years, monthly contributions are large compared with the balance, so the mix can be steered almost entirely by where new money goes. Keeping things simple, with one or two funds, a target set for a long horizon and no selling, avoids the fiddling that costs new investors most, and the habits set now last decades.

                ## Milestones
                1. A long-horizon target agreed, recognising the time available to recover from falls.
                2. No more than two or three funds held.
                3. Contributions steering the mix, with no sales needed.
                4. A yearly check that contributions still outweigh market movement.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two years of contributions have kept the mix within its bands without a single sale, using no more than three funds."
                cadence: rolling
              tasks:
                - "Write down a no-selling rule for the early years"
                - "Limit the portfolio to two or three funds"
                - "Compare the year's contributions with the year's market movement @recurring(yearly)"
            - name: Combining two partners' portfolios into one household allocation
              description: |-
                ## Purpose
                Couples often run separate portfolios with different mixes, so one partner's caution and the other's boldness cancel out invisibly. Agreeing whether to manage one household target or two personal ones, and seeing the combined mix either way, prevents doubled-up risk or an accidentally timid whole.

                ## Milestones
                1. Both partners' holdings in one combined sheet.
                2. A decision on one household target or two personal ones.
                3. Each partner's accounts given a role in reaching the target.
                4. A yearly joint review in the calendar.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Both partners' holdings appear in one sheet, and a written agreement records whether you manage one household target or two."
                cadence: cyclic
              tasks:
                - "Put both partners' holdings into one combined sheet"
                - "Agree whether to run one household target or two personal ones"
                - "Give each account a role in reaching the agreed mix"
                - "Review the combined allocation together @recurring(yearly)"
            - name: Glide path for the decade before retirement
              description: |-
                ## Purpose
                Large falls do most damage in the ten years before retirement, because there is little time to recover before withdrawals start. Planning a gradual shift from the long-term mix to the retirement mix, in yearly steps rather than one late jump, spreads the change across different market conditions and keeps it deliberate.

                ## Milestones
                1. The intended retirement date and the mix wanted at that date written down.
                2. Yearly steps from today's mix to the retirement mix laid out.
                3. Any automatic lifestyle switching in pensions aligned with or overridden by the plan.
                4. The first yearly step carried out.

                ## Notes
                The right retirement mix depends on how you will take income. If you use an adviser, agree the glide path with them.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written glide path sets the mix for each year to retirement, and the first yearly step has been completed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the target retirement date and the mix you want then"
                - "Lay out a yearly step from today's mix to the retirement mix"
                - "Check whether pension lifestyle switching conflicts with the plan"
                - "Move the allocation one step along the glide path @recurring(yearly)"
            - name: Rebalancing through withdrawals in retirement
              description: |-
                ## Purpose
                Once income is being drawn, the withdrawal itself becomes the main rebalancing tool: take it from whatever asset is overweight and leave the underweight one to recover. Deciding each quarter which holding funds the next spell of income keeps the mix in line with fewer trades and avoids selling shares straight after a fall.

                ## Milestones
                1. The quarterly income need and the accounts that supply it confirmed.
                2. A rule for which asset class funds each withdrawal.
                3. A cash buffer level agreed for the months ahead.
                4. Four quarters of withdrawals taken in line with the rule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly withdrawals have been taken from the overweight asset class, as recorded in the log."
                cadence: rolling
              tasks:
                - "Confirm how much income each quarter needs and from which accounts"
                - "Write a rule for which asset class funds each withdrawal"
                - "Pick next quarter's withdrawal from the overweight asset @recurring(quarterly)"
            - name: Rebalancing with irregular self-employed income
              description: |-
                ## Purpose
                Freelancers and business owners tend to invest in lumps after a good quarter or once the tax bill is clear, not by monthly debit. Treating each lump as a rebalancing opportunity, with a simple rule for where it goes, keeps the mix on track without regular contributions or sales.

                ## Milestones
                1. A rule for when surplus business income moves into investments.
                2. Each lump invested in the most underweight asset class.
                3. A minimum lump size set so dealing costs stay small.
                4. A year of lumps invested and recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every investment lump in a year has gone to the most underweight asset class, each above the minimum size you set."
                cadence: rolling
              tasks:
                - "Set a rule for when surplus income moves into investments"
                - "Choose a minimum lump size that keeps dealing costs small"
                - "Put the quarter's surplus into whichever asset is furthest below target @recurring(quarterly)"
            - name: Separating a house deposit due within three years
              description: |-
                ## Purpose
                Money for a home deposit due in two or three years cannot ride out a share market fall, yet it often sits in the same account as long-term savings and gets counted in the same mix. Splitting it out, holding it in cash or short-dated instruments, and moving any invested portion over gradually as the purchase date nears protects the deposit while leaving the long-term mix intact.

                ## Milestones
                1. The deposit amount and expected purchase date written down.
                2. Deposit money held separately from the long-term portfolio.
                3. A schedule for moving any invested deposit money to cash.
                4. The long-term allocation recalculated without the deposit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The deposit is held apart from the long-term portfolio, with a schedule moving any invested part to cash before the purchase date."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down the deposit amount and target purchase date"
                - "Move the deposit into a separate account or pot"
                - "Shift the next slice of invested deposit money to cash @recurring(quarterly)"
                - "Recalculate the long-term mix without the deposit"
            - name: Asset location across account types
              description: |-
                ## Purpose
                With several wrappers, the same household mix can be held in many ways: bonds in the pension and shares in a tax-free account, or the reverse. Managing one target across all accounts, and choosing which assets sit where, affects tax drag and makes rebalancing easier when switches inside tax-free accounts carry no tax. It is fiddly enough that a written map is worth keeping.

                ## Milestones
                1. Each account's tax treatment noted in a line.
                2. A map showing which asset classes are held in which account.
                3. The overall mix still matching the household target.
                4. A rule for where future rebalancing trades happen first.

                ## Notes
                Tax treatment differs by country and changes over time. Check current rules in the tax authority's guidance or with a tax professional before reorganising.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written map shows which asset classes sit in which account, with the household total matching the target within its bands."
                cadence: cyclic
              tasks:
                - "Note each account's tax treatment in one line"
                - "Draw a map of which assets sit in which account"
                - "Decide which account takes rebalancing trades first"
                - "Review the location map against current tax rules @recurring(yearly)"
            - name: Currency exposure across the portfolio
              description: |-
                ## Purpose
                Overseas shares and bonds carry currency risk on top of market risk, and for bonds that extra swing can be larger than the bond's own movement. Measuring how much of the portfolio is in foreign currencies, and deciding where hedged share classes make sense, keeps currency from becoming an accidental bet.

                ## Milestones
                1. Currency exposure estimated for each fund from its factsheet.
                2. Total foreign currency exposure as a share of the portfolio calculated.
                3. A hedging decision recorded separately for the bond portion and the share portion.
                4. Any switch to hedged share classes planned and costed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A note records total foreign currency exposure and a separate hedging decision for bonds and shares."
                cadence: cyclic
              tasks:
                - "Estimate each fund's currency exposure from its factsheet"
                - "Calculate the portfolio's total foreign currency share"
                - "Decide on hedging separately for bonds and shares"
                - "Recheck currency exposure against your hedging decision @recurring(yearly)"
            - name: Factor tilts within the share allocation
              description: |-
                ## Purpose
                Some investors tilt part of their shares toward factors such as smaller companies or value stocks, hoping for higher long-run returns in exchange for long spells of lagging the market. Deciding whether to tilt, sizing it as a capped slice of the share portion and tracking it against the plain market shows whether you can live with the tracking error the evidence says to expect.

                ## Milestones
                1. The main factor premiums and their long losing spells read about in at least two sources.
                2. A decision on whether to tilt, with a maximum slice of the share portion.
                3. Any tilt held through dedicated funds and added to the allocation sheet.
                4. A yearly comparison against a plain global index logged.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on factor tilts sets a maximum slice of the share portion, and a yearly comparison against the market is logged."
                cadence: cyclic
              tasks:
                - "Read two balanced sources on factor investing and its losing spells"
                - "Decide whether to tilt and set a maximum slice"
                - "Compare the tilted slice with a plain global index @recurring(yearly)"
            - name: Backtesting your rebalancing rule
              description: |-
                ## Purpose
                Free portfolio backtesting tools let you run your target mix and rule over decades of historical data and compare it with alternatives: never rebalancing, annual, or a five point band. Testing your own rule this way shows its likely effect on worst falls and the number of trades, and keeps expectations realistic. Past data never guarantees the future, so treat the result as a sense check.

                ## Milestones
                1. A backtesting tool with reliable long-run data chosen.
                2. Your target mix tested under no rebalancing, annual and band rules.
                3. Worst fall, volatility and number of trades compared for each.
                4. A conclusion recorded on whether your rule still makes sense.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A backtest compares your rule with at least two alternatives on worst fall and trade count, with a written conclusion."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick a portfolio backtesting tool with long historical data"
                - "Run your mix with no rebalancing, annual and band rules"
                - "Compare worst fall, volatility and trade count for each"
                - "Ask the agent to summarise the results in a short note"
            - name: Band widths sized to each asset's volatility
              description: |-
                ## Purpose
                A flat five point band treats a volatile emerging markets slice the same as a sleepy cash holding. Relative bands, such as the common rule of five points or a quarter of the target, whichever is smaller, scale the trigger to each holding's size and volatility, so small slices are not ignored and large ones are not over-traded.

                ## Milestones
                1. Absolute and relative band methods compared on paper.
                2. A band width chosen for each asset class and sub-allocation.
                3. The bands entered in the allocation sheet's alerts.
                4. A year of drift checks run with the new bands.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each asset class and sub-allocation has a band width sized to its target and volatility, entered in the allocation sheet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare absolute and relative band methods for your holdings"
                - "Set a band width for each asset class and sub-allocation"
                - "Enter the new bands in the allocation sheet's alerts"
---

# Asset Allocation & Rebalancing

This area is for anyone with money invested for the long term who wants its mix of shares, bonds and cash to be chosen on purpose rather than inherited from whatever was bought first. It starts with the foundations (a full inventory, the current mix, your risk capacity and tolerance, and a written target with bands), then the routines that keep the portfolio there, the skills behind the numbers, decisions about structure and sub-allocations, the moments that need a planned rebalance, variants for different stages of life, and finally specialist work on asset location, currency, factor tilts and band design.

What repeats is a quarterly drift check, a monthly contribution pointed at whichever asset is underweight, a monthly glance at the band alerts, a full rebalance once a year and a yearly look at whether the target itself still fits. The Metrics log, Operational checklist, Reading queue, Purchase decision and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
