---
id: sales-revenue.sales-quota-capacity-modelling
name: Sales Quota & Capacity Modelling
description: "Quotas built from your own win rates, ramp curves and attrition, a capacity model that says how many sellers the revenue target really needs, and the monthly checks that keep both honest."
category: business
version: 1.0.0
tags: [sales-revenue, sales-quota-capacity-modelling, manager, founder, enterprise, quota-setting, sales-capacity, headcount-planning]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - purchase-decision
    - board-meeting
    - one-on-one
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Quota & Capacity Modelling
          description: "Setting realistic quotas from historical win rates, ramp time and pipeline coverage, and modelling how many reps are needed to hit the revenue target."
          projects:
            - name: Defining what counts toward quota
              description: |-
                ## Purpose
                Quota arguments in month eleven usually trace back to a question nobody answered in month one: does a renewal count, is it bookings or first-year value, and what happens to a multi-year deal. Writing the crediting rules down before any number is set means the capacity model, the quota letters and the attainment report all measure the same thing.

                ## Milestones
                1. The quota metric chosen and written in one sentence, such as new annual contract value or total bookings.
                2. Rules recorded for renewals, expansions, multi-year deals, discounts and deals that churn inside the period.
                3. Split credit and overlay crediting rules agreed for deals with more than one seller.
                4. The rules signed off by the sales leader and finance and stored where every seller can read them.

                ## Notes
                Keep the crediting rules separate from commission rates. The rules say what counts; the compensation plan says what it pays.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page crediting rules document covering the quota metric, renewals, multi-year deals and split credit, signed off by sales and finance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the deal types closed last year that caused crediting questions"
                - "Choose the quota metric and write it as one sentence"
                - "Draft rules for renewals, multi-year deals and split credit"
                - "Get written sign-off on the rules from finance and the sales leader"
            - name: Clean bookings history by seller and quarter
              description: |-
                ## Purpose
                Every number in a capacity model rests on history, and most CRMs hold closed deals with wrong owners, duplicate records and amounts that were never corrected after the contract changed. Pulling two or three years of closed won deals into one clean table, by seller, segment and quarter, gives you the evidence base for every later project in this area.

                ## Milestones
                1. Two to three years of closed won deals exported with seller, segment, close date and credited value.
                2. Duplicates, test records and reassigned deals corrected against finance's booked revenue.
                3. Each seller's start date, leave date and role changes added beside their deals.
                4. The cleaned table reconciled to finance's annual bookings within an agreed tolerance.

                ## Notes
                Reconcile to finance before you trust it. If your total is 8 percent above the booked figure, every productivity number built on it will be too.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A bookings table covering at least two years, by seller and quarter, that reconciles to finance's reported bookings within an agreed tolerance."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export every closed won deal from the last three years from the CRM"
                - "Ask finance for annual booked revenue to reconcile against"
                - "Correct duplicates, test deals and wrong owners in the export"
                - "Add each seller's start date, leave date and role changes to the table"
            - name: Win rate and deal size baseline by segment
              description: |-
                ## Purpose
                Quotas set from one company-wide win rate punish sellers in the hard segment and reward those in the easy one. Calculating win rate, average deal size and cycle length separately for each segment you sell into, from created opportunities rather than late-stage ones, shows how much pipeline each quota dollar really needs.

                ## Milestones
                1. Win rate from opportunity creation calculated for each segment over the last four quarters.
                2. Median and average deal size recorded per segment, with outliers noted.
                3. Median sales cycle length per segment worked out from creation to close.
                4. A one-page table of the three figures per segment saved with the capacity model.

                ## Notes
                Use the median deal size alongside the average. One very large deal can make a segment look twice as productive as it is.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table showing win rate, median deal size and median cycle length for every selling segment, built from four quarters of opportunities."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull all opportunities created in the last four quarters with their outcome"
                - "Calculate win rate from creation for each segment"
                - "Work out median deal size and median cycle length per segment"
                - "Save the segment table beside the capacity model"
            - name: Fully ramped seller productivity benchmark
              description: |-
                ## Purpose
                The most important single input in any capacity model is what one fully ramped seller actually closes in a year, and it is almost always lower than the quota they carry. Measuring it from sellers with at least a full year of tenure, by role and segment, replaces hopeful assumptions with your own evidence.

                ## Milestones
                1. Ramped sellers identified, using a clear rule such as twelve months or more in seat.
                2. Annual credited bookings per ramped seller calculated by role and segment.
                3. The median and the spread between top and bottom quartile recorded.
                4. One productivity figure per role chosen for the model, with the reasoning written down.

                ## Notes
                Leave out sellers who joined or left mid-year from this figure, or adjust them to a full year. Partial years drag the average down and inflate the headcount you think you need.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A recorded productivity figure per seller role, based on ramped sellers only, with the median and quartile spread noted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set the tenure rule that defines a fully ramped seller"
                - "Calculate annual bookings for each ramped seller from the cleaned history"
                - "Record the median and quartile spread for each role"
                - "Write down the productivity figure chosen for the model and why"
            - name: Ramp curve from your own new-hire data
              description: |-
                ## Purpose
                Leaders often assume a new seller is productive after three months when the data says nine, and that gap alone can leave a plan short by several sellers' worth of bookings. Plotting what past hires closed in each month or quarter after their start date gives you a ramp curve grounded in your own sales cycle.

                ## Milestones
                1. Every seller hired in the last three years listed with a start date.
                2. Bookings by month or quarter of tenure calculated for each hire.
                3. An average ramp curve expressed as a percentage of ramped productivity per quarter.
                4. The curve compared with the length of your median sales cycle, with any mismatch explained.

                ## Notes
                A ramp shorter than your median sales cycle is a warning sign. New sellers cannot close deals faster than the buying process allows, unless they inherit pipeline.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ramp curve showing productivity as a percentage of ramped output for each of the first four quarters, built from at least five past hires."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every seller hired in the last three years with their start date"
                - "Calculate each hire's bookings by quarter of tenure"
                - "Average the results into a percentage ramp curve"
                - "Compare the curve with the median sales cycle and note the gap"
            - name: Seller attrition and backfill lag baseline
              description: |-
                ## Purpose
                Most capacity models assume every seller stays all year, then miss because two left in spring and their replacements were not ramped until winter. Measuring annual seller attrition and the real time from resignation to a new hire's start date lets you build lost capacity into the plan rather than discover it.

                ## Milestones
                1. Annual seller attrition calculated for the last two years, split into regretted and unregretted.
                2. Average days from resignation to the replacement's start date recorded.
                3. The capacity lost to each departure estimated, including the replacement's ramp.
                4. An attrition assumption chosen for the model and noted in the assumptions register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An attrition rate and a backfill lag in days, both drawn from two years of data, are recorded as model inputs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every seller departure in the last two years with the reason"
                - "Calculate days from each resignation to the replacement's start"
                - "Estimate bookings lost per departure including the new hire's ramp"
                - "Log each new seller departure and its backfill date @recurring(monthly:28)"
            - name: Last year's quota attainment distribution
              description: |-
                ## Purpose
                Whether quotas were fair shows up in the spread, not the team total: a team can hit plan while 70 percent of sellers miss. Plotting how many sellers landed in each attainment band last year tells you whether quotas were set too high, unevenly, or about right.

                ## Milestones
                1. Each seller's final attainment for last year calculated against their full or prorated quota.
                2. Sellers grouped into bands such as under 50, 50 to 80, 80 to 100 and over 100 percent.
                3. The share of ramped sellers at or above quota recorded.
                4. Three conclusions about last year's quota setting written down for this year's cycle.

                ## Notes
                Many leaders aim for roughly 60 to 70 percent of ramped sellers hitting quota. Far below that, the quotas are the problem; far above, they were probably too easy.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An attainment distribution chart for last year with the percentage of ramped sellers at quota and three written conclusions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate each seller's final attainment for last year"
                - "Group sellers into four attainment bands and count each band"
                - "Work out what share of ramped sellers reached quota"
                - "Write three lessons for this year's quota setting"
            - name: First sales capacity model in a spreadsheet
              description: |-
                ## Purpose
                Once productivity, ramp and attrition are measured, they can be combined into the model that answers the real question: with the sellers we have and plan to hire, what will we close by month. Building it as a simple spreadsheet, one row per seller and planned hire, keeps every assumption visible and easy for finance to check.

                ## Milestones
                1. One row per current seller and planned hire, with start date, role and ramp stage.
                2. Monthly expected bookings per row calculated from ramped productivity and the ramp curve.
                3. An attrition adjustment applied across the year.
                4. Total modelled capacity compared with the revenue target, with the gap shown in money and sellers.

                ## Notes
                Keep inputs on one tab and calculations on another. Anyone should be able to change one assumption and watch the gap move.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working spreadsheet that shows monthly modelled bookings by seller against the target, with the shortfall stated in money and in sellers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set up an inputs tab for productivity, ramp curve and attrition"
                - "Add one row per current seller and per planned hire with start dates"
                - "Calculate monthly expected bookings for each row"
                - "Show the gap between modelled capacity and the target in money and sellers"
            - name: Quota overassignment buffer decision
              description: |-
                ## Purpose
                Because not every seller hits quota, the sum of individual quotas usually needs to exceed the company target, and choosing that buffer by habit is one of the most expensive quiet decisions in sales. Setting it from your attainment history and agreeing it openly with finance stops quotas from creeping up every year without reason.

                ## Milestones
                1. Last two years' total quota compared with the company target to show the buffer actually used.
                2. Expected team attainment estimated from the attainment distribution.
                3. A buffer percentage chosen, with upper and lower limits, and agreed with finance.
                4. The decision and its reasoning recorded in the assumptions register.

                ## Notes
                Buffers between 10 and 20 percent are common, but the right figure is whatever closes the gap between your expected attainment and 100 percent. Stacking buffers at each management layer is the usual mistake.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agreed overassignment percentage, with limits per management layer, recorded with its reasoning and signed off by finance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare last year's total quota with the company target"
                - "Estimate expected team attainment from the attainment distribution"
                - "Propose a buffer and a cap for each management layer"
                - "Agree the buffer with finance and record it with the reasoning"
            - name: Capacity model assumptions register
              description: |-
                ## Purpose
                Six months after a plan is approved nobody remembers why ramp was set at two quarters or attrition at 15 percent, so every miss turns into a debate. Keeping one register of each assumption, its source, its owner and when it was last checked makes the model defensible and easy to update.

                ## Milestones
                1. Every model input listed with its current value, data source and owner.
                2. A confidence rating added to each assumption.
                3. The three assumptions with the biggest effect on the result marked for closer watching.
                4. A last checked date kept current for every row.

                ## Notes
                Start from the **Risk register** template, treating each low-confidence assumption as a risk with an owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register listing every capacity model input with source, owner, confidence and a last checked date no older than one quarter."
                cadence: rolling
              tasks:
                - "List every input in the capacity model with its current value"
                - "Add the source, owner and a confidence rating to each row"
                - "Mark the three assumptions that move the result most"
                - "Check each assumption against latest data and update the date @recurring(quarterly)"
            - name: Monthly capacity versus plan check
              description: |-
                ## Purpose
                Nobody learns anything from a capacity model unless someone compares it with what happened. Checking actual bookings, hires and departures against the model each month shows early whether the gap is coming from productivity, slow hiring or attrition, while there is still time to act.

                ## Milestones
                1. Actual monthly bookings set against modelled bookings in one view.
                2. Actual headcount and start dates compared with the hiring plan.
                3. Any variance over an agreed threshold explained by cause.
                4. A short note sent to the sales leader and finance each month.

                ## Notes
                Start from the **Metrics log** template. Keep the cause categories fixed, such as productivity, hiring timing, attrition and deal size, so trends are visible across months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly variance note comparing modelled and actual bookings and headcount, with causes, is sent for twelve consecutive months."
                cadence: rolling
              tasks:
                - "Choose a variance threshold that triggers an explanation"
                - "Set up the actual versus modelled view in the capacity spreadsheet"
                - "Compare bookings, hires and departures with the model @recurring(monthly:6)"
                - "Send the variance note to the sales leader and finance"
            - name: Quarterly hiring plan refresh against capacity
              description: |-
                ## Purpose
                Hiring plans set in January are wrong by April: a recruit falls through, a seller resigns, or one segment closes faster than expected. Rerunning the capacity gap each quarter and adjusting the number, timing and type of hires keeps recruitment pointed at the revenue target rather than at last year's spreadsheet.

                ## Milestones
                1. The capacity gap rerun with current headcount and actual ramp progress.
                2. Open requisitions compared with the gap, by role and start month.
                3. Hires added, removed or moved earlier with the reason recorded.
                4. The updated plan agreed with finance and recruiting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter has a recorded hiring plan update, agreed with finance and recruiting, showing how open roles close the current capacity gap."
                cadence: cyclic
              tasks:
                - "Rerun the capacity gap with current headcount and ramp progress @recurring(quarterly)"
                - "Compare open requisitions with the gap by role and start month"
                - "Record which hires were added, removed or moved and why"
                - "Agree the updated hiring plan with finance and recruiting"
            - name: Pipeline coverage against remaining quota
              description: |-
                ## Purpose
                Coverage, pipeline divided by quota still to close, is the earliest signal that a seller or team will miss, often a full quarter ahead. Tracking it per seller against the coverage ratio your own win rates require shows who needs help generating pipeline before it is too late to build any.

                ## Milestones
                1. The coverage ratio each segment needs calculated from its win rate.
                2. Current and next quarter coverage shown for every seller and team.
                3. Sellers below the required ratio flagged with an agreed pipeline action.
                4. Coverage trends reviewed monthly alongside attainment.

                ## Notes
                A flat rule of three times coverage is a guess. If your win rate from creation is 25 percent you need about four times; at 40 percent, about two and a half.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A coverage report per seller for this and next quarter is refreshed weekly, with every seller below the required ratio assigned an action."
                cadence: rolling
              tasks:
                - "Calculate the coverage ratio each segment needs from its win rate"
                - "Build a coverage view for this and next quarter by seller"
                - "Refresh coverage for every seller and flag shortfalls @recurring(weekly:mon)"
                - "Review coverage trends with each team manager @recurring(monthly:3)"
            - name: Quota attainment tracker by seller and team
              description: |-
                ## Purpose
                Sellers and managers should never have to ask where they stand against quota. One tracker, refreshed on a fixed day, showing year to date and quarter to date attainment against full or prorated quota, removes the side spreadsheets and the arguments that come with them.

                ## Milestones
                1. One tracker showing quarter and year to date attainment for every seller and team.
                2. Prorated quotas used for anyone who started, left or took leave mid-period.
                3. The tracker reconciled with finance's bookings each month.
                4. Access given to every seller for their own row and to managers for their team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An attainment tracker reconciled to finance bookings is refreshed monthly and readable by every seller and manager."
                cadence: rolling
              tasks:
                - "Build the tracker with quarter and year to date columns per seller"
                - "Apply prorated quotas for mid-period starters and leavers"
                - "Reconcile the tracker with finance's bookings and publish it @recurring(monthly:8)"
                - "Share each seller's row with them and each team view with its manager"
            - name: New-hire ramp tracking against the curve
              description: |-
                ## Purpose
                Ramp is the assumption most likely to be wrong and the easiest to check. Comparing each new seller's bookings and pipeline with the ramp curve month by month tells you whether the curve needs changing and which hires need extra support, long before the end of their first year.

                ## Milestones
                1. Each new hire's expected ramp milestones written beside their start date.
                2. Actual bookings and pipeline added for every new hire each month.
                3. Hires more than one quarter behind the curve flagged to their manager.
                4. Evidence for or against the curve summarised each quarter for the assumptions register.

                ## Notes
                Track pipeline created as well as bookings. In a long sales cycle, bookings will look poor for months even when a new seller is ramping well.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every seller in their first year has a monthly ramp record against the curve, with those behind it flagged to their manager."
                cadence: rolling
              tasks:
                - "Write each new hire's expected ramp milestones by month"
                - "Update each new hire's bookings and pipeline against the curve @recurring(monthly:15)"
                - "Flag hires more than a quarter behind the curve to their manager"
                - "Summarise what new hires show about the curve each quarter"
            - name: Live headcount roster with ramp status
              description: |-
                ## Purpose
                Capacity is not headcount: ten sellers with four in their first quarter is closer to seven sellers of capacity. Keeping one roster that shows every quota-carrying seller, their start date, ramp stage and planned leave gives the model and finance the same picture of effective capacity.

                ## Milestones
                1. One roster with every quota-carrying seller, role, start date and ramp stage.
                2. Effective ramped capacity calculated as a single number beside raw headcount.
                3. Known leave, notice periods and planned transfers recorded.
                4. The roster reconciled with the HR system every month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A roster showing raw headcount and effective ramped capacity is reconciled with the HR system every month."
                cadence: rolling
              tasks:
                - "List every quota-carrying seller with role, start date and ramp stage"
                - "Add a formula for effective ramped capacity beside raw headcount"
                - "Record known leave, notice periods and transfers"
                - "Reconcile the roster with the HR system and update ramp stages @recurring(monthly:20)"
            - name: Quarterly recalibration of model inputs
              description: |-
                ## Purpose
                Win rates drift, deal sizes grow with a new product and cycles stretch when budgets tighten, so a model calibrated last year quietly goes wrong. Rerunning the core inputs each quarter on the latest four quarters of data keeps the model tied to how the team sells today.

                ## Milestones
                1. Win rate, deal size, cycle length and productivity rerun on the latest four quarters.
                2. Changes from the previous quarter's values recorded with likely causes.
                3. Any input that moved more than an agreed amount updated in the model.
                4. The effect on the year's capacity gap reported to the sales leader.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each quarter has a dated recalibration record showing old and new values for the core inputs and their effect on the capacity gap."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Rerun win rate, deal size, cycle length and productivity on four quarters @recurring(quarterly)"
                - "Record each change from last quarter with its likely cause"
                - "Update inputs that moved beyond the agreed threshold"
                - "Report the change in the capacity gap to the sales leader"
            - name: Mid-year quota health review
              description: |-
                ## Purpose
                By the middle of the year it is usually clear whether quotas were set well, and waiting until the annual cycle to admit a problem costs good sellers. A structured review of attainment spread, coverage and segment performance at the half lets you fix genuine errors without opening quota changes to everyone.

                ## Milestones
                1. Half-year attainment distribution compared with the target spread.
                2. Segments or roles running far above or below expectation identified.
                3. Criteria for any mid-year quota adjustment written and agreed with finance.
                4. Adjustments, if any, made and communicated in writing to the sellers affected.

                ## Notes
                Change quotas mid-year only for causes outside a seller's control, such as a product withdrawn or a territory reassigned. Lowering a quota because a seller is behind teaches the whole team to wait.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written mid-year review with the attainment spread, agreed adjustment criteria and a record of every quota changed and why."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Book the mid-year quota review with finance @recurring(yearly)"
                - "Compare the half-year attainment spread with the target spread"
                - "Write the criteria that justify a mid-year adjustment"
                - "Send written notice to every seller whose quota changes"
            - name: Quota relief and adjustment log
              description: |-
                ## Purpose
                Every quota change granted informally becomes a precedent someone else will cite. Logging each relief request, the reason, the decision and who approved it keeps adjustments consistent, auditable and visible to finance, and shows over time which causes keep recurring.

                ## Milestones
                1. A log with request date, seller, reason category, amount, decision and approver.
                2. Reason categories fixed, such as leave, territory change, product withdrawal and account transfer.
                3. Approval levels agreed by size of adjustment.
                4. A monthly summary of approved relief shared with finance.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every quota adjustment in the year appears in the log with reason, amount and approver, and finance receives a monthly summary."
                cadence: rolling
              tasks:
                - "Set up the relief log with fixed reason categories"
                - "Agree approval levels by size of adjustment"
                - "Send finance the month's approved relief summary @recurring(monthly:25)"
                - "Review which relief reasons recur most each half year"
            - name: Annual quota-setting calendar
              description: |-
                ## Purpose
                Quotas delivered six weeks into the year cost the team a quarter of momentum and leave sellers working without a target. Working back from the date letters must reach sellers, through finance's target, the model and manager review, gives a calendar that gets the plan out on day one.

                ## Milestones
                1. The date quota letters must reach sellers fixed, normally before the year starts.
                2. Dates set backwards for the target from finance, model draft, manager review and final approval.
                3. Owners named for each step.
                4. The calendar shared with finance, HR and every manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated quota-setting calendar with an owner per step is shared with finance, HR and managers at least three months before the year starts."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Fix the date quota letters must reach sellers"
                - "Work back to dates for the target, model, review and approval"
                - "Name an owner for each step and share the calendar"
                - "Start next year's quota calendar from this year's lessons @recurring(yearly)"
            - name: Sales capacity maths fundamentals
              description: |-
                ## Purpose
                Capacity planning sounds technical but rests on a handful of relationships: target divided by ramped productivity, adjusted for ramp and attrition, gives headcount. Working through those relationships by hand once, with your own numbers, means you can spot an error in anyone's model in a few minutes.

                ## Milestones
                1. The core formula for required sellers written out with your own figures.
                2. Ramp and attrition adjustments worked through on paper for one year.
                3. Three worked examples recorded: a small team, a growing team and a team losing sellers.
                4. Your hand calculation matched to the spreadsheet model within a small margin.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three worked capacity examples on paper, one of which matches the spreadsheet model's headcount answer within one seller."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the required sellers formula using this year's target"
                - "Work through ramp and attrition adjustments by hand for one year"
                - "Record three worked examples for different team situations"
                - "Check your hand answer against the spreadsheet model"
            - name: Top-down versus bottom-up quota setting
              description: |-
                ## Purpose
                Top-down quotas start from the board's target and split it; bottom-up quotas start from what each territory or book of accounts can realistically produce. Learning both methods, and how to reconcile them when they disagree, is the core skill in setting quotas that are ambitious and believable at once.

                ## Milestones
                1. Both methods described in your own words with their typical failure modes.
                2. A bottom-up estimate built for one team from account potential and pipeline.
                3. The top-down split for the same team compared with the bottom-up figure.
                4. A written rule for how you will reconcile the two in the next cycle.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of top-down and bottom-up figures for one team and an agreed reconciliation rule for the next quota cycle."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read two practitioner guides on top-down and bottom-up quota setting"
                - "Build a bottom-up estimate for one team from accounts and pipeline"
                - "Compare it with that team's share of the top-down target"
                - "Write the rule you will use to reconcile the two figures"
            - name: Phasing annual quota by quarter
              description: |-
                ## Purpose
                Splitting an annual quota into four equal quarters ignores the fact that most businesses close more in some quarters than others, and it penalises new hires and seasonal segments. Phasing quota by the share of bookings each quarter has historically produced makes quarterly attainment a fair signal rather than noise.

                ## Milestones
                1. Each quarter's share of annual bookings calculated for the last three years.
                2. A phasing split chosen per segment where seasonality differs.
                3. Quarterly quotas recalculated for every seller using the phasing.
                4. The phasing explained in one paragraph in the quota letters.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A quarterly phasing split based on three years of bookings is applied to every seller's quota and explained in the letters."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Calculate each quarter's share of annual bookings for three years"
                - "Decide whether any segment needs its own phasing"
                - "Recalculate quarterly quotas for every seller with the phasing"
                - "Add a paragraph on phasing to the quota letter draft"
            - name: Sensitivity analysis on capacity assumptions
              description: |-
                ## Purpose
                Finance will ask what happens if ramp takes a quarter longer or two sellers leave early, and the honest answer is a table, not a shrug. Testing how far the result moves when each assumption changes shows which inputs deserve the most care and how much buffer the plan really has.

                ## Milestones
                1. Each major input flexed up and down by a realistic amount.
                2. The effect on annual bookings recorded for each change.
                3. Inputs ranked by how much they move the result.
                4. A one-page sensitivity table saved with the model.

                ## Notes
                In most models, ramped productivity and attrition move the answer far more than deal size or phasing. Spend your validation time accordingly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A sensitivity table showing the bookings effect of flexing each major input, ranked by impact, is saved with the capacity model."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a realistic upper and lower value for each major input"
                - "Record the bookings effect of each change in the model"
                - "Rank the inputs by how much they move the result"
                - "Ask the agent to draft a one-paragraph summary of the sensitivity table"
            - name: Base, upside and downside capacity scenarios
              description: |-
                ## Purpose
                One capacity number invites false precision, while three scenarios with named assumptions let leadership choose how much risk to carry. Building a base case, an upside where hiring lands early and ramp is faster, and a downside where attrition rises, frames the hiring decision as a trade-off rather than a promise.

                ## Milestones
                1. Base, upside and downside cases defined by specific changes to named inputs.
                2. Each scenario's monthly bookings and year-end total calculated.
                3. The headcount needed to hit target under the downside case shown.
                4. The three scenarios presented on one page with the recommended case marked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page scenario summary with three named cases, their bookings totals and the downside headcount need is shared with finance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the specific input changes behind each of the three scenarios"
                - "Add a scenario switch to the capacity model"
                - "Calculate bookings and headcount need for each scenario"
                - "Share the one-page scenario summary with finance"
            - name: Walking finance through the capacity model
              description: |-
                ## Purpose
                Finance teams that do not trust a capacity model will overrule it with a simple percentage uplift on last year. Taking finance through the inputs, sources and scenarios before the budget meeting turns them from sceptics into co-owners of the number.

                ## Milestones
                1. A short walkthrough deck covering inputs, sources, scenarios and the ask.
                2. The walkthrough rehearsed with one colleague who plays a sceptical analyst.
                3. A working session held with finance before the budget meeting.
                4. Every finance question and the answer recorded, with any model changes made.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: event-completion
                success_criteria: "A recorded working session with finance before the budget meeting, with every question logged and any model changes made."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a five-slide walkthrough of inputs, scenarios and the ask"
                - "Rehearse it with a colleague playing a sceptical analyst"
                - "Book a working session with finance before the budget meeting"
                - "Log every question asked and how the model changed"
            - name: Revenue, margin or units as the quota metric
              description: |-
                ## Purpose
                Quota on revenue alone can push sellers to discount heavily or sell the product that is easiest rather than the one the business needs. Comparing quota on revenue, gross margin, units or a weighted mix against your strategy for the year leads to a metric that rewards the right deals.

                ## Milestones
                1. This year's commercial priorities written as two or three sentences.
                2. Revenue, margin, units and a mixed measure compared against those priorities.
                3. The data needed for each option checked as available and reliable in the CRM.
                4. One quota metric chosen, recorded and handed to the compensation plan owner.

                ## Notes
                A metric sellers cannot see during the deal, such as margin calculated by finance weeks later, rarely changes behaviour. Pick one they can check on the quote.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the quota metric, with the options compared against this year's priorities and data availability confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write this year's top commercial priorities in three sentences"
                - "Compare revenue, margin, units and a mixed metric against them"
                - "Check the CRM holds reliable data for each option"
                - "Record the chosen metric and send it to the compensation plan owner"
            - name: Team quota versus individual quota decision
              description: |-
                ## Purpose
                Pooled team quotas suit pods where an account executive, solutions engineer and account manager close together, while individual quotas suit sellers who own deals end to end. Deciding deliberately which roles carry which kind of quota prevents both free riders and sellers refusing to help colleagues.

                ## Milestones
                1. Each quota-carrying role listed with how much it relies on others to close.
                2. Options for individual, pooled and hybrid quotas compared for each role.
                3. A quota type chosen per role with the reasoning recorded.
                4. Any change explained to affected sellers before quota letters go out.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every quota-carrying role has a recorded quota type, individual, pooled or hybrid, with reasoning shared before letters are issued."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each quota-carrying role and who it depends on to close"
                - "Compare individual, pooled and hybrid quotas for each role"
                - "Record the quota type chosen for each role and why"
                - "Explain any change to affected sellers before letters go out"
            - name: Quotas for overlay and specialist roles
              description: |-
                ## Purpose
                Solutions engineers, product specialists and partner managers often carry a quota made of other people's deals, which can double-count revenue or leave them with targets they cannot influence. Setting overlay quotas from the share of deals they genuinely touch keeps total credited quota understood and their targets fair.

                ## Milestones
                1. Every overlay and specialist role listed with the deals it supports.
                2. The share of team bookings each role historically touched calculated.
                3. Overlay quotas set from that share and kept separate from the capacity total.
                4. Double-counted credit shown separately so finance can see true capacity.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each overlay role has a quota based on its historical share of deals touched, and overlay credit is reported separately from core capacity."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every overlay and specialist role and the deals it supports"
                - "Calculate the share of team bookings each role touched last year"
                - "Set overlay quotas from those shares"
                - "Separate overlay credit from core capacity in the model"
            - name: Prorated quota policy for starters and leavers
              description: |-
                ## Purpose
                Sellers who start in March or move teams in August need a quota that reflects the months they actually carried it and their ramp stage. A written proration policy, applied by formula, stops each case being negotiated and keeps attainment comparable across the team.

                ## Milestones
                1. Proration rules written for new starters, leavers and internal transfers.
                2. Ramp reductions built into the first months of a new starter's quota.
                3. Worked examples included for a mid-quarter start and a mid-year transfer.
                4. The policy approved by finance and HR and attached to quota letters.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written proration policy with ramp reductions and worked examples, approved by finance and HR, is attached to every quota letter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write proration rules for starters, leavers and transfers"
                - "Add ramp reductions for a new starter's first quarters"
                - "Include two worked examples in the policy"
                - "Get the policy approved by finance and HR"
            - name: Leave of absence quota relief policy
              description: |-
                ## Purpose
                Parental leave, long illness and caring responsibilities happen on every team, and handling quota relief case by case is both unfair and a legal risk in many countries. A clear policy that removes quota for time away, agreed with HR, protects sellers and keeps capacity figures honest.

                ## Milestones
                1. Types of leave covered by the policy listed with HR.
                2. A formula for removing quota during leave written, including any phased return.
                3. The capacity model updated so leave reduces capacity rather than raising others' quotas.
                4. The policy reviewed by HR for local employment law and shared with every seller.

                ## Notes
                Agree wording with HR or an employment adviser in each country you employ sellers. Rules on protected leave differ widely.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A leave relief policy reviewed by HR for each employing country is published to sellers, and the capacity model reflects leave as reduced capacity."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask HR which types of leave the policy must cover"
                - "Write the quota removal formula including phased returns"
                - "Change the model so leave lowers capacity instead of other quotas"
                - "Publish the policy after HR's legal review"
            - name: Choosing a capacity planning tool
              description: |-
                ## Purpose
                Spreadsheets serve most teams well into dozens of sellers, but version sprawl and broken links eventually cost more than a dedicated planning tool. Comparing your spreadsheet against two or three planning tools on what you actually need, scenario handling, CRM and HR data links and audit trail, leads to a deliberate choice rather than a sales pitch.

                ## Milestones
                1. The model's current pain points listed with how often each bites.
                2. Must-have requirements written, such as scenarios, data links and version history.
                3. The current spreadsheet and two or three tools scored against the requirements.
                4. A decision recorded to stay, improve the spreadsheet or buy, with the cost.

                ## Notes
                Start from the **Purchase decision** template. Staying in a well-structured spreadsheet is a legitimate answer.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of the spreadsheet and at least two tools leads to a recorded decision with its annual cost."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List what goes wrong with the current capacity spreadsheet"
                - "Write the must-have requirements for any planning tool"
                - "Score the spreadsheet and two tools against the requirements"
                - "Record the decision and its annual cost"
            - name: Hiring ahead of demand or hiring to pipeline
              description: |-
                ## Purpose
                Because new sellers take quarters to ramp, hiring only once pipeline exists guarantees you are always short, while hiring far ahead burns cash on sellers with nothing to sell. Modelling both approaches against your ramp curve and cash position gives leadership a clear choice on when each hire should start.

                ## Milestones
                1. Two hiring timelines built: ahead of demand and in step with pipeline.
                2. Bookings and cost compared for each timeline across the year.
                3. The cash and risk trade-off described in plain language.
                4. A hiring timing rule agreed with the leadership team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded leadership decision on hiring timing, based on a modelled comparison of bookings and cost for both approaches."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build a hiring timeline that starts sellers ahead of demand"
                - "Build a second timeline that hires in step with pipeline"
                - "Compare bookings and cost for each timeline across the year"
                - "Agree a hiring timing rule with the leadership team"
            - name: Support ratios for development reps, engineers and managers
              description: |-
                ## Purpose
                Plans that add closers without the development reps who feed them, the solutions engineers who demo for them or the managers who coach them will stall at the first bottleneck. Setting target ratios for each support role and building them into the model means every new seller arrives with the support they need.

                ## Milestones
                1. Current ratios of development reps, solutions engineers and managers to closers calculated.
                2. Signs of strain recorded, such as demo wait times or manager spans above eight.
                3. Target ratios chosen for each support role.
                4. Support hires added to the capacity model in step with closer hires.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Target ratios for development reps, solutions engineers and managers are agreed and the capacity model adds support hires in step with closers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate current support role ratios to closers"
                - "Ask managers where support shortages slow deals today"
                - "Choose a target ratio for each support role"
                - "Add support hires to the capacity model alongside closer hires"
            - name: Testing quotas against account potential
              description: |-
                ## Purpose
                Two sellers with the same quota can face very different books, one full of large accounts with open budget and the other of small accounts already saturated. Checking each proposed quota against the potential of the accounts or patch behind it, without redrawing those patches, catches quotas that are impossible or too easy before they are issued.

                ## Milestones
                1. A simple potential score calculated for each seller's book, such as total addressable spend.
                2. Each proposed quota expressed as a share of that potential.
                3. Outliers well above or below the team median share identified.
                4. Outlier quotas adjusted, or the reason for leaving them recorded.

                ## Notes
                This checks quotas against existing books. If the books themselves are badly unbalanced, that is territory work and belongs in a territory plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every proposed quota is shown as a share of its book's potential, and each outlier is adjusted or has a recorded reason."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose a simple potential score for each seller's book"
                - "Express each proposed quota as a share of that potential"
                - "Flag quotas far above or below the team median share"
                - "Adjust or record a reason for each outlier quota"
            - name: Annual quota-setting cycle
              description: |-
                ## Purpose
                The yearly cycle is where all of this area's work comes together: target from finance, model, scenarios, quotas per seller, approvals and letters. Running it as a dated project with a single owner is the difference between quotas delivered before the year starts and quotas still being argued in February.

                ## Milestones
                1. The company target received from finance and broken down by segment.
                2. The capacity model rerun with current headcount, hires and recalibrated inputs.
                3. Draft quotas per seller reviewed by managers and tested against account potential.
                4. Final quotas approved by the sales leader and finance.
                5. Quota letters ready to issue on the agreed date.

                ## Notes
                Start from the **Board meeting** template for the approval session if the plan goes to the board.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Final approved quotas for every seller are ready on the date set in the quota calendar, with the target, model and approvals filed together."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Request next year's revenue target and segment split from finance"
                - "Rerun the capacity model with recalibrated inputs and the hiring plan"
                - "Send draft quotas to managers for review"
                - "Hold the final approval meeting with the sales leader and finance @recurring(yearly)"
            - name: Sales headcount request for the annual budget
              description: |-
                ## Purpose
                Headcount requests that say we need six more sellers get cut; requests that show the capacity gap, ramp timing, payback and a downside case get funded. Preparing the request as a short evidence pack, built from the model, gives finance and the board a clear decision.

                ## Milestones
                1. The capacity gap in money and sellers stated for the budget year.
                2. Each requested role listed with start month, ramp contribution and fully loaded cost.
                3. Payback and the downside scenario shown on one page.
                4. The request submitted on time and the outcome recorded with any cuts.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A headcount request with gap, roles, start months, costs and payback is submitted to the budget process on time and the outcome recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the budget submission date with finance @recurring(yearly)"
                - "List each requested role with start month and fully loaded cost"
                - "Put the gap, payback and downside case on one page"
                - "Record which roles were approved and which were cut"
            - name: Quota letters and one-to-one walkthroughs
              description: |-
                ## Purpose
                A quota arriving by email with no explanation invites suspicion, and suspicious sellers spend January lobbying instead of selling. Issuing clear written letters and walking each seller through how their number was built, in a short one-to-one, gets acceptance and surfaces genuine errors early.

                ## Milestones
                1. A letter template with quota, phasing, crediting rules and policy links.
                2. Every seller's letter checked for errors by a second person.
                3. A walkthrough held with each seller within a week of issue.
                4. Signed acknowledgements collected and questions logged.

                ## Notes
                Start from the **1:1** template for each walkthrough. Keep a record of anything you agreed to look into, and close every one within two weeks.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every seller receives a checked quota letter and a walkthrough within a week, and signed acknowledgements are on file for all of them."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft the quota letter template with phasing and policy links"
                - "Have a second person check every seller's letter"
                - "Book a short walkthrough with each seller in issue week"
                - "Collect signed acknowledgements and log open questions"
            - name: Quota allocation for a new product launch
              description: |-
                ## Purpose
                When a new product launches, leadership often adds its target to every quota without knowing how fast it will sell or who will sell it. Deciding whether the launch gets its own quota line, a separate overlay team or a modest share of existing quotas, based on early evidence, protects the core number and gives the product a fair test.

                ## Milestones
                1. Expected launch bookings estimated from pilot customers or comparable launches.
                2. Options compared: separate quota line, overlay team or folded into existing quotas.
                3. An allocation chosen with a review point after the first two quarters.
                4. Sellers told how the new product counts toward quota before launch.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A recorded launch quota allocation with a review date, communicated to sellers before the product launches."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather pilot results or comparable launch figures"
                - "Compare a separate line, an overlay team and folding into quotas"
                - "Choose an allocation and set a two-quarter review point"
                - "Tell sellers how the new product counts before launch"
            - name: Year-end quota and capacity retrospective
              description: |-
                ## Purpose
                Each year's results are the best evidence for next year's plan, yet most teams start the new cycle without checking where the old model was wrong. A structured retrospective comparing modelled and actual capacity, attainment spread and every assumption feeds directly into the next quota cycle.

                ## Milestones
                1. Modelled and actual bookings compared for the year by month and segment.
                2. Each assumption scored as accurate, too optimistic or too cautious.
                3. Final attainment distribution compared with the target spread.
                4. Five changes for next year's model written and added to the quota calendar.

                ## Notes
                Start from the **Metrics log** template to keep year-on-year comparisons in one place.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written retrospective scoring every assumption and listing five changes for next year is completed before the next quota cycle begins."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Compare modelled and actual bookings by month and segment"
                - "Score each assumption as accurate, optimistic or cautious"
                - "Compare final attainment with the target spread"
                - "Write five changes for next year's model"
            - name: Founder setting the first sales hire's quota
              description: |-
                ## Purpose
                Founders hiring their first seller often hand over a quota equal to what they closed themselves, ignoring that the founder had the network, the authority and no ramp. Setting a first quota from your own deal history, adjusted for ramp and the hire's lack of relationships, gives them a target they can reach and you a fair test of the role.

                ## Milestones
                1. Your own closed deals for the last year listed with source and cycle length.
                2. Deals that depended on your personal network or authority marked.
                3. A first-year quota set from the remaining deals, with a ramp period.
                4. Leading targets agreed for the first quarter, such as meetings and pipeline created.

                ## Notes
                For a first hire, pipeline created and deals progressed in the first two quarters often say more about fit than bookings do.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written first-year quota for the first sales hire, with ramp months and first-quarter leading targets, is agreed before their start date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the deals you closed last year with source and cycle length"
                - "Mark deals won through your own network or authority"
                - "Set a first-year quota with a ramp period from the rest"
                - "Agree first-quarter leading targets with the new hire"
            - name: Founder's capacity plan for the first three sellers
              description: |-
                ## Purpose
                Going from one founder selling to a small team is the moment capacity planning first matters, because each early hire is a large share of payroll. A light model covering three sellers, their start dates, ramp and the runway they consume tells you how many hires the business can afford and when each needs to be productive.

                ## Milestones
                1. Three hires modelled with start dates, ramp and fully loaded cost.
                2. Bookings expected from the team plotted against cash runway.
                3. The month by which each hire must reach agreed leading targets written down.
                4. Progress reviewed monthly against the plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-seller plan linking hires, ramp, bookings and runway exists, with each hire's checkpoint month recorded and monthly reviews held."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Model three hires with start dates, ramp and fully loaded cost"
                - "Plot expected bookings against cash runway"
                - "Write the checkpoint month for each hire's leading targets"
                - "Review team bookings and runway against the plan @recurring(monthly:10)"
            - name: New sales leader inheriting existing quotas
              description: |-
                ## Purpose
                New sales leaders usually arrive with quotas already issued, a target already promised and no idea how either was built. Rebuilding the logic behind the inherited numbers in the first sixty days shows whether the plan is achievable and gives you evidence for any reset before you own the result.

                ## Milestones
                1. The inherited target, quotas and capacity assumptions gathered in one place.
                2. Inherited quotas checked against productivity, ramp and attainment history.
                3. A written assessment of whether the plan is achievable, with the gap stated.
                4. Any proposed reset raised with finance and the chief executive within sixty days.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written assessment of the inherited quota plan, with a stated gap and any proposed reset, is shared with finance and the chief executive within sixty days."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask finance for the target and every seller's current quota"
                - "Collect whatever capacity model or assumptions your predecessor used"
                - "Test inherited quotas against productivity and attainment history"
                - "Present your assessment and any reset to finance and the chief executive"
            - name: Multi-region capacity consolidation
              description: |-
                ## Purpose
                Enterprises with sellers in several regions often run separate models with different ramp assumptions, currencies and crediting rules, so the global number is a sum of incompatible parts. Agreeing common definitions and consolidating regional models quarterly gives leadership one capacity view it can compare across regions.

                ## Milestones
                1. Regional models collected and their definitions compared side by side.
                2. Common definitions agreed for quota metric, ramp, attrition and currency conversion.
                3. Regional models rebuilt or mapped to the common definitions.
                4. A consolidated global capacity view produced each quarter.

                ## Notes
                Fix one planning exchange rate for the year. Letting currency swings move capacity hides the real productivity changes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "All regions use common capacity definitions and a consolidated global view is produced every quarter."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Collect every regional capacity model and its definitions"
                - "Agree common definitions and a planning exchange rate"
                - "Map each regional model to the common definitions"
                - "Produce the consolidated global capacity view @recurring(quarterly)"
            - name: Capacity plan after a funding round
              description: |-
                ## Purpose
                Fresh funding usually comes with a growth target that implies aggressive sales hiring, and the pressure is to hire fast and sort out productivity later. Turning the investor plan into a capacity model first shows how many sellers the target needs, when they must start and whether recruiting can deliver them.

                ## Milestones
                1. The investor plan's revenue target broken into quarterly bookings.
                2. Required hires and start months derived from the capacity model.
                3. Recruiting's realistic hiring rate per month confirmed.
                4. Any gap between target and achievable capacity raised with the board.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A post-round capacity plan with quarterly bookings, hire dates and a confirmed recruiting rate is presented to the board with any gap stated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Break the investor plan's revenue target into quarterly bookings"
                - "Derive required hires and start months from the model"
                - "Confirm with recruiting how many sellers they can hire per month"
                - "Present any target gap to the board with the evidence"
            - name: Capacity planning through a hiring freeze
              description: |-
                ## Purpose
                If a hiring freeze or a reduction in force removes sellers, the target often stays the same and the remaining team's quotas quietly absorb the difference. Remodelling capacity with the real headcount shows leadership the honest gap and lets you choose between a lower target, higher quotas or reallocated accounts with eyes open.

                ## Milestones
                1. Capacity remodelled with frozen or reduced headcount.
                2. The new gap to target stated in money and sellers.
                3. Options laid out: lower target, higher quotas or reallocated accounts, with effects.
                4. A decision recorded and remaining sellers' quotas reissued if changed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A remodelled capacity plan with options and a recorded leadership decision exists within a month of the freeze or reduction."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Remove frozen roles and departed sellers from the capacity model"
                - "State the new gap to target in money and sellers"
                - "Lay out the options and their effect on remaining sellers"
                - "Check capacity against the revised plan until hiring resumes @recurring(monthly:18)"
            - name: Monte Carlo simulation of team attainment
              description: |-
                ## Purpose
                Scenarios show three possible years; a simulation shows the probability of each outcome by drawing thousands of years from your real distributions of deal size, win rate, ramp and attrition. Experienced planners use it to state the chance of hitting target with a given headcount, which is the question leadership is really asking.

                ## Milestones
                1. Distributions for deal size, win rate, ramp and attrition fitted from history.
                2. A simulation running at least a thousand trials of the year.
                3. The probability of reaching target shown for several headcount levels.
                4. Results checked against last year's actual outcome for plausibility.

                ## Notes
                A spreadsheet with random draws is enough to start. Check the simulation against at least one past year before quoting its probabilities.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A working simulation reports the probability of reaching target for at least three headcount levels and has been checked against a past year."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Fit distributions for deal size, win rate, ramp and attrition from history"
                - "Build a simulation that runs a thousand trials of the year"
                - "Report the chance of hitting target at three headcount levels"
                - "Rerun the simulation with the latest inputs @recurring(quarterly)"
            - name: Quota design for usage-based revenue
              description: |-
                ## Purpose
                When customers pay for what they consume, the signed contract says little about revenue and a seller can close a large deal that never ramps up. Designing quotas around committed spend, consumption growth or a blend, and modelling capacity on consumption curves, keeps quotas tied to revenue that actually arrives.

                ## Milestones
                1. Consumption curves for new customers analysed for their first four quarters.
                2. Quota options compared: commitments, consumption growth or a blend.
                3. A chosen design tested against last year's deals.
                4. The capacity model updated to forecast consumption rather than contract value.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A usage-based quota design, tested on last year's deals, is recorded and the capacity model forecasts consumption revenue."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pull four quarters of consumption data for last year's new customers"
                - "Compare commitment, consumption and blended quota designs"
                - "Test the chosen design against last year's deals"
                - "Compare actual consumption with the model's curve @recurring(monthly:12)"
            - name: Capacity model for partner and direct hybrid sales
              description: |-
                ## Purpose
                Where resellers or referral partners close part of the revenue, a capacity model counting only direct sellers overstates the hiring needed, or understates it when partners underperform. Adding partner productivity, ramp for new partners and the direct effort partners consume gives a true picture of who will deliver the target.

                ## Milestones
                1. Partner-sourced and partner-closed bookings separated in the history.
                2. Average productivity and ramp per active partner estimated.
                3. Direct seller time spent supporting partners measured or estimated.
                4. Partner capacity added to the model as its own line.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The capacity model shows partner capacity as a separate line, based on measured partner productivity and the direct effort partners consume."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Separate partner-sourced and partner-closed bookings in the history"
                - "Estimate productivity and ramp for an average active partner"
                - "Ask direct sellers how much time partner deals take"
                - "Add partner capacity to the model as a separate line"
            - name: Net revenue retention in expansion quotas
              description: |-
                ## Purpose
                Account managers carrying quotas on expansion alone can hit their number while churn quietly erodes the base. Building quotas for existing-customer roles on net change in revenue, expansion less contraction and churn, ties capacity planning for those roles to the revenue the business actually keeps.

                ## Milestones
                1. Net retention per book of existing customers calculated for two years.
                2. Expansion-only and net quota designs compared on last year's results.
                3. A quota design chosen for existing-customer roles.
                4. The capacity model updated with expected churn and contraction per book.

                ## Notes
                Agree with customer success who owns churn before putting it in a seller's quota. Shared ownership without clear rules causes disputes every quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded quota design for existing-customer roles based on net revenue change, tested on two years of data and reflected in the capacity model."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Calculate net retention for each book of existing customers"
                - "Compare expansion-only and net quota designs on last year's results"
                - "Agree churn ownership with the customer success lead"
                - "Add expected churn and contraction to the capacity model"
---

# Sales Quota & Capacity Modelling

This area is for sales managers, founders and enterprise revenue leaders who have to turn a revenue target into quotas people can hit and a hiring plan finance will fund. It starts with the foundations (what counts toward quota, clean bookings history, ramped productivity, a ramp curve, attrition, last year's attainment and a first capacity model), then the monthly and quarterly routines that compare the plan with reality, the modelling skills worth learning, the policy decisions every quota plan needs, the annual planning events, the situations founders, new leaders and enterprises each face, and finally specialist work on simulation, consumption revenue and net retention targets.

What repeats is a monthly capacity versus plan check, monthly attainment, ramp, roster and coverage updates, a Monday coverage refresh, quarterly recalibration of the model's inputs and the hiring plan, and the yearly quota cycle, mid-year review and headcount request. The Metrics log, Risk register, Purchase decision, Board meeting and 1:1 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
