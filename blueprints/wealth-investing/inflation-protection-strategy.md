---
id: wealth-investing.inflation-protection-strategy
name: Inflation Protection Strategy
description: "Your own inflation rate, real returns on every account, a written role for linked bonds, real assets and shares, and the routines and retirement plans that keep savings worth what they were meant to be."
category: personal
version: 1.0.0
tags: [wealth-investing, inflation-protection-strategy, everyone, retiree, inflation, inflation-linked-bonds, real-assets, purchasing-power]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Inflation Protection Strategy
          description: "Protecting long-term purchasing power with inflation-linked bonds, real assets and equity exposure."
          projects:
            - name: Personal inflation rate from your own spending
              description: |-
                ## Purpose
                Official inflation figures average a basket of goods that may look nothing like yours: a retiree who spends heavily on energy, food and insurance can face a rate several points above the headline. Working out your own rate from a year of real spending gives every later decision in this area the right number to beat.

                ## Milestones
                1. Twelve months of spending grouped into eight to twelve categories.
                2. Each category matched to the closest official price index sub-category.
                3. A weighted personal inflation rate calculated for the last year.
                4. The gap between your rate and the headline figure written down with the categories that cause it.

                ## Notes
                Many national statistics offices publish a personal inflation calculator that does the weighting for you. Use it as a check on your own sums, not a replacement for them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written personal inflation rate for the last twelve months, with its category weights and the gap to the official headline rate."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export twelve months of bank and card transactions into one spreadsheet"
                - "Group the spending into no more than twelve categories"
                - "Ask the agent to match each category to the official index sub-category and weight it"
                - "Write your personal rate beside the headline rate and note what drives the gap"
            - name: Real return audit of every account
              description: |-
                ## Purpose
                Most statements show a nominal return, so a pension that grew 4 percent in a year of 6 percent inflation looks like a gain when it was a loss of buying power. Taking every account, subtracting inflation over the same period and lining the results up shows where your money is keeping pace and where it is quietly shrinking.

                ## Milestones
                1. A list of every savings, investment and pension account with its value one, three and five years ago.
                2. Nominal returns for each period recorded from statements or platform reports.
                3. Inflation for the same periods subtracted to give real returns.
                4. Accounts that lost purchasing power over three years or more flagged for action.

                ## Notes
                Subtracting inflation from the nominal return is a fine approximation at low rates. When inflation is high, divide instead: one plus the nominal return, divided by one plus inflation, minus one.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table of every account showing nominal and real returns over one, three and five years, with loss-making accounts flagged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every account you hold with its provider and current value"
                - "Download annual statements covering the last five years"
                - "Look up official inflation for each year from the statistics office"
                - "Calculate the real return for each account and flag any below zero"
            - name: Cash erosion check on savings balances
              description: |-
                ## Purpose
                Cash feels safe because its number never falls, yet a balance earning 1 percent while prices rise 5 percent loses about a twentieth of its value every year. Checking every cash balance against both inflation and the best available rate tells you how much cash is doing a job and how much is simply leaking.

                ## Milestones
                1. Every current, savings and notice account listed with balance and interest rate.
                2. Each account's rate compared with current inflation.
                3. The yearly loss of buying power across all cash estimated in money terms.
                4. Cash split into emergency buffer, known spending and surplus.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written figure for the yearly real loss on your cash, with every balance labelled as buffer, planned spending or surplus."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every cash balance and the rate it earns today"
                - "Find the latest annual inflation figure for your country"
                - "Work out the yearly loss of buying power on each balance"
                - "Label each balance as buffer, planned spending or surplus"
            - name: Inflation exposure map of your income sources
              description: |-
                ## Purpose
                Some incomes rise with prices by law or contract, some rise only partly, and some never move at all. Sorting every source of household income into fully indexed, partly indexed and fixed shows how much of your future spending is already protected and how much your investments must protect instead.

                ## Milestones
                1. Every current and expected income source listed, from salary to state pension, annuities, rents and interest.
                2. The uprating rule for each source found in the scheme rules, contract or statement.
                3. Each source tagged as fully indexed, capped, discretionary or fixed.
                4. The share of expected retirement income that is fully indexed calculated.

                ## Notes
                State pensions are often indexed by a published rule, while workplace pensions in payment may rise by a capped amount or only at the trustees' discretion. Read the rule rather than assuming.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page map of every income source with its uprating rule and the percentage of retirement income that is fully inflation-linked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every income you receive now or expect in retirement"
                - "Find the increase rule in each pension or annuity's documents"
                - "Tag each source as fully indexed, capped, discretionary or fixed"
                - "Calculate what share of retirement income is fully indexed"
            - name: Inflation exposure map of debts and fixed costs
              description: |-
                ## Purpose
                Inflation hurts savers and can help borrowers, but only if the debt is fixed in money terms and income keeps rising. Mapping which debts are fixed, variable or index-linked, and which regular bills carry inflation-plus price clauses, shows where rising prices will bite and where they work in your favour.

                ## Milestones
                1. All debts listed with rate type, rate and the date any fixed period ends.
                2. Regular contracts with price rises tied to an inflation index identified.
                3. Each item marked as helped, hurt or unaffected by higher inflation.
                4. The largest single exposure named with the date it next resets.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of every debt and indexed contract marked helped, hurt or neutral under inflation, with reset dates recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each mortgage, loan and card balance with its rate type"
                - "Note the end date of every fixed-rate period"
                - "Find contracts whose prices rise by inflation plus a set amount"
                - "Check the reset dates on the list against your calendar @recurring(yearly)"
            - name: Inflation role written into your investment plan
              description: |-
                ## Purpose
                Without a written role, inflation protection gets bought in a panic after prices have already jumped and sold after the scare passes. Deciding in advance what real return you need, which holdings carry the inflation job and how large that sleeve should be turns a vague worry into a rule you can follow for years.

                ## Milestones
                1. A target real return for the whole portfolio written down, with how it was reached.
                2. The holdings that carry the inflation job named, such as linked bonds, real assets and shares.
                3. A target size for the inflation-protection sleeve with upper and lower limits.
                4. The plan reviewed with a partner or adviser and dated.

                ## Notes
                If you already keep a personal investment policy, add this as a section to it rather than starting a separate document.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated section of your investment plan stating the target real return, the holdings that protect against inflation and the sleeve's target range."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the real return your retirement projections assume"
                - "Name which holdings you expect to protect against inflation"
                - "Set a target range for the inflation-protection sleeve"
                - "Book a session to go through the section with your partner or adviser"
            - name: Goals restated in today's money
              description: |-
                ## Purpose
                Targets set years ago in nominal terms drift out of date: a retirement pot of 400,000 chosen a decade back buys noticeably less now. Restating each goal in today's money, and deciding to keep all future targets in real terms, stops inflation silently lowering the bar.

                ## Milestones
                1. Every written savings and wealth goal listed with the year it was set.
                2. Each goal uplifted by cumulative inflation since it was set.
                3. Revised targets recorded in today's money.
                4. A rule written that all future targets are stated in real terms.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every wealth goal restated in today's money with the uplift used, and a written rule to keep targets in real terms."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every written savings or retirement target and its date"
                - "Find cumulative inflation since each target was set"
                - "Uplift each target and record the new figure"
                - "Add a line to your plan saying targets are kept in today's money"
            - name: Holdings tagged by how they behave in inflation
              description: |-
                ## Purpose
                Every holding reacts to inflation differently: nominal bonds lose when it surprises upward, linked bonds track it with a lag, shares tend to keep up over long periods but stumble in sharp spikes, and cash falls behind unless rates rise first. Tagging each holding by its likely behaviour shows whether the portfolio as a whole leans towards or away from inflation risk.

                ## Milestones
                1. A full list of holdings across all accounts with current values.
                2. Each holding tagged as nominal, inflation-linked, real asset, equity or cash.
                3. The percentage of the portfolio in each tag calculated.
                4. A short note on whether the mix matches the role set in your plan.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A holdings list with each line tagged by inflation behaviour and the portfolio share of each tag calculated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export holdings from every platform into one sheet"
                - "Look inside multi-asset funds to see their bond and equity split"
                - "Tag each line with its inflation behaviour"
                - "Total each tag as a share of the whole portfolio"
            - name: Choosing the inflation measure you track
              description: |-
                ## Purpose
                Countries publish several price indices, such as consumer prices with and without housing costs, a core measure without food and energy, or an older retail index still used in some contracts. Choosing one measure for your records, and knowing which one each pension, bond and contract actually uses, avoids comparing returns against the wrong yardstick.

                ## Milestones
                1. The main inflation indices published in your country listed with what each includes.
                2. The index used by each linked bond, pension and contract you hold identified.
                3. One index chosen as your tracking measure, with the reason noted.
                4. The release schedule for that index saved.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note naming your chosen inflation index, why you chose it and which index each of your linked products uses."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the statistics office's guide to the inflation measures it publishes"
                - "Check which index your pensions and linked bonds follow"
                - "Pick one measure for your own records and note why"
                - "Save the publication calendar for that measure"
            - name: Monthly inflation figure log
              description: |-
                ## Purpose
                One monthly line in a log, with headline, core and your own category pressures, builds a record that makes the yearly review quick and stops a single alarming headline from driving a decision. The log takes five minutes on release day and becomes the source for every real-return calculation in this area.

                ## Milestones
                1. A log set up with columns for headline, core and the categories that matter to you.
                2. The last twelve months back-filled from official releases.
                3. Each new monthly figure recorded within a few days of release.
                4. A three-month and twelve-month trend visible at a glance.

                ## Notes
                Start from the **Metrics log** template. Record the figure, not your reaction to it: decisions belong in the quarterly review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An inflation log with at least twelve consecutive monthly entries for headline and core rates, kept current within a week of each release."
                cadence: rolling
              tasks:
                - "Set up the log with headline, core and personal category columns"
                - "Back-fill the last twelve months from the statistics office"
                - "Record the headline and core figures after each release @recurring(monthly:16)"
            - name: Quarterly real-return review
              description: |-
                ## Purpose
                Nominal growth on a platform dashboard is easy to read and easy to misread. Once a quarter, setting portfolio growth against inflation over the same months shows whether the plan is still beating prices and gives an early warning while there is time to adjust contributions or allocation.

                ## Milestones
                1. Quarter-end values recorded for every account.
                2. Quarterly and rolling twelve-month real returns calculated.
                3. Real return compared with the target in your investment plan.
                4. Any shortfall over two consecutive years noted for the annual review.

                ## Notes
                Start from the **Metrics log** template, with one row per quarter. One bad quarter means nothing; a rolling three-year shortfall means something.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly record of nominal and real portfolio returns against the target real return, with no quarter missing over a year."
                cadence: rolling
              tasks:
                - "Record each account's value on the last working day of the quarter @recurring(quarterly)"
                - "Calculate the quarter's return net of contributions and withdrawals"
                - "Subtract inflation for the same quarter from your log"
                - "Compare the rolling twelve-month real return with your target"
            - name: Yearly personal inflation rate refresh
              description: |-
                ## Purpose
                Spending changes as life changes: children leave, a car is paid off, heating bills rise, care costs begin. Recalculating your personal inflation rate each year keeps your real-return target honest and shows which costs are growing fastest for you specifically.

                ## Milestones
                1. The year's spending regrouped into the same categories as last year.
                2. Category weights updated to reflect how spending shifted.
                3. This year's personal rate set beside last year's and the headline figure.
                4. Any category rising faster than income flagged for the spending plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A personal inflation rate recalculated within a month of each year end, with category weights and a comparison to the previous year."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Export the year's transactions after the year closes @recurring(yearly)"
                - "Regroup spending into last year's categories"
                - "Recalculate the weighted rate and compare with last year"
                - "Flag any category rising faster than household income"
            - name: Cash buffer sizing and savings rate check
              description: |-
                ## Purpose
                Holding too little cash forces you to sell investments at a bad moment, while holding too much hands a yearly loss to inflation. Keeping the buffer at an agreed number of months of spending and checking monthly that it earns a competitive rate keeps the cost of safety as low as it can be.

                ## Milestones
                1. A buffer size agreed in months of essential spending, with the reason noted.
                2. The buffer held in an easy-access or short notice account at a competitive rate.
                3. Cash above the buffer and known spending moved to its planned home.
                4. A monthly glance at rates and balance kept up for six months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cash buffer within ten percent of its agreed size, earning a rate within half a point of the best easy-access rate, checked monthly."
                cadence: rolling
              tasks:
                - "Agree how many months of essential spending the buffer should hold"
                - "Compare your buffer account's rate with the best easy-access rates"
                - "Check the buffer balance and its rate against the best available @recurring(monthly:9)"
            - name: Linked bond index ratio and real yield tracker
              description: |-
                ## Purpose
                Inflation-linked bonds and funds are only understood by watching two numbers: how much indexation has been added to the principal, and the real yield the market now offers. Tracking both monthly for what you hold shows whether protection is accruing as expected and whether a price fall is from rising real yields rather than a broken product.

                ## Milestones
                1. Each linked bond or fund listed with its reference index and indexation lag.
                2. Current real yield and fund duration recorded for each holding.
                3. A monthly line kept for price, real yield and indexation added.
                4. A note written on any month when price fell despite rising inflation, with the cause.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly record for each linked holding of price, real yield and indexation, kept for at least twelve months."
                cadence: rolling
              tasks:
                - "List each linked holding with its index and indexation lag"
                - "Find each fund's current real yield and duration on its factsheet"
                - "Record price, real yield and indexation for each holding @recurring(monthly:23)"
                - "Explain in one line any fall in price during a month of rising inflation"
            - name: Yearly uprating check on indexed income
              description: |-
                ## Purpose
                State pensions, workplace pensions in payment, escalating annuities and some benefits are uprated once a year by a published rule. Checking that each uprating was applied correctly, and recording it against inflation, catches errors early and shows how much real income you keep year by year.

                ## Milestones
                1. The uprating rule for each income written next to it.
                2. This year's increase for each income recorded from the payer's letter.
                3. Each increase checked against the rule and the relevant inflation figure.
                4. Any shortfall or error raised with the payer in writing.

                ## Notes
                Uprating letters usually arrive a month or two before the new tax year or the scheme anniversary. Keep each one: they are the evidence if a later payment is wrong.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly record of each indexed income's increase, checked against its rule, with any discrepancy raised in writing."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Write the uprating rule beside each pension and annuity"
                - "File each uprating letter and record the new amount @recurring(yearly)"
                - "Check each increase against its rule and the inflation figure"
                - "Write to the payer about any increase that looks wrong"
            - name: Rebalancing bands for the inflation-protection sleeve
              description: |-
                ## Purpose
                An inflation sleeve that is never rebalanced swells after a price spike and withers after years of calm, so it is largest exactly when protection has become most expensive. Setting bands around its target and checking them each quarter keeps the sleeve the size your plan says, buying protection when it is cheap and trimming it when it is dear.

                ## Milestones
                1. Upper and lower bands set around the sleeve's target size.
                2. The sleeve's current share of the portfolio checked against the bands.
                3. A rule written for which accounts to trade in, to limit tax and costs.
                4. Each rebalance recorded with date, amounts and reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The inflation sleeve kept within its written bands, with each quarterly check and any trade recorded."
                cadence: rolling
              tasks:
                - "Write upper and lower bands around the sleeve target"
                - "Choose which accounts to rebalance in first"
                - "Check the sleeve's share against its bands @recurring(quarterly)"
                - "Record any rebalancing trade with the reason"
            - name: Yearly inflation uplift to regular contributions
              description: |-
                ## Purpose
                Contributions that stay flat for a decade shrink in real terms by a fifth or more, so the plan falls behind even though nothing appears to have changed. Raising regular contributions each year by at least inflation keeps real savings constant and is far easier than catching up later.

                ## Milestones
                1. Every regular contribution to pensions and investments listed with its amount.
                2. Last year's inflation figure applied to each contribution.
                3. Standing orders and payroll contributions updated to the new amounts.
                4. The uplift recorded so next year starts from the right base.

                ## Notes
                Some pension schemes and platforms offer automatic yearly indexation of contributions. Switching it on removes this task from your memory altogether.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every regular contribution raised by at least the previous year's inflation within a month of the anniversary date."
                cadence: cyclic
                effort_hours_estimate: "1"
              tasks:
                - "List each regular contribution and its current amount"
                - "Check whether your scheme offers automatic yearly indexation"
                - "Raise each contribution by at least last year's inflation @recurring(yearly)"
                - "Record the new amounts as next year's starting base"
            - name: Index-linking register for policies and payments
              description: |-
                ## Purpose
                Index-linking hides in small print: a life policy whose cover rises with prices, a ground rent or service charge linked to an index, a rental agreement you receive with annual reviews, a defined benefit transfer quote. Keeping one register of every indexed clause, and checking it yearly, stops cover quietly falling behind and costs quietly rising ahead.

                ## Milestones
                1. Life, income protection and critical illness policies checked for indexation options.
                2. Any rent, lease or agreement you are party to checked for index-linked reviews.
                3. One register listing each clause, its index, any cap and its review date.
                4. Unindexed cover that has lost real value flagged for a decision.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register of every index-linked clause in your policies and agreements, with index, cap and review date, checked once a year."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Pull out every protection policy and rental or lease agreement"
                - "Note each clause that links a payment or sum to an index"
                - "Record the index, any cap and the next review date in one register"
                - "Review the register for cover that has lost real value @recurring(yearly)"
            - name: How linked bonds actually protect a holder
              description: |-
                ## Purpose
                Inflation-linked government bonds raise their principal in line with an index, so both coupons and the final repayment rise with prices, yet the protection is exact only for someone who holds to maturity. Working through one real bond from issue to redemption makes clear what is guaranteed, what lags and what can still go wrong for a holder who sells early.

                ## Milestones
                1. One inflation-linked government bond chosen and its terms read.
                2. The uplift to its principal since issue calculated from the index.
                3. Whether the bond protects principal against deflation at maturity established.
                4. A plain summary written of what a holder to maturity receives in real terms.

                ## Notes
                Some markets protect the original principal if prices fall over the bond's life and others do not. Check this for your own government's bonds rather than assuming.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page worked example of one linked bond showing its principal uplift, deflation treatment and real outcome for a holder to maturity."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick one inflation-linked government bond and download its terms"
                - "Calculate its principal uplift from the reference index since issue"
                - "Find out whether principal is floored if prices fall"
                - "Write a half-page summary of the real return for a holder to maturity"
            - name: Real yields and breakeven inflation explained
              description: |-
                ## Purpose
                The gap between a nominal government bond yield and an inflation-linked yield of the same maturity is the market's breakeven: the inflation rate at which the two pay the same. Understanding it lets you see whether protection is cheap or expensive at any moment, and why buying linked bonds after inflation has already surged often disappoints.

                ## Milestones
                1. Current nominal and real yields recorded for one matching maturity.
                2. Breakeven inflation calculated and compared with your own expectation.
                3. A historical chart of breakevens for your market found and read.
                4. A note written on when linked bonds win and lose against nominal bonds.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written breakeven calculation for one maturity, compared with your expectation and the historical range."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find nominal and inflation-linked yields for the same maturity"
                - "Subtract one from the other to get the breakeven rate"
                - "Look up how that breakeven has moved over the last ten years"
                - "Write when a linked bond beats a nominal one and when it loses"
            - name: Why long-dated linked bond funds can still fall hard
              description: |-
                ## Purpose
                In 2022 many long-dated inflation-linked bond funds lost a third or more of their value in a year when inflation reached multi-decade highs, because rising real yields outweighed the indexation. Anyone holding or planning to hold a linked fund needs to understand duration before trusting it with inflation protection.

                ## Milestones
                1. The duration of every linked fund you hold or are considering recorded.
                2. The price effect of a one-point rise in real yields estimated for each.
                3. The 2022 performance of a long and a short linked fund compared.
                4. A written decision on the maximum duration you will accept for this job.

                ## Notes
                Duration multiplied by the change in real yield gives a rough percentage price change. A fund with a duration of 20 falls about 20 percent if real yields rise one point.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A written maximum duration for your inflation-linked holdings, supported by a rate-shock estimate for each fund you hold or are considering."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the duration of each linked fund on its factsheet"
                - "Estimate each fund's loss from a one-point rise in real yields"
                - "Compare 2022 returns for a short and a long linked fund"
                - "Write the longest duration you are willing to hold for inflation protection"
            - name: How shares have fared through past inflation episodes
              description: |-
                ## Purpose
                History is the main evidence that equities beat inflation over decades, and also that they can lose heavily in real terms for ten years when inflation arrives suddenly, as in the 1970s. Studying a few episodes in your own market sets honest expectations for the part shares play in your protection.

                ## Milestones
                1. Real equity returns for the 1970s, the early 1980s and 2021 to 2023 found for your market.
                2. The worst ten-year real return for shares in your market recorded.
                3. Sectors and styles that held up better or worse in those periods noted.
                4. A paragraph written on what you can and cannot rely on shares to do.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of real equity returns in at least three inflation episodes, with the worst decade recorded and a conclusion for your plan."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find a long-run real returns dataset for your country's shares"
                - "Record real returns for each high-inflation period"
                - "Note which sectors held up and which fell furthest"
                - "Write what shares can and cannot do for your inflation protection"
            - name: Commodities, property and infrastructure as real assets
              description: |-
                ## Purpose
                Real assets own things whose prices or rents tend to move with inflation, but each does so in a different way and with its own risks: commodity funds carry roll costs, property is tied to interest rates, infrastructure depends on regulated pricing. Learning how each works lets you judge whether any belongs in your sleeve without buying on a story.

                ## Milestones
                1. How a commodity futures fund earns or loses from rolling contracts written in a sentence.
                2. The link between rents, interest rates and listed property prices noted.
                3. How regulated or contracted revenue ties infrastructure income to inflation explained.
                4. A comparison table of the three by inflation link, volatility and cost.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table covering commodities, listed property and infrastructure on inflation link, volatility, yield and typical fund cost."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read how a broad commodity index fund rolls its futures"
                - "Read one listed property fund's report on rent reviews and debt"
                - "Read how an infrastructure fund's revenues are linked to prices"
                - "Fill in a comparison table for all three"
            - name: Reading nominal and real figures in projections
              description: |-
                ## Purpose
                Pension projections, platform calculators and adviser reports mix nominal and real figures, often without saying which, so a forecast of 800,000 might mean today's money or the inflated money of thirty years from now. Learning to spot the difference stops you overestimating what a pot will buy.

                ## Milestones
                1. Your latest pension projection checked for whether it is in real or nominal terms.
                2. The inflation and growth assumptions behind it written down.
                3. One nominal projection converted into today's money.
                4. A habit adopted of asking which basis any projection uses.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your current pension projections labelled real or nominal, with assumptions recorded and at least one converted into today's money."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the assumptions page of your latest pension projection"
                - "Note whether the figures are in today's money or future money"
                - "Convert one nominal projection into today's money"
                - "Ask any provider whose basis is unclear to confirm it in writing"
            - name: How inflation interacts with tax on gains and interest
              description: |-
                ## Purpose
                Tax usually falls on nominal gains and nominal interest, so in an inflationary year you can pay tax on income that was not a real gain at all. In some countries the yearly inflation uplift on linked bonds is taxed before you receive it. Knowing these rules decides which account each inflation holding belongs in.

                ## Milestones
                1. How interest, gains and linked bond uplift are taxed in your country summarised.
                2. Your real after-tax return on cash and bonds calculated for last year.
                3. Holdings whose inflation uplift is taxed each year identified.
                4. A note made of which accounts should hold which inflation assets, to check with a tax adviser.

                ## Notes
                This is organisational, not tax advice. Confirm the treatment with the tax authority's guidance or a qualified adviser before moving holdings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of how inflation affects tax on each of your holdings, with a real after-tax return for cash and bonds and a list of questions for a tax adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the tax authority's guidance on interest and on linked bonds"
                - "Calculate last year's real after-tax return on your cash"
                - "List holdings that are taxed on inflation uplift each year"
                - "Write the questions to put to a tax adviser about account placement"
            - name: Inflation and sequence risk in retirement
              description: |-
                ## Purpose
                Retirees face a double risk: high inflation early in retirement raises every later withdrawal, and if markets fall at the same time the pot can be damaged for good. Understanding how these two interact helps a retiree size the protected part of income and decide how much flexibility spending needs.

                ## Milestones
                1. A simple model of your withdrawals run with steady and high early inflation.
                2. The effect of a market fall in the first five years added to each case.
                3. The gap in lasting income between the scenarios recorded.
                4. Two or three ways to reduce the gap listed for discussion with your adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of how long the pot lasts under steady versus high early inflation, with and without an early market fall."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Set up a year-by-year withdrawal sheet for your pot"
                - "Run it with steady inflation and with high inflation in years one to five"
                - "Add a market fall in year two to both runs"
                - "List ways to narrow the gap to raise with your adviser"
            - name: Linked bond ladder versus linked bond fund
              description: |-
                ## Purpose
                Holding individual inflation-linked bonds to maturity locks in a known real return for each year of the ladder, while a fund keeps a constant duration and never matures. Comparing the two for your own timeline settles which gives you the protection you actually need, at what cost and with how much admin.

                ## Milestones
                1. The years in which you need inflation-protected money identified.
                2. A sample ladder of linked bonds matching those years priced on your platform.
                3. One or two linked funds compared on duration, cost and yield.
                4. A decision recorded with the reasons and the dealing costs of each route.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice between a linked bond ladder and a linked fund, with a priced sample ladder and the funds compared."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Mark the years when you will need inflation-protected money"
                - "Check whether your platform can buy individual linked government bonds"
                - "Price a sample ladder against one or two linked funds"
                - "Record your choice and the reasons"
            - name: Short-dated versus long-dated linked bond fund
              description: |-
                ## Purpose
                Fund choice decides whether a linked holding behaves like inflation-adjusted cash or like a volatile long bond. Comparing a short-dated fund with a broad or long-dated one on duration, real yield and past drawdowns lets you match the fund to the job your plan gives it.

                ## Milestones
                1. Two or three candidate linked funds listed with duration, real yield and charges.
                2. Each fund's worst calendar-year return recorded.
                3. The job of the holding matched to a duration range.
                4. A fund chosen, or your current one confirmed, with the reason written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written fund choice for your linked bond holding, with duration, real yield, charges and worst year compared for at least two candidates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist two or three linked bond funds of different durations"
                - "Record each fund's duration, real yield and ongoing charge"
                - "Look up each fund's worst calendar year"
                - "Write which fund fits the job and why"
            - name: Domestic versus hedged global inflation-linked bonds
              description: |-
                ## Purpose
                Your spending rises with inflation in your own country, so domestic linked bonds match it most closely, but a small or concentrated market can carry long duration or few issues. Comparing a domestic fund with a currency-hedged global one shows the trade-off between a precise match and broader diversification.

                ## Milestones
                1. Your domestic linked bond market's size, duration and index noted.
                2. A currency-hedged global linked fund's country mix and hedging cost found.
                3. How closely each tracks your own country's inflation assessed.
                4. A split between the two decided and recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded split between domestic and hedged global linked bonds, with duration, country mix and hedging costs compared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the duration of your domestic linked bond index"
                - "Read the country breakdown of a hedged global linked fund"
                - "Note which inflation each fund's returns actually follow"
                - "Decide and record the split between domestic and global"
            - name: Broad commodities fund, include or leave out
              description: |-
                ## Purpose
                Commodities have risen strongly in some inflation spikes and gone nowhere for a decade at other times, and futures-based funds can lose money even when spot prices rise. Deciding deliberately whether a small commodity allocation earns a place, rather than buying one after a headline, protects the plan from an expensive impulse.

                ## Milestones
                1. The purpose a commodity holding would serve written in one sentence.
                2. Two broad commodity funds compared on index, roll method, cost and drawdowns.
                3. The maximum size you would allow written down.
                4. A decision to include or leave out recorded with the date.

                ## Notes
                Gold and other precious metals have their own considerations. Keep this decision to broad commodity baskets.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated decision to include or leave out a broad commodity fund, with a stated purpose, maximum size and two funds compared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the one job a commodity fund would do in your portfolio"
                - "Compare two broad commodity funds on index, roll method and cost"
                - "Look up each fund's largest fall from peak"
                - "Record the decision and any maximum allocation"
            - name: Listed infrastructure for inflation-linked revenue
              description: |-
                ## Purpose
                Toll roads, regulated utilities and pipelines often have revenues tied to an inflation index by regulation or contract, which can make listed infrastructure a partial hedge. Checking how much of a fund's revenue is actually linked, and how much debt it carries, tells you whether the inflation story holds for the fund you are considering.

                ## Milestones
                1. One or two listed infrastructure funds identified for review.
                2. The share of revenue linked to inflation found in each fund's reports.
                3. Debt levels and interest rate sensitivity noted.
                4. A decision recorded on whether infrastructure has a role and at what maximum size.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on listed infrastructure, supported by the inflation-linked revenue share and debt levels of at least one fund."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose one or two listed infrastructure funds to review"
                - "Find what share of revenue is linked to inflation in their reports"
                - "Note each fund's debt level and sensitivity to interest rates"
                - "Record whether infrastructure earns a place and how large"
            - name: Equity share needed to beat inflation over your horizon
              description: |-
                ## Purpose
                Over twenty years or more, shares have been the main source of returns above inflation, and too little in them can leave a cautious portfolio losing real value with certainty. Working out the equity share your real return target requires, and whether you can live with its swings, links your inflation protection to your risk tolerance instead of leaving them in separate boxes.

                ## Milestones
                1. Long-run real return assumptions for shares, bonds and cash written down with their source.
                2. The equity share that meets your real return target calculated.
                3. The worst one-year fall that share implies estimated in money terms.
                4. A decision recorded on whether to change the equity share or the target.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written equity share linked to your real return target, with the implied worst-year loss stated in money and a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find published long-run real return estimates for each asset class"
                - "Calculate the equity share your real return target needs"
                - "Estimate the money loss in a bad year at that share"
                - "Decide whether to adjust the equity share or the target"
            - name: Fixed versus variable rate debt when prices are rising
              description: |-
                ## Purpose
                Rising inflation erodes the real value of fixed-rate debt, but central banks usually respond by raising rates, which pushes variable payments up at the same time as living costs. Reviewing each debt's rate type against your income's inflation link shows whether a fix, a variable deal or faster repayment best protects your household budget.

                ## Milestones
                1. Each debt listed with its rate type, remaining term and exit costs.
                2. The payment effect of a two-point rate rise calculated for variable debts.
                3. Fixed and variable options compared on cost and flexibility.
                4. A choice recorded for each debt due for renewal in the next two years.

                ## Notes
                This project is about the inflation exposure of the debt. Whether to overpay a mortgage instead of investing is a separate decision.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice of fixed or variable rate for every debt due for renewal within two years, with a rate-rise payment test for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each debt with its rate type and early repayment charges"
                - "Calculate the monthly payment after a two-point rate rise"
                - "Compare current fixed and variable offers for upcoming renewals"
                - "Record a choice for each debt renewing within two years"
            - name: Government inflation-linked savings products
              description: |-
                ## Purpose
                Several governments have offered savings products that pay inflation plus a small fixed rate, with purchase limits and minimum holding periods, such as US I bonds or index-linked savings certificates. Checking what is currently on offer where you live, and whether its limits and lock-ins fit your cash plans, can give part of your safe money real protection without market price swings.

                ## Milestones
                1. Current government inflation-linked savings products in your country identified.
                2. Rates, purchase limits, lock-in periods and early exit penalties recorded.
                3. The products compared with your cash buffer and short-term savings needs.
                4. A decision recorded on whether and how much to hold.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on government inflation-linked savings, with current terms, limits and lock-ins written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the government savings agency's site for inflation-linked products"
                - "Write down rates, limits, lock-ins and exit penalties"
                - "Compare them with where your short-term savings sit now"
                - "Record whether to buy and up to what amount"
            - name: Moving surplus cash beyond the emergency buffer
              description: |-
                ## Purpose
                Money held in cash beyond the buffer and known spending is the part of a portfolio most certain to lose to inflation. Deciding where each slice of surplus should go, by when it will be needed, and moving it in planned steps closes the leak without a rushed lump-sum decision.

                ## Milestones
                1. The surplus figure confirmed from the cash erosion check.
                2. Surplus split by when it might be needed: within two years, two to five years, beyond five.
                3. A destination chosen for each slice, matched to its timeframe.
                4. The moves completed or scheduled in stages.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "All surplus cash above the buffer and planned spending assigned a destination by timeframe, with the moves done or scheduled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the surplus cash figure from your cash labels"
                - "Split the surplus by when each part might be needed"
                - "Choose a home for each slice that matches its timeframe"
                - "Schedule the transfers in stages if the total feels large"
            - name: Inflation spike response plan written in calm times
              description: |-
                ## Purpose
                Decisions made during an inflation scare tend to be the worst ones: buying protection after it has repriced, dumping bonds after they have fallen, or hoarding cash that loses most. Writing a short plan now, while things are calm, sets out what you will and will not do if inflation runs above a trigger level for several months.

                ## Milestones
                1. A trigger level and duration written down, such as inflation above a set rate for six months.
                2. Actions you will take at the trigger listed, such as checking bands and raising contributions.
                3. Actions you rule out listed, such as abandoning the allocation.
                4. The plan signed and dated by you and any partner.

                ## Notes
                Start from the **Risk register** template, with one row per inflation risk and the response you have agreed for each.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated, one-page inflation spike plan with a trigger, permitted actions and ruled-out actions, agreed with any partner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set the inflation level and duration that triggers the plan"
                - "List the actions you will take when the trigger is hit"
                - "Ask the agent to draft a list of common panic moves to rule out"
                - "Sign and date the plan with your partner"
            - name: Fixed-rate deal ending during high inflation
              description: |-
                ## Purpose
                When a fixed-rate mortgage or fixed savings bond ends in a high-inflation period, the next rate can be very different and the choice made then sets your exposure for years. Preparing three months ahead turns a rushed renewal into a deliberate inflation decision.

                ## Milestones
                1. The end date of the fixed deal entered in your calendar with a three-month warning.
                2. Current rates for fixed and variable replacements gathered.
                3. Each option tested against your inflation plan and household budget.
                4. The new deal arranged before the old one ends.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A replacement deal chosen and in place before the fixed period ends, with the inflation reasoning recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Put the fixed deal's end date and a three-month warning in your calendar"
                - "Gather fixed and variable replacement rates"
                - "Test each option against the budget and your inflation plan"
                - "Arrange the new deal before the old one expires"
            - name: Inflation check five years before retirement
              description: |-
                ## Purpose
                Five years from retirement is the last good window to shape how much retirement income will rise with prices, while there is still salary to adjust contributions and time to phase into linked assets. A focused check now prevents finding out at the leaving party that most of your income is fixed.

                ## Milestones
                1. Expected retirement income sources listed with their uprating rules.
                2. The share of essential spending covered by indexed income calculated.
                3. Options to raise that share listed, such as deferring a state pension or buying linked bonds.
                4. A five-year action plan agreed and dated.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A dated five-year plan showing what share of essential retirement spending will be covered by indexed income and the steps to raise it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Request current forecasts for every pension you hold"
                - "Total essential retirement spending in today's money"
                - "Calculate how much of it indexed income will cover"
                - "Book a review with your adviser to agree the five-year steps"
            - name: Inflation-aware plan for a lump sum
              description: |-
                ## Purpose
                Inheritance, a bonus, a property sale or a pension tax-free lump sum often sits in a current account for months while a decision is made, losing real value the whole time. Agreeing a holding place and a decision deadline before the money arrives keeps it protected while you think.

                ## Milestones
                1. The expected amount and arrival window written down.
                2. A temporary home chosen that earns close to inflation with easy access.
                3. A decision deadline set for the long-term plan.
                4. The money moved to its long-term home by that deadline.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A lump sum held in a competitive temporary account within two weeks of arrival and placed in its long-term home by the agreed deadline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the expected amount and when it should arrive"
                - "Choose a temporary account paying close to inflation"
                - "Set a date by which the long-term plan will be decided"
                - "Move the money to its planned home by that date"
            - name: Disinflation and deflation scenario review
              description: |-
                ## Purpose
                Prices can also fall or rise much more slowly than expected, and a portfolio built only for inflation can suffer: linked bonds pay little uplift, commodities slump and nominal bonds gain. Running through a low-inflation scenario checks that your protection has not become a one-way bet.

                ## Milestones
                1. A low-inflation scenario described with inflation near zero for three years.
                2. The expected effect on each holding tag written down.
                3. The overall portfolio result compared with your base case.
                4. Any change needed to keep balance across scenarios recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written low-inflation scenario showing the expected effect on each part of the portfolio and any change agreed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Describe a three-year low-inflation scenario in a few lines"
                - "Write the likely effect on each tagged group of holdings"
                - "Compare the overall result with your base case"
                - "Record any change needed to keep the portfolio balanced"
            - name: Thirty-year retirement inflation plan
              description: |-
                ## Purpose
                A retirement can last thirty years, long enough for 3 percent inflation to more than double prices and halve the value of any fixed income. Building a retiree's plan around an indexed income floor, an equity share that can keep growing and a cash cushion for bad years keeps spending power through to the end.

                ## Milestones
                1. Essential and discretionary spending separated and costed in today's money.
                2. Indexed income compared with essential spending and any gap measured.
                3. A plan to cover the gap with linked assets or deferred indexed income written.
                4. Growth assets for discretionary spending and later years sized.
                5. The plan reviewed each year against actual inflation.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written retirement plan covering essential spending with indexed income or linked assets and reviewed each year against actual inflation."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Split retirement spending into essential and discretionary in today's money"
                - "Measure the gap between indexed income and essential spending"
                - "Write how the gap will be covered and by which assets"
                - "Review the plan against the year's inflation @recurring(yearly)"
            - name: Indexation caps on a defined benefit pension
              description: |-
                ## Purpose
                Many defined benefit pensions in payment rise each year by inflation only up to a cap, for example 2.5 or 5 percent, and some parts of the pension may not rise at all. Knowing exactly which slices are capped and by how much shows a retiree how much real income would be lost in a run of high inflation and whether to protect it elsewhere.

                ## Milestones
                1. The scheme's increase rules obtained for each slice of the pension.
                2. Each slice's size and cap recorded.
                3. The real income loss over ten years at 4 and 7 percent inflation estimated.
                4. A decision recorded on whether to build extra protection elsewhere.

                ## Notes
                Ask the scheme administrator for a breakdown of your pension by service period. Different periods often carry different increase rules.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written breakdown of each slice of your defined benefit pension with its increase cap and a ten-year real loss estimate."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the scheme administrator for the increase rules on each slice"
                - "Record each slice's annual amount and cap"
                - "Estimate ten-year real income at 4 and 7 percent inflation"
                - "Decide whether to protect the shortfall from other assets"
            - name: Level versus escalating annuity income comparison
              description: |-
                ## Purpose
                Level annuities start with noticeably more income than ones that rise with inflation, and the crossover in total income received may be well over a decade away. Comparing quotes side by side and working out the breakeven age lets a retiree choose with full sight of what inflation would do to a level income.

                ## Milestones
                1. Level, fixed-escalation and inflation-linked quotes obtained on the same basis.
                2. The starting income difference between them recorded.
                3. The age at which the escalating option catches up in total received calculated.
                4. The real value of the level income at 75, 85 and 95 estimated.
                5. A preference recorded to take into the wider annuity decision.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side comparison of level and inflation-linked annuity quotes with the catch-up age and real value at 85 recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request level and inflation-linked annuity quotes for the same amount"
                - "Record the starting income for each"
                - "Work out the age at which total income received evens out"
                - "Estimate what the level income would buy at 85 in today's money"
            - name: Inflation protection for a surviving partner's income
              description: |-
                ## Purpose
                When one partner dies, a household often loses a state pension and part of a workplace pension while most costs stay the same, and the surviving income may be less well indexed than before. Checking what the survivor would receive and how it rises with prices protects the person most exposed in later life.

                ## Milestones
                1. Each partner's pensions listed with survivor benefits and their uprating rules.
                2. The survivor's income in each case estimated in today's money.
                3. The share of the survivor's income that is indexed calculated.
                4. A plan agreed to close any gap, reviewed each year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written estimate of each partner's survivor income, its indexed share and an agreed plan for any gap."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each pension's survivor benefit and how it is uprated"
                - "Estimate the income each partner would have alone"
                - "Calculate the indexed share of each survivor income"
                - "Revisit the survivor figures together @recurring(yearly)"
            - name: Later-life cost reserve for fast-rising prices
              description: |-
                ## Purpose
                Care, home help, insurance and energy tend to rise faster than headline inflation and to take a bigger share of spending in later life. Setting aside an explicitly protected reserve for these costs, and uprating it each year, means rising prices in the categories that matter most to retirees do not eat into everyday income.

                ## Milestones
                1. Likely later-life cost categories listed with recent local prices.
                2. Their recent price growth compared with headline inflation.
                3. A reserve target set in today's money and held in inflation-aware assets.
                4. The reserve target uprated each year by the actual category inflation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A later-life cost reserve with a target in today's money, a named holding place and a yearly uprating record."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List later-life costs you expect, such as care and home help"
                - "Find recent local prices and how fast they have risen"
                - "Set a reserve target and choose where it is held"
                - "Uprate the reserve target by the year's category inflation @recurring(yearly)"
            - name: Helping a parent whose savings sit in cash
              description: |-
                ## Purpose
                Older relatives often keep large sums in cash and old savings accounts out of habit, and over a long retirement that can halve what the money buys. Helping a parent see the real loss and, if they want, move some into competitive or inflation-linked homes protects their independence while leaving every decision with them.

                ## Milestones
                1. A conversation held about what the savings are for and how soon they might be needed.
                2. Their balances and rates listed with their permission.
                3. The yearly real loss shown in money terms they recognise.
                4. Any changes they choose made in their own name, with records kept.
                5. A check-in agreed for each quarter.

                ## Notes
                Keep decisions with your parent, and suggest regulated advice for larger sums. If they are vulnerable or you hold a power of attorney, follow its rules strictly.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your parent's cash balances reviewed with them, real loss shown in money terms and any changes they chose made in their name."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your parent what their savings are for and when they might need them"
                - "List balances and rates together with their permission"
                - "Show them the yearly real loss in money they recognise"
                - "Check rates and balances with them @recurring(quarterly)"
            - name: Equities as the main inflation defence for younger savers
              description: |-
                ## Purpose
                For someone with decades until retirement, the biggest inflation risk is holding too little in growth assets, not too little in linked bonds. A younger saver who writes down why shares are the main defence, and commits to holding them through spikes, avoids paying for expensive protection they do not yet need.

                ## Milestones
                1. Years to retirement and the current equity share written down.
                2. The real growth needed to reach your goal calculated.
                3. A rule written for when to begin adding linked bonds, by age or years to retirement.
                4. A commitment noted to keep contributions going through inflation scares.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written note stating your equity share, required real growth and the age or date at which linked bonds will be introduced."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your years to retirement and current equity share"
                - "Calculate the real growth your goal requires"
                - "Set the age at which linked bonds will start to be added"
                - "Write a commitment to keep contributing through inflation scares"
            - name: Real-terms ladder to fund a retirement income floor
              description: |-
                ## Purpose
                Building a ladder of inflation-linked bonds, each maturing in the year its money is needed, can fund a fixed real income for ten, twenty or thirty years regardless of what inflation does. It is the closest thing to a do-it-yourself index-linked pension, and it needs care over reinvestment, tax and the years with no bond available.

                ## Milestones
                1. The real income the ladder must provide each year set in today's money.
                2. Available linked bond maturities mapped against the years needed, with gaps marked.
                3. The cost of the ladder at current real yields calculated.
                4. A plan for gap years and coupon reinvestment written.
                5. Each rung's real payout checked yearly against the plan.

                ## Notes
                Gap years are usually filled by buying extra of the nearest maturities. Tax on the inflation uplift varies by country, so check account placement before buying.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A priced ladder of linked bonds covering a stated real income for each year in the plan, with gap years handled and a yearly check recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Set the real income the ladder must fund each year"
                - "Map available linked bond maturities to those years"
                - "Price the ladder at current real yields"
                - "Check each rung's real payout against the plan @recurring(yearly)"
            - name: Stagflation stress test of the whole portfolio
              description: |-
                ## Purpose
                The hardest environment for most portfolios is high inflation combined with weak growth, when shares and nominal bonds can fall together, as in the 1970s and in 2022. Testing your whole portfolio against two or three such scenarios each year shows the real loss you might face and whether your inflation sleeve is large enough to matter.

                ## Milestones
                1. Two or three stagflation scenarios defined with inflation, share and bond moves.
                2. The real portfolio loss estimated under each scenario.
                3. The loss compared with the limit in your investment plan.
                4. Any change to the sleeve or allocation recorded and the test repeated yearly.

                ## Notes
                Start from the **Risk register** template, logging each scenario, its estimated real loss and the agreed response.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly stress test record showing the real portfolio loss under at least two stagflation scenarios and any change agreed."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Define two stagflation scenarios using the 1970s and 2022 as guides"
                - "Apply each scenario's moves to your current holdings"
                - "Compare the real loss with the limit in your plan"
                - "Repeat the stress test with updated holdings @recurring(yearly)"
            - name: Inflation adjustment rule for retirement withdrawals
              description: |-
                ## Purpose
                Withdrawal plans usually raise income by inflation every year, but doing so automatically after a market fall can drain a pot fast. A written rule for when withdrawals rise in full with inflation, when they rise partly and when the rise is skipped gives a retiree a clear, pre-agreed way to protect both spending power and the pot.

                ## Milestones
                1. The current withdrawal amount and how it was uprated last year written down.
                2. A rule drafted for full, partial and skipped inflation rises tied to portfolio performance.
                3. The rule tested against a high-inflation year followed by a market fall.
                4. The rule agreed with any partner and applied at each anniversary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written inflation adjustment rule for withdrawals, tested against a bad scenario and applied at each yearly withdrawal review."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Record this year's withdrawal and last year's increase"
                - "Draft rules for full, partial and skipped inflation rises"
                - "Test the rule against high inflation followed by a market fall"
                - "Apply the rule to the withdrawal at its anniversary @recurring(yearly)"
---

# Inflation Protection Strategy

This area is for anyone whose savings have to buy as much in twenty years as they do today, and above all for retirees living on income that may or may not rise with prices. It starts with foundations (your personal inflation rate, real returns, cash erosion and a map of which incomes and costs are indexed), then the routines that track inflation and the protection you hold, the skills behind linked bonds, real yields and real assets, decisions about funds, debt and cash, the events that test the plan, retirement situations such as pension caps and annuities, and finally specialist work on real-terms ladders and stagflation stress tests.

What repeats is a monthly inflation log, a monthly cash and linked bond check, a quarterly real-return review and rebalance, and a yearly round of uprating checks, contribution rises and stress tests each spring. The Metrics log and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
