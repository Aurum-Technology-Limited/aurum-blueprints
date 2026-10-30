---
id: data-analytics.data-quality-monitoring
name: Data Quality Monitoring
description: "Critical tables tiered and owned, tests for freshness, volume, duplicates and validity, alerts that reach the right owner, and a data incident process that ends in a fixed root cause."
category: business
version: 1.0.0
tags: [data-analytics, data-quality-monitoring, engineer, team, data-observability, data-testing, data-incidents, freshness]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - remediation-plan
    - operational-checklist
    - onboarding-plan
    - compliance-control
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Data Quality Monitoring
          description: "Testing data for freshness, completeness, duplicates and anomalies, alerting owners when it breaks and tracking incidents to root cause."
          projects:
            - name: Critical dataset inventory for quality monitoring
              description: |-
                ## Purpose
                You cannot monitor everything, and teams that try end up with thousands of checks and no idea which failures matter. Listing the tables and files that feed revenue reporting, customer-facing features, regulatory returns and the most used dashboards gives a short, defensible list to protect first. Expect thirty to eighty candidates in a mid-sized warehouse, not five hundred.

                ## Milestones
                1. An inventory of candidate datasets with schema, table name, the job that builds it and its main consumers.
                2. Ninety days of query or dashboard usage attached to each entry.
                3. Downstream uses noted for each table: dashboards, exports, reverse syncs or product features.
                4. A first cut of the twenty to fifty datasets that matter most, agreed with one person from each major consumer team.

                ## Notes
                Start from usage logs, not memory. The tables people think are critical and the ones queried every hour are rarely the same list.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A shared inventory names every candidate dataset with its consumers and ninety-day usage, and marks a top list of no more than fifty."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export ninety days of query history from the warehouse usage views"
                - "List the tables behind the twenty most viewed dashboards"
                - "Add tables that feed product features, exports and reverse syncs"
                - "Ask each consumer team lead to confirm or challenge the top list"
            - name: Impact tiers for every monitored dataset
              description: |-
                ## Purpose
                Tiering decides how fast a failure gets attention, how strict the checks are and who gets woken up, so it should be a written decision rather than a feeling during an incident. Three tiers work for most teams: tier one breaks money, customers or compliance, tier two breaks a team's daily work, and tier three is exploratory.

                ## Milestones
                1. Written criteria for tiers one, two and three, each with an example table.
                2. Every dataset on the inventory assigned a tier, with the reason in one line.
                3. The tier recorded where engineers will see it, such as table metadata, tags or the model config.
                4. The tier one list signed off by the data lead and one business stakeholder.

                ## Notes
                Keep tier one small. If more than a fifth of tables are tier one, the tiers stop meaning anything and every alert becomes urgent.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every inventoried dataset carries a recorded tier with a one-line reason, and the tier one list has written sign-off."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft one-paragraph criteria for each of the three tiers"
                - "Assign a tier and a reason to every dataset on the inventory"
                - "Tag each table with its tier in metadata or the model config"
                - "Re-tier datasets whose consumers or uses have changed @recurring(yearly)"
            - name: Named owner for every tier one and tier two table
              description: |-
                ## Purpose
                An alert sent to a shared channel with no named owner is read by everyone and acted on by no one. Each important table needs a technical owner who fixes it and a business contact who can say whether a strange value is actually wrong, written down before the first incident rather than negotiated during it.

                ## Milestones
                1. A technical owner and a business contact recorded for every tier one and tier two table.
                2. A backup person named for each tier one owner.
                3. Owners stored in the same place as the tier, so alerts can look them up.
                4. Each owner has confirmed in writing that they accept the role.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tier one and tier two table lists a technical owner, business contact and backup, each of whom has accepted the role."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the tier one and tier two tables with no clear owner today"
                - "Propose an owner for each and ask their manager to confirm"
                - "Record owner, backup and business contact in table metadata"
                - "Check owners and backups are still in post after team changes @recurring(quarterly)"
            - name: Quality expectations gathered from data consumers
              description: |-
                ## Purpose
                Engineers tend to test what is easy, such as nulls and primary keys, while consumers get hurt by late loads, missing regions and silently changed filters. Twenty-minute conversations with five or six heavy users of tier one data reveal what they check by eye before trusting a number, and those habits are the checks worth automating first.

                ## Milestones
                1. Five or six consumers interviewed across finance, operations, product and customer teams.
                2. A list of the manual checks each one runs before trusting a report.
                3. Past data problems they remember, with roughly when and how they found out.
                4. A ranked list of expectations turned into candidate automated checks, each tied to a table.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Notes from at least five consumer interviews are summarised into a ranked list of candidate checks, each tied to a named table."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick five heavy users of tier one data from different teams"
                - "Ask each what they check by eye before trusting a number"
                - "Record the past data problems they remember and how they spotted them"
                - "Ask the agent to group the interview notes into ranked candidate checks"
            - name: Freshness and completeness targets per tier
              description: |-
                ## Purpose
                Consumers who ask whether data is fresh usually mean something specific: yesterday's orders are in by 7am, or every store has reported before the morning meeting. Turning that into a written target per tier, such as tier one fresh within two hours of its schedule with 99.5 percent of expected rows present, gives checks a threshold and incidents a definition.

                ## Milestones
                1. A freshness target per tier, stated as a clock time or a maximum lag.
                2. A completeness target per tier, stated as expected rows, partitions or source units present.
                3. Targets for each tier one table agreed with its business contact.
                4. Targets published where consumers can read them.

                ## Notes
                Tie freshness to when people use the data, not to how often the pipeline could run. An hourly target on a table read once a day only buys alerts.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each tier has written freshness and completeness targets, and every tier one table's targets are agreed with its business contact and published."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask each tier one business contact when they first need the data each day"
                - "Write freshness and completeness targets for each tier"
                - "Publish the targets on the data team's shared page"
                - "Review the targets with consumers early in the year @recurring(yearly)"
            - name: Baseline quality audit of the ten most used tables
              description: |-
                ## Purpose
                Before writing a single new check, measure where things stand. Profiling the ten most used tables for duplicate keys, null rates in important columns, stale partitions and orphaned foreign keys usually turns up a handful of long-standing problems that explain old complaints, and it gives the scorecard a starting point to improve from.

                ## Milestones
                1. Row counts, duplicate key counts and null rates profiled for each of the ten tables.
                2. Freshness of the latest partition or timestamp recorded per table.
                3. Orphaned foreign keys counted against the main dimension tables.
                4. A short findings note ranking the problems by consumer impact.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated baseline note covers duplicates, nulls, freshness and orphaned keys for ten named tables, with problems ranked by impact."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the ten most queried tables from the usage export"
                - "Count duplicate keys and null rates in each table's important columns"
                - "Check for orphaned foreign keys against the customer and product tables"
                - "Write a one-page findings note ranked by consumer impact"
            - name: Choosing a data quality testing tool
              description: |-
                ## Purpose
                Options range from tests inside the transformation framework, to open-source validation libraries, to commercial observability platforms that profile tables automatically. Comparing two or three against your warehouse, your team's skills, alert routing needs and budget avoids buying a platform nobody configures or building a framework nobody maintains.

                ## Milestones
                1. Requirements written: warehouse support, check types, alert routing, results history and a cost ceiling.
                2. Two or three options shortlisted, including at least one already available in your stack.
                3. A two-week trial of each shortlisted option on the same three tier one tables.
                4. A recorded decision with cost, owner and the reasons the others lost.

                ## Notes
                Start from the **Purchase decision** template. The tests your transformation framework already runs are often enough for the first year; buy when the gap is clear.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written tool decision compares at least two options trialled on the same tier one tables, with annual cost and an owner named."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write requirements for check types, alert routing and results history"
                - "Shortlist two or three tools, including one already in your stack"
                - "Trial each option on the same three tier one tables"
                - "Record the decision, cost and owner on the purchase decision page"
            - name: Failed check alerts routed to the owning team
              description: |-
                ## Purpose
                A failing check is useless if the alert lands in an inbox nobody reads or a channel muted months ago. Routing each failure by tier and owner, with the table name, the check, the failing value and a link to the query in the message, means the right person can start fixing within minutes instead of hearing about it from a stakeholder.

                ## Milestones
                1. Alerts for each owning team delivered to that team's chat channel or paging tool.
                2. Every alert message showing table, check, observed value, threshold and a link to the failing rows.
                3. Tier one failures paging an on-call person, with tier two and three posting without a page.
                4. A deliberately failed test check confirmed end to end on each route.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deliberate test failure for each owning team produced an alert in the correct channel with table, check, value and link."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every owning team and the channel or pager each one watches"
                - "Map tiers to routes: page for tier one, post for tiers two and three"
                - "Add table, check, observed value and query link to the alert message"
                - "Force one test check per team to fail and confirm the alert arrives"
            - name: Severity scale for data quality failures
              description: |-
                ## Purpose
                Not every failed check is an incident. A severity scale from one to four, based on tier, how many consumers are affected and whether wrong numbers have already left the building, tells the person on call whether to fix it now, fix it today or log it for the backlog, and stops minor failures drowning out serious ones.

                ## Milestones
                1. Four severity levels written with a definition and one example each.
                2. Response expectations per level: who is told, how fast and whether consumers are notified.
                3. A rule for raising severity when bad data has reached an external report or a customer.
                4. The scale tested by grading the last five incidents.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written four-level severity scale with response times has been applied to five past incidents and agreed by the data lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft four severity levels with a definition and example for each"
                - "Write the response time and notification rule for each level"
                - "Grade the last five data incidents against the draft scale"
                - "Adjust the wording wherever the grading felt wrong"
            - name: Data incident log with root cause fields
              description: |-
                ## Purpose
                Incidents fixed in chat and then forgotten will happen again, usually to someone else on the team. A structured log with fields for detection time, how it was found, affected tables, severity, root cause category and the follow-up fix turns one-off firefighting into a record you can count, search and learn from.

                ## Milestones
                1. A log with start, detection and resolution times, severity, and tables and consumers affected.
                2. A fixed list of root cause categories, such as source change, code change, late load, bad input and check gap.
                3. A field recording whether a check caught the problem or a person reported it.
                4. The last three months of known incidents back-filled into the log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An incident log with defined root cause categories exists and holds at least three months of back-filled incidents."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the log with time, severity, impact and root cause fields"
                - "Write a short list of root cause categories with an example each"
                - "Add a field for whether a check or a person found the issue"
                - "Back-fill incidents from the last three months of chat threads"
            - name: Morning triage of failed quality checks
              description: |-
                ## Purpose
                Overnight loads produce most failures, and the first hour of the working day decides whether consumers ever notice them. A fifteen-minute triage each morning, sorting every failed check into fix now, ticket, or known and accepted, keeps the failure list short and means nothing sits red for a week because everyone assumed someone else had it.

                ## Milestones
                1. A fixed morning slot and a named person for each day.
                2. Every failure from the last run sorted into fix now, ticket or accepted.
                3. Fix-now items started before the main consumer meetings of the day.
                4. No failed tier one check left untriaged for more than one working day across a month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over four consecutive weeks, every failed tier one check was triaged within one working day and its outcome recorded."
                cadence: rolling
              tasks:
                - "Pick the morning time by which overnight loads have finished"
                - "Sort every failed check into fix now, ticket or accepted @recurring(daily)"
                - "Post a two-line triage summary in the team channel"
                - "Open a ticket for each failure that cannot be fixed the same day"
            - name: Weekly alert noise review
              description: |-
                ## Purpose
                Teams stop reading alerts long before they stop sending them. Looking every week at which checks fired, which were acted on and which were ignored shows the noisy few, usually five or six checks producing most of the volume, and each one gets a decision: fix the data, fix the threshold or delete the check.

                ## Milestones
                1. A weekly count of alerts by check, with how many led to action.
                2. The five noisiest checks each given a decision: fix data, adjust threshold or remove.
                3. Alert volume per week tracked over eight weeks.
                4. The share of alerts that led to action above half.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of alert counts are recorded, with a decision logged for every check that fired more than three times in a week without action."
                cadence: rolling
              tasks:
                - "Export last week's alerts grouped by check and table"
                - "Mark which alerts led to a fix and which were ignored"
                - "Decide fix, retune or remove for the five noisiest checks @recurring(weekly:wed)"
                - "Track weekly alert volume and the share acted on"
            - name: Monthly data incident root cause review
              description: |-
                ## Purpose
                Individual incidents feel random; a month of them rarely is. Reviewing the incident log once a month, grouping by root cause category and looking for the same table, source or code path turning up again, is how a team finds the one upstream fix that prevents the next five incidents.

                ## Milestones
                1. A monthly review slot with the data lead and the people who handled incidents.
                2. The month's incidents grouped by root cause category with counts.
                3. Repeat offenders named: the same table, source or job appearing more than once.
                4. One prevention action each month, assigned with an owner and a due month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews are held, each recording incident counts by cause and at least one assigned prevention action."
                cadence: rolling
              tasks:
                - "Book a recurring hour with everyone who handled incidents"
                - "Group the month's incidents by root cause category @recurring(monthly:12)"
                - "Name any table or source that appeared in more than one incident"
                - "Assign one prevention action with an owner and a due month"
            - name: Monthly data quality scorecard
              description: |-
                ## Purpose
                Leaders who never see quality numbers only hear about quality when something breaks. A one-page monthly scorecard showing tier one checks passing, freshness targets met, incidents by severity and mean time to detect gives the team a record of improvement and a reason to fund the next fix.

                ## Milestones
                1. Five scorecard measures defined, each with a formula.
                2. The first month's numbers calculated from check results and the incident log.
                3. The scorecard shared with the data lead and tier one business contacts.
                4. Six months of scorecards showing a trend.

                ## Notes
                Start from the **Metrics log** template. Report time to detect as well as time to resolve: an incident a consumer found first is a monitoring gap.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly scorecards are published, each with pass rate, freshness target hits, incidents by severity and time to detect."
                cadence: rolling
              tasks:
                - "Define the five scorecard measures and how each is calculated"
                - "Create the scorecard page from the metrics log template"
                - "Calculate and publish last month's scorecard @recurring(monthly:4)"
                - "Send the scorecard link to tier one business contacts"
            - name: Quarterly test coverage review of tier one tables
              description: |-
                ## Purpose
                Tables change faster than their tests: new columns arrive, joins are added, and checks written two years ago guard columns nobody uses. A quarterly pass over each tier one table, comparing its checks with the quality dimensions and with last quarter's incidents, closes the gaps before the next incident finds them.

                ## Milestones
                1. A coverage grid showing each tier one table against freshness, volume, uniqueness, completeness, validity and consistency.
                2. Gaps exposed by last quarter's incidents filled with new checks.
                3. Checks on dropped or unused columns removed.
                4. Every applicable dimension covered on every tier one table.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated coverage grid for every tier one table exists for each of the last two quarters, with gaps closed or ticketed."
                cadence: rolling
              tasks:
                - "Build a coverage grid of tier one tables against the six dimensions"
                - "Mark which recent incidents no existing check would have caught"
                - "Fill coverage gaps and remove checks on dropped columns @recurring(quarterly)"
            - name: Data quality on-call rota and handover
              description: |-
                ## Purpose
                Without a rota, the most conscientious engineer ends up fixing every data problem and eventually burns out. A weekly rota with a clear handover note covering open incidents, flaky checks and anything expected to break spreads the load, and means a failure on Friday night has a named person rather than a hopeful message.

                ## Milestones
                1. A rota covering every working week of the next quarter, with swaps allowed.
                2. On-call duties written: hours covered, response times by severity and the escalation path.
                3. A handover note used at every change of shift.
                4. Out-of-hours expectations agreed and, where relevant, compensated in line with company policy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A published rota covers the next twelve weeks, and a written handover note exists for every change of on-call in the last month."
                cadence: rolling
              tasks:
                - "Write what on-call covers: hours, response times and escalation"
                - "Publish a rota for the next twelve weeks"
                - "Write the handover note and brief the next person on call @recurring(weekly:mon)"
                - "Agree out-of-hours rules with the data lead and HR"
            - name: Data status notices for downstream consumers
              description: |-
                ## Purpose
                Consumers forgive late or wrong data far more readily than finding out about it from a board member. A simple status page or pinned channel post, stating which datasets are affected, what is wrong, what not to use and when the next update comes, stops analysts shipping bad numbers while the fix is under way.

                ## Milestones
                1. One agreed place where data status notices are posted.
                2. A notice format covering affected tables and dashboards, what is wrong, what to avoid and the next update time.
                3. A notice posted for every severity one and two incident.
                4. Each notice closed with a resolution message and any restated figures.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every severity one and two incident in the last quarter has a posted status notice and a closing resolution message."
                cadence: rolling
              tasks:
                - "Choose one channel or page for data status notices"
                - "Write a notice format covering impact, what to avoid and next update time"
                - "Post a notice within an hour of any severity one or two incident"
                - "Check that every open notice has a closing message @recurring(monthly:26)"
            - name: Quarterly threshold recalibration
              description: |-
                ## Purpose
                Thresholds set at launch drift out of date as the business grows: a row count range that fitted 50,000 orders a day fires constantly at 80,000. Revisiting volume, null rate and range thresholds each quarter against the last ninety days of results keeps checks sensitive to real problems instead of to growth.

                ## Milestones
                1. A list of checks with static thresholds and when each was last set.
                2. Ninety days of observed values pulled for each one.
                3. Thresholds updated, with the reason recorded in the commit or change log.
                4. Fewer false alarms in the following month than in the month before.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every static threshold on a tier one table has been reviewed against ninety days of results within the last quarter, with changes logged."
                cadence: cyclic
              tasks:
                - "List checks with fixed thresholds and the date each was set"
                - "Pull ninety days of observed values for each threshold @recurring(quarterly)"
                - "Update thresholds and record the reason in the commit message"
            - name: Quarantined record review with source teams
              description: |-
                ## Purpose
                Records rejected by validation, such as a missing customer ID or an impossible date, do not go away by sitting in a quarantine table. A monthly look at what was held back, how much of it there is and which source produced it gives source teams evidence to fix entry screens or integrations, and stops quarantine turning into silent data loss.

                ## Milestones
                1. A monthly count of quarantined records by table, rule and source.
                2. The top three rejection reasons shared with the owning source team.
                3. A decision for each held batch: fix and release, correct at source, or discard with sign-off.
                4. Quarantine volume trending down over six months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly quarantine reviews are held, each with counts by rule and source and a recorded decision for every held batch."
                cadence: rolling
              tasks:
                - "Write a query counting quarantined records by table, rule and source"
                - "Review quarantine counts and decide on each held batch @recurring(monthly:19)"
                - "Send the top three rejection reasons to the owning source team"
            - name: Data entry quality feedback to operational teams
              description: |-
                ## Purpose
                Many data quality problems start with a person typing into a CRM, a point-of-sale screen or a support tool: free-text countries, duplicate accounts, placeholder emails. Sending each operational team a short monthly note of their entry errors, with examples and the downstream report each one broke, fixes more than any check in the warehouse can.

                ## Milestones
                1. Three entry-quality measures defined per source tool, such as duplicate accounts created or required fields left as placeholders.
                2. A named contact in each operational team who receives the note.
                3. A monthly note with counts, five examples and one suggested fix.
                4. At least one entry screen or validation change made by an operational team.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Operational teams for two source tools have received three consecutive monthly entry-quality notes, and one form or validation change has been made."
                cadence: rolling
              tasks:
                - "Pick the two source tools whose entry errors cause the most incidents"
                - "Define three entry-quality measures for each tool"
                - "Send each team its counts, examples and one suggested fix @recurring(monthly:23)"
                - "Ask the tool admin about adding a required field or picklist"
            - name: Freshness checks that respect load schedules
              description: |-
                ## Purpose
                Freshness looks simple until a table loads only on weekdays, a source pauses over public holidays or a partner file lands at any time between midnight and six. Learning to check the right timestamp, load time versus business event time, and to allow for schedules prevents the classic Monday morning flood of false stale alerts.

                ## Milestones
                1. The difference between load time and event time written down for three tier one tables.
                2. A freshness check per table using the right timestamp and a schedule-aware threshold.
                3. Weekend and holiday behaviour handled without manual muting.
                4. Each check confirmed to fire when a test load is deliberately skipped.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three tier one tables have schedule-aware freshness checks that fired correctly when a load was deliberately skipped in a test environment."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Note the load and event timestamp columns for three tier one tables"
                - "Write the expected load schedule for each, including weekends"
                - "Build a freshness check that allows for that schedule"
                - "Skip a test load and confirm the check fires"
            - name: Volume checks with weekday and seasonal baselines
              description: |-
                ## Purpose
                A row count check with a fixed minimum misses a load that arrives half empty on a busy day and fires on every quiet Sunday. Comparing today's volume with the same weekday over recent weeks, or with an expected count from the source, catches partial loads and silent filters while staying quiet through normal weekly and seasonal swings.

                ## Milestones
                1. Daily row counts for three tier one tables plotted over the last ninety days.
                2. The weekly pattern and any month-end or seasonal peaks described.
                3. A volume check per table that compares with its same-weekday baseline.
                4. Each check back-tested on ninety days of history, with the expected alert rate recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three tables have weekday-aware volume checks back-tested on ninety days of history, with the expected alert rate recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Plot ninety days of daily row counts for three tier one tables"
                - "Describe the weekly pattern and any month-end peaks"
                - "Write a volume check comparing with the same-weekday baseline"
                - "Back-test the check and count how often it would have fired"
            - name: Duplicate detection beyond the primary key
              description: |-
                ## Purpose
                Tables can pass their unique key test and still double-count revenue, because the same order arrived twice with two different surrogate keys or a join fanned out. Testing uniqueness on the business key, the natural combination such as order number plus line number, and checking row counts either side of joins catches the duplicates that actually inflate numbers.

                ## Milestones
                1. The business key, not just the surrogate key, written down for five tier one tables.
                2. Uniqueness tests running on each business key.
                3. Row count checks around the two joins most likely to fan out.
                4. One historical duplication incident traced to the test that would now catch it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five tier one tables have business key uniqueness tests, and the two most fan-out prone joins have row count checks on both sides."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the business key for five tier one tables"
                - "Add a uniqueness test on each business key"
                - "Add row count checks either side of the two riskiest joins"
                - "Find one past duplicate incident and confirm a new test would catch it"
            - name: Column completeness and null rate thresholds
              description: |-
                ## Purpose
                Some nulls are perfectly correct: a cancellation date should be empty for active orders, while a missing country on a customer row breaks every regional report. Setting completeness rules per column, conditional where needed and as a rate rather than all or nothing, turns null checks from noise into a measure consumers recognise.

                ## Milestones
                1. The twenty most used columns on tier one tables classed as required, conditionally required or optional.
                2. Conditional rules written for the conditionally required columns.
                3. A null rate threshold for each required column, based on its current rate.
                4. Checks deployed and their first month of results reviewed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty heavily used columns carry a recorded completeness class, with rate-based or conditional checks that have run for a month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the twenty most queried columns on tier one tables"
                - "Class each one as required, conditional or optional"
                - "Measure the current null rate for every required column"
                - "Deploy rate-based null checks and review the first month"
            - name: Validity rules for formats, ranges and accepted values
              description: |-
                ## Purpose
                Negative quantities, birth dates in 1900, currency codes nobody recognises and email addresses with no at sign all pass a not-null test. Validity checks for format, range and accepted values encode what the business knows to be possible, and they are the checks consumers most often wish had existed after an incident.

                ## Milestones
                1. Validity rules drafted for ten columns with the business contact for each table.
                2. Accepted value lists kept in a reference table or seed file rather than hard-coded.
                3. Range limits taken from the business, not from today's data.
                4. Checks running, with failures routed to the table owner.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten columns have validity checks agreed with a business contact, with accepted values stored in a maintained reference table."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick ten columns where an impossible value would mislead a report"
                - "Agree valid ranges and formats with each table's business contact"
                - "Store accepted value lists in a reference table"
                - "Deploy the checks and route failures to the table owner"
            - name: Automated source-to-warehouse reconciliation tests
              description: |-
                ## Purpose
                Every check inside the warehouse can pass while the warehouse disagrees with the source system, because a filter dropped a region or a sync missed deleted rows. Reconciliation tests compare counts and totals, such as orders and order value by day, between the source and the modelled table, and they are the strongest evidence that the data is complete.

                ## Milestones
                1. Three reconciliation pairs chosen, each a source total and its warehouse equivalent.
                2. An agreed tolerance for each pair, allowing for timing and known exclusions.
                3. Automated comparisons running daily, with results stored.
                4. The first discrepancy found explained and documented.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three daily automated reconciliations between source and warehouse are running with agreed tolerances and stored results."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose three totals that both the source and the warehouse can produce"
                - "Agree a tolerance for timing differences and known exclusions"
                - "Schedule the comparisons and store each day's result"
                - "Explain and document the first discrepancy the tests find"
            - name: Blameless root cause analysis for data incidents
              description: |-
                ## Purpose
                Root cause write-ups that stop at someone ran the wrong job teach nothing and make people hide mistakes. Learning a blameless method, built on a timeline, contributing factors and the question of why the system allowed it, produces fixes to checks, code review and processes rather than reminders to be careful.

                ## Milestones
                1. A blameless review method chosen and its rules written on one page.
                2. A review format with timeline, impact, contributing factors and actions.
                3. Two past incidents written up using the method.
                4. Actions from those reviews changing a check, a process or a guard rail rather than a person.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two incidents have written blameless reviews with timelines, contributing factors and at least one systemic action each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short guide to blameless post-incident reviews"
                - "Write a one-page review format for data incidents"
                - "Write up two recent incidents using the format"
                - "Check each action changes a system rather than asking someone to be careful"
            - name: Working out the blast radius of a broken table
              description: |-
                ## Purpose
                When a table goes bad, the first questions from leadership are what is affected and whether anything wrong has already gone out. Tracing downstream models, dashboards, scheduled exports and reverse syncs from the broken table, using lineage where it exists and query logs where it does not, lets you answer in minutes and scope the status notice correctly.

                ## Milestones
                1. Downstream models, dashboards, exports and syncs traced for one tier one table.
                2. Query logs used to find consumers lineage does not show, such as ad hoc notebooks.
                3. A short blast radius checklist written for the on-call person.
                4. The checklist used in one real or practice incident.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written blast radius checklist exists and has been used to scope one real or practice incident within thirty minutes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Trace every downstream use of one tier one table"
                - "Search query logs for consumers the lineage graph misses"
                - "Write a blast radius checklist for the on-call person"
                - "Run the checklist on the next incident or a practice scenario"
            - name: Write, audit, publish for tier one tables
              description: |-
                ## Purpose
                Most checks run after data is already live, so consumers can query bad rows for hours before anyone reacts. Building into a staging copy, running the tier one checks there and only then swapping it into production means a failed check holds yesterday's good data in place instead of publishing today's broken data.

                ## Milestones
                1. One tier one table built into a staging location and swapped in only after its checks pass.
                2. Consumers seeing the previous good version, clearly labelled, when checks fail.
                3. The pattern applied to every tier one table.
                4. The freshness and cost impact measured and accepted by the data lead.

                ## Notes
                Your warehouse's zero-copy clone, branch or table swap feature usually makes the publish step cheap. Check how it handles permissions and grants before relying on it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tier one table builds to staging and publishes only when its checks pass, with one failed run shown to have held back bad data."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose the first tier one table and the warehouse swap feature to use"
                - "Build the table into staging and run its checks there"
                - "Publish by swap only when every blocking check passes"
                - "Roll the pattern out to the remaining tier one tables"
            - name: Circuit breakers that stop bad loads reaching dashboards
              description: |-
                ## Purpose
                Where full staged publishing is too much work, a circuit breaker still helps: a blocking check that halts downstream jobs when a source load is empty, doubled or far outside its normal range. Choosing which checks block and which only warn is the real decision, because a breaker that trips on minor issues is quickly switched off.

                ## Milestones
                1. A written rule for which checks block downstream jobs and which only warn.
                2. Blocking checks on the three loads whose failures caused the worst incidents.
                3. Downstream jobs halting automatically when a blocking check fails, with an alert explaining why.
                4. A manual override documented, including who may use it.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three high-risk loads have blocking checks that halted downstream jobs in a test, and the override procedure is documented."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the rule for which checks block and which only warn"
                - "Pick the three loads behind the worst past incidents"
                - "Configure blocking checks that halt their downstream jobs"
                - "Document who may override a tripped breaker and how"
            - name: Quarantine tables for rejected records
              description: |-
                ## Purpose
                Failing a whole load because 40 rows out of two million are invalid punishes every consumer for a few bad records. Routing rows that fail validation into a quarantine table, with the rule they broke and the load they came from, lets the good rows flow on time while the bad ones wait for a decision.

                ## Milestones
                1. A quarantine table design holding the original row, failed rule, load ID and timestamp.
                2. Row-level rules on one tier one table routing failures to quarantine.
                3. A threshold above which the whole load fails instead, because that much bad data signals a bigger problem.
                4. Quarantine counts feeding the monthly quarantine review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One tier one table routes invalid rows to a quarantine table with rule and load recorded, and fails the load above an agreed share."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Design the quarantine table with row, rule, load and time columns"
                - "Route rows failing validation on one tier one table into quarantine"
                - "Set the share of bad rows that fails the whole load"
                - "Add quarantine counts to the monthly review query"
            - name: Halving the volume of noisy alerts
              description: |-
                ## Purpose
                When a channel shows forty data alerts a day, the one that matters gets scrolled past. A focused effort to cut alert volume by half, by grouping related failures, removing duplicate checks, moving warnings to a daily digest and fixing the chronically failing tables, restores the signal that the whole monitoring effort depends on.

                ## Milestones
                1. A baseline of daily alert volume and the share acted on.
                2. Related failures grouped into one alert per table or load.
                3. Warning-level checks moved to a daily digest instead of instant messages.
                4. Daily alert volume down by at least half, with no rise in missed incidents.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Daily alert volume over four weeks is at least 50 percent below the baseline, with no increase in consumer-reported incidents."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Record four weeks of daily alert counts as a baseline"
                - "Group failures on the same table or load into one alert"
                - "Move warning-level checks into a daily digest"
                - "Fix or remove the three checks that fail most often"
            - name: Rule-based checks or automated profiling monitors
              description: |-
                ## Purpose
                Hand-written rules catch exactly what someone thought of; machine-learned monitors on volume, freshness and distributions catch surprises but raise more questions about why they fired. Deciding the mix for your estate, for example rules for tier one business logic and automated monitors for broad tier two coverage, prevents both blind spots and alert floods.

                ## Milestones
                1. The current split between hand-written rules and automated monitors counted.
                2. Five past incidents classified by which approach would have caught them.
                3. A written policy for which tiers and check types use each approach.
                4. The cost and likely alert volume of automated monitors estimated before switching them on widely.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written policy states where rules and automated monitors apply, backed by an analysis of five past incidents."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count current checks by type: hand-written rule or automated monitor"
                - "Classify five past incidents by which approach would have caught them"
                - "Write the policy for each tier and check type"
                - "Estimate the cost of automated monitors across tier two tables"
            - name: Data diffs on pull requests before merge
              description: |-
                ## Purpose
                Many incidents begin with an innocent code change: a reworded filter or a changed join that shifts a total by 3 percent. Comparing the changed model's output with production before merge, covering row counts, key matches and column value changes, shows reviewers the data effect of a change rather than just the code.

                ## Milestones
                1. A data diff run for every pull request that touches a tier one model.
                2. Diff summaries posted on the pull request: rows added, removed and changed, by column.
                3. A reviewer rule for when an unexpected diff blocks the merge.
                4. One change caught by a diff and recorded in the incident log as prevented.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every pull request touching a tier one model shows an automated data diff summary, and one prevented issue has been recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick a data diff tool or write a comparison query for tier one models"
                - "Run the diff automatically on pull requests touching tier one models"
                - "Post the summary of changed rows and columns on the pull request"
                - "Write the rule for when an unexpected diff blocks the merge"
            - name: Check results history table in the warehouse
              description: |-
                ## Purpose
                Testing tools often keep only the latest result, so questions like how often this check failed this year, or which tables fail most, need guesswork. Storing every check run with table, check, status, observed value and timestamp in a warehouse table makes the scorecard, threshold recalibration and noise review simple queries.

                ## Milestones
                1. A results table with run time, table, check, status, observed value and threshold.
                2. Every scheduled check writing its result there.
                3. Twelve months of retention agreed.
                4. The scorecard and noise review queries reading from the table.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All scheduled checks write results to a warehouse table, and the monthly scorecard is calculated from it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Design the results table columns and retention period"
                - "Configure every scheduled check to write its result to the table"
                - "Rewrite the scorecard query to read from the results table"
                - "Ask the agent to draft a query listing the ten most often failed checks"
            - name: Eliminating the most frequent incident cause
              description: |-
                ## Purpose
                After three or four months of incident reviews, one root cause usually stands out: an unannounced source schema change, a late partner file, a fragile manual upload. Treating it as a project with a clear goal, such as no incidents from this cause for a quarter, rather than as another monthly action, is how the incident count actually falls.

                ## Milestones
                1. The top root cause by incident count named from the log.
                2. A remediation plan with two or three changes, an owner and dates.
                3. The changes delivered, such as an agreement with the source team, an automated check or a removed manual step.
                4. No incidents from that cause for the following ninety days.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The most frequent root cause has a delivered remediation plan and no incident from that cause in the following ninety days."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Count incidents by root cause over the last four months"
                - "Write a remediation plan for the top cause with owners and dates"
                - "Deliver the first change in the plan"
                - "Check the log for repeat incidents ninety days after the last change"
            - name: Go-live of the first tier one quality targets
              description: |-
                ## Purpose
                Publishing freshness and completeness targets is a commitment, so it deserves a launch: checks in place, alerts tested, on-call ready and consumers told what they can now expect. A dated go-live for the tier one set, announced to business contacts, turns quality from a background effort into a service the team is measured on.

                ## Milestones
                1. Checks, alerts and owners in place for every tier one table.
                2. A two-week dry run with targets measured but not yet published.
                3. A go-live announcement sent to tier one business contacts with the targets and the status channel.
                4. The first month's performance against targets reported.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Tier one targets went live with a dated announcement after a two-week dry run, and the first month's results were reported."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm checks, alerts and owners exist for every tier one table"
                - "Run a two-week dry run measuring targets without publishing them"
                - "Send the go-live note with the targets and the status channel"
                - "Report the first month's results against the targets"
            - name: Quality watch through a source system migration
              description: |-
                ## Purpose
                Replacing a CRM, billing system or ERP is the most likely time for data to go quietly wrong: fields map differently, IDs change and history is reloaded. Planning quality checks for the migration, with reconciliations between old and new, ID mapping checks and a heightened watch for four weeks after cutover, catches problems while the migration team is still assembled.

                ## Milestones
                1. Field and ID mapping between old and new systems documented for tier one tables.
                2. Reconciliation checks comparing old and new system totals during parallel running.
                3. A daily quality watch scheduled for the four weeks after cutover.
                4. Sign-off from business contacts that key reports match within an agreed tolerance.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Reconciliations ran through parallel running and four weeks after cutover, ending with written business sign-off that key reports match."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Get the field and ID mapping from the migration team"
                - "Build reconciliations comparing old and new system totals"
                - "Schedule a daily quality watch for four weeks after cutover"
                - "Ask business contacts to sign off key reports after the watch"
            - name: Quarter-end close data quality watch
              description: |-
                ## Purpose
                The last days of a quarter are when finance, sales and leadership lean hardest on the warehouse, and when a late load or duplicated invoice costs most. A planned watch with extra checks on revenue and billing tables, doubled on-call cover and a daily reconciliation with finance makes close week the quietest week of the quarter rather than the busiest.

                ## Milestones
                1. Close-week checks added for revenue, bookings, invoice and payment tables.
                2. A second on-call person covering the close window.
                3. A daily reconciliation with the finance contact throughout close.
                4. A short note after close on what broke and what to add next quarter.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The last two quarter closes each had a written watch plan, daily finance reconciliation and a post-close note."
                cadence: cyclic
              tasks:
                - "Agree the close window dates with the finance contact @recurring(quarterly)"
                - "Add extra checks on revenue, invoice and payment tables for the window"
                - "Arrange a second on-call person for the close window"
                - "Write a short post-close note on anything that broke"
            - name: Data incident fire drill
              description: |-
                ## Purpose
                Runbooks and alert routes fail in practice for small reasons: a paging app nobody installed, a status channel without permissions, an owner who has left. Breaking a staged table on purpose and timing the response, from alert to triage to status notice to fix, finds those gaps in a calm hour instead of a real incident.

                ## Milestones
                1. A drill scenario written, such as a duplicated load into a staging copy of a tier one table.
                2. The drill run without telling the on-call person the scenario in advance.
                3. Times recorded for detection, triage, first status notice and fix.
                4. Three improvements from the drill assigned and completed.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A drill on a staged tier one table was run and timed, and three resulting improvements were completed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a drill scenario using a staging copy of a tier one table"
                - "Run the drill without telling the on-call person the scenario"
                - "Record the time to detect, triage, notify and fix"
                - "Assign three improvements from what the drill exposed"
            - name: Quality gate before a new data product launches
              description: |-
                ## Purpose
                New tables, dashboards and data-driven features tend to launch with checks promised for later. A short quality gate before launch, with an owner named, a tier set, checks for each applicable dimension, alerts tested and a status channel known, makes monitoring part of the definition of done rather than a follow-up nobody schedules.

                ## Milestones
                1. A one-page quality launch checklist for new data products.
                2. The checklist applied to the next new tier one or tier two dataset before release.
                3. The launch held back if any blocking item is missing.
                4. The checklist added to the team's definition of done.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The next new tier one or tier two dataset launched only after passing a written quality checklist, which is now part of the definition of done."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a one-page quality launch checklist from the template"
                - "Apply it to the next new dataset before release"
                - "Hold the launch if any blocking item is missing"
                - "Add the checklist to the team's definition of done"
            - name: Annual data quality review with leadership
              description: |-
                ## Purpose
                Once a year, quality deserves an hour with the people who fund the data team. Presenting twelve months of scorecards, the worst incidents and what they cost, what was fixed and what remains risky turns monitoring from an invisible cost into a decision about where to invest next year.

                ## Milestones
                1. Twelve months of scorecard results summarised on one page.
                2. The three most costly incidents described with their business impact.
                3. Next year's quality priorities proposed with effort estimates.
                4. Leadership's decisions on priorities and resourcing recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual review meeting was held with leadership, and its decisions on quality priorities and resourcing were recorded."
                cadence: cyclic
              tasks:
                - "Book the annual quality review with the data team's sponsor @recurring(yearly)"
                - "Summarise twelve months of scorecards on one page"
                - "Describe the three costliest incidents and their business impact"
                - "Record leadership's decisions on next year's priorities"
            - name: Data quality for a data team of one or two
              description: |-
                ## Purpose
                Solo analytics engineers cannot run a rota, a scorecard and weekly reviews alongside building everything else. A cut-down setup, with checks on the five tables that matter most, alerts to one channel and a weekly hour to clear failures, gives real protection for about two hours a week and leaves room to grow.

                ## Milestones
                1. The five most important tables chosen with the main stakeholder.
                2. Freshness, uniqueness and volume checks on each of the five.
                3. Only tier one failures alerting your phone; everything else waits for the weekly hour.
                4. A weekly quality hour kept for two months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Five key tables have freshness, uniqueness and volume checks, and a weekly quality hour has been kept for eight weeks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree the five most important tables with your main stakeholder"
                - "Add freshness, uniqueness and volume checks to each of the five"
                - "Route only tier one failures to your phone"
                - "Spend an hour clearing failures and tuning checks @recurring(weekly:fri)"
            - name: Inheriting a warehouse with no tests
              description: |-
                ## Purpose
                Joining a team, or taking over after someone leaves, often means hundreds of tables with no checks and a stakeholder list of known problems nobody wrote down. A ninety-day plan, first listening, then protecting the top ten tables, then building the operating routines, avoids both freezing up and spending a quarter testing tables nobody uses.

                ## Milestones
                1. Known data problems collected from stakeholders in the first two weeks.
                2. The ten most used tables protected with basic checks by day 45.
                3. Owners, tiers and alert routing set up for those ten tables.
                4. A written plan for the next quarter shared with your manager by day 90.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "By day 90, the ten most used tables have checks and owners, and a written next-quarter plan has been shared with your manager."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask five stakeholders which numbers they distrust and why"
                - "List the ten most used tables from query history"
                - "Protect those ten with the cheapest checks that would catch known problems"
                - "Share a next-quarter quality plan with your manager"
            - name: Suspected data issue guide for analysts
              description: |-
                ## Purpose
                Analysts and dashboard owners spot many problems first, but they report them as a vague message in a busy channel or quietly work around them. A short guide and form asking which table, which number, expected versus actual and how urgent gets issues into the triage queue with enough detail to act on, and tells reporters what will happen next.

                ## Milestones
                1. A one-page guide on how to report a suspected data issue.
                2. A short form or chat workflow capturing table, figure, expected value, actual value and urgency.
                3. Reports landing in the triage queue or incident log automatically.
                4. Every reporter told the outcome of their report within an agreed time.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A published reporting guide and form exist, and every report in the last month received a recorded response."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page guide to reporting a suspected data issue"
                - "Build a short form asking for table, figure, expected and actual values"
                - "Route form submissions into the triage queue"
                - "Introduce the guide at the analysts' next team meeting"
            - name: Onboarding an engineer onto data quality on-call
              description: |-
                ## Purpose
                Throwing a new engineer onto the rota with a link to the runbook makes their first incident stressful and slow. Two weeks of onboarding, shadowing a shift, walking through tiers and owners, fixing a real failed check with a buddy and handling a practice incident, means they can manage a severity two alone before their first solo week.

                ## Milestones
                1. An onboarding plan covering tiers, owners, tools, the severity scale and status notices.
                2. One full on-call shift shadowed.
                3. One real failed check fixed with a buddy reviewing.
                4. A practice incident handled from alert to status notice before the first solo shift.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The new engineer shadowed a shift, fixed a real failure and handled a practice incident before taking a solo on-call week."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Create the onboarding plan from the template"
                - "Schedule a shadow shift with the current on-call person"
                - "Pair on fixing one real failed check"
                - "Run a practice incident before the first solo week"
            - name: Quality controls for regulated or audited reporting
              description: |-
                ## Purpose
                Where warehouse data feeds regulatory returns, audited financial figures or customer billing, auditors will ask how you know the numbers are complete and accurate, and they want evidence rather than assurances. Documenting the controls, which checks run, who reviews failures and where results are kept, turns existing monitoring into something an auditor can test.

                ## Milestones
                1. Tables feeding regulated or audited outputs identified with the compliance or finance lead.
                2. Each control written with its objective, frequency, owner and evidence location.
                3. Check results and failure reviews retained for the period your compliance lead specifies.
                4. One control walked through with internal audit or compliance as a test.

                ## Notes
                Start from the **Compliance control** template. Your compliance or finance lead decides what the regulator or auditor requires; this project organises the evidence.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every control on tables feeding regulated or audited outputs is documented with owner and evidence, and one has been walked through with compliance."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the tables that feed regulatory, audited or billing outputs"
                - "Write each control's objective, frequency, owner and evidence"
                - "Ask the compliance lead how long check results must be kept"
                - "Walk one control through with internal audit or compliance"
            - name: Data quality SLOs with error budgets
              description: |-
                ## Purpose
                Mature teams borrow from reliability engineering: a service level objective such as 99 percent of days with tier one data fresh by 7am, and an error budget that, once spent, moves the team from new work to reliability work. It gives a principled answer to the recurring argument between shipping features and fixing quality.

                ## Milestones
                1. SLOs written for freshness and pass rate on tier one datasets, measured over a rolling thirty days.
                2. The error budget calculated and visible on the scorecard.
                3. A written policy for what changes when the budget is spent.
                4. The policy applied at least once, with the decision recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Tier one datasets have written SLOs with a tracked error budget and a policy that has been applied at least once."
                cadence: rolling
              tasks:
                - "Write freshness and pass rate SLOs for tier one datasets"
                - "Calculate the rolling thirty-day error budget from check results"
                - "Agree with the data lead what happens when the budget is spent"
                - "Report the remaining error budget in the team meeting @recurring(monthly:15)"
            - name: Sampled accuracy audits against source records
              description: |-
                ## Purpose
                Automated checks prove data is fresh, complete and plausible, but not that it is correct: a wrongly mapped status can pass every test. Pulling a random sample of 50 records each quarter from a tier one table and comparing them field by field with the source system, or with customer documents, measures accuracy directly and finds mapping errors no rule anticipated.

                ## Milestones
                1. A sampling method written: table, sample size, fields compared and how records are drawn.
                2. The first audit completed, with an accuracy rate per field.
                3. Every mismatch explained and either fixed or accepted with a reason.
                4. Audits repeated each quarter, with results compared.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two quarterly sampled audits of at least 50 records each are complete, with field-level accuracy rates and every mismatch explained."
                cadence: cyclic
              tasks:
                - "Write the sampling method for one tier one table"
                - "Draw a random sample of 50 records and compare them with the source @recurring(quarterly)"
                - "Explain every mismatch and fix or accept it"
                - "Compare field accuracy with the previous quarter's audit"
            - name: Quality checks on product event tracking data
              description: |-
                ## Purpose
                Product event data breaks differently from database tables: a mobile release drops an event, a property changes type or a bot floods one page. Checks on event volume by platform and app version, required properties and unexpected new event names catch tracking breakages within a day rather than at the next quarterly product review.

                ## Milestones
                1. The twenty events behind key product metrics listed with their required properties.
                2. Volume checks by platform and app version for those events.
                3. Property type and required-field checks on each event.
                4. Alerts for new event names, or versions with sharp drops, routed to the tracking owner.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty key product events have volume, property and new-name checks, with failures routed to a named tracking owner."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the twenty events behind key product metrics"
                - "Add volume checks split by platform and app version"
                - "Check required properties and types on each event"
                - "Review new and vanished event names from the past month @recurring(monthly:9)"
---

# Data Quality Monitoring

This area is for data engineers and the teams around them who need to know, before anyone else does, when warehouse data is late, incomplete, duplicated or simply wrong. It starts with foundations (an inventory of critical datasets, impact tiers, owners, targets and alert routing), moves through the daily, weekly and monthly routines that keep checks meaningful and the testing techniques worth learning properly, then covers improvements such as staged publishing and quarantine tables, dated events like a quality go-live or a migration watch, team situations, and specialist work such as error budgets and sampled accuracy audits.

The rhythms are a morning triage of failed checks, a weekly alert noise review and on-call handover, monthly incident, scorecard, quarantine and data entry reviews, and quarterly coverage, threshold, close-week and accuracy checks. The Purchase decision, Metrics log, Remediation plan, Operational checklist, Onboarding plan and Compliance control templates pair with individual projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
