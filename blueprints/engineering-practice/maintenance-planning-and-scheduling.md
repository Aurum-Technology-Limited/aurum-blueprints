---
id: engineering-practice.maintenance-planning-and-scheduling
name: Maintenance Planning and Scheduling
description: "A maintenance planning system that works: clean work orders, a priority matrix, job plans with parts kitted, PM compliance, backlog in crew-weeks and a weekly schedule agreed with operations."
category: business
version: 1.0.0
tags: [engineering-practice, maintenance-planning-and-scheduling, engineer, manager, work-orders, cmms, preventive-maintenance, backlog]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - operational-checklist
    - vendor
    - purchase-decision
    - onboarding-30-60-90
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Maintenance Planning and Scheduling
          description: "Planning maintenance work well: work orders, job plans, spare parts, preventive schedules, backlog control and the weekly schedule agreed with operations."
          projects:
            - name: Work order lifecycle and status definitions
              description: |-
                ## Purpose
                Most sites have a CMMS full of work orders stuck in statuses nobody can define, so backlog reports mix jobs waiting for parts with jobs nobody has looked at. Writing down eight or so statuses, from requested through approved, planned, ready, scheduled, in progress, complete and closed, with who moves a job between each, gives every later report a meaning.

                ## Milestones
                1. A written list of work order statuses, each with a one-line definition and the role allowed to set it.
                2. Waiting statuses separated by reason: parts, permit, shutdown, engineering or vendor.
                3. The CMMS status list matched to the written list, with unused statuses retired.
                4. Supervisors, planners and stores briefed on the definitions.

                ## Notes
                Resist adding a status for every exception. If a status would hold fewer than five jobs a year, it is a note on the work order, not a status.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page status definition sheet is issued and every open work order in the CMMS sits in one of its statuses."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export open work orders and count them by current status"
                - "Draft a definition and an owner for each status you intend to keep"
                - "Split the waiting status into parts, permit, shutdown and engineering"
                - "Brief supervisors and stores on the new definitions at the next toolbox talk"
            - name: Work request standard and daily screening
              description: |-
                ## Purpose
                Requests that say only 'pump leaking' cost the planner a site visit before anything can be planned, and duplicates fill the backlog. A short standard for what a request must contain, plus a daily screen by the planner and an operations lead, stops poor requests at the door and gets genuine emergencies to the supervisor at once.

                ## Milestones
                1. A request standard covering equipment tag, symptom, location, operating impact and who raised it.
                2. A daily screening slot agreed with the operations lead.
                3. Duplicates, non-maintenance work and incomplete requests returned within one working day.
                4. Fewer than one in ten requests sent back for missing information after two months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new request is screened within one working day and the share returned for missing information is measured monthly."
                cadence: rolling
              tasks:
                - "Write the five fields every work request must contain"
                - "Agree a fifteen-minute daily screening slot with the operations lead"
                - "Screen new work requests with operations and approve, return or merge each @recurring(daily)"
                - "Count returned requests at the end of each month and share the reasons"
            - name: Maintenance priority matrix agreed with operations
              description: |-
                ## Purpose
                When every job is marked urgent, the priority field means nothing and the loudest voice sets the schedule. A matrix that combines consequence (safety, environment, production, cost) with how soon the failure will bite gives four or five priority codes with target start times that operations and maintenance have both signed.

                ## Milestones
                1. Four or five priority codes, each with a consequence description and a target start time.
                2. Safety and environmental jobs placed in the top code regardless of production impact.
                3. The matrix signed by the operations and maintenance leads.
                4. The CMMS priority field restricted to the agreed codes.
                5. A sample of thirty open jobs re-prioritised against the matrix.

                ## Notes
                Track the share of jobs in the top code. If it climbs above about a fifth of new work, the matrix is being gamed and needs a conversation, not a new code.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed priority matrix with target start times is live in the CMMS and thirty open jobs have been re-coded against it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull last quarter's work orders and count them by priority code"
                - "Draft consequence rows and time-to-impact columns for the matrix"
                - "Hold a one-hour session with operations to agree target start times"
                - "Re-code thirty open jobs against the signed matrix"
            - name: CMMS asset register and hierarchy clean-up
              description: |-
                ## Purpose
                Planning depends on knowing which asset a job belongs to, yet many registers hold retired pumps, duplicate tags and motors filed under the wrong system. Cleaning the hierarchy from site to unit, system and equipment, and matching it to the plant's tag list, means history, costs and PMs land on the right asset.

                ## Milestones
                1. A hierarchy standard written: levels, naming and what counts as a maintainable item.
                2. The register compared against the current tag list and P&IDs for one unit.
                3. Duplicates merged, retired equipment set inactive and missing assets added.
                4. Remaining units cleaned to the same standard.
                5. A rule that new assets are only created by the planning team.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every unit's register matches the current tag list, with duplicates merged and retired assets inactive, confirmed by a spot check of fifty tags."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Export the asset register for one unit and the matching tag list"
                - "Write the hierarchy levels and naming rule on one page"
                - "Mark duplicates, retired items and missing tags on the export"
                - "Spot check twenty random assets against the plant tag list @recurring(quarterly)"
            - name: Maintenance backlog baseline in crew-weeks
              description: |-
                ## Purpose
                Counting backlog in work orders hides the truth: three hundred small jobs may be one week's work, while forty large ones may be three months'. Measuring ready and total backlog in estimated hours, divided by weekly available hours per trade, gives a figure in crew-weeks that shows whether the site is falling behind.

                ## Milestones
                1. Open work orders exported with estimated hours by trade.
                2. Jobs without estimates given rough estimates by the planner.
                3. Ready backlog and total backlog worked out in crew-weeks for each trade.
                4. The baseline recorded with the date and the method used.

                ## Notes
                A common rule of thumb puts healthy total backlog at a few crew-weeks per trade. Treat it as a starting point for discussion, not a target to hit at any cost.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ready and total backlog in crew-weeks are recorded for each trade, dated and with the calculation method written down."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export all open work orders with trade and estimated hours"
                - "Add rough hour estimates to jobs that have none"
                - "Divide backlog hours by weekly available hours for each trade"
                - "Record the baseline and the method in the metrics log"
            - name: Planner and scheduler role charter
              description: |-
                ## Purpose
                Planners pulled into chasing breakdowns stop planning, and within months every job is planned on the fly by the person doing it. A short charter that says what the planner owns (future work, job plans, parts, estimates), what the supervisor owns (today's work and the crew), and what neither should do protects the planning hours.

                ## Milestones
                1. A one-page charter listing planner, scheduler and supervisor responsibilities.
                2. A short list of things the planner does not do, such as expediting today's breakdown parts.
                3. The charter agreed by the maintenance manager and supervisors.
                4. A two-week log of planner time showing the share spent on future work.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed role charter exists and a two-week time log shows the planner's share of time on future work."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Log how the planner spends time for one normal week"
                - "Draft the charter with an owns and does not do list for each role"
                - "Agree the charter with the maintenance manager and supervisors"
                - "Repeat the time log two weeks after the charter is issued"
            - name: Craft labour capacity by trade
              description: |-
                ## Purpose
                Schedules fail when they are built against headcount instead of the hours people are actually available. A capacity sheet that starts from rostered hours and subtracts leave, training, meetings, standby and known absences gives each trade's real weekly hours, which is the ceiling the weekly schedule must fit under.

                ## Milestones
                1. Rostered hours listed by trade and shift for a typical week.
                2. Leave, training, meetings and other non-job time subtracted.
                3. Available hours per trade per week recorded in one sheet.
                4. The sheet updated with planned leave and training for the next quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capacity sheet shows available hours per trade per week for the coming quarter, used as the loading limit on the weekly schedule."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the rostered hours per trade from the shift pattern"
                - "Collect planned leave and training dates from supervisors"
                - "Work out available job hours per trade per week"
                - "Refresh the capacity sheet with the next quarter's leave and training @recurring(quarterly)"
            - name: Preventive maintenance programme inventory
              description: |-
                ## Purpose
                Few sites can say how many PMs they have, how many hours they need a year, or which are legal requirements. An inventory of every PM with asset, frequency, trade, estimated hours and its basis (statutory, manufacturer, insurer or site experience) shows the true PM workload and the gaps.

                ## Milestones
                1. Every active PM listed with asset, frequency, trade and estimated hours.
                2. The basis of each PM recorded: statutory, manufacturer, insurer or site practice.
                3. Annual PM hours by trade compared with available capacity.
                4. Critical assets with no PM at all listed for engineering review.

                ## Notes
                Choosing PM frequencies from failure data belongs with reliability engineering. Here the job is to know what exists and what it costs in hours.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory of all active PMs with frequency, hours and basis exists, showing annual PM hours by trade against capacity."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Export every active PM from the CMMS with its frequency and trade"
                - "Add the basis for each PM with help from the maintenance engineer"
                - "Total the annual PM hours by trade and compare with capacity"
                - "Re-check the PM inventory against the asset register @recurring(yearly)"
            - name: Maintenance stores walk-down and catalogue check
              description: |-
                ## Purpose
                Parts that are mislabelled, in the wrong bin or missing from the catalogue cannot be reserved by planners, and technicians learn to keep private stashes. Walking the stores with the storekeeper and checking a sample of catalogue records against the shelves shows how far the system can be trusted for kitting.

                ## Milestones
                1. One hundred catalogue lines chosen at random, weighted to critical equipment.
                2. Each line checked for bin location, quantity and description against the shelf.
                3. An accuracy figure recorded for location and quantity.
                4. A short list of fixes agreed with the stores supervisor.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Location and quantity accuracy for a hundred-line sample are recorded, with a fix list agreed with stores."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask stores for a random hundred-line extract of the catalogue"
                - "Walk the bins with the storekeeper and mark each line right or wrong"
                - "Work out the location and quantity accuracy percentages"
                - "Agree three fixes with the stores supervisor"
            - name: Planning and scheduling KPI baseline
              description: |-
                ## Purpose
                Before changing anything, it helps to know where the site stands on a handful of measures that move together: schedule compliance, PM compliance, share of planned work, emergency work share, backlog in crew-weeks and break-ins per week. Six numbers with written definitions, taken from the same data each month, make improvement visible and arguments shorter.

                ## Milestones
                1. Six KPIs chosen, each with a written formula and data source.
                2. Three months of history worked out where the data allows.
                3. Baseline values recorded with the date.
                4. The definitions agreed with the maintenance manager.

                ## Notes
                Start from the **Metrics log** template. Keep the formulas fixed for a year; changing them every quarter makes trends meaningless.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Six KPIs with written formulas and a dated baseline are recorded and agreed with the maintenance manager."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create a KPI log from the metrics log template"
                - "Write the formula and data source for each of the six KPIs"
                - "Work out the last three months of each KPI from CMMS exports"
                - "Review the definitions with the maintenance manager"
            - name: Weekly schedule meeting with operations
              description: |-
                ## Purpose
                A schedule maintenance builds alone is a wish list; one operations has agreed to release equipment for is a plan. A fixed weekly meeting where the scheduler presents next week's loaded schedule, operations confirms equipment availability and both sign it off is the single habit that most improves schedule compliance.

                ## Milestones
                1. A fixed weekly slot with the scheduler, supervisors and an operations representative.
                2. A standard agenda: last week's compliance, next week's schedule, equipment releases, risks.
                3. The schedule frozen at the end of the meeting, with changes after that logged as break-ins.
                4. Twelve consecutive meetings held with notes.

                ## Notes
                Start from the **Meeting notes** template. Keep it to forty-five minutes and send the frozen schedule within an hour.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly schedule meetings held, each ending with a frozen schedule signed off by operations."
                cadence: rolling
              tasks:
                - "Book a recurring weekly slot with operations and the supervisors"
                - "Write a five-item standing agenda for the meeting"
                - "Agree and freeze next week's schedule with operations @recurring(weekly:thu)"
                - "Send the frozen schedule to crews and stores within an hour of the meeting"
            - name: Daily schedule and break-in log
              description: |-
                ## Purpose
                Supervisors turn the weekly schedule into daily crew assignments, and that is where unplanned work breaks in. Logging every break-in with its priority, who asked and what it displaced shows whether the interruptions were genuine emergencies or poor discipline, and gives the weekly meeting real evidence.

                ## Milestones
                1. A daily schedule format each supervisor fills from the frozen weekly schedule.
                2. A break-in log with job, priority, requester and displaced work.
                3. Break-ins totalled weekly and split by priority code.
                4. Eight weeks of break-in data reviewed with operations.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of daily break-in records exist, totalled weekly by priority and reviewed with operations."
                cadence: rolling
              tasks:
                - "Set up a daily schedule sheet that supervisors fill from the weekly schedule"
                - "Add a break-in log with columns for priority, requester and displaced job"
                - "Record each break-in and the job it displaced before the shift ends @recurring(daily)"
                - "Bring the break-in totals to the weekly schedule meeting"
            - name: Monthly backlog review and purge
              description: |-
                ## Purpose
                Backlogs accumulate dead jobs: requests for equipment since replaced, duplicates, and wishes nobody will fund. A monthly review of the oldest and largest jobs with the maintenance engineer and operations, cancelling or re-scoping what will never be done, keeps the crew-week figure honest.

                ## Milestones
                1. A monthly review slot with the maintenance engineer and an operations lead.
                2. The oldest fifty and largest twenty jobs reviewed each month.
                3. Cancelled jobs recorded with a reason code.
                4. Backlog in crew-weeks tracked against the baseline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly backlog reviews completed, each recording jobs cancelled with reasons and the backlog in crew-weeks."
                cadence: rolling
              tasks:
                - "Create a saved CMMS view of the oldest fifty and largest twenty open jobs"
                - "Review the oldest and largest jobs and cancel or re-scope each @recurring(monthly:12)"
                - "Record the cancellation reason on every closed-out job"
                - "Update backlog in crew-weeks after each review"
            - name: Weekly schedule compliance measurement
              description: |-
                ## Purpose
                Schedule compliance, the share of scheduled hours or jobs actually completed in the week, is the clearest sign of whether planning is working. Measuring it the same way every Monday, and recording the reasons for misses (parts, permits, break-ins, labour, equipment not released), tells you which problem to fix first.

                ## Milestones
                1. A compliance formula written: scheduled jobs completed as scheduled over total scheduled.
                2. Miss reasons coded into five or six categories.
                3. Compliance and the top miss reason reported every Monday.
                4. Twelve weeks of compliance plotted in the metrics log.

                ## Notes
                Do not count break-in work as compliant. A week where the crew was flat out but did none of the schedule is zero compliance, and that is useful information.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weeks of schedule compliance are recorded with miss reasons coded."
                cadence: rolling
              tasks:
                - "Write the compliance formula and the miss reason codes"
                - "Measure last week's schedule compliance and code each miss @recurring(weekly:mon)"
                - "Share the figure and the top miss reason with supervisors"
            - name: PM compliance tracking and overdue escalation
              description: |-
                ## Purpose
                Overdue PMs on safety-critical equipment are a finding in every audit and a cause in many incidents. Tracking PM compliance monthly, with a defined grace window and a named escalation route for anything overdue on critical or statutory equipment, means a missed PM is noticed within weeks rather than at the next audit.

                ## Milestones
                1. A PM compliance formula with a grace window, such as ten percent of the interval.
                2. Safety-critical and statutory PMs flagged in the CMMS.
                3. An escalation route: who is told, by when, and who can approve a deferral.
                4. Six months of compliance recorded with every critical overdue PM closed or formally deferred.

                ## Notes
                A deferral of a safety-critical PM should go through your site's deferral or management of change route with a risk review, not an email.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly PM compliance is reported for six months and no safety-critical PM is overdue without an approved deferral."
                cadence: rolling
              tasks:
                - "Flag safety-critical and statutory PMs in the CMMS"
                - "Write the grace window and escalation route on one page"
                - "Report PM compliance and list every critical overdue PM @recurring(monthly:5)"
                - "Escalate each critical overdue PM to its named approver within two days"
            - name: Work order close-out and history quality checks
              description: |-
                ## Purpose
                Closed work orders that say only 'done' leave reliability engineers and future planners with nothing to work from. Setting a close-out standard (what was found, what was done, parts used, actual hours, failure code) and auditing ten closed jobs a month raises history quality steadily without a big campaign.

                ## Milestones
                1. A close-out standard with five required fields agreed with supervisors.
                2. Supervisors checking close-outs before setting jobs to complete.
                3. Ten closed work orders audited each month against the standard.
                4. The pass rate tracked and shared with crews.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly audits of ten closed work orders each are recorded, with the pass rate against the close-out standard."
                cadence: rolling
              tasks:
                - "Write the five fields every closed work order must contain"
                - "Show crews two good and two poor close-out examples at a toolbox talk"
                - "Audit ten closed work orders against the standard @recurring(monthly:20)"
                - "Return failing close-outs to the supervisor with a note"
            - name: Kitting and staging parts before the schedule week
              description: |-
                ## Purpose
                A technician who waits an hour at the stores counter has lost an hour of wrench time before starting. Kitting parts for each scheduled job, bagged and tagged with the work order number and staged in a marked area by Friday, means Monday's jobs start on time.

                ## Milestones
                1. A marked staging area agreed with stores.
                2. A kitting checklist: parts, consumables, special tools and the work order tag.
                3. Every job on the frozen schedule kitted before the week starts.
                4. Kitting misses counted weekly and their causes recorded.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks, every job on the frozen schedule has a kit staged and tagged before the week starts."
                cadence: rolling
              tasks:
                - "Agree a marked staging area with the stores supervisor"
                - "Build a kitting checklist from the operational checklist template"
                - "Check every scheduled job's kit is staged and tagged @recurring(weekly:fri)"
                - "Record each missing kit item and why it was missing"
            - name: Twelve-week forward look for outages and major jobs
              description: |-
                ## Purpose
                Large jobs and equipment outages need parts, contractors, scaffolding and permits arranged weeks ahead, and a one-week horizon cannot see them coming. A rolling twelve-week view of outage windows, major PMs, statutory inspections and long-lead jobs gives stores, contractors and operations time to prepare.

                ## Milestones
                1. A twelve-week view listing outage windows, major PMs and long-lead jobs.
                2. Each item showing parts status, contractor need and permit lead time.
                3. The view reviewed monthly with operations and stores.
                4. No major job reaching the weekly schedule without parts and contractors arranged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-week forward look is refreshed monthly for six months and every major job reaches the weekly schedule with parts confirmed."
                cadence: rolling
              tasks:
                - "List every outage window and major job planned in the next twelve weeks"
                - "Add parts status, contractor need and permit lead time to each line"
                - "Roll the forward look on a month and review it with operations @recurring(monthly:26)"
            - name: Stores min-max and reorder point review
              description: |-
                ## Purpose
                Min-max settings are often set once and never revisited, so slow movers fill the shelves while fast movers stock out. A quarterly review of stock-outs, lines with no issues in two years and lines whose usage has changed, agreed with stores and the maintenance engineer, keeps the shelf matched to the work.

                ## Milestones
                1. A quarterly report of stock-outs, zero-issue lines and changed usage.
                2. Min-max changes proposed for each flagged line with a reason.
                3. Changes approved by stores and the maintenance engineer.
                4. Stock-outs on planned jobs tracked from quarter to quarter.

                ## Notes
                Never remove a critical spare because it has not moved. Its job is to sit there; check it against the critical spares list first.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly min-max reviews completed, with approved changes recorded and stock-outs on planned jobs trending down."
                cadence: rolling
              tasks:
                - "Ask stores for a report of stock-outs and zero-issue lines"
                - "Review flagged lines and propose min-max changes with stores @recurring(quarterly)"
                - "Check every proposed removal against the critical spares list"
            - name: Statutory and certified maintenance due-date calendar
              description: |-
                ## Purpose
                Lifting equipment examinations, pressure system inspections, fire system tests and emergency generator certificates carry legal or insurer deadlines, and missing one can stop a crane or invalidate cover. A single calendar of these dates, with lead times for booking the competent person or third party, turns them into planned work rather than surprises.

                ## Milestones
                1. Every statutory and certified examination listed with asset, interval and due date.
                2. The competent person or third-party provider recorded for each.
                3. Booking lead times set, so each job enters the forward look in time.
                4. Twelve months with no statutory item past its due date.

                ## Notes
                Requirements differ by country and insurer. Confirm the list with your safety adviser and the regulator's guidance rather than relying on another site's calendar.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete statutory due-date calendar exists and no item has passed its due date for twelve months."
                cadence: cyclic
              tasks:
                - "List every statutory and certified examination with its due date"
                - "Record the provider and booking lead time for each item"
                - "Check the next sixty days of statutory dues and book any unbooked @recurring(monthly:3)"
                - "Confirm the statutory list with the safety adviser @recurring(yearly)"
            - name: Monthly maintenance performance report
              description: |-
                ## Purpose
                Managers need one page each month that says whether maintenance is under control, not a dump of CMMS exports. A short report with the six KPIs against baseline, the backlog trend, critical overdue PMs and one or two decisions needed from management makes planning visible to the people who fund it.

                ## Milestones
                1. A one-page report layout with KPIs, backlog trend, overdue critical PMs and decisions needed.
                2. The report issued in the first week of each month.
                3. Each report naming at most two decisions for management.
                4. Six consecutive reports issued.

                ## Notes
                Start from the **Metrics log** template for the numbers, and keep the commentary to three sentences.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Six consecutive monthly one-page reports are issued, each with KPIs against baseline and named decisions for management."
                cadence: rolling
              tasks:
                - "Lay out a one-page report with KPIs, backlog and decisions needed"
                - "Ask the agent to draft the month's commentary from the KPI log"
                - "Issue the monthly maintenance performance report to management @recurring(monthly:8)"
            - name: Writing a job plan a technician can follow
              description: |-
                ## Purpose
                Good job plans list the steps, trade and hours, parts with stock numbers, special tools, permits and isolations, and the acceptance check at the end, in the order the job is done. Learning to write them at the right level of detail, not so thin it is useless and not so long nobody reads it, is the planner's core skill.

                ## Milestones
                1. The elements of a job plan written as a personal checklist.
                2. Three job plans written for real jobs and reviewed by an experienced technician.
                3. Feedback from the technicians who did the jobs recorded.
                4. A revised job plan format adopted for future plans.

                ## Notes
                Plan for a skilled technician. Spell out what is specific to this job and this asset, not how to use a spanner.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three job plans have been written, used on real jobs and revised from the technicians' feedback."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect two job plans technicians rate as good and one they dislike"
                - "List the elements every job plan on your site should contain"
                - "Write job plans for three upcoming jobs and ask a senior technician to review them"
                - "Ask the technicians afterwards what was missing or unnecessary"
            - name: Estimating labour hours for planned jobs
              description: |-
                ## Purpose
                Schedules loaded from estimates that are always half the real time fail every week, and estimates that are always double waste capacity. Building estimates from the job steps, using history where it exists, and comparing estimates with actuals each quarter, trains the planner's judgement and the schedule's credibility.

                ## Milestones
                1. An estimating method written: by step, by standard job or by history.
                2. Ten estimates made with the method and recorded.
                3. Estimate against actual compared for the ten jobs.
                4. The planner's average error known and shrinking over two quarters.

                ## Notes
                Use actual hours with care. They include waiting, travel and interruptions, which is part of what planning is trying to remove.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Estimate against actual is compared for at least ten jobs a quarter for two quarters, with the average error recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down how you build an hours estimate, step by step"
                - "Estimate ten upcoming jobs using the method and note each figure"
                - "Compare estimates with actual hours for completed planned jobs @recurring(quarterly)"
            - name: Permit and isolation lead times in job plans
              description: |-
                ## Purpose
                Jobs scheduled for Monday morning that need a confined space permit, a gas test and an electrical isolation often start at lunchtime. A planner who knows which permits and isolations a job needs, and how long each takes to arrange on this site, can build those steps into the job plan and the schedule rather than discovering them on the day.

                ## Milestones
                1. The site's permit types and their typical lead times listed.
                2. Isolation points referenced on job plans from the isolation register or drawings.
                3. Permit and isolation needs flagged on every job before it is scheduled.
                4. Permit delays as a miss reason falling over a quarter.

                ## Notes
                The planner prepares and references; the permit issuer and the authorised person decide. Never pre-fill or sign a permit on someone else's behalf.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every scheduled job carries its permit and isolation needs, and permit delays as a compliance miss reason fall over one quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the permit coordinator for the site's permit types and lead times"
                - "Add a permit and isolation section to the job plan format"
                - "Flag the permit needs on every job in next week's schedule"
            - name: Reading P&IDs and equipment drawings as a planner
              description: |-
                ## Purpose
                Planners without a process or design background often struggle to work out isolation boundaries, what else is affected and what access a job needs. Learning to read P&IDs, general arrangement drawings and vendor manuals well enough to plan from them saves site visits and catches missed scope.

                ## Milestones
                1. The site's P&ID legend and symbols studied with an engineer.
                2. Isolation boundaries traced on drawings for three real jobs and checked by an operator.
                3. General arrangement drawings used to plan access and lifting for one job.
                4. A personal list of the drawings and manuals used most often, with locations.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Isolation boundaries for three jobs traced from P&IDs have been checked and confirmed by an experienced operator."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask a process engineer for an hour on the P&ID legend"
                - "Trace the isolation boundary for an upcoming job on its P&ID"
                - "Ask an operator to check your traced boundary on site"
            - name: CMMS reporting and saved queries
              description: |-
                ## Purpose
                Rebuilding the same backlog and compliance exports every week costs a planner hours in spreadsheets. Learning the CMMS reporting tools well enough to build saved queries for backlog by trade, waiting-for-parts jobs, overdue PMs and last week's completed work turns weekly reporting into minutes.

                ## Milestones
                1. The CMMS report and query functions learned from its documentation or a vendor course.
                2. Five saved queries built for the reports used every week.
                3. The queries shared with supervisors and the maintenance engineer.
                4. Weekly reporting time measured before and after.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five saved CMMS queries are in use by the planning team and weekly reporting time has been measured before and after."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Time how long this week's routine reports take to produce"
                - "Work through the CMMS vendor's reporting guide or course"
                - "Build saved queries for backlog, overdue PMs and waiting-for-parts jobs"
                - "Share the saved queries with supervisors"
            - name: Core planning and scheduling principles study
              description: |-
                ## Purpose
                Much of what works in maintenance planning is written down in a small set of well-known handbooks and practitioner guides: plan for future work, schedule to available hours, freeze the week, measure compliance. Studying the principles once, with notes on how each applies to your site, gives a planner the language to argue for changes.

                ## Milestones
                1. One recognised maintenance planning handbook or course chosen.
                2. Notes on each principle and how your site currently handles it.
                3. Three gaps between the principles and site practice listed.
                4. The gaps discussed with the maintenance manager.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes compare each planning principle with site practice and three agreed gaps have been raised with the maintenance manager."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose one maintenance planning handbook or short course"
                - "Write a page of notes per principle with a site example"
                - "List three gaps between the principles and current practice"
                - "Discuss the three gaps at your next one-to-one with the maintenance manager"
            - name: Coaching supervisors on schedule discipline
              description: |-
                ## Purpose
                Supervisors decide each morning whether the schedule is followed, and many were promoted for fixing breakdowns, not for protecting a plan. Regular short coaching sessions, using their own compliance and break-in data, help them hold the schedule and push back on requests that do not meet the priority matrix.

                ## Milestones
                1. Each supervisor's compliance and break-in data shown to them individually.
                2. A short script agreed for pushing back on non-urgent break-ins.
                3. A monthly coaching conversation held with each supervisor.
                4. Schedule compliance improved for most crews over two quarters.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each supervisor has had six monthly coaching conversations using their own data, with crew compliance recorded each time."
                cadence: rolling
              tasks:
                - "Prepare a one-page compliance and break-in summary for each supervisor"
                - "Agree a short pushback script for non-urgent break-in requests"
                - "Hold a coaching conversation with each supervisor using their data @recurring(monthly:17)"
            - name: Standard job library for repeat work
              description: |-
                ## Purpose
                Pump seal changes, filter swaps, valve repacks and motor changes recur across dozens of identical assets, yet many sites plan each one from scratch. A library of standard jobs with steps, hours, parts and permits, linked to the assets they apply to, cuts planning time and makes estimates consistent.

                ## Milestones
                1. The twenty most frequent repeat jobs identified from work order history.
                2. A standard job written for each, reviewed by a senior technician.
                3. Standard jobs linked to the matching assets in the CMMS.
                4. Planning time for repeat jobs compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty standard jobs are live in the CMMS, linked to their assets, with each reviewed by a senior technician."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Rank the last two years of work orders by repeat job type"
                - "Write standard jobs for the five most frequent first"
                - "Link each standard job to the assets it applies to"
                - "Review standard jobs against technician feedback and update them @recurring(yearly)"
            - name: Bills of materials for the fifty most worked-on assets
              description: |-
                ## Purpose
                Without a bill of materials, planners hunt through manuals and old work orders for every part number. Building BOMs in the CMMS for the fifty assets with the most work orders, linking each line to a stores catalogue number, makes parts reservation quick and shows which spares are not stocked.

                ## Milestones
                1. The fifty assets with the most work orders in three years listed.
                2. Spare parts lists collected from vendor manuals and history for each.
                3. BOMs loaded in the CMMS with stores catalogue numbers.
                4. Parts with no catalogue number listed for a stocking decision.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fifty assets have BOMs in the CMMS with every line linked to a catalogue number or flagged for a stocking decision."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List the fifty assets with the most work orders in three years"
                - "Gather vendor spare parts lists for the first ten assets"
                - "Load the first ten BOMs with catalogue numbers in the CMMS"
                - "List parts with no catalogue number for the stocking review"
            - name: Critical spares stocking decisions
              description: |-
                ## Purpose
                Without a spare, a failed gearbox with a twenty-six-week lead time can stop a line for half a year, while a shelf of spares for equipment that never fails ties up cash. Deciding which long-lead items to hold, using criticality, lead time, cost and whether a spare can be shared across sites, puts the decision on paper with the reasons.

                ## Milestones
                1. Long-lead parts for critical equipment listed with lead time and cost.
                2. A simple decision rule agreed with reliability, operations and finance.
                3. Each item decided as hold, share with another site, or accept the risk.
                4. Held spares tagged in stores and protected from min-max removal.

                ## Notes
                Rotating spares such as motors and gearboxes need their own care while stored. Add preservation PMs for each one you decide to hold.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every long-lead part for critical equipment has a recorded hold, share or accept-risk decision with its reasons."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List long-lead parts on critical equipment with lead time and price"
                - "Agree a hold, share or accept-risk rule with reliability and finance"
                - "Record a decision and reason for each item"
                - "Revisit critical spares decisions against new lead times @recurring(yearly)"
            - name: Rewriting vague PM tasks into measurable checks
              description: |-
                ## Purpose
                PM instructions such as 'inspect pump' or 'check motor' produce ticks, not information. Rewriting the instructions on the busiest PMs into measurable checks with limits (bearing temperature below a stated value, vibration reading recorded, belt deflection within a range) makes each PM find problems and gives history worth trending.

                ## Milestones
                1. The thirty PMs with the most hours a year chosen for rewriting.
                2. Each vague instruction replaced by a check with a measurement or a limit.
                3. Limits confirmed with the maintenance engineer or vendor data.
                4. Rewritten PMs loaded in the CMMS with fields for recorded values.

                ## Notes
                Changing PM frequencies is a reliability decision. Keep this project to the content of the task, not how often it runs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Thirty PMs have been rewritten with measurable checks and limits and are live in the CMMS with value fields."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick the thirty PMs that consume the most hours a year"
                - "Mark every instruction that has no measurement or limit"
                - "Rewrite the first ten with limits confirmed by the maintenance engineer"
                - "Load the rewritten PMs with fields for recorded values"
            - name: PM levelling across the year
              description: |-
                ## Purpose
                When most PMs were created on the same day, quarterly and annual PMs all fall due in the same weeks, and those weeks either overload the crew or are quietly skipped. Spreading PM due dates so the weekly PM load per trade stays near steady makes PM compliance achievable without overtime.

                ## Milestones
                1. Weekly PM hours by trade plotted across the next fifty-two weeks.
                2. Peak weeks identified and PMs suitable for moving listed.
                3. Due dates shifted within each PM's allowed window.
                4. No week's PM load above an agreed share of trade capacity.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The fifty-two-week PM load per trade stays within an agreed share of capacity after due dates are levelled."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export PM due dates for the next fifty-two weeks with hours and trade"
                - "Plot weekly PM hours per trade and mark the peaks"
                - "Move eligible PMs out of peak weeks within their allowed windows"
                - "Check the levelled load against trade capacity"
            - name: Reducing the share of emergency work
              description: |-
                ## Purpose
                Sites where more than a third of hours go on emergency work can barely plan at all, because every week starts already broken. Finding the assets and causes behind most emergency jobs, and feeding them to the right fix (a PM, a spare, a bad actor review, an operating practice), brings that share down over a few quarters.

                ## Milestones
                1. Emergency work share by hours measured for the last six months.
                2. The ten assets or job types behind most emergency hours listed.
                3. A named fix and owner agreed for each of the ten.
                4. Emergency work share reported each quarter and falling.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Emergency work share falls for two consecutive quarters after fixes are assigned for the top ten emergency drivers."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Work out the share of craft hours spent on emergency work last six months"
                - "Rank the assets and job types behind the most emergency hours"
                - "Agree a fix and owner for each of the top ten with the maintenance engineer"
                - "Report the emergency share each quarter at the management review"
            - name: Choosing or replacing the CMMS
              description: |-
                ## Purpose
                Any CMMS that cannot show backlog by trade, link BOMs or run on a phone in the field holds planning back, but a new system costs a year of effort and some data loss. Comparing two or three options against written requirements from planners, technicians, stores and finance makes the choice on evidence rather than a sales demo.

                ## Milestones
                1. Written requirements from planners, technicians, stores, finance and IT.
                2. Two or three systems shortlisted and demonstrated on your own scenarios.
                3. Each option scored against the requirements, with total cost over five years.
                4. A recommendation recorded and approved or rejected by management.

                ## Notes
                Start from the **Purchase decision** template. Make vendors demonstrate your weekly schedule and a work order close-out on a phone, not their standard script.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of at least two CMMS options with five-year cost is recorded with management's decision."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Open a purchase decision record for the CMMS choice"
                - "Collect written requirements from each user group"
                - "Write three demonstration scenarios taken from your own site"
                - "Score each shortlisted system and total its five-year cost"
            - name: Mobile work order capture for technicians
              description: |-
                ## Purpose
                Paper work orders written up at the end of a shift lose detail, and close-outs arrive days late. Trialling mobile capture on tablets or phones with one crew, including photos, readings and parts used, shows whether it improves close-out quality enough to roll out, and what it needs in connectivity and safety approval.

                ## Milestones
                1. Device, connectivity and hazardous area restrictions confirmed with IT and safety.
                2. One crew using mobile work orders for six weeks.
                3. Close-out quality and timeliness compared with a paper crew.
                4. A roll-out or stop decision recorded.

                ## Notes
                Devices taken into classified hazardous areas must be certified for that zone. Check with your electrical or safety authority before any trial.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A six-week mobile trial with one crew is compared against a paper crew on close-out quality, and a roll-out decision is recorded."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Ask safety which areas need certified devices"
                - "Agree the trial crew and devices with IT"
                - "Compare close-out quality between the trial and a paper crew after six weeks"
                - "Write up the roll-out or stop decision"
            - name: Specialist maintenance service agreements
              description: |-
                ## Purpose
                Cranes, fire systems, HVAC, standby generators and analysers are often maintained by specialist vendors whose visits arrive when they suit the vendor. Agreements that set visit schedules, response times, reporting format and how their work appears in your CMMS bring that work inside the planning system.

                ## Milestones
                1. Every specialist service vendor listed with scope, renewal date and visit frequency.
                2. Visit schedules entered as work orders in the CMMS.
                3. Response times and report format written into each agreement at renewal.
                4. Vendor visit completion tracked alongside internal PM compliance.

                ## Notes
                Start from the **Vendor** template for each provider.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every specialist service vendor has a vendor record, scheduled visits in the CMMS and response terms in its agreement."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Create a vendor record for each specialist service provider"
                - "Enter each vendor's planned visits as CMMS work orders"
                - "Review agreements due for renewal and add response terms @recurring(yearly)"
            - name: Single-unit planned outage window
              description: |-
                ## Purpose
                Short outages on one unit, a compressor, a boiler or a line, sit between routine work and a full turnaround, and are often planned in a rush when operations offers a window. Planning one properly, with a scope list, job plans, kits, a sequence by shift and a firm scope cut-off, sets the pattern for every outage after it.

                ## Milestones
                1. The outage scope listed with job plans, hours and parts for every job.
                2. A scope cut-off date agreed with operations and enforced.
                3. A shift-by-shift sequence with isolation, permits and restart checks.
                4. A short review held after the outage, recording overruns and added work.

                ## Notes
                Full plant turnarounds need their own organisation and are covered elsewhere. This is the one-to-five-day window a planner runs.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The outage is delivered from a frozen scope with job plans and kits for every job, and a post-outage review is recorded."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Agree the outage window and the scope cut-off date with operations"
                - "List every outage job with a job plan, hours and parts"
                - "Build a shift-by-shift sequence including isolations and restart"
                - "Hold a thirty-minute review after restart and record the lessons"
            - name: Hurricane season maintenance readiness
              description: |-
                ## Purpose
                On Caribbean and Gulf sites, the weeks before the hurricane season are when standby generators, fuel systems, drainage, roof sheeting, tie-downs and flood barriers must be checked, yet they compete with normal work. A seasonal readiness work package scheduled each year before the season starts makes sure it is done in time and recorded.

                ## Milestones
                1. A pre-season work package of PMs and inspections for storm-exposed equipment.
                2. The package scheduled to finish before the season begins.
                3. Critical storm spares and fuel stocks checked.
                4. Post-storm inspection work orders prepared and ready to release.

                ## Notes
                Follow your site's emergency response plan and national disaster office guidance. This package supports them; it does not replace them.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The pre-season readiness package is complete and recorded before the hurricane season starts, with post-storm work orders prepared."
                cadence: cyclic
              tasks:
                - "List storm-exposed equipment and the checks each needs"
                - "Schedule the pre-season readiness package to finish before the season @recurring(yearly)"
                - "Prepare post-storm inspection work orders ready to release"
            - name: Annual maintenance plan and budget submission
              description: |-
                ## Purpose
                Maintenance budgets built by adding a percentage to last year rarely survive the first big failure. Building the annual plan from the PM workload, expected corrective work, known outages, statutory items and contracts, priced by labour, materials and services, gives management a budget they can trace back to work.

                ## Milestones
                1. Annual hours and cost for PMs, corrective work, outages and contracts estimated.
                2. Major one-off jobs listed with cost and timing.
                3. The plan and budget reviewed with operations and finance.
                4. The approved budget loaded so monthly variance can be tracked.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An annual maintenance plan with costs traced to PMs, corrective work, outages and contracts is submitted and the approved budget is loaded for tracking."
                cadence: cyclic
              tasks:
                - "Ask finance for the budget calendar and submission format"
                - "Total next year's PM, corrective, outage and contract costs"
                - "Start the annual maintenance plan and budget build @recurring(yearly)"
                - "Review the draft budget with operations before submission"
            - name: CMMS migration cut-over weekend
              description: |-
                ## Purpose
                Moving to a new CMMS or a major upgrade puts open work orders, PM schedules and history at risk over a single weekend. A cut-over plan with data checks, a freeze on new work orders, a paper fallback and a list of reports to test on Monday morning keeps maintenance running through the switch.

                ## Milestones
                1. A cut-over checklist with data loads, checks, owners and timings.
                2. Open work orders, PM due dates and BOMs reconciled between old and new systems.
                3. A paper fallback process ready for the cut-over weekend.
                4. Key reports tested on the first working day and issues logged.

                ## Notes
                Start from the **Operational checklist** template. Reconcile counts of open work orders and PMs before switching off the old system.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Cut-over completes with open work order and PM counts reconciled between systems and key reports working on the first working day."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Build the cut-over checklist from the operational checklist template"
                - "Agree the work order freeze window with operations"
                - "Reconcile open work order and PM counts between the two systems"
                - "Test the weekly schedule and backlog reports on the first working day"
            - name: Planning and scheduling audit by a peer site
              description: |-
                ## Purpose
                Teams that only measure themselves drift towards comfortable numbers. Inviting a planner or maintenance manager from a sister site or a peer company to audit the work process for two days, against an agreed checklist, gives an outside view and a shortlist of improvements with some weight behind it.

                ## Milestones
                1. An audit checklist covering requests, priorities, planning, scheduling, kitting and close-out.
                2. A peer auditor and dates agreed.
                3. Evidence prepared: KPIs, sample job plans, schedules and meeting notes.
                4. Findings received and an action list agreed with the maintenance manager.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-day peer audit is held against a written checklist and its findings are turned into an owned action list."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Draft an audit checklist covering each step of the work process"
                - "Ask a sister site or peer company for an auditor and dates"
                - "Gather sample job plans, schedules and KPI history as evidence"
                - "Turn the findings into an action list with owners"
            - name: First ninety days as a maintenance planner
              description: |-
                ## Purpose
                Engineers and technicians moving into planning often find the job is less about engineering and more about information, people and timing. A ninety-day plan for learning the plant, the CMMS, the stores, the crews and the weekly rhythm, with early wins such as a cleaned backlog view, sets up the role well.

                ## Milestones
                1. Thirty days: plant walked with operators, CMMS basics learned, stores toured, crews met.
                2. Sixty days: job plans written for real jobs and the weekly meeting attended.
                3. Ninety days: a share of next week's schedule planned unaided.
                4. A review with the maintenance manager at each of the three points.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Thirty, sixty and ninety-day reviews are held with the maintenance manager and the planner is planning part of the weekly schedule unaided."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Create a 30/60/90 plan from the onboarding template"
                - "Book a plant walk with a senior operator in the first week"
                - "Sit in on the weekly schedule meeting before planning any jobs"
                - "Book the thirty, sixty and ninety-day reviews with your manager"
            - name: New maintenance manager's first quarter
              description: |-
                ## Purpose
                Inheriting a site, a maintenance manager needs to know quickly whether the planning system is working or only appears to. A first-quarter plan to read the KPIs, sit in the weekly schedule meeting, walk the backlog, talk to planners and supervisors one to one, and agree three priorities with the operations manager gives a fair picture before changing anything.

                ## Milestones
                1. KPI history, backlog and PM compliance read in the first two weeks.
                2. One-to-ones held with each planner, supervisor and the stores lead.
                3. The weekly schedule meeting observed for four weeks.
                4. Three priorities agreed with the operations manager and written down.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three written priorities for the planning system are agreed with the operations manager by the end of the first quarter."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask the planner for twelve months of KPI and backlog history"
                - "Book one-to-ones with each planner, supervisor and the stores lead"
                - "Observe four weekly schedule meetings before changing the format"
                - "Write three priorities and agree them with the operations manager"
            - name: One-planner site planning system
              description: |-
                ## Purpose
                Small plants, utilities and hotels often have one planner, or a supervisor who plans part time, covering every trade. A cut-down system with a simple priority list, a weekly schedule on one page, kitting only for jobs over a set size and a short Monday review lets one person plan well without a department's overheads.

                ## Milestones
                1. A size threshold set for jobs that get full job plans and kits.
                2. A one-page weekly schedule format in use.
                3. A thirty-minute Monday review with operations held weekly.
                4. Backlog and PM compliance tracked monthly with two numbers only.

                ## Notes
                Cover for leave matters most on a one-planner site. Keep the schedule and job plans where a supervisor can pick them up.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-person planning system with a size threshold, one-page schedule and weekly review has run for eight consecutive weeks."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Set the job size above which you write a full job plan"
                - "Draft a one-page weekly schedule format"
                - "Write a short cover note so a supervisor can run the schedule during your leave"
            - name: Overseeing a contractor's maintenance planning
              description: |-
                ## Purpose
                Where maintenance is outsourced, the owner still carries the risk of overdue PMs and poor work, but sees only the contractor's reports. Setting planning standards in the contract, sitting in the contractor's weekly schedule meeting and checking their KPIs against CMMS data gives the owner's engineer real oversight without doing the contractor's job.

                ## Milestones
                1. Planning and reporting standards written into the contract scope or a side letter.
                2. The owner's engineer attending the contractor's weekly schedule meeting.
                3. Contractor-reported KPIs checked against CMMS data each quarter.
                4. Disagreements and corrective actions recorded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Contractor KPIs are reconciled against CMMS data for two quarters, with any differences and corrective actions recorded."
                cadence: rolling
              tasks:
                - "Read the contract scope for planning and reporting obligations"
                - "Ask to attend the contractor's weekly schedule meeting"
                - "Check three contractor KPIs against your own CMMS export"
                - "Raise differences at the contract review meeting"
            - name: Night and weekend maintenance cover plan
              description: |-
                ## Purpose
                Out of hours, a thin crew or an on-call technician handles breakdowns with no planner and often no stores attendant. A cover plan with who is on call, how to reach stores out of hours, a short list of pre-planned jobs for quiet shifts and a handover note format makes the night shift productive and the morning handover clear.

                ## Milestones
                1. An on-call roster and out-of-hours stores access procedure written.
                2. A shelf of kitted, low-risk jobs for quiet night and weekend shifts.
                3. A handover note format used at every shift change.
                4. Out-of-hours callouts and their causes reviewed monthly.

                ## Notes
                Lone working and out-of-hours permits need the site's safety rules applied in full. Check them before scheduling any night job.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An out-of-hours cover plan is issued with a stores access procedure, a set of kitted quiet-shift jobs and a handover note in use."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down how a night technician gets parts from stores today"
                - "Pick five low-risk jobs and kit them for quiet shifts"
                - "Agree a handover note format with the shift supervisors"
            - name: Wrench time study by work sampling
              description: |-
                ## Purpose
                Studies at many sites have found technicians spend well under half their shift on hands-on work, with the rest lost to waiting for parts, permits, travel and instructions. A work sampling study, with random observations over two weeks and the crews told in advance why, shows where the time goes on your site and which delays planning can remove.

                ## Milestones
                1. The study purpose and method explained to crews and their representatives in advance.
                2. Delay categories defined: waiting for parts, permits, instructions, travel, tools and others.
                3. Several hundred random observations recorded over two weeks.
                4. Results shared with the crews before management, with the top three delays named.

                ## Notes
                Present this as a study of the system, not of individuals. Never record names against observations.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-week work sampling study with several hundred observations is completed and the top three delay causes are shared with crews."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Brief the crews and their representatives on the study and its purpose"
                - "Define the delay categories and a random observation schedule"
                - "Record observations without names for two weeks"
                - "Ask the agent to summarise the observation tally by category"
            - name: Schedule loading and break-in allowance analysis
              description: |-
                ## Purpose
                Schedulers argue over whether to load the week to all available hours or hold some back for break-ins. Analysing six months of loading, compliance and break-in hours by trade shows the allowance your site really needs, so each trade can be loaded to a figure based on evidence rather than habit.

                ## Milestones
                1. Six months of scheduled hours, completed hours and break-in hours by trade collected.
                2. Compliance plotted against loading level for each trade.
                3. A break-in allowance set per trade from the data.
                4. The new loading rule used for a quarter and compliance compared.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A break-in allowance per trade is set from six months of data and compliance under the new rule is compared over one quarter."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Extract six months of scheduled, completed and break-in hours by trade"
                - "Plot compliance against loading level for each trade"
                - "Set a break-in allowance per trade and brief the scheduler"
            - name: Integrated activity planning across maintenance, operations and projects
              description: |-
                ## Purpose
                On complex sites, especially offshore and in gas plants, maintenance, projects, inspections, well work and operations all compete for the same beds, cranes, permits and equipment windows. An integrated activity plan with a single horizon, clash checks and one meeting to resolve conflicts replaces separate schedules that collide on the day.

                ## Milestones
                1. All activity owners agreed to feed one plan: maintenance, projects, inspection, operations.
                2. Shared constraints listed: beds, cranes, permits, simultaneous operations limits.
                3. A weekly or fortnightly clash review with a single decision owner.
                4. Clashes found in the plan rather than on site tracked over two quarters.

                ## Notes
                Simultaneous operations limits come from the site's own SIMOPS rules. The plan applies them; it does not set them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One integrated plan is fed by every activity owner and a regular clash review has run for two quarters with clashes recorded."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List every group that schedules work on the site and its planning tool"
                - "Map the shared constraints such as beds, cranes and SIMOPS limits"
                - "Propose a single clash review with one decision owner"
                - "Record clashes found in the plan versus on site each month"
---

# Maintenance Planning and Scheduling

Maintenance Planning and Scheduling is for planners, schedulers, maintenance engineers and the managers who need the craft hours on a site spent on the right jobs, with the parts, permits and access ready before anyone picks up a spanner. It starts with foundations (the work order lifecycle, request screening, a priority matrix, a clean asset register, backlog and capacity baselines, the PM inventory and the KPIs), moves through the weekly and daily machinery of scheduling, backlog control, PM compliance, kitting and close-out, then the planner's core skills, improvements to job libraries, bills of materials, spares and the CMMS, dated events such as outages, hurricane season and the annual budget, situations for new planners, new managers, small sites and contractor-run sites, and finally specialist work on wrench time, schedule loading and integrated activity planning.

The rhythm is daily for request screening and break-in logging, weekly for the schedule meeting, compliance measurement and kit checks, monthly for backlog review, PM compliance, close-out audits, the forward look and the performance report, quarterly for stores and capacity reviews, and yearly for the PM inventory, critical spares, contracts, hurricane readiness and the budget. The Metrics log, Meeting notes, Operational checklist, Vendor, Purchase decision and Onboarding 30/60/90 templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
