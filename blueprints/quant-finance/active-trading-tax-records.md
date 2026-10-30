---
id: quant-finance.active-trading-tax-records
name: Active Trading Tax Records
description: "Tax records for active trading kept in order all year: every account inventoried, trade exports and statements filed monthly, cost basis and matching rules tracked, and a clean year-end file for your accountant."
category: business
version: 1.0.0
tags: [quant-finance, active-trading-tax-records, everyone, tax-records, cost-basis, wash-sale, broker-statements, year-end-file]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - purchase-decision
    - month-end-close
    - savings-goal
    - meeting-notes
    - remediation-plan
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Active Trading Tax Records
          description: "Keeping records for tax on active trading: trade exports, cost basis, wash-sale or similar rules where they apply, broker statements and a year-end file for your accountant."
          projects:
            - name: Inventory of every trading account and wallet
              description: |-
                ## Purpose
                Active traders tend to accumulate accounts: a main broker, a futures account opened for one contract, a crypto exchange, a funded prop account and an old platform nobody closed. Any account missing from the list is income or a loss missing from the return. A single inventory with account numbers masked, base currency and the date each was opened is the spine every other project here hangs from.

                ## Milestones
                1. A list of every broker, exchange, wallet and funded account held at any point in the tax year.
                2. Each entry showing provider, account type, base currency, country and opening or closing date.
                3. Login access confirmed for every account, including dormant ones, so statements can still be downloaded.
                4. The inventory saved in the records folder with the date it was last checked.

                ## Notes
                Store only the last four digits of account numbers in the inventory. Keep full credentials in a password manager, never in the tax file.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated inventory lists every trading account and wallet held during the tax year, with provider, type, currency and open or close dates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your email for account opening confirmations from brokers and exchanges"
                - "List every account with provider, type, base currency and opening date"
                - "Log in to each dormant account and confirm statements can still be downloaded"
                - "Recheck the inventory for new or closed accounts @recurring(yearly)"
            - name: Tax year and filing calendar for trading income
              description: |-
                ## Purpose
                Tax years do not start on 1 January everywhere, broker tax forms arrive on their own timetable, and some countries expect payments on account or quarterly estimates from people with untaxed trading gains. Writing the real dates for your situation into one calendar turns year end from a scramble into a sequence. Check every date with the tax authority's website or your accountant rather than relying on memory.

                ## Milestones
                1. Your tax year start and end dates confirmed from the tax authority's website.
                2. Filing deadline, payment deadlines and any interim payment dates written into your calendar.
                3. The usual dates each broker issues its annual tax documents noted.
                4. A personal internal deadline set several weeks before the official one for handing the file to your accountant.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A calendar holds the confirmed tax year, filing, payment and broker document dates, plus an internal handover date to your accountant."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your tax year dates and filing deadline on the tax authority's website"
                - "Add payment and interim payment dates to your calendar with two reminders each"
                - "Note when each broker says its annual tax documents will be available"
                - "Refresh the filing calendar for the coming tax year @recurring(yearly)"
            - name: Records folder and file naming convention
              description: |-
                ## Purpose
                Over a year, active trading can produce hundreds of statements, confirmations and exports, and a folder called Downloads is not a records system. One folder per tax year, a subfolder per account and a fixed naming pattern such as year, month, provider and document type means anything can be found in seconds, by you or by your accountant.

                ## Milestones
                1. A top-level trading tax folder with one subfolder per tax year.
                2. Inside each year, subfolders for every account in the inventory plus one for correspondence.
                3. A naming pattern written in a short readme at the top of the folder.
                4. Existing loose statements renamed and moved into the structure.

                ## Notes
                A good default pattern is YYYY-MM provider account doctype, for example 2026-03 brokerA margin statement. Dates first means files sort in time order.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A records folder exists with year and account subfolders, a written naming readme and no loose statements left outside it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the trading tax folder with a subfolder for the current tax year"
                - "Add a subfolder for each account on your inventory"
                - "Write a one-paragraph readme describing the file naming pattern"
                - "Rename and move every loose statement on your computer into the folder"
            - name: Full trade history export from every broker
              description: |-
                ## Purpose
                Brokers often keep downloadable history for a limited number of years, and platforms close or merge with little warning. Exporting the complete trade history from every account now, in the most detailed format each one offers, protects you against lost data and is the raw material for every gain and loss calculation that follows.

                ## Milestones
                1. A complete trade history file from each account in the inventory, from opening date to today.
                2. Each export in a machine-readable format, such as CSV, with execution time, quantity, price, fees and currency.
                3. Row counts checked against the number of trades shown on the platform.
                4. All exports saved under the agreed naming pattern with the download date.

                ## Notes
                Where a platform only offers PDFs, download those too and request a CSV from support in writing. Keep the support reply in the correspondence folder.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every account in the inventory has a complete machine-readable trade history saved, with row counts checked against the platform."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the trade history export screen on your main broker's platform"
                - "Export the full history in CSV with fees and currency columns included"
                - "Compare the export's row count with the trade count shown on the platform"
                - "Email support at any platform that offers PDF only and ask for a CSV"
            - name: Record retention and backup policy
              description: |-
                ## Purpose
                Tax authorities can usually look back several years, and longer where they suspect an error, so trading records need to outlive the laptop they were downloaded on. A written retention period, agreed with your accountant, and a backup copy kept somewhere other than your main computer mean an enquiry three years from now is an afternoon's work rather than a reconstruction.

                ## Milestones
                1. The retention period that applies to you confirmed with your accountant or the tax authority's guidance.
                2. A second copy of the records folder held in encrypted cloud storage or an external drive kept elsewhere.
                3. A restore test completed by opening three random files from the backup.
                4. The retention period and backup location written in the folder readme.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A confirmed retention period is recorded, the records folder is backed up off the main computer and a restore test has succeeded."
                cadence: rolling
              tasks:
                - "Ask your accountant how many years your trading records should be kept"
                - "Set up an encrypted backup of the records folder off your main computer"
                - "Open three random files from the backup to confirm it restores"
                - "Run the off-site backup of the trading tax folder @recurring(monthly:28)"
            - name: Choosing trading tax software or a spreadsheet method
              description: |-
                ## Purpose
                Spreadsheets cope with a few dozen trades a year; thousands across several brokers and currencies usually do not. Comparing two or three tools against your real volume, instruments and the matching rules of your country, before year end rather than during it, avoids paying for software that cannot import your broker or handle your instruments.

                ## Milestones
                1. Your annual trade count, instrument types and number of brokers written down as requirements.
                2. Two or three options shortlisted, including a plain spreadsheet as a baseline.
                3. Each option tested with one month of real exports from your largest account.
                4. A choice recorded with the reasons and the annual cost.

                ## Notes
                Start from the **Purchase decision** template. Check that any tool supports your country's matching rules; a tool built for another country can produce confident but wrong numbers.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool or spreadsheet method is chosen after testing at least two options on one month of real exports, with the reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count last year's trades and list the instrument types you traded"
                - "Shortlist two tools and a spreadsheet baseline that support your country"
                - "Import one month of real exports into each option and compare results"
                - "Record the chosen method, its cost and why it won"
            - name: Finding an accountant who understands active trading
              description: |-
                ## Purpose
                Many general practitioners rarely see a client with thousands of trades, futures, options and foreign currency in one return. An accountant or tax adviser who already handles traders will ask the right questions about your status, instruments and matching rules, and will tell you which records they need before you spend weekends building the wrong ones.

                ## Milestones
                1. Three candidate accountants or tax advisers identified who list trading or investment clients.
                2. A short brief sent to each describing your accounts, instruments and approximate trade volume.
                3. Fees, scope and the records each one needs written side by side.
                4. One adviser engaged with a signed engagement letter saved in the correspondence folder.

                ## Notes
                Start from the **Vendor** template. Ask each candidate how many active trading clients they handle and what format they want your data in.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An accountant experienced with trading clients is engaged under a signed letter that states scope, fees and the record format they need."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask other traders or a professional body directory for accountants who serve traders"
                - "Write a half-page brief on your accounts, instruments and trade volume"
                - "Send the brief to three candidates and ask about fees and data format"
                - "Sign an engagement letter and save it in the correspondence folder"
            - name: Trading status questions prepared for your accountant
              description: |-
                ## Purpose
                Whether your activity is treated as investing, as a trade or business, or as something in between can change what is taxable, what is deductible and which forms apply, and the tests differ from country to country. The decision belongs to your adviser and the law, but you can make it far easier by preparing the facts they will ask about: frequency, holding periods, time spent, capital and how the activity is organised.

                ## Milestones
                1. Last year's trade count, average holding period and number of trading days summarised.
                2. Hours spent trading per week and any other occupation written down honestly.
                3. Questions about status, available elections and their deadlines listed for your adviser.
                4. Your adviser's view and any action needed recorded with the date.

                ## Notes
                Do not adopt a status because a forum says it saves tax. The tests are fact-specific, some elections are hard to reverse, and getting it wrong can be expensive.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page fact summary of your trading activity has been discussed with your adviser and their view on status is recorded with a date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate last year's trade count and average holding period from your exports"
                - "Estimate weekly hours spent trading and note your other occupation"
                - "Ask the agent to draft a list of status questions from your fact summary"
                - "Record your adviser's answer and any election deadlines they mention"
            - name: Reconstructing cost basis for inherited positions
              description: |-
                ## Purpose
                Positions transferred in from another broker, received as a gift or inheritance, or bought before a platform's records begin often arrive with missing or zero cost basis on the tax form. Left alone, that can make a sale look like pure gain. Rebuilding the original purchase records now, while old statements can still be found, is far easier than doing it under deadline.

                ## Milestones
                1. Every open position with missing, zero or suspicious basis listed from current broker reports.
                2. Original purchase confirmations or statements found for each, or the gap documented.
                3. Reconstructed basis and acquisition dates recorded with the source document for each.
                4. Your accountant consulted on any position where the original records cannot be found.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every position with missing basis has either a reconstructed basis backed by a source document or a note agreed with your accountant."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Filter your broker's open positions report for missing or zero cost basis"
                - "Search old statements and transfer forms for each original purchase"
                - "Record basis, date and source document for every reconstructed lot"
                - "Send your accountant the list of positions you could not document"
            - name: Separating trading from long-term and tax-sheltered accounts
              description: |-
                ## Purpose
                Trading inside a retirement or tax-sheltered account is often treated very differently from trading in a taxable account, and mixing them in one spreadsheet invites double counting or missed income. Labelling every account by its tax treatment, with your accountant confirming the labels, keeps the active trading file limited to what actually needs reporting.

                ## Milestones
                1. Every account on the inventory labelled taxable, sheltered or uncertain.
                2. Uncertain accounts listed with a question for your accountant.
                3. The trading tax ledger set up to import only accounts confirmed as taxable.
                4. Sheltered accounts given a short note on what records are still worth keeping.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each account on the inventory carries a tax treatment label confirmed by your accountant, and the ledger imports only taxable ones."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a tax treatment column to your account inventory"
                - "Label each account taxable, sheltered or uncertain"
                - "Ask your accountant to confirm the uncertain accounts"
                - "Exclude confirmed sheltered accounts from your trading ledger imports"
            - name: Tax reserve account for trading gains
              description: |-
                ## Purpose
                A good trading year with no tax set aside can turn into a bad year the moment the bill arrives, especially if losses follow the gains. Moving an agreed share of net realised gains into a separate savings account each month keeps the money for the tax authority out of your trading capital. Ask your accountant for a sensible percentage for your situation rather than guessing.

                ## Milestones
                1. A separate savings account opened and named for tax only.
                2. A set-aside percentage agreed with your accountant and written down.
                3. The first month's transfer made from net realised gains.
                4. A rule written that the reserve is never moved back into a trading account.

                ## Notes
                Start from the **Savings goal** template. Base the transfer on realised gains net of realised losses for the month, not on account equity, which includes unrealised moves.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dedicated tax reserve account receives a monthly transfer at the percentage agreed with your accountant, with no withdrawals back to trading."
                cadence: rolling
              tasks:
                - "Open a separate savings account labelled for tax only"
                - "Ask your accountant what percentage of net gains to set aside"
                - "Transfer the agreed share of last month's net realised gains @recurring(monthly:18)"
                - "Write the no-withdrawal rule at the top of the reserve tracker"
            - name: Monthly broker statement download routine
              description: |-
                ## Purpose
                Monthly statements are the documents your accountant and the tax authority treat as authoritative, and they quietly disappear from some platforms after a set period. Downloading every account's statement in the first days of each month takes ten minutes and means the year-end file is already mostly built.

                ## Milestones
                1. A list of which accounts issue monthly statements and where to find them.
                2. Every statement for the last completed month saved under the naming pattern.
                3. Twelve consecutive months filed for each active account by year end.
                4. Any missing month chased with the provider the same week it is noticed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each active account has a statement filed for every completed month of the tax year, with no gaps older than one month."
                cadence: rolling
              tasks:
                - "Note where each account's monthly statement is published"
                - "Download and file last month's statement for every account @recurring(monthly:3)"
                - "Chase any provider whose statement is missing or late"
                - "Check each account folder for a full run of months at quarter end"
            - name: Monthly reconciliation of ledger to statements
              description: |-
                ## Purpose
                Imports drop rows, brokers re-book trades and fees appear on statements that never show in the trade export. Reconciling your tax ledger to each statement monthly, cash, positions and realised totals, catches those differences while the month is fresh and the support desk still remembers it.

                ## Milestones
                1. A reconciliation sheet comparing ledger and statement for cash, positions and realised gains per account.
                2. Every difference above a small threshold explained or corrected.
                3. The month marked closed with the date and any open items listed.
                4. Open items cleared before the next month's reconciliation.

                ## Notes
                Start from the **Month-end close** template. A difference of a few cents is usually rounding; a difference equal to one trade's value is usually a missing row.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every month of the tax year is marked closed with ledger and statement agreeing for cash, positions and realised gains, or the difference explained."
                cadence: rolling
              tasks:
                - "Set a materiality threshold for differences you will investigate"
                - "Reconcile cash, positions and realised totals for each account @recurring(monthly:8)"
                - "Log each unexplained difference with the trade or fee it relates to"
                - "Mark the month closed once open items are cleared"
            - name: Weekly trade export and ledger import
              description: |-
                ## Purpose
                Waiting until year end to import ten thousand trades turns every broken row into a mystery. A short weekly routine of exporting the week's trades and importing them into your ledger keeps errors small, shows you running realised figures, and spreads the work into twenty minutes on a Friday.

                ## Milestones
                1. A saved export filter on each platform that pulls the last seven days of trades.
                2. A weekly import into the ledger with a row count check.
                3. Import errors fixed the same week they appear.
                4. Fifty-two weekly imports completed by year end, or gaps noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Trades are imported into the ledger every week with row counts matching the platform, and no week of the tax year is left unimported."
                cadence: rolling
              tasks:
                - "Save a seven-day trade export filter on each platform"
                - "Export the week's trades and import them into the ledger @recurring(weekly:fri)"
                - "Check imported row counts against the platform's trade count"
                - "Fix or log any rows the import rejected"
            - name: Trading costs and expense log
              description: |-
                ## Purpose
                Commissions and exchange fees usually sit inside the trade records, but data feeds, platform subscriptions, VPS hosting, margin interest and education often do not, and whether any of them count for tax depends on your country and your status. Logging every cost with its receipt, monthly, means your accountant can decide what is allowable instead of you guessing at year end.

                ## Milestones
                1. A cost log with date, provider, amount, currency, category and receipt link.
                2. Recurring subscriptions listed so none are missed.
                3. Every entry for the year backed by a receipt or statement line.
                4. The finished log handed to your accountant with a note on which costs relate only to trading.

                ## Notes
                Record everything and let the adviser decide what is deductible. Some costs that feel essential are not allowable in some countries, and some status choices change the answer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cost log covering the full tax year, with a receipt for every entry, is in the year-end file for your accountant."
                cadence: rolling
              tasks:
                - "List every data, platform, hosting and software subscription you pay"
                - "Create a cost log with date, provider, amount, currency and receipt columns"
                - "Add last month's costs and save each receipt @recurring(monthly:12)"
                - "Flag any cost that is shared with personal or other business use"
            - name: Running realised gains and losses tracker
              description: |-
                ## Purpose
                Knowing your year-to-date realised position, by account and by instrument type, is what lets you have a sensible conversation with your accountant before year end rather than after it. A monthly snapshot, separate from performance tracking, keeps the tax figure and the trading figure from being confused, since unrealised gains and open positions rarely count the same way.

                ## Milestones
                1. A tracker showing realised gains and losses per month, account and instrument type.
                2. Short-term and long-term or similar holding period categories split where your country uses them.
                3. A year-to-date total that agrees with the reconciled ledger.
                4. The latest snapshot sent to your accountant before your pre-year-end meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly realised gains and losses snapshot by account and instrument type agrees with the reconciled ledger for every month of the year."
                cadence: rolling
              tasks:
                - "Set up tracker columns for month, account, instrument type and holding period"
                - "Update the realised totals from the reconciled ledger @recurring(monthly:15)"
                - "Check that the year-to-date total matches the ledger"
                - "Send the latest snapshot to your accountant before year end"
            - name: Repurchase matching watchlist
              description: |-
                ## Purpose
                Many countries have rules that stop a loss being claimed, or change which purchase it is matched against, when the same or a similar security is bought back within a set window: the US wash-sale rule and the UK same-day and 30-day matching rules are well-known examples. Active traders trip these constantly, often across two accounts. A weekly check of losses against repurchases makes the effect visible before it surprises you on a tax form.

                ## Milestones
                1. The repurchase rule and window that apply to you confirmed with your accountant.
                2. A weekly list of closed losing positions with any repurchase inside the window.
                3. Repurchases across all your accounts, and any spouse accounts your adviser says count, included.
                4. Year-end figures compared with what your brokers report, with differences explained.

                ## Notes
                Brokers usually only see their own account, so their reports can miss a repurchase made elsewhere. Your ledger is the only place all accounts meet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly repurchase check across all accounts runs all year and its year-end figures are reconciled to broker reports with differences explained."
                cadence: rolling
              tasks:
                - "Ask your accountant which repurchase matching rule and window apply to you"
                - "List the week's losing closes and any repurchase within the window @recurring(weekly:mon)"
                - "Include trades from every account, not just the main broker"
                - "Note each affected loss and the purchase it was matched to"
            - name: Quarterly tax payment routine
              description: |-
                ## Purpose
                Traders whose income is not taxed at source are often expected to pay during the year, through quarterly estimates or payments on account, and missing them can bring interest or penalties. A fixed routine each quarter, using the amounts your accountant calculates, keeps the reserve account and the tax authority in step.

                ## Milestones
                1. The payment dates and method for your country confirmed and in your calendar.
                2. Each quarter's amount requested from or agreed with your accountant using the latest tracker.
                3. Payment made from the tax reserve account and the confirmation saved.
                4. A yearly summary of payments made ready for the return.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every interim tax payment due in the year is made on time from the reserve account, with confirmations saved and a yearly summary prepared."
                cadence: cyclic
              tasks:
                - "Confirm your interim payment dates and method with your accountant"
                - "Send your accountant the latest realised tracker and ask for the amount @recurring(quarterly)"
                - "Pay from the tax reserve account and save the confirmation"
                - "Summarise the year's interim payments for the return @recurring(yearly)"
            - name: Corporate actions and basis adjustments log
              description: |-
                ## Purpose
                Splits, reverse splits, mergers, spin-offs, symbol changes and returns of capital all change the quantity or cost of what you hold, and brokers handle them inconsistently. A monthly log of every corporate action that touched your positions, with the adjustment applied, is what makes the eventual gain or loss on those shares correct.

                ## Milestones
                1. A log with date, security, action type, ratio and the broker's notice.
                2. Each adjustment applied to the affected lots in your ledger.
                3. Spin-off basis allocations recorded with the source the broker or issuer published.
                4. Positions reconciled to the broker after each action.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every corporate action affecting your holdings in the year is logged with its source and applied to the ledger, and positions agree with the broker."
                cadence: rolling
              tasks:
                - "Create a corporate actions log with date, security, type and ratio columns"
                - "Check broker notices for corporate actions on your holdings @recurring(monthly:20)"
                - "Apply each adjustment to the affected lots in your ledger"
                - "Save the issuer's published basis allocation for any spin-off"
            - name: Foreign currency conversion records
              description: |-
                ## Purpose
                Trading a US stock from a sterling account, or futures in yen from a dollar account, means each gain or loss usually has to be expressed in your home currency, and the rate used matters. Recording the rate source and the converted values monthly, in the way your accountant prefers, avoids recalculating thousands of trades in March.

                ## Milestones
                1. The conversion method and rate source confirmed with your accountant.
                2. Each foreign currency trade or monthly total converted using that source.
                3. Currency conversions inside the broker account, and their own gains or losses, recorded separately.
                4. A year-end currency summary added to the tax file.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every foreign currency trade in the year has a home currency value from the rate source agreed with your accountant, with a year-end summary filed."
                cadence: rolling
              tasks:
                - "Ask your accountant which exchange rate source and method to use"
                - "Convert last month's foreign currency trades and totals @recurring(monthly:25)"
                - "Record cash currency conversions inside each broker account separately"
                - "Save the rate table you used with each month's records"
            - name: Dividend, interest and withholding tax record
              description: |-
                ## Purpose
                Active traders often forget that holding positions overnight brings dividends, credit interest, margin interest charged, payments in lieu on shorts and foreign tax withheld at source. These sit on different lines of the return from trading gains, and withheld tax may be reclaimable or creditable. A quarterly record keeps them from being buried in the trade file.

                ## Milestones
                1. A record of dividends, interest received, interest paid and payments in lieu by account.
                2. Foreign tax withheld recorded per payment with the country of source.
                3. Totals reconciled to broker income summaries each quarter.
                4. Questions on reclaims or credits listed for your accountant.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly income record shows dividends, interest and foreign withholding by account and agrees with each broker's income summary."
                cadence: rolling
              tasks:
                - "Find the income or corporate events report on each broker platform"
                - "Record dividends, interest and withholding by account @recurring(quarterly)"
                - "Note payments in lieu charged on short positions separately"
                - "List withholding amounts to ask your accountant about"
            - name: Understanding cost basis methods
              description: |-
                ## Purpose
                First in first out, specific lot identification, average cost and the pooling rules some countries require can give very different gains from the same trades. You do not choose freely in every country, but you should understand what your broker defaults to, what your tax authority requires, and why the two may not agree.

                ## Milestones
                1. Notes explaining the main cost basis methods with one worked example each.
                2. The method your tax authority requires or allows for your instruments recorded.
                3. Each broker's default method checked and noted on the account inventory.
                4. Any mismatch between broker default and required method raised with your accountant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes cover each cost basis method with an example, and every broker's default is recorded beside the method your country requires."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the tax authority's guidance on how share disposals are matched"
                - "Work one example of three trades through each cost basis method"
                - "Look up each broker's default lot method in its account settings"
                - "Raise any broker default that differs from the required method"
            - name: Studying the repurchase and matching rules
              description: |-
                ## Purpose
                Knowing that a repurchase rule exists is different from knowing how it carries a disallowed loss into the new position, what counts as substantially identical, and whether options or related accounts are caught. A focused study session with the official guidance and a few worked examples turns a vague worry into a set of facts you can check your own trades against.

                ## Milestones
                1. The official guidance on your country's matching or repurchase rule read and summarised.
                2. Three worked examples from your own trades, checked by your accountant.
                3. A list of grey areas, such as options on the same stock or similar funds, with your adviser's view.
                4. A one-page summary saved in the records folder.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the matching rule, with three of your own trades worked through and checked by your accountant, is saved."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the tax authority's published guidance on loss repurchase rules"
                - "Pick three of your own trades where a repurchase followed a loss"
                - "Work each example through and send them to your accountant to check"
                - "Write a one-page summary of the rule and its grey areas"
            - name: Reading your broker's annual tax form
              description: |-
                ## Purpose
                Consolidated broker tax documents, such as the US Form 1099-B or a broker's annual tax report elsewhere, pack gains, adjustments and basis reporting status into dense tables. Learning to read yours line by line shows you which figures are reported to the tax authority, which sales have basis reported and which do not, and where your own ledger will need to explain a difference.

                ## Milestones
                1. Last year's annual tax document from your main broker annotated section by section.
                2. Sales with and without basis reported to the authority identified.
                3. Adjustment codes or columns, such as disallowed losses, explained in your notes.
                4. Totals compared with your ledger and differences listed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your main broker's annual tax document is annotated, its adjustment columns explained and its totals compared with your ledger."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Download last year's annual tax document from your main broker"
                - "Read the broker's guide to the form and annotate each section"
                - "Mark which sales show basis reported to the tax authority"
                - "Compare the form's totals with your ledger and list differences"
            - name: Instrument-by-instrument tax treatment questions
              description: |-
                ## Purpose
                Shares, ETFs, listed options, futures, CFDs, spread bets, forex and crypto can each be taxed differently, and the answer can change with your country, your status and even the exchange. Rather than guessing, build a table of every instrument you actually trade with the question you need answered, and have your accountant fill in the treatment column.

                ## Milestones
                1. A table of every instrument type you traded in the last two years.
                2. For each, the open question about its treatment written in plain language.
                3. Your accountant's answer recorded beside each row with the date.
                4. Ledger categories updated so each instrument type is reported separately.

                ## Notes
                Some products marketed in one country as tax-free are not treated that way elsewhere. Record the answer for your residence, not the marketing claim.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every instrument type you trade appears in a table with its treatment as confirmed by your accountant, and the ledger categories match it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every instrument type you traded from your exports"
                - "Write the treatment question for each in one plain sentence"
                - "Send the table to your accountant and record each answer with a date"
                - "Add a ledger category for each instrument type"
            - name: Options exercise, assignment and expiry records
              description: |-
                ## Purpose
                Options rarely end as a simple buy and sell. Exercise and assignment can fold the premium into the cost or proceeds of the stock, expiry can create a gain or loss with no trade on the confirmation, and early assignment on short calls arrives without warning. Recording each outcome with its linked stock trade keeps option and share figures consistent.

                ## Milestones
                1. Every option position in the year tagged closed, expired, exercised or assigned.
                2. Exercised and assigned positions linked to the resulting stock trade in the ledger.
                3. Expiries recorded as disposals with a date and zero proceeds or cost where relevant.
                4. The treatment of premium on exercise and assignment confirmed with your accountant.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every option position in the year is tagged by outcome, with exercises and assignments linked to their stock trades and the premium treatment confirmed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Export all option positions closed or expired this year"
                - "Tag each as closed, expired, exercised or assigned"
                - "Link each exercise or assignment to the stock trade it created"
                - "Ask your accountant how premium is treated on exercise and assignment"
            - name: Short selling and borrow cost records
              description: |-
                ## Purpose
                Short sales reverse the usual order, so a disposal comes before its acquisition, and they bring borrow fees, rebates and payments in lieu that brokers report in different places. A short-specific record makes sure the eventual close is matched correctly and the costs are not lost in the statement noise.

                ## Milestones
                1. Every short position in the year listed with open date, close date and quantity.
                2. Borrow fees and rebates collected from statements for each position.
                3. Payments in lieu of dividends on shorts recorded separately.
                4. How short positions open at year end are treated confirmed with your accountant.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A record lists every short position with borrow costs and payments in lieu, and the treatment of shorts open at year end is confirmed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Filter your exports for short sale openings and closings"
                - "Collect borrow fees and rebates from each month's statement"
                - "Record payments in lieu of dividends on short positions"
                - "Ask your accountant how shorts open at year end are handled"
            - name: Crypto transaction and wallet transfer records
              description: |-
                ## Purpose
                Crypto exchanges close, change names and purge history, and moving coins between your own wallets can look like disposals to software that cannot see both ends. Tax authorities increasingly receive exchange data directly. A monthly export from every exchange and wallet, with transfers between your own addresses labelled, is the only way to make the year's figures defensible.

                ## Milestones
                1. Every exchange account and self-custody wallet address listed on the inventory.
                2. Monthly exports from each exchange and wallet saved.
                3. Transfers between your own wallets labelled so they are not counted as disposals.
                4. Staking, lending and airdrop receipts recorded separately for your accountant.

                ## Notes
                Keep public wallet addresses in the records, never seed phrases or private keys.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every exchange and wallet has monthly exports saved, own-wallet transfers are labelled and staking or airdrop receipts are recorded separately."
                cadence: rolling
              tasks:
                - "List every exchange account and public wallet address you control"
                - "Export last month's transactions from each exchange and wallet @recurring(monthly:22)"
                - "Label transfers between your own wallets in the ledger"
                - "Record staking, lending and airdrop receipts in a separate tab"
            - name: Choosing the cost basis election at each broker
              description: |-
                ## Purpose
                Some brokers let you set a default lot selection method, and in some countries the choice affects what is reported and what you can later change. With your accountant's guidance on what is allowed, making a deliberate choice at each broker, and writing it down, removes a silent default that may not suit your trading style.

                ## Milestones
                1. Each broker's available lot methods listed from its account settings.
                2. Your accountant's guidance on which methods are allowed and sensible recorded.
                3. The chosen method set at each broker, with a screenshot of the confirmation.
                4. The election and its date noted on the account inventory.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each broker has a lot method set on purpose after your accountant's guidance, with a dated screenshot saved on the inventory."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the lot selection methods each broker offers"
                - "Ask your accountant which methods are allowed for your situation"
                - "Set the chosen method at each broker and screenshot the confirmation"
                - "Note the election and date on the account inventory"
            - name: Consolidating brokers to simplify reporting
              description: |-
                ## Purpose
                Every extra account adds a statement run, an import format, a tax form and a chance for repurchase rules to cross accounts unseen. If you hold accounts that no longer earn their place, closing or merging them can halve the year-end work. Weigh what each account genuinely provides against the record-keeping it costs.

                ## Milestones
                1. Each account scored for what it provides and the hours of records it costs per year.
                2. Accounts to keep, merge or close decided and written down.
                3. Tax consequences of any transfer or closure checked with your accountant first.
                4. Closures carried out with final statements saved.

                ## Notes
                Transferring positions in kind usually keeps their basis; selling to move cash can create a taxable event. Check with your accountant before moving anything.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written keep, merge or close decision exists for every account, with your accountant's view on tax consequences recorded before any move."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate yearly record-keeping hours for each account"
                - "Write what each account provides that no other account does"
                - "Ask your accountant about the tax effect of each planned transfer or closure"
                - "Record the keep, merge or close decision for each account"
            - name: Automating broker imports into the tax ledger
              description: |-
                ## Purpose
                Once trade volume runs into the thousands, copying CSVs by hand is where errors creep in. A small script or the tax tool's own connectors that pull trades and statements on a schedule, with checks that row counts and totals match, makes the weekly routine faster and more reliable. Keep the automation simple enough that you can still run it by hand if a broker changes its format.

                ## Milestones
                1. The import method chosen for each broker: native connector, API or scheduled CSV.
                2. An automated import running for the largest account with a row count check.
                3. An alert or log line when an import fails or counts do not match.
                4. A written fallback procedure for importing by hand.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The largest account imports automatically with row count checks and failure alerts, and a manual fallback procedure is written."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check which brokers offer a connector or API for trade history"
                - "Build or configure an automated import for your largest account"
                - "Add a check that compares imported row counts with the source"
                - "Write the steps for importing by hand when automation fails"
            - name: Broker versus ledger discrepancy clean-up
              description: |-
                ## Purpose
                When your ledger and a broker's tax form disagree, the tax authority will usually see the broker's figure first. Working through every material discrepancy, finding the cause and documenting the correction turns an uncomfortable mismatch into a supported explanation your accountant can put on the return if needed.

                ## Milestones
                1. Every difference between broker tax forms and your ledger listed by account and amount.
                2. Each difference traced to a cause, such as missing basis, repurchase adjustments or currency.
                3. Corrections made in the ledger or requested from the broker in writing.
                4. A short explanation of each remaining difference ready for your accountant.

                ## Notes
                Start from the **Remediation plan** template. Work largest differences first; a handful of positions usually explain most of the gap.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every material difference between broker tax forms and the ledger is traced to a cause and either corrected or explained in writing."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every difference between each broker's tax form and your ledger"
                - "Sort differences by size and trace the largest five first"
                - "Write to the broker about any error on their side"
                - "Draft a one-line explanation for each remaining difference"
            - name: Elections and deadlines file
              description: |-
                ## Purpose
                Some countries offer traders elections that change how gains are calculated or reported, such as the US mark-to-market election, and many must be made by a fixed date, sometimes before the year they apply to. Whether to make one is your adviser's call; your job is to know the deadlines and keep evidence of anything filed.

                ## Milestones
                1. Any elections relevant to traders in your country listed by your accountant.
                2. The deadline for each written into the filing calendar.
                3. A recorded decision for each, made or not made, with your adviser's reasons.
                4. Proof of any election filed saved in the correspondence folder.

                ## Notes
                Several trader elections are difficult or impossible to reverse. Do not make one on the strength of a forum post or a software prompt.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A file lists every election your accountant considers relevant, each with its deadline, a recorded decision and proof of filing where made."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your accountant which trader elections exist in your country"
                - "Add each election's deadline to your filing calendar"
                - "Record the decision and reasons for each election"
                - "Save proof of filing for any election made"
            - name: Pre-year-end review with your accountant
              description: |-
                ## Purpose
                A conversation six to eight weeks before the tax year closes, with an accurate realised tracker in hand, is when timing questions, interim payments and missing records can still be dealt with. After year end the numbers are fixed. Bring facts, not decisions you have already made, and let your adviser tell you what matters.

                ## Milestones
                1. The meeting booked six to eight weeks before tax year end.
                2. Realised tracker, repurchase watchlist and expense log sent in advance.
                3. Your accountant's points and any actions recorded in meeting notes.
                4. Every action closed before the tax year ends.

                ## Notes
                Start from the **Meeting notes** template. Ask about timing and record-keeping, not for trade recommendations; your accountant is not your trading desk.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pre-year-end meeting takes place with records sent in advance, and every action from the notes is closed before the tax year ends."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a meeting with your accountant for two months before year end"
                - "Send the realised tracker, repurchase list and expense log ahead of time"
                - "Record your accountant's points and actions in meeting notes"
                - "Close each action and note the date it was done"
            - name: Year-end tax file handover to your accountant
              description: |-
                ## Purpose
                The whole area exists for this moment: a single, organised file that lets your accountant prepare the return without a dozen follow-up emails. Handing it over by your internal deadline, complete and indexed, cuts their fees and your risk of a rushed, wrong figure.

                ## Milestones
                1. Annual tax documents from every account downloaded once issued.
                2. Ledger, realised tracker, cost log, income record and currency summary finalised for the year.
                3. An index listing every document in the file and what it supports.
                4. The file delivered by your internal deadline and receipt confirmed.

                ## Notes
                A common default index order is: account inventory, broker tax forms, ledger and realised summary, income, costs, currency, interim payments, correspondence.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete, indexed year-end file covering every account reaches your accountant by your internal deadline and receipt is confirmed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check off each account's annual tax document as it is issued"
                - "Finalise the ledger, tracker, cost, income and currency records"
                - "Write an index of every document in the year-end file"
                - "Send the file to your accountant and ask them to confirm receipt"
            - name: Corrected broker tax forms season
              description: |-
                ## Purpose
                Brokers regularly issue corrected tax documents weeks after the originals, often because of reclassified distributions or late corporate action data. A return filed on the first version may need amending. Watching for corrections and deciding with your accountant when to file avoids doing the work twice.

                ## Milestones
                1. Each broker's history of issuing corrected forms checked from previous years.
                2. Notification settings switched on for tax document updates.
                3. Any corrected form compared with the original and the changes listed.
                4. Your accountant told of every correction before the return is filed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every corrected broker tax form issued for the year is compared with the original and passed to your accountant before filing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Turn on tax document notifications at every broker"
                - "Note which brokers issued corrected forms in previous years"
                - "Compare any corrected form with the original and list the changes"
                - "Forward each correction to your accountant with the change list"
            - name: Filing day checklist and confirmation archive
              description: |-
                ## Purpose
                Once the return is ready, the job is to review it against your records, approve it, pay any balance and keep proof of all three. A short checklist for filing day, and an archive of exactly what was submitted, is what you will reach for if a question comes years later.

                ## Milestones
                1. The draft return's trading figures checked against your realised summary.
                2. Questions on any figure you do not recognise answered by your accountant.
                3. The return filed and the submission confirmation saved.
                4. Any balance paid from the reserve and the payment confirmation saved.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The return is filed after its trading figures are checked against your records, with submission and payment confirmations saved in the year folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare the draft return's trading figures with your realised summary"
                - "Ask your accountant about any figure you cannot trace"
                - "Save the final return and submission confirmation in the year folder"
                - "Pay any balance from the reserve and save the payment proof"
            - name: Responding to a tax authority enquiry about trading
              description: |-
                ## Purpose
                Large trade volumes, mismatches with broker data or a big change from last year can prompt a letter from the tax authority. A calm, documented response, routed through your accountant and backed by the records this area builds, usually resolves it. Panic replies and missed deadlines are what make enquiries expensive.

                ## Milestones
                1. The letter's deadline, reference and exact questions recorded the day it arrives.
                2. Your accountant engaged to handle or review the response.
                3. Documents answering each question pulled from the year file and indexed.
                4. The response sent before the deadline and a copy saved with proof of delivery.

                ## Notes
                Do not phone or reply on your own before speaking to your adviser. Answer the questions asked, with documents, and keep copies of everything sent.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Any enquiry is answered before its deadline through or with your accountant, with every document sent indexed and proof of delivery saved."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the enquiry's deadline, reference and questions"
                - "Send a copy of the letter to your accountant the same day"
                - "Pull and index the documents that answer each question"
                - "Save the response and proof of delivery in the correspondence folder"
            - name: Closing a brokerage account cleanly
              description: |-
                ## Purpose
                Closing an account cuts off access to its statements, sometimes immediately, yet the final year's tax document may not be issued for months. A closing routine that downloads everything first, records the final positions and transfers, and notes where the last tax form will be sent, stops a closed account from leaving a hole in the next return.

                ## Milestones
                1. Full trade history and every statement downloaded before closure.
                2. Final positions, transfers out and cash balance recorded with dates.
                3. The provider's address or portal for the final tax document confirmed in writing.
                4. The account marked closed on the inventory with the closure letter saved.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A closed account has its full history, final statements and closure letter filed, and you know where its final tax document will arrive."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the full trade history and all statements before closing"
                - "Record final positions, transfers and cash balance with dates"
                - "Ask the provider in writing how the final tax document will be delivered"
                - "Mark the account closed on the inventory and file the closure letter"
            - name: Moving country as an active trader
              description: |-
                ## Purpose
                Changing tax residence mid-year can split the year in two, bring exit or arrival rules, and leave you with brokers that report to one country while you are taxed in another. Records that show positions and values on the move date, kept with advice from advisers in both countries, are what make two returns agree.

                ## Milestones
                1. Your move date and residence position confirmed with an adviser in each country.
                2. Positions, basis and market values snapshotted on the move date.
                3. Each broker told of your new address and residence where required.
                4. A year file split into before and after periods with the snapshot at the boundary.

                ## Notes
                Some brokers restrict or close accounts for clients who move abroad. Ask before you move, not after.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A move-date snapshot of positions, basis and values is filed, both advisers have confirmed your residence position and each broker has your new details."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask each broker whether they will keep your account after the move"
                - "Book an adviser in each country to confirm your residence position"
                - "Save a snapshot of positions, basis and market values on the move date"
                - "Split the year folder into before and after periods"
            - name: Prop firm fees and payout records
              description: |-
                ## Purpose
                Funded trader programmes blur categories: you may pay evaluation fees, trade a simulated or firm-owned account and receive payouts that look more like contractor income than trading gains. How they are treated depends on the firm's contract and your country, so the job here is to keep the contract, every fee and every payout together for your accountant.

                ## Milestones
                1. Each prop firm agreement saved with the section describing how payouts are made.
                2. Every evaluation, reset and subscription fee recorded with receipts.
                3. Every payout recorded with date, amount, currency and payment method.
                4. Your accountant's view on how fees and payouts are treated recorded.

                ## Notes
                Any income statement or contractor form the firm issues goes in the same folder. Your own trading results inside the funded account are not usually what gets taxed; the payouts are what your adviser will ask about.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every prop firm contract, fee and payout for the year is recorded with documents, and your accountant's view on their treatment is noted."
                cadence: rolling
              tasks:
                - "Save each prop firm agreement and highlight the payout terms"
                - "Record last month's prop firm fees and payouts with receipts @recurring(monthly:5)"
                - "Download any income statement the firm issues"
                - "Ask your accountant how fees and payouts should be reported"
            - name: Trading part time alongside a salaried job
              description: |-
                ## Purpose
                If tax on your salary is handled through payroll, trading gains may be the only part of your return nobody has calculated for you, and a good year can change your tax band or bring interim payment duties. A light but complete record kept in evenings and weekends, with a clear boundary from work equipment and employer rules, keeps both sides clean.

                ## Milestones
                1. Your employer's personal trading policy read and any approval or reporting duties noted.
                2. Trading records kept on personal devices and accounts only.
                3. A monthly half-hour slot for statements, reconciliation and set-aside protected in your calendar.
                4. Your accountant told about salary and trading together so the return combines them correctly.

                ## Notes
                Many employers in finance require pre-clearance or duplicate statements for personal trades. Keep those submissions in the correspondence folder too.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Employer trading rules are documented, records live only on personal systems, and a monthly records slot is in your calendar."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your employer's personal account dealing policy"
                - "Move any trading records off work devices and email"
                - "Block a monthly half hour for statements and reconciliation"
                - "Tell your accountant your salary and trading so they are combined"
            - name: Records for a joint or family member's account
              description: |-
                ## Purpose
                When you run the records for a partner's account, a joint account or an elderly parent's trading, the paperwork has to show whose income is whose, and repurchase rules may reach across a household. Keeping their records separate, with their consent and their own accountant relationship where needed, protects both of you.

                ## Milestones
                1. Written consent from the account holder for you to keep their records.
                2. Ownership shares of any joint account confirmed and recorded.
                3. A separate year folder and ledger for their accounts.
                4. Their accountant, or yours with their agreement, sent the file in their name.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The other person's records sit in their own folder with written consent and confirmed ownership shares, and their year-end file is sent in their name."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the account holder for written consent to keep their records"
                - "Confirm and record ownership shares on any joint account"
                - "Set up a separate folder and ledger for their accounts"
                - "Ask whether household repurchase rules apply between your accounts"
            - name: First-year trader's minimum record set
              description: |-
                ## Purpose
                New traders with a small account are tempted to ignore records until the account is big enough to matter, then find the first year impossible to rebuild. A minimum set, one folder, monthly statements, a simple spreadsheet and a set-aside habit, takes an hour a month and grows into the full system without being redone.

                ## Milestones
                1. One folder with a subfolder per account created.
                2. Monthly statements filed for every month since the first trade.
                3. A simple spreadsheet of realised gains and losses kept up to date.
                4. A short call with an accountant or the tax authority's helpline to check your first-year obligations.

                ## Notes
                Losses matter too. In many countries a loss you did not record or report cannot be used later.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A first-year trader has a folder, statements for every month traded, a realised gains sheet and a recorded check of first-year obligations."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create one folder with a subfolder for your trading account"
                - "Download statements for every month since your first trade"
                - "Start a spreadsheet of realised gains and losses by trade"
                - "Check your first-year reporting obligations with an accountant"
            - name: Trading through a company or entity
              description: |-
                ## Purpose
                Some traders trade through a limited company, partnership or other entity, which brings its own accounts, filings and director duties alongside the trading records. Whether an entity suits you is a question for an accountant and lawyer, but if you have one, its records must be kept entirely apart from your personal accounts.

                ## Milestones
                1. Entity accounts and personal accounts listed separately on the inventory.
                2. Entity filing and accounting deadlines added to the calendar.
                3. A rule written that no personal trades or costs run through entity accounts.
                4. Year-end entity records handed to the accountant preparing its accounts.

                ## Notes
                Questions about whether to set up an entity belong with your accountant and a lawyer. This project is for keeping records once one exists.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Entity and personal trading records are fully separated, entity deadlines are in the calendar and the entity's year-end records reach its accountant."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Split the account inventory into entity and personal sections"
                - "Add the entity's filing and accounts deadlines to the calendar"
                - "Write the rule that personal trades never run through entity accounts"
                - "Send the entity's year-end records to its accountant"
            - name: Records for retired or semi-retired traders
              description: |-
                ## Purpose
                Retirees who trade from savings often combine pension income, sheltered accounts and a taxable trading account, and large gains can affect means-tested benefits or allowances in some countries. A simple yearly picture of all income sources, with trading kept clearly separate, lets your adviser see the whole position and lets family find things if they ever need to.

                ## Milestones
                1. All income sources listed: pensions, sheltered accounts and taxable trading.
                2. Trading records kept in the standard folder with a short readme for family.
                3. Questions on how trading gains interact with pension income or allowances raised with your adviser.
                4. A trusted person told where the records and the accountant's details are kept.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An income summary separates trading from pension and sheltered income, your adviser has answered interaction questions and a trusted person knows where records are."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every income source you will have this tax year"
                - "Write a short readme so family can find your trading records"
                - "Ask your adviser how trading gains interact with pension income"
                - "Tell a trusted person where the records and adviser details are"
            - name: High-volume trade data pipeline for algorithmic accounts
              description: |-
                ## Purpose
                Systematic accounts can produce tens of thousands of fills a year, partial fills and all, which overwhelm consumer tax software and hand reconciliation. A pipeline that stores raw broker files unchanged, transforms them into a tax ledger with tested code and checks totals against statements gives you records you can rebuild exactly. It is a records system, separate from your strategy code.

                ## Milestones
                1. Raw broker files stored read-only and never edited by hand.
                2. A versioned transform that aggregates fills into tax lots with tests on known examples.
                3. A weekly integrity check comparing pipeline totals with broker statements.
                4. The ledger output in the format your accountant or tax tool needs.

                ## Notes
                Ask your accountant whether fills may be aggregated to the order or the day before you design the transform. The answer changes the whole pipeline.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned pipeline turns read-only raw files into a tax ledger whose totals pass a weekly check against broker statements."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your accountant whether partial fills may be aggregated"
                - "Store raw broker files in a read-only folder with checksums"
                - "Write tests for the fill-to-lot transform using known examples"
                - "Run the pipeline integrity check against statements @recurring(weekly:wed)"
            - name: Multi-currency consolidated ledger with audit trail
              description: |-
                ## Purpose
                Traders with several brokers in different currencies eventually need one ledger where every number traces back to a source document, every change is logged and every currency conversion is reproducible. Building it once, with a change log and source references on every row, means any figure on the return can be explained in minutes.

                ## Milestones
                1. One ledger combining every taxable account with a source file reference on each row.
                2. A change log recording every manual edit with date and reason.
                3. Currency conversions recomputable from the stored rate tables.
                4. A test showing three random return figures traced back to source documents.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A consolidated ledger with source references, a change log and stored rate tables lets three random return figures be traced to source documents."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Add a source file reference column to every ledger row"
                - "Start a change log for manual edits with date and reason"
                - "Store each month's rate table beside the ledger"
                - "Trace three random figures from last year's return back to source"
            - name: Prior-year error correction file
              description: |-
                ## Purpose
                Building better records often uncovers mistakes in earlier returns: a missed account, unreported income or a loss never claimed. Most tax authorities have a process and time limit for correcting returns. Documenting what you found and taking it to your accountant promptly is far better than leaving it for the authority to find.

                ## Milestones
                1. Each suspected prior-year error described with the year, account and approximate amount.
                2. Supporting documents gathered for each.
                3. Your accountant's recommendation on correction recorded with any time limits.
                4. Corrections filed, if advised, and confirmations saved.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every suspected prior-year error is documented, reviewed by your accountant and either corrected with confirmation saved or closed with a recorded reason."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each suspected error with year, account and rough amount"
                - "Gather the statements and exports that support each one"
                - "Ask the agent to summarise the findings into a one-page brief for your accountant"
                - "Record your accountant's advice and any correction deadlines"
            - name: Audit-ready archive and evidence index
              description: |-
                ## Purpose
                Experienced traders treat each closed year as a sealed archive: final ledger, every source file, the return as filed, correspondence and a hash or checksum showing nothing has changed since. With an index on top, any question about any year inside the retention period can be answered from the archive alone, without logging in to a broker that may no longer exist.

                ## Milestones
                1. Each closed year's folder frozen as a read-only archive.
                2. An evidence index listing every document and which return figure it supports.
                3. Checksums recorded so later changes can be detected.
                4. Years past the agreed retention period reviewed and disposed of securely only after your accountant confirms.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every closed year inside the retention period has a read-only archive with an evidence index and recorded checksums."
                cadence: cyclic
              tasks:
                - "Make last year's folder read-only once the return is accepted"
                - "Write an evidence index linking documents to return figures"
                - "Record checksums for every archived file"
                - "Seal the newly closed tax year and review retention dates @recurring(yearly)"
---

# Active Trading Tax Records

This area is for anyone who trades actively enough that the tax return stops being a single form from one broker: day traders, swing traders, people running small algorithmic accounts, prop firm traders and anyone with several brokers, currencies or a crypto wallet. It starts with the foundations (an inventory of every account, your filing calendar, the records folder, full trade history and an accountant who knows trading), then the monthly machinery of statements, reconciliation and set-asides, the rules worth understanding such as cost basis methods and repurchase matching, the decisions and dated events around year end and filing, variants for people moving country, trading part time or trading through a company, and finally the specialist work of high-volume data pipelines and an audit-ready archive.

What repeats is a weekly trade export and repurchase check, monthly statement downloads, reconciliation, expense, currency and corporate action logs on varied days, a quarterly tax payment routine and a yearly refresh of the account inventory, calendar and archive. The Vendor, Purchase decision, Month-end close, Savings goal, Meeting notes and Remediation plan templates pair with the projects that name them. Nothing here is tax advice: the rules differ by country and by your circumstances, so every treatment question goes to a qualified accountant or the tax authority, and this area makes sure you arrive with the records to answer it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
