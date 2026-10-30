---
id: data-analytics.operations-analytics
name: Operations Analytics
description: "Process maps, event logs and baselines for arrivals, handling time, flow and service levels, then a staffing and backlog rhythm, queueing skills, capacity decisions, peaks and analysis for contact centres, warehouses and clinics."
category: business
version: 1.0.0
tags: [data-analytics, operations-analytics, knowledge-worker, manager, capacity-planning, queueing, service-levels, workforce-management]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - remediation-plan
    - vendor
    - skills-matrix
    - operational-checklist
    - onboarding-30-60-90
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Operations Analytics
          description: "Using data to improve operations such as staffing, throughput, wait times and service levels, with models of how work actually flows."
          projects:
            - name: Operations decisions the analysis must serve
              description: |-
                ## Purpose
                Operations data gets collected because systems produce it, not because anyone asked a question of it, so analysts end up reporting volumes nobody acts on. Listing the real decisions an operation makes, such as how many people to roster on Monday morning, which queue to clear first or whether to promise a two-day turnaround, tells you which measures matter and which can wait. Ten decisions written down, each with its owner and frequency, is enough to start.

                ## Milestones
                1. Ten recurring operational decisions listed, each with the person who makes it and how often.
                2. Each decision paired with the one or two measures that would change it.
                3. The three decisions with the largest cost of getting wrong marked as the first focus.
                4. The list agreed with the operations manager who owns the area.

                ## Notes
                Include decisions made by gut feel today. They are often the ones where a simple model pays back fastest.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked list of ten operational decisions, each with owner, frequency and the measures that drive it, agreed with the operations manager."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the decisions the operation makes each day, week and quarter"
                - "Ask the operations manager which three decisions cost most when wrong"
                - "Pair each decision with the measures that would change it"
                - "Share the ranked decision list and record the agreed first focus"
            - name: Walk-through map of how work really flows
              description: |-
                ## Purpose
                Process diagrams in the procedures folder usually show how work was meant to flow, not the loops, waits and side queues it actually takes. Following five real work items from arrival to completion, and drawing every handoff, queue and rework loop you see, gives you a map your data can be checked against. It also tells you which system records each step and which steps leave no trace at all.

                ## Milestones
                1. Five real work items traced from arrival to completion with the people who handled them.
                2. A swimlane map showing every step, handoff, queue and rework loop observed.
                3. Each step labelled with the system that records it, or marked as unrecorded.
                4. The map reviewed by two front-line staff and corrected where they disagree.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A swimlane map built from five traced work items, with every step tagged to its recording system and checked by two front-line staff."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick five recent work items of different types to trace end to end"
                - "Sit with the team for half a day and note each handoff and wait"
                - "Draw the swimlane map with queues and rework loops marked"
                - "Label each step with the system that records it or mark it unrecorded"
                - "Ask two front-line staff to correct the draft map"
            - name: Work item event log extract
              description: |-
                ## Purpose
                Almost every operations question, from wait times to bottlenecks, needs the same raw material: one row per work item per status change, with a timestamp. Most ticketing, case management, warehouse and booking systems hold this history, but it is often buried in audit tables that standard reports ignore. Building one clean, repeatable extract means every later analysis starts from the same evidence.

                ## Milestones
                1. The table or export holding status history found in the operational system.
                2. An extract with item id, work type, status, timestamp and handler covering at least six months.
                3. Row counts reconciled against the system's own daily totals within an agreed tolerance.
                4. Known gaps, such as items created by email or bulk import, documented.
                5. The extract scripted or scheduled so it can be rerun without manual steps.

                ## Notes
                Strip or pseudonymise customer names and contact details before the log leaves the source system. Operations analysis rarely needs them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rerunnable six-month event log extract whose daily counts reconcile with the source system, with its known gaps written down."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the system administrator where status history is stored"
                - "Pull six months of status changes with item id, type and timestamps"
                - "Reconcile daily item counts against the system's own report"
                - "Write down the known gaps in what the log captures"
                - "Check the extract still matches the system's totals @recurring(monthly:8)"
            - name: Arrival pattern profile by hour and weekday
              description: |-
                ## Purpose
                Staffing to a daily total hides the fact that most operations receive work in waves: a Monday morning surge, a lunchtime dip, a month-end spike. Profiling arrivals by interval and weekday shows when demand actually lands, which is the input every roster and service level calculation needs. Without it, teams are often fully staffed when the queue is empty and short when it peaks.

                ## Milestones
                1. Arrivals counted in 15 or 30 minute intervals for at least eight typical weeks.
                2. An average profile by weekday and interval, with the spread around it.
                3. Month-end, holiday and campaign effects separated from the normal pattern.
                4. The profile shared with whoever builds the roster.

                ## Notes
                Use the time work arrived, not the time someone started it. Start times describe your staffing, not your demand.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An interval-by-weekday arrival profile built from at least eight weeks, with unusual weeks separated, is in the hands of the roster planner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count arrivals by 30 minute interval from the event log"
                - "Build an average weekday and interval profile with its range"
                - "Flag holiday, month-end and campaign weeks as separate patterns"
                - "Refresh the arrival profile with the latest quarter of data @recurring(quarterly)"
            - name: Handling time distribution by work type
              description: |-
                ## Purpose
                Average handling time is the most quoted operations number and one of the most misleading, because a few very long items pull it up and hide that most work is quick. Looking at the full distribution for each work type, including the median, the 90th percentile and the share of outliers, shows which work is genuinely complex and which is held up by waiting recorded as working. Every capacity calculation downstream depends on getting this right.

                ## Milestones
                1. Handling time measured as active work time, separated from waiting time where the data allows.
                2. Median, 90th percentile and mean recorded for each main work type.
                3. Outliers above an agreed limit reviewed against a sample of the actual items.
                4. A short note on which work types vary most and why.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Median, mean and 90th percentile handling times are recorded for every main work type, with the longest outliers explained."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Separate active handling time from paused and waiting time in the log"
                - "Calculate median, mean and 90th percentile per work type"
                - "Pull ten of the longest items and ask the team what happened"
                - "Write a note on the most variable work types and the reasons"
            - name: Throughput, work in progress and cycle time baseline
              description: |-
                ## Purpose
                Three numbers describe any flow of work: how much finishes per week, how much is in progress at once, and how long an item takes from start to finish. Little's Law ties them together, so if your measured figures do not roughly agree, the data or the definitions are wrong. Establishing all three for a quarter gives a baseline that every improvement can be judged against.

                ## Milestones
                1. Weekly throughput, average work in progress and cycle time calculated for the last 13 weeks.
                2. A Little's Law check showing whether work in progress divided by throughput matches measured cycle time.
                3. Any large mismatch traced to a cause such as stuck items or inconsistent start events.
                4. The baseline recorded with its date range and data source.

                ## Notes
                Start from the **Metrics log** template to keep the weekly figures in one place.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A 13-week baseline of throughput, work in progress and cycle time is logged, with a Little's Law cross-check and any mismatch explained."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate weekly throughput for the last 13 weeks"
                - "Count items in progress at the end of each week"
                - "Compare work in progress divided by throughput with measured cycle time"
                - "Investigate any week where the two disagree by more than a fifth"
            - name: Service level and wait time baseline
              description: |-
                ## Purpose
                Customers and internal clients experience an operation through waiting: how long until someone answers, starts their case or ships their order. Measuring wait times against what has actually been promised, whether a contract SLA or an informal expectation, shows where the operation already keeps its word and where it quietly does not. This baseline is what any service level conversation with the business should start from.

                ## Milestones
                1. Every service promise listed, written or informal, with its target and measurement window.
                2. Wait time measured from arrival to first action for each queue, as a distribution.
                3. The share of items meeting each promise calculated for the last three months.
                4. Queues that miss their promise by the widest margin identified.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every service promise is listed with three months of measured attainment, and the queues furthest from target are named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect every SLA and service promise the operation has made"
                - "Measure wait from arrival to first action for each queue"
                - "Calculate the share of items meeting each promise by month"
                - "Rank queues by how far they fall short of their target"
            - name: Available capacity and shrinkage inventory
              description: |-
                ## Purpose
                A team of 20 people on the payroll might give only 13 people's worth of time to the queue once leave, sickness, training, meetings, coaching and system downtime are taken out. Counting that loss, known as shrinkage, category by category turns headcount into real productive hours. Much understaffing that looks like a demand problem turns out to be a shrinkage figure nobody had measured.

                ## Milestones
                1. Contracted hours for the team totalled for a typical month.
                2. Planned shrinkage (leave, training, meetings) and unplanned shrinkage (sickness, outages) measured separately.
                3. Productive hours available per week calculated by role or skill.
                4. The shrinkage figure used in rostering compared with the measured one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Measured planned and unplanned shrinkage by category is written down beside the rostering assumption, with productive hours per week by role."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Total the team's contracted hours for last month"
                - "Pull leave, sickness and training hours from the HR or rostering system"
                - "Estimate time lost to meetings, coaching and system downtime"
                - "Compare the measured shrinkage with the figure used for rostering"
            - name: Status code and timestamp audit
              description: |-
                ## Purpose
                Operational systems often record a case as started when it was merely opened, or closed when it was reassigned, and paused states may not stop the clock at all. Auditing what each status and timestamp really means, by watching a handful of items and comparing what happened with what was logged, prevents a year of analysis built on a misunderstanding. It takes a day and saves the awkward retraction later.

                ## Milestones
                1. Every status value in the system listed with how often it is used.
                2. Ten items followed live and their logged timestamps compared with what actually happened.
                3. A plain-language meaning written for each status and timestamp used in analysis.
                4. Statuses that are misused or ambiguous flagged to the system owner.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A status glossary covering every status used in analysis, tested against ten live items, has been sent to the system owner."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every status value and count how often each is used"
                - "Follow ten items live and note when each status was actually set"
                - "Write a one-line meaning for each status used in analysis"
                - "Send the list of misused statuses to the system owner"
            - name: Weekly staffing against demand check
              description: |-
                ## Purpose
                Rosters are usually set a week or more ahead, and a lot changes in that time: a campaign goes out, a supplier is late, three people call in sick. A short check each Monday comparing planned staff hours with expected workload, interval by interval, catches the gaps while there is still time to move breaks, offer overtime or borrow people from another team.

                ## Milestones
                1. A weekly comparison of rostered hours against required hours by day and interval.
                2. A threshold for the size of gap that triggers action, agreed with the team leader.
                3. Gaps above the threshold acted on and the action noted.
                4. Eight consecutive weekly checks completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive Monday checks are recorded, each listing gaps above the agreed threshold and the action taken."
                cadence: rolling
              tasks:
                - "Agree with the team leader what size of staffing gap needs action"
                - "Compare rostered and required hours for the week ahead @recurring(weekly:mon)"
                - "Note each action taken to close a gap and whether it worked"
            - name: Intraday queue and backlog watch
              description: |-
                ## Purpose
                In a live operation the plan is out of date by mid-morning, and the queue tells you before any report does. A brief check at set times each day of queue length, the oldest item waiting and staff available lets a team leader move people before service levels slip, rather than explaining the miss afterwards.

                ## Milestones
                1. Three fixed check times chosen to match the day's arrival peaks.
                2. A one-screen view of queue length, oldest waiting item and staff logged in.
                3. Trigger points written down for moving staff or pausing non-urgent work.
                4. A week of checks reviewed to see whether the triggers were set right.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written trigger points exist for moving staff, and a month of daily checks shows each trigger was acted on when it fired."
                cadence: rolling
              tasks:
                - "Pick three daily check times that match the arrival peaks"
                - "Write the trigger points for moving staff between queues"
                - "Check queue length, oldest item and staff available @recurring(daily)"
                - "Review a week of intraday checks and adjust the triggers"
            - name: Backlog ageing review
              description: |-
                ## Purpose
                Backlogs hide their worst cases: the total can look stable while a growing pile of items sits untouched for weeks because they are awkward, unclear or waiting on someone outside the team. Reviewing the backlog by age band every week, and naming an owner for every item past the limit, stops old work rotting while new work is cleared first.

                ## Milestones
                1. The backlog split into age bands such as under 2 days, 2 to 5, 5 to 10 and over 10.
                2. An age limit agreed beyond which an item needs a named owner.
                3. Every item past the limit listed with its owner and blocker.
                4. The count of items past the limit falling over six weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weekly age-band reviews are recorded, every item past the limit has a named owner, and the over-limit count has fallen."
                cadence: rolling
              tasks:
                - "Agree the age limit that makes an item need a named owner"
                - "Split the backlog into age bands and list items past the limit @recurring(weekly:thu)"
                - "Record the blocker for each old item and who is chasing it"
            - name: Monthly operations performance pack
              description: |-
                ## Purpose
                Operations leaders need one consistent view each month of volumes, throughput, cycle time, service level, backlog and productive hours, set against the same months last year. Producing it from the same queries each time, with a few lines explaining what moved and why, builds trust that the figures are comparable and shifts the conversation from what happened to what to do.

                ## Milestones
                1. A fixed set of eight to twelve operations measures chosen with the operations manager.
                2. The pack produced from saved queries rather than manual copying.
                3. A short commentary explaining the three biggest movements each month.
                4. Twelve monthly packs issued on the same working day.

                ## Notes
                Keep the pack to measures the operations team can influence. Revenue and customer satisfaction belong in the wider business pack.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Twelve monthly packs are issued from saved queries on the same working day, each with commentary on the three largest movements."
                cadence: rolling
              tasks:
                - "Agree the measures in the pack with the operations manager"
                - "Save the queries behind each measure so the pack can be rebuilt"
                - "Produce the pack and write three lines on what moved @recurring(monthly:4)"
                - "Ask the agent to draft the commentary from the month's figures for you to check"
            - name: Service level breach root cause review
              description: |-
                ## Purpose
                Each missed service level has a cause, and the causes repeat: a staffing gap on Mondays, one work type that always needs a second team, a system outage nobody logged. Reviewing every breach month by month, and sorting causes into a small set of categories, shows which handful of fixes would prevent most misses. It replaces the monthly ritual of explaining misses one at a time.

                ## Milestones
                1. A breach log with date, queue, size of the miss and cause category.
                2. No more than eight cause categories, agreed with team leaders.
                3. The top three causes by breached items identified each month.
                4. One fix per month assigned to an owner and tracked to completion.

                ## Notes
                Start from the **Remediation plan** template for the fixes.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of breaches are logged by cause category, with one owned fix per month and its effect on that category recorded."
                cadence: rolling
              tasks:
                - "Set up a breach log with queue, size of miss and cause category"
                - "Agree up to eight cause categories with the team leaders"
                - "Sort the month's breaches by cause and pick one fix to own @recurring(monthly:12)"
                - "Check whether last month's fix reduced breaches in its category"
            - name: Quarterly capacity plan refresh
              description: |-
                ## Purpose
                Headcount decisions take months to act on, because hiring, training and notice periods all add delay. Refreshing a capacity plan each quarter, from expected volumes, handling times and shrinkage through to required and available staff for the next two quarters, shows a shortfall early enough to recruit, train or reshape demand instead of firefighting.

                ## Milestones
                1. Expected volumes per work type for the next two quarters taken from the agreed demand forecast.
                2. Required productive hours calculated from volumes and handling times.
                3. Available hours projected from headcount, planned leavers, joiners and shrinkage.
                4. The monthly gap presented to the operations manager with options to close it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four consecutive quarterly plans show required against available hours by month for two quarters ahead, each with options for the gap."
                cadence: cyclic
              tasks:
                - "Collect the agreed volume forecast for the next two quarters"
                - "Convert volumes into required hours using current handling times"
                - "Project available hours including known leavers and new starters"
                - "Present the capacity gap and options to close it @recurring(quarterly)"
            - name: Schedule adherence and shrinkage tracking
              description: |-
                ## Purpose
                A roster only protects service levels if people are where it says they will be, and shrinkage assumptions drift as meeting habits and leave patterns change. Tracking adherence and actual shrinkage every month, by team rather than by individual, keeps the planning assumptions honest and shows when a team has been quietly loaded with work that is not on the queue.

                ## Milestones
                1. Adherence measured as time in the scheduled activity against time planned, by team.
                2. Actual shrinkage by category compared with the planning assumption each month.
                3. Any category drifting by more than a few points raised with the team leader.
                4. The rostering shrinkage figure updated when measured shrinkage differs for three months running.

                ## Notes
                Report adherence at team level. Used to rank individuals, it tends to make people game the system and hides the real cause, which is usually the schedule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of team-level adherence and shrinkage are tracked against plan, and the rostering figure has been updated if it drifted."
                cadence: rolling
              tasks:
                - "Pull scheduled versus actual activity time by team from the rostering tool"
                - "Compare actual shrinkage with the planning figure by category @recurring(monthly:20)"
                - "Raise any shrinkage category that has drifted with its team leader"
            - name: Failure demand and rework log
              description: |-
                ## Purpose
                A large share of the work in many service operations is caused by the operation itself: customers chasing progress, cases reopened, items sent back for missing information. Logging this failure demand separately from value demand, and counting rework loops, shows how much capacity could be freed without anyone working faster. It is often the cheapest capacity an operation has.

                ## Milestones
                1. Contact or case reasons classified as value demand or failure demand.
                2. A sample of 100 items coded by hand to check the classification.
                3. Failure demand and rework counted monthly as a share of total work.
                4. The two largest sources of failure demand each traced to a cause upstream.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Failure demand and rework are reported monthly as a share of total work, with the two largest sources traced to their upstream cause."
                cadence: rolling
              tasks:
                - "Classify each contact or case reason as value or failure demand"
                - "Hand-code a sample of 100 recent items to test the classification"
                - "Count failure demand and reopened items as a share of the month's work @recurring(monthly:16)"
                - "Trace the biggest failure demand source to where it starts"
            - name: Control charts for weekly operations measures
              description: |-
                ## Purpose
                Weekly figures go up and down, and reacting to every movement wastes effort and blames people for noise. A control chart for cycle time, service level and throughput, with limits calculated from the operation's own history, separates ordinary variation from a real shift worth investigating. Managers learn to ask what changed only when the chart says something did.

                ## Milestones
                1. Control limits calculated from at least 20 weeks of stable history for three measures.
                2. Simple rules written for what counts as a signal, such as a point outside the limits or eight in a row on one side.
                3. Charts updated weekly and each signal noted with its investigation.
                4. Limits recalculated after a confirmed process change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three control charts with written signal rules are updated weekly for a quarter, and every signal has a recorded explanation."
                cadence: rolling
              tasks:
                - "Choose three weekly measures that most often prompt questions"
                - "Calculate control limits from at least 20 weeks of history"
                - "Update the charts and note any signal with what caused it @recurring(weekly:wed)"
            - name: Annual review of operating model assumptions
              description: |-
                ## Purpose
                Capacity plans, rosters and SLA calculations all rest on a few assumptions: handling time per work type, shrinkage, occupancy ceiling, arrival pattern and the mix of work. These drift as products, systems and staff change, and plans built on last year's figures fail without anyone seeing why. A yearly check of each assumption against measured data, with a change log, keeps the models anchored.

                ## Milestones
                1. Every assumption used in planning listed with its current value and source.
                2. Each assumption compared with the last twelve months of measured data.
                3. Assumptions that have moved updated, with old and new values logged.
                4. Planning owners told which numbers changed and how that affects their plans.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated assumptions log shows every planning assumption checked against the last year's data, with changed values and owners notified."
                cadence: cyclic
              tasks:
                - "List every assumption used in the capacity and roster models"
                - "Compare each assumption with the last twelve months of data @recurring(yearly)"
                - "Log old and new values for every assumption that changed"
                - "Tell each planning owner which numbers moved"
            - name: Little's Law and utilisation for operations
              description: |-
                ## Purpose
                Two ideas explain most of what puzzles people about queues: Little's Law, which links work in progress, throughput and time in the system, and the steep rise in waiting as utilisation approaches 100 percent. Learning both well enough to explain them with your own data means you can show a manager why running a team at 95 percent busy produces long waits, instead of arguing from opinion.

                ## Milestones
                1. Little's Law worked through with figures from your own operation.
                2. The waiting time curve against utilisation sketched for one queue.
                3. A one-page explanation written for a manager who is not an analyst.
                4. The explanation used once in a real staffing conversation.

                ## Notes
                Little's Law holds for averages over a stable period. It says nothing about the spread of waits, so do not use it to promise a 90th percentile.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page explanation of Little's Law and the utilisation curve, built on your own data, has been used in a staffing discussion."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read an introductory chapter on Little's Law and queue utilisation"
                - "Work through Little's Law using a month of your own data"
                - "Sketch how waiting time rises as utilisation passes 80 percent"
                - "Write a one-page explanation for a manager who is not an analyst"
            - name: Erlang C staffing calculations
              description: |-
                ## Purpose
                Contact centres and other queues where work must be answered quickly have used the Erlang C formula for decades to turn arrivals, handling time and a service level target into the number of staff needed in each interval. Learning to run it in a spreadsheet, and knowing its assumptions such as no abandonment and identical staff, lets you check a roster or challenge a supplier's figures yourself.

                ## Milestones
                1. The inputs understood: arrival rate, handling time, target answer time and service level.
                2. Staff required calculated for one busy interval and checked against a published calculator.
                3. The effect of abandonment and multi-skilling on the result explained in a paragraph.
                4. Required staff calculated for a full day of intervals from your arrival profile.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working Erlang C spreadsheet gives required staff for every interval of a typical day and matches a published calculator on a test case."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a plain explanation of the Erlang C formula and its assumptions"
                - "Calculate staff needed for one busy interval in a spreadsheet"
                - "Check the answer against a free online Erlang calculator"
                - "Run the calculation for every interval in a typical day"
            - name: Theory of constraints and finding the bottleneck
              description: |-
                ## Purpose
                Every process has one step that limits how much it can finish, and improvements made anywhere else mostly add queues. The theory of constraints gives a practical routine: find the constraint, make sure it never stands idle, subordinate other steps to it, then lift it. Learning to spot the constraint in data, by where work piles up and which step is busiest, stops effort going into steps that do not matter.

                ## Milestones
                1. The five focusing steps written in your own words.
                2. Queue length and utilisation compared across every step of one process.
                3. The current constraint named, with the evidence for it.
                4. One way to protect the constraint's time proposed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The constraint in one real process is named with queue and utilisation evidence, and one change to protect it has been proposed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a summary of the theory of constraints and its five focusing steps"
                - "Compare queue size and busy time for every step in one process"
                - "Name the likely constraint and write down the evidence"
                - "Propose one change that stops the constraint waiting for work"
            - name: Lead time, touch time and flow efficiency
              description: |-
                ## Purpose
                In many office processes an item spends a few hours being worked on and several weeks waiting between steps. Lead time, touch time and flow efficiency make that visible, and learning to measure them from an event log gives the team a number for how much of its elapsed time is waiting. It is one of the most persuasive findings an analyst can bring.

                ## Milestones
                1. Lead time and touch time defined for one process and measured from the event log.
                2. Flow efficiency calculated as touch time over lead time for each work type.
                3. The three longest waiting steps identified.
                4. One chart showing working and waiting time per step.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Flow efficiency is calculated for each work type in one process, with the three longest waits shown on a single chart."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short introduction to lean flow measures for office processes"
                - "Measure lead time and touch time for one work type"
                - "Calculate flow efficiency and find the three longest waits"
                - "Draw one chart of working versus waiting time by step"
            - name: Percentiles and long tails in operations data
              description: |-
                ## Purpose
                Waits and handling times are rarely bell-shaped: they have long right tails, and a mean that looks fine can hide a tenth of customers waiting days. Learning to report medians and percentiles, to read a histogram of waits, and to explain why a target written as an average is easy to meet while failing many people, changes which numbers the operation manages to.

                ## Milestones
                1. Histograms drawn for wait time and handling time in one queue.
                2. Mean, median, 90th and 95th percentile compared for each.
                3. Existing targets checked for whether they are written as averages or percentiles.
                4. A recommendation written on which percentile each target should use.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written recommendation names the percentile each service target should use, backed by histograms and summary figures for one queue."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draw a histogram of wait times for one queue"
                - "Compare mean, median and 90th percentile for waits and handling time"
                - "Check whether each current target uses an average or a percentile"
                - "Write a recommendation on which percentile each target should use"
            - name: Process mining fundamentals
              description: |-
                ## Purpose
                Process mining tools read an event log and draw the process as it actually ran, with every path, loop and variant counted. Learning the basics on an open-source tool or a free tier, with your own extract, shows how many variants your neat process really has and where the rework loops sit. It complements the walk-through map with evidence at full volume.

                ## Milestones
                1. One process mining tool installed or trialled with a sample event log.
                2. Your own event log loaded with case id, activity and timestamp mapped.
                3. The most common variants and their share of cases listed.
                4. The mined process compared with the walk-through map and differences noted.

                ## Notes
                Check with your data protection lead before loading a log into a hosted tool. A local open-source tool avoids the question.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your own event log has been mined, the top ten variants are listed with their share of cases, and differences from the walk-through map are noted."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose an open-source or free-tier process mining tool to trial"
                - "Load the event log with case id, activity and timestamp mapped"
                - "List the ten most common process variants and their share of cases"
                - "Compare the mined process with your walk-through map"
            - name: Variability and why it creates queues
              description: |-
                ## Purpose
                Two teams with the same workload and staff can have very different waits, because variability in arrivals and handling times creates queues on its own. Kingman's formula shows that waiting depends on utilisation multiplied by variability, which explains why smoothing arrivals or standardising awkward work can cut waits as much as adding staff. Learning it gives you a second lever to offer besides headcount.

                ## Milestones
                1. The coefficient of variation calculated for arrivals and handling time in one queue.
                2. Kingman's approximation used to estimate waiting time and checked against measured waits.
                3. The effect on waiting time of halving handling time variability estimated.
                4. One practical way to reduce variability proposed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Kingman estimate for one queue is compared with measured waits, and one variability reduction is proposed with its expected effect."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read an explanation of Kingman's formula for queue waiting time"
                - "Calculate the coefficient of variation for arrivals and handling time"
                - "Estimate waiting time with the formula and compare it with measured waits"
                - "Propose one way to reduce variability in the queue"
            - name: Bottleneck relief trial at the constraint
              description: |-
                ## Purpose
                Once the constraint is known, small changes there pay back across the whole process: removing non-essential tasks from the bottleneck team, checking work is complete before it reaches them, or holding a small buffer so they never wait. Running one such change as a time-boxed trial, with throughput measured before and after, turns the theory into a result the operation can see.

                ## Milestones
                1. One change at the constraint chosen and agreed with the team who work there.
                2. Four weeks of throughput and constraint idle time measured before the change.
                3. The change run for four weeks with the same measures.
                4. A decision recorded to keep, adjust or drop the change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Throughput and constraint idle time are compared over four weeks before and four weeks after one change, with a keep or drop decision recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree one change at the constraint step with the team who work there"
                - "Measure throughput and constraint idle time for four weeks before"
                - "Run the change for four weeks with the same measures"
                - "Record the decision to keep, adjust or drop the change"
            - name: Shift pattern redesign against the arrival curve
              description: |-
                ## Purpose
                Shift patterns tend to be inherited: nine to five because it always was, with lunch at one because that suits people. Comparing staff on shift with the arrival profile interval by interval usually shows a mismatch, such as overcover mid-afternoon and a gap before nine. Designing two or three alternative patterns, and testing them on paper first, can lift service levels without extra headcount.

                ## Milestones
                1. Staff on shift plotted against required staff for each interval of a typical week.
                2. Two or three alternative shift patterns drafted within contract and working time rules.
                3. Each pattern scored on service level, overcover and staff preferences.
                4. A preferred pattern agreed with the manager and staff representatives, with a start date.

                ## Notes
                Shift changes affect people's lives outside work. Consult staff early, and check contracts and working time rules with HR before proposing anything.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A new shift pattern, scored against at least two alternatives on cover and staff preference, is agreed with staff representatives and dated."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Plot staff on shift against required staff by interval"
                - "Check contract and working time rules with HR before drafting options"
                - "Draft three alternative shift patterns and score each"
                - "Ask staff representatives for their views on the shortlisted patterns"
            - name: Queue priority and routing rules review
              description: |-
                ## Purpose
                Rules about which work is picked up first, and which team it is sent to, shape wait times as much as staffing does, yet they are often set once and never checked. First in, first out can let urgent work wait; strict priority can leave low-priority items waiting indefinitely. Reviewing the rules against the data, and replaying one or two alternatives, shows whether the order work is taken in matches what the business values.

                ## Milestones
                1. Current priority and routing rules written down as they actually operate.
                2. Wait times by priority class and routing path measured.
                3. Items that waited longest under the current rules examined for a pattern.
                4. One or two alternative rules tested on historical data and a recommendation made.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recommendation on priority and routing rules is recorded, supported by waits by class and a replay of at least one alternative rule."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write down the priority and routing rules as they really work"
                - "Measure waits by priority class and routing path"
                - "Replay last month's arrivals under one alternative rule"
                - "Recommend whether to keep or change the rules, with the evidence"
                - "Review the priority rules against the latest wait data @recurring(yearly)"
            - name: Service level target reset with the business
              description: |-
                ## Purpose
                Service level targets are often picked because they sound good, such as 80 percent answered in 20 seconds, with no idea what they cost. Showing the business the staff hours needed for three or four target levels, and what customers or downstream teams gain at each, turns the target into a priced choice. The agreed target then becomes something the operation can plan to rather than apologise for.

                ## Milestones
                1. Required staff hours calculated for three or four candidate service level targets.
                2. The cost of each level set beside its effect on waits and abandonment.
                3. A target chosen and recorded by the business owner, with the reasons.
                4. Rosters and reports updated to the new target.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The business owner has chosen a service level target from priced options, and the decision and reasons are recorded and reflected in rosters."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Calculate staff hours needed for four candidate service level targets"
                - "Estimate the effect of each level on waits and abandonment"
                - "Present the priced options to the business owner"
                - "Record the chosen target and the reasons for it"
                - "Revisit the target with the business owner @recurring(yearly)"
            - name: Automation business case for a manual step
              description: |-
                ## Purpose
                Proposals to automate a manual step often promise savings based on how long the step takes on paper, rather than the hours really spent, the exceptions it handles or what happens to the time freed. Building the case from measured volumes, handling times and exception rates gives a realistic saving, and shows whether the step is on the constraint, where saved time turns into throughput.

                ## Milestones
                1. Volume, handling time and exception rate for the step measured from the event log.
                2. Annual hours spent on the step, including exceptions and rework, calculated.
                3. Realistic savings estimated, with the exceptions that will still need people.
                4. The case recorded, stating whether the step is on the constraint.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A business case based on measured volume, handling time and exception rate states the realistic hours saved and whether the step is the constraint."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Measure volume, handling time and exception rate for the step"
                - "Calculate annual hours including exceptions and rework"
                - "Estimate the hours that remain after automation for exceptions"
                - "Ask the agent to draft the business case summary from your figures"
            - name: Outsourcing a work queue decision
              description: |-
                ## Purpose
                Moving a work queue to an outside provider can free capacity, but a price per item quoted against your average handling time can miss the rework, handoffs and management time that come with it. Comparing in-house cost per item with the provider's offer on the same basis, including the volume that will bounce back, gives a decision that still holds up a year later.

                ## Milestones
                1. In-house cost per item calculated, including management, systems and rework.
                2. Provider proposals compared on the same unit of work and service level.
                3. Expected bounce-back volume and handoff delay estimated.
                4. A decision recorded with the measures that will be used to review it after six months.

                ## Notes
                Start from the **Vendor** template for each provider you assess.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An outsourcing decision is recorded with in-house and provider costs on the same unit of work and the measures for a six-month review."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Calculate in-house cost per item including management and rework"
                - "Put each provider's price on the same unit of work as yours"
                - "Estimate how much work will come back to the in-house team"
                - "Record the decision and the measures for a six month review"
            - name: Cross-skilling plan from a skills matrix
              description: |-
                ## Purpose
                When only two people can handle a work type, their leave sets the service level for that queue. Mapping who can do what against the volume and variability of each queue shows where a little cross-training would cut waits most, and gives the roster more room to move on bad days.

                ## Milestones
                1. A matrix of every team member against every work type, marked trained, learning or not trained.
                2. Queues with fewer than three trained people flagged.
                3. Training priorities ranked by queue volume and the waits each gap causes.
                4. Three cross-training placements completed and the matrix updated.

                ## Notes
                Start from the **Skills matrix** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A current skills matrix shows every queue with at least three trained people, or a dated training placement for each gap."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a skills matrix of team members against work types"
                - "Flag queues with fewer than three trained people"
                - "Rank cross-training by queue volume and the waits each gap causes"
                - "Update the skills matrix after each training placement @recurring(quarterly)"
            - name: Before and after study of a process change
              description: |-
                ## Purpose
                Changes to a process are usually declared successful because the week after looked better, even when volumes simply fell. A before and after study that fixes the measures in advance, uses enough weeks on each side, and checks against a comparison team or the same period last year gives an honest answer about whether the change worked.

                ## Milestones
                1. The change, its start date and the measures it should move written down before it starts.
                2. At least six weeks of baseline data collected.
                3. A comparison team or prior-year period chosen to account for seasonality and volume.
                4. A result written up with the size of the effect and any doubts.

                ## Notes
                Where you can stagger a rollout across teams, do it. It turns a guess into something much closer to a fair comparison.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A write-up of one process change gives the effect size against a comparison group or prior year, using measures fixed before the change."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down the change and the measures it should move before it starts"
                - "Collect at least six weeks of baseline data"
                - "Choose a comparison team or the same period last year"
                - "Write up the effect size with the reasons it might be wrong"
            - name: Cost to serve by work type
              description: |-
                ## Purpose
                Some work types take five times the effort of others but are priced, staffed and reported as if they were the same. Combining volumes and handling times with the hourly cost of each role gives a cost per item by work type and channel, which shows where effort really goes and where simplification or a channel shift would save most.

                ## Milestones
                1. Fully loaded hourly cost for each role agreed with finance.
                2. Handling minutes per item, including rework, for each work type and channel.
                3. Cost per item and total cost by work type calculated.
                4. The three work types with the highest total cost shown with options to reduce it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Cost per item and total cost are calculated for every work type and channel, using hourly rates agreed with finance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree a fully loaded hourly cost per role with finance"
                - "Calculate handling minutes per item including rework by work type"
                - "Work out cost per item and total cost by work type and channel"
                - "Present the three costliest work types with options to reduce them"
            - name: Peak season capacity readiness plan
              description: |-
                ## Purpose
                Peaks such as year-end, enrolment, a sales event or winter demand are predictable, yet operations still meet them with overtime and apologies. Planning eight to twelve weeks ahead, with expected volumes, required staff by week, temporary hires and their training time, and work that can be paused, turns the peak into a plan with checkpoints.

                ## Milestones
                1. Peak weeks and expected volume uplift agreed from last year's actuals and this year's plans.
                2. Required staff by week compared with available staff, including temporary hires.
                3. Training and system access for temporary staff booked before the peak starts.
                4. Non-urgent work that will pause during the peak agreed with stakeholders.
                5. A short review after the peak recording what to change next year.

                ## Notes
                Start from the **Operational checklist** template for the readiness checks.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A weekly staffing plan for the peak, with temporary staff trained before week one and a post-peak review written within a month of the end."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pull last year's peak volumes by week from the event log"
                - "Calculate the staff gap for each peak week"
                - "Book training and system access for temporary staff"
                - "Agree which non-urgent work pauses during the peak"
                - "Start peak planning twelve weeks before the season @recurring(yearly)"
            - name: Operations measures for a new site go-live
              description: |-
                ## Purpose
                New sites, teams and service lines have no history, so their first weeks are judged on hunches and loud complaints. Agreeing the measures, expected values for the ramp-up and a daily then weekly reporting rhythm before go-live means early problems show up in numbers, and the ramp-up can be compared with plan.

                ## Milestones
                1. Six to eight ramp-up measures chosen, with expected values for weeks one, four and twelve.
                2. Data feeds tested before go-live so day one is measured.
                3. Daily reporting through the first two weeks, then weekly.
                4. A twelve-week review comparing the ramp-up with plan.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The new site is measured from day one against expected values, and a twelve-week ramp-up review against plan has been delivered."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose the ramp-up measures and expected values for weeks one, four and twelve"
                - "Test the data feeds from the new site before go-live"
                - "Send a daily summary for the first two weeks after go-live"
                - "Hold a twelve-week review against the ramp-up plan"
            - name: Reporting continuity through a system migration
              description: |-
                ## Purpose
                Replacing a ticketing, case or warehouse system usually changes statuses, timestamps and work type codes, and years of trend lines can break overnight. Mapping old fields to new before cutover, running both in parallel for a few weeks, and marking the break in every chart keeps the operation able to compare this year with last.

                ## Milestones
                1. A mapping from old statuses, work types and timestamps to the new system's equivalents.
                2. Measures calculated in both systems in parallel for at least two weeks.
                3. Differences between the two explained and recorded.
                4. Every long-run chart marked with the cutover date and any definition change.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A field mapping and a two-week parallel run reconcile the main measures across both systems, and every long-run chart shows the cutover."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Get the new system's status and work type lists from the project team"
                - "Map each old status and work type to its new equivalent"
                - "Calculate the main measures in both systems during the parallel run"
                - "Mark the cutover date on every long-run operations chart"
            - name: Annual headcount case for the operations budget
              description: |-
                ## Purpose
                Budget rounds reward the manager who arrives with a calculation rather than a feeling. Building next year's headcount request from expected volumes, handling times, shrinkage, attrition and the agreed service level, and showing what happens to waits if the request is cut, gives finance a case they can test and the operation a defensible number.

                ## Milestones
                1. Next year's volume assumption agreed with whoever owns the demand forecast.
                2. Required headcount calculated by role from volumes, handling time, shrinkage and target.
                3. Attrition and time to competence for new hires built in.
                4. The effect on waits of funding 10 and 20 percent less shown beside the request.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A headcount request by role, built from volumes, handling time, shrinkage and attrition, shows waits at two lower funding levels."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree next year's volume assumption with the forecast owner"
                - "Calculate required headcount by role from volumes and handling time"
                - "Add attrition and the months new hires take to reach full speed"
                - "Show finance the wait times if the request is cut"
                - "Start the headcount case two months before budget submissions @recurring(yearly)"
            - name: Backlog recovery plan after a disruption
              description: |-
                ## Purpose
                System outages, storms, strikes and sudden surges can leave a backlog weeks deep, and the instinct is to throw overtime at it without a finish date. A recovery plan calculates how long the backlog will take to clear at different staffing levels, decides which items go first, and tracks daily progress against the line, so the business gets an honest date.

                ## Milestones
                1. Backlog size and age profile measured on the day the disruption ends.
                2. Clear-down time calculated for two or three staffing options.
                3. Priority order for the backlog agreed, with any customer communication.
                4. Daily progress tracked against the plan until the backlog is back to normal.

                ## Notes
                New work keeps arriving during recovery. Clear-down speed is the capacity left after new arrivals, not total capacity.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The backlog returns to its normal size by a date calculated at the start, with daily progress recorded against the recovery line."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure backlog size and age on the day the disruption ends"
                - "Calculate clear-down time using capacity left after new arrivals"
                - "Agree which backlog items are cleared first"
                - "Track the backlog daily against the recovery line"
            - name: First 90 days as an operations analyst
              description: |-
                ## Purpose
                Analysts new to an operations team are often handed a stack of reports and asked to keep them running before they understand how the work flows. Using the first three months to sit with the front line, learn the systems and their quirks, and deliver one small analysis that a manager acts on builds the credibility every later project depends on.

                ## Milestones
                1. A day spent with front-line staff in each main team within the first month.
                2. Every inherited report listed with its audience and whether it is used.
                3. One analysis answering a manager's live question delivered by day 60.
                4. A plan for the next six months agreed with your manager by day 90.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "By day 90 you have shadowed every main team, delivered one analysis a manager acted on, and agreed a six-month plan."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Book a day shadowing front-line staff in each main team"
                - "List every inherited report with its audience and last use"
                - "Ask your manager which live question they most want answered"
                - "Agree a six month plan with your manager by day 90"
            - name: New operations manager's data baseline
              description: |-
                ## Purpose
                Managers taking over an operation inherit its numbers along with its problems, and the first months are the only time a change in performance can be cleanly separated from what came before. Recording a baseline of volumes, service levels, backlog, cycle time and shrinkage in the first weeks, with the data sources, gives a fair starting point and the right questions to ask the team.

                ## Milestones
                1. Six to eight core measures recorded for the three months before you took over.
                2. The source and definition of each figure confirmed with the analyst who produces it.
                3. The three weakest measures chosen as early questions for the team.
                4. A baseline note filed and dated for comparison at six and twelve months.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated baseline note holds three months of core measures with confirmed sources, ready for comparison at six and twelve months."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the analyst for three months of core operations measures"
                - "Confirm the source and definition behind each figure"
                - "Pick the three weakest measures to discuss with team leaders"
                - "File the dated baseline note for your six month review"
            - name: Contact centre interval analytics
              description: |-
                ## Purpose
                Contact centres generate more operations data than almost any other setting: interval arrivals, answer times, abandonment, handling time split into talk, hold and wrap, occupancy and adherence. For analysts and managers here, a core set of interval measures read together, rather than one at a time, shows whether a bad day was demand, staffing or handling time, and stops the floor being run on service level alone.

                ## Milestones
                1. Interval arrivals, answered, abandoned, answer time and handling time available for each queue.
                2. Handling time split into talk, hold and after-call work.
                3. Occupancy tracked against an agreed ceiling to protect staff from burnout.
                4. Each week's missed intervals summarised by cause: demand, staffing or handling time.

                ## Notes
                Abandoned contacts are demand too. Leaving them out understates what the next interval needs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly summaries attribute every missed interval to demand, staffing or handling time, with occupancy kept under the agreed ceiling."
                cadence: rolling
              tasks:
                - "Pull interval data for arrivals, answered, abandoned and answer time"
                - "Split handling time into talk, hold and after-call work"
                - "Agree an occupancy ceiling with the contact centre manager"
                - "Summarise the week's missed intervals by cause @recurring(weekly:tue)"
            - name: Warehouse and fulfilment flow analytics
              description: |-
                ## Purpose
                In a warehouse, orders queue at receiving, putaway, picking, packing and dispatch, and a slow step shows up as a missed carrier cut-off rather than a visible queue. Measuring units per labour hour at each step, dock-to-stock time and order cycle time against the cut-off shows where the floor really slows down, and helps managers plan labour by hour for each zone.

                ## Milestones
                1. Units per labour hour measured for receiving, picking, packing and dispatch.
                2. Dock-to-stock time measured from arrival at the dock to available to pick.
                3. Order cycle time from order drop to dispatch compared with carrier cut-offs.
                4. The hourly labour plan by zone adjusted to the step that limits dispatch.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly cut-off performance is tracked for two months, and the hourly labour plan has been changed to support the step that limits dispatch."
                cadence: rolling
              tasks:
                - "Measure units per labour hour at each warehouse step"
                - "Calculate dock-to-stock time from receipt and putaway scans"
                - "Compare order cycle time with each carrier cut-off"
                - "Check the share of orders that missed their cut-off @recurring(weekly:fri)"
            - name: Clinic patient flow analysis
              description: |-
                ## Purpose
                Clinics, outpatient departments and diagnostic services lose capacity to no-shows, late starts, uneven booking templates and patients waiting between steps. Analysing waits between check-in, assessment and consultation, along with session start and finish times, shows where minutes are lost and gives clinic managers evidence for template and booking changes without asking clinicians to work faster.

                ## Milestones
                1. Timestamps for check-in, each step and departure extracted for eight weeks of sessions.
                2. Waits between steps measured by session and clinic type.
                3. Late starts, overruns and no-show rates calculated by session.
                4. One booking template change proposed with its expected effect on waits.

                ## Notes
                Patient data is sensitive. Work with the information governance lead, use the minimum fields needed, and keep results aggregated and non-identifiable.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Eight weeks of step-to-step waits, late starts and no-shows are analysed under an approved data use, with one template change proposed."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Ask the information governance lead what patient data you may use"
                - "Extract check-in, step and departure times for eight weeks"
                - "Measure waits between steps and late starts by session"
                - "Propose one booking template change and its expected effect"
            - name: Back-office case processing analytics
              description: |-
                ## Purpose
                Claims, applications, onboarding and accounts payable teams process cases that wait on documents, approvals and other teams, so much of the elapsed time sits outside the team's control. Splitting cycle time into time with the team, time waiting on the customer and time with other departments shows managers which delays they own and which need a conversation elsewhere.

                ## Milestones
                1. Each status classified as with the team, waiting on the customer or with another team.
                2. Cycle time split into those three parts for each case type.
                3. Cases that bounced between teams more than twice counted and sampled.
                4. The largest external delay raised with the other team's manager, with data.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Cycle time for every case type is split into team, customer and other-team time, and the largest external delay has been raised with data."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Classify each case status by who holds the case"
                - "Split cycle time into team, customer and other-team time by case type"
                - "Sample cases that bounced between teams more than twice"
                - "Share the largest external delay with the other team's manager"
            - name: Field service first-time fix analysis
              description: |-
                ## Purpose
                For engineers and technicians working at customer sites, a repeat visit costs a whole extra trip and a customer's day. Analysing first-time fix rate by job type, engineer skill, parts availability and appointment slot shows whether repeat visits come from missing parts, wrong diagnosis at booking or skills gaps, each of which has a different fix.

                ## Milestones
                1. First-time fix rate calculated by job type and month for the last six months.
                2. Repeat visits coded by reason: parts, diagnosis, skills, access or customer.
                3. Jobs per engineer per day and the share of time spent travelling measured.
                4. The largest repeat-visit reason assigned to an owner with a target.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six months of first-time fix rates by job type are calculated, repeat visits are coded by reason, and the top reason has an owner and target."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Calculate first-time fix rate by job type for six months"
                - "Code a sample of repeat visits by reason"
                - "Measure jobs per engineer per day and the share of time travelling"
                - "Assign the biggest repeat-visit reason to an owner"
            - name: Discrete-event simulation of the operation
              description: |-
                ## Purpose
                Spreadsheet capacity models assume averages, and averages cannot show what happens when arrivals bunch, a skilled person is off and urgent work jumps the queue all at once. A discrete-event simulation that replays arrivals through the real steps, staffing and priority rules lets you test a new roster, routing rule or extra step before anyone has to live with it.

                ## Milestones
                1. Process structure, arrival pattern, handling time distributions and rules defined from your own data.
                2. A simulation built in a dedicated tool or a programming library.
                3. The model validated against a past month, reproducing waits and throughput within an agreed margin.
                4. At least two proposed changes tested and their results recorded with the model's limits.

                ## Notes
                A model that cannot reproduce a known month is not ready to predict an unknown one. Validate before showing anyone a scenario.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A simulation reproduces a past month's waits and throughput within the agreed margin and has been used to test two proposed changes."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the model specification from the process map and event log"
                - "Fit handling time distributions for each step"
                - "Build the simulation and run it against last month's arrivals"
                - "Test two proposed changes and record the results with caveats"
            - name: Roster optimisation with integer programming
              description: |-
                ## Purpose
                When an operation has dozens of shift patterns, part-time contracts, skills and break rules, finding the best roster by hand is out of reach. Formulating it as an integer programme, minimising understaffing and cost subject to contract and working time rules, and solving it with an open-source solver, can find rosters a planner would never try. The value lies in a model the planners trust and can rerun.

                ## Milestones
                1. Required staff by interval and skill taken from the capacity model.
                2. Shift patterns, contract hours, break and working time rules written as constraints.
                3. A solver producing a feasible roster for one typical week.
                4. The solver roster compared with the planner's roster on cover, cost and staff preferences.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A solver-built roster for one typical week meets every contract rule and is compared with the planner's roster on cover and cost."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every rule a valid roster must meet, with the planners"
                - "Formulate the roster as an integer programme in an open-source solver"
                - "Solve one typical week and check the roster is feasible"
                - "Compare the solver roster with the planner's on cover and cost"
            - name: Mix-adjusted performance comparison across sites
              description: |-
                ## Purpose
                Ranking sites or teams on raw productivity punishes the ones that get the hardest work, and managers soon learn to argue about the league table instead of improving. Adjusting for case mix, channel and complexity before comparing, and showing ranges rather than single ranks, gives senior managers a comparison that sites accept and that points to practices worth copying.

                ## Milestones
                1. The work mix at each site measured by type, channel and complexity.
                2. Expected handling time and output calculated for each site from its own mix.
                3. Actual performance compared with expected, with uncertainty ranges.
                4. Two sites performing above expectation visited to document what they do differently.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A mix-adjusted comparison of all sites, with uncertainty ranges, is refreshed each quarter, and two above-expectation sites' practices are written up."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Measure each site's work mix by type, channel and complexity"
                - "Calculate each site's expected output from its own work mix"
                - "Compare actual with expected output and show uncertainty ranges"
                - "Repeat the mix-adjusted comparison with the latest quarter @recurring(quarterly)"
                - "Visit the two best adjusted sites to note their practices"
---

# Operations Analytics

Operations analytics is the use of data to staff, schedule and run the work that flows through a team, written for the analyst who supports an operation and the manager who runs one. The projects start with foundations (the decisions to serve, a walk-through process map, an event log and baselines for arrivals, handling time, flow, service levels and capacity), move through the operating rhythm and queueing skills, then improvements and decisions such as shift redesign and service level targets, dated events like peak season and system migrations, settings from contact centres and warehouses to clinics and field service, and specialist work on simulation, roster optimisation and fair site comparison.

What repeats is a daily intraday queue check, weekly staffing, backlog ageing and control chart reviews, a monthly performance pack with breach, shrinkage and failure demand reviews, a quarterly capacity plan, and a yearly check of planning assumptions, service targets and peak preparation. The Metrics log, Remediation plan, Vendor, Skills matrix, Operational checklist and Onboarding 30/60/90 templates pair with the projects that point to them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
