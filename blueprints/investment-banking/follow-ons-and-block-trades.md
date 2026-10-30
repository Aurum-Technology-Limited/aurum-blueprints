---
id: investment-banking.follow-ons-and-block-trades
name: Follow-Ons and Block Trades
description: "Overnight bookbuilds and block trades from the banker's seat: product mechanics, wall-crossing scripts, discount and sizing work, lock-up calendars, execution checklists and the debriefs that make the next night faster."
category: business
version: 1.0.0
tags: [investment-banking, follow-ons-and-block-trades, knowledge-worker, ecm, accelerated-bookbuild, block-trades, lock-ups, syndicate]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - reading-queue
    - development-plan
    - risk-register
    - meeting-notes
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Follow-Ons and Block Trades
          description: "Executing follow-on offerings and block trades: overnight bookbuilds, wall-crossing investors, pricing discounts, lock-ups and fast execution timelines."
          projects:
            - name: Follow-on and block trade product map
              description: |-
                ## Purpose
                Marketed follow-ons, overnight accelerated bookbuilds, bought deals, risk blocks, agency blocks and at-the-market programmes all get called 'a follow-on' in passing, yet each carries a different risk for the bank, a different timetable and different documents. A one-page map of the six, with who sells, who bears price risk and how long each takes, is the reference you will reach for on every new staffing.

                ## Milestones
                1. A one-page table covering the six structures by seller, primary or secondary shares, price risk holder and typical timetable.
                2. One public example of each structure found from a recent announcement and noted beside it.
                3. The documents each structure needs listed, from launch release to pricing release.
                4. The map checked by an associate on the desk and corrected.

                ## Notes
                Start from the **Reading queue** template to collect the announcements and desk guides you learn from. Use only public examples in personal notes.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page product map of six follow-on and block structures, each with a public example, reviewed by an associate."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the six structures as rows in a one-page table"
                - "Find one public launch announcement for each structure"
                - "Note who holds price risk and how long each timetable runs"
                - "Ask an associate on the desk to mark up the map"
            - name: Study of twenty recent public block trades
              description: |-
                ## Purpose
                Before you can say whether a 6% discount is generous or tight, you need a feel for what the market has actually paid. Pulling twenty recent blocks and follow-ons from public announcements, with size, discount to last close and size in days of trading volume, builds that instinct quickly and gives you a starting data set for pitch pages.

                ## Milestones
                1. Twenty deals from the last twelve months collected from public announcements and exchange filings.
                2. Each deal recorded with deal size, discount to last close, shares offered as a multiple of average daily volume and primary or secondary.
                3. Three observations written down about what drove the wider discounts.
                4. The table saved as a clean starting file for the desk's own precedent work.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table of twenty public blocks and follow-ons with size, discount and days of volume, plus three written observations on discount drivers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search exchange announcements for twenty blocks and follow-ons priced in the last year"
                - "Record size, last close, offer price and 20-day average volume for each"
                - "Calculate discount and days of volume for every row"
                - "Write three sentences on why the widest discounts were wide"
            - name: Who does what on an overnight bookbuild
              description: |-
                ## Purpose
                An overnight deal involves ECM origination, ECM execution, the syndicate desk, equity sales, legal counsel on both sides, compliance, the issuer or seller, and often a sponsor's capital markets team. Knowing each person's job and hand-offs means you call the right person at 11pm instead of the most senior one awake.

                ## Milestones
                1. A role chart listing every party on a typical overnight deal and what each one owns.
                2. The hand-off points marked: wall-cross approval, launch, book updates, pricing call, allocations and settlement.
                3. Names and phone numbers of the internal desk roles saved in the bank's contact system.
                4. Two questions about the syndicate desk's role answered by a syndicate banker.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A role chart for an overnight bookbuild with hand-off points, checked by a syndicate banker, plus current internal contacts saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draw the parties on a typical overnight deal and their responsibilities"
                - "Mark where each hand-off happens between close and open"
                - "Book fifteen minutes with a syndicate banker to check the chart"
                - "Save the desk's out-of-hours numbers in the bank's contact system"
            - name: Launch-ready execution document kit
              description: |-
                ## Purpose
                On a block that launches straight after the close you may have ninety minutes to produce the launch release, term sheet, sales memo and investor messages. A kit of the firm's latest approved formats, with placeholders clearly marked and a note on who signs off each one, turns that ninety minutes into filling blanks instead of searching old deal folders.

                ## Milestones
                1. The latest approved launch announcement, pricing announcement, term sheet and sales memo formats saved together on the bank's drive.
                2. Every deal-specific field highlighted in one colour so nothing is left from a previous deal.
                3. The sign-off owner for each document written on a cover page.
                4. The kit walked through once with legal or the execution associate.

                ## Notes
                Start from the **Operational checklist** template. Keep the kit on the bank's systems only, and rebuild it from approved formats rather than an old live deal file.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved document kit on the bank's drive with highlighted fields and a sign-off cover page, reviewed once with legal or an associate."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the execution associate for the current approved document formats"
                - "Copy them into one kit folder on the bank's drive"
                - "Highlight every field that changes from deal to deal"
                - "Write the sign-off owner for each document on a cover page"
            - name: Issuer eligibility and shelf readiness primer
              description: |-
                ## Purpose
                Whether an issuer can launch overnight depends on its market's rules: shelf registration or seasoned issuer status in some markets, prospectus exemptions and pre-emption limits in others, and blackout periods around results everywhere. A plain primer on the questions to ask, with the answers for the two or three markets your desk works in confirmed by legal, saves days at the start of every mandate.

                ## Milestones
                1. A list of the eligibility questions that decide speed: registration status, exemption limits, pre-emption rules and blackout dates.
                2. The answers for your desk's main markets written down and confirmed by the bank's legal team.
                3. A short note on what forces a marketed deal instead of an overnight one.
                4. The primer stored with the execution kit.

                ## Notes
                This is a checklist of questions, not a legal view. Every live deal is confirmed with counsel.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A primer of eligibility questions with answers for the desk's main markets, confirmed in writing by the bank's legal team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the questions that decide how fast an issuer can launch"
                - "Draft answers for each of your desk's main markets"
                - "Send the draft to the bank's ECM legal contact for correction"
                - "File the confirmed primer beside the execution kit"
            - name: Reading a lock-up agreement clause by clause
              description: |-
                ## Purpose
                Lock-ups decide when a sponsor or founder can sell and how fast the stock reopens to supply, so ECM bankers read them closely. Working through one public lock-up from an IPO prospectus, clause by clause, teaches you the length, carve-outs, early release triggers and waiver mechanics you will negotiate later.

                ## Milestones
                1. One public lock-up undertaking from a recent IPO prospectus annotated in full.
                2. Length, parties bound, carve-outs and early release triggers listed in a table.
                3. The waiver process and who can grant it described in two sentences.
                4. A second lock-up compared with the first and the differences noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two public lock-up clauses annotated and compared in a table of length, carve-outs, release triggers and waiver mechanics."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download a recent IPO prospectus and find the lock-up section"
                - "Annotate length, parties, carve-outs and release triggers"
                - "Describe who can waive the lock-up and how"
                - "Compare it with a second prospectus and note the differences"
            - name: What sets the discount on a block
              description: |-
                ## Purpose
                Discounts move with size relative to trading volume, recent price momentum, volatility, how much the market expects the sale, and whether the shares are primary or secondary. Learning how the desk weighs each factor means your first pricing page shows the range seniors would expect, with reasons, rather than a single number copied from the last deal.

                ## Milestones
                1. The main discount drivers listed with a sentence each on direction and rough weight.
                2. Three public deals explained using those drivers.
                3. The desk's own rule of thumb, if it has one, noted from a conversation with syndicate.
                4. A one-page explainer you could talk through in an interview or a pitch prep.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page explainer of block discount drivers, applied to three public deals and checked against the syndicate desk's view."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the factors that widen or narrow a block discount"
                - "Explain three public deals' discounts using those factors"
                - "Ask a syndicate banker how the desk frames discount in a pricing call"
                - "Write a one-page explainer from your notes"
            - name: Hour-by-hour overnight bookbuild timeline
              description: |-
                ## Purpose
                Typically, an overnight accelerated bookbuild runs from wall-crossing in the afternoon, to launch after the close, through books covered and a pricing call, to allocations and a pricing release before the next open. Writing that timetable hour by hour, with who acts at each step, is the single most useful document for a new analyst on the night.

                ## Milestones
                1. A timetable from wall-cross to settlement with times relative to market close.
                2. An owner named for every step, including sign-offs and releases to the exchange.
                3. The points where the deal can be pulled marked clearly.
                4. The timeline used on one live deal and corrected afterwards.

                ## Notes
                Start from the **Operational checklist** template so the timeline becomes a list you can tick through on the night.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An hour-by-hour overnight bookbuild timeline with owners and pull points, used on a live deal and updated after it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write each step from wall-cross to settlement with times relative to the close"
                - "Name the owner and sign-off for every step"
                - "Mark the points where the deal can still be pulled"
                - "Update the timeline the morning after your next live deal"
            - name: Market sounding script for a follow-on
              description: |-
                ## Purpose
                Wall-crossing an investor before launch is regulated in most markets: the call follows an approved script, the investor consents before hearing anything inside, and the bank records who was crossed and when they will be cleansed. A deal-ready script, prepared with compliance on the format and filled in for each deal, keeps soundings fast and every record complete.

                ## Milestones
                1. The bank's approved sounding script obtained and its fixed wording understood.
                2. A fill-in version prepared with the deal fields clearly marked.
                3. The record each call must create listed: time, person, consent, information given and cleansing plan.
                4. One practice sounding done with a colleague playing the investor.

                ## Notes
                Compliance owns the rules on inside information and wall crossings. This project is about running the deal's soundings cleanly within them, never about interpreting them.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fill-in sounding script and call record format approved by compliance, plus one rehearsed practice call."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask compliance for the current approved market sounding script"
                - "Mark the deal-specific fields in a fill-in copy"
                - "List what every sounding record must capture"
                - "Rehearse one sounding with a colleague playing the investor"
            - name: Twice-weekly lock-up and holder screen
              description: |-
                ## Purpose
                Most block mandates are won before anyone calls for them: a lock-up ends, a sponsor's holding has been marked up, the stock has re-rated and the seller wants out. A short screen on Monday and Thursday mornings of expiries, big holders and recent price moves keeps the origination team supplied with timely calls.

                ## Milestones
                1. A screen set up from public data covering lock-up expiries, top holders and 30-day price change in your coverage.
                2. A standard three-line note format for each name that looks actionable.
                3. Two screens a week sent to the origination lead.
                4. A record of which flagged names turned into a conversation.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two screens a week reach the origination lead for eight weeks, with a log of which flagged names led to a call."
                cadence: rolling
              tasks:
                - "Build the screen of expiries, top holders and price change from public data"
                - "Agree the three-line note format with the origination lead"
                - "Run the lock-up and holder screen and send it @recurring(weekly:mon,thu)"
                - "Log which flagged names turned into a client call"
            - name: Lock-up expiry calendar for coverage names
              description: |-
                ## Purpose
                Lock-up expiries cluster after IPO waves, and a sponsor will often sell within weeks of one. A calendar of every expiry in your coverage for the next twelve months, with holder, shares locked and release terms, lets the desk prepare pitch materials before the competition does.

                ## Milestones
                1. Every lock-up in your coverage group for the next twelve months entered with date, holder and shares.
                2. Early release triggers noted where the prospectus allows them.
                3. The calendar shared with origination and syndicate.
                4. Monthly updates logged with additions and expiries passed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month lock-up calendar for the coverage group, refreshed monthly and shared with origination and syndicate."
                cadence: rolling
              tasks:
                - "List every recent IPO in your coverage and find its lock-up terms"
                - "Enter dates, holders, shares and early release triggers in the calendar"
                - "Refresh the lock-up calendar with new listings and expiries @recurring(monthly:4)"
                - "Send the calendar to origination with the next three months highlighted"
            - name: Sponsor and large holder ownership tracker
              description: |-
                ## Purpose
                Private equity sponsors, founders and strategic holders are the sellers behind most secondary blocks. Tracking their stakes from public filings, with entry date, fund vintage where known and percentage held, shows who is likely to need liquidity and when.

                ## Milestones
                1. Each sponsor or large holder above 5% in your coverage entered with stake and last filing date.
                2. Fund vintage or holding period added where it is public.
                3. Changes flagged each month after new filings.
                4. A quarterly summary of the five most likely sellers sent to the coverage team.

                ## Notes
                Start from the **Metrics log** template. Use public filings only; anything a client tells you belongs on the bank's systems.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker of holders above 5% kept current monthly, with four quarterly summaries of likely sellers sent in a year."
                cadence: rolling
              tasks:
                - "List every holder above 5% in your coverage from public filings"
                - "Add fund vintage or holding period where it is public"
                - "Update stakes from the latest ownership filings @recurring(monthly:9)"
                - "Send the five most likely sellers to the coverage team @recurring(quarterly)"
            - name: Friday ECM deal tape review
              description: |-
                ## Purpose
                Each week's priced follow-ons and blocks tell you where discounts, demand and aftermarket trading are heading in your sector. Thirty minutes every Friday reviewing the week's deals keeps your pricing judgement current and gives you fresh lines for Monday's client calls.

                ## Milestones
                1. A standing Friday list of the week's priced follow-ons and blocks in your region and sector.
                2. Each deal noted with size, discount, days of volume and first-day move.
                3. One takeaway line written each week.
                4. A month of takeaways reviewed and shared with the team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly deal tape note with one takeaway kept for twelve consecutive Fridays."
                cadence: rolling
              tasks:
                - "Set up a saved search for priced follow-ons and blocks in your region"
                - "Review the week's deals and write one takeaway @recurring(weekly:fri)"
                - "Add each deal's first-day move against the offer price"
                - "Share the month's takeaways at the team meeting"
            - name: Investor demand history kept on the bank's system
              description: |-
                ## Purpose
                Which accounts put in early, price-sensitive or large orders on past books is what lets syndicate build a strong book overnight. Keeping that history current on the bank's investor system after every deal, rather than in memory or a personal spreadsheet, makes the next sounding list sharper.

                ## Milestones
                1. The bank's approved system for recording investor demand identified.
                2. Order size, limit, timing and allocation recorded for every account on your last deal.
                3. A monthly check that every closed deal is fully entered.
                4. A short note of repeat anchors shared with syndicate before the next deal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every closed deal's investor demand is entered on the bank's system within a week, confirmed by a monthly check."
                cadence: rolling
              tasks:
                - "Ask syndicate where investor order history is recorded"
                - "Enter order size, limit, timing and allocation for your last deal"
                - "Check every closed deal is fully entered on the system @recurring(monthly:15)"
                - "Note the repeat anchor accounts for syndicate"
            - name: Overnight deal readiness checklist
              description: |-
                ## Purpose
                When a seller calls at 3pm, the deal depends on things that should already be in place: signatories available, legal counsel on standby, blackout dates known, the latest share count and the board authority for primary shares. A readiness checklist kept current for your two or three likeliest issuers means a yes at 3pm is a launch at 4.30.

                ## Milestones
                1. A checklist for each likely issuer covering authority, share count, blackout dates, counsel and signatories.
                2. Each item marked confirmed with a date.
                3. A monthly refresh logged with anything that has gone stale.
                4. The checklist used to launch at least one deal.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Readiness checklists for the three likeliest issuers, each item dated within the last month."
                cadence: rolling
              tasks:
                - "Pick the three issuers most likely to need an overnight deal"
                - "Fill in authority, share count, blackout dates, counsel and signatories for each"
                - "Refresh every readiness checklist item and date it @recurring(monthly:12)"
                - "Flag any stale item to the associate the same day"
            - name: Aftermarket performance tracker for priced deals
              description: |-
                ## Purpose
                Clients and investors judge a deal by how the stock trades afterwards, and the next pitch will be asked about it. Tracking each of your deals at day 1, day 5 and day 30 against the offer price and the sector index gives you honest evidence for pitches and debriefs.

                ## Milestones
                1. A tracker of every deal the team has priced in the last two years.
                2. Day 1, day 5 and day 30 returns against offer and against the sector index for each.
                3. A monthly update for newly priced deals.
                4. A short pattern note on which structures traded best.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An aftermarket tracker covering two years of the team's deals at three horizons, updated monthly."
                cadence: rolling
              tasks:
                - "List the team's priced deals from the last two years"
                - "Calculate day 1, day 5 and day 30 returns against offer and index"
                - "Add newly priced deals to the aftermarket tracker @recurring(monthly:22)"
                - "Write a pattern note on which structures traded best"
            - name: Weekly market window monitor
              description: |-
                ## Purpose
                Follow-ons price best in calm, rising markets and outside earnings blackouts, and a busy calendar of competing supply can cost a point of discount. A Tuesday check of volatility, sector fund flows, the earnings calendar and the week's expected supply tells the desk when windows are opening or closing.

                ## Milestones
                1. A one-page window monitor format covering volatility, flows, the earnings calendar and expected supply.
                2. Blackout periods for coverage issuers entered for the next quarter.
                3. A weekly read sent to the team with a one-word window call.
                4. Twelve weeks of reads kept for comparison with deals actually done.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly window reads sent, each with volatility, flows, earnings dates and a window call."
                cadence: rolling
              tasks:
                - "Draft the one-page window monitor format with the associate"
                - "Enter coverage issuers' blackout periods for the next quarter"
                - "Send the weekly market window read to the team @recurring(weekly:tue)"
                - "Compare a quarter of reads with the deals that priced"
            - name: Forty-eight hour post-deal debrief
              description: |-
                ## Purpose
                Lessons from an overnight deal fade by the following week. A short debrief within two days, covering timing, documents, book quality, discount and what nearly went wrong, turns each deal into a better next one, and a quarterly roll-up shows the patterns.

                ## Milestones
                1. A one-page debrief format agreed with the associate.
                2. A debrief completed within 48 hours of each deal you work.
                3. A quarterly roll-up of recurring issues and fixes shared with the team.
                4. At least one change to the execution kit or timeline made from a debrief.

                ## Notes
                Start from the **Meeting notes** template if your team holds the debrief as a call.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A debrief exists for every deal within 48 hours, and a quarterly roll-up has led to one documented change in the execution kit."
                cadence: rolling
              tasks:
                - "Agree a one-page debrief format with the associate"
                - "Complete the debrief within two days of your next deal"
                - "Roll up the quarter's debriefs into recurring issues @recurring(quarterly)"
                - "Make one change to the kit or timeline from the roll-up"
            - name: Monthly ECM market update page
              description: |-
                ## Purpose
                Almost every coverage meeting opens with a market update page: recent follow-on volumes, discounts, aftermarket returns and the outlook for supply. Owning a clean monthly version means seniors pull your page rather than asking for one at midnight before a meeting.

                ## Milestones
                1. A one-page format agreed with the VP covering volumes, discounts, returns and outlook.
                2. Data sources fixed and noted on the back-up tab.
                3. The page refreshed and sent by the same date each month.
                4. The page used in at least three client meetings.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A monthly ECM update page delivered on the agreed date for six consecutive months and used in client meetings."
                cadence: rolling
              tasks:
                - "Agree the page layout and data sources with the VP"
                - "Build the back-up tab with every source noted"
                - "Refresh and circulate the ECM market update page @recurring(monthly:20)"
                - "Ask which meetings used the page and what they asked for"
            - name: Reading an order book in real time
              description: |-
                ## Purpose
                On the night, the book tells you whether to price tight or wide: how much is covered, at what limits, from how many accounts, and how much is likely inflated. Learning to read book updates as syndicate does, from book messages and past order books, is what lets an analyst add value beyond formatting releases.

                ## Milestones
                1. The terms of a book update understood: coverage, limits, account count and quality.
                2. Three anonymised past order books from the bank's training materials analysed.
                3. Signs of inflated or soft demand listed with examples.
                4. One live book followed alongside syndicate with your notes reviewed.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three anonymised order books analysed in writing and one live book followed with notes reviewed by syndicate."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask syndicate for anonymised past order books used in training"
                - "Analyse coverage, limits and account quality for three books"
                - "List the signs of inflated or soft demand you found"
                - "Sit with syndicate through one live book and write notes"
            - name: Sizing a block against trading volume
              description: |-
                ## Purpose
                Fifteen days of average daily volume in one block is a different trade from three days, and the seller's question is always how much the market can take. Learning to express size in days of volume, percentage of free float and percentage of shares outstanding, and to show where recent deals sat, is the core of every sizing page.

                ## Milestones
                1. Average daily volume calculated over 20, 60 and 90 days for a public stock.
                2. A sample block expressed in days of volume, free float and shares outstanding.
                3. Recent public deals plotted by size in days of volume against discount.
                4. A one-page sizing exhibit in the firm's format.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page sizing exhibit in the firm's format, showing a sample block in three size measures against recent public deals."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull volume history for a public stock in your coverage"
                - "Calculate 20, 60 and 90-day average daily volume"
                - "Express a sample block in days of volume and free float"
                - "Lay out the sizing exhibit in the firm's page format"
            - name: Precedent discount table for the sector
              description: |-
                ## Purpose
                Pitches and pricing calls both lean on a table of sector precedents with discount, size, structure and aftermarket. A clean, sourced table for your sector, refreshed quarterly, saves a night of rebuilding before every sponsor pitch.

                ## Milestones
                1. All sector follow-ons and blocks from the last three years entered with source links.
                2. Columns for structure, primary or secondary, size in days of volume, discount and day 1 return.
                3. Median and range calculated by structure.
                4. Quarterly refreshes logged.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A sourced three-year sector precedent table with medians by structure, refreshed every quarter."
                cadence: rolling
              tasks:
                - "Collect three years of sector follow-ons and blocks with sources"
                - "Add structure, size, discount and day 1 return columns"
                - "Calculate medians and ranges by structure"
                - "Refresh the precedent discount table with the quarter's deals @recurring(quarterly)"
            - name: Risk bids, backstops and agency trades
              description: |-
                ## Purpose
                Sellers can ask the bank to buy the whole block at a fixed price, to run an agency bookbuild, or to run a book with a backstop price the bank guarantees. Understanding how each shifts risk, how the bank's risk committee sees them and why they price differently lets you follow the internal debate and draft the approval memo.

                ## Milestones
                1. A table comparing risk bid, backstopped book and agency execution by who holds price risk and how fees work.
                2. The bank's internal approval steps for committing capital understood from the policy owner.
                3. A sample approval memo outline drafted from an anonymised past deal.
                4. Your notes reviewed by a syndicate or risk banker.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison table and approval memo outline for risk, backstopped and agency blocks, reviewed by a syndicate or risk banker."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Build a comparison table of the three execution types"
                - "Ask the policy owner how capital commitments are approved"
                - "Outline an approval memo from an anonymised past deal"
                - "Get the table and outline reviewed by a syndicate banker"
            - name: Fast drafting of launch and pricing releases
              description: |-
                ## Purpose
                Launch and pricing announcements are short, but a wrong share count or a missing stabilisation line can force a correction to the exchange. Practising drafting both from a term sheet against the clock, then checking them line by line, builds speed and accuracy before you do it at 5am.

                ## Milestones
                1. Three practice launch releases drafted from public term sheets in under 20 minutes each.
                2. Matching pricing releases drafted with price, discount and gross proceeds checked.
                3. A personal check list of the ten fields most often wrong.
                4. One practice pair reviewed by legal or the associate.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three timed practice release pairs and a ten-field check list, one pair reviewed by legal or the associate."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick three public deals and pull their term details"
                - "Draft a launch release for each against a 20-minute timer"
                - "Draft the matching pricing release and check every number"
                - "Write the ten fields you most often got wrong"
            - name: Stabilisation and greenshoe in marketed follow-ons
              description: |-
                ## Purpose
                Marketed follow-ons often carry an over-allotment option and a stabilisation period, while overnight blocks usually do not. Knowing how over-allotment, covering the short and exercising the option work, and what has to be disclosed, lets you check the term sheet and the stabilisation notices yourself.

                ## Milestones
                1. The mechanics of over-allotment, short covering and option exercise written in plain steps.
                2. One public deal's stabilisation notices traced from start to end.
                3. The disclosure points on the term sheet and releases listed.
                4. Questions answered by the syndicate desk.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A step-by-step note on stabilisation mechanics, tested against one public deal's notices and checked with syndicate."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write over-allotment and short covering as plain steps"
                - "Trace one public deal's stabilisation notices start to finish"
                - "List where stabilisation must appear in documents"
                - "Ask syndicate the two questions left open"
            - name: Pro forma dilution and proceeds analysis for a primary raise
              description: |-
                ## Purpose
                When an issuer sells new shares, its board asks how much the raise dilutes earnings per share and existing holders, and what the money buys. A clean pro forma page showing share count, ownership, net debt and earnings per share before and after is a standard exhibit you should be able to build in an hour.

                ## Milestones
                1. A template page for pro forma shares, ownership, net debt and earnings per share.
                2. A public issuer's recent primary raise run through it as a test.
                3. Use of proceeds scenarios shown, such as debt repayment versus acquisition.
                4. The page checked by the associate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pro forma dilution page tested on one public primary raise with two use of proceeds scenarios, checked by an associate."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Lay out pro forma shares, ownership, net debt and EPS lines"
                - "Test the page on a public issuer's recent raise"
                - "Add debt repayment and acquisition use of proceeds cases"
                - "Ask the associate to check the logic"
            - name: Marketed follow-on or overnight bookbuild choice
              description: |-
                ## Purpose
                A marketed deal gives investors days to do work and can reach a bigger or more complex raise, while an overnight book limits market risk and leakage. A short options memo setting out size, story complexity, investor familiarity and market conditions helps the client choose and records why.

                ## Milestones
                1. A list of decision factors with how each points between marketed and overnight.
                2. Both options laid out for one issuer with timetable, likely discount range and risks.
                3. A recommendation agreed with the VP and presented to the client.
                4. The client's decision and reasons recorded on the deal file.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An options memo comparing marketed and overnight execution for one issuer, with the client's decision and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the factors that favour marketed or overnight execution"
                - "Lay out both options for one issuer with timetable and risks"
                - "Review the draft recommendation with the VP"
                - "Record the client's decision and reasons on the deal file"
            - name: Block versus dribble-out or ATM for a selling holder
              description: |-
                ## Purpose
                Holders with a large stake can sell in one block at a discount, feed shares into the market over weeks, or, for an issuer, run an at-the-market programme. Comparing the three on price impact, speed, information leakage and certainty gives the client an honest choice rather than the product the desk prefers.

                ## Milestones
                1. The three routes compared on discount or impact, time to complete, leakage and certainty.
                2. A worked example using one public stock's trading volume.
                3. The regulatory or disclosure points for each route flagged for legal to confirm.
                4. A one-page comparison used in a client discussion.

                ## Notes
                Start from the **Risk register** template to list what could go wrong with each route.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page comparison of block, dribble-out and ATM routes with a worked example, used in one client discussion."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare the three routes on impact, time, leakage and certainty"
                - "Work through an example using a public stock's volume"
                - "Flag each route's disclosure points for legal"
                - "Present the one-page comparison in a client discussion"
            - name: Lock-up terms options paper for a sell-down
              description: |-
                ## Purpose
                After a block, the seller is usually asked to lock up its remaining stake, and the length, carve-outs and waiver terms affect both the discount and its future flexibility. An options paper showing typical market terms and the trade-offs gives the seller's counsel a clear starting point for negotiation.

                ## Milestones
                1. Typical lock-up lengths and carve-outs from recent public sell-downs gathered in a table.
                2. The trade-off between lock-up length and discount described from desk experience.
                3. Two or three options laid out with pros and cons for the seller.
                4. The paper shared with the seller and its counsel.

                ## Notes
                The lock-up itself is a legal document negotiated by counsel; this paper only frames the commercial options.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An options paper with market lock-up terms and two or three options, delivered to a seller and its counsel."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather lock-up terms from ten recent public sell-downs"
                - "Ask syndicate how lock-up length tends to affect discount"
                - "Lay out two or three options with pros and cons"
                - "Send the paper to the seller's counsel through the VP"
            - name: Cutting launch preparation time to under two hours
              description: |-
                ## Purpose
                If preparation from mandate to launch regularly takes four hours, the desk misses windows and pushes deals into the next day. Timing each preparation step on your next three deals and removing the slowest ones is a measurable improvement seniors notice.

                ## Milestones
                1. Each preparation step timed on three consecutive deals.
                2. The three slowest steps identified with causes.
                3. A fix agreed for each, such as pre-approved wording or a standing legal slot.
                4. Preparation time on the following deal recorded under two hours.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Preparation times logged for three deals, three fixes made, and a later deal prepared for launch in under two hours."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Time each preparation step on your next deal"
                - "Repeat the timing on two more deals"
                - "Pick the three slowest steps and agree a fix for each"
                - "Record preparation time on the deal after the fixes"
            - name: Bookrunner line-up and fee split recommendation
              description: |-
                ## Purpose
                Sellers often want several banks on a block for relationship reasons, but each extra bookrunner adds leakage risk and splits fees. A short recommendation on the number of bookrunners, roles and fee split, backed by public precedent, helps the client decide before the call goes out.

                ## Milestones
                1. Public precedents for bookrunner numbers on similar-sized deals gathered.
                2. Options for one, two or three bookrunners with roles and leakage risk described.
                3. A fee split proposal drafted for the VP.
                4. The agreed line-up recorded on the deal file.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recommendation on bookrunner numbers, roles and fee split, backed by precedents, with the agreed line-up recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather public bookrunner line-ups for similar-sized deals"
                - "Describe options for one, two or three banks"
                - "Draft a fee split proposal for the VP"
                - "Record the agreed line-up and roles on the deal file"
            - name: Gross spread and fee benchmark for pitches
              description: |-
                ## Purpose
                Sponsors negotiate fees hard on blocks, and the desk needs a current view of where gross spreads have landed by deal size and structure. A benchmark from public disclosures, refreshed yearly, keeps pitch fee pages consistent with the market.

                ## Milestones
                1. Disclosed gross spreads collected for recent follow-ons and blocks.
                2. Spreads grouped by size band and structure with medians.
                3. A pitch-ready fee page agreed with the VP.
                4. A yearly refresh scheduled.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A fee benchmark by size band and structure built from public disclosures, with a pitch page and a yearly refresh."
                cadence: rolling
              tasks:
                - "Collect disclosed gross spreads from recent public deals"
                - "Group spreads by size band and structure"
                - "Build the pitch fee page with the VP"
                - "Refresh the gross spread benchmark with the year's deals @recurring(yearly)"
            - name: Choosing which investors to wall-cross
              description: |-
                ## Purpose
                Every investor wall-crossed is a person who cannot trade the stock and a small leakage risk, so the list should be short and chosen for likely demand. Agreeing written selection criteria with syndicate, such as past anchor orders, existing holdings and sector focus, makes the list defensible and the soundings more productive.

                ## Milestones
                1. Selection criteria for sounding candidates agreed with syndicate.
                2. A ranked candidate list prepared for one live or practice deal.
                3. The list size compared with the desk's usual practice.
                4. The criteria filed with the sounding script.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written criteria for choosing sounding candidates, agreed with syndicate and applied to one ranked list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft selection criteria for sounding candidates"
                - "Review the criteria with syndicate"
                - "Rank candidates for one deal against the criteria"
                - "File the criteria alongside the sounding script"
            - name: Your first overnight bookbuild as an analyst
              description: |-
                ## Purpose
                The first overnight deal is a long, fast night where small errors travel quickly to the exchange. Preparing beforehand, knowing your exact tasks, and writing down what happened the next morning makes the second one feel routine.

                ## Milestones
                1. Your tasks for the night agreed with the associate before launch.
                2. The timeline and execution kit open and ready an hour before the close.
                3. Every document you touched checked twice before it went out.
                4. A personal note of five lessons written the next day.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One overnight deal worked with agreed tasks, double-checked documents and a written note of five lessons the next day."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Ask the associate exactly which tasks you own on the night"
                - "Open the timeline and kit an hour before the close"
                - "Check every document twice before it is sent"
                - "Write five lessons the morning after pricing"
            - name: Sponsor sell-down mandate pitch
              description: |-
                ## Purpose
                Winning a sponsor's block usually comes down to a short pitch: market window, discount evidence, sizing, investor demand and the bank's recent track record. Building that pitch for one named sponsor stake, from the screens and trackers you already run, is the moment your operating work turns into a mandate.

                ## Milestones
                1. A target sponsor and stake chosen from the ownership tracker.
                2. A ten-page pitch with window, sizing, discount evidence, demand and credentials.
                3. Every number checked against its source.
                4. The pitch delivered and the outcome recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A ten-page sell-down pitch for a named sponsor stake delivered, with sources checked and the outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick a target sponsor stake from the ownership tracker"
                - "Draft the window, sizing and discount pages"
                - "Add demand evidence and recent credentials"
                - "Record whether the pitch won the mandate and why"
            - name: First sell-down after an IPO lock-up ends
              description: |-
                ## Purpose
                The first secondary sale after an IPO tells the market how the sponsor sees the stock, and investors watch the discount closely. Preparing for the expiry date months in advance, with sizing, investor sounding plans and the release conditions understood, gives the seller the best chance of a clean first trade.

                ## Milestones
                1. The lock-up expiry date and any early release terms confirmed.
                2. Sizing and discount options prepared three weeks before expiry.
                3. Investor sounding plan agreed with syndicate.
                4. The deal executed or deferred, with the reason recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first post-IPO sell-down prepared from a confirmed expiry date, then executed or deferred with the reason recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Confirm the expiry date and early release terms from the prospectus"
                - "Prepare sizing and discount options three weeks before expiry"
                - "Agree the sounding plan with syndicate"
                - "Record whether the deal ran or was deferred, and why"
            - name: Follow-on launched the day after results
              description: |-
                ## Purpose
                Issuers often raise straight after results, when information is fresh and the blackout has lifted. Preparing a post-results launch means drafting around numbers you will not see until the morning, with placeholders, a fast verification step and a clear go or no-go time.

                ## Milestones
                1. The results date and blackout end confirmed with the issuer.
                2. Documents drafted with placeholders for every results figure.
                3. A verification step agreed for results numbers on the morning.
                4. A go or no-go time set and the decision recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A post-results follow-on prepared with placeholders and verification steps, and the go or no-go decision recorded at the agreed time."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the results date and blackout end with the issuer"
                - "Draft documents with placeholders for results figures"
                - "Agree who verifies results numbers on the morning"
                - "Set the go or no-go time with the VP"
            - name: Annual ECM review for the coverage group
              description: |-
                ## Purpose
                Once a year the coverage group wants to know what ECM did for its clients and what is coming: deals priced, aftermarket, lock-ups ahead and likely sellers. A yearly review built from your trackers turns twelve months of routine into a planning document for the next year.

                ## Milestones
                1. The year's deals, aftermarket results and fees summarised.
                2. Next year's lock-up expiries and likely sellers listed.
                3. Three priority opportunities proposed.
                4. The review presented at the group's planning meeting.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A yearly ECM review with results, upcoming expiries and three opportunities, presented at the coverage group's planning meeting."
                cadence: cyclic
              tasks:
                - "Book a slot at the coverage group's annual planning meeting"
                - "Summarise the year's deals, aftermarket and fees from the trackers"
                - "List next year's expiries and likely sellers"
                - "Present the annual ECM review to the coverage group @recurring(yearly)"
            - name: Joining an ECM team from M&A or coverage
              description: |-
                ## Purpose
                Bankers moving into ECM from M&A or coverage know modelling and pitch books but not the speed, market language or regulation of live equity deals. A ninety-day plan to learn the products, the market data and the desk's people lets you be useful on overnight deals within a quarter.

                ## Milestones
                1. The product map, timeline and sounding script projects completed in the first month.
                2. Market data screens and the deal tape running by day 45.
                3. Shadowing on at least two overnight deals.
                4. A ninety-day check-in held with your manager and gaps written down.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ninety-day plan completed with two shadowed overnight deals and a recorded check-in with your manager."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draft a ninety-day learning plan and share it with your manager"
                - "Ask to shadow the next two overnight deals"
                - "Set up the market data screens the desk uses"
                - "Hold the ninety-day check-in and write down the gaps"
            - name: Associate owning execution on a follow-on
              description: |-
                ## Purpose
                As an associate you own the timetable, the checklist, the documents and the analysts on a deal, and seniors expect no surprises. Running one follow-on end to end as execution lead, with a written plan and a clean hand-off to settlement, is the step that marks you ready for more.

                ## Milestones
                1. A deal-specific timetable and checklist issued to the team before launch.
                2. Analyst tasks assigned with check points.
                3. Every external document signed off by its owner before release.
                4. Settlement confirmed and a debrief held within 48 hours.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "One follow-on led through execution with a timetable, assigned tasks, signed-off documents, confirmed settlement and a debrief."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Issue a deal-specific timetable and checklist to the team"
                - "Assign analyst tasks with check points"
                - "Track sign-off for every external document"
                - "Confirm settlement and hold the debrief"
            - name: VP building block origination with sponsors
              description: |-
                ## Purpose
                VPs in ECM increasingly carry relationships with sponsor capital markets teams who decide which banks see their blocks. A coverage plan for ten sponsors, with a contact rhythm and ideas tied to their holdings, turns your trackers into mandates.

                ## Milestones
                1. Ten target sponsors chosen with their public holdings in your sector.
                2. A named contact and contact rhythm set for each.
                3. One tailored idea sent to each sponsor in the first quarter.
                4. Mandates won or lost logged with reasons.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A ten-sponsor coverage plan with monthly contact kept and one tailored idea sent to each sponsor within a quarter."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Pick ten sponsors with holdings in your sector"
                - "Set a named contact and rhythm for each"
                - "Send each sponsor contact a tailored idea or market read @recurring(monthly:27)"
                - "Log mandates won and lost with reasons"
            - name: Moving from ECM execution to the syndicate desk
              description: |-
                ## Purpose
                Syndicate bankers price deals, manage books and talk to investors daily, which is a different job from execution. Planning the move, learning the desk's tools and building investor knowledge before you switch helps you contribute from your first book.

                ## Milestones
                1. Conversations held with two syndicate bankers about the role.
                2. A list of skills you need, such as order book management and investor coverage.
                3. A transition plan agreed with both managers.
                4. Your first month on the desk reviewed.

                ## Notes
                Start from the **Development plan** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A transition plan agreed with both managers and a written review of your first month on the syndicate desk."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Book coffee with two syndicate bankers about the role"
                - "List the skills and tools you need to learn"
                - "Agree a transition plan with both managers"
                - "Review your first month on the desk in writing"
            - name: Executing blocks across three time zones
              description: |-
                ## Purpose
                Selling a European holder's stake in a US listed stock, or an Asian holder's stake in Europe, can mean wall-crossing in one time zone and pricing in another. Planning your working pattern and hand-offs across regions keeps the deal moving without one person staying awake for thirty hours.

                ## Milestones
                1. A time zone map for the desk's typical cross-region deals.
                2. Hand-off points and owners agreed with colleagues in each region.
                3. A weekly check of upcoming cross-region deals and who covers them.
                4. One cross-region deal completed with no gaps in coverage.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A cross-region hand-off plan agreed with each region and one cross-region deal completed without coverage gaps."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Map the time zones for the desk's typical cross-region deals"
                - "Agree hand-off points with colleagues in each region"
                - "Check upcoming cross-region deals and cover @recurring(weekly:sun)"
                - "Debrief one cross-region deal on coverage gaps"
            - name: Overnight deal nights with children or caring duties
              description: |-
                ## Purpose
                Overnight execution is hard to plan around school runs, a partner's shifts or an older parent's care, and deals rarely give more than a few hours' notice. A standing plan agreed at home and with your team, covering backup care and which nights you can take, keeps both sides of life working.

                ## Milestones
                1. A backup care plan agreed at home for short-notice late nights.
                2. The nights you can take and cannot take agreed with your manager.
                3. A weekly check of the week's likely deals against home commitments.
                4. A review after three months on how the plan is working.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A backup care plan and agreed night availability exist, with three months of weekly checks and a review completed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree a backup care plan at home for short-notice late nights"
                - "Tell your manager which nights you can and cannot take"
                - "Check the week's likely deals against home commitments @recurring(weekly:sun)"
                - "Review the plan after three months"
            - name: Follow-ons in thinly traded markets
              description: |-
                ## Purpose
                On smaller exchanges with low daily volume and concentrated holders, an overnight block may not work at all, and rights issues or private placements to known holders become the norm. Understanding those constraints helps bankers in smaller markets design deals that can actually clear.

                ## Milestones
                1. Daily volume and free float for five issuers on a small exchange recorded.
                2. Typical structures used there, such as rights issues and placings to existing holders, listed.
                3. The local exchange's rules on secondary offers checked with legal.
                4. A short design note written for one issuer.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A design note for one small-market issuer, built on recorded volume and float data and local rules confirmed with legal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Record daily volume and free float for five small-market issuers"
                - "List structures used for secondary offers on that exchange"
                - "Confirm the local rules with legal"
                - "Write a design note for one issuer"
            - name: Rights issue mechanics and the TERP
              description: |-
                ## Purpose
                In markets with strong pre-emption rights, large primary raises are done by rights issue, and bankers need to work the subscription ratio, theoretical ex-rights price, underwriting and timetable. Working one public rights issue end to end teaches the mechanics without live deal pressure.

                ## Milestones
                1. One public rights issue's terms collected from the prospectus.
                2. The theoretical ex-rights price and value of a right calculated.
                3. The timetable from announcement to dealing in new shares mapped.
                4. Underwriting and sub-underwriting arrangements described.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example of one public rights issue with TERP, right value, timetable and underwriting described."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download a recent rights issue prospectus"
                - "Calculate the TERP and value of one right"
                - "Map the timetable from announcement to new shares dealing"
                - "Describe how underwriting was arranged"
            - name: Retail offer alongside an institutional placing
              description: |-
                ## Purpose
                Some issuers want retail shareholders to take part in a placing on the same terms as institutions, through an online retail offer. Understanding how the retail tranche is sized, priced and settled alongside the overnight book lets you advise on fairness without slowing the deal.

                ## Milestones
                1. Two public examples of placings with retail offers studied.
                2. The retail sizing, pricing and allocation rules described.
                3. Document and timetable changes listed.
                4. A short options page drafted for a client.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An options page on adding a retail offer to a placing, based on two public examples and their document changes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find two public placings with a retail offer"
                - "Describe how the retail tranche was sized and priced"
                - "List the document and timetable changes"
                - "Draft an options page for a client"
            - name: Concurrent issuer buyback in a sponsor sell-down
              description: |-
                ## Purpose
                An issuer sometimes buys part of a sponsor's block alongside the market offering, which supports pricing but raises questions on disclosure, fairness and board approval. Understanding how these are structured and documented lets you frame the option correctly for both sides.

                ## Milestones
                1. Two public deals with a concurrent buyback studied.
                2. The board approval and disclosure points listed for legal to confirm.
                3. The effect on pricing and float explained.
                4. A short structuring note drafted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A structuring note on concurrent buybacks, based on two public deals, with disclosure points confirmed by legal."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find two public sell-downs with a concurrent buyback"
                - "List the approval and disclosure points for legal"
                - "Explain the effect on pricing and free float"
                - "Draft a short structuring note"
            - name: Multi-step sponsor exit programme
              description: |-
                ## Purpose
                Large sponsor stakes are usually sold in several blocks over one to two years, and the plan for the whole exit affects each discount. Designing a sequence with sizing, timing around lock-ups and earnings windows, and a review after each step gives the sponsor a credible path to exit.

                ## Milestones
                1. The stake, lock-up terms and earnings windows mapped over two years.
                2. A sequence of three to five sell-downs with indicative sizes.
                3. A review held after each step and the plan adjusted.
                4. The programme status reported to the sponsor each quarter.

                ## Notes
                Start from the **Risk register** template to track what could disrupt the programme.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A two-year exit programme of three to five sell-downs, with quarterly status reports to the sponsor."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map the stake, lock-ups and earnings windows over two years"
                - "Sketch three to five sell-downs with indicative sizes"
                - "Report the exit programme status to the sponsor @recurring(quarterly)"
                - "Adjust the plan after each completed sell-down"
            - name: Blocks in dual-listed and depositary receipt stocks
              description: |-
                ## Purpose
                Selling a block in a stock listed on two exchanges, or one traded as depositary receipts, raises choices about which line to sell, conversion timing and settlement in two markets. Working through one public example teaches the mechanics before a live cross-listed deal.

                ## Milestones
                1. One public cross-listed block studied.
                2. The choice of line and conversion steps described.
                3. Settlement differences between the two markets listed.
                4. A checklist for future cross-listed blocks drafted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A checklist for cross-listed and depositary receipt blocks, based on one studied public deal and its settlement steps."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find one public block in a dual-listed or receipt stock"
                - "Describe why that line was chosen and how conversion worked"
                - "List the settlement differences between the markets"
                - "Draft a checklist for future cross-listed blocks"
---

# Follow-Ons and Block Trades

This area is for ECM analysts, associates and VPs who execute follow-on offerings and block trades, where a deal can go from wall-cross to pricing between one market close and the next open. It starts with foundations (the product map, the hour-by-hour timeline, the sounding script and a document kit you can launch from at 4pm), then the operating routines that find and prepare deals, the technical skills behind sizing, discounts and bookbuilding, the structuring decisions, dated events from your first overnight book to a sponsor pitch, variants for the analyst, associate, VP, syndicate move, time-zone shifts and family life, and finally specialist work such as rights issues, retail tranches, concurrent buybacks and multi-step sponsor exits.

What repeats is a twice-weekly lock-up and holder screen, a Friday deal tape review, monthly refreshes of the lock-up calendar, ownership tracker, readiness checklist, aftermarket tracker and market update page, a quarterly debrief roll-up and discount table refresh, and a yearly fee benchmark and ECM review. The Operational checklist, Metrics log, Reading queue, Development plan and Risk register templates pair with the projects that name them. Everything here is built from public filings and the bank's own systems: live deal data, investor names and inside information never go into personal files. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
