---
id: quant-finance.market-microstructure-study
name: Market Microstructure Study
description: "A study plan, a classic reading list, a reconstructed order book and the models behind spreads, queues, auctions and market makers, so you understand how prices really form at the order level."
category: business
version: 1.0.0
tags: [quant-finance, market-microstructure-study, researcher, order-book, limit-order-book, tick-size, auctions, price-discovery]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - metrics-log
    - meeting-notes
    - trip
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Market Microstructure Study
          description: "Studying how markets work at the order level: order books, queue position, tick sizes, auctions, market makers, and the papers worth reading first."
          projects:
            - name: Microstructure study plan for the first six months
              description: |-
                ## Purpose
                Microstructure is wide, from game theory models of informed trading to the plumbing of matching engines, and reading at random leaves gaps that show up the first time you look at real order book data. A written six-month plan with a market, a reading order, a data sample and three questions you want answered turns curiosity into a study you can finish and show to someone else.

                ## Milestones
                1. Three study questions written down, each specific enough to test on data, such as how spreads widen before a scheduled release.
                2. A reading order of ten to fifteen papers and one textbook, grouped by theme.
                3. A data plan naming the market, the venue and the depth of data you will use.
                4. Monthly checkpoints set with a one-line test of what done means for each.

                ## Notes
                Keep the plan to one page. If a question cannot be answered with the data you can actually get, rewrite the question rather than buying more data.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page plan with three testable questions, a reading order, a data choice and six monthly checkpoints is saved and dated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write three questions about order level behaviour you want answered"
                - "List the papers and textbook you will read, grouped by theme"
                - "Name the market, venue and data depth the study will use"
                - "Set six monthly checkpoints with a one-line test for each"
            - name: Choosing the first market and venue to study
              description: |-
                ## Purpose
                Equities, futures, foreign exchange and crypto venues run on very different rules: some have one central book, some are fragmented across dozens of venues, some have opening and closing auctions and some trade around the clock. Picking one market and one primary venue to learn first means every paper you read can be checked against a book you know, instead of a vague average of all of them.

                ## Milestones
                1. Three candidate markets compared on data access, fragmentation, auctions and documentation quality.
                2. One market and one primary venue chosen, with the reason written in two sentences.
                3. The venue's rule book and fee schedule downloaded and filed.
                4. A note of what the choice leaves out, so later results are not over-generalised.

                ## Notes
                A single listed futures contract on one exchange is often the cleanest first book: one venue, one queue, clear tick size and well documented auctions.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One market and venue are chosen and recorded with a written reason, a list of what is excluded and the rule book on file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three candidate markets with the data you could realistically get"
                - "Compare them on fragmentation, auctions and rule book clarity"
                - "Choose one market and venue and write the reason in two sentences"
                - "Download the venue rule book and fee schedule into the study folder"
            - name: Starter reading list of classic microstructure papers
              description: |-
                ## Purpose
                A handful of papers carry most of the field's vocabulary: Roll on the implied spread, Kyle and Glosten and Milgrom on informed trading, the inventory models of market making, and the empirical work on order books that followed. Reading them in a deliberate order, with a survey or textbook such as those by O'Hara, Harris or Hasbrouck alongside, gives you the frame every later paper assumes you already have.

                ## Milestones
                1. A list of ten to fifteen papers and one textbook, each tagged as theory, empirical or survey.
                2. A reading order where each paper builds on ones before it.
                3. Every paper filed with its full citation and a link to a legitimate copy.
                4. The first three papers read and summarised in one paragraph each.

                ## Notes
                Start from the **Reading queue** template. Get papers through a library, the authors' pages or working paper archives, not from pirate sites.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A tagged and ordered list of at least ten papers and one textbook exists, with the first three summarised in a paragraph each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick one survey or textbook as the spine of the reading list"
                - "Add ten to fifteen papers and tag each as theory, empirical or survey"
                - "Arrange the list so each paper builds on the ones before it"
                - "Read and summarise the first three papers in a paragraph each"
            - name: Venue map for the chosen market
              description: |-
                ## Purpose
                Where an instrument trades decides what the order book you are looking at actually represents. For a fragmented market, a single exchange book may hold a minority of displayed liquidity, with the rest on other lit venues, dark pools, internalisers and periodic auctions. A one-page venue map with rough market shares stops you drawing market-wide conclusions from one venue's data.

                ## Milestones
                1. Every venue type that trades the instrument listed, lit, dark, auction and off-exchange.
                2. Approximate shares of volume by venue type from a public source, with the date of the figures.
                3. The venue your data comes from marked on the map, with its share.
                4. One sentence on what your data cannot see.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated venue map with venue types, approximate volume shares and a note on what the study data cannot see is filed with the plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every venue type where the instrument trades"
                - "Find a public source for volume shares by venue and note its date"
                - "Mark the venue your data comes from and its share"
                - "Write one sentence on what activity your data cannot see"
            - name: Order type and matching rule glossary from the rule book
              description: |-
                ## Purpose
                Papers talk about limit and market orders, but real venues offer dozens of types: hidden, iceberg, pegged, post-only, immediate or cancel, minimum quantity and more, each changing priority in ways that matter for queue studies. Reading the rule book and writing a glossary of the order types and matching rules your venue really uses is the single most useful hour of groundwork in this area.

                ## Milestones
                1. Every order type the venue offers listed with a one-line description.
                2. The matching rule written out: price-time, pro rata or a hybrid, and how hidden size is treated.
                3. Priority loss rules noted, such as what happens when an order is amended.
                4. Self-match prevention, minimum resting times and any speed bumps recorded.

                ## Notes
                Rule books change. Note the version and date you read, and link this glossary to the rule change watch so it stays current.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A glossary of every order type and the exact matching and priority rules, tied to a dated rule book version, is saved in the study folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Open the rule book section on order types and list each one"
                - "Write down the matching rule and how hidden size is prioritised"
                - "Note every action that makes an order lose its queue priority"
                - "Record the rule book version and date at the top of the glossary"
            - name: Session times, auctions and trading halts calendar
              description: |-
                ## Purpose
                Opening and closing auctions, intraday auctions after volatility interruptions, half days and halt rules all change what the book looks like at a given minute, and data that ignores them produces strange statistics. Writing the venue's session schedule and halt rules into one reference means you can label every event in your sample with the phase it happened in.

                ## Milestones
                1. Pre-open, continuous, auction and post-close phases written with their local times and time zone.
                2. Volatility interruption and circuit breaker rules summarised in plain words.
                3. Holiday and half-day calendar for the year on file.
                4. A rule for labelling each event in the data by trading phase.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reference sheet with every trading phase, halt rules and the holiday calendar exists, and the sample data carries a trading phase label."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the session phases and times from the venue's website"
                - "Summarise the volatility interruption and halt rules in plain words"
                - "File this year's holiday and half-day calendar"
                - "Add a trading phase label to every event in the sample data"
            - name: One-day sample of order book data for study
              description: |-
                ## Purpose
                Reading about order books without looking at one is like learning to swim from a book. A single day of depth or message data for your chosen instrument, from an exchange sample, a vendor trial or an academic data service, is enough to check every claim in the first papers and costs far less than a full history.

                ## Milestones
                1. A source for one day of order book data identified, with its licence terms read.
                2. One full trading day downloaded with its field definitions.
                3. The file's depth levels, timestamp precision and message types written down.
                4. A first plot of best bid, best ask and traded prices across the day.

                ## Notes
                Many exchanges and vendors publish free sample days. Read the licence before sharing any plot or extract with anyone.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One trading day of order book data is on disk with its field definitions, licence notes and a plot of the best quotes and trades."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search the venue and two vendors for a free sample day of book data"
                - "Read the licence terms and note what you may share"
                - "Download one day and save the field definitions beside it"
                - "Plot best bid, best ask and trades across the day"
            - name: Order book reconstruction from a message feed
              description: |-
                ## Purpose
                Message level data records every add, cancel, modify and execution, and rebuilding the book from it is how you learn what each message really does to the queue. Once your rebuilt top of book matches the venue's own snapshots, you have a tool every later project in this area can use to ask questions at the order level.

                ## Milestones
                1. A program that applies add, cancel, modify and execute messages to an in-memory book.
                2. Rebuilt best bid and ask checked against snapshots at a hundred random times.
                3. Mismatches investigated and either fixed or explained in writing.
                4. The rebuilt book able to answer queue depth and order count at any price and time.

                ## Notes
                Expect mismatches from hidden orders, auction phases and dropped messages. Each one you explain teaches you more than the ones that matched.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The rebuilt top of book matches venue snapshots at a hundred random check times, with every remaining mismatch explained in writing."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down what each message type does to the book in one line each"
                - "Build the book from the first hour of messages"
                - "Compare the rebuilt top of book with snapshots at a hundred random times"
                - "Write up each mismatch and its cause"
            - name: Event sequencing and timestamp sanity check
              description: |-
                ## Purpose
                Order book statistics are only as good as the order of events behind them. Trades that print before the quote that caused them, identical timestamps across many messages and clock differences between data sources all create false patterns, especially at short horizons. A short audit of the sample tells you how far down in time your conclusions can safely go.

                ## Milestones
                1. Timestamp precision and the clock source documented for each field.
                2. Share of events with duplicate timestamps counted.
                3. Trades checked against the prevailing quote for out-of-order prints.
                4. A written shortest horizon below which results from this data are not trusted.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A short audit note states the timestamp precision, duplicate share, out-of-order rate and the shortest horizon the data supports."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note which clock produced each timestamp in the data"
                - "Count events that share an identical timestamp"
                - "Check a sample of trades against the quote just before them"
                - "Write down the shortest horizon you will trust from this data"
            - name: Market maker roles and obligations on the chosen venue
              description: |-
                ## Purpose
                Many venues run designated market maker or liquidity provider programmes with quoting obligations, maximum spreads and fee rebates, and those rules shape the book you see, particularly in less liquid names and during auctions. Learning who is obliged to quote, when and at what width tells you which parts of the book are voluntary and which are contractual.

                ## Milestones
                1. The venue's liquidity provider programmes listed with their names and eligible instruments.
                2. Quoting obligations recorded: presence time, maximum spread and minimum size.
                3. Rebates or fee discounts tied to the programmes noted.
                4. One observation from the sample data of the book behaving as the obligations predict.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note lists the venue's liquidity provider programmes with their obligations and rebates, plus one matching observation from the sample data."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the venue's market maker or liquidity provider programme pages"
                - "Record presence, spread and size obligations for each programme"
                - "Note the rebates or discounts that come with the obligations"
                - "Recheck the programme list for changes @recurring(quarterly)"
            - name: Weekly microstructure paper reading slot
              description: |-
                ## Purpose
                Papers in this field are dense, with models that need a pencil and empirical sections that need a second read. One protected weekly slot, with one paper and one written takeaway, gets through roughly forty papers a year, which is more than most researchers manage when reading only when a question forces them to.

                ## Milestones
                1. A fixed weekly slot of ninety minutes in the calendar.
                2. One paper chosen from the reading queue before each slot.
                3. A takeaway written after every session, even when the paper disappointed.
                4. A running count of papers read kept at the top of the queue.

                ## Notes
                Start from the **Reading queue** template. If a week is lost, do not double up; pick the next paper and move on.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three papers a month are read with a written takeaway each, tracked by a running count in the reading queue."
                cadence: rolling
              tasks:
                - "Block a ninety minute weekly reading slot in the calendar"
                - "Read one paper from the queue and write its takeaway @recurring(weekly:tue)"
                - "Choose next month's papers from the queue @recurring(monthly:26)"
                - "Keep a running count of papers read at the top of the queue"
            - name: Paper summary cards for every paper read
              description: |-
                ## Purpose
                Six months after reading a paper, most people remember the title and a vague result. A standard card per paper, with the question, the data, the main result, the key assumption and what would break it, turns a pile of PDFs into a reference you can search when a new paper cites an old one.

                ## Milestones
                1. A card format fixed with five fields: question, data, result, assumption, weakness.
                2. Every paper read so far given a card.
                3. Cards tagged by theme so related papers can be pulled together.
                4. Cards linked to the stylised facts they support or contradict.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every paper read has a five-field card tagged by theme, and no paper read is more than a week without its card."
                cadence: rolling
              tasks:
                - "Fix the five fields every summary card will use"
                - "Write cards for the papers you have already read"
                - "Ask the agent to draft a card from your notes, then correct it by hand"
                - "Tag and link cards to stylised facts and tidy the set @recurring(monthly:27)"
            - name: Monthly live order book observation session
              description: |-
                ## Purpose
                Static data sets hide how fast a real book moves: quotes flicker, queues refill within milliseconds and liquidity thins before scheduled news. One hour a month watching a live or replayed book for your instrument, with a notebook open, builds the intuition that makes papers easier to judge and anomalies in data easier to spot.

                ## Milestones
                1. A source for viewing a live or replayed book identified, such as a broker depth screen or a replay tool.
                2. A fixed monthly hour in the calendar, at a different time of day each month.
                3. Three observations written after each session.
                4. Observations that contradict a paper flagged for the reading group.

                ## Notes
                Watching is not trading. Keep any trading account closed during the session so observation does not turn into impulse orders.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly observation hour is held with three written observations each time, logged for at least six consecutive months."
                cadence: rolling
              tasks:
                - "Find a depth screen or replay tool showing your instrument's book"
                - "Watch the book for an hour and write three observations @recurring(monthly:9)"
                - "Rotate the session across open, midday and close"
                - "Flag any observation that contradicts a paper you have read"
            - name: Weekly stylised facts log
              description: |-
                ## Purpose
                Microstructure has a set of well known regularities: U-shaped intraday volume, spreads widest at the open, long memory in order signs, heavy tails in returns at short horizons. Measuring a few of them each week on your own data and logging the numbers shows whether they hold on your venue and gives you a baseline when something unusual happens.

                ## Milestones
                1. Five stylised facts chosen, each with an exact definition and code to measure it.
                2. A log with one row per week and one column per fact.
                3. Eight weeks of entries recorded.
                4. Any fact that does not hold on your venue written up with a possible reason.

                ## Notes
                Start from the **Metrics log** template. Keep definitions fixed; changing how a fact is measured breaks the series.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five stylised facts with fixed definitions are measured and logged every week for at least eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Choose five stylised facts and write an exact definition for each"
                - "Write the code that measures all five on one week of data"
                - "Run the measures and add this week's row to the log @recurring(weekly:fri)"
                - "Write up any fact that fails to hold on your venue"
            - name: Exchange notices and rule change watch
              description: |-
                ## Purpose
                Venues change tick sizes, add order types, alter auction times and rewrite fee tiers several times a year, and a change you missed can make a before and after comparison meaningless. A monthly scan of exchange notices and regulator announcements, logged with dates, keeps your glossary current and gives you a list of natural experiments to study.

                ## Milestones
                1. The venue's notice page and the relevant regulator's announcements page bookmarked.
                2. A change log with date announced, date effective and a one-line summary.
                3. The order type glossary and session calendar updated after each relevant change.
                4. Changes worth studying as natural experiments marked in the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated change log is updated every month and the glossary and calendar reflect every change effective in the last quarter."
                cadence: rolling
              tasks:
                - "Bookmark the venue notice page and the regulator announcements page"
                - "Scan both pages and log any change with its dates @recurring(monthly:16)"
                - "Update the glossary and calendar after each relevant change"
                - "Mark changes in the log that could serve as natural experiments"
            - name: Quarterly fee schedule and tick size table refresh
              description: |-
                ## Purpose
                Fees and tick sizes decide whether quoting is profitable, how long queues get and how much of the spread is just the minimum price increment. Refreshing a small table of current fees, rebates and tick sizes each quarter keeps every spread and queue statistic you compute interpretable, and shows when a table change explains a shift in your log.

                ## Milestones
                1. A table of tick sizes by price band for the instrument set you study.
                2. Maker and taker fees and rebates by tier recorded with the effective date.
                3. Each refresh stamped with the date and the source document.
                4. Any change cross-referenced in the stylised facts log.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The fee and tick size table carries a refresh date within the last three months and cites the source document for each row."
                cadence: cyclic
              tasks:
                - "Copy the current tick size bands into a table"
                - "Record maker and taker fees and rebates with their effective date"
                - "Refresh the table and note any changes @recurring(quarterly)"
                - "Mark any changes in the stylised facts log"
            - name: Monthly microstructure reading group
              description: |-
                ## Purpose
                Explaining a model out loud to two or three other researchers finds the gaps that silent reading misses, and other people bring papers you would never pick. A small monthly group with one paper, one presenter and written notes keeps the reading honest and builds a network of people working on the same questions.

                ## Milestones
                1. Two to five members agreed, colleagues, classmates or an online group.
                2. A rotating presenter schedule for the next six months.
                3. Notes saved after every session with the open questions raised.
                4. At least one open question from the group turned into a small data test.

                ## Notes
                Start from the **Meeting notes** template. Twenty minutes of presentation and forty of questions works better than an hour of slides.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The group meets monthly with a named presenter and saved notes, and at least one open question has been tested on data within six months."
                cadence: rolling
              tasks:
                - "Invite two to four researchers to a monthly paper session"
                - "Set a rotating presenter schedule for six months"
                - "Send the paper and a reminder a week ahead @recurring(monthly:14)"
                - "Hold the session and save notes with open questions @recurring(monthly:21)"
            - name: Quarterly market quality statistics snapshot
              description: |-
                ## Purpose
                Regulators and venues publish market quality statistics such as average spreads, depth, fill rates and volume shares, and they give a free outside view of trends your sample cannot show. A quarterly snapshot of a few headline series puts your own measurements in context and catches structural shifts, like a move of volume to dark venues, early.

                ## Milestones
                1. Three or four published market quality series chosen, with their source and definitions.
                2. A table with one row per quarter for each series.
                3. Your own measured spread and depth set beside the published figures.
                4. A short note each quarter on any trend that changed direction.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A quarterly table of at least three published market quality series sits beside your own measures, with a note on each trend change."
                cadence: cyclic
              tasks:
                - "Find two public sources of market quality statistics for your market"
                - "Choose three or four series and copy their definitions"
                - "Add this quarter's figures and your own measures to the table @recurring(quarterly)"
                - "Write a short note on any trend that changed direction"
            - name: Yearly review of the microstructure study plan
              description: |-
                ## Purpose
                A year of reading, logs and small studies usually answers some original questions and replaces others with better ones. A yearly review of the plan, the reading count, the logs and what was learned keeps the study pointed at questions that still matter to your work rather than ones you set when you knew less.

                ## Milestones
                1. Each original study question marked as answered, revised or dropped.
                2. The year's paper count and the most useful five papers listed.
                3. Routines that were kept and routines that lapsed named honestly.
                4. A revised plan for the next year with three new or carried questions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated yearly review records the status of every study question and a revised plan with three questions for the coming year."
                cadence: cyclic
              tasks:
                - "Mark each study question as answered, revised or dropped"
                - "List the five most useful papers of the year"
                - "Hold the yearly plan review and write the revised plan @recurring(yearly)"
                - "Name which routines lapsed and decide to restart or stop them"
            - name: Price-time priority and matching engine behaviour
              description: |-
                ## Purpose
                How a matching engine ranks resting orders decides who trades first, how valuable queue position is and why some venues see huge order counts at the best price. Working through price-time, pro rata and hybrid allocation with small worked examples, then checking them against your rebuilt book, makes later queue and market making papers far easier to follow.

                ## Milestones
                1. Worked examples of price-time and pro rata allocation for the same incoming order.
                2. The effect of hidden and iceberg orders on priority explained in your own words.
                3. One real fill in the sample traced through the queue to show who was filled.
                4. A short note on how allocation rules change the incentive to post early.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written worked examples of at least two allocation rules exist, plus one real fill from the sample traced through the queue."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work a price-time allocation example by hand for a large incoming order"
                - "Work the same example under pro rata allocation"
                - "Trace one real fill in the sample through the queue"
                - "Write a paragraph on how each rule rewards posting early"
            - name: Spread components of processing, inventory and adverse selection
              description: |-
                ## Purpose
                The bid-ask spread pays for three different things: the cost of handling orders, the risk of holding inventory and the losses to better informed traders. Learning the classic decompositions and estimating them on your sample shows why spreads behave differently across instruments, times of day and news events, and why a narrow spread can still be expensive.

                ## Milestones
                1. The three spread components explained in a page with a simple numerical example.
                2. One decomposition method from the literature written out step by step.
                3. The decomposition estimated on your sample for at least two times of day.
                4. A paragraph on what drives the differences you found.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written explanation of the three components and an estimated decomposition for two times of day on your sample are filed together."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page explanation of the three spread components"
                - "Pick one decomposition method and write out its steps"
                - "Estimate the decomposition on the morning and afternoon of the sample"
                - "Explain the differences you found in a paragraph"
            - name: Kyle model worked through by hand
              description: |-
                ## Purpose
                Kyle's model of an informed trader, noise traders and a market maker gives the field its idea of lambda, the price impact per unit of order flow, and it appears in hundreds of later papers. Deriving the single-period equilibrium yourself and simulating it in a few lines of code turns a famous formula into something you can reason with.

                ## Milestones
                1. The single-period equilibrium derived on paper, with every step justified.
                2. A short simulation that reproduces the equilibrium price and lambda.
                3. The effect of more noise trading on lambda shown in a chart.
                4. A paragraph on which assumptions real markets break.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand derivation and a simulation reproducing Kyle's single-period lambda are saved, with a chart of lambda against noise trading."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the setup of the single-period model and list its assumptions"
                - "Derive the equilibrium on paper step by step"
                - "Simulate the model and check the simulated lambda matches the formula"
                - "Chart lambda against the amount of noise trading"
            - name: Glosten-Milgrom sequential trade model in code
              description: |-
                ## Purpose
                Glosten and Milgrom showed how a market maker who cannot tell informed from uninformed traders sets a spread that widens with the share of informed flow, and how prices learn from trades over time. Coding the model as a small simulation makes adverse selection concrete, and the same logic underlies later measures such as the probability of informed trading.

                ## Milestones
                1. The model's bid and ask formulas written out with a numerical example.
                2. A simulation where quotes update after every trade.
                3. Charts of the spread and the price converging to the true value.
                4. A note comparing the model's predictions with spreads around news in your sample.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working simulation of the sequential trade model with charts of spread and price convergence is saved alongside written formulas."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write out the bid and ask formulas with a small numerical example"
                - "Code a simulation that updates quotes after each trade"
                - "Chart the spread and the price converging to the true value"
                - "Compare the model's spread pattern with your sample around news"
            - name: Quoted, effective and realised spread measures
              description: |-
                ## Purpose
                The quoted spread is what the screen shows, the effective spread is what traders actually paid relative to the midpoint, and the realised spread is what liquidity providers kept after prices moved. Computing all three on your sample, along with price impact as the gap between effective and realised, gives you the standard vocabulary of every market quality study.

                ## Milestones
                1. Exact formulas for quoted, effective and realised spread written down, with the horizon used.
                2. All three computed on the sample and shown by time of day.
                3. Price impact computed as effective minus realised spread.
                4. The effect of changing the realised spread horizon tested and noted.

                ## Notes
                These are study measures of market quality. Costs of your own trading belong in transaction cost analysis, not here.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Quoted, effective and realised spreads and price impact are computed on the sample by time of day, with the horizon sensitivity noted."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the formulas for the three spread measures and the horizon"
                - "Compute all three on the sample and chart them by time of day"
                - "Compute price impact as effective minus realised spread"
                - "Rerun realised spread at two other horizons and compare"
            - name: Trade sign classification with the tick test and Lee-Ready
              description: |-
                ## Purpose
                Many data sets do not say whether a trade was buyer or seller initiated, yet order flow studies depend on it. Implementing the tick test and the Lee and Ready method, and checking them against data that does carry the aggressor side, shows how often each misclassifies and where, typically at the midpoint and during fast markets.

                ## Milestones
                1. The tick test and Lee-Ready rules implemented on the sample.
                2. Both compared with the true aggressor side where the data provides it.
                3. Misclassification rates reported overall and for midpoint trades.
                4. A written default for which method to use when the true side is missing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Misclassification rates for both methods against true aggressor side are recorded, with a written default for future studies."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check whether your sample includes the aggressor side for trades"
                - "Implement the tick test and the Lee-Ready rule"
                - "Compare both with the true side and compute error rates"
                - "Write the default method to use when the side is missing"
            - name: Queue position estimation from depth data
              description: |-
                ## Purpose
                Where an order sits in the queue decides how likely it is to fill before the price moves, and it is one of the most studied questions in modern microstructure. With full message data you can track position exactly; with aggregated depth you have to estimate it. Building both and comparing them shows how much information is lost by coarser data.

                ## Milestones
                1. Exact queue position tracked for a set of test orders using message data.
                2. An estimator for queue position built from aggregated depth only.
                3. The two compared, with the error of the estimate reported.
                4. Fill probability by queue position charted for the best price level.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Exact and estimated queue positions are compared on the sample with an error figure and a chart of fill probability by position."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick fifty resting orders at the best price in the message data"
                - "Track each one's exact queue position until it fills or cancels"
                - "Build an estimate of the same positions from aggregated depth"
                - "Chart fill probability against queue position"
            - name: Intraday patterns in spreads, volume and volatility
              description: |-
                ## Purpose
                Spreads, volume and volatility follow strong intraday shapes driven by the open, the close, lunch hours and other markets opening. Measuring them in five-minute buckets on your venue gives you the seasonality you must remove before any other short-horizon study, and it is one of the clearest early results to show a colleague.

                ## Milestones
                1. Spread, volume and volatility measured in five-minute buckets across several days.
                2. Average intraday shapes charted with error bands.
                3. Spikes linked to scheduled events such as other markets opening.
                4. A seasonality adjustment written as code for later studies.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Charts of average intraday spread, volume and volatility with error bands exist, plus reusable code that removes the pattern."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Bucket spread, volume and volatility into five-minute intervals"
                - "Chart the average shape across days with error bands"
                - "Mark scheduled events that line up with spikes"
                - "Re-run the shapes on the latest month of data @recurring(monthly:3)"
            - name: Order flow imbalance and short-horizon price changes
              description: |-
                ## Purpose
                Changes in the queues at the best bid and ask, netted into a single order flow imbalance, explain a large share of very short-horizon price moves in many studies. Reproducing that relationship on your sample teaches you how to build event-level features, how quickly the relationship fades with horizon and why it says little about longer-term returns.

                ## Milestones
                1. Order flow imbalance computed at the best price level from the rebuilt book.
                2. Regressions of midpoint changes on imbalance at three horizons.
                3. Fit and slope reported for each horizon with standard errors.
                4. A note on how quickly the relationship decays and what that implies.

                ## Notes
                A strong contemporaneous fit is an explanation of price formation, not a forecast. Do not read it as a trading signal.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Imbalance regressions at three horizons are reported with fit, slope and standard errors and a written note on decay."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compute order flow imbalance at the best bid and ask"
                - "Regress midpoint changes on imbalance at three horizons"
                - "Report fit and slope with standard errors for each horizon"
                - "Write a note on how fast the relationship decays"
            - name: Price discovery and information shares across venues
              description: |-
                ## Purpose
                When the same instrument trades on several venues, or as both a future and an exchange traded fund, one market usually leads. Hasbrouck's information share and the related component share measures quantify which venue moves first, and learning them shows how price discovery is split in a fragmented market.

                ## Milestones
                1. The information share and component share methods summarised with their assumptions.
                2. Matched price series built for two venues or two related instruments.
                3. Both measures estimated and their bounds reported.
                4. A paragraph on which market leads and how the result depends on sampling frequency.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Information share and component share estimates for two related price series are reported with their bounds and sampling sensitivity."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the two price discovery measures and their assumptions"
                - "Build matched price series for two related venues or instruments"
                - "Estimate both measures and report the bounds"
                - "Repeat at a second sampling frequency and compare"
            - name: Deciding how much book depth the study needs
              description: |-
                ## Purpose
                Top of book, ten levels of depth and full message data differ by orders of magnitude in size, cost and effort, and many questions do not need the most detailed option. Matching each study question to the coarsest data that can answer it saves months of storage and cleaning, and makes clear when a question really does need full messages.

                ## Milestones
                1. Each study question listed with the minimum data granularity it needs.
                2. Size and cost estimates for top of book, depth and message data for your instrument.
                3. One granularity chosen for the next six months, with the reason.
                4. Questions that need finer data parked with a note on the data each one needs.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision maps every study question to the data granularity it needs and names the one chosen for the next six months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each study question beside the coarsest data that answers it"
                - "Estimate size and cost for each data granularity"
                - "Choose one granularity for the next six months and write why"
                - "Park questions that need finer data with the data each one needs"
            - name: Tick size change natural experiments
              description: |-
                ## Purpose
                Changes to minimum tick sizes, such as tick size pilot programmes and the move to harmonised tick regimes in some regions, are rare natural experiments in market design. Studying one with before and after data shows how a tick constraint changes spreads, depth, queue length and who provides liquidity, and the published evaluations give you a benchmark for your own numbers.

                ## Milestones
                1. One tick size change chosen, with its dates, instruments and any control group.
                2. Published evaluations of the change read and summarised.
                3. Spread, depth and queue length compared before and after on available data.
                4. A short write-up comparing your result with the published ones.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A before and after comparison of one tick size change is written up beside a summary of at least one published evaluation."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one tick size change from the rule change log or the literature"
                - "Read and summarise the published evaluations of it"
                - "Compare spreads, depth and queue length before and after"
                - "Write up how your result compares with the published ones"
            - name: Lit, dark and periodic auction venues compared
              description: |-
                ## Purpose
                Dark pools, midpoint crossing and frequent periodic auctions exist to let traders avoid displaying size, and debates about whether they harm price discovery have driven regulation for over a decade. Comparing how each mechanism works, who uses it and what the evidence says gives you a grounded view instead of one taken from a single paper.

                ## Milestones
                1. A table comparing lit books, dark midpoint venues and periodic auctions on price formation, visibility and priority.
                2. Five papers on the effects of dark trading summarised with their findings.
                3. Points where the evidence agrees and disagrees listed.
                4. Your own view written in a paragraph, with the evidence that would change it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison table of three venue mechanisms and summaries of five papers on dark trading are filed with a written view."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draw up a table comparing lit, dark and periodic auction mechanisms"
                - "Find and summarise five papers on the effects of dark trading"
                - "List where the evidence agrees and where it conflicts"
                - "Write your view and what evidence would change it"
            - name: Maker-taker, inverted and flat fee models compared
              description: |-
                ## Purpose
                Fee models change who posts and who takes: maker-taker pays rebates for resting orders, inverted venues charge them, and flat models do neither. Since fees can be a large share of a tick, they shape queue length, quoted spreads and where orders are routed, and comparing them explains patterns that look puzzling from prices alone.

                ## Milestones
                1. The fee models of three venues trading similar instruments summarised in a table.
                2. The net cost of posting and taking computed in ticks for each venue.
                3. Queue length at the best price compared across the venues where data allows.
                4. A note linking fee differences to the queue and spread patterns found.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of three venues' fee models with net posting and taking costs in ticks is filed with a note linking fees to observed queues."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the fee models of three venues in one table"
                - "Convert net posting and taking costs into fractions of a tick"
                - "Compare queue length at the best price across the venues"
                - "Write a note on how fees explain the differences"
            - name: Continuous trading versus frequent batch auctions
              description: |-
                ## Purpose
                Some researchers argue that continuous limit order books create a race to be fastest, and propose discrete batch auctions several times a second instead. Understanding the argument, the counter arguments and the evidence from venues that run call auctions or speed bumps sharpens your view of what market design can and cannot fix.

                ## Milestones
                1. The main batch auction argument summarised in a page in your own words.
                2. Two critiques or alternative designs, such as speed bumps, summarised.
                3. Evidence from at least one real auction or speed bump venue noted.
                4. A paragraph on which parts of the argument your own data could test.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of the batch auction argument, two critiques and one piece of real venue evidence is saved in the study folder."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the main frequent batch auction paper and summarise it in a page"
                - "Find and summarise two critiques or alternative designs"
                - "Note evidence from one venue running auctions or a speed bump"
                - "Write which parts of the argument your data could test"
            - name: Testing one textbook claim on your own sample
              description: |-
                ## Purpose
                Every textbook states results that were true in a particular market and decade, such as spreads widening before earnings or depth thinning at the close. Picking one claim and testing it carefully on your venue's data is the quickest way to learn which results travel and to practise turning a sentence in a book into a measurable test.

                ## Milestones
                1. One claim chosen and rewritten as a testable statement with a measure.
                2. The test run on your sample with an honest measure of uncertainty.
                3. The result written up as held, partly held or did not hold.
                4. Likely reasons for any difference from the textbook listed.

                ## Notes
                This is a one-claim check, not a full replication. Full paper replications have their own area in this pillar.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One textbook claim is tested on your sample and written up as held, partly held or not held, with an uncertainty measure."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick one claim from your textbook and rewrite it as a testable statement"
                - "Choose the measure and the uncertainty estimate before looking"
                - "Run the test on your sample"
                - "Write up whether the claim held and why it might differ"
            - name: Rules before a finding becomes a trading idea
              description: |-
                ## Purpose
                Microstructure study regularly turns up patterns that look tradable, and most of them disappear once fees, queue position and competition from faster participants are counted; most strategies fail out of sample. Writing the gate in advance, with what must be shown, the maximum risk, the position sizing rule and the stop rule, protects you from turning an interesting chart into a costly experiment.

                ## Milestones
                1. A written list of evidence required before any finding is treated as a strategy idea, including costs and out-of-sample tests.
                2. A maximum loss limit and a position sizing rule for any paper or live trial.
                3. A written stop rule that ends a trial automatically when it is breached.
                4. The gate filed so every finding that passes is handed to the strategy research process, not traded directly.

                ## Notes
                None of this is trading advice. If a finding passes the gate, it moves into proper strategy research and paper trading in the relevant areas of this pillar, and any real money decision is yours alone.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated gate document lists required evidence, a maximum loss limit, a sizing rule and a written stop rule for any trial of a study finding."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the evidence a finding needs before it counts as a strategy idea"
                - "Write a maximum loss limit and a position sizing rule for any trial"
                - "Write the stop rule that ends a trial when breached"
                - "File the gate beside the study plan and date it"
            - name: Closing auction study on an index rebalance day
              description: |-
                ## Purpose
                Index rebalance days concentrate huge volumes into closing auctions, and the imbalance messages published before the close show how the auction absorbs them. Studying one rebalance day with imbalance data, auction prices and the last minutes of continuous trading is one of the clearest views of how auctions discover a price under pressure.

                ## Milestones
                1. The next rebalance date for a major index on your venue identified.
                2. Auction imbalance, indicative price and final auction data collected for that day and a normal day.
                3. Imbalance and indicative price paths charted for both days.
                4. A short write-up on how the auction handled the extra volume.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Imbalance and indicative price charts for one rebalance day and one normal day are compared in a written note within a week of the rebalance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the next major index rebalance date on your venue"
                - "Arrange imbalance and auction data for that day and a normal day"
                - "Chart imbalance and indicative price for both days"
                - "Write up how the auction absorbed the extra volume"
            - name: Order book around a scheduled macro data release
              description: |-
                ## Purpose
                Scheduled releases such as employment or inflation figures produce a clear pattern: liquidity providers pull quotes seconds before, spreads jump, depth vanishes and then rebuilds. Recording the book through one release, minute by minute and then second by second, shows adverse selection and inventory risk at work more vividly than any model.

                ## Milestones
                1. One upcoming release and the most sensitive instrument on your venue chosen.
                2. Book data captured or obtained for the thirty minutes around the release.
                3. Spread and depth charted at second resolution around the release time.
                4. A note on how long the book took to recover and how that matches the theory.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Second-resolution spread and depth charts for thirty minutes around one release are saved with a written note on recovery time."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the next scheduled release and the instrument to watch"
                - "Arrange book data for thirty minutes around the release"
                - "Chart spread and depth second by second around the release"
                - "Write how long the book took to recover"
            - name: Futures and options expiry day study
              description: |-
                ## Purpose
                Expiry days bring roll trading, settlement auctions and hedging flows that bend the order book for hours, and settlement procedures differ between venues and contracts. Studying one expiry, with the settlement method written out and the book observed through the final session, teaches how contract design shows up in prices.

                ## Milestones
                1. The settlement method for one contract written out from the exchange rules.
                2. Volume and spread through the expiry session compared with a normal day.
                3. Roll activity between the expiring and next contract measured.
                4. A short note on any unusual book behaviour near settlement.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The settlement method, an expiry versus normal day comparison and a roll measure are written up for one contract expiry."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the exchange rules and write out one contract's settlement method"
                - "Compare volume and spread on expiry day with a normal day"
                - "Measure roll volume between the expiring and next contract"
                - "Note any unusual book behaviour near settlement"
            - name: Microstructure conference or workshop attendance
              description: |-
                ## Purpose
                Several academic and industry conferences and workshops focus on market microstructure, and attending one exposes you to working papers years before publication and to the people writing them. Choosing one, planning which sessions to attend and following up with two or three authors makes the trip a research investment rather than a few days away.

                ## Milestones
                1. One conference or workshop chosen, with dates, cost and whether to submit a paper.
                2. Travel, registration and budget approved or booked.
                3. A shortlist of sessions and three authors you want to speak to.
                4. Notes written up and follow-up messages sent within a week of returning.

                ## Notes
                Start from the **Trip** template. Online workshops and recorded sessions are a good first step if travel is out of budget.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One microstructure conference is attended with session notes written and at least three follow-up messages sent within a week."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "List three microstructure conferences or workshops with dates and costs"
                - "Choose one and get budget or approval to attend"
                - "Shortlist sessions and three authors to meet"
                - "Write up notes and send follow-ups within a week of returning"
            - name: Presenting a microstructure paper to the reading group
              description: |-
                ## Purpose
                Presenting a paper forces you to understand its model, its data and its weak points well enough to answer questions. Preparing a twenty-minute talk on one classic or recent paper, with one extra analysis on your own data, is the best test of whether the reading has turned into understanding.

                ## Milestones
                1. One paper chosen and a date set with the reading group.
                2. Slides covering the question, the model or data, the result and the weaknesses.
                3. One extra chart from your own data that supports or challenges the paper.
                4. The talk given and the hardest questions written down with your answers.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A twenty-minute talk with one original chart is given to the reading group, and the questions asked are recorded with answers."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the paper and agree a presentation date with the group"
                - "Draft slides on question, method, result and weaknesses"
                - "Make one chart from your own data that tests the paper"
                - "Give the talk and record the hardest questions with your answers"
            - name: Microstructure primer for a low-frequency researcher
              description: |-
                ## Purpose
                Researchers used to daily factor data often find order level work disorienting: events arrive irregularly, prices are discrete, the bid and ask matter and much of the noise is mechanical. A focused six-week primer, with one concept and one small exercise each week, closes the gap before you start contributing to higher frequency projects.

                ## Milestones
                1. Six weekly topics chosen: discreteness, bid-ask bounce, event time, order types, spreads and impact.
                2. One small exercise per topic completed on the sample data.
                3. A page of differences from low-frequency practice written for future reference.
                4. One mistake from your own earlier daily research that microstructure explains noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six weekly topics are completed with an exercise each and a written page of differences from low-frequency practice."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Choose six weekly topics and schedule them"
                - "Complete this week's topic and its small exercise @recurring(weekly:thu)"
                - "Write a page on how order level data differs from daily data"
                - "Note one past daily result that microstructure might explain"
            - name: Learning a new venue in the first month on a desk
              description: |-
                ## Purpose
                Joining a desk or research team that trades on a venue you have never studied means learning its rules, quirks and data conventions fast, usually while being asked questions. A four-week plan that covers the rule book, the team's data, the main order types and one short analysis gets you to useful conversations with traders quickly and without guessing.

                ## Milestones
                1. The venue rule book and the team's internal data documentation read in week one.
                2. Order types and matching rules summarised and checked with a colleague in week two.
                3. One short analysis of the venue's book completed and shared in week three.
                4. A list of open questions about the venue reviewed with a senior colleague in week four.

                ## Notes
                Keep employer data and code inside the employer's systems. Personal notes should hold concepts and public rules, never internal data.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within four weeks, a checked order type summary, one shared short analysis and a reviewed list of open questions about the venue exist."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the venue rule book and the team's data documentation"
                - "Summarise order types and check the summary with a colleague"
                - "Note new questions about the venue for the weekly catch-up @recurring(weekly:wed)"
                - "Complete and share one short analysis of the venue's book"
            - name: Microstructure study on a small data budget
              description: |-
                ## Purpose
                Independent researchers, students and people between roles rarely have access to licensed full-depth histories. Free sample days, academic data services, public crypto venue feeds and published summary statistics can still support serious study if you design questions around them and keep a firm limit on what you spend.

                ## Milestones
                1. A list of free and low-cost data sources with their licence limits.
                2. A monthly spending limit for data and tools written down.
                3. Study questions adjusted to fit the data that is affordable.
                4. One full analysis completed using only free or low-cost data.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of affordable sources, a written monthly spending limit and one completed analysis using only that data are saved together."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List free and low-cost order book data sources with licence limits"
                - "Write a monthly spending limit for data and tools"
                - "Check spending against the limit and cancel unused trials @recurring(monthly:5)"
                - "Complete one analysis using only the affordable data"
            - name: Thesis chapter on an order book question
              description: |-
                ## Purpose
                Doctoral and master's students drawn to microstructure need a question that is new, answerable with data they can get and small enough for one chapter. Scoping the question with a supervisor, securing data access early and writing the literature section first keeps the chapter from stalling on data licensing a year in.

                ## Milestones
                1. A research question agreed with the supervisor, with the contribution stated in one sentence.
                2. Data access confirmed in writing, including any licence restrictions on publication.
                3. A literature section draft covering the ten closest papers.
                4. Results and a full chapter draft submitted to the supervisor.

                ## Notes
                Check publication rights in any data licence before you build the chapter on it. Some licences forbid publishing even aggregate statistics.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A full chapter draft on an agreed order book question, using data with confirmed publication rights, is submitted to the supervisor."
                cadence: phased
                effort_hours_estimate: "300"
              tasks:
                - "Write three candidate questions and the contribution of each"
                - "Agree one question with your supervisor"
                - "Confirm data access and publication rights in writing"
                - "Draft the literature section on the ten closest papers"
            - name: Briefing traders on a microstructure finding
              description: |-
                ## Purpose
                Traders and portfolio managers want to know what a finding means for how they work, in a few minutes and without the regression tables. Turning one solid study result into a one-page brief with a chart, the size of the effect, its limits and what remains unknown is a service skill that makes research useful to the people who act on it.

                ## Milestones
                1. One finding chosen that is relevant to the audience and supported by the data.
                2. A one-page brief with one chart, the effect size and its limits.
                3. The brief reviewed by a colleague for clarity and overstatement.
                4. Questions from the audience recorded and the next study adjusted.

                ## Notes
                State what the finding does not show as clearly as what it does. Present it as research, never as a recommendation to trade.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A reviewed one-page brief with one chart, an effect size and stated limits is presented, and the audience's questions are recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose one finding the audience would care about"
                - "Ask the agent to draft a one-page brief from your notes, then edit it"
                - "Have a colleague check the brief for overstatement"
                - "Offer a fresh finding brief to the desk @recurring(quarterly)"
            - name: Hawkes process model of order arrivals
              description: |-
                ## Purpose
                Orders cluster: one arrival makes the next more likely, and buy orders trigger more buys and sometimes sells. Self-exciting point processes, known as Hawkes processes, capture this and are widely used in modern microstructure research. Fitting one to the arrivals in your sample teaches event-time modelling and shows how much activity is triggered rather than independent.

                ## Milestones
                1. The Hawkes intensity and branching ratio explained in your own words.
                2. A one-dimensional model fitted to market order arrivals in the sample.
                3. Goodness of fit checked with a residual test.
                4. A two-dimensional buy and sell version fitted and the cross-excitation reported.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One and two-dimensional Hawkes fits to market order arrivals are reported with branching ratios and a residual goodness of fit test."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write a page on the Hawkes intensity and branching ratio"
                - "Fit a one-dimensional model to market order arrivals"
                - "Check the fit with a residual test"
                - "Fit a buy and sell version and report cross-excitation"
            - name: Queue-reactive order book model study
              description: |-
                ## Purpose
                Queue-reactive models treat the rates of order arrivals and cancellations at each price level as functions of the current queue sizes, giving a simulator that reproduces many real book statistics. Estimating one on your data and comparing simulated with real statistics is a demanding but rewarding test of everything learned in this area.

                ## Milestones
                1. The model's structure summarised from the original paper.
                2. Arrival and cancellation rates estimated as functions of queue size on your sample.
                3. A simulation of the book built from the estimated rates.
                4. Simulated and real spread, depth and price change statistics compared.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A simulator built from rates estimated on your data produces spread, depth and price change statistics compared side by side with the real ones."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Summarise the queue-reactive model from the original paper"
                - "Estimate arrival and cancellation rates by queue size"
                - "Build a simulation using the estimated rates"
                - "Compare simulated and real book statistics"
            - name: Flash crash and liquidity withdrawal case studies
              description: |-
                ## Purpose
                Episodes where liquidity vanished in minutes, such as the May 2010 equity flash crash and later rapid moves in government bonds and currencies, are the field's stress tests. The official reports and academic analyses of them describe order books under strain in rare detail, and studying three gives you a sense of how fragile displayed liquidity can be.

                ## Milestones
                1. Three episodes chosen across different asset classes.
                2. The official report or main analysis of each summarised in a page.
                3. Common features listed, such as liquidity providers pulling quotes and feedback between venues.
                4. A note on which safeguards, like circuit breakers, changed afterwards.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One-page summaries of three liquidity withdrawal episodes and a list of their common features and later safeguards are saved."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose three liquidity withdrawal episodes across asset classes"
                - "Summarise the official report on each in a page"
                - "List the features the episodes share"
                - "Note the safeguards introduced after each episode"
            - name: Crypto venue microstructure compared with a regulated exchange
              description: |-
                ## Purpose
                Crypto venues trade around the clock, usually have no auctions, often publish full order book feeds for free and run very different fee and listing rules. Comparing one major crypto venue with your regulated exchange on spreads, depth, intraday shape and order types shows which microstructure regularities are universal and which come from specific market rules.

                ## Milestones
                1. One crypto venue chosen and its public book feed documented.
                2. Rules, fees and order types tabled beside your regulated venue.
                3. Spread, depth and intraday patterns compared over the same week.
                4. A note on which stylised facts held on both and which did not.

                ## Notes
                Treat crypto venue data quality and venue risk with caution. This is a study of market structure, not a view on any asset.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A side by side comparison of one crypto venue and one regulated venue on rules, spreads, depth and intraday shape is written up."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose one crypto venue and read its public feed documentation"
                - "Table its rules, fees and order types beside your regulated venue"
                - "Compare spread, depth and intraday patterns over the same week"
                - "Note which stylised facts held on both venues"
---

# Market Microstructure Study

Market microstructure study is for researchers who want to understand how prices form one order at a time: who quotes, who takes, how queues build and drain, why tick sizes and auctions matter, and what the classic papers actually showed. The list starts with foundations (a study plan, a first market and venue, a reading list, the rule book, a sample of order book data rebuilt into a book you can query), then the routines that keep the study moving, the core models of spreads, queues and price impact, the comparisons and natural experiments worth running, dated events such as rebalance days and data releases, setups for researchers in different situations, and a few specialist models at the end.

What repeats is a weekly paper slot and stylised facts log, monthly order book observation, rule change checks and a reading group, and quarterly refreshes of fee and tick tables and market quality statistics, closed by a yearly review of the plan. The Reading queue, Metrics log, Meeting notes and Trip templates pair with it; this is study and method only, never trading advice, and any finding that turns into a trading idea goes through written risk limits, sizing rules and a stop rule first, because most strategies fail out of sample. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
