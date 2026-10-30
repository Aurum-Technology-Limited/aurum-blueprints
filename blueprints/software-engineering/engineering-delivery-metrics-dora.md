---
id: software-engineering.engineering-delivery-metrics-dora
name: Engineering Delivery Metrics (DORA)
description: "Agreed definitions, traceable deploy and incident data, a trustworthy baseline for the four DORA metrics, review rhythms and the experiments that improve delivery without anyone gaming the numbers."
category: business
version: 1.0.0
tags: [software-engineering, engineering-delivery-metrics-dora, manager, engineer, enterprise, dora, lead-time, deployment-frequency]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - meeting-notes
    - reading-queue
    - risk-register
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Engineering Delivery Metrics (DORA)
          description: "Measuring deployment frequency, lead time, change failure rate and recovery time to improve delivery without gaming the numbers."
          projects:
            - name: Written purpose for measuring delivery
              description: |-
                ## Purpose
                Teams that start collecting DORA numbers without saying why usually end up with a leaderboard nobody trusts. Writing one page that states the questions the metrics should answer, such as where changes wait longest or whether releases are getting safer, and the decisions they will feed, sets the tone before the first chart exists. Agree it with the people being measured, not only the people asking for the numbers.

                ## Milestones
                1. Three to five questions the metrics must help answer, written in plain language.
                2. A list of decisions the metrics will inform, and a list of uses that are ruled out.
                3. The page reviewed by at least two engineers and the engineering manager.
                4. The agreed purpose published where the dashboard will later live.

                ## Notes
                Ruling out individual performance comparison in writing, at the start, is the single cheapest protection against gaming.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page purpose statement for delivery metrics, listing questions, allowed uses and ruled-out uses, is published and agreed by the team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the three questions you most want delivery data to answer"
                - "List the uses of the metrics that the team will not accept"
                - "Share the draft purpose page with two engineers for comments"
                - "Publish the agreed page next to where the dashboard will live"
            - name: Shared definitions of the four DORA metrics
              description: |-
                ## Purpose
                Ask five engineers when lead time starts and you will get first commit, pull request opened and ticket created. Without one written definition per metric, including start and end events, what counts as a failure and what counts as restored, two teams can report the same week with numbers that cannot be compared. These definitions become the contract every later dashboard is built against.

                ## Milestones
                1. Deployment frequency defined, including which environments and which kinds of deploy count.
                2. Lead time for changes defined with an exact start event and end event.
                3. Change failure rate defined, with a list of what counts as a failed change.
                4. Time to restore service defined, with the events that start and stop the clock.
                5. All four definitions stored in version control with an owner and a change log.

                ## Notes
                The DORA research measures lead time from commit to running in production. If you choose a different start, write down why, because published benchmarks will no longer apply directly.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned definitions document gives an exact start event, end event and inclusion rule for each of the four metrics, with a named owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask three engineers when they think lead time starts and note the answers"
                - "Draft start and end events for each of the four metrics"
                - "List the change types that count as a failure, such as rollback, hotfix or incident"
                - "Commit the definitions file to the team repository with a named owner"
            - name: Inventory of delivery data sources
              description: |-
                ## Purpose
                Delivery data is scattered across the version control host, the CI system, the deploy tool, the incident tracker and sometimes a change ticketing system. Mapping which system records which event, how long it keeps history and how you can get at it shows early whether a metric is cheap to compute or needs new instrumentation. Do it before buying or building anything.

                ## Milestones
                1. Every system that records a commit, merge, build, deploy, rollback or incident listed.
                2. For each system, the event fields available, the retention period and the access method noted.
                3. Gaps marked where a metric cannot yet be computed from existing data.
                4. A short recommendation on which sources to connect first.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table maps each DORA metric's start and end events to a named system, field and retention period, with gaps marked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every tool that touches a change between commit and production"
                - "Check how many months of history each tool keeps and how to export it"
                - "Mark which metric each tool's events can support"
                - "Write the gaps that need new instrumentation at the bottom of the table"
            - name: What counts as a production deployment
              description: |-
                ## Purpose
                Deployment frequency looks simple until you meet config pushes, database migrations, feature flag flips, infrastructure changes and five microservices deployed by one pipeline run. Deciding, with examples, which of these count as a deployment and whether each service counts separately stops the number from swinging every time someone changes the pipeline. The same rules then feed lead time and change failure rate.

                ## Milestones
                1. A list of at least eight real change types from the last month, each marked as counted or not.
                2. A rule for how multi-service and multi-region deploys are counted.
                3. A rule for whether flag changes and config pushes count as deployments.
                4. The rules added to the definitions document with the worked examples.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The definitions document includes counting rules for deploys, config and flag changes, with at least eight worked examples from real changes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull last month's deploy log and pick eight different kinds of change"
                - "Mark each example as counted or not, with a one-line reason"
                - "Agree the multi-service counting rule with the platform owner"
                - "Add the rules and examples to the definitions file"
            - name: Traceability from commit to deploy
              description: |-
                ## Purpose
                Lead time is only computable if each deploy can be tied back to the commits and pull requests it shipped. That usually means stamping the commit SHA or a release identifier on every deploy event and keeping a record of which commits each deploy contained. Once the link exists, every change can be traced from first commit to running in production without guesswork.

                ## Milestones
                1. Every production deploy event carries the commit SHA or release identifier it shipped.
                2. A way to list the commits included between two consecutive deploys.
                3. A spot check of ten recent deploys traced back to their pull requests without manual digging.
                4. Lead time computed for one week of changes from the linked data.

                ## Notes
                Squash merges and rebases can change commit SHAs. Record the merge commit or pull request number as well, so the link survives history rewrites.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten randomly chosen production deploys from the last month can each be traced to their pull requests from recorded data alone."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Check whether the current deploy events already record a commit SHA"
                - "Add the commit SHA and pull request number to the deploy event payload"
                - "Write a query that lists commits between two consecutive deploys"
                - "Trace ten recent deploys back to their pull requests as a spot check"
            - name: Linking incidents and rollbacks to changes
              description: |-
                ## Purpose
                Change failure rate needs each failure tied to the deploy that caused it, and most incident trackers never record that. Adding a required field for the suspected causing deploy, and tagging rollbacks and hotfixes at the source, turns an argument at month end into a query. It also gives postmortems a direct line to the change data.

                ## Milestones
                1. The incident form has a field for the causing deploy or release identifier.
                2. Rollbacks and hotfix deploys are tagged automatically or by a required label.
                3. Incidents from the last quarter back-filled with causing deploys where known.
                4. Change failure rate computed for one month from the linked records.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least 80 percent of production incidents from the last month have a recorded causing deploy or an explicit not-change-related flag."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Add a causing deploy field to the incident template"
                - "Agree a label that marks a deploy as a rollback or hotfix"
                - "Back-fill the last quarter's incidents with their causing deploys"
                - "Compute one month of change failure rate from the linked data"
            - name: Ninety-day DORA baseline for one team
              description: |-
                ## Purpose
                Ninety days of history smooths out one bad week and one release crunch, and gives a team a fair starting point to improve from. Computing all four metrics for one team from the linked data, then checking the numbers against what the team remembers, finds definition and data bugs while the scope is still small. Publish the baseline before setting any target.

                ## Milestones
                1. All four metrics computed for one team over the last 90 days.
                2. Each metric shown as a distribution or weekly trend, not a single average.
                3. The numbers checked with the team, with any surprises traced to a cause.
                4. The baseline published with the data period and definitions version stated.

                ## Notes
                Start from the **Metrics log** template to record the baseline and every later monthly reading in one place.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A published baseline shows 90 days of all four metrics for one team, with definitions version, data period and known caveats stated."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the pilot team and confirm the 90-day window with its lead"
                - "Compute weekly values for all four metrics over the window"
                - "Walk the team through the numbers and note every surprise"
                - "Publish the baseline with its caveats and definitions version"
            - name: Choosing the unit you report on
              description: |-
                ## Purpose
                Measuring per team, per service or per product gives different answers, and the wrong choice makes ownership changes look like performance changes. Deciding the reporting unit, and how shared services and pairs of teams are handled, keeps trends readable across reorganisations. Most organisations report per service and roll up to team.

                ## Milestones
                1. The options of team, service, product and repository compared against your org chart.
                2. A rule for services owned by more than one team.
                3. A mapping file from service to owning team, kept in version control.
                4. The chosen unit written into the definitions document.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the reporting unit and a versioned service-to-team mapping exists for every production service."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List production services and their current owning teams"
                - "Note which services have shared or unclear ownership"
                - "Decide whether to report by service, team or product and why"
                - "Commit a service-to-team mapping file next to the definitions"
            - name: Team agreement on how metrics are used
              description: |-
                ## Purpose
                Engineers will route around any number they think will be used against them, splitting pull requests artificially or quietly reclassifying incidents. A short working agreement, signed off in a team meeting, says who can see the data, that it is never used to rank individuals and how anyone can challenge a number. It turns measurement into something done with the team rather than to it.

                ## Milestones
                1. A draft agreement covering visibility, individual use, challenge process and review date.
                2. The draft discussed in a team meeting with objections recorded.
                3. The final agreement accepted by the team and the manager.
                4. The agreement linked from the dashboard header.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written metrics working agreement, accepted in a team meeting and linked from the dashboard, states that data is never used to rank individuals."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft five lines on who sees the data and what it is never used for"
                - "Book twenty minutes in the next team meeting to discuss the draft"
                - "Record objections and agree the final wording"
                - "Link the agreement from the top of the metrics dashboard"
            - name: Build or buy a delivery metrics tool
              description: |-
                ## Purpose
                Commercial engineering intelligence platforms, open source collectors and a few hundred lines of your own SQL can all produce DORA metrics, at very different costs. Comparing them against your data sources, privacy rules and the definitions you already agreed avoids paying for a tool that measures something else. Many teams find a small in-house pipeline is enough for the first year.

                ## Milestones
                1. Requirements written, including data sources, definitions fit, access control and data residency.
                2. Three options compared: one commercial product, one open source collector and an in-house build.
                3. Each option scored against the requirements with an estimated yearly cost.
                4. A decision recorded with the reasons and a date to revisit it.

                ## Notes
                Start from the **Purchase decision** template. Check whether a vendor tool lets you change the lead time start event; many fix it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded build or buy decision scores three options against written requirements and includes yearly cost and a revisit date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the must-have requirements in ten lines or fewer"
                - "Shortlist one commercial, one open source and one in-house option"
                - "Score each option against the requirements and estimate its yearly cost"
                - "Record the decision and a revisit date in the purchase decision page"
            - name: Delivery numbers in the weekly retro
              description: |-
                ## Purpose
                Five minutes on the delivery numbers at the start of a retro is enough to spot a lead time spike or a cluster of failed changes while people still remember why. Keeping it short, trend first and always asking what the team thinks caused the change, keeps the data useful without turning the retro into a report. Skip the slot rather than show stale numbers.

                ## Milestones
                1. A standing five-minute slot at the top of the retro agenda.
                2. A single view showing the last eight weeks of each metric.
                3. At least one discussion point or action recorded from the numbers each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive retros include the metrics slot, with at least two actions traced back to something the numbers showed."
                cadence: rolling
              tasks:
                - "Add a five-minute metrics slot to the top of the retro agenda"
                - "Build an eight-week trend view for the four metrics"
                - "Open the trend view and ask what moved and why @recurring(weekly:mon)"
                - "Record any action that came from the numbers in the retro notes"
            - name: Monthly delivery review with engineering leads
              description: |-
                ## Purpose
                Leadership attention is what turns a slow review queue or a fragile deploy path into funded work. A monthly 45-minute review with engineering leads, looking at trends across teams and the top two blockers each team names, keeps the conversation on systems rather than on whose number is lowest. End every review with owners and dates.

                ## Milestones
                1. A recurring monthly review booked with engineering leads and a fixed agenda.
                2. A one-page pre-read prepared two days before each review.
                3. Each review ends with no more than three actions, each with an owner and date.
                4. Actions from the previous review checked at the start of the next.

                ## Notes
                Start from the **Meeting notes** template so actions and owners are captured the same way each month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews held, each with a pre-read and no more than three owned actions, and previous actions checked."
                cadence: rolling
              tasks:
                - "Book a recurring 45-minute monthly review with engineering leads"
                - "Write the fixed agenda: trends, team blockers, previous actions, new actions"
                - "Prepare the one-page pre-read and send it two days ahead @recurring(monthly:9)"
                - "Check last month's actions before discussing anything new"
            - name: Delivery data quality audit
              description: |-
                ## Purpose
                Bad data quietly breaks delivery metrics: a pipeline renamed without updating the collector, deploys missing their commit SHA, incidents never linked to a change. A monthly sample of raw events checked against what really happened catches drift before it shows up as a fake improvement. Track the defect rate so you know how far to trust each number.

                ## Milestones
                1. A checklist of data quality checks, such as missing SHAs, unlinked incidents and duplicate deploys.
                2. A monthly sample of twenty deploys and all incidents checked against the checklist.
                3. Defects logged with a cause and a fix owner.
                4. A data quality rate published alongside each metric.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly audits are logged for six months, and the share of deploys missing commit links stays under 5 percent."
                cadence: rolling
              tasks:
                - "Write a checklist of the five most likely data defects"
                - "Sample twenty deploys and every incident against the checklist @recurring(monthly:17)"
                - "Log each defect with its cause and an owner to fix it"
                - "Review the checklist itself for new failure modes @recurring(quarterly)"
            - name: Quarterly delivery trend report
              description: |-
                ## Purpose
                Once a quarter, senior leaders need a short written view of delivery across the organisation: what improved, what got worse, and what the teams believe would help most. A two-page report with trends, three stories behind the numbers and a short list of asks travels further than a dashboard link. Keep it the same shape every quarter so changes are easy to read.

                ## Milestones
                1. A fixed two-page report structure agreed with the head of engineering.
                2. Quarter-on-quarter trends for all four metrics, by team or service.
                3. Three short stories explaining a real change behind a number.
                4. No more than three asks, each with the expected effect on a metric.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four consecutive quarterly reports delivered in the same two-page format, each with trends, three stories and at most three asks."
                cadence: cyclic
              tasks:
                - "Agree the two-page report structure with the head of engineering"
                - "Pull quarter-on-quarter trends for each team @recurring(quarterly)"
                - "Ask the agent to draft the summary from the trends and team notes"
                - "Collect three stories from team leads that explain a real change"
            - name: Weekly change failure classification
              description: |-
                ## Purpose
                Every failed change has a cause worth naming: a missed test, a config mismatch between environments, a migration that locked a table, an untested dependency upgrade. Spending fifteen minutes a week classifying the failures by cause turns change failure rate from a scary percentage into a ranked list of what to fix. After a quarter the top category is usually obvious.

                ## Milestones
                1. A short list of failure cause categories agreed with the team.
                2. Every failed change from the week classified within seven days.
                3. A running count of failures by category for the quarter.
                4. The top category handed to the improvement experiment backlog.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every failed change for one quarter carries a cause category, and the top category has an improvement experiment opened against it."
                cadence: rolling
              tasks:
                - "Agree six to eight failure cause categories with the team"
                - "Classify last week's failed changes by cause @recurring(weekly:tue)"
                - "Update the quarterly count of failures by category"
                - "Open an improvement experiment for the largest category"
            - name: Lead time stage breakdown
              description: |-
                ## Purpose
                Lead time is the sum of stages, and the total alone never says where to act. Splitting it into coding time, wait for first review, review to approval, approval to merge and merge to production shows whether changes are slow to write, slow to review or stuck in the pipeline. In many teams the longest stage turns out to be waiting, not working.

                ## Milestones
                1. Timestamps captured for each stage boundary from the version control and deploy data.
                2. Median and 85th percentile time for each stage computed monthly.
                3. The longest stage named for each team.
                4. One change proposed against the longest stage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly breakdown shows median and 85th percentile time for five lead time stages for each team, and the longest stage is named."
                cadence: rolling
              tasks:
                - "List the timestamps needed for each of the five lead time stages"
                - "Write the query that computes stage times per pull request"
                - "Publish median and 85th percentile per stage for each team @recurring(monthly:22)"
                - "Name the longest stage and propose one change against it"
            - name: Deploy log annotations and hygiene
              description: |-
                ## Purpose
                Hotfixes, emergency rollbacks and manual deploys done from a laptop during an outage are exactly the events that distort the metrics, and they are the least likely to be recorded properly. A weekly tidy of the deploy log, adding missing labels and noting freezes, holidays and incidents, keeps the history explainable months later. Annotations also stop people reading a holiday dip as a slowdown.

                ## Milestones
                1. A short label set for deploys, such as hotfix, rollback, manual and freeze exception.
                2. A weekly pass that labels every unlabelled deploy from the past week.
                3. Freezes, holidays and major incidents marked on the trend charts.
                4. Manual deploys counted and trending down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For one quarter, every production deploy carries a label and every freeze or holiday appears as an annotation on the trend charts."
                cadence: rolling
              tasks:
                - "Agree four deploy labels and add them to the deploy tool"
                - "Label every unlabelled deploy from the past week @recurring(weekly:fri)"
                - "Add freeze and holiday annotations to the trend charts"
                - "Count manual deploys this month and note who ran them and why"
            - name: Metrics dashboard ownership and upkeep
              description: |-
                ## Purpose
                Dashboards decay: a renamed team disappears from a panel, a query times out, a filter quietly excludes half the services. Naming an owner and running a monthly check that every panel loads, matches the definitions version and shows current data keeps people from losing faith after the first broken chart. Delete panels nobody has opened in three months.

                ## Milestones
                1. One named owner and one backup for the delivery dashboard.
                2. Every panel labelled with the definitions version and data source.
                3. A monthly check that panels load, show current data and match the mapping file.
                4. Unused panels removed each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The dashboard has a named owner, every panel states its definitions version, and monthly checks are logged for six months."
                cadence: rolling
              tasks:
                - "Name an owner and a backup for the delivery dashboard"
                - "Add the definitions version and data source to each panel title"
                - "Open every panel and check it loads current data @recurring(monthly:4)"
                - "Remove panels with no views in the last three months"
            - name: Counter-metrics and gaming watch
              description: |-
                ## Purpose
                Goodhart's law applies fast: push deployment frequency and you get empty deploys, push lead time and you get pull requests split until they are meaningless. Pairing each metric with a counter-metric, such as change failure rate against frequency or pull request size against lead time, and reviewing them together each quarter, shows when a number moved for the wrong reason. Raise it with the team, not with a reprimand.

                ## Milestones
                1. A counter-metric paired with each of the four DORA metrics.
                2. Signs of gaming for each metric listed, such as no-op deploys or reclassified incidents.
                3. A quarterly review of each pair with findings recorded.
                4. Any suspected gaming discussed openly with the team concerned.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each DORA metric has a named counter-metric, and four quarterly reviews of the pairs are recorded with findings."
                cadence: rolling
              tasks:
                - "Pair each DORA metric with one counter-metric"
                - "List two signs of gaming for each metric"
                - "Review each metric beside its counter-metric @recurring(quarterly)"
                - "Raise any suspected gaming in the team retro, framed as a system problem"
            - name: Improvement experiment backlog
              description: |-
                ## Purpose
                Insight from the metrics is wasted unless it becomes a small, time-boxed experiment with a predicted effect. A backlog of experiments, each stating the metric it targets, the expected change and the date to check, lets teams try things such as a review rota or smaller migrations and keep only what works. Run no more than two at once per team so effects stay readable.

                ## Milestones
                1. A backlog where each experiment states target metric, prediction and check date.
                2. No more than two experiments running per team at once.
                3. Each finished experiment marked kept, changed or dropped with the observed effect.
                4. A list of kept practices shared across teams.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least four experiments have run to their check date with a recorded prediction, observed effect and keep or drop decision."
                cadence: rolling
              tasks:
                - "Create the experiment backlog with columns for metric, prediction and check date"
                - "Write the first experiment from the largest lead time stage"
                - "Review running experiments and close the ones past their date @recurring(monthly:26)"
                - "Share kept practices in the engineering channel"
            - name: Reading the research behind DORA
              description: |-
                ## Purpose
                The four metrics come from years of survey research published in the State of DevOps reports and the book Accelerate, which also describe the capabilities that predict better delivery. Reading the original material, rather than vendor summaries, explains why the metrics are meant for teams, not individuals, and which practices the research links to improvement. It also prepares you for the sceptic who asks whether the numbers mean anything.

                ## Milestones
                1. Accelerate read, with notes on the capabilities model.
                2. The two most recent State of DevOps reports read, with notes on what changed.
                3. A one-page summary of the capabilities most relevant to your teams.
                4. Three misconceptions about DORA metrics written down with the evidence against each.

                ## Notes
                Start from the **Reading queue** template to line up the book, the reports and any follow-up papers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the DORA capabilities relevant to your teams, written after reading Accelerate and two recent reports."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Add Accelerate and the two latest State of DevOps reports to the reading queue"
                - "Read the capabilities chapter and note the ones your teams lack"
                - "Compare how the two most recent reports changed their metrics or clusters"
                - "Write a one-page summary of the capabilities most relevant to your teams"
            - name: Percentiles and distributions for lead time
              description: |-
                ## Purpose
                Averages hide what matters in delivery data: a mean lead time of two days can sit on top of most changes shipping in hours and a few taking three weeks. Learning to read medians, 85th percentiles, histograms and scatter plots of individual changes shows the long tail that drives frustration. It also stops a single huge change from swamping a month's average.

                ## Milestones
                1. Median, 85th and 95th percentile lead time computed for the baseline period.
                2. A histogram and a per-change scatter plot drawn for one team.
                3. The ten slowest changes listed with a short reason for each.
                4. The dashboard switched from means to percentiles.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The delivery dashboard reports lead time as median and 85th percentile, backed by a per-change scatter plot for each team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compute the mean and median lead time for the baseline and compare them"
                - "Draw a scatter plot of lead time per change for one team"
                - "Ask the agent to explain the gap between the median and the 85th percentile"
                - "List the ten slowest changes and find the reason behind each"
            - name: Process behaviour charts for delivery data
              description: |-
                ## Purpose
                Week-to-week numbers always wobble, and reacting to every wobble wastes everyone's time. Process behaviour charts, also called XmR or control charts, separate routine variation from a real signal using simple limits drawn from your own history. Learning to build and read one means fewer false alarms in reviews and quicker recognition of a genuine shift.

                ## Milestones
                1. The basics of XmR charts learned from one introductory book or course.
                2. An XmR chart built for weekly deployment frequency from the baseline data.
                3. The standard signal rules applied and any real signals noted.
                4. One review run using the chart instead of raw week-on-week changes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An XmR chart with computed natural process limits exists for at least one metric and has been used in one review."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find an introductory guide to XmR charts and read the first chapter"
                - "Build an XmR chart for weekly deploys from the last six months"
                - "Apply the signal rules and mark any points outside the limits"
                - "Use the chart in the next monthly review instead of raw changes"
            - name: Value stream mapping skills
              description: |-
                ## Purpose
                Value stream mapping draws every step a change goes through from idea to production, with the working time and waiting time at each step, and it often reveals delays the DORA numbers only hint at. Learning the notation and practising on one small change makes a later team workshop far smoother. The key number is flow efficiency: working time divided by total time.

                ## Milestones
                1. The value stream mapping notation and terms learned.
                2. One recent change mapped from ticket to production, with timestamps.
                3. Working time and waiting time totalled and flow efficiency computed.
                4. Two or three waits identified as candidates for a team workshop.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed map of one real change shows each step's working and waiting time and a computed flow efficiency."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short introduction to value stream mapping notation"
                - "Pick one change shipped last week and gather its timestamps"
                - "Draw each step with its working and waiting time"
                - "Compute flow efficiency and note the two longest waits"
            - name: SPACE and developer experience signals
              description: |-
                ## Purpose
                DORA metrics show outcomes of the delivery system, not how it feels to work inside it. The SPACE framework and developer experience research add satisfaction, focus time, cognitive load and friction, usually gathered by short surveys. Learning how these fit beside DORA helps explain numbers that look fine while engineers are struggling, or the reverse.

                ## Milestones
                1. The SPACE paper and one developer experience paper read.
                2. A short note on which SPACE dimensions DORA already covers and which it misses.
                3. Five candidate survey questions chosen to complement the delivery metrics.
                4. A decision on whether and when to run a survey.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note maps the SPACE dimensions against your current delivery metrics and lists five survey questions to fill the gaps."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the SPACE framework paper and note its five dimensions"
                - "Mark which dimensions your current metrics already cover"
                - "Draft five survey questions for the gaps"
                - "Decide with your manager whether to run a survey this half"
            - name: Flow metrics alongside DORA
              description: |-
                ## Purpose
                Flow metrics such as work in progress, throughput, flow time and flow efficiency look at work items rather than deploys, and they explain lead time problems that start before the first commit. Learning them, and Little's law that links work in progress to flow time, gives a team a second lens when DORA numbers stall. They are especially useful where tickets sit in a queue for weeks before coding starts.

                ## Milestones
                1. Work in progress, throughput, flow time and flow efficiency defined for your tracker.
                2. Little's law explained in a paragraph using your own team's numbers.
                3. A work in progress chart built for one team over the last quarter.
                4. One work in progress limit proposed and discussed with the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A quarter of work in progress and flow time data is charted for one team, with Little's law checked against the actual numbers."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Count the items in progress for your team today"
                - "Pull flow time for every item finished last quarter"
                - "Check Little's law against the team's real numbers"
                - "Propose one work in progress limit at the next planning meeting"
            - name: Querying the delivery events store
              description: |-
                ## Purpose
                Most people who look at delivery dashboards cannot answer the follow-up question themselves, so every interesting pattern waits for one analyst. Learning enough SQL against the delivery events tables to filter by service, join deploys to incidents and compute percentiles lets managers and engineers investigate on their own. A shared file of saved queries helps the next person start faster.

                ## Milestones
                1. The schema of the deploy, change and incident tables documented.
                2. Five starter queries written, including a percentile lead time and a failure join.
                3. The queries saved in a shared repository with comments.
                4. Two colleagues able to run and adapt the queries without help.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Five commented starter queries are saved in a shared repository and two colleagues have run them unaided."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the tables and key columns in the delivery events store"
                - "Write a query for median lead time by service for last month"
                - "Write a query that joins failed deploys to their incidents"
                - "Save the queries with comments and walk two colleagues through them"
            - name: Explaining delivery metrics to non-engineers
              description: |-
                ## Purpose
                Product, finance and executive audiences care about how soon a fix reaches customers and how often a release breaks something, not about pipeline stages. Practising a two-minute explanation of each metric in business terms, with one concrete example from your own data, makes every later conversation about investment shorter. It also avoids the trap of promising a target the team never agreed.

                ## Milestones
                1. A one-sentence business explanation for each of the four metrics.
                2. One real example from your data attached to each explanation.
                3. The explanation tried on two non-engineering colleagues, with their questions noted.
                4. A one-page explainer revised from their feedback.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page explainer of the four metrics in business terms, tested with two non-engineering colleagues and revised."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one business sentence for each of the four metrics"
                - "Attach a real example from your team's data to each sentence"
                - "Ask the agent to rewrite the draft for a finance reader"
                - "Try the explanation on two colleagues outside engineering"
            - name: Smaller pull requests to cut lead time
              description: |-
                ## Purpose
                Small changes are reviewed faster, fail less often and are easier to roll back, and pull request size is one of the most reliable predictors of lead time. Measuring the current size distribution, agreeing a soft limit and teaching techniques such as stacked changes and feature flags usually shortens review time within a month. Watch that the total number of review requests does not swamp reviewers.

                ## Milestones
                1. The current distribution of pull request size in lines changed and files touched.
                2. A soft size guideline agreed by the team.
                3. Stacked changes and flag-guarded work demonstrated in one team session.
                4. Median pull request size and review time compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Median pull request size falls by at least a quarter over two months, with median review time compared before and after."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Chart pull request size for the last three months"
                - "Agree a soft size guideline with the team"
                - "Run a 30-minute session on stacked changes and flag-guarded work"
                - "Compare median size and review time against the baseline @recurring(monthly:12)"
            - name: Cutting time to first review
              description: |-
                ## Purpose
                Pull requests often wait longer for someone to look at them than for anything else in the lead time chain. A review rota, a clear expectation such as first response within four working hours and a daily view of waiting pull requests can halve that wait without anyone working longer. The point is fewer long waits, not instant reviews.

                ## Milestones
                1. Current median and 85th percentile time to first review measured.
                2. A first-response expectation agreed with the team.
                3. A review rota or daily waiting-review view in place.
                4. Time to first review measured again after six weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The 85th percentile time to first review is lower after six weeks than at the start, with both values recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Measure median and 85th percentile time to first review for last month"
                - "Agree a first-response expectation with the team"
                - "Set up a rota or a channel post listing waiting pull requests"
                - "Check the list of pull requests waiting over a day @recurring(weekly:wed)"
            - name: Lowering change failure rate at the top cause
              description: |-
                ## Purpose
                Your classification of failed changes already tells you where most failures come from. Picking the single largest category, such as config drift between staging and production or unsafe migrations, and putting one targeted safeguard against it moves the rate more than general advice to be careful. Measure the category again after a quarter.

                ## Milestones
                1. The largest failure cause category from the last quarter named.
                2. One safeguard chosen against it, such as a config diff check or a migration review rule.
                3. The safeguard in place and documented.
                4. Failures in that category compared over the next quarter.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One safeguard targets the top failure cause, and that category's failure count is compared across the quarters before and after."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Open last quarter's failure classification and name the top category"
                - "List three possible safeguards and pick the cheapest one"
                - "Put the safeguard in place and document it in the team handbook"
                - "Count failures in that category at the end of next quarter"
            - name: Shorter time to restore service
              description: |-
                ## Purpose
                Recovery time depends less on heroics than on how quickly a bad change can be spotted and undone. Measuring the stages of recovery, from deploy to detection, detection to decision and decision to restored, shows whether to invest in alerting, in one-step rollback or in clearer ownership. Rehearsing a rollback once a month keeps the fast path working.

                ## Milestones
                1. Time to restore split into detection, decision and restore stages for the last quarter.
                2. The slowest stage named, with its main cause.
                3. A one-step rollback documented and tested for the main services.
                4. Monthly rollback rehearsals logged.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Time to restore is reported in three stages, and a monthly rollback rehearsal is logged for each main service for three months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Split last quarter's restore times into detection, decision and restore"
                - "Name the slowest stage and its most common cause"
                - "Document the one-step rollback for each main service"
                - "Rehearse a rollback on one service in staging @recurring(monthly:28)"
            - name: Separating deploy from release with flags
              description: |-
                ## Purpose
                When deploying means exposing a feature to every user at once, teams deploy rarely and in big batches. Putting unfinished and risky work behind feature flags lets code ship daily while product decides when users see it, which raises deployment frequency and shrinks the blast radius of each change. Flags need an owner and a removal date, or they become debt.

                ## Milestones
                1. A flag approach chosen, from a simple config switch to a flag service.
                2. One feature shipped dark behind a flag and released separately.
                3. A rule that every flag has an owner and a removal date.
                4. Deployment frequency compared before and after for the pilot team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One feature has shipped dark and been released by flag, and every live flag has an owner and a removal date."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one upcoming feature that could ship behind a flag"
                - "Choose a flag approach that fits the current stack"
                - "Ship the feature dark and release it by flag"
                - "Add an owner and removal date to every live flag"
            - name: Setting targets from benchmark tiers or trend
              description: |-
                ## Purpose
                Industry benchmark tiers such as elite and low are tempting targets, but they come from surveys of very different organisations and invite gaming when imposed. Deciding whether to target a tier, an improvement on your own trend or no target at all, and writing down the reasoning, saves a lot of argument later. Most teams do better with a direction and a review date than a fixed number.

                ## Milestones
                1. The current benchmark tiers read from the latest report, with their caveats noted.
                2. Your baseline placed against them for each metric.
                3. A decision between tier targets, trend targets or no targets, with reasons.
                4. The decision shared with teams and leadership.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on how targets are set for each metric, with reasons and a review date, shared with teams and leadership."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the benchmark tier table in the latest State of DevOps report"
                - "Place your baseline against each tier"
                - "Write the case for tier targets, trend targets and no targets"
                - "Record the decision and share it with team leads"
            - name: Adding reliability as a fifth metric
              description: |-
                ## Purpose
                Throughput metrics can improve while users suffer, which is why the DORA research added operational reliability as a fifth measure. Deciding how to bring a reliability signal into delivery reviews, usually by reusing the service level objectives the team already has, keeps faster delivery from being bought with a worse service. Keep the SLO definitions themselves owned by whoever owns reliability.

                ## Milestones
                1. The existing reliability signals for each service listed.
                2. One reliability measure chosen to sit beside the four delivery metrics.
                3. The measure added to the dashboard with its source named.
                4. The first monthly review held with all five metrics.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A reliability measure sourced from existing service level data appears beside the four delivery metrics in at least one monthly review."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the reliability signals each service already publishes"
                - "Pick one signal that every team can supply"
                - "Add the reliability panel to the delivery dashboard"
                - "Discuss all five metrics together in the next monthly review"
            - name: Retiring vanity delivery metrics
              description: |-
                ## Purpose
                Story point velocity, lines of code, commit counts and tickets closed per person often survive next to DORA metrics and send the opposite signal. Listing every delivery number currently reported, asking who uses each and for what decision, and retiring the ones nobody acts on frees attention for the metrics that matter. Expect some pushback from whoever built the old report.

                ## Milestones
                1. Every delivery metric currently reported listed with its audience.
                2. Each metric marked keep, replace or retire, with the decision it supports.
                3. Retired metrics removed from reports, with a note explaining why.
                4. No individual-level productivity numbers left in team reports.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An inventory of reported delivery metrics shows a keep, replace or retire decision for each, and retired ones are gone from reports."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every delivery number in current reports and dashboards"
                - "Ask each audience which decision each number informs"
                - "Mark each one keep, replace or retire"
                - "Remove the retired numbers and post a short explanation"
            - name: Value stream mapping workshop for one product
              description: |-
                ## Purpose
                A half-day workshop with the people who actually move changes through, engineers, reviewers, QA, operations and the product manager, maps one product's path from idea to production on a wall or a whiteboard. It surfaces handoffs and queues no tool records, and ends with a short list of changes the group owns. Bring the lead time breakdown as evidence, not as a verdict.

                ## Milestones
                1. Participants from every step invited and a half-day booked.
                2. The current state map drawn with working and waiting times.
                3. A future state map with the three largest waits addressed.
                4. Three improvement actions with owners added to the experiment backlog.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A workshop produces current and future state maps for one product and three owned actions added to the experiment backlog."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the product and list one person from each step to invite"
                - "Book a half-day and send the invite with a one-paragraph purpose"
                - "Prepare the lead time breakdown as a handout"
                - "Photograph both maps and turn the actions into backlog entries"
            - name: Yearly delivery review and target reset
              description: |-
                ## Purpose
                Once a year, step back from the monthly detail: did the metrics answer the questions in the original purpose, did the experiments help, and are the definitions still right for how the organisation now ships. A half-day review with engineering leadership resets targets, retires what no longer helps and agrees next year's focus. Keep the record so next year's review can compare.

                ## Milestones
                1. A yearly summary of all four metrics and the experiments run.
                2. The original purpose questions checked against what was learned.
                3. Definitions and targets reviewed and any changes versioned.
                4. One or two focus areas agreed for the coming year.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly review record shows metric trends, purpose questions answered, versioned definition changes and one or two agreed focus areas."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Book the half-day yearly review with engineering leadership @recurring(yearly)"
                - "Compile the year's metric trends and experiment results"
                - "Check each purpose question against what the year showed"
                - "Version any changes to definitions or targets"
            - name: Launching delivery metrics to the engineering org
              description: |-
                ## Purpose
                How metrics are introduced decides whether engineers treat them as a tool or a threat. A launch at an engineering all-hands that covers why, the definitions, the working agreement, what will never be done with the data and how to challenge a number, followed by an open question session, sets expectations before the first dashboard link circulates. Have one team share its own baseline story.

                ## Milestones
                1. A 20-minute launch talk prepared covering purpose, definitions and the working agreement.
                2. One pilot team ready to share what it learned from its baseline.
                3. An anonymous question channel open for a week after the launch.
                4. Answers to every question published.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The launch talk is delivered at an engineering all-hands and every question raised in the following week has a published answer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a 20-minute slot at the next engineering all-hands"
                - "Ask the agent to draft the talk outline from the purpose page and agreement"
                - "Ask the pilot team lead to share their baseline story"
                - "Open an anonymous question channel and publish answers within a week"
            - name: Re-baselining after a reorganisation
              description: |-
                ## Purpose
                Reorganisations move services between teams, merge pipelines and change ownership, which makes the old trend lines meaningless overnight. Updating the service-to-team mapping, recomputing history under the new structure and marking the change on every chart lets people compare like with like. Do it within the first month, before anyone draws conclusions from a broken trend.

                ## Milestones
                1. The service-to-team mapping updated for the new structure.
                2. Historical metrics recomputed under the new mapping where possible.
                3. The reorganisation date annotated on all trend charts.
                4. New team leads walked through their recomputed baseline.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Within a month of the reorganisation, the mapping is updated, history is recomputed and every new team lead has seen their baseline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the new list of teams and the services each one owns"
                - "Update the service-to-team mapping file"
                - "Recompute the last 90 days under the new mapping"
                - "Annotate the reorganisation date on every trend chart"
            - name: Developer experience survey beside DORA
              description: |-
                ## Purpose
                Numbers explain what is happening; a short survey explains why and how it feels. Running ten questions on friction, focus time, review experience and confidence in deploys twice a year, alongside the delivery metrics, shows whether improvements in lead time came at the cost of stress or interruptions. Share results with every team, including the uncomfortable ones.

                ## Milestones
                1. Ten survey questions chosen, most kept stable between rounds.
                2. The survey run anonymously with a response rate recorded.
                3. Results set beside the delivery metrics for each team.
                4. Two actions agreed from each round and added to the experiment backlog.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two survey rounds completed with response rates above half, results shared with every team and two actions taken from each round."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Pick ten questions and decide which stay fixed between rounds"
                - "Check whether a survey round is due and schedule it @recurring(quarterly)"
                - "Share results with every team beside its delivery metrics"
                - "Add two actions from the survey to the experiment backlog"
            - name: Delivery metrics for a single startup team
              description: |-
                ## Purpose
                With one team, one repository and a founder who still deploys, a full metrics platform is overkill. A spreadsheet or a few scripts reading the version control host and deploy logs, reviewed for ten minutes a fortnight, give enough signal to notice when releases slow or start breaking. Add tooling only when there is a second team.

                ## Milestones
                1. Deployment frequency and lead time pulled with a short script or spreadsheet.
                2. Failed deploys and recovery time noted by hand from the deploy log.
                3. A ten-minute fortnightly look at the numbers in the planning meeting.
                4. A trigger written down for when to move to proper tooling.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All four metrics are tracked in a lightweight sheet for three months, with a written trigger for moving to proper tooling."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the last month of merged pull requests and deploys"
                - "Compute deploy count and median lead time in a spreadsheet"
                - "Add columns for failed deploys and minutes to recover"
                - "Write down the trigger for moving to a real metrics tool"
            - name: Enterprise rollout across many teams
              description: |-
                ## Purpose
                Rolling delivery metrics out to thirty or more teams, with different stacks, deploy tools and maturity, fails when it starts as a mandate with a single dashboard. A staged rollout in waves, each team onboarded with its own baseline and a named champion, and a central group that owns definitions but not targets, scales without the backlash. Expect the data plumbing to take longer than the politics.

                ## Milestones
                1. Teams grouped into rollout waves by data readiness.
                2. A champion named in each team of the first wave.
                3. Each first-wave team shown its own baseline before any roll-up is published.
                4. A roll-up view published only after two waves are live.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least two rollout waves are live, each team has seen its own baseline and has a champion, and a roll-up view is published."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Rate every team's data readiness on a three-point scale"
                - "Group teams into waves and name a champion for each first-wave team"
                - "Hold a monthly champions call to share fixes and questions @recurring(monthly:14)"
                - "Publish the roll-up only after the second wave is live"
            - name: Delivery metrics under change approval rules
              description: |-
                ## Purpose
                Regulated organisations often require change approval boards, segregation of duties and audit trails, which add days to lead time and are rarely shown as their own stage. Measuring the approval wait separately, and presenting evidence that automated controls give the same assurance, gives risk and compliance teams something concrete to agree to. The DORA research found heavyweight approval boards did not reduce failures, which is worth sharing carefully.

                ## Milestones
                1. The approval wait measured as its own lead time stage.
                2. Each control the approval board provides listed with its regulatory purpose.
                3. A proposal for which controls could be met by automated checks and audit logs.
                4. The proposal reviewed with risk and compliance, with their response recorded.

                ## Notes
                Start from the **Risk register** template to record each control, the risk it addresses and the proposed replacement. Any change to approval rules is the compliance function's decision.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "The approval wait is reported as a lead time stage and a control-by-control proposal has been reviewed with risk and compliance."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Measure the median wait between approval request and approval"
                - "List each approval control and the regulation or policy behind it"
                - "Map which controls an automated check and audit log could satisfy"
                - "Book a review of the proposal with risk and compliance"
            - name: New manager inheriting a team's metrics
              description: |-
                ## Purpose
                Inheriting a team means inheriting its numbers, its history with them and sometimes its distrust. In the first month, reading the definitions, the baseline and the working agreement, then asking the team what the numbers have and have not helped with, avoids the classic mistake of announcing targets in week two. Change nothing about measurement until you understand the trend.

                ## Milestones
                1. The definitions, baseline and working agreement read in the first two weeks.
                2. One-to-one conversations covering how each engineer sees the metrics.
                3. A short summary of what the metrics have helped with and where they caused friction.
                4. A decision on what to keep, change or pause, shared with the team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Within six weeks, a written summary of the team's experience with its metrics and a keep, change or pause decision are shared with the team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the team's definitions file and working agreement"
                - "Ask each engineer in one-to-ones what the metrics have been used for"
                - "Write a half-page summary of what helped and what caused friction"
                - "Share the keep, change or pause decision at a team meeting"
            - name: Engineer's case for fixing the delivery pipeline
              description: |-
                ## Purpose
                Engineers often know exactly what slows them down, a flaky test stage, a manual staging sign-off, a forty-minute build, but struggle to get time to fix it. Using the team's own lead time breakdown and failure classification to size the cost in hours and delayed changes turns a complaint into a funded proposal. One page with numbers beats three retros of grumbling.

                ## Milestones
                1. The delay or failure source named and measured from the team's data.
                2. The cost estimated in engineer hours and delayed changes per month.
                3. A fix proposed with an effort estimate and the expected effect on a metric.
                4. The proposal discussed with the manager and a decision recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page proposal sizes one delivery bottleneck from team data, estimates the fix and records the manager's decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick the one bottleneck that costs the team most time"
                - "Pull the numbers that show its size from the lead time breakdown"
                - "Estimate the fix and its expected effect on a metric"
                - "Bring the one-page proposal to your next one-to-one"
            - name: Adapting DORA for mobile and release trains
              description: |-
                ## Purpose
                Mobile apps, on-premises products and firmware ship through app store review or scheduled release trains, so raw deployment frequency is capped by the calendar. Adapting the definitions, for example measuring lead time to release candidate, merge frequency to the main branch and phased rollout halts as failures, keeps the metrics meaningful without pretending these teams can deploy hourly. Compare these teams with their own history, not with web teams.

                ## Milestones
                1. The release path for each batched product drawn, from merge to user devices.
                2. Adapted definitions written for each of the four metrics.
                3. The adapted definitions added to the definitions document as a named variant.
                4. Dashboards labelled so batched products are not ranked against web services.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named variant of the definitions for batched releases is versioned, and dashboards separate these products from continuously deployed services."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draw the release path from merge to user devices for one batched product"
                - "Write adapted definitions for each of the four metrics"
                - "Add the variant to the definitions file with its own version"
                - "Separate batched products on the dashboard"
            - name: Causal analysis of delivery improvements
              description: |-
                ## Purpose
                Trends move for many reasons at once: a holiday, a new hire, a reorganisation, the change you actually made. Methods such as interrupted time series, comparison with a team that did not change and simple before and after distributions with confidence intervals help separate the effect of an intervention from background noise. Use them before claiming in a report that a practice worked.

                ## Milestones
                1. One past intervention chosen with a clear start date.
                2. A comparison team or period identified that did not have the intervention.
                3. An interrupted time series or difference-in-differences analysis run.
                4. A written conclusion stating the estimated effect and its uncertainty.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written analysis estimates the effect of one intervention on a delivery metric against a comparison, stating the uncertainty."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one past intervention with a clear start date"
                - "Find a comparison team or period that did not change"
                - "Ask the agent to outline an interrupted time series approach for the data"
                - "Write the estimated effect and its uncertainty in a short note"
            - name: Delivery metrics for a platform team
              description: |-
                ## Purpose
                Platform teams rarely ship to end users, so their own DORA numbers say little about whether they help. Measuring the delivery metrics of the teams that adopt the platform, before and after they move onto it, plus adoption and time to first deploy for a new service, shows the platform's real effect. It also gives the platform a business case that does not depend on anecdotes.

                ## Milestones
                1. Adoption of the platform measured by number of services and teams.
                2. Delivery metrics of adopting teams compared before and after adoption.
                3. Time from new service creation to first production deploy measured.
                4. A monthly platform impact note shared with consuming teams.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A monthly note reports platform adoption, time to first deploy and before and after delivery metrics for at least three adopting teams."
                cadence: rolling
              tasks:
                - "List the services that run on the platform and when each moved"
                - "Compare lead time for three adopting teams before and after the move"
                - "Measure time from service creation to first production deploy"
                - "Send the platform impact note to consuming teams @recurring(monthly:19)"
            - name: Event-based delivery metrics pipeline
              description: |-
                ## Purpose
                Delivery data assembled from scraped APIs breaks whenever a tool changes. Emitting standard delivery events, such as those described by the CDEvents specification, from version control, CI, deploy and incident tools into one store gives a durable, tool-independent history from which every metric is a query. Specialist work, but it pays off once there are several pipelines and a tool migration on the horizon.

                ## Milestones
                1. An event schema chosen, standard or in-house, covering change, build, deploy and incident events.
                2. Events emitted from at least the version control host and the deploy tool.
                3. All four metrics computed from the event store and matched against the old method.
                4. A schema version and contract published for teams adding new event sources.

                ## Notes
                Run the old and new calculations side by side for a month and explain every difference before switching the dashboard over.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All four metrics are computed from a single event store and agree with the previous method within an explained margin for one month."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Read the CDEvents specification and note which events you need"
                - "Emit deploy events from the deploy tool into the event store"
                - "Compute the four metrics from events and compare with the old method"
                - "Review the event schema with teams adding new sources @recurring(quarterly)"
---

# Engineering Delivery Metrics (DORA)

Delivery metrics tell a team how quickly and safely changes reach users: deployment frequency, lead time for changes, change failure rate and time to restore service. These projects start with foundations (why you are measuring, shared definitions, the data sources and the traceability that links commits, deploys and incidents, then a first baseline), move through the weekly and monthly routines that keep the data honest, the statistics and frameworks worth learning, the improvements and decisions the numbers point to, workshops and launches, variants for a small startup, a large enterprise, a regulated shop and a newly arrived manager, and finally specialist work such as causal analysis and an event-based metrics pipeline.

What repeats is a Monday look at the numbers in the team retro, a Tuesday change failure classification, a Friday deploy log tidy, a monthly leadership review, monthly checks on data quality, lead time stages, dashboards and the experiment backlog, quarterly trend reports and counter-metric reviews, and a yearly target reset. The Purchase decision, Metrics log, Meeting notes, Reading queue and Risk register templates pair with the projects that need a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
