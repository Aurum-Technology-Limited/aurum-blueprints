---
id: quant-finance.trading-journal-and-review
name: Trading Journal and Review
description: "A trading journal you will actually keep: one record per trade with its reason, rule checks and mistakes, broker reconciliation, daily, weekly and monthly reviews, and a change log so rules move only after a review."
category: business
version: 1.0.0
tags: [quant-finance, trading-journal-and-review, everyone, trading-journal, trade-review, rule-compliance, expectancy, trading-psychology]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - meeting-notes
    - habit-tracker
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Trading Journal and Review
          description: "Keeping a trading journal: every trade with its reason, rule compliance, errors, weekly and monthly reviews, and changes made only after a review."
          projects:
            - name: Choosing where your trading journal lives
              description: |-
                ## Purpose
                Split across a broker app, a notes file and a few screenshots, a journal never gets reviewed, because nothing adds up in one place. Pick one home now, whether a spreadsheet, a dedicated journal app or a database you control, against criteria you write down first: import from your broker, custom fields, charts attached to trades, export, cost and privacy. Settling this first means every later project builds on the same record.

                ## Milestones
                1. Five or six selection criteria written down before looking at any tool.
                2. Two or three options compared against those criteria, including a plain spreadsheet.
                3. One tool chosen, with the reason recorded in a sentence.
                4. An export of an empty or test journal saved, proving you can get your data back out.

                ## Notes
                Start from the **Purchase decision** template. A spreadsheet is a sensible default for the first six months; switching later is a separate decision once you know what you need.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One journal tool chosen against written criteria, with a successful test export saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write five criteria your journal tool must meet before comparing any"
                - "Compare a spreadsheet with two journal apps against those criteria"
                - "Check each option can export every field to CSV"
                - "Record the chosen tool and the reason in the journal's front page"
            - name: Fields to record for every trade
              description: |-
                ## Purpose
                Most journals fail because they record either too little (symbol and profit) or so much that entries stop after a week. A fixed set of 12 to 18 fields, split into what you fill before entry, at exit and at review, makes every trade comparable and keeps each entry to a few minutes. The schema decided here is what every statistic in this area is calculated from.

                ## Milestones
                1. A field list split into pre-trade, at-exit and review sections.
                2. Each field defined in one line, with allowed values for the categorical ones.
                3. Planned entry, stop, target and size included alongside the actual fills.
                4. Ten past or practice trades entered to test that the fields fit real trades.
                5. Fields nobody filled in during the test removed or merged.

                ## Notes
                Typical core fields: date and time, instrument, direction, setup name, reason in one sentence, planned entry, stop and target, size, actual fills, fees, result in money and in R, rule compliance yes or no, mistake tags, and a grade for execution.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written field list of no more than 18 fields, each defined, tested on ten trades and adopted as the journal template."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the pre-trade, at-exit and review field lists"
                - "Define allowed values for setup, direction and mistake fields"
                - "Enter ten recent trades using the new fields"
                - "Delete any field left blank in most of the ten test entries"
            - name: Rule checklist the journal scores you against
              description: |-
                ## Purpose
                Discipline can only be measured if the rules are written in a form you can mark yes or no for each trade. Turning your trading plan into eight to twelve checkable statements, such as stop placed before entry or size within the plan, gives every trade a compliance score. The rules themselves belong in your trading plan; this project makes them auditable.

                ## Milestones
                1. The current trading plan or risk rules gathered in one place.
                2. Eight to twelve rules rewritten as statements a stranger could mark yes or no.
                3. A compliance column or checkbox set added to the trade template.
                4. A compliance percentage formula that updates as trades are added.

                ## Notes
                If a rule cannot be checked from the journal record, either rewrite it or add the field that makes it checkable. Vague rules such as trade with patience score nothing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every rule in the trading plan appears in the journal as a yes or no check, with a working compliance percentage."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy your trading plan's rules into one list"
                - "Rewrite each rule so it can be marked yes or no per trade"
                - "Add the rule checks to the trade entry template"
                - "Build a running compliance percentage on the journal summary sheet"
            - name: Importing trades from your broker export
              description: |-
                ## Purpose
                Typing fills by hand invites errors in price, size and fees, and those errors quietly distort every statistic. Setting up a repeatable import from your broker's trade history or statement export means the numbers come straight from the source, and you only add the reasons and judgements a broker cannot know. Do it before the habit forms, so the habit is filling in reasons, not copying prices.

                ## Milestones
                1. The broker's trade history export located and its columns understood.
                2. A mapping from export columns to journal fields written down.
                3. Partial fills and scaled exits grouped correctly into single trades.
                4. One full month imported and its total profit matching the broker statement.

                ## Notes
                Fees, commissions, financing and exchange charges often sit in separate columns or separate reports. Include them, or every result will look better than it was.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One month of broker trades imported with a written column mapping, and the journal's net result matching the broker statement to the cent."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download last month's trade history export from your broker"
                - "Map each export column to a journal field in a short note"
                - "Decide how partial fills are grouped into one trade"
                - "Import the month and compare net result with the statement"
            - name: Back-filling three months of past trades
              description: |-
                ## Purpose
                Starting a journal from today leaves you months away from a meaningful sample. Back-filling the last three months from broker records gives an early, imperfect baseline, as long as reasons you cannot honestly remember are marked unknown rather than invented. Hindsight is the enemy here, so record only what the data shows.

                ## Milestones
                1. Three months of trades imported from broker records.
                2. Setup and reason fields filled only where you have notes or clear memory, unknown otherwise.
                3. Back-filled trades flagged so they can be excluded from some statistics.
                4. A first rough count of trades, win rate and net result for the period.

                ## Notes
                Never rewrite a past reason to fit the outcome. A back-filled trade marked unknown is more useful than a confident story written after the fact.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three months of past trades are in the journal, flagged as back-filled, with unknown reasons marked unknown."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export three months of trade history from every account you used"
                - "Import the trades and add a back-filled flag to each"
                - "Fill setup fields only from notes written at the time"
                - "Calculate trade count, win rate and net result for the period"
            - name: Pre-trade reason written before entry
              description: |-
                ## Purpose
                A reason written after the trade closes is nearly always a story shaped by the result. Writing one sentence before entry, naming the setup, the trigger and where you are wrong, creates the only honest record of your thinking and makes impulse trades visible because they have no sentence. This one change does more for review quality than any statistic.

                ## Milestones
                1. A one-line reason format agreed: setup, trigger, invalidation level.
                2. The reason field made the first thing filled for a new trade.
                3. Twenty consecutive trades each with a reason timestamped before entry.
                4. Trades without a prior reason tagged as impulse trades.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty consecutive trades in the journal carry a reason timestamped before their entry time, and any without one are tagged as impulse."
                cadence: rolling
              tasks:
                - "Write the one-line reason format at the top of the trade template"
                - "Keep the journal open beside the order ticket during sessions"
                - "Tag every trade entered without a prior reason as impulse"
                - "Count impulse trades at each weekly review"
            - name: Chart screenshots attached to each trade
              description: |-
                ## Purpose
                Weeks later, a line of numbers will not tell you what the chart looked like when you clicked buy. Saving a screenshot at entry and at exit, named by trade ID, lets your weekly review see what you saw and spot patterns no field captures, such as entering into resistance or after an extended move.

                ## Milestones
                1. A naming rule for screenshots tied to the trade ID.
                2. One folder or journal attachment field where all screenshots go.
                3. Entry and exit screenshots saved for the last ten trades.
                4. A screenshot hotkey or shortcut set up so capture takes seconds.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The last ten trades each have an entry and an exit screenshot stored under their trade ID."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Set a keyboard shortcut for a region screenshot"
                - "Create the screenshot folder and naming rule using trade IDs"
                - "Capture entry and exit charts for the next ten trades"
                - "Link each screenshot from its journal entry"
            - name: Mistake tags you will actually use
              description: |-
                ## Purpose
                Free-text notes about errors cannot be counted, so the same mistake repeats for months unnoticed. A short fixed list of eight to twelve mistake tags, such as moved stop, chased entry, oversized, revenge trade or exited early, turns notes into numbers you can rank. Keep it short enough to remember during a session.

                ## Milestones
                1. A list of eight to twelve mistake tags, each defined in one sentence.
                2. Tags split into planning, execution and emotional errors.
                3. The tag list added as allowed values in the journal.
                4. Last month's trades re-read and tagged with the new list.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A defined list of no more than twelve mistake tags is in the journal and applied to at least one month of trades."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every mistake you remember making in the last two months"
                - "Group them into planning, execution and emotional errors"
                - "Cut the list to twelve tags or fewer with one-line definitions"
                - "Tag last month's trades using the new list"
            - name: Baseline statistics from your first 50 trades
              description: |-
                ## Purpose
                Before changing anything, you need to know where you stand: how many trades, the win rate, average win and loss, expectancy per trade, largest loss and rule compliance. Fifty journaled trades is too few to prove an edge, but enough to show obvious problems such as losses twice the size of wins. This baseline is what every later review compares against.

                ## Milestones
                1. Fifty trades journaled with complete fields.
                2. Win rate, average win, average loss and expectancy calculated net of costs.
                3. Largest single loss and longest losing streak recorded.
                4. Rule compliance percentage and top three mistake tags noted.
                5. The baseline saved as a dated snapshot that later reviews compare against.

                ## Notes
                Start from the **Metrics log** template. Treat every number as provisional: with 50 trades, a win rate of 55 percent is statistically hard to tell from 45 percent.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline page shows win rate, average win and loss, expectancy, largest loss, longest losing streak and compliance for 50 trades."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check that fifty complete trades are in the journal"
                - "Calculate win rate, average win, average loss and expectancy"
                - "Record the largest loss and longest losing streak"
                - "Save the figures as a dated baseline snapshot"
            - name: Journal privacy, backup and account separation
              description: |-
                ## Purpose
                Your journal holds account numbers, balances and years of personal notes, and losing it means losing the evidence for every decision. Keeping it backed up in two places, free of passwords and full account numbers, and clearly separated by account protects both the record and you. It also makes handing extracts to an accountant or mentor safe.

                ## Milestones
                1. Full account numbers and any credentials removed from the journal.
                2. Each account given a short label used in every trade record.
                3. An automatic backup to a second location set up.
                4. A restore from backup tested on another device.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The journal contains no credentials or full account numbers, is backed up to a second location and has been restored once as a test."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the journal for account numbers and passwords and remove them"
                - "Give each brokerage account a short label"
                - "Set up an automatic backup to a second location"
                - "Restore the backup on another device to prove it works"
                - "Open the latest backup copy to confirm it ran @recurring(monthly:25)"
            - name: Post-session journal close
              description: |-
                ## Purpose
                Entries left until the weekend lose the detail that matters: why you hesitated, what you felt when the stop was hit. A ten-minute close after each session, filling exit fields, mistake tags and an execution grade while memory is fresh, keeps the journal complete and stops one bad day leaking into the next.

                ## Milestones
                1. A fixed close routine of no more than ten minutes written down.
                2. Every trade from the session completed with exit fields and tags.
                3. One sentence on the session as a whole recorded.
                4. Four weeks of sessions closed the same day.

                ## Notes
                Start from the **Habit tracker** template. If you did not trade, write one line saying so and why. Days without trades are data too.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks of trading sessions each have a same-day close with all trade fields completed."
                cadence: rolling
              tasks:
                - "Write the ten-minute close routine as a short checklist"
                - "Complete exit fields, mistake tags and grades after each session @recurring(weekly:mon,tue,wed,thu,fri)"
                - "Write one sentence summing up the session"
                - "Mark the close done in the habit tracker"
            - name: Pre-session readiness note
              description: |-
                ## Purpose
                Sleep, stress, illness and a fresh argument all show up in trade quality, yet they rarely appear in a journal. Rating your readiness out of five before trading, with one line on anything unusual, lets you later compare results on low-readiness days with the rest and decide whether those days deserve smaller size or no trading at all.

                ## Milestones
                1. A readiness scale from one to five with a definition for each level.
                2. Readiness recorded before each session for a month.
                3. Results on low and high readiness days compared after a month.
                4. A written rule, if the data supports one, for what happens on low readiness days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of sessions each has a readiness score recorded before the first trade, and the comparison with results is written up."
                cadence: rolling
              tasks:
                - "Define what each readiness level from one to five means for you"
                - "Record your readiness score before the first trade of the day @recurring(daily)"
                - "Compare results by readiness level after a month of scores"
                - "Write down any rule the comparison supports"
            - name: Weekly trade review session
              description: |-
                ## Purpose
                Single trades are noise; a week of them starts to show patterns. A fixed 45-minute review each weekend, going through every trade, the screenshots, the mistake tags and the compliance score, turns the journal from a diary into feedback. End it with one thing to keep and one thing to stop.

                ## Milestones
                1. A fixed review slot in the calendar each week.
                2. A review agenda covering trades, compliance, mistakes and one lesson.
                3. Each review ending with one keep and one stop written in the journal.
                4. Eight consecutive weekly reviews completed.

                ## Notes
                Start from the **Meeting notes** template for the review page. Review the process before the profit: a losing week with full compliance is a better week than a winning one with three rule breaks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly review pages exist, each with compliance, top mistakes, one keep and one stop."
                cadence: rolling
              tasks:
                - "Block a 45-minute weekly review slot in your calendar"
                - "Write the review agenda at the top of the review page"
                - "Hold the weekly review and record one keep and one stop @recurring(weekly:sat)"
                - "Read last week's stop before starting this week's review"
            - name: Monthly statistics and compliance review
              description: |-
                ## Purpose
                Weekly reviews catch behaviour; the monthly review checks whether the numbers are moving. Recalculating expectancy, win rate, average R, drawdown and compliance against the baseline each month shows whether the changes from weekly reviews are helping, and it is the only review where a rule change may be proposed.

                ## Milestones
                1. A monthly summary sheet updated with the month's figures.
                2. This month compared with the baseline and the previous three months.
                3. The top three mistake tags and their cost in money and R listed.
                4. Any proposed rule change written down for the change log, or none.

                ## Notes
                Start from the **Metrics log** template. A month is still a small sample; look for the same direction over three months before concluding anything.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month has a summary with expectancy, win rate, average R, drawdown, compliance and the cost of the top three mistakes, compared with the baseline."
                cadence: rolling
              tasks:
                - "Recalculate the month's statistics on the summary sheet @recurring(monthly:3)"
                - "Compare the month with the baseline and the last three months"
                - "Work out what the three most common mistakes cost in R"
                - "Write any proposed rule change for the change log"
            - name: Monthly broker statement reconciliation
              description: |-
                ## Purpose
                Missed imports, duplicate trades and forgotten fees make a journal drift away from reality, and a journal that disagrees with the statement cannot be trusted for anything else. Reconciling the journal's net result, fees and closing positions with the broker statement each month keeps the record honest and catches broker errors too.

                ## Milestones
                1. The month's broker statement downloaded and filed.
                2. Journal net result, fees and open positions compared with the statement.
                3. Every difference explained and corrected in the journal.
                4. A reconciled flag and date recorded on the month's summary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every month carries a reconciled flag showing the journal's net result and fees match the broker statement, with any differences explained."
                cadence: rolling
              tasks:
                - "Download and file the monthly broker statement @recurring(monthly:7)"
                - "Compare net result, fees and open positions with the journal"
                - "Correct and note every difference found"
                - "Mark the month reconciled with the date"
            - name: Rule change log with a review gate
              description: |-
                ## Purpose
                Changing rules after every losing trade means you never test any of them long enough to know if they work. A change log where each change records the evidence, the review it came from, the date it starts and the date it will be judged keeps rules stable between reviews. Rule changes happen only at the monthly review, never mid-session.

                ## Milestones
                1. A change log page with fields for rule, change, evidence, start date and judge date.
                2. A written policy that rules change only at a monthly or quarterly review.
                3. Every current rule given a version number and start date.
                4. Each change judged on its own judge date and kept or reverted.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The change log lists every rule change with its evidence, start date and judge date, and no change was made outside a scheduled review."
                cadence: rolling
              tasks:
                - "Create the change log page with the five fields"
                - "Write the policy that rules change only at scheduled reviews"
                - "Version every current rule with its start date"
                - "Check for changes reaching their judge date @recurring(monthly:20)"
            - name: Rule breach log and follow-up
              description: |-
                ## Purpose
                Break a rule once and ignore it, and it soon becomes a rule broken weekly. Logging each breach with what happened, what you were feeling, what it cost and the one thing that would have stopped it gives you a pattern to work on rather than guilt. Breaches of loss limits deserve the same entry even when the trade won.

                ## Milestones
                1. A breach log with fields for rule, trigger, feeling, cost and prevention.
                2. Every breach from the last month entered.
                3. Breaches counted by rule at each weekly review.
                4. One prevention step adopted for the most frequent breach.

                ## Notes
                A winning trade that broke a rule is still a breach. Counting only losing breaches teaches you that breaking rules is fine when it works.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every rule breach, winning or losing, has a log entry with cost and a prevention step, and breach counts appear in each weekly review."
                cadence: rolling
              tasks:
                - "Create the breach log with rule, trigger, feeling, cost and prevention"
                - "Enter every breach from the last month, including winners"
                - "Choose one prevention step for the most frequent breach"
                - "Count breaches by rule in the weekly review @recurring(weekly:sun)"
            - name: Missed and skipped setups log
              description: |-
                ## Purpose
                Taken trades show only half your decisions. Recording valid setups you saw but did not take, and why, reveals hesitation, fear after losses or a rule that is too strict, and lets you compare what skipped trades would have done with the trades you took.

                ## Milestones
                1. A skipped-setup entry format: time, setup, reason skipped, hypothetical result.
                2. At least 20 skipped setups logged.
                3. Hypothetical results of skipped setups compared with taken ones.
                4. The most common reason for skipping named in a review.

                ## Notes
                Fill in the hypothetical result mechanically from your plan's entry, stop and target, not by guessing where you would have exited.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty skipped setups are logged with reasons and hypothetical results, and the comparison with taken trades is written up."
                cadence: rolling
              tasks:
                - "Add a skipped-setup section to the journal"
                - "Log each valid setup you skip with the reason during sessions"
                - "Score skipped setups using the plan's own entry, stop and target @recurring(weekly:fri)"
                - "Compare skipped and taken results after twenty entries"
            - name: Equity curve and drawdown tracker
              description: |-
                ## Purpose
                Seeing the account as a running curve, with the current drawdown from its peak, shows the shape of results that a table of trades hides. Updating it monthly, with the largest drawdown and how long recovery took, gives you context for the next losing streak and an early warning when a drawdown is deeper than any before.

                ## Milestones
                1. An equity curve built from journal results, net of fees and deposits.
                2. Deposits and withdrawals separated from trading results.
                3. Current drawdown, maximum drawdown and longest recovery shown.
                4. The curve updated each month after reconciliation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An equity curve excluding deposits and withdrawals shows current and maximum drawdown and is updated after each monthly reconciliation."
                cadence: rolling
              tasks:
                - "Build the equity curve from reconciled journal results"
                - "Separate deposits and withdrawals from trading results"
                - "Add current drawdown, maximum drawdown and longest recovery"
                - "Update the curve after the month is reconciled @recurring(monthly:9)"
            - name: Quarterly audit of the journal itself
              description: |-
                ## Purpose
                Journals decay: fields stop being filled, tags multiply, screenshots go missing. A quarterly audit of completeness, tag use and whether each field still earns its place keeps the record worth keeping, and checks that the reviews are actually happening.

                ## Milestones
                1. Completeness checked: percentage of trades with every required field.
                2. Unused fields and tags removed or merged.
                3. Number of weekly and monthly reviews held compared with the number due.
                4. One improvement to the journal format agreed for next quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter has an audit note with field completeness, reviews held against reviews due and one format change agreed."
                cadence: cyclic
              tasks:
                - "Run the quarterly journal audit for completeness and tag use @recurring(quarterly)"
                - "Remove or merge fields and tags used in under a tenth of trades"
                - "Count reviews held against reviews due"
                - "Record one format change for next quarter"
            - name: Expectancy, win rate and payoff ratio explained
              description: |-
                ## Purpose
                A high win rate with small wins and large losses loses money, and a low win rate can be profitable, yet many traders judge themselves by win rate alone. Learning how win rate, average win, average loss and expectancy fit together, and calculating each from your own journal, changes what you look at in every review.

                ## Milestones
                1. The formula for expectancy per trade written in your own words.
                2. Win rate, payoff ratio and expectancy calculated by hand for 20 of your trades.
                3. The same figures matched against the journal's formulas.
                4. A note on which combination your own results show.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains expectancy, win rate and payoff ratio with your own calculated figures matching the journal's formulas."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a clear explanation of trade expectancy and payoff ratio"
                - "Calculate expectancy by hand for twenty of your trades"
                - "Check your hand figures against the journal's formulas"
                - "Write a short note on what your combination means"
            - name: Measuring every trade in R multiples
              description: |-
                ## Purpose
                Results in money depend on size, so a big win on an oversized trade looks better than a disciplined small one. Expressing each result as a multiple of the risk planned at entry, where 1R is the distance to your stop times size, makes trades comparable across instruments and account sizes and exposes trades with no planned stop at all.

                ## Milestones
                1. Planned risk per trade recorded at entry for every new trade.
                2. A formula converting each result into R added to the journal.
                3. Average R, best R and worst R shown on the summary.
                4. Trades with no planned stop listed and counted separately.

                ## Notes
                Losses larger than minus 1R mean the stop was moved, skipped or gapped through. Tag which, because each has a different fix.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every trade in the last month shows a result in R, and trades without a planned stop or with losses beyond minus 1R are tagged."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add a planned risk field filled at entry"
                - "Add a formula that converts each result into R"
                - "List every trade that lost more than 1R and tag why"
                - "Show average, best and worst R on the summary sheet"
            - name: Reading MAE and MFE from your trades
              description: |-
                ## Purpose
                Maximum adverse excursion (how far a trade went against you) and maximum favourable excursion (how far it went in your favour) show whether stops are too tight and exits too early, which profit alone cannot. Recording both for a sample of trades and plotting them is one of the most informative exercises a discretionary trader can do with a journal.

                ## Milestones
                1. MAE and MFE recorded for at least 40 trades, in R.
                2. A scatter of MAE against final result for winners and losers.
                3. A scatter of MFE against captured profit.
                4. Two written observations about stops and exits from the plots.

                ## Notes
                Treat findings as questions for a later test, not as a reason to widen stops tomorrow. Any change goes through the change log.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "MAE and MFE are recorded for 40 trades, plotted, and two observations about stops and exits are written up."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read an introduction to MAE and MFE analysis"
                - "Add MAE and MFE fields measured in R"
                - "Fill both fields for forty trades from chart history"
                - "Plot both against results and write two observations"
            - name: Spotting bias in your own trade notes
              description: |-
                ## Purpose
                Hindsight, recency, loss aversion and the urge to win back losses all leave fingerprints in the words you write. Learning the common biases and then re-reading a month of your notes for them shows which ones drive your mistakes, so your mistake tags and rules can target the right one.

                ## Milestones
                1. Short definitions of six common trading biases written down.
                2. A month of trade notes re-read with each bias in mind.
                3. Examples of each bias found, quoted from your own notes.
                4. The bias with most examples linked to a mistake tag.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bias note lists six biases with quoted examples from your own journal and names the most frequent one."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read about hindsight, recency, loss aversion and revenge trading"
                - "Re-read one month of trade notes looking for each bias"
                - "Quote one example of each bias you find"
                - "Link the most frequent bias to a mistake tag"
            - name: Writing trade notes that help later
              description: |-
                ## Purpose
                Notes such as felt good or bad entry are useless six weeks on. Practising a short structure (what I expected, what happened, what I did, what I would do next time) for twenty trades makes notes specific enough to learn from in review, without making them long.

                ## Milestones
                1. A four-part note structure written at the top of the template.
                2. Twenty consecutive trades noted with all four parts.
                3. Notes from before and after compared for usefulness at a review.
                4. Average note length kept under 80 words.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Twenty consecutive trades carry four-part notes under 80 words each, and a review page compares them with older notes."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the four-part note structure into the trade template"
                - "Use the structure for twenty consecutive trades"
                - "Compare old and new notes at the next weekly review"
                - "Trim any note longer than 80 words"
            - name: Sample size and luck in trading results
              description: |-
                ## Purpose
                Ten winning trades in a row can happen by chance to a trader with no edge, and a good method can lose for months. Learning how much a win rate or expectancy can wobble at 30, 100 and 300 trades, with a simple simulation or confidence interval, stops you from scrapping a sound plan or trusting a lucky streak.

                ## Milestones
                1. The idea of a confidence interval for a win rate explained in your own words.
                2. Intervals worked out for your own win rate at your current trade count.
                3. A coin-flip or resampling simulation showing streaks a no-edge trader would get.
                4. A written minimum trade count before you judge any setup.

                ## Notes
                Results from a few dozen trades rarely prove anything either way. Most apparent edges shrink or vanish with more data.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note gives the confidence interval for your own win rate and a written minimum trade count for judging setups."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain explanation of confidence intervals for proportions"
                - "Work out the interval around your current win rate"
                - "Simulate a thousand random 50-trade runs in a spreadsheet"
                - "Write the minimum trade count you will use before judging a setup"
            - name: Grading process separately from outcome
              description: |-
                ## Purpose
                A well-executed trade can lose and a careless one can win, and judging by outcome alone rewards luck. Grading each trade on execution (A to D) separately from its result, and then looking at results by grade, shows whether following your process actually pays and keeps the focus on what you control.

                ## Milestones
                1. A grading scale from A to D with a definition for each grade.
                2. Every trade graded on execution before its result is reviewed.
                3. Results compared by grade after 50 graded trades.
                4. A four-box table of good or bad process against good or bad outcome.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fifty trades carry an execution grade, and a written comparison shows results by grade and a process against outcome table."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Define what A, B, C and D execution mean for you"
                - "Grade execution before looking at each trade's result"
                - "Compare average R by grade after fifty trades"
                - "Fill a process against outcome table at the monthly review"
            - name: After-action reviews for trading days
              description: |-
                ## Purpose
                Pilots, surgeons and armies use structured debriefs because unstructured ones drift into blame or excuses. Borrowing the after-action review format (what was planned, what happened, why, what to sustain or change) for your worst and best days gives a repeatable way to learn from outliers.

                ## Milestones
                1. The after-action review questions written as a template.
                2. One review completed for your worst day this quarter.
                3. One review completed for your best day this quarter.
                4. A trigger agreed for when a day earns a full review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two after-action reviews, one for the worst and one for the best day of the quarter, are written with a trigger rule for future ones."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the four after-action review questions as a page template"
                - "Review your worst trading day of the quarter"
                - "Review your best trading day of the quarter"
                - "Agree the loss or gain size that triggers a full review"
            - name: Performance by setup and the keep or drop decision
              description: |-
                ## Purpose
                Most traders run three to six setups, and usually one or two carry the results while another quietly loses. Breaking expectancy, trade count and compliance out by setup shows which to keep, which to trade smaller and which to stop, provided each has enough trades to judge.

                ## Milestones
                1. Every trade in the last 100 assigned a single setup name.
                2. Trade count, win rate, average R and expectancy shown per setup.
                3. Setups below your minimum trade count marked not yet judged.
                4. A written keep, reduce or drop decision for each judged setup, entered in the change log.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A per-setup table covering the last 100 trades exists, with a recorded keep, reduce or drop decision for every setup that meets the minimum trade count."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Clean up setup names so each trade has exactly one"
                - "Build a per-setup table of count, win rate, average R and expectancy"
                - "Mark setups below your minimum count as not yet judged"
                - "Record a keep, reduce or drop decision in the change log"
            - name: Time of day and day of week breakdown
              description: |-
                ## Purpose
                Many traders lose most of their money in a particular window, the first fifteen minutes, late afternoon when tired, or Fridays. Splitting results by time and day shows whether a simple schedule change, such as no trades after a set hour, would remove a reliable leak.

                ## Milestones
                1. Entry time recorded for every trade in the sample, in one time zone.
                2. Results grouped by hour bucket and by weekday.
                3. Any bucket with clearly worse results and enough trades flagged.
                4. A proposed schedule rule, or a note that none is justified.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of results by hour bucket and weekday is written up with a proposed schedule rule or a reasoned no change."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Convert all entry times to one time zone"
                - "Group results into hour buckets and weekdays"
                - "Flag buckets with enough trades and clearly worse results"
                - "Write a proposed schedule rule for the change log, or none"
            - name: One-mistake-a-month reduction plan
              description: |-
                ## Purpose
                Trying to fix every flaw at once fixes none. Picking the single costliest mistake tag from the monthly review, writing a specific counter-measure and counting it daily for a month gives a measurable result, and the cost in R tells you whether it was worth the effort.

                ## Milestones
                1. The costliest mistake tag from the last month chosen by total R lost.
                2. A specific counter-measure written, such as a checklist step or order type.
                3. Occurrences counted through the month.
                4. Count and cost compared with the month before.

                ## Notes
                Start from the **Habit tracker** template to count the counter-measure each session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month names one target mistake with a counter-measure, and its count and R cost are compared with the previous month."
                cadence: cyclic
              tasks:
                - "Rank last month's mistake tags by total R lost"
                - "Write one counter-measure for the costliest mistake"
                - "Pick next month's target mistake at the monthly review @recurring(monthly:4)"
                - "Compare the target mistake's count and cost with last month"
            - name: Exit quality review
              description: |-
                ## Purpose
                Entries get the attention, but exits decide most of the result: cutting winners at the first wobble, holding losers past the stop, or closing before a planned target. Reviewing 30 exits against the plan, with what the trade did afterwards, shows which exit habit costs most.

                ## Milestones
                1. Thirty closed trades compared with their planned stop and target.
                2. Each exit labelled as planned, early, late or moved stop.
                3. What price did in the following period noted for each early exit.
                4. The costliest exit habit named and passed to the monthly mistake plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Thirty exits are labelled planned, early, late or moved stop, with the costliest exit habit named in the monthly review."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull thirty recent closed trades with planned stop and target"
                - "Label each exit as planned, early, late or moved stop"
                - "Note what price did after each early exit"
                - "Name the costliest exit habit at the monthly review"
            - name: Position size consistency check
              description: |-
                ## Purpose
                Size drifting up after wins and down after losses quietly changes your results more than any setup. Comparing actual size with planned size for every trade, and plotting size against the previous trade's result, shows whether emotion is choosing your size. The sizing rule itself belongs in your risk plan; this checks you follow it.

                ## Milestones
                1. Planned and actual risk per trade recorded side by side.
                2. Trades sized outside the plan counted and listed.
                3. Size after wins compared with size after losses.
                4. Findings written into the breach log where size broke a rule.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A check covering at least 50 trades shows planned against actual risk, counts oversized trades and compares size after wins and losses."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add planned and actual risk columns side by side"
                - "List every trade sized outside the plan"
                - "Compare average size after wins with size after losses"
                - "Log oversized trades in the breach log"
            - name: Overtrading check from trade counts
              description: |-
                ## Purpose
                Overtrading rarely feels like it from inside the session; it shows up as days with three times the usual number of trades and worse results. Counting trades per day and comparing results on busy days with normal days tells you whether a daily trade cap would help, and where to set it.

                ## Milestones
                1. Trades per day counted for the last three months.
                2. Results on days above the usual count compared with the rest.
                3. Impulse-tagged trades counted on busy days.
                4. A proposed daily trade cap, or a note that none is needed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of busy and normal days over three months is written up with a recorded decision on a daily trade cap."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count trades per day for the last three months"
                - "Compare results on high-count days with the rest"
                - "Count impulse trades on the busiest days"
                - "Record a daily trade cap decision in the change log"
            - name: Tag and field clean-up
              description: |-
                ## Purpose
                After a few months, setup names split into near-duplicates and mistake tags multiply until nothing can be counted. A one-off clean-up, merging duplicates, renaming consistently and locking the lists as allowed values, makes every statistic in the journal reliable again.

                ## Milestones
                1. Every distinct setup name and tag exported and counted.
                2. Duplicates and near-duplicates merged under one name.
                3. Allowed-value lists locked so new spellings cannot appear.
                4. Statistics recalculated after the clean-up.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Setup names and tags are merged into locked allowed-value lists with no duplicates, and summary statistics recalculated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Export every distinct setup name and tag with its count"
                - "Merge duplicates and near-duplicates under one name"
                - "Lock the lists as allowed values in the journal"
                - "Recalculate summary statistics after the merge"
            - name: Switching to a dedicated journal app
              description: |-
                ## Purpose
                After six months a spreadsheet may be straining: slow imports, no charts, formulas breaking. Deciding whether a dedicated journal app is worth its subscription, against what you now know you use, avoids both paying for features you ignore and putting up with a tool that stops you reviewing.

                ## Milestones
                1. The features you actually used in six months listed.
                2. Two apps trialled with a month of your real trades imported.
                3. Cost, export options and data privacy compared.
                4. A switch or stay decision recorded, with the migration plan if switching.

                ## Notes
                Start from the **Purchase decision** template. Check before paying that you can export everything, including notes and tags, if you later leave.
              priority: low
              deadlineOffsetDays: 210
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A switch or stay decision on a dedicated journal app is recorded after trialling two apps with real trade data."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the journal features you used in the last six months"
                - "Trial two journal apps with one month of real trades"
                - "Compare cost, export and privacy terms"
                - "Record the switch or stay decision"
            - name: First 30-day journal review
              description: |-
                ## Purpose
                Thirty days in, the journal has enough entries to show whether the format works and whether the habits stuck. A single review of completeness, the first statistics and how long entries take lets you fix the format before it sets, and marks the point where journaling becomes routine.

                ## Milestones
                1. Percentage of trades with all required fields calculated.
                2. Average time per entry and per close estimated.
                3. First statistics recorded, marked provisional.
                4. Three format changes agreed and made.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 30-day review page records completeness, time per entry, provisional statistics and three format changes made."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a 90-minute slot thirty days after starting the journal"
                - "Calculate the share of trades with every required field"
                - "Record first statistics marked provisional"
                - "Make three changes to the journal format"
            - name: Hundred-trade milestone review
              description: |-
                ## Purpose
                One hundred journaled trades is the first sample where comparisons begin to mean something, though still loosely. Marking it with a fuller review, comparing against the 50-trade baseline, setup by setup and with the compliance trend, gives a clear picture of what has changed and what to focus on for the next hundred.

                ## Milestones
                1. Statistics for trades 1 to 100 compared with the 50-trade baseline.
                2. Compliance and mistake counts compared between the first and second fifty.
                3. Two strengths and two weaknesses written down.
                4. Focus areas for the next hundred trades agreed.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 100-trade review compares the first and second fifty trades and names two strengths, two weaknesses and next focus areas."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare statistics for trades 1 to 100 with the baseline"
                - "Split compliance and mistakes between the first and second fifty"
                - "Write two strengths and two weaknesses"
                - "Agree focus areas for the next hundred trades"
            - name: Six-month trading review write-up
              description: |-
                ## Purpose
                Half a year of journaled trading deserves a written review you could hand to a mentor: results net of all costs, the equity curve, compliance trend, rule changes and their effects, and an honest view of whether the activity is worth the time and money. Writing it forces conclusions that monthly reviews avoid.

                ## Milestones
                1. Six months of reconciled results, net of fees, summarised.
                2. Every rule change in the period listed with its judged effect.
                3. Hours spent trading and reviewing estimated against results.
                4. A two-page write-up with a decision to continue, change or pause.

                ## Notes
                Ask the agent to draft the summary tables from the monthly reviews, then write the conclusions yourself.
              priority: medium
              deadlineOffsetDays: 190
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A two-page six-month review with reconciled results, rule change effects and hours spent ends in a recorded continue, change or pause decision."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft summary tables from six monthly reviews"
                - "List every rule change and its judged effect"
                - "Estimate hours spent trading and reviewing"
                - "Write the conclusion with a continue, change or pause decision"
            - name: Year-end trading review and next-year plan
              description: |-
                ## Purpose
                The year-end review closes the books on twelve months: final statistics, the best and worst trades and months, what the change log achieved, and the journal format for next year. It also hands a clean trade record to whoever handles your tax, though the tax work itself sits elsewhere.

                ## Milestones
                1. Twelve months of reconciled results and statistics summarised.
                2. Best and worst trades, setups and months reviewed.
                3. Change log reviewed: which changes helped and which were reverted.
                4. Journal archived for the year and a fresh one started.
                5. Three goals for next year written, each about process, not profit.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A year-end review with twelve months of statistics, a change log assessment and three process goals is saved, and the year's journal is archived."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Book the year-end review and summarise twelve months of results @recurring(yearly)"
                - "Review best and worst trades, setups and months"
                - "Assess which rule changes helped and which were reverted"
                - "Archive the year's journal and write three process goals"
            - name: Review after your largest drawdown
              description: |-
                ## Purpose
                The deepest drawdown is where most accounts and most journals end. Reviewing it while it is fresh, trade by trade, separating what came from the market from what came from breaking rules, shows whether the plan or the discipline failed, and the answer decides very different next steps.

                ## Milestones
                1. The drawdown period defined from peak to trough with trade list.
                2. Each losing trade marked as within rules or a breach.
                3. Loss from rule-following trades separated from loss from breaches.
                4. A written conclusion on whether plan or discipline failed, with next steps.

                ## Notes
                If losses are affecting sleep, money for essentials or relationships, step back from trading and talk to someone you trust. A pause is a valid outcome of this review.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A drawdown review splits losses between rule-following trades and breaches and records a conclusion with next steps."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Define the drawdown period and list its trades"
                - "Mark each losing trade as within rules or a breach"
                - "Total losses from rule-following trades and from breaches"
                - "Write whether the plan or the discipline failed and what follows"
            - name: Quarterly review with a mentor or trading peer
              description: |-
                ## Purpose
                Reviewing alone, you will explain away the same mistake indefinitely. Sharing a quarterly extract (statistics, compliance, three trades you are proud of and three you are not) with a mentor or trusted peer brings an outside eye that notices what you no longer see.

                ## Milestones
                1. A mentor or peer agreed on a quarterly review rhythm.
                2. A one-page extract prepared with no account numbers or balances unless you choose.
                3. Their observations written down during the meeting.
                4. One action from their feedback added to the next month's plan.

                ## Notes
                Start from the **Meeting notes** template. Offer to review their journal in return; reciprocal reviews tend to last longer.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A quarterly review meeting with a mentor or peer is held with a one-page extract, recorded observations and one action taken."
                cadence: cyclic
              tasks:
                - "Ask one mentor or trusted peer to swap quarterly reviews"
                - "Prepare a one-page extract of statistics and six trades"
                - "Hold the review and write down their observations @recurring(quarterly)"
                - "Add one action from the feedback to next month's plan"
            - name: Journaling as a part-time trader with a day job
              description: |-
                ## Purpose
                Trading around a job means sessions squeezed into early mornings, lunch breaks or evenings, and the journal has to fit the same gaps. A cut-down routine (a two-minute pre-trade note on a phone, a five-minute close, and the full review moved to the weekend) keeps the record complete without eating the little time there is.

                ## Milestones
                1. A minimum entry that can be done on a phone in two minutes.
                2. The close routine trimmed to five minutes.
                3. Weekly review moved to a fixed weekend slot that suits the household.
                4. Trades placed during work hours tagged so their results can be compared.

                ## Notes
                Check your employer's policy on personal trading and dealing during work time before anything else.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A two-minute phone entry and five-minute close are in use for a month, with work-hours trades tagged and compared."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check your employer's personal trading policy"
                - "Set up a two-minute phone entry form for the journal"
                - "Tag trades placed during work hours"
                - "Compare results of work-hours trades with the rest after a month"
            - name: Journaling a systematic or automated strategy
              description: |-
                ## Purpose
                When a system places trades, the journal shifts from why I entered to did the system do what it should, and did I interfere. Recording expected signals against actual fills, every manual override with its reason, and outages or missed orders shows whether results come from the rules or from you.

                ## Milestones
                1. Expected signals from the strategy logged beside actual orders and fills.
                2. Every manual override recorded with reason and result.
                3. Missed, duplicated or late orders logged with cause.
                4. Monthly results split between system trades and overridden trades.

                ## Notes
                Overrides that feel smart are often the largest source of difference between backtest and live results. Count them honestly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of system trades is logged with expected against actual fills, every override recorded and results split by system and override."
                cadence: rolling
              tasks:
                - "Add expected signal and actual fill fields for system trades"
                - "Log every manual override with its reason"
                - "Record missed or late orders and their cause"
                - "Split monthly results between system and overridden trades @recurring(monthly:14)"
            - name: Restarting the journal after a break
              description: |-
                ## Purpose
                Coming back after weeks or months away, whether from a drawdown, a new baby, illness or a busy season at work, is when old mistakes return fastest. Re-reading your last reviews, restarting at reduced size and journaling the first 20 trades with extra care gives a controlled return instead of a rush to make up lost time.

                ## Milestones
                1. The last monthly and drawdown reviews re-read before the first trade.
                2. A return plan written with reduced size and a trade count before full size.
                3. The first 20 trades journaled with readiness scores and full notes.
                4. A short review at 20 trades before returning to normal size.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written return plan exists, and the first 20 trades after the break are fully journaled and reviewed before size returns to normal."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Re-read your last monthly review and any drawdown review"
                - "Write a return plan with reduced size for the first twenty trades"
                - "Journal each of the first twenty trades in full"
                - "Review the twenty trades before returning to normal size"
            - name: Journaling multi-leg and options positions
              description: |-
                ## Purpose
                An options spread or a scaled futures position is several fills that make one idea, and journaling each leg as a separate trade wrecks every statistic. A position-level record with legs underneath, risk defined at entry, adjustments logged and assignment or expiry recorded keeps results honest for complex positions.

                ## Milestones
                1. A position record that groups legs under one idea.
                2. Maximum risk at entry recorded for each position.
                3. Adjustments, rolls and assignments logged as events on the position.
                4. Statistics calculated per position, not per leg.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Multi-leg positions are journaled as single positions with legs, entry risk and adjustment events, and statistics run per position."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a position ID that groups legs together"
                - "Record maximum risk at entry for each position"
                - "Log adjustments, rolls and assignments as position events"
                - "Switch statistics to calculate per position"
            - name: First hundred trades for a new trader
              description: |-
                ## Purpose
                For a new trader, the first hundred trades are tuition, and the journal is what turns tuition into learning. Trading the smallest size your broker allows, journaling every field, and judging yourself only on compliance rather than profit for these hundred trades keeps the cost of early mistakes low.

                ## Milestones
                1. A written commitment to minimum size for the first hundred trades.
                2. Compliance, not profit, set as the measure for this period.
                3. Every trade journaled in full, including the reason before entry.
                4. Compliance above an agreed percentage before any size increase is considered.

                ## Notes
                Only use money you can afford to lose entirely. Many people never get past this stage profitably, and finding that out cheaply is a good result.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One hundred trades at minimum size are fully journaled with compliance tracked, and no size increase is made before the agreed compliance level."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a commitment to minimum size for a hundred trades"
                - "Set your target compliance percentage for the period"
                - "Journal every one of the hundred trades in full"
                - "Check compliance at every twenty trades"
            - name: Journal analysis scripts in Python or a spreadsheet
              description: |-
                ## Purpose
                Once the journal holds several hundred trades, recalculating statistics by hand each month becomes slow and error-prone. A small script or a set of pivot tables that reads the journal export and produces the monthly summary, per-setup table and equity curve in one run makes reviews faster and every figure reproducible.

                ## Milestones
                1. The journal export format fixed and documented.
                2. A script or pivot set that produces the monthly summary in one run.
                3. Output checked against the hand-calculated figures for one month.
                4. Script and journal export kept under version control or dated copies.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One run of a script or pivot set produces the monthly summary, per-setup table and equity curve, matching hand figures for a test month."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Document the journal export columns and formats"
                - "Ask the agent to draft a script that builds the monthly summary"
                - "Check the output against one month of hand figures"
                - "Store the script and exports with dated versions"
            - name: Personal playbook built from journal evidence
              description: |-
                ## Purpose
                Your own best examples make a better playbook than any book: one page per setup that you actually trade. Each page holds the conditions, entry, stop, exit, screenshots of A-grade trades and the setup's journal statistics, so preparation before a session draws on evidence instead of memory.

                ## Milestones
                1. Setups with enough journaled trades chosen for the playbook.
                2. One page per setup with conditions, entry, stop and exit.
                3. Three A-grade example screenshots on each page.
                4. Each page showing current trade count and expectancy, refreshed quarterly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A playbook has one page per qualifying setup with rules, three graded examples and current journal statistics."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose setups that meet your minimum trade count"
                - "Write one page per setup with conditions, entry, stop and exit"
                - "Add three A-grade example screenshots to each page"
                - "Refresh each page's statistics at the quarterly audit @recurring(quarterly)"
            - name: Annual check on whether an edge exists
              description: |-
                ## Purpose
                Most traders, and most strategies, do not have a lasting edge once costs are counted, and a year of journaled trades is the first real chance to test yours. Comparing expectancy net of all costs with its uncertainty, against a simple alternative such as holding a broad index fund, and checking whether results hold across halves of the year, gives an honest answer rather than a hopeful one.

                ## Milestones
                1. Twelve months of reconciled trades with all costs included.
                2. Expectancy with a confidence interval or bootstrap range calculated.
                3. Results compared between the first and second half of the year.
                4. Hours spent and returns compared with a passive alternative.
                5. A written verdict: evidence of edge, no evidence, or not enough data.

                ## Notes
                This is a check on your own records, not investment advice. Not enough data and no evidence are the most common verdicts, and both are useful. Speak to a licensed adviser before making decisions about your wider savings.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written verdict on edge is recorded, based on a year of net expectancy with an uncertainty range, a split-half check and a passive comparison."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm all twelve months are reconciled with costs included"
                - "Bootstrap a range for expectancy from the year's trades"
                - "Compare the first and second half of the year"
                - "Write the verdict and what it means for next year"
---

# Trading Journal and Review

This area is for anyone who trades their own account, by hand or by system, and wants a written record that tells them what they actually do rather than what they remember doing. It starts with the foundations (where the journal lives, the fields for every trade, the rules you check against, broker imports and a baseline), then the daily, weekly, monthly and quarterly reviews that keep it honest, the skills of reading your own statistics and notes without fooling yourself, decisions about setups, exits and overtrading, dated reviews at 30 days, 100 trades, six months and year end, variants for part-time, returning, new and system traders, and finally the specialist work of analysis code, a personal playbook and an annual check on whether an edge exists at all.

What repeats is a short close after each session, a pre-session readiness note, a weekly review, a monthly statistics, compliance and broker reconciliation pass, a quarterly audit of the journal itself, and a yearly review. The Purchase decision, Metrics log, Meeting notes and Habit tracker templates pair with the projects that name them. The journal is a record, not advice: it will not tell you what to trade, most strategies fail out of sample, and nothing here should be read as a reason to risk money you cannot afford to lose. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
