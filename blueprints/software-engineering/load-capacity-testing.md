---
id: software-engineering.load-capacity-testing
name: Load & Capacity Testing
description: "Realistic workload models, a test environment you can trust, stress, soak and spike tests, capacity forecasts with headroom, and the rehearsals that get a system through launches and peaks."
category: business
version: 1.0.0
tags: [software-engineering, load-capacity-testing, engineer, team, load-testing, capacity-planning, stress-testing, autoscaling]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - risk-register
    - remediation-plan
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Load & Capacity Testing
          description: "Simulating heavy traffic to find breaking points, plan capacity ahead of launches or peaks and verify that scaling actually works."
          projects:
            - name: Inventory of traffic-critical user flows
              description: |-
                ## Purpose
                Load tests that hit the home page and a health check prove almost nothing, because systems fall over on checkout, search, login and the report someone runs at 9am. Listing the five to ten flows that carry revenue or trust, with the endpoints each one calls, tells every later test what it must exercise.

                ## Milestones
                1. A list of five to ten flows ranked by business impact if they slowed or failed.
                2. Each flow mapped to the API calls and background jobs it triggers.
                3. The owner of each flow named and asked to confirm the map.
                4. Flows with known past slowdowns or incidents flagged.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of at least five critical flows, each with its endpoints and an owner who has confirmed the map."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the flows that would cause the most damage if they slowed at peak"
                - "Trace each flow through the access logs to find every endpoint it calls"
                - "Ask each flow owner to confirm or correct the endpoint map"
                - "Flag flows that appear in past incident reports"
            - name: Twelve months of production traffic shape
              description: |-
                ## Purpose
                Capacity questions start with what traffic actually looks like: the daily curve, the weekly pattern, the biggest hour of the year and how fast it ramped. Pulling a year of request rates from your metrics store turns guesses like ten times normal into a measured peak and a measured ramp rate.

                ## Milestones
                1. Requests per second plotted by hour for the last twelve months.
                2. The top five peak hours identified with their cause, such as a campaign or a holiday.
                3. Ramp rate recorded for each peak, from normal to maximum, in minutes.
                4. The ratio of peak hour to median hour written down per critical flow.

                ## Notes
                Metrics retention is often shorter than a year at full resolution. If yours is, use load balancer logs or billing data for the older months.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page traffic profile showing the year's top five peaks, their ramp rates and the peak to median ratio for each critical flow."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export hourly request counts for the last twelve months from the metrics store"
                - "Mark the five busiest hours and find out what caused each one"
                - "Measure how many minutes each peak took to ramp from normal to maximum"
                - "Write the peak to median ratio for every critical flow"
            - name: Choosing a load testing tool for the stack
              description: |-
                ## Purpose
                Open source tools such as k6, Gatling, Locust, JMeter and Artillery differ in scripting language, protocol support, resource use per virtual user and how they report results. Picking one deliberately, with a working proof against your own API, saves the team from rewriting scripts six months in.

                ## Milestones
                1. Requirements written: protocols, scripting language, open workload support and CI output.
                2. Two or three tools trialled against the same critical flow.
                3. Generator resource use per thousand requests per second compared.
                4. A tool chosen and the reasons recorded where the team keeps decisions.

                ## Notes
                Check that the tool supports an open, arrival-rate workload model. Many default to a fixed pool of virtual users, which understates latency under overload.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool choice backed by a trial of at least two tools against the same flow, with resource use compared."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the five must-have requirements for a load testing tool"
                - "Script the login flow in two candidate tools"
                - "Run both at the same arrival rate and compare generator CPU and memory"
                - "Record the chosen tool and why in a short decision note"
            - name: Workload model from the real request mix
              description: |-
                ## Purpose
                Sending equal traffic to every endpoint finds the wrong bottleneck. Building the model from production logs, with the real ratio of reads to writes, cache hits to misses and logged-in to anonymous users, makes the result predict what peak day will do.

                ## Milestones
                1. The share of traffic per endpoint at peak hour taken from access logs.
                2. Session shapes defined: typical steps, think times and abandonment points.
                3. Payload sizes and query parameter spread captured, including large and unusual requests.
                4. The model written as a document the scripts are checked against.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written workload model with per-endpoint traffic shares from peak hour logs, session shapes and payload distributions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count requests per endpoint during last year's busiest hour"
                - "Sample a hundred real sessions and note their steps and pauses"
                - "Record the spread of payload sizes and search terms for the top endpoints"
                - "Write the workload model and share it with the flow owners"
            - name: Production-like load test environment
              description: |-
                ## Purpose
                Results from a staging stack with half the nodes, a tenth of the data and a shared database cannot be scaled up by arithmetic, because bottlenecks move as size changes. A dedicated environment that matches production in instance types, configuration and data volume, even if smaller in count, makes results you can defend.

                ## Milestones
                1. A side-by-side list of production and test environment differences.
                2. Instance types, runtime flags, connection limits and autoscaling rules matched to production.
                3. The environment isolated so tests cannot slow other teams or real users.
                4. Every remaining difference documented with its likely effect on results.

                ## Notes
                Start from the **Operational checklist** template for the parity check. Rerun it whenever production configuration changes.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A load test environment whose configuration differences from production are listed in a parity checklist, each with its expected effect."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "List every difference between production and the current test stack"
                - "Match instance types, runtime settings and pool sizes to production"
                - "Move the test environment onto its own network and database"
                - "Document each remaining difference and how it skews results"
                - "Rerun the parity checklist against production configuration @recurring(quarterly)"
            - name: Synthetic test data at production volume
              description: |-
                ## Purpose
                Queries that return in two milliseconds against a thousand rows take two seconds against fifty million, and a test that reuses the same five accounts measures a warm cache, not your system. Generating anonymised data at real volume, with thousands of distinct users, gives the database and caches a realistic job to do.

                ## Milestones
                1. Table sizes and row distributions in production recorded without copying personal data.
                2. A generator script that produces data at matching volume and skew.
                3. At least ten thousand distinct test accounts available to the scripts.
                4. A reset procedure that returns the data to a known state between runs.

                ## Notes
                Never load real customer data into a test environment unless your privacy team has approved it. Generated data with the same shape is nearly always good enough.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A repeatable script fills the test environment with generated data at production volume and at least ten thousand accounts, and a reset returns it to baseline."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Record row counts and value skew for the ten largest production tables"
                - "Write a generator that reproduces those counts with fake values"
                - "Create ten thousand test accounts with varied histories"
                - "Script a reset that restores the data between test runs"
                - "Refresh row counts and skew from production statistics @recurring(quarterly)"
            - name: Load generator capacity and placement check
              description: |-
                ## Purpose
                If the machine sending traffic runs out of CPU, network or ports, latency climbs and the report blames the system under test. Measuring how much one generator can push, and placing generators where real traffic comes from, removes the most common false result in load testing.

                ## Milestones
                1. The maximum clean request rate of one generator instance measured.
                2. Generator CPU, network and open connection counts recorded during every test.
                3. Generators placed in the regions or networks that match real users.
                4. A rule written: any run with a generator above 70 percent CPU is invalid.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The single-generator limit is measured and documented, and generator resource metrics are captured on every test run."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Run a test against a static endpoint until one generator saturates"
                - "Add generator CPU and network graphs to the results dashboard"
                - "Move or add generators so they match where users connect from"
                - "Write the validity rule for overloaded generators into the test guide"
                - "Remeasure the single-generator limit after tool upgrades @recurring(yearly)"
            - name: Pass and fail criteria for every load test
              description: |-
                ## Purpose
                Without agreed thresholds every test ends in a debate about whether 800 milliseconds at p99 is fine. Setting pass criteria per flow from your reliability targets, covering latency percentiles, error rate and throughput held, turns a run into a yes or no that nobody has to argue about.

                ## Milestones
                1. Latency targets at p95 and p99 agreed per critical flow.
                2. A maximum error rate and the throughput that must be held stated.
                3. Resource ceilings set, such as database CPU below 75 percent at target load.
                4. The criteria encoded as thresholds in the load testing tool.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each critical flow has written latency, error rate and throughput thresholds, encoded in the tool so a run reports pass or fail."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the latency and availability targets the service already promises"
                - "Agree p95, p99 and error rate thresholds per flow with product owners"
                - "Set resource ceilings for the database and the busiest service"
                - "Encode the thresholds in the test scripts so runs fail automatically"
            - name: Load testing safety rules and kill switch
              description: |-
                ## Purpose
                Load tests have taken down shared databases, run up five-figure bills with payment and SMS providers and triggered fraud blocks from upstream partners. A short set of safety rules, a named person who can stop any test, and a kill switch that halts all generators in seconds make testing something the business will keep allowing.

                ## Milestones
                1. Rules written for notice periods, allowed hours and which environments may be targeted.
                2. Every third-party call in the test path stubbed or pointed at a sandbox.
                3. A kill switch that stops all generators within thirty seconds, tested once.
                4. A pre-run checklist that every test operator follows.

                ## Notes
                Start from the **Operational checklist** template. Tell your cloud provider and any security monitoring team before large tests, or they may treat the traffic as an attack.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written safety rules, a pre-run checklist and a kill switch proven to stop all generators within thirty seconds are in place before the first large test."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every external service the test flows call"
                - "Point each external call at a sandbox or a stub"
                - "Build and rehearse a kill switch that stops all generators"
                - "Write the pre-run checklist and the allowed testing hours"
            - name: First baseline load test of the main flow
              description: |-
                ## Purpose
                Every later comparison needs a known starting point: the throughput and latency of your most important flow at expected peak load, on today's build. Running it three times, with the environment and data recorded, gives the team its first trustworthy capacity number.

                ## Milestones
                1. The main flow run at expected peak load for thirty minutes, three times.
                2. Run-to-run variation in p95 latency below 10 percent.
                3. Build version, environment state and data set recorded with the results.
                4. A one-page baseline report shared with the team.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A baseline report shows three consistent thirty-minute runs of the main flow at expected peak load, with build and environment recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Script the main flow from the workload model"
                - "Run it three times at expected peak for thirty minutes each"
                - "Compare the three runs and investigate any variation above 10 percent"
                - "Publish the baseline report with build and data details"
            - name: Monthly capacity headroom review
              description: |-
                ## Purpose
                Headroom erodes quietly as features add queries and traffic grows a few percent each month. Comparing last month's real peak against the tested limit of each critical service shows which one will run out first and roughly when.

                ## Milestones
                1. A headroom table per service: real peak, tested limit and percentage used.
                2. Services above 60 percent of tested limit flagged for action.
                3. A projected date when each flagged service reaches its limit.
                4. Actions for flagged services assigned with owners.

                ## Notes
                Start from the **Metrics log** template so each month's headroom sits beside the last.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A headroom table is updated every month for each critical service, and every service above 60 percent has an owner and an action."
                cadence: rolling
              tasks:
                - "Build the headroom table for each critical service"
                - "Update real peaks against tested limits in the headroom table @recurring(monthly:12)"
                - "Project the date each flagged service reaches its limit"
                - "Assign an owner to every service above 60 percent of its limit @recurring(monthly:13)"
            - name: Smoke load test in the delivery pipeline
              description: |-
                ## Purpose
                Capacity regressions arrive one merge at a time, and a full load test every month finds them long after the cause is buried. A five-minute test at modest load on every main branch build, compared against the last good run, catches the change that doubled database calls on the day it lands.

                ## Milestones
                1. A short smoke load script for the top three flows.
                2. The script running automatically after each deploy to the test environment.
                3. Results compared to a rolling baseline, with a failure above 20 percent regression.
                4. A weekly glance at trends so slow drift is spotted too.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every main branch deploy to the test environment runs a smoke load test that fails on a 20 percent latency or throughput regression."
                cadence: rolling
              tasks:
                - "Write a five-minute smoke script covering the top three flows"
                - "Add the script as a pipeline step after test environment deploys"
                - "Reset the rolling baseline after any accepted performance change @recurring(monthly:6)"
                - "Review smoke load trends and open tickets for slow drift @recurring(weekly:tue)"
            - name: Load test results archive with comparisons
              description: |-
                ## Purpose
                Results stored without its build, configuration and data set cannot be compared with anything. Keeping every run in one archive, tagged the same way, lets anyone answer whether the system got faster or slower since the spring release in five minutes.

                ## Milestones
                1. A single store for raw results, summaries and graphs.
                2. A standard tag set: build, environment, workload model version and test type.
                3. A comparison view that sets any two runs side by side.
                4. Runs older than a year summarised and their raw data pruned.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All load test runs live in one archive with a standard tag set, and any two runs can be compared side by side."
                cadence: rolling
              tasks:
                - "Choose one place to store every load test result"
                - "Define the tags each run must carry"
                - "Build a side-by-side comparison view for two runs"
                - "Prune raw data older than a year and keep the summaries @recurring(quarterly)"
            - name: Quarterly capacity forecast
              description: |-
                ## Purpose
                Buying capacity, negotiating committed spend or rearchitecting a service all take weeks, so you need to see the wall a quarter before you hit it. Combining traffic growth, planned launches and the tested limits into a forecast gives leadership a dated list of what must change.

                ## Milestones
                1. Traffic growth rate per flow calculated from the last two quarters.
                2. Known launches and campaigns added as step changes.
                3. Forecast peak compared with tested limits for the next two quarters.
                4. A short forecast note with dated actions sent to engineering leadership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A forecast note each quarter names every service expected to exceed 80 percent of tested limit in the next two quarters, with a dated action."
                cadence: cyclic
              tasks:
                - "Calculate traffic growth per flow from the last two quarters @recurring(quarterly)"
                - "Add planned launches and campaigns to the forecast"
                - "Ask the agent to draft the forecast note from the headroom table"
                - "Send the quarterly capacity forecast to engineering leadership @recurring(quarterly)"
            - name: Load test script upkeep with each release
              description: |-
                ## Purpose
                Scripts rot faster than unit tests: an endpoint is renamed, a form gains a field, authentication changes, and the next big test fails in minute one. Checking scripts against each release keeps them ready for the day you need them at short notice.

                ## Milestones
                1. Scripts stored in the same repository as the services they test.
                2. A release checklist item to update scripts when APIs change.
                3. All flow scripts run once at low load after each release.
                4. The workload model reviewed whenever a new flow ships.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every flow script passes a low-load run within a week of each release, and new flows are added to the workload model."
                cadence: rolling
              tasks:
                - "Move load test scripts into the service repositories"
                - "Add a script update item to the release checklist"
                - "Run every flow script at low load after the release @recurring(monthly:20)"
                - "Add new flows to the workload model when they ship @recurring(monthly:21)"
            - name: Peak calendar of known traffic events
              description: |-
                ## Purpose
                Many capacity incidents were predictable: the sale marketing announced in a newsletter, the payroll run on the last working day, the school term start. A shared calendar of expected peaks, owned by engineering and fed by marketing, sales and finance, gives you weeks of warning instead of hours.

                ## Milestones
                1. A shared calendar of expected peaks for the next twelve months.
                2. Marketing, sales and finance contacts who add their events to it.
                3. Each event tagged with expected multiple of normal traffic.
                4. A test or review booked ahead of every event above twice normal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month peak calendar exists with contributors from at least three teams, and each event above twice normal traffic has a test booked."
                cadence: rolling
              tasks:
                - "Create the shared peak calendar and add last year's peaks"
                - "Ask marketing, sales and finance to add their planned events @recurring(quarterly)"
                - "Check the calendar for new events and book tests ahead of them @recurring(monthly:3)"
                - "Tag each event with its expected traffic multiple"
            - name: Autoscaling review after every real peak
              description: |-
                ## Purpose
                Real peaks are the best load tests you will ever get, and they are free. Looking at how fast instances, pods or functions scaled, how long new capacity took to take traffic and whether limits were hit shows where the scaling rules lag behind reality.

                ## Milestones
                1. A standard review covering scale-out delay, warm-up time and maximum reached.
                2. Each review comparing real behaviour with the last load test.
                3. Scaling limits, cooldowns or thresholds adjusted where they lagged.
                4. A running log of peaks and what scaling did.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every peak above twice normal traffic has a written autoscaling review within a week, and the log shows changes made from them."
                cadence: rolling
              tasks:
                - "Write the autoscaling review questions as a short form"
                - "Pull scaling events and latency for the last real peak"
                - "Compare real scale-out delay with the last load test result"
                - "Review the month's peaks and log what scaling did @recurring(monthly:27)"
            - name: Third-party quota and rate limit register
              description: |-
                ## Purpose
                Your system can scale perfectly and still fail at peak because the payment provider, map API or email service allows only a fixed number of calls per second on your plan. Recording every external limit next to your forecast peak shows which supplier will throttle you first.

                ## Milestones
                1. Every external API in the critical flows listed with its rate limit and quota.
                2. Calls per flow multiplied by forecast peak to find the expected external load.
                3. Suppliers within 50 percent of their limit at forecast peak flagged.
                4. Limit increases requested or fallbacks designed for flagged suppliers.

                ## Notes
                Start from the **Risk register** template. Cloud account quotas, such as maximum instances per region, belong in the same register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register lists every external and cloud quota in the critical path against forecast peak, and each limit within 50 percent has an action."
                cadence: rolling
              tasks:
                - "List every external API and cloud quota in the critical flows"
                - "Find each limit in the supplier's documentation or account console"
                - "Compare limits with calls expected at forecast peak"
                - "Recheck quotas and supplier plan changes in the register @recurring(monthly:16)"
            - name: Capacity findings remediation queue
              description: |-
                ## Purpose
                Load tests produce findings, and findings without owners become the cause of next year's outage. One queue for every capacity issue found in tests or real peaks, ranked by how close it is to biting, keeps the fixes moving between big test cycles.

                ## Milestones
                1. One queue holding every open capacity finding.
                2. Each finding with an owner, the load at which it appears and a target date.
                3. Findings ranked by distance from forecast peak.
                4. Closed findings verified by a rerun before they leave the queue.

                ## Notes
                Start from the **Remediation plan** template for the larger findings that need several changes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every capacity finding has an owner and target date, and none is closed without a rerun that shows it fixed."
                cadence: rolling
              tasks:
                - "Collect every open capacity finding into one queue"
                - "Record the load level at which each finding appears"
                - "Rank the queue and chase owners of overdue findings @recurring(weekly:thu)"
                - "Rerun the relevant test before closing any finding"
            - name: Little's Law and queueing basics for capacity
              description: |-
                ## Purpose
                Most capacity surprises are queueing maths: utilisation above about 80 percent makes waiting time climb steeply, and concurrency equals arrival rate times time in system. An afternoon with these ideas, worked on your own service's numbers, explains why the system was fine at 70 percent and broken at 90.

                ## Milestones
                1. Little's Law applied to one service to predict its concurrent requests.
                2. The prediction checked against measured concurrency.
                3. A latency against utilisation curve drawn from a stepped load test.
                4. A one-page summary written for the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary shows Little's Law applied to a real service, with the predicted and measured concurrency and a latency against utilisation curve."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read an introductory chapter on queueing theory for engineers"
                - "Predict one service's concurrent requests with Little's Law"
                - "Measure the real concurrency and compare"
                - "Write the one-page summary for the team"
            - name: Open and closed workload models
              description: |-
                ## Purpose
                Closed models with a fixed pool of virtual users slow their own sending when the system slows, which hides the latency real users would see. Learning the difference, and the coordinated omission problem that follows from it, changes how every later test is designed.

                ## Milestones
                1. The same flow tested with a closed model and with an open arrival-rate model.
                2. The latency difference between the two at overload recorded.
                3. Coordinated omission explained in your own words.
                4. A team rule on which model to use for which question.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two runs of the same flow under open and closed models are compared, and a written team rule says when to use each."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read about coordinated omission in latency measurement"
                - "Run the main flow under a closed model past its limit"
                - "Run it again with a fixed arrival rate at the same load"
                - "Write the team rule for choosing a workload model"
            - name: Reading load test results as a whole
              description: |-
                ## Purpose
                Rising p99 latency means something different when throughput has flattened and errors are climbing than when everything else is steady. Practising on old reports to read latency percentiles, throughput, error rates and server saturation together stops people quoting the average and missing the failure.

                ## Milestones
                1. Three past reports read with latency, throughput, errors and saturation side by side.
                2. The point where throughput stopped rising found in each.
                3. The first resource to saturate named for each run.
                4. A short guide to reading reports written for newer engineers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written guide explains how to read a load test report, illustrated with the throughput plateau and first saturated resource from three real runs."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick three past load test reports with different outcomes"
                - "Mark where throughput stopped rising in each report"
                - "Name the first resource to saturate in each run"
                - "Write a two-page guide to reading reports"
            - name: Realistic scripts with think time and correlation
              description: |-
                ## Purpose
                Scripts that hammer endpoints back to back with one hard-coded session token test nothing a user does. Learning to add think time, pacing, dynamic values captured from responses and randomised data turns a script into a crowd of plausible users.

                ## Milestones
                1. Think time and pacing added from the workload model's session shapes.
                2. Tokens, IDs and CSRF values captured from responses rather than hard-coded.
                3. Test data drawn at random from the generated account pool.
                4. A script review checklist for the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The main flow script uses think time, captured dynamic values and randomised data, and a script review checklist is shared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Add think times from the sampled sessions to the main script"
                - "Replace hard-coded tokens and IDs with values captured from responses"
                - "Draw accounts and search terms at random from the test data"
                - "Write a checklist for reviewing new load test scripts"
            - name: Bottleneck hunting under load with the USE method
              description: |-
                ## Purpose
                Once a test fails at 4,000 requests per second, the question becomes which resource ran out: CPU, memory, disk, connections, threads or a lock. Checking utilisation, saturation and errors for every resource during a stepped test finds the limiting one quickly and stops teams adding servers that change nothing.

                ## Milestones
                1. A resource checklist for each tier: CPU, memory, disk, network, pools and queues.
                2. Utilisation, saturation and errors captured for each during a stepped test.
                3. The first saturated resource named with evidence.
                4. The checklist added to the standard test run.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A USE checklist covering every tier is applied to a stepped test and names the first saturated resource with graphs as evidence."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every resource per tier that could run out under load"
                - "Add saturation metrics for pools and queues to the test dashboard"
                - "Run a stepped test and fill in the checklist at each step"
                - "Write up which resource saturated first and the evidence"
            - name: Distributed load generation across regions
              description: |-
                ## Purpose
                Above a few thousand requests per second, or when users are spread across continents, one generator machine is not enough and its location distorts latency. Learning to run coordinated generators in several regions, with clocks and results merged correctly, makes large tests possible.

                ## Milestones
                1. Generators running in at least two regions from one command.
                2. Results merged with percentiles calculated from the combined raw data.
                3. Generator clocks synchronised and checked.
                4. A cost estimate per hour of distributed testing recorded.

                ## Notes
                Never average percentiles from separate generators. Merge the raw samples or histograms, then calculate.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A test runs from generators in at least two regions, with percentiles calculated from merged raw data and hourly cost recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set up generators in two regions using the chosen tool"
                - "Start both from a single command with a shared test plan"
                - "Merge raw results and calculate combined percentiles"
                - "Record the hourly cost of running the distributed setup"
            - name: Comparing two load test runs honestly
              description: |-
                ## Purpose
                Two runs of the same build can differ by 15 percent from noise alone, so a 10 percent improvement claim may mean nothing. Learning to measure run-to-run variance and to compare distributions rather than single numbers protects decisions about releases and instance sizes.

                ## Milestones
                1. Five identical runs made to measure natural variance.
                2. Comparison done on full latency distributions, not one percentile.
                3. A minimum detectable difference stated for your environment.
                4. The comparison method written into the test guide.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The test guide states the environment's run-to-run variance from five identical runs and the smallest difference the team will treat as real."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Run the same build five times under identical load"
                - "Plot the five latency distributions together"
                - "Work out the smallest difference you can reliably detect"
                - "Write the comparison method into the test guide"
            - name: Stress test to the breaking point
              description: |-
                ## Purpose
                Knowing the system copes with expected peak is half the answer; the other half is how far beyond it the system goes and how it fails when it gets there. A stepped stress test past the limit finds the knee in the latency curve and shows whether failure is a graceful slowdown or a collapse.

                ## Milestones
                1. Load stepped up in 10 percent increments until errors pass the agreed threshold.
                2. The maximum sustainable throughput recorded.
                3. The failure mode described: slow, shedding, erroring or crashing.
                4. Recovery time measured once load drops back to normal.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A report states the maximum sustainable throughput, the failure mode beyond it and the time to recover after load returns to normal."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Design a stepped profile from expected peak to three times peak"
                - "Run the stress test with the kill switch ready"
                - "Describe how the system failed and what broke first"
                - "Measure how long recovery took after load dropped"
            - name: Soak test for leaks over twenty-four hours
              description: |-
                ## Purpose
                Memory leaks, connection pool exhaustion, log volume filling disks and slowly growing queues only show up after hours, which is why some outages happen on the second day of a sale. A long run at steady load reveals what degrades with time rather than with traffic.

                ## Milestones
                1. A run at 70 to 80 percent of expected peak held for at least twenty-four hours.
                2. Memory, open connections, file handles and disk use trended across the run.
                3. Any resource that grows without levelling off identified.
                4. Latency at hour twenty-four compared with hour one.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A twenty-four hour soak report shows the trend of memory, connections, handles and disk, and compares latency at the start and end."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book the test environment for a full day and night"
                - "Start a steady run at 75 percent of expected peak"
                - "Trend memory, connections, handles and disk across the run"
                - "Compare hour one and hour twenty-four latency and write it up"
            - name: Spike test for sudden traffic surges
              description: |-
                ## Purpose
                One push notification, a celebrity mention or a ticket release can take traffic from normal to eight times normal in under a minute, faster than any autoscaler reacts. A spike test shows what users experience in those first minutes and whether the system recovers on its own.

                ## Milestones
                1. A spike profile built from the fastest ramp seen in real traffic, then doubled.
                2. User-facing latency and errors recorded minute by minute through the spike.
                3. Time until added capacity started taking traffic measured.
                4. A decision on pre-scaling, queueing or shedding for future spikes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A spike test at twice the fastest real ramp records minute-by-minute errors and latency, and a written decision covers how future spikes are handled."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build a spike profile from the fastest real ramp, doubled"
                - "Run the spike and record each minute's errors and latency"
                - "Measure how long new capacity took to serve traffic"
                - "Decide between pre-scaling, queueing and shedding for spikes"
            - name: Autoscaling policy verified under ramp
              description: |-
                ## Purpose
                Autoscaling rules are often copied from a tutorial and never tested: thresholds set too high, cooldowns too long, maximums below what peak needs, and new instances that take four minutes to warm up. Ramping load deliberately and watching each policy fire tells you whether scaling keeps up or just tidies up after the outage.

                ## Milestones
                1. Every scaling policy listed with its metric, threshold, cooldown and maximum.
                2. A ramp test at the real peak ramp rate run against each scaled tier.
                3. Scale-out lag and instance warm-up time measured.
                4. Policies changed where lag let latency breach the pass criteria.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each scaled tier has passed a ramp test at the real peak ramp rate without breaching pass criteria, with lag and warm-up times recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every scaling policy with its threshold, cooldown and maximum"
                - "Ramp load at last year's peak ramp rate against each tier"
                - "Measure the lag from threshold breach to new capacity serving traffic"
                - "Change the policies that let latency breach the criteria"
            - name: Database capacity test with full-size data
              description: |-
                ## Purpose
                The database is the hardest tier to scale quickly, so its limit is usually the real limit of the whole system. Testing it with production-sized data and the real query mix shows the throughput at which locks, replication lag or connection limits start to bite.

                ## Milestones
                1. The database loaded with production-volume generated data.
                2. The real query mix replayed at stepped rates.
                3. The first limit found: CPU, IO, locks, connections or replica lag.
                4. The database's tested limit added to the headroom table.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The database's maximum sustainable query rate with full-size data is recorded in the headroom table with the resource that limited it."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Load the test database with production-volume generated data"
                - "Capture a representative hour of the real query mix"
                - "Replay it at stepped rates and watch locks, IO and replica lag"
                - "Add the database limit and limiting resource to the headroom table"
            - name: Overload behaviour and load shedding check
              description: |-
                ## Purpose
                Under demand beyond capacity, the best outcome is that some requests are rejected quickly while the rest succeed, not that every request times out together. Driving the system past its limit and checking that rate limits, queue caps and priority rules actually engage shows whether overload will be partial or total.

                ## Milestones
                1. The intended overload behaviour written per tier.
                2. A test at 150 percent of capacity run with the rules in place.
                3. Successful throughput during overload compared with throughput at the limit.
                4. Gaps where overload caused total failure listed as findings.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A test at 150 percent of capacity shows successful throughput held at or near the tested limit, or each gap is logged as a finding with an owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down what each tier should do when overloaded"
                - "Run the main flow at 150 percent of tested capacity"
                - "Compare good throughput during overload with throughput at the limit"
                - "Log every tier that failed completely as a capacity finding"
            - name: Instance size and count decision from test data
              description: |-
                ## Purpose
                Teams often pick instance sizes by habit, then scale out when a larger or different machine type would carry the same load for less. Running the same test across two or three instance shapes and counts gives a sizing decision based on cost per thousand requests at target latency.

                ## Milestones
                1. Two or three instance shapes chosen for comparison.
                2. The same workload run on each at target load.
                3. Cost per thousand requests at target latency calculated for each.
                4. A sizing decision recorded with the test evidence.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded sizing decision compares at least two instance shapes on cost per thousand requests at target latency."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose two or three instance shapes worth comparing"
                - "Run the same workload on each shape at target load"
                - "Calculate cost per thousand requests at target latency"
                - "Record the sizing decision with links to the runs"
            - name: Capacity model for each critical service
              description: |-
                ## Purpose
                Test results become far more useful when they can answer what-if questions: what happens if traffic doubles, or if one zone is lost. A simple model per service, built from tested throughput per instance and the shared limits behind it, lets anyone estimate capacity without running a new test.

                ## Milestones
                1. Tested throughput per instance recorded for each critical service.
                2. Shared limits, such as database connections and cache memory, added.
                3. A spreadsheet that answers traffic doubling and loss of one zone.
                4. The model checked against one real peak.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capacity model per critical service answers the traffic-doubling and zone-loss questions and matches one real peak within 15 percent."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Record tested throughput per instance for each critical service"
                - "Add the shared limits each service depends on"
                - "Build the doubling and zone-loss scenarios into the spreadsheet"
                - "Check the model's prediction against a recent real peak"
                - "Update the model with the latest tested limits @recurring(monthly:9)"
            - name: Pre-launch load test for a new product
              description: |-
                ## Purpose
                Launch day is the one day traffic is guaranteed to be unusual and attention is guaranteed to be high. Testing the new product's flows at the launch forecast plus a safety margin, two to three weeks before the date, leaves time to fix what breaks.

                ## Milestones
                1. A launch traffic forecast agreed with marketing, with a margin of at least 50 percent.
                2. New flows scripted and added to the workload model.
                3. A full test at forecast plus margin passed against the pass criteria.
                4. Findings fixed and rerun at least a week before launch.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new product's flows pass a test at the agreed launch forecast plus 50 percent at least one week before launch day."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree the launch traffic forecast and margin with marketing"
                - "Script the new product's flows"
                - "Run the full test at forecast plus margin"
                - "Rerun after fixes no later than a week before launch"
            - name: Seasonal peak readiness programme
              description: |-
                ## Purpose
                For retail, travel, tax and education products, one season or week carries a large share of the year's revenue, and a failure then costs more than any other month. A readiness programme starting three months out, with tests, capacity reservations, a change freeze and a war room plan, turns the peak into a rehearsed event.

                ## Milestones
                1. Peak forecast agreed and the full test plan dated.
                2. Two full peak tests passed, the second after fixes.
                3. Cloud capacity reservations and supplier limit increases confirmed.
                4. A change freeze window and a peak-day staffing plan published.

                ## Notes
                Start from the **Operational checklist** template for the readiness checklist, and keep it for next year.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two full peak tests have passed, reservations and limits are confirmed and the freeze and staffing plan are published two weeks before the peak."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree the peak forecast and date the test plan"
                - "Run the first full peak test and log findings"
                - "Confirm cloud reservations and supplier limit increases in writing"
                - "Publish the change freeze and the peak-day staffing plan"
            - name: Campaign traffic surge rehearsal
              description: |-
                ## Purpose
                A television slot, a big email send or a paid social burst sends a wave of new visitors who all land on the same page within minutes. Rehearsing that wave with the campaign team, using their send time and audience size, avoids the expensive outcome of paying for traffic that sees an error page.

                ## Milestones
                1. Audience size, send time and landing pages confirmed with the campaign owner.
                2. A surge profile based on expected click-through in the first ten minutes.
                3. The landing flow tested at the surge profile with a margin.
                4. A go or delay decision recorded with the campaign owner.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The campaign landing flow passes a surge test at expected first-ten-minute traffic plus margin, and the campaign owner has a recorded go decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Get the audience size, send time and landing pages from the campaign owner"
                - "Estimate first-ten-minute visitors from past click-through rates"
                - "Run the landing flow at that surge plus a margin"
                - "Record the go or delay decision with the campaign owner"
            - name: Peak day rehearsal with the on-call team
              description: |-
                ## Purpose
                Systems pass load tests while people stumble on peak day because dashboards are unfamiliar, the scaling runbook is out of date and nobody knows who may approve emergency spend. Running a full-scale load test as a rehearsal, with the on-call team watching and acting, tests the people and the playbook together.

                ## Milestones
                1. A rehearsal date and the peak-day roles assigned.
                2. A full-load test run while the team monitors and responds as on the real day.
                3. Every dashboard, runbook step and approval path used at least once.
                4. Gaps found in the rehearsal fixed before the real event.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A rehearsal has been run at full peak load with every peak-day role filled, and each gap it found has an owner and a fix date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick a rehearsal date and assign the peak-day roles"
                - "Brief the team on what the rehearsal load will look like"
                - "Run the full-load test with the team responding live"
                - "List every gap the rehearsal exposed and assign fixes"
            - name: Capacity sign-off before a platform move
              description: |-
                ## Purpose
                Moving to a new cloud region, provider, database engine or container platform changes the performance of everything, often in ways no benchmark warned about. A capacity sign-off that the new platform carries peak load at least as well as the old one belongs on the migration checklist before any cutover.

                ## Milestones
                1. The same workload run on the old and new platforms.
                2. Throughput, latency and cost compared at peak load.
                3. Any shortfall fixed or accepted in writing by the migration owner.
                4. Capacity sign-off recorded as a cutover criterion.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A side-by-side test at peak load on old and new platforms is signed off by the migration owner before cutover."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Run the standard peak workload against the current platform"
                - "Run the identical workload against the new platform"
                - "Compare throughput, latency and cost at peak"
                - "Get capacity sign-off from the migration owner before cutover"
            - name: On-sale or registration opening readiness
              description: |-
                ## Purpose
                Ticket releases, course enrolment openings and limited product drops send most of a day's traffic in the first sixty seconds, all competing for the same scarce rows. Testing that exact moment, including inventory contention and any waiting room, decides whether the opening feels fair or turns into a public complaint.

                ## Milestones
                1. Expected users at the opening second estimated from sign-ups or past events.
                2. Contention on shared inventory rows tested at that concurrency.
                3. A waiting room or queue tested if the system cannot admit everyone at once.
                4. The opening passed in a rehearsal one week before the real date.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A rehearsal at the expected opening-second concurrency passes, with no oversold inventory and the waiting room admitting users at the planned rate."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Estimate concurrent users at the opening from sign-ups"
                - "Test inventory reservation at that concurrency and check for overselling"
                - "Test the waiting room admission rate if one is used"
                - "Run the full opening rehearsal a week before the date"
            - name: Solo engineer's lightweight load testing kit
              description: |-
                ## Purpose
                Solo developers and two-person startups cannot run a performance lab, but can still learn the limit of a single server before a launch post goes out. A small kit, one open source tool, one script for the main flow and one cheap generator, answers how many users you can serve in an afternoon.

                ## Milestones
                1. One tool installed and the main flow scripted.
                2. A stepped test run from a separate small cloud machine.
                3. The maximum users per second on the current server written down.
                4. One cheap fix or upgrade chosen if the number is below the launch hope.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The main flow has been stepped up to its limit from a separate machine, and the maximum users per second is recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Install one open source load testing tool"
                - "Script the signup or main flow"
                - "Run a stepped test from a separate small cloud machine"
                - "Write down the limit and the one change that would raise it"
            - name: Fair use of one shared staging environment
              description: |-
                ## Purpose
                Small teams often have one staging stack that everyone deploys to, and a load test there both ruins other people's afternoon and produces results nobody can trust. A booking rule, a quiet window and a simple announcement routine let load testing coexist with everyday work.

                ## Milestones
                1. A booking calendar for load tests on the shared environment.
                2. A standard quiet window when no deploys happen during tests.
                3. An announcement posted in the team channel before and after each test.
                4. A recorded note in each result of what else was deployed at the time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Load tests on the shared environment are booked in a calendar, run in an agreed quiet window and announced before and after."
                cadence: rolling
              tasks:
                - "Create a booking calendar for the shared environment"
                - "Agree a weekly quiet window with the team"
                - "Announce each test in the team channel at start and finish"
                - "Check last week's bookings for clashes and adjust the window @recurring(weekly:mon)"
            - name: Load testing ownership inside a product team
              description: |-
                ## Purpose
                If one specialist runs all the load tests, product teams treat capacity as someone else's problem and tests happen only before big launches. Making each team own the scripts and thresholds for its own flows, with the specialist as a coach, spreads the skill and catches problems sooner.

                ## Milestones
                1. Each critical flow assigned to the product team that builds it.
                2. Every team has run its own flow test once with coaching.
                3. Scripts and thresholds stored in each team's repository.
                4. Capacity questions added to the team's design review template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every product team owns the scripts and thresholds for its flows and has run its own test at least once without the specialist driving."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Assign each critical flow to the team that builds it"
                - "Pair with each team to run its first flow test"
                - "Move scripts and thresholds into each team's repository"
                - "Add three capacity questions to the design review template"
                - "Hold a capacity clinic where teams bring their latest results @recurring(monthly:24)"
            - name: Capacity testing a public API for partners
              description: |-
                ## Purpose
                Partner integrations behave nothing like browsers: nightly batch syncs, retries in tight loops and one client sending a third of all traffic. Testing the API with partner-shaped load, and publishing limits partners can plan around, protects both your capacity and the relationship.

                ## Milestones
                1. Traffic per partner analysed, including batch windows and retry patterns.
                2. A test combining the largest partners' batch jobs in the same hour.
                3. Per-client rate limits set and verified under that test.
                4. Published limits and retry guidance shared with partners.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The API passes a test with the largest partners' batch loads combined, and per-client limits are verified and published."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Break down API traffic by partner and time of day"
                - "Script a test that overlaps the largest partners' batch jobs"
                - "Verify per-client rate limits hold under that test"
                - "Ask the agent to draft partner-facing guidance on limits and retries"
            - name: Mobile backend capacity for bursty clients
              description: |-
                ## Purpose
                Mobile apps create load patterns web apps rarely do: a push notification wakes a million phones at once, an app update triggers a mass resync, and offline clients retry together when a network returns. Testing those bursts shows whether the backend survives the marketing team's next push.

                ## Milestones
                1. The biggest past push send and its traffic curve analysed.
                2. A burst test reproducing a push to the full user base.
                3. Resync and reconnect storms tested after a simulated outage.
                4. A rule agreed for staggering push sends if the backend cannot absorb them.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A burst test simulating a full-audience push passes, or a written rule sets how push sends are staggered."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the largest past push send and plot the traffic it caused"
                - "Script a burst that mimics a push to every active user"
                - "Simulate an outage and test the reconnect storm"
                - "Agree a staggering rule for push sends with the mobile team"
            - name: Inheriting a system with no capacity data
              description: |-
                ## Purpose
                Engineers who take over a system often find no tests, no forecast and a vague memory that it struggled last December. A short triage, reading past incidents, finding the biggest recent peak and running one careful stepped test, turns unknown risk into a known number within a month.

                ## Milestones
                1. Past incidents and support tickets mentioning slowness gathered.
                2. The highest traffic of the last year found and its effects noted.
                3. One stepped test run with the safety rules in place.
                4. A first estimate of headroom shared with your manager.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Within a month of taking over, a written headroom estimate based on one stepped test and the year's biggest peak is shared with your manager."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Search incident reports and tickets for slowness and timeouts"
                - "Find last year's biggest traffic day and what happened"
                - "Run one careful stepped test in a safe environment"
                - "Share the first headroom estimate with your manager"
            - name: Production traffic replay and shadowing
              description: |-
                ## Purpose
                Hand-written workload models always miss something: an odd query, an abusive client, a rare but expensive report. Capturing real production requests and replaying them, sped up, against a test stack, or mirroring live traffic to a shadow deployment, tests capacity against what users really send.

                ## Milestones
                1. A capture point chosen at the load balancer or a proxy.
                2. Personal data and credentials removed or replaced in captured traffic.
                3. One hour of real traffic replayed at two and three times speed.
                4. Differences between replay results and modelled tests explained.

                ## Notes
                Agree data handling with your security and privacy teams before capturing anything. Writes must never reach real payment, email or partner systems during replay.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One hour of sanitised production traffic is replayed at two and three times speed, and differences from modelled results are written up."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose where to capture production requests"
                - "Agree the sanitising rules with security and privacy"
                - "Replay one hour of captured traffic at two and three times speed"
                - "Explain where replay results differ from the modelled tests"
            - name: Load testing queue-based and event-driven systems
              description: |-
                ## Purpose
                In asynchronous systems the request returns instantly while the real work piles up in a queue, so response time says nothing about capacity. Testing producers and consumers together, and measuring queue depth, consumer lag and end-to-end processing time, finds the rate at which the backlog stops draining.

                ## Milestones
                1. End-to-end processing time measured from event published to work done.
                2. Producer rate stepped up while consumer lag is trended.
                3. The rate at which the backlog stops draining recorded.
                4. Consumer scaling rules checked against that rate.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The maximum sustained event rate before backlog growth is recorded, with end-to-end processing time and consumer scaling checked against it."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Add a timestamp to events to measure end-to-end processing time"
                - "Step up the producer rate while trending consumer lag"
                - "Record the rate at which the backlog stops draining"
                - "Check consumer scaling rules against that rate"
            - name: Synthetic load in production at off-peak hours
              description: |-
                ## Purpose
                No test environment matches production exactly, so the most mature teams add controlled synthetic load to live systems during quiet hours to prove real headroom. Done with tagged traffic, tight abort rules and an on-call engineer watching, it confirms the capacity model where it matters.

                ## Milestones
                1. Written approval from service owners and the on-call lead.
                2. Synthetic requests tagged so they are excluded from analytics and billing.
                3. Automatic abort rules tied to real user error rate and latency.
                4. A first production test adding 50 percent of daily peak during off-peak hours.

                ## Notes
                Begin with read-only flows. Synthetic writes need a clean-up plan and must never touch real customer records.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A tagged synthetic test adding 50 percent of daily peak runs in production off-peak with automatic abort rules, and its result is compared with the capacity model."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Get written approval from service owners and the on-call lead"
                - "Tag synthetic traffic so analytics and billing ignore it"
                - "Set automatic abort rules on real user errors and latency"
                - "Run the first off-peak production test with on-call watching"
            - name: Noisy neighbour capacity in multi-tenant systems
              description: |-
                ## Purpose
                In a multi-tenant product one large customer's import or report can starve everyone else on the same cluster. Testing a heavy tenant alongside normal ones shows whether isolation, quotas and fair scheduling actually protect the small tenants who make up most of your customers.

                ## Milestones
                1. The heaviest tenant workloads of the past quarter identified.
                2. A test running one heavy tenant beside many normal tenants.
                3. Normal tenants' latency compared with and without the heavy tenant.
                4. Per-tenant quotas or isolation changes agreed where the gap is too large.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A test shows normal tenants' latency with and without a heavy tenant present, and a quota or isolation decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Find the heaviest tenant workloads from last quarter"
                - "Script a heavy tenant running beside a hundred normal tenants"
                - "Compare normal tenant latency with and without the heavy one"
                - "Agree quota or isolation changes with the product owner"
---

# Load & Capacity Testing

This area is for engineers and teams who need to know how much traffic their system can really take before customers find out for them. It starts with foundations (the flows that matter, last year's traffic shape, a tool, a workload model, a production-like environment, test data, pass criteria and safety rules), moves through the operating routines that keep capacity known, then the skills behind good load testing, from queueing basics and workload models to reading results and comparing runs honestly. After that come the test types and sizing decisions, dated events such as a launch or a seasonal peak, variants for a solo engineer, a shared staging environment, a partner API and a mobile backend, and the specialist work of traffic replay, queue-based systems and testing in production.

What repeats is a weekly look at the pipeline smoke load test, monthly headroom and quota reviews, script upkeep with each release, a check of the peak calendar and a quarterly capacity forecast. The Operational checklist, Metrics log, Risk register and Remediation plan templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
