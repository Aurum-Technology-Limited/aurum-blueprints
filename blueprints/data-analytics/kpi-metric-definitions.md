---
id: data-analytics.kpi-metric-definitions
name: KPI Metric Definitions
description: "An inventory of the metrics in circulation, one definition standard and dictionary, named owners and sources, change control, reconciliation and the hard cases of customers, revenue, churn and active users."
category: business
version: 1.0.0
tags: [data-analytics, kpi-metric-definitions, knowledge-worker, manager, team, metric-dictionary, semantic-layer, reporting]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - risk-register
    - purchase-decision
    - remediation-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: KPI Metric Definitions
          description: "Agreeing exactly how each key business metric is calculated, from which source and by whom, so different reports stop disagreeing."
          projects:
            - name: Inventory of every KPI currently reported
              description: |-
                ## Purpose
                Most teams that argue about numbers have never seen the full list of metrics in circulation. Pulling every recurring KPI from the board pack, the leadership dashboard, team decks and standing spreadsheets into one sheet, with where each appears and who produces it, exposes the duplicates behind the disagreements. Expect two or three versions of revenue, customers and active users in an organisation of any size.

                ## Milestones
                1. A sheet listing every recurring KPI with its name, the report it appears in and the person who produces it.
                2. The board pack, the leadership dashboard and each team's monthly deck all covered.
                3. Metrics with the same or similar names in different reports flagged as possible duplicates.
                4. A count of distinct metrics and suspected duplicates shared with the sponsor of the work.

                ## Notes
                Copy each name exactly as it is written on the report, odd spellings included. The variations are the evidence you will need later.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One inventory sheet covers every recurring KPI in the board pack, leadership dashboard and team decks, with suspected duplicates flagged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the reports and decks leadership reads every month"
                - "Copy each KPI name, its report and its producer into one sheet"
                - "Ask the agent to group near-identical metric names in the inventory"
                - "Flag every metric that appears under one name in more than one report"
            - name: Shortlist of the ten metrics that disagree most
              description: |-
                ## Purpose
                Trying to define every metric at once stalls within a month. Picking the ten where reports visibly disagree, or where a wrong value would change a real decision such as a hiring plan or a bonus, gives the work a first batch that people will notice being fixed.

                ## Milestones
                1. Each metric in the inventory scored on how often it is disputed and how much rides on it.
                2. Ten metrics chosen, each with the reports in which its value differs.
                3. The size of each disagreement recorded for one recent month.
                4. The shortlist agreed with the sponsor as the first definition batch.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist of ten metrics, each with last month's conflicting values and the gap between them, is agreed with the sponsor in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Score each inventoried metric on dispute frequency and decision impact"
                - "Pull last month's value for each candidate from every report showing it"
                - "Write the gap between the highest and lowest value beside each metric"
                - "Agree the final ten with your sponsor in a half-hour meeting"
            - name: One-page metric definition standard
              description: |-
                ## Purpose
                Writing a definition as one sentence, such as active customers are customers who are active, leaves every real question open. A fixed set of fields covering the business question, formula, numerator and denominator, grain, filters, source, owner, refresh time and known caveats makes any two definitions comparable and shows the gaps at a glance.

                ## Milestones
                1. A definition template with at least twelve required fields, each with a one-line explanation.
                2. Two shortlisted metrics written up in the template as worked examples.
                3. The template tested by one analyst and one business owner filling it in unaided.
                4. Fields both testers left blank or misread rewritten or removed.

                ## Notes
                Give every definition a plain-language version a new starter can read and a separate technical version for the steward. Most templates only have the second, which is why business owners never read them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A definition template with at least twelve required fields exists, with two shortlisted metrics completed in it and checked by an analyst and a business owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the list of fields every metric definition must contain"
                - "Write active customers into the template as the first worked example"
                - "Ask an analyst and a business owner to each fill in one metric"
                - "Rewrite or drop any field both testers left blank or misread"
            - name: Metric dictionary in one shared place
              description: |-
                ## Purpose
                Definitions scattered across wiki pages, dashboard tooltips and a spreadsheet on someone's drive drift apart within a quarter. One searchable dictionary, with one entry per metric and a link from every dashboard that shows it, becomes the reference people check before they argue.

                ## Milestones
                1. A home for the dictionary chosen, such as the wiki, the data catalogue or the BI tool's metric pages.
                2. The ten shortlisted metrics entered using the definition standard.
                3. Each entry linked from the dashboards and reports that display the metric.
                4. Search tested by three colleagues looking up a metric they use every week.

                ## Notes
                Choose the place people already open daily. A better tool nobody visits loses to a plain wiki page that everyone does.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ten shortlisted metrics have dictionary entries in one shared location, each linked from every dashboard that shows the metric."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose where the dictionary will live and who can edit it"
                - "Enter the ten shortlisted metrics using the definition standard"
                - "Add a dictionary link to each dashboard that shows those metrics"
                - "Watch three colleagues search for a metric and note what they typed"
                - "Check that every dashboard link to the dictionary still resolves @recurring(monthly:14)"
            - name: Named owner and steward for each key metric
              description: |-
                ## Purpose
                When nobody owns a metric, every disagreement escalates to whoever is most senior in the room. Naming a business owner who decides what the metric means and a technical steward who keeps the calculation matching that meaning gives each dispute somewhere to go and a person who can close it.

                ## Milestones
                1. A business owner and a technical steward proposed for each shortlisted metric.
                2. What owners decide and what stewards decide written in one short paragraph.
                3. Every owner and steward confirmed the role in writing.
                4. Names shown on each dictionary entry, with a deputy for metrics used in the board pack.

                ## Notes
                Owners should sit where the metric's consequences land, not where the data sits. Revenue belongs to finance even if the data team builds it.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each of the ten shortlisted metrics shows a named business owner and technical steward in the dictionary, each confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Propose an owner and a steward for each shortlisted metric"
                - "Write one paragraph on what owners decide and what stewards decide"
                - "Ask each nominee to confirm the role by reply"
                - "Confirm owners and stewards are still in post and reassign any leavers @recurring(quarterly)"
            - name: System of record chosen for each metric
              description: |-
                ## Purpose
                Revenue taken from the CRM, the billing system and the ledger will never match exactly, and pretending otherwise costs a meeting a month. Choosing one system of record per metric, and writing down what the other sources are still good for, ends the debate about whose number is right.

                ## Milestones
                1. Every candidate source listed for each shortlisted metric.
                2. One system of record agreed per metric, with the reason recorded.
                3. The known differences between sources described, such as timing, currency or deleted records.
                4. The chosen source named on each dictionary entry.

                ## Notes
                Finance usually decides the system of record for money metrics. Agree it with them before announcing anything to the wider business.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every shortlisted metric names one system of record in the dictionary, with a written reason and a note on how other sources differ."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every system that could supply each shortlisted metric"
                - "Ask the finance lead which system they report revenue from and why"
                - "Write the reason for each chosen source in one sentence"
                - "Describe how the other sources differ and when they are still useful"
            - name: Reporting calendar and time zone rules
              description: |-
                ## Purpose
                Weeks that start on Sunday in one report and Monday in another, or a month cut at midnight UTC for one team and at local midnight for another, produce gaps that look exactly like data errors. Fixing the week start, fiscal year and reporting time zone once, in writing, removes a whole class of disagreement for good.

                ## Milestones
                1. Week start day, fiscal year start and reporting time zone agreed with finance and the main report owners.
                2. A calendar table or reference sheet mapping each date to its fiscal week, month and quarter.
                3. A rule for showing the current incomplete period, such as month to date against the same days last month.
                4. The calendar rules linked from every dictionary entry.

                ## Notes
                If the company uses a 4-4-5 or 52 and 53 week fiscal calendar, take the exact pattern from finance rather than rebuilding it from memory.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written calendar standard and a date reference table exist, and every certified metric uses the same week start, fiscal year and time zone."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask finance for the fiscal year start and the fiscal week pattern"
                - "Agree the reporting time zone with the owners of the main reports"
                - "Write the rule for displaying the current incomplete period"
                - "Check next year's fiscal calendar is in the reference table before it starts @recurring(yearly)"
            - name: Agreed definition of a customer
              description: |-
                ## Purpose
                Customer count sits underneath half the KPIs in most businesses, as the denominator of revenue per customer, churn rate and conversion. Deciding whether a customer is a person, an account or a paying organisation, and exactly when one starts and stops counting, fixes every metric built on it at once.

                ## Milestones
                1. Customer count pulled from three reports for the same month, with the differences explained.
                2. Rules decided for trials, free plans, paused accounts and several accounts at one company.
                3. Start and end events for counting a customer defined.
                4. The definition published and twelve months of customer count recalculated under it.

                ## Notes
                Where sales genuinely needs to count accounts and finance needs to count billing entities, publish both with distinct names rather than forcing one to win.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A published customer definition covers trials, free plans, pauses and multi-account companies, with twelve months of history recalculated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull customer count from three different reports for the same month"
                - "List the edge cases that explain the differences"
                - "Hold a decision meeting with sales, finance and product"
                - "Recalculate twelve months of customer count under the agreed rule"
            - name: Metric naming and unit conventions
              description: |-
                ## Purpose
                Labels like Rev, Revenue net and Total sales on three dashboards leave readers guessing whether they mean the same thing. A short convention for names, units, currency, rounding and the difference between percent and percentage points stops the confusion before it reaches a meeting.

                ## Milestones
                1. A naming pattern agreed, such as measure, then qualifier, then period.
                2. Rules written for currency codes, rounding, large-number abbreviations and percentage points.
                3. The ten shortlisted metrics renamed to the convention.
                4. Old names kept as searchable aliases in the dictionary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page naming and units convention is published and all ten shortlisted metrics carry compliant names with old names stored as aliases."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the naming pattern with three good and three bad examples"
                - "Set rules for currency, rounding and percentage points"
                - "Rename the shortlisted metrics and record their old names as aliases"
            - name: Change request process for metric definitions
              description: |-
                ## Purpose
                Definitions that anyone can quietly edit are worse than none, because last month's number changes without warning. A light change request, giving the reason, the expected effect on history and the owner's sign-off, keeps definitions stable while still letting them improve.

                ## Milestones
                1. A change request form capturing the metric, the proposed change, the reason and the estimated impact.
                2. Approval rules written for corrections and for redefinitions.
                3. A notice period agreed before a change reaches leadership reports.
                4. The first three change requests taken through the form to a decision.

                ## Notes
                Separate a correction, where the code never matched the written definition, from a redefinition, where the business wants a different meaning. Corrections can move in days; redefinitions need the owner and a notice period.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every definition change in a quarter has a completed change request with an approver, and none reached leadership reports without notice."
                cadence: rolling
              tasks:
                - "Build a change request form with reason and impact fields"
                - "Agree approval rules for corrections and for redefinitions"
                - "Announce the form wherever metric questions usually arrive"
                - "Triage new metric change requests and assign each to its owner @recurring(weekly:tue)"
            - name: Versioned changelog for definition changes
              description: |-
                ## Purpose
                Six months after a definition changes, someone will compare this year with last and see a jump that is really a rule change. A dated changelog on every metric, showing what changed, why and from which period, lets anyone explain a break in a trend line in under a minute.

                ## Milestones
                1. A changelog section on each dictionary entry with date, change, reason and approver.
                2. Every approved change from the past year back-filled.
                3. Chart annotations added wherever a change creates a visible break.
                4. A monthly summary of changes reaching the people who read the reports.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each certified metric has a dated changelog covering the past twelve months, and a monthly change summary has gone out for six consecutive months."
                cadence: rolling
              tasks:
                - "Add a dated changelog section to the dictionary entry template"
                - "Back-fill the past year's changes from tickets and email threads"
                - "Annotate charts where a definition change breaks the trend"
                - "Send report readers a short summary of last month's definition changes @recurring(monthly:3)"
            - name: Quarterly metric owner review
              description: |-
                ## Purpose
                Businesses change faster than their definitions: a new pricing plan, market or sales channel can quietly make a metric mean something else. A quarterly hour with each owner, covering what changed in the business and whether the definition still holds, catches drift before the numbers start to mislead.

                ## Milestones
                1. A quarterly slot booked with each metric owner.
                2. A standard agenda: business changes, open questions, caveats and usage.
                3. Each review ending with keep, amend or retire for every metric covered.
                4. Four quarterly reviews completed within a year.

                ## Notes
                Bring usage figures from the BI tool. A metric nobody has opened in a quarter is a candidate for retirement, not a long discussion.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly owner reviews are completed in twelve months, each recording a keep, amend or retire decision for every metric reviewed."
                cadence: rolling
              tasks:
                - "Book a recurring quarterly slot with each metric owner"
                - "Write a four-point agenda for the owner reviews"
                - "Run the owner reviews and record keep, amend or retire for each metric @recurring(quarterly)"
            - name: Monthly cross-report reconciliation of headline numbers
              description: |-
                ## Purpose
                Even with agreed definitions, two reports can drift apart through a broken filter or a stale extract. Comparing five headline numbers across the board pack, the leadership dashboard and the finance close every month, and explaining any gap above an agreed tolerance, proves the definitions are being followed in practice.

                ## Milestones
                1. Five headline metrics chosen, each with a tolerance such as half a percent for revenue.
                2. A reconciliation sheet comparing each metric across every report that shows it.
                3. Every gap above tolerance explained or fixed before the board pack is sent.
                4. Six months of completed reconciliations kept on file.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reconciliations are on file, with every gap above tolerance explained or corrected before the board pack went out."
                cadence: rolling
              tasks:
                - "Choose five headline metrics and an acceptable tolerance for each"
                - "Build a reconciliation sheet with one column per report"
                - "Compare headline numbers across reports and explain gaps above tolerance @recurring(monthly:5)"
                - "Send any unexplained gap to the metric steward the same day"
            - name: Certification of trusted metrics
              description: |-
                ## Purpose
                Readers cannot tell a carefully defined, tested metric from a chart someone built on a Friday afternoon. A visible certified mark, granted only when a metric has an owner, a dictionary entry, a reference query and a passing check, tells people which numbers are safe to quote upward.

                ## Milestones
                1. Certification criteria written as a short checklist.
                2. A certified label shown in both the BI tool and the dictionary.
                3. The ten shortlisted metrics assessed, and those that pass certified.
                4. Certification set to lapse after twelve months unless renewed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written certification checklist exists and every certified metric shows the label, a pass date and a renewal date within twelve months."
                cadence: rolling
              tasks:
                - "Write the checklist a metric must pass to be certified"
                - "Set up a certified label or badge in the BI tool"
                - "Assess the shortlisted metrics against the checklist"
                - "Renew or withdraw certifications that lapse this month @recurring(monthly:18)"
            - name: Golden numbers regression check
              description: |-
                ## Purpose
                Rewritten queries and new data sources can change a metric's past values without anyone deciding to. Recording reference values for a few closed periods and checking each month that the metric still returns them turns accidental redefinitions into an early warning rather than a surprise in the board meeting.

                ## Milestones
                1. Reference values recorded for each certified metric for three closed months.
                2. A check comparing current output with the reference values.
                3. A tolerance and an owner agreed for each check.
                4. Twelve monthly checks run, with every failure traced to a cause.

                ## Notes
                Choose closed periods that finance has already signed off, so the reference values themselves are beyond dispute.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every certified metric has reference values for three closed months, and twelve monthly checks are logged with each failure explained."
                cadence: rolling
              tasks:
                - "Record reference values for three closed months per certified metric"
                - "Write a query or sheet comparing live output with the references"
                - "Run the golden numbers check and log any differences @recurring(monthly:9)"
            - name: Retiring metrics nobody uses
              description: |-
                ## Purpose
                Every metric in the dictionary costs upkeep, and old variants keep being quoted long after they were replaced. A yearly look at usage, retiring metrics with no viewers and no willing owner, shortens the list people have to understand and removes the stale figures that restart old arguments.

                ## Milestones
                1. Viewing figures pulled for every metric and chart in the BI tool.
                2. Metrics with no views in six months listed with their owners.
                3. Retired metrics marked in the dictionary with the replacement named.
                4. Retired charts removed from shared dashboards.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly retirement review is completed, with every metric unviewed for six months either retired with a named replacement or kept with a reason."
                cadence: cyclic
              tasks:
                - "Export metric and chart viewing figures from the BI tool"
                - "Ask the owners of unviewed metrics whether to keep or retire them"
                - "Mark retired metrics in the dictionary and name the replacement"
                - "Repeat the usage export and retirement review @recurring(yearly)"
            - name: Restatement policy for revised history
              description: |-
                ## Purpose
                When a definition changes, someone has to decide whether last year's figures are recalculated or left as originally reported. A written restatement policy, saying which changes trigger a restatement, how far back it goes and how restated figures are flagged, stops the same argument recurring with every change.

                ## Milestones
                1. Rules for when history is restated and when only future periods change.
                2. A standard footnote format for restated figures.
                3. Treatment of figures already given to the board or investors agreed with finance.
                4. The policy linked from the change request form.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A restatement policy approved by finance is published and linked from the change request form, with a standard footnote in use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the rules for when a definition change restates history"
                - "Agree with finance how restated board figures will be shown"
                - "Write the standard footnote for restated numbers"
                - "Link the policy from the change request form"
            - name: Metric questions inbox and FAQ
              description: |-
                ## Purpose
                The same five questions about a metric get asked in chat every week, each answered slightly differently by whoever replies first. One place to ask, an agreed response time and an FAQ built from real questions turns repeated interruptions into a reference that grows.

                ## Milestones
                1. One channel or form for metric definition questions announced.
                2. A response time agreed, such as two working days.
                3. An FAQ section added to the dictionary from questions actually asked.
                4. The most repeated questions answered inside the definitions themselves.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Definition questions arrive through one channel, are answered within the agreed time, and the dictionary FAQ holds at least ten real questions."
                cadence: rolling
              tasks:
                - "Set up a single channel for metric definition questions"
                - "Answer open definition questions in the channel @recurring(weekly:thu)"
                - "Move the month's most repeated questions into the dictionary FAQ @recurring(monthly:27)"
            - name: Ratio metrics and the denominator trap
              description: |-
                ## Purpose
                Conversion rate, revenue per user and churn rate can all move with nothing changing in the numerator, simply because the denominator moved. Working through how ratios behave, including the gap between a ratio of sums and an average of ratios, helps you define them so a rise means what readers assume it means.

                ## Milestones
                1. One conversion rate calculated both as a ratio of sums and an average of ratios, with the difference explained.
                2. Each shortlisted ratio metric rewritten with an explicit numerator and denominator.
                3. One recent month found where a ratio moved because of its denominator alone.
                4. A denominator rule added to the definition standard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every shortlisted ratio metric states its numerator and denominator separately, and the definition standard includes a written denominator rule."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Calculate one conversion rate as a ratio of sums and as an average of ratios"
                - "Rewrite each shortlisted ratio with its numerator and denominator spelled out"
                - "Find a month where a ratio moved because of its denominator"
                - "Add a denominator rule to the definition standard"
            - name: Choosing between mean, median and percentile
              description: |-
                ## Purpose
                Average order value, average handling time and average response time are usually quoted as means, so one huge order or one ticket stuck for a month drags the whole figure. Learning when a median or a 90th percentile describes the typical case better lets the definition choose the summary, rather than whoever writes the query.

                ## Milestones
                1. The distribution of two value or duration metrics plotted from real data.
                2. Mean, median and 90th percentile compared side by side for each.
                3. A written rule for which summary to use for skewed metrics.
                4. Definitions updated where the current summary misleads.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two skewed metrics have been compared under mean, median and 90th percentile, and their definitions now state which summary is used and why."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Plot the distribution of order value and of ticket handling time"
                - "Compare mean, median and 90th percentile for each metric"
                - "Write a rule for summarising skewed metrics in definitions"
                - "Update any definition where the mean hides the typical case"
            - name: Grain, distinct counts and additivity
              description: |-
                ## Purpose
                Monthly active users is not the sum of four weekly figures, and adding distinct counts across regions counts twice anyone active in both. Understanding grain, and which metrics may be summed across time and dimensions, prevents the most common silent error in reports.

                ## Milestones
                1. Every shortlisted metric classed as additive, semi-additive or non-additive.
                2. The grain of each metric written into its definition, such as one row per order per day.
                3. One report found where a non-additive metric is summed, and corrected.
                4. A line in each dictionary entry saying how the metric may be aggregated.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each shortlisted metric's definition states its grain and whether it is additive, and at least one wrongly summed report has been corrected."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Class each shortlisted metric as additive, semi-additive or non-additive"
                - "Write the grain into each metric's definition"
                - "Search the main dashboards for a non-additive metric being summed"
                - "Add an aggregation line to each dictionary entry"
            - name: Bookings, billings and recognised revenue explained
              description: |-
                ## Purpose
                Sales, finance and the board can each say revenue and mean three different numbers, all correct on their own terms. Learning how bookings, billings, recognised revenue, ARR and MRR differ in your business lets you label each figure precisely instead of trying to crown a single winner.

                ## Milestones
                1. A one-page glossary of bookings, billings, recognised revenue, ARR and MRR in your business's terms.
                2. One annual contract worked through under each measure, month by month.
                3. The accounting policy points that affect each measure noted as finance explains them.
                4. Every revenue figure in the dictionary labelled with the measure it represents.

                ## Notes
                Revenue recognition follows accounting standards and your auditors' view. Take the rules from your finance team: this project is about clear labels, not accounting judgement.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A revenue glossary reviewed by finance exists, and every revenue metric in the dictionary is labelled as bookings, billings, recognised revenue, ARR or MRR."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Book an hour with finance to walk through the revenue measures"
                - "Work one annual contract through each measure month by month"
                - "Write the one-page revenue glossary and send it to finance for review"
                - "Label every revenue metric in the dictionary with its measure"
            - name: Metric tree from the north star down
              description: |-
                ## Purpose
                Flat lists of KPIs say nothing about which ones drive which. Drawing a metric tree, from one top outcome down through the inputs teams can actually move, shows which definitions matter most and where two teams are counting the same driver in different ways.

                ## Milestones
                1. One top-level outcome metric agreed with leadership.
                2. Two or three levels of driver metrics drawn beneath it.
                3. Each node linked to its dictionary entry or flagged as undefined.
                4. The tree reviewed with the managers whose teams own each branch.

                ## Notes
                A tree where every branch adds up arithmetically is rare. It is fine for lower branches to be influences rather than exact components, as long as the tree says which.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A metric tree with at least two levels under one agreed outcome is published, with every node linked to a definition or flagged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask leadership to name the single outcome the business is judged on"
                - "Sketch the driver metrics two levels below that outcome"
                - "Link every node to a dictionary entry or flag it as undefined"
                - "Review each branch with the manager whose team owns it"
            - name: Counter-metrics against gaming
              description: |-
                ## Purpose
                Once a number becomes a target, people find ways to move it that nobody intended: tickets closed early to hit response time, deep discounts to hit bookings. Pairing each targeted metric with a defined counter-metric makes gaming visible without accusing anyone of it.

                ## Milestones
                1. Each targeted KPI listed with the easiest ways it could be gamed.
                2. A counter-metric defined for each, such as reopened tickets beside closure time.
                3. Counter-metrics shown next to their primary metric in reports.
                4. The pairs reviewed after a quarter, with ignored ones replaced.

                ## Notes
                Start from the **Risk register** template to record each gaming risk, its likelihood and the counter-metric that watches it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every KPI with a target has a defined counter-metric shown beside it in reports, recorded in a risk register."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every KPI that has a target or a bonus attached"
                - "Write down the easiest way each one could be gamed"
                - "Define a counter-metric for each and add it to the dictionary"
                - "Review counter-metrics beside their primary metrics @recurring(monthly:20)"
            - name: Checking a metric's logic against its definition
              description: |-
                ## Purpose
                Managers often approve a definition in words and never see the logic that implements it, where the real decisions about filters, joins and missing values are made. Walking through one metric's calculation with its steward, line by line against the written definition, shows non-analysts what to ask before they sign anything off.

                ## Milestones
                1. One metric you own walked through with its steward, step by step.
                2. Each filter and exclusion in the logic matched to a line in the written definition.
                3. Anything in the logic the definition does not mention listed and resolved.
                4. Five standard questions written down to ask about any future metric.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one owned metric has been checked line by line against its definition, with every unexplained step resolved and recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the steward to walk you through the calculation of one metric you own"
                - "Match each filter in the logic to a line in the written definition"
                - "List any step the definition does not mention and agree how to resolve it"
                - "Write five questions to ask before approving any new metric"
            - name: Deciding what counts as an active user
              description: |-
                ## Purpose
                Active user counts can differ by a factor of two depending on whether a login, a page view or a meaningful action qualifies. Choosing the qualifying action, the time window and how bots and staff are treated, with product and marketing in the room, gives one figure everyone can quote.

                ## Milestones
                1. Three candidate activity definitions calculated over the same twelve months.
                2. The qualifying action, window and exclusions agreed and recorded.
                3. Daily, weekly and monthly variants defined from the same rule.
                4. Old active user charts relabelled or retired.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One active user definition naming the qualifying action, window and exclusions is in the dictionary, and older variants are relabelled or retired."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate active users three ways over the same twelve months"
                - "Bring the three series to product and marketing for a decision"
                - "Define daily, weekly and monthly variants from the chosen rule"
                - "Relabel or retire charts that use an older definition"
            - name: Single definition of customer churn
              description: |-
                ## Purpose
                Churn measured by logo or by revenue, monthly or annually, with or without downgrades, gives figures that differ wildly, and teams tend to quote the flattering one. Agreeing which churn measures exist, exactly how each is calculated and which one leadership tracks ends the selective quoting.

                ## Milestones
                1. Every churn figure currently quoted listed with its calculation.
                2. Logo churn, gross revenue churn and net revenue retention each defined precisely.
                3. Rules for downgrades, pauses, mid-period starts and reactivations written down.
                4. One headline churn measure chosen for leadership reporting.

                ## Notes
                Monthly and annual churn are not related by multiplying by twelve. Define both explicitly if both are used.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Logo churn, gross revenue churn and net revenue retention are each defined in the dictionary, and one headline churn measure is recorded for leadership."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect every churn figure quoted in the last quarter and how it was calculated"
                - "Write precise definitions for logo churn and revenue churn"
                - "Decide how downgrades, pauses and reactivations are treated"
                - "Agree the headline churn measure with the leadership team"
            - name: Conversion rate definitions for each funnel step
              description: |-
                ## Purpose
                Funnels measured in sessions at the top and accounts at the bottom produce conversion rates that cannot be chained together. Defining every step with the same counting unit, a clear entry event and a fixed time window makes the funnel add up from first visit to paid.

                ## Milestones
                1. Each funnel step listed with its current counting unit and entry event.
                2. One counting unit chosen for the whole funnel, or each switch point stated.
                3. A conversion window set per step, such as 30 days from trial start to paid.
                4. Step-to-step and end-to-end conversion rates defined in the dictionary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every funnel step has a dictionary entry naming its counting unit, entry event and conversion window, and end-to-end conversion is defined."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each funnel step with the unit it currently counts"
                - "Choose one counting unit or mark where the unit changes"
                - "Set a conversion window for each step with the funnel owner"
                - "Write step and end-to-end conversion definitions in the dictionary"
            - name: Treatment of refunds, credits and currency
              description: |-
                ## Purpose
                Revenue metrics disagree most often on small rules: whether a refund reduces the month of sale or the month of refund, whether credits count, which exchange rate converts foreign sales. Writing these rules into every money metric, matched to what finance does, removes most of the unexplained gaps.

                ## Milestones
                1. Treatment of refunds, chargebacks, credits and discounts written for each revenue metric.
                2. The exchange rate source and date rule agreed with finance.
                3. Inclusion or exclusion of tax and shipping stated in each definition.
                4. One recent month reconciled to finance within tolerance under the new rules.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every revenue metric states its treatment of refunds, credits, tax and currency, and one month reconciles to finance within tolerance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask finance how refunds, credits and chargebacks are booked"
                - "Agree the exchange rate source and which date's rate applies"
                - "Add tax, shipping and refund rules to each revenue definition"
                - "Reconcile one recent month to finance under the new rules"
            - name: Exclusion rules for test, internal and fraud accounts
              description: |-
                ## Purpose
                Test accounts, staff logins, partner sandboxes and fraudulent sign-ups inflate user and conversion counts, and each report usually excludes a different subset. One maintained exclusion list, applied by every certified metric, makes the counts match and keeps them honest.

                ## Milestones
                1. Every category of account to exclude listed and agreed.
                2. A single maintained table or list of excluded accounts.
                3. Every certified metric using the shared exclusion list.
                4. A monthly refresh adding new internal and test accounts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One shared exclusion list exists, every certified metric applies it, and it has been refreshed in each of the last three months."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every type of account that should be excluded from counts"
                - "Build a single exclusion table and name its steward"
                - "Switch each certified metric to use the shared exclusion list"
                - "Add new staff, test and confirmed fraud accounts to the exclusion list @recurring(monthly:11)"
            - name: Choosing where metric logic lives
              description: |-
                ## Purpose
                The same metric calculated separately in the BI tool, a spreadsheet and a warehouse view will drift apart, however good the written definition. Deciding whether metric logic lives in the BI tool, in modelled warehouse tables or in a semantic layer, based on how many tools consume each metric, decides whether one change updates everything.

                ## Milestones
                1. Every tool that displays the shortlisted metrics listed.
                2. The options compared on cost, skills needed, tool coverage and lock-in.
                3. A decision recorded with the reasons and the main trade-off.
                4. A migration order set for moving metric logic to the chosen place.

                ## Notes
                Start from the **Purchase decision** template if the choice involves buying a tool. Teams with one BI tool and few consumers rarely need a separate semantic layer yet.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names where metric logic will live, with options compared on cost, skills, coverage and lock-in, and a migration order agreed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every tool that shows one of the shortlisted metrics"
                - "Compare BI tool, warehouse tables and a semantic layer on four criteria"
                - "Record the decision and the main trade-off accepted"
                - "Set the order in which metrics will move to the chosen place"
            - name: Cut-off rule for late data at period close
              description: |-
                ## Purpose
                Orders that arrive late from a partner, or invoices posted after month end, change last month's figures after they have already been reported. Agreeing a freeze date after which the period is locked, and how late items are treated, keeps reported numbers stable without hiding real activity.

                ## Milestones
                1. The volume of late-arriving records measured for three recent months.
                2. A freeze date after period end agreed with finance.
                3. The treatment of records arriving after the freeze written down.
                4. Frozen period figures stored as snapshots for reporting.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written cut-off rule names the freeze date and the treatment of late records, and three closed months are stored as frozen snapshots."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure how many records arrive after month end for three months"
                - "Agree a freeze date with the finance close team"
                - "Write how late records are reported once a period is frozen"
                - "Confirm the month's freeze date with finance before close @recurring(monthly:28)"
            - name: Target, threshold and colour rules per KPI
              description: |-
                ## Purpose
                A metric shown red on one dashboard and amber on another, because each uses its own threshold, starts the same argument as a mismatched number. Recording the target, the warning threshold and whether up or down is good inside each definition makes status colours consistent wherever the metric appears.

                ## Milestones
                1. Direction of good recorded for every certified metric.
                2. Target and warning threshold set with each owner for the current year.
                3. Status colour rules written once and applied in every dashboard.
                4. Thresholds refreshed when annual targets change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every certified metric's definition records direction of good, target and warning threshold, and dashboards show matching status colours."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record whether up or down is good for each certified metric"
                - "Agree a target and warning threshold with each metric owner"
                - "Apply the same colour rules in every dashboard that shows the metric"
                - "Refresh targets and thresholds when annual targets are set @recurring(yearly)"
            - name: Cross-team definition workshop for contested metrics
              description: |-
                ## Purpose
                Some disagreements cannot be settled by email because each team's number is right for its own purpose. A two-hour workshop with the decision makers, a pre-read comparing the competing calculations and a facilitator who presses for a decision on each metric settles in an afternoon what has run for months.

                ## Milestones
                1. A pre-read showing each competing calculation and its value for the same month.
                2. Decision makers from each team confirmed to attend.
                3. A decision, or explicitly named variants, recorded for each contested metric.
                4. Decisions published to the dictionary within two working days.

                ## Notes
                Start from the **Meeting notes** template. Where two teams genuinely need different numbers, name both clearly, for example gross and net, rather than forcing one.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The workshop is held with every relevant decision maker present, and each contested metric has a recorded decision in the dictionary within two days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the three to five metrics the workshop must settle"
                - "Ask the agent to draft a pre-read comparing each competing calculation"
                - "Book two hours with the decision maker from each team"
                - "Publish the decisions to the dictionary within two working days"
            - name: KPI set sign-off before annual planning
              description: |-
                ## Purpose
                Annual targets set against metrics that get redefined in the second month are meaningless by the third. Getting the planning KPIs defined, certified and signed off by their owners before targets are set means every target refers to a number calculated the same way all year.

                ## Milestones
                1. The KPIs that will carry annual targets listed with their owners.
                2. Each one defined in the dictionary and certified.
                3. Twelve months of history recalculated under the final definitions.
                4. Owner sign-off recorded before the target-setting meeting.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every KPI carrying an annual target is certified and signed off by its owner, with recalculated history, before the target-setting meeting."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the planning lead which KPIs will carry annual targets"
                - "Certify each planning KPI and recalculate its last twelve months"
                - "Collect written sign-off from each owner before targets are set"
                - "Start the planning KPI sign-off two months before planning begins @recurring(yearly)"
            - name: Definitions appendix for the board pack
              description: |-
                ## Purpose
                Board members compare figures across meetings and notice when one moves without explanation. A one-page appendix defining each KPI in the pack, its source and any change since the last meeting answers the questions before they are asked and protects whoever presents the numbers.

                ## Milestones
                1. Every KPI in the board pack listed with a plain-language definition.
                2. Source system and owner shown for each.
                3. A section for definition changes since the previous meeting.
                4. The appendix included in the next board pack and approved by the finance lead.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-page definitions appendix, approved by the finance lead, is included in the next board pack and lists any changes since the last meeting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every KPI that appears in the current board pack"
                - "Write a two-line plain definition and source for each"
                - "Add a changes since last meeting section"
                - "Send the appendix to the finance lead for approval before the pack closes"
            - name: Company launch of the metric dictionary
              description: |-
                ## Purpose
                Nobody checks a dictionary they have never heard of. A short launch, with a five-minute demo at an all-hands, a pinned link in the busiest channels and every key dashboard pointing at it, is what makes people check a definition before they start an argument.

                ## Milestones
                1. At least twenty metrics live in the dictionary before launch.
                2. A five-minute demo given at an all-hands or leadership meeting.
                3. The dictionary link pinned in the main team channels.
                4. Dictionary visits measured one month after launch.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The dictionary is demonstrated at a company-wide meeting with at least twenty metrics live, and visits are measured a month later."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask for a five-minute slot at the next all-hands"
                - "Prepare a demo that looks up one contested metric live"
                - "Pin the dictionary link in the busiest team channels"
                - "Check the dictionary's visit count one month after launch"
            - name: Review after a wrong number reached leadership
              description: |-
                ## Purpose
                Sooner or later a wrong figure appears in a leadership update or board pack. A blameless review within a week, tracing whether the definition, the data or the reporting step failed and fixing that step, turns one embarrassing number into a stronger process and a correction people trust.

                ## Milestones
                1. A correction sent to everyone who received the wrong figure.
                2. A timeline of how the number was produced and where it went wrong.
                3. The failing step classed as definition, data or reporting.
                4. A fix in place and a check added so the same failure is caught next time.

                ## Notes
                Start from the **Remediation plan** template. Send the correction first and investigate second; a quick, plain correction protects trust more than a perfect explanation a week later.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A correction is sent within two working days and a written review names the failing step, the fix and the new check that would catch it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send a short correction to everyone who received the wrong figure"
                - "Trace how the number was produced, step by step"
                - "Decide whether the definition, the data or the reporting step failed"
                - "Add a check that would have caught this error and record it in the plan"
            - name: Inheriting a team's KPIs as a new manager
              description: |-
                ## Purpose
                New managers usually inherit a deck of KPIs with no record of why they were chosen or how they are calculated. Spending the first month learning each one's definition, source and history, before committing to targets, avoids owning numbers you cannot explain to your own boss.

                ## Milestones
                1. Every KPI in the team's deck listed with its dictionary entry or flagged as undefined.
                2. Each metric's last twelve months reviewed with the steward, including any breaks.
                3. Metrics you would keep, change or drop listed with reasons.
                4. A conversation held with your manager before any target is agreed.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within a month, every inherited KPI is either linked to a definition or flagged, with a keep, change or drop list discussed with your manager."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every KPI in the deck you inherited"
                - "Look each one up in the dictionary and flag any without an entry"
                - "Ask the steward to explain any break in the last twelve months"
                - "Bring a keep, change or drop list to your manager before agreeing targets"
            - name: First month as an analyst learning house definitions
              description: |-
                ## Purpose
                New analysts lose weeks rebuilding metrics from raw tables and producing numbers that disagree with the official ones. Learning the house definitions first, by reproducing three certified metrics to the exact value, builds trust with stakeholders before the first request arrives.

                ## Milestones
                1. The definition standard, calendar rules and exclusion list read and understood.
                2. Three certified metrics reproduced to the exact reported value.
                3. Questions from the exercise logged and answered by stewards.
                4. One gap or unclear line in the dictionary fixed through the change request process.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three certified metrics are reproduced exactly from source within the first month, and at least one dictionary improvement is submitted."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the definition standard, calendar rules and exclusion list"
                - "Reproduce three certified metrics to the exact reported value"
                - "Log every question the exercise raises and ask the stewards"
                - "Submit one improvement to an unclear dictionary entry"
            - name: Lightweight definitions for a team without analysts
              description: |-
                ## Purpose
                A ten-person team running on spreadsheets still needs to agree what counts as a lead, a sale and a repeat customer. A one-page definitions sheet for the five numbers the team actually reviews, kept beside the spreadsheet, gives most of the benefit of a full dictionary in an afternoon.

                ## Milestones
                1. The five numbers the team reviews each week or month listed.
                2. A plain definition, source and person responsible written for each.
                3. The sheet pinned beside the team's main spreadsheet or tracker.
                4. The definitions checked again after three months of use.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page sheet defines the team's five reviewed numbers with source and owner, and has been checked after three months."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the five numbers your team looks at most often"
                - "Write a one-line definition and source for each with the team"
                - "Pin the sheet next to the team's main spreadsheet"
                - "Check the definitions still match how the team works after three months"
            - name: Harmonising metrics after a merger or acquisition
              description: |-
                ## Purpose
                Two companies coming together bring two definitions of customer, revenue and churn, and the combined numbers are meaningless until they are reconciled. Mapping both sets side by side, choosing the combined definition and restating history for both sides gives the new organisation one set of figures it can plan on.

                ## Milestones
                1. Both companies' definitions for their top fifteen metrics mapped side by side.
                2. Each difference classed as naming only, rule difference or source difference.
                3. Combined definitions agreed by owners from both sides.
                4. Twelve months of combined history restated under the new definitions.
                5. Legacy definitions retired from both sets of reports.

                ## Notes
                Expect the hardest arguments over customer and revenue. Keep both legacy figures available during the transition so each side can see the bridge from old to new.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The combined organisation reports its top fifteen metrics under single agreed definitions, with twelve months of restated history and a bridge from each legacy figure."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Collect the top fifteen metric definitions from both companies"
                - "Ask the agent to map the two sets side by side and mark each difference"
                - "Agree combined definitions with owners from both sides"
                - "Restate twelve months of history and publish the bridge from old figures"
            - name: Keeping definitions stable through a system migration
              description: |-
                ## Purpose
                Moving to a new CRM, billing or product analytics system changes field names, event logic and record lifecycles, and metrics quietly jump at the cutover. Mapping each definition to the new system before go-live and running both in parallel for a period keeps trend lines continuous.

                ## Milestones
                1. Every certified metric that depends on the old system listed.
                2. Each definition mapped to the new system's fields and events.
                3. Both systems run in parallel for at least one full month with differences explained.
                4. Trend charts annotated at the cutover date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every dependent metric is mapped to the new system and one month of parallel figures shows differences within tolerance or explained."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every certified metric that reads from the system being replaced"
                - "Map each definition to the new system's fields and events"
                - "Compare old and new figures for one full month before switching"
                - "Annotate trend charts at the cutover date"
            - name: Defining key results so they can be measured
              description: |-
                ## Purpose
                Key results written as aims, such as improve onboarding, cannot be scored at the end of the quarter, and ones that cite a metric nobody has defined get scored by argument. Writing each key result against a dictionary metric with a baseline, target and date makes the quarterly score a lookup, not a debate.

                ## Milestones
                1. Every key result for the quarter tied to a named metric.
                2. Each metric defined in the dictionary or added before the quarter starts.
                3. A baseline value recorded for each key result.
                4. End-of-quarter scores taken directly from the defined metrics.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every key result for the quarter names a dictionary metric, a baseline and a target, and is scored from that metric at quarter end."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Rewrite each draft key result to name one measurable metric"
                - "Check each metric is in the dictionary and add any that are missing"
                - "Record the baseline value before the quarter starts"
                - "Score each key result from its defined metric at quarter end"
            - name: Metric definitions as code with automated tests
              description: |-
                ## Purpose
                Once more than a handful of tools consume the same metrics, definitions held in a wiki and logic held elsewhere will separate. Storing each metric's definition and calculation together in version control, with review on every change and tests that run on each merge, makes the written definition and the number the same thing.

                ## Milestones
                1. A file format chosen for metric definitions, holding description, owner and logic together.
                2. The certified metrics moved into the repository.
                3. Every change reviewed by the steward before it is merged.
                4. Automated tests on each merge covering golden numbers, nulls and duplicate keys.
                5. The dictionary generated from the repository rather than edited by hand.

                ## Notes
                Many semantic layer and transformation tools support this pattern. Start with five certified metrics and expand once the review habit holds.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Certified metrics live in version control with owner and logic together, every change is reviewed, and tests run on each merge."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose a file format that holds definition, owner and logic together"
                - "Move five certified metrics into the repository as a pilot"
                - "Require steward review on every change to a metric file"
                - "Add tests for golden numbers, nulls and duplicate keys on each merge"
            - name: Externally reported KPIs and disclosure consistency
              description: |-
                ## Purpose
                KPIs published to investors, lenders or in an annual report carry more weight than internal ones, and a definition changed quietly between periods can mislead outside readers. A controlled definition for each external KPI, reviewed by finance and, where relevant, legal counsel before every release, keeps disclosures consistent from one period to the next.

                ## Milestones
                1. Every KPI disclosed externally listed with where it was published.
                2. A locked definition for each, with finance as owner.
                3. A pre-release check comparing each figure with the prior period's definition.
                4. Any definition change disclosed alongside the figure, with wording approved by finance and counsel.

                ## Notes
                What must be disclosed and how is a question for your finance team, auditors and legal counsel. This project organises the definitions; it does not decide disclosure obligations.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every external KPI has a locked definition owned by finance and passes a documented pre-release consistency check before each publication."
                cadence: rolling
              tasks:
                - "List every KPI the company has published externally in the last two years"
                - "Lock a definition for each with finance as the owner"
                - "Run the consistency check on external KPIs before each release @recurring(quarterly)"
                - "Ask counsel how any definition change should be described"
            - name: Contractual SLA metric definitions with customers
              description: |-
                ## Purpose
                Service levels written into customer contracts, such as uptime or response time, are metrics with money attached through credits and penalties. Defining exactly how each is measured, which hours count, what is excluded and which system is the record, before the first dispute, protects both sides and the account team.

                ## Milestones
                1. Every contractual service level listed with its contract wording.
                2. A measurement definition written for each, including exclusions such as planned maintenance.
                3. Contract wording and measurement definition checked against each other by the contract owner.
                4. A monthly SLA figure produced from the agreed system of record.

                ## Notes
                Where contract wording and internal measurement differ, the contract wins. Raise differences with whoever owns the contract rather than reinterpreting the clause.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each contractual service level has a written measurement definition checked against the contract, and monthly figures come from one agreed system."
                cadence: rolling
              tasks:
                - "Collect the service level clauses from current customer contracts"
                - "Write a measurement definition for each, with its exclusions"
                - "Ask the contract owner to check each definition against the clause"
                - "Produce the monthly SLA figures from the agreed system of record @recurring(monthly:7)"
            - name: Sustainability metric definitions with audit trail
              description: |-
                ## Purpose
                Emissions, energy use and workforce figures increasingly go into reports that customers, lenders and assurance providers examine. Defining each sustainability metric with its boundary, method, emission factor source and evidence trail now means the numbers survive the questions when they come.

                ## Milestones
                1. Each sustainability metric reported listed with the framework it is reported under.
                2. Organisational boundary, method and factor source recorded for each.
                3. Evidence for every input stored and linked from the definition.
                4. One figure traced end to end from source document to reported value.

                ## Notes
                Methods and frameworks differ by country and reporting regime. Take the method from your sustainability lead or assurance provider and record it; do not choose one yourself.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every reported sustainability metric has a definition recording boundary, method and factor source, and one figure has been traced end to end."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List each sustainability metric reported and its framework"
                - "Record the boundary, method and factor source for each with the sustainability lead"
                - "Link the evidence for every input from its definition"
                - "Trace one reported figure end to end back to source documents"
            - name: Defining metrics for AI-assisted features
              description: |-
                ## Purpose
                Features built on language models invite vague success metrics, such as engagement with the assistant, that cannot tell a helpful answer from a confusing one. Defining acceptance, resolution and escalation rates precisely, with the events that count and the human review that calibrates them, gives the team numbers that mean something.

                ## Milestones
                1. The decisions the feature's metrics must support written down.
                2. Acceptance, resolution and escalation rates each defined with qualifying events.
                3. A sampled human review defined to check that the rates match real quality.
                4. Counter-metrics defined, such as repeat contacts after an automated resolution.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The feature has dictionary definitions for acceptance, resolution and escalation, each with qualifying events, a review sample and a counter-metric."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down which decisions the feature's metrics need to support"
                - "Define acceptance, resolution and escalation with their qualifying events"
                - "Set a monthly human review sample to calibrate the rates"
                - "Add a counter-metric for repeat contacts after automated resolution"
            - name: Annual audit of metric definition health
              description: |-
                ## Purpose
                After a year, it is worth checking whether the definitions effort actually reduced disagreement or just produced documentation. An annual audit counting certified metrics, reconciliation gaps, unanswered questions and changes without requests gives leadership an honest picture and sets next year's priorities.

                ## Milestones
                1. Counts gathered: certified metrics, lapsed certifications, open questions and change requests.
                2. Reconciliation gaps above tolerance compared with the previous year.
                3. Definition changes made without a change request identified.
                4. A one-page audit summary with three priorities sent to the sponsor.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A one-page annual audit with year-on-year counts and three named priorities is sent to the sponsor each year."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Count certified, lapsed and uncertified metrics in the dictionary"
                - "Compare this year's reconciliation gaps with last year's"
                - "Find definition changes made without a change request"
                - "Write and send the annual definition health audit @recurring(yearly)"
---

# KPI Metric Definitions

This area is for anyone tired of meetings that open with two different numbers for the same thing: the analyst who gets asked which one is right, the manager who has to present it and the team whose work it measures. It starts with the foundations (an inventory of today's metrics, a definition standard, a dictionary, owners, sources and calendar rules), moves through the routines that keep definitions honest and the skills behind well-made metrics, then the hard decisions on customers, revenue, churn and active users, dated events such as a definition workshop and a board appendix, situations from inheriting a team's KPIs to a merger, and finally specialist work like metrics as code and externally reported KPIs.

What repeats is a weekly triage of change requests and definition questions, a monthly reconciliation, golden numbers check, changelog and exclusion list refresh, quarterly owner reviews, and a yearly retirement review and audit. The Meeting notes, Risk register, Purchase decision and Remediation plan templates pair with the definition workshop, counter-metrics, the choice of where metric logic lives and the review after a wrong number. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
