---
id: software-engineering.observability-monitoring
name: Observability & Monitoring
description: "Logs, metrics and traces you can trust, alerts that page on real user pain, dashboards people actually open, and the routines that keep telemetry useful and affordable."
category: business
version: 1.0.0
tags: [software-engineering, observability-monitoring, engineer, team, logging, metrics, distributed-tracing, alerting]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - metrics-log
    - operational-checklist
    - skills-matrix
    - remediation-plan
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Observability & Monitoring
          description: "Instrumenting systems with logs, metrics, traces and alerts so engineers can see what is happening in production and fix problems quickly."
          projects:
            - name: Telemetry inventory of production services
              description: |-
                ## Purpose
                Most teams have more monitoring than they think and less than they need: three log tools, a dashboard nobody owns and one service that emits nothing at all. Listing every production service with what it sends, where it goes and who looks at it turns that vague unease into a map you can plan against in a single afternoon.

                ## Milestones
                1. Every production service listed with its owner and runtime.
                2. For each service, a note of which logs, metrics and traces it emits and to which tool.
                3. Services with no alerting or no dashboard marked as gaps.
                4. The inventory saved in the team's documentation where the next person can find it.

                ## Notes
                Count what is actually arriving in the backend this week, not what the configuration files claim. Agents get removed and nobody notices.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A saved inventory lists every production service with its owner, the signals it emits and any gaps in alerting or dashboards."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the list of running services from the deployment platform"
                - "Check in each observability tool which services sent data this week"
                - "Mark every service that has no alert or no dashboard"
                - "Publish the inventory in the team's documentation space"
            - name: Structured logging standard and field names
              description: |-
                ## Purpose
                Free-text log lines are readable by a person and almost useless to a query engine, and every service inventing its own field names means nobody can search across them. A short written standard for JSON logs, with agreed names for timestamp, level, service, request ID and user-facing error codes, makes logs from every team searchable the same way.

                ## Milestones
                1. A one-page logging standard listing required fields, their names and their types.
                2. Agreed meanings for each log level, with an example of when to use each.
                3. A shared logging library or configuration snippet that emits the standard by default.
                4. Two services switched to the standard and searchable by the shared fields.

                ## Notes
                Borrow field names from an existing semantic convention such as OpenTelemetry's rather than inventing your own; tools and newcomers will already understand them.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published logging standard exists and at least two services emit JSON logs that match it, searchable by service and request ID."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect five real log lines from different services and compare their fields"
                - "Draft the required field list using an existing semantic convention"
                - "Write one sentence per log level saying when it should be used"
                - "Ship the shared logger configuration to two services"
            - name: Correlation IDs across every request path
              description: |-
                ## Purpose
                When a customer reports a failed checkout, the first question is which log lines belong to that one request, and without a shared ID the answer is guesswork across five services. Propagating a single request or trace ID from the edge through queues and background jobs lets anyone pull the full story of one request with a single search.

                ## Milestones
                1. An ID generated at the edge or load balancer for every inbound request.
                2. The ID passed through HTTP headers, message metadata and job payloads.
                3. Every log line from the main services carrying the ID as a field.
                4. One real request followed end to end using only that ID.

                ## Notes
                Use the W3C trace context header so the same ID works for tracing later. Asynchronous hops through queues are where propagation usually breaks.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single search by request ID returns matching log lines from every service and queue consumer that handled that request."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick one user action and list every service and queue it passes through"
                - "Add trace context headers at the edge proxy or load balancer"
                - "Carry the ID through message metadata for each queue consumer"
                - "Follow one real request end to end and note where the ID went missing"
            - name: Golden signals for each user-facing service
              description: |-
                ## Purpose
                Latency, traffic, errors and saturation cover most of what goes wrong in a service, yet many teams chart CPU and memory and miss the error rate users actually feel. Getting those four signals measured the same way for every user-facing service gives a common language for whether something is healthy.

                ## Milestones
                1. Latency as a histogram, request rate, error rate and one saturation measure defined for each service.
                2. Errors split into those caused by the service and those caused by bad client input.
                3. The four signals emitted by every user-facing service with consistent metric names.
                4. A short note per service explaining which saturation measure was chosen and why.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every user-facing service emits latency, traffic, error and saturation metrics under shared names, with the saturation choice documented."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the user-facing services from the telemetry inventory"
                - "Agree metric names and labels for the four signals with the team"
                - "Add a latency histogram to the busiest service first"
                - "Choose and document one saturation measure per service"
            - name: Choosing an observability stack
              description: |-
                ## Purpose
                Picking between a managed platform, a self-hosted open source stack or the cloud provider's built-in tools decides your bill, your on-call burden and how easy migration will be for years. Scoring three options against your real data volumes and the questions engineers need answered prevents choosing on a slick demo.

                ## Milestones
                1. Current daily volumes of logs, metric series and spans estimated from the inventory.
                2. Three candidate stacks shortlisted, including at least one open source option.
                3. Each scored on query experience, cost at your volume, retention, OpenTelemetry support and operating effort.
                4. A trial run of the top two with one real service sending data.
                5. A decision recorded with the reasons and the expected annual cost.

                ## Notes
                Start from the **Vendor** template. Ask every vendor to price your actual volume, including the overage rate; per-host and per-gigabyte models diverge sharply as you grow.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the chosen stack, the two alternatives considered, the scoring and the projected annual cost at current volume."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Estimate daily log gigabytes, active metric series and spans per second"
                - "Shortlist three stacks and request pricing for your real volume"
                - "Run a two-week trial of the top two with one real service"
                - "Ask the agent to draft the decision record from the scoring sheet"
            - name: OpenTelemetry instrumentation of the first service
              description: |-
                ## Purpose
                Vendor-neutral instrumentation means the code you write today still works if you change backend next year. Instrumenting one important service with the OpenTelemetry SDK and a collector, auto-instrumentation first and custom spans second, proves the pattern and gives every other team a working example to copy.

                ## Milestones
                1. The SDK and auto-instrumentation for the service's language installed and sending to a collector.
                2. Spans for inbound HTTP, database calls and outbound requests visible in the backend.
                3. Two or three custom spans added around the most important business operations.
                4. Resource attributes for service name, version and environment set consistently.
                5. A short how-to written for the next team to copy.

                ## Notes
                Send through a collector rather than straight to the vendor, so batching, sampling and redaction live in one place you control.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One production service sends OpenTelemetry traces and metrics through a collector, with custom spans on its key operations and a written how-to."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Choose the service with the most cross-service calls as the pilot"
                - "Install auto-instrumentation and point it at a collector in staging"
                - "Add custom spans around the two most important business operations"
                - "Write the how-to with the exact configuration that worked"
            - name: Health check and readiness endpoints
              description: |-
                ## Purpose
                A health check that always returns OK teaches the load balancer nothing, and one that checks every dependency takes the whole fleet down when the database blips. Separate liveness and readiness endpoints, each with a clear contract, let orchestration and uptime monitors make the right call.

                ## Milestones
                1. A liveness endpoint that confirms the process is running and responsive.
                2. A readiness endpoint that checks only the dependencies the service cannot work without.
                3. Each endpoint answering quickly with no heavy queries.
                4. An external uptime check pointed at the public readiness path.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each main service exposes separate liveness and readiness endpoints with a documented contract, and an uptime check watches the public one."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what each service's current health endpoint actually checks"
                - "Split liveness and readiness into separate endpoints"
                - "Remove optional dependencies from the readiness check"
                - "Point an external uptime monitor at the public readiness path"
            - name: Telemetry retention and data classification policy
              description: |-
                ## Purpose
                Logs quietly collect email addresses, tokens and IP addresses, and keeping everything forever is both expensive and a privacy liability. Deciding how long each kind of telemetry is kept, and which fields must never be logged, gives engineers a rule to follow and the privacy lead an answer when asked.

                ## Milestones
                1. Retention periods agreed for debug logs, application logs, audit logs, metrics and traces.
                2. A list of data that must never appear in telemetry, such as passwords, tokens and card numbers.
                3. Personal data that may appear listed with its retention and access rules.
                4. The policy reviewed by whoever handles privacy for the organisation.
                5. Retention settings in each tool changed to match.

                ## Notes
                Legal retention duties vary by country and sector; ask your privacy or legal lead to confirm the periods rather than guessing.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written retention and classification policy is approved by the privacy lead and every observability tool's retention settings match it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record the current retention setting in every observability tool"
                - "Draft retention periods for each telemetry type"
                - "List fields that must never be logged and share the list with the team"
                - "Review the policy against the tools' settings @recurring(yearly)"
            - name: Service overview dashboard for the main product
              description: |-
                ## Purpose
                During an incident nobody wants to build a query, they want one screen that says what is broken. A single overview dashboard for the main product, golden signals at the top, dependencies below and recent deploys marked, becomes the first place everyone looks and shortens the first ten minutes of every investigation.

                ## Milestones
                1. One dashboard showing request rate, error rate and latency percentiles for the main user flows.
                2. Key dependencies such as the database, cache and queue shown below with their own health.
                3. Panels ordered from user symptoms at the top to causes underneath.
                4. The dashboard linked from the team's chat channel and documentation.

                ## Notes
                Fewer panels is better. If a panel has not helped in the last two incidents, it probably belongs on a separate detail dashboard.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single overview dashboard shows golden signals and dependency health for the main product and is linked from the team channel."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the panel layout on paper, symptoms top and causes below"
                - "Build the dashboard from the golden signal metrics"
                - "Pin the dashboard link in the team chat channel"
                - "Walk through the overview dashboard at the start of the team meeting @recurring(weekly:mon)"
            - name: First paging alerts on user-facing symptoms
              description: |-
                ## Purpose
                Alerting on high CPU wakes people for nothing, while a broken login page with idle servers goes unnoticed. A small first set of pages based on what users experience, such as error rate and slow responses on the main flows, catches real outages and keeps the pager credible from day one.

                ## Milestones
                1. No more than five paging alerts, each tied to a user-visible symptom.
                2. Every alert with a threshold, a duration and a reason written in its description.
                3. Cause-based alerts such as CPU or disk moved to tickets or dashboards rather than pages.
                4. Each alert tested once by forcing the condition in staging.

                ## Notes
                Page only for things that need a human within the hour. Everything else should become a ticket or a dashboard panel.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five or fewer paging alerts exist, each based on a user-facing symptom, documented and verified to fire in staging."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the three user flows whose failure would cost the most"
                - "Write an error rate and latency alert for each flow"
                - "Downgrade existing CPU and memory pages to tickets"
                - "Force each new alert to fire once in staging"
            - name: Weekly alert noise review
              description: |-
                ## Purpose
                Alert fatigue arrives slowly: one flapping check, then three, until people mute the channel and miss the real outage. Fifteen minutes a week looking at every page that fired, and asking whether it needed a human, keeps the pager trusted and gives a clear trend to report.

                ## Milestones
                1. A weekly list of every page fired, with whether it was actionable.
                2. Each non-actionable page tuned, downgraded or deleted within a week.
                3. Pages per week and the share that were actionable tracked as a trend.
                4. A target for actionable pages agreed with the team.

                ## Notes
                Start from the **Metrics log** template. A page that was correct but needed no action is still noise; tune the threshold or make it a ticket.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly record of pages and the actionable share is kept for at least eight consecutive weeks, with every noisy alert acted on."
                cadence: rolling
              tasks:
                - "Export last week's pages from the alerting tool"
                - "Mark each page as actionable or noise and fix the noisy ones @recurring(weekly:tue)"
                - "Log pages fired and the actionable share in the metrics log @recurring(weekly:fri)"
                - "Agree a target share of actionable pages with the team"
            - name: Monthly dashboard pruning
              description: |-
                ## Purpose
                Dashboards multiply like browser tabs, and after a year the useful ones hide among dozens built for one incident and never opened again. A monthly pass that checks view counts, archives the unused and fixes broken panels keeps the dashboard list short enough to navigate under pressure.

                ## Milestones
                1. View counts or last-opened dates pulled for every dashboard.
                2. Dashboards unopened for ninety days archived or deleted after asking their owner.
                3. Broken panels with missing metrics fixed or removed.
                4. Every remaining dashboard tagged with an owning team.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every remaining dashboard has an owner tag and none has gone unopened for more than ninety days."
                cadence: rolling
              tasks:
                - "Pull last-opened dates for all dashboards from the tool's usage data"
                - "Archive dashboards unopened for ninety days after a heads-up to owners @recurring(monthly:9)"
                - "Fix or remove panels that show no data"
                - "Tag each remaining dashboard with its owning team"
            - name: Observability definition of done for new services
              description: |-
                ## Purpose
                New services tend to launch with logs and nothing else, and the gaps surface during their first outage. A short checklist that every new service must pass before taking production traffic, covering signals, a dashboard, alerts and an owner, makes good observability the default instead of an afterthought.

                ## Milestones
                1. A checklist of ten items or fewer covering logs, metrics, traces, dashboard, alerts and ownership.
                2. The checklist added to the service creation template or launch process.
                3. The two most recent services checked against it and their gaps fixed.
                4. A named person who can sign off the checklist for each team.

                ## Notes
                Start from the **Operational checklist** template. Keep it short enough that teams complete it rather than tick it blindly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published checklist is part of the service launch process and the two newest services have passed it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the checklist from the gaps found in the telemetry inventory"
                - "Add the checklist to the new service template or launch document"
                - "Check the two newest services against it"
                - "Name a sign-off person in each team"
            - name: Metric cardinality guardrails
              description: |-
                ## Purpose
                One label holding user IDs or full URLs can turn a single metric into millions of series, slowing queries and multiplying the bill overnight. Agreeing which labels are allowed, setting limits in the pipeline and watching series counts monthly keeps metrics fast and affordable.

                ## Milestones
                1. The ten metrics with the most active series identified.
                2. A rule written listing label types that are never allowed, such as user IDs, emails and raw paths.
                3. Series limits or drop rules configured in the collector or backend.
                4. A monthly series count recorded so growth is visible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Banned label types are documented, limits are enforced in the pipeline and active series counts are recorded monthly."
                cadence: rolling
              tasks:
                - "Query the backend for the ten metrics with the most series"
                - "Write the list of banned label types and share it with the team"
                - "Configure a drop or limit rule for the worst offender"
                - "Record the active series count and the top growers @recurring(monthly:17)"
            - name: Monitoring the monitoring with a heartbeat alert
              description: |-
                ## Purpose
                The worst outage is the silent one where the collector died on Friday and no alert could fire all weekend. A heartbeat that the monitoring system must keep receiving, routed to a separate channel, tells you when the watcher itself has stopped watching.

                ## Milestones
                1. A heartbeat signal emitted continuously from the alerting pipeline.
                2. An external service that alerts when the heartbeat stops arriving.
                3. Collector and agent health metrics on their own small dashboard.
                4. The heartbeat tested by stopping it on purpose in a planned window.

                ## Notes
                Route the heartbeat alert through a different provider or path from your main alerts, otherwise one failure silences both.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A heartbeat alert routed outside the main alerting path exists and has been tested by deliberately stopping the heartbeat."
                cadence: rolling
              tasks:
                - "Set up an always-firing heartbeat alert in the main alerting system"
                - "Configure an external check that pages when the heartbeat goes quiet"
                - "Build a small dashboard of collector and agent health"
                - "Stop the heartbeat on purpose and confirm the page arrives @recurring(quarterly)"
            - name: Alert ownership and routing register
              description: |-
                ## Purpose
                Alerts outlive the people who wrote them, and an alert that routes to someone who left last year is the same as no alert. A register of every alert with its owning team, destination and linked runbook makes it obvious who should act, and reviewing it each quarter catches orphans after reorganisations.

                ## Milestones
                1. Every alert listed with owning team, severity and destination channel.
                2. Alerts with no owner or a dead destination fixed or removed.
                3. A runbook link present on every paging alert.
                4. Routing rules checked after each team change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every alert has an owning team, a working destination and, if it pages, a runbook link, confirmed in the latest quarterly review."
                cadence: rolling
              tasks:
                - "Export all alert rules with their labels and destinations"
                - "Assign an owning team to every alert missing one"
                - "Add a runbook link to every paging alert"
                - "Check ownership and routing against the current team list @recurring(quarterly)"
            - name: Synthetic checks of critical user flows
              description: |-
                ## Purpose
                Real traffic tells you something broke only after users hit it, and at three in the morning there may be no users to notice. Scripted checks that log in, search and reach checkout from a few regions every few minutes catch broken flows and expired certificates before the first customer email.

                ## Milestones
                1. Synthetic checks running for the three most important flows.
                2. Checks running from at least two regions.
                3. A dedicated test account used, with its data excluded from business metrics.
                4. Failed checks alerting only after consecutive failures, to avoid flapping.
                5. A monthly review of failures and flaky steps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Synthetic checks cover the three most important flows from two or more regions, with a monthly review of failures recorded."
                cadence: rolling
              tasks:
                - "Create a dedicated synthetic test account and exclude it from analytics"
                - "Script a login and checkout flow in the synthetic monitoring tool"
                - "Set the check to alert after two consecutive failures"
                - "Review last month's synthetic failures and fix flaky steps @recurring(monthly:23)"
            - name: Observability bill by team and signal
              description: |-
                ## Purpose
                Telemetry often becomes one of the largest lines on the engineering bill, and nobody can say which team or which signal is driving it. Splitting the monthly cost by team and by logs, metrics and traces turns a scary invoice into specific conversations about what is worth keeping.

                ## Milestones
                1. Telemetry tagged by team so the backend can report usage per team.
                2. A monthly cost figure split by logs, metrics, traces and other features.
                3. The three biggest cost drivers named with an owner each.
                4. The monthly figures shared with team leads.

                ## Notes
                Most of the saving usually comes from a handful of chatty debug logs and a few high-cardinality metrics, not from cutting coverage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly cost breakdown by team and signal type is recorded and the top three drivers each have a named owner."
                cadence: rolling
              tasks:
                - "Add a team attribute to telemetry at the collector"
                - "Pull the usage report split by signal type"
                - "Record the monthly cost by team and signal and send it to team leads @recurring(monthly:4)"
                - "Name an owner for each of the three biggest cost drivers"
            - name: Quarterly telemetry coverage review
              description: |-
                ## Purpose
                Services are added, renamed and split faster than anyone updates the monitoring, so coverage drifts back to patchy within a year. Comparing the service catalogue to the telemetry inventory every quarter catches the new service with no alerts and the renamed one whose dashboard went blank.

                ## Milestones
                1. The telemetry inventory refreshed against the current service catalogue.
                2. New services checked against the observability definition of done.
                3. Gaps logged as tickets with an owning team.
                4. A coverage figure, such as the share of services meeting the checklist, tracked each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly coverage figure is recorded and every service missing signals or alerts has a ticket with an owner."
                cadence: cyclic
              tasks:
                - "Compare the service catalogue with the telemetry inventory @recurring(quarterly)"
                - "Check each new service against the definition of done"
                - "Open a ticket for every coverage gap"
                - "Record the share of services meeting the checklist"
            - name: Deploy markers and change events on dashboards
              description: |-
                ## Purpose
                Changes start a large share of incidents, yet engineers often lose ten minutes asking what was deployed. Sending every deploy, feature flag change and configuration push as an event that appears on dashboards and in traces answers that question at a glance.

                ## Milestones
                1. The deployment pipeline sending an event with service, version and author for each deploy.
                2. Feature flag and configuration changes sent as events too.
                3. Change markers visible on the overview dashboard.
                4. The service version attached to every span and log line.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Deploys and flag changes appear as markers on the overview dashboard, and every span carries the service version."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add a step to the deploy pipeline that posts a change event"
                - "Connect the feature flag tool's change log to the same event stream"
                - "Turn on change markers on the overview dashboard"
                - "Set the service version as a resource attribute on all telemetry"
            - name: Metrics query language fluency
              description: |-
                ## Purpose
                Engineers who cannot write a query fall back on whatever panels already exist, which are rarely the ones a new problem needs. A few weeks of deliberate practice with your backend's query language, covering rates, aggregation by label, percentiles from histograms and ratios, makes ad hoc investigation fast.

                ## Milestones
                1. Rate and increase over counters written correctly without looking them up.
                2. Aggregation by and without labels used to compare services and instances.
                3. Percentiles calculated from a histogram metric.
                4. An error ratio query built from two counters.
                5. A personal cheat sheet of ten queries saved in the team wiki.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cheat sheet of ten working queries, including a rate, a percentile and an error ratio, is saved in the team wiki."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Work through the query language tutorial in your metrics backend"
                - "Rewrite three existing dashboard panels from scratch"
                - "Build an error ratio query for the busiest service"
                - "Save ten working queries as a cheat sheet in the team wiki"
            - name: Reading distributed trace waterfalls
              description: |-
                ## Purpose
                Trace views show exactly where a slow request spent its time, but only to someone who knows to look for sequential calls that could run in parallel, long gaps between spans and fan-out to the database. Practising on real slow traces turns the waterfall from a pretty picture into a diagnosis.

                ## Milestones
                1. Five slow traces from production examined and the slowest span in each named.
                2. Examples found of sequential calls, repeated queries and unexplained gaps.
                3. Trace search used to find traces by attribute, error status and duration.
                4. A short guide with annotated screenshots written for the team.

                ## Notes
                If your backend supports exemplars, practise jumping from a latency spike on a chart straight to a trace from that moment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team guide with five annotated real traces explains how to spot sequential calls, repeated queries and gaps."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Search for the five slowest traces of the busiest endpoint this week"
                - "Name the slowest span and its likely cause for each"
                - "Find one trace with repeated database queries in a loop"
                - "Write the annotated guide and share it in the team channel"
            - name: Log search drills on past incidents
              description: |-
                ## Purpose
                Searching logs quickly under pressure is a skill, and most people only practise it during real outages. Replaying two or three past incidents as timed exercises, where you find the first error, the affected users and the triggering change from logs alone, builds speed before the next one.

                ## Milestones
                1. Three past incidents chosen where the logs are still within retention.
                2. Each replayed with a stopwatch, finding first error, scope and trigger.
                3. Saved searches created for the queries that proved useful.
                4. Gaps found in the logs written up as instrumentation tickets.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three incidents have been replayed as timed drills, with saved searches created and missing log fields ticketed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick three past incidents whose logs are still retained"
                - "Time how long it takes to find the first error in each"
                - "Save the searches that answered each question fastest"
                - "Open tickets for fields that were missing from the logs"
            - name: Percentiles, histograms and why averages lie
              description: |-
                ## Purpose
                An average latency of 200 milliseconds can hide one user in a hundred waiting ten seconds, and averaging percentiles across servers produces a number that means nothing. Understanding histograms, bucket boundaries and why percentiles cannot be averaged stops the team drawing confident conclusions from broken maths.

                ## Milestones
                1. The difference between mean, median, p95 and p99 explained with your own data.
                2. A demonstration that averaging per-instance p99s gives the wrong answer.
                3. Histogram bucket boundaries checked against your latency targets.
                4. Dashboards using averages for latency switched to percentiles.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Latency panels on the main dashboards use percentiles from histograms, and bucket boundaries cover the team's latency targets."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Plot mean, p50, p95 and p99 latency for one endpoint on one chart"
                - "Compare averaged per-instance p99 with p99 from the merged histogram"
                - "Check histogram bucket boundaries against your latency targets"
                - "Replace average latency panels on the overview dashboard"
            - name: Exploratory debugging with wide events
              description: |-
                ## Purpose
                Dashboards answer the questions you thought of in advance, while the strange bug affecting one tenant on one app version needs questions nobody predicted. Emitting one wide, high-cardinality event per request and learning to slice it by any field is how experienced teams find unknown unknowns.

                ## Milestones
                1. One service emitting a single wide event per request with twenty or more useful fields.
                2. Fields such as tenant, app version, region and feature flags included.
                3. A practice investigation where the cause is found by slicing and comparing groups.
                4. A note on what this approach costs at your volume and how sampling would change it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One service emits wide per-request events with at least twenty fields and a practice investigation using them has been written up."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List twenty fields you wish you had during the last incident"
                - "Add them to a single per-request event or root span in one service"
                - "Slice the events by app version and tenant to find an outlier group"
                - "Write up the investigation and the cost at current volume"
            - name: Trace sampling strategies
              description: |-
                ## Purpose
                Keeping every span is rarely affordable beyond a modest scale, but random sampling throws away the rare errors and slow requests you most need. Learning the difference between head-based, tail-based and rate-limited sampling lets you keep all the interesting traces at a fraction of the cost.

                ## Milestones
                1. Head-based, tail-based and probabilistic sampling explained in a short team note.
                2. Current trace volume and sampling rate measured.
                3. A tail-based policy designed that keeps all errors and the slowest requests.
                4. The policy trialled in the collector in staging and its effect on cost estimated.

                ## Notes
                Tail-based sampling needs all spans of a trace to reach the same collector instance; plan load balancing by trace ID before turning it on.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tail-based sampling policy that keeps all error and slow traces has been trialled in staging with its cost effect estimated."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Measure current spans per second and the sampling rate in use"
                - "Write a one-page note comparing head and tail sampling"
                - "Configure a tail sampling policy in the staging collector"
                - "Estimate monthly trace cost before and after the policy"
            - name: Team observability skills matrix
              description: |-
                ## Purpose
                In many teams one or two people do all the production debugging, and when they are on holiday everyone else waits. Mapping who is comfortable with queries, traces, alert tuning and the pipeline shows where knowledge is concentrated and who should pair with whom.

                ## Milestones
                1. Six to eight observability skills listed for the team.
                2. Each engineer's self-rating recorded for each skill.
                3. Skills held by only one person identified as risks.
                4. A pairing plan agreed so each risky skill has a second person within a quarter.

                ## Notes
                Start from the **Skills matrix** template.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A completed skills matrix shows every engineer's ratings and each skill held by one person has a named second learner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List six to eight observability skills that matter for your systems"
                - "Ask each engineer to rate themselves on each skill"
                - "Highlight skills only one person is confident in"
                - "Pair a second person with each of those skills for the quarter"
            - name: Writing alert messages people can act on
              description: |-
                ## Purpose
                An alert that says only that a threshold was crossed leaves a half-awake engineer guessing what it means and what to do. Messages that state the user impact, the current value, a link to the right dashboard and the first diagnostic step cut minutes from every response.

                ## Milestones
                1. A template for alert titles and descriptions agreed by the team.
                2. Every paging alert rewritten to state impact, current value and a dashboard link.
                3. A first diagnostic step included in each paging alert's description.
                4. Feedback collected from the last three people who received a page.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every paging alert follows the agreed message template, naming user impact, current value, a dashboard link and a first step."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect the text of the last ten pages that fired"
                - "Draft a message template with impact, value, link and first step"
                - "Ask the agent to rewrite each paging alert's text against the template"
                - "Ask the last three people paged whether the new text helped"
            - name: Migrating proprietary agents to OpenTelemetry
              description: |-
                ## Purpose
                Vendor-specific agents tie your code and configuration to one supplier, which weakens every renewal negotiation and makes trying a new backend a rewrite. Moving service by service to OpenTelemetry SDKs and a collector, while keeping both running during the switch, removes the lock-in without a blind spot.

                ## Milestones
                1. Every service listed with its current agent and migration order.
                2. A collector deployed that can export to the current backend.
                3. Services migrated in batches with old and new data compared for a week each.
                4. Dashboards and alerts updated to the new metric names.
                5. Old agents removed from every service.

                ## Notes
                Metric names and units often change in migration; compare a week of old and new data before switching alerts over.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All services send telemetry through OpenTelemetry and a collector, with dashboards and alerts moved and the old agents removed."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List each service with its current agent and pick the migration order"
                - "Deploy a collector that exports to the current backend"
                - "Migrate the first batch and compare a week of old and new data"
                - "Update alert rules to the new metric names before removing old agents"
            - name: Log level clean-up across services
              description: |-
                ## Purpose
                When every handled exception logs at error level, real errors disappear in the noise and the bill grows with debug lines left switched on in production. Auditing the noisiest log statements and fixing their levels makes error logs mean something again and often cuts volume by a third.

                ## Milestones
                1. The twenty highest-volume log statements in production identified.
                2. Each one kept, downgraded, sampled or removed.
                3. Production default level set to info, with a safe way to raise it per service.
                4. Error-level log volume tracked before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The twenty noisiest log statements have been dealt with and error-level volume before and after is recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Group last week's logs by message pattern and rank by volume"
                - "Decide for each top statement whether to keep, downgrade or remove"
                - "Add a runtime switch to raise log level for one service temporarily"
                - "Compare error-level volume for the week before and after"
            - name: Moving counters out of log lines into metrics
              description: |-
                ## Purpose
                Dashboards built by counting log lines are slow, expensive and break when someone rewords a message. Replacing those log-derived counts with proper counters and histograms makes the panels faster and cheaper and lets you sample or drop the logs themselves.

                ## Milestones
                1. Every dashboard panel and alert built on log queries listed.
                2. The busiest of them replaced with a counter or histogram in code.
                3. Dashboards and alerts switched to the new metrics.
                4. Log volume and query cost compared before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The five busiest log-derived panels or alerts now use native metrics, with the cost change recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find all panels and alerts that query logs rather than metrics"
                - "Add counters for the five busiest log-derived measures"
                - "Switch the dashboards and alerts to the new counters"
                - "Record log query cost before and after the switch"
            - name: Cold storage tier for older logs
              description: |-
                ## Purpose
                Most log searches look at the last few days, yet many teams pay hot-storage prices for months of history kept for audits. Moving older logs to cheap object storage with a slower search path keeps the history available while cutting the biggest part of the bill.

                ## Milestones
                1. Search patterns analysed to show how far back people really query.
                2. A hot retention period chosen that covers nearly all searches.
                3. Older logs archived to object storage in a searchable format.
                4. A tested way to restore or query archived logs when an audit asks.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision sets the hot retention period, older logs are archived to object storage and a restore has been tested."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check the query history for how far back searches usually reach"
                - "Propose a hot retention period and the expected saving"
                - "Configure archiving of older logs to object storage"
                - "Restore one day of archived logs as a test"
            - name: Real user monitoring for the web frontend
              description: |-
                ## Purpose
                Server metrics can be perfect while the page is slow for users on mobile networks or broken by a JavaScript error in one browser. Real user monitoring collects load times, interaction delays and front-end errors from actual sessions, so you see what customers see.

                ## Milestones
                1. A real user monitoring script added to the main web application.
                2. Core web vitals reported by page, device type and country.
                3. Front-end errors grouped with source maps so stack traces are readable.
                4. Front-end sessions linked to backend traces through the trace header.
                5. A monthly review of the slowest pages and noisiest errors.

                ## Notes
                Check the consent and privacy rules for collecting session data in your markets, and mask form inputs by default.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Real user monitoring reports web vitals and grouped front-end errors with source maps, reviewed monthly."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a real user monitoring tool and confirm its privacy settings"
                - "Add the script and upload source maps in the build pipeline"
                - "Propagate trace headers from the browser to backend calls"
                - "Review the slowest pages and top front-end errors @recurring(monthly:20)"
            - name: Error tracking with release tagging
              description: |-
                ## Purpose
                Thousands of identical exceptions in a log stream are hard to count and easy to ignore. An error tracking tool that groups exceptions, tags them with the release that introduced them and assigns them to an owner turns a wall of stack traces into a short, triaged list.

                ## Milestones
                1. Error tracking installed in the main backend and frontend applications.
                2. Each error tagged with release version and environment.
                3. New error groups after a deploy surfaced to the team that shipped it.
                4. A weekly triage keeping the count of unassigned error groups near zero.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Errors are grouped and tagged by release, and weekly triage keeps unassigned new error groups below five."
                cadence: rolling
              tasks:
                - "Install the error tracking SDK in the main application"
                - "Send the release version from the deploy pipeline"
                - "Set an alert for new error groups appearing after a deploy"
                - "Triage and assign new error groups @recurring(weekly:thu)"
            - name: Consolidating duplicate monitoring tools
              description: |-
                ## Purpose
                Teams that grew by acquisition or by each squad choosing its own tool often pay for three log platforms and two alerting systems, and incidents bounce between them. Deciding which tools stay, and moving the rest over in a planned order, saves money and means everyone looks in the same place.

                ## Milestones
                1. Every observability tool listed with its cost, users and what depends on it.
                2. A decision on which tool remains for each signal type.
                3. A migration order and date agreed for each tool being retired.
                4. Retired tools switched off and their contracts ended.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names one tool per signal type and every retired tool has a switch-off date and contract end recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every observability tool with its annual cost and active users"
                - "Map which alerts and dashboards depend on each tool"
                - "Agree the tool that stays for logs, metrics, traces and alerting"
                - "Set a switch-off date for each retiring tool"
            - name: Redacting secrets and personal data from logs
              description: |-
                ## Purpose
                API tokens, passwords in failed request bodies and customer emails end up in logs more often than anyone admits, and every copy is a breach waiting to be found. Scanning for leaked patterns, fixing the sources and adding redaction in the pipeline closes the hole and keeps it closed.

                ## Milestones
                1. A scan of recent logs for tokens, passwords, card-like numbers and emails completed.
                2. Each leak traced to the code that logs it and fixed at the source.
                3. Redaction rules for known patterns added in the collector as a safety net.
                4. Exposed secrets rotated and the leak reported to the security lead.
                5. A monthly scan scheduled to catch new leaks.

                ## Notes
                Start from the **Remediation plan** template. Rotate any credential that appeared in logs, even if you delete the logs; copies may already be in backups.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Known secret and personal data patterns are redacted in the pipeline, sources are fixed, exposed secrets rotated and a monthly scan runs."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Search the last thirty days of logs for token, password and email patterns"
                - "Trace each match to the log statement that produced it"
                - "Add redaction rules to the collector for the patterns found"
                - "Run the leak pattern search and log any new findings @recurring(monthly:27)"
            - name: Observability readiness review before a launch
              description: |-
                ## Purpose
                A launch is the moment a new feature meets traffic it has never seen, and the wrong time to discover nobody can tell whether it works. Reviewing dashboards, alerts and logging for the new feature a fortnight before launch means the team can watch it go live with confidence.

                ## Milestones
                1. The launch's key user actions and their success measures written down.
                2. Metrics and traces confirmed for each new endpoint and job.
                3. A launch dashboard built showing adoption, errors and latency for the new feature.
                4. Alerts for the new feature tested in staging.
                5. A named person watching the dashboard during the first hours of launch.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two weeks before launch, a launch dashboard and tested alerts exist for the new feature, with a named watcher for launch day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the new endpoints, jobs and user actions in the launch"
                - "Confirm each one emits metrics and traces in staging"
                - "Build the launch dashboard with adoption, errors and latency"
                - "Name who watches the dashboard for the first hours after launch"
            - name: Alert fire drill in staging
              description: |-
                ## Purpose
                Alerts are code that only runs during emergencies, so a broken query or a dead webhook stays hidden until it matters. Deliberately triggering each paging alert in staging once, and checking it reaches the right person with readable text, proves the alerting path works end to end.

                ## Milestones
                1. A list of paging alerts with a method to trigger each in staging.
                2. Every alert triggered and its arrival time and destination recorded.
                3. Broken queries, wrong routes and unreadable messages fixed.
                4. A date set for the next drill.

                ## Notes
                Warn the people who will receive the test pages first, and label them clearly as a drill.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every paging alert has been triggered in staging, its delivery recorded and each failure fixed, with the next drill dated."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down how to trigger each paging alert in staging"
                - "Tell the recipients the drill is coming and when"
                - "Trigger each alert and record when and where it arrived"
                - "Fix every alert that failed to fire or reached the wrong place"
            - name: Monitoring watch plan for a peak traffic day
              description: |-
                ## Purpose
                Sales, ticket releases and end-of-year filing deadlines bring several times normal traffic, and the questions during them are always the same: are we up, are we slow, what is about to run out. A watch plan with a dedicated dashboard, pre-agreed thresholds and named watchers turns the day into routine observation rather than panic.

                ## Milestones
                1. Expected peak traffic and the date confirmed with the business.
                2. A peak dashboard covering traffic, errors, latency and the resources most likely to saturate.
                3. Temporary alert thresholds agreed for the peak window.
                4. A rota of watchers and a shared channel for the day.
                5. A short note after the day on what the telemetry showed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A peak-day dashboard, temporary thresholds and a watcher rota are in place before the date, and a note of findings is written after it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the peak date and expected traffic with the business owner"
                - "Build a peak dashboard with the resources most likely to saturate"
                - "Agree temporary alert thresholds for the peak window"
                - "Write up what the telemetry showed within a week of the peak"
            - name: Observability vendor contract renewal
              description: |-
                ## Purpose
                Renewals arrive with a quote based on last year's peak usage and a short deadline, and teams that have not prepared simply sign. Starting six months out with real usage data, a clear view of what you would cut and a credible alternative changes the conversation and often the price.

                ## Milestones
                1. The renewal date and notice period confirmed from the contract.
                2. Twelve months of usage by signal type summarised.
                3. Volume reductions already achieved or planned listed.
                4. An alternative quote or migration estimate in hand.
                5. A renewal decision and the final terms recorded.

                ## Notes
                Start from the **Vendor** template. Check the notice period first: some contracts renew automatically if you miss it.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The renewal decision and final terms are recorded before the notice deadline, backed by twelve months of usage data and an alternative quote."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the renewal date and notice period in the contract"
                - "Summarise twelve months of usage by logs, metrics and traces"
                - "Request a quote from one alternative supplier"
                - "Record the decision and the agreed terms"
            - name: Audit log evidence for a security assessment
              description: |-
                ## Purpose
                Security assessments and customer questionnaires ask for proof that access and changes are logged, retained and reviewed, and pulling that together the week before is painful. Preparing the evidence ahead, with screenshots, retention settings and an example of a reviewed alert, makes the assessment a formality.

                ## Milestones
                1. The assessment's logging and monitoring requirements listed.
                2. Audit logging confirmed for authentication, admin actions and infrastructure changes.
                3. Retention settings and access controls captured as evidence.
                4. An example of a security alert that was raised and reviewed documented.
                5. The evidence pack handed to whoever runs the assessment.

                ## Notes
                Requirements differ between frameworks; take the exact wording from the assessor rather than working from memory.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An evidence pack covering audit logging, retention, access control and a reviewed alert is delivered to the assessment owner."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Get the exact logging requirements from the assessment owner"
                - "Check audit logs exist for logins, admin actions and infrastructure changes"
                - "Capture retention and access settings as screenshots"
                - "Hand over the evidence pack with a one-page index"
            - name: Minimum viable monitoring for a team of one
              description: |-
                ## Purpose
                A solo developer or two-person team cannot run a full observability stack, but still needs to know before customers do when the site is down. A free or cheap uptime check, an error tracker, structured logs from the platform and one alert to your phone cover most of the risk in an evening.

                ## Milestones
                1. An external uptime check on the main page and the API.
                2. An error tracker installed with alerts for new errors.
                3. Platform logs kept long enough to investigate a weekend outage.
                4. One alert route to your phone that you have tested.
                5. A monthly check of the monitoring bill and any alerts you ignored.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Uptime checks, an error tracker and a tested phone alert are in place for the product, with a monthly check on cost and ignored alerts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up an external uptime check on the home page and API"
                - "Install an error tracker on the free tier"
                - "Send a test alert to your phone and confirm it arrives"
                - "Check the monitoring bill and any alerts you ignored @recurring(monthly:2)"
            - name: Inheriting a service with no monitoring
              description: |-
                ## Purpose
                Taking over a service from a team that has moved on, or a contractor who has left, often means no dashboards, no alerts and logs nobody reads. Spending the first month adding basic signals, a dashboard and a couple of symptom alerts means you learn how it behaves before it surprises you.

                ## Milestones
                1. The service's dependencies, entry points and scheduled jobs listed.
                2. Basic request, error and latency metrics emitted.
                3. A starter dashboard and two symptom alerts in place.
                4. One week of normal behaviour recorded as a baseline.
                5. A list of unknowns to ask the previous owners about.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within a month the inherited service has golden signal metrics, a dashboard, two symptom alerts and a recorded one-week baseline."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read the code for entry points, dependencies and scheduled jobs"
                - "Add auto-instrumentation to get request, error and latency metrics"
                - "Build a starter dashboard and two symptom alerts"
                - "Send the list of unknowns to the previous owners"
            - name: Monitoring batch jobs and scheduled pipelines
              description: |-
                ## Purpose
                Nightly jobs that silently fail to run produce no errors at all, so request-based alerts never notice, and the first sign is a report with yesterday's numbers. Jobs need their own signals: did it start, did it finish, how long did it take and how many records did it process.

                ## Milestones
                1. Every scheduled job listed with its expected schedule and duration.
                2. Each job emitting start, success, failure, duration and records processed.
                3. A missed-run alert for each job that matters.
                4. Duration trends reviewed weekly to catch jobs creeping towards their window.

                ## Notes
                Alert on the absence of a success signal within the expected window; that catches jobs that never started as well as ones that failed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every important scheduled job emits run metrics and has a missed-run alert, with duration trends reviewed weekly."
                cadence: rolling
              tasks:
                - "List every scheduled job with its expected start time and duration"
                - "Emit start, success, failure and records processed from each job"
                - "Add a missed-run alert based on the last success time"
                - "Review job durations against their windows @recurring(weekly:wed)"
            - name: Monitoring serverless functions and managed services
              description: |-
                ## Purpose
                Functions and managed databases hide the servers, so the usual host metrics vanish and the important signals become cold starts, throttling, concurrency limits and timeouts. Knowing which of the provider's metrics matter and adding tracing across function calls closes the blind spots that serverless architectures create.

                ## Milestones
                1. The provider's key metrics for each function identified: invocations, errors, duration, throttles and concurrency.
                2. Tracing connected across function calls and queues.
                3. Alerts on throttling and timeouts for the critical functions.
                4. A monthly look at cold start rates and functions near their limits.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Critical functions have alerts on throttling and timeouts, tracing spans their calls and a monthly limits review is recorded."
                cadence: rolling
              tasks:
                - "List each critical function with its timeout and concurrency limit"
                - "Turn on tracing for functions and the queues between them"
                - "Add throttle and timeout alerts to the critical functions"
                - "Review cold starts and functions close to their limits @recurring(monthly:11)"
            - name: Observability tour for engineers joining the team
              description: |-
                ## Purpose
                New engineers usually learn the monitoring tools during their first incident, which is the worst possible classroom. A one-hour recorded tour of the dashboards, how to find a request by ID, which alerts page and where the runbooks live gets them useful in production weeks sooner.

                ## Milestones
                1. A tour outline covering dashboards, log search, traces, alerts and runbooks.
                2. The tour recorded or written up with links.
                3. Access to every observability tool included in the new starter checklist.
                4. Feedback from the next two new starters used to improve the tour.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A recorded or written observability tour exists, tool access is on the new starter checklist and two new starters have given feedback."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Outline the tour from dashboards to runbooks in ten steps"
                - "Record the tour while finding one real request by its ID"
                - "Add observability tool access to the new starter checklist"
                - "Ask the next two new starters what was missing"
            - name: Running observability as a shared platform service
              description: |-
                ## Purpose
                Once several teams depend on the same collectors, backends and alerting, someone has to run them as a product with users, not a side project. A platform team with a clear service offer, documented defaults, office hours and a feedback loop keeps the stack reliable and stops each team rebuilding the basics.

                ## Milestones
                1. A written service offer saying what the platform provides and what teams own.
                2. Default instrumentation libraries and dashboards published for each supported language.
                3. Regular office hours where product teams bring questions.
                4. A quarterly survey of product teams with the top three requests acted on.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A published service offer, default libraries and regular office hours exist, and the last quarterly survey's top three requests are scheduled."
                cadence: rolling
              tasks:
                - "Write the service offer listing what the platform owns and what teams own"
                - "Publish default instrumentation libraries for each supported language"
                - "Hold observability office hours for product teams @recurring(monthly:6)"
                - "Survey product teams about the observability platform @recurring(quarterly)"
            - name: Continuous profiling in production
              description: |-
                ## Purpose
                Metrics say a service got slower and traces say which call, but neither says which lines of code are burning the CPU. Always-on, low-overhead profiling adds a fourth signal that shows exactly where time and memory go, and comparing profiles across releases catches regressions before users notice.

                ## Milestones
                1. A continuous profiler running on one high-traffic service with measured overhead.
                2. CPU and memory profiles searchable by service, version and time.
                3. Profiles from two releases compared to find a change in hot paths.
                4. A monthly look at the top consumers in the busiest service.

                ## Notes
                Measure the profiler's own overhead in staging first; most aim for a low single-digit percentage of CPU.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One high-traffic service runs a continuous profiler with measured overhead, and a cross-release profile comparison has been written up."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a continuous profiler that supports your main language"
                - "Measure its overhead on one service in staging"
                - "Compare flame graphs from the last two releases"
                - "Review the top CPU and memory consumers in production @recurring(monthly:15)"
            - name: Kernel-level visibility with eBPF
              description: |-
                ## Purpose
                Some problems sit below the application, in network retransmits, DNS latency or noisy neighbours on a node, where no amount of application logging reaches. eBPF-based tools observe the kernel without code changes and can map service-to-service traffic automatically, which is valuable for experienced teams running their own clusters.

                ## Milestones
                1. An eBPF-based tool trialled on a non-production cluster with kernel version requirements checked.
                2. A service map built automatically from observed network traffic.
                3. Network and DNS latency visible per service.
                4. A decision on whether to roll it out, with the security review noted.

                ## Notes
                eBPF agents need elevated privileges on each node; involve the security team before any production rollout.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trial on a non-production cluster has produced a service map and per-service network latency, and a rollout decision is recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Check node kernel versions against the tool's requirements"
                - "Install the eBPF agent on a non-production cluster"
                - "Compare the automatic service map with your architecture diagram"
                - "Record the rollout decision and the security team's view"
            - name: Anomaly detection on business metrics
              description: |-
                ## Purpose
                Some of the costliest failures never throw an error: sign-ups quietly halve because a form broke on one browser, or payments drop in one country. Watching business metrics such as orders per minute against a seasonal baseline catches these silent failures, as long as the false alarms are kept under control.

                ## Milestones
                1. Three to five business metrics chosen that reflect the product working.
                2. Each emitted as a time series alongside the technical metrics.
                3. A baseline that accounts for time of day and day of week configured for each.
                4. Anomaly alerts routed to a channel rather than a page until proven reliable.
                5. False positives reviewed monthly and the sensitivity adjusted.

                ## Notes
                Simple week-over-week comparisons often beat clever models; start there and only add complexity if they miss real incidents.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Three or more business metrics have seasonal anomaly alerts, with a monthly record of false positives and sensitivity changes."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Agree three to five business metrics with the product owner"
                - "Emit them as time series from the application"
                - "Configure week-over-week anomaly alerts to a chat channel"
                - "Review false positives and adjust sensitivity @recurring(monthly:25)"
---

# Observability & Monitoring

This area is for engineers and teams who want to see what production is doing and find the cause of a problem in minutes rather than hours. It starts with foundations (an inventory of the telemetry you have, a logging standard, correlation IDs, the golden signals, a stack decision and the first alerts), moves through the operating routines that keep alerts quiet and dashboards honest, then the skills worth practising, from query languages and trace reading to percentiles and sampling. After that come improvements and decisions, dated events such as a launch, a peak day or a vendor renewal, variants for a team of one, an inherited service, batch jobs, serverless and a platform team, and the specialist work of continuous profiling, kernel-level visibility and anomaly detection.

What repeats is a weekly review of every page that fired, a monthly pruning of dashboards, monthly checks on cardinality, spend and leaked personal data, a quarterly test that the monitoring itself is alive and a quarterly coverage review against the service catalogue. The Vendor, Metrics log, Operational checklist, Skills matrix and Remediation plan templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
