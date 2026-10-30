---
id: finance-accounting.budget-versus-actual-variance
name: Budget Versus Actual Variance Analysis
description: "A monthly budget versus actual cycle that budget holders trust and act on: clean mapping and thresholds, named owners, explanations with causes, review meetings, action logs and the analysis skills behind them."
category: business
version: 1.0.0
tags: [finance-accounting, budget-versus-actual-variance, manager, team, enterprise, variance-analysis, fpa, budget-holders]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - meeting-notes
    - board-meeting
    - metrics-log
    - remediation-plan
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Budget Versus Actual Variance Analysis
          description: "Comparing actual results to budget and forecast each month, explaining the variances and turning them into actions for budget holders."
          projects:
            - name: Variance review scope across company, division and cost centre
              description: |-
                ## Purpose
                Ask who needs to see variances at which level before building anything: the leadership team usually wants a dozen lines at company level, while a department manager needs every account in their own cost centre. Writing down the levels, the lines and the audience for each stops one giant report from trying to serve everybody and pleasing nobody. An agreed scope also tells you how much explanation work the cycle will create each month.

                ## Milestones
                1. The reporting levels in use listed, from company total down to cost centre or project.
                2. The readers at each level named, with the lines they are responsible for.
                3. The number of reported lines at each level counted, so the explanation workload is visible.
                4. A one-page scope note agreed with the finance lead.

                ## Notes
                Start narrow. A scope that covers revenue, gross margin, the five largest cost lines and headcount at each level is enough for the first three months.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed-off scope note listing each reporting level, its readers and its line count, agreed with the finance lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every level at which budgets are currently set, from company to project"
                - "Name the readers at each level and the lines they own"
                - "Count the lines each reader would have to explain in a typical month"
                - "Agree the one-page scope note with the finance lead"
            - name: Budget and actuals reconciled on one account mapping
              description: |-
                ## Purpose
                Variances are only meaningful when budget and actuals sit on exactly the same accounts, cost centres and periods, and in many businesses they do not: the budget was built on summary lines, renamed accounts or last year's structure. Reconciling the loaded budget back to the approved total and mapping every budget line to a ledger account removes the false variances that otherwise waste the first meeting.

                ## Milestones
                1. The budget total in the reporting system agreed to the approved budget to the last unit of currency.
                2. Every budget line mapped to a ledger account and cost centre, with no unmapped lines.
                3. Ledger accounts that carry actuals but no budget listed and resolved.
                4. Monthly phasing in the system checked against the approved phasing.

                ## Notes
                A variance report that does not reconcile to the approved budget will be challenged in every meeting. Fix the mapping before anyone sees a number.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A mapping file in which every budget line maps to a ledger account and cost centre, and the loaded budget agrees to the approved total."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the loaded budget and total it against the approved budget"
                - "Map every budget line to a ledger account and cost centre"
                - "List ledger accounts with actuals but no budget and decide where each belongs"
                - "Check the monthly phasing in the system matches the approved phasing"
            - name: Favourable and adverse sign convention
              description: |-
                ## Purpose
                Half the arguments in a variance meeting come from people reading a minus sign differently: is a negative cost variance good or bad? Choosing one convention, labelling every variance favourable or adverse in words, and using the same colours throughout the report means nobody has to stop and work out which way round a number runs.

                ## Milestones
                1. One sign convention chosen for revenue, costs and profit, written in two sentences.
                2. Every variance column labelled favourable or adverse in words as well as figures.
                3. Colour use fixed, with colour never the only signal for colour-blind readers.
                4. The convention printed in the footer of every variance report page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written sign convention appears in the footer of every variance report page and every variance carries a favourable or adverse label."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the sign convention for revenue, costs and profit in two sentences"
                - "Add a favourable or adverse label beside every variance figure"
                - "Pick colours for the labels and check they read in greyscale"
                - "Print the convention in the footer of every report page"
            - name: Variance investigation thresholds by line
              description: |-
                ## Purpose
                Explaining every line every month buries the two variances that matter under forty that do not. A threshold that combines an amount and a percentage, for example any variance above a set figure or above ten percent, whichever is larger, plus a year-to-date test, focuses budget holders on what genuinely moved. Agree the figures with leadership so nobody is criticised for leaving a small line unexplained.

                ## Milestones
                1. An amount threshold and a percentage threshold set for each reporting level.
                2. A year-to-date test added so slow-building variances are caught.
                3. Lines that must always be explained regardless of size listed, such as headcount and legal costs.
                4. The thresholds approved by the finance lead and published to budget holders.

                ## Notes
                Test the proposed thresholds against the last six months of actuals. If they would have triggered more than about eight explanations per budget holder per month, raise them.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Published thresholds for each reporting level, tested against six months of history and approved by the finance lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Propose an amount and a percentage threshold for each reporting level"
                - "Test the thresholds against the last six months of actuals"
                - "List the lines that must always be explained regardless of size"
                - "Publish the approved thresholds to every budget holder"
            - name: Variance explanation owner for each line
              description: |-
                ## Purpose
                A variance with no named owner gets explained by finance, which means it gets described rather than understood. Naming one person, with a deputy, who explains each reported line, including revenue, shared costs and central items that sit outside any department, puts the explanation with whoever made the spending or selling decision.

                ## Milestones
                1. Every reported line assigned an explanation owner and a deputy.
                2. Central and shared lines, such as insurance, rent and software, given an owner outside finance where possible.
                3. Each owner told which lines are theirs and when explanations are due.
                4. The owner list stored with the variance report and updated when people move.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An owner list in which every reported line has a named explainer and deputy, with each owner confirming their lines in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every reported line and the person who controls its spending or income"
                - "Assign a deputy to each line for holidays and absences"
                - "Find an owner outside finance for each central or shared line"
                - "Send each owner their lines and ask them to confirm in writing"
            - name: Variance report layout with month, year-to-date and full-year columns
              description: |-
                ## Purpose
                Readers need to see the month, the year to date and the expected full year side by side, or a timing variance in one month looks like a crisis and a slow overspend looks like nothing. A fixed layout with actual, budget and variance for each period, plus a short reason column, makes every page read the same way from cost centre to company total.

                ## Milestones
                1. Column order fixed: month actual, budget, variance, then year to date, then full-year outturn against budget.
                2. A reason code and one-line comment column added beside each variance.
                3. The layout applied to one real cost centre and tested with its budget holder.
                4. The same layout rolled out to every reporting level.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One variance report layout with month, year-to-date and full-year columns in use at every reporting level, tested with a budget holder first."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the column order for month, year-to-date and full-year views"
                - "Add reason code and one-line comment columns"
                - "Build the layout for one cost centre and walk its budget holder through it"
                - "Apply the tested layout to every reporting level"
            - name: Comparator choice between budget, forecast and prior year
              description: |-
                ## Purpose
                Comparing to the original budget tells you whether the plan held; comparing to the latest forecast tells you whether this month surprised anyone; comparing to last year tells you about the trend. Most finance teams show two of the three and confuse readers by switching between them. Deciding which comparator is primary at each level, and why, keeps the conversation consistent all year.

                ## Milestones
                1. The primary comparator chosen for each reporting level, with a one-line reason.
                2. A secondary comparator chosen where one is genuinely useful.
                3. The rule for when the original budget stops being the main reference written down.
                4. The choice explained to budget holders before the next cycle.

                ## Notes
                Keep the original approved budget visible all year even if the forecast becomes primary. Leadership and boards usually still want to know how far the year moved from the plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparator decision for each reporting level, with reasons, shared with budget holders before the next cycle."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List which comparators each current report already uses"
                - "Choose the primary comparator for each reporting level and note why"
                - "Write the rule for when the forecast replaces the budget as primary"
                - "Explain the choice to budget holders in a short note"
            - name: Variance reason codes
              description: |-
                ## Purpose
                Free-text explanations cannot be counted, so nobody can say whether most overspends this year came from price rises, volume, timing or miscoding. A short list of eight to ten reason codes, chosen alongside every comment, turns twelve months of explanations into a pattern you can analyse and act on.

                ## Milestones
                1. A list of eight to ten reason codes, such as timing, price, volume, mix, one-off, miscoding, budget error and decision.
                2. A one-line definition and example for each code.
                3. The code column made mandatory for every explained variance.
                4. The first month's explanations coded and counted by reason.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reason code list with definitions in use, and a first month in which every explained variance carries a code."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft eight to ten reason codes from last quarter's explanations"
                - "Write a one-line definition and example for each code"
                - "Make the reason code column mandatory on the explanation form"
                - "Count the first month's explanations by reason code"
            - name: Twelve-month variance history baseline
              description: |-
                ## Purpose
                Last year's variances show where the budget is habitually wrong: lines that always run under, lines that spike in particular months, and owners who never explain. Rebuilding twelve months of variances on the new mapping and thresholds before the first live cycle tells you which lines to watch and which budget assumptions to question.

                ## Milestones
                1. Twelve months of actuals and budget laid side by side on the current mapping.
                2. The ten largest cumulative variances for the year listed with their likely cause.
                3. Lines that were adverse or favourable in nine or more months flagged as persistent.
                4. A short note of what the history suggests for this year's watch list.

                ## Notes
                Start from the **Metrics log** template to record each month's total variance and count of lines over threshold, so later months can be compared with this baseline.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A twelve-month variance history on the current mapping, with persistent lines flagged and a written watch list for this year."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull last year's monthly actuals and budget by account and cost centre"
                - "Rank the ten largest cumulative variances and note a likely cause for each"
                - "Flag lines that ran the same direction in nine or more months"
                - "Ask the agent to summarise the history into a one-page watch list"
            - name: Variance cycle deadlines after the close
              description: |-
                ## Purpose
                When explanations arrive two weeks after the month ended, the meeting discusses history and nothing changes. Fixing each step to a working day, from the report run to explanations, review and actions, gives budget holders a predictable slot in their month and keeps the whole cycle inside about ten working days.

                ## Milestones
                1. Each step of the cycle assigned a working day after the close.
                2. The dates checked against the close timetable and the leadership calendar.
                3. Twelve months of cycle dates published to budget holders.
                4. The cycle dates added to every owner's calendar.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published calendar with a working day for each cycle step for the next twelve months, in every budget holder's calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each step of the variance cycle from report run to action log"
                - "Assign each step a working day after the close"
                - "Check the dates against the close timetable and leadership meetings"
                - "Send calendar holds for the next twelve cycles to every budget holder"
            - name: Pre-issue miscoding and accrual sweep
              description: |-
                ## Purpose
                Many of the largest variances in a first draft are not real: an invoice posted to the wrong cost centre, a missing accrual for a service already used, or a prepayment released twice. A short sweep of the biggest variances against the ledger before the report goes out saves budget holders explaining errors and keeps their trust in the numbers.

                ## Milestones
                1. A sweep list covering the twenty largest draft variances.
                2. Each checked for miscoding, missing accruals and duplicate postings.
                3. Corrections posted or flagged to the close team before the report run.
                4. The count of errors found each month recorded.

                ## Notes
                If the sweep keeps finding the same kind of error, raise it with the close team rather than correcting it every month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months in which the twenty largest draft variances were swept before issue and the errors found were logged."
                cadence: rolling
              tasks:
                - "Draft the sweep checklist for miscoding, accruals and duplicates"
                - "Sweep the twenty largest draft variances against the ledger @recurring(monthly:4)"
                - "Send corrections to the close team before the report run"
                - "Record the number of errors found in the month"
            - name: Monthly variance report run and ledger tie-out
              description: |-
                ## Purpose
                Every month the variance report has to be produced the same way and proven to match the ledger, or the first question in the meeting will be whether the numbers are right. A fixed run sequence ending with a tie-out of actuals to the trial balance and budget to the approved file means the report can be defended line by line.

                ## Milestones
                1. A written run sequence from data refresh to issue.
                2. Actuals tied to the trial balance and budget tied to the approved file every month.
                3. A tie-out sign-off line on the report showing who checked it.
                4. The report issued on its scheduled working day for six months running.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly variance reports issued on schedule, each with a signed tie-out of actuals and budget."
                cadence: rolling
              tasks:
                - "Write the run sequence from data refresh to report issue"
                - "Run the variance report and tie actuals to the trial balance @recurring(monthly:5)"
                - "Tie budget totals back to the approved budget file"
                - "Add a checked-by line to the issued report"
            - name: Budget holder explanation requests and chasers
              description: |-
                ## Purpose
                Budget holders explain variances well when the request is specific: these three lines, this amount, this reason code list, by this day. Sending targeted requests the day after the report runs, with a short chaser before the deadline, gets explanations in on time without finance having to write them on the owner's behalf.

                ## Milestones
                1. A standard request message listing the lines over threshold and the deadline.
                2. Requests sent to every owner the working day after the report run.
                3. A chaser sent two days before the deadline to anyone outstanding.
                4. Explanation return rate by owner tracked each month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Explanations returned by the deadline for at least nine in ten lines over threshold for three consecutive months."
                cadence: rolling
              tasks:
                - "Write a standard request listing the lines, amounts and deadline"
                - "Send each owner their lines over threshold @recurring(monthly:6)"
                - "Chase owners whose explanations are still outstanding @recurring(monthly:8)"
                - "Log each owner's on-time return for the month"
            - name: Headcount and payroll variance check
              description: |-
                ## Purpose
                Pay is usually the largest cost in the budget, and its variances hide behind timing: a hire that started late, a leaver not yet removed, a pay rise applied a month early. Comparing actual heads and payroll cost to the budgeted roster each month separates vacancy savings from rate changes and tells managers whether the underspend will last.

                ## Milestones
                1. Actual heads by team compared with budgeted heads for the month.
                2. Payroll variance split into vacancy, rate and overtime or bonus effects.
                3. Starters and leavers since budget listed with their budgeted and actual dates.
                4. The headcount summary shared with team managers and the people team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly headcount and payroll variance summary, split into vacancy, rate and other effects, issued for six months running."
                cadence: rolling
              tasks:
                - "Get the budgeted roster with planned start dates by team"
                - "Compare actual heads and payroll cost with the roster @recurring(monthly:7)"
                - "Split the payroll variance into vacancy, rate and other effects"
                - "Share the summary with team managers and the people team"
            - name: One-page variance summary for leadership
              description: |-
                ## Purpose
                Leadership rarely reads a forty-page variance pack, but they do read a single page that says what moved, why, whether it will last and what is being done. Writing that page each month from the owners' explanations gives senior people the picture in five minutes and frees the meeting for decisions.

                ## Milestones
                1. A one-page format with the five largest variances, their cause, permanence and action.
                2. The full-year impact of permanent variances shown in one line.
                3. The page issued before the review meeting every month.
                4. Leadership feedback on the page collected after the first three issues.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page leadership variance summary issued before the review meeting for six consecutive months, revised once after feedback."
                cadence: rolling
              tasks:
                - "Draft the one-page format with cause, permanence and action columns"
                - "Write the month's leadership summary from owner explanations @recurring(monthly:9)"
                - "Show the full-year effect of permanent variances in one line"
                - "Ask two leaders what they would change after the third issue"
            - name: Monthly variance review meeting
              description: |-
                ## Purpose
                The review meeting is where explanations are tested and turned into decisions, and it fails when it becomes a reading of the report aloud. A thirty to forty-five minute meeting that takes only the variances over threshold, asks whether each is timing or permanent, and ends with owners and dates gives the cycle its teeth.

                ## Milestones
                1. A standing agenda covering the largest variances, permanent effects and new actions.
                2. The meeting held within the cycle deadlines every month.
                3. Decisions and actions recorded with owners and dates before people leave.
                4. Attendance by budget holders tracked over a quarter.

                ## Notes
                Start from the **Meeting notes** template. Send the report at least a day ahead and assume it has been read.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly review meetings held on schedule, each producing recorded actions with owners and dates."
                cadence: rolling
              tasks:
                - "Write the standing agenda for the variance review meeting"
                - "Hold the monthly variance review with budget holders @recurring(monthly:11)"
                - "Record each decision and action with an owner and date in the meeting"
                - "Track which budget holders attended over the quarter"
            - name: Variance action log follow-through
              description: |-
                ## Purpose
                Explanations without actions are just commentary, and actions without follow-up are forgotten by the next meeting. A single action log, reviewed a few days after each meeting and opened at the start of the next, shows whether overspends are being dealt with and which owners keep carrying the same item forward.

                ## Milestones
                1. One action log with owner, line, action, due date and status.
                2. Every action from the review meeting entered within a day.
                3. Open actions reviewed mid-month and owners nudged where dates are slipping.
                4. Actions older than three months escalated or closed with a reason.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An action log in which no action is older than three months without an escalation or a recorded reason for closing it."
                cadence: rolling
              tasks:
                - "Set up the action log with owner, line, action, due date and status"
                - "Enter every action from the meeting within one working day"
                - "Review open actions and nudge owners whose dates are slipping @recurring(monthly:14)"
                - "Escalate or close any action open for more than three months"
            - name: Timing variance reversal tracker
              description: |-
                ## Purpose
                Timing variances are supposed to reverse, and the risk is that they quietly do not: a marketing campaign said to be delayed never runs, or runs and comes in over budget. Tracking every variance coded as timing until it reverses, or until it is reclassified as permanent, stops the year-to-date picture filling with excuses.

                ## Milestones
                1. Every variance coded as timing logged with the month it is expected to reverse.
                2. Reversals checked each month against the expected month.
                3. Timing items that have not reversed within three months reclassified or questioned.
                4. The total of unreversed timing variances shown on the leadership summary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker in which every timing variance either reverses or is reclassified within three months, for two consecutive quarters."
                cadence: rolling
              tasks:
                - "Log every variance coded as timing with its expected reversal month"
                - "Check which timing variances have reversed as expected @recurring(monthly:16)"
                - "Ask owners to reclassify timing items unreversed after three months"
                - "Show the unreversed timing total on the leadership summary"
            - name: Weekly watch on high-risk spend lines
              description: |-
                ## Purpose
                Some lines can blow a month's budget in a week: contractors, paid advertising, cloud usage, travel during a busy season. Watching four or five of them weekly from the ledger, card feed or supplier portal, rather than waiting for the close, gives the budget holder time to slow spending before the variance is locked in.

                ## Milestones
                1. Four or five high-risk lines chosen from the variance history.
                2. A weekly data source for each identified: ledger, card feed or supplier dashboard.
                3. A short weekly note sent to the owners of any line running ahead of its phased budget.
                4. The list of watched lines revisited each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly spend notes sent for eight consecutive weeks on the chosen high-risk lines, with at least one early intervention recorded."
                cadence: rolling
              tasks:
                - "Choose four or five high-risk lines from last year's variance history"
                - "Find a weekly data source for each watched line"
                - "Compare week-to-date spend with the phased budget and alert owners @recurring(weekly:wed)"
                - "Revisit the watched lines at the end of each quarter"
            - name: Quarterly full-year outturn variance review
              description: |-
                ## Purpose
                By the end of each quarter enough of the year has passed to ask the bigger question: where will the year land against the budget, and which permanent variances explain the gap? A quarterly outturn review that adds up the permanent effects, confirms them with owners and states the expected full-year variance gives leadership time to act while there are still months to do it.

                ## Milestones
                1. Permanent variances to date listed with their full-year effect.
                2. Owners asked to confirm or revise each full-year effect.
                3. The expected full-year variance against budget stated for revenue, gross margin and operating profit.
                4. Options to close any adverse gap presented to leadership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly outturn reviews in a year, each stating the expected full-year variance and options to close any adverse gap."
                cadence: cyclic
              tasks:
                - "List permanent variances to date with their full-year effect"
                - "Run the quarterly outturn review with budget owners @recurring(quarterly)"
                - "State the expected full-year variance for revenue, margin and profit"
                - "Present options to close any adverse gap to leadership"
            - name: Annual threshold and reason code refresh
              description: |-
                ## Purpose
                Thresholds set when the business was smaller, or reason codes nobody uses, slowly make the cycle heavier and less useful. Reviewing them once a year, before the new budget is loaded, keeps the explanation workload in proportion and the codes matched to how variances actually arise.

                ## Milestones
                1. Explanation volume per owner for the year counted against the target.
                2. Reason code usage counted, with unused or overused codes reviewed.
                3. Thresholds and codes revised for the new year where needed.
                4. Changes published to budget holders before the first cycle of the year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual review note recording explanation volumes, reason code usage and any changes, published before the first cycle of the year."
                cadence: cyclic
              tasks:
                - "Count explanations per owner for the year against the target"
                - "Review thresholds and reason codes before the new budget loads @recurring(yearly)"
                - "Retire unused codes and split any code covering more than a third of items"
                - "Publish the changes to budget holders"
            - name: Price, volume and mix variance on revenue
              description: |-
                ## Purpose
                Revenue below budget can mean fewer units sold, lower prices or a shift towards cheaper products, and each calls for a different response from sales. Learning to split a revenue variance into price, volume and mix effects, and working one real month through by hand, lets you tell the sales lead which lever moved.

                ## Milestones
                1. The formulas for price, volume and mix effects written out with a worked example.
                2. One month's revenue variance split by hand for the three largest product lines.
                3. The three effects shown to add back to the total revenue variance.
                4. The split presented to the sales or commercial lead and their reaction noted.

                ## Notes
                Different textbooks calculate mix in slightly different orders. Pick one method, write it down and use it every month so the effects are comparable.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked price, volume and mix split of one real month's revenue variance that reconciles to the total, reviewed with the commercial lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write out the price, volume and mix formulas with a small example"
                - "Pull budget and actual units and prices for the three largest product lines"
                - "Split last month's revenue variance into the three effects by hand"
                - "Walk the commercial lead through the result"
            - name: Flexed budget for activity-driven costs
              description: |-
                ## Purpose
                Costs that move with activity, such as packaging, delivery, commissions or card fees, will always look overspent in a busy month against a fixed budget. Flexing the budget to actual activity before comparing separates the variance caused by volume from the variance caused by spending more per unit, which is the part a manager can actually control.

                ## Milestones
                1. Activity-driven cost lines identified with their driver, such as orders, units or revenue.
                2. A budgeted cost per unit of driver calculated for each line.
                3. One month's budget flexed to actual activity and compared with actuals.
                4. The flexed comparison added to the report for the lines where it matters.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A flexed budget comparison for at least three activity-driven cost lines in the monthly report, separating volume and spending effects."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List cost lines that rise and fall with orders, units or revenue"
                - "Calculate a budgeted cost per unit of driver for each line"
                - "Flex last month's budget to actual activity and compare"
                - "Add the flexed view to the report for the three largest such lines"
            - name: Timing versus permanent variance judgement
              description: |-
                ## Purpose
                Deciding whether a variance is timing or permanent is the single most important call in the cycle, because it decides whether the full-year number changes. Practising the questions that settle it, such as whether the spend is still committed, whether the invoice is due and whether the revenue has actually been lost or merely delayed, makes owners' explanations far more reliable.

                ## Milestones
                1. Five test questions for timing versus permanent written down.
                2. Ten past variances classified using the questions and checked against what actually happened.
                3. The questions added to the explanation request form.
                4. A short guide shared with budget holders.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five written test questions, tried on ten past variances with outcomes checked, and added to the explanation form."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write five questions that separate timing from permanent variances"
                - "Classify ten past variances with the questions"
                - "Check each classification against what happened in later months"
                - "Add the questions to the explanation request form"
            - name: Writing variance explanations with cause, permanence and action
              description: |-
                ## Purpose
                Most variance comments say what happened, such as spend was higher than budget, rather than why, whether it will continue and what is being done. Learning a three-part explanation, cause then permanence then action, and rewriting last month's weakest comments in that form, raises the quality of every report that follows.

                ## Milestones
                1. The three-part explanation format written with two good and two poor examples.
                2. Five of last month's weakest comments rewritten in the format.
                3. A word limit agreed, such as thirty words per explanation.
                4. The format and examples sent to every explanation owner.

                ## Notes
                A good explanation names a supplier, a customer, a project or a decision. If it could apply to any month, it is not an explanation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written three-part format with examples, sent to every owner, and five rewritten explanations showing the change."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick five of last month's weakest variance comments"
                - "Rewrite each as cause, then permanence, then action"
                - "Agree a word limit for explanations with the finance lead"
                - "Send the format and examples to every explanation owner"
            - name: Monthly operating profit variance waterfall
              description: |-
                ## Purpose
                A table of fifty variances hides the story that a waterfall chart tells in one glance: budgeted profit, then each large driver up or down, then actual profit. Learning to build that chart from the reason codes and owners' explanations gives leadership the month's result as a sequence of causes rather than a list of lines.

                ## Milestones
                1. The waterfall structure chosen: budgeted profit, six to eight driver bars, actual profit.
                2. Driver bars grouped from reason codes or cost categories.
                3. One month's waterfall built and checked to add up exactly.
                4. The chart added to the leadership summary.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A monthly operating profit waterfall that reconciles exactly from budgeted to actual profit, included in the leadership summary."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose six to eight driver groups for the waterfall bars"
                - "Group last month's variances into the driver bars"
                - "Build the waterfall and check it adds up exactly"
                - "Add the chart to the leadership summary"
            - name: Rate and efficiency variances for labour costs
              description: |-
                ## Purpose
                Labour cost over budget in a service team can come from paying more per hour, from needing more hours for the same output, or from more output than planned. Splitting labour variances into rate, efficiency and volume effects tells a delivery manager whether to look at pay, at productivity or at the workload itself.

                ## Milestones
                1. Budgeted hours, rate and output per period gathered for one team.
                2. The labour variance for one month split into rate, efficiency and volume effects.
                3. The three effects reconciled to the total labour variance.
                4. The split reviewed with the team's manager and the likely causes noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One team's monthly labour variance split into rate, efficiency and volume effects that reconcile, reviewed with its manager."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Gather budgeted hours, rates and output for one service team"
                - "Collect actual hours, pay cost and output for the same month"
                - "Split the labour variance into rate, efficiency and volume effects"
                - "Review the split with the team's manager"
            - name: Variance reporting tool decision
              description: |-
                ## Purpose
                Spreadsheets work well for a handful of cost centres, but beyond twenty or thirty budget holders the copying, version control and comment collection start to break. Comparing a spreadsheet with structured templates, a reporting or business intelligence tool and a planning platform with built-in commentary, against the same criteria, gives an evidence-based choice instead of a vendor demo.

                ## Milestones
                1. Requirements written: number of owners, comment capture, drill-down to transactions, access control, cost.
                2. Three options shortlisted and scored against the same criteria.
                3. One option tested with real data for one month.
                4. A decision recorded with cost, owner and timeline.

                ## Notes
                Start from the **Purchase decision** template. Insist on seeing comment collection and drill-down working with your own data, not a sample.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool decision with three scored options and one month tested on real data, approved by the finance lead."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write requirements for comments, drill-down, access and cost"
                - "Shortlist three options and score them against the requirements"
                - "Test the leading option with one month of real data"
                - "Record the decision with cost, owner and timeline"
            - name: Automated variance extract from ledger and budget
              description: |-
                ## Purpose
                Copying ledger exports into a spreadsheet every month takes hours and introduces errors that the tie-out then has to catch. Setting up a repeatable extract that pulls actuals and budget on the same mapping straight from the system, whether by saved report, connector or query, shortens the run and leaves time for analysis.

                ## Milestones
                1. The current manual steps in the run written down and timed.
                2. A saved report, connector or query that pulls actuals and budget on the mapping.
                3. The automated extract run in parallel with the manual one for one month and the results agreed.
                4. The manual steps retired and the time saved recorded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An automated extract that matches the manual report for a parallel month, replacing the manual steps, with time saved recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Time and write down each manual step in the current run"
                - "Build a saved report or query pulling actuals and budget on the mapping"
                - "Run the extract in parallel with the manual report for one month"
                - "Retire the manual steps and record the time saved"
            - name: Self-service variance view for budget holders
              description: |-
                ## Purpose
                Budget holders who can drill from a variance to the invoices behind it answer their own questions in minutes instead of emailing finance and waiting days. A read-only view of their cost centres, with month and year-to-date variances and transaction drill-down, cuts the query traffic and makes explanations more accurate.

                ## Milestones
                1. The questions budget holders most often ask finance listed.
                2. A read-only view built with variance, year-to-date and transaction drill-down.
                3. Access restricted so each owner sees only their own cost centres.
                4. Query volume to finance compared before and after three months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A self-service view in use by budget holders for three months, with query volume to finance measured before and after."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the questions budget holders most often send to finance"
                - "Build a read-only view with drill-down to transactions"
                - "Restrict access so each owner sees only their own cost centres"
                - "Compare query volume before and after three months"
            - name: Committed spend reported beside actuals
              description: |-
                ## Purpose
                Actuals tell you what has been invoiced, not what has been promised, so a cost centre can look underspent in March with a full year of signed purchase orders waiting. Showing approved purchase orders and signed contracts beside actuals gives budget holders the real remaining budget and stops them being surprised by commitments already made.

                ## Milestones
                1. The source of committed spend identified: purchase orders, contracts register or both.
                2. Open commitments by cost centre added as a column beside actuals.
                3. Remaining budget shown as budget minus actuals minus commitments.
                4. Stale commitments cleared from the source each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A committed spend column and remaining budget figure in the monthly report for three months, with stale commitments cleared."
                cadence: rolling
              tasks:
                - "Find where approved purchase orders and signed contracts are recorded"
                - "Add open commitments by cost centre beside actuals"
                - "Clear stale or fully invoiced commitments from the source @recurring(monthly:3)"
                - "Show remaining budget after commitments on each owner's page"
            - name: Permanent variances handed to the reforecast
              description: |-
                ## Purpose
                Once a variance is judged permanent, the forecast should change, yet many teams explain the same overspend every month while the forecast still shows the original plan. A monthly handover of confirmed permanent variances, with their full-year effect, to whoever owns the forecast keeps the outlook honest and the variance cycle connected to it.

                ## Milestones
                1. A handover list format with line, full-year effect and owner confirmation.
                2. The list sent to the forecast owner after each review meeting.
                3. Each item marked as reflected or not in the next forecast.
                4. Items repeatedly not reflected escalated to the finance lead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly handovers of permanent variances, each item marked as reflected or not in the following forecast."
                cadence: rolling
              tasks:
                - "Create a handover list with line, full-year effect and owner"
                - "Send confirmed permanent variances to the forecast owner @recurring(monthly:13)"
                - "Mark each item as reflected or not in the next forecast"
                - "Escalate items left out of the forecast twice in a row"
            - name: Rephasing the budget when timing was wrong
              description: |-
                ## Purpose
                Sometimes the budget put the spend in the wrong months: a system launch budgeted for March that was always going to land in June. Deciding whether to rephase the budget, keep the original phasing and code the gap as timing, or show both, with leadership approval and an audit trail, stops months of pointless explanations without hiding real misses.

                ## Milestones
                1. The lines with clearly misphased budgets identified, with evidence.
                2. The options of rephasing, coding as timing or showing both written up.
                3. A decision approved by the finance lead with the annual total unchanged.
                4. Any rephasing recorded in a change log with date, reason and approver.

                ## Notes
                Rephase timing only, never the annual total. Changing the total is a budget revision and needs whatever approval your organisation requires for that.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on each misphased line, approved by the finance lead, with any rephasing logged and the annual total unchanged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the lines whose budget phasing is clearly wrong, with evidence"
                - "Write up the rephase, timing code and show-both options"
                - "Get the finance lead's approval with the annual total unchanged"
                - "Record any rephasing in the budget change log"
            - name: Variance explanation quality audit
              description: |-
                ## Purpose
                Over a few months explanation quality drifts: owners copy last month's text, use the timing code for everything or write too little to be useful. A quarterly audit that scores a sample of explanations against the three-part format and the reason codes, and gives each owner specific feedback, keeps the standard from slipping.

                ## Milestones
                1. A simple scoring sheet: cause named, permanence stated, action given, code correct.
                2. A sample of twenty explanations scored each quarter.
                3. Feedback sent privately to owners with low scores.
                4. Average scores compared quarter on quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two quarterly audits of twenty explanations each, with feedback sent and average scores compared."
                cadence: rolling
              tasks:
                - "Build a four-point scoring sheet for explanations"
                - "Score a sample of twenty explanations @recurring(quarterly)"
                - "Send private feedback to owners with the lowest scores"
                - "Compare the average score with the previous quarter"
            - name: First variance cycle on the new process
              description: |-
                ## Purpose
                Running the new process end to end for the first time will expose gaps in mapping, ownership and timing that no design review catches. Treating the first cycle as a dated launch, with a briefing for owners beforehand and a lessons review afterwards, means the second cycle runs better and owners see that their feedback counted.

                ## Milestones
                1. Budget holders briefed on thresholds, reason codes and deadlines before the cycle.
                2. Report, explanations, meeting and action log completed within the cycle deadlines.
                3. Problems logged as they happened during the cycle.
                4. A lessons review held and three changes made before the second cycle.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One full variance cycle completed within its deadlines, followed by a lessons review and three recorded changes before the next cycle."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Brief budget holders on thresholds, codes and deadlines"
                - "Run the full cycle and log problems as they happen"
                - "Hold a lessons review with two owners and the finance lead"
                - "Make three changes before the second cycle starts"
            - name: Half-year variance review with leadership
              description: |-
                ## Purpose
                Halfway through the year is the last point at which large adverse variances can still be recovered without drastic action. A half-year review that sets out year-to-date variances, the permanent effects, the expected outturn and a short list of recovery or reinvestment options gives leadership a structured moment to change course.

                ## Milestones
                1. Year-to-date variances by division or department summarised on two pages.
                2. Permanent effects and the expected outturn agreed with owners.
                3. Recovery options for adverse gaps and uses for favourable ones listed with their effect.
                4. Leadership decisions recorded and added to the action log.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half-year variance review held each year, with expected outturn, options and leadership decisions recorded in the action log."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Book the half-year variance review with leadership @recurring(yearly)"
                - "Summarise year-to-date variances by division on two pages"
                - "List recovery and reinvestment options with their effect"
                - "Add leadership decisions to the action log"
            - name: Board or audit committee variance briefing
              description: |-
                ## Purpose
                Boards and audit committees ask different questions from management: whether the budget was credible, whether forecasts keep moving, and whether controls over spending are working. Preparing a short briefing that answers those questions from the variance history, rather than repeating the management pack, makes the finance section of the meeting shorter and more useful.

                ## Milestones
                1. The questions the board or committee asked at its last two meetings listed.
                2. A two-page briefing covering year-to-date variance, outturn and any control concerns.
                3. The briefing reviewed by the finance lead and chief executive before issue.
                4. Questions raised at the meeting and the answers given recorded.

                ## Notes
                Start from the **Board meeting** template.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A two-page variance briefing issued to the board or committee, with the questions raised and answers given recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the questions the board asked about budget at its last two meetings"
                - "Draft a two-page briefing on variance, outturn and control concerns"
                - "Get the briefing reviewed by the finance lead and chief executive"
                - "Record the questions raised and the answers given"
            - name: Year-end budget outturn retrospective
              description: |-
                ## Purpose
                Once the year closes, the final variance against budget is a verdict on both the plan and the year's management. A retrospective that explains the full-year variance in a waterfall, counts variances by reason code and compares quarterly outturn calls with the final result shows how good the cycle was at seeing the year coming.

                ## Milestones
                1. The full-year variance explained in a waterfall from budget to actual profit.
                2. Variances for the year counted by reason code.
                3. Each quarterly outturn call compared with the final result.
                4. A two-page retrospective shared with leadership and budget holders.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A two-page year-end retrospective with a full-year waterfall, reason code counts and quarterly call accuracy, shared with leadership."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Build the full-year waterfall from budgeted to actual profit"
                - "Count the year's variances by reason code"
                - "Compare each quarterly outturn call with the final result"
                - "Share the year-end variance retrospective with leadership @recurring(yearly)"
            - name: Variance lessons handed to next year's budget
              description: |-
                ## Purpose
                Variance history is the best evidence there is for where the budget was wrong, yet it rarely reaches the people building next year's plan. Handing the budget team a short list of persistent variances, misphased lines and assumptions that failed, before the budget kick-off, makes the next budget more accurate and the next variance cycle quieter.

                ## Milestones
                1. Lines that varied in the same direction for most of the year listed with the cause.
                2. Misphased lines and failed assumptions identified with evidence.
                3. A one-page lessons note sent to the budget lead before kick-off.
                4. The budget lead's response on each lesson recorded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-page variance lessons note delivered to the budget lead before kick-off, with a recorded response on each item."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "List lines that varied the same way for most of the year"
                - "Identify misphased lines and assumptions that failed"
                - "Send the variance lessons note to the budget lead before kick-off @recurring(yearly)"
                - "Record the budget lead's response to each lesson"
            - name: First quarter as a budget holder explaining variances
              description: |-
                ## Purpose
                New budget holders often inherit a budget they did not build and are asked to explain variances against assumptions nobody told them about. A planned first quarter, with the budget assumptions walked through, a practice explanation reviewed by finance and three months of explanations returned on time, builds confidence and credibility quickly.

                ## Milestones
                1. The budget assumptions behind each of your lines walked through with finance.
                2. Your recurring commitments, contracts and planned hires listed against the budget.
                3. A first set of explanations drafted and reviewed with your finance contact.
                4. Three months of explanations returned on time.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Budget assumptions reviewed with finance and three consecutive months of on-time explanations returned by the new budget holder."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Book an hour with finance to walk through your budget assumptions"
                - "List your contracts, commitments and planned hires against the budget"
                - "Draft your first explanations and review them with your finance contact"
                - "Return three months of explanations by the deadline"
            - name: Defending a large overspend to leadership
              description: |-
                ## Purpose
                Being called to explain a large overspend is uncomfortable, and managers often either over-apologise or argue about the budget. Preparing a clear account of cause, permanence, full-year effect and a recovery plan, with the numbers checked by finance first, turns the conversation into a decision about what to do next.

                ## Milestones
                1. The overspend reconciled with finance, with any miscoding removed.
                2. Cause, permanence and full-year effect written on one page.
                3. Two or three recovery options with their cost and effect.
                4. The agreed recovery plan recorded with dates and monitored monthly.

                ## Notes
                Start from the **Remediation plan** template. Bring the recovery options to the meeting rather than waiting to be asked for them.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-page overspend account and an agreed recovery plan with dates, presented to leadership and tracked in the action log."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask finance to check the overspend for miscoding before the meeting"
                - "Write the cause, permanence and full-year effect on one page"
                - "Prepare two or three recovery options with cost and effect"
                - "Add the agreed recovery plan to the action log"
            - name: New FP&A analyst inheriting the variance process
              description: |-
                ## Purpose
                Taking over the variance cycle from a predecessor means inheriting their mapping quirks, their spreadsheet links and their relationships with budget holders, often with only a short handover. A structured first month, shadowing one full cycle and documenting every step before changing anything, avoids breaking a report people depend on.

                ## Milestones
                1. Every file, extract, mapping and link in the current process listed.
                2. One full cycle shadowed or run with notes on each step.
                3. A process note written that someone else could follow.
                4. A short list of improvements agreed with the finance lead for later cycles.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written process note for the variance cycle, tested by running one full cycle, with improvements agreed with the finance lead."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every file, extract and mapping your predecessor used"
                - "Run one full cycle and note each step as you go"
                - "Write a process note another analyst could follow"
                - "Agree a short improvement list with the finance lead"
            - name: Splitting variance work across a small finance team
              description: |-
                ## Purpose
                In a finance team of two to five people, the variance cycle often lands on one person who becomes a bottleneck and a single point of failure. Splitting the work by division or line type, with a second person reviewing each section and a cover rota for holidays, spreads the load and means the cycle runs even when someone is away.

                ## Milestones
                1. The cycle tasks listed with their typical hours.
                2. Each section of the report allocated to a preparer and a reviewer.
                3. A cover rota agreed for holidays and peak weeks.
                4. One cycle run on the new split and the hours compared.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A preparer and reviewer for each report section and a cover rota, tested through one full cycle with hours compared."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the cycle tasks and the hours each usually takes"
                - "Allocate each report section a preparer and a reviewer"
                - "Agree a holiday and peak-week cover rota"
                - "Compare hours after the first cycle on the new split"
            - name: Divisional variance roll-up for an enterprise group
              description: |-
                ## Purpose
                Group reporting across several divisions or countries falls apart when each one uses different thresholds, reason codes and comparators, because the group summary then adds together explanations that mean different things. A common variance standard, a roll-up template and a group review of the largest divisional variances make the group picture coherent.

                ## Milestones
                1. One variance standard for thresholds, codes and comparators issued to every division.
                2. A roll-up template that adds divisional variances to the group total and reconciles.
                3. Divisional finance leads submitting on the same working day each month.
                4. A group review of the five largest divisional variances held monthly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months in which every division submits on the common standard and the roll-up reconciles to the group total."
                cadence: rolling
              tasks:
                - "Compare thresholds, codes and comparators used by each division"
                - "Issue one variance standard to every divisional finance lead"
                - "Build a roll-up template that reconciles to the group total"
                - "Review the five largest divisional variances at group level @recurring(monthly:10)"
            - name: Variance control during a spending freeze
              description: |-
                ## Purpose
                During a spending freeze or turnaround, monthly variance reporting is too slow: leadership needs to see within days whether the freeze is holding. Tightening the cycle for the freeze period, with weekly commitment reports, a list of approved exceptions and a clear end date, shows whether the savings are real and when normal reporting can resume.

                ## Milestones
                1. The freeze rules, exceptions process and end date written down.
                2. Weekly commitment and spend reports issued to leadership.
                3. Every approved exception logged with amount and approver.
                4. Savings against budget confirmed and normal reporting resumed at the end date.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Weekly freeze reports issued for the whole freeze period, with every exception logged and confirmed savings reported at the end."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the freeze rules, exception process and end date"
                - "Issue the weekly freeze spend and commitment report @recurring(weekly:mon)"
                - "Log every approved exception with amount and approver"
                - "Confirm savings against budget at the end of the freeze"
            - name: Planning and operational variance split
              description: |-
                ## Purpose
                If the budget was built on assumptions that turned out to be wrong, such as an exchange rate, a market price or a raw material cost nobody could control, judging managers against it is unfair and uninformative. Splitting each large variance into a planning variance, against a revised standard, and an operational variance, against what management actually controlled, separates bad forecasting from bad performance.

                ## Milestones
                1. Lines where an uncontrollable assumption clearly moved identified.
                2. A revised standard set for each with evidence, such as published prices or rates.
                3. The total variance split into planning and operational parts for one quarter.
                4. The split reviewed with the finance lead before it is shown to managers.

                ## Notes
                Agree in advance who may set a revised standard. Without that rule, every adverse variance gets reclassified as a planning error.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarter's largest variances split into planning and operational parts against evidenced revised standards, reviewed by the finance lead."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Identify lines where an uncontrollable assumption clearly moved"
                - "Set a revised standard for each with published evidence"
                - "Split one quarter's variances into planning and operational parts"
                - "Review the split with the finance lead before sharing it"
            - name: Constant currency variance restatement
              description: |-
                ## Purpose
                For a business that budgets in one currency and trades in several, exchange rate movements can swamp the real operating variance in either direction. Restating actuals at budget exchange rates and showing the currency effect as a single separate line lets divisional managers be judged on what they controlled, while the group still sees the full reported result.

                ## Milestones
                1. The budget exchange rates for each currency confirmed and stored with the budget.
                2. Actuals restated at budget rates for each foreign-currency division.
                3. The currency effect shown as one separate line in the variance report.
                4. The method written down and agreed with the group finance lead.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monthly variance report showing operating variance at budget rates and the currency effect as a separate line, with a written method."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm and store the budget exchange rate for each currency"
                - "Restate one month's actuals at budget rates by division"
                - "Show the currency effect as one separate line in the report"
                - "Write the restatement method and agree it with group finance"
            - name: Control limits for noisy variance lines
              description: |-
                ## Purpose
                Some lines bounce around every month, such as utilities, repairs or bank charges, and fixed thresholds either flag them constantly or never. Setting control limits from each line's own history, usually two or three standard deviations around the expected monthly value, flags only the months that are genuinely unusual and quietens the rest.

                ## Milestones
                1. Ten noisy lines chosen with at least eighteen months of history.
                2. Expected monthly values and control limits calculated for each.
                3. Months outside the limits flagged and checked against known events.
                4. Control limits used in place of fixed thresholds for those lines.

                ## Notes
                Start from the **Metrics log** template to record each line's monthly value against its limits.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Control limits in use for ten noisy lines, each based on at least eighteen months of history, replacing their fixed thresholds."
                cadence: rolling
              tasks:
                - "Pick ten noisy lines with at least eighteen months of history"
                - "Calculate an expected monthly value and control limits for each"
                - "Check the noisy lines against their control limits @recurring(monthly:20)"
                - "Replace fixed thresholds with the limits for those lines"
            - name: Earned value variances on major projects
              description: |-
                ## Purpose
                Large projects such as a system implementation, a fit-out or a build programme can look on budget because spend is slow, when in fact the work is even slower. Earned value compares planned value, earned value and actual cost to give cost and schedule variances and performance indices, which show early whether the project will finish over budget.

                ## Milestones
                1. A project chosen with a budget phased by work package or milestone.
                2. Planned value, earned value and actual cost calculated for the latest month.
                3. Cost and schedule variances and their indices calculated and explained.
                4. An estimate at completion produced and discussed with the project sponsor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An earned value report for one major project with cost and schedule variances and an estimate at completion, reviewed with its sponsor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a major project with a budget phased by milestone"
                - "Calculate planned value, earned value and actual cost for the month"
                - "Work out the cost and schedule variances and their indices"
                - "Discuss the estimate at completion with the project sponsor"
            - name: Standard cost variances in manufacturing
              description: |-
                ## Purpose
                Manufacturers running a standard costing system get variances automatically, but materials price, usage, labour efficiency and overhead absorption variances are often posted and never analysed. Learning what each one means, and reviewing them monthly with operations and purchasing, turns an accounting by-product into an early signal about suppliers, scrap and capacity.

                ## Milestones
                1. Each standard cost variance account in the ledger listed with what it measures.
                2. One month's variances traced to the production orders or purchases behind them.
                3. The largest variances reviewed with operations and purchasing leads.
                4. Standards that are clearly out of date flagged for the next standard cost update.

                ## Notes
                Large, persistent favourable variances deserve as much attention as adverse ones. They usually mean the standard is out of date and product costs are overstated.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One month's standard cost variances traced to their sources and reviewed with operations and purchasing, with stale standards flagged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List each standard cost variance account and what it measures"
                - "Trace one month's variances to production orders and purchases"
                - "Review the largest variances with operations and purchasing leads"
                - "Flag out-of-date standards for the next standard cost update"
---

# Budget Versus Actual Variance Analysis

This area is for the people who sit between the approved budget and what actually happened: the finance analyst who builds the variance report, the department manager who has to explain it, and the enterprise finance team rolling it up across divisions. It starts with foundations (scope, a single account mapping, sign conventions, thresholds, named owners, a layout, the comparator and reason codes), then the monthly machinery of sweeps, report runs, explanation requests, review meetings and action logs, the analysis skills of price, volume, mix, flexing and timing, improvements to tools and process, dated reviews at the half-year and year end, situations for new budget holders, analysts, small teams and groups, and finally specialist methods such as planning and operational variances, constant currency and earned value.

What repeats is a monthly rhythm in the first three weeks after the close: a committed spend check and miscoding sweep around the 3rd and 4th, the report run on the 5th, explanation requests and chasers from the 6th, the leadership summary and review meeting before mid-month, then the action log, timing tracker and reforecast handover. A weekly watch covers the riskiest lines, the outturn is reviewed quarterly, and thresholds, reason codes and lessons for next year's budget come round once a year. The Purchase decision, Meeting notes, Board meeting, Metrics log and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
