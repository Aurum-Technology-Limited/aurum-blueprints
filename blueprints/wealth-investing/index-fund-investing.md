---
id: wealth-investing.index-fund-investing
name: Index Fund Investing
description: "A low-cost index fund portfolio built step by step: platform and fund choice, automatic monthly contributions, the fund checks that matter and a written plan for holding through market falls."
category: personal
version: 1.0.0
tags: [wealth-investing, index-fund-investing, everyone, index-funds, etfs, passive-investing, regular-investing]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - reading-queue
    - operational-checklist
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Index Fund Investing
          description: "Building a low-cost, diversified index fund portfolio, with a simple plan for regular contributions and holding through market swings."
          projects:
            - name: Readiness check before buying index funds
              description: |-
                ## Purpose
                Money that might be needed within a few years, or that sits beside a credit card charging 20 percent or more, is usually better placed elsewhere before it goes into a share index fund. A short check of emergency cash, expensive debts and near-term spending plans tells you how much can sensibly be invested and then left alone for at least five years.

                ## Milestones
                1. Months of essential spending held in easy-access cash written down.
                2. Every debt listed with its interest rate, with any above your own threshold marked for paying off first.
                3. Known large costs in the next five years listed with rough dates.
                4. An amount you could leave invested through a fall of a third recorded.

                ## Notes
                The thresholds are yours to set. If your situation is complicated, a regulated adviser or a free money guidance service can sanity check the numbers.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written figure for the amount available to invest for five years or more, after emergency cash and expensive debts are accounted for."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up essential monthly spending from last month's bank statement"
                - "List every debt with its balance and interest rate"
                - "Write down the large costs you expect in the next five years"
                - "Record the amount you can leave invested for at least five years"
            - name: Goals and time horizon for the index portfolio
              description: |-
                ## Purpose
                Index funds reward patience, so the date you will need the money matters more than which fund you buy. Naming each goal, its rough target amount and the year you start drawing on it tells you which pots can ride out a crash and which belong in cash instead.

                ## Milestones
                1. Each investing goal named with a target amount and a start year.
                2. Goals under five years away moved out of the share index plan.
                3. The longest-horizon goal marked as the core of the index portfolio.
                4. Goals and horizons written at the top of your index fund plan.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A list of investing goals with amounts and start years, with every goal under five years away excluded from the share index plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write each goal you are investing for on its own line"
                - "Give each goal a rough target amount and the year you will need it"
                - "Move any goal under five years away into a cash savings plan"
                - "Check goals and years still match your life plans @recurring(yearly)"
            - name: Sustainable monthly contribution amount
              description: |-
                ## Purpose
                A modest amount invested every month for twenty years usually does more than an ambitious amount abandoned after six months. Setting the figure from your actual spending, with room for irregular bills, gives you a number you can keep paying in through good and bad markets alike.

                ## Milestones
                1. Three months of spending reviewed to find the real monthly surplus.
                2. Irregular yearly bills averaged into a monthly figure and subtracted.
                3. A monthly contribution set at a level that leaves a buffer each month.
                4. The amount and the reasoning written into your index fund plan.

                ## Notes
                Start lower than feels possible. Raising the amount later is easy, while a direct debit cancelled after a bad month tends to stay cancelled.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A fixed monthly contribution figure recorded in your plan, set below your average monthly surplus of the last three months."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Export the last three months of current account transactions"
                - "Average your irregular yearly bills into a monthly figure"
                - "Work out your average monthly surplus after those bills"
                - "Choose a contribution that leaves a buffer below that surplus"
            - name: One-page index fund plan
              description: |-
                ## Purpose
                When markets fall, a plan written in calm conditions is what keeps contributions going. One page covering why you invest, which funds you hold, how much goes in each month and what you will do in a crash is enough for most people, and short enough to reread in five minutes on a bad day.

                ## Milestones
                1. A one-page plan listing goals, funds, monthly amount and investing day.
                2. A paragraph on what you will do if the portfolio falls 20 or 40 percent.
                3. A rule for when you are allowed to change funds, and when you are not.
                4. The plan saved where you will find it during a bad week for markets.

                ## Notes
                Keep it to one page. A full personal investment policy covering every asset is a bigger piece of work; this is the short version for an index portfolio.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page index fund plan covering goals, funds, monthly amount and crash behaviour, saved alongside your account details."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the plan headings: goals, funds, amount, day and crash rules"
                - "Write what you will do if the portfolio drops 20 percent and 40 percent"
                - "Set a rule listing the only reasons you would switch funds"
                - "Reread the plan and update the fund list @recurring(yearly)"
            - name: Choosing a platform to hold your index funds
              description: |-
                ## Purpose
                Platforms charge in different ways: a percentage of your balance, a flat monthly fee, dealing charges per trade, or a mix, and the cheapest choice changes as the portfolio grows. Comparing three providers on what your own monthly amount and expected balance would cost, plus which index funds they actually offer, avoids paying a percentage fee for decades on a balance that would suit a flat fee.

                ## Milestones
                1. Three platforms shortlisted that are regulated in your country and offer the index funds you want.
                2. Yearly cost worked out for each at today's balance and at five times that balance.
                3. Regular investing options, fractional ETF purchases and fund range compared.
                4. A platform chosen with the reason recorded.

                ## Notes
                Start from the **Purchase decision** template. Check the provider is covered by your country's investor compensation scheme before sending money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform chosen from a shortlist of three, with each one's yearly cost at two balance levels written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List three regulated platforms that offer index funds and ETFs"
                - "Calculate each platform's yearly cost at your current and future balance"
                - "Check which platforms offer free regular investing into your funds"
                - "Record the platform you chose and why"
            - name: Index fund or ETF format decision
              description: |-
                ## Purpose
                The same index can be held as a traditional open-ended fund priced once a day, or as an exchange-traded fund bought on the market during trading hours. The differences show up in dealing charges, minimum amounts, bid-offer spreads and whether your platform lets you buy fractions, so the right format depends on how much you invest each month.

                ## Milestones
                1. The pricing and dealing differences between the two formats written in plain words.
                2. Your platform's charges for each format at your monthly amount compared.
                3. A format chosen for regular contributions.
                4. The choice noted in your one-page plan.

                ## Notes
                For small monthly amounts, dealing charges on ETFs can cost more than the fund's own yearly charge. Some platforms waive them for scheduled purchases.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on funds or ETFs for monthly contributions, backed by a cost comparison at your actual monthly amount."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note how a tracker fund and an ETF are each priced and traded"
                - "Check your platform's dealing charge for funds and for ETFs"
                - "Compare the cost of a year of monthly purchases in each format"
                - "Write the chosen format into your plan"
            - name: Index fund shortlist with a fact sheet scorecard
              description: |-
                ## Purpose
                Two funds tracking almost the same market can differ in ongoing charge, size, replication method and how closely they have matched their index. Scoring every candidate on the same six lines from its fact sheet and key information document makes the choice quick and stops a familiar brand name doing the deciding.

                ## Milestones
                1. A scorecard with lines for index tracked, ongoing charge, fund size, replication, share class and tracking difference.
                2. Four to six candidate funds scored from their own documents.
                3. One or two funds chosen for each role in your plan.
                4. The scorecard saved with the date the documents were read.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated scorecard comparing at least four index funds on the same six lines, with the chosen fund for each role marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up a scorecard with six comparison lines"
                - "Download the fact sheet and key information document for each candidate"
                - "Fill in every line for each fund from its own documents"
                - "Mark the chosen fund for each role in your plan"
            - name: Opening the account and making the first purchase
              description: |-
                ## Purpose
                Opening an account, passing identity checks, funding it and placing the first order can take a couple of weeks, and it is easy to stall halfway with money sitting as uninvested cash. Treating it as one short project, ending with a confirmed holding of the right fund, gets the plan off paper and into the market.

                ## Milestones
                1. Account opened and identity checks passed.
                2. The first payment arrived in the account.
                3. The first order placed for the exact fund and share class on your scorecard.
                4. The contract note checked against the fund code, units and price.

                ## Notes
                Search by the fund's identifier code, not its name: the same index often has several share classes with different charges.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The first purchase of your chosen index fund shows as a holding, with a contract note matching the intended fund code."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather ID, proof of address and your tax number for the application"
                - "Open the account and complete the identity checks"
                - "Transfer the first payment from your bank"
                - "Buy the fund using its identifier code rather than a name search"
                - "Check the contract note against the code, units and price"
            - name: Automatic monthly investment instruction
              description: |-
                ## Purpose
                Contributions that rely on remembering to log in each month tend to stop the first time markets look frightening. A direct debit into the platform plus a regular investment instruction that buys your funds automatically turns the plan into something that happens whether or not you are paying attention.

                ## Milestones
                1. A monthly direct debit set up for the agreed contribution.
                2. A regular investment instruction buying each fund in the planned split.
                3. The investing day set a few days after payday.
                4. The first automated purchase confirmed as a holding.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A direct debit and regular investment instruction are live, and the first automated purchase appears in the holdings."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Set up the monthly direct debit into the platform"
                - "Create a regular investment instruction for each fund and amount"
                - "Pick an investing day three to five days after payday"
                - "Check the first automatic purchase went into the right funds"
            - name: Index holdings record sheet
              description: |-
                ## Purpose
                Platform screens show today's value but bury what you have paid in, so a fall can look like a disaster and a rise like genius. A simple sheet of monthly contributions, units and value separates money in from market movement, which is the number that keeps you calm.

                ## Milestones
                1. A sheet with columns for date, amount paid in, units bought, fund and month-end value.
                2. All past contributions entered from the platform's transaction history.
                3. A running total of money paid in shown beside the current value.
                4. The sheet updated for at least three consecutive months.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A record sheet showing total contributions beside month-end value, updated for three consecutive months."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the record sheet from the metrics log template"
                - "Copy past contributions from the platform's transaction history"
                - "Add a running total of money paid in"
                - "Enter this month's contribution, units and month-end value @recurring(monthly:27)"
            - name: Monthly check that contributions were invested
              description: |-
                ## Purpose
                Direct debits fail, funds get suspended and platforms occasionally leave money as cash when a fund cannot be bought. A two-minute check a few days after the investing day catches problems in the same month, instead of discovering a year later that nothing was bought.

                ## Milestones
                1. A monthly reminder set for three days after your investing day.
                2. Each month's purchases matched against the planned amounts.
                3. Any failed or partial purchase fixed in the same month.
                4. Twelve consecutive months checked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's planned purchases are confirmed as holdings within a week of the investing day, for twelve months in a row."
                cadence: rolling
              tasks:
                - "Note your investing day and set the check for three days later"
                - "Confirm this month's purchases match the planned amounts @recurring(monthly:9)"
                - "Contact the platform the same week if a purchase failed"
                - "Keep a one-line note of any month that needed fixing"
            - name: Quarterly index portfolio check-in
              description: |-
                ## Purpose
                Looking at an index portfolio every day breeds anxiety, while never looking lets small problems pile up. Fifteen minutes once a quarter to note the value, compare it with money paid in, read any fund notices and confirm nothing in the plan has changed is the right amount of attention for most people.

                ## Milestones
                1. A quarterly slot booked in your calendar.
                2. Value, contributions to date and fund split noted each quarter.
                3. Any fund notices or platform emails from the quarter read.
                4. A single line written on whether anything needs to change, which is usually nothing.

                ## Notes
                Resist checking the app more often. Moving it off your phone's home screen helps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly check-ins a year recorded, each with value, contributions to date and a one-line conclusion."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute slot each quarter"
                - "Write down value, money paid in and current fund split @recurring(quarterly)"
                - "Read any fund or platform notices from the last three months"
                - "Record a one-line conclusion for the quarter"
            - name: Yearly contribution step-up
              description: |-
                ## Purpose
                Contributions fixed at what you could afford in your first year quietly shrink in real terms as pay and prices rise. Raising the monthly amount by a set step each year, ideally straight after a pay rise, keeps the plan growing before the extra money is absorbed into everyday spending.

                ## Milestones
                1. A yearly step-up percentage or amount agreed.
                2. The step-up date tied to your usual pay review month.
                3. The regular investment instruction updated after each step-up.
                4. Contribution history showing each year's increase.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The monthly contribution has been raised at least once in the last twelve months, with the new amount live in the regular investment instruction."
                cadence: cyclic
              tasks:
                - "Choose a yearly step-up, such as 5 percent or half of any pay rise"
                - "Note the month your pay is usually reviewed"
                - "Raise the direct debit and investment instruction by the step-up @recurring(yearly)"
                - "Add the new amount to the record sheet"
            - name: Annual tracking difference check
              description: |-
                ## Purpose
                An index fund's job is to deliver the index return minus a small cost, and the gap between the two, the tracking difference, is the real price you pay. Comparing each fund's calendar year return with its index once a year shows whether it still does that job, or whether a closer tracker of the same index now exists.

                ## Milestones
                1. Last calendar year's fund return and index return found for each holding.
                2. Tracking difference calculated and set beside the ongoing charge.
                3. Any fund lagging its index by much more than its charge flagged.
                4. A note made of whether a switch is worth investigating.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every fund held has its last calendar year tracking difference written beside its ongoing charge, with any outlier flagged."
                cadence: cyclic
              tasks:
                - "Find each fund's calendar year return in its annual report or fact sheet"
                - "Find the matching index return for the same year"
                - "Calculate each fund's gap to its index and compare it with the charge @recurring(yearly)"
                - "Flag any fund that trails by much more than its charge"
            - name: Contract notes and statements filing
              description: |-
                ## Purpose
                Contract notes, annual statements and the yearly tax summary are needed if you ever sell in a taxable account, change platform or settle an estate, and platforms do not always keep them online forever. A monthly sweep into one folder takes minutes and saves days of reconstruction later.

                ## Milestones
                1. One folder per year for contract notes, statements and tax documents.
                2. Past documents downloaded from the platform archive.
                3. New documents filed each month.
                4. The folder location noted in your one-page plan.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated folder holds every contract note and statement from the account's opening to last month."
                cadence: rolling
              tasks:
                - "Create a yearly folder structure for platform documents"
                - "Download every document still in the platform's archive"
                - "File this month's contract notes and statements @recurring(monthly:21)"
                - "Write the folder location into your one-page plan"
            - name: Reinvesting distributions from income units
              description: |-
                ## Purpose
                If you hold income units rather than accumulation units, dividends arrive as cash and can sit uninvested for years unless the platform is told to reinvest them. Switching on automatic reinvestment, or checking each quarter that it happened, keeps the whole return working for you.

                ## Milestones
                1. Each holding identified as income or accumulation units.
                2. Automatic reinvestment switched on wherever the platform offers it.
                3. A quarterly check in place for any distribution that was not reinvested.
                4. Distributions recorded for tax purposes if held outside a tax-free account.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No distribution cash older than three months sits in the account, and each holding's unit type is recorded."
                cadence: rolling
              tasks:
                - "Check whether each holding is income or accumulation units"
                - "Switch on automatic dividend reinvestment where available"
                - "Check last quarter's distributions were reinvested @recurring(quarterly)"
                - "Note distribution amounts in the record sheet if held in a taxable account"
            - name: Fund notice and change watch
              description: |-
                ## Purpose
                Fund managers change things by letter: a new index, a cut or rise in charges, a merger into another fund, a share class closure. Most notices are harmless, but a few, such as a switch to a narrower index, change what you actually own, so reading them each month and logging anything material keeps the portfolio matching your plan.

                ## Milestones
                1. Platform and fund manager emails routed to one folder or label.
                2. Notices read monthly and logged in one line each.
                3. Any notice that changes the index, charge or fund structure checked against your plan.
                4. Material changes handed to their own project within the notice period.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-line log of every fund notice received, with any change to index, charge or structure acted on within its notice period."
                cadence: rolling
              tasks:
                - "Set up an email folder for platform and fund manager notices"
                - "Read and log any new fund notices @recurring(monthly:16)"
                - "Compare any change of index or charge against your scorecard"
                - "Open the closure and merger project for any notice that needs action"
            - name: Windfall and bonus investing rule
              description: |-
                ## Purpose
                Bonuses, tax refunds and gifts arrive irregularly and tend to vanish into spending or sit in a current account while you agonise over timing. Writing a rule now, such as a fixed share to the index plan within a week of arrival, means each windfall gets a decision without a debate.

                ## Milestones
                1. A written split for windfalls between index investing, cash goals and spending.
                2. A time limit for investing the index share after the money arrives.
                3. The rule added to your one-page plan.
                4. The rule applied to the next windfall and the result noted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A windfall rule with a fixed split and time limit is in your plan, and the next windfall has been handled under it."
                cadence: rolling
              tasks:
                - "Choose a split for windfalls between investing, saving and spending"
                - "Set a time limit for investing the index share"
                - "Add the windfall rule to your one-page plan"
                - "Apply the rule to the next bonus, refund or gift and note the outcome"
            - name: Market fall holding plan
              description: |-
                ## Purpose
                Falls of 20 percent or more in broad share indices have happened several times a decade, and the costly mistake is usually selling near the bottom or quietly stopping contributions. Writing down in advance what you will and will not do at minus 10, 20 and 40 percent, and who you will talk to before acting, makes holding through the next fall a matter of following instructions.

                ## Milestones
                1. Actions listed for falls of 10, 20 and 40 percent from the last peak.
                2. A rule that contributions continue unless your income changes.
                3. A named person to talk to before any sale during a fall.
                4. The plan saved beside the one-page index fund plan.

                ## Notes
                The plan is a commitment to yourself, not a forecast. Keep it short enough to read on a phone.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written market fall plan with actions at three drawdown levels and a named person to call, stored with your index fund plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write what you will do at falls of 10, 20 and 40 percent"
                - "State that the direct debit continues unless your income changes"
                - "Name one person you will talk to before selling in a fall"
                - "Reread the fall plan while markets are calm @recurring(yearly)"
            - name: Uninvested cash sweep on the platform
              description: |-
                ## Purpose
                Money left as cash inside an investment account often earns little or nothing while still attracting the platform fee. Leftover pennies from purchases, failed orders and stray distributions build up quietly, so a monthly look at the cash balance keeps the portfolio invested as planned.

                ## Milestones
                1. Current cash balance and any interest paid on it noted.
                2. A small cash floor agreed to cover platform fees.
                3. Cash above the floor invested each month.
                4. Six months with cash held at or below the floor.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Cash in the investment account has stayed at or below the agreed floor for six consecutive months."
                cadence: rolling
              tasks:
                - "Check the cash balance and any interest paid on it"
                - "Set a cash floor that covers the next platform fee"
                - "Put any cash above the floor into your planned funds @recurring(monthly:3)"
                - "Find out why cash built up if the floor keeps being exceeded"
            - name: How market-cap weighted indices are built
              description: |-
                ## Purpose
                Most index funds track an index that weights each company by its market value, so the largest companies drive most of the return and the index rebalances itself as prices move. Knowing how constituents are chosen, weighted and reviewed explains why index funds trade so little and why a handful of firms can make up a large slice of the fund.

                ## Milestones
                1. The rules of the index behind your main fund read in its methodology summary.
                2. Market-cap weighting explained in your own words in a paragraph.
                3. The number of companies in the index and its size cut-off noted.
                4. How often the index is reviewed and rebalanced recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-paragraph explanation of how your main fund's index selects and weights companies, with its review frequency noted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Download the methodology summary for the index your main fund tracks"
                - "Write a paragraph on how companies enter, leave and are weighted"
                - "Note how many companies the index holds and its smallest size cut-off"
                - "Record how often the index is reviewed"
            - name: History of index returns and drawdowns
              description: |-
                ## Purpose
                Expectations set by the last two or three years are a poor guide: broad share indices have had decades of strong returns and also stretches of ten years or more with little real gain. Studying the long record of a world or major market index, including its worst falls and how long recovery took, gives you realistic expectations before the next bad year arrives.

                ## Milestones
                1. The longest available return record for a broad index found.
                2. The three worst falls listed with their depth and time to recover.
                3. A realistic range of long-run real returns noted from published research, not forecasts.
                4. A short note added to your fall plan on what history suggests to expect.

                ## Notes
                Use published long-run data from index providers or academic yearbooks. Past returns are context, not a promise.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note listing the three deepest falls of a broad index with recovery times, added to your market fall plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find a long-run return series for a broad share index"
                - "List its three worst peak-to-trough falls and recovery times"
                - "Write down the range of long-run real returns from published research"
                - "Add the key lessons to your market fall plan"
            - name: Tracking difference and tracking error explained
              description: |-
                ## Purpose
                Tracking difference is how far a fund's return differs from its index over a period; tracking error is how much that gap wobbles. Understanding both, and why the ongoing charge alone does not tell the full story, makes the annual check meaningful and helps you read fund comparison tables properly.

                ## Milestones
                1. Both terms defined in your own words with an example.
                2. The causes of the gap listed, such as charges, cash drag, sampling and lending income.
                3. One of your funds' tracking difference worked out from published figures.
                4. A note on which measure matters more for a long-term holder.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written definitions of tracking difference and tracking error, plus one worked example from a fund you hold."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a definition of tracking difference and of tracking error"
                - "List the main reasons a fund can trail or beat its index"
                - "Work out one fund's tracking difference from its fact sheet"
                - "Note which measure you will use for the annual check"
            - name: Physical and synthetic replication
              description: |-
                ## Purpose
                Some index funds hold every share in the index, some hold a representative sample, and some use a swap with a bank to deliver the return. Each method carries different costs and risks, including counterparty exposure for swaps, and knowing which one your funds use is part of knowing what you own.

                ## Milestones
                1. Full replication, sampling and swap-based replication each explained in a sentence.
                2. The method used by each fund you hold noted from its documents.
                3. The collateral and counterparty arrangements of any swap-based fund read.
                4. A view recorded on which methods you are comfortable holding.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each fund you hold is labelled with its replication method, with your comfort level for swap-based funds recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read how full, sampled and swap-based replication work"
                - "Label each of your funds with its replication method"
                - "Read the counterparty and collateral section for any swap-based fund"
                - "Write down which methods you are comfortable holding"
            - name: Accumulation and income units explained
              description: |-
                ## Purpose
                Many index funds come in accumulation units, which reinvest dividends inside the price, and income units, which pay them out as cash. Picking the wrong type means either cash piling up or awkward tax records, so it is worth understanding before buying more of anything.

                ## Milestones
                1. The difference between accumulation and income units written down.
                2. How each is taxed in a taxable account noted from your tax authority's guidance.
                3. The right type chosen for each goal in your plan.
                4. Any mismatched holdings listed for change at a convenient point.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each goal in your plan has its unit type chosen, with any mismatched holdings listed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write how accumulation and income units each handle dividends"
                - "Look up how your tax authority treats reinvested dividends in a taxable account"
                - "Choose the unit type for each goal in your plan"
                - "List any holdings held in the wrong unit type"
            - name: Currency exposure and hedged share classes
              description: |-
                ## Purpose
                A global index fund bought in your home currency still holds companies priced in dollars, euros, yen and more, so currency moves add to or subtract from your returns. Hedged share classes remove most of that effect at a cost, and the trade-off plays out differently for share funds than for bond funds.

                ## Milestones
                1. The currency breakdown of your main fund found on its fact sheet.
                2. How hedging works and what it costs explained in a short note.
                3. A past year where currency moves changed returns noticeably identified.
                4. A recorded decision on hedged or unhedged share classes for each holding.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A note of your main fund's currency breakdown and a recorded hedged or unhedged decision for each holding."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the currency breakdown on your main fund's fact sheet"
                - "Read how currency hedging works and what it costs"
                - "Compare a hedged and an unhedged share class over five years"
                - "Record a hedged or unhedged choice for each holding"
            - name: Securities lending inside index funds
              description: |-
                ## Purpose
                Many index funds lend shares to other institutions for a fee, which can offset part of the ongoing charge but adds a small counterparty risk. Fund reports disclose how much is lent, the collateral held and how the income is split, and reading this once tells you whether you are comfortable with the practice.

                ## Milestones
                1. Whether each fund lends securities found in its report.
                2. The maximum and average share of the fund on loan noted.
                3. The split of lending income between fund and manager recorded.
                4. A one-line view on securities lending added to your scorecard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your scorecard shows, for each fund, whether it lends securities, the share on loan and the income split."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Search each fund's annual report for its securities lending section"
                - "Note the average and maximum share of the fund on loan"
                - "Record how lending income is split between fund and manager"
                - "Add a securities lending line to your fund scorecard"
            - name: Index investing reading list
              description: |-
                ## Purpose
                A few well-chosen books and long articles on passive investing do more for staying the course than any amount of market news. Working through a short list, from the classic case for indexing to the history of fund costs and investor behaviour, builds the conviction that keeps contributions going when headlines are loud.

                ## Milestones
                1. A reading list of five to eight books or long articles on index investing.
                2. At least three items finished with a short note on each.
                3. One idea from the reading added to your one-page plan.
                4. Market price alerts reduced to the ones you actually use.

                ## Notes
                Start from the **Reading queue** template. Favour authors who explain costs and behaviour over those who predict markets.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least three items from an index investing reading list finished, each with a short written note."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Build a list of five to eight books or articles on index investing"
                - "Read for one session and write a short note @recurring(monthly:12)"
                - "Add one idea from your reading to your one-page plan"
                - "Turn off market price alerts you never act on"
            - name: All-in-one fund versus a multi-fund build
              description: |-
                ## Purpose
                Some providers offer a single fund that holds a global share index and bonds in a fixed mix and rebalances itself, while others prefer building the same exposure from two to four separate index funds. One fund is simpler and harder to tinker with; separate funds can be cheaper and more flexible, so the choice is really about cost and your own temperament.

                ## Milestones
                1. Two or three all-in-one funds and an equivalent multi-fund build listed.
                2. Total yearly cost of each approach worked out at your balance.
                3. Your honest likelihood of tinkering with separate funds noted.
                4. One approach chosen and written into the plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between an all-in-one fund and a multi-fund build, with yearly costs of both compared at your balance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List two all-in-one funds and an equivalent set of separate index funds"
                - "Compare their combined yearly costs at your balance"
                - "Note how often you have been tempted to adjust a portfolio"
                - "Write the chosen approach into your one-page plan"
            - name: Lump sum versus phased investing of a large sum
              description: |-
                ## Purpose
                An inheritance, house sale or matured savings account raises the question of investing it all at once or in instalments. Published studies suggest lump sums have more often come out ahead because markets rise more often than they fall, but phasing reduces regret if a fall comes soon after, so the decision deserves a written rule rather than a nervous guess.

                ## Milestones
                1. The amount, its source and its time horizon written down.
                2. The trade-off between lump sum and phasing summarised from published research.
                3. A schedule chosen: all at once, or a fixed number of monthly instalments.
                4. The schedule set up so it runs without further decisions.

                ## Notes
                If the sum is large relative to everything else you own, a session with a regulated adviser before investing is money well spent.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written schedule for investing the lump sum, either in one go or over a fixed number of months, set up on the platform."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the sum, its source and when you might need it"
                - "Read a summary of research on lump sum versus phased investing"
                - "Choose a schedule and the date of the final instalment"
                - "Set up the instalments as scheduled purchases"
            - name: Home market weighting decision
              description: |-
                ## Purpose
                Your home market makes up only its own share of world value in a global index, which for most countries is a few percent. Some investors deliberately hold more for currency or familiarity reasons while others keep pure global weights, and deciding explicitly stops the mix drifting by accident as you add funds.

                ## Milestones
                1. Your home market's weight in a global index noted.
                2. Reasons for and against holding more than that weight listed.
                3. A home weighting decided as a percentage of your share funds.
                4. The decision and the funds needed written into your plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target home-market percentage for the share portion of the portfolio is written in the plan with the reasons."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your home market's weight in a global index"
                - "List reasons for and against holding more than that weight"
                - "Decide a home weighting as a percentage of your share funds"
                - "Note which funds deliver that weighting"
            - name: World index versus single-market index choice
              description: |-
                ## Purpose
                Recent strong returns from one market tempt many people to hold only that country's index, such as a large US index, instead of a world index. Comparing the two on number of companies, country concentration and the long periods when each one led makes the choice deliberate rather than a reaction to the last decade.

                ## Milestones
                1. Number of holdings, top ten weight and country split compared for both indices.
                2. Periods when the single market lagged the world noted from history.
                3. A choice made between world, single market or a stated mix.
                4. The choice recorded with its reason.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between a world index, a single-market index or a mix, with holdings and country split of both compared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare holdings count and country split of a world and a single-market index"
                - "Find past decades when the single market trailed the world"
                - "Choose between world, single market or a stated mix"
                - "Record the choice and reasoning in your plan"
            - name: Replacing an old active fund with a tracker
              description: |-
                ## Purpose
                Plenty of people hold an actively managed fund chosen years ago by a bank or adviser, often with charges several times those of a tracker. Comparing its ten-year record after fees with a matching index, and checking any exit charges or tax on selling, shows whether switching makes sense and how quickly.

                ## Milestones
                1. The active fund's charges and ten-year return after fees found.
                2. A tracker of the matching market identified for comparison.
                3. Exit charges and any tax on selling worked out.
                4. A decision recorded to keep, switch gradually or switch now.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written keep or switch decision on the old active fund, based on ten-year net returns against a matching tracker and the cost of moving."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the active fund's ongoing charge and ten-year return"
                - "Pick a tracker of the matching market for comparison"
                - "Check exit charges and any tax due if you sell"
                - "Record whether you will keep, phase out or switch"
            - name: Fund overlap check across your holdings
              description: |-
                ## Purpose
                Holding a world fund, a US fund and a technology tracker can mean owning the same large companies three times without noticing. An overlap check shows your real exposure to individual companies and countries, so the portfolio is as diversified as you think it is.

                ## Milestones
                1. Top holdings of every fund listed side by side.
                2. Combined exposure to the ten largest companies calculated.
                3. Country weights across all holdings combined.
                4. Any fund that adds little beyond another marked for removal.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A combined view of your top ten company and country exposures across all funds, with any redundant fund marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the top ten holdings of each fund side by side"
                - "Add up your combined weight in the ten largest companies"
                - "Combine the country weights of all your funds"
                - "Rerun the overlap check across all holdings @recurring(yearly)"
            - name: Small fund closure risk review
              description: |-
                ## Purpose
                Index funds and ETFs below a certain size can be closed or merged by their managers, forcing a sale at a time you did not choose and possibly a tax bill outside a tax-free account. Checking the size, age and provider of each fund you hold shows whether any is genuinely at risk and whether a larger tracker of the same index exists.

                ## Milestones
                1. Fund size and launch date recorded for every holding.
                2. Any fund under a size threshold you set flagged.
                3. A larger tracker of the same index identified for each flagged fund.
                4. A decision made to hold or move each flagged fund.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every holding has its size and launch date recorded, with a hold or move decision for any fund below your threshold."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the fund size and launch date of every holding"
                - "Set a size threshold below which you will look harder"
                - "Find a larger tracker of the same index for any fund below it"
                - "Decide whether to hold or move each flagged fund"
            - name: Moving index holdings to a new platform
              description: |-
                ## Purpose
                Moving to a cheaper or better platform can be done by selling and sending cash, which leaves you out of the market for days or weeks, or by transferring the fund units themselves. Planning an in-specie transfer, checking the new platform offers the same share classes and keeping cost records intact avoids gaps and surprise charges.

                ## Milestones
                1. Exit fees at the old platform and transfer support at the new one confirmed.
                2. Every fund confirmed as available on the new platform in the same share class.
                3. Transfer requested through the new platform with the old account details.
                4. All units and cost records confirmed in the new account.

                ## Notes
                Start from the **Operational checklist** template. Ask whether the new platform will refund exit fees; many do.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every index fund unit has arrived at the new platform with its original cost records, and the old account is closed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the old platform for its exit and transfer fees in writing"
                - "Check every fund is offered on the new platform in the same share class"
                - "Request an in-specie transfer through the new platform"
                - "Download all statements from the old platform before it closes"
                - "Confirm unit numbers and cost records match after the move"
            - name: Handling a tracker closure or merger notice
              description: |-
                ## Purpose
                Fund managers sometimes announce that a tracker is closing, merging or changing its index, usually giving a few weeks before they decide for you. Working through the notice as a short project, checking what happens by default and whether a sale would trigger tax, means the change happens on your terms.

                ## Milestones
                1. The notice read, with the effective date and default outcome noted.
                2. Tax consequences of the default outcome checked for any taxable account.
                3. A replacement fund chosen from your scorecard if needed.
                4. Action taken before the effective date and the new holding confirmed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The fund change was acted on before its effective date, with the replacement holding and any tax note recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the effective date and what happens if you do nothing"
                - "Check whether the default outcome counts as a sale for tax"
                - "Choose a replacement tracker using your scorecard if needed"
                - "Confirm the new holding once the change completes"
            - name: First full year of index investing review
              description: |-
                ## Purpose
                Twelve months in, you have real evidence on whether the contribution was affordable, whether the automation worked and how you felt during the worst month. A dated review turns that experience into adjustments for year two, instead of drifting along on assumptions made before you started.

                ## Milestones
                1. Contributions made versus planned for the year counted.
                2. Any missed months and their causes listed.
                3. Your reaction to the year's biggest fall described honestly.
                4. Two or three changes for year two written into the plan.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dated first-year review comparing planned and actual contributions, with at least two changes written into the plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the contributions made against the twelve planned"
                - "List any missed months and why they were missed"
                - "Write how you felt and acted in the year's worst month"
                - "Add two or three changes to your plan for year two"
            - name: Debrief after your first big market fall
              description: |-
                ## Purpose
                The first time a portfolio drops by a fifth or more is the real test of any index plan. A short debrief once the worst has passed, recording what you did, what you were tempted to do and whether the fall plan helped, makes the next one easier to sit through.

                ## Milestones
                1. The size and duration of the fall recorded from your record sheet.
                2. Actions taken during the fall listed, including any not in the plan.
                3. Temptations and the sources that drove them noted.
                4. The market fall plan updated with what you learned.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A written debrief of the first fall of 20 percent or more, with the market fall plan updated in light of it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record the peak value, lowest value and dates from your sheet"
                - "List what you did during the fall, including anything off plan"
                - "Note which news or people made you want to sell"
                - "Update the market fall plan with what you learned"
            - name: Five-year index portfolio retrospective
              description: |-
                ## Purpose
                Five years is long enough to judge an index plan on what matters: contributions kept, costs paid and behaviour in bad patches, rather than any single year's return. A retrospective at the five-year mark checks the plan still fits your goals and resets it for the next stretch.

                ## Milestones
                1. Total paid in, current value and annualised return calculated.
                2. Total platform and fund costs over five years added up.
                3. The record of paused or missed contributions reviewed.
                4. Goals, funds and monthly amount confirmed or reset for the next five years.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A five-year retrospective records money paid in, value, annualised return and total costs, with the plan confirmed or reset."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate total paid in, current value and annualised return"
                - "Add up five years of platform and fund costs"
                - "Review the record of paused or missed contributions"
                - "Confirm or reset goals, funds and monthly amount for the next five years"
            - name: Restarting contributions after a pause
              description: |-
                ## Purpose
                Redundancy, parental leave or a large unexpected bill can mean stopping contributions for a while, and the risk is that the pause becomes permanent. Planning the restart, at what amount and from which month, gets the direct debit running again as soon as money allows.

                ## Milestones
                1. The reason for the pause and its expected length noted.
                2. A restart month and restart amount agreed.
                3. The direct debit and investment instruction reinstated.
                4. Contributions back to the planned amount within an agreed number of months.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Contributions restarted in the agreed month and returned to the planned amount within the agreed time."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down why contributions paused and for roughly how long"
                - "Choose a restart month and a starting amount"
                - "Reinstate the direct debit and investment instruction"
                - "Step the amount back up to the planned level"
            - name: Starting index investing with a small monthly amount
              description: |-
                ## Purpose
                Someone starting with 25 or 50 a month, often in their twenties, gains most from time in the market and from avoiding fees that are large relative to a small balance. Choosing a platform and fund that suit tiny amounts, then raising the contribution with each pay rise, builds the habit while sums are low and mistakes are cheap.

                ## Milestones
                1. A platform chosen with low minimums and no flat fee that swamps a small balance.
                2. One broad index fund chosen to keep things simple.
                3. A monthly amount you will not miss set up as a direct debit.
                4. A rule written to increase the amount with each pay rise.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A monthly direct debit of any size runs into one broad index fund on a platform whose fees are under 1 percent a year at your balance."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find platforms with low minimums and percentage fees for small balances"
                - "Pick one broad global index fund to start with"
                - "Set up a monthly direct debit at an amount you will not miss"
                - "Raise the amount by a small step each birthday @recurring(yearly)"
            - name: Starting index investing later in life
              description: |-
                ## Purpose
                Beginning in your fifties or sixties means a shorter horizon, often larger sums and pensions already in place, so the share index portion has to fit around when you will draw on each pot. Mapping existing pensions and savings first, and investing only money that will stay put for many years, keeps a late start from ending in a forced sale during a downturn.

                ## Milestones
                1. Existing pensions, savings and their access dates listed.
                2. Money needed in the first ten years of retirement kept out of share index funds.
                3. A long-term index amount and monthly contribution agreed.
                4. A session with a regulated adviser or guidance service booked if pension money is involved.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split of savings between near-term needs and a long-term index portion, with the index portion invested or scheduled."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each pension and savings pot with the date you can access it"
                - "Mark the money you expect to spend in the first ten years of retirement"
                - "Decide the long-term portion that can go into index funds"
                - "Book a guidance or advice session if pension money is involved"
            - name: Index investing as a couple
              description: |-
                ## Purpose
                Partners often hold different funds on different platforms with different ideas about risk, which makes the household picture hard to see. Agreeing a shared view of both sets of index holdings, who contributes what and which funds each account holds keeps the overall mix sensible without forcing identical accounts.

                ## Milestones
                1. Both partners' index holdings listed in one shared sheet.
                2. A combined fund mix agreed for the household.
                3. Contributions from each partner agreed and written down.
                4. A shared quarterly look at the combined holdings scheduled.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared sheet shows both partners' index holdings and agreed contributions, reviewed together at least quarterly."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List both partners' index holdings in one shared sheet"
                - "Agree a combined fund mix for the household"
                - "Write down who contributes how much each month"
                - "Review the combined holdings together @recurring(quarterly)"
            - name: Index contributions on irregular self-employed income
              description: |-
                ## Purpose
                When income swings from month to month, a fixed direct debit either undershoots in good months or causes overdrafts in lean ones. Investing a set percentage of what actually came in, after the tax set-aside, keeps contributions proportional and automatic enough to survive a quiet quarter.

                ## Milestones
                1. A contribution percentage agreed for every payment received.
                2. A tax set-aside taken first so investing never eats into the tax bill.
                3. A minimum floor contribution set for lean months.
                4. Contributions made for six consecutive months under the rule.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Contributions follow a written percentage rule with a floor, and have been made for six consecutive months."
                cadence: rolling
              tasks:
                - "Choose the percentage of each payment received to invest"
                - "Set the tax set-aside to come out before the investment share"
                - "Set a minimum contribution for lean months"
                - "Transfer the agreed percentage of last month's income @recurring(monthly:6)"
            - name: Index fund handover notes for a partner or executor
              description: |-
                ## Purpose
                If you run the index portfolio alone, a partner or executor may not know which platform it is on, how to reach it or what not to do in a hurry. A short handover note kept with your will papers means someone else can hold the plan steady or wind it up cleanly.

                ## Milestones
                1. Platform names, account numbers and fund list written in one document.
                2. Instructions on what to leave running and what not to sell in a panic.
                3. The document stored with your will or estate papers, without passwords.
                4. The person who would use it told where it is.

                ## Notes
                Never write passwords in the note. Point to your password manager's emergency access feature instead.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A dated handover note listing platforms, accounts and funds is stored with your estate papers and the named person knows where it is."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each platform, account number and fund held"
                - "Write plain instructions on what to keep running and what to avoid"
                - "Store the note with your will papers without any passwords"
                - "Update the handover note with any account changes @recurring(yearly)"
            - name: Factor and small-cap tilt evaluation
              description: |-
                ## Purpose
                Experienced index investors sometimes add funds that tilt towards smaller companies, value or other factors that research has linked to higher long-run returns. These tilts can lag the market for a decade or more and usually cost more, so weighing the evidence, the costs and your own patience before adding one matters more than the fund choice.

                ## Milestones
                1. The factor or tilt being considered described with its published evidence.
                2. Long periods when the tilt lagged the broad market identified.
                3. Extra cost of a tilt fund compared with your core tracker.
                4. A decision recorded, with a cap on the tilt's share if adopted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written evaluation of one factor or small-cap tilt, including its worst lagging period and extra cost, ending in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose one factor or tilt and find two published studies on it"
                - "Identify the longest period it trailed the broad market"
                - "Compare a tilt fund's charges with your core tracker"
                - "Record your decision and any cap on its share of the portfolio"
            - name: Comparing index rulebooks between providers
              description: |-
                ## Purpose
                Indices that look alike, such as two world or emerging market indices from different providers, can differ in which countries count as developed, how small the smallest company is and how often they rebalance. Comparing the rulebooks behind the funds you hold explains differences in returns and matters whenever you switch between trackers.

                ## Milestones
                1. Two comparable indices from different providers chosen.
                2. Country classification, size coverage and review frequency compared.
                3. Differences in recent returns linked to specific rule differences.
                4. A note added to your scorecard on which rulebook you prefer and why.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A side-by-side comparison of two providers' index rules on country, size and review frequency, linked to their recent return gap."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick two comparable indices from different providers"
                - "Compare their country classification and size coverage rules"
                - "Compare how often each index is reviewed and rebalanced"
                - "Explain their recent return gap using the rule differences"
            - name: Fund domicile and withholding tax review
              description: |-
                ## Purpose
                Where an index fund is legally based affects how much foreign dividend tax is lost before it reaches you, and some domiciles create reporting or estate complications for certain nationalities. Reviewing each fund's domicile against your residency, with professional input where the rules are unclear, avoids a quiet drag on returns or a filing problem years later.

                ## Milestones
                1. Domicile of every fund recorded from its documents.
                2. Withholding tax treatment for your residency summarised from official or provider guidance.
                3. Any special reporting status or estate issues for your nationality noted.
                4. Questions for a tax professional written down where the answer is unclear.

                ## Notes
                This is a common trap for people who are tax-resident in one country and citizens of another. Get professional advice before selling anything because of it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every fund's domicile is recorded with the withholding tax and reporting points for your residency, plus a list of open questions for a tax professional."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record the domicile of every fund you hold"
                - "Summarise how dividend withholding tax applies to each domicile"
                - "Check whether any fund needs special tax reporting where you live"
                - "Write questions for a tax professional on anything unclear"
            - name: Concentration review of the largest index holdings
              description: |-
                ## Purpose
                In a market-cap index the largest few companies can make up a quarter or more of a market, so a supposedly diversified fund may lean heavily on one sector. Reviewing how concentrated your funds have become, and deciding in advance whether you will do anything about it, stops you reacting to headlines about a bubble.

                ## Milestones
                1. Weight of the top ten companies and largest sector recorded for each fund.
                2. Concentration compared with ten years ago from old index fact sheets.
                3. Options for reducing concentration listed with their costs and trade-offs.
                4. A decision recorded to accept the concentration or act, with a trigger level.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Top ten and largest sector weights for each fund are recorded each year, with a written stance and trigger level on concentration."
                cadence: cyclic
              tasks:
                - "Record the top ten and largest sector weight for each fund"
                - "Find the same figures from an index fact sheet ten years ago"
                - "List options such as equal weight funds with their trade-offs"
                - "Revisit the concentration figures and your stance @recurring(yearly)"
---

# Index Fund Investing

Index fund investing is the plain, cheap way to own a slice of the whole market, and this area is for anyone who wants to start or tidy up a portfolio of trackers without turning into a hobby trader. It begins with the foundations (readiness, goals, a sustainable monthly amount, platform and fund choice, the first purchase and automation), then the routines that keep contributions flowing, what is worth learning about how index funds actually work, the decisions best made once, dated milestones such as a platform transfer or a first-year review, variants for small budgets, late starters, couples and the self-employed, and finally specialist questions such as factor tilts, index rulebooks and fund domicile.

The rhythm is deliberately light: a monthly check that contributions were invested, a monthly sweep of stray cash and paperwork, a quarterly look at the portfolio, and yearly jobs such as the contribution step-up, the tracking difference check and a reread of your plan. The Purchase decision, Metrics log, Reading queue and Operational checklist templates pair with the platform choice, the holdings record, the reading list and the platform transfer. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
