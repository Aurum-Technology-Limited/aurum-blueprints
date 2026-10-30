---
id: product-management.in-app-monetisation
name: In-App Monetisation
description: "A trusted revenue baseline, a clean product catalogue, fair paywalls and upgrade moments, store rules and refunds handled, and the offers, experiments and audits that grow revenue per user."
category: business
version: 1.0.0
tags: [product-management, in-app-monetisation, team, founder, in-app-purchases, paywalls, virtual-currency, app-store]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - compliance-control
    - feedback-themes
    - product-spec
    - marketing-campaign
    - risk-register
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: In-App Monetisation
          description: "Designing in-app purchases, add-ons, upgrade moments and paywalls that grow revenue per user while keeping the experience fair."
          projects:
            - name: In-app revenue and payer baseline
              description: |-
                ## Purpose
                Every paywall or offer change later in this area needs a before figure, and most apps report revenue three ways: gross from the store console, net after commission, and booked revenue in finance. Writing down last quarter's payer rate, revenue per paying user, revenue per daily active user and the split between purchases, subscriptions and ads gives one baseline that product and finance both accept.

                ## Milestones
                1. Gross and net in-app revenue for the last three full months, split by platform.
                2. Payer rate, revenue per paying user and revenue per daily active user calculated for the same months.
                3. Revenue split into permanent purchases, consumables, subscriptions and ads.
                4. One baseline table agreed with finance, with the source of each figure named.

                ## Notes
                Start from the **Metrics log** template. Store consoles report on their own calendars and currencies, so convert at one agreed rate before comparing platforms.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline table covering three months of gross and net revenue, payer rate, revenue per payer and revenue per daily user is agreed with finance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export three months of sales reports from each app store console"
                - "Pull daily active users for the same months from product analytics"
                - "Calculate payer rate, revenue per payer and revenue per daily user"
                - "Review the baseline table with finance and note each figure's source"
            - name: Catalogue of everything sold inside the app
              description: |-
                ## Purpose
                Products accumulate: a launch bundle from two years ago, a test price nobody switched off, an add-on sold on only one platform. A single catalogue listing every product id, type, price, platform and the entitlement it grants is the foundation for clean experiments, quick support answers and smooth store reviews.

                ## Milestones
                1. Every live product id listed from each store console and the web checkout, if there is one.
                2. Each item typed as consumable, permanent purchase, subscription or add-on, with the entitlement it grants.
                3. Orphaned, duplicate and test products flagged for removal or repair.
                4. The catalogue stored where product, support and engineering can all read it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A catalogue lists every live in-app product with id, type, price per platform and granted entitlement, with orphaned items flagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the product list from each app store console"
                - "Match every product id to the entitlement it grants in the code"
                - "Flag test, duplicate and orphaned products for a decision"
                - "Share the catalogue link with support and engineering"
                - "Check the catalogue against the store consoles for new or orphaned items @recurring(quarterly)"
            - name: Fair monetisation principles for the app
              description: |-
                ## Purpose
                Teams under a revenue target make small choices that add up: a pre-ticked option, a countdown timer that quietly resets, a paywall that hides its close button. A short set of written principles, agreed before the pressure arrives, gives designers and engineers something to point at when an experiment crosses a line.

                ## Milestones
                1. Five to eight principles written, each specific enough to rule a design in or out.
                2. Principles covering children, price clarity, cancellation and the way out of every paywall.
                3. The founder or head of product signed off on the principles.
                4. Principles added to the design review checklist for any purchase flow.

                ## Notes
                Good principles are testable. A visible way out on the first screen of every paywall can be checked in a review; a pledge to be fair to users cannot.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written set of five to eight fair monetisation principles is signed off and referenced in the purchase flow design checklist."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect three recent purchase flow designs that caused internal debate"
                - "Draft five to eight principles that would have settled each debate"
                - "Agree the principles with the founder or head of product"
                - "Add the principles to the design review checklist for purchase flows"
                - "Revisit the principles with design and engineering @recurring(yearly)"
            - name: Store commission, tax and payout map
              description: |-
                ## Purpose
                A 9.99 price on the store is not 9.99 in the bank: commission, sales tax or VAT collected by the store, currency conversion and payout timing all take a share. Mapping what you actually keep per sale on each platform shows which products earn money and which only look busy.

                ## Milestones
                1. Commission rate per platform confirmed from your own agreement, including any small developer programme you qualify for.
                2. Tax handling recorded: which stores collect and remit it and which sales you must handle yourself.
                3. Net revenue per sale worked out for your three best-selling products on each platform.
                4. Payout schedule and currency for each store written down for finance.

                ## Notes
                Commission rates and programmes change and differ by region, so confirm them in each store's developer terms rather than in articles. Ask your accountant how store payouts are treated in your books.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page map shows commission, tax handling, payout timing and net revenue per sale for the top three products on each platform."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the current commission terms in each store's developer agreement"
                - "Check whether you qualify for a reduced commission programme"
                - "Calculate net revenue per sale for your three best sellers"
                - "Send the payout schedule and currencies to whoever runs finance"
                - "Recheck commission and tax terms after store agreement updates @recurring(yearly)"
            - name: Purchase and paywall event tracking
              description: |-
                ## Purpose
                Generic analytics often records a purchase but not the paywall view before it, the product shown, or the purchase that failed on the store sheet. Adding a small set of monetisation events with consistent properties lets you answer which placement sells, where buyers abandon and how many refunds follow.

                ## Milestones
                1. Events defined for paywall viewed, product selected, purchase started, completed, failed, restored and refunded.
                2. Each event carries placement, product id, price, currency and platform.
                3. Server-side store notifications matched to client events so refunds and renewals are counted.
                4. A test purchase on each platform checked end to end in the analytics tool.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Seven monetisation events with placement, product, price and platform fire correctly on every platform, verified by sandbox purchases."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the purchase events the app sends today and what each lacks"
                - "Write the event and property spec for the seven monetisation events"
                - "Make a sandbox purchase on each platform and check every event arrives"
                - "Confirm refund and renewal notifications from the stores reach analytics"
            - name: Value moment map for purchase placements
              description: |-
                ## Purpose
                People pay when they have just felt what more would give them: the third finished workout, the level they keep failing, the export they need for a client. Mapping these moments from real usage, beside where purchase entry points sit today, shows which placements are well timed and which interrupt someone in the middle of a task.

                ## Milestones
                1. Five to ten value moments identified from usage data and user interviews.
                2. Every current purchase entry point listed with the screen and trigger that shows it.
                3. Each entry point marked as well timed, interrupting or missing.
                4. Three placement changes proposed for testing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A map links five to ten value moments to current purchase entry points and proposes three placement changes to test."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Screenshot every place in the app where a purchase can start"
                - "Find the actions most common in the session before a purchase"
                - "Mark each entry point as well timed, interrupting or missing"
                - "Propose three placement changes and add them to the experiment backlog"
            - name: App store payment rules check
              description: |-
                ## Purpose
                Store rules decide what must go through in-app purchase, whether you may link to a web checkout, how subscriptions must be described and what a reviewer will reject. These rules have shifted in several regions in recent years, so checking current flows against the latest guidelines prevents a rejected update in the week of a launch.

                ## Milestones
                1. The current payment and digital goods sections of each store's guidelines read and dated.
                2. Each purchase flow in the app checked against them, with any risk noted.
                3. Region-specific allowances, such as external payment links, recorded where they apply to you.
                4. Any flow at risk fixed or escalated before the next release.

                ## Notes
                Start from the **Compliance control** template. Where a rule turns on legal interpretation, ask counsel rather than relying on forum posts.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every purchase flow is checked against the dated current store guidelines, with risks recorded and fixed or escalated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the payment sections of each store's current review guidelines"
                - "Check each purchase flow against the guidelines and note risks"
                - "Record which regional payment allowances apply to your app"
                - "Raise any at-risk flow with the release owner before the next build"
            - name: Receipt validation and entitlement source of truth
              description: |-
                ## Purpose
                If the app decides what someone owns by reading the device alone, reinstalls lose purchases, family members get the wrong access and forged receipts slip through. Validating receipts on a server and keeping one entitlement record per account means access is correct on every device and support can see what a customer really bought.

                ## Milestones
                1. Receipts validated server side for every platform, never trusted from the client.
                2. One entitlement record per account, updated by store server notifications.
                3. Restore purchases working on a fresh install for each product type.
                4. Support able to look up a customer's purchases and entitlements without engineering help.

                ## Notes
                A third-party purchase and subscription backend is a sensible default for small teams: it handles receipts, store notifications and cross-platform entitlements so you are not maintaining that code yourself.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Receipts are validated server side on all platforms, restore works on a fresh install, and support can view any customer's entitlements."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down where the app currently decides what a user owns"
                - "Decide between building receipt validation or using a purchase backend"
                - "Test restore purchases on a fresh install for each product type"
                - "Give support read access to customer purchase and entitlement records"
            - name: Refund and purchase support playbook
              description: |-
                ## Purpose
                Purchase tickets are among the most emotional a support team handles: a child spent money, a purchase never arrived, a renewal surprised someone. A playbook with each store's refund route, what you can and cannot do yourself, and approved replies turns each ticket into a five-minute fix instead of an escalation.

                ## Milestones
                1. The refund and dispute routes for each store documented, including what the developer can action.
                2. Replies written for missing purchase, accidental purchase, child purchase and unwanted renewal.
                3. A rule for when support can grant goodwill credit or currency, with a limit.
                4. Support walked through the playbook and the entitlement lookup.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A support playbook covers store refund routes and four reply types with a goodwill credit limit, and the support team has been walked through it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the last fifty purchase-related support tickets and group them"
                - "Document the refund route each store offers and what you can action"
                - "Draft replies for the four most common purchase complaints"
                - "Set the goodwill credit limit support can grant without approval"
                - "Add new purchase ticket patterns to the playbook @recurring(quarterly)"
            - name: Weekly monetisation metrics review
              description: |-
                ## Purpose
                Revenue in an app moves with releases, store featuring, sales and outages, and a drop found a month later is a month of lost sales. A fifteen-minute weekly look at payer rate, revenue per daily user, paywall conversion and refunds catches problems while the cause is still fresh in everyone's mind.

                ## Milestones
                1. A one-screen dashboard with the four weekly metrics and last week's comparison.
                2. A fixed weekly slot with a named owner.
                3. A threshold set for each metric that triggers an investigation.
                4. Eight consecutive weekly reviews held, each with a one-line note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly reviews are logged, each comparing payer rate, revenue per daily user, paywall conversion and refunds with the week before."
                cadence: rolling
              tasks:
                - "Build a one-screen view of the four weekly monetisation metrics"
                - "Set an investigation threshold for each metric"
                - "Review the weekly monetisation metrics and write a one-line note @recurring(weekly:mon)"
            - name: Monthly paywall funnel review
              description: |-
                ## Purpose
                Each paywall has its own funnel: shown, product chosen, store sheet opened, purchase completed. Reviewing it monthly per placement shows where the leak is, whether a weak offer, a confusing product choice or a store sheet people back out of, and points the next experiment at the right step.

                ## Milestones
                1. Funnel steps reported per paywall placement and platform.
                2. The largest drop-off for each placement named every month.
                3. One experiment or fix proposed from each review.
                4. Six monthly reviews completed with findings logged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly paywall funnel reviews are logged, each naming the largest drop-off per placement and one proposed change."
                cadence: rolling
              tasks:
                - "Set up a funnel report for each paywall placement by platform"
                - "Review paywall funnels and name the largest drop-off @recurring(monthly:9)"
                - "Add one proposed fix to the experiment backlog after each review"
            - name: Refund and chargeback rate watch
              description: |-
                ## Purpose
                A rising refund rate is often the first sign of a misleading offer, a broken entitlement or fraud with stolen cards, and stores may act against apps with unusual refund patterns. Watching refunds and chargebacks monthly by product and region spots the problem before it shows up in reviews or a store warning.

                ## Milestones
                1. Monthly refund rate tracked by product, platform and region.
                2. A normal range agreed so a spike is obvious.
                3. Every spike traced to a cause: release, offer, fraud or support gap.
                4. Causes fixed and the rate back in range within a month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Refund and chargeback rates are reviewed monthly by product and region, with every spike above the agreed range traced to a cause."
                cadence: rolling
              tasks:
                - "Work out last year's monthly refund rate by product and platform"
                - "Agree the normal refund range with finance"
                - "Review refund and chargeback rates by product and region @recurring(monthly:14)"
                - "Trace any spike to a release, offer, fraud or support cause"
            - name: Store price tier and currency check
              description: |-
                ## Purpose
                Stores sometimes adjust local prices for tax or exchange rate changes, and a price that was sensible in one currency can drift into an odd number or a poor deal in another. A quarterly check of what each product actually costs in your top ten markets keeps local prices deliberate rather than inherited.

                ## Milestones
                1. Local prices for every product listed for your top ten markets.
                2. Prices that drifted after a store adjustment flagged.
                3. A rule for rounding to local price points recorded.
                4. Flagged prices corrected or knowingly left as they are.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter a price sheet for the top ten markets is checked and every drifted price is corrected or noted as deliberate."
                cadence: rolling
              tasks:
                - "List your top ten markets by in-app revenue"
                - "Export local prices for each product in those markets"
                - "Check local prices against the price sheet and flag drift @recurring(quarterly)"
            - name: Live offer and promotion calendar
              description: |-
                ## Purpose
                Sales, seasonal bundles and limited-time offers work best planned months ahead, with store submission times, artwork and pricing ready. Without a calendar the same discount runs too often, trains people to wait for it and clashes with a feature launch, so one shared calendar sets the rhythm and the spacing.

                ## Milestones
                1. Twelve months of planned offers on one calendar, including seasonal peaks in your main markets.
                2. A minimum gap between discounts agreed so buyers are not trained to wait.
                3. Store submission lead times written next to each offer.
                4. Each past offer's result recorded beside it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month offer calendar is kept current with submission lead times, a minimum gap between discounts and the result of each past offer."
                cadence: rolling
              tasks:
                - "Mark the seasonal peaks in your three biggest markets on a calendar"
                - "Agree the minimum gap between discount events"
                - "Plan next month's offers and confirm store submission dates @recurring(monthly:20)"
                - "Record the result of each finished offer beside it on the calendar"
            - name: Purchase complaint and review theme scan
              description: |-
                ## Purpose
                Store reviews and support tickets tell you how monetisation feels long before revenue does: too expensive, too many ads, paid for something that vanished. Tagging these comments monthly into a few themes shows which complaints are growing and whether a recent change caused them.

                ## Milestones
                1. Price, paywall, ads, missing purchase and renewal complaints tagged from reviews and tickets.
                2. Theme counts tracked month over month.
                3. Each growing theme linked to a release or offer where possible.
                4. One theme acted on per quarter, with a note of what changed.

                ## Notes
                Start from the **Feedback themes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly theme counts for monetisation complaints are tracked, and at least one theme is acted on each quarter with the change recorded."
                cadence: rolling
              tasks:
                - "Choose five tags for monetisation complaints"
                - "Ask the agent to tag this month's reviews and purchase tickets by theme @recurring(monthly:24)"
                - "Compare theme counts with last month and note any release link"
            - name: Top spender concentration and wellbeing watch
              description: |-
                ## Purpose
                In many apps a small share of payers brings in most of the revenue, which makes the business fragile and raises a fair question about whether some of those people are spending more than they mean to. Watching concentration monthly, with a written response for unusual spending, protects both the revenue and the people behind it.

                ## Milestones
                1. Share of revenue from the top 1% and top 10% of payers tracked monthly.
                2. A definition of unusually high spending for your app agreed.
                3. A documented response, such as a spending summary or a check-in message, for accounts that cross it.
                4. The response reviewed with someone outside the revenue team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Revenue concentration is tracked monthly and a written response for unusually high spending accounts is in place and reviewed."
                cadence: rolling
              tasks:
                - "Calculate the share of revenue from the top 1% and 10% of payers"
                - "Agree what counts as unusually high spending in your app"
                - "Review spender concentration and accounts above the threshold @recurring(monthly:3)"
            - name: Ad placement quality review
              description: |-
                ## Purpose
                For ad-supported apps, revenue per thousand impressions is only half the picture: an interstitial after every level can lift ad income and quietly cut retention. A monthly look at ad revenue next to session length, uninstalls and complaints keeps ads earning without driving people away.

                ## Milestones
                1. Ad revenue, fill rate and revenue per thousand impressions tracked per placement.
                2. Retention and session length compared for users who see more or fewer ads.
                3. A frequency cap set per placement, with a reason.
                4. Offensive or broken ad creatives reported to the ad network within a week of a complaint.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month ad revenue per placement is reviewed beside retention and complaints, with frequency caps documented."
                cadence: rolling
              tasks:
                - "List every ad placement, its format and current frequency cap"
                - "Review ad revenue per placement beside retention and complaints @recurring(monthly:17)"
                - "Report broken or offensive ad creatives to the ad network"
            - name: Quarterly purchase walkthrough on real devices
              description: |-
                ## Purpose
                Purchase flows break quietly: a store sheet shows the wrong product name, a restore button disappears in a redesign, a localised price string overflows its button. Buying your own products as a customer on each platform every quarter, with real money and a real account, finds what automated tests and sandbox accounts miss.

                ## Milestones
                1. A walkthrough script covering purchase, restore, cancel and refund request on each platform.
                2. Every product type bought at least once per quarter on a production build.
                3. Issues logged with screenshots and a severity.
                4. Last quarter's issues confirmed fixed before the next walkthrough.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly walkthroughs a year are completed on every platform, with issues logged and the previous quarter's fixes confirmed."
                cadence: rolling
              tasks:
                - "Write a walkthrough script for purchase, restore and cancellation"
                - "Set aside a small budget for real purchases on production builds"
                - "Buy each product type as a customer on every platform @recurring(quarterly)"
                - "Log issues with screenshots and check last quarter's are fixed"
            - name: Purchase failure and error rate monitoring
              description: |-
                ## Purpose
                When a store outage, an expired key or a bad release blocks purchases, every hour costs sales and the people who tried may not try again. An alert on purchase failure rate and a weekly look at error codes catches breakages within hours instead of after a weekend.

                ## Milestones
                1. Purchase failure rate tracked by platform and error code.
                2. An alert that fires when failures cross an agreed level for an hour.
                3. A short runbook for the first response to a purchase outage.
                4. Weekly error code review held for two months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A purchase failure alert is live, a first-response runbook exists, and error codes are reviewed weekly for two months."
                cadence: rolling
              tasks:
                - "Chart purchase failures by platform and error code for the last month"
                - "Set an alert for failures above the agreed hourly level"
                - "Write a one-page runbook for a purchase outage"
                - "Review purchase error codes and open tickets for new ones @recurring(weekly:thu)"
            - name: In-app monetisation models primer
              description: |-
                ## Purpose
                Arguments about subscriptions versus one-off purchases often happen without a shared picture of the options. Studying the main models, consumables, permanent purchases, subscriptions, ads, rewarded ads and hybrids, with two real apps for each, gives everyone the same vocabulary before strategy discussions start.

                ## Milestones
                1. Each model summarised in a paragraph with its typical strengths and risks.
                2. Two real apps studied per model, noting what they sell and where in the app.
                3. A one-page comparison of which models fit your app's usage pattern.
                4. The comparison presented to the team in a thirty-minute session.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of six monetisation models, with two real examples each, is presented to the team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List six monetisation models and two apps that use each well"
                - "Install and study the purchase options in each example app"
                - "Write a one-page comparison of fit for your own app"
                - "Present the comparison to the team in a thirty-minute session"
            - name: Monetisation metrics vocabulary
              description: |-
                ## Purpose
                Revenue per daily active user, payer conversion, revenue per paying user and lifetime value are easy to confuse and easy to calculate differently. Learning the definitions, their denominators and their traps, such as averages skewed by a few large spenders, stops meetings from debating numbers that measure different things.

                ## Milestones
                1. A glossary of ten monetisation metrics with exact formulas and denominators.
                2. Each metric calculated once from your own data.
                3. Known traps noted, including skew from large spenders and mixed cohorts.
                4. The glossary adopted as the reference for dashboards.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ten-metric glossary with formulas, calculated once from your own data, is the agreed reference for monetisation dashboards."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write formulas and denominators for ten monetisation metrics"
                - "Calculate each metric once from last month's data"
                - "Note where the mean differs sharply from the median payer"
                - "Link the glossary from every monetisation dashboard"
            - name: Paywall teardown of fifteen apps
              description: |-
                ## Purpose
                Paywalls in well-run apps have been tested hundreds of times, so studying them is cheap research. Capturing fifteen from your category and adjacent ones, noting layout, default plan, price framing, trial wording and how easy each is to dismiss, builds a library of patterns to borrow and to avoid.

                ## Milestones
                1. Fifteen paywalls captured with screenshots and the trigger that showed them.
                2. Each scored on clarity, default selection, price framing and ease of dismissal.
                3. Five patterns worth testing and three to avoid written up.
                4. The library shared in the team's design space.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A library of fifteen captured paywalls, each scored on four criteria, ends with five patterns to test and three to avoid."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick fifteen apps in and next to your category to study"
                - "Screenshot each paywall and the moment that triggered it"
                - "Score each on clarity, default, framing and ease of dismissal"
                - "Write up five patterns to test and three to avoid"
            - name: Virtual currency economy basics
              description: |-
                ## Purpose
                Coins, gems and credits make pricing flexible but bring their own physics: sources that pay currency out, sinks that take it back, and inflation when the two drift apart. Learning how currency economies are designed and balanced before adding one avoids an economy that either starves players or makes purchases pointless.

                ## Milestones
                1. Sources, sinks and exchange rates explained in your own words.
                2. One existing app's economy mapped as a flow diagram.
                3. Common failures listed, such as inflation, hoarding and confusing double currencies.
                4. A short recommendation on whether your app needs a currency at all.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A mapped example economy and a written recommendation on whether your app should use a virtual currency are complete."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read two published talks or articles on virtual economy design"
                - "Map one existing app's currency sources and sinks as a diagram"
                - "List the failure modes the reading describes"
                - "Write a one-page view on whether your app needs a currency"
            - name: Dark patterns and consumer rules in purchase flows
              description: |-
                ## Purpose
                Consumer protection authorities in several regions now act against manipulative purchase design: hidden costs, confirm-shaming, fake urgency and cancellation made harder than sign-up. Learning the recognised patterns and the general direction of the rules lets the team spot problems in design review rather than in a regulator's letter.

                ## Milestones
                1. The recognised categories of deceptive design listed with an example of each.
                2. Published guidance from consumer authorities in your main markets read and summarised.
                3. Your own purchase flows checked against the list.
                4. Findings shared with design and counsel, with any fixes scheduled.

                ## Notes
                This builds awareness, not legal advice. Ask counsel how specific rules apply to your app and markets.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of deceptive design patterns, with consumer authority guidance summarised, is applied to every purchase flow and fixes are scheduled."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a published taxonomy of deceptive design patterns"
                - "Summarise consumer authority guidance for your two main markets"
                - "Check every purchase flow against the pattern list"
                - "Share findings with design and counsel and schedule any fixes"
            - name: Experiment design for revenue metrics
              description: |-
                ## Purpose
                Large purchases make revenue noisy: a handful of big spenders can make a losing variant look like a winner, and a test stopped after five days misses renewals and refunds. Learning how to choose a primary revenue metric, size tests for heavy-tailed spend and wait for refunds to settle prevents confident launches of changes that lose money.

                ## Milestones
                1. A rule for the primary metric of revenue tests, such as revenue per user exposed.
                2. A method for handling extreme spenders, such as capping, agreed.
                3. Minimum test duration set to include refund windows and first renewals.
                4. One past test reanalysed with the new method.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written method for revenue experiments covers the primary metric, extreme spenders and minimum duration, and has been applied to one past test."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose the primary metric used for every revenue experiment"
                - "Agree how extreme spenders are capped or excluded in analysis"
                - "Set the minimum test length to cover refunds and first renewals"
                - "Reanalyse one past monetisation test using the new method"
            - name: Interviews with buyers and engaged non-buyers
              description: |-
                ## Purpose
                Dashboards show who paid, not why the other ninety-odd per cent did not. Talking to eight recent buyers and eight engaged users who never bought, about the moment they considered paying, uncovers the doubts, comparisons and misunderstandings that no funnel chart shows.

                ## Milestones
                1. Eight recent buyers and eight engaged non-buyers interviewed.
                2. Each conversation summarised around the moment the person considered paying.
                3. Top five reasons for buying and for not buying ranked.
                4. Two paywall or offer changes proposed from the findings.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Sixteen interviews with buyers and engaged non-buyers are summarised into ranked reasons and two proposed changes."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Recruit eight recent buyers and eight engaged users who never paid"
                - "Write a guide built around the moment they considered paying"
                - "Ask the agent to summarise each interview into buying and not-buying reasons"
                - "Rank the reasons and propose two changes to test"
            - name: Paywall placement and timing experiment
              description: |-
                ## Purpose
                Showing a paywall at onboarding, after the first success or only when a limit is hit can change revenue more than any price change. Running a controlled test of two or three placements, measured on revenue per user with seven-day retention as a guardrail, settles the argument with evidence.

                ## Milestones
                1. Two or three placements chosen from the value moment map.
                2. A test plan with primary metric, guardrail metric and duration written.
                3. The test run to its planned length on enough users.
                4. The winning placement shipped, or the result recorded if none won.

                ## Notes
                Start from the **Product spec** template. A placement that lifts purchases but cuts week-one retention often loses money by month three.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A placement test runs its planned length and the decision, based on revenue per user with retention as a guardrail, is recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick two or three placements from the value moment map"
                - "Write the test plan with metric, guardrail and duration"
                - "Launch the test and check assignment is balanced after two days"
                - "Record the decision and ship or roll back the placement"
            - name: Hard, metered or soft paywall decision
              description: |-
                ## Purpose
                Content and tool apps must decide how much to give before asking: a hard paywall after onboarding, a metered allowance, or a soft paywall that can be dismissed. The choice shapes reviews, word of mouth and who ever experiences the product, so it deserves a deliberate decision rather than a default copied from a competitor.

                ## Milestones
                1. The three options described with their likely effect on reach, conversion and reviews.
                2. Evidence gathered from your own data and two comparable apps.
                3. A recommendation agreed with the founder or head of product.
                4. The decision and its review date recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between hard, metered and soft paywall, with evidence and a review date, is agreed by the product lead."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Describe hard, metered and soft paywall options for your app"
                - "Gather conversion and review evidence for each option"
                - "Write a recommendation and agree it with the product lead"
                - "Record the decision with a date to review it"
            - name: Consumable or permanent purchase decision
              description: |-
                ## Purpose
                Selling extra lives, credits or boosts as consumables earns repeatedly but can feel like a toll; selling a permanent feature or ad removal earns once and feels fair. Deciding item by item which type fits, based on how the item is used and what buyers say, builds a catalogue people trust.

                ## Milestones
                1. Every candidate item listed with how often a user would need it.
                2. Each item assigned consumable, permanent or subscription, with a reason.
                3. Items currently sold in a way that causes complaints flagged.
                4. Changes scheduled, with the effect on existing buyers considered.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every item in the catalogue is assigned a purchase type with a written reason, and items that cause complaints have scheduled changes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each item and how often a typical user would need it"
                - "Assign each item a purchase type with a one-line reason"
                - "Flag items whose purchase type appears in complaints"
                - "Plan how any change treats people who already bought"
            - name: Starter pack and first purchase offer
              description: |-
                ## Purpose
                The first purchase is the hardest and the most predictive: someone who pays once is far more likely to pay again. A clearly valued starter offer, shown once at the right moment to engaged users, lowers the barrier without devaluing the regular catalogue.

                ## Milestones
                1. The starter offer contents and price set, with value compared against the regular catalogue.
                2. The trigger and audience defined, such as day three after two completed sessions.
                3. The offer tested against no offer on new users.
                4. Repeat purchase rate of starter buyers measured at sixty days.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A starter offer is tested against a control and its effect on first purchase and sixty-day repeat purchase is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft the starter offer contents and compare value with the catalogue"
                - "Define the trigger and audience for showing the offer"
                - "Run the offer against a no-offer control on new users"
                - "Measure repeat purchases by starter buyers at sixty days"
            - name: In-app store screen redesign
              description: |-
                ## Purpose
                Once a catalogue grows past a dozen items, the in-app store becomes a wall of similar tiles and buyers stall on choice. Redesigning the store screen with clear groupings, a recommended item and honest per-unit value makes it easier to buy the right thing and harder to buy the wrong one.

                ## Milestones
                1. Current store screen performance recorded: views, item taps and purchases per item.
                2. Items grouped into no more than four sections, with retired items removed.
                3. A recommended item and per-unit value shown where items are comparable.
                4. The new screen tested against the old one.

                ## Notes
                Start from the **Product spec** template.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A redesigned in-app store screen with grouped items and per-unit value has been tested against the old screen and the result recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Record views, taps and purchases for each item on the store screen"
                - "Group items into no more than four sections"
                - "Show per-unit value wherever bundles are comparable"
                - "Test the new store screen against the current one"
            - name: Web checkout alongside store purchases
              description: |-
                ## Purpose
                Where store rules and local law allow it, offering a web checkout can cut fees and give you the customer relationship, but it adds payment, tax, support and entitlement work. Modelling net revenue, the conversion lost to the extra step and the operational load tells you whether the switch is worth it for your app.

                ## Milestones
                1. Regions and platforms where linking to a web checkout is permitted confirmed.
                2. Net revenue per sale compared between store and web, including payment and tax costs.
                3. Expected conversion loss from leaving the app estimated or tested.
                4. A go or no-go decision recorded with the regions in scope.

                ## Notes
                Rules on external payment links differ by region and change often. Check the current store terms and get counsel's view before building anything.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A go or no-go decision on web checkout, with permitted regions, a net revenue comparison and expected conversion loss, is recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm which regions permit linking out to a web checkout"
                - "Compare net revenue per sale for store and web checkout"
                - "Estimate the conversion loss from leaving the app to pay"
                - "Record the go or no-go decision and the regions in scope"
            - name: Price and renewal clarity fixes
              description: |-
                ## Purpose
                Confusion at the moment of purchase drives refunds and one-star reviews: a weekly price dressed up as a monthly saving, a trial that renews without saying so, a bundle whose contents are hidden. Rewriting price wording so every screen shows what is charged, when, and how to cancel reduces refunds and makes store review smoother.

                ## Milestones
                1. Every purchase screen checked for total price, billing period, renewal and cancellation wording.
                2. Unclear wording rewritten and read by someone outside the team.
                3. Localised versions checked in the top five languages.
                4. Refund rate compared before and after the change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every purchase screen states price, period, renewal and cancellation clearly in the top five languages, with refund rates compared before and after."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Screenshot every purchase screen in the app"
                - "Check each screen shows total price, period, renewal and how to cancel"
                - "Rewrite unclear wording and test it on someone outside the team"
                - "Compare refund rates for the month before and after the fix"
            - name: Rewarded ads keep or remove decision
              description: |-
                ## Purpose
                Rewarded ads let people who will never pay earn items by watching an ad, which can add revenue and even lead to purchases, or can cheapen paid items and pull buyers away from them. Testing a rewarded placement on a share of users, and watching payer rate as closely as ad income, shows which effect wins in your app.

                ## Milestones
                1. A rewarded placement designed with a daily cap and a clear reward.
                2. A test running on a share of non-paying users.
                3. Ad revenue, payer rate and retention compared with control.
                4. A keep, change or remove decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A rewarded ad test reports ad revenue, payer rate and retention against control, and the keep, change or remove decision is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Design one rewarded placement with a daily cap"
                - "Run it for a share of non-paying users against control"
                - "Compare ad revenue, payer rate and retention with control"
                - "Record the decision to keep, change or remove the placement"
            - name: Purchase history and spending limits for users
              description: |-
                ## Purpose
                Customers who can see what they have spent, and set their own limit, tend to trust an app more and complain less. Adding a purchase history screen and an optional monthly spending limit is a fairness feature that also cuts support tickets about forgotten purchases.

                ## Milestones
                1. A purchase history screen listing every purchase with date and price.
                2. An optional monthly spending limit users can set and change.
                3. Clear messaging when a limit is reached, with no pressure to raise it.
                4. Support tickets about forgotten purchases compared before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A purchase history screen and optional spending limit are live, with forgotten-purchase tickets compared before and after release."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Sketch a purchase history screen from the entitlement records"
                - "Specify an optional monthly spending limit and its messages"
                - "Ship both behind a flag to a small share of users"
                - "Compare forgotten-purchase tickets before and after release"
            - name: First in-app purchase launch
              description: |-
                ## Purpose
                Launching the first paid item in a free app touches store configuration, review, pricing, receipts, support and an existing community who may resent change. Treating it as a dated launch with a checklist avoids the classic failures: a product stuck in review, a missing restore button, or loyal users caught by surprise.

                ## Milestones
                1. Products configured and approved in each store well before the launch date.
                2. Purchase, restore and refund paths tested on production builds.
                3. Support playbook and community announcement ready.
                4. First-week revenue, failures and sentiment reviewed.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first paid item launches on the planned date on every platform, with restore tested and first-week revenue, failures and sentiment reviewed."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick a launch date at least six weeks after store configuration starts"
                - "Configure products and submit them for store review"
                - "Test purchase, restore and refund on production builds"
                - "Post the launch announcement explaining what stays free"
                - "Review first-week revenue, failures and sentiment with the team"
            - name: Seasonal sale event
              description: |-
                ## Purpose
                Year-end holidays, the new year and local festivals are when many people try paid features, and stores feature apps running well-planned events. A seasonal sale with a clear offer, store submissions in on time and a measured result turns a busy week into lasting payers rather than a one-off spike.

                ## Milestones
                1. The offer, dates and target audience set at least six weeks ahead.
                2. Store promotional assets and any in-app event listing submitted on time.
                3. Discounted products and in-app messaging tested before launch.
                4. Revenue, new payers and their sixty-day repeat rate compared with a normal week.

                ## Notes
                Start from the **Marketing campaign** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A seasonal sale runs on its planned dates and its revenue, new payers and sixty-day repeat rate are compared with a normal week."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Choose the seasonal moment and set the sale dates"
                - "Draft the offer and agree the discount with finance"
                - "Submit store promotional assets before the deadline"
                - "Compare sale revenue and new payers with a normal week"
            - name: Store price change for existing in-app products
              description: |-
                ## Purpose
                Changing the store price of products people already buy, especially subscriptions sold in the app, follows store-specific steps: some stores require subscriber consent for increases, others notify on your behalf, and existing subscribers may be kept on the old price. Running the change as a dated event avoids surprise cancellations and store complaints.

                ## Milestones
                1. The store rules for price increases on each platform confirmed, including any consent requirement.
                2. A decision on whether existing subscribers keep their old price.
                3. In-app and email notice written and scheduled ahead of the change.
                4. Cancellation and refund rates watched for four weeks after the change.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The price change goes live on the planned date with store rules followed, notice sent, and four weeks of cancellation and refund rates reviewed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read each store's current rules for subscription price increases"
                - "Decide whether existing subscribers keep their old price"
                - "Write and schedule the in-app and email notice"
                - "Watch cancellations and refunds for four weeks after the change"
            - name: Limited-time season pass launch
              description: |-
                ## Purpose
                Season passes sell a block of content or rewards for a fixed period, giving players a reason to return and committed users a fair price. A pass needs content ready for the whole season, a clear statement of what it includes, and a plan for people who buy late.

                ## Milestones
                1. Season length, pass contents and price agreed, with all content scheduled.
                2. The pass description states exactly what is included and when it ends.
                3. A late-buyer rule set, such as rewards granted back to the start.
                4. Pass uptake, completion and complaints reviewed at season end.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A season pass runs its full season with contents disclosed, a late-buyer rule applied and uptake, completion and complaints reviewed at the end."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree season length, pass contents and price"
                - "Schedule every piece of season content before launch"
                - "Write the pass description including end date and contents"
                - "Review uptake, completion and complaints when the season ends"
            - name: Store in-app event and promotional offer listing
              description: |-
                ## Purpose
                Both major app stores let developers list in-app events and promotional offers that appear on the store page and in search, reaching lapsed users and new browsers. Preparing one listing with the right lead time and artwork is an inexpensive way to give a sale or content drop more reach.

                ## Milestones
                1. The current store requirements for in-app events and promotional offers read.
                2. One event or offer chosen and its listing drafted with artwork.
                3. The listing submitted and approved before the event starts.
                4. Store page views and redemptions recorded afterwards.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One in-app event or promotional offer listing is approved before its start date, with views and redemptions recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the store requirements for in-app event listings"
                - "Choose one upcoming event or offer to list"
                - "Draft the listing text and artwork to store specifications"
                - "Record store page views and redemptions after the event"
            - name: Solo founder's first monetised app
              description: |-
                ## Purpose
                Solo founders have no finance team, no support desk and no data analyst, so the monetisation set-up must be small enough to run alone in a few hours a week. Starting with one product type, a purchase backend, a single weekly number and a saved refund reply gets revenue flowing without building a system you cannot maintain.

                ## Milestones
                1. One product type chosen for the first release, with the reason written down.
                2. A purchase backend set up so receipts and entitlements are handled for you.
                3. One weekly revenue number tracked in a simple sheet.
                4. Refund and missing purchase replies saved for reuse.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The app sells one product type through a purchase backend, with a weekly revenue number tracked and support replies saved."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose one product type for the first paid release"
                - "Set up a purchase backend and connect each store"
                - "Note this week's net in-app revenue in a simple sheet @recurring(weekly:fri)"
                - "Save reply templates for refund and missing purchase emails"
            - name: Purchases in children's and family apps
              description: |-
                ## Purpose
                Apps used by children carry stricter store rules, privacy law and parental expectations: purchases behind a parental gate, no manipulative prompts aimed at children and often limits on ads. Reviewing every monetisation surface with that lens protects children, keeps the app in the store's kids category and avoids the damage of a surprise bill.

                ## Milestones
                1. The store's current rules for children's apps and your markets' child privacy laws summarised.
                2. Every purchase and ad surface checked for a parental gate and age-appropriate wording.
                3. Ad networks confirmed as suitable for child-directed traffic, or ads removed.
                4. A parent-facing page explaining what costs money and how to control it.

                ## Notes
                Start from the **Compliance control** template. Ask counsel to confirm which child privacy laws apply in your markets.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every purchase and ad surface in the family app passes a parental gate and age review, and a parent-facing page explains costs and controls."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Summarise the store's current rules for apps in the kids category"
                - "Check every purchase and ad surface for a parental gate"
                - "Confirm each ad network is approved for child-directed traffic"
                - "Publish a parent page explaining what costs money and how to block it"
            - name: Admin-purchased add-ons in a business app
              description: |-
                ## Purpose
                In business products, extra seats, storage or premium modules are often bought inside the app by a workspace admin rather than through sales. Designing that flow around the admin's real constraints, such as approval, invoices, prorated charges and who may buy, turns in-app add-ons into a reliable expansion channel.

                ## Milestones
                1. Who can buy, what needs approval and how charges are prorated decided.
                2. The purchase flow shows the prorated price and the next invoice before confirming.
                3. Members who hit a limit can request the add-on from their admin in one step.
                4. Add-on purchase rate per active workspace tracked monthly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Admins can buy add-ons in the app with prorated prices shown, members can request them, and monthly purchase rate per workspace is tracked."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Interview three workspace admins about how they approve purchases"
                - "Decide who can buy, what needs approval and how proration works"
                - "Add a one-step request flow for members who hit a limit"
                - "Review add-on purchase rate per active workspace @recurring(monthly:11)"
            - name: Moving an ad-funded app to paid or hybrid
              description: |-
                ## Purpose
                Ad income often falls short as costs rise, and adding an ad-free purchase or a premium tier is a common next step. The move risks angering long-time users, so it needs a model, a test on new users first and a generous offer for the loyal base.

                ## Milestones
                1. Revenue per user from ads compared with a realistic paid conversion scenario.
                2. An ad-free or premium offer designed and priced.
                3. The offer tested on new users before existing ones see it.
                4. Long-time users given advance notice and a loyalty offer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A paid or hybrid model is tested on new users, and existing users receive advance notice and a loyalty offer before rollout."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Compare ad revenue per user with a paid conversion scenario"
                - "Design and price an ad-free or premium offer"
                - "Test the offer on new users before existing users see it"
                - "Send long-time users notice and a loyalty offer before rollout"
            - name: Inheriting an undocumented monetisation set-up
              description: |-
                ## Purpose
                Product managers who take over monetisation from a departed colleague often find live experiments nobody remembers, products priced by guesswork and offers hard-coded in old releases. A structured first month of inventory and questions avoids breaking revenue by accident and shows what to fix first.

                ## Milestones
                1. All live experiments, offers and remote configuration flags affecting purchases listed.
                2. An owner or history found for each, or the item marked unknown.
                3. Revenue risks ranked by size and likelihood.
                4. A ninety-day plan for the top three fixes agreed with your manager.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Within thirty days an inventory of live experiments, offers and flags exists with ranked risks and an agreed plan for the top three fixes."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every live experiment, offer and purchase-related flag"
                - "Ask engineering and finance the history of each unknown item"
                - "Rank revenue risks by size and likelihood"
                - "Agree a ninety-day plan for the top three fixes with your manager"
            - name: Tipping and paid posts for creators
              description: |-
                ## Purpose
                Community and creator apps increasingly let fans tip creators or buy paid posts, which means the app is handling other people's earnings. Setting the platform's share, payout rules, store fee treatment and protections against fraud and coercion makes the system fair for creators and fans alike.

                ## Milestones
                1. Platform share and the split of store fees between creator and platform decided.
                2. Payout thresholds, timing and identity checks set with a payments provider.
                3. Fraud and coercion protections in place, such as tip limits and a reporting route.
                4. A creator-facing earnings page explaining every deduction.

                ## Notes
                Paying out to creators can bring tax reporting and money transmission obligations. Confirm them with an accountant and counsel before launch.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Tipping or paid posts launch with a documented platform share, payout rules, fraud protections and a creator earnings page."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Decide the platform share and how store fees are split"
                - "Choose a payments provider that handles creator payouts"
                - "Set tip limits and a reporting route for suspected coercion"
                - "Write the creator earnings page explaining every deduction"
            - name: Paying user lifetime value by cohort
              description: |-
                ## Purpose
                Spend on acquisition, discounts and featuring only makes sense against what a paying user is worth over time, and that value differs by channel, country and first product. A cohort model of payer lifetime value, refreshed quarterly, lets you set offer depth and acquisition bids from evidence.

                ## Milestones
                1. Payer revenue curves built by monthly cohort for at least twelve months.
                2. Curves split by acquisition channel, country and first product bought.
                3. A projection method chosen and checked against cohorts that have matured.
                4. The model refreshed quarterly and shared with marketing and finance.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cohort lifetime value model split by channel, country and first product is refreshed each quarter and checked against matured cohorts."
                cadence: cyclic
              tasks:
                - "Build monthly payer revenue curves for the last twelve cohorts"
                - "Split the curves by channel, country and first product"
                - "Check projections against cohorts that have fully matured"
                - "Refresh the lifetime value model and share it @recurring(quarterly)"
            - name: Virtual economy balance audit
              description: |-
                ## Purpose
                Live economies drift: new events add currency sources, players hoard, and items priced at launch become trivial or out of reach. An audit of currency inflow, outflow and balances by player segment shows whether purchases still feel worth it and where to adjust before players notice inflation.

                ## Milestones
                1. Currency sources and sinks measured per day for each player segment.
                2. Median and top-decile balances tracked over the last six months.
                3. Items whose real cost has drifted flagged.
                4. Balance changes proposed, with communication planned for any that affect buyers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each audit measures sources, sinks and balances by segment, flags drifted items and records proposed balance changes."
                cadence: cyclic
              tasks:
                - "Measure daily currency sources and sinks by player segment"
                - "Chart median and top-decile balances for six months"
                - "Flag items whose effective price has drifted"
                - "Repeat the economy audit after each content season @recurring(quarterly)"
            - name: Personalised offers ethics review
              description: |-
                ## Purpose
                Targeting offers by spending history, device or engagement can lift revenue but can also mean charging the most to the most vulnerable or the most loyal. Reviewing personalisation rules against your fairness principles, and documenting which signals are never used, keeps targeted offers defensible to users, stores and regulators.

                ## Milestones
                1. Every signal used to target offers listed.
                2. Signals that must never be used written down, such as inferred vulnerability or age.
                3. Each live targeted offer checked against the fairness principles.
                4. The review repeated each year with someone outside the revenue team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of permitted and forbidden targeting signals exists and every live personalised offer has been checked against it within the year."
                cadence: cyclic
              tasks:
                - "List every signal used to choose which offer a user sees"
                - "Write the signals that must never be used for targeting"
                - "Check each live targeted offer against the fairness principles"
                - "Repeat the personalised offer review with an outside reviewer @recurring(yearly)"
            - name: Randomised paid item and loot box compliance
              description: |-
                ## Purpose
                Paid random rewards, such as loot boxes, gacha draws and mystery packs, face store disclosure rules, and some countries restrict them heavily. Mapping every randomised paid item, publishing its odds and checking each market's rules prevents removal from a store or a regulator's penalty.

                ## Milestones
                1. Every paid randomised item listed with its odds.
                2. Odds disclosed in the app before purchase, as the stores require.
                3. Market rules summarised, with any restricted market handled.
                4. A review owner and date set for rule changes.

                ## Notes
                Start from the **Compliance control** template. Ask counsel to confirm the position in each market, as rules here change frequently.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every paid randomised item has disclosed odds, each market's rules are summarised and handled, and a review owner is named."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every paid item with a random outcome and its odds"
                - "Show odds in the app before purchase on every platform"
                - "Ask counsel to summarise the rules in each market you sell in"
                - "Check randomised item rules in your markets for changes @recurring(yearly)"
---

# In-App Monetisation

This area is for product teams and founders who sell inside their app: one-off purchases, consumables, subscriptions bought through the stores, add-ons, ads and virtual currency. It starts with foundations (a revenue baseline, a product catalogue, fairness principles, store fees and rules, receipts and refunds), moves to the weekly and monthly routines that watch revenue, refunds and purchase failures, then the skills, the changes and decisions that move revenue per user, the dated launches and sales, the situations founders and inheriting teams meet, and finally the specialist work on lifetime value, virtual economies and compliance.

What repeats is a weekly metrics review and purchase error check, monthly paywall funnels, refund, complaint, spender concentration, ad quality and offer planning reviews, quarterly price, catalogue and real-device walkthrough checks, and yearly reviews of principles, store terms and randomised item rules. The Metrics log, Compliance control, Feedback themes, Product spec, Marketing campaign and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
