---
id: data-analytics.real-time-streaming-data
name: Real-Time Streaming Data
description: "Topics and events designed and owned, delivery guarantees you can state, lag and latency watched, and replay, late data and failover rehearsed before production depends on them."
category: business
version: 1.0.0
tags: [data-analytics, real-time-streaming-data, engineer, event-streaming, stream-processing, kafka, event-driven]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - remediation-plan
    - risk-register
    - onboarding-30-60-90
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Real-Time Streaming Data
          description: "Building pipelines that process events as they happen for live dashboards, alerts and features, handling ordering, late data and replay."
          projects:
            - name: Streaming use case and latency budget brief
              description: |-
                ## Purpose
                Plenty of teams build a streaming pipeline for a dashboard that is looked at twice a day, then pay for brokers, on-call and complexity that a fifteen-minute batch job would have avoided. Writing down the decision the data supports, how stale it can be before it costs money, and who acts on it settles whether you need seconds, minutes or hours of freshness. It is the cheapest hour you will spend in this area.

                ## Milestones
                1. A one-page brief naming the first use case, the decision it drives and the person who acts on it.
                2. A latency budget stated as a number, such as alerts within 30 seconds of the event or a dashboard no more than 2 minutes behind.
                3. A comparison with a micro-batch option at 5 or 15 minutes, with the running cost and complexity of each noted.
                4. A recorded go or no-go for streaming, agreed by the engineer who will run it.

                ## Notes
                If nobody can name what goes wrong when the data is ten minutes late, start with micro-batch and revisit when someone can.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A brief with a numeric latency budget and a recorded streaming or micro-batch decision exists for the first use case."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the decision the live data will drive and who makes it"
                - "Ask that person how many minutes of delay would actually cost something"
                - "Sketch a micro-batch alternative and estimate its running cost"
                - "Record the streaming or micro-batch decision with its reasoning"
            - name: Event inventory and topic naming convention
              description: |-
                ## Purpose
                Topics multiply fast: within a year a cluster with no convention holds orders, orders-v2, orders_new and test-orders-dave, and nobody can say which one is live. Listing the events your systems emit, agreeing a naming pattern that encodes domain, entity and version, and recording an owner per topic gives every later decision about partitions, retention and access something to attach to.

                ## Milestones
                1. An inventory of every event type produced today, with its producing service and approximate peak events per second.
                2. A written naming convention, for example domain.entity.event.v1, agreed with the producing teams.
                3. An owner and a list of consuming services recorded for each topic.
                4. Existing topics mapped to the convention, with renames or aliases planned for the ones that break it.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A topic inventory lists owner, producer, consumers and peak rate for every topic, beside a written naming convention the team has agreed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the current topic list from the cluster with partition counts"
                - "Ask each producing team which events they emit and at what peak rate"
                - "Draft a naming pattern covering domain, entity, event and version"
                - "Add an owner and known consumers against every topic in the inventory"
            - name: Choosing a managed or self-hosted event streaming platform
              description: |-
                ## Purpose
                Running your own brokers buys control and can be cheaper at high volume, but it also means owning upgrades, failed disks and the 3 a.m. page. A managed service trades that for a bill that grows with throughput, partitions and retention. Comparing two or three options against your measured peak rate, retention needs, team skills and required client languages produces a choice you can defend for the next three years.

                ## Milestones
                1. Requirements written down: peak events per second, average event size, retention days, regions and required client languages.
                2. Two or three options shortlisted, such as a managed Kafka-compatible service, a cloud provider's native stream and a self-hosted cluster.
                3. A monthly cost estimate for each at today's volume and at three times that volume.
                4. A decision recorded with the operational responsibilities it still leaves with your team.

                ## Notes
                Start from the **Purchase decision** template. Price each option at your peak hour, not the average day: streaming bills are driven by peaks, partition counts and retention.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform decision is recorded with costed estimates at current and three times current volume for at least two options."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Measure peak events per second and average event size from current producers"
                - "List the retention, region and client language requirements"
                - "Price two or three platforms at today's and three times today's volume"
                - "Run a one-day proof of concept on the leading option"
                - "Record the decision and what your team will still have to operate"
            - name: Standard event envelope for every producer
              description: |-
                ## Purpose
                When each team invents its own event shape, consumers end up guessing which field holds the timestamp and whether it is in milliseconds or seconds. A shared envelope with a unique event id, event time, producer name, schema version and correlation id makes deduplication, late data handling and tracing possible across every topic, and it is far easier to agree before the tenth producer than after.

                ## Milestones
                1. An envelope specification listing required fields, types and units, with event time in UTC.
                2. The difference between event time and ingestion time written into the specification with a worked example.
                3. A small shared library or code snippet that producers use to build the envelope.
                4. The first two producers emitting events that pass a validation check against the envelope.

                ## Notes
                Generate a globally unique id at the source, not from the broker offset, so duplicates can still be recognised after a retry or a replay.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written envelope specification exists and at least two production producers emit events that validate against it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect three sample events from different producers and compare their fields"
                - "Draft the envelope with id, event time, producer, schema version and correlation id"
                - "Publish a shared helper that builds the envelope correctly"
                - "Add envelope validation to the first two producers' tests"
            - name: Schema registry and compatibility rules
              description: |-
                ## Purpose
                Without a registry, a producer can rename a field on a Friday afternoon and silently break every consumer downstream until someone notices the live dashboard has gone flat. Running a schema registry with an agreed compatibility mode per topic, usually backward compatible so new consumers can still read old data, turns breaking changes into rejected deploys instead of incidents.

                ## Milestones
                1. A schema registry running in every environment, with producers registering schemas on deploy.
                2. A serialisation format chosen, such as Avro, Protobuf or JSON Schema, with the reasons recorded.
                3. A default compatibility mode set, with any topic-level exceptions listed and justified.
                4. A test showing that an incompatible schema change is rejected before it reaches production.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every production topic has a registered schema, and an incompatible change has been shown to be rejected by the registry."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List which topics already have schemas and which carry free-form payloads"
                - "Choose a serialisation format and write down why"
                - "Set the default compatibility mode in the registry"
                - "Try registering a deliberately breaking change to confirm it is rejected"
            - name: Partition key and partition count design
              description: |-
                ## Purpose
                Ordering in most event logs is only guaranteed within a partition, so the key you choose decides which events stay in sequence and how evenly load spreads. A key that is too coarse, such as country, creates hot partitions, while one that is too random loses the per-customer ordering your consumers rely on. Settling key and count per topic before launch avoids a painful repartition later.

                ## Milestones
                1. For each main topic, the ordering requirement stated, for example all events for one order in sequence.
                2. A partition key chosen per topic, with key skew checked on a sample of real data.
                3. A partition count sized from target throughput per partition and expected consumer parallelism, with growth headroom.
                4. The decision and its arithmetic recorded beside the topic in the inventory.

                ## Notes
                Adding partitions later changes which partition a key maps to, which breaks ordering for keyed topics. Size for about two years of growth.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each main topic has a documented ordering requirement, partition key, skew check and partition count calculation."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the ordering requirement for each main topic in one sentence"
                - "Sample a day of events and measure how evenly candidate keys spread"
                - "Calculate partition count from peak throughput and consumer parallelism"
                - "Record key, count and reasoning against each topic"
            - name: Local streaming development environment
              description: |-
                ## Purpose
                Engineers who can only test against a shared staging cluster wait for each other, pollute shared topics and quietly stop writing tests. A one-command local stack with a broker, schema registry, the stream processor and a script that produces realistic sample events lets anyone reproduce a bug, test a schema change or try a new window size in minutes.

                ## Milestones
                1. A container-based stack that starts a broker, registry and processor with one command.
                2. A sample event generator producing realistic keys and volumes, including some out-of-order events.
                3. Integration tests that run against the local stack in continuous integration.
                4. A short readme that a new engineer has followed without help.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A new engineer can start the local stack and run the integration tests from the readme alone in under 30 minutes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a compose file that starts a broker and schema registry locally"
                - "Add a generator script that emits sample events with some late arrivals"
                - "Run the pipeline's integration tests against the local stack in CI"
                - "Ask a colleague to follow the readme and note where they got stuck"
            - name: Retention and compaction policy per topic
              description: |-
                ## Purpose
                Retention decides how far back you can replay after a bug, and it is also one of the biggest drivers of storage cost. Some topics should keep seven days of every event; others, such as current customer settings, work better as compacted topics that keep only the latest value per key. Setting each deliberately, rather than leaving the broker default, gives you a replay window you can actually promise.

                ## Milestones
                1. Each topic classified as event history, changelog or command, with its retention type.
                2. A retention period set per topic from the longest realistic replay need, such as fixing a consumer bug found after a long weekend.
                3. Compacted topics identified, with tombstone handling for deletes documented.
                4. A storage estimate for the chosen retention compared with the platform's capacity or bill.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every production topic has an explicit retention or compaction setting with a written replay window."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List topics still running on the broker's default retention"
                - "Ask consumer owners how far back they would need to replay after a bug"
                - "Set retention or compaction explicitly on each topic"
                - "Compare retention settings with the replay needs consumers report @recurring(yearly)"
            - name: Broker authentication, authorisation and encryption
              description: |-
                ## Purpose
                A cluster where every service connects with the same shared credentials means any compromised app can read every topic, including the ones carrying personal data. Giving each service its own principal, granting read or write per topic, and encrypting traffic in transit limits the damage from a leak and gives auditors a clear answer about who can see what.

                ## Milestones
                1. TLS enabled for client and inter-broker traffic in every environment.
                2. One service principal per producing or consuming application, with no shared credentials left.
                3. Access lists granting each principal only the topics and consumer groups it needs.
                4. A record of which topics carry personal or sensitive data and who can read them.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No shared credentials remain, traffic is encrypted, and every principal's topic access matches a written access list."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every application connecting to the cluster and the credentials it uses"
                - "Issue a separate principal for each application"
                - "Grant read and write access per topic and consumer group"
                - "Flag topics carrying personal data in the inventory"
                - "Review principal access lists against the topic inventory @recurring(quarterly)"
            - name: Consumer lag monitoring and alerts
              description: |-
                ## Purpose
                Consumer lag, the gap between the newest event and the last one a consumer has processed, is the best early warning that a pipeline is falling behind. Alerting on lag measured in seconds rather than raw message counts, with thresholds tied to each consumer's latency budget, catches stuck consumers and slow sinks before a live dashboard goes stale.

                ## Milestones
                1. Lag collected for every consumer group and visible on one dashboard.
                2. Lag shown as seconds behind as well as message count.
                3. Alert thresholds per consumer group set from its latency budget and routed to the owning team.
                4. A weekly review that tunes or removes noisy alerts.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every production consumer group has a time-based lag alert routed to a named owner, and each noisy alert is tuned within a week."
                cadence: rolling
              tasks:
                - "List every consumer group and the team that owns it"
                - "Add a lag exporter that reports both messages and seconds behind"
                - "Set lag alert thresholds from each consumer's latency budget"
                - "Review the week's lag alerts and tune noisy thresholds @recurring(weekly:mon)"
            - name: Streaming on-call rotation and runbooks
              description: |-
                ## Purpose
                Streaming systems fail at all hours and in ways that are not obvious to someone who did not build them: a rebalance storm, a poison message, a full disk on one broker. A rotation with a clear handover and a runbook per common failure means the person paged at night can act within minutes instead of waking the one engineer who knows.

                ## Milestones
                1. An on-call rotation with at least two people and a documented escalation path.
                2. Runbooks for the five most likely failures, such as a stuck consumer, poison message, full broker disk, under-replicated partitions and schema rejection.
                3. Each runbook tested once on staging by someone other than its author.
                4. A weekly handover note covering open issues and recent changes.

                ## Notes
                Start from the **Operational checklist** template for each runbook. Keep night-time runbooks to steps that are safe to take alone; anything that risks data loss needs a second person.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Runbooks for at least five failure types exist, each tested on staging, and every weekly handover has a written note."
                cadence: rolling
              tasks:
                - "List the five failures most likely to page someone"
                - "Write a runbook for each from the operational checklist template"
                - "Have a second engineer run each runbook once on staging"
                - "Hand over open streaming issues at the weekly on-call change @recurring(weekly:fri)"
                - "Rehearse one runbook on staging with the next on-call engineer @recurring(monthly:12)"
            - name: Dead letter topic triage routine
              description: |-
                ## Purpose
                Events that fail to deserialise or break a processing rule should go to a dead letter topic rather than crash the consumer, but a dead letter topic nobody reads is just data loss with extra steps. A routine for inspecting, fixing and replaying or discarding those events keeps the error rate visible and stops one bad producer from quietly losing a day of orders.

                ## Milestones
                1. Every consumer routing failed events to a dead letter topic with the error reason and original offset attached.
                2. A dashboard showing dead letter volume per topic and per error type.
                3. A weekly triage that ends with each batch replayed, fixed at source or discarded with a reason.
                4. Repeat error types turned into producer fixes or tests.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Dead letter volume is visible per topic, and every dead lettered batch older than one week has a recorded outcome."
                cadence: rolling
              tasks:
                - "Check which consumers crash or skip on bad events instead of dead lettering them"
                - "Add the error reason and source offset as headers on dead lettered events"
                - "Build a small tool that re-publishes fixed events to the source topic"
                - "Triage the dead letter topics and record an outcome for each batch @recurring(weekly:tue)"
            - name: Schema change review with producers and consumers
              description: |-
                ## Purpose
                The registry stops incompatible changes, but it cannot stop a compatible change that still surprises a consumer, such as a new enum value or a field that quietly becomes always empty. A short monthly look at schema versions registered, fields deprecated and consumers still on old versions keeps evolution deliberate and gives deprecated fields an actual removal date.

                ## Milestones
                1. A list of schema versions registered in the last month, with the producing team for each.
                2. Deprecated fields recorded with a planned removal date.
                3. Consumers still reading old versions identified and contacted.
                4. New enum values and changes of meaning announced to consumers before release.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's schema changes are listed with owners, and every deprecated field has a removal date."
                cadence: rolling
              tasks:
                - "Pull the list of schema versions registered since the last review"
                - "Tell consumers about any new enum values or changed meanings"
                - "Set a removal date for each deprecated field"
                - "Review registry changes and deprecated fields with producer owners @recurring(monthly:7)"
            - name: Broker capacity and headroom review
              description: |-
                ## Purpose
                Clusters rarely fall over from one spike; they creep towards full disks, saturated network links or too many partitions per broker over months. Checking headroom monthly against agreed limits, for example disks below 70 percent and partitions per broker within the vendor's guidance, gives you weeks of warning to add capacity instead of an outage.

                ## Milestones
                1. Headroom limits written for disk, network, CPU and partitions per broker.
                2. A monthly snapshot of each metric per broker, kept in one log.
                3. A growth trend showing when each limit will be reached at current rates.
                4. Capacity changes planned at least a month before any limit is crossed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly capacity log exists with a projected date for each headroom limit, and no limit has been crossed unplanned."
                cadence: rolling
              tasks:
                - "Agree headroom limits for disk, network, CPU and partitions per broker"
                - "Set up a log with one row per broker per month"
                - "Project when each limit will be reached at the current growth rate"
                - "Check disk, network and partition headroom per broker @recurring(monthly:9)"
            - name: Streaming platform cost review
              description: |-
                ## Purpose
                Bills for streaming creep upwards from partitions nobody uses, retention left at forever, cross-zone network traffic and processors sized for a launch that ended months ago. A monthly look at cost by cluster, topic and processing job, with one named saving to act on each time, keeps the platform affordable without cutting the replay window people depend on.

                ## Milestones
                1. Monthly cost broken down by cluster, storage, network transfer and processing jobs.
                2. The ten most expensive topics and jobs listed with their owners.
                3. One saving chosen and actioned each month, such as trimming retention or right-sizing a job.
                4. Savings recorded so the review shows its own value over a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly cost breakdown exists, and at least one recorded saving was made in each of the last three months."
                cadence: rolling
              tasks:
                - "Tag clusters and processing jobs so costs can be split by owner"
                - "List the ten most expensive topics and jobs"
                - "Compare this month's streaming bill with last month's by cluster @recurring(monthly:18)"
                - "Pick one saving and assign it to the owner of that topic or job"
            - name: Certificate and credential rotation
              description: |-
                ## Purpose
                An expired client certificate stops a producer cold, usually on a public holiday, and long-lived keys copied into config files are a standing security risk. A rotation schedule with expiry tracking and a tested rollover procedure keeps encryption and access control from turning into an outage of their own.

                ## Milestones
                1. Every certificate and key used by brokers and clients listed with its expiry date.
                2. A rollover procedure that has been run once without downtime.
                3. Alerts set at least 30 days before any expiry.
                4. Keys and certificates held in a secrets manager, not in config files.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every broker and client credential has a recorded expiry, an alert at least 30 days ahead and a tested rollover."
                cadence: cyclic
              tasks:
                - "List every certificate and key with its expiry date"
                - "Move any credentials found in config files into the secrets manager"
                - "Check upcoming certificate expiries on brokers and clients @recurring(monthly:26)"
                - "Rotate client keys and certificates due in the next quarter @recurring(quarterly)"
            - name: Topic ownership and hygiene sweep
              description: |-
                ## Purpose
                Abandoned topics still cost storage, still hold data you may be obliged to delete, and still confuse the next engineer searching for the right stream. A quarterly sweep that finds topics with no producer traffic or no active consumers, confirms with the owner and retires them keeps the cluster readable and the inventory honest.

                ## Milestones
                1. A report listing topics with no writes or no active consumer groups in the last 90 days.
                2. Each candidate confirmed with its owner before any action.
                3. Retired topics removed from the cluster and marked in the inventory.
                4. Topics without an owner assigned one or scheduled for retirement.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every topic idle for 90 days has a recorded keep or retire decision from its owner."
                cadence: rolling
              tasks:
                - "Script a report of topics with no writes or consumers for 90 days"
                - "Send each owner their idle topics with a date to reply"
                - "Retire confirmed idle topics after the owner agrees @recurring(quarterly)"
                - "Update the inventory with retired topics and new owners"
            - name: Stream versus source reconciliation checks
              description: |-
                ## Purpose
                A streaming pipeline can look healthy, with low lag and no errors, while quietly dropping events at a filter or double counting after a retry. Comparing counts and sums per hour between the source system, the topic and the final sink catches silent loss and duplication that no latency metric will ever show.

                ## Milestones
                1. Hourly counts and key sums collected at the source, the topic and the sink for the main pipelines.
                2. A tolerance set per pipeline, for example counts within 0.1 percent once late data has settled.
                3. A report or alert whenever an hour falls outside tolerance.
                4. A record of each gap found and its cause.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The main pipelines have hourly source, topic and sink counts compared against a written tolerance, with every breach investigated."
                cadence: rolling
              tasks:
                - "Pick the two pipelines where silent loss would cost the most"
                - "Add hourly counts and sums at the source, topic and sink"
                - "Set a tolerance that allows for late data settling"
                - "Read the reconciliation report and chase any hour outside tolerance @recurring(weekly:thu)"
            - name: End-to-end latency objective tracking
              description: |-
                ## Purpose
                Lag on one consumer says nothing about how long an event takes from the moment it happened to the moment it shows on a dashboard or fires an alert. Measuring end-to-end latency from event time to sink, publishing an objective such as 99 percent of events visible within 60 seconds, and logging attainment monthly tells users what they can rely on.

                ## Milestones
                1. End-to-end latency measured from event time to sink for each live use case.
                2. A written objective per use case agreed with the people who consume it.
                3. A monthly log of median, p99 and attainment against the objective.
                4. Breaches linked to incidents or changes in the log.

                ## Notes
                Start from the **Metrics log** template. Measure from event time, not ingestion time, or slow producers will hide inside your numbers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each live use case has a written latency objective and a monthly attainment log covering at least three months."
                cadence: rolling
              tasks:
                - "Add a latency metric from event time to the sink for each live use case"
                - "Agree a latency objective with each use case's main consumer"
                - "Start a latency log from the metrics log template"
                - "Log the month's p99 latency and objective attainment @recurring(monthly:4)"
            - name: Streaming incident review practice
              description: |-
                ## Purpose
                Streaming incidents repeat: the same poison message pattern, the same rebalance after a deploy, the same full disk. A blameless review for every incident that lost data, broke a latency objective or paged someone at night, with actions tracked to completion, is how the on-call load actually falls over a year.

                ## Milestones
                1. A short incident page covering timeline, impact in events and minutes, cause and actions.
                2. A review held within five working days of each qualifying incident.
                3. Actions tracked with owners and dates until closed.
                4. A monthly summary showing repeat causes.

                ## Notes
                Start from the **Remediation plan** template for actions that span more than one team.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every qualifying incident in the last quarter has a written review, and at least 80 percent of its actions are closed."
                cadence: rolling
              tasks:
                - "Write the criteria that make an incident qualify for a review"
                - "Create a short incident page with timeline, impact and actions"
                - "Hold the monthly streaming incident review and check open actions @recurring(monthly:23)"
                - "Tag each incident with a cause category to spot repeats"
            - name: Event time, processing time and watermarks
              description: |-
                ## Purpose
                Most streaming bugs that produce wrong numbers come from confusing when an event happened with when it was processed. Learning how watermarks estimate progress in event time, and how they decide when a window is complete, lets you reason about correctness instead of tuning delays by trial and error.

                ## Milestones
                1. Notes explaining event time, ingestion time and processing time with one example from your own events.
                2. A small local job using event-time windows and a bounded out-of-orderness watermark.
                3. An experiment showing how results change when events arrive late by different amounts.
                4. A one-page summary shared with the team on how your processor handles watermarks and idle partitions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working local event-time job and a shared one-page summary of watermark behaviour in your processor exist."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read your processor's documentation on event time and watermarks"
                - "Build a local job that counts events per minute by event time"
                - "Feed it events arriving one, ten and sixty seconds late and compare results"
                - "Write a one-page team summary, including idle partition behaviour"
            - name: Windowing patterns for stream aggregation
              description: |-
                ## Purpose
                Tumbling, hopping, sliding and session windows answer different questions: sales per minute, a rolling five-minute average, or how long a user's visit lasted. Practising each on your own data shows which suits each use case, how much state each keeps and how results update when late events arrive.

                ## Milestones
                1. Each window type implemented once on a sample of real events.
                2. State size and output volume recorded for each.
                3. A guide mapping current use cases to the window type each should use.
                4. Session gap timeouts chosen from observed user behaviour, not guesses.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team guide maps each current aggregation use case to a window type, backed by tested examples of all four types."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Export a sample day of events from a real topic"
                - "Implement tumbling, hopping, sliding and session windows on it"
                - "Record state size and output count for each window type"
                - "Write a short guide matching each use case to a window type"
            - name: Delivery guarantees and idempotent consumers
              description: |-
                ## Purpose
                At-least-once delivery is the realistic default, which means every consumer will one day see the same event twice. Understanding what exactly-once really covers in your platform, usually reads, processing and writes inside its own transactions, and where it stops at external sinks, tells you which consumers need idempotent writes and which can live with duplicates.

                ## Milestones
                1. A written explanation of the guarantees your platform offers and where they stop.
                2. Each consumer classified by what a duplicate or a missed event would cost.
                3. Idempotent write patterns, such as upserts keyed on event id, chosen for the consumers that need them.
                4. A test that replays a batch twice and shows the sink unchanged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every production consumer has a recorded duplicate tolerance, and the critical ones pass a replay-twice test."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read your platform's documentation on transactions and exactly-once processing"
                - "List every consumer and what a duplicate would cost it"
                - "Sketch an idempotent write for each consumer that cannot tolerate duplicates"
                - "Write a test that processes the same batch twice and checks the sink"
            - name: Stateful processing, checkpoints and state stores
              description: |-
                ## Purpose
                Aggregations, joins and deduplication all keep state, and that state must survive a crash, a deploy and a rescale. Learning how your processor checkpoints state, restores it, and what happens when the job's code or parallelism changes prevents the classic mistake of losing a day of running totals on an innocent redeploy.

                ## Milestones
                1. Notes on how checkpoints, savepoints or changelog topics work in your processor.
                2. A local job killed mid-run and shown to resume with correct state.
                3. A job redeployed with changed code and parallelism from saved state.
                4. Changes that are not state compatible, such as renaming operators, listed in the team guide.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A local job has been crashed, restored and rescaled from saved state with correct results, and incompatible changes are documented."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read how your processor stores and restores state"
                - "Kill a running local job and confirm it resumes with correct totals"
                - "Redeploy the job with new parallelism from saved state"
                - "List the code changes that break state compatibility"
            - name: Stream joins and enrichment
              description: |-
                ## Purpose
                Joining a click stream to a customer table, or orders to payments arriving minutes apart, is where streaming gets subtle: one side may be late, the table may change, and unbounded joins will eat memory. Practising stream-to-table and stream-to-stream joins with explicit time bounds teaches you what each costs and when results are final.

                ## Milestones
                1. A stream-to-table enrichment built against a compacted reference topic.
                2. A stream-to-stream join built with an explicit bound, such as payments within 30 minutes of the order.
                3. Behaviour recorded for when reference data changes or one side arrives late.
                4. State size of each join measured and a limit chosen.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Working examples of both join types exist locally, with documented late arrival behaviour and measured state size."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Load a reference table into a compacted topic locally"
                - "Enrich a sample event stream with the reference data"
                - "Join two streams with a 30-minute time bound"
                - "Record what happens when one side arrives after the bound"
            - name: Consumer groups and rebalancing behaviour
              description: |-
                ## Purpose
                Every deploy, scale-out or slow consumer can trigger a rebalance that pauses a whole consumer group, and in a busy group these pauses chain into minutes of lag. Learning how partition assignment works, how cooperative rebalancing and static membership reduce disruption, and which timeouts matter turns mystery lag spikes into settings you can tune.

                ## Milestones
                1. Notes on partition assignment strategies and the timeouts that trigger a rebalance.
                2. A local test showing the lag spike from a rolling deploy with default settings.
                3. The same test repeated with cooperative assignment or static membership, and the difference measured.
                4. Recommended consumer settings written into the team's client defaults.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Team client defaults for assignment strategy and timeouts are documented, backed by a measured before and after rebalance test."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the client documentation on rebalancing and session timeouts"
                - "Measure lag during a rolling restart of a local consumer group"
                - "Repeat with cooperative assignment and compare the pause"
                - "Update the shared client defaults with the chosen settings"
            - name: Backpressure and slow sink handling
              description: |-
                ## Purpose
                When a sink such as a database or an external API slows down, the stream keeps arriving regardless. Understanding how your processor applies backpressure, when it buffers and when it falls over lets you design for the slow afternoon when the warehouse is busy, instead of discovering the limit in production.

                ## Milestones
                1. Notes on how backpressure propagates in your processor and how to observe it.
                2. A local test against an artificially slow sink, with throughput, lag and memory recorded.
                3. A pattern chosen for slow sinks, such as batched writes, bounded async calls or a buffer topic.
                4. Alerts added for sustained backpressure on production jobs.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A slow sink test has been run with results recorded, and every production job alerts on sustained backpressure."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the backpressure metrics your processor exposes"
                - "Run a local job against a sink slowed to a tenth of normal speed"
                - "Choose and document a pattern for slow sinks"
                - "Add a backpressure alert to each production job"
            - name: Idempotent producers and deduplication by event id
              description: |-
                ## Purpose
                Retries after a network blip are the most common source of duplicate events, and they hurt payment and inventory streams most. Turning on idempotent production where the platform supports it, and deduplicating by event id within a bounded window in the processor, removes most duplicates before any consumer has to care.

                ## Milestones
                1. Idempotent producer settings enabled on every producer that supports them.
                2. A deduplication step keyed on event id, with a window sized from observed retry delays.
                3. Duplicate rate measured per topic before and after.
                4. Remaining duplicate sources, such as upstream systems resending, documented.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Measured duplicate rate on the main topics has fallen, with idempotent producers enabled and a documented deduplication window."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure the current duplicate rate on the main topics by event id"
                - "Enable idempotent production on every producer that supports it"
                - "Add a deduplication step with a window sized from real retry delays"
                - "Measure the duplicate rate again and record the change"
            - name: Transactional outbox for reliable event publishing
              description: |-
                ## Purpose
                A service that writes to its database and then publishes an event will eventually do one without the other, leaving consumers with orders that never happened or missing ones that did. The outbox pattern writes the event to a table in the same database transaction, and a relay publishes it, so the database and the stream cannot disagree.

                ## Milestones
                1. Services that write to a database and a topic separately identified.
                2. An outbox table and relay, polling or change data capture, running for one service.
                3. A failure test showing no lost or phantom events when the service crashes mid-request.
                4. A short guide so other services can adopt the same pattern.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One service publishes through an outbox, and a crash test shows database rows and published events match exactly."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Find services that write to a database and publish an event separately"
                - "Add an outbox table to the first service's schema"
                - "Run a relay that publishes outbox rows and marks them sent"
                - "Crash the service mid-request in staging and compare rows with events"
            - name: Late and out-of-order event policy
              description: |-
                ## Purpose
                Mobile apps go offline, partners batch their uploads and clocks drift, so some events will always arrive after their window has closed. Deciding per use case how long to wait, whether late events update results already published or go to a side output, and how users learn about corrections makes numbers explainable instead of mysteriously changing.

                ## Milestones
                1. Lateness measured on real data: the share of events arriving 1, 10 and 60 minutes after their event time.
                2. An allowed lateness chosen per use case, balancing completeness against delay.
                3. A rule for events later than that: update, side output, or drop with a count.
                4. Dashboard users told how and when published figures can still change.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each live use case has a written allowed lateness, a rule for later events and a measured lateness distribution behind it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Measure how late events arrive on the main topics over a week"
                - "Choose an allowed lateness for each use case with its consumer"
                - "Route events later than the limit to a side output with a counter"
                - "Add a note to live dashboards explaining when figures can change"
            - name: Replay and reprocessing procedure
              description: |-
                ## Purpose
                Sooner or later a bug in a processing job will write wrong results for hours or days, and the fix is only half done until the affected period is reprocessed. A tested procedure for resetting offsets or replaying from retained history, isolating the output and swapping it in, turns a frightening weekend into a routine task.

                ## Milestones
                1. A written procedure for replaying a time range into a separate output, including offset reset by timestamp.
                2. Sinks able to accept reprocessed results without duplicating, such as by overwriting partitions or upserting.
                3. One full rehearsal on staging, timed from decision to corrected output.
                4. The procedure linked from the on-call runbooks.

                ## Notes
                Replay only works within retention. If a bug could go unnoticed for longer than your retention, archive raw events to object storage as well.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A replay of at least one day of events has been rehearsed on staging end to end, timed and documented in the runbooks."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write down how to reset a consumer group's offsets to a timestamp"
                - "Make the main sink accept reprocessed results without duplicates"
                - "Rehearse replaying one day of events on staging and time it"
                - "Link the procedure from the on-call runbooks"
            - name: Choosing a stream processing framework
              description: |-
                ## Purpose
                Libraries embedded in your services, cluster-based engines, micro-batch engines and managed streaming SQL each suit different teams and workloads. Comparing two or three against a real use case, including state size, delivery guarantees, language skills and who will operate it, avoids picking the most powerful tool for a job a simpler one would do.

                ## Milestones
                1. Evaluation criteria written: latency, state size, join and window support, guarantees, languages, operating burden and cost.
                2. Two or three frameworks shortlisted for the first real use case.
                3. The same small pipeline built on the top two, with throughput and recovery time measured.
                4. A choice recorded, with the use cases it is not suited to.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A framework decision is recorded with measured throughput and recovery time from a pilot on at least two options."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the weighted evaluation criteria before looking at any tool"
                - "Shortlist two or three frameworks that fit the team's languages"
                - "Build the same small pipeline on the top two and time recovery after a crash"
                - "Record the decision and the workloads it should not be used for"
            - name: Landing streams in the warehouse and lake
              description: |-
                ## Purpose
                Most streams also need to land somewhere for history and analysis, and naive sinks create thousands of tiny files or duplicate rows on every retry. Designing the sink with sensible file sizes or commit intervals, idempotent or transactional commits and a compaction job gives analysts complete, queryable history without slowing the live path.

                ## Milestones
                1. A sink design chosen per stream: table format, partitioning, file size target and commit interval.
                2. Commits that are idempotent or transactional, so retries do not duplicate rows.
                3. A compaction job keeping average file size above the agreed target.
                4. Row counts in the landed tables reconciled with the topic for a test day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The main streams land in the warehouse or lake with no duplicate rows on retry and average file size above the agreed target."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check the current sink's average file size and duplicate row count"
                - "Choose a commit interval and file size target for each stream"
                - "Schedule a compaction job for the landed tables"
                - "Reconcile one day of landed rows against the topic"
            - name: Serving layer for live dashboards
              description: |-
                ## Purpose
                Pointing a live dashboard straight at a warehouse that refreshes every few minutes, or at a processor's internal state, rarely survives real load. Choosing a serving layer, such as a real-time analytical database, a materialised view store or a key-value cache, from measured query patterns, freshness and concurrency gives dashboards sub-second queries on data seconds old.

                ## Milestones
                1. Query patterns for the live dashboards written down: filters, groupings, time ranges and concurrent users.
                2. Two serving options loaded with a day of real events and tested at expected concurrency.
                3. Query latency and data freshness measured for each.
                4. A serving layer chosen and the first live dashboard moved onto it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A serving layer is chosen from measured query latency and freshness tests, and the first live dashboard runs on it."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the queries the live dashboard runs and how many people use it at once"
                - "Load a day of real events into two candidate serving stores"
                - "Measure query latency and freshness under expected concurrency"
                - "Move the first live dashboard onto the chosen store"
            - name: Schema compatibility checks in continuous integration
              description: |-
                ## Purpose
                Finding out at deploy time that the registry rejects your schema wastes a release, and finding out that a compatible change still breaks a consumer's parsing wastes a night. Checking schema changes against the registry and against consumers' sample events in every pull request moves both failures to the moment the change is written.

                ## Milestones
                1. Schemas stored as files in each producer's repository.
                2. A pipeline step that tests each changed schema against the registry's compatibility mode.
                3. Sample events from consumers' tests replayed against the new schema.
                4. Pull requests that fail either check blocked from merging.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every producer repository blocks merges that fail a registry compatibility check against the target environment."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Move each producer's schemas into version-controlled files"
                - "Add a CI step that checks changed schemas against the registry"
                - "Replay sample events from consumer tests against new schemas"
                - "Make both checks required before merge"
            - name: First production streaming pipeline launch
              description: |-
                ## Purpose
                The first pipeline sets the habits everyone else copies, so it deserves a proper launch rather than a quiet switch-on. Defining go-live criteria, running it in shadow beside the existing process, and agreeing who watches it in the first week turns launch day into an observed event with a rollback plan instead of a hope.

                ## Milestones
                1. Go-live criteria agreed: latency objective, reconciliation tolerance, alerts and runbooks in place.
                2. One week of shadow running with outputs compared against the existing process.
                3. A rollback plan written and rehearsed.
                4. Launch completed with a named owner watching the pipeline for its first seven days.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first pipeline is live after meeting written go-live criteria, a week of shadow running and a rehearsed rollback."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the go-live criteria with the pipeline's main consumer"
                - "Run the pipeline in shadow for a week and compare outputs daily"
                - "Rehearse the rollback on staging"
                - "Name the owner who watches the pipeline through its first week"
            - name: Peak traffic load test before a big launch
              description: |-
                ## Purpose
                Product launches, sales and sporting events can push event rates to five or ten times normal within minutes, which is exactly when partitions run hot and consumers fall behind. A load test at the expected peak plus a margin, a few weeks before the date, shows where the pipeline bends while there is still time to add partitions or capacity.

                ## Milestones
                1. Expected peak rate estimated with the product or marketing team, with a 50 percent margin added.
                2. A load test run on a production-like environment at that rate for at least an hour.
                3. Bottlenecks fixed, or accepted with a written mitigation.
                4. A peak-day watch plan with extra monitoring and named people.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A load test at expected peak plus 50 percent ran for an hour within the latency objective before the event date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the launch team for the expected peak and when it lands"
                - "Generate synthetic events at peak rate plus 50 percent on staging"
                - "Fix or document every bottleneck the test exposes"
                - "Repeat the load test ahead of each known traffic peak @recurring(yearly)"
            - name: Broker and client version upgrade
              description: |-
                ## Purpose
                Falling several major versions behind means missing security fixes and eventually facing an upgrade too big to do safely. Planning a rolling broker upgrade, with client libraries checked for compatibility first and a tested rollback point, keeps the platform supported without a big-bang weekend.

                ## Milestones
                1. Current broker and client versions listed, with the target version and its compatibility notes.
                2. Client libraries upgraded or confirmed compatible with the target version.
                3. Staging upgraded and run under normal load for at least a week.
                4. Production upgraded one broker at a time, with under-replicated partitions checked between each.

                ## Notes
                Read every release note between your version and the target, not just the target's. Configuration defaults sometimes change quietly in between.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Brokers and clients are on a supported version, upgraded one broker at a time with no unplanned downtime."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List broker and client library versions across every service"
                - "Read the release notes between your version and the target"
                - "Upgrade staging and leave it running under load for a week"
                - "Check broker and client release notes for security fixes @recurring(monthly:15)"
            - name: Regional failover drill
              description: |-
                ## Purpose
                Until someone has moved producers and consumers onto the replica in a second region and back again, regional resilience is only a plan. A scheduled drill, with offsets translated, consumers resumed at the right place and the time to recover measured, shows whether your stated recovery objectives are real.

                ## Milestones
                1. Recovery time and data loss objectives written for the streaming platform.
                2. A failover procedure covering producers, consumer offsets, the schema registry and DNS or config changes.
                3. A drill completed in a planned window, with recovery time and events lost or duplicated measured.
                4. Gaps from the drill fixed and the procedure updated.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A failover drill has been completed with measured recovery time and data loss compared against written objectives."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the recovery time and data loss objectives with the service owners"
                - "Document how producers, consumers and the registry switch regions"
                - "Run the drill in a planned window and measure recovery"
                - "Book the next failover drill @recurring(yearly)"
            - name: Batch to streaming cutover with a parallel run
              description: |-
                ## Purpose
                Replacing a nightly batch job with a stream changes numbers people already trust, and small differences in late data or time zones will be noticed. Running both side by side for a few weeks, explaining every difference, and only then switching consumers over keeps that trust intact.

                ## Milestones
                1. The batch job's logic documented, including how it treats late and corrected records.
                2. The streaming version running in parallel, writing to separate tables.
                3. Daily comparisons, with every difference over tolerance explained.
                4. Consumers switched over and the batch job retired after sign-off.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The batch job is retired after at least two weeks of parallel running, with every difference over tolerance explained."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Document how the batch job handles late and corrected records"
                - "Run the streaming version in parallel into separate tables"
                - "Compare outputs daily and log the cause of each difference"
                - "Switch consumers and retire the batch job after sign-off"
            - name: Solo engineer's first streaming feature on a managed service
              description: |-
                ## Purpose
                At a startup the one backend or data engineer often gets asked for a live feature, such as an activity feed or a fraud flag, with no platform team behind them. Picking a fully managed stream, one simple processor and a small set of alerts, and deliberately skipping self-hosting, gets the feature live without becoming a full-time cluster operator.

                ## Milestones
                1. A managed stream and processor chosen that need no servers to patch.
                2. One pipeline live, with lag and error alerts reaching your phone.
                3. A short runbook so someone else can restart it while you are away.
                4. A list of things deliberately left out for now, such as multi-region and exactly-once sinks.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One managed streaming pipeline is live with lag and error alerts and a runbook that another person has read."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Note the limits and pricing of the managed stream your cloud provider offers"
                - "Build the single pipeline the feature needs"
                - "Route lag and error alerts to your phone"
                - "Ask the agent to draft a half-page restart runbook from your notes"
                - "List what you are deliberately not building yet"
            - name: Inheriting an undocumented streaming cluster
              description: |-
                ## Purpose
                Taking over a cluster from someone who has left, with topics nobody can explain and consumers running on a forgotten virtual machine, is one of the riskiest positions in data engineering. Spending the first weeks mapping what exists, finding the single points of failure and fixing the scariest few, before changing anything else, keeps you from breaking a pipeline you did not know existed.

                ## Milestones
                1. A map of brokers, topics, producers and consumers built from the cluster's own metadata and logs.
                2. Every consumer group traced to a running process and an owning team.
                3. A risk register listing single points of failure, missing backups and expiring certificates.
                4. The three highest risks fixed or given a dated plan.

                ## Notes
                Start from the **Risk register** template. Change nothing in the first two weeks unless it is actually failing.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cluster map and risk register exist within six weeks, and the top three risks are fixed or scheduled."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Export topics, consumer groups and connected clients from the cluster"
                - "Trace each consumer group to a running process and an owner"
                - "Record single points of failure and expiring certificates in a risk register"
                - "Ask the agent to draft a cluster overview for the team from your notes"
            - name: Onboarding an engineer to the streaming platform
              description: |-
                ## Purpose
                Offsets, rebalances and watermarks do not exist in request-and-response services, and new engineers often meet them for the first time during an incident. A structured first 90 days, with the local stack, a shadowed on-call week and a small real change shipped, gets someone safely onto the rotation.

                ## Milestones
                1. A reading list and local stack exercise completed in the first two weeks.
                2. A small real change, such as a new alert or schema field, shipped in the first month.
                3. A shadowed on-call week completed before joining the rotation.
                4. A 90-day review in which the new engineer says what the docs got wrong.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The new engineer has shipped a change, shadowed one on-call week and joined the rotation within 90 days."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a starter change the new engineer can ship in the first month"
                - "Pair through the local stack and one runbook in week one"
                - "Schedule a shadow on-call week before they join the rotation"
                - "Hold a 90-day review and fix the docs they found wrong"
            - name: Streaming personal and regulated data
              description: |-
                ## Purpose
                Payment, health and customer events often carry personal data into a log that keeps it for days, replicates it to other regions and copies it into every consumer. Classifying fields, keeping personal data out of event keys, encrypting or tokenising sensitive fields and agreeing how deletion requests apply to retained events keeps the platform defensible in an audit.

                ## Milestones
                1. Personal and regulated fields identified in every topic's schema.
                2. Personal data removed from event keys and topic names.
                3. Sensitive fields encrypted or tokenised at the producer, with key access limited.
                4. A written approach, agreed with your privacy lead, for deletion requests against retained and compacted topics.

                ## Notes
                This organises the engineering work. What the law requires comes from your privacy lead or counsel, not from this list.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every topic carrying personal data is classified, keeps it out of keys, and has a deletion approach agreed with the privacy lead."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Tag personal and regulated fields in each topic's schema"
                - "Remove personal data from event keys and topic names"
                - "Agree with your privacy lead how deletion requests apply to retained events"
                - "Review access logs for topics carrying personal data @recurring(quarterly)"
            - name: Device and sensor telemetry ingestion
              description: |-
                ## Purpose
                Sensors, vehicles and machines send small messages over unreliable networks, often with wrong clocks and in bursts after reconnecting. Designing ingestion for that reality, with a lightweight device protocol bridged into the stream, device timestamps checked for skew and buffering for offline periods, keeps telemetry dashboards and alerts honest.

                ## Milestones
                1. A device protocol and gateway chosen, such as MQTT bridged into the event stream.
                2. Event time taken from the device, with clock skew measured and a rule for implausible timestamps.
                3. Reconnection bursts tested so a fleet coming back online does not overwhelm consumers.
                4. Per-device health, such as last seen and message rate, visible on one dashboard.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Telemetry flows from devices through a gateway into the stream, with measured clock skew handling and a tested reconnection burst."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List device types, message rates and how often they lose connection"
                - "Bridge the device protocol into the event stream through one gateway"
                - "Measure device clock skew and set a rule for implausible timestamps"
                - "Simulate a thousand devices reconnecting at once"
            - name: Self-service streaming platform for other teams
              description: |-
                ## Purpose
                Once several teams want topics, every request through one platform engineer becomes a queue and every hand-made topic a snowflake. Offering topic creation, access requests and quotas through reviewed code with sensible defaults lets product teams move without waiting, while the platform team keeps naming, retention and access consistent.

                ## Milestones
                1. Topics, schemas and access defined as code in a shared repository with review.
                2. Defaults for partitions, retention and replication applied automatically.
                3. Per-team quotas on throughput and storage enforced.
                4. A monthly review of requests, quota use and exceptions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Product teams create topics and request access through reviewed code with enforced defaults and quotas, and no topic was created by hand last month."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Move existing topic and access definitions into a shared repository"
                - "Write default partition, retention and replication settings into the definitions"
                - "Set throughput and storage quotas per team"
                - "Review provisioning requests and quota usage @recurring(monthly:28)"
            - name: Streaming aggregates for online model features
              description: |-
                ## Purpose
                Models that score transactions or recommendations in real time often need inputs like spend in the last ten minutes, computed from the stream and served in milliseconds. Building those aggregates in the stream and checking them against an offline recomputation is where most real-time feature bugs are caught, before a model quietly scores on wrong inputs.

                ## Milestones
                1. The rolling aggregates the model needs written down with window, key and allowed staleness.
                2. A streaming job writing those aggregates to the online store.
                3. An offline recomputation of the same aggregates for a sample of keys.
                4. A weekly comparison, with mismatches over tolerance investigated.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Streaming feature values match an offline recomputation within the agreed tolerance for a sampled set of keys each week."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List each streaming feature with its window, key and allowed staleness"
                - "Build the job that writes the aggregates to the online store"
                - "Recompute the same features offline for a sample of keys"
                - "Compare online and offline feature values for sampled keys @recurring(weekly:wed)"
            - name: Complex event pattern detection
              description: |-
                ## Purpose
                Some of the most valuable streaming use cases look for sequences rather than totals: three failed logins then a password reset, a card used in two countries within an hour, a machine overheating after a pressure drop. Matching patterns across events within time bounds needs careful state design and testing against labelled history, or it floods people with false alarms.

                ## Milestones
                1. Two or three patterns specified precisely, with keys, sequence and time bounds.
                2. The patterns implemented with bounded state per key.
                3. Patterns replayed over a month of labelled history, with hits, misses and false alarms counted.
                4. An acceptable false alarm rate agreed with the team that acts on the matches.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "At least two event patterns run in production after a replay over labelled history, with a measured false alarm rate agreed with the acting team."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Write each pattern as a sequence with keys and time bounds"
                - "Implement the first pattern with a state limit per key"
                - "Replay a month of history and count hits, misses and false alarms"
                - "Agree an acceptable false alarm rate with the team that responds"
            - name: Multi-region replication and offset translation
              description: |-
                ## Purpose
                Replicating topics to another region for disaster recovery, data residency or local reads raises hard questions: which side is authoritative, how consumers find their place after failover and how to stop events looping between clusters. Designing the topology deliberately, active-passive or active-active, and testing offset translation is advanced work worth finishing before a drill depends on it.

                ## Milestones
                1. A replication topology chosen with its reasons: which topics replicate, in which direction and why.
                2. Replication lag monitored per topic, with an alert.
                3. Consumer offset translation tested, so consumers resume within a known number of events after switching.
                4. Loop prevention and naming for replicated topics documented.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Replicated topics have monitored replication lag, and consumers have resumed after switching within a documented number of events."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Decide which topics need replication and in which direction"
                - "Set up replication for one topic and monitor its lag"
                - "Switch a test consumer to the replica and measure how far it rewinds"
                - "Document naming and loop prevention for replicated topics"
            - name: Event log as a long-term system of record
              description: |-
                ## Purpose
                Some teams keep events for years, using tiered storage or an archive, so that any downstream view can be rebuilt from full history and audits can see exactly what happened. Treating the log as a system of record, as event sourcing does, brings real benefits and real duties: schema history that must stay readable, deletion obligations and rebuild times that keep growing.

                ## Milestones
                1. Topics that need long retention identified with the reason, such as audit or rebuilding views.
                2. Tiered storage or an archive configured, with the yearly cost estimated.
                3. A full rebuild of one downstream view from history, timed.
                4. Old schema versions confirmed readable by current consumers or by a documented upgrade step.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A long retention decision is recorded for each candidate topic, with a timed rebuild of one view from full history."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List topics where years of history would justify the cost"
                - "Estimate yearly storage cost with tiered storage or an archive"
                - "Rebuild one downstream view from full history and time it"
                - "Check that the oldest schema versions still deserialise with current code"
---

# Real-Time Streaming Data

This area is for engineers building pipelines that process events as they happen, for live dashboards, alerts and features where minutes of delay really matter. It starts with foundations (the latency decision, topic conventions, platform choice, event envelope, schemas, partitioning and access), moves through the operating routines that keep a streaming platform healthy and the core ideas worth learning properly, such as watermarks, windows, delivery guarantees and state, then covers improvements, dated launches, upgrades and drills, situations from a solo startup engineer to a platform team, and specialist work like pattern detection and multi-region replication.

The rhythms are a weekly lag alert review, dead letter triage, reconciliation check and on-call handover, monthly capacity, cost, latency, schema, incident and release note reviews, quarterly access and credential rotation, and yearly failover drills and retention checks. The Purchase decision, Operational checklist, Metrics log, Remediation plan, Risk register and Onboarding 30/60/90 templates pair with individual projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
