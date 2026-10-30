---
id: data-analytics.customer-lifetime-value-analysis
name: Customer Lifetime Value Analysis
description: "Clean order and margin data, historic and model-based customer value, acquisition cost and payback by channel, and the rules that turn CLV into spending caps, retention limits and budgets."
category: business
version: 1.0.0
tags: [data-analytics, customer-lifetime-value-analysis, knowledge-worker, founder, small-business, unit-economics, customer-acquisition-cost, payback]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - reading-queue
    - purchase-decision
    - board-meeting
    - meeting-notes
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Customer Lifetime Value Analysis
          description: "Estimating what each customer or segment is worth over time and using it to guide acquisition spend, pricing and retention efforts."
          projects:
            - name: Written brief for what lifetime value will decide
              description: |-
                ## Purpose
                Lifetime value numbers get built and then ignored when nobody agreed which decision they were meant to inform. Writing down the two or three decisions CLV will feed, such as the most you can pay to win a customer in each channel or how much a retention offer may cost, fixes the level of detail, the horizon and the audience before any modelling starts. It also stops a six-week model being built for a question a spreadsheet answers in an afternoon.

                ## Milestones
                1. A one-page brief naming two or three decisions the CLV figure will inform.
                2. Each decision linked to its owner and the date it is next made.
                3. The level of detail each decision needs stated: whole business, channel, segment or individual customer.
                4. The brief agreed by the person who will act on the number.

                ## Notes
                If nobody can name a decision that would change with a better CLV figure, a simple historic average is enough for now.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed-off one-page brief lists the decisions CLV will inform, their owners and the level of detail each one needs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the decisions where customer value is currently guessed"
                - "Ask each decision owner what number would change their choice"
                - "Write the one-page brief with decisions, owners and level of detail"
                - "Get the brief agreed by the main decision owner"
            - name: Order and customer data extract for value analysis
              description: |-
                ## Purpose
                Customer value is built from four facts: who bought, when, how much, and what was later refunded. Finding where each lives, whether the ecommerce platform, the billing system, the payment processor or the accounting package, and pulling a clean extract with at least two years of history is the step most first attempts skip. Gaps found now, such as missing guest orders or a platform migration that reset customer IDs, would otherwise surface as strange results months later.

                ## Milestones
                1. Every system holding orders, subscriptions or refunds listed with its owner.
                2. An extract with customer ID, order date, order value and refund amount for at least 24 months, where that much history exists.
                3. Known gaps such as migrations, test orders and staff purchases written down.
                4. Yearly revenue in the extract reconciled to the finance figures within an agreed tolerance.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An order-level extract covering the available history reconciles to finance revenue within the agreed tolerance, with known gaps documented."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every system that records orders, subscriptions or refunds"
                - "Export customer ID, order date, value and refunds for all available history"
                - "Remove test orders, staff purchases and internal accounts"
                - "Compare the extract's yearly revenue with the finance totals"
                - "Write a short note on gaps and migrations in the data"
            - name: Customer key for lifetime value calculations
              description: |-
                ## Purpose
                If one person appears as three customers because they checked out as a guest, changed email and later opened an account, their value is split three ways and CLV looks lower and shorter than it is. Choosing a single key for value work, with a documented rule for linking guest orders and duplicate accounts, matters more than any model choice. Keep it a working rule for this analysis; a company-wide customer master is a separate effort.

                ## Milestones
                1. The customer identifier used for value analysis chosen and written down.
                2. A matching rule for guest orders and duplicate accounts, such as normalised email, documented.
                3. The share of orders linked to a known customer measured before and after matching.
                4. Orders per customer compared before and after matching, with the change explained.

                ## Notes
                Be cautious with matching on name and postal address alone: families and shared offices collapse into one customer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented customer key and matching rule are in use, with the share of orders linked to a customer reported before and after matching."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count orders with no customer ID or with a guest checkout flag"
                - "Choose the identifier and matching rule for value work"
                - "Apply the rule and measure how many duplicate customers merge"
                - "Record the rule and its effect in the CLV method note"
            - name: Contribution margin per order for CLV
              description: |-
                ## Purpose
                Revenue-based lifetime value flatters customers who buy low-margin products, use heavy discounts or send half their orders back. Working out contribution per order, meaning revenue less product cost, payment fees, shipping, packaging and returns, turns CLV into a figure you can set against what a customer costs to acquire. Finance usually holds most of these costs already; the work is applying them at order level.

                ## Milestones
                1. A list of variable costs to deduct per order agreed with finance.
                2. Product or delivery cost attached to each order line, or a category average where line costs are missing.
                3. Contribution per order calculated for the full extract.
                4. Total contribution reconciled to the management accounts within a few percentage points.

                ## Notes
                Leave fixed overheads such as rent and salaries out. CLV is for comparing customers and channels, not for spreading the whole cost base.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every order in the extract carries a contribution figure, and total contribution reconciles to the management accounts within an agreed margin."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask finance for the variable costs per order they already track"
                - "Attach product or delivery cost to each order line"
                - "Subtract fees, shipping and returns to get contribution per order"
                - "Reconcile total contribution with the management accounts"
                - "Update product costs and fee rates in the margin table @recurring(quarterly)"
            - name: Time horizon and discount rate for CLV
              description: |-
                ## Purpose
                A lifetime value with no stated horizon invites people to imagine customers who stay forever, and undiscounted future profit treats a sale in year five as if it arrived today. Agreeing a horizon, often three or five years, and a discount rate with finance puts every later figure on the same footing. Write the choice down, because the next person to build a model will otherwise pick different ones.

                ## Milestones
                1. A horizon agreed and its reason written down, such as the payback period lenders or investors look at.
                2. An annual discount rate agreed with finance, taken from their planning rate or a stated proxy.
                3. The effect of each choice shown on one example customer.
                4. Both choices recorded in the CLV method note with the date agreed.

                ## Notes
                Finance owns the discount rate. Your job is to use the one they plan with, not to invent a new one.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A CLV horizon and discount rate are agreed with finance and recorded with their reasons and the date of agreement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask finance which discount rate they use for planning"
                - "Show how a three and a five year horizon change one example CLV"
                - "Agree the horizon and rate with the finance owner"
                - "Write both choices and their reasons into the method note"
            - name: Historic value per customer by acquisition year
              description: |-
                ## Purpose
                Before predicting anything, look at what customers have actually been worth. Grouping customers by the quarter or year of their first order and adding up contribution per customer at 6, 12, 24 and 36 months gives a realised value curve that needs no model and that anyone can check. It is also the yardstick every later prediction will be judged against.

                ## Milestones
                1. Customers grouped by quarter or year of first order.
                2. Average cumulative contribution per customer at 6, 12, 24 and 36 months for each group.
                3. A chart of cumulative value curves by acquisition group.
                4. Two or three observations written down, such as newer groups earning faster or slower than older ones.

                ## Notes
                This is value per customer, not a retention curve. Count every customer in the group in the denominator, including those who never bought again.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table and chart show average cumulative contribution per customer at 6, 12, 24 and 36 months for every acquisition group with enough history."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Tag each customer with the quarter of their first order"
                - "Sum contribution per customer at 6, 12, 24 and 36 months"
                - "Divide by all customers acquired in each group, not only repeat buyers"
                - "Chart the cumulative value curves and write three observations"
            - name: Formula CLV for a subscription business
              description: |-
                ## Purpose
                For monthly or annual subscriptions, a first estimate takes average revenue per account, multiplies by gross margin and divides by the churn rate. It is quick and widely understood, but it assumes churn is constant, which it rarely is in the first months. Building it alongside a note on its limits gives a usable number this week and shows where a better model would change the answer.

                ## Milestones
                1. Average monthly revenue per account and gross margin calculated for the last 12 months.
                2. Monthly logo churn calculated with a definition that matches the finance figures.
                3. Formula CLV calculated, with the implied average lifetime in months shown.
                4. A note on how far early churn differs from later churn, and what that does to the estimate.

                ## Notes
                Divide by churn only when it is reasonably stable. A 2 percent monthly churn implies a 50 month average life, which may be longer than the company has existed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A formula CLV for subscribers is calculated from 12 months of revenue, margin and churn, with the implied lifetime and its main limitation written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate average monthly revenue per paying account"
                - "Calculate monthly churn using the finance definition"
                - "Compute margin times revenue divided by churn, and the implied lifetime"
                - "Compare churn in the first three months with churn after month six"
            - name: Formula CLV for repeat-purchase customers
              description: |-
                ## Purpose
                Shops, cafes and other repeat-purchase businesses have no cancellation date, so the subscription formula does not fit. Average order value times orders per year times contribution margin times expected years as a customer gives a first figure, as long as the expected years come from your own history rather than hope. It is the version most small businesses can build in an afternoon from a sales export.

                ## Milestones
                1. Average order value and orders per customer per year calculated from the last 24 months.
                2. Expected active years estimated from the historic value curves, with the method stated.
                3. Formula CLV calculated overall and for new versus returning customers.
                4. The figure compared with realised 24 month value per customer, with the gap explained.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A repeat-purchase CLV is calculated from 24 months of orders and compared with realised 24 month value per customer, with the gap explained."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate average order value and orders per customer per year"
                - "Estimate expected active years from the historic value curves"
                - "Multiply through to a formula CLV using contribution margin"
                - "Check the result against realised 24 month value per customer"
            - name: Customer acquisition cost by channel
              description: |-
                ## Purpose
                Lifetime value means little until it sits beside what a customer costs to win. Splitting acquisition cost by channel, covering paid media, agency fees, first-order promotions and the sales or marketing time spent on acquisition, shows which channels bring in customers worth more than they cost. Decide early whether you report paid-only CAC, fully loaded CAC or both, and label them clearly.

                ## Milestones
                1. Acquisition spend by channel for the last four quarters gathered from ad accounts and finance.
                2. New customers per channel counted with the same attribution rule each quarter.
                3. Paid-only and fully loaded CAC calculated and labelled separately.
                4. Blended CAC reconciled to total acquisition spend divided by total new customers.

                ## Notes
                Attribution choices move channel CAC more than anything else. Record the rule you used so next quarter's numbers can be compared.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Paid-only and fully loaded CAC are reported by channel for four quarters, using one documented attribution rule."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the last four quarters of spend by channel from each ad account"
                - "Add agency fees, first-order discounts and acquisition staff time"
                - "Count new customers per channel using one stated attribution rule"
                - "Calculate paid-only and fully loaded CAC for each channel"
            - name: One-page CLV method note
              description: |-
                ## Purpose
                Within a year someone will ask why last quarter's CLV differs from the figure in the fundraising deck, and the answer will depend on choices nobody wrote down. A single page covering data sources, customer key, margin definition, horizon, discount rate, model and known gaps makes every figure traceable. It also lets a new analyst reproduce the number without reverse engineering a spreadsheet.

                ## Milestones
                1. A page listing data sources, customer key, margin rule, horizon, discount rate and model.
                2. Each choice dated and linked to the person who agreed it.
                3. A short list of known limitations in plain language.
                4. The note stored where every CLV report can link to it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page CLV method note exists, and every current report that shows CLV links to it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather the decisions already made on data, margin, horizon and rate"
                - "Write the method note on one page with dates and owners"
                - "Ask the agent to rewrite the limitations section in plain language"
                - "Add a link to the note on every report that shows CLV"
            - name: Monthly CLV refresh
              description: |-
                ## Purpose
                Customer value drifts as prices, product mix and acquisition channels change, and a figure calculated once goes stale within a quarter. A fixed monthly refresh, with the same extract, the same steps and a short change note, keeps the number current and makes sudden jumps visible before they reach a planning meeting.

                ## Milestones
                1. Refresh steps written as a numbered checklist that someone else could follow.
                2. Overall and segment CLV updated in the log every month.
                3. Any movement above an agreed threshold explained in one line.
                4. Six consecutive monthly refreshes completed.

                ## Notes
                Start from the **Metrics log** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly CLV refreshes are logged, each with any movement above the agreed threshold explained."
                cadence: rolling
              tasks:
                - "Write the refresh steps as a numbered checklist"
                - "Set the size of movement that needs a written explanation"
                - "Rerun the CLV calculation and update the log @recurring(monthly:4)"
                - "Explain any segment that moved more than the threshold"
            - name: LTV to CAC ratio by channel report
              description: |-
                ## Purpose
                The ratio of lifetime value to acquisition cost tells marketing which channels are paying back and which are buying customers at a loss. Reported monthly by channel, using contribution-based CLV and the same CAC rule each time, it gives one shared view that ends arguments about which campaign worked. Ratios of three to one are often quoted as healthy, but your own margins and cash position decide the right threshold.

                ## Milestones
                1. A monthly table of CLV, CAC and their ratio for each acquisition channel.
                2. Channels with too few new customers flagged instead of reported as precise.
                3. A threshold ratio agreed with the budget owner.
                4. The report sent to marketing and finance every month for six months.

                ## Notes
                Use CLV from customers acquired long enough ago to have some history. Brand-new channels need a predicted value with an honest range.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A channel LTV to CAC report has been sent monthly for six months, with low-volume channels flagged and an agreed threshold shown."
                cadence: rolling
              tasks:
                - "Agree the threshold ratio with the person who owns the budget"
                - "Set a minimum number of new customers before a channel is reported"
                - "Publish CLV, CAC and the ratio by channel @recurring(monthly:9)"
                - "Flag any channel that falls below the threshold two months running"
            - name: CAC payback period tracker
              description: |-
                ## Purpose
                A business can have an excellent LTV to CAC ratio and still run short of cash if customers take three years to repay what it cost to win them. Tracking how many months of contribution each acquisition group needs to cover its CAC shows the cash side of growth, which founders and lenders watch closely. Shorter payback leaves more room to grow without new funding.

                ## Milestones
                1. Months to payback calculated for each acquisition group and main channel.
                2. Payback shown on the same chart as the historic value curves.
                3. A target payback period agreed with whoever owns cash planning.
                4. The tracker updated monthly and the trend reported quarterly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Payback months by acquisition group and channel are updated monthly for six months and compared with an agreed target."
                cadence: rolling
              tasks:
                - "Calculate months of contribution needed to cover CAC for each group"
                - "Agree a target payback period with the cash planning owner"
                - "Update payback by acquisition group and channel @recurring(monthly:12)"
                - "Report the payback trend in the quarterly planning pack"
            - name: Predicted versus actual CLV check
              description: |-
                ## Purpose
                Every CLV model makes promises about the future, and the only honest test is to compare them with what customers then did. Keeping the predictions made a year ago and setting them against realised value each quarter shows whether the model runs high, low or about right, and for which segments. Without this check, an optimistic model can steer acquisition spend for years.

                ## Milestones
                1. Predictions saved with the date they were made, so they cannot be overwritten.
                2. Predicted and realised 12 month value compared by segment every quarter.
                3. Bias and error recorded in a running table.
                4. A recalibration or model change triggered when error passes an agreed limit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly comparisons of predicted and realised 12 month value are recorded by segment, with any breach of the error limit acted on."
                cadence: rolling
              tasks:
                - "Store each set of predictions with its run date and model version"
                - "Set the error limit that triggers a model review"
                - "Compare predicted and realised 12 month value by segment @recurring(quarterly)"
            - name: High-value customer slowdown watchlist
              description: |-
                ## Purpose
                In many businesses the top tenth of customers by value produce a large share of contribution, and losing a handful of them shows in the accounts before it shows in any dashboard. A monthly list of the highest-value customers whose order rhythm has slowed gives account managers or the owner time to call, thank or ask what changed. It turns CLV from a planning number into something a person acts on this week.

                ## Milestones
                1. A rule for who counts as high value, such as the top 5 or 10 percent by predicted CLV.
                2. A slowdown rule, such as no order for twice their usual gap.
                3. A monthly list sent to a named owner with each customer's order history.
                4. Outcomes of the contacts recorded for three months.

                ## Notes
                Keep the list to people a human can actually contact. Twenty names acted on beat two hundred ignored.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly high-value slowdown list goes to a named owner for three months, with the outcome of each contact recorded."
                cadence: rolling
              tasks:
                - "Define the high-value and slowdown rules in one sentence each"
                - "Name the person who will contact customers on the list"
                - "Send the high-value slowdown list to its owner @recurring(monthly:20)"
                - "Record what happened after each contact"
            - name: Refunds, returns and chargebacks adjustment
              description: |-
                ## Purpose
                Orders that come back after the CLV run inflate value for the customers and channels most prone to returns, often fashion buyers, discount hunters and some affiliate traffic. A monthly routine that pulls refunds, returns and chargebacks from the payment and ecommerce systems and nets them off the original order keeps value honest. It also reveals channels whose customers look valuable only until the returns arrive.

                ## Milestones
                1. Refunds, returns and chargebacks matched to their original orders.
                2. Net contribution per order recalculated after adjustments.
                3. Return rate by acquisition channel reported alongside CLV.
                4. The adjustment run every month before the CLV refresh.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Refunds, returns and chargebacks are matched to orders every month before the CLV refresh, with return rate by channel reported."
                cadence: rolling
              tasks:
                - "Export refunds, returns and chargebacks with their original order IDs"
                - "Net each adjustment off its original order's contribution"
                - "Run the returns adjustment ahead of the CLV refresh @recurring(monthly:2)"
                - "Add return rate by channel next to the CLV figures"
            - name: Quarterly segment value review with marketing
              description: |-
                ## Purpose
                CLV by segment, whether by first product, region, channel or customer type, only changes behaviour when the people who plan campaigns see it and argue with it. A quarterly session with marketing, walking through which segments are gaining or losing value and agreeing one or two shifts in targeting or offers, makes the analysis part of planning instead of a report in a folder.

                ## Milestones
                1. Three to five segments agreed as the standard cut for value reporting.
                2. A short pack with value trend, CAC and payback by segment.
                3. One or two agreed changes recorded with an owner each quarter.
                4. Last quarter's changes revisited at the next session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly segment value reviews are held with marketing, each ending with at least one recorded change and owner."
                cadence: cyclic
              tasks:
                - "Agree the three to five segments used for value reporting"
                - "Build the segment pack with value, CAC and payback"
                - "Hold the segment value review with marketing @recurring(quarterly)"
                - "Check last quarter's agreed changes at the start of each session"
            - name: Yearly CLV assumptions review with finance
              description: |-
                ## Purpose
                Margins, payment fees, discount rates and shipping costs all move over a year, and a CLV built on last year's assumptions quietly misprices every channel. An annual review with finance, timed before budget season, checks each input in the method note against current figures and records what changed and how far it moved the headline number.

                ## Milestones
                1. Every assumption in the method note listed with its current value and source.
                2. Each assumption checked with finance and updated where needed.
                3. The effect of the changes on overall CLV shown in one bridge chart.
                4. The method note re-dated and the changes summarised for users of the number.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An annual assumptions review is completed before budget season, with a bridge chart showing how each change moved overall CLV."
                cadence: cyclic
              tasks:
                - "List every CLV assumption with its current value and source"
                - "Book the assumptions review with finance before budget season @recurring(yearly)"
                - "Build a bridge chart from the old to the new overall CLV"
                - "Re-date the method note and summarise what changed"
            - name: Early value signals for new customers
              description: |-
                ## Purpose
                Waiting two years to learn whether a campaign brought in valuable customers is too slow to steer spend. Tracking a few early signals, such as first order value, a second order within 60 days or the plan chosen at sign-up, against the value those customers later reached gives a weekly read on the quality of new customers. Check which signals actually predicted value in your own history before relying on any of them.

                ## Milestones
                1. Three candidate early signals tested against 12 month value in past data.
                2. The one or two signals that best separate high and low value chosen.
                3. A weekly table of those signals by channel for customers acquired in the past month.
                4. Channels whose early signals drop below their usual range flagged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly table of one or two validated early value signals by channel has been kept for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Test three early signals against 12 month value in past data"
                - "Keep the one or two signals that best separate high and low value"
                - "Update early value signals for last month's new customers by channel @recurring(weekly:tue)"
                - "Flag channels whose signals fall outside their usual range"
            - name: Discounted lifetime value maths
              description: |-
                ## Purpose
                Most CLV mistakes come from the arithmetic rather than the data: treating revenue as profit, forgetting to discount, or using an average churn rate that hides fast early losses. Working through the standard formulas by hand on a small sample of your own customers builds the intuition to spot a wrong number in someone else's deck. A few evenings is enough.

                ## Milestones
                1. The undiscounted, discounted and margin-adjusted CLV formulas worked by hand on one example.
                2. The effect of retention rate on CLV shown in a small table.
                3. The difference between average and median customer value explained in your own words.
                4. A one-page cheat sheet saved for later reference.

                ## Notes
                Start from the **Reading queue** template to collect two or three textbook chapters or papers on customer valuation.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand-worked example of undiscounted, discounted and margin-adjusted CLV and a one-page cheat sheet are saved."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick ten real customers to use as a worked example"
                - "Calculate undiscounted, discounted and margin-adjusted CLV by hand"
                - "Build a table showing CLV at five different retention rates"
                - "Write a one-page cheat sheet of the formulas and their traps"
            - name: BG-NBD and Pareto-NBD purchase models
              description: |-
                ## Purpose
                For non-contractual businesses, where customers never announce that they have left, probabilistic models such as BG-NBD and Pareto-NBD estimate how many more purchases each customer will make from three facts: how often they bought, how recently, and how long they have been a customer. Learning them on your own data with an open-source library gives forecasts that respect the fact that a quiet customer may simply be between orders.

                ## Milestones
                1. A recency, frequency and customer age table built from the order extract.
                2. A BG-NBD model fitted with an open-source library and its parameters recorded.
                3. Predicted versus actual purchases compared on a held-out period.
                4. A short note on where the model fits poorly, such as strongly seasonal buyers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A BG-NBD model fitted on your own orders is tested on a held-out period, with predicted and actual purchases compared in a table."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Install an open-source library that fits BG-NBD models"
                - "Build a recency, frequency and customer age table from the orders"
                - "Fit the model on a calibration period and record the parameters"
                - "Compare predicted and actual purchases in the holdout period"
            - name: Gamma-Gamma model for order value
              description: |-
                ## Purpose
                Frequency models predict how many orders a customer will place, not what each will be worth. The Gamma-Gamma model fills that gap by estimating each customer's expected order value, pulling customers with few orders towards the average. Combined with a frequency model, it gives a customer-level CLV that does not over-trust one large first order.

                ## Milestones
                1. The model's key assumption, that order value and frequency are unrelated, checked on your data.
                2. The model fitted on repeat customers and its parameters recorded.
                3. Expected order value compared with observed average for customers with one, two and five or more orders.
                4. Customer-level CLV produced by combining it with the frequency model and the agreed discount rate.

                ## Notes
                If big spenders also buy more often, the independence assumption fails and the model will misstate value. Check the correlation first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Customer-level CLV from a Gamma-Gamma and frequency model combination is produced, with the independence assumption checked and recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check the correlation between order frequency and average order value"
                - "Fit the Gamma-Gamma model on customers with repeat orders"
                - "Compare expected and observed order value by number of orders"
                - "Combine with the frequency model to produce customer-level CLV"
            - name: Shifted beta-geometric model for subscriptions
              description: |-
                ## Purpose
                Subscription churn usually falls over time, because customers who were going to leave do so early and those who remain are more loyal. The shifted beta-geometric model captures that pattern, so it predicts lifetimes far better than a single churn rate. Fitting it to a few renewal periods of your own data shows how much the simple formula has been under or over stating subscriber value.

                ## Milestones
                1. Active subscriber counts at each renewal built for at least three acquisition groups.
                2. The model fitted and its two parameters recorded.
                3. Predicted and actual survival compared for the most recent periods.
                4. Model-based CLV set beside formula CLV with the difference explained.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A shifted beta-geometric model is fitted to three acquisition groups, and its CLV is compared with formula CLV in a short note."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Count subscribers still active at each renewal for three groups"
                - "Fit the shifted beta-geometric model to the renewal counts"
                - "Check predicted survival against the latest actual periods"
                - "Compare model CLV with the simple churn formula CLV"
            - name: Auditable spreadsheet CLV model
              description: |-
                ## Purpose
                For a founder or a small team, a well-built spreadsheet is often the right home for CLV: it is transparent, finance can check it and it is easy to change. Separating an inputs tab, a calculation tab and an outputs tab, with checks that totals tie back to the data, keeps it trustworthy as more people edit it. Build it so a change in churn or margin flows through to every channel figure.

                ## Milestones
                1. Inputs, calculations and outputs on separate tabs, with input cells shaded.
                2. CLV, CAC and payback calculated by channel from those inputs.
                3. Check cells that flag when totals no longer tie to the source data.
                4. A second person able to change an input and explain the result.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spreadsheet CLV model with separate inputs, calculations and outputs passes its built-in checks and has been reviewed by a second person."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set up separate inputs, calculations and outputs tabs"
                - "Link channel CLV, CAC and payback to the input cells"
                - "Add check cells that tie totals back to the source extract"
                - "Ask a colleague to change one input and explain the result"
            - name: Explaining CLV uncertainty to decision makers
              description: |-
                ## Purpose
                One CLV figure shown to two decimal places invites more confidence than the data supports, especially for new channels or small segments. Learning to show a range, explain what drives it and say which decisions it is precise enough for keeps the number useful without overclaiming. Leaders often trust a range more once they have seen earlier point estimates miss.

                ## Milestones
                1. Ranges for overall and segment CLV produced by bootstrapping or from model intervals.
                2. A chart format chosen that shows the range without clutter.
                3. A three-sentence explanation of the main uncertainty drivers written.
                4. One CLV presentation delivered with ranges and the feedback noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A CLV presentation including ranges and a plain explanation of what drives the uncertainty is delivered, with audience feedback recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Bootstrap a range for overall and segment CLV"
                - "Pick a chart format that shows the range clearly"
                - "Write three sentences on what drives the uncertainty"
                - "Present CLV with ranges at the next planning meeting"
            - name: RFM scoring as a first step to value
              description: |-
                ## Purpose
                Recency, frequency and monetary scores are the simplest way to rank customers by likely value, and most small businesses can build them in a spreadsheet. They do not forecast lifetime value, but they show which groups deserve more attention and they make a sound bridge to probabilistic models later. Scoring takes an afternoon; the learning is in checking whether the scores line up with what customers went on to spend.

                ## Milestones
                1. Recency, frequency and monetary scores of 1 to 5 assigned to every customer.
                2. Customers grouped into a handful of named segments, such as recent high spenders or lapsed regulars.
                3. Each segment's later 12 month value compared to check the ranking holds.
                4. A note on when RFM is enough and when a CLV model is needed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every customer has RFM scores, and each segment's subsequent 12 month value has been checked against its rank."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Score every customer from 1 to 5 on recency, frequency and spend"
                - "Group the scores into five named segments"
                - "Compare each segment's value over the following 12 months"
                - "Write down when RFM is enough and when a model is needed"
            - name: Maximum allowable CAC per channel
              description: |-
                ## Purpose
                Media buyers and agencies work best with a clear ceiling on what each channel may pay for a new customer. Taking contribution-based CLV for the channel, applying the target ratio and payback limit, and allowing for uncertainty in newer channels gives a bid cap that can be written into briefs. Without it, spend scales on platform-reported return figures alone.

                ## Milestones
                1. A maximum CAC calculated for each main channel from CLV, the target ratio and the payback limit.
                2. A safety margin applied to channels with short or thin history.
                3. Caps shared in writing with whoever buys media, internal or agency.
                4. Actual CAC against each cap reviewed every quarter.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written maximum CAC for each main channel is shared with media buyers and reviewed against actual CAC each quarter."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate a CAC ceiling per channel from CLV, ratio and payback"
                - "Apply a safety margin to channels with thin history"
                - "Send the caps in writing to whoever buys media"
                - "Compare actual CAC with each channel's cap @recurring(quarterly)"
            - name: Retention spend limit by customer value
              description: |-
                ## Purpose
                Save offers, loyalty perks and service upgrades all cost money, and giving the same discount to every wavering customer overpays for low-value ones and underpays for the best. Setting a maximum retention spend per customer tied to their remaining expected value gives support and marketing a simple rule. It also shows finance that retention budgets are sized by evidence.

                ## Milestones
                1. Remaining expected value estimated for each value tier.
                2. A maximum retention spend per tier agreed with finance and the team that makes offers.
                3. The tier and limit visible to the people making offers, such as in the CRM.
                4. Offer spend and saved customers by tier reviewed after three months.

                ## Notes
                Base the rules on value tiers, never on protected characteristics, and check how your privacy law treats automated decisions about individuals.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Retention spend limits per value tier are agreed, visible to the offer team and reviewed against three months of results."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate remaining expected value for each customer tier"
                - "Agree a retention spend limit per tier with finance"
                - "Show each customer's tier where offers are made"
                - "Review three months of offer spend and saves by tier"
            - name: Value of discount-acquired versus full-price customers
              description: |-
                ## Purpose
                Big first-order discounts often bring in customers who buy once, return more and wait for the next sale. Comparing realised value for customers whose first order used a deep discount with those who paid full price shows whether promotions are buying customers or just orders. The answer usually differs by channel, so split it.

                ## Milestones
                1. Customers tagged by the discount level on their first order.
                2. Realised 12 month contribution compared across discount bands, net of the discount itself.
                3. The comparison split by acquisition channel.
                4. A recommendation on first-order discount levels recorded with the evidence.

                ## Notes
                Discount and channel are tangled: the customers a flash sale attracts differ from those a referral brings. Compare within channel before drawing a conclusion.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of 12 month contribution by first-order discount band, split by channel, is recorded with a recommendation on discount levels."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Tag each customer by the discount band of their first order"
                - "Compare 12 month net contribution across discount bands"
                - "Split the comparison by acquisition channel"
                - "Write a recommendation on first-order discounts with the evidence"
            - name: Choosing a CLV tool or library
              description: |-
                ## Purpose
                CLV can live in a spreadsheet, a BI tool, an open-source modelling library, the ecommerce platform's built-in report or a dedicated customer analytics product, and the right choice depends on data volume, skills and who needs the output. Comparing three options against the decisions in your brief avoids buying a platform for a problem a free library would solve, or the reverse.

                ## Milestones
                1. Three options shortlisted, covering at least one free and one paid route.
                2. Each scored on data fit, model transparency, cost, skills needed and how outputs reach users.
                3. A trial run on your own extract for the leading option.
                4. The decision recorded with its reasons and annual cost.

                ## Notes
                Start from the **Purchase decision** template. Ask any vendor to show how their CLV is calculated; a figure you cannot explain is hard to defend.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A CLV tool decision is recorded after scoring three options on five criteria and trialling the leading one on your own data."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Shortlist three CLV options including one free route"
                - "Score each on data fit, transparency, cost, skills and delivery"
                - "Trial the leading option on your own order extract"
                - "Record the decision, the reasons and the annual cost"
            - name: Predicted value signals for ad platform bidding
              description: |-
                ## Purpose
                Ad platforms bid towards whatever conversion value they are given, so if they see only first-order revenue they will chase cheap first orders. Sending a predicted value, or a value tier, for each new customer lets value-based bidding aim at customers who will be worth more over time. Start with a test on one campaign, because a badly scaled value can push spend in the wrong direction quickly.

                ## Milestones
                1. A predicted value or tier available for each new customer within a day of the first order.
                2. The value scaled so the platform's reported return remains meaningful.
                3. One campaign tested with predicted values against a control using first-order revenue.
                4. The test result and the decision to expand or stop written down.

                ## Notes
                Check each platform's policy on what customer data may be uploaded, and send values rather than personal details wherever the platform allows.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-campaign test of predicted value bidding against a first-order revenue control is completed, with a written expand or stop decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Decide whether to send a predicted value or a value tier"
                - "Produce the value for each new customer within a day of their order"
                - "Run one campaign on predicted values beside a control campaign"
                - "Check the values ad platforms receive match the warehouse @recurring(monthly:24)"
            - name: Lifetime value by first product purchased
              description: |-
                ## Purpose
                The first thing a customer buys often says more about their future value than the channel that brought them in. Comparing 12 and 24 month value by first product or category reveals gateway products that lead to loyal customers and loss leaders that attract one-off bargain hunters. Merchandising and paid search can then push the products that start the best relationships.

                ## Milestones
                1. Each customer tagged with the product or category of their first order.
                2. Realised 12 and 24 month value compared by first product, with small groups combined.
                3. Three gateway products and three weak starters identified.
                4. A recommendation shared with whoever plans promotions and paid search.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranking of first products by 12 and 24 month customer value is shared with promotions and paid search, naming three gateway products."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Tag every customer with their first product category"
                - "Compare 12 and 24 month value by first category"
                - "Name three gateway products and three weak starters"
                - "Share the ranking with whoever plans promotions"
            - name: Loyalty programme value case
              description: |-
                ## Purpose
                Loyalty schemes cost points, perks and admin, and members often look more valuable simply because loyal customers are the ones who join. Estimating whether a scheme raises CLV, rather than just attracting people who were already loyal, needs a comparison of members with similar non-members before they joined. The result decides whether to expand, redesign or close the scheme.

                ## Milestones
                1. Members matched with non-members of similar value and tenure before joining.
                2. Change in contribution after joining compared between the two groups.
                3. Programme costs per member set against the extra contribution.
                4. An expand, redesign or close recommendation recorded.

                ## Notes
                Matching is only as good as the variables you match on. Treat the result as an estimate with a range, not a verdict.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A matched comparison of members and non-members shows the scheme's estimated effect on contribution, with costs and a recorded recommendation."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List programme costs per member for the last year"
                - "Match members with similar non-members on pre-join value and tenure"
                - "Compare contribution change after joining between the groups"
                - "Write the expand, redesign or close recommendation"
            - name: Annual versus monthly plan lifetime value
              description: |-
                ## Purpose
                Annual plans usually churn less and bring cash forward, but they are often sold at a discount, and some annual subscribers leave in large numbers at the first renewal. Comparing lifetime value of annual and monthly subscribers, including the discount and the renewal drop, shows what an annual upgrade is actually worth. That figure tells you how much discount or sales effort an upgrade can justify.

                ## Milestones
                1. Subscribers grouped by starting plan, monthly or annual.
                2. Contribution-based CLV for each group, including the annual discount.
                3. First renewal outcomes for annual subscribers measured separately.
                4. The value of moving a monthly subscriber to annual stated as one figure.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The CLV difference between annual and monthly subscribers, including discount and first-renewal losses, is stated as one figure per subscriber."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Group subscribers by the plan they started on"
                - "Calculate contribution CLV for each plan including the annual discount"
                - "Measure how many annual subscribers renew the first time"
                - "State the value of a monthly to annual switch as one figure"
            - name: Cost to serve in customer value
              description: |-
                ## Purpose
                Some customers buy a lot and still lose money: frequent tiny orders, constant support contacts, special delivery requests or heavy return habits. Adding the main service costs, such as support time, custom handling and failed deliveries, to customer value shows which segments are less profitable than revenue suggests. It often changes the list of who counts as a best customer.

                ## Milestones
                1. Two or three significant service costs identified and priced per event.
                2. Those costs attributed to customers from support and fulfilment records.
                3. CLV recalculated with service costs for each segment.
                4. Segments whose rank changes most written up with likely causes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Segment CLV is recalculated with at least two service costs included, and segments whose ranking changed are explained in writing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick two or three service costs that vary a lot by customer"
                - "Price each event with finance, such as cost per support contact"
                - "Attach service events to customers from support and delivery records"
                - "Refresh the cost per service event figures with finance @recurring(yearly)"
            - name: CLV and unit economics slide for the board or investors
              description: |-
                ## Purpose
                Investors and boards ask about lifetime value, acquisition cost and payback in almost every review, and numbers that shift between meetings damage credibility faster than weak numbers. A standard unit economics slide, with definitions in the footnotes and the same method each quarter, keeps the conversation on the business rather than the arithmetic. Be ready to show realised value, not only projections.

                ## Milestones
                1. One slide showing CLV, CAC, ratio and payback with a four-quarter trend.
                2. Footnotes stating margin basis, horizon, discount rate and data period.
                3. Realised value for older acquisition groups shown beside projected CLV.
                4. The slide refreshed in the same format every quarter.

                ## Notes
                Start from the **Board meeting** template if you also prepare the wider board pack. Label clearly which figures are projections.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A unit economics slide with footnoted definitions and realised value has been presented in the same format for two consecutive quarters."
                cadence: cyclic
              tasks:
                - "Draft the unit economics slide with CLV, CAC, ratio and payback"
                - "Write footnotes for margin basis, horizon, rate and data period"
                - "Add realised value for older groups beside the projections"
                - "Refresh the unit economics slide before each board meeting @recurring(quarterly)"
            - name: Acquisition budget built from CLV
              description: |-
                ## Purpose
                Annual budgets often set acquisition spend as last year plus a percentage, whatever customers from each channel are worth. Building next year's budget from expected new customers per channel, capped CAC and expected value shows how much growth the business can afford and when it pays back. It gives finance a model to challenge instead of a number to accept or cut.

                ## Milestones
                1. Expected new customers and CAC per channel for next year estimated, with ranges.
                2. Expected contribution and payback from each channel's new customers shown by month.
                3. A base case and a cautious case agreed with finance.
                4. The approved budget recorded with the CLV assumptions it relied on.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Next year's acquisition budget is approved with channel volumes, CAC caps, expected value and payback for a base and a cautious case."
                cadence: cyclic
              tasks:
                - "Estimate next year's new customers and CAC per channel"
                - "Model monthly contribution and payback from those customers"
                - "Agree a base and a cautious case with finance"
                - "Start the CLV-based acquisition budget two months before the budget deadline @recurring(yearly)"
            - name: Peak season customer value review
              description: |-
                ## Purpose
                Customers won during a big sale, holiday peak or launch week often behave differently from those acquired at other times, and they arrive in numbers large enough to shift the averages. Reviewing their value at 90 days and again at a year, against customers from a normal month, tells you whether to chase peak volume next year or protect margin.

                ## Milestones
                1. Peak season customers tagged as their own acquisition group.
                2. 90 day value compared with customers acquired in a normal month.
                3. 12 month value compared once it is available.
                4. A note filed for next year's peak plan on how hard to push acquisition.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "Peak season customers are compared with a normal month at 90 days and 12 months, and a note is filed for next year's peak plan."
                cadence: cyclic
              tasks:
                - "Tag customers acquired during the peak period as one group"
                - "Run the peak season value review 90 days after the peak @recurring(yearly)"
                - "Compare their 12 month value once it is available"
                - "File a note for next year's peak acquisition plan"
            - name: CLV method workshop with marketing and finance
              description: |-
                ## Purpose
                When marketing quotes one lifetime value and finance another, the usual cause is different choices about margin, horizon and which customers count. A two-hour workshop where both teams agree the method, with worked examples ready, settles it in one sitting rather than over months of email. The agreed choices then go straight into the method note.

                ## Milestones
                1. Both teams' current CLV figures and methods gathered before the session.
                2. A two-hour session held with decision makers from both teams.
                3. Agreement on margin basis, horizon, discount rate and customer scope recorded.
                4. Open questions given owners and dates.

                ## Notes
                Start from the **Meeting notes** template. Bring one worked example that shows how each choice moves the figure.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A workshop with marketing and finance records agreed choices on margin basis, horizon, discount rate and customer scope, with owners for open questions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the CLV figures and methods each team uses today"
                - "Prepare a worked example showing how each choice moves the figure"
                - "Hold the two-hour workshop with both teams' decision makers"
                - "Write the agreed choices into the method note"
            - name: Value read-out for a new market or product line
              description: |-
                ## Purpose
                Launches are judged on early sales, but the real question is whether the customers they bring in are worth what they cost. Setting up a value read-out at launch, with a comparison group and dates for 90 day and 12 month checks, means the decision to keep investing rests on customer value rather than launch-week excitement.

                ## Milestones
                1. Launch customers tagged at acquisition with the market or product line.
                2. A comparison group of similar existing customers chosen.
                3. 90 day value and early signals compared and shared with the launch owner.
                4. A 12 month read-out delivered with a continue, change or stop recommendation.
              priority: low
              deadlineOffsetDays: 400
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A 12 month value read-out for the launch, compared with a matched group of existing customers, is delivered with a recommendation."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Tag launch customers with the new market or product line"
                - "Choose a comparison group of similar existing customers"
                - "Share the 90 day value comparison with the launch owner"
                - "Deliver the 12 month read-out with a recommendation"
            - name: CLV for a small shop from sales exports
              description: |-
                ## Purpose
                Small online shops and local businesses can get a useful lifetime value from the exports their ecommerce platform, till system or payment processor already offers, without a warehouse or a data team. Pulling 24 months of orders into a spreadsheet, linking repeat customers by email and applying a rough product margin gives a figure good enough to decide how much an ad, a flyer or a referral reward can cost.

                ## Milestones
                1. Order exports for the past 24 months downloaded and combined in one spreadsheet.
                2. Repeat customers linked by email or phone, with staff and test orders removed.
                3. Average value per customer at 12 and 24 months worked out with a rough margin.
                4. A maximum spend per new customer written down for each way you advertise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spreadsheet built from 24 months of sales exports shows value per customer at 12 and 24 months and a maximum spend per new customer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download 24 months of order exports from your shop or till system"
                - "Link repeat customers by email and take out staff orders"
                - "Work out 12 and 24 month value per customer with a rough margin"
                - "Add last month's orders to the spreadsheet @recurring(monthly:28)"
            - name: Early-stage CLV with less than a year of data
              description: |-
                ## Purpose
                Founders are asked for lifetime value long before there is enough history to measure it, and quoting a five-year figure from six months of data invites hard questions. Building a range from the churn or repeat rate seen so far, a cautious and a hopeful assumption about later behaviour, and published figures for similar businesses gives an honest answer. Update it every month as real data replaces assumptions.

                ## Milestones
                1. Observed monthly churn or repeat rate calculated for every month so far.
                2. A cautious and a hopeful CLV built, with the assumptions stated.
                3. Payback calculated for both cases against current CAC.
                4. The range updated monthly and narrowed as data arrives.

                ## Notes
                State clearly which part is measured and which is assumed. Investors respect that more than a precise number.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cautious and a hopeful CLV with stated assumptions and payback are in the investor materials and updated monthly."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Calculate churn or repeat rate for every month since launch"
                - "Build a cautious and a hopeful CLV with stated assumptions"
                - "Calculate payback for both cases against current CAC"
                - "Update the CLV range with the latest month of data @recurring(monthly:6)"
            - name: B2B account value with expansion revenue
              description: |-
                ## Purpose
                Business customers often grow after the first contract through extra seats, new teams and price rises, so a CLV that counts only the starting contract badly understates the best accounts. Building account-level value with expansion, contraction and logo churn separated, and with the cost of sales and onboarding included, shows which account sizes and industries are worth a long sales cycle.

                ## Milestones
                1. Revenue per account by month split into new, expansion, contraction and churn.
                2. Net revenue retention calculated for each account size band.
                3. Account CLV including expansion and cost of sales calculated by size band and industry.
                4. Results shared with sales leadership to guide target account lists.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Account CLV including expansion and cost of sales is reported by size band and industry and shared with sales leadership."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Split monthly account revenue into new, expansion, contraction and churn"
                - "Calculate net revenue retention by account size band"
                - "Add cost of sales and onboarding per account"
                - "Refresh account value by size band and industry @recurring(quarterly)"
            - name: Two-sided marketplace value for buyers and sellers
              description: |-
                ## Purpose
                In a marketplace, a buyer's value depends on the sellers available and a good seller attracts buyers, so treating each side alone misprices both. Estimating CLV for each side from the platform's take on their transactions, and noting how much of one side's value relies on the other, helps decide where acquisition money goes first. It is approximate by nature, and the method note should say so.

                ## Milestones
                1. Take-rate based contribution calculated for buyers and for sellers.
                2. Separate CLV estimates for each side by acquisition channel.
                3. A note on how seller supply in a region affects buyer value there.
                4. A recommendation on which side to fund first next quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Buyer and seller CLV estimates by channel and a recommendation on which side to fund first are recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Calculate platform contribution per transaction for each side"
                - "Estimate CLV for buyers and sellers by acquisition channel"
                - "Compare buyer value in regions with high and low seller supply"
                - "Write a recommendation on which side to fund next quarter"
            - name: Client lifetime value for a services firm
              description: |-
                ## Purpose
                Agencies, consultancies and other service businesses with a few dozen clients cannot use statistical models, but they can still see which clients are worth keeping and which cost more than they pay. Listing every client with years retained, total fees, delivery hours and write-offs gives a lifetime contribution per client and per client type. The result shapes which leads to chase and when to raise prices or part ways.

                ## Milestones
                1. Every client of the last five years listed with start date, end date and total fees.
                2. Delivery hours and write-offs attached to each client.
                3. Lifetime contribution per client and per client type calculated.
                4. A short ideal client profile written from the results.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Lifetime contribution is calculated for every client of the past five years, and an ideal client profile is written from the results."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every client of the last five years with dates and fees"
                - "Attach delivery hours and write-offs to each client"
                - "Calculate lifetime contribution per client and client type"
                - "Ask the agent to draft an ideal client profile from the results"
            - name: Taking over an inherited CLV model
              description: |-
                ## Purpose
                Analysts who inherit someone else's lifetime value model often find a spreadsheet or notebook with hard-coded numbers, unexplained filters and outputs already quoted to the board. Rebuilding the figure from source data, documenting each step and listing the differences protects you from defending numbers you do not understand. Do it in the first month, before your name goes on the next update.

                ## Milestones
                1. The model's inputs, steps and outputs traced and written down.
                2. The latest headline figure reproduced from source data, or the difference explained.
                3. Hard-coded values and undocumented filters listed with their effect.
                4. A short handover note agreed with your manager on what will change and when.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The inherited model's latest headline CLV is reproduced from source data, or the difference explained, and a handover note is agreed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find every file, query and sheet that feeds the inherited model"
                - "Trace and write down each step from source to headline figure"
                - "Rebuild the latest headline figure from the source data"
                - "List hard-coded values and filters with their effect on the result"
            - name: Hierarchical Bayesian CLV by segment
              description: |-
                ## Purpose
                Small segments, such as a new region or a niche product line, produce wild CLV estimates when modelled alone, while pooling everything hides real differences. A hierarchical Bayesian model lets each segment borrow strength from the whole customer base in proportion to how much data it has, and returns honest intervals. It suits teams already comfortable with probabilistic CLV models and an open-source Bayesian library.

                ## Milestones
                1. A segment structure chosen, such as channel within region.
                2. A hierarchical frequency and spend model fitted with convergence checks passed.
                3. Segment CLV with intervals compared against separate and fully pooled estimates.
                4. Out-of-sample accuracy compared with the current production model.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hierarchical CLV model passes convergence checks and matches or beats the current model's out-of-sample error by segment."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose the segment hierarchy, such as channel within region"
                - "Fit the hierarchical model and check convergence diagnostics"
                - "Compare segment estimates with separate and pooled models"
                - "Test out-of-sample error against the current production model"
            - name: Customer equity and customer-based valuation
              description: |-
                ## Purpose
                Adding up the expected value of existing customers, plus the value of customers you expect to acquire, gives customer equity: a way of linking unit economics to the value of the whole business. Founders preparing for a funding round or a sale, and the analysts supporting them, use it to show how retention and acquisition assumptions drive value. Build it alongside, never instead of, the valuation work your advisers do.

                ## Milestones
                1. Expected remaining value of the current customer base calculated with the agreed horizon and rate.
                2. Future acquisition volumes, CAC and value per new customer projected for each year.
                3. Sensitivity of total customer equity to retention, margin and CAC shown in one table.
                4. The analysis reviewed by finance or the company's advisers before any external use.

                ## Notes
                This is a planning and communication tool, not a formal valuation. Leave that to qualified advisers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A customer equity model with a sensitivity table is completed and reviewed by finance or advisers before any external use."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Calculate expected remaining value of today's customer base"
                - "Project yearly new customers, CAC and value per new customer"
                - "Build a sensitivity table for retention, margin and CAC"
                - "Send the model to finance or advisers for review"
            - name: Long-run value effects in experiments
              description: |-
                ## Purpose
                Tests that lift conversion this week can lower lifetime value if they attract weaker customers or train them to wait for discounts. Waiting a year for every experiment is impractical, so experienced teams build a surrogate: a combination of early behaviours that predicts 12 month value, validated on historic data. Adding it to test readouts lets decisions weigh long-run value without waiting for it.

                ## Milestones
                1. Early behaviours such as 30 day orders and spend tested as predictors of 12 month value.
                2. A surrogate value score built and validated on held-out historic customers.
                3. The surrogate added to the standard experiment readout.
                4. At least one past test re-read with the surrogate and the finding recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A validated surrogate for 12 month value is part of the standard experiment readout and has been applied to at least one past test."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List early behaviours available within 30 days of acquisition"
                - "Build a surrogate score that predicts 12 month value"
                - "Validate the surrogate on held-out historic customers"
                - "Add surrogate value to the standard experiment readout"
            - name: Predicted value at first purchase
              description: |-
                ## Purpose
                Value-based bidding, onboarding tiers and early service levels all need a value estimate on day one, before any repeat behaviour exists. A model that uses only what is known at the first order, such as basket, channel, device, region and product, can rank new customers well enough to act on, provided it is calibrated and checked against realised value. Expect modest accuracy; the gain comes from ranking, not precise figures.

                ## Milestones
                1. Data available at first order listed, excluding anything sensitive or not permitted under your privacy rules.
                2. A model trained on historic first orders to predict 12 month value.
                3. Calibration and ranking checked on a held-out period.
                4. Scores produced daily for new customers and checked against realised value each quarter.

                ## Notes
                Do not use protected characteristics or close proxies for them, and check with your privacy lead before scores affect how individual customers are treated.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A first-purchase value model is calibrated on a held-out period and scores new customers daily, with a quarterly check against realised value."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the data known at first order that you are allowed to use"
                - "Train a model on historic first orders to predict 12 month value"
                - "Check calibration and ranking on a held-out period"
                - "Ask the agent to summarise which inputs drive the predictions"
---

# Customer Lifetime Value Analysis

This area is for anyone who needs to know what a customer is really worth: the analyst asked for a CLV figure, the founder facing investor questions about unit economics and the small business owner deciding what an ad can cost. It starts with the foundations (the decisions CLV must inform, clean order data, a customer key, contribution margin, horizon and discount rate, first historic and formula estimates, acquisition cost and a method note), then the monthly and quarterly routines, the models worth learning, decisions on CAC caps, retention limits, discounts and tools, dated events such as the board slide and the budget, situations from a small shop to a B2B or marketplace business, and finally specialist work like hierarchical models and customer equity.

What repeats is a returns adjustment and CLV refresh early each month, a channel LTV to CAC report and a payback update, a weekly early value check, quarterly accuracy and segment reviews, and a yearly assumptions review with finance before the budget. The Metrics log, Reading queue, Purchase decision, Board meeting and Meeting notes templates pair with the refresh log, the maths study, the tool choice, the board slide and the method workshop. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
