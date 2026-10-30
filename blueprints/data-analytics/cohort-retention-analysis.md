---
id: data-analytics.cohort-retention-analysis
name: Cohort Retention Analysis
description: "A clear retention question, an activity rule and cohort anchor, a first triangle and baseline, monthly refresh and review routines, segment and revenue cuts, and specialist methods from survival curves to layer cake forecasts."
category: business
version: 1.0.0
tags: [data-analytics, cohort-retention-analysis, knowledge-worker, founder, team, retention, cohorts, product-analytics]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - meeting-notes
    - purchase-decision
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cohort Retention Analysis
          description: "Grouping users or customers by start date or behaviour and tracking how many stay over time to see whether retention is improving."
          projects:
            - name: Writing the retention question before the first cohort table
              description: |-
                ## Purpose
                Retention work goes wrong when someone builds a cohort chart before anyone has said what decision it should inform. Writing down the one question, such as whether customers acquired since the onboarding redesign stay longer than those before it, fixes the cohort, the period and the activity definition before any SQL is written. It also tells you when the analysis is finished.

                ## Milestones
                1. A single retention question written in one sentence, with the decision it will inform.
                2. The audience for the answer named, with what they will do differently depending on the result.
                3. The cohort anchor, period length and activity definition listed as open choices to settle.
                4. The question agreed in writing by the person who asked for the analysis.

                ## Notes
                If two people want different questions answered, write both and pick one to do first. A cohort table that tries to answer everything usually answers nothing clearly.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-sentence retention question, its decision and its audience are written down and agreed by the requester before any cohort query exists."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the requester what decision the retention analysis should change"
                - "Write the retention question and the decision in one sentence each"
                - "List the open choices: anchor event, period length and activity definition"
                - "Get the requester to confirm the question in writing"
            - name: Defining an active user for retention purposes
              description: |-
                ## Purpose
                Whether a user counts as retained in month three depends entirely on what counts as active, and logging in, opening an email or receiving a push notification are not the same as using the product. Choosing the one core action that represents real value, such as sending an invoice, booking a lesson or placing an order, makes retention reflect behaviour customers chose. Done once and written down, it stops every new chart from inventing its own version.

                ## Milestones
                1. A list of three to five candidate activity events, each with its weekly volume.
                2. One core value action chosen, with passive events such as notifications and email opens excluded.
                3. The definition written as a single rule naming the events it depends on.
                4. Retention for the last six cohorts computed under the old and new definitions to show the difference.

                ## Notes
                Keep this definition specific to retention. If it needs to become a company-wide metric, hand it to whoever owns metric definitions rather than redefining it here.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written active-user rule naming the qualifying events is used by every cohort query, with old and new retention compared for six cohorts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every event that could count as activity with its weekly volume"
                - "Strike out passive events such as email opens and push deliveries"
                - "Choose the core value action and write the rule in one sentence"
                - "Compare six cohorts under the old and new activity rules"
            - name: Choosing the cohort anchor event and date
              description: |-
                ## Purpose
                Cohorting by signup date mixes people who never set up their account with those who became paying customers, while cohorting by first purchase or activation only counts the committed. Neither is wrong, but the choice changes every number on the chart. Picking the anchor deliberately, and stating the time zone and date grain, means month-one retention means the same thing to everyone reading it.

                ## Milestones
                1. Signup, activation and first payment compared as candidate anchors, with cohort sizes for each.
                2. One primary anchor chosen and a secondary one noted for specific questions.
                3. The time zone and date grain for assigning users to cohorts written down.
                4. Users with missing or impossible anchor dates counted and handled by a stated rule.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One primary cohort anchor event, a time zone and a date grain are recorded, with cohort sizes shown for each candidate anchor considered."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull last quarter's counts for signup, activation and first payment"
                - "Note how each anchor would change who enters a cohort"
                - "Choose the primary anchor and record the time zone used for dates"
                - "Count users whose anchor date is missing or falls before launch"
            - name: Matching the retention period to how often people use the product
              description: |-
                ## Purpose
                A meal kit used weekly, accounting software used monthly and a tax tool used once a year need different retention periods, and measuring a monthly habit in days makes healthy users look like they left. Looking at the natural gap between uses tells you whether to count by day, week or month. Get this right early and the curve stops showing false drops.

                ## Milestones
                1. The distribution of days between consecutive uses plotted for active users.
                2. The typical usage interval identified, such as the gap within which 80 percent of returns happen.
                3. A period length of day, week or month chosen to match it.
                4. The choice and its evidence written into the cohort definitions note.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A period length is chosen from a plotted distribution of gaps between uses, with the evidence recorded in the definitions note."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Query the days between consecutive uses for each active user"
                - "Plot the distribution and mark where most returns fall"
                - "Pick day, week or month as the retention period"
                - "Record the period and the chart in the definitions note"
            - name: User activity table for cohort analysis
              description: |-
                ## Purpose
                Cohort queries that scan raw event logs every time are slow, expensive and quietly inconsistent. A tidy table with one row per user per period, holding the cohort, the period number and whether the user was active, turns every later retention view into a simple group-by. Engineers and analysts both benefit, because the logic lives in one tested place.

                ## Milestones
                1. A table with one row per user per period, carrying user, cohort, period index and an active flag.
                2. The active-user rule and anchor event from the definitions note implemented exactly.
                3. Row counts reconciled against distinct active users in the source for three sample periods.
                4. The table refreshed on a schedule and documented with its grain and owner.

                ## Notes
                Keep users with no activity in a period as explicit rows with the flag set to false, or retention ends up calculated over survivors only.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scheduled user-period activity table exists, reconciles to source counts for three periods and is documented with its grain and owner."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Sketch the columns and grain of the user-period table"
                - "Write the transformation using the agreed anchor and activity rule"
                - "Reconcile three periods against distinct active users in the source"
                - "Schedule the refresh and document the grain and owner"
            - name: First monthly acquisition cohort triangle
              description: |-
                ## Purpose
                The cohort triangle, with one row per signup month and one column per month since signup, is the chart every retention conversation starts from. Building the first one from the activity table shows at a glance whether newer cohorts hold up better than older ones. Many teams find their first honest triangle very different from the single blended retention number they had been quoting.

                ## Milestones
                1. A triangle covering at least twelve monthly cohorts with the percentage retained in each cell.
                2. Cohort sizes shown beside each row so small cohorts are not over-read.
                3. Colour shading applied consistently so better and worse cells are easy to spot.
                4. Three plain observations written under the chart.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-cohort monthly retention triangle with cohort sizes and three written observations is shared with the team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Group the activity table by cohort month and months since start"
                - "Divide active users by cohort size to fill each cell"
                - "Add cohort sizes and consistent colour shading"
                - "Write three observations under the triangle and share it"
            - name: Retention curves for the whole customer base
              description: |-
                ## Purpose
                Triangles show detail, but people grasp shape faster from lines. Plotting each cohort as a curve, with months since start along the bottom, shows whether curves flatten into a stable base of loyal users or keep sliding towards zero. That single picture is often the clearest evidence a founder has about product-market fit.

                ## Milestones
                1. Curves plotted for the last twelve cohorts on one chart, with recent cohorts highlighted.
                2. A weighted average curve added across all cohorts.
                3. The point where curves flatten, if they do, marked and described.
                4. The chart saved alongside the triangle for reuse.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A chart of twelve cohort retention curves with a weighted average line and a written note on whether and where the curves flatten exists."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Plot one retention line per cohort for the last twelve cohorts"
                - "Add a weighted average curve across all cohorts"
                - "Mark where the curves flatten or note that they do not"
                - "Save the chart next to the cohort triangle"
            - name: Reconciling cohort sizes with signup and order totals
              description: |-
                ## Purpose
                Nobody will trust the retention numbers if the cohort table says 4,200 people joined in March and the sign-up report says 4,650. Reconciling cohort sizes against the source systems each month catches deleted accounts, duplicates and time zone shifts before a leader spots the gap first.

                ## Milestones
                1. Cohort sizes for six months compared with signup or first-order totals from the source system.
                2. Each gap over 2 percent explained, such as merged accounts or deleted test users.
                3. Accepted differences documented in the definitions note.
                4. A monthly reconciliation step added to the cohort refresh.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Cohort sizes reconcile with source totals within 2 percent every month, or the difference is explained in writing."
                cadence: rolling
              tasks:
                - "Pull six months of signup or first-order totals from the source system"
                - "Compare them with cohort sizes and list gaps over 2 percent"
                - "Explain each gap and document accepted differences"
                - "Reconcile the newest cohort size against the source @recurring(monthly:6)"
            - name: Retention baseline and where the curve flattens
              description: |-
                ## Purpose
                Before anyone sets a retention goal, the team needs a written baseline: retention at the key periods, such as week one, month one, month three and month six, for a recent stable set of cohorts. Noting where the curve flattens, and at what level, gives later improvements something to beat. Without it, every change is judged against memory.

                ## Milestones
                1. Retention at four key periods recorded for a stable set of recent cohorts.
                2. The flattening level and period noted, or the absence of one stated plainly.
                3. Known distortions in the baseline period, such as a promotion or outage, written alongside.
                4. The baseline note shared and stored where the team can find it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline note records retention at four key periods, the flattening point and known distortions, and is shared with the team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose four key retention periods that match the product's rhythm"
                - "Record retention at each period for a stable set of cohorts"
                - "Note promotions, outages or launches that distort the baseline"
                - "Share the dated baseline note with the team"
            - name: Monthly cohort table refresh with commentary
              description: |-
                ## Purpose
                Each month a short routine checks the newest column landed, compares the latest cohort with the baseline and writes three sentences on what moved and why it might have. A cohort table that refreshes itself but never gets read does nothing. Over a year those notes become the story of the product's retention.

                ## Milestones
                1. A refresh routine that checks the newest period has data for every cohort.
                2. A three-sentence commentary written each month, comparing the latest cohort with the baseline.
                3. Commentary stored in date order in a single log.
                4. Questions raised by the commentary handed to a named owner.

                ## Notes
                Start from the **Metrics log** template. Comment on the newest two cohorts first; old rows rarely change and invite over-reading.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly cohort refreshes each have a dated three-sentence commentary in the log."
                cadence: rolling
              tasks:
                - "Set up the retention commentary log from the metrics log template"
                - "Check the newest period has landed for every cohort @recurring(monthly:4)"
                - "Write three sentences on what moved against the baseline @recurring(monthly:5)"
                - "Hand each open question to a named owner"
            - name: Weekly early retention watch on new cohorts
              description: |-
                ## Purpose
                Damage from a broken onboarding step shows up in week-one retention of the newest cohort long before monthly numbers move. A ten-minute check every Monday on the last four weekly cohorts' first-week and second-week retention catches regressions while they are still cheap to fix.

                ## Milestones
                1. A small view of first-week and second-week retention for the last four weekly cohorts.
                2. A threshold agreed for when a drop is worth raising, such as three points below the trailing average.
                3. Drops beyond the threshold raised with the product owner the same day.
                4. A short note kept of each alert and what caused it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every Monday the last four weekly cohorts are checked against the agreed threshold, with every breach raised and its cause noted."
                cadence: rolling
              tasks:
                - "Build a view of week-one and week-two retention for recent cohorts"
                - "Agree the drop threshold with the product owner"
                - "Check the newest weekly cohorts against the threshold @recurring(weekly:mon)"
                - "Note each breach and its cause in the alert log"
            - name: Cohort definitions note and changelog
              description: |-
                ## Purpose
                Retention numbers drift when someone quietly changes the activity rule or excludes a segment, and six months later nobody can explain why last year's figures look different. A single note holding the anchor, period, activity rule and exclusions, with a dated changelog, lets anyone rebuild the number and see when it changed.

                ## Milestones
                1. One note holding anchor event, period length, activity rule, exclusions and time zone.
                2. A changelog with date, change, reason and approver for each edit.
                3. Links from every retention chart to the note.
                4. A quarterly check that the note matches the live query logic.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A definitions note with a dated changelog is linked from every retention chart and checked against the query logic each quarter."
                cadence: rolling
              tasks:
                - "Collect the anchor, period, activity rule and exclusions into one note"
                - "Add a changelog table with date, change, reason and approver"
                - "Link the note from every retention chart and query"
                - "Compare the note with the live query logic @recurring(quarterly)"
            - name: Quarterly retention review with product and growth leads
              description: |-
                ## Purpose
                Product and growth leads change onboarding, pricing and features, so retention improves fastest when they see the cohorts together and agree what to try. A quarterly hour built around the triangle, the curves and the commentary log turns observations into owned actions with dates.

                ## Milestones
                1. A standing quarterly review with product, growth and the analyst invited.
                2. A short pack with the triangle, curves, baseline comparison and open questions.
                3. Two or three agreed actions, each with an owner and a date.
                4. Last quarter's actions checked at the start of each review.

                ## Notes
                Start from the **Meeting notes** template. Spend the first ten minutes on last quarter's actions, or the review turns into a slideshow.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews in a year each end with two or three owned, dated actions recorded in meeting notes."
                cadence: cyclic
              tasks:
                - "Book the quarterly review with product and growth leads @recurring(quarterly)"
                - "Prepare a pack with the triangle, curves and open questions"
                - "Record two or three actions with owners and dates"
                - "Open each meeting by reviewing last quarter's actions"
            - name: Retention annotations for launches, outages and campaigns
              description: |-
                ## Purpose
                Logging launches, outages, pricing changes and big campaigns with their dates, and marking them on the retention charts, turns guessing into explanation. A dip in the April cohort means little until someone remembers that was the month a paid campaign brought in bargain hunters. The log also stops the same question being investigated twice.

                ## Milestones
                1. An annotation log with date, event type, description and affected users or channels.
                2. The last twelve months backfilled from release notes, incident reports and campaign calendars.
                3. Annotations shown as markers on the retention curve chart.
                4. New events added each month from the teams that cause them.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An annotation log covers the last twelve months, is updated monthly and its entries are visible on the retention chart."
                cadence: rolling
              tasks:
                - "Create an annotation log with date, type and description columns"
                - "Backfill twelve months from release notes and campaign calendars"
                - "Ask the agent to draft annotations from this month's release notes and incidents @recurring(monthly:18)"
                - "Show annotations as markers on the retention curve chart"
            - name: Gross and net revenue retention by cohort
              description: |-
                ## Purpose
                Counting people retained hides whether those who stay pay more or less over time. Tracking gross revenue retention, which ignores expansion, and net revenue retention, which includes upgrades and add-ons, by monthly cohort shows whether the business grows from its existing customers. Investors and boards ask for these numbers, and the definitions must hold up under questioning.

                ## Milestones
                1. A written definition of gross and net revenue retention, including how refunds, credits and currency are treated.
                2. A revenue cohort table built from billing data at the agreed period.
                3. Figures reconciled with finance's recurring revenue totals.
                4. A monthly refresh in place with a note on the main movers.

                ## Notes
                Agree the treatment of discounts, refunds and currency with finance before publishing. Two versions of net revenue retention in circulation do more harm than none.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Gross and net revenue retention by cohort are published monthly from billing data and reconcile with finance's recurring revenue within 1 percent."
                cadence: rolling
              tasks:
                - "Write the revenue retention definitions and share them with finance"
                - "Build a revenue cohort table from billing data"
                - "Reconcile cohort revenue with finance's recurring revenue totals"
                - "Refresh revenue retention and note the main movers @recurring(monthly:9)"
            - name: Automated checks on the cohort tables
              description: |-
                ## Purpose
                Cohort tables fail in particular ways: old cohorts change size after the fact, the newest period lands half-full, or a renamed event makes retention collapse overnight. A short set of cohort-specific checks run after each refresh catches these before anyone screenshots a false drop. General data quality tooling may already exist; this work adds only the tests a cohort table needs.

                ## Milestones
                1. A test that historical cohort sizes have not changed beyond a small tolerance since the last refresh.
                2. A test that the newest period is complete before it is shown.
                3. A test that no cell has moved more than an agreed number of points since the last run.
                4. Failures routed to the table owner with a link to the failing check.

                ## Notes
                Start from the **Operational checklist** template for a manual weekly look while the automated tests are being built.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three cohort-specific automated tests run after every refresh and route failures to the table owner."
                cadence: rolling
              tasks:
                - "Write a test that flags changes to closed cohort sizes"
                - "Add a check that hides the newest period until it is complete"
                - "Alert the table owner when any cell moves beyond the agreed tolerance"
                - "Review failed cohort checks and their causes with the owner @recurring(weekly:thu)"
            - name: Reactivated and resurrected user tracking
              description: |-
                ## Purpose
                Standard retention marks a user lost the first period they are inactive, so people who come back after a quiet month look like activity from nowhere. Tracking resurrected users separately, by how long they were away and what brought them back, shows whether win-back emails, seasonal needs or product changes are doing the work.

                ## Milestones
                1. A rule for when an inactive user counts as resurrected, such as returning after one or more empty periods.
                2. Monthly counts of resurrected users by cohort and length of absence.
                3. The main return triggers identified from campaign and referral data where available.
                4. Resurrected counts shown beside the retention curve rather than hidden inside it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Resurrected users are counted monthly by cohort and absence length, with the definition written and the counts shown beside retention."
                cadence: rolling
              tasks:
                - "Write the rule for when a returning user counts as resurrected"
                - "Count resurrected users by cohort and length of absence"
                - "Match returns to campaigns or referrals where the data allows"
                - "Update the resurrected user counts @recurring(monthly:15)"
            - name: Retention slide for the monthly founder update
              description: |-
                ## Purpose
                Investors and advisers reading a founder's monthly update want to know whether new customers are sticking, not just how many arrived. One consistent retention chart and paragraph, with the latest cohorts against the baseline and a sentence on why, builds credibility because it appears every month, good or bad.

                ## Milestones
                1. One retention chart and a three-line summary format agreed for the update.
                2. The same cohorts and periods shown every month so trends are comparable.
                3. Bad months reported with a cause and a planned response.
                4. Twelve consecutive updates sent with the retention section included.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every monthly investor or adviser update for a year includes the same retention chart and a three-line summary."
                cadence: rolling
              tasks:
                - "Choose the one retention chart the update will always show"
                - "Draft the three-line summary format with a line for the cause"
                - "Paste the refreshed chart and summary into the update @recurring(monthly:12)"
                - "Keep a copy of each sent update with its retention figures"
            - name: Reading a cohort triangle by row, column and diagonal
              description: |-
                ## Purpose
                Each direction of a cohort table answers a different question. Rows show one cohort ageing, columns compare cohorts at the same age, and diagonals show everything that happened in one calendar month, such as an outage hitting all cohorts at once. Learning to read all three, with examples from your own table, stops the classic mistake of blaming a seasonal dip on product quality.

                ## Milestones
                1. One row, one column and one diagonal from your own triangle each explained in a sentence.
                2. A calendar effect identified along a diagonal, or confirmed absent.
                3. A short guide written for colleagues using your examples.
                4. The guide checked by a colleague who reads it cold.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide explains row, column and diagonal readings with three examples from the team's own triangle and has been checked by a colleague."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick one row, one column and one diagonal from your triangle"
                - "Write what each shows in a single sentence"
                - "Look along diagonals for a month that hit every cohort"
                - "Ask a colleague to read the guide and explain one diagonal back"
            - name: Classic, rolling and bracket retention compared
              description: |-
                ## Purpose
                Classic retention counts users active in exactly that period, rolling or unbounded retention counts users active in that period or any later one, and bracket retention uses custom windows such as days 1 to 7. The same product can show 18, 35 or 52 percent depending on which is used. Knowing the differences lets you pick the right one and read published benchmarks without being misled.

                ## Milestones
                1. All three definitions computed on the same cohorts and shown side by side.
                2. The definition each internal chart uses written on the chart.
                3. A note on which definition common benchmark sources use, where they say.
                4. A recommendation for which one the team reports by default.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Classic, rolling and bracket retention are computed side by side on the same cohorts, with a default chosen and labelled on every chart."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Compute classic retention for the last six cohorts"
                - "Compute rolling and bracket retention on the same cohorts"
                - "Label each existing retention chart with the definition it uses"
                - "Recommend a default definition in the definitions note"
            - name: Mix shift and survivorship bias in blended retention
              description: |-
                ## Purpose
                Blended retention can rise while every individual cohort gets worse, simply because older, loyal users make up more of the base, and it can fall because one big new cohort arrived. The same trap appears when segment mix shifts, such as a surge of low-intent users from one paid channel. Working through these effects on your own data protects you from presenting a misleading headline.

                ## Milestones
                1. A worked example where blended and cohort retention move in different directions, from your data or constructed if none exists.
                2. Segment mix by cohort charted for the last twelve cohorts.
                3. A rule of thumb written for when to show cohort rather than blended figures.
                4. The example presented to the team in ten minutes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked mix-shift example from the team's own cohorts is presented, and a written rule says when blended retention may be shown."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Chart blended retention beside individual cohort retention"
                - "Chart the segment mix of each cohort over the last year"
                - "Write when blended figures may be shown and when not"
                - "Present the worked example to the team in ten minutes"
            - name: Uncertainty in retention rates for small cohorts
              description: |-
                ## Purpose
                A cohort of 40 customers that drops from 60 to 50 percent retained has moved by four people, which is well within chance. Putting confidence intervals on retention cells, or at least greying out cells below a minimum cohort size, stops teams celebrating or panicking over noise. Founders with small early cohorts need this most.

                ## Milestones
                1. A minimum cohort size below which cells are greyed or flagged.
                2. Confidence intervals computed for the key retention periods using a standard method for proportions.
                3. Intervals shown on the curve chart for recent cohorts.
                4. A note explaining in plain words what the interval means.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Retention charts show confidence intervals or a minimum size flag, with a plain-language note on how to read them."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick a minimum cohort size for showing a retention cell"
                - "Compute intervals for key retention periods with a proportion method"
                - "Add the intervals to the retention curve chart"
                - "Write a two-sentence explanation of the intervals for readers"
            - name: Survival curves for time to lapse
              description: |-
                ## Purpose
                Cohort tables handle users who have not yet reached month six by leaving the cell blank, which wastes data. Survival methods such as the Kaplan-Meier estimator use every user's observed time, including those still active, and give a single curve with intervals that compares segments fairly. Learning the basics turns a pile of partial cohorts into one clear answer.

                ## Milestones
                1. Kaplan-Meier survival curves fitted for the whole base and for two segments.
                2. Censoring explained and handled for users who are still active.
                3. Median time to lapse reported where the curve crosses 50 percent.
                4. Results compared with the cohort triangle and differences explained.

                ## Notes
                Survival curves describe when people leave. Predicting which individual will leave is a separate modelling task; keep this work descriptive.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Kaplan-Meier curves for the base and two segments are produced, censoring is documented and results are reconciled with the triangle."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read an introduction to Kaplan-Meier estimation and censoring"
                - "Prepare one row per user with time observed and a lapsed flag"
                - "Fit survival curves for the whole base and two segments"
                - "Compare the curves with the cohort triangle and note differences"
            - name: Writing cohort retention SQL with window functions
              description: |-
                ## Purpose
                Most retention queries share the same shape: find each user's first event, compute periods since then and count distinct active users per cohort and period. Practising that pattern with window functions and date arithmetic means you can build or audit any cohort table quickly, and spot the off-by-one period errors that plague copy-pasted queries.

                ## Milestones
                1. A query that assigns each user a cohort using a window function over their first event.
                2. A period index computed with date arithmetic that handles month ends correctly.
                3. Results checked against the existing activity table for three cohorts.
                4. The query saved as a shared, commented pattern.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A commented cohort retention query matches the activity table for three cohorts and is saved in the shared query library."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a query that finds each user's first qualifying event"
                - "Compute the period index with date arithmetic that handles month ends"
                - "Count distinct active users per cohort and period"
                - "Save the query with comments in the shared query library"
            - name: Presenting a cohort chart people can read
              description: |-
                ## Purpose
                Triangles full of percentages lose most non-analysts in seconds. Learning to lead with one curve, label the period clearly, show cohort sizes and write the takeaway as the chart title makes retention usable in leadership meetings and investor updates. The aim is a chart someone can explain back after one look.

                ## Milestones
                1. A redesigned retention chart with a takeaway title and labelled axes.
                2. Cohort sizes and the definition shown in small print on the chart.
                3. The chart tested on two people outside the data team.
                4. Their misreadings fixed in a second version.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A redesigned retention chart is explained back correctly by two people outside the data team after one look."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Rewrite the retention chart title as a one-line takeaway"
                - "Add cohort sizes and the definition in small print"
                - "Show the chart to two colleagues outside the data team"
                - "Fix whatever they misread and save the second version"
            - name: Stickiness ratios alongside cohort retention
              description: |-
                ## Purpose
                Retention says whether people come back at all; stickiness, such as daily over monthly active users or active days per month, says how often. A product can retain 40 percent of users who each visit once a month, or 25 percent who use it daily, and those are very different businesses. Pairing the two gives a fuller view of engagement within retained cohorts.

                ## Milestones
                1. Active days per period computed for retained users in each cohort.
                2. A stickiness ratio chosen that matches the product's natural rhythm.
                3. Stickiness charted for recent cohorts next to their retention.
                4. A note on how the two measures should be read together.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Stickiness for retained users is charted beside retention for recent cohorts, with a written note on reading the two together."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count active days per period for retained users by cohort"
                - "Choose a stickiness ratio that fits the usage rhythm"
                - "Chart stickiness next to retention for recent cohorts"
                - "Write how the two measures should be read together"
            - name: First-week behaviour cohorts and the activation moment
              description: |-
                ## Purpose
                Users who complete certain actions in their first week, such as inviting a colleague or connecting a data source, often retain far better than those who do not. Grouping new users by first-week behaviour and comparing their curves gives candidate activation milestones for the product team to test. The comparison is correlational, so the output is a shortlist of hypotheses, not a proven cause.

                ## Milestones
                1. Ten candidate first-week actions listed with the share of new users completing each.
                2. Retention curves compared for users who did and did not complete each action.
                3. Three candidates shortlisted where the gap is large and the action is plausible to influence.
                4. The shortlist handed to the product team with the caveat that experiments must confirm it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three candidate activation actions are shortlisted from first-week behaviour cohorts and handed to product with a written correlational caveat."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List ten actions a new user might take in the first week"
                - "Compare retention for users who did and did not take each one"
                - "Shortlist three actions with large gaps that product can influence"
                - "Hand the shortlist to product with the correlation caveat"
            - name: Retention by acquisition channel
              description: |-
                ## Purpose
                Paid social, search, referrals and partnerships rarely bring users who stay at the same rate, and a channel that looks cheap per signup can be the most expensive per retained customer. Splitting cohorts by first-touch channel gives marketing a retention view to sit beside its cost reports. Repeating it each quarter shows whether channel quality is changing.

                ## Milestones
                1. Channel attribution for each user taken from the agreed source, with unknowns counted.
                2. Month-one and month-three retention compared by channel for the last six cohorts.
                3. Channels with too few users grouped rather than over-read.
                4. The comparison shared with marketing and refreshed each quarter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarterly channel retention comparison covering six cohorts is shared with marketing, with small channels grouped and unknowns counted."
                cadence: cyclic
              tasks:
                - "Join each user's first-touch channel to the activity table"
                - "Compare month-one and month-three retention by channel"
                - "Group channels below the minimum cohort size"
                - "Refresh the channel comparison and send it to marketing @recurring(quarterly)"
            - name: Retention by plan, tier and billing period
              description: |-
                ## Purpose
                Monthly and annual subscribers, free and paid users, and starter and premium tiers all leave at different rates and for different reasons. Cutting cohorts by the plan users started on, and by any plan they move to, shows where the product holds people and where it does not. It also gives packaging discussions retention evidence rather than opinion.

                ## Milestones
                1. Cohorts split by starting plan and billing period.
                2. Plan changes such as upgrades and downgrades tracked within each cohort.
                3. Retention compared across plans at three key periods.
                4. Findings written up for the people who own plans and packaging.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Retention at three key periods is compared across starting plans and billing periods, with plan moves tracked and findings written up."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Tag each user with starting plan and billing period"
                - "Track upgrades and downgrades within each cohort"
                - "Compare retention across plans at three key periods"
                - "Write up findings for the plan and packaging owners"
            - name: Choosing a product analytics tool for cohort work
              description: |-
                ## Purpose
                Teams often debate whether to run retention in a product analytics tool, the BI tool or straight from the warehouse. Each choice trades speed for control: point-and-click cohorts are quick but may define activity their own way, while warehouse SQL is exact but slower to explore. Comparing two or three options against the team's real retention questions avoids buying a tool for a demo.

                ## Milestones
                1. Five real retention questions written as the test set.
                2. Two or three options scored on how they answer them, on cost and on fit with the warehouse.
                3. How each option defines cohorts and activity checked against the definitions note.
                4. A choice recorded with its reasons and a review date.

                ## Notes
                Start from the **Purchase decision** template. Wider platform choices belong elsewhere; keep this to cohort and retention needs.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool choice for cohort analysis is recorded, scored against five real retention questions, with a review date set."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write five real retention questions as the test set"
                - "Trial two or three options on the same questions"
                - "Check each option's cohort and activity definitions against the note"
                - "Review the cohort tool choice before the contract renews @recurring(yearly)"
            - name: Moving cohort logic out of spreadsheets
              description: |-
                ## Purpose
                Many retention analyses start life in a spreadsheet exported once a month, with pivot tables nobody else can rebuild. Moving the logic into version-controlled queries over the warehouse removes manual export errors and lets anyone rerun last month's numbers. Keep the spreadsheet as a viewer if people like it.

                ## Milestones
                1. Every step of the spreadsheet process written down, including manual edits.
                2. The same logic rebuilt as queries over the activity table.
                3. Results matched with the last three spreadsheet versions, with differences explained.
                4. The spreadsheet retired or switched to read from the new output.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cohort numbers come from version-controlled queries that match the last three spreadsheet versions, and manual exports have stopped."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write down every step and manual edit in the spreadsheet process"
                - "Rebuild the logic as queries over the activity table"
                - "Match three months of results and explain each difference"
                - "Point the spreadsheet at the new output or retire it"
            - name: Pruning retention segment cuts nobody uses
              description: |-
                ## Purpose
                Over time retention views pile up cuts by country, device, plan, channel and campaign until nobody can find the one that matters. Checking which cuts were opened or quoted in decisions over the last year, and retiring the rest, makes the useful ones easier to find and cheaper to maintain.

                ## Milestones
                1. Every retention segment cut listed with its views or uses in the last year.
                2. Cuts with no use in decisions marked for retirement.
                3. Retirements agreed with the people who asked for those cuts.
                4. A yearly usage review in the calendar.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Retention segment cuts are reduced to those used in the last year, with retirements agreed and a yearly review scheduled."
                cadence: cyclic
              tasks:
                - "List every retention segment cut with its usage in the last year"
                - "Mark cuts with no recorded use in decisions"
                - "Agree retirements with the people who requested them"
                - "Repeat the usage review of retention cuts @recurring(yearly)"
            - name: Rules for pauses, merges and recreated accounts
              description: |-
                ## Purpose
                Paused subscriptions, merged duplicate accounts and users who delete and recreate their account all distort cohorts if nobody decides how to treat them. A paused user may look churned, and a recreated account looks like a new signup who retains perfectly. Writing a rule for each edge case, and measuring how much it changes the numbers, settles arguments before they start.

                ## Milestones
                1. A list of edge cases found in the data with counts: pauses, merges, recreations and transfers.
                2. A treatment rule written for each one.
                3. The effect of the rules on the last six cohorts measured.
                4. The rules added to the definitions note and the activity table.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each listed edge case has a written treatment rule, its effect on six cohorts is measured and the rules are implemented in the activity table."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count paused, merged and recreated accounts in the last year"
                - "Write a treatment rule for each edge case"
                - "Measure how the rules change the last six cohorts"
                - "Add the rules to the definitions note and the activity table"
            - name: Excluding internal, test and fraudulent accounts
              description: |-
                ## Purpose
                Staff accounts, test users created by engineers and fake signups from bots inflate early cohorts and depress retention, or do the opposite when staff log in daily. Building a maintained exclusion list, with clear rules for each type, removes a quiet source of error that grows as the company does.

                ## Milestones
                1. Rules for spotting internal, test and fraudulent accounts written down.
                2. An exclusion list built and applied in the activity table.
                3. The before and after effect on cohort sizes and retention recorded.
                4. The list reviewed each quarter with the people who create test accounts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An exclusion list with written rules is applied to the activity table and reviewed each quarter, with its effect on retention recorded."
                cadence: rolling
              tasks:
                - "Write rules for spotting staff, test and bot accounts"
                - "Build the exclusion list and apply it in the activity table"
                - "Record how exclusion changed cohort sizes and retention"
                - "Review the exclusion list with engineering and support @recurring(quarterly)"
            - name: Retention evidence for a fundraising data room
              description: |-
                ## Purpose
                Investors doing diligence on a subscription or repeat-purchase business will ask for cohort retention, revenue retention and the definitions behind them, often within days. Preparing a clean pack before the round starts, with figures that reconcile to the financials, avoids rushed numbers that change between calls. It also lets the founder explain the curve with confidence.

                ## Milestones
                1. Logo and revenue retention triangles prepared for at least eighteen monthly cohorts where history allows.
                2. A one-page definitions sheet covering anchor, activity, period and revenue treatment.
                3. Figures reconciled with the financial statements and the investor deck.
                4. A short commentary on the curve shape, known distortions and what has improved.

                ## Notes
                Use the same definitions in every version shared. Investors compare packs across calls, and a changed definition looks worse than a weak number.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A retention pack with triangles, definitions and commentary reconciles with the financials and is in the data room before the first investor meeting."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the retention questions investors are likely to ask"
                - "Prepare logo and revenue retention triangles for eighteen cohorts"
                - "Reconcile retention figures with the financial statements and deck"
                - "Write a one-page definitions sheet and short commentary"
            - name: Retention read on a major product launch
              description: |-
                ## Purpose
                When a big redesign or new feature ships to everyone there is no control group, but cohort data can still show whether users who joined afterwards behave differently. Planning the read before launch, with the cohorts, periods and comparison windows fixed in advance, keeps the conclusion honest. It complements any formal experiments rather than replacing them.

                ## Milestones
                1. The launch date, affected users and comparison cohorts written down before launch.
                2. Week-one and month-one retention compared for cohorts before and after.
                3. Seasonality and concurrent changes from the annotation log noted.
                4. A one-page readout shared ninety days after launch with its limits stated.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A before-and-after cohort comparison planned before launch is published ninety days after it, with limits and concurrent changes stated."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the launch date and comparison cohorts before launch"
                - "Mark concurrent changes from the annotation log"
                - "Compare week-one and month-one retention before and after launch"
                - "Publish a one-page readout with its limits stated"
            - name: Annual retention review and next year's target
              description: |-
                ## Purpose
                Once a year it is worth stepping back from monthly noise to ask whether retention improved over twelve months, which changes moved it and what target makes sense next. Comparing this year's cohorts at the same ages with last year's, and recording the result with its context, gives leadership a defensible basis for next year's goals.

                ## Milestones
                1. This year's cohorts compared with last year's at three key ages.
                2. The changes most likely to explain the difference listed with evidence.
                3. A retention target for next year proposed with its reasoning.
                4. The review and agreed target stored with the baseline note.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A yearly review compares cohorts at three ages with last year's and records an agreed retention target for the coming year."
                cadence: cyclic
              tasks:
                - "Compare this year's cohorts with last year's at three key ages"
                - "List the changes most likely to explain the difference"
                - "Propose next year's retention target with its reasoning"
                - "Hold the annual retention review with leadership @recurring(yearly)"
            - name: Cohort retention workshop for the leadership team
              description: |-
                ## Purpose
                Leaders who can read a triangle ask better questions and stop quoting a blended number. A ninety-minute workshop using the company's own cohorts, with a few exercises and a short quiz, builds shared language across product, sales and finance. It is a dated event that pays back in every review meeting afterwards.

                ## Milestones
                1. A ninety-minute agenda with three exercises on the company's own cohort data.
                2. The session held with product, sales, finance and the founder or general manager.
                3. A one-page reference card handed out at the end.
                4. Follow-up questions collected and answered within a week.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A ninety-minute retention workshop is held for leaders using company data, with a reference card handed out and follow-ups answered within a week."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a ninety-minute agenda with three exercises"
                - "Ask the agent to draft a one-page retention reference card from the definitions note"
                - "Run the workshop with product, sales and finance leaders"
                - "Answer follow-up questions within a week"
            - name: Cohort read after a price change
              description: |-
                ## Purpose
                Raising prices can lift revenue per user while quietly pushing more customers out at renewal, and the effect may not show for one or two billing cycles. Planning a cohort read that compares customers who joined or renewed before and after the change shows the real trade-off. Pricing decisions belong to their owners; this read gives them the retention side of the evidence.

                ## Milestones
                1. Cohorts affected by the change, including existing customers at renewal, defined in advance.
                2. Logo and revenue retention compared for cohorts before and after at two renewal points.
                3. Discounts, grandfathered plans and concurrent campaigns recorded alongside.
                4. A readout shared with the pricing owner after the second renewal point.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A before-and-after cohort readout on logo and revenue retention at two renewal points is shared with the pricing owner."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Define which new and renewing cohorts the price change affected"
                - "Record discounts and grandfathered plans alongside the cohorts"
                - "Compare logo and revenue retention at two renewal points"
                - "Share the readout with the pricing owner"
            - name: Retention for an early startup with tiny cohorts
              description: |-
                ## Purpose
                Founders with thirty customers a month cannot read a percentage triangle, because one customer moves a cell by three points. At this stage it is better to track named customers: who is still active after eight weeks, who left and what they said. A simple customer list beside cohorts shown as counts gives more honest signal than any chart.

                ## Milestones
                1. A list of every customer from the last six months with start date and current status.
                2. Weekly or monthly cohorts shown as counts of people, not just percentages.
                3. A reason recorded for each customer who lapsed, from a call or message.
                4. A monthly note on whether the newest cohorts are sticking better.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every customer from six months is listed with status, each lapse has a recorded reason and a monthly note compares new cohorts."
                cadence: rolling
              tasks:
                - "List every customer from the last six months with start date and status"
                - "Show cohorts as counts of people beside the percentages"
                - "Message each lapsed customer to ask why they stopped"
                - "Write a short note on whether new cohorts stick better @recurring(monthly:24)"
            - name: Renewal cohorts for annual subscriptions
              description: |-
                ## Purpose
                Annual subscribers look perfectly retained for eleven months and then face one renewal decision, so monthly curves become flat lines with a cliff. Grouping customers by renewal month and tracking the renewal rate, early renewals and late payment recoveries gives a truer view. It also tells the team which months carry the most renewal risk.

                ## Milestones
                1. Annual customers grouped by renewal month with the number up for renewal.
                2. Renewal rate tracked by cohort, including late recoveries within a grace window.
                3. Upcoming renewal volume shown for the next twelve months.
                4. A monthly summary sent to whoever owns renewals.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Annual renewal rates are tracked by renewal-month cohort, and a monthly summary goes to the renewals owner."
                cadence: rolling
              tasks:
                - "Group annual customers by renewal month"
                - "Set the grace window for counting late renewals"
                - "Chart renewal volume due over the next twelve months"
                - "Send the monthly renewal cohort summary to the owner @recurring(monthly:25)"
            - name: Two-sided retention for a marketplace
              description: |-
                ## Purpose
                Marketplaces need both sides to stay: buyers who return to purchase and sellers, hosts or providers who keep listing. Tracking each side's cohorts separately, and checking whether buyer retention is higher in areas or categories with stable supply, shows where the marketplace is healthy and where it depends on constant acquisition.

                ## Milestones
                1. Separate activity rules written for buyers and for sellers.
                2. A cohort triangle built for each side.
                3. Buyer retention compared across categories or areas with stable and unstable supply.
                4. A summary of which side constrains retention shared with leadership.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Buyer and seller cohort triangles exist with separate activity rules, and a summary names which side currently constrains retention."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write separate activity rules for buyers and sellers"
                - "Build a cohort triangle for each side"
                - "Compare buyer retention where supply is stable and unstable"
                - "Share which side constrains retention with leadership"
            - name: Repeat purchase cohorts for an online shop
              description: |-
                ## Purpose
                Shops have no subscription to cancel; customers simply stop buying. Repeat purchase cohorts, showing the share of first-time buyers who order again within 30, 90 and 180 days, are the retention measure that matters most in ecommerce. A founder or small team can build them from an order export without a data team.

                ## Milestones
                1. An order export with customer, order date and value covering at least a year.
                2. First-order month assigned as the cohort for each customer.
                3. Second-order rates at 30, 90 and 180 days shown by cohort.
                4. A monthly update run after each month's orders close.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Second-order rates at 30, 90 and 180 days are shown by first-order cohort from a year of orders and updated monthly."
                cadence: rolling
              tasks:
                - "Export a year of orders with customer, date and value"
                - "Assign each customer's first-order month as their cohort"
                - "Calculate second-order rates at 30, 90 and 180 days"
                - "Add the latest month's orders and refresh the cohorts @recurring(monthly:20)"
            - name: Account-level retention for B2B products
              description: |-
                ## Purpose
                In business software an account can stay while half its seats go unused, and a single champion leaving can end the contract months later. Tracking retention at account level, alongside active seats per account, gives customer success an early view of accounts quietly shrinking. It differs from user-level retention, and both are needed.

                ## Milestones
                1. Accounts assigned to cohorts by contract start date.
                2. Logo retention and active seat share tracked by account cohort.
                3. Accounts with falling seat activity listed for customer success.
                4. A quarterly review of account cohorts with the customer success lead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Account cohorts show logo retention and active seat share, with shrinking accounts listed and reviewed quarterly with customer success."
                cadence: rolling
              tasks:
                - "Assign accounts to cohorts by contract start date"
                - "Track logo retention and active seat share by account cohort"
                - "List accounts whose seat activity fell for two periods"
                - "Review account cohorts with the customer success lead @recurring(quarterly)"
            - name: Taking over someone else's retention dashboard
              description: |-
                ## Purpose
                Analysts who inherit a retention dashboard often find undocumented filters, an activity rule nobody remembers agreeing and numbers that differ from finance. Spending the first weeks rebuilding one cohort by hand, listing every filter and meeting the main readers saves months of defending figures you do not understand.

                ## Milestones
                1. Every filter, join and exclusion in the dashboard listed.
                2. One cohort rebuilt by hand and matched to the dashboard.
                3. The three main readers asked what decisions they use it for.
                4. A short handover note with open questions and planned fixes.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One cohort is rebuilt and matched, every filter is listed and a handover note with open questions is shared within thirty days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every filter, join and exclusion in the dashboard"
                - "Rebuild one cohort by hand and match it to the dashboard"
                - "Ask the three main readers which decisions it informs"
                - "Write a handover note with open questions and planned fixes"
            - name: Growth accounting with new, retained, resurrected and churned users
              description: |-
                ## Purpose
                Growth accounting splits each period's active users into new, retained, resurrected and churned, so you can see whether growth comes from keeping people or from replacing them. The quick ratio, new plus resurrected divided by churned, shows how hard acquisition is working to fill a leaky bucket. It connects cohort retention to the top-line active user number leaders watch.

                ## Milestones
                1. Each user in each period classified as new, retained, resurrected or churned.
                2. The four groups charted as stacked bars for twenty-four periods.
                3. The quick ratio computed and its trend described.
                4. Classifications reconciled so the groups sum to the reported active user total.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A growth accounting chart for twenty-four periods sums exactly to reported active users and shows the quick ratio trend."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Classify each user per period as new, retained, resurrected or churned"
                - "Chart the four groups as stacked bars for twenty-four periods"
                - "Compute the quick ratio and describe its trend"
                - "Check the groups sum to the reported active user total"
            - name: Seasonality in cohort comparisons
              description: |-
                ## Purpose
                January gym joiners, December gift buyers and September students will never retain alike, and comparing their cohorts month to month produces false alarms. Comparing each cohort with the same month last year, or adjusting for known seasonal patterns, separates real change from the calendar.

                ## Milestones
                1. Seasonal patterns identified from at least two years of cohorts.
                2. Year-over-year comparisons set up for each cohort month.
                3. Known seasonal cohorts flagged on the retention charts.
                4. A yearly check that the seasonal pattern still holds.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each cohort is compared with the same month last year, seasonal cohorts are flagged on charts and the pattern is rechecked yearly."
                cadence: cyclic
              tasks:
                - "Plot two years of cohorts by start month to find seasonal patterns"
                - "Set up same-month-last-year comparisons for each cohort"
                - "Flag seasonal cohorts on the retention charts"
                - "Recheck the seasonal pattern with the latest year @recurring(yearly)"
            - name: Layer cake forecast of active users by cohort
              description: |-
                ## Purpose
                Stacking each cohort's expected future actives, using observed retention curves, produces a layer cake chart that shows how much of next year's active base already exists. Forecasting this way ties growth plans to retention assumptions explicitly, so a planner can see what happens if month-three retention moves by two points. Dedicated time series methods can sit alongside it.

                ## Milestones
                1. A retention curve chosen for projecting each future period, with its source stated.
                2. Existing cohorts projected forward twelve months and stacked.
                3. Planned new cohorts added from the acquisition plan.
                4. Actuals compared with the forecast each month and the error recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month layer cake forecast by cohort exists, is compared with actuals monthly and has its forecast error recorded."
                cadence: rolling
              tasks:
                - "Choose the retention curve for projecting future periods"
                - "Project existing cohorts forward twelve months and stack them"
                - "Add planned cohorts from the acquisition plan"
                - "Compare actuals with the layer cake forecast and log the error @recurring(monthly:27)"
            - name: Projecting long-run retention beyond observed periods
              description: |-
                ## Purpose
                Young cohorts have only a few months of data, yet planning and valuation conversations need a view of month twenty-four. Fitting a curve such as a power law or a shifted beta geometric model to observed retention, and checking how well it would have predicted older cohorts, gives a cautious projection with stated uncertainty. It informs, but does not replace, lifetime value work done elsewhere.

                ## Milestones
                1. Two or three curve families fitted to cohorts with at least twelve periods of data.
                2. Each fit backtested by predicting later months from early ones on older cohorts.
                3. The best performing method chosen with its error range.
                4. Projections for young cohorts published with clear uncertainty bands.

                ## Notes
                Projections built on one or two good months are fragile. Show the range and the backtest, not a single number.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Projected long-run retention for young cohorts is published with uncertainty bands, using a method chosen by backtest error on older cohorts."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Fit two or three curve families to mature cohorts"
                - "Backtest each by predicting later months from early ones"
                - "Choose the method with the lowest backtest error"
                - "Publish projections for young cohorts with uncertainty bands"
            - name: Cohort retention with consent gaps and lost tracking
              description: |-
                ## Purpose
                Consent choices, ad blockers, cookie expiry and users switching devices all break the link between visits, so retention measured from client-side tracking undercounts returning users. Estimating how much is missing, preferring logged-in or server-side activity and stating the gap on every chart keeps the numbers honest. Privacy rules decide what may be collected; this work stays within them.

                ## Milestones
                1. The share of activity without a stable user identifier measured.
                2. Retention compared between logged-in activity and anonymous tracking.
                3. Logged-in or server-side activity used as the retention source where possible.
                4. The known measurement gap stated on retention charts.

                ## Notes
                Do not try to recover identity for people who declined tracking. Work from the data you are permitted to hold and say what it cannot show.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The share of activity without stable identifiers is measured and stated on every retention chart, with logged-in activity used as the source where possible."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure the share of activity with no stable user identifier"
                - "Compare retention from logged-in and anonymous activity"
                - "Switch the retention source to logged-in activity where possible"
                - "State the known measurement gap on every retention chart"
---

# Cohort Retention Analysis

This area is for anyone who needs to know whether customers stay: analysts and knowledge workers building the numbers, founders explaining them to investors, and product teams deciding what to change. It starts with foundations (the retention question, the activity rule, the cohort anchor and period, a clean activity table, the first triangle and a written baseline), then the operating routines that keep cohorts refreshed and read, the skills behind honest retention numbers, decisions on segments, tools and edge cases, dated events such as a fundraising data room or a launch read, situations for early startups, subscriptions, marketplaces, shops and B2B accounts, and finally specialist methods such as growth accounting, layer cake forecasts and long-run projections.

What repeats is a weekly early retention watch and a weekly look at failed cohort checks, a monthly refresh with commentary, size reconciliation, revenue retention, annotations, resurrected users and the founder update, quarterly reviews of channels, accounts, exclusions and definitions, and a yearly review that sets next year's target. The Metrics log, Operational checklist, Meeting notes and Purchase decision templates pair with the commentary log, the cohort table checks, the quarterly review and the tool choice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
