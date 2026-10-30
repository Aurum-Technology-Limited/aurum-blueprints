---
id: quant-finance.low-latency-trading-systems
name: Low-Latency Trading Systems
description: "A written latency budget, hardware timestamps and synced clocks, tuned and audited hosts, kernel bypass and lock-free hot paths, and an honest yearly test of whether the speed still pays for itself."
category: business
version: 1.0.0
tags: [quant-finance, low-latency-trading-systems, engineer, kernel-bypass, colocation, tick-to-trade, lock-free, ptp-clock-sync]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - remediation-plan
    - purchase-decision
    - vendor
    - onboarding-30-60-90
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Low-Latency Trading Systems
          description: "Engineering for low latency: network and hardware choices, kernel bypass, lock-free code, measuring latency end to end and deciding when speed matters."
          projects:
            - name: Deciding whether speed matters for your strategy
              description: |-
                ## Purpose
                Cutting latency from 50 microseconds to 5 costs real money in hardware, colocation and engineering time, and it only pays when the strategy's edge decays within that window. Measuring how quickly your signal's value fades after a market event tells you whether to chase nanoseconds, settle for a well-tuned ordinary host, or spend the effort on research instead.

                ## Milestones
                1. A chart of signal value or fill quality against simulated reaction delay, from 1 microsecond to 10 milliseconds.
                2. The delay at which the edge falls by half written down as the latency that actually matters.
                3. A rough yearly cost for each tier of speed: tuned cloud or office host, colocated host, kernel bypass, FPGA.
                4. A one-page decision naming the tier you will build to and the evidence behind it.

                ## Notes
                Most strategies fail out of sample however fast they are. If the edge is not there at 10 milliseconds, it will not appear at 10 microseconds.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated decision records the latency tier you will build to, the decay curve behind it and the yearly cost of that tier."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick one strategy and list the market events its signal reacts to"
                - "Re-run its simulation with reaction delays from 1 microsecond to 10 milliseconds"
                - "Estimate the yearly cost of each latency tier you could reach"
                - "Write the one-page speed decision and share it with the strategy owner"
            - name: End-to-end latency budget for the trading path
              description: |-
                ## Purpose
                Without a budget, every engineer tunes the part they know best and nobody notices the 30 microseconds lost in a logging call. Splitting the target tick-to-trade time into allowances for the wire, the NIC, the feed handler, the strategy, risk checks and the order gateway makes each component's owner answerable for a number.

                ## Milestones
                1. A target tick-to-trade figure at the median and at the 99th percentile, taken from the speed decision.
                2. An allowance for every stage of the path, adding up to the target.
                3. An owner named for each stage's allowance.
                4. The budget stored beside the code, with a rule that a change exceeding an allowance needs sign-off.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned latency budget splits the median and 99th percentile targets across every stage, each with a named owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the median and 99th percentile tick-to-trade targets at the top of a budget page"
                - "List every stage between packet arrival and order on the wire"
                - "Give each stage an allowance and an owner"
                - "Commit the budget to the repository beside the trading code"
            - name: Inventory of the tick-to-trade path
              description: |-
                ## Purpose
                Few teams can draw their own critical path from memory, and the forgotten hop, a spare switch, a bonding driver, a shared logging thread, is usually where latency hides. A diagram of every cable, device, process and thread a packet touches, with versions, is the map every later measurement and change depends on.

                ## Milestones
                1. A diagram from the exchange handoff to the order leaving your NIC, showing every cable, switch, host and port.
                2. Each process and thread on the path listed with the core it runs on.
                3. Firmware, driver, kernel and library versions recorded for every device and host.
                4. Unknowns marked on the diagram with a person assigned to resolve each.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated tick-to-trade diagram lists every hop, process, thread, core and firmware version, with no unresolved unknowns."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the path from exchange handoff to outbound order in one diagram"
                - "List every thread on the path with its pinned core"
                - "Record firmware, driver and kernel versions for each device"
                - "Assign an owner to each unknown hop on the diagram"
            - name: Hardware timestamping and capture points
              description: |-
                ## Purpose
                Software timestamps taken inside your own process measure your process, not the market, and they move whenever the code does. Passive taps or switch mirror ports feeding a capture card with hardware timestamps give an outside view of packet in and order out that no code change can flatter.

                ## Milestones
                1. Capture points chosen at the inbound market data line and the outbound order line.
                2. Taps or mirror ports installed and feeding a capture device that timestamps in hardware.
                3. Inbound packets matched to the orders they caused, using a sequence number or client order id.
                4. A first wire-to-wire latency distribution produced from a full trading session.

                ## Notes
                Mirror ports can drop or reorder packets under load; passive optical taps cost more but do not. Note which you used beside every result.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Wire-to-wire latency for a full session is computed from hardware timestamps at two capture points, with packets matched to orders."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Mark the inbound and outbound capture points on the path diagram"
                - "Choose between passive taps and mirror ports and record why"
                - "Write the matching rule that links each order to its triggering packet"
                - "Produce the first wire-to-wire distribution from one full session"
            - name: Clock synchronisation with PTP across trading hosts
              description: |-
                ## Purpose
                Comparing timestamps from two hosts is meaningless if their clocks disagree by more than the latency you are trying to measure. A Precision Time Protocol setup fed from a GPS-disciplined grandmaster, with offsets monitored, keeps every host within a known tolerance and gives you the traceable timestamps many regulators expect.

                ## Milestones
                1. A time source chosen: a GPS-disciplined grandmaster or a timing feed from your colocation provider.
                2. PTP running on every trading and capture host, with NIC hardware timestamping enabled.
                3. A tolerance written down, for example within 1 microsecond of the reference, and the reason for it.
                4. Offset and path delay for every host graphed, with an alert when any host leaves tolerance.

                ## Notes
                Check what accuracy and traceability your regulator expects for timestamps; in the EU, for example, MiFID II sets tighter limits for high-frequency trading.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every trading and capture host runs PTP within a written tolerance, with offsets graphed and an alert tested by forcing a host out of sync."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Find out what time source your colocation provider offers"
                - "Enable hardware timestamping on each trading host's NIC"
                - "Write the clock tolerance and the regulatory reason behind it"
                - "Test the out-of-tolerance alert by stopping PTP on one lab host"
            - name: Baseline latency histogram before any tuning
              description: |-
                ## Purpose
                Tuning without a baseline turns every claim of improvement into a story. Recording the full distribution, median through the 99.99th percentile, under a fixed replayed workload before changing anything gives every later tweak a number to beat and catches the change that helps the median but wrecks the tail.

                ## Milestones
                1. A fixed workload chosen: one recorded busy session replayed at real speed.
                2. Median, 99th, 99.9th and 99.99th percentile and maximum recorded for each stage and end to end.
                3. Host configuration, code commit and capture method written beside the numbers.
                4. The baseline saved as the first entry in the latency log.

                ## Notes
                Start from the **Metrics log** template. Always report the tail and the maximum, not just the average.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A logged baseline lists per-stage and end-to-end percentiles to the 99.99th under a named replay workload, with commit and configuration."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose one recorded busy session as the standard replay workload"
                - "Run the replay three times and keep all three distributions"
                - "Record the commit hash and host configuration beside the results"
                - "Enter the baseline as the first row of the latency log"
            - name: Reference host build as code
              description: |-
                ## Purpose
                Two hosts that were tuned by hand a year apart will never behave the same, and the one that is 4 microseconds slower is always the one in production. Writing the BIOS settings, kernel version, boot parameters, IRQ affinity and core layout into a versioned build script means every trading host can be rebuilt identically in an afternoon.

                ## Milestones
                1. BIOS settings for power states, turbo, hyperthreading and memory recorded per server model.
                2. Kernel version, boot parameters and sysctl values captured in a build script or configuration tool.
                3. Core allocation written down: which cores run housekeeping, interrupts, the feed handler and the strategy.
                4. A spare host rebuilt from the script and matching the baseline within the agreed tolerance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A host rebuilt from the versioned build script matches the baseline latency distribution within the tolerance written in the budget."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Export the BIOS settings from one production host"
                - "Capture boot parameters and sysctl values into the build repository"
                - "Write the core allocation map for each server model"
                - "Rebuild a spare host from scratch and replay the baseline workload on it"
            - name: Lab environment that mirrors production
              description: |-
                ## Purpose
                Testing latency changes on a developer laptop or a cloud VM tells you almost nothing, because the NIC, the kernel and the cache sizes are all different. A small lab with the same server model, NIC and switch as production, fed by replayed captures, lets you measure a change before it goes anywhere near the market.

                ## Milestones
                1. At least one lab host of the same model, NIC and build as production.
                2. A packet replay source that plays recorded market data at original timing.
                3. A simulated exchange endpoint that acknowledges orders so the full path can run.
                4. Lab and production baselines compared, with known differences written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A production-identical lab host runs the full path against replayed data, and its baseline is within a recorded margin of production."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the production parts the lab must match exactly"
                - "Order or reassign one host of the production model"
                - "Set up a replay tool that preserves original packet timing"
                - "Compare the lab baseline with production and note every gap"
            - name: Change policy for latency-sensitive code and hosts
              description: |-
                ## Purpose
                One changed line in a logging macro or a kernel update pushed on a Thursday night can add tail latency that nobody notices until fills get worse. A written policy saying which changes need a lab benchmark, who signs off and when releases are allowed protects the path without slowing ordinary work.

                ## Milestones
                1. A list of what counts as a latency-sensitive change: hot path code, kernel, firmware, BIOS, NIC driver, network.
                2. A required benchmark for each kind, with the pass threshold against the budget.
                3. Release windows agreed, with no changes during trading hours or the hour before the open.
                4. A rollback step written for every kind of change, tested at least once.

                ## Notes
                Keep the policy to one page. If engineers cannot remember it, they will route around it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page change policy names latency-sensitive changes, their benchmark thresholds, release windows and a tested rollback for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the kinds of change that have caused latency regressions before"
                - "Set a benchmark pass threshold for each kind of change"
                - "Agree release windows with the trading desk"
                - "Test one rollback end to end in the lab"
            - name: Daily latency percentile review
              description: |-
                ## Purpose
                Latency drifts quietly: a noisy neighbour in the rack, a feed that got busier, a new library version. Ten minutes each morning comparing yesterday's percentiles with the budget and the baseline catches drift while the cause is still fresh in someone's memory.

                ## Milestones
                1. A dashboard showing yesterday's median, 99th and 99.9th percentile per stage beside the budget.
                2. A rule for what triggers investigation, such as the 99th percentile above budget for two days running.
                3. A weekly summary line in the latency log.
                4. Every breach in the last month linked to a cause or an open investigation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each trading day's percentiles are reviewed against the budget, and every breach in the last month has a recorded cause or open investigation."
                cadence: rolling
              tasks:
                - "Build a dashboard of yesterday's per-stage percentiles against the budget"
                - "Compare yesterday's percentiles with the budget before the open @recurring(daily)"
                - "Write the week's latency summary in the log @recurring(weekly:fri)"
                - "Open an investigation note for any stage over budget two days running"
            - name: Pre-open host health checklist
              description: |-
                ## Purpose
                Most bad trading days begin with something checkable before the open: a core no longer isolated after a reboot, PTP out of tolerance, a NIC that came up at the wrong speed. A short checklist run before every session catches these while there is still time to fail over.

                ## Milestones
                1. A checklist of no more than fifteen items covering clocks, core isolation, NIC link state, huge pages, feed sequence gaps and risk limits loaded.
                2. Each item scripted where possible, with a single pass or fail summary.
                3. Who runs it, by what time, and what happens on a fail written at the top.
                4. A month of completed checklists with every fail followed up.

                ## Notes
                Start from the **Operational checklist** template. Include a check that the kill switch responds, not just that it exists.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A scripted pre-open checklist runs every trading day, and a month of results shows every fail followed up before the open."
                cadence: rolling
              tasks:
                - "Draft the fifteen checks most likely to catch a bad host"
                - "Script the clock, isolation and NIC checks into one pass or fail report"
                - "Run the pre-open checklist and record the result @recurring(weekly:mon,tue,wed,thu,fri)"
                - "Test that the kill switch responds on the lab host"
            - name: Weekly regression benchmark in CI
              description: |-
                ## Purpose
                Micro-regressions of a few hundred nanoseconds add up over a quarter, and nobody remembers which commit did it. Running the standard replay on the lab host every week, and on every merge to the hot path, ties each regression to a commit while it is still cheap to fix.

                ## Milestones
                1. The standard replay workload running automatically on the lab host.
                2. Results stored per commit with the full percentile set.
                3. A failure threshold, for example a 99th percentile rise of more than 5 percent, that blocks the merge.
                4. A chart of the last three months of results by commit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every hot path merge and a weekly scheduled run produce stored percentiles, and merges over the threshold are blocked."
                cadence: rolling
              tasks:
                - "Wire the replay benchmark into the CI pipeline on the lab host"
                - "Store each run's percentiles against its commit hash"
                - "Review the weekly benchmark trend chart @recurring(weekly:wed)"
                - "Set the merge-blocking threshold and announce it to the team"
            - name: Monthly configuration drift audit
              description: |-
                ## Purpose
                Hosts drift away from the reference build through emergency fixes, package updates and well-meant tweaks, and drift is the most common reason two identical servers behave differently. Comparing every trading host's live settings with the build script each month finds the drift before it becomes a mystery.

                ## Milestones
                1. A script that dumps BIOS, kernel, boot parameters, IRQ affinity and NIC settings from a live host.
                2. A diff of each production host against the reference build.
                3. Every difference either fixed or written into the build script as intended.
                4. Audit results kept for a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month every trading host is diffed against the reference build and every difference is fixed or adopted, with results kept."
                cadence: rolling
              tasks:
                - "Write the script that dumps live host settings"
                - "Diff every trading host against the reference build @recurring(monthly:9)"
                - "Fix or adopt each difference found"
                - "File the audit output with the date and host names"
            - name: Clock offset and timing health watch
              description: |-
                ## Purpose
                PTP fails quietly: a grandmaster loses GPS lock, a switch stops acting as a boundary clock after a firmware update, and timestamps drift for days before anyone checks. A weekly look at offsets and a monthly review of the time source keep every latency number trustworthy.

                ## Milestones
                1. Offset, path delay and grandmaster state graphed for every host.
                2. A weekly check of the graphs with any excursion noted.
                3. A monthly review of GPS lock, holdover events and boundary clock status.
                4. A written response for loss of time source, including which hosts must stop trading.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Clock offsets are reviewed weekly, the time source monthly, and a written loss-of-time-source response exists and has been rehearsed."
                cadence: rolling
              tasks:
                - "Check offset graphs for every trading host @recurring(weekly:tue)"
                - "Review grandmaster GPS lock and holdover events @recurring(monthly:14)"
                - "Write what happens to trading if the time source is lost"
                - "Rehearse the loss-of-time-source response in the lab"
            - name: Venue technical notice tracking
              description: |-
                ## Purpose
                Exchanges announce matching engine upgrades, new gateway hardware, protocol versions and colocation maintenance weeks or months ahead, and each one can move your latency or break your parser. Reading every venue's technical notices on a fixed day and logging what affects the path turns surprises into planned work.

                ## Milestones
                1. A list of every venue you connect to, with the page or mailing list for its technical notices.
                2. A monthly read of all notices, with relevant ones logged.
                3. Each relevant notice turned into a task with an owner and a date before the change.
                4. A record of past venue changes and the latency effect each had.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every connected venue's technical notices are read monthly, and each relevant change has an owned task dated before it takes effect."
                cadence: rolling
              tasks:
                - "List every venue and where it publishes technical notices"
                - "Subscribe a shared team inbox to each venue's notice list"
                - "Read and log every new venue technical notice @recurring(monthly:4)"
                - "Turn each relevant notice into an owned task with a date"
            - name: Firmware, kernel and driver patch cadence
              description: |-
                ## Purpose
                Never patching leaves known bugs and security holes on hosts that sit beside exchange networks; patching on impulse breaks tuned behaviour at the worst moment. A quarterly cycle that tests NIC firmware, drivers, kernel and BIOS updates in the lab before a planned rollout gets the fixes without the surprises.

                ## Milestones
                1. A list of every firmware, driver and kernel component with its current and latest version.
                2. A quarterly review deciding which updates to take, with security fixes taken first.
                3. Each chosen update benchmarked in the lab against the baseline.
                4. Rollout done host by host outside trading hours, with the build script updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, available updates are reviewed, chosen ones are lab-benchmarked, and the rollout and build script update are recorded."
                cadence: cyclic
              tasks:
                - "List current and latest versions of every firmware and driver"
                - "Review vendor release notes and pick this quarter's updates @recurring(quarterly)"
                - "Benchmark each chosen update on the lab host"
                - "Roll out host by host and update the build script"
            - name: Tail latency incident log and post-mortems
              description: |-
                ## Purpose
                A spike to 400 microseconds that happened once on a busy morning is easy to shrug off and often the first sign of something structural. Logging every tail event above a set threshold, and writing a short blameless post-mortem for the serious ones, builds the record that shows patterns no single incident would.

                ## Milestones
                1. A threshold set for what counts as a tail incident, such as any order above five times the median.
                2. An incident log with time, stage, size, suspected cause and status.
                3. A post-mortem with root cause and actions for every incident above a second, higher threshold.
                4. Open actions reviewed monthly until closed.

                ## Notes
                Start from the **Remediation plan** template for each serious incident. Record the market conditions too; many spikes line up with the open, the close or a data release.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tail event above the threshold is logged, serious ones have post-mortems, and open actions are reviewed monthly."
                cadence: rolling
              tasks:
                - "Set the tail incident threshold and the post-mortem threshold"
                - "Create the incident log with columns for stage, cause and status"
                - "Review open tail incident actions with their owners @recurring(monthly:22)"
                - "Write a blameless post-mortem for the most recent serious spike"
            - name: Quarterly cost of speed review
              description: |-
                ## Purpose
                Colocation racks, cross-connects, market data lines and specialist hardware are recurring costs that outlive the strategies they were bought for. Setting each quarter's spend on speed beside evidence that it still matters, such as fill quality or the decay curve, tells you what to keep, downgrade or cancel.

                ## Milestones
                1. Every recurring speed cost listed: rack, power, cross-connects, lines, licences, hardware depreciation.
                2. Each cost linked to the strategies or venues that need it.
                3. The decay curve or fill quality evidence refreshed for each.
                4. A keep, downgrade or cancel decision recorded per cost line.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter every recurring speed cost has a linked strategy, refreshed evidence and a recorded keep, downgrade or cancel decision."
                cadence: cyclic
              tasks:
                - "List every recurring cost that exists only for speed"
                - "Link each cost to the strategies or venues that use it"
                - "Hold the cost of speed review with the strategy owners @recurring(quarterly)"
                - "Send cancellation notices for any line marked cancel"
            - name: Message burst capacity headroom
              description: |-
                ## Purpose
                Systems that are fast on an ordinary afternoon fall apart at the open, on index rebalance days or when a news headline hits, exactly when speed matters most. Replaying the busiest bursts you have recorded at two and three times their rate shows how much headroom you have before queues build and the tail explodes.

                ## Milestones
                1. The ten busiest one-second windows of the last quarter found in captures.
                2. Those bursts replayed at one, two and three times their original rate in the lab.
                3. The rate at which the 99th percentile doubles recorded as the headroom limit.
                4. Headroom compared with the venue's published peak message rates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Each quarter the busiest recorded bursts are replayed at up to three times speed and the headroom limit is recorded against venue peaks."
                cadence: cyclic
              tasks:
                - "Find the ten busiest one-second windows in last quarter's captures"
                - "Replay recorded bursts at one, two and three times speed @recurring(quarterly)"
                - "Record the rate at which the 99th percentile doubles"
                - "Compare the headroom limit with each venue's published peaks"
            - name: CPU caches, false sharing and memory layout
              description: |-
                ## Purpose
                Going to main memory after a cache miss costs around 100 nanoseconds, more than the rest of a tight strategy loop, and false sharing between two threads can quietly double it. Working through cache lines, prefetching, structure layout and NUMA with small benchmarks of your own makes these effects something you can see and fix, not folklore.

                ## Milestones
                1. The cache sizes, line size and NUMA layout of your trading servers written down.
                2. A benchmark showing the cost of false sharing between two threads, before and after padding.
                3. A benchmark comparing array-of-structures and structure-of-arrays for one hot data type.
                4. One real hot path structure re-laid out with a measured result.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three cache benchmarks are written and run, and one hot path structure is re-laid out with before and after numbers recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Record cache and NUMA layout of a trading server with lscpu and lstopo"
                - "Write a two-thread false sharing benchmark with and without padding"
                - "Benchmark two layouts for the order book level structure"
                - "Re-lay out one hot structure and record the change in percentiles"
            - name: Lock-free queues and memory ordering practice
              description: |-
                ## Purpose
                Typical low-latency systems pass data between a feed thread and a strategy thread through a single-producer single-consumer ring buffer, and most home-grown ones have a memory ordering bug that shows up once a month. Building one from scratch, proving it under a race detector and comparing it with a well-known library teaches acquire, release and why a mutex is not the only thing that can be wrong.

                ## Milestones
                1. The acquire, release and relaxed orderings explained in your own words with one example each.
                2. A single-producer single-consumer ring buffer written and passing a stress test under a thread sanitiser.
                3. Its latency and throughput compared with an established open-source queue.
                4. A short note on when you would use a multi-producer queue and what it costs.

                ## Notes
                Test on the same CPU architecture as production. Code that is correct on x86 can break on ARM, which orders memory more weakly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A self-written SPSC ring buffer passes a sanitiser stress test and is benchmarked against an established queue, with notes kept."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the memory ordering section of your language's atomics reference"
                - "Write a single-producer single-consumer ring buffer with cache line padding"
                - "Run a ten-minute stress test under a thread sanitiser"
                - "Benchmark it against one established open-source queue"
            - name: Kernel bypass networking study
              description: |-
                ## Purpose
                The Linux network stack adds several microseconds and a lot of jitter to every packet, which is why trading systems receive market data through kernel bypass. Comparing the main approaches, vendor libraries that intercept sockets, DPDK-style poll mode drivers and AF_XDP, on your own hardware shows what each costs in latency, complexity and lock-in.

                ## Milestones
                1. A one-page summary of how each approach moves a packet from the NIC to user space.
                2. A UDP receive benchmark run through the standard kernel path and at least two bypass methods.
                3. Median and tail results compared on the same host and NIC.
                4. A recommendation for your setup, with the operational cost of each option noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Kernel, and at least two bypass receive paths, are benchmarked on the same host and NIC, with a written recommendation."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Read your NIC vendor's documentation on its bypass library"
                - "Write a minimal multicast receive test using ordinary sockets"
                - "Repeat the test with two kernel bypass methods"
                - "Write up median and tail results with a recommendation"
            - name: Isolated cores and interrupt affinity tuning
              description: |-
                ## Purpose
                Any hot thread that shares a core with a timer tick, an interrupt or a kernel worker will see jitter of tens of microseconds no matter how good its code is. Isolating cores, steering interrupts away, and stopping the scheduler tick on trading cores is the single tuning step with the biggest effect on the tail for most teams.

                ## Milestones
                1. Trading cores isolated from the scheduler with the boot parameters your kernel supports.
                2. Device interrupts pinned to housekeeping cores, with the NIC queue interrupts placed deliberately.
                3. Scheduler tick reduced on trading cores and kernel threads moved off them.
                4. A jitter test run before and after, with the change in maximum latency recorded.

                ## Notes
                Change one setting at a time and measure. Isolation mistakes can leave a core idle or overload the housekeeping cores.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Trading cores are isolated with interrupts and kernel threads moved off them, and a before and after jitter test is recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Run a jitter measurement tool on a trading core to get a before figure"
                - "Add core isolation and tick reduction boot parameters on the lab host"
                - "Pin device interrupts to housekeeping cores"
                - "Repeat the jitter test and record the difference"
            - name: Hardware performance counters for hot paths
              description: |-
                ## Purpose
                Wall-clock timings tell you a function got slower; hardware counters tell you why: cache misses, branch mispredictions, TLB misses or stalls on memory. Learning to read cycles, instructions per cycle and miss counts for a few-microsecond code path is what separates guessing from fixing.

                ## Milestones
                1. Counters for cycles, instructions, cache misses, branch misses and TLB misses collected for the strategy loop.
                2. Instructions per cycle and miss rates interpreted in a short written note.
                3. One finding acted on, such as a mispredicted branch or a TLB miss fixed with huge pages.
                4. The counter commands saved in the team's tooling notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Hardware counter readings for the strategy loop are interpreted in writing, and one counter-driven fix is measured."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect cycle, instruction and miss counters for the strategy loop"
                - "Write what the instructions per cycle figure says about the loop"
                - "Fix one counter-driven issue and remeasure"
                - "Save the counter commands in the team tooling notes"
            - name: Binary market data protocol decoding
              description: |-
                ## Purpose
                Exchange feeds arrive as packed binary messages, ITCH-style or SBE-encoded, and a feed handler that copies, allocates or branches on every field spends microseconds before the strategy sees anything. Writing a zero-copy decoder for one real protocol from its specification teaches the layout, sequencing and gap recovery every feed handler must get right.

                ## Milestones
                1. One venue's public binary protocol specification read and its message types listed.
                2. A decoder that reads fields in place from the packet buffer without copying.
                3. Sequence gap detection and the recovery path tested with a deliberately damaged capture.
                4. Decode time per message measured against a naive copying version.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A zero-copy decoder handles one real binary protocol, recovers from injected sequence gaps, and its per-message time is benchmarked."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Download one venue's public binary feed specification"
                - "Write in-place readers for the five most common message types"
                - "Inject a sequence gap into a capture and test recovery"
                - "Benchmark decode time against a copying version"
            - name: Measuring latency without fooling yourself
              description: |-
                ## Purpose
                Most latency numbers are wrong in ways that flatter the system: averages that hide the tail, load generators that pause when the system pauses, timers that cost more than the code they time. Learning coordinated omission, high dynamic range histograms and the limits of the CPU timestamp counter keeps your measurements honest before you publish them to anyone.

                ## Milestones
                1. Coordinated omission explained in your own words with a worked example.
                2. A load test rewritten to send at a fixed schedule and record from intended send time.
                3. A high dynamic range histogram used to store results, with percentiles to the 99.99th.
                4. Timer overhead measured and subtracted or reported beside every result.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One load test is corrected for coordinated omission, results go to an HDR histogram, and timer overhead is measured and reported."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a clear explanation of coordinated omission"
                - "Change one load test to record from intended send time"
                - "Store load test results in an HDR histogram"
                - "Measure the overhead of the timer you use and note it"
            - name: Reading compiler output for hot functions
              description: |-
                ## Purpose
                The compiler decides whether your hot loop is vectorised, whether a virtual call is removed and whether a branch becomes a conditional move, and the source rarely tells you which. Reading the generated assembly for a handful of hot functions, and trying profile-guided optimisation, turns compiler behaviour from a black box into something you can check in review.

                ## Milestones
                1. Assembly for five hot functions inspected with an online or local disassembler.
                2. One case found where the compiler did something unexpected, with the reason written down.
                3. A profile-guided build tried and its percentiles compared with the normal build.
                4. A short checklist of what to look for in assembly added to the code review guide.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Assembly for five hot functions is reviewed, one surprise is explained, and a profile-guided build is benchmarked against the normal one."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Inspect the assembly of the strategy's main update function"
                - "Note any virtual calls or branches the compiler left in"
                - "Build once with profile-guided optimisation and benchmark it"
                - "Add an assembly checklist to the code review guide"
            - name: Choosing NICs for the trading hosts
              description: |-
                ## Purpose
                Your network card sets the floor for receive latency, decides which kernel bypass libraries and timestamping you can use, and is hard to change once code depends on its library. Comparing two or three low-latency NICs on your own replay workload, with support and licence costs included, avoids buying on a datasheet number measured under ideal conditions.

                ## Milestones
                1. Requirements written: port speed, hardware timestamps, bypass library, PTP support, driver maturity.
                2. Two or three candidate cards shortlisted with prices and licence terms.
                3. Each card benchmarked on the lab host with the standard replay.
                4. A decision recorded with the reasons and the fallback card.

                ## Notes
                Start from the **Purchase decision** template. Ask vendors for an evaluation unit; most low-latency NIC makers lend them.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A NIC decision names the chosen card and a fallback, backed by lab benchmarks of each candidate on the standard replay."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the NIC requirements list"
                - "Request evaluation units from two or three vendors"
                - "Benchmark each card on the lab host with the standard replay"
                - "Record the decision and the fallback card"
            - name: Switch and network topology decision
              description: |-
                ## Purpose
                Every switch hop adds anything from a few nanoseconds for a layer 1 device to hundreds for an ordinary data centre switch, and every extra device is another thing to fail. Choosing the topology and switch class with latency, fan-out, monitoring and failover all on the table stops the network from being designed around whatever was in stock.

                ## Milestones
                1. The traffic that needs the fastest path separated from everything else.
                2. Options compared: layer 1 switching, low-latency layer 2 or 3 switches, direct cross-connects.
                3. Hop count and expected latency for each option drawn on the path diagram.
                4. A chosen topology with its failover path and its monitoring points.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded topology decision shows hop count, expected latency, failover path and monitoring points for the chosen design."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Mark which traffic needs the fastest path on the diagram"
                - "Compare layer 1, low-latency switch and direct cross-connect options"
                - "Draw hop counts and failover for each option"
                - "Record the chosen topology and why"
            - name: Colocation provider and rack choice
              description: |-
                ## Purpose
                Where your rack sits relative to the matching engine, and which provider runs the building, sets your cable length, cross-connect costs and support quality for years. Comparing exchange-run colocation with third-party data centres nearby, on latency, fees, power and contract terms, makes a multi-year commitment with the numbers in front of you.

                ## Milestones
                1. Venues you must reach listed with the data centres that host their matching engines.
                2. Two or three providers compared on latency to each venue, rack and power fees, cross-connect costs and remote hands.
                3. Contract terms checked: minimum term, notice period, price rises and exit costs.
                4. A provider and rack position chosen, with the contract reviewed by whoever signs for the firm.

                ## Notes
                Start from the **Vendor** template. Many exchanges equalise cable lengths inside their own colocation, so rack position may matter less than the provider claims.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A colocation provider is chosen from at least two compared on latency, fees and terms, with the contract reviewed before signing."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the data centres hosting each venue's matching engine"
                - "Request price sheets and latency figures from two or three providers"
                - "Compare contract terms side by side"
                - "Review the colocation contract terms before renewal @recurring(yearly)"
            - name: Wireless versus fibre routes between venues
              description: |-
                ## Purpose
                Between two distant data centres, microwave and millimetre wave links beat fibre by a large margin because light travels faster through air than glass, but they lose packets in heavy rain and cost far more. Weighing a wireless route against the best fibre path for the strategies that trade across venues shows whether the extra speed is worth the weather risk and the bill.

                ## Milestones
                1. Strategies that depend on data from a distant venue identified, with their decay curves.
                2. Fibre and wireless latency, bandwidth, availability and cost compared for each route.
                3. Rain fade and outage history checked, with a fallback to fibre designed.
                4. A decision recorded per route: fibre only, wireless with fibre backup, or no change.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each cross-venue route has a recorded decision backed by latency, availability, cost and the decay curve of the strategies using it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List strategies that react to data from a distant venue"
                - "Get latency, availability and price for fibre and wireless on each route"
                - "Ask providers for outage history in heavy weather"
                - "Record a route decision with the fibre fallback design"
            - name: Removing allocation and system calls from the hot path
              description: |-
                ## Purpose
                Even a single heap allocation, page fault or system call on the hot path can cost more than everything else it does, and they creep back in with every new feature. Finding each one with tracing tools, replacing them with preallocated pools and pre-faulted memory, and adding a test that fails if they return, keeps the path clean for good.

                ## Milestones
                1. Every allocation, page fault and system call during steady-state trading found with tracing.
                2. Allocations replaced with preallocated pools or arenas sized at start-up.
                3. Memory locked and pre-faulted at start-up, with huge pages where they help.
                4. A test that fails the build if the hot path allocates or calls the kernel.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Steady-state tracing shows zero allocations, page faults and system calls on the hot path, enforced by an automated test."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Trace one replay session for allocations, page faults and system calls"
                - "Replace the most frequent allocation with a preallocated pool"
                - "Lock and pre-fault all hot path memory at start-up"
                - "Add a test that fails if the hot path allocates"
            - name: Order book data structure benchmarking
              description: |-
                ## Purpose
                The book your feed handler maintains is updated on every message, and the choice between a sorted array, a map, or a fixed price ladder decides both median and tail. Benchmarking several structures on real captures from the instruments you trade, including the worst days, picks the one that suits your tick sizes and depth.

                ## Milestones
                1. Three candidate book structures implemented behind the same interface.
                2. Each run against captures from a normal day and the busiest day of the year.
                3. Update, best price lookup and depth read times compared at every percentile.
                4. The chosen structure documented with the instruments it suits and where it would break.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three book structures are benchmarked on normal and peak captures, and the chosen one is documented with its limits."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Define one interface for book updates and reads"
                - "Implement a sorted array, a map and a fixed price ladder version"
                - "Benchmark all three on normal and peak day captures"
                - "Write up the choice and the instruments where it would break"
            - name: Pre-trade risk checks inside the latency budget
              description: |-
                ## Purpose
                Speed without limits is how a firm loses a year's profit in minutes, and regulators in most markets require pre-trade controls on automated orders. Building price collars, size and exposure limits, message rate throttles and a kill switch into the hot path, with their own latency allowance, keeps the checks fast enough that nobody is tempted to bypass them.

                ## Milestones
                1. A written list of pre-trade checks: price collar, maximum order size, position and exposure limits, message rate and duplicate order detection.
                2. Each check implemented on the hot path with a measured cost inside its budget allowance.
                3. A kill switch that cancels open orders and blocks new ones, tested in the lab and in production outside hours.
                4. A written stop rule saying who may switch trading back on after a breach, and when.

                ## Notes
                Limits are set by the firm's risk owner, not the engineer. Your job is to make them impossible to skip and cheap to run.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every pre-trade check runs on the hot path within its allowance, and the kill switch and written stop rule have been tested."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Get the current limit values in writing from the risk owner"
                - "Measure the cost of each existing check on the replay workload"
                - "Test the kill switch on the lab host and outside trading hours"
                - "Write the stop rule for re-enabling trading after a breach"
            - name: Logging off the hot path
              description: |-
                ## Purpose
                Formatting a log line can take longer than the decision it records, yet without logs nobody can explain a bad trade. Moving to binary records written to a lock-free buffer and formatted by a separate process keeps a full audit trail at a cost of tens of nanoseconds per event.

                ## Milestones
                1. Every log call on the hot path listed with its measured cost.
                2. A binary logging scheme with fixed-size records and a decoder written.
                3. Formatting and disk writes moved to a core outside the trading path.
                4. The old and new logging compared on the replay workload, with audit completeness checked.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Hot path logging writes binary records to a lock-free buffer, with formatting off the path and no audit events lost on replay."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Measure the cost of each log call on the hot path"
                - "Define fixed-size binary records for each event type"
                - "Move formatting to a process on a housekeeping core"
                - "Check the new log contains every event from a replay session"
            - name: Build versus buy for feed handlers and gateways
              description: |-
                ## Purpose
                Vendors sell feed handlers, order gateways and complete trading stacks, often faster than a small team can build and with the venue certification already done. Comparing a vendor stack against building your own on latency, cost over five years, control and the people you would need to maintain it makes a choice you will live with for years.

                ## Milestones
                1. Components in scope listed: feed handlers per venue, book building, order gateway, risk checks.
                2. Two vendor offers compared with the cost and staffing of building in-house.
                3. Vendor latency verified on your lab hardware, not taken from their slides.
                4. A decision per component, with exit terms checked if buying.

                ## Notes
                Start from the **Purchase decision** template only for the vendor side; record the build estimate in the same comparison table.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each component has a build or buy decision based on lab-verified latency, five-year cost and staffing, with exit terms reviewed."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List the components that could be bought instead of built"
                - "Request offers and a trial licence from two vendors"
                - "Estimate the people and months needed to build each component"
                - "Benchmark vendor components in the lab before deciding"
            - name: First colocation go-live cutover
              description: |-
                ## Purpose
                Moving from an office or cloud host into a colocated rack touches hardware delivery, cross-connect orders, exchange certification and a cutover weekend, and each has lead times of weeks. A dated plan that runs from hardware shipping to the first live session, with a rollback, keeps the go-live from becoming a scramble.

                ## Milestones
                1. Cross-connects, market data lines and exchange connectivity ordered with confirmed delivery dates.
                2. Hosts built from the reference script, racked, and checked by remote hands.
                3. Venue conformance or certification tests passed where required.
                4. A week of parallel running against the existing setup, with matching fills and latency recorded.
                5. Go-live session completed with the old setup kept ready as rollback for two weeks.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The colocated setup goes live after passing conformance tests and a week of parallel running, with a two-week rollback kept."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "List every order with a lead time and the date it must be placed"
                - "Book the venue conformance test slot"
                - "Plan a week of parallel running with comparison reports"
                - "Write the rollback steps and who can call a rollback"
            - name: Exchange protocol or gateway migration cutover
              description: |-
                ## Purpose
                When a venue retires an old feed or order protocol, every connected firm must move by a fixed date, and parsers built for the old format break on the first unfamiliar message. Treating the migration as a dated project with test environment work, parallel feeds and a measured latency comparison avoids being the firm that discovers the change at the open.

                ## Milestones
                1. The venue's migration notice, timeline and test environment dates recorded.
                2. New decoder or gateway built and passing the venue's test environment scenarios.
                3. Old and new feeds run in parallel, with book states and latency compared.
                4. Cutover completed before the venue's deadline, with the old code removed afterwards.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new protocol is live before the venue's deadline, after parallel running showed matching books and recorded latency."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Record the venue's migration timeline and test environment dates"
                - "Read the new protocol specification and list every message change"
                - "Run old and new feeds in parallel and compare book states"
                - "Schedule the cutover outside trading hours before the deadline"
            - name: Annual failover and recovery drill
              description: |-
                ## Purpose
                Failover plans that have never been run are wishes, and in low-latency setups the backup path is often slower, untuned or missing a recent config change. A yearly drill that kills a primary host, a switch and a market data line in turn shows how long recovery really takes and what state the orders are left in.

                ## Milestones
                1. Failure scenarios chosen: primary host, top-of-rack switch, one market data line, time source.
                2. Expected recovery time and order state written down for each before the drill.
                3. Drill run outside trading hours with actual recovery times recorded.
                4. Every gap turned into a fix with an owner and date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly drill tests at least four failure scenarios, records actual recovery times and gives every gap an owned fix."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Pick the four failure scenarios for this year's drill"
                - "Write the expected recovery time for each before the drill"
                - "Run the failover and recovery drill outside trading hours @recurring(yearly)"
                - "Assign an owner and date to every gap found"
            - name: Timestamp accuracy evidence pack for the regulator
              description: |-
                ## Purpose
                Firms doing algorithmic or high-frequency trading in many markets must show their clocks are traceable to a reference and accurate to a stated level, and the evidence is usually requested at short notice. Keeping a yearly pack of time source documents, offset history and the method behind each figure turns a stressful request into a file you already have.

                ## Milestones
                1. The accuracy and traceability standard that applies to you confirmed with your compliance team.
                2. Time source documentation, PTP configuration and network diagram filed.
                3. Twelve months of offset history summarised with any excursions explained.
                4. The pack signed off by compliance and refreshed each year.

                ## Notes
                This is organisational. Compliance or legal advisers decide what your regulator requires; your job is to produce the evidence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly timestamp evidence pack with source, configuration and twelve months of offsets is signed off by compliance."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Ask compliance which timestamp accuracy rule applies to the firm"
                - "Collect time source certificates and the PTP configuration"
                - "Summarise the last twelve months of clock offsets"
                - "Refresh the timestamp evidence pack with compliance @recurring(yearly)"
            - name: Trading host hardware refresh
              description: |-
                ## Purpose
                New CPU generations change cache sizes, core counts and turbo behaviour, and a refresh done by swapping boxes overnight usually costs a month of retuning. Planning the refresh as a phased project, lab first, then one production host, then the rest, keeps the tail intact and gives a clean comparison with the old hardware.

                ## Milestones
                1. Candidate servers benchmarked in the lab against the current model on the standard replay.
                2. The reference build script updated for the new model and its BIOS.
                3. One production host replaced and run for two weeks beside the old ones.
                4. Remaining hosts replaced, old ones kept as spares or retired with data wiped.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All trading hosts are on the new model after lab benchmarks and a two-week single-host trial, with the build script updated."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Request a loan server of the candidate model for the lab"
                - "Benchmark it against the current model on the standard replay"
                - "Update the build script for the new BIOS and core layout"
                - "Replace one production host and compare for two weeks"
            - name: First 90 days on a low-latency team
              description: |-
                ## Purpose
                Joining a latency team means learning a codebase where small habits, a log call, a virtual function, a new dependency, have measurable costs, and the people who know why things are the way they are are often busy during market hours. A 30, 60 and 90 day plan gets you from reading the path diagram to shipping a measured improvement without breaking anything.

                ## Milestones
                1. By day 30: the path diagram, budget and change policy read, and the lab benchmark run yourself.
                2. By day 60: one small change shipped through the full benchmark and review process.
                3. By day 90: one measured improvement delivered, with before and after numbers in the log.
                4. Questions and unwritten rules you found turned into additions to the team's notes.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Ask before tuning anything in production, however obvious it looks.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within 90 days one measured latency improvement has shipped through the change process, and onboarding notes are added to team docs."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the path diagram, latency budget and change policy"
                - "Run the lab replay benchmark yourself and compare with the log"
                - "Pick one small improvement with your lead"
                - "Add three unwritten rules you learned to the team notes"
            - name: Moving from backend engineering into low latency
              description: |-
                ## Purpose
                Engineers from web, cloud or general backend work bring strong habits that work against them here: garbage-collected runtimes, generous abstractions, scaling out instead of shaving nanoseconds. A focused plan of reading, three small benchmark projects and one portfolio write-up rebuilds those instincts and gives a hiring manager something concrete to discuss.

                ## Milestones
                1. A reading list of four or five core texts and talks on systems performance and lock-free programming completed.
                2. Three small projects done: a ring buffer, a binary decoder and a kernel bypass receive test.
                3. Each project measured with percentiles and written up in a page.
                4. One write-up shared publicly or in interviews as evidence.

                ## Notes
                Interview practice belongs in the quant developer interviews area; this project is about the skills themselves.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three measured low-latency projects are complete with one-page write-ups, and one is ready to show an employer."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write down the habits from backend work that cost latency"
                - "Choose four core books or talks on systems performance"
                - "Ask the agent to turn your three project notes into one-page write-ups"
                - "Publish or prepare one write-up to discuss in interviews"
            - name: Solo engineer at a small fund or prop shop
              description: |-
                ## Purpose
                As the only engineer, you own the feed handlers, the hosts, the risk checks and the 2 a.m. phone call, with a budget nowhere near a large firm's. Choosing a short list of what must be excellent, usually measurement, risk checks and stability, and what can be merely adequate keeps you from spending a year on nanoseconds the strategy does not need.

                ## Milestones
                1. The speed decision, latency budget and risk checks in place before any tuning beyond basics.
                2. A written list of what you will not build, such as FPGA or wireless links, and why.
                3. Vendor or open-source components used wherever they meet the budget.
                4. A monthly note to the partners on latency, incidents and spending.

                ## Notes
                Write down how a second engineer or a contractor would take over in an emergency. Being a single point of failure is the biggest risk you carry.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written must-have and will-not-build list exists, and a monthly latency and incident note reaches the partners."
                cadence: rolling
              tasks:
                - "List the three things that must be excellent and everything that can wait"
                - "Write the will-not-build list with a reason for each item"
                - "Send the partners a latency, incident and spending note @recurring(monthly:27)"
                - "Write an emergency handover page for a contractor"
            - name: Home lab for latency engineering on a budget
              description: |-
                ## Purpose
                Nearly all the skills in this area can be practised without a trading firm: a second-hand server, two low-latency NICs bought used and a direct cable between them are enough to learn kernel bypass, core isolation and measurement. A modest home lab gives a student or career changer real numbers to talk about instead of textbook claims.

                ## Milestones
                1. A budget set and a used server and two NICs with kernel bypass support bought.
                2. Two hosts or two ports connected back to back with hardware timestamps working.
                3. A round-trip latency test run through the kernel and through a bypass path.
                4. A weekly practice slot kept for at least two months, with results logged.

                ## Notes
                Check power use and noise before buying rack servers for home. A small tower workstation is often enough.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A home lab measures round-trip latency through kernel and bypass paths, with two months of weekly practice logged."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Set a spending limit for the lab hardware"
                - "Search used listings for NICs with kernel bypass and hardware timestamps"
                - "Run a round-trip test through kernel and bypass paths"
                - "Spend a practice session on one latency experiment @recurring(weekly:sat)"
            - name: On-call rotation for trading hours
              description: |-
                ## Purpose
                When the system is fast and automated, minutes matter in an incident, and an on-call engineer who has to search for the kill switch procedure is already too late. A rotation with clear hours, a runbook for the five most likely failures and a written handover each week makes sure someone competent is always one call away.

                ## Milestones
                1. On-call hours aligned with the trading sessions you cover, including the pre-open.
                2. A runbook covering feed loss, clock loss, host failure, runaway orders and venue disconnect.
                3. Escalation contacts for the trading desk, risk owner, venue support and colocation remote hands.
                4. A weekly handover note with open issues passed to the next engineer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An on-call rotation covers every session, a five-scenario runbook exists, and weekly handover notes are kept."
                cadence: rolling
              tasks:
                - "Write runbook steps for the five most likely failures"
                - "Collect escalation numbers for desk, risk, venues and remote hands"
                - "Write the on-call handover note for the next engineer @recurring(weekly:fri)"
                - "Walk a new rota member through the kill switch procedure"
            - name: Leading a latency engineering team
              description: |-
                ## Purpose
                A team lead owns the budget, the standards and the arguments with the desk about what is worth making faster. A monthly latency review, clear ownership of each stage and a short list of team standards stop the work from fragmenting into individual tuning hobbies.

                ## Milestones
                1. Each stage of the latency budget owned by a named engineer.
                2. Team standards written: measurement method, benchmark thresholds, code review checks for the hot path.
                3. A monthly review of percentiles, incidents and the improvement backlog with the desk.
                4. A development plan for each engineer that includes one area of the path they will learn next.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every budget stage has an owner, team standards are written, and a monthly latency review with the desk is held and minuted."
                cadence: rolling
              tasks:
                - "Assign a named owner to every stage of the latency budget"
                - "Write the team's hot path code review standards"
                - "Chair the monthly latency review with the trading desk @recurring(monthly:17)"
                - "Agree a next area to learn with each engineer"
            - name: Deterministic replay of production captures
              description: |-
                ## Purpose
                Bugs and spikes seen once in production are nearly impossible to fix unless you can make them happen again. A replay system that feeds recorded packets and recorded exchange responses into the exact same build, with the same timing, reproduces the incident on demand and turns every past spike into a regression test.

                ## Milestones
                1. Inbound market data and outbound order traffic captured for every session and kept for an agreed period.
                2. A replay tool that feeds captures to the trading binary at original timing, with exchange responses simulated from the capture.
                3. Strategy decisions in replay matching production for a full session.
                4. Three past incidents reproduced and added as regression tests.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A full session replays with decisions matching production, and three past incidents are reproduced as regression tests."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Agree how long session captures are kept and where"
                - "Replay one full session and compare decisions with production"
                - "List every source of nondeterminism found and remove it"
                - "Turn three past incidents into regression tests"
            - name: Jitter hunting across firmware and power states
              description: |-
                ## Purpose
                When the median is excellent but a few orders a day take 50 times longer, the cause is usually outside your code: system management interrupts, CPU frequency changes, memory refresh, a stray kernel worker. Hunting jitter with tracing tools and controlled BIOS experiments is slow detective work that only pays once the basics are done, but it is where the worst tails live.

                ## Milestones
                1. A long jitter test on an idle trading core with every spike timestamped.
                2. Spikes correlated with system management interrupt counts, frequency changes and kernel activity.
                3. BIOS and power settings changed one at a time with the jitter test repeated.
                4. The remaining spikes explained or accepted, with findings added to the build script.

                ## Notes
                Some BIOS settings that remove jitter raise power and heat; agree changes with whoever runs the rack.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Spikes from a long jitter test are traced to causes or accepted in writing, and fixes are added to the reference build."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Run an eight-hour jitter test on an idle isolated core"
                - "Record system management interrupt counts before and after the test"
                - "Change one BIOS power setting and repeat the test"
                - "Add confirmed fixes to the reference build script"
            - name: FPGA offload feasibility study
              description: |-
                ## Purpose
                Field programmable gate arrays can parse a feed and fire an order in well under a microsecond, but they need hardware engineers, long build cycles and careful risk checks in silicon. A feasibility study weighing which stage to offload, what it would save against the decay curve, and what it would cost to staff, decides whether FPGA belongs in your roadmap at all.

                ## Milestones
                1. Candidate stages for offload listed, such as feed parsing, book building or order triggering.
                2. Expected saving for each estimated and compared with the strategy decay curve.
                3. Build, buy and hybrid options priced, including staff, tools and vendor IP.
                4. Risk check placement on the FPGA path designed in outline.
                5. A go or no-go recommendation with the conditions that would change it.

                ## Notes
                Many teams start with a vendor FPGA feed handler or NIC with on-board logic before writing their own.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A go or no-go FPGA recommendation compares savings with the decay curve and prices staff, tools and risk check design."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "List the stages that could move to an FPGA"
                - "Estimate the saving per stage against the decay curve"
                - "Get prices for a vendor FPGA feed handler and for in-house tooling"
                - "Write the go or no-go recommendation with its conditions"
---

# Low-Latency Trading Systems

Low-latency trading systems are the wire, the host and the code between a market data packet arriving and an order leaving: network and hardware choices, kernel bypass, lock-free code and the measurement that proves any of it helped. This area is for engineers who build and run that path, at a trading firm, a small fund or in a home lab while learning. It starts with foundations (whether speed matters at all, a latency budget, the tick-to-trade inventory, hardware timestamps, synced clocks and a baseline), then the routines that keep hosts and code fast, the skills behind caches, memory ordering and kernel bypass, the hardware, network and code decisions, dated events such as a colocation go-live, setups for different situations, and a few specialist problems like FPGA offload and jitter hunting.

What repeats is a daily percentile check and a pre-open host checklist, a weekly regression benchmark and clock review, monthly drift audits and venue notice reads, and quarterly cost, capacity and patch reviews, with a yearly failover drill. Speed only matters when the strategy behind it has an edge, and most strategies fail out of sample however fast they run, so every hot path carries hard pre-trade risk limits, a kill switch and a written stop rule, and nothing here is trading or investment advice. The Metrics log, Operational checklist, Remediation plan, Purchase decision, Vendor and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
