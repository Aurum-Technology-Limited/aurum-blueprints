---
id: data-analytics.small-business-reporting-setup
name: Small Business Reporting Setup
description: "Five questions, eight headline numbers and connected bank, payment and sales feeds, then owner routines, statement reading skills, accountant and lender packs, and set-ups for shops, services, cafés and founders."
category: business
version: 1.0.0
tags: [data-analytics, small-business-reporting-setup, small-business, founder, management-reports, bookkeeping, cash-flow, integrations]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - month-end-close
    - vendor
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Small Business Reporting Setup
          description: "Setting up simple, reliable reporting for a small business by connecting sales, finance and marketing tools into a few useful views."
          projects:
            - name: Five questions your business numbers must answer
              description: |-
                ## Purpose
                Owners who start by connecting tools usually end up with forty charts and no answers. Writing down the five questions you actually ask about the business each month, such as whether last month made money, which products carry the margin and whether there is cash for the next payroll, decides what every later report has to show and what it can leave out.

                ## Milestones
                1. A list of five questions written in your own words, each one tied to a decision you make.
                2. Each question marked as weekly, monthly or yearly.
                3. The tool you think holds the answer noted beside each question.
                4. The list shared with your business partner, bookkeeper or anyone else who reads the numbers.

                ## Notes
                A question as vague as whether the business is doing well cannot be reported on. Rewrite each one until a single number or a short table could answer it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of five business questions, each linked to a decision and a likely data source, agreed with anyone else who reads the numbers."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the last three decisions you made that needed a number"
                - "Turn them into five questions the reports must answer each month"
                - "Note which tool you believe holds each answer"
                - "Share the list with your partner or bookkeeper and adjust it"
            - name: Map of every tool that holds business data
              description: |-
                ## Purpose
                A typical small business has sales in a till or online shop, money in a payment processor and a bank, costs in accounting software, and customers spread across an email tool, a booking app and a spreadsheet. Listing every one, with what it holds and who pays for it, shows where the numbers live before anything gets connected, and often turns up a subscription nobody uses.

                ## Milestones
                1. Every tool that records sales, costs, customers or marketing listed in one table.
                2. Each tool's account owner, monthly cost and renewal date noted.
                3. The data each tool holds and how it can be exported recorded.
                4. Tools that duplicate each other flagged for a keep or cancel decision.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single table lists every business tool holding sales, cost, customer or marketing data, with owner, cost and export method for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every app the business pays for from the last three bank statements"
                - "Add the till, payment, accounting, email and booking tools you use for free"
                - "Record what data each tool holds and whether it exports to CSV"
                - "Flag any two tools that record the same thing"
            - name: Owner admin access to every data tool
              description: |-
                ## Purpose
                Accounts set up by a web designer, an agency or a former bookkeeper are often registered to their email address, and the business only finds out when that person leaves. Making sure the owner holds the top-level admin login for the accounting software, payment processor, online shop and ad accounts protects years of history and means reports can never be held hostage.

                ## Milestones
                1. The owner confirmed as primary admin or account owner on every tool in the data map.
                2. Logins stored in a password manager the business controls.
                3. Outside helpers given their own user accounts rather than shared logins.
                4. Two-step sign-in switched on for the accounting software, bank and payment processor.

                ## Notes
                Never send passwords to a helper by email or text. Invite them as a user from inside the tool so their access can be removed later.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every tool in the data map shows the owner as primary admin, with outside helpers on their own user accounts and two-step sign-in active on money tools."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check who is listed as account owner in your accounting software"
                - "Request an ownership transfer for any account held by an agency or former helper"
                - "Move every business login into a password manager the business owns"
                - "Review each tool's user list and remove people who have left @recurring(yearly)"
            - name: Eight headline numbers for the business
              description: |-
                ## Purpose
                Small businesses rarely need more than eight numbers to run on: sales, gross margin, overheads, net profit, cash in the bank, money owed to you, money you owe, and one marketing figure such as new customers or enquiries. Choosing your eight, with a plain-words definition of each, stops the monthly report from growing every time a tool offers a new chart.

                ## Milestones
                1. No more than eight headline numbers chosen from the five questions.
                2. Each number defined in one sentence, including what it leaves out.
                3. The source tool for each number named.
                4. The list pinned in the folder where the reports are kept.

                ## Notes
                Decide early whether sales means before or after refunds, discounts and sales tax. Most disagreements between the till and the books start there.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of at most eight headline numbers, each with a one-sentence definition and a named source tool."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the numbers that answer each of your five questions"
                - "Cut the list to eight or fewer by dropping anything you would not act on"
                - "Write a one-sentence definition for each number"
                - "Ask the agent to check the definitions for gaps such as refunds or tax"
            - name: Chart of accounts tidy-up with your bookkeeper
              description: |-
                ## Purpose
                Reports out of accounting software are only as useful as the categories behind them, and many small businesses run on a default chart of accounts with everything in general expenses or one sales line. An hour with your bookkeeper or accountant to split sales by line and group costs the way you think about them makes the profit and loss readable without any spreadsheet work.

                ## Milestones
                1. Sales accounts split into the two to six lines of business you want to see.
                2. Cost of sales separated from overheads.
                3. Catch-all accounts such as sundries or general expenses emptied or reduced.
                4. Every change agreed with the accountant so it still suits the tax return.

                ## Notes
                Agree any change with your accountant first, particularly mid-year. Moving history between accounts can affect figures already filed.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A revised chart of accounts with sales split by line and cost of sales separate from overheads, approved by the bookkeeper or accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export your current chart of accounts and last year's profit and loss"
                - "Mark the accounts you never look at and the ones that mix things together"
                - "Book an hour with your bookkeeper to agree a cleaner structure"
                - "Recode this year's transactions into the new accounts with their help"
            - name: Matching sales categories across till, shop and books
              description: |-
                ## Purpose
                When the till groups items as drinks and food, the online shop uses collections, and the accounts book everything to one sales line, no two reports agree. Mapping each product category to one sales account means a monthly sales-by-category figure can be read straight from the books and checked against the till.

                ## Milestones
                1. A mapping table linking every till and online shop category to one sales account.
                2. Product categories renamed so the same names appear in every tool.
                3. Integration settings updated so sales post to the mapped accounts.
                4. One month of category sales checked between the till and the books.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A category mapping table is in use and one month of sales by category agrees between the till, the online shop and the accounting software."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the product category list from your till and online shop"
                - "Draw up a table matching each category to one sales account"
                - "Update the sales integration so each category posts to its account"
                - "Compare one month of category totals between the till and the books"
            - name: Choosing where your reports will live
              description: |-
                ## Purpose
                The options run from the dashboards built into accounting software, through a shared spreadsheet fed by exports, to a small dashboard tool with ready-made connectors for shops, payments and ads. Comparing two or three against your five questions, your budget and the time you will really give it avoids paying for a tool that sits unused after the trial.

                ## Milestones
                1. Three options shortlisted, including the reporting already built into your accounting software.
                2. Each option scored on the questions it can answer, monthly cost, connectors and set-up time.
                3. A free trial run on real data for the favourite.
                4. A decision recorded with the reason and a date to revisit it.

                ## Notes
                Start from the **Purchase decision** template. Check that you can export your data and history if you ever cancel.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on where reports will live, chosen from at least three scored options and tested on real business data."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Look through the reports your accounting software already includes"
                - "Shortlist two other options such as a spreadsheet or a small dashboard tool"
                - "Score each option against your five questions and monthly budget"
                - "Run a free trial on real data before paying"
                - "Record the decision and the reason on the purchase decision page"
            - name: Bank, payment and sales feeds into the accounting tool
              description: |-
                ## Purpose
                Typing sales and bank lines in by hand is slow, and it is where most small business figures go wrong. Connecting the bank feed, the payment processor and the till or online shop to the accounting software means sales, fees and refunds arrive on their own every day, ready to reconcile.

                ## Milestones
                1. Every business bank account and card connected as a live feed.
                2. The payment processor or online shop connected through an official integration.
                3. A test week of sales, fees and refunds checked to see where each one posts.
                4. Any duplicate entries caused by two overlapping connections switched off.

                ## Notes
                The commonest mistake is connecting both the shop and the payment processor so every sale arrives twice. Decide which one is the source of sales before switching anything on.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Bank, payment processor and sales channel feeds post automatically to the accounting software, with a test week checked and no duplicates."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Connect each business bank account and card to the accounting software"
                - "Decide whether the shop or the payment processor is the single source of sales"
                - "Install the official integration for that source and map its accounts"
                - "Check a test week of sales, fees and refunds for duplicates or gaps"
            - name: Twelve-month baseline of sales, costs and cash
              description: |-
                ## Purpose
                New reports mean little without last year beside them. Pulling twelve months of sales, gross margin, overheads and month-end bank balance into one sheet gives every future month a comparison point and shows your quiet and busy months at a glance.

                ## Milestones
                1. Twelve months of sales, cost of sales, overheads and profit taken from the accounts.
                2. Month-end bank balances added for the same months.
                3. Any month with a known oddity, such as a one-off purchase or a closure, annotated.
                4. The three busiest and three quietest months highlighted.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sheet holds twelve months of sales, margin, overheads, profit and closing cash, with oddities annotated and peak months marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run a month-by-month profit and loss for the last twelve months"
                - "Add month-end bank balances from your statements"
                - "Note any one-off event that distorts a month"
                - "Highlight the three busiest and three quietest months"
            - name: Source map for every number in your reports
              description: |-
                ## Purpose
                Six months in, nobody remembers whether the sales figure came from the till, the payment processor or the accounts, and two people produce two different answers. A one-page map of each headline number, its tool, the exact report or export it comes from and its date range rules lets a bookkeeper or new manager rebuild the report without asking.

                ## Milestones
                1. Each headline number listed with its tool and report name.
                2. Filters, date ranges and exclusions written next to each one.
                3. The person who produces each number named.
                4. The map stored beside the reports and dated.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page map shows the tool, report, filters and producer for each headline number, stored with the reports."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each headline number with the tool it comes from"
                - "Write the exact report name and filters used to produce it"
                - "Name who produces each number every month"
                - "Save the map in the same folder as the monthly reports"
            - name: Daily takings close-out against card and cash
              description: |-
                ## Purpose
                For shops, cafés and salons, the end-of-day takings check is the first and most useful report there is. Comparing the till's total with the card terminal total and the counted cash each night catches missed refunds, wrong keying and shortfalls while staff can still remember the day.

                ## Milestones
                1. A close-out sheet with till total, card total, cash counted and the difference.
                2. A rule for how big a difference needs a written explanation.
                3. Every trading day's close-out completed by whoever closes.
                4. Differences over the limit reviewed by the owner each week.

                ## Notes
                Start from the **Operational checklist** template. Keep it to one sheet that the closing staff member signs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily close-outs are completed for four consecutive weeks, with every difference above the agreed limit explained."
                cadence: rolling
              tasks:
                - "Set up a close-out sheet with till, card, cash and difference columns"
                - "Agree the size of difference that needs a written note"
                - "Complete the close-out sheet after the last sale of the day @recurring(daily)"
                - "Show closing staff how to fill in and sign the sheet"
            - name: Monday ten-minute numbers check
              description: |-
                ## Purpose
                A short look at last week's sales, cash and enquiries each Monday morning catches a bad week while there is still time to respond, rather than at month end. Keeping it to ten minutes and the same five figures makes it a habit rather than a project.

                ## Milestones
                1. Five weekly figures chosen from your headline numbers.
                2. A one-line log entry kept each week with the figures and a comment.
                3. The check done on twelve consecutive Mondays.
                4. One action taken from something the weekly figures showed.

                ## Notes
                Start from the **Metrics log** template. If you also run a team meeting on the numbers, this is the owner's own preparation, not the meeting itself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly log entries record the same five figures, with at least one resulting action noted."
                cadence: rolling
              tasks:
                - "Choose five figures you can read in ten minutes"
                - "Create a weekly numbers log from the metrics log template"
                - "Record last week's five figures and one line of comment @recurring(weekly:mon)"
            - name: Friday bank feed reconciliation
              description: |-
                ## Purpose
                Bank feeds only help if the lines are matched and coded, and an unreconciled month makes every report from the accounting software unreliable. Clearing the week's bank lines each Friday takes fifteen minutes once it is routine, and a whole weekend when it is left for the accountant.

                ## Milestones
                1. Rules set up in the accounting software for regular payments such as rent, software and fees.
                2. All bank and card lines reconciled up to the previous Friday.
                3. Unexplained lines listed for the bookkeeper with one question each.
                4. Eight Fridays in a row with nothing older than a week left unreconciled.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks, no bank or card line older than seven days is left unreconciled in the accounting software."
                cadence: rolling
              tasks:
                - "Create bank rules for the ten most frequent regular payments"
                - "Reconcile the week's bank and card lines in the accounting software @recurring(weekly:fri)"
                - "Send unexplained lines to the bookkeeper with one question each"
            - name: Weekly overdue invoices and debtors view
              description: |-
                ## Purpose
                Money owed to the business changes daily and is easy to ignore until cash runs short. An aged debtors view, split into current, thirty, sixty and ninety days overdue and read every Wednesday, shows who to chase and whether a regular customer's payments are slowing.

                ## Milestones
                1. The aged receivables report found and saved as a favourite in the accounting software.
                2. Total overdue and the five largest debts noted each week.
                3. A chasing step agreed for each age band.
                4. Total overdue lower after three months than at the start.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly aged debtors figure is recorded for twelve weeks and total overdue is lower at the end than at the start."
                cadence: rolling
              tasks:
                - "Save the aged receivables report as a favourite in the accounting software"
                - "Agree the chasing step that applies at thirty, sixty and ninety days"
                - "Note total overdue and the five largest debts @recurring(weekly:wed)"
            - name: Monthly management report pack
              description: |-
                ## Purpose
                Once the books are reconciled, a short monthly pack turns them into decisions: profit and loss against last year, cash, debtors, sales by line and the marketing figure, on two or three pages. Producing it by the eighth of each month, every month, is the routine the whole reporting set-up exists to feed.

                ## Milestones
                1. A pack layout fixed, with the same pages in the same order each month.
                2. Last month's pack produced by the eighth.
                3. Three lines of commentary written on what moved and why.
                4. Twelve consecutive monthly packs filed in one folder.

                ## Notes
                Start from the **Month-end close** template. The pack is only as good as the reconciliation behind it, so close the books first.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A monthly pack in a fixed layout is produced by the eighth of the month for twelve consecutive months, each with written commentary."
                cadence: cyclic
              tasks:
                - "Draft a two-page pack layout from your eight headline numbers"
                - "Produce last month's pack and write three lines of commentary @recurring(monthly:8)"
                - "File each pack in a dated folder shared with your partner or accountant"
            - name: Monthly marketing spend and enquiries tally
              description: |-
                ## Purpose
                Ad platforms, email tools and social accounts each report their own success, and none of them knows how many paying customers actually came in. Putting total marketing spend beside enquiries, new customers and sales from each channel once a month gives a plain cost per new customer the owner can trust more than any single platform.

                ## Milestones
                1. Monthly spend collected from every ad account, agency invoice and promotion.
                2. Enquiries and new customers counted from your own records, not the platforms.
                3. Cost per new customer worked out for each main channel.
                4. Six months of tallies kept side by side.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly tallies record spend, enquiries and new customers by channel, with cost per new customer for each."
                cadence: rolling
              tasks:
                - "List every place marketing money is spent, including agency fees"
                - "Total spend, enquiries and new customers by channel @recurring(monthly:5)"
                - "Work out cost per new customer and compare it with last month"
            - name: Monthly stock value and slow movers view
              description: |-
                ## Purpose
                For anyone selling physical products, cash sits on the shelves, and the accounts rarely show how much or where. A monthly stock report from the till or inventory tool, showing stock value at cost and every item with no sales in ninety days, tells you which lines to reorder, discount or drop.

                ## Milestones
                1. Stock value at cost read from the inventory tool each month.
                2. A list of items with no sales in ninety days.
                3. A decision noted for each slow mover: reorder, discount or stop.
                4. Stock value tracked beside sales for six months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly stock reports record value at cost and slow movers, each slow mover with a decision noted."
                cadence: rolling
              tasks:
                - "Find the stock valuation report in your till or inventory tool"
                - "Record stock value at cost and list items unsold for ninety days @recurring(monthly:12)"
                - "Decide whether to reorder, discount or stop each slow mover"
            - name: Connector and sync failure check
              description: |-
                ## Purpose
                Integrations between shops, payment processors and accounting software break quietly when a password changes, a token expires or an app updates, and the gap only shows up later as a strange month. A short monthly check of each connection's status and last sync date catches a broken feed within weeks rather than at year end.

                ## Milestones
                1. Every live connection listed with where its status can be seen.
                2. Each connection checked monthly for errors and its last sync date.
                3. Any broken feed fixed and the missing days backfilled.
                4. Six monthly checks in which no connection is more than a month out of date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly connection checks completed, with any broken feed repaired and its missing data backfilled."
                cadence: rolling
              tasks:
                - "List each integration and where its sync status is shown"
                - "Check every connection's last sync date and error messages @recurring(monthly:3)"
                - "Backfill missing days after any broken connection is fixed"
            - name: Quarterly report prune and repair
              description: |-
                ## Purpose
                Reports grow by accident: an extra tab here, a chart someone asked for once. Checking every quarter which pages anyone used, which numbers looked wrong and which questions have changed keeps the monthly pack short and believable.

                ## Milestones
                1. Every page in the pack marked as used, unused or wrong.
                2. Unused pages removed and wrong figures traced to their cause.
                3. The five questions reread and updated if the business has changed.
                4. A short note of the changes kept with the pack.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews completed in a year, each with a note of pages removed, figures fixed and questions changed."
                cadence: rolling
              tasks:
                - "Ask each reader which pages of the pack they actually use"
                - "Remove unused pages and trace any figure that looked wrong @recurring(quarterly)"
                - "Reread your five questions and update any that have changed"
            - name: Year-end reporting archive and year-on-year comparison
              description: |-
                ## Purpose
                At the end of each financial year the monthly packs, exports and final accounts belong together, along with a single page comparing this year with last. Archiving them in one dated folder protects the history if a tool is cancelled, and the comparison becomes the starting point for next year's plan.

                ## Milestones
                1. Twelve monthly packs, the year's exports and the final accounts saved in one folder.
                2. A one-page comparison of headline numbers against the previous year.
                3. Three lessons for next year's reporting written down.
                4. The folder backed up somewhere outside the reporting tool.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A year-end folder holds all twelve packs, exports and final accounts, with a one-page year-on-year comparison and three lessons."
                cadence: cyclic
              tasks:
                - "Create a dated folder for the financial year's reports"
                - "Archive the year's packs and exports and write the year-on-year page @recurring(yearly)"
                - "Write three lessons for next year's reporting"
                - "Back up the folder outside the reporting tool"
            - name: Reading your profit and loss, balance sheet and cash flow
              description: |-
                ## Purpose
                Plenty of founders run a business for years without feeling confident reading the three statements their accountant sends. Working through your own figures from last year, line by line, and keeping a short glossary in your own words makes every later report quicker to read and every conversation with the accountant more useful.

                ## Milestones
                1. Your own profit and loss read line by line, with each heading explained in a sentence.
                2. The balance sheet read, including what you owe and what is owed to you.
                3. The difference between profit and cash movement explained in your own words.
                4. Three questions about your figures answered by the accountant.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary in your own words covers your profit and loss, balance sheet and cash flow, checked with your accountant."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Print last year's profit and loss and balance sheet"
                - "Write a one-sentence explanation of every heading in your own words"
                - "Ask the agent to explain any line you cannot describe"
                - "Take three questions about your own figures to the accountant"
            - name: Why profit and the bank balance disagree
              description: |-
                ## Purpose
                A profitable month can leave less money in the bank, and a loss-making one can leave more, because of stock bought, invoices unpaid, loan repayments, tax set aside and owner drawings. Learning to walk from profit to the change in cash, using your own numbers, stops panic over the wrong figure.

                ## Milestones
                1. The difference between cash and accrual reporting understood and your software's setting checked.
                2. One month's profit reconciled to the change in the bank balance.
                3. The four or five items that usually explain the gap listed.
                4. A one-line note explaining the gap added to the monthly pack.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One month's profit is walked to the change in bank balance, with the main reconciling items listed and added to the monthly pack."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your accounting software reports on a cash or accrual basis"
                - "Set last month's profit beside last month's change in bank balance"
                - "List the items that explain the gap, such as stock, debtors and drawings"
                - "Add a line explaining the gap to the monthly pack"
            - name: What your till and online shop count as sales
              description: |-
                ## Purpose
                Sales in a till or ecommerce dashboard might be gross or net, include or exclude sales tax, shipping, tips, gift cards and refunds, and be dated by order or by payment. Knowing exactly what each tool means by sales explains why it never matches the accounts and tells you which figure to quote.

                ## Milestones
                1. The help pages for your till and shop sales reports read.
                2. Each tool's treatment of tax, discounts, shipping, tips, gift cards and refunds written down.
                3. One week of sales reconciled between the shop dashboard and the accounts.
                4. The figure to quote in reports chosen and written into the source map.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note of what each sales tool includes in its sales figure, with one week reconciled to the accounts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the help article on how your till or shop calculates its sales total"
                - "Note how tax, discounts, shipping, tips, gift cards and refunds are treated"
                - "Reconcile one week of shop sales to the accounting software"
                - "Choose the sales figure to quote and add it to the source map"
            - name: Reading payment processor payout and fee reports
              description: |-
                ## Purpose
                Card and online payment providers deduct fees, hold reserves, net off refunds and chargebacks, and pay out in batches that never match a single day's sales. Understanding the payout report shows your true fees as a share of sales and explains every deposit that lands in the bank.

                ## Milestones
                1. A payout report downloaded and each column understood.
                2. One payout traced from individual sales through fees and refunds to the bank deposit.
                3. Last month's total fees worked out as a percentage of card sales.
                4. Any chargebacks, holds or reserves listed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One payout is traced from sales to bank deposit, with last month's fees calculated as a percentage of card sales."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download last month's payout report from your payment processor"
                - "Trace one payout from its sales through fees to the bank deposit"
                - "Work out total fees as a percentage of card sales"
                - "List any chargebacks, holds or reserves on the account"
            - name: Exporting clean CSV files from your business tools
              description: |-
                ## Purpose
                Even with connectors, someone will need an export: for the accountant, a lender or a one-off question. Knowing how to pull a CSV from each tool with the right date range, time zone and columns, and to open it without dates and leading zeros being mangled, saves an afternoon of repairs every time.

                ## Milestones
                1. The export screen for each main tool found and noted.
                2. Time zone and date format settings checked in each tool.
                3. A CSV imported into a spreadsheet with dates, codes and currency intact.
                4. A short export how-to saved beside the source map.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved how-to covers export steps, date ranges and time zone settings for each main tool, tested with one clean import."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the export option in your till, shop, payment and accounting tools"
                - "Check each tool's time zone and date format settings"
                - "Import one CSV with the spreadsheet's import tool rather than double-clicking it"
                - "Write a short export how-to for each tool"
            - name: Gross margin by product or service line
              description: |-
                ## Purpose
                Total sales can grow while the business earns less, because the growth is in the lines with the thinnest margin. Working out gross margin for each product group or service, using cost of goods or direct labour, shows which lines pay for the overheads and which only keep you busy.

                ## Milestones
                1. Sales and direct costs split by line for the last three months.
                2. Gross margin worked out in money and as a percentage for each line.
                3. Lines ranked by the margin they earn, not by sales.
                4. One pricing, supplier or range decision noted from the result.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Gross margin in money and percentage is calculated for each line over three months, with one decision recorded from it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull sales by product group or service for the last three months"
                - "Match each line with its cost of goods or direct labour"
                - "Rank lines by margin earned rather than by sales"
                - "Write down one decision the ranking suggests"
            - name: Like-for-like comparisons and seasonality
              description: |-
                ## Purpose
                Comparing December with November tells a café or gift shop almost nothing, and month lengths, public holidays and the number of weekends move figures on their own. Learning to compare with the same period last year, per trading day or per week, makes it clear whether the business is actually growing.

                ## Milestones
                1. Monthly figures set against the same month last year rather than the month before.
                2. Sales per trading day calculated for months with closures or extra weekends.
                3. Known seasonal peaks and dips marked on the baseline.
                4. The monthly pack updated to show year-on-year comparisons.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The monthly pack shows each headline figure against the same period last year, with trading-day adjustments where needed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a same-month-last-year column to the monthly pack"
                - "Count the trading days in each month of the baseline"
                - "Work out sales per trading day for months with closures"
                - "Mark the business's seasonal peaks on the baseline sheet"
            - name: Reading ad platform results against real orders
              description: |-
                ## Purpose
                Each ad platform counts any sale it can link to an ad, so adding their reported conversions together often comes to more than the business actually sold. Checking platform claims against your own orders and customer source records gives a fairer view of what the ads bring in.

                ## Milestones
                1. How each ad platform counts a conversion, including its attribution window, noted.
                2. One month of platform-reported conversions set beside actual orders.
                3. The overlap or overcount between platforms estimated.
                4. The marketing tally updated to use your own figures first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One month of platform-reported conversions is compared with actual orders, with the overcount estimated and noted in the marketing tally."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the attribution window each ad platform uses by default"
                - "List last month's conversions as each platform reports them"
                - "Set them beside actual orders and new customers from your own records"
                - "Note the estimated overcount in the marketing tally"
            - name: Retiring the hand-typed sales spreadsheet
              description: |-
                ## Purpose
                Many owners still type each day's sales into a spreadsheet from the till receipt, which takes hours a month and introduces errors. Once the feeds are connected, replacing the typing with an export or connector, running both side by side for a month and then stopping removes the busiest and least reliable job in the set-up.

                ## Milestones
                1. Each column of the hand-typed sheet matched to a connected source or export.
                2. One month run in parallel, with every difference explained.
                3. The typed sheet frozen and archived.
                4. Hours saved per month noted.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A month of parallel running shows the connected source matches the hand-typed sheet, which is then archived and no longer updated."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List what the hand-typed sheet records and why"
                - "Find the connected report or export that holds the same figures"
                - "Run both for one month and explain every difference"
                - "Archive the typed sheet and stop updating it"
            - name: Payment processor clearing account with your bookkeeper
              description: |-
                ## Purpose
                When sales arrive gross from the shop but deposits arrive net of fees from the processor, the books need a clearing account to hold the difference. Setting one up with your bookkeeper, and checking it falls back to the payouts in transit each month, is what makes sales, fees and bank deposits reconcile cleanly.

                ## Milestones
                1. A clearing account set up for each payment processor.
                2. Sales, fees, refunds and payouts posting through it.
                3. The month-end balance explained by payouts still in transit.
                4. Three consecutive months where the balance clears as expected.

                ## Notes
                This is a bookkeeping change. Agree it with whoever prepares your accounts before switching any integration settings.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each payment processor has a clearing account whose month-end balance is explained by payouts in transit for three consecutive months."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your bookkeeper whether a clearing account suits your payment set-up"
                - "Set up the clearing account and map the integration to it"
                - "Check the clearing account balance matches payouts in transit @recurring(monthly:15)"
            - name: One customer list across till, shop and email tool
              description: |-
                ## Purpose
                The same customer often appears three times: once in the till, once in the online shop and once in the email tool, each with a different spelling. Choosing one list as the master and connecting or importing the others means repeat customer counts and list growth can be reported honestly.

                ## Milestones
                1. The tool that will hold the master customer list chosen.
                2. Duplicates merged by email address or phone number.
                3. New customers flowing from the till and shop into the master list.
                4. Repeat customer rate reported from the master list.

                ## Notes
                Merging lists does not change anyone's consent. Only send marketing emails to people who agreed to them, under your country's data protection rules.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One master customer list with duplicates merged, fed by the till and shop, is used to report repeat customer rate."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose which tool will hold the master customer list"
                - "Export customers from each tool and merge duplicates by email or phone"
                - "Connect the till and shop so new customers flow into the master list"
                - "Merge any new duplicates in the master list @recurring(quarterly)"
            - name: Recording where every enquiry came from
              description: |-
                ## Purpose
                Asking new customers how they heard about you is the oldest attribution method there is, and for a local business it often beats any tracking code. Adding a required source field to booking forms, enquiry forms and the till, with a short fixed list of answers, gives a monthly count of where customers really come from.

                ## Milestones
                1. A fixed list of six to eight source options agreed.
                2. A required source field added to forms, the booking tool and the till or CRM.
                3. Staff shown how to ask and record the answer.
                4. A month of source counts compared with the marketing tally.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A required enquiry source field is live on every form and booking route, with one month of counts compared against marketing spend."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree a short fixed list of ways customers find you"
                - "Add a required source field to the booking and enquiry forms"
                - "Show staff how to ask the question and record the answer"
                - "Compare a month of source counts with your marketing tally"
            - name: Cash position and upcoming bills view
              description: |-
                ## Purpose
                Payroll, rent, tax and supplier payments land on fixed dates, and the bank balance on any given morning says little about whether they can be met. A simple weekly view of cash today, money expected in and bills due over the next six weeks gives early warning without building a full forecasting model.

                ## Milestones
                1. A one-page view with cash today, expected receipts and bills due, by week.
                2. Regular bills such as rent, payroll, loans and tax listed with their dates.
                3. The view updated weekly from the bank and the debtors report.
                4. The lowest point in the next six weeks highlighted.

                ## Notes
                Keep this to one page. If the lowest point keeps falling close to zero, ask your accountant about a fuller cash forecast and your options.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page cash view is updated weekly for eight weeks, each time showing the lowest expected balance over the next six weeks."
                cadence: rolling
              tasks:
                - "List every regular bill with its usual date and amount"
                - "Set up a one-page view of cash today, receipts due and bills due by week"
                - "Update the cash view from the bank balance and debtors report @recurring(weekly:thu)"
            - name: Budget versus actual view for the year
              description: |-
                ## Purpose
                Budgets kept in a separate spreadsheet are forgotten by the third month. Loading this year's monthly budget into the accounting software, or beside the monthly pack, puts actual against plan every month and shows early which costs are running ahead.

                ## Milestones
                1. A monthly budget for sales, cost of sales and main overheads agreed.
                2. The budget loaded into the accounting software or the monthly pack.
                3. Actual against budget shown monthly, with variances over a set limit flagged.
                4. A quarterly reforecast of the rest of the year recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "This year's budget sits in the accounting software or pack, with monthly variances shown and at least one quarterly reforecast recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree a monthly budget for sales, costs and main overheads"
                - "Load the budget into the accounting software's budget feature"
                - "Set a variance limit that triggers a note in the monthly pack"
                - "Reforecast the rest of the year against actuals so far @recurring(quarterly)"
            - name: Automating the monthly report pack
              description: |-
                ## Purpose
                Once the pack layout has settled for three months, most of its figures can refresh themselves from the accounting software and connected tools rather than being copied in. Automating the repeatable parts cuts production time and leaves the owner's hour for the commentary.

                ## Milestones
                1. Each figure in the pack marked as automatic, export-based or manual.
                2. Automatic figures linked to a live connector or scheduled report.
                3. One month produced with the automated pack and checked against the manual version.
                4. Time to produce the pack recorded before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The monthly pack's repeatable figures refresh from connected sources, with one month checked against the manual version and time saved recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Mark each figure in the pack as automatic, export or manual"
                - "Set up scheduled reports or connectors for the repeatable figures"
                - "Produce one month both ways and compare the results"
                - "Record how long the pack took before and after"
            - name: Year-end figures pack for the accountant
              description: |-
                ## Purpose
                Accountants charge more and take longer when year-end records arrive incomplete, and missing figures turn into estimates on the tax return. Preparing reconciled bank accounts, debtor and creditor lists, a stock count and asset purchases before the deadline your accountant sets gives them what they need first time.

                ## Milestones
                1. The accountant's year-end checklist requested and dates agreed.
                2. All bank, card and payment accounts reconciled to the year-end date.
                3. Debtors, creditors, stock count and asset purchases listed.
                4. The pack sent before the accountant's deadline and their questions answered.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A year-end pack with reconciled accounts and debtor, creditor, stock and asset lists is sent to the accountant before their deadline."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask your accountant for their year-end checklist and deadline"
                - "Reconcile every bank, card and payment account to the year-end date"
                - "Count stock and list debtors, creditors and asset purchases"
                - "Put the accountant's year-end deadline in the calendar each year @recurring(yearly)"
            - name: Figures pack for a loan or grant application
              description: |-
                ## Purpose
                Lenders and grant funders usually ask for the same handful of documents: recent accounts, management figures for the current year, bank statements, a debtors list and a short forecast. Assembling them from your reporting set-up in one folder, all to the same dates, makes the application faster and shows a business that knows its numbers.

                ## Milestones
                1. The lender's or funder's document list confirmed.
                2. Management figures for the current year produced to a stated date.
                3. Bank statements, debtors list and latest accounts gathered to matching dates.
                4. Every figure in the application traced back to the folder.

                ## Notes
                Any forecast is yours to defend in questions. Ask your accountant to review it before you submit.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A dated folder holds every document the lender or funder listed, with each application figure traced to it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Get the full document list from the lender or funder"
                - "Produce year-to-date management figures to a stated date"
                - "Gather bank statements, the debtors list and latest accounts to matching dates"
                - "Check every number in the application against the folder"
            - name: Peak season daily sales tracker
              description: |-
                ## Purpose
                In the weeks that make the year, such as the holiday season, a festival, carnival or a summer peak, waiting for the monthly pack is too slow. A daily tracker set against the same days last year, plus stock on the best sellers, lets you react to a slow weekend or a sell-out within days.

                ## Milestones
                1. The peak period's dates and the matching days last year identified.
                2. A daily tracker of sales, orders and best-seller stock built.
                3. The tracker updated every trading day of the peak.
                4. A one-page review of the peak written within two weeks of its end.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A daily peak tracker is completed for every trading day of the peak, followed by a written review within two weeks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Mark the peak dates and pull the same days from last year"
                - "Build a daily tracker for sales, orders and best-seller stock"
                - "Update the tracker at the close of each trading day of the peak"
                - "Write a one-page review of the peak within two weeks"
            - name: Switching accounting or till software without losing history
              description: |-
                ## Purpose
                Moving to new accounting, till or ecommerce software is when reporting history most often disappears, because the old account is cancelled before everything has been exported. Planning the switch at a period end, with full exports, agreed opening balances and a parallel month, keeps year-on-year reports intact.

                ## Milestones
                1. The switch date set at a month end or year end.
                2. Full exports of transactions, customers, products and reports saved from the old tool.
                3. Opening balances in the new tool agreed with the bookkeeper.
                4. One month run in both tools with matching totals.
                5. The old tool cancelled only after the exports are checked.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new tool is live from a period end with agreed opening balances, a matching parallel month and full exports from the old tool archived."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a month end or year end for the switch"
                - "Export every transaction, customer, product and report from the old tool"
                - "Agree opening balances in the new tool with your bookkeeper"
                - "Run one month in both tools before cancelling the old one"
            - name: Monthly reporting for a one-person business in an hour
              description: |-
                ## Purpose
                Sole traders and freelancers have no bookkeeper or manager, and an elaborate set-up will be abandoned in the first busy month. One hour on a fixed day each month to reconcile the bank, read a profit figure, check unpaid invoices and set aside tax is enough to know where the business stands.

                ## Milestones
                1. A one-hour monthly slot fixed in the calendar.
                2. A one-page checklist covering bank, profit, unpaid invoices and tax set aside.
                3. Six months of the routine completed.
                4. The tax set-aside amount checked once with an accountant.

                ## Notes
                Ask an accountant what share of income to set aside for tax. It depends on your country, your income and how the business is structured.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly one-hour routines are completed, each recording profit, unpaid invoices and the amount set aside for tax."
                cadence: rolling
              tasks:
                - "Write a one-page monthly checklist for bank, profit, invoices and tax"
                - "Run the one-hour monthly numbers routine @recurring(monthly:28)"
                - "Ask an accountant once how much to set aside for tax"
            - name: Reporting for a shop that sells in store and online
              description: |-
                ## Purpose
                Shops trading in store and online often have two sales reports, two stock counts and two customer lists that never quite agree. Bringing both channels into one sales-by-channel view, with shared stock and product codes, shows which channel is growing, which carries the margin and how shoppers move between them.

                ## Milestones
                1. Product codes matched between the till and the online shop.
                2. Sales by channel shown side by side in the monthly pack.
                3. Stock held in one system or synced between both.
                4. Margin by channel calculated after fees and shipping.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The monthly pack shows sales and margin by channel from matched product codes, with stock held in or synced to one system."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compare product codes in the till and the online shop and fix mismatches"
                - "Add a sales by channel page to the monthly pack"
                - "Decide which system holds the master stock count"
                - "Work out margin by channel after fees and shipping"
            - name: Job profitability reporting for a service business
              description: |-
                ## Purpose
                Builders, agencies, cleaners and consultants make or lose money one job at a time, and a monthly profit figure hides which jobs and clients did which. Tagging time, materials and subcontractor costs to each job in the accounting or job management tool gives a margin per job that sharpens the next quote.

                ## Milestones
                1. Every job given a code or tracking category in the accounting or job tool.
                2. Time, materials and subcontractor costs coded to jobs.
                3. A monthly report of quoted price against actual cost for each finished job.
                4. The three least profitable job types identified with a reason.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three months of finished jobs show quoted price against actual cost, with the least profitable job types identified."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set up job codes or tracking categories in the accounting software"
                - "Code time, materials and subcontractor bills to each job"
                - "Review quoted price against actual cost for finished jobs @recurring(monthly:25)"
                - "Identify the three least profitable job types and why"
            - name: Covers, spend per head and food cost for a restaurant
              description: |-
                ## Purpose
                Hospitality runs on a few numbers the accounts do not show: covers, average spend per head, food and drink cost as a share of sales, and staff cost against takings. Pulling these from the till, supplier invoices and the rota each week shows a margin problem within days rather than at quarter end.

                ## Milestones
                1. Covers and spend per head taken from the till each week.
                2. Food and drink purchases totalled from supplier invoices.
                3. Food cost and staff cost as a percentage of sales worked out weekly.
                4. Eight weeks of figures with a stock count at the start and the end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of covers, spend per head, food cost and staff cost percentages are recorded, bounded by two stock counts."
                cadence: rolling
              tasks:
                - "Find the covers and average spend report in your till"
                - "Total the week's food and drink supplier invoices"
                - "Record covers, spend per head, food cost and staff cost percentages @recurring(weekly:tue)"
                - "Count stock at the start and end of the eight weeks"
            - name: Founder metrics for a monthly investor update
              description: |-
                ## Purpose
                Founders who have raised money from angels or a seed fund are expected to send a regular update, and investors notice when the numbers change shape from one month to the next. Fixing the five or six metrics in each update, defined and sourced the same way every time, makes updates quicker to write and easier to trust.

                ## Milestones
                1. Five or six metrics chosen, such as revenue, monthly burn, runway, customers and one product figure.
                2. Each metric defined and sourced in the source map.
                3. A standard update layout with figures, highlights, problems and asks.
                4. Six updates sent on the same day each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Six monthly investor updates are sent on a consistent date, each using the same defined metrics and layout."
                cadence: rolling
              tasks:
                - "Choose the five or six metrics every update will show"
                - "Write each metric's definition and source into the source map"
                - "Draft a standard update layout with figures, highlights, problems and asks"
                - "Pull the metrics and send the investor update @recurring(monthly:4)"
            - name: Handing the reporting routine to a bookkeeper
              description: |-
                ## Purpose
                Once the owner is spending more than a few hours a month on reconciliations and reports, a part-time bookkeeper usually costs less than the owner's own time. Handing over with a written routine, the source map and clear deadlines keeps the reports in the same shape and moves the owner to reading and deciding.

                ## Milestones
                1. A bookkeeper chosen with references and experience in your accounting software.
                2. The routine, source map and pack layout handed over in writing.
                3. Their own user access set up without sharing the owner's login.
                4. Monthly check-ins held to review the pack and open questions.

                ## Notes
                Start from the **Vendor** template to keep their agreement, rates and contact details in one place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A bookkeeper produces the monthly pack from a written routine using their own login, with monthly check-ins held for three months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask two other local business owners which bookkeepers they use"
                - "Write down the routine, deadlines and pack layout to hand over"
                - "Invite the bookkeeper as their own user in the accounting software"
                - "Review the pack and open questions with the bookkeeper @recurring(monthly:18)"
            - name: Partner and staff views with the right access
              description: |-
                ## Purpose
                Business partners, managers and key staff each need some of the numbers but rarely all of them, and payroll or owner drawings are often private. Setting up a view for each group, with access limited inside the tool rather than by trust, lets people use the figures without seeing what they should not.

                ## Milestones
                1. The figures each partner, manager or staff group needs listed.
                2. Private figures such as payroll and drawings identified.
                3. Read-only users or shared views set up with restricted permissions.
                4. Each person shown their view and how to read it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each partner, manager or staff group has a read-only view of the figures they need, with payroll and drawings restricted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the figures each partner, manager or staff group needs"
                - "Mark the figures that must stay private, such as payroll"
                - "Set up read-only users or shared views with restricted access"
                - "Walk each person through their view in fifteen minutes"
            - name: Contribution per order after fees, shipping and packaging
              description: |-
                ## Purpose
                Online sellers often discover that an order which looks profitable at gross margin loses money once payment fees, shipping, packaging, returns and marketplace commission come off. Calculating contribution per order by channel and basket size shows the minimum order value and free-shipping threshold the business can actually afford.

                ## Milestones
                1. Average fees, shipping, packaging and returns cost per order worked out.
                2. Contribution per order calculated for each sales channel.
                3. Contribution compared across small, medium and large baskets.
                4. Minimum order value and free-shipping threshold reviewed against the result.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Contribution per order is calculated by channel and basket size, and the free-shipping threshold is reviewed against it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Work out average payment, shipping and packaging cost per order"
                - "Add returns and marketplace commission for each channel"
                - "Calculate contribution per order for small, medium and large baskets"
                - "Review your free-shipping threshold against the result"
            - name: Consolidated reporting across two or more locations
              description: |-
                ## Purpose
                Opening a second shop, clinic or branch doubles the reporting unless it is planned: each site needs its own figures, and the owner needs the total without double-counting stock transfers or shared costs. Tracking categories or separate entities, a rule for splitting shared overheads and a combined monthly page give both views from one set of books.

                ## Milestones
                1. Each location set up as a tracking category or separate entity on your accountant's advice.
                2. A rule agreed for splitting shared costs such as software, marketing and management time.
                3. Transfers of stock or staff between locations recorded without double-counting.
                4. A monthly page showing each location's profit and the total.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The monthly pack shows each location's profit and the combined total, using an agreed split for shared costs."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your accountant whether locations should be tracking categories or entities"
                - "Agree how shared costs are split between locations"
                - "Set up location tracking on sales, costs and payroll"
                - "Produce the location and total profit page @recurring(monthly:9)"
            - name: Syncing all your tools into one small database
              description: |-
                ## Purpose
                When a business runs on six or more tools and its questions cross them, such as marketing spend against repeat customers by product, exports and pasted sheets stop coping. A managed connector service that copies each tool into one small cloud database, with a dashboard on top, gives one place to answer cross-tool questions without hiring a data team.

                ## Milestones
                1. The cross-tool questions that justify the set-up written down.
                2. A connector service and database chosen within a stated monthly budget.
                3. The main tools syncing on a daily schedule.
                4. One dashboard answering a cross-tool question, checked against the accounts.

                ## Notes
                Usage-based pricing can climb quietly as row counts grow. Set a spending alert on the first day and check usage monthly.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The main business tools sync daily into one database within a stated budget, and one cross-tool dashboard reconciles to the accounts."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write down three questions that need data from more than one tool"
                - "Compare two connector services on supported tools and monthly cost"
                - "Connect the main tools to one cloud database on a daily schedule"
                - "Check the first cross-tool dashboard against the accounting figures"
            - name: Clean financial history ready for a business sale
              description: |-
                ## Purpose
                Buyers of a small business, and their advisers, ask for three years of accounts, monthly management figures, customer concentration and margin by line, and every unexplained number lowers what they will pay. Preparing that history a year or two before any sale, with your accountant, turns ordinary reporting into evidence of value.

                ## Milestones
                1. Three years of accounts and monthly management figures in one folder.
                2. One-off and owner-related costs listed for your adviser to review.
                3. Revenue by customer and by line shown, including the share from the top five customers.
                4. Gaps or unexplained figures fixed or documented.

                ## Notes
                Valuation and deal terms are for your accountant or a business broker. This project prepares the records, not the price.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A folder holds three years of accounts and monthly figures, customer concentration and margin by line, reviewed by your accountant or adviser."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Gather three years of accounts and monthly management packs"
                - "List one-off and owner-related costs for your adviser"
                - "Show revenue by customer and the share from the top five"
                - "Ask your accountant which gaps a buyer would question"
---

# Small Business Reporting Setup

This area is for owners and founders who want a few reliable numbers without hiring an analyst: what sold, what it earned, what cash is left and where customers came from. It starts with foundations (the questions, a map of your tools, owner access, headline numbers, a cleaner chart of accounts and connected feeds), moves through the daily, weekly and monthly routines, then the skills for reading statements, payouts and ad reports, improvements such as a clearing account and a budget view, dated packs for the accountant or a lender, set-ups for sole traders, shops, service firms, cafés and funded founders, and finally specialist work like contribution per order, multi-site reporting and preparing for a sale.

What repeats is a nightly till close-out, a Monday numbers check, a Wednesday debtors look, a Thursday cash view and a Friday bank reconciliation, then the monthly pack, marketing tally, stock and connection checks, with quarterly prunes and a yearly archive. The Purchase decision, Operational checklist, Metrics log, Month-end close and Vendor templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
