---
id: finance-accounting.unit-economics-modelling
name: Unit Economics Modelling
description: "Contribution per unit, fully loaded acquisition cost, cohort-based lifetime value and payback, with monthly reviews, channel tracking and the price and channel decisions that decide whether growth makes money."
category: business
version: 1.0.0
tags: [finance-accounting, unit-economics-modelling, founder, manager, small-business, customer-acquisition-cost, lifetime-value, contribution-margin]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - risk-register
    - metrics-log
    - reading-queue
    - board-meeting
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Unit Economics Modelling
          description: "Working out customer acquisition cost, lifetime value, contribution margin and payback so founders and managers know whether growth makes or loses money."
          projects:
            - name: Choosing the unit your business actually sells
              description: |-
                ## Purpose
                Unit economics only works once you have decided what one unit is: an order, a customer, a subscriber, a seat, a booked job or a store. A coffee roaster selling both bags and subscriptions may need two units, and a software company pricing per seat may still want to measure per account. Picking the unit first stops every later number being argued over.

                ## Milestones
                1. The candidate units for the business listed, with how revenue is earned on each.
                2. One primary unit chosen, and a secondary unit only where the business genuinely runs two models.
                3. The reason for the choice written in two sentences.
                4. The chosen unit agreed with whoever reads the numbers, such as a co-founder, investor or manager.

                ## Notes
                If you cannot decide, choose the customer as the unit and measure orders inside it. The customer is what acquisition cost is paid for.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note naming the primary unit, any secondary unit and the reason, agreed with at least one other decision maker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every way the business earns money and what a single sale looks like"
                - "Pick the primary unit and write down why"
                - "Note whether a second business model needs its own unit"
                - "Share the unit choice with your co-founder, manager or adviser"
            - name: Unit economics metric definitions sheet
              description: |-
                ## Purpose
                Two people calculating customer acquisition cost from the same data can be 40 percent apart, one counting only ad spend and the other adding salaries and tools. A one-page sheet defining each metric, its formula, its data source and what it excludes means the number in a board pack means the same thing next quarter as it does today.

                ## Milestones
                1. Definitions written for customer acquisition cost, contribution margin, lifetime value, payback period and retention rate.
                2. Each definition carries a formula, a data source and a list of exclusions.
                3. Blended and paid versions of acquisition cost defined as separate lines.
                4. The sheet stored beside the model and linked from it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A definitions sheet covering at least five metrics, each with formula, source and exclusions, linked from the unit economics model."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-line formula for each of the five core metrics"
                - "Add the data source and the exclusions to every definition"
                - "Define blended and paid acquisition cost as separate lines"
                - "Review the definitions against how the business now sells @recurring(yearly)"
            - name: Variable and fixed cost split from the ledger
              description: |-
                ## Purpose
                Contribution margin depends on knowing which costs rise with each extra sale and which stay put. Going through the last twelve months of profit and loss line by line, and tagging each cost as variable, semi-variable or fixed, is tedious once and then pays for every later calculation in this area.

                ## Milestones
                1. Twelve months of profit and loss exported at account level.
                2. Each cost line tagged variable, semi-variable or fixed, with a one-line reason.
                3. Semi-variable lines split into a fixed base and a per-unit rate.
                4. The tagging reviewed with your bookkeeper or accountant.

                ## Notes
                Payment processing fees, packaging, shipping, per-customer hosting and sales commission are usually variable. Rent, salaried staff and most software subscriptions are usually fixed, until volume forces a step up.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every cost line in the last twelve months of profit and loss is tagged variable, semi-variable or fixed, and the split has been checked by your bookkeeper."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export twelve months of profit and loss at account level"
                - "Tag each cost line as variable, semi-variable or fixed"
                - "Estimate the per-unit rate inside each semi-variable cost"
                - "Ask your bookkeeper to check the tagging on the five largest lines"
            - name: Contribution margin per order baseline
              description: |-
                ## Purpose
                Revenue per order hides the discounts, payment fees, shipping, packaging and returns that come off it before any money is left for overheads. Laying out one average order as a waterfall, from list price down to contribution, shows how much each sale actually funds and which deduction is the largest.

                ## Milestones
                1. An average order built from three months of real orders, not from a list price.
                2. Every variable deduction shown in order: discounts, cost of goods, payment fees, fulfilment, packaging, returns and refunds.
                3. Contribution per order stated in money and as a percentage of net revenue.
                4. The three largest deductions named for follow-up.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A per-order contribution waterfall based on three months of actual orders, with contribution in money and percent and the three largest deductions named."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull three months of orders with net price, discount and refund per order"
                - "Work out the average payment fee and fulfilment cost per order"
                - "Build the waterfall from list price down to contribution per order"
                - "Circle the three largest deductions for later projects"
            - name: Fully loaded customer acquisition cost baseline
              description: |-
                ## Purpose
                Founders often quote acquisition cost as ad spend divided by new customers, which leaves out the sales team, agency fees, tools, free trials and the founder's own selling time. Calculating a fully loaded figure for the last two quarters, beside the ads-only figure, shows the real price of a new customer and how far apart the two numbers sit.

                ## Milestones
                1. Acquisition spend for two quarters gathered: media, agency, sales salaries and commission, tools, promotions and events.
                2. New customers for the same quarters counted using the definition on your metrics sheet.
                3. Fully loaded and paid-only acquisition cost calculated side by side.
                4. The gap between the two explained in a sentence.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fully loaded and paid-only acquisition cost calculated for the last two quarters, with every spend category listed and the gap explained."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every cost that exists to win new customers, including people's time"
                - "Total each cost category for the last two quarters"
                - "Count new customers for the same quarters from the sales records"
                - "Divide spend by new customers both fully loaded and paid only"
            - name: Customer retention cohort table
              description: |-
                ## Purpose
                A single churn figure averages good months with bad ones and new customers with loyal ones. Grouping customers by the month they first bought, and tracking what share are still buying in each later month, produces the table that every lifetime value and payback estimate should rest on.

                ## Milestones
                1. Customer and order data exported with first purchase date and every later purchase or renewal.
                2. Customers grouped into monthly cohorts by first purchase.
                3. A triangle table showing the share of each cohort still active in months one to twelve.
                4. The same table built for revenue retained, not just customers retained.

                ## Notes
                For businesses without subscriptions, define active as having bought within a set window, such as 90 days, and write the window on your definitions sheet.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monthly cohort table covering at least twelve cohorts, in customer and revenue terms, with the activity definition recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export every customer with first purchase date and later purchase dates"
                - "Group customers into monthly cohorts by first purchase"
                - "Build the retention triangle for customers and for revenue"
                - "Write the definition of an active customer on the metrics sheet"
            - name: First lifetime value estimate with stated assumptions
              description: |-
                ## Purpose
                Lifetime value is a forecast, not a fact, and the dangerous versions are the ones without their assumptions written next to them. Building a first estimate from your contribution margin and your cohort table, with the time horizon, retention and margin figures stated, gives a number you can defend now and improve later.

                ## Milestones
                1. Lifetime value calculated on contribution margin, not revenue.
                2. A time horizon chosen, such as 24 or 36 months, rather than an unlimited lifetime.
                3. Retention taken from the cohort table rather than a guess.
                4. Each assumption listed beside the result with its source.

                ## Notes
                A lifetime value built on revenue or gross margin flatters the business. Use contribution after variable costs, and cap the horizon.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A lifetime value figure on contribution margin with a capped horizon, with every assumption and its source written beside it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Take average contribution per customer per month from the baseline"
                - "Read monthly retention for months one to twenty-four from the cohort table"
                - "Calculate lifetime value over a capped horizon"
                - "List each assumption next to the result with where it came from"
            - name: Customer acquisition cost payback period
              description: |-
                ## Purpose
                Payback answers the question cash-constrained businesses care about most: how many months of contribution before a new customer has repaid what it cost to win. A company with a strong lifetime value can still run out of money if payback is 30 months and growth is funded from the bank account.

                ## Milestones
                1. Monthly contribution per customer taken from the baseline and adjusted for retention.
                2. Payback in months calculated for the whole business and for the two largest channels.
                3. The payback compared with the cash runway or the period the owner can afford to wait.
                4. A target payback period written down for future decisions.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Payback in months calculated for the business and its two largest channels, with a target payback period recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out the months of retained contribution needed to repay acquisition cost"
                - "Repeat the payback calculation for the two largest channels"
                - "Compare the payback with the months of cash the business holds"
                - "Write down the longest payback you are prepared to fund"
            - name: Unit economics data sources map
              description: |-
                ## Purpose
                The figures come from at least four places, the accounting ledger, the ad platforms, the CRM or online store and the payment processor, and each counts customers and money differently. Mapping where every input comes from, who owns it and how it ties back to the ledger prevents a model that nobody can rebuild next month.

                ## Milestones
                1. Every model input listed with its system of origin and owner.
                2. Each input marked as exported by hand or pulled automatically.
                3. Known mismatches noted, such as ad platforms counting conversions the store never recorded.
                4. A monthly check in place that marketing spend in the model matches the ledger.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written map of every model input, its source, owner and refresh method, with a monthly tie-out of spend to the ledger."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each model input and the system it comes from"
                - "Name the person who owns each data source"
                - "Note where ad platforms and the store disagree on customer counts"
                - "Check that marketing spend in the model matches the ledger @recurring(monthly:3)"
            - name: One-page unit economics summary for the owner
              description: |-
                ## Purpose
                Spreadsheets with twelve tabs do not get read by owners or busy co-founders. A single page that states contribution per unit, acquisition cost, lifetime value, payback and the one thing to watch, in plain sentences, is what turns the modelling work into decisions people actually make.

                ## Milestones
                1. Five headline numbers on one page, each with a one-line meaning.
                2. A simple status beside each number against its target.
                3. One paragraph naming the biggest risk to the numbers.
                4. The page read and discussed by the owner or leadership team.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page summary with five headline metrics, their targets and the main risk, discussed by the owner or leadership team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the five headline numbers with a plain-language line for each"
                - "Mark each number as on, near or off its target"
                - "Ask the agent to draft the risk paragraph from your model notes"
                - "Read the page through with the owner and note their questions"
            - name: Monthly unit economics review meeting
              description: |-
                ## Purpose
                Numbers calculated once go stale within a quarter as prices, ad costs and retention move. A 45-minute monthly review a week after the books close, looking at the same five metrics in the same order, catches a rising acquisition cost or a slipping cohort while it is still cheap to fix.

                ## Milestones
                1. A fixed monthly slot about a week after month end, with the attendees named.
                2. A standard agenda: contribution, acquisition cost by channel, payback, newest cohort, actions.
                3. Notes and actions recorded for every meeting.
                4. Six consecutive reviews held.

                ## Notes
                Start from the **Meeting notes** template. Hold the review after the month's numbers are closed, not before, or every meeting starts by arguing about the data.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews held, each with notes recording the five metrics and at least one action."
                cadence: rolling
              tasks:
                - "Set a recurring 45-minute slot a week after month end"
                - "Write the five-metric agenda in the meeting notes"
                - "Hold the unit economics review and record the actions @recurring(monthly:8)"
                - "Check last month's actions at the start of each meeting"
            - name: Channel acquisition cost tracker
              description: |-
                ## Purpose
                Blended acquisition cost can look steady while one channel quietly doubles in price and another carries the business. A monthly tracker showing spend, new customers and cost per customer for each channel, including organic and referral, shows where the next pound or dollar of growth should go.

                ## Milestones
                1. A channel list agreed, including unpaid channels such as organic search, referral and direct.
                2. Monthly spend and new customers recorded per channel.
                3. Cost per customer and its three-month average shown for each channel.
                4. Any channel whose cost rose by more than a quarter in three months flagged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of channel-level spend, new customers and acquisition cost recorded, with rising channels flagged."
                cadence: rolling
              tasks:
                - "Agree the channel list, including organic, referral and direct"
                - "Record each channel's spend and new customers for the month @recurring(monthly:5)"
                - "Add a three-month average beside each channel's cost"
                - "Flag any channel whose cost has risen by a quarter in three months"
            - name: Quarterly cohort refresh
              description: |-
                ## Purpose
                Each quarter adds three new cohorts and three more months of history to the older ones, and that is when lifetime value estimates should move. Refreshing the cohort table on a fixed rhythm, and noting whether newer cohorts retain better or worse than older ones, keeps the model honest about who you are now acquiring.

                ## Milestones
                1. The cohort table updated with the latest quarter's customers and activity.
                2. The newest three cohorts compared with the same months for cohorts a year earlier.
                3. Lifetime value and payback recalculated where retention moved.
                4. A two-line note on what changed and why it might have.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly refreshes completed in a year, each with recalculated lifetime value and a note on cohort changes."
                cadence: rolling
              tasks:
                - "Update the cohort table with the latest quarter of activity @recurring(quarterly)"
                - "Compare the newest cohorts with those from a year earlier"
                - "Recalculate lifetime value and payback if retention moved"
                - "Write two lines on what changed in cohort behaviour"
            - name: Weekly paid acquisition spend check
              description: |-
                ## Purpose
                Ad platforms can spend a month's budget in a week when a campaign is set up badly, and the monthly review arrives too late to stop it. A ten-minute Monday check of spend against plan and cost per new customer keeps paid acquisition inside the payback you set.

                ## Milestones
                1. A weekly spend budget per paid channel derived from the monthly plan.
                2. A short Monday check of spend and new customers per paid channel.
                3. A written rule for when a campaign is paused or cut.
                4. Eight weekly checks completed.

                ## Notes
                Set the pause rule as a cost per new customer, not as a click or lead cost, so it ties back to payback.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly checks recorded, with any campaign over its cost ceiling paused or justified in writing."
                cadence: rolling
              tasks:
                - "Split the monthly paid budget into weekly figures per channel"
                - "Write the cost per customer at which a campaign gets paused"
                - "Check last week's paid spend and new customers by channel @recurring(weekly:mon)"
            - name: Per-unit cost change watch
              description: |-
                ## Purpose
                Carrier rate rises, supplier price lists, payment fee changes and new packaging all move contribution per unit without anyone touching the model. A monthly sweep of supplier notices and invoices for per-unit changes, fed straight into the contribution baseline, stops margins eroding unnoticed for a quarter.

                ## Milestones
                1. A list of the suppliers whose prices drive per-unit cost.
                2. A monthly check of their invoices and notices for changes.
                3. Contribution per unit updated whenever a change exceeds a threshold you set.
                4. A change log with date, amount and effect per unit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A change log covering six months of per-unit cost movements, with contribution per unit updated after each material change."
                cadence: rolling
              tasks:
                - "List the suppliers whose prices set your per-unit costs"
                - "Set the change threshold that triggers a model update"
                - "Scan supplier invoices and notices for per-unit price changes @recurring(monthly:15)"
                - "Record each change with its effect on contribution per unit"
            - name: Assumptions register for the unit economics model
              description: |-
                ## Purpose
                Every model rests on guesses: future retention, a channel's cost at higher spend, how many customers buy a second time. Keeping those guesses in one register, with the date, the source and how confident you are, makes it obvious which assumption to test next and protects you when someone asks where a number came from.

                ## Milestones
                1. Every assumption in the model listed with value, source and date.
                2. Each assumption rated high, medium or low confidence.
                3. The three assumptions with the largest effect on lifetime value marked.
                4. A quarterly review of the register with outdated entries replaced.

                ## Notes
                Start from the **Risk register** template, with one row per assumption and the likelihood column used for confidence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An assumptions register covering every model input, reviewed each quarter, with the three most influential assumptions marked."
                cadence: rolling
              tasks:
                - "Copy every assumption out of the model into the register"
                - "Rate each assumption high, medium or low confidence"
                - "Mark the three assumptions that move lifetime value most"
                - "Review the register and replace stale assumptions @recurring(quarterly)"
            - name: Refund, return and chargeback cost tracking
              description: |-
                ## Purpose
                Returns and refunds are often booked against revenue months after the sale, so the contribution of last month's orders looks better than it was. Tracking refunds, return shipping, unsellable stock and chargeback fees per order each month, and tying them back to when the order was placed, shows the true cost of a sale.

                ## Milestones
                1. Refund, return shipping, write-off and chargeback costs gathered for the month.
                2. Each cost expressed per order and as a share of net revenue.
                3. The figures matched to the month the original orders were placed, where possible.
                4. The contribution per order baseline updated with the real return cost.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of return and refund cost per order recorded, and the contribution baseline updated with the actual figure."
                cadence: rolling
              tasks:
                - "Total the month's refunds, return shipping, write-offs and chargeback fees @recurring(monthly:18)"
                - "Express each cost per order and as a share of net revenue"
                - "Match returns to the month the original order was placed"
                - "Update the contribution baseline with the actual return cost"
            - name: Annual unit economics model rebuild
              description: |-
                ## Purpose
                Models patched every month for a year collect broken links, hard-coded numbers and formulas nobody remembers writing. Once a year, before budgeting starts, rebuilding the model from clean data, tracing every formula and retiring metrics nobody used gives the coming year a model you can trust.

                ## Milestones
                1. A fresh export of twelve months of data from every source on the data map.
                2. Every formula traced, and hard-coded values removed or labelled.
                3. Metrics nobody used during the year retired.
                4. The rebuilt model checked against last year's version, with differences explained.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A rebuilt model with traced formulas and no unlabelled hard-coded values, reconciled to the previous version before the budget round begins."
                cadence: cyclic
              tasks:
                - "Schedule the model rebuild a month before budgeting starts @recurring(yearly)"
                - "Export twelve months of fresh data from each source"
                - "Trace every formula and label any hard-coded value"
                - "Explain each difference between the rebuilt and the old model"
            - name: Unit economics dashboard for the team
              description: |-
                ## Purpose
                Marketing, sales and operations make choices every week that move acquisition cost and contribution, yet they usually see only revenue. A simple monthly dashboard with the five core metrics, their targets and a twelve-month trend gives each team the number their own work changes.

                ## Milestones
                1. Five core metrics shown with a twelve-month trend and a target line.
                2. Each metric labelled with the team that most affects it.
                3. The dashboard refreshed monthly from the sources on the data map.
                4. Each team lead able to say which metric is theirs.

                ## Notes
                Start from the **Metrics log** template to hold the monthly figures before building any charts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dashboard showing five metrics with trends and targets, refreshed monthly for six months and shared with every team lead."
                cadence: rolling
              tasks:
                - "Choose the five metrics and their target lines"
                - "Label each metric with the team whose work moves it"
                - "Refresh the dashboard with the latest month's figures @recurring(monthly:10)"
                - "Walk each team lead through the metric they influence"
            - name: Quarterly sales and marketing efficiency check
              description: |-
                ## Purpose
                For businesses with a sales team, cost per customer misses how much new recurring contribution each pound or dollar of sales and marketing spend produces. A quarterly efficiency ratio, new annualised contribution divided by the previous quarter's sales and marketing cost, shows whether adding sellers is paying off.

                ## Milestones
                1. Sales and marketing cost for the previous quarter totalled from the ledger.
                2. New annualised contribution from customers won this quarter calculated.
                3. The efficiency ratio recorded alongside the last four quarters.
                4. A short note for leadership on whether to add, hold or cut sales capacity.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly efficiency ratios recorded, each with a written recommendation on sales capacity."
                cadence: rolling
              tasks:
                - "Total last quarter's sales and marketing cost from the ledger"
                - "Calculate new annualised contribution won this quarter"
                - "Record the efficiency ratio beside the last four quarters @recurring(quarterly)"
                - "Write a three-line note on adding, holding or cutting sales capacity"
            - name: Contribution margin versus gross margin
              description: |-
                ## Purpose
                Gross margin stops at cost of goods, while contribution margin also takes out the fees, fulfilment, commissions and other costs that rise with every sale. Understanding the difference, and being able to rebuild both from your own ledger, prevents the common mistake of judging growth on a margin that ignores half the variable costs.

                ## Milestones
                1. Both definitions written in your own words, with an example from your business.
                2. Both margins calculated for last quarter from your ledger.
                3. The cost lines that sit between the two margins listed.
                4. The difference explained to a colleague or co-founder without notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Gross and contribution margin calculated for the last quarter, with the cost lines between them listed and explained to someone else."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a reputable explanation of contribution margin and gross margin"
                - "Calculate both margins for last quarter from your ledger"
                - "List the cost lines that separate the two figures"
                - "Explain the difference to a colleague using your own numbers"
            - name: Three ways to calculate lifetime value
              description: |-
                ## Purpose
                The simple formula, margin divided by churn, gives a very different answer from a cohort-based sum or a discounted cash version, and investors and lenders may use any of them. Working all three on your own data shows how sensitive the answer is and which method suits a business of your age and history.

                ## Milestones
                1. Lifetime value calculated by the simple churn formula.
                2. The same figure calculated by summing cohort contribution over a capped horizon.
                3. A discounted version calculated at a stated discount rate.
                4. A note on which method you will quote and why.

                ## Notes
                The simple formula assumes churn is constant forever, which young businesses almost never see. Treat it as a cross-check, not the headline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lifetime value calculated three ways on the business's own data, with the chosen method and the reason recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Work the simple margin over churn formula on your figures"
                - "Sum cohort contribution over a 36-month horizon"
                - "Discount the cohort figure at a rate agreed with your adviser"
                - "Write down which method you will quote and why"
            - name: Reading retention curves
              description: |-
                ## Purpose
                A retention curve that keeps falling toward zero and one that flattens at 30 percent describe completely different businesses, even with the same first-month churn. Learning to read where a curve flattens, how cohorts compare at the same age and what a curve that bends back up means tells you whether lifetime value is real or wishful.

                ## Milestones
                1. Retention curves plotted for at least six cohorts.
                2. The month where each curve flattens, if it does, identified.
                3. Newer and older cohorts compared at the same age.
                4. A paragraph written on what the curves say about the product's staying power.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Retention curves for six or more cohorts plotted, with flattening points marked and a written interpretation."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Plot retention curves for six cohorts from the cohort table"
                - "Mark the month where each curve flattens"
                - "Compare cohorts at the same age on one chart"
                - "Write a paragraph on what the curves say"
            - name: Blended and paid acquisition cost in practice
              description: |-
                ## Purpose
                Blended acquisition cost, all spend over all new customers, looks healthy when word of mouth is strong, while paid acquisition cost shows what growth costs once you have to buy it. Working through both on your data, and watching how the gap moves as paid spend rises, is worth doing before planning any marketing budget.

                ## Milestones
                1. Blended and paid acquisition cost calculated for each of the last six months.
                2. The share of new customers from unpaid channels shown per month.
                3. The relationship between paid spend and the gap noted.
                4. A one-line rule for which figure to use in which decision.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six months of blended and paid acquisition cost calculated side by side, with a written rule for when each is used."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Calculate blended and paid acquisition cost for six months"
                - "Chart the share of new customers from unpaid channels"
                - "Note how the gap moved as paid spend changed"
                - "Write which figure each type of decision should use"
            - name: Per-unit sensitivity table in a spreadsheet
              description: |-
                ## Purpose
                Knowing that payback is eleven months is less useful than knowing it becomes eighteen if retention slips five points or ad costs rise by a fifth. Building a two-way sensitivity table in your spreadsheet tool, once, gives you a skill you will reuse for every pricing, channel and supplier decision in this area.

                ## Milestones
                1. The model's key outputs linked to a small block of input cells.
                2. A two-way table of payback against acquisition cost and retention.
                3. A second table of contribution against price and cost of goods.
                4. The inputs that move results most highlighted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Two working sensitivity tables linked to the model's live inputs, with the most influential inputs highlighted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Move the model's key inputs into a single input block"
                - "Build a two-way table of payback by acquisition cost and retention"
                - "Build a table of contribution by price and cost of goods"
                - "Highlight the two inputs that move results most"
            - name: Attribution basics for channel acquisition cost
              description: |-
                ## Purpose
                Channel acquisition cost is only as good as the way customers are credited to channels, and ad platforms each claim more conversions than the business actually gained. Learning last click, first touch and self-reported attribution, and comparing them on your own customers, shows how far to trust each channel's number.

                ## Milestones
                1. Last click, first touch and self-reported attribution explained in your own notes.
                2. A how did you hear about us question added at checkout or sign-up.
                3. Two months of new customers compared across the three methods.
                4. A house attribution rule chosen and written on the definitions sheet.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three attribution methods compared on two months of new customers, with the chosen house rule recorded on the definitions sheet."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a short note on last click, first touch and self-reported attribution"
                - "Add a how did you hear about us question at checkout or sign-up"
                - "Compare two months of customers under each method"
                - "Record the house attribution rule on the definitions sheet"
            - name: Benchmark ranges and their limits
              description: |-
                ## Purpose
                Ratios such as three to one for lifetime value against acquisition cost, or payback under twelve months, are quoted everywhere and fit many businesses badly. Collecting the benchmarks used in your sector, with their source and the type of company they describe, helps you judge your own figures without chasing someone else's target.

                ## Milestones
                1. Five or more published benchmarks collected with source, date and company type.
                2. Each benchmark marked as relevant or not to your model, stage and margin.
                3. Your own figures set beside the relevant benchmarks.
                4. A note on which benchmarks you will cite and which you will not.

                ## Notes
                Start from the **Reading queue** template to collect sources. Be wary of any benchmark older than three years or drawn only from venture-backed software firms if you are not one.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A benchmark list of at least five sourced figures, each marked relevant or not, with your own numbers alongside."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect five published unit economics benchmarks for your sector"
                - "Note each benchmark's source, date and the companies it describes"
                - "Set your own figures beside the relevant benchmarks"
                - "Write down which benchmarks you will cite and why"
            - name: Price increase impact on unit economics
              description: |-
                ## Purpose
                A price rise lifts contribution on every unit but may lower conversion and retention, and the volume you can lose before you are worse off is usually larger than owners expect. Modelling the rise before announcing it turns a nervous guess into a decision with a number attached.

                ## Milestones
                1. The proposed new price and the date it would apply written down.
                2. Contribution per unit recalculated at the new price.
                3. The customer or volume loss at which the rise breaks even calculated.
                4. Effects on payback and lifetime value shown for low, middle and high loss cases.
                5. A decision recorded with the evidence behind it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded pricing decision backed by the break-even volume loss and payback under three loss scenarios."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down the proposed price and the date it would start"
                - "Recalculate contribution per unit at the new price"
                - "Work out how many customers you could lose and still break even"
                - "Record the decision and the numbers it was based on"
            - name: Discount and promotion economics check
              description: |-
                ## Purpose
                Discounting by 20 percent on a product with 40 percent contribution halves the money each sale brings in, so volume has to double just to stand still. Checking the last two promotions against that arithmetic, and whether discounted customers came back at full price, sets a rule for future offers.

                ## Milestones
                1. The last two promotions listed with discount, extra orders and duration.
                2. Contribution earned during each promotion compared with a normal period.
                3. Repeat purchase rate of promotion customers compared with full-price customers.
                4. A written rule for the deepest discount the business will run, and when.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two past promotions analysed for contribution and repeat behaviour, with a written discount rule adopted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the last two promotions with discount depth and extra orders"
                - "Compare contribution in each promotion with a normal period"
                - "Check whether promotion customers bought again at full price"
                - "Write the maximum discount rule for future offers"
            - name: Scale or cut decision for an acquisition channel
              description: |-
                ## Purpose
                Most businesses have one channel that costs more than its customers are worth and keep it running because it brings volume. Taking the weakest channel by payback and deciding, with a clear test and an end date, whether to fix it, shrink it or stop it frees budget for channels that pay back.

                ## Milestones
                1. Channels ranked by payback period using the channel tracker.
                2. The weakest channel's customer quality checked on retention and contribution, not just cost.
                3. One improvement test run for a set period with a pass mark.
                4. A recorded decision to scale, hold, shrink or stop the channel.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The weakest channel by payback has had one time-boxed test and a recorded decision to scale, hold, shrink or stop."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Rank every paid channel by payback period"
                - "Check retention and contribution of customers from the weakest channel"
                - "Set a six-week test with a payback pass mark"
                - "Record the channel decision and move the budget accordingly"
            - name: Free shipping threshold and minimum order value
              description: |-
                ## Purpose
                Shipping is often the largest variable cost on small online orders, and a free shipping threshold set by habit can make the smallest orders loss-making. Modelling order value against shipping cost shows where to set the threshold, or a minimum order, so most orders pay for their own delivery.

                ## Milestones
                1. Order values from the last three months grouped into bands.
                2. Shipping and packaging cost per order calculated for each band.
                3. Contribution per band showing which orders lose money.
                4. A threshold or minimum order chosen, with its expected effect written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A threshold or minimum order value chosen from banded contribution data, with the expected effect recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Group the last three months of orders into order value bands"
                - "Add shipping and packaging cost to each band"
                - "Find the bands where contribution turns negative"
                - "Set the threshold or minimum order and note the expected effect"
            - name: Cost to serve per customer
              description: |-
                ## Purpose
                Support tickets, onboarding calls, account management and failed deliveries are real per-customer costs that rarely appear in a margin calculation. Measuring how much each customer costs to look after, and which types cost the most, often explains why a segment with a good acquisition cost still makes little money.

                ## Milestones
                1. Service activities listed with an hourly or per-event cost.
                2. Service time or events per customer estimated for the last quarter.
                3. Cost to serve added into contribution per customer.
                4. The two most expensive customer types to serve named, with one change to reduce it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cost to serve per customer included in contribution, with the two costliest customer types named and one reduction step started."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every service activity and give it an hourly or per-event cost"
                - "Estimate service time per customer for last quarter"
                - "Record support tickets and service hours per customer @recurring(monthly:22)"
                - "Choose one change that lowers cost to serve for the costliest type"
            - name: Referral programme economics
              description: |-
                ## Purpose
                Referral rewards look cheap next to ad spend, but rewards paid to customers who would have recommended you anyway are pure cost. Modelling the reward, the expected referral rate and the retention of referred customers, before launch or at the next review, shows whether the programme beats your paid channels on payback.

                ## Milestones
                1. Reward cost per successful referral calculated, including any reward to the new customer.
                2. Referred customers' retention and contribution compared with other channels.
                3. An estimate made of referrals that would have happened without the reward.
                4. A decision recorded to launch, keep, change or close the programme.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the referral programme based on reward cost, referred customer retention and an estimate of non-incremental referrals."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate reward cost per successful referral"
                - "Compare retention of referred customers with other channels"
                - "Estimate how many referrals would happen with no reward"
                - "Record whether to launch, keep, change or close the programme"
            - name: Free trial and freemium conversion economics
              description: |-
                ## Purpose
                Free users cost hosting, support and onboarding time, and only the fraction that converts ever pays that back. Working out the cost of each free user, the conversion rate by sign-up cohort and the resulting acquisition cost per paying customer shows whether the free tier is a channel or a drain.

                ## Milestones
                1. Monthly cost per free or trial user estimated.
                2. Conversion from free to paid measured by sign-up cohort.
                3. Acquisition cost per paying customer recalculated to include free user costs.
                4. A decision made on trial length, free tier limits or neither.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Acquisition cost per paying customer recalculated to include free user costs, with a recorded decision on trial or free tier changes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate hosting and support cost per free user per month"
                - "Measure free to paid conversion for each sign-up cohort"
                - "Add free user cost into acquisition cost per paying customer"
                - "Record a decision on trial length or free tier limits"
            - name: Annual versus monthly plan economics
              description: |-
                ## Purpose
                Customers paying a year upfront hand you cash that can shorten payback to almost nothing and they usually churn less, but the discount offered to win them costs contribution. Comparing annual and monthly customers on retention, discount and cash timing shows how hard to push annual plans.

                ## Milestones
                1. Annual and monthly customers compared on 12-month retention.
                2. The annual discount's cost in contribution calculated.
                3. Cash payback compared for an annual and a monthly customer.
                4. A target share of annual plans and a discount level agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Annual and monthly plans compared on retention, discount cost and cash payback, with a target annual share agreed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare 12-month retention for annual and monthly customers"
                - "Calculate the contribution given up by the annual discount"
                - "Work out cash payback for each plan type"
                - "Agree the annual plan discount and the share you will aim for"
            - name: Unit economics pack for a fundraising data room
              description: |-
                ## Purpose
                Investors doing diligence will rebuild your acquisition cost, lifetime value and payback from raw data, and figures that do not reconcile cost credibility fast. Preparing a pack with definitions, cohort tables, channel data and a tie-out to the accounts before the raise starts means questions get answered in days, not weeks.

                ## Milestones
                1. Definitions sheet, cohort tables and channel data exported to a data room folder.
                2. Every headline metric reconciled to the management accounts.
                3. Known weaknesses in the data written up honestly.
                4. A friendly investor or adviser has reviewed the pack and their questions are answered.

                ## Notes
                Present history, not promises. Let your lawyer or corporate finance adviser check what goes into the data room and how forward-looking figures are labelled.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A data room folder holding definitions, cohort and channel data reconciled to the accounts, reviewed by an outside adviser before the raise opens."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Create the data room folder and its index"
                - "Reconcile each headline metric to the management accounts"
                - "Write a short note on the known weaknesses in the data"
                - "Ask a friendly investor or adviser to test the pack"
            - name: Board meeting unit economics slide
              description: |-
                ## Purpose
                Boards and investors want the same few unit metrics every quarter, in the same format, so they can see the direction of travel. A standing slide with contribution, acquisition cost, payback and the latest cohort, plus three lines of commentary, saves rebuilding the story before every meeting.

                ## Milestones
                1. A slide layout agreed with the chair or lead investor.
                2. Five quarters of history shown for each metric.
                3. Three lines of commentary covering what moved and what you are doing about it.
                4. The slide used at two consecutive board meetings.

                ## Notes
                Start from the **Board meeting** template. Keep the definitions unchanged between meetings; if one must change, say so on the slide.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The same unit economics slide presented at two consecutive board meetings, with five quarters of history and written commentary."
                cadence: cyclic
              tasks:
                - "Agree the slide layout with the chair or lead investor"
                - "Fill in five quarters of history for each metric"
                - "Update the slide and its commentary before each board meeting @recurring(quarterly)"
            - name: Unit economics case for a new product or offer
              description: |-
                ## Purpose
                New products are often launched on a gross margin guess, then found to need a different channel, a longer sales cycle or more support. Building the expected contribution, acquisition cost and payback for the new offer before the launch date, with a threshold for pulling it, means the launch is judged against a number set in advance.

                ## Milestones
                1. Expected price, variable costs and contribution per unit for the new offer.
                2. Expected acquisition cost based on the channels it will use.
                3. Payback and a threshold below which the offer is withdrawn or reworked.
                4. Actual results compared with the case 90 days after launch.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A pre-launch case with contribution, acquisition cost, payback and a withdrawal threshold, compared with actuals 90 days after launch."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Estimate price, variable costs and contribution for the new offer"
                - "Estimate acquisition cost from the channels it will rely on"
                - "Set the payback threshold below which the offer is reworked"
                - "Compare actual results with the case 90 days after launch"
            - name: Peak season campaign unit economics check
              description: |-
                ## Purpose
                Peak trading periods such as the year-end holidays push ad costs up, bring more one-time buyers and raise return rates, so a peak customer is worth less than an ordinary one. Setting a cost ceiling per new customer before the season, and checking peak cohorts three months later, shows whether the extra volume was worth buying.

                ## Milestones
                1. A maximum acquisition cost for the peak period set from expected peak customer value.
                2. Weekly spend limits agreed for each peak campaign.
                3. Peak customers tagged as their own cohort.
                4. Peak cohort retention and contribution reviewed three months after the season.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A peak season cost ceiling set in advance, and the peak cohort's retention and contribution reviewed three months afterwards."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set a maximum acquisition cost for peak season customers"
                - "Agree weekly spend limits for each peak campaign"
                - "Tag customers won during peak as their own cohort"
                - "Review peak cohort retention three months after the season"
            - name: New location or site unit economics
              description: |-
                ## Purpose
                Opening a second shop, clinic, kitchen or warehouse creates a unit in its own right, with its own fit-out, local acquisition cost and ramp-up period. Modelling site-level contribution, the months to recover the opening cost and the sales level a site needs, using the first location's real numbers, gives the owner a test any new site must pass.

                ## Milestones
                1. The first location's monthly site-level contribution calculated from actual figures.
                2. A ramp-up curve for a new site estimated from the first site's early months.
                3. Months to recover the opening cost calculated at three sales levels.
                4. A minimum sales level a new site must reach written down.

                ## Notes
                Keep head office costs out of site contribution, but show them separately so the total still adds up.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A site-level model based on the first location's actuals, showing months to recover opening cost at three sales levels and a minimum sales hurdle."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Calculate the first location's monthly site-level contribution"
                - "Estimate a ramp-up curve from the first site's early months"
                - "Work out months to recover opening cost at three sales levels"
                - "Write the minimum sales level any new site must reach"
            - name: Client economics for a solo service business
              description: |-
                ## Purpose
                Consultants, designers, therapists and tradespeople working alone rarely think in acquisition cost, but every proposal written, discovery call and free quote is selling time with a price. Counting that time, the clients it wins and how long they stay shows which kind of client is worth chasing and what each one is really worth.

                ## Milestones
                1. Hours spent winning work last quarter estimated and given an hourly value.
                2. Clients won, average fees and months retained recorded.
                3. Acquisition cost and lifetime value per client calculated from your own time.
                4. One type of client or lead source dropped or prioritised as a result.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Acquisition cost and lifetime value per client calculated from your own selling time, with one lead source dropped or prioritised."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Estimate the hours spent winning work last quarter"
                - "Record clients won, average fees and months retained"
                - "Log the hours spent on proposals, calls and quotes @recurring(monthly:25)"
                - "Drop or prioritise one lead source based on the numbers"
            - name: Pre-revenue unit economics hypotheses
              description: |-
                ## Purpose
                Before the first sale, unit economics is a set of hypotheses about price, cost per unit, acquisition channel and repeat rate, and the job is to test the riskiest one cheaply. Writing those hypotheses down, with the evidence that would prove each wrong, keeps early experiments pointed at the number that decides whether the business can work.

                ## Milestones
                1. Price, cost per unit, acquisition cost and repeat rate written as hypotheses with ranges.
                2. The hypothesis with the biggest effect on viability identified.
                3. A small test designed for it, such as a landing page, pre-order or paid pilot.
                4. Test results recorded and the hypotheses updated.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four unit economics hypotheses recorded with ranges, and the riskiest one tested with results written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write price, unit cost, acquisition cost and repeat rate as ranges"
                - "Pick the hypothesis that decides whether the business works"
                - "Design a small test such as a pre-order page or paid pilot"
                - "Record the test result and update the ranges"
            - name: Checking an inherited growth target pays back
              description: |-
                ## Purpose
                Managers handed a target, say doubling new customers next year, are rarely given the acquisition cost and payback assumptions behind it. Working out what the target implies for spend, cost per customer and cash before committing lets you go back to leadership with a plan that adds up, or with the trade-offs it needs.

                ## Milestones
                1. The target translated into new customers per month.
                2. Spend needed calculated at current and at rising acquisition cost.
                3. Payback and cash needed for the extra customers shown.
                4. A short note to leadership agreeing the target or naming the trade-offs.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A note to leadership showing the spend, payback and cash a growth target implies, with agreement or named trade-offs recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Convert the growth target into new customers needed each month"
                - "Calculate the spend needed at current and rising acquisition cost"
                - "Show the payback and cash required for the extra customers"
                - "Ask the agent to draft the note to leadership from your figures"
            - name: Marketplace unit economics on both sides
              description: |-
                ## Purpose
                Marketplaces pay to acquire buyers and sellers, earn a take rate on the transactions between them and can look profitable per order while losing money per seller. Modelling contribution per transaction, acquisition cost on each side and how many transactions a seller and a buyer produce over time shows where the model breaks.

                ## Milestones
                1. Take rate and contribution per transaction calculated after payment and support costs.
                2. Acquisition cost calculated separately for buyers and sellers.
                3. Transactions per buyer and per seller over 12 months taken from cohort data.
                4. Payback calculated for each side.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Contribution per transaction and payback for buyers and sellers calculated separately from 12 months of cohort data."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate take rate and contribution per transaction"
                - "Split acquisition cost between buyers and sellers"
                - "Count transactions per buyer and per seller over 12 months"
                - "Work out payback separately for each side"
            - name: Sales-led business-to-business unit economics
              description: |-
                ## Purpose
                With a six-month sales cycle, acquisition cost includes pipeline that never closes and sellers' time spread across many deals, and contract values vary widely. Calculating acquisition cost per closed account by deal size, with the sales cycle built into payback, gives a manager or founder the real cost of each new contract.

                ## Milestones
                1. Sales and marketing cost per closed account calculated by deal size segment.
                2. Average sales cycle length added to the payback calculation.
                3. Contract value, expansion and renewal rates per segment recorded.
                4. Payback per segment compared with the target.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Acquisition cost and payback per closed account calculated for each deal size segment, including sales cycle length."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Split closed accounts into deal size segments"
                - "Allocate sales and marketing cost to each segment"
                - "Add sales cycle length into the payback calculation"
                - "Compare each segment's payback with the target"
            - name: Wholesale versus direct-to-consumer channel economics
              description: |-
                ## Purpose
                Selling through retailers or distributors means a lower price per unit but almost no acquisition cost per end customer, while selling direct means full price and paying for every customer. Comparing contribution per unit and per account in each route shows a small brand where extra volume should come from.

                ## Milestones
                1. Contribution per unit for wholesale and direct, including trade discounts, fulfilment and marketing.
                2. Acquisition cost per wholesale account and per direct customer.
                3. Payment terms and their cash effect noted for each route.
                4. A preferred channel mix for the next year agreed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Wholesale and direct channels compared on contribution per unit, acquisition cost and cash timing, with a channel mix agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate contribution per unit for wholesale and direct sales"
                - "Work out acquisition cost per wholesale account and per direct customer"
                - "Note payment terms and their cash effect for each route"
                - "Agree the channel mix for the coming year"
            - name: Predictive lifetime value from survival curves
              description: |-
                ## Purpose
                Once you have two or more years of cohorts, a fitted survival curve predicts how long today's customers will stay better than averages do, and it lets you estimate a new cohort's value after three months. Building one, and checking it against cohorts that have already matured, gives an earlier read on whether this quarter's customers are good ones.

                ## Milestones
                1. A survival or decay curve fitted to at least eight mature cohorts.
                2. The fit tested by predicting a cohort's month-12 value from its first three months.
                3. Prediction error recorded for each test cohort.
                4. The method documented so it can be rerun each quarter.

                ## Notes
                Most fitted curves overstate the long tail. Cap the horizon and keep the simple cohort estimate alongside the prediction.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A fitted retention curve that predicts month-12 cohort value from three months of data, with error recorded for at least four test cohorts."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose eight or more mature cohorts for fitting"
                - "Fit a decay curve to their retention data"
                - "Predict month-12 value for four cohorts from their first three months"
                - "Record the prediction error and write up the method"
            - name: Incrementality testing for channel acquisition cost
              description: |-
                ## Purpose
                Some customers credited to paid channels would have bought anyway, especially from branded search and retargeting, which makes those channels look cheaper than they are. Running a holdout test, withholding a channel from one region or audience and comparing results, measures the customers the channel truly adds.

                ## Milestones
                1. A channel chosen where incrementality is most in doubt.
                2. A holdout design with control and test groups and a minimum duration.
                3. Results showing incremental customers and incremental acquisition cost.
                4. Channel acquisition cost in the tracker adjusted using the result.

                ## Notes
                Small businesses rarely have the volume for a clean test. If weekly new customers per region are in single figures, run the test longer rather than reading noise.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One holdout test completed, giving an incremental acquisition cost for a channel that is then used in the channel tracker."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick the channel whose reported customers you trust least"
                - "Design a holdout by region or audience with a minimum duration"
                - "Run one holdout test on a paid channel @recurring(quarterly)"
                - "Adjust the channel's acquisition cost using the incremental result"
            - name: Marginal acquisition cost and spend saturation
              description: |-
                ## Purpose
                Average cost per customer hides the fact that each extra pound or dollar in a channel usually buys fewer customers than the last. Plotting spend against new customers week by week, and estimating the marginal cost at higher budgets, tells you the point at which more spend stops paying back.

                ## Milestones
                1. Weekly spend and new customers for a paid channel gathered over at least six months.
                2. A curve fitted showing diminishing returns.
                3. Marginal acquisition cost estimated at current spend and at 50 percent more.
                4. A budget ceiling per channel set where marginal payback crosses your target.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Marginal acquisition cost estimated for at least one channel at two spend levels, with a budget ceiling set against the payback target."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather six months of weekly spend and new customers per paid channel"
                - "Fit a diminishing returns curve to the weekly data"
                - "Estimate marginal acquisition cost at current spend and at 50 percent more"
                - "Set a budget ceiling where marginal payback misses the target"
            - name: Net revenue retention and expansion in the model
              description: |-
                ## Purpose
                For businesses with upgrades, add-ons or usage pricing, customers who spend more over time can outweigh those who leave, and a model that ignores expansion undervalues every cohort. Measuring net revenue retention by cohort and segment, and feeding expansion into lifetime value, shows which customers grow and which only stay.

                ## Milestones
                1. Net revenue retention calculated for each annual cohort.
                2. Expansion, contraction and churn shown as separate movements.
                3. The segments that expand most identified.
                4. Lifetime value recalculated with expansion included, beside the version without it.

                ## Notes
                Show both versions of lifetime value to investors and lenders. Expansion that depends on a few large accounts can disappear with one of them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Net revenue retention tracked monthly by cohort for six months, with lifetime value shown with and without expansion."
                cadence: rolling
              tasks:
                - "Split revenue movement into expansion, contraction and churn"
                - "Calculate net revenue retention for each annual cohort"
                - "Record net revenue retention for the latest month @recurring(monthly:12)"
                - "Recalculate lifetime value with expansion beside the plain version"
---

# Unit Economics Modelling

This area is for founders, managers and small business owners who want to know whether each new customer makes or loses money. It starts with the foundations (choosing the unit, a definitions sheet, a cost split, contribution per order, fully loaded acquisition cost, a cohort table, lifetime value and payback), then the monthly and quarterly machinery that keeps the numbers current, the skills behind them, decisions on price, discounts, channels and plans, dated moments such as a fundraise or a board meeting, versions for solo operators, pre-revenue founders, marketplaces and sales-led teams, and finally specialist work on predictive lifetime value, incrementality and marginal acquisition cost.

What repeats is a monthly review a week after the books close, a channel cost tracker, a weekly paid spend check, monthly sweeps of supplier cost changes and returns, a quarterly cohort refresh and board slide, and a yearly model rebuild before budgeting starts. The Meeting notes, Risk register, Metrics log, Reading queue and Board meeting templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
