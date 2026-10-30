---
id: data-analytics.business-intelligence-dashboards
name: Business Intelligence Dashboards
description: "Dashboards built from each team's real questions, with named owners, reconciled numbers, fast load times and a monthly prune of the charts nobody opens."
category: business
version: 1.0.0
tags: [data-analytics, business-intelligence-dashboards, knowledge-worker, team, manager, bi-tools, dashboard-design, reporting]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - remediation-plan
    - operational-checklist
    - feedback-themes
    - onboarding-30-60-90
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Business Intelligence Dashboards
          description: "Building dashboards in BI tools that answer real questions for each team, kept fast, trustworthy and pruned of charts nobody reads."
          projects:
            - name: Dashboard estate inventory with owners and view dates
              description: |-
                ## Purpose
                Before building anything new, list what already exists. Most BI workspaces older than two years hold several hundred dashboards, many of them copies, and nobody can say which version finance actually uses. An inventory of every dashboard with its owner, data source, last edit and last view is the map every later decision in this area depends on.

                ## Milestones
                1. Every dashboard in the BI workspace listed with its folder, creator and data source.
                2. Last edited and last viewed dates added from the tool's admin or audit pages.
                3. Each row tagged keep, review or likely retire.
                4. The inventory saved where the whole data team can open it.

                ## Notes
                Most BI tools expose this through an admin portal, an activity log or a system usage dataset. Export it rather than clicking through folders by hand.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A spreadsheet lists every dashboard in the workspace with owner, source, last edit and last view date, each tagged keep, review or retire."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find where your BI tool reports content usage, such as an admin portal or audit log"
                - "Export the full list of dashboards with creator, folder and data source"
                - "Add last viewed and last edited dates to each row"
                - "Tag every dashboard keep, review or likely retire"
            - name: Ninety-day dashboard usage baseline
              description: |-
                ## Purpose
                Usage figures settle arguments that opinions cannot. Counting distinct viewers and views per dashboard over the last ninety days shows which handful carry the business, which are opened once a quarter and which have not been opened since their author left. Taking the baseline now gives a before figure for every pruning and consolidation project that follows.

                ## Milestones
                1. Views and distinct viewers per dashboard for the last ninety days extracted.
                2. The top twenty dashboards by distinct viewers named, with their owning teams.
                3. Dashboards with zero views in ninety days counted and listed.
                4. The baseline dated and stored beside the inventory.

                ## Notes
                Distinct viewers is a better signal than raw views: one analyst refreshing a page forty times while debugging is not demand.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated ninety-day usage baseline shows views and distinct viewers per dashboard, with the top twenty and the zero-view list named."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check how many days of usage history your BI tool keeps by default"
                - "Pull views and distinct viewers per dashboard for the last ninety days"
                - "Rank dashboards by distinct viewers and name the top twenty"
                - "List every dashboard with zero views in the period"
            - name: Business questions register for each team
              description: |-
                ## Purpose
                Dashboards built around whatever data is available end up as walls of charts; dashboards built around questions get used. Sitting with each team for half an hour and writing down the five to ten questions they need answered each week, and what they would do differently with each answer, gives every future dashboard a reason to exist and a test it must pass.

                ## Milestones
                1. A half-hour conversation held with each team that relies on reporting.
                2. Five to ten questions recorded per team, each with the decision it informs.
                3. Questions matched to existing dashboards where one already answers them.
                4. Unanswered questions ranked by how often the team asks them.

                ## Notes
                Ask what the team did the last time the number moved. If the answer is nothing, the chart may not need to exist.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A register holds at least five questions per team, each linked to a decision and to the dashboard that answers it or marked unanswered."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the teams that use dashboards and one contact in each"
                - "Book a thirty-minute question session with each team contact"
                - "Record each question with the decision it informs and how often it comes up"
                - "Match each question to an existing dashboard or mark it unanswered"
            - name: Named owner and steward for every shared dashboard
              description: |-
                ## Purpose
                A dashboard without an owner keeps showing numbers long after its logic stopped being right. Giving every shared dashboard a named business owner, who decides what it should answer, and a technical steward, who keeps it working, means broken tiles get fixed and dead dashboards get retired by someone with the authority to do so.

                ## Milestones
                1. Every dashboard tagged keep in the inventory has a business owner and a technical steward named.
                2. Owners and stewards have confirmed in writing that they accept the role.
                3. The owner's name shown in each dashboard's header or description.
                4. A rule agreed for reassigning ownership when someone changes role or leaves.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every kept shared dashboard shows a named business owner and technical steward, and each has accepted the role in writing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add owner and steward columns to the dashboard inventory"
                - "Propose an owner and a steward for each kept dashboard"
                - "Send each proposed owner a short note asking them to accept"
                - "Add the owner's name to each dashboard's description field"
            - name: Workspace folder structure and naming convention
              description: |-
                ## Purpose
                Search fails when one folder holds 'Sales v2 final', 'Sales NEW' and 'Copy of Sales'. A folder per team, a separate sandbox for drafts and a naming pattern built from team, subject and audience lets people find the right dashboard in seconds and tells them at a glance whether it is finished.

                ## Milestones
                1. A folder layout agreed with one area per team plus shared, sandbox and archive folders.
                2. A naming pattern written down with three worked examples.
                3. Every kept dashboard moved and renamed to the pattern.
                4. Personal and draft work confined to the sandbox folder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All kept dashboards sit in the agreed folder layout and follow the written naming pattern, with drafts confined to the sandbox."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch a folder layout with team, shared, sandbox and archive areas"
                - "Write a naming pattern and three example names"
                - "Move and rename every dashboard tagged keep"
                - "Tell users where things moved and leave links where the tool allows"
            - name: Certified and exploratory content tiers
              description: |-
                ## Purpose
                Viewers cannot tell a checked board-level dashboard from an analyst's half-finished experiment when both look the same. Splitting content into a small certified tier, reconciled and owned with a published refresh schedule, and an exploratory tier marked as unverified, tells people which numbers they can safely quote in a meeting.

                ## Milestones
                1. Written criteria for certification covering owner, reconciliation, documentation and refresh schedule.
                2. The ten most viewed dashboards reviewed against the criteria.
                3. Certified dashboards carrying the tool's endorsement badge or a clear label.
                4. Exploratory content labelled as unverified in its title or banner.

                ## Notes
                Keep the certified tier small. If everything is certified, the badge means nothing.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written certification criteria exist and at least ten dashboards have been reviewed, with passing ones badged and the rest labelled exploratory."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft the four or five criteria a dashboard must meet to be certified"
                - "Agree the criteria with two dashboard owners"
                - "Review the ten most viewed dashboards against the criteria"
                - "Apply the certified badge or label to every dashboard that passes"
            - name: Dashboard style guide for colours, fonts and number formats
              description: |-
                ## Purpose
                Ten dashboards using ten colour schemes, three date formats and revenue shown in both thousands and millions make every comparison harder than it needs to be. A one-page style guide with a palette, a highlight colour, font sizes, number and date formats and a standard header turns consistency into a default rather than a debate in every review.

                ## Milestones
                1. A palette chosen with one highlight colour, one neutral and agreed colours for good and bad.
                2. Rules for number formats, units, decimals and dates written down.
                3. A standard header showing title, owner, data freshness and a help link.
                4. A theme file or template dashboard built in the BI tool from the guide.

                ## Notes
                Check the palette with a colour-blindness simulator before publishing it. Red and green alone should never carry the meaning.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page style guide and a matching theme or template exist in the BI tool, and every dashboard published since uses them."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect screenshots of five existing dashboards to show the current inconsistency"
                - "Choose a palette, highlight colour and number and date formats"
                - "Build a theme file or template dashboard that applies the guide"
                - "Revisit the style guide with the people who build dashboards @recurring(yearly)"
            - name: Access groups and permission model for the BI workspace
              description: |-
                ## Purpose
                Granting dashboard access person by person works for twenty users and collapses at two hundred, usually with a leaver still able to see payroll figures. Mapping access to groups that follow teams and roles, with sensitive dashboards behind their own restricted groups, makes joiners, movers and leavers a single change and makes an access audit answerable in minutes.

                ## Milestones
                1. Groups defined by team and role, mirrored from the company directory where possible.
                2. Sensitive dashboards such as pay, people and customer data placed behind restricted groups.
                3. Individual grants replaced with group membership.
                4. A quarterly review of who sits in the restricted groups in place.

                ## Notes
                Agree with your security or data protection lead which dashboards count as sensitive. That decision is theirs, not the BI team's.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All workspace access runs through named groups, sensitive dashboards sit behind restricted groups and no individual grants remain."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export the current users and individual permissions from the BI tool"
                - "Draft groups by team and role and mark which dashboards are sensitive"
                - "Move individual grants into group membership"
                - "Review membership of the restricted groups with their owners @recurring(quarterly)"
            - name: One-page brief before any new dashboard
              description: |-
                ## Purpose
                Half the dashboards that go unused were built from a one-line request and a guess at what was meant. A one-page brief covering the audience, the questions, the decisions, the refresh need and what success looks like after a month takes twenty minutes to fill in and saves weeks of rebuilding.

                ## Milestones
                1. A brief template with audience, questions, decisions, data sources, refresh frequency and success measure.
                2. Three recent dashboard requests rewritten as briefs to test the format.
                3. The brief required before any build starts.
                4. Each brief stored with the finished dashboard for later review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dashboard brief template exists and every dashboard started since its adoption has a completed brief stored alongside it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page brief template with audience, questions, decisions and refresh need"
                - "Rewrite three recent dashboard requests as briefs to test the format"
                - "Agree with the data team that no build starts without a brief"
                - "Ask the agent to turn a rough email request into a first draft brief"
            - name: Reconciling headline dashboard numbers to source systems
              description: |-
                ## Purpose
                One wrong revenue figure in front of the leadership team costs more trust than fifty correct ones earn back. Reconciling each certified dashboard's headline numbers against the finance system, the CRM or the billing tool, and writing down any expected difference and why, means the 'that does not match my report' question gets an answer backed by evidence.

                ## Milestones
                1. The headline numbers on each certified dashboard listed with their system of record.
                2. Each figure compared with the source for the same period and filters.
                3. Every gap explained in writing, such as timing, currency or refunds.
                4. A monthly reconciliation routine running for the top five figures.

                ## Notes
                Agree the definition with the metric owner first. Reconciliation checks the dashboard against the agreed definition; it does not invent one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each certified dashboard's headline figures have been reconciled to the source system, with every difference explained in a written note."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the headline numbers on each certified dashboard and their system of record"
                - "Compare last month's figures with the source using identical filters"
                - "Write a one-line explanation for every gap you find"
                - "Reconcile the top five headline figures against source @recurring(monthly:5)"
            - name: Monthly prune of unused dashboards
              description: |-
                ## Purpose
                Every unused dashboard still refreshes, still takes up licences and compute, and still turns up in search to confuse someone. A monthly pass that flags anything with no distinct viewers in sixty days, warns its owner and archives it after a fortnight's grace keeps the workspace small enough to trust.

                ## Milestones
                1. A written threshold for flagging, such as no viewers in sixty days.
                2. An owner warning message with a two-week grace period.
                3. Flagged dashboards moved to the archive folder rather than deleted.
                4. Six monthly prunes completed, each with the number archived recorded.

                ## Notes
                Archive first and delete much later. Someone always needs the year-end dashboard in January.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly prunes are recorded, each listing dashboards flagged, owners warned and items archived."
                cadence: rolling
              tasks:
                - "Agree the inactivity threshold and grace period with dashboard owners"
                - "Flag dashboards with no distinct viewers in sixty days and warn their owners @recurring(monthly:9)"
                - "Move dashboards past their grace period into the archive folder"
                - "Record how many dashboards were archived this month"
            - name: Weekly health check of certified dashboards
              description: |-
                ## Purpose
                Failed refreshes and broken tiles are usually reported by the most senior person to open the dashboard, at the worst possible moment. Ten minutes every Monday reviewing refresh failures, error tiles and stale data on the certified dashboards catches problems before the weekly meetings that rely on them.

                ## Milestones
                1. A short checklist covering refresh status, error tiles, stale dates and broken links.
                2. Refresh failure alerts from the BI tool routed to the steward's inbox or channel.
                3. The certified dashboards checked every Monday morning.
                4. Each failure logged with its cause and fix.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly health checks are logged, with every refresh failure on a certified dashboard recorded alongside its fix."
                cadence: rolling
              tasks:
                - "Turn on refresh failure notifications for every certified dashboard"
                - "Check refresh status and error tiles on the certified dashboards @recurring(weekly:mon)"
                - "Log each failure with its cause and the fix applied"
                - "Raise any source that fails three times in a month with its pipeline owner"
            - name: Quarterly dashboard review with each owning team
              description: |-
                ## Purpose
                Questions change faster than dashboards do: a new product line, a changed target or a redrawn sales region can make last year's layout misleading. A forty-five-minute review each quarter with the owning team, checking each tile against the questions register and the usage figures, decides what to add, change or remove.

                ## Milestones
                1. A review agenda covering usage, questions answered, missing questions and tiles to remove.
                2. Each team's main dashboard reviewed once a quarter.
                3. Agreed changes logged with an owner and a target date.
                4. At least one tile removed or simplified per review on average.

                ## Notes
                Start from the **Meeting notes** template so each review's decisions sit in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every team with a certified dashboard has held a quarterly review in the last three months, with agreed changes logged and assigned."
                cadence: cyclic
              tasks:
                - "Draft a forty-five-minute agenda using usage figures and the questions register"
                - "Hold the dashboard review with each owning team @recurring(quarterly)"
                - "Log every agreed change with an owner and a target date"
                - "Tell the team when their changes are live"
            - name: Data freshness labels and refresh schedule upkeep
              description: |-
                ## Purpose
                Many viewers assume a dashboard shows this morning's numbers when it actually refreshed last Thursday. Showing a last-refreshed time on every dashboard, and keeping refresh schedules lined up with when the upstream data actually lands, removes a whole class of wrong decisions and awkward meetings.

                ## Milestones
                1. A visible last-refreshed time on every certified dashboard.
                2. Each refresh schedule set to run after its source data finishes loading.
                3. Wasted refreshes, such as hourly refreshes of daily data, removed.
                4. A monthly check that schedules still match source load times.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every certified dashboard shows a last-refreshed time and its refresh runs after its source data lands, checked each month for six months."
                cadence: rolling
              tasks:
                - "Add a last-refreshed time to the header of each certified dashboard"
                - "Ask the pipeline owners when each source finishes loading"
                - "Remove hourly refreshes on dashboards built from daily data"
                - "Compare refresh schedules against source load times @recurring(monthly:16)"
            - name: Dashboard change log and monthly release notes
              description: |-
                ## Purpose
                When a number moves because someone changed a filter or a calculation, viewers assume the business moved. Logging every change to a certified dashboard and sending a short monthly note of what changed, and why, stops false alarms and gives owners an audit trail when a figure is challenged.

                ## Milestones
                1. A change log recording date, dashboard, change, reason and approver.
                2. Changes that alter a headline number flagged on the dashboard itself for two weeks.
                3. A short release note sent to dashboard users each month.
                4. Six months of changes recorded without gaps.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A change log covers six months of edits to certified dashboards, and a release note has gone out in each of those months."
                cadence: rolling
              tasks:
                - "Create a change log with date, dashboard, change, reason and approver"
                - "Add a temporary banner to any dashboard whose headline number changed definition"
                - "Send a short release note of the month's dashboard changes @recurring(monthly:27)"
            - name: Load time watch on the twenty most used dashboards
              description: |-
                ## Purpose
                People give up on a dashboard that takes more than about ten seconds to load and go back to messaging an analyst. Timing the twenty most used dashboards once a month, against a target such as five seconds for the first view, shows which ones are slowing as data grows, long before users start complaining.

                ## Milestones
                1. A load time target agreed for certified dashboards.
                2. First-view load times recorded monthly for the top twenty dashboards.
                3. Any dashboard over target for two months in a row given a fix ticket.
                4. A year of monthly load times kept as a trend.

                ## Notes
                Start from the **Metrics log** template. Time the first load with a cleared cache, because that is what a viewer opening it on Monday morning sees.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly load time readings exist for the top twenty dashboards, and every dashboard over target for two months has a fix ticket."
                cadence: rolling
              tasks:
                - "Agree a first-view load time target with the data team"
                - "Set up a load time log from the metrics log template"
                - "Time the first view of the twenty most used dashboards @recurring(monthly:12)"
                - "Open a fix ticket for any dashboard over target two months running"
            - name: Quarterly BI licence and seat review
              description: |-
                ## Purpose
                BI licences are often bought in bulk for a launch and never revisited, so a fifth of paid creator seats can belong to people who have not logged in for months. Comparing seats with last login each quarter, and moving occasional users to cheaper viewer licences, recovers money that can pay for training or performance work.

                ## Milestones
                1. A list of every licence with its type, holder and last login date.
                2. Seats inactive for ninety days reclaimed after a warning.
                3. Creator licences held only by people who published something in the last quarter.
                4. Each quarter's saving recorded and reported to the budget holder.

                ## Notes
                This covers BI tool seats only. Warehouse query and storage costs belong with whoever runs the data platform.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly licence reviews are recorded, each listing seats reclaimed or downgraded and the saving reported to the budget holder."
                cadence: cyclic
              tasks:
                - "Export all licences with type, holder and last login from the admin console"
                - "Warn holders of seats unused for ninety days before reclaiming them"
                - "Review seats against last login and publishing activity @recurring(quarterly)"
                - "Send the quarter's saving to the budget holder"
            - name: Dashboard feedback channel and weekly triage
              description: |-
                ## Purpose
                Viewers who spot a problem usually mention it in a meeting or a private message, and it is forgotten by Friday. A single feedback route linked from every dashboard header, with a weekly half-hour triage that sorts reports into bugs, questions and requests, turns grumbling into a list the team can work through.

                ## Milestones
                1. One feedback route linked from every certified dashboard.
                2. Each report sorted as a bug, question or change request within a week.
                3. Bugs on certified dashboards acknowledged within two working days.
                4. A monthly count of reports by type and dashboard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every certified dashboard carries a feedback link and twelve weekly triage sessions are logged, with bugs acknowledged within two working days."
                cadence: rolling
              tasks:
                - "Set up one feedback form or channel for dashboard issues"
                - "Add the feedback link to every certified dashboard header"
                - "Sort the week's feedback into bugs, questions and requests @recurring(weekly:thu)"
                - "Reply to each reporter with what will happen next"
            - name: Scheduled report and subscription clean-up
              description: |-
                ## Purpose
                Emailed dashboard snapshots pile up silently: subscriptions set up for a project two years ago still land in forty inboxes every morning, and some go to people who have left. Reviewing subscriptions monthly, removing unwanted ones and pointing people back to the live dashboard cuts noise and the risk of sensitive figures being emailed to the wrong place.

                ## Milestones
                1. A list of every scheduled subscription with its recipients and frequency.
                2. Subscriptions to departed staff and outside addresses removed.
                3. Owners of the largest subscriptions asked whether they are still needed.
                4. A monthly check of new subscriptions on sensitive dashboards.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every scheduled subscription has been reviewed, departed and outside recipients removed, and a monthly check recorded for six months."
                cadence: rolling
              tasks:
                - "Export all scheduled subscriptions with recipients and frequency"
                - "Remove subscriptions going to departed staff or outside addresses"
                - "Ask owners of the five largest subscriptions whether they still need them"
                - "Check new subscriptions on sensitive dashboards @recurring(monthly:21)"
            - name: Correcting a dashboard that showed a wrong number
              description: |-
                ## Purpose
                Sooner or later a certified dashboard will show a wrong figure that someone has already quoted. Having a written process ready, covering who confirms the error, how users are told, how the fix is checked and how the cause is recorded, turns an embarrassing moment into evidence that the dashboards are looked after.

                ## Milestones
                1. A written process for confirming, announcing, fixing and closing a dashboard error.
                2. Banner wording ready to place on an affected dashboard.
                3. A list, per certified dashboard, of who must be told when a headline figure was wrong.
                4. Each incident closed with a short cause note and one prevention step.

                ## Notes
                Start from the **Remediation plan** template for each incident. Tell people quickly and plainly; a short honest note keeps more trust than a silent fix.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written error process exists with banner wording and notification lists, and every incident since adoption has a closed cause note."
                cadence: rolling
              tasks:
                - "Write the four steps for confirming, announcing, fixing and closing an error"
                - "Draft the banner wording to place on an affected dashboard"
                - "List who needs to hear about an error on each certified dashboard"
                - "Close each incident with a cause note and one prevention step"
            - name: Choosing the right chart for each dashboard tile
              description: |-
                ## Purpose
                Pie charts with nine slices, dual-axis lines that imply a link that is not there and gauges that use half the screen for one number are the commonest reasons a dashboard is hard to read. Learning which chart answers which kind of question, such as change over time, ranking, part of a whole or distribution, lets you pick in seconds and explain the choice.

                ## Milestones
                1. A one-page chart chooser covering trend, ranking, composition, distribution and relationship.
                2. Five tiles on an existing dashboard redrawn with a better chart type.
                3. Before and after versions shown to two regular viewers and their preference noted.
                4. The chooser added to the style guide.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written chart chooser exists and five redrawn tiles have each been tested on two regular viewers, with their preferences recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a reputable chart selection guide and note the question each chart answers"
                - "Write a one-page chart chooser for your team"
                - "Redraw five tiles on a live dashboard using the chooser"
                - "Show before and after versions to two regular viewers"
            - name: Layout and visual hierarchy on a single screen
              description: |-
                ## Purpose
                Readers scan a dashboard from the top left, so the most important number belongs there and the detail belongs lower down. Learning a simple structure, with headline figures first, trends next and breakdowns and tables last, and fitting it on one screen without scrolling, is the quickest way to make a crowded dashboard usable.

                ## Milestones
                1. The top-left placement and summary-to-detail order written down as a rule.
                2. A grid with consistent spacing and alignment set up in the BI tool.
                3. One crowded dashboard rearranged to fit one screen with the headline at top left.
                4. The time viewers take to find the key number compared before and after.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One crowded dashboard is rearranged into headline, trend and detail rows on a single screen, with before and after timings recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick the most crowded dashboard your team uses"
                - "Sketch it on paper as headline, trend and detail rows"
                - "Rebuild it on a consistent grid that fits one screen"
                - "Time two colleagues finding the key number before and after"
            - name: Filters, parameters and drill-through design
              description: |-
                ## Purpose
                Twelve filters along the top of a dashboard usually mean nobody agreed what it was for. Learning when to use a filter, a parameter, a drill-through page or a separate dashboard, and setting sensible defaults, keeps the opening view meaningful while still letting people answer their follow-up questions.

                ## Milestones
                1. The difference between filters, parameters, drill-down and drill-through understood in your tool.
                2. Default filter values chosen so the opening view answers the main question.
                3. A drill-through page built from a summary tile to its detail.
                4. Filters on one dashboard cut to the five people actually use.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One dashboard is reduced to at most five filters with meaningful defaults and has one working drill-through page from summary to detail."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your BI tool's documentation on filters, parameters and drill-through"
                - "Check usage logs or ask viewers which filters they actually change"
                - "Set default filter values that answer the main question on opening"
                - "Build one drill-through page from a summary tile to its detail rows"
            - name: Calculated fields in your BI tool's formula language
              description: |-
                ## Purpose
                Each BI tool has its own formula language, such as DAX, LookML, table calculations or level-of-detail expressions, and most dashboard bugs come from not knowing when a calculation runs. Working through the evaluation order, filter context and aggregation rules with real examples prevents the classic errors: averages of averages, totals that ignore filters and ratios summed across rows.

                ## Milestones
                1. The tool's order of operations for filters and calculations written as a one-page note.
                2. Ten practice calculations built, including a ratio, a running total and a year-on-year change.
                3. An average-of-averages or summed-ratio error found and fixed on a real dashboard.
                4. Reusable calculations moved into the shared dataset rather than individual tiles.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten practice calculations have been built and checked against hand-worked answers, and one real calculation error found and fixed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find your BI tool's official guide to calculation and filter order"
                - "Write a one-page note on when filters apply to each calculation type"
                - "Build ten practice calculations and check each against a hand-worked answer"
                - "Search a live dashboard for a ratio or average that is aggregated wrongly"
            - name: Performance basics of extracts, live queries and aggregations
              description: |-
                ## Purpose
                Slow dashboards are rarely the BI tool's fault: they usually query millions of rows to draw a chart of twelve monthly totals. Understanding the difference between live connections and extracts or imports, how aggregate tables and caching work in your tool, and how to read its performance recorder means you can diagnose a slow dashboard instead of guessing.

                ## Milestones
                1. The tool's connection modes and their trade-offs written up in plain words.
                2. The performance recorder or query log used to time each tile on one dashboard.
                3. The slowest tile traced to its query and the number of rows it scans.
                4. One fix applied, such as an aggregate table, an extract or fewer tiles, and the dashboard retimed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One dashboard's tiles have been timed with the performance recorder, the slowest traced to its query, and a fix retimed and recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read your BI tool's guide to connection modes and caching"
                - "Run the performance recorder on one slow dashboard and time each tile"
                - "Trace the slowest tile to its query and note how many rows it scans"
                - "Apply one fix and retime the dashboard"
            - name: Accessible dashboards for colour-blind and screen reader users
              description: |-
                ## Purpose
                Roughly one in twelve men has some form of colour vision deficiency, yet red and green status colours are still the default on many dashboards. Learning to design with contrast, labels and patterns, to set alt text and tab order, and to offer a table view beside charts makes dashboards usable by everyone and is often an organisational accessibility requirement.

                ## Milestones
                1. Your organisation's accessibility standard, such as a WCAG level, confirmed.
                2. One dashboard checked with a colour-blindness simulator and a contrast checker.
                3. Status shown with labels or icons as well as colour.
                4. Alt text, titles and keyboard tab order set on every tile of that dashboard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One certified dashboard passes a colour-blindness simulation and contrast check, with alt text and tab order set on every tile."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask who owns accessibility standards in your organisation and which level applies"
                - "Run a certified dashboard through a colour-blindness simulator"
                - "Add labels or icons wherever colour alone carries meaning"
                - "Set alt text and keyboard tab order for each tile"
            - name: Comparisons, targets and annotations on headline tiles
              description: |-
                ## Purpose
                A tile reading 4,312 tells the viewer nothing until it says compared with what. Learning to add the right comparison, such as last period, the same period last year or target, to mark known events like a price change or an outage on trend lines, and to show variance clearly, turns a scoreboard into something people can act on.

                ## Milestones
                1. Each headline tile on one dashboard paired with a comparison and its direction.
                2. Targets shown wherever an agreed target exists.
                3. Known events marked on trend charts with short annotations.
                4. Variance shown as both an absolute and a percentage where both matter.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every headline tile on one dashboard shows a comparison, a target where one exists, and annotations for known events on its trend charts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark each headline number on one dashboard that is shown without a comparison"
                - "Agree with the owner which comparison matters for each tile"
                - "Add targets where an agreed target exists"
                - "Annotate the trend charts with the past year's known events"
            - name: Consolidating duplicate revenue dashboards into one
              description: |-
                ## Purpose
                It is common to find four or five revenue dashboards, built by sales, finance and marketing, each treating refunds or currency slightly differently. Choosing one, fixing its definitions with the metric owner, redirecting the others and archiving them ends the meeting where three people bring three numbers.

                ## Milestones
                1. Every dashboard showing revenue found and its definition differences listed.
                2. One dashboard chosen as the survivor, with the metric owner's agreement.
                3. Views missing from the survivor added as pages or filters.
                4. The duplicates archived with a note pointing to the survivor.

                ## Notes
                The same method works for headcount, pipeline or active users. Start with whichever number causes the most arguments.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One revenue dashboard remains, agreed by the metric owner, and every former duplicate is archived with a pointer to it."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Search the workspace for every dashboard that shows revenue"
                - "List how each one treats refunds, tax, currency and dates"
                - "Agree the surviving dashboard with the revenue metric owner"
                - "Add a pointer to the survivor on each duplicate, then archive them"
            - name: Rebuilding the slowest certified dashboard
              description: |-
                ## Purpose
                Your slowest heavily used dashboard is costing hundreds of people a few minutes every week. Rebuilding it with fewer tiles, pre-aggregated data and sensible default filters, and timing it before and after, usually brings it under the load target and gives you a pattern for the others.

                ## Milestones
                1. Load time measured three times before any change.
                2. Tiles cut to those the questions register says are needed.
                3. Heavy queries moved to aggregated tables or extracts.
                4. The rebuilt dashboard loading under target on first view, measured three times.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The slowest certified dashboard loads under the agreed target on three separate first-view timings after the rebuild."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick the slowest dashboard from the load time log"
                - "Time its first view three times with a cleared cache"
                - "Remove tiles that no question in the register needs"
                - "Point the heavy tiles at an aggregated table or extract and retime"
            - name: Finding out why people export dashboards to spreadsheets
              description: |-
                ## Purpose
                Heavy export use is a signal, not a sin: people download to spreadsheets when a dashboard misses a breakdown, a calculation or a format they need. Looking at which dashboards are exported most and asking five frequent exporters what they do next shows exactly what to add.

                ## Milestones
                1. The ten most exported dashboards identified from usage logs.
                2. Five frequent exporters asked what they do with the download.
                3. Common reasons grouped, such as a missing breakdown, a custom calculation or slide preparation.
                4. At least two changes shipped that remove the need to export.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five exporters have been interviewed, their reasons grouped, and two changes shipped that reduce exports from the most exported dashboard."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the ten most exported dashboards in the usage logs"
                - "Ask five frequent exporters what they do with the download"
                - "Group their answers into a short list of reasons"
                - "Check the export counts for the most exported dashboards @recurring(monthly:25)"
            - name: Replacing a manual slide-deck report with a live dashboard
              description: |-
                ## Purpose
                Someone in most teams spends a day each month copying numbers from the BI tool into slides, introducing errors along the way. Replacing that deck with a live dashboard laid out in the same order, plus a short commentary box, gives the time back and removes copy-paste mistakes, as long as the audience agrees to the switch.

                ## Milestones
                1. The current deck mapped slide by slide to its data sources.
                2. A dashboard built that follows the deck's order and layout.
                3. Deck and dashboard run side by side for one cycle with matching numbers.
                4. The audience agreed to drop the deck, and the hours saved recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A monthly deck is retired after one side-by-side cycle with matching numbers, and the hours saved each month are recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Ask the deck's author how long it takes each month and where the numbers come from"
                - "Map each slide to the dashboard tile that will replace it"
                - "Run the deck and the dashboard side by side for one cycle"
                - "Agree with the audience to retire the deck"
            - name: Shared datasets behind dashboards instead of per-report logic
              description: |-
                ## Purpose
                When every dashboard carries its own copy of the joins and calculations, a fix in one leaves the other nine wrong. Moving common logic into a small number of shared, owned datasets or semantic models inside the BI tool means a definition changes once and every dashboard built on it follows.

                ## Milestones
                1. Dashboards grouped by the data they use, showing where logic is duplicated.
                2. One or two shared datasets or semantic models built with owned definitions.
                3. The ten most used dashboards repointed to the shared datasets with matching numbers.
                4. New dashboards required to build on a shared dataset where one fits.

                ## Notes
                Heavier modelling belongs in the warehouse with the analytics engineers; this project tidies the model layer inside the BI tool.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ten most used dashboards draw from shared, owned datasets, and no dashboard published since carries its own copy of shared logic."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the datasets behind the ten most used dashboards"
                - "Mark calculations and joins that appear in more than one of them"
                - "Build a shared dataset with those calculations and a named owner"
                - "Repoint the ten dashboards to the shared dataset and check the numbers match"
            - name: Phone layouts for dashboards checked on the move
              description: |-
                ## Purpose
                Usage logs often show managers opening a handful of dashboards on their phones before the first meeting of the day, and a desktop layout shrunk to a phone screen is unreadable. Building a dedicated phone layout for those few dashboards, with three or four headline tiles stacked vertically, serves the moment they are actually used.

                ## Milestones
                1. The dashboards opened most on mobile devices identified.
                2. A phone layout designed with the three or four tiles that matter on the move.
                3. The layout tested on two phone sizes.
                4. Mobile viewers told that the phone layout exists.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The three dashboards most opened on phones each have a dedicated phone layout tested on two screen sizes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check usage logs for the dashboards most opened on mobile devices"
                - "Choose the three or four tiles that matter most on a phone"
                - "Build the phone layout in your BI tool's mobile view editor"
                - "Test the layout on two different phone sizes"
            - name: Self-explaining dashboards with built-in definitions
              description: |-
                ## Purpose
                The same three questions reach the data team about every dashboard: what does this number include, where does it come from and when was it updated. Putting the answers on the dashboard itself, through info icons, a definitions panel and a link to the agreed metric definition, cuts those questions and helps new joiners read the numbers correctly.

                ## Milestones
                1. Each headline tile on certified dashboards carrying a short definition on hover or in an info panel.
                2. Definitions copied from the agreed metric definitions rather than rewritten.
                3. A help page per dashboard covering purpose, source, refresh time and owner.
                4. A drop in definition questions noted in the feedback triage.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every headline tile on certified dashboards shows a definition that matches the agreed metric definition, and each dashboard has a help page."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find every headline tile on the certified dashboards that lacks a definition"
                - "Copy each tile's agreed definition into its tooltip or info panel"
                - "Write a one-paragraph help page for each certified dashboard"
                - "Ask the agent to summarise each dashboard's purpose from its brief in plain words"
            - name: Launching a new team dashboard with a walkthrough
              description: |-
                ## Purpose
                Dashboards announced with a link in a chat message tend to get one week of views and then fade. Launching with a thirty-minute walkthrough for the team, a short recording and a usage check after a month makes it far more likely the dashboard becomes part of how the team works.

                ## Milestones
                1. A launch date agreed with the team lead.
                2. A thirty-minute walkthrough held and recorded.
                3. A one-page guide pinned to the dashboard.
                4. Usage checked after thirty days and compared with the brief's success measure.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A walkthrough was held and recorded at launch, and thirty-day usage has been compared in writing with the brief's success measure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree a launch date and walkthrough slot with the team lead"
                - "Prepare three real questions the walkthrough will answer using the dashboard"
                - "Run and record the thirty-minute walkthrough"
                - "Check usage after thirty days against the brief's success measure"
            - name: Fiscal year rollover for dashboards
              description: |-
                ## Purpose
                The first week of a new financial year breaks more dashboards than any other: hard-coded year filters, last year's targets, comparison periods and calendar tables that simply stop. Running a rollover checklist a month before year end means the dashboards show the right year and the right targets on the first working day.

                ## Milestones
                1. Every hard-coded date filter and target table found across certified dashboards.
                2. New year targets loaded once finance confirms them.
                3. Calendar and fiscal period tables extended past the new year.
                4. Each certified dashboard checked on the first working day of the new year.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every certified dashboard shows the new fiscal year and its confirmed targets correctly on the first working day of the year."
                cadence: cyclic
              tasks:
                - "Search certified dashboards for hard-coded years and date filters"
                - "Ask finance when new year targets will be confirmed"
                - "Start the fiscal year rollover checklist a month before year end @recurring(yearly)"
                - "Check every certified dashboard on the first working day of the year"
            - name: BI tool release test pass
              description: |-
                ## Purpose
                Cloud BI tools ship changes every month and self-hosted servers need planned upgrades, and either can quietly change how a chart renders or a calculation behaves. A short test pass against the certified dashboards around each significant release catches breakages before viewers do.

                ## Milestones
                1. A test list of certified dashboards with their expected headline values.
                2. Vendor release notes read for breaking or deprecated features.
                3. Each certified dashboard opened and compared with expected values after the release.
                4. Issues raised with the vendor or fixed within the week.

                ## Notes
                Start from the **Operational checklist** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A test pass is recorded for the latest significant BI release, with every certified dashboard checked against its expected values."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record the expected headline values for each certified dashboard"
                - "Read the BI vendor's release notes for breaking changes @recurring(quarterly)"
                - "Open each certified dashboard after the release and compare values"
                - "Raise any difference with the vendor or fix it within the week"
            - name: Keeping dashboards running through a source system migration
              description: |-
                ## Purpose
                When the CRM, finance system or ticketing tool is replaced, every dashboard built on it breaks, often on the cutover weekend. Mapping dependent dashboards early, agreeing field mappings with the migration team and testing against the new system before go-live keeps reporting available just when leaders most want to see whether the migration worked.

                ## Milestones
                1. Every dashboard that depends on the outgoing system listed.
                2. Field mappings from old to new system agreed with the migration team.
                3. Repointed dashboards tested against the new system's test data.
                4. Viewers told what will look different, and when, before cutover.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All dashboards that depend on the outgoing system are repointed and tested before cutover, with viewers told of changes in advance."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the migration team for the cutover date and test environment access"
                - "List every dashboard built on the outgoing system"
                - "Agree old-to-new field mappings with the migration team"
                - "Test the repointed dashboards against the new system before go-live"
            - name: Annual dashboard user survey
              description: |-
                ## Purpose
                Usage numbers say what people open, not whether it helps them. A short yearly survey of dashboard users, asking what they rely on, what they distrust and what they cannot find, gives the data team a ranked list of improvements and a trust score to track from year to year.

                ## Milestones
                1. A survey of no more than eight questions, including a trust rating.
                2. The survey sent to every active viewer.
                3. Open answers grouped into themes with counts.
                4. Three improvements chosen from the results and announced to respondents.

                ## Notes
                Start from the **Feedback themes** template to group the open answers.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly survey has gone to all active viewers, with themes counted, a trust score recorded and three improvements announced."
                cadence: cyclic
              tasks:
                - "Draft an eight-question survey including a trust rating from one to five"
                - "Send the survey to every active dashboard viewer @recurring(yearly)"
                - "Group open answers into themes with counts"
                - "Announce the three improvements chosen from the results"
            - name: First dashboard for someone new to the BI tool
              description: |-
                ## Purpose
                Plenty of analysts, operations leads and finance staff are handed a BI licence and no training. Building one small dashboard that answers a single question you are asked every week, on a shared dataset, teaches the tool's basics on real work and gives you something useful within a fortnight.

                ## Milestones
                1. One weekly question chosen that you currently answer by hand.
                2. A certified or shared dataset found that holds the answer.
                3. A dashboard of no more than four tiles built in your sandbox folder.
                4. The dashboard checked by an experienced colleague before sharing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A dashboard of four tiles or fewer, built on a shared dataset, answers one recurring question and has been checked by a colleague."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down one question you answer by hand every week"
                - "Ask the data team which shared dataset holds that answer"
                - "Complete the BI tool's official beginner tutorial"
                - "Build a four-tile dashboard in your sandbox and ask a colleague to check it"
            - name: Commissioning a dashboard for your team as a manager
              description: |-
                ## Purpose
                Managers often ask for 'a dashboard' when what they need is three numbers each Monday and a way to see which part of the team is behind. Preparing the questions, decisions and people involved before meeting the data team, and committing time to test and adopt it, gets a dashboard the team uses rather than one that ticks a box.

                ## Milestones
                1. Your team's five most important weekly questions written down.
                2. The decision each question feeds, and who makes it, noted.
                3. A brief agreed with the data team, including a named owner on your side.
                4. Two test sessions attended before launch, and the dashboard built into your team's routine.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A dashboard brief is signed off with the data team, and the finished dashboard has been used in four consecutive weekly team routines."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your team's five most important weekly questions"
                - "Note the decision each question feeds and who makes it"
                - "Book a brief session with the data team and bring the questions"
                - "Name someone on your team as the dashboard's business owner"
            - name: Inheriting a dashboard estate as a new BI lead
              description: |-
                ## Purpose
                Taking over a BI workspace that grew for five years without a plan is common, and the temptation is to rebuild everything at once. Spending the first ninety days listening, mapping and fixing the few dashboards leaders depend on earns the credibility to prune and restructure the rest.

                ## Milestones
                1. The ten dashboards leadership relies on identified and checked for accuracy.
                2. Known problems and complaints collected from five heavy users.
                3. A ninety-day plan agreed with your manager.
                4. One visible fix shipped in the first month.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ninety-day plan is agreed with your manager, the ten leadership dashboards are checked and one visible fix shipped within thirty days."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your manager which dashboards leadership opens every week"
                - "Interview five heavy users about what they trust and what they avoid"
                - "Draft a ninety-day plan from the onboarding template"
                - "Ship one visible fix to a leadership dashboard in the first month"
            - name: Re-cutting dashboards after a team reorganisation
              description: |-
                ## Purpose
                Reorganisations redraw regions, product lines and reporting lines overnight, while dashboards keep slicing by the old structure for months. Updating hierarchies, filters, access and owners together on an agreed date gives the new teams figures that match their new responsibilities and avoids a quarter of misattributed results.

                ## Milestones
                1. The old-to-new mapping of teams, regions or products obtained in writing.
                2. Hierarchy and mapping tables updated in the shared datasets.
                3. Access groups and dashboard owners moved to the new structure.
                4. Historical figures restated or clearly marked as the old structure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All certified dashboards show the new structure from an agreed date, with access, owners and the restatement decision recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Get the old-to-new mapping of teams, regions or products in writing"
                - "Update the hierarchy tables in the shared datasets"
                - "Move access groups and dashboard owners to the new structure"
                - "Decide with finance whether historical figures are restated or labelled"
            - name: Wall-screen dashboard for an operations or support floor
              description: |-
                ## Purpose
                Support desks, warehouses and service teams often run a dashboard on a wall screen all day, which needs a different design from a desktop view: big numbers readable from five metres, no filters, automatic refresh and nothing confidential visible to visitors. Designing for that setting, with the team choosing what goes on screen, makes it a shared reference rather than background decoration.

                ## Milestones
                1. Three to five measures chosen by the team for the screen.
                2. A layout readable from across the room, tested at real distance.
                3. Automatic refresh and a display account set up without personal logins.
                4. Confidential figures and customer names kept off the screen.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A wall-screen dashboard shows three to five team-chosen measures, readable from five metres, and runs on a display account."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the team which three to five measures they want on the wall"
                - "Build a layout with large numbers and no filters"
                - "Set up a display account and automatic refresh that need no personal login"
                - "Stand at the back of the room and check every figure is readable"
            - name: Handing over your dashboards when you change role
              description: |-
                ## Purpose
                Dashboards built by one person often depend on knowledge in their head: why a filter excludes a certain account, which spreadsheet feeds a target, which tile the director actually looks at. Writing a handover note for each dashboard you own, and walking a successor through them before you go, stops your work becoming the next orphan in someone's inventory.

                ## Milestones
                1. A list of every dashboard, dataset and subscription you own.
                2. A handover note per dashboard covering purpose, sources, quirks and audience.
                3. A successor named for each, confirmed by their manager.
                4. Ownership transferred in the BI tool and the inventory updated.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every dashboard you own has a handover note and a confirmed successor, with ownership transferred in the BI tool before your last day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every dashboard, dataset and subscription you own in the BI tool"
                - "Write a handover note for each covering purpose, sources and quirks"
                - "Agree a successor for each with their manager"
                - "Transfer ownership in the BI tool and update the inventory"
            - name: Dashboards as code with version control and review
              description: |-
                ## Purpose
                Editing production dashboards directly in the browser means no history, no review and no way back after a bad change. Storing dashboard definitions in version control where your tool supports it, with a review step and separate development and production spaces, brings the discipline engineers apply to code to the dashboards the business relies on.

                ## Milestones
                1. Your BI tool's options for source control, deployment pipelines or file-based definitions identified.
                2. Development, test and production workspaces set up.
                3. Certified dashboards stored in a repository with change history.
                4. Every change to a certified dashboard reviewed by a second person before release.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Certified dashboards live in version control with separate development and production spaces, and every change since has a recorded review."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Check which source control or deployment features your BI tool supports"
                - "Set up separate development and production workspaces"
                - "Put the definitions of certified dashboards into a repository"
                - "Require a second reviewer on every change to a certified dashboard"
            - name: Row-level security for regional and client data
              description: |-
                ## Purpose
                Building a separate dashboard for every region or client multiplies maintenance; row-level security lets one dashboard show each viewer only the rows they are allowed to see. Done carefully, with rules driven from a mapping table and tested with real accounts, it cuts the dashboard count and lowers the risk of someone seeing another region's or client's figures.

                ## Milestones
                1. A mapping table of groups to the regions or clients they may see.
                2. Row-level rules defined in the shared dataset and driven by the mapping table.
                3. Rules tested by viewing as a sample user from each region.
                4. Per-region copies archived and a quarterly test recorded.

                ## Notes
                Agree the access rules with the data owner and your security lead. Test as a real restricted user, because administrators usually bypass the rules.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One shared dashboard serves every region through tested row-level rules, with per-region copies archived and a quarterly test recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the regional or client copies of the same dashboard in the workspace"
                - "Build a mapping table of groups to the regions they may see"
                - "Define row-level rules in the shared dataset driven by the mapping table"
                - "Test row-level security as a sample user from each region @recurring(quarterly)"
            - name: Customer-facing embedded analytics
              description: |-
                ## Purpose
                Embedding dashboards inside your own product or client portal turns internal reporting into something customers see, and the bar rises: tenant isolation must be watertight, load times matter more and every odd number becomes a support ticket. Planning the embedding method, tenant security, performance and licence cost before the first client sees it avoids an expensive retreat.

                ## Milestones
                1. The embedding method chosen, such as signed embed links or an embedding SDK, with its licence cost.
                2. Tenant isolation designed and tested so one client can never see another's data.
                3. Load time and concurrency tested at expected peak usage.
                4. A support route and a definitions page ready for clients.

                ## Notes
                Have your security team review the tenant isolation test before launch. A leak between clients is a contractual and data protection problem, not just a bug.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Embedded dashboards pass a documented tenant isolation test and a peak load test before the first client is given access."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Compare your BI tool's embedding options and their licence costs"
                - "Design tenant isolation and test it with two dummy client accounts"
                - "Run a load test at the expected peak number of client viewers"
                - "Review embedded query load and usage per client @recurring(monthly:8)"
            - name: Migrating dashboards to a new BI tool
              description: |-
                ## Purpose
                Once the platform decision is made, the migration itself is where projects stall: hundreds of dashboards, formula languages that do not translate and users attached to the old layouts. Migrating only what the usage baseline says is used, in waves by team, with side-by-side number checks before each old dashboard is switched off, keeps the move to months rather than years.

                ## Milestones
                1. The migration list cut to dashboards with real usage in the last ninety days.
                2. Waves planned by team, each with a cutover date.
                3. Each migrated dashboard's headline numbers matched against the old tool.
                4. Old dashboards set to read-only, then retired after each wave.

                ## Notes
                Start from the **Operational checklist** template for each wave's cutover. Treat the migration as a prune: do not move anything nobody opens.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every dashboard with ninety-day usage is migrated and number-checked, and the old tool is read-only or switched off."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Filter the inventory to dashboards with usage in the last ninety days"
                - "Group the remaining dashboards into migration waves by team"
                - "Match each migrated dashboard's headline numbers against the old tool"
                - "Set the old dashboards to read-only at the end of each wave"
            - name: Automated regression tests for critical dashboards
              description: |-
                ## Purpose
                Manual checks catch big breakages, but small ones, such as a total that drops by two percent after a dataset change, slip through. Running automated tests on the most critical dashboards, comparing key query results and rendered screenshots with an expected baseline after every change or refresh, catches silent errors before a board pack goes out.

                ## Milestones
                1. The five most critical dashboards chosen with their key numbers.
                2. Expected values and tolerances agreed with the owners.
                3. Automated checks running after each refresh or deployment.
                4. Failures routed to the steward, with a weekly review of results.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Automated checks run after each refresh on the five most critical dashboards, with failures routed to stewards and reviewed weekly."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose the five dashboards where a silent error would do most harm"
                - "Agree expected values and tolerances for their key numbers with the owners"
                - "Set up automated query or screenshot comparisons after each refresh"
                - "Review the week's regression test failures @recurring(weekly:wed)"
---

# Business Intelligence Dashboards

This area is for analysts, team leads and managers who build or depend on dashboards in a BI tool such as Power BI, Tableau or Looker, and want them used rather than merely published. It starts with the foundations (an inventory, a usage baseline, the questions each team needs answered, owners, certification and reconciled numbers), then the routines that keep the estate healthy, the design and performance skills, the improvements that consolidate and speed things up, the dated events, the situations different people find themselves in, and finally the specialist work of dashboards as code, row-level security, embedding and migration.

What repeats is a weekly health check and feedback triage, a monthly prune of unused dashboards with load time, freshness and subscription checks, quarterly reviews with owning teams alongside licence and access reviews, and a yearly fiscal rollover and user survey. The Meeting notes, Metrics log, Remediation plan, Operational checklist, Feedback themes and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
