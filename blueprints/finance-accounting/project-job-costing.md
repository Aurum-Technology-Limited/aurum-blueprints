---
id: finance-accounting.project-job-costing
name: Project & Job Costing
description: "Job numbers and cost codes, burdened labour rates, timesheets and bills coded to jobs, a weekly cost report, a monthly WIP schedule and the close-out reviews that show which work really pays."
category: business
version: 1.0.0
tags: [finance-accounting, project-job-costing, small-business, agency, manager, job-costing, contractors, work-in-progress]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - remediation-plan
    - meeting-notes
    - onboarding-30-60-90
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Project & Job Costing
          description: "Tracking labour, materials and overheads against each project or job so contractors, agencies and service firms know which work is actually profitable."
          projects:
            - name: Questions job costing must answer
              description: |-
                ## Purpose
                Most firms that start job costing collect far more detail than anyone reads, then give up after three months. Writing down the handful of decisions the numbers must support, such as which job types to chase, whether quotes cover real costs and when a live job is drifting, tells you how many cost codes, how much timesheet detail and which reports you actually need.

                ## Milestones
                1. A list of no more than five decisions job costing must inform, each with the person who makes it.
                2. Each decision matched to the report or number that would answer it.
                3. A decision recorded on the level of detail: job only, job and cost code, or job, phase and cost code.
                4. The list agreed by the owner or operations lead and kept with the job costing set-up notes.

                ## Notes
                Start simpler than feels right. Five cost codes used consistently beat forty used by one person.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of up to five decisions, each linked to a report and an owner, with the chosen level of cost detail recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the three pricing or staffing decisions you made last quarter without good cost data"
                - "Ask the project leads which job numbers they would check weekly if they had them"
                - "Choose the level of detail: job, phase or cost code"
                - "Record the agreed decisions list in the job costing set-up notes"
            - name: Job numbering and the master job list
              description: |-
                ## Purpose
                Every cost that cannot be tied to a job number ends up in general overheads, which makes jobs look more profitable than they are. A simple numbering scheme, a single master job list and a rule that no job starts work without a number give every timesheet, purchase order and supplier bill somewhere to land.

                ## Milestones
                1. A job numbering format chosen, for example year, sequence and a job type letter.
                2. A master job list with job number, client, site or brief, project lead, contract type and status.
                3. Jobs set up as projects, jobs or tracking categories in the accounting or job management software.
                4. A written rule that work cannot start, and nothing can be ordered, until the job has a number.

                ## Notes
                Keep small recurring call-outs under one service job per month or per client rather than creating hundreds of tiny jobs.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live job has a number on the master list and in the accounting software, and the no-number-no-start rule has been shared with the team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a job number format and write two worked examples"
                - "List every live job with client, lead, contract type and status"
                - "Create each live job in the accounting or job management software"
                - "Tell the team that no work starts or orders go out without a job number"
            - name: Cost codes for labour, materials, subcontract and plant
              description: |-
                ## Purpose
                A job total on its own tells you a job lost money, not why. A short set of cost codes, typically labour, materials, subcontract, plant and equipment, and other direct costs, split by phase where it matters, shows whether the loss came from slow labour, a missed material price or a subcontractor overrun.

                ## Milestones
                1. A cost code list of between five and twenty codes, each with a one-line definition.
                2. Codes grouped into cost types so they roll up to labour, materials, subcontract, plant and other.
                3. The same codes used in the estimating sheet, the job budget and the timesheet.
                4. A coding guide with ten common examples shared with whoever codes bills and time.

                ## Notes
                Construction firms often borrow a published classification such as a trade section list. Agencies usually code by phase or deliverable instead, such as discovery, design, build and launch.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cost code list with definitions is live in the estimating sheet, job budgets and timesheets, with a coding guide issued."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a cost code list from the lines on your last three estimates"
                - "Merge any codes that would be used less than once a month"
                - "Add the codes to the estimating sheet and the timesheet"
                - "Write a one-page coding guide with ten real examples"
            - name: Fully burdened labour rate for each role
              description: |-
                ## Purpose
                Wages are only part of what an hour of labour costs: employer taxes, pension, holiday pay, sick pay, insurance, training, vans and phones all ride on top, and nobody bills every hour they are paid for. Working out a burdened cost per productive hour for each role is usually the single biggest correction to job costs, often adding a third or more to the bare wage.

                ## Milestones
                1. Annual paid hours, holiday, sick allowance and non-productive time estimated for each role.
                2. Employer taxes, pension, insurance and per-person costs added to base pay.
                3. A burdened cost per productive hour calculated for each role or grade.
                4. The rates loaded into timesheet costing and the estimating sheet.

                ## Notes
                Keep cost rates and charge-out rates separate. The cost rate is what an hour costs you; the charge-out rate is what you sell it for.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A burdened cost per productive hour exists for every role, with its workings, and is used in both timesheet costing and estimates."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull last year's gross pay, employer taxes and pension by role from payroll"
                - "Estimate productive hours per role after holiday, sickness, travel and training"
                - "Add insurance, vehicle and tool costs that follow each person"
                - "Calculate the burdened hourly cost and load it into timesheet costing"
            - name: Timesheets coded to job and cost code
              description: |-
                ## Purpose
                Labour is usually the largest and least controlled cost on a job, and hours written up on a Friday from memory are mostly guesses. A timesheet that captures job number and cost code each day, approved by someone who knows the work, turns labour from an estimate into a measured cost.

                ## Milestones
                1. A timesheet format or app that records date, person, job, cost code and hours.
                2. A daily entry rule agreed with the team, with a named approver for each crew or team.
                3. Non-job time such as travel, yard time, admin and training given its own codes.
                4. Four consecutive weeks of timesheets where at least 95 percent of paid hours carry a job or non-job code.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four consecutive weeks of timesheets with at least 95 percent of paid hours coded to a job and cost code or a non-job code."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose the timesheet app or form the team will use"
                - "Add non-job codes for travel, yard, admin, training and downtime"
                - "Name an approver for each crew or team"
                - "Brief the team on daily entry and why job codes matter"
            - name: Materials and supplier bills coded to jobs
              description: |-
                ## Purpose
                Materials bought on a trade account or company card often land in a general purchases account, so a job looks cheap until the year-end accounts show where the money went. Putting the job number on every purchase order, delivery and supplier bill means each cost reaches the job it belongs to in the month it is incurred.

                ## Milestones
                1. A purchase order or order reference that always carries the job number and cost code.
                2. Suppliers asked to quote the job number on delivery notes and invoices.
                3. Bills for a job coded to job and cost code when they are entered, not afterwards.
                4. A clearing code for stock bought ahead of jobs, so it is issued to jobs when used.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "For one full month, every supplier bill for job materials or subcontract carries a job number and cost code when it is entered."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Add a job number field to your purchase order or order form"
                - "Email your main suppliers asking them to quote the job number on every invoice"
                - "Code this week's supplier bills to job and cost code as they are entered"
                - "Set up a stock clearing code for materials bought ahead of a job"
            - name: Overhead recovery rate per productive hour
              description: |-
                ## Purpose
                Rent, the office team, software, insurance and the owner's time are not caused by any single job, yet the jobs have to pay for them. A recovery rate per productive labour hour, set from the budgeted overheads and budgeted hours, shows the difference between a job's gross margin and the point where it truly contributes to profit.

                ## Milestones
                1. Annual overheads that are not charged directly to jobs totalled from the accounts or budget.
                2. Budgeted productive hours for the coming year estimated from headcount and utilisation.
                3. An overhead recovery rate per productive hour calculated and written down with its workings.
                4. The rate shown as a separate line in job reports, below gross margin.

                ## Notes
                Show overhead recovery below gross margin, not mixed into direct costs, so project leads are judged on what they control. How shared costs are split across departments belongs with your cost centre work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented overhead recovery rate per productive hour appears as its own line on every job report."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total last year's overheads that are not charged directly to jobs"
                - "Estimate productive hours for the coming year from headcount and utilisation"
                - "Divide overheads by productive hours and write down the workings"
                - "Add an overhead recovery line under gross margin in the job report"
            - name: Baseline costing of the last ten completed jobs
              description: |-
                ## Purpose
                Before changing prices or processes, it helps to know what recent jobs actually made, using real costs rather than the original quote. Re-costing ten finished jobs with burdened labour, every bill and every variation often shows that one job type subsidises another, and gives a starting margin to improve against.

                ## Milestones
                1. Ten recent completed jobs chosen across your main job types and sizes.
                2. Labour, materials, subcontract and other costs gathered for each from timesheets and bills.
                3. Each job's actual margin compared with the margin in its original estimate.
                4. A one-page summary naming the most and least profitable job types and the biggest cost gaps.

                ## Notes
                Where timesheets are missing, use the crew's best estimate and mark it as estimated. A rough baseline beats none.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten completed jobs re-costed with burdened labour and all bills, with estimate and actual margins compared on one page."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick ten finished jobs across your main job types"
                - "Pull the timesheet hours and supplier bills for each job"
                - "Apply burdened labour rates and total the actual cost of each job"
                - "Ask the agent to draft a one-page summary of margin by job type"
            - name: Hourly cost rates for owned plant and vehicles
              description: |-
                ## Purpose
                Owned diggers, vans, scaffolding, cameras or specialist kit cost money whether they are on a job or in the yard, and jobs that use them for free look better than they are. An internal hourly or daily rate covering depreciation, finance, insurance, fuel and maintenance lets you charge kit to jobs and compare owning against hiring.

                ## Milestones
                1. A list of owned plant, vehicles and kit worth charging to jobs.
                2. Annual cost of each item worked out from depreciation, finance, insurance, servicing and fuel.
                3. Expected working days or hours per year estimated for each item.
                4. An internal hourly or daily rate set for each item and added to the cost codes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each owned item worth charging has an internal rate with workings, and equipment time appears on job cost reports."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the owned plant, vehicles and kit that go out on jobs"
                - "Gather the annual depreciation, insurance and servicing cost of each item"
                - "Estimate working days per year and set an internal rate for each"
                - "Add an equipment cost code and a way to log kit days against jobs"
            - name: Job budget built from the accepted estimate
              description: |-
                ## Purpose
                An estimate that stays in the sales folder cannot warn anyone when a job drifts. Converting the accepted estimate into a job budget by cost code, with hours as well as money for labour, gives the project lead something to manage against from day one and makes every later variance report possible.

                ## Milestones
                1. A standard way of turning an accepted estimate into a budget by cost code.
                2. Labour budgeted in hours and money, materials and subcontract in money.
                3. Contingency held as its own line rather than spread across codes.
                4. Every job started this month entered with a budget before its first timesheet.

                ## Notes
                Lock the original budget once the job starts. Approved variations are added as separate budget lines so the original stays visible.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every job started in a calendar month has a cost code budget, including labour hours, loaded before its first timesheet."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Map the lines on your estimate template to the cost codes"
                - "Load the budget for the next job to start, with labour in hours"
                - "Hold contingency as a separate budget line"
                - "Walk the project lead through the budget before work begins"
            - name: Weekly timesheet approval and coding check
              description: |-
                ## Purpose
                Timesheets miscoded in week one are almost impossible to fix in week six, when nobody remembers which site they were on. A short Monday approval, checking every hour has a job and a cost code and that hours match the payroll, keeps labour costs accurate while memories are fresh.

                ## Milestones
                1. Approvers named for every crew or team with a deputy for holidays.
                2. Last week's timesheets approved by Monday midday each week.
                3. Hours on timesheets reconciled to hours paid through payroll.
                4. Uncoded or wrongly coded hours below 2 percent of the week's total for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Timesheets approved by Monday midday for eight consecutive weeks, with uncoded hours under 2 percent."
                cadence: rolling
              tasks:
                - "Name a deputy approver for each crew or team"
                - "Approve last week's timesheets and check every hour has a job and cost code @recurring(weekly:mon)"
                - "Compare timesheet hours with payroll hours and chase any gap"
                - "Return wrongly coded entries to the person who made them"
            - name: Weekly job cost report for live jobs
              description: |-
                ## Purpose
                Problems on a job show up in the numbers weeks before they show up in the bank, but only if someone looks. A one-page weekly report for each live job, showing budget, cost to date and committed costs by cost code, lets the project lead act while there is still time to recover margin.

                ## Milestones
                1. A standard report layout with budget, actual to date, committed and remaining by cost code.
                2. Labour hours shown against budgeted hours, not just money.
                3. The report produced every Friday for every live job over a size threshold.
                4. Any cost code past 90 percent of budget flagged to the project lead with a comment.

                ## Notes
                Include committed costs from open purchase orders. Waiting for supplier bills makes the report a month late.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly cost report produced for every live job over the threshold for eight consecutive weeks, with every over-budget code commented on."
                cadence: rolling
              tasks:
                - "Set the job size above which a weekly report is produced"
                - "Run the cost report for every live job and flag codes past 90 percent of budget @recurring(weekly:fri)"
                - "Add open purchase orders to the committed cost column"
                - "Send each project lead their report with flagged lines highlighted"
            - name: Monthly work in progress schedule
              description: |-
                ## Purpose
                Long jobs straddle month ends, so the profit and loss can show a great month that is really a big invoice raised early, or a terrible one that is just billing lagging behind cost. A monthly WIP schedule listing each job's contract value, estimated total cost, cost to date, percent complete and billed to date shows which jobs are over billed or under billed, and gives the accountant the figures they need.

                ## Milestones
                1. A WIP schedule layout agreed with your accountant, one row per live job.
                2. Percent complete worked out consistently, for example cost to date over estimated total cost.
                3. Over and under billing calculated for each job and totalled.
                4. The schedule produced within four working days of each month end for three months running.

                ## Notes
                How the WIP figures feed revenue in the accounts is a policy decision for your accountant. This project prepares the job-level figures.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A WIP schedule with over and under billing for every live job produced within four working days of month end for three consecutive months."
                cadence: rolling
              tasks:
                - "Agree the WIP schedule columns with your accountant"
                - "Build the WIP schedule from contract value, cost to date and billed to date @recurring(monthly:4)"
                - "Mark any job whose under billing has grown two months running"
                - "Send the schedule and a short note to the accountant"
            - name: Cost to complete forecast on each live job
              description: |-
                ## Purpose
                Cost to date says nothing about whether a job will finish profitably; what matters is what is left to spend. A monthly cost to complete from each project lead, built bottom up by cost code, gives an estimate at completion and the forecast margin, which is the number that tells you to change course.

                ## Milestones
                1. A cost to complete sheet by cost code with hours and money remaining.
                2. Project leads trained to forecast remaining cost rather than remaining budget.
                3. Estimate at completion and forecast margin calculated for every live job.
                4. Any job whose forecast margin falls by more than five points escalated to the owner.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live job has a cost to complete forecast updated within the last month, with forecast margin drops over five points escalated."
                cadence: rolling
              tasks:
                - "Create a cost to complete sheet by cost code with hours and money"
                - "Update cost to complete for each live job with its project lead @recurring(monthly:7)"
                - "Compare forecast margin with the estimate and last month's forecast"
                - "Escalate any job whose forecast margin has fallen more than five points"
            - name: Variation and change order cost log
              description: |-
                ## Purpose
                Extra work agreed on site or in a client call is the most common way margin leaks away, because the cost lands on the job and the price never reaches an invoice. A live log of every change, with its cost estimate, client approval and billing status, makes sure added scope is priced, approved and charged.

                ## Milestones
                1. A variation log per job recording date, description, who asked, estimated cost and price.
                2. A rule that variations are logged the same day they are requested.
                3. Each variation tracked from requested to priced, approved, done and invoiced.
                4. No approved variation older than a month left uninvoiced.

                ## Notes
                Get written approval, even an email or a signed site note, before doing the extra work wherever the contract allows it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live job has a variation log, and no approved variation older than thirty days is uninvoiced."
                cadence: rolling
              tasks:
                - "Set up a variation log with status columns for every live job"
                - "Ask crews and leads to log any client request for extra work that day"
                - "Review open variations and send unpriced ones to the client for approval @recurring(weekly:wed)"
                - "Code the cost of approved variations to their own budget line"
            - name: Unbilled time and cost sweep on time and materials jobs
              description: |-
                ## Purpose
                On time and materials work, every hour or receipt that is not billed is pure lost profit, and the usual culprits are late timesheets, materials bought on a card and small extras nobody wrote down. A monthly sweep that compares costs on each job with what has been invoiced catches the leakage before the client relationship makes it awkward to bill.

                ## Milestones
                1. A report showing chargeable hours and costs on each time and materials job against amounts invoiced.
                2. Unbilled items older than thirty days listed with a reason.
                3. Each unbilled item either invoiced, written off with approval, or explained.
                4. Unbilled chargeable work older than sixty days reduced to zero for two months running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No chargeable time or cost older than sixty days remains unbilled on any time and materials job for two consecutive months."
                cadence: rolling
              tasks:
                - "Build a report of chargeable hours and costs against invoiced amounts by job"
                - "List time and receipts on time and materials jobs not yet invoiced @recurring(monthly:25)"
                - "Agree with the project lead whether to bill, write off or hold each item"
                - "Record the reason and approver for every write-off"
            - name: Supplier bill to job matching sweep
              description: |-
                ## Purpose
                Even with good habits, some bills arrive without a job reference or get coded to a general account in a busy week. A monthly sweep of uncoded and general purchases, matched back to purchase orders and delivery notes, keeps job costs complete and stops one job's materials quietly flattering another's margin.

                ## Milestones
                1. A saved report of supplier bills coded to general purchase accounts or with no job.
                2. Each item matched to a purchase order, delivery note or the person who ordered it.
                3. Bills recoded to the right job and cost code before the WIP schedule is run.
                4. Uncoded job purchases below 1 percent of the month's direct costs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, uncoded job purchases are below 1 percent of the month's direct costs after the sweep."
                cadence: rolling
              tasks:
                - "Save a report of supplier bills with no job or a general purchase code"
                - "Find last month's bills without a job number and recode them @recurring(monthly:11)"
                - "Ask the buyer for the job when a bill cannot be matched"
                - "Note suppliers who repeatedly leave off the job number"
            - name: Job close-out and final cost review
              description: |-
                ## Purpose
                Jobs left open after the work ends keep collecting stray costs, and the lessons from them are lost once the crew moves on. A standard close-out within a month of completion, with final costs, retention due, warranty cost reserve and a short lessons note, turns each finished job into evidence for the next estimate.

                ## Milestones
                1. A close-out checklist covering final bills, retention, variations, credits and warranty cost.
                2. Final actual cost compared with the original budget and the estimate at completion.
                3. A short lessons note from the project lead on the two biggest variances.
                4. The job marked closed in the software so no new costs can be coded to it.

                ## Notes
                Start from the **Operational checklist** template. Leave a small warranty or snagging cost line open only if the contract has a defects period.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every job completed in a quarter is closed out within thirty days with final cost, variance notes and lessons recorded."
                cadence: rolling
              tasks:
                - "Build a close-out checklist from the operational checklist template"
                - "Close out each job that finished in the previous month @recurring(monthly:18)"
                - "Ask the project lead for a lessons note on the two biggest variances"
                - "Lock closed jobs in the software against new cost coding"
            - name: Monthly job margin league table
              description: |-
                ## Purpose
                Looking at one job at a time hides patterns, such as a client who always ends in a loss or a job type that only works above a certain size. Ranking every closed and live job each month by margin and margin per labour hour shows where the money is made and gives sales and estimating something concrete to act on.

                ## Milestones
                1. A table of jobs with revenue, direct cost, gross margin, margin percent and margin per labour hour.
                2. Jobs grouped by job type, client and size band.
                3. The top five and bottom five jobs each month discussed with the owner or managers.
                4. Six months of tables kept so trends by job type are visible.

                ## Notes
                Start from the **Metrics log** template. Margin per labour hour often ranks jobs differently from margin percent, and is better at showing which work uses scarce people well.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly league tables, each with the top and bottom five jobs discussed and one action recorded."
                cadence: rolling
              tasks:
                - "Set up the league table from the metrics log template"
                - "Rank jobs by margin percent and margin per labour hour @recurring(monthly:15)"
                - "Group the results by job type, client and size band"
                - "Record one action for sales or estimating from the bottom five"
            - name: Quarterly refresh of burdened labour rates
              description: |-
                ## Purpose
                Pay rises, new hires, changes to employer taxes or insurance premiums and a shift in productive hours all change what an hour of labour costs. Refreshing the burdened rates each quarter stops job costs and estimates from quietly understating labour by several percent through the year.

                ## Milestones
                1. A list of the inputs that change rates: pay, employer taxes, pension, insurance and productive hours.
                2. Burdened rates recalculated each quarter and compared with the previous quarter.
                3. Any change over 3 percent passed to the estimating sheet the same week.
                4. A dated rate history kept so old jobs can be reported on the rates in force at the time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Burdened labour rates recalculated in each of four consecutive quarters, with a dated history and estimating sheet updates for changes over 3 percent."
                cadence: cyclic
              tasks:
                - "List the payroll and insurance changes since the rates were last set"
                - "Recalculate burdened labour rates with current pay, taxes and insurance @recurring(quarterly)"
                - "Update the estimating sheet when any rate moves more than 3 percent"
                - "Add the new rates to a dated rate history"
            - name: Direct, indirect and overhead costs in job costing
              description: |-
                ## Purpose
                Arguments about job profitability usually come down to which costs belong on the job: the site van, the estimator's time, the small tools, the project manager. Learning the difference between direct job costs, indirect job costs such as supervision and site set-up, and general overheads gives everyone the same vocabulary and stops costs being argued on and off jobs.

                ## Milestones
                1. The three categories explained in your own words with examples from your business.
                2. Twenty of your common cost types sorted into direct, indirect job cost or overhead.
                3. Grey areas such as supervision, travel and small tools decided and written down.
                4. The sorting shared with project leads and the bookkeeper.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of twenty cost types sorted into direct, indirect job cost or overhead, with grey areas decided and shared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a management accounting guide to job costing cost categories"
                - "Sort twenty of your common costs into direct, indirect or overhead"
                - "Decide how supervision, travel and small tools will be treated"
                - "Share the sorted list with project leads and the bookkeeper"
            - name: Reading a job cost report line by line
              description: |-
                ## Purpose
                Project leads and owners often glance at the bottom line of a job report and miss the early warnings in the middle: labour hours ahead of progress, committed costs not yet billed, or a material line already spent on a job half done. Learning to read each column, and what pattern means trouble, makes the weekly report a tool rather than a form.

                ## Milestones
                1. Each column of your job cost report defined in one sentence.
                2. Three warning patterns written down, such as hours spent racing ahead of percent complete.
                3. Two live job reports read with a mentor or the finance lead, with questions noted.
                4. A short reading guide added to the front of the weekly report pack.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page reading guide to the job cost report, including three warning patterns, attached to the weekly report pack."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-sentence definition for each column of the job cost report"
                - "List three patterns that signal a job is in trouble"
                - "Read two live job reports with the finance lead and note questions"
                - "Add a one-page reading guide to the weekly report pack"
            - name: Over billing and under billing explained
              description: |-
                ## Purpose
                A contractor can be profitable on paper and short of cash, or flush with cash on jobs that are losing money, and over and under billing is usually why. Understanding how billing ahead of or behind the work affects cash, the balance sheet and the honesty of reported margin helps owners and project leads read the WIP schedule properly.

                ## Milestones
                1. Over billing and under billing explained in your own words with a worked example.
                2. The cash and balance sheet effect of each written down.
                3. Your current WIP schedule reviewed to identify the three biggest over and under billed jobs.
                4. Questions on how your accounts treat WIP put to your accountant and answered.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example of over and under billing written up, with the three largest items on your WIP schedule explained and the accountant's answers recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work through a percent complete example with cost, billing and margin"
                - "Write the cash effect of over billing and of under billing"
                - "Find the three biggest over and under billed jobs on your WIP schedule"
                - "Ask your accountant how your accounts treat job WIP"
            - name: Earned value basics for project leads
              description: |-
                ## Purpose
                Comparing spend with budget says nothing about whether the work done matches the money spent. Earned value adds a third measure, the budgeted cost of work actually performed, so a project lead can tell the difference between a job that is overspending and one that is simply ahead of schedule.

                ## Milestones
                1. Planned value, earned value and actual cost defined with an example from one of your jobs.
                2. Cost and schedule variance, and the cost and schedule performance indices, calculated by hand once.
                3. A note on when earned value is worth the effort, for example jobs over a set value or length.
                4. One live job assessed with earned value and the result discussed with its lead.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Earned value measures calculated by hand for one live job and discussed with its project lead, with a written threshold for when to use them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read an introduction to earned value from a project management body"
                - "Calculate planned value, earned value and actual cost for one live job"
                - "Work out the cost and schedule performance indices for that job"
                - "Write the job size threshold above which earned value is used"
            - name: Margin versus markup in quoting
              description: |-
                ## Purpose
                Adding 25 percent to cost gives a 20 percent margin, not 25, and estimators who mix the two up underprice every job by a few points. Learning the conversion, and deciding which one your quotes and reports will use, closes one of the commonest gaps between quoted and achieved margin.

                ## Milestones
                1. The formulas for markup and margin written down with a conversion table.
                2. Your estimating sheet checked to confirm which one it applies.
                3. A house rule recorded: quotes target a margin, and reports show margin.
                4. Estimators and the owner shown the difference with an example from a recent quote.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A markup to margin conversion table is in the estimating sheet and a written house rule on which measure quotes use has been shared."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the markup and margin formulas with a conversion table from 10 to 50 percent"
                - "Check whether your estimating sheet applies markup or margin"
                - "Record the house rule on which measure quotes and reports use"
                - "Show the estimators one recent quote calculated both ways"
            - name: Utilisation, realisation and recovery for service teams
              description: |-
                ## Purpose
                Agencies and consultancies sell time, so profit depends on three ratios: how many paid hours go on client work, how much of that time is billed, and how much of what is billed is actually collected. Understanding utilisation, realisation and recovery shows whether a thin month came from idle people, write-offs or fixed fees that ran over.

                ## Milestones
                1. Utilisation, realisation and recovery defined as they will be used in your firm.
                2. Each ratio calculated for last quarter by team.
                3. A sensible target range for each agreed with the managers, based on your own history.
                4. The three ratios added to the monthly management view.

                ## Notes
                Do not set a utilisation target for individuals without allowing for business development, training and leave, or the target will be gamed with padded timesheets.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Utilisation, realisation and recovery calculated by team for last quarter, with agreed target ranges in the monthly management view."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the definitions of utilisation, realisation and recovery your firm will use"
                - "Calculate each ratio by team for last quarter"
                - "Agree a target range for each ratio with the managers"
                - "Add the three ratios to the monthly management view"
            - name: Job cash curve of cost incurred against cash collected
              description: |-
                ## Purpose
                A profitable job can still drain the bank if labour and materials are paid weeks before the client pays, especially with retentions or long payment terms. Plotting cost incurred against cash collected for a typical job shows how much working capital each job ties up, and how deposits, stage payments or shorter terms would change it.

                ## Milestones
                1. Weekly cost paid and cash received plotted for two completed jobs.
                2. The peak cash gap and the week it occurred noted for each.
                3. The effect of retention and payment terms on the gap written down.
                4. One change to deposits or stage payments proposed for the next similar job.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Cash curves for two completed jobs, with the peak cash gap identified and one billing change proposed for similar jobs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull weekly payments and receipts for two completed jobs"
                - "Plot cumulative cost paid against cumulative cash received"
                - "Mark the peak cash gap and when it happened"
                - "Propose a deposit or stage payment change for similar jobs"
            - name: Job costing software or add-on decision
              description: |-
                ## Purpose
                Spreadsheets work for a handful of jobs, but past ten or so live jobs, or once more than one person codes costs, they break. Comparing the job module in your accounting software with specialist job management or project costing tools, against your own must-haves, avoids buying features you will not use or missing the one you need.

                ## Milestones
                1. A list of must-have features, such as cost codes, committed costs, mobile timesheets, WIP and accounting sync.
                2. Three options shortlisted and scored against the same criteria.
                3. A trial run on one real job in the preferred option.
                4. A decision recorded with cost, implementation time and who will run it.

                ## Notes
                Start from the **Purchase decision** template. Check that the tool posts costs back to your ledger by job, not just as a monthly total.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a job costing tool, based on three scored options and a trial on one real job."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write your must-have job costing features in priority order"
                - "Shortlist three tools including your accounting software's own job module"
                - "Run one real job through the preferred tool on a trial"
                - "Record the decision with cost, set-up time and owner"
            - name: Fixed price versus time and materials rules
              description: |-
                ## Purpose
                Fixed prices reward firms that estimate well and punish those that do not, while time and materials protects margin but caps the upside and can put clients off. Using your job cost history to decide which job types go out on which basis, and when to switch, takes the guesswork out of each quote.

                ## Milestones
                1. Historical margin and variance for fixed price and time and materials jobs compared by job type.
                2. Job types where costs vary widely identified as candidates for time and materials or capped pricing.
                3. Written rules for which contract basis each job type uses by default.
                4. The rules applied to the next ten quotes and reviewed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written pricing basis rules for each job type, backed by margin history, applied to the next ten quotes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compare margin and cost variance for fixed price and time and materials jobs"
                - "Find the job types where actual cost varies most from the estimate"
                - "Write the default contract basis for each job type"
                - "Review how the rule worked after ten quotes"
            - name: Minimum job size and small job charge
              description: |-
                ## Purpose
                Small jobs carry the same travel, set-up, admin and invoicing costs as larger ones, and in many trades and agencies anything under a few hours loses money. Costing the fixed effort of any job and setting a minimum charge or call-out fee stops the diary filling with work that keeps people busy and the firm poorer.

                ## Milestones
                1. The fixed cost of any job worked out: travel, set-up, admin, quoting and invoicing.
                2. Margin on jobs below several size bands compared from job history.
                3. A minimum charge, call-out fee or minimum engagement decided.
                4. The rule added to quotes and the website or rate card, and explained to the team.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A minimum job charge set from the costed fixed effort per job and shown on the rate card and quotes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate travel, set-up, admin and invoicing time per job"
                - "Compare margin by job size band from the last six months"
                - "Decide the minimum charge or call-out fee"
                - "Add the minimum charge to the rate card and quote template"
            - name: Estimate to actual feedback into estimating rates
              description: |-
                ## Purpose
                Estimators who never see what jobs actually cost repeat the same mistakes, usually underestimating labour on unfamiliar work. Feeding closed job variances back into the estimating rates each quarter, cost code by cost code, makes every new quote a little more accurate than the last.

                ## Milestones
                1. Estimated and actual cost by cost code collected for jobs closed in the quarter.
                2. Codes with a consistent variance in the same direction identified.
                3. Estimating rates or allowances adjusted where the pattern holds across at least three jobs.
                4. A change note recorded for each adjustment with the evidence behind it.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two quarterly feedback reviews completed, each with estimating rate changes recorded and backed by at least three closed jobs."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect estimated and actual cost by cost code for jobs closed this quarter"
                - "Mark codes that ran over or under on at least three jobs"
                - "Adjust estimating rates from closed job variances and log the evidence @recurring(quarterly)"
                - "Share the changes with everyone who prices work"
            - name: Mobile time and receipt capture for field crews
              description: |-
                ## Purpose
                Paper timesheets and receipts in van door pockets are the main reason field costs reach jobs late or not at all. Moving crews to a phone app for daily time, photos of receipts and delivery notes, all tagged to a job, cuts the lag from weeks to a day and frees the office from chasing.

                ## Milestones
                1. An app chosen that captures time, receipts and photos by job and syncs to your system.
                2. A pilot with one crew for four weeks, with problems logged.
                3. All crews moved over with a short training session and a one-page guide.
                4. Ninety percent of time and receipts captured on the day they occur.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "All field crews capture time and receipts in the app, with at least 90 percent entered on the same day for a month."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one crew to pilot mobile time and receipt capture"
                - "Write a one-page guide with screenshots for the crews"
                - "Check which crew members missed same-day entries and follow up @recurring(weekly:thu)"
                - "Move the remaining crews over after the four-week pilot"
            - name: Van stock and stores issues to jobs
              description: |-
                ## Purpose
                Fittings, cable, consumables and small parts drawn from a van or the yard are often never charged to any job, so materials cost looks low on jobs and high in the accounts. A simple stores policy, with standard costs for common items and a monthly count, gets these materials onto the jobs that used them.

                ## Milestones
                1. A list of common van and stores items with a standard cost for each.
                2. A way for crews to record items used per job, on the job sheet or app.
                3. A monthly van stock count reconciled to items issued.
                4. Unrecorded usage below an agreed level for three months.

                ## Notes
                Low-value consumables can be charged as a fixed percentage of labour cost instead of item by item. Decide the threshold once and write it down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly van stock counts reconciled to items issued to jobs, with unrecorded usage under the agreed level."
                cadence: rolling
              tasks:
                - "List the common van and stores items with a standard cost"
                - "Add an items used section to the job sheet or app"
                - "Count van stock and post the month's usage to jobs @recurring(monthly:28)"
                - "Set a consumables percentage for items too small to track"
            - name: Subcontract versus in-house cost comparison
              description: |-
                ## Purpose
                Whether to use your own crew or a subcontractor for a trade or a piece of work is often decided by habit rather than cost. Comparing the full burdened in-house cost, including supervision, rework and idle time, with subcontract quotes on three recent jobs shows where you are paying for convenience and where your own people are cheaper.

                ## Milestones
                1. Three recent pieces of work chosen that could have gone either way.
                2. In-house cost calculated with burdened labour, plant, supervision and rework.
                3. Subcontract cost gathered from quotes or actual invoices, plus your management time.
                4. A decision recorded on which work types go to subcontractors by default.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded make or buy decision for each main work type, based on a costed comparison on three real jobs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick three pieces of work that could be done in-house or subcontracted"
                - "Cost the in-house option with burdened labour, plant and supervision"
                - "Gather subcontract prices and add your management time"
                - "Record which work types go to subcontractors by default"
            - name: Rate card rebuilt from job cost data
              description: |-
                ## Purpose
                Charge-out rates and price lists are often set years ago and nudged up with inflation, without checking them against what an hour or a unit of work now costs. Rebuilding the rate card from burdened rates, overhead recovery and a target margin shows which rates are underwater and gives a defensible basis for any increase.

                ## Milestones
                1. Current charge-out rates and unit prices listed with the date each was last set.
                2. Each rate compared with burdened cost plus overhead recovery.
                3. A target margin applied to produce a proposed rate for each line.
                4. New rates approved by the owner, with a date and plan for telling clients.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A rate card in which every line has been checked against burdened cost plus overhead recovery, with new rates approved and dated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List current charge-out rates with the date each was last changed"
                - "Compare each rate with burdened cost plus overhead recovery"
                - "Propose new rates at the target margin"
                - "Agree the new rates and the client notice date with the owner"
            - name: Year-end job cost cut-off and WIP handover
              description: |-
                ## Purpose
                At the financial year end the accountant needs a clean picture of every open job: costs to date, billing to date, unbilled work and likely losses, all cut off at the right date. Preparing this pack before they ask avoids late adjustments, a higher fee for untangling job records and a profit figure nobody trusts.

                ## Milestones
                1. The cut-off date and required schedules agreed with the accountant.
                2. All timesheets and supplier bills up to the cut-off coded to jobs.
                3. A year-end WIP schedule with cost to complete for every open job.
                4. Any expected loss-making job flagged with the forecast loss.
                5. The pack sent to the accountant by the agreed date.

                ## Notes
                Whether and how a forecast loss is recognised is for your accountant to decide. Your job is to give them the job-level evidence.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A year-end job pack with WIP schedule, cost to complete and flagged loss jobs delivered to the accountant by the agreed date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the year-end cut-off date and job schedules with the accountant @recurring(yearly)"
                - "Chase every timesheet and supplier bill up to the cut-off"
                - "Get a cost to complete from the lead on every open job"
                - "Send the year-end job pack to the accountant"
            - name: Loss-making job post-mortem
              description: |-
                ## Purpose
                When a job loses money, the temptation is to blame the client or the weather and move on, so the same thing happens again. A structured post-mortem within a few weeks of completion, tracing the loss to estimate, scope, productivity, materials or variations, produces fixes rather than blame.

                ## Milestones
                1. The loss broken down by cost code against the original budget.
                2. Each major variance traced to a cause: estimate, scope, productivity, price or unpriced variation.
                3. A meeting held with the estimator, project lead and owner.
                4. Two or three specific changes agreed, each with an owner and a date.

                ## Notes
                Start from the **Remediation plan** template. Keep the meeting about systems, not individuals, or people will hide the next bad job.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A post-mortem held for the loss-making job, with the loss traced by cost code and up to three dated changes assigned."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Break the job's loss down by cost code against budget"
                - "Trace each large variance to estimate, scope, productivity, price or variation"
                - "Hold a post-mortem with the estimator, project lead and owner"
                - "Write the agreed changes in a remediation plan with owners and dates"
            - name: Cost build for a major tender or pitch
              description: |-
                ## Purpose
                Tendering for work several times larger than your usual job is where costing mistakes hurt most, because there is less history to lean on and more risk hidden in the scope. A disciplined cost build, by cost code, with labour from production norms, firm subcontract quotes, a priced risk list and overhead recovery, gives the owner a clear walk-away price.

                ## Milestones
                1. The scope broken into cost codes and quantities from the tender documents.
                2. Labour priced from your own production rates and burdened rates.
                3. Firm quotes for materials and subcontract packages over a set value.
                4. A priced risk and contingency list, and a margin and walk-away price agreed with the owner.
                5. The cost build filed so it becomes the job budget if the tender is won.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete tender cost build by cost code with a priced risk list and an agreed walk-away price, filed ready to become the job budget."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Break the tender scope into cost codes and quantities"
                - "Request firm quotes for every subcontract package over your set value"
                - "Price the top ten risks and set the contingency"
                - "Agree the margin and walk-away price with the owner"
            - name: Annual job profitability review with the owners
              description: |-
                ## Purpose
                Monthly reports drive small corrections, but the big decisions, which clients to drop, which job types to grow and where to raise prices, need a full year of job data in one room. An annual review of every closed job by type, client and size band sets the commercial direction for the next year.

                ## Milestones
                1. A year of closed jobs summarised by job type, client, size band and project lead.
                2. Margin, margin per labour hour and estimate accuracy shown for each group.
                3. A review meeting held with the owners and senior managers.
                4. Three commercial decisions recorded, such as clients to reprice, job types to grow or stop.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual review held with a full-year job summary, and three commercial decisions recorded with owners."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Book the annual job profitability review with the owners @recurring(yearly)"
                - "Summarise the year's closed jobs by type, client, size and lead"
                - "Ask the agent to draft the review pack commentary from the summary"
                - "Record three commercial decisions in the meeting notes"
            - name: WIP schedule for a lender or surety
              description: |-
                ## Purpose
                Contractors seeking a bonding line, an overdraft increase or a contract finance facility are often asked for a WIP schedule and a list of completed contracts, and a messy one costs credibility and sometimes the facility. Preparing a clean, reconciled schedule ahead of the meeting shows the business knows its jobs.

                ## Milestones
                1. The lender's or surety's required format and supporting documents confirmed.
                2. A WIP schedule reconciled to the latest management accounts.
                3. A completed contracts list with contract value, final margin and dates.
                4. Explanations ready for any job with margin fade or large under billing.
                5. The pack sent and any follow-up questions answered.

                ## Notes
                Work with your accountant or broker on what the lender or surety needs. This project prepares the job data, not the facility terms.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A reconciled WIP schedule and completed contracts list delivered to the lender or surety, with every query answered."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the lender or surety for their WIP format and document list"
                - "Reconcile the WIP schedule to the latest management accounts"
                - "Prepare explanations for jobs with margin fade or large under billing"
                - "Send the WIP schedule to the surety or lender as the facility requires @recurring(quarterly)"
            - name: Sole trader taking on the first crew
              description: |-
                ## Purpose
                Working alone, the owner's own time is the job cost and the bank balance is the profit report. Once there is a first employee or a regular helper, wages are paid whether or not the job overruns, and simple job costing becomes the difference between growing and working harder for less.

                ## Milestones
                1. A burdened hourly cost for the new employee, and a notional rate for the owner's own time.
                2. Job numbers and a simple daily time record for both people.
                3. Materials receipts tagged to jobs in a phone app or envelope per job.
                4. A one-page profit check on each of the first ten jobs after the hire.

                ## Notes
                Include a fair wage for your own hours. A job that only pays because the owner works for free is not profitable.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The first ten jobs after the first hire each have a one-page profit check including the owner's time at a notional rate."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Work out the employee's burdened hourly cost"
                - "Set a notional hourly rate for your own time"
                - "Start a daily time note for both of you by job"
                - "Do a one-page profit check as each of the first ten jobs finishes"
            - name: Agency retainer and fixed-fee profitability
              description: |-
                ## Purpose
                Retainers and fixed fees feel safe, but scope creep, extra rounds of changes and senior people doing junior work can make a client unprofitable within a few months. Tracking hours used against hours sold for each retainer, at burdened cost, shows which clients to reprice, rescope or let go.

                ## Milestones
                1. Each retainer's fee converted into the hours it was priced to buy.
                2. Time on each retainer tracked by person and task, at burdened cost.
                3. A monthly view of hours used, effective hourly rate and margin per client.
                4. A conversation planned with any client running over 120 percent of sold hours for two months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every retainer client has a monthly hours used and margin view, and every client over 120 percent for two months has a rescoping conversation booked."
                cadence: rolling
              tasks:
                - "Convert each retainer fee into the hours it was priced to buy"
                - "Compare retainer hours used with hours sold for each client @recurring(monthly:3)"
                - "Work out the effective hourly rate for each retainer"
                - "Prepare a rescoping proposal for any client over 120 percent for two months"
            - name: First month owning job budgets as a project lead
              description: |-
                ## Purpose
                New project managers are often handed live jobs with budgets they did not set and reports they have never read. A structured first month, covering how budgets were built, how costs reach the job, and what the weekly report and cost to complete expect of you, means you can defend your numbers by the first month end.

                ## Milestones
                1. The original estimate, budget and variation log reviewed for each job you now own.
                2. A walk-through of how timesheets, orders and bills reach your jobs with the finance lead.
                3. Your first cost to complete submitted for each job.
                4. A list of the jobs you believe are at risk, with reasons, agreed with your manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "By day thirty, a cost to complete is submitted for every job you own and an at-risk list is agreed with your manager."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the estimate, budget and variation log for each job you now own"
                - "Ask the finance lead to walk you through how costs reach your jobs"
                - "Submit your first cost to complete for every job"
                - "Agree your at-risk job list with your manager"
            - name: Job costing alongside bookkeeping for an office manager
              description: |-
                ## Purpose
                In many small contractors and agencies, one office manager or bookkeeper does job costing on top of payroll, bills and invoicing, and it is the first thing dropped in a busy week. Fitting job coding into the existing bookkeeping routine, rather than treating it as a separate task, keeps job numbers current without extra hours.

                ## Milestones
                1. Job coding steps added to the existing bill entry, timesheet and invoicing routines.
                2. A fixed monthly slot for job cost tidy-up before the WIP schedule.
                3. A short list of questions the office manager can push back to project leads.
                4. Job reports running on time for three months without overtime.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Job cost reports produced on time for three consecutive months with job coding built into the existing bookkeeping routine."
                cadence: rolling
              tasks:
                - "Map where job coding fits into bill entry, timesheets and invoicing"
                - "Block a job cost tidy-up slot before the WIP schedule is due @recurring(monthly:2)"
                - "Write the questions to push back to project leads on missing codes"
                - "Agree with the owner which job reports can be dropped in a busy month"
            - name: Crew productivity comparison on repeat job types
              description: |-
                ## Purpose
                When the same kind of job is done by several crews or teams, hours per unit of work can differ by a third or more, and the difference is rarely about effort. Comparing labour per unit across crews for repeat job types highlights methods, kit or supervision worth copying, and shows where estimating rates should come from.

                ## Milestones
                1. Two or three repeat job types chosen with a clear unit of work, such as per square metre, per unit or per page.
                2. Hours per unit calculated for each crew over the last two quarters.
                3. Differences discussed with crew leads to find causes, not to rank people.
                4. One working method from the best performing crew written up and shared.

                ## Notes
                Adjust for job difficulty and access before comparing. Use the findings to improve methods, not as a disciplinary tool.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Hours per unit compared across crews for two repeat job types, with causes discussed and one improved method shared."
                cadence: rolling
              tasks:
                - "Choose two repeat job types with a clear unit of work"
                - "Compare hours per unit across crews for repeat job types @recurring(quarterly)"
                - "Discuss the differences with the crew leads"
                - "Write up one working method worth copying"
            - name: Earned value reporting on a long-duration contract
              description: |-
                ## Purpose
                On contracts running six months or more, simple budget against actual reports can hide a job that is spending on plan while falling behind on work. Monthly earned value reporting, with cost and schedule performance indices and a forecast estimate at completion, gives the client, the owner and the project lead an early, shared warning.

                ## Milestones
                1. A time-phased budget by work package to set planned value each month.
                2. A method for measuring percent complete on each package agreed with the project lead.
                3. Monthly planned value, earned value, actual cost and the two performance indices reported.
                4. An estimate at completion from the cost index compared with the bottom up cost to complete.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly earned value reports on the contract, each with both performance indices and an estimate at completion reconciled to cost to complete."
                cadence: rolling
              tasks:
                - "Phase the contract budget by work package and month"
                - "Agree how percent complete is measured on each work package"
                - "Calculate earned value and both performance indices at month end @recurring(monthly:6)"
                - "Compare the index-based forecast with the bottom up cost to complete"
            - name: Open-book cost reporting for a cost-plus client
              description: |-
                ## Purpose
                Cost-plus, target cost and open-book contracts let the client see and sometimes audit every cost, so a missing receipt or a labour rate nobody can explain becomes a dispute. Setting up job records that match the contract's definition of allowable cost, with backup for every line, gets each payment approved first time.

                ## Milestones
                1. The contract's definition of allowable and disallowed costs summarised on one page.
                2. Job cost codes mapped to the client's cost categories.
                3. A monthly cost statement with labour, materials and subcontract backup ready to send.
                4. No cost disallowed for missing evidence over three consecutive statements.

                ## Notes
                Check with the contract manager or your adviser whether overhead, profit and supervision are paid as a fee or as costs. It changes how they must be recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three consecutive monthly open-book statements accepted by the client with no cost disallowed for missing evidence."
                cadence: rolling
              tasks:
                - "Summarise allowable and disallowed costs from the contract on one page"
                - "Map your cost codes to the client's cost categories"
                - "Send the open-book cost statement with backup to the client @recurring(monthly:10)"
                - "Log every query the client raises and how it was resolved"
            - name: Delay and disruption cost records
              description: |-
                ## Purpose
                When a client's late information, access problems or changes slow a job, recovering the extra cost depends almost entirely on records made at the time. Keeping daily diaries, separately coded delay costs and dated correspondence turns a vague complaint into a claim your adviser or quantity surveyor can actually make.

                ## Milestones
                1. A daily site or project diary recording labour on site, work done, delays and their causes.
                2. A separate cost code for each delay or disruption event, opened the day it starts.
                3. Notices sent to the client within the contract's notice periods, with copies filed.
                4. A cost summary per event ready for your adviser or quantity surveyor.

                ## Notes
                Contract notice periods can be short and strict. Ask your adviser what the contract requires as soon as a delay starts; this project is about records, not legal conclusions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every delay event on a live job has a dated diary trail, its own cost code, a filed notice and a cost summary."
                cadence: rolling
              tasks:
                - "Set up a daily diary format for sites or projects"
                - "Write the day's diary entry with labour, progress and any delays @recurring(daily)"
                - "Open a separate cost code as soon as a delay event starts"
                - "Ask your adviser what notices the contract requires for delays"
            - name: Production norms library from job history
              description: |-
                ## Purpose
                Experienced estimators carry production rates in their heads, such as square metres per day or pages per designer day, and that knowledge leaves when they do. A library of production norms, built from closed job hours and quantities, makes estimating faster, more consistent and easier to hand over.

                ## Milestones
                1. The twenty most common work items chosen, each with a unit of measure.
                2. Hours per unit calculated from closed jobs, with the number of jobs behind each figure.
                3. Ranges and adjustment factors noted for difficulty, access or client type.
                4. The library linked into the estimating sheet and updated each quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A production norms library covering twenty work items, each based on at least three closed jobs, linked to the estimating sheet."
                cadence: rolling
              tasks:
                - "List the twenty most common work items with a unit of measure"
                - "Record quantities on closed jobs alongside their hours"
                - "Add closed job production rates to the norms library @recurring(quarterly)"
                - "Link the norms library to the estimating sheet"
            - name: Margin fade analysis across the job portfolio
              description: |-
                ## Purpose
                Margin fade, where the forecast margin on a job shrinks between award, midpoint and completion, is the most reliable sign of systematic over-optimism in estimating or weak site control. Tracking fade across the whole portfolio, by job type and project lead, separates bad luck on one job from a pattern worth fixing.

                ## Milestones
                1. Estimated margin, midpoint forecast margin and final margin recorded for every closed job.
                2. Average fade and its spread calculated by job type, size band and project lead.
                3. The three biggest sources of fade identified from close-out notes.
                4. A target for average fade agreed and reviewed each quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Margin fade tracked for every job closed in the last year, analysed by type and lead, with a fade target reviewed quarterly."
                cadence: rolling
              tasks:
                - "Add estimated, midpoint and final margin columns to the closed jobs list"
                - "Calculate margin fade by job type, size band and project lead @recurring(quarterly)"
                - "Find the three biggest causes of fade in the close-out notes"
                - "Agree an average fade target with the owner"
