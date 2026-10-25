---
id: software-engineering.distributed-systems-scaling
name: Distributed Systems Scaling
description: "Known bottlenecks and ceilings, a growth forecast, caches, queues, replicas and shards that hold up under load, and consistency and failure handled on purpose as users and data multiply."
category: business
version: 1.0.0
tags: [software-engineering, distributed-systems-scaling, engineer, enterprise, caching, sharding, replication, consistency]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - reading-queue
    - vendor
    - operational-checklist
    - skills-matrix
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Distributed Systems Scaling
          description: "Scaling systems to more users and data with caching, queues, sharding, replication and careful handling of consistency and failure."
          projects:
            - name: Scaling bottleneck inventory for the current system
              description: |-
                ## Purpose
                Every system has one resource that will run out first, and it is rarely the one the team argues about. Listing each tier, its current utilisation at peak and the resource it would exhaust (CPU, connections, disk IOPS, lock contention, a single-threaded worker) turns vague worry about scale into a short, ranked list of things to fix in order.

                ## Milestones
                1. Every tier from load balancer to storage listed with its peak utilisation over the last 30 days.
                2. The limiting resource for each tier named, with the number it would hit at failure.
                3. The three tiers closest to their ceiling ranked by how soon they would fail at current growth.
                4. The inventory saved beside the architecture docs with the date it was measured.

                ## Notes
                Measure at the busiest hour of the busiest day, not the daily average. A database at 40 percent average can sit at 95 percent for twenty minutes every Monday morning.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated inventory lists every tier, its peak utilisation and limiting resource, with the three nearest ceilings ranked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export peak hour CPU, memory, connection and IOPS figures for each tier"
                - "Name the resource each tier would run out of first"
                - "Rank the three tiers closest to their ceiling"
                - "Save the dated inventory next to the architecture diagrams"
            - name: Twelve-month growth forecast for traffic and data
              description: |-
                ## Purpose
                Scaling work done without a forecast is either too early and wasted, or too late and done during an outage. A simple model of requests per second, stored data and write volume over the next year, built from past growth and the sales or product plan, tells you which ceilings you will actually reach and roughly when.

                ## Milestones
                1. Twelve months of history gathered for peak requests per second, total stored data and daily writes.
                2. Known future drivers listed: launches, new markets, large customers, seasonal peaks.
                3. A forecast with a low, expected and high line for each of the three measures.
                4. The month each tier crosses its ceiling marked against the bottleneck inventory.

                ## Notes
                Data volume usually grows faster than traffic, because nothing is ever deleted. Forecast both.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A forecast sheet shows low, expected and high lines for traffic, data and writes, with the expected month each ceiling is reached."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull twelve months of peak traffic, storage and write volume"
                - "Ask product and sales for launches and large customers due this year"
                - "Build low, expected and high forecast lines in a spreadsheet"
                - "Mark the month each tier is expected to reach its ceiling"
            - name: Stateless application tier so instances can be added freely
              description: |-
                ## Purpose
                Adding servers only helps if any request can land on any server. Sessions held in memory, files written to local disk, in-process caches that must agree and scheduled jobs that run on every node all quietly pin users or work to one instance, so horizontal scaling breaks the first time it is tried.

                ## Milestones
                1. Every piece of per-instance state found: sessions, uploads, local caches, cron jobs, sticky routing.
                2. Sessions and uploads moved to shared stores such as a key value store and object storage.
                3. Scheduled jobs running once per cluster through a lock or a dedicated scheduler.
                4. An instance killed at random in staging with no user-visible errors.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Any application instance can be terminated mid-traffic in staging without lost sessions, lost uploads or duplicated scheduled jobs."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Search the codebase for local disk writes, in-memory sessions and node cron jobs"
                - "Move session storage to a shared key value store"
                - "Make scheduled jobs take a cluster-wide lock before running"
                - "Terminate a random staging instance under test traffic and check for errors"
            - name: Read and write path map for the busiest requests
              description: |-
                ## Purpose
                Scaling choices depend on whether the hot traffic reads or writes, and what each request touches on the way. Tracing the ten busiest request types end to end, with every cache, database, queue and downstream call they hit, shows which paths a cache or replica could absorb and which ones need partitioning.

                ## Milestones
                1. The ten request types with the highest peak volume identified from traffic data.
                2. Each one drawn from edge to storage, with every hop and its typical latency.
                3. The read to write ratio recorded for each path.
                4. Paths marked as cacheable, replica-safe or write-bound.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A diagram covers the ten busiest request types end to end, each labelled with read to write ratio and cacheable, replica-safe or write-bound."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the ten request types with the highest peak volume"
                - "Use traces to record every hop each one makes"
                - "Calculate the read to write ratio for each path"
                - "Label each path cacheable, replica-safe or write-bound"
            - name: Consistency requirements for each business entity
              description: |-
                ## Purpose
                Not all data needs the same guarantees: an account balance or stock count must never go backwards, while a like counter or a feed can be seconds stale without harm. Writing down, entity by entity, how stale a read may be and what must never be lost lets the team use replicas, caches and async writes where they are safe and nowhere else.

                ## Milestones
                1. Core entities listed, such as accounts, orders, inventory, profiles and activity.
                2. For each one, the maximum acceptable staleness and whether a lost write is tolerable.
                3. Entities needing read-your-writes or strictly ordered updates flagged.
                4. The table agreed with product owners and linked from the design docs.

                ## Notes
                Ask product owners in plain terms: what happens if a user sees this value from ten seconds ago? Their answers matter more than the theory.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agreed table gives each core entity a staleness limit, a lost-write tolerance and any ordering or read-your-writes need."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the core business entities the system stores"
                - "Ask each product owner how stale each entity may safely be"
                - "Flag entities that need read-your-writes or strict ordering"
                - "Publish the agreed table beside the design docs"
            - name: Register of known scaling ceilings
              description: |-
                ## Purpose
                Hard limits hide everywhere: a cloud account quota, a 32-bit ID column, a queue partition count fixed at creation, a database at its largest instance size. Keeping them in one register, each with its current value, the limit and the lead time to raise it, means nobody learns about one during an incident.

                ## Milestones
                1. Provider quotas, ID column widths, partition counts, instance size caps and licence limits listed.
                2. Each entry showing current usage, the hard limit and the lead time to raise it.
                3. An owner and a warning threshold set for every entry.
                4. Entries above 60 percent of their limit given a dated action.

                ## Notes
                Start from the **Risk register** template. Integer primary keys and fixed partition counts are the two ceilings teams most often discover too late.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every known hard limit with usage, limit, owner and lead time, and each entry above 60 percent has a dated action."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export current quotas from each cloud account"
                - "Check the width and current maximum of every integer primary key"
                - "Record partition counts for each queue and stream"
                - "Give every entry above 60 percent an owner and a dated action"
                - "Review usage against every ceiling in the register @recurring(quarterly)"
            - name: Headroom targets for every tier
              description: |-
                ## Purpose
                Running every tier at 90 percent looks efficient until one zone fails and the survivors have nowhere to put the load. Agreeing how much spare capacity each tier keeps, sized so the loss of one zone or one node still leaves the rest under their limits, gives scaling decisions a clear trigger instead of a gut feel.

                ## Milestones
                1. The failure each tier must survive written down, such as one zone or two nodes.
                2. A headroom target per tier calculated from that failure, for example peak below 60 percent across three zones.
                3. Alert thresholds set at the headroom line rather than near failure.
                4. Targets agreed with whoever owns the infrastructure budget.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each tier has a written headroom target derived from a named failure case, with alerts set at that line and budget sign-off recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name the failure each tier must survive without degrading"
                - "Calculate the peak utilisation each tier can carry with that failure"
                - "Move utilisation alerts to the headroom line"
                - "Agree the extra cost of the headroom with the budget owner"
                - "Revisit each headroom target against the past year of failures @recurring(yearly)"
            - name: Autoscaling policy for the stateless tiers
              description: |-
                ## Purpose
                Autoscaling on CPU alone often reacts minutes too late, scales on the wrong signal or flaps up and down every few minutes. A deliberate policy, with the right metric for each service, a sensible minimum, a cool-down and a cap that protects the database behind it, makes added capacity arrive before users notice.

                ## Milestones
                1. The scaling signal chosen per service: CPU, request concurrency, queue depth or a custom metric.
                2. Minimum and maximum instance counts set, with the maximum sized to what the database can take.
                3. Scale-out and scale-in cool-downs tuned so the tier does not flap.
                4. A traffic ramp in staging showing new instances serving before latency rises past target.

                ## Notes
                The maximum matters as much as the minimum: unlimited app instances can open enough connections to take the database down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each stateless service has a written autoscaling policy with signal, bounds and cool-downs, verified by a staging ramp that holds latency within target."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose the scaling signal for each stateless service"
                - "Cap maximum instances at what the database connection limit allows"
                - "Set scale-in cool-downs long enough to stop flapping"
                - "Ramp traffic in staging and record when new instances start serving"
            - name: Single points of failure in the data layer
              description: |-
                ## Purpose
                Application servers are usually redundant long before the things behind them are. A lone primary database, a single cache node holding sessions, one message broker or a cron box under someone's desk can each take the whole product down, and listing them is the first step to removing them in a sensible order.

                ## Milestones
                1. Every database, cache, broker, scheduler and search node listed with its redundancy.
                2. Each single point of failure given a likely outage length if it died.
                3. A ranked plan to make the top three redundant, with rough effort.
                4. The ranked list reviewed with the on-call team.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list names every data-layer single point of failure with expected outage length, and the top three have a ranked redundancy plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every stateful component and whether it has a standby"
                - "Estimate how long recovery would take for each one if it failed"
                - "Rank the three worst and sketch how to make each redundant"
                - "Walk the on-call team through the ranked list"
            - name: Monthly capacity headroom review
              description: |-
                ## Purpose
                Headroom erodes quietly as features ship and customers arrive, so a figure that was comfortable in spring can be gone by autumn. A short monthly look at peak utilisation against each tier's target, beside the forecast, catches the trend early enough to scale calmly.

                ## Milestones
                1. A standing monthly slot with the people who own each tier.
                2. Peak utilisation per tier compared against its headroom target each month.
                3. The forecast updated with actual growth each month.
                4. Any tier forecast to breach its target within 90 days given an owner and a plan.

                ## Notes
                Start from the **Metrics log** template and keep one row per tier per month, so trends are visible at a glance.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log has a monthly row per tier for the last six months, and every tier forecast to breach within 90 days has a named owner."
                cadence: rolling
              tasks:
                - "Set up a metrics log with one row per tier per month"
                - "Compare peak utilisation with headroom targets and update the forecast @recurring(monthly:9)"
                - "Assign an owner to any tier forecast to breach within 90 days"
            - name: Cache hit ratio and eviction review
              description: |-
                ## Purpose
                Caches drift: new endpoints bypass them, key formats change, memory fills and evictions climb until the database is quietly taking the load the cache was meant to absorb. Checking hit ratio, eviction rate and memory per cache once a month spots a cache that has stopped earning its keep before the database feels it.

                ## Milestones
                1. Hit ratio, eviction rate and memory use recorded per cache cluster.
                2. A target hit ratio agreed for each cache, based on what the database behind it can absorb.
                3. Keys with no expiry or very large values identified.
                4. Any cache under target given a cause and a fix.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each cache has a target hit ratio, and monthly figures for hit ratio, evictions and memory are recorded with causes noted for any miss."
                cadence: rolling
              tasks:
                - "Agree a target hit ratio for each cache cluster"
                - "Record hit ratio, evictions and memory for each cache @recurring(monthly:14)"
                - "Sample keys for missing expiry and oversized values"
                - "Open a ticket for any cache running below its target"
            - name: Consumer lag and queue depth watch
              description: |-
                ## Purpose
                A queue hides trouble well: producers keep succeeding while consumers fall hours behind, and the first sign is a customer asking why their email never arrived. A weekly look at lag, depth and oldest message age per queue, against an agreed limit, catches slow consumers while there is still time to add workers.

                ## Milestones
                1. Every queue and stream listed with its consumers and an owner.
                2. A maximum acceptable lag or oldest message age agreed per queue.
                3. Alerts firing when a queue crosses that limit, routed to its owner.
                4. A weekly check recording the worst lag on each queue.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every queue has an owner, an agreed lag limit and an alert, and weekly worst-lag figures exist for the past two months."
                cadence: rolling
              tasks:
                - "List every queue and stream with its consumers and owner"
                - "Agree a maximum oldest message age for each queue"
                - "Route a lag alert for each queue to its owner"
                - "Record the worst consumer lag on each queue for the week @recurring(weekly:mon)"
            - name: Replication lag and replica health review
              description: |-
                ## Purpose
                Read replicas that fall behind serve stale data, and replicas that silently stop replicating serve data from last week. A monthly look at lag percentiles, replication errors and the queries that cause lag spikes, measured against the staleness limits in the consistency table, keeps reads from replicas honest.

                ## Milestones
                1. Replication lag graphed per replica at median and worst case.
                2. Lag compared against the staleness limits agreed for the entities read from each replica.
                3. The large transactions or schema changes behind each lag spike identified.
                4. An alert in place for replicas that stop replicating altogether.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly lag figures per replica are recorded against agreed staleness limits, and a stopped-replication alert exists and has been tested."
                cadence: rolling
              tasks:
                - "Add an alert for any replica that stops replicating"
                - "Review lag per replica against the staleness limits @recurring(monthly:21)"
                - "Trace the biggest lag spike of the month to its cause"
            - name: Shard balance and hot partition review
              description: |-
                ## Purpose
                Shards that started even rarely stay that way: one large customer, a popular product or a time-based key slowly concentrates load on a few partitions. A quarterly comparison of size, traffic and growth per shard shows imbalance while it can still be fixed by moving a few tenants rather than a full reshard.

                ## Milestones
                1. Data size, request rate and growth rate tabulated per shard or partition.
                2. Any shard carrying more than twice the median load flagged.
                3. The tenants or keys driving each flagged shard identified.
                4. A move, split or no-action decision recorded for each flagged shard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly table shows size, traffic and growth per shard, and every shard above twice the median has a recorded decision."
                cadence: cyclic
              tasks:
                - "Build a table of size, traffic and growth for every shard"
                - "Compare shards against the median and flag outliers @recurring(quarterly)"
                - "Find the tenants or keys behind each flagged shard"
                - "Record a move, split or leave decision per flagged shard"
            - name: Weekly hot key and noisy tenant report
              description: |-
                ## Purpose
                One celebrity account, viral item or misbehaving integration can push one cache key or one tenant to a hundred times normal traffic and saturate a node while the cluster average looks fine. A short weekly report of the top keys and tenants by request share shows these concentrations before they become an incident.

                ## Milestones
                1. Request counts sampled per cache key and per tenant.
                2. A weekly top-twenty list for each, with share of total traffic.
                3. A threshold agreed above which a key or tenant gets special handling.
                4. Repeat offenders given a fix, such as key splitting, local caching or a quota.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly top-twenty report of keys and tenants by traffic share exists, and every repeat offender above the threshold has a fix recorded."
                cadence: rolling
              tasks:
                - "Turn on key sampling in the cache or proxy layer"
                - "Publish the top twenty keys and tenants by traffic share @recurring(weekly:thu)"
                - "Agree the traffic share that triggers special handling"
                - "Choose a fix for each key or tenant that appears three weeks running"
            - name: Rate limit and quota tuning cycle
              description: |-
                ## Purpose
                Rate limits set once at launch end up either too loose to protect anything or so tight they block your best customers. Reviewing rejections, near misses and per-client usage each month keeps limits matched to what the backend can serve and what paying clients actually need.

                ## Milestones
                1. Rate limits listed per endpoint and client tier, with the reasoning for each.
                2. Monthly counts of rejected requests per client and endpoint.
                3. Limits that rejected legitimate traffic, or never fired, adjusted.
                4. Clients told in advance of any limit change that affects them.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each endpoint and client tier has a documented limit, and monthly rejection counts are reviewed with any change communicated before it takes effect."
                cadence: rolling
              tasks:
                - "Document every rate limit with the reason it was set"
                - "Review rejected and near-limit requests per client @recurring(monthly:26)"
                - "Adjust limits that block legitimate use or never trigger"
                - "Tell affected clients before a limit change goes live"
            - name: Replica promotion rehearsal on a schedule
              description: |-
                ## Purpose
                Having a standby database is only half the job; promoting it under pressure is where teams find the stale connection strings, the forgotten DNS TTL and the replica that was three hours behind. Rehearsing promotion each quarter in a production-like environment keeps the runbook current and the recovery time known.

                ## Milestones
                1. A written promotion runbook covering detection, promotion, client redirection and rebuilding the old primary.
                2. A rehearsal completed in staging with the time for each step recorded.
                3. Data loss measured as the replication lag at the moment of promotion.
                4. Runbook fixes made from what went wrong in the rehearsal.

                ## Notes
                Start from the **Operational checklist** template. Rehearse with whoever is next on call, not the person who wrote the runbook.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter has a recorded promotion rehearsal with step timings and data loss, and the runbook shows a revision after each one."
                cadence: cyclic
              tasks:
                - "Write the promotion runbook from detection to rebuild"
                - "Rehearse a replica promotion in staging and time each step @recurring(quarterly)"
                - "Measure how much data the promotion would have lost"
                - "Update the runbook with what went wrong"
            - name: Scaling incident pattern log
              description: |-
                ## Purpose
                Load-related incidents tend to repeat in a handful of shapes: retry storms, cache stampedes, connection exhaustion, a hot partition, a queue backlog. Tagging each incident by pattern and reviewing the tally monthly shows which shape keeps coming back, so design time goes to the cause rather than the latest symptom.

                ## Milestones
                1. A short list of scaling failure patterns agreed for tagging.
                2. Every load-related incident from the past six months tagged with its pattern.
                3. A monthly tally showing which patterns recur.
                4. The most frequent pattern given a design fix on the roadmap.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Load-related incidents for six months are tagged by pattern, and the most frequent pattern has a design fix scheduled."
                cadence: rolling
              tasks:
                - "Agree eight or so scaling failure pattern tags"
                - "Tag the past six months of load-related incidents"
                - "Tally new incidents by pattern and note any repeat @recurring(monthly:3)"
                - "Put a design fix for the top pattern on the roadmap"
            - name: Consistency models from linearisable to eventual
              description: |-
                ## Purpose
                Vendors and colleagues use words like strong, eventual, causal and read-your-writes loosely, and the differences decide whether a user sees a double charge. Working through the main models with concrete anomalies (stale reads, lost updates, write skew) gives you the vocabulary to read a database's guarantees and spot when they do not match what the code assumes.

                ## Milestones
                1. Linearisability, sequential, causal, read-your-writes and eventual consistency each explained in your own words.
                2. One concrete anomaly written up for each weaker model.
                3. The isolation levels of your main database mapped to the anomalies they allow.
                4. One place in your own code found that assumes a stronger guarantee than it gets.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes define five consistency models with an anomaly each, map your database's isolation levels to them and name one mismatch in your code."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Read an introductory chapter on consistency models and take notes"
                - "Write an example anomaly for each weaker model"
                - "Map your database's isolation levels to the anomalies they permit"
                - "Find one code path that assumes more consistency than it has"
            - name: CAP and PACELC applied to your own data stores
              description: |-
                ## Purpose
                CAP is quoted constantly and applied rarely; the more useful question is what each store does during a partition and what it trades between latency and consistency the rest of the time. Classifying each store you run against PACELC, from its documentation and configuration, replaces slogans with facts about your own system.

                ## Milestones
                1. The CAP and PACELC framings summarised on one page.
                2. Every data store you run classified for partition behaviour and normal-time trade-off.
                3. Configuration settings that change the classification noted, such as quorum or write concern.
                4. Any store whose real behaviour surprises the team written up.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page table classifies every data store in use under PACELC, with the configuration settings that change each answer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise CAP and PACELC on one page"
                - "Classify each data store from its documentation and current config"
                - "Note the settings that change each store's behaviour"
                - "Share the table and the surprises with the team"
            - name: Partitioning and consistent hashing practice
              description: |-
                ## Purpose
                Range, hash and directory-based partitioning each fail differently: ranges create hot spots, naive hashing reshuffles everything when a node is added, directories add a lookup on every request. Building a small consistent hashing ring with virtual nodes, and measuring key movement as nodes join and leave, makes the trade-offs concrete before you choose a shard key for real.

                ## Milestones
                1. Range, hash and directory partitioning compared in a short written note.
                2. A consistent hashing ring with virtual nodes implemented in a few hundred lines.
                3. Key movement measured when adding and removing a node, against naive modulo hashing.
                4. The effect of virtual node count on balance recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working consistent hashing ring exists with measurements of key movement and balance compared against modulo hashing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a note comparing range, hash and directory partitioning"
                - "Implement a consistent hashing ring with virtual nodes"
                - "Measure how many keys move when a node is added"
                - "Chart balance across nodes for different virtual node counts"
            - name: Single leader, multi-leader and leaderless replication
              description: |-
                ## Purpose
                The replication model under a database decides what happens on failover, how writes conflict and how stale reads can get. Studying single-leader, multi-leader and leaderless quorum replication side by side, then running a small cluster of each kind, turns marketing claims into behaviour you have seen.

                ## Milestones
                1. The three models compared on write path, failover, conflict handling and read staleness.
                2. Synchronous, semi-synchronous and asynchronous replication explained with their data loss windows.
                3. A small local cluster of at least two kinds run and a node failed on purpose.
                4. Quorum settings tried and their effect on stale reads observed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes compare three replication models, and a local experiment records behaviour after a node failure and under two quorum settings."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Compare the three replication models in a one-page table"
                - "Note the data loss window for each synchronisation mode"
                - "Run a small local cluster and kill the leader"
                - "Try two quorum settings and record stale read rates"
            - name: Consensus and leader election with Raft
              description: |-
                ## Purpose
                Leader election, distributed locks and configuration stores all rest on consensus, and misusing them causes split-brain outages that are miserable to debug. Working through the Raft paper and its visualisations, then tracing how your coordination service elects a leader and fences an old one, makes it clear when a lock is safe and when it needs a fencing token.

                ## Milestones
                1. The Raft paper read with notes on terms, log replication and elections.
                2. An election and a network partition stepped through in an interactive visualisation.
                3. The coordination service your stack uses mapped to the Raft concepts.
                4. Every distributed lock in your code checked for fencing or lease expiry handling.

                ## Notes
                A lock without a fencing token is only advisory: a paused process can wake up and write after its lease has gone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Raft notes exist, the coordination service is mapped to them, and each distributed lock in the code is recorded as fenced or not."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the Raft paper and note how elections work"
                - "Step through a partition in a Raft visualisation"
                - "Map your coordination service to terms, leases and fencing"
                - "List every distributed lock and whether it uses a fencing token"
            - name: Clocks, ordering and causality across machines
              description: |-
                ## Purpose
                Wall clocks on different machines disagree by milliseconds or more, so ordering events by timestamp silently reorders them and last-write-wins quietly drops data. Learning Lamport clocks, vector clocks and hybrid logical clocks, then checking where your code compares timestamps across hosts, prevents a class of bug that only appears under load.

                ## Milestones
                1. Clock drift and skew explained, with the drift observed on your own hosts.
                2. Lamport, vector and hybrid logical clocks implemented as small examples.
                3. Every place the code orders or deduplicates by wall-clock time across machines listed.
                4. Each of those places judged safe or given a fix.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Small working examples of three logical clock types exist, and every cross-host timestamp comparison in the code is judged safe or ticketed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check the clock offset reported on a sample of production hosts"
                - "Implement Lamport and vector clocks in a short script"
                - "Search the code for cross-host ordering by timestamp"
                - "Ticket each unsafe use of last-write-wins"
            - name: Queueing theory and backpressure basics
              description: |-
                ## Purpose
                Latency climbs slowly and then explodes as utilisation approaches 100 percent, which is why a service fine at 70 percent falls over at 85. Learning Little's law, the utilisation curve and the main backpressure techniques (bounded queues, credit-based flow, rejecting early) explains your own graphs and tells you where to put limits.

                ## Milestones
                1. Little's law applied to one real service to check its concurrency figures.
                2. The latency against utilisation curve plotted for a simple queue model.
                3. Bounded queues, blocking producers, dropping and credit-based flow compared in notes.
                4. Every unbounded queue or buffer in one service found.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked Little's law check on a real service, a plotted utilisation curve and a list of unbounded queues in one service exist."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Apply Little's law to one service's arrival rate and latency"
                - "Plot latency against utilisation for a single-server queue model"
                - "Write notes on four backpressure techniques"
                - "Find every unbounded queue and buffer in one service"
            - name: Distributed systems reading list
              description: |-
                ## Purpose
                Around a dozen papers and a couple of books explain most of what goes wrong at scale, from the Dynamo and Spanner papers to the classic fallacies of distributed computing. Working through a curated list at one item a fortnight builds the background that makes design reviews and vendor claims easier to judge.

                ## Milestones
                1. A list of ten to fifteen papers, books and talks chosen and ordered.
                2. One item finished every two weeks with a short summary.
                3. Each summary ending with one implication for your own system.
                4. Two of the summaries presented to the team.

                ## Notes
                Start from the **Reading queue** template. A sensible core: the fallacies of distributed computing, Dynamo, Bigtable, Spanner, Raft and a book on data-intensive applications.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least ten items from the list are summarised, each with one implication for your system, and two have been presented to the team."
                cadence: rolling
              tasks:
                - "Set up the reading queue with ten to fifteen items in order"
                - "Finish the current item and write its summary with one implication @recurring(monthly:16)"
                - "Present two summaries at a team session"
            - name: Read replicas for read-heavy endpoints
              description: |-
                ## Purpose
                When reads outnumber writes ten to one, routing safe reads to replicas can remove most of the load on the primary. The hard part is choosing which reads are safe given replication lag, and handling the user who writes and then immediately reads their own change.

                ## Milestones
                1. Endpoints classed as replica-safe from the consistency table and read path map.
                2. A routing layer sending replica-safe reads to replicas, with the primary as fallback.
                3. Read-your-writes handled, for example by pinning a user to the primary briefly after a write.
                4. Primary read load measured before and after the change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Replica-safe reads are routed to replicas with read-your-writes handled, and primary read load shows a measured drop."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Mark endpoints replica-safe using the consistency table"
                - "Add read routing to replicas with fallback to the primary"
                - "Pin a user's reads to the primary for a few seconds after a write"
                - "Compare primary read load before and after routing"
            - name: Shared cache tier with clear invalidation rules
              description: |-
                ## Purpose
                Per-instance caches stop working once there are thirty instances, each holding a different stale copy. Moving hot data to a shared cache tier, with a written rule for how each kind of entry is invalidated or expired, gives consistent reads and a cache that absorbs load for the whole fleet.

                ## Milestones
                1. Cached data types listed with the invalidation rule for each: expiry, delete on write or versioned keys.
                2. A shared cache cluster sized from the working set and the hit ratio target.
                3. Writes invalidating the right keys, tested with an integration test per data type.
                4. Behaviour when the cache tier is unavailable defined and tested.

                ## Notes
                Decide what happens when the cache is down before you depend on it. If the database cannot carry the load uncached, the cache has become a critical dependency and needs its own redundancy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared cache serves the fleet, each cached type has a tested invalidation rule, and cache-down behaviour has been exercised in staging."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List each cached data type with its invalidation rule"
                - "Size the shared cache from the working set"
                - "Write an invalidation test for each cached data type"
                - "Turn the cache off in staging and record what happens"
            - name: Cache stampede and thundering herd protection
              description: |-
                ## Purpose
                When a popular cache entry expires, hundreds of requests can miss at once and all hit the database for the same row, and a cold cache after a restart does the same for everything. Request coalescing, early probabilistic refresh, jittered expiry and a warm-up plan stop a routine expiry from becoming an outage.

                ## Milestones
                1. The ten hottest cache keys identified and their miss behaviour observed.
                2. Request coalescing so only one caller rebuilds an expired entry.
                3. Jitter added to expiry times so related keys do not expire together.
                4. A cache warm-up step run before a cold cache takes traffic.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Hot keys rebuild through a single caller, expiry is jittered, and a cold-cache restart in staging stays within database limits."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Observe database load when one hot cache key expires"
                - "Add request coalescing to the cache read path"
                - "Add random jitter to cache expiry times"
                - "Write and test a warm-up step for a cold cache"
            - name: Absorbing write bursts with a partitioned queue
              description: |-
                ## Purpose
                Spiky writes, such as a flash sale or a daily batch import, can swamp a database that copes fine with the average. Putting a durable, partitioned queue in front of the write path lets the database consume at a steady rate, while partitioning by key keeps updates to the same entity in order.

                ## Milestones
                1. Write paths with peak to average ratios above five identified.
                2. A partition key chosen so each entity's updates stay in order.
                3. Consumers writing at a controlled rate, with lag limits from the consistency table.
                4. A replayed burst showing database write load flattened.

                ## Notes
                Users still need a sensible answer while their write sits in the queue. Decide whether the interface shows the change as pending or waits for confirmation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One bursty write path goes through a partitioned queue with per-key ordering, and a replayed burst shows flattened database write load."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Find write paths whose peak is five times their average"
                - "Choose a partition key that keeps each entity's updates ordered"
                - "Set consumer write rates within the database's comfortable limit"
                - "Replay a recorded burst and graph database write load"
            - name: Choosing a shard key and sharding plan
              description: |-
                ## Purpose
                The shard key is the hardest scaling decision to undo: a poor one creates hot shards, forces cross-shard queries on every page and makes resharding a project measured in quarters. Comparing candidate keys against real access patterns and growth, before writing any code, is a week of work that saves a year.

                ## Milestones
                1. Two or three candidate keys listed, such as tenant, user or entity ID.
                2. Each candidate scored for balance, cross-shard query share and future resharding cost using real query logs.
                3. The handling of global tables and cross-shard queries decided.
                4. A decision record naming the key, the initial shard count and the resharding approach.

                ## Notes
                Plan the second reshard on day one. Starting with many logical shards on few physical nodes lets you move shards later instead of splitting them.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record compares at least two shard keys against query logs and names the key, the initial shard count and the resharding approach."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List two or three candidate shard keys"
                - "Replay a day of query logs to measure cross-shard queries per candidate"
                - "Estimate shard balance for each candidate from current data"
                - "Write the decision record with key, shard count and resharding plan"
            - name: Managed distributed database or self-run sharding
              description: |-
                ## Purpose
                Distributed SQL and managed sharded databases can spare a team years of sharding code, but they bring their own costs, latency profile and lock-in. Comparing two or three managed options with sharding your existing database yourself, on your own workload and budget, gives an honest decision rather than a conference talk.

                ## Milestones
                1. Requirements written: data size, write rate, consistency needs, regions and budget.
                2. Two or three managed options and a self-run sharding plan compared against them.
                3. A proof of concept running the five heaviest queries on the leading option.
                4. A decision recorded with cost over three years and the exit path.

                ## Notes
                Start from the **Vendor** template. Ask each vendor how a schema migration and a large backfill behave at your data size.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record compares at least three options on your requirements, includes proof of concept results and a three-year cost with exit path."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write requirements for size, write rate, consistency, regions and budget"
                - "Shortlist two managed options alongside a self-run sharding plan"
                - "Run the five heaviest queries on the leading option"
                - "Record the decision with three-year cost and exit path"
            - name: Load shedding and priority admission at the edge
              description: |-
                ## Purpose
                Past a certain load, accepting every request means serving none of them well. Deciding which traffic matters most (checkout over browsing, interactive over batch) and shedding the lowest priority first when queues fill keeps the core of the product working during a surge instead of everything timing out together.

                ## Milestones
                1. Traffic sorted into three or four priority classes with product sign-off.
                2. Each request tagged with its class at the edge.
                3. Low-priority traffic rejected early with a clear retry signal once a load threshold is crossed.
                4. A staging overload showing high-priority success rates held while low-priority traffic is shed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Requests carry a priority class, and a staging overload shows top-priority success held above target while lower classes are shed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree three or four traffic priority classes with product"
                - "Tag each request with its priority class at the edge"
                - "Reject low-priority requests early when a load threshold is crossed"
                - "Overload staging and compare success rates by class"
            - name: Edge and CDN caching for semi-static content
              description: |-
                ## Purpose
                Product pages, public profiles and API responses that change every few minutes can still be served from the edge for most of that time. Setting cache headers, surrogate keys and purge rules deliberately moves a large share of read traffic off the origin entirely, which is the cheapest scaling there is.

                ## Milestones
                1. Responses classed by how long they may be served stale.
                2. Cache headers and stale-while-revalidate set per class.
                3. Targeted purge by tag or key wired into the publishing path.
                4. Edge hit ratio and origin request volume measured before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cache headers are set per response class, targeted purge works from the publishing path, and origin request volume shows a measured fall."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Class responses by how long each may be served stale"
                - "Set cache and stale-while-revalidate headers for each class"
                - "Wire a tag-based purge into the publishing path"
                - "Compare origin request volume before and after"
            - name: Retry, timeout and circuit breaker defaults for the fleet
              description: |-
                ## Purpose
                Retries meant to hide brief failures multiply load exactly when a dependency is struggling, and a few layers of three retries each turns one slow call into twenty-seven. Shared client defaults, with exponential backoff and jitter, a retry budget and circuit breakers, stop scale from turning a blip into a retry storm.

                ## Milestones
                1. Current retry and timeout settings collected for every client library in use.
                2. Fleet-wide defaults agreed: backoff with jitter, a retry budget and per-dependency timeouts.
                3. Circuit breakers in place on calls to the three most critical dependencies.
                4. A slowed dependency in staging showing load on it fall rather than rise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Shared client defaults with jittered backoff and a retry budget are in use, and a staging slowdown shows load on the slow dependency falling."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Collect retry and timeout settings from every client in the codebase"
                - "Agree shared defaults for backoff, jitter and retry budget"
                - "Add circuit breakers to the three most critical dependencies"
                - "Slow one dependency in staging and graph the load it receives"
            - name: Scaling readiness review before a launch or peak
              description: |-
                ## Purpose
                A launch, a marketing push or the year's busiest week is the moment hidden ceilings show themselves. A dated review a few weeks ahead, checking forecast against headroom, ceilings register, autoscaling bounds, provider quotas and shedding rules, gives time to raise limits that take days to approve.

                ## Milestones
                1. Expected peak traffic for the event agreed with the business, with a high case.
                2. Every tier's headroom checked against the high case.
                3. Provider quota increases requested and confirmed in writing.
                4. A go or no-go recorded with the event-day roles and escalation path.

                ## Notes
                Quota increases can take days and sometimes need a support case, so request them in the first week of the review, not the last.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dated readiness review checks every tier against the high case, confirms quota increases in writing and records a go or no-go with event-day roles."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree expected and high case peak traffic for the event"
                - "Check every tier's headroom against the high case"
                - "Request provider quota increases and get them confirmed"
                - "Hold the go or no-go meeting and assign event-day roles"
            - name: Online reshard to double the shard count
              description: |-
                ## Purpose
                Resharding while serving traffic is one of the riskiest routine operations in a scaled system: data must be copied, kept in sync, verified and switched over without losing writes. Treating it as a dated event with a rehearsal, a verification step and a rollback point keeps it boring.

                ## Milestones
                1. The method chosen: moving logical shards, splitting ranges or dual writes with backfill.
                2. A full rehearsal on a copy of production data with timings and verification results.
                3. Live copy and catch-up running, with row counts and checksums matching.
                4. Traffic switched per shard with a tested rollback, and old copies removed after a waiting period.

                ## Notes
                Keep the old shards readable for at least a week after switching. Deleting them on the day removes the only rollback you have.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All shards are switched to the new layout with matching row counts and checksums, no lost writes, and old copies retired after the waiting period."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Choose the resharding method and write the step-by-step plan"
                - "Rehearse the reshard on a copy of production data"
                - "Verify row counts and checksums before each switch"
                - "Switch traffic one shard at a time with rollback ready"
                - "Remove old shard copies after the agreed waiting period"
            - name: Second region go-live for read traffic
              description: |-
                ## Purpose
                Users on another continent pay a hundred milliseconds or more on every round trip, and a single region is one bad day away from a full outage. Bringing up a second region that serves reads from local replicas, with writes still going to the primary region, is a contained first step towards being multi-region.

                ## Milestones
                1. The second region's stack defined in code and deployed, with replicas catching up from the primary.
                2. Latency-based or geographic routing sending nearby users' reads to the new region.
                3. Writes and read-your-writes paths still served from the primary region and tested.
                4. Latency for users near the new region measured before and after go-live.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A second region serves reads for nearby users from local replicas, writes still reach the primary, and user latency improvement is measured."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Choose the second region from where users are"
                - "Deploy the stack and replicas to the new region from code"
                - "Route nearby users' reads to the new region"
                - "Measure user latency in that geography before and after"
            - name: Post-peak scaling retrospective
              description: |-
                ## Purpose
                The week after a big peak is the only time the real numbers are fresh: what traffic actually arrived, which tier came closest to its limit and which manual interventions were needed. A short blameless retrospective turns that into forecast corrections and fixes before the next peak.

                ## Milestones
                1. Actual peak traffic compared with the forecast and the high case.
                2. The tier that came nearest its ceiling named with the figures.
                3. Every manual intervention during the peak listed.
                4. Three fixes agreed and the forecast model corrected.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written retrospective compares actual peak with forecast, names the nearest ceiling, lists manual interventions and assigns three fixes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather peak traffic and utilisation figures from the event"
                - "List every manual scaling action taken during the peak"
                - "Ask the agent to draft the retrospective from the figures and notes"
                - "Agree three fixes and correct the forecast model"
            - name: Surviving the first real traffic spike as a startup
              description: |-
                ## Purpose
                Overnight, a launch post, a press mention or a large customer can bring ten times normal traffic to a product built on one server and one database. A few days of cheap preparation (a CDN in front, a bigger database instance on standby, a static fallback page, a queue for signups) usually matters more than any architecture change.

                ## Milestones
                1. A CDN serving static assets and marketing pages.
                2. The one-click steps to resize the database and app servers written and tested.
                3. A static holding page ready to switch on if the app falls over.
                4. Signup and email sending decoupled so a burst cannot block the main app.

                ## Notes
                Vertical scaling is a perfectly good first answer. A larger database instance buys months while you learn where the real bottleneck is.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A CDN is live, the resize steps have been tested once, a static holding page can be switched on in minutes and signups no longer block the app."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Put a CDN in front of static assets and marketing pages"
                - "Test resizing the database and app server once"
                - "Build a static holding page and the switch to turn it on"
                - "Move signup emails onto a background queue"
            - name: Getting the most out of one database before sharding
              description: |-
                ## Purpose
                Many teams shard years before they need to and pay for it in complexity every day after. A well-indexed single primary with read replicas, archived cold data, partitioned large tables and the largest sensible instance can carry far more than most products reach, and proving that buys time to shard properly if ever.

                ## Milestones
                1. The database's largest available instance and its cost noted against current size.
                2. Cold data older than an agreed age moved to archive storage.
                3. The largest tables partitioned by time or tenant within the same database.
                4. A written estimate of how long the single database lasts at the forecast growth.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Cold data is archived, the largest tables are partitioned, and a written estimate states how many months the single database lasts at expected growth."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Note the largest instance size available and its monthly cost"
                - "Agree an age after which data moves to archive storage"
                - "Partition the largest table by time or tenant"
                - "Estimate how long the single database lasts at forecast growth"
            - name: Capacity planning across an enterprise estate
              description: |-
                ## Purpose
                In a large organisation, shared databases, message platforms and clusters serve dozens of teams, and each team's growth plan arrives as a surprise to the platform that hosts it. A quarterly capacity round, where teams submit forecasts to shared platform owners, turns those surprises into planned budget and lead time.

                ## Milestones
                1. Shared platforms listed with owners and current capacity.
                2. A simple forecast template sent to every consuming team.
                3. Forecasts aggregated per shared platform with gaps highlighted.
                4. Budget and lead-time requests raised for each gap and approved or rejected on record.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each shared platform has an aggregated forecast from its consuming teams, and every capacity gap has a recorded budget decision."
                cadence: cyclic
                effort_hours_estimate: "24"
              tasks:
                - "List shared platforms with their owners and capacity"
                - "Send a one-page forecast template to every consuming team @recurring(quarterly)"
                - "Aggregate forecasts per platform and highlight the gaps"
                - "Raise budget requests for each gap and record the outcomes"
            - name: Inheriting a sharded system nobody documented
              description: |-
                ## Purpose
                Taking over a sharded or replicated estate whose designer has left often means not knowing where a given customer's data lives, how routing works or what the last reshard broke. Mapping it methodically in the first weeks, before changing anything, prevents the confident early change that causes the worst outage of the year.

                ## Milestones
                1. The routing logic traced from request to shard, with the code paths noted.
                2. A map of every shard, replica and its host, checked against what is actually running.
                3. Undocumented cron jobs, rebalancing scripts and manual runbooks found and listed.
                4. A list of the five scariest unknowns, each with an owner to investigate.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A verified map of shards, replicas and routing exists, with undocumented scripts listed and five open unknowns assigned."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Trace one request from the edge to its shard in the code"
                - "Compare the documented shard map with what is running"
                - "Search hosts and repositories for rebalancing scripts and cron jobs"
                - "Ask the agent to summarise routing code into a first draft of the map"
                - "Assign an owner to each of the five scariest unknowns"
            - name: Tenant isolation tiers for a multi-tenant platform
              description: |-
                ## Purpose
                In a shared multi-tenant system one large customer's import job can slow every other customer down. Defining isolation tiers, from fully pooled to dedicated shard or cell, with criteria for moving a tenant up, lets the platform give large customers predictable performance without running a separate stack for everyone.

                ## Milestones
                1. Two or three isolation tiers defined, such as pooled, dedicated shard and dedicated cell.
                2. Criteria for promotion written: data size, request share, contract terms.
                3. Per-tenant quotas enforced in the pooled tier.
                4. One large tenant moved to a dedicated shard without downtime.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written isolation tiers and promotion criteria exist, pooled tenants have quotas, and one large tenant has been moved to a dedicated shard without downtime."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Define two or three tenant isolation tiers"
                - "Write the criteria for moving a tenant up a tier"
                - "Enforce per-tenant quotas in the pooled tier"
                - "Move one large tenant to a dedicated shard"
                - "Review the largest tenants against the promotion criteria @recurring(quarterly)"
            - name: Data residency constraints in a global architecture
              description: |-
                ## Purpose
                Enterprise and public sector customers increasingly require their data to stay within a country or region, which cuts across caches, replicas, backups, logs and queues. Mapping where each kind of data is copied and confirming the requirement with legal and compliance stops a scaling change, like a new replica region, from breaking a contract.

                ## Milestones
                1. Residency requirements gathered from contracts and confirmed with legal or compliance.
                2. Every copy of customer data located: primaries, replicas, caches, backups, logs and analytics.
                3. Copies outside the permitted region listed with a fix.
                4. A check added to architecture reviews for any change that copies data to a new region.

                ## Notes
                This is a mapping and evidence exercise. The interpretation of what a contract or law requires belongs to your legal or compliance team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A data location map covers every copy of customer data, out-of-region copies have fixes, and architecture reviews include a residency check."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect residency clauses from contracts and confirm them with compliance"
                - "Locate every copy of customer data, including backups and logs"
                - "List copies outside the permitted region with a fix for each"
                - "Add a residency question to the architecture review checklist"
                - "Recheck every data copy against the residency map @recurring(yearly)"
            - name: Distributed systems skills map for the team
              description: |-
                ## Purpose
                Work on scale tends to fall on the one or two people who understand replication and partitioning, which leaves the team fragile and those people overloaded. Mapping who can do what across caching, queues, replication, sharding and failover shows where to pair, train or hire.

                ## Milestones
                1. Eight to ten skills listed, from cache design to running a reshard.
                2. Each engineer's level rated on a simple scale with their input.
                3. Skills held by only one person flagged.
                4. A pairing or training plan for each flagged skill.

                ## Notes
                Start from the **Skills matrix** template. Ratings are for planning, not appraisal, so say that up front.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A skills matrix rates each engineer on eight to ten scaling skills, and every single-holder skill has a pairing or training plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List eight to ten distributed systems skills the team needs"
                - "Ask each engineer to rate themselves, then agree ratings together"
                - "Flag skills only one person holds"
                - "Plan pairing or training for each flagged skill"
                - "Refresh the ratings and the pairing plan @recurring(yearly)"
            - name: Active-active regions with conflict resolution
              description: |-
                ## Purpose
                Accepting writes in more than one region removes the cross-continent write latency and the single-region outage, at the price of concurrent conflicting updates. Choosing a resolution strategy per entity (single home region, last-write-wins with hybrid clocks, or conflict-free replicated data types) is what makes active-active safe rather than a source of lost data.

                ## Milestones
                1. Entities classified by whether they can accept writes in any region, using the consistency table.
                2. A conflict resolution strategy chosen for each multi-writer entity.
                3. Home-region routing in place for entities that must have a single writer.
                4. A partition between regions simulated in staging with no lost or corrupted writes after healing.

                ## Notes
                Most systems only need a handful of entities to be truly multi-writer. Giving everything else a home region keeps the hard problems small.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every entity has a documented write model and resolution strategy, and a staged region partition heals with no lost or corrupted writes."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Classify each entity as single-home or multi-writer"
                - "Choose a conflict resolution strategy for each multi-writer entity"
                - "Route single-home entity writes to their home region"
                - "Partition two staging regions, write to both, then heal and verify"
            - name: Cell-based architecture to limit blast radius
              description: |-
                ## Purpose
                At large scale the worst outages are the ones that hit every customer at once because everything shares one database, one queue or one deploy. Splitting the system into independent cells, each serving a slice of customers with its own full stack, caps any single failure or bad deploy to one cell.

                ## Milestones
                1. A cell defined: what it contains and how many customers it serves.
                2. A thin routing layer mapping each customer to a cell.
                3. Deployments rolled out cell by cell with a pause after the first.
                4. One cell taken down in staging with other cells unaffected.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Customers are routed to independent cells, deploys roll out cell by cell, and a staged cell outage leaves other cells unaffected."
                cadence: phased
                effort_hours_estimate: "160"
              tasks:
                - "Define what one cell contains and its customer capacity"
                - "Build the routing layer that maps customers to cells"
                - "Change the deploy pipeline to roll out one cell at a time"
                - "Take one staging cell down and confirm the others serve normally"
            - name: Change data capture to keep caches and search in sync
              description: |-
                ## Purpose
                Dual writes from application code to a database, a cache and a search index drift apart whenever one write fails. Streaming changes from the database log instead, and letting caches, search and read stores consume that stream, gives one ordered source of truth that scales out to as many consumers as needed.

                ## Milestones
                1. A change data capture connector reading the database log into a stream.
                2. Cache invalidation and search indexing driven from the stream rather than application code.
                3. Consumer lag alerts and a replay procedure in place.
                4. A comparison job confirming the search index matches the database.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cache invalidation and search indexing run from a change stream, consumer lag is alerted, and a comparison job shows the index matches the database."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Set up a change data capture connector on one database"
                - "Drive search indexing from the change stream"
                - "Remove the matching dual writes from application code"
                - "Schedule a job comparing the search index with the database"
                - "Investigate mismatches reported by the comparison job @recurring(monthly:11)"
            - name: Formal model of a critical replication protocol
              description: |-
                ## Purpose
                Some distributed logic, such as a custom failover, a lease protocol or a resharding handover, has interleavings no test suite will reach. Writing a small formal specification in a model checking language such as TLA+ or a similar tool and checking its invariants finds the rare ordering that loses data, before production finds it.

                ## Milestones
                1. One protocol chosen where a bug would lose or duplicate data.
                2. A specification written covering its states, actions and invariants.
                3. The model checker run, with any counterexample traced to the design.
                4. Design or code changes made for each real counterexample found.

                ## Notes
                Keep the first model small: two or three nodes and a handful of messages are usually enough to expose the bug.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A checked formal specification of one critical protocol exists, with each counterexample found recorded and resolved in the design."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick the protocol where a bug would lose or duplicate data"
                - "Work through an introductory model checking tutorial"
                - "Write the specification with its key invariants"
                - "Run the model checker and trace any counterexample"
---

# Distributed Systems Scaling

This area is for engineers and enterprise teams whose system is outgrowing one box, one database or one region, and for those already running caches, queues, replicas and shards. It starts with the foundations (a bottleneck inventory, a growth forecast, a stateless app tier, consistency needs per entity and a register of known ceilings), then the routines that watch headroom, cache behaviour, consumer lag, replication and shard balance, the skills behind consistency models, partitioning, replication and consensus, the decisions about replicas, caches, shard keys, managed databases and load shedding, the dated launches, reshards and region go-lives, the situations a startup, an inheritor or a multi-tenant platform faces, and finally specialist work on active-active regions, cells and formal models.

What repeats is a weekly look at consumer lag and hot keys, monthly headroom, cache, replication, rate limit and scaling incident reviews on varied days, and quarterly shard balance, ceiling and promotion rehearsals. The Risk register, Metrics log, Reading queue, Vendor, Operational checklist and Skills matrix templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
