---
id: quant-finance.market-data-sourcing
name: Market Data Sourcing
description: "A data inventory, a licence register, a security master, vendor trials and golden source rules, plus the daily, monthly and yearly checks that keep market data complete, correct and paid for properly."
category: business
version: 1.0.0
tags: [quant-finance, market-data-sourcing, engineer, researcher, market-data, data-vendors, data-licensing, symbology, corporate-actions]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - purchase-decision
    - metrics-log
    - risk-register
    - meeting-notes
    - onboarding-30-60-90
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Market Data Sourcing
          description: "Choosing and managing market data: vendors and exchanges, licences and fees, coverage and history, symbology, corporate actions and data quality checks."
          projects:
            - name: Inventory of every market data source in use
              description: |-
                ## Purpose
                Most teams cannot say, without a week of digging, which feeds, files and APIs their research and production code actually read. Listing every source with its vendor, data set, delivery method, consumers and cost is the base every later decision on this page stands on, and it often turns up two subscriptions paying for the same thing.

                ## Milestones
                1. A single table listing every market data source, from exchange feeds to free downloads, with vendor, data set and delivery method.
                2. Each source tagged with the systems, strategies and people that consume it.
                3. Annual cost recorded against each paid source, with the contract or invoice it came from.
                4. Duplicates, orphans and sources with no known owner flagged for a decision.

                ## Notes
                Search the code for vendor client libraries, file paths and API hosts as well as asking people. Code finds the sources nobody remembers signing up for.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A data source inventory exists covering every feed, file and API in use, each with an owner, consumers and annual cost."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create the inventory table with columns for vendor, data set, delivery, consumers, owner and cost"
                - "Search the code base for vendor libraries, file paths and API hosts"
                - "Ask each researcher and engineer which sources they read directly"
                - "Match every paid source to its latest invoice or order form"
                - "Flag duplicate and ownerless sources for a keep or cancel decision"
            - name: Data requirements specification by strategy
              description: |-
                ## Purpose
                Vendors sell on breadth, but a daily equity strategy, an intraday futures model and an options study need very different things. Writing down, for each strategy or research line, the asset classes, venues, fields, frequency, history depth, latency and point-in-time needs turns vendor conversations into a checklist instead of a sales pitch.

                ## Milestones
                1. One requirements sheet per strategy or research line, signed off by its researcher.
                2. Required fields, bar or tick frequency, history start date and acceptable delivery delay stated for each.
                3. Must-have and nice-to-have requirements separated, so trade-offs can be made openly.
                4. A combined view showing which requirements are shared across strategies and which are unique.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active strategy has a signed-off data requirements sheet, and a combined view of shared and unique needs exists."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft a one-page requirements sheet layout with fields, frequency, history and delay"
                - "Interview each strategy owner and fill in their sheet"
                - "Mark each requirement as must-have or nice-to-have"
                - "Combine the sheets into one view of shared and unique needs"
            - name: Asset class, venue and region coverage map
              description: |-
                ## Purpose
                Gaps in coverage show up late: a researcher widens a universe to small caps or Asian futures and discovers the vendor has three years of history or none at all. Mapping which sources cover which asset classes, venues, regions and periods makes those gaps visible before a project depends on them.

                ## Milestones
                1. A grid of asset classes and regions against sources, with history start dates in each cell.
                2. Venues listed per region, showing which are covered by direct feed, consolidated feed or not at all.
                3. Known gaps written up with the strategies they block.
                4. The map stored next to the data source inventory and dated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated coverage map shows every asset class and region against its sources and history start dates, with gaps named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the asset classes and regions your strategies trade or study"
                - "Fill in each source's coverage and earliest history date per cell"
                - "Check venue coverage against each exchange's own list of products"
                - "Write a short note on each gap and the work it blocks"
            - name: Market data budget with a named cost owner
              description: |-
                ## Purpose
                Data spend creeps: a terminal here, a depth feed there, an exchange fee that rises every January. Setting an annual budget by vendor and data set, with one named person accountable for it, means every new request has to be weighed against something, and nobody is surprised by the bill in the twelfth month.

                ## Milestones
                1. This year's total data spend calculated from invoices, by vendor and by data set.
                2. An annual budget agreed with whoever funds it, with a contingency line for exchange fee changes.
                3. One person named as cost owner, with authority to approve or refuse new subscriptions.
                4. A simple rule written down for how new data requests are submitted and approved.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved annual market data budget exists by vendor, with a named cost owner and a written approval rule for new requests."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Total last year's data invoices by vendor and data set"
                - "Ask each vendor and exchange for notified price changes this year"
                - "Agree the budget and cost owner with whoever funds the spend"
                - "Write the approval rule for new data requests and share it"
            - name: Licence and usage rights register
              description: |-
                ## Purpose
                Market data licences decide who may see the data, on how many screens or servers, whether you may store it, derive signals from it or show it to clients, and what happens when the contract ends. A register that records these rights for every source lets an engineer answer 'are we allowed to do this' in minutes, and gives your legal team one place to check.

                ## Milestones
                1. Every paid source listed with its contract, order form and governing policy documents attached or linked.
                2. Permitted users, devices, storage, derived data and redistribution rights recorded for each.
                3. Post-termination obligations noted, such as deleting history or keeping derived data only.
                4. Unclear clauses listed as questions for legal or compliance, with answers recorded once given.

                ## Notes
                Record what the contract says and who confirmed it. Interpreting a clause is a job for your legal team, not the register.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every paid data source has a register entry with its usage, storage, derived data and termination rights, and open questions sent to legal."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect the signed contract and order form for each paid source"
                - "Record user, device, storage and derived data rights per source"
                - "Note what must be deleted or kept when each contract ends"
                - "Send the unclear clauses to legal or compliance as a numbered list"
            - name: Security master and identifier standard
              description: |-
                ## Purpose
                When one vendor says AAPL, another says a nine-character code and a third uses its own instrument number, joins fail quietly and backtests pick up the wrong company after a ticker reuse. Choosing one internal permanent identifier, mapped to each vendor's codes with start and end dates, is the single change that removes the most silent data errors.

                ## Milestones
                1. An internal instrument identifier chosen that never changes and is never reused.
                2. A mapping table from the internal identifier to each vendor code, exchange ticker and public identifier, with valid-from and valid-to dates.
                3. Rules written for listings, delistings, ticker changes, mergers and share class splits.
                4. Research and production code reading instruments through the master instead of raw tickers.

                ## Notes
                Never key history on the exchange ticker alone. Tickers are recycled, and a reused ticker joins two companies' prices into one series.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A security master with a permanent internal identifier and dated vendor mappings is live, and new code reads instruments through it."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Decide the format and issuing rule for the internal instrument identifier"
                - "Build the mapping table with valid-from and valid-to dates for each code"
                - "Write the handling rules for ticker changes, mergers and delistings"
                - "Move one research pipeline onto the master as the first user"
            - name: Field-level data dictionary for consumed data sets
              description: |-
                ## Purpose
                Vendors use the same word for different things: close can mean last trade, official closing auction or a settlement price, and volume may or may not include off-exchange prints. A dictionary that defines every field you consume, in the vendor's words and in yours, stops researchers from comparing numbers that were never the same measurement.

                ## Milestones
                1. Every field consumed from each data set listed with the vendor's own definition.
                2. Units, currency, time zone and adjustment status stated per field.
                3. Fields with the same name but different meanings across vendors flagged side by side.
                4. The dictionary linked from the data source inventory and kept under version control.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A version-controlled dictionary defines every consumed field with units, time zone and adjustment status, flagging cross-vendor conflicts."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export the field list each pipeline actually reads from each data set"
                - "Copy each vendor's definition and add units, currency and time zone"
                - "Mark whether each price and volume field is raw or adjusted"
                - "List same-name fields that mean different things across vendors"
            - name: Point-in-time history requirements for vendors
              description: |-
                ## Purpose
                History that a vendor has quietly corrected, backfilled or restated looks cleaner than anything you could have traded on. Setting out what point-in-time means for your work, such as as-of reference data, original constituent lists and unrevised prices, gives you a standard to test every vendor against before you buy.

                ## Milestones
                1. A written statement of which data sets must be point-in-time and why.
                2. Questions for vendors on backfill, restatement, delisted coverage and as-of snapshots.
                3. Each current vendor's answers recorded, with evidence where they gave any.
                4. Data sets that fail the standard labelled so researchers know their limits.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A point-in-time standard exists, every current vendor has answered its questions, and failing data sets are labelled."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write which data sets must be point-in-time and the reason for each"
                - "Draft five questions on backfill, restatement and delisted coverage"
                - "Send the questions to each current vendor and log their replies"
                - "Label failing data sets in the inventory with a short warning"
            - name: Vendor support contacts and escalation list
              description: |-
                ## Purpose
                When a file is missing at six in the morning, nobody should be searching old emails for a support address. One list with each vendor's support desk, account manager, technical contact, account numbers and escalation route turns an outage into a phone call rather than a hunt.

                ## Milestones
                1. Support desk, hours, phone and portal recorded for every vendor and exchange.
                2. Account manager and technical contact named for each, with your account or customer numbers.
                3. An escalation route written for outages that affect production.
                4. The list stored where the on-call engineer can reach it without logging in to anything unusual.

                ## Notes
                Start from the **Vendor** template, one page per vendor, and link them from a single index page.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every vendor and exchange has a contact page with support, account manager, account numbers and escalation route, refreshed yearly."
                cadence: rolling
              tasks:
                - "Create one vendor page per source with support desk and hours"
                - "Add account manager, technical contact and account numbers to each page"
                - "Write the escalation route for production-affecting outages"
                - "Confirm every contact is still current with each vendor @recurring(yearly)"
            - name: Daily data delivery completeness check
              description: |-
                ## Purpose
                A file that arrives half full or a day late will not crash anything; it will just make a model trade on stale prices. An automated morning check of every expected delivery, comparing arrival time, row counts and instrument coverage against yesterday and against the schedule, catches the gap before research or production uses it.

                ## Milestones
                1. An expected-delivery schedule listing every file, feed snapshot and API pull with its due time.
                2. An automated check comparing arrival, row count and instrument count with recent norms.
                3. A morning summary sent to the data owner, with failures highlighted at the top.
                4. A monthly look at failure patterns, with recurring problems raised with the vendor.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An automated morning check covers every expected delivery and its summary is read each trading day, with misses logged."
                cadence: rolling
              tasks:
                - "List every expected delivery with its due time and normal row count"
                - "Write the automated arrival and row count check for each delivery"
                - "Read the morning delivery summary and chase any miss @recurring(daily)"
                - "Review the month's delivery failures for repeat patterns @recurring(monthly:3)"
            - name: Stale price and outlier checks on daily data
              description: |-
                ## Purpose
                Complete files can still be wrong: a price repeated for five days on a stock that traded, a decimal shifted by a currency change, a volume of zero on an index rebalance day. Automated checks for stale values, jumps without a corporate action, crossed or negative prices and zero volumes catch the errors a row count never will.

                ## Milestones
                1. A list of check rules with thresholds per asset class, agreed with the researchers who use the data.
                2. The checks running automatically after each delivery, writing flagged rows to a review table.
                3. Each flag resolved as a real move, a vendor error or a missing corporate action.
                4. Thresholds retuned after a month so genuine moves stop flooding the review table.

                ## Notes
                Flag, do not overwrite. A suspicious price that is silently fixed in place cannot be traced later.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Stale, jump, crossed and zero-volume checks run after every delivery, and every flagged row carries a recorded resolution."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Write the check rules and thresholds for each asset class"
                - "Agree the thresholds with the researchers who use the data"
                - "Schedule the checks to run after each delivery and write flags to a table"
                - "Retune thresholds after the first month of flags"
            - name: Monthly corporate action reconciliation
              description: |-
                ## Purpose
                Splits, special dividends, spin-offs and rights issues are where adjusted price series go wrong, and one missed split can make a stock look like it lost half its value overnight. Comparing the month's corporate actions from two sources, and checking each one against the price jump it should explain, finds the errors while they are few.

                ## Milestones
                1. The month's corporate actions pulled from the primary vendor and one independent source.
                2. Mismatches in type, ex-date, ratio or amount listed and resolved against the issuer's announcement.
                3. Large unexplained overnight price moves checked for a missing corporate action.
                4. Corrections fed back to the vendor and into your adjustment factors, with a log entry.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Corporate actions are reconciled against a second source each month, with every mismatch resolved or raised with the vendor."
                cadence: rolling
              tasks:
                - "Choose the independent second source for corporate action checks"
                - "Script the comparison of action type, ex-date and ratio across both sources"
                - "Run the corporate action reconciliation and resolve mismatches @recurring(monthly:8)"
                - "Report confirmed vendor errors to their data quality desk"
            - name: Weekly ticker change and symbology watch
              description: |-
                ## Purpose
                Ticker changes, new listings, delistings and exchange code changes arrive every week, and a mapping that falls behind sends orders and research joins to the wrong instrument. A short weekly pass over the vendors' symbology change files keeps the security master current instead of fixing it after a bad join.

                ## Milestones
                1. The vendors' symbology change files or notices identified and subscribed to.
                2. A weekly review of changes applied to the security master with dated entries.
                3. Instruments that changed identifier checked in one downstream data set.
                4. A short log of changes made, for anyone tracing a broken history later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Symbology changes are applied to the security master every week, with a dated log of each change."
                cadence: rolling
              tasks:
                - "Subscribe to each vendor's symbology change file or notice service"
                - "Apply the week's ticker and code changes to the security master @recurring(weekly:mon)"
                - "Spot check one changed instrument in a downstream data set"
                - "Record each change with its effective date in the symbology log"
            - name: Monthly market data invoice reconciliation
              description: |-
                ## Purpose
                Invoices for market data are long, full of per-user and per-device lines, and often wrong: users who left months ago, a feed you cancelled, a price rise nobody agreed to. Checking each invoice against the licence register and the user list every month recovers money and keeps the budget honest.

                ## Milestones
                1. Each month's data invoices collected in one place.
                2. Every line matched to a register entry, a named user or a device.
                3. Charges for departed users, cancelled services or unagreed prices disputed in writing.
                4. Credits received tracked until they appear on a later invoice.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every data invoice is matched line by line each month, with disputes and credits tracked to closure."
                cadence: rolling
              tasks:
                - "Set up a shared folder where all data invoices land each month"
                - "Match each invoice line to a register entry, user or device @recurring(monthly:12)"
                - "Dispute unexplained charges with the vendor in writing"
                - "Track open credits until they appear on an invoice"
            - name: Exchange usage declaration calendar
              description: |-
                ## Purpose
                Many exchanges require regular usage declarations listing subscribers, devices and non-display use, and late or wrong reports lead to back-billing and audit findings. A calendar of every declaration due, with the source of each number, turns a recurring scramble into a routine an engineer can run in an hour.

                ## Milestones
                1. Every exchange and vendor that needs a usage declaration listed with its due day and format.
                2. The source system or report for each declared number identified.
                3. Each month's declarations submitted on time and copies kept.
                4. Changes in declared numbers explained in a short note for later audits.

                ## Notes
                Fee categories and reporting rules differ by exchange and change often. Read each exchange's current policy rather than copying last year's report.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every required exchange usage declaration is submitted by its due date, with a copy and the source of each number kept."
                cadence: rolling
              tasks:
                - "List each exchange that requires usage declarations with due day and format"
                - "Find the entitlement report behind each declared number"
                - "Prepare and submit the month's usage declarations @recurring(monthly:5)"
                - "File a copy of each submission with a note on changes"
            - name: Licence renewal and notice date calendar
              description: |-
                ## Purpose
                Contracts for data often renew automatically unless notice is given 60 or 90 days before the end date, and missing it locks in another year of a service you meant to cut or renegotiate. Tracking every renewal and notice date, with a review started well before each one, keeps that choice yours.

                ## Milestones
                1. Every contract's term, renewal type, end date and notice period recorded.
                2. A reminder set for each notice date with enough lead time to review usage.
                3. A keep, cut or renegotiate decision recorded for each contract before its notice date.
                4. Notices sent in the form the contract requires, with proof of delivery kept.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No data contract renews without a recorded keep, cut or renegotiate decision made before its notice date."
                cadence: rolling
              tasks:
                - "Record term, end date and notice period for every data contract"
                - "Set a reminder 30 days before each notice date"
                - "Check the calendar for notice dates in the next 90 days @recurring(monthly:20)"
                - "Send any cancellation notice in the form the contract requires"
            - name: Vendor incident and outage log
              description: |-
                ## Purpose
                Without a record, every outage feels like the first one, and renewal talks rely on memory. Logging each late file, bad price, feed drop and vendor-side correction with its impact builds the evidence you need to escalate, ask for credits or justify switching.

                ## Milestones
                1. A log with date, vendor, data set, what went wrong, detection time, fix time and impact.
                2. Every incident since the log started recorded, including small ones.
                3. A weekly look at open incidents and repeat offenders.
                4. Incident counts per vendor carried into the quarterly quality scorecard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every data incident is logged with detection and fix times, and open incidents are reviewed weekly."
                cadence: rolling
              tasks:
                - "Create the incident log with date, vendor, impact and fix time columns"
                - "Back-fill last quarter's known incidents from chat and email"
                - "Review open incidents and chase vendors on overdue fixes @recurring(weekly:fri)"
                - "Add incident counts per vendor to the quality scorecard"
            - name: Quarterly data quality scorecard by vendor
              description: |-
                ## Purpose
                Opinions about which vendor is reliable usually come from the last bad week. A quarterly scorecard with the same measures for each vendor, such as on-time delivery, missing values, corrections, support response and corporate action errors, gives a fair comparison and a fact base for renewals.

                ## Milestones
                1. Five to eight quality measures defined, each computable from logs or checks you already run.
                2. A scorecard produced for every material vendor each quarter.
                3. Trends compared with the previous quarter and outliers explained.
                4. The scorecard shared with researchers and the cost owner.

                ## Notes
                Start from the **Metrics log** template so each quarter's numbers sit in the same layout.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A scorecard with the same measures for every material vendor is produced each quarter and shared with researchers and the cost owner."
                cadence: cyclic
              tasks:
                - "Define the quality measures and where each one is computed from"
                - "Produce the vendor quality scorecard for the quarter @recurring(quarterly)"
                - "Compare each vendor's numbers with last quarter and note causes"
                - "Send the scorecard to researchers and the cost owner"
            - name: Quarterly entitlement and user access review
              description: |-
                ## Purpose
                Entitlements outlive the people and servers they were granted for, and every stale login or unused device is both a fee and an audit finding. Reviewing who and what has access to each data set every quarter keeps the user list matched to the people who still need it.

                ## Milestones
                1. A current export of users, devices and applications entitled to each data set.
                2. Each entitlement confirmed by the user's manager or the application owner.
                3. Departed users and unused devices removed, with the vendor told where required.
                4. Changes logged so the next usage declaration reflects them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every data entitlement is confirmed or removed each quarter, with changes logged and passed to usage reporting."
                cadence: cyclic
              tasks:
                - "Export current users, devices and applications for each entitled data set"
                - "Send each manager their team's entitlements to confirm @recurring(quarterly)"
                - "Remove unconfirmed entitlements and notify vendors where required"
                - "Log the changes for the next usage declaration"
            - name: Vendor release notes and methodology change watch
              description: |-
                ## Purpose
                Vendors change field definitions, retire data sets, move delivery times and alter adjustment methods in release notes that few people read. A weekly scan of those notices, with anything relevant turned into a ticket, prevents the morning when a pipeline breaks or a series quietly changes meaning.

                ## Milestones
                1. Each vendor's release note, change notice and deprecation channel subscribed to by a shared mailbox.
                2. A weekly scan with relevant changes logged against the affected pipelines.
                3. Tickets raised for any change needing code or research updates, with the vendor's effective date.
                4. Researchers told about definition changes that affect history.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Vendor change notices are scanned weekly and every relevant change has a ticket raised before its effective date."
                cadence: rolling
              tasks:
                - "Point every vendor change notice subscription at one shared mailbox"
                - "Scan the week's vendor release notes and log relevant changes @recurring(weekly:wed)"
                - "Raise a ticket for each change that needs code or research work"
                - "Tell researchers about any definition change that alters history"
            - name: How exchange market data fees work
              description: |-
                ## Purpose
                Exchange fees are split into categories such as display and non-display use, professional and non-professional users, real-time and delayed data, distribution and derived data, and a misread category can cost more than the feed itself. Learning how these categories work, using your own exchanges' published fee schedules, lets you ask the right question before a new use case goes live.

                ## Milestones
                1. The fee schedule and policy for each exchange you use downloaded and dated.
                2. A one-page summary of the fee categories that apply to your usage.
                3. Each current use of exchange data mapped to its fee category.
                4. Uncertain mappings confirmed with the exchange or your compliance team.

                ## Notes
                Fee structures change, sometimes yearly. Date every summary and recheck it at each renewal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dated summary of fee categories exists for each exchange used, with every current use mapped and uncertain cases confirmed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download the current fee schedule and data policy for each exchange you use"
                - "Summarise the display, non-display and derived data categories on one page"
                - "Map each current use of exchange data to a fee category"
                - "Send the uncertain mappings to the exchange or compliance for confirmation"
            - name: Feed types from top of book to full depth
              description: |-
                ## Purpose
                Choosing a feed without knowing the difference between top of book, aggregated depth, full order-by-order data, consolidated tapes and direct venue feeds leads to paying for detail you never use, or missing the detail your model needs. Working through the feed types with real samples makes each choice deliberate.

                ## Milestones
                1. Sample data obtained for at least three feed types on the same instrument and day.
                2. A short note on what each feed type contains and what it leaves out.
                3. A comparison of consolidated and direct venue data for one session.
                4. Each strategy's requirement sheet updated with the feed type it truly needs.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes compare at least three feed types on the same sample, and each strategy's requirements name the feed type it needs."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Request sample files for top of book, depth and order-by-order data"
                - "Load one instrument and one day from each sample side by side"
                - "Write what each feed type contains and leaves out"
                - "Update each requirements sheet with the feed type it needs"
            - name: Identifier systems and symbology study
              description: |-
                ## Purpose
                Exchange tickers, national and international securities numbers, open financial identifiers, vendor instrument codes and futures root symbols all solve different problems, and each fails in its own way. Studying how each is issued, when it changes and what it identifies, from issuer to listing to share class, is what makes a security master design defensible.

                ## Milestones
                1. A table of identifier types with issuer, scope, reuse rules and change triggers.
                2. Worked examples of one company traced across a ticker change, a merger and a second listing.
                3. Licensing restrictions on any identifier set noted.
                4. Conclusions fed into the security master rules.

                ## Notes
                Some identifier sets carry their own licence fees and usage terms. Check before storing them widely.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An identifier comparison table and three traced examples exist, and their conclusions are reflected in the security master rules."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every identifier type your vendors deliver"
                - "Record issuer, scope, reuse rules and licence terms for each"
                - "Trace one company through a ticker change, merger and second listing"
                - "Add the findings to the security master rules document"
            - name: Corporate action types and adjustment factors
              description: |-
                ## Purpose
                Adjusted prices are only as good as the method behind them, and vendors differ on whether cash dividends, spin-offs and rights issues adjust history and how. Learning the main corporate action types and computing adjustment factors by hand for a few real cases tells you exactly what your adjusted series mean.

                ## Milestones
                1. A reference note on splits, consolidations, cash and stock dividends, spin-offs, rights issues and mergers.
                2. Adjustment factors computed by hand for five real events and compared with the vendor's.
                3. Each vendor's adjustment method documented in the data dictionary.
                4. A decision recorded on whether research uses vendor-adjusted or internally adjusted prices.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five hand-computed adjustment factors match or explain the vendor's figures, and the adjustment method decision is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a reference note on the main corporate action types"
                - "Pick five real events, including a spin-off and a rights issue"
                - "Compute each adjustment factor by hand and compare it with the vendor"
                - "Record whether research will use vendor or internal adjustments"
            - name: Futures and options reference data essentials
              description: |-
                ## Purpose
                Derivatives data is mostly reference data: contract specifications, multipliers, tick sizes, expiry and last trade dates, strike lists and exchange holiday calendars, and each changes more often than people expect. Knowing where each item comes from, and checking it against the exchange's own publications, prevents mispriced P&L and broken roll calendars.

                ## Milestones
                1. A list of reference fields needed for each futures and options product you use.
                2. The authoritative exchange source identified for each field.
                3. Vendor reference data checked against the exchange for a sample of contracts.
                4. A process to capture contract specification changes when exchanges announce them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Reference fields for every derivatives product are mapped to an exchange source and a sample is verified against it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the reference fields each futures and options product needs"
                - "Find the exchange publication that is authoritative for each field"
                - "Check a sample of vendor contract specifications against the exchange"
                - "Subscribe to each exchange's contract specification change notices"
            - name: Index constituent history and survivorship
              description: |-
                ## Purpose
                Studying the stocks in an index today means studying the survivors, and many vendors only sell current membership cheaply. Learning how index providers publish constituent changes, and what a true historical membership file costs and contains, decides whether a cross-sectional study is even possible with the data you have.

                ## Milestones
                1. The index providers relevant to your universes listed with their licensing terms.
                2. Sources of historical constituent data compared on start date, delisted coverage and price.
                3. One study universe rebuilt from historical membership and compared with today's list.
                4. Index rebalance announcements followed so the history stays current.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One study universe has been rebuilt from historical membership and the difference from current membership is written up."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the index providers behind your study universes"
                - "Compare historical constituent sources on coverage and cost"
                - "Rebuild one universe from historical membership and count the dropped names"
                - "Check index providers' rebalance announcements @recurring(quarterly)"
            - name: Reading a market data licence agreement
              description: |-
                ## Purpose
                Licence agreements hide their most expensive terms in definitions, schedules and referenced policies: what counts as a user, whether a back office server is a device, what derived data you may keep and what an audit can claim. Reading one agreement slowly, with a checklist of the clauses that matter, prepares you to spot problems in the next one and brief your legal team well.

                ## Milestones
                1. A checklist of key clauses: definitions, permitted use, derived data, redistribution, audit, fees, term and termination.
                2. One current agreement read against the checklist with notes per clause.
                3. Questions on that agreement sent to legal and their answers recorded.
                4. The checklist saved for use on every new contract.

                ## Notes
                This is about knowing what to ask. Interpreting the agreement is legal's job.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One agreement has been read against a clause checklist, questions answered by legal, and the checklist saved for future contracts."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the key clause checklist for market data agreements"
                - "Read your largest data agreement against the checklist"
                - "Send the open questions to legal as a numbered list"
                - "Record legal's answers beside each clause in your notes"
            - name: Request for proposal for end-of-day equity data
              description: |-
                ## Purpose
                Daily equity prices, corporate actions and reference data are the most common purchase and the easiest to buy badly. A short request for proposal built from your requirements sheets, sent to three or four vendors with the same questions, gives comparable answers on coverage, history, point-in-time quality, delivery, licence terms and price.

                ## Milestones
                1. An RFP document drawn from the requirements sheets and point-in-time questions.
                2. Three or four vendors chosen and the RFP sent with a reply deadline.
                3. Replies tabulated in one comparison grid.
                4. Two vendors shortlisted for a hands-on trial.

                ## Notes
                Start from the **Vendor** template for each respondent so contact details and replies sit together.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least three vendors have answered the same RFP and two are shortlisted for a trial with reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft the RFP from the requirements sheets and point-in-time questions"
                - "Choose three or four vendors and send the RFP with a reply date"
                - "Tabulate every reply in one comparison grid"
                - "Shortlist two vendors and write why"
            - name: Side-by-side trial of two shortlisted vendors
              description: |-
                ## Purpose
                Sales samples are cherry-picked; a trial on your own universe and dates is not. Loading both shortlisted vendors for the same instruments and period, and comparing prices, corporate actions, gaps, delisted names and delivery behaviour, turns a choice between brochures into a choice between measured results.

                ## Milestones
                1. Trial terms agreed with both vendors, including end date and deletion obligations.
                2. Both data sets loaded for the same universe, fields and period.
                3. Differences in prices, actions, missing days and delisted coverage measured and explained.
                4. A recommendation written with the evidence and cost of each option.

                ## Notes
                Start from the **Purchase decision** template to record the criteria before the results come in.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Both vendors have been compared on the same universe and period, and a recommendation with evidence and cost is recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree trial terms, end dates and deletion duties with both vendors"
                - "Load both data sets for the same universe and period"
                - "Measure price, corporate action and coverage differences between them"
                - "Ask the agent to draft the recommendation from the comparison results"
            - name: Direct exchange feed versus consolidated vendor feed
              description: |-
                ## Purpose
                Direct venue feeds give detail and speed but bring per-exchange licences, connectivity and parsing work; a consolidated vendor feed is simpler but later and less detailed. Deciding which your strategies actually need, with costs and engineering effort counted on both sides, avoids buying speed nobody uses or missing detail somebody needs.

                ## Milestones
                1. The latency and detail needs of each strategy taken from its requirements sheet.
                2. Total cost of each option estimated, including exchange fees, connectivity and engineering time.
                3. A sample comparison showing what the consolidated feed loses for one session.
                4. A decision recorded with the conditions that would reverse it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on direct versus consolidated feeds, with full cost of each option and reversal conditions."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pull latency and detail needs from each strategy requirements sheet"
                - "Estimate exchange fees, connectivity and engineering hours for each option"
                - "Compare one session of consolidated and direct data for the same venue"
                - "Write the decision and the conditions that would change it"
            - name: Build versus buy for the security master
              description: |-
                ## Purpose
                A security master can be licensed from a reference data vendor, built from public and exchange sources, or assembled from both, and each choice locks in years of maintenance or fees. Comparing them honestly, including who maintains the corporate action and symbology rules, prevents an internal tool that one person understands.

                ## Milestones
                1. Requirements for the security master listed, from instrument types to history depth.
                2. Two or three vendor offerings priced and their coverage checked.
                3. The build option estimated in engineering weeks and ongoing hours per month.
                4. A decision recorded with a named owner for the chosen route.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A build, buy or hybrid decision for the security master is recorded with costs, maintenance hours and a named owner."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List the security master requirements from instrument types to history"
                - "Price two or three reference data vendor offerings"
                - "Estimate build effort and monthly maintenance hours"
                - "Record the decision and name the owner"
            - name: Free and low-cost data sources assessment
              description: |-
                ## Purpose
                Free downloads, broker data, exchange delayed files and public statistics can cover early research, but they often lack delisted names, change without notice or forbid storage. Testing each free source against a paid reference for a sample period tells you where it is good enough and where it will mislead you.

                ## Milestones
                1. Candidate free and low-cost sources listed with their terms of use.
                2. A sample period compared against a paid or exchange reference.
                3. Gaps, errors and survivorship problems written up per source.
                4. Each source labelled as fit for exploration, fit for research or not fit.

                ## Notes
                Check each source's terms of use before storing or scraping. Free to view rarely means free to keep.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each free source is tested against a reference for a sample period and labelled by fitness for use."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List free and low-cost sources with links to their terms of use"
                - "Pull one sample period from each and from a reference source"
                - "Count gaps, mismatches and missing delisted names per source"
                - "Label each source by what it is fit for"
            - name: Golden source rules when vendors disagree
              description: |-
                ## Purpose
                With two vendors, prices and corporate actions will disagree, and without rules each researcher picks the one that flatters their result. Writing which source wins for each field and asset class, how ties and gaps are filled and who decides exceptions makes every data set reproducible.

                ## Milestones
                1. A precedence table naming the primary and fallback source per field and asset class.
                2. Tolerances defined for when a disagreement counts as a break.
                3. Rules for filling gaps, with every filled value flagged.
                4. The rules implemented in the pipeline and documented in the data dictionary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A precedence table and tolerance rules are documented and implemented, with every filled or overridden value flagged."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft the precedence table of primary and fallback sources per field"
                - "Set tolerances for when two sources count as disagreeing"
                - "Write the gap filling rule and the flag every filled value carries"
                - "Implement the rules in the pipeline and note them in the dictionary"
            - name: Renewal negotiation with a major data vendor
              description: |-
                ## Purpose
                Renewals are the one moment you have influence over price and terms, and most teams arrive with no data. Going in with usage numbers, the quality scorecard, incident history, competing quotes and a list of terms to change gives a real negotiation rather than a polite acceptance of this year's increase.

                ## Milestones
                1. Usage, quality scorecard and incident history for the vendor pulled into one brief.
                2. At least one competing quote or a credible alternative documented.
                3. A list of price and term changes wanted, with a walk-away position agreed with the cost owner.
                4. The outcome recorded and the licence register updated.

                ## Notes
                Start from the **Meeting notes** template for each negotiation call so commitments are written down on the day.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The renewal is concluded with a recorded outcome against a written list of wanted changes, and the register is updated."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull usage, scorecard and incident history into a one-page brief"
                - "Get one competing quote or document a credible alternative"
                - "Agree wanted changes and a walk-away position with the cost owner"
                - "Update the licence register with the renewed terms"
            - name: Cutting unused data subscriptions
              description: |-
                ## Purpose
                Most data budgets carry subscriptions that no code reads and no person opens. Measuring actual use of each feed, file and terminal over a quarter, and cancelling or downgrading the unused ones before their notice dates, is often the fastest saving available in the area.

                ## Milestones
                1. Usage measured for every paid source over at least one quarter, from logs or access records.
                2. Low-use sources confirmed with their listed consumers.
                3. Cancellations or downgrades sent before the relevant notice dates.
                4. Savings recorded against the budget.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every paid source has measured usage, and each low-use source is cancelled, downgraded or kept with a written reason."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull a quarter of access logs or download records for each paid source"
                - "Ask the listed consumers of low-use sources whether they still need them"
                - "Send cancellation or downgrade notices before each notice date"
                - "Record the savings against this year's budget"
            - name: Primary vendor migration with a parallel run
              description: |-
                ## Purpose
                Switching the main price vendor touches every backtest and every live model, and the differences will show up as unexplained P&L if nobody measures them first. A planned migration with a parallel run, field-by-field reconciliation and a signed cutover keeps research comparable and production safe.

                ## Milestones
                1. A migration plan with every consuming system, an owner per system and a cutover date.
                2. Both vendors running in parallel for an agreed period, with daily differences measured.
                3. Material differences explained and signed off by the affected researchers.
                4. Cutover completed, the old feed switched off and history obligations met under the old contract.

                ## Notes
                Start from the **Risk register** template to track what could break at cutover and who watches it.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All consumers run on the new vendor after a reconciled parallel run, with signed-off differences and the old feed switched off."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "List every system that reads the current vendor and name an owner for each"
                - "Set the parallel run length and the difference tolerances"
                - "Publish daily difference reports during the parallel run"
                - "Get sign-off from affected researchers before cutover"
            - name: Responding to an exchange or vendor data audit
              description: |-
                ## Purpose
                Exchanges and vendors audit usage, and a notice arrives with a short window to produce entitlement records, usage declarations and system diagrams. A calm, organised response, built on the records the routines on this page already keep, limits back-billing and closes the audit faster.

                ## Milestones
                1. The audit notice logged, its scope understood and legal or compliance informed.
                2. Entitlement exports, usage declarations and contracts for the audit period gathered.
                3. A system diagram showing where the audited data flows, stored and displayed.
                4. Findings answered in writing, any settlement agreed by the right person, and lessons fed back into the routines.

                ## Notes
                Do not agree findings or settlements on a call. Route every commitment through legal or compliance.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The audit is closed with a written response to each finding, records supplied for the full period and lessons logged."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Log the audit notice and send it to legal or compliance"
                - "Gather entitlements, declarations and contracts for the audit period"
                - "Draw the data flow diagram for the audited data"
                - "Write the response to each finding for legal review"
            - name: Onboarding data for a new asset class
              description: |-
                ## Purpose
                Adding options, fixed income or a new region brings its own identifiers, reference data, vendors and licences, and teams often bolt it on without the checks their equity data gets. Treating it as a small project, with requirements, a vendor choice, mappings and quality checks, gives the new data the same standing from day one.

                ## Milestones
                1. Requirements for the new asset class written and signed off.
                2. A source chosen and licensed, with rights added to the register.
                3. Instruments mapped into the security master with dated identifiers.
                4. Delivery and quality checks running for the new data before research relies on it.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The new asset class is licensed, mapped in the security master and covered by delivery and quality checks before first research use."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write the requirements sheet for the new asset class"
                - "Choose and license a source and add its rights to the register"
                - "Map the new instruments into the security master"
                - "Add the new deliveries to the daily completeness check"
            - name: Vendor failure or acquisition contingency plan
              description: |-
                ## Purpose
                Acquisitions, mergers and closures hit data vendors too, and products are retired with a year's notice or less. Knowing in advance which sources would be hardest to replace, and what you would switch to, turns a takeover announcement into a planned change instead of an emergency.

                ## Milestones
                1. Each source rated for replacement difficulty and business impact.
                2. A named alternative and switching estimate for each high-impact source.
                3. Contract clauses on termination, history retention and notice checked for those sources.
                4. The plan reviewed once a year and after any vendor ownership change.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every high-impact source has a named alternative, switching estimate and checked exit terms, with the plan reviewed yearly."
                cadence: rolling
              tasks:
                - "Rate each source for replacement difficulty and impact"
                - "Name an alternative and estimate switching effort for high-impact sources"
                - "Check termination and history retention terms for those sources"
                - "Review the contingency plan against vendor news @recurring(yearly)"
            - name: Annual market data budget round
              description: |-
                ## Purpose
                Exchange fee changes, new research needs and renewals all land in the same few months. A yearly round that gathers requests, prices them, sets them against the scorecard and usage figures and agrees next year's budget keeps spending tied to what the research and trading actually use.

                ## Milestones
                1. New data requests gathered from researchers and engineers with a reason for each.
                2. Announced price changes from every vendor and exchange collected.
                3. A proposed budget with keeps, cuts and additions, supported by usage and quality data.
                4. The budget approved and communicated, with the cost owner confirmed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Next year's data budget is approved with every addition justified and every cut or keep backed by usage and quality data."
                cadence: cyclic
              tasks:
                - "Ask researchers and engineers for next year's data requests with reasons"
                - "Collect announced price changes from every vendor and exchange"
                - "Run the annual market data budget round with the cost owner @recurring(yearly)"
                - "Share the approved budget and any refused requests with reasons"
            - name: Readiness for an exchange or market structure change
              description: |-
                ## Purpose
                Venue launches, tick size changes, settlement cycle changes, new trading sessions and symbology overhauls change the data you receive, often on a fixed date. Tracking each announced change against the feeds, mappings and checks it touches means the morning after looks like any other.

                ## Milestones
                1. The announced change and its effective date logged with the exchange's notices.
                2. Affected feeds, fields, mappings and checks listed.
                3. Test files or a test environment used to confirm the pipeline handles the change.
                4. The first live day checked and any issues closed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The change goes live with affected feeds tested beforehand and the first live day checked without unresolved issues."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Log the change, its effective date and the exchange's notices"
                - "List the feeds, fields and mappings the change affects"
                - "Run the pipeline against the exchange's test files"
                - "Check the first live day's data and close any issues"
            - name: Market data setup for an independent researcher
              description: |-
                ## Purpose
                Working alone, on your own money, you cannot buy institutional feeds, but you can still avoid the classic traps of survivorship, unadjusted prices and terms you are breaking. A small, written setup of one or two affordable sources, a simple identifier rule and a monthly cost check gives solid research data on a personal budget.

                ## Milestones
                1. A monthly data budget you are comfortable spending set in writing.
                2. One or two sources chosen, with their delisted coverage and storage terms checked.
                3. A simple identifier rule and a corporate action check on a sample of your universe.
                4. A monthly review of what you pay against what you used.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written personal data setup exists with a budget, checked sources, an identifier rule and a monthly cost review."
                cadence: rolling
              tasks:
                - "Write down the most you will spend on data each month"
                - "Check delisted coverage and storage terms for two affordable sources"
                - "Spot check ten corporate actions in your universe against filings"
                - "Compare data spend with actual use @recurring(monthly:27)"
            - name: Academic market data access through a university
              description: |-
                ## Purpose
                University subscriptions to research databases often include high-quality price, corporate action and reference data, with strict terms on who may use it and whether it may leave campus or go into a later job. Setting up access properly, and knowing what you may keep after you graduate or move, protects both the research and your next employer.

                ## Milestones
                1. The databases your institution licenses identified with the library or research office.
                2. Access granted and the terms of use read and saved.
                3. Rules noted on storage, sharing with co-authors and use after leaving.
                4. Data extracts logged with their date and query so results can be reproduced.

                ## Notes
                Never take licensed university data into a job or a personal account. Rebuild with your employer's own licences.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Access to the institution's market data is set up, its terms are saved, and every extract is logged with date and query."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the library or research office which market data databases are licensed"
                - "Request access and save a copy of the terms of use"
                - "Write down storage, sharing and after-leaving rules"
                - "Start an extract log with date, database and query for each pull"
            - name: Market data plan for a new small fund
              description: |-
                ## Purpose
                A new fund has to have prices, reference data and licences in place before the first trade, usually with a small team, a tight budget and investors asking how data is controlled. A launch plan that covers vendors, entitlements, usage reporting and quality checks from day one avoids building on borrowed accounts and retrofitting controls later.

                ## Milestones
                1. Day-one data requirements agreed with the portfolio managers and operations.
                2. Vendors contracted with licences in the fund's own name.
                3. Entitlements, usage declarations and the licence register set up before trading starts.
                4. Daily delivery and price checks running in the weeks before launch.

                ## Notes
                Data licensed to a previous employer or a personal account cannot simply move to the new fund. Confirm the licensee with each vendor.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Before the first trade, all data is licensed to the fund, entitlements and reporting are set up, and daily checks are running."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Agree day-one data requirements with portfolio managers and operations"
                - "Contract vendors with the fund named as licensee"
                - "Set up entitlements, the licence register and usage reporting"
                - "Run the daily delivery checks for two weeks before launch"
            - name: First ninety days owning market data on a team
              description: |-
                ## Purpose
                Inheriting market data means inheriting contracts you did not sign, feeds nobody documented and a list of complaints. A structured first ninety days, spent listening to researchers, mapping what exists and fixing the most painful problem, earns trust before you change anything larger.

                ## Milestones
                1. Conversations held with every main consumer, with their top problems listed.
                2. The inventory, contracts and contacts collected and checked by day 30.
                3. One painful, visible problem fixed by day 60.
                4. A prioritised plan for the next two quarters shared by day 90.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "By day 90, consumers have been interviewed, one visible problem is fixed and a two-quarter plan is shared."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Book thirty-minute conversations with each main data consumer"
                - "Collect contracts, contacts and the source list by day 30"
                - "Pick and fix one painful, visible data problem by day 60"
                - "Ask the agent to draft the two-quarter plan from your interview notes"
            - name: Data request intake for researchers
              description: |-
                ## Purpose
                Engineers who own market data often work through a stream of ad hoc requests in chat, with no record of what was asked, promised or refused. A simple intake, with the question, deadline, licence check and status for each request, makes the work visible and stops the same data set being bought twice.

                ## Milestones
                1. A short request form asking for data set, purpose, deadline and intended use.
                2. Every request checked against the inventory and licence register before work starts.
                3. A weekly triage of open requests with status sent to requesters.
                4. Closed requests archived with what was supplied or why it was refused.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "All data requests go through one intake, are checked against the register and triaged weekly with status sent to requesters."
                cadence: rolling
              tasks:
                - "Create a short data request form with purpose, deadline and intended use"
                - "Check each new request against the inventory and licence register"
                - "Triage open data requests and send status updates @recurring(weekly:tue)"
                - "Archive closed requests with what was supplied or refused"
            - name: Buying historical tick data for a study
              description: |-
                ## Purpose
                Years of tick or order book history are expensive, huge and full of vendor-specific quirks, and the purchase is hard to undo. Defining the exact venues, instruments, message types and dates needed, and checking a sample for gaps, timestamps and session coverage before paying, keeps the spend matched to the study.

                ## Milestones
                1. The study's exact venues, instruments, message types and date range written down.
                2. Quotes from two sources, with storage and derived data terms compared.
                3. A sample day checked for gaps, timestamp precision and session coverage.
                4. The purchase made or declined with reasons recorded.

                ## Notes
                Storage format and cleaning belong to the tick data pipeline; this project ends when you know the history you are buying is the history you need.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tick history purchase is made or declined after a sample day check and a two-quote comparison, with reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the venues, instruments, message types and dates the study needs"
                - "Request quotes and sample days from two sources"
                - "Check the sample for gaps, timestamp precision and session coverage"
                - "Record the purchase decision and the reasons"
            - name: Cross-vendor closing price and auction reconciliation
              description: |-
                ## Purpose
                Closing prices drive daily returns, valuations and benchmark comparisons, yet vendors take them from different moments: the closing auction, the last trade, a composite or a settlement price. Reconciling closes across vendors every month, with the auction print as reference where one exists, finds definition differences and stale prices that daily checks miss.

                ## Milestones
                1. The definition of close used by each vendor recorded per market.
                2. A monthly comparison of closes across vendors with a tolerance per asset class.
                3. Breaks traced to definition, stale price or error, and resolved.
                4. Recurring definition differences documented in the data dictionary.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Closing prices are reconciled across vendors monthly, with every break classified and definition differences documented."
                cadence: rolling
              tasks:
                - "Record each vendor's close definition for every market you use"
                - "Set the tolerance per asset class for a closing price break"
                - "Run the cross-vendor closing price comparison @recurring(monthly:15)"
                - "Document recurring definition differences in the data dictionary"
            - name: Derived data and redistribution rights for an external product
              description: |-
                ## Purpose
                Sending an index level, a signal, a risk report or a chart to clients or investors can count as redistribution or derived data under your licences, with separate fees or outright bans. Mapping exactly what leaves the building, from which source, and getting written clearance before it ships prevents a costly finding after the fact.

                ## Milestones
                1. Every external output listed with the market data it contains or is derived from.
                2. The relevant licence terms checked for each output against the register.
                3. Written clearance obtained from the vendor, exchange or legal team where needed.
                4. Any added fees or restrictions recorded in the register and the budget.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every external output that uses market data has its source mapped and written clearance recorded before it ships."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every report, signal or chart that leaves the building"
                - "Map each output to the market data it contains or derives from"
                - "Request written clearance from the vendor, exchange or legal team"
                - "Record any new fees or restrictions in the register and budget"
            - name: Data lineage from vendor file to research result
              description: |-
                ## Purpose
                When a published result is questioned, the team must show which vendor file, version, adjustment method and mapping produced it. Recording lineage for each data set, from raw delivery through transformations to the tables researchers query, makes any number traceable and any vendor correction easy to assess.

                ## Milestones
                1. Raw vendor deliveries stored unchanged with a delivery identifier and date.
                2. Each transformation step recorded with its code version.
                3. Research tables tagged with the deliveries and code versions behind them.
                4. One past research result traced back to its raw files as a test.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Research tables carry delivery and code version tags, and one past result has been traced back to its raw vendor files."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Store every raw vendor delivery unchanged with an identifier and date"
                - "Record the code version for each transformation step"
                - "Tag research tables with the deliveries and code versions behind them"
                - "Trace one past research result back to its raw files"
---

# Market Data Sourcing

Market data sourcing is the unglamorous work behind every backtest and every live position: choosing vendors and exchange feeds, reading the licences, paying the right fees, mapping identifiers and making sure prices and corporate actions are right before anyone builds on them. It is written for the engineers who run the feeds and the researchers who depend on them, and it moves from foundations (an inventory, requirements, a budget, a licence register and a security master), through the routines that keep data healthy, the skills of fees, feeds, symbology and corporate actions, the vendor decisions, the dated moments of migrations, audits and budget rounds, setups for solo researchers, academics, new funds and new owners, and a few specialist projects on tick history, closing prices, redistribution and lineage.

The rhythms are a daily delivery check, a weekly symbology and release note watch, monthly corporate action, invoice, usage declaration and licence date checks, quarterly quality scorecards and entitlement reviews, and a yearly budget round and contact refresh. It pairs with the Vendor, Purchase decision, Metrics log, Risk register, Meeting notes and Onboarding 30/60/90 templates. Licence terms, redistribution rights and audit disputes are contract questions, so take them to your legal or compliance team rather than relying on a reading of the agreement alone. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
