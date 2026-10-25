---
id: founding-startups.startup-pricing-experiments
name: Startup Pricing Experiments
description: "A first price you can defend and change: a cost floor, a value metric, willingness-to-pay research, tiers and discounts with rules, a running test log, and price increases handled without losing trust."
category: business
version: 1.0.0
tags: [founding-startups, startup-pricing-experiments, founder, pricing, packaging, willingness-to-pay, discounts, price-increase]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - vendor
    - feedback-themes
    - meeting-notes
    - reading-queue
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Startup Pricing Experiments
          description: "Setting a first price and testing tiers, packaging and discounts with early customers, without anchoring too low to change later."
          projects:
            - name: What the first price has to achieve
              description: |-
                ## Purpose
                Founders often argue about a number before agreeing what the price is for: covering cost, signalling quality, filtering for serious buyers or winning a reference logo. Writing the two or three jobs the price must do, and the segment it is aimed at, turns every later debate into a check against an agreed goal.

                ## Milestones
                1. The target customer segment for the first price named in one sentence.
                2. Two or three jobs the price must do ranked in order.
                3. One thing the price is explicitly not trying to do written down.
                4. The one-pager agreed by every co-founder and dated.

                ## Notes
                A price aimed at everyone ends up fitting no one. Pick the segment you most want as reference customers and price for them first.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated one-page pricing goals note naming the target segment and ranked jobs of the price, signed off by all co-founders."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the segment you are pricing for in one sentence"
                - "List and rank the jobs the first price must do"
                - "Note one goal the price will deliberately ignore for now"
                - "Review the one-pager with your co-founder and date it"
            - name: Cost to serve and the price floor
              description: |-
                ## Purpose
                Below a certain price every new customer loses you money once hosting, payment fees, support time and third-party licences are counted. Working out that floor per plan, before any discount talk, stops a founder from agreeing a deal that grows the loss with every signature.

                ## Milestones
                1. Every variable cost of serving one customer listed with a monthly figure.
                2. Payment processor and app store fees included at their real percentage.
                3. A floor price per plan that keeps gross margin above the level you chose.
                4. The floor written into the discount policy as a hard limit.

                ## Notes
                Founder support time is a real cost even when unpaid. Price it at what a support hire would cost per hour.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cost-to-serve sheet giving a floor price per plan, with every cost line sourced from an invoice or a usage report."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull last month's hosting, tooling and licence invoices into one sheet"
                - "Estimate support hours per customer from your inbox or help desk"
                - "Add payment and platform fees at the rate you actually pay"
                - "Calculate the floor price per plan at your chosen gross margin"
            - name: Choosing the value metric
              description: |-
                ## Purpose
                The unit you charge by, whether seats, projects, transactions, gigabytes or outcomes, decides whether revenue grows as customers get more value or stalls while usage climbs. Picking it deliberately in the first months is far easier than migrating paying customers to a new unit later.

                ## Milestones
                1. Four or five candidate value metrics listed for the product.
                2. Each candidate scored on how well it tracks customer value, how easy it is to predict and how hard it is to game.
                3. Five customers asked which unit feels fair to them.
                4. One value metric chosen and the reasons recorded.

                ## Notes
                Seat pricing punishes customers for sharing the product. If the product spreads by inviting colleagues, look hard at a usage or workspace metric first.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One value metric chosen from at least four scored candidates, with five customer reactions recorded beside the decision."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every unit you could reasonably charge by"
                - "Score each unit on value tracking, predictability and gaming risk"
                - "Ask five customers which unit would feel fair to pay by"
                - "Record the chosen metric and the runner-up with reasons"
            - name: Competitor and alternative price map
              description: |-
                ## Purpose
                Customers judge your price against whatever they do today, which is often a spreadsheet, a freelancer or a big incumbent rather than another startup. Mapping those alternatives with their real total cost shows the range buyers already accept and where your price will look cheap or expensive.

                ## Milestones
                1. Eight to twelve alternatives listed, including doing nothing and the manual workaround.
                2. Published prices and estimated real cost recorded for each.
                3. Each alternative placed on one chart of price against value delivered.
                4. A sentence on where your price should sit and why.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A price map of at least eight alternatives with sourced prices and a written position for your own price."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the tools, services and workarounds customers use today"
                - "Record each alternative's published price and the plan most buyers use"
                - "Estimate the hidden cost of the manual workaround in hours"
                - "Plot the alternatives on a price against value chart"
            - name: First price set with written reasons
              description: |-
                ## Purpose
                Most first prices are guessed low out of fear, then defended for years because nobody remembers why they were chosen. Setting the number from the floor, the alternatives and what early buyers said, and writing the reasoning down, gives you something to test against instead of a figure to protect.

                ## Milestones
                1. Floor price, alternative range and willingness-to-pay evidence on one page.
                2. A first price chosen that sits above the floor and inside the range buyers accept.
                3. A short rationale written explaining the number.
                4. The conditions that would make you change it listed in advance.

                ## Notes
                If no prospect has winced at the price, it is probably too low. A few objections are a healthy sign at this stage.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A first list price is published or quoted, with a dated rationale and a list of triggers that would prompt a change."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put the floor price, competitor range and buyer quotes on one page"
                - "Choose a first price and write three sentences on why"
                - "List the evidence that would make you raise or lower it"
                - "Quote the new price to the next three prospects unchanged"
            - name: Pricing experiment log
              description: |-
                ## Purpose
                Without a log, pricing tests blur into memory and the same failed idea gets retried a year later. A single record of every change, test, cohort, result and decision lets a new hire or investor see how the price got where it is.

                ## Milestones
                1. A log set up with columns for hypothesis, change, cohort, dates, metric, result and decision.
                2. Every past price change backfilled with whatever evidence survives.
                3. A rule that no price change ships without a log entry.
                4. The log reviewed monthly and stale tests closed.

                ## Notes
                Start from the **Metrics log** template. Record tests that changed nothing as carefully as the ones that worked.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared log holds every price change since launch, each with a hypothesis, dates, result and recorded decision."
                cadence: rolling
              tasks:
                - "Create the log with hypothesis, cohort, metric and decision columns"
                - "Backfill every past price change you can find in billing history"
                - "Agree with the team that no price change ships without an entry"
                - "Close or extend each open test in the log @recurring(monthly:20)"
            - name: Choosing a billing provider that allows price changes
              description: |-
                ## Purpose
                Some billing setups make it painful to run two prices at once, grandfather a cohort or switch from monthly to usage billing. Choosing a provider with those needs in mind costs a few hours now and saves a migration when the third pricing change arrives.

                ## Milestones
                1. Pricing needs for the next two years listed: tiers, usage, annual, coupons, currencies and tax.
                2. Three billing providers compared against that list.
                3. Fees modelled at your expected revenue in year one and year two.
                4. A provider chosen and the reasons recorded.

                ## Notes
                Start from the **Vendor** template. Check how the provider handles sales tax or VAT in the countries you sell into, because that is often the hidden cost.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A billing provider chosen from three compared options, with fees modelled at two revenue levels and the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the pricing features you expect to need within two years"
                - "Compare three billing providers against the list"
                - "Model each provider's fees at year one and year two revenue"
                - "Record the chosen provider and the trade-offs you accepted"
            - name: Grandfathering policy before the first price change
              description: |-
                ## Purpose
                When you first raise prices, existing customers will ask whether it applies to them, and an improvised answer becomes a promise you are stuck with. Deciding now how long existing customers keep their price, and writing it into terms, makes later changes far less fraught.

                ## Milestones
                1. Options compared: permanent grandfathering, a fixed notice period, or a stepped move.
                2. A default notice period chosen for existing customers.
                3. The policy written in plain words and reflected in your terms.
                4. Any early customers promised a locked price listed by name.

                ## Notes
                Permanent grandfathering feels generous and becomes a large cost once you have hundreds of legacy plans. Have your terms reviewed by a lawyer before relying on them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written grandfathering policy with a notice period, reflected in your customer terms and with a named list of locked-price customers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search old emails for any price promises made to early customers"
                - "Compare permanent, fixed-period and stepped grandfathering options"
                - "Write the chosen policy in two plain paragraphs"
                - "Send the policy wording to your lawyer for the terms"
                - "Re-read the policy against the current customer base @recurring(yearly)"
            - name: Discount policy with a ceiling and approval rule
              description: |-
                ## Purpose
                Founders under pressure to close a deal give away 30 or 40 percent and then find every later customer has heard about it. A written policy with a maximum discount, the only reasons that justify one and something asked for in return keeps price integrity intact as more people start selling.

                ## Milestones
                1. A maximum discount set that stays above the price floor.
                2. The accepted reasons for a discount listed, such as annual prepay or a case study.
                3. A give-get rule written: every discount trades for something of value.
                4. An approval rule for anything above the standard level.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page discount policy with a numeric ceiling, accepted reasons, a give-get rule and a named approver, shared with everyone who quotes prices."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every discount given so far with its size and reason"
                - "Set a maximum discount that stays above the price floor"
                - "Write the trades you will accept in return for a discount"
                - "Share the policy with everyone who sends quotes"
            - name: First version of the pricing page
              description: |-
                ## Purpose
                Many buyers decide on the pricing page whether to talk to you at all, and a confusing one loses them silently. A first version that shows plans, what each includes, the unit you charge by and a clear next step answers the questions prospects otherwise email about.

                ## Milestones
                1. Plans, prices and the value metric shown without needing to scroll on a laptop.
                2. The five most common pricing questions answered in a short FAQ.
                3. A clear call to action per plan, including contact sales where relevant.
                4. Three prospects watched reading the page and their confusion noted.

                ## Notes
                Hiding the price behind a contact form makes sense only for large contracts. For smaller buyers it mainly sends them to competitors who show a number.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A live pricing page showing every plan, its price and value metric, an FAQ of at least five questions and a tested call to action."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the pricing questions prospects have asked by email or call"
                - "Ask the agent to draft a plan comparison table from your feature list"
                - "Publish the page with an FAQ answering the top five questions"
                - "Watch three prospects read the page and note where they hesitate"
            - name: Monthly pricing metrics review
              description: |-
                ## Purpose
                Price problems show up first in a handful of numbers: average revenue per account, trial or demo to paid conversion, plan mix, average discount and downgrades. Looking at them together once a month catches a creeping discount habit or a plan nobody chooses before it shapes the business.

                ## Milestones
                1. Five pricing metrics defined with exact formulas.
                2. A simple monthly table pulling them from billing and analytics.
                3. Twelve months of history once available, with trends marked.
                4. Each review ending with one recorded decision or a note that none is needed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pricing metrics table updated every month for six months running, with one decision or explicit no-change note per review."
                cadence: rolling
              tasks:
                - "Define the five pricing metrics and their formulas in writing"
                - "Build a monthly table fed from billing and analytics exports"
                - "Update the pricing metrics table and note one decision @recurring(monthly:9)"
                - "Compare this quarter's plan mix with last quarter's @recurring(quarterly)"
            - name: Pricing objection capture
              description: |-
                ## Purpose
                Objections such as 'too expensive', 'we only need one feature' or 'can we pay yearly' are the cheapest pricing research a founder gets, and most of it evaporates after the call. Capturing them in one place each week shows which objections are about price and which are really about value or packaging.

                ## Milestones
                1. One place set up where every pricing objection is recorded with the deal and segment.
                2. Objections tagged as price level, packaging, value metric or budget timing.
                3. A monthly count of objections by tag.
                4. The top recurring objection matched to a test or a change.

                ## Notes
                Start from the **Feedback themes** template. 'Too expensive' on its own usually means the value was not shown, so ask what they compared it with.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 30 objections recorded and tagged within three months, with the top theme linked to a logged test or change."
                cadence: rolling
              tasks:
                - "Set up the objection record with deal, segment and tag columns"
                - "Copy the week's pricing objections from call notes into the record @recurring(weekly:fri)"
                - "Ask 'compared with what' the next time someone says it is too expensive"
                - "Link the most frequent objection to a test in the experiment log"
            - name: Discount ledger and leakage audit
              description: |-
                ## Purpose
                Small one-off discounts, extended trials and free months add up quietly, and many founders discover a year later that the real price is a third below the list price. A ledger of every concession and a monthly look at it shows the gap between list and realised price.

                ## Milestones
                1. Every active discount, coupon and free extension listed with its expiry.
                2. The average realised price calculated against list price.
                3. Expired discounts confirmed as rolled off in billing.
                4. Discounts outside policy flagged and their owners spoken to.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A discount ledger matching billing records, with realised price against list price reported every month."
                cadence: rolling
              tasks:
                - "Export every active coupon and discount from the billing system"
                - "Add expiry dates and the reason for each concession"
                - "Reconcile the ledger with billing and check expired discounts rolled off @recurring(monthly:16)"
                - "Raise any out-of-policy discount with the person who gave it"
            - name: Quarterly price review meeting
              description: |-
                ## Purpose
                Pricing drifts when it is everybody's concern and nobody's meeting. A quarterly hour with the founders, and later sales and product leads, to review the metrics, objections and open tests means price is set on purpose four times a year instead of in a panic.

                ## Milestones
                1. A standing quarterly meeting in the calendar with a fixed agenda.
                2. Metrics, discount ledger, objections and tests reviewed in each meeting.
                3. Decisions and owners recorded in the meeting notes.
                4. Each decision copied into the experiment log.

                ## Notes
                Start from the **Meeting notes** template. Keep it short: pricing decisions improve with evidence, not with longer meetings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly price reviews held in a year, each with recorded decisions and owners copied into the experiment log."
                cadence: cyclic
              tasks:
                - "Book a recurring quarterly price review with a fixed agenda"
                - "Prepare the metrics, ledger and objection summary before each review @recurring(quarterly)"
                - "Record each decision with an owner and a date"
                - "Copy decisions into the pricing experiment log"
            - name: Competitor price watch
              description: |-
                ## Purpose
                Competitors change prices and packaging without announcement, and prospects notice before you do. A quarterly check of their pricing pages, saved as screenshots, keeps your price map current and gives early warning of a price war or a gap to step into.

                ## Milestones
                1. Five to eight competitor pricing pages on a watch list.
                2. Dated screenshots saved each quarter.
                3. Changes in price, tiers or limits noted against the previous capture.
                4. Any change that affects your position raised at the price review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Dated captures of every watched competitor's pricing page for four consecutive quarters, with changes noted."
                cadence: cyclic
              tasks:
                - "Choose the five to eight competitors worth watching"
                - "Capture and file each competitor's pricing page @recurring(quarterly)"
                - "Note any change in price, tier names or limits"
                - "Update the alternative price map when something moves"
            - name: Downgrade and cancellation price signals
              description: |-
                ## Purpose
                When customers downgrade or leave, price is often the stated reason and rarely the whole story. Reading every downgrade and cancellation reason each month separates customers who found the price unfair from those who never got value, which need very different fixes.

                ## Milestones
                1. A required reason field on downgrade and cancellation flows.
                2. Reasons sorted into price, value, fit and circumstance.
                3. A monthly count of price-driven losses by plan.
                4. Three price-driven leavers called to understand the real cause.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every downgrade and cancellation for three months has a sorted reason, and at least three price-driven leavers have been interviewed."
                cadence: rolling
              tasks:
                - "Add a required reason question to the downgrade and cancel flows"
                - "Sort last month's downgrade and cancellation reasons into four groups @recurring(monthly:4)"
                - "Call three customers who left citing price"
                - "Write what the calls revealed about price versus value"
            - name: Pricing test backlog and one-at-a-time rule
              description: |-
                ## Purpose
                Running several pricing changes at once makes it impossible to say which one moved conversion. A ranked backlog of test ideas, with a rule that only one runs per segment at a time, keeps the evidence clean and the team from changing prices on impulse.

                ## Milestones
                1. A backlog of pricing test ideas, each with a hypothesis and expected effect.
                2. Ideas ranked by likely impact and ease of running.
                3. A written rule limiting live tests to one per segment.
                4. The top idea scheduled with a start date and minimum sample.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ranked backlog of at least eight test ideas exists, and no segment has had overlapping price tests in the last six months."
                cadence: rolling
              tasks:
                - "Write every pricing idea from the team as a one-line hypothesis"
                - "Rank the backlog by expected impact and effort"
                - "Re-rank the backlog and schedule the next test @recurring(monthly:27)"
                - "Write the one-live-test-per-segment rule into the experiment log"
            - name: Plan limit and expansion signal watch
              description: |-
                ## Purpose
                Customers who keep hitting a seat, usage or project limit are either ready to upgrade or quietly annoyed enough to leave. Watching who sits near a limit each week tells you whether the limits are set in the right place and who to talk to about the next plan.

                ## Milestones
                1. Each plan's limits listed with the usage measure behind them.
                2. A weekly report of accounts above 80 percent of any limit.
                3. An agreed response for accounts near a limit, from a nudge to a call.
                4. A quarterly view of whether any limit is hit too early or never.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly near-limit report runs for three months, and each limit has been kept or moved with a logged reason."
                cadence: rolling
              tasks:
                - "List every plan limit and the usage figure that measures it"
                - "Build a report of accounts above 80 percent of a limit"
                - "Review the near-limit report and contact the top accounts @recurring(weekly:tue)"
                - "Note any limit that almost no customer reaches"
            - name: Annual price rise calendar
              description: |-
                ## Purpose
                Prices left untouched for years fall behind costs and the value the product has gained, and then the eventual rise feels like a shock. A yearly slot to decide on a rise, with notice dates worked backwards from renewals, makes small regular increases normal.

                ## Milestones
                1. A fixed month each year chosen to decide on price changes.
                2. Notice dates worked back from the main renewal dates.
                3. A record of what changed in cost and product since the last rise.
                4. A yes or no decision recorded each year, with reasons.

                ## Notes
                Many customers accept a modest yearly rise far more easily than a large one every few years. Check what notice your contracts require.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A price rise decision is recorded every year in the chosen month, with notice sent on time whenever a rise goes ahead."
                cadence: cyclic
              tasks:
                - "Choose the month each year when price rises are decided"
                - "List the main renewal dates and the notice your contracts require"
                - "Decide whether to raise prices this year and record why @recurring(yearly)"
                - "List product improvements shipped since the last rise"
            - name: Price-to-value check-ins with five customers
              description: |-
                ## Purpose
                Dashboards show what customers pay but not whether they think it is fair. Five short conversations a month with paying customers about what they get, what they would pay for next and what would make them leave keeps the founder's sense of value tied to real people.

                ## Milestones
                1. A rotating list of paying customers across plans and segments.
                2. Three standard questions on value, fairness and the next thing worth paying for.
                3. Five check-ins held each month with notes filed.
                4. A quarterly summary of what customers say the product is worth.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five customer price-to-value conversations held each month for a quarter, with notes filed and a quarterly summary written."
                cadence: rolling
              tasks:
                - "Build a rotating list of customers across every plan"
                - "Write three questions on value, fairness and what to pay for next"
                - "Book five price-to-value check-ins for the coming month @recurring(monthly:12)"
                - "Summarise the quarter's answers in half a page"
            - name: Willingness-to-pay interview technique
              description: |-
                ## Purpose
                Asking 'what would you pay?' gets polite, low and useless answers. Learning to ask about current spending, budget owners, the cost of the problem and reactions to specific prices produces evidence you can set a number from.

                ## Milestones
                1. An interview guide of eight to ten questions that avoids hypothetical price asks.
                2. Two practice interviews recorded and reviewed with a peer.
                3. Ten real willingness-to-pay interviews completed in the target segment.
                4. A summary of the price range buyers treated as cheap, fair and too much.

                ## Notes
                Show a real price and watch the reaction rather than asking for a number. A pause or a budget question tells you more than a quoted figure.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten willingness-to-pay interviews completed with a written guide and a summary of the price ranges buyers reacted to."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draft an interview guide built on current spending and budget questions"
                - "Run two practice interviews with a friendly founder"
                - "Book ten interviews with buyers in the target segment"
                - "Write a one-page summary of cheap, fair and too-expensive ranges"
            - name: Van Westendorp price sensitivity survey
              description: |-
                ## Purpose
                Once you have a few hundred prospects or users, four questions about when a price feels too cheap, a bargain, getting expensive and too expensive give a usable acceptable range. Running the survey properly, on the right audience, is a quick way to sanity-check a price that was set by gut.

                ## Milestones
                1. The four standard questions written with a clear product description.
                2. The survey sent to a defined audience of at least 100 relevant people.
                3. The four curves plotted and the acceptable range read off.
                4. The result compared with your current price and noted in the log.

                ## Notes
                The method tells you what people say, not what they pay. Treat the range as a boundary to test within, not as the answer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Van Westendorp survey with at least 100 responses from the target segment, with plotted curves and a range recorded in the experiment log."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the four price sensitivity questions with a product summary"
                - "Send the survey to at least 100 people in the target segment"
                - "Plot the four curves and read off the acceptable range"
                - "Record how the range compares with your current price"
            - name: Packaging research with MaxDiff and conjoint
              description: |-
                ## Purpose
                Deciding which features belong in which tier by internal debate tends to reward whatever the team built most recently. A MaxDiff survey on feature importance, or a simple conjoint on plan bundles, shows which features buyers would pay more for and which are table stakes.

                ## Milestones
                1. The difference between MaxDiff and conjoint understood well enough to choose one.
                2. A feature list of 10 to 20 items written in customer language.
                3. A survey run with enough respondents for the tool you used.
                4. Features grouped into must-have, upgrade driver and nice-to-have.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed MaxDiff or conjoint study ranking at least ten features, with each feature labelled must-have, upgrade driver or nice-to-have."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Read a short guide comparing MaxDiff and conjoint surveys"
                - "Rewrite your feature list in words a customer would use"
                - "Run the survey with a tool that supports the method you chose"
                - "Sort features into must-have, upgrade driver and nice-to-have"
            - name: Reading pricing test results honestly
              description: |-
                ## Purpose
                A pricing test on 40 signups can show a 30 percent lift that is pure noise, and founders who want a higher price will believe it. Learning enough about sample sizes, confidence intervals and revenue per visitor to judge a result keeps you from shipping a lucky number.

                ## Milestones
                1. Sample size for a conversion test worked out for your traffic.
                2. Revenue per visitor understood as the main metric, not conversion alone.
                3. One past test reanalysed with the new method.
                4. A one-page checklist for judging every future pricing test.

                ## Notes
                A higher price that converts slightly worse can still earn more per visitor. Judge tests on revenue, and on retention once you have it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written checklist for judging pricing tests, applied to at least one past test with sample size and revenue per visitor calculated."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Use a sample size calculator with your real traffic and conversion"
                - "Calculate revenue per visitor for your last pricing change"
                - "Reanalyse one past test with confidence intervals"
                - "Write a one-page checklist for judging pricing tests"
            - name: Anchoring, decoys and price presentation
              description: |-
                ## Purpose
                The same price can look cheap or steep depending on what sits beside it, whether it is shown monthly or yearly and how many plans are on the page. Understanding anchoring, decoy plans and charm pricing helps you present an honest price well, without slipping into tricks that damage trust.

                ## Milestones
                1. The main presentation effects studied: anchoring, decoys, framing and round versus charm prices.
                2. Your pricing page reviewed against each effect.
                3. Two presentation changes chosen to test.
                4. A line drawn on which tactics you will not use.

                ## Notes
                Fake countdown timers and pre-ticked add-ons work briefly and can breach consumer protection rules in many countries. Keep presentation honest.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your pricing page reviewed against four presentation effects, with two changes added to the test backlog and a written list of tactics ruled out."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read two case studies on price anchoring and decoy plans"
                - "Review your pricing page against each presentation effect"
                - "Add two presentation changes to the test backlog"
                - "Write down the persuasion tactics you will not use"
            - name: Saying the price out loud without flinching
              description: |-
                ## Purpose
                Many technical founders rush the price, apologise for it or offer a discount before the buyer reacts. Practising stating the number, then staying quiet, and handling the three most common pushbacks turns the most awkward moment in a sales call into a routine one.

                ## Milestones
                1. A one-sentence way of stating the price and what it includes.
                2. Responses written for the three pushbacks you hear most.
                3. Weekly role-plays held for a month with a peer or co-founder.
                4. Five real calls where the price was stated without an unprompted discount.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Five recorded sales calls in which the price was stated plainly and no discount was offered before the buyer asked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write one sentence that states the price and what it includes"
                - "Draft replies to your three most common price pushbacks"
                - "Role-play the price moment with a peer for ten minutes @recurring(weekly:wed)"
                - "Review a recorded call and note whether you discounted unprompted"
            - name: Pricing reading list and case studies
              description: |-
                ## Purpose
                Reading a few well-chosen books and teardown articles on software and product pricing saves founders from rediscovering well-known mistakes. Working through them with your own pricing questions in hand turns general advice into specific ideas for the test backlog.

                ## Milestones
                1. A reading list of four to six pricing books and articles.
                2. Your three open pricing questions written at the top.
                3. Notes taken on each item against those questions.
                4. At least three ideas added to the test backlog.

                ## Notes
                Start from the **Reading queue** template. Look for case studies from companies at your stage and price point, not only famous late-stage ones.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four pricing books or long articles read with notes, producing at least three new entries in the test backlog."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write your three open pricing questions at the top of the list"
                - "Choose four to six pricing books and teardown articles"
                - "Take notes on each one against your open questions"
                - "Add three ideas from the reading to the test backlog"
            - name: Good, better, best tier design
              description: |-
                ## Purpose
                Three plans aimed at clearly different buyers let small customers start cheaply and large ones pay for what they need, while a single plan leaves money on both ends. Designing tiers around customer types rather than feature counts gives each plan an obvious owner.

                ## Milestones
                1. Three buyer types described with what each needs and can spend.
                2. One tier drafted per buyer type with a price and a value metric limit.
                3. The middle tier set up as the obvious choice for the main segment.
                4. The draft tiers shown to five prospects and reactions recorded.

                ## Notes
                If you cannot name the buyer for a tier in one phrase, the tier probably should not exist.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three tiers defined, each tied to a named buyer type with a price and limits, and tested with five prospects."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Describe three buyer types by size, need and budget"
                - "Draft one tier per buyer type with a price and limits"
                - "Show the draft tiers to five prospects and note which they pick"
                - "Adjust tiers where prospects chose differently than expected"
            - name: Feature fencing between tiers
              description: |-
                ## Purpose
                Putting the wrong feature behind an upgrade either blocks new users from the product's core value or gives large customers no reason to pay more. Deciding fences deliberately, usually around scale, control and security rather than the core workflow, keeps upgrades feeling earned rather than extracted.

                ## Milestones
                1. Every feature listed with the tier it currently sits in.
                2. Features that deliver the core value kept in the entry tier.
                3. Upgrade fences chosen around scale, administration, integrations or support.
                4. Fence changes written up for existing customers before release.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A feature-by-tier table with a written reason for every fence, and any change to existing customers communicated before release."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every feature with the tier it sits in today"
                - "Mark the features that deliver the product's core value"
                - "Move upgrade fences to scale, admin, integrations or support"
                - "Draft the note to customers affected by any fence change"
            - name: Free tier, free trial or neither
              description: |-
                ## Purpose
                Offering a free tier can bring in a crowd who never pay and cost real money to support, while a trial with no clear finish line converts poorly. Deciding between freemium, a time-limited trial, a reverse trial or paid-only, based on how fast users reach value, is one of the biggest pricing calls an early company makes.

                ## Milestones
                1. Time to first value measured for new users.
                2. The cost of supporting a free user estimated.
                3. Freemium, trial, reverse trial and paid-only compared against both numbers.
                4. One model chosen with the metric that will judge it after 90 days.

                ## Notes
                A product that takes weeks to show value rarely suits a 14-day trial. Match the trial length to how long setup really takes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An acquisition model chosen from four compared options, with time to value and free-user cost measured and a 90-day judging metric recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure how long new users take to reach first value"
                - "Estimate the monthly cost of supporting one free user"
                - "Compare freemium, trial, reverse trial and paid-only on one page"
                - "Record the chosen model and the metric that will judge it"
            - name: Monthly versus annual billing and the prepay discount
              description: |-
                ## Purpose
                Annual prepayment improves cash and retention, but too large a discount gives away margin to customers who would have stayed anyway. Testing whether to offer annual billing, at what discount and as the default or an option, is one of the safer early pricing experiments.

                ## Milestones
                1. Current share of customers on annual plans measured.
                2. Two annual discount levels chosen to compare.
                3. A test run on new customers with the default billing period recorded.
                4. A standard annual discount and default chosen from the result.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An annual discount and default billing period chosen from a test on new customers, with annual share and cash impact recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Measure the share of customers currently paying annually"
                - "Pick two annual discount levels to compare"
                - "Run the test on new signups for a set number of weeks"
                - "Record the chosen discount and default in the experiment log"
            - name: Testing a higher price on new customers
              description: |-
                ## Purpose
                The safest way to learn whether the price is too low is to raise it for new prospects only and watch conversion and deal size. A time-boxed test on new signups, with existing customers untouched, gives a real answer at little risk to the base you have.

                ## Milestones
                1. A higher price chosen, usually 20 to 50 percent above the current one.
                2. A start date, minimum sample and judging metric written in the log.
                3. The new price shown to all new prospects for the test period.
                4. Conversion and revenue per visitor compared with the previous period.

                ## Notes
                Show one price to everyone at any moment rather than splitting visitors randomly; different prices for the same thing on the same day upset customers who compare notes.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A new-customer price test run to its planned sample, with revenue per visitor compared and a keep or revert decision logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose a test price between 20 and 50 percent above today's"
                - "Write the start date, sample size and metric in the experiment log"
                - "Switch the price for all new prospects on the start date"
                - "Compare revenue per visitor with the previous period and decide"
            - name: Add-ons and paid extras
              description: |-
                ## Purpose
                Some features are worth a lot to a few customers and nothing to most, such as extra storage, premium support or a compliance pack. Selling them as add-ons rather than forcing a tier jump lets the base price stay simple while capturing value from the customers who need more.

                ## Milestones
                1. Features with very uneven value across customers identified.
                2. Two or three add-on candidates priced against their cost and value.
                3. One add-on offered to existing customers as a test.
                4. Take-up and effect on tier upgrades recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "At least one add-on offered and measured for take-up over two months, with a keep, change or drop decision logged."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find features only a small share of customers use heavily"
                - "Price two add-on candidates against their cost and value"
                - "Offer one add-on to existing customers for two months"
                - "Record take-up and any change in tier upgrades"
            - name: Nonprofit, education and early-stage discount programme
              description: |-
                ## Purpose
                Requests for charity, school and startup discounts arrive one by one, and answering each ad hoc creates a patchwork of prices nobody can explain. A single published programme with eligibility rules, a fixed discount and proof required lets you say yes quickly to the customers you want while keeping the list price intact for everyone else.

                ## Milestones
                1. Every special-category discount given so far listed with its size.
                2. Eligible groups chosen and the proof each must show written down.
                3. One fixed discount level and any plan limits set for the programme.
                4. The programme published and past ad hoc deals moved onto it at renewal.

                ## Notes
                Decide whether the programme exists for goodwill, for reach into a segment or for future revenue. The answer changes how generous it should be.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published discount programme with named eligible groups, proof rules and one fixed discount, with every earlier ad hoc deal scheduled to move onto it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every charity, school or startup discount given so far"
                - "Choose the eligible groups and the proof each must provide"
                - "Set one fixed programme discount and any plan limits"
                - "Publish the programme and note ad hoc deals to move at renewal"
            - name: Usage-based or hybrid pricing evaluation
              description: |-
                ## Purpose
                Usage pricing aligns revenue with value for products whose consumption varies widely, but it makes bills unpredictable and revenue harder to forecast. Modelling a usage or hybrid scheme against your real customer data shows who would pay more, who would pay less and whether buyers can budget for it.

                ## Milestones
                1. Three months of usage data per customer pulled together.
                2. A usage-only and a base-plus-usage scheme modelled on that data.
                3. Winners and losers listed under each scheme.
                4. Five customers asked whether they could budget for a variable bill.

                ## Notes
                Buyers with fixed annual budgets often prefer committed usage bundles with overage to pure pay-as-you-go.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two usage-based schemes modelled on real customer data, with the revenue effect per customer and five buyer reactions recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export three months of usage per customer"
                - "Model a usage-only and a base-plus-usage scheme on the data"
                - "List which customers would pay more or less under each"
                - "Ask five customers whether a variable bill fits their budgeting"
            - name: Converting pilots and design partners to paid
              description: |-
                ## Purpose
                Free pilots that drift past their end date teach customers the product costs nothing. Setting a conversion date, a price and a written offer for each pilot turns goodwill into the first real evidence of what the product is worth.

                ## Milestones
                1. Every free or discounted pilot listed with its start date and agreed value.
                2. A conversion price and date set for each pilot.
                3. A written offer sent to each pilot customer before the date.
                4. Each pilot converted, extended on paid terms or ended.

                ## Notes
                Agree at the start of any new pilot what it will cost afterwards. It is much harder to introduce a price to someone who has never expected one.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every open pilot has a recorded outcome by the deadline: converted at a stated price, extended on paid terms or ended."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every pilot with its start date and what was promised"
                - "Set a conversion price and date for each pilot"
                - "Ask the agent to draft a conversion offer for each pilot customer"
                - "Send each offer and record the outcome in the log"
            - name: First price increase for existing customers
              description: |-
                ## Purpose
                Raising prices on people who already pay is the moment founders fear most, and handled clumsily it costs trust and accounts. A planned rollout with notice, a clear reason, an offer to lock in annually and a plan for objections usually keeps nearly all customers.

                ## Milestones
                1. The new price, effective date and grandfathering terms decided.
                2. Customers segmented by plan, size and risk of leaving.
                3. A notice email and a short FAQ written and reviewed.
                4. Largest accounts told personally before the email goes out.
                5. Churn and objections tracked for 60 days after the change.

                ## Notes
                Lead with what has improved since they joined, give the notice your terms require or more, and do not apologise for the price.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A price increase delivered to existing customers with notice sent on time, top accounts contacted personally and 60-day churn recorded."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Decide the new price, effective date and any lock-in offer"
                - "Segment customers by plan, size and churn risk"
                - "Write the notice email and a five-question FAQ"
                - "Call the largest accounts before the notice goes out"
                - "Track cancellations and objections for 60 days after the change"
            - name: Founding member offer with a hard end date
              description: |-
                ## Purpose
                An introductory price for early adopters can bring in committed first customers, but open-ended launch discounts become the permanent price in buyers' minds. A founding member offer with a fixed number of places, a firm close date and clear terms rewards early belief without anchoring the market low.

                ## Milestones
                1. The offer defined: price, number of places, duration and what members get.
                2. A close date published and honoured.
                3. Founding members tagged in billing so their terms are visible.
                4. Full price shown to everyone after the close date.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A founding member offer that closed on its published date, with members tagged in billing and full price live the next day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set the offer price, number of places and how long it lasts"
                - "Publish the close date wherever the offer appears"
                - "Tag founding members in the billing system"
                - "Switch every page to the full price on the close date"
            - name: Seasonal promotion with a fixed end and review
              description: |-
                ## Purpose
                Consumer founders feel pressure to join every sale season, yet deep discounts can train buyers to wait and pull revenue forward rather than adding it. Deciding whether to run a promotion, at what depth and for whom, then reviewing it against a normal month, shows whether it earned anything.

                ## Milestones
                1. A go or no-go decision on the promotion with reasons.
                2. Depth, eligible customers and end date fixed in writing.
                3. Revenue and new customers compared with a normal period.
                4. Retention of promotion customers checked after three months.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A promotion decision recorded and, if run, a review comparing its revenue and three-month retention with a normal period."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Decide whether to run a seasonal promotion and write why"
                - "Fix the discount depth, eligibility and end date"
                - "Compare promotion revenue with a normal month afterwards"
                - "Check how many promotion customers are still paying after three months"
            - name: First enterprise quote and procurement
              description: |-
                ## Purpose
                Procurement teams at large buyers will ask for discounts, payment terms and a price that holds for three years, and a founder quoting from a self-serve page has nothing to fall back on. Preparing a structured quote, a walk-away price and a list of trades in advance stops the first big deal from setting a precedent you regret.

                ## Milestones
                1. A quote built from list price, volume and contract length.
                2. A walk-away price written down before negotiation starts.
                3. A list of concessions you can trade, such as term length or a case study.
                4. Final terms recorded with what was given and what was received.

                ## Notes
                Procurement teams expect to negotiate. Leave room in the first quote and trade every reduction for something specific.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A signed or declined enterprise quote with a pre-set walk-away price, a list of trades and final terms recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build the quote from list price, volume and contract length"
                - "Write your walk-away price before the first negotiation call"
                - "List the concessions you will trade and what you want in return"
                - "Record the final terms and every concession made"
            - name: Bootstrapped founder pricing for profit
              description: |-
                ## Purpose
                Without investor money, a founder cannot afford to underprice for growth and wait for scale. Pricing so that a few dozen customers cover your own living costs and tools changes which customers you chase and how quickly you can go full time.

                ## Milestones
                1. Monthly personal and company costs added up into one target.
                2. The number of customers needed at current price worked out.
                3. A price tested that cuts that number by at least a third.
                4. A decision on whether to pursue fewer, higher-paying customers.

                ## Notes
                Ten customers at a higher price are usually easier to find and support than a hundred at a low one when you are working alone.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written break-even customer count at current and test prices, with a decision on which customer segment to pursue."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add up the monthly costs the business must cover, including your pay"
                - "Work out how many customers that takes at today's price"
                - "Quote a higher price to the next five prospects"
                - "Decide whether to target fewer, higher-paying customers"
            - name: Consumer subscription and app store pricing
              description: |-
                ## Purpose
                Consumer app founders price inside the app stores' rules: fixed price points by country, a commission on each sale, introductory offers and family sharing. Setting monthly, annual and trial prices with those constraints in view avoids surprises in net revenue and in how prices show abroad.

                ## Milestones
                1. Store commission and tax effects on net revenue per subscription worked out.
                2. Monthly and annual price points chosen from the store's tiers.
                3. Regional prices reviewed for your largest five countries.
                4. Introductory or trial offer configured with an end date.

                ## Notes
                Check each store's current rules on commission rates and external payment links, as they change and vary by country.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Monthly, annual and trial prices set in each store, with net revenue per subscription calculated and regional prices reviewed for five countries."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate net revenue per subscription after store commission and tax"
                - "Choose monthly and annual price points from the store tiers"
                - "Review the automatic regional prices for your top five countries"
                - "Check store price tiers and regional prices against costs @recurring(yearly)"
            - name: Marketplace take rate setting
              description: |-
                ## Purpose
                A marketplace earns a cut of each transaction, and too high a take rate pushes buyers and sellers to deal off-platform. Setting the rate from the value you add on each side, and watching for leakage, matters more than matching what other marketplaces charge.

                ## Milestones
                1. The value added to buyers and to sellers listed separately.
                2. Take rates of comparable marketplaces gathered.
                3. A rate chosen, and who pays it decided: buyer, seller or both.
                4. A quarterly check on signs of off-platform leakage.

                ## Notes
                Leakage rises when the platform's value ends after the first introduction. Payments, protection and repeat booking tools make the fee worth paying.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A take rate and fee split chosen with written reasons, and a leakage check run each quarter for a year."
                cadence: rolling
              tasks:
                - "List what the platform does for buyers and for sellers"
                - "Gather take rates from five comparable marketplaces"
                - "Decide the rate and whether buyers, sellers or both pay it"
                - "Review repeat-pair transactions for signs of leakage @recurring(quarterly)"
            - name: Hardware retail price from cost and channel margin
              description: |-
                ## Purpose
                Hardware founders often set a price from the bill of materials plus a markup, then discover retailers and distributors each want their own margin. Working backwards from the shelf price through channel margins, returns and freight to a target cost shows whether the product works in retail at all.

                ## Milestones
                1. Landed cost per unit calculated, including freight, duty and packaging.
                2. Channel margins for direct, retail and distributor routes gathered.
                3. A retail price that leaves your target margin in each channel.
                4. The bill of materials cost reviewed every quarter as volumes change.

                ## Notes
                Budget for returns and warranty replacements from the start. They are a much larger share of cost for hardware than founders expect.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A price waterfall from retail price to landed cost for each sales channel, showing your margin in each."
                cadence: rolling
              tasks:
                - "Calculate landed cost per unit including freight and duty"
                - "Ask two retailers or distributors what margin they expect"
                - "Build a price waterfall for direct and retail channels"
                - "Update unit cost from the latest supplier quotes @recurring(quarterly)"
            - name: Pricing a productised service
              description: |-
                ## Purpose
                Founders moving from consulting or agency work to a productised service usually carry hourly thinking into fixed packages and underprice them. Pricing each package on the outcome and its scope limits, with your real delivery hours measured, protects margin as volume grows.

                ## Milestones
                1. Delivery hours measured for the last five jobs of each package.
                2. A fixed price per package set from outcome value, not hours alone.
                3. Scope limits and the price for extra work written into each package.
                4. Margin per package checked after the next five deliveries.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fixed prices and written scope limits for every package, with measured margin from at least five deliveries each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Log actual delivery hours for the last five jobs per package"
                - "Price each package on the outcome it delivers"
                - "Write the scope limits and extra work rate for each package"
                - "Check margin per package after the next five deliveries"
            - name: Pricing from a small home market
              description: |-
                ## Purpose
                A founder in a small or emerging market, for example in the Caribbean, often sells to local customers in local currency and to overseas customers in US dollars or euros. Deciding which currency to price in, whether to offer local prices and how to handle exchange movements keeps local customers and foreign margins both workable.

                ## Milestones
                1. Customers split by country and the currency they would prefer to pay in.
                2. A decision on local currency pricing, a single hard currency or both.
                3. A rule for when exchange movements trigger a price review.
                4. Local payment methods and their fees checked.

                ## Notes
                Exchange controls and payment restrictions differ by country. Check with your bank and an accountant before collecting in foreign currency.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded currency pricing decision with a written exchange rate review rule, checked monthly for six months."
                cadence: rolling
              tasks:
                - "List customers by country and the currency each pays in"
                - "Decide between local prices, one hard currency or both"
                - "Write the exchange rate movement that triggers a price review"
                - "Check exchange rates against your price review rule @recurring(monthly:2)"
            - name: Price book and deal desk rules
              description: |-
                ## Purpose
                Once two or three people besides the founder send quotes, pricing knowledge needs to live in a document rather than a head. A price book with list prices, volume bands, standard terms and an approval path for exceptions lets others sell without each deal reopening the price.

                ## Milestones
                1. List prices, volume bands and contract length discounts in one price book.
                2. Standard payment terms and the exceptions allowed.
                3. An approval path for deals outside the book.
                4. A record of every exception approved and why.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A price book in use by everyone who quotes, with every out-of-book deal approved through the written path and recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect every quote sent in the last six months"
                - "Write list prices, volume bands and term discounts in one document"
                - "Set the approval path for deals outside the book"
                - "Start a register of approved exceptions with reasons"
            - name: Price elasticity from cohort data
              description: |-
                ## Purpose
                After several price changes and a year of cohorts, you can estimate how conversion, retention and expansion actually respond to price in each segment. Elasticity by segment shows where there is room to charge more and where price is already doing damage.

                ## Milestones
                1. Cohorts grouped by the price they joined at and their segment.
                2. Conversion, 12-month retention and expansion compared across price points.
                3. An elasticity estimate per segment with its uncertainty stated.
                4. One segment-specific price change proposed from the analysis.

                ## Notes
                Other things change between cohorts, such as the product, the channel and the season. Note them beside every comparison.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An elasticity estimate per segment from at least three price cohorts, with confounders listed and one proposed change logged."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Group customers by the price they joined at and their segment"
                - "Compare conversion, retention and expansion across price points"
                - "Write an elasticity estimate per segment with its caveats"
                - "Refresh the cohort comparison with the latest quarter @recurring(quarterly)"
            - name: Credits and fair use for AI features
              description: |-
                ## Purpose
                AI features have a model cost on every request, so an unlimited plan can lose money on a handful of heavy users. Pricing with credits, usage caps or a fair-use policy, and checking monthly what each credit really costs, keeps margin positive as usage and model prices move.

                ## Milestones
                1. Cost per request measured for each AI feature.
                2. A credit, cap or fair-use model chosen and priced above cost.
                3. Heavy users identified and their margin calculated.
                4. A monthly check of model cost per credit against the price.

                ## Notes
                Model prices often fall, but usage per customer usually rises faster. Do not price on a cost reduction you have not yet seen.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every AI feature priced through credits, caps or fair use with positive margin per credit, checked monthly for six months."
                cadence: rolling
              tasks:
                - "Measure the average model cost per request for each AI feature"
                - "Choose credits, caps or fair use and price each above cost"
                - "List the ten heaviest users and their margin"
                - "Compare model cost per credit with the credit price @recurring(monthly:7)"
            - name: Migrating customers off legacy plans
              description: |-
                ## Purpose
                After a few years of experiments a startup can carry a dozen old plans, each with its own limits, which slows billing, support and every future price change. A planned migration onto current plans, with fair transition terms, simplifies the business and recovers revenue from long-grandfathered prices.

                ## Milestones
                1. Every legacy plan listed with its customers, revenue and differences from current plans.
                2. A mapping from each legacy plan to a current one.
                3. Transition terms set, such as a stepped price over a year.
                4. Customers notified and migrated in waves, with churn tracked.

                ## Notes
                Migrate the smallest, lowest-risk plans first to test the message before reaching the largest accounts.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All legacy plans mapped and at least half of legacy customers moved to current plans by the deadline, with churn recorded per wave."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Export every legacy plan with its customers and revenue"
                - "Map each legacy plan to the nearest current plan"
                - "Set stepped transition terms for customers facing a large rise"
                - "Migrate the smallest plan first and track churn"
---

# Startup Pricing Experiments

This area is for founders setting a price for the first time and then learning, with real customers, what the product is worth. It starts with the foundations (what the price must achieve, the cost floor, the value metric, a first price with written reasons, guardrails for grandfathering and discounts), then the routines that keep pricing honest, the research and negotiation skills behind good price calls, the tier, trial and billing decisions, dated moments like converting pilots to paid and the first price rise, variants for bootstrapped, consumer, marketplace, hardware, service and small-market founders, and finally the specialist work of price books, elasticity, AI credits and legacy plan migrations.

What repeats is a weekly objection and plan-limit check, monthly metrics, discount, downgrade and backlog reviews on different days, a quarterly price review and competitor watch, and a yearly price rise calendar. The **Metrics log**, **Vendor**, **Feedback themes**, **Meeting notes** and **Reading queue** templates pair with the experiment log, the billing choice, objection capture, the quarterly review and the reading list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