---

# Project & Job Costing

This area is for contractors, trades businesses, agencies and service firms, and the project managers inside them, who want to know what each job really cost and whether it made money. It starts with foundations (the questions job costing must answer, job numbers, cost codes, a fully burdened labour rate, timesheets and bills coded to jobs, overhead recovery and a budget built from the estimate), then the weekly and monthly machinery of cost reports, the WIP schedule, cost to complete, variations and close-outs, the costing skills behind it, decisions about pricing, software and job types, dated moments such as year-end cut-off and a big tender, situations for a sole trader taking on a crew, an agency on retainers and a new project manager, and finally specialist work such as earned value, open-book contracts, delay records and margin fade analysis.

What repeats is a weekly rhythm of timesheet approval on Monday, variation review on Wednesday, same-day time entry checks on Thursday and the live job cost report on Friday, then a monthly cycle with retainer hours early on, the WIP schedule on the 4th, cost to complete on the 7th, bill matching on the 11th, the margin league table on the 15th, close-outs on the 18th, an unbilled cost sweep on the 25th and van stock on the 28th. Quarterly work refreshes labour rates, estimating rates, crew comparisons and production norms, and the year-end cut-off and owners' profitability review come round once a year. The Purchase decision, Operational checklist, Metrics log, Remediation plan, Meeting notes and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
