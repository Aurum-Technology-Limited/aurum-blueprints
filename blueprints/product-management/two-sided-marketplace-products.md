---
id: product-management.two-sided-marketplace-products
name: Two-Sided Marketplace Products
description: "Marketplaces that work for both sides: the constrained side and first market, liquidity and unit economics, trust and payments, routines that keep supply healthy, and specialist work on experiments and network effects."
category: business
version: 1.0.0
tags: [product-management, two-sided-marketplace-products, founder, team, network-effects, liquidity, trust-and-safety, take-rate]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - product-spec
    - reading-queue
    - risk-register
    - operational-checklist
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Two-Sided Marketplace Products
          description: "Managing products that connect buyers and sellers, balancing both sides, tackling the cold-start problem and protecting trust and safety."
          projects:
            - name: Constrained side diagnosis for your marketplace
              description: |-
                ## Purpose
                Almost every marketplace has one side that is harder to get and one that follows once the first is there: for a home cleaning app it is usually reliable cleaners, for a used furniture site it is buyers in the right postcode. Naming the constrained side from evidence, not instinct, decides where the first year of acquisition money, product effort and founder time goes.

                ## Milestones
                1. Ten to fifteen conversations or data pulls showing where transactions currently fail: no supply, no demand or no match.
                2. A written statement of which side is constrained in the first market, with the evidence beside it.
                3. The conditions that would flip the answer listed, such as a new category or a second city.
                4. Next quarter's acquisition plan reordered to match the decision.

                ## Notes
                The constrained side often changes as you grow. Early food delivery was short of restaurants, then of hungry customers, then of couriers at peak hours.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page note naming the constrained side in the first market, with at least ten pieces of evidence and the triggers that would change it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the last twenty failed searches, unfilled requests or unsold listings you can find"
                - "Interview five people on each side about why a transaction did not happen"
                - "Write the constrained side decision and its evidence on one page"
                - "Share the decision with the team and reorder next quarter's acquisition work"
            - name: Marketplace business model and fee flow map
              description: |-
                ## Purpose
                Before take rates, payouts or guarantees can be designed, everyone needs the same picture of who pays whom, when, and what the platform keeps. Drawing the money and value flow for a single transaction, from listing to payout to refund, exposes the decisions nobody has made yet, such as who absorbs a chargeback or when a seller is paid.

                ## Milestones
                1. A diagram of one typical transaction showing every party, payment and fee.
                2. Revenue lines listed: commission, listing fees, subscriptions, advertising or payment margin.
                3. Open questions on refunds, chargebacks and payout timing written down with an owner each.
                4. The map reviewed by finance or your accountant and kept with the area.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page fee flow map for a typical transaction, covering refunds and payouts, reviewed by whoever owns finance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch one real transaction from listing to payout on a single page"
                - "Mark every point where money moves and who holds it at that moment"
                - "List each open question about refunds and chargebacks with an owner"
                - "Review the map with your finance lead or accountant"
            - name: Atomic network for the first launch market
              description: |-
                ## Purpose
                A marketplace with 2,000 sellers spread across a whole country can feel empty to every buyer, while 150 sellers in one neighbourhood can feel full. Defining the smallest network that can work on its own, by geography, category and time of day, gives the team a liquidity target it can actually hit before spreading wider.

                ## Milestones
                1. The launch boundary written as geography plus category, such as one city's dog walkers or one campus's textbooks.
                2. A target number of active sellers and buyers for that boundary, with the reasoning.
                3. Demand outside the boundary deliberately waitlisted rather than served badly.
                4. The point at which the network counts as liquid defined in one sentence.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written launch boundary with target counts on both sides and a stated definition of when that market is liquid."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Map where your current buyers and sellers are by area or segment"
                - "Pick the smallest boundary where you already have a cluster on one side"
                - "Estimate the seller and buyer counts needed for most buyers to find a match"
                - "Set up a waitlist for demand that falls outside the boundary"
            - name: Liquidity metrics baseline
              description: |-
                ## Purpose
                Liquidity is the chance that a listing sells or a request is filled within a reasonable time, and it is the number that best predicts whether a marketplace will grow. Defining three or four measures such as search-to-fill rate, time to first response and sell-through within 30 days, and recording where they stand today, gives every later decision a before and after.

                ## Milestones
                1. Liquidity measures for each side defined in writing, with exact numerators and denominators.
                2. Current values calculated for the launch market and the top three categories.
                3. A metrics log holding the baseline with its date and data source.
                4. Targets for the next two quarters agreed with the team.

                ## Notes
                Start from the **Metrics log** template. Measure liquidity per segment, never only for the whole marketplace: a healthy average can hide a category where nothing sells.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three or more liquidity measures defined and baselined per segment in a dated metrics log, with targets agreed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-line definition of what counts as a successful match"
                - "Pull the last 90 days of listings, requests and completed transactions"
                - "Calculate fill rate, time to match and sell-through for each top segment"
                - "Record the baseline and its data source in a metrics log"
            - name: Per-transaction unit economics
              description: |-
                ## Purpose
                Gross merchandise value flatters marketplaces; what matters is how much the platform keeps from each transaction after payment fees, refunds, incentives and support. Working out contribution margin per order, plus the cost of acquiring a buyer and a seller, shows whether growth is building a business or buying volume.

                ## Milestones
                1. Average order value, take rate and net revenue per transaction calculated.
                2. Payment processing, refunds, promotions and support cost per transaction subtracted to give contribution margin.
                3. Acquisition cost and first-year transactions estimated separately for buyers and sellers.
                4. A monthly refresh of the numbers agreed with whoever closes the books.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A per-transaction contribution margin and a cost to acquire each side, calculated from real data and refreshed monthly."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect last quarter's GMV, net revenue, refunds and payment fees"
                - "Estimate support minutes and promotion spend per completed transaction"
                - "Calculate contribution margin per transaction for the top two categories"
                - "Refresh contribution margin per transaction after each month-end @recurring(monthly:8)"
            - name: Two-sided funnel from listing to repeat order
              description: |-
                ## Purpose
                Marketplaces leak in places a single-sided funnel never shows: a seller who lists but never responds, a buyer who messages three sellers and gives up. Mapping both funnels side by side, with the handoffs between them, shows which drop-off is costing the most transactions this month.

                ## Milestones
                1. Supply funnel stages defined: sign-up, verified, first listing, first response, first sale, repeat sale.
                2. Demand funnel stages defined: visit, search, contact or basket, transaction, review, repeat.
                3. Conversion between every stage measured for the last 60 days.
                4. The single biggest leak across both funnels named, with a proposed fix.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Both funnels drawn with measured stage conversion for 60 days, and the largest leak named with an owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the stage names for the supply funnel and the demand funnel"
                - "Check that each stage has an event or table you can count from"
                - "Measure conversion between stages for the last 60 days"
                - "Circle the stage where the most potential transactions are lost"
            - name: Trust and safety policy foundations
              description: |-
                ## Purpose
                Strangers transacting with strangers need written rules before the first incident, not after. A short set of community guidelines, a prohibited items or services list and a clear statement of what happens when rules are broken protect users and give support staff something consistent to point to.

                ## Milestones
                1. Community guidelines written in plain language for both buyers and sellers.
                2. A prohibited items or services list covering legal limits and your own choices.
                3. An enforcement ladder from warning to suspension to removal, with who decides each step.
                4. Policies reviewed by a lawyer familiar with your markets and published in the product.

                ## Notes
                Your lawyer decides what the law requires in each market; the product team decides how clearly it is explained and how consistently it is enforced.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Guidelines, a prohibited list and an enforcement ladder are published in the product after legal review."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect the guidelines of three marketplaces in adjacent categories for comparison"
                - "Draft community guidelines and a prohibited list for your categories"
                - "Define the enforcement ladder and who approves suspensions"
                - "Send the drafts to a lawyer for review before publishing"
            - name: Marketplace payments and payout provider decision
              description: |-
                ## Purpose
                Taking money from buyers and paying it out to sellers brings duties that ordinary card payments do not: seller identity checks, holding funds, split payments, refunds after payout and, in many countries, licensing rules for anyone who holds other people's money. Choosing a payments provider built for marketplaces, rather than bolting payouts onto a checkout tool, keeps most of those duties with a regulated partner.

                ## Milestones
                1. Requirements listed: split payments, delayed payouts, seller onboarding checks, refunds, currencies and countries.
                2. Three marketplace payment providers compared against the same requirements and fee schedule.
                3. Your lawyer or compliance adviser asked whether the chosen model needs any licence in your markets.
                4. A provider chosen and the decision recorded with its reasons.

                ## Notes
                Start from the **Purchase decision** template.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A marketplace payments provider chosen against written requirements, with the licensing question answered by a qualified adviser."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every way money needs to move in your fee flow map"
                - "Shortlist three providers that offer marketplace or platform payouts"
                - "Score each provider on fees, payout timing, seller checks and country coverage"
                - "Ask a compliance adviser whether your payment model needs a licence"
            - name: Seller onboarding and verification flow
              description: |-
                ## Purpose
                The first ten minutes decide whether a new seller finishes setup, and the checks inside those minutes decide whether a fraudster gets in. A flow that asks only for what is needed at each step, verifies identity and payout details before the first payout rather than before the first listing, and explains why each check exists balances speed against safety.

                ## Milestones
                1. Every current onboarding step listed with its completion rate.
                2. Verification checks sorted into those needed before listing and those needed before payout.
                3. A redesigned flow tested with five new sellers.
                4. Median time from sign-up to first live listing measured before and after.

                ## Notes
                Start from the **Product spec** template.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A redesigned seller onboarding flow is live, with median time to first listing measured before and after and identity checks completed before payout."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Sign up as a new seller yourself and time every step"
                - "Mark which checks your payments provider requires before payout"
                - "Test the redesigned flow with five new sellers and note where they stall"
                - "Sample ten new seller verifications for missed red flags @recurring(monthly:3)"
            - name: Cold start plan for the first 100 transactions
              description: |-
                ## Purpose
                Nobody joins an empty marketplace, so the first hundred transactions are usually forced by hand: founders recruiting sellers one by one, seeding listings, or acting as the supply themselves. A written plan for those hundred, with tactics for each side and a weekly count, keeps the team doing unscalable work deliberately rather than waiting for organic growth.

                ## Milestones
                1. Tactics chosen for the constrained side, such as personal recruiting, seeded inventory or guaranteed earnings.
                2. Tactics chosen for the other side, such as one community, a newsletter or a partner's audience.
                3. A tracker counting completed transactions each week toward 100.
                4. The 100th transaction completed, with notes on which tactics produced most of them.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One hundred completed transactions in the launch market, with the source of each one recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List twenty sellers you could recruit personally this week"
                - "Choose one community where your first buyers already gather"
                - "Set up a tracker logging each transaction and how it was sourced"
                - "Call every seller after their first sale to ask what nearly stopped them"
            - name: Weekly marketplace health review
              description: |-
                ## Purpose
                Marketplace problems show up first as small shifts: response times creeping up in one category, a jump in cancellations, new sellers not getting a first sale. A 30-minute weekly review of the same eight numbers for both sides catches these while they are cheap to fix and keeps supply, demand and trust in one conversation.

                ## Milestones
                1. Eight numbers chosen covering liquidity, both funnels, cancellations and trust incidents.
                2. A one-page dashboard or sheet updated before each review.
                3. A standing weekly slot with the people who own supply, demand and trust.
                4. Twelve consecutive reviews held, each ending with no more than two actions.

                ## Notes
                Keep the same numbers for at least a quarter. Changing them every week hides the trends you are looking for.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly reviews held from the same dashboard, each with recorded actions and owners."
                cadence: rolling
              tasks:
                - "Pick the eight numbers the weekly review will always show"
                - "Book a recurring 30-minute slot with the supply, demand and trust owners"
                - "Update the health dashboard and review it with the team @recurring(weekly:mon)"
                - "Record each week's actions and owners at the bottom of the sheet"
            - name: Supply and demand balance by segment
              description: |-
                ## Purpose
                A marketplace can be oversupplied in one category and starving in another at the same time, and the average hides both. Watching the ratio of active buyers to active sellers, or requests to available providers, segment by segment tells you where to spend acquisition money this week and where to pause it.

                ## Milestones
                1. A balance measure chosen for each segment, such as requests per active provider.
                2. A healthy range set for each, based on fill rate and seller earnings.
                3. Segments outside the range flagged automatically or in the weekly sheet.
                4. Acquisition spend moved at least once in response to a flag.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every top segment has a balance measure with a healthy range, checked weekly, and spend has been shifted at least once because of it."
                cadence: rolling
              tasks:
                - "Choose the balance ratio that fits your marketplace type"
                - "Set a healthy range for each top segment using past fill rates"
                - "Check which segments are outside their range and adjust acquisition @recurring(weekly:thu)"
                - "Tell sellers in oversupplied segments honestly what demand looks like"
            - name: Fraud and abuse review queue
              description: |-
                ## Purpose
                Marketplaces attract fake listings, stolen cards, account takeovers, review rings and sellers who take payment and never deliver. A daily queue of flagged accounts and transactions, worked to a written standard, stops losses before payouts leave and builds the data needed for better automated rules.

                ## Milestones
                1. Signals that put an account or transaction in the queue written down.
                2. A response standard for each signal: hold, request documents, suspend or clear.
                3. The queue worked every working day with decisions logged.
                4. Monthly fraud losses and false positive rate tracked.

                ## Notes
                Holding a payout is usually kinder and cheaper than reversing one. Agree hold rules with your payments provider in advance.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every flagged item is reviewed within one working day, with monthly fraud losses and false positives recorded for three months."
                cadence: rolling
              tasks:
                - "List the ten fraud patterns you have already seen or most expect"
                - "Write a response standard for each pattern"
                - "Clear the queue of flagged accounts and held transactions @recurring(daily)"
                - "Review the week's fraud losses and false positives with the trust owner @recurring(weekly:wed)"
            - name: Dispute and refund resolution process
              description: |-
                ## Purpose
                When an item arrives broken or a provider does not turn up, both sides judge the marketplace by how the dispute is handled. A clear process, with evidence each side can submit, time limits and consistent outcomes, turns a bad transaction into a reason to trust the platform rather than leave it.

                ## Milestones
                1. Dispute types listed with the evidence required for each.
                2. Time limits set for raising, responding to and resolving a dispute.
                3. Outcome guidelines written so two agents reach the same decision on the same case.
                4. Monthly dispute rate, resolution time and repeat offenders reported.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written dispute process is in use, with resolution time and dispute rate reported monthly for three months."
                cadence: rolling
              tasks:
                - "Read the last twenty disputes and group them into types"
                - "Write the evidence and time limits for each dispute type"
                - "Give two support agents the same five cases and compare their outcomes"
                - "Report dispute rate, resolution time and repeat offenders @recurring(monthly:9)"
            - name: Review and rating integrity audit
              description: |-
                ## Purpose
                Ratings on marketplaces drift toward 4.8 stars for everyone, which makes them useless to buyers and unfair to sellers who earn them. A monthly audit looks for review swapping, pressure to rate five stars, payment for reviews and plain inflation, and keeps the reputation system worth reading.

                ## Milestones
                1. The current rating distribution plotted for each side.
                2. Suspicious patterns defined, such as reciprocal reviews or bursts from new accounts.
                3. A monthly sample of reviews checked against those patterns.
                4. One change made to the rating system if inflation or gaming is found, such as double-blind reviews.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly review audits completed, with findings logged and at least one integrity change shipped or ruled out with reasons."
                cadence: rolling
              tasks:
                - "Plot the rating distribution for sellers and for buyers"
                - "Write down the review patterns that suggest gaming"
                - "Sample fifty recent reviews and check them against the patterns @recurring(monthly:16)"
                - "Decide whether double-blind reviews would help your marketplace"
            - name: Seller performance standards and tiers
              description: |-
                ## Purpose
                Buyers remember the worst seller they meet, not the average, so supply quality needs standards with consequences in both directions. Clear thresholds for response time, cancellation rate and ratings, with a visible top tier as a reward and a coaching then removal path below the line, lift quality without arbitrary enforcement.

                ## Milestones
                1. Three to five performance standards set with thresholds sellers can see.
                2. A top tier defined with real benefits, such as better placement or lower fees.
                3. A coaching message and a final warning written for sellers below the line.
                4. Tier changes applied each quarter and their effect on buyer outcomes measured.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Published seller standards with a top tier, applied for two consecutive quarters with a measured change in cancellations or ratings."
                cadence: cyclic
              tasks:
                - "Pull response time, cancellation rate and rating for every active seller"
                - "Set top tier thresholds that the best 20% of sellers already meet"
                - "Write the coaching message for sellers below the standard"
                - "Recalculate seller tiers and notify sellers who moved @recurring(quarterly)"
            - name: Dormant seller and stale listing follow-up
              description: |-
                ## Purpose
                Listings that are out of stock, providers who no longer reply and calendars nobody updates make buyers think the whole marketplace is broken. A monthly sweep that nudges dormant sellers, pauses stale listings and asks departing sellers why they left keeps the visible supply real.

                ## Milestones
                1. Definitions of a dormant seller and a stale listing agreed.
                2. An automated or manual nudge sent before any listing is paused.
                3. Exit reasons collected from at least twenty sellers who stopped.
                4. Visible stale listings reduced to an agreed share of the catalogue.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Stale listings held below an agreed share of the catalogue for three months, with exit reasons logged from twenty departed sellers."
                cadence: rolling
              tasks:
                - "Define how many days without a response or update makes a listing stale"
                - "Pause stale listings and nudge their sellers to reactivate @recurring(monthly:12)"
                - "Call or email ten sellers who stopped to ask why"
                - "Group the exit reasons and share the top three with the team"
            - name: Disintermediation and fee leakage monitoring
              description: |-
                ## Purpose
                Once a buyer and a seller have met, both have a reason to take the next transaction off the platform and skip the fee, especially for repeat services such as tutoring or cleaning. Measuring where leakage happens, and adding value that makes staying worthwhile, protects revenue better than blocking phone numbers in chat.

                ## Milestones
                1. Signals of leakage listed: repeat pairs who stop transacting, contact details shared in messages, sudden drops in a seller's volume.
                2. Monthly leakage estimated for the top categories.
                3. Reasons to stay on the platform listed, such as payment protection, insurance, scheduling or reviews.
                4. One change shipped that gives repeat pairs more value on the platform.

                ## Notes
                Heavy message filtering annoys honest users. Make staying more valuable before making leaving harder.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Leakage is estimated monthly for the top categories, and one on-platform benefit for repeat pairs has been shipped and measured."
                cadence: rolling
              tasks:
                - "Find pairs who transacted three times and then stopped"
                - "Interview five of those sellers about how they work with those buyers now"
                - "Estimate monthly leakage for the top categories @recurring(monthly:21)"
                - "Pick one benefit that would make repeat pairs stay on the platform"
            - name: Seller communication rhythm
              description: |-
                ## Purpose
                Sellers depend on the marketplace for income, so silence about changes, demand trends or policy feels like risk. A predictable monthly update covering what changed, what demand looks like and what is coming next reduces support tickets and the rumours that spread in seller groups.

                ## Milestones
                1. A monthly seller update format with three fixed sections.
                2. A list of the forums, groups and channels where sellers talk to each other.
                3. Six monthly updates sent on schedule.
                4. Open rate and seller replies tracked to see which topics matter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly seller updates sent on schedule, with open rates and the main replies recorded."
                cadence: rolling
              tasks:
                - "Find the groups and forums where your sellers talk to each other"
                - "Draft a three-section template for the monthly seller update"
                - "Ask the agent to draft the month's seller update from the release log and demand trends"
                - "Send the monthly seller update and note the replies @recurring(monthly:25)"
            - name: Quarterly marketplace policy review
              description: |-
                ## Purpose
                Marketplace rules age fast: new categories bring new risks, regulators publish new expectations and bad actors find gaps. Reviewing the guidelines, prohibited list, fees page and enforcement ladder once a quarter, with recent incidents on the table, keeps the rules matched to what actually happens.

                ## Milestones
                1. A policy owner named for each document.
                2. The quarter's incidents, disputes and appeals summarised by policy area.
                3. Changes drafted, legally reviewed where needed, and dated.
                4. Users told about material changes with notice before they apply.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly policy reviews held in a year, each with a dated change log and user notice for material changes."
                cadence: cyclic
              tasks:
                - "Name an owner for each policy document"
                - "Summarise the quarter's incidents and appeals by policy area @recurring(quarterly)"
                - "Draft changes and send material ones for legal review"
                - "Publish a dated change log and notify affected users"
            - name: Network effects and defensibility study
              description: |-
                ## Purpose
                Founders often describe any marketplace as having network effects, but many are local, weak or easy for a rival to copy because sellers list in several places at once. Studying the types of network effect and testing your own against them tells you honestly whether scale will protect you or whether you need another moat.

                ## Milestones
                1. The difference between same-side, cross-side, local and global network effects written in your own words.
                2. Your marketplace's network effects classified with evidence.
                3. Multi-homing on both sides estimated, such as how many sellers also list elsewhere.
                4. A one-page view of what would stop a well-funded competitor, shared with the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page defensibility note classifying your network effects with evidence and a multi-homing estimate, shared with the team."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read two well-regarded essays or book chapters on marketplace network effects"
                - "Classify each network effect you believe you have as local or global"
                - "Survey twenty sellers on which other platforms they also use"
                - "Write the one-page defensibility note and discuss it with the team"
            - name: Marketplace case history reading list
              description: |-
                ## Purpose
                Most mistakes a new marketplace can make have been made publicly already: subsidies that never stopped, expansion before liquidity, trust failures that made headlines. Reading a dozen well-documented case histories and writing one lesson from each builds judgement faster than learning only from your own data.

                ## Milestones
                1. A reading queue of twelve case studies, books or founder interviews across goods, services and rentals.
                2. One lesson per item written in two sentences.
                3. The three lessons most relevant to your marketplace shared with the team.
                4. One decision changed or confirmed because of what you read.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve marketplace case histories read, each with a two-sentence lesson logged and three shared with the team."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Build a reading queue of twelve marketplace case histories"
                - "Read one case a week and write its lesson in two sentences"
                - "Pick the three lessons that apply most to your marketplace"
                - "Present the three lessons at a team meeting"
            - name: Marketplace metrics fluency for the whole team
              description: |-
                ## Purpose
                When engineers, designers and support staff all know what GMV, take rate, fill rate and seller earnings mean, and how they trade off, product debates get shorter and fewer changes help one side at the other's expense. A one-hour session and a shared glossary give everyone the same vocabulary.

                ## Milestones
                1. A glossary of fifteen marketplace terms with your exact definitions.
                2. A one-hour session run with worked examples from your own data.
                3. Three trade-off examples discussed, such as a change that raises GMV but lowers seller earnings.
                4. The glossary linked from every metrics dashboard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A fifteen-term glossary published with your definitions and a team session held with worked examples."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the fifteen marketplace terms your team uses most"
                - "Write your exact definition of each, including its data source"
                - "Prepare three trade-off examples from your own numbers"
                - "Run the one-hour session and link the glossary from your dashboards"
            - name: Subsidy and incentive economics for each side
              description: |-
                ## Purpose
                Marketplaces often charge one side little or nothing and pay the other to join, but incentives that never taper teach users to wait for the next promotion. Learning how to size, target and end a subsidy, and modelling your own, stops cold-start spending from becoming a permanent cost.

                ## Milestones
                1. Current incentives on both sides listed with their monthly cost.
                2. Retention of subsidised and unsubsidised users compared after the incentive ends.
                3. A rule written for when each incentive tapers or stops.
                4. Incentive spend as a share of net revenue tracked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every active incentive has a written end rule, and subsidised versus unsubsidised retention has been compared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every discount, guarantee and bonus currently paid to either side"
                - "Compare 90-day retention for subsidised and unsubsidised cohorts"
                - "Write a taper or end rule for each incentive"
                - "Report incentive spend as a share of net revenue to the founders"
            - name: Trust and safety fundamentals for product managers
              description: |-
                ## Purpose
                Product managers on marketplaces make trust decisions every week without calling them that: whether to show a seller's full name, when to release contact details, how a brand-new account appears in results. Learning the core patterns of identity, reputation, moderation and safety design helps every feature ship with its risks considered.

                ## Milestones
                1. Common trust patterns studied: progressive verification, reputation, escrow, guarantees and moderation.
                2. Three recent features reviewed for the abuse they could enable.
                3. A short trust checklist added to the team's spec process.
                4. One shadowing session completed with the support or trust team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A trust checklist has been added to the spec process and three shipped features have been reviewed against it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Shadow the support or trust team for two hours"
                - "Review three recent features for the misuse each could enable"
                - "Draft a ten-question trust checklist for new specs"
                - "Add the checklist to the team's spec process"
            - name: Why marketplace experiments mislead
              description: |-
                ## Purpose
                In a marketplace, treatment and control groups share the same supply, so a test that helps treated buyers book faster may simply take bookings from the control group. Understanding this interference, and when a normal A/B test is still fine, keeps the team from shipping changes that looked like wins but moved nothing.

                ## Milestones
                1. Interference between test groups explained in your own words with an example from your marketplace.
                2. Past experiments listed where shared supply could have biased the result.
                3. Rules written for which tests can use user-level randomisation and which cannot.
                4. One past result re-examined with the rules in mind.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written rules for when user-level tests are safe on your marketplace, applied to at least one past result."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read an introduction to interference in two-sided marketplace experiments"
                - "List the last ten experiments and mark those that competed for shared supply"
                - "Write the rules for when user-level randomisation is acceptable"
                - "Re-examine one past winning experiment against the rules"
            - name: Platform seller regulation map
              description: |-
                ## Purpose
                Platforms that connect sellers with buyers sit under rules ordinary apps do not: worker status for service providers, consumer protection for buyers, transparency duties toward business users and, in many countries, reporting seller income to the tax authority. A map of which rules apply in each launch market, prepared with counsel, stops a compliance surprise from blocking a city launch.

                ## Milestones
                1. Rule families listed for each market: worker status, consumer rights, platform transparency, seller tax reporting and licensed services.
                2. Each rule family checked with a qualified lawyer or adviser for your markets.
                3. Product requirements arising from the advice listed with owners.
                4. A risk register entry for each open regulatory question.

                ## Notes
                Start from the **Risk register** template. This map organises what your advisers tell you; it is not a legal conclusion on its own.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A per-market regulation map reviewed by a qualified adviser, with product requirements and open risks recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every market you operate in or plan to enter this year"
                - "Book a session with a lawyer who advises platforms in those markets"
                - "Turn the advice into product requirements with owners"
                - "Check for new platform or seller rules in each live market @recurring(quarterly)"
            - name: Take rate and fee structure decision
              description: |-
                ## Purpose
                The take rate decides whether sellers stay, whether buyers see fair prices and whether the business works, and it is hard to raise later. Comparing commission, buyer fees, subscriptions and payment margin against the value you add on each side, with seller earnings modelled, gives a fee structure you can defend to both sides.

                ## Milestones
                1. Fee structures of five comparable marketplaces documented.
                2. The value you add listed per side, such as demand, payments, insurance or tools.
                3. Two or three fee options modelled for seller earnings and contribution margin.
                4. A fee structure chosen and the reasoning recorded for the next time it is questioned.

                ## Notes
                Who sees the fee matters as much as its size. A buyer service fee and a seller commission of the same total land very differently.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen fee structure with seller earnings and margin modelled for at least two alternatives, written up with its reasoning."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Document the fee structures of five comparable marketplaces"
                - "List the value you provide to each side that justifies a fee"
                - "Model seller earnings and margin under two or three fee options"
                - "Write up the chosen structure and why the others lost"
            - name: Managed versus open marketplace decision
              description: |-
                ## Purpose
                Open marketplaces let anyone list and buyers choose; managed ones vet supply, set prices or guarantee outcomes, and charge more for it. Deciding how much of the transaction to own, category by category, shapes headcount, margin and what buyers expect, so it deserves an explicit choice.

                ## Milestones
                1. Each category scored on buyer risk, cost of a bad outcome and spread of supply quality.
                2. Managed options listed, such as vetting, fixed pricing, matching or guarantees.
                3. Cost and take rate estimated for a managed version of one category.
                4. A decision recorded per category, with a pilot planned where managed wins.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded open or managed decision for each category, with one managed pilot planned where it is justified."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Score each category on how costly a bad transaction is for the buyer"
                - "List the managed services you could add, such as vetting or fixed prices"
                - "Estimate the cost and fee of a managed version in one category"
                - "Record the decision per category and plan one pilot"
            - name: Matching rules that reward reliable supply
              description: |-
                ## Purpose
                Whoever appears first in results or receives the next request gets the transaction, so matching rules quietly decide which sellers thrive. Building reliability, response time and recent performance into matching, not just relevance or price, raises completion rates and gives sellers a clear reason to behave well.

                ## Milestones
                1. Current matching or ranking inputs documented.
                2. Reliability signals chosen: response time, cancellation rate, completion rate.
                3. A change tested in one segment with completion rate as the main measure.
                4. The rules explained to sellers in plain language.

                ## Notes
                Some jurisdictions expect platforms to explain their main ranking parameters to business users. Check with your counsel before publishing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Matching uses at least two reliability signals in one segment, tested against completion rate and explained to sellers."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down every input that currently decides matching or ranking"
                - "Choose the two reliability signals with the best data quality"
                - "Test the reliability weighting in one segment for four weeks"
                - "Publish a plain-language explanation of how sellers are ranked"
            - name: Pricing guidance for sellers
              description: |-
                ## Purpose
                New sellers often price too high and never sell, or too low and leave disappointed, and both hurt liquidity. Showing a suggested range from recent comparable transactions helps sellers start in the right place without the platform setting their prices.

                ## Milestones
                1. Comparable transaction data checked for enough volume in each category.
                2. A suggested range shown at listing time in one category.
                3. Time to first sale and accepted price compared with sellers who did not see guidance.
                4. Guidance extended to further categories if the results hold.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Price guidance is live in one category, with time to first sale compared against a control period."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Check how many comparable sales exist per category in the last 90 days"
                - "Design how the suggested range appears on the listing form"
                - "Launch guidance in one category and track time to first sale"
                - "Decide which categories have enough data to extend it to"
            - name: Cancellation and no-show policy redesign
              description: |-
                ## Purpose
                Cancellations are the most damaging marketplace failure because the other side has already planned around the transaction. Redesigning cancellation windows, fees and penalties for both sides, with the cost of each cancellation type understood, cuts last-minute failures without punishing people with genuine emergencies.

                ## Milestones
                1. Cancellation rates measured by side, timing and reason.
                2. The cost of a late cancellation to the other side estimated.
                3. New windows, fees and seller penalties drafted with an exceptions route.
                4. Late cancellation rate measured eight weeks after launch.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new cancellation policy is live, with late cancellations measured eight weeks after launch against the prior baseline."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Break down last quarter's cancellations by side, timing and reason"
                - "Interview five users who had a transaction cancelled late"
                - "Draft new windows, fees and an exceptions route"
                - "Measure the late cancellation rate eight weeks after the change"
            - name: Buyer protection programme decision
              description: |-
                ## Purpose
                A promise that buyers get their money back, or that damage is covered, can be the reason a first-time buyer trusts a stranger. It also costs real money and invites abuse, so the decision needs a claims estimate, clear terms and a budget before it appears on the homepage.

                ## Milestones
                1. Protection options compared: refund guarantee, insurance partner, seller deposits.
                2. Expected claims and cost estimated from past disputes.
                3. Terms drafted with exclusions and claim limits, reviewed by a lawyer or insurer.
                4. A decision recorded, with claims tracked against budget if launched.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A protection programme approved or declined with a claims estimate, and quarterly claims tracked against budget if it launches."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Estimate what the last six months of disputes would have cost under a guarantee"
                - "Ask one insurer or broker what marketplace cover would cost"
                - "Draft terms with exclusions and send them for review"
                - "Review protection claims cost against budget @recurring(quarterly)"
            - name: Seller tools that make the platform worth staying on
              description: |-
                ## Purpose
                Sellers who run their whole business through your scheduling, invoicing or inventory tools have a reason to stay that has nothing to do with demand. Building one tool sellers would use even without your buyers, sometimes called single-player value, can also help the cold start in a new market.

                ## Milestones
                1. The tools sellers use today outside the platform listed from twenty interviews.
                2. One tool chosen by how often it is used and how hard it is to build.
                3. A spec written and a first version used by at least 30 sellers.
                4. Retention of tool users compared with other sellers after three months.

                ## Notes
                Start from the **Product spec** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One seller tool used weekly by at least 30 sellers, with their three-month retention compared against other sellers."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask twenty sellers which spreadsheets and apps they run their business on"
                - "Choose the tool that is used most often and is simplest to build"
                - "Write the spec and recruit 30 sellers to try the first version"
                - "Compare three-month retention of tool users with other sellers"
            - name: Faster first sale for new sellers
              description: |-
                ## Purpose
                Sellers who make no sale in their first few weeks rarely come back, and every one of them cost money to acquire. Cutting the time to first sale, through new-seller visibility, guided first listings or a first-transaction guarantee, raises supply retention more than any later feature.

                ## Milestones
                1. Median days to first sale measured and the 30-day no-sale rate calculated.
                2. Reasons for slow first sales identified from listings and interviews.
                3. Two interventions tested, such as a new-seller boost or listing feedback.
                4. Median time to first sale reduced and the change recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Median days to first sale reduced from the measured baseline, with the winning intervention documented."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Measure median days to first sale for the last three monthly cohorts"
                - "Review twenty listings from sellers with no sale after 30 days"
                - "Test a temporary visibility boost for brand-new sellers"
                - "Write up which intervention shortened time to first sale"
            - name: Repeat transactions with trusted sellers
              description: |-
                ## Purpose
                The cheapest transaction is a buyer returning to a seller they already liked, and marketplaces that make that easy keep both sides. Favourites, rebooking and a notice when a trusted seller lists something new turn one good match into a relationship that stays on the platform.

                ## Milestones
                1. Buyer repeat rate measured, with the share of repeats going to the same seller.
                2. The steps a buyer needs to rebook or reorder counted.
                3. One rebooking or favourites feature shipped.
                4. Same-seller repeat rate compared before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A rebooking or favourites feature shipped, with same-seller repeat rate compared before and after."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Measure 90-day repeat rate and the share that return to the same seller"
                - "Count the taps it takes to rebook or reorder from a past seller"
                - "Ship one change that cuts those steps"
                - "Compare same-seller repeat rate eight weeks after launch"
            - name: Second city or category launch
              description: |-
                ## Purpose
                Expanding before the first market is liquid spreads a thin network thinner, but waiting too long lets a rival take the next one. A launch with entry criteria, a seeded supply target before buyers are invited and a dated go or no-go decision repeats what worked in the first market on purpose.

                ## Milestones
                1. Entry criteria met in the first market, such as fill rate and seller earnings above target for three months.
                2. The next city or category chosen against written criteria.
                3. Supply seeded to the target before demand marketing starts.
                4. A go or no-go held on a fixed date, with liquidity measured 60 days after launch.

                ## Notes
                Expect each new market to need its own cold-start effort. Local network effects rarely travel between cities.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The second market launched only after entry criteria were met, with liquidity measured 60 days after launch."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write the entry criteria the first market must meet before expanding"
                - "Score three candidate cities or categories against the same criteria"
                - "Set the seller target to reach before inviting buyers"
                - "Fix the go or no-go date and who makes the call"
            - name: Fee change rollout to existing sellers
              description: |-
                ## Purpose
                Raising fees or changing how they work is the moment seller trust is most at risk, and seller forums will judge the reasons as much as the number. A rollout with modelled impact by seller type, advance notice, a clear explanation of what the fee pays for and a support plan keeps churn to the level you forecast.

                ## Milestones
                1. Impact on earnings modelled for small, medium and large sellers.
                2. A notice period agreed that meets any contractual or legal minimum, and the announcement drafted.
                3. Support scripts and an FAQ ready before the announcement.
                4. Seller churn and listing volume tracked for 90 days against the forecast.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fee change announced with the agreed notice period, and seller churn tracked for 90 days against the forecast."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Model the change in monthly earnings for small, medium and large sellers"
                - "Confirm the required notice period with your lawyer"
                - "Draft the announcement, FAQ and support scripts"
                - "Brief the support team a week before the announcement"
            - name: Peak season readiness for supply and support
              description: |-
                ## Purpose
                Holiday shopping, summer travel or exam season can double demand while supply stays flat, and a marketplace that runs out of sellers or support staff at peak loses buyers for the year. A readiness plan eight weeks ahead, covering supply recruitment, fraud rules, support rota and system load, makes the busiest weeks the best ones.

                ## Milestones
                1. Last year's peak demand and supply gaps measured by segment.
                2. Supply recruitment and seller incentives planned for the gap.
                3. Support rota, fraud thresholds and payout timing reviewed for peak volume.
                4. A post-peak review written within two weeks of the season ending.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A peak readiness checklist completed eight weeks before the busiest month, with a post-peak review written within two weeks of its end."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Mark your marketplace's busiest weeks from last year's data"
                - "Start the peak readiness checklist eight weeks before the busiest month @recurring(yearly)"
                - "Plan seller recruitment for the segments that ran short last time"
                - "Write the post-peak review within two weeks of the season ending"
            - name: First trust and safety transparency report
              description: |-
                ## Purpose
                Publishing how many listings were removed, accounts suspended and disputes resolved shows users and regulators that trust work is real, and in some regions larger platforms are required to report it. Preparing the first report forces the team to agree definitions and fix gaps in record keeping.

                ## Milestones
                1. Report contents chosen: removals, suspensions, appeals, disputes and response times.
                2. Definitions and data sources agreed for every figure.
                3. A draft reviewed by legal and the trust owner.
                4. The report published, with a yearly date set for the next one.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A transparency report published with defined figures for removals, suspensions, appeals and disputes, and the next edition scheduled."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose the figures the first transparency report will include"
                - "Check each figure can be counted reliably from your records"
                - "Ask the agent to draft the report narrative from the agreed figures"
                - "Prepare the next transparency report from the year's records @recurring(yearly)"
            - name: Annual seller community day
              description: |-
                ## Purpose
                Top sellers often know the marketplace better than the product team does, and meeting them once a year, in person or online, builds loyalty no newsletter can. A seller day with roadmap previews, workshops and open question time also surfaces problems that never reach support.

                ## Milestones
                1. Format, date and invite list chosen, with both top sellers and new sellers included.
                2. An agenda built around what sellers asked for, not only what the team wants to announce.
                3. The day held, with questions and complaints recorded.
                4. A follow-up sent within two weeks saying what will change.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A seller day held with recorded questions, followed within two weeks by a written response on what will change."
                cadence: cyclic
              tasks:
                - "Ask ten top sellers what they would want from a seller day"
                - "Choose the format, date and invite list"
                - "Record every question and complaint raised on the day"
                - "Plan the next seller community day @recurring(yearly)"
            - name: Concierge marketplace for a solo founder
              description: |-
                ## Purpose
                Solo founders can test a marketplace idea before writing any matching code by doing the matching personally: taking requests by form or message, finding a provider by phone and handling payment by invoice. Running this concierge version for four to six weeks proves whether both sides show up and what they will pay, on a budget of evenings and weekends.

                ## Milestones
                1. A simple request form and a list of fifteen willing providers.
                2. Twenty requests matched by hand, with time spent per match recorded.
                3. Prices paid and fees accepted written down for every transaction.
                4. A go, change or stop decision recorded from the results.

                ## Notes
                Track your own hours per match. If that number never falls, software will not save the model.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Twenty transactions matched by hand with time per match and fees recorded, followed by a written go, change or stop decision."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Set up a request form and a spreadsheet to log each match"
                - "Recruit fifteen providers who agree to take requests from you"
                - "Log the minutes you spend on every match"
                - "Write the go, change or stop decision after twenty matches"
            - name: Marketplace metrics pack for investors and the board
              description: |-
                ## Purpose
                Investors read marketplaces through a particular set of numbers: GMV and net revenue growth, take rate, liquidity, cohort retention on both sides and contribution margin. A founder who prepares a consistent pack, with definitions and the same layout every quarter, spends board meetings on decisions instead of arguments over what a number means.

                ## Milestones
                1. A one-page definitions sheet for every metric in the pack.
                2. Quarterly GMV, net revenue, take rate and contribution margin shown for at least four quarters.
                3. Buyer and seller cohort retention charts included.
                4. The pack reviewed by a finance adviser before it first goes out.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A quarterly metrics pack with definitions, four quarters of history and cohort retention for both sides, sent on schedule."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the metrics your investors or board ask about most"
                - "Write a definitions sheet for each metric"
                - "Build buyer and seller cohort retention charts"
                - "Update and send the marketplace metrics pack @recurring(quarterly)"
            - name: B2B marketplace buyer requirements
              description: |-
                ## Purpose
                Business buyers purchase differently from consumers: purchase orders, approval chains, invoice terms, tax documents and supplier vetting by their procurement team. A B2B marketplace that ignores these loses the large accounts that would make it work, so the requirements need capturing early from real procurement teams.

                ## Milestones
                1. Five procurement or operations buyers interviewed about how they buy.
                2. Requirements listed: invoicing, payment terms, approvals, multiple users and supplier documents.
                3. Requirements ranked by how many deals each one blocks.
                4. The top two built, or offered by hand, to the first business accounts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ranked B2B buyer requirements from five procurement interviews, with the top two available to the first business accounts."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Interview five procurement or operations buyers about their buying process"
                - "List the documents and approvals their companies need before paying a supplier"
                - "Rank each requirement by the deals it blocks"
                - "Offer the top two by hand to your first business accounts"
            - name: Licensed service provider checks
              description: |-
                ## Purpose
                Services marketplaces for trades, care, tutoring or wellness often connect buyers with providers who need a licence, insurance or background check, and buyers assume the platform verified them. Deciding what to check, how often to recheck and what to show buyers protects people and the platform when a provider's status lapses.

                ## Milestones
                1. Licences, insurance and checks relevant to each service category listed with a qualified adviser.
                2. A verification step and document store in place for providers in those categories.
                3. Expiry dates tracked, with reminders before they lapse.
                4. Wording agreed for what the platform does and does not verify, shown to buyers.

                ## Notes
                Be precise in what you tell buyers. Calling a provider verified when only an ID was checked creates expectations you cannot meet.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every provider in a licensed category has current documents on file, with expiries tracked and buyer-facing wording agreed."
                cadence: rolling
              tasks:
                - "List the service categories where a licence or insurance is expected"
                - "Confirm the required checks per category with a qualified adviser"
                - "Re-check expiring licences and insurance certificates @recurring(monthly:18)"
                - "Write the buyer-facing wording for what you verify"
            - name: Ownership split for a small marketplace team
              description: |-
                ## Purpose
                In a team of five to fifteen, supply growth, demand growth and trust work tend to land on whoever shouts loudest, and one side quietly gets neglected. Giving each side and trust a named owner with their own metrics, plus a shared liquidity goal, keeps the team from improving one side at the other's cost.

                ## Milestones
                1. Owners named for supply, demand, and trust and safety.
                2. Two or three metrics assigned to each owner, plus one shared liquidity goal.
                3. Decisions that affect both sides given a review step with both owners.
                4. Ownership revisited after one quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Named owners for supply, demand and trust, each with metrics and a shared liquidity goal, reviewed after one quarter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List who currently does supply, demand and trust work, even informally"
                - "Name one owner per side and one for trust"
                - "Assign metrics to each owner and agree the shared liquidity goal"
                - "Add a both-sides review step for changes to fees, ranking or policy"
            - name: Peer-to-peer rental deposits and damage claims
              description: |-
                ## Purpose
                When people rent cars, tools, homes or equipment from each other, damage and late returns are the disputes that drive both sides away. Designing deposits, check-in and check-out photos, claim windows and a fair way to assess damage gives owners and renters the confidence to transact again.

                ## Milestones
                1. Photo check-in and check-out built into each rental.
                2. Deposit or hold amounts set by item value, agreed with the payments provider.
                3. Claim windows and evidence rules published to both sides.
                4. Damage claims and outcomes tracked for one quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Rentals use photo check-in and check-out with published claim rules, and one quarter of claims and outcomes is recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the last fifteen damage complaints and note what evidence was missing"
                - "Add photo check-in and check-out to the rental flow"
                - "Agree deposit or hold limits with your payments provider"
                - "Publish claim windows and evidence rules for owners and renters"
            - name: Switchback and cluster experiment design
              description: |-
                ## Purpose
                Pricing, matching and fee changes that touch shared supply give biased answers in user-level tests, and the fix is to randomise by time window, region or market cluster instead. Designing these experiments well, with enough clusters and periods for a real result, is how mature marketplace teams avoid shipping false wins.

                ## Milestones
                1. The change to test chosen and the reason user-level testing fails for it written down.
                2. A randomisation unit chosen: time windows, regions or market clusters.
                3. Sample size and test length estimated with an analyst.
                4. The experiment run and its result compared with what a user-level test showed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One switchback or cluster experiment completed with an analysis plan written before launch and its result recorded."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Pick one planned change that would compete for shared supply"
                - "Choose time windows, regions or clusters as the randomisation unit"
                - "Estimate test length and number of units with an analyst"
                - "Write the analysis plan before the experiment starts"
            - name: Cross-side network effect measurement
              description: |-
                ## Purpose
                Claiming that more sellers bring more buyers is easy; measuring by how much is rare and valuable. Estimating how buyer conversion responds to added supply in a segment, and how seller earnings respond to added demand, tells you which side to grow next and when growth stops helping.

                ## Milestones
                1. Segments chosen where supply or demand changed sharply for a reason unrelated to performance.
                2. Buyer conversion plotted against supply density for those segments.
                3. The point of diminishing returns estimated, with its uncertainty stated.
                4. Acquisition targets revised using the estimate.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An estimate of how buyer conversion responds to supply density, with diminishing returns noted, used to revise acquisition targets."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Find segments where supply jumped or fell for an outside reason"
                - "Plot buyer conversion against active supply in those segments"
                - "Estimate where extra supply stops lifting conversion"
                - "Revise acquisition targets using the estimate"
            - name: Supply concentration and power seller risk
              description: |-
                ## Purpose
                Many marketplaces find that a few dozen sellers produce half of GMV, and when one of them leaves, launches its own site or moves to a rival, a category can empty overnight. Measuring concentration and planning for the departure of the largest sellers turns a hidden dependency into a managed risk.

                ## Milestones
                1. Share of GMV from the top 1%, 5% and 10% of sellers measured by category.
                2. Departure risk of the ten largest sellers assessed and recorded.
                3. Mitigations planned, such as account management, exclusive tools or wider supply.
                4. Concentration reviewed every quarter.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Concentration measured per category each quarter, with a risk register entry and mitigation for each of the ten largest sellers."
                cadence: cyclic
              tasks:
                - "Calculate the share of GMV from the top 1%, 5% and 10% of sellers"
                - "Assess the departure risk of the ten largest sellers"
                - "Plan one mitigation for each high-risk dependency"
                - "Update supply concentration figures and the risk register @recurring(quarterly)"
---

# Two-Sided Marketplace Products

This area is for founders and product teams building marketplaces that connect buyers and sellers, whether the supply is goods, services or rentals. It starts with the foundations (the constrained side, the fee flow, a first atomic market, liquidity and unit economics, trust policies, payments, seller onboarding and the first 100 transactions), then the operating routines that keep supply, demand and trust in balance, the knowledge a marketplace team needs, the decisions on fees, matching, cancellations and guarantees, the launches and seasons that need planning, the situations of solo founders, small teams, B2B and rental marketplaces, and finally the experiment design and concentration risk work of an experienced marketplace lead.

What repeats is a weekly health review and balance check, a daily fraud queue with a weekly loss review, monthly work on disputes, review integrity, stale listings, leakage, unit economics and seller updates, quarterly seller tiers, policy, regulation and concentration reviews, and a yearly peak season plan, transparency report and seller day. The Metrics log, Purchase decision, Product spec, Reading queue, Risk register and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
