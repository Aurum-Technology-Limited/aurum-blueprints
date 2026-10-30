---
id: data-analytics.recommendation-systems
name: Recommendation Systems
description: "Impression logs and time-based splits you can trust, baselines worth beating, retrieval and ranking models, diversity and business rules, and online tests that prove a recommender helps users and the business."
category: business
version: 1.0.0
tags: [data-analytics, recommendation-systems, engineer, researcher, collaborative-filtering, learning-to-rank, personalisation]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - reading-queue
    - purchase-decision
    - risk-register
    - remediation-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Recommendation Systems
          description: "Building systems that suggest products, content or actions to users, balancing relevance, diversity and business goals, and testing their effect."
          projects:
            - name: Recommendation surface inventory and slot goals
              description: |-
                ## Purpose
                Before choosing an algorithm, list every place the product shows suggestions: the home feed, the product page carousel, the basket add-on row, the email digest and the empty search result. Each slot has a different job, such as discovery, completing a basket or bringing a lapsed user back, and one model tuned for clicks will serve some of them badly. A written inventory with one goal per slot gives every later modelling and testing decision something to point at.

                ## Milestones
                1. Every recommendation surface listed with a screenshot, its share of traffic and the team that owns it.
                2. One primary goal and one guardrail written for each surface.
                3. The current logic behind each slot recorded, whether a model, a rule or a hand-picked list.
                4. Two or three surfaces ranked as the first candidates for a learned recommender, with the reason.

                ## Notes
                Count impressions per surface before ranking them. A slot below the fold on a low-traffic page rarely repays a model, however elegant.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A surface inventory covers every recommendation slot with owner, traffic share, goal, guardrail and current logic, and names the first two surfaces to model."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Screenshot every place the product currently suggests items to users"
                - "Pull last month's impression counts for each recommendation slot"
                - "Write one goal and one guardrail metric per surface with its owner"
                - "Rank the surfaces by traffic and by the gap between goal and current logic"
            - name: Impression and interaction logging for recommendations
              description: |-
                ## Purpose
                Most teams log clicks and purchases but not what was shown, in which position and by which model version, and without impressions you cannot tell an ignored item from one never seen. Fixing the event schema now is far cheaper than discovering a year from now that none of the history supports training, position bias correction or off-policy evaluation.

                ## Milestones
                1. An impression event that records request ID, user, item, slot, position, model version and, where possible, the serving score.
                2. Click, add to basket, purchase, dwell and dismiss events joined to the impression by request ID.
                3. A day of traffic checked end to end, with the click to impression join rate above an agreed threshold.
                4. The schema documented in the repository and owned by a named engineer.

                ## Notes
                Log the full served list, not only the items the user scrolled to, and record which positions were actually in view if the client can tell you. Propensities logged now make later off-policy work possible.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Impression events with request ID, position and model version are live on every recommendation surface, and at least 95 percent of clicks join back to an impression."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the fields your current click events carry and which are missing"
                - "Add request ID, position and model version to the impression event"
                - "Join a day of clicks to impressions and measure the join rate"
                - "Document the event schema in the team's repository"
            - name: Item catalogue and metadata readiness check
              description: |-
                ## Purpose
                Content-based features, cold start fixes and business filters all depend on the item catalogue, and catalogues are rarely as clean as product teams believe. Measuring how many items have a category, description, image, price and live availability flag shows which approaches are possible now and which need catalogue work first.

                ## Milestones
                1. Fill rates measured for category, title, description, image, price, availability and launch date across live items.
                2. Duplicate and near-duplicate items counted, with a rule for grouping variants such as sizes and colours.
                3. A ranked list of catalogue fixes sent to the owning team, ordered by how many recommendations they affect.
                4. A decision recorded on which metadata fields the first model may use.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A catalogue readiness report gives fill rates for at least seven fields, a variant grouping rule and the agreed list of fields usable for modelling."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the item catalogue with every metadata field to a working table"
                - "Calculate fill rates for each field across live items"
                - "Decide how product variants group into one recommendable item"
                - "Send the ranked list of catalogue gaps to the catalogue owner"
            - name: Popularity and co-occurrence baselines to beat
              description: |-
                ## Purpose
                Simple lists, such as most popular, recently viewed and bought together counts, often capture most of the value a complex model will add, and several published reproducibility studies found tuned simple baselines beating newer neural methods. Building them first sets a floor every candidate model must clear and gives the product something useful to ship while the real model is built.

                ## Milestones
                1. A global popularity baseline and a popularity by segment baseline built from the last 30 days.
                2. A recently viewed baseline and an item co-occurrence baseline built for the same window.
                3. All baselines scored on the same offline split with the same metric suite.
                4. The best baseline's scores published as the bar any new model must clear.

                ## Notes
                Tune the popularity window too. A seven-day window and a ninety-day window can differ by more than two model architectures do.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least four baselines are scored on the shared offline split, and the best one's metrics are published as the bar for new models."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Compute the top 100 items by interactions over the last 30 days"
                - "Build an item co-occurrence count from shared sessions or baskets"
                - "Score each baseline on the offline evaluation split"
                - "Publish the baseline scores where model reviewers will see them"
            - name: Time-based offline evaluation split
              description: |-
                ## Purpose
                Random splits of interaction logs let a model train on next week to predict last week, which inflates offline scores and hides the cold start problem. A split by time, with a training window, a gap and a test window that mirror how the model is retrained in production, makes offline results agree with online results far more often.

                ## Milestones
                1. Training, validation and test windows chosen to match the real retraining schedule.
                2. Users and items that appear only in the test window counted and reported separately.
                3. The split frozen as versioned tables or files with a reproducible build script.
                4. Known leakage paths, such as item popularity computed over all time, closed and listed.

                ## Notes
                Keep one fixed test window for long-run comparisons and roll a second one forward each month. Mixing the two makes progress charts meaningless.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned temporal split exists with a reproducible build script, documented windows and separate counts for new users and new items."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down how often the production model retrains and on how much history"
                - "Choose training, gap and test windows that match that schedule"
                - "Build the split with a script checked into version control"
                - "Roll the second test window forward to the latest month @recurring(monthly:2)"
            - name: Offline ranking metric suite
              description: |-
                ## Purpose
                Recall at k, NDCG, mean reciprocal rank, catalogue coverage and novelty each reward a different kind of list, and a team that reports only one drifts toward lists that game it. Agreeing a small suite, with k values that match how many items each surface actually shows, keeps model comparisons honest and arguments short.

                ## Milestones
                1. Metrics chosen for accuracy, ranking quality, coverage and novelty, with k matching each surface's visible slots.
                2. One evaluation function that computes the full suite from the frozen split.
                3. The function checked by hand on a toy example with a known answer.
                4. Results reported by segment as well as overall, including new and heavy users.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One evaluation function computes at least five agreed metrics at surface-matched k values, is checked on a toy example and reports by user segment."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count how many items each surface shows without scrolling"
                - "Pick one accuracy, one ranking, one coverage and one novelty metric"
                - "Write the evaluation function and test it on a five-user toy example"
                - "Add segment reporting for new, casual and heavy users"
            - name: Online success metric and guardrails for recommendations
              description: |-
                ## Purpose
                Click-through rate is easy to move and easy to regret: clickbait thumbnails and cheap accessories win clicks while sessions, returns and repeat visits fall. Choosing an online metric closer to real value, such as purchases per visitor, completed views or seven-day return rate, plus guardrails the recommender must not hurt, sets the rules before the first test rather than after a disappointing one.

                ## Milestones
                1. One primary online metric chosen per surface, with a sentence on why it reflects long-term value.
                2. Two to four guardrails named, for example revenue per visitor, return rate, latency and complaint rate.
                3. The minimum detectable effect estimated for each metric at current traffic.
                4. Sign-off from the product owner of each modelled surface.

                ## Notes
                General test design belongs to your experimentation process. This project settles which outcomes a recommender is judged on.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each modelled surface has a signed-off primary metric, two to four guardrails and a minimum detectable effect estimate on record."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the metrics product owners quote when recommendations come up"
                - "Choose a primary metric per surface that a clickbait list could not easily win"
                - "Estimate the detectable effect for each metric at current traffic"
                - "Get each surface owner to sign off the metric and guardrails"
            - name: Cold start inventory for new users and new items
              description: |-
                ## Purpose
                New users with no history and new items with no interactions are where collaborative models fail first, and in fast-moving catalogues new items can be a third of what is on sale. Measuring how much traffic and inventory is cold, and what each surface shows in that case today, tells you whether cold start is a corner case or the main problem.

                ## Milestones
                1. Share of sessions from users with fewer than three interactions measured per surface.
                2. Share of live items, and of revenue, from items younger than 14 days measured.
                3. The current fallback for cold users and cold items written down per surface.
                4. A ranked list of cold start fixes, such as onboarding questions, metadata models or exploration slots.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cold start report gives cold user and cold item shares per surface, the current fallbacks and a ranked list of at least three fixes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count last month's sessions from users with under three prior interactions"
                - "Count live items added in the last 14 days and their share of revenue"
                - "Record what each surface shows a brand new user today"
                - "Rank three cold start fixes by expected reach"
            - name: Business rules and exclusion filters for recommendations
              description: |-
                ## Purpose
                A model will happily suggest an out-of-stock item, the kettle a customer bought yesterday, an age-restricted product to a teenage account or a funeral service beside party supplies. Writing down the hard filters and business rules, and where in the pipeline each one runs, prevents the embarrassing failures that end recommender programmes faster than weak metrics ever do.

                ## Milestones
                1. A rule list covering availability, already purchased, region, age restriction, legal blocks and sensitive pairings.
                2. Each rule assigned a stage: candidate filter, post-ranking filter or display check.
                3. Rules implemented as tested code in one place, not scattered conditions in page templates.
                4. A named owner for adding or removing rules, with a change log.

                ## Notes
                Keep filters separate from the model. A rule baked into training data cannot be switched off quickly when it turns out to be wrong.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written rule list with stages and an owner is implemented as tested code, with one passing test per rule proving it blocks its example case."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect the worst recommendation screenshots support and merchandising have seen"
                - "Write each hard rule with an example item it must block"
                - "Assign every rule to the candidate, post-ranking or display stage"
                - "Review the rule list with merchandising and legal @recurring(quarterly)"
            - name: Weekly hand review of sampled recommendation lists
              description: |-
                ## Purpose
                Aggregate metrics hide the lists that make users laugh or leave, such as five near-identical phone cases or a children's film suggested after a horror title. Reading twenty sampled lists each week, across new and heavy users, catches failure patterns no metric was written to measure and keeps the team close to what users actually see.

                ## Milestones
                1. A sampling script that draws twenty lists a week across surfaces and user segments.
                2. A short rubric for relevance, variety, freshness and anything embarrassing.
                3. A running log of failure patterns with counts and example lists.
                4. At least one failure pattern each quarter turned into a test, filter or metric.

                ## Notes
                Show the user's recent history beside each list. A list that looks odd in isolation is often sensible once you see what came before it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty sampled lists are reviewed against the rubric each week, and the failure log shows at least one pattern a quarter converted into a test or filter."
                cadence: rolling
              tasks:
                - "Write the sampling script that draws twenty lists across segments"
                - "Agree a four-point rubric for relevance, variety, freshness and embarrassment"
                - "Review the twenty sampled lists and log failure patterns @recurring(weekly:tue)"
                - "Turn the most frequent failure pattern into a test or filter @recurring(quarterly)"
            - name: Monthly offline benchmark rerun
              description: |-
                ## Purpose
                User behaviour shifts every month, so a model that beat the baseline in spring may not beat it now, and silent regressions in feature code often show offline before users notice. Rerunning the production model and the baselines against the rolling test window each month builds a trend line that says whether the system is improving or just ageing.

                ## Milestones
                1. A scheduled job that scores the production model and the baselines on the newest test window.
                2. Results appended to one metrics log with date, model version and data window.
                3. A threshold agreed for the drop that triggers an investigation.
                4. Twelve months of comparable history kept and charted.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The metrics log holds a monthly entry for production and baseline models, and every drop past the threshold has a linked investigation note."
                cadence: rolling
              tasks:
                - "Schedule the benchmark job against the rolling test window"
                - "Agree the drop in NDCG that should trigger an investigation"
                - "Compare this month's benchmark entry with last month's @recurring(monthly:9)"
                - "Open an investigation note for any drop past the threshold"
            - name: Candidate retrieval index health checks
              description: |-
                ## Purpose
                Approximate nearest neighbour indexes trade accuracy for speed, and after a few rebuilds with new embeddings the recall against exact search can slide from 98 to 80 percent without any error appearing. Checking index recall, freshness and size on a schedule stops the ranking model being blamed for good items retrieval never handed it.

                ## Milestones
                1. Index recall measured against brute force search on a fixed sample of queries.
                2. Build time, index size and newest item date tracked for every rebuild.
                3. An alert when recall or freshness falls below agreed limits.
                4. A runbook for rebuilding or rolling back the index.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every index rebuild records recall against exact search, freshness and size, and an alert fires when recall falls below the agreed floor."
                cadence: rolling
              tasks:
                - "Pick 1,000 fixed queries for exact versus approximate recall checks"
                - "Record recall, build time and newest item date after each rebuild"
                - "Review index recall and freshness against the agreed floor @recurring(monthly:14)"
                - "Write the rebuild and rollback steps into the runbook"
            - name: Catalogue coverage and long-tail exposure watch
              description: |-
                ## Purpose
                Recommenders tend to pour traffic onto a shrinking set of bestsellers, which starves new items of the data they need and makes the catalogue feel smaller than it is. A monthly look at how many items received any recommended impression, and how evenly exposure is spread, catches the narrowing before suppliers, creators or editors complain.

                ## Milestones
                1. Monthly share of live items receiving at least one recommended impression tracked per surface.
                2. A concentration measure, such as the Gini coefficient of impressions, tracked per surface.
                3. Exposure for items younger than 30 days reported separately.
                4. A coverage floor agreed with the business for each surface.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Coverage, impression concentration and new item exposure are reported monthly per surface against an agreed floor."
                cadence: rolling
              tasks:
                - "Calculate last month's share of live items with any recommended impression"
                - "Compute impression concentration for each surface"
                - "Report coverage, concentration and new item exposure @recurring(monthly:17)"
                - "Agree a coverage floor with merchandising or the content team"
            - name: Weekly impression log health check
              description: |-
                ## Purpose
                When impression logging breaks on one app version, the training data quietly loses a platform and the next model learns that those users never click anything. A short weekly check of event volumes, join rates and position distributions by client catches broken recommendation logging within days rather than at the next retrain.

                ## Milestones
                1. A view of impressions, clicks and join rate by surface, platform and app version.
                2. Expected ranges agreed for each, with the owning client team named.
                3. The weekly check run and its result logged.
                4. Training jobs set to refuse a data window flagged with logging gaps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly impression and join rate check by platform is logged, and the training job blocks any window flagged with logging gaps."
                cadence: rolling
              tasks:
                - "Build a view of impressions and join rate by platform and app version"
                - "Agree expected ranges with each client team"
                - "Check recommendation event volumes and join rates against the ranges @recurring(weekly:mon)"
                - "Add a flag that stops training on windows with logging gaps"
            - name: Recommender test log and readout archive
              description: |-
                ## Purpose
                After a year of tests nobody remembers which re-ranking idea failed, what it did to basket size or why the diversity change was rolled back, so the same ideas get tested again. A shared log of every recommender test with its hypothesis, metrics, result and decision builds the memory that makes each roadmap faster to write.

                ## Milestones
                1. Every recommender test from the past year entered with hypothesis, dates, metrics and outcome.
                2. A one-page readout format used for all new tests.
                3. Tests tagged by component: retrieval, ranking, re-ranking, presentation or business rules.
                4. A monthly look at which components have moved the primary metric.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds every recommender test from the past year with hypothesis, result and decision, and new tests are added within a week of readout."
                cadence: rolling
              tasks:
                - "Search past channels and documents for recommender tests from the last year"
                - "Ask the agent to summarise each past test into the one-page readout format"
                - "Tag each test by retrieval, ranking, re-ranking, presentation or rules"
                - "Add new readouts and review patterns across components @recurring(monthly:22)"
            - name: Merchandising boosts and pinned items register
              description: |-
                ## Purpose
                Editors, merchandisers and sales teams pin items, boost brands and bury others, and after a year the recommendation layer is half model and half forgotten overrides. A register of every manual rule with its owner and expiry date keeps human judgement in the system without hiding what the model is doing or confusing test results.

                ## Milestones
                1. Every active pin, boost and bury rule listed with owner, reason and start date.
                2. An expiry date on each rule, with a default of 90 days.
                3. The share of recommended impressions changed by overrides measured, so tests can account for it.
                4. A monthly expiry review held with the merchandising lead.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every manual override has an owner and an expiry date in the register, and expired rules are removed or renewed each month."
                cadence: rolling
              tasks:
                - "Export all active pins, boosts and buries from the admin tool"
                - "Ask each owner for the reason and a sensible expiry date"
                - "Measure the share of recommended impressions changed by overrides"
                - "Expire or renew overrides with the merchandising lead @recurring(monthly:4)"
            - name: Not interested and complaint feedback triage
              description: |-
                ## Purpose
                Dismissals, thumbs down, hide buttons and support tickets about odd suggestions are the clearest negative signal a recommender gets, yet they often go unread and never reach training. A weekly triage that groups them by cause shows whether the problem is repetition, sensitive content, stale items or a genuine relevance gap.

                ## Milestones
                1. Explicit negative feedback events from all surfaces collected in one table.
                2. Support tickets that mention recommendations tagged and linked.
                3. A weekly summary grouped by cause, with example lists.
                4. A documented decision on whether negative feedback feeds training, a filter or both.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly feedback summary groups dismissals and tickets by cause, and the decision on using them in training or filters is documented."
                cadence: rolling
              tasks:
                - "Find every place users can dismiss or hide a recommendation"
                - "Ask support to tag tickets that mention recommendations"
                - "Group the week's negative feedback by cause with examples @recurring(weekly:thu)"
                - "Decide whether dismissals feed training, a filter or both"
            - name: Quarterly recommender roadmap review
              description: |-
                ## Purpose
                Recommendation work splits across logging, retrieval, ranking, serving and presentation, and without a regular review the team keeps polishing the ranking model while bigger wins sit in cold start or logging. A quarterly session that reads benchmark trends, test results and the failure log sets the next two or three bets deliberately.

                ## Milestones
                1. A one-page quarter summary of benchmarks, test outcomes and the top failure patterns.
                2. Candidate work scored by expected impact, effort and confidence.
                3. Two or three bets chosen, each with an owner and a success measure.
                4. Last quarter's bets marked as delivered, dropped or carried.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter ends with a written review of the previous bets and two or three new bets with owners and success measures."
                cadence: cyclic
              tasks:
                - "Draft the quarter summary from the benchmark and test logs"
                - "Score candidate work by impact, effort and confidence"
                - "Hold the roadmap review and record the chosen bets @recurring(quarterly)"
                - "Mark last quarter's bets as delivered, dropped or carried"
            - name: Serving latency budget and fallback lists
              description: |-
                ## Purpose
                Recommendations that arrive after the page has rendered leave a blank space, and a model service outage should never empty the home page. Agreeing a latency budget per surface and a precomputed fallback list for every slot keeps the product working when the feature lookup times out or a new model misbehaves.

                ## Milestones
                1. A latency budget agreed per surface and split between retrieval, feature lookup and ranking.
                2. A precomputed fallback list for every slot, refreshed on a schedule.
                3. A timeout that switches to the fallback, tested by deliberately failing the model service.
                4. Monthly latency percentiles reviewed against the budget.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every slot has a tested fallback list, and monthly 99th percentile latency for each surface sits within budget or has an open fix."
                cadence: rolling
              tasks:
                - "Ask the front-end owners how long each slot can wait before rendering"
                - "Split the budget between retrieval, feature lookup and ranking"
                - "Fail the model service in staging and confirm the fallbacks appear"
                - "Review 99th percentile recommendation latency against the budget @recurring(monthly:27)"
            - name: Matrix factorisation for implicit feedback
              description: |-
                ## Purpose
                Alternating least squares on implicit feedback is still one of the strongest and cheapest collaborative models, and understanding its confidence weighting and regularisation explains why many later methods behave as they do. Implementing it on your own interaction data, and tuning it properly rather than with defaults, gives a serious baseline and a working intuition for embeddings.

                ## Milestones
                1. The implicit feedback formulation, with confidence weights, summarised on one page in your own words.
                2. An ALS model trained on the frozen split with an open-source library.
                3. Factors, regularisation and confidence scaling tuned with a logged search.
                4. Results compared with the popularity and co-occurrence baselines.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tuned ALS model is scored on the frozen split, with its hyperparameter search logged and its results compared with the published baselines."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the original paper on collaborative filtering for implicit feedback"
                - "Train a first ALS model with default settings on the frozen split"
                - "Run a logged search over factors, regularisation and confidence scaling"
                - "Write up how the tuned model compares with the baselines"
            - name: Item-to-item similarity for product page rows
              description: |-
                ## Purpose
                The customers also bought row is often the highest-value placement on a product page, and item-to-item similarity is simple to compute, easy to explain and works for visitors with no history. Doing it well means correcting for popularity in the similarity score, setting minimum support and separating substitutes from complements.

                ## Milestones
                1. Co-occurrence similarity computed with a popularity correction such as cosine or lift.
                2. A minimum support threshold chosen so rare pairs do not dominate.
                3. Substitute and complement pairs separated, for example by co-view versus co-purchase.
                4. The table refreshed on a schedule and serving the product page slot.

                ## Notes
                Without the popularity correction, every item's top neighbour becomes the bestseller, which is accurate and useless.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A popularity-corrected similarity table with a support threshold and separate substitute and complement lists serves the product page slot."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compute raw co-purchase counts for item pairs from the last 90 days"
                - "Apply a popularity correction and compare the top pairs by hand"
                - "Set a minimum support threshold from the pair count distribution"
                - "Split co-view substitutes from co-purchase complements"
            - name: Two-tower retrieval model
              description: |-
                ## Purpose
                When the catalogue runs to millions of items, scoring every one per request is impossible, so a retrieval stage built from a user encoder, an item encoder and a nearest neighbour index narrows it to a few hundred. Building a two-tower model teaches in-batch negatives, sampling bias correction and why retrieval recall caps everything that happens downstream.

                ## Milestones
                1. User and item towers trained with in-batch negatives on the frozen split.
                2. A sampling bias correction for popular items applied and its effect measured.
                3. Retrieval recall at 100 and 500 compared with the co-occurrence baseline.
                4. Item embeddings exported to a nearest neighbour index and served in a test environment.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-tower model with a popularity sampling correction beats the co-occurrence baseline on recall at 500 and serves from a test index."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Read a published account of two-tower retrieval with sampling bias correction"
                - "Train user and item towers with in-batch negatives on the frozen split"
                - "Measure recall at 100 and 500 with and without the popularity correction"
                - "Load the item embeddings into a test nearest neighbour index"
            - name: Learning to rank for the ranking stage
              description: |-
                ## Purpose
                Once candidates are retrieved, a ranking model with richer features orders them, and pointwise click prediction is only one way to do it. Learning pairwise and listwise objectives such as LambdaMART, and the features that matter at this stage, such as user to item affinity, recency and price relative to the user's usual spend, lets you rank for the whole list rather than each item alone.

                ## Milestones
                1. Pointwise, pairwise and listwise objectives explained in a short written comparison.
                2. A gradient boosted ranker trained on retrieved candidates with grouped queries.
                3. Feature importance reviewed and leaky features removed.
                4. NDCG on the frozen split compared across the three objectives.

                ## Notes
                Train the ranker on candidates your retrieval stage actually produces, not on random negatives. Otherwise it learns to separate easy cases it will never see.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Rankers trained with at least two objectives are compared on NDCG over retrieved candidates, with feature importance reviewed and recorded."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Write a half-page comparison of pointwise, pairwise and listwise ranking"
                - "Build a training set of retrieved candidates grouped by request"
                - "Train a LambdaMART ranker and a pointwise model on the same features"
                - "Review feature importance and drop any feature that leaks the label"
            - name: Session-based and sequential recommendation
              description: |-
                ## Purpose
                Many visitors are anonymous or behave differently each visit, so the order of what they viewed in the last ten minutes matters more than their long-term history. Studying sequence models such as recurrent and self-attention recommenders, alongside the simple session nearest neighbour methods that often match them, shows when sequence modelling is worth its cost.

                ## Milestones
                1. Session data built with a clear session boundary rule and next item targets.
                2. A session nearest neighbour baseline scored on the next item task.
                3. One recurrent or self-attention sequence model trained and scored on the same task.
                4. A written conclusion on whether the sequence model earns its serving cost.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A session baseline and one sequence model are scored on the same next item task, with a written recommendation on whether to deploy either."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Define the inactivity gap that ends a session in your data"
                - "Build next item prediction examples from last month's sessions"
                - "Score a session nearest neighbour baseline on the next item task"
                - "Train a self-attention sequence model and compare it with the baseline"
            - name: Content-based recommendations from text and image embeddings
              description: |-
                ## Purpose
                Items with no interactions yet can still be recommended if the system understands what they are, and pretrained text and image encoders now make decent item embeddings available without labelled data. Building a content-based recommender covers cold items, powers more like this rows and gives the collaborative model a useful extra feature.

                ## Milestones
                1. Item embeddings generated from titles, descriptions and images with pretrained encoders.
                2. Nearest neighbours checked by hand for 50 items across categories.
                3. Cold item recall measured on the frozen split against the popularity fallback.
                4. Embeddings refreshed automatically when items are added or edited.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Content embeddings for all live items beat the popularity fallback on cold item recall and refresh automatically on catalogue changes."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose pretrained text and image encoders that fit your licence and budget"
                - "Generate embeddings for a sample of 5,000 items"
                - "Check the nearest neighbours of 50 items by hand"
                - "Measure cold item recall against the popularity fallback"
            - name: Off-policy evaluation from logged recommendations
              description: |-
                ## Purpose
                Logged clicks only show how users responded to what the old system chose to show, so a new policy that would show different items cannot be fairly judged on them directly. Inverse propensity scoring, clipped and self-normalised variants, and doubly corrected estimators that pair a reward model with propensities, let you estimate a new policy's value from logs, if the logs record what the old policy's probabilities were.

                ## Milestones
                1. The logging policy's propensities confirmed as recorded, or a plan to start recording them.
                2. An inverse propensity estimator and a self-normalised version implemented and tested on simulated data.
                3. Variance and clipping trade-offs shown on your real logs.
                4. Off-policy estimates compared with one past online test result.

                ## Notes
                Deterministic top-k serving gives near-zero propensity to everything outside the list. A small amount of logged randomisation makes these estimators usable.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two off-policy estimators are implemented, validated on simulated data and compared against at least one past online test result."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Check whether serving logs record the probability of each shown item"
                - "Implement inverse propensity scoring on a simulated bandit dataset"
                - "Add clipping and self-normalisation and compare their variance"
                - "Estimate a past test's winner from logs and compare with the real readout"
            - name: Recommender systems reading programme
              description: |-
                ## Purpose
                The field moves quickly and much of what is published does not reproduce, so reading well matters more than reading a lot. A steady programme of one paper or industry write-up a month, with a short note on what would and would not transfer to your product, keeps the team current without chasing every new architecture.

                ## Milestones
                1. A reading list of twelve papers and industry write-ups covering retrieval, ranking, evaluation and fairness.
                2. A one-paragraph note per paper on claims, baselines used and relevance to your surfaces.
                3. At least two ideas from the list tried offline within the year.
                4. The list refreshed each year from conference proceedings.

                ## Notes
                Start from the **Reading queue** template. Check each paper's baselines first: an untuned matrix factorisation baseline is a warning sign.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve papers are read in a year with a written note each, and at least two ideas from them have been tried offline."
                cadence: rolling
              tasks:
                - "Pick the first twelve papers and write them into the reading queue"
                - "Read one paper and write its transfer note @recurring(monthly:12)"
                - "Choose one idea from the notes to try offline this quarter"
            - name: Practice on public recommendation datasets
              description: |-
                ## Purpose
                Public datasets such as MovieLens, Amazon product reviews and the retail and session collections released for research competitions let you try methods without touching production data or waiting for approvals. Practising there, under each dataset's licence, builds skill quickly and gives results others can check, which matters for a researcher's credibility.

                ## Milestones
                1. Two public datasets chosen, with licence terms read and recorded.
                2. A temporal split built for each using the same code as your internal split.
                3. Three methods compared on both datasets with the shared metric suite.
                4. A short write-up of what transferred and what did not.

                ## Notes
                Many public datasets are filtered to users with plenty of history, so cold start looks easier than it is in production.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three methods are compared on two licensed public datasets with the internal split code and metric suite, and the write-up is shared."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Download two public recommendation datasets and record their licence terms"
                - "Run your internal split script on both datasets"
                - "Score three methods on each with the shared metric suite"
                - "Write up which results matched your internal data"
            - name: Build versus buy a recommendation engine
              description: |-
                ## Purpose
                Managed recommendation services from cloud and commerce vendors can be live in weeks, while an in-house system takes months but can use every signal and rule you own. Comparing them on the same pilot data, total cost, control over business rules and the skills you would need for each turns a vendor pitch into a decision you can defend.

                ## Milestones
                1. Requirements written: surfaces, data sources, rules, latency, explainability and data residency.
                2. Two vendors and an in-house plan scored against the same requirements.
                3. A pilot run on historical data with each shortlisted option, scored on the shared offline metrics.
                4. A recommendation with three-year cost and an exit plan approved by the budget holder.

                ## Notes
                Start from the **Purchase decision** template. Ask every vendor how you export your trained data and logs if you leave.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed decision compares at least two vendors and an in-house option on pilot metrics, three-year cost and exit terms."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the requirements list for surfaces, data, rules and latency"
                - "Shortlist two recommendation vendors and request pilot terms"
                - "Score each option on the same historical pilot data"
                - "Present the three-year cost comparison to the budget holder"
            - name: Retrieval and ranking architecture decision
              description: |-
                ## Purpose
                One model scoring the whole catalogue works for a few thousand items, but beyond that, most systems split into retrieval, ranking and re-ranking stages with different models and latency budgets. Deciding the architecture deliberately, with the number of candidates per stage and who owns each, avoids a tangle of models that nobody can change safely.

                ## Milestones
                1. Catalogue size, request volume and latency budget written as the design inputs.
                2. The stages chosen, with candidate counts and the model or rule at each.
                3. A design document reviewed by the engineers who will run it.
                4. An owner named for each stage and its metrics.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A reviewed design document names each stage, its candidate count, model, latency share and owner."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write down catalogue size, peak requests per second and latency budget"
                - "Sketch one-stage, two-stage and three-stage options with candidate counts"
                - "Circulate the design document to the serving engineers for review"
                - "Name an owner for each stage"
            - name: Diversity and novelty re-ranking
              description: |-
                ## Purpose
                A list of the ten most relevant items is often ten versions of the same thing, and users skim past it. Re-ranking for diversity, for example with maximal marginal relevance or category caps, trades a little offline accuracy for lists that cover more of a user's interests and usually hold attention longer.

                ## Milestones
                1. Intra-list diversity and novelty added to the offline metric suite.
                2. Two re-ranking methods implemented with a tunable diversity weight.
                3. An accuracy versus diversity curve plotted for several weights.
                4. One setting chosen for an online test, with the expected trade-off written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two re-rankers are evaluated across a range of weights on accuracy and diversity, and one setting is approved for an online test."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Add intra-list diversity to the evaluation function"
                - "Implement maximal marginal relevance with a tunable weight"
                - "Plot accuracy against diversity for five weight settings"
                - "Pick the setting to take into an online test"
            - name: Blending business objectives into the ranking score
              description: |-
                ## Purpose
                Commercial teams want margin, stock clearance, new supplier exposure and sponsored placements reflected in what gets recommended, and quietly adding a multiplier is how trust in the system erodes. Agreeing an explicit blending formula, with weights the business signs off and a measured cost to relevance, keeps the trade-off visible and reversible.

                ## Milestones
                1. Each business objective listed with its owner and how it would be measured.
                2. A blending formula with named weights implemented after the relevance score.
                3. The relevance cost of each weight measured offline and shown to the owners.
                4. Weights signed off and stored in configuration, not code.

                ## Notes
                Label sponsored or paid placements clearly to users where the law or your own policy requires it, and keep them out of the relevance model's training labels.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed-off blending formula with configurable weights is in place, with its measured relevance cost recorded for each objective."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the business objectives commercial teams want reflected in rankings"
                - "Measure the relevance cost of each objective at three weight levels"
                - "Get each objective's owner to sign off its weight"
                - "Revisit the objective weights with the commercial lead @recurring(quarterly)"
            - name: Calibrated recommendations matching user interests
              description: |-
                ## Purpose
                A user who watches mostly documentaries and occasionally comedy often gets a list of nothing but documentaries, because accuracy-optimised rankers amplify the dominant interest. Calibration re-ranks the list so its mix of genres or categories matches the user's history in roughly the same proportions, which protects minority interests without random noise.

                ## Milestones
                1. The category distribution of each user's history and of their recommendations computed.
                2. A calibration measure, such as the divergence between the two, added to the metric suite.
                3. A calibrated re-ranker implemented with a tunable strength.
                4. The effect on accuracy and calibration reported for light and heavy users.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calibrated re-ranker reduces history to list divergence by an agreed amount with a recorded accuracy cost for light and heavy users."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Compute category mix for a sample of user histories and their lists"
                - "Add a calibration divergence measure to the metric suite"
                - "Implement a greedy calibrated re-ranker with a strength setting"
                - "Report the accuracy and calibration effect for light and heavy users"
            - name: Explanations shown alongside recommendations
              description: |-
                ## Purpose
                Short reasons such as because you watched, popular in your area or often bought with this item make recommendations more trusted and gives users a way to correct the system. Choosing explanation types that are true to how the item was actually selected avoids the slow damage of reasons that users can tell are invented.

                ## Milestones
                1. Explanation types listed and matched to the pipeline stage that produced each item.
                2. Wording drafted and reviewed with design for each type.
                3. Explanations served only when the source signal truly applies.
                4. Clicks and dismissals on explained versus unexplained lists compared.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two explanation types are live, each tied to its real source signal, with a comparison of engagement against unexplained lists."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List which pipeline signal produced each recommended item"
                - "Draft wording for each explanation type with the designer"
                - "Add a check that suppresses an explanation when its signal is absent"
                - "Compare clicks on explained and unexplained lists"
            - name: Exploration slots with bandits for new items
              description: |-
                ## Purpose
                Systems that only show what they already know works never learn about new items, so they stay unseen and cold. Reserving one or two slots for exploration, run by an epsilon-greedy or Thompson sampling policy with logged probabilities, gathers data on new items at a controlled cost and makes later off-policy evaluation possible.

                ## Milestones
                1. One surface and one or two slot positions chosen for exploration, with a cost ceiling agreed.
                2. A bandit policy serving candidates from new items, with probabilities logged.
                3. Time to first useful interaction data for new items measured before and after.
                4. The exploration cost on the primary metric measured and reviewed each month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An exploration policy runs in an agreed slot with logged probabilities, and its cost and its effect on new item learning are reviewed monthly."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Choose the surface and slot position for exploration"
                - "Agree the maximum acceptable cost on the primary metric"
                - "Serve new item candidates from a Thompson sampling policy with logged probabilities"
                - "Review exploration cost and new item learning speed @recurring(monthly:19)"
            - name: Nearest neighbour search library selection
              description: |-
                ## Purpose
                Graph-based indexes such as HNSW, quantised inverted file indexes and managed vector databases differ widely in recall, latency, memory and how they handle deletes and updates. Benchmarking two or three options on your own embeddings and query load, rather than on published benchmark charts, prevents a migration a year from now.

                ## Milestones
                1. Requirements written for item count, dimensions, latency, recall, update rate and filtering.
                2. Two or three libraries or services benchmarked on your embeddings at production scale.
                3. Recall, latency, memory and build time recorded in one comparison table.
                4. A choice made and recorded with the main trade-off accepted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table covers at least two options on your own embeddings for recall, latency, memory and build time, with a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the item count, dimension, latency and update requirements"
                - "Export a production-sized sample of item embeddings for benchmarking"
                - "Benchmark two or three index options on recall, latency and memory"
                - "Record the chosen option and the trade-off accepted"
            - name: Negative sampling strategy comparison
              description: |-
                ## Purpose
                With implicit feedback, everything a user did not click is treated as negative, and which of those you sample shapes the model as much as its architecture does. Comparing uniform, popularity-weighted and hard negatives on the same model shows how much of a reported gain came from sampling rather than from the method.

                ## Milestones
                1. Uniform, popularity-weighted and hard negative sampling implemented behind one setting.
                2. The same model trained with each strategy on the frozen split.
                3. Accuracy and coverage compared, including the effect on long-tail items.
                4. A default strategy chosen and documented for future models.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One model is trained with three sampling strategies on the frozen split, and the chosen default is documented with its accuracy and coverage effect."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Add a setting that switches between three negative sampling strategies"
                - "Train the current model once with each strategy"
                - "Compare accuracy and long-tail coverage across the three runs"
                - "Document the default sampling strategy for future models"
            - name: First online test of the new recommender
              description: |-
                ## Purpose
                Offline gains often shrink or vanish online, and the first live test is where the team learns how far its offline metrics can be trusted. Running a clean test against the current logic, with the agreed primary metric, guardrails and a fixed run length, gives a decision and a measured offline to online gap to carry into every later test.

                ## Milestones
                1. A test plan written with hypothesis, primary metric, guardrails, sample size and run length.
                2. Both arms checked for identical filters, fallbacks and latency before launch.
                3. The test run to its planned length without peeking at interim results to decide.
                4. A readout with the decision and the offline to online gap recorded in the test log.

                ## Notes
                Check that the treatment arm is not winning only because it is faster or because it bypasses a business filter. Both are common and both are invisible in the headline number.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first test runs to its planned length and its readout records a ship or no-ship decision and the offline to online gap."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Write the test plan with hypothesis, metrics, sample size and run length"
                - "Confirm both arms share filters, fallbacks and latency"
                - "Launch the test and check assignment balance on day one"
                - "Write the readout and record the offline to online gap"
            - name: Launch readiness review for a new recommendation surface
              description: |-
                ## Purpose
                Putting a new home feed or email digest live without a review can expose sensitive pairings, empty slots for cold users or a latency spike on launch day. A short readiness review, run against a written checklist with product, engineering, support and legal, makes the launch boring in the good sense.

                ## Milestones
                1. A risk register for the surface covering content safety, cold users, latency, privacy and business rules.
                2. Each risk checked with evidence, such as a test, a screenshot or a load result.
                3. A rollback switch and fallback list confirmed working.
                4. Go or no-go recorded with named approvers.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A completed risk register with evidence per item and a recorded go or no-go from named approvers exists before launch."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the surface risk register from the business rules and cold start notes"
                - "Collect evidence against each risk before the review"
                - "Test the rollback switch and fallback list in staging"
                - "Hold the readiness review and record the go or no-go"
            - name: Peak season recommendation readiness
              description: |-
                ## Purpose
                Sales events, holidays and big releases bring traffic several times normal, new visitors with no history and stock that runs out by the hour, which is exactly when a recommender is most likely to misbehave. Preparing a month ahead with load tests, gift and seasonal logic, faster stock filters and a change freeze keeps the busiest weeks from becoming the worst.

                ## Milestones
                1. Expected peak traffic and cold user share estimated from last year.
                2. Serving load tested at twice the expected peak.
                3. Stock filters refreshed often enough to avoid recommending sold-out items.
                4. A change freeze and on-call rota agreed for the peak weeks.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before each peak the load test, stock filter refresh, freeze dates and on-call rota are complete and recorded."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Pull last year's peak traffic and cold user share"
                - "Load test recommendation serving at twice the expected peak"
                - "Shorten the stock filter refresh interval for the peak weeks"
                - "Agree the freeze dates and on-call rota for peak season @recurring(yearly)"
            - name: Post-mortem of a harmful recommendation incident
              description: |-
                ## Purpose
                Sooner or later the system will suggest something offensive, dangerous or simply absurd, and a screenshot will travel. A blameless post-mortem that traces the item through retrieval, ranking, filters and overrides, then fixes the cause rather than adding one more blocklist entry, turns the incident into a lasting improvement.

                ## Milestones
                1. A timeline from first report to fix, with the affected surfaces and exposure counts.
                2. The pipeline path traced: which stage selected the item and why no filter caught it.
                3. A remediation plan with owners covering the specific fix and the class of failure.
                4. A regression test added that reproduces the original case.

                ## Notes
                Start from the **Remediation plan** template. Pull the item from the slot first, investigate second.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The post-mortem names the stage that failed, a remediation plan with owners is agreed, and a regression test reproduces the case."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Remove the offending item from all recommendation slots"
                - "Count how many users were shown it and on which surfaces"
                - "Trace which stage selected the item and which filter missed it"
                - "Ask the agent to draft the post-mortem timeline from the incident notes"
                - "Add a regression test that reproduces the original case"
            - name: Recommender research paper submission
              description: |-
                ## Purpose
                Researchers working on recommendation need results that hold up to reviewers who have seen many papers with weak baselines and leaky splits. Preparing a submission to a recommender systems conference or workshop, with tuned baselines, temporal splits, released code and an honest limitations section, produces work others can build on.

                ## Milestones
                1. The target venue and its submission deadline confirmed on the conference website.
                2. Experiments rerun with tuned baselines, temporal splits and several random seeds.
                3. Code and configuration packaged for release, with data access explained.
                4. The paper submitted with a limitations section reviewed by a colleague outside the project.

                ## Notes
                Check data sharing agreements before any internal data appears in a paper, even in aggregate.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A paper is submitted to a named venue with tuned baselines, multiple seeds and a code release package ready."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Confirm the target venue's deadline and page limit on its website"
                - "Retune every baseline with the same search budget as your method"
                - "Rerun all experiments with at least five random seeds"
                - "Ask a colleague outside the project to critique the limitations section"
                - "Package the code and configuration for release"
            - name: First recommender for a small catalogue shop
              description: |-
                ## Purpose
                An engineer at a shop with a few thousand products and modest traffic does not need two-tower models; co-purchase pairs, a popularity fallback and a few rules usually capture most of the value. Building that in weeks, measuring it honestly and resisting the urge to add complexity before the data supports it is the right first system.

                ## Milestones
                1. A bought together row on product pages built from co-purchase counts with a popularity fallback.
                2. Out-of-stock and already purchased filters in place.
                3. A simple online comparison against the previous logic run for at least two full weeks.
                4. A short note on what data volume would justify a learned model.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A co-purchase row with fallback and filters is live, and a two-week comparison against previous logic is recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Export the last year of orders with item IDs and dates"
                - "Compute co-purchase pairs with a minimum count threshold"
                - "Add out-of-stock and already purchased filters to the row"
                - "Compare the new row with the old logic for two full weeks"
            - name: Reproducing a published recommender result
              description: |-
                ## Purpose
                Many published recommender results fail to reproduce once baselines are tuned and splits are fixed, and a researcher building on one should find out before investing months. Reproducing the headline table on the paper's own dataset, then rerunning it with your evaluation protocol, tells you whether the method is real and whether it transfers.

                ## Milestones
                1. The paper's code, data and protocol obtained, or gaps listed.
                2. The headline result reproduced within a stated tolerance, or the gap documented.
                3. The comparison rerun with tuned baselines and a temporal split.
                4. A short reproducibility note shared with the team or the authors.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A reproducibility note records the original result, your reproduction and the result under a tuned baseline and temporal split."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Download the paper's code and dataset and list anything missing"
                - "Run the authors' code and compare with their headline table"
                - "Tune the paper's baselines with an equal search budget"
                - "Write the reproducibility note and send it to the authors or the team"
            - name: Inheriting a legacy recommendation pipeline
              description: |-
                ## Purpose
                An engineer handed a recommender built by someone who has left usually finds undocumented jobs, hard-coded rules and a model nobody has retrained in a year. Mapping what runs, what it reads and what breaks if it stops, before changing anything, protects revenue the old system quietly delivers and shows where the first safe improvements lie.

                ## Milestones
                1. A diagram of every job, table, model and rule in the pipeline, with schedules.
                2. The last successful retrain, its training window and its metrics found or rebuilt.
                3. The current system's offline scores recorded against the shared baselines.
                4. A ranked list of three safe first changes, with rollback for each.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A pipeline map, the current system's baseline scores and a ranked list of three safe changes with rollback plans are written up."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every scheduled job and table the recommendation pipeline touches"
                - "Find when the model was last retrained and on what window"
                - "Score the current system against the popularity baseline"
                - "Rank three safe first changes and write a rollback for each"
            - name: Marketplace recommendations fair to buyers and sellers
              description: |-
                ## Purpose
                On a marketplace, recommendations decide which sellers get seen, so a ranker tuned only for buyer clicks can concentrate demand on a few large sellers and push smaller ones off the platform. Measuring exposure by seller group and setting explicit exposure goals alongside buyer relevance keeps both sides of the market healthy.

                ## Milestones
                1. Recommended impressions and sales broken down by seller size and tenure.
                2. An exposure goal agreed with the marketplace lead, such as a minimum share for new sellers.
                3. A re-ranking or constraint method tested offline against buyer relevance.
                4. Seller exposure tracked monthly after launch.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agreed seller exposure goal is met in offline tests at a recorded buyer relevance cost, and seller exposure is tracked monthly."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Break down last month's recommended impressions by seller size and tenure"
                - "Agree a new seller exposure goal with the marketplace lead"
                - "Test an exposure-constrained re-ranker offline"
                - "Check seller exposure share against the goal @recurring(monthly:25)"
            - name: News and media recommendations with freshness
              description: |-
                ## Purpose
                In news, video and podcast products the best item may be an hour old and stale by tomorrow, so models trained on last month's clicks miss what matters now. Building freshness into candidate generation, features and decay, with editorial input on breaking stories, keeps feeds current without drowning evergreen work.

                ## Milestones
                1. Item age distribution of clicks measured to set a decay rate per content type.
                2. A fresh content candidate source added to retrieval.
                3. An age feature and a decay applied in ranking, tuned offline.
                4. An editorial override path for breaking stories agreed and tested.

                ## Notes
                Sensitive news such as disasters or deaths may need separate rules on placement next to lighter content. Agree them with the editors.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fresh content retrieval and a tuned age decay are live, and the share of clicks on items under a day old is checked weekly."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Plot click share by item age for each content type"
                - "Add a candidate source for items published in the last day"
                - "Tune an age decay in ranking against the frozen split"
                - "Check the share of clicks on items under a day old @recurring(weekly:fri)"
            - name: Long-term value and slate optimisation with reinforcement learning
              description: |-
                ## Purpose
                Ranking for the next click can hurt next month: a feed of easy wins may reduce return visits, while a slightly less clickable list builds lasting habits. Reinforcement learning and slate methods frame recommendation as a sequence of decisions that affect future engagement, at the cost of harder evaluation and safety, so they suit teams with mature logging and testing.

                ## Milestones
                1. A long-term outcome chosen, such as 28-day return rate, and its link to short-term signals measured.
                2. A simulator or logged-data environment built for offline policy learning.
                3. One policy trained with an off-policy correction and evaluated offline.
                4. A small, capped online test designed with guardrails and a stop rule.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An offline-evaluated long-term policy and a capped online test plan with guardrails and a written stop rule exist."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Measure how next-click metrics correlate with 28-day return rate"
                - "Build a logged-data environment for offline policy learning"
                - "Train one policy with an off-policy correction"
                - "Write the capped online test plan with a stop rule"
            - name: Graph neural network recommenders
              description: |-
                ## Purpose
                Users, items, sellers and categories form a graph, and graph neural network recommenders propagate signals across it, which can help sparse users and items. They also bring heavy training and serving costs, and simplified graph models often match the elaborate ones, so the work is in proving the gain on your data.

                ## Milestones
                1. The interaction graph built with node and edge types documented.
                2. A simplified graph convolution model trained on the frozen split.
                3. Results compared with matrix factorisation for sparse and dense users.
                4. Training time and serving cost estimated against the measured gain.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A graph model is compared with matrix factorisation by user sparsity, with its training and serving cost set against the gain."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Build the user to item interaction graph from the training window"
                - "Train a simplified graph convolution model on the frozen split"
                - "Compare it with matrix factorisation for sparse and dense users"
                - "Estimate training and serving cost against the measured gain"
            - name: Feedback loop and filter bubble simulation study
              description: |-
                ## Purpose
                Every recommender trains on data it created, so small biases compound with every retrain: popular items get more exposure, more clicks and more exposure again. A simulation that replays several retraining cycles with synthetic users shows how fast diversity and coverage narrow under your current design, and which interventions slow it.

                ## Milestones
                1. A simulation with synthetic users whose preferences are known and fixed.
                2. Ten or more retraining cycles run with the current model and logging policy.
                3. Coverage, diversity and true user satisfaction tracked across cycles.
                4. Two interventions, such as exploration or calibration, compared in the simulation.

                ## Notes
                A simulation shows mechanisms, not real effect sizes. Treat its numbers as direction, then confirm with logged data or a test.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written study shows coverage and diversity across at least ten simulated retraining cycles, with two interventions compared."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Define synthetic users with fixed, known preferences"
                - "Simulate ten retraining cycles with the current model"
                - "Track coverage, diversity and true satisfaction across cycles"
                - "Compare exploration and calibration as interventions"
---

# Recommendation Systems

This area is for the engineer asked to build the you might also like row and the researcher who wants recommendation results that survive contact with real users. It starts with foundations (a surface inventory, impression logging, catalogue checks, simple baselines, a time-based split, offline metrics, online metrics and hard business rules), moves to the weekly and monthly machinery that keeps lists sensible, then the skills from matrix factorisation and two-tower retrieval to learning to rank and off-policy evaluation, decisions on architecture, diversity, calibration and exploration, dated events such as the first online test and peak season, situations from a small shop to a two-sided marketplace, and finally specialist work on long-term value, graph models and feedback loops.

What repeats is a weekly hand review of sampled lists, weekly impression log and negative feedback checks, monthly benchmark reruns, index recall, coverage, override and latency reviews, a quarterly roadmap and rules review, and a yearly peak season preparation. The Metrics log, Reading queue, Purchase decision, Risk register and Remediation plan templates pair with the benchmark history, the paper reading programme, the build versus buy choice, the launch review and the post-mortem of a harmful recommendation. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
