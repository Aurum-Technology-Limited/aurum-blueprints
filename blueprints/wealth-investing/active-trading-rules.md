---
id: wealth-investing.active-trading-rules
name: Options & Active Trading Rules
description: "A small, walled-off trading sleeve run by written rules: a hard size cap, per-trade and monthly loss limits, options learned before they are used, honest records and a regular test against simply holding an index fund."
category: personal
version: 1.0.0
tags: [wealth-investing, active-trading-rules, everyone, options, trading-rules, risk-limits, trade-journal]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - metrics-log
    - risk-register
    - operational-checklist
    - course
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Options & Active Trading Rules
          description: "Limiting speculative trading and options activity to a small, rule-bound allocation with written risk limits and honest records."
          projects:
            - name: Deciding whether active trading has a place in your plan
              description: |-
                ## Purpose
                Before opening a trading account or buying a first option, write down what you expect trading to do for you that a plain index fund would not. Most retail traders trail the market once costs are counted, and published figures from many brokers show a majority of retail accounts in geared products lose money, so the honest reasons are usually learning, interest or a small amount of fun money. A written answer, made while calm, decides whether this area belongs in your plan at all.

                ## Milestones
                1. Your reasons for wanting to trade written in three sentences or fewer.
                2. Your emergency fund and long-term contributions confirmed as funded first.
                3. A yes, not yet or no decision recorded with today's date.
                4. Anyone you share finances with told about the decision.

                ## Notes
                If the answer is not yet, archive the rest of this area and revisit in a year. A no is a perfectly good outcome.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated yes, not yet or no decision on active trading, with written reasons, kept with your money notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down three things you hope trading will give you"
                - "List what must be funded first: emergency cash, pension, debt repayments"
                - "Find a published figure on the share of retail trading accounts that lose money"
                - "Record a dated yes, not yet or no decision"
            - name: Hard cap on money set aside for trading
              description: |-
                ## Purpose
                Setting the size of the trading pot once, as a fixed sum and as a share of investable wealth, stops a winning streak from quietly pulling money out of long-term holdings. A common approach is a single-digit percentage you could lose in full without changing any life plan, but the figure is yours to set. The cap also says what happens when the pot grows past it and whether it is ever refilled after losses.

                ## Milestones
                1. Investable wealth totalled, excluding your home and emergency cash.
                2. A maximum trading pot recorded as both a sum and a percentage.
                3. A rule written for profits above the cap, such as moving them to long-term investments.
                4. A refill rule written, including how many refills are allowed in a year or ever.

                ## Notes
                Write the refill rule now. The urge to top up straight after a loss is the moment caps usually break.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A trading cap stated as a sum and a percentage of investable wealth, with written rules for excess profits and refills."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up investable wealth excluding your home and emergency cash"
                - "Choose a maximum trading pot as a sum and as a percentage"
                - "Write what happens to profits that push the pot above the cap"
                - "Decide how often, if ever, the pot may be refilled after losses"
            - name: Separate trading account walled off from long-term savings
              description: |-
                ## Purpose
                Trading from the same account that holds pension or index fund money makes it too easy to sell a long-term holding to fund a trade, or to borrow against it through margin. A separate account, funded only up to the cap, gives the trading sleeve its own balance, its own statements and a hard edge that every rule can point at.

                ## Milestones
                1. A separate account or sub-account opened for trading only.
                2. Funding limited to the cap, with no standing transfer from long-term accounts.
                3. Margin and options permissions on long-term accounts confirmed as switched off.
                4. Account numbers and purpose noted in your money records.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A trading-only account holds no more than the cap, and long-term accounts have margin and options permissions switched off."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your broker whether a separate trading sub-account is available"
                - "Open the trading account and fund it up to the cap only"
                - "Switch off margin and options permissions on long-term accounts"
                - "Label each account by purpose in your money records"
            - name: Per-trade risk and position size rule
              description: |-
                ## Purpose
                Risking a fixed small slice of the trading pot on any single idea is what lets a string of losses be survived. Many rule-based traders cap the loss on one trade at 1 to 2 percent of the pot, worked out from the entry price and the exit point before the order goes in. Writing your own figure, and the arithmetic behind it, turns sizing from a feeling into a calculation.

                ## Milestones
                1. A maximum loss per trade recorded as a percentage of the trading pot.
                2. A worked example showing position size from entry, exit point and risk amount.
                3. A separate rule for options, where the premium paid or the defined maximum loss is the risk.
                4. A maximum number of open positions written down.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written per-trade risk limit, a maximum number of open positions and a worked sizing example for shares and for options."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the most you will lose on one trade as a share of the pot"
                - "Work through one sizing example using an entry and an exit price"
                - "Write how option premium or maximum loss counts toward the limit"
                - "Set a ceiling on the number of positions open at once"
            - name: Monthly and annual loss limits with a stop rule
              description: |-
                ## Purpose
                A per-trade limit does not stop ten bad trades in a row. A monthly loss limit and an annual one, each with a stop rule saying trading pauses until a set date once it is hit, act as a circuit breaker for the whole sleeve. Deciding the pause length in advance matters most, because that decision is hardest to make on the day the limit is reached.

                ## Milestones
                1. A monthly loss limit and an annual loss limit recorded in money terms.
                2. A pause length written for each, such as the rest of the month or 90 days.
                3. A short list of what must be reviewed before trading restarts.
                4. The limits copied into the trading plan.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Monthly and annual loss limits in money, each with a written pause rule and a restart checklist, recorded in the trading plan."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Set a monthly loss limit in money"
                - "Set an annual loss limit that ends trading for the year"
                - "Write the pause length and restart checks for each limit"
                - "Check year-to-date losses against the annual limit @recurring(monthly:20)"
            - name: Written trading plan of one or two pages
              description: |-
                ## Purpose
                Pulling the cap, the sizing rule, the loss limits, the permitted strategies and the record keeping into one short document gives every trade something to be checked against. Two pages is enough, since longer plans tend to go unread. Signing and dating it makes later changes deliberate rather than drift.

                ## Milestones
                1. One document holding the cap, risk per trade, loss limits, permitted strategies and trading hours.
                2. Entry and exit conditions written for each strategy you intend to use.
                3. The plan signed and dated, with a version number.
                4. A rule that changes are made only at a scheduled review, never mid-trade.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed, dated trading plan of no more than two pages covering limits, permitted strategies, entry and exit conditions and when it may change."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather the cap, sizing rule and loss limits into one document"
                - "Write entry and exit conditions for each strategy you will use"
                - "Sign, date and number the first version of the plan"
                - "Re-read the trading plan before the first trade of each month @recurring(monthly:1)"
            - name: Choosing a broker for trading and options
              description: |-
                ## Purpose
                Brokers differ widely on options contract fees, margin rates, the quality of their order tickets and how they handle assignment and expiry. Comparing two or three on the features your plan actually uses, and checking each against your financial regulator's register with any investor protection scheme noted, avoids choosing on sign-up offers alone.

                ## Milestones
                1. A list of the features your plan needs, such as defined-risk spreads or stop orders.
                2. Two or three regulated brokers compared on fees, margin rates and options handling.
                3. Each broker's policy on expiring in-the-money options and early assignment noted.
                4. A broker chosen with the reasons recorded.

                ## Notes
                Start from the **Vendor** template. Check the regulator's own register rather than the broker's website for its status.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A broker chosen from a written comparison of at least two regulated firms on fees, margin rates and expiry handling."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the order types and strategies your plan needs a broker to support"
                - "Check each candidate on your financial regulator's public register"
                - "Compare options fees, margin rates and expiry policies side by side"
                - "Review the broker's fee schedule and terms for changes @recurring(yearly)"
            - name: Options approval level and margin settings check
              description: |-
                ## Purpose
                Options permissions come in levels, from covered calls only up to selling uncovered options, and are often granted from a questionnaire many people answer optimistically. Checking which level the account actually holds, and asking for it to be lowered to match your plan, means the platform itself blocks trades your rules forbid. The same applies to margin: a cash account cannot borrow.

                ## Milestones
                1. The account's current options approval level confirmed in writing.
                2. The level matched to the strategies your plan allows, and lowered if higher.
                3. The account set to cash or margin according to your plan.
                4. Any automatic securities lending feature reviewed and switched off if unwanted.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The trading account's options level and margin status match the written plan, confirmed by a screenshot or letter from the broker."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the options approval level shown in your account settings"
                - "Ask the broker to lower the level if it exceeds your plan"
                - "Confirm whether the account is cash or margin and change it if needed"
                - "Confirm the approval level and margin setting are unchanged @recurring(yearly)"
            - name: Trade record kept from the first trade
              description: |-
                ## Purpose
                Memory is kind to traders: wins are remembered and losses fade. A record that captures every trade with date, instrument, size, entry, exit, fees, the reason for entering and the rule that triggered the exit is what makes every later review honest. Starting before the first trade is far easier than rebuilding a year from broker statements.

                ## Milestones
                1. A record with columns for date, instrument, strategy, size, entry, exit, fees, result and reason.
                2. A column showing whether each exit followed the plan.
                3. The first five trades logged within a day of closing.
                4. A backup copy of the record kept outside the trading platform.

                ## Notes
                Start from the **Metrics log** template. A spreadsheet is enough; dedicated journal apps are optional.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A trade record with every trade logged within a day of closing, including fees and whether the exit followed the plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a trade record from the metrics log template"
                - "Add columns for fees, strategy and whether the plan was followed"
                - "Log each closed trade within a day of closing it"
                - "Save a backup copy of the record outside the broker's platform"
            - name: Trading tax records and reporting rules
              description: |-
                ## Purpose
                Frequent trading creates tax work that long-term investing does not: many disposals, options premiums that may be treated differently from share gains, rules that block a loss if you buy back too soon, and in some countries special treatment for spread bets or futures. Finding out the rules where you live before the first year closes, and keeping records in the shape your tax authority wants, avoids a stressful reconstruction at filing time.

                ## Milestones
                1. Your tax authority's guidance on share, options and derivative gains found and saved.
                2. Any rule restricting losses on quick repurchases noted, such as the US wash sale rule or the UK 30-day matching rule.
                3. Questions for an accountant or tax adviser listed where the rules are unclear.
                4. Broker tax statements and your own record confirmed to hold what filing needs.

                ## Notes
                This project organises records and questions. How your trades are taxed is for official guidance or a qualified adviser to confirm.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Saved tax guidance for your country, a note of loss repurchase rules and a list of open questions answered by an adviser or official source."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your tax authority's guidance on share and options disposals"
                - "Note any rule that disallows losses on quick repurchases"
                - "List questions for an accountant on options premiums and derivatives"
                - "Download the broker's annual tax statement as soon as it is issued @recurring(yearly)"
            - name: Fixed trading windows in the week
              description: |-
                ## Purpose
                Trading that can happen at any minute tends to spill into work, family time and late evenings, and impulsive orders cluster there. Choosing two or three fixed windows a week, each with a start and end time, keeps the activity contained and shows how many hours it really takes. Outside those windows the platform stays closed.

                ## Milestones
                1. Two or three weekly trading windows chosen with start and end times.
                2. The windows blocked in your calendar.
                3. Orders outside the windows limited to exit orders set in advance.
                4. A month of windows kept, with any breaks noted in the trade record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month in which every new order was placed inside a scheduled trading window, with any exceptions logged."
                cadence: rolling
              tasks:
                - "Pick two or three weekly windows that do not clash with work or family"
                - "Block the windows as repeating calendar events"
                - "Set exit orders in advance so positions need no watching between windows"
                - "Check the loss limits before opening the platform @recurring(weekly:tue)"
            - name: Weekly trade record review
              description: |-
                ## Purpose
                A short review each week, while trades are still fresh, catches broken rules before they become habits. Fifteen to twenty minutes is enough to check each closed trade against the plan, mark any rule breaks and note one lesson. The weekly slot also keeps the record itself complete.

                ## Milestones
                1. A fixed weekly slot of twenty minutes set aside for the review.
                2. Every closed trade checked against the plan and marked followed or broken.
                3. One lesson per week written in the record.
                4. A weekly count of rule breaks kept for the monthly scorecard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly entry in the trade record for at least eight consecutive weeks, each marking rule breaks and one lesson."
                cadence: rolling
              tasks:
                - "Choose a fixed twenty-minute slot for the weekly review"
                - "Review closed trades and mark each as rule followed or broken @recurring(weekly:fri)"
                - "Write one lesson from the week in the trade record"
                - "Carry the week's count of rule breaks into the monthly figures"
            - name: Monthly scorecard against an index fund
              description: |-
                ## Purpose
                Trading only makes sense if it beats what the same money would have done in a low-cost index fund, after fees, financing and tax. Comparing the two each month, alongside win rate, average win, average loss and rule-break count, gives an unflattering but honest answer. Six months of scorecards usually show whether there is any edge at all.

                ## Milestones
                1. A benchmark index fund chosen that suits the trading pot.
                2. The pot's monthly return after all costs compared with the benchmark.
                3. Win rate, average win, average loss and rule breaks recorded each month.
                4. A rolling twelve-month comparison kept up to date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Monthly scorecards for at least six months, each comparing the trading pot's after-cost return with a named index fund."
                cadence: rolling
              tasks:
                - "Choose a low-cost index fund as the benchmark for the trading pot"
                - "Fill in the monthly scorecard from the trade record @recurring(monthly:3)"
                - "Include financing, fees and currency costs in the trading return"
                - "Update the rolling twelve-month comparison"
            - name: Monthly broker statement reconciliation
              description: |-
                ## Purpose
                Broker statements show fees, margin interest, assignments and corporate action adjustments that never appear on a trading screen. Matching the statement to your trade record each month catches missing trades, unexpected charges and positions you forgot were open. It also turns the tax year end into a tidy-up rather than an excavation.

                ## Milestones
                1. Each monthly statement downloaded and filed by date.
                2. Statement trades matched line by line to the trade record.
                3. Fees, interest and any assignment or exercise entries checked and explained.
                4. Differences resolved with the broker or corrected in the record.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly statements filed and reconciled to the trade record, with every difference explained."
                cadence: rolling
              tasks:
                - "Download the latest monthly statement from the broker"
                - "Match statement trades to the trade record @recurring(monthly:9)"
                - "Query any fee, interest or assignment entry you cannot explain"
                - "File the statement in a dated folder for the tax year"
            - name: Open positions risk register
              description: |-
                ## Purpose
                With several trades open it is easy to lose sight of the total amount at risk, especially when options expire on different dates. A register listing each open position with its maximum loss, exit point, expiry and the event that could move it shows the whole exposure at once. Updated weekly, it is the first thing to check before adding anything new.

                ## Milestones
                1. Every open position listed with maximum loss, planned exit and expiry date.
                2. Total open risk summed and compared with the plan's limit.
                3. Known events such as earnings or ex-dividend dates noted beside each position.
                4. The register updated weekly and before any new trade.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register showing every open position's maximum loss and expiry, with total open risk within the plan's limit, updated weekly."
                cadence: rolling
              tasks:
                - "Create a register from the risk register template"
                - "List each open position with maximum loss, exit and expiry"
                - "Update the register and total open risk @recurring(weekly:sun)"
                - "Turn down any new trade that would push total risk above the limit"
            - name: Options expiry week checklist
              description: |-
                ## Purpose
                Many options mishaps happen in the last days before expiry: a short option assigned overnight, a long option that expires worthless because nobody closed it, or shares delivered into an account without the cash to pay for them. A checklist run before every expiry, covering each open contract, removes most of the surprises.

                ## Milestones
                1. A checklist covering moneyness, assignment risk, cash or shares available and the broker's cut-off time.
                2. Each open contract given a decision: close, roll within the rules, or let expire.
                3. The broker's automatic exercise policy noted on the checklist.
                4. The checklist run before every monthly expiry.

                ## Notes
                Start from the **Operational checklist** template. Standard monthly options in many markets expire on the third Friday, but confirm the dates with your exchange and broker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The expiry checklist completed before each monthly expiry for six months, with a recorded decision for every open contract."
                cadence: cyclic
              tasks:
                - "Build an expiry checklist from the operational checklist template"
                - "Note your broker's cut-off time for closing expiring options"
                - "Run the checklist on every open contract before expiry @recurring(monthly:12)"
                - "Record the close, roll or expire decision for each contract"
            - name: Quarterly profit sweep and cap true-up
              description: |-
                ## Purpose
                Profits left in a trading account tend to become the next, bigger bet. A quarterly true-up moves anything above the cap into long-term investments, as the plan says, and records any shortfall without automatically refilling it. Over years, the sweep turns occasional good trades into lasting wealth rather than larger positions.

                ## Milestones
                1. The trading pot's value compared with the cap at each quarter end.
                2. Any excess moved to a named long-term account.
                3. Any shortfall recorded and checked against the refill rule.
                4. A running total of money swept out kept in the scorecard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter's sweep or shortfall recorded, with any excess above the cap moved to a long-term account within a week of quarter end."
                cadence: cyclic
              tasks:
                - "Name the long-term account that will receive swept profits"
                - "Compare the trading pot with the cap and sweep any excess @recurring(quarterly)"
                - "Record shortfalls without topping up outside the refill rule"
                - "Add the swept amount to a running total in the scorecard"
            - name: Hours spent trading log
              description: |-
                ## Purpose
                Return per hour is the figure most traders never calculate. Logging time spent on research, watching screens, courses and reviews, then dividing the month's after-cost result by those hours, shows what trading pays compared with overtime, a side project or rest. Even a profitable month can look different at a very low hourly rate.

                ## Milestones
                1. Time on research, screens, learning and review logged each week.
                2. Monthly hours totalled beside the month's after-cost result.
                3. An hourly rate worked out and compared with another use of the time.
                4. Three months of hourly figures kept for the six-month review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Three consecutive months of trading hours logged, each with an after-cost hourly result compared against another use of the time."
                cadence: rolling
              tasks:
                - "Start a simple log of time spent on trading activity"
                - "Total the month's hours and work out the hourly result @recurring(monthly:27)"
                - "Compare the hourly figure with overtime or a side project"
                - "Note which activities take the most time for the least result"
            - name: Annual trading year review and rule rewrite
              description: |-
                ## Purpose
                Once a year, the scorecards, rule-break counts, hourly figures and tax results need reading together to decide whether the plan still deserves to run. The review ends with a rewritten plan, a reduced cap or a decision to stop, made from twelve months of evidence rather than the last few trades.

                ## Milestones
                1. Twelve months of scorecards, hours and tax results gathered in one place.
                2. The full year's after-cost return compared with the benchmark.
                3. The three most broken rules identified with a cause for each.
                4. A new plan version, a lower cap or a stop decision signed and dated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual review document comparing the year with the benchmark, ending in a signed decision to continue, shrink or stop."
                cadence: cyclic
              tasks:
                - "Book a half day for the annual trading review @recurring(yearly)"
                - "Gather the year's scorecards, hours log and tax figures"
                - "Name the three rules broken most often and why"
                - "Sign a new plan version, a lower cap or a decision to stop"
            - name: Earnings and corporate events watch for open positions
              description: |-
                ## Purpose
                Earnings releases, dividends, share splits, mergers and special distributions can move a position sharply or change the terms of an options contract. Checking the coming week's events for every position in the trading account means you decide in advance whether to hold through them, rather than finding out from the overnight price. Anyone short a call also needs ex-dividend dates, because early assignment becomes more likely just before them.

                ## Milestones
                1. A source for upcoming earnings, dividend and corporate action dates chosen.
                2. Each open position checked against the coming week's events.
                3. A hold or close decision recorded for any position facing an event.
                4. Any contract adjustment notice from the broker read and filed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly events check logged for every open position for eight weeks, with a recorded decision for any position facing an event."
                cadence: rolling
              tasks:
                - "Choose a free calendar for earnings and ex-dividend dates"
                - "Check the coming week's events for every open position @recurring(weekly:sat)"
                - "Decide in writing whether to hold each position through its event"
                - "File any options adjustment notice the broker sends"
            - name: Options basics course on calls, puts, strikes and expiry
              description: |-
                ## Purpose
                Options are contracts with their own vocabulary, and trading one before you can explain what happens at expiry is how small accounts get hurt. A structured course, ideally the free education from an options exchange or a regulator, covers calls, puts, strike prices, premium, intrinsic and time value, and the payoff at expiry. Drawing the payoff diagram for each basic position by hand is a good finishing test.

                ## Milestones
                1. A course chosen from an exchange, regulator or other source with nothing to sell.
                2. Calls, puts, strike, premium, intrinsic value and time value explained in your own words.
                3. Payoff diagrams drawn by hand for long and short calls and puts.
                4. Ten practice questions on expiry outcomes answered correctly.

                ## Notes
                Start from the **Course** template. Be wary of courses that end in a pitch for a paid signal service.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Hand-drawn payoff diagrams for the four basic option positions, plus ten correct practice answers on expiry outcomes."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick a free options course from an exchange or regulator"
                - "Set up the course from the course template with weekly sessions"
                - "Draw payoff diagrams for long and short calls and puts"
                - "Answer ten expiry questions and check the answers"
            - name: Assignment, exercise and expiry mechanics
              description: |-
                ## Purpose
                Selling an option creates an obligation that can be called on before expiry, and the mechanics differ between American and European style contracts and between physical and cash settlement. Knowing exactly what your broker does at expiry, when early assignment is likely and what happens to a spread when one leg is assigned prevents the most common nasty surprise in options trading.

                ## Milestones
                1. American and European style contracts explained in your own words.
                2. Physical and cash settlement explained, with an example of each.
                3. The situations that make early assignment likely listed, including the days before an ex-dividend date.
                4. Your broker's expiry and assignment procedures summarised on one page.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of your broker's exercise, assignment and expiry procedures, with early assignment triggers listed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read your broker's guide to exercise, assignment and expiry"
                - "Note which contracts you might trade are American or European style"
                - "List the conditions that make early assignment more likely"
                - "Write one page on what happens to a spread if one leg is assigned"
            - name: Implied volatility, time decay and the greeks
              description: |-
                ## Purpose
                An option can lose money even when the share moves the right way, because time decay and falling implied volatility eat the premium. Learning what delta, gamma, theta and vega measure, and watching them change on a paper position, explains most of the confusing results new options traders see. The aim is fluency, not complex models.

                ## Milestones
                1. Delta, gamma, theta and vega each explained with an everyday example.
                2. Implied volatility compared before and after an earnings release on a real options chain.
                3. One paper position tracked daily for two weeks with its greeks noted.
                4. A short note on how a volatility drop after news affects bought options.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes defining the four main greeks, plus a two-week paper position record showing how its greeks and premium changed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-line definition of delta, gamma, theta and vega"
                - "Compare implied volatility on a chain before and after earnings"
                - "Track one paper position's greeks for two weeks"
                - "Explain in a paragraph why bought options can lose value after news"
            - name: Defined risk versus undefined risk positions
              description: |-
                ## Purpose
                Some positions have a maximum loss known on entry, such as a bought option or a spread, while others, such as a short uncovered call, can lose far more than the whole trading pot. Sorting every strategy you are likely to meet into these two groups, with the worst case written beside each, is the knowledge behind the permitted strategies list.

                ## Milestones
                1. Ten common strategies sorted into defined and undefined risk.
                2. The worst-case loss worked out for one example of each.
                3. Short shares, short calls and geared products identified as open-ended risks.
                4. The sorted list attached to the trading plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of at least ten strategies, each marked defined or undefined risk with a worked worst case, attached to the trading plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List ten strategies you have seen discussed or advertised"
                - "Mark each as defined or undefined risk"
                - "Work out the worst-case loss for one example of each type"
                - "Attach the sorted list to the trading plan"
            - name: Margin, borrowing and how a margin call unfolds
              description: |-
                ## Purpose
                Margin lets an account hold more than its cash, and losses are then measured against borrowed money. Understanding initial and maintenance margin, how a broker can sell positions without asking, and how a price gap can leave a debt larger than the account matters even if your plan bans borrowing, because short options use margin too.

                ## Milestones
                1. Initial and maintenance margin explained with a worked example.
                2. The broker's margin call and forced liquidation terms read and summarised.
                3. A worked scenario showing a price gap leaving a negative balance.
                4. Your plan's margin rule confirmed or tightened.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked margin call example and a summary of your broker's liquidation terms, with the plan's margin rule confirmed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the margin section of your broker's terms"
                - "Work through one margin call example with real numbers"
                - "Model a weekend price gap on a geared position"
                - "Confirm or tighten the margin rule in your trading plan"
            - name: Geared products such as CFDs and daily-reset ETFs
              description: |-
                ## Purpose
                Contracts for difference, spread bets and geared or inverse exchange-traded funds are marketed heavily and behave differently from shares. Daily-reset funds drift away from their stated multiple over weeks of choppy prices, and contracts for difference carry overnight financing. Regulators in several countries make providers publish the share of retail accounts that lose money, often well over half, and reading those figures is part of the lesson.

                ## Milestones
                1. How contracts for difference and spread bets work, including overnight financing, written in your own words.
                2. The drift of a daily-reset geared fund over a choppy month shown with a worked example.
                3. The published loss percentages from two providers noted.
                4. A decision recorded on whether these products are permitted in your plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on financing costs and daily-reset drift, two providers' published loss figures and a recorded permit or ban decision."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the key information document for one CFD or spread bet"
                - "Work out the drift of a daily-reset geared fund over a choppy month"
                - "Note the share of retail accounts losing money from two providers"
                - "Record whether geared products are permitted in your trading plan"
            - name: Expected value and risk of ruin arithmetic
              description: |-
                ## Purpose
                Win rate on its own says little: a strategy that wins 80 percent of the time can still lose money if the losses are large. Working through expected value, payoff ratio and risk of ruin with your own numbers shows why per-trade limits exist and how many trades are needed before results mean anything.

                ## Milestones
                1. Expected value worked out from win rate, average win and average loss.
                2. A losing streak of ten trades modelled at your per-trade risk.
                3. The number of trades needed for a meaningful sample estimated.
                4. The arithmetic summarised in a short note kept with the plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note showing expected value from your own trade figures, a modelled ten-loss streak and an estimated minimum sample size."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Calculate expected value from your win rate and average win and loss"
                - "Model ten losses in a row at your per-trade risk"
                - "Estimate how many trades a fair test of a strategy needs"
                - "Ask the agent to check your expected value working and explain any errors"
            - name: Paper trading a written strategy before real money
              description: |-
                ## Purpose
                Paper trading cannot reproduce the feeling of a real loss, but it can show whether a written strategy is even followable and whether its rules produce sensible trades. Running one strategy on paper for a set number of trades, logged exactly as real trades would be, is a cheap test before money is involved.

                ## Milestones
                1. One strategy written with entry, exit, size and expiry rules.
                2. Thirty paper trades placed and logged in the trade record format.
                3. Rule breaks on paper counted and explained.
                4. A decision recorded to go live, revise or drop the strategy.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "Thirty logged paper trades of one written strategy, ending in a recorded decision to go live, revise or drop it."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write one strategy with entry, exit, size and expiry rules"
                - "Set up a paper trading account or a paper log"
                - "Log thirty paper trades in the same format as real ones"
                - "Decide to go live, revise or drop the strategy"
            - name: Permitted and prohibited strategies list
              description: |-
                ## Purpose
                Writing down which strategies the trading account may use, and which are banned outright, is the single rule that prevents the worst outcomes. Many careful traders ban selling uncovered calls, open-ended short positions and anything they cannot explain at expiry, but the list is yours to decide from the defined risk work. Once written, the broker's options level should match it.

                ## Milestones
                1. A permitted list naming each strategy the plan allows.
                2. A prohibited list naming each banned strategy and the reason.
                3. A rule that any new strategy is paper traded before joining the permitted list.
                4. The broker's options level checked against the lists.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Signed permitted and prohibited strategy lists in the trading plan, with the broker's options level matching them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a permitted list from the defined risk work"
                - "Write the prohibited list with one reason per entry"
                - "Add the rule that new strategies need paper trading first"
                - "Check the broker's options level matches the permitted list"
            - name: Covered calls on shares you already own
              description: |-
                ## Purpose
                Selling calls against shares you hold earns premium but caps the upside and can force a sale, possibly with a tax bill, if the shares are called away. Deciding which holdings, if any, may ever have calls written against them, and on what terms, keeps an income idea from turning long-term holdings into trading stock.

                ## Milestones
                1. Holdings that must never have calls sold against them listed, such as core long-term positions.
                2. Holdings that may, with a maximum share of each that can be covered.
                3. The tax effect of shares being called away checked for your country.
                4. A rule on what happens when shares are called away: rebuy, wait or redeploy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written covered call rule naming eligible holdings, the maximum share covered and the response if shares are called away."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List holdings that must never have calls written against them"
                - "Set a maximum share of any eligible holding that can be covered"
                - "Check how a forced sale through assignment would be taxed"
                - "Write what you will do if shares are called away"
            - name: Cash-secured puts rule set
              description: |-
                ## Purpose
                Put selling with the full purchase cash set aside is sometimes described as being paid to wait for a lower entry price, but it also means buying a falling share at a price that may look poor a week later. A written rule on which shares qualify, how much cash is reserved and what happens after assignment stops this from becoming a quiet way to own more than the cap allows.

                ## Milestones
                1. A list of shares you would be content to own at the strike price.
                2. Cash for the full assignment value reserved and excluded from other trades.
                3. A limit on the total value of puts open at once inside the cap.
                4. A written plan for shares received through assignment.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A cash-secured put rule naming eligible shares, the cash reserve, a total exposure limit and a post-assignment plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List shares you would be content to own at a chosen strike"
                - "Reserve the full assignment cash for each put sold"
                - "Set a total limit on open puts within the trading cap"
                - "Write what you will do with shares received through assignment"
            - name: Trading costs audit across fees, spreads and financing
              description: |-
                ## Purpose
                Commission is only the visible part of trading costs. Bid-ask spreads on options, overnight financing, currency conversion, platform data fees and slippage on market orders can add up to more than the profit in a typical month. Totalling a quarter's costs and setting them against gross results shows which ones are worth cutting first.

                ## Milestones
                1. One quarter's commissions, spreads, financing, currency and data costs totalled.
                2. Costs shown as a share of gross profit or loss.
                3. The two largest costs identified with one change for each.
                4. Limit orders made the default if market orders caused slippage.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarter's full trading costs totalled and compared with gross results, with changes recorded for the two largest costs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull a quarter's fees, interest and currency charges from statements"
                - "Estimate spread and slippage costs on a sample of ten trades"
                - "Rank costs by size and pick one change for each of the top two"
                - "Switch the platform's default order type to limit if it is market"
            - name: Retiring a strategy that has stopped working
              description: |-
                ## Purpose
                Strategies decay: market conditions change, an edge gets crowded, or your own circumstances leave less time to run one properly. Deciding in advance what result over how many trades would retire a strategy, and then honouring it, prevents months of slow losses justified by hope.

                ## Milestones
                1. A retirement test written for each strategy, such as negative expected value over a minimum sample.
                2. Current results for each strategy checked against its test.
                3. Any strategy that fails moved from the permitted list to a retired list.
                4. A note on what was learned from each retired strategy.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each permitted strategy has a written retirement test, and any failing strategy sits on a retired list with a note."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a retirement test for each strategy you trade"
                - "Check each strategy's results against its test"
                - "Move failing strategies to a retired list in the plan"
                - "Write one paragraph on what each retired strategy taught you"
            - name: Vetting trading courses, signal groups and copy trading
              description: |-
                ## Purpose
                Paid courses, signal channels and copy-trading services often show selected winning trades, lifestyle images and urgency rather than audited results. Checking any offer against a short list of questions, including whether the firm is authorised, whether results are verified and how the seller actually earns money, protects both the trading pot and the money outside it.

                ## Milestones
                1. A checklist of questions for any paid trading product.
                2. The regulator's register and warning list checked for each offer considered.
                3. Claimed returns compared with any independently verified record.
                4. A decision recorded for each offer, with the reason.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every trading course or signal service considered has a completed checklist, a regulator check and a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write six questions to ask of any trading course or signal service"
                - "Check the seller on the regulator's register and warning list"
                - "Ask for audited or broker-verified results before paying"
                - "Record each decision and the reason in your money notes"
            - name: Rules for rolling a losing options position
              description: |-
                ## Purpose
                Rolling an option to a later date or a different strike can be a sensible adjustment or a way of never admitting a loss. Writing when a roll is permitted, how many times, and that the combined loss still counts against the original risk limit, keeps adjustment from becoming endless deferral.

                ## Milestones
                1. Conditions under which a roll is permitted written in the plan.
                2. A maximum number of rolls per position set.
                3. The rule that a roll's losses count against the original trade's risk stated.
                4. Past rolls in the trade record reviewed against the new rule.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rolling rule with permitted conditions, a maximum roll count and combined loss accounting, applied to past rolls in the record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write when rolling a position is permitted"
                - "Set the most times any one position may be rolled"
                - "Record rolls as one combined trade in the trade record"
                - "Review past rolls in the record against the new rule"
            - name: First live options trade with one contract
              description: |-
                ## Purpose
                The first real options trade is best kept deliberately small: one contract, a defined maximum loss and a strategy already paper traded. Treating it as a rehearsal of the whole process, from the pre-trade check and order ticket to expiry handling and the record, matters more than the result.

                ## Milestones
                1. A strategy chosen from the permitted list that has passed paper trading.
                2. One contract placed with maximum loss within the per-trade limit.
                3. The position managed and closed or expired under the plan's rules.
                4. A full write-up of the trade and the process in the record.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One live options contract traded from entry to close within the plan's limits, with a full write-up in the trade record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick one paper-tested strategy from the permitted list"
                - "Check the maximum loss on one contract fits the per-trade limit"
                - "Place the order with a limit price, not a market order"
                - "Write up the trade and the process within a day of closing"
            - name: Tax year end trading wrap-up
              description: |-
                ## Purpose
                At the end of each tax year, gains, losses, options premiums and fees need pulling together for the return while records are still to hand. A fixed wrap-up session, with the reconciled record and the broker's tax statement side by side, makes filing straightforward and shows the true after-tax result of the year's trading.

                ## Milestones
                1. All trades for the tax year reconciled to broker statements.
                2. Gains, losses, premiums and costs totalled in the shape your return needs.
                3. Any loss repurchase rule applied and noted.
                4. The pack passed to your accountant or used for your own return.

                ## Notes
                Your accountant or the tax authority's guidance decides how each item is reported; this pack only organises the figures.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A tax year trading pack with reconciled totals for gains, losses, premiums and costs, handed to an accountant or used for filing."
                cadence: cyclic
              tasks:
                - "Book a wrap-up session in the first fortnight after the tax year ends @recurring(yearly)"
                - "Reconcile the year's trades with the broker's tax statement"
                - "Total gains, losses, premiums and costs by category"
                - "Send the pack to your accountant or file it with your return"
            - name: Volatility spike playbook for open trades
              description: |-
                ## Purpose
                When markets fall sharply, spreads widen, implied volatility jumps and short options can move against you fast. A one-page playbook written in calm conditions says what you will check, which positions you will cut first and that no new trades open until the risk register is updated. Its value comes from deciding before the next spike, not during it.

                ## Milestones
                1. A trigger defined, such as a set daily market fall or a volatility index level.
                2. A first-hour checklist for open positions and margin.
                3. An order for cutting positions, starting with undefined or largest risks.
                4. A ban on new trades until the risk register is updated.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A one-page volatility playbook with a trigger, a first-hour checklist and a position-cutting order, stored with the trading plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the market move that triggers the playbook"
                - "Write a first-hour checklist for open positions and margin"
                - "Rank positions to cut first by size of possible loss"
                - "Store the playbook beside the trading plan and the risk register"
            - name: Six-month continue, shrink or stop review
              description: |-
                ## Purpose
                Six months of live trading, with scorecards, hours and rule-break counts, is a fair point to ask whether the activity has earned its place. Setting the date now, along with the evidence that would mean continue, shrink or stop, keeps the review honest when the date arrives.

                ## Milestones
                1. Tests written in advance for continue, shrink and stop.
                2. Six months of scorecards and hours gathered.
                3. Results compared with the benchmark and the tests.
                4. A decision signed, with any cap change or account closure carried out.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A signed continue, shrink or stop decision at six months, based on tests written in advance and six months of scorecards."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the evidence that would mean continue, shrink or stop"
                - "Put the six-month review date in your calendar"
                - "Compare six months of scorecards with the tests and the benchmark"
                - "Carry out the decision, including any cap change or account closure"
            - name: Starting out with a small trading account early in your career
              description: |-
                ## Purpose
                Starting young with a few hundred in a trading app is common, and the bigger danger is less the money lost than the habits formed and the long-term investing that gets crowded out. Pairing a small trading pot with an automatic monthly contribution to a pension or index fund feeds the curiosity while compounding still happens.

                ## Milestones
                1. Long-term monthly contributions set up before any trading money is added.
                2. A trading pot capped below one month's long-term contribution.
                3. Options and margin left switched off for the first year.
                4. A first-year note on what was learned and what it cost.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Automatic long-term contributions running, a trading pot capped below one month's contribution, and a first-year note written."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set up an automatic monthly contribution to a pension or index fund"
                - "Cap the trading pot below one month's long-term contribution"
                - "Leave options and margin switched off for the first year"
                - "Write a short note at year end on lessons and total cost"
            - name: Options income rules in retirement
              description: |-
                ## Purpose
                Retirees are often pitched option selling as a way to boost income, and steady small premiums can hide occasional large losses that retirement money is poorly placed to absorb. Keeping any options activity inside a small capped sleeve, separate from the money that pays the bills, and checking it against the withdrawal plan each quarter stops income from becoming a risk to essential spending.

                ## Milestones
                1. Money needed for essential spending identified and kept out of the trading sleeve.
                2. The options sleeve capped as a small share of investable wealth.
                3. Strategies limited to fully covered or defined-risk positions.
                4. The plan discussed with a financial adviser or a trusted family member.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A capped options sleeve separate from essential spending money, with defined-risk rules and a quarterly check against withdrawals."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Separate the money needed for essential spending from any trading sleeve"
                - "Set a cap on the options sleeve as a share of investable wealth"
                - "Limit the sleeve to covered or defined-risk positions"
                - "Check options income against the withdrawal plan @recurring(quarterly)"
            - name: Shared rules when one partner trades
              description: |-
                ## Purpose
                When one partner trades and the other does not, losses can stay hidden until they affect shared plans. Agreeing the cap, the loss limits and what gets shared each month, and giving the non-trading partner a simple view of the scorecard, protects the relationship as much as the money.

                ## Milestones
                1. The cap and loss limits agreed by both partners.
                2. A monthly one-line summary shared with the non-trading partner.
                3. A rule that any refill or cap increase needs both partners' agreement.
                4. Access details for the trading account added to the shared money records.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both partners have agreed the cap and limits, and a monthly trading summary has been shared for three consecutive months."
                cadence: rolling
              tasks:
                - "Show your partner the trading plan and the cap"
                - "Agree that refills or cap increases need both of you"
                - "Share the monthly scorecard summary with your partner @recurring(monthly:5)"
                - "Add the trading account to your shared money records"
            - name: Trading rules for employees with dealing restrictions
              description: |-
                ## Purpose
                Employees of listed companies, and of firms such as banks, consultancies and law firms, often face trading windows, pre-clearance and minimum holding periods, and breaking them can cost a job or worse. Writing your employer's rules into the trading plan, and checking the calendar before every trade in restricted shares, keeps personal trading clear of insider dealing concerns.

                ## Milestones
                1. Your employer's personal trading policy found and saved.
                2. Restricted securities, blackout periods and pre-clearance steps noted in the plan.
                3. Options and short positions in employer shares checked against the policy.
                4. A pre-clearance record kept for any trade that needs one.

                ## Notes
                If the policy is unclear, ask the compliance team before trading, not after.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your employer's trading policy summarised in the plan, with a pre-clearance record for every trade that required one."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your employer's personal account dealing policy"
                - "Note restricted securities, blackout periods and holding periods"
                - "Ask compliance about any trade you are unsure of before placing it"
                - "Check the company trading window calendar @recurring(quarterly)"
            - name: When trading starts to feel like gambling
              description: |-
                ## Purpose
                Fast trading, especially in short-dated options, can trigger the same pull as gambling: chasing losses, hiding activity, trading to feel something. Recognising the signs early, and knowing the practical tools such as deposit limits, account closure and gambling support services, gives a way out before serious harm. Asking for help here is a sound financial decision, not a failure.

                ## Milestones
                1. A list of personal warning signs written, such as chasing losses or hiding trades.
                2. Deposit limit and account closure options at your broker found.
                3. A gambling support service in your country noted with its contact details.
                4. One trusted person told what to watch for.

                ## Notes
                If several warning signs apply, pause trading and contact a support service or your doctor. Many gambling helplines also help with compulsive trading.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of warning signs, your broker's deposit limit or closure route and a support service contact, shared with one trusted person."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the warning signs that would worry you about your trading"
                - "Find how to set deposit limits or close the account at your broker"
                - "Save the contact details of a gambling support service"
                - "Ask a trusted person to check in on your trading time @recurring(monthly:15)"
            - name: Rebuilding after a large trading loss
              description: |-
                ## Purpose
                A loss that breaks the cap or wipes out the trading pot often brings shame, secrecy and the urge to win it back quickly. A slow, written recovery plan, starting with the full number, any debts created and the people affected, puts long-term finances first and leaves the question of trading again for later.

                ## Milestones
                1. The full loss, including any margin debt, written as one figure.
                2. Any debt to the broker or on cards put on a repayment schedule.
                3. Trading paused for a set period, with the account restricted or closed.
                4. A written review of which rules failed, made before any return to trading.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recovery plan with the full loss figure, a debt repayment schedule, a trading pause end date and a written rules review."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the full loss, including any margin debt, as one number"
                - "Put any broker or card debt on a repayment schedule"
                - "Close or restrict the trading account for a set period"
                - "Talk the loss through with a partner, friend or financial adviser"
            - name: Collar on a concentrated share holding
              description: |-
                ## Purpose
                Someone holding a large single-share position, often from an employer or an inheritance, may consider buying puts and selling calls against it to bound the outcome while deciding what to do. The structure involves tax, contract sizes and possibly employer restrictions, so the work here is modelling the range of results and preparing questions for a professional, not placing the trade alone.

                ## Milestones
                1. The concentrated position's size and share of wealth recorded.
                2. A collar modelled with a floor, a cap and the net cost at expiry.
                3. Tax and employer restrictions on hedging listed as questions.
                4. The model reviewed with a financial or tax adviser and a decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A modelled collar showing floor, cap and net cost, reviewed with an adviser, with a recorded decision to hedge, sell down or hold."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record the size of the holding and its share of your wealth"
                - "Model a collar's floor, cap and net cost from a live options chain"
                - "List tax and employer policy questions about hedging"
                - "Review the model with an adviser and record the decision"
            - name: Protective puts cost test for a portfolio
              description: |-
                ## Purpose
                Buying index puts to protect a portfolio sounds prudent, but premium paid year after year can cost more than the falls it guards against. Pricing a year of rolling protection, and comparing it with holding more cash or bonds instead, shows whether insurance through options is worth its price for you.

                ## Milestones
                1. A year of rolling put protection priced at a chosen strike and expiry.
                2. The annual cost shown as a percentage of the portfolio.
                3. The same protection compared with a change to the cash or bond allocation.
                4. A decision recorded, with the reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A priced year of rolling put protection compared with an allocation change, ending in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Price a three-month index put at a chosen strike"
                - "Work out the cost of rolling it for a full year"
                - "Compare that cost with moving part of the portfolio to cash or bonds"
                - "Record whether you will buy protection and why"
            - name: Defined-risk spread rule sheet
              description: |-
                ## Purpose
                Vertical spreads, iron condors and calendars cap the maximum loss but bring several legs, wider costs and awkward early assignment cases. A rule sheet for each spread you use, giving width, maximum loss, profit target, exit point and what to do if one leg is assigned, keeps multi-leg trading inside the plan.

                ## Milestones
                1. Each spread type you use listed with its maximum loss formula.
                2. Width, profit target and exit point rules set for each.
                3. Early assignment handling written for each spread.
                4. The sheet tested on five paper trades per spread before live use.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rule sheet for every spread type traded, each tested on five paper trades, attached to the trading plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the spread types you use or want to use"
                - "Write width, profit target and exit rules for each"
                - "Add early assignment handling for each spread"
                - "Test each spread's rules on five paper trades"
            - name: Futures contract size and margin checks
              description: |-
                ## Purpose
                Futures and options on futures carry large notional values, daily settlement and margin that the exchange can raise at short notice. Before any futures position, checking the contract's full notional value against the trading pot, the daily price limits and the broker's intraday margin rules shows whether even one contract fits your limits. Micro contracts exist for some markets and may be the only size that does.

                ## Milestones
                1. Notional value, tick value and margin noted for each contract considered.
                2. One contract's typical daily move compared with the per-trade limit.
                3. Daily settlement and margin increase rules summarised.
                4. A permit or ban decision for each contract added to the strategies list.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sheet for each futures contract considered, showing notional value and typical daily move against the per-trade limit, with a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up notional value, tick value and margin for each contract"
                - "Compare a typical daily move with your per-trade limit"
                - "Read how daily settlement and margin increases work at your broker"
                - "Add a permit or ban decision for each contract to the strategies list"
            - name: Trader tax status questions for frequent traders
              description: |-
                ## Purpose
                In some countries, very frequent trading can change how gains are taxed, for example whether the activity counts as a trade or business rather than investing, or whether special elections are available. The tests are technical and the consequences large, so the work is gathering your activity figures and taking precise questions to a tax professional.

                ## Milestones
                1. Annual trade count, holding periods and hours spent summarised.
                2. Your tax authority's guidance on trading versus investing found.
                3. A question list for a tax professional written.
                4. The professional's answer recorded and any election deadlines noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page activity summary and a tax professional's written answer on your status, with any election deadlines noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count trades and average holding periods for the last year"
                - "Find your tax authority's guidance on trading as a business"
                - "Write questions on status and elections for a tax professional"
                - "Record the answer and any deadlines that follow from it"
---

# Options & Active Trading Rules

This area is for anyone who trades shares or options, or is tempted to, and wants that activity kept small, rule-bound and honestly recorded beside a long-term plan. It starts with foundations (whether to trade at all, a hard cap, a separate account, per-trade and loss limits, a written plan, the broker, options permissions, a trade record and tax rules), then the weekly, monthly and yearly routines, the options and risk knowledge to learn before using it, decisions on specific strategies and costs, dated events such as a first live contract and a six-month review, situations for young traders, retirees, couples, restricted employees and anyone for whom trading starts to feel like gambling, and finally specialist work on collars, protective puts, spreads, futures and trader tax status.

The rhythm is fixed trading windows, a weekly record review and positions check, a monthly scorecard against an index fund with a statement reconciliation and an expiry checklist, a quarterly profit sweep and an annual review that rewrites the plan. The Vendor, Metrics log, Risk register, Operational checklist and Course templates pair with choosing a broker, the trade record, the open positions register, the expiry checklist and the options basics course. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
