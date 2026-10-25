---
id: quant-finance.prop-firm-evaluation-challenge
name: Prop Firm Evaluation Challenge
description: "The rule book read line by line, drawdown limits worked out in numbers, a trading plan and stop rule fixed in advance, a daily journal and headroom log, and an honest ledger of what the attempts cost."
category: business
version: 1.0.0
tags: [quant-finance, prop-firm-evaluation-challenge, everyone, knowledge-worker, prop-firm, drawdown-limits, trading-plan, risk-rules]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - risk-register
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Prop Firm Evaluation Challenge
          description: "Organising a prop-firm evaluation: reading the rule book, daily loss and drawdown limits, a trading plan written in advance, a journal and an honest view of the fees."
          projects:
            - name: Rule book read line by line before paying
              description: |-
                ## Purpose
                Most failed evaluations are lost to a rule the trader never read: a daily loss measured on equity rather than balance, a ban on holding over the weekend, a minimum number of trading days or a consistency clause. Reading the whole rule book and FAQ before paying, and writing every rule in your own words, turns the small print into a checklist you can follow under pressure.

                ## Milestones
                1. The full rule book, FAQ and terms of service saved as dated copies.
                2. Every rule restated in one plain sentence on a single page.
                3. Rules you could break by accident marked, with the exact wording that defines them.
                4. Unclear rules sent to the firm's support in writing and the answers saved.

                ## Notes
                Firms change rules often. The copy you saved on the day you paid is the one to quote if a dispute ever arises.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page restatement of every evaluation rule exists beside dated copies of the rule book, with written answers to any unclear points."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the rule book, FAQ and terms and save them with today's date"
                - "Rewrite each rule as one plain sentence on a single page"
                - "Mark the rules you could break without noticing"
                - "Email support about any rule whose wording is ambiguous"
            - name: Daily loss and drawdown limits in numbers
              description: |-
                ## Purpose
                Five percent daily loss and ten percent maximum drawdown can mean very different amounts depending on whether it is measured from the starting balance, the day's opening equity or the highest equity reached. Working the limits out as currency figures for your account size, including open trades, removes the guesswork at the moment it matters.

                ## Milestones
                1. The measurement basis of each limit identified: balance, equity, static or trailing, and the reset time.
                2. A small spreadsheet that shows today's loss limit and the overall floor as currency amounts.
                3. Three worked examples checked, including a day with an open losing trade.
                4. The day's limit and floor written where you will see them before every session.

                ## Notes
                Check the time zone of the daily reset. A trade open across the reset can count against two days.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calculator gives the daily loss limit and the drawdown floor in currency for your account, verified against three worked examples."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the exact definition and reset time of each loss limit"
                - "Build a sheet that turns the limits into currency amounts"
                - "Test the sheet on three example days, one with an open loser"
                - "Write today's limit and floor on a card by the screen"
            - name: True cost of an evaluation attempt
              description: |-
                ## Purpose
                The advertised fee is rarely the full price: resets, platform and data fees, monthly subscriptions on some futures evaluations, activation fees for the funded stage and currency conversion all add up. Totting up the full cost of one attempt, and of the three or four attempts many people need, shows what a payout has to clear before you are ahead.

                ## Milestones
                1. Every fee listed: evaluation, reset, data, platform, activation and any monthly charge.
                2. The cost of one attempt and of four attempts calculated in your own currency.
                3. The payout needed after the profit split to recover the four-attempt cost worked out.
                4. A maximum total spend for the year decided and written down.

                ## Notes
                Treat the evaluation fee as money spent, not invested. A refund on first payout is a bonus, not a plan.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written cost sheet shows the full price of one and four attempts and a yearly spending cap you have committed to."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every fee on the firm's pricing and FAQ pages"
                - "Add currency conversion and card charges to the total"
                - "Work out the payout needed to cover four attempts"
                - "Write a yearly spending cap and put it in your budget"
            - name: Prop firm due diligence shortlist
              description: |-
                ## Purpose
                Prop firms range from long-established trading businesses to marketing operations that earn mostly from fees and have closed or frozen payouts with little warning. Checking how long a firm has existed, where it is registered, who provides its platform and liquidity, and what traders report about payouts gives you a shortlist built on evidence rather than adverts.

                ## Milestones
                1. Three to five firms listed with their legal entity, country of registration and years operating.
                2. Payout records and complaint patterns checked across independent forums and review sites.
                3. Each firm's platform provider and data feed noted.
                4. One firm chosen, with the reasons and the main doubts recorded.

                ## Notes
                Start from the **Purchase decision** template. Be wary of firms whose rules change every few weeks or whose payout proof is only screenshots they post themselves.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored shortlist of at least three firms with registration, history and payout evidence, and a recorded choice with reasons."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List three to five firms that offer the market you trade"
                - "Look up each firm's legal entity and country of registration"
                - "Read recent payout reports and complaints on independent forums"
                - "Score the firms against the same five criteria and choose one"
            - name: Challenge trading plan written in advance
              description: |-
                ## Purpose
                A plan written before the first trade decides what you trade, when, what a valid setup looks like, how much you risk and when you stop, so that none of it gets decided mid-session with the daily limit in view. It also gives you something concrete to review when the attempt ends, whether it passes or not.

                ## Milestones
                1. Markets, sessions and setups you will trade listed, with everything else ruled out.
                2. Entry, exit and stop rules written so another person could follow them.
                3. Risk per trade, maximum trades per day and the personal daily stop stated as numbers.
                4. The plan signed and dated, with a rule that changes wait for the weekly review.

                ## Notes
                Keep it to two pages. If a rule cannot be checked from the journal afterwards, rewrite it until it can.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated two-page trading plan names markets, sessions, setups, entry and exit rules, risk per trade and a daily stop, all checkable from the journal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the markets and sessions you will trade and nothing else"
                - "Describe each setup so someone else could spot it"
                - "State risk per trade, trades per day and your daily stop as numbers"
                - "Sign and date the plan and save it beside the rule book copy"
            - name: Position sizing rule inside the firm's limits
              description: |-
                ## Purpose
                Sizing from the remaining headroom, not the headline account size, fixes how much you can lose on any single trade so that one bad trade cannot end the attempt. On a trailing drawdown the headroom can be far smaller than the balance suggests, which is exactly when people size up.

                ## Milestones
                1. Risk per trade set as a fixed fraction of the distance to the drawdown floor.
                2. A lot or contract size table for common stop distances on each instrument you trade.
                3. A rule for cutting size after two consecutive losses recorded.
                4. The table checked against the platform's contract specifications and tick values.

                ## Notes
                A common starting point is that no single trade may use more than a quarter of the day's loss limit. Agree your own number and keep it.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written sizing rule and a lot or contract table exist, and every trade in the first week of the journal matches them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose your risk per trade as a fraction of remaining headroom"
                - "Look up tick or pip values for each instrument on the platform"
                - "Build a size table for your usual stop distances"
                - "Write the rule for cutting size after two losses in a row"
            - name: Personal stop rule tighter than the firm's
              description: |-
                ## Purpose
                Trading right up to the firm's daily loss limit means a single slipped stop or spread spike breaches the account. A personal stop set well inside it, plus a rule for walking away after a set number of losses or a breach of your own plan, protects the attempt from the sessions that go wrong.

                ## Milestones
                1. A personal daily stop written as a currency amount below the firm's limit.
                2. A maximum number of losing trades per day agreed.
                3. A walk-away rule written for any day you break your own plan.
                4. The stop rule set as an alert or platform limit wherever the platform allows it.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written personal daily stop, loss count limit and walk-away rule exist, and a platform alert or limit enforces the daily stop."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set a personal daily stop below the firm's daily limit"
                - "Decide the number of losing trades that ends your day"
                - "Write what you do on any day you break your own plan"
                - "Set a balance alert or daily loss lock on the platform"
            - name: Platform and order type rehearsal on a free trial
              description: |-
                ## Purpose
                Your evaluation platform may differ from the one you practise on: different order tickets, how bracket orders behave, how stops are shown, what happens when the connection drops. A few sessions on the firm's free trial or demo, before paying, mean the first paid trade is not also your first time using the platform.

                ## Milestones
                1. A free trial or demo of the firm's exact platform and data feed opened.
                2. Market, limit, stop and bracket orders placed and cancelled without error.
                3. Spreads and fills at your usual session times noted.
                4. A short list of platform quirks written into the trading plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least three trial sessions completed on the firm's platform, with order types tested and a written list of quirks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Open the firm's free trial or demo on its own platform"
                - "Place and cancel each order type you plan to use"
                - "Note spreads and fills at your normal trading times"
                - "Add a list of platform quirks to the trading plan"
            - name: Allowed instruments, news and holding rules
              description: |-
                ## Purpose
                Many firms restrict trading around high-impact news, ban holding positions over the weekend or overnight on some accounts, limit which instruments count, and prohibit certain approaches such as hedging across accounts or exploiting price feed delays. Mapping exactly what is allowed for your account type stops a winning trade from being disqualified.

                ## Milestones
                1. Permitted instruments and trading hours listed for your account type.
                2. News trading restrictions and their time windows written down.
                3. Overnight and weekend holding rules recorded.
                4. Prohibited practices listed and checked against your trading plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page list of allowed instruments, news windows, holding rules and banned practices, checked against the trading plan with no conflicts left."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the instruments your account type is allowed to trade"
                - "Write down the news windows when trading is restricted"
                - "Record the overnight and weekend holding rules"
                - "Check your plan for any setup that breaks a prohibited practice"
            - name: Pre-session checklist for challenge days
              description: |-
                ## Purpose
                Most attempts that end quietly end on something a short check would have caught: a news release in the next hour, yesterday's loss counting against today, the wrong account selected, a size table not updated after a drawdown. Two minutes of checks before every session beats an afternoon of explaining a breach.

                ## Milestones
                1. A checklist of eight items or fewer covering account, limits, news, sizing and mood.
                2. The checklist kept beside the platform, on paper or on screen.
                3. Twenty sessions in a row started with the checklist completed.
                4. Any item that caught a problem marked so it never gets dropped.

                ## Notes
                Start from the **Operational checklist** template. Include one honest question about tiredness or frustration; skipped sessions are cheaper than breached accounts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The checklist is completed before every session, with twenty consecutive completed sessions recorded in the journal."
                cadence: rolling
              tasks:
                - "Write a checklist of eight items covering account, limits, news and size"
                - "Print the checklist or pin it beside the platform"
                - "Run the pre-session checklist before trading @recurring(daily)"
                - "Mark any item that caught a real problem this month"
            - name: Challenge journal with rule-compliance tags
              description: |-
                ## Purpose
                In an evaluation the question is not just whether a trade made money but whether it followed the plan and stayed inside the rules. A journal that tags every trade as compliant or not, with the setup, size, stop and the reason for entering, shows which losses came from the market and which came from you.

                ## Milestones
                1. A journal with fields for setup, size, stop, outcome, plan compliance and notes.
                2. Every trade of the attempt logged on the day it was taken.
                3. Each trade tagged compliant or non-compliant, with the rule broken named.
                4. A running count of non-compliant trades visible on the first page.

                ## Notes
                Write the reason for entering before the result is known. Reasons written afterwards always sound better.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every trade in the attempt appears in the journal on the day taken, tagged for plan compliance, with a visible count of rule breaks."
                cadence: rolling
              tasks:
                - "Set up journal columns for setup, size, stop, outcome and compliance"
                - "Log every trade and tag it compliant or not @recurring(daily)"
                - "Add the rule broken to every non-compliant entry"
                - "Keep a running count of rule breaks on the front page"
            - name: End-of-day drawdown headroom log
              description: |-
                ## Purpose
                On a trailing drawdown the floor moves up as equity rises, so a good week can leave you with less room than when you started. Logging closing equity, the high-water mark, the current floor and the distance to it each day keeps the real risk in front of you and feeds the next day's position sizes.

                ## Milestones
                1. A log with columns for date, closing equity, high-water mark, floor and headroom.
                2. One entry made every trading day of the attempt.
                3. Headroom shown as a currency amount and as a number of full-risk trades.
                4. Position sizes for the next day updated from the latest headroom figure.

                ## Notes
                Start from the **Metrics log** template. Check your figures against the firm's dashboard; if they disagree, ask support which one counts.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every trading day has a headroom entry matching the firm's dashboard, and next-day sizes are set from it."
                cadence: rolling
              tasks:
                - "Create the headroom log with equity, high-water mark and floor"
                - "Record closing equity and remaining headroom @recurring(daily)"
                - "Convert headroom into the number of full-risk trades left"
                - "Compare your figures with the firm's dashboard and note any gap"
            - name: Weekly challenge review
              description: |-
                ## Purpose
                Weekly reviews are where the plan is allowed to change, and the only place. Looking at the week's journal, compliance count, headroom and progress toward the target separates what the market did from what you did, and keeps rule changes slow and deliberate instead of reactive.

                ## Milestones
                1. A fixed weekly slot for the review kept for the length of the attempt.
                2. Win rate, average win and loss, and compliance rate written down each week.
                3. No more than one plan change made per week, with its reason recorded.
                4. A one-line verdict for the week saved: on track, behind or stop.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written review exists for every week of the attempt, with statistics, compliance rate and at most one dated plan change."
                cadence: rolling
              tasks:
                - "Block a review slot at the end of each trading week"
                - "Review the week's journal, compliance and headroom @recurring(weekly:sat)"
                - "Write at most one plan change and the reason for it"
                - "Record a one-line verdict: on track, behind or stop"
            - name: Weekly news window and calendar check
              description: |-
                ## Purpose
                Where news trading is restricted, the banned window usually covers minutes either side of named releases, and a position open in that window can void profits or breach the account. Marking the week's restricted windows in your calendar every weekend means you plan around them rather than discovering them mid-trade.

                ## Milestones
                1. The firm's list of restricted news events and window lengths saved.
                2. An economic calendar source chosen and set to your time zone.
                3. Every restricted window for the coming week blocked in your diary.
                4. No trade opened or held inside a restricted window across the attempt.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Restricted news windows are in the diary every week, and the journal shows no positions held inside one."
                cadence: rolling
              tasks:
                - "Save the firm's restricted news list and window lengths"
                - "Set an economic calendar to your local time zone"
                - "Block next week's restricted news windows in your diary @recurring(weekly:sun)"
                - "Check the journal for any trade held through a restricted window"
            - name: Consistency rule tracker
              description: |-
                ## Purpose
                Some firms cap how much of your total profit can come from a single day, or require a minimum number of profitable days, before you pass or get paid. Tracking your best day as a share of total profit each week shows early whether one big day is about to delay a pass or a payout.

                ## Milestones
                1. The firm's consistency rule restated as a formula you can calculate.
                2. Best day, total profit and the resulting ratio tracked through the attempt.
                3. A warning level set below the firm's threshold.
                4. A plan agreed for what you do when the warning level is reached.

                ## Notes
                The answer to a consistency warning is usually more ordinary days, not one bigger one. Do not raise size to fix the ratio.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The consistency ratio is calculated weekly with a warning level set below the firm's threshold and a written response plan."
                cadence: rolling
              tasks:
                - "Rewrite the consistency rule as a formula you can calculate"
                - "Update best day and total profit ratio @recurring(weekly:fri)"
                - "Set a warning level below the firm's threshold"
                - "Write what you will do if the warning level is reached"
            - name: Phase progress board
              description: |-
                ## Purpose
                Passing needs several conditions at once: the profit target, the minimum trading days, no breach and sometimes a time limit. A single board that shows each condition and how far away it is stops you chasing the target in the last days when the real gap is two more trading days.

                ## Milestones
                1. Every pass condition for the current phase listed on one page.
                2. Progress on each condition updated after each trading week.
                3. The remaining days, if there is a time limit, compared with the remaining target.
                4. A note made whenever the target is close, reminding you of the near-target rule in your plan.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A board listing every pass condition is updated weekly through each phase, with the remaining gap on each shown."
                cadence: rolling
              tasks:
                - "List every pass condition for the current phase on one page"
                - "Update progress against each pass condition @recurring(weekly:wed)"
                - "Compare days left with the profit still needed"
                - "Reread the near-target rule in your plan when the target is close"
            - name: Monthly evaluation spend ledger
              description: |-
                ## Purpose
                Evaluation fees are small enough individually to be bought on impulse after a breach, and a few months of resets can quietly cost more than a holiday. A ledger of every fee against the yearly cap you set, reconciled with your card statement each month, keeps the spending visible and honest.

                ## Milestones
                1. A ledger with every evaluation, reset, data and activation fee paid.
                2. Monthly totals compared with the yearly spending cap.
                3. Any refunds and payouts recorded beside the fees.
                4. Net position, payouts minus all fees, shown as a single figure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fee and payout is in the ledger, reconciled with card statements monthly, with a net figure against the yearly cap."
                cadence: rolling
              tasks:
                - "List every evaluation fee paid so far in one ledger"
                - "Reconcile the ledger with your card statement @recurring(monthly:3)"
                - "Record refunds and payouts beside the fees"
                - "Show net position and remaining yearly cap at the top"
            - name: Monthly rule change check
              description: |-
                ## Purpose
                Firms revise drawdown types, payout terms, consistency rules and banned practices, sometimes for accounts already open. A short monthly comparison of the current rule book with your saved copy catches changes before they catch you, and keeps your one-page rule summary accurate.

                ## Milestones
                1. The current rule book and FAQ compared with your last saved copy.
                2. Any changes listed with the date you noticed them.
                3. The one-page rule summary and the trading plan updated where needed.
                4. Changes that affect open accounts confirmed in writing with support.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly comparison against the saved rule book exists, with the summary and plan updated for every change found."
                cadence: rolling
              tasks:
                - "Save a fresh copy of the rule book and FAQ"
                - "Compare the rule book with last month's copy @recurring(monthly:20)"
                - "Update your rule summary and plan for any change"
                - "Ask support in writing whether a change applies to your open account"
            - name: Funded account payout routine
              description: |-
                ## Purpose
                Payouts on funded accounts usually follow a set cycle, with minimum amounts, minimum trading days and a request window, and missing the window can mean waiting another full cycle. A monthly routine for checking eligibility, requesting the payout and recording what arrived turns paper profit into money in your account.

                ## Milestones
                1. Payout cycle, minimum amount, eligibility rules and request window written down.
                2. Eligibility checked before each window opens.
                3. Each request, the amount and the date funds arrived recorded.
                4. Any delay beyond the firm's stated timeframe raised in writing.

                ## Notes
                Requesting payouts regularly, rather than letting profit build up, reduces how much you have exposed to the firm itself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every payout window has a recorded eligibility check, and every request has its amount, date and arrival date logged."
                cadence: rolling
              tasks:
                - "Write down the payout cycle, minimum and request window"
                - "Check payout eligibility before the window opens @recurring(monthly:15)"
                - "Log each request amount and the date funds arrive"
                - "Email support about any payout later than the stated timeframe"
            - name: Trailing drawdown mechanics with worked examples
              description: |-
                ## Purpose
                Trailing drawdowns are the most misunderstood rule in evaluations: whether the floor follows intraday equity or closing balance, whether it stops trailing at the starting balance, and how an open winner that reverses can tighten the floor. Working ten examples by hand makes the mechanics instinctive before your money depends on them.

                ## Milestones
                1. The three common drawdown types written up: static, end-of-day trailing and intraday trailing.
                2. Ten worked examples completed for your firm's version, including a reversing winner.
                3. The point at which the floor stops trailing, if it does, identified.
                4. Your sizing rule checked against the worst example.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten worked drawdown examples for your firm's rule are written out and match the firm's own explanation or support's answer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-paragraph summary of static and trailing drawdowns"
                - "Work ten examples for your firm's drawdown rule by hand"
                - "Find where the floor stops trailing, if it ever does"
                - "Send one tricky example to support and compare their answer"
            - name: Pass probability simulation from your own trades
              description: |-
                ## Purpose
                Your win rate, average win and loss and risk per trade decide how often you would hit the target before the drawdown, and the answer is often far lower than people expect. Resampling your own journal or backtest trades thousands of times against the firm's rules gives an estimate of the pass rate and cost per pass before you pay.

                ## Milestones
                1. At least fifty past trades, from a journal or an honest backtest, collected with their results.
                2. A simulation that replays random sequences of those trades against target, daily limit and drawdown.
                3. Estimated pass rate and average attempts per pass recorded.
                4. Cost per pass worked out from the fee and the simulated pass rate.

                ## Notes
                Most strategies perform worse live than in testing, so treat the simulated pass rate as an upper bound. A spreadsheet is enough; the agent can draft the formulas if you describe the rules.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A simulation of at least one thousand runs gives a pass rate and cost per pass, recorded alongside the trades it used."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Export fifty or more past trades with risk and result"
                - "Ask the agent to draft a resampling sheet for the firm's rules"
                - "Run one thousand simulated attempts and record the pass rate"
                - "Divide the fee by the pass rate to get cost per pass"
            - name: Spread and slippage on the firm's feed
              description: |-
                ## Purpose
                Simulated evaluation accounts often price from a specific feed with its own spreads, commissions and fill behaviour, which may differ from your broker or backtest. Measuring the real cost per trade on the firm's feed tells you whether a strategy that worked elsewhere still has an edge after costs here.

                ## Milestones
                1. Typical spread at your trading times recorded for each instrument.
                2. Commission per trade or per contract confirmed.
                3. Slippage on stop orders measured over at least twenty trial trades.
                4. Your expected edge per trade recalculated after these costs.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Spread, commission and stop slippage on the firm's feed are measured over twenty or more trades and deducted from expected edge."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Record spreads at your usual times for each instrument"
                - "Confirm commissions per trade on the firm's account"
                - "Measure stop slippage over twenty trial trades"
                - "Recalculate your expected edge after these costs"
            - name: Stop placement and trade management drills
              description: |-
                ## Purpose
                Moving a stop wider, adding to a loser or closing winners early are the habits that turn a sound plan into a breach. Deliberate drills on market replay or a demo, practising placing the stop before entry and leaving it alone, build the behaviour before it costs an evaluation fee.

                ## Milestones
                1. Fifty replay or demo trades taken with the stop placed before entry.
                2. Every stop moved wider counted and noted.
                3. Partial exits and break-even moves practised only where the plan allows them.
                4. Three sessions in a row completed without a single stop widened.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fifty drill trades are logged with stop changes counted, ending with three consecutive sessions without a widened stop."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set up market replay or a demo for your main instrument"
                - "Take replay trades with the stop placed before entry @recurring(weekly:tue,thu)"
                - "Count every stop moved wider and note why"
                - "Stop the drills after three clean sessions in a row"
            - name: Replay rehearsal of a full evaluation
              description: |-
                ## Purpose
                Running the whole challenge on historical replay or a demo, with the same target, limits, minimum days and your written plan, shows whether the plan can pass at all before you pay for the real one. It also exposes rules you have not thought through, such as what you do two percent from the target.

                ## Milestones
                1. A demo or replay account set up with the evaluation's size and limits.
                2. The full plan followed for as many sessions as the minimum trading days require.
                3. Result recorded as pass, fail or ran out of time, with the reason.
                4. Plan changes, if any, written up before a paid attempt.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One complete rehearsal of the evaluation rules on demo or replay is finished and its outcome and lessons recorded before paying."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Open a demo or replay account matching the evaluation size"
                - "Write the target, limits and minimum days at the top of the journal"
                - "Trade the plan for the full minimum number of days"
                - "Write up the result and any plan changes before paying"
            - name: Scripts for near-target and near-limit moments
              description: |-
                ## Purpose
                The two most dangerous points in an evaluation are just short of the target, when people force trades, and just above the limit, when people try to win it back. Writing down in advance exactly what you will do at each point, and reading it aloud when you get there, replaces a decision made under stress with one made calmly.

                ## Milestones
                1. A near-target script written: size, number of trades and when to stop for the day.
                2. A near-limit script written: when to stop, and for how long.
                3. Both scripts printed and kept beside the platform.
                4. Each script used at least once and the outcome noted in the journal.

                ## Notes
                A common near-target rule is to keep normal size and stop after one trade. Gambling the last stretch is how many passing attempts end.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Written near-target and near-limit scripts exist beside the platform and the journal shows each was followed when the moment came."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write what you do when within one good day of the target"
                - "Write what you do when within one loss of the limit"
                - "Print both scripts and keep them by the screen"
                - "Note in the journal each time a script is used"
            - name: Futures and forex evaluation differences
              description: |-
                ## Purpose
                Futures evaluations and forex or CFD evaluations work differently: contract sizes and tick values against lot sizes, exchange data fees, session times and closing rules, and often different drawdown types. Understanding the differences helps you choose the evaluation that fits how you already trade rather than the one with the loudest advert.

                ## Milestones
                1. Contract and lot sizing compared for one instrument in each market.
                2. Session times, settlement and forced closing rules noted for each.
                3. Typical drawdown types and data fees compared.
                4. A short note on which market fits your strategy and hours.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of futures and forex evaluations covers sizing, sessions, drawdowns and fees, ending with a stated choice."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Compare tick value of a futures contract with a forex lot"
                - "List session times and forced closing rules for each"
                - "Compare drawdown types and data fees between the two"
                - "Write which market fits your strategy and why"
            - name: Choosing one-step, two-step or direct funding
              description: |-
                ## Purpose
                One-step evaluations usually have a bigger target or tighter limits, two-step ones split the target across a challenge and a verification, and direct funding skips the test for a higher price and stricter rules. Comparing them on cost per pass, using your own simulated pass rate, makes the choice a calculation rather than a guess.

                ## Milestones
                1. The models offered by your chosen firm listed with target, limits and fee.
                2. Simulated pass rate estimated for each model using your trade statistics.
                3. Cost per funded account compared across the models.
                4. One model chosen and the reason recorded.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Cost per funded account is compared across the available models with your simulated pass rates, and a choice is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each funding model with its target, limits and fee"
                - "Estimate a pass rate for each model from your simulation"
                - "Compare cost per funded account across the models"
                - "Record the chosen model and the reason"
            - name: Account size decision
              description: |-
                ## Purpose
                Larger evaluation accounts cost more but give more room in currency terms, while smaller ones let you try more often for the same spend. Working out how many stop-outs at your normal risk each size allows, and what the fee is per unit of headroom, shows whether the bigger account is worth its price for your strategy.

                ## Milestones
                1. Two or three account sizes compared on fee, daily limit and drawdown in currency.
                2. Number of full-risk losing trades each size absorbs calculated.
                3. Minimum contract or lot size checked so your risk rule works on the smallest account.
                4. A size chosen and written into the trading plan.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Account sizes are compared on fee, headroom and losing trades absorbed, and the chosen size is recorded in the plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare fees and limits for two or three account sizes"
                - "Count the full-risk losses each size can absorb"
                - "Check the smallest tradable size fits your risk rule"
                - "Write the chosen size into the trading plan"
            - name: Reset or walk away rule
              description: |-
                ## Purpose
                A breach is the moment people are most likely to pay for a reset at once and trade angry. Deciding in advance how many attempts you will fund, how long you wait after a breach, and what evidence you need before trying again takes that decision away from the worst possible moment.

                ## Milestones
                1. A maximum number of paid attempts per quarter written down.
                2. A cooling-off period after any breach agreed, during which nothing is bought.
                3. A review of the failed attempt's journal required before any reset.
                4. A condition for stopping altogether, such as three failed attempts in a row, recorded.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written reset rule sets a quarterly attempt cap, a cooling-off period, a required review and a full-stop condition."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the maximum number of paid attempts per quarter"
                - "Set a cooling-off period after any breach"
                - "Require a written journal review before any reset"
                - "Write the condition that ends evaluations for this year"
            - name: Paid add-ons worth taking or skipping
              description: |-
                ## Purpose
                Firms sell add-ons such as a higher profit split, no time limit, weekend holding or a refundable fee, each raising the price of the attempt. Checking each add-on against how you actually trade, and its effect on cost per pass, avoids paying for features your plan never uses.

                ## Milestones
                1. Every add-on listed with its price.
                2. Each add-on matched to a rule in your plan that it would help, or none.
                3. The effect on cost per pass worked out for any add-on you are considering.
                4. Add-ons chosen or declined, with the reason written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each available add-on is listed with its price, linked to a plan rule or rejected, and the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every add-on on the checkout page and its price"
                - "Match each add-on to a rule in your plan or mark it unused"
                - "Work out the change to cost per pass for each candidate"
                - "Record which add-ons you take and why"
            - name: Strategy drawdown fit against firm limits
              description: |-
                ## Purpose
                A strategy whose normal drawdown is larger than the firm's maximum will breach in an ordinary losing streak, however good its long-run results. Comparing the worst drawdown and longest losing streak from your honest backtest or journal with the firm's limits shows whether the strategy fits the account at all, or only at a much smaller size.

                ## Milestones
                1. Worst historical drawdown and longest losing streak calculated at your planned size.
                2. Both compared with the firm's daily limit and maximum drawdown.
                3. The size at which the worst drawdown fits inside the limits worked out.
                4. A verdict recorded: fits, fits at reduced size, or does not fit.

                ## Notes
                Backtested drawdowns understate live ones. Allow a margin of at least half again on the historical worst.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The strategy's worst drawdown and losing streak are compared with the firm's limits and a written fit verdict is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your worst drawdown and longest losing streak"
                - "Compare them with the firm's daily and maximum limits"
                - "Work out the size at which the worst case fits with margin"
                - "Write the verdict into the trading plan"
            - name: Rules on multiple accounts and copy trading
              description: |-
                ## Purpose
                Running several evaluations at once, copying trades between accounts or across firms, and hedging one account against another are each allowed, limited or banned depending on the firm. Checking the rules before you open a second account avoids having every account closed for one breach of terms.

                ## Milestones
                1. The firm's maximum number of accounts and allocation cap noted.
                2. Rules on trade copiers, shared signals and group trading recorded.
                3. Hedging across accounts or firms checked against the terms.
                4. A decision written on whether you will run more than one account.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Account caps, copy trading and cross-account hedging rules are recorded and a decision on multiple accounts is written."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the firm's account limit and maximum allocation"
                - "Look up the rules on trade copiers and shared signals"
                - "Check whether hedging between accounts is prohibited"
                - "Write whether you will run more than one account"
            - name: Automated strategy permission check
              description: |-
                ## Purpose
                For traders running an expert advisor or their own algorithm, firms differ on whether bots are allowed, which kinds are banned (latency arbitrage, tick scalping, purchased off-the-shelf robots) and whether the same code across many traders triggers a review. Getting written confirmation that your automation is permitted protects payouts from being refused later.

                ## Milestones
                1. The firm's policy on automated trading and banned strategy types saved.
                2. Your strategy described in a short paragraph and checked against the policy.
                3. Written confirmation from support that the strategy is allowed.
                4. A tested way to switch the automation off within one minute.

                ## Notes
                Your own risk limits and a manual off switch still apply to automated trading. Most automated strategies fail out of sample, so start at the smallest size.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Support has confirmed in writing that your automated strategy is permitted, and a one-minute off switch has been tested."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save the firm's automated trading policy"
                - "Describe your strategy in one paragraph for support"
                - "Ask support to confirm in writing that it is allowed"
                - "Test switching the automation off in under a minute"
            - name: First week of a paid evaluation
              description: |-
                ## Purpose
                Starting with full size and many trades in the first days, keen to get ahead, is a common way to lose an attempt before the plan has been tested on the live account. Treating the first week as a careful start, with reduced size and the full checklist every session, sets the pattern for the rest of the evaluation.

                ## Milestones
                1. Start date chosen away from major news and personal commitments.
                2. Risk per trade at half your normal rule for the first three sessions.
                3. Checklist, journal and headroom log completed every day of the week.
                4. A first-week review written before size returns to normal.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first five sessions of the evaluation are completed at reduced size with full checklist, journal and headroom records, and reviewed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick a start date away from big releases and busy weeks"
                - "Halve your normal risk per trade for the first three sessions"
                - "Complete the checklist, journal and headroom log each day"
                - "Write a first-week review before returning to full size"
            - name: Moving from challenge to verification phase
              description: |-
                ## Purpose
                Passing phase one often resets the account with a smaller target and the same limits, and many people relax or press harder. A short pause, a review of what worked, and a fresh copy of the phase two rules before trading again keeps the same discipline that passed phase one.

                ## Milestones
                1. Phase one result and statistics written up.
                2. Phase two rules checked for any difference from phase one.
                3. Plan and sizing table updated for the new account.
                4. First phase two session taken only after the review is done.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A phase one write-up and a phase two rule check exist before the first phase two trade, with the plan updated for the new account."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write up the phase one result and key statistics"
                - "Compare phase two rules with phase one line by line"
                - "Update the plan and sizing table for the new account"
                - "Wait a full day before the first phase two trade"
            - name: Funded account agreement and identity checks
              description: |-
                ## Purpose
                Before a funded account opens you will usually pass identity checks and sign an agreement that sets your status, often as an independent contractor, the profit split, payout terms and the firm's right to close accounts. Reading it fully and asking a professional about anything unclear is worth doing before signing, not after a payout dispute.

                ## Milestones
                1. Identity documents prepared and submitted through the firm's official portal only.
                2. The agreement read in full and saved as a dated copy.
                3. Clauses on termination, payout refusal, jurisdiction and your status listed.
                4. Questions on tax or legal status put to an accountant or lawyer where needed.

                ## Notes
                Never send identity documents by chat or to anyone claiming to work for the firm outside its portal.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The funded agreement is saved, its key clauses listed, any professional questions answered, and identity checks completed through the official portal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Prepare identity documents for the firm's official portal"
                - "Save a dated copy of the funded account agreement"
                - "List the clauses on termination, refusal of payouts and jurisdiction"
                - "Take tax or legal questions to an accountant or lawyer"
            - name: First payout request
              description: |-
                ## Purpose
                The first payout is the real test of a firm and of your records. Checking eligibility, choosing the payment method, keeping every confirmation and noting how long it took tells you whether to keep trading with this firm and gives your accountant clean records from the start.

                ## Milestones
                1. Eligibility confirmed: minimum days, minimum amount and any consistency rule.
                2. Payment method chosen and its fees and timing noted.
                3. Request submitted and confirmation saved.
                4. Arrival date and amount received recorded, with any difference explained.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first payout is requested, confirmed and received, with dates, amounts and fees recorded in the ledger."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check every payout condition before requesting"
                - "Compare payment methods on fees and speed"
                - "Submit the request and save the confirmation"
                - "Record the amount received and the date it arrived"
            - name: Breach post-mortem
              description: |-
                ## Purpose
                When an account breaches, the useful question is which decision caused it: a rule you did not understand, a trade outside the plan, size above your rule, or a normal losing streak the plan could not absorb. A written post-mortem within a few days, before any reset, turns the fee into information instead of only a loss.

                ## Milestones
                1. The breach trade and the session around it reconstructed from the journal and platform history.
                2. The cause classified: rule misunderstood, plan broken, size too big, or ordinary losing run.
                3. One change to the plan or the rules summary agreed.
                4. The reset rule checked before any new attempt is bought.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written post-mortem names the cause of the breach and one agreed change, completed before any reset is purchased."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Export the platform history for the breach day"
                - "Reconstruct the session from the journal and the history"
                - "Classify the cause and write one change to make"
                - "Check your reset rule before buying anything"
            - name: Scaling plan milestone review
              description: |-
                ## Purpose
                Many firms increase account size after a set number of payout cycles or a profit level, sometimes with changed limits. Reviewing each scaling step as a decision, not an automatic reward, means you check that your sizing rule, headroom and personal stop still make sense on the bigger account.

                ## Milestones
                1. The firm's scaling criteria and any rule changes on scaling written down.
                2. Progress toward the next step reviewed each quarter.
                3. Sizing table and personal stop recalculated for the new account size.
                4. A decision recorded to accept the step or stay at the current size.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Each scaling step has a recorded review with recalculated sizing and an accept or decline decision."
                cadence: cyclic
              tasks:
                - "Write down the firm's scaling criteria and rule changes"
                - "Review progress toward the next scaling step @recurring(quarterly)"
                - "Recalculate size and personal stop for the bigger account"
                - "Record whether you accept the step or stay where you are"
            - name: Evaluation around a full-time job
              description: |-
                ## Purpose
                Someone with a day job might have one session a day, often at the open before work or in the evening, and is tempted to trade from a phone in meetings. A plan built around the hours you actually have, with fixed sessions and a rule against trading during work, keeps the attempt and the job both intact.

                ## Milestones
                1. One or two fixed trading windows chosen that fit your working week.
                2. A rule written against opening trades during working hours or on a phone.
                3. Time limit and minimum days checked against the windows you have.
                4. Your employer's policy on personal trading checked if you work in finance.

                ## Notes
                If you work at a regulated firm, personal trading and outside business rules may cover prop evaluations. Check with compliance before you start.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written schedule names fixed trading windows outside work hours, with a no-trading-at-work rule and any employer policy checked."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose one or two trading windows outside working hours"
                - "Write a rule against trading during work or from a phone"
                - "Check the minimum days and time limit fit your windows"
                - "Read your employer's personal trading policy if one applies"
            - name: Trading from a distant time zone
              description: |-
                ## Purpose
                Traders in the Caribbean, Asia or Africa often trade London or New York sessions at awkward local hours, and the firm's daily reset may fall in the middle of their evening. Mapping sessions, the reset time and news releases into local time, and setting a sleep cut-off, prevents tired trading and trades straddling the reset.

                ## Milestones
                1. The main session times for your instruments converted to local time.
                2. The firm's daily reset time converted to local time and marked.
                3. Daylight saving changes in both places noted with their dates.
                4. A latest trading time set so sessions do not cut into sleep.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A local-time map of sessions, the daily reset and daylight saving changes exists, with a written latest trading time."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Convert the main sessions for your instruments to local time"
                - "Mark the firm's daily reset in local time"
                - "Note the dates of daylight saving changes in both regions"
                - "Set a latest trading time that protects your sleep"
            - name: Short-session plan for a parent
              description: |-
                ## Purpose
                Parents and carers often have short, interrupted windows and cannot always close a position on time. A plan built for that life uses fewer setups, a hard rule that no trade is opened unless you can watch it to the end, and attached stops on every order, so an interruption never becomes a breach.

                ## Milestones
                1. A realistic weekly pattern of uninterrupted windows written down.
                2. Setups limited to ones that resolve within the window available.
                3. A rule that every order goes in with an attached stop and target.
                4. A rule that no trade opens in the last few minutes before a likely interruption.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written short-session plan sets realistic windows, attached stops on every order and a no-entry rule before interruptions."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down the windows in a normal week when you are not interrupted"
                - "Keep only setups that finish inside those windows"
                - "Make attached stops and targets compulsory on every order"
                - "Set a no-entry rule for the minutes before school runs or bedtime"
            - name: Coming back after repeated failed attempts
              description: |-
                ## Purpose
                After several breaches the honest question is whether the next attempt has a better chance than the last, or is the same plan with a new fee. A structured pause with a review of every failed attempt's journal and post-mortem, and a demo rehearsal that must pass first, is the evidence the next purchase needs.

                ## Milestones
                1. A pause of at least a month with no evaluations bought.
                2. Every post-mortem reread and the most common cause identified.
                3. A plan change that addresses that cause written down.
                4. A demo rehearsal passed under the new plan before any paid attempt.

                ## Notes
                If losses or resets are affecting your money, sleep or relationships, talk to someone you trust or a problem gambling service. Many people need to stop entirely, and that is a sound result.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A month-long pause, a written cause analysis across failed attempts and a passed demo rehearsal precede any new purchase."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write today's date and stop buying evaluations for a month"
                - "Reread every post-mortem and find the most common cause"
                - "Write one plan change that addresses that cause"
                - "Pass a demo rehearsal under the new plan before paying"
            - name: Agreeing a spending limit with your household
              description: |-
                ## Purpose
                Evaluation fees come out of household money, and repeated resets can strain trust if a partner only finds out from a card statement. Agreeing the yearly cap and the reset rule with whoever shares your finances, and showing them the spend ledger, makes the spending visible and the limits easier to keep.

                ## Milestones
                1. The yearly cap and reset rule explained to your partner or household.
                2. A shared figure agreed for the most that can be spent this year.
                3. A check-in date agreed when the ledger will be shown.
                4. The agreement written down in a sentence or two.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A yearly spending limit for evaluations is agreed with your household, written down, with a date set to share the ledger."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Explain the yearly cap and reset rule to your partner"
                - "Agree the most that can be spent on evaluations this year"
                - "Set a date to show them the spend ledger"
                - "Write the agreement down in a sentence or two"
            - name: Deciding whether to attempt an evaluation at all
              description: |-
                ## Purpose
                Evaluations are marketed to new traders as a cheap route to large capital, but without a tested plan and a record of trades the fee mostly buys an expensive lesson. Answering a few honest questions first, about your trading record, time and money you can lose, tells you whether to buy now, practise first or not do it.

                ## Milestones
                1. Your record of past trades, if any, counted and summarised.
                2. Time available per week and money you can lose without harm written down.
                3. The firm's business model understood, including how much of its revenue comes from fees.
                4. A decision recorded: attempt now, practise on demo first, or not at all.

                ## Notes
                Most people who attempt evaluations do not pass, and most strategies fail out of sample. Deciding not to attempt is a valid outcome.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to attempt, practise first or decline is recorded with your trade record, time and affordable loss stated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count and summarise any trades you have taken so far"
                - "Write down hours per week and money you could lose without harm"
                - "Read how prop firms earn money from evaluation fees"
                - "Record whether you will attempt, practise first or decline"
            - name: Payout records for your accountant
              description: |-
                ## Purpose
                Payouts from a prop firm are often paid to you as an independent contractor rather than as trading gains, and evaluation fees may or may not count as expenses depending on where you live. Keeping invoices, payout confirmations, fee receipts and the agreement in one folder each year lets your accountant decide the treatment without chasing documents.

                ## Milestones
                1. A yearly folder for payouts, fee receipts and the funded agreement.
                2. Every payout matched to its confirmation and bank deposit.
                3. Fee receipts filed beside the payouts for the same year.
                4. The folder sent to your accountant with a short summary of totals.

                ## Notes
                How payouts and fees are taxed depends on your country and circumstances. Ask an accountant; do not rely on forum advice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A yearly folder holds every payout confirmation, deposit match and fee receipt, with a totals summary sent to your accountant."
                cadence: cyclic
              tasks:
                - "Create a folder for this year's payouts and fee receipts"
                - "Match payouts to confirmations and deposits @recurring(quarterly)"
                - "File the funded agreement and any invoices in the folder"
                - "Send the folder and a totals summary to your accountant"
            - name: Risk across several funded accounts
              description: |-
                ## Purpose
                Holding funded accounts at two or three firms with the same strategy means a single bad day can breach all of them together, so the accounts are less diversified than they look. Treating them as one book, with a combined daily stop and a cap on how much of the same trade runs everywhere, keeps one loss from ending every account.

                ## Milestones
                1. All funded accounts listed with size, limits and current headroom.
                2. The share of risk in identical trades across accounts calculated.
                3. A combined daily stop across all accounts written down.
                4. A monthly review of headroom and exposure across the whole set.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All funded accounts sit on one sheet with a combined daily stop and a monthly cross-account exposure review recorded."
                cadence: rolling
              tasks:
                - "List every funded account with size, limits and headroom"
                - "Calculate how much risk is the same trade across accounts"
                - "Set a combined daily stop for all accounts together"
                - "Review headroom and overlap across accounts @recurring(monthly:25)"
            - name: Firm counterparty risk register
              description: |-
                ## Purpose
                Your funded account is only as good as the firm's willingness and ability to pay: firms have changed rules overnight, delayed payouts or shut down. A register of warning signs, a habit of withdrawing eligible profit, and a backup of your records and communications limit what you lose if a firm fails.

                ## Milestones
                1. Warning signs listed: sudden rule changes, slower payouts, platform switches, support going quiet.
                2. Each firm you hold accounts with scored against those signs.
                3. Account statements, agreements and support emails backed up outside the firm's portal.
                4. A rule written for when you stop buying from or trading with a firm.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register scores each firm against written warning signs, records are backed up monthly, and an exit rule is written."
                cadence: rolling
              tasks:
                - "List the warning signs that a firm may stop paying"
                - "Score each firm you use against those signs"
                - "Back up statements and support emails off the portal @recurring(monthly:10)"
                - "Write the rule for leaving a firm"
            - name: Disputed breach or refused payout file
              description: |-
                ## Purpose
                Firms sometimes flag a breach you believe did not happen or refuse a payout for a rule violation you dispute. A calm, documented case with timestamps, platform history, the rule book version in force and your support correspondence gives you the best chance of a fair review, and a clear record if you need to escalate.

                ## Milestones
                1. The firm's stated reason saved in writing.
                2. Platform history, journal and screenshots for the relevant period collected.
                3. The rule book version in force on that date located and the exact rule quoted.
                4. A short factual appeal sent through the firm's official channel and the reply recorded.

                ## Notes
                Keep the appeal factual and short. If significant money is at stake, a lawyer or the consumer protection body in your country can say what options exist.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A dispute file holds the firm's reason, the evidence, the rule in force on the date, and a sent appeal with the reply recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the firm to state the reason for the decision in writing"
                - "Collect platform history, journal entries and screenshots"
                - "Find the rule book copy in force on that date"
                - "Ask the agent to draft a short factual appeal from your evidence"
            - name: Yearly verdict on prop evaluations
              description: |-
                ## Purpose
                Once a year, total every fee, every payout and the hours spent, then work out your pass rate, cost per pass and net result per hour. Those few numbers answer the question that matters more than any single attempt: whether prop evaluations are worth continuing for you next year.

                ## Milestones
                1. Total fees, payouts and hours for the year calculated from the ledger and journal.
                2. Pass rate, cost per pass and net result per hour worked out.
                3. The year's main lessons written on one page.
                4. A decision recorded for next year: continue, change approach or stop.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page yearly summary gives fees, payouts, pass rate, cost per pass and net per hour, with a recorded decision for next year."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Total fees, payouts and hours for the year"
                - "Calculate pass rate, cost per pass and net per hour"
                - "Write the year's lessons on one page @recurring(yearly)"
                - "Record whether you continue, change approach or stop"
---

# Prop Firm Evaluation Challenge

A prop-firm evaluation is a paid test with tight rules: hit a profit target without breaching a daily loss or drawdown limit, and you may be offered a funded account with a profit split. This area is for anyone considering or sitting one, including people fitting it around a day job. It starts with foundations (the rule book, the drawdown arithmetic, the true cost, checks on the firm, a written plan, sizing and a personal stop rule), then the daily and weekly routines that keep you inside the limits, the skills behind the maths of passing, the decisions about models, account sizes and resets, the dated moments from first trade to first payout, variants for different lives, and the specialist work of running several funded accounts.

What repeats is a daily pre-session checklist, journal entry and headroom log, a weekly review and news-window check, monthly spend, rule-change and payout routines, and a yearly look at whether the attempts are worth it at all. Most strategies and most attempts fail, so every plan here carries a risk limit per trade, a position sizing rule and a written stop rule; nothing in it is trading, tax or legal advice. The Purchase decision, Operational checklist, Metrics log and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
