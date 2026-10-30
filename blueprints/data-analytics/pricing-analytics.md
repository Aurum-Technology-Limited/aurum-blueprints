---
id: data-analytics.pricing-analytics
name: Pricing Analytics
description: "Clean price and discount data, a price waterfall and realisation report, elasticity and willingness to pay methods, discount guardrails, and evidence behind tier, increase and launch price decisions."
category: business
version: 1.0.0
tags: [data-analytics, pricing-analytics, knowledge-worker, founder, price-elasticity, discounting, willingness-to-pay, plan-mix]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - purchase-decision
    - marketing-campaign
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Pricing Analytics
          description: "Analysing price elasticity, discounting, willingness to pay and plan mix to support better pricing decisions with evidence."
          projects:
            - name: Pricing decision brief with owners and dates
              description: |-
                ## Purpose
                Pricing analysis drifts when nobody has written down which decision it serves: next year's list price, the discount a rep may give, or whether a new tier is worth launching. A one-page brief naming the next three pricing decisions, who makes each and when, sets the scope for every analysis that follows. It also stops the team building an elasticity model for a question that only needed a competitor check.

                ## Milestones
                1. A one-page brief listing the next three pricing decisions the business faces.
                2. Each decision tied to an owner, a date and the metric it is meant to move.
                3. The evidence each decision needs marked as already available, quick to gather or needing new research.
                4. The brief agreed by the person with final say on price.

                ## Notes
                If nobody can name a pricing decision due in the next six months, start with the realisation baseline and come back to this brief.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed-off one-page brief lists the next three pricing decisions with their owners, dates, target metrics and evidence needed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the pricing decisions due in the next six months"
                - "Ask each decision owner what evidence would change their mind"
                - "Write the brief with owners, dates and target metrics"
                - "Get the brief signed off by whoever has final say on price"
            - name: Transaction-level price dataset
              description: |-
                ## Purpose
                Most pricing questions cannot be answered from revenue totals, because the same total can hide a rising list price and deeper discounts. An extract at invoice line level, with list price, invoiced price, every discount, quantity, customer, product, channel and date, is the raw material for realisation, elasticity and discount analysis. Building it once and reconciling it to finance saves rebuilding it for every new question.

                ## Milestones
                1. Every system holding quotes, orders, invoices, credit notes and rebates listed with its owner.
                2. An invoice line extract covering at least 24 months where that history exists, with list and net price on every row.
                3. Credit notes, returns and off-invoice rebates matched back to the original lines.
                4. Yearly net revenue in the extract reconciled to finance within an agreed tolerance.
                5. Known gaps, such as a billing migration or missing list prices, written down.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An invoice line dataset with list and net price on every row reconciles to finance net revenue within the agreed tolerance, with gaps documented."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every system that records quotes, invoices, credit notes or rebates"
                - "Export invoice lines with list price, net price, quantity and date"
                - "Match credit notes and rebates back to the invoice lines they relate to"
                - "Reconcile yearly net revenue in the extract with the finance totals"
                - "Write a note on gaps, migrations and rows without a list price"
            - name: Price waterfall from list to pocket price
              description: |-
                ## Purpose
                The gap between list price and the money that finally stays in the business is usually spread across a dozen leaks: on-invoice discounts, volume rebates, free shipping, extended payment terms, marketing allowances and promotional credits. Drawing the waterfall for the whole business, then for the main segments, shows which leaks are large enough to act on. It also gives leadership one picture of where price goes.

                ## Milestones
                1. Every element between list and pocket price named and sourced, on invoice and off invoice.
                2. A waterfall chart for the last full year at total business level.
                3. The same waterfall for the three largest customer segments or channels.
                4. The two biggest leaks ranked with an estimated annual value each.

                ## Notes
                Off-invoice items such as rebates and payment terms often sit in finance spreadsheets rather than the billing system. Ask finance early; they are frequently the largest bars.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list to pocket price waterfall exists for the business and its three largest segments, with the two largest leaks valued in money per year."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask finance which rebates, allowances and terms sit outside the invoice"
                - "List every step from list price to pocket price with its data source"
                - "Build the total business waterfall for the last full year"
                - "Repeat the waterfall for the three largest segments"
                - "Rank the two largest leaks by annual value"
            - name: Price change history log
              description: |-
                ## Purpose
                Every elasticity estimate, promotion read-out and price increase review depends on knowing exactly when prices changed, and that history usually lives in old emails and memory. A single log of every list price change, promotion, new plan and discount policy change, with dates and the reason given, turns past changes into natural experiments you can learn from.

                ## Milestones
                1. A log with columns for date, product or plan, old price, new price, scope, reason and approver.
                2. At least two years of past changes reconstructed from billing records, price lists and announcements.
                3. Promotions and discount policy changes included, not only list prices.
                4. A named owner adds each new change within a week of it going live.

                ## Notes
                Start from the **Metrics log** template and add a column for the change type.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated log covers at least two years of list price, promotion and discount policy changes, with each new change added within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create the price change log from the metrics log template"
                - "Rebuild past list price changes from old price lists and billing records"
                - "Add past promotions and discount policy changes with their dates"
                - "Add any price, plan or discount change made this month to the log @recurring(monthly:26)"
            - name: Product, plan and price list catalogue
              description: |-
                ## Purpose
                Pricing reports go wrong when the same product appears under three names, retired plans still sit in the billing system and nobody can say which price list a customer is on. A clean catalogue of every sellable item, plan, add-on and price list, with its unit of sale and status, gives every later report one set of rows to group by.

                ## Milestones
                1. Every active product, plan, add-on and price list listed with its unit of sale.
                2. Retired and legacy plans flagged, with the count of customers still on each.
                3. Each item mapped to a product family for reporting.
                4. The catalogue agreed with product and finance as the reference for pricing reports.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A catalogue of every product, plan, add-on and price list, with unit of sale, status and product family, is agreed by product and finance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export every product, plan and add-on from the billing system"
                - "Mark retired and legacy plans and count the customers still on each"
                - "Map each item to a product family"
                - "Agree the catalogue with product and finance owners"
            - name: Plan mix and average selling price baseline
              description: |-
                ## Purpose
                Before changing any price, you need to know what customers actually buy today: the share on each plan or tier, average selling price by product, and how those figures moved over the last eight quarters. That baseline is what every later change will be judged against, and it often reveals surprises, such as a middle tier nobody chooses or an average price drifting down while list prices rose.

                ## Milestones
                1. The share of customers and revenue on each plan or tier for each of the last eight quarters.
                2. Average selling price by product family over the same period.
                3. Movements explained in a short note: new plans, promotions, mix shifts.
                4. The baseline saved as the comparison point for future pricing changes.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Eight quarters of plan mix and average selling price by product family are saved as a baseline, with each large movement explained."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count customers and revenue by plan for each of the last eight quarters"
                - "Calculate average selling price by product family per quarter"
                - "Write one line explaining each large movement"
                - "Save the baseline tables where later reports can reference them"
            - name: Discount depth baseline by rep, segment and deal size
              description: |-
                ## Purpose
                Discounts usually grow quietly: a few large deals set a precedent, reps learn what gets approved, and the average creeps up a point a year. Measuring the current spread of discount by sales rep, customer segment, deal size and quarter end shows whether discounts follow a logic or simply follow who asked. It gives the guardrail work a factual starting point.

                ## Milestones
                1. Average and median discount calculated for each rep, segment and deal size band.
                2. A scatter of discount against deal size showing where similar deals got very different prices.
                3. The share of discount given in the last two weeks of each quarter measured.
                4. Findings shared with the sales leader without naming individuals in the wider forum.

                ## Notes
                Present rep-level results privately to the sales leader first. Public league tables of discounting tend to start arguments rather than change behaviour.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Discount levels by rep, segment, deal size and quarter end are measured for the last four quarters and reviewed with the sales leader."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Calculate average and median discount by rep, segment and deal size"
                - "Plot discount against deal size for the last four quarters"
                - "Measure how much discount lands in the final fortnight of each quarter"
                - "Walk the sales leader through the rep-level results in private"
            - name: Competitor price benchmark grid
              description: |-
                ## Purpose
                Customers compare you with two or three alternatives, so a grid of their published prices, plans, limits and included features stops debates based on one lost deal. Building it from public sources, normalised to a common unit such as price per seat or per kilogram, shows where you sit and which comparisons buyers are most likely to make.

                ## Milestones
                1. Three to six competitors chosen with sales and product, including the cheapest credible alternative.
                2. Published prices, plan limits and included features captured with source links and dates.
                3. Prices normalised to one common unit for a like-for-like comparison.
                4. Your position on each main plan summarised in a short note.

                ## Notes
                Use only public information such as websites, published price lists and quotes customers chose to share. Never exchange price information with competitors directly; that can breach competition law.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated grid of three to six competitors' published prices, normalised to one unit, with a written summary of your position on each main plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the competitor shortlist with sales and product"
                - "Capture each competitor's published plans, prices and limits with dates"
                - "Convert every price to one common unit"
                - "Write a one-paragraph summary of where your prices sit"
            - name: Price floor from unit cost and target margin
              description: |-
                ## Purpose
                Knowing the lowest price at which a sale still makes sense is what lets you approve a big discount quickly or refuse it with confidence. Working out the variable cost per unit, the cost to serve demanding segments and the contribution margin the business needs gives a floor price per product family, so no deal goes below it without a written reason.

                ## Milestones
                1. Variable cost per unit agreed with finance for each product family.
                2. Extra costs to serve large or demanding segments estimated.
                3. A floor price per product family based on cost and the minimum contribution finance requires.
                4. The floor list circulated to whoever approves discounts.

                ## Notes
                A floor is a guardrail, not a target. Pricing from cost alone usually leaves money behind when customers value the product well above it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A floor price per product family, agreed with finance and based on variable cost and minimum contribution, is held by every discount approver."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask finance for the variable cost per unit by product family"
                - "Estimate the extra cost of serving large or demanding customers"
                - "Set a floor price per product family with finance"
                - "Send the floor price list to everyone who approves discounts"
            - name: Monthly price realisation report
              description: |-
                ## Purpose
                Price realisation, the share of list price actually collected, is the single number that tells you whether pricing is holding. A short monthly report showing realisation, average discount and average selling price by product and segment, against last month and last year, catches erosion within weeks rather than at the year-end close.

                ## Milestones
                1. A report layout with realisation, average discount and selling price by product and segment.
                2. Month on month and year on year comparisons on every figure.
                3. One paragraph of commentary explaining the largest movement.
                4. Six consecutive monthly reports sent to the pricing owner and finance.

                ## Notes
                Start from the **Metrics log** template. Separate price effects from mix effects before blaming discounting: selling more of a cheaper product lowers average price without any discount at all.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly realisation reports, each with year on year comparisons and a written explanation of the largest movement, sent to finance."
                cadence: rolling
              tasks:
                - "Agree the report layout and recipients with the pricing owner"
                - "Refresh the realisation figures from the transaction dataset @recurring(monthly:8)"
                - "Split each month's change in average price into price and mix effects"
                - "Send the report and commentary to the pricing owner and finance"
            - name: Weekly discount exception review
              description: |-
                ## Purpose
                Deals priced outside the discount guidelines are where margin leaks and where the guidelines learn. A thirty minute weekly review of every exception approved or requested, with the rep's reason and the deal outcome, keeps approvers consistent and shows which rules are too tight to follow.

                ## Milestones
                1. A weekly list of every deal that exceeded standard discount limits.
                2. Each exception tagged with a reason category such as competitor, volume or timing.
                3. Approval decisions checked for consistency across approvers.
                4. A quarterly note of rules that drew repeated exceptions and need changing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly reviews held with every exception tagged by reason, and one quarterly note proposing rule changes."
                cadence: rolling
              tasks:
                - "Set up a saved list of deals above standard discount limits"
                - "Review the week's discount exceptions and tag each reason @recurring(weekly:tue)"
                - "Compare decisions made by different approvers on similar deals"
                - "Summarise the rules that drew the most exceptions @recurring(quarterly)"
            - name: Monthly plan upgrade and downgrade flows
              description: |-
                ## Purpose
                Plan mix changes through movement as well as new sales: customers upgrade when they hit a limit and downgrade when they stop seeing value in a tier. Tracking monthly flows between plans, and the revenue each flow adds or removes, shows whether the packaging pushes people upwards or lets them slide to the cheapest option.

                ## Milestones
                1. A flow table counting moves between every pair of plans each month.
                2. Net revenue added or lost by upgrades and downgrades per month.
                3. The limits or triggers behind most upgrades identified.
                4. Downgrade reasons gathered from change forms or support notes where available.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of plan flow tables with net revenue effect, plus a written list of the top three upgrade triggers."
                cadence: rolling
              tasks:
                - "Build a table of moves between each pair of plans last month"
                - "Update the plan flow table and its revenue effect @recurring(monthly:12)"
                - "Find which plan limits most often come just before an upgrade"
                - "Read the last twenty downgrade reasons customers gave"
            - name: Quarterly competitor price check
              description: |-
                ## Purpose
                Competitors change prices with little announcement, and a grid built once goes stale within two quarters. A quarterly check of every competitor's pricing page, plus any new quotes sales has seen, keeps the benchmark current and flags moves early enough to discuss before a renewal season.

                ## Milestones
                1. The benchmark grid updated with a dated snapshot each quarter.
                2. Changes since the last check highlighted.
                3. Competitor quotes that customers shared collected from sales and added with the deal context.
                4. Material moves raised at the quarterly pricing review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly dated snapshots of competitor pricing exist, each with changes since the previous one highlighted."
                cadence: rolling
              tasks:
                - "Save a dated copy of each competitor's pricing page @recurring(quarterly)"
                - "Ask sales for competitor quotes customers shared this quarter"
                - "Highlight any change since the last check in the grid"
                - "Add material moves to the pricing committee agenda"
            - name: Promotion read-out within two weeks of each sale
              description: |-
                ## Purpose
                Promotions are often judged on revenue during the sale, which ignores the sales pulled forward from the weeks after, the customers who would have bought at full price anyway and the margin given away. A standard read-out for every promotion, comparing against a baseline and checking the weeks either side, builds an honest record of which offers pay.

                ## Milestones
                1. A standard read-out template covering incremental units, margin given away and the dip after the sale.
                2. A baseline method agreed, such as comparable weeks or held-out regions.
                3. Every promotion in the next six months read out within two weeks of ending.
                4. A running table of promotions ranked by incremental margin.

                ## Notes
                The post-sale dip is the part most often missed. Look at four weeks after the promotion, not just the promotion itself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every promotion run in a six-month period has a read-out with incremental margin and post-sale dip, filed in a ranked table."
                cadence: rolling
              tasks:
                - "Write the standard promotion read-out template"
                - "Agree the baseline method with marketing and finance"
                - "Check which promotions ended and are due a read-out @recurring(monthly:18)"
                - "Add each finished read-out to the ranked promotions table"
            - name: Quarterly pricing committee
              description: |-
                ## Purpose
                Decisions about price, spread across sales, product, marketing and finance, tend to be made by whoever argues last. A quarterly meeting with a standing agenda of realisation, exceptions, competitor moves and proposed changes gives one place where pricing decisions are made, recorded and followed up.

                ## Milestones
                1. Members named from sales, product, marketing and finance, with one chair.
                2. A standing agenda and a pre-read sent five working days before.
                3. Decisions recorded with owner and date in a decision log.
                4. Four quarterly meetings held in a year with actions followed up.

                ## Notes
                Start from the **Meeting notes** template for the agenda and decision log.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Four quarterly pricing committee meetings held in twelve months, each with a pre-read and a decision log entry for every decision."
                cadence: cyclic
              tasks:
                - "Name the committee members and the chair"
                - "Send the pricing committee pre-read five working days ahead @recurring(quarterly)"
                - "Record each decision with an owner and date in the decision log"
                - "Check last quarter's actions at the start of each meeting"
            - name: Monthly margin leakage scan
              description: |-
                ## Purpose
                Small leaks add up: an expired promotion code still applying, customers on price lists that should have ended, free shipping thresholds nobody updated, credits issued twice. A monthly scan with a fixed set of queries for these patterns finds the money lost by error rather than by decision.

                ## Milestones
                1. A set of six to ten leakage queries written, each for a known pattern.
                2. Each finding given an owner and an estimated annual value.
                3. A record of fixes and money recovered.
                4. The scan run for six consecutive months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly scans run, with every finding assigned an owner and the value of confirmed fixes recorded."
                cadence: rolling
              tasks:
                - "List the leakage patterns finance and sales already suspect"
                - "Write a query for each pattern against the transaction dataset"
                - "Run the leakage queries and log each finding with an owner @recurring(monthly:22)"
                - "Record the value of each fix once it is confirmed"
            - name: Price objection tagging in win-loss reviews
              description: |-
                ## Purpose
                Sales teams often say they lost on price, and sometimes they did, but price is also the polite reason for a product gap or a weak business case. Tagging every lost and won deal with whether price came up, at what stage and against which competitor, then reading the notes monthly, separates real price resistance from everything else.

                ## Milestones
                1. A short set of price objection tags added to the CRM loss reasons.
                2. Reps briefed on when to use each tag.
                3. A monthly count of deals lost with price as the main reason, by segment and competitor.
                4. Five lost deals a quarter checked with a short call to the buyer.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of deals tagged for price objections, with a monthly count by segment and at least ten buyer calls completed."
                cadence: rolling
              tasks:
                - "Add price objection tags to the lost deal reasons in the CRM"
                - "Brief the sales team on when to use each tag"
                - "Count and read last month's deals tagged as lost on price @recurring(monthly:15)"
                - "Call five lost buyers each quarter to ask how much price weighed"
            - name: Annual price list review before budget
              description: |-
                ## Purpose
                Once a year the business sets next year's prices, usually under time pressure from the budget timetable. Starting two months earlier with a fixed pack, covering realisation, cost changes, competitor moves, plan mix and the elasticity evidence you have, turns the yearly price list into a reasoned decision rather than a flat percentage applied to everything.

                ## Milestones
                1. The review date fixed two months before the budget deadline.
                2. A pack with realisation, cost changes, competitor moves, plan mix and elasticity evidence.
                3. Proposed changes per product family with expected volume and revenue effect.
                4. Approved prices recorded in the price change log with effective dates.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Next year's price list is approved at least a month before the budget deadline, with expected effects per product family and entries in the change log."
                cadence: cyclic
              tasks:
                - "Find the budget deadline and set the review two months earlier"
                - "Assemble the yearly pricing review pack @recurring(yearly)"
                - "Propose changes per product family with expected volume effects"
                - "Record approved prices and effective dates in the change log"
            - name: Cost inflation pass-through tracker
              description: |-
                ## Purpose
                When input costs, wages or shipping rise, margin shrinks unless prices follow, but raising every price by the same amount ignores where customers are sensitive. Tracking cost indices against your realised prices each quarter shows which products have absorbed the most cost rise and where a targeted increase is overdue.

                ## Milestones
                1. Two to four cost indices chosen that match your main cost lines.
                2. Realised price per product family indexed from the same base period.
                3. The gap between cost growth and price growth shown per product family.
                4. Products with the widest gap flagged for the annual review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly updates compare cost indices with realised price per product family, and the widest gaps appear in the annual review pack."
                cadence: rolling
              tasks:
                - "Choose the cost indices that match your largest cost lines"
                - "Set a base period and index realised prices from it"
                - "Update cost and price indices side by side @recurring(quarterly)"
                - "Flag the product families with the widest cost to price gap"
            - name: Price elasticity fundamentals
              description: |-
                ## Purpose
                Elasticity, how much demand changes when price changes, is the idea under almost every pricing argument, and it is easy to misuse. Learning own and cross price elasticity, why short-run reactions differ from long-run ones, and why one figure rarely holds across all customers and price ranges, lets you test a claim that customers are not price sensitive with numbers rather than opinion.

                ## Milestones
                1. Own price and cross price elasticity explained in your own words with a worked example.
                2. The difference between short-run and long-run response written down.
                3. Three reasons a single elasticity figure misleads noted, such as segment mix and price range.
                4. A one-page explainer shared with colleagues who use the word.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page elasticity explainer with a worked example from your own data is written and shared with the commercial team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read an introductory chapter on price elasticity of demand"
                - "Work through one elasticity calculation using a change from your price log"
                - "Write down three ways a single elasticity figure can mislead"
                - "Share a one-page explainer with the commercial team"
            - name: Estimating elasticity from historical sales
              description: |-
                ## Purpose
                Historical data holds plenty of price variation, from promotions, regional lists and past increases, but price is rarely set at random, so a naive regression can even show demand rising with price. Learning to estimate elasticity with a log-log model, controls for seasonality and promotion, and an honest look at what drove each price move gives estimates you can defend in a pricing committee.

                ## Milestones
                1. A log-log demand model fitted for one product family with seasonality and promotion terms.
                2. The sources of price variation in the data listed and judged as usable or confounded.
                3. The elasticity estimate reported with a confidence interval, not a single figure.
                4. The estimate compared with the outcome of at least one past price change in the log.

                ## Notes
                If prices only moved when demand was already shifting, the estimate is biased. Say so in the write-up rather than hiding it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An elasticity estimate with a confidence interval exists for one product family, with confounded price moves documented and one past change checked."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick one product family with several past price changes"
                - "List what caused each price move and mark the confounded ones"
                - "Fit a log-log demand model with seasonality and promotion terms"
                - "Report the elasticity with its interval and the caveats"
                - "Check the estimate against the outcome of one past price change"
            - name: Van Westendorp and Gabor-Granger surveys
              description: |-
                ## Purpose
                Where there is no price history, such as a new product or a new market, direct survey methods give a first read of what customers will pay. Learning to run a Van Westendorp price sensitivity question set and a Gabor-Granger purchase likelihood ladder, and knowing that stated willingness to pay usually runs above what people really spend, gives you a range to test rather than a guess.

                ## Milestones
                1. The four Van Westendorp questions and a Gabor-Granger price ladder drafted for one product.
                2. The survey fielded to the target segment with the respondent count the analysis plan requires.
                3. Acceptable price range and purchase likelihood curves produced.
                4. Results written up as a range to test, with the stated preference caveat.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed survey for one product produces an acceptable price range and a purchase likelihood curve, written up as a range to test."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Read a short guide to the Van Westendorp and Gabor-Granger methods"
                - "Draft the questions for one product and its target segment"
                - "Field the survey and remove speeders and inconsistent answers"
                - "Plot the acceptable price range and purchase likelihood curve"
                - "Write up the range with the caveat about stated preferences"
            - name: Conjoint analysis for feature and price trade-offs
              description: |-
                ## Purpose
                Customers rarely judge a price on its own; they trade it against features, limits and brand. A choice-based conjoint study shows how much each feature is worth in price terms and simulates share for packages you have not launched yet. Learning to design one properly, with realistic attribute levels and enough respondents, avoids an expensive study that answers the wrong question.

                ## Milestones
                1. Five to seven attributes chosen with realistic levels, including price.
                2. The choice design checked for balance and tested with five pilot respondents.
                3. Part-worth utilities estimated and converted into willingness to pay per feature.
                4. A share simulator built for two or three candidate packages.

                ## Notes
                Conjoint software and respondent panels cost money. Check whether a simpler survey answers the decision brief first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A piloted choice-based conjoint study yields willingness to pay per feature and a share simulator for at least two candidate packages."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose the attributes and levels with product and sales"
                - "Build the choice design and pilot it with five respondents"
                - "Field the study and estimate part-worth utilities"
                - "Turn the utilities into willingness to pay per feature"
                - "Ask the agent to draft a plain-language summary of the simulator results"
            - name: Choosing the value metric you charge by
              description: |-
                ## Purpose
                Charging per seat, per transaction, per gigabyte or per location decides who pays more as they grow and whether price tracks the value customers get. Comparing candidate value metrics against how usage spreads across your customers, how easy each is to predict and how closely it follows value shows whether the current one is holding revenue back.

                ## Milestones
                1. Three candidate value metrics listed with the case for each.
                2. Current customers' usage on each metric measured and its spread shown.
                3. Each metric scored on fairness to customers, predictability and growth with the account.
                4. A recommendation to keep or change the value metric, with the revenue effect on existing customers.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written keep or change recommendation on the value metric, backed by usage data for three candidates and the revenue effect on current customers."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List three value metrics you could plausibly charge by"
                - "Measure each customer's usage on every candidate metric"
                - "Score the candidates on fairness, predictability and growth"
                - "Model how revenue per customer would shift under each metric"
                - "Write the keep or change recommendation"
            - name: Reading a price test correctly
              description: |-
                ## Purpose
                Price tests are judged wrongly more often than most experiments, because a lower price nearly always wins on conversion while losing on revenue or margin. Learning to choose revenue or margin per visitor as the primary metric, run long enough to see repeat purchase and refunds, and size the test for the smaller effects price usually produces, keeps the business from cutting prices on false evidence.

                ## Milestones
                1. Revenue or margin per visitor set as the primary metric for price tests, with conversion as secondary.
                2. A sample size worked out for the smallest revenue difference worth detecting.
                3. A minimum test duration covering at least one repeat purchase or renewal cycle where practical.
                4. A read-out checklist that includes refunds and plan mix.

                ## Notes
                Showing different prices to similar customers at the same time can damage trust and may be restricted by consumer law in some places. Check with legal, and consider testing across regions or time periods instead.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written price test standard names the primary metric, minimum sample size, minimum duration and read-out checklist, agreed with the experimentation owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read two published accounts of price tests and how they were judged"
                - "Write the primary and secondary metrics for future price tests"
                - "Work out the sample size for the smallest revenue lift worth knowing"
                - "Draft the price test read-out checklist"
            - name: Price presentation and anchoring evidence
              description: |-
                ## Purpose
                How a price is shown can move behaviour as much as the price itself: charm endings, a high anchor plan, a decoy tier, monthly against annual framing, tax-inclusive display. Reviewing the published evidence on these effects, and noting where it is weak or comes only from lab studies, gives you a short list of presentation changes worth testing on your own customers.

                ## Milestones
                1. Six presentation effects summarised with the strength of evidence for each.
                2. Your current pricing page or price list checked against each effect.
                3. Two presentation changes chosen for a test.
                4. A note of any effect the business should avoid because it could mislead customers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of six price presentation effects with evidence strength, and two changes chosen for testing, is shared with marketing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read a review of research on price presentation effects"
                - "Summarise six effects and how strong the evidence is for each"
                - "Check your pricing page against each effect"
                - "Pick two presentation changes worth testing"
            - name: Price discrimination, fairness and legal limits
              description: |-
                ## Purpose
                Charging different customers different prices is normal through segments, volume tiers and regional lists, but personalised prices, price parity clauses and resale price conditions can breach competition or consumer law and lose customer trust. Learning the main legal and fairness lines, and writing them down for your team, means analysis never recommends something the business cannot do.

                ## Milestones
                1. Current forms of price differentiation in your business listed.
                2. Practices that need legal sign-off identified, such as personalised pricing or resale price conditions.
                3. Questions for your legal adviser written and answered.
                4. A one-page pricing fairness and compliance note shared with the commercial team.

                ## Notes
                This project organises questions for a lawyer; it does not replace their advice. Rules differ by country and change over time, so get advice for each market you sell in.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page fairness and compliance note, reviewed by a legal adviser, lists the pricing practices allowed and those needing sign-off."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the ways your business currently charges customers different prices"
                - "Write the questions about personalised pricing and parity terms for legal"
                - "Book time with your legal adviser to go through the questions"
                - "Write the one-page fairness and compliance note"
            - name: Good-better-best tier redesign
              description: |-
                ## Purpose
                Three tiers work when each has a clear buyer and a reason to step up, and fail when the middle tier is a compromise nobody wants. Redesigning the tiers from usage data, feature value and willingness to pay evidence, then checking the expected mix and revenue before launch, avoids the common outcome where most customers land on the cheapest plan.

                ## Milestones
                1. Each tier's target buyer written in a sentence.
                2. Features assigned to tiers using usage and willingness to pay evidence.
                3. Expected plan mix and revenue modelled against the current baseline.
                4. The redesign approved by the pricing committee with a migration plan for existing customers.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved tier design with a named buyer per tier, a modelled plan mix against the baseline and a migration plan for current customers."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Write the target buyer for each tier in one sentence"
                - "Map each feature to the tier whose buyer values it most"
                - "Model expected plan mix and revenue against the baseline"
                - "Draft the migration plan for customers on current plans"
                - "Take the redesign to the pricing committee for approval"
            - name: Annual prepayment discount level
              description: |-
                ## Purpose
                Offering a discount for paying a year upfront brings cash forward and usually reduces cancellations, but the right size of discount depends on how many customers take it and what the cash is worth to you. Comparing take-up at the current discount, competitor practice and the cost of capital finance uses gives a discount level you can defend instead of a habit of two months free.

                ## Milestones
                1. Current take-up of annual billing measured by plan and segment.
                2. Competitors' annual discounts recorded from the benchmark grid.
                3. The value of earlier cash to the business agreed with finance.
                4. A recommended annual discount level with the expected change in take-up.

                ## Notes
                The long-run value of annual and monthly customers belongs to customer lifetime value work. This project settles the size of the discount only.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recommended annual prepayment discount is recorded, with current take-up, competitor discounts and finance's value of earlier cash shown."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure the share of customers on annual billing by plan"
                - "Record competitors' annual billing discounts"
                - "Ask finance what bringing cash forward is worth"
                - "Recommend an annual discount level with expected take-up"
            - name: Discount guardrails and approval matrix
              description: |-
                ## Purpose
                Without written limits, discounting is set by the most persuasive rep and the most tired approver. A matrix stating the maximum discount each role can give by deal size and product, with the reasons that justify going further, makes most approvals instant and leaves senior time for the deals that matter.

                ## Milestones
                1. Discount bands set by deal size and product family from the baseline analysis.
                2. Approval levels assigned to each band, from rep to finance director.
                3. Acceptable reasons for exceeding a band listed, such as a multi-year commitment.
                4. The matrix built into the quoting tool or CRM and in use for one quarter.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A discount approval matrix by deal size and product is live in the quoting tool and has governed every quote for one full quarter."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft discount bands by deal size from the baseline analysis"
                - "Assign an approval level to each band"
                - "List the reasons that justify going beyond a band"
                - "Build the matrix into the quoting tool or CRM"
            - name: Price increase business case for existing customers
              description: |-
                ## Purpose
                Raising prices for existing customers is often the largest single profit lever available, and also the one that most worries the team. A business case that groups customers by sensitivity, estimates the revenue gained against the cancellations risked and sets the threshold at which the increase would stop paying gives the decision a number instead of a fear.

                ## Milestones
                1. Customers grouped by expected price sensitivity using tenure, usage and discount history.
                2. Revenue gain and cancellation risk estimated per group with a low, central and high case.
                3. The break-even cancellation rate for each group calculated.
                4. A recommendation of who gets which increase, approved by the pricing committee.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved business case sets the increase for each customer group, with low, central and high cases and a break-even cancellation rate."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Group customers by tenure, usage and current discount"
                - "Work out the break-even cancellation rate for each group"
                - "Build low, central and high cases for the revenue effect"
                - "Ask the agent to draft the business case summary from the model"
                - "Take the recommendation to the pricing committee"
            - name: Free tier limits and paywall placement
              description: |-
                ## Purpose
                A free plan that gives away too much leaves nobody a reason to pay, and one that gives too little never builds an audience. Analysing where free users hit limits, which limits come just before an upgrade and how many free users ever convert shows whether the line between free and paid sits in the right place.

                ## Milestones
                1. Each free plan limit listed with the share of free users who reach it.
                2. Conversion to paid measured within 30, 60 and 90 days of hitting each limit.
                3. The limit most associated with upgrades identified.
                4. A proposal to tighten, loosen or keep each limit, with the expected effect on conversion.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A proposal covers every free plan limit, showing reach, 90-day conversion after hitting it and a tighten, loosen or keep recommendation."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every limit on the free plan"
                - "Measure how many free users reach each limit"
                - "Compare upgrade rates after users hit each limit"
                - "Propose which limits to tighten, loosen or keep"
            - name: Choosing a pricing analytics or quoting tool
              description: |-
                ## Purpose
                Once deals and price lists outgrow spreadsheets, a pricing analytics or configure, price and quote tool can enforce guardrails and capture clean price data at the source. Comparing three options against your quoting flow, data model and budget avoids buying a platform the sales team quietly routes around.

                ## Milestones
                1. Requirements written covering quoting, approvals, price lists and reporting.
                2. Three tools shortlisted and scored against the same requirements.
                3. One tool trialled with real deals from the last quarter.
                4. A decision recorded with cost over three years and an implementation owner.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool decision compares three options against written requirements, includes a trial with real quotes and states three-year cost."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the requirements with sales operations and finance"
                - "Shortlist three tools and score them against the requirements"
                - "Trial the leading tool with ten real quotes from last quarter"
                - "Record the decision with three-year cost and an owner"
            - name: Price point ladder across the range
              description: |-
                ## Purpose
                Prices set one product at a time drift into a range where the gaps make no sense: two sizes at almost the same price, or a premium version priced below the standard one after a promotion. Setting a ladder of price points, with consistent steps between tiers and consistent endings, makes the range easy to read and stops accidental cannibalisation.

                ## Milestones
                1. Every product in a range plotted by price and size or tier.
                2. Inconsistent gaps and price inversions listed.
                3. A ladder of price points with agreed step sizes and endings.
                4. Prices moved onto the ladder at the next price list change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One product range sits on an agreed price ladder with no inversions, applied at the next price list change."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Plot every product in one range by price and size or tier"
                - "List the gaps and price inversions on the chart"
                - "Agree step sizes and price endings for the ladder"
                - "Schedule the ladder changes for the next price list"
            - name: Bundle pricing and attach rate analysis
              description: |-
                ## Purpose
                Bundles can raise the average order by pairing a popular item with one customers would not buy alone, or they can simply discount what customers were already buying together. Measuring how often items are already bought together, and what each bundle's discount gives away on those existing pairs, shows which bundles create sales and which only cut price.

                ## Milestones
                1. Attach rates measured for the twenty most common product pairs.
                2. Each current bundle's discount costed on customers who already bought both items.
                3. Incremental sales from each bundle estimated against a baseline.
                4. Bundles ranked into keep, reprice and retire.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every current bundle is placed in keep, reprice or retire, based on attach rates, discount cost on existing pairs and estimated incremental sales."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Measure attach rates for the twenty most common product pairs"
                - "Cost the discount each bundle gives on pairs already bought together"
                - "Estimate the extra sales each bundle created"
                - "Sort the bundles into keep, reprice and retire"
            - name: Price increase rollout and customer notice plan
              description: |-
                ## Purpose
                A price increase that is well analysed can still fail at rollout through short notice, confused support teams and contracts that do not allow it. Planning the rollout as a dated event, with contract checks, notice periods, support scripts and a weekly watch on cancellations against the business case, protects the revenue the case promised.

                ## Milestones
                1. Contracts and terms checked for notice periods and increase clauses, with legal sign-off.
                2. Customer notices, support scripts and sales talking points ready before notice goes out.
                3. Notice sent on the planned date with the required period before the change.
                4. Cancellations, downgrades and complaints tracked for the first eight weeks against the business case.

                ## Notes
                Many contracts and consumer rules set minimum notice periods. Confirm yours with legal before choosing the effective date.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The increase takes effect on the planned date with the required notice given, and eight weeks of cancellations are compared with the business case."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask legal to confirm notice periods and increase clauses in current contracts"
                - "Draft the customer notice, support script and sales talking points"
                - "Brief support and sales a week before the notice goes out"
                - "Compare cancellations and downgrades with the business case @recurring(weekly:mon)"
            - name: Seasonal sale price plan
              description: |-
                ## Purpose
                Big seasonal sales are booked in the calendar months ahead, yet the depth of discount is often decided the week before by copying last year. Planning which products go on offer, at what depth and against which floor price, with a baseline agreed before the sale starts, turns the sale into a test the business learns from each year.

                ## Milestones
                1. Products and discount depths chosen with the expected incremental margin for each.
                2. No item discounted below its floor price without a written reason.
                3. A baseline and success measure agreed before the sale starts.
                4. A read-out within two weeks of the sale, including the dip in the weeks after.

                ## Notes
                Start from the **Marketing campaign** template and add a pricing tab for depths and floors.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The next seasonal sale runs with depths set against floor prices and a pre-agreed baseline, and its read-out is filed within two weeks."
                cadence: cyclic
              tasks:
                - "Pull last year's sale results by product and discount depth"
                - "Choose products and discount depths against the floor prices"
                - "Agree the baseline and success measure with marketing"
                - "Plan the seasonal sale prices and baseline two months ahead @recurring(yearly)"
            - name: Launch price for a new product
              description: |-
                ## Purpose
                Launch prices are hard to move upwards, so the first price customers see tends to stick for years. Setting it from willingness to pay evidence, the competitor grid, the cost floor and its place in your own range, then deciding in advance what result would trigger a change, gives the launch a price you can explain.

                ## Milestones
                1. Willingness to pay evidence, competitor prices and cost floor gathered on one page.
                2. The launch price positioned against your own range so it does not undercut an existing product.
                3. A launch discount, if any, given an end date in writing.
                4. Review triggers agreed, such as conversion or margin thresholds after 90 days.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A launch price is recorded with its evidence page, any launch discount end date and the 90-day results that would trigger a review."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Gather willingness to pay evidence, competitor prices and the cost floor"
                - "Check the launch price against your existing range for undercutting"
                - "Write an end date for any launch discount"
                - "Agree the 90-day results that would trigger a price review"
            - name: Renewal season price uplift targets
              description: |-
                ## Purpose
                In contract businesses most price movement happens at renewal, when uplifts are agreed, waived or traded for longer terms. Reviewing the upcoming quarter's renewals ahead of time, with each account's current price against list, usage growth and risk, lets account managers go into renewal talks with a target uplift rather than defaulting to flat.

                ## Milestones
                1. A list of renewals due next quarter with current price, list price and usage change.
                2. A target uplift set per account, with a floor and a walk-away point.
                3. Uplifts achieved recorded against target after each renewal.
                4. A quarterly summary of uplift achieved and waived, by segment.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every renewal in two consecutive quarters had a target uplift set beforehand, with achieved uplift recorded and summarised by segment."
                cadence: cyclic
              tasks:
                - "List next quarter's renewals with current price and usage change"
                - "Set a target uplift and floor for each renewal @recurring(quarterly)"
                - "Record the uplift achieved after each renewal closes"
                - "Summarise uplifts achieved and waived by segment"
            - name: First price for a pre-revenue startup
              description: |-
                ## Purpose
                Founders often price their first product by guessing low, which is hard to undo and tells early customers the product is minor. Talking to twenty target buyers about what the problem costs them, testing two or three price points in real sales conversations and writing down each reaction gives a starting price grounded in evidence, even with no sales history.

                ## Milestones
                1. The cost of the problem to a typical buyer estimated from at least ten conversations.
                2. Two or three price points tested in real sales conversations or proposals.
                3. Each buyer's reaction recorded in a simple table.
                4. A starting price chosen, with the evidence and a date to revisit it.

                ## Notes
                Founders usually underprice. If nobody pushes back on price at all, the price is probably too low.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A starting price is chosen from at least ten buyer conversations and two tested price points, with a written date to revisit it."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List twenty target buyers you can speak to in the next month"
                - "Ask each buyer what the problem costs them today"
                - "Quote two or three price points in real proposals and record the reaction"
                - "Choose a starting price and set a date to revisit it"
            - name: Grandfathering early customers through a price change
              description: |-
                ## Purpose
                Early customers took a risk on a young product and often pay a fraction of today's list price. Deciding whether to keep them on legacy pricing for good, move them up in steps or offer a loyalty rate, with the revenue at stake and the goodwill counted, avoids both an angry founding cohort and a business stuck subsidising its earliest accounts.

                ## Milestones
                1. Every customer on legacy pricing listed with the gap to current list price.
                2. Revenue at stake calculated for keeping, stepping and moving to list.
                3. A policy chosen and written, including any end date for legacy rates.
                4. Affected customers told personally, with the policy applied in billing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written grandfathering policy is applied in billing, with every legacy customer contacted personally before their price changes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every customer on legacy pricing and their gap to list"
                - "Calculate revenue at stake under each grandfathering option"
                - "Write the chosen policy with any end date for legacy rates"
                - "Contact each affected customer personally before billing changes"
            - name: Usage-based pricing analysis
              description: |-
                ## Purpose
                Usage-based pricing lines price up with value but makes revenue harder for you to predict and bills harder for customers to budget. Analysing how usage is distributed, how much it swings month to month and how bills would look under different rates and included allowances shows whether pure usage, a hybrid or committed tiers fits your customers.

                ## Milestones
                1. Monthly usage distribution and variability measured per customer.
                2. Bills simulated under two or three rate and allowance designs.
                3. The share of customers whose bill would swing more than an agreed amount month to month identified.
                4. A recommended model, pure usage, hybrid or committed tiers, with revenue predictability shown.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recommendation between pure usage, hybrid and committed tiers is backed by simulated bills for current customers and a measure of bill volatility."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Measure each customer's monthly usage and how much it varies"
                - "Simulate bills under two or three rate and allowance designs"
                - "Count the customers whose bills would swing sharply"
                - "Recommend pure usage, hybrid or committed tiers"
            - name: Markdown and clearance pricing for seasonal stock
              description: |-
                ## Purpose
                Seasonal and slow-moving stock has a selling window, and every week it sits the eventual clearance price falls. Analysing sell-through against weeks of cover, and setting markdown steps with dates and depths in advance, usually recovers more margin than deep cuts at the end of the season.

                ## Milestones
                1. Sell-through and weeks of cover measured for every seasonal line.
                2. Markdown steps written with trigger dates, depths and floor prices.
                3. Markdowns applied on the planned dates and their sell-through tracked.
                4. Margin recovered compared with the previous season's clearance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One season's markdowns follow a written plan of dates, depths and floors, with margin recovered compared against the previous season."
                cadence: cyclic
              tasks:
                - "Calculate sell-through and weeks of cover for each seasonal line"
                - "Write markdown steps with dates, depths and floors"
                - "Check sell-through against the markdown plan @recurring(weekly:thu)"
                - "Compare margin recovered with last season's clearance"
            - name: Deal pricing desk for a sales-led team
              description: |-
                ## Purpose
                In sales-led businesses most price decisions are made deal by deal, and reps want quick help more than reports. Offering a pricing desk, where an analyst returns a suggested price range from comparable won deals within a working day, puts evidence into the quote at the moment it is set.

                ## Milestones
                1. A simple request route for reps, such as a form or channel, with a one working day turnaround.
                2. Each request answered with a range from comparable won deals and the floor price.
                3. Requests and outcomes logged so the comparisons improve.
                4. Rep feedback gathered after the first quarter.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Ninety percent of pricing desk requests in a quarter are answered within one working day with comparables and a floor price."
                cadence: rolling
              tasks:
                - "Set up a request form for deal pricing help"
                - "Write a standard reply format with range, comparables and floor"
                - "Answer the pricing desk requests in the queue @recurring(weekly:mon,thu)"
                - "Ask five reps for feedback after the first quarter"
            - name: Marketplace take rate review
              description: |-
                ## Purpose
                A marketplace's take rate is its price, paid by sellers, buyers or both, and small changes ripple through supply, demand and the willingness of either side to trade elsewhere. Reviewing the effective take rate by category, its trend and how it compares with the other channels your sellers use shows where the rate is sustainable and where it pushes trade off the platform.

                ## Milestones
                1. Effective take rate calculated by category, including fees, payment costs and promotions.
                2. Seller and buyer activity compared before and after each past fee change.
                3. Fee rates of alternative channels sellers use recorded from public sources.
                4. A recommendation per category to hold, raise or lower the rate.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A hold, raise or lower recommendation exists for every category, based on effective take rate, past fee change effects and alternative channel fees."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Calculate the effective take rate by category for the last year"
                - "Compare seller activity before and after each past fee change"
                - "Record public fee rates of the alternatives sellers use"
                - "Recommend hold, raise or lower for each category"
            - name: Pricing for a new country and currency
              description: |-
                ## Purpose
                Converting your home price at today's exchange rate rarely produces the right price abroad: local competitors, purchasing power, tax-inclusive display rules and the need for round local prices all differ. Setting a local price list from those inputs, with a rule for when exchange rate moves trigger a review, avoids prices that look odd to local buyers or quietly lose margin.

                ## Milestones
                1. Local competitor prices and purchasing power indicators gathered for the new market.
                2. Tax display rules and invoicing requirements confirmed with an adviser.
                3. A local price list in rounded local currency with its margin at current rates.
                4. An exchange rate band written that triggers a price review if breached.

                ## Notes
                Check with a tax adviser whether prices must be shown including sales tax or VAT in the new market.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A rounded local price list with margin at current rates and a written exchange rate review band is approved before launch in the new market."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect local competitor prices for the new market"
                - "Confirm tax display and invoicing rules with an adviser"
                - "Draft the rounded local price list and its margin"
                - "Write the exchange rate band that triggers a price review"
            - name: Hierarchical elasticity model across products
              description: |-
                ## Purpose
                Single-product elasticity estimates are noisy for slow sellers and new lines, which are often exactly where pricing decisions are needed. A hierarchical model that pools information across a product family, letting each product borrow strength from its neighbours, gives usable estimates for thin data while still letting best sellers show their own response.

                ## Milestones
                1. A hierarchical demand model fitted across one product family with seasonal and promotion terms.
                2. Product-level elasticities reported with intervals and compared with separate fits.
                3. Out-of-sample error checked on a held-back period.
                4. Model assumptions and limits written in a short method note.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Product-level elasticities with intervals from a pooled model beat separate fits on held-back error, with assumptions written in a method note."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose a product family with a mix of fast and slow sellers"
                - "Fit separate and pooled demand models on the same data"
                - "Check out-of-sample error on a held-back quarter"
                - "Write a method note on assumptions and limits"
            - name: Price optimisation with business guardrails
              description: |-
                ## Purpose
                Once elasticity estimates exist, it is tempting to let a model set prices to maximise margin, and a model with no guardrails will recommend moves no customer or sales team would accept. Building an optimiser that respects floors, ladder rules, maximum change per cycle and competitor position, with a person approving each run, turns estimates into recommendations people will actually use.

                ## Milestones
                1. Constraints written: floors, ladder steps, maximum change per cycle, competitor bands.
                2. An optimiser producing recommended prices within the constraints for one product family.
                3. Recommendations reviewed by a person before any price changes.
                4. Results of the first optimised cycle compared with a holdout set of products.

                ## Notes
                Keep a holdout set of products priced the old way for at least one cycle. Without it you cannot tell whether the optimiser helped.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One optimised pricing cycle has run within written constraints, with human approval of each run and results compared against a holdout."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the constraints every recommended price must respect"
                - "Build the optimiser for one product family"
                - "Review each run's recommendations before any price changes"
                - "Compare optimised products with the holdout after one cycle"
            - name: Deal price guidance model for quotes
              description: |-
                ## Purpose
                Reps quoting complex deals benefit most from a target and a floor that reflect what similar customers have actually paid. A model trained on won and lost quotes, using deal size, segment, product mix and competitor presence, can suggest a target price and show win probability at each price, so discount conversations start from evidence.

                ## Milestones
                1. A dataset of won and lost quotes with price, deal features and outcome.
                2. A model estimating win probability by price for a given deal profile.
                3. Target and floor prices produced for each new quote.
                4. Win rate and realised price compared for deals that followed guidance and those that did not.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "New quotes show a model-based target and floor price, and one quarter's win rate and realised price are compared for guided and unguided deals."
                cadence: phased
                effort_hours_estimate: "36"
              tasks:
                - "Assemble won and lost quotes with price and deal features"
                - "Fit a win probability model with price as an input"
                - "Show target and floor prices on new quotes"
                - "Compare outcomes for quotes that followed the guidance and those that did not"
            - name: Willingness to pay segmentation from conjoint data
              description: |-
                ## Purpose
                Average willingness to pay hides groups with very different value for the same product, such as a price-sensitive majority and a small group that would pay three times more for one feature. Fitting a latent class or hierarchical model to conjoint data reveals those segments and tells you whether a separate plan, add-on or fence is worth building.

                ## Milestones
                1. A latent class or hierarchical model fitted to existing conjoint data.
                2. Two to five segments described by willingness to pay and the features they value.
                3. Each segment linked to observable traits so it can be targeted.
                4. A recommendation on fences, add-ons or plans that would capture the difference.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two to five willingness to pay segments are described with observable traits, and a written recommendation names the fence, add-on or plan to build."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Check the conjoint data has enough choices per respondent for segment models"
                - "Fit latent class models with two to five segments"
                - "Describe each segment by value and observable traits"
                - "Recommend fences, add-ons or plans for the most distinct segment"
---

# Pricing Analytics

This area is for the analyst asked to explain why average price keeps falling and for the founder setting or raising prices with little history to go on. It starts with the foundations (a decision brief, transaction-level price data, the price waterfall, a change log, plan mix and discount baselines, competitor prices and a cost floor), moves through the operating routines, the elasticity and willingness to pay methods worth learning, decisions on tiers, discounts, increases and bundles, dated events such as a price increase rollout or a seasonal sale, situations from a first startup price to a new currency, and ends with specialist work like hierarchical elasticity models and price optimisation.

What repeats is a monthly realisation report, leakage scan, plan flow update, promotion check and price objection count, a weekly discount exception review, quarterly competitor checks, cost index updates, renewal uplift targets and the pricing committee, and a yearly price list review ahead of the budget. The Metrics log, Meeting notes, Purchase decision and Marketing campaign templates pair with the change log and realisation report, the committee, the tool choice and the seasonal sale. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
