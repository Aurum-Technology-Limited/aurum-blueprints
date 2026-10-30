---
id: product-management.pricing-packaging-design
name: Pricing & Packaging Design
description: "A full map of what you charge today, packaging principles and tiers built on value, disciplined discounting, and price changes for existing customers planned with enough notice and care to keep their trust."
category: business
version: 1.0.0
tags: [product-management, pricing-packaging-design, founder, team, manager, pricing-strategy, packaging, price-increase]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - reading-queue
    - operational-checklist
    - board-meeting
    - risk-register
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Pricing & Packaging Design
          description: "Deciding what to charge, which features sit in which plan and how to change prices for existing customers without breaking trust."
          projects:
            - name: Inventory of every live price and plan
              description: |-
                ## Purpose
                Most products that have been selling for a few years carry more prices than anyone can name: the public plans, two retired plans still billing, a legacy annual rate, partner discounts and a handful of hand-negotiated contracts. Listing every price actually being charged, and how many customers sit on each, is the starting point for every later pricing decision, because you cannot change what you cannot see.

                ## Milestones
                1. Every plan, add-on and price point currently billing listed from the billing system, not the pricing page.
                2. Customer count and monthly recurring revenue recorded against each price point.
                3. Retired and grandfathered plans still billing flagged, with the date each was closed to new sign-ups.
                4. Non-standard contract prices from sales gathered into the same table.

                ## Notes
                Pull the list from the billing system export first and the pricing page second. The gap between the two is usually the most useful finding.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One table lists every price point currently billing, with customer count and recurring revenue for each, including retired plans and custom contracts."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export every active subscription with its plan and price from the billing system"
                - "Group the export by price point and count customers on each"
                - "Ask sales and finance for every contract priced outside the public list"
                - "Flag plans closed to new customers that are still billing"
            - name: Pricing decision rights and owner
              description: |-
                ## Purpose
                Pricing often belongs to everyone and no one: sales discounts, finance sets increases, product decides packaging and marketing edits the pricing page. Writing down who proposes, who decides and who must be consulted for each kind of pricing change stops quiet drift and the late-night discount that becomes the new list price.

                ## Milestones
                1. A list of the pricing decisions the business makes, from list price to one-off discounts.
                2. One named decider for each, with who proposes and who is consulted.
                3. The decision rights agreed by the leadership team and written on one shared page.
                4. An escalation route for disagreements between sales and product.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published page names the proposer, decider and consulted people for every type of pricing decision, agreed by leadership."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every type of pricing decision made in the last twelve months"
                - "Draft a proposer, decider and consulted column for each decision type"
                - "Review the draft with the heads of sales, finance and product"
                - "Publish the agreed decision rights where sales and product can find them"
            - name: Pricing objectives for the next twelve months
              description: |-
                ## Purpose
                The right price depends on what the business needs pricing to do: win share fast, lift margin before a fundraise, move customers to annual contracts or protect a new segment. Agreeing two or three ranked objectives before touching any number means later debates about tiers and discounts can be settled by pointing at the list.

                ## Milestones
                1. Two or three pricing objectives written, ranked and tied to company goals.
                2. A measure and current baseline for each objective.
                3. The trade-offs between objectives stated plainly, such as accepting slower growth for higher margin.
                4. Leadership sign-off recorded with the date.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two or three ranked pricing objectives, each with a measure and baseline, are signed off by leadership and dated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the company plan and note every target that pricing affects"
                - "Draft three candidate pricing objectives with a measure for each"
                - "Rank the objectives with the founder or leadership team"
                - "Revisit the ranked pricing objectives at annual planning @recurring(yearly)"
            - name: Cost to serve and gross margin by plan
              description: |-
                ## Purpose
                A cheap plan can lose money once hosting, support time, payment fees and onboarding effort are counted, and a premium plan can look generous while carrying most of the margin. Working out roughly what each plan costs to serve gives pricing a floor and shows which plans subsidise which.

                ## Milestones
                1. The main cost lines per customer identified with finance: infrastructure, third-party fees, support and onboarding.
                2. An estimated monthly cost to serve for each plan.
                3. Gross margin per plan calculated from realised prices, not list prices.
                4. Any plan below the agreed margin floor flagged with its customer count.

                ## Notes
                Precision is not the point. A range agreed with finance is better than a perfect number six months late.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A margin table shows estimated cost to serve and gross margin for every plan, with the margin floor agreed with finance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask finance for last quarter's hosting, payment and support costs"
                - "Allocate each cost line across plans using a simple driver such as seats or tickets"
                - "Calculate gross margin for each plan from realised revenue"
                - "Share the margin table with finance and agree the floor"
            - name: Willingness-to-pay evidence already on file
              description: |-
                ## Purpose
                Before commissioning a survey, most teams already hold months of price signals: lost deals that cited cost, discount requests, churn reasons, support tickets about the bill and sales call notes. Gathering that evidence in one place shows where price is a real objection and where it is standing in for weak value.

                ## Milestones
                1. Lost-deal notes, churn reasons and discount requests from the last twelve months collected.
                2. Each mention of price tagged by segment, plan and deal size.
                3. A one-page summary of where price resistance clusters.
                4. Three open questions written for later willingness-to-pay research.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of a year's price-related evidence, tagged by segment and plan, with three open research questions."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export closed-lost reasons and churn survey answers for the last year"
                - "Search sales call notes for mentions of price, budget and cost"
                - "Ask the agent to tag each price mention by segment and plan"
                - "Write a one-page summary of where price resistance clusters"
            - name: Pricing segments by value and budget
              description: |-
                ## Purpose
                Customers who use the same product can value it very differently: a two-person agency and a 300-person firm save different amounts and buy through different budgets. Defining three or four pricing segments by the value they get and how they buy gives each plan a clear customer, which is what packaging is built on.

                ## Milestones
                1. Three or four pricing segments described by size, buying process and value received.
                2. An estimate of the annual value or saving each segment gets from the product.
                3. Current customers mapped to segments, with revenue per segment.
                4. The segment each existing plan is meant for written beside it.

                ## Notes
                These are pricing segments, defined by value and budget. Keep them consistent with any user segments the product team already uses rather than inventing a parallel set.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three or four written pricing segments, each with a value estimate and revenue share, and every current plan mapped to one."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sort the top fifty customers by size, use case and buying process"
                - "Draft three or four pricing segments from the patterns"
                - "Estimate the value each segment gets in money or hours saved"
                - "Check the segment mapping still holds against the customer base @recurring(yearly)"
            - name: Competitor price point map
              description: |-
                ## Purpose
                Buyers compare your price with whatever they can find in two browser tabs, so knowing the published price points, plan counts and entry prices of five close alternatives frames every sales conversation. The aim is to know where you sit and to spot changes early, not to copy anyone's prices.

                ## Milestones
                1. Five direct and indirect alternatives chosen, including doing nothing or a spreadsheet.
                2. Each one's entry price, main plan price and enterprise approach recorded with the date checked.
                3. A simple chart showing where your plans sit against theirs.
                4. A monthly check of the five pricing pages, with changes passed to sales.

                ## Notes
                Compare price points and plan structure here. Feature-by-feature comparison belongs in competitor analysis work.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated chart places your plans against five alternatives' published prices, and six monthly checks for changes are logged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose five alternatives buyers mention, including the do-it-yourself option"
                - "Record each one's published plans and prices with today's date"
                - "Plot your plans against theirs on a single chart"
                - "Check the five competitor pricing pages and log any change @recurring(monthly:8)"
            - name: Pricing page, quote and invoice consistency check
              description: |-
                ## Purpose
                Customers lose trust fastest when the pricing page, the sales quote and the invoice disagree about what a plan includes or costs. Checking all three side by side, including tax wording and currency, catches the mismatches before a customer does.

                ## Milestones
                1. The pricing page, a standard quote and a sample invoice compared plan by plan.
                2. Every mismatch in price, inclusion, currency or tax wording listed.
                3. Each mismatch assigned to an owner with a fix date.
                4. A second check after the fixes showing all three agree.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A comparison sheet shows the pricing page, a standard quote and an invoice agreeing on price, inclusions and tax wording for every plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Screenshot the current pricing page for every plan"
                - "Generate a standard quote and a sample invoice for the same plan"
                - "List every difference in price, inclusions and tax wording"
                - "Repeat the page, quote and invoice comparison @recurring(quarterly)"
            - name: Packaging principles for what goes in which plan
              description: |-
                ## Purpose
                Without written rules, every new feature lands in whichever plan its champion argues for, and within two years the tiers stop making sense to anyone. A short set of packaging principles, such as core workflow in every plan, collaboration in the middle and control and compliance at the top, lets the team place features consistently and explain the logic to customers.

                ## Milestones
                1. Five to eight packaging principles written in plain language.
                2. Each current plan described in one line against the principles.
                3. Every existing feature checked against the principles, with exceptions listed.
                4. The principles agreed by product, sales and the founder or head of product.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page set of five to eight packaging principles, tested against existing features and agreed by product and sales leadership."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft five packaging principles from how the best current plan was built"
                - "Test the principles against twenty existing features"
                - "List the features that break the principles and why"
                - "Agree the final principles with sales and product leadership"
            - name: Pricing decision log
              description: |-
                ## Purpose
                Two years after a pricing change, nobody remembers why the middle plan lost its export feature or why partners get a fifth off, and old arguments get rerun from scratch. A dated log of every pricing decision, its reasons and the evidence used keeps the history in one place and makes reversals deliberate.

                ## Milestones
                1. A log with date, decision, owner, reason, evidence and expected effect.
                2. The last five significant pricing changes back-filled from memory and email.
                3. Every new pricing decision added within a week of being made.
                4. A review column showing whether each change had the expected effect.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A decision log holds the last five pricing changes and every decision since, each with owner, reason, evidence and a later review of effect."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the decision log with date, decision, owner, reason and evidence columns"
                - "Back-fill the five most recent pricing changes"
                - "Add a column for the actual effect six months after each change"
                - "Check the log holds every pricing decision from the past month @recurring(monthly:28)"
            - name: Monthly pricing metrics review
              description: |-
                ## Purpose
                Average revenue per account, plan mix, discount rate and upgrade and downgrade flows move slowly enough that nobody notices until a quarter is gone. Fifteen minutes each month with the same five numbers shows whether pricing is doing what the objectives asked of it.

                ## Milestones
                1. Five pricing metrics chosen, with definitions finance agrees with.
                2. A monthly sheet that fills from the billing export with little hand work.
                3. Each month's review recording one observation and one action.
                4. Six consecutive monthly reviews completed.

                ## Notes
                Start from the **Metrics log** template. Track realised price, after discounts, alongside list price, or the review will flatter you.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews of the same five pricing metrics are logged, each with one observation and one action."
                cadence: rolling
              tasks:
                - "Choose five pricing metrics and write their definitions"
                - "Build a metrics log that pulls from the billing export"
                - "Review the five pricing metrics and log one action @recurring(monthly:12)"
                - "Share the month's pricing summary with sales and finance"
            - name: Discount approval desk
              description: |-
                ## Purpose
                Discounts given deal by deal, with no bands or approval, quietly become the real price list. A simple desk with standard discount bands, a named approver above each band and a weekly look at exceptions keeps sales flexible while protecting the price customers compare notes on.

                ## Milestones
                1. Standard discount bands written, such as up to 10% at the rep's discretion and anything above with an approver.
                2. A named approver and turnaround time for each band.
                3. Every non-standard discount recorded with its reason and what was traded for it.
                4. A weekly exceptions review running for two months.

                ## Notes
                Ask for something in return for every discount above the first band: a longer term, annual payment, a case study or a faster signature.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written discount bands with named approvers are in use, and eight consecutive weekly exception reviews are recorded."
                cadence: rolling
              tasks:
                - "Write discount bands and the approver for each"
                - "Add a required reason field to the discount request form"
                - "Review the week's discount exceptions with the sales lead @recurring(weekly:tue)"
                - "Compare average discount by rep against the bands @recurring(monthly:26)"
            - name: Monthly pricing council
              description: |-
                ## Purpose
                Pricing questions arrive from all directions: a big deal wants a custom plan, support asks about a confusing limit, finance worries about margin. A standing monthly meeting of the pricing owner, sales, finance and product turns those into decisions with owners, instead of side conversations that nobody records.

                ## Milestones
                1. Members, a 45-minute slot and a standing agenda agreed.
                2. A shared intake list for pricing questions raised between meetings.
                3. Notes and decisions recorded after every session.
                4. Decisions copied into the pricing decision log.

                ## Notes
                Start from the **Meeting notes** template. Cancel the meeting if the intake list is empty; a council with nothing to decide turns into a status update.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly pricing councils held with notes, each decision carrying an owner and appearing in the pricing decision log."
                cadence: rolling
              tasks:
                - "Invite sales, finance and product leads to a monthly 45-minute slot"
                - "Create an intake list for pricing questions"
                - "Run the pricing council and record decisions and owners @recurring(monthly:22)"
                - "Copy each council decision into the pricing decision log"
            - name: Quarterly packaging review
              description: |-
                ## Purpose
                Plans drift out of date as features ship, usage changes and competitors move, but rebuilding the tiers every quarter would exhaust customers. A quarterly review of feature usage by plan, upgrade triggers and win and loss notes catches the two or three packaging fixes worth making without constant churn.

                ## Milestones
                1. Feature usage by plan pulled for the quarter.
                2. The features that most often come before an upgrade identified.
                3. Two or three proposed packaging changes, each with evidence.
                4. A recorded decision on each proposal, including no change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly packaging reviews held in a year, each ending with a recorded decision on every proposed change."
                cadence: cyclic
              tasks:
                - "Pull feature usage broken down by plan for the last quarter"
                - "Find the features that most often come before an upgrade"
                - "Run the packaging review with product, sales and success @recurring(quarterly)"
                - "Record the outcome of each proposed packaging change"
            - name: Price-related churn and downgrade watch
              description: |-
                ## Purpose
                People who cancel or downgrade because of price usually say so in cancellation forms, support tickets or the last call with their account manager, and then the signal is lost. Reviewing those reasons monthly separates genuine price pain from poor fit or low use, which need different fixes.

                ## Milestones
                1. Cancellation and downgrade reasons captured in one consistent list.
                2. Price-related reasons separated from fit, usage and competitor reasons.
                3. A monthly count of price-related churn by plan and segment.
                4. One follow-up action taken from each quarter's pattern.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of price-related cancellations and downgrades counted by plan and segment, with at least two follow-up actions taken."
                cadence: rolling
              tasks:
                - "Add a price option and free-text box to the cancellation form"
                - "Count price-related cancellations and downgrades by plan @recurring(monthly:19)"
                - "Read five price-related exit comments in full each month"
                - "Raise the strongest pattern at the quarterly packaging review"
            - name: Sales price objection log
              description: |-
                ## Purpose
                Sales hears price objections daily, but they reach product as a vague sense that the product is too expensive. A short log of each objection, the deal size, the segment and what the buyer compared you with turns hallway complaints into evidence that can change a plan or a pitch.

                ## Milestones
                1. A shared log with deal, segment, objection, comparison and outcome columns.
                2. Sales reps adding objections within a day of hearing them.
                3. A monthly summary of the top three objections by segment.
                4. At least one pricing or messaging change traced back to the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of logged price objections summarised monthly, with at least one pricing or messaging change traced to the log."
                cadence: rolling
              tasks:
                - "Set up an objection log the sales team can fill in under a minute"
                - "Walk the sales team through the log at their next meeting"
                - "Summarise the month's top three price objections @recurring(monthly:5)"
                - "Pass the summary to product marketing and the pricing owner"
            - name: Plan placement for every new feature
              description: |-
                ## Purpose
                The moment a feature ships is the cheapest time to decide which plan it belongs in; moving it later means taking something away from customers who already have it. Adding a placement decision to every launch checklist, judged against the packaging principles, prevents the slow mess of tiers decided by accident.

                ## Milestones
                1. A plan placement question added to the launch checklist.
                2. Each new feature placed against the packaging principles before release.
                3. Placements recorded in the pricing decision log.
                4. A quarterly check that shipped features match their recorded placement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every feature released in two consecutive quarters has a recorded plan placement made before launch."
                cadence: rolling
              tasks:
                - "Add a plan placement step to the feature launch checklist"
                - "Brief product managers on applying the packaging principles"
                - "Place the next three features to ship and record the reasoning"
                - "Check shipped features sit in the plans recorded for them @recurring(quarterly)"
            - name: Grandfathered plan register
              description: |-
                ## Purpose
                Every price change leaves a layer of customers on older terms, and after a few rounds nobody knows who pays what, which promises were made or when they expire. A register of grandfathered cohorts, their terms and any end dates protects the trust those promises bought and stops billing surprises.

                ## Milestones
                1. Each grandfathered cohort listed with its plan, price, customer count and start date.
                2. The promise made to each cohort copied from the original notice.
                3. End dates or review dates set where the promise allows.
                4. The register reviewed with finance every quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register lists every grandfathered cohort with its terms and the original promise, reviewed in each of the last four quarters."
                cadence: rolling
              tasks:
                - "List every cohort still on a retired plan or an old price"
                - "Find the original notice sent to each cohort and record the promise"
                - "Review the grandfathered register with finance @recurring(quarterly)"
                - "Note which cohorts could move to current plans and on what terms"
            - name: Annual price review cycle
              description: |-
                ## Purpose
                Prices left untouched for three years fall behind costs and behind the value the product now delivers, and then need a painful jump. A yearly review of costs, value added, competitor moves and customer health lets you make small, explained changes on a predictable schedule, which customers accept far more readily than surprises.

                ## Milestones
                1. A fixed month each year for the price review agreed with finance.
                2. A pack covering costs, features added, market prices and churn prepared.
                3. A recorded decision for each plan: hold, raise or restructure.
                4. Any change scheduled with its notice period worked out.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual price review held in the agreed month, with a hold, raise or restructure decision recorded for every plan."
                cadence: cyclic
              tasks:
                - "Pick the month for the annual price review and tell finance and sales"
                - "Prepare the cost, value and market pack for the price review @recurring(yearly)"
                - "Record a hold, raise or restructure decision for each plan"
                - "Work back from the effective date to set the notice timetable"
            - name: Pricing fundamentals reading list
              description: |-
                ## Purpose
                Most product managers inherit pricing without ever having studied it, and fall back on cost-plus or copying a competitor. Working through a short list of standard texts on value-based pricing, packaging and communicating price changes gives a shared vocabulary for the decisions that follow.

                ## Milestones
                1. Four or five pricing books, articles or courses chosen.
                2. Notes kept on each, with two ideas that apply to your product.
                3. One idea tried or proposed at the pricing council.
                4. The list shared with the people who make pricing decisions with you.

                ## Notes
                Start from the **Reading queue** template. Pick at least one source on packaging and one on communicating price changes, not only on setting the number.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five pricing sources read with two applicable ideas noted from each, and one idea proposed at a pricing council."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose five pricing sources covering value, packaging and communication"
                - "Read the first source and write two ideas that apply to your product"
                - "Propose one idea at the next pricing council"
                - "Share the reading list with sales and finance colleagues"
            - name: Willingness-to-pay interview practice
              description: |-
                ## Purpose
                Direct price questions in interviews get guarded answers, while questions about budgets, current spend, who signs off and what the product replaces reveal how buyers really value it. Practising this style of interview on eight customers builds a skill that makes every later pricing study sharper.

                ## Milestones
                1. An interview guide covering current spend, budget owner, alternatives and the cost of the problem.
                2. Eight interviews completed across at least two segments.
                3. Notes from each interview with the value and budget signals highlighted.
                4. A short summary of what each segment's budget looks like.

                ## Notes
                Never ask what someone would pay as your opening question. Ask what they spend on the problem today and who approves it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight willingness-to-pay interviews completed across two segments, with a one-page budget summary per segment."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write an interview guide on spend, budget owners and alternatives"
                - "Book eight customer interviews across two segments"
                - "Run the interviews and note every budget and value signal"
                - "Summarise each segment's budget picture on one page"
            - name: Van Westendorp price sensitivity survey
              description: |-
                ## Purpose
                Asking customers what they would pay produces polite, low answers, but asking at what price the product would feel too cheap, a bargain, getting expensive and too expensive gives a usable acceptable range. Running the four-question survey with one segment teaches the method and gives a first evidence-based price range.

                ## Milestones
                1. One segment and one clearly described offer chosen for the survey.
                2. The four standard questions written with a plain description of what is being priced.
                3. At least 150 responses collected from that segment.
                4. The acceptable price range plotted and summarised.

                ## Notes
                The method shows an acceptable range, not demand at each price. Treat the result as a range to test, not an answer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A price sensitivity survey with at least 150 responses from one segment, with the acceptable range charted and written up."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose the segment and the exact offer the survey will price"
                - "Write the four price sensitivity questions and a short offer description"
                - "Send the survey to the segment and chase until 150 responses arrive"
                - "Plot the four curves and write up the acceptable range"
            - name: Reading a price waterfall
              description: |-
                ## Purpose
                List price is rarely what lands in the bank: discounts, free months, partner margins, payment fees and refunds all take a slice. Building one price waterfall for a typical deal shows where revenue leaks between list price and pocket price, and which leak is worth fixing first.

                ## Milestones
                1. One typical deal chosen for each main plan.
                2. Each step from list price to pocket price quantified.
                3. A waterfall chart for each plan.
                4. The largest leak named with a proposed fix.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A price waterfall chart for each main plan, from list to pocket price, with the largest leak and a proposed fix written beside it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick one typical recent deal for each main plan"
                - "List every deduction between list price and cash received"
                - "Draw a price waterfall chart for each plan"
                - "Name the largest leak and propose one fix"
            - name: Price presentation and anchoring on the pricing page
              description: |-
                ## Purpose
                How prices are shown changes what people choose: the order of plans, which one is highlighted, monthly versus annual display and the presence of a high anchor plan. Learning these effects, and where they tip into misleading customers, lets you design a pricing page that helps buyers choose well rather than tricking them.

                ## Milestones
                1. Notes on anchoring, the decoy effect, defaults and annual framing from a reputable source.
                2. Your current pricing page reviewed against each effect.
                3. A written list of practices you will not use, such as hidden fees or fake countdowns.
                4. Two honest presentation changes proposed.

                ## Notes
                Many consumer protection authorities publish guidance on misleading and drip pricing. Check what applies in your markets before changing how prices are displayed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The pricing page is reviewed against four presentation effects, a list of banned practices is written and two honest changes are proposed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a reputable summary of anchoring, decoys and default effects"
                - "Review the pricing page against each effect and note what you find"
                - "Write the list of pricing page practices the team will not use"
                - "Propose two honest presentation changes to the pricing owner"
            - name: Feature value ranking with MaxDiff
              description: |-
                ## Purpose
                Packaging works when the features customers value most are spread sensibly across plans, but asking people to rate features on a 1 to 5 scale makes everything look important. A MaxDiff exercise, where respondents pick the most and least valuable from small sets, forces trade-offs and gives a clear ranking to build tiers from.

                ## Milestones
                1. Fifteen to twenty features or benefits written in customer language.
                2. A MaxDiff survey built in a research tool that supports the method.
                3. At least 200 responses from the target segments.
                4. A ranked list by segment, marked with each feature's current plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A MaxDiff ranking from at least 200 respondents, split by segment, with each feature marked against its current plan."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List fifteen to twenty features in plain customer language"
                - "Build the MaxDiff survey in a tool that supports it"
                - "Recruit 200 respondents from the target segments"
                - "Mark each ranked feature with the plan it sits in today"
            - name: Good-better-best tier redesign
              description: |-
                ## Purpose
                Three clearly differentiated plans, each built for a named segment, are easier to buy from than five overlapping ones or a single take-it-or-leave-it price. Redesigning the tiers around segments and packaging principles, then testing the draft with customers and sales, gives buyers an obvious choice and gives growing accounts somewhere to go.

                ## Milestones
                1. Each tier assigned to one pricing segment with a one-line purpose.
                2. A feature and limit table for the draft tiers, checked against the packaging principles.
                3. The draft tested with six customers and the sales team.
                4. A final tier design approved by the pricing decider.

                ## Notes
                Design the tiers before setting any prices. Price points argued over before the packaging is settled end up shaping the packaging.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved three-tier design, each tier tied to a segment with a feature and limit table, tested with six customers."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Assign each draft tier to one pricing segment"
                - "Build a feature and limit table for the draft tiers"
                - "Test the draft with six customers and two sales reps"
                - "Take the revised design to the pricing decider for approval"
            - name: Fences that separate one plan from the next
              description: |-
                ## Purpose
                A fence is the thing that stops a customer who values the top plan from happily buying the bottom one: a seat count, an admin control, a support level or a compliance feature. Choosing fences that track how value grows, rather than crippling core features, keeps the cheap plan genuinely useful and the expensive plan genuinely worth it.

                ## Milestones
                1. Candidate fences listed: seats, projects, features, support, security and contract terms.
                2. Each fence scored on how closely it tracks customer value.
                3. One primary fence chosen between each pair of adjacent plans.
                4. The core workflow confirmed as available in every plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A primary fence is chosen and recorded between each pair of adjacent plans, with the core workflow confirmed in every plan."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every possible fence between your current plans"
                - "Score each fence on how well it tracks the value customers get"
                - "Choose one primary fence between each adjacent pair of plans"
                - "Confirm the core workflow stays available in every plan"
            - name: Per-seat, flat or size-banded pricing choice
              description: |-
                ## Purpose
                Charging per seat punishes customers for spreading the product across the team, while a flat price leaves money on the table as accounts grow. Comparing per-seat, flat and size-banded structures against how your customers actually adopt and gain value shows which one grows revenue with value rather than against it.

                ## Milestones
                1. Current revenue modelled under per-seat, flat and size-banded structures.
                2. The effect on the twenty largest and twenty smallest accounts shown.
                3. Adoption risk of each structure assessed with customer success.
                4. A chosen structure recorded with the reasons.

                ## Notes
                If the right answer looks like charging by usage, consumption or credits, treat that as a separate billing design project rather than forcing it into this choice.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between per-seat, flat and size-banded pricing, backed by a model of the forty largest and smallest accounts."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Model current customers' bills under per-seat, flat and banded options"
                - "Show the bill change for the largest and smallest twenty accounts"
                - "Ask customer success which structure would slow adoption"
                - "Write the chosen structure and its reasons into the decision log"
            - name: Annual versus monthly billing terms
              description: |-
                ## Purpose
                Annual prepayment improves cash flow and retention, but too steep a discount gives away margin and too small a discount convinces nobody. Looking at the current mix, churn by billing term and cash needs gives a deliberate annual discount and default, instead of the figure everyone copies from someone else.

                ## Milestones
                1. The current split of monthly and annual customers by plan.
                2. Churn and expansion compared between monthly and annual customers.
                3. A chosen annual discount and default display, with reasons.
                4. The choice agreed with finance for its cash and revenue effect.

                ## Notes
                Revenue recognition and tax treatment for prepaid contracts are questions for your accountant or finance lead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An annual billing discount and default display chosen from retention and cash data, agreed with finance and recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the split of monthly and annual customers by plan"
                - "Compare retention for monthly and annual customers over twelve months"
                - "Model two or three annual discount levels with finance"
                - "Record the chosen annual discount and default display"
            - name: Pricing page rewrite
              description: |-
                ## Purpose
                Visitors spend seconds deciding whether a plan fits, so a pricing page that hides the price, lists forty features per plan or uses internal names sends good buyers to a sales call they did not want. Rewriting the page around who each plan is for, the few differences that matter and honest answers to common questions shortens the path to purchase.

                ## Milestones
                1. Each plan introduced with who it is for in one line.
                2. The comparison table cut to the differences buyers actually ask about.
                3. A questions section built from real sales and support questions.
                4. The rewritten page live, with conversion compared to the old page after six weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A rewritten pricing page is live, and its conversion after six weeks is recorded against the previous page."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Collect the twenty questions buyers most often ask about plans"
                - "Ask the agent to draft a one-line who-it-is-for statement for each plan"
                - "Cut the comparison table to the differences buyers care about"
                - "Compare pricing page conversion six weeks after launch"
            - name: Discount policy rewrite to cut leakage
              description: |-
                ## Purpose
                When the average discount creeps from 8% to 25% over two years, list prices stop meaning anything and customers who paid full price feel cheated when they find out. Rewriting the policy from real discount data, with clear bands, standard give-gets and expiry dates, brings the realised price back toward list without losing deals.

                ## Milestones
                1. Two years of discount data analysed by rep, segment and deal size.
                2. A new policy with bands, give-gets and expiry rules.
                3. Sales leadership trained on the new policy.
                4. Average discount tracked for three months after the change.

                ## Notes
                Every discount should expire at renewal unless the contract says otherwise. Permanent discounts are how a cheap first year becomes a cheap forever.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A new discount policy with bands, give-gets and expiry rules is in force, and average discount is tracked for three months after."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull two years of discount data by rep, segment and deal size"
                - "Draft new discount bands with what sales must get in return"
                - "Train sales leadership on the new policy"
                - "Track average discount for the three months after the change"
            - name: Regional and currency price list
              description: |-
                ## Purpose
                Selling in one currency at one price can be cheap in one market and out of reach in another, and buyers dislike paying in a foreign currency with bank fees added. Deciding which currencies to price in and whether to adjust price levels by region gives international customers fair, predictable prices and stops ad hoc local discounts.

                ## Milestones
                1. Revenue and sign-ups by country reviewed.
                2. A shortlist of currencies to price in.
                3. A decision on whether price levels differ by region, with the rule for how.
                4. Tax and invoicing questions for each new currency listed for finance and your tax adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded list of currencies to price in and a written rule for regional price levels, with tax questions passed to an adviser."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Break down revenue and sign-ups by country for the last year"
                - "Shortlist the currencies that would cover most international revenue"
                - "Decide whether price levels will differ by region and set the rule"
                - "Send finance the tax and invoicing questions for each new currency"
            - name: Retiring legacy plans and consolidating price points
              description: |-
                ## Purpose
                Years of experiments leave dozens of plan codes that billing, support and finance must maintain, each with its own exceptions. Moving small legacy cohorts onto current plans, with fair terms and plenty of notice, cuts operational cost and makes every later price change simpler.

                ## Milestones
                1. Legacy plans ranked by customer count, revenue and maintenance burden.
                2. A migration offer for each cohort that does not leave customers worse off in the first year, or a clear reason why not.
                3. Notices sent with at least the notice period your terms require.
                4. Retired plan codes closed in the billing system.

                ## Notes
                Check every customer contract and your published terms for notice periods and change rights before announcing anything. Your legal adviser should confirm the notice wording.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least one legacy cohort migrated to a current plan with compliant notice, and its plan code closed in billing."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Rank legacy plans by customers, revenue and support effort"
                - "Design a migration offer for the first cohort"
                - "Check contract notice periods for that cohort with legal"
                - "Close each retired plan code once its last customer has moved"
            - name: Controlled price test on new sign-ups
              description: |-
                ## Purpose
                Debates about price end faster with evidence, and for self-serve products a time-boxed test of two price points on new visitors in one segment can provide it. Designing the test carefully, with a sample size, a stop rule and a plan for people who see different prices, gets a real signal without damaging trust.

                ## Milestones
                1. One hypothesis, one segment and two price points written down.
                2. Sample size, duration and a stop rule agreed with whoever runs analytics.
                3. A fairness rule for buyers who saw the higher price, such as honouring the lower one on request.
                4. Results read on conversion and revenue per visitor, with a recorded decision.

                ## Notes
                Rules on showing different prices to different people vary by country. Check with your legal adviser, and never test prices on existing customers without telling them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A price test reaches its planned sample size, and a decision based on revenue per visitor is recorded with the results."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the hypothesis, segment and two price points"
                - "Agree sample size, duration and a stop rule with analytics"
                - "Write the fairness rule for buyers who saw the higher price"
                - "Read revenue per visitor at the end and record the decision"
            - name: New pricing launch day
              description: |-
                ## Purpose
                When new plans go live, the pricing page, checkout, billing system, quotes, sales collateral, help centre and tax settings all have to change on the same day. A launch checklist with an owner for each item and a dry run in the billing system's test mode avoids the classic failures: wrong amounts charged, old plans still buyable and sales quoting last week's numbers.

                ## Milestones
                1. A launch checklist covering page, checkout, billing, quotes, collateral, help centre and tax settings.
                2. Every checklist item owned and dated.
                3. A dry run completed in a test environment with sample purchases on each plan.
                4. Launch day held with a live issues channel and a review a week later.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "New pricing goes live with every checklist item complete, test purchases passed on each plan and a one-week review recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List every system and document that shows or charges a price"
                - "Assign an owner and date to each launch checklist item"
                - "Run test purchases on every plan in the billing test environment"
                - "Hold a review one week after launch and log the issues"
            - name: Price increase for existing customers
              description: |-
                ## Purpose
                Raising prices on people already paying is where pricing most often breaks trust, usually because the notice was short, the reason was vague or the change landed hardest on the wrong customers. Planning the increase as a project, with impact modelled customer by customer, notice beyond the contractual minimum, a clear account of added value and a prepared support team, keeps most customers and most goodwill.

                ## Milestones
                1. The new bill modelled for every customer, with the largest increases reviewed one by one.
                2. Notice period, effective date and any transition offer decided.
                3. Customer notice, help article and support and sales answers written and approved.
                4. Notices sent, with questions, cancellations and downgrades tracked weekly for the first two months.

                ## Notes
                Check your terms of service and each customer contract for notice and change rights, and have your legal adviser review the notice. Many teams give at least a month for monthly customers and notice before renewal for annual ones, but your terms decide.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every affected customer receives an approved notice before the effective date, and eight weeks of questions and cancellations are tracked."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Model the new bill for every customer and list the twenty biggest increases"
                - "Choose the notice period, effective date and any transition offer"
                - "Draft the customer notice and support answers for legal review"
                - "Review questions, cancellations and downgrades each week for eight weeks"
            - name: Ninety-day review after a pricing change
              description: |-
                ## Purpose
                Every pricing change carries a prediction about conversion, churn, plan mix or revenue, and few teams check whether it came true. A planned review ninety days after the change, against expectations written down beforehand, shows what to keep, adjust or reverse while the change is still fresh.

                ## Milestones
                1. Expected effects written down before the change goes live.
                2. Actual conversion, churn, plan mix and revenue pulled at ninety days.
                3. A keep, adjust or reverse decision recorded.
                4. Lessons added to the pricing decision log.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A review held ninety days after a pricing change compares four metrics with written expectations and records a keep, adjust or reverse call."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the expected effect of the change on four metrics before launch"
                - "Book the ninety-day review with sales, finance and product"
                - "Pull actual results for the same four metrics"
                - "Record a keep, adjust or reverse decision with reasons"
            - name: Renewal uplift for contracted customers
              description: |-
                ## Purpose
                Annual and multi-year contracts often carry an uplift clause, or no clause at all, and renewals pass at the old price because nobody raised it ninety days out. Running a renewal calendar that flags uplift rights and prepares the conversation in advance turns a contractual right into revenue without surprising the customer.

                ## Milestones
                1. Every contract's renewal date and uplift clause listed.
                2. Renewals flagged 120 days ahead with a proposed price.
                3. Account managers briefed with the value delivered since the last renewal.
                4. Uplift outcomes recorded for the year.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every renewal in a twelve-month period was flagged 120 days ahead with a proposed price, and each final price is recorded."
                cadence: cyclic
              tasks:
                - "List every contract's renewal date and uplift clause"
                - "Review renewals due in the next 120 days and set proposed prices @recurring(monthly:3)"
                - "Brief account managers on the value delivered to each renewing customer"
                - "Record each renewal's final price against the proposal"
            - name: Board pricing strategy session
              description: |-
                ## Purpose
                Boards and investors ask about pricing power, discounting and margin, and a vague answer suggests nobody owns it. Preparing one focused session covering objectives, current metrics, planned changes and risks earns support for changes that may cost some short-term growth.

                ## Milestones
                1. A short pack with objectives, metrics, planned changes and risks.
                2. The questions the board is likely to ask, with prepared answers.
                3. The session held and decisions or concerns recorded.
                4. Follow-ups sent within a week.

                ## Notes
                Start from the **Board meeting** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pricing session is held with the board, its decisions and concerns are recorded and follow-ups are sent within a week."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a six-slide pricing pack with objectives, metrics and risks"
                - "Ask the agent to list the hardest pricing questions a board might ask"
                - "Rehearse the session with the founder or chief executive"
                - "Send follow-ups to the board within a week"
            - name: First price for a new product
              description: |-
                ## Purpose
                Founders setting a first price usually go too low, anchor on their own costs or copy the nearest competitor, then find raising it later much harder than starting higher. Setting the first price from the value to a specific first customer, with a simple plan structure and a planned review after the first twenty sales, gives a defensible starting point you can learn from.

                ## Milestones
                1. The first target customer and the value they get described in money or hours.
                2. A price range drawn from the value estimate, alternatives and three buyer conversations.
                3. One simple plan, or two at most, with a launch price set.
                4. A review date fixed for after the first twenty sales.

                ## Notes
                Charging something from the first customer teaches more than a long free pilot. Early customers can have a founding discount with a clear end date.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A launch price for one or two plans is set from a written value estimate and three buyer conversations, with a review date fixed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down the first target customer and what the problem costs them"
                - "Ask three prospective buyers what they spend on the problem today"
                - "Set one launch price and the date you will review it"
                - "Note the launch price and your reasons where the team can see them"
            - name: Pricing the first ten founder-led deals
              description: |-
                ## Purpose
                In the first sales, the founder is the pricing team, and each negotiated deal sets a precedent the next customer may hear about. Treating the first ten deals as a pricing experiment, with a written opening price, a floor and notes on every objection, turns them into evidence for the first proper price list.

                ## Milestones
                1. An opening price and a walk-away floor written before each call.
                2. Every deal recorded with final price, discount, terms and objections.
                3. Any founding customer terms written down with their end date.
                4. A summary after ten deals proposing a first price list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Ten deals recorded with opening price, final price, terms and objections, followed by a proposed first price list."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write your opening price and walk-away floor before the next sales call"
                - "Record each deal's final price, terms and objections in one sheet"
                - "Put an end date on every founding customer discount"
                - "Propose a first price list after the tenth deal"
            - name: Taking over pricing as a product manager
              description: |-
                ## Purpose
                Product managers handed pricing often find no documentation, a spreadsheet only one person understands and strong opinions in sales. A structured first ninety days, meeting the people who touch price, reading the history and fixing one small thing, builds credibility before any big change is proposed.

                ## Milestones
                1. Conversations held with sales, finance, success, support and marketing about pricing pain.
                2. The pricing history and past decisions read and summarised.
                3. One small pricing fix shipped, such as a confusing limit or a page error.
                4. A ninety-day summary with proposed priorities shared with your manager.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within ninety days, conversations with five functions are held, one pricing fix is shipped and a priorities summary is shared."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List everyone who touches pricing and book thirty minutes with each"
                - "Read the last two years of pricing changes and their reasons"
                - "Ship one small pricing fix in the first sixty days"
                - "Share a ninety-day summary and priorities with your manager"
            - name: Adding a custom-priced enterprise tier
              description: |-
                ## Purpose
                Once larger buyers appear, a published top plan starts losing money on deals that need security reviews, procurement and dedicated support. Adding an enterprise tier with a contact-sales price, clear entry criteria and a price floor captures that value without letting every big deal become a one-off.

                ## Milestones
                1. Entry criteria for the enterprise tier defined, such as seat count or compliance needs.
                2. A price floor and a standard quote structure agreed with finance.
                3. The tier's included services and service levels written.
                4. The first three enterprise deals priced through the new structure.

                ## Notes
                Building what enterprises require, such as single sign-on and audit logs, is separate work. This project prices and packages it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An enterprise tier with written entry criteria, a price floor and a quote structure is used to price three deals."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write the entry criteria that move a deal into the enterprise tier"
                - "Agree a price floor and standard quote structure with finance"
                - "List the services and service levels the tier includes"
                - "Price the next enterprise deal through the new structure"
            - name: Harmonising price books after a merger or acquisition
              description: |-
                ## Purpose
                When two products or companies combine, customers end up on two price books with different plan names, currencies, discounts and contract terms, and sales teams quote against each other. Mapping both price books, deciding the target structure and planning migration by cohort lets the combined business sell one story without a wave of surprise bills.

                ## Milestones
                1. Both price books mapped side by side with customers and revenue on each plan.
                2. A target combined plan structure agreed.
                3. A migration plan by cohort, with no customer moved without notice.
                4. Sales quoting from one combined price book.

                ## Notes
                Contracts inherited in an acquisition may restrict price changes. Have legal review them before planning any migration.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "One combined price book is issued to all sales teams, with a written migration plan for every inherited cohort."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map both price books side by side with customers on each plan"
                - "Draft a target combined plan structure"
                - "Ask legal to list contract terms that limit price changes"
                - "Issue one combined price book to both sales teams"
            - name: Repricing after a cost shock
              description: |-
                ## Purpose
                Sharp rises in supplier, infrastructure or model costs can turn a healthy plan unprofitable within a quarter. Measuring the real effect on margin by plan, choosing between absorbing, repackaging and raising prices, and explaining the choice honestly gives customers a reason they can accept.

                ## Milestones
                1. The cost increase measured per plan and per customer.
                2. Options compared: absorb, change limits, repackage or raise prices.
                3. A decision recorded with the margin effect of each option.
                4. A customer explanation drafted if prices or limits change.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded response to a cost increase, with the margin effect of four options compared and a customer explanation drafted if needed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure the cost increase per plan with finance"
                - "Compare absorbing, repackaging and raising prices on margin"
                - "Agree the chosen response with the pricing decider"
                - "Draft a plain explanation for customers if anything changes"
            - name: Nonprofit, education and startup discount programmes
              description: |-
                ## Purpose
                Requests for charity, school and early-stage startup discounts arrive one at a time and get answered inconsistently, which looks unfair once customers compare. A written programme with eligibility rules, a standard discount, the proof required and a review date replaces case-by-case haggling.

                ## Milestones
                1. Eligibility rules and proof required for each programme.
                2. A standard discount and any plan limits per programme.
                3. An application route and a named approver.
                4. A yearly check of programme cost and take-up.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written programmes with eligibility, proof, a standard discount and an approver are published, and every request since follows them."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the special discount requests answered in the last year"
                - "Write eligibility rules and the proof required for each programme"
                - "Set the standard discount and approver for each programme"
                - "Check programme cost and take-up @recurring(yearly)"
            - name: Price elasticity from your own history
              description: |-
                ## Purpose
                Past price changes, regional differences and discount variation are natural experiments, and with care they show how sensitive each segment is to price. Estimating a rough elasticity range by segment from your own data, with the caveats written alongside, makes the next increase a calculated risk rather than a guess.

                ## Milestones
                1. Past price changes listed with their dates and conversion and churn before and after.
                2. Overlapping events in the same periods noted, such as launches or campaigns.
                3. A rough elasticity range per segment with the confidence stated.
                4. Findings reviewed with someone who knows statistics.

                ## Notes
                Small samples and overlapping events make these estimates fragile. Use them to size a test, not to skip one.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An elasticity range for each main segment, with stated confidence and caveats, reviewed by an analyst."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every past price change with its date and segment"
                - "Pull conversion and churn for three months before and after each change"
                - "Note launches and campaigns that overlap each period"
                - "Review the elasticity estimates with an analyst before using them"
            - name: Discount and win rate analysis
              description: |-
                ## Purpose
                Sales teams often believe discounts win deals, but deal data frequently shows win rates barely change above a certain discount while revenue falls. Analysing win rate, deal size and sales cycle against discount level shows where discounting helps and where it only gives money away.

                ## Milestones
                1. Two years of closed deals with discount, outcome, size and cycle length.
                2. Win rate charted by discount band and segment.
                3. The point where more discount stops raising win rate identified.
                4. Recommendations taken to the pricing council.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A chart of win rate by discount band and segment from two years of deals, with a recommendation presented to the pricing council."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export two years of closed deals with discount and outcome"
                - "Chart win rate by discount band for each segment"
                - "Find where deeper discounts stop improving win rate"
                - "Take the findings and a recommendation to the pricing council"
            - name: Pricing scenario model
              description: |-
                ## Purpose
                Each proposed change, from a new tier to a 7% increase, moves conversion, churn, plan mix and margin at once, and arguments get settled by whoever sounds most confident. A shared model where those assumptions are explicit lets the team compare scenarios on the same basis and see which assumption the answer depends on.

                ## Milestones
                1. A model with customers by plan, prices, discounts, churn, conversion and cost to serve.
                2. Assumptions on one page, each with its source.
                3. Three scenarios run for the next pricing decision.
                4. A sensitivity table showing which assumption moves the answer most.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared pricing model with sourced assumptions has been used to compare three scenarios, including a sensitivity table."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Build the base model from current plan, price and churn data"
                - "Write every assumption on one page with its source"
                - "Run three scenarios for the next pricing decision"
                - "Refresh the model's base data from billing @recurring(quarterly)"
            - name: Pricing risk and compliance register
              description: |-
                ## Purpose
                Pricing touches rules most product teams never read: tax shown or excluded on the page, auto-renewal and cancellation disclosures, notice for changes, rules on comparing prices and how prepaid revenue is recognised. Keeping a register of these risks, each with an owner and the adviser who confirmed it, means a pricing change does not create a regulatory or accounting problem months later.

                ## Milestones
                1. Pricing risks listed across tax, consumer protection, contracts and revenue recognition.
                2. An internal owner and an external adviser named for each risk.
                3. Auto-renewal and price display rules confirmed by a qualified adviser for each market you sell in.
                4. The register reviewed before every major pricing change.

                ## Notes
                Start from the **Risk register** template. The register organises questions for your legal and tax advisers; it does not answer them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A pricing risk register names an owner and adviser for every risk and was reviewed before the most recent pricing change."
                cadence: rolling
              tasks:
                - "List the pricing risks in tax, consumer law, contracts and revenue"
                - "Name an internal owner and an external adviser for each risk"
                - "Ask your adviser which auto-renewal and price display rules apply"
                - "Review the pricing risk register with finance and legal @recurring(yearly)"
---

# Pricing & Packaging Design

This area is for founders, product managers and product leaders who own what the product costs and what each plan includes, whether that means setting a first price or untangling years of discounts and legacy plans. It starts with the foundations (an inventory of every live price, decision rights, objectives, cost to serve, pricing segments and packaging principles), then the operating routines that keep pricing honest, the research skills behind willingness to pay and feature value, the decisions that reshape tiers, fences and discounts, the events where prices change, the situations founders and newly appointed owners face, and finally the modelling and compliance work of an experienced pricing lead.

What repeats is a monthly pricing metrics review, a weekly discount exceptions check, a monthly pricing council and objection summary, monthly churn, competitor and renewal checks, quarterly packaging, placement and grandfathering reviews, and a yearly price review with its objectives refresh. The Metrics log, Meeting notes, Reading queue, Operational checklist, Board meeting and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
