---
id: founding-startups.two-sided-marketplace-launch
name: Two-Sided Marketplace Launch
description: "A marketplace launched one tight niche at a time: the atomic transaction defined, the hard side seeded first, liquidity measured weekly, trust and payments in place, and expansion only once the first market works."
category: business
version: 1.0.0
tags: [founding-startups, two-sided-marketplace-launch, founder, marketplace, chicken-and-egg, liquidity, trust-and-safety, network-effects]
author: Aurum Technology
starter_structure:
  templates:
    - feedback-themes
    - vendor
    - metrics-log
    - risk-register
    - reading-queue
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Two-Sided Marketplace Launch
          description: "Launching a marketplace by solving the chicken-and-egg problem, seeding one side first and building trust between buyers and sellers."
          projects:
            - name: Atomic transaction and marketplace thesis
              description: |-
                ## Purpose
                Every marketplace rests on one repeatable unit: a dog walk booked, a pallet of produce sold, a shift filled. Naming that unit, who is on each side of it and why it is broken today gives the founding team one sentence to test every feature, fee and hire against.

                ## Milestones
                1. The atomic transaction written in one sentence with the buyer, the seller and the thing exchanged.
                2. The current way people complete that transaction described, including its cost and friction.
                3. The reason a marketplace beats a directory or a single supplier stated plainly.
                4. The thesis agreed by every co-founder and dated.

                ## Notes
                If you cannot name the transaction, you probably have two or three businesses in one. Pick the one that happens most often.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated one-page thesis naming the atomic transaction, both sides and the friction removed, agreed by all co-founders."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the single transaction your marketplace will match in one sentence"
                - "Describe how buyers and sellers complete it today and what it costs them"
                - "List three reasons a marketplace beats a simple directory for this"
                - "Review the thesis with your co-founder and date it"
            - name: Choosing the side to seed first
              description: |-
                ## Purpose
                Most marketplaces have one constrained side whose presence pulls the other in: drivers before riders, hosts before guests, suppliers before procurement teams. Deciding which side is harder to win, and committing to it for the first months, stops the team splitting thin effort across both.

                ## Milestones
                1. Both sides scored on scarcity, acquisition cost and how much each needs the other.
                2. The constrained side named, with the evidence behind the choice.
                3. A rule written for how much time goes to each side in the first 90 days.
                4. The signal that would make you switch focus agreed in advance.

                ## Notes
                Supply is usually the hard side, but not always. In some B2B markets a single committed buyer recruits suppliers for you.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision naming the side to seed first, the reasons, the time split for 90 days and the switch signal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Score buyers and sellers on scarcity, acquisition cost and dependence"
                - "Talk to two marketplace founders about which side they seeded first"
                - "Write the time split between the two sides for the first 90 days"
                - "Agree the evidence that would make you change the seeded side"
            - name: Drawing a tight launch boundary
              description: |-
                ## Purpose
                Liquidity is local: a thousand listings spread across a country feel empty, while eighty in one neighbourhood or one profession feel busy. Drawing the smallest boundary where a buyer can reliably find a match lets you reach density with a founder's budget.

                ## Milestones
                1. Three candidate boundaries listed, each by geography, category or community.
                2. The likely number of active buyers and sellers estimated inside each.
                3. One boundary chosen, with the edges written down so the team can say no to everything outside.
                4. A short note on what would justify widening the boundary.

                ## Notes
                Resist the urge to accept users outside the boundary because they asked. A waitlist for other areas is fine; serving them badly is not.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written launch boundary with edges, estimated participant counts and the condition for widening it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List three possible launch boundaries by place, category or community"
                - "Estimate buyers and sellers inside each from public data or groups"
                - "Choose one boundary and write its edges on a single page"
                - "Set up a waitlist form for people outside the boundary"
            - name: Defining liquidity and its launch target
              description: |-
                ## Purpose
                Liquidity means a buyer who arrives finds what they want and completes it, and a seller who lists gets used. Choosing one or two liquidity measures for your transaction, such as the share of requests filled within 24 hours or the share of listings booked within 30 days, gives the launch a finish line instead of a vague sense of traction.

                ## Milestones
                1. One demand-side measure and one supply-side measure defined in words and as a formula.
                2. The data needed to calculate each identified and being captured.
                3. A launch target set for each measure inside the launch boundary.
                4. The definitions saved where the whole team can see them.

                ## Notes
                Fill rate and time to match matter more than total sign-ups. A marketplace with 5,000 sign-ups and a 10 percent fill rate is not working yet.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two written liquidity definitions with formulas, data sources and a numeric launch target for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write what a successful match means for a buyer and for a seller"
                - "Turn each into a measure with a formula and a time window"
                - "Check your product logs or spreadsheet capture the data for both"
                - "Set a launch target for each and share it with the team"
            - name: Supply-side interviews on why sellers would list
              description: |-
                ## Purpose
                Sellers already have ways to find customers, and they will not maintain another profile unless it pays. Fifteen interviews with the people you hope to list, about where their work comes from, what they pay to get it and what they hate about it, show what would make your platform worth their time.

                ## Milestones
                1. Fifteen interviews held with sellers inside the launch boundary.
                2. Current customer sources and their cost captured for each seller.
                3. The top three reasons a seller would list, and the top three objections, grouped into themes.
                4. A short list of sellers willing to join an early pilot.

                ## Notes
                Start from the **Feedback themes** template. Ask about the last job they won and how, not whether they would use your idea.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fifteen seller interviews summarised into themes, with at least five sellers named as willing pilot participants."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List 25 sellers inside the launch boundary to approach"
                - "Write six questions about how they win work today"
                - "Hold and record fifteen supply-side interviews"
                - "Ask the agent to group the interview notes into reasons and objections"
            - name: Demand-side interviews on where buyers search today
              description: |-
                ## Purpose
                Buyers rarely go looking for a marketplace; they go looking for a plumber, a supplier or a room. Interviewing ten to fifteen buyers about the last time they searched shows the words they use, where they look first and what makes them trust a stranger enough to pay.

                ## Milestones
                1. Twelve buyer interviews held about a recent real purchase.
                2. The search channels and words buyers used recorded.
                3. The trust signals buyers relied on listed, such as reviews, referrals or credentials.
                4. A note on what a buyer would need to see in the first visit to transact.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twelve buyer interviews summarised with search channels, search words and the trust signals that led to a purchase."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Recruit twelve buyers who bought this service or item in the last three months"
                - "Ask each to walk through their last search step by step"
                - "Record the exact search words and channels they used"
                - "Write the first-visit trust checklist from the interview notes"
            - name: Concierge matching test run by hand
              description: |-
                ## Purpose
                Before building search, profiles and payments, you can match buyers and sellers yourself with a spreadsheet, a form and a messaging app. Running twenty to fifty hand-made matches proves people will transact through you, shows where matches fail and gives you real prices and timings to design around.

                ## Milestones
                1. A request form and a seller spreadsheet live inside the launch boundary.
                2. At least twenty matches made by hand and followed to completion or failure.
                3. Each failed match tagged with the reason it failed.
                4. A written list of the steps worth automating first, ranked by time spent.

                ## Notes
                Charge real money in the test if you can, even through a payment link. Free matches tell you little about willingness to pay.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Twenty or more hand-made matches logged with outcome, price and failure reason, and a ranked automation list written."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Build a request form and a seller spreadsheet with availability"
                - "Invite your pilot sellers and five interviewed buyers to try it"
                - "Log every match with price, time to match and outcome"
                - "Rank the manual steps by hours spent to decide what to build first"
            - name: First take rate and fee model
              description: |-
                ## Purpose
                Marketplaces earn by charging one or both sides: a commission, a booking fee, a listing fee or a subscription. Choosing a first model from the concierge test data, with the reasoning written down, means you can change it later without the team relitigating why it was set.

                ## Milestones
                1. Commission, booking fee, listing fee and subscription models compared for your transaction.
                2. The take rate that comparable marketplaces charge gathered from public sources.
                3. A first fee model chosen, with who pays what and when.
                4. The point at which the fee would push sellers to take deals off the platform estimated.

                ## Notes
                A high take rate on a low-frequency, high-value transaction invites off-platform deals. Value-added services often justify the fee better than matching alone.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written fee model stating who pays, how much and when, with the comparison and the leakage risk noted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect the published fees of five comparable marketplaces"
                - "Calculate seller earnings per transaction under each fee model"
                - "Ask three pilot sellers how they would react to each option"
                - "Write the chosen fee model and the reasoning in one page"
            - name: Marketplace terms and seller agreement with a lawyer
              description: |-
                ## Purpose
                Sitting between strangers, a marketplace's terms decide who is responsible when a job goes wrong, a payment is reversed or a review is disputed. Briefing a lawyer who works with platforms, with your transaction and fee model in hand, gets buyer terms, a seller agreement and a privacy notice written for how you actually operate.

                ## Milestones
                1. A brief for the lawyer covering the transaction, fees, payments and disputes.
                2. Buyer terms, seller terms and a privacy notice drafted and reviewed.
                3. The platform's role and responsibilities stated in plain language in each.
                4. Final versions published and acceptance captured at sign-up.

                ## Notes
                Copying another platform's terms copies its legal position, which may not match your country or your model. Treat any template only as a list of topics for the lawyer.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Lawyer-reviewed buyer terms, seller agreement and privacy notice published, with acceptance recorded at sign-up."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a two-page brief on how a transaction, payment and dispute flow"
                - "Ask two founders for a lawyer who has drafted platform terms"
                - "Review the drafts against the concierge test edge cases"
                - "Add a terms acceptance step to buyer and seller sign-up"
            - name: Marketplace payments and payout provider choice
              description: |-
                ## Purpose
                Taking money from one party and paying another, minus a fee, is regulated in most countries, and ordinary payment accounts often do not allow it. Choosing a provider built for platforms, with seller identity checks, split payouts and holds for disputes, keeps the money flow legal and the support queue short.

                ## Milestones
                1. Requirements written: currencies, payout timing, holds, refunds and seller verification.
                2. Three platform payment providers compared on fees, countries and onboarding effort.
                3. One provider chosen and the seller onboarding flow tested end to end.
                4. Payout timing and fees explained on the seller help page.

                ## Notes
                Start from the **Vendor** template. Ask each provider directly whether your fund flow needs a licence in your country; do not assume.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform payment provider chosen against written requirements, with one test transaction paid out to a real seller."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write your payment requirements on one page"
                - "Compare three platform payment providers on fees and supported countries"
                - "Run a test payment and payout with one pilot seller"
                - "Publish a seller help page on payout timing and fees"
            - name: Weekly liquidity review
              description: |-
                ## Purpose
                Once the marketplace is live, the liquidity numbers move every week, and a dip in fill rate in one category can hide inside healthy totals. A 30-minute Monday review of the two liquidity measures, unmet demand and idle supply keeps the team working on the side that is short this week.

                ## Milestones
                1. A one-page liquidity dashboard with both measures by category or zone.
                2. Unmet requests and idle listings counted each week.
                3. One action per week assigned to the weaker side and checked the following Monday.
                4. Twelve consecutive weeks of reviews logged.

                ## Notes
                Start from the **Metrics log** template. Look at medians as well as averages: one busy seller can make a whole category look healthy.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly liquidity entries, each with both measures and one assigned action."
                cadence: rolling
              tasks:
                - "Build a one-page dashboard showing both liquidity measures by zone"
                - "Review fill rate, unmet requests and idle listings @recurring(weekly:mon)"
                - "Assign one action to whichever side was short this week"
                - "Compare this quarter's liquidity with the launch target @recurring(quarterly)"
            - name: Supply onboarding pipeline
              description: |-
                ## Purpose
                Recruiting sellers is a sales pipeline with its own stages: contacted, interested, signed up, verified, listed, first sale. Tracking each seller through those stages shows where they stall, often at verification or an empty profile, and lets you fix that step before buying more leads.

                ## Milestones
                1. Pipeline stages defined from first contact to first sale.
                2. Every seller lead tracked in one place with their current stage.
                3. The conversion rate between each stage measured for four weeks.
                4. The weakest stage improved and its conversion rechecked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A seller pipeline with stage conversion rates measured for four weeks and one stage measurably improved."
                cadence: rolling
              tasks:
                - "Write the six stages from first contact to first sale"
                - "Move every current seller lead into one pipeline view"
                - "Follow up sellers stuck at verification or empty profile @recurring(weekly:tue)"
                - "Pick the weakest stage and test one change to it"
            - name: Listing quality standards and delisting rules
              description: |-
                ## Purpose
                Buyers judge the whole marketplace by the worst listing they see. Written standards for photos, descriptions, response times and accuracy, plus a fair process for warning and removing sellers who fall short, keep quality high without arbitrary decisions.

                ## Milestones
                1. A listing standard published covering photos, description, price and availability.
                2. A response time expectation set for sellers and shown on their dashboard.
                3. A three-step warning and delisting process written and shared with sellers.
                4. A monthly sample of listings checked against the standard.

                ## Notes
                Apply the rules to your best early sellers too. Exceptions for friends of the founders are noticed quickly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Published listing standards and delisting process, with a monthly sample check of at least 20 listings logged."
                cadence: rolling
              tasks:
                - "Draft a listing standard from your five best and five worst listings"
                - "Write the warning and delisting process in three steps"
                - "Check a sample of 20 listings against the standard @recurring(monthly:12)"
                - "Email sellers whose listings fall short with a specific fix"
            - name: Trust and safety incident queue
              description: |-
                ## Purpose
                Scams, no-shows, harassment and unsafe listings will happen, and how quickly the platform responds decides whether either side comes back. A single incident queue with severity levels, response times and an owner turns reports from scattered messages into cases that are closed and learned from.

                ## Milestones
                1. One reporting route for buyers and sellers, with every report landing in one queue.
                2. Severity levels defined with a response time for each.
                3. Serious incidents escalated to a founder within the hour, with a written playbook.
                4. Monthly incident themes reviewed and one product fix chosen.

                ## Notes
                Start from the **Risk register** template. Anything involving physical safety or a threat goes to the police or emergency services first; the platform process comes second.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every incident logged with severity, response time and outcome, and 90 percent met within the agreed response time for a month."
                cadence: rolling
              tasks:
                - "Set up one reporting form that feeds a single incident queue"
                - "Write severity levels and a response time for each"
                - "Triage new reports and assign an owner to each @recurring(daily)"
                - "Write the playbook for a serious safety incident"
            - name: Leakage and off-platform deal watch
              description: |-
                ## Purpose
                Once a buyer and seller have met, both can save the fee by dealing directly next time. Watching repeat pairs, messages that share phone numbers and sellers whose bookings suddenly drop shows how much value is leaking, and whether the answer is better features rather than stricter rules.

                ## Milestones
                1. The share of repeat buyer and seller pairs measured over time.
                2. Contact-sharing in messages detected and counted, within your privacy notice.
                3. The reasons sellers give for going direct collected from five conversations.
                4. One on-platform benefit added that makes staying worth the fee.

                ## Notes
                Blocking phone numbers rarely stops leakage. Payment protection, scheduling and insurance that only work on the platform usually do more.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly leakage estimate logged for three months, with one retention feature shipped and its effect on repeat bookings measured."
                cadence: rolling
              tasks:
                - "Measure how often the same buyer and seller transact again"
                - "Ask five sellers privately why some clients book them directly"
                - "Review the repeat-pair rate and contact-sharing count @recurring(monthly:18)"
                - "Choose one on-platform benefit to build for repeat pairs"
            - name: Supply and demand balance by zone
              description: |-
                ## Purpose
                Even inside a small launch boundary, one zone or category can be flooded with sellers while another turns buyers away. A weekly look at requests against available supply, broken down by zone, time of day or category, tells you where to recruit next and where to pause seller sign-ups.

                ## Milestones
                1. Requests and available supply counted by zone or category each week.
                2. A simple ratio chosen that signals too little or too much supply.
                3. Recruitment and marketing effort moved to match the gaps.
                4. A waitlist in place for sellers in oversupplied zones.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of zone-level supply and demand ratios logged, with recruitment effort redirected at least twice."
                cadence: rolling
              tasks:
                - "Split requests and active sellers by zone or category"
                - "Choose the ratio that flags a shortage or a glut"
                - "Check zone ratios and move recruitment effort to the gaps @recurring(weekly:thu)"
                - "Open a seller waitlist for any oversupplied zone"
            - name: Reviews and ratings health check
              description: |-
                ## Purpose
                Ratings on most marketplaces drift upwards until nearly everyone has five stars and the score tells buyers nothing. Checking review volume, the rating spread and how often reviews are left on both sides keeps the reputation system useful, and catches fake or traded reviews early.

                ## Milestones
                1. The share of completed transactions that receive a review measured for each side.
                2. The rating distribution checked for inflation.
                3. Suspicious review patterns, such as bursts from new accounts, flagged and investigated.
                4. One change made to raise review rates or make them more informative.

                ## Notes
                Double-blind reviews, where neither side sees the other's review until both submit, tend to give more honest ratings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly ratings report for three months covering review rate, rating spread and flagged reviews, with one change shipped."
                cadence: rolling
              tasks:
                - "Measure review rates for buyers and sellers separately"
                - "Chart the rating spread for the last three months"
                - "Review rating spread and flag suspicious review bursts @recurring(monthly:22)"
                - "Test a reminder or double-blind review change"
            - name: Disputes and refunds handling routine
              description: |-
                ## Purpose
                When a buyer says the item never arrived and the seller says it did, both are your customers. A written dispute process with evidence rules, a decision deadline and a consistent refund policy lets a small team settle cases fairly and quickly, and shows which sellers or categories cause most of them.

                ## Milestones
                1. A dispute policy published with what evidence each side should provide.
                2. A decision deadline set and met for new disputes.
                3. Refunds, partial refunds and payout holds recorded against each case.
                4. A monthly summary of dispute rate by category and seller.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every dispute decided within the published deadline for a month, with a monthly dispute rate by category logged."
                cadence: rolling
              tasks:
                - "Write the dispute policy and the evidence each side should send"
                - "Work through open disputes and record each decision @recurring(weekly:wed)"
                - "Summarise dispute rate by category and seller @recurring(monthly:5)"
                - "Contact sellers with repeated disputes about a fix"
            - name: Top seller cohort calls
              description: |-
                ## Purpose
                In most marketplaces a small group of sellers completes a large share of transactions, and losing two or three of them can undo months of growth. A monthly call with your top sellers, as a group or one by one, surfaces problems before they leave and gives you the best product feedback on the supply side.

                ## Milestones
                1. The top 10 percent of sellers by completed transactions identified.
                2. A monthly call held with that group and notes shared back to them.
                3. Each request logged with a yes, a no or a later, and the reason.
                4. Retention of the top cohort tracked over six months.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Six monthly top-seller calls held with notes and logged requests, and top-cohort retention reported each month."
                cadence: rolling
              tasks:
                - "List the sellers behind the top 10 percent of completed transactions"
                - "Invite them to a 45-minute call with the founders"
                - "Hold the top seller call and send notes back @recurring(monthly:8)"
                - "Reply to every request with a yes, a no or a later"
            - name: Fraud signals monitoring
              description: |-
                ## Purpose
                Fraudsters find new marketplaces quickly: fake sellers taking payment for goods that do not exist, stolen cards used to buy, and accounts created to farm referral credits. A weekly look at a short list of fraud signals, with clear rules for holds and bans, catches patterns before they cost the platform its payment provider.

                ## Milestones
                1. Five or six fraud signals chosen, such as chargeback rate, new seller payout requests and duplicate devices.
                2. Rules written for when to hold a payout or suspend an account.
                3. Chargeback rate tracked weekly against your payment provider's limits.
                4. A quarterly review of fraud losses and rule changes.

                ## Notes
                Payment providers can close a platform's account if chargebacks stay high. Know their threshold before you need it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly fraud signal checks logged for two months, with chargeback rate kept under the provider's stated limit."
                cadence: rolling
              tasks:
                - "Ask your payment provider for its chargeback threshold"
                - "Write the hold and suspension rules for each fraud signal"
                - "Check fraud signals and act on flagged accounts @recurring(weekly:fri)"
                - "Review fraud losses and update the rules @recurring(quarterly)"
            - name: Reading how marketplaces solved the cold start
              description: |-
                ## Purpose
                The cold-start problem has been solved in many different ways: seeding supply by hand, building a tool for one side, piggybacking on an existing community, or paying the hard side a guarantee. Reading eight to ten well-documented launch stories, and noting the tactic, the market and why it worked, gives you a menu of options instead of one copied playbook.

                ## Milestones
                1. A reading list of eight to ten marketplace launch case studies or founder accounts.
                2. Each story summarised by tactic, market type and the condition that made it work.
                3. The three tactics that fit your transaction and boundary shortlisted.
                4. A one-page note shared with the team on which tactic to try first.

                ## Notes
                Start from the **Reading queue** template. Many famous tactics worked because of a specific moment or market; note that before copying.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight or more launch stories summarised by tactic and condition, with three tactics shortlisted for your market."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a reading list of ten marketplace launch stories"
                - "Summarise each by tactic, market type and why it worked"
                - "Ask the agent to compare the tactics against your launch boundary"
                - "Shortlist three tactics and share the note with the team"
            - name: Network effects and defensibility in marketplaces
              description: |-
                ## Purpose
                Marketplace network effects are often weaker than founders expect: local networks can be copied city by city, and sellers happily list on three platforms at once. Learning the difference between local and global network effects, and what else defends a marketplace, sharpens both strategy and the answer investors will ask for.

                ## Milestones
                1. Local, global and cross-side network effects explained in your own words.
                2. Your marketplace classified by which of these it has.
                3. Other defences listed, such as workflow tools, data, brand and payments.
                4. A one-paragraph defensibility statement written for your company.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written explanation of the network effects your marketplace has and a defensibility statement reviewed by an advisor."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read two essays on marketplace network effects"
                - "Write which kind of network effect your marketplace has"
                - "List the non-network defences you could build"
                - "Draft a one-paragraph defensibility statement for an advisor"
            - name: Marketplace metrics vocabulary and definitions
              description: |-
                ## Purpose
                Gross merchandise value, net revenue, take rate, fill rate, repeat rate and supply utilisation are easy to confuse and easy to flatter. Writing a definition for each, as it applies to your transaction, means the team, the board and investors read the same numbers the same way.

                ## Milestones
                1. Ten core marketplace metrics defined for your transaction with formulas.
                2. Gross merchandise value and net revenue clearly separated in every report.
                3. Each metric linked to its data source.
                4. The definitions page reviewed by someone who has run a marketplace.

                ## Notes
                Never report gross merchandise value as revenue. Investors notice, and it undermines every other number you show.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A definitions page covering ten marketplace metrics with formulas and data sources, reviewed by an experienced operator."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the ten marketplace metrics you will report"
                - "Write a formula and data source for each"
                - "Separate gross merchandise value from net revenue in your dashboard"
                - "Ask an experienced marketplace operator to check the definitions"
            - name: Search ranking and matching basics
              description: |-
                ## Purpose
                Which seller a buyer sees first decides who gets work, and therefore who stays. Learning the basics of ranking by relevance, distance, quality and availability, and of the fairness trade-offs between new and established sellers, lets you design matching on purpose instead of by database order.

                ## Milestones
                1. The factors that should influence ranking for your transaction listed and weighted.
                2. A plan for giving new sellers some exposure without hurting buyers.
                3. A simple first ranking rule written and implemented.
                4. Click and conversion data captured to judge future ranking changes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written first ranking rule with weighted factors and a new-seller exposure plan, implemented and logging conversion data."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List what a buyer cares about most when choosing a seller"
                - "Weight each factor and write a first ranking rule"
                - "Decide how new sellers get a fair share of early exposure"
                - "Log clicks and bookings by ranking position"
            - name: Selling to supply on the phone and in person
              description: |-
                ## Purpose
                Early supply is almost always recruited one seller at a time, by founders who call, visit and follow up. Practising a short pitch built on what sellers said in interviews, with honest answers to their usual objections, raises the share of conversations that end in a live listing.

                ## Milestones
                1. A 60-second seller pitch written from interview language.
                2. Answers written for the five most common seller objections.
                3. Thirty recruitment conversations held and outcomes logged.
                4. Pitch conversion rate measured and the pitch revised once.

                ## Notes
                Offer to create the seller's first listing for them during the call. An empty profile is where most recruited sellers are lost.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Thirty logged recruitment conversations with a measured conversion rate to live listing and one revised pitch."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a 60-second pitch using words sellers used in interviews"
                - "Write answers to the five objections you hear most"
                - "Hold thirty calls or visits and log each outcome"
                - "Revise the pitch after the first fifteen conversations"
            - name: Running a seller community
              description: |-
                ## Purpose
                On a young marketplace, sellers often feel alone and unsure whether it is worth the effort. A small, well-run community space where they share tips, ask questions and hear product news first builds loyalty and cuts support questions, if someone moderates it with care.

                ## Milestones
                1. One community space chosen and opened to active sellers.
                2. Community rules written and pinned.
                3. A regular update posted with product news and seller wins.
                4. Common questions turned into help articles.

                ## Notes
                Expect complaints to be public. Answer them openly and quickly; a deleted complaint becomes a bigger one elsewhere.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "An active seller community with pinned rules, monthly updates for three months and five help articles written from its questions."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a community space your sellers already use"
                - "Write and pin five community rules"
                - "Post a seller update with product news and wins @recurring(monthly:15)"
                - "Turn the five most asked questions into help articles"
            - name: Platform rules on worker status, tax and consumer law
              description: |-
                ## Purpose
                Marketplaces are increasingly regulated: how much control you have over sellers can affect whether they count as employees, many countries now require platforms to report seller earnings to the tax authority, and consumer law may make you responsible for listings. Mapping which rules apply in your launch country, with a lawyer and an accountant, keeps product decisions from creating liabilities.

                ## Milestones
                1. A list of questions on worker status, platform tax reporting and consumer protection for your country.
                2. Answers obtained from a lawyer and an accountant who know platforms.
                3. Product features that affect worker status, such as setting prices or schedules, flagged.
                4. Any reporting duties added to the operating calendar.

                ## Notes
                This is organisational preparation, not legal advice. The rules differ widely by country and change often, so date every answer you record.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated note of professional answers on worker status, tax reporting and consumer law for the launch country, with duties scheduled."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write your questions on worker status, tax reporting and consumer law"
                - "Book a session with a lawyer and an accountant who advise platforms"
                - "Flag product features that give the platform control over sellers"
                - "Add any seller earnings reporting deadlines to the calendar"
            - name: Single-player tool that brings supply in
              description: |-
                ## Purpose
                Sellers will join a tool that helps them today even when there are no buyers yet: booking software, inventory management or invoicing. Building a useful single-player tool for your supply side, then switching on the marketplace once enough sellers use it, is one of the most reliable ways around the cold start.

                ## Milestones
                1. The daily task your sellers most want help with identified from interviews.
                2. A minimal tool built that does that task well without any buyers.
                3. Fifty sellers using the tool weekly inside the launch boundary.
                4. The point at which buyer access is switched on agreed.

                ## Notes
                The tool must be good enough on its own. A weak tool used only as bait loses sellers before the marketplace opens.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A single-player seller tool with fifty weekly active sellers and a written trigger for opening buyer access."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Pick the daily seller task with the most pain from interview notes"
                - "Sketch the smallest tool that handles that task end to end"
                - "Onboard ten pilot sellers and watch them use it"
                - "Set the weekly active seller count that opens buyer access"
            - name: Hard-side incentives and earnings guarantees
              description: |-
                ## Purpose
                Paying the hard side to show up, through guaranteed earnings, waived fees or sign-up bonuses, can create liquidity before demand arrives, but it can also attract people who leave when the money stops. Designing incentives with a fixed budget, an end date and a link to real activity keeps the subsidy working for you.

                ## Milestones
                1. Incentive options compared, such as hourly guarantees, fee holidays and first-sale bonuses.
                2. A budget and end date set for the chosen incentive.
                3. Eligibility tied to activity, not just sign-up.
                4. Retention of subsidised sellers compared with others after the incentive ends.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written incentive plan with budget, end date and activity rules, and a post-incentive retention comparison completed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List three incentive options and their cost per active seller"
                - "Set a total budget and end date for the incentive"
                - "Write activity rules a seller must meet to qualify"
                - "Compare retention of subsidised and unsubsidised sellers afterwards"
            - name: Managed versus open marketplace model
              description: |-
                ## Purpose
                An open marketplace lets anyone list and keeps costs low; a managed one vets sellers, sets standards and sometimes sets prices, which costs more but can justify a higher take rate. Choosing where you sit on that line shapes hiring, margins and the trust buyers place in the platform.

                ## Milestones
                1. The open and managed options described for your transaction.
                2. Cost per transaction estimated for vetting, quality checks and support under each.
                3. Buyer willingness to pay for a managed experience tested with ten buyers.
                4. A model chosen and the reasons recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of open or managed model with cost per transaction estimates and buyer test results."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Describe what open and managed would look like for your transaction"
                - "Estimate vetting and support cost per transaction under each"
                - "Test buyer interest in a vetted option with ten buyers"
                - "Record the chosen model and the reasons"
            - name: Who sets the price on the platform
              description: |-
                ## Purpose
                Sellers setting their own prices, the platform setting a fixed price, or buyers and sellers bidding each produce very different behaviour. Choosing a pricing control that fits how often the transaction happens and how comparable the offers are makes matching faster and disputes rarer.

                ## Milestones
                1. Seller-set, platform-set, quote and auction options compared for your transaction.
                2. The effect on time to match and price disputes estimated from the concierge test.
                3. A pricing control chosen, with any legal concerns about setting prices checked.
                4. Pricing guidance written for sellers.

                ## Notes
                Setting prices for independent sellers can raise worker-status and competition-law questions in some countries. Check before you choose.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written pricing control decision with the comparison, legal check and published seller pricing guidance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare seller-set, platform-set, quote and auction pricing for your case"
                - "Review concierge test prices for spread and disputes"
                - "Check with your lawyer whether platform-set prices raise issues"
                - "Write a seller pricing guide for the chosen model"
            - name: Listing page and profile upgrade
              description: |-
                ## Purpose
                Buyers decide in seconds whether to trust a stranger, using photos, reviews, response time and credentials. Redesigning the listing and profile around the trust signals buyers named in interviews raises the share of views that turn into requests.

                ## Milestones
                1. The current view-to-request rate measured.
                2. The trust signals buyers named in interviews mapped to page elements.
                3. A new listing and profile layout shipped.
                4. View-to-request rate compared before and after over four weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new listing and profile layout shipped, with view-to-request rate compared over four weeks before and after."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Measure the current view-to-request rate on listings"
                - "Map each buyer trust signal to a place on the listing page"
                - "Ship the new layout to half of buyers first"
                - "Compare request rates after four weeks"
            - name: Fixing failed searches and zero-result queries
              description: |-
                ## Purpose
                Every search that returns nothing is a buyer telling you exactly what supply is missing. Logging zero-result and abandoned searches, then using them to recruit sellers or improve search, turns lost demand into a recruitment list.

                ## Milestones
                1. Zero-result and abandoned searches logged with the search terms.
                2. The top twenty failed searches grouped into missing supply or search faults.
                3. Search faults fixed, such as synonyms, spelling and location radius.
                4. Missing supply turned into a seller recruitment target list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The zero-result search rate cut by a measured amount over two months, with the failed-search list reviewed monthly."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Start logging every search that returns no results"
                - "Group the top twenty failed searches into supply gaps and search faults"
                - "Fix the three most common search faults"
                - "Review failed searches and update the recruitment list @recurring(monthly:26)"
            - name: Shortening time to first transaction for new buyers
              description: |-
                ## Purpose
                New buyers who do not complete a transaction in the first visit or two rarely return. Mapping each step from landing to completed purchase, and removing or deferring anything not needed for the first one, such as full profiles or account creation, raises first-week conversion.

                ## Milestones
                1. Every step from landing to first completed transaction mapped and timed.
                2. Drop-off measured at each step.
                3. Two steps removed, deferred or simplified.
                4. First-week buyer conversion compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two buyer onboarding steps removed or simplified, with first-week conversion measured before and after."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Map and time each step a new buyer takes to the first purchase"
                - "Measure drop-off between each step"
                - "Remove or defer the two steps with the worst drop-off"
                - "Compare first-week conversion over the next month"
            - name: Second city or category expansion criteria
              description: |-
                ## Purpose
                Expanding before the first market reaches liquidity spreads a small team across two half-working markets. Writing the criteria the first market must meet, and how you will score candidate cities or categories, turns expansion from an exciting idea into a decision with a test.

                ## Milestones
                1. Liquidity and retention thresholds the first market must hit written down.
                2. Candidate cities or categories listed and scored on size, similarity and competition.
                3. An expansion budget and team plan sketched.
                4. A go or wait decision recorded against the criteria.

                ## Notes
                A common rule of thumb is to expand only when the first market keeps its liquidity without founder effort for several months. Agree your own version.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written expansion criteria, a scored list of candidate markets and a recorded go or wait decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the thresholds the first market must hold before expanding"
                - "List five candidate cities or categories"
                - "Score each candidate on size, similarity and competition"
                - "Record a go or wait decision against the criteria"
            - name: First hundred live listings before demand opens
              description: |-
                ## Purpose
                Opening to buyers with a thin catalogue wastes the attention you worked hardest to get. Reaching a target number of live, good-quality listings inside the launch boundary before any buyer marketing, often around a hundred for a local marketplace, means early buyers find something on their first visit.

                ## Milestones
                1. A target listing count set for the launch boundary from liquidity estimates.
                2. Every listing checked against the listing standard.
                3. Coverage checked across the main zones or categories.
                4. The target reached and the buyer launch date confirmed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The target number of live listings reached across the main zones, each meeting the listing standard, before buyer marketing starts."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Set the listing target for each zone or category"
                - "Recruit sellers daily until each zone hits its target"
                - "Check every new listing against the standard"
                - "Confirm the buyer launch date once the target is met"
            - name: Opening demand in the seeded niche
              description: |-
                ## Purpose
                The day buyers can transact is when supply learns whether you were telling the truth. Planning the first two weeks of buyer acquisition inside the launch boundary, with daily liquidity checks and founders on hand to rescue failed matches, makes sure the first sellers get work fast.

                ## Milestones
                1. Two weeks of buyer acquisition planned inside the launch boundary only.
                2. Founder cover arranged to step in on any failed match.
                3. Liquidity measured daily for the first fourteen days.
                4. Every seller who received no work in the first two weeks contacted personally.

                ## Notes
                Keep broad launch publicity for later. A big announcement that sends buyers from outside the boundary creates disappointed users on both sides.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Demand opened in the launch boundary with daily liquidity logged for fourteen days and every idle seller contacted."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Choose two buyer channels that reach only the launch boundary"
                - "Set up a founder rota to handle failed matches by hand"
                - "Log fill rate and time to match every day for two weeks"
                - "Call every seller who has had no request by day fourteen"
            - name: Thousand-transaction retrospective
              description: |-
                ## Purpose
                A thousand completed transactions is enough data to see patterns that were invisible at fifty: which sellers drive repeat buyers, which categories fail, what share of buyers return. Pausing for a structured retrospective at that point resets priorities on evidence rather than early anecdotes.

                ## Milestones
                1. Repeat rate, fill rate and dispute rate calculated across the first thousand transactions.
                2. The best and worst performing categories or zones identified.
                3. Five lessons written with the evidence behind each.
                4. The next quarter's priorities revised from the lessons.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written retrospective on the first thousand transactions with five evidenced lessons and revised quarterly priorities."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export data on the first thousand transactions"
                - "Ask the agent to summarise repeat, fill and dispute rates by category"
                - "Write five lessons with the evidence behind each"
                - "Revise next quarter's priorities with the team"
            - name: In-person seller recruitment day
              description: |-
                ## Purpose
                For local and trade marketplaces, a single well-run event at a market hall, trade association meeting or co-working space can sign up more sellers than weeks of messages. Planning a recruitment day where sellers can see the product, ask questions and leave with a live listing turns interest into supply on the spot.

                ## Milestones
                1. A venue and partner chosen where your target sellers already gather.
                2. Invitations sent to the seller lead list and partner members.
                3. Laptops or tablets ready to create listings on the day.
                4. Sign-ups and live listings counted and followed up within a week.
              priority: low
              deadlineOffsetDays: 50
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A recruitment day held with a counted number of sign-ups and live listings, and every attendee followed up within seven days."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask a trade group or market where your sellers already gather to host"
                - "Invite your seller lead list and the partner's members"
                - "Prepare devices and a script to build listings on the spot"
                - "Follow up every attendee within a week"
            - name: Launching the second market
              description: |-
                ## Purpose
                A second city or category is where you learn whether your launch was a repeatable playbook or a one-off founder effort. Running the second launch from a written playbook, with a local lead and the same liquidity targets, tests that and shows which steps need founders and which do not.

                ## Milestones
                1. A launch playbook written from the first market's steps and timings.
                2. A local lead in place for the second market.
                3. Supply seeded to target before demand opens, following the playbook.
                4. Time to liquidity compared with the first market.

                ## Notes
                Expect the second market to differ in at least one important way, such as seller density or buyer habits. Note the differences as you find them.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The second market launched from a written playbook, with time to liquidity measured against the first market."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Write the first market's launch steps and timings as a playbook"
                - "Recruit or assign a local lead for the second market"
                - "Seed supply to the listing target before opening demand"
                - "Compare time to liquidity with the first market"
            - name: Launching a B2B marketplace with procurement buyers
              description: |-
                ## Purpose
                Business buyers bring larger, repeat orders but also purchase orders, invoices, payment terms and supplier approval processes. Founders of B2B marketplaces need to fit into procurement from day one, or buyers will meet suppliers on the platform and buy elsewhere.

                ## Milestones
                1. The procurement steps of five target buyers mapped, from supplier approval to payment.
                2. Invoicing and payment terms options chosen, such as net 30 through a financing partner.
                3. Supplier verification documents defined to meet buyer approval requirements.
                4. Three anchor buyers committed to placing orders through the platform.

                ## Notes
                One committed anchor buyer can recruit dozens of suppliers for you. Ask for an introduction to their existing supplier list.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Procurement steps mapped for five buyers, payment terms chosen and three anchor buyers committed in writing."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask five target buyers to walk you through their supplier approval"
                - "Decide how the platform will handle invoices and payment terms"
                - "List the documents a supplier must provide to be approved"
                - "Secure written commitments from three anchor buyers"
            - name: Local services marketplace with vetted providers
              description: |-
                ## Purpose
                Cleaners, tutors, carers and tradespeople enter people's homes, so buyers need more than reviews before they book. Founders of services marketplaces must design identity checks, background checks where lawful, insurance and scheduling around that trust gap from the start.

                ## Milestones
                1. The checks buyers expect for this service listed from interviews.
                2. A verification process chosen that is lawful in your country and affordable per provider.
                3. Insurance cover for providers and the platform reviewed with a broker.
                4. Scheduling, cancellation and no-show rules published.

                ## Notes
                Background check rules differ by country and by type of work. Use a provider that knows the local law, and get consent in writing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published provider vetting process, reviewed insurance cover and written cancellation and no-show rules."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the checks buyers said they expect before letting someone in"
                - "Compare two vetting providers that operate in your country"
                - "Ask an insurance broker about cover for providers and the platform"
                - "Publish scheduling, cancellation and no-show rules"
            - name: Peer-to-peer rental marketplace with damage cover
              description: |-
                ## Purpose
                Renting cameras, cars, tools or rooms between strangers raises one question above all: what happens when something is damaged or not returned. Peer-to-peer rental founders need a deposit, inspection and claims process, and usually insurance, before owners will list anything valuable.

                ## Milestones
                1. Deposit or hold rules set for each item value band.
                2. A photo check-in and check-out process designed for both sides.
                3. Insurance options compared with a broker for owners and renters.
                4. A claims process published with timelines.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Deposit rules, a photo inspection process, chosen insurance cover and a published claims process in place before the first rental."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Set deposit or payment hold rules by item value"
                - "Design photo check-in and check-out steps in the app"
                - "Ask a broker to compare cover for owners and renters"
                - "Write and publish the claims process with timelines"
            - name: Marketplace for a small island or thin market
              description: |-
                ## Purpose
                In a small country or island, such as one in the Caribbean, the whole market may hold only a few hundred sellers and a few thousand regular buyers. Liquidity is reachable quickly, but growth caps early, word of mouth matters more than ads and one bad incident is known by everyone within a week.

                ## Milestones
                1. The total addressable sellers and buyers estimated for the island or market.
                2. Local channels mapped, such as community groups, radio and trade associations.
                3. A plan for growth beyond the first market, such as neighbouring islands or extra categories.
                4. Payment options chosen that local buyers and sellers actually use.

                ## Notes
                Card payment coverage and payout options can be limited in small markets. Check bank transfer and local mobile money options early.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written small-market plan with participant estimates, local channels, local payment options and a growth route beyond the first market."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Estimate the total number of possible sellers and buyers in the market"
                - "List local groups, stations and associations where both sides gather"
                - "Check which payment methods local sellers can receive"
                - "Sketch the next market or category to add after the first"
            - name: Solo founder running marketplace operations
              description: |-
                ## Purpose
                Marketplaces create a lot of operational work, from seller verification to disputes and support on both sides, and a solo founder can drown in it. Deciding which tasks to automate, which to outsource and which to keep, with fixed hours for each, keeps operations from crowding out growth.

                ## Milestones
                1. Every recurring operations task listed with hours per week.
                2. Each task marked to automate, outsource or keep.
                3. Two tasks automated or handed to a part-time contractor.
                4. A weekly operations block set, with growth time protected.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly operations hours cut by a measured amount after two tasks were automated or outsourced, with a fixed operations block kept for a month."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Log every operations task and its time for one week"
                - "Mark each task to automate, outsource or keep"
                - "Automate or hand off the two biggest time sinks"
                - "Clear the operations backlog in one fixed block @recurring(weekly:fri)"
            - name: Liquidity evidence pack for seed investors
              description: |-
                ## Purpose
                Investors in marketplaces look past sign-ups to liquidity, repeat rate, take rate and how growth in one side lifts the other. Preparing a short evidence pack built on your own defined metrics, by cohort and by market, answers the questions marketplace investors ask before they ask them.

                ## Milestones
                1. Gross merchandise value, net revenue and take rate shown by month.
                2. Liquidity, repeat buyer rate and seller retention shown by cohort.
                3. Evidence of cross-side network effects in the first market presented.
                4. The pack reviewed by a founder who has raised for a marketplace.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A data pack of six charts or fewer covering value, revenue, liquidity and cohorts, reviewed by an experienced marketplace founder."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull monthly gross merchandise value, net revenue and take rate"
                - "Build cohort charts for repeat buyers and seller retention"
                - "Ask the agent to draft a one-page narrative from the charts"
                - "Get the pack reviewed by a founder who raised for a marketplace"
            - name: Buyer and seller cohort retention analysis
              description: |-
                ## Purpose
                Aggregate growth can hide a marketplace where each new cohort of buyers or sellers retains worse than the last. Analysing retention by sign-up month and acquisition channel, for both sides, shows which channels bring participants who stay and whether the network is getting stronger.

                ## Milestones
                1. Buyer and seller cohorts built by sign-up month and channel.
                2. Retention curves charted for at least six cohorts on each side.
                3. Channels ranked by retained participants rather than sign-ups.
                4. Acquisition spend shifted towards the best retaining channels.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Retention curves for six or more cohorts on each side, with channels ranked by retained participants and spend adjusted."
                cadence: rolling
              tasks:
                - "Tag every buyer and seller with sign-up month and channel"
                - "Chart retention curves for each side by cohort"
                - "Rank channels by participants still active after 90 days"
                - "Refresh cohort curves and adjust channel spend @recurring(quarterly)"
            - name: Surge and dynamic pricing mechanics
              description: |-
                ## Purpose
                When demand spikes at certain times or places, fixed prices leave buyers unmatched and sellers unmotivated. Designing a dynamic pricing or incentive mechanism, with caps and clear communication, can rebalance the market, but it can also feel like gouging if it is badly explained.

                ## Milestones
                1. Peaks of unmet demand identified by time and zone.
                2. A mechanism designed, such as a price multiplier or a seller bonus, with caps.
                3. Buyer and seller messaging tested for clarity and fairness.
                4. A pilot run in one zone with fill rate and complaints measured.

                ## Notes
                Some countries restrict price increases during emergencies. Check the rules and turn surge off during declared emergencies.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A capped dynamic pricing pilot run in one zone, with fill rate and complaint rate compared against a control period."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Find the times and zones with the most unmet requests"
                - "Design a capped price multiplier or seller bonus for peaks"
                - "Write the buyer and seller explanation and test it on five users"
                - "Pilot in one zone and compare fill rate and complaints"
            - name: Multi-tenanting sellers and competitive defence
              description: |-
                ## Purpose
                Most sellers list on several platforms at once and send their best work to whichever pays most reliably. Tracking which competitors your sellers also use, and what makes them prefer one platform, guides where to compete on tools, payouts or demand rather than on fees alone.

                ## Milestones
                1. The share of active sellers also listing on competing platforms estimated.
                2. The reasons sellers prefer one platform for certain work collected.
                3. Two or three areas chosen to beat competitors on, other than price.
                4. Competitor moves reviewed each quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written competitive view with multi-tenanting share, seller preference reasons and two or three chosen advantages, reviewed quarterly."
                cadence: rolling
              tasks:
                - "Survey active sellers on which other platforms they use"
                - "Interview five sellers on why they choose one platform for a job"
                - "Choose two advantages to build other than lower fees"
                - "Review competitor fees, features and seller moves @recurring(quarterly)"
            - name: Buyer protection guarantee programme
              description: |-
                ## Purpose
                A clear guarantee, such as a refund if the item does not match the listing or a replacement provider if one fails to show, can lift buyer conversion more than any feature. Designing one that you can afford means setting the cover, the claims rules, the budget and who pays when a seller is at fault.

                ## Milestones
                1. The guarantee promise written in one plain sentence.
                2. Claim rules, evidence and time limits defined.
                3. The expected cost estimated from dispute data, with a yearly budget set.
                4. The guarantee launched and its effect on conversion and claims measured.

                ## Notes
                Check with your lawyer how a guarantee interacts with consumer law and your terms, and whether insurance should back it.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A buyer guarantee launched with written claim rules and a budget, and conversion and claim cost measured over three months."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the guarantee promise in one sentence"
                - "Estimate the yearly cost from your dispute and refund data"
                - "Define claim rules, evidence and time limits"
                - "Review guarantee claims, cost and the budget @recurring(yearly)"
---

# Two-Sided Marketplace Launch

This area is for founders building a marketplace, where nothing works until buyers and sellers both turn up and find each other. It runs from the foundations (the atomic transaction, which side to seed, a tight launch boundary, a liquidity target, interviews on both sides, a hand-run concierge test, fees, terms and payments), through the weekly machinery of liquidity, supply onboarding, trust and safety, disputes and fraud, the skills of cold-start strategy, matching and selling to supply, the model and incentive decisions, dated launch moments, variants for B2B, services, rentals, small markets and solo founders, and finally the specialist work of cohort analysis, dynamic pricing and buyer protection.

What repeats is a Monday liquidity review, weekly supply pipeline, balance, dispute and fraud checks on different days, a daily look at the trust and safety queue, and monthly listing, leakage, ratings and top-seller reviews spread across the month, with quarterly cohort and competitor checks. The **Feedback themes**, **Vendor**, **Metrics log**, **Risk register** and **Reading queue** templates pair with the seller interviews, the payments choice, the liquidity review, the incident queue and the cold-start reading list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
