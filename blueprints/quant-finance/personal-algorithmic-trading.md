---
id: quant-finance.personal-algorithmic-trading
name: Personal Algorithmic Trading
description: "A small personal trading bot run like an engineering project: capital you can afford to lose, written strategy and stop rules, paper trading first, daily checks, clean logs and a monthly review."
category: business
version: 1.0.0
tags: [quant-finance, personal-algorithmic-trading, everyone, engineer, algorithmic-trading, trading-bot, risk-limits, paper-trading]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - reading-queue
    - risk-register
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Personal Algorithmic Trading
          description: "Running a small personal algorithmic trading setup: strategy rules written down, paper trading first, only capital you can afford to lose, logs and a monthly review."
          projects:
            - name: Trading capital you can afford to lose
              description: |-
                ## Purpose
                Decide, before any code exists, the single sum you could lose in full without touching rent, emergency savings, debt repayments or pension contributions. For most people with a personal setup this is a small slice of their savings, and writing it down now stops a losing month from turning into a top-up from money that already had a job.

                ## Milestones
                1. A budget sheet showing essentials, emergency fund and savings untouched by the trading sum.
                2. One figure recorded as total risk capital, with the date it was set.
                3. A rule that the figure changes only at a quarterly check, never straight after a loss.
                4. The figure shared with a partner or trusted person if household money is shared.

                ## Notes
                Borrowed money, credit cards and margin never count as capital you can afford to lose. If you are unsure what you can spare, a fee-only financial adviser can help with the budget; this project organises the decision, it does not make it for you.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated note states one risk capital figure, shows essentials and emergency savings are untouched, and names when the figure may next change."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List monthly essentials, emergency savings and existing commitments on one sheet"
                - "Write the single sum you could lose in full without changing your life"
                - "Record the rule that the figure changes only at a quarterly check"
                - "Re-read the capital figure and its reasons before allowing any top-up @recurring(quarterly)"
            - name: One-page trading charter and weekly time budget
              description: |-
                ## Purpose
                Write down why you want to trade algorithmically, how many hours a week you can really give it, which markets are in and out, and what result after a year would make you continue or stop. Most strategies fail out of sample, so a charter that expects failure and treats the first year as tuition keeps the hobby from quietly eating evenings and savings.

                ## Milestones
                1. A single page with purpose, weekly hours, allowed markets and instruments you will not touch.
                2. A plain statement that most strategies fail out of sample and that losing the risk capital is possible.
                3. Continue and stop criteria for the end of year one, written as numbers or dated checks.
                4. The charter dated and saved beside the strategy code.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page charter lists weekly hours, allowed markets, excluded instruments and numeric continue and stop criteria for year one."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write two sentences on why you want an automated setup at all"
                - "Set the weekly hours you can give it and the instruments you will avoid"
                - "Write the continue and stop criteria for the end of year one"
                - "Save the dated charter in the same repository as the strategy code"
            - name: Choosing a broker with API access for a small account
              description: |-
                ## Purpose
                Retail brokers differ widely in whether they offer an API, a paper environment, fractional shares, low minimums and clear fees, and switching later means rewriting the order code. Scoring three brokers on the same criteria, including how stable their API has been and how they treat small accounts, saves a painful migration in month six.

                ## Milestones
                1. Five criteria fixed before looking: API and paper access, fees at your trade size, markets offered, investor protection scheme and API stability.
                2. Three brokers scored against the same criteria.
                3. Each broker's authorisation checked on the financial regulator's public register.
                4. One broker chosen with the deciding reason recorded.

                ## Notes
                Start from the **Purchase decision** template. Check the regulator's register yourself rather than trusting a comparison site or an affiliate review.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three brokers scored on the same five criteria, each checked on the regulator's register, with one choice and its reason recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the five criteria and their weights before reading any broker site"
                - "Score three brokers that offer both an API and a paper environment"
                - "Look up each broker on the financial regulator's public register"
                - "Record the chosen broker and the reason it won"
            - name: Separate trading account and funding rules
              description: |-
                ## Purpose
                Keeping the algorithm's money in its own account, funded from one named bank account, makes it obvious what the setup has made or lost and keeps a bug away from your savings. Funding rules agreed in advance, saying when money may go in and when profits come out, remove the urge to refill a drawdown.

                ## Milestones
                1. A brokerage account or sub-account used by the algorithm and nothing else.
                2. Initial funding no larger than the risk capital figure.
                3. A written top-up rule and a written withdrawal rule.
                4. Manual trades and long-term investments kept out of this account.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dedicated account holds no more than the risk capital figure, with written top-up and withdrawal rules saved beside the charter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open a separate account or sub-account used only by the algorithm"
                - "Fund it with no more than the risk capital figure"
                - "Write when money may be added and when profits are taken out"
                - "Switch off any margin or borrowing feature the strategy does not need"
            - name: Written rule sheet for the first strategy
              description: |-
                ## Purpose
                Every rule the code follows should exist first as plain sentences a non-programmer could check: what is traded, when a position opens, when it closes, how big it is and what halts it. A rule sheet written before coding exposes vague ideas early and becomes the specification the code is tested against later.

                ## Milestones
                1. Universe, timeframe, entry, exit, sizing and stop conditions written as numbered sentences.
                2. Each rule clear enough that two people reading it would place the same trade.
                3. Awkward situations covered: gaps, trading halts, partial fills and missing data.
                4. The sheet under version control, with every later change dated and explained.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned rule sheet covers universe, entry, exit, sizing and stop rules plus at least four edge cases, and each rule maps to a named function in the code."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the entry and exit conditions as numbered plain-English sentences"
                - "Add the universe, timeframe and trading hours the strategy uses"
                - "List what the strategy does on gaps, halts, partial fills and missing data"
                - "Ask the agent to read the sheet and list every rule that is ambiguous"
            - name: Position sizing rule for a small account
              description: |-
                ## Purpose
                Sizing decides how much a losing streak hurts far more than the entry signal does. Writing a sizing rule now, such as a small fixed share of risk capital at risk per trade with caps on any one position and on total exposure, and doing the arithmetic for your actual balance, keeps one bad trade or one bug from becoming most of the account.

                ## Milestones
                1. A per-trade risk limit written as a share of risk capital.
                2. A maximum single position and a maximum total exposure written down.
                3. Rounding rules for lot sizes, fractional shares and minimum order values.
                4. A worked example for your balance calculated by hand and matched by the code.

                ## Notes
                The numbers are yours to choose; this is a method, not a recommendation. If a minimum lot size forces a position bigger than the rule allows, the trade is skipped, never enlarged.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A sizing rule with per-trade risk, maximum position and maximum exposure is written, and a unit test shows the code matches a hand-worked example."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the per-trade risk as a share of risk capital and write it down"
                - "Set a cap on any one position and on total exposure"
                - "Work through one sizing example by hand for your current balance"
                - "Write a unit test that checks the code produces the same size"
            - name: Written stop rule for the whole setup
              description: |-
                ## Purpose
                A stop rule names, in advance, the loss from the account's high point at which all automated trading halts for a review, and what has to be true before it restarts. Without one, a drawdown is met with hope and late-night tweaks; with one, the decision was made calmly weeks earlier.

                ## Milestones
                1. A drawdown level for the whole account that triggers a full halt.
                2. A smaller level that triggers reduced size and a written review.
                3. A cooling-off period before any restart, with the review questions listed.
                4. The rule printed beside the trading machine and saved with the charter.

                ## Notes
                Most strategies fail out of sample, so expect to hit the stop at some point and treat it as the plan working. Automatic kill switches inside the code are a separate job; this project is the human decision behind them.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written stop rule gives a halt level, a reduce-size level, a cooling-off period and restart questions, and is kept beside the trading machine."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the account drawdown that halts all trading"
                - "Write the smaller drawdown that halves size and triggers a review"
                - "Set the cooling-off period and the questions to answer before restarting"
                - "Print the rule and keep it beside the trading machine"
            - name: Home machine or cloud server for the bot
              description: |-
                ## Purpose
                Laptops that sleep, update themselves or lose wifi will miss exits, while a small cloud server costs a monthly fee and needs its own security. Comparing a dedicated home machine with a low-cost virtual server on uptime, cost, latency to the broker and how you will reach it when something breaks gives a choice you can defend.

                ## Milestones
                1. Uptime, monthly cost, latency to the broker and remote access compared for both options.
                2. The power, internet and update behaviour of the home option checked honestly.
                3. One option chosen, with its running cost added to the fees sheet.
                4. A note on how you will reach the machine from your phone if it misbehaves.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between home and cloud hosting, with monthly cost, expected uptime and a remote access method written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List how often your home machine sleeps, restarts or loses internet"
                - "Price the smallest cloud server that can run the bot"
                - "Measure round-trip time to the broker's API from each option"
                - "Record the choice and how you will reach the machine remotely"
            - name: Clean, documented trading environment
              description: |-
                ## Purpose
                Bots break when they share a machine with games, browser downloads and forgotten experiments. A clean environment with its own user account, pinned library versions, an accurate system clock and a README that says how to start, stop and restart the bot means you can recover at seven in the morning without remembering anything.

                ## Milestones
                1. A separate user account or container that runs only the bot.
                2. Library versions pinned in a lock file and installed from it.
                3. Clock synchronisation switched on and checked against an internet time source.
                4. A README with start, stop, restart and where-the-logs-are instructions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The bot runs under its own account from a lock file, the clock is synchronised, and someone following only the README can restart it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a separate user account or container for the bot"
                - "Pin every library version in a lock file"
                - "Write a README covering start, stop, restart and log locations"
                - "Apply operating system updates outside market hours and reboot cleanly @recurring(monthly:25)"
            - name: API key and broker account security
              description: |-
                ## Purpose
                Leaked keys with trading permission let a stranger place orders in your name, and personal bots often run with keys pasted into scripts, notebooks or chat messages. Moving keys out of the code, turning off withdrawal rights, restricting by IP address where the broker allows it and using two-factor sign-in closes the commonest holes in an afternoon.

                ## Milestones
                1. Keys stored outside the repository and ignored by version control.
                2. Separate keys for data and for trading where the broker supports it, with withdrawal rights off.
                3. Two-factor sign-in on the broker and on the email account linked to it.
                4. A written procedure to revoke every key within five minutes if a leak is suspected.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No key appears in the repository history, trading keys have withdrawal rights off, two-factor sign-in is on, and a revoke procedure is written."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the repository history for committed keys and revoke any you find"
                - "Move keys into a secrets file or manager that version control ignores"
                - "Turn off withdrawal permission on every trading key"
                - "Rotate API keys and review active broker sessions @recurring(quarterly)"
            - name: Market hours, holidays and order types sheet
              description: |-
                ## Purpose
                Plenty of first bots fail on ordinary calendar facts: an early close, a public holiday, the opening auction, a daylight saving change or a market order queued before the open. One page for the markets you trade, checked against the exchange's published calendar and the broker's order type list, prevents a whole class of avoidable losses.

                ## Milestones
                1. Regular hours, auctions and early closes for each market noted from the exchange website.
                2. This year's holidays loaded into the code's trading calendar.
                3. The broker's order types and time-in-force options listed with what each does.
                4. Daylight saving dates for your time zone and the market's written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page sheet of hours, holidays and order types exists, and the code's trading calendar matches the exchange list for the current year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download this year's holiday and early close calendar from the exchange"
                - "List the broker's order types and time-in-force options in one table"
                - "Note the daylight saving dates for your time zone and the market's"
                - "Check the code's trading calendar against the exchange list"
            - name: Pre-open bot health checklist
              description: |-
                ## Purpose
                Five minutes before the session opens catches most of the failures that cost money: a process that died overnight, a stale data feed, an expired token or a position the bot does not know about. A short checklist, run the same way on every trading day, does more for a personal setup than any refinement of the signal.

                ## Milestones
                1. A checklist of no more than ten items covering process, data, connection, positions and cash.
                2. The checklist run on every trading day for a month.
                3. Each failed item logged with the fix applied.
                4. The list revised after the first month to match what actually failed.

                ## Notes
                Start from the **Operational checklist** template. If a check fails and you cannot fix it before the open, the default is to keep the bot flat for the day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pre-open checklist has been run on at least twenty consecutive trading days, with every failure and fix recorded."
                cadence: rolling
              tasks:
                - "Write the ten-item pre-open checklist from the template"
                - "Run the pre-open checklist before the session starts @recurring(weekly:mon,tue,wed,thu,fri)"
                - "Log any failed item and its fix in the incident notes"
                - "Revise the checklist after the first month of use"
            - name: Weekly position and cash reconciliation
              description: |-
                ## Purpose
                What the bot thinks it holds and what the broker records drift apart through partial fills, corporate actions, restarts and the odd manual intervention. Comparing positions, cash and open orders every week, and explaining every difference before the next session, stops the strategy trading on a false picture of itself.

                ## Milestones
                1. A script that prints bot positions and cash beside the broker's figures.
                2. Weekly reconciliations completed for two months.
                3. Every difference explained and fixed before the following session.
                4. A running list of causes found, so repeat problems get a permanent fix.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly reconciliations are recorded, each ending with zero unexplained differences in positions, cash or open orders."
                cadence: rolling
              tasks:
                - "Write a script that prints bot positions beside broker positions"
                - "Reconcile positions, cash and open orders with the broker @recurring(weekly:fri)"
                - "Investigate every difference before the next session opens"
                - "Keep a list of causes found and how each was fixed"
            - name: Monthly strategy review against the rule sheet
              description: |-
                ## Purpose
                Once a month, set what the strategy actually did beside what the rule sheet and backtest said it would do: number of trades, average cost, hit rate, drawdown and any rule breaches. Making this review the only place changes are decided keeps tinkering out of the trading week, which is where most personal setups damage themselves.

                ## Milestones
                1. A monthly review page with the same headings every time.
                2. Live figures set beside the backtest's expected range.
                3. Drawdown checked against both levels of the stop rule.
                4. Every change to code or parameters decided here, dated and logged.

                ## Notes
                Start from the **Metrics log** template. One month is a tiny sample; look for broken assumptions such as costs or fill rates, not for proof the edge is real.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews exist, each comparing live figures with the backtest range and recording any change decided."
                cadence: rolling
              tasks:
                - "Create the monthly review page from the metrics log template"
                - "Fill in trades, costs, drawdown and rule breaches for the month @recurring(monthly:3)"
                - "Compare the month with the backtest's expected range"
                - "Write any change decided and the date it goes live"
            - name: Monthly broker statement and running costs tally
              description: |-
                ## Purpose
                Commissions, exchange and regulatory fees, currency conversion, data subscriptions and server bills can quietly exceed the gross profit of a small account. Adding them up from the statement and bills each month shows the real net result and whether the setup earns its keep or is a paid hobby, which is fine as long as you know.

                ## Milestones
                1. A list of every cost the setup incurs, with its billing date.
                2. Monthly costs totalled from the broker statement and bills.
                3. Net result after all costs recorded beside the gross result.
                4. Any fee that rose without notice flagged and queried.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month for six months has a costs total and a net result after costs, taken from the statement and bills."
                cadence: rolling
              tasks:
                - "List every cost the setup incurs, including data and server bills"
                - "Tally the month's fees from the broker statement and bills @recurring(monthly:9)"
                - "Record the net result after costs beside the gross result"
                - "Query any fee that rose without notice"
            - name: Weekly error log review
              description: |-
                ## Purpose
                Warnings in the logs are the early signal of most bot failures: retries creeping up, slow responses, rejected orders, clock drift. Reading the week's errors on a fixed day, grouping them by cause and fixing the most frequent one keeps small problems from becoming the day the bot misses an exit.

                ## Milestones
                1. Errors and warnings written to one dated log file per day.
                2. A weekly read-through that groups messages by cause.
                3. The most frequent cause fixed or written up each week.
                4. Noisy log lines that never lead to action removed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly log reviews are recorded, each naming the top error cause and the fix or follow-up chosen."
                cadence: rolling
              tasks:
                - "Make the bot write errors and warnings to one dated log file"
                - "Read the week's errors and group them by cause @recurring(weekly:sun)"
                - "Fix or write up the most frequent cause"
                - "Remove noisy log lines that never lead to action"
            - name: Quarterly backup and restore test
              description: |-
                ## Purpose
                Losing a disk or a laptop should cost you an evening, not the strategy, its history and every log you would need for the tax return. Backing up code, configs, logs and rule sheets off the machine, and proving once a quarter that you can restore and run on paper from them, is the only backup that counts.

                ## Milestones
                1. A list of what must survive: code, configs, logs, rule sheets and statements.
                2. An automatic backup to a location away from the trading machine.
                3. A restore onto a spare machine that runs the bot on paper.
                4. The time the restore took written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A restore from backup onto a different machine has run the bot on paper within the last three months, with the time taken recorded."
                cadence: rolling
              tasks:
                - "List what must survive a dead machine"
                - "Set up an automatic backup away from the trading machine"
                - "Restore from backup onto a spare machine and run the bot on paper @recurring(quarterly)"
            - name: Release routine for strategy code changes
              description: |-
                ## Purpose
                Most self-inflicted losses in personal setups come from a quick fix pushed live mid-session. A release routine with a tag for every live version, a paper run of at least a week for each change and a one-command rollback turns code changes from a gamble into a step you can undo.

                ## Milestones
                1. A rule that no code reaches live during market hours.
                2. Every live release tagged in version control with a short note.
                3. Each change run on paper for at least a week before going live.
                4. The previous release ready to restore in a single command.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live release in the last three months has a tag, a note and a recorded paper run, and a rollback has been tested once."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the rule that no code goes live during market hours"
                - "Tag the current live version in version control with a note"
                - "Write a one-command rollback to the previous tag and test it"
                - "Add a paper run of at least one week to the change checklist"
            - name: Annual review of the whole setup
              description: |-
                ## Purpose
                Once a year, step back from monthly numbers and ask the charter's question: given the hours, money and stress it took, should this continue? Comparing the year's net result after every cost with the continue and stop criteria you wrote at the start gives an honest answer, including the perfectly good answer of stopping.

                ## Milestones
                1. The year's net result after all costs and hours spent gathered on one page.
                2. The result compared with the charter's continue and stop criteria.
                3. A decision recorded: continue, shrink, change or stop.
                4. Charter, capital figure and stop rule updated for the coming year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated annual review compares net results with the charter criteria and records a continue, shrink, change or stop decision."
                cadence: cyclic
              tasks:
                - "Book a half day for the annual setup review @recurring(yearly)"
                - "Compare the year's net result with the charter's continue and stop criteria"
                - "Decide to continue, shrink, change or stop, and record why"
                - "Update the charter, capital figure and stop rule for next year"
            - name: Weekly market data quality check
              description: |-
                ## Purpose
                Free and low-cost feeds drop bars, duplicate them, report a bad print or adjust for a split a day late, and a strategy acting on that data trades on fiction. A weekly script that counts gaps and spikes per symbol, plus a spot check against the broker's charts, catches the problems before they reach an order.

                ## Milestones
                1. A check that counts missing, duplicated and outlier bars per symbol.
                2. Weekly results kept for two months.
                3. A sample of prices compared with the broker's own charts.
                4. Every vendor outage noted with how the bot behaved during it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly data checks are recorded, each listing gaps, duplicates and outliers found and any action taken."
                cadence: rolling
              tasks:
                - "Write a check that counts missing, duplicated and outlier bars per symbol"
                - "Run the data quality check on the past week's bars @recurring(weekly:sat)"
                - "Compare a sample of prices against the broker's charts"
                - "Note any vendor outage and what the bot did during it"
            - name: Python essentials for a trading script
              description: |-
                ## Purpose
                If you are not a programmer, a few weeks of focused Python is enough to read and change a simple trading script with confidence, and far safer than running code you cannot follow. Learning variables, functions, data frames, dates, error handling and tests on trading-shaped examples gives you exactly what a small bot needs and no more.

                ## Milestones
                1. A short course or book chosen and a weekly study slot set.
                2. Prices loaded from a file into a data frame and a moving average calculated.
                3. A function with error handling that refuses to run on missing data.
                4. Three unit tests written and passing for your own code.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can load price data, compute a simple indicator, handle a missing-data error and run three passing tests without copying code."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose one beginner Python course and book a weekly study slot"
                - "Load a price file into a data frame and compute a moving average"
                - "Write a function that stops cleanly when data is missing"
                - "Write and pass three unit tests for your own functions"
            - name: How retail orders are filled and what slippage costs
              description: |-
                ## Purpose
                Backtests usually fill at the close or the next open; a real market order fills at the far side of the spread, sometimes worse, and a limit order may not fill at all. Learning how your broker routes orders, what the spread is on your instruments at the times you trade and how to measure slippage on your own fills explains most of the gap between paper and live.

                ## Milestones
                1. The broker's order routing and execution disclosures read and summarised.
                2. Typical spreads for each instrument at your trading times recorded.
                3. Slippage measured on your first twenty fills against the price the strategy expected.
                4. The cost assumption in the backtest updated to match.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Slippage on at least twenty real or paper fills is measured and the backtest's cost assumption updated to reflect it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the broker's order execution and routing disclosure"
                - "Record typical spreads for each instrument at your trading times"
                - "Measure slippage on twenty fills against the expected price"
                - "Update the backtest cost assumption with the measured figure"
            - name: Margin, settlement and cash in your account
              description: |-
                ## Purpose
                Unsettled cash, margin calls, borrowing interest, short sale rules and pattern day trading restrictions in some countries catch out bots that assume cash is always there. Reading your account agreement and margin documents once, and writing what the bot may and may not do with cash, avoids rejected orders and forced liquidations.

                ## Milestones
                1. Settlement periods for your instruments and how unsettled cash is treated noted.
                2. Any day trading or short selling restrictions on your account type written down.
                3. The bot's cash rules set: no borrowing unless the charter allows it.
                4. A test showing the bot refuses an order it cannot pay for.

                ## Notes
                Rules differ by country and account type. Read your own broker's documents and ask their support team if anything is unclear; do not rely on forum summaries.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Settlement, margin and restriction rules for your account are written on one page and a test shows the bot rejects unaffordable orders."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the account agreement sections on settlement and margin"
                - "Note any day trading or short selling limits for your account type"
                - "Write the bot's cash rule into the rule sheet"
                - "Test that the bot refuses an order it cannot pay for"
            - name: First backtest of the rule sheet with costs included
              description: |-
                ## Purpose
                Before any paper trading, code the rule sheet as a simple backtest with realistic commissions, spread and a fill one bar after the signal, on data the idea was not invented on. A modest, honest result is more useful than a beautiful one, because most strategies fail out of sample and this is the cheapest place to find out.

                ## Milestones
                1. The rule sheet coded as a backtest with commission, spread and next-bar fills.
                2. A test period set aside before running that was not used to form the idea.
                3. Results recorded with number of trades, drawdown and net return after costs.
                4. Every variant tried listed, not just the one you liked.

                ## Notes
                Keep the first backtest small and readable. Fancy engines are a later project; a few hundred lines you understand beat a framework you do not.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A backtest with costs and next-bar fills has been run on a held-back period, with results and every variant tried written down."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Set aside a test period before writing any backtest code"
                - "Code the rule sheet with commission, spread and next-bar fills"
                - "Record trades, drawdown and net return after costs"
                - "List every variant you tried beside the result of each"
            - name: How many trades before results mean anything
              description: |-
                ## Purpose
                Twenty winning trades in a row feels like proof and is often luck, especially for a strategy that trades a few times a month. Learning to put a rough error band on win rate and average return, and working out how many trades your strategy needs before live results can confirm or reject the backtest, sets patience you can plan around.

                ## Milestones
                1. The standard error of a win rate and of an average trade return understood with a worked example.
                2. Expected trades per month for your strategy estimated from the backtest.
                3. The number of months needed for a meaningful comparison written down.
                4. That timescale added to the charter as the earliest date for judging the edge.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note gives the number of trades and months your strategy needs before live results can be compared with the backtest, added to the charter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Work through the standard error of a win rate with your own numbers"
                - "Estimate trades per month from the backtest"
                - "Calculate how many months a meaningful sample will take"
                - "Add the earliest judging date to the charter"
            - name: Reading list on why strategies fail out of sample
              description: |-
                ## Purpose
                Overfitting, data snooping, regime change, crowding and costs explain why most strategies that look good in a backtest lose money live, and reading a handful of clear sources on them changes how you build. A short, finished reading list, with one practical change taken from each source, is worth more than a long one abandoned halfway.

                ## Milestones
                1. Five sources chosen: books, papers or long articles on overfitting and live decay.
                2. Each finished with a three-line summary.
                3. One practical change to your process taken from each source.
                4. Those changes added to the rule sheet or release routine.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five sources on out-of-sample failure are read and summarised, each linked to one change made in your process."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Set up a reading queue with five sources on overfitting and live decay"
                - "Read one source and write a three-line summary"
                - "Write one process change taken from each source"
                - "Add the changes to the rule sheet or release routine"
            - name: Scheduling and supervising the bot process
              description: |-
                ## Purpose
                Bots started by hand in a terminal stop when the terminal closes, the machine restarts or an unhandled error fires at three in the morning. Learning a scheduler and a process supervisor on your operating system, with restart limits and a heartbeat file, means the bot starts on time, recovers from crashes and tells you when it cannot.

                ## Milestones
                1. The bot started by a scheduler or service manager, not by hand.
                2. Automatic restart on failure with a cap on restarts per hour.
                3. A heartbeat written every few minutes and checked by a separate process.
                4. A clean shutdown that cancels open orders when the process is stopped.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The bot runs under a scheduler or supervisor with capped restarts and a heartbeat, and stopping it cancels open orders in a tested shutdown."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read how your operating system schedules and supervises services"
                - "Run the bot as a supervised service with capped restarts"
                - "Write a heartbeat file and a separate check that alerts if it goes stale"
                - "Test that stopping the service cancels open orders"
            - name: Free or paid market data for a personal setup
              description: |-
                ## Purpose
                Free data is enough for many end-of-day strategies and a poor fit for intraday ones, where delays, gaps and licence terms start to matter. Writing down what your strategy needs (bar size, history, adjustments, delay) and pricing two or three sources against it stops you paying for data you do not use or trading on data that cannot support the rule.

                ## Milestones
                1. The strategy's data needs written: bar size, history length, adjustments and acceptable delay.
                2. Two or three sources compared on coverage, cost and licence terms for personal use.
                3. A month of data from the chosen source checked against the broker's prices.
                4. The choice and its monthly cost added to the fees sheet.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded data source choice that meets written strategy needs, with a month of its data checked against broker prices."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the bar size, history, adjustments and delay the strategy needs"
                - "Compare two or three sources on coverage, cost and personal-use licence"
                - "Check a month of the chosen source against the broker's prices"
                - "Add the data cost to the monthly fees sheet"
            - name: Fee drag test at your real account size
              description: |-
                ## Purpose
                Strategies that clear costs on a large simulated account can lose money on a small real one, because fixed commissions, minimum fees and currency charges take a bigger bite of each trade. Re-running the backtest at your actual balance, with your broker's real fee schedule, shows whether the idea survives the size you can afford.

                ## Milestones
                1. The broker's full fee schedule for your instruments written into the cost model.
                2. The backtest re-run at your actual starting balance.
                3. Costs as a share of gross profit calculated.
                4. A decision recorded: proceed, trade less often, or drop the idea.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The backtest has been re-run at the real starting balance with the broker's fee schedule, and a proceed, adjust or drop decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the broker's fee schedule for your instruments into the cost model"
                - "Re-run the backtest at your actual starting balance"
                - "Work out costs as a share of gross profit"
                - "Record whether to proceed, trade less often or drop the idea"
            - name: First live allocation at a fraction of planned size
              description: |-
                ## Purpose
                Once paper trading has met its criteria, the first live money should be a fraction of the planned amount for a fixed period, because live fills, nerves and broker behaviour differ from paper in ways only real orders show. A written go decision with the size, duration and abort conditions keeps the step deliberate.

                ## Milestones
                1. The paper trading result checked against its go criteria and recorded.
                2. A first live size set at a fraction of the planned allocation, inside the sizing rule.
                3. A fixed trial period and abort conditions written before the first order.
                4. The trial's end date in the calendar with a review booked.

                ## Notes
                Run the paper period as its own project first. If the paper criteria were not met, the answer is no, however close it looked.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated go decision records paper results against criteria, the reduced live size, the trial length and abort conditions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the paper results against the go criteria and write the verdict"
                - "Set the first live size as a fraction of the planned allocation"
                - "Write the trial length and the conditions that end it early"
                - "Book the end-of-trial review in the calendar"
            - name: Rule for adding capital after a good run
              description: |-
                ## Purpose
                A strong quarter is when people double their stake, usually just before the strategy has its normal bad patch. A scaling rule written now, tied to number of trades, drawdown behaviour and time live rather than to recent profit, and capped by the risk capital figure, means more money goes in only when the evidence supports it.

                ## Milestones
                1. Conditions for any increase written: minimum months live, minimum trades, drawdown within expectations.
                2. Step sizes for increases capped, with a waiting period between them.
                3. A matching rule for cutting size after the stop rule's warning level.
                4. Every capital change logged with the rule that allowed it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written scaling rule names time, trade count and drawdown conditions for adding or cutting capital, and every change since is logged against it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the minimum months live and trades before any increase"
                - "Cap each increase and set a waiting period between them"
                - "Write the matching rule for cutting size after a warning drawdown"
                - "Start a log of capital changes with the rule behind each"
            - name: Second strategy only after the first meets its bar
              description: |-
                ## Purpose
                Adding a second strategy doubles the code, the monitoring and the ways things break, and it is often a way of escaping a disappointing first one. Setting the bar the first strategy must clear before a second one is started, and checking the second would behave differently, keeps the setup small enough to supervise.

                ## Milestones
                1. The bar for strategy one written: months live, rule compliance, monitoring without missed checks.
                2. A rule that the second idea goes through its own rule sheet, backtest and paper period.
                3. A check that the second idea's returns are not close copies of the first.
                4. A decision recorded to start, wait or drop the second strategy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a second strategy, made against a written bar for the first and a check that the two behave differently."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the bar the first strategy must clear before a second begins"
                - "Run the second idea through its own rule sheet and backtest"
                - "Compare the two strategies' historical daily returns for overlap"
                - "Record a start, wait or drop decision for the second strategy"
            - name: Cutting parameters and features from the strategy
              description: |-
                ## Purpose
                Every extra filter, threshold and indicator is another chance to fit noise, and personal strategies tend to grow them after each losing week. Removing parameters one at a time and keeping only those whose removal clearly hurts results on held-back data usually leaves a simpler strategy that is easier to trust and to debug.

                ## Milestones
                1. Every parameter and filter in the strategy listed with when and why it was added.
                2. Each one removed in turn and the effect measured on held-back data.
                3. Parameters that add little dropped from the rule sheet and code.
                4. The simpler version paper traded before it replaces the live one.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table shows the effect of removing each parameter on held-back data, and the strategy carries fewer parameters after the review."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every parameter and filter with when and why it was added"
                - "Remove each in turn and measure the effect on held-back data"
                - "Drop the parameters that add little from the rule sheet and code"
                - "Paper trade the simpler version before it replaces the live one"
            - name: Phone alerts for fills, errors and silence
              description: |-
                ## Purpose
                You will not be watching the screen when something goes wrong, so the bot has to reach you. Alerts for fills, errors, rejected orders and, most importantly, silence when the heartbeat stops, sent to your phone through a messaging or notification service, turn a day-long problem into a five-minute one.

                ## Milestones
                1. Alerts sent for fills, errors, rejected orders and a stale heartbeat.
                2. Alert volume low enough that every message gets read.
                3. Quiet hours set for non-urgent messages only.
                4. A monthly test proving alerts still arrive.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fill, error, rejection and stale-heartbeat alerts reach your phone, and a test alert has been received within the last month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a notification service the bot can post to"
                - "Send alerts for fills, errors, rejected orders and a stale heartbeat"
                - "Cut any alert you ignored twice in the first fortnight"
                - "Send a test alert to confirm notifications still arrive @recurring(monthly:21)"
            - name: Personal setup risk register
              description: |-
                ## Purpose
                Beyond market losses, a personal bot carries risks that are easy to forget: a broker failure, a stolen key, a code bug that doubles orders, an internet outage, your own urge to override it. Listing them with likelihood, impact and the control in place shows which ones have no answer yet and where the next evening of work should go.

                ## Milestones
                1. At least twelve risks listed across market, broker, technical, security and behavioural groups.
                2. Each rated for likelihood and impact with its current control named.
                3. The three highest risks without a control given an action and a date.
                4. The register revisited at each annual review.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register of at least twelve rated risks exists, and the three highest uncontrolled risks each have a dated action."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a risk register from the template"
                - "List twelve risks across market, broker, technical, security and behaviour"
                - "Rate each for likelihood and impact and name its control"
                - "Give the top three uncontrolled risks a dated action"
            - name: First live trading day plan
              description: |-
                ## Purpose
                The first day with real money is when you are most tempted to watch every tick and intervene. Planning the day in advance, with the pre-open checklist done early, a short list of things you will check at set times and a firm rule that you only halt, never override, makes the first live session a test of the system rather than of your nerves.

                ## Milestones
                1. A date chosen that avoids holidays, major scheduled announcements and your own busy days.
                2. Set check times written, with what to look at in each.
                3. The halt procedure rehearsed once on paper the day before.
                4. A short end-of-day note on what happened and any surprise.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first live day ran on a planned date with set check times, a rehearsed halt procedure and a written end-of-day note."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick a first live date clear of holidays and major announcements"
                - "Write three set check times and what to look at in each"
                - "Rehearse the halt procedure on paper the day before"
                - "Write the end-of-day note on what happened and what surprised you"
            - name: Three-month live versus backtest review
              description: |-
                ## Purpose
                Three months in, there is enough live data to check assumptions even if not to judge the edge: are fills, costs, trade frequency and drawdown in line with the backtest? A dated review that compares each one and decides whether the trial continues, shrinks or stops gives the first real answer the setup can offer.

                ## Milestones
                1. Live trade count, costs, slippage and drawdown tabulated beside the backtest figures.
                2. Each gap explained or flagged as unexplained.
                3. Rule compliance checked: every live trade traced to a rule in the sheet.
                4. A continue, shrink or stop decision recorded with reasons.
              priority: medium
              deadlineOffsetDays: 210
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A dated three-month review compares live and backtest figures for trades, costs and drawdown and records a continue, shrink or stop decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Tabulate live trades, costs, slippage and drawdown beside the backtest"
                - "Explain each gap or mark it unexplained"
                - "Trace every live trade to the rule that produced it"
                - "Record a continue, shrink or stop decision with reasons"
            - name: Year-end performance file for the setup
              description: |-
                ## Purpose
                At year end the broker statements, trade exports, fee bills and your own logs are all still easy to find, and they will be needed for the tax return and the annual review. Collecting them into one dated folder with a one-page summary of net results after costs saves a scramble in the spring and gives your accountant clean inputs.

                ## Milestones
                1. Annual broker statement and full trade export downloaded.
                2. Data, server and subscription bills for the year collected.
                3. A one-page summary of gross result, costs and net result.
                4. The folder shared with your accountant or tax preparer if you use one.

                ## Notes
                How trading gains are taxed depends on your country and circumstances. Ask an accountant; this file only makes their job easier.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A dated year-end folder holds the annual statement, trade export, bills and a one-page net result summary."
                cadence: cyclic
              tasks:
                - "Download the annual broker statement and full trade export @recurring(yearly)"
                - "Collect the year's data, server and subscription bills in the folder"
                - "Ask the agent to draft a one-page summary of gross result, costs and net result"
                - "Send the folder to your accountant if you use one"
            - name: Broker outage and lost connection drill
              description: |-
                ## Purpose
                Every broker has outages, and the worst moment to discover what your bot does without a connection is with a position open. Once a year, simulate a lost connection and a broker that rejects everything on paper, and check that the bot stops cleanly, alerts you and that you know how to close positions by phone or the broker's app.

                ## Milestones
                1. A lost connection simulated on paper with the bot's behaviour recorded.
                2. A rejected-order scenario simulated and its alert received.
                3. The broker's phone dealing number and app login checked and saved.
                4. Any gap found fixed before the next live session.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A drill within the last year has simulated a lost connection and rejected orders, with alerts received and a manual close route confirmed."
                cadence: cyclic
              tasks:
                - "Save the broker's phone dealing number and test the app login"
                - "Simulate a lost connection on paper and record what the bot does @recurring(yearly)"
                - "Simulate rejected orders and confirm the alert arrives"
                - "Fix any gap before the next live session"
            - name: Holiday and travel plan for the bot
              description: |-
                ## Purpose
                Being on a beach with patchy signal while the bot trades is a choice, and it should be made before you pack. Deciding in advance whether the bot pauses, runs at reduced size or runs as normal, and what you will do if an alert arrives abroad, keeps a fortnight away from becoming the most stressful part of the year.

                ## Milestones
                1. A rule for absences: pause, reduce size or run as normal, by length of trip.
                2. Positions flattened or reduced before departure if the rule says so.
                3. Remote access and alerts tested from the device you will travel with.
                4. A post-trip check of the logs before resuming normal size.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written absence rule exists and was followed on the most recent trip, with remote access tested before departure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the absence rule by length of trip"
                - "Test remote access and alerts from the device you will travel with"
                - "Flatten or reduce positions before departure if the rule says so"
                - "Check the logs on return before resuming normal size"
            - name: Employer personal dealing policy check
              description: |-
                ## Purpose
                Many employers, especially in finance, technology and listed companies, have personal account dealing rules: pre-clearance, minimum holding periods, restricted lists and a ban on trading certain instruments. An automated strategy can break these without you noticing, so read the policy and get written confirmation from compliance or HR before the first live order.

                ## Milestones
                1. Your employer's personal dealing or trading policy found and read.
                2. Whether automated trading, holding periods and restricted lists apply to you confirmed in writing.
                3. Any required account declarations made.
                4. Restricted instruments excluded in the bot's universe.

                ## Notes
                If you work in a regulated firm, breaching the policy can cost you the job. When in doubt, ask compliance before you code, not after.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written confirmation from compliance or HR covers automated personal trading, and any restricted instruments are excluded in the bot's code."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your employer's personal dealing or trading policy"
                - "Ask compliance or HR in writing whether automated trading is allowed"
                - "Exclude restricted instruments in the bot's universe"
                - "Confirm any annual declaration or pre-clearance with compliance @recurring(yearly)"
            - name: Part-time setup around a full-time job
              description: |-
                ## Purpose
                With a day job, you cannot watch intraday markets and should not try. Choosing end-of-day or weekly strategies that place orders outside working hours, fixing one weekly slot for maintenance and a monthly slot for the review, and accepting that nothing changes mid-week fits trading to the hours you really have.

                ## Milestones
                1. A strategy horizon chosen that needs no attention during working hours.
                2. Order placement scheduled before work or after the close.
                3. A fixed weekly maintenance hour in the calendar.
                4. A rule that alerts during work hours get a halt, never a fix.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The strategy needs no action in working hours, and the weekly maintenance hour has been kept for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Confirm the strategy needs no attention during working hours"
                - "Schedule order placement before work or after the close"
                - "Keep the weekly maintenance hour for the setup @recurring(weekly:thu)"
                - "Write the rule that work-hours alerts get a halt, not a fix"
            - name: Guardrails for engineers building their first bot
              description: |-
                ## Purpose
                Engineers tend to over-build: message queues, microservices and dashboards before the strategy has placed a single paper trade, and clever code that hides basic trading mistakes. Writing a scope limit for version one, a list of what not to build yet and a definition of done tied to trading results keeps the engineering serving the strategy.

                ## Milestones
                1. A version-one scope that fits in a single process and one repository.
                2. A not-yet list of tempting components deferred until after three months live.
                3. A definition of done based on paper trading criteria, not code features.
                4. A review after version one of what was worth building.

                ## Notes
                The hardest bugs in small bots are trading logic errors, not performance problems. Spend the first effort on tests of sizing, order states and reconciliation.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written version-one scope, a deferred-components list and a results-based definition of done exist before the second month of coding."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a version-one scope that fits one process and one repository"
                - "List the components you will not build until three months live"
                - "Define done in terms of paper trading results"
                - "Write tests for sizing, order states and reconciliation first"
            - name: Keeping it small in or near retirement
              description: |-
                ## Purpose
                Retirement brings time to experiment and savings that have to last decades, which is a risky mix for trading. Ring-fencing a strictly limited sum, keeping it well away from income and pension drawdown accounts and agreeing the limits with a partner or adviser lets you enjoy building the bot without putting the plan at risk.

                ## Milestones
                1. The risk capital figure checked against your retirement income plan with an adviser or partner.
                2. Trading kept in a separate account from pension and income accounts.
                3. A firm cap that is not raised after losses or good runs.
                4. A yearly conversation with your adviser or partner about the figure.

                ## Notes
                This is not advice on what to invest. A financial adviser can check whether any trading sum fits your retirement plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A capped trading sum, held apart from pension and income accounts, is written down and has been discussed with an adviser or partner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a conversation with your adviser or partner about the trading sum"
                - "Confirm the trading account is separate from pension and income accounts"
                - "Write the cap and the rule that it does not rise after a good run"
                - "Note the date of the next yearly check on the figure"
            - name: Household access note if you are unavailable
              description: |-
                ## Purpose
                If you are ill, travelling or worse, someone else may need to stop the bot and find the account, and they will not know where anything is. A sealed note listing the broker, how to halt the bot in plain steps and who to call, kept where your other important papers live, protects the household from a strategy running unsupervised.

                ## Milestones
                1. Plain-language halt steps a non-technical person can follow.
                2. Broker name, account location and support number recorded, without passwords in the note.
                3. The note stored with your will or important papers and its location shared.
                4. The note checked each year against the current setup.

                ## Notes
                Keep passwords in a password manager with its own emergency access feature rather than on paper.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A household note with plain halt steps and broker details, without passwords, is stored with important papers and its location is known to one trusted person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the halt steps so a non-technical person can follow them"
                - "Add the broker name, account location and support number"
                - "Store the note with your important papers and tell one trusted person"
                - "Check the household note still matches the setup @recurring(yearly)"
            - name: Student setup on paper and tiny size
              description: |-
                ## Purpose
                For a student, the best return from a trading bot is usually the skills and the write-up, not the money. Running a full setup on paper, then with a very small amount you can lose without missing rent, builds evidence of disciplined engineering and research that an application or interview can use.

                ## Milestones
                1. A paper setup running with the full rule sheet, logs and monthly review.
                2. Any live money capped at an amount that would not affect rent, food or fees.
                3. Three months of monthly reviews completed.
                4. A short write-up of what you built and learned, with no performance claims.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three months of paper or tiny live trading with monthly reviews, and a written summary of what was built and learned."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Set up the full rule sheet, logs and review on paper"
                - "Cap any live money at a sum that would not affect rent or fees"
                - "Complete three monthly reviews"
                - "Write a one-page summary of what you built and learned"
            - name: Moving from end-of-day to intraday trading deliberately
              description: |-
                ## Purpose
                Intraday strategies need cleaner data, faster and more reliable infrastructure, tighter supervision and much more careful cost modelling than end-of-day ones, and costs rise sharply with trade frequency. Treating the move as a decision with written requirements, rather than a gradual drift, stops a personal setup from taking on demands it cannot meet.

                ## Milestones
                1. Requirements listed for intraday: data granularity, uptime, supervision hours and cost per trade.
                2. Each requirement compared with what your current setup and schedule provide.
                3. The intraday idea backtested with tick-level or minute-level costs on held-back data.
                4. A go, wait or no decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on intraday trading, based on a written requirements comparison and a costed backtest on held-back data."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List what intraday needs in data, uptime, supervision and costs"
                - "Compare each requirement with what you can provide now"
                - "Backtest the intraday idea with realistic costs on held-back data"
                - "Record a go, wait or no decision"
            - name: Small portfolio of uncorrelated personal strategies
              description: |-
                ## Purpose
                After a year or more with one strategy running cleanly, a second or third that behaves differently can smooth results, but only if each has its own risk budget and the total stays inside the risk capital and stop rule. Setting per-strategy limits and checking how the strategies move together keeps diversification from turning into hidden concentration.

                ## Milestones
                1. Each strategy given its own risk budget inside the total risk capital.
                2. A combined exposure limit across all strategies written into the code.
                3. Correlation of daily returns between strategies measured and recorded.
                4. The stop rule extended to the combined account.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every strategy has its own risk budget, a combined exposure limit is enforced in code, and correlations are recorded each quarter."
                cadence: rolling
              tasks:
                - "Give each strategy its own risk budget inside the total"
                - "Enforce a combined exposure limit across strategies in the code"
                - "Check correlation between the strategies' daily returns @recurring(quarterly)"
                - "Extend the stop rule to the combined account"
            - name: Round-the-clock markets with a personal bot
              description: |-
                ## Purpose
                Markets that trade every hour of every day, such as crypto venues, have no close to reset at, thin weekend liquidity and the added risk of holding funds on an exchange that may fail or freeze withdrawals. Extra rules for unattended hours, a cap on balances held on any venue and checks on the venue's standing make a 24-hour bot a deliberate choice.

                ## Milestones
                1. Unattended-hours rules set: reduced size, wider halts or no trading overnight and at weekends.
                2. A cap on funds held on any single venue, with the rest withdrawn to your own control.
                3. The venue's regulatory status in your country checked.
                4. Monthly balance checks against the cap recorded.

                ## Notes
                Rules for these markets vary widely by country and change often. Check the regulator's guidance where you live before funding an account.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Unattended-hours rules and a per-venue balance cap are written and enforced, with six monthly balance checks recorded."
                cadence: rolling
              tasks:
                - "Write the bot's rules for overnight and weekend hours"
                - "Set a cap on funds held on any one venue"
                - "Check the venue's regulatory status in your country"
                - "Review balances held on each venue against the cap @recurring(monthly:12)"
            - name: Write-up of the setup without giving advice
              description: |-
                ## Purpose
                A clear write-up of how you built, tested and ran a personal setup is useful evidence for a job application, a talk or your own records, and it forces you to explain decisions you made in a hurry. Keeping it about method, architecture and lessons, with no performance claims, tips or signals, keeps it honest and avoids looking like investment promotion.

                ## Milestones
                1. An outline covering charter, rules, risk limits, architecture, monitoring and lessons.
                2. All account balances, returns and instrument names removed or made generic.
                3. A paragraph stating that most strategies fail out of sample and this is not advice.
                4. The write-up read by one technical friend before it is shared.

                ## Notes
                Publishing returns or strategy signals can count as financial promotion in some countries. Keep it to method.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A finished write-up of method and lessons, with no balances, returns or signals, has been reviewed by one technical reader."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Outline the write-up from charter to lessons learned"
                - "Ask the agent to flag any sentence that reads as a performance claim or tip"
                - "Add the out-of-sample and not-advice paragraph"
                - "Ask one technical friend to read it before sharing"
---

# Personal Algorithmic Trading

Personal algorithmic trading is running your own small automated setup with the habits of a careful engineer, whether you write code for a living or are learning Python for this. The projects start with foundations (a capital figure you can afford to lose, a written charter, a broker, separate account, rule sheet, sizing rule, stop rule and a secure environment), then the routines that keep a live bot honest, the skills behind fills, margin, backtests and small samples, the decisions about data, fees, first live money and scaling, the dated reviews, versions for employees, part-timers, engineers, retirees, households and students, and a few advanced setups.

The rhythms are a pre-open checklist on trading days, a weekly reconciliation, error log and data check, a monthly strategy review and fees tally, quarterly backups, key rotation and capital checks, and a yearly review of the whole setup. Most strategies fail out of sample, so every plan here carries risk limits, a position sizing rule and a written stop rule, and nothing in it is trading or investment advice. It pairs with the Purchase decision, Operational checklist, Metrics log, Reading queue and Risk register templates. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
