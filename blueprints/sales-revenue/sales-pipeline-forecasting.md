---
id: sales-revenue.sales-pipeline-forecasting
name: Sales Pipeline Forecasting
description: "Clear forecast categories, a weekly submission rhythm, stage win rates from your own history and an accuracy scorecard, so leadership gets a revenue number it can plan around."
category: business
version: 1.0.0
tags: [sales-revenue, sales-pipeline-forecasting, manager, team, enterprise, forecast-accuracy, win-rates, revenue-planning]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - risk-register
    - purchase-decision
    - board-meeting
    - compliance-control
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Pipeline Forecasting
          description: "Building a weekly revenue forecast from deal stages, probabilities and rep judgement, then tracking forecast accuracy so leadership can plan with confidence."
          projects:
            - name: Forecast category definitions
              description: |-
                ## Purpose
                Ask five sellers what commit means and you will get five answers, which is why so many forecast calls are an argument about words before they are about numbers. Writing one definition for each category, commit, best case, pipeline and omitted, with the evidence a deal needs to sit in it, makes every seller's call comparable and every roll-up honest.

                ## Milestones
                1. Four forecast categories defined in one sentence each.
                2. The minimum evidence for commit and best case listed, such as confirmed budget, a named signatory or a started paper process.
                3. The definitions agreed by every manager who submits a number.
                4. The one-page definitions sent to every seller and linked from the forecast report.

                ## Notes
                A common gut test is that commit means you would bet your own bonus on it closing this period. Keep that test, but back it with evidence a manager can check without asking the seller.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page set of four forecast category definitions, each with its evidence test, agreed by all managers and sent to every seller."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List what each seller currently means by commit and best case"
                - "Draft one sentence and an evidence test for each of the four categories"
                - "Agree the definitions with every manager who submits a forecast"
                - "Send the final page to every seller and link it from the forecast report"
            - name: Weekly forecast calendar and cut-off times
              description: |-
                ## Purpose
                Forecasts go stale when sellers update on Thursday, managers roll up on Monday and finance reads the result on Wednesday. A fixed calendar saying when sellers submit, when managers call their number and when leadership receives the roll-up means everyone is looking at the same week.

                ## Milestones
                1. A weekly cut-off day and time for seller submissions.
                2. A manager roll-up deadline and a leadership delivery time fixed after it.
                3. Quarter-end weeks marked where the rhythm tightens.
                4. The calendar sent to sellers, managers and finance with recurring holds in place.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written forecast calendar with weekly seller, manager and leadership deadlines is shared with finance and sits in everyone's calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Map who currently updates the forecast on which day of the week"
                - "Choose a seller cut-off, a manager deadline and a leadership delivery time"
                - "Send recurring calendar holds for each deadline"
                - "Publish the next quarter's forecast calendar with quarter-end weeks marked @recurring(quarterly)"
            - name: One forecast report as the source of truth
              description: |-
                ## Purpose
                When the chief executive's spreadsheet, the CRM dashboard and a manager's slide show three different numbers, the meeting is spent reconciling instead of deciding. Choosing one saved report, with fixed filters for period, amount field, owner and category, gives every forecast conversation the same starting figure.

                ## Milestones
                1. One saved CRM report named as the official forecast source.
                2. Filters for close period, amount field, deal type and forecast category written down.
                3. Every other forecast spreadsheet retired or labelled as unofficial.
                4. Leadership, finance and managers all reading from the same link.

                ## Notes
                Lock the report so only one person can change its filters. A quietly edited filter is the most common reason a forecast jumps overnight with no deal having moved.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single named forecast report with documented filters is the only figure used in leadership forecast discussions for a full quarter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect every forecast report and spreadsheet currently in circulation"
                - "Pick the report to keep and write its filters down in one paragraph"
                - "Tell managers and finance which link is now the official one"
                - "Check the forecast report filters still match the written definitions @recurring(quarterly)"
            - name: Historical win rates by stage
              description: |-
                ## Purpose
                Most CRMs ship with stage percentages like 10, 25, 50 and 75 that nobody in your company chose. Pulling four to eight quarters of closed deals and working out how often a deal that reached each stage actually won gives the weighted forecast numbers grounded in your own history rather than a vendor's default.

                ## Milestones
                1. Closed won and closed lost deals from at least four quarters exported.
                2. A win rate calculated for deals reaching each stage, by count and by value.
                3. Rates split by deal type or segment where the sample is large enough to trust.
                4. A short note comparing your measured rates with the CRM defaults.

                ## Notes
                Count a deal at every stage it reached, not only the one it died in, or the early stages will look far worse than they are.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of stage win rates by count and by value from at least four quarters of closed deals, compared in writing with the CRM's default percentages."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export closed won and lost deals from the last four to eight quarters"
                - "Count how many deals reaching each stage went on to win"
                - "Calculate the same rates weighted by deal value"
                - "Write a note comparing your rates with the CRM's default percentages"
            - name: Close date rules for forecast deals
              description: |-
                ## Purpose
                A close date that reflects the seller's hope rather than the buyer's plan is the single biggest source of forecast error. Writing down what a valid close date must be anchored to, and what happens when it moves, stops deals sliding quietly from one month to the next while still counting in the current one.

                ## Milestones
                1. A rule that every close date ties to a buyer event such as a board meeting, budget deadline or contract expiry.
                2. A limit on how many times a deal may be pushed before it is reviewed with the manager.
                3. A rule for deals with past close dates, applied in the forecast report.
                4. The rules added to the forecast definitions page.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written close date rules covering anchoring, pushes and past dates sit on the definitions page, with past-dated deals flagged in the forecast report."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count open deals whose close dates are already in the past"
                - "Write the buyer event every close date must be anchored to"
                - "Set a push limit and the review it triggers"
                - "Add a past close date flag to the forecast report"
            - name: Weekly pipeline snapshot archive
              description: |-
                ## Purpose
                Your CRM shows the pipeline as it is right now, so last month's forecast and the deals behind it vanish as soon as anyone edits a record. Saving a frozen copy of every open deal each Monday is what makes forecast accuracy, slip tracking and any later modelling possible at all.

                ## Milestones
                1. A snapshot layout with deal ID, amount, stage, close date, category and owner.
                2. A folder or table where each week's snapshot is stored under its date.
                3. Twelve consecutive weekly snapshots saved without a gap.
                4. A named backup person who takes the snapshot when you are away.

                ## Notes
                Many CRMs offer reporting snapshots or historical trending that do this automatically. Check yours before building a manual export.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive dated weekly snapshots of the open pipeline are stored, each with the same columns."
                cadence: rolling
              tasks:
                - "Check whether your CRM can store reporting snapshots automatically"
                - "Choose the columns every snapshot must hold"
                - "Name a backup person for the weeks you are away"
                - "Save the Monday pipeline snapshot under its date @recurring(weekly:mon)"
            - name: Forecast accuracy measure and target
              description: |-
                ## Purpose
                Saying the forecast was pretty close is not a measurement, and without one nobody can tell whether the process is improving. Choosing when the call is frozen for scoring, such as the first week of each month in the quarter, and how the gap to actual bookings is calculated gives leadership a number to hold the whole process to.

                ## Milestones
                1. Freeze points chosen, for example week one, week five and week nine of the quarter.
                2. A formula agreed for error and a separate one for bias, showing whether calls run high or low.
                3. An accuracy target set with sales leadership and finance.
                4. Last quarter scored with the new method as a baseline.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written accuracy method with freeze points, error and bias formulas and a target, applied to last quarter as a recorded baseline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the weeks in the quarter when the forecast is frozen for scoring"
                - "Write the formulas for forecast error and forecast bias"
                - "Agree an accuracy target with the head of sales and finance"
                - "Score last quarter's frozen calls against actual bookings"
            - name: Deal value conventions for the forecast
              description: |-
                ## Purpose
                Three-year contracts entered at full value by one seller and at one year by another make the forecast meaningless before anyone calls a number. Agreeing which value goes in the amount field, and how multi-year, renewal, services and foreign currency deals are entered, removes a quiet and persistent source of disagreement with finance.

                ## Milestones
                1. One value definition chosen for the forecast, such as annual contract value.
                2. Rules written for multi-year, renewal, one-off services and expansion deals.
                3. A currency rule naming the exchange rate source and when the rate is fixed.
                4. Written agreement from finance that the convention matches how bookings are reported.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A deal value convention covering multi-year, renewal, services and currency deals is signed off by finance and added to the definitions page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find five recent deals entered with different value conventions"
                - "Draft the value rule and the exceptions for each deal type"
                - "Agree the exchange rate source and fixing date with finance"
                - "Get written sign-off from finance on the final convention"
            - name: Forecast roll-up hierarchy and override rules
              description: |-
                ## Purpose
                In any team with more than one level, the number leadership sees is several people's judgements stacked on top of each other. Writing down who submits to whom, whether a manager's call replaces or sits beside the seller's, and how adjustments are recorded keeps the roll-up traceable when the number changes between Monday and Wednesday.

                ## Milestones
                1. A diagram of the roll-up from seller to manager to region to company.
                2. A rule for whether managers overwrite seller calls or record their own alongside.
                3. Each level's call stored in its own field or column so changes can be traced.
                4. Every manager walked through the rules before the next cut-off.

                ## Notes
                Keeping the seller's call and the manager's call side by side is the usual default. Overwriting loses the information you need to measure each person's accuracy later.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented roll-up hierarchy with override rules is in place, with each level's call stored separately and visible to the level above."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch the forecast roll-up from seller to company"
                - "Decide whether managers overwrite or sit beside seller calls"
                - "Set up a separate field or column for each level's call"
                - "Walk every manager through the roll-up rules"
            - name: Seller weekly forecast submission routine
              description: |-
                ## Purpose
                Sellers hold the knowledge the forecast depends on, but a submission that takes forty minutes gets done late or badly. A short weekly routine of updating close dates, amounts and categories on every deal closing this quarter, plus one line of commentary on the five largest, gives managers a call they can work with by the cut-off.

                ## Milestones
                1. A checklist of the fields every seller updates before the cut-off.
                2. A one-line commentary standard for the five largest deals closing this quarter.
                3. Submissions arriving on time for eight weeks in a row.
                4. Average time spent on the submission under twenty minutes.

                ## Notes
                Good commentary says what changed since last week and what happens next, with a date. Repeating the stage name tells the manager nothing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every seller submits an updated forecast with commentary on their five largest deals before the cut-off for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Write the field checklist every seller follows before the cut-off"
                - "Show sellers two examples of useful one-line deal commentary"
                - "Update close dates, amounts and categories and submit your call @recurring(weekly:mon)"
                - "Time one submission and cut any step nobody downstream reads"
            - name: Manager's weekly forecast call
              description: |-
                ## Purpose
                Front-line managers are not meant to add up seller calls; their forecast is their own judgement on which deals will land. Spending a fixed hour each week testing commit deals against the evidence rules, adjusting where it is thin and writing the number with its reasons builds the track record leadership relies on.

                ## Milestones
                1. A weekly hour blocked straight after the seller cut-off.
                2. Each commit and best case deal tested against the category evidence rules.
                3. A manager call recorded with a sentence explaining every difference from the seller roll-up.
                4. Ten consecutive weekly calls submitted on time.

                ## Notes
                Start from the **Meeting notes** template for the short forecast check-in with each seller, so adjustments and their reasons are written down the same day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten consecutive weekly manager calls are submitted on time, each with written reasons for every difference from the seller roll-up."
                cadence: rolling
              tasks:
                - "Block a weekly hour straight after the seller cut-off"
                - "Test each commit deal against the category evidence rules"
                - "Record your call and the reason for every adjustment @recurring(weekly:tue)"
                - "Tell each seller which of their deals you moved and why"
            - name: Weekly forecast note to leadership
              description: |-
                ## Purpose
                Executives want the number, what moved since last week and what could still move it, not a pipeline export. A one-page note sent at the same time each week, with commit, best case, the gap to target and the three deals that matter most, saves the leadership meeting from rebuilding the forecast live on screen.

                ## Milestones
                1. A one-page layout with number, change, gap to target and key deals.
                2. The note sent at the agreed time for eight consecutive weeks.
                3. A standard sentence for each key deal saying what has to happen and by when.
                4. Leadership confirming the note answers the questions they usually ask.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-page forecast note reaches leadership at the agreed time for eight consecutive weeks, each one showing the change since the previous week."
                cadence: rolling
              tasks:
                - "Ask two executives what they look for first in a forecast update"
                - "Draft the one-page layout with number, change, gap and key deals"
                - "Ask the agent to summarise the week-on-week change from the two latest snapshots"
                - "Send the weekly forecast note at the agreed time @recurring(weekly:wed)"
            - name: Commit deal evidence check
              description: |-
                ## Purpose
                Commit deals carry the forecast, so one that collapses in the last week does more damage than ten pipeline deals going quiet. Checking each commit deal weekly for a named signatory, a confirmed paper process and a dated close plan catches the soft ones while there is still time to rescue or replace them.

                ## Milestones
                1. A five-line evidence checklist every commit deal must meet.
                2. Each commit deal marked green or amber against it every week.
                3. Amber deals given one action and an owner within two working days.
                4. A quarter in which no commit deal was lost without a prior amber flag.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every commit deal is marked against the evidence checklist weekly for a full quarter, with each amber deal given an owner and an action."
                cadence: rolling
              tasks:
                - "Turn the commit evidence test into a five-line checklist"
                - "Mark every commit deal green or amber against the checklist @recurring(weekly:thu)"
                - "Give each amber deal one action and an owner"
                - "Check at quarter end which lost commit deals had been flagged amber"
            - name: Slipped deal log
              description: |-
                ## Purpose
                A deal pushed into next quarter is not lost, but when it keeps happening the forecast is running too optimistic in a way no single week reveals. Logging every deal that moves out of its period, with the real reason and how many times it has moved, shows which slips are buyer-driven and which deals were never real.

                ## Milestones
                1. A log with deal, amount, original close date, new close date and reason.
                2. A short fixed list of slip reasons used by everyone.
                3. Every slipped deal from the last full quarter recorded.
                4. A monthly total of slipped value set beside the forecast.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deal that left its forecast period in the last quarter is in the log with a reason, and slipped value is totalled each month."
                cadence: rolling
              tasks:
                - "Set up the slipped deal log with its columns and reason list"
                - "Back-fill last quarter's slipped deals from your snapshots"
                - "Add the month's slipped deals and total their value @recurring(monthly:3)"
                - "Raise any deal that has slipped three times with its owner directly"
            - name: Monthly forecast accuracy scorecard
              description: |-
                ## Purpose
                Measuring accuracy once a quarter is too late to change anything in that quarter. A monthly scorecard comparing each frozen call with what actually closed, by seller, manager and team, shows who runs consistently high, who runs low and whether the process is getting better.

                ## Milestones
                1. A scorecard with frozen call, actual and error by person and by team.
                2. Bias shown for each person as consistently over, under or balanced.
                3. Six monthly scorecards completed in a row.
                4. The scorecard discussed with managers each month.

                ## Notes
                Start from the **Metrics log** template. Share individual results privately at first; a public league table tends to reward sandbagging rather than accuracy.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly scorecards show error and bias by seller, manager and team, each discussed with managers."
                cadence: rolling
              tasks:
                - "Build the scorecard from the metrics log template"
                - "Fill in the month's frozen calls against actual bookings @recurring(monthly:5)"
                - "Share each person's accuracy with them privately"
                - "Discuss the team's bias trend at the next managers' meeting"
            - name: Quarter-end forecast lockdown
              description: |-
                ## Purpose
                In the last three weeks of a quarter the forecast changes almost daily, and every hour of a seller's time matters. Switching to a tighter rhythm, with short commit calls on fixed days, a live list of deals still to sign and a clear escalation path, keeps the final number predictable instead of a surprise on the last afternoon.

                ## Milestones
                1. The lockdown start set three weeks before quarter end.
                2. A live list of every deal expected to sign with its remaining steps.
                3. Short commit calls held on fixed days through the final three weeks.
                4. The final number landing inside the agreed accuracy target.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "The lockdown rhythm runs through the final three weeks of the quarter and the closing number lands within the agreed accuracy target."
                cadence: cyclic
              tasks:
                - "Mark the lockdown start three weeks before quarter end @recurring(quarterly)"
                - "Build the live list of deals still to sign with their remaining steps"
                - "Fix the days for short commit calls in the final three weeks"
                - "Agree who approves escalations during the last week"
            - name: Early forecast for next quarter
              description: |-
                ## Purpose
                Leadership wants a view of next quarter long before this one ends, and the only evidence available is the pipeline already dated into it. A monthly check of next quarter's pipeline by stage, weighted with your own win rates, gives an early read on whether it is shaping up or needs more pipeline now while there is time to create it.

                ## Milestones
                1. Next quarter's open pipeline pulled by stage and category.
                2. A weighted early forecast produced using your historical stage rates.
                3. The early forecast compared with next quarter's target every month.
                4. Any shortfall flagged to sales and marketing leaders at least eight weeks ahead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weighted early forecast for next quarter is compared with its target every month, with any shortfall reported at least eight weeks before the quarter starts."
                cadence: rolling
              tasks:
                - "Pull next quarter's open pipeline by stage"
                - "Apply your stage win rates to produce an early forecast"
                - "Compare next quarter's early forecast with its target @recurring(monthly:12)"
                - "Send any shortfall to sales and marketing leaders with the size of the gap"
            - name: Quarterly upside and risk register
              description: |-
                ## Purpose
                A forecast number without its risks invites false comfort, and one without its upside invites panic. Keeping a short register of the deals that could add to or subtract from the call, each with a value and likelihood, lets leadership see the realistic spread rather than a single point.

                ## Milestones
                1. A register listing each upside and risk deal with value and likelihood.
                2. The register refreshed weekly alongside the forecast.
                3. The net of upside and risk shown beside the commit number.
                4. Each risk given a mitigation step and an owner.

                ## Notes
                Start from the **Risk register** template. Keep it to the deals that would move the number by a meaningful amount; a register of fifty lines will not be read.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An upside and risk register is refreshed weekly for a full quarter, with its net value shown beside the commit number."
                cadence: rolling
              tasks:
                - "Set up the register from the risk register template"
                - "List every deal that could add to or subtract from this quarter's call"
                - "Refresh value and likelihood for each register entry @recurring(weekly:fri)"
                - "Give each risk a mitigation step and an owner"
            - name: Monthly reconciliation with the finance plan
              description: |-
                ## Purpose
                Finance plans hiring, spend and cash from the sales forecast, so a gap between the two numbers turns into real cost. Meeting your finance partner once a month to reconcile bookings, timing and value conventions keeps the revenue plan and the sales forecast describing the same business.

                ## Milestones
                1. A recurring monthly meeting with the finance partner in place.
                2. Sales forecast and finance plan compared line by line for the quarter.
                3. Every difference labelled as timing, value convention or genuine risk.
                4. Agreed changes reflected in both documents within a week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly reconciliations held with finance, each with every difference labelled and agreed changes made in both documents."
                cadence: rolling
              tasks:
                - "Book a recurring monthly slot with your finance partner"
                - "List the differences between the sales forecast and the finance plan @recurring(monthly:20)"
                - "Label each difference as timing, value or genuine risk"
                - "Update both documents with the changes you agreed"
            - name: Weighted versus judgement forecasting methods
              description: |-
                ## Purpose
                There are two basic ways to forecast a pipeline: multiply deal values by stage probability, or ask the people closest to each deal to call it. Each fails in a predictable way, so learning both and running them side by side for a quarter shows which your team should lead with and where each one breaks.

                ## Milestones
                1. The mechanics and typical failure of each method written in a paragraph.
                2. Both forecasts produced every week for one quarter.
                3. Both compared with actual bookings at quarter end.
                4. A written conclusion on which method to lead with and how to use the other.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Weighted and judgement forecasts run side by side for one quarter, with a written conclusion on which was more accurate and why."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a short guide to weighted and judgement-based forecasting"
                - "Set up a sheet that produces both forecasts from the same pipeline"
                - "Record both forecasts each week through the quarter"
                - "Compare both with actual bookings and write your conclusion"
            - name: Practice calling deals into categories
              description: |-
                ## Purpose
                Placing a deal in commit or best case is a judgement that improves with deliberate practice, not just years in the job. Taking ten closed deals from last quarter, hiding the outcome and calling each from its mid-quarter notes, then checking, trains the eye for the signals that really predict a signature.

                ## Milestones
                1. Ten closed deals chosen, mixing won, lost and slipped.
                2. Each called from its mid-quarter notes with the outcome hidden.
                3. Calls checked against outcomes with every miss explained.
                4. A list of three signals you will now weight more heavily.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten past deals called blind from mid-quarter notes, scored against outcomes, with three signals written down that would have changed the misses."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask a colleague to pick ten closed deals and hide the outcomes"
                - "Call each deal's category from its mid-quarter notes and snapshot"
                - "Check your calls against what actually happened"
                - "Write down the three signals that would have changed your misses"
            - name: Run-rate forecasting for high-volume deals
              description: |-
                ## Purpose
                Teams closing hundreds of small deals a month cannot call each one, and deal-by-deal forecasting there wastes manager time. Learning to forecast that revenue from run rate, seasonality and the pipeline created a set number of weeks earlier gives a reliable number for the volume segment while the forecast call focuses on larger deals.

                ## Milestones
                1. Monthly bookings for the small-deal segment charted for two years.
                2. Seasonal patterns and average days from creation to close identified.
                3. A simple run-rate forecast built and tested against last quarter.
                4. A deal size agreed below which deals leave the deal-by-deal call.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A run-rate forecast for small deals, tested against last quarter, is in use and a size threshold for leaving the deal-by-deal call is agreed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Export two years of monthly bookings for small deals"
                - "Chart them and mark the seasonal highs and lows"
                - "Build a run-rate forecast and test it on last quarter"
                - "Agree the deal size below which deals are forecast by run rate"
            - name: Building a forecast model in a spreadsheet
              description: |-
                ## Purpose
                Even teams with a forecasting tool end up needing a spreadsheet for scenarios, board questions and quick what-ifs. Learning to build a clean one, with a raw data tab, a calculation tab and a summary that never contains a hand-typed number, means a leadership question gets answered in minutes rather than over a weekend.

                ## Milestones
                1. A model with separate data, calculation and summary tabs.
                2. Every summary figure traced back to a formula, none typed in.
                3. Commit, best case and weighted views produced from one data paste.
                4. A colleague able to refresh the model from written instructions alone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A three-tab forecast model producing commit, best case and weighted views is refreshed by a colleague using only the written instructions."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Sketch the tabs and outputs the model needs on paper"
                - "Build the data tab from a current snapshot export"
                - "Write formulas for the commit, best case and weighted views"
                - "Hand the model to a colleague with refresh instructions and watch them use it"
            - name: Spotting sandbagging and happy ears
              description: |-
                ## Purpose
                Some sellers call low so they can beat their number, others call high because they believe every buyer, and the two errors push the roll-up in opposite directions. Learning the behaviours behind each bias, and how to coach them out without punishing honesty, is a core forecasting skill for any manager.

                ## Milestones
                1. Typical signs of sandbagging and over-optimism written down from your own team's history.
                2. Each seller's bias from the accuracy scorecard reviewed.
                3. One private conversation held with a seller at each end of the range.
                4. A measurable change in those sellers' bias within two quarters.

                ## Notes
                Sandbagging often follows a manager who punished a missed commit. If several sellers call low, look at how misses have been handled before looking at the sellers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two sellers with opposite biases coached privately, with their bias rechecked on the accuracy scorecard two quarters later."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the signs of sandbagging and over-optimism you have seen on your team"
                - "Find each seller's bias on the accuracy scorecard"
                - "Hold a private conversation with one seller at each end of the range"
                - "Check their bias again after two quarters"
            - name: Deal age limits for forecast eligibility
              description: |-
                ## Purpose
                Deals that sit far longer than your normal sales cycle close at a fraction of the rate of fresh ones, yet they often stay in commit or best case on inertia. Working out how long won deals usually spend in each stage, and setting an age past which a deal drops a category, removes a steady source of inflation.

                ## Milestones
                1. Median days in each stage calculated for won deals.
                2. Win rates compared for deals above and below that age.
                3. An age limit per stage agreed with managers.
                4. Over-age deals flagged in the forecast report.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An age limit for each stage, backed by won and lost deal data, is agreed with managers and over-age deals are flagged in the forecast report."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate median days in each stage for deals that won"
                - "Compare win rates for deals above and below that age"
                - "Agree an age limit for each stage with managers"
                - "Flag over-age deals in the forecast report"
            - name: Presenting the forecast as a range
              description: |-
                ## Purpose
                Single-number forecasts imply a certainty no sales forecast has, and they set up an argument when the result lands either side of it. Learning to present a low, expected and high case, with the assumption behind each and a width based on your real past error, helps leadership plan for the spread they will actually get.

                ## Milestones
                1. Low, expected and high cases defined from forecast categories.
                2. The assumption separating each case written in a sentence.
                3. Your historical error used to set how wide the range should be.
                4. The range format used in one leadership forecast update.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One leadership forecast update presents low, expected and high cases with written assumptions and a width set from historical error."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Define the low, expected and high cases using your forecast categories"
                - "Write the assumption that separates each case"
                - "Use last year's forecast error to set the width of the range"
                - "Present the range in your next leadership forecast update"
            - name: Choosing a forecasting tool or staying in spreadsheets
              description: |-
                ## Purpose
                Dedicated forecasting tools promise automatic roll-ups, snapshots and deal risk scores, but they cost money and need clean data to be worth it. Deciding between a specialist tool, the CRM's own forecast module and a well-kept spreadsheet, against your team size and data quality, avoids paying for features nobody will open.

                ## Milestones
                1. Requirements written: roll-up levels, snapshots, overrides and integrations.
                2. The CRM's built-in forecast module tested against them.
                3. Two or three dedicated tools trialled with a copy of your own pipeline.
                4. A decision recorded with cost, owner and rollout date.

                ## Notes
                Start from the **Purchase decision** template. A tool will not fix unclear categories or invented close dates, so settle those foundations first.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the forecasting tool, with cost, owner and rollout date, made after testing the CRM module and at least two alternatives."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write your forecasting requirements on one page"
                - "Test the CRM's own forecast module against the requirements"
                - "Trial two dedicated tools with a copy of your pipeline"
                - "Record the decision with cost, owner and rollout date"
            - name: Replacing default stage probabilities
              description: |-
                ## Purpose
                Once you have measured your own win rates, leaving the CRM's default percentages in place means the weighted pipeline is still wrong every day. Replacing them with your measured rates, and telling everyone why the numbers moved, turns the weighted forecast into a fair cross-check on human judgement.

                ## Milestones
                1. New stage probabilities chosen from the historical win rate table.
                2. The change approved by sales leadership and finance.
                3. Probabilities updated in the CRM with the change date noted on the forecast report.
                4. A yearly refresh scheduled.

                ## Notes
                Expect the weighted pipeline to drop when you switch. Explain the change in the leadership note that week so nobody reads it as a collapse in demand.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Stage probabilities in the CRM match the measured win rate table, with the change approved by finance and dated on the forecast report."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose new stage probabilities from your win rate table"
                - "Get approval from sales leadership and finance"
                - "Update the probabilities and note the change date on the forecast report"
                - "Refresh stage probabilities from the latest year of closed deals @recurring(yearly)"
            - name: Separate forecasts for new business, expansion and renewal
              description: |-
                ## Purpose
                New customers, upsells and renewals close at very different rates, and mixing them into one number hides which part of the business is off track. Splitting the forecast by revenue type, each with its own categories and owner, shows leadership where a miss is coming from before it arrives.

                ## Milestones
                1. Every open deal tagged as new business, expansion or renewal.
                2. Separate commit and best case numbers produced for each type.
                3. An owner named for each forecast line.
                4. Leadership receiving the split view for a full quarter.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The forecast is reported as three named lines for new business, expansion and renewal, each with an owner, for a full quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Tag every open deal with its revenue type"
                - "Produce commit and best case figures for each type"
                - "Name an owner for each revenue type forecast"
                - "Add the split view to the weekly leadership note"
            - name: Bookings linearity across the quarter
              description: |-
                ## Purpose
                When half a quarter's bookings land in the final fortnight, the forecast stays uncertain until the last day and discounts creep in under deadline pressure. Measuring how bookings spread across the quarter, and agreeing a target share by the end of each month, gives the forecast earlier proof points.

                ## Milestones
                1. Bookings by week charted for the last four quarters.
                2. The share of each quarter booked in its final two weeks calculated.
                3. A linearity target agreed with sales leadership.
                4. Progress against the target shown on the monthly accuracy scorecard.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A linearity target agreed with sales leadership, based on four quarters of weekly bookings, is tracked on the monthly scorecard."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Chart bookings by week for the last four quarters"
                - "Work out the share booked in each quarter's final two weeks"
                - "Propose a month-by-month linearity target to sales leadership"
                - "Add linearity to the monthly accuracy scorecard"
            - name: Rules for pulling deals into the current quarter
              description: |-
                ## Purpose
                Pulling next quarter's deals forward with extra discount can rescue a quarter and then hollow out the next one. Agreeing when a pull-in is allowed, what it may cost and how it shows in both quarters' forecasts stops a short-term save becoming a hole nobody planned for.

                ## Milestones
                1. A record of deals pulled forward in the last year and what each cost.
                2. Conditions written for when a pull-in is allowed.
                3. A rule for showing pull-ins in both quarters' forecasts.
                4. The rules agreed by sales leadership and finance.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written pull-in rules, based on a year of past pull-ins and their cost, are agreed by sales leadership and finance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List deals pulled into an earlier quarter in the last year"
                - "Total the extra discount and the gap left in the following quarter"
                - "Write the conditions under which a pull-in is allowed"
                - "Agree the rules with sales leadership and finance"
            - name: Quarterly stale deal purge
              description: |-
                ## Purpose
                Pipelines fill with deals nobody has touched in months, and every one of them inflates coverage and the weighted number. A quarterly purge, where owners either give a stale deal a real dated next step or close it as lost, keeps the forecast base honest without a debate on every record.

                ## Milestones
                1. A stale rule agreed, such as no buyer contact in 45 days or a close date pushed twice.
                2. Every stale deal sent to its owner with a one-week deadline.
                3. Unresolved stale deals closed as lost with a reason.
                4. Pipeline value before and after each purge recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly purges completed, each with stale deals resolved or closed and pipeline value recorded before and after."
                cadence: cyclic
              tasks:
                - "Agree the rule that marks a deal as stale"
                - "Send each owner their stale deals with a one-week deadline"
                - "Close unresolved stale deals as lost with a reason"
                - "Run the stale deal purge and record value before and after @recurring(quarterly)"
            - name: Forecasting partner and reseller deals
              description: |-
                ## Purpose
                Deals sold through resellers or partners often appear late and with thin detail, so they either vanish from the forecast or sit in it on trust. Agreeing what information partners share, and how their deals enter each category, brings that revenue into the call with the same rigour as direct deals.

                ## Milestones
                1. Partner-sourced bookings from the last four quarters measured as a share of total.
                2. A minimum information set requested from partners for each deal.
                3. A rule for how partner deals enter each forecast category.
                4. Partner deals shown as a separate line in the forecast.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Partner deals appear as a separate forecast line under written category rules, with partners supplying an agreed minimum of deal information."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Measure partner-sourced bookings as a share of the last four quarters"
                - "Write the minimum deal information partners must share"
                - "Set the rule for which category a partner deal can enter"
                - "Show partner deals as their own line in the forecast report"
            - name: Quarterly executive forecast session
              description: |-
                ## Purpose
                Once a quarter the head of sales usually presents the outlook to the executive team, and it shapes hiring and spending decisions. Preparing a short pack with last quarter's accuracy, this quarter's range, next quarter's early read and the decisions needed keeps the session about choices rather than reconciliation.

                ## Milestones
                1. A pack of no more than six slides covering accuracy, range, next quarter and asks.
                2. Every figure checked against the finance plan before the meeting.
                3. Two or three decisions requested explicitly.
                4. Decisions and actions sent to attendees within a day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A quarterly executive forecast session held with a pack of six slides or fewer, and decisions sent to attendees within one day."
                cadence: cyclic
              tasks:
                - "Book the quarterly executive forecast session @recurring(quarterly)"
                - "Draft the six-slide pack with accuracy, range and next quarter"
                - "Check every figure against the finance plan"
                - "Send decisions and actions to attendees the day after"
            - name: Bottom-up forecast for the annual plan
              description: |-
                ## Purpose
                Next year's revenue target is often set top-down and then argued about for months. Building a bottom-up forecast from the existing customer base, current pipeline, measured win rates and planned hiring gives leadership a defensible number to set beside the top-down ambition before budgets are fixed.

                ## Milestones
                1. Renewal and expansion base calculated from current customers.
                2. New business estimated from pipeline, win rates and planned seller capacity.
                3. Bottom-up and top-down numbers set side by side with the gap explained.
                4. The agreed forecast handed to finance before the budget deadline.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A bottom-up annual forecast with a written explanation of its gap to the top-down target reaches finance before the budget deadline."
                cadence: cyclic
              tasks:
                - "Ask finance for the date annual plan numbers are due @recurring(yearly)"
                - "Calculate the renewal and expansion base from current customers"
                - "Estimate new business from pipeline, win rates and hiring plans"
                - "Write one page explaining the gap between bottom-up and top-down"
            - name: Revenue outlook for the board pack
              description: |-
                ## Purpose
                Boards look for consistency between what was forecast last time and what happened, often more than the size of the number. Preparing the revenue section of the board pack with last quarter's call against actual, the current range and its key assumptions builds the board's trust in the sales numbers over time.

                ## Milestones
                1. Last quarter's board forecast compared with actual in one chart.
                2. The current quarter shown as a range with its assumptions.
                3. The likely board questions listed with prepared answers.
                4. Questions raised at the meeting and their follow-ups recorded.

                ## Notes
                Start from the **Board meeting** template. Agree the figures with the finance lead first; the board should never see two versions of revenue.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The board pack's revenue section compares the last forecast with actual and shows a range, with board questions and follow-ups recorded."
                cadence: cyclic
              tasks:
                - "Pull last quarter's board forecast and the actual result"
                - "Chart the current quarter as a low, expected and high case"
                - "List the five questions the board is most likely to ask"
                - "Record board questions and send follow-ups within a week"
            - name: Quarter close forecast post-mortem
              description: |-
                ## Purpose
                Every quarter's miss or beat has causes, and they are forgotten within a fortnight once the new quarter starts. A one-hour review after close, using the snapshots and slip log to trace where the call went wrong, turns each quarter into a specific lesson for the next.

                ## Milestones
                1. Final bookings compared with the call at each freeze point.
                2. The largest sources of error listed by deal and by cause.
                3. Two process changes agreed for next quarter with owners.
                4. Last quarter's changes checked for effect at each post-mortem.
              priority: medium
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A post-mortem held within three weeks of each quarter close, recording the main error sources and two changes with owners."
                cadence: cyclic
              tasks:
                - "Book the post-mortem for the second week after quarter close @recurring(quarterly)"
                - "Trace the gap between each frozen call and final bookings"
                - "List the five deals that contributed most to the error"
                - "Agree two process changes and an owner for each"
            - name: Reforecast after a major deal loss or market shock
              description: |-
                ## Purpose
                Losing a flagship deal, a price change or a sudden downturn in a key sector can make the current forecast wrong overnight. Running a structured reforecast within a week, rechecking every commit deal and resetting the range, gives leadership a new number before the old one drives decisions it no longer supports.

                ## Milestones
                1. The trigger and its likely effect written in one paragraph.
                2. Every commit and best case deal rechecked with its owner.
                3. A revised range sent to leadership with the changes explained.
                4. The original and revised forecasts kept for the post-mortem.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A revised forecast range, with every commit and best case deal rechecked, reaches leadership within a week of the triggering event."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a paragraph on what changed and which deals it touches"
                - "Recheck every commit and best case deal with its owner"
                - "Send leadership a revised range with the changes explained"
                - "Save both versions of the forecast for the quarter's post-mortem"
            - name: New manager's first forecast quarter
              description: |-
                ## Purpose
                Newly promoted managers are often asked for a number in the first week, before knowing which sellers call high and which deals are real. Spending the first quarter learning each seller's history, watching how the current call is made and calling cautiously gives a credible first number and a baseline to improve on.

                ## Milestones
                1. Each seller's last four quarters of calls and actuals reviewed.
                2. One forecast call observed before running your own.
                3. A first forecast submitted with written reasoning for each adjustment.
                4. End-of-quarter accuracy recorded as your starting baseline.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A first quarter of manager calls submitted with written reasoning, and end-of-quarter accuracy recorded as a personal baseline."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Pull each seller's last four quarters of forecast calls and results"
                - "Sit in on one forecast call before you run your own"
                - "Ask your own manager how they judge a good forecast"
                - "Record your first quarter's accuracy as a baseline"
            - name: A seller's personal forecast track record
              description: |-
                ## Purpose
                For an individual seller, being known as someone whose number holds is worth nearly as much as hitting it, because it earns trust, air cover and help on hard deals. Keeping your own call, checking it against outcomes each quarter and learning your personal bias makes your forecast one your manager stops second-guessing.

                ## Milestones
                1. Your own commit and best case recorded each week in a private sheet.
                2. Your mid-quarter call compared with your actual at quarter end.
                3. Your personal bias named in one sentence.
                4. Two quarters in a row within ten percent of your mid-quarter call.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive quarters in which your actual bookings land within ten percent of your own mid-quarter call."
                cadence: rolling
              tasks:
                - "Start a private sheet of your weekly commit and best case"
                - "Compare your mid-quarter call with your actual bookings @recurring(quarterly)"
                - "Write one sentence on whether you tend to call high or low"
                - "Ask your manager which of your deals they doubted and why"
            - name: Inheriting a team's forecast mid-quarter
              description: |-
                ## Purpose
                Taking over a team partway through a quarter means inheriting someone else's call and the promises made in it. Auditing every commit deal in the first fortnight, and agreeing with your own manager which number you now own, avoids being judged on a forecast you never made.

                ## Milestones
                1. The previous manager's last submitted call and its deals documented.
                2. Every commit deal reviewed with its seller within two weeks.
                3. A revised call agreed with your own manager, with differences explained.
                4. Ownership of the number confirmed in writing.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A revised forecast agreed in writing with your manager within 30 days of taking over, with every commit deal reviewed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Save the previous manager's last submitted call and deal list"
                - "Review each inherited commit deal with its seller"
                - "Write the differences between the inherited call and your own"
                - "Confirm in writing which number you now own"
            - name: Multi-region forecast consolidation
              description: |-
                ## Purpose
                Enterprises forecasting across regions face different quarter-end customs, currencies, time zones and local habits in how categories are used, all of which distort the global number. Standardising definitions, a currency rule and staggered submission times lets the global roll-up land on time and mean the same thing in every region.

                ## Milestones
                1. Each region's use of the categories compared with the global standard.
                2. One exchange rate rule applied to every regional forecast.
                3. Submission times staggered so each region submits inside its own working day.
                4. A global roll-up delivered on time for a full quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A global forecast built from regional submissions under one set of definitions and one currency rule is delivered on time for a full quarter."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compare each region's category definitions with the global standard"
                - "Apply one exchange rate rule to every regional forecast"
                - "Set staggered submission times across the time zones"
                - "Hold the regional forecast leads call to agree changes @recurring(monthly:15)"
            - name: Light forecast process for a small team
              description: |-
                ## Purpose
                Small teams of three to eight sellers, with nobody in sales operations, still need a forecast the owner or leadership can plan on. A light version, one spreadsheet, one fifteen-minute weekly call and one accuracy check a quarter, gives most of the value at a fraction of the effort.

                ## Milestones
                1. A one-sheet forecast with deal, value, close date, category and owner.
                2. A fifteen-minute weekly forecast call held for a full quarter.
                3. Accuracy measured once at quarter end.
                4. A written list of the triggers that would justify more process.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-sheet forecast and fifteen-minute weekly call run for a full quarter, with accuracy measured at the end."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set up the one-sheet forecast with its five columns"
                - "Hold a fifteen-minute forecast call each week for one quarter"
                - "Measure accuracy at quarter end against bookings"
                - "Write the triggers that would justify a forecasting tool or hire"
            - name: Forecasting lumpy enterprise deals
              description: |-
                ## Purpose
                Once two or three deals make up half the quarter, a stage percentage is meaningless, because each will land at full value or zero. Forecasting those deals one by one, with a dated close plan, procurement status and a scenario for each landing or slipping, keeps the quarter's range honest.

                ## Milestones
                1. A size threshold set above which a deal is forecast individually.
                2. Each large deal given a dated close plan and a procurement status.
                3. The quarter shown with and without each large deal.
                4. Leadership briefed on the range driven by the large deals alone.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every deal above the agreed size threshold is forecast individually, with leadership shown the quarter with and without each one."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set the deal size above which deals are forecast individually"
                - "Confirm the close plan and procurement status for each large deal"
                - "Show the quarter with and without each large deal"
                - "Brief leadership on the range driven by the large deals"
            - name: Statistical forecast from pipeline history
              description: |-
                ## Purpose
                With a year or more of weekly snapshots, it becomes possible to predict quarter outcomes from how the pipeline looked at each point, independent of anyone's judgement. Building a simple statistical model and testing it on past quarters gives a third view to set beside the weighted and judgement forecasts.

                ## Milestones
                1. At least four quarters of weekly snapshots cleaned and joined to outcomes.
                2. A model predicting bookings from pipeline by stage and week of quarter.
                3. The model tested on a quarter it was not built on, with its error recorded.
                4. The model's forecast shown beside the judgement call for a full quarter.

                ## Notes
                Start simple: a regression on pipeline by stage and week of quarter often beats a complex model on small data. Have an analyst check it before leadership sees it.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A statistical forecast model tested on at least one held-out quarter, with its error recorded, runs beside the judgement call for a full quarter."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Join four quarters of snapshots to final deal outcomes"
                - "Ask the agent to suggest model inputs from the snapshot columns"
                - "Test the model on a quarter it was not built on"
                - "Show the model's forecast beside the judgement call each week"
            - name: Pipeline waterfall analysis
              description: |-
                ## Purpose
                The forecast changes every week, and the useful question is why: new deals, wins, losses, pushes or value changes. A waterfall that splits the movement between two snapshots into those buckets shows leadership exactly where a change in the number came from.

                ## Milestones
                1. Movement categories defined: created, won, lost, pushed out, pulled in, value up and value down.
                2. A waterfall built from two consecutive snapshots.
                3. The waterfall produced monthly for six months.
                4. The largest movement each month explained in the leadership note.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Six monthly pipeline waterfalls produced from snapshots, each with its largest movement explained in the leadership note."
                cadence: rolling
              tasks:
                - "Define the movement categories for the waterfall"
                - "Build a waterfall from the latest two snapshots"
                - "Produce the monthly pipeline waterfall @recurring(monthly:8)"
                - "Explain the largest movement in the next leadership note"
            - name: Seller calibration factors for the roll-up
              description: |-
                ## Purpose
                If a seller has called twenty percent high for four quarters running, their raw commit is not the best estimate of what they will close. Calculating a calibration factor per seller from accuracy history, and showing it as a separate adjusted view, sharpens the roll-up without overwriting anyone's call.

                ## Milestones
                1. At least four quarters of calls and actuals collected for each seller.
                2. A calibration factor calculated for each seller with enough history.
                3. An adjusted roll-up shown beside the raw roll-up.
                4. Factors recalculated every quarter.

                ## Notes
                Keep factors private to the seller and their manager. Published factors become numbers to game rather than errors to fix.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An adjusted roll-up using per-seller calibration factors runs beside the raw roll-up, with factors recalculated each quarter."
                cadence: cyclic
              tasks:
                - "Collect four quarters of calls and actuals for each seller"
                - "Calculate each seller's calibration factor"
                - "Show an adjusted roll-up beside the raw one"
                - "Recalculate seller calibration factors @recurring(quarterly)"
            - name: Leading indicators for bookings two quarters out
              description: |-
                ## Purpose
                By the time a deal reaches commit, the quarter's outcome is largely fixed; the earlier signals sit in pipeline created and early stage progression months before. Finding which early measures predict bookings two quarters ahead gives leadership a forecast with enough lead time to act on.

                ## Milestones
                1. Four to six candidate indicators listed with at least two years of monthly history.
                2. Each indicator's relationship with bookings two quarters later measured.
                3. The two strongest indicators added to the early forecast for next quarter.
                4. A forecast made six months out and later scored against actual.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two leading indicators are shown to track bookings two quarters later, and a six-month-ahead forecast built on them is scored against actual."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List four to six early measures with monthly history"
                - "Compare each one with bookings two quarters later"
                - "Add the two strongest indicators to the early forecast"
                - "Score your six-month-ahead forecast when the quarter closes"
            - name: Forecasting usage-based revenue
              description: |-
                ## Purpose
                Usage-based pricing means a signed contract says little about when revenue arrives, so the forecast has to model how usage ramps. Combining committed minimums with observed consumption curves gives finance a revenue forecast for consumption deals it can actually use.

                ## Milestones
                1. Committed and consumption revenue separated for every customer.
                2. Typical ramp curves from signature to steady use calculated by segment.
                3. A consumption forecast built from the ramps and the open pipeline.
                4. The forecast compared with actual usage revenue for a full quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A consumption revenue forecast built from measured ramp curves is compared with actual usage revenue for a full quarter."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Split each customer's revenue into committed and consumption"
                - "Chart usage from signature to steady state by segment"
                - "Build a consumption forecast from the ramps and open pipeline"
                - "Compare the consumption forecast with actual usage revenue"
            - name: Forecast governance for external guidance
              description: |-
                ## Purpose
                In a listed company, or one reporting to lenders or investors, the sales forecast can feed external guidance, so how it was built must stand up to auditors and the finance committee. Documenting the method, the controls on changes and who signs off, with finance and legal, turns the process into something defensible.

                ## Milestones
                1. The forecast method written step by step from seller submission to final number.
                2. Controls listed for edits to snapshots, definitions and overrides.
                3. Sign-off owners named in sales and finance.
                4. The documentation reviewed by finance and internal audit.

                ## Notes
                Start from the **Compliance control** template. Agree the scope with your finance and legal teams; this project organises documentation and does not decide what may be disclosed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written forecast method, change controls and named sign-off owners are reviewed and accepted by finance and internal audit."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the forecast method from seller submission to final number"
                - "List who can edit snapshots, definitions and overrides"
                - "Name the sign-off owners in sales and finance"
                - "Send the documentation to finance and internal audit for review"
---

# Sales Pipeline Forecasting

This area is for sales managers, sellers and enterprise revenue leaders who have to produce a weekly number that leadership can plan on, and then show afterwards how close it was. It starts with the foundations (forecast categories, a calendar, one source report, your own stage win rates, close date and value rules, a snapshot archive and an accuracy measure), then the weekly and monthly routines that produce and check the call, the forecasting skills worth practising, the decisions that sharpen it, the quarterly events it feeds, the situations new managers, small teams and enterprises each face, and finally the specialist work of statistical models, seller calibration and consumption revenue.

What repeats is a Monday snapshot and rep submission, a Tuesday manager call, a Wednesday note to leadership, Thursday commit checks and a Friday risk register refresh, then monthly accuracy, slip, waterfall and finance reconciliations, quarterly lockdowns, purges and post-mortems, and the yearly plan forecast. The Meeting notes, Metrics log, Risk register, Purchase decision, Board meeting and Compliance control templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
