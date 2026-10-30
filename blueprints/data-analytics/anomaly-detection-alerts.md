---
id: data-analytics.anomaly-detection-alerts
name: Anomaly Detection Alerts
description: "A short watchlist of metrics worth interrupting people for, alerts that arrive with context and an owner, seasonal baselines that cut false alarms, and a labelling and tuning rhythm that keeps alerts trusted."
category: business
version: 1.0.0
tags: [data-analytics, anomaly-detection-alerts, engineer, team, metric-alerting, alert-fatigue, seasonality, on-call]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
    - remediation-plan
    - onboarding-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Anomaly Detection Alerts
          description: "Automatically spotting unusual movements in metrics such as sales, sign-ups or errors and alerting the right people with useful context."
          projects:
            - name: Metric watchlist for anomaly alerts
              description: |-
                ## Purpose
                Teams that switch detection on for every metric in the warehouse get hundreds of alerts in week one and ignore all of them by week three. Starting with fifteen to thirty metrics that someone would genuinely act on, such as orders per hour, sign-ups, checkout conversion, payment failures and API error rate, keeps the first alerts rare enough to be read. Each metric on the list needs a reason it matters and a person who would care at three on a Tuesday afternoon.

                ## Milestones
                1. A long list of candidate metrics gathered from the main dashboards and the last year of incident reports.
                2. Each candidate tagged with the decision a sudden change would trigger, or struck off if there is none.
                3. A watchlist of no more than thirty metrics, each with its source table, grain and owner.
                4. The watchlist agreed with the lead of every team that owns a metric on it.

                ## Notes
                If nobody can say what they would do differently when a metric jumps, it belongs on a dashboard, not in an alert.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A shared watchlist of no more than thirty metrics exists, each with a named owner, source table and the action an anomaly would prompt."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the metrics on the five most viewed business dashboards"
                - "Pull the metrics mentioned in the last twelve months of incident reports"
                - "Write the action a sudden change would prompt beside each candidate"
                - "Cut the list to thirty and send it to each metric owner for sign-off"
            - name: Alert to action map for each watched metric
              description: |-
                ## Purpose
                An alert that only says sales are down leaves the reader to work out whether to check the payment provider, the website or the ad account. Writing, for each watched metric, the first three checks and who can act on them turns an alert from a worry into a short procedure. It is also the fastest way to find metrics that have no real response and should not interrupt anyone.

                ## Milestones
                1. A one-page response card for each watched metric listing the first three checks.
                2. The person or team with authority to act named on every card.
                3. Links from each card to the dashboard, logs or tool needed for the checks.
                4. Cards stored where the alert message can link straight to them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every metric on the watchlist has a response card with three first checks and a named team, linked from its alert."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the response card for the highest-revenue metric first"
                - "Ask the owner of each metric what they check first when it moves"
                - "Link each card to the dashboard and logs the checks need"
                - "Ask the agent to turn rough owner notes into consistent card wording"
                - "Refresh the cards for metrics that alerted this month @recurring(monthly:15)"
            - name: Labelled history of past incidents and anomalies
              description: |-
                ## Purpose
                Without a list of real past problems you cannot tell whether a detector is any good, only whether it is noisy. Reconstructing a year or two of outages, tracking breaks, pricing errors and promotion spikes, with start and end times, gives a labelled set to test every method against. Most teams find twenty to sixty usable events once they search chat history, incident tickets and finance corrections.

                ## Milestones
                1. A table of past events with metric, start time, end time, cause and whether it was a genuine problem or expected.
                2. At least twenty events covering outages, data breaks and planned spikes.
                3. Each event checked against the metric's chart so the window is right to the hour.
                4. The table stored in the warehouse where backtests can join to it.

                ## Notes
                Label expected spikes such as sales and launches too. A detector that fires on every planned promotion is as useless as one that misses outages.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A warehouse table holds at least twenty labelled past events with start and end times, causes and an expected or unexpected flag."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Search incident tickets and chat channels for the past two years of outages"
                - "Ask finance for any revenue corrections or refund spikes they remember"
                - "Check each event window against the metric chart and fix the timestamps"
                - "Load the finished table into the warehouse with a clear name"
            - name: Detection grain and evaluation schedule per metric
              description: |-
                ## Purpose
                Checking orders every five minutes catches a broken checkout fast but makes quiet overnight hours look alarming, while a daily check is calm but reports a payment outage the next morning. Choosing the grain and evaluation time for each metric, from its volume and how fast someone could respond, sets the trade between speed and false alarms deliberately rather than by default.

                ## Milestones
                1. Typical hourly and daily volumes recorded for each watched metric.
                2. A grain chosen for each metric, five minutes, hourly or daily, with the reason written beside it.
                3. An evaluation time set after the data for that period is normally complete.
                4. Overnight and weekend handling decided for low-volume hours.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each watched metric has a recorded grain, evaluation time and overnight rule, with its typical volume at that grain noted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Query the median and lowest hourly count for each watched metric"
                - "Mark metrics where an hour often has fewer than fifty events"
                - "Choose a grain and evaluation time for each metric and note why"
                - "Agree with owners what happens to low-volume overnight hours"
            - name: Annotation feed for launches, promotions and outages
              description: |-
                ## Purpose
                Half of all metric spikes have a known cause that someone in marketing or engineering already planned. A shared feed of releases, campaigns, price changes, holidays and incidents, read by the detector and drawn on alert charts, lets expected movements be marked as such and shows at a glance that a sign-up jump started ten minutes after the newsletter went out.

                ## Milestones
                1. One table holding annotations with start time, end time, type, affected metrics and owner.
                2. Release and campaign tools feeding the table automatically where possible.
                3. Public holidays for every market you trade in loaded a year ahead.
                4. Annotations appearing on the charts attached to alerts.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An annotation table fed by release and campaign tools exists, holds the coming year's holidays and shows on every alert chart."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create the annotation table with time, type, metrics and owner columns"
                - "Connect the deployment pipeline so each release writes an annotation"
                - "Ask marketing to log campaigns and email sends in the same table"
                - "Load next year's public holidays for every market you sell in"
                - "Remind teams to log planned campaigns and price changes @recurring(monthly:26)"
            - name: Choosing an anomaly detection approach or tool
              description: |-
                ## Purpose
                The options run from scheduled SQL rules, through open-source libraries, to the anomaly features in your BI or observability tool and dedicated metric monitoring products. They differ most on seasonality handling, segment slicing, alert context and cost per metric, not on the cleverness of the algorithm. Scoring three options against your watchlist and labelled history before signing anything avoids a year-long contract for a tool that cannot see weekly patterns.

                ## Milestones
                1. Requirements written: metric count, grain, seasonality, segments, channels and budget.
                2. Three options shortlisted across build, built-in and buy.
                3. Each option tried on the same five metrics and scored against the labelled history.
                4. A decision recorded with cost, owner and a review date.

                ## Notes
                Start from the **Purchase decision** template. Check the tool can read from your warehouse directly; copying metrics into a separate store doubles the upkeep.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares three approaches on the same five metrics and the labelled history, with cost and owner named."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the requirements list with metric count, grain and channels"
                - "Shortlist one build, one built-in and one bought option"
                - "Run each option on the same five metrics for two weeks"
                - "Score the results against the labelled incident history"
                - "Record the choice, the cost and a date to review it"
            - name: Routing map from metric to owning team
              description: |-
                ## Purpose
                Alerts posted to one shared channel are read by everyone and acted on by nobody. A routing map sends each metric's alerts to the team that can fix it, with a fallback owner when that team is unavailable, so a payment failure spike reaches the payments engineers and a sign-up drop reaches growth. It also exposes metrics owned by a team that no longer exists.

                ## Milestones
                1. Every watched metric mapped to a primary team and a fallback contact.
                2. Each team's preferred channel and working hours recorded.
                3. Routing rules configured in the alerting tool from the map.
                4. A test alert received and acknowledged by each team.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each watched metric routes to a named team and fallback, and every team has acknowledged a test alert."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each watched metric with the team that can act on it"
                - "Name a fallback contact for nights, weekends and holidays"
                - "Configure the routing rules from the map in the alerting tool"
                - "Send a test alert to every team and record who acknowledged it"
                - "Check the routing map against team and reorganisation changes @recurring(quarterly)"
            - name: Business impact severity levels for metric alerts
              description: |-
                ## Purpose
                Severity should follow the money, customers and obligations at risk, not the number of standard deviations the detector reports. A two percent dip in newsletter clicks and a forty percent drop in completed payments should not look the same on anyone's phone. Three or four levels, each with a response time and channel, make the loud alerts rare and let the quiet ones wait for a batch.

                ## Milestones
                1. Three or four severity levels written with examples from your own metrics.
                2. Each level tied to a channel and an expected response time.
                3. An impact estimate rule per metric, such as lost orders per hour times average order value.
                4. Severity assigned to every watched metric and visible in its alerts.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written severity scale with channels and response times is applied to every watched metric and shown in alert messages."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft three severity levels with a real example for each"
                - "Write the impact estimate rule for revenue, sign-up and error metrics"
                - "Agree response times for each level with team leads"
                - "Tag every watched metric with its default severity"
                - "Update impact rules with current order values and volumes @recurring(quarterly)"
            - name: Alert message that carries its own context
              description: |-
                ## Purpose
                Most of the time lost in a metric incident goes on working out what the alert means: which number, how far off, since when and compared with what. A standard message showing the observed value, the expected range, the size of the gap, a small chart with annotations, the top segments driving it and a link to the response card lets the reader decide in under a minute whether to act.

                ## Milestones
                1. A message layout agreed with value, expected range, gap, start time and severity.
                2. A chart of the last two weeks with the expected band and annotations embedded.
                3. The top three contributing segments listed where the metric has dimensions.
                4. Links to the response card, the dashboard and a feedback option on every alert.

                ## Notes
                Write the first line so it makes sense on a locked phone screen: metric, direction, size and time.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every alert shows value, expected range, start time, a banded chart, top segments and links to the response card and feedback."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Sketch the alert layout and test the first line on a phone"
                - "Add the expected band and annotations to the alert chart"
                - "Pull the top three contributing segments into the message"
                - "Add a one-click feedback option for useful or not useful"
            - name: Late data guard before anomaly checks run
              description: |-
                ## Purpose
                The commonest false alarm in business metric alerting is a dip that is really an incomplete hour, because the last batch has not landed yet. Making each check wait until its source period is complete, or comparing against an equally incomplete point from last week, removes a whole class of three in the morning interruptions. This is a guard on the detector, not a replacement for the data team's own freshness tests.

                ## Milestones
                1. The normal arrival delay recorded for each watched metric's source.
                2. A completeness signal chosen for each source, such as a load marker or row count threshold.
                3. Checks configured to skip or delay when the signal is missing.
                4. A separate notice raised when data is late, so silence is never mistaken for health.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No watched metric is evaluated before its source signals completeness, and late data raises its own notice to the data team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure the usual arrival delay for each watched source over two weeks"
                - "Pick the load marker or row count that shows a period is complete"
                - "Make each check wait for the marker before it evaluates"
                - "Route a late data notice to the data team instead of the metric owner"
            - name: Metric alert triage rota and weekly handover
              description: |-
                ## Purpose
                Alerts that arrive while the person who set them up is on holiday go unread unless someone is named. A light rota, one engineer or analyst per week who acknowledges every alert within the agreed time and hands over open items on Monday morning, spreads the knowledge and keeps response times honest. Teams of four to eight usually find one week in five or six sustainable.

                ## Milestones
                1. A rota covering the next three months with a named person each week.
                2. A handover note format with open alerts, active snoozes and anything odd.
                3. Acknowledgement times recorded for every alert.
                4. Median acknowledgement time reported each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rota names an owner for every week of the next quarter, and a handover is written each Monday with acknowledgement times logged."
                cadence: rolling
              tasks:
                - "Write the handover note template with open alerts and snoozes"
                - "Publish the next quarter's rota and swap weeks around holidays @recurring(quarterly)"
                - "Hand over open alerts and active snoozes to the next person @recurring(weekly:mon)"
                - "Report the month's median acknowledgement time to the team"
            - name: Alert outcome labelling log
              description: |-
                ## Purpose
                Nobody can improve a detector if nobody records whether its alerts were right. Marking each alert as a real problem, an expected movement, a data issue or noise, with a one-line cause, builds the evidence for every later tuning decision in a few seconds per alert. After two months the log shows which metrics produce most of the noise.

                ## Milestones
                1. A log with alert id, metric, label, cause and time to resolve.
                2. Every alert of the past week labelled within five working days.
                3. Confirmed real problems flowing back into the labelled incident history.
                4. The five noisiest metrics identified from two months of labels.

                ## Notes
                Start from the **Metrics log** template. Four labels are enough: real, expected, data issue, noise.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ninety percent of alerts in the last eight weeks carry an outcome label and a one-line cause."
                cadence: rolling
              tasks:
                - "Create the outcome log from the metrics log template"
                - "Add the four outcome labels to the alert feedback option"
                - "Label every unlabelled alert from the past week @recurring(weekly:fri)"
                - "Copy confirmed real problems into the labelled incident history"
            - name: Monthly detector precision and recall review
              description: |-
                ## Purpose
                Two numbers tell you whether alerting is working: the share of alerts that were real, which is precision, and the share of real problems that alerted, which is recall. Working them out monthly per metric from the outcome log and the incident list turns arguments about noise into a short table, and shows whether last month's tuning helped.

                ## Milestones
                1. Precision calculated per metric from the outcome log.
                2. Recall estimated from incidents found by other means.
                3. A one-page monthly summary naming the three worst metrics on each measure.
                4. One tuning action agreed for each of the three worst.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly summaries report precision and recall per metric, each with tuning actions recorded."
                cadence: rolling
              tasks:
                - "Write the query that joins alerts, outcome labels and incidents"
                - "Calculate precision and recall per metric for the month @recurring(monthly:9)"
                - "Pick the three worst metrics and agree one fix for each"
                - "Share the summary with the teams who receive alerts"
            - name: Quarterly sensitivity retune of watched metrics
              description: |-
                ## Purpose
                Business metrics change shape as the company grows, a new market opens or traffic moves to mobile, so sensitivity set in spring is wrong by autumn. A quarterly retune, using the latest labels and three months of new history, keeps each detector matched to today's volumes rather than last year's.

                ## Milestones
                1. Each metric's sensitivity setting and training window reviewed against recent labels.
                2. Proposed changes backtested on the labelled history before going live.
                3. A change note listing every setting altered and why.
                4. Alert volume and precision compared for the month before and after the retune.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter's retune has a change note and a before and after comparison of alert volume and precision."
                cadence: cyclic
              tasks:
                - "List metrics with precision below the agreed target last quarter"
                - "Backtest new sensitivity settings on the labelled history"
                - "Apply the backtested settings and write the change note @recurring(quarterly)"
                - "Compare alert volume and precision a month after the change"
            - name: Weekly digest of low-severity anomalies
              description: |-
                ## Purpose
                Small, slow movements such as a gradual fall in repeat orders or a creeping refund rate rarely deserve an interruption, but they matter over a quarter. Collecting low-severity findings into one short weekly digest gives teams the pattern without the pings, and it is where drifts that never cross an urgent threshold finally get noticed.

                ## Milestones
                1. Low-severity alerts routed to the digest instead of live channels.
                2. A digest showing each finding, its size, its four-week trend and a chart.
                3. The digest sent to each team on the same day each week.
                4. Findings that recur three weeks running raised with the owning team.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly digest has gone out on schedule for eight weeks, and every finding that recurred three weeks running has been raised with its owner."
                cadence: rolling
              tasks:
                - "Route low-severity alerts into a digest queue"
                - "Draft the digest layout with size, trend and chart for each item"
                - "Send the weekly digest to each owning team @recurring(weekly:tue)"
                - "Ask the agent to summarise findings that repeat three weeks running"
            - name: Watchlist upkeep as metrics change
              description: |-
                ## Purpose
                Metrics get renamed, redefined, retired and replaced, and an alert still watching last year's checkout funnel tells you nothing. A monthly pass over the watchlist adds new metrics that matter, removes dead ones and catches definition changes before they produce a false alarm or a silent gap.

                ## Milestones
                1. Every watched metric confirmed as still defined, populated and owned.
                2. Metrics with changed definitions rebaselined.
                3. New candidate metrics assessed against the watchlist criteria.
                4. Retired metrics removed and their alerts deleted with a note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each monthly watchlist check is recorded with additions, removals and rebaselined metrics, and no watched metric is without an owner."
                cadence: rolling
              tasks:
                - "Ask whoever owns metric definitions to flag changes to you"
                - "Check every watched metric is still populated and owned @recurring(monthly:18)"
                - "Assess new candidate metrics against the watchlist rules"
                - "Remove alerts for retired metrics and note why"
            - name: Snooze and mute register with expiry dates
              description: |-
                ## Purpose
                Muting a metric during a migration and forgetting to unmute it is the classic way a real outage goes unseen for days. Recording every snooze with a reason, an owner and an expiry, and checking the register weekly, keeps muting a short-term tool rather than a permanent blind spot.

                ## Milestones
                1. All current snoozes and mutes exported with owner and start date.
                2. A rule that every new snooze has an expiry no more than fourteen days out.
                3. Expired snoozes reviewed and either lifted or renewed with a reason.
                4. No mute older than thirty days without a written exception.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The register lists every active snooze with owner and expiry, and none has passed thirty days without a written exception."
                cadence: rolling
              tasks:
                - "Export every active snooze and mute with its owner"
                - "Set a fourteen-day maximum expiry in the alerting tool if it allows one"
                - "Review expired and long-running snoozes in the register @recurring(weekly:thu)"
                - "Lift any snooze whose original reason no longer applies"
            - name: Missed anomaly review after each incident
              description: |-
                ## Purpose
                Every incident found by a customer complaint instead of an alert is a free lesson about the detector. A short monthly review of incidents the alerts missed or caught late asks whether the metric was watched, whether the grain was right and whether the threshold was too loose, and turns each answer into one change.

                ## Milestones
                1. A list of the month's incidents with how each was first detected.
                2. For each missed or late one, the reason recorded: unwatched, wrong grain, loose threshold or muted.
                3. One change agreed per missed incident.
                4. Missed incidents added to the labelled history for future backtests.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's missed and late incidents have a recorded reason and an agreed change, and appear in the labelled history."
                cadence: rolling
              tasks:
                - "Ask incident managers to note how each incident was first spotted"
                - "Review the month's missed and late detections with the rota @recurring(monthly:23)"
                - "Agree one change for each missed incident"
                - "Add each missed incident to the labelled history"
            - name: Detector heartbeat and silent failure watch
              description: |-
                ## Purpose
                An anomaly detector that has quietly stopped running looks exactly like a calm week. A heartbeat, where each detection job reports that it ran and how many metrics it checked, with an alert to the platform owner when the heartbeat stops, is the only way to know that silence means health.

                ## Milestones
                1. Every detection job writing a run record with time and metrics checked.
                2. An alert raised to the platform owner if a job misses two runs.
                3. A heartbeat panel showing the last run time for each job.
                4. A tested restart procedure written for each job.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every detection job reports a heartbeat, a missed run alerts the owner within two cycles, and the panel is checked each working day."
                cadence: rolling
              tasks:
                - "Add a run record with time and metric count to each detection job"
                - "Alert the platform owner when a job misses two consecutive runs"
                - "Check the heartbeat panel shows every job ran overnight @recurring(daily)"
                - "Write and test the restart steps for each job"
            - name: Annual review of the metric alerting programme
              description: |-
                ## Purpose
                Once a year it is worth stepping back from individual thresholds and asking whether alerting is earning its keep. Bringing a year of precision, recall, response times and incident outcomes to the teams who receive alerts settles which metrics stay, which channels work and what the next year should add.

                ## Milestones
                1. A year of precision, recall and acknowledgement times summarised on two pages.
                2. A short survey of alert recipients on usefulness and noise completed.
                3. A meeting held with each receiving team's lead.
                4. A written plan for the next year with three priorities.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An annual review pack and a three-priority plan for the next year are written and shared with every receiving team."
                cadence: cyclic
              tasks:
                - "Book the annual review with each receiving team lead @recurring(yearly)"
                - "Summarise a year of precision, recall and response times"
                - "Survey alert recipients on usefulness and noise"
                - "Write the three priorities for next year and share them"
            - name: Static thresholds and percent change rules
              description: |-
                ## Purpose
                Fixed limits and week-on-week percent change are where most alerting starts, and for some metrics, such as an error rate that should never pass two percent, they are the right answer. Knowing exactly where they break, on growing metrics, seasonal ones and small counts, tells you when to keep them and when to move on.

                ## Milestones
                1. A fixed threshold and a percent change rule written for three watched metrics.
                2. Each rule backtested on the labelled history with hits and false alarms counted.
                3. The failure pattern noted for each: growth, seasonality or low volume.
                4. A rule of thumb written down for when a fixed limit is good enough.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note compares fixed and percent change rules on three metrics, with hits and false alarms counted against the labelled history."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a fixed threshold and a percent change rule for three metrics"
                - "Backtest each rule against the labelled incident history"
                - "Count hits and false alarms for each rule"
                - "Write a short note on where each rule broke and why"
            - name: Seasonal baselines for weekly and daily patterns
              description: |-
                ## Purpose
                Monday morning orders look nothing like Saturday night orders, and comparing both with a single average guarantees false alarms. Learning to compare against the same hour on previous weeks, or against the residual left after removing seasonal patterns with a decomposition such as STL, is the single biggest improvement most detectors can make.

                ## Milestones
                1. A same-hour-of-week baseline built from the last four weeks for one hourly metric.
                2. A seasonal decomposition run on the same metric and its residual plotted.
                3. Both approaches backtested on the labelled history.
                4. Holiday and month-end effects noted where neither approach copes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two seasonal baselines have been built and backtested on one hourly metric, with results and failure days written up."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a same-hour-of-week baseline for one hourly metric"
                - "Run a seasonal decomposition and plot the residual"
                - "Backtest both baselines on the labelled history"
                - "Note the days where neither baseline coped and why"
            - name: Outlier-resistant statistics for alert bands
              description: |-
                ## Purpose
                Bands built from the mean and standard deviation are dragged wide by the very spikes they should catch, so one bad day last month hides the next one. Median and median absolute deviation, trimmed windows and quantile bands keep the expected range steady when the history contains outliers, which business history always does.

                ## Milestones
                1. Mean-based and median-based bands compared on a metric with past spikes.
                2. A median absolute deviation score implemented for one watched metric.
                3. Quantile bands tried as an alternative and their behaviour noted.
                4. A default band method chosen for the watchlist with the reason recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A default band method for the watchlist is chosen and recorded after mean, median and quantile bands were compared on real spikes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Plot mean and median bands on a metric with known spikes"
                - "Implement a median absolute deviation score in SQL or Python"
                - "Try a quantile band from the last eight equivalent periods"
                - "Write down the default band method and why it won"
            - name: Prediction interval bands as alert limits
              description: |-
                ## Purpose
                When a metric has trend and several seasonal patterns, a short-horizon forecast with a prediction interval often makes a better expected range than any rule. Learning to use the interval, not the point forecast, as the alert boundary, and checking that a ninety-five percent band really contains about ninety-five percent of normal points, keeps forecast-based detection honest.

                ## Milestones
                1. A one-step-ahead forecast with intervals built for one watched metric.
                2. Interval coverage measured on a month of normal data.
                3. Interval width tuned until coverage matches the stated level.
                4. Alerts from the interval compared with the seasonal baseline on the labelled history.

                ## Notes
                This is about using a forecast as a detector. Building forecasts for planning and budgets is separate work with its own error measures.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A forecast-based band for one metric has measured coverage within five points of its stated level and has been compared with the seasonal baseline."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Fit a one-step-ahead forecast with intervals for one metric"
                - "Measure how often normal points fall inside the interval"
                - "Widen or narrow the interval until coverage matches its level"
                - "Compare its alerts with the seasonal baseline on past incidents"
            - name: Change point detection for level shifts
              description: |-
                ## Purpose
                Some problems arrive as a step rather than a spike: conversion falls by a fifth after a release and stays there. Point anomaly methods flag the first hour and then adapt, quietly accepting the new level. Change point methods such as CUSUM or Bayesian online change point detection are built to say when the level moved and by how much.

                ## Milestones
                1. Three past level shifts identified in the labelled history.
                2. A CUSUM detector built and tuned on one metric.
                3. A second change point method tried and compared with the first.
                4. A rule written for when level shift alerts should run alongside spike alerts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two change point methods have been tested on three known level shifts, and a written rule says when shift alerts run beside spike alerts."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find three past level shifts in the labelled history"
                - "Build a CUSUM detector on one metric and tune its drift parameter"
                - "Try one Bayesian or offline change point method on the same data"
                - "Write when level shift alerts should run beside spike alerts"
            - name: Alerting on rates with small denominators
              description: |-
                ## Purpose
                Conversion that drops from four percent to zero looks dramatic until you see it was based on twelve visitors. Rates need to be judged together with their volume, using binomial or Poisson intervals or a minimum count rule, or the smallest segments will produce most of your alerts. Learning this once fixes a large share of the noise in segment-level alerting.

                ## Milestones
                1. The numerator and denominator stored for every watched rate metric.
                2. Binomial confidence intervals calculated for one rate at several volumes.
                3. A minimum denominator rule set for each rate metric.
                4. Segment-level rate alerts re-run with the rule and noise compared.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every watched rate metric has a stored denominator and a minimum volume rule, with the change in segment alert noise measured."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Store numerator and denominator separately for each watched rate"
                - "Calculate binomial intervals for one rate at low and high volume"
                - "Set a minimum denominator below which a rate is not judged"
                - "Re-run segment rate alerts with the rule and count the difference"
            - name: Contribution analysis to explain a metric drop
              description: |-
                ## Purpose
                Knowing revenue fell by twelve percent is the start; knowing that eighty percent of the fall came from one country on one app version is what gets it fixed. Contribution analysis, which splits a change in a total across its dimensions and ranks the segments that explain it, is the skill behind every useful root cause hint in an alert.

                ## Milestones
                1. The main dimensions agreed for each watched metric, such as country, platform, channel and plan.
                2. A contribution query that ranks segments by share of the change.
                3. Mix effects separated from rate effects for one ratio metric.
                4. The method tested on five past incidents with a known cause.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A contribution query correctly ranks the known cause in the top three segments for at least four of five past incidents."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree the four or five dimensions to slice each metric by"
                - "Write a query ranking segments by share of the total change"
                - "Separate mix and rate effects for one conversion metric"
                - "Test the method on five past incidents with a known cause"
            - name: False alarm rates across many metrics
              description: |-
                ## Purpose
                A detector with a one in a thousand false alarm rate per check sounds strict, until it checks five hundred segment series every hour and fires twelve times a day by chance. Understanding how false alarms add up across metrics, segments and time, and how to control them with stricter limits, grouping or false discovery rate methods, keeps alert volume predictable as coverage grows.

                ## Milestones
                1. Expected chance alerts per day calculated for the current set of checks.
                2. The calculation compared with the actual noise rate in the outcome log.
                3. One control method chosen: tighter limits, hierarchical checks or false discovery rate.
                4. A daily alert budget agreed with the receiving teams.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The expected chance alert count per day is calculated, compared with the outcome log, and a daily alert budget is agreed with each team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count checks per day across all metrics, segments and grains"
                - "Work out expected chance alerts at the current threshold"
                - "Compare the estimate with noise labels in the outcome log"
                - "Agree a daily alert budget with each receiving team"
            - name: Backtest of candidate detectors on labelled history
              description: |-
                ## Purpose
                Choosing a method because it worked in a blog post is how teams end up with detectors that miss their own outages. Running two or three candidate methods over the labelled history and scoring detection rate, false alarms per week and time to detect gives a decision you can defend, and a harness you can reuse for every later change.

                ## Milestones
                1. A backtest harness that replays history and records every alert a method would have raised.
                2. Three methods scored on recall, false alarms per week and minutes to detect.
                3. Results broken down by metric type: counts, rates and money.
                4. A method chosen per metric type and recorded with its scores.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A reusable harness has scored three methods on recall, false alarms and time to detect, and a method per metric type is recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Build a harness that replays history and logs simulated alerts"
                - "Score three methods on recall, false alarms and time to detect"
                - "Break the scores down by counts, rates and money metrics"
                - "Record the chosen method for each metric type"
            - name: Grouping correlated alerts into one incident
              description: |-
                ## Purpose
                When checkout breaks, orders, revenue, conversion, payment success and average basket all alert within five minutes, and five pings bury the one message that matters. Grouping alerts that share a time window and a known relationship into one incident, led by the most upstream metric, cuts volume during real problems, when attention is scarcest.

                ## Milestones
                1. Related metrics mapped into groups with a lead metric for each.
                2. A grouping rule using a time window and the metric map.
                3. Grouped alerts showing the lead metric first with the others listed beneath.
                4. Alert count per real incident measured before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Related metrics alert as one grouped incident, and alerts per real incident have fallen compared with the month before grouping."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Map related metrics into groups with a lead metric each"
                - "Set a grouping window, starting at ten minutes"
                - "Show grouped alerts with the lead metric first"
                - "Compare alerts per real incident before and after grouping"
            - name: Root cause hints attached to every alert
              description: |-
                ## Purpose
                An alert that already names the segments behind a change, the release that went out just before it and any active annotation saves the first twenty minutes of every investigation. Automating these hints with the contribution query and the annotation feed is one of the most valuable improvements once basic detection is trusted.

                ## Milestones
                1. The contribution query running automatically when an alert fires.
                2. Releases and annotations from the previous two hours listed in the alert.
                3. Hints worded as possible causes, not conclusions.
                4. Recipients asked after a month whether hints shortened investigations.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every alert carries top segments and recent changes, and a recipient survey after one month records whether investigations got shorter."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Run the contribution query automatically when an alert fires"
                - "List releases and annotations from the previous two hours"
                - "Word hints as possible causes, not confirmed ones"
                - "Ask recipients after a month whether the hints saved time"
            - name: Replacing hard-coded thresholds on the top ten metrics
              description: |-
                ## Purpose
                Thresholds typed in by hand two years ago, at half today's volume, are a common reason alerts either never fire or fire every weekend. Moving the ten most important metrics onto the chosen seasonal or banded method, in shadow first, retires the oldest source of noise without losing the alerts people rely on.

                ## Milestones
                1. The ten metrics with hard-coded thresholds listed with their current limits.
                2. The new method running in shadow beside each old threshold for two weeks.
                3. Differences reviewed with each metric owner.
                4. Old thresholds removed and the change logged.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ten most important metrics run on the chosen method, with old thresholds removed after a two-week shadow comparison."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the ten most important metrics still on fixed thresholds"
                - "Run the new method in shadow beside each for two weeks"
                - "Review shadow differences with each metric owner"
                - "Remove the old thresholds and log the change"
            - name: Choosing alert channels by severity
              description: |-
                ## Purpose
                Paging for everything burns people out, and email for everything means nothing is seen until Monday. Deciding which severities go to paging, chat, ticket queues and digests, and checking that each team can actually receive them out of hours, matches the interruption to the stakes.

                ## Milestones
                1. Current channels listed for each team with who reads them out of hours.
                2. One channel assigned to each severity level.
                3. Paging limited to the top severity with a named on-call contact.
                4. The decision recorded and configured in the alerting tool.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision assigns one channel to each severity level, with paging used only for the top level and configured in the tool."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the channels each team reads in and out of hours"
                - "Assign one channel to each severity level"
                - "Limit paging to the top severity and name its on-call contact"
                - "Configure the channels and record the decision"
            - name: Minimum volume rules for sparse segments
              description: |-
                ## Purpose
                Slicing every metric by country, device and plan multiplies coverage and multiplies noise, because a small segment can halve on a quiet afternoon by chance. Setting minimum volumes, rolling small segments into an other bucket and checking them at a coarser grain keeps segment alerts for segments big enough to matter.

                ## Milestones
                1. Segment volumes profiled for every sliced metric.
                2. A minimum volume per grain agreed for each metric.
                3. Small segments grouped or moved to daily checks.
                4. Segment alert noise compared over the month before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every sliced metric has a minimum segment volume per grain, and segment alert noise is measured for a month before and after."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Profile hourly and daily volumes for every segment"
                - "Agree a minimum volume per grain for each sliced metric"
                - "Group small segments or move them to a daily check"
                - "Compare segment alert noise before and after the change"
            - name: Self-service alert subscriptions for business teams
              description: |-
                ## Purpose
                Marketing, sales and finance often want to know when their own numbers move but have no way to ask except a ticket to the data team. A small self-service layer, where people subscribe to watched metrics or segments at a severity and channel of their choosing, spreads the value of the detector without the data team configuring every alert by hand.

                ## Milestones
                1. A list of watched metrics and segments open to subscription.
                2. A simple form or menu for subscribing, with severity and channel choices.
                3. Guardrails limiting subscriptions to governed, documented metrics.
                4. Twenty or more subscriptions from outside the data team in the first two months.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A subscription form is live for governed metrics, and at least twenty subscriptions come from outside the data team within two months."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose which watched metrics and segments open for subscription"
                - "Build a simple subscription form with severity and channel options"
                - "Limit subscriptions to governed, documented metrics"
                - "Show the form to marketing, sales and finance leads"
            - name: Shadow period before detector go-live
              description: |-
                ## Purpose
                Switching a new detector straight on to live channels means its teething noise lands on people who never agreed to it. Running two to four weeks in shadow, with alerts logged and reviewed by the builders only, finds the badly tuned metrics and broken links before anyone else sees them, and gives a real precision figure to quote at launch.

                ## Milestones
                1. The detector running in shadow with alerts written to a log only.
                2. Every shadow alert labelled by the build team.
                3. Metrics with precision below the target retuned or removed.
                4. A go-live date agreed with receiving teams and the first live week watched closely.

                ## Notes
                Start from the **Operational checklist** template for the go-live day.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The detector went live on an agreed date after at least two weeks of labelled shadow alerts, with its shadow precision recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Point the new detector at a shadow log instead of live channels"
                - "Label every shadow alert at the end of each day"
                - "Retune or drop metrics below the precision target"
                - "Agree the go-live date with each receiving team"
            - name: Peak trading season alert plan
              description: |-
                ## Purpose
                Seasonal peaks such as end-of-year sales, back to school or a ticket release bring volumes the detector has rarely seen, so ordinary bands either scream or go blind. Planning the peak weeks ahead, with baselines drawn from last year's peak, a staffed rota and pre-written annotations, keeps alerts useful exactly when an outage costs most.

                ## Milestones
                1. Last year's peak reviewed for alerts raised and incidents missed.
                2. Baselines for peak weeks built from last year's peak where available.
                3. Rota cover confirmed for every peak day, including evenings.
                4. Planned promotions entered as annotations before the peak starts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Peak-week baselines, full rota cover and annotations for every planned promotion are in place before the first peak day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull last year's peak alerts and incidents into one list"
                - "Build peak-week baselines from last year's peak data"
                - "Confirm rota cover for every peak day and evening"
                - "Enter every planned promotion as an annotation before the peak"
            - name: Launch watch window for a new product or market
              description: |-
                ## Purpose
                New products, markets and pricing plans have no history, so the detector has nothing to compare against for weeks. A launch watch window, with simple guard limits on the critical numbers, hand-checked dashboards twice a day and a rule for when the new series joins normal detection, covers the gap when the risk is highest.

                ## Milestones
                1. Guard limits agreed for three to five launch metrics with the product owner.
                2. Twice-daily manual checks scheduled for the first two weeks.
                3. A rule written for when enough history exists to switch on normal detection.
                4. A short review written when the window closes.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Guard limits and twice-daily checks covered the first two weeks after launch, and a closing review records when normal detection began."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree guard limits for the launch metrics with the product owner"
                - "Schedule twice-daily dashboard checks for the first two weeks"
                - "Write the history rule for joining normal detection"
                - "Write a short review when the watch window closes"
            - name: Rebaselining after a tracking or definition change
              description: |-
                ## Purpose
                Tracking library swaps, consent banners and changed metric definitions can shift a series overnight, and the detector reads the step as a lasting anomaly for weeks. Planning the change with the teams involved, marking the cut-over and resetting or bridging the baseline keeps alerts from crying wolf or, worse, learning the wrong level.

                ## Milestones
                1. The change date and affected metrics confirmed with the team making it.
                2. An annotation marking the cut-over in place before it happens.
                3. The baseline reset or bridged using a parallel run of old and new definitions.
                4. Alerts on affected metrics checked daily for the first two weeks.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every metric affected by the change has a cut-over annotation and a reset or bridged baseline, with two weeks of alerts checked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm the change date and affected metrics with the team making it"
                - "Add a cut-over annotation before the change goes live"
                - "Run old and new definitions side by side for a week if possible"
                - "Reset or bridge each affected baseline and log what was done"
            - name: Synthetic anomaly fire drill
              description: |-
                ## Purpose
                You only know the whole chain works, from detection to routing to the right person opening the response card, when an anomaly arrives. Injecting a synthetic anomaly into a test copy of a metric once a year, and timing each step, tests the detector, the routing, the message and the people without waiting for a real outage.

                ## Milestones
                1. A safe way to inject a synthetic anomaly into a test series agreed.
                2. The drill run without telling the rota person the exact time.
                3. Time to detect, deliver, acknowledge and open the response card recorded.
                4. Fixes from the drill written up and assigned.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A drill has been run in the last twelve months with each step timed and every resulting fix assigned to an owner."
                cadence: cyclic
              tasks:
                - "Agree a safe test series and injection method with the platform owner"
                - "Run the synthetic anomaly drill without warning the rota @recurring(yearly)"
                - "Record time to detect, deliver and acknowledge"
                - "Assign each fix the drill uncovered"
            - name: Anomaly alerts for a data team of one
              description: |-
                ## Purpose
                Lone analysts and engineers cannot run a rota, watch dashboards all day or maintain a hundred alerts. Watching five to eight metrics that would genuinely change the business, with simple same-hour-last-week rules in scheduled SQL and a single daily summary, gives most of the protection for an hour or two a month.

                ## Milestones
                1. Five to eight metrics chosen with the founder or manager.
                2. Same-hour-of-week rules written as scheduled queries.
                3. One daily summary message and one urgent channel set up.
                4. A cover arrangement for holidays agreed with one other person.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five to eight metrics are checked by scheduled queries, with a daily summary, an urgent channel and named holiday cover."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree five to eight must-watch metrics with your manager"
                - "Write a scheduled query comparing each with the same hour last week"
                - "Send results to one daily summary and one urgent channel"
                - "Ask a colleague to cover alerts while you are on leave"
            - name: Inheriting alerts nobody trusts
              description: |-
                ## Purpose
                Taking over an alerting setup where everyone has muted the channel and nobody remembers why each alert exists is common after a team change. Auditing what fires, who reads it and what it has caught, then switching off the noise and relaunching a small set of good alerts, rebuilds trust faster than tuning hundreds of bad ones.

                ## Milestones
                1. An inventory of existing alerts with owner, last fired date and ninety-day count.
                2. Recipients asked which alerts they read and which they ignore.
                3. Alerts with no owner or no catch in a year switched off.
                4. A short trusted set relaunched with clear messages and a feedback option.

                ## Notes
                Start from the **Remediation plan** template. Announce what you are turning off a week before you do it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every inherited alert is either switched off or relaunched with an owner, and the relaunched set has a recorded precision after one month."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Export every existing alert with owner and ninety-day fire count"
                - "Ask recipients which alerts they read and which they ignore"
                - "Announce, then switch off alerts with no owner or no catch in a year"
                - "Relaunch a short trusted set with the new message layout"
            - name: Onboarding a teammate to the alert rota
              description: |-
                ## Purpose
                First rota weeks with no preparation mean hesitant acknowledgements and alerts escalated that never needed to be. A structured onboarding, with the response cards, the outcome log, a shadow week beside an experienced colleague and a practice alert, gets a new engineer or analyst confident before their first solo week.

                ## Milestones
                1. A reading list of response cards, severity levels and recent incidents shared.
                2. A shadow week completed beside an experienced rota member.
                3. A practice alert handled end to end with feedback.
                4. A first solo rota week completed and debriefed.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The new teammate has completed a shadow week, a practice alert and a debriefed solo rota week."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Send the new teammate the response cards and severity levels"
                - "Pair them with an experienced colleague for a shadow week"
                - "Run a practice alert and talk through each step"
                - "Debrief after their first solo rota week"
            - name: Metric alerts for a business team without analysts
              description: |-
                ## Purpose
                Sales operations, customer support and finance teams often own critical numbers but have nobody who reads band charts. Setting up a handful of alerts in plain language, with a named data contact and a monthly half-hour to adjust them, gives these teams early warning without turning them into analysts.

                ## Milestones
                1. Three to six metrics chosen with the team lead.
                2. Alert messages rewritten in the team's own vocabulary.
                3. A named data contact and how to reach them included in every alert.
                4. A monthly half-hour adjustment slot held for three months.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The team receives three to six plain-language alerts with a named data contact, and three monthly adjustment sessions have been held."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose three to six metrics with the team lead"
                - "Rewrite each alert message in the team's own words"
                - "Add the data contact's name to every alert"
                - "Hold a half-hour adjustment session with the team @recurring(monthly:12)"
            - name: Linking error rate spikes to business metric drops
              description: |-
                ## Purpose
                Product engineers watch error rates and latency, the data team watches orders and sign-ups, and the two rarely look at the same chart during an incident. Connecting a few service error metrics to the business metrics they affect, so a payment API error spike shows the orders at risk beside it, makes severity obvious and gets both teams into one conversation.

                ## Milestones
                1. Three to five services mapped to the business metrics they affect.
                2. Service error and latency series brought into the same detector or chart.
                3. Alerts showing the linked business metric beside the error spike.
                4. One incident reviewed jointly by engineering and data.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Error alerts for three to five services show the linked business metric, and one incident has had a joint engineering and data review."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map three to five services to the business metrics they affect"
                - "Bring their error and latency series into the same detector"
                - "Show the linked business metric beside each error alert"
                - "Hold a joint review of the next incident with engineering"
            - name: Anomaly detection for low-volume start-up metrics
              description: |-
                ## Purpose
                Young products with forty sign-ups a day and a handful of orders cannot support hourly detection, because normal days bounce by half. Using daily or weekly grains, count methods suited to small numbers and alerts only on clear breaks avoids teaching a small team to ignore alerts before the company is big enough to need them.

                ## Milestones
                1. Daily and weekly volumes recorded for each candidate metric.
                2. A Poisson or similar small-count method used for counts below about a hundred a day.
                3. Alerts limited to a few metrics at daily or weekly grain.
                4. A volume threshold set for moving each metric to a finer grain as the company grows.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each alerted metric has a grain and small-count method suited to its volume, with the volume for moving to hourly checks written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record daily and weekly volumes for each candidate metric"
                - "Use a Poisson test for counts under about a hundred a day"
                - "Keep alerts to a few metrics at daily or weekly grain"
                - "Write the volume at which each metric moves to an hourly grain"
            - name: Streaming anomaly detection on live events
              description: |-
                ## Purpose
                Some problems, such as a payment failure spike or a login outage, cost real money in the minutes before an hourly batch would notice. Running detection on the event stream with sliding windows, a lateness allowance and state small enough to recover quickly brings detection time from an hour down to a few minutes for the handful of metrics that justify it.

                ## Milestones
                1. Two or three metrics chosen where minutes of delay cost real money.
                2. Sliding window counts computed on the event stream with a late event policy.
                3. Streaming alerts compared with batch alerts on the same metrics for a month.
                4. A fallback to batch detection in place if the stream job fails.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two or three metrics alert from the stream within five minutes, with a month's comparison against batch and a working batch fallback."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Pick the two or three metrics where minutes of delay cost money"
                - "Compute sliding window counts on the event stream"
                - "Set a lateness allowance before a window is judged"
                - "Compare streaming and batch alerts on the same metrics for a month"
            - name: Multivariate detection across related metrics
              description: |-
                ## Purpose
                Some anomalies only show in combination: traffic normal, conversion normal, but average order value and refund rate both shifting together. Multivariate methods such as isolation forests, or residuals from a model that predicts one metric from its neighbours, catch these patterns at the cost of alerts that are harder to explain. They work best as a second layer behind simple per-metric checks.

                ## Milestones
                1. A group of four to eight related metrics chosen.
                2. One multivariate method trained on a clean period and tested on the labelled history.
                3. Each alert accompanied by the metrics contributing most to it.
                4. A decision recorded on whether the method adds catches the per-metric checks miss.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision states whether a multivariate method caught real problems the per-metric checks missed on the labelled history."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose four to eight related metrics for a multivariate trial"
                - "Train an isolation forest or residual model on a clean period"
                - "List the top contributing metrics for each multivariate alert"
                - "Record whether it caught anything the per-metric checks missed"
            - name: Hierarchical detection across thousands of segments
              description: |-
                ## Purpose
                Once metrics are sliced by country, product, channel and customer tier, the series count runs into thousands and checking each one independently drowns everyone. Checking the top of the hierarchy first and drilling down only where a parent moves, with false discovery control on the leaves, keeps coverage wide and alert counts sane.

                ## Milestones
                1. The segment hierarchy for each sliced metric written down.
                2. Top-level checks triggering drill-down only when a parent moves.
                3. False discovery control applied to leaf-level checks.
                4. Alert count and catch rate compared with independent checks on the labelled history.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Hierarchical checks run on every sliced metric and match or beat independent checks on catch rate with fewer alerts on the labelled history."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the segment hierarchy for each sliced metric"
                - "Check top-level series first and drill down only when they move"
                - "Apply false discovery control to the leaf-level checks"
                - "Compare catches and alert counts with independent checks"
            - name: Linking anomalies to releases and feature flags
              description: |-
                ## Purpose
                A large share of sudden metric changes start within minutes of a deployment or a feature flag change, and the fastest fix is often a rollback. Joining alert start times to the release and flag history, and showing the likeliest candidates with their rollout share, lets a team test the obvious cause first. Over time the joined history shows which kinds of change most often break metrics.

                ## Milestones
                1. Release and feature flag change history available as timestamped tables.
                2. Alerts joined to changes in the preceding window and ranked by timing and affected segments.
                3. Candidate changes and their rollout share shown in the alert.
                4. A quarterly summary of which change types most often preceded real anomalies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every alert lists candidate releases and flag changes from the previous two hours, and a quarterly summary of change types is produced."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Load release and feature flag change history into the warehouse"
                - "Join each alert to changes in the previous two hours"
                - "Show candidate changes and rollout share in the alert"
                - "Summarise which change types preceded real anomalies @recurring(quarterly)"
---

# Anomaly Detection Alerts

This area is for engineers and data teams who would rather hear about a broken checkout, a sign-up slump or an error spike from an alert than from a customer. It starts with the foundations (a short watchlist, response cards, a labelled incident history, routing and an alert message that carries its own context), then the routines that keep alerts trusted, the statistics behind good expected ranges, the improvements and decisions that cut noise, the dated events that need planning, the situations teams find themselves in, and finally specialist methods for streams, segments, related metrics and releases.

What repeats is a daily heartbeat glance, a Monday rota handover, a Friday labelling pass, a weekly digest and snooze check, a monthly precision and recall review with a watchlist check, and a quarterly sensitivity retune. The Purchase decision, Metrics log, Operational checklist, Remediation plan and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
