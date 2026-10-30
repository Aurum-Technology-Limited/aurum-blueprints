---
id: product-management.search-discovery-features
name: Search & Discovery Features
description: "Search people can trust and browsing that makes sense: query log baselines, quality metrics and judgement lists, weekly zero-result reviews, relevance tuning, facets, autocomplete and the engine decisions behind them."
category: business
version: 1.0.0
tags: [product-management, search-discovery-features, team, engineer, search, relevance, information-architecture, search-analytics]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - feedback-themes
    - product-spec
    - operational-checklist
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Search & Discovery Features
          description: "Improving how users find content, products or answers inside the product through search, filters, sorting and browsing paths."
          projects:
            - name: Search and discovery audit of the current product
              description: |-
                ## Purpose
                Before changing ranking or adding filters, someone needs to write down how people actually find things in the product today: the search box, category pages, filters, sort menus, saved views and links from elsewhere. Teams are often surprised to find three separate search implementations, a filter nobody uses and a browse path that dead-ends. A two-week audit gives the team a shared picture and a starting list of problems ranked by how many users hit them.

                ## Milestones
                1. Every entry point for finding content listed, with a screenshot and the engine or query behind each.
                2. Traffic share for each path estimated from analytics: search, browse, filters and direct links.
                3. The ten most visible findability problems written up with an example of each.
                4. A one-page audit summary shared with design, engineering and the product lead.

                ## Notes
                Include mobile and logged-out views. The worst problems often sit on the screens the team never uses itself.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated audit lists every search and browse entry point, its share of traffic and the ten worst findability problems, shared with the product trio."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Walk every screen and list each place a user can search, filter, sort or browse"
                - "Ask engineering which engine or query powers each search box"
                - "Pull the share of sessions that use search versus category browsing"
                - "Write up the top ten findability problems with a screenshot of each"
            - name: Top queries and zero-result baseline
              description: |-
                ## Purpose
                Your search log is the most honest record of what users want and cannot find, typed in their own words. Exporting ninety days of queries and sorting them by volume shows the short head that drives most traffic, the long tail, and the share of searches that return nothing. That zero-result rate and the top 100 queries become the numbers every later change is judged against.

                ## Milestones
                1. Ninety days of raw queries exported with counts, result counts and click-through.
                2. The top 100 queries listed with their share of total search volume.
                3. Zero-result rate calculated and the 50 most common zero-result queries grouped by cause.
                4. Baseline figures recorded with the date and the query normalisation rules used.

                ## Notes
                Normalise case and whitespace before counting, or the same query appears as five rows. Strip anything that looks like an email address or account number before sharing the export.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated baseline sheet records the zero-result rate, the top 100 queries and grouped zero-result causes from ninety days of logs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask engineering where search queries are logged and how far back they go"
                - "Export ninety days of queries with result counts and clicks"
                - "Group the 50 most common zero-result queries by cause: typo, synonym, missing content"
                - "Record the zero-result rate and top 100 queries in a dated baseline sheet"
            - name: Findability task study with eight users
              description: |-
                ## Purpose
                Logs show what people typed, not what they gave up on before typing. Watching eight users try ten realistic find tasks, half by search and half by browsing, reveals vocabulary mismatches, filters people ignore and categories that make sense only to the team that named them. Run it early so the backlog is built on observed failure rather than opinion.

                ## Milestones
                1. Ten find tasks written from real support tickets and top queries, each with a known correct answer.
                2. Eight sessions completed with users from at least two segments.
                3. Task success rate and time to find recorded for every task.
                4. The five biggest failure patterns written up with clips or quotes.

                ## Notes
                Do not use the words from the interface labels in the task wording, or you will be testing reading rather than finding.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Task success rate and time to find are recorded for ten tasks across eight users, with the top five failure patterns written up."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick ten find tasks from recent support tickets and top queries"
                - "Recruit eight users across at least two customer segments"
                - "Run each session and note success, time and the words users tried"
                - "Repeat the study with fresh users to measure progress @recurring(yearly)"
            - name: Search ownership and decision rights
              description: |-
                ## Purpose
                Search tends to belong to everyone and therefore to no one: merchandisers pin results, engineers change analysers, content teams rename categories and nobody can say why a query ranks the way it does. Agreeing who owns relevance, who may add synonyms or pinned results and who approves ranking changes stops silent conflicts and makes regressions traceable.

                ## Milestones
                1. A single accountable owner for search quality named.
                2. Decision rights written for ranking changes, synonyms, pinned results, facets and category names.
                3. A change log location agreed where every relevance change is recorded with its reason and author.
                4. The arrangement shared with every team that can touch search.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written page names the search quality owner and who may change ranking, synonyms, pinned results and facets, with a shared change log in use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every team and tool that can currently change search results"
                - "Draft who decides, who is consulted and who is told for each type of change"
                - "Set up a shared change log for relevance changes with date, author and reason"
                - "Walk the draft through with the merchandising, content and engineering leads"
            - name: Catalogue and content metadata quality inventory
              description: |-
                ## Purpose
                Search and filters can only be as good as the fields behind them. If a third of products have no colour, articles carry no topic tags or listings use free-text sizes, no ranking tweak will fix the filter that returns half the right items. Measuring fill rate and consistency for each field that drives search shows which data fixes will pay off most.

                ## Milestones
                1. Every field used for matching, filtering, sorting or ranking listed with its source system.
                2. Fill rate and number of distinct values measured for each field.
                3. The five fields with the worst quality ranked by how many queries or filters depend on them.
                4. An owner and fix plan agreed for each of the five.

                ## Notes
                Watch for near-duplicate values such as Navy, navy blue and Dark Blue. They split one facet value into three and make every count wrong.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory shows fill rate and distinct values for every search field, with named owners and fix plans for the worst five."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every field the search index uses for matching, filters and sorting"
                - "Measure fill rate and distinct value counts for each field"
                - "Rank the worst five fields by how many filters or queries depend on them"
                - "Recheck fill rates for the five priority fields @recurring(monthly:27)"
            - name: Search quality metric definitions
              description: |-
                ## Purpose
                Click-through rate alone rewards clickbait titles, and zero-result rate alone rewards returning anything at all. A small set of agreed definitions, such as search success rate, zero-result rate, reformulation rate, click position and time to first click, lets the team argue about the product rather than the maths. Write each one down precisely enough that two analysts would get the same number.

                ## Milestones
                1. Five to seven search metrics defined with exact formulas, inclusions and exclusions.
                2. A definition of a successful search agreed, such as a click with no return to the results within a set time.
                3. Each metric's current value calculated once from the logs.
                4. Definitions published where product, analytics and engineering can find them.

                ## Notes
                Decide early how to treat bots, internal staff and autocomplete selections, or each dashboard will count them differently.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A published definitions page gives exact formulas for five to seven search metrics and a first measured value for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft formulas for success rate, zero-result rate, reformulation and click position"
                - "Agree with analytics how bots, staff and autocomplete clicks are counted"
                - "Calculate the first value of each metric from last month's logs"
                - "Review whether each definition still matches how search is used @recurring(yearly)"
            - name: Search event tracking for queries, impressions and clicks
              description: |-
                ## Purpose
                Most products log that a search happened but not which results were shown, in what order, or which one was clicked, and without that no relevance metric can be computed. A search-specific event schema, with a query id tying the query, the result list, filter changes and the click together, is what turns the log into evaluation and training data.

                ## Milestones
                1. An event schema written for query submitted, results shown with positions, filter applied, result clicked and refinement.
                2. A query id carried from the request through to every click and downstream conversion.
                3. Events shipped and checked against a manual test of twenty searches.
                4. A sample day of data confirmed usable for computing the agreed metrics.

                ## Notes
                Log the result ids and positions as served, not as recomputed later. Rankings change and you cannot reconstruct what the user saw.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Search events carry a query id linking the query, served results with positions, filters and clicks, verified against twenty manual test searches."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the search event schema with a shared query id across all events"
                - "Agree with engineering where the served result positions will be logged"
                - "Run twenty manual test searches and check each event fires correctly"
                - "Compute last week's click position distribution as a smoke test"
            - name: Search engine approach decision
              description: |-
                ## Purpose
                Database full-text search, a self-hosted open-source engine and a hosted search service each fit different stages of a product. The wrong choice shows up a year later as either a relevance ceiling or a bill and on-call load the team cannot carry. Comparing the options on your own queries, data size, latency needs, ranking control and staffing turns a vendor debate into a recorded decision.

                ## Milestones
                1. Requirements written: index size, query volume, latency target, languages, filtering and ranking control.
                2. Three options scored against the same criteria, including total cost and engineering time to run.
                3. Each option tested on the same 50 real queries from the baseline.
                4. A decision recorded with the reasons and the conditions that would reopen it.

                ## Notes
                Start from the **Purchase decision** template. Test with your own messy data, not the vendor's demo catalogue.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision chooses a search approach after scoring three options against the same criteria and the same 50 real queries."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the requirements list for index size, volume, latency and ranking control"
                - "Shortlist one database, one open-source and one hosted search option"
                - "Load a sample of real data into each and run the same 50 queries"
                - "Record the decision and what would make the team revisit it"
            - name: Graded judgement list of 200 queries
              description: |-
                ## Purpose
                A judgement list is a set of real queries with each top result graded for relevance, and it is what lets the team test a ranking change offline before any user sees it. Two hundred queries, sampled across the head, middle and tail of the log and graded by two people, is enough to catch most regressions and settle most arguments about whether a change helped.

                ## Milestones
                1. 200 queries sampled from the head, middle and long tail of the query log.
                2. A four-point grading scale written with an example for each grade.
                3. The top ten results for each query graded by at least two judges.
                4. Disagreements resolved and the agreement rate between judges recorded.

                ## Notes
                Store the list with the date and index version it was graded against. Content changes make old grades go stale.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "200 sampled queries have their top ten results graded by two judges on a written scale, with judge agreement recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Sample 200 queries across the head, middle and long tail of the log"
                - "Write a four-point relevance scale with an example for each grade"
                - "Grade the top ten results for each query with a second judge"
                - "Add 20 newly popular queries and regrade stale ones @recurring(quarterly)"
            - name: Weekly zero-result query review
              description: |-
                ## Purpose
                Every week brings new zero-result queries: a product name the catalogue spells differently, a feature users call by a competitor's word, content that does not exist yet. A short weekly review of the top zero-result and low-click queries, with each one sent to the right fix, keeps the rate falling instead of quietly creeping back up.

                ## Milestones
                1. A saved report of last week's top 30 zero-result and low-click queries.
                2. Each query tagged with a fix type: synonym, spelling, content gap, data fix or no action.
                3. Fixes handed to the right owner with the query attached.
                4. The weekly zero-result rate logged so the trend is visible.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The top 30 zero-result queries are reviewed every week, each tagged with a fix type and owner, with the weekly rate logged."
                cadence: rolling
              tasks:
                - "Save a report of last week's top 30 zero-result and low-click queries"
                - "Review the zero-result report and tag each query with a fix type @recurring(weekly:tue)"
                - "Send content gap queries to the content or catalogue owner"
                - "Log the weekly zero-result rate beside the previous weeks"
            - name: Synonym and spelling dictionary upkeep
              description: |-
                ## Purpose
                Users type sofa when the catalogue says couch, invoice when the product says bill, and abbreviations nobody in the team uses. A maintained synonym list fixes many of these cheaply, but a careless one makes results worse: a two-way synonym between jaguar the car and jaguar the animal pollutes both. Keeping the dictionary small, reviewed and logged keeps it helpful.

                ## Milestones
                1. Existing synonyms exported and each checked against a real query that needs it.
                2. One-way and two-way synonyms separated, with a written rule for when to use each.
                3. Every new synonym tested on its top queries before release.
                4. A monthly review removing entries no query has needed.

                ## Notes
                Prefer one-way synonyms for abbreviations and brand names. Two-way entries spread errors in both directions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every synonym in the live dictionary has a supporting query, a direction and a test result, and the list is reviewed monthly."
                cadence: rolling
              tasks:
                - "Export the current synonym list and mark entries with no supporting query"
                - "Write the rule for one-way versus two-way synonyms"
                - "Test each proposed synonym on its top five queries before adding it"
                - "Review new synonym requests and prune unused entries @recurring(monthly:9)"
            - name: Monthly relevance tuning cycle
              description: |-
                ## Purpose
                Ranking drifts as content grows, new fields arrive and merchandising rules pile up. A monthly tuning cycle that picks a handful of underperforming queries, diagnoses why, makes a change and checks it against the judgement list turns relevance work into steady progress rather than a scramble after a complaint from a senior customer.

                ## Milestones
                1. A monthly shortlist of five to ten underperforming queries chosen from the metrics.
                2. A written diagnosis for each: matching, field weighting, freshness, data or intent.
                3. Each change scored against the judgement list before release.
                4. Results of each cycle recorded in the relevance change log.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each monthly cycle records five to ten diagnosed queries, the changes made and their judgement list scores before and after."
                cadence: cyclic
              tasks:
                - "Pick this month's underperforming queries from the quality dashboard @recurring(monthly:16)"
                - "Write a one-line diagnosis for why each chosen query ranks badly"
                - "Score each ranking change against the judgement list before release"
                - "Summarise what the last three cycles improved for the product lead @recurring(quarterly)"
            - name: Search quality dashboard and monthly report
              description: |-
                ## Purpose
                Product leaders rarely look at search until something breaks. A dashboard built on the agreed definitions, with a short written monthly report on what moved and why, keeps search visible as a product surface with its own trend line. It also gives the team evidence when asking for time to fix data or tune ranking.

                ## Milestones
                1. A dashboard showing the agreed metrics by week, platform and segment.
                2. Alert thresholds set for sudden rises in zero-result rate or drops in success rate.
                3. A one-page monthly report format with three sections: what moved, why and what next.
                4. The first three monthly reports sent.

                ## Notes
                Start from the **Metrics log** template for the monthly numbers. Show query volume beside every rate so a dip in a quiet week is not mistaken for a trend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A live search quality dashboard exists and a one-page monthly report has gone to the product lead three months running."
                cadence: rolling
              tasks:
                - "Build the dashboard from the agreed search metric definitions"
                - "Set alert thresholds for zero-result rate and success rate changes"
                - "Write and send the monthly search quality report @recurring(monthly:4)"
                - "Add a per-platform split for web and mobile app search"
            - name: Pinned results and merchandising rules governance
              description: |-
                ## Purpose
                Pinning a result to the top of a query or boosting a brand is a fast fix, and every one of them outlives the reason it was added. Products with a few hundred stale rules end up with ranking nobody understands. Giving each rule an owner, a reason and an expiry date keeps manual control useful without letting it bury the algorithm.

                ## Milestones
                1. Every active pinned, boosted or buried rule exported with its creator and date.
                2. Each rule given an owner, a reason and an expiry date, or removed.
                3. A limit agreed on the number of rules per query and in total.
                4. A monthly expiry check running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live merchandising rule has an owner, a reason and an expiry date, and rules reaching expiry are reviewed each month."
                cadence: rolling
              tasks:
                - "Export every active pin, boost and bury rule with its creator and date"
                - "Remove rules whose reason nobody can explain"
                - "Add an owner and expiry date to every remaining rule"
                - "Review rules reaching their expiry date this month @recurring(monthly:22)"
            - name: Index freshness and sync monitoring
              description: |-
                ## Purpose
                Users notice when an item they just published does not appear in search, or a deleted one still shows and leads to an error page. The index is a copy of the source data and copies drift through failed jobs, partial reindexes and mapping errors. Monitoring the lag and the count difference between source and index catches drift before customers report it.

                ## Milestones
                1. A freshness target agreed, such as new or changed items searchable within five minutes.
                2. Lag between a source update and the matching index update measured continuously.
                3. Document counts in source and index compared daily, with an alert on gaps.
                4. A runbook entry written for the three most common sync failures.

                ## Notes
                Deletions are the case most often missed. Test them explicitly, including items that become private rather than deleted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Index lag and source to index count differences are measured with alerts, and a weekly check confirms both stay within the agreed target."
                cadence: rolling
              tasks:
                - "Agree a freshness target for new, changed and deleted items"
                - "Add a metric for the lag between source updates and index updates"
                - "Alert when source and index document counts differ by more than the agreed amount"
                - "Check last week's freshness lag and sync alerts @recurring(weekly:mon)"
            - name: Search feedback triage
              description: |-
                ## Purpose
                Comments left under the results page, plus search complaints arriving through support, give qualitative evidence the logs cannot. Read weekly and tagged consistently, they surface intent the team never imagined, such as users searching by order number or by a colleague's name, and they show which fixes users actually notice.

                ## Milestones
                1. A feedback prompt live on the results page that captures the query automatically.
                2. Search-related support tickets routed to one place with the query attached.
                3. A tag set agreed: wrong results, missing item, slow, filter problem, other.
                4. A weekly summary of the top themes added to the relevance backlog.

                ## Notes
                Start from the **Feedback themes** template so the tags stay stable from week to week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Search feedback from the results page and from support is tagged weekly, and the top themes appear in the relevance backlog."
                cadence: rolling
              tasks:
                - "Add a feedback prompt under search results that records the query"
                - "Ask support to tag search complaints with one shared label"
                - "Tag this week's search feedback and add the top themes to the backlog @recurring(weekly:fri)"
                - "Reply to users whose feedback led to a fix"
            - name: Offline relevance regression suite
              description: |-
                ## Purpose
                One change that helps the query the team was staring at often quietly harms twenty others. Running every ranking, analyser or mapping change against the judgement list and a set of must-pass queries before release catches those regressions in minutes instead of after weeks of complaints.

                ## Milestones
                1. A script that scores any index or config against the judgement list and reports NDCG and precision at ten.
                2. A list of 30 must-pass queries whose correct top result is known.
                3. The suite wired into the release process for search config changes.
                4. A threshold agreed for how far a score may drop before a change is blocked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every search config change runs through the judgement list and must-pass queries before release, with a blocking threshold agreed."
                cadence: rolling
              tasks:
                - "Write a script that scores any search config against the judgement list"
                - "Choose 30 must-pass queries with known correct top results"
                - "Add the suite to the release checklist for search config changes"
                - "Run the suite against the production config to catch drift @recurring(weekly:thu)"
            - name: Quarterly facet and category taxonomy review
              description: |-
                ## Purpose
                Categories and facet values age: new product lines arrive, old ones shrink to three items, and labels the team chose two years ago no longer match how users talk. A quarterly review using browse analytics and query language keeps the structure people navigate by in line with what is actually in the catalogue and what people look for.

                ## Milestones
                1. Usage per category and per facet pulled for the quarter.
                2. Categories with very few items or very little traffic listed for merging.
                3. Labels compared against the words users type in search.
                4. Agreed changes made, with redirects for any removed category pages.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter a review records category and facet usage, the merges or renames made with reasons, and redirects for removed pages."
                cadence: cyclic
              tasks:
                - "Pull category page traffic and facet usage for the quarter @recurring(quarterly)"
                - "List categories with fewer than ten items or almost no traffic"
                - "Compare category labels with the words users type in search"
                - "Set up redirects before removing or merging any category page"
            - name: Information retrieval fundamentals for the product team
              description: |-
                ## Purpose
                Product managers and designers who know how an inverted index, tokenising, field weights and BM25 scoring work ask better questions and stop proposing fixes the engine cannot do. Four short sessions led by an engineer, built around your own queries, give the whole team a shared vocabulary for relevance conversations.

                ## Milestones
                1. An engineer agreed to lead four short sessions.
                2. Sessions delivered on indexing, text analysis, scoring and filtering.
                3. Each session built around real queries from the product's own log.
                4. Notes saved where new joiners will find them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four sessions on indexing, analysis, scoring and filtering are delivered using the product's own queries, with notes saved for new joiners."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask an engineer to explain how one real query becomes a ranked list"
                - "Schedule four 45-minute sessions on indexing, analysis, scoring and filters"
                - "Use five real queries from the baseline as worked examples"
                - "Save the session notes and slides in the team wiki"
            - name: Relevance judging calibration workshop
              description: |-
                ## Purpose
                Judgement lists are only useful if two judges grading the same result usually agree. A two-hour calibration session where the team grades the same twenty query and result pairs, then discusses the disagreements, sharpens the grading guide and exposes hidden differences in how people think the product should behave.

                ## Milestones
                1. Twenty query and result pairs chosen, including easy and ambiguous cases.
                2. Everyone has graded independently before the discussion.
                3. Agreement measured and the widest disagreements discussed.
                4. The grading guide updated with the examples that caused disagreement.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A calibration session records agreement on twenty graded pairs and the grading guide gains the contested examples with agreed grades."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose twenty query and result pairs including several ambiguous ones"
                - "Have each participant grade the pairs alone before the session"
                - "Discuss the five pairs with the widest disagreement"
                - "Add the contested examples to the grading guide with the agreed grade"
            - name: Reading ranking metrics like NDCG, MRR and precision
              description: |-
                ## Purpose
                Ranking metrics can look precise and still mislead: NDCG rises when a mediocre result moves up two places, and mean reciprocal rank ignores everything after the first good result. Working through how each metric behaves on your own judgement list helps product managers explain offline results to stakeholders and choose the metric that matches the experience users have.

                ## Milestones
                1. Precision at ten, MRR and NDCG calculated by hand for five judged queries.
                2. A one-page note on what each metric rewards and what it ignores.
                3. The primary offline metric for this product chosen and recorded with the reason.
                4. The note shared with whoever reviews ranking changes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains precision at ten, MRR and NDCG with worked examples from the product and names the primary offline metric."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate precision at ten, MRR and NDCG by hand for five judged queries"
                - "Write a one-page note on what each metric rewards and ignores"
                - "Pick the primary offline metric and record why it fits the product"
                - "Ask the agent to check the hand calculations and explain any difference"
            - name: Query understanding basics
              description: |-
                ## Purpose
                Before ranking, the engine has to decide what a query means: split it into tokens, fix spelling, recognise that red dress size 12 contains a colour and a size, and spot a query that is really a request to go somewhere. Learning the main techniques, and seeing where your current setup fails, tells the team which query understanding work would pay off first.

                ## Milestones
                1. The current analysis chain written out: tokeniser, filters, stemming and stop words.
                2. Twenty real queries traced through the chain with the output noted.
                3. Failures grouped: over-stemming, split compound words, unrecognised attributes, navigational intent.
                4. A short list of improvements ranked by the query volume each affects.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty real queries are traced through the analysis chain and the failures form a ranked list of improvements with query volumes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask engineering for the current tokeniser, stemming and stop word settings"
                - "Trace twenty real queries through the analysis chain and note the output"
                - "Group the failures by cause and estimate the query volume for each"
                - "Rank the improvements by the query volume they would affect"
            - name: Search and browse interface pattern study
              description: |-
                ## Purpose
                Autocomplete, instant results, facets with counts, applied filter chips, sort menus, empty states and pagination versus infinite scroll each have known strengths and failure modes. Studying how six well-regarded products in and outside your category handle them gives the designer and product manager a pattern library to argue from, rather than copying whichever competitor was opened last.

                ## Milestones
                1. Six products studied, at least two outside your own market.
                2. Screenshots collected for autocomplete, facets, sort, empty states and result layout.
                3. Each pattern noted with when it works and when it fails.
                4. A pattern page shared with the design team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pattern page covers autocomplete, facets, sort, empty states and result layouts across six products, noting when each works."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick six products to study, two of them outside your market"
                - "Screenshot each product's autocomplete, facets, sort and empty states"
                - "Note when each pattern helps and when it gets in the way"
                - "Share the pattern page with design and collect their additions"
            - name: Semantic and vector search primer
              description: |-
                ## Purpose
                Embedding-based retrieval finds results that share meaning without sharing words, which helps with natural-language queries and hurts with part numbers, names and exact phrases. Product managers need to know enough about embeddings, approximate nearest neighbour indexes and hybrid scoring to judge vendor claims and decide where semantic matching belongs in your search.

                ## Milestones
                1. The basics learned: embeddings, similarity, approximate nearest neighbour indexes and hybrid scoring.
                2. The top 100 queries classified as needing exact matching, meaning matching or both.
                3. Three vendor or library claims checked against what the primer taught.
                4. A short note for the team on where semantic retrieval might help first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team note classifies the top 100 queries by exact versus meaning matching and names where semantic retrieval could help first."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read an introduction to embeddings and nearest neighbour search"
                - "Classify the top 100 queries as exact match, meaning match or mixed"
                - "Check three vendor claims about semantic search against what you learned"
                - "Write a one-page note on where semantic retrieval might help first"
            - name: Online ranking experiments and interleaving
              description: |-
                ## Purpose
                Offline scores say whether a ranking agrees with your judges; only live traffic says whether users find things faster. Standard split tests on search need large samples because most sessions never touch the queries a ranking change affects, while interleaving mixes two rankings in one result list and detects a preference with far less traffic. Learning both lets the team test ranking changes without waiting months.

                ## Milestones
                1. The difference between split testing and interleaving understood using your own traffic numbers.
                2. Sample size estimated for detecting a realistic change in search success rate.
                3. One small ranking change tested live with the chosen method.
                4. A short guide written for running the next ranking experiment.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One ranking change has been tested live by split test or interleaving with the sample size worked out in advance, and a how-to guide written."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Estimate how many searches a week reach the queries a typical change affects"
                - "Work out the sample size needed to detect a two-point change in success rate"
                - "Run one small ranking change as a live experiment"
                - "Write a one-page guide for running the next ranking experiment"
            - name: Autocomplete and query suggestions redesign
              description: |-
                ## Purpose
                Autocomplete shapes a large share of queries before they are fully typed, so weak suggestions spread misspellings and dead ends while good ones steer users towards queries that return results. A redesign that blends popular queries, catalogue entities and recent searches, removes suggestions that return nothing and works with a keyboard and screen reader can lift search success quickly.

                ## Milestones
                1. Current suggestions audited for the top 50 prefixes, with dead ends and odd suggestions noted.
                2. A spec agreed covering suggestion sources, ordering, limits and blocked terms.
                3. Accessible combobox behaviour confirmed: arrow keys, announcements and escape.
                4. The new autocomplete live and its effect on success rate measured.

                ## Notes
                Start from the **Product spec** template. Keep a block list for offensive or legally sensitive suggestions from the first day.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new autocomplete ships with a written spec, passes keyboard and screen reader checks, and its effect on search success rate is measured."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Type the top 50 query prefixes and screenshot what autocomplete suggests"
                - "Write the suggestion spec covering sources, ordering, limits and blocked terms"
                - "Test the new autocomplete with keyboard only and with a screen reader"
                - "Compare search success rate before and after the release"
            - name: Facets and filters for the main results page
              description: |-
                ## Purpose
                Facets help when there are many results and users know which attribute matters: size, price, date, author or status. Too many, in the wrong order or with values that return nothing, and the panel becomes noise. Choosing facets from query and usage data, ordering them by usefulness and showing counts makes filtering a shortcut instead of a chore.

                ## Milestones
                1. Candidate facets ranked by how often users filter on or type that attribute.
                2. A facet set and order chosen for each major category or content type.
                3. Behaviour agreed for multi-select, counts, zero-count values and applied filter chips.
                4. Usage of the new facets measured a month after release.

                ## Notes
                A facet with poor data quality is worse than none. Check fill rates from the metadata inventory before committing to one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The results page ships a facet set chosen from usage data, with agreed multi-select and count behaviour, and facet use measured after a month."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Rank candidate facets by filter usage and attribute words in queries"
                - "Check the fill rate for each candidate facet field before including it"
                - "Agree behaviour for multi-select, counts and values with no results"
                - "Measure facet usage and refinement success a month after release"
            - name: Default sort order and sort options decision
              description: |-
                ## Purpose
                Most users never touch the sort menu, so the default order decides what most people see. Relevance, newest, most popular, price and rating each serve different intents, and a default that suits a merchandiser's goals can hurt a user looking for one specific item. Deciding the default per context, and which alternatives to offer, is a product decision that deserves evidence.

                ## Milestones
                1. Sort menu usage and the share of sessions that change sort measured.
                2. Each context listed: keyword search, category browse, empty query and filtered list.
                3. A default chosen for each context with the reason recorded.
                4. Tie-breaking rules written so equal scores give a stable order.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision sets the default sort and available sort options for each search and browse context, with tie-breaking rules."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Measure how often users change the sort order and to what"
                - "List the contexts where results appear and the intent behind each"
                - "Choose a default sort for each context and record why"
                - "Write a stable tie-breaking rule for results with equal scores"
            - name: Zero-result page that recovers the search
              description: |-
                ## Purpose
                An empty page that says no results ends the session. A recovery page that shows the corrected spelling, relaxes the strictest filter, suggests related queries or popular items and offers a way to ask for help keeps many of those users going. With the zero-result rate already measured, the impact is easy to show.

                ## Milestones
                1. The current zero-result experience captured for search, filtered lists and empty categories.
                2. Recovery tactics chosen in order: spelling correction, filter relaxation, partial matches, suggestions, contact route.
                3. The new page shipped with tracking on which recovery option users pick.
                4. Abandonment after zero results compared before and after.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A zero-result page with spelling correction, filter relaxation and suggestions ships, and abandonment after zero results is compared before and after."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Screenshot every zero-result state in search, filtered lists and empty categories"
                - "Choose the recovery tactics and the order they appear in"
                - "Track which recovery option users click on the new page"
                - "Compare session abandonment after zero results before and after release"
            - name: Typo tolerance and fuzzy matching settings
              description: |-
                ## Purpose
                Simple misspellings are often one of the largest causes of zero results, but turning fuzzy matching up too far makes cat match car and floods precise queries with noise. Tuning edit distance by word length, protecting codes and names from fuzzing and adding a did you mean prompt recovers those queries without hurting the exact ones.

                ## Milestones
                1. Misspelled queries in the zero-result list counted and grouped.
                2. Edit distance rules set by word length, with product codes, SKUs and names protected.
                3. A did you mean suggestion shown when a corrected query returns far more results.
                4. The judgement list run to confirm exact queries did not get worse.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fuzzy matching rules by word length are live with codes protected, misspelled zero-result queries fall, and judgement list scores hold."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count the misspelled queries in the latest zero-result report"
                - "Set edit distance by word length and exclude codes and names"
                - "Add a did you mean prompt for queries a correction would rescue"
                - "Run the regression suite to confirm exact queries are unaffected"
            - name: Hybrid keyword and semantic retrieval trial
              description: |-
                ## Purpose
                Adding semantic retrieval alongside keyword matching can help long natural-language queries, but it adds cost, latency and a new way to return confidently wrong results. A time-boxed trial on a copy of the index, scored on the judgement list and split by query type, tells you whether the gain is worth running two retrieval systems.

                ## Milestones
                1. Embeddings generated for a copy of the index using one chosen model.
                2. Keyword, semantic and blended rankings scored on the judgement list.
                3. Results split by query type: exact codes, short keywords and long descriptive queries.
                4. A go or no-go decision recorded with latency and cost per thousand queries.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded go or no-go decision compares keyword, semantic and blended rankings on the judgement list by query type, with latency and cost."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Build embeddings for a copy of the index with one chosen model"
                - "Score keyword, semantic and blended rankings on the judgement list"
                - "Split the scores by exact, short keyword and long descriptive queries"
                - "Record the decision with latency and cost per thousand queries"
            - name: Browse navigation restructure with card sorting and tree testing
              description: |-
                ## Purpose
                When users cannot guess which menu or category holds what they need, they either search for everything or leave. An open card sort shows how users group your content, and a tree test checks whether a proposed structure lets them find ten target items without visual design getting in the way. Together they turn a menu argument into evidence.

                ## Milestones
                1. An open card sort completed with at least fifteen users on 40 to 60 items.
                2. A proposed category tree drafted from the groupings.
                3. A tree test run on ten find tasks with success and directness recorded.
                4. The revised navigation shipped with redirects from old paths.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A new navigation tree, backed by a card sort and a tree test with recorded task success, ships with redirects from old paths."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Pick 40 to 60 representative items for an open card sort"
                - "Run the card sort with at least fifteen users"
                - "Tree test the proposed structure on ten find tasks"
                - "Map old category paths to new ones and set up redirects"
            - name: Personalised ranking signals decision
              description: |-
                ## Purpose
                Boosting results by a user's history, location or role can make search feel sharp, and it can also hide things people need, surprise them or use data they did not expect to be used. Deciding which signals to use, for which queries and with what user controls, before anyone builds it, keeps personalisation helpful and explainable.

                ## Milestones
                1. Candidate signals listed with the data each needs and where it comes from.
                2. Each signal checked with the privacy owner for consent and retention.
                3. Queries where personalisation should not apply identified, such as exact names and codes.
                4. A decision recorded on which signals to test first and how users can see or reset them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the personalisation signals to test, the excluded query types, the privacy sign-off and the user controls."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List candidate personalisation signals and the data each one needs"
                - "Review each signal with whoever owns privacy and consent"
                - "Mark the query types where personalisation must not apply"
                - "Record which signals to test first and how users can reset them"
            - name: Search latency budget for results and autocomplete
              description: |-
                ## Purpose
                Slow search feels broken: users retype, submit twice or give up, and autocomplete that lags behind typing is worse than none. Setting a latency budget at the 95th percentile for results and autocomplete, and finding where the time goes between the browser, the API and the engine, gives engineering a target and product a reason to say no to expensive features.

                ## Milestones
                1. Current median and 95th percentile latency measured for results and autocomplete on web and mobile.
                2. A budget agreed for each, written in milliseconds at the 95th percentile.
                3. Time broken down across network, application, engine and rendering.
                4. The two largest contributors fixed or scheduled.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written latency budget exists for results and autocomplete at the 95th percentile, with current figures broken down by layer and the top two fixes scheduled."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Measure median and 95th percentile latency for results and autocomplete"
                - "Agree a 95th percentile latency budget for each with engineering"
                - "Break the time down across network, application, engine and rendering"
                - "Schedule fixes for the two largest contributors"
            - name: Search engine migration cutover
              description: |-
                ## Purpose
                Moving to a new engine or hosted service is a dated event with real risk: relevance can quietly drop, filters behave differently and old URLs with query strings break. A cutover plan with a shadow period, side-by-side comparison on real traffic and a tested rollback switch lets the team move without a week of support escalations.

                ## Milestones
                1. A parity checklist completed for filters, sort, synonyms, pinned rules, highlighting and pagination.
                2. Shadow traffic run on the new engine, with result overlap measured for the top 500 queries.
                3. Judgement list scores equal to or better than the old engine.
                4. Cutover done with rollback tested and the old engine kept warm for an agreed period.

                ## Notes
                Start from the **Operational checklist** template. Merchandising rules and synonyms rarely migrate cleanly, so export and compare them line by line.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Search is cut over to the new engine with the parity checklist complete, judgement list scores held and rollback tested."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Build a parity checklist of every search behaviour users rely on"
                - "Send shadow traffic to the new engine and measure top 500 query overlap"
                - "Compare judgement list scores between the old and new engines"
                - "Rehearse the rollback switch before the cutover date"
            - name: Full reindex and schema change rehearsal
              description: |-
                ## Purpose
                Adding a field, changing an analyser or splitting an index usually means rebuilding the whole index, and on a large catalogue that can take hours while writes keep arriving. Rehearsing the reindex with an alias swap on a staging copy, and timing it, turns a risky night for the engineer on duty into a routine step.

                ## Milestones
                1. The schema change written up with the fields and analysers affected.
                2. A reindex rehearsed on a staging copy and its duration recorded.
                3. Writes during the rebuild handled by dual writes or a catch-up replay.
                4. The production reindex completed by alias swap with document counts matched.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A production reindex completes by alias swap after a timed staging rehearsal, with source and index counts matching afterwards."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write up the schema change and every field and analyser it affects"
                - "Rehearse the reindex on a staging copy and time it"
                - "Choose dual writes or a catch-up replay for changes during the rebuild"
                - "Swap the alias and compare document counts after the production reindex"
            - name: Peak season search readiness
              description: |-
                ## Purpose
                Whether the peak is a holiday sale, the start of term or year-end reporting, search traffic and query mix change sharply and new seasonal terms appear. Preparing four to six weeks ahead with load tests, seasonal synonyms, landing pages for expected queries and a frozen config window prevents the most visible failures on the busiest days.

                ## Milestones
                1. Last year's peak queries pulled and compared with a normal week.
                2. A load test passed at twice the expected peak query rate.
                3. Seasonal synonyms, landing pages and pinned results prepared with end dates.
                4. A change freeze and on-call rota agreed for the peak window.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the peak, search passes a load test at twice expected traffic, seasonal rules carry end dates and a change freeze is agreed."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pull last year's peak week queries and compare them with a normal week"
                - "Load test search at twice the expected peak query rate"
                - "Prepare seasonal synonyms and pinned results with end dates"
                - "Start peak readiness planning six weeks before the busy period @recurring(yearly)"
            - name: Search relaunch support briefing and help content
              description: |-
                ## Purpose
                Regular users are thrown when a familiar search page changes: a filter they relied on moves, quoted phrases behave differently or results come back in a new order. Updating the help articles on search tips and syntax, and briefing support on the questions to expect before release, keeps the improvement from turning into a wave of tickets.

                ## Milestones
                1. A list of every visible change and any removed behaviour.
                2. Help articles on search syntax, filters and tips updated.
                3. Support briefed with the five questions they are most likely to get.
                4. Feedback from the first two weeks reviewed and quick fixes shipped.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the relaunch, search help articles are updated and support is briefed, and the first two weeks of feedback are reviewed with fixes logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every visible change in the new search and anything removed"
                - "Update the help articles on search tips, syntax and filters"
                - "Brief support on the five questions users are most likely to ask"
                - "Review the first two weeks of search feedback and ship quick fixes"
            - name: Adding a new content type to search
              description: |-
                ## Purpose
                When a product adds a new kind of thing to find, such as help articles beside products or projects beside documents, mixing them into one result list without a plan usually buries one type under the other. Deciding whether to blend, group or tab the types, how to weight them and how each result looks makes the launch work for both.

                ## Milestones
                1. Queries likely to want the new type identified from the log.
                2. A presentation decision made: blended list, grouped sections or tabs.
                3. Fields mapped and weighted so the new type competes fairly.
                4. The launch measured by clicks on the new type and any drop in clicks on existing types.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new content type launches into search with a recorded presentation decision, and clicks on both new and existing types are measured."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Find queries in the log that are likely to want the new content type"
                - "Choose between blended results, grouped sections or tabs"
                - "Map the new type's fields and set their weights"
                - "Compare clicks on new and existing types two weeks after launch"
            - name: Ecommerce product search for a catalogue team
              description: |-
                ## Purpose
                Shoppers search by brand, size, colour, use and price in a few words, and expect out-of-stock items, variants and bundles to behave sensibly. Catalogue and merchandising teams need ranking that respects margin and stock without hiding the product a shopper named. Setting the core rules for variants, stock, attributes and business boosts gives store search a sound base.

                ## Milestones
                1. Rules agreed for variants: one result per product or one per variant.
                2. Out-of-stock handling chosen: demote, hide or label.
                3. Attribute recognition set up for size, colour and brand words in queries.
                4. Business boosts for margin or promotion capped so they cannot outrank exact matches.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Store search has written rules for variants, stock, query attributes and capped business boosts, live and checked against the judgement list."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Decide whether results show one row per product or one per variant"
                - "Choose how out-of-stock items are demoted, hidden or labelled"
                - "Set up recognition of size, colour and brand words in queries"
                - "Check that new supplier attributes map to existing filters @recurring(monthly:19)"
            - name: Permission-aware search in a B2B app
              description: |-
                ## Purpose
                In business software, search must never show a user a document, record or even a title they are not allowed to see, and a result count that reveals a confidential deal exists is still a leak. Engineers and product managers need to agree how permissions reach the index, how quickly a revoked permission takes effect and how all of this is tested.

                ## Milestones
                1. The access model documented: roles, sharing, workspaces and record-level rules.
                2. An approach chosen: permissions stored in the index, filtered at query time, or both.
                3. A revocation lag target set and measured.
                4. Automated tests that search as restricted users and confirm nothing leaks, including counts and autocomplete.

                ## Notes
                Facet counts, autocomplete and did you mean suggestions are the usual leaks. Test them as carefully as the result list.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Automated tests searching as restricted users confirm no results, counts or suggestions leak, and revocation lag meets the agreed target."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write down every rule that decides who can see a record"
                - "Choose between index-time permissions, query-time filtering or both"
                - "Measure how long a revoked permission takes to affect search"
                - "Add tests that search as restricted users and check counts and autocomplete"
            - name: Help centre search for support deflection
              description: |-
                ## Purpose
                Support teams want customers to find the answer article before opening a ticket, but help centre search often fails on the exact words customers use in tickets. Matching ticket language to article titles, tracking searches that end in a ticket and fixing the top gaps every month turns help centre search into a measurable source of deflection.

                ## Milestones
                1. Searches followed by a ticket within an hour identified.
                2. The top 20 of those queries matched to an existing article or marked as a content gap.
                3. Article titles and keywords updated using customer wording.
                4. The search to ticket rate tracked monthly.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The top 20 help centre queries that end in a ticket are reviewed monthly, articles are retitled or written, and the search to ticket rate is tracked."
                cadence: rolling
              tasks:
                - "Find help centre searches followed by a ticket within an hour"
                - "Match the top 20 such queries to an article or mark them as gaps"
                - "Retitle articles using the words customers use in tickets"
                - "Review the search to ticket rate and new content gaps @recurring(monthly:12)"
            - name: Minimum workable search for a small team
              description: |-
                ## Purpose
                Small teams with no search specialist do not need learning to rank. They need sensible field weights, prefix matching, typo tolerance, a few filters and a log of what people type. Choosing the simplest setup that covers those, and writing down what can wait, gets decent search live in days and leaves room to grow.

                ## Milestones
                1. Three to five fields chosen and weighted, with titles above body text.
                2. Prefix matching and typo tolerance on, with filters for the two most used attributes.
                3. Query logging live so the zero-result review can start.
                4. A short list written of what to add only when evidence demands it.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Search is live with weighted fields, prefix and typo matching, two filters and query logging, plus a written list of deferred features."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose three to five searchable fields and weight titles highest"
                - "Turn on prefix matching and typo tolerance in the engine settings"
                - "Add filters for the two attributes users ask about most"
                - "Write the list of search features to defer until evidence demands them"
            - name: Search on-call runbook for engineers
              description: |-
                ## Purpose
                When search breaks at night, the engineer on call is often not the one who built it. A runbook covering the common failures, such as a stuck indexing job, a cluster running out of disk, a bad synonym deploy or a sudden latency spike, with the checks and the safe rollback for each, shortens incidents and spreads knowledge beyond one person.

                ## Milestones
                1. The last year's search incidents listed with cause and fix.
                2. A runbook entry written for each of the five most likely failures.
                3. Rollback steps for config, synonyms and the index alias tested.
                4. A newer engineer has completed a drill using only the runbook.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A search runbook covers the five most likely failures with tested rollback steps, and a newer engineer has completed a drill using it."
                cadence: rolling
              tasks:
                - "List last year's search incidents with their cause and fix"
                - "Write runbook entries for the five most likely failures"
                - "Test rollback for config, synonyms and the index alias"
                - "Run a search failure drill with a newer engineer @recurring(quarterly)"
            - name: More like this and related items on detail pages
              description: |-
                ## Purpose
                Discovery does not stop at the search box: users who land on an article, product or record often want something similar, and a well-chosen related list keeps them exploring. Starting with attribute similarity and co-viewed items, then measuring clicks and onward visits, shows whether related items help or just fill space.

                ## Milestones
                1. Detail pages chosen where related items would help most, by traffic and exit rate.
                2. Two methods compared on sample pages: shared attributes and text similarity versus co-viewed items.
                3. A related items module shipped with click tracking.
                4. Exit rate and onward clicks compared with pages without the module.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A related items module ships on the chosen detail pages, and exit rate and onward clicks are compared against pages without it."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Rank detail pages by traffic and exit rate"
                - "Compare attribute similarity with co-viewed items on twenty sample pages"
                - "Ship the related items module with click tracking"
                - "Compare exit rate on pages with and without the module"
            - name: Learning to rank from click data
              description: |-
                ## Purpose
                Once the team has clean click logs, a judgement list and an experiment process, a trained ranking model can combine dozens of signals better than hand-tuned weights. Clicks are biased, though: users click the top result partly because it is on top. Correcting for position bias and holding the model to the judgement list keeps it learning relevance rather than copying your old ranking.

                ## Milestones
                1. Features listed and logged for each query and result: text scores, freshness, popularity and quality.
                2. Training data built from clicks with a position bias correction.
                3. A model trained that beats the current ranking on the judgement list.
                4. The model tested live and a retraining schedule agreed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ranking model trained on bias-corrected clicks beats the current ranking on the judgement list and in a live test, with retraining scheduled."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "List the ranking features available for each query and result pair"
                - "Build training data from clicks with a position bias correction"
                - "Train a first model and score it on the judgement list"
                - "Test the model live with interleaving before replacing the current ranking"
            - name: Query intent classification and routing
              description: |-
                ## Purpose
                Some queries are navigational, such as a settings page, some ask for a specific item by code, some want a category and some are questions. Treating them all the same means a user typing billing gets fifty documents that mention billing instead of the billing page. Classifying intent and routing each type to the right handling raises success on the head queries quickly.

                ## Milestones
                1. The top 500 queries labelled by intent: navigational, known item, category, question or exploratory.
                2. A rule-based classifier built for the clearest intents.
                3. Routing set up: direct links, exact match, category landing or standard search.
                4. Success rate by intent compared before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The top 500 queries are labelled by intent, routing is live for at least three intents, and success rate by intent is compared before and after."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Label the top 500 queries by intent type"
                - "Ask the agent to suggest rules that separate the clearest intents"
                - "Route navigational queries straight to the matching page"
                - "Compare search success rate for each intent before and after"
            - name: Multilingual search analysers and per-language relevance
              description: |-
                ## Purpose
                Searching in several languages is more than translating labels: stemming, compound words, accents and stop words differ by language, and a query in one language may need results written in another. Setting up language detection, per-language analysers and a judgement list per language stops non-English users from getting the weakest search in the product.

                ## Milestones
                1. Query volume by language measured.
                2. An analyser chosen for each language above an agreed share of traffic.
                3. Cross-language behaviour decided: same language only, fallback, or translated queries.
                4. A small judgement list built and scored for each supported language.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each language above the agreed traffic share has its own analyser and judgement list scores, with the cross-language fallback recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Measure search query volume by detected language"
                - "Choose an analyser for each language above the agreed traffic share"
                - "Decide how queries fall back when no results exist in the user's language"
                - "Build and grade a 50-query judgement list for each supported language"
            - name: Search log privacy and retention rules
              description: |-
                ## Purpose
                People type surprising things into search boxes: names, email addresses, account numbers, health details and passwords pasted by mistake. Logs kept forever and shared freely across teams become a liability. Working with whoever owns privacy to agree what is logged, how it is scrubbed, who can see it and when it is deleted keeps search analysis possible without hoarding personal data.

                ## Milestones
                1. Every place search queries are stored listed, including analytics tools and vendor dashboards.
                2. Scrubbing rules agreed for patterns such as email addresses, card numbers and phone numbers.
                3. Access limited to named roles and a retention period agreed with the privacy owner.
                4. A yearly check confirming deletion happens as agreed.

                ## Notes
                Agree the rules with your privacy or legal lead. This project organises the work; it does not decide what the law requires in your country.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule set agreed with the privacy owner covers where queries are stored, scrubbing patterns, access and retention, with deletion checked yearly."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every system that stores search queries, including vendor dashboards"
                - "Draft scrubbing patterns for email addresses, card numbers and phone numbers"
                - "Agree access roles and a retention period with the privacy owner"
                - "Confirm old query logs were deleted on schedule @recurring(yearly)"
            - name: Federated search across several content sources
              description: |-
                ## Purpose
                Products that grow by acquisition or by adding modules often end up with search split across separate stores: one for documents, one for tickets, one for people. A single search across all of them needs score normalisation, consistent permissions, sensible grouping and a plan for sources that respond slowly. It is specialist work that pays off for users who would otherwise search four times.

                ## Milestones
                1. Each source listed with its engine, latency, permissions model and volume.
                2. An approach chosen: one merged index or query-time fan-out with merged results.
                3. Blended or grouped presentation decided and tested on the judgement list.
                4. Timeouts set so a slow source degrades gracefully rather than blocking results.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A single search spans the chosen sources with a recorded merging approach, blended or grouped results tested and timeouts set for slow sources."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List each content source with its engine, latency and permissions model"
                - "Choose between one merged index and query-time fan-out"
                - "Test blended versus grouped results on the judgement list"
                - "Set per-source timeouts so a slow source cannot block results"
---

# Search & Discovery Features

This area is for product teams and engineers responsible for how people find things inside a product: the search box, autocomplete, filters, sort orders, category pages and related items. It starts with the foundations (an audit of every findability path, a query log baseline, metadata quality, metric definitions, search events, the engine decision and a graded judgement list), moves through the weekly and monthly machinery of relevance work, the skills of information retrieval and ranking evaluation, the improvements to autocomplete, facets, zero-result pages and navigation, then dated migrations, reindexes and peaks, the situations of store, business software, help centre and small-team search, and ends with specialist work on learning to rank, intent routing, multilingual analysers, log privacy and federated search.

What repeats is a Tuesday zero-result review, a Monday freshness check, a Thursday regression run and Friday feedback triage, with the monthly report, synonym pruning, tuning cycle, rule expiry and metadata checks on different days, quarterly taxonomy, judgement list and runbook refreshes, and a yearly findability study. The Purchase decision, Metrics log, Feedback themes, Product spec and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
