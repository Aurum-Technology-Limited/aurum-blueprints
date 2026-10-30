---
id: finance-accounting.product-margin-analysis
name: Product Margin Analysis
description: "Clean revenue and unit costs, gross margin by product, service line and customer, monthly refreshes and reviews, and the repricing and discontinue decisions that follow from them."
category: business
version: 1.0.0
tags: [finance-accounting, product-margin-analysis, small-business, manager, founder, gross-margin, pricing, customer-profitability]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - vendor
    - board-meeting
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Margin Analysis
          description: "Analysing gross margin by product, service line or customer to find what is profitable, what to reprice and what to stop selling."
          projects:
            - name: Three decisions the margin analysis must inform
              description: |-
                ## Purpose
                Margin analysis without a decision attached turns into a large spreadsheet nobody opens twice. Naming the three choices you actually face this year, such as which lines to reprice, which customers to renegotiate and which products to drop, tells you what level of detail is needed and what can be left out.

                ## Milestones
                1. Three named decisions written down, each with the person who will make it.
                2. For each decision, the margin figure that would change the answer noted.
                3. The level of detail needed agreed: product family, single item, customer or channel.
                4. A date by which each decision should be made recorded.

                ## Notes
                Resist adding a fourth. The first pass of margin work is always slower than expected, and three answered questions beat ten half-answered ones.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page note lists three margin decisions, each with an owner, a deciding figure and a target date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the pricing or range questions you have put off this year"
                - "Pick the three that would move profit most if answered"
                - "Note the margin figure that would tip each decision one way or the other"
                - "Agree an owner and a decision date for each of the three"
            - name: Agreed definition of gross margin for the business
              description: |-
                ## Purpose
                Ask three people what goes into cost of sales and you will often get three answers: one includes inbound freight and packaging, another adds card fees, a third counts direct labour. Writing one definition, agreed with your accountant, stops arguments about whose number is right and makes every later comparison fair.

                ## Milestones
                1. A list of every cost that could sit in cost of sales, each marked in or out.
                2. The treatment of freight, packaging, payment fees, direct labour and returns decided.
                3. The difference between margin and markup written in one worked example.
                4. The definition checked with your accountant against how the statutory accounts are prepared.

                ## Notes
                Your management definition can be wider than the statutory one, for example by including payment fees, as long as the gap is written down and explained wherever both numbers appear.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written gross margin definition marks each cost line in or out, includes a margin versus markup example and has been confirmed by the accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every cost line that currently lands in cost of sales"
                - "Mark freight, packaging, payment fees and direct labour as in or out"
                - "Write one worked example showing margin and markup on the same item"
                - "Send the draft definition to your accountant for comment"
            - name: Product family structure for margin reporting
              description: |-
                ## Purpose
                Two hundred individual items are too many to discuss and three categories are too few to act on. Grouping what you sell into eight to fifteen families, each with a clear owner, gives a level where margin patterns become visible and decisions can be made in a meeting.

                ## Milestones
                1. Every active product or service mapped to exactly one family.
                2. Between eight and fifteen families, each with a named owner.
                3. The family code held as a field in the item list, not only in a spreadsheet.
                4. Rules written for where new items go when they are added.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All active items carry a family code in the item list, with eight to fifteen families and a written rule for new items."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the full active item list with last year's sales value"
                - "Draft eight to fifteen families that a buyer or manager would recognise"
                - "Add a family field to the item list and fill it for every item"
                - "Write a two-line rule for assigning new items to a family"
            - name: Unit cost sheet for the top twenty sellers
              description: |-
                ## Purpose
                Most margin errors start with a unit cost that is two years old or missing the freight and duty. Building a current landed cost for the twenty items that make up most of your revenue covers the bulk of the money with a fraction of the effort of costing everything.

                ## Milestones
                1. The twenty items with the highest sales value identified from last year.
                2. Each item costed with purchase price, inbound freight, duty, packaging and any direct labour.
                3. The source and date of every cost figure recorded beside it.
                4. Differences of more than five percent from the system cost flagged for correction.

                ## Notes
                This sheet is for margin decisions. How stock is valued in the accounts is a separate question for your accountant, and the two figures can legitimately differ.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A unit cost sheet covers the twenty highest-revenue items, with dated sources for every cost element and system differences flagged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Rank last year's items by sales value and take the top twenty"
                - "Pull the latest supplier invoice for each of the twenty"
                - "Add freight, duty and packaging per unit from recent shipments"
                - "Compare each landed cost with the cost held in the system"
            - name: Realised price after discounts, rebates and returns
              description: |-
                ## Purpose
                Margin worked out on list price flatters almost every business, because the price customers actually pay is lower once discounts, free shipping, rebates and refunds are taken off. Building realised price per product for the last twelve months shows how much of the list price really arrives.

                ## Milestones
                1. Sales lines exported with list price, invoiced price and discount for twelve months.
                2. Credit notes, refunds and rebates matched back to the products they relate to.
                3. A realised price per unit calculated for each product family.
                4. The gap between list and realised price shown as a percentage for each family.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table shows list price, realised price and the percentage gap for every product family over the last twelve months."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export twelve months of sales lines with discount fields included"
                - "Match credit notes and refunds to the original product lines"
                - "Calculate realised price per unit for each product family"
                - "Highlight the three families with the widest list to realised gap"
            - name: First twelve-month gross margin table by product
              description: |-
                ## Purpose
                Once revenue and costs are clean, the first full table usually surprises someone: a best seller turns out to be thin, a forgotten line turns out to carry the business. Ranking every product family by margin cash and margin percentage for twelve months gives the baseline every later review is measured against.

                ## Milestones
                1. Revenue, cost of sales, margin cash and margin percentage shown for every family.
                2. Families ranked by margin cash, not only by percentage.
                3. The table reconciled to total gross profit in the accounts within an explained difference.
                4. The five most surprising results written up in a short note.

                ## Notes
                Start from the **Metrics log** template to hold the baseline figures you will compare against each month.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month margin table by product family reconciles to gross profit in the accounts and is accompanied by a note on five key findings."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Combine realised revenue and unit costs into one table by family"
                - "Rank the families by margin cash and by margin percentage"
                - "Reconcile the table total to gross profit in the accounts"
                - "Ask the agent to draft a short note on the five biggest surprises"
            - name: Gross margin by customer baseline
              description: |-
                ## Purpose
                Two customers buying the same total can leave very different profit, depending on what they buy, the discounts they negotiated and how often they return goods. A baseline of margin by customer for the top thirty accounts shows who is really paying the bills and who only looks big.

                ## Milestones
                1. The thirty largest customers by revenue listed for the last twelve months.
                2. Realised revenue, cost of sales and margin calculated for each.
                3. Customers ranked by margin cash alongside their revenue rank.
                4. Customers whose margin percentage is less than half the business average flagged.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked table shows margin cash and percentage for the thirty largest customers, with those below half the average margin flagged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export twelve months of sales by customer and product"
                - "Apply the unit cost sheet to each customer's product mix"
                - "Rank customers by margin cash beside their revenue rank"
                - "Flag accounts below half the average margin percentage"
            - name: Margin data source and extract map
              description: |-
                ## Purpose
                Margin figures pull from sales lines, the item list, supplier invoices, credit notes and sometimes a separate shop or marketplace system. Mapping where each field lives, who can export it and how often it changes means the monthly refresh takes an hour instead of a day.

                ## Milestones
                1. Every field the margin table needs listed with the system it comes from.
                2. Export steps or saved reports written down for each system.
                3. Fields that are entered by hand or kept outside any system identified.
                4. One person named as owner of each data source.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A data map names the system, export steps and owner for every field the margin table uses."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every field the margin table uses"
                - "Note the system and saved report each field comes from"
                - "Write click-by-click export steps for the sales line report"
                - "Name an owner for each data source and tell them"
            - name: Margin data quality check
              description: |-
                ## Purpose
                Zero costs, duplicated items, sales coded to a catch-all product and credit notes posted without a product all distort margin far more than any pricing decision. A short check before every refresh catches the errors that would otherwise lead to repricing a product because of a typo.

                ## Milestones
                1. A checklist of the six commonest data errors written.
                2. Items with zero or missing cost listed and fixed.
                3. Sales posted to miscellaneous or catch-all items measured as a share of revenue.
                4. The check completed before each monthly refresh for three months running.

                ## Notes
                Any line showing a margin above 90 percent or below zero is more often a data error than a real result. Check it before you discuss it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The data quality check has been run before three consecutive monthly refreshes, with zero-cost items and catch-all sales under an agreed limit."
                cadence: rolling
              tasks:
                - "Write the six-point data checklist for margin figures"
                - "List every active item with zero or blank cost"
                - "Measure sales posted to catch-all items this month"
                - "Run the data checklist before the monthly refresh @recurring(monthly:5)"
            - name: Monthly product margin refresh
              description: |-
                ## Purpose
                Supplier prices, discounts and mix move every month, so a margin table built once goes stale within a quarter. A fixed monthly refresh, a week after the books close, keeps the figures current and shows trends early enough to act before the year end.

                ## Milestones
                1. A refresh date fixed each month after the books are closed.
                2. The margin table updated with the month and a rolling twelve months.
                3. Families whose margin moved by more than two points highlighted.
                4. Six consecutive monthly refreshes completed on time.

                ## Notes
                Start from the **Metrics log** template and keep one row per family per month, so trends are visible without rebuilding anything.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly margin refreshes are completed within ten days of each month close, each with movements over two points highlighted."
                cadence: rolling
              tasks:
                - "Fix the monthly refresh date in the calendar"
                - "Refresh the margin table with last month's figures @recurring(monthly:8)"
                - "Highlight any family whose margin moved more than two points"
                - "Send the one-page summary to the people who own the moving lines"
            - name: Supplier cost change log
              description: |-
                ## Purpose
                Supplier increases often arrive as a line in an email or a new price list nobody reads, and selling prices stay where they were for months. Logging every cost change with its date and the products it touches turns margin erosion into something you see the week it happens.

                ## Milestones
                1. A log with supplier, item, old cost, new cost, effective date and selling price impact.
                2. All cost changes from the last six months entered.
                3. Each change marked as absorbed, passed on or under negotiation.
                4. The log checked monthly against new supplier invoices.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every supplier cost change in the last six months is logged with its effective date and a recorded decision to absorb, pass on or negotiate."
                cadence: rolling
              tasks:
                - "Set up the cost change log with the six agreed columns"
                - "Enter supplier price changes from the last six months"
                - "Mark each change as absorbed, passed on or under negotiation"
                - "Compare new supplier invoices with the log @recurring(monthly:15)"
            - name: Quarterly margin league table review
              description: |-
                ## Purpose
                Monthly figures are noisy, but a quarterly sitting with the people who own products, purchasing and sales turns the numbers into decisions. Ranking families top to bottom and agreeing one action for each of the bottom five keeps the review short and accountable.

                ## Milestones
                1. A quarterly meeting in the calendar with product, purchasing and sales owners.
                2. A league table of families by margin cash and percentage circulated two days before.
                3. One owned action agreed for each of the bottom five families.
                4. Last quarter's actions reviewed at the start of each meeting.

                ## Notes
                Start from the **Meeting notes** template so actions and owners carry from one quarter to the next.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews held in a year, each recording an owned action for the bottom five families and the status of the last quarter's actions."
                cadence: cyclic
              tasks:
                - "Book the first quarterly margin review with the line owners"
                - "Circulate the league table two days before each review @recurring(quarterly)"
                - "Agree one action and owner for each bottom-five family"
                - "Open each review with the status of last quarter's actions"
            - name: Weekly discount and price override watch
              description: |-
                ## Purpose
                Most margin leaks through small decisions made at the till, on the phone or in a quote: an extra five percent here, free delivery there. A weekly list of discounts above the usual level and manual price overrides shows who is giving what away, while the order is still recent enough to ask about.

                ## Milestones
                1. A saved report listing discounts above the normal level and manual price changes.
                2. The report reviewed every week with the totals by salesperson or channel.
                3. Repeated overrides discussed with the person responsible.
                4. Weekly discount value tracked as a share of revenue for three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly override report has been reviewed for twelve weeks, with discount value as a share of revenue tracked across the period."
                cadence: rolling
              tasks:
                - "Build a saved report of above-normal discounts and price overrides"
                - "Review the override report with totals by person @recurring(weekly:mon)"
                - "Talk to anyone who appears on the list three weeks running"
                - "Chart weekly discount value as a share of revenue"
            - name: Negative-margin order alert
              description: |-
                ## Purpose
                Every business ships some orders at a loss without knowing: a wrong price, a free sample invoiced at zero, a heavy item sent with free delivery. A weekly scan for orders whose margin fell below zero catches these while they can still be corrected or recharged.

                ## Milestones
                1. A rule defining a negative-margin order, including delivery and payment fees where known.
                2. A weekly scan of the past week's orders against the rule.
                3. Each loss-making order traced to a cause: price, cost, delivery or data error.
                4. Repeat causes fixed at source rather than order by order.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly scans have been completed, with every negative-margin order given a cause and repeat causes fixed in prices, costs or delivery rules."
                cadence: rolling
              tasks:
                - "Write the rule for what counts as a negative-margin order"
                - "Scan last week's orders for margins below zero @recurring(weekly:thu)"
                - "Record the cause of each loss-making order"
                - "Fix the most common cause in the price list or delivery rules"
            - name: Quarterly customer profitability review
              description: |-
                ## Purpose
                Customer margin changes as buyers shift their mix, negotiate new terms or start returning more. Reviewing the top thirty accounts each quarter, before account managers plan their next conversations, means pricing and terms are discussed with evidence rather than instinct.

                ## Milestones
                1. The customer margin table refreshed for the latest quarter.
                2. Customers whose margin fell by more than three points listed with the reason.
                3. A talking point for each listed customer handed to the account manager.
                4. Outcomes of last quarter's conversations recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly customer reviews completed in a year, each listing customers with falling margin and the outcome of conversations held."
                cadence: cyclic
              tasks:
                - "Refresh customer margins for the latest quarter @recurring(quarterly)"
                - "List customers whose margin fell more than three points"
                - "Write one talking point per listed customer for the account manager"
                - "Record what came of last quarter's customer conversations"
            - name: Yearly unit cost reset before the price review
              description: |-
                ## Purpose
                Unit costs in the system drift as suppliers, freight rates and exchange rates move, and prices set on last year's costs lock in last year's margin. Resetting costs for the main items once a year, a month before prices are reviewed, puts the annual price decision on current numbers.

                ## Milestones
                1. The reset timed for a month before the annual price review.
                2. Current landed costs gathered for every item in the top eighty percent of revenue.
                3. System costs updated and the old figures kept for comparison.
                4. The margin impact of the new costs shown by family before prices are discussed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "System unit costs for items making up eighty percent of revenue were reset within the last year, with the margin impact shown by family."
                cadence: cyclic
              tasks:
                - "Decide the month of the yearly cost reset"
                - "Gather current landed costs for the top eighty percent of revenue"
                - "Update system costs and keep the old figures alongside"
                - "Run the full unit cost reset a month before the price review @recurring(yearly)"
            - name: Returns and credit note margin leakage
              description: |-
                ## Purpose
                Returns cost more than the refund: there is outbound and return postage, handling time and stock that cannot be resold at full price. Tracking returns and credit notes by product each month shows which lines lose most of their margin after the sale and where a design, description or packaging fix would pay back.

                ## Milestones
                1. Returns and credit notes coded to the product and a reason each month.
                2. The full cost of a return estimated, including postage, handling and write-down.
                3. Return rate and margin lost shown by product family.
                4. The two worst families given a specific fix to try.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Return rate and margin lost are reported by product family each month, and fixes are in place for the two worst families."
                cadence: rolling
              tasks:
                - "Add a product and reason code to every credit note"
                - "Estimate the full cost of one typical return"
                - "Report return rate and margin lost by family @recurring(monthly:20)"
                - "Choose one fix for each of the two worst families"
            - name: Margin floor register by product family
              description: |-
                ## Purpose
                Without a written minimum, every discount request is argued from scratch and the persuasive customer wins. A register of the lowest acceptable margin for each family, with who can approve going below it, gives sales a clear line and the owner fewer late-night quote approvals.

                ## Milestones
                1. A minimum acceptable margin percentage set for each product family.
                2. An approval level named for quotes that fall below each floor.
                3. The floors built into the quoting tool or price list where possible.
                4. Floors reviewed each quarter against cost changes.

                ## Notes
                Set floors on margin after all discounts and delivery, not on list price, or the register will be met on paper and missed in practice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A margin floor register covers every product family with an approval level for exceptions and has been reviewed in the last quarter."
                cadence: rolling
              tasks:
                - "Propose a margin floor for each product family"
                - "Agree who may approve a quote below each floor"
                - "Add the floors to the quoting tool or price list"
                - "Review the floors against recent cost changes @recurring(quarterly)"
            - name: Fixed, variable and stepped costs in product margins
              description: |-
                ## Purpose
                Whether a product is worth keeping depends partly on which of its costs would actually disappear if you stopped selling it. Learning to separate costs that move with each unit from those that move in steps, like an extra shift, and those that do not move at all, prevents dropping a line that was quietly covering fixed costs.

                ## Milestones
                1. The three cost types explained in your own words with an example from the business.
                2. Cost of sales lines for the top five families classified by type.
                3. One product decision from the past re-examined with the classification.
                4. A short reference note saved for the next range review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reference note classifies the cost lines of the top five families as fixed, variable or stepped, with one past decision re-examined."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a management accounting chapter on cost behaviour"
                - "Classify the cost lines of your top five families by type"
                - "Re-examine one past range decision using the classification"
                - "Save a one-page cost behaviour reference with the margin files"
            - name: Price, volume and mix variance analysis
              description: |-
                ## Purpose
                When gross profit moves, the question is always why: did prices change, did you sell more or less, or did customers buy a different mix? Learning to split a margin change into price, volume, mix and cost effects turns a vague answer into one owners and boards can act on.

                ## Milestones
                1. The four effects defined with a simple two-product worked example.
                2. Last year's change in gross profit split into price, volume, mix and cost.
                3. The split checked to add back to the total change.
                4. A template saved so the analysis can be rerun each quarter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Last year's gross profit change has been split into price, volume, mix and cost effects that add back to the total, using a saved reusable template."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Work through a two-product price, volume and mix example by hand"
                - "Apply the method to last year's gross profit change"
                - "Check that the four effects add back to the total"
                - "Save the workings as a reusable quarterly template"
            - name: Cumulative profit curve of products and customers
              description: |-
                ## Purpose
                In many businesses the most profitable fifth of products earns well over the total profit, and the rest give some of it back. Drawing the cumulative profit curve, sometimes called a whale curve, shows how high the peak goes and how much the tail costs, which is the clearest picture you can show an owner.

                ## Milestones
                1. Products sorted from highest to lowest margin cash.
                2. Cumulative margin plotted against the share of products.
                3. The peak height and the point where the curve turns down recorded.
                4. The same curve drawn for customers.

                ## Notes
                The curve is only as good as the costs behind it. If customer-specific costs such as delivery are left out, the tail looks smaller than it is.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Cumulative profit curves for products and customers exist, each with the peak height and turning point recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sort products from highest to lowest margin cash"
                - "Plot cumulative margin against the share of products"
                - "Note the peak height and the turning point"
                - "Repeat the curve for customers"
            - name: Margin percentage versus margin cash in decisions
              description: |-
                ## Purpose
                A sixty percent margin on a product that sells ten a year pays fewer bills than a fifteen percent margin on one that sells ten thousand. Practising both views, and knowing which one each decision needs, stops the common mistake of chasing high percentages while the cash contribution shrinks.

                ## Milestones
                1. The top ten families ranked by percentage and by cash side by side.
                2. Families that rank very differently on the two views identified.
                3. A rule of thumb written for which view each common decision uses.
                4. The rule shared with whoever prepares quotes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A side-by-side ranking by margin percentage and margin cash exists, with a written rule for which view each type of decision uses."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rank the top ten families by margin percentage and by cash"
                - "Circle the families whose rank differs most between the views"
                - "Write which view repricing, range and quoting decisions should use"
                - "Walk the quoting team through the two rankings"
            - name: Price sensitivity basics for repricing
              description: |-
                ## Purpose
                Raising a price by five percent only helps if you do not lose more than a certain share of volume, and that break-even share is easy to calculate but rarely known. Learning break-even volume and reading past price changes for evidence of how customers reacted makes the next repricing a measured bet.

                ## Milestones
                1. The break-even volume formula for a price change understood and written down.
                2. Break-even volume loss calculated for a five and ten percent rise on three families.
                3. Two past price changes examined for what happened to volume afterwards.
                4. A short note on which families look price-sensitive and which do not.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Break-even volume losses for five and ten percent rises have been calculated for three families, alongside evidence from two past price changes."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Learn the break-even volume formula for a price change"
                - "Calculate break-even volume loss for three families at two price rises"
                - "Look at volume before and after two past price changes"
                - "Write a note on which families appear price-sensitive"
            - name: Spreadsheet skills for margin work
              description: |-
                ## Purpose
                Most margin analysis in small and mid-sized businesses lives in a spreadsheet, and slow or fragile workbooks are why refreshes get skipped. A few specific skills, such as pivot tables, lookup functions, structured tables and a separate inputs tab, cut the monthly refresh time and the error rate together.

                ## Milestones
                1. Pivot tables used to summarise sales lines by family and customer.
                2. Lookup functions used to bring unit costs onto sales lines.
                3. The margin workbook rebuilt with separate inputs, workings and output tabs.
                4. A refresh completed in under an hour using the rebuilt workbook.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The margin workbook has separate inputs, workings and output tabs and a monthly refresh has been completed in under an hour."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Complete a short online lesson on pivot tables"
                - "Practise a lookup that brings unit cost onto each sales line"
                - "Split the margin workbook into inputs, workings and output tabs"
                - "Time one full refresh with the rebuilt workbook"
            - name: Cost-to-serve for customer margin
              description: |-
                ## Purpose
                Gross margin by customer ignores the costs that differ by customer: small frequent orders, rush deliveries, special packaging, long payment terms and heavy support. Learning to estimate a handful of these drivers shows why a customer with a decent gross margin can still be a poor account, without building a full costing system.

                ## Milestones
                1. Four or five cost-to-serve drivers chosen, such as order count, delivery type and support time.
                2. A rough cost per driver estimated from last year's figures.
                3. Cost-to-serve applied to the top thirty customers.
                4. Customers whose ranking drops sharply after cost-to-serve listed.

                ## Notes
                Keep this to customer-specific costs. Spreading general overheads across customers is a different exercise and tends to hide rather than reveal the differences.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four or five cost-to-serve drivers have been costed and applied to the top thirty customers, with the accounts that fall most in ranking listed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose four or five drivers that vary most between customers"
                - "Estimate a cost per order, delivery and support hour from last year"
                - "Apply the drivers to the top thirty customers"
                - "List customers whose ranking falls most after cost-to-serve"
            - name: Repricing the lowest-margin products
              description: |-
                ## Purpose
                Products sitting below the margin floor usually got there through years of absorbed cost increases, not a deliberate choice. Working through the bottom of the league table item by item, with a proposed new price, the expected volume effect and the customer communication, recovers margin without a blanket rise that hits good lines too.

                ## Milestones
                1. Every product below its margin floor listed with current and proposed price.
                2. Break-even volume loss shown for each proposed change.
                3. Customer and competitor reactions considered for the ten largest changes.
                4. New prices approved and given an effective date.
                5. Margin on repriced items checked three months after the change.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "All products below their margin floor have an approved new price or a recorded reason to hold, and margins were rechecked three months after the change."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every product below its margin floor with its current price"
                - "Propose a new price and break-even volume loss for each"
                - "Check the ten largest changes against competitor prices"
                - "Get the new prices approved with an effective date"
                - "Recheck margins on repriced items after three months"
            - name: Keep or discontinue decision for tail products
              description: |-
                ## Purpose
                The long tail of slow, low-margin items ties up stock, catalogue space and attention, yet some of them keep valuable customers buying everything else. A structured keep, reprice or discontinue review, with the linked sales and fixed costs considered, removes dead weight without losing the account that relies on it.

                ## Milestones
                1. Tail items defined, for example the bottom ten percent of margin cash.
                2. Each item marked keep, reprice, replace or discontinue with a reason.
                3. Customers who buy discontinued items identified and told in advance.
                4. Remaining stock of discontinued items cleared with a plan.
                5. The tail review repeated each year.

                ## Notes
                Check whether the item is often bought alongside a profitable one before dropping it. Some loss leaders earn their place.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every tail item has a recorded keep, reprice, replace or discontinue decision, with affected customers notified before discontinuation."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Define the tail and list the items in it"
                - "Check which tail items are usually bought with profitable lines"
                - "Mark each item keep, reprice, replace or discontinue"
                - "Tell affected customers before discontinued items run out"
                - "Repeat the tail review with fresh figures @recurring(yearly)"
            - name: Small order surcharge or minimum order decision
              description: |-
                ## Purpose
                Orders below a certain size often cost more to pick, pack, invoice and deliver than they earn. Measuring the margin left on orders by size band, then choosing between a minimum order value, a small order charge or doing nothing, settles a question many businesses argue about for years.

                ## Milestones
                1. Orders grouped into size bands with average margin and handling cost.
                2. The order size below which margin turns negative identified.
                3. Three options compared: minimum order, small order charge or no change.
                4. A decision recorded and, if adopted, communicated to customers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on minimum order value or small order charge, backed by margin by order size band."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Group last year's orders into five size bands"
                - "Estimate handling and delivery cost per order"
                - "Find the order size where margin turns negative"
                - "Compare a minimum order, a surcharge and no change"
            - name: Supplier renegotiation for margin-dragging lines
              description: |-
                ## Purpose
                When a product family is below its floor and prices cannot rise without losing customers, the cost side is the remaining lever. Taking the margin evidence into a supplier conversation, with volumes, alternatives and a target unit cost, gives a far stronger case than asking for a discount in general.

                ## Milestones
                1. The three families furthest below their floor chosen for supplier talks.
                2. Annual volumes and a target unit cost prepared for each supplier.
                3. At least one alternative supplier quote obtained for comparison.
                4. Outcomes recorded and new costs entered in the cost change log.

                ## Notes
                Start from the **Vendor** template to keep each supplier's terms, contacts and negotiation history in one place.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Supplier talks completed for the three furthest-below-floor families, with outcomes and any new costs recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick the three families furthest below their margin floor"
                - "Prepare annual volumes and a target unit cost for each supplier"
                - "Request one alternative quote for each family"
                - "Record the result and update the cost change log"
            - name: Bundle, kit and package margin check
              description: |-
                ## Purpose
                Bundles, starter kits and service packages are priced as one figure, so a low-margin component can hide inside a healthy-looking total, and the discount given for buying the set is rarely revisited. Breaking each bundle into its parts shows its true margin and whether the bundle discount still makes sense.

                ## Milestones
                1. Every active bundle or package listed with its components and price.
                2. Margin calculated for the bundle and for the parts sold separately.
                3. Bundles where the discount exceeds the margin gain from extra volume flagged.
                4. Each flagged bundle repriced, reconfigured or retired.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every active bundle has a component-level margin calculation and flagged bundles have a recorded reprice, reconfigure or retire decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every active bundle and its components"
                - "Calculate bundle margin against parts sold separately"
                - "Flag bundles where the discount outweighs the volume gain"
                - "Decide to reprice, reconfigure or retire each flagged bundle"
            - name: Discount policy with margin guardrails
              description: |-
                ## Purpose
                Discounts grow by habit: a loyalty rate becomes standard, a launch offer never ends, a salesperson's best customer gets a special price nobody remembers agreeing. Rewriting the discount policy around margin rather than percentage off, with clear limits and approvals, keeps flexibility for sales while protecting the bottom line.

                ## Milestones
                1. Every standing discount and special price listed with its customer and start date.
                2. Discounts that take a line below its margin floor identified.
                3. A written policy with limits by product family and approval levels.
                4. Expired or unjustified special prices removed after notice to customers.
                5. A monthly exceptions report in place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written discount policy with margin-based limits is in force, standing special prices have been reviewed and a monthly exceptions report runs."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Export every standing discount and special price agreement"
                - "Mark the agreements that push a line below its floor"
                - "Draft a policy with limits and approvals by family"
                - "Ask the agent to draft the notice for customers losing a special price"
                - "Run the discount exceptions report @recurring(monthly:27)"
            - name: Customer price tier structure redesign
              description: |-
                ## Purpose
                Price lists that grew customer by customer end up with dozens of one-off rates and no logic a new salesperson could explain. Redesigning them into three or four tiers, each tied to volume, order size or commitment and each priced above the margin floor, makes quoting faster and stops the best rates going to whoever asked loudest.

                ## Milestones
                1. Every customer's current effective price level mapped against their volume and margin.
                2. Three or four tiers defined with clear entry rules and a price per family.
                3. Each tier's margin checked against the floor register.
                4. Customers assigned to tiers, with those moving up in price given notice.
                5. One-off rates outside the tiers reduced to a short approved list.

                ## Notes
                Expect a few customers to move to a higher price. Plan those conversations first and allow a transition period rather than surprising them on an invoice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A price list of three or four tiers with written entry rules is in use, every customer is assigned a tier and one-off rates sit on a short approved list."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Plot each customer's effective price level against volume"
                - "Draft three or four tiers with entry rules"
                - "Check each tier's margin against the floor register"
                - "Assign customers to tiers and plan notice for those moving up"
            - name: Unprofitable customer repricing or exit plan
              description: |-
                ## Purpose
                A handful of customers usually sit at the bottom of the curve, buying the thinnest lines at the deepest discounts with the most returns. A plan for each, starting with a repricing or terms conversation and ending with a respectful exit if nothing changes, stops subsidising them without damaging the relationship more than necessary.

                ## Milestones
                1. The five least profitable customers named with the reasons for their low margin.
                2. A proposed change for each: price, terms, order size or service level.
                3. Conversations held and outcomes recorded.
                4. An exit plan agreed for any customer who declines all changes.

                ## Notes
                Check contract terms and notice periods before proposing changes, and take advice if a contract is unclear.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each of the five least profitable customers has had a repricing or terms conversation, with an outcome or exit plan recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Name the five least profitable customers and why"
                - "Check each contract for price review clauses and notice periods"
                - "Propose a price, terms or service change for each"
                - "Record each outcome or agreed exit plan"
            - name: Product mix shift toward higher-margin lines
              description: |-
                ## Purpose
                Selling a little more of the profitable lines often adds more gross profit than any price rise, and it upsets nobody. Choosing three high-margin families to promote, and giving sales, marketing and the website a reason to feature them, moves the mix in a measurable way within a few months.

                ## Milestones
                1. Three high-margin families with spare capacity or stock chosen.
                2. A specific push agreed for each: placement, bundling, sales focus or promotion.
                3. Mix share of the three families tracked monthly against the baseline.
                4. Gross profit gained from the mix change estimated after six months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Mix share of three chosen high-margin families has been tracked monthly for six months, with the gross profit gain estimated."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose three high-margin families with stock or capacity to spare"
                - "Agree one sales or marketing push for each family"
                - "Track the three families' share of sales @recurring(monthly:3)"
                - "Estimate the gross profit gain after six months"
            - name: Sales commission based on gross margin
              description: |-
                ## Purpose
                Commission paid on revenue rewards a salesperson for giving away margin to close the deal. Modelling what last year's commission would have been on a gross margin basis, and talking it through with the team, shows whether a change would steer behaviour and who would gain or lose before anyone signs a new plan.

                ## Milestones
                1. Last year's commission recalculated on a margin basis for each salesperson.
                2. Winners and losers under the new basis listed with the reasons.
                3. A proposed plan with a transition period drafted.
                4. A decision recorded after discussion with the sales team.

                ## Notes
                Changes to pay usually need notice and consultation. Check employment terms and take HR or legal advice before changing a commission plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on margin-based commission, supported by a recalculation of last year's commission for every salesperson."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Recalculate last year's commission on a margin basis"
                - "List who would gain or lose and why"
                - "Draft a margin-based plan with a transition period"
                - "Discuss the proposal with the sales team and record the decision"
            - name: Annual price increase round
              description: |-
                ## Purpose
                Prices that are not reviewed every year fall behind costs by default. Running one planned price round, with increases set family by family from current costs and margin floors, customer notice given in good time and a check afterwards, protects margin far better than reacting to each supplier rise.

                ## Milestones
                1. A price round date fixed after the yearly unit cost reset.
                2. A proposed increase for each family, based on cost movement and margin floor.
                3. Key customers given written notice in line with their contract terms.
                4. New prices loaded in every system and price list on the effective date.
                5. Margin and volume reviewed eight weeks after the increase.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "New prices took effect on the planned date in every system, with customer notice given and an eight-week margin and volume review recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Fix the effective date for this year's price round"
                - "Set a proposed increase for each family from the cost reset"
                - "Send written notice to key customers per their contract terms"
                - "Load new prices into every system and price list"
                - "Plan next year's price round in the same month @recurring(yearly)"
            - name: Margin check before a new product launch
              description: |-
                ## Purpose
                New products are often priced on enthusiasm and a rough supplier quote, then discovered to be thin once freight, packaging, returns and launch discounts land. A margin check before launch, against the family's floor, sets a price and a target cost that the product has to meet to be worth launching.

                ## Milestones
                1. A full landed cost estimate including packaging, freight, duty and expected returns.
                2. A target price set with margin shown at list and after expected discounts.
                3. The margin compared with the family's floor and similar products.
                4. A go, reprice or redesign decision recorded before launch.
                5. Actual margin checked after the first three months on sale.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A pre-launch margin check is recorded with a go, reprice or redesign decision, and actual margin was compared after three months on sale."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate full landed cost for the new product"
                - "Set a target price and show margin after expected discounts"
                - "Compare the margin with the family floor and similar products"
                - "Record a go, reprice or redesign decision before launch"
            - name: Margin briefing for the board or investors
              description: |-
                ## Purpose
                Boards and investors increasingly ask where margin comes from, not just what it is. A short, repeatable briefing showing margin by family and customer group, the main movements and the actions under way answers that question with confidence and avoids rebuilding a new pack each time someone asks.

                ## Milestones
                1. A two-page format agreed: margin trend, top and bottom families, customer view, actions.
                2. The first briefing prepared and presented.
                3. Questions raised recorded and answered in the next edition.
                4. The briefing refreshed for each quarterly meeting.

                ## Notes
                Start from the **Board meeting** template for the agenda and minutes, and keep the margin pack itself to two pages.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A two-page margin briefing has been presented at two consecutive quarterly meetings, with earlier questions answered in the later edition."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Agree the two-page briefing format with the chair or lead investor"
                - "Prepare and present the first margin briefing"
                - "Record the questions raised and who will answer them"
                - "Refresh the briefing before each board meeting @recurring(quarterly)"
            - name: Response to a major supplier price rise
              description: |-
                ## Purpose
                Sudden increases from a key supplier, perhaps after a commodity spike or a currency move, can take several points off margin in a month. Having a worked response, covering the size of the hit by family, the options to absorb, pass on or switch, and customer messaging, means the decision is made in days rather than drifting for a quarter.

                ## Milestones
                1. The margin impact of the rise calculated by product family and customer.
                2. Options compared: absorb, pass on fully or partly, renegotiate or switch supplier.
                3. A decision recorded with an effective date.
                4. Customer communication sent where prices change.
                5. Margin rechecked two months after the response.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A recorded response to the supplier rise, with impact by family, a chosen option and a margin recheck two months later."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate the margin hit by family from the new supplier prices"
                - "Compare absorbing, passing on, renegotiating and switching"
                - "Decide the response and set an effective date"
                - "Recheck margin on affected families after two months"
            - name: Margin sign-off for a large quote or tender
              description: |-
                ## Purpose
                A large contract can lift revenue sharply while dragging overall margin down for years, especially once volume discounts, special delivery and payment terms are counted. A margin sign-off before submission, showing the deal's margin against the floor and its effect on the business total, lets the owner accept a thin deal knowingly or walk away.

                ## Milestones
                1. Deal margin calculated after all discounts, delivery, terms and extra service costs.
                2. The margin compared with the family floors and the business average.
                3. The effect on total gross margin percentage for the year shown.
                4. A sign-off or walk-away decision recorded before the bid goes in.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The large quote or tender has a recorded margin sign-off before submission, showing deal margin against floors and its effect on the yearly total."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate deal margin after discounts, delivery and payment terms"
                - "Compare the deal margin with the relevant floors"
                - "Show the effect on this year's total margin percentage"
                - "Record the sign-off or walk-away decision before submitting"
            - name: Margin view for a founder's first product range
              description: |-
                ## Purpose
                Founders with a first range of five to twenty products rarely have clean costs or history, but the pricing they set now will be hard to change later. A simple margin view, built from supplier quotes and the first few months of sales, shows which products fund the business and which are there for reasons other than profit.

                ## Milestones
                1. A landed cost estimate for every product in the range.
                2. Margin at list price and after typical discounts for each product.
                3. Products marked as profit drivers, traffic builders or experiments.
                4. Prices adjusted where a product is losing money without a reason.
                5. The view refreshed after the first three months of sales.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every product in the first range has a margin figure and a role, with loss-making products repriced or justified and the view refreshed after three months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Estimate landed cost for every product in the range"
                - "Calculate margin at list and after typical discounts"
                - "Mark each product as profit driver, traffic builder or experiment"
                - "Reprice any product losing money without a reason"
            - name: Service line margin for a people-based business
              description: |-
                ## Purpose
                In consultancies, clinics, salons and trades firms the main cost of sales is people's time, so margin by service line depends on how hours are recorded and costed. Building margin for each service line, such as retainers, fixed-fee packages and hourly work, shows which kinds of work pay for the team and which only keep them busy.

                ## Milestones
                1. Service lines defined, for example retainers, fixed-fee packages and hourly work.
                2. An hourly cost for each role, including employer taxes and benefits.
                3. Twelve months of hours and revenue assigned to each service line.
                4. Margin by service line shown with the average effective hourly rate achieved.

                ## Notes
                This looks at service lines as a whole. Profit on individual jobs or projects belongs in job costing, which feeds this view but is a separate routine.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Margin and effective hourly rate are calculated for every service line over twelve months using a costed rate for each role."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Define three to six service lines the business sells"
                - "Work out a fully loaded hourly cost for each role"
                - "Assign twelve months of hours and revenue to each line"
                - "Calculate margin and effective hourly rate by service line"
            - name: Online seller margin after platform and fulfilment fees
              description: |-
                ## Purpose
                Sellers on marketplaces and their own online shop often see a healthy product margin that disappears after referral fees, fulfilment charges, payment fees, advertising and returns. Calculating margin per order after every platform cost, product by product and channel by channel, shows which listings actually make money.

                ## Milestones
                1. Every fee type listed for each sales channel: referral, fulfilment, storage, payment and advertising.
                2. Fees per unit allocated to each product for the last three months.
                3. Margin after platform costs shown by product and channel.
                4. Listings losing money after fees repriced, moved channel or delisted.
                5. The calculation refreshed each month from the platform reports.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Margin after all platform and fulfilment costs is reported monthly by product and channel, with loss-making listings acted on."
                cadence: rolling
              tasks:
                - "List every fee each sales channel charges"
                - "Allocate three months of fees per unit to each product"
                - "Act on every listing that loses money after fees"
                - "Refresh margin after platform fees from channel reports @recurring(monthly:12)"
            - name: Manager taking over a product line's margin
              description: |-
                ## Purpose
                Newly appointed product line managers inherit prices, suppliers, discounts and customer promises, usually with little explanation. Spending the first sixty days building a margin picture of the line, and agreeing targets with the person they report to, gives them a defensible plan instead of inherited assumptions.

                ## Milestones
                1. The line's twelve-month margin by product and customer understood.
                2. Inherited special prices, discounts and supplier terms listed.
                3. Three margin improvement opportunities identified with estimated value.
                4. Margin targets for the next year agreed with the line manager's manager.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Within sixty days the manager has a margin picture of the line, three valued opportunities and margin targets agreed in writing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask finance for the line's twelve-month margin by product"
                - "List the special prices and supplier terms you have inherited"
                - "Value three margin opportunities in the line"
                - "Agree next year's margin targets in writing with your manager"
            - name: Wholesale, retail and online channel margin comparison
              description: |-
                ## Purpose
                Businesses that sell through wholesale accounts, their own shop and online often price each channel separately and never compare them. Setting margin per unit side by side across channels, after channel-specific costs, shows whether a growing channel is adding profit or simply moving sales from a better one.

                ## Milestones
                1. Each channel's realised price and direct costs per unit calculated.
                2. Margin per unit and margin cash compared across channels for the main families.
                3. Signs of sales moving between channels checked.
                4. A decision recorded on pricing or effort for the weakest channel.
                5. The comparison repeated each quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A channel comparison shows margin per unit and cash by channel for the main families, refreshed quarterly, with a decision recorded for the weakest channel."
                cadence: rolling
              tasks:
                - "Calculate realised price and direct cost per unit in each channel"
                - "Compare margin per unit across channels for the main families"
                - "Check whether customers have moved between channels"
                - "Refresh the channel comparison @recurring(quarterly)"
            - name: Margin protection for importers facing cost and currency swings
              description: |-
                ## Purpose
                Importers can see margin move with exchange rates, shipping rates and duty changes long before a supplier changes its price. Tracking landed cost against the rate assumed when prices were set, with a trigger point for review, keeps selling prices in step with what goods actually cost to bring in.

                ## Milestones
                1. The exchange rate, freight rate and duty assumed in current prices written down.
                2. A monthly comparison of actual landed cost against those assumptions.
                3. A trigger agreed, for example a three percent movement, that forces a price review.
                4. Price reviews held whenever the trigger is hit.

                ## Notes
                This is about pricing, not hedging. Whether to buy currency forward is a treasury decision to take with your bank or adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Actual landed cost is compared monthly with pricing assumptions and every trigger breach in the last year led to a recorded price review."
                cadence: rolling
              tasks:
                - "Write down the rate, freight and duty assumed in current prices"
                - "Agree the movement that triggers a price review"
                - "Compare actual landed cost with pricing assumptions @recurring(monthly:24)"
                - "Hold a price review whenever the trigger is breached"
            - name: Margin evidence for a fundraise or business sale
              description: |-
                ## Purpose
                Investors and buyers test gross margin hard in due diligence, and figures that cannot be traced back to the ledger cost credibility and sometimes price. Preparing a margin pack that reconciles to the accounts, explains definitions and shows the trend by product and customer means the founder answers questions rather than scrambling for them.

                ## Milestones
                1. Three years of gross margin by product family reconciled to the accounts.
                2. The margin definition and any changes over the period documented.
                3. Customer concentration and margin for the top ten customers shown.
                4. A list of likely diligence questions with prepared answers.

                ## Notes
                Agree the scope of the pack with your corporate finance adviser or accountant, who will know what this kind of buyer or investor usually asks for.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A margin pack covering three years reconciles to the accounts, documents the definition and includes prepared answers to likely diligence questions."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask your adviser what margin evidence the buyer or investor will expect"
                - "Reconcile three years of margin by family to the accounts"
                - "Document the margin definition and any changes over the period"
                - "Ask the agent to draft likely diligence questions on margin"
            - name: Product, customer and channel margin cube
              description: |-
                ## Purpose
                Experienced analysts find the real stories where dimensions cross: a profitable product that loses money through one channel, a good customer who only buys the thin lines. Building a single dataset of margin by product, customer and channel lets you slice any combination without rebuilding the analysis each time.

                ## Milestones
                1. One dataset holding revenue, cost and margin at the order line with product, customer and channel fields.
                2. The dataset reconciled to gross profit in the accounts each month.
                3. Saved views for the ten most asked combinations.
                4. Three findings that no single-dimension report had shown.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reconciled order-line margin dataset with ten saved views is in use, and three new cross-dimension findings have been written up."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Design the order-line dataset fields and their sources"
                - "Load twelve months of order lines with costs attached"
                - "Reconcile the dataset to gross profit in the accounts"
                - "Save views for the ten most asked combinations"
            - name: Price waterfall from list price to pocket price
              description: |-
                ## Purpose
                Between the list price and the money that finally stays in the business sit on-invoice discounts, then off-invoice items such as rebates, free delivery, extended terms and promotional support. Drawing the full waterfall for each major customer group shows where the biggest leaks are, which are often items nobody manages as price.

                ## Milestones
                1. Every step between list and pocket price defined and quantified.
                2. A waterfall chart for each major customer group.
                3. The two largest off-invoice leaks identified with their owners.
                4. A change agreed for each of the two largest leaks.
                5. The waterfall redrawn each year to confirm the change held.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Price waterfalls exist for each major customer group, and the two largest off-invoice leaks each have an agreed change."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Define every step from list price to pocket price"
                - "Quantify each step for the major customer groups"
                - "Agree a change for each of the two largest off-invoice leaks"
                - "Redraw the waterfall and compare with last year @recurring(yearly)"
            - name: Rebates and promotional funding in customer margin
              description: |-
                ## Purpose
                Retrospective rebates, retailer promotional funding and growth incentives are often paid months after the sale, so monthly margin looks better than it is until the bill arrives. Accruing them to the customers and products they relate to gives a true margin by account, and a clear view of which rebate deals actually bought extra volume.

                ## Milestones
                1. Every rebate, growth incentive and promotional funding agreement listed with its terms.
                2. Expected amounts accrued monthly to the right customer and product.
                3. Customer margin restated after rebates and promotional funding.
                4. Each agreement judged on whether the volume it bought justified its cost before renewal.

                ## Notes
                Agree with your accountant how rebates should be accrued in the books, so management figures and the statutory accounts tell the same story.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All rebate and promotional funding agreements are accrued to customers and products, and each has been judged on its volume effect before renewal."
                cadence: rolling
              tasks:
                - "List every rebate and promotional funding agreement with its terms"
                - "Accrue expected rebates to the right customers and products"
                - "Restate customer margin after rebates for the top accounts"
                - "Review each rebate deal's volume effect ahead of renewal @recurring(quarterly)"
---

# Product Margin Analysis

This area is for owners, founders and managers who suspect some of what they sell is quietly losing money and want to know which. It starts with the foundations (the decisions the analysis must serve, one agreed definition of gross margin, clean realised prices, unit costs for the top sellers and a first margin table by product and by customer), then the routines that keep the numbers current, the skills of reading margin properly, the repricing, discontinue and discount decisions, dated moments such as the annual price round or a large tender, situations from a first product range to an online seller or an importer, and finally specialist work on price waterfalls, rebates and a full margin cube.

What repeats is a monthly margin refresh with its data quality check, a weekly look at discounts and negative-margin orders, supplier cost changes logged as they arrive, quarterly league table and customer reviews, a margin floor register kept current and a yearly unit cost reset before prices are set. The Metrics log, Meeting notes, Vendor and Board meeting templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
