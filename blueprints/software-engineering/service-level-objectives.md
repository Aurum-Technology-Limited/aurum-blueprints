---
id: software-engineering.service-level-objectives
name: Service Level Objectives
description: "User flows turned into SLIs, SLO targets set from real data, error budgets with an agreed policy, burn-rate alerts and the review rhythm that turns reliability into a planning input."
category: business
version: 1.0.0
tags: [software-engineering, service-level-objectives, engineer, team, sre, error-budgets, reliability, sli]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - purchase-decision
    - reading-queue
    - remediation-plan
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Service Level Objectives
          description: "Defining reliability targets, error budgets and the indicators behind them, and using them to balance shipping features against stability work."
          projects:
            - name: Critical user flow inventory for one service
              description: |-
                ## Purpose
                Every SLO is only as useful as the user experience it measures, and most teams start by measuring whatever their metrics system already exports. Listing the five to ten things users actually do with the service, such as signing in, searching or paying, and ranking them by how much a failure hurts, gives every later SLI a reason to exist. Pick one service you own and finish this before touching a dashboard.

                ## Milestones
                1. A list of every user-facing interaction the service supports, gathered from product, support tickets and traffic data.
                2. Each flow ranked by business impact and by how often users hit it.
                3. The top three flows chosen as the first candidates for SLIs.
                4. The flow list stored in the service repository with its owner named.

                ## Notes
                Include machine users. A webhook consumer or a partner API client is a user whose bad day costs you just as much.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ranked list of the service's user flows, with the top three marked for SLIs, is committed to the service repository."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down every action a user can take against the service in one sitting"
                - "Pull the last quarter of support tickets that mention this service"
                - "Rank each flow by impact and frequency with the product owner"
                - "Commit the ranked flow list to the service repository"
            - name: Shared SLO glossary for the team
              description: |-
                ## Purpose
                Teams argue for weeks when one person means uptime, another means success rate and a third means the contractual SLA. A one-page glossary defining SLI, SLO, SLA, error budget, burn rate, compliance window and good event versus valid event settles the vocabulary before any target is set. New joiners then read one page instead of three books.

                ## Milestones
                1. A one-page glossary covering at least eight terms, each with a worked example from your own system.
                2. The difference between an internal SLO and a contractual SLA spelled out in a short paragraph.
                3. The glossary reviewed by an engineer, a product manager and someone from support.
                4. The glossary linked from the team handbook and the onboarding checklist.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reviewed one-page SLO glossary with worked examples is published and linked from the team handbook."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the reliability terms the team already uses inconsistently"
                - "Write one definition and one local example per term"
                - "Ask a product manager to check the glossary reads clearly to them"
                - "Link the glossary from the handbook and onboarding checklist"
            - name: First availability SLI from request logs
              description: |-
                ## Purpose
                Availability is the natural first SLI, but the definition hides real choices: which requests count, whether a 4xx is the user's fault or yours, and where you measure. Writing the SLI as good requests divided by valid requests, with each term defined precisely and the query saved, gives the team one number everyone computes the same way.

                ## Milestones
                1. A written SLI specification naming the data source, the measurement point and the exact good and valid event filters.
                2. A decision recorded on how client errors, health checks and synthetic traffic are treated.
                3. A saved query or recording rule that produces the SLI over any time window.
                4. The SLI computed for the last 30 days and checked by hand against a sample of raw logs.

                ## Notes
                Measure as close to the user as you can afford. A load balancer log usually tells a truer story than the application's own counters, because it sees requests the application never received.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An availability SLI with a written good and valid event definition and a saved query returns a verified 30-day value."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the measurement point for the service's highest-ranked flow"
                - "Write the good and valid event filters in plain words first"
                - "Translate the filters into a saved query or recording rule"
                - "Hand-check 50 raw requests against the query's classification"
            - name: First latency SLI with a percentile threshold
              description: |-
                ## Purpose
                A service that answers every request in eight seconds is technically available and practically broken. A latency SLI phrased as the proportion of valid requests served faster than a threshold, rather than an average, captures the slow tail users actually feel. Getting the threshold from user research or product expectations, not from what the graph happens to show, keeps it honest.

                ## Milestones
                1. A latency threshold chosen for the top flow, with the reason written down.
                2. The SLI expressed as the share of valid requests faster than that threshold.
                3. A check that the metrics histogram has a bucket boundary at or near the threshold.
                4. The latency SLI computed for the last 30 days alongside the availability SLI.

                ## Notes
                Averages hide the tail, and percentiles of percentiles across hosts are mathematically wrong. Count requests under the threshold instead.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A latency SLI defined as the share of requests under a stated threshold returns a 30-day value from correctly bucketed data."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the product owner how long users will wait before the flow feels broken"
                - "Check the histogram bucket boundaries around that threshold"
                - "Add a bucket at the threshold if the nearest one is far off"
                - "Save the latency SLI query next to the availability one"
            - name: Ninety-day SLI baseline before setting targets
              description: |-
                ## Purpose
                Anyone who sets a target before looking at history usually pick 99.99 and breach it in week one. Running the new SLIs over the last 90 days, day by day, shows the real level of service, the bad days and their causes. That history is the evidence every later target conversation leans on.

                ## Milestones
                1. Daily values of each SLI for the last 90 days in one table or chart.
                2. The worst five days identified, each with a known or suspected cause.
                3. The 90-day compliance figure for each SLI written as a percentage.
                4. A short note on any gaps or anomalies in the underlying data.

                ## Notes
                Start from the **Metrics log** template to keep the baseline next to later monthly figures.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A 90-day daily SLI history with the five worst days explained and an overall compliance figure per SLI is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run each saved SLI query for the last 90 days at daily resolution"
                - "Mark the five worst days and match them to incidents or deploys"
                - "Calculate the overall 90-day compliance for each SLI"
                - "Note any days with missing or suspicious data"
            - name: Choosing the first SLO target from evidence
              description: |-
                ## Purpose
                The right first target is slightly better than what users have recently tolerated, not the number on a vendor's marketing page. Using the baseline, the cost of each extra nine and what users complained about, the team picks a target it can meet most months and would genuinely act on if it slipped. Writing down the rejected alternatives prevents the same debate next quarter.

                ## Milestones
                1. Two or three candidate targets compared against the 90-day baseline.
                2. The monthly error budget each candidate implies, in minutes and in failed requests.
                3. A target chosen for each SLI with the product owner's agreement.
                4. The rejected options and the reasons recorded with the decision.

                ## Notes
                A target you would ignore when breached is worse than no target. If nobody would change their plans at 99.5, do not set 99.9.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each first SLI has an agreed target with its implied monthly error budget and the rejected alternatives written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compute the monthly error budget for three candidate targets"
                - "Compare each candidate with how many baseline months would have breached"
                - "Agree the target with the product owner in a 30-minute meeting"
                - "Record the choice and the rejected options in the decision log"
            - name: SLO document for the first service
              description: |-
                ## Purpose
                With SLIs and targets in hand, the team needs a single home that states what is measured, why, who owns it and what happens when it is missed. A short SLO document reviewed by engineering and product is what turns a dashboard into a commitment. It also becomes the template every other service copies.

                ## Milestones
                1. A document listing each SLI specification, its target, window and owner.
                2. A rationale section linking each SLO to a user flow and the baseline.
                3. Sign-off from the engineering lead and the product owner, with the date.
                4. A review date set no more than three months ahead.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off SLO document with SLI specifications, targets, owners and a review date is stored in the service repository."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft an SLO document outline from the SLI notes"
                - "Fill in the rationale for each SLO from the flow inventory"
                - "Circulate the draft to engineering and product for comment"
                - "Record sign-off names and the next review date in the document"
            - name: Rolling or calendar compliance window decision
              description: |-
                ## Purpose
                A 28-day rolling window forgives a bad day gradually and suits operational decisions, while a calendar month lines up with reporting and contracts but resets abruptly. Choosing deliberately, and using the same window across services, avoids reports that disagree with dashboards. Most teams end up using a rolling window for alerting and a calendar month for reporting.

                ## Milestones
                1. The behaviour of both window types shown on the service's last 90 days of data.
                2. A choice recorded for operational use and for reporting, with reasons.
                3. The window length fixed, for example 28 days so every window holds four full weeks.
                4. Dashboards and queries updated to use the chosen windows.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The team's operational and reporting SLO windows are recorded in the SLO document and every dashboard uses them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Plot one SLI on a 28-day rolling window and on calendar months"
                - "Compare how each window would have treated the worst baseline week"
                - "Record the window choice in the SLO document"
                - "Update every SLO query to the agreed window length"
            - name: Error budget policy agreed with product
              description: |-
                ## Purpose
                Without a policy, an error budget is just a chart. The policy says in advance what happens as the budget runs down, such as pausing risky launches, moving engineers to reliability work or escalating to a director, so that nobody has to negotiate during a bad week. Agreeing it while things are calm is the whole point.

                ## Milestones
                1. A written policy with actions at defined thresholds, for example half the budget spent and all of it spent.
                2. Explicit exceptions listed, such as security fixes and changes that improve reliability.
                3. An escalation path for disagreements, naming the person who decides.
                4. Signatures or recorded approval from engineering and product leadership.

                ## Notes
                Keep the actions proportionate. A policy that freezes everything at the first breach will be quietly abandoned the first time it bites.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An error budget policy with thresholds, actions, exceptions and an escalation owner is approved by engineering and product leadership."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft actions for half-spent, fully spent and repeatedly spent budgets"
                - "List the change types exempt from any freeze"
                - "Name the person who decides when engineering and product disagree"
                - "Get written approval from both leadership sides"
            - name: Per-service SLO dashboard
              description: |-
                ## Purpose
                Engineers check reliability where it is easiest to look, so the SLO view needs to be one click from the service's home page. A dashboard showing current compliance, remaining budget, burn rate and the SLI over the window lets anyone answer how much room is left in under a minute. Keep it to the SLO story and leave general monitoring panels elsewhere.

                ## Milestones
                1. A dashboard per SLO with compliance, remaining budget and current burn rate.
                2. A budget-remaining chart over the full window, with deploys marked.
                3. A link to the SLO document and the error budget policy on the dashboard.
                4. The dashboard linked from the service catalogue entry and the team channel.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every SLO for the service has a dashboard showing compliance, budget remaining and burn rate, linked from the service catalogue."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the four panels the SLO dashboard needs"
                - "Build the remaining-budget panel with deploy annotations"
                - "Add links to the SLO document and budget policy"
                - "Pin the dashboard link in the team channel"
            - name: Monday error budget check
              description: |-
                ## Purpose
                Budgets rarely vanish in one incident; they leak through a slow deploy here and a flaky dependency there. A ten-minute check every Monday of each service's remaining budget and burn trend spots the leak while there is still time to act. It also gives the week's planning a reliability input that is a number, not a feeling.

                ## Milestones
                1. A standing ten-minute slot at the start of each week.
                2. Remaining budget and seven-day burn noted for every SLO the team owns.
                3. Any SLO under a quarter of its budget raised in the weekly planning meeting.
                4. A running record of weekly budget figures kept for the monthly review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly budget figures for every owned SLO are recorded for at least eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Book a recurring ten-minute Monday slot in the team calendar"
                - "Note remaining budget and seven-day burn for every owned SLO @recurring(weekly:mon)"
                - "Raise any SLO below a quarter of its budget in planning"
                - "Keep the weekly figures in one shared table"
            - name: Monthly SLO review with product
              description: |-
                ## Purpose
                SLOs drift out of relevance when engineers are the only people who look at them. A 30-minute monthly review with the product owner covering compliance, budget spend causes and upcoming risky launches keeps the targets connected to decisions. It is also the meeting where policy actions are confirmed rather than argued.

                ## Milestones
                1. A recurring monthly meeting with engineering and product attendees.
                2. A standard agenda: compliance, top budget spenders, policy actions, upcoming launches.
                3. Notes and decisions recorded for every meeting.
                4. Every agreed action carried to the next meeting and closed or explained.

                ## Notes
                Start from the **Meeting notes** template so actions carry forward month to month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly SLO reviews have recorded notes, decisions and closed or carried actions."
                cadence: rolling
              tasks:
                - "Invite the product owner to a recurring 30-minute SLO review"
                - "Prepare the compliance and budget spend summary @recurring(monthly:12)"
                - "Record decisions and owners during the meeting"
                - "Check last month's actions before each review starts"
            - name: Burn-rate alerts on the error budget
              description: |-
                ## Purpose
                Paging when the SLI dips below target for five minutes wakes people for blips and misses slow leaks. Alerts on burn rate, how fast the budget is being consumed, page only when the budget would run out within hours or days if nothing changed. Multiwindow rules, such as a fast and a slow pair, catch both sudden outages and gradual degradation with far fewer false pages.

                ## Milestones
                1. A fast-burn rule that pages and a slow-burn rule that opens a ticket for each SLO.
                2. Each rule using a long and a short window so alerts clear promptly after recovery.
                3. Every rule tested against at least one historical incident from the baseline.
                4. Old threshold alerts on the same signal retired once burn-rate alerts prove reliable.

                ## Notes
                Work the numbers on paper first: what burn rate spends 2 percent of a 28-day budget in one hour? The alert thresholds follow from that arithmetic.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every SLO has tested fast and slow multiwindow burn-rate alerts, and the threshold alerts they replace are removed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Calculate fast and slow burn thresholds for the first SLO"
                - "Replay one past incident to confirm the fast rule would have paged"
                - "Route slow-burn alerts to a ticket queue rather than a pager"
                - "Review every burn-rate page from last month for false alarms @recurring(monthly:9)"
            - name: Quarterly SLO target recalibration
              description: |-
                ## Purpose
                Targets set from one quarter of data rarely stay right: traffic shifts, architecture changes and users raise their expectations. Every quarter, compare each SLO against compliance, user complaints and the work its budget triggered, then keep, tighten or loosen it on purpose. Unchanged targets should be a decision, not an accident.

                ## Milestones
                1. Each SLO's last-quarter compliance set beside user complaints and incident counts.
                2. A keep, tighten or loosen decision recorded for every SLO.
                3. Changed targets updated in the SLO document, alerts and dashboards on the same day.
                4. The recalibration summary shared with product and the wider team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every SLO has a keep, tighten or loosen decision recorded each quarter, with documents and alerts updated to match."
                cadence: cyclic
              tasks:
                - "Collect last quarter's compliance for every SLO into one table @recurring(quarterly)"
                - "Set user complaint and incident counts beside each SLO"
                - "Record a keep, tighten or loosen decision per SLO"
                - "Update the SLO document, alerts and dashboards for changed targets"
            - name: Error budget spend ledger by cause
              description: |-
                ## Purpose
                Knowing the budget is half gone matters less than knowing what spent it. A ledger that attributes each chunk of budget burn to a cause, such as a bad deploy, a dependency outage, a capacity shortfall or planned maintenance, shows where reliability work would pay back most. After three months the pattern usually points at one or two fixable causes.

                ## Milestones
                1. A ledger with date, SLO, budget consumed and cause category for every notable burn.
                2. A fixed list of five to eight cause categories agreed by the team.
                3. A monthly total per cause, ranked from largest to smallest.
                4. The top cause turned into a prioritised reliability ticket each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months of budget spend are attributed to cause categories, each month producing one prioritised reliability ticket."
                cadence: rolling
              tasks:
                - "Agree five to eight budget spend cause categories with the team"
                - "Log each notable budget burn with its cause within a day"
                - "Total the ledger by cause and rank the categories @recurring(monthly:20)"
                - "Open a reliability ticket for the month's largest cause"
            - name: Release freeze when the budget is exhausted
              description: |-
                ## Purpose
                Any budget policy only has teeth if someone checks it and acts. A clear routine for declaring, announcing and lifting a feature freeze when an SLO's budget is spent turns the policy from a document into behaviour. Done well, a freeze lasts days, focuses the team and ends with the budget recovering.

                ## Milestones
                1. A named owner who declares and lifts freezes under the policy.
                2. A standard announcement message listing what is frozen, what is exempt and the exit condition.
                3. A visible freeze flag on the deploy pipeline or team channel topic.
                4. Every freeze recorded with start date, end date and the work done during it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every budget-exhaustion freeze has a recorded announcement, exemptions, exit condition and end date."
                cadence: rolling
              tasks:
                - "Name the freeze owner in the error budget policy"
                - "Write the freeze announcement message as a reusable snippet"
                - "Check whether any SLO meets the freeze condition @recurring(weekly:thu)"
                - "Log each freeze with its dates and the reliability work done"
            - name: SLI data quality checks
              description: |-
                ## Purpose
                Broken telemetry makes an SLO confidently wrong. Metrics pipelines drop data, a renamed label silently empties a query, and a new endpoint may never be counted at all. A short monthly check that the SLI still sees the traffic it should catches these failures before a review is based on fiction.

                ## Milestones
                1. A check comparing SLI valid event counts with an independent traffic source.
                2. An alert or report when the SLI's event volume drops sharply with no matching traffic drop.
                3. A list of endpoints or flows added since the SLI was defined, checked for coverage.
                4. Each data gap found logged with its fix and the affected period.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly SLI data checks are recorded for six months, with every gap found logged alongside its fix."
                cadence: rolling
              tasks:
                - "Pick an independent traffic count to compare with each SLI"
                - "Set up a report for sudden drops in SLI event volume"
                - "Compare SLI volume with the independent count @recurring(monthly:7)"
                - "Check new endpoints from recent releases are covered by the SLI"
            - name: Planned maintenance and the error budget
              description: |-
                ## Purpose
                Opinions differ on whether planned downtime should count against the budget, and the answer changes how maintenance is scheduled. Deciding once, then planning each month's maintenance against the remaining budget, stops arguments and nudges the team towards zero-downtime changes. Users rarely care whether an outage was on the calendar.

                ## Milestones
                1. A recorded decision on whether planned maintenance counts against each SLO.
                2. A maintenance calendar showing expected budget cost for each window.
                3. A rule that maintenance moves if it would spend more than an agreed share of the remaining budget.
                4. Actual budget spent by each maintenance window compared with the estimate.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every planned maintenance window for three months has a recorded budget estimate and actual budget spent."
                cadence: rolling
              tasks:
                - "Decide with product whether planned downtime counts against the SLO"
                - "Estimate the budget cost of each scheduled maintenance window"
                - "Check next month's maintenance against remaining budget @recurring(monthly:24)"
                - "Compare actual with estimated budget spend after each window"
            - name: Feature and reliability work split from budget status
              description: |-
                ## Purpose
                Error budgets pay off through a planning rule: when the budget is healthy, ship features faster; when it is thin, spend capacity on reliability. Writing that rule as a simple table, for example the share of sprint capacity reserved for reliability at each budget level, makes the trade-off visible at planning instead of negotiated in corridors.

                ## Milestones
                1. A table mapping budget remaining to the share of capacity reserved for reliability work.
                2. The table agreed with the product owner and added to the planning checklist.
                3. Each planning session recording the budget status and the split applied.
                4. A quarterly look at whether the split actually moved compliance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every planning session for a quarter records the budget status and the reliability capacity share it triggered."
                cadence: rolling
              tasks:
                - "Draft a budget-to-capacity table with three or four bands"
                - "Agree the bands with the product owner"
                - "Add budget status as the first item on the planning checklist"
                - "Record the split applied and the reason @recurring(monthly:28)"
            - name: SLO coverage tracker across services
              description: |-
                ## Purpose
                After the first few services have SLOs, the gaps become the risk: the payment worker with no SLI, the internal API every team calls but nobody measures. A tracker listing every service, its tier, whether it has SLOs, alerts and a policy, and when they were last reviewed, shows coverage at a glance and where to spend effort next.

                ## Milestones
                1. Every production service listed with an owner and a criticality tier.
                2. Columns for SLIs defined, SLO document, burn-rate alerts, policy and last review date.
                3. A coverage figure for top-tier services reported monthly.
                4. The three biggest gaps assigned to owners with target dates.

                ## Notes
                Start from the **Metrics log** template to record the monthly coverage figure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker covers every production service and reports top-tier SLO coverage monthly for at least three months."
                cadence: rolling
              tasks:
                - "Export the list of production services from the service catalogue"
                - "Add tier, owner and SLO status columns for each service"
                - "Update coverage and report the top-tier figure @recurring(monthly:26)"
                - "Assign the three largest coverage gaps to named owners"
            - name: Error budget arithmetic and the nines
              description: |-
                ## Purpose
                Engineers who can turn 99.95 percent over 28 days into minutes and failed requests in their head make better target decisions and spot nonsense in meetings. Practising the arithmetic, including how traffic volume changes a request-based budget and why each extra nine costs roughly ten times more, takes an afternoon and pays back in every SLO conversation.

                ## Milestones
                1. A personal cheat sheet converting common targets into minutes per 28 days and per quarter.
                2. Five worked examples converting targets into failed requests at your real traffic levels.
                3. An explanation, in your own words, of why availability multiplies across serial dependencies.
                4. The cheat sheet shared with the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cheat sheet of target-to-budget conversions and five worked examples at real traffic levels is shared with the team."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Convert 99, 99.5, 99.9 and 99.95 percent into minutes per 28 days"
                - "Work out the failed request budget at your service's daily volume"
                - "Calculate the combined availability of three serial dependencies"
                - "Post the cheat sheet in the team's reliability channel"
            - name: Burn rate and multiwindow alerting maths
              description: |-
                ## Purpose
                Burn-rate alerting looks like magic numbers until you derive them once. Working through how a burn rate of 14.4 spends 2 percent of a 30-day budget in an hour, and why pairing a long and a short window balances detection time, precision and reset time, lets you tune alerts for your own windows instead of copying someone else's.

                ## Milestones
                1. The burn rate formula written out and applied to your own SLO window.
                2. Detection time and budget spent before alerting calculated for two candidate rules.
                3. A comparison of single-window and multiwindow rules on one historical incident.
                4. A one-page explainer added to the SLO document for future on-call engineers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page explainer deriving the team's burn-rate thresholds from its own window is added to the SLO document."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write out the burn rate formula for your SLO window"
                - "Calculate detection time for a 2 percent and a 5 percent budget spend"
                - "Replay one past incident under single and multiwindow rules"
                - "Write a one-page explainer of the chosen thresholds"
            - name: Latency SLIs with histograms done properly
              description: |-
                ## Purpose
                Latency SLIs go wrong in quiet ways: percentiles averaged across hosts, summaries that cannot be aggregated, bucket boundaries far from the threshold, and client-side timeouts that never reach the server metrics. Learning how histograms and threshold counting really work, and testing them against your own data, saves months of trusting a misleading number.

                ## Milestones
                1. A clear explanation of why percentiles cannot be averaged and what to do instead.
                2. The service's histogram buckets reviewed against each latency threshold.
                3. A comparison of server-measured and client-measured latency for one flow.
                4. Any flawed latency query in use corrected and the change noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every latency SLI in use is checked for aggregation and bucket errors, and any flawed query is corrected."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read your metrics system's documentation on histogram aggregation"
                - "List the bucket boundaries nearest each latency threshold"
                - "Compare server and client latency for the top flow"
                - "Fix any latency query that averages percentiles"
            - name: Request-based versus time-window SLIs
              description: |-
                ## Purpose
                Counting good requests and counting good minutes give different answers, and each suits different services. Request-based SLIs weight busy periods more heavily and handle variable traffic well, while time-window SLIs suit low-traffic services and map neatly to contractual uptime. Understanding the trade-off lets you pick per SLO rather than by habit.

                ## Milestones
                1. Both SLI styles computed for the same service over the same 30 days.
                2. The difference explained with reference to traffic peaks and quiet periods.
                3. A rule of thumb written for which style the team uses when.
                4. Each existing SLO checked against the rule.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written rule for choosing request-based or time-window SLIs is agreed, with every existing SLO checked against it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Compute a request-based and a time-window SLI for one service"
                - "Explain the gap between them in a short paragraph"
                - "Write a rule of thumb for choosing between the two"
                - "Check each existing SLO against the rule"
            - name: Client-side SLIs from probes and real-user data
              description: |-
                ## Purpose
                Server metrics cannot see failures that happen before a request arrives: DNS problems, a broken CDN edge, a JavaScript error that stops the call being made. Learning to build SLIs from synthetic probes and real-user monitoring closes that blind spot, and shows how much of the user's bad experience your server-side SLO is missing.

                ## Milestones
                1. The blind spots of the current server-side SLIs listed for the top flow.
                2. A synthetic probe running the flow from at least two regions.
                3. A real-user SLI candidate, such as successful page loads, computed for 30 days.
                4. A comparison of client-side and server-side SLI values with the gap explained.

                ## Notes
                Synthetic probes are a supplement, not a replacement: they sample a few paths at a fixed rate, while real users find the paths you did not think of.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A client-side SLI for the top flow is computed for 30 days and compared with the server-side SLI, with the gap explained."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the failures the server-side SLI cannot see"
                - "Set up a synthetic probe for the top flow from two regions"
                - "Compute a real-user success SLI from browser or app telemetry"
                - "Write up the gap between client and server SLI values"
            - name: SLOs for data pipelines and freshness
              description: |-
                ## Purpose
                Pipelines fail differently from request services: the data arrives late, arrives incomplete or arrives wrong, and nobody notices until a report looks odd. Learning to express freshness, completeness and correctness as SLIs gives data consumers a promise they can plan around, and gives the pipeline team an early warning that is not a user complaint.

                ## Milestones
                1. The consumers of one pipeline listed with how fresh they need the data to be.
                2. A freshness SLI defined, such as the share of minutes in which the newest record is under a stated age.
                3. A completeness or correctness SLI defined using row counts or validation checks.
                4. Targets agreed with the main data consumer and recorded in an SLO document.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One pipeline has freshness and completeness SLIs with targets agreed by its main consumer and recorded in an SLO document."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the pipeline's main consumer how stale the data can safely be"
                - "Define a freshness SLI from the newest record's timestamp"
                - "Define a completeness SLI from expected and actual row counts"
                - "Agree targets with the consumer and write the SLO document"
            - name: SLOs for low-traffic services
              description: |-
                ## Purpose
                With a few hundred requests a day, a single failure can blow a 99.9 percent budget, and burn-rate alerts become noise. Learning the options, such as longer windows, time-window SLIs, synthetic traffic to raise volume, or grouping related services, lets small internal tools and new products have meaningful SLOs without constant false alarms.

                ## Milestones
                1. The services with too little traffic for standard SLO maths identified.
                2. The effect of one failed request on each one's budget calculated.
                3. An approach chosen per service from the documented options.
                4. Alerting rules adjusted so one failure no longer pages anyone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each low-traffic service has a documented SLO approach and alerting that does not page on a single failed request."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List services with fewer than a thousand valid events a day"
                - "Calculate how much budget one failure spends for each"
                - "Choose longer windows, synthetic traffic or grouping per service"
                - "Adjust alert rules so a single failure cannot page"
            - name: SLO reading list from the SRE literature
              description: |-
                ## Purpose
                Most of what the industry knows about SLOs sits in a handful of books, chapters and conference talks, and reading them in a sensible order saves rediscovering their lessons the hard way. A short reading queue, worked through at one item a month and discussed with a colleague, builds judgement that no tool provides.

                ## Milestones
                1. A queue of eight to twelve SLO readings and talks in a deliberate order.
                2. One item read or watched each month with three notes on what applies to your services.
                3. At least one idea from the reading tried on a real SLO.
                4. The queue shared so others can follow the same path.

                ## Notes
                Start from the **Reading queue** template. Begin with the SLO and alerting chapters of the well-known site reliability engineering books before vendor material.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six items from the SLO reading queue have notes recorded and at least one idea has been applied to a real SLO."
                cadence: rolling
              tasks:
                - "Build a queue of eight SLO readings and talks in order"
                - "Read one item and write three applicable notes @recurring(monthly:17)"
                - "Try one idea from the reading on a real SLO"
                - "Share the queue in the reliability channel"
            - name: SLO tooling choice, build or buy
              description: |-
                ## Purpose
                SLOs can live as recording rules and dashboards in your existing metrics stack, in an open-source SLO generator, or in a commercial platform with budget tracking built in. The right choice depends on how many services you have, who maintains the tooling and what it costs per SLO. Comparing two or three options against the same criteria avoids buying a platform nobody configures.

                ## Milestones
                1. Requirements listed: SLI sources, window types, burn-rate alerts, reporting and SLOs as code.
                2. Two or three options scored against the same requirements, including running cost.
                3. A trial of the leading option on one real service.
                4. A recorded decision with the owner of the tooling named.

                ## Notes
                Start from the **Purchase decision** template, even for open-source options: the maintenance hours are the real price.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of at least two SLO tooling options and a trial result support a recorded decision with a named owner."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the must-have and nice-to-have SLO tooling requirements"
                - "Score two or three options against the same list"
                - "Trial the leading option on one service for two weeks"
                - "Record the decision and the tooling owner"
            - name: SLOs as code in the service repository
              description: |-
                ## Purpose
                When SLO targets live only in a dashboard's settings, they change without review and vanish when the tool changes. Defining each SLO in a version-controlled specification file, from which queries, alerts and dashboards are generated, gives every target change a review, a history and a single source of truth. Open specifications exist for exactly this.

                ## Milestones
                1. A specification format chosen, either an open SLO specification or a simple in-house schema.
                2. Every SLO for one service expressed in the file and stored in its repository.
                3. Recording rules, alerts and dashboards generated from the file in the pipeline.
                4. Target changes required to go through the normal code review process.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One service's SLOs, alerts and dashboards are generated from a reviewed specification file in its repository."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Compare an open SLO specification format with a simple in-house schema"
                - "Write the first service's SLOs in the chosen format"
                - "Generate alert rules from the file in the build pipeline"
                - "Require code review for any change to the SLO file"
            - name: Retiring vanity uptime figures
              description: |-
                ## Purpose
                Many teams still report a server uptime percentage or a ping check that stays green while users fail to log in. Replacing those figures in status reports and leadership updates with SLO compliance stops the organisation celebrating a number that does not reflect user experience. Expect some resistance: vanity numbers usually look better.

                ## Milestones
                1. Every reliability figure currently reported upwards listed with its source.
                2. Each figure compared with the matching SLI for the same period.
                3. Reports switched to SLO compliance with a short note explaining the change.
                4. The old figures removed from dashboards and reports.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All reliability reports sent to leadership use SLO compliance, and the previous uptime figures are removed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every reliability number currently reported to leadership"
                - "Compare each with the SLI for the same month"
                - "Write a short note explaining why reports now use SLO compliance"
                - "Remove the retired figures from shared dashboards"
            - name: Dependency SLOs and the call graph
              description: |-
                ## Purpose
                Your service cannot be more reliable than the dependencies it calls in series, and a 99.95 percent target on top of three 99.9 percent dependencies is a promise you cannot keep. Mapping each critical dependency, its published or measured SLO and whether you call it in series or with a fallback shows which targets are realistic and where caching, retries or redundancy are needed.

                ## Milestones
                1. Every critical dependency of the service listed with its published or measured reliability.
                2. Each dependency marked as hard, soft with fallback, or asynchronous.
                3. The combined ceiling on your achievable availability calculated.
                4. A gap list where your SLO exceeds the ceiling, each with a mitigation or a target change.

                ## Notes
                Ask dependency owners for their SLOs rather than assuming. If they have none, measure their success rate from your side of the call.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dependency map with reliability figures and a calculated availability ceiling is recorded, and every SLO above the ceiling has a mitigation or new target."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every synchronous call the top flow makes"
                - "Ask each dependency owner for their current SLO"
                - "Calculate the availability ceiling from hard dependencies"
                - "Log each gap with a mitigation or a target change"
            - name: Internal SLOs alongside customer SLA terms
              description: |-
                ## Purpose
                Where customers have a contract with service credits, the internal SLO should be stricter than the SLA so the team reacts long before credits are due. Comparing how the SLA defines availability with how the SLI measures it often reveals mismatches in exclusions, windows and measurement points. The contract wording is a matter for your legal and commercial colleagues; the engineering job is to measure what it promises.

                ## Milestones
                1. The SLA definitions of availability, exclusions and measurement period summarised with the contract owner.
                2. Each SLA term matched to an internal SLI, with any measurement gaps listed.
                3. Internal SLO targets set with a margin above the SLA level.
                4. A report the commercial team can use to answer credit claims from SLI data.

                ## Notes
                Do not reinterpret contract terms yourself. Bring the gaps to whoever owns the contract and let them decide.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every customer SLA term is mapped to an internal SLI, and each matching internal SLO has a recorded margin above the SLA level."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the contract owner for the current SLA definitions and exclusions"
                - "Match each SLA term to an internal SLI and note gaps"
                - "Set internal targets with a margin above each SLA level"
                - "Recheck SLA terms against internal SLOs at contract renewal time @recurring(yearly)"
            - name: Tightening an SLO users have outgrown
              description: |-
                ## Purpose
                Sometimes the service meets its SLO every month while users still complain, which means the target no longer describes a good experience. Tightening it deliberately, with evidence from complaints, churn or support load, and checking the new budget is affordable before committing, keeps the SLO meaningful. Raise it in steps rather than jumping a whole nine.

                ## Milestones
                1. Evidence gathered that users are unhappy while the SLO is met.
                2. The proposed target tested against the last 90 days to see how often it would have breached.
                3. The engineering cost of meeting the new target estimated.
                4. The new target agreed, documented and rolled into alerts.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tightened SLO target is recorded with the user evidence, historical breach test and cost estimate that justified it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect complaints and support tickets from months the SLO was met"
                - "Replay the last 90 days against the proposed tighter target"
                - "Estimate the engineering work needed to meet it"
                - "Update the SLO document and alerts once the target is agreed"
            - name: Loosening an SLO that costs too much
              description: |-
                ## Purpose
                Any SLO that is breached most months and triggers freezes nobody honours has stopped working. If users are not complaining and the business does not need the extra reliability, lowering the target frees engineering time and restores trust in the policy. The decision needs evidence and product agreement so it does not look like moving the goalposts.

                ## Milestones
                1. The breach history and policy actions for the last two quarters summarised.
                2. Evidence gathered on whether users or revenue were affected during breaches.
                3. A proposed lower target with its larger budget calculated.
                4. The change agreed with product and recorded with its reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A loosened SLO target is agreed with product and recorded with breach history and user impact evidence."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise breaches and freezes for the last two quarters"
                - "Check support and revenue data for impact during breaches"
                - "Propose a lower target and calculate its budget"
                - "Record the agreed change and its reasons in the SLO document"
            - name: Per-tenant SLIs for large customers
              description: |-
                ## Purpose
                An aggregate SLO can look healthy while one large customer is having a terrible month, because their traffic is a small share of the total or hits an unusual path. Breaking the SLI down by tenant, region or plan for the customers who matter most shows whether the promise holds for each of them, not just on average.

                ## Milestones
                1. The tenants, regions or plans worth tracking individually agreed with account management.
                2. The SLI broken down by that dimension without exploding metric cardinality.
                3. A monthly report flagging any tracked tenant below the SLO target.
                4. A rule for what happens when a tenant breaches while the aggregate does not.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monthly per-tenant SLI report covers every agreed key customer and flags those below target."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree the list of tenants to track with account management"
                - "Add the tenant dimension to the SLI query with a cardinality limit"
                - "Report tenants below target to their account owners @recurring(monthly:22)"
                - "Write the rule for tenant-level breaches into the budget policy"
            - name: SLO kick-off workshop with product and engineering
              description: |-
                ## Purpose
                SLOs imposed by an infrastructure team rarely survive their first breach. A half-day workshop where engineers, product managers and support staff map flows, argue about thresholds and draft the first budget policy together builds the shared ownership that keeps the practice alive. Bring real baseline data so the debate is about numbers, not opinions.

                ## Milestones
                1. A half-day workshop booked with engineering, product and support attendees.
                2. Baseline SLI data and the flow inventory prepared as handouts.
                3. Draft SLOs and policy thresholds agreed in the room.
                4. Workshop outputs written up and owners named within a week.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A workshop is held with all three groups, and its draft SLOs and owners are written up within a week."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a half-day slot with engineering, product and support"
                - "Print the flow inventory and 90-day baseline as handouts"
                - "Run exercises on flows, thresholds and policy actions"
                - "Write up the draft SLOs and named owners within a week"
            - name: Budget exhaustion retrospective
              description: |-
                ## Purpose
                The first time an error budget runs out is a test of the whole system: did the alerts fire in time, did the policy trigger, did anyone actually stop shipping? A focused retrospective on the budget process itself, separate from any incident review, shows whether the SLO machinery worked and what to change before the next time.

                ## Milestones
                1. A timeline of budget burn, alerts, policy actions and freeze decisions.
                2. Each policy step marked as followed, skipped or unclear.
                3. Changes agreed to alerts, thresholds or the policy text.
                4. Every change assigned an owner and a date.

                ## Notes
                Start from the **Remediation plan** template to track the agreed changes. Keep the technical root cause to the incident review; this session is about the process.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A retrospective after a budget exhaustion produces a timeline, a followed-or-skipped check of each policy step and owned changes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build the timeline of budget burn and policy actions"
                - "Mark each policy step as followed, skipped or unclear"
                - "Agree changes to alerts or policy in a one-hour session"
                - "Assign each change an owner and a date"
            - name: Launch SLOs for a new service
              description: |-
                ## Purpose
                New services usually launch with monitoring and no promise, then gain an SLO only after the first painful outage. Setting provisional SLOs before launch, from load tests and comparable services, means the team knows from day one what good looks like and has budget alerts in place for the riskiest weeks. Mark the targets as provisional and revisit after 30 days of real traffic.

                ## Milestones
                1. Provisional SLIs and targets defined from comparable services and pre-launch testing.
                2. Burn-rate alerts configured and tested before the launch date.
                3. A launch-week rule for what the team does if the budget burns fast.
                4. A review booked 30 days after launch to set permanent targets.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The new service launches with provisional SLOs, tested burn-rate alerts and a 30-day target review booked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a comparable service to borrow provisional targets from"
                - "Define provisional SLIs for the new service's top flows"
                - "Test the burn-rate alerts in staging before launch"
                - "Book the 30-day review to set permanent targets"
            - name: Annual reliability target review with leadership
              description: |-
                ## Purpose
                Each year, leadership should see whether the reliability the organisation pays for matches what the business needs. A short review of every top-tier SLO, its compliance, the engineering time its budget absorbed and the next year's product plans lets leaders choose where to invest in more reliability and where good enough is good enough.

                ## Milestones
                1. A one-page summary per top-tier SLO covering compliance, budget spend and policy actions.
                2. The year's reliability engineering time estimated per service.
                3. A meeting with engineering and product leadership held and decisions recorded.
                4. Target changes for the coming year added to the SLO documents.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual leadership review is held with per-SLO summaries, and its target decisions are recorded in the SLO documents."
                cadence: cyclic
              tasks:
                - "Prepare a one-page summary for each top-tier SLO @recurring(yearly)"
                - "Estimate reliability engineering hours per service for the year"
                - "Present the summaries to engineering and product leadership"
                - "Write the agreed target changes into the SLO documents"
            - name: Error budget policy tabletop exercise
              description: |-
                ## Purpose
                Policies that have never been exercised fall apart at the first real breach, usually over who decides and what counts as exempt. A one-hour tabletop where the team walks through a scripted scenario of the budget draining over a week, making each decision the policy calls for, surfaces those gaps safely. No systems are touched; it is a conversation with a script.

                ## Milestones
                1. A scenario written with budget levels at four points over a simulated week.
                2. The exercise run with the freeze owner, a product manager and two engineers.
                3. Every point where people disagreed or the policy was silent written down.
                4. The policy amended to close the gaps found.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tabletop exercise is run with the freeze owner and product, and the policy is amended for every gap it found."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a four-stage scenario of a budget draining over a week"
                - "Invite the freeze owner, a product manager and two engineers"
                - "Run the exercise and note every disagreement"
                - "Amend the policy text to close each gap"
            - name: SLOs for a small team without SRE specialists
              description: |-
                ## Purpose
                A team of four running a product does not need a reliability programme, but it does need to know when to stop shipping and fix things. One or two SLOs on the most important flow, a single fast-burn alert and a ten-minute monthly look give most of the benefit at a fraction of the effort. Resist building tooling before the habit exists.

                ## Milestones
                1. No more than two SLOs chosen for the single most important flow.
                2. One fast-burn alert routed to whoever is on duty.
                3. A ten-minute monthly look at compliance written into the team calendar.
                4. A simple rule for what the team does when the budget is gone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A small team has at most two SLOs, one fast-burn alert and six months of recorded monthly compliance checks."
                cadence: rolling
              tasks:
                - "Choose the one flow that would hurt most if it broke"
                - "Set one availability SLO on it using your existing metrics"
                - "Add a single fast-burn alert to the team's pager"
                - "Look at compliance and budget for ten minutes @recurring(monthly:5)"
            - name: Introducing SLOs to a team used to uptime targets
              description: |-
                ## Purpose
                Engineers raised on maximum uptime often hear error budgets as permission to be unreliable. Introducing SLOs gradually, starting with one service, showing how the budget protects engineers from endless firefighting and lets product ship with confidence, wins more support than a mandate. Expect the change to take a quarter, not a sprint.

                ## Milestones
                1. One volunteer service chosen as the pilot, with a supportive product owner.
                2. A short talk given explaining error budgets in terms of the team's own last quarter.
                3. The pilot run for one full quarter with monthly reviews.
                4. A pilot write-up with what changed, shared before asking other teams to adopt.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-quarter SLO pilot on a volunteer service is completed and its written results are shared with the wider engineering group."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find one service owner willing to pilot SLOs"
                - "Prepare a 20-minute talk using the team's own incident history"
                - "Run the pilot for a quarter with monthly reviews"
                - "Write up the pilot results before proposing wider adoption"
            - name: Inheriting a service with untrusted SLOs
              description: |-
                ## Purpose
                Taking over a service often means inheriting SLOs that are always green, always red or measured by a query nobody understands. Auditing each one, checking the data, the target's origin and whether anyone acts on it, then keeping, fixing or deleting it, restores trust within a few weeks. Deleting a meaningless SLO is a valid outcome.

                ## Milestones
                1. Every inherited SLO listed with its query, target, owner and last review date.
                2. Each SLI query checked against raw data for one recent week.
                3. A keep, fix or delete decision recorded for each SLO.
                4. Fixed SLOs re-documented and deleted ones removed from alerts and dashboards.

                ## Notes
                Start from the **Remediation plan** template to track each SLO through its fix.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every inherited SLO has a recorded keep, fix or delete decision and the fixes are documented within 60 days."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every inherited SLO with its query and target"
                - "Ask the previous owners where each target came from"
                - "Check each query against a week of raw data"
                - "Record a keep, fix or delete decision per SLO"
            - name: SLOs for an internal platform team
              description: |-
                ## Purpose
                Platform teams serve other engineers, whose flows are things like deploying a change, provisioning a database or getting a build result. Defining SLOs for those flows, such as the share of deploys that complete within ten minutes, gives internal customers a promise and gives the platform team the same budget-based case for reliability work that product teams have.

                ## Milestones
                1. The platform's internal customer flows listed with the teams that depend on them.
                2. SLIs and targets defined for the top three flows with internal customer input.
                3. A monthly platform SLO report published to internal customers.
                4. The platform's error budget policy agreed with the teams it serves.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The platform team publishes a monthly SLO report on its top three internal flows with a policy agreed by its customer teams."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Survey internal teams on which platform flows hurt when slow"
                - "Define SLIs for deploy, provisioning and build flows"
                - "Publish the platform SLO report to internal teams @recurring(monthly:2)"
                - "Agree the platform's budget policy with its customer teams"
            - name: SLOs for a mobile app
              description: |-
                ## Purpose
                Mobile apps fail on the device as often as on the server: crashes, slow cold starts, failed requests on poor networks and releases that cannot be rolled back once installed. SLOs on crash-free sessions, start-up time and client-observed request success give mobile teams a reliability target that reflects what users experience in their hands.

                ## Milestones
                1. SLIs defined for crash-free sessions, cold start time and client-observed request success.
                2. Targets set from the last three releases' data.
                3. The SLIs broken down by app version so a bad release stands out.
                4. A release review that checks each new version against the SLOs.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The mobile app has SLOs on crash-free sessions, cold start and request success, checked for each release by version."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pull crash-free session rates for the last three releases"
                - "Define a cold start SLI from client timing data"
                - "Break each SLI down by app version"
                - "Check the latest release against every mobile SLO @recurring(monthly:18)"
            - name: SLOs for batch jobs and scheduled work
              description: |-
                ## Purpose
                Nightly billing runs, report generation and data exports have no request rate, so availability SLIs do not fit. Measuring the share of runs that complete successfully before their deadline, and the share that finish within an expected duration, gives batch work a target that matches what downstream teams depend on.

                ## Milestones
                1. Each scheduled job listed with its deadline and the teams that depend on it.
                2. A completion-by-deadline SLI defined for every critical job.
                3. Targets agreed with the downstream teams.
                4. A monthly report of runs missed or late against each target.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every critical scheduled job has a completion-by-deadline SLO agreed with its downstream teams and a monthly report."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List scheduled jobs with their deadlines and downstream teams"
                - "Define a completion-by-deadline SLI for each critical job"
                - "Agree targets with the teams that depend on each job"
                - "Report late and failed runs against each target @recurring(monthly:11)"
            - name: SLO hierarchy from components to user flows
              description: |-
                ## Purpose
                In a system of dozens of services, component SLOs alone cannot tell you whether a user can check out, and flow SLOs alone cannot tell you which team should act. A hierarchy that links flow SLOs at the top to the component SLOs that support them gives both views, and shows when component targets do not add up to the flow promise.

                ## Milestones
                1. The top flows mapped to the components each one depends on.
                2. Flow-level SLOs defined from end-to-end measurement.
                3. Component targets checked to confirm they can together support each flow SLO.
                4. The hierarchy documented and kept current after architecture changes.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A documented SLO hierarchy links every top flow SLO to its component SLOs, with mismatched targets resolved."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Map each top flow to the components it calls"
                - "Define flow-level SLOs from end-to-end measurement"
                - "Check component targets can support each flow target"
                - "Recheck the hierarchy after architecture changes @recurring(quarterly)"
            - name: Error budget gate in the deploy pipeline
              description: |-
                ## Purpose
                Once the policy is trusted, the pipeline can enforce it: deploys of feature changes pause automatically when a service's budget is spent, while fixes and reliability work carry an exemption label. Automating the check removes the awkward human conversation and makes the policy impossible to forget. Build it only after the manual freeze has worked a few times.

                ## Milestones
                1. A pipeline step that reads the current budget for the service being deployed.
                2. Deploys blocked when the budget is spent, with a clear message linking the policy.
                3. An exemption mechanism for fixes and reliability changes that is logged.
                4. A month of gate decisions reviewed for false blocks and misuse of exemptions.

                ## Notes
                Make the gate fail open if the SLO system is unreachable, or an outage in your metrics stack will stop you deploying the fix.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The deploy pipeline blocks feature deploys when budget is spent, logs every exemption, and a month of decisions has been reviewed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Expose remaining budget per service through an API the pipeline can call"
                - "Add a gate step that blocks feature deploys at zero budget"
                - "Add a logged exemption label for fixes and reliability work"
                - "Review a month of gate decisions for false blocks"
            - name: Reliability investment case from SLO data
              description: |-
                ## Purpose
                Asking for a quarter of reliability work is easier with evidence than with anecdotes. Combining budget spend causes, freezes, the engineering hours they absorbed and the business impact of breaches into a costed case shows leadership what the next nine would cost and what it would save. It turns SLO data into a budget line.

                ## Milestones
                1. Two quarters of budget spend causes, freezes and incident hours collected.
                2. The business impact of breaches estimated with product or finance.
                3. Two or three investment options costed, each with the SLO improvement expected.
                4. A written case presented to leadership and the decision recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A costed reliability investment case built from two quarters of SLO data is presented and leadership's decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect two quarters of budget ledger and freeze records"
                - "Estimate breach impact with product or finance"
                - "Cost two or three investment options against expected SLO gains"
                - "Ask the agent to tighten the written case to two pages before presenting"
---

# Service Level Objectives

Service level objectives turn the vague question of whether a service is reliable enough into a number product and engineering can both plan around. These projects start with the foundations (the user flows that matter, the first availability and latency SLIs, a baseline, a target, an SLO document and an error budget policy), move through the weekly and monthly routines that keep budgets honest, the measurement and alerting skills behind them, the decisions about tooling and targets, the workshops and reviews worth holding, situations such as a small team, an internal platform or a mobile app, and finally specialist work like SLO hierarchies and budget-driven release gates.

What repeats is a Monday error budget check, a Thursday look at freeze status, a monthly SLO review with product, monthly checks on SLI data quality, budget spend causes, burn-rate page quality and coverage across services, and a quarterly recalibration of every target. The Meeting notes, Metrics log, Purchase decision, Reading queue and Remediation plan templates pair with the projects that need a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
