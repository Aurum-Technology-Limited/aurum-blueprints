---
id: sales-revenue.account-expansion-upsell
name: Account Expansion & Upsell Selling
description: "A revenue baseline and whitespace map for your customers, clear expansion rules, signal sweeps, upsell and cross-sell skills, and plays for new departments that grow accounts without straining the relationship."
category: business
version: 1.0.0
tags: [sales-revenue, account-expansion-upsell, team, small-business, enterprise, upsell, cross-sell, net-revenue-retention]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - feedback-themes
    - marketing-campaign
    - meeting-notes
    - remediation-plan
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Account Expansion & Upsell Selling
          description: "Finding and closing additional revenue inside existing customers through upsells, cross-sells and new departments, without damaging the relationship."
          projects:
            - name: Installed base revenue baseline by customer
              description: |-
                ## Purpose
                Most teams can quote last quarter's new business but not what each existing customer pays today, for which products, and when the contract next moves. A single sheet of current annual recurring or repeat revenue per customer, split by product, is the base every expansion target, whitespace map and retention figure is measured against.

                ## Milestones
                1. A list of every active customer with current annual revenue and the products or services they buy.
                2. Contract start, renewal and notice dates added for each customer.
                3. Customers grouped into three or four size bands with a count and total revenue for each.
                4. Gaps between the CRM and the billing system listed and assigned to someone to fix.

                ## Notes
                Use billed revenue from finance as the source of truth. CRM deal values drift from what customers actually pay after discounts, credits and mid-term changes.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A customer revenue sheet that reconciles to the billing system within an agreed tolerance and shows product mix and renewal date for every account."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export active customers and billed revenue from the billing or accounting system"
                - "Match each customer to its CRM account and note any that do not match"
                - "Add product mix and renewal dates to every row"
                - "Ask the agent to summarise revenue by size band and product from the sheet"
            - name: Whitespace map of products by customer
              description: |-
                ## Purpose
                A whitespace map is a grid of customers down the side and your products, services or modules across the top, with each cell marked owned, in trial, not relevant or open. Laid over the revenue baseline it shows, in one view, where the biggest unsold fits are and which products almost nobody has bought a second time.

                ## Milestones
                1. A grid of the top customers against every sellable product, add-on and service.
                2. Each cell marked owned, in trial, not a fit or open, with a reason for every not a fit.
                3. An estimated annual value against each open cell using list price and the customer's size.
                4. The ten largest open cells ranked and shared with the account owners.

                ## Notes
                Marking cells as not a fit is as useful as marking them open. It stops reps pitching something the customer told you two years ago they will never need.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A whitespace grid covering at least the top fifty customers, with values on open cells and a ranked top ten shared with account owners."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every product, add-on and paid service a customer can buy today"
                - "Build the grid for the top fifty customers by revenue"
                - "Mark each cell and write a reason for every not a fit"
                - "Estimate the annual value of each open cell and rank the top ten"
            - name: Shared definitions for upsell, cross-sell and new department deals
              description: |-
                ## Purpose
                When one manager counts a price rise at renewal as expansion and another counts only new products, the expansion number means nothing and reps argue over credit. Writing down what counts as an upsell, a cross-sell, a new department or business unit, and a renewal uplift settles reporting before the first deal is logged.

                ## Milestones
                1. One-line definitions agreed for upsell, cross-sell, new department, renewal uplift and price increase.
                2. A rule for whether a new subsidiary of an existing customer counts as expansion or new business.
                3. Worked examples for five deals that have caused arguments in the past.
                4. The definitions signed off by sales, customer success and finance.

                ## Notes
                Keep price increases and inflation uplifts out of the expansion figure. They raise revenue but say nothing about whether customers are buying more.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page definitions sheet with worked examples, approved by the sales, customer success and finance leads."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect five past deals where the expansion label was disputed"
                - "Draft a one-line definition for each type of expansion revenue"
                - "Write the rule for subsidiaries and newly acquired companies"
                - "Get sign-off from the sales, customer success and finance leads"
            - name: Expansion ownership rules between sales and customer success
              description: |-
                ## Purpose
                Expansion stalls when the account manager thinks customer success will spot the need and customer success thinks raising money talk is not their job. Agreeing who finds, who qualifies, who proposes and who closes each type of expansion, and how credit is shared, removes the gap where good leads go quiet.

                ## Milestones
                1. A table of expansion types against roles showing who finds, qualifies, proposes and closes.
                2. A size threshold above which a dedicated account executive joins the deal.
                3. A written rule for how credit is recorded when two people work an expansion.
                4. The rules presented to both teams and published where reps look for process.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published ownership table for every expansion type, agreed by the sales and customer success leads, with a size threshold and a credit rule."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the last ten expansion deals and note who found and who closed each one"
                - "Draft the ownership table for each expansion type"
                - "Agree the size threshold and the credit rule with both team leads"
                - "Review the ownership table against the past year's deals @recurring(yearly)"
            - name: Earned the right test before any expansion ask
              description: |-
                ## Purpose
                Pitching an add-on to a customer who has not yet got value from what they bought is the fastest way to damage trust and invite a cancellation. A short readiness test, covering adoption, outcomes delivered, open support issues and the sponsor's mood, tells a rep whether to ask now or fix something first.

                ## Milestones
                1. Four to six readiness checks written, each answerable yes or no from data or a recent call.
                2. A rule for what happens when a customer fails one check: fix first, then ask.
                3. The test run against the top twenty accounts, with results recorded on the account.
                4. Reps briefed to note the readiness result on every new expansion opportunity.

                ## Notes
                A customer with an open severity one ticket or an unpaid invoice is almost never ready, however strong the signal looks.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written readiness test applied to the top twenty accounts, with a recorded pass or fix-first result for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the signs your best expanded customers showed before they bought more"
                - "Turn them into four to six yes or no readiness checks"
                - "Run the test on the top twenty accounts and record the results"
                - "Add a readiness field to new expansion opportunities in the CRM"
            - name: Expansion trigger and signal list
              description: |-
                ## Purpose
                Customers rarely announce that they are ready to buy more, but they leave clues: usage near a plan limit, a hiring spree, a new site, a funding round, a new executive or a support question about a feature they do not own. Listing the triggers that have preceded real expansion deals, with where each one shows up, gives the whole team the same things to watch for.

                ## Milestones
                1. Ten to fifteen triggers listed, each linked to at least one past expansion deal.
                2. The data source for each trigger named: product data, CRM, news, support or a conversation.
                3. A suggested first action written beside every trigger.
                4. The list shared with account managers, customer success and support leads.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A shared list of at least ten expansion triggers, each with its data source, a past deal it preceded and a first action."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Interview two account managers about what tipped off their last expansion deals"
                - "Review the twenty most recent expansion deals for the event that came first"
                - "Write each trigger with its data source and a first action"
                - "Share the list with customer success and support team leads"
            - name: Expansion opportunity type and stages in the CRM
              description: |-
                ## Purpose
                Expansion deals logged alongside new logo deals inherit stages that make no sense for them, such as cold outreach and first meeting, so they look stuck or skip stages entirely. A separate opportunity type with three or four stages that fit an existing customer, linked to the parent account, makes expansion pipeline visible and comparable.

                ## Milestones
                1. An expansion opportunity type created with stages that fit buying more from an existing supplier.
                2. Required fields for expansion type, product, readiness result and source.
                3. Existing open expansion deals moved onto the new type.
                4. A pipeline report filtered to expansion opportunities that managers can open in one click.

                ## Notes
                Ask whoever administers the CRM to make the change, so it fits the rest of the setup. Three or four stages is usually enough: identified, validated, proposed, committed.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An expansion opportunity type with its own stages and required fields is live, and all open expansion deals have been moved onto it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the three or four stages an expansion deal really moves through"
                - "Agree the required fields with the sales and customer success leads"
                - "Ask the CRM administrator to build the type and its pipeline report"
                - "Move every open expansion deal onto the new type"
            - name: Net revenue retention and expansion metrics baseline
              description: |-
                ## Purpose
                Net revenue retention, gross expansion and the share of customers who bought more in the last year tell you whether growth from the base is real or masked by price rises. Calculating them once, carefully, from finance data gives a starting figure to improve and a way to see whether the expansion work is paying off.

                ## Milestones
                1. Gross revenue retention, net revenue retention and gross expansion calculated for the last twelve months.
                2. The same figures split by customer size band and by main product.
                3. The share of customers who expanded at least once in the year recorded.
                4. The method written down so the next calculation is done the same way.

                ## Notes
                Start from the **Metrics log** template. Agree the calculation with finance before sharing any figure, because definitions of retention vary widely between companies.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A metrics log holding twelve-month gross and net revenue retention and gross expansion, split by size band, with the method agreed with finance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the retention and expansion formulas with finance"
                - "Pull revenue for the same customer group twelve months apart"
                - "Calculate the figures overall and by size band and product"
                - "Recalculate the retention and expansion figures and log them @recurring(quarterly)"
            - name: Customer value evidence file per account
              description: |-
                ## Purpose
                An expansion conversation goes better when it opens with what the customer has already gained, in their numbers, rather than what you want to sell them next. Keeping a short file per account of outcomes delivered, quotes from users and metrics before and after gives every rep the proof they need without scrambling before a meeting.

                ## Milestones
                1. A standard one-page format for recording outcomes, quotes and before and after figures.
                2. Value files started for the top twenty accounts.
                3. At least one quantified outcome in each file, confirmed by someone at the customer.
                4. The files stored on the account record where every rep can find them.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Value files for the top twenty accounts, each with at least one customer-confirmed quantified outcome, are attached to the account records."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft the one-page value file format with outcome, quote and metric sections"
                - "Fill in files for the five largest accounts from call notes and reports"
                - "Ask each sponsor to confirm the main outcome figure"
                - "Add the newest confirmed outcome to the relevant value file @recurring(monthly:18)"
            - name: Weekly expansion signal sweep
              description: |-
                ## Purpose
                Signals go stale quickly: a customer who hit their user limit last month has either upgraded, found a workaround or started looking at a rival. Spending half an hour each week scanning product usage, support tickets, news and job postings for the triggers on your list turns scattered clues into named next actions.

                ## Milestones
                1. A saved view or report for each signal source on the trigger list.
                2. A weekly half hour in the calendar for the sweep.
                3. Every signal found logged against the account with a next action and an owner.
                4. A count of signals found and acted on kept for the monthly review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Signals are logged against accounts every week for eight weeks running, each with a named next action and owner."
                cadence: rolling
              tasks:
                - "Save a filtered view for each signal source on the trigger list"
                - "Block a recurring half hour in the calendar for the sweep"
                - "Scan usage, tickets, news and job posts and log each signal with an owner @recurring(weekly:tue)"
                - "Turn any signal that passes the readiness test into an expansion opportunity"
            - name: Monthly expansion pipeline review
              description: |-
                ## Purpose
                Expansion deals feel safe because the customer already knows you, so they drift for months without a dated next step. A short monthly review of every open expansion opportunity, looking at stage, next step, readiness and the size of the ask, keeps the pipeline honest and catches deals that need a manager's help.

                ## Milestones
                1. A standing monthly review slot with the people who own expansion deals.
                2. Every open expansion opportunity reviewed with a dated next step.
                3. Deals with no movement for sixty days either reset with a plan or closed out.
                4. A one-line summary of expansion pipeline added to the monthly sales report.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open expansion opportunity has a dated next step after each monthly review, and no deal is older than sixty days without a reset plan."
                cadence: rolling
              tasks:
                - "Set up a monthly review slot with every expansion deal owner"
                - "Prepare the expansion pipeline report filtered by stage and age"
                - "Review every open expansion deal and record a dated next step @recurring(monthly:9)"
                - "Close out or reset any deal with no movement for sixty days"
            - name: Monthly licence and usage utilisation check
              description: |-
                ## Purpose
                Customers using more than about 85 percent of their seats, storage or volume are close to an upgrade, while those using under half are a renewal risk, not an upsell target. Checking utilisation monthly sorts accounts into upgrade, steady and at risk, so reps contact the right customers about the right thing.

                ## Milestones
                1. A utilisation report per account showing purchased against used for each limit.
                2. Thresholds agreed for upgrade candidate and adoption risk.
                3. Upgrade candidates contacted with a usage summary, not a price list.
                4. Adoption risk accounts passed to customer success with the figures.

                ## Notes
                Never let a customer find out about a limit from an overage invoice. A call a month earlier usually turns the same money into a planned upgrade.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly utilisation report sorts every account into upgrade, steady or at risk, and every upgrade candidate is contacted within two weeks."
                cadence: rolling
              tasks:
                - "Ask the product or data team for a purchased against used report per account"
                - "Agree the upgrade and adoption risk thresholds with customer success"
                - "Run the utilisation report and sort accounts into three groups @recurring(monthly:14)"
                - "Send each upgrade candidate a short usage summary and offer a call"
            - name: Quarterly whitespace map refresh
              description: |-
                ## Purpose
                Built once, a whitespace map is out of date within a quarter, as customers buy, products launch and contacts change. Refreshing it every three months keeps the ranked list of open opportunities true, and shows which cells turned into revenue and which have sat open for a year.

                ## Milestones
                1. Every cell updated for purchases, trials and newly launched products.
                2. Cells that converted since the last refresh counted and valued.
                3. Cells open for four quarters reviewed and either reworked or marked not a fit.
                4. A refreshed top ten shared with account owners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The whitespace map is refreshed four times a year, each time with a conversion count and a new ranked top ten."
                cadence: cyclic
              tasks:
                - "Update the grid for purchases, trials and new products @recurring(quarterly)"
                - "Count and value the cells that converted since the last refresh"
                - "Ask the agent to list cells that have been open for four quarters"
                - "Share the refreshed top ten with each account owner"
            - name: Quarterly value recap to each customer sponsor
              description: |-
                ## Purpose
                Sponsors forget what a supplier has done for them within months, and a sponsor who cannot remember the value will not argue for a bigger budget. A short quarterly note of outcomes, usage and what is coming next keeps the case for your product alive in their head and makes the next expansion ask feel like a natural step.

                ## Milestones
                1. A short recap format: three outcomes, one usage figure, one suggestion.
                2. Recaps sent to sponsors at the top twenty accounts each quarter.
                3. Replies and reactions logged against each account.
                4. At least one expansion conversation started from a recap reply.

                ## Notes
                Keep the suggestion modest and relevant. A recap that ends in a sales pitch stops being read by the second quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sponsors at the top twenty accounts receive a value recap every quarter, with replies logged and at least one expansion conversation started per year."
                cadence: cyclic
              tasks:
                - "Write the recap format with outcomes, a usage figure and one suggestion"
                - "Ask the agent to draft each recap from the account's value file"
                - "Send value recaps to the top twenty sponsors @recurring(quarterly)"
                - "Log each reply and turn real interest into a next step"
            - name: Monthly introduction ask to an adjacent team
              description: |-
                ## Purpose
                Some of the largest expansion comes from a new department or business unit, and the cheapest way in is a warm introduction from someone who already uses your product. Making one specific introduction request each month, to a champion who is getting value, builds a steady flow of first meetings in teams that have never heard of you.

                ## Milestones
                1. A list of champions who have confirmed value in the last six months.
                2. For each, the adjacent teams that face the same problem named.
                3. One specific introduction request made each month.
                4. Introductions and resulting meetings logged against the account.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One introduction request is made every month for six months, with requests, introductions and first meetings logged."
                cadence: rolling
              tasks:
                - "List champions who confirmed value in the last six months"
                - "Name the adjacent teams each champion could introduce you to"
                - "Ask one champion for a specific introduction to an adjacent team @recurring(monthly:21)"
                - "Send the champion a short forwardable note to make the introduction easy"
            - name: Expansion win and loss log
              description: |-
                ## Purpose
                Teams study lost new business deals but rarely ask why an existing customer said no to an add-on, even though the answer is usually easy to get. Logging the reason for every closed expansion opportunity, won or lost, shows which products, offers and approaches work with the installed base and which waste goodwill.

                ## Milestones
                1. A short list of win and loss reasons specific to expansion deals.
                2. Every expansion deal closed this quarter tagged with a reason.
                3. A two-line note from the customer on each loss where they agreed to give one.
                4. Patterns reported to the monthly pipeline review.

                ## Notes
                Start from the **Feedback themes** template to group loss reasons. Budget timing is the most common answer and often hides something else, so ask one more question.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every closed expansion opportunity for two quarters carries a reason tag, with themes reported monthly."
                cadence: rolling
              tasks:
                - "Draft eight to ten win and loss reasons that fit expansion deals"
                - "Tag every expansion deal closed this quarter with a reason"
                - "Review the month's closed expansion deals and update the themes @recurring(monthly:27)"
                - "Ask each lost customer one follow-up question about the real reason"
            - name: Protected weekly expansion time block
              description: |-
                ## Purpose
                Account managers who also handle renewals, questions and escalations end up spending the whole week reacting, and proactive expansion work happens only when a customer asks. A fixed two-hour block each week, guarded like a customer meeting, is where signals get worked, business cases get drafted and introduction requests get sent.

                ## Milestones
                1. A two-hour weekly block in the calendar marked as busy.
                2. A short list of what the block is for, kept at the top of the account plan.
                3. The block kept at least three weeks in four over a quarter.
                4. Expansion opportunities created during blocks counted at the quarter end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly expansion block is kept in at least nine of thirteen weeks in a quarter, with opportunities created during it counted."
                cadence: rolling
              tasks:
                - "Block two hours a week in the calendar and mark them busy"
                - "Write a five-item list of what the block is for"
                - "Work the top expansion actions for the week in the block @recurring(weekly:thu)"
                - "Count the opportunities created in blocks at the end of the quarter"
            - name: Contract date calendar for true-ups and co-terming
              description: |-
                ## Purpose
                True-up dates, contract anniversaries, overage reviews and notice periods are the moments when adding to a contract is easiest, and they are often buried in signed documents. A calendar of these dates for every account, checked monthly, means reps raise an expansion three months before a true-up rather than after the invoice lands.

                ## Milestones
                1. True-up, anniversary, notice and co-term dates extracted for every active contract.
                2. The dates loaded into a shared calendar or a CRM field with reminders.
                3. A ninety-day look-ahead reviewed each month.
                4. Each date in the window assigned an owner and a planned conversation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active contract has its true-up, anniversary and notice dates recorded, and a ninety-day look-ahead is reviewed monthly with owners assigned."
                cadence: rolling
              tasks:
                - "Pull true-up, anniversary and notice dates from every active contract"
                - "Load the dates into a shared calendar or CRM date fields"
                - "Review the next ninety days of contract dates and assign owners @recurring(monthly:3)"
                - "Plan an expansion conversation for each true-up in the window"
            - name: Expansion discovery questions for existing customers
              description: |-
                ## Purpose
                Discovery with an existing customer is different from a first call: you already know their setup, so the questions need to be about what has changed, what else hurts and who else faces it. Building and practising a set of expansion discovery questions stops reps from opening with a product and lets the customer tell you where the next need is.

                ## Milestones
                1. Fifteen to twenty questions grouped into change, adjacent pain, other teams and success.
                2. The questions tried in at least five real customer conversations.
                3. The three questions that produced the most useful answers marked as must ask.
                4. A one-page question guide shared with the team.

                ## Notes
                Ask about change before anything else: a new leader, a new target, a new site or a new regulation is where most expansion needs start.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page expansion discovery guide, tested in five real conversations, with the three strongest questions marked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write five questions each on change, adjacent pain, other teams and success"
                - "Use at least four of the questions in your next customer call"
                - "Note which questions produced a new need or a name"
                - "Mark the three strongest questions and share the guide"
            - name: Building an expansion business case from customer data
              description: |-
                ## Purpose
                Your champion usually has to win budget from someone who has never met you, and they need a short business case in their own company's terms. Learning to build one from the customer's usage, outcomes and costs, rather than from your marketing figures, makes the internal approval faster and gives the champion something to be proud of.

                ## Milestones
                1. A one-page business case structure: problem, current cost, proposed change, expected return, risks.
                2. One business case built with a real champion using their numbers.
                3. The champion's feedback on what their approver asked for recorded.
                4. The structure revised and saved as the team's starting point.

                ## Notes
                Use conservative figures the customer has confirmed. An inflated return gets the champion embarrassed in front of their finance team, and they will not sponsor you again.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One expansion business case built jointly with a champion from their own numbers, and a revised team structure saved from what their approver asked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Sketch the one-page business case structure"
                - "Ask the agent to draft a first business case from one account's value file"
                - "Review the draft with the champion and replace any figure they cannot confirm"
                - "Record what the champion's approver asked and revise the structure"
            - name: Asking for a referral to another department
              description: |-
                ## Purpose
                Most reps ask for introductions vaguely, as in who else should I talk to, and get a polite nothing. Practising a specific ask that names the team, the problem they probably share and what the champion would be comfortable saying turns introductions into a repeatable skill rather than luck.

                ## Milestones
                1. A three-part ask written: the team, the shared problem, the easy next step.
                2. The ask role-played with a colleague until it takes under a minute.
                3. The ask used with three real champions.
                4. What worked and what made champions hesitate noted for the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written three-part introduction ask, role-played and used with three real champions, with lessons noted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a three-part introduction ask naming a team and a shared problem"
                - "Role-play the ask with a colleague twice"
                - "Use the ask with three champions over the next month"
                - "Note which phrasing made champions hesitate and rewrite it"
            - name: Upsell conversations that do not feel like a pitch
              description: |-
                ## Purpose
                Within a sentence, customers can tell when a check-in call is really a sales call, and it makes them guarded for the rest of the relationship. Practising a consultative structure, where you recap value, ask about change, then offer an option only if a need surfaced, lets reps raise more spend while keeping the trust they have built.

                ## Milestones
                1. A four-step conversation outline: recap, ask, listen, offer only if earned.
                2. Two recorded practice calls with a manager or peer, with notes on where it tipped into a pitch.
                3. The outline used in five real customer calls.
                4. One phrase for raising price that feels natural to you, written down.

                ## Notes
                Say plainly when you are raising a commercial option. Customers resent a disguised pitch far more than an honest one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two reviewed practice calls and five real calls using the consultative outline, with a personal phrase for raising price recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the four-step outline on a single card"
                - "Record two practice calls with a peer playing the customer"
                - "Use the outline in your next five customer check-ins"
                - "Write down the phrase you will use to raise a commercial option"
            - name: Reading product usage data for expansion
              description: |-
                ## Purpose
                Usage dashboards are full of numbers, and only a few predict that a paying customer will buy more: growth in active users, use of features near a plan boundary, new teams logging in and repeated attempts at locked features. Learning which measures matter for your product, and which mislead, lets reps act on usage rather than guess from it.

                ## Milestones
                1. Five usage measures listed that preceded past upgrades in your own data.
                2. Two measures that look promising but did not predict expansion noted as traps.
                3. A short guide to finding each measure in the dashboard.
                4. Three accounts reviewed using only the five measures, with a recommendation each.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written guide to five predictive usage measures and two traps, applied to three real accounts with a recommendation for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the product or data team which measures moved before past upgrades"
                - "Check those measures for five customers who recently expanded"
                - "Write a short guide to finding each measure in the dashboard"
                - "Review three accounts using the guide and write a recommendation for each"
            - name: Pricing and packaging fluency for upgrades
              description: |-
                ## Purpose
                Reps who cannot explain in a sentence what the next tier adds, what an add-on costs or how a bundle compares end up promising things that are not included or sending the customer to a price page. Knowing the packaging cold, including the limits that trigger an upgrade, makes the expansion conversation quick and credible.

                ## Milestones
                1. A one-page summary of every tier, add-on and bundle with its main limits.
                2. The upgrade path for the three most common customer setups written out.
                3. A quiz of ten questions passed with a manager or peer.
                4. Pricing changes checked monthly and the summary kept current.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A current one-page packaging summary with three upgrade paths, and a ten-question quiz passed with a manager."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the one-page summary of tiers, add-ons, bundles and limits"
                - "Map the upgrade path for the three most common customer setups"
                - "Take a ten-question packaging quiz with a manager or peer"
                - "Read the release notes and price book changes and update the summary @recurring(monthly:6)"
            - name: Mapping customer budget cycles and fiscal years
              description: |-
                ## Purpose
                An expansion proposal that arrives a month after the customer's budget is locked waits a whole year, however good it is. Recording each key customer's fiscal year, budget planning window and approval thresholds lets you time proposals for when money is being allocated, not after it has gone.

                ## Milestones
                1. Fiscal year end and budget planning months recorded for the top thirty accounts.
                2. Approval thresholds noted where known: what a manager, director and executive can sign.
                3. Expansion opportunities aligned so proposals land before each planning window.
                4. Unknowns listed as questions for the next customer call.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fiscal year, planning window and known approval thresholds recorded for the top thirty accounts, with proposals timed to those windows."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Look up the fiscal year end for each of the top thirty accounts"
                - "Ask champions when budgets are planned and who signs at each level"
                - "Record the dates and thresholds on each account record"
                - "Move proposal dates so they land before each planning window"
            - name: Expansion offers for the top three whitespace gaps
              description: |-
                ## Purpose
                When the same open cell appears across dozens of customers, a ready-made offer saves every rep building their own and gives customers a clear, consistent choice. Packaging the three most common gaps as defined offers, with scope, a starting price and the outcome they deliver, makes expansion faster to propose and easier to approve.

                ## Milestones
                1. The three most common open cells chosen from the whitespace map.
                2. An offer sheet for each with scope, starting price, outcome and who it suits.
                3. Each offer approved by product, pricing and finance.
                4. Each offer proposed to at least three customers, with responses logged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three approved expansion offers, each proposed to at least three customers with responses logged."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick the three most frequent open cells from the whitespace map"
                - "Write a one-page offer sheet for each with scope, price and outcome"
                - "Get the offers approved by product, pricing and finance"
                - "Propose each offer to three suitable customers and log responses"
            - name: Paid pilot design for cross-sell products
              description: |-
                ## Purpose
                Even customers who love one product are wary of a second, especially from a different team or a newer part of the range. A short pilot with a defined scope, success measures agreed up front and a pre-agreed price if it succeeds lowers the risk for the buyer without turning into months of free work.

                ## Milestones
                1. A standard pilot outline: length, scope, success measures, cost and conversion terms.
                2. Rules on when a pilot is offered and when a full purchase is proposed instead.
                3. One pilot run with a real customer to the agreed end date.
                4. The pilot result and conversion decision recorded.

                ## Notes
                Agree the success measures and the price on success before the pilot starts. A pilot without them is a free trial that never ends.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standard pilot outline is approved, and one pilot has run to its end date with a recorded conversion decision."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft the pilot outline with length, measures, cost and conversion terms"
                - "Write the rule for when to offer a pilot"
                - "Run one pilot with a suitable customer"
                - "Hold a close-out meeting on the end date and record the decision"
            - name: Co-terming rules for mid-term additions
              description: |-
                ## Purpose
                Adding a product halfway through a contract can leave a customer with three renewal dates, three invoices and a reason to review everything at once. Deciding up front how mid-term additions are priced and aligned to the main contract keeps expansion simple to buy and avoids a messy renewal later.

                ## Milestones
                1. The options compared: pro-rata co-term, separate term, or extending the whole contract.
                2. A default rule chosen with finance, with the exceptions that need approval.
                3. A worked example quote for a mid-term addition in each option.
                4. The rule added to the expansion process notes.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A default co-terming rule for mid-term expansion, agreed with finance, recorded with worked example quotes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List current customers with more than one renewal date"
                - "Compare the three co-terming options with finance"
                - "Write the default rule and the exceptions that need approval"
                - "Build a worked example quote for each option"
            - name: Choosing the expansion target accounts for the year
              description: |-
                ## Purpose
                Trying to expand every customer at once means none of them gets a proper plan. Scoring accounts on whitespace value, readiness, relationship strength and budget timing, then choosing a target list each rep can actually work, focuses effort where expansion is both large and likely.

                ## Milestones
                1. A scoring sheet with four or five weighted factors.
                2. Every account above a size floor scored.
                3. A target list of ten to fifteen accounts per rep agreed with the sales leader.
                4. An expansion goal and first move recorded for every target account.

                ## Notes
                Include a few smaller, fast-growing customers. They often expand more in percentage terms than the largest accounts.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agreed target list of ten to fifteen accounts per rep, each with a score, an expansion goal and a first move."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose four or five scoring factors and their weights"
                - "Score every account above the size floor"
                - "Agree each rep's target list with the sales leader"
                - "Re-score accounts and reset the target list @recurring(yearly)"
            - name: Expansion lead referral route for support and services staff
              description: |-
                ## Purpose
                Support engineers, trainers and implementation consultants hear about new needs every day and rarely know where to send them. A two-minute referral form, with a promise of quick follow-up and a thank you when it becomes revenue, turns the people closest to customers into a reliable source of expansion leads.

                ## Milestones
                1. A short referral form: account, contact, need heard, how urgent.
                2. A follow-up promise agreed, such as contact within two working days.
                3. The form introduced at a support and services team meeting.
                4. Referrals and their outcomes reported back to the people who sent them.

                ## Notes
                Make clear that staff should never pitch, only pass on what they heard. Customers trust support because it is not selling.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A live referral form with an agreed follow-up time, introduced to support and services, with outcomes reported back monthly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Build a four-field referral form linked to the CRM"
                - "Agree a two working day follow-up promise with the account managers"
                - "Introduce the form at a support and services team meeting"
                - "Report referral outcomes and thank the senders by name @recurring(monthly:12)"
            - name: Overage and usage limit conversation guide
              description: |-
                ## Purpose
                Running past a limit can leave a customer feeling either caught out by an unexpected invoice or looked after by a supplier who spotted it first. A short guide for when and how to raise a limit, with an upgrade option and a one-off option side by side, turns a potential complaint into a planned expansion.

                ## Milestones
                1. The usage points at which a rep contacts the customer agreed.
                2. A short message and call outline offering an upgrade and a one-off option.
                3. A rule on goodwill credits for a first overage, approved by finance.
                4. The guide used with the next five customers who approach a limit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written overage guide with contact points, message, options and a credit rule, used with five customers approaching a limit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the usage levels that trigger a contact"
                - "Write the message and call outline with an upgrade and a one-off option"
                - "Agree a goodwill credit rule for a first overage with finance"
                - "Use the guide with the next five customers who near a limit"
            - name: Expansion customer stories for the installed base
              description: |-
                ## Purpose
                Existing customers are most persuaded by peers who took the same step: a customer who added a second product and can say what it changed. Writing three short stories of customers who expanded, with their permission, gives reps proof that fits the expansion conversation better than a new logo case study.

                ## Milestones
                1. Three expanded customers chosen across different sizes or sectors.
                2. A short interview with each about why they bought more and what changed.
                3. A one-page story for each, approved by the customer.
                4. The stories stored where reps find them and used in at least five conversations.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three customer-approved expansion stories are published for reps and have been used in at least five customer conversations."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose three expanded customers who are happy to talk"
                - "Interview each for twenty minutes about why they bought more"
                - "Ask the agent to draft one-page stories from the interview notes"
                - "Send each story to the customer for approval"
            - name: Customer marketing campaign for one cross-sell product
              description: |-
                ## Purpose
                Reps alone cannot reach every customer who might need a second product, especially in a long tail of smaller accounts. A targeted campaign to existing customers for one cross-sell product, built with marketing and timed with rep follow-up, reaches the whole base while reps focus on the replies.

                ## Milestones
                1. One cross-sell product and a target segment of existing customers chosen.
                2. A short sequence of emails or in-product messages written around a customer problem.
                3. A rep follow-up rule for anyone who clicks, replies or books a call.
                4. Results reported: reach, replies, meetings and revenue.

                ## Notes
                Start from the **Marketing campaign** template. Exclude customers with open escalations or a pending renewal negotiation from the send list.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A cross-sell campaign sent to a defined customer segment, with rep follow-up on every response and results reported in revenue."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the product and target customer segment with marketing"
                - "Remove customers with open escalations from the list"
                - "Review the campaign messages for tone with two account managers"
                - "Report reach, replies, meetings and revenue six weeks after the send"
            - name: Expansion pricing guardrails and discount carry-over
              description: |-
                ## Purpose
                Customers often expect any add-on to inherit the discount they negotiated on their first deal, and reps under pressure agree, setting a precedent that compounds at every renewal. Agreeing guardrails for expansion pricing, such as when the original discount carries over and when list or a new tier price applies, protects margin without making each expansion a negotiation.

                ## Milestones
                1. Current expansion deals reviewed for the discount actually given.
                2. A written rule on discount carry-over for upsells, cross-sells and new departments.
                3. The approval route for any exception named.
                4. The rule explained to reps with two worked examples.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written expansion pricing guardrail covering discount carry-over for each expansion type, with an exception route, explained to reps."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Review the discounts given on the last twenty expansion deals"
                - "Draft the carry-over rule for each expansion type"
                - "Name the approver for exceptions"
                - "Brief reps on the rule with two worked examples"
            - name: First expansion deal from the whitespace map
              description: |-
                ## Purpose
                One open cell turned into a signed order is what makes a whitespace map earn its keep, and the first win shows the team the method works. Picking one strong open cell at a ready account and running it from first conversation to signature within a quarter proves the process and exposes what needs fixing.

                ## Milestones
                1. One open cell chosen at an account that passes the readiness test.
                2. An expansion discovery call held and the need confirmed.
                3. A proposal or business case accepted by the customer's approver.
                4. The order signed and the cell marked owned, with lessons noted for the team.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One expansion order signed from a whitespace map cell within ninety days, with a short lessons note shared."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Pick one open cell at an account that passes the readiness test"
                - "Book an expansion discovery call with the champion"
                - "Send a proposal tied to the outcome the customer named"
                - "Write a five-line lessons note once the order is signed"
            - name: Introductory meeting with a new business unit
              description: |-
                ## Purpose
                The first meeting with a department that does not yet buy from you decides whether you are seen as a trusted supplier to the group or another vendor in the queue. Preparing it carefully, with your champion's story, the unit's likely priorities and a modest next step, gives the best chance of a second meeting.

                ## Milestones
                1. The unit's head, priorities and current tools researched.
                2. The champion's results and permission to share them confirmed.
                3. An agenda sent in advance with one clear outcome for the meeting.
                4. Meeting notes, the agreed next step and a thank you to the champion recorded.

                ## Notes
                Start from the **Meeting notes** template. Ask your champion how they want to be credited before you quote them to colleagues.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An introductory meeting held with a new business unit, with notes and an agreed dated next step recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Research the business unit's head, priorities and current tools"
                - "Confirm with the champion which results you may share"
                - "Send an agenda with one clear outcome two days ahead"
                - "Record notes and the agreed next step, then thank the champion"
            - name: Customer roundtable on an adjacent problem
              description: |-
                ## Purpose
                Peer customers carry more weight than any supplier, and a small roundtable on a problem next to the one you already solve lets them hear how others handle it. Run well, with a customer sharing rather than a product demo, it surfaces needs and invites follow-up conversations without anyone being sold to in the room.

                ## Milestones
                1. A topic chosen that is next to your core use case and relevant to your cross-sell product.
                2. Eight to twelve customers invited, with one customer agreeing to speak.
                3. The session run with no more than ten minutes of your own content.
                4. Follow-up conversations booked with interested attendees within two weeks.

                ## Notes
                Group the themes attendees raise using the **Feedback themes** template, and send a short summary to everyone who came.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A roundtable held with at least six customers attending, with a written summary sent and follow-up meetings booked within two weeks."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Choose a topic next to your core use case"
                - "Ask one customer to speak about how they handle it"
                - "Invite eight to twelve customers with a personal note"
                - "Book follow-up calls with interested attendees within two weeks"
            - name: Renewal paired with an upgrade proposal
              description: |-
                ## Purpose
                A renewal is a natural moment to right-size and grow a contract, but raising an upgrade in the last fortnight feels like pressure and risks the renewal itself. Starting the conversation five or six months ahead, with usage data and a choice between renewing as is and an upgraded package, gives the customer time to budget and keeps the renewal safe.

                ## Milestones
                1. Renewals in the next six months listed with usage and readiness results.
                2. A renew as is and an upgraded option prepared for each suitable account.
                3. Both options presented at least four months before renewal.
                4. The customer's choice recorded and the renewal closed on time.

                ## Notes
                Always offer renewing as is as a genuine option. A customer who feels forced into an upgrade at renewal starts looking for alternatives.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every suitable renewal in the next six months has had both options presented at least four months ahead, with the choice recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List renewals due in the next six months with usage and readiness"
                - "Prepare a renew as is and an upgraded option for each suitable account"
                - "Present both options at least four months before renewal"
                - "Record each customer's choice on the renewal opportunity"
            - name: Customer year-end budget window outreach
              description: |-
                ## Purpose
                Many organisations have unspent budget in the final weeks of their fiscal year that must be committed or lost, and a supplier with a ready, sensible proposal is often the easiest place to put it. Planning outreach to the customers whose year ends in the coming quarter, with options that can be approved quickly, captures money that would otherwise go elsewhere.

                ## Milestones
                1. Customers with a fiscal year end in the next quarter listed.
                2. A short menu of quick-to-approve options prepared, such as extra seats, training or prepaid services.
                3. Each champion contacted six to eight weeks before their year end.
                4. Orders placed in the window counted and the approach reviewed.

                ## Notes
                Only offer things the customer will genuinely use. Shelfware bought to spend a budget comes back as a smaller renewal.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every customer with a year end in the coming quarter is contacted six to eight weeks ahead, with orders placed in the window counted."
                cadence: cyclic
              tasks:
                - "List customers whose fiscal year ends next quarter"
                - "Prepare a menu of three quick-to-approve options"
                - "Contact each champion six to eight weeks before their year end"
                - "Plan the year-end window outreach for the coming year @recurring(yearly)"
            - name: New product launch to existing customers
              description: |-
                ## Purpose
                When a new product or module launches, existing customers are the warmest buyers you have, yet launches usually aim at new logos and leave account managers improvising. A plan for the first sixty days that names the target customers, gives reps a short talk track and sets a first-orders goal turns the launch into expansion revenue quickly.

                ## Milestones
                1. Existing customers ranked by fit for the new product.
                2. A one-page talk track and frequently asked questions for account managers.
                3. The top twenty fit customers contacted within thirty days of launch.
                4. First orders counted at sixty days against a goal set before launch.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The top twenty fit customers are contacted within thirty days of launch, and first orders are counted against a goal at day sixty."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Rank existing customers by fit for the new product"
                - "Get a one-page talk track and FAQ for account managers from product marketing"
                - "Contact the top twenty fit customers within thirty days of launch"
                - "Count first orders at day sixty against the goal"
            - name: Selling more to existing clients as a small business owner
              description: |-
                ## Purpose
                Owners of small firms often spend most of their selling time chasing new clients while their best existing clients buy from someone else for the services they never mentioned. A simple routine of reviewing each client once a year, telling them what else you do and asking one good question about what is coming up costs little and is often the easiest growth available.

                ## Milestones
                1. A list of current clients with what each buys and what else you could reasonably offer.
                2. A one-paragraph note of your full range written in plain language for clients.
                3. A short conversation held with each of the top ten clients about their plans for the year.
                4. Any new work agreed recorded, with the client's reason for buying.

                ## Notes
                Clients often do not know what else you offer. Telling them clearly is a service, not a hard sell.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The top ten clients have each had a plans conversation and seen your full range in writing, with any new work recorded."
                cadence: rolling
              tasks:
                - "List each client with what they buy and what else would fit"
                - "Write one plain paragraph describing everything you offer"
                - "Call one existing client to ask about their plans for the coming months @recurring(monthly:24)"
                - "Record any new work agreed and why the client bought it"
            - name: Expansion when the same rep sells and services
              description: |-
                ## Purpose
                In small teams without customer success, the person who closed the deal also answers questions, handles problems and renews, so expansion competes with every urgent request. A lighter version of the expansion system, with a short account list, a simple signal check and clear rules on when to ask, fits the time a combined role really has.

                ## Milestones
                1. Each rep's accounts split into grow, keep and watch.
                2. Three signals chosen that a busy rep can check in fifteen minutes.
                3. A rule that grow accounts get one expansion touch a month.
                4. Expansion revenue per rep tracked for two quarters.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every rep has a grow, keep and watch split and three quick signals, with expansion revenue per rep tracked for two quarters."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Split each rep's accounts into grow, keep and watch"
                - "Choose three signals that take fifteen minutes to check"
                - "Set the rule of one expansion touch a month for grow accounts"
                - "Track expansion revenue per rep at the end of each month"
            - name: Enterprise land and expand across business units
              description: |-
                ## Purpose
                Large organisations are often a collection of divisions, regions and subsidiaries that buy separately, and a single successful unit is the best reference for the rest. Mapping the units, their leaders and their buying routes, and planning the order to approach them, turns one contract into a programme of expansion across the group.

                ## Milestones
                1. A map of the customer's business units, regions and subsidiaries with leaders named.
                2. Each unit marked as customer, in conversation or untouched, with an estimated value.
                3. A sequenced plan naming the next two units and the champion who will help.
                4. One new unit in active conversation within the quarter.

                ## Notes
                Check early whether a group procurement agreement already exists. It may speed up a new unit's purchase or require a different route.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A business unit map with values and a sequenced plan, and at least one new unit in active conversation within ninety days."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Map the customer's divisions, regions and subsidiaries from annual reports"
                - "Mark each unit as customer, in conversation or untouched"
                - "Choose the next two units and the champion who will introduce you"
                - "Review the business unit map with the champion @recurring(quarterly)"
            - name: Inherited book of accounts with no expansion history
              description: |-
                ## Purpose
                Taking over accounts from a departed rep often means patchy notes, unknown contacts and customers who have never been asked about anything beyond renewal. Spending the first month learning each account's history and current value before raising expansion avoids the classic mistake of pitching to a customer still annoyed about something the previous rep promised.

                ## Milestones
                1. A one-paragraph history for each inherited account from CRM notes, tickets and invoices.
                2. An introduction call held with each main contact, focused on listening.
                3. Open promises and unresolved issues from the previous owner listed and addressed.
                4. Expansion candidates identified only after the readiness test is run.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every inherited account has a written history, an introduction call held and a list of open promises closed or scheduled."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the agent to summarise each account's CRM notes and recent tickets"
                - "Book a listening call with the main contact at each account"
                - "List every open promise or issue left by the previous owner"
                - "Run the readiness test on each account once issues are addressed"
            - name: Customer after a merger or acquisition
              description: |-
                ## Purpose
                If a customer buys another company, or is bought, budgets, suppliers and decision makers all move, and it can go either way for you. Getting ahead of the integration, learning who now decides and showing how you could serve the combined organisation, can double an account or save it from being consolidated away.

                ## Milestones
                1. The deal, timeline and the new decision makers identified from public news and your contacts.
                2. The acquired or acquiring company's current supplier for your category found.
                3. A meeting held with the integration lead or new sponsor.
                4. A plan recorded: expand into the new entity, defend, or both.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Within a month of the announcement, the new decision makers are known, a meeting is held and an expand or defend plan is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the merger announcement and note the integration timeline"
                - "Ask your champion who now decides on suppliers in your category"
                - "Find out which supplier the other company uses today"
                - "Request a meeting with the integration lead"
            - name: Rebuilding trust after a service failure before any expansion
              description: |-
                ## Purpose
                An outage, a failed implementation or a billing mistake can turn a growing account into a renewal risk overnight, and raising an expansion during recovery confirms the customer's worst view of you. Running a clear recovery plan first, and agreeing with the sponsor when it is complete, protects the account and earns the right to talk about growth again later.

                ## Milestones
                1. Every open expansion opportunity at the account paused and the reason noted.
                2. A recovery plan agreed with the sponsor, with actions, owners and dates.
                3. Each recovery action completed and confirmed by the customer.
                4. A recovery review held where the sponsor agrees the issue is closed.

                ## Notes
                Start from the **Remediation plan** template. Wait for the customer to say the problem is resolved, not your own team.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A recovery plan agreed with the sponsor is completed, a review confirms the issue is closed, and expansion is resumed only after that review."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pause every open expansion opportunity at the account and note why"
                - "Draft a recovery plan with actions, owners and dates"
                - "Agree the recovery plan with the customer sponsor"
                - "Hold a recovery review once every action is done"
            - name: Handling a downgrade request without losing the account
              description: |-
                ## Purpose
                A customer asking to cut seats or drop a module is often under budget pressure rather than unhappy, and how you respond decides whether they grow again next year. Treating the request seriously, understanding the cause and offering a right-sized option keeps the relationship and the path back to expansion open.

                ## Milestones
                1. The reason for the downgrade understood from a call, not just an email.
                2. Usage checked to see what the customer actually needs.
                3. A right-sized option offered, with a note of what would bring them back up.
                4. A date agreed to revisit the account once the pressure eases.

                ## Notes
                Fighting a reasonable downgrade usually loses the whole account. A fair right-size is often what keeps you on the shortlist for the next upgrade.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Each downgrade request gets a call, a usage check and a right-sized offer, with a revisit date recorded on the account."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Call the customer to understand why they want to downgrade"
                - "Check usage to see what the customer really uses"
                - "Offer a right-sized option and note what would reverse it"
                - "Agree a date to revisit the account"
            - name: Expansion propensity scoring model
              description: |-
                ## Purpose
                With hundreds of customers, even a good signal sweep cannot rank them all by who is most likely to buy more next quarter. A simple propensity score, built from the usage, firmographic and relationship factors that preceded past expansion, points reps and campaigns at the accounts most worth a conversation and can be checked against what actually happens.

                ## Milestones
                1. Two years of expansion deals and account data assembled in one table.
                2. Five to eight factors tested for how well they separated expanders from the rest.
                3. A scoring formula agreed and applied to every account.
                4. Scores compared with actual expansion after one quarter and the weights adjusted.

                ## Notes
                A weighted points score in a spreadsheet is enough to start. Move to a statistical model only when the simple version has been checked against outcomes.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A propensity score applied to every account and checked against one quarter of actual expansion, with weights adjusted."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Assemble two years of expansion deals with account and usage data"
                - "Test which factors separated customers who expanded from those who did not"
                - "Build a weighted score and apply it to every account"
                - "Compare the scores with actual expansion and adjust the weights @recurring(quarterly)"
            - name: Annual net revenue retention target and expansion plan
              description: |-
                ## Purpose
                Leadership often sets a new business target in detail and treats growth from existing customers as whatever happens. Setting a net revenue retention target by segment, and the expansion revenue needed to reach it after expected churn and downgrades, gives the installed base a plan as serious as the new logo one.

                ## Milestones
                1. Last year's retention and expansion results reviewed by segment.
                2. Expected churn and downgrades estimated with customer success.
                3. A net revenue retention target and expansion revenue goal set for each segment.
                4. The plan broken into quarterly goals and agreed with the sales leader and finance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An approved annual plan with net revenue retention targets and expansion goals by segment, split into quarterly goals."
                cadence: cyclic
              tasks:
                - "Review last year's retention and expansion figures by segment"
                - "Estimate expected churn and downgrades with customer success"
                - "Set the retention target and expansion goal for each segment"
                - "Draft next year's retention target and expansion plan @recurring(yearly)"
            - name: Enterprise agreement for a multi-unit customer
              description: |-
                ## Purpose
                Five separate contracts, renewal dates and price points across a large customer's divisions cost more in admin than they need to and leave the account exposed to a rival offering to tidy it up. Proposing a single enterprise agreement with group pricing, a growth allowance and one renewal date can secure the whole relationship and lift its value, but only with careful preparation.

                ## Milestones
                1. Every contract across the customer's units listed with value, terms and dates.
                2. A group sponsor identified who can sign for the combined agreement.
                3. An enterprise agreement proposal drafted with pricing, growth terms and one renewal date.
                4. The proposal reviewed with legal and finance on both sides and a decision recorded.

                ## Notes
                Model the revenue carefully before proposing. Consolidating contracts can lower total revenue if the group discount outweighs the growth allowance.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A consolidated enterprise agreement proposal, modelled for revenue impact and reviewed by legal and finance, with the customer's decision recorded."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List every contract across the customer's units with value and dates"
                - "Model total revenue under the enterprise agreement against current contracts"
                - "Identify the group sponsor who can sign the combined agreement"
                - "Draft the proposal and review it with legal and finance"
---

# Account Expansion & Upsell Selling

This area is for account managers, customer success teams, small business owners and enterprise sellers who want more of their revenue to come from customers who already trust them. It starts with the foundations (a revenue baseline, a whitespace map, shared definitions, ownership rules, a readiness test and the signals worth watching), then the routines that turn those signals into pipeline, the skills of expansion discovery, business cases and introductions, the improvements and decisions about offers, pilots and pricing guardrails, the launches and meetings that open new budget, the situations that change the approach, and finally propensity scoring, annual retention planning and enterprise agreements.

What repeats is a weekly signal sweep and a protected expansion block, monthly pipeline, utilisation, contract date and win and loss reviews, a monthly introduction ask, quarterly whitespace refreshes, value recaps and retention numbers, and a yearly round of account targeting, ownership rules and retention planning. The Metrics log, Feedback themes, Marketing campaign, Meeting notes and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
