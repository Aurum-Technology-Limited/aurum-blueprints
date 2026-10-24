---
id: software-engineering.application-performance-tuning
name: Application Performance Tuning
description: "Honest latency baselines, profilers you can read, budgets that fail the build, and the routines and targeted fixes that make slow pages, queries and services fast and keep them fast."
category: business
version: 1.0.0
tags: [software-engineering, application-performance-tuning, engineer, team, profiling, latency, web-performance, performance-budgets]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - remediation-plan
    - skills-matrix
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Application Performance Tuning
          description: "Profiling and speeding up slow pages, queries and services, setting performance budgets and keeping them from regressing over time."
          projects:
            - name: Inventory of slow pages, queries and services
              description: |-
                ## Purpose
                Performance work usually starts from one loud complaint and ends up fixing whatever the loudest person noticed. Collecting every known slow spot from support tickets, monitoring, the error tracker and the team's own grumbles gives you a ranked list where effort can go to the paths that cost users the most time.

                ## Milestones
                1. A single list of known slow pages, endpoints, queries and jobs, each with where the complaint came from.
                2. Every item tagged with a rough traffic figure so rare paths and hot paths are distinguishable.
                3. The top ten items ranked by user time lost, which is latency multiplied by request count.
                4. The list saved in the team's documentation with a named owner.

                ## Notes
                Rank by total time lost, not by worst single latency. A 300 ms endpoint called a million times a day usually matters more than a 9 second report run twice a week.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A saved, ranked list of at least ten slow paths exists, each with its source, traffic estimate and owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search the last 90 days of support tickets for words like slow, timeout and spinning"
                - "Export the 20 slowest endpoints by p95 from the monitoring tool"
                - "Multiply each path's latency by its daily request count to estimate time lost"
                - "Publish the ranked list and name an owner for it"
            - name: Latency baseline at p50, p95 and p99
              description: |-
                ## Purpose
                Averages hide the users who wait longest, so a service with a 120 ms mean can still leave one request in a hundred waiting three seconds. Recording the median, the 95th and the 99th percentile for each key endpoint and page over a normal week gives every later change a number to beat and an honest picture of what users feel.

                ## Milestones
                1. The ten to fifteen most important endpoints and pages chosen, with the reason for each.
                2. p50, p95 and p99 latency recorded for each over seven ordinary days.
                3. The measurement source, time window and traffic level written beside every figure.
                4. Baseline figures stored where the whole team can compare against them.

                ## Notes
                Start from the **Metrics log** template. Never average percentiles across servers or days; recompute them from the raw distribution or a histogram.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A baseline table lists p50, p95 and p99 for at least ten key paths over seven days, with source and window recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick the ten to fifteen paths users and revenue depend on most"
                - "Confirm the monitoring tool stores histograms rather than pre-averaged values"
                - "Record p50, p95 and p99 for each path over a normal week"
                - "Note the traffic level and any incidents during the baseline week"
            - name: Choosing the speed metrics for each surface
              description: |-
                ## Purpose
                Web pages, JSON APIs, nightly batch jobs and mobile screens are slow in different ways, and one metric cannot describe them all. Deciding up front that pages are judged on Largest Contentful Paint and Interaction to Next Paint, APIs on percentile latency, and jobs on throughput and completion time stops arguments later about whether something actually got faster.

                ## Milestones
                1. Each surface type in the product listed: pages, public APIs, internal services, jobs, mobile screens.
                2. One or two primary metrics chosen for each surface, with a sentence on why.
                3. Lab and field sources named for each metric where both exist.
                4. The agreed metric list recorded and linked from the team's engineering guide.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the primary speed metric and data source for every surface type the product has."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every kind of surface the product exposes to users or other systems"
                - "Read the current Core Web Vitals definitions and thresholds for the page metrics"
                - "Choose a primary and secondary metric for each surface type"
                - "Record the choices in the engineering guide and share them in the team channel"
            - name: Profiler toolkit for every production runtime
              description: |-
                ## Purpose
                Guessing where the time goes is wrong more often than right, even for experienced engineers. Having a working CPU profiler, an allocation profiler and a heap snapshot tool ready for each language you run in production, with the commands written down, means the next slowdown is measured in minutes instead of debated for days.

                ## Milestones
                1. Every runtime in production listed, such as the JVM, Node.js, Python, Go or .NET.
                2. A CPU profiler, an allocation or heap profiler and a way to view flame graphs chosen for each.
                3. Each tool tried once on a staging service and the exact commands written down.
                4. A short page explaining how to capture a profile safely in production.

                ## Notes
                Sampling profilers usually cost a few percent of CPU and are safe to run in production for short windows. Instrumenting profilers can distort the very code you are measuring.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each production runtime has a tested CPU and memory profiler with written capture commands on a shared page."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the runtimes and versions running in production today"
                - "Pick a sampling CPU profiler and a heap profiler for each runtime"
                - "Capture one flame graph from a staging service with each tool"
                - "Write the capture and viewing steps on a shared page"
                - "Capture a CPU profile of the busiest production service @recurring(monthly:14)"
            - name: Slow query log switched on and first review
              description: |-
                ## Purpose
                Most slow applications are slow in the database, and most databases will tell you exactly which statements hurt if you ask them to. Turning on the slow query log or statement statistics with a sensible threshold, then reading the first week of output, usually turns up a handful of queries worth more than any amount of application tuning.

                ## Milestones
                1. Slow query logging or a statement statistics extension enabled on the main database.
                2. A threshold chosen that captures the worst statements without flooding the log.
                3. The top ten statements by total time identified from a week of data.
                4. Each of the ten assigned an owner and a first guess at the cause.

                ## Notes
                Sort by total time, then by calls. A 5 ms query run 40,000 times a minute often matters more than a 2 second report.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Slow query capture is live on the main database and the top ten statements by total time each have an owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check whether the database already records statement statistics"
                - "Enable slow query capture with a threshold agreed with whoever runs the database"
                - "Export the top ten statements by total time after seven days"
                - "Assign each of the ten statements to an owner"
            - name: Quiet benchmark environment that gives repeatable numbers
              description: |-
                ## Purpose
                Noise of fifteen percent between runs hides a five percent regression, and laptops with browsers, throttling and noisy neighbours swing a lot. A dedicated machine or fixed-size cloud instance with pinned versions, a warm-up routine and a known run-to-run variance is what makes every later before-and-after claim believable.

                ## Milestones
                1. A dedicated benchmark host or fixed instance type chosen and documented.
                2. CPU frequency scaling, background jobs and other noise sources disabled or recorded.
                3. Run-to-run variance measured over at least ten repeated runs of the same build.
                4. A script that sets up, warms up and runs the benchmarks the same way every time.

                ## Notes
                Shared cloud runners are noisy. If you must use them, compare builds on the same runner in the same job rather than against yesterday's numbers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scripted benchmark environment exists with measured run-to-run variance below a written threshold, such as three percent."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose a host or instance type that will be used for every benchmark run"
                - "Disable frequency scaling and stop background services on the host"
                - "Run the same build ten times and record the spread of results"
                - "Script the set-up, warm-up and run steps in the repository"
            - name: Performance budgets for key pages and endpoints
              description: |-
                ## Purpose
                Speed erodes one reasonable-looking change at a time unless someone has written down how slow is too slow. Agreeing budgets such as a 200 KB compressed JavaScript limit on the landing page or a 250 ms p95 on checkout gives product and engineering a shared line, and gives reviewers a reason to push back before a regression ships.

                ## Milestones
                1. Budgets set for the top pages covering page weight, script size and a loading metric.
                2. Budgets set for the top endpoints as a p95 or p99 latency figure.
                3. Each budget agreed with the product owner of that page or service.
                4. The budget table published with the date it was set and the date it will be revisited.

                ## Notes
                Set the first budgets a little better than today's numbers, not at an aspirational figure nobody can meet. A budget that fails every build gets switched off.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published budget table covers at least five pages and five endpoints, each agreed with its product owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull current page weight and p95 figures from the baseline"
                - "Draft a budget for each key page and endpoint just ahead of today's numbers"
                - "Agree each budget with the owner of that page or service"
                - "Re-baseline every budget against a year of data @recurring(yearly)"
            - name: Real user page speed measurement in the field
              description: |-
                ## Purpose
                Lab tests run on a fast machine with a clean cache, while real users arrive on mid-range phones over patchy mobile data. Collecting field data for loading and responsiveness metrics, split by device class and country, shows the experience your slowest quarter of users actually has and often reorders the priority list completely.

                ## Milestones
                1. A real user measurement script or service collecting loading and interaction metrics on key pages.
                2. Results segmented by device class, connection type and region.
                3. The 75th percentile figure recorded for each key page, the level search engines and most guidance use.
                4. One page where field and lab results disagree most, written up with a likely reason.

                ## Notes
                Check consent and privacy rules before adding any measurement script, and strip query strings that might carry personal data.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Field data for loading and interaction metrics is collected on all key pages, segmented by device and region, with 75th percentile figures recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check whether the product already sends web vitals data anywhere"
                - "Add a field measurement library or service to the key pages"
                - "Confirm with whoever handles privacy that no personal data is collected"
                - "Compare field and lab results for the five busiest pages"
            - name: Team working agreement for performance changes
              description: |-
                ## Purpose
                Teams waste weeks on speed-ups that were never measured, reverted without anyone noticing, or bundled with ten other changes so nobody knows which one helped. A one-page agreement that says measure first, change one thing at a time, record before and after, and keep the result even when it is a failure turns individual heroics into a team practice.

                ## Milestones
                1. A one-page agreement covering measurement before change, one variable per experiment and how results are recorded.
                2. A pull request label or checklist item for performance-related changes.
                3. The agreement discussed and accepted at a team meeting.
                4. The first three performance changes made under the agreement, with results recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written performance working agreement is accepted by the team and the next three performance changes follow it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a one-page performance working agreement from the team's notes"
                - "Add a performance label to the pull request template"
                - "Walk the team through the agreement and collect objections"
                - "Check that the next three performance changes include before and after numbers"
            - name: Weekly slowest endpoints review
              description: |-
                ## Purpose
                Latency creeps when nobody looks, and a weekly ten-minute look at the slowest endpoints catches a new N+1 query or a missing index while the change that caused it is still fresh in someone's mind. The habit is cheap, and it builds the team's sense of what normal looks like for each service.

                ## Milestones
                1. A saved view showing the slowest endpoints by p95 and by total time, week on week.
                2. A fixed weekly slot, ten to fifteen minutes, with a named facilitator.
                3. Any endpoint that worsened by more than an agreed amount turned into a ticket.
                4. Four consecutive weekly reviews held, with outcomes noted.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The slowest endpoints view is reviewed every week, and each endpoint that worsened beyond the agreed threshold has a ticket."
                cadence: rolling
              tasks:
                - "Build a saved view of endpoints sorted by p95 and by total time"
                - "Agree the regression threshold that turns into a ticket"
                - "Review the slowest endpoints and open tickets for regressions @recurring(weekly:tue)"
                - "Note each week's top mover in the performance log"
            - name: Performance budget checks in the build pipeline
              description: |-
                ## Purpose
                Written on a wiki page, a budget is only a wish, while a budget the pipeline checks on every pull request is a rule. Wiring page weight, bundle size and lab loading metrics into continuous integration so a breach fails or flags the build makes regressions visible to the person who caused them, at the cheapest moment to fix them.

                ## Milestones
                1. Bundle size and page weight checks running on every pull request for the key pages.
                2. A lab loading test running against a preview build with the budgets as assertions.
                3. Breaches shown on the pull request with the size of the overshoot.
                4. A documented way to raise a budget on purpose, with a reviewer's approval.

                ## Notes
                Start in warning mode for two weeks so the team sees the noise level, then switch to failing the build.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every pull request touching the key pages runs budget checks that fail or flag the build when a budget is exceeded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Add a bundle size check for the landing page bundle to the pipeline"
                - "Run a lab loading test against preview builds with budget assertions"
                - "Switch the checks from warning to failing after two quiet weeks"
                - "Review every budget breach and override from the past month @recurring(monthly:12)"
            - name: Microbenchmark regression suite for hot code paths
              description: |-
                ## Purpose
                Some code runs millions of times a second, and a tidy refactor of a parser or serialiser can quietly make it twice as slow. A small suite of microbenchmarks for the hottest functions, run on the quiet benchmark host and compared against the main branch, catches those regressions before users see higher latency or the cloud bill grows.

                ## Milestones
                1. The five to ten hottest functions identified from production profiles.
                2. A microbenchmark written for each with a proper harness that handles warm-up.
                3. The suite running on merges to the main branch and comparing against the previous result.
                4. A regression threshold set from the measured run-to-run variance.

                ## Notes
                Use the benchmark harness for your language rather than a hand-rolled timer loop. Compilers happily delete code whose result is never used.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A microbenchmark suite for at least five hot functions runs on every merge to main and flags results beyond the agreed threshold."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Pick the hottest functions from the latest production flame graph"
                - "Write a benchmark for each using the language's standard harness"
                - "Run the suite on merges to main and store each result"
                - "Read the benchmark trend chart and investigate any step change @recurring(monthly:4)"
            - name: Monthly slow query review
              description: |-
                ## Purpose
                Queries that were fine at ten thousand rows fall over at ten million, and new features add new statements every sprint. Reviewing the top statements by total time once a month, with the execution plan open, keeps the database from becoming the bottleneck nobody wants to own.

                ## Milestones
                1. A monthly export of the top statements by total time and by mean time.
                2. The execution plan checked for each new entry in the top ten.
                3. A ticket for each statement that needs an index, a rewrite or a code change.
                4. A running record of which statements left the top ten and why.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The top ten statements by total time are reviewed every month and each new entry has either a ticket or a written reason to leave it."
                cadence: rolling
              tasks:
                - "Export the top statements by total time from the statistics view"
                - "Review execution plans for new top ten entries and open tickets @recurring(monthly:9)"
                - "Reset or snapshot the statement statistics so next month starts clean"
                - "Record which statements dropped out of the top ten and what fixed them"
            - name: Monthly field page speed review
              description: |-
                ## Purpose
                Page speed in the field changes for reasons that never touch your code: a new marketing tag, a heavier hero image from the content team, a third-party chat widget. A monthly look at field loading and responsiveness by page and device class spots those drifts early and gives you evidence when asking another team to change something.

                ## Milestones
                1. A monthly snapshot of 75th percentile loading and interaction metrics for every key page.
                2. Pages that crossed from good to needs improvement flagged.
                3. Third-party scripts added since last month listed with their cost.
                4. One fix or conversation started for the worst page each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Field page speed for every key page is reviewed monthly and the worst page each month has a named fix or follow-up."
                cadence: rolling
              tasks:
                - "Compare this month's field metrics against last month for each key page @recurring(monthly:16)"
                - "List any third-party scripts added since the last review"
                - "Pick the worst page and agree one fix with its owner"
                - "Share a three-line summary in the team channel"
            - name: Performance experiment log
              description: |-
                ## Purpose
                The same idea gets tried three times in two years because nobody wrote down that it made no difference last time. A plain log of every performance experiment, with the hypothesis, the change, the before and after numbers and the verdict, becomes the team's memory and the quickest way to brief a new engineer.

                ## Milestones
                1. A shared log with columns for date, hypothesis, change, metric, before, after and verdict.
                2. Every performance pull request linked to an entry.
                3. Failed experiments recorded as carefully as successful ones.
                4. A monthly summary of what moved and what did not.

                ## Notes
                Start from the **Metrics log** template. Record the variance alongside every result, so a two percent gain on a five percent noisy benchmark is marked as unproven.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every performance change from the past month has a log entry with before, after and verdict, including the failures."
                cadence: rolling
              tasks:
                - "Create the experiment log with the agreed columns"
                - "Back-fill the last three performance changes the team remembers"
                - "Summarise the month's experiments and their verdicts @recurring(monthly:27)"
                - "Link the log from the pull request template"
            - name: Quarterly performance report for the team
              description: |-
                ## Purpose
                Performance work is invisible when it succeeds, which makes it the first thing cut when deadlines tighten. A short quarterly report showing baseline against current percentiles, budgets held or broken, and the time saved for users keeps the work funded and helps the team choose next quarter's targets.

                ## Milestones
                1. A one-page report comparing current percentiles with the baseline for every key path.
                2. Budget breaches and their resolution listed.
                3. An estimate of user time saved, or compute cost saved, from the quarter's fixes.
                4. Three targets for next quarter agreed with the product lead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A quarterly performance report is shared with the team and product lead, with three agreed targets for the next quarter."
                cadence: cyclic
              tasks:
                - "Pull current percentiles for every path in the baseline"
                - "Write and share the quarterly performance report @recurring(quarterly)"
                - "Agree three targets for next quarter with the product lead"
                - "Archive the report beside the previous quarters"
            - name: Before and after comparison for every release
              description: |-
                ## Purpose
                Most regressions arrive with a release, and the half hour after a deploy is when the cause is easiest to find. Comparing key percentiles and error rates in a fixed window before and after each release, ideally with canary traffic, means a slower build is noticed and rolled back the same day instead of weeks later.

                ## Milestones
                1. A saved comparison view showing key percentiles 60 minutes before and after a deploy.
                2. Deploy markers appearing on the latency charts automatically.
                3. A threshold agreed that triggers a closer look or a rollback.
                4. The comparison step added to the release checklist.

                ## Notes
                Compare the same hour on the same weekday where traffic is very cyclic, or the comparison will flag lunchtime rather than your code.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every release for a month has a recorded before and after percentile comparison, and any breach of the threshold was investigated."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add deploy markers to the latency dashboards"
                - "Build a before and after view for the key endpoints"
                - "Agree the latency increase that triggers a rollback discussion"
                - "Add the comparison to the release checklist"
            - name: Performance issue triage queue
              description: |-
                ## Purpose
                Speed problems get reported as vague tickets, assigned to whoever touched the code last and then forgotten. A dedicated queue with a severity scale based on user impact, a weekly triage slot and a requirement that every ticket has a reproduction and a number keeps the backlog small and honest.

                ## Milestones
                1. A label or board for performance issues with a severity scale tied to user impact.
                2. A ticket template asking for the path, the metric, the measured value and how to reproduce it.
                3. A weekly triage slot where new performance tickets are sized and assigned.
                4. Stale tickets older than 90 days closed or re-measured.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All open performance tickets have a severity, a measured value and an owner, and none is older than 90 days without re-measurement."
                cadence: rolling
              tasks:
                - "Create a performance label and a severity scale for the tracker"
                - "Write a ticket template that asks for the metric and reproduction steps"
                - "Triage new performance tickets and assign owners @recurring(weekly:mon)"
                - "Close or re-measure performance tickets older than 90 days"
            - name: Reading flame graphs fluently
              description: |-
                ## Purpose
                Flame graphs show exactly where CPU time goes, but people new to them stare at the colours and miss the wide plateau that holds the answer. A few deliberate sessions reading real profiles from your own services, including inverted and differential views, turns profiling from a specialist trick into something every engineer on the team reaches for.

                ## Milestones
                1. The difference between width, height and colour in a flame graph explained in your own words.
                2. Three real production profiles read, with the top time consumer named in each.
                3. An inverted or icicle view used to find a function called from many places.
                4. A differential flame graph made between two builds and the change explained.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have read three production flame graphs and one differential graph, and written down the top cost and its cause for each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a short introduction to flame graphs from the profiler's documentation"
                - "Capture a CPU profile from one of your own services"
                - "Write the three widest frames and what each one does"
                - "Make a differential graph between two builds and explain the difference"
            - name: Latency percentiles and tail latency maths
              description: |-
                ## Purpose
                Percentiles behave in ways that surprise people: they cannot be averaged, a page that calls 40 services is dominated by their p99, and a histogram's bucket boundaries quietly cap your accuracy. Working through the maths with your own data prevents dashboards that lie and targets that cannot be met.

                ## Milestones
                1. An explanation of why percentiles cannot be averaged, written with an example from your data.
                2. The probability that a page with N backend calls hits at least one p99 call worked out.
                3. The histogram bucket layout of your monitoring tool checked for the ranges that matter.
                4. One misleading dashboard panel found and corrected.

                ## Notes
                With 40 independent calls, the chance that at least one is slower than its p99 is about one in three, which is why fan-out makes tail latency the user's typical latency.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written note explains percentile aggregation and fan-out using your own data, and one misleading panel has been fixed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a well-regarded paper or talk on tail latency at scale"
                - "Calculate the fan-out effect for your busiest page"
                - "Check the histogram bucket boundaries in your monitoring tool"
                - "Fix one dashboard panel that averages percentiles"
            - name: Query execution plans with EXPLAIN
              description: |-
                ## Purpose
                Adding indexes by instinct often leaves the slow query slow and the writes slower. Learning to read execution plans for your database, including actual row counts, join methods and buffer use, lets you see why the planner chose a sequential scan and what would change its mind.

                ## Milestones
                1. The plan output for your database read line by line for a simple query.
                2. Estimated and actual row counts compared on five slow statements.
                3. One case of a bad estimate traced to stale statistics or a correlated column.
                4. One slow query fixed with evidence from the plan before and after.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have read plans with actual timings for five slow statements and fixed one, with both plans saved."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the official documentation on your database's plan output"
                - "Run plans with actual timings on five statements from the slow query log"
                - "Mark where estimated and actual row counts differ by more than ten times"
                - "Fix one statement and save both plans in the experiment log"
            - name: Memory profiling and leak hunting
              description: |-
                ## Purpose
                Services that slowly grow from 400 MB to 3 GB and get restarted every night by the orchestrator have a leak that someone has learned to live with. Practising heap snapshots, allocation tracking and retained-size analysis on a service you know turns those restarts into a found cause and a fix.

                ## Milestones
                1. Two heap snapshots taken an hour apart from the same process and compared.
                2. The objects with the largest retained size identified, with the reference path that keeps them alive.
                3. Allocation rate measured under normal load.
                4. One leak or unnecessary retention found and fixed, or ruled out with evidence.

                ## Notes
                Heap snapshots can pause a process and may contain personal data. Take them from a canary or staging copy where you can, and delete them when done.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two compared heap snapshots and an allocation profile exist for one service, with a leak fixed or ruled out in writing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Chart memory use over a week for the services that get restarted most"
                - "Take two heap snapshots an hour apart from one of them"
                - "Follow the retaining path of the largest growing object type"
                - "Write up the cause or the evidence that there is no leak"
            - name: Browser performance panel and the critical rendering path
              description: |-
                ## Purpose
                Front-end slowness hides in long tasks, layout thrashing, render-blocking stylesheets and fonts that arrive late. Spending a few focused sessions recording real pages in the browser's performance panel, on a throttled mid-range phone profile, teaches you to see where the main thread is busy and what is blocking first paint.

                ## Milestones
                1. A performance recording of a key page taken with CPU and network throttling on.
                2. Every long task over 50 ms identified with the script that caused it.
                3. Render-blocking resources listed from the network waterfall.
                4. One improvement made and the before and after recordings saved.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A throttled recording of a key page names every long task and blocking resource, and one fix has before and after recordings."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Record the landing page with mid-range phone throttling enabled"
                - "List each long task and the script responsible"
                - "Find the resources that block first render in the waterfall"
                - "Make one change and record the page again"
            - name: Benchmarking without fooling yourself
              description: |-
                ## Purpose
                Most performance claims in pull requests rest on one run, on a warm laptop, with no idea of the noise. Learning the basics of warm-up, repeated runs, confidence intervals and the common traps such as dead code elimination and cache effects means you can tell a real three percent gain from a lucky afternoon.

                ## Milestones
                1. The main traps listed: warm-up, dead code elimination, constant folding, caching and noisy neighbours.
                2. A benchmark run 30 times and its mean, spread and confidence interval calculated.
                3. Two builds compared with a statistical test rather than eyeballing.
                4. A short guide for the team on how to report a benchmark result.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team guide on reporting benchmark results exists, based on a worked comparison of two builds with confidence intervals."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read your benchmark harness documentation on warm-up and iteration settings"
                - "Run one benchmark 30 times and calculate the spread"
                - "Compare two builds with a statistical comparison tool"
                - "Write a half-page guide on reporting benchmark results"
            - name: Lock contention and concurrency diagnosis
              description: |-
                ## Purpose
                Some services stay slow while their CPUs sit at 20 percent, because threads are queued on a lock, a connection pool or a single-threaded event loop. Learning to capture thread dumps, off-CPU profiles and lock statistics shows where requests wait rather than work, which ordinary CPU profiles never reveal.

                ## Milestones
                1. The difference between on-CPU and off-CPU time explained with an example from your stack.
                2. Thread dumps or async stack traces captured during a slow period.
                3. The most contended lock, pool or queue identified with evidence.
                4. One contention point reduced and the latency change measured.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written diagnosis names the most contended lock, pool or queue in one service, with evidence and a measured fix or plan."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find a period when latency rose but CPU use stayed low"
                - "Capture several thread dumps or an off-CPU profile during that window"
                - "Count which locks or pools most threads are waiting on"
                - "Write up the contention point and a proposed fix"
            - name: Garbage collector behaviour in your runtime
              description: |-
                ## Purpose
                Pause spikes from the garbage collector show up as unexplained p99 jumps that no code change seems to cause. Understanding how your runtime's collector works, reading its logs, and testing one or two settings against a realistic load explains those spikes and often removes them without touching application code.

                ## Milestones
                1. The collector in use and its main settings recorded for each service.
                2. Garbage collection logs or metrics enabled and pause times charted.
                3. Pause spikes correlated, or not, with p99 latency spikes.
                4. One setting or allocation change tested with results recorded.

                ## Notes
                Change one setting at a time and test under realistic load. Copying settings from a blog post written for a different heap size and workload often makes things worse.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Pause times are charted beside p99 for one service, and one tested change has a recorded result."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Record which collector and heap settings each service runs with"
                - "Enable collector logging or pause metrics on one service"
                - "Overlay pause times on the p99 latency chart"
                - "Test one setting change against a recorded load and log the result"
            - name: N+1 query elimination across the ORM
              description: |-
                ## Purpose
                Object-relational mappers make it easy to load a list and then query once per row, turning one page into 300 database round trips. Finding and fixing these with eager loading or batched queries is often the single biggest win in a web application, and a detector in the test suite stops them coming back.

                ## Milestones
                1. Query counts per request measured for the twenty busiest endpoints.
                2. Every endpoint with a repeated query pattern listed.
                3. The worst five fixed with eager loading, batching or a rewritten query.
                4. An N+1 detector or query count assertion running in the test suite.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The five worst N+1 endpoints are fixed with measured query counts before and after, and a detector runs in the test suite."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Turn on per-request query counting in a staging environment"
                - "List endpoints that run the same statement more than ten times per request"
                - "Fix the five worst with eager loading or batched queries"
                - "Add a query count assertion to the tests for those endpoints"
            - name: Response caching for one expensive read endpoint
              description: |-
                ## Purpose
                An endpoint that rebuilds the same product catalogue or dashboard for every request is spending money to make users wait. Adding a cache with a clear key, an explicit expiry and a deliberate invalidation path to one expensive read endpoint, then measuring hit ratio and latency, proves the pattern before anyone sprinkles caches everywhere.

                ## Milestones
                1. One read endpoint chosen where data changes rarely and requests repeat often.
                2. The cache key, time to live and invalidation trigger written down before coding.
                3. The cache in place with hit ratio and latency measured for a week.
                4. A test proving that an update invalidates the cached response.

                ## Notes
                Most cache bugs are invalidation bugs. Decide what happens when the underlying data changes before deciding which cache to use, and never cache responses that vary by user without the user in the key.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One endpoint is cached with a documented key and invalidation rule, a measured hit ratio and lower p95 latency."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the read endpoint with the highest repeated cost and lowest change rate"
                - "Write down the cache key, expiry and invalidation trigger"
                - "Implement the cache and a test that checks invalidation"
                - "Check the cache hit ratio and stale-read reports @recurring(monthly:19)"
            - name: Image and media weight cut on key pages
              description: |-
                ## Purpose
                Images are usually the heaviest part of a page and the largest element users wait for. Serving modern formats at the right size for each screen, lazy loading what is below the fold and giving the main image a high fetch priority can halve page weight and pull the main content forward by a second on mobile.

                ## Milestones
                1. Image weight measured for the five busiest pages.
                2. Responsive sizes and a modern format served for every content image.
                3. Below-the-fold images lazy loaded and the main image prioritised.
                4. Page weight and loading metrics compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Image weight on the five busiest pages is measurably lower and their loading metric has improved in lab and field data."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure total image bytes on the five busiest pages"
                - "Generate responsive sizes and a modern format for content images"
                - "Lazy load images below the fold and prioritise the main image"
                - "Compare page weight and loading metrics after a week"
            - name: JavaScript bundle cut for the landing page
              description: |-
                ## Purpose
                Every kilobyte of script must be downloaded, parsed and run on the main thread, and on a mid-range phone that cost is several times higher than on a developer laptop. Analysing the landing page bundle, removing dead dependencies and splitting what is not needed for first interaction shortens the time before users can tap anything.

                ## Milestones
                1. A bundle analysis report showing the largest modules on the landing page.
                2. Unused or duplicated dependencies removed or replaced with lighter ones.
                3. Code not needed for first interaction split out and loaded later.
                4. Compressed script size and interaction metrics compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The landing page ships measurably less compressed JavaScript than before, with the reduction and interaction metric recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Generate a bundle analysis for the landing page build"
                - "Remove or replace the three largest unnecessary dependencies"
                - "Split code that first interaction does not need into later chunks"
                - "Check the landing page bundle size trend @recurring(monthly:24)"
            - name: Connection pool sizing for database and HTTP clients
              description: |-
                ## Purpose
                Pools that are too small queue requests behind each other, while pools that are too large overwhelm the database with connections it cannot serve. Measuring wait time and usage for each pool under real load, then sizing them from evidence rather than defaults, removes a common hidden source of latency spikes.

                ## Milestones
                1. Every database and outbound HTTP pool listed with its current size and timeout.
                2. Pool wait time and active connection metrics exposed for each.
                3. Sizes adjusted from measured peak usage, with the database's own connection limit respected.
                4. Timeouts set so a slow dependency fails fast instead of holding a connection.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every pool has wait time metrics and an evidence-based size, and pool wait time at peak is below an agreed figure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every connection pool and its size, timeout and owner"
                - "Expose wait time and active count metrics for each pool"
                - "Resize the pools with the highest wait time and measure again"
                - "Review pool saturation at peak traffic @recurring(quarterly)"
            - name: Moving slow work off the request path
              description: |-
                ## Purpose
                Sending emails, generating PDFs or calling a slow partner API inside a web request makes the user wait for work they do not need to see finish. Moving that work to a background queue, with the request returning as soon as the job is safely recorded, can cut seconds from the worst endpoints and makes failures retryable.

                ## Milestones
                1. Every synchronous call over 200 ms inside a request listed with whether the user needs its result.
                2. The two or three best candidates moved to background jobs.
                3. Users shown a clear pending state where the result arrives later.
                4. Queue wait time and job duration measured alongside the faster request latency.

                ## Notes
                Make each job safe to run twice. Queues deliver at least once, so a retried payment confirmation email is fine and a retried charge is not.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two slow operations run as background jobs, with request p95 and queue wait time measured before and after."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Profile the slowest endpoints for synchronous calls the user does not wait on"
                - "Move the best two candidates into background jobs"
                - "Show users a pending state where results now arrive later"
                - "Check queue wait time against the agreed limit @recurring(monthly:22)"
            - name: Startup and cold start time reduction
              description: |-
                ## Purpose
                Slow startup makes autoscaling lag behind traffic, stretches deploys and gives serverless users a multi-second first request. Measuring what happens between process start and first served request, then deferring or removing the heaviest initialisation, makes scaling responsive and rollbacks quick.

                ## Milestones
                1. Time from process start to first successful request measured for each service.
                2. A breakdown of startup time by phase: runtime, dependency loading, configuration, connections, warm-up.
                3. The two heaviest phases reduced by lazy loading, trimming dependencies or snapshotting.
                4. New startup times recorded and readiness checks adjusted to match.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Startup time to first request is measured for each service, and the slowest service starts measurably faster than before."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Measure time to first served request for each service"
                - "Break the slowest service's startup into timed phases"
                - "Defer or remove the two heaviest phases"
                - "Update readiness checks to match the new startup time"
            - name: Optimise or rewrite decision for one hot path
              description: |-
                ## Purpose
                When a hot path is still too slow after the obvious fixes, someone will suggest rewriting it in a faster language or replacing it with a managed service. Writing the decision up properly, with the measured ceiling of the current approach, a prototype of the alternative and the cost of owning it, stops a three-month rewrite from being chosen on enthusiasm alone.

                ## Milestones
                1. The hot path's current cost, target and the gap between them stated with numbers.
                2. The best achievable result from optimising the current code estimated from profiles.
                3. A small prototype of the alternative benchmarked on the same rig.
                4. A written decision with costs of building, running and maintaining each option.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares optimising and rewriting one hot path with benchmark numbers and ownership costs for both."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "State the target latency or throughput and the current gap"
                - "Estimate the best case from optimising the existing code"
                - "Build and benchmark a small prototype of the alternative"
                - "Write the decision record and circulate it for comment"
            - name: Database index and query rewrite pass
              description: |-
                ## Purpose
                After the slow query log has run for a month, a focused pass on the top statements usually pays off more than anything in the application layer. Adding the right composite or covering indexes, removing ones nobody uses and rewriting queries the planner handles badly can take whole seconds off reports and checkout alike.

                ## Milestones
                1. The top ten statements by total time each analysed with an execution plan.
                2. Missing or better indexes created online without locking the table during traffic.
                3. Unused indexes listed from usage statistics and dropped after a safe wait.
                4. Each change recorded with latency and write cost before and after.

                ## Notes
                Every index speeds some reads and slows every write. Check write latency on busy tables after adding one, and build indexes concurrently or online where the database supports it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The top ten statements each have a recorded plan and outcome, and at least five are measurably faster without worse write latency."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pull the current top ten statements by total time"
                - "Draft an index or rewrite for each, with the expected plan change"
                - "Apply changes online one at a time and measure each"
                - "List indexes with zero reads in the usage statistics"
            - name: Pre-launch performance readiness review
              description: |-
                ## Purpose
                Launches, press mentions and big customers going live bring traffic and attention at the same moment, and that is a bad time to discover the signup page takes six seconds. A dated readiness review two weeks before, covering budgets, the slowest paths in the new feature, caches and a rollback plan, gives time to fix what it finds.

                ## Milestones
                1. The new or changed paths for the launch listed with their measured percentiles.
                2. Every path checked against its budget and any breach given an owner.
                3. Profiles captured for the three most important new paths.
                4. A go or no-go note on performance written and shared with the launch lead.

                ## Notes
                Start from the **Operational checklist** template. Capacity and breaking-point tests belong with the load testing work; this review is about whether each request is fast enough.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A performance readiness note covering every launch path against its budget is shared with the launch lead at least two weeks before launch."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every path the launch adds or changes"
                - "Measure each path against its budget on a production-like build"
                - "Profile the three most important new paths"
                - "Send the go or no-go performance note to the launch lead"
            - name: Performance comparison for a runtime or framework upgrade
              description: |-
                ## Purpose
                Major runtime and framework upgrades often bring free speed, and occasionally a nasty regression in one code path. Running the benchmark suite and a production canary on the old and new versions side by side shows which you are getting, and gives you numbers to justify the upgrade or to report a regression upstream.

                ## Milestones
                1. Benchmarks and key endpoint percentiles recorded on the current version.
                2. The same measurements taken on the new version on the same rig.
                3. A canary on the new version compared with the old in production.
                4. A short write-up of gains, losses and any setting changes needed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A side-by-side comparison of benchmarks and canary percentiles for the old and new versions is written up before the upgrade is completed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Record benchmarks and percentiles on the current version"
                - "Repeat the same measurements on the upgraded version"
                - "Run a canary and compare its percentiles with the old version"
                - "Write up the differences and any tuning the new version needs"
            - name: Pre-peak hot path tuning sprint
              description: |-
                ## Purpose
                Retail sales, enrolment week, tax deadlines and month-end runs all push the same few paths hard every year. A short tuning sprint six weeks before the peak, aimed only at the paths that dominate peak traffic, buys headroom while there is still time to test and roll back.

                ## Milestones
                1. Last year's peak traffic mix analysed to find the paths that dominated.
                2. Profiles taken for those paths on the current build.
                3. The top three fixes shipped at least three weeks before the peak.
                4. A code freeze date for non-essential changes agreed with the team.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The top three peak-path fixes are shipped and measured at least three weeks before the peak, with a freeze date agreed."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pull last year's peak traffic mix by endpoint"
                - "Profile the paths that carried most of the peak traffic"
                - "Ship and measure the three highest-value fixes"
                - "Agree a freeze date for non-essential changes before the peak"
            - name: Dedicated performance fix week
              description: |-
                ## Purpose
                Some performance tickets sit for months because each is too small to win a sprint slot but together they make the product feel heavy. A dated fix week, with the queue triaged beforehand and every fix measured, clears a backlog in a burst and usually leaves the team with better tooling than it started with.

                ## Milestones
                1. A date agreed with the product lead and the week protected from feature work.
                2. Ten to twenty tickets triaged and sized before the week starts.
                3. Every shipped fix recorded in the experiment log with before and after numbers.
                4. A short demo or write-up of results shared at the end of the week.
              priority: low
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fix week is held, at least ten performance tickets are closed with measured results, and a summary is shared."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Agree the fix week dates with the product lead"
                - "Triage and size the performance queue the week before"
                - "Record every fix with before and after numbers during the week"
                - "Present the results at the end of the week"
            - name: Speed and business outcome case for stakeholders
              description: |-
                ## Purpose
                Product leaders fund work that moves conversion, retention or cost, and a latency chart on its own rarely persuades them. Linking your own speed data to outcomes, such as conversion by loading time bucket or support tickets by slow page, turns performance from an engineering preference into a business case with a dated presentation.

                ## Milestones
                1. Conversion, bounce or task completion rates split by loading time bucket from your own data.
                2. Compute cost per thousand requests estimated for the slowest services.
                3. A short presentation with three proposals and their expected effect.
                4. The presentation delivered and the decisions recorded.

                ## Notes
                Correlation between speed and conversion is not proof of cause, since slow devices often belong to users who convert less anyway. Say so, and propose an experiment if the stakes are high.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A presentation linking your speed data to at least one business outcome is delivered and the resulting decisions are recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the analytics owner for conversion split by page load time"
                - "Estimate compute cost per thousand requests for the slowest services"
                - "Draft three proposals with their expected effect on the outcome"
                - "Book a slot with the product leadership to present the case"
            - name: Solo engineer's minimum performance routine
              description: |-
                ## Purpose
                An engineer who is the whole backend team, or the only developer at a small company, cannot run weekly reviews and benchmark rigs. A deliberately small routine, one saved view of the slowest endpoints, one slow query check and one page speed test a month, catches the big regressions in under an hour.

                ## Milestones
                1. One saved view showing the five slowest endpoints and the slowest queries.
                2. One free lab test configured for the most important page.
                3. A monthly hour in the calendar for the routine.
                4. Three months of short notes showing what was checked and fixed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly one-hour performance check has run for three months, each with a short note of findings and fixes."
                cadence: rolling
              tasks:
                - "Save one view of the slowest endpoints and queries"
                - "Set up a free lab test for the most important page"
                - "Run the slowest endpoint, query and page check @recurring(monthly:6)"
                - "Write two lines on what you found and what you fixed"
            - name: Rotating performance champion on the team
              description: |-
                ## Purpose
                When performance is everyone's job it becomes nobody's, and when it belongs to one expert it leaves with them. Rotating a performance champion each month, who runs the reviews, watches the budgets and pairs with whoever is fixing a regression, spreads the skill and keeps the routines alive.

                ## Milestones
                1. A short description of the champion's duties and time allowance.
                2. A rotation covering every engineer who wants to take part.
                3. A handover note template passed from one champion to the next.
                4. Six months of rotation completed with handover notes kept.

                ## Notes
                Give the champion real time, around a tenth of their week. A role with no time attached becomes a guilty feeling, not a job.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly performance champion rotation has run for six months with a handover note at every change."
                cadence: rolling
              tasks:
                - "Write the champion's duties and agree the time allowance with the manager"
                - "Draw up the rotation for the next six months"
                - "Hand over to the next champion with a written note @recurring(monthly:2)"
                - "Ask each finishing champion what to change about the role"
            - name: Inheriting a slow codebase you did not write
              description: |-
                ## Purpose
                Joining a team, taking over a contractor's project or adopting a service after a reorganisation often comes with a known reputation for slowness and no record of what was tried. Measuring before touching anything, mapping the hot paths and agreeing a short remediation plan with the people who complained builds trust and avoids rewriting the wrong thing.

                ## Milestones
                1. Baselines captured for the paths users complain about before any change.
                2. A map of the hot paths from production profiles and slow query data.
                3. Interviews with two or three previous maintainers or heavy users recorded.
                4. A remediation plan with the first three fixes and expected gains agreed.

                ## Notes
                Start from the **Remediation plan** template. Ship one small, measured win in the first month before proposing anything large.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A remediation plan based on fresh baselines and profiles is agreed, and the first measured fix has shipped."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Capture baselines for the complained-about paths before changing code"
                - "Profile the busiest service and read the slow query data"
                - "Interview two previous maintainers about what they tried"
                - "Write the remediation plan with three first fixes"
            - name: Tuning a small product on one modest server
              description: |-
                ## Purpose
                Early products and small teams often run everything on one or two modest machines, and buying a bigger server is tempting long before it is needed. Tuning the web server's worker count, the database's memory settings, compression and static file caching on the box you already have often doubles what it can serve and delays both the bill and the complexity of scaling out.

                ## Milestones
                1. CPU, memory, disk and connection use recorded at the busiest hour.
                2. Web server workers and database memory settings matched to the machine's size.
                3. Compression and long cache headers set for static assets.
                4. The busiest hour measured again with the change in p95 and resource use recorded.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The server's worker, memory and caching settings are tuned and p95 at the busiest hour is lower than the recorded starting point."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record resource use and p95 during the busiest hour"
                - "Match worker counts and database memory to the machine size"
                - "Turn on compression and cache headers for static files"
                - "Measure the busiest hour again and record the difference"
            - name: Speed on low-end phones and slow networks
              description: |-
                ## Purpose
                Teams build on new laptops with fibre, while a large share of users arrive on three-year-old Android phones over congested mobile data, especially across emerging markets and rural areas. Testing the key flows on a real low-end device with network throttling shows what those users live with and usually produces a different fix list from desktop tests.

                ## Milestones
                1. A real low-end phone, or a reliable emulation profile, available to the team.
                2. The three key flows timed on that device over a throttled connection.
                3. The worst step in each flow identified with a recording.
                4. One fix shipped for each flow and the timings repeated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The three key flows are timed on a low-end device over a slow connection, and each has one shipped fix with repeat timings."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Buy or borrow a low-end Android phone for testing"
                - "Time the three key flows on it over a throttled connection"
                - "Record the worst step in each flow"
                - "Repeat the low-end device timings for the key flows @recurring(quarterly)"
            - name: Performance skills map for the team
              description: |-
                ## Purpose
                Teams where only one person can read a query plan or a heap snapshot are one holiday away from being stuck during a slowdown. Mapping who can do what across profiling, query tuning, front-end performance and memory work shows the gaps, and pairing sessions close them before they matter.

                ## Milestones
                1. A list of eight to ten performance skills relevant to your stack.
                2. Each engineer's level recorded honestly by self-assessment.
                3. Every skill with fewer than two capable people paired up for practice.
                4. The map revisited after six months to see what changed.

                ## Notes
                Start from the **Skills matrix** template. Use it to plan pairing, not to rank people.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A skills map covers every engineer and at least eight skills, and each skill with fewer than two capable people has a pairing plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the performance skills the stack really needs"
                - "Ask each engineer to rate themselves on each skill"
                - "Pair a strong and a learning engineer on each thin skill"
                - "Revisit the map six months later"
            - name: Cache-friendly data layout in a hot loop
              description: |-
                ## Purpose
                Once the algorithm is right, the next factor in compute-heavy code is often memory access: pointer chasing and scattered objects make the CPU wait on main memory hundreds of times per loop. Restructuring one hot loop's data for sequential access, using arrays of plain values instead of collections of objects, can give several-fold speed-ups that no compiler setting will.

                ## Milestones
                1. A hot loop chosen from profiles where most time is spent touching data.
                2. Hardware counters for cache misses and instructions per cycle measured.
                3. The data restructured for contiguous, sequential access.
                4. Before and after benchmarks and counters recorded.

                ## Notes
                This is worth doing only in code that dominates a profile. Elsewhere, readable code wins.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One hot loop has before and after benchmarks and cache miss counts recorded, with a measured speed-up beyond the noise level."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Find a loop that dominates the CPU profile of a compute-heavy service"
                - "Measure cache misses and instructions per cycle with a hardware counter tool"
                - "Rewrite the loop's data as contiguous arrays of plain values"
                - "Benchmark both versions on the quiet rig"
            - name: Tail latency reduction for a fan-out service
              description: |-
                ## Purpose
                A service that calls ten others is held hostage by whichever is slowest on each request, so its p99 is far worse than any dependency's. Tight timeouts, hedged or backup requests, smarter load balancing and isolating slow dependencies can pull the tail in sharply, as long as they are applied with care so they do not double load during an incident.

                ## Milestones
                1. The fan-out service's p99 broken down by which dependency was slowest.
                2. Timeouts set per dependency from its measured latency distribution.
                3. Hedged requests or a backup request policy trialled on one idempotent call.
                4. p99 and total request volume to dependencies compared before and after.

                ## Notes
                Hedge only idempotent reads, cap the extra requests at a few percent, and switch hedging off automatically when dependencies are already overloaded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The fan-out service's p99 is measurably lower, with extra load on dependencies kept under an agreed percentage."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Trace slow requests to find which dependency dominates the p99"
                - "Set per-dependency timeouts from measured distributions"
                - "Trial hedged requests on one idempotent read"
                - "Compare p99 and dependency request volume after two weeks"
            - name: Database server configuration tuning
              description: |-
                ## Purpose
                Many production databases still run with settings sized for a small machine years ago, wasting memory that could cache hot data and spilling sorts to disk. Reviewing memory, cache, parallelism, checkpoint and logging settings against your workload, one change at a time with a rollback plan, often speeds every query at once.

                ## Milestones
                1. Current database settings exported and compared with the machine's resources.
                2. Cache hit ratio, temporary file use and checkpoint frequency measured.
                3. A short list of setting changes agreed with whoever runs the database.
                4. Each change applied separately, measured and either kept or reverted.

                ## Notes
                Managed database services limit which settings you can change and may restart the instance to apply them. Read the provider's notes and schedule changes in a quiet window.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each agreed setting change has a recorded before and after measurement and a kept or reverted decision."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export current database settings and the machine's memory and CPU"
                - "Measure cache hit ratio, temporary file use and checkpoint frequency"
                - "Apply one agreed setting change in a quiet window and measure it"
                - "Review database settings against a year of workload growth @recurring(yearly)"
            - name: Allocation-free hot path in a latency-critical service
              description: |-
                ## Purpose
                In services where every millisecond counts, such as pricing, ad selection or real-time matching, allocation on the hot path drives garbage collection pauses and cache misses. Removing allocations from the request path with object pools, reusable buffers and zero-copy parsing makes latency steadier, but it costs readability, so it belongs only where the profile demands it.

                ## Milestones
                1. Allocations per request measured on the hot path.
                2. The largest allocation sources ranked from an allocation profile.
                3. The top sources removed with reuse, pooling or zero-copy techniques.
                4. Allocation rate, pause times and p99 compared before and after.

                ## Notes
                Pooled objects that are not fully reset leak data between requests. Add tests that check a reused object carries nothing from its last use.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Allocations per request on the hot path are measurably fewer, with p99 and pause times recorded before and after."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Measure allocations per request on the hot path"
                - "Rank allocation sources from an allocation profile"
                - "Replace the top sources with reusable buffers or pools"
                - "Add tests that reused objects carry no state between requests"
---

# Application Performance Tuning

This area is for engineers and teams whose users are waiting too long, whether the wait is a sluggish page, a query that takes four seconds or a service whose p99 drifts up every month. It starts with foundations (a list of real complaints, percentile baselines, profilers for each runtime, a slow query log, a quiet benchmark rig and the first budgets), moves through the operating routines that catch regressions, then the skills worth practising, from flame graphs and query plans to memory profiling and honest benchmarking. After that come targeted fixes and decisions, dated events such as a launch or a runtime upgrade, variants for a solo engineer, an inherited codebase and a team on a small server, and the specialist work of cache-friendly data layout, tail latency and allocation-free hot paths.

What repeats is a weekly look at the slowest endpoints and the performance issue queue, monthly reviews of slow queries, field page speed, bundle size, cache hit ratios and a production profile, and a quarterly performance report for the team. The Metrics log, Operational checklist, Remediation plan and Skills matrix templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
