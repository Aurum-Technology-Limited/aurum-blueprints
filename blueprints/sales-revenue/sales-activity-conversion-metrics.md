---
id: sales-revenue.sales-activity-conversion-metrics
name: Sales Activity & Conversion Metrics
description: "Clear activity definitions, stage conversion and cycle length baselines, weekly and monthly leak reviews, and the analysis skills that show which selling activities really produce revenue."
category: business
version: 1.0.0
tags: [sales-revenue, sales-activity-conversion-metrics, manager, team, small-business, conversion-rates, sales-cycle, sales-metrics]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - operational-checklist
    - purchase-decision
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Activity & Conversion Metrics
          description: "Tracking calls, meetings, stage conversion and cycle length per rep and segment to find where deals leak and which activities really drive revenue."
          projects:
            - name: Decisions your sales metrics must inform
              description: |-
                ## Purpose
                Most sales reports grow by accretion: someone asks for a number once and it stays forever, while the questions that really matter go unanswered. Writing down the five or six decisions the metrics must support, such as where to add a seller, which segment to prioritise or which stage needs coaching, gives every later report a test it has to pass.

                ## Milestones
                1. A list of five or six recurring sales decisions agreed with the sales leader or owner.
                2. Each decision paired with the one or two metrics that would change it.
                3. Every current sales report marked as kept, merged or dropped against the list.
                4. The list shared with the team so sellers know which numbers matter and why.

                ## Notes
                If a metric does not change any decision on the list, it belongs in an occasional analysis, not the weekly report.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of five or six sales decisions, each paired with its metrics, approved by the sales leader and used to prune the current reports."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the last five decisions you made about the sales team and the data behind each"
                - "Ask the sales leader or owner which sales questions they cannot answer today"
                - "Pair each decision with the metric that would change it"
                - "Mark every current sales report as kept, merged or dropped against the list"
            - name: Written definitions for every logged activity
              description: |-
                ## Purpose
                Before anyone compares call counts, the team has to agree what a call is. One seller logs every dial, another only conversations over two minutes and a third counts a voicemail as a touch, so the leaderboard ends up measuring logging habits rather than effort. A one-page sheet defining dials, connects, conversations, meetings booked and meetings held makes activity numbers comparable across sellers and months.

                ## Milestones
                1. A definition for each activity type, with one example of what counts and one of what does not.
                2. The definitions agreed in a team meeting, with any dissent noted.
                3. CRM activity types and outcome values matched to the agreed sheet.
                4. A dated version of the sheet stored where every seller can find it.

                ## Notes
                Use meetings held, not meetings booked, as the main meeting measure. Booked meetings flatter anyone with a high no-show rate.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page activity definition sheet agreed by the team, with CRM activity types matching it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every activity type your team currently logs"
                - "Draft what counts and what does not for dials, connects, conversations and meetings"
                - "Agree the definitions in the next team meeting and note any dissent"
                - "Ask whoever runs the CRM to align activity types with the agreed sheet"
            - name: Twelve-month stage conversion baseline
              description: |-
                ## Purpose
                Conversion between stages is the number that shows where deals leak, yet many teams know only their overall win rate. Taking every opportunity created in the last twelve months and counting how many reached each stage gives a stage-by-stage baseline, so later changes are judged against something real instead of memory.

                ## Milestones
                1. An export of every opportunity created in the twelve-month window, with its stage history.
                2. The count reaching each stage and the conversion from each stage to the next.
                3. An overall created-to-won rate, with still-open deals marked rather than counted as lost.
                4. The baseline table dated and stored with a short note on the method used.

                ## Notes
                Use deals created in a fixed window and let them mature, rather than deals closed in the window. Otherwise recently created deals drag the rates down and every month looks worse than it is.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated table showing conversion from each stage to the next for twelve months of created opportunities, with the method written beside it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export opportunities created in the last twelve months with their stage history"
                - "Count how many deals reached each stage of the sales process"
                - "Calculate the conversion rate from each stage to the next"
                - "Write a three-line note explaining which deals were included and why"
            - name: Sales cycle length baseline by segment
              description: |-
                ## Purpose
                Cycle length decides how far ahead pipeline has to be built, and a single team average hides the fact that a small business deal may close in three weeks while a larger account takes five months. Measuring days from opportunity creation to close for won deals, split by segment and deal size, gives every seller and manager a realistic clock to plan against.

                ## Milestones
                1. Won deals from the last twelve months listed with created and closed dates.
                2. The median and 75th percentile days to close calculated for each segment.
                3. Days to loss measured separately for lost deals, so slow losses are visible too.
                4. A one-page cycle table published with the segment rules used.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A published table of median and 75th percentile days to close for each segment, built from twelve months of won deals."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export won and lost deals from the last twelve months with created and closed dates"
                - "Calculate days from creation to close for every deal"
                - "Work out the median and 75th percentile cycle for each segment"
                - "Share the cycle table with the team and explain how to read it"
            - name: Segment, source and deal size bands for reporting
              description: |-
                ## Purpose
                Rates only become useful when they can be cut the same way every time. Agreeing a small fixed set of segments, lead sources and deal size bands, and making sure every deal carries all three, stops each report inventing its own categories and lets this quarter be compared fairly with the last.

                ## Milestones
                1. Three to five customer segments defined with a written rule for each.
                2. Deal size bands set from the real spread of past deal values.
                3. Lead sources collapsed to a short list of no more than eight categories.
                4. Fewer than five percent of open and closed deals missing any of the three values.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written rules for segments, sources and size bands, with under five percent of deals missing any of them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Plot the spread of deal values from the last year to find natural size bands"
                - "Write a one-line rule for each customer segment"
                - "Merge the existing lead source values into eight or fewer categories"
                - "Count deals missing a segment, source or size band and fix them @recurring(monthly:9)"
            - name: Activity capture gap audit
              description: |-
                ## Purpose
                Activity metrics are only as good as what reaches the CRM, and in many teams a third or more of real calls, emails and meetings never get logged. Comparing a fortnight of phone system, calendar and email records with what the CRM shows tells you how far the activity numbers can be trusted, and for which sellers.

                ## Milestones
                1. Two weeks of call logs and calendar meetings gathered for each seller.
                2. Those records compared with the CRM activity counts for the same fortnight.
                3. A capture rate calculated for each seller and each activity type.
                4. The main causes of missing activity listed, such as mobile calls, unsynced calendars or meetings logged on the wrong record.

                ## Notes
                Present the results as a system problem first. Most gaps come from missing integrations and awkward logging screens, not from sellers hiding work.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A capture rate for each seller and activity type over a two-week window, with the main causes of gaps written down."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick a recent two-week window for the audit"
                - "Pull call system and calendar records for each seller over that window"
                - "Compare them with CRM activity counts and work out a capture rate"
                - "List the top three causes of missing activity with a fix for each"
                - "Repeat the capture audit over one fortnight @recurring(yearly)"
            - name: Stage entry dates on every deal
              description: |-
                ## Purpose
                Conversion and time-in-stage maths both need the date each deal entered each stage, and many CRMs keep only the current stage unless history tracking is switched on. Checking that stage history is recorded, and agreeing how to treat deals that skipped a stage, is the plumbing every later analysis in this area depends on.

                ## Milestones
                1. Confirmation that stage history is captured on every opportunity.
                2. A report listing each deal's entry date for every stage it passed through.
                3. The share of deals that skipped one or more stages counted.
                4. A written rule for whether a skipped stage counts as passed or as missing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working report of stage entry dates for all opportunities, plus a written rule for skipped stages."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open five recent won deals and check whether stage entry dates are visible"
                - "Ask whoever runs the CRM whether stage history tracking is switched on"
                - "Build a report listing each deal's entry date for every stage"
                - "Agree with the sales leader how skipped stages are counted"
            - name: Metric formula sheet with owners
              description: |-
                ## Purpose
                Win rate alone can be calculated at least four ways: by count or by value, from first meeting or from qualified opportunity, with or without no-decision losses. A single sheet giving the formula, data source, owner and refresh day for each sales metric ends the meeting-room argument about whose number is right.

                ## Milestones
                1. Ten to fifteen sales metrics listed, each with an exact formula.
                2. A source report and a named owner recorded for every metric.
                3. Known exclusions written down, such as test deals, renewals or internal transfers.
                4. The sheet approved by the sales leader and shared with finance or operations.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved sheet defining ten to fifteen sales metrics with formula, source, owner and exclusions for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every sales metric that appears in a current report or meeting"
                - "Write the exact formula used today for each one"
                - "Ask finance how they calculate win rate and average deal size"
                - "Name an owner and a refresh day for every metric on the sheet"
            - name: Four-week activity volume baseline per seller
              description: |-
                ## Purpose
                Setting activity expectations without knowing current volumes produces targets that are either ignored or impossible. Four weeks of clean counts for each seller, taken after the definitions are agreed, show the real range across the team and which sellers work very differently from the rest.

                ## Milestones
                1. Four weeks of counts for each seller and each agreed activity type.
                2. A weekly median and range for the team on each activity.
                3. Outliers in either direction noted with a likely explanation.
                4. The baseline stored as the reference for any later target setting.

                ## Notes
                High volume is not automatically good. A seller with half the calls and twice the meetings may have found a better approach worth copying.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A four-week baseline of activity counts per seller with team medians and ranges, stored for target setting."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the activity definitions are in use before starting the count"
                - "Export four weeks of activity counts by seller and activity type"
                - "Calculate the team median and range for each activity"
                - "Ask each outlier seller what they do differently"
            - name: Weekly rep activity and conversion snapshot
              description: |-
                ## Purpose
                Both sellers and managers need a short weekly view that joins what was done with what moved, not a forty-tab dashboard. A Monday snapshot for each seller, showing last week's conversations and meetings held beside deals created, advanced and lost, turns activity counting into a conversation about results.

                ## Milestones
                1. A snapshot format with no more than eight numbers per seller.
                2. The snapshot refreshed every Monday morning from the same report.
                3. Each seller receiving their snapshot before their weekly one-to-one.
                4. Twelve consecutive weeks of snapshots kept in one place.

                ## Notes
                Start from the **Metrics log** template. Keep the same columns for the whole quarter, or week-on-week comparisons stop meaning anything.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive Monday snapshots sent to every seller, each with the same eight numbers."
                cadence: rolling
              tasks:
                - "Choose the eight numbers the weekly snapshot will show"
                - "Build the snapshot report filtered to the previous Monday to Sunday"
                - "Refresh and send each seller their weekly snapshot @recurring(weekly:mon)"
                - "Note one thing that stands out for each seller before sending"
            - name: Monthly stage-by-stage leak review
              description: |-
                ## Purpose
                A leak is a stage where conversion falls below its baseline or where deals pile up without moving on. Reviewing each stage once a month against the twelve-month baseline catches a widening leak within weeks rather than at quarter end, while there is still time to coach or fix the process.

                ## Milestones
                1. A monthly funnel table set against the baseline for each stage.
                2. Any stage more than five points below baseline flagged.
                3. One cause hypothesis and a named owner for each flagged stage.
                4. Last month's flags followed up and closed or carried forward.

                ## Notes
                Start from the **Meeting notes** template. Use deals created in the trailing six months so each month's table has enough deals to mean something.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly leak reviews held, each recording flagged stages, hypotheses, owners and follow-up on the previous month."
                cadence: rolling
              tasks:
                - "Book a 45-minute monthly slot with the sales leader for the leak review"
                - "Refresh the stage conversion table for the trailing six months of created deals @recurring(monthly:5)"
                - "Write a cause hypothesis and an owner for each flagged stage"
                - "Check last month's flagged stages before adding new ones"
            - name: Monthly cycle length trend by segment
              description: |-
                ## Purpose
                Cycles that lengthen quietly are one of the earliest signs of a harder market or a weaker process, and they stay invisible if only revenue is watched. Plotting the median days to close for each segment month by month shows a drift of two or three weeks long before it turns into a missed quarter.

                ## Milestones
                1. A rolling chart of median days to close for each segment.
                2. Months with fewer than ten won deals marked as low confidence.
                3. Any segment lengthening three months running investigated.
                4. A one-line explanation recorded for each month's movement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of median cycle length plotted by segment, with an explanation recorded for every month."
                cadence: rolling
              tasks:
                - "Set up a chart of median days to close by segment and month"
                - "Add last month's won deals to the cycle length chart @recurring(monthly:12)"
                - "Pull five recent deals from any segment that has lengthened three months running"
                - "Write one line explaining each month's change"
            - name: Quarterly segment conversion scorecard
              description: |-
                ## Purpose
                Segments rarely convert alike. One may win half its qualified deals in six weeks while another wins a fifth over five months at triple the deal size, and both look fine in a blended report. A quarterly scorecard placing conversion, cycle length, deal size and sales velocity side by side for each segment shows leadership where the next hour of selling time earns the most.

                ## Milestones
                1. A one-page scorecard with four measures for each segment.
                2. The quarter compared with the previous quarter and the same quarter last year.
                3. The best and worst performing segment named with a reason.
                4. One recommendation for where to shift effort next quarter recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Four consecutive quarterly scorecards produced, each comparing segments on conversion, cycle, deal size and velocity with a recommendation."
                cadence: cyclic
              tasks:
                - "Draft the scorecard layout with four measures for each segment"
                - "Build the segment scorecard for the quarter just ended @recurring(quarterly)"
                - "Compare each segment with the same quarter last year"
                - "Write one recommendation on where to shift selling effort"
            - name: Friday activity logging spot check
              description: |-
                ## Purpose
                Capture rates slip back within weeks of any audit unless someone keeps looking. A ten-minute Friday check of a few sellers' logged activity against their calendars keeps the Monday snapshot honest and catches a broken calendar sync before a month of data is lost.

                ## Milestones
                1. A short checklist for the Friday spot check.
                2. Two or three sellers checked each Friday on a rotation.
                3. Any sync failure or logging gap raised the same day.
                4. Every seller checked at least once a month.

                ## Notes
                Start from the **Operational checklist** template. Rotate through the team rather than checking the same people, so it reads as routine and not suspicion.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every seller's activity log checked against their calendar at least once a month for three months, with gaps raised the same day."
                cadence: rolling
              tasks:
                - "Write a five-step spot check from the operational checklist template"
                - "Set up a rotation so each seller is checked once a month"
                - "Compare three sellers' logged meetings with their calendars @recurring(weekly:fri)"
            - name: Monthly metrics page for each seller
              description: |-
                ## Purpose
                Many sellers are measured on numbers they never see in one place, and some first learn their own conversion rate in a performance review. A private monthly page for each seller with their funnel, cycle length and activity mix against the team median gives them the view their manager has, early enough to do something about it.

                ## Milestones
                1. A one-page layout showing a seller's funnel, cycle and activity mix beside the team median.
                2. Pages sent privately to each seller in the first week of the month.
                3. Each seller asked which number they want to move next month.
                4. Six months of pages kept so sellers can see their own trend.

                ## Notes
                Show each seller their own numbers and the team median, not a ranked list of colleagues.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Six consecutive monthly pages delivered privately to every seller, each with one number the seller chose to work on."
                cadence: rolling
              tasks:
                - "Design a one-page seller layout with funnel, cycle and activity mix"
                - "Ask the agent to draft a two-line summary for each seller's page from the data"
                - "Send each seller their private metrics page @recurring(monthly:3)"
                - "Record the number each seller chooses to work on"
            - name: Monthly leading activity indicators
              description: |-
                ## Purpose
                Revenue lags: by the time it misses, the cause happened a quarter earlier. Picking three or four indicators that your own history shows move ahead of closed revenue, such as qualified opportunities created or second meetings held, and watching them every month gives a warning while the quarter can still be rescued.

                ## Milestones
                1. Three or four candidate indicators tested against twelve months of closed revenue.
                2. The indicators that led revenue by one to three months chosen.
                3. A monthly line for each indicator with a threshold that triggers action.
                4. Every threshold breach recorded with the action taken.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three or four leading indicators chosen from historical data, tracked monthly for six months with actions recorded for every breach."
                cadence: rolling
              tasks:
                - "List four activities or stage events you suspect come before revenue"
                - "Line each one up against monthly closed revenue for the past year"
                - "Update the leading indicators and check them against thresholds @recurring(monthly:18)"
                - "Write down the action taken whenever a threshold is crossed"
            - name: Quarterly review of metric definitions and thresholds
              description: |-
                ## Purpose
                Definitions drift as the sales process changes: a new stage is added, a segment is split, a threshold set a year ago no longer means anything. A short quarterly review of the definition and formula sheets keeps the numbers aligned with how the team actually sells now.

                ## Milestones
                1. Both the activity definition sheet and the formula sheet reread each quarter.
                2. Changes to stages, segments or products since the last review listed.
                3. Any outdated definition or threshold updated with the date and reason.
                4. Changes announced to the team before the next monthly reports.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews completed in a year, each with dated changes or a recorded decision that nothing needed changing."
                cadence: cyclic
              tasks:
                - "Reread the definition and formula sheets against current practice @recurring(quarterly)"
                - "List any stage, segment or product changes since the last review"
                - "Date and explain every change made to a definition or threshold"
                - "Tell the team about changes before the next monthly reports go out"
            - name: Monthly time-in-stage comparison for won and lost deals
              description: |-
                ## Purpose
                Won deals and lost deals often spend very different times in the same stage, and the gap tells you when a deal's chances start to fall. Comparing median days in each stage for deals won and lost each month shows the age at which a stuck deal needs a hard conversation, based on your own history rather than a rule of thumb.

                ## Milestones
                1. Median days in each stage calculated separately for won and lost deals.
                2. The stage with the largest won-versus-lost gap identified.
                3. An age threshold per stage agreed from the data, beyond which win rates fall sharply.
                4. The thresholds shared with sellers and refreshed monthly.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly won-versus-lost time-in-stage medians kept for six months, with an agreed age threshold for each stage."
                cadence: rolling
              tasks:
                - "Calculate median days in each stage for last quarter's won and lost deals"
                - "Find the stage where won and lost deals differ most in age"
                - "Refresh the won and lost time-in-stage medians @recurring(monthly:20)"
            - name: Dated event notes on the metrics timeline
              description: |-
                ## Purpose
                Conversion dips are easy to misread months later when nobody remembers that the price list changed, two sellers left or a campaign filled the top of the funnel with weak leads. Keeping a dated log of events beside the metrics means every trend can be read in context and nobody chases a cause that was already known.

                ## Milestones
                1. An event log with date, event, expected effect and the metrics likely affected.
                2. Events from the last twelve months backfilled from memory and email.
                3. The log linked from every monthly metrics report.
                4. Each new month's events added within a week of month end.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An event log covering at least twelve months, with every month since setup updated within a week of month end."
                cadence: rolling
              tasks:
                - "Create an event log with date, event, expected effect and affected metrics"
                - "Backfill the past year's price changes, hires, leavers and campaigns"
                - "Add this month's sales events to the timeline @recurring(monthly:26)"
            - name: Cohort conversion versus period conversion
              description: |-
                ## Purpose
                Dividing deals won this month by deals created this month mixes two different groups of deals and can swing wildly from one month to the next. Learning the difference between cohort conversion, which follows a fixed group of deals to their outcome, and period conversion, which counts what happened in a month, stops both false alarms and false comfort.

                ## Milestones
                1. The two methods explained in your own words with a worked example.
                2. Both calculated from the same six months of team data.
                3. The months where they disagree most identified and explained.
                4. A recorded choice of which method each recurring report uses.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Cohort and period conversion calculated from the same six months of data, with the method for each recurring report written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a short explainer on cohort analysis for sales funnels"
                - "Calculate cohort and period win rates for the last six months"
                - "Mark the months where the two methods disagree most"
                - "Note which method each recurring report will use"
            - name: Reading cycle length with medians and percentiles
              description: |-
                ## Purpose
                One deal that dragged on for eighteen months can add weeks to an average cycle length and make the whole team look slow. Learning to read medians, 75th and 90th percentiles and simple distribution charts shows the typical deal and the long tail separately, which is what planning and coaching actually need.

                ## Milestones
                1. Mean, median and 75th percentile cycle calculated for the same set of deals.
                2. A histogram of days to close drawn for one segment.
                3. The deals in the long tail listed and their common features noted.
                4. Medians adopted as the default in every cycle length report.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A histogram and percentile table for one segment's cycle length, with medians adopted in all recurring cycle reports."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate the mean and median cycle length for last year's won deals"
                - "Draw a histogram of days to close for your largest segment"
                - "List the ten slowest deals and what they have in common"
                - "Switch recurring cycle reports from averages to medians"
            - name: Sample sizes before judging a seller's conversion
              description: |-
                ## Purpose
                Winning two of three deals does not make a seller twice as good as one who won one of three, yet small numbers like these drive real decisions about coaching and territories. Learning roughly how many deals a rate needs before it means anything, and showing ranges instead of single figures, protects sellers from being judged on noise.

                ## Milestones
                1. A rule of thumb for the minimum deals before a conversion rate is discussed.
                2. Each seller's quarterly win rate shown with its deal count beside it.
                3. Rates below the minimum count shown as a range or greyed out.
                4. The rule explained to the team so they understand why some numbers are hidden.

                ## Notes
                A simple approach: pool two or three quarters for any seller with fewer than twenty decided deals in the period.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every seller-level conversion rate in team reports shows its deal count, with rates below the agreed minimum flagged or pooled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a plain-language guide to confidence intervals for proportions"
                - "Add a deal count column beside every seller's win rate"
                - "Agree a minimum number of decided deals before a rate is discussed"
                - "Explain the minimum to the team at the next meeting"
            - name: Telling activity correlation from cause
              description: |-
                ## Purpose
                Top sellers often log more meetings, but that may be because their deals create meetings rather than because meetings create deals. Learning to spot reverse cause, hidden third factors such as territory quality and survivorship in activity data keeps the team from pushing everyone to copy a behaviour that does not drive the result.

                ## Milestones
                1. Three common traps written down with an example from sales data for each.
                2. One existing claim about activity and results tested against the traps.
                3. A short list of questions to ask before acting on any activity correlation.
                4. The questions applied to the next proposed activity target.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written checklist of questions for activity correlations, applied to at least one real claim and one proposed target."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down one belief the team holds about activity and results"
                - "Check whether territory or deal source could explain the pattern instead"
                - "Draft five questions to ask before acting on an activity correlation"
            - name: Working with the sales velocity formula
              description: |-
                ## Purpose
                Sales velocity multiplies qualified opportunities, win rate and average deal size, then divides by cycle length to give revenue per day. Learning to use it shows which of the four levers would move revenue most for your team, and why a ten percent shorter cycle can be worth as much as ten percent more opportunities.

                ## Milestones
                1. The formula calculated for the team using the baseline figures.
                2. Each of the four inputs changed by ten percent to see its effect.
                3. Velocity calculated for each segment to compare their economics.
                4. The lever with the largest realistic gain named for the next quarter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Team and segment sales velocity calculated from baseline data, with a sensitivity table and the chosen lever recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather opportunities, win rate, deal size and cycle length from the baselines"
                - "Calculate sales velocity for the team and for each segment"
                - "Build a table showing the effect of a ten percent change in each input"
                - "Pick the lever with the biggest realistic gain for next quarter"
            - name: Pivot tables for funnel and cycle analysis
              description: |-
                ## Purpose
                Nearly all the analysis in this area needs only a CRM export and a spreadsheet, provided someone on the team can build a pivot table and a few date calculations. A few practice sessions on your own data turn every question that would otherwise wait for an analyst into a twenty-minute job.

                ## Milestones
                1. A pivot table of deals by stage and segment built from a real export.
                2. Days between two dates calculated and summarised by median.
                3. A conversion table built by counting deals that reached each stage.
                4. One chart produced and shared from your own analysis.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pivot-based funnel table and a median cycle summary built unaided from a CRM export, with one chart shared."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Export last quarter's opportunities to a spreadsheet"
                - "Follow a short pivot table tutorial using that export"
                - "Build a count of deals by stage and segment"
                - "Calculate days to close and summarise it by median"
            - name: Presenting conversion data to sellers without blame
              description: |-
                ## Purpose
                Sellers shown a ranked league table of conversion rates usually defend their numbers instead of asking what to change. Learning to present metrics as a shared puzzle, comparing a seller with their own past and with the team median and asking what happened in specific deals, makes the data something sellers come looking for.

                ## Milestones
                1. One current report rewritten to compare each seller with their own trend.
                2. Three open questions prepared to accompany each seller's numbers.
                3. The new format used in two team or one-to-one conversations.
                4. Seller reactions noted and the format adjusted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A metrics format comparing sellers with their own trend, used in at least two conversations and adjusted from seller feedback."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Remove the ranking from one report and add each seller's own three-month trend"
                - "Write three open questions to ask alongside each seller's numbers"
                - "Use the new format in your next two seller conversations"
                - "Ask two sellers what they found useful and what felt unfair"
            - name: Spotting gamed activity numbers
              description: |-
                ## Purpose
                Once activity is targeted, it tends to rise in the ways easiest to log: two-second dials, meetings booked with anyone who will take one, emails sent to lists nobody answers. Learning the common patterns of gaming lets a manager read activity numbers sceptically and redesign targets before the data becomes useless.

                ## Milestones
                1. A list of the common gaming patterns for each logged activity type.
                2. Simple checks set up, such as call duration distribution and meeting-to-opportunity rate.
                3. The last quarter's data reviewed against the checks.
                4. Any target that invites gaming flagged for redesign.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Gaming checks for each activity type applied to a quarter of data, with any target that invites gaming flagged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the easiest way to inflate each activity your team logs"
                - "Chart call durations to see how many dials end within seconds"
                - "Compare meetings held with opportunities created for each seller"
            - name: Activity targets or outcome targets decision
              description: |-
                ## Purpose
                Activity targets help new sellers and short-cycle roles, but experienced sellers on complex deals often resent them and pad their logs. Deciding role by role whether to set activity targets, outcome targets such as qualified opportunities created, or none at all, and writing down why, ends a debate that otherwise returns every quarter.

                ## Milestones
                1. A list of sales roles with the cycle length and deal size typical of each.
                2. Evidence gathered on how activity relates to results in each role.
                3. A decision for each role recorded with the reasoning.
                4. The decision explained to the team and a date set to revisit it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision for every sales role on activity, outcome or no targets, with reasoning and a revisit date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each sales role with its typical cycle length and deal size"
                - "Compare activity volume with results for sellers in each role"
                - "Write the target decision and reasoning for each role"
                - "Revisit the activity target decision for each role @recurring(yearly)"
            - name: Working back from target to weekly meetings
              description: |-
                ## Purpose
                A revenue target means little to a seller until it is turned into the weekly conversations and meetings it takes to reach it. Using the team's own conversion rates and deal sizes to work back from the quarterly number to qualified opportunities, first meetings and conversations each week gives every seller a plan grounded in evidence instead of guesswork.

                ## Milestones
                1. A reverse funnel calculated from the quarterly target using baseline rates.
                2. Weekly first meetings and conversations needed per seller worked out.
                3. The numbers checked against each seller's current activity baseline.
                4. Any gap between required and current activity discussed with the seller.

                ## Notes
                Use each segment's own conversion and deal size. A blended rate will understate the work needed for the harder segment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reverse funnel for each seller showing weekly meetings and conversations needed, compared with their baseline and discussed with them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Take the quarterly target and divide by average deal size to get deals needed"
                - "Apply stage conversion rates backwards to find first meetings needed"
                - "Turn the quarterly figures into weekly numbers per seller"
                - "Compare each seller's weekly need with their current baseline"
            - name: Fixing the leakiest stage in the funnel
              description: |-
                ## Purpose
                Once the baseline shows which stage loses the most deals compared with its past or with the best sellers, the fastest gain usually comes from fixing that one stage rather than piling more activity into the top. A ninety-day fix with a clear hypothesis, one or two changes and a before-and-after measure turns the leak review into revenue.

                ## Milestones
                1. The leakiest stage named with its baseline conversion and the gap to the best seller.
                2. Ten lost or stalled deals from that stage reviewed for a common cause.
                3. One or two changes agreed, such as a new exit check or a different next step.
                4. Conversion at that stage measured again after ninety days and compared with baseline.

                ## Notes
                Change one thing at a time where you can. Three simultaneous changes leave you unable to say which one worked.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Conversion at the chosen stage measured before and ninety days after a documented change, with the result recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick the stage with the largest gap between team and best-seller conversion"
                - "Review ten lost or stalled deals from that stage for a shared cause"
                - "Agree one change to how deals move through that stage"
                - "Book a review ninety days out to compare conversion with the baseline"
            - name: Seller self-serve conversion dashboard
              description: |-
                ## Purpose
                Anyone who has to ask for their numbers checks them once a quarter, while sellers who can see them in two clicks check them every week. A simple dashboard each seller can open, filtered to their own deals and showing funnel, cycle and activity against the team median, moves the metrics out of the manager's inbox and into daily use.

                ## Milestones
                1. A dashboard filtered to the viewing seller's own deals.
                2. Funnel, cycle length and activity shown beside the team median.
                3. A link pinned in the CRM home screen for every seller.
                4. Usage checked after a month and the least used panels removed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every seller can open a personal conversion dashboard in two clicks, and at least half have viewed it in its first month."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the dashboard with no more than six panels"
                - "Build the dashboard with a filter for the viewing seller"
                - "Pin the dashboard link where sellers start their day"
                - "Check usage after a month and remove panels nobody opens"
            - name: Automatic activity capture versus manual logging
              description: |-
                ## Purpose
                Manual logging costs each seller several hours a month and still misses a large share of real activity, while automatic capture from email, calendar and phone records brings its own problems with privacy, noise and cost. Comparing the options against the capture audit results gives a clear decision on whether paying for automatic capture would make the metrics trustworthy.

                ## Milestones
                1. Capture rates and logging time from the audit summarised as the problem to solve.
                2. Two or three options compared, including improving manual logging.
                3. Cost, privacy and data quality of each option scored on the same criteria.
                4. A decision recorded and, if a tool is chosen, a trial with two sellers agreed.

                ## Notes
                Start from the **Purchase decision** template. Check with whoever handles data protection before switching on any tool that reads seller emails or calls.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of at least two capture options with a recorded decision, approved by the sales leader and the data protection lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise the capture audit results as the problem to solve"
                - "Ask each seller how many minutes a day they spend logging activity"
                - "Score two or three capture options on cost, privacy and data quality"
                - "Record the decision and agree a two-seller trial if a tool is chosen"
            - name: Retiring vanity metrics from the sales report
              description: |-
                ## Purpose
                Emails sent, dials made and total pipeline value are easy to count and easy to inflate, and they often crowd the front of the report while win rates and cycle times sit on page three. Removing or demoting metrics that do not change a decision makes the report shorter and points attention at the numbers that predict revenue.

                ## Milestones
                1. Every metric in the main sales report listed with the decision it informs.
                2. Metrics with no linked decision moved to an appendix or removed.
                3. Conversion and cycle metrics moved to the top of the report.
                4. The new report used for a month with feedback gathered.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The main sales report trimmed to metrics each linked to a decision, with conversion and cycle measures at the top."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every metric in the main sales report"
                - "Match each metric to a decision on your decisions list"
                - "Move unmatched metrics to an appendix"
                - "Ask three report readers whether anything they need has gone"
            - name: Large deal versus small deal time and win rate comparison
              description: |-
                ## Purpose
                Teams are often told to chase bigger deals without anyone checking whether the larger deals' lower win rates and longer cycles leave them worth the extra effort. Comparing revenue per selling hour across deal size bands gives a factual answer to where sellers' limited time earns the most.

                ## Milestones
                1. Win rate, cycle length and average value calculated for each deal size band.
                2. Typical meetings and activities per won deal counted for each band.
                3. Revenue per meeting or per selling hour compared across bands.
                4. A recommendation on deal size focus recorded and shared with leadership.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of revenue per meeting across deal size bands, with a recorded recommendation on where to focus."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate win rate, cycle and value for each deal size band"
                - "Count the meetings logged on won deals in each band"
                - "Work out revenue per meeting for each band"
                - "Write a one-paragraph recommendation on deal size focus"
            - name: Two-group pilot of a new sales activity
              description: |-
                ## Purpose
                Claims that video messages lift reply rates or that a second discovery call raises win rates are easy to make and rarely tested. Running a simple pilot, with some sellers or some deals using the new activity and the rest carrying on as before, gives the team evidence before rolling a change out to everyone.

                ## Milestones
                1. One activity change chosen with a written prediction of its effect.
                2. Two comparable groups of sellers or deals set up.
                3. The pilot run until each group has enough deals to compare.
                4. Results compared and a roll-out or stop decision recorded.

                ## Notes
                Agree the measure and the end date before the pilot starts, so nobody moves the goalposts once results come in.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A completed pilot with a pre-agreed measure and end date, comparing two groups and ending in a recorded roll-out or stop decision."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one activity change and write down the effect you expect"
                - "Split sellers or deals into two comparable groups"
                - "Agree the success measure and end date before starting"
                - "Compare the groups at the end date and record the decision"
            - name: Quarter close metrics readout
              description: |-
                ## Purpose
                Quarter end is when leadership pays most attention to sales, and it is easy to report only the revenue number. A short readout in the first week of the new quarter covering conversion by stage, cycle length, activity trends and what changed explains why the number landed where it did and what the team will do differently.

                ## Milestones
                1. A readout of no more than five pages covering conversion, cycle and activity.
                2. Each movement explained with reference to the event log.
                3. Two or three changes for the next quarter proposed.
                4. The readout presented to leadership in the first week of the quarter.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A metrics readout presented to leadership within the first week of each quarter, with two or three proposed changes recorded."
                cadence: cyclic
              tasks:
                - "Book the readout slot with leadership for the first week of next quarter"
                - "Assemble the quarter's conversion, cycle and activity trends @recurring(quarterly)"
                - "Ask the agent to draft the narrative from the numbers and the event log"
                - "Propose two or three changes for the coming quarter"
            - name: Annual conversion assumptions for the sales plan
              description: |-
                ## Purpose
                Next year's sales plan rests on assumptions about win rates, cycle lengths and activity per deal, and these are often copied from last year's plan rather than from what happened. Supplying the planners with measured conversion and cycle figures by segment, with honest notes on what might change, keeps the plan tied to reality.

                ## Milestones
                1. Twelve months of conversion, cycle and deal size figures by segment assembled.
                2. Each figure compared with the assumption used in this year's plan.
                3. Known changes for next year, such as new segments or pricing, noted with their likely effect.
                4. An assumptions page delivered to whoever builds the sales plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A dated assumptions page with measured conversion, cycle and deal size by segment delivered to the sales planners before planning starts."
                cadence: cyclic
              tasks:
                - "Find out when next year's sales planning starts and who builds the plan"
                - "Compare this year's planned and actual conversion rates by segment"
                - "Deliver the measured assumptions page to the sales planners @recurring(yearly)"
            - name: Launching the new metrics dashboard to the team
              description: |-
                ## Purpose
                Announced only in an email, a new dashboard is usually opened once and forgotten. A thirty-minute launch with the team, walking through what each number means, how it is calculated and how the manager will use it, builds trust in the figures and heads off the suspicion that metrics are a surveillance tool.

                ## Milestones
                1. A thirty-minute launch session scheduled with the whole team.
                2. A walk-through of each number with its definition and source.
                3. Sellers' questions and objections recorded and answered.
                4. A follow-up two weeks later to check sellers are using it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch session held with the whole team, questions answered in writing, and a two-week follow-up completed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a thirty-minute launch session with the whole team"
                - "Prepare a walk-through of each number with its definition and source"
                - "Write up the questions raised and send answers within two days"
                - "Check in two weeks later on who is using the dashboard"
            - name: Ninety-day review after a sales process change
              description: |-
                ## Purpose
                New stages, new qualification rules and new handoffs are introduced with confidence and rarely checked afterwards. Fixing a review ninety days after any process change, comparing conversion and cycle length before and after, tells the team whether the change helped, hurt or simply moved the numbers around.

                ## Milestones
                1. The process change and its go-live date recorded in the event log.
                2. Before figures captured for the stages the change affects.
                3. After figures measured at ninety days on the same definitions.
                4. A keep, adjust or reverse decision written up and shared.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Before and after conversion and cycle figures compared at ninety days, ending in a written keep, adjust or reverse decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record the latest process change and its go-live date in the event log"
                - "Capture conversion and cycle figures for the affected stages before go-live"
                - "Measure the same figures ninety days after go-live"
                - "Write up a keep, adjust or reverse decision"
            - name: Year-end metrics retrospective for the team
              description: |-
                ## Purpose
                At the end of the year the team has twelve months of evidence on which activities and stages paid off, and most of it is never looked at together. A team retrospective on the year's conversion, cycle and activity data, with sellers bringing their own observations, produces a short list of what to keep and stop for next year.

                ## Milestones
                1. A one-page summary of the year's conversion, cycle and activity trends.
                2. Sellers invited to bring one thing that worked and one that did not.
                3. A keep, stop and start list agreed in the session.
                4. The list carried into the first leak review of the new year.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A year-end retrospective held with a written keep, stop and start list referenced in the first review of the new year."
                cadence: cyclic
              tasks:
                - "Prepare a one-page summary of the year's sales metrics"
                - "Ask each seller to bring one thing that worked and one that did not"
                - "Hold the year-end metrics retrospective with the team @recurring(yearly)"
            - name: Funnel tracker for a sales team of two to five
              description: |-
                ## Purpose
                Small teams rarely have an analyst or an expensive CRM report, yet they need the same answers about where deals stall. A single spreadsheet tab, updated weekly, tracking leads, first meetings, proposals and wins by person and by source gives a small business the core funnel without extra software.

                ## Milestones
                1. A tracker with one row per deal and columns for each stage date.
                2. Stage conversion and median days to close calculated automatically.
                3. Every current deal entered with its source and owner.
                4. The tracker reviewed together by the whole team once a month.

                ## Notes
                Keep the stage list to five or fewer. A small team with nine stages spends more time updating the tracker than selling.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working funnel tracker holding every current deal, with automatic stage conversion and cycle figures reviewed monthly by the team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up a spreadsheet with one row per deal and a date column for each stage"
                - "Enter every open deal with its source and owner"
                - "Add formulas for stage conversion and median days to close"
                - "Agree a monthly slot for the team to review the tracker"
            - name: Owner-seller weekly activity tally
              description: |-
                ## Purpose
                Owners who sell between running everything else tend to remember the busy weeks and forget the quiet ones. A five-minute Thursday tally of conversations, meetings and proposals, kept beside the deals won each month, shows an owner how much selling the business really gets and how many conversations it takes to win one customer.

                ## Milestones
                1. A simple tally sheet with conversations, meetings and proposals per week.
                2. Twelve weeks of tallies recorded.
                3. Conversations per won customer worked out from the tally.
                4. A minimum weekly selling target set from the numbers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly tallies recorded and used to set a minimum weekly number of sales conversations."
                cadence: rolling
              tasks:
                - "Create a tally sheet with columns for conversations, meetings and proposals"
                - "Tally the week's sales conversations, meetings and proposals @recurring(weekly:thu)"
                - "Work out how many conversations each won customer took after twelve weeks"
            - name: Reading an inherited team's metrics as a new manager
              description: |-
                ## Purpose
                New managers often inherit dashboards whose definitions nobody remembers and targets set by someone who has left. Spending the first month rebuilding a simple baseline of conversion, cycle and activity per seller, and checking it against what sellers say, gives a fair picture before any judgement is made about individuals.

                ## Milestones
                1. Existing reports and their definitions collected and checked.
                2. A fresh baseline of conversion, cycle and activity per seller built.
                3. Each seller's view of their own numbers heard in a first one-to-one.
                4. A written summary of the team's strengths and leaks shared with your own manager.

                ## Notes
                Hold off ranking sellers for the first month. Inherited data often carries territory, logging or definition quirks that distort comparisons.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A rebuilt per-seller baseline and a written summary of strengths and leaks shared with your manager within the first month."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect every report your predecessor used and ask how each was calculated"
                - "Rebuild conversion, cycle and activity figures for each seller"
                - "Ask each seller in your first one-to-one what their numbers miss"
                - "Write a one-page summary of the team's strengths and leaks"
            - name: Personal conversion ratios for an individual seller
              description: |-
                ## Purpose
                Sellers who know their own ratios, such as conversations per meeting and meetings per proposal, can plan their month without waiting for a manager's report. A personal monthly check on these few numbers shows where your own deals leak and which part of your selling to practise next.

                ## Milestones
                1. Your own conversion at each stage worked out from the last six months.
                2. The stage where you lose most deals compared with the team median.
                3. One skill or habit chosen to work on for that stage.
                4. Your ratios rechecked monthly to see whether they move.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of personal stage conversion ratios recorded, with one chosen improvement area and its trend tracked."
                cadence: rolling
              tasks:
                - "Export your own deals from the last six months"
                - "Work out your conversion at each stage and compare it with the team median"
                - "Choose one stage to work on and write down why"
                - "Recheck your personal ratios and note any change @recurring(monthly:28)"
            - name: Reading metrics through a seasonal slowdown
              description: |-
                ## Purpose
                Many businesses see predictable dips around holidays, year end or a sector's quiet season, and conversion and cycle numbers look alarming if they are compared with the month before. Comparing with the same period last year, and setting expectations in advance, stops a seasonal dip being mistaken for a failing team.

                ## Milestones
                1. Seasonal patterns identified from at least two years of monthly data.
                2. The slow periods marked in the event log ahead of time.
                3. Reports during slow periods compared with the same period last year.
                4. Expectations for the slow period agreed with leadership in advance.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Slow periods identified from two years of data, marked in advance and reported against the same period last year."
                cadence: cyclic
              tasks:
                - "Chart monthly conversion and cycle length for the last two years"
                - "Mark the recurring slow periods in the event log"
                - "Agree expectations for the coming slow period with leadership @recurring(yearly)"
            - name: Separating inbound and outbound conversion metrics
              description: |-
                ## Purpose
                Inbound enquiries usually convert faster and more often than deals sellers generate themselves, so a team that mixes the two in one funnel can look worse just because the outbound share grew. Splitting conversion and cycle metrics by origin gives fair comparisons between sellers with different mixes and shows the real economics of each motion.

                ## Milestones
                1. Every deal tagged with an inbound or outbound origin.
                2. Stage conversion and cycle length calculated separately for each origin.
                3. Each seller's mix of inbound and outbound deals shown beside their results.
                4. Both funnels reported side by side in the monthly review.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Separate inbound and outbound funnels with conversion and cycle figures, reported side by side for at least three months."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check that every deal carries an inbound or outbound origin"
                - "Calculate stage conversion separately for inbound and outbound deals"
                - "Show each seller's inbound and outbound mix beside their win rate"
                - "Add both funnels to the monthly leak review"
            - name: Activity mix analysis against closed revenue
              description: |-
                ## Purpose
                Experienced managers eventually want to know not just how much activity drives revenue, but which mix: more first meetings, more multi-person meetings, earlier technical sessions or fewer but longer calls. Analysing activity on won and lost deals over a year, controlling for segment and size, reveals the patterns that genuinely separate winners from losers.

                ## Milestones
                1. A dataset of activities per deal for a year of won and lost deals.
                2. Activity counts and types compared between won and lost deals within each segment.
                3. Two or three activity patterns identified that differ consistently.
                4. The findings tested with sellers and turned into a playbook suggestion.

                ## Notes
                Compare within segment and deal size band. Large deals naturally carry more activity and will dominate any blended comparison.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written analysis of activity patterns on won versus lost deals within each segment, with at least two findings discussed with sellers."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Export all activities linked to deals decided in the last year"
                - "Group activity counts by type for won and lost deals in each segment"
                - "Find two or three activity patterns that differ consistently"
                - "Present the findings to sellers and ask whether they ring true"
            - name: Contacts per deal versus win rate analysis
              description: |-
                ## Purpose
                Single-threaded deals, with one contact on the buyer's side, are widely believed to lose more often, and your own data can show how strong the effect is for your sales. Counting distinct buyer contacts engaged on each deal and comparing win rates by count gives a measured threshold that sellers can aim for.

                ## Milestones
                1. Distinct buyer contacts engaged counted for each decided deal.
                2. Win rate calculated for deals with one, two, three and four or more contacts.
                3. The effect checked within each deal size band.
                4. A contact threshold recommended and added to the stage exit checks.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Win rates by number of engaged buyer contacts calculated for each deal size band, with a recommended threshold recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count the distinct buyer contacts with logged activity on each decided deal"
                - "Calculate win rate by number of contacts engaged"
                - "Repeat the comparison inside each deal size band"
                - "Recommend a contact threshold for the stage exit checks"
            - name: Survival analysis of open deals by age
              description: |-
                ## Purpose
                Stage probabilities ignore age, but a deal that has been open twice as long as a typical won deal is far less likely to close. Survival analysis, borrowed from medical statistics, shows the chance a deal of a given age still closes, so managers can see which old deals are long shots and sellers can let them go.

                ## Milestones
                1. Two years of decided deals prepared with age at close and outcome.
                2. A survival curve drawn showing the chance of winning by deal age.
                3. Separate curves compared for the two largest segments.
                4. The age at which win chances fall below a set level shared with sellers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Survival curves of win probability by deal age for at least two segments, with the drop-off age shared with the team."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read a short introduction to survival curves for business data"
                - "Prepare two years of decided deals with age and outcome"
                - "Draw a win probability curve by deal age for each main segment"
                - "Share the drop-off age with sellers and explain how it was found"
            - name: Seller time cost per closed deal by segment
              description: |-
                ## Purpose
                Two segments with similar win rates can cost very different amounts of seller time per closed deal once meetings, travel, proposals and follow-ups are counted. Estimating selling hours per won deal by segment turns conversion data into a cost view that informs pricing floors, segment focus and whether some deals are worth pursuing at all.

                ## Milestones
                1. Average activities per won and lost deal counted for each segment.
                2. A time value assigned to each activity type with sellers' input.
                3. Selling hours per won deal estimated for each segment, including lost-deal effort.
                4. The cost view shared with the sales leader and whoever sets pricing.

                ## Notes
                Include the time spent on lost deals. Ignoring it makes low-win segments look far cheaper than they are.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An estimate of selling hours per won deal for each segment, including lost-deal effort, shared with the sales leader and pricing owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count average activities per won and lost deal in each segment"
                - "Ask three sellers how long each activity type usually takes"
                - "Estimate selling hours per won deal for each segment"
                - "Share the cost view with the sales leader and pricing owner"
---

# Sales Activity & Conversion Metrics

This area is for sales managers, the sellers whose numbers they read, and small business owners who want to know where their deals go missing. It starts with the foundations (the decisions the numbers must inform, agreed definitions for every activity, and twelve-month baselines for stage conversion, cycle length and activity volume), then the weekly and monthly routines that catch leaks early, the analysis skills that stop people misreading small samples and averages, the decisions about targets, tools and vanity metrics, the dated readouts and reviews, the situations of small teams, new managers and individual sellers, and finally the specialist analysis of which activities move revenue.

What repeats is a Monday snapshot for each seller and a Friday logging spot check, a monthly leak review, cycle length trend and personal metrics page, a quarterly segment scorecard and close readout, and a yearly set of conversion assumptions for the plan. The Metrics log, Meeting notes, Operational checklist and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
