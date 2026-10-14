---
id: wealth-investing.bonds-fixed-income
name: Bonds & Fixed Income
description: "A clear job for the bonds you hold, with duration matched to when you need the money, a credit floor, income and maturity tracking, and the skills to read yields, ladders and bond fund factsheets."
category: personal
version: 1.0.0
tags: [wealth-investing, bonds-fixed-income, everyone, retiree, government-bonds, bond-funds, bond-ladders, duration]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - operational-checklist
    - reading-queue
    - remediation-plan
    - risk-register
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Bonds & Fixed Income
          description: "Using government and corporate bonds, gilts, treasuries and bond funds for stability, income and diversification."
          projects:
            - name: Bond and bond fund holdings inventory
              description: |-
                ## Purpose
                Bonds tend to be scattered: a bond fund inside a workplace pension, a gilt or treasury fund in a tax-free account, a cautious multi-asset fund that is 60% bonds, and perhaps a few individual bonds or savings certificates. Until they sit on one list you cannot tell how much you really hold, how long it is lent for or how much of it is corporate debt. An inventory with value, type and duration for each holding is the starting point for every other project here.

                ## Milestones
                1. Every bond fund, individual bond and bond-heavy mixed fund listed with its account and owner.
                2. The bond portion of each mixed or target-date fund estimated from its latest factsheet.
                3. Each holding tagged as government, corporate, inflation-linked or mixed, with its value and the date of that value.
                4. A single total for household bond exposure written at the top of the list.

                ## Notes
                Count the bond share of multi-asset and target-date funds. They are often the largest bond holding people forget they own.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated list of every bond holding in the household, including the bond share of mixed funds, with a single total at the top."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every account that could hold a bond fund, gilt, treasury or savings bond"
                - "Download the latest factsheet for each bond fund and mixed fund"
                - "Estimate the bond portion of each mixed or target-date fund"
                - "Add up total household bond exposure and date the figure"
            - name: Written job for the bonds you hold
              description: |-
                ## Purpose
                Ask three people why they own bonds and you will hear three answers: to soften share market falls, to produce income, or to hold money needed on a known date. Each job points to a different kind of bond, so a holding bought for one job is often wrong for another. One paragraph naming the main job, and a second if there is one, settles most later choices about duration, credit quality and currency.

                ## Milestones
                1. The main job for your bonds chosen: ballast in a crash, steady income, a known future spend or diversification.
                2. A second job named, or a note that there is none.
                3. The amount of money each job covers written beside it.
                4. The statement saved where you keep your investment plan.

                ## Notes
                How much of the portfolio sits in bonds is set in your overall allocation. This project decides what the bonds you already hold are for.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-paragraph statement naming the main job of your bonds and the amount it covers, saved with your investment plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down why you first bought each bond holding"
                - "Choose the single main job your bonds are meant to do"
                - "Note the amount and date of any spending the bonds must cover"
                - "Save the statement beside your investment plan"
            - name: Bond fund factsheet decoder
              description: |-
                ## Purpose
                Bond factsheets pack the most useful facts into five small numbers: duration, yield to maturity, the credit rating breakdown, average maturity and the ongoing charge. Learning to read them turns a page of jargon into a quick judgement on how far the fund could fall if rates rise and what it is likely to return if held. Practise on the funds you already own so the knowledge is useful on day one.

                ## Milestones
                1. Duration, yield to maturity, credit breakdown, average maturity and ongoing charge located on one factsheet.
                2. Each figure explained in one plain sentence in your own words.
                3. The same five figures recorded for every bond fund you hold.
                4. One figure you could not interpret put as a question to the provider.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The five key figures, each with a plain-language note, recorded for every bond fund you hold."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open the factsheet of your largest bond fund"
                - "Find its duration, yield to maturity, credit breakdown, average maturity and charge"
                - "Write one sentence on what each figure means for your money"
                - "Record the five figures for every other bond fund you hold"
            - name: Matching bond maturity to when you need the money
              description: |-
                ## Purpose
                A long-dated bond fund is a poor home for money needed in eighteen months, because a rise in rates can leave it down just when you have to sell. Lining up each pot of bond money against the date it will be spent, and comparing that with the duration of what holds it, shows exactly where the mismatch is. The fix is often a single swap to something shorter or longer.

                ## Milestones
                1. Each bond holding matched to the earliest date its money might be spent.
                2. The duration of every holding set beside that date.
                3. Any holding whose duration runs well past its spending date flagged.
                4. A keep, shorten or move decision recorded for each flagged holding.

                ## Notes
                A common rule of thumb is that a duration close to your holding period limits the damage from rate changes. If the sums are large, check the fit with a regulated adviser.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every bond holding has a spending date and duration recorded side by side, with a written decision on each mismatch."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the earliest date you might spend each pot of bond money"
                - "Note the duration of each holding from its factsheet"
                - "Flag holdings whose duration runs years past their spending date"
                - "Record a keep, shorten or move decision for each flagged holding"
            - name: Credit quality floor for your bond holdings
              description: |-
                ## Purpose
                Corporate and high-yield bonds pay more because some issuers fail to pay, and in a share market crash they often fall alongside shares, the opposite of what most people hold bonds for. Setting a minimum rating for the part of your bonds meant to steady the portfolio stops a reach for extra yield from quietly changing what you own. It takes an evening and protects against the most common bond regret.

                ## Milestones
                1. The credit rating breakdown of each holding recorded from its factsheet.
                2. A minimum average rating written for the stabilising part of your bonds.
                3. Holdings that fall below the floor listed with a plan for each.
                4. The floor added to your written investment plan.

                ## Notes
                Investment grade usually means BBB or above on the main agencies' scales. Below that, bonds tend to behave more like shares when markets fall.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written credit floor for the stabilising bonds, with every current holding checked against it and exceptions listed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy the credit rating breakdown from each bond fund factsheet"
                - "Write the minimum rating for bonds meant to steady the portfolio"
                - "List any holding below the floor and what you will do about it"
                - "Add the floor to your written investment plan"
            - name: Interest rate stress test of your bond holdings
              description: |-
                ## Purpose
                In 2022 many long-dated government bond funds fell by a fifth or more as rates rose quickly, and the people least prepared were those who believed bonds could not lose money. Multiplying each fund's duration by a one, two and three point rise in yields gives a rough loss in money terms. Seeing that figure in advance turns a future shock into a known risk.

                ## Milestones
                1. The duration and value of each holding listed together.
                2. Approximate losses calculated for yield rises of one, two and three points.
                3. The worst-case figure in money compared with what you could tolerate.
                4. Any holding with an unacceptable stress loss flagged for the maturity matching project.

                ## Notes
                Duration multiplied by the yield change is a good approximation for small moves. For large moves, convexity makes the real loss on ordinary bonds slightly smaller than the estimate.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table showing the approximate money loss on every bond holding for yield rises of one, two and three points, with a written verdict."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each bond holding with its value and duration"
                - "Multiply duration by one, two and three points to estimate each loss"
                - "Total the losses and compare them with what you could live with"
                - "Rerun the stress test with current durations and values @recurring(yearly)"
            - name: Fixed income holdings and yield log
              description: |-
                ## Purpose
                Yields and durations change every month, and a bond fund bought at a 1% yield is a very different holding when the same fund yields 5%. A simple log of value, yield to maturity and duration for each holding shows what your bonds are likely to earn from here. It also makes later decisions about extending or shortening easy to justify with numbers.

                ## Milestones
                1. A log with columns for holding, value, yield to maturity, duration and date.
                2. The first full set of figures entered from current factsheets.
                3. A value-weighted average yield and duration for the whole bond sleeve calculated.
                4. Six monthly entries completed.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of entries in a bond log showing value, yield and duration per holding, plus weighted averages for the sleeve."
                cadence: rolling
              tasks:
                - "Create a bond log from the metrics log template"
                - "Enter today's value, yield to maturity and duration for each holding"
                - "Calculate the value-weighted average yield and duration"
                - "Update each holding's value, yield and duration in the log @recurring(monthly:28)"
            - name: Currency hedging decision for overseas bond funds
              description: |-
                ## Purpose
                Overseas bonds held without a currency hedge carry exchange rate swings that are often bigger than the bond returns themselves, turning a steady asset into a volatile one. Most global bond index funds come in hedged and unhedged versions with a small cost difference. Choosing deliberately, and checking which version you actually own, removes a risk many bond holders do not know they carry.

                ## Milestones
                1. Each overseas bond holding identified as hedged or unhedged to your home currency.
                2. The volatility of hedged and unhedged versions compared from factsheet data.
                3. A rule written for hedging overseas bonds in the stabilising part of the portfolio.
                4. Any holding in the wrong version listed for a switch.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every overseas bond holding is labelled hedged or unhedged and checked against a written hedging rule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the name and factsheet of each overseas bond fund for a currency hedge"
                - "Compare the volatility of the hedged and unhedged share classes"
                - "Write your rule for currency hedging overseas bonds"
                - "List any holding to switch to the other share class"
            - name: Bond funds versus individual bonds
              description: |-
                ## Purpose
                Bond funds never mature, so their value moves with rates indefinitely, while an individual bond held to maturity returns its face value on a known date if the issuer pays. Funds win on diversification and ease; individual government bonds win on certainty of outcome and, in some tax systems, on tax. Comparing the two for your sums and needs gives a choice you can explain rather than a platform default.

                ## Milestones
                1. Your needs written as criteria: certainty of date, diversification, effort, tax and minimum sizes.
                2. A bond fund and an individual bond option scored against those criteria.
                3. Dealing costs and minimum purchase sizes confirmed on your platform.
                4. A choice recorded, with the reason, for each part of your bond money.

                ## Notes
                Start from the **Purchase decision** template. For corporate debt, a handful of individual bonds is far less diversified than a fund holding hundreds of issuers.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice between funds and individual bonds for each part of your bond money, scored against at least five criteria."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the criteria that matter most for your bond money"
                - "Score a bond fund and an individual bond option against them"
                - "Check your platform's dealing charge and minimum size for individual bonds"
                - "Record the choice and reason in a purchase decision note"
            - name: Platform check for buying individual government bonds
              description: |-
                ## Purpose
                Not every investment platform lets you buy individual gilts, treasuries or other government bonds, and those that do vary widely in dealing charges, minimum sizes, how prices are shown and whether you can buy at auction. Checking the platforms you already use avoids opening a new account for nothing. It also tells you the real all-in cost of a trade before the first purchase.

                ## Milestones
                1. Each of your platforms checked for access to individual government bonds.
                2. Dealing charges, minimum purchase and price display recorded for each.
                3. Access to government auctions or direct retail schemes noted.
                4. One platform chosen for individual bond purchases.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of your platforms for individual government bond dealing, with one chosen and its costs recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search each platform's help pages for individual gilt or treasury dealing"
                - "Record each platform's dealing charge and minimum purchase size"
                - "Check whether prices are shown clean or with accrued interest"
                - "Choose the platform you will use for individual bonds"
            - name: Monthly coupon and distribution tracking
              description: |-
                ## Purpose
                Bond income arrives in many shapes: half-yearly coupons on individual bonds, monthly or quarterly distributions from income units, and nothing visible at all from accumulation units. Recording each payment as it lands shows the real cash yield, catches missed or reduced payments early and feeds straight into the yearly tax pack.

                ## Milestones
                1. Every expected coupon and distribution listed with its usual month.
                2. Each month's payments recorded with date, amount and account.
                3. Any missing or reduced payment queried within a month.
                4. Twelve months of income totalled per holding.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive months of bond income recorded per holding, with every missed or reduced payment followed up."
                cadence: rolling
              tasks:
                - "List each bond holding with its payment frequency and usual months"
                - "Note which holdings are accumulation units that pay nothing out"
                - "Record the month's coupons and distributions by holding @recurring(monthly:12)"
                - "Query any payment that is missing or lower than expected"
            - name: Quarterly bond fund health check
              description: |-
                ## Purpose
                Funds drift: duration lengthens as governments issue longer debt, credit quality slips, and a provider can change a fund's index or manager with little notice. Four short checks a year against the figures you recorded at the start catch these changes before they matter, without encouraging the constant tinkering that costs money.

                ## Milestones
                1. A one-page checklist covering the five factsheet figures and any manager or index change.
                2. Drift thresholds set for duration and credit quality.
                3. The first quarterly check completed against your recorded baseline.
                4. Four quarterly checks completed in a year, each with decisions noted.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly health checks in a year, each comparing the five factsheet figures with the baseline and recording a decision."
                cadence: rolling
              tasks:
                - "Build a quarterly checklist from the operational checklist template"
                - "Set a drift threshold for duration and for credit quality"
                - "Compare each fund's latest factsheet with its baseline figures @recurring(quarterly)"
                - "Record a keep or review decision for any fund past a threshold"
            - name: Bond maturity calendar
              description: |-
                ## Purpose
                Individual bonds, fixed-term savings bonds and target-maturity funds all end on a set date, and money that lands in a platform's cash account can sit there earning little for months. A calendar of every maturity, checked monthly for anything due in the next ninety days, gives time to decide where the money goes before it arrives.

                ## Milestones
                1. Every holding with a maturity date listed in date order with its face value.
                2. Maturities for the next three years visible on one page.
                3. A ninety-day lookahead checked each month.
                4. Every maturity in the past year placed by plan rather than left idle.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated maturity calendar checked monthly, with no matured proceeds left idle for more than a month beyond the plan."
                cadence: rolling
              tasks:
                - "List every bond and fixed-term holding with its maturity date and face value"
                - "Add each maturity to your calendar with a reminder 60 days before"
                - "Check for maturities due in the next 90 days @recurring(monthly:3)"
                - "Note where each upcoming maturity's money is meant to go"
            - name: Coupon and maturity reinvestment rules
              description: |-
                ## Purpose
                Without a rule, bond income tends to pile up as cash on the platform or gets spent by accident. Two or three written rules, such as reinvesting coupons into the shortest rung of a ladder or sending them to whichever holding is below target, make the decision once instead of every time a payment lands.

                ## Milestones
                1. Income or accumulation units chosen for each fund to suit the rule.
                2. A written rule for what happens to coupons and distributions.
                3. A written rule for what happens to maturing bonds.
                4. Platform settings for reinvestment or payout changed to match.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written reinvestment rules for coupons and maturities exist, and platform settings match them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether coupons should be reinvested, paid out or redirected"
                - "Write the rule for money from maturing bonds"
                - "Switch fund unit types or platform settings to match the rules"
                - "Reread the rules and confirm they still fit your plans @recurring(yearly)"
            - name: Monthly yield curve snapshot
              description: |-
                ## Purpose
                The yields on two, ten and thirty-year government bonds tell you what new bond money will earn and how much extra you are paid for lending longer. Writing the three numbers down once a month builds a feel for whether yields are high or low by recent standards, without tipping into trading on predictions.

                ## Milestones
                1. A reliable free source for your government's yield curve chosen.
                2. Two, ten and thirty-year yields recorded monthly for six months.
                3. The gap between two and ten-year yields noted each time.
                4. A one-line note on what the shape means for any planned purchase.

                ## Notes
                This is context for buying and reinvesting. Rate forecasts are unreliable even for professionals, so do not let the snapshot drive trading.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly snapshots of two, ten and thirty-year government yields, each with the curve slope noted."
                cadence: rolling
              tasks:
                - "Choose a free source for your government's bond yields"
                - "Record the two, ten and thirty-year yields and the slope @recurring(monthly:20)"
                - "Note what the curve means for any bond purchase planned this quarter"
            - name: Credit watch for individual corporate bonds
              description: |-
                ## Purpose
                Holders of individual corporate bonds carry each issuer's risk directly, and trouble usually shows up in the bond price weeks before it reaches the news. A quarterly look at each issuer's rating, latest results and bond price gives early warning while there are still choices, such as selling or holding to maturity.

                ## Milestones
                1. Each issuer listed with its current rating and the date checked.
                2. A review trigger set, such as a downgrade or a price drop of ten points.
                3. A quarterly check completed for every issuer.
                4. Any triggered review written up with the decision taken.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every corporate bond issuer is checked each quarter for rating and price, with any triggered review recorded."
                cadence: rolling
              tasks:
                - "List every corporate bond you own with issuer, rating and maturity"
                - "Write the trigger that will prompt a review of a bond"
                - "Check each issuer's rating, latest results and bond price @recurring(quarterly)"
                - "Write up any triggered review and the decision"
            - name: Annual bond income tax pack
              description: |-
                ## Purpose
                Tax on bond income often works differently from tax on dividends: distributions from bond funds may count as interest, and buying or selling between coupon dates can create accrued income adjustments in some tax systems. Gathering consolidated tax certificates, coupon records and trade details once a year makes the return straightforward and avoids paying tax twice on the same income.

                ## Milestones
                1. Consolidated tax certificates downloaded from every platform holding bonds outside tax-free accounts.
                2. Coupons and distributions totalled and reconciled to your monthly record.
                3. Accrued interest bought or sold during the year noted.
                4. A summary handed to whoever prepares the return, with questions listed.

                ## Notes
                Rules on bond interest, accrued income and gains on government bonds vary by country. Check the tax authority's guidance or ask a tax adviser which apply to you.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A bond tax pack with certificates, reconciled income and accrued interest notes is finished before the tax return deadline."
                cadence: cyclic
              tasks:
                - "Download the consolidated tax certificate from each platform @recurring(yearly)"
                - "Reconcile the certificates with your monthly income record"
                - "Note any accrued interest paid or received on bond trades"
                - "Send the summary and questions to whoever files your return"
            - name: Yearly bond sleeve review
              description: |-
                ## Purpose
                Once a year the bonds deserve a fresh look as a whole: whether their written job still holds, whether durations still match spending dates, and whether today's yields make a different mix sensible. An hour with last year's log and this year's figures is usually enough, and most years the right answer is to change nothing.

                ## Milestones
                1. The written job for your bonds reread and confirmed or rewritten.
                2. Duration, credit quality and currency hedging checked against your rules.
                3. Next year's maturities and known spending set side by side.
                4. Changes for the coming year, if any, written as a short list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated yearly review note confirming or updating the bonds' job, rules and planned changes."
                cadence: cyclic
              tasks:
                - "Book an hour for the yearly bond review @recurring(yearly)"
                - "Compare this year's log figures with last year's"
                - "Check every holding against your duration, credit and hedging rules"
                - "Write the short list of changes for the coming year"
            - name: Bond fund charges and dealing spread check
              description: |-
                ## Purpose
                With bond yields sometimes below 2%, a fund charge of 0.6% can take a third of the return, and the spread on an individual corporate bond can exceed a year's coupon. A yearly comparison of each fund's ongoing charge with the cheapest similar tracker, and of the spreads you actually paid, shows where cost is eating your income.

                ## Milestones
                1. The ongoing charge of every bond fund recorded.
                2. A cheaper similar fund identified for each, where one exists.
                3. Spreads paid on individual bond trades during the year estimated.
                4. Any fund costing more than twice its cheapest equivalent flagged for replacement.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A yearly table of bond fund charges against their cheapest equivalents, with any fund costing over double flagged."
                cadence: cyclic
              tasks:
                - "Record each bond fund's ongoing charge from its factsheet"
                - "Find the cheapest fund tracking a similar bond index for each"
                - "Compare last year's bond trade prices with the mid price to estimate spread"
                - "Repeat the charge comparison for every bond fund @recurring(yearly)"
            - name: How bond prices and yields move against each other
              description: |-
                ## Purpose
                The single most useful fact about bonds is that when market yields rise, existing bond prices fall, and the longer the bond the bigger the fall. Working through one example with real numbers, a ten-year bond paying 3% when new bonds pay 4%, makes every later headline about rates readable. An evening here prevents most of the bond surprises people describe afterwards.

                ## Milestones
                1. A worked example of a ten-year bond's price after a one point rise in yields.
                2. The same example repeated for a two-year and a thirty-year bond.
                3. The difference between a paper loss and a loss at maturity written in your own words.
                4. Two reliable explanations saved for later reference.

                ## Notes
                Start from the **Reading queue** template to collect the sources you use across the learning projects in this area.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Worked price examples for two, ten and thirty-year bonds after a one point yield rise, written up in your own words."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a beginner explanation of why bond prices fall when yields rise"
                - "Work out a ten-year bond's price after a one point rise in yields"
                - "Repeat the calculation for a two-year and a thirty-year bond"
                - "Write why a bond held to maturity still repays its face value"
            - name: Running yield, distribution yield and yield to maturity
              description: |-
                ## Purpose
                Brokers and fund providers quote several yields, and the biggest one on the page is often the least useful. Running yield ignores any gain or loss to maturity, distribution yield looks backwards at past payments, and yield to maturity is the best single guide to what a bond or fund is likely to return if held. Knowing which is which stops you choosing a fund for a headline number.

                ## Milestones
                1. Each yield defined in one sentence.
                2. All three found on the factsheet of a fund you own.
                3. The gap between them explained for that fund.
                4. Yield to maturity, or the nearest forward-looking figure, set as the number you compare funds by.

                ## Notes
                US funds also publish a standardised 30-day SEC yield. Use whichever forward-looking, standardised figure your market provides.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three yield definitions written and applied to one of your funds, with yield to maturity set as your comparison figure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one-sentence definitions of running, distribution and maturity yield"
                - "Find all three yields on one of your bond fund factsheets"
                - "Explain in two sentences why they differ for that fund"
                - "Use yield to maturity for every fund comparison from now on"
            - name: Duration and convexity in plain numbers
              description: |-
                ## Purpose
                Duration measures a bond's sensitivity to interest rates in years: a duration of eight means roughly an 8% fall for a one point rise in yields. Convexity explains why that estimate is a little too gloomy for large moves. Learning both with your own holdings makes the stress test, maturity matching and ladder projects far easier to do well.

                ## Milestones
                1. Modified duration explained in your own words with one numerical example.
                2. Macaulay and modified duration told apart in a sentence.
                3. Your largest holding's duration used to estimate a gain and a loss.
                4. Convexity described in a sentence, with why it matters most for long bonds.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explaining duration and convexity, with worked examples from your own largest bond holding."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a plain explanation of modified and Macaulay duration"
                - "Estimate a gain and a loss on your largest holding for a one point move"
                - "Write a sentence on why convexity matters most for long bonds"
                - "Ask the agent to check your worked examples for arithmetic errors"
            - name: Reading the government yield curve
              description: |-
                ## Purpose
                The yield curve plots what a government pays to borrow for three months up to thirty years, and its shape shows whether lending longer is currently rewarded. An inverted curve, where short bonds pay more than long ones, has often come before recessions and changes the case for short versus long bonds. Learning to read it gives context to buying decisions without pretending to forecast.

                ## Milestones
                1. Normal, flat and inverted curves recognised on a chart.
                2. Today's curve for your country saved with the date.
                3. Term premium explained in one sentence.
                4. Two past periods of inversion looked up and what followed noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dated note describing today's yield curve shape, explaining term premium and summarising two past inversions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a chart of your government's current yield curve"
                - "Label it normal, flat or inverted and save it with the date"
                - "Look up two past inversions and what followed each"
                - "Write a sentence on what the current shape means for new bond money"
            - name: Credit ratings, spreads and default history
              description: |-
                ## Purpose
                A credit rating is an agency's opinion of default risk, and the spread is the extra yield the market demands over a government bond of the same length. Knowing long-run default rates by rating, and how spreads blew out in 2008 and 2020, tells you what corporate and high-yield bonds really pay you for and how they behave in a crisis.

                ## Milestones
                1. The rating scales of the main agencies laid out side by side.
                2. Long-run default rates for investment grade and high yield noted from a published study.
                3. Spread changes during two past crises recorded.
                4. A paragraph written on what you are being paid for when you hold credit.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note comparing rating scales, long-run default rates and crisis spread moves, ending in a paragraph on credit risk."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Lay out the rating scales of the three main agencies side by side"
                - "Find a published long-run default study by rating band"
                - "Record how corporate bond spreads moved in 2008 and early 2020"
                - "Write a paragraph on what extra yield on credit is paying you for"
            - name: Clean price, dirty price and accrued interest
              description: |-
                ## Purpose
                Individual bonds are quoted at a clean price, but you pay the dirty price, which adds the interest built up since the last coupon. First-time buyers are often surprised by a bill larger than the quote, and in some tax systems the accrued interest has its own treatment. Understanding the mechanics before the first trade means the contract note makes sense when it arrives.

                ## Milestones
                1. Clean and dirty price defined with one example.
                2. Accrued interest calculated for a real bond on a chosen date.
                3. A sample contract note read line by line.
                4. The ex-dividend period for your government's bonds understood.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Accrued interest correctly calculated for one real bond, and a sample contract note annotated line by line."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read how clean and dirty bond prices are quoted in your market"
                - "Calculate the accrued interest on a real bond for today's date"
                - "Annotate a sample contract note line by line"
                - "Check how the ex-dividend period works for your government's bonds"
            - name: How bond index funds are built
              description: |-
                ## Purpose
                A bond index fund holds thousands of bonds, sells them as they shorten past a cut-off and buys newer, longer ones, so its duration stays roughly constant and it never matures. Bond indices are also weighted by how much debt each issuer has, which gives the most indebted borrowers the largest weight. Knowing these rules explains why a fund behaves differently from a bond held to maturity.

                ## Milestones
                1. The index rules for one of your funds read: maturity bands, rating limits and weighting.
                2. The fund's rebalancing and cut-off rules summarised.
                3. Debt weighting and its consequence explained in one sentence.
                4. The difference between a fund and a held bond after a rate rise written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of the index rules behind one of your bond funds, covering maturity bands, rating limits and debt weighting."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the index methodology document for one of your bond funds"
                - "Note its maturity band, rating limit and weighting rule"
                - "Write why the fund keeps a steady duration and never matures"
                - "Explain debt weighting and its downside in one sentence"
            - name: Inflation-linked bond mechanics before you buy
              description: |-
                ## Purpose
                Inflation-linked bonds such as index-linked gilts or TIPS protect purchasing power only if held to maturity; in between they can fall sharply when real yields rise, as long-dated linkers did in 2022. Real yield, indexation lag and duration all matter, and long linker funds can be among the most volatile bonds available. Learning the mechanics first prevents buying them for the wrong reason.

                ## Milestones
                1. Real yield and breakeven inflation defined with current figures.
                2. The indexation lag for your government's linkers looked up.
                3. The duration of a linker fund you hold or are considering recorded.
                4. A note written on when a linker does and does not protect you.

                ## Notes
                How much inflation protection your whole plan needs belongs in your inflation strategy. This project is only about understanding the instrument.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note covering real yield, breakeven inflation, indexation lag and duration for a linker you hold or are considering."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up current real yields and breakeven inflation for your government's linkers"
                - "Find the indexation lag those bonds use"
                - "Record the duration of any linker fund you hold or are considering"
                - "Write when a linker protects you and when it does not"
            - name: Short-dated government bond ladder
              description: |-
                ## Purpose
                Buying individual government bonds that mature one after another, say each year for five years, gives known sums on known dates and removes most interest rate risk if each rung is held to maturity. A ladder suits money with a predictable use, and each maturing rung can be spent or rolled into a new longest rung. Building one is a contained project with a clear finish line.

                ## Milestones
                1. The number of rungs, the gap between them and the amount per rung decided.
                2. A government bond identified for each rung date from the list of bonds in issue.
                3. All rungs bought and recorded with maturity, coupon and price paid.
                4. A rule written for what happens when each rung matures.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ladder of government bonds with one rung maturing in each planned year, recorded with maturity, coupon and price."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Decide the number of rungs and the amount in each"
                - "Pick a government bond maturing close to each rung date"
                - "Buy each rung and record its maturity, coupon and price"
                - "Roll the maturing rung into a new longest rung or spend it by plan @recurring(yearly)"
            - name: Low-coupon bonds for a taxable account
              description: |-
                ## Purpose
                Where gains on government bonds are untaxed but coupons are taxed as income, as with gilts in the UK, a bond trading below face value with a small coupon delivers most of its return as a tax-free gain. For higher-rate taxpayers holding bonds outside tax-free accounts the difference can be substantial. Comparing after-tax yields lets you choose with numbers rather than headlines.

                ## Milestones
                1. The tax treatment of coupons and gains on government bonds in your country confirmed.
                2. Gross and after-tax yields compared for a low-coupon and a high-coupon bond of similar maturity.
                3. Your marginal tax rate applied to the comparison.
                4. A decision recorded on whether low-coupon bonds suit your taxable holdings.

                ## Notes
                Tax rules differ between countries and change over time. Confirm the treatment with the tax authority's guidance or a tax adviser before relying on it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An after-tax yield comparison of a low and a high-coupon government bond at your tax rate, with a written decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm how coupons and gains on government bonds are taxed where you live"
                - "Find a low-coupon and a high-coupon bond of similar maturity"
                - "Calculate the after-tax yield on each at your marginal rate"
                - "Record whether low-coupon bonds suit your taxable money"
            - name: Target-maturity bond funds versus rolling bond funds
              description: |-
                ## Purpose
                Target-maturity bond funds hold bonds that all mature in one year and then return the cash, behaving much like a diversified individual bond. They suit a known future spend better than a standard fund whose duration never shrinks. Comparing the two for one specific goal shows whether the newer product is worth its slightly higher cost.

                ## Milestones
                1. Target-maturity funds on your platform listed by maturity year.
                2. One compared with a standard fund on yield, cost and duration.
                3. The behaviour of each after a rate rise described for your goal date.
                4. A choice recorded for that goal.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of one target-maturity fund and one rolling fund for a named goal, ending in a choice."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List target-maturity bond funds on your platform by maturity year"
                - "Compare one with a standard bond fund on yield, cost and duration"
                - "Describe how each would behave after a rate rise before your goal date"
                - "Write down which suits the goal and why"
            - name: Global aggregate versus domestic government bond fund
              description: |-
                ## Purpose
                Global aggregate bond funds spread money across thousands of government and corporate bonds in many countries, while a domestic government fund holds only your own government's debt. The global fund is more diversified; the domestic one is simpler, often cheaper and matches the currency you spend. Weighing the two for the stabilising part of your bonds gives you a deliberate core holding.

                ## Milestones
                1. One fund of each kind shortlisted with charge, yield, duration and currency hedging.
                2. Their returns in two recent stress periods compared.
                3. The share of corporate debt inside the global fund noted.
                4. A core bond fund chosen and the reason written.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A core bond holding chosen between a global aggregate and a domestic government fund, with the comparison and reason recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist one global aggregate and one domestic government bond fund"
                - "Compare their charge, yield, duration and hedging"
                - "Look up how each did during the 2020 and 2022 market falls"
                - "Record which you will use as your core bond fund"
            - name: Money market fund versus short-dated bond fund
              description: |-
                ## Purpose
                Money needed in the next one to three years often sits in a short bond fund when a money market fund, holding very short loans, would carry almost no rate risk. When short-term rates are high the yield gap between them can be tiny. Comparing the two for your near-term pot shows which gives the better trade between yield and the chance of a small loss.

                ## Milestones
                1. The amount and timing of your near-term money confirmed.
                2. A money market fund and a short bond fund compared on yield, duration and charge.
                3. The worst calendar-year return of each found.
                4. A home chosen for the near-term money.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A choice of money market or short bond fund for near-term money, based on yield, duration, charge and worst-year return."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the amount and date of money you may need within three years"
                - "Compare a money market fund and a short bond fund side by side"
                - "Find the worst calendar-year return of each"
                - "Choose and record the home for the near-term money"
            - name: Replacing an expensive active bond fund
              description: |-
                ## Purpose
                Many people hold an active bond fund chosen years ago, often charging 0.5% to 1% a year, when a tracker covering similar bonds costs a fraction of that. Bond managers find it harder to beat their index after costs than equity managers, because the spread of returns is narrower. Switching carefully, inside a tax-free account where possible, can add steady return for no extra risk.

                ## Milestones
                1. The active fund's charge, duration, credit mix and five-year record against its index recorded.
                2. A lower-cost fund with similar duration and credit mix identified.
                3. Tax consequences of switching outside a tax-free account checked.
                4. The switch completed, or a reasoned decision to keep the fund recorded.

                ## Notes
                Start from the **Remediation plan** template. Match duration and credit quality, or the switch quietly changes your risk.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The active bond fund is replaced by a cheaper fund of similar duration and credit mix, or a written reason for keeping it exists."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record the active fund's charge, duration and credit mix"
                - "Compare its five-year return with its benchmark index"
                - "Find a cheaper fund with matching duration and credit profile"
                - "Check the tax position before switching outside a tax-free account"
                - "Complete the switch or write down why you are keeping the fund"
            - name: Floating-rate notes versus fixed-rate bonds
              description: |-
                ## Purpose
                Floating-rate notes reset their coupon every few months to a short-term rate plus a margin, so their price barely moves when rates change, while fixed-rate bonds lock in a coupon and carry duration risk. Most floating-rate funds hold corporate or loan debt, so the rate risk removed is often swapped for credit risk. Comparing the two shows whether a floating-rate holding solves a problem you actually have.

                ## Milestones
                1. How floating-rate coupons reset explained with one example.
                2. The credit quality of available floating-rate funds compared with your credit floor.
                3. Their returns in a rising-rate year and a credit crisis year looked up.
                4. A decision recorded on whether floating-rate notes have a place in your bonds.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on floating-rate notes, based on their credit quality and their returns in a rising-rate year and a crisis year."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read how a floating-rate note resets its coupon"
                - "Check the credit quality of two floating-rate funds against your floor"
                - "Look up their returns in 2008 and in 2022"
                - "Record whether floating-rate notes have a place in your bonds"
            - name: Government savings products versus marketable bonds
              description: |-
                ## Purpose
                Many governments sell savings products directly to households, such as fixed-term savings certificates, prize-draw bonds or inflation-indexed savings bonds, which cannot fall in price but often cap how much you can hold and lock money away. Marketable government bonds can be sold any day but their price moves. Comparing the two for one pot of money shows which gives the better mix of return, access and certainty.

                ## Milestones
                1. The government savings products open to you listed with limits, terms and rates.
                2. One compared with a marketable bond of similar term on after-tax return.
                3. Access rules and early exit penalties noted.
                4. A choice made for one named pot of money.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of a government savings product and a marketable bond of similar term, with a choice made for a named pot."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the government savings products open to you with their limits"
                - "Compare one with a marketable bond of similar term after tax"
                - "Note the access rules and penalties for cashing in early"
                - "Choose which suits the pot of money you have in mind"
            - name: Which account each bond holding sits in
              description: |-
                ## Purpose
                Interest from bonds is usually taxed as income, often at a higher rate than gains on shares, so where bonds sit matters more than for most holdings. Moving bonds into tax-free or tax-deferred accounts and keeping shares outside, where allowances permit, can lift after-tax return without changing the overall mix. The work is a one-off map plus a few switches.

                ## Milestones
                1. Each bond holding mapped to its account type.
                2. Bond holdings in taxable accounts listed with their yearly taxable income.
                3. Any swap with shares inside a tax-free account worked out.
                4. Swaps completed or scheduled for the next allowance year.

                ## Notes
                Placement changes tax, not risk. Keep the household's total bond share the same when you swap.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A map of every bond holding by account type, with swaps that reduce taxable bond income completed or scheduled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Map each bond holding to its account type"
                - "Estimate the yearly taxable income from bonds in taxable accounts"
                - "Work out a swap with shares held inside a tax-free account"
                - "Complete the swap or schedule it for the next allowance year"
            - name: Responding to a sharp fall in your bond funds
              description: |-
                ## Purpose
                Seeing a double-digit fall in a fund sold as low risk is unsettling, and selling at the bottom turns a temporary paper loss into a permanent one. The same rise in yields that hurts prices also lifts the fund's future return. A response note written now and opened when it happens separates a broken plan from a painful but expected move.

                ## Milestones
                1. A one-page response note written covering what fell, why, and what the new yield implies.
                2. The loss compared with your earlier stress test figures.
                3. A rule written that selling is justified only if the bonds' job or your horizon has changed.
                4. The note reread and updated after the next large bond market move.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written response note for a sharp bond fund fall, linked to your stress test and stating when selling would be justified."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft a one-page bond fall response note from your stress test"
                - "Add how the higher yield after a fall changes the fund's expected return"
                - "Write the conditions under which you would sell"
                - "Save the note where you will find it during a market fall"
            - name: Reinvest-or-spend decision on a maturing bond
              description: |-
                ## Purpose
                When a bond or fixed-term holding matures, a lump sum lands in cash and the easy path is to leave it there. Yields at that moment may be far higher or lower than when you bought, and your needs may have changed since. A short decision note, prepared a month before maturity, settles where the money goes on the day.

                ## Milestones
                1. Maturity date, amount and receiving account confirmed a month ahead.
                2. Current yields for a replacement compared with any spending needs.
                3. A written choice: reinvest at the same term, extend, shorten or spend.
                4. The money placed within a week of maturity.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The proceeds of a maturing bond are placed within a week, following a decision written before the maturity date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the maturity date, amount and receiving account"
                - "Check current yields for a replacement of the same term"
                - "Write your choice to reinvest, extend, shorten or spend"
                - "Place the money within a week of the maturity date"
            - name: First purchase of an individual government bond
              description: |-
                ## Purpose
                Buying a single gilt, treasury or other government bond for the first time has a few traps: choosing by coupon instead of yield to maturity, missing the accrued interest on the bill, or placing an order at a stale price. Treating the first purchase as a small rehearsal with a modest amount makes the next, larger purchase routine.

                ## Milestones
                1. One bond chosen by maturity date and yield to maturity, not coupon.
                2. A limit price set from the live quote rather than yesterday's close.
                3. The trade placed for a modest amount.
                4. The contract note checked for clean price, accrued interest and total cost.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One government bond bought, with yield to maturity, accrued interest and total cost checked against the contract note."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a bond by its maturity date and yield to maturity"
                - "Set a limit price from the live quote on your platform"
                - "Place the trade for a modest first amount"
                - "Check the contract note for clean price, accrued interest and total"
            - name: Bond fund closure, merger or index change notice
              description: |-
                ## Purpose
                Fund providers merge, close or change the index of bond funds more often than people expect, and the letter usually allows a few weeks before a default switch happens. A new index can change duration or credit quality overnight. Handling the notice deliberately stops you drifting into a fund you would never have chosen.

                ## Milestones
                1. The notice read and the deadline for action written in your calendar.
                2. The new fund or index compared with the old on duration, credit and charge.
                3. A choice made: accept, switch to an alternative or sell.
                4. The bond log and inventory updated with the outcome.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A bond fund change notice answered before its deadline, with the new fund compared and the choice recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the notice's action deadline in your calendar"
                - "Compare the new fund or index with the old on duration, credit and charge"
                - "Choose to accept, switch or sell before the deadline"
                - "Update the bond log and inventory with the outcome"
            - name: Issuer downgrade or missed coupon on a bond you hold
              description: |-
                ## Purpose
                Downgrades below investment grade, a missed coupon or news of a restructuring change what a corporate bond is worth and what your options are. Bondholders are sometimes asked to vote on new terms or accept an exchange offer within days. A written sequence of steps, contacts and decision points means you act on facts rather than headlines.

                ## Milestones
                1. A response checklist written: confirm the facts, check the price, read any offer, decide.
                2. Your platform's process for corporate actions and bondholder votes found.
                3. The bond's place in the capital structure and likely recovery looked up.
                4. A dated decision recorded for the affected bond.

                ## Notes
                Recovery values after default vary widely by seniority and sector. For large holdings, consider professional advice before voting on a restructuring.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written response checklist exists, and any downgraded or defaulting bond has a dated decision recorded against it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a four-step checklist for a downgrade or missed coupon"
                - "Find how your platform handles corporate actions and bondholder votes"
                - "Look up where each corporate bond you hold ranks if the issuer fails"
                - "Record a dated decision for any bond affected"
            - name: Five-year bond ladder for early retirement spending
              description: |-
                ## Purpose
                Retirees often want the first few years of spending beyond guaranteed income held where a share market crash cannot force a sale. A ladder of government bonds maturing each year, sized to the expected spending gap, provides that, and each rung can be refilled from shares in good years. The withdrawal order belongs in your drawdown plan; this project builds the bond side of it.

                ## Milestones
                1. The yearly spending gap above pensions and other guaranteed income calculated for five years.
                2. A government bond or target-maturity fund chosen for each of the five years.
                3. All five rungs bought and recorded with maturity and amount.
                4. A rule written for when and from what the next rung is added.

                ## Notes
                Agree the size of the ladder with your adviser or within your drawdown plan. Too big a ladder can leave too little in growth assets for a long retirement.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five rungs of government bonds or target-maturity funds in place, each sized to one year's spending gap."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Calculate each year's spending gap above guaranteed income"
                - "Choose a bond or target-maturity fund for each of the five years"
                - "Buy the rungs and record maturity and amount for each"
                - "Check next year's rung is funded and add a new fifth year @recurring(yearly)"
            - name: Bonds for a known expense in two to five years
              description: |-
                ## Purpose
                House deposits, a car replacement, school fees or a wedding with a fixed date are a bad fit for shares and a good fit for bonds or deposits that mature near the date. Matching the maturity to the spend locks in a known amount, and a rate rise in between stops mattering. This project builds that match for one named goal.

                ## Milestones
                1. The goal, amount and date written down.
                2. A bond, target-maturity fund or fixed deposit chosen to mature before the date.
                3. The money invested and the expected value at maturity recorded.
                4. The holding checked each quarter against the goal.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One named goal funded by a holding that matures before its date, with the expected maturity value recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the goal, the amount needed and the date"
                - "Find a bond or target-maturity fund maturing just before that date"
                - "Invest the money and record the expected value at maturity"
                - "Compare the holding's value with the goal amount @recurring(quarterly)"
            - name: Coupon income calendar for a retiree household
              description: |-
                ## Purpose
                Retirees living partly on bond income often find the money arrives unevenly: two large coupons in March and September and little in between. A month-by-month calendar of expected payments set against monthly bills shows the gaps, and whether staggering holdings or a monthly-paying fund would smooth them.

                ## Milestones
                1. Every coupon and distribution placed on a twelve-month calendar.
                2. Monthly essential bills set against the expected income.
                3. Months with a shortfall identified and a buffer or change agreed.
                4. Income moved to the spending account on a fixed day each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month bond income calendar set against bills, with shortfall months covered and a monthly transfer running."
                cadence: rolling
              tasks:
                - "Put every expected coupon and distribution on a twelve-month calendar"
                - "Set monthly essential bills against the expected income"
                - "Decide how to cover months with a shortfall"
                - "Move the month's bond income to the spending account @recurring(monthly:25)"
            - name: Taking over the household bond holdings
              description: |-
                ## Purpose
                When the partner who managed the investments dies, becomes unwell or simply steps back, the other often inherits bond holdings, platforms and paperwork they have never looked at. A paced handover, ideally while both can still talk it through, covers what is held, why, which platforms hold it and who to call. Done in advance, it spares a very hard time later.

                ## Milestones
                1. A plain-language summary of every bond holding, its job and its maturity written.
                2. Platform names and key contacts listed, with account details stored securely.
                3. Two walkthrough sessions held, with questions answered.
                4. The partner able to find the maturity calendar and the next decision due on their own.

                ## Notes
                Keep passwords in a password manager or sealed with your will papers, never in the summary itself. A power of attorney may be needed for one partner to act for the other.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written bond summary exists and the second partner has located the holdings, calendar and next decision without help."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a plain-language summary of each bond holding and why it is held"
                - "List platforms, providers and key contacts for the bond holdings"
                - "Hold a first walkthrough session and note every question asked"
                - "Ask your partner to find the next maturity and decision on their own"
            - name: Parking a lump sum in short bonds while you decide
              description: |-
                ## Purpose
                An inheritance, redundancy payment or house sale can leave a large sum in a current account for months while you decide what to do, earning little and sometimes exceeding deposit protection limits. Holding it in short government bonds, a money market fund or insured deposits while you plan keeps it safe and earning. The aim is a calm holding pattern with an end date, not a permanent home.

                ## Milestones
                1. Deposit protection limits checked and any excess identified.
                2. The lump sum placed in short government bonds, a money market fund or spread deposits.
                3. A decision date set for the permanent plan.
                4. The permanent plan agreed and the money moved by that date.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The lump sum is held within protection limits or in short government bonds, with a dated decision on its permanent home."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the deposit protection limit that applies to your bank"
                - "Place the excess in short government bonds or a money market fund"
                - "Set a date by which the permanent plan must be decided"
                - "Review progress toward a permanent home for the lump sum @recurring(monthly:8)"
            - name: Duration-matching bonds to future liabilities
              description: |-
                ## Purpose
                Pension funds match the duration of their bonds to the duration of what they must pay out, so a rate change moves both sides together. A household with a set of known future costs, such as school fees for three children or bridging income before a pension starts, can do the same in miniature. Calculating the present value and duration of the costs, then matching them, makes bonds do exactly one job.

                ## Milestones
                1. Each future cost listed with amount and date.
                2. The present value and duration of the cost stream calculated.
                3. Bond holdings chosen so their duration and value match the costs.
                4. The match rechecked once a year as costs and yields change.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A spreadsheet showing the present value and duration of known future costs matched by bond holdings within one year of duration."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List each known future cost with its amount and date"
                - "Calculate the present value and duration of the cost stream"
                - "Choose bond holdings whose duration and value match the costs"
                - "Recheck bond duration against the cost duration @recurring(yearly)"
            - name: Ladder, barbell or bullet structure comparison
              description: |-
                ## Purpose
                Three common bond structures spread maturities differently: a ladder evenly over time, a barbell at the short and long ends, and a bullet bunched around one date. Each responds differently when the yield curve steepens or flattens. Modelling all three with your own sums shows which suits your goals, and whether any is worth the effort over a single fund.

                ## Milestones
                1. The three structures built on paper with your own total.
                2. Each tested against a steepening, a flattening and a parallel shift of the curve.
                3. Income, duration and reinvestment effort compared.
                4. A structure chosen, or a single fund confirmed as good enough.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of ladder, barbell and bullet structures with your own sums under three curve scenarios, ending in a choice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch a ladder, a barbell and a bullet using your own total"
                - "Ask the agent to model each under three yield curve scenarios"
                - "Compare income, duration and effort across the three"
                - "Record the structure you choose or confirm a single fund"
            - name: Diversified individual corporate bond portfolio
              description: |-
                ## Purpose
                Experienced investors who prefer individual corporate bonds to funds need enough issuers, sectors and maturities that one default cannot do serious damage. Position limits per issuer and sector, a minimum rating and a register of each holding's risks turn a collection of bonds into a portfolio. Expect it to build slowly, as retail lot sizes and spreads make it gradual work.

                ## Milestones
                1. Limits written for the most any one issuer and any one sector may hold.
                2. A register listing each bond's issuer, sector, rating, seniority and maturity.
                3. At least fifteen issuers held before any single bond exceeds its limit.
                4. Weights checked against limits every quarter.

                ## Notes
                Start from the **Risk register** template. If fifteen issuers is out of reach at your portfolio size, a fund is the better tool.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A corporate bond portfolio of at least fifteen issuers, each inside written issuer and sector limits, recorded in a risk register."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the maximum weight for any one issuer and any one sector"
                - "Create a risk register from the template for each bond held"
                - "Add new issuers before increasing any existing position"
                - "Check each issuer's and sector's weight against the limits @recurring(quarterly)"
            - name: Bond fund tracking difference and index rule audit
              description: |-
                ## Purpose
                Two bond trackers following similar indices can differ by more than their stated charges, because of sampling, securities lending income and trading costs. Comparing each fund's actual return with its index over several years, and reading the index rules for surprises, shows which providers deliver what they promise. It is the last refinement once costs and structure are already sound.

                ## Milestones
                1. Three-year and five-year returns of each fund set beside its index.
                2. Tracking difference calculated and compared with the stated charge.
                3. Any unusual index rule or sampling approach noted.
                4. A fund that persistently lags flagged for replacement.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Tracking difference over three and five years recorded for every bond tracker, with persistent laggards flagged."
                cadence: cyclic
              tasks:
                - "Find three and five-year returns for each bond tracker and its index"
                - "Calculate the tracking difference and compare it with the charge"
                - "Note any unusual sampling approach or index rule"
                - "Compare each tracker's return with its index @recurring(yearly)"
---

# Bonds & Fixed Income

This area is for anyone who holds bonds, whether through a pension default fund, a gilt or treasury fund or a handful of individual bonds, and especially for retirees who lean on them for stability and income. It starts with the foundations (an inventory, a written job for your bonds, factsheet literacy, maturity matching, a credit floor and a rate stress test), then the routines that track income, maturities and fund drift, the skills behind yields, duration and credit, decisions about fund types, tax and structure, the events that need a calm response, situations such as retirement ladders and parked lump sums, and finally specialist work on liability matching and individual corporate bond portfolios.

What repeats is a monthly record of coupons and distributions, a monthly look at upcoming maturities and the yield curve, a quarterly fund health check and credit watch, and a yearly tax pack, charges check and full review of the bond sleeve. The Metrics log, Purchase decision, Operational checklist, Reading queue, Remediation plan and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
