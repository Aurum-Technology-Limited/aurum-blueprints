---
id: wealth-investing.investment-fee-reduction
name: Investment Fee Reduction
description: "Every platform, fund, adviser and dealing charge you pay, found and added up in money terms, with the switches, renegotiations and yearly checks that keep total costs low."
category: personal
version: 1.0.0
tags: [wealth-investing, investment-fee-reduction, everyone, fees, platform-charges, fund-costs, adviser-fees]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - operational-checklist
    - meeting-notes
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Investment Fee Reduction
          description: "Finding and cutting platform fees, fund charges and adviser costs that quietly erode long-term returns."
          projects:
            - name: Inventory of every account that charges a fee
              description: |-
                ## Purpose
                Most households hold investments in more places than they can name from memory: an old workplace pension, a tax-free savings wrapper on one platform, a general account on another, perhaps an insurance bond from years ago. Listing every account with its provider, wrapper type and approximate value is the starting point for every later fee decision, because you cannot cut a charge you do not know you are paying.

                ## Milestones
                1. A single list of every investment and pension account, with provider, wrapper type and account number.
                2. An approximate current value written beside each account.
                3. Each account marked as advised, managed or self-directed.
                4. Login details or the latest paper statement located for every entry.

                ## Notes
                Include accounts you think are tiny or dormant. Small forgotten pots often carry the highest percentage charges.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of every investment and pension account in the household, each with provider, wrapper, value and access route."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every investment and pension account you can remember in ten minutes"
                - "Search your email and files for statements from providers not on the list"
                - "Add the provider, wrapper type and latest value for each account"
                - "Mark each account as advised, managed or self-directed"
            - name: Annual costs and charges statements gathered
              description: |-
                ## Purpose
                In many countries, regulated providers must send a yearly statement showing what you paid in money terms, split between platform, fund and adviser costs. These statements are often buried in a secure inbox or sent as a PDF nobody opens, yet they hold the single most reliable figure for what your investments cost. Collecting the latest one for every account turns guesswork into a number.

                ## Milestones
                1. The most recent costs and charges statement downloaded or requested for every account on the inventory.
                2. Accounts whose provider does not issue one identified, with a written request sent.
                3. Each statement saved in one folder named by provider and year.
                4. The total cost in money terms copied from each statement into one list.

                ## Notes
                Names vary: costs and charges disclosure, fee disclosure, annual expense summary. If a provider will not supply one, ask in writing for every charge taken in the last twelve months.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A costs statement, or a written breakdown from the provider, is saved for every account, with each yearly total in money terms listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check each provider's secure inbox for the latest annual costs statement"
                - "Email providers that do not publish one and ask for a twelve-month charge breakdown"
                - "Save every statement in one folder named by provider and year"
                - "Copy each account's total cost in money terms into a single list"
            - name: Ongoing charge lookup for every fund held
              description: |-
                ## Purpose
                Fund charges are taken inside the price, so they never show as a line on your statement and are easy to forget entirely. Finding the ongoing charge figure or expense ratio for each fund you own, from its latest factsheet or key information document, shows which holdings cost ten times more than others doing a similar job.

                ## Milestones
                1. Every fund and ETF held listed with its exact share class identifier.
                2. The ongoing charge or expense ratio for each recorded from the latest official document.
                3. Any performance fee or entry charge noted separately.
                4. The three most expensive holdings, by percentage, marked for a closer look.

                ## Notes
                Check the share class, not just the fund name. The same fund can have several classes with very different charges.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every fund held has its share class identifier and current ongoing charge recorded, with the three most expensive holdings marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each fund and ETF with its share class code from your holdings pages"
                - "Download the latest factsheet or key information document for each one"
                - "Record the ongoing charge and any performance fee beside each holding"
                - "Mark the three most expensive holdings for later review"
            - name: All-in yearly cost in money terms
              description: |-
                ## Purpose
                A platform fee of 0.35 percent, a fund charge of 0.8 percent and adviser fees of 0.75 percent sound modest separately, but together on a 200,000 portfolio they cost about 3,800 a year. Adding every layer into a single yearly figure in your own currency, and as a percentage of the total, is the number that makes cost reduction feel worth the effort.

                ## Milestones
                1. Platform, fund, adviser and dealing costs added up for each account.
                2. A household total in money terms for the last twelve months.
                3. The total expressed as a percentage of the combined portfolio value.
                4. The figure checked against the annual costs statements for any gap.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One household figure for total investment costs over the last twelve months, in money and as a percentage, reconciled with the providers' statements."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add platform, fund, adviser and dealing costs for each account"
                - "Sum the accounts into one household yearly cost"
                - "Divide the total by the portfolio value to get the all-in percentage"
                - "Investigate any account where your figure and the statement differ by more than a tenth"
            - name: Twenty-year fee drag projection
              description: |-
                ## Purpose
                Over twenty years, a one percent yearly difference in costs can take a fifth or more off a portfolio's value over twenty years, because the fee is charged on the growth as well as the original money. Running your own numbers through a simple compound calculation shows what your current costs will take from you, which makes the case for change concrete rather than theoretical.

                ## Milestones
                1. A projection of your portfolio over twenty years at your current all-in cost, using a cautious return assumption.
                2. The same projection at a cost one half lower.
                3. The difference between the two written as a single money figure.
                4. The projection saved beside your fee ledger for future comparison.

                ## Notes
                Use the same return assumption in both runs. The point is the gap caused by fees, not a forecast of returns.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A twenty-year projection comparing current costs with a lower-cost version, with the money difference recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a cautious yearly return assumption and write it down"
                - "Project your portfolio for twenty years at your current all-in cost"
                - "Run the same projection at half your current cost"
                - "Write the difference as one money figure at the top of your fee ledger"
            - name: Personal ceiling for total investment costs
              description: |-
                ## Purpose
                Without a target, every fee looks reasonable on its own. Setting a ceiling for your all-in yearly cost, as a percentage, and a separate one for any single fund gives you a rule for every future platform, fund or adviser decision, and makes it obvious which parts of the portfolio are over budget.

                ## Milestones
                1. An all-in cost ceiling chosen, with the reasoning in one sentence.
                2. A per-fund ceiling for the main asset classes you hold.
                3. Every current holding marked as under or over its ceiling.
                4. The ceilings written into your fee ledger or investment policy.

                ## Notes
                A ceiling is a personal rule, not advice. If you use an adviser, agree it with them so it is reflected in their recommendations.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written all-in and per-fund cost ceilings, with every holding marked as within or above them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose an all-in yearly cost ceiling and note why you chose it"
                - "Set a per-fund ceiling for each asset class you hold"
                - "Mark every holding as within or above its ceiling"
                - "Revisit both ceilings against current market prices @recurring(yearly)"
            - name: Household fee ledger
              description: |-
                ## Purpose
                Fees change quietly: a platform adds a tier, a fund cuts its charge, an adviser moves to a new schedule. A ledger with one row per account per year, holding the money cost and the percentage, shows the trend and gives you the history needed for any complaint or negotiation.

                ## Milestones
                1. A ledger with columns for year, account, platform cost, fund cost, adviser cost, dealing cost and total.
                2. The last twelve months entered from the costs statements.
                3. A household total row with the all-in percentage.
                4. A second year added, showing whether costs went up or down.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fee ledger holding at least two years of per-account costs with a household total for each year."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a fee ledger from the metrics log template"
                - "Add one row per account for the last twelve months"
                - "Add a household total row with the all-in percentage"
                - "Enter the new year's figures when the costs statements arrive @recurring(yearly)"
            - name: Exit fee and penalty check on every product
              description: |-
                ## Purpose
                Some older pensions, insurance bonds and with-profits policies charge exit penalties, and some carry guarantees or protected rights worth far more than any fee saving. Checking every account for exit charges, early surrender penalties and valuable features before moving anything stops a fee cut from becoming an expensive mistake.

                ## Milestones
                1. Every account asked in writing about exit charges, surrender penalties and transfer fees.
                2. Any guaranteed annuity rate, protected tax-free amount or bonus noted.
                3. Each account marked as free to move, costly to move or not to be moved without advice.
                4. The replies saved with your costs statements.

                ## Notes
                Treat any guarantee as a reason to take regulated advice before switching. A low fee rarely makes up for losing a guaranteed income rate.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written reply on exit charges and guarantees from every provider, with each account classed as free, costly or protected."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft one short letter asking about exit charges, penalties and guarantees"
                - "Send the letter to every provider on your inventory"
                - "Mark each account as free to move, costly to move or protected"
                - "Save each reply in the costs folder"
            - name: Dealing, currency and spread costs from last year
              description: |-
                ## Purpose
                Trading costs are easy to miss because they arrive one transaction at a time: a dealing charge here, a currency conversion margin there, the gap between buying and selling prices on a thinly traded share. Adding up last year's trades shows whether these costs are trivial or a hidden second fee.

                ## Milestones
                1. Every buy and sell from the last twelve months listed from contract notes.
                2. Dealing charges, stamp duty or transaction taxes and currency fees totalled.
                3. Trading costs expressed as a percentage of the portfolio.
                4. The single most expensive type of trade identified.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A total of last year's dealing, tax and currency costs, as money and a percentage, with the costliest trade type named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export or download last year's contract notes from each platform"
                - "Total dealing charges, transaction taxes and currency fees"
                - "Express the total as a percentage of your portfolio"
                - "Name the type of trade that cost the most"
            - name: Monthly charge check on statements
              description: |-
                ## Purpose
                Platforms usually take their fee monthly or quarterly from cash in the account, and mistakes do happen: a fee charged twice, a tier applied wrongly, a cash shortfall that forces a fund sale to cover the bill. A two-minute monthly glance at the charges line catches errors while they are small and easy to reverse.

                ## Milestones
                1. The charges line on each statement located and understood.
                2. A two-minute check done each month for six months.
                3. Enough cash kept in each account to cover fees without forced sales.
                4. Any unexpected charge queried in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly checks of the charges line on each account, with any unexpected charge queried."
                cadence: rolling
              tasks:
                - "Find where each platform shows the fees it has taken"
                - "Check the month's charges against the expected amount @recurring(monthly:11)"
                - "Top up the cash balance if the next fee would force a sale"
                - "Query any charge that does not match the published schedule"
            - name: Platform cash interest margin check
              description: |-
                ## Purpose
                Cash sitting on an investment platform often earns well below the rate the platform itself receives, and the difference is a fee that never appears on the charges schedule. Checking the rate paid each quarter, and how much cash is sitting idle, shows whether to move surplus cash or invest it as planned.

                ## Milestones
                1. The interest rate paid on cash in each account recorded.
                2. The rate compared with a good easy-access savings rate.
                3. Idle cash beyond the fee buffer identified each quarter.
                4. Surplus cash either invested to plan or moved to a better-paying home.

                ## Notes
                Some platforms offer a separate cash fund or money market option inside the account. Compare its charge with the interest gap before using it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly checks in a year, each recording the cash rate, the idle balance and what was done with any surplus."
                cadence: rolling
              tasks:
                - "Look up the interest rate paid on cash in each account"
                - "Compare cash rates and idle balances with a good savings rate @recurring(quarterly)"
                - "Decide whether surplus cash should be invested or moved"
            - name: Yearly costs statement review
              description: |-
                ## Purpose
                Once the first year's statements are gathered, the job becomes a yearly read when the new ones arrive. Comparing each statement with last year's, and with what you expected, shows creeping costs, fees for services no longer used and any charge that has grown faster than the portfolio.

                ## Milestones
                1. Each new costs statement read within a month of arriving.
                2. This year's cost compared with last year's for every account.
                3. Any account whose cost grew faster than its value flagged.
                4. Two consecutive yearly reviews recorded in the ledger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive yearly reviews completed, each comparing every account's costs with the previous year."
                cadence: cyclic
              tasks:
                - "Note the month each provider usually sends its costs statement"
                - "Read every new statement and compare it with last year @recurring(yearly)"
                - "Flag any account whose cost rose faster than its value"
            - name: Provider fee change notice log
              description: |-
                ## Purpose
                Fee increases are usually announced by an email with a bland subject line or a notice in a secure inbox, often with thirty to ninety days before they apply. Keeping a short log of every notice, with the date it takes effect, gives you time to act, and makes it obvious when a provider has raised prices twice in two years.

                ## Milestones
                1. A single place to record fee change notices, with provider, change and effective date.
                2. Secure inboxes and email checked monthly for notices.
                3. Each notice assessed for its yearly effect in money terms.
                4. A decision recorded for every increase: accept, negotiate or move.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A notice log covering twelve months, with every fee change costed and a decision recorded for each increase."
                cadence: rolling
              tasks:
                - "Set up a short log for fee change notices"
                - "Check secure inboxes and email for pricing notices @recurring(monthly:19)"
                - "Work out the yearly money effect of each change"
                - "Record whether you will accept, negotiate or move"
            - name: Batching purchases to cut dealing charges
              description: |-
                ## Purpose
                On platforms that charge per trade, ten small ad hoc purchases can cost more than the fund charge itself. Using the platform's regular investing service, which often deals for free or at a low flat charge on a set date, and saving lump sums for a single monthly purchase cuts dealing costs without changing what you own.

                ## Milestones
                1. The dealing charge for online, phone and regular investing trades on each platform noted.
                2. Regular purchases moved onto the platform's scheduled investing service where it is cheaper.
                3. Ad hoc purchases limited to one batched trade a month.
                4. Dealing costs for the next six months compared with last year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of purchases made through the cheapest dealing route, with dealing costs lower than the same period last year."
                cadence: rolling
              tasks:
                - "Look up the charge for each dealing method on your platforms"
                - "Move regular purchases onto the scheduled investing service if cheaper"
                - "Place any extra purchases as one batched trade @recurring(monthly:4)"
                - "Compare six months of dealing costs with last year"
            - name: Yearly fee benchmark against the market
              description: |-
                ## Purpose
                Prices fall and new providers arrive, so a platform that was cheap five years ago may now sit in the expensive half of the market. Once a year, pricing your exact portfolio on two or three alternative platforms using their public calculators tells you whether staying put is still a good deal.

                ## Milestones
                1. Two or three alternative platforms chosen for comparison each year.
                2. Your exact holdings and trading pattern priced on each.
                3. The yearly money difference against your current platform written down.
                4. A switch shortlist created only when the saving passes your threshold.

                ## Notes
                Set a switching threshold in advance, for example a saving of a set amount a year, so you do not move for trivial differences.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly comparison of your portfolio's cost on at least two alternative platforms, with the money difference recorded."
                cadence: cyclic
              tasks:
                - "Write down a yearly saving below which you will not switch"
                - "Price your holdings on two alternative platforms @recurring(yearly)"
                - "Record the money difference against your current platform"
            - name: Adviser value-for-fee scorecard
              description: |-
                ## Purpose
                Ongoing advice fees are often the largest single cost in a portfolio, and they are only worth paying if the service is actually delivered. Scoring each year against what was promised, such as an annual review held, a written report, tax planning done and calls answered, gives you evidence for a renegotiation or a calm decision to stay.

                ## Milestones
                1. The services promised in the adviser's client agreement listed.
                2. Each year's delivery scored against that list.
                3. The yearly adviser fee in money terms written beside the score.
                4. A decision recorded: keep, renegotiate or move to a cheaper service model.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A scorecard completed for the last twelve months, comparing services promised with services received and the fee paid."
                cadence: cyclic
              tasks:
                - "Find the client agreement and list the services it promises"
                - "Score the year's service against the promised list @recurring(yearly)"
                - "Write the money cost of advice beside the score"
                - "Record whether you will keep, renegotiate or change the arrangement"
            - name: Fund charge creep check
              description: |-
                ## Purpose
                Fund managers change charges more often than people realise, sometimes down, occasionally up, and sometimes by closing a cheap share class and moving you to a dearer one. A quarterly scan of the latest factsheets against your recorded charges catches both kinds of change.

                ## Milestones
                1. Your recorded ongoing charges kept in the fee ledger.
                2. Latest factsheets checked each quarter for changes.
                3. Any increase or share class change noted with its date.
                4. Each increase above your per-fund ceiling sent for review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly factsheet checks in a year, with every charge change recorded and any breach of your ceiling acted on."
                cadence: rolling
              tasks:
                - "Bookmark the factsheet page for each fund you hold"
                - "Compare the latest ongoing charges with your recorded figures @recurring(quarterly)"
                - "Send any fund above its ceiling to the cost case review"
            - name: Unused premium features and paid tier audit
              description: |-
                ## Purpose
                Some platforms and apps sell premium tiers with research, model portfolios, real-time prices or extra accounts, and the subscription keeps running long after the features stop being used. A yearly look at what you pay for beyond the basic service, and what you actually used, removes costs that do nothing for returns.

                ## Milestones
                1. Every paid subscription, tier upgrade or add-on linked to your investing listed.
                2. Use in the last twelve months noted for each.
                3. Unused services cancelled or downgraded.
                4. The yearly saving added to the fee ledger.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every paid investing subscription or tier reviewed in the last year, with unused ones cancelled and the saving recorded."
                cadence: cyclic
              tasks:
                - "Search bank statements for investing subscriptions and add-ons"
                - "Note which features you used in the last year"
                - "Cancel or downgrade services you did not use"
                - "Repeat the subscription search on your bank statements @recurring(yearly)"
            - name: Investment fee types in plain words
              description: |-
                ## Purpose
                Fee documents use a dozen overlapping terms: annual management charge, ongoing charges figure, total expense ratio, platform fee, custody fee, transaction costs, initial and ongoing adviser charges. Writing a one-page glossary in your own words means every later statement, quote and factsheet can be read in minutes instead of skimmed.

                ## Milestones
                1. A one-page glossary covering platform, fund, adviser, dealing and currency charges.
                2. Each term marked as charged inside the price or taken from your cash.
                3. Two of your own statements reread using the glossary.
                4. Any term you still cannot explain listed as a question for your provider.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page fee glossary in your own words, tested by rereading two real statements."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect the fee terms used in your own statements and factsheets"
                - "Write a one-line plain explanation of each"
                - "Mark each charge as taken from the price or from your cash"
                - "Reread two statements using the glossary"
            - name: Tiered platform fee bands and caps
              description: |-
                ## Purpose
                Percentage platform fees are often tiered, with a lower rate on money above a threshold, and some cap the fee on shares and ETFs but not on funds. Learning how your platform's bands and caps actually apply to your mix of holdings explains why two portfolios of the same size can pay very different amounts.

                ## Milestones
                1. Your platform's fee bands, caps and minimums written out.
                2. Your own fee worked out by hand and matched to the statement.
                3. The value at which the next band or cap would start saving you money noted.
                4. Whether holding funds or shares changes your fee understood.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your platform fee recalculated by hand from the published bands and matched to the amount on your statement."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy your platform's fee bands, caps and minimums into your notes"
                - "Calculate your fee by hand from the bands"
                - "Check your figure against the amount on the statement"
                - "Note the value at which the next band would reduce your fee"
            - name: Transaction costs inside funds
              description: |-
                ## Purpose
                Beyond the ongoing charge, funds pay dealing costs and spreads when they buy and sell, and in some regions these are now disclosed as a separate transaction cost figure. A high-turnover fund can add a further half percent a year this way, so understanding where to find the figure and what is normal completes the true cost of a fund.

                ## Milestones
                1. The transaction cost figure found in the cost disclosure for two of your funds.
                2. The difference between explicit and implicit transaction costs understood.
                3. Typical ranges for index trackers and active funds noted.
                4. Transaction costs added to the fund charge column in your ledger.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Transaction costs recorded for every fund held, alongside the ongoing charge, with a note on what is typical."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the transaction cost figure in a fund's cost disclosure"
                - "Read a fund manager's explanation of explicit and implicit costs"
                - "Record transaction costs for each fund in your ledger"
            - name: Currency conversion charges on overseas holdings
              description: |-
                ## Purpose
                Buying shares listed in another currency usually triggers a conversion fee, often between 0.25 and 1.5 percent each way, and dividends paid in that currency may be converted again. For anyone holding overseas shares directly, these charges can outweigh the platform fee, and they are rarely shown as a separate line.

                ## Milestones
                1. Your platform's currency conversion rates for buying, selling and dividends written down.
                2. The conversion cost on your last three overseas trades calculated.
                3. Options such as a home-listed fund, a multi-currency account or a cheaper platform compared.
                4. A rule written for how you will buy overseas holdings in future.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The currency cost of your last three overseas trades calculated, with a written rule for future overseas purchases."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your platform's currency conversion rate schedule"
                - "Calculate the conversion cost on your last three overseas trades"
                - "Compare a home-listed fund or multi-currency account option"
                - "Write your rule for buying overseas holdings"
            - name: Legacy share classes and trail commission
              description: |-
                ## Purpose
                Older investments bought through an adviser or bank often sit in bundled share classes that still pay commission to someone, even if you have had no advice in years. Learning how bundled and clean classes differ, and how to tell which you hold, prepares you to move to the cheaper class of the same fund.

                ## Milestones
                1. The difference between bundled, clean and institutional share classes written down.
                2. Each fund you hold marked with its share class type.
                3. Any commission or trail payment still being paid identified.
                4. A list of holdings with a cheaper class of the same fund available.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every holding marked with its share class type, and a list made of those with a cheaper class of the same fund."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read how bundled and clean share classes differ"
                - "Mark the share class type of each fund you hold"
                - "Ask your provider whether any commission is still being paid from your holdings"
                - "List the funds that have a cheaper class available"
            - name: Performance fees, hurdles and high-water marks
              description: |-
                ## Purpose
                Some funds, investment trusts and private managers take a share of returns above a hurdle on top of a base fee. Understanding how the hurdle, the high-water mark and the measurement period work tells you how much a good year might actually cost, and whether the manager could be paid for returns you lost again the next year.

                ## Milestones
                1. Every holding with a performance fee identified.
                2. The rate, hurdle, high-water mark and measurement period noted for each.
                3. The fee in a strong year estimated in money terms.
                4. A view recorded on whether each performance fee is acceptable to you.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every performance fee you pay is written down with its rate, hurdle and high-water mark, and estimated in money for a strong year."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your fund documents for any performance fee"
                - "Note the rate, hurdle, high-water mark and period for each"
                - "Estimate the fee in money for a strong year"
            - name: Charges inside insurance bonds and older policies
              description: |-
                ## Purpose
                Investment bonds, older personal pensions and endowment-style policies can carry layers of charges that newer products do not: policy fees, allocation rates below 100 percent, bid-offer spreads and capital units with higher charges. Learning to read these policy documents is the only way to compare an old policy fairly with a modern alternative.

                ## Milestones
                1. The policy schedule and key features document found for each older policy.
                2. Every charge listed, including allocation rate and any capital unit charge.
                3. The policy's yearly cost estimated in money terms.
                4. Questions you cannot answer from the documents sent to the provider.

                ## Notes
                Older policies may also hold guarantees or loyalty bonuses. Check these with the provider before deciding a policy is poor value.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every charge on each older policy listed and estimated in money per year, with unanswered questions sent to the provider."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the policy schedule and key features document for each older policy"
                - "List every charge, including allocation rate and capital unit charges"
                - "Estimate each policy's yearly cost in money terms"
                - "Send the questions the documents leave open to the provider"
            - name: Reading the cost section of a key information document
              description: |-
                ## Purpose
                Standardised product documents in many regions include a cost section with figures such as reduction in yield or costs over time at different holding periods. These tables make products comparable on paper but are easy to misread, so practising on two of your own holdings turns them into a fast comparison tool.

                ## Milestones
                1. The cost section of two key information documents read line by line.
                2. Entry, exit, ongoing and incidental costs located in each.
                3. The reduction in yield or cost over time figures compared between the two.
                4. A note made of how these figures differ from the factsheet charge.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two key information document cost sections compared line by line, with a note on how they differ from the factsheet figures."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the key information document for two of your holdings"
                - "Locate entry, exit, ongoing and incidental costs in each"
                - "Compare the costs over time figures for the two products"
                - "Note where these figures differ from the factsheet charge"
            - name: Converting to a cheaper share class of the same fund
              description: |-
                ## Purpose
                Where you hold an expensive class of a fund that also offers a cheaper class, a conversion keeps exactly the same investment while lowering the charge, often without a sale for tax purposes. Many platforms will do it on request, and some legacy holdings save 0.5 percent or more a year.

                ## Milestones
                1. Each holding with a cheaper class available confirmed with the platform.
                2. Whether the conversion counts as a disposal for tax confirmed in writing or with a tax adviser.
                3. Conversion requests submitted for every eligible holding.
                4. The new class and charge recorded in the fee ledger.

                ## Notes
                Ask specifically whether a conversion is treated as a sale. Treatment differs by country and by account type, and a taxable account needs more care than a tax-free one.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every eligible holding converted to the cheapest available class of the same fund, with the new charges recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the platform which of your funds can convert to a cheaper class"
                - "Confirm the tax treatment of a conversion for each account type"
                - "Submit conversion requests for the eligible holdings"
                - "Record the new class and charge in your fee ledger"
            - name: Platform switch on fee grounds
              description: |-
                ## Purpose
                When your yearly benchmark shows another platform would save a meaningful sum, the decision is more than headline price: exit fees, transfer method, fund availability, service quality and protection arrangements all matter. A structured comparison, with your own portfolio priced on each, makes the choice defensible and stops a switch for a small saving.

                ## Milestones
                1. Three platforms priced for your exact holdings, wrappers and trading pattern.
                2. Exit fees on the current platform and any transfer-in offer on the new one noted.
                3. Fund availability, service reviews and investor protection checked for each.
                4. A decision recorded with the expected yearly saving.

                ## Notes
                Start from the **Purchase decision** template. Include the out-of-market risk of a cash transfer in the comparison.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written platform decision, comparing three options on cost, exit fees, fund range and service, with the expected yearly saving."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a purchase decision page for the platform choice"
                - "Price your exact holdings on three platforms"
                - "Add exit fees, fund availability and service reviews to the comparison"
                - "Ask the agent to summarise the comparison into a one-page decision note"
                - "Record your decision and the expected yearly saving"
            - name: Cost case for each high-charge fund
              description: |-
                ## Purpose
                Every fund charging 1 percent more than a similar alternative needs to beat it by that margin every year just to break even. Writing a short cost case for each holding above your per-fund ceiling, stating what it does that a cheaper option does not and whether that has shown up after fees, turns a vague unease into a decision you can stand behind.

                ## Milestones
                1. A list of every fund above your per-fund ceiling.
                2. A one-paragraph cost case written for each.
                3. Performance after fees compared with a relevant benchmark over five years where available.
                4. Each fund marked keep, replace or discuss with an adviser.

                ## Notes
                This project is about the price of each holding, not about which fund to buy. If you take advice, take the list to your adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written cost case for every fund above your ceiling, each marked keep, replace or discuss with an adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every fund above your per-fund cost ceiling"
                - "Write one paragraph on what each does that a cheaper option does not"
                - "Compare five-year performance after fees with its benchmark"
                - "Mark each fund keep, replace or discuss with an adviser"
            - name: Moving ongoing adviser charges to a fixed fee
              description: |-
                ## Purpose
                Percentage advice fees rise automatically as the portfolio grows, even though the work rarely does. Asking your adviser for a fixed yearly fee, a cap, or a lower rate on assets above a threshold is a normal conversation, and on a 500,000 portfolio the difference between 0.75 percent and a fixed fee can be thousands a year.

                ## Milestones
                1. Your current adviser fee in money terms and its basis written down.
                2. Published fixed-fee and capped-fee options from other advisers noted as a reference.
                3. A written request for a fixed fee, cap or lower tier sent.
                4. The new arrangement, or the reasons for refusal, recorded.

                ## Notes
                Be clear about the service level you want. A lower fee for less service can be the right outcome if you no longer use all of it.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written request for a fixed or capped fee sent to your adviser, with the outcome and new yearly cost recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down your current advice fee in money and how it is calculated"
                - "Note two published fixed-fee or capped-fee offers as a reference"
                - "Send your adviser a written request for a fixed fee or cap"
                - "Check the new fee was applied on the next statement @recurring(yearly)"
            - name: Switching off trail commission and dormant adviser charges
              description: |-
                ## Purpose
                Ongoing adviser charges are sometimes still taken years after the adviser stopped giving advice, often because the account was set up with a standing instruction nobody revisited. Cancelling charges for services you no longer receive is one of the fastest fee cuts available, and in some cases past charges can be reclaimed.

                ## Milestones
                1. Every account checked for an ongoing adviser or commission payment.
                2. The service actually received for each payment written down.
                3. Instructions sent to stop charges where no service is received.
                4. Any reclaim of past charges for services not delivered requested in writing.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every adviser or commission payment for a service no longer received has been stopped in writing, with any reclaim request logged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search each statement for adviser, commission or service charges"
                - "Write down what service you received for each in the last year"
                - "Instruct providers in writing to stop charges with no service behind them"
                - "Request a refund of charges for services that were not delivered"
            - name: Linking family accounts for a lower fee tier
              description: |-
                ## Purpose
                Certain platforms let household members link accounts so the combined value counts towards lower fee bands or caps, and some waive fees on children's accounts when a parent holds an account. If your household already uses one platform, checking and requesting linking is a small admin job that can trim the fee for everyone.

                ## Milestones
                1. Whether your platform offers family linking or household pricing confirmed.
                2. The yearly saving from linking estimated.
                3. Linking requested with the agreement of every account holder.
                4. The lower rate seen on the next statement.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Family linking confirmed as available or not, and where available, active on every eligible account with the saving recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check your platform's help pages for family linking or household pricing"
                - "Estimate the saving if household accounts were linked"
                - "Agree linking with each account holder and submit the request"
                - "Confirm the household link is still active on each account @recurring(yearly)"
            - name: Funds or ETFs on your platform's fee model
              description: |-
                ## Purpose
                Many platforms charge a percentage on funds but a capped or flat fee on shares and ETFs, while charging dealing costs on ETFs that funds avoid. For a portfolio above a certain size, holding the ETF version of the same index can cut the platform fee sharply, and below it the dealing charges may cancel the saving.

                ## Milestones
                1. Your platform's fee treatment of funds versus ETFs written out.
                2. The yearly cost of your portfolio priced both ways, including dealing.
                3. The break-even portfolio size noted.
                4. A decision recorded on which format to hold in each account.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of fund and ETF costs on your platform for your portfolio, with a recorded format decision for each account."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write out how your platform charges funds and ETFs differently"
                - "Price your portfolio as funds and as ETFs, including dealing"
                - "Find the portfolio size at which the cheaper format changes"
                - "Record which format you will hold in each account"
            - name: Paying fees from inside or outside each wrapper
              description: |-
                ## Purpose
                In some countries, paying certain adviser or platform fees from outside a pension or tax-free account keeps more money growing inside the wrapper, and in others the rules forbid it or change the tax treatment. Asking your provider and a tax adviser where each fee can be paid from, and what the effect is, is a small decision that compounds quietly.

                ## Milestones
                1. Each account's options for where fees are deducted written down.
                2. The tax treatment of each option confirmed with a tax adviser or official guidance.
                3. The yearly effect of paying from outside estimated.
                4. A decision recorded and any new payment instruction set up.

                ## Notes
                Rules vary widely and change. Treat this as a question for a professional, not a rule to copy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for each account on where fees are paid from, based on confirmed tax treatment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each provider whether fees can be paid from outside the account"
                - "Check the tax treatment with a tax adviser or official guidance"
                - "Estimate the yearly effect of paying from outside"
                - "Record your decision and update payment instructions if needed"
            - name: Digital managed service versus DIY cost comparison
              description: |-
                ## Purpose
                Ready-made portfolios and digital managed services sit between full advice and doing it yourself, and they bundle platform, fund and management costs into one figure. Pricing a managed option against your own low-cost build, and being honest about the time and behaviour costs of DIY, shows whether the convenience premium is worth paying.

                ## Milestones
                1. Two managed services priced for your portfolio, all-in.
                2. A DIY build priced on your current platform with equivalent funds.
                3. Your realistic hours a year for DIY noted.
                4. A decision recorded on which route to use, with the yearly cost difference.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of two managed services and a DIY build for your portfolio, with the chosen route and cost difference recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Price two managed services for your portfolio size, all costs included"
                - "Price a DIY build with equivalent funds on your current platform"
                - "Estimate the hours a year DIY would take you"
                - "Record your choice and the yearly cost difference"
            - name: Platform transfer day checklist
              description: |-
                ## Purpose
                Transfers between platforms can take two to eight weeks, and the costly mistakes happen in the gaps: money left out of the market after a cash transfer, regular investments still running on the old account, a dividend or fee landing after closure. A checklist covering the run-up, the transfer and the first month afterwards keeps the saving from leaking away.

                ## Milestones
                1. Transfer type chosen, in specie or cash, with the reasons noted.
                2. Regular contributions paused or redirected before the transfer starts.
                3. Holdings and cash on the new platform reconciled against the old valuation.
                4. The old account closed with a final statement saved.

                ## Notes
                Start from the **Operational checklist** template. Ask the new platform to start the transfer; do not withdraw and redeposit tax-free or pension money yourself.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed transfer with holdings reconciled, contributions redirected and a final statement from the old platform saved."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create a transfer checklist from the operational checklist template"
                - "Ask the new platform to start an in specie transfer where possible"
                - "Pause or redirect regular contributions to the old account"
                - "Reconcile holdings and cash against the old valuation"
                - "Save the final statement and close the old account"
            - name: Fee agenda for the annual adviser meeting
              description: |-
                ## Purpose
                Annual reviews tend to focus on performance and markets, and fees get two minutes at the end if they come up at all. Sending a short fee agenda before the meeting, with your all-in cost, the services you used and any cheaper alternatives you have priced, makes cost a fixed item rather than an awkward afterthought.

                ## Milestones
                1. An agenda with your all-in cost, services used and fee questions sent a week ahead.
                2. The adviser's answers recorded during the meeting.
                3. Any change agreed confirmed in writing afterwards.
                4. The agenda reused the following year.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written fee agenda sent before the annual review, with answers and any agreed change confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft three fee questions for the next review"
                - "Send the fee agenda a week before the meeting @recurring(yearly)"
                - "Record the adviser's answers in the meeting notes"
                - "Ask for any agreed change to be confirmed in writing"
            - name: Responding to a fee increase notice
              description: |-
                ## Purpose
                When a provider announces higher charges, the notice period is the window to act before you pay more. Costing the increase, checking alternatives and either accepting, negotiating or moving within that window turns a price rise into a decision rather than a default.

                ## Milestones
                1. The increase costed in money per year for your holdings.
                2. The effective date and any fee-free exit window noted.
                3. Alternatives priced if the increase is above your switching threshold.
                4. A decision taken before the effective date.

                ## Notes
                Some providers waive exit fees for customers leaving because of a price change. Ask before you go.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A decision on the latest fee increase recorded before its effective date, with the yearly money effect noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out the increase in money per year for your holdings"
                - "Note the effective date and ask whether exit fees are waived"
                - "Price alternatives if the increase is above your threshold"
                - "Record your decision before the change takes effect"
            - name: Complaint and refund for an overcharge
              description: |-
                ## Purpose
                Overcharges happen: a fee tier applied wrongly, adviser fees taken after cancellation, a transfer delayed so long you missed market gains. A clear written complaint, with dates, amounts and what you want, gets most errors corrected, and if not, most countries have a free financial ombudsman or dispute service.

                ## Milestones
                1. The overcharge calculated with dates and amounts.
                2. A written complaint sent stating what happened and the remedy you want.
                3. The provider's final response received, or the deadline for it noted.
                4. The case referred to the ombudsman or dispute service if unresolved.

                ## Notes
                Keep copies of everything. Ombudsman services usually require you to complain to the firm first and wait a set period.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written complaint with calculated amounts sent, and either a refund received or the case referred to the dispute service."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate the overcharge with dates and amounts"
                - "Ask the agent to draft a complaint letter from your calculation"
                - "Send the complaint and note the response deadline"
                - "Refer the case to the ombudsman if the reply is unsatisfactory"
            - name: First-year cost review after a switch
              description: |-
                ## Purpose
                A switch is only worth it if the saving actually arrives. Comparing the first full year on the new platform or fee arrangement with the year before, including the one-off costs of moving, tells you whether the change paid off and how long it takes to recover the switching cost.

                ## Milestones
                1. Twelve months of costs on the new arrangement totalled.
                2. The previous year's costs set beside them.
                3. One-off switching costs, including any time out of the market, added.
                4. The payback period and the verdict written in the ledger.
              priority: low
              deadlineOffsetDays: 400
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A first-year comparison of costs before and after the switch, including one-off costs, with the payback period recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Total the first twelve months of costs on the new arrangement"
                - "Set them beside the previous year's costs"
                - "Add one-off switching costs to the comparison"
                - "Write the payback period and verdict in the ledger"
            - name: Flat fees on a small starting pot
              description: |-
                ## Purpose
                A flat platform fee of a few pounds or dollars a month is cheap on a large portfolio but can take 2 to 5 percent a year from a pot of a few thousand. New investors with small balances often do better with a percentage platform or a fee-free account until the pot grows, then switching once the flat fee becomes the cheaper option.

                ## Milestones
                1. Your yearly fee as a percentage of a small pot calculated.
                2. A percentage-fee or fee-free option priced for the same balance.
                3. The balance at which a flat fee becomes cheaper written down.
                4. A reminder set to revisit the choice when the balance reaches it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The fee on your small pot calculated as a percentage, with a crossover balance recorded for switching to a flat fee."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Work out your yearly fee as a percentage of your current pot"
                - "Price a percentage-fee or fee-free alternative for the same balance"
                - "Find the balance at which a flat fee becomes cheaper"
                - "Check your balance against the crossover point @recurring(quarterly)"
            - name: Negotiating fees on a large portfolio
              description: |-
                ## Purpose
                With a portfolio in the high six or seven figures, fees become negotiable in ways small investors never see: bespoke adviser rates, institutional share classes, platform caps and lower discretionary management tiers. Asking explicitly, with competing quotes in hand, can cut the all-in cost substantially.

                ## Milestones
                1. Your all-in cost and the published rates for portfolios of your size compared.
                2. Two competing quotes from advisers, managers or platforms obtained.
                3. A written request for a lower rate sent to your current providers.
                4. The outcome and new rates recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two competing quotes obtained and a written fee request sent to current providers, with the outcome recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare your all-in cost with published rates for your portfolio size"
                - "Get two competing quotes for the same service"
                - "Send your providers a written request for a lower rate"
                - "Record the new rates or the reasons given for refusal"
            - name: One household fee picture for a couple
              description: |-
                ## Purpose
                Couples often hold accounts on different platforms chosen years apart, each paying separate minimum fees and missing out on tiers they could reach together. Putting both partners' accounts in one picture shows where moving one partner's holdings, or linking, would cut the household total without changing either person's ownership.

                ## Milestones
                1. Both partners' accounts listed with provider, value and yearly cost.
                2. A combined household cost figure agreed.
                3. Options to reduce duplicate minimum fees or reach better tiers priced.
                4. A shared decision recorded, keeping each account in its owner's name.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A combined household fee figure covering both partners, with any agreed change recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List both partners' accounts with provider, value and yearly cost"
                - "Agree a single household cost figure together"
                - "Price options to remove duplicate fees or reach better tiers"
                - "Review the household fee picture together @recurring(yearly)"
            - name: Drawdown and withdrawal charges in retirement
              description: |-
                ## Purpose
                Retirement brings charges that saving years did not: drawdown fees, charges per withdrawal or income payment, and fees for changing income levels. Because the portfolio is no longer growing from contributions, fees take a larger share of the safe withdrawal, so checking them before and during retirement protects income that has to last decades.

                ## Milestones
                1. Every drawdown, income payment and withdrawal charge on your accounts listed.
                2. Your total yearly cost compared with the income you take.
                3. Lower-cost drawdown options priced on at least two providers.
                4. A yearly check of charges against income in place.

                ## Notes
                Fee comparison is one part of a drawdown choice. Guarantees, income options and guidance services matter too.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every drawdown and withdrawal charge listed and compared with income taken, with two lower-cost alternatives priced."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every drawdown and withdrawal charge on your accounts"
                - "Compare your yearly costs with the income you take"
                - "Price drawdown on two other providers"
                - "Compare charges with income taken each year @recurring(yearly)"
            - name: Fee review of an inherited portfolio
              description: |-
                ## Purpose
                Inherited investments often arrive in whatever arrangement the person who died used, sometimes with an adviser you have never met and charges set decades ago. Reviewing fees before re-registering or moving the holdings gives you a clean starting point rather than paying old costs by default.

                ## Milestones
                1. Every inherited account listed with its provider and charges.
                2. Ongoing adviser charges identified and paused or confirmed with you as the new client.
                3. Fee-sensitive options for re-registration or transfer priced.
                4. A decision recorded for each account once the estate allows.

                ## Notes
                Executors and solicitors may need to act first. Ask before changing anything during the administration of the estate.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Charges on every inherited account listed, with adviser fees confirmed or paused and a decision recorded for each account."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the inherited accounts with provider and charges"
                - "Ask whether any ongoing adviser charges are still being taken"
                - "Price re-registration or transfer to your preferred platform"
                - "Record a decision for each account once the executor confirms"
            - name: Fee review for money managed for someone else
              description: |-
                ## Purpose
                Attorneys, deputies and trustees have a duty to manage another person's money with care, and unnecessary fees are a common oversight when the paperwork is already heavy. A clear record of the fees on each account you manage, and a yearly check, protects the person and gives you evidence for any supervisory body.

                ## Milestones
                1. Every account managed for the person listed with its yearly cost.
                2. Fees above reasonable market levels identified.
                3. Any change discussed with co-attorneys or trustees and recorded.
                4. A yearly fee record kept with your other attorney or trustee records.

                ## Notes
                Check what your legal role allows. Some changes need the agreement of co-attorneys, the court or the trust deed.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A yearly fee record for every account managed for the person, with any change agreed in writing with co-decision-makers."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List each account you manage for the person and its yearly cost"
                - "Mark fees well above market rates for discussion"
                - "Agree any change with co-attorneys or trustees in writing"
                - "Add the year's costs to your attorney or trustee records @recurring(yearly)"
            - name: Cost attribution by asset class and wrapper
              description: |-
                ## Purpose
                Once total costs are known, the next question is where they come from. Breaking the all-in cost down by asset class, wrapper and layer shows, for example, that a small allocation to an active specialist fund accounts for a third of the bill, and directs your effort to where it saves most.

                ## Milestones
                1. Each holding's cost split into platform, fund and adviser layers.
                2. Costs grouped by asset class and by wrapper.
                3. Each group's share of the total bill compared with its share of the portfolio.
                4. The single group with the worst cost to value ratio named.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cost breakdown by asset class and wrapper, with the group whose share of costs most exceeds its share of value named."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Split each holding's cost into platform, fund and adviser layers"
                - "Group costs by asset class and by wrapper"
                - "Compare each group's share of costs with its share of value"
                - "Name the group with the worst cost to value ratio"
            - name: Fee schedule in a discretionary management agreement
              description: |-
                ## Purpose
                Discretionary managers often charge a management fee plus custody, dealing and third-party fund costs, with the full picture spread across the agreement, a tariff sheet and the annual report. Reading the schedule clause by clause and pricing a year on your portfolio exposes layers such as dealing commissions on every rebalance or in-house funds charging on top.

                ## Milestones
                1. The agreement, tariff sheet and latest costs statement collected.
                2. Every fee layer listed, including custody, dealing and underlying fund charges.
                3. A full year's cost recalculated from the schedule.
                4. Questions on any unclear or double-charged layer sent to the manager.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every fee layer in the discretionary agreement listed and a year's cost recalculated, with unclear layers queried in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the management agreement, tariff sheet and costs statement"
                - "List every fee layer, including in-house fund charges"
                - "Recalculate a year's cost from the schedule"
                - "Send the manager questions on any unclear layer"
            - name: Investment trust charges and discount effects
              description: |-
                ## Purpose
                Investment trusts publish an ongoing charge, but borrowing costs, performance fees and the widening or narrowing of the discount to net asset value also affect what holders pay and receive. For anyone holding several trusts, putting these together gives a truer cost comparison with open-ended funds.

                ## Milestones
                1. The ongoing charge, any performance fee and borrowing level noted for each trust held.
                2. The current discount or premium and its five-year range recorded.
                3. The dealing spread on each trust checked.
                4. A note made comparing each trust's total cost with an open-ended alternative.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each trust held has its charges, discount range and dealing spread recorded, with a cost comparison against an open-ended alternative."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the ongoing charge, performance fee and gearing for each trust"
                - "Record the current discount and its five-year range"
                - "Check the dealing spread on each trust"
                - "Compare each trust's total cost with an open-ended alternative"
            - name: Total cost of ownership model for three set-ups
              description: |-
                ## Purpose
                Experienced investors often weigh several complete arrangements: advised with a platform, managed service, or DIY across two platforms for different wrappers. A spreadsheet model costing each set-up over ten years, with fees, dealing, cash margins and switching costs, gives a single comparable figure for each and a basis for long-term structure decisions.

                ## Milestones
                1. Three complete set-ups defined with their platforms, funds and services.
                2. Every cost layer modelled for each over ten years.
                3. Switching costs and time out of the market included.
                4. The ten-year cost of each set-up compared and the preferred one recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ten-year cost model comparing three complete set-ups, including switching costs, with the preferred set-up recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Define three complete set-ups you would consider"
                - "Model every cost layer for each over ten years"
                - "Add switching costs and out-of-market time"
                - "Ask the agent to check the model's formulas for errors"
                - "Record the preferred set-up and its ten-year cost"
---

# Investment Fee Reduction

Investment fees are small percentages that turn into large sums over twenty or thirty years, and most people have never added theirs up. This area starts with the foundations (an inventory of every account, the annual cost statements, fund charges, an all-in yearly cost in money terms, a personal ceiling and a check on exit penalties), then the routines that catch charges as they are taken, the knowledge needed to read a charges schedule, the switches and renegotiations that cut costs, dated events such as a platform transfer or a fee complaint, variants for small pots, large portfolios, couples, retirees and people managing money for someone else, and finally specialist work on cost attribution and discretionary agreements.

What repeats is a monthly glance at the charges on each statement, a quarterly look at platform cash and fund charge changes, and yearly jobs: reading the costs statements, benchmarking your platform, scoring your adviser and resetting your fee ceiling. The Metrics log, Purchase decision, Operational checklist and Meeting notes templates pair with the fee ledger, the platform choice, the transfer day and the adviser meeting. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
