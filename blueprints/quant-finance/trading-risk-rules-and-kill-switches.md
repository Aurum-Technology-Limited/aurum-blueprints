---
id: quant-finance.trading-risk-rules-and-kill-switches
name: Trading Risk Rules and Kill Switches
description: "Written risk rules for your own trading, from loss limits and position caps to software and manual kill switches, breach logs, a cooling-off rule and regular drills that prove the stops work."
category: business
version: 1.0.0
tags: [quant-finance, trading-risk-rules-and-kill-switches, everyone, engineer, risk-limits, kill-switch, position-sizing, drawdown]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - risk-register
    - remediation-plan
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Trading Risk Rules and Kill Switches
          description: "Writing and enforcing risk rules for your own trading: position and loss limits, maximum exposure, automatic kill switches and a cooling-off rule after any breach."
          projects:
            - name: Written risk policy for your own trading
              description: |-
                ## Purpose
                Rules decided in the middle of a losing day are usually rules bent to fit the loss. A one-page risk policy, written while calm, sets out what you trade, how much can be lost per trade, per day and in total, and exactly what happens when a limit is hit, so every later project in this area has something to enforce.

                ## Milestones
                1. A one-page policy covering scope, risk capital, loss limits, exposure caps and the stop rule.
                2. Every limit expressed as a number or a percentage of risk capital, with no vague words.
                3. The action on each breach written as a verb: cancel, flatten, pause or reduce.
                4. The policy dated, versioned and stored where you will see it before trading.

                ## Notes
                Keep it to one page. A policy you cannot read in two minutes before the open will not be read at all.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated, one-page risk policy exists in which every limit is a number and every breach has a named action."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every market, product and account you currently trade in one paragraph"
                - "Draft the limits section with a number beside every rule"
                - "Write the action taken on each breach as a single verb and a condition"
                - "Print or pin the signed policy beside your trading screen"
            - name: Risk capital you can afford to lose
              description: |-
                ## Purpose
                Every percentage limit in this area is a percentage of something, and that something should be money whose total loss would not touch rent, debts, an emergency fund or retirement savings. Fixing a risk capital figure first, separately from net worth, stops the limits quietly growing as confidence grows.

                ## Milestones
                1. Essential costs, emergency savings and debts listed so the untouchable money is visible.
                2. A single risk capital figure chosen and written in the policy.
                3. A rule stating that new money is only added after a written review, never after a loss.
                4. The figure shared with a partner or trusted person if household money is involved.

                ## Notes
                If you are unsure what you can afford to lose, a fee-only financial planner can help with the household picture. This project only records the number you choose.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A risk capital figure is written in the policy with a note showing it sits outside essential costs, savings and debt repayments."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Total your essential monthly costs and current emergency savings"
                - "Write down the amount you could lose entirely without changing your life"
                - "Record that figure as risk capital in the risk policy"
                - "Add a rule that top-ups need a written review dated at least a week after any loss"
            - name: Inventory of accounts, instruments and margin terms
              description: |-
                ## Purpose
                Limits fail at the edges: the forgotten second broker, the crypto exchange account, the product that trades with margin you did not realise you had. Listing every account with its instruments, margin type, liquidation rules and available controls shows where your limits actually apply and where they do not.

                ## Milestones
                1. Every brokerage, exchange and funded account listed with its login owner and base currency.
                2. Each account's margin type, liquidation method and settlement terms recorded.
                3. The risk controls each platform offers, such as loss limits or maximum order size, noted.
                4. Accounts you no longer use closed or set to close only.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete account inventory exists, listing margin terms and available platform risk controls for every account you can trade from."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your email for broker and exchange sign-up confirmations"
                - "Record margin type and liquidation rules for each account from its terms"
                - "Note which platforms offer loss limits, order size caps or close-only mode"
                - "Request closure of any dormant account you can still trade from"
            - name: Maximum loss per trade rule
              description: |-
                ## Purpose
                A fixed maximum loss per trade, set as a small fraction of risk capital, is what keeps a run of ten losers survivable. Choosing the fraction, defining how it is measured from entry to exit point, and checking it against your typical stop distance turns position size into arithmetic rather than a feeling.

                ## Milestones
                1. A maximum loss per trade written as a percentage of risk capital.
                2. A definition of how that loss is measured, including costs and expected slippage.
                3. A position size formula that converts stop distance into quantity.
                4. The rule tested against your last twenty trades to see how many would have been oversized.

                ## Notes
                Gaps and fast markets can push losses well past a stop. Size so that a loss of two or three times the planned amount is still tolerable.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The policy holds a per-trade loss cap as a percentage and a written sizing formula, checked against at least twenty past trades."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a per-trade loss cap as a percentage of risk capital"
                - "Write the formula that turns stop distance and cap into position size"
                - "Rerun your last twenty trades through the formula and count oversized ones"
                - "Build the formula into a small calculator or spreadsheet you use before each order"
            - name: Daily and weekly loss limits
              description: |-
                ## Purpose
                Bad days cluster, and the worst losses usually come from trying to win back the first one. A daily limit that ends the session and a weekly limit that ends the week, both measured on realised plus open losses, cap the damage from a single bad stretch and from the mood that follows it.

                ## Milestones
                1. A daily loss limit and a weekly loss limit written as amounts and as percentages of risk capital.
                2. A definition of when the day and week start and end in your time zone.
                3. A rule that open losses count towards the limit, not only closed trades.
                4. The required action written down: flatten, cancel working orders and stop until the next period.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Daily and weekly loss limits, their measurement window and the breach action are written in the policy and set on at least one platform."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a daily loss limit as a fraction of your weekly limit"
                - "Write when the trading day and week begin in your own time zone"
                - "Set the daily limit as a platform loss limit where your broker allows it"
                - "Add the limits to the top line of your trading screen or watchlist"
            - name: Account drawdown stop rule
              description: |-
                ## Purpose
                Without a written stop rule, a strategy that has stopped working gets traded all the way down because the next trade might be the turn. A peak-to-trough drawdown level that halts all trading, plus a second level that triggers a full review, is the rule that protects you from the strong chance that your edge was never real.

                ## Milestones
                1. A drawdown measured from the account's high-water mark, with the method written down.
                2. A first level that halves position sizes and a final level that stops all trading.
                3. A review requirement before any restart after the final level is hit.
                4. Historical or backtest drawdowns compared with the levels, with the gap noted.

                ## Notes
                Backtest drawdowns understate live ones. Most strategies fail out of sample, so set the stop below the worst backtest drawdown, not beyond it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The policy states two drawdown levels from the high-water mark, each with a named action, and a written restart review condition."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate your account's current high-water mark and drawdown"
                - "Set a size-halving level and a full stop level below the worst backtest drawdown"
                - "Write the review questions that must be answered before a restart"
                - "Record both levels in the policy with today's date"
            - name: Position size and concentration caps
              description: |-
                ## Purpose
                Five positions in the same sector, currency or crypto theme behave like one large position on the day it matters. Capping exposure per instrument, per correlated group and per theme stops a portfolio that looks diversified from losing as a single bet.

                ## Milestones
                1. A cap on any single instrument as a share of risk capital.
                2. Correlated groups defined, such as one sector, one currency or one underlying.
                3. A cap on each group's combined exposure.
                4. Current positions checked against the caps with any excess listed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Single-instrument and correlated-group caps are written in the policy and current holdings have been checked against them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Group your usual instruments by sector, currency and underlying"
                - "Set a single-instrument cap and a group cap"
                - "Compare open positions with both caps"
                - "Write a plan to bring any oversized group back inside its cap"
            - name: Gross exposure and margin usage ceiling
              description: |-
                ## Purpose
                Margin turns a bad week into an account closed by the broker at the worst prices. Setting a ceiling on gross exposure and on margin used as a share of available margin, well below what the broker allows, keeps forced liquidation something you read about rather than live through.

                ## Milestones
                1. Gross and net exposure defined in currency terms across all accounts.
                2. A gross exposure ceiling written as a multiple of risk capital.
                3. A margin usage ceiling set well below the broker's liquidation level.
                4. A check showing current exposure and margin usage against both ceilings.

                ## Notes
                Margin requirements can be raised by the broker overnight in volatile markets. Leave room for that.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Gross exposure and margin usage ceilings are written in the policy and current figures are recorded beside them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up gross and net exposure across every account in one currency"
                - "Find each broker's maintenance margin and liquidation threshold"
                - "Choose your own margin ceiling with a wide gap to liquidation"
                - "Note the current margin usage beside the new ceiling"
            - name: Banned instruments and order types list
              description: |-
                ## Purpose
                Some products and order types carry losses with no natural ceiling: short options without a hedge, geared daily-reset products held for weeks, market orders in thin books. A short list of what you will not trade, kept beside the policy, removes the decision from the moment when it looks tempting.

                ## Milestones
                1. Instruments with open-ended loss or complexity you do not understand listed by type.
                2. Order types and sessions you will not use written down, such as market orders in pre-market.
                3. Platform permissions downgraded where possible so banned products cannot be traded.
                4. A rule that anything new needs a written study before it leaves the list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A banned list of instruments and order types is attached to the policy and at least one platform permission has been reduced to match it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the product types you have traded but could not explain the payoff of"
                - "Write the order types and sessions you will avoid"
                - "Ask each broker to remove trading permissions for banned products"
                - "Add the list as a page attached to the risk policy"
            - name: Breach definitions and cooling-off rule
              description: |-
                ## Purpose
                Limits mean little if a breach is followed by a quick rule change or an immediate return to the screen. Defining exactly what counts as a breach, from an oversized order to a missed stop, and requiring a fixed cooling-off period with a written review before trading resumes, breaks the loop that turns one mistake into several.

                ## Milestones
                1. A list of events that count as breaches, each with an example.
                2. A cooling-off period for each breach level, such as the rest of the day or a full week.
                3. A short review form that must be completed before trading restarts.
                4. A rule that limits cannot be loosened during a cooling-off period.

                ## Notes
                Start from the **Remediation plan** template for the review form if you want a ready structure.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The policy lists breach types, each with a cooling-off period, and a one-page restart review form is ready to use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write five examples of a breach from your own trading history"
                - "Assign each breach level a cooling-off period"
                - "Draft the restart review form with no more than six questions"
                - "Add the rule that no limit may be raised while cooling off"
            - name: Pre-market risk checklist
              description: |-
                ## Purpose
                Checking limits before the first order catches the problems that are cheap to fix: an overnight gap that already broke a cap, a bot still running from yesterday, a margin call notice. A five-minute checklist on every trading day makes the policy something you read daily instead of once.

                ## Milestones
                1. A checklist of no more than ten items covering positions, margin, limits and running systems.
                2. The checklist kept beside the trading screen or inside the trading app notes.
                3. A record of each day it was completed, with any item that failed.
                4. The checklist revised after the first month of use.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pre-market checklist is completed on at least 90 percent of trading days in a month, with failures recorded."
                cadence: rolling
              tasks:
                - "Write the ten-item pre-market checklist from your policy"
                - "Run the pre-market risk checklist before the first order @recurring(weekly:mon,tue,wed,thu,fri)"
                - "Mark any failed item and fix it before trading"
                - "Trim or reorder the checklist after the first month"
            - name: End-of-day limit reconciliation
              description: |-
                ## Purpose
                Platform figures, your spreadsheet and what your code believes about positions can drift apart, and a cap you think you respected may already be broken. A short reconciliation after the close, comparing broker statements with your own records and with every limit, catches the drift while it is still one day old.

                ## Milestones
                1. A daily comparison of broker positions with your own records.
                2. The day's realised and open loss compared with daily and weekly limits.
                3. Any mismatch explained in a sentence before the next session.
                4. A running count of mismatches kept so recurring causes show up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each trading day ends with positions reconciled to the broker and limits checked, and every mismatch has a written explanation."
                cadence: rolling
              tasks:
                - "Download or view the broker's end-of-day position report"
                - "Reconcile broker positions against your records and limits @recurring(weekly:mon,tue,wed,thu,fri)"
                - "Write one sentence explaining any mismatch"
                - "Count mismatches by cause at the end of each month"
            - name: Weekly risk rule compliance review
              description: |-
                ## Purpose
                Small bends in the rules, a slightly larger size here, a stop moved once there, are invisible day to day and obvious in a week. A fixed weekly review that scores every trade for rule compliance, separately from profit, shows whether the policy is being followed before a bad week makes the answer painful.

                ## Milestones
                1. A compliance score for the week: trades within all rules divided by total trades.
                2. Every non-compliant trade listed with the rule it broke.
                3. One change chosen for the coming week, if any.
                4. A weekly record kept for at least twelve weeks so trends can be read.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly compliance score and list of rule breaks exists for twelve consecutive weeks."
                cadence: rolling
              tasks:
                - "Set up a sheet with one row per trade and a column per rule"
                - "Score the week's trades for rule compliance, not profit @recurring(weekly:sat)"
                - "Write the one rule you will watch most closely next week"
                - "Compare the last four weekly scores at the end of each month"
            - name: Monthly limit audit and reset
              description: |-
                ## Purpose
                Risk capital, volatility and the platforms you use change, and limits set three months ago may now be too loose or too tight. A monthly audit recalculates every limit from current risk capital, checks that platform settings still match the policy, and records the new figures so nothing changes silently.

                ## Milestones
                1. Risk capital recalculated from the month-end balance.
                2. Every percentage limit converted into a new currency amount.
                3. Platform loss limits and order caps compared with the policy and corrected.
                4. A dated audit note listing any change and the reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly audit note shows recalculated limits and confirms platform settings match the policy."
                cadence: rolling
              tasks:
                - "Record the month-end balance of each account"
                - "Recalculate every limit and check platform settings match @recurring(monthly:7)"
                - "Write a dated audit note with each change and its reason"
                - "Flag any limit that would have to rise and route it through change control"
            - name: Breach log with monthly summary
              description: |-
                ## Purpose
                Breaches you do not record get remembered as rarer and smaller than they were. A single log of every breach, its size, its cause and the cooling-off taken, summarised once a month, turns each mistake into data and shows whether the same rule keeps failing.

                ## Milestones
                1. A log with date, rule broken, amount, cause and action taken for every breach.
                2. Causes grouped into a short list such as sizing error, moved stop, system fault or news gap.
                3. A monthly summary of breach count, total cost and the most common cause.
                4. One fix chosen each month for the most common cause.

                ## Notes
                Start from the **Metrics log** template and add a cause column.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every breach for a full quarter is logged with cause and cost, and three monthly summaries name a fix."
                cadence: rolling
              tasks:
                - "Create the breach log with columns for rule, amount, cause and action"
                - "Log any past breaches you can remember from the last three months"
                - "Summarise breach count, cost and top cause for the month @recurring(monthly:15)"
                - "Pick one fix for the top cause and add it to the policy or checklist"
            - name: Quarterly kill switch fire drill
              description: |-
                ## Purpose
                A kill switch that has never been pressed is a hope, not a control. Testing every way of stopping, from the software flag to the broker's phone desk, once a quarter in a sandbox or with a tiny position, proves each one still works and how long it takes.

                ## Milestones
                1. A drill script listing each stop method and what success looks like.
                2. Each method tested and timed from trigger to all orders cancelled and positions flat.
                3. Failures and slow steps written up with a fix and an owner.
                4. The drill date and results added to the risk record.

                ## Notes
                Run drills outside market stress and, where possible, in the broker's paper or sandbox environment first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four drills a year are recorded, each with a timing for every stop method and fixes for any failure."
                cadence: cyclic
              tasks:
                - "Write the drill script listing every kill switch and manual stop"
                - "Run and time the full kill switch drill @recurring(quarterly)"
                - "Record the time each method took to cancel and flatten"
                - "Fix the slowest or failed method before the next drill"
            - name: Broker-side protections check
              description: |-
                ## Purpose
                Your own code can crash, but limits held at the broker keep working when your machine does not. Reviewing broker settings such as maximum order size, daily loss limits, price bands, close-only mode and alerts every quarter makes sure these outside controls still match the policy after platform updates.

                ## Milestones
                1. Every broker-side control available to you listed per account.
                2. Each control set to a value at or below the matching policy limit.
                3. Account alerts for margin, large fills and login set to reach your phone.
                4. A quarterly confirmation that settings survived any platform change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each account has broker-side order and loss controls set at or below policy levels, confirmed in writing each quarter."
                cadence: rolling
              tasks:
                - "Open each broker's risk or account settings page and screenshot it"
                - "Set maximum order size and daily loss controls to policy values"
                - "Turn on phone alerts for margin warnings and unusually large fills"
                - "Recheck broker-side controls against the policy @recurring(quarterly)"
            - name: Rule change control with a waiting period
              description: |-
                ## Purpose
                The most dangerous edit to a risk policy is the one made the same afternoon as a loss. Requiring every change to be written as a proposal, held for a fixed waiting period and then approved at a scheduled review gives a cooler version of you the final say.

                ## Milestones
                1. A change rule: proposals in writing, a waiting period of at least seven days, then a decision.
                2. A change log with the old value, new value, reason and date approved.
                3. Version numbers on the policy that match the change log.
                4. A monthly slot to decide pending proposals.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every policy change in the last six months appears in the change log with a proposal date at least seven days before approval."
                cadence: rolling
              tasks:
                - "Add a change control section and waiting period to the policy"
                - "Create a change log with old value, new value, reason and dates"
                - "Decide pending rule change proposals that have waited long enough @recurring(monthly:28)"
                - "Bump the policy version number after each approved change"
            - name: Risk register for your trading setup
              description: |-
                ## Purpose
                Losses do not only come from markets: a laptop dies mid-trade, a broker changes margin rules, an API key leaks, the internet drops during a news release. Listing these operational risks with likelihood, impact and a control for each shows which ones your limits do not cover.

                ## Milestones
                1. At least fifteen risks listed across market, operational, technology, broker and personal causes.
                2. Each risk scored for likelihood and impact.
                3. A control or response named for every high-scoring risk.
                4. The register reviewed monthly and after any incident.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A scored risk register of at least fifteen entries exists, every high risk has a control, and it shows a monthly review date."
                cadence: rolling
              tasks:
                - "List ten things that could cause a loss unrelated to your strategy"
                - "Score each risk for likelihood and impact on a simple scale"
                - "Name a control for every risk in the top third"
                - "Review the register and add anything new @recurring(monthly:12)"
            - name: Position sizing methods compared on paper
              description: |-
                ## Purpose
                Fixed fractional, volatility-scaled and Kelly-style sizing produce very different drawdowns from the same trades, and full Kelly sizing is widely regarded as far too aggressive for estimates as noisy as a trading edge. Running your own trade history through each method on paper shows the trade-off in your numbers before you commit to one.

                ## Milestones
                1. Fixed fractional, volatility-scaled and fractional Kelly methods each written as a formula.
                2. Your trade history or a backtest rerun under each method.
                3. Maximum drawdown and worst losing streak compared across the three.
                4. A chosen method recorded with the reason, and the others kept as notes.

                ## Notes
                Edge estimates from a backtest are usually too high. Any Kelly-based size should be a small fraction of the formula's answer, if used at all.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table shows drawdown and losing streak for three sizing methods on the same trades, with the chosen method recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the formula for fixed fractional sizing using your per-trade cap"
                - "Add volatility-scaled sizing based on recent average true range"
                - "Rerun the same trade list under each method in a spreadsheet"
                - "Record which method you chose and why in the policy"
            - name: Margin, liquidation and gap risk study
              description: |-
                ## Purpose
                Many traders first learn how their broker liquidates when it happens to them. Reading the margin and liquidation sections of each account agreement, and working through how an overnight gap or a weekend move would hit your positions, shows the real worst case behind every stop order.

                ## Milestones
                1. Each broker's margin, liquidation and negative balance terms summarised in plain words.
                2. Three gap examples worked through on current positions: overnight, weekend and trading halt.
                3. The loss each gap would cause compared with your daily and drawdown limits.
                4. Questions you could not answer sent to the broker in writing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of margin and liquidation terms per account exists, with three gap scenarios costed against your limits."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the margin and liquidation sections in each account agreement"
                - "Summarise each in five plain sentences"
                - "Cost an overnight gap of three times normal daily range on current positions"
                - "Email the broker any liquidation question the terms leave unclear"
            - name: Hidden correlation and concentration study
              description: |-
                ## Purpose
                Positions that look unrelated often share one driver, such as the dollar, interest rates or risk appetite, and correlations tend to rise towards one in a sell-off. Measuring how your typical holdings moved together in calm and stressed periods tells you how much of your diversification is real.

                ## Milestones
                1. Daily returns for your usual instruments gathered for at least three years.
                2. Correlation measured over calm periods and over a few stressed periods separately.
                3. Groups that move together in stress identified and named.
                4. Group caps in the policy checked against what the study found.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note compares calm and stressed correlations for your instruments and records any change to group caps."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download three years of daily prices for your usual instruments"
                - "Pick three stressed periods and mark their dates"
                - "Compare correlations in calm and stressed windows"
                - "Tighten any group cap the stressed correlations suggest is too loose"
            - name: Volatility-scaled limits that adjust with markets
              description: |-
                ## Purpose
                Fixed position caps are too big when volatility doubles and needlessly small when markets are quiet. Learning to scale caps by a simple volatility measure, with a ceiling the scaling can never exceed, keeps the risk per position roughly steady through calm and turbulent months.

                ## Milestones
                1. A volatility measure chosen, such as average true range or recent standard deviation.
                2. A formula that scales position caps inversely with that measure.
                3. An absolute ceiling the scaled cap can never pass.
                4. Caps recalculated on a schedule and recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A volatility-scaled cap formula with an absolute ceiling is written in the policy and recalculated monthly."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose one volatility measure and the lookback you will use"
                - "Write the scaling formula and the absolute ceiling"
                - "Recalculate volatility-scaled caps for each instrument @recurring(monthly:3)"
                - "Compare scaled caps with your old fixed caps for the last year"
            - name: Pre-trade risk checks for automated orders
              description: |-
                ## Purpose
                Engineers building their own order path need the same checks professional systems run before every order leaves: maximum quantity, maximum notional, price collars against the last trade, position limits and order rate limits. Learning how these checks are designed, and where in the code they belong, is the groundwork for every kill switch build that follows.

                ## Milestones
                1. A list of pre-trade checks with the limit each one enforces.
                2. A design note placing the checks in one gate every order must pass through.
                3. Rejection behaviour defined: log, alert and refuse, never silently resize.
                4. Unit tests written for each check with boundary values.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A design note and passing unit tests exist for at least six pre-trade checks in a single order gate."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the pre-trade checks your order path needs and their limits"
                - "Sketch a single order gate that every order must pass"
                - "Define what happens on rejection: log, alert and refuse"
                - "Write unit tests for each check at, just under and just over the limit"
            - name: Public trading failure case studies
              description: |-
                ## Purpose
                Some of the costliest trading losses on record came from software, not strategy: an old flag reused in a deployment, a loop resubmitting orders, a feed that froze while orders kept going. Reading regulator reports and post-mortems of public incidents shows which controls would have stopped each one, and which of those you have.

                ## Milestones
                1. Four public incident reports or post-mortems read and summarised.
                2. For each, the failed control and the control that would have stopped it named.
                3. A comparison against your own setup listing gaps.
                4. One gap closed or added to the risk register.

                ## Notes
                Regulators often publish detailed findings after major incidents. These are more reliable than press coverage.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four incident summaries each name the missing control, and at least one matching gap in your setup is closed or registered."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find four regulator findings or post-mortems on automated trading losses"
                - "Summarise each in half a page: cause, missing control, cost"
                - "Check your own setup for the same missing controls"
                - "Close one gap or add it to the risk register"
            - name: Behavioural traps after a loss
              description: |-
                ## Purpose
                Doubling size to win it back, moving a stop because it is close, trading out of boredom after a breach: these patterns cause more rule breaks than any market. Learning to name them, and noticing the early signs in your own behaviour, makes the cooling-off rule easier to keep.

                ## Milestones
                1. Five common post-loss patterns described in your own words.
                2. Your own early warning signs listed, such as faster clicking or skipping the checklist.
                3. A personal stop phrase or action that ends the session when a sign appears.
                4. Past breaches matched against the patterns to see which one recurs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note names five post-loss patterns, your own warning signs and the action that ends a session."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the last three times you broke a rule and what you felt first"
                - "Name the pattern behind each from a short list"
                - "Choose one physical action that ends a session, such as closing the platform"
                - "Add your warning signs to the bottom of the pre-market checklist"
            - name: Software kill switch for an automated strategy
              description: |-
                ## Purpose
                An automated strategy needs one command that stops new orders, cancels every working order and, where the rules say so, flattens positions, and it needs to fire on its own when a loss or exposure limit is crossed. Building that switch into the strategy before it trades real money is the single most important control an engineer adds.

                ## Milestones
                1. A kill switch with three actions: block new orders, cancel all working orders, flatten.
                2. Automatic triggers wired to daily loss, drawdown, exposure and order rate limits.
                3. A latched state that stays killed until a person resets it.
                4. Every trigger and reset logged with time and reason.

                ## Notes
                Make the killed state persist across restarts. A crash followed by an automatic restart should come back killed, not trading.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A latched kill switch with automatic triggers for loss, exposure and order rate is merged, tested and logging every activation."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the kill switch states and actions as a short design note"
                - "Implement block, cancel-all and flatten as separate commands"
                - "Wire daily loss, drawdown, exposure and order rate triggers to the switch"
                - "Persist the killed state so a restart comes back stopped"
            - name: Independent watchdog outside the strategy
              description: |-
                ## Purpose
                Kill switches inside the strategy process die when that process hangs or crashes. A small separate watchdog that reads positions and P and L straight from the broker, checks heartbeats from the strategy and can cancel orders on its own account connection catches the failures the strategy cannot see in itself.

                ## Milestones
                1. A watchdog running as its own process or on a separate machine.
                2. Positions and losses read from the broker, not from the strategy.
                3. A heartbeat check that triggers cancel-all if the strategy goes silent.
                4. Watchdog alerts reaching your phone within a minute.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A watchdog process independently cancels all orders within a set time when heartbeats stop or broker-reported losses cross a limit."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Decide where the watchdog runs and how it connects to the broker"
                - "Have the strategy send a heartbeat every few seconds"
                - "Trigger cancel-all from the watchdog when heartbeats stop"
                - "Review watchdog logs for missed heartbeats and false alarms @recurring(monthly:18)"
            - name: Manual kill procedure from any device
              description: |-
                ## Purpose
                If the code, the laptop or the internet fails, the last stop is a person who knows exactly how to close everything from a phone or by calling the broker. A written procedure with the trade desk number, account details and a tested phone-app sequence means anyone you trust can stop the account in minutes.

                ## Milestones
                1. The broker's trade desk number and account identifiers stored somewhere reachable offline.
                2. Step-by-step instructions to cancel and flatten from the phone app.
                3. The phone sequence tested once on a tiny position.
                4. A trusted person briefed on where the procedure is kept, if appropriate.

                ## Notes
                Never write passwords into the procedure. Keep them in a password manager the trusted person can be granted access to separately.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written manual kill procedure exists for every account and the phone-app sequence has been tested and timed once."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find each broker's trade desk phone number and save it in your phone"
                - "Write the cancel-and-flatten steps for each phone app"
                - "Test the phone sequence on a very small position and time it"
                - "Store the procedure where you can reach it without your computer"
            - name: Stale data and disconnect halt rules
              description: |-
                ## Purpose
                Strategies trading on a frozen price feed or a half-open connection can fire orders at prices that no longer exist. Defining how old data may get, what counts as a disconnect and what the system does in each case, then coding those halts, closes one of the most common causes of runaway automated losses.

                ## Milestones
                1. A maximum data age per feed beyond which no new orders are sent.
                2. Disconnect and reconnect behaviour written down, including order state checks on reconnect.
                3. Halt rules implemented and covered by tests with simulated feed freezes.
                4. Halts logged and visible in the daily records.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The system halts new orders on stale data or disconnect, reconciles order state on reconnect, and passes a simulated freeze test."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure normal update gaps on each feed to set a stale threshold"
                - "Code a halt on stale data and on lost connection"
                - "Reconcile open orders with the broker after every reconnect"
                - "Simulate a frozen feed in testing and confirm the halt fires"
            - name: Order rate and runaway loop limiter
              description: |-
                ## Purpose
                One bug that resubmits the same order in a loop can send hundreds of orders before anyone looks. Capping orders per second, per minute and per instrument, plus a cap on duplicate orders, turns a runaway loop into a killed strategy and a log entry.

                ## Milestones
                1. Normal order rates measured from logs to set sensible caps.
                2. Caps per second, per minute and per instrument implemented in the order gate.
                3. Duplicate order detection based on side, size and price within a short window.
                4. A breach of any cap triggering the kill switch.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Order rate and duplicate caps are enforced in the order gate and a test loop of repeated orders trips the kill switch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count orders per minute in last month's logs to find the normal peak"
                - "Set caps at a margin above the normal peak"
                - "Add duplicate order detection to the order gate"
                - "Write a test loop that floods orders and confirm the switch fires"
            - name: Kill switch test suite in a sandbox
              description: |-
                ## Purpose
                Kill switch code runs rarely, which is exactly why it rots. A test suite that drives every trigger in the broker's sandbox or a simulator, and runs before each release, means a change to the strategy cannot quietly break the code that stops it.

                ## Milestones
                1. A test for every automatic trigger and for the manual reset.
                2. Tests running against the broker sandbox or a faithful simulator.
                3. The suite run automatically before any release.
                4. A release blocked at least once in testing to prove the gate works.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An automated suite exercises every kill switch trigger against a sandbox and blocks a release when any test fails."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every trigger and reset path the suite must cover"
                - "Set up sandbox credentials kept apart from live ones"
                - "Write one test per trigger that checks orders cancelled and state latched"
                - "Add the suite as a required step before deployment"
            - name: Restart checklist after a kill switch fires
              description: |-
                ## Purpose
                The minutes after a kill switch fires are when people restart too fast and repeat the fault. A restart checklist that confirms the cause, reconciles positions with the broker, honours the cooling-off rule and starts at reduced size makes the restart a decision, not a reflex.

                ## Milestones
                1. A checklist covering cause, reconciliation, cooling-off, fixes and restart size.
                2. A reduced starting size and the condition for returning to normal size.
                3. A sign-off line for yourself or a second person before reset.
                4. The checklist used after at least one drill or real stop.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A restart checklist with a reduced-size rule exists and has been completed after at least one drill or real kill."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the questions that must be answered before any reset"
                - "Set the restart size and the rule for returning to full size"
                - "Add a reconciliation step against broker positions"
                - "Use the checklist after the next drill and revise it"
            - name: Choosing a broker with real risk controls
              description: |-
                ## Purpose
                Brokers differ widely in the protections they give retail and small professional accounts: some offer hard daily loss limits, order size caps and close-only modes, others offer only alerts. When opening or switching an account, comparing those controls alongside costs makes risk enforcement part of the choice rather than an afterthought.

                ## Milestones
                1. A list of controls you need, taken from your policy.
                2. Three brokers compared on those controls, regulation, costs and API support.
                3. Each broker's negative balance and liquidation policy noted.
                4. A recorded choice with the reason, or a decision to stay.

                ## Notes
                Check that any broker is authorised by the financial regulator in your country before comparing anything else.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of three brokers on risk controls, regulation and cost ends in a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the broker-side controls your policy depends on"
                - "Check each candidate's regulatory status on the regulator's register"
                - "Compare three brokers on controls, liquidation policy and costs"
                - "Record the choice and the deciding reason"
            - name: Scaling down after drawdown, scaling up by rule
              description: |-
                ## Purpose
                Cutting size after losses and only raising it after a set run of compliant trading keeps a struggling strategy small while the evidence comes in. Writing the step-down and step-up schedule in advance avoids both freezing completely and jumping back to full size after one good week.

                ## Milestones
                1. Size steps tied to drawdown levels, such as full, half and quarter size.
                2. Conditions for stepping back up, based on time and compliance, not just profit.
                3. The current step recorded and visible before each session.
                4. A monthly check that the step matches the drawdown.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written step-down and step-up schedule exists and the current size step is checked against drawdown each month."
                cadence: rolling
              tasks:
                - "Draw a table of drawdown levels and matching size steps"
                - "Write step-up conditions based on weeks of compliant trading"
                - "Check the current size step against drawdown @recurring(monthly:25)"
                - "Show the current step at the top of the pre-market checklist"
            - name: Hard stop orders versus mental stops
              description: |-
                ## Purpose
                Stops that live only in your head depend on you being at the screen, awake and willing. Deciding where resting stop orders are required, where they would be picked off in thin markets and what replaces them there, settles a question that otherwise gets reopened on every trade.

                ## Milestones
                1. Markets and sessions where resting stops are required listed.
                2. Cases where resting stops are unwise, with the alternative control named.
                3. A rule that any position without a resting stop is sized smaller.
                4. The decision written into the policy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The policy states where resting stops are mandatory and what alternative control applies elsewhere."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count how many recent trades had no resting stop order"
                - "List the markets where resting stops get triggered by thin liquidity"
                - "Choose the alternative control for those markets"
                - "Write the stop order rule into the policy"
            - name: Separate trading capital from household money
              description: |-
                ## Purpose
                When the trading account can be topped up from the current account in two taps, the risk capital limit is a suggestion. Holding risk capital in dedicated accounts with no linked overdraft or card, and sweeping anything above the limit back out, makes the money boundary physical.

                ## Milestones
                1. Trading accounts funded only from one dedicated transfer account.
                2. Linked cards, overdrafts and instant top-ups removed or disabled.
                3. A monthly sweep of any balance above risk capital back to savings.
                4. A record of every deposit with its date and the review that approved it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Trading accounts have no instant top-up link, and a monthly record shows sweeps and approved deposits."
                cadence: rolling
              tasks:
                - "Remove saved cards and instant deposit links from each trading platform"
                - "Open or choose one dedicated account for trading transfers"
                - "Sweep any balance above risk capital back to savings @recurring(monthly:1)"
                - "Log each deposit with the review that approved it"
            - name: Pre-launch risk sign-off for a new strategy
              description: |-
                ## Purpose
                A new strategy, manual or automated, should not reach real money until its limits, kill switch settings and stop rule are written and checked. A dated sign-off, with a small starting size and a fixed review point, treats launch as a controlled test, which is what it is when most strategies fail out of sample.

                ## Milestones
                1. Strategy-specific limits written and inside the account-level policy.
                2. Kill switch triggers and manual procedure confirmed for the strategy.
                3. A starting size well below the target size, with a review date.
                4. A signed and dated launch note stored with the strategy.

                ## Notes
                Results from paper trading belong in a separate review. This sign-off covers only the risk controls.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dated launch note confirms strategy limits, tested kill switch triggers, a reduced starting size and a review date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the strategy's own loss, exposure and order limits"
                - "Confirm each kill switch trigger fires for this strategy in the sandbox"
                - "Set the starting size and the date of the first review"
                - "Sign and date the launch note"
            - name: Scheduled news and event day risk plan
              description: |-
                ## Purpose
                Central bank decisions, inflation releases, earnings and elections bring gaps and spreads that ordinary limits were not sized for. A standing plan that lists the week's scheduled events and states what changes on those days, from smaller size to no new positions, keeps a known risk from arriving as a surprise.

                ## Milestones
                1. Event types that affect your markets listed with the rule for each.
                2. A weekly look at the economic and earnings calendar.
                3. Reduced limits or no-trade windows set for each listed event.
                4. A note after each major event on whether the plan held.
              priority: medium
              frontmatter:
                mode: event
                output_kind: habit
                success_criteria: "Each week's scheduled events are listed with an applied limit change, and post-event notes exist for major releases."
                cadence: rolling
              tasks:
                - "List the event types that have moved your markets most"
                - "Write the limit change for each event type"
                - "Check the coming week's event calendar and mark no-trade windows @recurring(weekly:sun)"
                - "Write a two-line note after each major event"
            - name: Holiday and travel trading shutdown
              description: |-
                ## Purpose
                Positions and bots left running while you are on a plane or in a different time zone are risks nobody is watching. A shutdown plan, run before every trip, decides what to close, what to reduce, which systems to switch off and how you can reach the manual kill procedure while away.

                ## Milestones
                1. A pre-trip list of positions to close or reduce and bots to switch off.
                2. Broker-side stops and loss limits confirmed for anything left open.
                3. The manual kill procedure available on your phone while travelling.
                4. A restart plan for your return, using the restart checklist.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the next trip, every bot is off or capped, open positions have broker-side stops, and the manual procedure is on your phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the shutdown list for your next trip"
                - "Switch off or cap every automated strategy the day before leaving"
                - "Confirm broker-side stops on any position left open"
                - "Plan the first session back at reduced size"
            - name: First breach review session
              description: |-
                ## Purpose
                The first real breach is the best test of whether the policy works, and the most tempting one to skip reviewing. A structured review, alone or with an accountability partner, covering what happened, which control failed and what changes, sets the pattern for every breach after it.

                ## Milestones
                1. The breach timeline written from the first warning sign to the final loss.
                2. The control that should have stopped it and why it did not identified.
                3. Changes agreed and passed through change control, not made on the spot.
                4. The review filed with the breach log entry.

                ## Notes
                Start from the **Remediation plan** template. Ask the agent to draft the timeline from your breach log and order history, then correct it yourself.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written review of the first breach names the failed control and lists changes sent through change control."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an hour within three days of the breach for the review"
                - "Ask the agent to draft a timeline from the breach log and order history"
                - "Name the control that failed and the reason"
                - "Submit proposed changes through change control"
            - name: Annual risk policy rewrite
              description: |-
                ## Purpose
                Twelve months of breach logs, drills and audits shows which rules earned their place and which were ignored or outgrown. Rewriting the policy once a year from that evidence, rather than patching it rule by rule, keeps it short, current and actually read.

                ## Milestones
                1. The year's breach log, audits and drill results gathered.
                2. Every rule marked keep, change or remove with a reason.
                3. A new policy version still on one page.
                4. The old version archived with the change log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A new dated policy version exists each year with a keep, change or remove decision recorded for every old rule."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Collect the year's breach log, audit notes and drill results"
                - "Mark each rule keep, change or remove with one reason"
                - "Rewrite and redate the risk policy @recurring(yearly)"
                - "Archive the old version beside the change log"
            - name: Starter rules for a small first account
              description: |-
                ## Purpose
                First accounts are where habits form, and the habit of following limits matters more than any early profit. A deliberately simple rule set, one instrument type, a tiny per-trade loss, a daily stop and a hard cap on account losses, lets a beginner learn the mechanics while the cost of mistakes stays small.

                ## Milestones
                1. A starter rule set of no more than six rules.
                2. A very small risk capital amount you would treat as the price of learning.
                3. Thirty trades taken entirely inside the rules before any rule is changed.
                4. A review after those thirty trades deciding whether to continue.

                ## Notes
                Most new traders lose money. Treat the starter account as tuition with a fixed fee, not a source of income.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Thirty trades are logged inside a six-rule starter set, followed by a written continue or stop decision."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write six starter rules on a single index card"
                - "Fund the account with only the tuition amount you chose"
                - "Tally each trade as inside or outside the rules until you reach thirty"
                - "Decide in writing whether to continue after trade thirty"
            - name: Risk rules around a full-time job
              description: |-
                ## Purpose
                Trading in meeting gaps or from a phone under the desk is where sizes creep and stops get skipped. Rules built for a day job set fixed trading windows, require resting stops on anything held through work hours and put automated strategies on tighter limits because nobody is watching.

                ## Milestones
                1. Trading windows set outside working hours, written in the policy.
                2. A rule that positions held during work have resting stops and smaller size.
                3. Automated strategies given tighter loss limits during unattended hours.
                4. A weekly check that trading stayed inside the windows.

                ## Notes
                Check your employer's personal trading policy too, especially in finance roles where pre-clearance or holding periods may apply.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Trading windows and unattended-hours limits are in the policy, and a weekly check confirms trades fell inside the windows."
                cadence: rolling
              tasks:
                - "Read your employer's personal trading policy for any restrictions"
                - "Write your trading windows into the policy"
                - "Set tighter loss limits for automated strategies during work hours"
                - "Check the week's trade times against your windows @recurring(weekly:sun)"
            - name: Household agreement on trading limits
              description: |-
                ## Purpose
                When a partner shares the household finances, trading losses are partly their losses too, and secrecy is how small breaches become large ones. A short written agreement on risk capital, the drawdown stop and what gets shared each quarter keeps trading a known, bounded part of household money.

                ## Milestones
                1. Risk capital and the drawdown stop explained to your partner in plain words.
                2. A written agreement on what is shared and how often.
                3. A rule that any new deposit is discussed before it is made.
                4. A quarterly check-in held and noted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signed household agreement on trading limits exists and quarterly check-ins with your partner are noted."
                cadence: rolling
              tasks:
                - "Explain your risk capital and drawdown stop to your partner"
                - "Write a one-page household trading agreement together"
                - "Hold a short trading check-in with your partner @recurring(quarterly)"
                - "Agree what happens if the drawdown stop is hit"
            - name: Personal limits tighter than a funded account's rules
              description: |-
                ## Purpose
                Funded and evaluation accounts end the moment their daily loss or trailing drawdown rule is touched, often measured in ways that differ from your own records. Setting your own limits a clear margin inside the firm's, measured the same way the firm measures, means your stop fires before theirs does.

                ## Milestones
                1. The firm's loss and drawdown rules restated, including how and when they are measured.
                2. Your own limits set a fixed margin inside each firm rule.
                3. Platform alerts or code triggers set at your limits, not the firm's.
                4. A note of any difference between how you and the firm calculate losses.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every firm loss rule has a matching personal limit set inside it, with alerts or triggers firing at your level."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy the firm's loss and drawdown rules into your policy word for word"
                - "Note whether each is measured on balance, equity or intraday high"
                - "Set your own limit a fixed margin inside each firm rule"
                - "Point your alerts and triggers at your limits"
            - name: Shared controls for a small trading team or club
              description: |-
                ## Purpose
                When two or more people trade shared capital or run shared code, the question becomes who can change a limit and who can press the switch. A two-person rule for limit changes, named owners for each kill switch and a shared breach log stop one person's bad day from becoming everyone's loss.

                ## Milestones
                1. Owners named for each strategy, account and kill switch.
                2. A two-person rule for raising any limit or resetting a kill switch.
                3. Account permissions set so only owners can trade each account.
                4. A shared breach log reviewed together each month.

                ## Notes
                Pooling other people's money can bring licensing and legal duties. Take advice from a qualified professional before any money from non-members is involved.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A team control sheet names owners and the two-person rule, account permissions match it, and monthly joint reviews are recorded."
                cadence: rolling
              tasks:
                - "List every shared account, strategy and switch with one owner each"
                - "Write the two-person rule for limit raises and resets"
                - "Restrict account permissions to named owners"
                - "Review the shared breach log together @recurring(monthly:10)"
            - name: Portfolio-level kill switch across strategies
              description: |-
                ## Purpose
                Several strategies each inside their own limits can still add up to a loss the account cannot take, especially when they share a driver. An aggregate switch that watches combined loss and exposure across every strategy and account, and stops them all together, covers the gap that per-strategy limits leave.

                ## Milestones
                1. Combined loss and exposure measured across all strategies in near real time.
                2. Aggregate limits set below the sum of the individual ones.
                3. One command that stops every strategy and account together.
                4. The aggregate switch included in the quarterly drill.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An aggregate kill switch stops all strategies when combined loss or exposure crosses a limit set below the sum of individual limits."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Sum current loss limits across strategies to see the worst combined case"
                - "Set aggregate limits below that sum"
                - "Build one service that reads all accounts and stops everything"
                - "Add the aggregate switch to the drill script"
            - name: Tail and gap scenarios for limit sizing
              description: |-
                ## Purpose
                Limits sized on normal daily ranges say nothing about a limit-down open, a weekend crypto crash or a currency peg breaking. Working through a handful of extreme but plausible scenarios on current positions shows how far past your stops a loss can run, and whether the drawdown stop still protects the account.

                ## Milestones
                1. Five tail scenarios chosen for your markets, each with a size of move.
                2. Each scenario's loss on current positions calculated, assuming no stop fills.
                3. Scenarios that would breach the drawdown stop identified.
                4. Size or exposure caps reduced where a scenario breaks the account.

                ## Notes
                Historical extremes are a floor, not a ceiling. Assume the next one can be larger.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five costed tail scenarios exist, and any that breach the drawdown stop have led to a recorded cap change."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick five extreme moves relevant to your markets"
                - "Cost each on current positions with no stop fills"
                - "Mark the scenarios that would breach the drawdown stop"
                - "Reduce caps where a scenario breaks the account and log the change"
            - name: Layered controls map from strategy to exchange
              description: |-
                ## Purpose
                Experienced engineers think of risk controls as layers: strategy logic, the order gate, the watchdog, broker limits and exchange protections such as price bands and self-trade prevention. Mapping which layer enforces each policy rule, and where only one layer stands between a bug and a loss, shows where to add redundancy.

                ## Milestones
                1. Every policy rule listed against the layers that enforce it.
                2. Rules enforced by only one layer marked as single points of failure.
                3. Exchange and broker protections you rely on confirmed from their documentation.
                4. A second layer added for the two most serious single points of failure.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A controls map shows each policy rule by layer, and the two most serious single-layer rules now have a second layer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw a table of policy rules against the five control layers"
                - "Mark every rule enforced in only one layer"
                - "Confirm exchange and broker protections from their published documentation"
                - "Add a second layer for the two most serious gaps"
---

# Trading Risk Rules and Kill Switches

This area is for anyone trading their own money, by hand or with code, who wants the rules that limit losses written down before they are needed and enforced by something other than willpower. It starts with foundations (a risk policy, the capital you can afford to lose, per-trade, daily and drawdown limits, exposure caps and a cooling-off rule), then the daily, weekly and monthly machinery that checks the rules are kept, the knowledge behind sound limits, engineering work on software, watchdog and manual kill switches, decisions about brokers and scaling, dated events such as a strategy launch or a holiday shutdown, variants for a beginner, someone with a full-time job, a household and a small team, and finally specialist work on portfolio-level stops, tail scenarios and layered controls.

What repeats is a pre-market checklist and an end-of-day reconciliation on trading days, a weekly compliance review, monthly audits of limits, breaches and pending rule changes, and quarterly kill switch drills and broker control checks. The Operational checklist, Metrics log, Risk register and Remediation plan templates pair with the projects that name them. Nothing here is trading or investment advice: most strategies fail out of sample, so the rules exist to keep a failing strategy small, and any tax, legal or regulatory question belongs with a qualified professional. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
